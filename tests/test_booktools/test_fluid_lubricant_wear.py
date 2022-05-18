import pytest
from scipy import stats
import numpy as np

# import module
from nrpmint.booktools import fluid_lubricant_wear
from nrpmint.reliability.random_variables import UniRV, MultiRV


@pytest.mark.parametrize(
    'Dist_K, E_K, CoV_K, Dist_MU, E_MU, CoV_MU, M0, Minact, Nb, bd, pd, pm, theta, nrev, Pf_true', [
        ('LogNormal', 1e8, 0.75, 'LogNormal', 1, 0.2, 80, 80*0.01, 25, 12.5, 50.8, 1.5, 10, 1e6, None),
        ('LogNormal', 1e8, 0.75, 'LogNormal', 1, 0.2, 60, 80*0.01, 25, 12.5, 50.8, 0.8, 10, 1e6, None),
        ('LogNormal', 1e8, 0.75, 'LogNormal', 1, 0.2, 60, 80*0.01, 25, 12.5, 50.8, 2, 10, 1e6, None)
    ]
)
def test_running_model(Dist_K, E_K, CoV_K, Dist_MU, E_MU, CoV_MU, M0, Minact, Nb, bd, pd, pm, theta, nrev, Pf_true):
    """
    Tests whether the model can be run with the provided single_analysis and asserts the analytical results, where
    available.
    """
    reliability_analysis = fluid_lubricant_wear.single_analysis(Dist_K=Dist_K, E_K=E_K, CoV_K=CoV_K, Dist_MU=Dist_MU,
                                                                E_MU=E_MU, CoV_MU=CoV_MU, M0=M0, Minact=Minact, Nb=Nb,
                                                                bd=bd, pd=pd, pm=pm, theta=theta, nrev=nrev)

    if Pf_true == None:
        # failure probability not provided, compute it
        if Dist_K == 'LogNormal' and Dist_MU == 'LogNormal':
            # analytical solution available, if all distributions are LogNormal
            mean_x1 = M0 - Minact
            mean_x2 = nrev * (CoV_K**2+1)/E_K * (Nb/2 * (1 - bd/pd * np.cos(theta)))/(2*np.exp(-3.35*pm))
            CoV_x2 = CoV_K
            # equation for analytical solution from handbook
            Pf_true = stats.norm.cdf(
                (np.log(E_MU) - np.log(mean_x1/mean_x2) - 0.5*(np.log(CoV_x2**2+1) + np.log(CoV_MU**2+1)))/
                (np.sqrt(np.log(CoV_x2**2+1) + np.log(CoV_MU**2+1)))
            )
        else:
            # sampling-based solution required
            K_dist = UniRV(Dist_K, E_K, CoV_K)
            MU_dist = UniRV(Dist_MU, E_MU, CoV_MU)

            x_dist = MultiRV([K_dist, MU_dist])
            x = x_dist.rvs(10 ** 6)

            Pf_true = np.mean((M0 - Minact - x[:,1]*nrev*(Nb/2*(1-bd/pd*np.cos(theta)))/(2*x[:,0]*np.exp(-3.35*pm)))<0)

    assert reliability_analysis.Pf == pytest.approx(Pf_true, rel=5e-1)


@pytest.mark.parametrize(
    'Dist_K, E_K, CoV_K, Dist_MU, E_MU, CoV_MU, M0, Minact, Nb, bd, pd, pm, theta, nrev, rev_per_hour', [
        ('LogNormal', 1e8, 0.75, 'LogNormal', 1, 0.2, 80, 80*0.01, 25, 12.5, 50.8, 1.5, 10, 1e6,100)
    ]
)
def test_display(Dist_K, E_K, CoV_K, Dist_MU, E_MU, CoV_MU, M0, Minact, Nb,bd, pd, pm, theta, nrev, rev_per_hour):
    """
    Tests whether the display function works on a reliability analysis by calling the model_wrapper.
    """

    fluid_lubricant_wear.model_wrapper(Dist_K=Dist_K, E_K=E_K, CoV_K=CoV_K, Dist_MU=Dist_MU, E_MU=E_MU, CoV_MU=CoV_MU,
                  M0=M0, Minact=Minact,Nb=Nb,bd=bd,pd=pd,pm=pm,theta=theta,nrev=nrev, rev_per_hour=rev_per_hour)


def test_web_ui():
    """
    Tests the current web user interface
    """
    fluid_lubricant_wear.web_ui()