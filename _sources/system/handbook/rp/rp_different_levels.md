# Reliability prediction at different levels

Following the definition of a system in [Chapter 3 (Preface)](), a system is considered in the generic sense, and can be defined at any level as a set of components or functions that are interrelated or interact to achieve a specified objective. In this respect, within the scope of system level reliability prediction the term component is not limited to elementary parts, but is considered more generally as the elements the system consists of, which could be parts, pieces of equipment or sub-systems. The system level reliability prediction requires various input data; component level reliability data, the system architecture, system functions, the operational context, the Failure Mode and Effect Analysis (FMEA), Failure Mode Effect and Criticality Analysis (FMECA) and the Failure Mode and Effect Summary (FMES), as shown in {numref}`Figure 7.1`. 

(syst_figure4_1)=
```{figure} ../../picture/figure4_1.png
---
width: 600px
name: Figure 7.1
---
Input and Output data of system reliability prediction
```

The reliability prediction activities are performed at different levels of integration, starting from component level up to system level reliability prediction, as shown in {numref}`Figure 7.2`. The system level reliability analysis aims to demonstrate that the system level reliability requirements are achieved. The system level reliability requirement is cascaded to lower levels to define sub-system, equipment level requirements and derive an architecture that is capable of meeting the requirements. To support the cascading of reliability requirements from system to lower levels a preliminary system level reliability model could be used. 

(syst_figure4_2)=
```{figure} ../../picture/figure4_2.png
---
width: 600px
name: Figure 7.2
---
Reliability Prediction at different levels.
```

As shown in {numref}`Figure 7.2`, to establish a system level reliability prediction the reliability data that are evaluated at the different levels are aggregated bottom-up from component level to system level. 

Starting point is the reliability prediction at the lowest level (elementary parts). At this stage the failure rates or failure probabilities respectively for a single component are determined under the given environmental and operating conditions for a specific mission profile (see Chapters Error: Reference source not found, Error: Reference source not found and Error: Reference source not found). 

````{admonition} Todo
:class: todo
miss 3 ref above
````

The reliability data at elementary part level are then the input to estimate the reliability at equipment level. It is important to consider the different failure modes and functional failure effects at equipment level as they could contribute to different system failure effects. The Failure Mode and Effect Analysis (FMEA) or Failure Mode Effect and Criticality Analysis (FMECA) are methods to support the reliability analysis at equipment level or system level, as all possible failure modes and the associated probability of occurrence are considered. ECSS-Q-ST-30-02C Error: Reference source not foundprovides guideline how to establish Failure Mode Effect and (Criticality) Analysis (FMEA/FMECA). The Failure Mode and Effect Summary (FMES) is an extract from the respective single failure FMEA in such a way that lower level failure modes leading to the same effects are summarized. Identical failure effects from the FMEA are categorized as one failure mode in the FMES. The system level analysis uses the FMEA/FMES as input data. It should be noted that FMEA/FMECA and FMES are not in the scope of the reliability.space Handbook, but are required as input documents for the system level analysis. Finally, the system level reliability prediction model is created. It might be necessary to create more than one system reliability model if different system functions with their own reliability requirements have to be considered. 

````{admonition} Todo
:class: todo
miss ref above
````

The process steps of the reliability prediction at system level for a given reliability requirement could be structured as follows: 

1. Analyse system architecture to determine functions relevant for the reliability requirements
2. Identification of system failure modes
3. Determine fault combinations leading to system failure
4. Select appropriate system level method to model the fault combinations leading to system failure (Table   12 -2 in Section Error: Reference source not found provides an overview of methods and Table   12 -3 provides guidance to select the method)
5. Determine input data (component reliability under given operating conditions and mission profile as described in previous sections of this handbook). 
6. Create a system model with the methods described in Section Error: Reference source not found
7. Run the calculation for the given mission profile
8. Interpret the results
   - If the reliability target is not achieved, the methods described in Section Error: Reference source not found can be useful to determine for which component the reliability should be improved to increase system reliability.
   - Check the system for potential of systematic failures or common cause failures, see Section Error: Reference source not found and Error: Reference source not found.

````{admonition} Todo
:class: todo
miss 4 ref above
````

The system level reliability prediction should be updated if the maturity of input data evolves during the development process or if test data becomes available. 