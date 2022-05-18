import IPython
import ipywidgets as widgets
from ipywidgets import interactive, Layout, HBox, VBox

class UI:
    """
    Class for web user interface interface. The interface exposes widgets (sliders/buttons/text-fields) for arguments
    of a passed function.
    """
    def __init__(self, fun, n_cols=2, **kwargs):
        """
        Arguments:
        fun -- function that is called with the exposed interface parameters. Arguments must be  provided as optional arguments.
        n_cols -- number of columns the widgets should be arranged in (optional, default=2)

        Optional key-value pair arguments:
        Sequence of dictionaries or numerical values that represent the arguments to fun. The key must match
        the required function argument. The values are

        - dictionaries for each widget with keys:
            - type -- Widget type, can be
                - Dropdown
                - FloatSlider
            - description -- Display name of the widget
            - <*> -- Additional keys that are required by the chosen widget type
        """

        # specify number of items per columns
        num, div = len(kwargs), n_cols
        items_per_column = [num // div + (1 if x < num % div else 0) for x in range(div)]

        # initialize widgets
        widgets_dict = {}
        for key, value in kwargs.items():
            # distinguish between supported widget types
            if value['type'].casefold() == 'dropdown':
                # remove type key and pass to widget
                del value['type']
                widgets_dict[key] = widgets.Dropdown(**value)
            elif value['type'].casefold() == 'floatslider':
                # remove type key and pass to widget
                del value['type']
                # user-specified options
                widgets_dict[key] = widgets.FloatSlider(**value)
                # defaults for floatsliders
                if not 'continuous_update' in widgets_dict[key].keys:
                    widgets_dict[key]['continuous_update'] = True
                if not 'orientation' in widgets_dict[key].keys:
                    widgets_dict[key]['orientation'] = 'horizontal'
                if not 'readout' in widgets_dict[key].keys:
                    widgets_dict[key]['readout'] = True
            else:
                print(f'Provided widget {value["type"]} is not supported!')

            # default options for all widgets
            if not 'disabled' in widgets_dict[key].keys:
                widgets_dict[key]['disabled'] = False

        # put inside interactive
        ip = interactive(fun, **widgets_dict)

        # setup input controls
        input_controls = ip.children[:-1]

        columns = []
        for ii in range(n_cols):
            if ii == 0:
                end_idx = items_per_column[ii]
                start_idx = 0
            else:
                end_idx += items_per_column[ii]
                start_idx = items_per_column[ii-1]

            columns.append(VBox(input_controls[start_idx:end_idx]))

        input_box = HBox(columns)

        # setup output
        output_stream = ip.children[-1]

        # display
        # show input fields
        IPython.display.display(input_box)

        # show output
        IPython.display.display(output_stream)
