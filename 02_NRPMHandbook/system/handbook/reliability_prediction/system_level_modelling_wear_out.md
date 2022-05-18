# System level modelling of wear-out

(syst_4_8_1)=
## Wear-out model on component level

The fact that wear-out can occur at component level and that the failure rates are then no longer constant needs to be considered for the system level {term}`RELIABILITY PREDICTION`. To calculate the reliability of components prone to wear-out, the following three approaches are introduced. In this section the use of these wear-out models for system level {term}`RELIABILITY PREDICTION` is shown.

### Model 1

The failure probability is the sum of {term}`RANDOM FAILURE`s and {term}`WEAR-OUT FAILURE`s assuming that wear-out can occur throughout the entire service life and not just after qualification life time. With this model the life time of an item can be interpreted as the minimum of the life time based on random or {term}`WEAR-OUT FAILURE`s. {term}`RANDOM FAILURE`s are described by an exponential distribution and wear-out by a Weibull distribution. Thus, the following equations are obtained for failure rate and reliability:

(syst_equation4_93)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.93
\lambda\left( t \right) = \lambda_{R} + \left( \frac{\beta}{\alpha} \right)\left( \frac{t}{\alpha} \right)^{\beta - 1}
```
````

(syst_equation4_94)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.94
R\left( t \right) = {{\exp\left\lbrack - \left( \lambda_{R} + \left( \frac{t}{\alpha} \right)^{\beta} \right) \right\rbrack}^{}}_{}
```
````

```{admonition} Todo
:class: todo
Miss factor above
```

### Model 2

This model assumes that {term}`WEAR-OUT FAILURE` can only occur after the qualification time $\tau_{1}$, before it no wear-out is considered and only {term}`RANDOM FAILURE`s are considered. Thus, to calculate failure rates and reliability a distinction between two cases is made: Time $t$ is below the qualification time $\tau_{1}$ and $t$ is equal to or greater than the qualification time.

