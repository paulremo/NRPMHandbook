<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_8_3)=
# Random failure

The approach chosen for this handbook regarding {term}`EEE` items provides reliability predictions models for the EEE components, which are used in space applications. The conventional component types refer to the components which are defined in the {term}`EPPL` list {cite:p}`eee-EPPL007-37` as presented in {ref}`eee_annex_a`.

The approach covering the {term}`random failures <Random failure>` for {term}`EEE` items is described in this part of the handbook. This methodology is based on the 2022 version of the FIDES guide. 

Following the observations from the *TEC QQD Study - Reliability Prediction Data Sources and Methodologies for space applications*, it is adapted to the specificities of the space applications.

```{admonition} Note
:class: note
The Printed Circuit Boards (PCBs) are not part of the EPPL list but are addressed in the present handbook.
```

```{admonition} Note
:class: note

It is recommended to read this paragraph carefully before modelling the reliability of the different components’ families (from {numref}`eee_8_3_4_1`). But within these individual paragraphs, the entire process is clearly described again within each paragraph, with links to common features ({numref}`eee_8_3_2` Mission profile, {numref}`eee_8_3_3` Process factor and {numref}`eee_8_3_3` Quality factors).
```

The FIDES approach consists in putting a special attention on the following aspects:

-   **Technologies:** FIDES considers the intrinsic aspect of the EEE components and their integration into equipment,

-   **Process:** It translates the idea that all practices from the development of the equipment to its use in operation are important for the overall reliability, it refers to the equipment and not to the EEE components,

-   **Use:** It is also important to take into account the constraints linked to the use of the equipment into the spacecrafts.

The part stress method is based on a general equation and calculation of physical stresses depending on external constraints. Some additional considerations and factors are adjoined in order to consider:

-   The mission profile of the equipment for the different use phases,

-   The quality of EEE components linked to their manufacturing,

-   The quality and technical control over reliability in the product life cycle.

This handbook’s approach is performed by considering each of these three aspects. However, some modifications and adaptations have been made in order to reflect the specificities of space applications. 

The main changes performed in the proposed approach are the following:

-   Adaptation of a mission profile as defined in {numref}`eee_8_3_2` with some specificities of the space applications such as thermal management by conduction, cyclic variations of temperature, level of humidity and vibrations in space,

-   Use of the reliability models built for each technology of EEE components based on the {term}`Physics of Failure <Physics of failure>` (PoF) with some adaptations described in {numref}`eee_8_3_5` each component model, the preferred use is the part stress method as described in the paragraph,

-   Consideration of the process during the phases of development, integration into the equipment, integration into the satellite and operations by evaluating a process factor as defined in {numref}`eee_8_3_3_1`,

-   Use of acceleration factors as described in {numref}`eee_8_3_1_16` by considering the duration of each phase $t_{text{phase}}$ according to the total life duration of the satellite,

-   Recommendation of default values for some of the factors defining the induced factor $\Pi_{\text{induced}\_i}$ as described in {numref}`eee_8_3_2_17`, such as the influence of the usage environment $\Pi_{\text{application}\_i}$ and the influence of the policy for over-stresses $\Pi_{\text{ruggedising}}$,

-   Improvement and adaptation of values for some of the factors defining the part manufacturing factor $\Pi_{\text{PM}}$ as described in {numref}`eee_8_3_4` such as the manufacturer quality assurance $\text{QA}_{\text{manufacturer}}$, the results and severity of tests factor $\text{RA}_{\text{component}}$ and the experience factor $\epsilon$.

The general model for all families is introduced in {numref}`eee_annex_a_2`, Equations A.2-1 to A.2-4. 

<!--
**General model for all families**

In the following, the general model for conventional components is described, forming the basis for the models provided in {numref}`eee_8_3_4`:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_1
\lambda = \lambda_{\text{Physical}}{\cdot \Pi}_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{LF}}
```
````

for RF/{term}`HF` components:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_2
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessRFHF}} \cdot \Pi_{\text{LF}}
```
````

and for {term}`ASIC` components:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_3
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessASIC}} \cdot \Pi_{\text{LF}}
```
````

and for Hybrids & MCM components:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_3_1
\lambda_{\text{HM}} = \sum_{\mu\text{-components}}(\lambda_{\mu\text{-components}}\cdot \Pi_{PM_{\mu\text{-components}}})\cdot\Pi_{\text{Process HM}} \cdot \Pi_{\text{Process}} + (\lambda_{\text{wiring}} + \lambda_{\text{case + substrate}} + \lambda_{\text{external connections}}) \cdot \Pi_{\text{Process HM}}\cdot\Pi_{\text{Process}}
```
With:

-   $\lambda$ as the estimated reliability prediction;

-   $\lambda_{\text{physical}}$ as the physical contribution of reliability prediction;

-   $\Pi_{\text{PM}}$ as the part manufacturing factor described in {numref}`eee_8_3_3`

-   $\Pi_{\text{Process}}$ as the process related factor described in {numref}`eee_8_3_2_3`

-   $\Pi_{\text{ProcessRFHF}}$ as the process related factor for {term}`HF`/RF components described in {numref}`eee_8_3_2_5`;

-   $\Pi_{\text{ProcessASIC}}$ as the process related factor for {term}`ASIC` components described in {numref}`eee_8_3_2_6`;

-   $\Pi_{\text{LF}}$ as the lead-free process factor described hereafter.
````