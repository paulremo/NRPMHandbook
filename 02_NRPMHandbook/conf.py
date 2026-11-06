"""Load Jupyter Book's YAML settings for direct Sphinx/Read the Docs builds."""

from pathlib import Path

from jupyter_book.config import get_final_config


_BOOK_DIR = Path(__file__).resolve().parent
_config, _ = get_final_config(
    user_yaml=_BOOK_DIR / "_config.yml",
    sourcedir=_BOOK_DIR,
    cli_config={"latex_individualpages": False},
)
globals().update(_config)
