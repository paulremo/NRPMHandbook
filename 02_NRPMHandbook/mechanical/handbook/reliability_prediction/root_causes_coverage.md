(meca_4_2)=
# Root causes coverage

{numref}`meca-table4-1` gives an overview of the failure categories defined in {numref}`methodologies` and their coverage by the methods described in the present chapter. In the following subsections, the interpretation of each failure category within the mechanical chapter is briefly explained.

```{list-table} Coverage of failure root causes by the mechanical reliability prediction methodology presented in this chapter
:name: meca-table4-1
:header-rows: 1
:widths: 25 75

*   - Root cause category
    - Coverage by the mechanical {term}`reliability prediction methodology <Reliability prediction methodology>`
*   - {term}`Random failures <Random failure>`
    - Considered by the methods described in {numref}`meca_4_5`, including early wear-out failures and failures due to foreseen extrinsic stresses, provided that these cannot be explained by gross design or manufacturing errors (cf. {term}`systematic failures <Systematic failure>`).
*   - Wear-out failures
    - Considered by the methods described in {numref}`meca_4_5`, especially by those based on structural reliability theory with time-dependent {term}`degradation <Degradation>` models. 
    {term}`Safe life qualification <Safe life qualification>` alone is not sufficient as a justification to discard the probability of premature mechanical {term}`wear-out failures <Wear-out failure>` before the end of the nominal lifetime. 
    The consideration of additional {term}`failure mechanisms <Failure mechanism>`, which are assumed to be effectively handled during nominal lifetime, may be required in case of lifetime extensions (using the same methods, but with an extended modelling scope).
*   - Extrinsic failures
    - Foreseen extrinsic effects due to the launch environment (vibrations, shocks) and physical conditions in-orbit (e.g. temperature) should be considered as stress contributors in the modelling of random and {term}`wear-out failures <Wear-out failure>`, see {numref}`meca-table4-2` in {numref}`meca_4_2_3` for the most relevant interactions. A separate modelling may be required if the probability of additional {term}`failure mechanisms <Failure mechanism>` induced by the space environment cannot be neglected – e.g. space debris impact, see {numref}`meca_4_2_3` for details.
*   - {term}`Systematic failures <Systematic failure>`
    - Process related failures due to minor design and manufacturing weaknesses can be considered with the methods described in {numref}`meca_4_5`, provided that the failure process or mechanism remains unchanged (cf. {term}`random failures <Random failure>`). 
    Gross design or manufacturing errors must be considered separately, see {numref}`syst_4_9` in the System level chapter.
```

(meca_4_2_1)=
## Random failures

The {term}`physics of failure <Physics of failure>` ({term}`PoF`) of {term}`mechanical parts <Mechanical part>` are mostly well-understood and give strong indications also on the {term}`failure root cause <Failure root cause>`. Nevertheless, from a modelling perspective it may be meaningful not to go into the details of the root cause that has led to a certain {term}`failure mechanism <Failure mechanism>`. To give an example, a premature bearing wear failure may be due to a residual undetected part level defect or weakness (random), due to “normal” aging or wear-out (wear-out), induced by environmental effects such as thermal loads leading to distortion (extrinsic) or due to a misalignment at assembly level (systematic). Despite the difference in the {term}`failure root cause <Failure root cause>`, all these failures are due to the same {term}`failure mechanism <Failure mechanism>`, which can be modelled with the same physical law.

In this line of thought, all failures due to minor uncertainties in the design and due to manufacturing variability will be considered as {term}`random failures <Random failure>` for mechanical items, whereas gross errors, possibly leading to new {term}`failure mechanisms <Failure mechanism>` and unforeseen events, are considered as {term}`systematic failures <Systematic failure>`. With this classification, it is possible to consider the contribution of design and manufacturing process variability in the mechanical {term}`reliability prediction <Reliability prediction>`, e.g. by increasing the variability of the basic variables when using {term}`structural reliability methods <Structural reliability method>` as discussed in {numref}`meca_4_6_1`. Only gross errors, classified as {term}`systematic failures <Systematic failure>`, need to be considered separately.

(meca_4_2_2)=
## Wear-out failures

In the frame of this handbook, {term}`wear-out failures <Wear-out failure>` are generally assumed to occur after the specified mission life time, assuming that {term}`safe life qualification <Safe life qualification>` processes have successfully mitigated the risk of premature failures. However, for mechanical items, this assumption may not necessarily be valid, as experience shows that there is a certain risk of premature wear-out despite {term}`safe life qualification <Safe life qualification>`, which may lead to a (slowly) increasing failure rate already during the course of the mission, as illustrated in {numref}`Figure_3_1`. The root cause of these premature {term}`wear-out failures <Wear-out failure>` will mostly be related to the design or manufacturing process. However, following the same line of thought as in {numref}`meca_4_2_1`) above, failures due to minor design or manufacturing variability can nevertheless be considered as wear-out rather than {term}`systematic failures <Systematic failure>`, and considered with the methodology presented in this chapter. Only {term}`wear-out failures <Wear-out failure>` due to gross design or manufacturing errors are left for the {term}`systematic failure <Systematic failure>` modelling.

```{figure} ../../pictures/figure4_1.png
---
width: 600px
name: Figure_3_1
---
Failure rate as a function of time for typical mechanical components.
```

