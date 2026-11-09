"""Build a review PDF comparing a Git revision with the current working files.

Run with the project's environment: uv run --locked python scripts/diff_pdf.py
"""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime
import hashlib
import importlib.util
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tarfile
import uuid


BOOK = Path("02_NRPMHandbook")
ROOT = Path(__file__).resolve().parents[1]


def git(repo: Path, *args: str) -> bytes:
    result = subprocess.run(
        ["git", "-C", str(repo), *args], capture_output=True, check=False
    )
    if result.returncode:
        raise RuntimeError(result.stderr.decode("utf-8", errors="replace").strip())
    return result.stdout


def filenames(data: bytes) -> list[str]:
    return [os.fsdecode(name) for name in data.split(b"\0") if name]


def tool_environment() -> dict[str, str]:
    env = os.environ.copy()
    # MiKTeX's latexdiff/latexmk launchers need Perl. Git for Windows bundles it.
    if os.name == "nt" and not shutil.which("perl"):
        git_path = shutil.which("git")
        candidates = []
        if git_path:
            candidates.extend(
                parent / "usr/bin/perl.exe" for parent in Path(git_path).parents
            )
        candidates.append(Path(os.environ.get("ProgramFiles", "C:/Program Files"))
                          / "Git/usr/bin/perl.exe")
        for candidate in candidates:
            if candidate.is_file():
                env["PATH"] = str(candidate.parent) + os.pathsep + env.get("PATH", "")
                break
    return env


def require_tool(name: str, env: dict[str, str]) -> str:
    executable = shutil.which(name, path=env.get("PATH"))
    if not executable:
        raise RuntimeError(
            f"Required tool '{name}' is missing. Install a LaTeX distribution "
            "with latexdiff, latexmk and XeLaTeX, and install Perl. "
            "See the README's PDF review instructions."
        )
    return executable


def find_latexdiff(env: dict[str, str]) -> str:
    # GNU diff accelerates comparisons of the full handbook; both variants inline Algorithm::Diff.
    path = env.get("PATH")
    if shutil.which("diff", path=path):
        fast = shutil.which("latexdiff-fast", path=path)
        if fast:
            return fast
    return shutil.which("latexdiff-so", path=path) or require_tool("latexdiff", env)


def run_logged(command: list[str], cwd: Path, log: Path, env: dict[str, str],
               *, output: Path | None = None) -> None:
    with log.open("wb") as errors:
        if output is None:
            result = subprocess.run(command, cwd=cwd, env=env,
                                    stdout=errors, stderr=subprocess.STDOUT)
        else:
            with output.open("wb") as destination:
                result = subprocess.run(command, cwd=cwd, env=env,
                                        stdout=destination, stderr=errors)
    if result.returncode:
        content = log.read_text(encoding="utf-8", errors="replace")
        errors = re.findall(r"(?m)^(?:! .+|[^\r\n]+\.tex:\d+: .+)$", content)
        cause = next((line for line in errors if "warning" not in line.lower()), None)
        summary = f"First LaTeX error: {cause}\n" if cause else ""
        detail = content[-5000:]
        raise RuntimeError(
            f"Command failed ({result.returncode}): {command[0]}\n"
            f"{summary}Log: {log}\n{detail}"
        )


def snapshot_baseline(repo: Path, revision: str, destination: Path) -> None:
    destination.mkdir()
    # Only book sources and the metadata needed by handbook_version are required.
    paths = filenames(git(repo, "ls-tree", "--name-only", "-z", revision,
                          "--", BOOK.as_posix(), "pyproject.toml"))
    if BOOK.as_posix() not in paths:
        raise RuntimeError(f"The baseline does not contain {BOOK}.")
    archive = destination.parent / "baseline.tar"
    with archive.open("wb") as output:
        subprocess.run(["git", "-C", str(repo), "archive", "--format=tar",
                        revision, "--", *paths], stdout=output, check=True)
    with tarfile.open(archive) as source:
        source.extractall(destination, filter="data")
    archive.unlink()


