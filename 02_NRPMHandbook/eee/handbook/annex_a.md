<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_annex_a)=
# Annex A : General formulae for EEE components


In the following, the formulae, tables, figures and data in general concerning all components are addressed:

(eee_annex_a_1)=
# EEPL list considered for the modelling

```{list-table} Components families and groups
:name: eee_table_a_1
:header-rows: 1
:widths: 20 10 50 20

* - Family
  - Group
  - Component / Function
  - Section
* - 1 - Capacitors
  - 1
  - Ceramic
  - 8.3.5.1
* - 
  - 2
  - Ceramic Chip
  - 
* - 
  - 3
  - Tantalum Solid
  - 
* - 
  - 4
  - Tantalum Non-solid
  - 
* - 
  - 5
  - Paper/Plastic Metallized
  - 
* - 
  - 6
  - Glass
  - 
* - 
  - 7
  - Mica
  - 
* - 
  - 9
  - Aluminium Solid
  - 
* - 
  - 10
  - Feedthrough
  - 
* - 
  - 11
  - Semiconductor
  - 
* - 2 - Connectors
  - 1
  - Circular Connector
  - 8.3.5.2
* - 
  - 2
  - Rectangular Connector
  - 
* - 
  - 3
  - Printed Circuit Board (PCB)
  - 
* - 
  - 5
  - RF Coaxial Connector
  - 
* - 
  - 6
  - Glassfibre
  - 
* - 
  - 7
  - Microminiature
  - 
* - 
  - 8
  - RF Filter
  - 
* - 
  - 9
  - Rack and Panel
  - 
* - 3 - Piezo-electric devices
  - 1
  - Crystal Resonator (quartz)
  - 8.3.5.3
* - 4 - Diodes
  - 1
  - Switching
  - 8.3.5.4
* - 
  - 2
  - Rectifier
  - 
* - 
  - 3
  - Voltage Regulator
  - 
* - 
  - 4
  - Voltage Reference/Zener
  - 
* - 
  - 5
  - RF/microwave Schottky (Si)
  - 
* - 
  - 6
  - Pin
  - 
* - 
  - 7
  - Hot Carrier
  - 
* - 
  - 8
  - Transient Suppression
  - 
* - 
  - 9
  - Tunnel
  - 
* - 
  - 10
  - High Voltage Rectifier
  - 
* - 
  - 11
  - Microwave Varactor (GaAs)
  - 
* - 
  - 12
  - Step Recovery
  - 
* - 
  - 13
  - RF/microwave Varactor (Si)
  - 
* - 
  - 14
  - Current Regulator
  - 
* - 
  - 15
  - Microwave Schottky (GaAs)
  - 
* - 
  - 16
  - RF/microwave Pin
  - 
* - 
  - 17
  - Microwave Gunn (GaAs)
  - 
* - 5 - Filters
  - 99
  - Filter (generic)
  - 8.3.5.5
* - 
  - 1
  - Feedthrough
  - 
* - 
  - 2
  - Diplexer
  - 
* - 6 - Fuses
  - 1
  - Fuse (generic)
  - 8.3.5.6
* - 7 - Inductors
  - 1
  - Coil
  - 8.3.5.7
* - 
  - 2
  - Cores
  - 
* - 
  - 3
  - Chip
  - 
* - 8 - Integrated Circuits (IC)
  - 10
  - Microprocessor / Microcontroller / Peripheral
  - 8.3.5.8
* - 
  - 20
  - Memory SRAM
  - 
* - 
  - 21
  - Memory DRAM/SDRAM
  - 
* - 
  - 22
  - Memory PROM
  - 
* - 
  - 23
  - Memory EPROM
  - 
* - 
  - 24
  - Memory EEPROM
  - 
* - 
  - 30
  - Programmable Logic
  - 
* - 
  - 40
  - ASIC Technologies Digital
  - 
* - 
  - 41
  - ASIC Technologies Linear
  - 
* - 
  - 42
  - ASIC Technologies Mixed Analog / Digital
  - 
* - 
  - 50
  - Linear Operational Amplifier
  - 
* - 
  - 51
  - Linear Sample And Hold Amplifier
  - 
* - 
  - 52
  - Linear Voltage Reference / Regulator
  - 
* - 
  - 53
  - Linear Voltage Comparator
  - 
* - 
  - 54
  - Linear Switching Regulator
  - 
* - 
  - 55
  - Linear Line Driver
  - 
* - 
  - 56
  - Linear Line Receiver
  - 
* - 
  - 57
  - Linear Timer
  - 
* - 
  - 58
  - Linear Multiplier
  - 
* - 
  - 59
  - Linear Switches
  - 
* - 
  - 60
  - Linear Multiplexers / Demultiplexer
  - 
* - 
  - 61
  - Linear Analog to Digital Converter
  - 
* - 
  - 62
  - Linear Digital to Analog Converter
  - 
* - 
  - 69
  - Linear Other Functions
  - 
* - 
  - 80
  - Logic Families
  - 
* - 
  - 95
  - Microwave Monolithic Integrated Circuits (MMIC)
  - 
* - 9 - Relays
  - 
  - Elementary Components
  - 8.3.5.9
* - 
  - 
  - Single Pole, Single Throw (SPST) Switch
  - 
* - 
  - 
  - Single Pole, Double Throw (SPDT) Switch
  - 
* - 
  - 
  - Double Pole, Single Throw (DPST) Switch
  - 
* - 
  - 
  - Double Pole, Double Throw (DPDT) Switch
  - 
* - 
  - 
  - Coil
  - 
* - 
  - 1
  - Non-latching Relay (mono-stable)
  - 
* - 
  - 
  - J412, T12, GP5 or Equivalent
  - 
* - 
  - 2
  - Latching Relay (bi-stable)
  - 
* - 
  - 
  - J422, T112, GP250 or Equivalent
  - 
* - 
  - 
  - EL210 or Equivalent
  - 
* - 
  - 
  - GP3 or Equivalent
  - 
* - 10 - Resistors
  - 1
  - Metal Oxide
  - 8.3.5.10
* - 
  - 2
  - Wirewound Precision (including Surface Mount)
  - 
* - 
  - 3
  - Wirewound Chassis Mounted
  - 
* - 
  - 4
  - Variable (trimmers)
  - 
* - 
  - 5
  - Composition
  - 
* - 
  - 7
  - Shunt
  - 
* - 
  - 8
  - Metal Film
  - 
* - 
  - 9
  - Chip (all)
  - 
* - 
  - 10
  - Network (all)
  - 
* - 
  - 11
  - Network Resistor (heaters, Flexible)
  - 
* - 11 - Thermistors
  - 1
  - Temperature Compensating
  - 8.3.5.11
* - 
  - 2
  - Temperature Measuring
  - 
* - 
  - 3
  - Temperature Sensor
  - 
* - 12 - Transistors
  - 1
  - Low Power, NPN (< 2 watts)
  - 8.3.5.12
* - 
  - 2
  - Low Power, PNP (< 2 watts)
  - 
* - 
  - 3
  - High Power, NPN (> 2 watts)
  - 
* - 
  - 4
  - High Power, PNP (> 2 watts)
  - 
* - 
  - 5
  - FET (linear and switching)
  - 
* - 
  - 
  - FET N Channel
  - 
* - 
  - 6
  - FET P Channel
  - 
* - 
  - 
  - RF Bipolar
  - 
* - 
  - 10
  - RF/microwave NPN Low Power / Low Noise
  - 
* - 
  - 11
  - RF/microwave PNP Low Power / Low Noise
  - 
* - 
  - 13
  - RF/microwave Bipolar Power
  - 
* - 
  - 
  - RF FET
  - 
* - 
  - 12
  - RF/microwave FET N-channel / P-channel
  - 

```


