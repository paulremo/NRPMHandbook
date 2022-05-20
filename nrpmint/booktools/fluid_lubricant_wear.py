# display packages
from nrpmint.interface.web import UI

# scientific packages
from nrpmint.reliability.form import form
from nrpmint.reliability.random_variables import stochastic_model_to_multirv
import numpy as np
from matplotlib import pyplot as plt


def display(reliability_analyses, mult_one_idx, rev_per_hour, n_samples=10**5):
    '''Displays the reliability analysis results'''
    # extract random vector and constants
    main_analysis = reliability_analyses[mult_one_idx]
    joint_dist = stochastic_model_to_multirv(main_analysis.model)
    M0 = main_analysis.model.consts['M0']
    Minact = main_analysis.model.consts['Minact']
    Nb = main_analysis.model.consts['Nb']
    bd = main_analysis.model.consts['bd']
    pd = main_analysis.model.consts['pd']
    pm = main_analysis.model.consts['pm']
    theta = main_analysis.model.consts['theta']
    nrev = main_analysis.model.consts['nrev']

    # sample from random variables
    x = joint_dist.rvs(n_samples)

    # evaluate limit_state function
    g, r, a = limit_state_function(x[:, 0], x[:, 1], Nb, M0, Minact, bd, pd, pm, theta, nrev, sep_out=True)

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
    plt.xlabel(r'volume $m^3$')
    plt.ylabel('probability density function')
    plt.legend(['Limiting Volume', 'Volume worn away'])

    plt.figure(2)
    plt.plot(nrev / (rev_per_hour * 365 * 24), pf_mat[mult_one_idx], 'ro')
    plt.plot(np.array(nrev_mat) / (rev_per_hour * 365 * 24), pf_mat, 'r--')
    plt.ylabel('probability of failure ')
    plt.xlabel('years')
    plt.legend(['pf @ limiting fluid lubricant','fluid lubricant worn away'])


def limit_state_function(K, MU, Nb, M0, Minact, bd, pd, pm, theta, nrev, sep_out=False):
    """
    Limit state function used in this (simplified) model fluid lubricant wear model
    """
    #M0 - Initial mass of lubricant [g]
    #Minact - Mass of the lubricant not participating (1-2%
    # M inactive is a small fraction of M0, around 1-2%
    r = M0-Minact

    #MU - Model uncertainty / Lognormal
    #Nb - Number of balls in bearing
    #bd - Ball diameter
    #pd - Pitch diameter
    #pm - Contact pressure
    #theta- Contact angle
    #nrev - number of revolutions
    #K -Empirical constant of the lubricant life model / Lognormal

    a = MU * (Nb/2*(1-(bd/pd)*np.cos(theta)))/(2*K*np.exp(-3.35*pm))* nrev

    # Limit state function
    g = r - a

    if sep_out:
        return g, r, a
    else:
        return g


def single_analysis(Dist_K, E_K, CoV_K, Dist_MU, E_MU, CoV_MU, M0, Minact, Nb, bd, pd, pm, theta, nrev):
    '''
    Wrapper for nrpmint.reliability.form that passes the arguments to the correct dictionary structure and returns the
    reliability analysis.
    '''

    K = {
        'dist': Dist_K,
        'E': E_K,
        'CoV': CoV_K
    }
    MU = {
        'dist': Dist_MU,
        'E': E_MU,
        'CoV': CoV_MU
    }

    # define limit-state function
    lsf = lambda K, MU, M0, Minact, Nb, bd, pd, pm, theta, nrev: \
        limit_state_function(K, MU, Nb, M0, Minact, bd, pd, pm, theta, nrev)

    # run and return form reliability analysis
    return form(lsf, M0=M0, Minact=Minact, K=K, Nb=Nb, MU=MU, bd=bd, pd=pd, pm=pm, theta=theta, nrev=nrev)


def model_wrapper(Dist_K, E_K, CoV_K, Dist_MU, E_MU, CoV_MU, M0, Minact, Nb, bd, pd, pm,theta, nrev, rev_per_hour):
    '''Wrapper to be called by ipywidgets to run the reliability analyses and display the outputs.'''

    # do a set of reliability analyses for different nrev
    mult_list = [0.8, 0.9, 1, 1.1, 1.2]
    mult_one_idx = mult_list.index(1)
    reliability_analyses = []
    for mult in mult_list:
        # run form reliability analysis
        curr_nrev = nrev*mult
        rel_analysis = single_analysis(Dist_K=Dist_K, E_K=E_K, CoV_K=CoV_K, Dist_MU=Dist_MU, E_MU=E_MU, CoV_MU=CoV_MU,
                                       M0=M0, Minact=Minact, Nb=Nb, bd=bd, pd=pd, pm=pm, theta=theta, nrev=curr_nrev)

        reliability_analyses.append(rel_analysis)

    # display
    display(reliability_analyses, mult_one_idx, rev_per_hour)

    # print
    print(f'The failure probability is {reliability_analyses[mult_one_idx].getFailure()[0]}')


