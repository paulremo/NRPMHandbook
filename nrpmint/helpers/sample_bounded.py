import numpy as np

def sample(inputs, N, skip=[], seed=2312):
    """Sample input from inputs dictionary and return realizations."""
    # get random number generator with fixed seed
    my_rng = np.random.default_rng(seed)

    # loop over inputs and treat them as independent uniform random variables
    sample = []
    for idx in range(N):
        curr_dict = {}
        for key, input in inputs.items():
            if key not in skip:
                if input['type'] == 'dropdown':
                    # sample one of the provided discrete options
                    curr_dict[key] = input['options'][int(my_rng.integers(0, len(input['options']), size=1))]
                elif input['type'] == 'floatslider':
                    # sample uniformly between min and max
                    curr_dict[key] = my_rng.uniform(input['min'], input['max'], size=1)[0]
                else:
                    raise ValueError('The passed input type is not implemented yet.')
        sample.append(curr_dict)

    return sample