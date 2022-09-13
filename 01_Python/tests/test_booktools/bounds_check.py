# Copyright (C) Matrisk GmbH 2022

import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# import module
from nrpmint.helpers import sample_bounded


def analyze_solid_lubricant_wear(N = 10**2):
    """
    Tests the model on a series of samples to determine, where the model fails in order to adjust the bounds.
    """
    from nrpmint.booktools import solid_lubricant_wear

    input = solid_lubricant_wear.get_inputs()
    samples = sample_bounded.sample(input, N, skip=['rev_per_hour'])

    passed = []
    for sample in samples:
        try:
            reliability_analysis = solid_lubricant_wear.single_analysis(**sample)
            passed.append(not np.isnan(reliability_analysis.Pf[0]))
        except:
            passed.append(False)

    results_df = pd.DataFrame(samples)
    results_df['pass'] = passed

    return results_df


def analyze_fluid_lubricant_wear(N = 10**2):
    """
    Tests the model on a series of samples to determine, where the model fails in order to adjust the bounds.
    """
    from nrpmint.booktools import fluid_lubricant_wear

    input = fluid_lubricant_wear.get_inputs()
    samples = sample_bounded.sample(input, N, skip=['rev_per_hour'])

    passed = []
    for sample in samples:
        try:
            reliability_analysis = fluid_lubricant_wear.single_analysis(**sample)
            passed.append(not np.isnan(reliability_analysis.Pf[0]))
        except:
            passed.append(False)

    results_df = pd.DataFrame(samples)
    results_df['pass'] = passed

    return results_df


def analyze_fatigue_failure(N = 10**2):
    """
    Tests the model on a series of samples to determine, where the model fails in order to adjust the bounds.
    """
    from nrpmint.booktools import fatigue_failure

    input = fatigue_failure.get_inputs()
    samples = sample_bounded.sample(input, N)

    passed = []
    for sample in samples:
        try:
            reliability_analysis, _ = fatigue_failure.single_analysis(**sample)
            passed.append(not np.isnan(reliability_analysis.Pf[0]))
        except:
            passed.append(False)

    results_df = pd.DataFrame(samples)
    results_df['pass'] = passed

    return results_df


model_type = 'fatigue_failure'
N = 10**5
if model_type == 'solid_lubricant_wear':
    results = analyze_solid_lubricant_wear(N)
elif model_type == 'fluid_lubricant_wear':
    results = analyze_fluid_lubricant_wear(N)
elif model_type == 'fatigue_failure':
    results = analyze_fatigue_failure(N)


# plot
g = sns.PairGrid(results, hue="pass")
g.map_diag(sns.histplot)
g.map_offdiag(sns.scatterplot)
g.add_legend()
plt.savefig(f'bounds_{model_type}.png')