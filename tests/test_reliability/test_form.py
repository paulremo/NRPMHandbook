import pytest
import numpy as np

# import module
from nrpmint.reliability.form import form, mcs
from nrpmint.reliability.random_variables import UniRV, MultiRV

@pytest.mark.parametrize('dist_type', [('Normal'), ('LogNormal'), ('Gumbel')])
def test_univariate(dist_type):
    """
    Tests whether the form analysis is correct for univariate problems on a simple limit-state function g(r)=r-c
    """
    R = {
        'dist': dist_type,
        'E': 10,
        'CoV': 0.1
    }

    # compute true Pf
    if dist_type=='Normal':
        c = 0
    elif dist_type=='LogNormal':
        c = 1
    elif dist_type=='Gumbel':
        c = 7
    my_dist = UniRV(dist_type, R['E'], R['CoV'])
    Pf_true = my_dist.dist.cdf(c)

    # conduct FORM analysis
    lsf = lambda R: R-c
    reliability_analysis = form(lsf, R=R)

    assert reliability_analysis.Pf == pytest.approx(Pf_true, rel=1e-3)


@pytest.mark.parametrize('dist_type_r, dist_type_a, Pf_true', [
    ('Normal', 'LogNormal', 3.804e-05),
<<<<<<< HEAD
    ('LogNormal', 'Gumbel', 4.144e-05)
=======
    ('LogNormal', 'Gumbel', 0.00023707)
>>>>>>> fcf632412fcdd1e056483ff185fe8ef42d08bb3a
])
def test_multivariate(dist_type_r, dist_type_a, Pf_true):
    """
    Tests whether the form analysis is correct for multivariate problems on a simple limit-state function g(r)=r-a
    """
    R = {
        'dist': dist_type_r,
        'E': 22,
        'CoV': 0.1
    }

    A = {
        'dist': dist_type_a,
        'E': 10,
        'CoV': 0.3
    }

    corrmat = [[1.0, 0.99],
               [0.99, 1.0]]

    # compute true Pf, if it is not precomputed for speed
    if Pf_true == None:
        r_rv = UniRV(dist_type_r, R['E'], R['CoV'])
        a_rv = UniRV(dist_type_a, A['E'], A['CoV'])
        x_rv = MultiRV([r_rv, a_rv], corrmat)

        x = x_rv.rvs(10**8)
        Pf_true = np.mean((x[:,0]-x[:,1])<0)

    # conduct MCS analysis
    lsf = lambda R, A: R-A
    reliability_analysis = mcs(lsf, corrmat=corrmat, R=R, A=A)
    assert reliability_analysis.Pf == pytest.approx(Pf_true, rel=5e-1)

    # conduct FORM analysis
    reliability_analysis = form(lsf, corrmat=corrmat, R=R, A=A)
    assert reliability_analysis.Pf == pytest.approx(Pf_true, rel=5e-1)

