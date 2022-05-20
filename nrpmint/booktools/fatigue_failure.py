# display packages
from nrpmint.interface.web import UI

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
    Dist_DCR = {
        'type': 'dropdown',
        #'description': 'Dist $D_{\\text{cr}}$',
        'description': 'Dist D_cr',
        'value': 'LogNormal',
        'options': ['LogNormal', 'Normal', 'Gumbel'],
    }
    E_DCR = {
        'type': 'floatslider',
        #'description': '$\\text{E}[D_{\\text{cr}}]$',
        'description': 'E[D_cr]',
        'value': 1e13,
        'min': 5e12,
        'max': 2e13,
        'step': 1e10,
        'readout_format': '.1e'
    }
    CoV_DCR = {
        'type': 'floatslider',
        #'description': '$\\text{C.o.V.}[D_{\\text{cr}}]$',
        'description': 'C.o.V.[D_cr]',
        'value': 0.2,
        'min': 0.05,
        'max': 1,
        'step': 0.05,
        'readout_format': '.2f'
    }
    Dist_A = {
        'type': 'dropdown',
        #'description': 'Dist $A$',
        'description': 'Dist A',
        'value': 'Normal',
        'options': ['LogNormal', 'Normal', 'Gumbel'],
    }
    E_A = {
        'type': 'floatslider',
        #'description': '$\\text{E}[A]$',
        'description': 'E[A]',
        'value': 3,
        'min': 1,
        'max': 5,
        'step': 0.1,
        'readout_format': '.1f'
    }
    CoV_A = {
        'type': 'floatslider',
        #'description': '$\\text{C.o.V.}[A]$',
        'description': 'C.o.V.[A]',
        'value': 0.3,
        'min': 0.05,
        'max': 1,
        'step': 0.05,
        'readout_format': '.2f'
    }
    Dist_SSF = {
        'type': 'dropdown',
        'description': 'Dist SSF',
        'value': 'LogNormal',
        'options': ['LogNormal', 'Gumbel', 'Normal'],
    }
    E_SSF = {
        'type': 'floatslider',
        #'description': '$\\text{E}[\\text{SSF}]$',
        'description': 'E[SSF]',
        'value': 1,
        'min': 0.5,
        'max': 2,
        'step': 0.01,
        'readout_format': '.1f'
    }
    CoV_SSF = {
        'type': 'floatslider',
        #'description': '$\\text{C.o.V.}[\\text{SSF}]$',
        'description': 'C.o.V.[SSF]',
        'value': 0.2,
        'min': 0.05,
        'max': 1,
        'step': 0.05,
        'readout_format': '.2f'
    }
    Dist_coll = {
        'type': 'dropdown',
        #'description': 'Dist $S$',
        'description': 'Dist S',
        'value': 'LogNormal',
        'options': ['LogNormal', 'Gumbel'],
    }
    E_coll = {
        'type': 'floatslider',
        #'description': '$\\text{E}[S]$',
        'description': 'E[S]',
        'value': 200,
        'min': 100,
        'max': 400,
        'step': 1,
        'readout_format': '.0f'
    }
    CoV_coll = {
        'type': 'floatslider',
        #'description': '$\\text{C.o.V.}[S]$',
        'description': 'C.o.V.[S]',
        'value': 0.2,
        'min': 0.05,
        'max': 1,
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
        'value': 1.2,
        'min': 0.01,
        'max': 2,
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
    B = {
        'type': 'floatslider',
        #'description': '$B$',
        'description': 'B',
        'value': 2,
        'min': 1,
        'max': 3,
        'step': 0.1,
        'readout_format': '.1f'
    }
    N = {
        'type': 'floatslider',
        #'description': '$N$',
        'description': 'N',
        'value': 1e9,
        'min': 1e7,
        'max': 1e+9,
        'step': 1e+7,
        'readout_format': '.1e'
    }

    # initialize interface
    UI(model_wrapper, n_cols=2, Dist_DCR=Dist_DCR, E_DCR=E_DCR, CoV_DCR=CoV_DCR, Dist_A=Dist_A, E_A=E_A, CoV_A=CoV_A,
       Dist_SSF=Dist_SSF, E_SSF=E_SSF, CoV_SSF=CoV_SSF, Dist_coll=Dist_coll, E_coll=E_coll, CoV_coll=CoV_coll,
       Dist_MU=Dist_MU, E_MU=E_MU, CoV_MU=CoV_MU, B=B, N=N)