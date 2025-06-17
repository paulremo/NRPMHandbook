<!--- Copyright (C) Matrisk GmbH 2022 -->

(syst_4_5)=
# Important measures

In case the reliability targets are not met, the design process reconsiders the system architecture in order to improve the reliability. Quantification of system reliability gives only the overall system performance measure, but the reliability assessment can also provide a ranking of components with respect to their significance for system reliability. Several measures of significance have been proposed for the case where the support model is a fault tree or {term}`RBD`, grouped under the generic designation of "importance measures". The aim of importance measures is to support system design in selecting the most efficient solution through quantitative analysis related to the following questions {cite:p}`sys-vahl1998interaktive`:

-   Which component influences the overall reliability the most?

-   How much can the system reliability be improved if the reliability of a certain component improves?

-   Which component is most likely contributing to a system failure?

-   Which component is most likely causing the system to fail?

The methods to determine importance measures are based on the Boolean model for system {term}`reliability prediction <Reliability prediction>` considering independent {term}`random failure <Random failure>`, e.g. fault tree analysis or reliability block diagram. Hence the following conditions apply:

-   The system and its components have two states, functional or failed

-   A system shall not change its status from failed to functional if an additional component fails

-   A system shall not change its status from functional to failed if a component changes its status from failed to functional

(syst_4_5_1)=
## Birnbaum importance or marginal importance

The so-called Birnbaum or marginal importance indicates how sensitive the system reliability is with regard to changes of the reliability of a certain component. The marginal importance of component $i$ is defined as the [partial derivative] of the system reliability function $R_{S}$ with respect to the reliability of component $i$ {cite:p}`sys-Birnbaum1968ONTI`.

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_48
I_{m}\left( i \right) = \frac{\partial R_{S}}{\partial R_{i}}
```
````

Instead of the partial derivation, the Birnbaum importance can be obtained, as shown in Eq. {eq}`Equation_7_49`, by calculating the difference in the system reliability if the reliability of component $i$ is set to 1 and 0,

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_49
I_{m}\left( i \right) = R_{S}
```
````

Where $r$ denotes the ordered list of component reliabilities for *i*= 1 to *n*. The component reliability $R_{i}$ is varied and set to 1 and zero, whereas all other component reliabilities in vector $r$ remain unchanged.

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_50
r : = \left( R_{i}\left( t \right),\ldots R_{n}\left( t \right) \right)
```
````

In the following, to demonstrate the calculation of the Birnbaum importance a fictive example of a power supply system as shown in {numref}`Figure_7_29` is considered. It consists of three solar arrays of different size to provide electrical power. Two larger solar arrays are charging the battery. A power converter is implemented to provide the required voltage levels to the satellite systems.

```{figure} ../../picture/figure4_29.png
---
width: 600px
name: Figure_7_29
---
Reliability Block diagram Power Supply System (fictive example)
```

The system structure function of this example is given by

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_51
\Phi\left( x \right) = \left( x \middle| 1 \land x_{5} \right) \vee \left( x \middle| 1 \land x_{2} \land x_{3} \right) \vee \left( x \middle| 1{\land x}_{2}{\land x}_{4} \right)
```
````

The disjunctive terms in Eq. {eq}`Equation_7_51` are derived from minimal success paths and are not mutually exclusive terms. To simplify the calculation of the expected value Eq. {eq}`Equation_7_51` is transformed such that it consists of mutually exclusive terms only.


````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_52
\Phi\left( x \right) = \left( x \middle| 1 \land {\overline{x}}_{2} \land x_{5} \right) \vee \left( x \middle| 1 \land x_{2} \land x_{3} \land {\overline{x}}_{4} \right) \vee \left( x \middle| 1{\land x}_{2} \land {\overline{x}}_{3}{\land x}_{4} \right)
```
````

The system reliability function is then given by:


````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_53
R_{S} = E\left( \Phi\left( x \right) \right) = P
```
````

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_54
R_{S} = R_{1}\left( 1 - R_{2} \right)R_{5} + R_{1}R_{2}R_{3}\left( 1 - R_{4} \right) + R_{1}R_{2}\left( 1 - R \middle| 3 \right)R_{4}
```
````

Using Eq. {eq}`Equation_7_49`, the following expression is obtained for Birnbaum importance of component 1.

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_55
I_{m1} = XXX
```
````

```{list-table} Birnbaum or marginal importance
:name: syst-table4-9
:header-rows: 1
:widths: 10 30 30 30

*   - Component ID
    - Component Name
    - Failure rate
    - Birnbaum (marginal) importance
*   - 1
    - Power Converter
    - 3.2E-07 1/h
    - 9.971781e-001
*   - 2
    - Battery
    - 7.2E-07 1/h
    - 4.146030e-002
*   - 3
    - Solar Panel #1
    - 8.4E-07 1/h
    - 2.775458e-003
*   - 4
    - Solar Panel #2
    - 8.4E-07 1/h
    - 2.775458e-003
*   - 5
    - Solar Panel #3
    - 5.0E-07 1/h
    - 6.402900e-002
```

(syst_4_5_2)=
## Reduced structural importance

The calculation of importance measures requires a defined system architecture and reliability data for each component. In case of exponential distributed life time, this is represented through the failure rate of the component. Especially in early phases of the development and for new technologies with limited in-service experience, the failure rates are not known. Therefore, to be able to assess the relative importance of components without the failure rate of the component, structural importance measures are defined. Structural importance measures are depending on the system structure only. Thus, if the system architecture is time-invariant, the structural importance is time-invariant as well.

Typical structural importance measures are using a reliability of 0.5 for all components or calculating a mean value of the importance over the interval $R_{i} \in \left\lbrack 0;1 \right\rbrack.$

This assumption is not realistic for space systems. The relevant range of component reliabilities for highly reliable space systems is much smaller. Even if the failure rates for the components are not known, a conservative assumption about the order of magnitude of the worst case failure rates allows defining a relevant interval. To account for this, the reduced structural importance has been defined as mean value of the Birnbaum importance for component reliability in the range between $R_{\min}$ and 1. It is assumed that all components of the system have reliability equal to or greater than $R_{\min}$ at the end of the considered time interval, although the exact failure rates are not known, but only the rough order of magnitude {cite:p}`sys-vahl1998interaktive`. That means, for each component the reliability is set to $R_{\min}$ and to 1 for the lower and upper boundary.

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_56
I_{\text{RS}}\left( i,r \right) = \frac{1}{{1 - R}_{\text{mi}n}}\int_{R_{\min}}^{1}{\frac{\partial R_{s}\left( r \right)}{\partial R_{i}}dR_{i}} = \frac{1}{{1 - R}_{\text{mi}n}}{\int_{R_{\min}}^{1}{I_{m}\left( i,r \right)dR_{i}}}
```
````

The reduced structural importance allows assessing the influence of individual components on the system reliability already in early phases of the development, when the system architecture is available but no component failure rates. {numref}`syst-table4-10` shows a comparison of Birnbaum and reduced structural importance for the system architecture shown in {numref}`Figure_7_29`. For this example, it is assumed that all failure rates of the system are below 1.0E-06 1/h, and with 10 years mission duration a minimum component reliability $R_{\min}$ of 0.916 is obtained.

It can be seen that the relative ranking of the components will be the same for the Birnbaum importance and the reduced structural importance, because the system architecture is the determining factor for the importance of the individual components rather than the failure rates. The absolute values of importance measures are different and with the reduced structural importance the potential system reliability improvement cannot be quantified, but it provides a qualitative assessment where reliability improvement has the biggest impact on system reliability.

```{list-table} Example for marginal and reduced structural Importance
:name: syst-table4-10
:header-rows: 1
:widths: 20 20 20 20 20

*   - Component ID
    - Component Name
    - Failure rate
    - Birnbaum (marginal) importance
    - Reduced structural importance
*   - 1
    - Power Converter
    - 3.2E-07 1/h
    - 9.971781e-001
    - 9.975175E-001
*   - 2
    - Battery
    - 7.2E-07 1/h
    - 4.146030e-002
    - 3.945389E-002
*   - 3
    - Solar Panel #1
    - 8.4E-07 1/h
    - 2.775458e-003
    - 2.059769E-003
*   - 4
    - Solar Panel #2
    - 8.4E-07 1/h
    - 2.775458e-003
    - 2.059769E-003
*   - 5
    - Solar Panel #3
    - 5.0E-07 1/h
    - 6.402900e-002
    - 4.165126E-002
```
(syst_4_5_3)=
## Reliability allocation based on importance measures

The importance measure quantifies the impact of each component on the system reliability. This information can be used to support the allocation of a system reliability target to subsystem or component level, as a general rule {cite:p}`sys-Mettas2000ReliabilityAA`:

* Components with high reliability importance will be assigned a high reliability target, as these components have the strongest influence on the system reliability.

* Components with the same reliability importance should be assigned the same reliability target as they have the same impact on system reliability.

Furthermore, the Birnbaum importance allows to quantify how much the system reliability changes if the reliability of a component changes using the following equation.

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_57
\text{dR}_{S}\left( r \right) = \sum_{i = 1}^{n}{\frac{\partial R_{S}}{\partial R_{i}}dR_{i}}
```
````

Thus, the change in system reliability is the weighted sum of changes in component reliability, where the weighting factors are given by the Birnbaum Importance of the components. The change of the system reliability depending on the change of one component reliability can be determined using the Birnbaum importance as shown in the following equation {cite:p}`sys-Si2019SystemRA`:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_58
{\mathrm{\Delta}R}_{S} = \sum_{i = 1}^{n}{I_{m}\left( i,r \right)\mathrm{\Delta}R_{i}}
```
````

Where:

* $\mathrm{\Delta}R_{i}$ denotes the change in reliability of component $i$ and

* $\mathrm{\Delta}R_{S}$ denotes the change of the system reliability

In the following, the system architecture shown in {numref}`Figure_7_29` is considered as an example to demonstrate the use of importance measures for reliability allocation. Let's assume the following reliability target for the system is given:

*The reliability of the system shall be at least 0.95 after 10 years mission duration (87600 hours).*

From the example in {numref}`syst-table4-10`, it can be seen that the power conversion should have the highest reliability target as it has the biggest influences on the system reliability. A lower reliability value could be assigned to solar panel \#1 and \#2 since they have a significantly lower impact on the system reliability. The allocation of reliability targets to components consists of the following steps:

1.  Assign initial values to component reliability r.
    In the example the initial failure rate is set to 1.0E-06 1/h for all components, with a mission duration of ten years this results in an initial reliability of 0,916 for all components.
2. Calculation of system reliability and Birnbaum importance.
   With the initial reliability a system reliability of $R_{S}\left( t \right) = 0,9092$ is obtained. Based on Eq. {eq}`Equation_7_48` the Birnbaum importance is calculated for all components. The results are shown in {numref}`syst-table4-11`.
3. Comparison of the calculated reliability with the system reliability {term}`requirement <Requirement>`. The difference to the required system reliability is given by:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_59
\mathrm{\Delta}R_{S} = {\hat{R}}_{S}\left( t \right) - R_{S}\left( t \right)
```
````

1.  Calculation of component reliability targets using Birnbaum importance measures, as described in the following.

With Eq. {eq}`Equation_7_58` the change of the system reliability depending on the change of component reliability can be calculated using the Birnbaum importance. This equation can be transformed such that the change of component reliability to achieve a defined change in system reliability can be calculated.

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_60
\mathrm{\Delta}R_{i} = \frac{{\mathrm{\Delta}R}_{S}}{I_{m}\left( i,r \right)}
```
````

The reliability target is given by the minimum of the initial reliability plus $\mathrm{\Delta}R_{i}$ and the maximum achievable reliability $R_{i,\max}$.

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_61
{\hat{R}}_{i} = \min\left( R_{i} + \mathrm{\Delta}R_{i};R_{i,\max} \right)
```
````

