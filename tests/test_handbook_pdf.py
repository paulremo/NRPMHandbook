"""Regression checks for content that previously disappeared or broke PDF tables."""

import io
from pathlib import Path
from types import SimpleNamespace
import sys
import tempfile
import unittest

from PIL import Image, ImageCms
from sphinx.application import Sphinx


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '02_NRPMHandbook/_ext'))
from handbook_pdf import _normalise_image_profiles


class PdfTableTests(unittest.TestCase):
    def test_image_profile_conversion_only_changes_pdf_build_copy(self):
        with tempfile.TemporaryDirectory(prefix='handbook-profile-test-') as temporary:
            root = Path(temporary)
            source = root / 'original.png'
            profile = ImageCms.ImageCmsProfile(ImageCms.createProfile('sRGB')).tobytes()
            Image.new('RGB', (3, 3), (40, 120, 200)).save(source, icc_profile=profile)
            original = source.read_bytes()
            output = root / 'latex'
            output.mkdir()
            (output / 'copy.png').write_bytes(original)
            app = SimpleNamespace(outdir=output,
                                  builder=SimpleNamespace(format='latex', images={'source': 'copy.png'}))
            _normalise_image_profiles(app, None)
            self.assertEqual(source.read_bytes(), original)
            with Image.open(output / 'copy.png') as image:
                self.assertNotIn('icc_profile', image.info)
                self.assertEqual(image.info['srgb'], 0)
                self.assertEqual(image.getpixel((0, 0)), (40, 120, 200))

    def test_html_tables_and_cell_breaks_survive_latex_without_changing_html(self):
        with tempfile.TemporaryDirectory(prefix='handbook-pdf-test-') as temporary:
            root = Path(temporary)
            source = root / 'source'
            source.mkdir()
            (source / 'conf.py').write_text(
                f'import sys\nsys.path.insert(0, {str(ROOT / "02_NRPMHandbook/_ext")!r})\n'
                'extensions = ["myst_parser", "sphinx_jupyterbook_latex", "handbook_pdf"]\n'
                'master_doc = "index"\n', encoding='utf-8')
            (source / 'index.md').write_text(
                '# Table regression\n\n'
                '```{list-table} HTML content\n:name: html-table\n\n'
                '* - <table><tr><th colspan="3">Heading</th></tr>'
                '<tr><td rowspan="2">Spanning cell</td><td>First</td><td>Last</td></tr>'
                '<tr><td><strong>Retained content</strong><p>STD_001</p></td></tr></table>\n```\n\n'
                '```{list-table} Line breaks\n:widths: 50 50\n\n'
                '* - First line  \n    Second line\n  - Neighbour\n```\n',
                encoding='utf-8')
            latex = root / 'latex'
            status, warnings = io.StringIO(), io.StringIO()
            app = Sphinx(source, source, latex, root / 'doctrees', 'latex',
                         status=status, warning=warnings, freshenv=True)
            app.build()
            self.assertEqual(app.statuscode, 0, warnings.getvalue())
            tex = next(latex.glob('*.tex')).read_text(encoding='utf-8')
            self.assertIn('Spanning cell', tex)
            self.assertIn(r'\sphinxstylestrong{Retained content}', tex)
            self.assertIn(r'STD\_\allowbreak{}001', tex)
            self.assertIn(r'\newline{}', tex)
            self.assertNotIn(r'\newline{}\newline{}', tex)
            self.assertNotIn('No suitable columns', warnings.getvalue())

            html = root / 'html'
            app = Sphinx(source, source, html, root / 'doctrees', 'html',
                         status=io.StringIO(), warning=io.StringIO())
            app.build()
            page = (html / 'index.html').read_text(encoding='utf-8')
            self.assertIn('<td rowspan="2">Spanning cell</td>', page)
            self.assertIn('<strong>Retained content</strong><p>STD_001</p>', page)


if __name__ == '__main__':
    unittest.main()
