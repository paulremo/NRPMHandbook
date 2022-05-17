# display packages
import IPython
import ipywidgets as widgets
from ipywidgets import interactive, Layout, HBox, VBox

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
    plt.xlabel(r'volume $m^3$')
    plt.ylabel('probability density function')
    plt.legend(['Limiting Volume', 'Volume worn away'])

    plt.figure(2)
    plt.plot(nrev / (rev_per_hour * 365 * 24), pf_mat[mult_one_idx], 'ro')
    plt.plot(np.array(nrev_mat) / (rev_per_hour * 365 * 24), pf_mat, 'r--')
    plt.ylabel('probability of failure')
    plt.xlabel('years')
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


def model_wrapper(Dist_Vlim, E_Vlim, CoV_Vlim, Dist_KH, E_KH, CoV_KH,
                 Dist_alpha, E_alpha, CoV_alpha, Dist_MU, E_MU, CoV_MU,
                 rho_KH_alpha, nrev, rev_per_hour):
    '''Wrapper to be called by ipywidgets to run the reliability analyses and display the outputs.'''

    # do a set of reliability analyses for different nrev
    mult_list = [0.8, 0.9, 1, 1.1, 1.2]
    mult_one_idx = mult_list.index(1)
    reliability_analyses = []
    for mult in mult_list:
        # run form reliability analysis
        curr_nrev = nrev*mult
        rel_analysis = single_analysis(Dist_Vlim=Dist_Vlim, E_Vlim=E_Vlim, CoV_Vlim=CoV_Vlim, Dist_KH=Dist_KH, E_KH=E_KH,
                        CoV_KH=CoV_KH, Dist_alpha=Dist_alpha, E_alpha=E_alpha, CoV_alpha=CoV_alpha, Dist_MU=Dist_MU,
                        E_MU=E_MU, CoV_MU=CoV_MU, rho_KH_alpha=rho_KH_alpha, nrev=curr_nrev)

        reliability_analyses.append(rel_analysis)

    # display
    display(reliability_analyses, mult_one_idx, rev_per_hour)

    # print
    print(f'The failure probability is {reliability_analyses[mult_one_idx].getFailure()[0]}')


def web_ui():
    '''Prepare user interface to interact with reliabilty functions'''
    # prepare sliders and drop downs
    Dist_Vlim_dd = widgets.Dropdown(options=['LogNormal', 'Normal', 'Gumbel'], value='Gumbel',
                                    description='Dist $V_{\\text{lim}}$', disabled=False, )
    E_Vlim_fs = widgets.FloatSlider(value=6.5e-8, min=1e-8, max=1e-7, step=1e-9,
                                    description='$\\text{E}[V_{\\text{lim}}]$', disabled=False, continuous_update=True,
                                    orientation='horizontal', readout=True, readout_format='.1e', )
    CoV_Vlim_fs = widgets.FloatSlider(value=0.2, min=0.05, max=1, step=0.05,
                                      description='$\\text{C.o.V.}[V_{\\text{lim}}]$', disabled=False,
                                      continuous_update=True, orientation='horizontal', readout=True,
                                      readout_format='.2f', )
    Dist_KH_dd = widgets.Dropdown(options=['LogNormal', 'Normal', 'Gumbel'], value='Normal', description='Dist $K_H$',
                                  disabled=False, )
    E_KH_fs = widgets.FloatSlider(value=4e-15, min=1e-15, max=1e-14, step=1e-15, description='$\\text{E}[K_H]$',
                                  disabled=False, continuous_update=True, orientation='horizontal', readout=True,
                                  readout_format='.1e', )
    CoV_KH_fs = widgets.FloatSlider(value=0.65, min=0.05, max=1, step=0.05, description='$\\text{C.o.V.}[K_H]$',
                                    disabled=False, continuous_update=True, orientation='horizontal', readout=True,
                                    readout_format='.2f', )
    Dist_alpha_dd = widgets.Dropdown(options=['LogNormal', 'Normal', 'Gumbel'], value='Gumbel',
                                     description='Dist $\\alpha$', disabled=False, )
    E_alpha_fs = widgets.FloatSlider(value=0.018, min=0.01, max=0.1, step=0.001, description='$\\text{E}[\\alpha]$',
                                     disabled=False, continuous_update=True, orientation='horizontal', readout=True,
                                     readout_format='.1e', )
    CoV_alpha_fs = widgets.FloatSlider(value=0.2, min=0.05, max=1, step=0.05, description='$\\text{C.o.V.}[\\alpha]$',
                                       disabled=False, continuous_update=True, orientation='horizontal', readout=True,
                                       readout_format='.2f', )
    Dist_MU_dd = widgets.Dropdown(options=['LogNormal'], value='LogNormal', description='Dist $\Theta$',
                                  disabled=False, )
    E_MU_fs = widgets.FloatSlider(value=1, min=0.01, max=1, step=0.01, description='$\\text{E}[\Theta]$',
                                  disabled=False, continuous_update=True, orientation='horizontal', readout=True,
                                  readout_format='.1e', )
    CoV_MU_fs = widgets.FloatSlider(value=0.2, min=0.05, max=1, step=0.05, description='$\\text{C.o.V.}[\Theta]$',
                                    disabled=False, continuous_update=True, orientation='horizontal', readout=True,
                                    readout_format='.2f', )
    rho_KH_alpha_fs = widgets.FloatSlider(value=0.5, min=0, max=1, step=0.01, description='$\\rho_{KH,\\alpha}$',
                                    disabled=False, continuous_update=True, orientation='horizontal', readout=True,
                                    readout_format='.1e', )
    nrev_fs = widgets.FloatSlider(value=2.45e+8, min=1e+8, max=1e+9, step=5e+6, description='$\\text{E}[r]$',
                                    disabled=False, continuous_update=True, orientation='horizontal', readout=True,
                                    readout_format='.1e', )
    rev_per_hour_fs = widgets.FloatSlider(value=1e+6, min=1e6, max=1e+7, step=1e+6, description='$\\text{E}[r_h]$',
                                          disabled=False, continuous_update=True, orientation='horizontal',
                                          readout=True, readout_format='.1e', )

    # put inside interactive
    ip = interactive(model_wrapper, Dist_Vlim=Dist_Vlim_dd, E_Vlim=E_Vlim_fs, CoV_Vlim=CoV_Vlim_fs, Dist_KH=Dist_KH_dd,
                     E_KH=E_KH_fs, CoV_KH=CoV_KH_fs, Dist_alpha=Dist_alpha_dd, E_alpha=E_alpha_fs, CoV_alpha=CoV_alpha_fs,
                     Dist_MU=Dist_MU_dd, E_MU=E_MU_fs, CoV_MU=CoV_MU_fs, rho_KH_alpha=rho_KH_alpha_fs, nrev=nrev_fs,
                     rev_per_hour=rev_per_hour_fs)

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