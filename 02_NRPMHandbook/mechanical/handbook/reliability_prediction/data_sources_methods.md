#  Data sources and methods

The following subsections discuss the inputs and reliability prediction methods introduced in **Chapter 6 (Part II)**, focussing on their use in mechanical domain.

## Inputs

The order of preference for the use of different data sources and inputs for {term}`MECHANICAL PART`s reliability prediction is as follows:

1. {term}`IN-ORBIT RETURN (IOR) DATA`
2. Manufacturer reliability data
3. Test data
4. Analysis of the {term}`FAILURE MECHANISM`s
5. Models from existing data sources


Each input will be briefly discussed below from a mechanical reliability prediction perspective.

Using a data source for reliability prediction – e.g. in-orbit return as the first preference – requires that relevant data is available in sufficient quantity. If this condition is not fulfilled, the next preferred input needs to be considered. Nevertheless, relevant data, even if not available in large enough quantities, can still be used to validate, tune or update the modelling in a combined approach. 

Despite its late appearance in the preference listing given above, a good understanding of the {term}`FAILURE MECHANISM`s driving the (un-)reliability of {term}`MECHANICAL PART`s should always form the basis for the reliability prediction, even if it is only used to decide whether the available data can be used for the prediction.

### Analysis of the {term}`FAILURE MECHANISM`s

A first analysis and understanding of the potential {term}`FAILURE MECHANISM`s for {term}`MECHANICAL PART`s and equipment should generally be available from the design process and should always be considered as an important input for the prediction, even if a pure statistical approach is used to estimate an item’s reliability. The approach described in Sections [4.4](failure_identification_focus.md) and [4.5](method_selection.md) is based on this idea, focussing on the identification of relevant {term}`FAILURE MECHANISM`s although not necessarily requiring {term}`PHYSICS OF FAILURE` methods for the mathematical modelling.

### {term}`IN-ORBIT RETURN (IOR) DATA`

In-orbit return failure data provides valuable information on the in-service reliability performance in space applications. For mechanical equipment, it may in certain cases be possible to track the failure cause down to part level, making the information even more valuable. However, the use of {term}`IN-ORBIT RETURN (IOR) DATA` for reliability prediction is hindered by the small degree of standardization of mechanical items (compared to EEE) and the large effect of the design details and the operational conditions on {term}`MECHANICAL PART` reliability. As a stand-alone input, it will thus be restricted to highly standardized applications. Apart from this, in-orbit return can provide the following information when combined with other inputs:

* Information on observed {term}`FAILURE MODE`s and root causes to select the focus of the prediction
* In-orbit measurements of physical data to model the relevant variables in {term}`PoF` approaches
* Failure/success data to update a model based on other inputs

### Manufacturer reliability data

Mechanical space equipment suppliers are highly specialized companies, delivering their products for many different missions. Manufacturer reliability data can thus be a highly relevant source of information for mechanical reliability prediction. This holds especially for standardized items with a long space heritage, where manufacturer’s in-orbit return (considered in Section ) can be used for the reliability prediction. Also test data available on the manufacturer’s side may be considered. Manufacturer reliability data derived from analysis should be checked for consistency with the methodology presented in this handbook.

Apart from this, more general {term}`MANUFACTURER DATA`, such as design information, material specifications, or equipment level FMEA analyses are also important inputs for reliability predictions of {term}`MECHANICAL PART`s. 

### Test data

Test data for {term}`MECHANICAL PART`s tested at operational conditions would be a relevant source of information for reliability prediction, but is in most cases not available in large enough quantities. Small data samples can be used to calibrate or update models derived from analysis, or to check the modelling assumptions.

Another possible use of test data is for the derivation of physical quantities needed in reliability models based on {term}`PoF`, such as e.g. wear rates or resistances against specific stresses. The advantage is that with this approach test data can be useful even if the test is performed at different than operational conditions and/or the design is not exactly the same as for the flight item. An important limitation is that in practice most items are not tested to failure and therefore the data is censored and less informative for modelling purposes.

Finally, one specific feature of pre-flight acceptance tests should be mentioned: Due to the fact that these tests are performed on the flight item, they can provide relevant information about its strength or resistance against the applied stresses. The fact that the item has passed the tests may be used to exclude lower fractile values of the strength distribution in {term}`PoF` approaches. Note that this “proof load” approach is only valid for {term}`FAILURE MECHANISM`s resulting from peak load effects, and cannot be applied when cumulative stresses are driving failure. More details on the use of proof load test results for reliability prediction can be found e.g. in Error: Reference source not found, .

```{admonition} Todo
:class: todo
Miss ref just above
```

### Models from existing data sources

Two well-known reliability handbooks are presently available providing input data for mechanical reliability prediction: the {term}`NPRD` Error: Reference source not foundand the {term}`NSWC` Error: Reference source not found. Both handbooks cannot be recommended as a stand-alone method for mechanical reliability prediction in space applications, but may be used as a complementary source of information, as will be discussed in the following.

**Non-electronic parts reliability data ({term}`NPRD`)**

