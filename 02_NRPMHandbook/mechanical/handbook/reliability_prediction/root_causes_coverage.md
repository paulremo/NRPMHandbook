<!--- Copyright (C) Matrisk GmbH 2022 -->

(meca_9_2)=
# Root causes coverage

{numref}`meca-table4-1` gives an overview of the failure categories defined in {ref}`Part 1 - Methodologies <methodologies>` and their coverage by the methods described in the present part. 

In the following subsections, the interpretation of each failure category within the mechanical part is briefly explained.

```{list-table} Coverage of failure root causes by the mechanical reliability prediction methodology
:name: meca-table4-1
:header-rows: 1
:widths: 25 75

*   - Root cause category
    - Coverage by the mechanical reliability prediction methodology
*   - **{term}`Random failures <Random failure>`**
    - Considered by the methods described in {numref}`meca_9_5`, including early degradation failures and failures due to foreseen extrinsic stresses, provided that these cannot be explained by gross design or manufacturing errors (cf. systematic failures).
*   - **{term}`Degradation failures <Degradation failure>`**
    - Considered by the methods described in {numref}`meca_9_5`, especially by those based on structural reliability theory with time-dependent degradation models. 
    {term}`Safe life qualification <Safe life qualification>` alone is not sufficient as a justification to discard the probability of premature mechanical degradation failures before the end of the nominal lifetime. 
    The consideration of additional failure mechanisms, which are assumed to be effectively handled during nominal lifetime, can be required in case of lifetime extensions (using the same methods, but with an extended modelling scope).
*   - **{term}`Extrinsic failures <Extrinsic failure>`**
    - Foreseen extrinsic effects due to the launch environment (vibrations, shocks) and physical conditions in-orbit (e.g. temperature) should be considered as stress contributors in the modelling of random and degradation failures, see {numref}`meca-table4-2` in {numref}`meca_9_2_3` for the most relevant interactions. A separate modelling can be required if the probability of additional failure mechanisms induced by the space environment cannot be neglected, e.g. space debris impact, see {numref}`meca_9_2_3` for details.
*   - **{term}`Systematic failures <Systematic failure>`**
    - Process related failures due to minor design and manufacturing weaknesses can be considered with the methods described in {numref}`meca_9_5`,provided that the failure process or mechanism remains unchanged (cf. random failures). 
    Gross design or manufacturing errors should be considered separately, see {numref}`syst_11_9` in {ref}`Part 6 – System <sec_sys_handbook>`.
```

(meca_9_2_1)=
##  {term}`Random failures <Random failure>`

The {term}`physics of failure <Physics of failure>` ({term}`PoF`) of mechanical parts are mostly well-understood and give strong indications also on the {term}`failure root cause <Failure root cause>`. Nevertheless, from a modelling perspective it may be meaningful not to go into the details of the root cause that has led to a certain {term}`failure mechanism <Failure mechanism>`. 

To give an example, a premature bearing wear failure can be due to a residual undetected part level defect or weakness (random), due to “normal” aging or degradation (degradation), induced by environmental effects such as thermal loads leading to distortion (extrinsic) or due to a misalignment at assembly level (systematic). 

Despite the difference in the failure root cause, all these failures are due to the same failure mechanism, which can be modelled with the same physical law. In this line of thought, all failures due to minor uncertainties in the design and due to manufacturing variability will be considered as random failures for mechanical items, whereas gross errors, possibly leading to new failure mechanisms and unforeseen events, are considered as systematic failures. 

With this classification, it is possible to consider the contribution of design and manufacturing process variability in the mechanical reliability prediction, e.g. by increasing the variability of the basic variables when using structural reliability methods as discussed in {numref}`meca_9_6_1`. Only gross errors, classified assystematic failures, need to be considered separately.


(meca_9_2_2)=
##  {term}`Degradation failures <Degradation failure>`

In the frame of this handbook, {term}`degradation failures <Degradation failure>` failures are generally assumed to occur after the specified mission lifetime, assuming that safe life qualification processes have successfully mitigated the risk of premature failures. However, for mechanical items, this assumption can not necessarily be valid, as experience shows that there is a certain risk of premature degradation despite safe life qualification, which can lead to a (slowly) increasing failure rate already during the course of the mission, as illustrated in {numref}`Figure_3_1`. 

The root cause of these premature degradation failures will mostly be related to the design or manufacturing process. However, following the same line of thought as in {numref}`meca_9_2_1`) above, failures due to minor design or manufacturing variability can nevertheless be considered as degradation rather than systematic failures, and considered with the methodology presented in this part. Only degradation failures due to gross design or manufacturing errors are left for the systematic failure modelling.

