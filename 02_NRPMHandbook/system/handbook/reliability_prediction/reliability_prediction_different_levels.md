<!--- Copyright (C) Matrisk GmbH 2022 -->

(syst_11_1)=
# Reliability prediction at different levels

Following the definition of a system in {ref}` Part 7 – Glossary <glossary>` of this handbook, a system is considered in the generic sense and can be defined at any level as a set of components or functions that are interrelated or interact to achieve a specified objective. In this respect, within the scope of system level {term}`reliability prediction <Reliability prediction>`, the term component is not limited to elementary parts but is considered more generally as the elements the system consists of, which could be parts, pieces of equipment or subsystems. The system level reliability prediction requires various input data; component level reliability data, the system architecture, system functions, the operational context, the Failure Mode and Effect Analysis ({term}`FMEA`), Failure Mode Effect and Criticality Analysis ({term}`FMECA`) and the Failure Mode and Effect Summary ({term}`FMES`), as shown in {numref}`Figure_7_1` below. 

```{figure} ../../picture/figure4_1.png
---
width: 600px
name: Figure_7_1
---
Input and Output data of system {term}`reliability prediction <Reliability prediction>`
```

The reliability prediction activities are performed at different levels of integration, starting from component level up to system level reliability prediction, as shown in {numref}`Figure_7_2`. The system level reliability analysis aims to demonstrate that the system level reliability requirements are achieved. The system level reliability requirement is cascaded to lower levels to define subsystem, equipment level requirements and derive an architecture that can meet the requirements. To support the cascading of reliability requirements from system to lower levels, a preliminary system level reliability model could be used.

```{figure} ../../picture/figure4_2.png
---
width: 600px
name: Figure_7_2
---
Reliability prediction at different levels
```

As shown in {numref}`Figure_7_2`, to establish a system level reliability prediction, the reliability data evaluated at the different levels are aggregated in a bottom-up manner from component level to system level. 

Starting point is the reliability prediction at the lowest level (elementary parts). At this stage, the failure rates or failure probabilities, respectively for a single component, are determined under the given environmental and operating conditions for a specific mission profile (see {ref}`Part 3 - EEE <sec_EEE_handbook>`, {ref}`Part 4 - MEC <sec_mech_handbook>` and {ref}`Part 5 - MIS <sec_misc_handbook>`). 

The reliability data at elementary part level are then the input, to estimate the reliability at equipment level. It is important to consider the different failure modes and functional failure effects at equipment level as they could contribute to different system failure effects. The FMEA or FMECA are methods to support the reliability analysis at equipment level or system level, as all possible failure modes and the associated probability of occurrence are considered. {cite:p}`sys-ECSS-Q-ST-30-02C` provides guideline how to establish FMEA/FMECA. The FMES is an extract from the respective single failure FMEA in such a way that lower-level failure modes leading to the same effects are summarized. Identical failure effects from the FMEA are categorized as one failure mode in the FMES. The system level analysis uses the FMEA/FMES as input data. 



Finally, the system level reliability prediction model is created. It might be necessary to create more than one system reliability model, if different system functions with their own reliability requirements should be considered. 

The process steps of the reliability prediction at system level for a given reliability requirement could be structured as follows: 

1. Analyse system architecture to determine functions relevant for the reliability requirements,
2. Identification of system failure modes,
3. Determine fault combinations leading to system failure,
4. Select appropriate system level method to model the fault combinations leading to system failure ({numref}`syst-table_11_2` provides an overview of methods and {numref}`syst-table_11_3` provides guidance to select the method)
5. Determine input data (component reliability under given operating conditions and mission profile as described in previous parts of this handbook),
6. Create a system model with the methods described in {numref}`syst_11_3`,
7. Run the calculation for the given mission profile,
8. Interpret the results:
   - If the reliability target is not achieved, the methods described in {numref}`syst_11_5` can be useful to determine for which component the reliability should be improved to increase system reliability,
   - Check the system for potential of {term}`systematic failures <Systematic failure>` or common cause failures, see {numref}`syst_11_7` and {numref}`syst_11_9`.

The system level {term}`reliability prediction <Reliability prediction>` should be updated if the maturity of input data evolves during the development process or if {term}`test data <Test data>` becomes available. 