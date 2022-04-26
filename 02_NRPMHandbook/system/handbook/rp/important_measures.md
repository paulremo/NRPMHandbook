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