def web_ui():
    '''Prepare user interface to interact with reliabilty functions'''
    # prepare sliders and drop downs
    Dist_K = {
        'type': 'dropdown',
        #'description': 'Dist $K$',
        'description': 'Dist K',
        'value': 'Gumbel',
        'options': ['LogNormal', 'Normal', 'Gumbel'],
    }
    E_K = {
        'type': 'floatslider',
        #'description': '$\\text{E}[K]$',
        'description': 'E[K]',
        'value': 1e8,
        'min': 1e6,
        'max': 1e10,
        'step': 1e5,
        'readout_format': '.1e'
    }
    CoV_K = {
        'type': 'floatslider',
        #'description': '$\\text{C.o.V.}[K]$',
        'description': 'C.o.V.[K]',
        'value': 0.75,
        'min': 0.05,
        'max': 0.75,
        'step': 0.05,
        'readout_format': '.2f'
    }
    Dist_MU = {
        'type': 'dropdown',
        #'description': 'Dist $\Theta$',
        'description': 'Dist Theta',
        'value': 'LogNormal',
        'options': ['LogNormal'],
    }
    E_MU = {
        'type': 'floatslider',
        #'description': '$\\text{E}[\Theta]$',
        'description': 'E[Theta]',
        'value': 1,
        'min': 0.01,
        'max': 1,
        'step': 0.01,
        'readout_format': '.1e'
    }
    CoV_MU = {
        'type': 'floatslider',
        #'description': '$\\text{C.o.V.}[\Theta]$',
        'description': 'C.o.V.[Theta]',
        'value': 0.2,
        'min': 0.05,
        'max': 1,
        'step': 0.05,
        'readout_format': '.2f'
    }
    M0 = {
        'type': 'floatslider',
        #'description': '$M_0$',
        'description': 'M_0',
        'value': 80,
        'min': 10,
        'max': 100,
        'step': 1,
        'readout_format': '.0f'
    }
    Minact = {
        'type': 'floatslider',
        #'description': '$M_{\\text{inact}}$',
        'description': 'M_inact',
        'value': 80*0.01,
        'min': 1,
        'max': 100,
        'step': 1,
        'readout_format': '.0f'
    }
    Nb = {
        'type': 'floatslider',
        #'description': '$N_b$',
        'description': 'N_b',
        'value': 25,
        'min': 15,
        'max': 30,
        'step': 0.5,
        'readout_format': '.1f'
    }
    bd = {
        'type': 'floatslider',
        #'description': '$b_d$',
        'description': 'b_d',
        'value': 12.5,
        'min': 5,
        'max': 40,
        'step': 0.1,
        'readout_format': '.1f'
    }
    pd = {
        'type': 'floatslider',
        #'description': '$p_d$',
        'description': 'p_d',
        'value': 50,
        'min': 10,
        'max': 200,
        'step': 1,
        'readout_format': '.0f'
    }
    #Check if GPa or MPa
    pm = {
        'type': 'floatslider',
        #'description': '$p_m$',
        'description': 'p_m',
        'value': 0.8,
        'min': 0.1,
        'max': 5,
        'step': 0.1,
        'readout_format': '.0f'
    }
    # Check if rad or degree
    theta = {
        'type': 'floatslider',
        #'description': '$\\theta$',
        'description': 'theta',
        'value': 10,
        'min': 0,
        'max': 45,
        'step': 1,
        'readout_format': '.0f'
    }
    nrev = {
        'type': 'floatslider',
        #'description': '$\\text{E}[r]$',
        'description': 'E[r]',
        'value': 1e+6,
        'min': 1e+5,
        'max': 1e+8,
        'step': 1e+5,
        'readout_format': '.1e'
    }
    rev_per_hour = {
        'type': 'floatslider',
        #'description': '$\\text{E}[r_h]$',
        'description': 'E[r_h]',
        'value': 1e+6,
        'min': 1e6,
        'max': 1e+7,
        'step': 1e+6,
        'readout_format': '.1e'
    }

    # initialize interface
    UI(model_wrapper, n_cols=2, Dist_K=Dist_K, E_K=E_K, CoV_K=CoV_K, Dist_MU=Dist_MU, E_MU=E_MU, CoV_MU=CoV_MU, M0=M0,
       Minact=Minact, Nb=Nb, bd=bd, pd=pd, pm=pm, theta=theta, nrev=nrev, rev_per_hour=rev_per_hour)