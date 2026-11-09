"""Preserve HTML table content and cell line breaks in the PDF edition."""

from copy import copy
from io import BytesIO
from pathlib import Path
import re

from bs4 import BeautifulSoup, NavigableString
from docutils import nodes
from docutils.utils import new_document
from myst_parser.parsers.sphinx_ import MystParser
from PIL import Image, ImageCms, PngImagePlugin
from sphinx.transforms.post_transforms import SphinxPostTransform


def _emphasis(content, marker):
    # HTML permits a line break inside emphasis; Markdown delimiters cannot
    # straddle the resulting paragraph or start/end against whitespace.
    return ''.join(part if '\n' in part else marker + part.strip() + marker
                   for part in re.split(r'( *\n+ *)', content) if part.strip() or '\n' in part)


def _markdown(element):
    """Keep the inline formatting of the handbook's HTML table cells."""
    if isinstance(element, NavigableString):
        text = re.sub(r'\s+', ' ', str(element))
        return re.sub(r'\((\\(?:gamma|alpha|beta|theta))\)', r'$(\1)$', text)
    content = ''.join(_markdown(child) for child in element.children)
    tag = element.name
    if tag in ('strong', 'b'):
        return _emphasis(content, '**')
    if tag in ('em', 'i'):
        classes = element.get('class', [])
        if 'fa-check' in classes:
            return '✓'
        if 'fa-times' in classes:
            return '×'
        return _emphasis(content, '*') if content.strip() else ''
    if tag in ('sub', 'sup'):
        return '{' + tag + '}`' + content.strip() + '`'
    if tag == 'br':
        return '  \n'
    if tag in ('p', 'div'):
        return '\n\n' + content.strip() + '\n\n'
    if tag == 'table':
        # Nested HTML tables are layout helpers; retain their text in the cell.
        return '\n\n'.join(' — '.join(cell.get_text(' ', strip=True)
                                    for cell in row.find_all(['td', 'th'], recursive=False))
                             for row in element.find_all('tr'))
    return content


def _html_table(html, parse_cell):
    """Convert HTML spans to docutils spans, including occupied rowspan slots."""
    source = BeautifulSoup(html, 'html.parser').find('table')
    rows = [row for row in source.find_all('tr') if row.find_parent('table') is source]
    grid = []
    occupied = set()
    weights = {}
    columns = 0
    for row_number, row in enumerate(rows):
        entries = []
        column = 0
        for cell in row.find_all(['th', 'td'], recursive=False):
            width = int(cell.get('colspan', 1))
            while any((row_number, column + x) in occupied for x in range(width)):
                column += 1
            height = min(int(cell.get('rowspan', 1)), len(rows) - row_number)
            entry = nodes.entry(morecols=width - 1, morerows=height - 1)
            entry.extend(parse_cell(_markdown(cell)))
            entries.append((column, entry))
            if width == 1:
                words = re.findall(r'[A-Za-z0-9]+', cell.get_text(' ', strip=True))
                weights[column] = max(weights.get(column, 2),
                                      min(len(cell.get_text(' ', strip=True)), 300) ** 0.5,
                                      max(map(len, words), default=0) * 0.65)
            for y in range(row_number, row_number + height):
                for x in range(column, column + width):
                    occupied.add((y, x))
            column += width
        columns = max(columns, column)
        grid.append((row, entries))

    group = nodes.tgroup(cols=columns)
    for column in range(columns):
        group += nodes.colspec(colwidth=round(weights.get(column, 4) * 10))
    head = nodes.thead()
    body = nodes.tbody()
    for index, (html_row, entries) in enumerate(grid):
        row = nodes.row()
        positioned = dict(entries)
        column = 0
        while column < columns:
            if column in positioned:
                entry = positioned[column]
                row += entry
                column += entry['morecols'] + 1
            else:
                if (index, column) not in occupied:
                    row += nodes.entry('', nodes.paragraph())
                column += 1
        if index == 0 and html_row.find('th'):
            head += row
        else:
            body += row
    if head.children:
        group += head
    group += body
    return group


