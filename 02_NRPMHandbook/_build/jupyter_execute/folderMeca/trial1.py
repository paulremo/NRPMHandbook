#!/usr/bin/env python
# coding: utf-8

# In[1]:


# import library 
import pandas as pd 
import matplotlib.pyplot as plt 
from myst_nb import glue

# display plot in the notebook 
get_ipython().run_line_magic('matplotlib', 'inline')

# set figuresize and fontsize 
plt.rcParams['figure.figsize'] = (8,6) 
plt.rcParams['font.size'] = 14 


# In[27]:


data_cols = ["Number","Recommendation","Audit Question","Weight","Level","Description","Grade"]
datas = pd.read_csv("data/manufactoring_on_board.csv", header=0, names=data_cols, na_filter=False)


# In[28]:


glue("data_desciption",datas.head())


# In[29]:


glue("data_stats",datas.describe())


# In[30]:


count_levels = datas.groupby(['Level']).count()
print(count_levels)


# In[31]:


fig1 = datas.Weight.plot(kind="hist", bins=20, title="Histogram of Questions Weights")
plt.xlabel("Questions") 
plt.ylabel("Weight")
#plt.savefig("plots/plot_weight_hist")
glue("plot_weight_hist", fig1.get_figure(), display=False)


# In[32]:



cmap = {1: 'red', 2: 'blue', 3: 'yellow', 4 : 'green'}
fig2 = datas.plot(kind="scatter", x="Weight", y="Grade", c="Level", colormap="Accent"); 
#plt.savefig("plots/fig_scatter_grade")
glue("fig_scatter_grade", fig2.get_figure(), display=False)


# In[33]:


count_level = datas.groupby(['Level']).count()
fig3 = count_level.plot.pie(y="Number")
fig3.get_figure().savefig("plots/fig_level_pie")
glue("fig_level_pie",fig3.get_figure() , display=False)


# In[34]:


fig, ax = plt.subplots()
ax.hist(datas.Weight)
ax.set_title("Histogram of Questions Weights")

fig2, ax = plt.subplots(figsize=(6, 2))
ax.pie(count_level['Number'])
ax.set_title("Repartition of Levels")

glue("hist_weights", fig, display=False)
glue("pie_levels", fig2, display=False)


# In[42]:


import plotly.express as px

figX = px.scatter(datas, x="Weight", y="Grade", color="Level")
figX
glue("plotly_scattered", figX.get_subplot(), display=False)


# In[41]:


import plotly.express as px
df = px.data.iris() # iris is a pandas DataFrame
fig = px.scatter(df, x="sepal_width", y="sepal_length")
fig.show()

