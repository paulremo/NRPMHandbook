# Reliability Models for miscellaneous items

The operation of missions encountered in space involves several different tasks or phases that must be accomplished in sequence. Systems used like this are usually called phased-mission systems. [Figure 4.24](syst_figure4_24) shows an example of a phased mission of a space satellite system.

(syst_figure4_24)=
```{figure} ../../picture/figure4_24.png
---
width: 600px
name: figure4_24
---
Example phased space mission 
```

During each mission phase, the system has to accomplish a specified task and may be subject to different stresses as well as different dependability requirements. Thus, system configuration, success criteria, and component failure behaviour may change from phase to phase. This dynamic behaviour usually requires a distinct model for each phase of the mission in the reliability analysis. Generally, there are two classes of approaches to the evaluation of phased-mission systems: 
- Analytical modelling and
- Simulation. 


Simulation offers greater generality in system representation. On the other hand, analytical modelling techniques can incorporate a desirable combination of flexibility in representation as well as ease of solution. The analytical modelling approaches can be further categorized into three classes: 
- State space oriented model
- Combinatorial methods and  
- Phase modular solution, which combines the former two methods as appropriate.


In the following the analytical approach based on the combinatorial method and state space based model using Markov will be introduced. 

## Mission phase success criteria

To analyse a phased mission, it is important to understand the functional relation of system components in each phase, which can be represented through the methods shown in Section Error: Reference source not found, e.g. RBD or FTA. In general, two cases have to be considered.
- Success criteria for the system are phase independent, which means the same functional relation and thus the same reliability block diagram can be used for all phases. 
- Success criteria for the system are phase dependent, thus for each individual phase a different functional relation between the functional blocks of the system has to be considered. 

Depending on the success criteria the system could include:
- Common failure combination, which means if a certain combination of failures occurs during the mission it will lead to system failure regardless of the phase. Thus, the failures are common to all phases of the mission. The mission reliability of such failure combinations is calculated for the last phase considering the entire mission duration.
- Phase failure combinations, which means failure combinations leading to system failure are specific to one phase and are described by probability of occurrence specific to the phase.


In case of phase independent success criteria, the methods described in Section Error: Reference source not found can be used and no special treatment is required. However, the failure rates of the functional blocks of the system may depend on the phase, as a consequence of different loads applied in different mission phases. Phase dependent component reliability is considered in section Error: Reference source not found. 

There are several reasons for reconfiguration and changes in success criteria from phase to phase Error: Reference source not found, which in the end could result in a situation where some combination of failures of components leads to failure of the system in one phase, whereas the same combination does not lead to failure in another phase.
- A component is used in all phases but its operational level requirements may change. In this case, no special treatment is required for this component. The definition of operation or failed state depends on the success criteria.
- A component is used in consecutive phases starting with one phase, and is then not needed for system operation in the remaining phases.
- A component is required to remain operational for some phase, is not needed for the operation of a few phases and is then required again for system operation.
- Spare or operational redundant modules corresponding to one subsystem become spare or redundant modules for another subsystem.


To derive the appropriate success criteria for the reliability analysis of phased mission the phase transition needs to be considered. Depending on the success criteria of the consecutive phase there could be cases where the system state may change at the time of phase transition. The following scenarios of phase transitions could be considered Error: Reference source not found:

```{admonition} Todo
:class: todo
Miss 4 ref just above
```

(syst_table4_7)=
**Table 4.7** : Phase transition scenarios in phased mission

<iframe src="../../../_static/interactivity/html/syst_table4_7.html" frameborder="0" style="width:100%;" id="ext_interactive" onload="resize_iframe()"></iframe>

(syst_4_4_2)=
## Mission phase dependent failure rates

During the different phases of the space mission different load levels might be applied on the components. Vibration and acceleration loads are reaching the peak during launch phase, and in-orbit acceleration loads are significantly lower but radiation is high. This can be considered by phase specific failure rates for the system elements. For constant failure rates, the reliability function of a component in phase  can be expressed as shown in [Equation 4.30](syst_equation4_30).

(syst_equation4_28)=
````{admonition} Equation 4.28
:class: equation
``
``  
```{math}
R_{k}(t) = \text{exp}\left(-\lambda_{k}t\right)\text{exp}\left(-\sum_{i=1}^{i=k-1}\lambda_{i}T_{i}\right)
```
- $R_{k}$ denotes the reliability of the component in phase $k$
- $T_{i}$ denotes the duration of phase $i$
- $t$ denotes the time starting at beginning of phase $k$ such that, $0 \leq t \leq T_{k}$
- $\lambda_{k}$ denotes the failure rate of the component in phase $k$
- $\lambda_{i}$ denotes the failure rate of the component in phase $i$
````