def snapshot_current(repo: Path, destination: Path, source_files: list[str]) -> None:
    destination.mkdir()
    for name in source_files:
        source = repo / name
        if not source.exists():
            continue  # Tracked files deleted locally must stay deleted.
        if not source.resolve().is_relative_to(repo.resolve()):
            raise RuntimeError(f"Source link points outside the repository: {name}")
        if source.is_file():
            target = destination / name
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, target)


def build_latex(snapshot: Path, log: Path, env: dict[str, str]) -> Path:
    # Invoke the CLI using this interpreter, without creating environments in snapshots.
    run_logged([sys.executable, "-c", "from jupyter_book.cli.main import main; main()",
                "build", str(snapshot / BOOK), "--builder", "latex"],
               snapshot, log, env)
    directory = snapshot / BOOK / "_build/latex"
    documents = [p for p in directory.glob("*.tex")
                 if r"\documentclass" in p.read_text(encoding="utf-8")]
    if len(documents) != 1:
        raise RuntimeError(f"Expected one generated LaTeX document in {directory}.")
    return documents[0]


def compile_pdf(review: Path, latexmk: str, log: Path, env: dict[str, str]) -> None:
    command = [latexmk, "-xelatex", "-interaction=nonstopmode", "-halt-on-error",
               "-file-line-error"]
    if os.name == "nt":
        # Sphinx's Windows PDF builds use makeindex rather than xindy.
        # An rc file also avoids quoting Perl expressions through MiKTeX's launcher.
        rc = review / "diff-pdf.latexmkrc"
        rc.write_text('$makeindex = "makeindex -s python.ist %O -o %D %S";\n', encoding="utf-8")
        command += ["-r", rc.name]
    run_logged([*command, "review.tex"], review, log, env)


def tex_escape(text: str) -> str:
    replacements = {
        "\\": r"\textbackslash{}", "&": r"\&", "%": r"\%", "$": r"\$",
        "#": r"\#", "_": r"\_", "{": r"\{", "}": r"\}",
        "~": r"\textasciitilde{}", "^": r"\textasciicircum{}",
        "/": r"/\allowbreak{}",
    }
    return "".join(replacements.get(char, char) for char in text)


def math_safe_markup(text: str) -> str:
    """Keep ulem's text decorations out of whole, potentially multiline equations."""
    # latexdiff can leave comment-only math arguments containing blank paragraphs.
    text = re.sub(r"\\DIF(?:add|del)\{(?:\s|%[^\n]*(?:\n|$))*\}", "", text)
    preamble = r"""
% Use colour in math mode; ulem cannot wrap split/aligned environments safely.
\let\handbookDIFaddtext\DIFadd
\let\handbookDIFdeltext\DIFdel
\newcommand{\handbookIgnoreLabel}[1]{}
\renewcommand{\DIFadd}[1]{\ifmmode{\color{blue}#1}\else\handbookDIFaddtext{#1}\fi}
\renewcommand{\DIFdel}[1]{\ifmmode{\color{red}\let\label\handbookIgnoreLabel#1}\else\handbookDIFdeltext{#1}\fi}
"""
    return text.replace(r"\begin{document}", preamble + r"\begin{document}", 1)


