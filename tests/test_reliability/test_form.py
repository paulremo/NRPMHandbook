import pytest
from scipy import stats
import numpy as np

# import module
from nrpmint.reliability.form import form

class UniRV:
    """
    Class for scipy univariate distribution object specified by mean and CoV
    """
    def __init__(self, dist_type, mean, CoV):
        # init
        stdv = mean*CoV

        # switch distribution type
        if dist_type=='Normal':
            self.dist = stats.norm(loc=mean, scale=stdv)
        elif dist_type=='LogNormal':
            # compute parameters from moments
            mu = np.log(mean**2/(mean**2 + stdv**2)**0.5)
            sigma = np.log(1 + stdv**2/mean**2)**0.5
            self.dist = stats.lognorm(s=sigma, scale=np.exp(mu))
        elif dist_type=='Gumbel':
            # compute parameters from moments
            beta = (6*stdv**2/np.pi**2)**0.5
            mu = mean - beta*np.euler_gamma
            self.dist = stats.gumbel_r(loc=mu, scale=beta)
            
            
class MultiRV:
    """
    Class for scipy multivariate distribution object specified by marginal UniRVs and correlation matrix. This object
    implicitly assumes a Gaussian copula because it uses the Nataf transform to sample random variates.
    """
    def __init__(self, marginals, corrmat=None):
        # assert that corrmat is positive definite
        assert np.all(np.linalg.eigvals(corrmat) > 0)
        # assert that size of marginals list and corrmat match
        assert np.all(len(marginals) == len(corrmat))

        self.n_dim = len(marginals)
        self.corrmat = corrmat
        self.marginals = marginals

    def rvs(self, n):
        """
        Sample from random vector using the Nataf transform.
        """
        norm_sample = stats.multivariate_normal.rvs(cov=self.corrmat, size=n)
        unif_sample = stats.norm.cdf(norm_sample)
        x = np.zeros((n, self.n_dim))
        for idx, marginal in enumerate(self.marginals):
            # transform to real space
            x[:,idx] = marginal.dist.ppf(unif_sample[:,idx])

        return x


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
        r_rv = UniRV(dist_type_r, R['E'], R['CoV'])
        a_rv = UniRV(dist_type_a, A['E'], A['CoV'])
        x_rv = MultiRV([r_rv, a_rv], corrmat)

        x = x_rv.rvs(10**8)
        Pf_true = np.mean((x[:,0]-x[:,1])<0)

    # conduct FORM analysis
    lsf = lambda R, A: R-A
    reliability_analysis = form(lsf, corrmat=corrmat, R=R, A=A)

    assert reliability_analysis.Pf == pytest.approx(Pf_true, rel=5e-1)