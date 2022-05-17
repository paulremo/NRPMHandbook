# display packages
import IPython
import ipywidgets as widgets
from ipywidgets import interactive, Layout, HBox, VBox

# scientific packages
from nrpmint.reliability.form import form
from nrpmint.reliability.random_variables import UniRV, MultiRV
import numpy as np
from matplotlib import pyplot as plt
import pystra


def display(reliability_analyses, mult_one_idx, rev_per_hour):
    '''Displays the reliability analysis results'''
    pf_mat, nrev_mat = [], []

    # compute results for the main analysis
    main_analysis = reliability_analyses[mult_one_idx]
    stochastic_model = main_analysis.model

    # retrieve distribution properties
    K = stochastic_model.variables['K']
    E_K = K.getMean()
    CoV_K = K.getStdv() / E_K
    Dist_K = K.dist_type

    MU = stochastic_model.variables['MU']
    E_MU = MU.getMean()
    CoV_MU = MU.getStdv() / E_MU
    Dist_MU = MU.dist_type

    pm = stochastic_model.consts['pm']
    bd = stochastic_model.consts['bd']
    pd = stochastic_model.consts['pd']
    Nb = stochastic_model.consts['Nb']
    xi = stochastic_model.consts['xi']
    Minact= stochastic_model.consts['Minact']
    M0 = stochastic_model.consts['M0']
    nrev = stochastic_model.consts['nrev']



    # evaluate limit_state function
    #g, r, a = limit_state_function(M0, Minact, K, Nb, MU, bd, pd, pm, xi, nrev, sep_out=True)


    # loop over analyses
    for rel_analysis in reliability_analyses:
        stochastic_model = rel_analysis.model

        # retrieve failure probability
        pf_mat.append(rel_analysis.getFailure())
        nrev_mat.append(stochastic_model.consts['nrev'])

    # # plots
    # plt.figure(1)
    # #plt.hist(r, bins=100, density=True, alpha=0.8)
    # plt.hist(a, bins=100, density=True, alpha=0.8)
    # plt.xlabel(r'volume $m^3$')
    # plt.ylabel('probability density function')
    # plt.legend(['Limiting Volume', 'Volume worn away'])

    plt.figure(2)
    plt.plot(nrev / (rev_per_hour * 365 * 24), pf_mat[mult_one_idx], 'ro')
    plt.plot(np.array(nrev_mat) / (rev_per_hour * 365 * 24), pf_mat, 'r--')
    plt.ylabel('probability of failure ')
    plt.xlabel('years')
    plt.legend(['pf @ limiting fluid lubricant','fluid lubricant worn away'])


def limit_state_function(M0, Minact, K, Nb, MU, bd, pd, pm, xi, nrev, sep_out=False):
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
    #xi- Contact angle
    #nrev - number of revolutions
    #K -Empirical constant of the lubricant life model / Lognormal

    a = MU * (Nb/2-(1-(bd/pd)*np.cos(xi)))/(2*K*np.exp(-3.35*pm))* nrev

    # Limit state function
    g = r - a

    if sep_out:
        return g, r, a
    else:
        return g


def single_analysis(M0, Minact, Dist_K, E_K, CoV_K, Nb, Dist_MU, E_MU, CoV_MU, bd, pd, pm, xi, nrev):
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
    lsf = lambda M0, Minact, K, Nb, MU, bd, pd, pm, xi, nrev: limit_state_function(M0, Minact, K, Nb, MU, bd, pd, pm, xi, nrev)

    # run and return form reliability analysis
    return form(lsf, M0=M0, Minact=Minact, K=K, Nb=Nb, MU=MU, bd=bd, pd=pd, pm=pm, xi=xi, nrev=nrev)


def model_wrapper(Dist_K, E_K, CoV_K, Dist_MU, E_MU, CoV_MU,
                  M0, Minact,Nb,bd,pd,pm,xi,nrev, rev_per_hour):
    '''Wrapper to be called by ipywidgets to run the reliability analyses and display the outputs.'''

    # do a set of reliability analyses for different nrev
    mult_list = [0.8, 0.9, 1, 1.1, 1.2]
    mult_one_idx = mult_list.index(1)
    reliability_analyses = []
    for mult in mult_list:
        # run form reliability analysis
        curr_nrev = nrev*mult
        rel_analysis = single_analysis(M0=M0, Minact=Minact, Dist_K=Dist_K, E_K=E_K, CoV_K=CoV_K, Nb=Nb, Dist_MU=Dist_MU, E_MU=E_MU, CoV_MU=CoV_MU, bd=bd, pd=pd, pm=pm, xi=xi, nrev=curr_nrev)

        reliability_analyses.append(rel_analysis)

    # display
    display(reliability_analyses, mult_one_idx, rev_per_hour)

    # print
    print(f'The failure probability is {reliability_analyses[mult_one_idx].getFailure()[0]}')


