<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_8_1)=
# Strategy for data sources and methods selection

The complete strategy and order of preference for the use of different data sources and methods for EEE parts are shown in {numref}`Figure_1_1`.

```{figure} ../../pictures/eee_figure4_1.png
---
width: 600px
name: Figure_1_1
---
Strategy for reliability modelling.
```

```{admonition} Note
:class: note
This flowchart corresponds to the adapted way to proceed for EEE models. It differs from the order presented in {ref}`Part 2 - Methods <methods>` of this handbook, that considers the situation before applying the recommendations of this handbook.
```

```{admonition} Note
:class: note
There might be cases where the manufacturer data provided for specific EEE parts can be considered more suitable than other models, if it applies to the exact same part in the same environmental and use context; it can be either calculated from tests data, field data or with a customised validated model. In that case, this model could come higher in the chart.
```

**In-orbit return experience**

In theory, field return data, also called in-orbit return ({term`IOR`) data in the context of space applications, provide the best information concerning failure rates and failure root causes. But as it is difficult to obtain reliable data at component level from IOR, it is not possible to use this data for EEE components except in specific cases. 

The main limitations for space applications are the following:

*	Lack of failures from similar components in flight,
*	Low quantity of data in terms of duration and quantity of failures, 
*	Difficulty to collect information from telemetry at component level,
*	Difficulty to track down the root cause of failures to the component level.


For this kind of information to be usable, it is necessary to make sure that the quantity of parts and the total number of flight hours are high enough for consideration. In some cases, the data obtained this way at component level can be used as a maximum value to be considered as a worst case if no other data source is available.

In addition, it is possible and recommended in the present handbook, to mix these data with data coming from standards or handbooks by the Bayesian method as presented in {ref}`Part 5 - MIS <sec_misc_handbook>` of this handbook {numref}`misc_5_6`.


**Model proposed in this handbook for EEE items**

This corresponds to the information obtained through the present handbook. The main methodology used is the FIDES 2022 method with some adaptations proposed in each subfamily section, see {numref}`eee_8_3` for the {term}`random failures <Random failure>` (RF) calculations through FIDES, {numref}`eee_8_5` for the {term}`systematic failures <Systematic failure>` (SF), {numref}`eee_8_6` for the {term}`degradation failures <Degradation failure>` (DEG) and {numref}`eee_8_7` for the {term}`extrinsic failures <Extrinsic failure>` (EX).


**Model from other methodologies**

As indicated in the previous paragraph, the proposed approach for EEE items random failures is based on the FIDES 2022 methodology.  However, FIDES 2022 do not cover all families and subfamilies of components and technologies used in space applications. It is up to each entity to analyse the possibility to use the models issued from such data sources in the space context. In addition, if a model coming from a source different from the sources mentioned in this handbook needs to be assessed, it is up to the user to determine its level of applicability for space and the {term}`level of confidence <Level of confidence>`.


**Use of test data from manufacturers**

Manufacturer data generally come from qualification, process monitoring tests or quarterly production data. These data are generally limited to life testing at die level with test temperature and voltage on the one hand and temperature cycling, temperature and humidity bias at package level on the other hand. This information is required for high reliability components such as military or space grade components. The failure rates provided by the manufacturers are relevant for the steady state area of the bathtub curve in ({numref}`Figure_1_2`).

The failure rate is calculated with the χ² formula according to the methodology described in the JEDEC document for semiconductor components.

This methodology can be used by similarity for any type of {term}`EEE` components. The confidence level generally used by component manufacturers is 60% and can be 90 or 95% in very specific cases when a higher level of confidence is required.

Using manufacturer data presents some limitations though:

-   For specific EEE components used in space applications, due to the fact that the quantities are low and as the qualification chosen can be different from qualification approach described in the JEDEC methodology, the calculation of the failure rate can be inaccurate,
-   Manufacturers for commercial components generally provide failure rates calculated only for one stress such as temperature; therefore, the failure rate for other stresses such as thermal cycling has to be extrapolated with acceleration laws,

-   Information concerning failure rates for specific stresses such as vibrations is generally not available or only upon specific request.

It is important before taking into account these data, to assess its potential applicability for the component considered. Indeed, sometimes tests results concern a type of technology that is too wide for the specific need, or the {term}`contributing factors <Contributing factor>` for which it has been modelled might not be the main ones in the specific conditions of use. And it is important to know in which context (environment) these tests have been performed, in order to interpret the results as accurately as possible.


**Estimation of reliability from reliability tests**

If no data is available from manufacturers, the user of the EEE components under consideration can perform their own reliability tests on these components by using acceleration laws, if the activation energy $\text{E}_{a}$ is known.

The methodology is strictly the same as for performing a life test, generally limited in time and then estimating by interval the failure rate with the $\chi^{2}$ formula. The limitation is generally the quantity of parts to be tested if a low failure rate needs to be addressed. Indeed, the manufacturers of components can cumulate numerous components of the same technology and address failure rates lower than 10 FITs. But for some users, it is more complicated to test large quantities of components for an extensive time, so the calculated reliability prediction obtained that way sometimes does not match the targeted reliability figure. Furthermore, each test generally only addresses one or two failure mechanisms while a specific failure mechanism with different activation energy $\text{E}_{a}$, not considered by the test, can happen during the mission with different stresses and constraints.


**Estimation of reliability through engineering judgment**

If the implementation of reliability tests is impossible due to cost or planning for instance, engineering judgment can be used as a last resort. For instance, it is possible to extrapolate the unknown reliability prediction of a component from a known one if both components are using a similar technology. When using this method, it is important to note and record all assumptions that have been made. An example of how this engineering judgment can be applied is provided in {ref}`Part 5 - MIS <sec_misc_handbook>` of this handbook, about standard, non-standard and holistic model {numref}`misc_10_4`, non-standard and holistic methods.
