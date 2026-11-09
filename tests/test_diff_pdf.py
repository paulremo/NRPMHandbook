"""Checks that review snapshots preserve local edits and the Git index."""

import contextlib
import importlib.util
import io
from pathlib import Path
import shutil
import tempfile
import unittest
from unittest.mock import patch


_spec = importlib.util.spec_from_file_location(
    "diff_pdf", Path(__file__).resolve().parents[1] / "scripts/diff_pdf.py"
)
diff_pdf = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(diff_pdf)


class SnapshotTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory(prefix="handbook-diff-test-")
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        self.repo = self.root / "repo"
        self.repo.mkdir()
        self.book = self.repo / diff_pdf.BOOK
        self.book.mkdir()
        self.chapter = self.book / "chapter with spaces.md"
        self.chapter.write_text("Original heading\n", encoding="utf-8")
        self.deleted = self.book / "deleted.md"
        self.deleted.write_text("Removed chapter\n", encoding="utf-8")
        (self.repo / "pyproject.toml").write_text("[project]\nversion='0.4.5'\n")
        (self.repo / ".gitignore").write_text("ignored.md\n")
        self.command("init", "-q")
        self.command("add", ".")
        self.command("-c", "user.name=Diff Test", "-c", "user.email=diff@example.invalid",
                     "-c", "commit.gpgsign=false", "commit", "-qm", "Baseline")

    def command(self, *args):
        return diff_pdf.git(self.repo, *args)

    def test_baseline_and_current_include_actual_working_bytes_without_changing_git(self):
        self.chapter.write_text("Staged heading\n", encoding="utf-8")
        self.command("add", "--", str(self.chapter.relative_to(self.repo)))
        self.chapter.write_text("Final unstaged heading\n", encoding="utf-8")
        self.deleted.unlink()
        notebook = self.book / "new.ipynb"
        notebook_bytes = b'{"cells": [], "metadata": {}, "nbformat": 4}\n'
        notebook.write_bytes(notebook_bytes)
        (self.book / "ignored.md").write_text("Ignored content")
        index_before = (self.repo / ".git/index").read_bytes()
        diff_before = self.command("diff", "--binary", "HEAD")
        files = diff_pdf.filenames(self.command(
            "ls-files", "--cached", "--others", "--exclude-standard", "-z",
            "--", diff_pdf.BOOK.as_posix(), "pyproject.toml"))
        diff_pdf.snapshot_baseline(self.repo, "HEAD", self.root / "old")
        diff_pdf.snapshot_current(self.repo, self.root / "new", files)
        old = self.root / "old" / diff_pdf.BOOK
        new = self.root / "new" / diff_pdf.BOOK
        self.assertEqual((old / self.chapter.name).read_text(), "Original heading\n")
        self.assertTrue((old / "deleted.md").exists())
        self.assertFalse((old / "new.ipynb").exists())
        self.assertEqual((new / self.chapter.name).read_text(), "Final unstaged heading\n")
        self.assertEqual((new / "new.ipynb").read_bytes(), notebook_bytes)
        self.assertFalse((new / "deleted.md").exists())
        self.assertFalse((new / "ignored.md").exists())
        self.assertEqual(index_before, (self.repo / ".git/index").read_bytes())
        self.assertEqual(diff_before, self.command("diff", "--binary", "HEAD"))

    def test_invalid_baseline_fails_without_creating_output(self):
        output = self.root / "result/review.pdf"
        with patch.object(diff_pdf, "ROOT", self.repo), contextlib.redirect_stderr(io.StringIO()):
            result = diff_pdf.main(["--base", "missing-review-baseline", "--output", str(output)])
        self.assertEqual(result, 1)
        self.assertFalse(output.parent.exists())

    def test_unchanged_book_does_not_require_latex_tools(self):
        with patch.object(diff_pdf, "ROOT", self.repo), \
                patch.object(diff_pdf, "tool_environment", side_effect=AssertionError("Unexpected tool lookup")), \
                contextlib.redirect_stdout(io.StringIO()):
            result = diff_pdf.main([])
        self.assertEqual(result, 0)

    def test_failed_command_keeps_its_diagnostic_log(self):
        log = self.root / "failed.log"
        with self.assertRaisesRegex(RuntimeError, "A specific build failure"):
            diff_pdf.run_logged(
                [diff_pdf.sys.executable, "-c",
                 "import sys; print('A specific build failure'); sys.exit(3)"],
                self.root, log, diff_pdf.os.environ.copy())
        self.assertIn("A specific build failure", log.read_text())


class MathMarkupRetryTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory(prefix="handbook-math-test-")
        self.addCleanup(self.temporary.cleanup)
        self.workdir = Path(self.temporary.name)

    def build(self, mode="auto"):
        return diff_pdf.build_review(
            Path("old.tex"), Path("new.tex"), self.workdir, "latexdiff", "latexmk", {},
            revision="HEAD", commit="abc123", changed=["equations.md"], math_markup=mode)

    def generate(self, old, new, review, *args):
        review.mkdir()
        (review / "review.tex").write_text("Review source")

    def fail_math(self, review, latexmk, log, env):
        log.write_text("Undefined reference warning\n" * 1000
                       + r"review.tex:20: Paragraph ended before \split was complete.")
        (review / "review.aux").write_text("Failed build state")
        raise RuntimeError("Math compilation failed")

    def test_math_failure_retries_in_fresh_directory_and_preserves_first_log(self):
        def compile(review, latexmk, log, env):
            if review.name == "review":
                self.fail_math(review, latexmk, log, env)
            self.assertFalse((review / "review.aux").exists())
            log.write_text("Build succeeded")

        with patch.object(diff_pdf, "generate_review", side_effect=self.generate) as generate, \
                patch.object(diff_pdf, "compile_pdf", side_effect=compile), \
                contextlib.redirect_stdout(io.StringIO()):
            review, mode = self.build()
        self.assertEqual(mode, "whole")
        self.assertEqual(review.name, "review-whole")
        self.assertEqual([call.args[6] for call in generate.call_args_list], ["fine", "whole"])
        self.assertTrue((self.workdir / "review/review.aux").is_file())
        self.assertTrue((self.workdir / "latexmk.log").is_file())

    def test_missing_font_is_reported_without_retry(self):
        def compile(review, latexmk, log, env):
            log.write_text('Package fontspec Error: The font "MissingFont" cannot be found.')
            raise RuntimeError("Missing font")

        with patch.object(diff_pdf, "generate_review", side_effect=self.generate) as generate, \
                patch.object(diff_pdf, "compile_pdf", side_effect=compile), \
                contextlib.redirect_stdout(io.StringIO()), \
                self.assertRaisesRegex(RuntimeError, "Missing font"):
            self.build()
        self.assertEqual(generate.call_count, 1)

    def test_explicit_fine_mode_does_not_retry(self):
        with patch.object(diff_pdf, "generate_review", side_effect=self.generate) as generate, \
                patch.object(diff_pdf, "compile_pdf", side_effect=self.fail_math), \
                contextlib.redirect_stdout(io.StringIO()), \
                self.assertRaisesRegex(RuntimeError, "Math compilation failed"):
            self.build("fine")
        self.assertEqual(generate.call_count, 1)

    def test_error_summary_exposes_math_failure_before_reference_warning_noise(self):
        log = self.workdir / "noisy.log"
        program = ("import sys; "
                   "print(r'review.tex:20: Paragraph ended before \\split was complete.'); "
                   "print('Undefined reference warning\\n' * 1000); sys.exit(1)")
        with self.assertRaises(RuntimeError) as caught:
            diff_pdf.run_logged([diff_pdf.sys.executable, "-c", program], self.workdir,
                                log, diff_pdf.os.environ.copy())
        self.assertIn(r"First LaTeX error: review.tex:20: Paragraph ended before \split",
                      str(caught.exception))

    def test_aligned_equation_regression_with_real_latex_tools(self):
        env = diff_pdf.tool_environment()
        latexmk = shutil.which("latexmk", path=env.get("PATH"))
        latexdiff = (shutil.which("latexdiff-so", path=env.get("PATH"))
                     or shutil.which("latexdiff", path=env.get("PATH")))
        if not (latexmk and latexdiff and shutil.which("xelatex", path=env.get("PATH"))):
            self.skipTest("Requires latexdiff, latexmk and XeLaTeX")
        latexdiff = diff_pdf.find_latexdiff(env)
        fixtures = Path(__file__).parent / "fixtures"
        with contextlib.redirect_stdout(io.StringIO()):
            review, mode = diff_pdf.build_review(
                fixtures / "math_old.tex", fixtures / "math_new.tex", self.workdir,
                latexdiff, latexmk, env, revision="HEAD", commit="abc123",
                changed=["equations.md"], math_markup="auto")
        self.assertEqual(mode, "whole")
        self.assertTrue((review / "review.pdf").is_file())
        self.assertTrue(diff_pdf.is_math_markup_error(self.workdir / "latexmk.log"))
        self.assertEqual((review / "review.aux").read_text(encoding="utf-8").count(
            r"\newlabel{eq:regression}"), 1)

    def test_added_longtable_layout_regression_with_real_latex_tools(self):
        env = diff_pdf.tool_environment()
        latexmk = shutil.which("latexmk", path=env.get("PATH"))
        if not (latexmk and shutil.which("xelatex", path=env.get("PATH"))
                and (shutil.which("latexdiff-so", path=env.get("PATH"))
                     or shutil.which("latexdiff", path=env.get("PATH")))):
            self.skipTest("Requires latexdiff, latexmk and XeLaTeX")
        fixtures = Path(__file__).parent / "fixtures"
        with contextlib.redirect_stdout(io.StringIO()):
            review, mode = diff_pdf.build_review(
                fixtures / "table_old.tex", fixtures / "table_new.tex", self.workdir,
                diff_pdf.find_latexdiff(env), latexmk, env, revision="HEAD", commit="abc123",
                changed=["table.md"], math_markup="auto")
        self.assertEqual(mode, "fine")
        self.assertTrue((review / "review.pdf").is_file())
        text = (review / "review.tex").read_text(encoding="utf-8")
        self.assertIn(r"\DIFadd{Updated", text)
        self.assertIn(r"\DIFdel{Original", text)
        self.assertIn(r"\DIFadd{An added spanning cell with text.", text)

    def test_review_preserves_legacy_bold_greek_with_unicode_math(self):
        env = diff_pdf.tool_environment()
        latexmk = shutil.which("latexmk", path=env.get("PATH"))
        if not (latexmk and shutil.which("xelatex", path=env.get("PATH"))
                and (shutil.which("latexdiff-so", path=env.get("PATH"))
                     or shutil.which("latexdiff", path=env.get("PATH")))):
            self.skipTest("Requires latexdiff, latexmk and XeLaTeX")
        preamble = (r"\documentclass{article}\usepackage{unicode-math,hyperref}"
                    r"\setmainfont{FreeSerif}[Extension=.otf,UprightFont=*,BoldFont=*Bold]"
                    r"\begin{document}")
        old, new = self.workdir / "old/source.tex", self.workdir / "new/source.tex"
        old.parent.mkdir()
        new.parent.mkdir()
        old.write_text(preamble + r"\(\mathbf{\theta}\)\end{document}")
        new.write_text(preamble + r"\(\boldsymbol{\theta}+1\)\end{document}")
        with contextlib.redirect_stdout(io.StringIO()):
            review, mode = diff_pdf.build_review(
                old, new, self.workdir / "build", diff_pdf.find_latexdiff(env),
                latexmk, env, revision="HEAD", commit="abc123", changed=["greek.md"],
                math_markup="auto")
        self.assertTrue((review / "review.pdf").is_file())
        self.assertNotIn("Missing character:", (review / "review.log").read_text(encoding="utf-8"))


if __name__ == "__main__":
    unittest.main()
