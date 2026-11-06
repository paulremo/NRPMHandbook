"""Use the project version in the handbook's announcement banner."""

from pathlib import Path
import tomllib


def _set_handbook_version(app, config):
    project_path = Path(__file__).resolve().parents[2] / "pyproject.toml"
    with project_path.open("rb") as project_file:
        handbook_version = tomllib.load(project_file)["project"]["version"]

    announcement = config.html_theme_options.get("announcement", "")
    config.html_theme_options["announcement"] = announcement.replace(
        "{version}", handbook_version
    )


def setup(app):
    app.connect("config-inited", _set_handbook_version)
    return {"parallel_read_safe": True, "parallel_write_safe": True}
