# Copyright (C) Matrisk GmbH 2022

import pytest

# import module
from nrpmint.interface.web import UI

def test_web():
    """
    Tests whether the web interface can be created with the given options.
    """

    test_function = lambda a,b : b

    # prepare slider and drop down
    a = {
        'type': 'dropdown',
        'description': 'a [-]',
        'value': 'Gumbel',
        'options': ['LogNormal', 'Normal', 'Gumbel'],
    }

    b = {
        'type': 'floatslider',
        'description': 'b [$m^2$]',
        'value': 0.5,
        'min': 0,
        'max': 1,
        'step': 1e-2,
    }

    # initialize interface
    my_interface = UI(test_function, n_cols=2, a=a, b=b)