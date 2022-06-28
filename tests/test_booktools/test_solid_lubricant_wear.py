import operator
import pytest
from scipy import stats
import numpy as np

# import module
from nrpmint.booktools import solid_lubricant_wear
from nrpmint.reliability.random_variables import UniRV, MultiRV
from nrpmint.helpers import sample_bounded


def compute_Pf_true(n_mcs = 10**6, **kwargs):
    Dist_Vlim, E_Vlim, CoV_Vlim, Dist_KH, E_KH, \
    CoV_KH, Dist_alpha, E_alpha, CoV_alpha, Dist_MU, \
    E_MU, CoV_MU, rho_KH_alpha, nrev = operator.itemgetter('Dist_Vlim', 'E_Vlim', 'CoV_Vlim', 'Dist_KH', 'E_KH', \
                                                           'CoV_KH', 'Dist_alpha', 'E_alpha', 'CoV_alpha', 'Dist_MU',
                                                           'E_MU', 'CoV_MU', 'rho_KH_alpha', 'nrev')(kwargs)

    # failure probability not provided, compute it
    if Dist_Vlim == 'LogNormal' and Dist_KH == 'LogNormal' and Dist_alpha == 'LogNormal' and Dist_MU == 'LogNormal':
        # analytical solution available, if all distributions are LogNormal
        KH_dist = UniRV(Dist_KH, E_KH, CoV_KH)
        alpha_dist = UniRV(Dist_alpha, E_alpha, CoV_alpha)
        if rho_KH_alpha == 0:
            # variance of product of KH and alpha
            mu_KH = np.log(KH_dist.dist.__dict__['kwds']['scale'])
            sigma_KH = KH_dist.dist.__dict__['kwds']['s']
            mu_alpha = np.log(alpha_dist.dist.__dict__['kwds']['scale'])
            sigma_alpha = alpha_dist.dist.__dict__['kwds']['s']
            # parameters of KH*alpha
            mu_alpha_times_KH = mu_KH + mu_alpha
            sigma_alpha_times_KH = np.sqrt(sigma_KH ** 2 + sigma_alpha ** 2)
            # moments
            covar_KH_alpha = 0
            var_KH_times_alpha = (np.exp(sigma_alpha_times_KH ** 2) - 1) * np.exp(
                2 * mu_alpha_times_KH + sigma_alpha_times_KH ** 2)
        else:
            # covariance of KH and alpha as well as the variance of their product cannot be computed analytically
            # from the copula correlation
            joint_dist = MultiRV([KH_dist, alpha_dist], corrmat=[[1, rho_KH_alpha], [rho_KH_alpha, 1]])
            joint = joint_dist.rvs(10 ** 4)
            # moments
            covar_KH_alpha = np.cov(joint.T)[0, 1]
            var_KH_times_alpha = np.var(joint[:, 0] * joint[:, 1])

        mean_x1 = E_Vlim
        mean_x2 = nrev * (E_KH * E_alpha + covar_KH_alpha)
        CoV_x1 = CoV_Vlim
        CoV_x2 = np.sqrt(var_KH_times_alpha * nrev ** 2) / mean_x2
        # equation for analytical solution from handbook
        Pf_true = stats.norm.cdf(
            (np.log(E_MU) - np.log(mean_x1 / mean_x2) + 0.5 * (
                        np.log(CoV_x1 ** 2 + 1) - np.log(CoV_x2 ** 2 + 1) - np.log(CoV_MU ** 2 + 1))) /
            (np.sqrt(np.log(CoV_x1 ** 2 + 1) + np.log(CoV_x2 ** 2 + 1) + np.log(CoV_MU ** 2 + 1)))
        )
    else:
        # sampling-based solution required
        Vlim_dist = UniRV(Dist_Vlim, E_Vlim, CoV_Vlim)
        KH_dist = UniRV(Dist_KH, E_KH, CoV_KH)
        alpha_dist = UniRV(Dist_alpha, E_alpha, CoV_alpha)
        MU_dist = UniRV(Dist_MU, E_MU, CoV_MU)

        corrmat = np.eye(4)
        corrmat[1, 2], corrmat[2, 1] = rho_KH_alpha, rho_KH_alpha

        x_dist = MultiRV([Vlim_dist, KH_dist, alpha_dist, MU_dist], corrmat=corrmat)
        x = x_dist.rvs(n_mcs)

        Pf_true = np.mean((x[:, 0] - x[:, 3] * x[:, 1] * x[:, 2] * nrev) < 0)

    return Pf_true

@pytest.mark.parametrize(
    'N, Pf_given', [(20, False)]
)
def test_running_model(N, Pf_given):
    """
    Tests whether the model can be run with the provided single_analysis and asserts the analytical results, where
    available.
    """

    input = solid_lubricant_wear.get_inputs()
    samples = sample_bounded.sample(input, N, skip=['rev_per_hour'])

    for sample in samples:
        reliability_analysis = solid_lubricant_wear.single_analysis(**sample)

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
    input = solid_lubricant_wear.get_inputs()
    samples = sample_bounded.sample(input, N)
    for sample in samples:
        solid_lubricant_wear.model_wrapper(**sample)


def test_web_ui():
    """
    Tests the current web user interface
    """
    solid_lubricant_wear.web_ui()
