<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_4_3_1)=
# Mission profile

(eee_4_3_1_1)=
## Mission Profile Definition

As mentioned before, the reliability.space approach for {term}`EEE` components is based on the FIDES  methodology. One advantage of the FIDES approach is that the reliability calculations calculated through reliability.space are specific to a particular application of the electronic equipment or the system, as defined by an application specific mission profile.

The consideration of the mission profile allows offering different reliability prediction results for each unit/subsystem, depending on the actual mission of the satellite.

In particular, modelling for different mission profiles means taking into account the thermal cycling specific to the orbit considered.

The objective of this chapter is to provide a methodology to define the mission profile of a satellite. Some examples of mission profiles for the most common space applications: geostationary telecommunication satellites and Low Earth Orbit satellites are presented in {ref}`eee_annex_a`.

(eee_4_3_1_2)=
## Methodology to define a mission profile for space applications

The mission profile, or life profile, is an important step to consider when using the reliability.space method.

The mission profile allows taking into account the use, which is one of the three items with technology and process on which the reliability prediction of any electronic equipment is based. The mission profile should be as accurate and as pertinent as necessary to get the desired {term}`level of confidence <Level of confidence>` in the reliability prediction.

The stress values defined for each phase of the mission profile are used as input parameters describing the physical stresses acting on the {term}`EEE` components. More specifically, the values of temperature, temperature cycling, vibration and humidity are directly used in the {term}`physics of failures <Physics of failure>` equations used in the models for {term}`EEE` components. The chemical values are used in the consideration of over-stresses with the induced factor $\Pi_{\text{induced}\_i}$ defined in {numref}`eee_4_3_1_17`.

For space applications, mission profiles are based on the same main phases, as explained in {numref}`eee_4_3_1_3_4`. Furthermore, the stress applied on electronic equipment of satellites is mainly linked to the temperature, in addition to the electrical stresses dealt with directly at part level. From the regular mission profile definitions from FIDES, the other stresses such as vibrations, humidity and chemical pollution are considered, but they are mainly present only during the launch phase.

So, defining the mission profile of some electronic units used within satellites consists mainly in defining the temperature applied on this electronic equipment (including the thermal amplitudes of the cycles). As these temperatures depend on the equipment, it is not possible to define a standard mission profile that can be used for every pieces of equipment within a satellite. A minimum of analysis must be done to define the temperatures, leading to reconsider the mission profile for any other equipment or any other mission.

A preliminary simplified mission profile can be defined early in the development process when the required information is not yet fully available. At that early stage, the definition of this preliminary mission profile can be based on:

-   a previous mission profile from a similar and preceding mission;

-   a mission profile for comparison purpose based on examples provided in {ref}`eee_annex_a` (with precautions).

With the development of the project, thermal simulations are made available by thermal architects and should be used as the basis for the mission profile determination, as much as possible without considering the margins.

So, to define accurately the mission profile, it is necessary to know:

-   the type of mission of the satellite such as geostationary, Low Earth orbit, middle orbit, science satellite or other mission;

-   the different phases of use (on) and no use (off) of the equipment;

-   the location of the equipment on the platform or on the payload in order to estimate all the relevant stresses.

After that, the mission profile should provide the following data for each phase of life of the electronic equipment in the satellite.

```{list-table} Data required for defining a mission profile.
:name: eee-table4-2

* - <table id="eee_table4_2" class="myTable">
		<thead>
			<tr class="db-header">
				<th colspan="3"></th>
				<th>Temperature</th>
				<th colspan="4">Temperature cycling</th>
			</tr>
			<tr class="db-header">
				<th>Phase name</th>
				<th>On / Off</th>
				<th>Calendar time</th>
				<th>Reference temperature</th>
				<th>∆t</th>
				<th>Cycle duration</th>
				<th>Number of cycles</th>
				<th>Maximum temperature during cycling</th>
			</tr>
		</thead>
		<tr>
            <td>Description of each phase during the life of an electronic equipment</td>
            <td colspan="2">Quantification of time data</td>
            <td>Quantification of temperature data</td>
            <td colspan="4">Quantification of temperature cycling data</td>
        </tr>
	</table>	
    <table id="eee_table4_2b" class="myTable">
		<thead>
			<tr class="db-header">
				<th colspan="3"></th>
                <th>Humidity</th>
				<th>Mechanical</th>
				<th colspan="4">Chemical</th>
			</tr>
			<tr class="db-header">
				<th>Phase name</th>
				<th>On / Off</th>
				<th>Calendar time</th>
				<th>Relative humidity</th>
				<th>Random vibrations</th>
				<th>Saline pollution</th>
				<th>Environmental pollution</th>
				<th>Application pollution</th>
                <th>Protection level</th>
			</tr>
		</thead>
        <tr>
            <td>Description of each phase during the life of an electronic equipment</td>
            <td colspan="2">Quantification of time data</td>
            <td>Quantifi-cation of humidity</td>
            <td>Quantifi-cation of vibrations</td>
            <td colspan="4">Quantification of chemical stresses</td>
        </tr>
    </table>
```

(eee_4_3_1_3)=
## Quantification of time data

The total time $t_{\text{total}}$ is composed of several phases with duration $t_{\text{phase}}$.