def web_ui():
    '''Prepare user interface to interact with reliabilty functions'''
    # prepare sliders and drop downs
    M0_fs = widgets.FloatSlider(value=6.5e-8, min=1e-8, max=1e-7, step=1e-9,
                                    description='$\\text{M0}[V_{\\text{lim}}]$', disabled=False, continuous_update=True,
                                    orientation='horizontal', readout=True, readout_format='.1e', )

    Minact_fs = widgets.FloatSlider(value=1.5, min=1, max=10, step=0.2,
                                    description='$\\text{E}[M_{\\text{inact}}] [%]$', disabled=False, continuous_update=True,
                                    orientation='horizontal', readout=True, readout_format='.1e', )
    #Check if GPa or MPa
    pm_fs = widgets.FloatSlider(value=0.8, min=1, max=5, step=0.5,
                                    description='$\\text{E}[K] [GPa]$', disabled=False, continuous_update=True,
                                    orientation='horizontal', readout=True, readout_format='.1e', )

    bd_fs = widgets.FloatSlider(value=12.5, min=5, max=40, step=0.1,
                                    description='$\\text{E}[bd] [mm]$', disabled=False, continuous_update=True,
                                    orientation='horizontal', readout=True, readout_format='.1e', )

    pd_fs = widgets.FloatSlider(value=50, min=10, max=200, step=0.1,
                                    description='$\\text{E}[pd] [mm]$', disabled=False, continuous_update=True,
                                    orientation='horizontal', readout=True, readout_format='.1e', )

    K_fs = widgets.FloatSlider(value=1e8, min=1e6, max=1e10, step=1e5,
                                description='$\\text{E}[K] [-]$', disabled=False, continuous_update=True,
                                orientation='horizontal', readout=True, readout_format='.1e', )

    CoV_K_fs = widgets.FloatSlider(value=0.1, min=0.05, max=0.75, step=0.05,
                                description='$\\text{E}[CoV_K] [-]$', disabled=False, continuous_update=True,
                                orientation='horizontal', readout=True, readout_format='.1e', )

    # Check if rad or degree
    xi_fs = widgets.FloatSlider(value=25, min=0, max=45, step=1,
                                description='$\\text{E}[xi] [-]$', disabled=False, continuous_update=True,
                                orientation='horizontal', readout=True, readout_format='.1e', )

    nrev_fs = widgets.FloatSlider(value=2.45e+8, min=1e+8, max=1e+9, step=5e+6, description='$\\text{E}[r]$',
                                    disabled=False, continuous_update=True, orientation='horizontal', readout=True,
                                    readout_format='.1e', )
    rev_per_hour_fs = widgets.FloatSlider(value=1e+6, min=1e6, max=1e+7, step=1e+6, description='$\\text{E}[r_h]$',
                                          disabled=False, continuous_update=True, orientation='horizontal',
                                          readout=True, readout_format='.1e', )
    Dist_K='LogNormal'
    Dist_MU='LogNormal'
    CoV_MU=0.2
    E_MU=1

    # put inside interactive
    ip = interactive(model_wrapper, Dist_K=Dist_K, E_K=K_fs, CoV_K=CoV_K_fs, Dist_MU=Dist_MU, E_MU=E_MU, CoV_MU=CoV_MU,
                  M0=M0_fs, Minact=M0_fs*Minact_fs/100, Nb=pd_fs*2*np.pi/bd_fs,bd=bd_fs, pd=pd_fs, pm=pm_fs, xi=xi_fs, nrev=nrev_fs, rev_per_hour=rev_per_hour_fs)

    ip.children
    # setup input controls
    input_controls = ip.children[:-1]
    column_1 = VBox(input_controls[:7])
    column_2 = VBox(input_controls[7:])
    input_box = HBox([column_1, column_2])

    # setup output
    output_stream = ip.children[-1]

    # display
    # show input fields
    IPython.display.display(input_box)

    # show output
    IPython.display.display(output_stream)