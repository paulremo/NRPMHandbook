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
            - <*> -- Additional keys that are accepted by the chosen widget type
        """

        # layout options
        input_layout_center = widgets.Layout(display='flex',
                                      align_items='center',
                                      width='100%')
        input_layout_left = widgets.Layout(display='flex',
                                      align_items='flex-start',
                                      width='100%')
        widget_layout_drop = widgets.Layout(display='flex',
                                       align_items='flex-start',
                                       width='75%')
        widget_layout_slider = widgets.Layout(display='flex',
                                       align_items='flex-start',
                                       width='90%')
        button_layout = widgets.Layout(display='flex',
                                       align_items='center',
                                       justify_content='center',
                                       width='30%')

        # initialize widgets
        widgets_dict = {}
        for key, value in kwargs.items():
            # distinguish between supported widget types
            if value['type'].casefold() == 'dropdown':
                # remove type key and pass to widget
                del value['type']
                # defaults for dropdown
                if not 'layout' in value.keys():
                    value['layout'] = widget_layout_drop
                if 'value' in value.keys():
                    if isinstance(value['value'], str):
                        # value is string, assign either mean, max, or min
                        if value['value'] == 'mean':
                            value['value'] = value['options'][int(len(value['options'])/2)]
                        elif value['value'] == 'min':
                            value['value'] = value['options'][0]
                        elif value['value'] == 'max':
                            value['value'] = value['options'][-1]
                widgets_dict[key] = widgets.Dropdown(**value)
            elif value['type'].casefold() == 'floatslider':
                # remove type key and pass to widget
                del value['type']
                # defaults for floatsliders
                if not 'continuous_update' in value.keys():
                    value['continuous_update'] = False
                if not 'orientation' in value.keys():
                    value['orientation'] = 'horizontal'
                if not 'readout' in value.keys():
                    value['readout'] = True
                if not 'layout' in value.keys():
                    value['layout'] = widget_layout_slider
                if 'value' in value.keys():
                    if isinstance(value['value'], str):
                        # value is string, assign either mean, max, or min
                        if value['value'] == 'mean':
                            value['value'] = (value['min']+value['max'])/2
                        elif value['value'] == 'min':
                            value['value'] = value['min']
                        elif value['value'] == 'max':
                            value['value'] = value['max']
                # user-specified options
                widgets_dict[key] = widgets.FloatSlider(**value)
            elif value['type'].casefold() == 'floatlogslider':
                # remove type key and pass to widget
                del value['type']
                # defaults for floatsliders
                if not 'continuous_update' in value.keys():
                    value['continuous_update'] = False
                if not 'orientation' in value.keys():
                    value['orientation'] = 'horizontal'
                if not 'readout' in value.keys():
                    value['readout'] = True
                if not 'layout' in value.keys():
                    value['layout'] = widget_layout_slider
                if 'value' in value.keys():
                    if isinstance(value['value'], str):
                        # value is string, assign either mean, max, or min
                        if value['value'] == 'mean':
                            value['value'] = 10**((value['min']+value['max'])/2)
                        elif value['value'] == 'min':
                            value['value'] = value['min']
                        elif value['value'] == 'max':
                            value['value'] = value['max']
                # user-specified options
                widgets_dict[key] = widgets.FloatLogSlider(**value)
            else:
                print(f'Provided widget {value["type"]} is not supported!')

            # default options for all widgets
            if not 'disabled' in widgets_dict[key].keys:
                widgets_dict[key]['disabled'] = False


        # put inside interactive
        ip = interactive(fun, {'manual':True, 'manual_name':'run model', 'auto_display':True}, **widgets_dict)

        # setup input controls
        controls = ip.children[:-1]
        input_controls = controls[:-1]
        run_button = controls[-1]
        run_button.style.button_color = '#424141'
        run_button.layout = button_layout

        # specify number of items per columns
        num, div = len(input_controls), n_cols
        items_per_column = [num // div + (1 if x < num % div else 0) for x in range(div)]

        columns = []
        for ii in range(n_cols):
            if ii == 0:
                end_idx = items_per_column[ii]
                start_idx = 0
            else:
                end_idx += items_per_column[ii]
                start_idx = items_per_column[ii-1]

            columns.append(VBox(input_controls[start_idx:end_idx], layout=input_layout_left))

        parameter_box = HBox(columns, layout=input_layout_center)
        input_box = VBox([parameter_box, run_button], layout=input_layout_center)

        # setup output
        output_stream = ip.children[-1]

        # display
        # show input fields
        IPython.display.display(input_box)

        # show output
        IPython.display.display(output_stream)

        # run first time
        ip.update()
