import operator
import pytest
import numpy as np

# import module
from nrpmint.booktools import stress_strength
from nrpmint.reliability.random_variables import UniRV, MultiRV
from nrpmint.helpers import sample_bounded


def compute_Pf_true(n_mcs = 10**6, **kwargs):
    Dist_X1, E_X1, CoV_X1, Dist_X2, E_X2, CoV_X2, rho_X1_X2 = operator.itemgetter('Dist_X1', 'E_X1', 'CoV_X1', 'Dist_X2', 'E_X2', \
                                                           'CoV_X2', 'rho_X1_X2')(kwargs)

    # failure probability not provided, compute it
    if False:
        # Analytical solution is possible for certain distribution combinations, but needs to be derived
        pass
    else:
        # sampling-based solution required
        R_dist = UniRV(Dist_X1, E_X1, CoV_X1)
        A_dist = UniRV(Dist_X2, E_X2, CoV_X2)

        corrmat = np.eye(2)
        corrmat[0, 1], corrmat[1, 0] = rho_X1_X2, rho_X1_X2

        x_dist = MultiRV([R_dist, A_dist], corrmat=corrmat)
        x = x_dist.rvs(n_mcs)

        Pf_true = np.mean((x[:, 0] - x[:, 1]) < 0)

    return Pf_true

@pytest.mark.parametrize(
    'N, Pf_given', [(20, False)]
)
def test_running_model(N, Pf_given):
    """
    Tests whether the model can be run with the provided single_analysis and asserts the analytical results, where
    available.
    """

    input = stress_strength.get_inputs()
    samples = sample_bounded.sample(input, N)

    for sample in samples:
        reliability_analysis = stress_strength.single_analysis(**sample)

        if Pf_given == False:
            Pf_true = compute_Pf_true(**sample)
        else:
            Pf_true = Pf_given

        if Pf_true > 1e-4:
            assert reliability_analysis.Pf == pytest.approx(Pf_true, rel=5e-1)
        else:
            pass
            # this case cannot be assessed until the analytical solution is implemented in compute_Pf_true


@pytest.mark.parametrize(
    'N', [2]
)
def test_display(N):
    """
    Tests whether the display function works on a reliability analysis by calling the model_wrapper.
    """
    input = stress_strength.get_inputs()
    samples = sample_bounded.sample(input, N)
    for sample in samples:
        stress_strength.model_wrapper(**sample)


def test_web_ui():
    """
    Tests the current web user interface
    """
    stress_strength.web_ui()
