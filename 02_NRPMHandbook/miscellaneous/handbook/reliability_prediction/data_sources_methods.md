<!--- Copyright (C) Matrisk GmbH 2022 -->

(misc_10_3)=
# Data sources

The inputs data constitute the basis of any reliability model. 

First, building a reliability model requires pertinent data regarding the specificity of the item (technology, complexity, materials, quality, qualification…) and the operating conditions, in order to characterize the item. Then, different inputs for reliability characteristics are defined and classified in {numref}`method_5` of {ref}`Part 2 - Methods <methods>` of this handbook.

The order of preference for the use of these inputs for miscellaneous parts reliability prediction is as follows:


```{dropdown} **Statistical data**
- In-orbit return (IOR) or space heritage data,
- Manufacturer reliability data,
- Qualification / Reliability / life {term}`test data <Test data>`

The added value of this estimation is that the data represent directly the behaviour of the item under operational conditions with respect to failures. There are two major conditions: 

1. The data represent the design/manufacturing characteristics of the miscellaneous item under consideration, 
2. The cumulated data (time, number of failures) are sufficient enough to provide a realistic reliability prediction.

```

```{dropdown} **Analysis of the failure mechanisms**
 - Engineering / {term}`physics of failure <Physics of failure>` (PoF): analysis of the failure mechanisms,
 - {term}`DFMEA` (Design FMEA) and/or {term}`PFMEA` (Process FMEA)

The knowledge of the failure mechanisms and the processes supporting these failure mechanisms provide valuable information to build a reliability model. This information is not easy to collect and to adapt and is subject to criticisms from experts leading to disagreement except when the model is justified by technical arguments.
```

```{dropdown} **Combined approach – Bayesian updating**

The initial prediction can be refined, combining prior knowledge and IOR or tests results. A preliminary model (constant failure rate), either {term}`PoF` based or an engineering model, provides a failure rate which is, then, assumed to be a random variable. The distribution of this random variable is the “prior” knowledge. The expected value of the failure rate knowing additional information is the Bayesian estimator.

This approach allows using prior engineering knowledge combined with IOR data or test data which does not require many cumulated hours of operations. This could be a good solution when the data background is rather reduced.
```

```{dropdown} **Reliability handbooks methods / Supplier model: existing model**
The reliability handbooks providing valuable information for miscellaneous items reliability prediction are limited to some technologies or to some specific applications. Even though it is possible to use such reliability handbooks or existing models (in the literature), most of time the applicability to space domain is inappropriate mainly due to the fact the space de-signs are very specific with a rigorous quality frame.

Any reliability model, whatever the data sources are, needs to be justified (with technical arguments) and submitted to system level for approval.

```

(misc_10_3_1)=
## In-orbit return data

For “generic equipment” that is similar from one mission to the other, it is valuable to take benefit from the use of {term}`in-orbit return (IOR) data <In-orbit return (IOR) data>`. This can provide direct statistics on the related items used in a typical environment. No model with theoretical implications would meet such level of relevance as far as the items are “equivalent” to those being used in-orbit.

Consequently, use of IOR constitutes the basis for “miscellaneous items” that meet the following two conditions:

*	Items involved in generic “miscellaneous” functions, provided they address similar perimeters and under similar operational conditions. Technology, complexity and quality (in a wide sense) are other parameters to be checked with accuracy.
*	Besides, the use of IOR is possible on a case-by-case basis, in the frame of the assessment of a given spacecraft family for example, where functional features are the same and supported by a generic product.
*	Items with enough IOR, thus excluding those devices that might have become widely used recently (low cumulated time in operation, new technology). This can also impact the level at which miscellaneous items are defined.


(misc_10_3_2)=
## Manufacturer reliability data

designers, the suppliers have a deep knowledge of their products and it is their interest to master the reliability, especially in the case of product streamlined with a long heritage. However, the behaviour of these items in-orbit is better known by the prime contractors and the customers (and insurers as well) than by the manufacturers. Nevertheless, apart these operational data, the items are qualified and specific reliability tests may be conducted on ground prior to any development. 
Any relevant data (e.g. failure events, nominal behaviour, cumulated time under tests) should be considered to support the item reliability modelling. A balance should be found between generic IOR data (this handbook data) and dedicated manufacturer’s data.


**The case of one-shot devices**

A “one-shot” device is defined as a product that can be used only once. It works (success) or it does not (failure) but once it has been activated and used (providing the function for which it is designed) it is destroyed, e.g. pyrotechnic device used to cut a cable, in order to deploy a solar array after injection in-orbit. 

“One-shot” devices typically spend their life in dormant storage until they are activated.

Their reliability is therefore not a function in time (with possible observation of a time to failure through appropriate monitoring) but a probability of success (or failure resp.), likely to depend on one or several physical parameters, e.g. current in the case of a pyrotechnic device.


(misc_10_3_3)=
## Reliability test data

Test data for miscellaneous items tested under operational conditions would be a relevant source of information for reliability prediction but is not in most cases available in sufficient quantities to derive any quantitative reliability metrics. Generally, elements constituting the miscellaneous items are tested in larger quantities but do not represent the whole and assembled item. Nevertheless, this information can be valuable, in order to derive contributing factors to failure or to confirm design assumptions.

{term}`PoF` models may use these elementary tests and resulting data to identify the failure mechanisms and the related design characteristics. Major failure mechanisms are identified per miscellaneous item and mastered as necessary through appropriate design rules. All this is qualitative information and is used as support to any reliability model, as relevant


**Reliability tests for one-shot devices**

Several tests are recommended to verify the reliability of the one-shot devices: Bruceton {cite}`mis-Bruceton`, PROBIT {cite}`mis-PROBIT`, severe tests  {cite}`mis-severe_tests`, one-shot tests {cite}`mis-one-shot_tests`, Neyer tests {cite}`mis-neyer-tests`. The resulting statistical data are useful to characterize the reliability of these items regarding functional parameters.


**Degradation characterization**

Regarding degradation, the miscellaneous items should be qualified versus specified lifetime and ground lifetime as per {cite:p}`mis-ECSS-E-ST-33-01C`, implementing a safety factor (number of elements, number of tests). The results of these tests are considered as evidence, with a certain level of confidence, that no wear occurs before the end of the specified lifetime (or better that no performances degradation impacts the mission of the item).


(misc_10_3_4)=
## Engineering / physics of failure

{term}`Physics of failure` (PoF) can be used to identify the dominating failure mechanisms of the miscellaneous items. This approach should be used when no data are available and pertinent enough to populate a reliability model with accuracy. It is the case for a new development with innovative technology for which no statistical data exist.

Use of Design FMEA ({term}`DFMEA`) / Process FMEA ({term}`PFMEA`) could be helpful, and is recommended, to identify the causes (design, manufacturing) of the failure mechanisms and their criticality in terms of mission severity, failure occurrence likelihood and detectability on ground. A {term}`RPN` metric (Risk Priority Number) is derived (refer to standard {cite:p}`mis-PFMEA`) and risk mitigation actions set up in order to reduce the RPN to an acceptable level, i.e. under a certain level of probability of occurrence.

When it is not possible to derive the probability of occurrence of a failure mechanism based on PoF, engineering judgement, with experts, is recommended with associated justification. The probability of occurrence ranking defined by categories could be translated in the frame of the operational conditions of the items but there is no suitable method able to support this process. It is the responsibility of engineering to identify the probability ranking.


(misc_10_3_5)=
## Engineering data combined with observations

In some cases, there are valuable data mainly produced by engineering which could be considered as “prior” data. These data can be combined with either IOR data (reduced cumulated time) or test data to provide “posterior” information.

A combined approach, based on one of the methods listed above and {term}`Bayesian inference <Bayesian inference>` updating with relevant data (additional and independent from the prior estimate) is the preferred approach whenever suitable data is available, but not in sufficient quantity for a pure statistical approach.

(misc_10_3_6)=
## Reliability handbooks / models

There are no dedicated reliability handbooks really addressing exhaustively miscellaneous items. 

Therefore, it is not recommended to use such a method, unless when the available data source and the data use is justified.
