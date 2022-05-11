# Reliability assessment of degraded systems

Depending on the system architecture and the functions of its components the loss of some single components in redundant system architectures does not necessarily lead to the total loss of a function, but results in a degraded system performance. For the reliability assessment, usually 100% performance is defined, and any deviation is considered as a system failure. From a risk assessment perspective, it is also interesting to know how much the actual performance deviates from the specified one and if some residual performance can be maintained. Not only failure scenarios leading to total loss are relevant, another important criterion is whether a certain performance level can be achieved or not. To allow for the calculation of occurrence probabilities for degraded modes of system performance, a relative contribution to system performance at component level is assigned. The method is based on the evaluation of reliability block diagrams described through its success path. The system performances are linked to a minimum set of resources and modelled accordingly as RBD.

To illustrate the concept of performance degradation, the fictive example of the power supply system is extended such that the contribution of each solar panel is also taken into account. Solar panel \#1 (component 3) provides 500W, solar panel \#2 (component 4) provides 300W and solar panel \#3 (component 5) provides 200W electrical power. The corresponding reliability block diagram is shown in {numref}`Figure 7.30`.

The system can be described through the following success paths.

(syst_table4_12)=
**Table 4.12** : Success paths and their relative performance contribution

```{figure} ../../picture/figure4_12.png
---
width: 600px
name: table4_12
```

Where $M_{i}$ denotes a success path, i.e. a combination of components for which the system is in operable state if all components of the success path are operational. The success path is represented by conjunctive terms of indicator variables $X_{i}$. At least one minimal success path is required to get a working system.

In this example, if all three solar panels are working, an electrical power of 1kW is provided. In the following, a relative contribution to the system performance is assigned to the different solar panels. To component 3 a relative contribution of 50% is assigned, that means if the success path that contains the component 3 is functioning, 50% of the total system performance are available. In this case, 50% of electrical power. Component 4 has a relative contribution of 30% and 20% are assigned to component 5. In [Table 4.13](syst_table4_13) all system states with a system performance \> 0% are listed. To each elementary state the contributing success path is listed in [Table 4.13](syst_table4_13). Depending on the availability of the success path that contains one of the service providing units 3, 4 or 5, a certain level of system performance $p_{S}$ can be achieved.

(syst_figure4_30)=
```{figure} ../../picture/figure4_30.png
---
width: 600px
name: Figure 7.30
---
Example Reliability Block Diagram - System with degraded performance.
```

(syst_table4_13)=
**Table 4.13** : System states with degraded system performance

```{figure} ../../picture/figure4_13.png
---
width: 600px
name: table4_13
```

Based on the elementary states that are linked to a certain system performance level, a Boolean system function $\Phi_{P_{S}}$ can be obtained that describes the top event "system performance level equals $p_{S}$". With $p_{S} = 50%$ the following system function $\Phi_{P_{S}}$ is obtained:

(syst_equation4_68)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.68
\Phi_{50\mathrm{\%}} = X_{1}X_{2}\overline{X_{3}}X_{4}X_{5} \vee X_{1}X_{2}X_{3}\overline{X_{4}}\overline{X_{5}}
```
````

Since the elementary states are mutually exclusive, the probability of occurrence can be calculated based on the system state function in Eq. {eq}`Equation 7.68`.

(syst_equation4_69)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.69
P\left\lbrack \Phi \middle| 50\mathrm{\%} = 1 \right\rbrack = {P_{50\mathrm{\%}} = R}_{1}R_{2}F_{3}R_{4}R_{5} + {R_{1}R}_{2}R_{3}F_{4}F_{5}
```
````

With this method, the occurrence probability for all system performance levels at the end of the mission duration can be calculated, where the following definition applies:

(syst_equation4_70)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.70
\sum_{i = 0\mathrm{\%}}^{100\mathrm{\%}}P_{i} = 1
```
````

It should be noted that for practical reasons, the applicability of this method using elementary system states is limited to systems with a small number of components, since the number of states grows exponentially with the number of components. For *n* components $2^{n}$ states have to be considered.

Therefore, it is more efficient to use the success paths. For each system performance level, the correlated success paths have to be generated. In addition, auxiliary conditions are defined that describe the logical combination of the performance determining components that are required to achieve performance levels equal to or greater than $p_{S}$. This will be explained using the example shown in {numref}`Figure 7.30` and [Table 4.13](syst_table4_13). The analysis of degraded systems consists of the following steps Error: Reference source not found:

-   Identification of all possible system performance levels through combination of the performance contributing components.

-   Generation of success paths and auxiliary conditions to obtain Boolean disjunctive normal form.

-   Orthogonalisation of success paths to obtain orthogonal conjunctive normal form.

-   Calculation of system performance occurrence probability with component reliability and component failure probability

-   Inverting the calculated values to obtain the performance distribution function.

To achieve a system performance of $p_{S}$ ≥ 50% the following condition can be defined, which describes a combination of success paths for which the system performance is at least 50%.

```{admonition} Todo
:class: todo
Miss ref just above
```

(syst_equation4_71)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.71
\Gamma_{\geq 50\mathrm{\%}} = X_{3}X_{4}X_{5} \vee X_{3}X_{4} \vee X_{3}X_{5} \vee X_{4}X_{5} \vee X_{3}
```
````

