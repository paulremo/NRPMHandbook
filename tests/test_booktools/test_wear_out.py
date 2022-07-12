import pytest

# import module
from nrpmint.booktools import wear_out
from nrpmint.helpers import sample_bounded

@pytest.mark.parametrize(
    'N', [20]
)
def test_running_model(N):
    """
    Tests whether the model can be run with the provided single_analysis and asserts the analytical results, where
    available.
    """
    input = wear_out.get_inputs()
    samples = sample_bounded.sample(input, N)

    for sample in samples:
        wear_out.single_analysis(**sample)


@pytest.mark.parametrize(
    'N', [2]
)
def test_display(N):
    """
    Tests whether the display function works on a reliability analysis by calling the model_wrapper.
    """
    input = wear_out.get_inputs()
    samples = sample_bounded.sample(input, N)
    for sample in samples:
        wear_out.model_wrapper(**sample)


def test_web_ui():
    """
    Tests the current web user interface
    """
    wear_out.web_ui()