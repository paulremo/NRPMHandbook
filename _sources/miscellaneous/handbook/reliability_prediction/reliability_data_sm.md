(misc_5_8)=
# Reliability Data for Miscellaneous “Standard model”
{numref}`Reliability data` provides the basic failures rates or basic probability of failure (%) to be considered for miscellaneous “standard models”. 

The meaning of the columns is explained in **XXX**.

```{admonition} Todo
:class: todo
Miss ref just above "in ..."
```

````{admonition} Note 1 : MIS_01 TWTA, Single HPA
:class: note
The failure rate is provided per TWT Channel (mono channel or dual channel). In order to be used for LEO, if adaptation is necessary, it is recommended to use 

1.  by default the following proportion (based on average MIL-HDBK-217 {cite:t}`mis-MIL-HDBK-217F` reliability prediction) of the whole failure rate.
    * EPC_common = 36%
    * EPC_channel = 9%
    * CAMP = 25%
    * TWT = 30%
2. to use the supplier repartition as per its own reliability prediction.

```{admonition} Todo
:class: todo
REF ERROR just above in 1.
```
````

Reference to a table {numref}`Structure of the reliability data table` and to another table {numref}`Reliability data`.

```{list-table} Structure of the reliability data table
:class: interactive-table
:name: Structure of the reliability data table

* - <iframe class="ext_content" src="../../../_static/interactivity/html/misc_table4_7.html" frameBorder="0" onload="resize_iframe(this)" ></iframe>
```

```{list-table} Reliability data
:class: interactive-table
:name: Reliability data

* - <iframe class="ext_content" src="../../../_static/interactivity/html/misc_table4_8.html" frameBorder="0" onload="resize_iframe(this)" ></iframe>
```