For most satellite applications, the total time $t_{\text{total}}$ considered for the mission profile of the satellite is the time which normally begins with the launch of the satellite and finishes at the end of its life.

The different phases corresponding to the integration and testing of the satellite and its equipment on ground are generally not considered; indeed, the time on ground is generally negligible compared to the mission time and all potential failures arriving during these phases can normally be detected and should not have any impact on the equipment in orbit. But it will be addressed here as in some cases, when the time of storage is significant, it has to be considered.

(eee_4_3_1_3_1)=
### Storage

Hence, the potential storage of satellites before launch can be considered as a specific phase if this one lasts for a long time. Some satellites are built and stored waiting for their launch or a satellite is stored during a long duration waiting for an approval to launch. In these specific cases, defining a specific phase of storage is relevant and its duration is defined with the worst case of the duration of storage. For this phase, the electronic equipment is switched off and the temperature and humidity rate are those of the room where the satellites are stored. Normally, there should be only very low controlled variations of temperature, no vibration and no chemical stress.

(eee_4_3_1_3_2)=
### Decommissioning

The phase of decommissioning should not be considered in regard to the success of the mission, but it could be considered for the success of the deorbiting or reorbiting process. This occurs at the end of life of the satellite and consists in deorbiting or reorbiting the satellite by changing its orbit to redirect the satellite into the atmosphere or in the deep space.

Only the electronic units used for decommissioning have to be taken into account in the reliability prediction for this phase. Also, it is necessary to qualify electronic equipment used for decommissioning in order to be sure that equipment is correctly operating when needed.

(eee_4_3_1_3_3)=
### Life extension

The potential life extension of a satellite is also generally not considered in the mission profile. However, it can be considered to forecast reliability during life extension. Therefore, once in orbit, it can be useful to reconsider the reliability prediction to support decisions about life time extensions, using a Bayesian approach by considering the past failures of the electronic equipment as described in {numref}`methodologies`). In this way, the calculation is performed to study the influence on reliability prediction of the additional life.

In addition, as described in {numref}`eee_4_6`, an analysis has to be performed to identify the {term}`EEE` components with limited life duration, to estimate the potential wear-out of the equipment and to mitigate the possible risks of using these components and equipment during the life extension.

(eee_4_3_1_3_4)=
### Sequence of phases

The sequence of phases is similar whatever the category of satellite except for science missions which can have a different sequence. Phases generally considered in the mission profile are the following for geostationary and low Earth orbit satellites:

-   Launch phase with duration of around 2 hours: the particularity of this phase is linked to the level of vibration which depends on the launcher;

-   The next phase is the time to reach orbit, or orbit raising phase: the duration of this phase spans from 2 days up to 1 year according to the technology of propulsion (electrical or chemical). During that phase, units can either be switched on or switched off depending on their purpose;

-   Once in orbit, the duration of the phases depends on the way the equipment is used with the successive on and off phases and with the category of satellite.

Typically, the orbit duration is between 7 to 12 years for an observation satellite and 10 to 15 years for a geostationary satellite. It can be lower for mini or nano satellites, and higher for scientific missions.

For each phase, the "calendar time" is defined. For space applications, this "calendar time" is the duration of each phase in hours and the mission profile can be expressed for the total duration of the satellite life.

For each phase, the state of the electronic equipment is specified in the column "On / Off". If the equipment can be on or off during the same phase, it means that actually two different phases need to be created.

After first reliability calculations, some phases such as the launch phase can be removed to simplify the mission profile when these phases have a low contribution on the total prediction.

(eee_4_3_1_4)=
## Quantification of temperature data

The thermal characteristics of the electrical equipment in a satellite are the main factors of stress, in combination with the electrical stresses at part level. The temperature of the electronic equipment is linked to the environmental temperature outside the satellite and to the regulated temperature inside the satellite.

The environmental temperature of the satellite is changing according to the position of the satellite to the sun. The external temperature of the satellite can reach +100°C in the sun light and -200°C in the shadow. That is the reason why a thermal regulation is implemented in order to have a temperature inside the satellite that allows the correct functioning of all equipment. This thermal regulation is generally performed with heating resistance using conduction to heat this equipment. With the ageing of this heating system, it is generally noticed that the temperature of electronic equipment is slightly increasing by several degrees during the life of the satellite.

In the mission profile, the temperature of the electronic equipment is mainly based on this regulated temperature and eventually mitigated by the influence of the environmental temperature, which is used as the reference temperature for the electronic equipment in the reliability.space models. For each of the electronic boards and for each phase of the mission profile, a reference temperature is defined based on the temperature gradient from the electronic equipment to the electronic boards. If the temperature of the boards inside the equipment is accessible thanks to thermocouples or other sensors, then it is better to directly use this measured temperature in the mission profile. Otherwise, the temperature gradient has to be estimated from calculation, thermal analysis and simulation or tests on ground. Finally, the reference temperature of all {term}`EEE` components is calculated from the reference temperature of each electronic board by considering the temperature rise due to heat dissipation of these components.