(eee_annex_a_2)=
# Formulae for all families, as proposed in FIDES

In these paragraphs, you will find all the formulae for all families, as proposed in FIDES.

(eee_annex_a_2_1)=
## General model for all families

The general model for conventional components is:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_2_1
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{LF}}
```

For RF/MW components:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_2_2
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessRFMw}} \cdot \Pi_{\text{LF}}
```

For ASIC components:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_2_3
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessASIC}} \cdot \Pi_{\text{LF}}
```

For Hybrids & MCM components:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_2_4
\lambda_{H\&M} =
\sum_{\mu\text{components}}
\left( \lambda_{\mu\text{component}} \cdot \Pi_{PM_{\mu\text{component}}} \right)
\cdot \Pi_{\text{Process\_H\&M}} \cdot \Pi_{\text{Process}}
+ \left( \lambda_{\text{Wiring}} + \lambda_{\text{Case+Substrate}} + \lambda_{\text{External\_connections}} \right)
\cdot \Pi_{\text{Process\_H\&M}} \cdot \Pi_{\text{Process}}
```

For discrete power semiconductors (diodes and transistors) components:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_2_5
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{W}} \cdot \Pi_{\text{LF}}
```

More details on all these parameters can be found in {numref}`eee_8_3`.


(eee_annex_a_2_2)=
## Lead-free soldering simplification

As expressed in {numref}`eee_8_3_1`, $\Pi_{\text{LF}}$ can be simplified by the value 1 for all industrials, including space industrials.
The simplified formulae for all families then become, where $\Pi_{\text{LF}}$ applies:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_2_6
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}}
```

For RF/MW components:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_2_7
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessRFHF}}
```

For ASIC components:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_3_1
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessASIC}}
```

(eee_annex_a_2_3)=
## Temperature and thermo-electrical stresses

Physical stresses equation:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_3_2
\lambda_{\text{physical}} =
\left[
\sum_{\text{Physical\_Contributions}}
\left( \lambda_0 \cdot \Pi_{\text{acceleration}} \right)
\right] \cdot \Pi_{\text{induced}_i}
```

Acceleration factor for thermal and thermo-electrical stresses:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_3_3
\lambda_{\text{physical}} =
\left[
\sum_{\text{Physical_Contributions}}
\left( \lambda_0 \cdot \Pi_{\text{acceleration}} \right)
\right] \cdot \Pi_{\text{induced}_i}
```
Where,
* $T_{\text{board_ref}}$: operating temperature at board level
* $\Delta T$: temperature rise due to the heat dissipation of component
* $T_0$: reference temperature defined in the formula for each type of component
* $V_{\text{applied}}$: operating voltage
* $V_{\text{rated}}$: rated voltage of the component
* $I_{\text{applied}}$: operating current
* $I_{\text{rated}}$: rated current in the component
* $S_{\text{reference}}$: reference level for the electrical stress
* $p$: accelerating power for the electrical stress, defined in the formula for each type of component
* $E_a$: activation energy depending on the technology and main contributing failure mechanism considered


(eee_annex_a_2_4)=
## Thermo-mechanical stress

