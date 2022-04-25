# Process for Reliability modelling

This Section details how to build a reliability model for miscellaneous item.

Figure 4‑4 provides the general process to apply whatever the basic model is: 

1. the “standard model”, or 
2. the “non-standard model” or even 
3. the “holistic model”.

```{note}
On [Figure 4‑4](misc_figure4_4), the basic model is a failure rate but it could also be a probability of failure.
```

(misc_figure4_4)=
```{figure} ../../picture/figure4_4.png
---
width: 600px
name: figure4_4
---
General process for miscellaneous items reliability prediction.
```

First, it is necessary, before starting anything, to collect/define all technical information about the miscellaneous item in order to select the category of miscellaneous item which will be used, if relevant, as a “standard model”:

* Functional analysis: list of all the main functions supported by the item,
* Technical performances: list of all the specified performances regarding the nominal mission / the reduced mission,
* Hardware description: functional breakdown and hardware architecture as per reliability block diagram (refer to the reliability analysis and associated FMEA),
* Trajectory (GEO, LEO, MEO, Interplanetary orbit) on which the item is intended to be used,
* Operating conditions
  * Duty cycle
  * Voltage, current
  * Thermal environment
* Flight experience: the maturity of the item regarding in-orbit background.

The basic principle is to provide through a reference failure rate (or a probability of failure for one-shot devices) and to up-date this reference failure rate as relevant considering the contributors (multiplying corrective factors) to the probability of failure.

In the following Section the general process is described.

Note that it is considered that the multiplying corrective factor is also used to up-date the probability of failure in the case of a one-shot device, based on the fact that, for constant failure rate, when the probability of failure can be approximated by $\lambda t$ (i.e. for exponential distribution in the case $\lambda t < 10^{-2}$) the corrective factor $K$ leads to a new probability = $K t$, which means the probability of failure is multiplied by the corrective factor.
As a result, the same applies for the probability of failure $P_{F}$ for a one-shot device: the basic probability can be amended by a factor $K$, leading to $K P_{F}$.
So, what is discussed in the following Sections, addressing directly the failure rate, applies for the probability of failure for one-shot device.

(misc_step1)=
`````{dropdown} **STEP 1 : Selection of the initial model**
The basic principle is to start from a reference failure rate, either derived from in-orbit data in the frame of the Current document or from a “non-standard model” duly justified by the supplier.

````{admonition} Rule
:class: rule
**$\bf{JO1_{rule}}$** 

The supplier justifies the rationale supporting the use of a “model” (functional analysis, hardware configuration, operating conditions) providing as a minimum:

* Miscellaneous category
* List of the main functions / main performances
* Operating conditions range

The failure rate is referred to as basic failure rate $\lambda_{1} = \lambda_{B}$. It is defined at 60% level of confidence.

(misc_equation4_1)=
```{math}
:label: Equation 4.1
\lambda_{1} = \lambda_{B}
```
````
`````

(misc_step2)=
`````{dropdown} **STEP 2 : Normalization of the basic failure rate**
The major contributors to the reliability are identified in [Table4-8](terms.md).
In the case the actual parameters are different (either higher or lower quality levels, additional stresses, specific technology, specific contributors to the reliability) a tailoring factor is recommended to account for the item’s specificities.

````{admonition} Rule
:class: rule
**$\bf{JO2_{rule}}$** 

The supplier identifies the physical parameters contributing to the reliability and accounting for the item specificities.
The resulting failure rate is:

(misc_equation4_2)=
```{math}
:label: Equation 4.2
\lambda_{2} = \lambda_{1} * K_{parameters}
```

By default, $K_{parameters}$ is set to 1, under the condition that the major contributors are sufficiently close to those defined for the basic failure rate.
It is the responsibility of the user (the supplier) to adapt and/or define the $K_{parameters}$ as relevant with appropriate technical justification.
````
`````

<h2 id="back_from_misc_failure_rate_processing_balise"></h2>

