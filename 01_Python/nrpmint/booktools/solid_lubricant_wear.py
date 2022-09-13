# Copyright (C) Matrisk GmbH 2022

# display packages
from nrpmint.interface.web import UI

# scientific packages
from nrpmint.reliability.form import form
from nrpmint.reliability.random_variables import stochastic_model_to_multirv
import numpy as np
from matplotlib import pyplot as plt


def get_inputs(value_default = 'mean'):
    inputs = {
        'Dist_Vlim': {
            'type': 'dropdown',
            # 'description': 'Dist $V_{\\text{lim}}$',
            'description': 'Dist V_lim',
            'options': ['LogNormal','Normal'],
            'value': value_default
        },
        'E_Vlim': {
            'type': 'floatslider',
            # 'description': '$\\text{E}[V_{\\text{lim}}]$',
            'description': 'E[V_lim]',
            'min': 1e-8,
            'max': 1e-7,
            'readout_format': '.1e',
            'value': value_default
        },
        'CoV_Vlim': {
            'type': 'floatslider',
            # 'description': '$\\text{C.o.V.}[V_{\\text{lim}}]$',
            'description': 'C.o.V.[V_lim]',
            'min': 0.05,
            'max': 0.3,
            'readout_format': '.2f',
            'value': value_default
        },
        'Dist_KH': {
            'type': 'dropdown',
            # 'description': 'Dist $K_H$',
            'description': 'Dist K_H',
            'options': ['LogNormal', 'Normal', 'Gumbel'],
            'value': value_default
        },
        'E_KH': {
            'type': 'floatslider',
            # 'description': '$\\text{E}[K_H]$',
            'description': 'E[K_H]',
            'min': 1e-15,
            'max': 1e-14,
            'readout_format': '.1e',
            'value': value_default
        },
        'CoV_KH': {
            'type': 'floatslider',
            # 'description': '$\\text{C.o.V.}[K_H]$',
            'description': 'C.o.V[K_H]',
            'min': 0.05,
            'max': 0.3,
            'readout_format': '.2f',
            'value': value_default
        },
        'Dist_alpha': {
            'type': 'dropdown',
            # 'description': 'Dist $\\alpha$',
            'description': 'Dist alpha',
            'options': ['LogNormal', 'Normal', 'Gumbel'],
            'value': value_default
        },
        'E_alpha': {
            'type': 'floatslider',
            # 'description': '$\\text{E}[\\alpha]$',
            'description': 'E[alpha]',
            'min': 0.01,
            'max': 0.1,
            'readout_format': '.1e',
            'value': value_default
        },
        'CoV_alpha': {
            'type': 'floatslider',
            # 'description': '$\\text{C.o.V.}[\\alpha]$',
            'description': 'C.o.V.[alpha]',
            'min': 0.05,
            'max': 0.3,
            'readout_format': '.2f',
            'value': value_default
        },
        'Dist_MU': {
            'type': 'dropdown',
            # 'description': 'Dist $\Theta$',
            'description': 'Dist Theta',
            'options': ['LogNormal','Normal'],
            'value': value_default
        },
        'E_MU': {
            'type': 'floatslider',
            # 'description': '$\\text{E}[\Theta]$',
            'description': 'E[Theta]',
            'min': 0.5,
            'max': 1.5,
            'readout_format': '.2f',
            'value': value_default
        },
        'CoV_MU': {
            'type': 'floatslider',
            # 'description': '$\\text{C.o.V.}[\Theta]$',
            'description': 'C.o.V.[Theta]',
            'min': 0.05,
            'max': 0.3,
            'readout_format': '.2f',
            'value': value_default
        },
        'rho_KH_alpha': {
            'type': 'floatslider',
            # 'description': '$\\rho_{KH,\\alpha}$',
            'description': 'rho_{KH,alpha}',
            'min': 0,
            'max': 0.9,
            'readout_format': '.1f',
            'value': value_default
        },
        'nrev': {
            'type': 'floatslider',
            # 'description': '$r$',
            'description': 'r',
            'min': 1e+8,
            'max': 1e+9,
            'readout_format': '.1e',
            'value': value_default
        },
        'rev_per_hour': {
            'type': 'floatlogslider',
            # 'description': '$r_h$',
            'description': 'r_h',
            'min': 2,
            'max': 5,
            'readout_format': '.1e',
            'value': value_default
        }
    }

    return inputs

def display(reliability_analyses, mult_one_idx, rev_per_hour, n_samples=10**5):
    '''Displays the reliability analysis results'''
    # extract random vector and constants
    main_analysis = reliability_analyses[mult_one_idx]
    joint_dist = stochastic_model_to_multirv(main_analysis.model)
    nrev = main_analysis.model.consts['nrev']

    # sample from random variables
    x = joint_dist.rvs(n_samples)

    # evaluate limit_state function
    g, r, a = limit_state_function(x[:,0], x[:,1], x[:,2], x[:,3], nrev, sep_out=True)

    # loop over analyses
    pf_mat, nrev_mat = [], []
    for rel_analysis in reliability_analyses:
        stochastic_model = rel_analysis.model

        # retrieve failure probability
        pf_mat.append(rel_analysis.getFailure())
        nrev_mat.append(stochastic_model.consts['nrev'])

    # plots
    plt.figure(1)
    plt.hist(r, bins=100, density=True, alpha=0.8)
    plt.hist(a, bins=100, density=True, alpha=0.8)
    plt.grid()
    plt.xlim(left=0)
    plt.xlabel(r'volume $m^3$')
    plt.ylabel('probability density function')
    plt.legend(['Limiting Volume', 'Volume worn away'])

    plt.figure(2)
    plt.plot(nrev / (rev_per_hour), pf_mat[mult_one_idx], 'ro')
    plt.plot(np.array(nrev_mat) / (rev_per_hour), pf_mat, 'r--')
    plt.grid()
    plt.ylabel('probability of failure')
    plt.xlabel('hours')
    plt.legend(['Limiting Volume','Volume worn away'])


