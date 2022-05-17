# display packages
import IPython
import ipywidgets as widgets
from ipywidgets import interactive, Layout, HBox, VBox

# scientific packages
from nrpmint.reliability.form import form
from nrpmint.reliability.random_variables import UniRV, stochastic_model_to_multirv
import numpy as np
from matplotlib import pyplot as plt


def display(reliability_analyses, load_collective, n_samples=10**5):
    '''Displays the reliability analysis results'''
    # extract random vector and constants
    joint_dist = stochastic_model_to_multirv(reliability_analyses.model)
    B = reliability_analyses.model.consts['B']

    # sample from random variables
    x = joint_dist.rvs(n_samples)

    # evaluate limit_state function
    g, r, a = limit_state_function(x[:,0], x[:,1], x[:,2], x[:,3], B, load_collective, sep_out=True)

    # plots
    # PDFs
    plt.figure(1)
    plt.hist(r, bins=100, density=True, alpha=0.8)
    plt.hist(a, bins=100, density=True, alpha=0.8)
    plt.xlabel(r'damage')
    plt.ylabel('probability density function')
    plt.legend(['Limiting damage', 'Accumulated damage'])

    # Load collective
    sorted_load_collective = load_collective[np.argsort(load_collective[:, 0])][::-1]
    plt.figure(2)
    plt.bar(x=np.cumsum(sorted_load_collective[:,1]), height=sorted_load_collective[:,0], width=-sorted_load_collective[:,1], align='edge')
    plt.ylabel('stress')
    plt.xlabel('cycles')
    plt.title('Load collective')
    plt.xscale('log')


def sample_collective(dist, mu, cov, N, nbins=200):
    """
    Samples a collective from the parametric distribution specified by the inputs dist, mu and cov.
    Sampling is only approximate for speed.
    """
    collective_dist = UniRV(dist, mu, cov)
    stress_min, stress_max = collective_dist.dist.ppf(10**-8), collective_dist.dist.ppf(1-10**-8)
    stresses = np.linspace(stress_min, stress_max, nbins)
    stresses_step = stresses[1]-stresses[0]
    cycles = np.round(collective_dist.dist.pdf(stresses)*N*stresses_step)

    return np.column_stack((stresses, cycles))

def limit_state_function(DCR, A, SSF, MU, B, load_collective, sep_out=False):
    """
    Limit state function used in this model.
    """

    # handling vectorized inputs
    try:
        load_collective_sum = []
        for b in B:
            load_collective_sum.append(np.sum(load_collective[:,0]**b*load_collective[:,1]))
    except TypeError:
        load_collective_sum = np.sum(load_collective[:,0]**B*load_collective[:,1])

    r = DCR
    a = MU * (10**-A) * SSF**B * load_collective_sum

    g = r - a

    if sep_out:
        return g, r, a
    else:
        return g


def single_analysis(Dist_DCR, E_DCR, CoV_DCR, Dist_A, E_A, CoV_A, Dist_SSF, E_SSF, CoV_SSF, Dist_coll, E_coll, CoV_coll,
                    Dist_MU, E_MU, CoV_MU, B, N):
    '''
    Wrapper for nrpmint.reliability.form that passes the arguments to the correct dictionary structure and returns the
    reliability analysis.
    '''

    DCR = {
        'dist': Dist_DCR,
        'E': E_DCR,
        'CoV': CoV_DCR
    }
    A = {
        'dist': Dist_A,
        'E': E_A,
        'CoV': CoV_A
    }
    SSF = {
        'dist': Dist_SSF,
        'E': E_SSF,
        'CoV': CoV_SSF
    }
    MU = {
        'dist': Dist_MU,
        'E': E_MU,
        'CoV': CoV_MU
    }

    # sample collective
    load_collective = sample_collective(Dist_coll, E_coll, CoV_coll, N)

    # define limit-state function
    lsf = lambda DCR, A, SSF, MU, B: limit_state_function(DCR, A, SSF, MU, B, load_collective)

    # run and return form reliability analysis
    return form(lsf, DCR=DCR, A=A, SSF=SSF, MU=MU, B=B), load_collective


def model_wrapper(Dist_DCR, E_DCR, CoV_DCR, Dist_A, E_A, CoV_A, Dist_SSF, E_SSF, CoV_SSF, Dist_coll, E_coll, CoV_coll,
                    Dist_MU, E_MU, CoV_MU, B, N):
    '''Wrapper to be called by ipywidgets to run the reliability analyses and display the outputs.'''

    reliability_analysis, load_collective = single_analysis(Dist_DCR=Dist_DCR, E_DCR=E_DCR, CoV_DCR=CoV_DCR,
                                                           Dist_A=Dist_A, E_A=E_A, CoV_A=CoV_A,
                                                           Dist_SSF=Dist_SSF, E_SSF=E_SSF, CoV_SSF=CoV_SSF,
                                                           Dist_coll=Dist_coll, E_coll=E_coll, CoV_coll=CoV_coll,
                                                           Dist_MU=Dist_MU, E_MU=E_MU, CoV_MU=CoV_MU,
                                                           B=B, N=N)

    # display
    display(reliability_analysis, load_collective)

    # print
    print(f'The failure probability is {reliability_analysis.getFailure()[0]}')


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