class PdfTables(SphinxPostTransform):
    # Run before reference resolution, so MyST roles within HTML cells work too.
    default_priority = 5
    formats = ('latex',)

    def run(self, **kwargs):
        for table in list(self.document.findall(nodes.table)):
            raw_tables = [raw for raw in table.findall(nodes.raw)
                          if raw.get('format') == 'html' and '<table' in raw.astext()]
            # A number of source list-tables wrap one HTML table in a single cell.
            if len(raw_tables) == 1 and len(list(table.findall(nodes.entry))) == 1:
                raw = raw_tables[0]
                source = raw.source or table.source or self.document['source']
                docname = self.env.path2doc(source) or self.env.docname

                def parse_cell(text):
                    document = new_document(source, settings=copy(self.document.settings))
                    previous = self.env.temp_data.get('docname')
                    self.env.temp_data['docname'] = docname
                    try:
                        MystParser().parse(text.strip(), document)
                    finally:
                        self.env.temp_data['docname'] = previous
                    return document.children

                group = _html_table(raw.astext(), parse_cell)
                table.replace(next(table.findall(nodes.tgroup)), group)
                table['classes'] = ['colwidths-given']

            # Paragraph breaks must stay inside their cell; \\ ends a TeX row.
            for raw in list(table.findall(nodes.raw)):
                if raw.get('format') == 'latex' and raw.astext().strip() == r'\\':
                    raw.replace_self(nodes.raw('', r'\newline{}', format='latex'))
                elif raw.get('format') == 'html' and re.fullmatch(r'<br\s*/?>', raw.astext().strip()):
                    siblings = raw.parent.children
                    index = siblings.index(raw)
                    following = siblings[index + 1] if index + 1 < len(siblings) else None
                    # MyST hard breaks already have paired HTML and LaTeX nodes.
                    paired = (isinstance(following, nodes.raw)
                              and following.get('format') == 'latex'
                              and following.astext().strip() == r'\\')
                    if not paired:
                        raw.replace_self(nodes.raw('', r'\newline{}', format='latex'))
            for entry in table.findall(nodes.entry):
                for paragraph in entry.findall(nodes.paragraph):
                    paragraph.insert(0, nodes.raw('', r'\RaggedRight{}', format='latex'))
                # Permit identifiers such as STD_001 and input-variable names
                # to wrap at their separators without changing their text.
                for text in list(entry.findall(nodes.Text)):
                    ancestor = text.parent
                    protected = False
                    while ancestor is not entry:
                        if isinstance(ancestor, (nodes.math, nodes.math_block,
                                                 nodes.literal, nodes.literal_block, nodes.raw)):
                            protected = True
                            break
                        ancestor = ancestor.parent
                    if not protected and re.search(r'[_/\-]', str(text)):
                        pieces = []
                        for part in re.split(r'([_/\-])', str(text)):
                            if part:
                                pieces.append(nodes.Text(part))
                                if part in ('_', '/', '-'):
                                    pieces.append(nodes.raw('', r'\allowbreak{}', format='latex'))
                        text.parent.replace(text, pieces)

            columns = next(table.findall(nodes.tgroup))['cols']
            landscape = columns >= 9 or 'pdf-landscape' in table['classes']
            if len(list(table.findall(nodes.row))) > 15 or len(table.astext()) > 2500:
                if 'longtable' not in table['classes']:
                    table['classes'].append('longtable')
            if landscape and 'longtable' not in table['classes']:
                table['classes'].append('longtable')
            if columns:
                begin = r'\begingroup\small\setlength{\tabcolsep}{3pt}'
                end = r'\endgroup'
                if landscape:
                    # Long running titles do not fit the rotated portrait footer.
                    begin = r'\begin{landscape}\pagestyle{plain}' + begin
                    end += r'\end{landscape}'
                if columns >= 12:
                    begin += r'\footnotesize\setlength{\tabcolsep}{2pt}'
                parent = table.parent
                index = parent.index(table)
                parent.insert(index, nodes.raw('', begin, format='latex'))
                parent.insert(index + 2, nodes.raw('', end, format='latex'))


def _patch_class(app):
    """The upstream class loads inputenc even though it requires XeLaTeX."""
    if app.builder.format != 'latex':
        return
    path = Path(app.outdir) / 'jupyterBook.cls'
    text = path.read_text(encoding='utf-8')
    text = text.replace(r'\RequirePackage[utf8]{inputenc}', '')
    path.write_text(text, encoding='utf-8')


def _normalise_image_profiles(app, exception):
    """Convert unsupported ICC profiles in PDF build copies to standard sRGB."""
    if exception is not None or app.builder.format != 'latex':
        return
    target = ImageCms.ImageCmsProfile(ImageCms.createProfile('sRGB'))
    for filename in app.builder.images.values():
        path = Path(app.outdir) / filename
        if path.suffix.lower() != '.png':
            continue
        with Image.open(path) as image:
            profile = image.info.get('icc_profile')
            if not profile or profile[8:10] <= b'\x04\x20':
                continue
            converted = ImageCms.profileToProfile(
                image, ImageCms.ImageCmsProfile(BytesIO(profile)), target,
                outputMode=image.mode,
            )
        # Recent LittleCMS creates ICC v4.4 even for sRGB. The converted pixels
        # need only PNG's standard sRGB declaration, supported by xdvipdfmx.
        metadata = PngImagePlugin.PngInfo()
        metadata.add(b'sRGB', b'\x00')
        converted.save(path, icc_profile=None, pnginfo=metadata)


def setup(app):
    app.add_post_transform(PdfTables)
    # sphinx-jupyterbook-latex copies the class in its builder-inited callback.
    app.connect('builder-inited', _patch_class, priority=900)
    app.connect('build-finished', _normalise_image_profiles)
    return {'version': '1', 'parallel_read_safe': True, 'parallel_write_safe': True}