When exceeding the qualification time, e.g. for a satellite life time extension, the modelling of {term}`wear-out failures <Wear-out failure>` becomes even more relevant. Additional {term}`degradation <Degradation>` mechanisms whose effect is negligible during the specified lifetime may need to be considered, and failures due to all {term}`degradation <Degradation>` mechanisms become more likely. 

{numref}`meca_4_4_1` contains guidance on the identification of dominant {term}`failure mechanisms <Failure mechanism>` – including wear-out mechanisms - for several part types, though focusing on {term}`reliability prediction <Reliability prediction>` for the design lifetime, i.e. within {term}`safe life qualification <Safe life qualification>` domain. {term}`Failure mechanisms <Failure mechanism>` that are normally considered effectively handled by qualification, such as e.g. radiation {term}`degradation <Degradation>` of optical equipment, may need to be added when considering a life time extension.

(meca_4_2_3)=
## Extrinsic failures

External effects acting as loads on {term}`mechanical parts <Mechanical part>` are considered during the design, generally reducing the risk of {term}`extrinsic failures <Extrinsic failure>`. To quantify the remaining risk, reliability calculations must consider relevant extrinsic contributors. 

For mechanical reliability assessment, the following aspects need to be considered:

* Where possible, the {term}`failure modes <Failure mode>` related to the environmental condition shall be mitigated by design. For example, outgassing in vacuum conditions can be reduced by careful material selection; solar wind induced effects can be mitigated by grounding protection etc. Errors in the design solutions or specification are classified as {term}`systematic failures <Systematic failure>`.
* Similarly, failures due to {term}`UV` {term}`degradation <Degradation>`, radiation, or atomic oxygen effects within the duration of the nominal mission life are considered as {term}`systematic failures <Systematic failure>`. For life time extensions, failures due to these cumulative effects may have to be considered in the {term}`reliability prediction <Reliability prediction>` (classified as {term}`wear-out failures <Wear-out failure>`).
* {term}`failure mechanisms <Failure mechanism>` considered during the {term}`reliability prediction <Reliability prediction>` can be driven by a combination of environmental parameters. For example, extreme thermal loads affect material fatigue and fracture properties; thermal parameters define the viscosity of the lubrication, thus affecting the friction and lubrication wear. To account for the relevant environmental parameters, the defining variables must be adjusted accordingly. 
  
The extrinsic effects contributing most to mechanical {term}`failure mechanisms <Failure mechanism>` are summarized in {numref}`meca_4_2_1`. The full list of the environments which might cause {term}`extrinsic failures <Extrinsic failure>` is presented in {numref}`methodologies`.

```{list-table} Environments with the highest contribution to the extrinsic failures
:name: meca-table4-2
:header-rows: 1
:widths: 40 60

*   - Environment
    - Failure mechanism
*   - Vibrations
    - distortion, fatigue, fracture
*   - Thermal loads
    - distortion, lubrication wear, thermal fatigue
*   - Shocks
    - distortion, fracture
*   - Space debris impact
    - Ultimate failure (in the failure mode sense)
```

Accounting for these effects with the methodology for mechanical {term}`reliability prediction <Reliability prediction>` presented in this chapter is possible as long as the {term}`failure modes <Failure mode>` and mechanisms considered remain unchanged. An example for an {term}`extrinsic failure <Extrinsic failure>` root cause that introduces an additional {term}`failure mode <Failure mode>` is space debris (or micro meteorite) impact, which will be discussed in the remainder of this section. 

**Space debris and micrometeoroid impact**

{term}`Extrinsic failures <Extrinsic failure>` due space debris or micrometeoroid impact are typically relevant for components with significant exposed area (e.g. reflectors, solar arrays). Accounting for these failures may require a dedicated modelling if it cannot be shown that the impact on mission reliability is negligible.

The calculation is performed in the following three steps:
1. Determine the debris and meteoroids environment (average flux as a function of particle size, velocity distribution) based on the mission parameters {cite:t}`mec-ECSS-E-ST-10-04C`, e.g. using tools like {term}`ECSS` MASTER 2009 {cite:t}`mec-space-debris` to assess the debris or meteoroid flux on a {term}`spacecraft <Spacecraft>` on an arbitrary earth orbit.
2. Obtain minimum critical particle size for each direction of the component on the {term}`spacecraft <Spacecraft>`, considering directionality and velocity of the impact. The term “critical” relates to the effects of an impact on the satellite elements, e.g. penetration of the shielding leading to damage of shielded elements.
3. Combine the results from the previous steps to calculate the probability of collision and number of collisions with the particles larger or equal to the critical particle size, see e.g. {cite:t}`mec-ECSS-E-ST-10-04C` .

Collision failures can be neglected in the frame of {term}`reliability prediction <Reliability prediction>` if the corresponding probability of failure is at least one order of magnitude smaller than the probability of failure due to other {term}`failure root causes <Failure root cause>`.

Space debris and micro meteoroid impact will not be discussed any further in the present chapter.

(meca_4_2_4)=
## Systematic failures

Failures due to design and manufacturing weaknesses can to a certain extent be considered with the methodology presented in this chapter, provided that the failure process or mechanism remains unchanged. Failures due to gross errors during design, manufacturing or operations are discussed in {numref}`syst_4_9`. They are out of scope for the present chapter.