When necessary, if the temperature is different depending on the time due to functioning and non-functioning phases, due to ageing of the thermal regulation system, or due to the periods of the year especially close to solstices, then additional phases can be added to reflect the different temperature values. When the reference temperature is not stable during a phase, for example during activation of an electronic board or an {term}`EEE` component, the assumption is made that the reference temperature is stable over the whole phase. In this case, the reference temperature to consider is the average temperature during the phase and not the maximum temperature during the phase.

During the launch and orbit raising phases, some electronic equipment is switched off and so the temperature is directly the reference temperature of the heating system. As previously noticed, the temperature of the equipment increases with the ageing of the heating system. To consider this phenomenon, an approach in three steps can be followed:

-   The first step is to define a split into several in-orbit phases with different temperature values from the beginning of life to the end of life of the satellite;

-   The second step is to perform the reliability prediction and to estimate the influence of each phase on the overall reliability prediction.

-   The third step is to make a simplification in the number of phases by gathering the phases which are less significant.

(eee_4_3_1_5)=
## Quantification of temperature cycling data

The temperature variations at satellite level can be due to:

-   the successive orbit cycles around the Earth;

-   the position of the satellite in front of the Sun or in the eclipse of the Earth, depending on the season.

To define the different parameters of temperature cycling, it is suggested to define a thermograph for each phase of the mission profile. This thermograph is a direct interpretation of the thermal analysis and simulation done during the preliminary design of the satellite by considering the different phases of the mission profile. The temperature is oscillating around the reference temperature of each electronic board. A cycle usually corresponds to a temperature excursion measured compared to the reference temperature of the electronic board, and the cycle time is applicable until returning to the initial temperature. This temperature cycle corresponds to an identified phenomenon that generates stress. Generally, cycles for satellites correspond to a revolution around the Earth. Several identical cycles may succeed in a single phase and the number of identical cycles is counted.

```{figure} ../../../pictures/eee_figure4_3.png
---
width: 600px
name: Figure_1_3
---
Description of temperatures for temperature cycling.
```

The maximum temperature to be computed for the mission profile corresponds to the highest temperature reached by the electronic equipment during the cycle. The number of cycles is estimated with the total duration of each cycle, and the overall duration of the in-orbit phase.

(eee_4_3_1_6)=
## Quantification of humidity

Humidity can only be present during the launch phase and all the phases on ground. Once the satellite is in space, there is no more humidity in the environment, and so no more humidity on the electronic equipment. Therefore, it is proposed to consider humidity in the mission profile only during the launch phase and the phases on ground. However, even if the influence of the humidity is light due to the low duration of this phase, the humidity has to be considered during this phase. Especially, the relative humidity factor may become predominant in mission profiles of satellites that include long storage periods before launch. That is why the values for relative humidity and temperature shall be determined with accuracy for long storage phases.

In estimating relative humidity, it is important to consider the relative humidity actually experienced by the {term}`EEE` components. Change in humidity is a function of temperature. For a constant composition of the air, the humidity decreases as the temperature increases. The change in the relative humidity as a function of the temperature can be read from the following hygrothermal diagram.

```{figure} ../../../pictures/eee_figure4_4.png
---
width: 600px
name: Figure_1_4
---
Hygrothermal diagram of relative humidity.
```

The humidity stress is required for the reliability prediction of sensitive components such as plastic film capacitors, connectors, piezoelectric devices, filters, fuses, integrated circuits, resistors, optocouplers and PCBs.

(eee_4_3_1_7)=
## Quantification of vibrations

The vibrations are mainly present during the launch phase. Once the satellite is in space, there is only little vibration and failures due to vibrations are considered as {term}`random failures <Random failure>`. So, vibrations are mainly considered in the mission profile during the launch phase and can be considered as {term}`extrinsic failures <Extrinsic failure>`. The value of vibrations depends on the position of the electronic equipment inside the satellite, on the maximum vibrations endured by the satellite during the launch, and on the launcher. This value is estimated by measurements or mechanical simulations. Even if the influence of vibrations can be small due to the low duration of this phase, the vibrations have to be considered.

Whatever the estimated reliability prediction due to vibrations, as the risk of {term}`extrinsic failures <Extrinsic failure>` due to vibrations is still present, specific qualifications of the equipment should be done to ensure that vibrations cannot affect the behaviour of the electronic equipment.

(eee_4_3_1_8)=
## Quantification of chemical stresses

The chemical stresses considered in the definition of the mission profile are the following ones:

-   Saline pollution: this pollution is mainly present near the seaside or for naval equipment; for space applications, this pollution is relevant during the launch phase only if the launch platform is located near the seaside;

-   Environmental pollution: this pollution could be considered for equipment located in areas where chemical pollutants are present such as industrial areas, chemical industries, oil and gas industries; for space applications, this pollution is relevant during the launch phase only if the launch platform is close to an industrial area;

-   Application pollution: this pollution is present in areas where the pollution due to other equipment is present, for example an engine of a vehicle; for space applications, this pollution is not relevant except for some equipment close to thrusters;

-   Protection level: the protection is linked to the ability of humidity to infiltrate in the {term}`EEE` components; as humidity is not present in space, the protection level is considered as "hermetic".

