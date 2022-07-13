import pytest
from scipy import stats
import numpy as np

# import module
from nrpmint.reliability.random_variables import UniRV, MultiRV

@pytest.mark.parametrize('dist_type', [('Normal'), ('LogNormal'), ('Gumbel')])
def test_univariate(dist_type):
    """
    Tests whether the distribution functions of UniRV are identical to their scipy aequivalents
    """
    # to be implemented


@pytest.mark.parametrize('dist_type_x1, dist_type_x2, correlation', [
    ('Normal', 'LogNormal', -0.9),
    ('LogNormal', 'Gumbel', 0.9),
    ('LogNormal', 'Normal', 0)
])
def test_multivariate(dist_type_x1, dist_type_x2, correlation):
    """
    Tests whether a sample of a multivariate distribution has the specified moments
    """
    X1 = {
        'dist_type': dist_type_x1,
        'mean': 1,
        'CoV': 0.5
    }

    X2 = {
        'dist_type': dist_type_x2,
        'mean': 1,
        'CoV': 0.5
    }

    corrmat = [[1.0, correlation],
               [correlation, 1.0]]

    # construct object and sample
    x_rv = MultiRV([UniRV(**X1), UniRV(**X2)], corrmat)
    x = x_rv.rvs(10**7)

    # compute true values
    mean_true = [X1['mean'], X2['mean']]
    CoV_true = [X1['CoV'], X2['CoV']]

    # estimates
    mean_est = np.mean(x, axis=0)
    std_est = np.std(x, axis=0)
    CoV_est = std_est/mean_est

    # assertions
    assert mean_true == pytest.approx(mean_est, rel=1e-2)
    assert CoV_true == pytest.approx(CoV_est, rel=1e-2)