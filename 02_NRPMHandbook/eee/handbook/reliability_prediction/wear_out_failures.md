<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_8_5)=
# Wear-out failures of EEE components

(eee_8_5_1)=
## Introduction

The importance of the wear-out phenomenon of {term}`EEE` components is linked to the duration of the mission profile of satellites. Generally, satellites have a life duration of 5 to 15 years. Depending on this life duration, electronic equipment is designed with components for which the life duration is longer. However, a majority of the satellites lives longer than expected, and for commercial reasons it can be interesting to extend the lifetime of satellites that are successfully operating in orbit. Knowing and managing the risk of {term}`EEE` components wear out becomes much more relevant in this context.

The estimation of wear-out in space applications is a strategic subject as high requests are currently occurring due to the need to assess the possibility to extend the life duration of the satellites. The life extension could be assessed taking into account qualification and reliability aspects. The assessment of the life extension is needed for business and decommissioning aspects.

(eee_8_5_2)=
## List of main wear-out contributors

All components can be subjected to wear-out due to different phenomena such as material transformation, diffusion mechanisms and intermetallic growth. Generally, for most of them, wear-out will occur only after a very long period of time which is generally much longer than the satellite life. This is the main raison why wear-out is not taken into account in the predictive reliability calculation for {term}`EEE` components. Nevertheless, in some particular cases, with the increase of stress such as temperature, voltage, thermal cycling, ON / OFF cycles and vibrations, wear-out can occur but generally after a duration higher than the life duration of the system.

In the specific case of space applications, cumulated radiation dose can create wear-out on specific technologies. For some {term}`EEE` components of the {term}`EPPL` list, the wear-out occurs in a limited time and is directly due to the technology of these {term}`EEE` components. Some attempts to estimate the wear-out of {term}`EEE` components have been performed in space applications. The {term}`ECSS` document {cite:p}`eee-ECSS-Q-TM-30-12A` provides the list of components with their possible drifts due to ageing depending on temperature. These drifts are based on {term}`test data <Test data>` issued from life tests. Unfortunately, as {term}`test data <Test data>` are not always available, the drifts are provided only for a low quantity of technologies with a subjective confidence.

(eee_8_5_3)=
## List of components subjected to wear-out failures

Among components which are proposed by {term}`ESA` in its {term}`EPPL` {cite:p}`eee-EPPL007-37`, only a few of them can be subjected to wear-out. Examples of such components are listed below:

-   Plastic film capacitors: wear-out could occur but mainly for high voltage capacitors due to the Corona effect, especially when they are used with low derating; the standard ECSS-Q-ST-30-11C {cite:p}`eee-ECSS-Q-ST-30-11C` requires having a maximum 60% of derating, this value is adequate to minimize the likelihood of premature wear-out.

-   Plastic film capacitors: these components are also sensitive to humidity; this is not a concern in orbit but could be taken into account before launching.

-   Tantalum capacitors: wear-out could occur when they are used with low derating; the standard ECSS-Q-ST-30-11C {cite:p}`eee-ECSS-Q-ST-30-11C` requires having a maximum 60% of derating, this value is adequate to minimize the likelihood of premature wear-out.

-   Memories such as Memory PROM, Memory {term}`EPROM`, Memory {term}`EEPROM`, Flash memory, Programmable Logic, Anti fuse {term}`FPGA`, SRAM based {term}`FPGA`, Flash technology: these components are subjected to a limited retention time or a maximum number of write / read cycles depending on the junction temperature; the standard ECSS-Q-ST-30-11C {cite:p}`eee-ECSS-Q-ST-30-11C` requires to determine the endurance of Memory {term}`EPROM`, Memory {term}`EEPROM` and Flash memory by using the data from the manufacturer and estimating the equivalent time by using the Arrhenius' law with an activation energy *E~a~* of +0.6eV.

-   Integrated circuits such as Microwave Monolithic Integrated Circuits: these components should be subjected to a limited cumulated time of use; the standard ECSS-Q-ST-30-11C {cite:p}`eee-ECSS-Q-ST-30-11C` provides values for derating in supply voltage, output current and maximum junction temperature.

-   Deep Sub Micron components: it seems that these components can be subjected to a limited cumulated time of use due to their design and manufacturing, however knowledge on these components is still incomplete and wear-out is very dependent on the type of component, technology, manufacturer or size.

```{admonition} Note
:class: note

This aspect is addressed in FIDES 2021 and explained in  ref eee_8_4_2_1`. 
```

-   Relays and switches such as non-latching relays, latching relays and switches: these components can be subjected to a limited number of switching or number of hours depending on the number of operations.

-   Optoelectronics such as LED, laser diodes, optocouplers: these components can be subjected to a limited number of hours of functioning due to brightness degradation of their optical parts.

-   Power Mosfets: these components can be subjected to a limited cumulated time depending on their design and technologies especially for {term}`GaN` technology; the standard ECSS-Q-ST-30-11C {cite:p}`eee-ECSS-Q-ST-30-11C` provides values of derating in drain to source voltage, gate to source voltage, gate to drain voltage, drain current, power dissipation and maximum junction temperature.

-   Power components submitted to ON / OFF cycles can be affected to specific wear-out effects such as bond lift due to local thermal cycles.

-   Technologies used in semiconductors, integrated circuits and discrete components such as diodes and transistors based on {term}`CMOS`, NMOS or {term}`BiCMOS` can be sensitive to cumulated radiation dose.

In all these cases, the design, the component selection and the qualification should be done according to each technology depending on the stresses of the mission profile. The design should be done to ensure no occurrence of any failure during the life duration.

Creating models of wear-out is necessary to estimate the {term}`degradation of the equipment and the Remaining Useful Life.

(eee_8_5_4)=
## Models for wear-out failures for components and sub-assemblies

The methodologies and standards that provide some models for wear-out of {term}`EEE` components are quite few. Among all of them, the standards FIDES and IEC TR 62380 {cite:p}`eee-IEC-TR-62380` provide some simple models. FIDES only provides wear-out models of sub-assemblies such as screens, keyboards, hard disks, fans and batteries and does not provide any models for {term}`EEE` components. IEC TR 62380 provides wear-out models for some components from the {term}`EPPL` such as relays, switches, optocouplers, LED and laser diodes. These different models are not directly available for space applications as they are not validated and have never been used in a space context. The methodology to estimate wear-out is based on qualification and tests as explained in ref eee_8_5_6` and validated with an example in ref eee_8_5_9`.