So, pollution could be considered as "low" and protection level as "hermetic" for any electronic equipment in satellites except for some specific cases, such as the launch phase when humidity and chemical pollution are present. The chemical stresses are required for the reliability prediction of some electromechanical components such as fuses and connectors.

(eee_4_3_1_9)=
## Exposure to over-stresses

The contributions of over-stresses in the mission profile on components are defined in {numref}`eee_4_3_1_17` the induced factor $\Pi_{\text{induced}\_i}$ and application factor $\Pi_{\text{application}}$.

(eee_4_3_1_10)=
## Specific stresses not considered in the mission profile

Some of the stresses are not considered to the real level of influence that they can have in space applications compared to other applications. The failures due to ON / OFF cycles and due to radiations are classified as {term}`wear-out failures <Wear-out failure>` as they affect the {term}`degradation <Degradation>` of the equipment.

(eee_4_3_1_11)=
## ON / OFF cycles

The equipment is generally switched off when it is not used to limit as much as possible the consumption of energy. In the mission profile, the impact on {term}`EEE` components of the frequent ON / OFF cycles is considered only by the thermal variations due to the self-heating of electronic equipment in the model. The influence of frequent switching on and switching off on the reliability of electronic equipment is not perfectly apprehended and not correctly considered.

A transmitter of a Low Earth Orbit satellite being switched off when out of the scope of the reception stations can occur up to 100 000 times over the {term}`mission lifetime <Mission lifetime>` without having any failures. For this specific constraint, no potential impacts have been currently found with experience of In-Orbit Return. Consequently, the impact of these frequent ON / OFF cycles is considered as a wear-out phenomenon of {term}`EEE` components and is discussed in {numref}`eee_4_6_5`.

(eee_4_3_1_12)=
## Radiations

Another specificity of the space domain is an environment subjected to high cumulated doses of radiation (protons and electrons), due to the Van Allen radiation belt in particular. The methodology considers a part of these phenomena through the electrical over-stresses, but with insufficient quantification. Currently, the design of any electronic equipment for satellites is qualified with the total dose corresponding to the life of the equipment with a supplementary safety margin. However, commercial {term}`EEE` components are more and more sensitive to cumulated doses of radiation. The experience and lessons-learnt issued from various industrial domains is not sufficient to presently develop these models. For space applications, only simple models such as the model presented in {numref}`eee_4_6_5_1` is proposed with results of radiation tests performed on components correlated with the level of radiation considered in the different phases of the mission profile.

(eee_4_3_1_13)=
## Temperature and thermos-electrical stress

**Physical stresses:**

In the classification of Chapter 2, the physical failure rate $\lambda_{\text{Physical}}$ is based on a combined approach. It gathers the following information:

-   The basic failure rates $\lambda_{0}$ based on statistics;

-   The physical contributions $\Pi_{\text{acceleration}}$ which are based on the {term}`physics of failures <Physics of failure>`, as described in {numref}`eee_4_3_1_13`, {numref}`eee_4_3_1_14`, {numref}`eee_4_3_1_15`, {numref}`eee_4_3_1_16`.

-   The contributions of specific over-stresses $\Pi_{\text{induced}}$ not considered by the mission profile, as described in {numref}`eee_4_3_1_20`.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_7
\lambda_{\text{Physical}} = \left\lbrack \sum_{Physical\_ Contributions}^{}\left( \lambda_{0} \cdot \Pi_{\text{acceleration}} \right) \right\rbrack \cdot {\Pi_{\text{induced}}}_{i}
```
````

The physical contributors considered are the temperatures, the humidity level, the thermal cycling, the vibrations and the electrical stresses. The formulas applied in the models have been established from the {term}`physics of failures <Physics of failure>` of each {term}`EEE` component considered.

The thermal and thermo-electrical stresses are taken into account by the {term}`physics of failures <Physics of failure>` with the Arrhenius' law, multiplied by the contribution of electrical stress, such as voltage or current for example.

````{admonition} Equations
:class: equation
``
``  
```{math}
:label: Equation_1_8
AF = \left( \frac{1}{S_{\text{reference}}} \cdot \frac{V_{\text{applied}}}{V_{\text{rated}}} \right)^{p} \cdot exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{{273 + T}_{0}} - \frac{1}{273 + T_{board_{ref}} + \Delta_{T}} \right) \right\rbrack
```
```{math}
:label: Equation_1_9
AF = \left( \frac{1}{S_{\text{reference}}} \cdot \frac{I_{\text{applied}}}{I_{\text{rated}}} \right)^{p} \cdot exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{{273 + T_{0}}} - \frac{1}{273 + T_{board_{ref}} + \Delta_{T}} \right) \right\rbrack
```
where:

-   $T_{board_{ref}}$: operating temperature at board level;

-   $\Delta_{T}$ : temperature rise due to the heat dissipation of component;

-   $T_{0}$: reference temperature defined in the formula for each type of component;

-   $V_{\text{applied}}$: operating voltage;

-   $V_{\text{rated}}$: rated voltage of the component;

-   $I_{\text{applied}}$: operating current;

-   $I_{\text{rated}}$: rated current in the component;

-   $S_{\text{reference}}$: reference level for the electrical stress;

-   $p$: accelerating power for the electrical stress, defined in the formula for each type of component;

-   $E_{a}$ : The value of the activation energy which depends on the technology and main contributing {term}`failure mechanism <Failure mechanism>` considered.
````

For some components that are sensitive to {term}`failure mechanisms <Failure mechanism>` linked to electrical operation, the contribution of electrical stress is considered as a multiplicative factor. This electrical stress is determined based on the ratio between applied stress and rated stress, elevated to an accelerating power $p$. The considered stresses are voltage and current. The accelerating power $p$ is derived based on publications or by engineering judgment.


(eee_4_3_1_14)=
## Thermo-mechanical stress

The thermo-mechanical stress is associated with the thermal cycling of the equipment. It is considered by the {term}`physics of failures <Physics of failure>` with the Norris-Landzberg's model defined in document {cite:t}`eee-Norris1969ReliabilityOC`. This model is based on the thermo-mechanical effects based on the Coffin-Manson model.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_10
AF = \left( \frac{12 \cdot N_{cy_{\text{phase}}}}{t_{\text{phase}}} \right) \cdot \left( \frac{\text{min} \left( \theta_{\text{cy}}, 2 \right)}{\text{min} \left( \theta_{0}, 2 \right)} \right)^{p} \cdot \left( \frac{\Delta T_{\text{cycling}}}{\Delta T_{0}} \right)^{m} \cdot \text{exp} \left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{273+T_{0}+\Delta T_{0}} - \frac{1}{273+T_{max_{\text{cycling}}}} \right) \right\rbrack
```
where:

-   $N_{cy_{\text{phase}}}$: number of cycles in the phase;

-   $t_{\text{phase}}$: duration of the phase;

-   $\theta_{\text{cy}}$: cycle duration in hours;

-   $\theta_{0}$: reference cycle duration;

-   $\Delta T_{\text{cycling}}$: thermal amplitude of the cycle;

-   $\Delta T_{0}$: reference thermal amplitude of the cycle;

-   $E_{a}$: activation energy in eV;

-   $T_{max_{\text{cycling}}}$: maximum temperature reached during the cycle;

-   $T_{0}$: reference temperature;

-   $m$: fatigue coefficient;

-   $p$: accelerating power of the duration factor.
````

The activation energy $E_{a}$, fatigue coefficient $m$ and accelerating power of the duration factor $p$ are the parameters used for the thermo-mechanical fatigue. The activation energy $E_{a}$, fatigue coefficient $m$ and accelerating power of the duration factor $p$ are similar for all components and set to $E_{a}=0.122eV$, $m=1.9$ for fatigue of SnPb solder joints and $p=0.33$. However, experience and engineering judgment have shown that the parameters of the Norris-Landzberg's model are also applicable to lead-free process. All other parameters are depending on the mission profile of the equipment.

(eee_4_3_1_15)=
## Humidity stress

The humidity stress is taken into account by the {term}`physics of failures <Physics of failure>` with Peck's model.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_11
AF = \left( \frac{\text{RH}_{board_{ref}}}{\text{RH}_{0}} \right)^{p} \cdot exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{{273 + T_{0}}} - \frac{1}{{273 + T_{board_{ref}}}+ \Delta T} \right) \right\rbrack
```
where:

-   $\text{RH}_{board_{ref}}$: relative humidity of the environment considered;

-   $\text{RH}_{0}$: reference relative humidity;

-   $T_{board_{ref}}$: environment temperature considered;

-   $\Delta T$: temperature rise due to the component heat dissipation;

-   $E_{a}$: activation energy in eV;

-   $T_{0}$: reference temperature;

-   $p$: accelerating power of the duration factor.
````

Peck's model uses the activation energy $E_{a}$ and the humidity factor $p$ as inputs to the calculation of humidity contribution to the reliability prediction. All other parameters are depending on the mission profile of the equipment.

For space applications, the humidity stress is present only during the launch phase (and the storage/on-ground phases if they are taken into account). In orbit, the humidity is no more present and the stress is no more applied.

(eee_4_3_1_16)=
## Vibration stress

The vibration stress is taken into account by the {term}`physics of failures <Physics of failure>` with Basquin's law.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_12
AF = \left( \frac{G_{\text{rms}}}{0.5} \right)^{p}
```
where:

-   $G_{\text{rms}}$: root mean square vibration amplitude in the environment considered;

-   $G_{\text{rms0}}=0.5g_{rms}$: reference vibration amplitude;

-   $p$: accelerating power for the mechanical stress.
````

This accelerating model uses the power factor $p$ as inputs to the calculation of the vibration contribution to the reliability prediction. The other parameter is depending on the equipment's mission profile. The vibration power $p$ is similar for all components and set to $p=1.5$. This value is close to the bottom of the range of fatigue coefficients generally encountered for Basquin's law.

For space applications, the vibration stress is present only during the launch phase. In orbit, vibrations are no more present and the stress is no more applied.

```{admonition} Recommendation
:class: recommendation

When computing the vibration input in the mission profile, for phases with no vibration, it is recommended nevertheless to compute as a minimum 0.01 Grms value for stability of the formulae.
```

(eee_4_3_1_17)=
## Recommended values for over-stresses of EEE components for space applications

