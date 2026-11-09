"""Build the handbook PDF without Jupyter Book's Windows make.bat launcher.

Run from the repository root: uv run --locked python scripts/build_pdf.py
"""

from __future__ import annotations

import os
from pathlib import Path
import shutil
import subprocess
import sys

from diff_pdf import tool_environment


ROOT = Path(__file__).resolve().parents[1]
BOOK = ROOT / "02_NRPMHandbook"


def main() -> int:
    env = tool_environment()
    required = ["latexmk", "xelatex", "perl", "makeindex" if os.name == "nt" else "xindy"]
    missing = [name for name in required if not shutil.which(name, path=env.get("PATH"))]
    if missing:
        print(f"Missing PDF build tools: {', '.join(missing)}. "
              "Install a LaTeX distribution and Perl; see README.md.", file=sys.stderr)
        return 1

    try:
        # Generate LaTeX only, then call latexmk directly on every platform.
        subprocess.run(
            [sys.executable, "-c", "from jupyter_book.cli.main import main; main()",
             "build", str(BOOK), "--builder", "latex"],
            cwd=ROOT, env=env, check=True,
        )
        directory = BOOK / "_build/latex"
        command = [shutil.which("latexmk", path=env.get("PATH")), "-xelatex",
                   "-interaction=nonstopmode", "-halt-on-error", "-file-line-error"]
        if os.name == "nt":
            # Sphinx's default latexmkrc selects xindy, which MiKTeX lacks.
            rc = directory / "windows.latexmkrc"
            rc.write_text('$makeindex = "makeindex -s python.ist %O -o %D %S";\n',
                          encoding="utf-8")
            command += ["-r", rc.name]
        subprocess.run([*command, "book.tex"], cwd=directory, env=env, check=True)
    except (OSError, subprocess.CalledProcessError) as error:
        print(f"PDF build failed: {error}", file=sys.stderr)
        return 1

    print(f"PDF: {directory / 'book.pdf'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
