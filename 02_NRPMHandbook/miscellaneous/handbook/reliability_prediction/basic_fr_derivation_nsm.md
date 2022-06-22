(misc_5_7)=
# Basic failure rate derivation for “non-standard model” items
When the {term}`miscellaneous item <Miscellaneous item>` under consideration does not match the criteria of the miscellaneous equivalent class (e.g. {term}`SSPA` – Solid State Power Amplifier- cannot be compared to a {term}`TWTA` in terms of technology), it is necessary to build a reliability model based on engineering/{term}`PoF` approach as defined hereafter.

Once the reliability model is established it can be tailored as necessary based on the approach presented in {numref}`misc_5_5`.

First, it is necessary, to collect/define all technical information about the {term}`miscellaneous item <Miscellaneous item>` in order to characterize it (refer to {numref}`misc_5_5`). Then the basic failure rate $\lambda_{1}$ = $\lambda_{B}$ is defined (step 1) as discussed below. Finally, the tailoring of this basic failure rate follows the “standard model” procedure as presented in the subsections of {numref}`misc_5_5`) corresponding to [step 2](misc_step2) to [7](misc_step7).


(misc_5_7_1)=
## Design FMEA / Process FMEA

After the first item characterization, a {term}`Design FMEA` and a {term}`Process FMEA` are performed in order to assess the {term}`failure modes <Failure mode>` due to 

1. Design errors and
2. Manufacturing errors.

It is recommended to use the {cite:t}`mis-SAE_standard, mis-PFMEA` which provides the method to apply for a {term}`Design FMEA` / {term}`Process FMEA`. {term}`Process FMEA` is also specified in {cite:t}`mis-ECSS-Q-ST-30-02C`.

**FMEA: Required for every unit**

* Is a tool/method supporting the design of the unit, identifying all the elementary “{term}`failure modes <Failure mode>`” due to “_{term}`random failure <Random failure>`” (part intrinsic reliability)_ as defined in the {term}`failure mode <Failure mode>` list (refer to {cite:t}`mis-ECSS-Q-ST-30-02C`). 
* **@unit level**: under supplier responsibility
* **@system level**: integrated at system level by System {term}`RAMS` engineer (including HSIA supporting the failure tolerance: observability in-orbit…)

**{term}`Design FMEA`: Required on critical functions only (Risk analysis)**

* Is a tool/method supporting the product {term}`quality <Quality>` identifying all the elementary {term}`failure mode <Failure mode>`s due to DESIGN errors. It includes, as a minimum, the {term}`failure mode <Failure mode>`s identified by FMEA.
* **@unit level**: under unit designer / {term}`quality <Quality>` Assurance responsibility
* **@system level**: reviewed by procurement within the unit acceptance process

**{term}`Process FMEA`: Required on critical functions only (Risk analysis)**

* Is a tool/Method supporting the product {term}`quality <Quality>` identifying all the elementary {term}`failure modes <Failure mode>` due to MANUFACTURING errors.
* **@unit level**: under unit {term}`quality <Quality>` Assurance responsibility
* **@system level**: reviewed by procurement within the unit acceptance process

```{figure} ../../picture/figure4_8.png
---
width: 600px
name: Figure_5_8
---
Differences between FMEA, {term}`Design FMEA` and {term}`Process FMEA`.
```

{numref}`Figure_5_8` highlights the differences and the commonalities between FMEA, {term}`Design FMEA` and {term}`Process FMEA`.

{numref}`Figure_5_9`  provides an example of {term}`Design FMEA` and {term}`Process FMEA` at elementary part level (interconnect between Solar cells). The left-hand side of the table refers to FMEA (blue perimeter in {numref}`Figure_5_8`), whereas the right-hand side refers to {term}`Design FMEA` data (green perimeter in {numref}`Figure_5_8`).

The main outcome is the ranking of every root cause (Design error, Manufacturing error) in

* Severity ({term}`SEV`)
* Occurrence ({term}`OCC`)
* Detectability ({term}`DET`)