Reliability.space directly considers the contribution of mechanical, electrical or thermal over-stresses on components as described in {numref}`eee_4_3_1_13`. An additional factor, the induced factor $\Pi_{\text{induced}\_i}$ is a parameter representing the contribution of other specific over-stresses not considered by the mission profile. This induced factor is based on four different contributors according to the following equation:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_13
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
With:

-   $\Pi_{induced \_ i}$ as the induced factor;

-   $\Pi_{placement\_ i}$ as the influence of the component placement in the equipment

-   $\Pi_{application\_ i}$ as the influence of the usage environment

-   $\Pi_{\text{ruggedising}}$ as the influence of the policy for over-stresses

-   $C_{\text{sensitivity}}$ as the coefficient of sensitivity to over-stresses
````

(eee_4_3_1_18)=
## Influence of the component placement in the equipment

$\Pi_{placement\_ i}$ represents the influence of the component location in the equipment or the system. The component is considered as belonging to an interface if it belongs to a functional block linked to a function that provides interconnection between two systems. The location refers to the position of the item or the function in which it is integrated and is only considered from an electrical point of view. The electronic schematic and the description in functional blocks are the main inputs to define the allocation by zone and technical functions. For space applications, interfaces are generally functionalities linked to the power bus and data bus shared between platform and payload. All components constituting the same functional block should inherit the same $\Pi_{placement\_ i}$.

This parameter is defined in the following table:

```{list-table} Recommendation for the definition of parameter $\Pi_{placement\_ i}$.
:name: eee-table4-3
:header-rows: 1
:widths: 70 30

*   - Description of the placement influence
	- $\Pi_{placement\_ i}$
*   - Digital non-interface function
	- 1.0
*   - Digital interface function
	- 1.6
*   - Analog low-level non-interface function (<1A)
	- 1.3
*   - Analog low-level interface function (<1A)
	- 2.0
*   - Analog power non-interface function (≥1A)
	- 1.6
*   - Analog power interface function (≥1A)
	- 2.5
```

(eee_4_3_1_19)=
## Influence of the use environment

$\Pi_{application\_ i}$ represents the influence of the use environment for the application of the product containing the component. For example, the exposure to a mechanical over-stress is more significant in electronics integrated into a mobile system than in a fixed station system. This factor is usually variable depending on each phase of the mission profile. This parameter is based on a list of criteria which have three different levels corresponding to a favourable, moderate or unfavourable situation. For space applications, these criteria can be fixed as the use environment is normally the same for all satellites. In some specific situations, it could be possible to make some adaptations, but normally these values are appropriate whatever the equipment and whatever the phase of the mission profile.

Therefore, the recommendation for space applications during the launch, time to reach orbit and in-orbit phases is the following:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-4')" placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{application\_ i}$ for the launch, time to reach orbit and in-orbit phases.
:name: eee-table4-4
:header-rows: 1
:widths: 15 25 15 35 10

*   - 
	- 
	- 
	- Examples and comments
	- Weight
*   - User type in the phase considered
	- Represents the capability to respect procedures, facing operational constraints.
	- <p>0: Favourable</p><p>1: Moderate</p><p>2: Unfavourable</p>
	- <p>0: Industry</p><p>1: General public</p><p>2: Military</p><p>The most severe level must be adopted for military applications</p>
	- 20
*   - User qualification level in the phase considered
	- Represents the level of control of the user or the worker regarding an operational context
	- <p>0: Favourable</p><p>1: Moderate</p><p>2: Unfavourable</p>
	- <p>0: Highly qualified</p><p>1: Qualified</p><p>2: Slightly qualified or with little experience</p><p>In some phases, the user to be considered is the person who does the maintenance or servicing</p>
	- 10
*   - System mobility
	- Represents contingencies related to possibilities of the system being moved
	- <p>0:Non aggressive</p><p>1: Moderate</p>
	- <p>0: Few contingencies (fixed or stable environment)</p><p>1: Moderate contingencies</p><p>2: Severe contingencies, large variability (automobile)</p>
	- 4
*   - Product manipulation
	- Represents the possibility of false manipulations, shocks, drops, etc .
	- <p>0:Non aggressive</p><p>1: Moderate</p><p>2: Severe</p>
	- <p>0: Not manipulated</p><p>1: Manipulation without displacement or disassembly</p><p>2: Manipulation with displacement or disassembly</p>
	- 15
*   - Type of electrical network for the system
	- Represents the level of electrical disturbance expected on power supplies, signals and electrical lines: power on, switching, power supply, connection/disconnection
	- <p>0:Non aggressive</p><p>1: Moderate</p><p>2: Severe</p>
	- <p>0: Undisturbed network (dedicated regulated power supply)</p><p>1: Slightly disturbed network</p><p>2: Network subject to disturbances (on board network)</p><p>The network type is a system data but that can be broken down and related to specific products</p>
	- 4
*   - Product exposure to human activity
	- Represents exposure to contingencies related to human activity: shock, change in final use, etc.
	- <p>0:Non aggressive</p><p>1: Moderate</p><p>2: Severe</p>
	- <p>0: Uninhabitable zone</p><p>1: Possible activity in the product zone</p><p>2: Normal activity in the product zone</p><p>The product can be exposed to human activity even if it is not handled itself during normal use</p>
	- 8
