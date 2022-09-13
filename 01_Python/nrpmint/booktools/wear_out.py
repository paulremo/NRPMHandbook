# Copyright (C) Matrisk GmbH 2022

# display packages
from nrpmint.interface.web import UI

# scientific packages
import numpy as np
from matplotlib import pyplot as plt


def get_inputs(value_default='mean'):
    inputs = {
        'model_type': {
            'type': 'dropdown',
            'description': 'type',
            'options': ['Model 1', 'Model 2', 'Model 3'],
            'value': value_default
        },
        't_max': {
            'type': 'floatlogslider',
            # 'description': '$t_max$',
            'description': 't_max',
            'min': 1,
            'max': 7,
            'readout_format': '.1e',
            'value': value_default
        },
        'tau': {
            'type': 'floatlogslider',
            # 'description': '$\\tau$',
            'description': 'tau',
            'min': 1,
            'max': 7,
            'readout_format': '.1e',
            'value': value_default
        },
        'lambda_r': {
            'type': 'floatslider',
            # 'description': '$\\lambda_R$',
            'description': 'lambda_r',
            'min': 0,
            'max': 10,
            'readout_format': '.1e',
            'value': value_default
        },
        'alpha': {
            'type': 'floatlogslider',
            # 'description': '$\\alpha$',
            'description': 'alpha',
            'min': -2,
            'max': 6,
            'readout_format': '.1e',
            'value': value_default
        },
        'beta': {
            'type': 'floatslider',
            # 'description': '$\\beta$',
            'description': 'beta',
            'min': 0.1,
            'max': 10,
            'readout_format': '.2f',
            'value': value_default
        }
    }

    return inputs


def display(lamb, r, t):
    '''Displays the failure rate and reliability evolution'''
    # plots
    # PDFs
    plt.figure(1)
    plt.plot(t, lamb, linewidth=2, color='C0')
    plt.grid()
    plt.xscale('log')
    plt.yscale('log')
    plt.xlabel('time $t$ [h]')
    plt.ylabel('failure rate [1/h]')

    # Load collective
    plt.figure(2)
    plt.plot(t, r, linewidth=2, color='C1')
    plt.grid()
    plt.xscale('log')
    plt.yscale('log')
    plt.xlabel('time $t$ [h]')
    plt.ylabel('reliability')


def single_analysis(model_type, t_max, tau, lambda_r, alpha, beta, n_timesteps = 10**3):
    """
    Computes the failure rate and the reliability as a function of time
    """

    # compute timesteps (in log-scale)
    t_max_exp = np.floor(np.log10(t_max))
    t_max_fact = t_max / (10 ** t_max_exp)
    t = t_max_fact * np.logspace(0, t_max_exp, n_timesteps)
    # add tau
    idx = np.searchsorted(t, tau)
    t = np.insert(t, idx, tau)
    t_1 = t[t <= tau]
    t_2 = t[t > tau]


    if model_type == 'Model 1':
        lamb = lambda_r + (beta/alpha)*(t/alpha)**(beta - 1)
        r = np.exp(-(lambda_r + (t/alpha)**beta))
    if model_type == 'Model 2':
        lamb_1 = np.full((len(t_1)), lambda_r)
        lamb_2 = lambda_r + (beta/alpha) * ((t_2-tau)/alpha)**(beta-1)
        lamb = np.concatenate((lamb_1, lamb_2))
        r_1 = np.exp(-lambda_r*t_1)
        r_2 = np.exp(-(lambda_r + ((t_2-tau)/alpha)**beta))
        r = np.concatenate((r_1, r_2))
    if model_type == 'Model 3':
        lamb_1 = np.full((len(t_1)), lambda_r)
        lamb_2 = (beta/alpha) * (t_2/alpha)**(beta-1)
        lamb = np.concatenate((lamb_1, lamb_2))
        r_1 = np.exp(-lambda_r*t_1)
        r_2 = np.exp(-(t_2/alpha)**beta)
        r = np.concatenate((r_1, r_2))

    return lamb, r, t


def model_wrapper(**kwargs):
    '''Wrapper to be called by ipywidgets to run the reliability analyses and display the outputs.'''

    lamb, r, t = single_analysis(**kwargs)

    # display
    display(lamb, r, t)

    # print
    print(f'The failure rate at the end of the simulation time t_max = {kwargs["t_max"]:.2e} is {lamb[-1]:.2e} .')


def web_ui():
    '''Prepare user interface to interact with reliabilty functions'''
    # prepare sliders and drop downs
    inputs = get_inputs(value_default = 'mean')

    # initialize interface
    UI(model_wrapper, n_cols=2, **inputs)