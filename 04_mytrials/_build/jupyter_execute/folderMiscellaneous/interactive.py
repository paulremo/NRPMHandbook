#!/usr/bin/env python
# coding: utf-8

# # Welcome to the interactive page !
# 
# Here you can interact with the different visualizations using direct manipulations or using widgets.
# 
# If you find a "Click to show" button, then you can click to have the Python code of the cell.

# Below you can directly interact with the plot !

# In[1]:


# import library 
import pandas as pd 
import matplotlib.pyplot as plt 
from myst_nb import glue
import plotly.express as px

#Upload data
data_cols = ["Number","Recommendation","Audit Question","Weight","Level","Description","Grade"]
datas = pd.read_csv("data/manufactoring_on_board.csv", header=0, names=data_cols, na_filter=False)

#Plot an interactive graph
figX = px.scatter(datas, x="Weight", y="Grade", color="Level")
figX


# In[3]:


#Create first widget with ipywidgets
import ipywidgets as widgets
widgets.IntSlider(
    value=7,
    min=0,
    max=10,
    step=1,
    description='Test:',
    disabled=False,
    continuous_update=False,
    orientation='horizontal',
    readout=True,
    readout_format='d'
)


# Below you can select a range on the slider t only see the questions whose grade stands between the two extreme values (level widget has no effect for now)

# In[4]:


#Defines the min and max of the grade widget according to data
min_grade = int(datas.Grade.min())
max_grade = int(datas.Grade.max())
#print(min_grade, max_grade)


# In[5]:


#Importations
import pandas as pd
import numpy as np

import plotly.graph_objects as go
import plotly.express as px
import plotly

from plotly.offline import download_plotlyjs, init_notebook_mode, plot, iplot

from ipywidgets import interact, interactive, fixed, interact_manual
from ipywidgets import GridspecLayout
import ipywidgets as widgets

#Defines the different widgets for grade and level (level has no effect for the moment)

grade_from = widgets.Dropdown(
    options=np.arange(min_grade,max_grade+1),
    value=min_grade,
    description='Grade From:',
    disabled=False,
    width='100px'
)

grade_to = widgets.Dropdown(
    options=np.arange(min_grade,max_grade+1),
    value=max_grade,
    description='Grade To:',
    disabled=False,
    width='100px'
)

level = widgets.Dropdown(
    options=[1,2,3,4],
    value=1,
    description='Level:',
    disabled=False,
    max_width='100px'
)

# Create containers
container_grade = widgets.VBox([widgets.HTML(value="<b>Grade</b>"),grade_from, grade_to],justify_content='center',max_width='180px')
container_level = widgets.VBox([widgets.HTML(value="<b>Level</b>"),level],justify_content='center',max_width='180px')

# Create grids
grid = GridspecLayout(1, 2, width='900px', height='150px',grid_gap="10px")
grid[0,0] = container_grade
grid[0,1] = container_level


#Define the type of plot we want and all the parameters
question_data = []
for index, row in datas.iterrows():
    # Each car is a marker on the scatter plot. 
    dt_g = go.Scatter(
        x = (row['Weight'],),
        y = (row['Grade'],),
        mode='markers',
        marker=dict(
            size=16
        ),
        visible=True,
        hovertext = "Weight : " +str(row['Weight'])+": (Level="+str(row['Level'])+", Grade="+str(row['Grade'])+")"
    )
    question_data.append(dt_g)
    
#Defines the layout of the plot
layout = dict(
    title='Grade and Level according to Weight',
    autosize=True,
    hovermode='closest',
    showlegend=False,
    xaxis_title="Weight",
    yaxis_title="Grade",
    )

# Create figure
fig = go.FigureWidget(data=question_data, layout=layout)


# Function called whenever there is any change in any of the widgets to update the plot
#Notice : the graph is not really updated but we hide some values with a filter
def response(change):
    
    # Store indices of the cars within the price range
    grade_filter = list(np.where((datas.Grade > grade_from.value) & (datas.Grade < grade_to.value))[0])
    # Store indices of the brand
    if(level.value=='all'):
        # Store all the indices
        level_filter = range(len(question_data))
    else:
        # Store indices of those cars which belong to the filtered brand
        level_filter = list(np.where(datas.Grade == level.value)[0])
        
   
    # Store indices of the intersection of all the filters. 
    all_filters =list(set(grade_filter))
    #print(all_filters)
    # Set visibility for those cars at the intersection to true and rest to false
    visibility = [True if i in all_filters else False for i in range(len(question_data))]
    
    # Update visibility of the plot so only the ones filtered will be true and rest will be false
    fig.plotly_restyle({'visible': visibility})
    
# Change Listener for widgets
grade_from.observe(response, names="value")
grade_to.observe(response, names="value")
level.observe(response, names="value")

# Plot the widgets
widgets.VBox([grid, fig])


# In[6]:


from notebookjs import execute_js


# In[7]:


with open("notebookJSfiles/draw_circle_lib.js", "r") as f:
    draw_circle_lib = f.read()
    
with open("notebookJSfiles/d3.v3.min.js", "r") as f:
    d3_lib = f.read()

execute_js([d3_lib, draw_circle_lib], "draw_circle", {"color": "#4682B4"})


# In[8]:


with open("notebookJSfiles/radial_bar.css", "r") as f:
    radial_bar_css = f.read()
    
with open ("notebookJSfiles/radial_bar_lib.js", "r") as f:
    radial_bar_lib = f.read()
    
energy = pd.read_csv("notebookJSfiles/energy.csv")

execute_js(library_list=[d3_lib, radial_bar_lib], main_function="radial_bar", 
             data_dict=energy.to_dict(orient="records"), css_list=[radial_bar_css])


# In[9]:


helloworld_js = """
function helloworld(div_id, data){
    comm = new CommAPI("get_hello", (ret) => {
      document.querySelector(div_id).textContent = ret.text;
    });
    setInterval(() => {comm.call({})}, 1000);
    comm.call({});
}
"""

import random
def hello_world_random(data):
  hello_world_languages = [
      "Ola Mundo", # Portuguese
      "Hello World", # English
      "Hola Mundo", # Spanish
      "Geiá sou Kósme", # Greek
      "Kon'nichiwa sekai", # Japanese
      "Hallo Welt", # German
      "namaste duniya" #Hindi
  ]
  i = random.randint(0, len(hello_world_languages)-1)
  return {'text': hello_world_languages[i]}

#execute_js(helloworld_js, "helloworld", callbacks={"get_hello": hello_world_random})


# In[ ]:




