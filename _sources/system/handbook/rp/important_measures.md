# Important measures

In case the reliability targets are not met, the design process reconsiders the system architecture in order to improve the reliability. Quantification of system reliability gives only the overall system performance measure, but the reliability assessment can also provide a ranking of components with respect to their significance for system reliability. Several measures of significance have been proposed for the case where the support model is a fault tree or RBD, grouped under the generic designation of "importance measures". The aim of importance measures is to support system design in selecting the most efficient solution through quantitative analysis related to the following questions Error: Reference source not found:

```{admonition} Todo
:class: todo
miss ref above
```

-   Which component influences the overall reliability the most?

-   How much can the system reliability be improved if the reliability of a certain component improves?

-   Which component is most likely contributing to a system failure?

-   Which component is most likely causing the system to fail?

The methods to determine importance measures are based on the Boolean model for system reliability prediction considering independent random failure, e.g. fault tree analysis or reliability block diagram. Hence the following conditions apply:

-   The system and its components have two states, functional or failed

-   A system shall not change its status from failed to functional if an additional component fails

-   A system shall not change its status from functional to failed if a component changes its status from failed to functional

(syst_4_5_1)=
## Birnbaum importance or marginal importance

The so-called Birnbaum or marginal importance indicates how sensitive the system reliability is with regard to changes of the reliability of a certain component. The marginal importance of component $i$ is defined as the [partial derivative] of the system reliability function $R_{S}$ with respect to the reliability of component $i$ Error: Reference source not found.

```{admonition} Todo
:class: todo
miss ref above
```

(syst_equation4_48)=
````{admonition} Equation 4.48
:class: equation
``
``  
```{math}
I_{m}\left( i \right) = \frac{\partial R_{S}}{\partial R_{i}}
```
````

Instead of the partial derivation, the Birnbaum importance can be obtained, as shown in [Equation 4.49](syst_equation4_49), by calculating the difference in the system reliability if the reliability of component $i$ is set to 1 and 0,

(syst_equation4_49)=
````{admonition} Equation 4.49
:class: equation
``
``  
```{math}
I_{m}\left( i \right) = R_{S}
```
````

Where $r$ denotes the ordered list of component reliabilities for *i*= 1 to *n*. The component reliability $R_{i}$ is varied and set to 1 and zero, whereas all other component reliabilities in vector $r$ remain unchanged.

(syst_equation4_50)=
````{admonition} Equation 4.50
:class: equation
``
``  
```{math}
r : = \left( R_{i}\left( t \right),\ldots R_{n}\left( t \right) \right)
```
````

In the following, to demonstrate the calculation of the Birnbaum importance a fictive example of a power supply system as shown in [Figure 4.29](syst_figure4_29) is considered. It consists of three solar arrays of different size to provide electrical power. Two larger solar arrays are charging the battery. A power converter is implemented to provide the required voltage levels to the satellite systems.

(syst_figure4_29)=
```{figure} ../../picture/figure4_29.png
---
width: 600px
name: figure4_29
---
Reliability Block diagram Power Supply System (fictive example)
```

The system structure function of this example is given by

(syst_equation4_51)=
````{admonition} Equation 4.51
:class: equation
``
``  
```{math}
\Phi\left( x \right) = \left( x \middle| 1 \land x_{5} \right) \vee \left( x \middle| 1 \land x_{2} \land x_{3} \right) \vee \left( x \middle| 1{\land x}_{2}{\land x}_{4} \right)
```
````

The disjunctive terms in [Equation 4.51](syst_equation4_51) are derived from minimal success paths and are not mutually exclusive terms. To simplify the calculation of the expected value [Equation 4.51](syst_equation4_51) is transformed such that it consists of mutually exclusive terms only.


(syst_equation4_52)=
````{admonition} Equation 4.52
:class: equation
``
``  
```{math}
\Phi\left( x \right) = \left( x \middle| 1 \land {\overline{x}}_{2} \land x_{5} \right) \vee \left( x \middle| 1 \land x_{2} \land x_{3} \land {\overline{x}}_{4} \right) \vee \left( x \middle| 1{\land x}_{2} \land {\overline{x}}_{3}{\land x}_{4} \right)
```
````

The system reliability function is then given by:


(syst_equation4_53)=
````{admonition} Equation 4.53
:class: equation
``
``  
```{math}
R_{S} = E\left( \Phi\left( x \right) \right) = P
```
````

(syst_equation4_54)=
````{admonition} Equation 4.54
:class: equation
``
``  
```{math}
R_{S} = R_{1}\left( 1 - R_{2} \right)R_{5} + R_{1}R_{2}R_{3}\left( 1 - R_{4} \right) + R_{1}R_{2}\left( 1 - R \middle| 3 \right)R_{4}
```
````

Using [Equation 4.49](syst_equation4_49), the following expression is obtained for Birnbaum importance of component 1.

(syst_equation4_55)=
````{admonition} Equation 4.55
:class: equation
``
``  
```{math}
I_{m1} = XXX
```
````

(syst_table4_9)=
**Table 4.9** : Birnbaum or marginal importance

<iframe src="../../../_static/interactivity/html/syst_table4_9.html" frameborder="0" style="width:100%;" id="ext_interactive" onload="resize_iframe()"></iframe>

(syst_4_5_2)=
## Reduced structural importance

The calculation of importance measures requires a defined system architecture and reliability data for each component. In case of exponential distributed life time, this is represented through the failure rate of the component. Especially in early phases of the development and for new technologies with limited in-service experience, the failure rates are not known. Therefore, to be able to assess the relative importance of components without the failure rate of the component, structural importance measures are defined. Structural importance measures are depending on the system structure only. Thus, if the system architecture is time-invariant, the structural importance is time-invariant as well.

Typical structural importance measures are using a reliability of 0.5 for all components or calculating a mean value of the importance over the interval $R_{i} \in \left\lbrack 0;1 \right\rbrack.$

This assumption is not realistic for space systems. The relevant range of component reliabilities for highly reliable space systems is much smaller. Even if the failure rates for the components are not known, a conservative assumption about the order of magnitude of the worst case failure rates allows defining a relevant interval. To account for this, the reduced structural importance has been defined as mean value of the Birnbaum importance for component reliability in the range between $R_{\min}$ and 1. It is assumed that all components of the system have reliability equal to or greater than $R_{\min}$ at the end of the considered time interval, although the exact failure rates are not known, but only the rough order of magnitude Error: Reference source not found. That means, for each component the reliability is set to $R_{\min}$ and to 1 for the lower and upper boundary.

(syst_equation4_56)=
````{admonition} Equation 4.56
:class: equation
``
``  
```{math}
I_{\text{RS}}\left( i,r \right) = \frac{1}{{1 - R}_{\text{mi}n}}\int_{R_{\min}}^{1}{\frac{\partial R_{s}\left( r \right)}{\partial R_{i}}dR_{i}} = \frac{1}{{1 - R}_{\text{mi}n}}{\int_{R_{\min}}^{1}{I_{m}\left( i,r \right)dR_{i}}}_{}
```
````

```{admonition} Todo
:class: todo
miss factor at final Ri
```

The reduced structural importance allows assessing the influence of individual components on the system reliability already in early phases of the development, when the system architecture is available but no component failure rates. [Table 4.10](syst_table4_10) shows a comparison of Birnbaum and reduced structural importance for the system architecture shown in [Figure 4.29](syst_figure4_29). For this example, it is assumed that all failure rates of the system are below 1.0E-06 1/h, and with 10 years mission duration a minimum component reliability $R_{\min}$ of 0.916 is obtained.

It can be seen that the relative ranking of the components will be the same for the Birnbaum importance and the reduced structural importance, because the system architecture is the determining factor for the importance of the individual components rather than the failure rates. The absolute values of importance measures are different and with the reduced structural importance the potential system reliability improvement cannot be quantified, but it provides a qualitative assessment where reliability improvement has the biggest impact on system reliability.

(syst_table4_10)=
**Table 4.10** : Example for marginal and reduced structural Importance.

<iframe src="../../../_static/interactivity/html/syst_table4_10.html" frameborder="0" style="width:100%;" id="ext_interactive" onload="resize_iframe()"></iframe>

## Reliability allocation based on importance measures

The importance measure quantifies the impact of each component on the system reliability. This information can be used to support the allocation of a system reliability target to subsystem or component level, as a general rule Error: Reference source not found:

```{admonition} Todo
:class: todo
miss ref above
```

Components with high reliability importance will be assigned a high reliability target, as these components have the strongest influence on the system reliability.

Components with the same reliability importance should be assigned the same reliability target as they have the same impact on system reliability.

Furthermore, the Birnbaum importance allows to quantify how much the system reliability changes if the reliability of a component changes using the following equation.

(syst_equation4_57)=
````{admonition} Equation 4.57
:class: equation
``
``  
```{math}
\text{dR}_{S}\left( r \right) = \sum_{i = 1}^{n}{\frac{\partial R_{S}}{\partial R_{i}}dR_{i}}
```
````

Thus, the change in system reliability is the weighted sum of changes in component reliability, where the weighting factors are given by the Birnbaum Importance of the components. The change of the system reliability depending on the change of one component reliability can be determined using the Birnbaum importance as shown in the following equation Error: Reference source not found:

```{admonition} Todo
:class: todo
miss ref above
```

(syst_equation4_58)=
````{admonition} Equation 4.58
:class: equation
``
``  
```{math}
{\mathrm{\Delta}R}_{S} = \sum_{i = 1}^{n}{I_{m}\left( i,r \right)\mathrm{\Delta}R_{i}}
```
````

Where:

$\mathrm{\Delta}R_{i}$ denotes the change in reliability of component $i$ and

$\mathrm{\Delta}R_{S}$ denotes the change of the system reliability

In the following, the system architecture shown in [Figure 4.29](syst_figure4_29) is considered as an example to demonstrate the use of importance measures for reliability allocation. Let's assume the following reliability target for the system is given:

*The reliability of the system shall be at least 0.95 after 10 years mission duration (87600 hours). *

From the example in [Table 4.10](syst_table4_10), it can be seen that the power conversion should have the highest reliability target as it has the biggest influences on the system reliability. A lower reliability value could be assigned to solar panel \#1 and \#2 since they have a significantly lower impact on the system reliability. The allocation of reliability targets to components consists of the following steps:

1.  Assign initial values to component reliability r.

In the example the initial failure rate is set to 1.0E-06 1/h for all components, with a mission duration of ten years this results in an initial reliability of 0,916 for all components.

2.  Calculation of system reliability and Birnbaum importance.

With the initial reliability a system reliability of $R_{S}\left( t \right) = 0,9092$ is obtained. Based on [Equation 4.48](syst_equation4_48) the Birnbaum importance is calculated for all components. The results are shown in [Table 4.11](syst_table4_11).

3.  Comparison of the calculated reliability with the system reliability requirement.\
    The difference to the required system reliability is given by:

(syst_equation4_59)=
````{admonition} Equation 4.59
:class: equation
``
``  
```{math}
\mathrm{\Delta}R_{S} = {\hat{R}}_{S}\left( t \right) - R_{S}\left( t \right)
```
````

4.  Calculation of component reliability targets using Birnbaum importance measures, as described in the following.

With [Equation 4.58](syst_equation4_58) the change of the system reliability depending on the change of component reliability can be calculated using the Birnbaum importance. This equation can be transformed such that the change of component reliability to achieve a defined change in system reliability can be calculated.

(syst_equation4_60)=
````{admonition} Equation 4.60
:class: equation
``
``  
```{math}
\mathrm{\Delta}R_{i} = \frac{{\mathrm{\Delta}R}_{S}}{I_{m}\left( i,r \right)}
```
````

