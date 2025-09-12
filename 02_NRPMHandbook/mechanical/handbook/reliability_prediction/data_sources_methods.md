<!--- Copyright (C) Matrisk GmbH 2022 -->

(meca_9_3)=
#  Data sources and methods

The following paragraphs discuss the inputs and reliability prediction methods introduced in {ref}`Part 2 - Methods <methods>` of this handbook, focussing on their use in mechanical domain.


(meca_9_3_1)=
## Inputs

The order of preference for the use of different data sources and inputs for mechanical parts reliability prediction is as follows:

1. In-orbit return (IOR) data,
2. Manufacturer reliability data,
3. Test data,
4. Analysis of the failure mechanism's,
5. Models from existing data sources.

Each input will be briefly discussed below from a mechanical reliability prediction perspective.

Using a data source for reliability prediction, e.g. in-orbit return (IOR) as the first preference, requires that relevant data is available in sufficient quantity. If this condition is not fulfilled, the next preferred input needs to be considered. Nevertheless, relevant data, even if not available in large enough quantities, can still be used to validate, tune or update the modelling in a combined approach. 

Despite its late appearance in the preference listing given above, a good understanding of the failure mechanisms driving the (un-)reliability of mechanical parts should always form the basis for the reliability prediction, even if it is only used to decide whether the available data can be used for the prediction.


(meca_9_3_1_1)=
### Analysis of the {term}`failure mechanism <Failure mechanism>`

A first analysis and understanding of the potential failure mechanisms for mechanical parts and equipment should generally be available from the design process and should always be considered as an important input for the prediction, even if a pure statistical approach is used to estimate an item’s reliability. The approach described in {numref}`meca_9_4` and {numref}`meca_9_5` is based on this idea, focussing on the identification of relevant failure mechanisms although not necessarily requiring PoF methods for the mathematical modelling.


(meca_9_3_1_2)=
### {term}`In-orbit return (IOR) data <In-orbit return (IOR) data>`

IOR failure data provides valuable information on the in-service reliability performance in space applications. For mechanical equipment, it can in certain cases be possible to track the failure cause down to part level, making the information even more valuable. However, the use of in-orbit return data for reliability prediction is hindered by the small degree of standardization of mechanical items (compared to {term}`EEE`) and the large effect of the design details and the operational conditions on mechanical part reliability. As a stand-alone input, it will thus be restricted to highly standardized applications. Apart from this, in-orbit return can provide the following information when combined with other inputs:

* Information on observed failure modes and root causes to select the focus of the prediction,
* In-orbit measurements of physical data to model the relevant variables in {term}`PoF` approaches,
* Failure/success data to update a model based on other inputs.


(meca_9_3_1_3)=
### Manufacturer reliability data

Mechanical space equipment suppliers are highly specialized companies, delivering their products for many different missions. Manufacturer reliability data can thus be a highly relevant source of information for mechanical reliability prediction. This holds especially for standardized items with a long space heritage, where manufacturer’s IOR (considered in {numref}`meca_9_3_1_2`) can be used for the reliability prediction. Also {term}`test data <Test data>` available on the manufacturer’s side may be considered. Manufacturer reliability data derived from analysis should be checked for consistency with the methodology presented in this handbook.

Apart from this, more general manufacturer data, such as design information, material specifications, or equipment level Failure Mode and Effects Analysis  {term}`FMEA` analyses are also important inputs for reliability predictions of mechanical parts. 


(meca_9_3_1_4)=
### Test data

Test data for mechanical parts tested at operational conditions would be a relevant source of information for reliability prediction but is in most cases not available in large enough quantities. Small data samples can be used to calibrate or update models derived from analysis, or to check the modelling assumptions.

Another possible use of test data is for the derivation of physical quantities needed in reliability models based on PoF, such as e.g. wear rates or resistances against specific stresses. The advantage is that with this approach test data can be useful even if the test is performed at different than operational conditions and/or the design is not exactly the same as for the flight item. An important limitation is that in practice most items are not tested to failure and therefore the data is censored and less informative for modelling purposes.

Finally, one specific feature of pre-flight acceptance tests should be mentioned. Due to the fact that these tests are performed on the flight item, they can provide relevant information about its strength or resistance against the applied stresses. The fact that the item has passed the tests can be used to exclude lower fractile values of the strength distribution in PoF approaches. 

```{admonition} Note
:class: note
This “proof load” approach is only valid for failure mechanisms resulting from peak load effects and cannot be applied when cumulative stresses are driving failure. More details on the use of proof load test results for reliability prediction can be found, e.g. in {cite:p}`mec-AO-1-8017-14-NL-KM`, {cite:p}`mec-Venter2012AccountingFP`.
```

(meca_9_3_1_5)=
### Models from existing data sources