```{figure} ../../pictures/figure4_1.png
---
width: 600px
name: Figure_3_1
---
Failure rate as a function of time for typical mechanical components
```

When exceeding the qualification time, e.g. for a satellite lifetime extension, the modelling of degradation failures becomes even more relevant. Additional degradation mechanisms whose effect is negligible during the specified lifetime can need to be considered, and failures due to all degradation mechanisms become more likely. Because degradation failures follow a continuous process, relatively slow or fast, where the accumulation leads to a “breaking” point. 

{numref}`meca_9_4_1` contains guidance on the identification of dominant failure mechanisms, including degradation mechanisms, for several part types, though focusing on reliability prediction for the design lifetime, i.e. within safe life qualification domain. Failure mechanisms that are normally considered effectively handled by qualification, such as e.g. radiation degradation of optical equipment, can need to be added when considering a lifetime extension.


(meca_9_2_3)=
## {term}`Extrinsic failures <Extrinsic failure>`

External effects acting as loads on mechanical parts are considered during the design, generally reducing the risk of extrinsic failures. To quantify the remaining risk, reliability calculations should con-sider relevant extrinsic contributors. 

For mechanical reliability assessment, the following aspects need to be considered:

* Where possible, the failure modes related to the environmental condition should be mitigated by design. For example, outgassing in vacuum conditions can be reduced by careful material selection; solar wind induced effects can be mitigated by grounding protection, etc. Errors in the design solutions or specification are classified as systematic failures.
* Similarly, failures due to {term}`UV` degradation, radiation, or atomic oxygen effects within the du-ration of the nominal mission life are considered as systematic failures. For lifetime extensions, failures due to these cumulative effects can have to be considered in the reliability prediction (classified as degradation failures).
* Failure mechanisms mechanisms considered during the reliability prediction can be driven by a combination of environmental parameters. For example, extreme thermal loads affect material fatigue and fracture properties; thermal parameters define the viscosity of the lubrication, thus affecting the friction and lubrication wear. To account for the relevant environmental parameters, the defining variables should be adjusted accordingly. 
  
The extrinsic effects contributing most to mechanical failure mechanisms are summarized in {numref}`meca-table4-2`. The full list of the environments which might cause extrinsic failures is presented in {ref}`Part 1 - Methodologies <methodologies>` of this handbook.

```{list-table} Environments with the highest contribution to the extrinsic failures
:name: meca-table4-2
:header-rows: 1
:widths: 40 60

*   - Environment
    - Failure mechanism
*   - Vibrations
    - Distortion, fatigue, fracture
*   - Thermal loads
    - Distortion, lubrication wear, thermal fatigue
*   - Shocks
    - Distortion, fracture
*   - Space debris impact
    - Ultimate failure (in the failure mode sense)
```

Accounting for these effects with the methodology for mechanical reliability prediction presented in this part is possible as long as the failure modes and mechanisms considered remain unchanged. An example for an extrinsic failure root cause that introduces an additional failure mode is space debris (or micro meteorite) impact, which will be discussed in the remainder of this paragraph. 

**Space debris and micrometeoroid impact**

Extrinsic failures due space debris or micrometeoroid impact are typically relevant for components with significant exposed area (e.g. reflectors, solar arrays). Accounting for these failures can require a dedicated modelling if it cannot be shown that the impact on mission reliability is negligible.

The calculation is performed in the following three steps:

1. Determine the debris and meteoroids environment (average flux as a function of particle size, velocity distribution) based on the mission parameters {cite:p}`mec-ECSS-E-ST-10-04C`, e.g. using tools like {term}`ECSS` MASTER 2009 {cite:p}`mec-space-debris` to assess the debris or meteoroid flux on a spacecraft on an arbitrary earth orbit.
2. Obtain minimum critical particle size for each direction of the component on the spacecraft, considering directionality and velocity of the impact. The term “critical” relates to the effects of an impact on the satellite elements, e.g. penetration of the shielding leading to damage of shielded elements.
3. Combine the results from the previous steps to calculate the probability of collision and number of collisions with the particles larger or equal to the critical particle size, see e.g. {cite:p}`mec-ECSS-E-ST-10-04C` .

Collision failures can be neglected in the frame of reliability prediction if the corresponding probability of failure is at least one order of magnitude smaller than the probability of failure due to other failure root causes.

Space debris and micrometeoroid impacts will not be discussed any further in the present part.


(meca_9_2_4)=
## {term}`Systematic failures <Systematic failure>`

Failures due to design and manufacturing weaknesses can to a certain extent be considered with the methodology presented in this part, provided that the failure process or mechanism remains unchanged. 

Failures due to gross errors during design, manufacturing or operations are discussed in {ref}`Part 6 – System <sec_sys_handbook>` of this handbook. They are out of scope for the present part.