The reliability target is given by the minimum of the initial reliability plus $\mathrm{\Delta}R_{i}$ and the maximum achievable reliability $R_{i,\max}$.

(syst_equation4_61)=
````{admonition} Equation 4.61
:class: equation
``
``  
```{math}
{\hat{R}}_{i} = \min\left( R_{i} + \mathrm{\Delta}R_{i};R_{i,\max} \right)
```
````

In order to allocate the reliability targets efficiently, the components are grouped such that the Birnbaum importance of the components are in the same order of magnitude, as shown in [Table 4.11](syst_table4_11). As starting point, the group with the highest Birnbaum importance is selected as candidates for reliability improvement as an improvement of these components has the biggest influence on system reliability. In the example, group I consists of one component only. The required reliability target improvement for component 1 is calculated based on the following equation.

(syst_equation4_62)=
````{admonition} Equation 4.62
:class: equation
``
``  
```{math}
\mathrm{\Delta}R_{1} = \frac{{\mathrm{\Delta}R}_{S}}{I_{m}\left( 1,r \right)} = \frac{0,04081}{0,992} = 0,0411
```
````

With a maximum achievable reliability of $R_{1,\max} = 0.955$ the reliability target of component 1 is given by:

(syst_equation4_63)=
````{admonition} Equation 4.63
:class: equation
``
``  
```{math}
{\hat{R}}_{1} = \min\left( R_{1} + \mathrm{\Delta}R_{1};R_{1,\max} \right) = \min\left( 0,91613 + 0,0411;0,955 \right)
```
````

As the required improvement would exceed the maximum achievable reliability, the reliability of the other components has to be increased in order to achieve the system reliability target. The remaining gap to the system target is recalculated and with the new target for component 1 it could be reduced to 2,23E-03.

The components in group II are now considered for allocation of new reliability targets. It is assumed that the system reliability increase is equally distributed over the two components in this group. The required reliability improvements for component 2 and 5 are given as follows:

(syst_equation4_64)=
````{admonition} Equation 4.64
:class: equation
``
``  
```{math}
\mathrm{\Delta}R_{2} = \frac{0,5{\mathrm{\Delta}R}_{S}}{I_{m}\left( 2,r \right)} = \frac{1,117E - 03}{4,14603E - 02} = 1,46E - 02
```
````

(syst_equation4_65)=
````{admonition} Equation 4.65
:class: equation
``
``  
```{math}
\mathrm{\Delta}R_{5} = \frac{0,5{\mathrm{\Delta}R}_{S}}{I_{m}\left( 5,r \right)} = \frac{1,117E - 03}{6,4029E - 02} = 1,35E - 02
```
````

The reliability targets for component 2 and 5 are obtained from the following equations:

(syst_equation4_66)=
````{admonition} Equation 4.66
:class: equation
``
``  
```{math}
{\hat{R}}_{2} = \min\left( R_{2} + \mathrm{\Delta}R_{2};R_{2,\max} \right)
```
```{math}
\mathrm{\text{\ \ \ \ \ }} = \min\left( 0,91613 + 1,46E - 02;0,945 \right) = 0,93077
```
````

(syst_equation4_67)=
````{admonition} Equation 4.67
:class: equation
``
``  
```{math}
{\hat{R}}_{5} = \min\left( R_{5} + \mathrm{\Delta}R_{5};R_{5,\max} \right)
```
```{math}
\mathrm{\text{\ \ \ \ \ }} = \min\left( 0,91613 + 1,35E - 02;0,945 \right) = 0,92963
```
````

The reliability target for components in group III are not adapted as the system reliability target is already achieved. Due to their low Birnbaum importance an increase in component reliability would anyway not be very efficient as it will not have a significant impact on system reliability. The results are summarized in [Table 4.11](syst_table4_11).

(syst_table4_11)=
**Table 4.11** : Example reliability allocation using Birnbaum importance measures

<iframe src="../../../_static/interactivity/html/syst_table4_11.html" frameborder="0" style="width:100%;" id="ext_interactive" onload="resize_iframe()"></iframe>