(misc_step3)=
`````{dropdown} **STEP 3 : Consideration of reliability contributors**
The basic failure rate which is derived from IOR relates to a certain set of assumptions likely to impact the reliability. It is therefore necessary to amend as relevant the basic failure rate to account for the real conditions of the item under consideration.

* $\Pi_{Q}$ = QUALITY factor
  
  This factor covers the quality level used to design/manufacture the miscellaneous item. It addresses the quality process, as a whole, as defined in the ECSS framework.
  A three level scale is used:
  * **Level 1** = HIGH Quality (e.g. most of Telecommunications satellites)
  
    The technical risk is mitigated / cancelled as necessary. This level refers to the high quality standard used for space (refer to ECSS).

  * **Level 2** = MEDIUM Quality (e.g. New Space paradigm)
  
    The technical risk is optimized. This level is an intermediate level between High quality level and Low quality level.

  * **Level 3** = LOW Quality (e.g. COTS without quality space standard requiring specific qualification)
  
    The technical risk is mitigated up to the cost target, otherwise accepted.

  ````{admonition} Rule
  :class: rule
  **$\bf{JO3_{rule}}$** 

  The supplier justifies with technical argument the quality level of the miscellaneous item providing the quality reference as define in the Product Assurance requirements applicable to the miscellaneous item.
  ````        

* $\Pi_{M}$ = MATURITY factor
  
  This factor addresses the maturity level of the supplier.
  A three level scale is used:
  * **Level 1** = HIGH Maturity
  
    The supplier is a specialist providing the space stakeholders with the miscellaneous item,

  * **Level 2** = MEDIUM Maturity
  
    The item is a new development for the supplier,

  * **Level 3** = LOW Maturity (e.g. COTS without quality space standard requiring specific qualification)
  
    The supplier is a newcomer on the market to develop such a product.

  ````{admonition} Rule
  :class: rule
  **$\bf{JO4_{rule}}$** 

  The supplier justifies with technical arguments the maturity level of the miscellaneous item providing evidences of the related ranking.
  ````        

* $\Pi_{T}$ = TECHNOLOGY factor
  
  This factor relates to the “technology” supporting the item. “Technology” is considered in a wide sense and is already addressed in the IOR equivalent class from which the basic failure rate is derived.
  No assumption can really be defined to account for the use of a new technology or a technology slightly different. 
  The supplier justifies with technical arguments the reason why the technology of its product matches the technology accounted in the basic failure rate. If it is not the case, a “non-standard model” is developed by the supplier.
  _e.g. SSPA implements a different technology than TWTA and therefore the reliability model used for TWTA will not be used for SSPA_.

  ````{admonition} Rule
  :class: rule
  **$\bf{JO5_{rule}}$** 

  The supplier justifies that the technology supporting the item is consistent with the IOR data used as a basis to determine the basic failure rate.
  ````        

* $\Pi_{C}$ = COMPLEXITY factor
  
  Reliability depends on the complexity of the item. The assessment of the complexity is difficult.
  The supplier justifies with technical arguments the reason why the complexity of its product is consistent with the complexity accounted in the basic failure rate. If it is not the case a “non-standard model” is developed by the supplier.

  ````{admonition} Rule
  :class: rule
  **$\bf{JO6_{rule}}$** 

  The supplier justifies that the complexity (design) supporting the item is consistent with the IOR data used as a basis to determine the basic failure rate.
  ````        

* $\Pi_{OP}$ = OPERATING CONDITIONS factor
  
  The factor represents the frame of the significant operating conditions of the item. It is item-dependent.

  * Orbit,
  * Temperature,
  * Power,
  * Thermal Cycling,
  * Duty cycle,
  * Other relevant conditions considered as reliability contributor. 

  ````{admonition} Rule
  :class: rule
  **$\bf{JO7_{rule}}$** 

  The supplier identifies with adequate justification the parameters / stresses impacting the reliability with an associated weight representing the contribution of the parameter to the reliability. 
  ````        

* ````{admonition} Rule
  :class: rule
  **$\bf{JO8_{rule}}$** 

  The supplier classifies each significant condition in three categories:

  * **FULLY COMPLIANT**: The basic failure rate has been derived for the same operating conditions (w.r.t. this parameter)
  * **PARTIALLY COMPLIANT**: The basic failure rate has been derived based on different operating conditions and the parameter is assumed to be a contributor to the reliability with medium impact,
  * **NOT COMPLIANT**: The basic failure rate has been derived based on different operating conditions and the parameter is assumed to be a contributor to the reliability with high impact
  ````    

  The weighting factor attributed per condition represents the contribution of each condition to the reliability of the item.
  The average resulting factor is then applied.

The resulting failure rate is 

(misc_equation4_3)=
```{math}
:label: Equation 4.3
\lambda_{3} = \lambda_{2} * \Pi_{Q} * \Pi_{M} * \Pi_{CT} * \Pi_{C} * \Pi_{OP}
```

<button class="back-forward-button" onclick="redirect('../../models/misc_failure_rate_processing.html')">Go to model</button>

```{note}
For operating conditions it is necessary to define the weights per contributor and to add a number of conditions as necessary. The process is:

* To define the number of conditions
* To attribute a weighting factor per condition
* To define the category for each condition
* To calculate the resulting factor to be added.

[Table4-4](misc_table4_4) provides an example of such a calculation.
```

(misc_table4_4)=
**Table 4.4** : Values of factors per their ranking.

```{image} ../../picture/figure4_4.png
:alt: figure4_4
:align: center
```

The column _“value”_ provides the factors depending on the classification (column _“scale”_).
The two right-hand columns provide the result for one example (_“X”_ representing the ranking regarding the different categories with the associated resulting factor in the right column)

$1.1 = 1.00 * 1.00 * 1 * 1 * 1.1 = \Pi_{Q} * \Pi_{M} * \Pi_{CT} * \Pi_{C} * \Pi_{OP}$

`````

(misc_step4)=
`````{dropdown} **STEP 4 : Application of combined approach**
The step 4 is used to combine the predicted failure rate with IOR data in the case the item is based on a generic product which is already operated in-orbit.
The method used is the Bayesian approach as presented in [Section 4.6.3](misc_4_6_3).

(misc_equation4_4)=
````{math}
:label: Equation 4.4
\lambda_{3}^{\gamma} = \lambda_{3}
````
Where $\lambda_{3}^{\gamma}$ is the gamma estimator.
`````

(misc_step5)=
`````{dropdown} **STEP 5 : Wear-out modelling**
The step 5 incorporates in the reliability model the failures due to potential wear, as necessary.
The model consists in adding to the constant failure rate (representing Random failures) an increasing failure rate representing the wear-out contribution to the failure of the item.
Let’s denote $T$ as the Time To Failure random variable.
$T_{RF}$ is the $TTF$ representing Random Failures (constant failure rate for miscellaneous items)
$T_{RF}$ is modelled by the exponential distribution. 
$T_{WO}$ is the $TTF$ representing Wear-Out failures (increasing failure rate)
$T_{WO}$ is modelled by any distribution with increasing failure rate, i.e. Weibull $W(\beta, \eta)$, Normal $N(m, \sigma)$, Log-Normal $\textbf{XXX}$ as relevant (based on the supplier knowledge). 
Three models are presented to model include wear-out mechanisms and impacts on the reliability of the item.

* **MODEL 1**: $RF$ model and $WO$ model are combined from $t=0$, based on $T = TTF = min(T_{RF}, T_{WO})$
* **MODEL 2**: $RF$ model and $WO$ model are combined beyond $\theta$ , assumed to be the qualification time (laps of time defined in accordance with the technical requirements –agreed with the customer- in order to demonstrate the capability of an item to withstand the applied stresses all along the specified lifetime without significant degradations preventing from the mission achievement).
* **MODEL 3**: $RF$ distribution and $WO_{PDF}$ are separated @ $\alpha$ ($RF$ before, $WO$ beyond) from $\lambda_{WO}(\alpha)=\lambda_{RF}$
The three models are presented in **Section Error: Reference source not found**
All three Models can be defined for every Wear-out probability density function: Normal, log-Normal, Gamma … with adequate properties.

````{admonition} Rule
:class: rule
**$\bf{JO9_{rule}}$** 

The supplier justifies the wear-out model based on the qualification characteristics of the item.
The resulting failure rate is :

(misc_equation4_5)=
```{math}
:label: Equation 4.5
\lambda_{4}(t) = \lambda_{3}^{\gamma} + \lambda_{WO}(t)
```

The reliability prediction of the item is then provided by:

(misc_equation4_6)=
```{math}
:label: Equation 4.6
P(FAILURE) = 1 - e^{-\int_{0}^{t} \lambda_{4}(u) \, \mathrm{d}u}
```
````

**Discussion about the three models**
[Figure 4 -5](misc_figure4_5) presents the differences on the reliability and on the failure rates per model 1, 2, 3, using the example of the Weibull distribution as a wear-out model.

* Model 1 and model 3 are very close since the constant failure rates used for miscellaneous items are very low regarding the increasing failure rates of any distribution such as Normal or Weibull distribution.
* Model2 could be considered as optimistic since it addresses wear-out only after the qualification time.
* Model 1 appears as the most appropriate, summing the failure rate for Random failures modelling and the failure rate for Wear-out failure modelling. It is recommended to be used except technical arguments support another choice.

````{admonition} Recommendation
:class: recommendation
The model 1 is recommended as it combines a constant failure rate model with an increasing failure rate model. Other models could be used when appropriate justification is provided by the user.
````

(misc_figure4_5)=
```{figure} ../../picture/figure4_5.png
---
width: 600px
name: figure4_5
---
Failure rates for the three Wear-out models (Exponential, Weibull)
```

(misc_figure4_6)=
```{figure} ../../picture/figure4_6.png
---
width: 600px
name: figure4_6
---
Example of WO distribution calculation (assumption: Normal distribution)
```

(misc_figure4_7)=
```{figure} ../../picture/figure4_7.png
---
width: 600px
name: figure4_7
---
Example of WO distribution calculation (assumption: Weibull distribution)
```
`````

(misc_step6)=
`````{dropdown} **STEP 6 : Systematic failures modelling**
The step 6 consists in adding a probability of failure related to Systematic Failures.

(misc_equation4_7)=
````{math}
:label: Equation 4.7
P(FAILURE) = 1 - (1 - SF) * (1 - e^{-\int_{0}^{t} \lambda_{4}(u) \, \mathrm{d}u})
````

The model is common to all miscellaneous items.
Refer to **the Chapter Error: Reference source not found** for defining the SF value. 

````{admonition} Todo
:class: todo
miss ref above
````

`````


(misc_step7)=
`````{dropdown} **STEP 7 : Extrinsic failures modelling**
The step 7 consists in adding a probability of failure related to the external particles.

(misc_equation4_8)=
````{math}
:label: Equation 4.8
P(FAILURE) = 1 - (1 - EX) * (1 - SF) * (1 - e^{-\int_{0}^{t} \lambda_{4}(u) \, \mathrm{d}u})
````

The probability of extrinsic failures EX is dependent on 

1. The item location (outside the satellite), 
2. The probability to be hit by a particle (refer to µmeteorits flux and characteristics depending on the orbit, on the position on the orbit and on the velocity vector) and 
3. The shielding for the item protection.
  
The definition of a model representing the probability to be hit by a debris is out of the scope of the Current document. Refer to Chapter **Error: Reference source not found** for more information.

`````


(misc_4_5_1)=
### Result after completing Step 1 to Step 7

The method allows deriving a reliability function in time as presented here above.
It is up to the discretion of the user to use the result appropriately:

* Probability of failure
* Probability of success
* Equivalent failure rate derived at a certain time (only valid at this time)
* Approximation of the probability of failure by $\lambda t$, when $\lambda$ is small regarding $10^{-2}$.
  
An example of calculation is presented in [Table 4 -5](misc_table4_5).

(misc_table4_5)=
**Table 4.5** : Example of a reliability calculation for a Miscellaneous item: TWTA.

```{image} ../../picture/figure4_8.png
:alt: table4_5
:align: center
```