Acceleration factor for the thermo-mechanical stress:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_4_1
\Pi_{\text{thermo-mechanical}} =
\left( \frac{12 \cdot N_{\text{cy\_phase}}}{t_{\text{phase}}} \right)
\cdot \left( \frac{\min(\theta_{\text{cy}},2)}{\min(\theta_0,2)} \right)^p
\cdot \left( \frac{\Delta T_{\text{cycling}}}{\Delta T_0} \right)^m
\cdot \exp \left[
11604 \cdot E_a \cdot
\left(
\frac{1}{273+T_0+\Delta T} - \frac{1}{273+T_{\text{max\_cycling}}}
\right)
\right]
```
Where,
* $N_{\text{cy_phase}}$: number of cycles in the phase
* $t_{\text{phase}}$: duration of the phase
* $\theta_{\text{cy}}$: cycle duration in hours
* $\theta_0$: reference cycle duration
* $\Delta T_{\text{cycling}}$: thermal amplitude of the cycle
* $\Delta T_0$: reference thermal amplitude of the cycle
* $E_a$: activation energy in eV
* $T_{\text{max_cycling}}$: maximum temperature reached during the cycle
* $T_0$: reference temperature
* $m$: fatigue coefficient
* $p$: accelerating power of the duration factor


The activation energy $E_a$, fatigue coefficient $m$ and accelerating power of the duration factor $p$ are the parameters used for the thermo-mechanical fatigue.  The activation energy $E_a$, fatigue coefficient $m$ and accelerating power of the duration factor $p$ are similar for all components and set to:  
- $E_a = 0.122 \, eV$  
- $m = 1.9$ for fatigue of SnPb solder joints  
- $p = 0.33$. 

However, experience and engineering judgment have shown that the parameters of the Norris-Landzberg’s model are also applicable to lead-free process. All other parameters are depending on the mission profile of the equipment.

(eee_annex_a_2_5)=
## Humidity stress

Acceleration factor for the relative humidity stress:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_5_1
\Pi_{RH} =
\left( \frac{RH_{\text{board_ref}}}{RH_0} \right)^p
\cdot \exp \left[
11604 \cdot E_a \cdot
\left(
\frac{1}{273+T_0} - \frac{1}{273+T_{\text{board_ref}}+\Delta T}
\right)
\right]
```
Where,
* $RH_{\text{board_ref}}$: relative humidity of the environment considered
* $RH_0$: reference relative humidity
* $T_{\text{board_ref}}$: environment temperature considered
* $\Delta T$: temperature rise due to the component heat dissipation
* $T_0$: reference temperature
* $E_a$: activation energy
* $p$: accelerating power for this stress


(eee_annex_a_2_6)=
## Vibration stress

Acceleration factor for the vibration stress:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_6_1
\Pi_{\text{vibration}} =
\left( \frac{G_{\text{rms}}}{0.5} \right)^p
```
Where,
* $G_{\text{RMS}}$: root mean square vibration amplitude in the environment considered
* $G_{\text{RMS}} = 0.5 g_{\text{rms}}$: reference vibration amplitude
* $p$: accelerating power for the mechanical stress


(eee_annex_a_2_7)=
# Over-stresses

Acceleration factor for the vibration stress:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_7_1
\Pi_{\text{induced}_i} =
\left( \Pi_{\text{placement}_i} \cdot \Pi_{\text{application}_i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot \ln(C_{\text{sensitivity}})}
```
Where,
* $\Pi_{\text{induced}_i}$: the induced factor
* $\Pi_{\text{placement}-i}$: the influence of the component placement in the equipment
* $\Pi_{\text{application}_i}$: the influence of the usage environment
* $\Pi_{\text{ruggedising}}$: the influence of the policy for over-stresses
* $C_{\text{sensitivity}}$: the coefficient of sensitivity to over-stresses


(eee_annex_a_2_8)=
# Component placement in the equipment

```{list-table} Recommendation for the definition of parameter $\Pi_{\text{placement}_i}$
:name: eee_table_a_8_1
:header-rows: 1
:widths: 70 30

* - Description of the placement influence
  - $\Pi_{\text{placement}_i}$
* - Digital non-interface function
  - 1.0
* - Digital interface function
  - 1.6
* - Analog low-level non-interface function (<1A)
  - 1.3
* - Analog low-level interface function (<1A)
  - 2.0
* - Analog power non-interface function (≥1A)
  - 1.6
* - Analog power interface function (≥1A)
  - 2.5
```

(eee_annex_a_2_9)=
## Use environment

(eee_annex_a_2_9_1)=
### Pi-Application table for launch/time to reach orbit & in-orbit phases

```{list-table} Recommended parameters for $\Pi_{\text{application}_i}$ for the launch, time to reach orbit and in-orbit phases
:name: eee_table_a_9_1
:header-rows: 1
:widths: 15 25 15 35 10

* - Criterion
  - Description
  - Levels
  - Examples and comments
  - Weight $P_{\text{oss}}$
* - User-related risk in the phase considered
  - Represents the user’s aptitude for compliance with procedures when faced with operational constraints
  - 0: Favourable  
    1: Moderate  
    2: Unfavourable
  - 0: The user complies scrupulously with the rules of use of the product, particularly for quality and safety reasons  
    1: The user generally complies with the rules of use of the product, but cost takes precedence  
    2: The user may not comply with the rules of use of the product, due to a difficult context of use where the only thing that counts is to succeed in the mission or to achieve an objective
  - 20
* - Level of user qualification level in the phase considered
  - Represents the level of expertise of the user or the technician regarding an operational context
  - 0: Favourable  
    1: Moderate  
    2: Unfavourable
  - 0: Highly qualified  
    2: Underqualified or inexperienced  
    In some phases, the user to be considered is the person who does the maintenance or servicing
  - 10
* - System mobility
  - Represents hazards relating to potential movement of the system
  - 0: Light  
    1: Moderate  
    2: Severe
  - 0: Few hazards (fixed or stable environment)  
    1: Moderate hazards  
    2: Severe hazards, large variability (automobile)
  - 4
* - Product handling
  - Represents the risk of incorrect handling, shocks, falls, etc.
  - 0: Light  
    1: Moderate  
    2: Severe
  - 0: Not handled  
    1: Handling without displacement or disassembly  
    2: Handling with displacement or disassembly  
    The severe level should be adopted if there is a possibility of maintenance being carried out on the product in the phase considered
  - 5
* - Type of electrical network (system)
  - Represents the level of electrical interference expected on power supplies, signals and electrical lines: powerups, power supply, connection/disconnection
  - 0: Light  
    1: Moderate  
    2: Severe
  - 0: Network not disturbed (dedicated and regulated power supply)  
    1: Little network disturbance  
    2: Network subject to disturbance (on board networks)  
    The type of network is a system-level parameter but it can be broken down to product level
  - 5
* - Exposure of product to human activity
  - Represents exposure to hazards relating to human activity: shock, use for other purposes, etc.
  - 0: Light  
    1: Moderate  
    2: Severe
  - 0: Uninhabitable zone  
    1: Possible activity in the product zone  
    2: Normal activity in the product zone  
    The product can be exposed to human activity even if it is not itself handled during normal use
  - 8
* - Exposure of product to machine disturbance
  - Represents hazards relating to operation of machines, engines, actuators: shocks, overheating, electrical disturbances, pollutants, etc.
  - 0: Light  
    1: Moderate  
    2: Severe
  - 0: Null (telephone)  
    1: Indirect exposure (product in hold)  
    2: High or direct exposure (product in engine area)
  - 3
* - Exposure of product to weather
  - Represents exposure to rain, hail, frost, snow, pollution, sand, solar radiation
  - 0: Light  
    1: Moderate  
    2: Severe
  - 0: Null (home use)  
    1: Indirect exposure (building, station concourse)  
    2: Outdoors (car engine)
  - 2
```

