# display packages
import IPython
import ipywidgets as widgets
from ipywidgets import interactive, Layout, HBox, VBox

# scientific packages
from nrpmint.reliability.form import form
import numpy as np
from matplotlib import pyplot as plt
import pystra


def display(analysis, rev_hour):
    '''Displays the reliability analysis results'''
    # Some single results:
    pf = analysis.getFailure()
    stochastic_model = analysis.model

    # pf_mat = []
    # rev_mat = np.linspace(stochastic_model.consts['E_nrev'] * 0.8, stochastic_model.consts['E_nrev'] * 1.2, 5)
    # # for plot of the "Resistance"
    # for rev in rev_mat:
    #     # Update value of constant
    #     stochastic_model = analysis.model
    #     stochastic_model.consts['E_nrev'] = rev
    #     # Perform FORM analysis
    #     my_reliability_analysis = pystra.Form(analysis_options=analysis.options, stochastic_model=stochastic_model, limit_state=analysis.limitstate)
    #     pf_mat.append(my_reliability_analysis.getFailure())

    # construct distribution and evaluate PDF
    E_KH = stochastic_model.variables['KH'].getMean()
    E_alpha = stochastic_model.variables['alpha'].getMean()
    E_MU = stochastic_model.variables['MU'].getMean()
    E_Vlim = stochastic_model.variables['Vlim'].getMean()
    E_nrev = stochastic_model.consts['E_nrev']
    CoV_KH = stochastic_model.variables['KH'].getStdv()/E_KH
    CoV_alpha = stochastic_model.variables['alpha'].getStdv()/E_alpha
    CoV_MU = stochastic_model.variables['MU'].getStdv()/E_MU
    CoV_Vlim = stochastic_model.variables['Vlim'].getStdv()/E_Vlim

    # impact
    mu_S = E_KH * E_alpha * E_MU * E_nrev
    CoV_S = ((CoV_KH) ** 2 + (CoV_alpha) ** 2 + (CoV_MU) ** 2) ** 0.5
    sigma_S = CoV_S * mu_S
    x_S_mat = np.linspace(max(mu_S - sigma_S * 3, 1e-12), mu_S + sigma_S * 6, 100)

    zeta_S = (np.log(1 + (sigma_S / mu_S) ** 2)) ** 0.5
    lamb_S = np.log(mu_S) - 0.5 * zeta_S ** 2

    my_dist = pystra.distributions.lognormal.Lognormal('my_dist', lamb_S, zeta_S, input_type='parameters')
    S_pdf = my_dist.pdf(x_S_mat)

    # resistance
    mu_R = E_Vlim
    sigma_R = E_Vlim * CoV_Vlim
    x_R_mat = np.linspace(mu_R - sigma_R * 4, mu_R + sigma_R * 4, 50)

    # evaluate pdf
    R_pdf = stochastic_model.getVariable('Vlim').pdf(x_R_mat)

    # plots
    plt.figure(1)
    plt.plot(x_R_mat, R_pdf, 'b-')
    plt.plot(x_S_mat, S_pdf, 'r-')
    plt.xlabel(r'volume $m^3$')
    plt.ylabel('probability density function')
    plt.legend(['Limiting Volume', 'Volume worn away'])

    # plt.figure(2)
    # plt.plot(E_nrev / (rev_hour * 365 * 24), pf, 'ro')
    # plt.plot(rev_mat / (rev_hour * 365 * 24), pf_mat, 'r--')
    # plt.ylabel('probability of failure')
    # plt.xlabel('years')
    # plt.legend(['Limiting Volume','Volume worn away'])


def model_wrapper(Dist_Vlim, E_Vlim, CoV_Vlim, Dist_KH, E_KH, CoV_KH,
                 Dist_alpha, E_alpha, CoV_alpha, Dist_MU, E_MU, CoV_MU,
                 E_nrev, Rev_per_hour):
    '''Wrapper for nrpmint.reliability.form that passes the arguments to the correct dictionary structure.'''

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

    # and constants
    E_nrev = E_nrev

    # correlation matrix
    corrmat = [[1.0, 0.0, 0.0, 0.0],
               [0.0, 1.0, 0.5, 0.0],
               [0.0, 0.5, 1.0, 0.0],
               [0.0, 0.0, 0.0, 1.0]]

    # define limit-state function
    lsf = lambda Vlim, KH, alpha, MU, E_nrev: Vlim - KH * alpha * MU * E_nrev

    # run form reliability analysis
    my_reliability_analysis = form(lsf, corrmat=corrmat, Vlim=Vlim, KH=KH, alpha=alpha, MU=MU, E_nrev=E_nrev)

    # display
    display(my_reliability_analysis, Rev_per_hour)

    # print
    print(f'The failure probability is {my_reliability_analysis.getFailure()[0]}')


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
    E_nrev_fs = widgets.FloatSlider(value=2.45e+8, min=1e+8, max=1e+9, step=5e+6, description='$\\text{E}[r]$',
                                    disabled=False, continuous_update=True, orientation='horizontal', readout=True,
                                    readout_format='.1e', )
    Rev_per_hour_fs = widgets.FloatSlider(value=1e+6, min=1e6, max=1e+7, step=1e+6, description='$\\text{E}[r_h]$',
                                          disabled=False, continuous_update=True, orientation='horizontal',
                                          readout=True, readout_format='.1e', )

    # put inside interactive
    ip = interactive(model_wrapper, Dist_Vlim=Dist_Vlim_dd, E_Vlim=E_Vlim_fs, CoV_Vlim=CoV_Vlim_fs, Dist_KH=Dist_KH_dd,
                     E_KH=E_KH_fs, CoV_KH=CoV_KH_fs, Dist_alpha=Dist_alpha_dd, E_alpha=E_alpha_fs, CoV_alpha=CoV_alpha_fs,
                     Dist_MU=Dist_MU_dd, E_MU=E_MU_fs, CoV_MU=CoV_MU_fs, E_nrev=E_nrev_fs, Rev_per_hour=Rev_per_hour_fs)

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


if __name__ == "__main__":
    # define random variables
    Dist_Vlim = 'Gumbel'
    E_Vlim = 6.5e-8
    CoV_Vlim = 0.2
    Dist_KH = 'Normal'
    E_KH = 4e-15
    CoV_KH = 0.66
    Dist_alpha = 'LogNormal'
    E_alpha = 0.018
    CoV_alpha = 0.2
    Dist_MU = 'LogNormal'
    E_MU = 1
    CoV_MU = 0.2
    E_nrev = 245e+6
    Rev_per_hour = 1000

    # call model_wrapper
    model_wrapper(Dist_Vlim, E_Vlim, CoV_Vlim, Dist_KH, E_KH, CoV_KH,
                  Dist_alpha, E_alpha, CoV_alpha, Dist_MU, E_MU, CoV_MU,
                  E_nrev, Rev_per_hour)