def limit_state_function(Vlim, KH, alpha, MU, nrev, sep_out=False):
    """
    Limit state function used in this model.
    """
    r = Vlim
    a = MU * KH * alpha * nrev

    g = r - a

    if sep_out:
        return g, r, a
    else:
        return g


def single_analysis(Dist_Vlim, E_Vlim, CoV_Vlim, Dist_KH, E_KH, CoV_KH, Dist_alpha, E_alpha, CoV_alpha,
                    Dist_MU, E_MU, CoV_MU, rho_KH_alpha, nrev):
    '''
    Wrapper for nrpmint.reliability.form that passes the arguments to the correct dictionary structure and returns the
    reliability analysis.
    '''

    Vlim = {
        'dist': Dist_Vlim,
        'E': E_Vlim,
        'CoV': CoV_Vlim
    }
    KH = {
        'dist': Dist_KH,
        'E': E_KH,
        'CoV': CoV_KH
    }
    alpha = {
        'dist': Dist_alpha,
        'E': E_alpha,
        'CoV': CoV_alpha
    }
    MU = {
        'dist': Dist_MU,
        'E': E_MU,
        'CoV': CoV_MU
    }

    # correlation matrix
    corrmat = [[1.0, 0.0, 0.0, 0.0],
               [0.0, 1.0, rho_KH_alpha, 0.0],
               [0.0, rho_KH_alpha, 1.0, 0.0],
               [0.0, 0.0, 0.0, 1.0]]

    # define limit-state function
    lsf = lambda Vlim, KH, alpha, MU, nrev: limit_state_function(Vlim, KH, alpha, MU, nrev)

    # run and return form reliability analysis
    return form(lsf, corrmat=corrmat, Vlim=Vlim, KH=KH, alpha=alpha, MU=MU, nrev=nrev)


def model_wrapper(**kwargs):
    '''Wrapper to be called by ipywidgets to run the reliability analyses and display the outputs.'''

    # do a set of reliability analyses for different nrev
    mult_list = [0.8, 0.9, 1, 1.1, 1.2]
    mult_one_idx = mult_list.index(1)
    reliability_analyses = []
    curr_args = {i:kwargs[i] for i in kwargs if i!='rev_per_hour'}
    for mult in mult_list:
        # run form reliability analysis
        curr_args['nrev'] = kwargs['nrev']*mult
        rel_analysis = single_analysis(**curr_args)

        reliability_analyses.append(rel_analysis)

    # ensure that failure probability is not NaN:
    if np.isnan(reliability_analyses[mult_one_idx].getFailure()[0]):
        # print
        print(
            f'The algorithm failed because the failure probability is too small, change the input parameters and try again...')
    else:
        # display
        display(reliability_analyses, mult_one_idx, kwargs['rev_per_hour'])

        # print
        print(f'The failure probability is {reliability_analyses[mult_one_idx].getFailure()[0]:.2e} after {kwargs["nrev"]/kwargs["rev_per_hour"]:.2e} hours.')


def web_ui():
    '''Prepare user interface to interact with reliabilty functions'''
    # prepare sliders and drop downs
    inputs = get_inputs(value_default = 'mean')

    # scale variables as a fix for bug in slider widget
    E_Vlim_scale_units = 1e6
    E_KH_scale_units = 1e12
    inputs['E_KH']['min'] = inputs['E_KH']['min']* E_KH_scale_units
    inputs['E_KH']['max'] = inputs['E_KH']['max']* E_KH_scale_units
    inputs['E_Vlim']['min'] = inputs['E_Vlim']['min']* E_Vlim_scale_units
    inputs['E_Vlim']['max'] = inputs['E_Vlim']['max']* E_Vlim_scale_units


    model_wrapper_scaled = lambda **kwargs: model_wrapper(Dist_Vlim=kwargs['Dist_Vlim'], E_Vlim=kwargs['E_Vlim']/E_Vlim_scale_units,
                                                          CoV_Vlim=kwargs['CoV_Vlim'], Dist_KH=kwargs['Dist_KH'], E_KH=kwargs['E_KH']/E_KH_scale_units,
                                                          CoV_KH=kwargs['CoV_KH'], Dist_alpha=kwargs['Dist_alpha'], E_alpha=kwargs['E_alpha'],
                                                          CoV_alpha=kwargs['CoV_alpha'], Dist_MU=kwargs['Dist_MU'], E_MU=kwargs['E_MU'],
                                                          CoV_MU=kwargs['CoV_MU'], rho_KH_alpha=kwargs['rho_KH_alpha'], nrev=kwargs['nrev'],
                                                          rev_per_hour=kwargs['rev_per_hour'])

    # initialize interface
    UI(model_wrapper_scaled, n_cols=2, **inputs)