(eee_annex_a_2_9_2)=
### Pi-Application table for transport & storage phases

```{list-table} Recommended parameters for $\Pi_{\text{application}_i}$ for transport and storage phases
:name: eee_table_a_9_2
:header-rows: 1
:widths: 15 25 15 35 10

* - Criterion
  - Description
  - Levels
  - Examples and comments
  - Weight $P_{\text{oss}}$
* - User-related risk in the phase considered
  - Represents the user’s aptitude for compliance with procedures when faced with operational constraints
  - 0: Favourable  
    1: Moderate  
    2: Unfavourable
  - 0: The user complies scrupulously with the rules of use of the product, particularly for quality and safety reasons  
    1: The user generally complies with the rules of use of the product, but cost takes precedence  
    2: The user may not comply with the rules of use of the product, due to a difficult context of use where the only thing that counts is to succeed in the mission or to achieve an objective
  - 20
* - Level of user qualification level in the phase considered
  - Represents the level of expertise of the user or the technician regarding an operational context
  - 0: Favourable  
    1: Moderate  
    2: Unfavourable
  - 0: Highly qualified  
    1: Qualified  
    2: Underqualified or inexperienced  
    In some phases, the user to be considered is the person who does the maintenance or servicing
  - 10
* - System mobility
  - Represents hazards relating to potential movement of the system
  - 0: Light  
    1: Moderate  
    2: Severe
  - 0: Few hazards (fixed or stable environment)  
    1: Moderate hazards  
    2: Severe hazards, large variability (automobile)
  - 4
* - Product handling
  - Represents the risk of incorrect handling, shocks, falls, etc.
  - 0: Light  
    1: Moderate  
    2: Severe
  - 0: Not handled  
    1: Handling without displacement or disassembly  
    2: Handling with displacement or disassembly  
    The severe level should be adopted if there is a possibility of maintenance being carried out on the product in the phase considered
  - 5
* - Type of electrical network (system)
  - Represents the level of electrical interference expected on power supplies, signals and electrical lines: powerups, power supply, connection/disconnection
  - 0: Light  
    1: Moderate  
    2: Severe
  - 0: Network not disturbed (dedicated and regulated power supply)  
    1: Little network disturbance  
    2: Network subject to disturbance (on board networks)  
    The type of network is a system-level parameter but it can be broken down to product level
  - 5
* - Exposure of product to human activity
  - Represents exposure to hazards relating to human activity: shock, use for other purposes, etc.
  - 0: Light  
    1: Moderate  
    2: Severe
  - 0: Uninhabitable zone  
    1: Possible activity in the product zone  
    2: Normal activity in the product zone  
    The product can be exposed to human activity even if it is not itself handled during normal use
  - 8
* - Exposure of product to machine disturbance
  - Represents hazards relating to operation of machines, engines, actuators: shocks, overheating, electrical disturbances, pollutants, etc.
  - 0: Light  
    1: Moderate  
    2: Severe
  - 0: Null (telephone)  
    1: Indirect exposure (product in hold)  
    2: High or direct exposure (product in engine area)
  - 3
* - Exposure of product to weather
  - Represents exposure to rain, hail, frost, sandstorm, lightning, dust
  - 0: Light  
    1: Moderate  
    2: Severe
  - 0: Null (home use)  
    1: Indirect exposure (luggage hold, station concourse)  
    2: Outdoors (car engine)
  - 2
```

(eee_annex_a_2_10)=
## Pi-Ruggedising table for over stresses Rules

```{list-table} Recommended parameters for $\Pi_{\text{innovation}}$
:name: eee_table_a_10_1
:header-rows: 1
:widths: 10 50 20 20

* - Sheet
  - Recommendation
  - Preliminary Level
  - CDR Level
* - 169
  - Write complete procedures for all product implementation operations
  - 7 (N4)
  - To Be Completed
* - 157
  - Provide training and manage maintenance of skills for implementation of the product
  - 7 (N4)
  - To Be Completed
* - 158
  - Check that procedures specific to the product and Rules specific to businesses are respected by an appropriate monitoring system
  - 7 (N4)
  - To Be Completed
* - 156
  - Check that environmental specifications are complete
  - 4 (N4)
  - To Be Completed
* - 164
  - Justify that environment specifications are respected
  - 4 (N4)
  - To Be Completed
* - 165
  - Carry out a product improvement process (for example highly accelerated stress tests) so as to limit the product sensitivity to environmental constraints (disturbances, environments, overstress)
  - 7 (N4)
  - To Be Completed
* - 167
  - Carry out a process FMECA (Failure Modes, Effects and Criticality Analysis) for implementation operations
  - 4 (N4)
  - To Be Completed
* - 170
  - Respect a standard dealing with power supplies (standard that defines possible disturbances and possible EN252 type variations). The standard must be respected both for electricity generation and for electricity consumption
  - 4 (N4)
  - To Be Completed
* - 166
  - Perform an analysis of failure cases that could result in failure propagation
  - 4 (N4)
  - To Be Completed
* - 162
  - Include production and storage environments in the product environment specifications
  - 4 (N4)
  - To Be Completed
* - 160
  - Study and handle risks of the product under test being deteriorated by failures of its test means
  - 4 (N4)
  - To Be Completed
* - 163
  - Use appropriate prevention means to identify and handle reasonably predictable abnormal uses
  - 4 (N4)
  - To Be Completed
* - 161
  - Identify and use appropriate prevention means of preventing reasonably predictable aggressions
  - 4 (N4)
  - To Be Completed
* - 159
  - Design dependable electrical protection devices
  - 4 (N4)
  - To Be Completed
* - 171
  - Respect a standard dealing with conducted and radiated electromagnetic disturbances. This is equally applicable to the product and the system into which it is integrated
  - 3 (N4)
  - To Be Completed
```