Generally, the condition can be formulated as:

(syst_equation4_72)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.72
\Gamma_{} = f = 1f_{\max}\left\lbrack g = 1 \middle| g_{\max}X_{g} \right\rbrack
```
````

Where $g_{\max}$ denotes the number of component state variables of the conjunctive terms of the auxiliary condition and $f_{\max}$ denotes the number of disjunctive terms

Eq. {eq}`Equation 7.71` can be simplified and the following term is obtained:

(syst_equation4_73)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.73
\Gamma_{50\mathrm{\%}} = X_{4}X_{5} \vee X_{3}
```
````

The system state function can be defined as follows:

(syst_equation4_74)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.74
\Phi = k = 1mM_{k}
```
````

Where $k$ denotes the index of the success paths and $m$ the total number of success path.

With Eq. {eq}`Equation 7.72`, the following expression is obtained for the system state function for the top event "system performance $p_{S}$ ≥ x" Error: Reference source not found.

```{admonition} Todo
:class: todo
Miss ref just above
```

(syst_equation4_75)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.75
\Phi = f = 1f_{\max}\left\lbrack g = 1 \middle| g_{\max}\left( h = 1 \middle| h_{\max}M_{h} \right) \right\rbrack
```
````

Where $h$ denotes the index of the success path. Each success path can contain of set of state variables $X_{g}$ with $g$ from $1$ to $g_{\max}$. With Eq. {eq}`Equation 7.75` and Eq. {eq}`Equation 7.73`, the following system state function is obtained that represents the top event "system performance $p_{S}$ ≥ 50%".

(syst_equation4_76)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.76
\Phi_{\geq 50\mathrm{\%}} = M_{1} \vee \left( M_{2} \land M_{3} \right)
```
````

(syst_equation4_77)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.77
\Phi_{\geq 50\mathrm{\%}} = X_{1}X_{2}X_{3} \vee X_{1}X_{2}X_{4}X_{5}
```
````

Through orthogonalization, Eq. {eq}`Equation 7.77` can be transformed from a Boolean conjunctive normal form to an orthogonal conjunctive normal form, Eq. {eq}`Equation 7.78`.

(syst_equation4_78)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.78
\Phi_{\geq 50\mathrm{\%}} = X_{1}X_{2}X_{3} \vee X_{1}X_{2}{\overline{X}}_{3}X_{4}X_{5}
```
````

Thus, Eq. {eq}`Equation 7.78` represents mutually exclusive events and the probability of a system performance greater than or equal to 50% can be directly obtained by replacing indicator variables by the component reliabilities or failure probabilities respectively.

(syst_equation4_79)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.79
P_{\geq 50\mathrm{\%}} = R_{1}R_{2}R_{3} \vee R_{1}R_{2}{\overline{F}}_{3}R_{4}R_{5}
```
````

In order to calculate the occurrence probability for all possible system performance levels, the before mentioned calculation has to be repeated for the different combinations of available solar panels resulting in different performance levels. The following auxiliary conditions are obtained from [Table 4.13](syst_table4_13) for the different system performance levels.

(syst_equation4_80)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.80
\Gamma_{\geq 20\mathrm{\%}} = X_{5}
```
````

(syst_equation4_81)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.81
\Gamma_{\geq 30\mathrm{\%}} = X_{4}
```
````

(syst_equation4_82)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.82
\Gamma_{\geq 70\mathrm{\%}} = X_{3}X_{5}
```
````

(syst_equation4_83)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.83
\Gamma_{\geq 80\mathrm{\%}} = X_{3}X_{4}
```
````

(syst_equation4_84)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.84
\Gamma_{100\mathrm{\%}} = X_{3}X_{4}X_{5}
```
````

The probability that the system performance is within the interval \[0, x\] is defined as the performance distribution function.

(syst_equation4_85)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.85
P_{x\mathrm{\%}} = P\left\lbrack x > p_{s} \geq 0 \right\rbrack
```
````

The performance distribution function is obtained by inverting the function $P_{\geq x\mathrm{\%}}.$

(syst_equation4_86)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.86
P_{x\mathrm{\%}} = P\left\lbrack x > p_{s} \geq 0 \right\rbrack = 1 - P\left\lbrack 100\mathrm{\%} \geq p_{s} \geq x \right\rbrack={1 - P}_{\geq x\mathrm{\%}}
```
````

The occurrence probabilities for the different system performance levels are shown in [Table 4.14](syst_table4_14).

(syst_table4_14)=
**Table 4.14** : Occurrence probability of degraded system performance states

```{figure} ../../picture/figure4_14.png
---
width: 600px
name: table4_14
```

