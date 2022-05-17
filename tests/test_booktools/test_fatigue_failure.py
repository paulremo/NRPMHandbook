import pytest
from scipy import stats
import numpy as np

# import module
from nrpmint.booktools import fatigue_failure
from nrpmint.reliability.random_variables import UniRV, MultiRV

@pytest.mark.parametrize(
    'Dist_DCR, E_DCR, CoV_DCR, Dist_A, E_A, CoV_A, Dist_SSF, E_SSF, CoV_SSF, Dist_coll, E_coll, CoV_coll,'
    'Dist_MU, E_MU, CoV_MU,'
    'B, N, Pf_true', [
        ('LogNormal', 1e13, 0.2, 'Normal', 3, 0.3, 'LogNormal', 1, 0.2, 'LogNormal', 200, 0.2, 'LogNormal', 1.2, 0.2, 2, 1e9, None),
        ('Gumbel', 1e12, 0.2, 'LogNormal', 3, 0.3, 'Normal', 1, 0.2, 'Gumbel', 200, 0.2, 'LogNormal', 1.2, 0.2, 2, 1e9, None),
        ('LogNormal', 1e12, 0.2, 'Gumbel', 3, 0.3, 'Gumbel', 1, 0.2, 'Normal', 200, 0.2, 'LogNormal', 1.2, 0.2, 2, 1e9, None),
    ]
)
def test_running_model(Dist_DCR, E_DCR, CoV_DCR, Dist_A, E_A, CoV_A, Dist_SSF, E_SSF, CoV_SSF, Dist_coll, E_coll, CoV_coll,
                       Dist_MU, E_MU, CoV_MU, B, N, Pf_true):
    """
    Tests whether the model can be run with the provided single_analysis and asserts the analytical results, where
    available.
    """
    reliability_analysis, load_collective = fatigue_failure.single_analysis(Dist_DCR=Dist_DCR, E_DCR=E_DCR, CoV_DCR=CoV_DCR,
                                                           Dist_A=Dist_A, E_A=E_A, CoV_A=CoV_A,
                                                           Dist_SSF=Dist_SSF, E_SSF=E_SSF, CoV_SSF=CoV_SSF,
                                                           Dist_coll=Dist_coll, E_coll=E_coll, CoV_coll=CoV_coll,
                                                           Dist_MU=Dist_MU, E_MU=E_MU, CoV_MU=CoV_MU,
                                                           B=B, N=N)

    # precompute recurring sum over load collective
    load_collective_sum = np.sum(load_collective[:,0] ** B * load_collective[:,1])
    if Pf_true == None:
        # failure probability not provided, compute it
        if Dist_DCR == 'LogNormal' and Dist_A == 'Normal' and Dist_SSF == 'LogNormal' and Dist_MU == 'LogNormal':
            # analytical solution available, if all distributions are LogNormal and distribution of A is normal
            mean_x1 = E_DCR
            mean_ten_minA_SSF_B = 10 ** (-E_A + 1/2*np.log(10)*(E_A*CoV_A)**2) * E_SSF ** B * (np.sqrt(CoV_SSF**2+1)) ** (B**2 - B)
            mean_x2 = mean_ten_minA_SSF_B * load_collective_sum
            CoV_x1 = CoV_DCR
            CoV_x2 = np.sqrt(10**(E_A*CoV_A*np.log(10)) * (np.sqrt(CoV_SSF**2 + 1))**(B**2) - 1)
            # equation for analytical solution from handbook
            Pf_true = stats.norm.cdf(
                (np.log(E_MU) - np.log(mean_x1/mean_x2) + 0.5*(np.log(CoV_x1**2+1) - np.log(CoV_x2**2+1) - np.log(CoV_MU**2+1)))/
                (np.sqrt(np.log(CoV_x1**2+1) + np.log(CoV_x2**2+1) +np.log(CoV_MU**2+1)))
            )
        else:
            # sampling-based solution required
            DCR_dist = UniRV(Dist_DCR, E_DCR, CoV_DCR)
            A_dist = UniRV(Dist_A, E_A, CoV_A)
            SSF_dist = UniRV(Dist_SSF, E_SSF, CoV_SSF)
            MU_dist = UniRV(Dist_MU, E_MU, CoV_MU)

            x_dist = MultiRV([DCR_dist, A_dist, SSF_dist, MU_dist])
            x = x_dist.rvs(10 ** 6)

            Pf_true = np.mean((x[:,0]-x[:,3]*(10**(-x[:,1]))*(x[:,2]**B)*load_collective_sum)<0)

    assert reliability_analysis.Pf == pytest.approx(Pf_true, rel=5e-1)


@pytest.mark.parametrize(
    'Dist_DCR, E_DCR, CoV_DCR, Dist_A, E_A, CoV_A, Dist_SSF, E_SSF, CoV_SSF, Dist_coll, E_coll, CoV_coll,'
    'Dist_MU, E_MU, CoV_MU,'
    'B, N', [
        ('LogNormal', 1e13, 0.2, 'Normal', 3, 0.3, 'LogNormal', 1, 0.2, 'LogNormal', 200, 0.2, 'LogNormal', 1.2, 0.2, 2, 1e9),
    ]
)
def test_display(Dist_DCR, E_DCR, CoV_DCR, Dist_A, E_A, CoV_A, Dist_SSF, E_SSF, CoV_SSF, Dist_coll, E_coll, CoV_coll,
                 Dist_MU, E_MU, CoV_MU, B, N,):
    """
    Tests whether the display function works on a reliability analysis by calling the model_wrapper.
    """

    fatigue_failure.model_wrapper(Dist_DCR=Dist_DCR, E_DCR=E_DCR, CoV_DCR=CoV_DCR, Dist_A=Dist_A, E_A=E_A, CoV_A=CoV_A,
                                  Dist_SSF=Dist_SSF, E_SSF=E_SSF, CoV_SSF=CoV_SSF, Dist_coll=Dist_coll, E_coll=E_coll,
                                  CoV_coll=CoV_coll, Dist_MU=Dist_MU, E_MU=E_MU, CoV_MU=CoV_MU, B=B, N=N)