# display packages
import pystra

def form(lsf, corrmat=None, **kwargs):
    '''Wrapper for pystra FORM reliability analysis

    Arguments:
    lsf -- handle to the limit-state-function. All function arguments must be provided as optional aruments.
    corrmat -- correlation matrix (optional, default=None)

    Optional key-value pair arguments:
    Sequence of dictionaries or numerical values that represent the arguments to lsf. The key must match the
    required lsf argument. The value can be either

    - dictionaries for random variables with keys:
        - dist -- distribution type
        - E -- random variable expectation
        - CoV -- random variable coefficient of variation

    - numerical values for constants
    '''

    # define the pystra stochastic model
    stochastic_model = pystra.StochasticModel()
    # loop over kwargs to add variables or constants
    for key, value in kwargs.items():
        # distinguish between dictionary and numerical value
        if type(value) is dict:
            # assign normal, lognormal or gumbel distribution
            if value['dist'] == 'Normal':
                stochastic_model.addVariable(pystra.Normal(key, value['E'], value['E'] * value['CoV']))
            elif value['dist'] == 'LogNormal':
                stochastic_model.addVariable(pystra.Lognormal(key, value['E'], value['E'] * value['CoV']))
            elif value['dist'] == 'Gumbel':
                stochastic_model.addVariable(pystra.Gumbel(key, value['E'], value['E'] * value['CoV']))
        else:
            # assign constant
            stochastic_model.addVariable(pystra.Constant(key, value))

    # correlation matrix
    if not corrmat is None:
        stochastic_model.setCorrelation(pystra.CorrelationMatrix(corrmat))

    # Set FORM options
    options = pystra.AnalysisOptions()
    options.printResults(False)

    # Define limit state function
    limit_state = pystra.LimitState(lsf)

    # Performe FORM analysis
    my_reliability_analysis = pystra.Form(analysis_options=options, stochastic_model=stochastic_model,
                                          limit_state=limit_state)

    return my_reliability_analysis