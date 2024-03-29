<!--- Copyright (C) Matrisk GmbH 2022 -->

(syst_4_4)=
# Reliability assessment of phased missions

The operation of missions encountered in space involves several different tasks or phases that must be accomplished in sequence. Systems used like this are usually called phased-mission systems. {numref}`Figure_7_24` shows an example of a phased mission of a space satellite system.

```{figure} ../../picture/figure4_24.png
---
width: 600px
name: Figure_7_24
---
Example phased space mission 
```

During each mission phase, the system has to accomplish a specified task and may be subject to different stresses as well as different dependability {term}`requirements <Requirement>`. Thus, system configuration, success criteria, and component failure behaviour may change from phase to phase. This dynamic behaviour usually requires a distinct model for each phase of the mission in the reliability analysis. Generally, there are two classes of approaches to the evaluation of phased-mission systems: 
- Analytical modelling and
- Simulation. 


Simulation offers greater generality in system representation. On the other hand, analytical modelling techniques can incorporate a desirable combination of flexibility in representation as well as ease of solution. The analytical modelling approaches can be further categorized into three classes: 
- State space oriented model
- Combinatorial methods and  
- Phase modular solution, which combines the former two methods as appropriate.


In the following the analytical approach based on the combinatorial method and state space based model using Markov will be introduced. 

(syst_4_4_1)=
## Mission phase success criteria

To analyse a phased mission, it is important to understand the functional relation of system components in each phase, which can be represented through the methods shown in {numref}`syst_4_3`, e.g. {term}`RBD` or {term}`FTA`. In general, two cases have to be considered.
- Success criteria for the system are phase independent, which means the same functional relation and thus the same reliability block diagram can be used for all phases. 
- Success criteria for the system are phase dependent, thus for each individual phase a different functional relation between the functional blocks of the system has to be considered. 

Depending on the success criteria the system could include:
- Common failure combination, which means if a certain combination of failures occurs during the mission it will lead to system failure regardless of the phase. Thus, the failures are common to all phases of the mission. The mission reliability of such failure combinations is calculated for the last phase considering the entire mission duration.
- Phase failure combinations, which means failure combinations leading to system failure are specific to one phase and are described by probability of occurrence specific to the phase.


In case of phase independent success criteria, the methods described in {numref}`syst_4_3` can be used and no special treatment is required. However, the failure rates of the functional blocks of the system may depend on the phase, as a consequence of different loads applied in different mission phases. Phase dependent component reliability is considered in {numref}`syst_4_4_2`. 

There are several reasons for reconfiguration and changes in success criteria from phase to phase {cite:p}`sys-Somani1994PhasedmissionSA`, which in the end could result in a situation where some combination of failures of components leads to failure of the system in one phase, whereas the same combination does not lead to failure in another phase.
- A component is used in all phases but its operational level {term}`requirement <Requirement>`s may change. In this case, no special treatment is required for this component. The definition of operation or failed state depends on the success criteria.
- A component is used in consecutive phases starting with one phase, and is then not needed for system operation in the remaining phases.
- A component is required to remain operational for some phase, is not needed for the operation of a few phases and is then required again for system operation.
- Spare or operational redundant modules corresponding to one subsystem become spare or redundant modules for another subsystem.


To derive the appropriate success criteria for the reliability analysis of phased mission the phase transition needs to be considered. Depending on the success criteria of the consecutive phase there could be cases where the system state may change at the time of phase transition. The following scenarios of phase transitions could be considered {cite:p}`sys-Somani1994PhasedmissionSA`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'syst_table4_7')" placeholder="Search table...">

```{list-table} Phase transition scenarios in phased mission
:name: syst-table4-7
:header-rows: 1
:widths: 45 55

*   - Phase transition scenarios
    - Success Criteria
*   - A combination of failures does not lead to system failure in both phases $i$ and $i+1$.
    - Success criterion does not change from phase $i$ to $i+1$. E.g. same RBD or {term}`FTA`.
*   - A combination of failures leads to system failure in both phases $i$ and $i+1$.
    - Success criteria do not change from phase $i$ to $i+1$. E.g. same RBD or {term}`FTA`.
*   - A combination of component failures does not imply system failure in phase $i$ but is treated as system failure in phase $i+1$.
    - This case should be treated as latent failures in the earlier phase $i$ as well. This is because such combinations, once present during a phase are bound to lead to the system failure eventually at the transition time when the system enters the later phase $i+1$.
*   - A combination of component failures implies system failure in phase $i$ but does not imply system failure in phase $i+1$.
    - We need to account for the probability of occurrence of these failure combinations only until phase $i$. Any probability attributed to such combinations of component failures in later phases does not contribute towards system unreliability.
```

(syst_4_4_2)=
## Mission phase dependent failure rates

During the different phases of the space mission different load levels might be applied on the components. Vibration and acceleration loads are reaching the peak during launch phase, and in-orbit acceleration loads are significantly lower but radiation is high. This can be considered by phase specific failure rates for the system elements. For constant failure rates, the reliability function of a component in phase  can be expressed as shown in Eq. {eq}`Equation_7_30`.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_30
R_{k}(t) = \text{exp}\left(-\lambda_{k}t\right)\text{exp}\left(-\sum_{i=1}^{i=k-1}\lambda_{i}T_{i}\right)
```
- $R_{k}$ denotes the reliability of the component in phase $k$
- $T_{i}$ denotes the duration of phase $i$
- $t$ denotes the time starting at beginning of phase $k$ such that, $0 \leq t \leq T_{k}$
- $\lambda_{k}$ denotes the failure rate of the component in phase $k$
- $\lambda_{i}$ denotes the failure rate of the component in phase $i$
````

If wear-out has to be considered please refer to {numref}`syst_4_8`.

(syst_4_4_3)=
## Combinatorial methods for phased mission based on mini-components

The analytical methods assume that all components are independent in each phase. But each individual component is used in the different phases and dependency exists across the phases. To account for these dependencies across mission phases Esary and Ziehms {cite:p}`sys-Esary1975ReliabilityAO` proposed replacing the component in each phase with a system of components, so called mini-components, performing independently and in series, as shown in {numref}`Figure_7_25`. That means the component A is operational in phase j only if it has not failed in all previous phases, assuming a non-repairable system. Alternatively, the phase mission system can be calculated as serial system of the individual phases. 

```{figure} ../../picture/figure4_25.png
---
width: 600px
name: Figure_7_25
---
Example for mini components representing component A in three phases
```

The concept of mini components is shown in the following, using an example of a multi-phase mission with three component $A$, $B$ and $C$. The interaction of the system components in order to successfully complete the individual phases is represented through the reliability block diagram for each phase, as shown in {numref}`Figure_7_26`.

```{figure} ../../picture/figure4_26.png
---
width: 600px
name: Figure_7_26
---
Reliability block diagram for individual phases of a multi-phase mission
```

From the multi-phase mission shown in {numref}`Figure_7_26`, a single-phase mission model as shown in {numref}`Figure_7_27` is obtained with the application of mini components.

```{figure} ../../picture/figure4_27.png
---
width: 600px
name: Figure_7_27
---
Single phase mission model
```

The initial configurations for the three phases have been transformed to a single reliability block diagram comprising three sub-systems in a series arrangement. Since the subsystems will generally have components in common, they will not function independently {cite:p}`sys-Somani1994PhasedmissionSA`. The reliability of each phase is obtained from the following equations:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_31
R_{1}(t) = 1 - (1-q_{A_{1}})(1-q_{B_{1}})(1-q_{C_{1}})
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_32
R_{2}(t) = q_{A_{1}}q_{A_{2}}\left(q_{B_{1}}q_{B_{2}} + q_{C_{1}}q_{C_{2}} - q_{B_{1}}q_{B_{2}}q_{C_{1}}q_{C_{2}}\right)
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_33
R_{3}(t) = q_{A_{1}}q_{A_{2}}q_{A_{3}}q_{B_{1}}q_{B_{2}}q_{B_{3}}q_{C_{1}}q_{C_{2}}q_{C_{3}}
```
````

