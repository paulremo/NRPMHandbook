(eee_4_3)=
# Random failure


The reliability.space approach for EEE items provides models for reliability predictions for the EEE components which are used in space applications. The conventional component types refer to the components which are defined in the EPPL list {cite:t}`eee-EPPL007-37` and the PCB as expressed in {ref}`eee_annex_a`.

The reliability.space approach covering the random failures for EEE items is described in this part of the handbook. This methodology is based on the FIDES methodology, 2009 version.

Following the observations from the TEC QQD Study - Reliability Prediction Data Sources and Methodologies for Space Applications, it is adapted to the specificities of the space applications.

```{admonition} Note 1
:class: note

A 2021 version of FIDES have been issued including some of the updates proposed here. So far, the analysis presented in this handbook shall be applied to the 2009 version, but in order to prepare the future, when anticipations could be made for a future applicability of the 2021 version, information is provided.
```

```{admonition} Note 2
:class: note

It is recommended to read this paragraph carefully before modelling the reliability of the different component families (from {numref}`eee_4_3_4_1`). But within these individual paragraphs, the full process is clearly described again within each paragraph, with links to common features ({numref}`eee_4_3_1` and {numref}`eee_4_3_3`).
```

The FIDES approach consists in putting a special attention on the following aspects:

-   Technologies: FIDES considers the instrinsic aspect of the EEE components and their integration into equipment;

-   Process: it translates the idea that all practices from the development of the equipment to its use in operation are important for the overall reliability, it refers to the equipment and not to the EEE components;

-   Use: it is also important to take into account the constraints linked to the use of the equipment into the satellite.

The part stress method is based on a general equation and calculation of physical stresses depending on external constraints. Some additional considerations and factors are adjoined in order to consider:

-   the mission profile of the equipment for the different use phases

-   the quality of EEE components linked to their manufacturing

-   the quality and technical control over reliability in the product life cycle

The reliability.space approach is performed by considering each of these three aspects. However, some modifications and adaptations have been made in order to reflect the specificities of space applications. The main changes performed in the reliability.space approach are the following:

-   adaptation of a mission profile as defined in {numref}`eee_4_3_1` with some specificities of the space applications such as thermal management by conduction, cyclic variations of temperature, level of humidity and vibrations in space;

-   use of the reliability models built for each technology of EEE components based on the Physics of Failure with some adaptations described in {numref}`eee_4_3_4` each component model; the preferred use is the part stress method as described in the paragraph.

-   consideration of the process during the phases of development, integration into the equipment, integration into the satellite and operations by evaluating a process factor as defined in {numref}`eee_4_3_2_1`.

-   use of acceleration factors as described in paragraph {numref}`eee_4_3_1_12` to Vibration stress by considering the duration of each phase $t_{text{phase}}$ according to the total life duration of the satellite

-   recommendation of default values for some of the factors defining the induced factor $\Pi_{\text{induced}\_i}$ as described in {numref}`eee_4_3_1_17`, such as the influence of the usage environment $\Pi_{\text{application}\_i}$ and the influence of the policy for over-stresses $\Pi_{\text{ruggedising}}$;

-   improvement and adaptation of values for some of the factors defining the part manufacturing factor $\Pi_{\text{PM}}$ as described in {numref}`eee_4_3_3` such as the manufacturer quality assurance $\text{QA}_{\text{manufacturer}}$, the results and severity of tests factor $\text{RA}_{\text{component}}$ and the experience factor $\epsilon$.

**General model for all families**

In the following, the general model for conventional components is described, forming the basis for the models provided in {numref}`eee_4_3_4`:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_1
\lambda = \lambda_{\text{Physical}}{\cdot \Pi}_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{LF}}
```
````

for RF HF components:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_2
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessRFHF}} \cdot \Pi_{\text{LF}}
```
````

and for ASIC components:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_3
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessASIC}} \cdot \Pi_{\text{LF}}
```
With:

-   $\lambda$ as the estimated reliability prediction;

-   $\lambda_{\text{physical}}$ as the physical contribution of reliability prediction;

-   $\Pi_{\text{PM}}$ as the part manufacturing factor described in {numref}`eee_4_3_3`

-   $\Pi_{\text{Process}}$ as the process related factor described in {numref}`eee_4_3_2_3`

-   $\Pi_{\text{ProcessRFHF}}$ as the process related factor for RF HF components described in {numref}`eee_4_3_2_5`;

-   $\Pi_{\text{ProcessASIC}}$ as the process related factor for ASIC components described in {numref}`eee_4_3_2_6`;

-   $\Pi_{\text{LF}}$ as the lead-free process factor described hereafter.
````

**Lead-free soldering**

The lead-free soldering is currently in the way to replace the tin-lead soldering, which is still mainly used in space applications. This lead-free process factor $\Pi_{\text{LF}}$ is a transition factor considering the duration of effective production with lead-free process. Originally, this factor has been introduced in the beginning of the 2000s when the lead-free process was first introduced in application to the regulations requesting not to use any more lead in electronics. The original objective was to prevent any discrepancies with possible increase of failure occurrences of components due to this unknown type of soldering. Nowadays, experience has shown that no obvious change on failure occurrences has been noticed between electronic boards manufactured with the lead-free process and electronic boards manufactured with the tin-lead process. That is why this factor has almost always been considered as equal to 1 for all industrial applications, meaning it is considered as a mature process. The situation is similar for space applications where a lead-free process is used on electronic boards mounted on the payloads of telecommunication satellites. No change on failure occurrences has been noticed between both processes, so that is why the recommendation is to use a value of this factor equal to 1. Any differences between the manufacturing process with tin-lead soldering and lead-free soldering is handled by the process related factor $\Pi_{\text{Process}}$.

Simplified formula for all families:

With $\Pi_{\text{LF}} = 1$, the general part stress reliability models may be simplified by dropping this factor in the equations:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_4
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}}
```
````

for RF HF components:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_5
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessRFHF}}
```
````

and for ASIC components:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_6
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessASIC}}
```
````