If wear-out has to be considered please refer to Section Error: Reference source not found.

```{admonition} Todo
:class: todo
Miss ref just above
```

## Combinatorial methods for phased mission based on mini-components

The analytical methods assume that all components are independent in each phase. But each individual component is used in the different phases and dependency exists across the phases. To account for these dependencies across mission phases Esary and Ziehms Error: Reference source not found proposed replacing the component in each phase with a system of components, so called mini-components, performing independently and in series, as shown in [Figure 4.25](syst_figure4_25). That means the component A is operational in phase j only if it has not failed in all previous phases, assuming a non-repairable system. Alternatively, the phase mission system can be calculated as serial system of the individual phases. 

```{admonition} Todo
:class: todo
Miss ref just above
```

(syst_figure4_25)=
```{figure} ../../picture/figure4_25.png
---
width: 600px
name: figure4_25
---
Example for mini components representing component A in three phases
```

The concept of mini components is shown in the following, using an example of a multi-phase mission with three component $A$, $B$ and $C$. The interaction of the system components in order to successfully complete the individual phases is represented through the reliability block diagram for each phase, as shown in [Figure 4.26](syst_figure4_26).

(syst_figure4_26)=
```{figure} ../../picture/figure4_26.png
---
width: 600px
name: figure4_26
---
Reliability block diagram for individual phases of a multi-phase mission
```

From the multi-phase mission shown in [Figure 4.26](syst_figure4_26), a single-phase mission model as shown in [Figure 4.27](syst_figure4_27) is obtained with the application of mini components.

(syst_figure4_27)=
```{figure} ../../picture/figure4_27.png
---
width: 600px
name: figure4_27
---
Single phase mission model
```

The initial configurations for the three phases have been transformed to a single reliability block diagram comprising three sub-systems in a series arrangement. Since the subsystems will generally have components in common, they will not function independently Error: Reference source not found. The reliability of each phase is obtained from the following equations:

```{admonition} Todo
:class: todo
Miss ref just above
```

(syst_equation4_31)=
````{admonition} Equation 4.31
:class: equation
``
``  
```{math}
R_{1}(t) = 1 - (1-q_{A_{1}})(1-q_{B_{1}})(1-q_{C_{1}})
```
````

(syst_equation4_32)=
````{admonition} Equation 4.32
:class: equation
``
``  
```{math}
R_{2}(t) = q_{A_{1}}q_{A_{2}}\left(q_{B_{1}}q_{B_{2}} + q_{C_{1}}q_{C_{2}} - q_{B_{1}}q_{B_{2}}q_{C_{1}}q_{C_{2}}\right)
```
````

(syst_equation4_33)=
````{admonition} Equation 4.33
:class: equation
``
``  
```{math}
R_{3}(t) = q_{A_{1}}q_{A_{2}}q_{A_{3}}q_{B_{1}}q_{B_{2}}q_{B_{3}}q_{C_{1}}q_{C_{2}}q_{C_{3}}
```
````

Where $q_{ij}$ denotes the conditional reliability of component $i$ in phase $j$ given that it has not failed in the previous phase, which is obtained from the following equation.

(syst_equation4_34)=
````{admonition} Equation 4.34
:class: equation
``
``  
```{math}
q_{ij} = P\left(x_{i}\left(t_{j}\right) = 1 | x_{i}\left(t_{j-1}\right) = 1\right)
```
````

(syst_4_4_4)=
## Boolean phase algebra

The before mentioned methods consider the failure of components in different phases separately. To overcome this limitation and to handle the dependencies of component states used in various mission phases, a set of Boolean algebraic laws to represent combinations of component behaviour can be applied to phased mission systems. A basic event A may be represented in the following way Error: Reference source not found:
- $A_{1}=1$ denotes the event that component A is operational during the interval from the start of the mission until the end of phase $i$. This automatically implies that the component is operational during all earlier phases as well.

```{admonition} Todo
:class: todo
Miss ref just above
```

The following rules should be applied to Boolean variables belonging to the same component to simplify the Boolean expression, with $j>i$. 