Two well-known reliability handbooks are presently available providing input data for mechanical reliability prediction: the {term}`NPRD` {cite:p}`mec-NPRD-16` and the {term}`NSWC` {cite:p}`mec-NSWC-11`. Both handbooks cannot be recommended as a stand-alone method for mechanical reliability prediction in space applications, but may be used as a complementary source of information, as will be discussed in the following.

**Non-electronic parts reliability data (NPRD)**

NPRD is a data source providing part and assembly level failure rate estimates from various sources and industries. Its application is straight-forward when used without extrapolation beyond the covered part types, operational and environmental conditions. Due to the following limitations, it cannot be used as a general reliability data source for mechanical reliability prediction in space applications:

* The coverage of part types used in space and space-graded parts is limited,
* Most data come from terrestrial sources, with limited coverage of space applications,
* The information provided is not sufficient to justify extrapolations beyond data coverage,
* For assemblies listed, there can be difficulties of interpreting whether the failure rate provided relates to the assembly as a whole, or only to one of its components,
* Only industry and time-averaged failure rate estimates are provided due to the way the data has been collected, which does not allow to derive time-dependant failure rates,
* It is unclear which categories of failures are included in the data (e.g. random vs. degradation),
* Parts of the data presented are very old, as data collection started in the early 1970’s.


Despite these drawbacks, NPRD can still be used to derive “ballpark” estimates for the reliability of mechanical parts, to be used e.g. in early design phases, as a comparison benchmark for predictions based on other methods, or as a prior that can be updated with relevant data in a {term}`Bayesian inference <Bayesian inference>` approach. Due to the large impact of terrestrial data sources on the summary statistics, it is recommended to search for dedicated data from space applications. 

The confidence in the NPRD data strongly depends on its relevance with respect to the part type and quality, the use conditions, the environment and the dominating failure mechanisms. It can therefore only be used as a reference for specific applications if sufficient justification can be provided that the data is relevant with respect to the part type and quality, the use conditions, the environment and the considered failure mechanisms.


**Naval Surface Warfare Center (NSWC) Reliability Prediction Handbook**

The NSWC Handbook for Mechanical Reliability Prediction {cite:p}`mec-NSWC-11` provides models derived from a combined approach similar to the one applied for {term}`EEE` components in {ref}`Part 3 - EEE <sec_EEE_handbook>`: base failure rates, derived from statistical data at reference conditions, are scaled to a specific design and operating conditions with the aid of multiplicative factors accounting for the specificities of material, design and environment. The scaling factors are based on PoF relationships to determine the mean time to failure ({term}`MTTF`) at reference and operating conditions:	

````{admonition} Equation
:class: equation
```{math}
:label: Equation_3_1
\lambda = \lambda_{ref} \cdot \frac{\lambda_{op}}{\lambda} = \lambda_{ref} \cdot \frac{MTTF_{ref}}{MTTF} = \lambda_{ref} \cdot C
```
````

The advantage of this approach is the increased flexibility, as generic models for different part “families”, e.g. springs, can be tuned to a wide variety of specific part types and applications. Despite this interesting feature, the direct application of the NSWC models for reliability predictions in space applications is not recommended due to the following limitations:

* Base failure rates are from naval/terrestrial sources only and do not reflect the use conditions nor the quality level of mechanical parts used in space,
* The sample size of the data used to derive the base failure rates is unknown and can in some cases be very small {cite:p}`mec-Kowal1994MechanicalSR`,
* The scaling factors are based on the PoF in terrestrial applications, which can in some cases not be applicable in space,
* Scaling factors are based on deterministic relationships, which can lead to a large bias when the effect of the variable entering the scaling factor is highly nonlinear,
* The model output is a constant failure rate, which is often not consistent with the failure mechanisms that have been analysed to derive the scaling factors.

As a result, the NSWC should not be used as a data source for mechanical reliability prediction in space applications. The data can only be used to derive “ballpark” estimates, e.g. for early design phases, for comparison with other methods, or as a prior for {term}`Bayesian inference <Bayesian inference>` updating. 

Beyond this, the NSWCmethod is recommended only as a scaling method for specific part types, allowing to tune statistical estimates from “space relevant” data sources (the NSWC base failure rates should not be used). ). The approach is applicable only if the failure mechanisms that are of relevance in space applications are the same as those considered by the NSWC models, see {numref}`meca_9_5_2` for guidance. 

It is based on the following steps:

* Estimate a new base failure rate with {term}`statistical methods <Statistical method>` using relevant data. The data should be “space relevant” in terms of design, quality level and dominating failure mechanism's, but should not exactly fit the required application.
* Select the parameters from the NSWC handbook method that are needed to scale the new base failure rate to the considered application.
  * Determine scaling factors for the new base failure rate (new “reference conditions”, implicit in the statistical data used),
  * Determine scaling factors for the considered application (“operational conditions”),
  * Determine ratio between the “operational” and “reference” scaling factors.
* The ratios determined in the previous step can now be used as scaling factors to adapt the new base failure rate to the considered application.

```{admonition} Note
:class: note
Only the criticism of the NSWC handbook regarding the space relevance of the base failure rates can be corrected with this procedure. To avoid or reduce potential biases due to the scaling method, it should not be used in case of large deviations between “reference” and “operating” conditions, and physical variables entering the scaling factor calculations should be estimated as realistic mean values. 
```

The implicit assumption of constant failure rates can be mitigated by fitting a model that allows for time dependent failure rates in the first step. The NSWC scaling method can then be applied to adjust the location parameter of the selected time to failure distribution, e.g. as multiplicative factors for the inverse of the Weibull characteristic life.


(meca_9_3_2)=
## Methods

The following methods can be used for the derivation of reliability estimates for mechanical items:

* **Statistical methods** for the derivation of a suitable failure time distribution are applicable provided that relevant statistical data is available in sufficient quantity for the mechanical item under consideration and for comparable operating and environmental conditions. 
* **Physics of failure methods ({term}`PoF`)** based on structural reliability theory and an analysis of the relevant failure mechanisms are the preferred way of modelling when the available data is inappropriate or not sufficient for a pure statistical approach. 
* **Handbook methods** are not the recommended choice for mechanical reliability prediction in space applications, as has been discussed in {numref}`meca_9_3_1_5`, addressing NPRD and NSWC. 
* **A combined approach** based on one of the methods listed above and Bayesian updating with relevant data (additional and independent from the prior estimate) is the preferred approach whenever suitable data is available, but not in sufficient quantity for a pure statistical approach.

Which method is most appropriate depends on the information available to do the prediction, in particular the availability of suitable reliability (or failure) data, and the engineering knowledge regarding the design, the use conditions and the PoF. 

General guidance on method selection is presented in {numref}`Figure_3_2` below. The upper row in the matrix represents {term}`statistical methods <Statistical method>`, the middle row a combined approach with {term}`Bayesian inference <Bayesian inference>` updating, and the lower row either handbook methods or data (NPRD, NSWC) or generally preferred in the absence of statistical data, {term}`structural reliability methods <Structural reliability method>` ({term}`SRM`) based on the {term}`physics of failure <Physics of failure>`s.

More specific recommendations are given in {numref}`meca_9_5`.

```{figure} ../../pictures/figure4_2.png
---
width: 600px
name: Figure_3_2
---
Method selection for mechanical reliability prediction depending on the available input
```

In the following paragraphs, the implementation of the different methods in mechanical domain is briefly discussed, covering all methods listed above. The remainder of this part ({numref}`meca_9_4` and {numref}`meca_9_3_2_1`) focuses largely on the {term}`physics of failure <Physics of failure>` as a basis for mechanical reliability prediction.


(meca_9_3_2_1)=
### {term}`Statistical methods <Statistical method>`

Statistical methods for reliability prediction are in principle domain-independent, and do not require any specific considerations for mechanical parts. However, the following two important reliability characteristics of mechanical parts should be kept in mind when doing the analysis:

* Many mechanical items are prone to premature degradation, requiring a thorough selection of the distributional model. Assuming constant failure rates as a default is not acceptable, especially when the dominating failure mechanisms are known to be time dependent.
* Mechanical items reliability is strongly dependent on the specific design and use conditions. Data from different applications should thus be treated with care, possibly requiring a dedicated PoF modelling to understand the impact of the relevant variables.

The use of statistical methods for mechanical reliability prediction is not discussed any further in the present part; the reader is referred to {ref}`Part 6 – System <sec_sys_handbook>` of this handbook for a discussion of these methods.


(meca_9_3_2_2)=
### Physics of failure methods
The use of {term}`structural reliability methods <Structural reliability method>` for mechanical reliability prediction is discussed in more detail in {numref}`meca_9_6` and {numref}`meca_9_7`. The use of other methods that are based on the {term}`PoF` (not described in this part) is possible, provided that the failure mechanism modelling is accompanied by a suitable quantification of the relevant uncertainties.

(meca_9_3_2_3)=
### Handbook methods
The use of existing reliability handbooks and data sources, especially as a stand-alone method, is generally not recommended for the modelling of mechanical items in space applications. Limitations of NPRD {cite:p}`mec-NPRD-16` and the NSWC {cite:p}`mec-NSWC-11` handbooks are discussed in {numref}`meca_9_3_1_5`, including some guidance on potential uses of these methods, e.g. to derive ball-park estimates for preliminary design or as a prior for a combined approach using Bayesian updating.

(meca_9_3_2_4)=
### Combined approach
Bayesian updating is the recommended method for combining different sources of information for mechanical reliability prediction with independent statistical data. The specific case of Bayesian up-dating for reliability estimates derived with structural reliability methods, using failure data collected e.g. in part level testing, is discussed in {numref}`meca_9_6_5`.However, Bayesian statistics as discussed in {ref}`Part 2 - Methods <methods>` of this handbook are applicable also more generally, e.g. to update preliminary estimates based on handbook data or expert elicitation.