*   - Product exposure to machine disturbances
	- Represents contingencies related to operation of machines, engines, actuators: shock, overheating, electrical disturbances, pollutants, etc.
	- <p>0:Non aggressive</p><p>1: Moderate</p><p>2: Severe</p>
	- <p>0: Null (telephone)</p><p>1: Indirect exposure (product in compartment)</p><p>2: Strong or direct exposure (product in engine area)</p>
	- 3
*   - Product exposure to the weather
	- Represents exposure to rain, hail, frost, sandstorm, lightning, dust
	- <p>0:Non aggressive</p><p>1: Moderate</p>
	- <p>0: Null (home)</p><p>1: Indirect exposure (compartment, station hall)</p><p>2: Outdoors (automobile engine)</p>
	- 2
```

Each level 0, 1 or 2 of the recommendation is given a specific mark as defined in the following table, independently of the levels and independently of the phases:

```{list-table} Marks for $\Pi_{application\_ i}$ whatever the phase.
:name: eee-table4-5
:header-rows: 1
:widths: 60 40

*   - Level
	- $\Pi_{marks\_ k}$
*   - 0: favourable or non-aggressive
	- 1
*   - 1: moderate
	- 3.2
*   - 2: unfavourable or severe
	- 10
```

The final calculation of $\Pi_{application\_ i}$ is therefore:


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_14
\Pi_{\text{application}} = \frac{1}{66} \cdot \sum_{k = Criteria}^{}{P_{\text{marks}_{k}} \cdot \text{Pos}_{k}}\begin{matrix}   \\                                                                                                                                   
   \\                                                                                                                                   
  \end{matrix} = \frac{1*20 + 1*12 + 1*4 + 1*15 + 3.2*4 + 1*6 + 1*3 + 1*2}{66} = \frac{74.8}{66} = 1.13
```
````

So, the recommendation for space applications for the launch, time to reach orbit and in-orbit phases is to use the value of 1.13 for the calculation of $\Pi_{application\_ i}$ in all applications.

For transport and storage phases of the mission profile, the recommendation for space applications is the following:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-6')" placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{application\_ i}$ for transport and storage phases.
:name: eee-table4-6
:header-rows: 1
:widths: 25 35 15 15 10

*   - Criterion
	- Description
	- Levels
	- Recommendation
	- Weight $\text{Pos}_{k}$
*   - User type in the phase considered
	- Represents the capability to respect procedures, facing operational constraints.
	- <p>0: Favourable</p><p>1: Moderate</p><p>2: Unfavourable</p>
	- 0 Favourable
	- 20
*   - User qualification level in the phase considered
	- Represents the level of control of the user or the worker regarding an operational context
	- <p>0: Favourable</p><p>1: Moderate</p><p>2: Unfavourable</p>
	- 0 Favourable
	- 12
*   - System mobility
	- Represents contingencies related to possibilities of the system being moved
	- <p>0: Non-aggressive</p><p>1: Moderate</p><p>2: Severe</p>
	- 0 Non-aggressive
	- 4
*   - Product manipulation
	- Represents the possibility of false manipulations, shocks, drops, etc.
	- <p>0: Non-aggressive</p><p>1: Moderate</p><p>2: Severe</p>
	- 0 Non-aggressive
	- 15
*   - Type of electrical network for the system
	- Represents the level of electrical disturbance expected on power supplies, signals and electrical lines: power on, switching, power supply, connection/disconnection
	- <p>0: Non-aggressive</p><p>1: Moderate</p><p>2: Severe</p>
	- 0 Non-aggressive
	- 4
*   - Product exposure to human activity
	- Represents exposure to contingencies related to human activity: shock, change in final use, etc.
	- <p>0: Non-aggressive</p><p>1: Moderate</p><p>2: Severe</p>
	- 0 Non-aggressive
	- 6
*   - Product exposure to machine disturbances
	- Represents contingencies related to operation of machines, engines, actuators: shock, overheating, electrical disturbances, pollutants, etc.
	- <p>0: Non-aggressive</p><p>1: Moderate</p><p>2: Severe</p>
	- 0 Non-aggressive
	- 3
*   - Product exposure to the weather
	- Represents exposure to rain, hail, frost, sandstorm, lightning, dust
	- <p>0: Non-aggressive</p><p>1: Moderate</p><p>2: Severe</p>
	- 0 Non-aggressive
	- 2
```

Based on the marks given in {numref}`eee-table4-5` and calculation with {eq}`Equation_1_14`, the recommendation for space applications for transport and storage phases is to use the value of 1.00 for the calculation of $\Pi_{application\_ i}$ in all applications.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_15
\Pi_{\text{application}} = \frac{1}{66} \cdot \sum_{k = Criteria}^{}{P_{\text{marks}_{k}} \cdot \text{Pos}_{k}} = \frac{1*20 + 1*12 + 1*4 + 1*15 + 1*4 + 1*6 + 1*3 + 1*2}{66} = \frac{66}{66} = 1.00
```
````

(eee_4_3_1_20)=
## Influence of the policy for over-stresses

