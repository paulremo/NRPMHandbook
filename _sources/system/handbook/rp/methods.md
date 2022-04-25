# System level methods 

This section presents various system reliability modelling techniques such as reliability block diagrams (RBD), fault tree analysis (FTA), Markov models, Petri networks and Bayesian networks. The presented methods have in common that they aim at evaluating system reliability as a function of the constituting elements. All methods could be used for comparison of different design solutions and system architectures. The following table provides an overview of the different methods, indicating when which method should be used and also what limitation are associated with each of them.

(syst_table4_2)=
**Table 4.2** : Overview of system level methods.

<iframe src="../../../_static/interactivity/html/syst_table4_2.html" frameborder="0" style="width:100%;" id="ext_interactive" onload="resize_iframe()"></iframe>

```{admonition} Todo
:class: todo
miss ref for categories above
```

Depending on the specific characteristics that shall be represented in the system model different system level methods are more suitable than others. To select the most appropriate method for the system level reliability prediction [Table 4.3](syst_table4_3) provides an overview of each model’s scope of application.

(syst_table4_3)=
**Table 4.3** : Selection of system level methods.

<iframe src="../../../_static/interactivity/html/syst_table4_3.html" frameborder="0" style="width:100%;" id="ext_interactive" onload="resize_iframe()"></iframe>

Before starting a system reliability analysis, the following aspects are important to consider:

- Sound understanding of the system to be modelled is a prerequisite. Starting point is the identification of the system functions for which system reliability requirements have been defined and a functional break down of the system. The system architecture and the components allocated to the function needs to be described. 
- Failure criteria should be clearly defined. The functional failure can be of different nature, e.g. total loss, partial loss, erroneous function (detected or undetected), inadvertent function or degraded performance. Each of them results from different failure modes of contributing components. If more than one definition of failure or success of the system is possible, a separate system level analysis may be required for each. The functional failure analysis provides the input to select the relevant system function and the functional failure that affects system reliability.
- In order to represent the system behaviour correctly a comprehensive understanding of the implemented fault tolerances, fault recoveries and redundancies is vital. In addition to the system descriptions, the Fault Detection Isolation and Recovery (FDIR) Analysis should be reviewed by the reliability engineer to understand the system behaviour in case of component failures. A detailed description of FDIR is given in ECSS-E-ST-70-11C Error: Reference source not found.
- Environmental and operating considerations: the description of the environmental conditions under which the system is designed to operate should be obtained. A space system is used in more than one environment: on the ground, during flight, in orbit. In such scenarios, reliability evaluation should be carried out using the appropriate failure rates for each environment and dormancy periods for hidden failures. To consider the different phases of the mission in conjunction, a reliability prediction for phased mission should be performed, see Section Error: Reference source not found
- The relationship between calendar time, operating time, and on/off cycles should be established.
- For all system components the reliability data (failure rates, reliability, and failure probability) should be available with reference to the environmental and operating conditions, for which these values were established. The FME(C)A are essential input documents for this task. Depending on the reliability requirement and the operational context, the appropriate risk times have to be used in the calculation. The risk time could be a fraction of the mission time if a failure would only be critical when it occurs during a specific time period of the mission. For example, for the failure of an unfolding mechanism the time period until the unfolding is done is the risk time and not the complete mission time. It may also be useful to describe the reliability curve R(t) from t=0 until end of lifetime. 
- The assumption that the failures of redundant elements are independent has to be validated and the susceptibility to common cause failures has to be analysed. If common cause failures are identified, the calculation has to be adapted accordingly. Details on quantitative assessment of common cause failures are given in Section Error: Reference source not found.
- The system model has to be validated together with the design teams.
- In case the reliability requirements are not achieved, the system architecture has to be further analysed to identify possible areas of improvement. Section Error: Reference source not found introduces analytical methods that can be used to support system optimization. For example, importance measures quantify how much the system reliability can be improved if the reliability of a component is improved. The analysis of degraded systems allows a more differentiated analysis of occurrence of system performance between 0 and 100%.
- The actual uncertainty of the data should be estimated, e.g. failure and restoration rates, or common-cause factors. As for all reliability models the uncertainties are to be carefully checked, see also Chapter 8 (Part II) for uncertainties in prediction results. 
- The required accuracy and/or confidence level of the results should be defined.
- To maintain consistency and traceability, all the assumptions and simplifications made during the analysis should be well documented.

```{admonition} Todo
:class: todo
miss 4 ref above
```

(syst_4_3_1)=
## Reliability Block Diagram

The Reliability Block Diagram (RBD) uses a block structure to represent the success logic of the system. It is easy to understand and system success paths can be verified visually. For the purpose of a quantitative reliability analysis, the RBD considers required combinations of system components that are needed to keep the system working. The application of an RBD provides a structured representation of system architecture, and single point failures become quite obvious in the block diagram. Reliability modelling with an RBD is primarily intended for non-repairable systems. The IEC standard IEC 61078:2016 Error: Reference source not found provides the application rules and definitions. 

```{admonition} Todo
:class: todo
miss ref above
```

The RBD is created under the assumption that all failures are independent, thus the occurrence rate of an individual block in the RBD is independent of the occurrence of other events in the RBD. Unless the simultaneous failure of redundant components is explicitly represented in the block diagram, like it is done with the beta factor model to evaluate common cause failures in FTA, dependencies cannot be modelled with an RBD. Furthermore, the RBD approach has limitations in considering different failure modes, priority of events and sequencing of failure. For example: a stand-by redundancy for which different failure rates in stand-by mode and active mode are to be considered depending on the occurrence of another failure cannot be modelled using RBD. Repairable components are also not considered in the model.  


(syst_4_3_1_1)=
### Procedure for system reliability prediction using Reliability Block Diagram

The procedure for constructing an RBD is shown in [Figure 4.3](syst_figure4_3). 

(syst_figure4_3)=
```{figure} ../../picture/figure4_3.png
---
width: 600px
name: figure4_3
---
Procedure for Reliability Prediction using Reliability Block Diagram
```

(syst_4_3_1_2)=
### Basic systems and redundancy schemes

In the following, the calculation of some basic system architecture schemes using reliability block diagrams will be explained. With the presented examples, system architectures that consist of a combination of serial and parallel arrangements can be calculated. 

**Serial System**

In case of a serial system, each component is required to operate error-free in order to fulfil the system's function successfully ([Figure 4.4](syst_figure4_4)).

(syst_figure4_4)=
```{figure} ../../picture/figure4_4.png
---
width: 600px
name: figure4_4
---
Reliability Block Diagram for a Serial System
```

The following rules apply for the calculation of the Failure Probability or Reliability of serial systems under the assumption that the components are independent:

````{admonition} Equation 4.1
:class: equation
``
``  
```{math}
R_{S}(t) = R_{A}(t) * R_{B}(t)
```
````