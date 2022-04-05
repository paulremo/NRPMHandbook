# General Methodology

## Reliability prediction for miscellaneous items

For the four different sections (System, EEE, Mechanical and Miscellaneous), the same principle will be applied with for each section a clear definition of the objective(s) and then a clear explanation of the choices. When relevant, examples will be used to illustrate.

The level of recommendation/rule or permission will be clearly indicated so that it is easy for the user to adapt its application of the method based on its needs.

This chapter deals with the miscellaneous items which are represented by all parts/item (or sets of parts) which are not fully electrical parts, nor fully mechanical parts nor fully structural parts. The current reliability models (EEE parts, mechanical parts) are not adapted and are not the preferred way to support reliability predictions for these items. Therefore, other ways to provide reliability estimates are proposed in this chapter and are detailed in the next sections.

The [following figure](figure4_1) represents examples of some miscellaneous parts/items:

```{figure} picture/figure4_1.png
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
Software is, by nature, a miscellaneous item. Due to its specificity, a dedicated Section (§12.10) in the system chapter addresses software reliability modelling and therefore software reliability is not considered in the present chapter.
```

The Current document defines guidance to model reliability of most of the typical miscellaneous items implemented aboard the satellites:

* A “standard model” is defined, per family of miscellaneous items (generic items), based on IOR data, to provide a framework for the reliability prediction with room for adaptation through tailoring criteria in order to cope with the contributing factors to the reliability. The reliability data are provided in Table 11‑8.
* When there is no “standard model” (specific items), the Current document provides general guidance to support the reliability model building based on available technical data. In that case, referred to as “non-standard model”, the reliability model is developed by the user, based on experience and tests results and/or manufacturers data and/or IOR data, as available. The user will formally justify and submit the reliability model to the prime contractor for approval. Refer to Section 11.4.2.
* When the two previous model categories are not useable, a holistic model can be used, as per existing reliability handbooks and/or literature. It is a general model which does not represent exactly the design of the items and which is generally not applicable for Space systems, which means the level of confidence is not high.

However, whatever the model is, it is the responsibility of the supplier to justify the selected reliability model enriched with any valuable improvement based on available data (tests data, manufacturer data, IOR data).

The process used to define a Miscellaneous (MIS) item reliability model is presented in [Figure 4‑2](figure4_2).

```{note}
MIS-X, below, addresses the miscellaneous chapter sections. e.g. MIS-5.5 refers to Section 11.5.5.
```

```{figure} picture/figure4_2.png
---
width: 600px
name: figure4_2
---
Miscellaneous (MIS) items reliability modelling logic.
```

### List of miscellaneous items

[Table 4‑1](table4_1) presents the miscellaneous items for which a reliability “standard model” is defined (refer to Sections 11.7 and 11.8).

The reliability model derived from IOR data gathers in fact all the elements related to an “equivalent class” and is only valid for this class of miscellaneous items. The related numerical values are provided in Table 11‑8.

To use the reliability model it is, first, necessary to assess that the miscellaneous item considered falls in the scope of the model definition. The “standard model” refers to a class of miscellaneous item identified by the main functions which are supported, the parameters reflecting the reliability (quality…) and the operating conditions.

[Table 4‑2](table4_2) provides additional information for the miscellaneous items for which no “standard model” is provided (the list is not exhaustive, refer to Section 11.7).

**Table 4.1** : List of Miscellaneous items with “standard model”

```{glue:figure} table4_1
:name: "table4_1"
```

**Table 4.2** : List of Miscellaneous items with “non-standard model” (not exhaustive)

```{glue:figure} table4_2
:name: "table4_2"
```

### Root causes coverage

The failure mechanisms of the miscellaneous parts result from the four categories of failure root causes already introduced and reminded in Table 4‑3

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
Considered by the process described in Section 11.5 (Wear-Out modelling), only for miscellaneous items considered as lifetime-limited items. Safe life qualification is used to address wear-out failure based on probability distribution (parameters derived from the duration for qualification). The model addresses nominal lifetime and lifetime extension.
```

```{admonition} **Extrinsic failures**
:class: note, dropdown
Foreseen extrinsic effects due to the launch environment (vibrations, shocks) and physical conditions in‐orbit (e.g. temperature) are assumed to be covered by design and adequate qualification (to be verified before modelling). Any design/manufacturing errors are represented by Systematic failures modelling.

A separate modelling may be required if the probability of additional failure mechanisms induced by the space environment cannot be neglected – e.g. space debris impact.
```

### Data sources

The inputs data constitute the basis of any reliability model.

First, building a reliability model requires pertinent data regarding the specificity of the item (technology, complexity, materials, quality, qualification…) and the operating conditions in order to characterize the item.

Then, different inputs for reliability characteristics are defined and classified in Chapter 6 (Part II) of the Current document.

The order of preference for the use of these inputs for miscellaneous parts reliability prediction is as follows:

#### Statistical data

In-orbit return (IOR) or space heritage data

Manufacturer reliability data

Qualification / Reliability / life test data

The added-value of this estimation is that the data represent directly the behaviour of the item under operational conditions w.r.t. failures. There are two major conditions: (1) the data represent the design/manufacturing characteristics of the miscellaneous item under consideration, (2) the cumulated data (time, number of failures) are sufficient enough to provide a realistic reliability prediction.

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

### In-orbit return data

For “generic equipment” that is similar from one mission to the other, it is valuable to take benefit from the use of in-orbit return data. This can provide direct statistics on the related items used in a typical environment. No model with theoretical implications would meet such level of relevance as far as the items are “equivalent” to those being used in-orbit.

Consequently, use of in-orbit return constitutes the basis for “miscellaneous items” that meet the following two conditions:

items involved in generic “miscellaneous” functions, provided they address similar perimeters and under similar operational conditions. Technology, complexity and quality (in a wide sense) are other parameters to be checked with accuracy.
Besides, the use of in-orbit return is possible on a case by case basis, in the frame of the assessment of a given spacecraft family for example, where functional features are the same and supported by a generic product.

items with enough in-orbit return, thus excluding those devices that might have become widely used recently (low cumulated time in operation, new technology). This may also impact the level at which miscellaneous items are defined.

### Manufacturer reliability data

Miscellaneous items are designed, manufactured and procured by suppliers generally specialized in space domain and for some categories of miscellaneous products, e.g. Solar Array cells manufacturer.

As designers, the suppliers have a deep knowledge of their products and it is their interest to master the reliability, especially in the case of product streamlined with a long heritage. However, the behaviour of these items in-orbit is better known by the prime contractors and the customers (and insurers as well) than by the manufacturers. Nevertheless, apart these operational data, the items are qualified and specific reliability tests may be conducted on ground prior to any development.

Any relevant data (e.g. failure events, nominal behaviour, cumulated time under tests) should be considered to support the item reliability modelling. A balance should be found between generic IOR data (Current document data) and dedicated manufacturers’ data.

#### The case of one-shot devices

A “one-shot” device is defined as a product that can be used only once.

It works (success) or it does not (failure) but once it has been activated and used (providing the function for which it is designed) it is destroyed, e.g. pyrotechnic device used to cut a cable in order to deploy a solar array after injection in-orbit.

“One-shot” devices typically spend their life in dormant storage until they are activated.

Their reliability is therefore not a function in time (with possible observation of a time to failure through appropriate monitoring) but a constant probability of success (or failure resp.), likely to depend on one or several physical parameters, e.g. current in the case of a pyrotechnic device.

### Reliability test data

Test data for miscellaneous items tested under operational conditions would be a relevant source of information for reliability prediction, but is not in most cases available in sufficient quantities to derive any quantitative reliability metrics. Generally, elements constituting the miscellaneous items are tested in larger quantities but do not represent the whole and assembled item. Nevertheless, this information can be valuable in order to derive contributing factors to failure or to confirm design assumptions.

Physics of Failure models may use these elementary tests and resulting data to identify the failure mechanisms and the related design characteristics. Major failure mechanisms are identified per miscellaneous item and mastered as necessary through appropriate design rules. All this is qualitative information and is used as support to any reliability model, as relevant

#### Reliability tests for One-shot devices

Several tests are recommended to verify the reliability of the one-shot devices: Bruceton [BR96], PROBIT [BR97], severe tests [BR98], one-shot tests [BR99], Neyer tests [BR100]. The resulting statistical data are useful to characterize the reliability of these items with regard to functional parameters.

#### Wear-Out characterization

Regarding wear-out, the miscellaneous items should be qualified versus specified lifetime and ground lifetime as per [RD7] , implementing a safety factor (number of elements, number of tests). The results of these tests are considered as evidence, with a certain level of confidence, that no wear occurs before the end of the specified lifetime (or better that no performances degradation impacts the mission of the item).

### Engineering / Physics of failure

Physics of Failure can be used to identify the dominating failure mechanisms of the miscellaneous items. This approach should be used when no data are available and pertinent enough to populate a reliability model with accuracy. It is the case for a new development with innovative technology for which no statistical data exist.

Use of DFMEA / PFMEA could be helpful, and is recommended, to identify the causes (design, manufacturing) of the failure mechanisms and their criticality in terms of mission severity, failure occurrence likelihood and detectability on ground. A RPN metric (Risk Priority Number) is derived (refer to standard BR7) and risk mitigation actions set up in order to reduce the RPN to an acceptable level, i.e. under a certain level of probability of occurrence.

When it is not possible to derive the probability of occurrence of a failure mechanism based on PoF, engineering judgement, with experts, is recommended with associated justification.

The probability of occurrence ranking defined by categories could be translated in the frame of the operational conditions of the items but there is no suitable method able to support this process. It is the responsibility of engineering to justify the probability ranking.

### Engineering data combined with observations

In some cases, there are valuable data mainly produced by engineering which could be considered as “prior” data. These data can be combined with either IOR data (reduced cumulated time) or test data to provide “posterior” information.

A combined approach based on one of the methods listed above and Bayesian updating with relevant data (additional and independent from the prior estimate) is the preferred approach whenever suitable data is available, but not in sufficient quantity for a pure statistical approach.

### Reliability handbooks / models

There are no dedicated reliability handbooks really addressing exhaustively miscellaneous items. Therefore, it is not recommended to use such a method, unless when the available data source and the data use is justified.

## Reliability Models for miscellaneous items

There are three reliability models for miscellaneous items:

“Standard model”, for generic miscellaneous items,

“Non-standard model”, for specific miscellaneous items.

“holistic model”, for miscellaneous items which are not supported by “standard model” nor by a “non-standard model”.

### Standard model for generic miscellaneous items

A “generic” miscellaneous item is an item classified as “miscellaneous” (refer to the definition provided at the beginning of this chapter) AND for which a reliability model based on IOR is defined as a reference in this Current document (see Table 4‑1).

The reliability model is either (1) an exponential distribution (constant failure rate) or (2) a constant probability of success or constant probability of failure ( = 1- Probability of success) supported by Binomial model, depending on the nature of the item.

The basic reliability data are provided in Table 11‑8 with the associated framework.

The reliability “standard model” is then calculated based on the process presented in Section 11.5.

### Non-standard model for specific miscellaneous items

A “specific” miscellaneous item relates to a product which is not fully modelled by EEE parts and/or mechanical parts and which is not listed in the equivalent classes of miscellaneous items in Section 11.4.1

e.g. Hold Release Mechanism Low Shock presented in Figure 4‑3.

The item is neither a mechanism, nor an assembly of EEE parts. It is constituted by different parts such as spring, glue, expansion unit. Since the design is very specific without any IOR data it is necessary to define a dedicated reliability model.

The Current document provides general guidance to define such a reliability model: The approach to calculate the basic reliability data is presented in Section 11.7. The “specific” reliability model is then calculated based on the process presented in Section 11.5.

```{figure} picture/figure4_3.png
---
width: 600px
name: figure4_3
---
Miscellaneous (MIS) items reliability modelling logic.
```

### Holistic model

A holistic model refers to a model based on the existing reliability handbooks and/or literature without detailed justification related to the design.

The holistic reliability model is then calculated based on the process presented in Section 4.5.

### Dormant failures

Currently no reliability model is provided to support failure modelling in dormant mode for miscellaneous items. The miscellaneous items are from different nature (mix of EEE and mechanics, passive components, tubing, piping…) and it is not relevant to provide a generic rule to derive a dormant failure rate from the active miscellaneous item failure rate.

In case, depending on the mission and on the operations, it is necessary to use a reliability model in dormant mode (no power supply during certain storage duration, no activation for “maintenance”) the user will define a dedicated reliability model (refer to the different methods listed previously) accounting for the specific conditions in storage.

## Process for Reliability modelling

This Section details how to build a reliability model for miscellaneous item.

Figure 4‑4 provides the general process to apply whatever the basic model is: (1) the “standard model”, or (2) the “non-standard model” or even (3) the “holistic model”.

```{note}
On Figure 4‑4, the basic model is a failure rate but it could also be a probability of failure.
```

```{figure} picture/figure4_4.png
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

Note that it is considered that the multiplying corrective factor is also used to up-date the probability of failure in the case of a one-shot device, based on the fact that, for constant failure rate, when the probability of failure can be approximated by $this_{is}^{inline}$ (i.e. for exponential distribution in the case t <10-2) the corrective factor K leads to a new probability = Kt, which means the probability of failure is multiplied by the corrective factor.
As a result, the same applies for the probability of failure PF for a one-shot device: the basic probability can be amended by a factor K, leading to KPF.
So, what is discussed in the following Sections, addressing directly the failure rate, applies for the probability of failure for one-shot device.
