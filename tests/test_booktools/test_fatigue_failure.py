import operator
import pytest
from scipy import stats
import numpy as np

# import module
from nrpmint.booktools import fatigue_failure
from nrpmint.reliability.random_variables import UniRV, MultiRV
from nrpmint.helpers import sample_bounded


def compute_Pf_true(n_mcs = 10**6, **kwargs):
    Dist_DCR, E_DCR, CoV_DCR, Dist_A, E_A, CoV_A, Dist_SSF, E_SSF, CoV_SSF, Dist_coll, E_coll, CoV_coll,\
    Dist_MU, E_MU, CoV_MU, B, N, load_collective = operator.itemgetter('Dist_DCR', 'E_DCR', 'CoV_DCR', 'Dist_A', 'E_A', 'CoV_A',
                                                      'Dist_SSF', 'E_SSF', 'CoV_SSF', 'Dist_coll', 'E_coll', 'CoV_coll',
                                                      'Dist_MU', 'E_MU', 'CoV_MU', 'B', 'N', 'load_collective')(kwargs)

    # precompute recurring sum over load collective
    load_collective_sum = np.sum(load_collective[:, 0] ** B * load_collective[:, 1])

    if Dist_DCR == 'LogNormal' and Dist_A == 'Normal' and Dist_SSF == 'LogNormal' and Dist_MU == 'LogNormal':
        # analytical solution available, if all distributions are LogNormal and distribution of A is normal
        mean_x1 = E_DCR
        mean_ten_minA_SSF_B = 10 ** (-E_A + 1 / 2 * np.log(10) * (E_A * CoV_A) ** 2) * E_SSF ** B * (
            np.sqrt(CoV_SSF ** 2 + 1)) ** (B ** 2 - B)
        mean_x2 = mean_ten_minA_SSF_B * load_collective_sum
        CoV_x1 = CoV_DCR
        CoV_x2 = np.sqrt(10 ** (E_A * CoV_A * np.log(10)) * (np.sqrt(CoV_SSF ** 2 + 1)) ** (B ** 2) - 1)
        # equation for analytical solution from handbook
        Pf_true = stats.norm.cdf(
            (np.log(E_MU) - np.log(mean_x1 / mean_x2) + 0.5 * (
                        np.log(CoV_x1 ** 2 + 1) - np.log(CoV_x2 ** 2 + 1) - np.log(CoV_MU ** 2 + 1))) /
            (np.sqrt(np.log(CoV_x1 ** 2 + 1) + np.log(CoV_x2 ** 2 + 1) + np.log(CoV_MU ** 2 + 1)))
        )
    else:
        # sampling-based solution required
        DCR_dist = UniRV(Dist_DCR, E_DCR, CoV_DCR)
        A_dist = UniRV(Dist_A, E_A, CoV_A)
        SSF_dist = UniRV(Dist_SSF, E_SSF, CoV_SSF)
        MU_dist = UniRV(Dist_MU, E_MU, CoV_MU)

        x_dist = MultiRV([DCR_dist, A_dist, SSF_dist, MU_dist])
        x = x_dist.rvs(n_mcs)

        Pf_true = np.mean((x[:, 0] - x[:, 3] * (10 ** (-x[:, 1])) * (x[:, 2] ** B) * load_collective_sum) < 0)

    return Pf_true


@pytest.mark.parametrize(
    'N, Pf_given', [(20, False)]
)
def test_running_model(N, Pf_given):
    """
    Tests whether the model can be run with the provided single_analysis and asserts the analytical results, where
    available.
    """
    input = fatigue_failure.get_inputs()
    samples = sample_bounded.sample(input, N)

    for sample in samples:
        reliability_analysis, load_collective = fatigue_failure.single_analysis(**sample)

        if Pf_given == False:
            Pf_true = compute_Pf_true(**sample, load_collective=load_collective)
        else:
            Pf_true = Pf_given

    assert reliability_analysis.Pf == pytest.approx(Pf_true, rel=1)



@pytest.mark.parametrize(
    'N', [2]
)
def test_display(N):
    """
    Tests whether the display function works on a reliability analysis by calling the model_wrapper.
    """
    input = fatigue_failure.get_inputs()
    samples = sample_bounded.sample(input, N)
    for sample in samples:
        fatigue_failure.model_wrapper(**sample)


def test_web_ui():
    """
    Tests the current web user interface
    """
    fatigue_failure.web_ui()