(eee_8_5_4_1)=
### Model for wear-out of relays

On pages 84 and 86 of document IEC TR 62380, the wear-out model for relays is mainly based on voltage, current, temperature and the number of commutations per hours. This model is not validated and not applicable for space applications as it is valuable for system with several commutations per hour. Relays on satellites have only few commutations during their entire life and applying the model predicts wear-out after more than 100 years. Currently, the specification of each relay provides the mechanical life duration of the relay depending on the number of commutations. Moreover, a qualification with a margin is always done to ensure that the failure of a relay due to wear-out cannot occur during the life duration of the satellite.

(eee_8_5_4_2)=
### Model for wear-out of switches

On page 91 of document IEC TR 62380, the useful life is estimated as example to 20 000 commutations for normal switches or 100 000 commutations for sensitive switches. This information is not validated whatever the application as it is only provided as example without any equation and any input parameters. Currently, the specification of each switch provides the mechanical life duration of the switch depending on the number of commutations. Moreover, a qualification with a margin is always done to ensure that the failure of a switch due to wear-out cannot occur during the life duration of the satellite.

(eee_8_5_4_3)=
### Model for wear-out of optocouplers

On page 44 of document IEC TR 62380, the wear-out model for optocouplers is mainly based on current, junction temperature, transfer function and efficiency rate. This model is applicable only for steady-state applications with specific conditions of use. In space applications, the optocouplers are used as ON / OFF transients and so, the model is not applicable. However, a qualification with a margin is always done to ensure that the failure of an optocoupler due to wear-out cannot occur during the life duration of the satellite.

(eee_8_5_4_4)=
### Model for wear-out of LEDs

On page 48 of document IEC TR 62380, the wear-out model for LEDs is mainly based on current, junction temperature, transfer function and measurement of flux. Currently, the specification of each LED provides the life duration of the LED depending on the number of hours. This value provided by the manufacturer is considered as valuable and used to estimate the wear-out of a LED in space applications. Moreover, a qualification with a margin is always done to ensure that the failure of a LED due to wear-out cannot occur during the life duration of the satellite.


(eee_8_5_4_5)=
### Model for wear-out of laser diodes

On page 50 of document IEC TR 62380, the wear-out model for laser diodes is mainly based on drift of current and junction temperature. Only qualification with a margin is always done to ensure that the failure of a laser diode due to wear-out cannot occur during the life duration of the satellite.

(eee_8_5_5)=
## Stress factors inducing wear-out failures for EEE components and sub-assemblies

(eee_8_5_5_1)=
### Radiations as a factor of wear-out

In space, radiations are one of the sources for degradation and wear-out of {term}`EEE` components. The Total Ionizing Dose (TID) or Displacement Damage ({term}`DD`) due to non-ionizing elements such as proton, electrons and neutrons are the key factors for the degradation of {term}`EEE` components. The components dedicated to space are developed during their design phase to tolerate space radiations with design for a margin of 2 on the total cumulated dose. The commercial components are generally not designed for the requirements of space industry. So, these components are qualified with an estimation of the total dose received by the {term}`EEE` component during the life of the satellite. A minimum margin factor of 2 on the total cumulated dose measured during qualification is used as a basis for acceptance of these commercial components. This margin is used to consider uncertainties of components and variations in the total radiations dose. If the margin is set between 1.2 and 2, additional qualifications and a risk analysis are generally performed. If the margin is lower than 1.2, components are rejected and not used.

**Model of wear-out for radiations**

The publication {cite:p}`eee-Wang2016AMO` provides a model of Total Ionizing Dose (TID) for space applications. According to standard {cite:p}`eee-MIL-HDBK-814`, the Lognormal distribution is used to define the failure rate due to radiations according to the equation:

 
````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_218
\lambda_{\text{TID}} = - \frac{1}{T} \cdot ln\left\{ 1 - \Phi\left\lbrack \frac{\ln\left( R_{\text{spaceTID}}\left( T \right) \right) - \mu}{\sigma} \right\rbrack \right\}
```
Where:

-   $\lambda_{\text{TID}}$: Failure rate due to radiations in {term}`FIT`;

-   $T$: total time of exposition to radiations;

-   $R_{\text{spaceTID}}$: total ionization dose during time *T* in krad;

-   $\mu$: parameter representing the time of 50% cumulative failures;

-   $\sigma$: standard deviation.
````

An example is provided in this publication {cite:p}`eee-Wang2016AMO` with the estimation of the failure rate due to TID of a lot of 11 {term}`FPGA` which have failed.

This model can be completed with the modelisation defined in publication {cite:p}`eee-Everline2008EstimatingTR` which considers also uncertainty in the Total Ionizing Dose, based on a time-dependent stress strength approach.

This model is a first interesting recommendation for a model of radiations. It needs to be validated to be used in calculation of failure rate due to radiations.

(eee_8_5_5_2)=
### ON / OFF cycling as a factor of wear-out

Satellites are designed with an objective to minimise the consumption of energy. In this way, a mechanism to minimize the consumption of energy is to switch off the equipment when it is not used. As a consequence of this strategy, permanent ON / OFF switches of the equipment are continuously realised. For low Earth orbit satellites, up to 20 ON / OFF cycles per orbit can occur for an equipment leading to up to 200 000 ON / OFF cycles during the lifetime of the satellite. According to the studies from {term}`CNES` {cite:p}`eee-ESCCON` and {cite:p}`eee-JEP001`, these ON / OFF cycles have an effect on bonding wires of integrated circuits. Repetitive switches increase the temperature at the interfaces, and as the coefficients of thermal extensions are different between bonding wires and silicon, cracks appear at the interface. These cracks can lead to a disconnection, followed by a definitive drift or a failure. Wear-out could be addressed by using the process described in ref eee_8_5_9`.

(eee_8_5_5_3)=
### Single atomic oxygen as a factor of wear-out

In space, the single atomic oxygen is present and can generate corrosion on satellite. The atomic oxygen is mainly present for altitudes from 180 to 650km and is due to the dissociation of diatomic oxygen molecules by solar photons. The internal equipment and {term}`EEE` components are not usually affected by single atomic oxygen due to protection and shielding of the satellite. Only some occasional corrosion has been reported without any possibility to make estimation on the influence on wear-out.

(eee_8_5_6)=
## Methodology to estimate the wear-out of EEE components by testing

In case of insufficient data from the manufacturers or no data available, reliability tests could be performed to evaluate the wear-out of {term}`EEE` components. The objective is to perform tailored life tests on components until having a minimum number of parts that fail and ideally 100% of failed parts. The test duration can last several hundred hours to several months or years. Different types of life tests can be performed depending on the {term}`failure mechanisms <Failure mechanism>` that should be revealed. For active {term}`EEE` components with semiconductors, most of the basics are developed in JEDEC standards {cite:p}`eee-JESD-37A`, {cite:p}`eee-ESD-94B` and {cite:p}`eee-JEP148B`. The methods used are generally deterministic.

To assess the wear-out of {term}`EEE` components, it is required to set up a methodology with a global strategy that should be adapted according to the type of technology of the component. This methodology is issued from multiple standards and publications such as {cite:p}`eee-ECSS-Q-ST-30-11C`, {cite:p}`eee-Harper1997PassiveEC` and {cite:p}`eee-robusteness-validation-knowledge-matrix`. The following chart explains the methodology used to estimate wear-out of components and each step of the methodology is explained in details hereafter.

```{figure} ../../pictures/eee_figure4_5.png
---
width: 600px
name: Figure_1_5
---
Methodology used to estimate wear-out of EEE components.
```

(eee_8_5_6_1)=
### Mission profile of satellite and equipment

The first step is to get a clear definition of the mission profile considering all the phases in the life of the equipment. This mission profile can also include the industrial phase with transportation and storage. The mission profile is the basis for a complete analysis of the different constraints applicable to the components. The construction of the mission profile is described in ref eee_8_3_1`. Stresses which are generally considered are temperature, thermal cycling, moisturizing, vibrations and chemical pollution. However, some stresses are not always considered in the mission profile as they have consequences only on the wear-out of equipment. Stresses, such as electromagnetic susceptibility, radiation dose or ON / OFF cycling could be evaluated in order to have a correct appraisal of the quantity of stress that applies on the EEE components. 

(eee_8_5_6_2)=
### Risk analysis and identification of the failure mechanisms

The objective is to identify the technologies sensitive to constraints identified in the mission profile, and leading to possible failures. This risk analysis can be done through construction analysis for identifying the materials of the components, the interfaces inside the components, by using guides such as the JEDEC publications and standards.

For each technology, the possible {term}`failure mechanisms <Failure mechanism>` which can occur on the components should be listed.

The following table provides the most common {term}`failure mechanisms <Failure mechanism>` of {term}`EEE` components submitted to wear-out. The {term}`failure mechanisms <Failure mechanism>` of active components are taken from the standard. For {term}`failure mechanisms <Failure mechanism>` of passive components, the publications and documents are not so consistent. Information can be found in book {cite:p}`eee-robusteness-validation-knowledge-matrix` or in the robustness matrix. The following table lists the main {term}`failure mechanisms <Failure mechanism>` of {term}`EEE` components listed in the {term}`EPPL` which can be affected by wear-out. This matrix is not exhaustive, it indicates some main failures mechanisms which can lead to wear-out of {term}`EEE` components, but other {term}`failure mechanisms <Failure mechanism>` can occur.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-201')" placeholder="Search table...">

```{list-table} List of principal failure mechanisms related to wear-out of EEE components.
:name: eee-table4-201
:header-rows: 1
:widths: 30 10 10 10 10 10 10 10

*   - Failure Mechanisms
    - Plastic Film Capacitor
    - Memories
    - Integrated circuits
    - {term}`DSM` components
    - Relays and switches
    - Opto-electronics
    - Active power components
*   - Time-Dependent Dielectric Breakdown (TDDB)
    - 
    - x
    - x
    - x
    - 
    - (x)
    - (x)
*   - Hot Carrier Injection ({term}`HCI`)
    - 
    - x
    - x
    - x
    - 
    - (x)
    - (x)
*   - Bias Temperature Instability ({term}`BTI`)
    - 
    - x
    - x
    - x
    - 
    - (x)
    - (x)
*   - Electromigration ({term}`EM`)
    - 
    - x
    - 
    - x
    - 
    - (x)
    - (x)
*   - Floating-gate non volatile memory data retention
    - 
    - x
    - 
    - 
    - 
    - 
    - 
*   - Localized Charge trapping Nonvolatile Memory Data retention
    - 
    - x
    - 
    - 
    - 
    - 
    - 
*   - Phase Change Non Volatile Data Retention
    - 
    - x
    - 
    - 
    - 
    - 
    - 
*   - Parameter drift
    - x
    - 
    - 
    - 
    - x
    - x
    - 
*   - Connection failure (bondings lift)
    - x
    - x
    - x
    - x
    - x
    - x
    - 
*   - Cracked dielectric
    - x
    - 
    - 
    - 
    - 
    - 
    - 
*   - Capacitance change
    - x
    - 
    - 
    - 
    - 
    - 
    - 
*   - Contact resistance increase
    - 
    - 
    - 
    - 
    - x
    - 
    - 
*   - Contact contamination
    - 
    - 
    - 
    - 
    - x
    - 
    - 
*   - Mechanical wear-out (fracture / fatigue)
    - 
    - 
    - 
    - 
    - x
    - 
    - 
*   - TID (impact of Total Ionization Dose)
    - 
    - x
    - x
    - x
    - 
    - 
    - (x)
```

The datasheet of the components and other information from the component manufacturer could be used to get information about the {term}`failure mechanisms <Failure mechanism>`. Particularly, the application notes, the possible use of reliability models and the tests performed are a good basis for evaluating the risk of wear-out. It could be difficult to get such information from the manufacturer. Only the qualification test results are available generally using trunked test, often limited to 1000 hours. In such a case, only the estimation of the constant failure rate is available, considering the flat part of the bathtub curve. For integrated circuits qualified with {term}`AEC-Q <AEC-Q>` automotive grade, the standard {cite:p}`eee-AEC-Q100` describes specific tests that must be done when a new technology of semiconductor is introduced. However, this information is generally only available upon request to the manufacturer. The failures mechanisms covered are the Hot Carrier Injection ({term}`HCI`), the Negative Bias Temperature Instability (NBTI) and the Stress Migration (SM) specific to semiconductors. The following table is an extract from standard {cite:p}`eee-AEC-Q100` listing the tests to perform for some {term}`failure mechanisms <Failure mechanism>`. The manufacturer has to fill the cells with number of tested parts, number of lots, test method and test acceptance criteria.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_202')"
    placeholder="Search table...">

```{list-table} Extract of the standard [BR_EEE_7] showing reliability tests addressing wear-out.
:name: eee-table4-202

