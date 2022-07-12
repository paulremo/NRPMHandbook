(eee_4_6)=
# Wear-out failures of EEE components

(eee_4_6_1)=
## Introduction

The importance of the wear-out phenomenon of EEE components is linked to the duration of the mission profile of satellites. Generally, satellites have a life duration of 5 to 15 years. Depending on this life duration, electronic equipment is designed with components for which the life duration is longer. However, a majority of the satellites lives longer than expected, and for commercial reasons it can be interesting to extend the lifetime of satellites that are successfully operating in orbit. Knowing and managing the risk of EEE components wear out becomes much more relevant in this context.

The estimation of wear-out in space applications is a strategic subject as high requests are currently occurring due to the need to assess the possibility to extend the life duration of the satellites. The life extension could be assessed taking into account qualification and reliability aspects. The assessment of the life extension is needed for business and decommissioning aspects.

(eee_4_6_2)=
## List of main wear-out contributors

All components can be subjected to wear-out due to different phenomena such as material transformation, diffusion mechanisms and intermetallic growth. Generally, for most of them, wear-out will occur only after a very long period of time which is generally much longer than the satellite life. This is the main raison why wear-out is not taken into account in the predictive reliability calculation for EEE components. Nevertheless, in some particular cases, with the increase of stress such as temperature, voltage, thermal cycling, ON / OFF cycles and vibrations, wear-out can occur but generally after a duration higher than the life duration of the system.

In the specific case of space applications, cumulated radiation dose can create wear-out on specific technologies. For some EEE components of the EPPL list, the wear-out occurs in a limited time and is directly due to the technology of these EEE components. Some attempts to estimate the wear-out of EEE components have been performed in space applications. The ECSS document {cite:t}`eee-ECSS-Q-TM-30-12A` provides the list of components with their possible drifts due to ageing depending on temperature. These drifts are based on test data issued from life tests. Unfortunately, as test data are not always available, the drifts are provided only for a low quantity of technologies with a subjective confidence.

(eee_4_6_3)=
## List of components subjected to wear-out failures

Among components which are proposed by ESA in its EPPL {cite:t}`eee-EPPL007-37`, only a few of them can be subjected to wear-out. Examples of such components are listed below:

-   Plastic film capacitors: wear-out could occur but mainly for high voltage capacitors due to the Corona effect, especially when they are used with low derating; the standard ECSS-Q-ST-30-11C {cite:t}`eee-ECSS-Q-ST-30-11C` requires having a maximum 60% of derating, this value is adequate to minimize the likelihood of premature wear-out.

-   Plastic film capacitors: these components are also sensitive to humidity; this is not a concern in orbit but could be taken into account before launching.

-   Tantalum capacitors: wear-out could occur when they are used with low derating; the standard ECSS-Q-ST-30-11C {cite:t}`eee-ECSS-Q-ST-30-11C` requires having a maximum 60% of derating, this value is adequate to minimize the likelihood of premature wear-out.

-   Memories such as Memory PROM, Memory EPROM, Memory EEPROM, Flash memory, Programmable Logic, Anti fuse FPGA, SRAM based FPGA, Flash technology: these components are subjected to a limited retention time or a maximum number of write / read cycles depending on the junction temperature; the standard ECSS-Q-ST-30-11C {cite:t}`eee-ECSS-Q-ST-30-11C` requires to determine the endurance of Memory EPROM, Memory EEPROM and Flash memory by using the data from the manufacturer and estimating the equivalent time by using the Arrhenius' law with an activation energy *E~a~* of +0.6eV.

-   Integrated circuits such as Microwave Monolithic Integrated Circuits: these components should be subjected to a limited cumulated time of use; the standard ECSS-Q-ST-30-11C {cite:t}`eee-ECSS-Q-ST-30-11C` provides values for derating in supply voltage, output current and maximum junction temperature.

-   Deep Sub Micron components: it seems that these components can be subjected to a limited cumulated time of use due to their design and manufacturing, however knowledge on these components is still incomplete and wear-out is very dependent on the type of component, technology, manufacturer or size.

-   Relays and switches such as non-latching relays, latching relays and switches: these components can be subjected to a limited number of switching or number of hours depending on the number of operations.

-   Optoelectronics such as LED, laser diodes, optocouplers: these components can be subjected to a limited number of hours of functioning due to brightness degradation of their optical parts.

