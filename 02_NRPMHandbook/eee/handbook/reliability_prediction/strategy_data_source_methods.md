<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_4_1)=
# Strategy for data sources and methods selection

The complete strategy and order of preference for the use of different data sources and methods are shown in the following graph.

```{figure} ../../pictures/eee_figure4_1.png
---
width: 600px
name: Figure_1_1
---
Strategy for reliability modelling.
```

**In-Orbit Return experience**

In-Orbit Return data provide the best information concerning failure rates and {term}`failure root causes <Failure root cause>`. As it is difficult to obtain reliable data at component level from In-Orbit Return, it is not possible to use this data for EEE components except in specific cases.

The main limitations are the following:

-   difficulty to collect information from telemetry at component level;

-   low quantity of data in terms of duration and quantity of failures;

-   difficulty to track down the root cause of failure to the component level;

-   lack of failures from similar components in flight.

In order for this kind of information to be usable, it is necessary to make sur that the quantity of parts and the total number of flight hours are high enough for consideration.

In some case, the data obtained this way at component level can be used as a maximum value to be considered as a Worst Case if no other data source is available.

In addition, it is possible to mix these data with data coming from standards or handbooks by the Bayesian method as presented in {numref}`misc_5_6`.

**Model from reliability.space approach for EEE items**

This corresponds to the information obtained through the present handbook. The main methodology used is the FIDES method with some adaptations proposed in each subfamily section.

See {numref}`eee_4_3` for the {term}`Random failures <Random failure>` calculations through FIDES, {numref}`eee_4_5` for the {term}`Systematic failures <Systematic failure>`, {numref}`eee_4_6` for the {term}`wear-out failures <Wear-out failure>` and {numref}`eee_4_7` for the {term}`extrinsic failures <Extrinsic failure>`.

**Model from other methodologies**

As indicated in the previous section, the reliability.space approach for {term}`EEE` items {term}`Random failures <Random failure>` is based on the FIDES methodology.

However, FIDES does not cover all families and subfamilies of components and technologies used in space applications.

For the missing models, a possible solution is to use models developed by other methodologies. The present handbook provides alternate solutions in {numref}`eee_4_4` that should be considered but these methodologies have not been assessed for space applications because there are dedicated to specific industries such as on-ground telecommunications.

It is up to each entity to analyse the possibility to use the models issued from such data sources in the space context.

In addition, if a model coming from a source different from the sources mentioned in this handbook needs to be assessed, it is up to the user to determine its level of applicability for space and the {term}`level of confidence <Level of confidence>`.

**Use of test data from manufacturers**

Manufacturer data generally come from qualification, process monitoring tests or quarterly production data.

These data are generally limited to life testing at die level with test temperature and voltage on the one hand and temperature cycling, temperature and humidity bias at package level on the other hand.

This information is required for high reliability components such as military or space grade components.

The failure rates provided by the manufacturers are relevant for the steady state area of the bathtub curve ({numref}`Figure_1_2`).

The failure rate is calculated with the χ² formula according to the methodology described in the JEDEC document for semiconductor components.

This methodology can be used by similarity for any type of {term}`EEE` components. The confidence level generally used by component manufacturers is 60% and can be 90 or 95% in very specific cases when a higher {term}`level of confidence <Level of confidence>` is required.

Using manufacturer data presents some limitations though:

-   For specific {term}`EEE` components used in space applications, due to the fact that the quantities are low and as the qualification chosen can be different from qualification approach described in the JEDEC methodology, the calculation of the failure rate can be inaccurate;

-   Manufacturers for commercial components generally provide failure rates calculated only for one stress such as temperature; therefore, the failure rate for other stresses such as thermal cycling has to be extrapolated with acceleration laws;

-   Information concerning failure rates for specific stresses such as vibrations is generally not available or only upon specific request.

It is important before taking into account these data to assess its potential applicability for the component considered; indeed, sometimes tests results concern a type of technology that is too wide for the specific need, or the {term}`contributing factors <Contributing factor>` for which it has been modelled might not be the main ones in the specific conditions of use. And it is important to know in which context (environment) these tests have been performed in order to interpret the results as accurately as possible.

**Estimation of reliability from reliability tests**

If no data is available from manufacturers, the user of the {term}`EEE` components under consideration can perform their own reliability tests on these components by using acceleration laws, if the activation energy $\text{E}_{a}$ is known.

The methodology is strictly the same as for performing a life test, generally limited in time and then estimating by interval the failure rate with the $\chi^{2}$ formula. The limitation is generally the quantity of parts to be tested if a low failure rate needs to be addressed. Indeed, the manufacturers of components can cumulate numerous components of the same technology and address failure rates lower than 10 FITs. But for some users, it is more complicated to test large quantities of components for an extensive time so the calculated reliability prediction obtained that way sometimes does not match the targeted reliability figure. Furthermore, each test generally only addresses one or two {term}`failure mechanisms <Failure mechanism>` while a specific {term}`failure mechanism <Failure mechanism>`with different activation energy $\text{E}_{a}$, not considered by the test, can happen during the mission with different stresses and constraints.

**Estimation of reliability through engineering judgment**

If the implementation of reliability tests is impossible due to cost or planning for instance, engineering judgment can be used as a last resort. For instance, it is possible to extrapolate the unknown reliability prediction of a component from a known one if both components are using a similar technology. When using this method, it is important to note and record all assumptions that have been made.

An example of how this engineering judgment can be applied is provided in {numref}`misc_5`, non-standard and holistic methods.