* - <table class="myTable" id="eee_table4_202">
        <thead>
            <tr>
                <th colspan="9"><strong>Die fabrication reliability tests</strong></th>
            </tr>
            <tr>
                <th><strong>Stress</strong></th>
                <th><strong>ABV</strong></th>
                <th><strong>#</strong></th>
                <th><strong>Notes</strong></th>
                <th><strong>Sample size / lot</strong></th>
                <th><strong>No. of lots</strong></th>
                <th><strong>Accept. criteria</strong></th>
                <th><strong>Test method</strong></th>
                <th><strong>Additional requirements</strong></th>
            </tr>
        </thead>
        <tr>
            <td>Hot Carrier Injection</td>
            <td>HCI</td>
            <td>D3</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td rowspan="3">The data, test method, calculations and internal criteria should be available to the user upon
                request
                for new technologies</td>
        </tr>
        <tr>
            <td>Negative bias temperature instability</td>
            <td>NBTI</td>
            <td>D4</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Stress migration</td>
            <td>SM</td>
            <td>D5</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </table>
```

**Specific case of the solder joints**

The {term}`random failure <Random failure>` rates of the solder joints are taken into account in FIDES methodology. Concerning the wear-out, solder joints are affected by creep fatigue due to temperature cycling and vibrations. Some diffusion mechanisms and intermetallic growth can also occur at high temperatures. Moreover, all of these mechanisms can be combined all together. As previously mentioned, the reliability of the solder joints is impacted by the thermal mechanical constraints induced by the mismatch of the Coefficients of Thermal Expansion ({term}`CTE`) of the different materials used at board and component level. Among the materials, the type and quality of solder alloy also has an impact.

When new technologies of solder, substrate or components packaging are introduced, it is strongly recommended to perform reliability tests such as thermal cycling tests and vibration tests in order to determine the Time To Failure of the assembly at board level. The ref eee_8_5_6_3` provides formulas for acceleration factors currently used for the assessment of solder joints reliability based on the Coffin-Manson and Norris-Landzberg laws.

(eee_8_5_6_3)=
### Tailored reliability life test definition and realization of tests

According to the {term}`failure mechanisms <Failure mechanism>` underlined during the risk analysis and the mission profile study, the goal of this analysis is to define a set of tests that follow this pattern:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_203')"
    placeholder="Search table...">

```{list-table} Example of matrix showing the correspondence between failures mechanisms and stresses.
:name: eee-table4-203

* - <table class="myTable" id="eee_table4_203">
        <thead>
            <tr class="header">
                <th rowspan="2"><strong>Failure mechanisms From technologies</strong></th>
                <th colspan="5"><strong>From mission profile</strong></th>
            </tr>
            <tr>
                <td><strong>Temperature</strong></td>
                <td><strong>Current</strong></td>
                <td><strong>Voltage</strong></td>
                <td><strong>Radiations</strong></td>
                <td><strong>Other stress</strong></td>
            </tr>
        </thead>
        <tr>
            <td>Electromigration (EM)</td>
            <td>x</td>
            <td>x</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Time-Dependent Dielectric Breakdown (TDDB)</td>
            <td>x</td>
            <td></td>
            <td>x</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Hot carrier injection (HCI)</td>
            <td>
                <p>x</p>
                <p>Low temperature</p>
            </td>
            <td></td>
            <td>x</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Total ionisation dose (TID)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>x</td>
            <td></td>
        </tr>
        <tr>
            <td>Other failure mechanism</td>
            <td>x</td>
            <td></td>
            <td></td>
            <td></td>
            <td>x</td>
        </tr>
    </table>
```

Based on this matrix, a specific test plan can be built by considering the relevant stresses from the mission profile.

The tests could be done with:

-   Individual stress, recommended if the interaction between the constraints is unknown;

-   Mixed stresses, as it is described for electromigration with temperature and current.

When possible, the tests should be done with accelerated conditions versus the conditions from the mission profile in order to reduce the test time. This is performed by using acceleration factors.

(eee_8_5_7)=
## Calculation of acceleration factors

The acceleration factors (see ref eee_8_3_1_13`, ref eee_8_3_1_14`, ref eee_8_3_1_15`, ref eee_8_3_1_16` for the different relevant acceleration factors) use degradation laws generally well known for {term}`EEE` components and described in document {cite:p}`eee-JEP122H`. The general laws with a single parameter can be used for most of the more useful stresses such as the Arrhenius' law for temperature, the Eyring's law and the inverse power laws for voltage and current. The Coffin-Manson's law is used for thermal and mechanical stresses. More complex laws with more than one parameter can also be used such as Peck's model for both temperature and humidity, the Norris-Landzberg's law for solder joints and the Black's law for electromigration {cite:p}`eee-SSB-1.003`.

(eee_8_5_7_1)=
### Inverse power law

When temperature does not operate on a {term}`failure mechanism <Failure mechanism>`, an inverse power law is generally used. The inverse power law is an empirical law with general formulation:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_219
\text{AF}_{\text{IPL}} = \left( \frac{S_{s}}{S_{u}} \right)^{m}
```
where:

-   $S_{s}$: Stress in accelerated conditions;

-   $S_{u}$: Stress in use conditions;

-   $m$: empirical exponent.
````

The exponent $m$ should be defined by doing tests with different conditions of stress. The stresses are generally voltage or current, but other stresses can be used.

The Eyring's law is an example of an inverse power law for voltage with:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_220
\text{AF}_{\text{Ey}} = \left( \frac{V_{s}}{V_{u}} \right)^{m}
```
where:

-   $V_{s}$: Voltage in accelerated conditions;

-   $V_{u}$: Voltage in use conditions;

-   $m$: empirical exponent.
````

(eee_8_5_7_2)=
### Arrhenius’ law for stress due to temperature

The High Temperature Operating Life test is a test that combines high temperature with polarization of the {term}`EEE` components. The acceleration factors are estimated from the Arrhenius' law and are depending on the activation energy of the materials.

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_221
\text{AF}_{\text{Ar}} = exp\left\lbrack - \frac{E_{a}}{k} \cdot \left( \frac{1}{273 + T_{s}} - \frac{1}{273 + T_{u}} \right) \right\rbrack
```
where:

-   $E_{a}$: activation energy of the desired {term}`failure mechanism <Failure mechanism>` in eV;

-   $k$: Boltzmann constant equal to 8.62.10^-5^;

-   $T_{s}$: use temperature in °C;

-   $T_{u}$: stress test temperature in °C.
````

As the activation energy $E_{a}$ is often unknown, some studies such as the documents {cite:p}`eee-JEP122H`, {cite:p}`eee-Livingston2000` and {cite:p}`eee-JESD-202` provide the activation energies $E_{a}$ of most common {term}`failure mechanisms <Failure mechanism>`. Otherwise, the value of $E_{a}$=0.7eV is generally used as a default value. This assumption could be validated by tests according to ref eee_8_5_8`.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_204')"
    placeholder="Search table...">

```{list-table} Example of activation energies $E_{a}$ issued from document [BR-EEE-26].
:name: eee-table4-204

* - <table class="myTable" id="eee_table4_204">
        <thead>
            <th colspan="2"><strong>General failure mechanism class</strong></th>
            <th><strong>Minimum (eV)</strong></th>
            <th><strong>Typical (eV)</strong></th>
            <th><strong>Maximum (eV)</strong></th>
        </thead>
        <tr>
            <td colspan="2">Surface / Oxide</td>
            <td>0.75</td>
            <td>1.0</td>
            <td>1.40</td>
        </tr>
        <tr>
            <td colspan="2">Charge loss (dynamic memory)</td>
            <td>0.5</td>
            <td>0.6</td>
            <td>1.30</td>
        </tr>
        <tr>
            <td rowspan="2">Dielectric breakdown</td>
            <td>Field &gt; 0.04µm thick</td>
            <td>0.30</td>
            <td>0.3</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td>Field ≤ 0.04µm thick</td>
            <td>0.28</td>
            <td>0.7</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td rowspan="3">Metallization</td>
            <td>Electromigration (aluminium, alloys and multi-layer aluminium)</td>
            <td>0.5</td>
            <td>0.6</td>
            <td>0.7</td>
        </tr>
        <tr>
            <td>Corrosion - chlorine</td>
            <td>0.53</td>
            <td>0.70</td>
            <td>0.95</td>
        </tr>
        <tr>
            <td>Corrosion - Phosphorus</td>
            <td>0.30</td>
            <td>0.53</td>
            <td>0.80</td>
        </tr>
        <tr>
            <td rowspan="2">Wafer fabrication</td>
            <td>Chemical contamination</td>
            <td>1.00</td>
            <td>1.00</td>
            <td>1.00</td>
        </tr>
        <tr>
            <td>Silicon / crystal defects</td>
            <td>0.30</td>
            <td>0.50</td>
            <td>0.50</td>
        </tr>
    </table>
```

(eee_8_5_7_3)=
### Coffin-Manson and Norris-Landzberg’s laws for thermal-mechanical stress

The Thermal Variation test is a test with rapid change of temperature of the components from, for example, -40 to +110°C. This test could be performed with temperatures within the range of minimum and maximum temperatures specified for the components. The acceleration factors are based on the Coffin-Manson's law, or with its evolution of the Norris-Landzberg's law that combines thermal variation and maximum temperature. The activation energy and the power of the Coffin-Manson's law are also based on the different types of materials of the components.

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_222
\text{AF}_{\text{NoLa}} = \left( \frac{{\mathrm{\Delta}T}_{s}}{{\mathrm{\Delta}T}_{u}} \right)^{m} \cdot \left( \frac{F_{u}}{F_{s}} \right)^{q} \cdot exp\left\lbrack - \frac{E_{a}}{k} \cdot \left( \frac{1}{273 + T_{s_{\max}}} - \frac{1}{{273 + T}_{u_{\max}}} \right) \right\rbrack
```
where:

-   $E_{a}$: activation energy of the desired {term}`failure mechanism <Failure mechanism>` in eV;

-   $k$: Boltzmann constant equal to 8.62.10^-5^;

-   $T_{u_{max}}$: maximum temperature in use in °C;

-   $T_{s_{max}}$: maximum temperature in stress in °C;

-   $\Delta T_{s}$: temperature difference in stress in °C;

-   $\Delta T_{u}$: temperature difference in use in °C;

-   $F_{s}$: frequency of cycles in stress;

-   $F_{u}$: frequency of cycles in use;

-   $m$: coefficient related to the components;

-   $q$: coefficient related to cycling frequency = 0.3.
````

For the {term}`failure mechanisms <Failure mechanism>` of solder joints, the value of the activation energy $E_{a}$ is 0.1216eV, the coefficient related to the components $m$ is 2 for tin lead solder and 2.6 for lead free alloy. For other materials, different studies have been performed to determine the coefficient related to the components $m$. These studies are resumed in documents {cite:p}`eee-SSB-1.003` and {cite:p}`eee-Livingston2000` and presented in the following table:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-205')" placeholder="Search table...">

```{list-table} Examples of coefficient related to the components m issued from document [BR-EEE-26].
:name: eee-table4-205
:header-rows: 1
:widths: 30 60 10

*   - Authors
    - Materials
    - $m$
*   - Halford
    - 316 stainless steel
    - 1.5
*   - Morrow
    - 316 SS, WaspAlloy, 4340 Steel
    - 1.75
*   - Norris Landzberg
    - Solder (97Pb / 3Sn) crossing 30°C
    - 1.9
*   - Kotlowicz
    - Solder (37Pb / 63Sn) crossing 30°C
    - 2.27
*   - Li, Hall
    - Solder (37Pb / 63Sn) T < 30°C
    - 1.2
*   - Li, Hall
    - Solder (37Pb / 63Sn) T > 30°C
    - 2.7
*   - Mavori
    - Solder (37Pb / 3Ag and 91Sn / 9Zn)
    - 2.4
