<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_4_4)=
# Models for specific component types

The reliability.space approach for {term}`EEE` items provides data about models for reliability predictions for some {term}`EEE` components which have no validated models. The specific component types refer to the components which are not included in the {term}`EPPL` {cite:t}`eee-EPPL007-37` or which have no validated models.

(eee_4_4_1)=
## Models from the Telcordia SR-332 handbook

Five opto-electronic components usually used in space applications have no models available in the FIDES guide. These five components are the phototransistor, the photodiode, the laser diode, the laser detector and the laser transceiver. A possible way forward is to use the models provided by the Telcordia SR-332 handbook \[BR-EEE-1\]. However, these models of opto-electronics components have been developed for communication systems on ground. They have never been assessed for space applications and a preliminary investigation and assessment are required to use them for space applications.

```{admonition} Proposition
:class: recommendation

It is proposed to user to apply these models in order to close the gap in covering for these types of components.
```

(eee_4_4_2)=
## Models from the PISTIS project

The PISTIS project is a collaborative study managed by Thales and co-founded by DGA, an entity of the French Ministry of Defence. 14 companies and universities contribute to this study. The main purpose is to improve the knowledge of some innovative components and emerging technologies regarding their reliability and wear-out after long-term ageing. Depending on these results, the second step is to create reliability prediction models for these innovative components.

The results of the PISTIS project have been released after the development of the present methodology. These have been included in the 2021 issue of the FIDES guide.

```{admonition} Proposition
:class: recommendation

The reliability.space consortium has not been able to apply the models presented in this section so it is only proposed to the users to apply these models for their designs.
```

(eee_4_4_2_1)=
### DSM components

{term}`DSM` ({term}`Deep Sub Micron <Deep Sub Micron>`) components are a generic denomination for electronic components for which the size of engraving is smaller than for current commercial components. No clear standard is defined for the size limit under which a component is considered as a {term}`DSM`, but generally this limit is fixed to around 60nm. These components are interesting for space applications because they have a higher power of calculation and can store more data while requiring less room on the board. With the reduction of size, {term}`failure mechanisms <Failure mechanism>` can generally occur with a higher probability and some of the {term}`failure mechanisms <Failure mechanism>` which are quite seldom can occur on {term}`DSM` components with a higher frequency. A challenge for the future is to better identify these {term}`failure mechanisms <Failure mechanism>` and this is an objective of the PISTIS project.

The PISTIS has performed perform long duration tests in order to get failures on tested DSM components, to identify the {term}`failure mechanisms <Failure mechanism>` and then to perform a validated model for the 2021 issue of FIDES. The following tests have been realised:

-   Test in hot temperature of +25°C, +90°C and +115°C on {term}`FPGA`: important drifts after 5 000 hours have been noticed on most of the components due to the Negative Bias Temperature Instability;

-   Test in low temperature of -30°C on {term}`FPGA`: low drift has been noticed on some of the components;

-   Test in hot temperature of +85°C and +125°C on NOR memories of static retention: some components have shown failures during storage at +125°C with failures located on intermetallic of copper bondings;

-   Test in hot temperature of +85°C and +105°C on NOR memories of read / write / erase operations: all components have shown failures at +105°C;

-   Test in hot temperature of +85°C and +125°C on NAND memories of static retention: no component has shown failure during storage at +85°C and +125°C;

-   Test in hot temperature of +25°C, +85°C and +105°C on NAND memories of read / write / erase operations: all components have shown failures at +85°C.

The model proposed in the 2021 issue of FIDES focusses on the main changes vs other Integrated Circuits, ie the wear out failures type.

The {term}`BTI` mechanism has been identified as the main contributor for {term}`degradation <Degradation>` of DSMs.

-   Up to 100°C junction temperature with a duty cycle of 100%, the {term}`FR` related to {term}`BTI` is negligible -\> it remains below 0.1 FIT after 50 years of use.

-   Above 100°C junction temperature, it does become significant.

The recommendation from the FIDES consortium is then:

-   Under 100°C and with $V_{\text{applied}}/V_{\text{nom}}$ \< or = 1.05 -\> the {term}`FR` associated to {term}`BTI` can be negliged

-   Above 100°C and with a ratio $V_{\text{applied}}/V_{\text{nom}}$ \< or = 1.05 -\> the impact needs to be assessed following at table provided in the guide.

-   Between 100°C and 125°C and with a ration $V_{\text{applied}}/V_{\text{nom}}$ \< or = 1.10, a wear out law is provided for inclusion for the {term}`FR` calculation.

A model is also provided for 3D technologies

(eee_4_4_2_2)=
### GaAs component

{term}`GaAs` components are used mainly for microwave and radio-frequency applications. The use of these components is quite recent and convenient for space applications because they have some interesting properties in high frequencies.

The FIDES guide includes models for {term}`GaAs` components for radio-frequency applications. These models are applicable for low power transistors and high power transistors. The model is similar for both categories of transistors, but the basic failure rates are different. FIDES is continuously increasing its database with the tests and feedback from {term}`GaAs` components and data from manufacturers. Even if the quantity of the available data is significant, the intention is to merge these two basic failure rates into only one category that gathers all types of {term}`GaAs` transistors. Otherwise, a synthesis of data from manufacturers of {term}`GaAs` components has provided an activation energy of 2.0eV for {term}`GaAs` components dedicated to radio-frequency. The next step is to realise a model based on this information.

Note: In the 2021 issue of the FIDES guide, some update (Pi Process {term}`HF`/RF, $\lambda_{\text{OTH}}$) has been provided for the {term}`HF`/RF {term}`GaAs` models, providing in particular a new version of $\lambda_{\text{TH}}$ that would require some modelling in order to compare it to {term}`test data <Test data>` and define its applicability.

(eee_4_4_2_3)=
### GaN components

{term}`GaN` components are used mainly for power applications, optical applications, microwave and radio-frequency applications. These components provide great opportunities because they allow mixing components of different technologies for specific system architectures.

The 2009 issue of the FIDES guide does not include {term}`GaN` components for power and radio-frequency. In order to provide models, the PISTIS project is currently on the way to perform long duration tests in order to get failures on their tested {term}`GaN` radio-frequency components to identify the {term}`failure mechanisms <Failure mechanism>` and then to derive a validated model for the 2021 release of FIDES. A synthesis of data from manufacturers of {term}`GaN` components has provided an activation energy of 1.6eV for {term}`GaN` components dedicated to radio-frequency. Tests have been performed with a total duration of more than 60 000 hours at a high temperature of +120°C. Components are still functioning and no failure has been detected yet. The next step is to continue the tests with the aim to get some failures or observations of parameter drift and to identify the failure or wear-out mechanisms. Afterwards, the basic failure rates of these {term}`GaN` components will be estimated with data issued from publications and academic studies.

The models for both {term}`GaN` MMICs and {term}`GaN` transistors are introduced hereafter:

-   Update of the Pi Process {term}`HF`/RF to include questions applicable to the {term}`GaN` technology

-   The general formula is the same as presented for {term}`HF`/RF {term}`GaAs` components

-   $\lambda_{\text{OTH}}$ for {term}`GaN` are provided in the following tables:


```{list-table} Basic failure rates $\lambda_{\text{OTH}}$ for GaN RF/HF components.
:name: eee-table4-199
:header-rows: 1
:widths: 70 30

*   - Type
    - $\lambda_{\text{OTH}}$
*   - {term}`GaN` {term}`HF`/RF transistor /diodes
    - 0.3033
*   - {term}`GaN` MMIC
    - 0.3033
```

-   $C_{\text{sensitivity}}$ for GaN are provided in the following tables:

```{list-table} Induced $C_{\text{sensitivity}}$ factor for GaN RF/HF components.
:name: eee-table4-200
:header-rows: 1
:widths: 70 30

*   - Type
    - $C_{\text{sensitivity}}$
*   - {term}`GaN` HF/RF transistor /diodes
    - 6.9
*   - {term}`GaN` MMIC
    - 6.9
```