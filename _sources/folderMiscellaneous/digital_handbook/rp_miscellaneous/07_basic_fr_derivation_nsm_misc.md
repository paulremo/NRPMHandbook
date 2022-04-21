# Basic failure rate derivation for “non-standard model” items

When the miscellaneous item under consideration does not match the criteria of the miscellaneous equivalent class (e.g. SSPA – Solid State Power Amplifier- cannot be compared to a TWTA in terms of technology), it is necessary to build a reliability model based on engineering/PoF approach as defined hereafter.

Once the reliability model is established it can be tailored as necessary based on the approach presented in [Section 4.5](misc_4_5).

First, it is necessary, to collect/define all technical information about the miscellaneous item in order to characterize it (refer to [Section 4.5](misc_4_5)). Then the basic failure rate $\lambda_{1}$ = $\lambda_{B}$ is defined (step 1) as discussed below. Finally, the tailoring of this basic failure rate follows the “standard model” procedure as presented in the subsections of [Section 4.5](misc_4_5) corresponding to [step 2](misc_step2) to [7](misc_step7).


(misc_4_7_1)=
### DFMEA / PFMEA

After the first item characterization, a DFMEA and a PFMEA are performed in order to assess the failure modes due to 

1. Design errors and
2. Manufacturing errors.

It is recommended to use the SAE standard [BR1] which provides the method to apply for a DFMEA / PFMEA. PFMEA is also specified in Error: Reference source not found.

**FMEA: Required for every unit**

* Is a tool/method supporting the design of the unit, identifying all the elementary “failure modes” due to “_RANDOM FAILURE” (part intrinsic reliability)_ as defined in the failure mode list (refer to Error: Reference source not foundannex G). 
* **@unit level**: under supplier responsibility
* **@system level**: integrated at system level by System RAMS engineer (including HSIA supporting the failure tolerance: observability in-orbit…)

```{admonition} Todo
:class: todo
miss ref above
```

**DFMEA: Required on critical functions only (Risk analysis)**

* Is a tool/method supporting the product quality identifying all the elementary failure modes due to DESIGN errors. It includes, as a minimum, the failure modes identified by FMEA.
* **@unit level**: under unit designer / Quality Assurance responsibility
* **@system level**: reviewed by procurement within the unit acceptance process

**PFMEA: Required on critical functions only (Risk analysis)**

* Is a tool/Method supporting the product quality identifying all the elementary failure modes due to MANUFACTURING errors.
* **@unit level**: under unit Quality Assurance responsibility
* **@system level**: reviewed by procurement within the unit acceptance process

(misc_figure4_8)=
```{figure} ../picture/figure4_8.png
---
width: 600px
name: figure4_8
---
Differences between FMEA, DFMEA and PFMEA.
```

[Figure 4 -8](misc_figure4_8) highlights the differences and the commonalities between FMEA, DFMEA and PFMEA.

[Figure 4 -9](misc_figure4_9)  provides an example of DFMEA and PFMEA at elementary part level (interconnect between Solar cells). The left-hand side of the table refers to FMEA (blue perimeter in [Figure 4 -8](misc_figure4_8)), whereas the right-hand side refers to DFMEA data (green perimeter in [Figure 4 -8](misc_figure4_8)).

The main outcome is the ranking of every root cause (Design error, Manufacturing error) in

* **SEV**erity
* **OCC**urrence
* **DET**ectability

The Risk Priority Number (RPN), which is derived, is an index reflecting the residual technical risk.

(misc_figure4_9)=
```{figure} ../picture/figure4_10.png
---
width: 600px
name: figure4_9
---
Differences between FMEA, DFMEA and PFMEA.
```

```{glossary}
SA
  Solar Array

I_SA
  SA current

TM
  Telemetry

SPF
  Single Point Failure
```

(misc_table4_6)=
**Table 4.6** : Occurrence scale with 10 levels.

```{image} ../picture/figure4_11.png
:alt: table4_6
:align: center
```

```{glossary}
TRL
  Technology Readiness Level
```


(misc_4_7_2)=
### Probability assessment

The occurrence scale of [Table 4 -6](misc_table4_6) is used to derive, based on engineering judgement, either a failure rate or a probability of failure, per failure mode:

* In the case Detectability (i.e. the capacity to detect on ground the defect) is certain, the probability of failure is set to 0 under the condition that no degradation in time is expected (e.g.  if a particle inside a RF passive part which originates from manufacturing is necessarily detected on ground with no possibility to get a particle during the mission, then the associated probability of failure is set to 0).
* A probability of occurrence is assigned to every failure mode and the sum provides the probability of occurrence of the item.
* A failure rate could be derived assuming the probability of occurrence on the specified lifetime is equal to the probability assigned to the failure mode, e.g. probability assessed to $10^{-4}$ as level 4 ([Table 4 -6](misc_table4_6) ) leads to a failure rate of $1,14 10^{-9}$ for 10 years.


This represents the basic failure rate or the basic probability of failure.

Then the general process to adapt this failure rate is described in [Section 4.5](misc_4_5).

It is noteworthy that this probability ranking needs to be clearly justified and documented.
