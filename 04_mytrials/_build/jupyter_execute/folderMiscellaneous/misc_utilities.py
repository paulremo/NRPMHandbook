#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
from myst_nb import glue

df1 = pd.read_html("table4_1.html")
datas = pd.DataFrame(df1[0])
#print(datas[:3])
#print(datas[3:10])
#print(datas[10:13])
#print(datas[13:16])
#print(datas[16:])
glue("table4_1",datas)


# In[44]:


import plotly.graph_objects as go
import pandas as pd


fig = go.Figure(data=[go.Table(
    header=dict(values=list(datas.columns),
                fill_color='paleturquoise',
                align='left'),
    cells=dict(values=[datas.REF, datas.SUBSYSTEM, datas["UNIT / ITEM"], datas["RELIABILITY DATA"]],
               fill_color='lavender',
               align='left'))
])

#fig.show()

glue("plotly_t4_1", fig.show())


# In[33]:


df2 = pd.read_html("table4_2.html")
datas2 = pd.DataFrame(df2[0])

glue("table4_2",datas2)


# In[45]:


fig2 = go.Figure(data=[go.Table(
    header=dict(values=list(datas2.columns),
                fill_color='paleturquoise',
                align='left'),
    cells=dict(values=[datas2.REF, datas2.SUBSYSTEM, datas2["UNIT / ITEM"], datas2["RELIABILITY DATA"]],
               fill_color='lavender',
               align='left'))
])

fig2.show()


# In[49]:


df3 = pd.read_html("table4_3.html")
datas3 = pd.DataFrame(df3[0])

glue("table4_3",datas3.to_markdown())


# In[50]:


fig3 = go.Figure(data=[go.Table(
    header=dict(values=list(datas3.columns),
                fill_color='paleturquoise',
                align='left'),
    cells=dict(values=[datas3["Root cause category"], datas3["Coverage by the miscellaneous reliability prediction  methodology"]],
               fill_color='lavender',
               align='left'))
])

fig3.show()


# In[ ]:





# In[ ]:




