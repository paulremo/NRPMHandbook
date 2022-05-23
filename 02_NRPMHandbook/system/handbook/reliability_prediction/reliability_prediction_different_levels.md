# Reliability prediction at different levels

Following the definition of a system in preface, a system is considered in the generic sense, and can be defined at any level as a set of components or functions that are interrelated or interact to achieve a specified objective. In this respect, within the scope of system level {term}`reliability prediction <Reliability prediction>` the term component is not limited to elementary parts, but is considered more generally as the elements the system consists of, which could be parts, pieces of equipment or sub-systems. The system level {term}`reliability prediction <Reliability prediction>` requires various input data; component level reliability data, the system architecture, system functions, the operational context, the {term}`failure mode <Failure mode>` and Effect Analysis (FMEA), Failure Mode Effect and Criticality Analysis ({term}`FMECA`) and the Failure Mode and Effect Summary ({term}`FMES`), as shown in {numref}`Figure 7.1`. 

(syst_figure4_1)=
```{figure} ../../picture/figure4_1.png
---
width: 600px
name: Figure 7.1
---
Input and Output data of system {term}`reliability prediction <Reliability prediction>`
```

The {term}`reliability prediction <Reliability prediction>` activities are performed at different levels of integration, starting from component level up to system level {term}`reliability prediction <Reliability prediction>`, as shown in {numref}`Figure 7.2`. The system level reliability analysis aims to demonstrate that the system level reliability {term}`requirements <Requirement>` are achieved. The system level reliability {term}`requirements <Requirement>` is cascaded to lower levels to define sub-system, equipment level {term}`requirements <Requirement>` and derive an architecture that is capable of meeting the {term}`requirements <Requirement>`. To support the cascading of reliability {term}`requirements <Requirement>` from system to lower levels a preliminary system level reliability model could be used. 

(syst_figure4_2)=
```{figure} ../../picture/figure4_2.png
---
width: 600px
name: Figure 7.2
---
{term}`reliability prediction <Reliability prediction>` at different levels.
```

As shown in {numref}`Figure 7.2`, to establish a system level {term}`reliability prediction <Reliability prediction>` the reliability data that are evaluated at the different levels are aggregated bottom-up from component level to system level. 
const InteractType = Object.freeze({
    Button: 1,
    Input: 2,
    Choice: 3
});


Starting point is the {term}`reliability prediction <Reliability prediction>` at the lowest level (elementary parts). At this stage the failure rates or failure probabilities respectively for a single component are determined under the given environmental and operating conditions for a specific mission profile (see Chapters Error: Reference source not found, Error: Reference source not found and Error: Reference source not found). 

````{admonition} Under construction
:class: todo
miss 3 ref above
````

The reliability data at elementary part level are then the input to estimate the reliability at equipment level. It is important to consider the different {term}`failure modes <Failure mode>` and functional failure effects at equipment level as they could contribute to different system failure effects. The {term}`Failure mode and Effect Analysis (FMEA) <Failure mode and Effect Analysis FMEA>` or {term}`Failure mode, effect and critically analysis FMECA <Failure mode, effect and critically analysis FMECA>` are methods to support the reliability analysis at equipment level or system level, as all possible {term}`failure modes <Failure mode>` and the associated probability of occurrence are considered. {term}`ECSS`-Q-ST-30-02C Error: Reference source not foundprovides guideline how to establish Failure mode Effect and (Criticality) Analysis ({term}`FMEA <Failure mode and Effect Analysis FMEA>`/{term}`FMECA`). The {term}`Failure mode and effects summary FMES <Failure mode and effects summary FMES>` is an extract from the respective single failure {term}`FMEA <Failure mode and Effect Analysis FMEA>` in such a way that lower level {term}`failure mode <Failure mode>`s leading to the same effects are summarized. Identical failure effects from the {term}`FMEA <Failure mode and Effect Analysis FMEA>` are categorized as one {term}`failure mode <Failure mode>` in the {term}`FMECA`. The system level analysis uses the FMEA/{term}`FMECA` as input data. It should be noted that FMEA/{term}`FMECA` and {term}`FMECA` are not in the scope of the reliability.space Handbook, but are required as input documents for the system level analysis. Finally, the system level {term}`reliability prediction <Reliability prediction>` model is created. It might be necessary to create more than one system reliability model if different system functions with their own reliability .term}`requirement <Requirement>`s have to be considered. 

````{admonition} Under construction
:class: todo
miss ref above
````

The process steps of the {term}`reliability prediction <Reliability prediction>` at system level for a given reliability .term}`requirement <Requirement>` could be structured as follows: 

1. Analyse system architecture to determine functions relevant for the reliability {term}`requirements <Requirement>`
2. Identification of system {term}`failure modes <Failure mode>`
3. Determine fault combinations leading to system failure
4. Select appropriate system level method to model the fault combinations leading to system failure (Table   12 -2 in Section Error: Reference source not found provides an overview of methods and Table   12 -3 provides guidance to select the method)
5. Determine input data (component reliability under given operating conditions and mission profile as described in previous sections of this handbook). 
6. Create a system model with the methods described in Section Error: Reference source not found
7. Run the calculation for the given mission profile
8. Interpret the results
   - If the reliability target is not achieved, the methods described in Section Error: Reference source not found can be useful to determine for which component the reliability should be improved to increase system reliability.
   - Check the system for potential of {term}`systematic failures <Systematic failure>` or {term}`common cause failures <Common cause failure>`, see Section Error: Reference source not found and Error: Reference source not found.

````{admonition} Under construction
:class: todo
miss 4 ref above
````

The system level {term}`reliability prediction <Reliability prediction>` should be updated if the maturity of input data evolves during the development process or if {term}`test data <Test data>` becomes available. 