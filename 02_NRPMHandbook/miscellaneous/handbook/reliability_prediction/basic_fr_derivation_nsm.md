<!--- Copyright (C) Matrisk GmbH 2022 -->

(misc_10_7)=
# Basic failure rate derivation for “non-standard model” items

When the {term}`miscellaneous item <Miscellaneous item>` under consideration does not match the criteria of the miscellaneous equivalent class (e.g. {term}`SSPA` – Solid State Power Amplifier - cannot be compared to a {term}`TWTA` in terms of technology), it is necessary to build a reliability model based on engineering/{term}`PoF` approach as defined hereafter.

Once the reliability model is established it can be tailored as necessary based on the approach presented in {numref}`misc_10_5`.

First, it is necessary, to collect/define all technical information about the miscellaneous item in order to characterize it (refer to {numref}`misc_10_5`). Then the basic failure rate $\lambda_{1}$ = $\lambda_{B}$ is defined ([Step 1](misc_step1)) as discussed below. Finally, the tailoring of this basic failure rate follows the “standard model” procedure as presented in the subsections of {numref}`misc_10_5`) corresponding to [Step 2](misc_step2) to [Step 7](misc_step7).


(misc_10_7_1)=
## DFMEA / PFMEA

After the first item characterization, a {term}`DFMEA` and a {term}`PFMEA` are performed in order to assess the failure modes due to:

1. Design errors,
2. Manufacturing errors.

It is recommended to use the {cite:p}`mis-SAE_standard, mis-PFMEA` which provides the method to apply for a DFMEA / PFMEA. PFMEA is also specified in {cite:p}`mis-ECSS-Q-ST-30-02C`.

**FMEA: Required for every unit**

* **As a tool/method**: Supporting the design of the unit, identifying all the elementary “failure modes" due to “{term}`random failure <Random failure>`” (part intrinsic reliability) as defined in the failure mode list (refer to {cite:p}`mis-ECSS-Q-ST-30-02C`). 
* **At unit level**: Under supplier responsibility
* **At system level**: Integrated at system level by a system {term}`RAMS` engineer (including HSIA supporting the failure tolerance: observability in-orbit…)

**DFMEA: Required on critical functions only (Risk analysis)**

* **As a tool/method**: Supporting the product quality identifying all the elementar failure mode's due to design errors. It includes, as a minimum, the failure modes identified by FMEA,
* **At unit level**:: Under unit designer / Quality assurance ({term}`QA`) responsibility,
* **At system level**: Reviewed by procurement within the unit acceptance process.

**PFMEA: Required on critical functions only (Risk analysis)**

* **As a tool/method**: Supporting the product quality identifying all the elementary failure modes due to manufacturing errors,
* **At unit level**: Under unit Quality assurance ({term}`QA`) responsibility,
* **At system level**: Reviewed by procurement within the unit acceptance process.

```{figure} ../../picture/figure4_8.png
---
width: 600px
name: Figure_5_8
---
Differences between FMEA, DFMEA and PFMEA
```

{numref}`Figure_5_8` highlights the differences and the commonalities between FMEA, DFMEA and PFMEA.

{numref}`Figure_5_9`  provides an example of DFMEA and PFMEA at elementary part level (interconnect be-tween Solar cells). The left-hand side of the table refers to FMEA (blue perimeter in {numref}`Figure_5_8`), whereas the right-hand side refers to DFMEA data (green perimeter in {numref}`Figure_5_8`).

The main outcome is the ranking of every root cause (design error, manufacturing error) in:

* Severity ({term}`SEV`)
* Occurrence ({term}`OCC`)
* Detectability ({term}`DET`)

The Risk Priority Number ({term}`RPN`), which is derived, is an index reflecting the residual technical risk.

