# display packages
from IPython.display import display, Markdown
import ipywidgets as widgets
from ipywidgets import interactive, Layout, HBox, VBox

# scientific packages
import numpy as np
import matplotlib
from matplotlib import pyplot as plt
from scipy import stats
import pystra


def proF(Dist_Vlim, E_Vlim, COV_Vlim, Dist_KH, E_KH, COV_KH, Dist_alpha, E_alpha, COV_alpha, Dist_MU, E_MU, COV_MU,
         E_nrev, Rev_per_hour):
    E_vlimit_val = float(E_Vlim)
    nu_vlimit_val = float(COV_Vlim)
    E_KH_val = float(E_KH)
    nu_KH_val = float(COV_KH)
    E_alpha_val = float(E_alpha)
    nu_alpha_val = float(COV_alpha)
    E_theta_val = float(E_MU)
    nu_theta_val = float(COV_MU)
    rev_val = float(E_nrev)
    rev_hour = float(Rev_per_hour)

    rev_min = rev_val * 0.5  # for plotting
    rev_max = rev_val * 2  # for plotting

    mu_R = E_vlimit_val
    sigma_R = E_vlimit_val * nu_vlimit_val
    x_R_mat = np.linspace(mu_R - sigma_R * 4, mu_R + sigma_R * 4, 50)

    mu_S = E_KH_val * E_alpha_val * E_theta_val * rev_val
    cov_S = ((nu_KH_val) ** 2 + (nu_alpha_val) ** 2 + (nu_theta_val) ** 2) ** 0.5
    sigma_S = cov_S * mu_S
    x_S_mat = np.linspace(max(mu_S - sigma_S * 3, 1e-12), mu_S + sigma_S * 6, 100)

    zeta_S = (np.log(1 + (sigma_S / mu_S) ** 2)) ** 0.5
    lamb_S = np.log(mu_S) - 0.5 * zeta_S ** 2

    # construct distribution and evaluate PDF
    my_dist = pystra.distributions.lognormal.Lognormal('my_dist', lamb_S, zeta_S, input_type='parameters')
    S_pdf = my_dist.pdf(x_S_mat)

    # revolutions per hour
    # rev_hour=100;
    ######################################################

    # FORM ANALYSIS pystra

    stochastic_model = pystra.StochasticModel()
    # Define random variables

    if Dist_Vlim == 'Normal':
        stochastic_model.addVariable(pystra.Normal('X1', E_vlimit_val, E_vlimit_val * nu_vlimit_val))

        # evaluate PDF
        R_pdf = stats.norm.pdf(x_R_mat, mu_R, sigma_R)

    elif Dist_Vlim == 'LogNormal':
        stochastic_model.addVariable(pystra.Lognormal('X1', E_vlimit_val, E_vlimit_val * nu_vlimit_val))

        # Lognormal
        zeta_R = (np.log(1 + nu_vlimit_val ** 2)) ** 0.5
        lamb_R = np.log(mu_R) - 0.5 * zeta_R ** 2

        # evaluate PDF
        R_pdf = stats.lognorm.pdf(x_R_mat, 1, mu_R, sigma_R)

    elif Dist_Vlim == 'Gumbel':
        stochastic_model.addVariable(pystra.Gumbel('X1', E_vlimit_val, E_vlimit_val * nu_vlimit_val))

        # construct distribution and evaluate PDF
        R_pdf = stats.gumbel_r.pdf(x_R_mat, mu_R, sigma_R)

    if Dist_KH == 'Normal':
        stochastic_model.addVariable(pystra.Normal('X2', E_KH_val, E_KH_val * nu_KH_val))

    elif Dist_KH == 'LogNormal':
        stochastic_model.addVariable(pystra.Lognormal('X2', E_KH_val, E_KH_val * nu_KH_val))

    elif Dist_KH == 'Gumbel':
        stochastic_model.addVariable(pystra.Gumbel('X2', E_KH_val, E_KH_val * nu_KH_val))

    if Dist_alpha == 'Normal':
        stochastic_model.addVariable(pystra.Normal('X3', E_alpha_val, E_alpha_val * nu_alpha_val))
    elif Dist_alpha == 'LogNormal':
        stochastic_model.addVariable(pystra.Lognormal('X3', E_alpha_val, E_alpha_val * nu_alpha_val))
    elif Dist_alpha == 'Gumbel':
        stochastic_model.addVariable(pystra.Gumbel('X3', E_alpha_val, E_alpha_val * nu_alpha_val))

    stochastic_model.addVariable(pystra.Lognormal('X4', E_theta_val, E_theta_val * nu_theta_val))

    stochastic_model.setCorrelation(pystra.CorrelationMatrix([[1.0, 0.0, 0.0, 0.0],
                                                              [0.0, 1.0, 0.5, 0.0],
                                                              [0.0, 0.5, 1.0, 0.0],
                                                              [0.0, 0.0, 0.0, 1.0]]))

    # Set some options (optional)
    options = pystra.AnalysisOptions()

    # Define limit state function
    limit_state = pystra.LimitState(lambda X1, X2, X3, X4: X1 - X2 * X3 * X4 * rev_val)
    # Performe FORM analysis
    Analysis = pystra.Form(analysis_options=options, stochastic_model=stochastic_model, limit_state=limit_state)
    # Some single results:
    beta = Analysis.getBeta()
    pf = Analysis.getFailure()

    pf_mat = []
    rev_mat = np.linspace(rev_val * 0.8, rev_val * 1.2, 5)
    # for plot of the "Resistance"
    for i_rev in range(rev_mat.shape[0]):
        # Define limit state function
        limit_state = pystra.LimitState(lambda X1, X2, X3, X4: X1 - X2 * X3 * X4 * rev_mat[i_rev])
        # Performe FORM analysis
        options.printResults(False)
        Analysis = pystra.Form(analysis_options=options, stochastic_model=stochastic_model, limit_state=limit_state)
        pf_mat.append(Analysis.getFailure())

    # plots
    plt.figure(1)
    # %matplotlib inline
    plt.plot(x_R_mat, R_pdf, 'b-')
    plt.plot(x_S_mat, S_pdf, 'r-')
    # plt.plot(np.log10(rev_val), pf,'ro')
    plt.xlabel('Volume [m^3]')
    plt.ylabel('probability density function')
    plt.legend(['Limiting Volume', 'Volume worn away'])

    # plt.yscale('log')
    plt.figure(2)

    plt.plot(rev_val / (rev_hour * 365 * 24), pf, 'ro')
    plt.plot(rev_mat / (rev_hour * 365 * 24), pf_mat, 'r--')

    plt.ylabel('probability of failure')
    plt.xlabel('years')
    # plt.legend(['Limiting Volume','Volume worn away'])

    # write markdown output to cell
    display(Markdown(f'The **probability of failure** is $P_f$={pf[0]:.2E} at {rev_val:.2E} revolutions!'))


if __name__ == "__main__":
    E_Vlim='6.5e-8'
    COV_Vlim='0.2'
    Dist_Vlim= 'Gumbel' #{'LogNormal', 'Normal', 'Gumbel'}
    E_KH='4e-15'
    COV_KH='0.66'
    Dist_KH= 'Normal' #{'LogNormal', 'Normal', 'Gumbel'}
    E_alpha='0.018'
    COV_alpha='0.2'
    Dist_alpha= 'LogNormal' #{'LogNormal', 'Normal', 'Gumbel'}
    E_MU='1.0'
    COV_MU='0.2'
    Dist_MU={'LogNormal'}
    E_nrev='245e+6'
    Rev_per_hour='1000'

    # run analysis
    proF(Dist_Vlim, E_Vlim, COV_Vlim, Dist_KH, E_KH, COV_KH, Dist_alpha, E_alpha, COV_alpha, Dist_MU, E_MU, COV_MU, E_nrev, Rev_per_hour)
