# display packages
from nrpmint.interface.web import UI

# scientific packages
from nrpmint.reliability.form import form
from nrpmint.reliability.random_variables import stochastic_model_to_multirv
import numpy as np
from matplotlib import pyplot as plt


def get_inputs(value_default = 'mean'):
    inputs = {
        'Dist_X1': {
            'type': 'dropdown',
            # 'description': 'Dist $X_1$',
            'description': 'Dist X1',
            'options': ['LogNormal'],
            'value': value_default
        },
        'E_X1': {
            'type': 'floatslider',
            # 'description': '$\\text{E}[X_1]$',
            'description': 'E[X1]',
            'min': 0.1,
            'max': 100,
            'step': 0.1,
            'readout_format': '.1e',
            'value': value_default
        },
        'CoV_X1': {
            'type': 'floatslider',
            # 'description': '$\\text{C.o.V.}[X_1]$',
            'description': 'C.o.V.[X1]',
            'min': 0.05,
            'max': 0.3,
            'step': 0.01,
            'readout_format': '.2f',
            'value': value_default
        },
        'Dist_X2': {
            'type': 'dropdown',
            # 'description': 'Dist $X_2$',
            'description': 'Dist X2',
            'options': ['LogNormal', 'Normal', 'Gumbel'],
            'value': value_default
        },
        'E_X2': {
            'type': 'floatslider',
            # 'description': '$\\text{E}[X_2]$',
            'description': 'E[X2]',
            'min': 0.1,
            'max': 60,
            'step': 0.1,
            'readout_format': '.1e',
            'value': value_default
        },
        'CoV_X2': {
            'type': 'floatslider',
            # 'description': '$\\text{C.o.V.}[X_2]$',
            'description': 'C.o.V.[X2]',
            'min': 0.05,
            'max': 0.3,
            'step': 0.01,
            'readout_format': '.2f',
            'value': value_default
        },
        'rho_X1_X2': {
            'type': 'floatslider',
            # 'description': '$\\rho_{X_1,X_2}$',
            'description': 'rho_X1_X2',
            'min': -0.9,
            'max': 0.9,
            'step': 0.05,
            'readout_format': '.2f',
            'value': value_default
        }
    }

    return inputs


def display(reliability_analysis, n_samples=10**5):
    '''Displays the reliability analysis results'''
    # extract random vector and constants
    joint_dist = stochastic_model_to_multirv(reliability_analysis.model)

    # sample from random variables
    x = joint_dist.rvs(n_samples)

    # evaluate limit_state function
    g, r, a = limit_state_function(x[:,0], x[:,1], sep_out=True)

    # plots
    plt.figure(1)
    plt.hist(r, bins=100, density=True, alpha=0.8)
    plt.hist(a, bins=100, density=True, alpha=0.8)
    plt.grid()
    plt.xlim(left=0)
    plt.xlabel(r'stress and strength')
    plt.ylabel('probability density function')
    plt.legend(['Strength', 'Stress'])

    plt.figure(2)
    plt.scatter(r, a, c=1*(r<a))
    diagonal_limits = np.array([0, 1])*np.max((r,a))
    plt.plot(diagonal_limits, diagonal_limits, linewidth=2, linestyle='--', color='black')
    plt.grid()
    plt.ylabel('Strength')
    plt.xlabel('Stress')
    plt.legend(['Realizations','Limit state function $g(X_1,X_2)=0$'])


def limit_state_function(r, a, sep_out=False):
    """
    Limit state function used in this model.
    """

    g = r - a

    if sep_out:
        return g, r, a
    else:
        return g


def single_analysis(Dist_X1, E_X1, CoV_X1, Dist_X2, E_X2, CoV_X2, rho_X1_X2):
    '''
    Wrapper for nrpmint.reliability.form that passes the arguments to the correct dictionary structure and returns the
    reliability analysis.
    '''

    X1 = {
        'dist': Dist_X1,
        'E': E_X1,
        'CoV': CoV_X1
    }
    X2 = {
        'dist': Dist_X2,
        'E': E_X2,
        'CoV': CoV_X2
    }

    # correlation matrix
    corrmat = [[1.0, rho_X1_X2],
               [rho_X1_X2, 1.0]]

    # define limit-state function
    lsf = lambda X1, X2: limit_state_function(X1, X2)

    # run and return form reliability analysis
    return form(lsf, corrmat=corrmat, X1=X1, X2=X2)


def model_wrapper(**kwargs):
    '''Wrapper to be called by ipywidgets to run the reliability analyses and display the outputs.'''

    # run form reliability analysis
    reliability_analysis = single_analysis(**kwargs)

    # ensure that failure probability is not NaN:
    if np.isnan(reliability_analysis.getFailure()[0]):
        # print
        print(
            f'The algorithm failed because the failure probability is too small, change the input parameters and try again...')
    else:
        # display
        display(reliability_analysis)

        # print
        print(f'The failure probability is {reliability_analysis.getFailure()[0]:.2e}.')


def web_ui():
    '''Prepare user interface to interact with reliability functions'''
    # prepare sliders and drop downs
    inputs = get_inputs(value_default = 'mean')

    # initialize interface
    UI(model_wrapper, n_cols=2, **inputs)