def add_review_cover(text: str, revision: str, commit: str, changed: list[str],
                     *, math_markup: str = "fine") -> str:
    # Sphinx 7's colorrows implementation recurses with array/colortbl from 2026.
    # Disable alternating row shading in the generated review copy only.
    # https://github.com/sphinx-doc/sphinx/issues/14465
    text = text.replace(r"\PassOptionsToPackage{colorrows}{sphinx}",
                        "% Alternating table shading disabled for Sphinx 7 compatibility.")
    if math_markup == "whole":
        text = math_safe_markup(text)
    # Deleted equations can still contain the legacy \mathbf{\theta} spelling.
    # Use Unicode math's alphabet for the review so those symbols remain visible.
    text = text.replace(r"\begin{document}",
                        r"\AtBeginDocument{\ifdefined\symbf\let\mathbf\symbf\fi}" + "\n"
                        + r"\begin{document}", 1)
    files = "\n".join(r"\item\texttt{" + tex_escape(name) + "}" for name in changed)
    cover = (
        "\n\\hypersetup{pageanchor=false}\n"
        "\\begin{titlepage}\n\\section*{Handbook change review}\n"
        f"Baseline: \\texttt{{{tex_escape(revision)}}} "
        f"(commit \\texttt{{{commit[:12]}}}).\\par\n"
        "Compared with a snapshot of the local working files, including staged "
        "and unstaged changes.\\par\\bigskip\n"
        "\\DIFadd{Blue underlined text is added.}\\par\n"
        "\\DIFdel{Red struck-out text is removed.}\\par\\bigskip\n"
        + ("Whole-equation replacements show the old equation in red and the new "
           "equation in blue.\\par\\bigskip\n" if math_markup == "whole" else "")
        + "Changed source files:\n\\begin{itemize}\n" + files
        + "\n\\end{itemize}\n"
        "This is a review copy. Deleted material can change pagination and numbering. "
        "Figure image contents are not compared; figures use the current images.\n"
        "\\end{titlepage}\n\\hypersetup{pageanchor=true}\n"
    )
    marker = r"\begin{document}"
    if marker not in text:
        raise RuntimeError("latexdiff did not produce a complete LaTeX document.")
    return text.replace(marker, marker + cover, 1)


def protect_sphinx_layout(text: str) -> str:
    """Keep TeX dimension arithmetic out of latexdiff's word-level markup.

    Sphinx emits bare assignments inside longtable and spanning-cell setup.
    Unlike command arguments, these are parsed as text by latexdiff, which can
    turn a minus sign into \\DIFadd{-} and break TeX's dimension scanner.
    Zero-argument helpers preserve the exact layout code, leaving cell contents
    available for normal change markup.
    """
    marker = r"\begin{document}"
    if marker not in text:
        raise RuntimeError("Expected a complete Sphinx LaTeX document.")
    preamble, body = text.split(marker, 1)
    definitions = {}

    def protect(match):
        code = match.group()
        # TeX command names must contain letters only. Equal code has the same
        # name in both snapshots, so unchanged layout does not appear as an edit.
        digest = hashlib.sha256(code.encode("utf-8")).hexdigest()[:16]
        name = "handbookLayout" + digest.translate(str.maketrans("0123456789abcdef", "ABCDEFGHIJKLMNOP"))
        definitions[name] = code
        return "\\" + name + "{}"

    body = re.sub(r"\\makeatletter\s+\\LTleft\b.*?\\makeatother", protect, body, flags=re.S)
    body = re.sub(r"\\vskip-\\baselineskip\\vbox\{\\hbox\{\\strut\}\}", protect, body)
    helpers = "\n\\makeatletter\n" + "\n".join(
        "\\newcommand{\\" + name + "}{%\n" + code + "%\n}"
        for name, code in definitions.items()) + "\n\\makeatother\n"
    return preamble + (helpers if definitions else "") + marker + body


def generate_review(old_tex: Path, new_tex: Path, review: Path, latexdiff: str,
                    env: dict[str, str], log: Path, mode: str, revision: str,
                    commit: str, changed: list[str]) -> None:
    # Keep old assets for deleted figures; current assets win filename collisions.
    shutil.copytree(old_tex.parent, review)
    shutil.copytree(new_tex.parent, review, dirs_exist_ok=True)
    diff_tex = review / "review.tex"
    old_input = review / "baseline-latexdiff.tex"
    new_input = review / "current-latexdiff.tex"
    old_input.write_text(protect_sphinx_layout(old_tex.read_text(encoding="utf-8")), encoding="utf-8")
    new_input.write_text(protect_sphinx_layout(new_tex.read_text(encoding="utf-8")), encoding="utf-8")
    run_logged([latexdiff, "--encoding=utf8", "--type=UNDERLINE",
                f"--math-markup={mode}", "--graphics-markup=none",
                "--append-safecmd=sphinxcode,sphinxstrong,sphinxemph",
                "--append-textcmd=sphinxcode,sphinxstrong,sphinxemph",
                "--exclude-safecmd=handbookLayout.*",
                str(old_input.resolve()), str(new_input.resolve())], review, log, env, output=diff_tex)
    text = diff_tex.read_text(encoding="utf-8")
    diff_tex.write_text(add_review_cover(text, revision, commit, changed, math_markup=mode),
                        encoding="utf-8")


def is_math_markup_error(log: Path) -> bool:
    """Distinguish math/alignment failures from missing packages or other failures."""
    text = log.read_text(encoding="utf-8", errors="replace")
    runaway_math = re.search(
        r"(?:Paragraph ended before|File ended while scanning use of)\s*"
        r"\\(?:split|align(?:at|ed)?|gather(?:ed)?|multline)", text)
    return bool(runaway_math) or any(message in text for message in (
        "Package amsmath Error:",
        "Misplaced alignment tab character &",
        r"Extra alignment tab has been changed to \cr",
        "Missing $ inserted.",
    ))


def build_review(old_tex: Path, new_tex: Path, workdir: Path, latexdiff: str,
                 latexmk: str | None, env: dict[str, str], *, revision: str,
                 commit: str, changed: list[str], math_markup: str) -> tuple[Path, str]:
    modes = ("fine", "whole") if math_markup == "auto" else (math_markup,)
    for index, mode in enumerate(modes):
        # A fresh directory prevents failed .aux/index/cache files from contaminating a retry.
        suffix = "" if index == 0 else "-whole"
        review = workdir / f"review{suffix}"
        print(f"Marking text and equation changes ({mode} math markup)...", flush=True)
        generate_review(old_tex, new_tex, review, latexdiff, env,
                        workdir / f"latexdiff{suffix}.log", mode, revision, commit, changed)
        if latexmk is None:
            return review, mode
        print("Compiling the review PDF with XeLaTeX...", flush=True)
        log = workdir / f"latexmk{suffix}.log"
        try:
            compile_pdf(review, latexmk, log, env)
        except RuntimeError:
            if math_markup != "auto" or mode != "fine" or not is_math_markup_error(log):
                raise
            print("Detailed math markup failed to compile. Retrying with whole-equation "
                  "markup; the original equations will be kept intact. "
                  f"First-attempt log: {log}", flush=True)
        else:
            return review, mode
    raise RuntimeError("No review PDF was produced.")


def parser() -> argparse.ArgumentParser:
    result = argparse.ArgumentParser(description=__doc__)
    result.add_argument("--base", default="HEAD", help="Baseline Git revision (default: HEAD)")
    result.add_argument("--output", type=Path,
                        default=ROOT / BOOK / "_build/diff/handbook-changes.pdf",
                        help="Output PDF path (relative paths use the current directory)")
    result.add_argument("--math-markup", choices=("auto", "fine", "coarse", "whole"), default="auto",
                        help="Equation comparison detail (default: auto retries fine math "
                             "markup with whole equations if a math/alignment error occurs)")
    result.add_argument("--no-compile", action="store_true",
                        help="Generate review.tex and its assets without compiling a PDF")
    result.add_argument("--keep-workdir", action="store_true",
                        help="Keep source snapshots and LaTeX after successful compilation")
    return result