```{figure} ../../picture/figure4_10.png
---
width: 600px
name: Figure_5_9
---
DFMEA and PFMEA at elementary part level (example of solar cells interconnect)

Where, Solar Array ({term}`SA`), SA current ({term}`I_SA`), Telemetry ({term}`TM`) and Single Point Failure ({term}`SPF`).
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'misc-table_10_6')" placeholder="Search table...">

````{list-table} Occurrence scale with 10 levels
:name: misc-table_10_6
:header-rows: 0
:widths: 100

* - ```{raw} html
    <table class="easy-table" id="misc-table_10_6" style="border-collapse:collapse; width:100%;" border="1" cellspacing="0" cellpadding="5">
      <!-- Title band -->
      <tr style="background-color:#d9d9d9; font-weight:bold; text-align:center;">
        <td colspan="6">OCCURRENCE</td>
      </tr>

      <!-- Header row -->
      <tr style="background-color:#efefef; font-weight:bold; text-align:center;">
        <td style="width:10%;">Rank</td>
        <td style="width:20%;">Category</td>
        <td style="width:20%;">Occurrence of cause</td>
        <td style="width:30%;">Examples / Guidance</td>
        <td style="width:10%;">TRL</td>
        <td style="width:10%;">%</td>
      </tr>

      <!-- 10 -->
      <tr>
        <td style="background-color:#ff6b6b; text-align:center; font-weight:bold;">10</td>
        <td>Certain and unpredictable</td>
        <td>Failure is unpredictable</td>
        <td>New technology, new design with no history.</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">1/10</td>
      </tr>

      <!-- 9 -->
      <tr>
        <td style="background-color:#ffa07a; text-align:center; font-weight:bold;">9</td>
        <td>Inevitable</td>
        <td>Failure is almost inevitable &amp; persistent</td>
        <td>Failure is inevitable with new design, new application or change in duty cycle/operating conditions.</td>
        <td style="text-align:center;">TR1</td>
        <td style="text-align:center;">1/20</td>
      </tr>

      <!-- 8 -->
      <tr>
        <td style="background-color:#f4b183; text-align:center; font-weight:bold;">8</td>
        <td>Almost certain</td>
        <td>Failure is almost certain</td>
        <td>Failure is likely with new design/application or change in duty cycle/operating conditions.</td>
        <td style="text-align:center;">TR2</td>
        <td style="text-align:center;">1/50</td>
      </tr>

      <!-- 7 -->
      <tr>
        <td style="background-color:#c6e070; text-align:center; font-weight:bold;">7</td>
        <td>Frequent</td>
        <td>Frequent failures</td>
        <td>Failure is uncertain with new design/application or change in duty/operating conditions.</td>
        <td style="text-align:center;">TR3</td>
        <td style="text-align:center;">1/100</td>
      </tr>

      <!-- 6 -->
      <tr>
        <td style="background-color:#dcefb2; text-align:center; font-weight:bold;">6</td>
        <td>Repeated</td>
        <td>Repeated failures</td>
        <td>Limited number of failures associated (identical design, simulation and testing). Use of Factor of Safety or Margin of Safety.</td>
        <td style="text-align:center;">TR4</td>
        <td style="text-align:center;">1/500</td>
      </tr>

      <!-- 5 -->
      <tr>
        <td style="background-color:#c0c0c0; text-align:center; font-weight:bold;">5</td>
        <td>Occasional</td>
        <td>Occasional failures</td>
        <td>Limited number of failures associated (identical design, simulation and testing). Use of Factor of Safety or Margin of Safety.</td>
        <td style="text-align:center;">TR5</td>
        <td style="text-align:center;">1/2000</td>
      </tr>

      <!-- 4 -->
      <tr>
        <td style="background-color:#a9d18e; text-align:center; font-weight:bold;">4</td>
        <td>Infrequent</td>
        <td>Limited failures</td>
        <td>Limited number of failures associated (identical design, simulation and testing). Use of Factor of Safety or Margin of Safety.</td>
        <td style="text-align:center;">TR6</td>
        <td style="text-align:center;">1/10000</td>
      </tr>

      <!-- 3 -->
      <tr>
        <td style="background-color:#8fcf73; text-align:center; font-weight:bold;">3</td>
        <td>Isolated failure</td>
        <td>Relatively loaded failures</td>
        <td>Limited number of failures associated (identical design, simulation and testing). Reduce stress–strength interference.</td>
        <td style="text-align:center;">TR7</td>
        <td style="text-align:center;">1/100000</td>
      </tr>

      <!-- 2 -->
      <tr>
        <td style="background-color:#d9ead3; text-align:center; font-weight:bold;">2</td>
        <td>Unlikely</td>
        <td>Very isolated failures</td>
        <td>No observed failures (identical design, simulation and testing). Design for robustness techniques.</td>
        <td style="text-align:center;">TR8</td>
        <td style="text-align:center;">1/1000000</td>
      </tr>

      <!-- 1 -->
      <tr>
        <td style="background-color:#77dd77; text-align:center; font-weight:bold;">1</td>
        <td>Remote</td>
        <td>Failure is highly unlikely</td>
        <td>Failure is eliminated through preventive type design control. Use of proven design guidelines/Standards. Use of field lessons learned.</td>
        <td style="text-align:center;">TR9</td>
        <td style="text-align:center;">&epsilon;</td>
      </tr>
    </table>
    ```
````



Where, {term}`TRL` means Technology Readiness Level.

(misc_10_7_2)=
## Probability assessment

The occurrence scale of {numref}`misc_10_7_2` is used to derive, based on engineering judgement, either a failure rate or a probability of failure, per failure mode:

* In the case that the detectability (i.e. the capacity to detect on ground the defect) is certain, the probability of failure is set to 0 under the condition that no {term}`degradation <Degradation failure>` in time is expected (e.g.  if a particle inside a {term}`RF` passive part which originates from manufacturing is necessarily detected on ground with no possibility to get a particle during the mission, then the associated probability of failure is set to 0).

* A probability of occurrence is assigned to every failure mode, and the sum provides the probability of occurrence of the item.

* A failure rate could be derived assuming the probability of occurrence on the specified lifetime is equal to the probability assigned to the failure mode, e.g. probability assessed to $10^{-4}$ as level 4 ({numref}`misc-table_10_6`) leads to a failure rate of $1,14 10^{-9}$ for 10 years.


This represents the basic failure rate or the basic probability of failure. Then, the general process to adapt this failure rate is described in {numref}`misc_10_5` of this part.

```{admonition} Note 
:class: note
:name: note
This probability ranking needs to be clearly justified and documented.
```

