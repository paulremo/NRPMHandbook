(misc_5_3)=
# Data sources
The inputs data constitute the basis of any reliability model.

First, building a reliability model requires pertinent data regarding the specificity of the item (technology, complexity, materials, quality, qualification…) and the operating conditions in order to characterize the item.

Then, different inputs for reliability characteristics are defined and classified in [Chapter 6 (Part II)]() of the Current document.

The order of preference for the use of these inputs for miscellaneous parts reliability prediction is as follows:


**Statistical data**
- In-orbit return (IOR) or space heritage data
- Manufacturer reliability data
- Qualification / Reliability / life test data

The added-value of this estimation is that the data represent directly the behaviour of the item under operational conditions w.r.t. failures. There are two major conditions: 
 
1. The data represent the design/manufacturing characteristics of the miscellaneous item under consideration, 
2. The cumulated data (time, number of failures) are sufficient enough to provide a realistic reliability prediction.


**Analysis of the failure mechanisms**
- Engineering / Physics of failure: analysis of the failure mechanisms,
- DFMEA (Design FMEA) 
- and/or PFMEA (Process FMEA).

The knowledge of the failure mechanisms and the processes supporting these failure mechanisms provide valuable information to build a reliability model. This information is not easy to collect and to adapt and is subject to criticisms from experts leading to disagreement except when the model is justified by technical arguments.


**Combined approach – Bayesian updating**
The initial prediction can be refined, combining prior knowledge and IOR or tests results.

A preliminary model (constant failure rate), either PoF-based or an engineering model, provides a failure rate which is, then, assumed to a be a random variable. The distribution of this random variable is the “prior” knowledge. The expected value of the failure rate knowing additional information is the Bayesian estimator.

This approach allows using prior engineering knowledge combined with IOR data or test data which does not require a large number of cumulated hours of operations. This could be a good solution when the data background is rather reduced.


**Reliability handbooks methods / supplier Model: existing model**
The reliability handbooks providing valuable information for miscellaneous items reliability prediction are limited to some technologies or to some specific applications.

Even though it is possible to use such reliability handbooks or existing models (in the literature), most of time the applicability to space domain is inappropriate mainly due to the fact the space designs are very specific with a rigorous quality frame.

Any reliability model, whatever the data sources are, needs to be justified (with technical arguments) and submitted to system level for approval.


(misc_5_3_1)=
## In-orbit return data

For “generic equipment” that is similar from one mission to the other, it is valuable to take benefit from the use of in-orbit return data. This can provide direct statistics on the related items used in a typical environment. No model with theoretical implications would meet such level of relevance as far as the items are “equivalent” to those being used in-orbit.

Consequently, use of in-orbit return constitutes the basis for “miscellaneous items” that meet the following two conditions:

- items involved in generic “miscellaneous” functions, provided they address similar perimeters and under similar operational conditions. Technology, complexity and quality (in a wide sense) are other parameters to be checked with accuracy.
Besides, the use of in-orbit return is possible on a case by case basis, in the frame of the assessment of a given spacecraft family for example, where functional features are the same and supported by a generic product.

- items with enough in-orbit return, thus excluding those devices that might have become widely used recently (low cumulated time in operation, new technology). This may also impact the level at which miscellaneous items are defined.


(misc_5_3_2)=
## Manufacturer reliability data

Miscellaneous items are designed, manufactured and procured by suppliers generally specialized in space domain and for some categories of miscellaneous products, e.g. Solar Array cells manufacturer.

As designers, the suppliers have a deep knowledge of their products and it is their interest to master the reliability, especially in the case of product streamlined with a long heritage. However, the behaviour of these items in-orbit is better known by the prime contractors and the customers (and insurers as well) than by the manufacturers. Nevertheless, apart these operational data, the items are qualified and specific reliability tests may be conducted on ground prior to any development.

Any relevant data (e.g. failure events, nominal behaviour, cumulated time under tests) should be considered to support the item reliability modelling. A balance should be found between generic IOR data (Current document data) and dedicated manufacturers’ data.


(misc_5_3_2_1)=
### The case of one-shot devices

A “one-shot” device is defined as a product that can be used only once.

It works (success) or it does not (failure) but once it has been activated and used (providing the function for which it is designed) it is destroyed, e.g. pyrotechnic device used to cut a cable in order to deploy a solar array after injection in-orbit.

“One-shot” devices typically spend their life in dormant storage until they are activated.

Their reliability is therefore not a function in time (with possible observation of a time to failure through appropriate monitoring) but a constant probability of success (or failure resp.), likely to depend on one or several physical parameters, e.g. current in the case of a pyrotechnic device.


(misc_5_3_3)=
## Reliability test data

Test data for miscellaneous items tested under operational conditions would be a relevant source of information for reliability prediction, but is not in most cases available in sufficient quantities to derive any quantitative reliability metrics. Generally, elements constituting the miscellaneous items are tested in larger quantities but do not represent the whole and assembled item. Nevertheless, this information can be valuable in order to derive contributing factors to failure or to confirm design assumptions.

Physics of Failure models may use these elementary tests and resulting data to identify the failure mechanisms and the related design characteristics. Major failure mechanisms are identified per miscellaneous item and mastered as necessary through appropriate design rules. All this is qualitative information and is used as support to any reliability model, as relevant


(misc_5_3_3_1)=
### Reliability tests for One-shot devices

Several tests are recommended to verify the reliability of the one-shot devices: {cite}`mis-Bruceton`, {cite}`mis-PROBIT`, {cite}`mis-severe_tests`, {cite}`mis-one-shot_tests`, {cite}`mis-neyer-tests`. The resulting statistical data are useful to characterize the reliability of these items with regard to functional parameters.


(misc_5_3_3_2)=
### Wear-Out characterization

Regarding wear-out, the miscellaneous items should be qualified versus specified lifetime and ground lifetime as per {cite:p}`mis-ECSS-E-ST-33-01C`, implementing a safety factor (number of elements, number of tests). The results of these tests are considered as evidence, with a certain level of confidence, that no wear occurs before the end of the specified lifetime (or better that no performances degradation impacts the mission of the item).


(misc_5_3_4)=
## Engineering / Physics of failure

Physics of Failure can be used to identify the dominating failure mechanisms of the miscellaneous items. This approach should be used when no data are available and pertinent enough to populate a reliability model with accuracy. It is the case for a new development with innovative technology for which no statistical data exist.

Use of DFMEA / PFMEA could be helpful, and is recommended, to identify the causes (design, manufacturing) of the failure mechanisms and their criticality in terms of mission severity, failure occurrence likelihood and detectability on ground. A RPN metric (Risk Priority Number) is derived (refer to standard {cite:p}`mis-PFMEA`) and risk mitigation actions set up in order to reduce the RPN to an acceptable level, i.e. under a certain level of probability of occurrence.

When it is not possible to derive the probability of occurrence of a failure mechanism based on PoF, engineering judgement, with experts, is recommended with associated justification.

The probability of occurrence ranking defined by categories could be translated in the frame of the operational conditions of the items but there is no suitable method able to support this process. It is the responsibility of engineering to justify the probability ranking.


(misc_5_3_5)=
## Engineering data combined with observations

In some cases, there are valuable data mainly produced by engineering which could be considered as “prior” data. These data can be combined with either IOR data (reduced cumulated time) or test data to provide “posterior” information.

A combined approach based on one of the methods listed above and Bayesian updating with relevant data (additional and independent from the prior estimate) is the preferred approach whenever suitable data is available, but not in sufficient quantity for a pure statistical approach.


(misc_5_3_5)=
## Reliability handbooks / models

There are no dedicated reliability handbooks really addressing exhaustively miscellaneous items. Therefore, it is not recommended to use such a method, unless when the available data source and the data use is justified.
