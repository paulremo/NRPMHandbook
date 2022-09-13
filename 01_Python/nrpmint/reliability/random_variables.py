# Copyright (C) Matrisk GmbH 2022

from scipy import stats
import numpy as np

class UniRV:
    """
    Class for scipy univariate distribution object specified by mean and CoV
    """
    def __init__(self, dist_type, mean, CoV):
        # init
        stdv = mean*CoV

        # switch distribution type
        if dist_type.casefold() == 'normal':
            self.dist = stats.norm(loc=mean, scale=stdv)
        elif dist_type.casefold() == 'lognormal':
            # compute parameters from moments
            mu = np.log(mean**2/(mean**2 + stdv**2)**0.5)
            sigma = np.log(1 + stdv**2/mean**2)**0.5
            self.dist = stats.lognorm(s=sigma, scale=np.exp(mu))
        elif dist_type.casefold() == 'gumbel':
            # compute parameters from moments
            beta = (6*stdv**2/np.pi**2)**0.5
            mu = mean - beta*np.euler_gamma
            self.dist = stats.gumbel_r(loc=mu, scale=beta)
        else:
            print(f"Unknown distribution type {dist_type}!")


class MultiRV:
    """
    Class for scipy multivariate distribution object specified by marginal UniRVs and correlation matrix. This object
    implicitly assumes a Gaussian copula because it uses the Nataf transform to sample random variates.
    """
    def __init__(self, marginals, corrmat=None):
        # provide default corrmat, if it is not given
        if corrmat is None:
            corrmat = np.eye(len(marginals))
        else:
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


def stochastic_model_to_multirv(stochastic_model):
    """
    Transforms a pystra stochastic model to a MultiRV object.
    """
    marginals = []
    for var in stochastic_model.variables:
        dist = stochastic_model.variables[var].dist_type
        mean = stochastic_model.variables[var].getMean()
        cov = stochastic_model.variables[var].getStdv() / mean

        marginals.append(UniRV(dist, mean, cov))

    # sample from random variables
    corrmat = stochastic_model.correlation

    return MultiRV(marginals, corrmat)