*   - Scharr
    - Cu and leadframe allows (TAB)
    - 2.7
*   - Dittmer
    - All wire bonds
    - 3.5
*   - Dune, McPherson
    - Au4Al fracture in wire bond
    - 4.0
*   - Peddada, Blish
    - PQFP delamination / bonds failure
    - 4.2
*   - Mischke
    - ASTM 2024 Aluminium alloy
    - 4.2
*   - Hatanka
    - Copper
    - 5.0
*   - Blish
    - Au wire downbond heel crack
    - 5.1
*   - Egashira
    - ASTM 6061 Aluminium alloy
    - 6.7
*   - Blish
    - Alumina fracture – Bubble memory
    - 5.5
*   - Zelenka
    - Interlayer dielectric cracking
    - 5.5±0.7
*   - Hagge
    - Silicon fracture
    - 5.5
*   - Dune, McPherson
    - Si fracture (“cratering”)
    - 7.1
*   - Blish, Vaney
    - Thin film cracking
    - 8.4
```

(eee_8_5_7_4)=
### Hallberg and Peck’s model for stresses due to temperature and humidity

The Damp Heat test is a test with a combination of temperature and humidity, generally 85°C and 85%RH (Relative Humidity) with polarization of the components or 60°C and 93%RH without polarization of the components. The acceleration factors are based on the Peck model. The activation energy and the power of the humidity are also based on the different types of materials of the components.

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_223
\text{AF}_{\text{Pe}} = \left( \frac{\text{RH}_{s}}{\text{RH}_{u}} \right)^{r} \cdot exp\left\lbrack - \frac{E_{a}}{k} \cdot \left( \frac{1}{273 + T_{s}} - \frac{1}{273 + T_{u}} \right) \right\rbrack
```
where:

-   $E_{a}$: activation energy of the desired {term}`failure mechanism <Failure mechanism>` in eV;

-   $k$: Boltzmann constant equal to 8.62.10^-5^;

-   $T_{u}$: maximum temperature in use in °C;

-   $T_{s}$: maximum temperature in stress in °C;

-   $\text{RH}_{u}$: relative humidity in use in %;

-   $\text{RH}_{s}$: relative humidity in test in %;

-   $r$: humidity coefficient.
````

According to document {cite:p}`eee-JEP122H`, the value of activation energy $E_{a}$ is 0.8eV and the humidity coefficient $r$ is 2.66.

(eee_8_5_7_5)=
### Black’s law for electromigration

With this law described in document {cite:p}`eee-SSB-1.003`, the main difficulty is to determine the unknown parameters and especially the activation energy $E_{a}$, and power coefficient $n$. Therefore, it is often necessary to perform several tests with different conditions of stress. This is the case for this example of the Black's law for electromigration on semiconductors {cite:p}`eee-SSB-1.003`. The procedure to define the parameters of the law is described in document {cite:p}`eee-IEC-61649`. The formula of the Black's law is the following:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_224
\text{AF}_{\text{Bl}} = \left( \frac{I_{s}}{I_{u}} \right)^{n} \cdot exp\left\lbrack - \frac{E_{a}}{k} \cdot \left( \frac{1}{273 + T_{s}} - \frac{1}{273 + T_{u}} \right) \right\rbrack
```
where:

-   $E_{a}$: activation energy of the desired {term}`failure mechanism <Failure mechanism>` in eV;

-   $k$: Boltzmann constant equal to 8.62.10^-5^;

-   $T_{u}$: maximum temperature in use in °C;

-   $T_{s}$: maximum temperature in stress in °C;

-   $I_{u}$: current in use in A;

-   $I_{s}$: current in test in A;

-   $n$: current coefficient.
````

(eee_8_5_8)=
## Test data analysis

(eee_8_5_8_1)=
### Degradation model analysis

On a reliability life test, it is essential to validate the degradation laws and their related parameters. The main degradation models for {term}`EEE` components are detailed in the previous ref eee_8_5_6_3`. The model is related to the {term}`failure mechanisms <Failure mechanism>` but the parameters of the model are related to the stress.

Thus, each failure should be physically analysed in order to identify the {term}`failure mechanism <Failure mechanism>`. However, different cases can occur:

-   If the {term}`failure mechanism <Failure mechanism>` is the one which is expected in the test definition, the chosen model is validated;

-   If the {term}`failure mechanism <Failure mechanism>` is different from the one which is expected but the related degradation model and parameters are known, the parameters previously defined in the test plan should be reviewed;

-   If the {term}`failure mechanism <Failure mechanism>` is undefined but the degradation law is suspected to be sound, a second test should be carried out with a different stress level;

In any cases, the determination of the parameters of the model is realized by analysing the results of the tests by considering the deterministic models as described in ref eee_8_5_8_2`. However, if neither the mechanism nor the degradation model is accepted, an experimental model should be defined and determined as described in ref eee_8_5_8_3`.

(eee_8_5_8_2)=
### Deterministic models

If the degradation model is presumed to be an inverse power law or an Arrhenius' law, so with one parameter to determine, the experimentation is based on the replication of the life test with two different stress levels. Then, considering that the assumption of the degradation model is strictly the same for the two tests, the parameters of the model can be identified.

For the Arrhenius' law, the activation energy $E_{a}$ can be found with the formula:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_225
E_{a} = k \cdot \frac{\ln\left( t_{f1} \right) - ln\left( t_{f2} \right)}{\frac{1}{273 + T_{1}} - \frac{1}{273 + T_{2}}}
```
where:

-   $k$: Boltzmann constant equal to 8.62.10^-5^;

-   $t_{f1}$ and $t_{f2}$: observed time to failure (with only one part for each stress level) or average time to failure (with several parts for each stress level) respectively at temperatures $T_{1}$ and $T_{2}$ in hours;

-   $T_{1}$ and $T_{2}$: test temperatures in °C.
````

For the inverse power law, the empirical exponent *m* can be found with the formula:


````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_226
m = \frac{ln\left( \frac{t_{f2}}{t_{f1}} \right)}{ln\left( \frac{S_{2}}{S_{1}} \right)}
```
````

If the model is based on two parameters as the Black's law or Halberg-Peck's model or if the model is based on more than two parameters as the Norris-Landzberg's model, the quantity of tests could be increased accordingly.

If the sampling is large enough, a statistical approach can be added and the expected life time estimated with probability as depicted here after:

```{figure} ../../pictures/eee_figure4_6.png
---
width: 600px
name: Figure_1_6
---
Two stress levels deterministic-probabilistic approach.
```

(eee_8_5_8_3)=
### Experimental models

When the {term}`failure mechanism <Failure mechanism>` and the degradation model are unknown, the degradation should be followed during the test and the results, drift or failures, plotted in the most suitable mathematical model.

The potential two-parameter models for {term}`EEE` components degradation are:

-   The linear model:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_227
\text{Deg}\left( t \right) = b + \frac{t}{a}
```
````

-   The power model:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_228
\text{Deg}\left( t \right) = \frac{1}{b \cdot t^{a}}
```
````

-   The exponential model:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_229
\text{Deg}\left( t \right) = b \cdot exp\left( a \cdot t \right)
```
````

-   The logarithmic model:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_230
\text{Deg}\left( t \right) = b + a \cdot ln(t)
```
````

A third parameter can be useful for degradation models: the time shift. This parameter is added when the degradation starts after a time delay $\tau$. The models become:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_231
\text{Deg}\left( t \right) = Model\left( t - \tau \right)
```
````

An example is provided in ref eee_8_5_9`.

(eee_8_5_8_4)=
### Failure distribution

Once the tests have shown {term}`wear-out failures <Wear-out failure>`, a suitable failure distribution which fits to the wear-out phenomenon of the components has to be determined.

The third part of the bathtub curve can be represented by several potential distributions, see ref methodologies` for details. The most common used distributions for the wear-out of {term}`EEE` components are the Weibull distribution with two or three parameters (introducing a shift *τ* in the two-parameter model $f(t-\tau)$), and the Lognormal distribution.

The Weibull distribution is often used to model "weakest link" failures such as dielectric breakdown and thermo mechanical failures due to solder joints degradation {cite:p}`eee-JEP122H`. The complete methodology to define a Weibull distribution model is provided in document {cite:p}`eee-ADS-RPDSM-FR`.

For the Lognormal distribution, the failure rate starts increasing exponentially up to a maximum and then decreases. The Lognormal distribution is generally used for chemical degradation such as corrosion or for some semiconductor failure mechanisms as electromigration (EM). Due to its mathematical formula, the MTTF of a Lognormal distribution is always longer than the MTTF of a Weibull distribution. Documents {cite:p}`eee-JEP122H` and {cite:p}`eee-JESD-37A` provide the methodology to define the Lognormal distribution.

**Combination of distributions**

The combination of the second and third part of the bathtub curve is necessary to go beyond the {term}`random failures <Random failure>` and to enlarge to the ageing of {term}`EEE` components in the definition of the failure rate. Then, the random and {term}`wear-out failures <Wear-out failure>` are considered inside the same model. This approach is described in ref sec_sys_handbook` with three different models mixing the exponential distribution and the wear-out distribution of {term}`EEE` components.

(eee_8_5_9)=
## Application to wear-out of an operational amplifier due to radiation dose

The tests conducted on a precision operational amplifier OP27A from Analog Devices show that some parameters of the component are fluctuating with the total dose of radiations. During the test, 40 operational amplifiers with 4 different date codes have been subjected to radiation of 360rad/h during a total duration of 278 hours leading to a total dose of 100krad. Some of the operational amplifiers are biased during the test, others are not biased.

```{figure} ../../pictures/eee_figure4_7.png
---
width: 600px
name: Figure_1_7
---
Functional block diagram of Operational amplifier OP27.
```

The measurements of the input bias currents $Ib+$ and $Ib-$ on pins 3 and 2 are inside the specification of ±40ns until reaching a total dose of 20krad. After this threshold, the values are diverting with the accumulation of dose. However, the behaviour of changes is considerably different if the parts are biased or unbiased during the tests. The conclusion of these tests is that transistors Q1A, Q1B, Q2A and Q2B of operational amplifier OP27 are sensitive to radiations, especially when they are not power supplied. As the inverting and not inverting voltages are compensating each other, there is no impact on the output gains of the operational amplifiers. In fact, the gains $Avs+$ and $Avs-$ are always higher than the minimum value of 120dB, but gains are not changing much with the accumulation of dose as their values are always inside the limits of 120 and 135dB.

To estimate the wear-out of the operational amplifier OP27 with accumulation of dose, a model of degradation is realized depending on the total dose. The extrapolation is based on the degradation of the operational amplifier based on the following equation:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_232
\text{Deg}\left( I_{b} \right) = \left( \begin{matrix}
  100 \cdot \left( 1 - \frac{40}{Ib +} \right) \\           
  \text{and} \\                                               
  100 \cdot \left( 1 + \frac{40}{Ib -} \right) \\           
  \end{matrix} \right)
```
````

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_206')"
    placeholder="Search table...">

```{list-table} Degradation of input current of operational amplifiers.
:name: eee-table4-206