Where $q_{ij}$ denotes the conditional reliability of component $i$ in phase $j$ given that it has not failed in the previous phase, which is obtained from the following equation.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_34
q_{ij} = P\left(x_{i}\left(t_{j}\right) = 1 | x_{i}\left(t_{j-1}\right) = 1\right)
```
````

(syst_4_4_4)=
## Boolean phase algebra

The before mentioned methods consider the failure of components in different phases separately. To overcome this limitation and to handle the dependencies of component states used in various mission phases, a set of Boolean algebraic laws to represent combinations of component behaviour can be applied to phased mission systems. A basic event A may be represented in the following way {cite:p}`sys-Somani1994PhasedmissionSA`:
- $A_{1}=1$ denotes the event that component A is operational during the interval from the start of the mission until the end of phase $i$. This automatically implies that the component is operational during all earlier phases as well.

The following rules should be applied to Boolean variables belonging to the same component to simplify the Boolean expression, with $j>i$. 

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'syst_table4_8')" placeholder="Search table...">

```{list-table} Boolean Phase Algebra rules
:name: syst-table4-8
:header-rows: 1
:widths: 45 55

*   - Phase Algebra Rule
    - Explanation
*   - $A_{i} \cap A_{j} \rightarrow A_{j}$
    - The event “A is operational in phase i and the later phase j” is equivalent to the event “A is operational in the later phase j”
*   - $\overline{A_{i}} \cap \overline{A_{j}} \rightarrow \overline{A_{i}}$
    - The event “A has failed in phase i and the later phase j” is equivalent to the event “A has failed in phase i”
*   - $\overline{A_{i}} \cap A_{j} \rightarrow 0$
    - The event “A has failed in phase i, but is operational in the later phase j does not exist for a non-repairable phase mission system
*   - $A_{i} \cup A_{j} \rightarrow A_{i}$
    - The event “A is operational in phase i or in the later phase j” is equivalent to the event “A is operational in the phase i”
*   - $\overline{A_{i}} \cup \overline{A_{j}} \rightarrow \overline{A_{j}}$
    - The event “A has failed in phase i or in the later phase j“ is equivalent to the event “A has failed in phase j”
*   - $A_{i} \cup \overline{A_{j}} \rightarrow 1$
    - The event “A is operational in phase i or failed in the later phase j” is equivalent to certain event 1
*   - $\overline{A_{i}} \cup A_{j} \rightarrow \overline{A_{i}} \cup A_{j}$
    - The event “A has failed in phase i, or is operational in the later phase j” cannot be simplified any further
*   - $A_{i} \cap \overline{A_{j}} \rightarrow A_{i} \cap \overline{A_{j}}$
    - The event “A is operational in phase i and failed in the later phase j” cannot be simplified any further
```

The Boolean phase algebra in {numref}`syst-table4-8` allows identifying the possible scenarios where due to more stringent failure criteria in a later phase the system failure occurs and is described as a latent failure. With application of the Boolean algebra, the performance of a component through different phases is no longer considered separately. Using the Boolean phase algebra, the system reliability over all phases is obtained by the following equation:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_35
R_{S} = 1 - \left(P\left(E_{P} \right) + \sum_{i=1}^{i=p-1}P\left(PFC_{i}\right) \right)
```
Where
- $P\left(PFC_{i}\right)$ denotes the probability of occurrence that phase failure combination in phase $i$ occurs
- $P\left(E_{P} \right)$ is the probability of system failure calculated for phase $p$, where  $p$ denotes the last phase. This includes also common failure combinations. 
````

**Example :**

The system reliability of the system shown in {numref}`Figure_7_26` is given by

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_36
R_{s} = 1 - \left( P\left( E_{3} \right) + P\left( \text{PFC}_{2} \right) + P\left( \text{PFC}_{1} \right) \right)
```
````

The failure combinations for the 3 phases are given by:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_37
E_{1} = {\overline{A}}_{1} \cap {\overline{B}}_{1} \cap {\overline{C}}_{1}
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_38
E_{2} = {\overline{A}}_{2} \cup {\overline{B}}_{2} \cap {\overline{C}}_{2}
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_39
E_{3} = {\overline{A}}_{3} \cup {\overline{B}}_{3} \cup {\overline{C}}_{3}
```
````

Where $E_{i}$ denotes the failure combination leading to system failure in phase $i$ given as Boolean logic expression.