def main(argv: list[str] | None = None) -> int:
    args = parser().parse_args(argv)
    workdir = None
    try:
        if importlib.util.find_spec("jupyter_book") is None:
            raise RuntimeError("Run this script with: uv run --locked python scripts/diff_pdf.py")
        output = args.output.resolve()
        if output.suffix.lower() != ".pdf":
            raise RuntimeError("--output must name a .pdf file.")
        commit = git(ROOT, "rev-parse", "--verify", "--end-of-options",
                     f"{args.base}^{{commit}}").decode().strip()
        source_files = sorted(set(filenames(git(
            ROOT, "ls-files", "--cached", "--others", "--exclude-standard", "-z",
            "--", BOOK.as_posix(), "pyproject.toml"))))
        changed = sorted(set(filenames(git(
            ROOT, "diff", "--name-only", "-z", commit, "--", BOOK.as_posix()))
            + filenames(git(ROOT, "ls-files", "--others", "--exclude-standard", "-z",
                            "--", BOOK.as_posix()))))
        if not changed:
            print(f"No book source changes compared with {args.base}; no PDF created.")
            return 0
        env = tool_environment()
        latexdiff = find_latexdiff(env)
        latexmk = require_tool("latexmk", env) if not args.no_compile else None
        if not args.no_compile:
            require_tool("xelatex", env)
            if os.name == "nt":
                require_tool("makeindex", env)
        output.parent.mkdir(parents=True, exist_ok=True)
        workdir = output.parent / ("run-" + datetime.now().strftime("%Y%m%d-%H%M%S-")
                                   + uuid.uuid4().hex[:8])
        workdir.mkdir()
        print(f"Baseline: {args.base} ({commit[:12]})\nWorking directory: {workdir}", flush=True)
        run_logged([latexdiff, "--version"], workdir, workdir / "latexdiff-version.log", env)
        if latexmk:
            run_logged([latexmk, "-v"], workdir, workdir / "latexmk-version.log", env)
        snapshot_baseline(ROOT, commit, workdir / "old")
        snapshot_current(ROOT, workdir / "new", source_files)
        print("Building baseline and current LaTeX with the same Python environment...", flush=True)
        with ThreadPoolExecutor(max_workers=2) as pool:
            old_build = pool.submit(build_latex, workdir / "old", workdir / "old-build.log", env)
            new_build = pool.submit(build_latex, workdir / "new", workdir / "new-build.log", env)
            old_tex, new_tex = old_build.result(), new_build.result()
        review, actual_math_markup = build_review(
            old_tex, new_tex, workdir, latexdiff, latexmk, env,
            revision=args.base, commit=commit, changed=changed, math_markup=args.math_markup)
        diff_tex = review / "review.tex"
        manifest = {"base_reference": args.base, "base_commit": commit,
                    "changed_files": changed, "math_markup": actual_math_markup,
                    "requested_math_markup": args.math_markup}
        (workdir / "comparison.json").write_text(json.dumps(manifest, indent=2) + "\n",
                                                encoding="utf-8")
        if args.no_compile:
            print(f"Review LaTeX: {diff_tex}\nPDF compilation skipped.")
            return 0
        pdf = review / "review.pdf"
        if not pdf.is_file():
            raise RuntimeError(f"LaTeX did not produce {pdf}.")
        shutil.copy2(pdf, output)
        output.with_suffix(".comparison.json").write_text(
            json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
        if args.keep_workdir:
            print(f"Build files retained in: {workdir}")
        else:
            # Delete only the unique run directory created above, never source/output parents.
            if workdir.resolve().parent != output.parent.resolve():
                raise RuntimeError("Refusing to remove a work directory outside the output directory.")
            shutil.rmtree(workdir)
        print(f"Review PDF: {output}")
        return 0
    except (RuntimeError, OSError, subprocess.CalledProcessError, tarfile.TarError) as error:
        print(f"Error: {error}", file=sys.stderr)
        if workdir is not None:
            print(f"Build files and logs retained in: {workdir}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