* - <table class="myTable" id="eee_table4_206">
        <thead>
            <tr>
                <th rowspan="2"><strong>Total dose in krad</strong></th>
                <th colspan="4"><strong>Input current in nA</strong></th>
                <th colspan="4"><strong>Degradation of input current in %</strong></th>
            </tr>
            <tr>
                <th><strong><em>Ib+<br />
                        </em>biased</strong></th>
                <th><strong><em>Ib-</em><br />
                        biased</strong></th>
                <th><strong><em>Ib+</em> unbiased</strong></th>
                <th><strong><em>Ib-</em> unbiased</strong></th>
                <th><strong><em>Ib+<br />
                        </em>biased</strong></th>
                <th><strong><em>Ib-</em><br />
                        biased</strong></th>
                <th><strong><em>Ib+</em> unbiased</strong></th>
                <th><strong><em>Ib-</em> unbiased</strong></th>
            </tr>
        </thead>
        <tr>
            <td>0</td>
            <td>40.000</td>
            <td>-40.000</td>
            <td>40.000</td>
            <td>-40.000</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
        </tr>
        <tr>
            <td>5</td>
            <td>40.000</td>
            <td>-40.000</td>
            <td>40.000</td>
            <td>-40.000</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
        </tr>
        <tr>
            <td>10</td>
            <td>40.000</td>
            <td>-40.000</td>
            <td>40.000</td>
            <td>-40.000</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
        </tr>
        <tr>
            <td>15</td>
            <td>40.000</td>
            <td>-40.000</td>
            <td>40.000</td>
            <td>-40.000</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
        </tr>
        <tr>
            <td>20</td>
            <td>40.000</td>
            <td>-40.000</td>
            <td>40.000</td>
            <td>-40.000</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
        </tr>
        <tr>
            <td>25</td>
            <td>40.476</td>
            <td>-45.814</td>
            <td>92.363</td>
            <td>-98.777</td>
            <td>1.2</td>
            <td>12.7</td>
            <td>56.7</td>
            <td>59.5</td>
        </tr>
        <tr>
            <td>30</td>
            <td>60.847</td>
            <td>-66.894</td>
            <td>175.981</td>
            <td>-180.615</td>
            <td>34.3</td>
            <td>40.2</td>
            <td>77.3</td>
            <td>77.9</td>
        </tr>
        <tr>
            <td>60</td>
            <td>164.960</td>
            <td>-174.012</td>
            <td>542.212</td>
            <td>-539.867</td>
            <td>75.7</td>
            <td>77.0</td>
            <td>92.6</td>
            <td>92.6</td>
        </tr>
        <tr>
            <td>80</td>
            <td>207.992</td>
            <td>-217.048</td>
            <td>693.939</td>
            <td>-687.488</td>
            <td>80.8</td>
            <td>81.6</td>
            <td>94.2</td>
            <td>94. 2</td>
        </tr>
        <tr>
            <td>100</td>
            <td>252.403</td>
            <td>-261.319</td>
            <td>923.365</td>
            <td>-921.772</td>
            <td>84.1</td>
            <td>84.7</td>
            <td>95.7</td>
            <td>95.7</td>
        </tr>
    </table>
```

```{figure} ../../pictures/eee_figure4_8.png
---
width: 600px
name: Figure_1_8
---
Behaviour of input bias current Ib+ of operational amplifier OP27.
```

```{figure} ../../pictures/eee_figure4_9.png
---
width: 600px
name: Figure_1_9
---
Behaviour of input bias current Ib- of operational amplifier OP27.
```

```{figure} ../../pictures/eee_figure4_10.png
---
width: 600px
name: Figure_1_10
---
Behaviour of gain Avs+ of operational amplifier OP27.
```

```{figure} ../../pictures/eee_figure4_11.png
---
width: 600px
name: Figure_1_11
---
Behaviour of gain Avs- of operational amplifier OP27.
```

The following graph represents the raw efficiency of the operational amplifiers depending on the total dose:

```{figure} ../../pictures/eee_figure4_12.png
---
width: 600px
name: Figure_1_12
---
Degradation of input current of operational amplifier OP27.
```

The most convenient degradation model is clearly based on an evolution of the exponential model. The other models such as the linear, power and logarithmic model cannot fit to these curves. The degradation model is the following:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_233
\text{Deg}\left( \text{Dose} \right) = 1 - exp\left\lbrack - a \cdot max(Dose - 20;0) \right\rbrack
```
````

```{list-table} Characteristics of the exponential model to the degradation data.
:name: eee-table4-207
:header-rows: 1
:widths: 25 25 25 25

*   - Models
    - Parameters and LMS
    - Ib biased
    - Ib unbiased
*   - Exponential model
    - Parameter a
    - 0.0319
    - 0.1620
*   - Exponential model
    - LMS
    - 0.06
    - 0.02
```

For the exponential model, the equations of degradation in percentage for each unit are the following:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_234
\text{Deg}_{\text{biased}}\left( \text{Dose} \right) = 1 - exp\left\lbrack - 0.0319 \cdot max(Dose - 20;0) \right\rbrack
```
````

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_235
\text{Deg}_{\text{unbiased}}\left( \text{Dose} \right) = 1 - exp\left\lbrack - 0.1620 \cdot max(Dose - 20;0) \right\rbrack
```
````

Drawing of the efficiency based on these exponential models provides the following graphs for a total dose of 200krad:

```{figure} ../../pictures/eee_figure4_13.png
---
width: 600px
name: Figure_1_13
---
Estimation of the degradation of input current of operational amplifier OP27.
```

The wear-out of the operational amplifier is considered as not acceptable for a certain level of degradation. This level of degradation is depending on the satellite and its application. In this example, not acceptable levels of degradation of 10% to 99% are considered. For each level and for biased and unbiased operational amplifiers, the predicted dose of radiation to get failure is calculated in the following table:

```{list-table} Predicted dose of radiation to failure for each level of degradation.
:name: eee-table4-208

* - <table class="myTable" id="eee_table4_208">
        <thead>
            <tr>
                <th rowspan="2"><strong>Operational amplifier</strong></th>
                <th colspan="10"><strong>Predicted dose of radiation to failure in krad for percentage of degradation</strong></th>
            </tr>
            <tr>
                <th><strong>10%</strong></th>
                <th><strong>20%</strong></th>
                <th><strong>30%</strong></th>
                <th><strong>40%</strong></th>
                <th><strong>50%</strong></th>
                <th><strong>60%</strong></th>
                <th><strong>70%</strong></th>
                <th><strong>80%</strong></th>
                <th><strong>90%</strong></th>
                <th><strong>99%</strong></th>
            </tr>
        </thead>
        <tr>
            <td>Biased</td>
            <td>23.3</td>
            <td>27.0</td>
            <td>31.2</td>
            <td>36.0</td>
            <td>41.7</td>
            <td>48.7</td>
            <td>57.7</td>
            <td>70.3</td>
            <td>92.0</td>
            <td>164.0</td>
        </tr>
        <tr>
            <td>Unbiased</td>
            <td>20.7</td>
            <td>21.4</td>
            <td>22.2</td>
            <td>23.2</td>
            <td>24.3</td>
            <td>25.7</td>
            <td>27.4</td>
            <td>29.9</td>
            <td>34.2</td>
            <td>48.4</td>
        </tr>
    </table>
```

It is therefore possible to rely on the accumulation of dose by determining the average dose per hour in space knowing that the uncertainties linked to the accumulation of dose is not identified.

As data of operational amplifiers are global figures, it is impossible to define a failure time distribution. Such a distribution could be performed with the raw data of all operational amplifiers OP27 which have been tested in biased and unbiased conditions.