-   Power Mosfets: these components can be subjected to a limited cumulated time depending on their design and technologies especially for GaN technology; the standard ECSS-Q-ST-30-11C {cite:t}`eee-ECSS-Q-ST-30-11C` provides values of derating in drain to source voltage, gate to source voltage, gate to drain voltage, drain current, power dissipation and maximum junction temperature.

-   Power components submitted to ON / OFF cycles can be affected to specific wear-out effects such as bond lift due to local thermal cycles.

-   Technologies used in semiconductors, integrated circuits and discrete components such as diodes and transistors based on CMOS, NMOS or BiCMOS can be sensitive to cumulated radiation dose.

In all these cases, the design, the component selection and the qualification should be done according to each technology depending on the stresses of the mission profile. The design should be done to ensure no occurrence of any failure during the life duration.

Creating models of wear-out is necessary to estimate the degradation of the equipment and the Remaining Useful Life.

(eee_4_6_4)=
## Models for wear-out failures for components and sub-assemblies

The methodologies and standards that provide some models for wear-out of EEE components are quite few. Among all of them, the standards FIDES and IEC TR 62380 {cite:t}`eee-IEC-TR-62380` provide some simple models. FIDES only provides wear-out models of sub-assemblies such as screens, keyboards, hard disks, fans and batteries and does not provide any models for EEE components. IEC TR 62380 provides wear-out models for some components from the EPPL such as relays, switches, optocouplers, LED and laser diodes. These different models are not directly available for space applications as they are not validated and have never been used in a space context. The methodology to estimate wear-out is based on qualification and tests as explained in Paragraph {numref}`eee_4_6_6` and validated with an example in Paragraph {numref}`eee_4_6_9`.

(eee_4_6_4_1)=
### Model for wear-out of relays

On pages 84 and 86 of document IEC TR 62380, the wear-out model for relays is mainly based on voltage, current, temperature and the number of commutations per hours. This model is not validated and not applicable for space applications as it is valuable for system with several commutations per hour. Relays on satellites have only few commutations during their entire life and applying the model predicts wear-out after more than 100 years. Currently, the specification of each relay provides the mechanical life duration of the relay depending on the number of commutations. Moreover, a qualification with a margin is always done to ensure that the failure of a relay due to wear-out cannot occur during the life duration of the satellite.

(eee_4_6_4_2)=
### Model for wear-out of switches

On page 91 of document IEC TR 62380, the useful life is estimated as example to 20 000 commutations for normal switches or 100 000 commutations for sensitive switches. This information is not validated whatever the application as it is only provided as example without any equation and any input parameters. Currently, the specification of each switch provides the mechanical life duration of the switch depending on the number of commutations. Moreover, a qualification with a margin is always done to ensure that the failure of a switch due to wear-out cannot occur during the life duration of the satellite.

(eee_4_6_4_3)=
### Model for wear-out of optocouplers

On page 44 of document IEC TR 62380, the wear-out model for optocouplers is mainly based on current, junction temperature, transfer function and efficiency rate. This model is applicable only for steady-state applications with specific conditions of use. In space applications, the optocouplers are used as ON / OFF transients and so, the model is not applicable. However, a qualification with a margin is always done to ensure that the failure of an optocoupler due to wear-out cannot occur during the life duration of the satellite.

(eee_4_6_4_4)=
### Model for wear-out of LEDs

On page 48 of document IEC TR 62380, the wear-out model for LEDs is mainly based on current, junction temperature, transfer function and measurement of flux. Currently, the specification of each LED provides the life duration of the LED depending on the number of hours. This value provided by the manufacturer is considered as valuable and used to estimate the wear-out of a LED in space applications. Moreover, a qualification with a margin is always done to ensure that the failure of a LED due to wear-out cannot occur during the life duration of the satellite.


(eee_4_6_4_5)=
### Model for wear-out of laser diodes

On page 50 of document IEC TR 62380, the wear-out model for laser diodes is mainly based on drift of current and junction temperature. Only qualification with a margin is always done to ensure that the failure of a laser diode due to wear-out cannot occur during the life duration of the satellite.

(eee_4_6_5)=
## Stress factors inducing wear-out failures for EEE components and sub-assemblies

(eee_4_6_5_1)=
### Radiations as a factor of wear-out

In space, radiations are one of the sources for degradation and wear-out of EEE components. The Total Ionizing Dose (TID) or Displacement Damage (DD) due to non-ionizing elements such as proton, electrons and neutrons are the key factors for the degradation of EEE components. The components dedicated to space are developed during their design phase to tolerate space radiations with design for a margin of 2 on the total cumulated dose. The commercial components are generally not designed for the requirements of space industry. So, these components are qualified with an estimation of the total dose received by the EEE component during the life of the satellite. A minimum margin factor of 2 on the total cumulated dose measured during qualification is used as a basis for acceptance of these commercial components. This margin is used to consider uncertainties of components and variations in the total radiations dose. If the margin is set between 1.2 and 2, additional qualifications and a risk analysis are generally performed. If the margin is lower than 1.2, components are rejected and not used.

**Model of wear-out for radiations**

The publication {cite:t}`eee-Wang2016AMO` provides a model of Total Ionizing Dose (TID) for space applications. According to standard {cite:t}`eee-MIL-HDBK-814`, the Lognormal distribution is used to define the failure rate due to radiations according to the equation:

 
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_218
\lambda_{\text{TID}} = - \frac{1}{T} \bullet ln\left\{ 1 - \Phi\left\lbrack \frac{\ln\left( R_{\text{spaceTID}}\left( T \right) \right) - \mu}{\sigma} \right\rbrack \right\}
```
Where:

-   $\lambda_{\text{TID}}$: Failure rate due to radiations in FIT;

-   $T$: total time of exposition to radiations;

-   $R_{\text{spaceTID}}$: total ionization dose during time *T* in krad;

-   $\mu$: parameter representing the time of 50% cumulative failures;

-   $\sigma$: standard deviation.
````

An example is provided in this publication {cite:t}`eee-Wang2016AMO` with the estimation of the failure rate due to TID of a lot of 11 FPGA which have failed.

This model can be completed with the modelisation defined in publication {cite:t}`eee-Everline2008EstimatingTR` which considers also uncertainty in the Total Ionizing Dose, based on a time-dependent stress strength approach.

This model is a first interesting recommendation for a model of radiations. It needs to be validated to be used in calculation of failure rate due to radiations.

(eee_4_6_5_2)=
### ON / OFF cycling as a factor of wear-out

Satellites are designed with an objective to minimise the consumption of energy. In this way, a mechanism to minimize the consumption of energy is to switch off the equipment when it is not used. As a consequence of this strategy, permanent ON / OFF switches of the equipment are continuously realised. For low Earth orbit satellites, up to 20 ON / OFF cycles per orbit can occur for an equipment leading to up to 200 000 ON / OFF cycles during the lifetime of the satellite. According to the studies from CNES {cite:t}`eee-ESCCON` and {cite:t}`eee-JEP001`, these ON / OFF cycles have an effect on bonding wires of integrated circuits. Repetitive switches increase the temperature at the interfaces, and as the coefficients of thermal extensions are different between bonding wires and silicon, cracks appear at the interface. These cracks can lead to a disconnection, followed by a definitive drift or a failure. Wear-out could be addressed by using the process described in Paragraph {numref}`eee_4_6_9`.

(eee_4_6_5_3)=
### Single atomic oxygen as a factor of wear-out

In space, the single atomic oxygen is present and can generate corrosion on satellite. The atomic oxygen is mainly present for altitudes from 180 to 650km and is due to the dissociation of diatomic oxygen molecules by solar photons. The internal equipment and EEE components are not usually affected by single atomic oxygen due to protection and shielding of the satellite. Only some occasional corrosion has been reported without any possibility to make estimation on the influence on wear-out.

(eee_4_6_6)=
## Methodology to estimate the wear-out of EEE components by testing

<!--In case of insufficient data from the manufacturers or no data available, reliability tests could be performed to evaluate the wear-out of EEE components. The objective is to perform tailored life tests on components until having a minimum number of parts that fail and ideally 100% of failed parts. The test duration can last several hundred hours to several months or years. Different types of life tests can be performed depending on the failure mechanisms that should be revealed. For active EEE components with semiconductors, most of the basics are developed in JEDEC standards {cite:t}`eee-JEP001`, {cite:t}`eee-JEP001` and {cite:t}`eee-JEP001`. The methods used are generally deterministic.

To assess the wear-out of EEE components, it is required to set up a methodology with a global strategy that should be adapted according to the type of technology of the component. This methodology is issued from multiple standards and publications such as {cite:t}`eee-JEP001`, {cite:t}`eee-JEP001` and {cite:t}`eee-JEP001`. The following chart explains the methodology used to estimate wear-out of components and each step of the methodology is explained in details hereafter.-->





