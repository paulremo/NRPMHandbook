# Reliability prediction for miscellaneous items

This chapter deals with the miscellaneous items which are represented by all parts/item (or sets of parts) which are not fully electrical parts, nor fully mechanical parts nor fully structural parts. The current reliability models ([EEE parts](../../folderEEE/mainEEE.md), mechanical parts[]) are not adapted and are not the preferred way to support reliability predictions for these items. Therefore, other ways to provide reliability estimates are proposed in this chapter and are detailed in the next sections.

The [following figure](misc_figure4_1) represents examples of some miscellaneous parts/items:

(misc_figure4_1)=
```{figure} ../picture/figure4_1.png
---
width: 600px
name: figure4_1
---
Examples of some miscellaneous items
```

The list provided below may contain some items that are in fact EEE or mechanical type items, but which are classified as “miscellaneous” because the modelling approach for EEE/mechanical is not considered as completely suitable.

One of the major characteristics of miscellaneous parts/items is that they are various (functions, technologies, nature) and very specific in the sense they are designed to support dedicated and usual functions (e.g. battery) in a satellite:

* They cover a wide range of Technologies (e.g. Chemical, fluidic…) apart “simple” electrical or mechanical technologies,
* They are not fully covered by elementary « EEE or Mechanical » models (e.g. a battery cathode is not a pure EEE part),
* The failures may originate from particular failure mechanisms (e.g. catalytic bed degradation for N2H4 thrusters),
* They may be supported by « Innovative » technology (e.g. Plasmic propulsion) with reduced in-orbit return,
* They can be submitted to Wear-out process (e.g. battery calendar aging) depending on their nature.

```{note}
Software is, by nature, a miscellaneous item. Due to its specificity, a dedicated [Section (§12.10)]() in the system chapter addresses software reliability modelling and therefore software reliability is not considered in the present chapter.
```

The Current document defines guidance to model reliability of most of the typical miscellaneous items implemented aboard the satellites:

* A “standard model” is defined, per family of miscellaneous items (generic items), based on IOR data, to provide a framework for the reliability prediction with room for adaptation through tailoring criteria in order to cope with the contributing factors to the reliability. The reliability data are provided in [Table 4‑8](misc_table4_8).
* When there is no “standard model” (specific items), the Current document provides general guidance to support the reliability model building based on available technical data. In that case, referred to as “non-standard model”, the reliability model is developed by the user, based on experience and tests results and/or manufacturers data and/or IOR data, as available. The user will formally justify and submit the reliability model to the prime contractor for approval. Refer to [Section 4.4.2](misc_4_4_2).
* When the two previous model categories are not useable, a holistic model can be used, as per existing reliability handbooks and/or literature. It is a general model which does not represent exactly the design of the items and which is generally not applicable for Space systems, which means the level of confidence is not high.

However, whatever the model is, it is the responsibility of the supplier to justify the selected reliability model enriched with any valuable improvement based on available data (tests data, manufacturer data, IOR data).

The process used to define a Miscellaneous (MIS) item reliability model is presented in [Figure 4‑2](misc_figure4_2).

```{note}
MIS-X, below, addresses the miscellaneous chapter sections. e.g. MIS-5.5 refers to [Section 4.5.5](misc_4_5_5).
```

(misc_figure4_2)=
```{figure} ../picture/figure4_2.png
---
width: 600px
name: figure4_2
---
Miscellaneous (MIS) items reliability modelling logic.
```

(misc_4_1)=
## List of miscellaneous items

[Table 4‑1](misc_table4_1) presents the miscellaneous items for which a reliability “standard model” is defined (refer to Sections [4.7](misc_4_7) and [4.8](misc_4_8)).

The reliability model derived from IOR data gathers in fact all the elements related to an “equivalent class” and is only valid for this class of miscellaneous items. The related numerical values are provided in [Table 4‑8](misc_table4_8).

To use the reliability model it is, first, necessary to assess that the miscellaneous item considered falls in the scope of the model definition. The “standard model” refers to a class of miscellaneous item identified by the main functions which are supported, the parameters reflecting the reliability (quality…) and the operating conditions.

[Table 4‑2](table4_2) provides additional information for the miscellaneous items for which no “standard model” is provided (the list is not exhaustive, refer to [Section 4.7](misc_4_7)).

(misc_table4_1)=
**Table 4.1** : List of Miscellaneous items with “standard model”

```{glue:figure} table4_1
:name: "table4_1"
```

(misc_table4_2)=
**Table 4.2** : List of Miscellaneous items with “non-standard model” (not exhaustive)

```{glue:figure} table4_2
:name: "table4_2"
```

(misc_4_2)=
## Root causes coverage

The failure mechanisms of the miscellaneous parts result from the four categories of failure root causes already introduced and reminded in [Table 4‑3](misc_table4_3).

```{admonition} **Random failure**
:class: note, dropdown
Random failures are "one-off" events. They are modelled by a constant failure rate. In the frame of the Current document, a basic failure rate is attributed to a class of miscellaneous item, derived from IOR data and valid in a certain range of parameters. The model is only valid for the design lifetime. It can be used beyond the design lifetime in the case there is no wear.
```

```{admonition} **Systematic failures**
:class: note, dropdown
All physical failures are related to Design errors / manufacturing errors.

When the errors are sufficiently minor inducing a “One-shot” event/situation with typical failure mechanisms in line with the item quality level, they are modelled as random failures.

When it is no longer the case (obvious weakness in design, or actual design characteristics changed by manufacturing defect, premature wear-out before the end of the specified lifetime, weakness regarding the space environment) it is necessary to address and to model systematic failures. This is done based on statistics and not considering the human factor as an initial root cause.
```

```{admonition} **Wear‐out failures**
:class: note, dropdown
Considered by the process described in [Section 4.5](misc_4_5) (Wear-Out modelling), only for miscellaneous items considered as lifetime-limited items. Safe life qualification is used to address wear-out failure based on probability distribution (parameters derived from the duration for qualification). The model addresses nominal lifetime and lifetime extension.
```

```{admonition} **Extrinsic failures**
:class: note, dropdown
Foreseen extrinsic effects due to the launch environment (vibrations, shocks) and physical conditions in‐orbit (e.g. temperature) are assumed to be covered by design and adequate qualification (to be verified before modelling). Any design/manufacturing errors are represented by Systematic failures modelling.

A separate modelling may be required if the probability of additional failure mechanisms induced by the space environment cannot be neglected – e.g. space debris impact.
```

(misc_4_3)=
## Data sources

The inputs data constitute the basis of any reliability model.

First, building a reliability model requires pertinent data regarding the specificity of the item (technology, complexity, materials, quality, qualification…) and the operating conditions in order to characterize the item.

Then, different inputs for reliability characteristics are defined and classified in [Chapter 6 (Part II)]() of the Current document.

The order of preference for the use of these inputs for miscellaneous parts reliability prediction is as follows:


#### Statistical data

In-orbit return (IOR) or space heritage data

Manufacturer reliability data

Qualification / Reliability / life test data

The added-value of this estimation is that the data represent directly the behaviour of the item under operational conditions w.r.t. failures. There are two major conditions: 
 
1. The data represent the design/manufacturing characteristics of the miscellaneous item under consideration, 
2. The cumulated data (time, number of failures) are sufficient enough to provide a realistic reliability prediction.


#### Analysis of the failure mechanisms

Engineering / Physics of failure: analysis of the failure mechanisms,

DFMEA (Design FMEA) and/or PFMEA (Process FMEA).

The knowledge of the failure mechanisms and the processes supporting these failure mechanisms provide valuable information to build a reliability model. This information is not easy to collect and to adapt and is subject to criticisms from experts leading to disagreement except when the model is justified by technical arguments.


#### Combined approach – Bayesian updating

The initial prediction can be refined, combining prior knowledge and IOR or tests results.

A preliminary model (constant failure rate), either PoF-based or an engineering model, provides a failure rate which is, then, assumed to a be a random variable. The distribution of this random variable is the “prior” knowledge. The expected value of the failure rate knowing additional information is the Bayesian estimator.

This approach allows using prior engineering knowledge combined with IOR data or test data which does not require a large number of cumulated hours of operations. This could be a good solution when the data background is rather reduced.


#### Reliability handbooks methods / supplier Model: existing model

The reliability handbooks providing valuable information for miscellaneous items reliability prediction are limited to some technologies or to some specific applications.

Even though it is possible to use such reliability handbooks or existing models (in the literature), most of time the applicability to space domain is inappropriate mainly due to the fact the space designs are very specific with a rigorous quality frame.

Any reliability model, whatever the data sources are, needs to be justified (with technical arguments) and submitted to system level for approval.


(misc_4_3_1)=
### In-orbit return data

For “generic equipment” that is similar from one mission to the other, it is valuable to take benefit from the use of in-orbit return data. This can provide direct statistics on the related items used in a typical environment. No model with theoretical implications would meet such level of relevance as far as the items are “equivalent” to those being used in-orbit.

Consequently, use of in-orbit return constitutes the basis for “miscellaneous items” that meet the following two conditions:

items involved in generic “miscellaneous” functions, provided they address similar perimeters and under similar operational conditions. Technology, complexity and quality (in a wide sense) are other parameters to be checked with accuracy.
Besides, the use of in-orbit return is possible on a case by case basis, in the frame of the assessment of a given spacecraft family for example, where functional features are the same and supported by a generic product.

items with enough in-orbit return, thus excluding those devices that might have become widely used recently (low cumulated time in operation, new technology). This may also impact the level at which miscellaneous items are defined.


(misc_4_3_2)=
### Manufacturer reliability data

Miscellaneous items are designed, manufactured and procured by suppliers generally specialized in space domain and for some categories of miscellaneous products, e.g. Solar Array cells manufacturer.

As designers, the suppliers have a deep knowledge of their products and it is their interest to master the reliability, especially in the case of product streamlined with a long heritage. However, the behaviour of these items in-orbit is better known by the prime contractors and the customers (and insurers as well) than by the manufacturers. Nevertheless, apart these operational data, the items are qualified and specific reliability tests may be conducted on ground prior to any development.

Any relevant data (e.g. failure events, nominal behaviour, cumulated time under tests) should be considered to support the item reliability modelling. A balance should be found between generic IOR data (Current document data) and dedicated manufacturers’ data.


(misc_4_3_2_1)=
#### The case of one-shot devices

A “one-shot” device is defined as a product that can be used only once.

It works (success) or it does not (failure) but once it has been activated and used (providing the function for which it is designed) it is destroyed, e.g. pyrotechnic device used to cut a cable in order to deploy a solar array after injection in-orbit.

“One-shot” devices typically spend their life in dormant storage until they are activated.

Their reliability is therefore not a function in time (with possible observation of a time to failure through appropriate monitoring) but a constant probability of success (or failure resp.), likely to depend on one or several physical parameters, e.g. current in the case of a pyrotechnic device.


(misc_4_3_3)=
### Reliability test data

Test data for miscellaneous items tested under operational conditions would be a relevant source of information for reliability prediction, but is not in most cases available in sufficient quantities to derive any quantitative reliability metrics. Generally, elements constituting the miscellaneous items are tested in larger quantities but do not represent the whole and assembled item. Nevertheless, this information can be valuable in order to derive contributing factors to failure or to confirm design assumptions.

Physics of Failure models may use these elementary tests and resulting data to identify the failure mechanisms and the related design characteristics. Major failure mechanisms are identified per miscellaneous item and mastered as necessary through appropriate design rules. All this is qualitative information and is used as support to any reliability model, as relevant


(misc_4_3_3_1)=
#### Reliability tests for One-shot devices

Several tests are recommended to verify the reliability of the one-shot devices: Bruceton [BR96], PROBIT [BR97], severe tests [BR98], one-shot tests [BR99], Neyer tests [BR100]. The resulting statistical data are useful to characterize the reliability of these items with regard to functional parameters.


(misc_4_3_3_2)=
#### Wear-Out characterization

Regarding wear-out, the miscellaneous items should be qualified versus specified lifetime and ground lifetime as per [RD7] , implementing a safety factor (number of elements, number of tests). The results of these tests are considered as evidence, with a certain level of confidence, that no wear occurs before the end of the specified lifetime (or better that no performances degradation impacts the mission of the item).


(misc_4_3_4)=
### Engineering / Physics of failure

Physics of Failure can be used to identify the dominating failure mechanisms of the miscellaneous items. This approach should be used when no data are available and pertinent enough to populate a reliability model with accuracy. It is the case for a new development with innovative technology for which no statistical data exist.

Use of DFMEA / PFMEA could be helpful, and is recommended, to identify the causes (design, manufacturing) of the failure mechanisms and their criticality in terms of mission severity, failure occurrence likelihood and detectability on ground. A RPN metric (Risk Priority Number) is derived (refer to standard BR7) and risk mitigation actions set up in order to reduce the RPN to an acceptable level, i.e. under a certain level of probability of occurrence.

When it is not possible to derive the probability of occurrence of a failure mechanism based on PoF, engineering judgement, with experts, is recommended with associated justification.

The probability of occurrence ranking defined by categories could be translated in the frame of the operational conditions of the items but there is no suitable method able to support this process. It is the responsibility of engineering to justify the probability ranking.


(misc_4_3_5)=
### Engineering data combined with observations

In some cases, there are valuable data mainly produced by engineering which could be considered as “prior” data. These data can be combined with either IOR data (reduced cumulated time) or test data to provide “posterior” information.

A combined approach based on one of the methods listed above and Bayesian updating with relevant data (additional and independent from the prior estimate) is the preferred approach whenever suitable data is available, but not in sufficient quantity for a pure statistical approach.


(misc_4_3_5)=
### Reliability handbooks / models

There are no dedicated reliability handbooks really addressing exhaustively miscellaneous items. Therefore, it is not recommended to use such a method, unless when the available data source and the data use is justified.


(misc_4_4)=
## Reliability Models for miscellaneous items

There are three reliability models for miscellaneous items:

“Standard model”, for generic miscellaneous items,

“Non-standard model”, for specific miscellaneous items.

“Holistic model”, for miscellaneous items which are not supported by “standard model” nor by a “non-standard model”.


(misc_4_4_1)=
### Standard model for generic miscellaneous items

A “generic” miscellaneous item is an item classified as “miscellaneous” (refer to the definition provided at the beginning of this chapter) AND for which a reliability model based on IOR is defined as a reference in this Current document (see [Table 4‑1](misc_table4_1)).

The reliability model is either 

1. an exponential distribution (constant failure rate) or 
2. a constant probability of success or constant probability of failure ( = 1- Probability of success) supported by Binomial model, depending on the nature of the item.

The basic reliability data are provided in [Table 4‑8](misc_table4_8) with the associated framework.

The reliability “standard model” is then calculated based on the process presented in [Section 4.5](misc_4_5).


(misc_4_4_2)=
### Non-standard model for specific miscellaneous items

A “specific” miscellaneous item relates to a product which is not fully modelled by EEE parts and/or mechanical parts and which is not listed in the equivalent classes of miscellaneous items in [Section 4.4.1](misc_4_4_1).

e.g. Hold Release Mechanism Low Shock presented in [Figure 4‑3](misc_figure4_3).

The item is neither a mechanism, nor an assembly of EEE parts. It is constituted by different parts such as spring, glue, expansion unit. Since the design is very specific without any IOR data it is necessary to define a dedicated reliability model.

The Current document provides general guidance to define such a reliability model: The approach to calculate the basic reliability data is presented in [Section 4.7](misc_4_7). The “specific” reliability model is then calculated based on the process presented in [Section 4.5](misc_4_5).

(misc_figure4_3)=
```{figure} ../picture/figure4_3.png
---
width: 600px
name: figure4_3
---
Miscellaneous (MIS) items reliability modelling logic.
```


(misc_4_4_3)=
### Holistic model

A holistic model refers to a model based on the existing reliability handbooks and/or literature without detailed justification related to the design.

The holistic reliability model is then calculated based on the process presented in [Section 4.5](misc_4_5).


(misc_4_4_4)=
### Dormant failures

Currently no reliability model is provided to support failure modelling in dormant mode for miscellaneous items. The miscellaneous items are from different nature (mix of EEE and mechanics, passive components, tubing, piping…) and it is not relevant to provide a generic rule to derive a dormant failure rate from the active miscellaneous item failure rate.

In case, depending on the mission and on the operations, it is necessary to use a reliability model in dormant mode (no power supply during certain storage duration, no activation for “maintenance”) the user will define a dedicated reliability model (refer to the different methods listed previously) accounting for the specific conditions in storage.


(misc_4_5)=
## Process for Reliability modelling

This Section details how to build a reliability model for miscellaneous item.

Figure 4‑4 provides the general process to apply whatever the basic model is: 

1. the “standard model”, or 
2. the “non-standard model” or even 
3. the “holistic model”.

```{note}
On Figure 4‑4, the basic model is a failure rate but it could also be a probability of failure.
```

(misc_figure4_4)=
```{figure} ../picture/figure4_4.png
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

<button class="back-forward-button" onclick="redirect('../interactive_guide/misc_failure_rate_processing.html')">Interactive calculation</button>

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

```{image} ../picture/figure4_4.png
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
```{figure} ../picture/figure4_5.png
---
width: 600px
name: figure4_5
---
Failure rates for the three Wear-out models (Exponential, Weibull)
```

(misc_figure4_6)=
```{figure} ../picture/figure4_6.png
---
width: 600px
name: figure4_6
---
Example of WO distribution calculation (assumption: Normal distribution)
```

(misc_figure4_7)=
```{figure} ../picture/figure4_7.png
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


(misc_step6)=
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

````
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

```{image} ../picture/figure4_8.png
:alt: table4_5
:align: center
```


(misc_4_6)=
## Use of IOR data and/or tests results

As presented, a reliability model can be built based on IOR data and/or on test data (manufacturers, user) or combined with IOR data and/or on test data (manufacturers, user).

The basic failure rate or the basic probability of failure in [Table 4 -8](misc_table4_8) is based on such IOR data. The data was compiled from the IOR background in ADS & TAS fleets.

Per miscellaneous items, the anomalies are collected regarding representative products (quality, range of operational conditions, orbit as relevant) and the failures are classified in random failures ($RF$) and systematic failures ($SF$). To avoid duplication of systematic anomalies, they are only counted once. That means that the derived failure rates include as relevant systematic failure contribution.

The IOR data recorded are:

* Reference: miscellaneous item number
* Satellite subsystem
* Miscellaneous item description (e.g. Li-Ion Battery)
* Cumulated time in-orbit and/or tests for the relevant sample of items
* Number of failures
* Type of failure: random, systematic
* Point estimate: to provide a point of comparison with one-sided interval estimator
* File: the file addresses the events (failures) listed to derive a failure rate
  * Description of the event
  * Classification of the failure, either random or systematic
  * Time to failure
  * Statistical weight: representing the percentage of the items fleet at the time of the failure (number of items operational at failure time divided by the number of the items in the fleet).
  * Example: the percentage is nearly 100% for low values of $TTF$ and the percentage decreases as the $TTF$ increases in time. 


(misc_4_6_1)=
### Failure rate estimator

The basic failure rate estimation is a one-sided upper bound interval estimation, see [Chapter 6 (Part II)]() for details.


(misc_4_6_2)=
### Proportion of failure estimator

To determine a proportion of failures based on the observation of failures within a sample of n elements (e.g. IOR data for “one-shot” device), it is possible to use:

* Point estimate
* Bayesian estimator
* Estimation by interval. 

It is recommended to use the interval estimate, see [Chapter 6 (Part II)]() for details.


(misc_4_6_3)=
### Gamma Bayesian estimator

The failure rate is no longer considered as a real but as a random variable $\Delta$.

In the case of the exponential distribution, a natural prior distribution is the Gamma distribution (conjugate of the exponential distribution), see [Chapter 7 (Part II)]() for details.

The Bayesian estimator is defined as the expected value of the random variable $\Delta$ knowing that a failure has been observed at $t_{1}$, $t_{2}$ … $t_{n}$). Then, with a sample encompassing $n$ items and $n$ associated times to failure:

(misc_equation4_9)=
````{math}
:label: Equation 4.9
E(\Delta | T_{1} = t_{1}, T_{2} = t_{2}, ..., T_{n} = t_{n}) = \frac{\alpha + n}{\beta + \sum_{i} (t_{i})} = \frac{\frac{\alpha}{n}}{\frac{\beta}{n} + \frac{\sum_{i} (t_{i})}{n}}
````

The parameters of the gamma prior distribution are selected as per the knowledge of the item.

Let us assume for a certain miscellaneous item that a basic failure rate is calculated.

Let us assume that there are some items already in flight with a certain cumulated time, not sufficient enough to provide a result in the order of magnitude of the specification (without prior knowledge).

Let us consider $\lambda_{0}$ as a first estimation of the failure rate (e.g. provided by Current document or existing model).

Let us consider a Gamma ($\alpha$, $\beta$) distribution assumed as “prior” distribution of the failure rate $\Delta$.

It is necessary to provide rules for determining the two parameters $\alpha$ and $\beta$ with two equations.

We determine $\alpha$ so that the expected value of the gamma distribution is $\lambda_{0}$.

(misc_equation4_10)=
````{math}
:label: Equation 4.10
E(\Delta) = \frac{\alpha}{\beta} = \lambda_{0}
````

This provides a first equation with $\alpha$ and $\beta$.
A second equation is provided by the level of confidence "$a$" attributed to the value $\lambda_{0}$:

(misc_equation4_11)=
````{math}
:label: Equation 4.11
F_{\Delta}(\lambda_{0}) = P(\Delta \leq \lambda_{0}) = \int_{0}^{\lambda_{0}} \frac{\beta^{\alpha} e^{- \lambda \beta} \lambda^{\alpha - 1}}{\Gamma (\alpha)} = \frac{1}{\Gamma (\alpha)} \gamma (\alpha, \alpha) = a
````

Ideally, the prior should be defined based on two different estimates for the failure rate $\lambda_{0}$, one representing an “average” value (point estimate, entering [Equation 4 -10](misc_equation4_10)) and one representing an estimate at a given level of confidence (e.g. conservative estimate, entering [Equation 4 -11](misc_equation4_11)).

Once $\alpha$ and $\beta$ are determined it allows to derive the Bayesian estimator with n being the number of failures and $\sum t_{i}$ the cumulated time.


(misc_4_7)=
## Basic failure rate derivation for “non-standard model” items

When the miscellaneous item under consideration does not match the criteria of the miscellaneous equivalent class (e.g. SSPA – Solid State Power Amplifier- cannot be compared to a TWTA in terms of technology), it is necessary to build a reliability model based on engineering/PoF approach as defined hereafter.

Once the reliability model is established it can be tailored as necessary based on the approach presented in [Section 4.5](misc_4_5).

First, it is necessary, to collect/define all technical information about the miscellaneous item in order to characterize it (refer to [Section 4.5](misc_4_5)). Then the basic failure rate $\lambda_{1}$ = $\lambda_{B}$ is defined (step 1) as discussed below. Finally, the tailoring of this basic failure rate follows the “standard model” procedure as presented in the subsections of [Section 4.5](misc_4_5) corresponding to [step 2](misc_step2) to [7](misc_step7).


(misc_4_7_1)=
### DFMEA / PFMEA

After the first item characterization, a DFMEA and a PFMEA are performed in order to assess the failure modes due to 

1. Design errors and
2. Manufacturing errors.

It is recommended to use the SAE standard [BR1] which provides the method to apply for a DFMEA / PFMEA. PFMEA is also specified in Error: Reference source not found.

**FMEA: Required for every unit**

* Is a tool/method supporting the design of the unit, identifying all the elementary “failure modes” due to “_RANDOM FAILURE” (part intrinsic reliability)_ as defined in the failure mode list (refer to Error: Reference source not foundannex G). 
* **@unit level**: under supplier responsibility
* **@system level**: integrated at system level by System RAMS engineer (including HSIA supporting the failure tolerance: observability in-orbit…)

```{admonition} Todo
:class: todo
miss ref above
```

**DFMEA: Required on critical functions only (Risk analysis)**

* Is a tool/method supporting the product quality identifying all the elementary failure modes due to DESIGN errors. It includes, as a minimum, the failure modes identified by FMEA.
* **@unit level**: under unit designer / Quality Assurance responsibility
* **@system level**: reviewed by procurement within the unit acceptance process

**PFMEA: Required on critical functions only (Risk analysis)**

* Is a tool/Method supporting the product quality identifying all the elementary failure modes due to MANUFACTURING errors.
* **@unit level**: under unit Quality Assurance responsibility
* **@system level**: reviewed by procurement within the unit acceptance process

(misc_figure4_8)=
```{figure} ../picture/figure4_8.png
---
width: 600px
name: figure4_8
---
Differences between FMEA, DFMEA and PFMEA.
```

[Figure 4 -8](misc_figure4_8) highlights the differences and the commonalities between FMEA, DFMEA and PFMEA.

[Figure 4 -9](misc_figure4_9)  provides an example of DFMEA and PFMEA at elementary part level (interconnect between Solar cells). The left-hand side of the table refers to FMEA (blue perimeter in [Figure 4 -8](misc_figure4_8)), whereas the right-hand side refers to DFMEA data (green perimeter in [Figure 4 -8](misc_figure4_8)).

The main outcome is the ranking of every root cause (Design error, Manufacturing error) in

* **SEV**erity
* **OCC**urrence
* **DET**ectability

The Risk Priority Number (RPN), which is derived, is an index reflecting the residual technical risk.

(misc_figure4_9)=
```{figure} ../picture/figure4_10.png
---
width: 600px
name: figure4_9
---
Differences between FMEA, DFMEA and PFMEA.
```

```{glossary}
SA
  Solar Array

I_SA
  SA current

TM
  Telemetry

SPF
  Single Point Failure
```

(misc_table4_6)=
**Table 4.6** : Occurrence scale with 10 levels.

```{image} ../picture/figure4_11.png
:alt: table4_6
:align: center
```

```{glossary}
TRL
  Technology Readiness Level
```


(misc_4_7_2)=
### Probability assessment

The occurrence scale of [Table 4 -6](misc_table4_6) is used to derive, based on engineering judgement, either a failure rate or a probability of failure, per failure mode:

* In the case Detectability (i.e. the capacity to detect on ground the defect) is certain, the probability of failure is set to 0 under the condition that no degradation in time is expected (e.g.  if a particle inside a RF passive part which originates from manufacturing is necessarily detected on ground with no possibility to get a particle during the mission, then the associated probability of failure is set to 0).
* A probability of occurrence is assigned to every failure mode and the sum provides the probability of occurrence of the item.
* A failure rate could be derived assuming the probability of occurrence on the specified lifetime is equal to the probability assigned to the failure mode, e.g. probability assessed to $10^{-4}$ as level 4 ([Table 4 -6](misc_table4_6) ) leads to a failure rate of $1,14 10^{-9}$ for 10 years.


This represents the basic failure rate or the basic probability of failure.

Then the general process to adapt this failure rate is described in [Section 4.5](misc_4_5).

It is noteworthy that this probability ranking needs to be clearly justified and documented.


(misc_4_8)=
## Reliability Data for Miscellaneous “Standard model”

[Table 4 -8](misc_table4_8) provides the basic failures rates or basic probability of failure (%) to be considered for miscellaneous “standard models”. 

The meaning of the columns is explained in .

```{admonition} Todo
:class: todo
Miss ref just above "in ..."
```

````{admonition} Note 1 : MIS_01 TWTA, Single HPA
:class: note
The failure rate is provided per TWT Channel (mono channel or dual channel). In order to be used for LEO, if adaptation is necessary, it is recommended to use 

1.  by default the following proportion (based on average MIL-HDBK-217 Error: Reference source not foundreliability prediction) of the whole failure rate.
    * EPC_common = 36%
    * EPC_channel = 9%
    * CAMP = 25%
    * TWT = 30%
2. to use the supplier repartition as per its own reliability prediction.

```{admonition} Todo
:class: todo
REF ERROR just above in 1.
```

````

(misc_table4_7)=
**Table 4.7** : Structure of the reliability data table in [Table 4 -8](misc_table4_8)

```{glue:figure} table4_7
:name: "table4_7"
```

(misc_table4_8)=
**Table 4.8** : reliability data table

```{glue:figure} table4_8
:name: "table4_8"
```

(back_from_search_table)=
[Click here to have a better look on the table](../interactive_guide/search_table_test.ipynb)