In order to allocate the reliability targets efficiently, the components are grouped such that the Birnbaum importance of the components are in the same order of magnitude, as shown in {numref}`syst-table4-11`. As starting point, the group with the highest Birnbaum importance is selected as candidates for reliability improvement as an improvement of these components has the biggest influence on system reliability. In the example, group I consists of one component only. The required reliability target improvement for component 1 is calculated based on the following equation.

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_62
\mathrm{\Delta}R_{1} = \frac{{\mathrm{\Delta}R}_{S}}{I_{m}\left( 1,r \right)} = \frac{0,04081}{0,992} = 0,0411
```
````

With a maximum achievable reliability of $R_{1,\max} = 0.955$ the reliability target of component 1 is given by:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_63
{\hat{R}}_{1} = \min\left( R_{1} + \mathrm{\Delta}R_{1};R_{1,\max} \right) = \min\left( 0,91613 + 0,0411;0,955 \right)
```
````

As the required improvement would exceed the maximum achievable reliability, the reliability of the other components has to be increased in order to achieve the system reliability target. The remaining gap to the system target is recalculated and with the new target for component 1 it could be reduced to 2,23E-03.

The components in group II are now considered for allocation of new reliability targets. It is assumed that the system reliability increase is equally distributed over the two components in this group. The required reliability improvements for component 2 and 5 are given as follows:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_64
\mathrm{\Delta}R_{2} = \frac{0,5{\mathrm{\Delta}R}_{S}}{I_{m}\left( 2,r \right)} = \frac{1,117E - 03}{4,14603E - 02} = 1,46E - 02
```
````

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_65
\mathrm{\Delta}R_{5} = \frac{0,5{\mathrm{\Delta}R}_{S}}{I_{m}\left( 5,r \right)} = \frac{1,117E - 03}{6,4029E - 02} = 1,35E - 02
```
````

The reliability targets for component 2 and 5 are obtained from the following equations:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_66
{\hat{R}}_{2} = \min\left( R_{2} + \mathrm{\Delta}R_{2};R_{2,\max} \right) = \min\left( 0,91613 + 1,46E - 02;0,945 \right) = 0,93077
```
````

````{admonition} Equation
:class: equation
```{math}
:label: Equation_7_67
{\hat{R}}_{5} = \min\left( R_{5} + \mathrm{\Delta}R_{5};R_{5,\max} \right)
```
```{math}
= \min\left( 0,91613 + 1,35E - 02;0,945 \right) = 0,92963
```
````

The reliability target for components in group III are not adapted as the system reliability target is already achieved. Due to their low Birnbaum importance an increase in component reliability would anyway not be very efficient as it will not have a significant impact on system reliability. The results are summarized in {numref}`syst-table4-11`.

```{list-table} Example reliability allocation using Birnbaum importance measures
:name: syst-table4-11
:header-rows: 1
:widths: 10 10 20 12 12 12 12 12

*   - Group
    - ID
    - Component Name
    - Initial reliability $R_{i}$
    - Birnbaum importance
    - $\Delta R_{i}$
    - Reliability target $\hat{R}_{i}$
    - Maximum reliability $R_{i,max}$
*   - I
    - 1
    - Power Converter
    - 0,91613
    - 9,97178E-01
    - 4,11E-02
    - 0,95500
    - 0,95500
*   - II
    - 2
    - Battery
    - 0,91613
    - 4,14603E-02
    - 1,46E-02
    - 0,93077
    - 0,9450
*   - II
    - 5
    - Solar Panel #3
    - 0,91613
    - 6,40290E-02
    - 1,35E-02
    - 0,92963
    - 0,9400
*   - III
    - 3
    - Solar Panel #1
    - 0,91613
    - 2,77546E-03
    - 0
    - 0,91613
    - 0,9400
*   - III
    - 4
    - Solar Panel #2
    - 0,91613
    - 2,77546E-03
    - 0
    - 0,91613
    - 0,9400
```
