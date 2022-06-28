import operator
import pytest
from scipy import stats
import numpy as np

# import module
from nrpmint.booktools import fluid_lubricant_wear
from nrpmint.reliability.random_variables import UniRV, MultiRV
from nrpmint.helpers import sample_bounded


def compute_Pf_true(n_mcs = 10**6, **kwargs):
    Dist_K, E_K, CoV_K, Dist_MU, E_MU, CoV_MU, M0, Minact, \
    Nb, bd, pd, pm, theta, nrev = operator.itemgetter('Dist_K', 'E_K', 'CoV_K', 'Dist_MU', 'E_MU', 'CoV_MU', 'M0',
                                                       'Minact', 'Nb', 'bd', 'pd', 'pm', 'theta', 'nrev')(kwargs)

    # failure probability not provided, compute it
    if Dist_K == 'LogNormal' and Dist_MU == 'LogNormal':
        # analytical solution available, if all distributions are LogNormal
        mean_x1 = M0 - Minact
        mean_x2 = nrev * (CoV_K ** 2 + 1) / E_K * (Nb / 2 * (1 - bd / pd * np.cos(np.radians(theta)))) / (
                    2 * np.exp(-3.35 * pm))
        CoV_x2 = CoV_K
        # equation for analytical solution from handbook
        Pf_true = stats.norm.cdf(
            (np.log(E_MU) - np.log(mean_x1 / mean_x2) - 0.5 * (np.log(CoV_x2 ** 2 + 1) + np.log(CoV_MU ** 2 + 1))) /
            (np.sqrt(np.log(CoV_x2 ** 2 + 1) + np.log(CoV_MU ** 2 + 1)))
        )
    else:
        # sampling-based solution required
        K_dist = UniRV(Dist_K, E_K, CoV_K)
        MU_dist = UniRV(Dist_MU, E_MU, CoV_MU)

        x_dist = MultiRV([K_dist, MU_dist])
        x = x_dist.rvs(n_mcs)

        Pf_true = np.mean((M0 - Minact - x[:, 1] * nrev * (Nb / 2 * (1 - bd / pd * np.cos(np.radians(theta)))) / (
                    2 * x[:, 0] * np.exp(-3.35 * pm))) < 0)

    return Pf_true


@pytest.mark.parametrize(
    'N, Pf_given', [(20, False)]
)
def test_running_model(N, Pf_given):
    """
    Tests whether the model can be run with the provided single_analysis and asserts the analytical results, where
    available.
    """

    input = fluid_lubricant_wear.get_inputs()
    samples = sample_bounded.sample(input, N, skip=['rev_per_hour'])

    for sample in samples:
        reliability_analysis = fluid_lubricant_wear.single_analysis(**sample)

        if Pf_given == False:
            Pf_true = compute_Pf_true(**sample)
        else:
            Pf_true = Pf_given

        assert reliability_analysis.Pf == pytest.approx(Pf_true, rel=5e-1)


@pytest.mark.parametrize(
    'N', [2]
)
def test_display(N):
    """
    Tests whether the display function works on a reliability analysis by calling the model_wrapper.
    """
    input = fluid_lubricant_wear.get_inputs()
    samples = sample_bounded.sample(input, N)
    for sample in samples:
        fluid_lubricant_wear.model_wrapper(**sample)


def test_web_ui():
    """
    Tests the current web user interface with all slide
    """
    fluid_lubricant_wear.web_ui()