The Risk Priority Number ({term}`RPN`), which is derived, is an index reflecting the residual technical risk.

```{figure} ../../picture/figure4_10.png
---
width: 600px
name: Figure_5_9
---
Differences between FMEA, {term}`Design FMEA` and {term}`Process FMEA`. The following terms are mentioned in this figure: Solar Array ({term}`SA`), SA current ({term}`I_SA`), Telemetry ({term}`TM`) and Single Point Failure ({term}`SPF`).
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'misc-table4-6')" placeholder="Search table...">

```{list-table} Occurrence scale with 10 levels
:name: misc-table4-6
:header-rows: 1
:widths: 10 20 20 30 10 10

*   - Rank
    - Category
    - Occurence of cause
    - Explanation
    - {term}`TRL`
    - %
*   - 10
    - Certain and unpredictable
    - Failure is unpredictable
    - New technology / new design no history
    - 
    - 1/10
*   - 9
    - Inevitable
    - Failure is almost inevitable & persistent
    - Failure is inevitable with new design, new inevitable & application, or change in duty cycle/operating persistent conditions.
    - TRL1
    - 1/20
*   - 8
    - Almost certain
    - Failure is almost certain
    - Failure is likely with new design, new application, orchange in duty cycle/operating conditions.
    - TRL2
    - 1/50
*   - 7
    - Frequent
    - Frequent failures
    - Failure is uncertain with new design, new application, or change in duty cycle/operating conditions.
    - TRL3
    - 1/100
*   - 6
    - Repeated
    - Repeated failures
    - Limited number of failures associated (identical design, simulation and testing). Use of Factor of Safety or Margin of Safety
    - TRL4
    - 1/500
*   - 5
    - Occasional
    - Occasional failures
    - Limited number of failures associated (identical design, simulation and testing). Use of Factor of Safety or Margin of Safety
    - TRL5
    - 1/2000
*   - 4
    - Infrequent
    - Limited failures 
    - Limited number of failures associated (identical design, simulation and testing). Use of Factor of Safety or Margin of Safety
    - TRL6
    - 1/10000
*   - 3
    - Isolated failure
    - Relatively loaded failures
    - Limited number of failures associated (identical design, simulation and testing). Use of Factor of Safety or Margin of Safety
    - TRL7
    - 1/100000
*   - 2
    - Unlikely
    - Very isolated failures
    - No observed failures (identical design, simulation and testing). Reduce stress-strength interference
    - TRL8
    - 1/1000000
*   - 1
    - Remote
    - Failure is highly unlikely
    - Failure is eliminated through preventive-type design control Use of proven design guidelines/Standards. Use of field lessons learned
    - TRL9
    - $\epsilon$
```

(misc_5_7_2)=
## Probability assessment

The occurrence scale of {numref}`misc_5_7_2` is used to derive, based on engineering judgement, either a failure rate or a probability of failure, per {term}`failure mode <Failure mode>`:

* In the case Detectability (i.e. the capacity to detect on ground the defect) is certain, the probability of failure is set to 0 under the condition that no degradation in time is expected (e.g.  if a particle inside a {term}`HF/RF passive part <HF/RF passive part>` which originates from manufacturing is necessarily detected on ground with no possibility to get a particle during the mission, then the associated probability of failure is set to 0).
* A probability of occurrence is assigned to every {term}`failure mode <Failure mode>` and the sum provides the probability of occurrence of the item.
* A failure rate could be derived assuming the probability of occurrence on the specified lifetime is equal to the probability assigned to the {term}`failure mode <Failure mode>`, e.g. probability assessed to $10^{-4}$ as level 4 ({numref}`misc-table4-6`) leads to a failure rate of $1,14 10^{-9}$ for 10 years.


This represents the basic failure rate or the basic probability of failure.

Then the general process to adapt this failure rate is described in {numref}`misc_5_5`.

It is noteworthy that this probability ranking needs to be clearly justified and documented.