$\Pi_{ruggedising}$ represents the influence of the policy for considering over-stresses in the product development and is based on 17 different questions. Some of the answers of these questions are common to all space applications. Questions n° 157, 158, 159, 160, 161, 163, 167 and 169 have been partly modified to consider specificities of space applications, mainly because maintenance of the products is not possible on satellites. The modification of the recommendations, descriptions and criteria of these modified questions are listed in {ref}`eee_annex_a`. Moreover, question n°168 is not directly applicable to space applications also due to its maintenance purpose and is removed from the questionnaire.

```{admonition} Recommendation
:class: recommendation

A first recommendation concerning the questionnaire is to answer to all questions as N4 ("recommendation is fully applied") for most electronic units' suppliers in the space industry as a first approach.
```

```{admonition} Rule
:class: rule

For {term}`CDR`, Sub-contractors, or suppliers, in particular those who are new in the space industry or in the frame of "{term}`new space <New space>`" programs need to adapt these levels to their conditions with rationale provided.
```

Therefore, the table with associated weights and levels N4 for space applications is the following:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-7')" placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{ruggedising}$.
:name: eee-table4-7
:header-rows: 1
:widths: 10 50 10 10 20

*   - Sheet
	- Recommendation
	- $Recom_{weight}$
	- Preliminary Level
	- {term}`CDR` Level
*   - 169
	- Write complete procedures for all product implementation operations
	- 7
	- N4
	- To Be Completed
*   - 157
	- Provide training and manage maintenance of skills for implementation of the product
	- 7
	- N4
	- To Be Completed
*   - 158
	- Check that procedures specific to the product and rules specific to businesses are respected by an appropriate monitoring system
	- 7
	- N4
	- To Be Completed
*   - 156
	- Check that environmental specifications are complete.
	- 4
	- N4
	- To Be Completed
*   - 164
	- Justify that environment specifications are respected
	- 4
	- N4
	- To Be Completed
*   - 165
	- Carry out a product improvement process (for example highly accelerated stress tests) so as to limit the product sensitivity to environmental constraints (disturbances, environments, overstress)
	- 7
	- N4
	- To Be Completed
*   - 167
	- Carry out a process {term}`FMECA` (Failure Modes, Effects and Criticality Analysis) for implementation operations
	- 4
	- N4
	- To Be Completed
*   - 170
	- Respect a standard dealing with power supplies (standard that defines possible disturbances and possible EN2282 type variations). The standard must be respected both for electricity generation and for electricity consumption 
	- 4
	- N4
	- To Be Completed
*   - 166
	- Perform an analysis of failure cases that could result in failure propagation.
	- 4
	- N4
	- To Be Completed
*   - 163
	- Include production and storage environments in the product environment specifications
	- 4
	- N4
	- To Be Completed
*   - 160
	- Study and handle risks of the product under test being deteriorated by failures of its test means
	- 4
	- N4
	- To Be Completed
*   - 162
	- Use appropriate prevention means to identify and handle reasonably predictable abnormal uses
	- 4
	- N4
	- To Be Completed
*   - 161
	- Identify and use appropriate prevention means of preventing reasonably predictable aggressions
	- 4
	- N4
	- To Be Completed
*   - 159
	- Design dependable electrical protection devices.
	- 4
	- N4
	- To Be Completed
*   - 171
	- Respect a standard dealing with conducted and radiated electromagnetic disturbances. This is equally applicable to the product and the system into which it is integrated
	- 3
	- N4
	- To Be Completed
```

Each level N1, N2, N3 or N4 of the recommendation is given a specific mark as defined in the following table:

```{list-table} Recommended parameters for $\Pi_{ruggedising}$.
:name: eee-table4-8
:header-rows: 1
:widths: 25 75

*   - Level
	- Marks $Satisfaction_{mark}$
*   - N1
	- 0
*   - N2
	- 1
*   - N3
	- 2
*   - N4
	- 3
```

The final calculation of $\Pi_{ruggedising}$ with removal of question n°168 is therefore:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_16
recom_{grade} = \frac{1}{213} \cdot \sum_{i}^{\text{Recommendations}}{{\text{Recom}_{\text{Weight}}}_{i} \cdot}{\text{Satisfaction}_{\text{Mark}}}_{i} = \frac{213}{213} = 1
```  
```{math}
:label: Equation_1_17
\Pi_{\text{ruggedising}} = exp\left\lbrack 0.7 \cdot \left( 1 - recom_{grade} \right) \right\rbrack = exp\left\lbrack 0.7 \cdot (1 - 1) \right\rbrack = 1.0
```
````

(eee_4_3_1_21)=
## Coefficient of sensitivity to over-stresses

$C_{sensitivity}$ represents the coefficient of sensitivity to over-stresses inherent to the item technology considered. Sensitivities related to Electrical OverStress, Thermal OverStress and Mechanical OverStress are given to show the relative sensitivity of {term}`EEE` components to the different types of overstresses. The coefficient $C_{sensitivity}$ is an exponential factor in the $\Pi_{induced\_ i}$ formula and specific to each component technology. The values for each technology are provided in {numref}`eee_4_3_4`.

```{admonition} Note
:class: note

For the 2021 issue of FIDES, these actors have been modified. The detail is also given in {numref}`eee_4_3_4`.
```
