# display packages
from nrpmint.interface.web import UI

# scientific packages
from nrpmint.reliability.form import form, mcs
from nrpmint.reliability.random_variables import UniRV, stochastic_model_to_multirv
import numpy as np
from matplotlib import pyplot as plt


def get_inputs(value_default='mean'):
    inputs = {
        'Dist_DCR': {
            'type': 'dropdown',
            # 'description': 'Dist $D_{\\text{cr}}$',
            'description': 'Dist D_cr',
            'options': ['LogNormal', 'Normal', 'Gumbel'],
            'value': value_default
        },
        'E_DCR': {
            'type': 'floatslider',
            # 'description': '$\\text{E}[D_{\\text{cr}}]$',
            'description': 'E[D_cr]',
            'min': 5e12,
            'max': 2e13,
            'step': 1e10,
            'readout_format': '.1e',
            'value': value_default
        },
        'CoV_DCR': {
            'type': 'floatslider',
            # 'description': '$\\text{C.o.V.}[D_{\\text{cr}}]$',
            'description': 'C.o.V.[D_cr]',
            'min': 0.05,
            'max': 0.3,
            'step': 0.01,
            'readout_format': '.2f',
            'value': value_default
        },
        'Dist_A': {
            'type': 'dropdown',
            # 'description': 'Dist $A$',
            'description': 'Dist A',
            'options': ['LogNormal', 'Normal', 'Gumbel'],
            'value': value_default
        },
        'E_A': {
            'type': 'floatslider',
            # 'description': '$\\text{E}[A]$',
            'description': 'E[A]',
            'min': 1,
            'max': 5,
            'step': 0.1,
            'readout_format': '.1f',
            'value': value_default
        },
        'CoV_A': {
            'type': 'floatslider',
            # 'description': '$\\text{C.o.V.}[A]$',
            'description': 'C.o.V.[A]',
            'min': 0.05,
            'max': 0.3,
            'step': 0.01,
            'readout_format': '.2f',
            'value': value_default
        },
        'Dist_SSF': {
            'type': 'dropdown',
            'description': 'Dist SSF',
            'options': ['LogNormal'],
            'value': value_default
        },
        'E_SSF': {
            'type': 'floatslider',
            # 'description': '$\\text{E}[\\text{SSF}]$',
            'description': 'E[SSF]',
            'min': 0.5,
            'max': 2,
            'step': 0.01,
            'readout_format': '.1f',
            'value': value_default
        },
        'CoV_SSF': {
            'type': 'floatslider',
            # 'description': '$\\text{C.o.V.}[\\text{SSF}]$',
            'description': 'C.o.V.[SSF]',
            'min': 0.05,
            'max': 0.3,
            'step': 0.01,
            'readout_format': '.2f',
            'value': value_default
        },
        'Dist_coll': {
            'type': 'dropdown',
            # 'description': 'Dist $S$',
            'description': 'Dist S',
            'options': ['LogNormal', 'Gumbel'],
            'value': value_default
        },
        'E_coll': {
            'type': 'floatslider',
            # 'description': '$\\text{E}[S]$',
            'description': 'E[S]',
            'min': 100,
            'max': 400,
            'step': 1,
            'readout_format': '.0f',
            'value': value_default
        },
        'CoV_coll': {
            'type': 'floatslider',
            # 'description': '$\\text{C.o.V.}[S]$',
            'description': 'C.o.V.[S]',
            'min': 0.05,
            'max': 0.2,
            'step': 0.01,
            'readout_format': '.2f',
            'value': value_default
        },
        'Dist_MU': {
            'type': 'dropdown',
            # 'description': 'Dist $\Theta$',
            'description': 'Dist Theta',
            'options': ['LogNormal'],
            'value': value_default
        },
        'E_MU': {
            'type': 'floatslider',
            # 'description': '$\\text{E}[\Theta]$',
            'description': 'E[Theta]',
            'min': 0.5,
            'max': 1.5,
            'step': 0.01,
            'readout_format': '.2f',
            'value': value_default
        },
        'CoV_MU': {
            'type': 'floatslider',
            # 'description': '$\\text{C.o.V.}[\Theta]$',
            'description': 'C.o.V.[Theta]',
            'min': 0.05,
            'max': 0.3,
            'step': 0.01,
            'readout_format': '.2f',
            'value': value_default
        },
        'B': {
            'type': 'floatslider',
            # 'description': '$B$',
            'description': 'B',
            'min': 1,
            'max': 3,
            'step': 0.1,
            'readout_format': '.1f',
            'value': value_default
        },
        'N': {
            'type': 'floatlogslider',
            # 'description': '$N$',
            'description': 'N',
            'min': 7,
            'max': 9,
            'step': 0.1,
            'readout_format': '.1e',
            'value': value_default
        }
    }

    return inputs

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
    plt.grid()
    plt.xscale('log')
    plt.yscale('log')
    plt.xlabel(r'damage')
    plt.ylabel('probability density function')
    plt.legend(['Limiting damage', 'Accumulated damage'])

    # Load collective
    sorted_load_collective = load_collective[np.argsort(load_collective[:, 0])][::-1]
    plt.figure(2)
    plt.bar(x=np.cumsum(sorted_load_collective[:,1]), height=sorted_load_collective[:,0], width=-sorted_load_collective[:,1], align='edge')
    plt.grid()
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
    form_thresh = 0.1
    reliability_analysis = form(lsf, DCR=DCR, A=A, SSF=SSF, MU=MU, B=B)
    reliability_analysis.run()
    if reliability_analysis.Pf > form_thresh:
        # for large failure probabilites, switch to MCS
        reliability_analysis = mcs(lsf, DCR=DCR, A=A, SSF=SSF, MU=MU, B=B)
        reliability_analysis.Pf = [reliability_analysis.Pf]
    return reliability_analysis, load_collective


def model_wrapper(**kwargs):
    '''Wrapper to be called by ipywidgets to run the reliability analyses and display the outputs.'''

    reliability_analysis, load_collective = single_analysis(**kwargs)

    # ensure that failure probability is not NaN:
    if np.isnan(reliability_analysis.getFailure()[0]):
        # print
        print(f'The algorithm failed because the failure probability is too small, change the input parameters and try again...')
    else:
        # display
        display(reliability_analysis, load_collective)

        # print
        print(f'The failure probability is {reliability_analysis.getFailure()[0]:.2e} after {kwargs["N"]:.2e} load cycles.')


def web_ui():
    '''Prepare user interface to interact with reliabilty functions'''
    # prepare sliders and drop downs
    inputs = get_inputs(value_default = 'mean')

    # initialize interface
    UI(model_wrapper, n_cols=2, **inputs)