With Eq. {eq}`Equation_7_39` the following is obtained for the failure probability in phase 3.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_40
P\left( E \middle| 3 \right) = P\left( {\overline{A}}_{3} \cup {\overline{B}}_{3} \cup {\overline{C}}_{3} \right)
```
````

The failure probability in phase 1 and 2 is given by the following equations.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_41
P\left( \text{PFC} \middle| 1 \right) = P\left( \left( E_{1} \cap {\overline{E}}_{2} \right) \cap {\overline{E}}_{3} \right)
```
```{math}
P\left( \text{PFC} \middle| 1 \right) = P
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_42
P\left( \text{PFC} \middle| 2 \right) = P\left( E_{2} \cap {\overline{E}}_{3} \right)
```
```{math}
P\left( \text{PFC} \middle| 2 \right) = P
```
````

The phase algebra rules in {numref}`syst-table4-8` are applied for phase 2 and the following is obtained:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_43
P\left( \text{PFC} \middle| 2 \right) = P
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_44
P\left( \text{PFC} \middle| 2 \right) = P\left( \left( {\overline{A}}_{2} \cup {\overline{B}}_{2}{\overline{\cap C}}_{2} \right) \cap \left( A_{3} \cap B_{3} \cap C_{3} \right) \right)
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_45
P\left( \text{PFC} \middle| 2 \right) = P
```
````

In Eq. {eq}`Equation_7_45` it can be seen that both component A and B are failed in phase 2 but operational in phase 3, which is not possible for non-repairable system according to the Boolean phase algebra rules in {numref}`syst-table4-8`. Thus with $\overline{A_{2}} \cap A_{3} \rightarrow 0$ and $\overline{B_{2}} \cap B_{3} \rightarrow 0$, the phase failure combination $\text{PFC}_{2}$ is empty. The same is obtained for $\text{PFC}_{1}$.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_46
P\left( \text{PFC} \middle| 1 \right) = P
```
````

Thus, the reliability of the phase mission system is given by Eq. {eq}`Equation_7_47`. It can be seen that the system reliability over all phases is determined by the availability of the components in the last phase.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_47
R_{S}\left( t \right) = 1 - P\left( E \middle| 3 \right) = 1 - P\left( {\overline{A}}_{3} \cup {\overline{B}}_{3} \cup {\overline{C}}_{3} \right)
```
````

(syst_4_4_5)=
## State space model of phased mission

The phased mission system can also be analysed based on a state space model using Markov model. Smotherman and Zemoudeh {cite:p}`sys-Esary1975ReliabilityAO` used a single non-homogeneous Markov chain model to perform the reliability analysis of a phased mission system. The behaviour of the system in each phase is represented using a different Markov chain, which may contain a different subset of states. The state transitions are described in terms of time dependent rates to include phase changes. Thus, state-dependent phase changes, random phase durations as well as time varying failure and repair behaviour can be easily modelled.

The example shown in {numref}`Figure_7_26` is shown as Markov chain in {numref}`Figure_7_28`, where the failure of components A, B and C are given by the associated failure rates $\lambda_{a}$, $\lambda_{b}$ and $\lambda_{c}$. Each component can have two states, failed or operational. An identifier is assigned to each system state where, e.g."011" indicates A failed, B and C operational. The transition from phase 1 to phase 2 is given by the time dependent rate $h_{1}\left( t \right)$ and $h_{2}\left( t \right)$ denotes the rate of change from phase 2 to phase 3.

The main advantage of this model is that it includes the configurations for all phases as well as the phase changes. But on the other side, as the number of components increases this approach results in a large model as the number of states increases rapidly.

```{figure} ../../picture/figure4_28.png
---
width: 600px
name: Figure_7_28
---
Phased mission Markov model approach by Smotherman and Zemoudeh {cite:p}`sys-Esary1975ReliabilityAO`
```

As shown before, two classes of approaches have been developed to analyse phased missions, the combinatorial approach and the Markov chain approach. The combinatorial approaches are computationally efficient, but are applicable only when each phase is a static phase, in which all components are functionally independent and the order in which failures occur does not matter. Markov based approaches are able to capture the functional dependencies among components and the required order of failures, or dynamic failure criteria. On the other hand, the size of the Markov model may increase such it become not feasible to be solved. Therefore, a modular approach that combines combinatorial and Markov chain approach as appropriate can also be used to analyse phased mission systems {cite:p}`sys-Esary1975ReliabilityAO`.