Each level N1, N2, N3 or N4 of the recommendation is given a specific mark as defined in the following table:

```{list-table} Satisfaction marks for $\Pi_{\text{ruggedising}}$
:name: eee_table_a_10_2
:header-rows: 1
:widths: 50 50

* - Level
  - Marks $Satisfaction_{\text{mark}}$
* - N1
  - 0
* - N2
  - 1
* - N3
  - 2
* - N4
  - 3
```

The final calculation of $Pi_{ruggedising}$ with removal of question n°168 is therefore, for the preliminary assessment:

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_10_1
recom\_grade = \frac{1}{213} \cdot 
\sum_{i}^{\text{Recommendations}} Reco m_{\text{weight}_i} \cdot Satisfaction_{\text{Mark}_i} 
= \frac{213}{213} = 1
```

```{admonition} Equation
:class: equation
```{math}
:label: eq_a_10_2
\Pi_{\text{ruggedising}} = \exp[0.7 \cdot (1 - recom\_grade)] 
= \exp[0.7 \cdot (1 - 1)] = 1.0
```

(eee_annex_a_2_11)=
## Example of mission profiles for space applications

This annex provides examples of mission profiles dedicated to geostationary satellites LEO satellites according to the methodology to define mission profiles as described in {numref}`eee_8_3_1`.


(eee_annex_a_2_11_1)=
### Example of mission profile for geostationary satellites

Geostationary satellites are satellites located at 36 000km from Earth with a daily revolution of 24 hours. Most of them are telecommunication satellites. These satellites perform a cycle every day. Generally, the temperature of the equipment is controlled when the equipment is running and thermal variations are low. Some more severe orbits can occur during periods of eclipse, but without any significant effect on reliability. No humidity is present, and the equipment is submitted to vacuum. So, the mission profile of each equipment is not severe compared to equipment of other industrial domains.

Here is an example of electronic equipment located on the platform of a geostationary satellite such as an electronic control board. This mission profile is specific to this equipment but can be used as a basis for the formulation of a mission profile for any other equipment of a geostationary satellite. It can be used also as a reference mission profile for geostationary satellites when it is necessary to do comparisons among several different equipment, in order to get comparisons independent of the mission profile.

The mission description of this equipment is the following:

*	Launch of 2 hours until arrival of the satellite to its injection orbit, with reference temperature stable at 15°C without any variations,
*	Time to reach orbit is around 2 days, that is 48 hours with a hypothesis of chemical propulsion, with a temperature variation of about ±5°C during each cycle of 24 hours,
*	The typical mission duration in orbit is around 15 years, which corresponds to 5 475 cycles with 365 cycles of one day every year,
*	Stable temperature in orbit of 25°C with some thermal cycling of 5°C maximum due to thermal regulation.
As explained in paragraph 8.3.2.7, vibrations during launch phase are considered in the mission profile of GEO satellites even if their influence on the total reliability prediction could be minor.

Considering the example of electronic equipment inside a geostationary satellite, the corresponding mission profile is described in the following table. Values highlighted in bold characters are parameters of the mission profile which can differ from one equipment to another. Values in standard characters are parameters which usually do not change whatever the equipment.


```{list-table} Mission profile of an equipment of a geostationary satellite. (1)
:name: eee_table_a_11_1
:header-rows: 1
:widths: 20 10 10 10 10 10 10 20

*   - Phase name
    - On / Off
    - Calendar time
    - Reference temperature
    - ∆t
    - Cycle duration
    - Number of cycles
    - Maximum temperature during cycling
*   - Launch
    - ON
    - 2h
    - 15°C
    - 0°C
    - 2h
    - 1
    - 15°C
*   - Time to reach orbit
    - ON
    - 48h
    - 15°C
    - 10°C
    - 24h
    - 2
    - 20°C
*   - Geostationary satellite
    - ON
    - 131 400h
    - 25°C
    - 5°C
    - 24h
    - 5 475
    - 27,5°C
```
```{list-table} Mission profile of an equipment of a geostationary satellite.(2)
:name: eee_table_a_11_1_bis
:header-rows: 1
:widths: 20 10 10 10 10 10 10 10 10

*   - Phase name
    - On / Off
    - Calendar time
    - Relative humidity
    - Random vibrations
    - Saline pollution
    - Environ-mental pollution
    - Application pollution
    - Protection level
*   - Launch
    - ON
    - 2h
    - 70%RH
    - 18Grms
    - Low
    - Low
    - Low
    - Hermetic
*   - Time to reach orbit
    - ON
    - 48h
    - 0%RH
    - 0.01Grms
    - Low
    - Low
    - Low
    - Hermetic
*   - Geostationary satellite
    - ON
    - 131 400h
    - 0%RH
    - 0.01Grms
    - Low
    - Low
    - Low
    - Hermetic
```

(eee_annex_a_2_11_2)=
### Example of a mission profile for low Earth orbit satellites

LEO satellites are satellites located from 500 to 1 500km from Earth with several revolutions every day and a typical life duration from 3 to 10 years. Most of these satellites are observation satellites or telecommunication satellites for constellations. The time to reach their orbit after launch can last several months with electrical propulsion. Once they are in orbit, they are subjected to many cycles depending on the duration of their revolutions, from 95min for satellites located at 500km to 115min for satellites located at 1 500km. This is why each type of satellite has a different mission profile. However, all characteristics linked to the space environment are similar. Generally, the temperature of the equipment is controlled when it is running. There is no humidity, and the equipment is submitted to vacuum. So, the mission profile is not severe compared to equipment of other industrial domains with possible specificities in worst case conditions when temperature can fluctuate from -30°C to +60°C.

Here is an example of an electronic control board of a camera located on the payload of a low Earth orbit satellite dedicated to Earth observation. This camera is activated only when the satellite is above the area to observe. This mission profile is specific to this camera but can be used as a basis for the formulation of a mission profile for any other equipment of a LEO satellite, knowing that these satellites have different purposes and so very different mission profiles. Therefore, this LEO mission profile is an example for illustration purposes only and cannot be used as a reference mission profile for LEO satellites with the objective to do comparisons among several different equipment of satellites.

The mission of this equipment is the following:

*	Launch of 2 hours until the arrival of the satellite on its injection orbit, with reference temperature stable at 15°C without any variations, the equipment is switched off during this phase,
*	The time to reach its orbit is estimated to 6 months, that is 4 380 hours with the hypothesis of electrical propulsion, the equipment is Off and the reference temperature is changing by about ±5°C during cycles of 2 hours around the Earth,
*	Typical mission duration in orbit of around 5 years with cycles around the Earth of 2 hours with the hypothesis of camera switched on during observation and switched off during 3 times of 10 minutes per cycle,
*	Stable temperature in orbit of 25°C with thermal cycling from maximum ±5°C during equipment switched on and maximum ±3°C during equipment switched Off.

As explained in {numref}`eee_8_3_2_7`, vibrations during launch phase are considered in the mission profile of LEO satellites even if their influence on the total reliability prediction could be minor.

Considering this electronic equipment inside a LEO satellite, the example of a mission profile is described in the following table. Values highlighted in bold characters are parameters of the mission profile which can differ from one equipment to another. Values in standard characters are parameters which usually do not change whatever the equipment.


```{list-table} Mission profile of an equipment of a low Earth orbit satellite (1)
:name: eee_table_a_11_2
:header-rows: 1
:widths: 20 10 10 10 10 10 10 20

*   - Phase name
    - On / Off
    - Calendar time
    - Reference temperature
    - ∆t
    - Cycle duration
    - Number of cycles
    - Maximum temperature during cycling
*   - Launch
    - OFF
    - 2h
    - 15°C
    - 0°C
    - 2h
    - 1
    - 15°C
*   - Time to reach orbit
    - OFF
    - 4 380h
    - 15°C
    - 10°C
    - 2h
    - 2 190
    - 20°C
*   - Low Earth orbit satellite / Phase ON
    - ON
    - 32 850h
    - 25°C
    - 5°C
    - 30min
    - 65 700
    - 25°C
*   - Low Earth orbit satellite/ Phase OFF
    - OFF
    - 10 950h
    - 20°C
    - 3°C
    - 10min
    - 65 700
    - 20°C
```
```{list-table} Mission profile of an equipment of a geostationary satellite (2)
:name: eee_table_a_11_2_bis
:header-rows: 1
:widths: 20 10 10 10 10 10 10 10 10

*   - Phase name
    - On / Off
    - Calendar time
    - Relative humidity
    - Random vibrations
    - Saline pollution
    - Environ-mental pollution
    - Application pollution
    - Protection level
*   - Launch
    - OFF
    - 2h
    - 70%RH
    - 18Grms
    - Low
    - Low
    - Low
    - Hermetic
*   - Time to reach orbit
    - OFF
    - 4 380h
    - 0%RH
    - 0Grms
    - Low
    - Low
    - Low
    - Hermetic
*   - Low Earth orbit satellite / Phase ON
    - ON
    - 32 850h
    - 0%RH
    - 0Grms
    - Low
    - Low
    - Low
    - Hermetic
*   - Low Earth orbit satellite/ Phase OFF
    - OFF
    - 10 950h
    - 0%RH
    - 0Grms
    - Low
    - Low
    - Low
    - Hermetic
```

(eee_annex_a_2_11_3)=
### Mission profiles for science missions

Some science missions are leaving the Earth with far destination such as comets, satellites of other planets of solar system or asteroids. Other science missions are remaining in the Earth attraction with elliptic orbits. Each science mission is particular; therefore, each mission profile is specific and should be defined within the system team to catch all the parameters of each phase of the mission. However, some characteristics are similar whatever the mission is. Generally, there are two types of electronic equipment:

*	Equipment for cruise is switched on during the travel until joining the final destination and switched off after,
*	Equipment for mission as the payload is not activated during cruise and switched on when arriving at the final destination.

During the travel of the satellite, external conditions are those encountered in space. After reactivation, the temperature of the equipment is controlled. No humidity is present and the equipment is in the vacuum. Some characteristics of the missions are the following:

*	No typical duration, duration from few months to several years
*	Possible thermal cycling,
*	No humidity,
*	No vibrations,
*	No pollution.

Once arriving at the destination, the external conditions can be totally different from one mission to another and depend entirely on the final destination. The satellite and its modules are qualified to the conditions encountered at the final destination depending on the atmosphere, gravitation, external temperature and capability to store energy.


(eee_annex_a_2_12)=
## Pi-Process

(eee_annex_a_2_12_1)=
### Pi-Process calculation

The answers to the questions are used to define a Satisfaction_mark_i, according to the following recommendation status:

*	N1: the recommendation is not applied,
*	N2: the recommendation is only partially applied,
*	N3: the recommendation is practically applied,
*	N4: the recommendation is fully applied.

The Satisfaction_mark_i for each level is determined as follows:

```{list-table} Satisfaction marks for $\Pi_{\text{process}}$
:name: eee_table_a_12_11_1
:header-rows: 1
:widths: 50 50

* - Level
  - Satisfaction$_{\text{mark}}$
* - N1
  - 0
* - N2
  - 1
* - N3
  - 2
* - N4
  - 3
```

Each recommendation is weighted by a specific Recom_Weighti. The value of each Recom_Weighti for each question of phase j is provided in this Annex, section 12.2. Once all questions have been answered, the first calculation step consists in producing the Audit_Markj for each phase j according to the formula:

```{admonition} Equation
:class: equation
```{math}
:label: equation_12_1_1
Audit\_Mark_j = \sum_{i=1}^{n} Reco m_{\text{Weight}_i} \cdot Satisfaction_{\text{mark}_i}
```

A calibration is necessary to neutralise questions about activities that are not relevant for the considered equipment. Therefore, the next step consists in producing the Max_Audit_Markj for each phase j. The Max_Audit_Markj corresponds to a perfect questionnaire, in which the satisfaction level is N4 (Satisfaction_mark\ =\ 3) for all selected questions:

```{admonition} Equation
:class: equation
```{math}
:label: equation_12_1_2
Max\_Audit\_Mark_j = \sum_{i=1}^{n} Reco m_{\text{Weight}_i} \cdot 3
```

The process factor is calculated as follows:

```{admonition} Equation
:class: equation
```{math}
:label: equation_12_1_3
\Pi_{\text{process}} = \exp \left[ 2.079 \cdot \left( 1 - Process\_Grade \right) \right]
```
With:

```{admonition} Equation
:class: equation
```{math}
:label: equation_12_1_4
Process\_Grade = \sum_{j=1}^{7} \left( Contribution_{\text{Phase}_j} \cdot \frac{Audit\_Mark_j}{Max\_Audit\_Mark_j} \right)
```


(eee_annex_a_2_12_2)=
### List of questions in the Pi Process questionnaire – Pre filled for space applications

<!--
```{list-table} Satisfaction marks for $\Pi_{\text{process}}$
:name: eee_table_a_12_12_1
TBD
```
-->

(eee_annex_a_2_13)=
## Pi Process – Modified questions

The questionnaire is performed by a list of questions applicable for each phase of the development and manufacturing in order to estimate the process factor \mathrm{\Pi}_{Process}\ for quality and technical control over reliability in the product life cycle as defined in {numref}`eee_8_3_2_2`. However, some of the questions are not perfectly applicable to space applications. This is why this present annex contains the modified questions of the questionnaire adapted to space applications according to the content of paragraph 8.3.2.2. Recommendations for the satisfaction level of the modified and non-modified questions of the questionnaire are proposed in Section 12. 
Questions n°14, n°71 and n°114 are modified only for the “Operation and maintenance” phase and are not modified for the other phases. Other questions are modified for all phases of use.


(eee_annex_a_2_14)=
## Pi Process – RF / MW

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_14_1
\Pi_{\text{processRFMW}} = \exp \left[ 1.504 \cdot (1 - RFMW\_grade) \right] - 0.5
```


```{admonition} Equation
:class: equation
```{math}
:label: equation_a_14_2
RFMW\_grade = \frac{\sum \text{Values in the following table if true, else 0}}{\text{Maximum applicable mark}}
```

<!--
```{list-table} Factors influencing the ΠProcessRFMW factor.
:name: eee_table_a_14_1
TBD
```
-->

(eee_annex_a_2_15)=
## Pi Process – ASIC

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_15_1
\Pi_{\text{processASIC}} = \exp \left[ 1.39 \cdot (1 - ASIC\_grade) \right]
```

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_15_2
ASIC\_grade = \frac{\sum \text{Values in the following table}}{\text{Maximum applicable mark}}
```

<!--
```{list-table} Factors influencing the ΠProcessASIC factor.
:name: eee_table_a_15_1
TBD
```
-->

(eee_annex_a_2_16)=
## Pi Process – Hybrids / MCM

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_16_1
\Pi_{\text{process\_H\&M}} = \exp \left[ 1.39 \cdot (1 - H\&M\_process\_grade) \right]
```


```{admonition} Equation
:class: equation
```{math}
:label: equation_a_16_2
H\&M\_process\_grade = \frac{\sum \text{Values in the following table}}{\text{Maximum applicable mark}}
```
<!--
```{list-table} Factors influencing the ΠProcess_H&M factor
:name: eee_table_a_16_1
TBD
```
-->

(eee_annex_a_2_17)=
## Pi Power 

```{admonition} Equation
:class: equation
```{math}
:label: equation_a_17_1
\Pi_{PW} = \exp \left[ 3.401 \cdot (1 - Process\_grade) \right]
```


```{admonition} Equation
:class: equation
```{math}
:label: equation_a_17_2
Process\_grade = \frac{\sum \text{Values in the following table}}{\text{Maximum applicable mark}}
```

<!--
```{list-table} Factors influencing the ΠPW factor
:name: eee_table_a_17_1
TBD
```
-->

(eee_annex_a_2_18)=
## Pi Film

```{admonition} Equation
:class: equation
```{math}
:label: equation_18_1
\Pi_{PW} = \exp \left[ 3.401 \cdot (1 - Process\_grade) \right]
```

```{admonition} Equation
:class: equation
```{math}
:label: equation_18_2
Process\_grade = \frac{\sum \text{Values in the following table}}{\text{Maximum applicable mark}}
```

<!--
```{list-table} Factors influencing the ΠFILM factor
:name: eee_table_a_18_1
TBD
```
-->

(eee_annex_a_2_19)=
## Quality factors

