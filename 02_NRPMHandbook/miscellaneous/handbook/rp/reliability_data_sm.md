# Reliability Data for Miscellaneous “Standard model”

[Table 4 -8](misc_table4_8) provides the basic failures rates or basic probability of failure (%) to be considered for miscellaneous “standard models”. 

The meaning of the columns is explained in **XXX**.

```{admonition} Todo
:class: todo
Miss ref just above "in ..."
```

````{admonition} Note 1 : MIS_01 TWTA, Single HPA
:class: note
The failure rate is provided per TWT Channel (mono channel or dual channel). In order to be used for LEO, if adaptation is necessary, it is recommended to use 

1.  by default the following proportion (based on average MIL-HDBK-217 Error: Reference source not foundreliability prediction) of the whole failure rate.
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

(misc_table4_7)=
**Table 4.7** : Structure of the reliability data table in [Table 4 -8](misc_table4_8)

<iframe src="../../../_static/interactivity/html/misc_table4_7.html" frameborder="0" style="width:100%;" id="ext_interactive" onload="resize_iframe()"></iframe>

(misc_table4_8)=
**Table 4.8** : reliability data table

<iframe src="../../../_static/interactivity/html/misc_table4_8.html" frameborder="0" style="width:100%;" id="ext_interactive" onload="resize_iframe()"></iframe>