# Reliability Models for miscellaneous items

The operation of missions encountered in space involves several different tasks or phases that must be accomplished in sequence. Systems used like this are usually called phased-mission systems. [Figure 4.24](syst_figure4_24) shows an example of a phased mission of a space satellite system.

(syst_figure4_24)=
```{figure} ../../picture/figure4_24.png
---
width: 200px
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