```{admonition} Equation
:class: equation
```{math}
:label: equation_17_1
\Pi_{PM} = \exp \left[ 1.39 \cdot (1 - Part\_Grade) - 0.69 \right]
```

With Part_Grade for active parts:

```{admonition} Equation
:class: equation
```{math}
:label: equation_17_2
Part\_Grade = \frac{\left( QA_{\text{manufacturer}} + QA_{\text{component}} + RA_{\text{component}} \right) \cdot \varepsilon}{36}
```

And for other parts:`

```{admonition} Equation
:class: equation
```{math}
:label: equation_17_3
Part\_Grade = \frac{\left( QA_{\text{manufacturer}} + QA_{\text{component}} \right) \cdot \varepsilon}{24}
```

(eee_annex_a_2_19_1)=
### QA manufacturer table

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table_a_19_1')" placeholder="Search table...">

```{list-table} Recommendation definition of parameter $QA_{\text{manufacturer}}$
:name: eee_table_a_19_1
:header-rows: 1
:widths: 50 30 20

* - Manufacturer quality assurance level
  - Position relative to the state of the art
  - $QA_{\text{manufacturer}}$
* - Certified according to standard: IATF/TS 16949
  - Higher
  - 3
* - Certified according to one of the following standards:  
    TL9000, ISO/TS 22163, EN9100, AS9100, JISQ9100, AQAP 2110, AQAP 2120, AQAP 2130, ISO/TS 22163, IEC TS 62239, ESA/ECSS QML/QPL, MIL-PRF-38535 QML, MIL-PRF-19500 and any standards in accordance with ISO 9001 version 2015
  - Equivalent
  - 2
* - Certified ISO 9001 version 2015
  - Lower
  - 1
* - No information
  - Very much lower
  - 0
```

(eee_annex_a_2_19_2)=
### RA component tables

**Hermetic**

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table_a_19_2')" placeholder="Search table...">

```{list-table} Recommendation definition of parameter $\text{RA}_{\text{component}}$
:name: eee_table_a_19_2
:header-rows: 1
:widths: 8 10 18 10 18 18 18

*   - $\text{RA}_{\text{component}}$
    - Risk
    - High temperature operating life
    - Pre-conditioning
    - Thermal cycling
    - Temperature humidity bias
    - Mechanical tests
*   - 3
    - Very reliable - level A
    - +125°C during 2 000h at Vmax on 15 parts
    - Done
    - -55°C / +125°C during 100 cycles on 15 parts
    - +25°C / +65°C and 90%RH during 10 cycles on 15 parts
    - vibrations 20g and shocks 1 500g during 5 times
*   - 2
    - Very reliable - level B
    - +125°C during 1 000h at Vmax on 15 parts
    - Done
    - -55°C / +125°C during 100 cycles on 15 parts
    - +25°C / +65°C and 90%RH during 10 cycles on 15 parts
    - vibrations 20g and shocks 1 500g during 5 times
*   - 1
    - Reliable
    - Inferior
    - Done
    - Inferior
    - Not done
    - Not done
*   - 0
    - Not reliable
    - Not done
    - Not done
    - Not done
    - Not done
    - Not done
```

**Non-hermetic**

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table_a_19_3')" placeholder="Search table...">

```{list-table} Recommendation for the definition of parameter $\text{RA}_{\text{component}}$ for plastic components
:name: eee_table_a_19_3

* - <table class="myTable" id="eee_table_a_19_3">
        <thead>
            <tr>
                <th><em>RA<sub>com-ponent</sub></em></th>
                <th>Risk</th>
                <th>High temperature operating life</th>
                <th>Pre-conditioning</th>
                <th>Thermal cycling</th>
                <th colspan="2">Highly Accelerated Stresses Tests or Temperature humidity bias</th>
            </tr>
        </thead>
        <tr>
            <td>3</td>
            <td>
                <p>Level A</p>
                <p>Class 1</p>
            </td>
            <td>+125°C during 2 000h at Vmax on 10 parts</td>
            <td>Done</td>
            <td>-55°C / +125°C during 500 cycles on 10 parts</td>
            <td>+130°C and 85%RH during 96h on 10 parts</td>
            <td>+85°C and 85%RH during 1 000h on 10 parts</td>
        </tr>
        <tr>
            <td>2</td>
            <td>
                <p>Level B</p>
                <p>Class 2</p>
            </td>
            <td>+125°C during 1 000h at Vmax on 10 parts</td>
            <td>Done</td>
            <td>-55°C / +125°C during 500 cycles on 10 parts</td>
            <td>+130°C and 85%RH during 96h on 10 parts</td>
            <td>+85°C and 85%RH during 1 000h on 10 parts</td>
        </tr>
        <tr>
            <td>1</td>
            <td>
                <p>Reliable</p>
                <p>Class 3</p>
            </td>
            <td>Not done</td>
            <td>Done</td>
            <td>Not done</td>
            <td>Not done</td>
            <td>Not done</td>
        </tr>
        <tr>
            <td>0</td>
            <td>Not reliable</td>
            <td>Not done</td>
            <td>Not done</td>
            <td>Not done</td>
            <td>Not done</td>
            <td>Not done</td>
        </tr>
    </table>
```

**Epsilon - Experience factor**

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table_a_19_4')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\epsilon$
:name: eee_table_a_19_4

* - <table class="myTable" id="eee_table_a_19_4">
        <thead>
            <tr>
                <th><strong>Description of the risk related to use of this manufacturer</strong></th>
                <th><strong>Value of the ε factor</strong></th>
            </tr>
        </thead>
        <tr>
            <td>Recognized manufacturer: Mature processes for the item considered</td>
            <td>4</td>
        </tr>
        <tr>
            <td>Recognized manufacturer - Processes not analysed or not mature for the item considered</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Manufacturer not recognized (for example never audited or audited more than 2 years earlier) or small
                series productions</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Previous disqualification or problem with feedback from operations</td>
            <td>1</td>
        </tr>
    </table>
```