```{admonition} Todo
:class: todo
Miss ref just below
```

{term}`NPRD` Error: Reference source not foundis a data source providing part and assembly level failure rate estimates from various sources and industries. Its application is straight-forward when used without extrapolation beyond the covered part types, operational and environmental conditions. Due to the following limitations, it cannot be used as a general reliability data source for mechanical reliability prediction in space applications:

* The coverage of part types used in space and space-graded parts is limited
* Most data come from terrestrial sources, with limited coverage of space applications 
* The information provided is not sufficient to justify extrapolations beyond data coverage
* For assemblies listed, there can be difficulties of interpreting whether the failure rate provided relates to the assembly as a whole, or only to one of its components
* Only industry- and time-averaged failure rate estimates are provided due to the way the data has been collected, which does not allow to derive time-dependant failure rates
* It is unclear which categories of failures are included in the data (e.g. random vs. wear-out)
* Parts of the data presented are very old, as data collection started in the early 1970’s


Despite these drawbacks, {term}`NPRD` may still be used to derive “ballpark” estimates for the reliability of {term}`MECHANICAL PART`s, to be used e.g. in early design phases, as a comparison benchmark for predictions based on other methods, or as a prior that can be updated with relevant data in a {term}`BAYESIAN INFERENCE` approach. Due to the large impact of terrestrial data sources on the summary statistics, it is recommended to search for dedicated data from space applications. 

The confidence in the {term}`NPRD` data strongly depends on its relevance with respect to the part type and quality, the use conditions, the environment and the dominating {term}`FAILURE MECHANISM`s. It may therefore only be used as a reference for specific applications if sufficient justification can be provided that the data is relevant with respect to the part type and quality, the use conditions, the environment and the considered {term}`FAILURE MECHANISM`s.

**Naval Surface Warfare Center ({term}`NSWC`) Reliability Prediction Handbook**

The {term}`NSWC` Handbook for Mechanical Reliability Prediction Error: Reference source not foundprovides models derived from a combined approach similar to the one applied for EEE components in Chapter Error: Reference source not found: Base failure rates, derived from statistical data at reference conditions, are scaled to a specific design and operating conditions with the aid of multiplicative factors accounting for the specificities of material, design and environment. The scaling factors are based on {term}`PoF` relationships to determine the mean time to failure MTTF at reference and operating conditions:


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation 3.1
\lambda = \lambda_{ref} \dot \frac{\lambda_{op}}{\lambda} = \lambda_{ref} \dot \frac{MTTF_{ref}}{MTTF} = \lambda_{ref} \dot C
```
````

The advantage of this approach is the increased flexibility, as generic models for different part “families”, e.g. springs, can be tuned to a wide variety of specific part types and applications. Despite this interesting feature, the direct application of the {term}`NSWC` models for reliability predictions in space applications is not recommended due to the following limitations:

* Base failure rates are from naval/terrestrial sources only and do not reflect the use conditions nor the quality level of {term}`MECHANICAL PART`s used in space
* The sample size of the data used to derive the base failure rates is unknown and may in some cases be very small .
* The scaling factors are based on the {term}`PHYSICS OF FAILURE` in terrestrial applications, which may in some cases not be applicable in space
* Scaling factors are based on deterministic relationships, which may lead to a large bias when the effect of the variable entering the scaling factor is highly nonlinear
* The model output is a constant failure rate, which is often not consistent with the {term}`FAILURE MECHANISM`s that have been analysed to derive the scaling factors
* 
As a result, the {term}`NSWC` should not be used as a data source for mechanical reliability prediction in space applications. The data can only be used to derive “ballpark” estimates, e.g. for early design phases, for comparison with other methods, or as a prior for {term}`BAYESIAN INFERENCE` updating. 

Beyond this, the {term}`NSWC` method is recommended only as a scaling method for specific part types, allowing to tune statistical estimates from “space relevant” data sources (the {term}`NSWC` base failure rates should not be used). The approach is applicable only if the {term}`FAILURE MECHANISM`s that are of relevance in space applications are the same as those considered by the {term}`NSWC` models, see [Table   4 -6](meca_table4_6) in [Section 4.5.2](meca_4_5_2) for guidance. It is based on the following steps:

* Estimate a new base failure rate with statistical methods using relevant data. The data should be “space relevant” in terms of design, quality level and dominating {term}`FAILURE MECHANISM`s, but must not exactly fit the required application.
* Select the parameters from the {term}`NSWC` Handbook method that are needed to scale the new base failure rate to the considered application.
  * Determine scaling factors for the new base failure rate (new “reference conditions”, implicit in the statistical data used)
  * Determine scaling factors for the considered application (“operational conditions”)
  * Determine ratio between the “operational” and “reference” scaling factors
* The ratios determined in the previous step can now be used as scaling factors to adapt the new base failure rate to the considered application.


It should be noted that only the criticism of the {term}`NSWC` Handbook regarding the space relevance of the base failure rates can be corrected with this procedure. To avoid or reduce potential biases due to the scaling method, it should not be used in case of large deviations between “reference” and “operating” conditions, and physical variables entering the scaling factor calculations should be estimated as realistic mean values. 

The implicit assumption of constant failure rates can be mitigated by fitting a model that allows for time dependent failure rates in the first step. The {term}`NSWC` scaling method can then be applied to adjust the location parameter of the selected time to failure distribution, e.g. as multiplicative factors for the inverse of the Weibull characteristic life.

## Methods

The following methods can be used for the derivation of reliability estimates for mechanical items:

* **Statistical methods** for the derivation of a suitable failure time distribution are applicable provided that relevant statistical data is available in sufficient quantity for the mechanical item under consideration and for comparable operating and environmental conditions. 
* **{term}`PHYSICS OF FAILURE` methods ({term}`PoF`)** based on structural reliability theory and an analysis of the relevant {term}`FAILURE MECHANISM`s are the preferred way of modelling when the available data is inappropriate or not sufficient for a pure statistical approach. 
* **Handbook methods** are not the recommended choice for mechanical reliability prediction in space applications, as has been discussed in Section , addressing {term}`NPRD` and {term}`NSWC`. 
* **A combined approach** based on one of the methods listed above and {term}`BAYESIAN INFERENCE` updating with relevant data (additional and independent from the prior estimate) is the preferred approach whenever suitable data is available, but not in sufficient quantity for a pure statistical approach.

Which method is most appropriate depends on the information available to do the prediction, in particular the availability of suitable reliability (or failure) data, and the engineering knowledge regarding the design, the use conditions and the {term}`PHYSICS OF FAILURE`. General guidance on method selection is presented in {numref}`Figure 3.2` below. The upper row in the matrix represents statistical methods, the middle row a combined approach with {term}`BAYESIAN INFERENCE` updating, and the lower row either handbook methods or data ({term}`NPRD`, {term}`NSWC`) or – generally preferred in the absence of statistical data – structural reliability methods ({term}`SRM`) based on the {term}`PHYSICS OF FAILURE`s.
More specific recommendations are given in [Section 4.5](method_selection.md).

(meca_figure4_2)=
```{figure} ../../pictures/figure4_2.png
---
width: 600px
name: Figure 3.2
---
Method selection for mechanical reliability prediction depending on the available input.
```

In the following subsections, the implementation of the different methods in mechanical domain is briefly discussed, covering all methods listed above. The remainder of this chapter ([Sections 4.4](failure_identification_focus.md) and [following](meca_4_3_2_1)) focuses largely on the {term}`PHYSICS OF FAILURE` as a basis for mechanical reliability prediction.

(meca_4_3_2_1)
### Statistical methods

Statistical methods for reliability prediction are in principle domain-independent, and do not require any specific considerations for {term}`MECHANICAL PART`s. However, the following two important reliability characteristics of {term}`MECHANICAL PART`s should be kept in mind when doing the analysis:

* Many mechanical items are prone to premature wear-out, requiring a thorough selection of the distributional model. Assuming constant failure rates as a default is not acceptable, especially when the dominating {term}`FAILURE MECHANISM`s are known to be time-dependent. 
* Mechanical items reliability is strongly dependent on the specific design and use conditions. Data from different applications should thus be treated with care, possibly requiring a dedicated Physics of {term}`FAILURE MODE`lling to understand the impact of the relevant variables.


The use of statistical methods for mechanical reliability prediction is not discussed any further in the present chapter; the reader is referred to **Chapter 6 (Part II)** for a discussion of these methods.

### {term}`PHYSICS OF FAILURE` methods
The use of structural reliability methods for mechanical reliability prediction is discussed in more detail in Sections [4.6](structural_method_input.md) and [4.7](structural_models_equations.md). The use of other methods that are based on the {term}`PHYSICS OF FAILURE` (not described in this chapter) is possible, provided that the {term}`FAILURE MECHANISM` modelling is accompanied by a suitable quantification of the relevant uncertainties.

### Handbook methods
The use of existing reliability handbooks and data sources, especially as a stand-alone method, is generally not recommended for the modelling of mechanical items in space applications. Limitations of the {term}`NPRD` Error: Reference source not foundand {term}`NSWC`  Error: Reference source not foundhandbooks are discussed in Section , including some guidance on potential uses of these methods, e.g. to derive ball-park estimates for preliminary design or as a prior for a combined approach using {term}`BAYESIAN INFERENCE` updating.

```{admonition} Todo
:class: todo
missing 2 refs above
```

### Combined approach
{term}`BAYESIAN INFERENCE` updating is the recommended method for combining different sources of information for mechanical reliability prediction with independent statistical data. The specific case of {term}`BAYESIAN INFERENCE` updating for reliability estimates derived with structural reliability methods, using failure data collected e.g. in part level testing, is discussed in [Section 4.6.5](meca_4_6_5). However, {term}`BAYESIAN INFERENCE` statistics as discussed in **Chapter 7 (Part II)** are applicable also more generally, e.g. to update preliminary estimates based on Handbook data or expert elicitation.
