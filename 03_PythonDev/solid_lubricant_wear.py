# display packages
from IPython.display import display, Markdown
import ipywidgets as widgets
from ipywidgets import interactive, Layout, HBox, VBox

# scientific packages
from reliability.form import form
import numpy as np
from matplotlib import pyplot as plt
import pystra


def display_reliability(analysis, rev_hour):
    '''Displays the reliability analysis results'''
    # Some single results:
    pf = analysis.getFailure()
    stochastic_model = analysis.model

    pf_mat = []
    rev_mat = np.linspace(stochastic_model.consts['E_nrev'] * 0.8, stochastic_model.consts['E_nrev'] * 1.2, 5)
    # for plot of the "Resistance"
    for rev in rev_mat:
        # Update value of constant
        stochastic_model = analysis.model
        stochastic_model.consts['E_nrev'] = rev
        # Perform FORM analysis
        my_reliability_analysis = pystra.Form(analysis_options=analysis.options, stochastic_model=stochastic_model, limit_state=analysis.limitstate)
        pf_mat.append(my_reliability_analysis.getFailure())

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

    plt.figure(2)
    plt.plot(E_nrev / (rev_hour * 365 * 24), pf, 'ro')
    plt.plot(rev_mat / (rev_hour * 365 * 24), pf_mat, 'r--')
    plt.ylabel('probability of failure')
    plt.xlabel('years')
    # plt.legend(['Limiting Volume','Volume worn away'])

    # write markdown output to cell
    display(Markdown(f'The **probability of failure** is $P_f$={pf[0]:.2E} at {E_nrev:.2E} revolutions!'))


if __name__ == "__main__":
    # define random variables
    Vlim = {
        'dist': 'Gumbel', #{'LogNormal', 'Normal', 'Gumbel'}
        'E': 6.5e-8,
        'CoV': 0.2
    }
    KH = {
        'dist': 'Normal', #{'LogNormal', 'Normal', 'Gumbel'}
        'E': 4e-15,
        'CoV': 0.66
    }
    alpha = {
        'dist': 'LogNormal', #{'LogNormal', 'Normal', 'Gumbel'}
        'E': 0.018,
        'CoV': 0.2
    }
    MU = {
        'dist': 'LogNormal',
        'E': 1,
        'CoV': 0.2
    }

    # and constants
    E_nrev = 245e+6

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
    rev_hour = 1000
    display_reliability(my_reliability_analysis, rev_hour)

    # print
    print(f'The failure probability is {my_reliability_analysis.getFailure()[0]}')