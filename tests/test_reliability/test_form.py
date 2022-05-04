import pytest
from scipy import stats
import numpy as np

# import module
from nrpmint.reliability.form import form

def get_univariate_distribution(dist_type, mean, CoV):
    """
    Returns scipy univariate distribution object specified by mean and CoV
    """

    stdv = mean*CoV

    if dist_type=='Normal':
        dist = stats.norm(loc=mean, scale=stdv)
    elif dist_type=='LogNormal':
        # compute parameters from moments
        mu = np.log(mean**2/(mean**2 + stdv**2)**0.5)
        sigma = np.log(1 + stdv**2/mean**2)**0.5
        dist = stats.lognorm(s=sigma, scale=np.exp(mu))
    elif dist_type=='Gumbel':
        # compute parameters from moments
        beta = (6*stdv**2/np.pi**2)**0.5
        mu = mean - beta*np.euler_gamma
        dist = stats.gumbel_r(loc=mu, scale=beta)

    return dist


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
    dist = get_univariate_distribution(dist_type, R['E'], R['CoV'])
    Pf_true = dist.cdf(c)

    # conduct FORM analysis
    lsf = lambda R: R-c
    reliability_analysis = form(lsf, R=R)

    assert reliability_analysis.Pf == pytest.approx(Pf_true, rel=1e-3)


@pytest.mark.parametrize('dist_type_r, dist_type_a, Pf_true', [
    ('Normal', 'LogNormal', 0.00013928),
    ('LogNormal', 'Gumbel', 0.00023707)
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

    corrmat = [[1.0, 0.8],
               [0.8, 1.0]]

    # compute true Pf, if it is not precomputed for speed
    if Pf_true == None:
        # Nataf transform
        n = stats.multivariate_normal.rvs(cov=corrmat, size=10**8)
        u = stats.norm.cdf(n)
        # transform R
        dist_r = get_univariate_distribution(dist_type_r, R['E'], R['CoV'])
        r = dist_r.ppf(u[:,0])
        # transform a
        dist_a = get_univariate_distribution(dist_type_a, A['E'], A['CoV'])
        a = dist_a.ppf(u[:,1])
        Pf_true = np.mean((r-a)<0)

    # conduct FORM analysis
    lsf = lambda R, A: R-A
    reliability_analysis = form(lsf, corrmat=corrmat, R=R, A=A)

    assert reliability_analysis.Pf == pytest.approx(Pf_true, rel=1)