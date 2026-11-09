# NRPMHandbook
Welcome to the repository that stores and tracks the development on the ADS/Matrisk project for developing a jupyter book of the NRPM digital handbook. The repository contains many setup files and one subfolder.

- `02_NRPMHandbook` This is the main folder for the digital handbook. All jupyter files are stored in this folder.

# Local setup

Install [uv](https://docs.astral.sh/uv/getting-started/installation/), then run the following command from the repository root:

```powershell
uv sync --locked
```

This creates or updates the project's `.venv` using the exact dependency versions in `uv.lock`. The project uses Python 3.13, selected by `.python-version`; uv can download it automatically if needed. Run `uv sync --locked` again after pulling dependency changes. If it reports that the lockfile is out of date, check that `pyproject.toml` and `uv.lock` were updated together.

Build the book locally with:

```powershell
uv run --locked jupyter-book build 02_NRPMHandbook
```

Open `02_NRPMHandbook/_build/html/home.html` to view the result. Commands prefixed with `uv run` use the project environment, so manual activation is unnecessary.

The handbook version is defined by `[project].version` in `pyproject.toml`. At build time, the local `handbook_version` Sphinx extension reads it and replaces `{version}` in the announcement banner configured in `_config.yml`. To update the banner version, change `pyproject.toml`, run `uv lock` to refresh the lockfile's project metadata, and rebuild. Read the Docs loads the same settings through `02_NRPMHandbook/conf.py`; keep that file as source and do not overwrite it with `jupyter-book config sphinx`.

## Local PDF build

Build the PDF from the repository root with:

```powershell
uv run --locked python scripts/build_pdf.py
```

The PDF is written to `02_NRPMHandbook/_build/latex/book.pdf`. The script generates LaTeX and runs `latexmk` directly, avoiding Jupyter Book's `make.bat` launcher failure on Windows. It requires a LaTeX installation with **latexmk**, **XeLaTeX**, **makeindex** on Windows (**xindy** on Linux/macOS), and **Perl**. On Windows it can use Perl bundled with Git for Windows. These tools are not installed by `uv sync`.

Alternating table row shading is disabled through `latex_table_style` for compatibility between Sphinx 7 and newer TeX packages. Close an existing output PDF in your reader before rebuilding.

The local `handbook_pdf` Sphinx extension preserves HTML table content and cell line breaks in the PDF edition, and lays out wide data tables on landscape pages. It also converts unsupported image color profiles to sRGB in generated PDF build copies, preserving the original images. Font Awesome icons use the TeX-distributed font file, so no Windows font installation is needed.

## PDF review of local changes

To create a PDF with changes marked against the latest commit, run:

```powershell
uv run --locked python scripts/diff_pdf.py
```

The review PDF is written to `02_NRPMHandbook/_build/diff/handbook-changes.pdf`. Added text is blue and underlined; deleted text is red and struck out. Equation changes are marked too. An introductory review page explains the markup and lists the changed source files. The comparison includes staged and unstaged edits and untracked, non-ignored book files, including notebooks. Your working files and Git index are not modified.

The script requires Git, the project's Python environment, and a LaTeX installation with **latexdiff**, **latexmk**, **XeLaTeX**, an indexing tool (**makeindex** on Windows, **xindy** on Linux/macOS), and the packages/fonts needed by the normal PDF build. Perl is also required; on Windows the script can use Perl bundled with Git for Windows. For this large handbook, `latexdiff-fast` is preferred when GNU `diff` is available (also bundled with Git for Windows); otherwise the script prefers standalone `latexdiff-so`. Both variants avoid a separate Perl `Algorithm::Diff` installation. These system tools are not installed by `uv sync`. See the [latexdiff documentation](https://ctan.org/pkg/latexdiff).

To compare with a different commit or release tag, or choose another output file:

```powershell
uv run --locked python scripts/diff_pdf.py --base v0.4.4 --output 02_NRPMHandbook/_build/diff/review.pdf
```

Both source snapshots are built with your current Python environment. Review copies can have different pagination and numbering because deleted text remains visible. Alternating table row shading is disabled in the review copy for compatibility between Sphinx 7 and newer TeX installations. Changes inside figure image files are not compared; figures use the current images. Notebook code is not executed beyond the book's configured build behavior.

Generated Sphinx table-layout calculations are protected from change markup so that added or reformatted tables remain valid LaTeX. The text inside table cells is still compared and marked normally.

The default `--math-markup auto` first tries detailed equation markup. If LaTeX reports a math/alignment error, the script automatically retries in a fresh build directory with whole-equation markup. This preserves complex equation layouts: the old equation is shown in red and the new equation in blue, while ordinary text still uses word-level markup. Use `--math-markup whole` to choose this behavior immediately, or `--math-markup fine` to require detailed markup without a retry.

Use `--no-compile` to generate `review.tex` and its assets without compiling a PDF (auto mode generates fine markup without testing the fallback), or `--keep-workdir` to retain the snapshots and logs after a successful PDF build. Build files are always retained on failure, and the script prints their location. The comparison metadata records the equation markup mode that was actually used.

Close an existing output PDF in your reader before replacing it, or choose a different filename with `--output`.

# FAQ

## Where is the book hosted?
By default, the book is automatically published and hosted on *readthedocs* at the alias URL http://nrpmhandbook.reliability.space/. The true URL is https://nrpmhandbook.readthedocs.io/. 

### GitHub pages
It is also possible to host the book on *GitHub Pages* with a URL https://paulremo.github.io/NRPMHandbook/. This needs to be done manually by following the procedure detailed next:

To publish a jupyter book, locally perform the following commands from the main branch root. The following were adapted from [this link](https://jupyterbook.org/start/publish.html)

First build the book HTML:
```
uv run --locked jupyter-book build 02_NRPMHandbook
```

Then push it to the publishing branch using the `ghp-import` utility, which `uvx` runs in a separate tool environment:
```
uvx ghp-import -n -p -f --cname=nrpmhandbook.reliability.space 02_NRPMHandbook\_build\html
```

The book is then published as a Git Page with the URL https://paulremo.github.io/NRPMHandbook/.

## How do bibliographies work?
The digital handbook uses a single `.bib` file to store all references. All global bibliography settings are set in the `_config.yml` file.

### General
Every chapter has its own bibliography that consists of two different reference types:
- **Normative references** are displayed in the *normative references* section of each chapter and are labeled as **NR_{EEE,MEC,MIS,SYS}_X** where X is a consecutive number.
- **Bibliographic references** are displayed in the *bibliographic references* section of each chapter and are labeled as **BR_{EEE,MEC,MIS,SYS}_X** where X is a consecutive number.

### How to cite?
Two different citation formats are supported: 
- ``{cite:p}`key` `` for paranthesis citations
- ``{cite:t}`key` `` for textual citations
 
The key is the key defined inside the `.bib` file but is additionally preceded by a prefix according to the chapter: `eee-`, `mec-`, `mis-`, or `sys-`. 

### How to define the bibliography?
Each chapter contains two separate bibliographies that are defined with the following commands:
````
# Normative References
```{bibliography}
:filter: keywords % "nr"
:labelprefix: NR_{EEE,MEC,MIS,SYS}_
:keyprefix: {eee-,mec-,mis-,sys-}
```
````
and
````
# Bibliographic References
```{bibliography}
:filter: keywords % "br"
:labelprefix: BR_{EEE,MEC,MIS,SYS}_
:keyprefix: {eee-,mec-,mis-,sys-}
```
````

### What to do if something goes wrong?
Delete the `_build` folder and rebuild the book from scratch. This can fix issues related to incorrect bibliographies.
 

## What about interactivity?
The digital handbook contains two types of interactive content: javascript-based and python-based content. The two are hosted and accessed differently:

- **Javascript** content is accessible directly through the browser without additional user-action. The source files are stored in `.js`, `.css`, and `.html` files inside the `_static` folder.
- **Python** content cannot be run on the browser and is instead launched by hovering over the :rocket: on top of the page and selecing *Live Code*. This launches a kernel provided by [mybinder](https://mybinder.org/) and shown in the browser with the [thebe](https://github.com/executablebooks/thebe) {term}`INTERFACE`. 

### Javascript configuration
Javascript-based interactivity is implemented in `.html` files inside the `_static` folder. Every interactive element has a dedicated `.html` file. These files are included in the jupyter-book through iframe tags. Javascript is used to resize the iframe to its content.

#### Javascript and CSS `_static` folder
The `_static` folder is included as a submodule in this repository. After cloning this repository to a local machine, the submodules have to be pulled seperately with
```
git submodule update --init --recursive
```
To update submodules at subsequent pulls, the following command has to be run from the main repository
```
git submodule update --remote
```
If changes in the submodule are pulled, they need to be committed to the main repository explicitly afterwards.


### Python configuration
The python-based content requires a package called `nrpmin` from a seperate [github repository](https://github.com/paulremo/NRPMInteractivity/). To launch thebe in the correct repository, special configuration options have to be passed to [sphinx-thebe](https://sphinx-thebe.readthedocs.io/en/latest/configure.html). These settings are stored in the `_config.yml` file of this repo.

## What about copyrigths?
Content and ideas have been developed within ESA contract `No. 4000121065/17/NL/PS` and `4000135482/21/NL/AR/va`. See the `LICENSE` file for more information.