(syst_equation4_95)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.95
\begin{matrix}                                                                                                 
  \lambda\left( t \right) = \lambda_{R} = \text{const} \\                                                                                             
  \lambda\left( t \right) = \lambda_{R} + \left( \frac{\beta}{\alpha} \right)\left( \frac{t - \tau_{1}}{\alpha} \right)^{\beta - 1} \\                
  \end{matrix}\left\{ \begin{matrix}                                                                                               
  
  t < \tau_{1} \\                                                                                                     t \geq \tau_{1} \\                                                                                                     \end{matrix} \right.\ 
```
````

(syst_equation4_96)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.96
\begin{matrix}                                                                                                 
  R\left( t \right) = {\exp\left\lbrack - \lambda_{R}t \right\rbrack}^{} \\                                                                           
  R\left( t \right) = {{\exp\left\lbrack - \left( \lambda_{R} + \left( \frac{t - \tau_{1}}{\alpha} \right)^{\beta} \right) \right\rbrack}^{}}_{} \\   
  \end{matrix}\left\{ \begin{matrix}                                                                                               
  
  t < \tau_{1} \\                                                                                                     t \geq \tau_{1} \\                                                                                                     \end{matrix} \right.\ 
```
````

### Model 3

The failure rate $\lambda\left( t \right)$ is the maximum of the {term}`RANDOM FAILURE` rate and the {term}`WEAR-OUT FAILURE` rate, Eq. {eq}`Equation 7.97`. At a certain operating time $t = \tau_{2}$ the failure rate due to wear-out $\lambda_{W}$ equals the constant failure rate of {term}`RANDOM FAILURE`, Eq. {eq}`Equation 7.98`. From that point on the {term}`WEAR-OUT FAILURE` rate is dominating. Thus, the {term}`PROBABILITY DENSITY FUNCTION`s are separated in {term}`RANDOM FAILURE`s only for$t < \tau_{2}$ and wear-out only for time $t \geq \tau_{2}$

(syst_equation4_97)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.97
\lambda\left( t \right) = \max\left( \lambda_{R},\lambda_{W} \right)
```
````

(syst_equation4_98)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.98
\lambda_{R} = \lambda_{W}\left( \tau_{2} \right)
```
````

(syst_equation4_99)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.99
\begin{matrix}
  \lambda\left( t \right) = \lambda_{R} = \text{const} \\                                                       
  \lambda\left( t \right) = \left( \frac{\beta}{\alpha} \right)\left( \frac{t}{\alpha} \right)^{\beta - 1} \\   
  \end{matrix}\left\{ \begin{matrix}                                                                            
  t < \tau_{2} \\                                                                                               
  t \geq \tau_{2} \\                                                                                            
  \end{matrix} \right.\ 
```
````

(syst_equation4_100)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.100
\begin{matrix}
  R\left( t \right) = {\exp\left\lbrack - \lambda_{R}t \right\rbrack}^{} \\                                     
  R\left( t \right) = {\exp\left\lbrack - \left( \frac{t}{\alpha} \right)^{\beta} \right\rbrack}^{} \\          
  \end{matrix}\left\{ \begin{matrix}                                                                            
  t < \tau_{2} \\                                                                                               
  t \geq \tau_{2} \\                                                                                            
  \end{matrix} \right.\ 
```
````

The time $\tau_{2}$ can be obtained from Eq. {eq}`Equation 7.101`.

(syst_equation4_101)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.101
\tau_{2} = \alpha\left( \frac{\lambda_{R}\alpha}{\beta} \right)^{\frac{1}{\beta - 1}}
```
````

## Wear-out in phased missions

For components used in phased missions, the failure rates may not only depend on the stress levels applied in different phases, but also on the age of the component. Consequently, the time duration of each phase cannot be considered independently. If wear-out and age of the components are relevant to determine the component reliability the accumulated mission time has to be considered, which is given by:

(syst_equation4_102)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.102
T_{\text{Ck}} = \sum_{i = 1}^{i = k}T_{i}
```
Where

-   $T_{\text{Ck}}$ denotes the accumulated time of component from mission start to phase $k$

-   $T_{i}$ denotes the duration of phase $i$
````

The reliability function of the component that is exposed to {term}`RANDOM FAILURE`s and also {term}`WEAR-OUT FAILURE`s throughout the mission is given in Eq. {eq}`Equation 7.103` (see wear-out first approach in Section Error: Reference source not found).

```{admonition} Todo
:class: todo
Miss ref just above
```


(syst_equation4_103)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.103
R_{k}\left( t \right) = e^{\left\lbrack - \left( \lambda_{k}t + \left( \frac{T_{\text{Ck} - 1} + t}{\alpha_{k}} \right)^{\beta_{k}} \right) \right\rbrack} \cdot e^{\left\lbrack - \left( \sum_{i = 1}^{i = k - 1}{\lambda_{i}T_{i}} \right) \right\rbrack} \cdot e^{\left\lbrack - \left( \sum_{i = 1}^{i = k - 1}\left( \frac{T_{\text{Ci}}}{\alpha_{i}} \right)^{\beta_{i}} \right) \right\rbrack}
```

Where

-   $T_{\text{Ci}}$ denotes the accumulated time of component from mission start to phase $i$

-   $T_{i}$ denotes the duration of phase $i$

-   $t_{}$ denotes the time starting at beginning of phase $k$ such that, $0 \leq {t \leq T}_{k}$

-   $\lambda_{k}$ denotes the failure rate of the component in last phase $k$

-   $\lambda_{i}$ denotes the failure rate of the component in phase $i$

-   $\alpha_{i}$ denotes the characteristic life of the Weibull distribution in phase $i$

-   $\alpha_{k}$ denotes the characteristic life of the Weibull distribution in the last phase $k$

-   $\beta_{i}$ denotes the shape parameter of the Weibull distribution in phase $i$
````


If wear-out occurs only after the qualification time $\tau$ is reached (second approach) Eq. {eq}`Equation 7.103` can be adapted accordingly and for $T_{\text{ck}} > \tau$ the following equation is obtained.

(syst_equation4_104)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.104
R_{k}\left( t \right) = {e^{- \left( \lambda_{k}t + \left( \frac{T_{\text{Ck} - 1} + t - \tau_{1}}{\alpha_{k}} \right)^{\beta_{k}} \right)}e^{- \left( \sum_{i = 1}^{i = k - 1}{\lambda_{i}T_{i}} \right)}e^{- \left( \sum_{i = 1}^{i = k - 1}\left( \frac{T_{\text{Ci}} - \tau_{1}}{\alpha_{i}} \right)^{\beta_{i}} \right)}}_{}
```

Where

-   $\tau_{1}$ denotes the qualification time of the component
````

```{admonition} Todo
:class: todo
Miss factor just above
```


For mission phases before qualification time $T_{\text{ck}} < \tau_{1}$, wear-out does not have to be considered and the reliability of the component in phase k is given by Eq. {eq}`Equation 7.30`.

For Model 3, see Section Error: Reference source not found, wear-out is considered only for $T_{\text{ck}} > \tau_{2}$ and for $T_{\text{ck}} < \tau_{2}$ only {term}`RANDOM FAILURE`s are taken into account. The following equation is obtained for $T_{\text{ck}} > \tau_{2}$.

```{admonition} Todo
:class: todo
Miss ref just above
```

(syst_equation4_105)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.105
R_{k}\left( t \right) = {{\exp\left\lbrack - \left( \frac{T_{\text{Ck} - 1} + t - \tau_{2}}{\alpha_{k}} \right)^{\beta_{k}} \right\rbrack}^{}{\exp\left\lbrack - \sum_{i = 1}^{i = k - 1}\left( \frac{T_{\text{Ci}} - \tau_{2}}{\alpha_{i}} \right)^{\beta_{i}} \right\rbrack}^{}}_{}
```

Where

-   $\tau_{2}$ denotes the time at which the {term}`WEAR-OUT FAILURE` rate equals the {term}`RANDOM FAILURE` rate.
````

```{admonition} Todo
:class: todo
Miss factor just above
```


For $T_{\text{ck}} < \tau_{2}$ the reliability function of the component in phase k is also given by Eq. {eq}`Equation 7.30`.

## Reliability of serial and parallel systems considering wear-out

The system reliability function for a serial system is given by:

(syst_equation4_106)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.106
R_{S}\left( t \right) = R_{A}\left( t \right) \ast R_{B}\left( t \right)
```
````

The reliability for a parallel system in hot redundancy, thus all components in use and same load is applied is given by

(syst_equation4_107)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.107
R_{S}\left( t \right) = R_{A}\left( t \right) + R_{B}\left( t \right) - R_{A}\left( t \right)R_{B}\left( t \right)
```
````

In order to consider wear-out of the components the corresponding reliability function of the wear-out model is to be used. If for example the first approach for wear out modelling is used for both components, given by Eq. {eq}`Equation 7.94`, the following is obtained for a serial system.

(syst_equation4_108)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.108
R_{S}\left( t \right) = {\exp\left\lbrack - \left( \lambda_{1}t + \left( \frac{t}{\alpha_{1}} \right)^{\beta_{1}} \right) \right\rbrack\exp\left\lbrack - \left( \lambda_{2}t + \left( \frac{t}{\alpha_{2}} \right)^{\beta_{2}} \right) \right\rbrack}_{}
```
````

```{admonition} Todo
:class: todo
Miss factor just above
```

For a parallel system the following expression is obtained:

(syst_equation4_109)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.109
R_{S}\left( t \right) = e^{\left\lbrack - \left( \lambda_{1}t + \left( \frac{t}{\alpha_{1}} \right)^{\beta_{1}} \right) \right\rbrack} + e^{\left\lbrack - \left( \lambda_{2}t + \left( \frac{t}{\alpha_{2}} \right)^{\beta_{2}} \right) \right\rbrack} - e^{\left\lbrack - \left( \lambda_{1}t + \left( \frac{t}{\alpha_{1}} \right)^{\beta_{1}} \right) \right\rbrack} e^{\left\lbrack - \left( \lambda_{2}t + \left( \frac{t}{\alpha_{2}} \right)^{\beta_{2}} \right) \right\rbrack}
```
````

## Conditional reliability

The conditional reliability is the probability of a system successfully completing another mission phase knowing that it has not failed during previous phases. This conditional reliability is of particular relevance for life time extensions. The fact that a component was working correctly without a failure over a certain period of the mission needs to be considered to estimate the reliability over the following phases of the mission. The system\'s conditional reliability function is given by:

(syst_equation4_110)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.110
R_{S}\left( t \middle| T \right) = \frac{R_{S}\left( T + t \right)}{R_{S}\left( T \right)}
```
````

In the following an example of a serial system that consists of two components is considered. The system reliability is given by:

(syst_equation4_111)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.111
R_{S}\left( t \right) = R_{1}\left( t \right)R_{2}\left( t \right)
```
````

The mission duration shall be extended from 50000 hours by another 10000 hours to 60000 hours. 50000 hours correspond to the qualification time of the components and the system was still in operational state after 50000 hours were accumulated. For the components the following parameters shown in [Table 4.16](syst_table4_16) are given:

(syst_table4_16)=
**Table 4.16** : Example for parameters for component with random and {term}`WEAR-OUT FAILURE`s

<iframe class="ext_content" src="../../../_static/interactivity/html/syst_table4_16.html" frameborder="0" onload="resize_iframe(this)"></iframe>

Eq. {eq}`Equation 7.112` provides the reliability for a mission extension of a duration *t* giving that *T* hours of successful operation have already been accumulated up to the start of the mission extension. The system reliability is evaluated to assure that it will complete the next mission extension successfully.

(syst_equation4_112)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.112
R_{S}\left( t \middle| T \right) = \frac{R_{1}\left( T + t \right)R_{2}\left( T + t \right)}{R_{1}\left( T \right)R_{2}\left( T \right)}
```
````

If the Model 2 is applied for example to consider the wear-out of the components, the following equation is obtained:

(syst_equation4_113)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.113
R\left( t \middle| T \right) = \frac{\exp\left( - \lambda_{R}T - \left( \frac{t + T - \tau_{1}}{\alpha} \right)^{\beta} \right)\exp\left( - \lambda_{R}T - \left( \frac{t + T - \tau_{1}}{\alpha} \right)^{\beta} \right)}{{\exp\left( - \lambda_{R}T \right)\exp\left( - \lambda_{R}T \right)}^{}}_{}
```
````

```{admonition} Todo
:class: todo
Miss factor just above
```

With the three wear-out models the following results shown in [Table 4.17](syst_table4_17) are obtained. It can be seen that the first approach provides the most conservative results, as it takes wear-out already from *t*=0 into account.

(syst_table4_17)=
**Table 4.17** : Conditional probability for different wear-out models

<iframe class="ext_content" src="../../../_static/interactivity/html/syst_table4_17.html" frameborder="0" onload="resize_iframe(this)"></iframe>

## Reliability of standby systems with and without a switching device

In the following section, another form of redundancy is presented: standby redundancy. In standby redundancy the components have two states: an active state and a standby state. The stand-by component is exposed to reduced loads while not needed and under the operating load when they are activated. Consequently, components in standby redundancy have two failure distributions, one for each state. In the case that both stand-by and active failure distributions are the same, the units are in a simple parallel configuration (also called a hot standby configuration). When the failure rate of the standby component is lower than in active mode that is called a warm standby configuration. When the rate of failure of the standby component is zero (i.e., the component cannot fail when in standby), it is called a cold standby configuration.

The reliability of the system at time $t$ can be obtained using the following equation Error: Reference source not found:

```{admonition} Todo
:class: todo
Miss ref just above
```

(syst_equation4_114)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.114
R\left( t \right) = R_{1}\left( t \right) + \int_{0}^{t}{f_{1}\left( x \right)R_{2,\text{sb}}\left( x \right)R_{2,A}\left( t - x \right)\text{dx}}
```
where:

-   $R_{1}$ denotes the reliability and $f_{1}$ the {term}`PROBABILITY DENSITY FUNCTION` of the active component.

-   $R_{2,\text{sb}}$ denotes the reliability of the stand-by component in stand-by mode.

-   $R_{2,A}$ denotes the reliability of the stand-by component in active mode.
````

Eq. {eq}`Equation 7.114` can be solved by numerical integration.

The previous example assumes perfect switching, i.e. activation of the stand-by component is certain once the active component fails. In reality in many cases a switching device is implemented in the system to activate the stand-by component when the active component fails. Therefore, the failure properties of the switch must also be included in the analysis as imperfect switching.

(syst_figure4_32)=
```{figure} ../../picture/figure4_32.png
---
width: 600px
name: Figure 7.32
---
Stand-by system with switching device
```

Two scenarios have to be considered to include the reliability of a switch in the analysis with two probabilities can be considered. The first one is the probability of the switch performing the action (i.e., switching) when requested to do so, the Switch Probability per Request, which is expressed as a static probability. The second probability takes into account the possibility that the switch could fail before the active component fails, as the switch might wear out with age due to material degradation. However, a switch failure does not cause the system to fail immediately, but if the active component fails and the switch has also failed, then the system cannot be switched to the standby component and it therefore fails. The reliability of the system including switching is given by the following equation Error: Reference source not found.

```{admonition} Todo
:class: todo
Miss ref just above
```

(syst_equation4_115)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 7.115
R\left( t \right) = R_{1}\left( t \right) + \int_{0}^{t}{f_{1}\left( x \right)R_{2,\text{sb}}\left( x \right)R_{2,A}\left( t - x \right)R_{\text{SW}}\left( x \right)R_{\text{SWREQ}}\text{dx}}
```
where:

-   $R_{1}$ denotes the reliability and $f_{1}$ the {term}`PROBABILITY DENSITY FUNCTION` of the active component.

-   $R_{2,\text{sb}}$ denotes the reliability of the stand-by component in stand-by mode.

-   $R_{2,A}$ denotes the reliability of the stand-by component in active mode.

-   $R_{\text{SW}}$ denotes the reliability of the switch considering wear-out

-   $R_{\text{SWREQ}}$ denotes the reliability of the switch per request given as time-invariant static probability
````


