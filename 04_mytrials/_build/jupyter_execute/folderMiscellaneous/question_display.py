#!/usr/bin/env python
# coding: utf-8

# # Here is a page where you can dynamically see Questions

# In[1]:


import pandas as pd

data_cols = ["Number","Recommendation","Audit Question","Weight","Level","Description","Grade"]
datas = pd.read_csv("data/manufactoring_on_board.csv", header=0, names=data_cols, na_filter=False)

print(datas.Level[1])
datas


# In[81]:


from IPython.display import Markdown as md

def create_new_md(question):
    #print(question)
    q_id = datas.loc[datas['Audit Question'] == question].index[0]
    print(q_id)
    number_md = "## Question N° " + str(datas["Number"][q_id]) + "\n\n\n"
    audit_q_md = "### Audit Question : " + str(datas["Audit Question"][q_id]) + "\n\n"
    desc_md = "### Description : " + str(datas["Description"][q_id]) + "\n\n"
    rec_md = "### Recommendation : " + str(datas["Recommendation"][q_id]) + "\n\n"
    weight_md = "### Weight : " + str(datas["Weight"][q_id]) + "\n\n"
    level_md = "### Level : " + str(datas["Level"][q_id]) + "\n\n"
    grade_md = "### Grade : " + str(datas["Grade"][q_id]) + "\n\n"
    
    
    return(number_md + audit_q_md + desc_md + rec_md + weight_md + level_md + grade_md)


# In[88]:


from ipywidgets import interact, interactive, fixed, interact_manual
from ipywidgets import GridspecLayout
import ipywidgets as widgets

current_question_id = 0
q_txt = ""

all_questions = datas["Audit Question"]
#print(all_questions)


def response(change):
    #print(change.new)
    q_txt = create_new_md(change.new)
    print(q_txt)

question_selection = widgets.Dropdown(
    options=all_questions,
    value=all_questions[0],
    description='Question selection',
    disabled=False,
)
question_selection.observe(response, names="value")
question_selection


# In[89]:


print(q_txt)
md(q_txt)


# <!DOCTYPE html>
# <html>
# <body>
# <h3>onClick event on JavaScript Button to display text</h3>
# <p>JavaScript element triggers an onClick function</p>
# <button onclick="clickText()">Click to show text</button>
# <p id="btn"></p>
# <script>
# function clickText() {
# document.getElementById("btn").innerHTML = "You have clicked on JavaScript button";
# }
# </script>
# </body>
# </html>

# In[ ]:




