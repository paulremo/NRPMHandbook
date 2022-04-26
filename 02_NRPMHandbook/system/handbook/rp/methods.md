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

(syst_equation4_1)=
````{admonition} Equation 4.1
:class: equation
``
``  
```{math}
R_{S}(t) = R_{A}(t) * R_{B}(t)
```
````

(syst_equation4_2)=
````{admonition} Equation 4.2
:class: equation
``
``  
```{math}
F_{S}(t) = F_{A}(t) + F_{B}(t) - F_{A}(t) * F_{B}(t)
```
````

In general, the following rule applies for a serial system with $n$ components:

(syst_equation4_3)=
````{admonition} Equation 4.3
:class: equation
``
``  
```{math}
R_{S}(t) = \sum_{i = 1}^{n} R_{i}(t)
```
````

**Parallel System**

In case of a parallel system, at least one component is required to operate error-free in order to fulfil the system function ([Figure 4.5](syst_figure4_5)). The failure of one component is tolerable as the system is still functioning, thus redundancy is implemented in the system. 

(syst_figure4_5)=
```{figure} ../../picture/figure4_5.png
---
width: 600px
name: figure4_5
---
Reliability Block Diagram for a Parallel System
```

For parallel systems, the following mathematical rules for the calculation of the Failure Probability or Reliability apply under the assumption that both components are independent:

(syst_equation4_4)=
````{admonition} Equation 4.4
:class: equation
``
``  
```{math}
R_{S}(t) = R_{A}(t) + R_{B}(t) - R_{A}(t) * R_{B}(t)
```
````

(syst_equation4_5)=
````{admonition} Equation 4.5
:class: equation
``
``  
```{math}
F_{S}(t) = F_{A}(t) * F_{B}(t)
```
````

(syst_equation4_6)=
````{admonition} Equation 4.6
:class: equation
``
``  
```{math}
R_{S}(t) = 1 - \prod_{i=1}^{n} (1-R_{i}(t))
```
````

**Combined Serial/Parallel System**

Many complex space systems can be represented as a combination of serial and parallel systems. Through decomposition, the complex system can be simplified to determine its reliability with the before mentioned equations. [Figure 4.6](syst_figure4_6) presents the RBD of a common system architecture, which can be analysed through decomposition of serial and parallel systems.

Before the failure probability and reliability of this particular system consisting of three components (A, B and C) is determined, the system architecture has to be simplified in accordance with the Boolean logic.


(syst_figure4_6)=
```{figure} ../../picture/figure4_6.png
---
width: 600px
name: figure4_6
---
Decomposition of a System Architecture
```

In the first step, the summary of the serial connection between the failure of component B and C is obtained by the following equation:

(syst_equation4_7)=
````{admonition} Equation 4.7
:class: equation
``
``  
```{math}
R_{B \vee C}(t) = R_{B}(t) * R_{C}(t)
```
````

In the second and final step, the combination of the parallel arrangement described in the transitional scheme yields:

(syst_equation4_8)=
````{admonition} Equation 4.8
:class: equation
``
``  
```{math}
R_{S}(t) = R_{A}(t) + R_{B \vee C}(t) -  R_{A}(t) * R_{B \vee C}(t)
```
````

(syst_equation4_9)=
````{admonition} Equation 4.9
:class: equation
``
``  
```{math}
R_{S}(t) = R_{A}(t) + R_{B}(t) * R_{C}(t) -  R_{A}(t) * R_{B}(t) * R_{C}(t)
```
````

**Approximation by minimal cut sets**

For certain system architectures the RBD cannot be decomposed. [Figure 4.7](syst_figure4_7) shows an example of such a system architecture (bridge system) that cannot be reduced to a combination of serial and parallel arrangements.

(syst_figure4_7)=
```{figure} ../../picture/figure4_7.png
---
width: 600px
name: figure4_7
---
Reliability Block Diagram for a Complex System
```

Since no further simplification of the system architecture is possible, alternative methods have to be introduced to determine the failure probability or reliability of such systems. By particularly selecting combinations of component failures that lead to the failure of the entire system, the Minimal Cut (MC) set approach is used to determine an approximation of the failure probability of an arbitrary system.

Since the removal of any basic component failure would not cause a failure of the entire system, the following combinations of component failures are called a minimal cut set:

$MC_{1} = (A,B)$,
$MC_{2} = (C,D)$,
$MC_{3} = (A,D,E)$,
$MC_{4} = (B,C,E)$.

[Figure 4.8](syst_figure4_8) presents the minimal cut set that has been applied on the final scheme of the RBD.

(syst_figure4_8)=
```{figure} ../../picture/figure4_8.png
---
width: 600px
name: figure4_8
---
Minimal Cut Sets
```

The failure probability of the entire system can be approximated by adding the failure probabilities of the minimal cut sets. For each minimal cut set the failure probability is obtained by multiplying the failure probabilities of all its components.

(syst_equation4_10)=
````{admonition} Equation 4.10
:class: equation
``
``  
```{math}
F_{S}(t) \cong F_{A}(t)F_{B}(t) + F_{C}(t)F_{D}(t) + F_{A}(t)F_{D}(t)F_{E}(t) + F_{B}(t)F_{C}(t)F_{E}(t)
```
````

The system reliability is then given by [Equation 4.11](syst_equation4_11).

(syst_equation4_11)=
````{admonition} Equation 4.11
:class: equation
``
``  
```{math}
R(t) = 1 - F(t)
```
````

For the above-mentioned example, a rigorous solution can be found by analysis of the elementary system states or using Bayes theorem. With a component reliability for each component of $R_{i}(t) = 0.9$ , a system reliability of $R_{S}(t) = 0.97848$ is obtained from the exact solution, where else the approximation using the minimal cut sets provides a system reliability of $R_{i}(t) = 0.978$. It can be seen that the minimal cut set approach generally overestimates failure probabilities, this method provides a very conservative estimation of the system reliability.

(syst_4_3_2)=
## Fault Tree Analysis

The Fault Tree Analysis (FTA) is a structured, conclusive failure analysis which is focused on one particular undesired top event and used to identify potential causes of this event. FTA uses identi-cal calculation methods to those applied in the RBD. Therefore, it is widely used as an alternative method for the RBD. By setting up a qualitative model and then evaluating this model, the FTA is representing a "top-down" system evaluation procedure. After the undesired top level event has been identified, the different failure modes of sub-systems and components which could cause this event have to be determined systematically. The individual failures leading to the top event are combined through OR and AND gates, which correspond to serial and parallel arrangements in a RBD. Therefore, FTA is a graphical method that shows the logical relation between each particular failure scenario and the primary elements, component failures or events that can cause it. Guide-lines for FTA can be found in [RD3] .

(syst_4_3_2_1)=
### Procedure to create FTA

The procedure to create a FTA is almost identical to that for RBD. The main difference is the graphical representation of the system, starting from the top event (the system failure) where else RDB considered success paths. 

The following aspects should be considered carefully while carrying out FTA:
- To ensure the clarity and ease of identification of events, a standardized format needs to be adopted when giving names in the fault tree for intermediate and basic events. 
- To avoid double counting and/or complete omission of systems/interfaces/support systems, it is strongly recommended that explicit definitions of boundary conditions should be established and documented.
- When external events are considered in the Fault Tree, the data source for the occurrence probability should be referred
- For redundancies used in the FTA (AND gates), in particular for critical function whose failure could result in loss of mission, the independence has to be verified. If simultaneous failure of redundant components due to the same cause can occur, a quantitative analysis of Common Cause Failure needs to be performed, see Section Error: Reference source not found. 


The fault tree analysis has the same limitations as RBD, thus 
- All components/sub-systems are considered to be independent, dependencies are not considered.
- Sequencing of failures is not taken into account.
- Repairable components cannot be modelled in the FTA


(syst_4_3_2_1)=
### Basic system and redundancy schemes

A redundancy in the system is represented as an AND gate in the fault tree, as shown in [Figure 4.9](syst_figure4_9). Both component A and B have to fail to cause the system failure. 

(syst_figure4_9)=
```{figure} ../../picture/figure4_9.png
---
width: 600px
name: figure4_9
---
Example Fault Tree of system with two redundant components.
```

The calculation is identical to RBD, thus [Equation 4.4](syst_equation4_4) and [Equation 4.5](syst_equation4_5) apply also for the fault tree. A system with components working in serial arrangement is represented by an OR gate in the fault tree, which means if either component A or B fails the system will fail, see [Figure 4.10](syst_figure4_10). 

(syst_figure4_10)=
```{figure} ../../picture/figure4_10.png
---
width: 600px
name: figure4_10
---
Example Fault Tree of system with two component working in series.
```

For the calculation the same rules apply as for RBD, thus [Equation 4.1](syst_equation4_1) and [Equation 4.2](syst_equation4_2) are to be used to calculate reliability or failure probability of the fault tree shown in Figure   12 -10. A combination of AND and OR gate, which would correspond to combination of serial and parallel arrangement in RBD is shown in [Figure 4.11](syst_figure4_11). The calculation is done similar to RBD by decomposition. 

(syst_figure4_11)=
```{figure} ../../picture/figure4_11.png
---
width: 600px
name: figure4_11
---
Example Fault Tree with OR and AND gates.
```

A system consisting of n components or sub-systems, of which only k need to be functioning for system success, is called a “k-out-of-n” configuration. For such a system, k is less than n. The associated fault tree is represented with a voting gate, the figure indicates the number of basic events that are required for the top event. Given that the system components are identical and statistically independent the system reliability is given by the Binomial distribution in [Equation 4.12](syst_equation4_12).

(syst_figure4_12)=
```{figure} ../../picture/figure4_12.png
---
width: 600px
name: figure4_12
---
Example Fault Tree with Vote gate (2 out of 3 logic).
```

(syst_equation4_12)=
````{admonition} Equation 4.12
:class: equation
``
``  
```{math}
R_{S}(t) = \sum_{k}^{n} \frac{n!}{i!(n-i)!}R(t)^{i}(1-R(t))^{n-i}
```
````

(syst_4_3_3)=
## Event Tree Analysis

Event Tree Analysis (ETA) is an inductive method which shows all possible outcomes resulting from an initiating event. The event tree models the sequences containing relationships from an initiating event and subsequent responses along with the end states. Various system failure sequences can be identified and the probability of occurrence of each sequence is quantified. 

The main steps to perform an Event Tree Analysis are Error: Reference source not found:
- Identify (and define) a relevant initial event that may lead to unwanted consequences with respect to system reliability, e.g. loss of system performance, mission failure etc. 
- Identify the barriers that are implemented to deal with the initial event
- Construct the event tree
- Describe the (potential) resulting system sequences
- Determine the frequency of the initial event and the (conditional) probabilities of the branches in the event tree
- Calculate the probabilities/frequencies for the identified consequences (outcomes)

```{admonition} Todo
:class: todo
Miss ref just above
```

An initiating event may be caused by:
- System or equipment failure (random, wear-out or systematic failure)
- Systematic failure caused by design, manufacturing or operation error
- External event


The initiating event is normally anticipated during the system development and the system designers have implemented barriers that are designed to respond to the initiating event by terminating the sequence or by mitigating the consequences. For each initiating event the potential progressions leading to system failure, the system dependencies and the conditional system responses have to be identified. 

[Figure 4.13](syst_figure4_13) shows an example of a generic event tree to illustrate how the initiating event evolves. Starting point for the creation of the event tree is the initiating event. Then the event tree is constructed considering the timing and the sequence of further events and failures that are leading to the outcome. Therefore, failure or success of barriers, mitigations means and additional events that are relevant for a specific initiating event are considered in the sequence in which they will be activated. Such additional events could be for example further component failures or external events. In the sequence of the event tree in most applications only two alternatives (“true” and “false”) are considered. It is, however, possible to have three or more alternatives. 

(syst_figure4_13)=
```{figure} ../../picture/figure4_13.png
---
width: 600px
name: figure4_13
---
Example of a generic event tree
```

The consequences of the event are considered through a series of possible paths. Each path is assigned a probability of occurrence and thus the probability of the various possible outcomes can be calculated. For example, the quantitative assessment of the probability that outcome 1 occurs given the initiating event has occurred is given by: 

(syst_equation4_13)=
````{admonition} Equation 4.13
:class: equation
``
``  
```{math}
P(Outcome 1 | Initiating event) = P(B_{1} \cup B_{2} \cup B_{3} \cup B_{4})
```
````

The advantages of Event Tree Analysis are the visualization of the chain of events following an initiating event and the visualization of barriers and their sequence of activation. Event Tree Analysis therefore provides a good basis to evaluate the need for improved procedures and mitigations means in the system. On the other hand, Event Tree Analysis has several limitations: 
- Only one initiating event can be considered in each analysis. The ETA is not well suited for the consideration of common cause failures in quantitative analysis. 
- Subtle system dependencies can be easily overlooked and the Event Tree does not show acts of omission. 
- Furthermore, there is no standard for the graphical representation of the Event Tree. 

(syst_4_3_4)=
## Markov model

Markov models are especially suited for the evaluation of system reliability for the following systems Error: Reference source not found:

```{admonition} Todo
:class: todo
Miss ref just above
```

- Systems for which the system failure depends on sequential events
- Repairable systems, or system for which reconfiguration, re-boot or switch to back-up to restore function is possible.
- System with queuing problems, and resource restrictions.


The Markov techniques make use of a state transition diagram which is a representation of the system, modelling the system behaviour with respect to time. A system consists of a number of interacting components, and each component can only be in one of two states: operational or failed. However, the system as a whole can be in many different states. The system state changes over time if the state of certain components changes. Thus, the following elements are used to describe the system behaviour:

- A set of discrete states that represents system configurations or operational states of the systems components, e.g. operational, failed, ongoing recovery, degraded mode. 
- A set of transitions between states that defines where it is possible to change from one state directly to another. The transitions are quantifiable through the transition rate. The transition rates are often referred to as failure rate and repair rate. The Markov model uses only constant transitions rates.

The output of the Markov analysis is the calculation of the probabilities of the system being in each of these states at a time t. Since the system states are mutually exclusive, the system can only be in one state at a time and it is always in one defined state at all times. The system states may be clustered, e.g. in operational states and failed states:

- Operating states: these are the states where the system function is performed although some of the components may have failed; a fully operational state is a state where no component has failed.
- Failed states: these are the states where the system function is no longer fulfilled due to the failure of one or more of the system components.


Depending on the objective of the reliability analysis further classes of system states can be defined in order to derive reliability measures. In the following some examples of analysis objectives are listed: 

- To determine the probability of the system to be operational if requested
- To determine the distribution of time to first failure
- To determine the probability to restore system function
- To determine the probability of the system to be in one particular state
- To determine the probability of the system to be at a certain performance level

As a guideline, the following questions should be considered to define the boundary conditions of the analysis and the characteristics of the system Error: Reference source not found:

```{admonition} Todo
:class: todo
Miss ref just above
```

- What are the important features of the system which need to be modelled, e.g. cold redundancy, reconfiguration of the system in degraded modes? These system characteristics need to be modelled for the reliability prediction. For example, the transitions to redundant components are to be modelled. 
- Will the system be restored after a failure or not? This will define the failure scenario of the system. If the system function can be restored for a specific combination of component failures, the associated system states are not failure states of the system and a transition with related repair rate is leading back to fully operational system states. 
- Is it necessary to describe time-dependent behaviour?


The fact that the Markov model is based on the representation of system states could make practical application more difficult for large number of components, as the number of possible transitions and system states increases rapidly with the number of components. Another limitation of Markov model is related to the assumption that the future behaviour of the system depends only on the present state of the system, and not on the way the system arrived at this state Error: Reference source not found. Consequently, it has to be ensured that the actual system behaviour is adequately represented with such memory-less Markov models. 

```{admonition} Todo
:class: todo
Miss ref just above
```


Creating a Markov Model includes the following steps:

1. All the system states are to be identified and classified as either operating states or failed states, or another category has to be defined. If each component has two possible states (operating and failed) and if the system has n components, the maximum number of states is $2^{n}$. During the life of the system, failed states can appear due to the existence of failures, or disappear following repairs. 
2. The possible transitions between the different states are to be listed and the causes of transitions needs to be identified. A transition rate has to be assigned based on theses causes. The causes of the transitions are either failure of one or several subsystem components; in this case the failure rate is representing the transition rate. Or the function of a component is restored and the repair rate is used as transition rate.
3. The state transition diagram is developed wherein each node represents a state of the system, and each arc represents a transition between states. The guidelines given in IEC 61165 Error: Reference source not found for state transition diagrams should be applied.
4. The probabilities of being in the different states during a certain period in the life are calculated based on the state transition diagram. For a system with $m$ states a set of $m$ differential equations is derived from the state transition diagram. 


In the following, the Markov model for a system with two components working in active redundancy should be developed. Each component can only be in one of the following states: failed or operable. With two components there are in total four system states:

- System state S1 = A and B operable
- System state S2 = A operable, B failed
- System state S3 = B operable, A failed
- System state S4 = A and B failed

The state transition rates are given by the failure rates for component $A$ and $B$, $\lambda_{A}$ and $\lambda_{B}$. [Figure 4.14](syst_figure4_14) shows the corresponding state transition diagram. 

(syst_figure4_14)=
```{figure} ../../picture/figure4_14.png
---
width: 600px
name: figure4_14
---
State transition diagram of system with two redundant components
```

A set of differential equations can be obtained from the state transition diagram in [Figure 4.14](syst_figure4_14). Each differential equation describes the change in the probability of being in one state, which can be formulated in the general equation, given in [Equation 4.14](syst_equation4_14). 

(syst_equation4_14)=
````{admonition} Equation 4.14
:class: equation
``
``  
```{math}
\text{Change in probability of state } i = \text{incoming probability from all other states} - \text{outgoing probability to all other states}
```
````

The following set of differential equations is obtained from the state transition diagram in [Figure 4.14](syst_figure4_14)

(syst_equation4_15)=
````{admonition} Equation 4.15
:class: equation
``
``  
```{math}
\dot{P_{1}}(t) = -(\lambda_{A} + \lambda_{B})P_{1}(t)
```
````


(syst_equation4_16)=
````{admonition} Equation 4.16
:class: equation
``  
``  
```{math}
\dot{P_{2}}(t) = \lambda_{B}P_{1}(t) - \lambda_{A}P_{2}(t)
```
````

(syst_equation4_17)=
````{admonition} Equation 4.17
:class: equation
``
``  
```{math}
\dot{P_{3}}(t) = \lambda_{A}P_{1}(t) - \lambda_{B}P_{3}(t)
```
````

(syst_equation4_18)=
````{admonition} Equation 4.18
:class: equation
``
``  
```{math}
\dot{P_{4}}(t) = \lambda_{A}P_{2}(t) + \lambda_{B}P_{3}(t)
```
````

Where $P_{1}(t)$ denotes the probability of being in state $S_{1}$, and $P_{2}(t)$ denotes the probability of being in state $S_{2}$ and so on. The system of differential equations can be represented as follows:

(syst_equation4_19)=
````{admonition} Equation 4.19
:class: equation
``
``  
```{math}
[\dot{P}] = [P][A]
```
````

For a system with $m$ states, the square matrix $A$ has $m$ rows and $m$ columns. The sum of all possible system states must be 1 at all times. 

(syst_equation4_20)=
````{admonition} Equation 4.20
:class: equation
``
``  
```{math}
\sum^{i=m}P_{i}(t) = 1
```
````

To solve the differential equations, the initial state probabilities at $t = 0$ have to be defined, in this case both components are operable at $t=0$, thus $P_{1}(t) = 1$ and the other state probabilities are zero. From the solution of the system of differential equations, the following is obtained: 

(syst_equation4_21)=
````{admonition} Equation 4.21
:class: equation
``
``  
```{math}
P_{1}(t) = \text{exp}\left(-\left(\lambda_{A} + \lambda_{B} \right)t\right)
```
````

(syst_equation4_22)=
````{admonition} Equation 4.22
:class: equation
``
``  
```{math}
P_{2}(t) = \text{exp}\left(-\lambda_{A}t\right)
```
````

(syst_equation4_23)=
````{admonition} Equation 4.23
:class: equation
``
``  
```{math}
P_{3}(t) = \text{exp}\left(-\lambda_{B}t\right)
```
````

(syst_equation4_24)=
````{admonition} Equation 4.24
:class: equation
``
``  
```{math}
P_{4}(t) = 1 - \text{exp}\left(-\lambda_{B}t\right)
```
````

For complex problems with $n$ components it is more suitable to solve the set of $2^{n}$ differential equations using numerical methods.

(syst_4_3_5)=
## Petri Network

Petri nets are a graphical technique for the representation and analysis of complex logical interactions among elements in a system. Petri nets allow describing the behaviour of a system by modelling the relationship between local states and local events Error: Reference source not found. They are able to model the various states of the system and how it evolves from one state to another when events (failures, repairs, periodic tests, mission phases, etc.) occur. A detailed description of Petri networks can be found in IEC 62551:2012  Error: Reference source not found.

```{admonition} Todo
:class: todo
Miss 2 ref just above
```

A Petri net consists of the following basic elements:
- Places: Circles used to model local states or conditions (e.g. failed or functioning).
- Transitions: Bars used to model local events (e.g. failure or restoration).
- Arcs: Directed arcs that link places and transitions.
- 
Within the Petri net, tokens are dynamic elements used to indicate the system state at a certain point in time. Petri nets containing tokens are referred to as marked Petri nets. Firing is an event where one or more tokens move from one place to another.  

The multiplicity assigned to an arc in the Petri net specifies the number of tokens that an arc delivers at a time, whereby multiplicity of $1$ is usually not explicitly defined in the Petri net. A transition is enabled if the number of tokens in each of its inputs is equal to or greater than the multiplicity of the associated arcs. This concept allows to indicate if state transition is enabled or not, as shown in [Figure 4.15](syst_figure4_15). In the example, a multiplicity of $2$ is assigned to the arc from $p_{2}$, thus only with two tokens in $p_{2}$, the transition $t_{1}$ is enabled.

(syst_figure4_15)=
```{figure} ../../picture/figure4_15.png
---
width: 600px
name: figure4_15
---
Petri net before and after firing
```

Similar to enabling a transition, the inverse function to inhibit a transition can also be modelled in the Petri net, represented by an inhibition arc. In the example in [Figure 4.16](syst_figure4_16) the transition is inhibited as long as one token is in place $p_{2}$. 

(syst_figure4_16)=
```{figure} ../../picture/figure4_16.png
---
width: 600px
name: figure4_16
---
Petri net with inhibitor arc
```

The different types of transitions within a Petri net can be described as deterministic or as stochastic, as shown [Table 4.4](syst_table4_4) according to Error: Reference source not found. Deterministic transitions include immediate transitions with no delay, or transitions with a delay, where the parameter  denotes the duration of delay. Stochastic transitions are defined by their distribution function modelling the time to transition. 

```{admonition} Todo
:class: todo
Miss ref just above
```

(syst_table4_4)=
**Table 4.4** : Type of transitions in Petri net

```{figure} ../../picture/table4_4.png
---
width: 600px
name: table4_4
```

A single repairable component that can obtain two states (operable or failed); can be represented by a Petri net as shown in [Figure 4.17](syst_figure4_17). The places $p_{1}$ and $p_{2}$ are representing the two states of the component and the failure or restoration of the component is shown as transitions $t_{1}$ and $t_{2}$ in the Petri net. 

(syst_figure4_17)=
```{figure} ../../picture/figure4_17.png
---
width: 600px
name: figure4_17
---
Petri net of single element
```

The Petri nets corresponding to failure of a serial system and a parallel system are shown in [Figure 4.18](syst_figure4_18).

(syst_figure4_18)=
```{figure} ../../picture/figure4_18.png
---
width: 600px
name: figure4_18
---
Petri net of a) serial system (OR gate) and b) parallel system (AND gate)
```

Within a Petri net, the system model can be structured hierarchically by using super nodes representing a sub model and a super transition that represents the transition between sub models connected by super arc, see Error: Reference source not found for details.

```{admonition} Todo
:class: todo
Miss ref just above
```

(syst_4_3_5_1)=
### Creating a system model using Petri network

Creating a system model with Petri networks starts with the identification of functional blocks, allowing to modularize the system model as a Petri net. That means the functional block, which corresponds to elements of a higher level reliability block diagram, can be modelled as a sub-model in the Petri net. 

As the model that is to be developed depends on the complexity of the system and on the analysis task, the global model generally requires a subset of the following main steps:

1. Description of the system;
2. Identification of functional blocks of the system relevant for the analysis;
3. Sub models for each functional block that describe the functional behaviour 
4. Sub models for each functional block that describe the reliability aspects and interconnection between sub models
5. Refine the model until the required level of detail is achieved. This involves iteration of step 3 and 4 
6. Analysis of the model

(syst_figure4_19)=
```{figure} ../../picture/figure4_19.png
---
width: 600px
name: figure4_19
---
Main steps for system reliability analysis with Petri nets. 
```

(syst_4_3_5_2)=
### Analysing Petri net models

Petri nets used for quantitative analysis are primarily based on timed or stochastic state transition diagrams. The quantitative analysis of Petri nets provides the probability of reaching certain states that are relevant for reliability assessment (stationary analysis), as well as the probability of certain transitions (transition analysis). Petri nets that consist exclusively exponential distributed transitions can be converted to its corresponding Markov models. So general stochastic Petri net models containing complex interactions can often be described more easily and with a smaller diagram than using Markov model Error: Reference source not found. In case of arbitrary distributions, Monte Carlo simulation are used to perform transient or stationary analysis. Monte Carlo simulation is also applied to Petri nets if the number of reachable states is too large to solve the corresponding Markov model. The number of manageable states strongly depends on computing performance, however up to 107 states can be regarded as analysable. Besides a quantitative analysis, a qualitative analysis can be performed to determine the possibility to reach certain states (reachability analysis) or to identify invariants, deadlocks and traps (structured analysis). The qualitative analysis is based on an untimed state transition diagram, which means the transitions are not quantified. The following diagram provides an overview of the analysis methods for Petri nets. 

```{admonition} Todo
:class: todo
Miss ref just above
```

(syst_figure4_20)=
```{figure} ../../picture/figure4_20.png
---
width: 600px
name: figure4_20
---
Analysis methods of Petri nets
```

(syst_4_3_6)=
## Bayesian networks

Bayesian networks are directed acyclic graphs DAG, in which the nodes represent random variables and a probability is associated to each state of the node. Directed arcs between pairs of nodes represent dependencies between the random variables. A Bayesian network uniquely defines a joint probability distribution over all the random variables present in the graph. The nodes that have arrows directed into them are called child nodes and the nodes that have arrows directed from them are called parent nodes. Nodes without incoming arcs, thus without parents, are called root nodes. Each root node has a marginal probability distribution associated with it, and all other nodes have conditional (conditioned on the state of the parent nodes) probability tables associated with them. The conditional probability tables quantify the probability of a node depending on the states of its parent nodes. The state probabilities for all nodes are fully defined by the input and calculated from the (marginal and conditional) probability tables. The underlying inference method, making use of Bayes' theorem (see Chapter 7 Part II) is a powerful tool allowing also inverse modelling, e.g. to estimate the conditional probability of component failures based on an observed system level failure mode.


The graph can be regarded as a probabilistic expert system, whereby the reasoning is based on dependency relations: fault-symptoms, cause-effects, and hypothesis-evidence. Every fault and symptom is modelled by random variables with a finite range of possible values. An example of a basic Bayesian network is shown in [Figure 4.21](syst_figure4_21).


(syst_figure4_21)=
```{figure} ../../picture/figure4_21.png
---
width: 200px
name: figure4_21
---
Example of a basic Bayesian network
```

Considering a Bayesian network with random variables $X_{1}, X_{2}, ..., X_{n}$ by applying the chain rule of probability theory, the joint probability given in [Equation 4.27](syst_equation4_27) can be expressed as follows: 


(syst_equation4_25)=
````{admonition} Equation 4.25
:class: equation
``
``  
```{math}
P\left(X_{1},..., X_{n}\right) = \prod^{n}P\left(X_{i}|pa\left(X_{i}\right)\right)
```
````
where $pa\left(X_{i}\right)$ denotes the set of parents of node $X_{i}$. 

The computation is based on the probabilities of the parents’ states and the conditional probability table. In the following example, two nodes $A$ and $B$, each with two possible states ($S_{1}$ and $S_{2}$) are considered. The associated Bayesian network is shown in [Figure 4.22](syst_figure4_22). The a priori probabilities of node A are defined as shown in the following table.

(syst_table4_5)=
**Table 4.5** : A priori probabilities of node A

```{figure} ../../picture/table4_5.png
---
width: 600px
name: table4_5
```

The probability distribution for the states of $B$ given the states of $A$ are defined by the conditional probability table, as shown in [Table 4.6](syst_table4_6). It defines the conditional probabilities $P(B|A)$ of event $B$ with regard to the state of $A$.

(syst_table4_6)=
**Table 4.6** : Conditional probability table of node B

```{figure} ../../picture/table4_6.png
---
width: 600px
name: table4_6
```

The marginal distribution $P\left(B=S_{B_{1}}\right)$ is obtained from Bayesian network inference as follows:

(syst_equation4_26)=
````{admonition} Equation 4.26
:class: equation
``
``  
```{math}
P\left(B=S_{B_{1}}\right) = P\left(B=S_{B_{1}}|A=S_{A_{1}}\right)P\left(A=S_{A_{1}}\right) + P\left(B=S_{B_{1}}|A=S_{A_{2}}\right)P\left(A=S_{A_{2}}\right)
```
````

An advantage of Bayesian networks for system reliability estimation is the fact that it allows to merge knowledge of diverse natures in one model: data from feedback experience, experts’ judgment (express through logical rules, equations or subjective probabilities), the behaviour of the studied system (functional and dysfunctional analysis) and observations. Moreover, Bayesian network allow the explicit representation of dependencies between failures and establish cause effect relationships between the influencing factors Error: Reference source not found. Dependent events can be found in reliability analysis in the following cases Error: Reference source not found:

- **Common causes**. Failure of multiple items occurring from a single cause that is common to all of them. Thus, under these conditions, component failures are no longer independent. See also Section Error: Reference source not found.
- **Mutually exclusive primary events**. Consider the basic events: “switch fails to close” and “switch fails to open”. These two basic events are mutually exclusive, i.e., the occurrence of one basic event precludes another. Thus, the occurrence of one event is not independent from the occurrence of another event when basic events are mutually exclusive.
- **Standby redundancies**. When an operating component fails, a standby component is put into operation, and the redundant configuration continues to function. Thus, component failures are not statistically independent, since the failure of the standby component depends on the time when the primary operating component has failed.
- **Components supporting loads**. Assume that a set of components supports loads such as stresses, currents, etc. A failure of one component increases the load supported by the other components. Consequently, the remaining components are more likely to fail, and we cannot assume statistical independence of components.

(syst_4_3_6_1)=
### Determine conditional probability tables in Bayesian networks

The reliability analysis based on Bayesian networks starts with identifying the set of random variables to describe the network. In a Bayesian network, each node represents a random variable and the connections between nodes indicate the causal relationships between variables. The conditional probability table needs to be defined to represent this relationship and thus to represent the system architecture that is to be analysed. In the following, the Bayesian network and associated conditional probability table is shown for serial system, [Figure 4.22](syst_figure4_22). It should be noted that for a serial and parallel system the Bayesian network is the same but with different probability tables.

(syst_figure4_22)=
```{figure} ../../picture/figure4_22.png
---
width: 200px
name: figure4_22
---
Bayesian network of a serial system
```

The joint probability of the serial system is given by

(syst_equation4_27)=
````{admonition} Equation 4.27
:class: equation
``
``  
```{math}
P(X,A,B) = P(X|A,B)P(A,B)
```
````

The conditional probability of the child node X for a serial system is given by [Equation 4.28](syst_equation4_28) Error: Reference source not found:

```{admonition} Todo
:class: todo
Miss ref just above
```

(syst_equation4_28)=
````{admonition} Equation 4.28
:class: equation
``
``  
```{math}
P(X|A,B) = \begin{bmatrix}
1 & 1 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
```
````

For a serial system the conditional probabilities are either 1 or 0, which means system failure will occur for certain if A or B fails. The conditional probability table for a parallel system is given in [Equation 4.29](syst_equation4_29). 

(syst_equation4_28)=
````{admonition} Equation 4.28
:class: equation
``
``  
```{math}
P(X|A,B) = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 1 & 1
\end{bmatrix}
```
````

The marginal probability $P(A,B)$ of root node $A$ and $B$ is given by the probabilities of the states of the random variables $A$ and $B$.

Another advantage of Bayesian network is that it allows to model dependencies. [Figure 4.23](syst_figure4_23) shows a Bayesian network for analysing common cause failures. In the example, the failure of the component is caused by an external event or shock (see shock model in Section Error: Reference source not found). While the events $S_{1}$ and $S_{3}$ cause only one component ($A$ or $B$) to fail, the event $S_{2}$ will result in the loss of both components. Thus, component $A$ and $B$ are not independent as their failure could result from a common source. The system states are assigned to $X$. In this case, all the conditional probability matrices (for $A$, $B$, and $X$) are defined equivalent to AND gates.

```{admonition} Todo
:class: todo
Miss ref just above
```

(syst_figure4_23)=
```{figure} ../../picture/figure4_23.png
---
width: 600px
name: figure4_23
---
Bayesian network with common cause failure
```