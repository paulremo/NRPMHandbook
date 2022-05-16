# Root causes coverage

[Table 4 -1](meca_table4_1) gives an overview of the failure categories defined in Chapter 4 (Part I) and their coverage by the methods described in the present chapter. In the following subsections, the interpretation of each failure category within the mechanical chapter is briefly explained.

(meca_table4_1)=
```{list-table} Coverage of {term}`FAILURE ROOT CAUSE`s by the mechanical {term}`RELIABILITY PREDICTION` methodology presented in this chapter
:class: interactive-table
:name: Coverage of {term}`FAILURE ROOT CAUSE`s by the mechanical {term}`RELIABILITY PREDICTION` methodology presented in this chapter

* - <iframe class="ext_content" src="../../../_static/interactivity/html/meca_table4_1.html" frameborder="0" onload="resize_iframe(this)"></iframe>
```

(meca_4_2_1)=
## {term}`RANDOM FAILURE`s

he {term}`PHYSICS OF FAILURE` ({term}`PoF`) of {term}`MECHANICAL PART`s are mostly well-understood and give strong indications also on the {term}`FAILURE ROOT CAUSE`. Nevertheless, from a modelling perspective it may be meaningful not to go into the details of the root cause that has led to a certain {term}`FAILURE MECHANISM`. To give an example, a premature bearing wear failure may be due to a residual undetected part level defect or weakness (random), due to “normal” aging or wear-out (wear-out), induced by environmental effects such as thermal loads leading to distortion (extrinsic) or due to a misalignment at assembly level (systematic). Despite the difference in the {term}`FAILURE ROOT CAUSE`, all these failures are due to the same {term}`FAILURE MECHANISM`, which can be modelled with the same physical law.

In this line of thought, all failures due to minor uncertainties in the design and due to manufacturing variability will be considered as {term}`RANDOM FAILURE`s for mechanical items, whereas gross errors, possibly leading to new {term}`FAILURE MECHANISM`s and unforeseen events, are considered as {term}`SYSTEMATIC FAILURE`s. With this classification, it is possible to consider the contribution of design and manufacturing process variability in the mechanical {term}`RELIABILITY PREDICTION`, e.g. by increasing the variability of the basic variables when using {term}`STRUCTURAL RELIABILITY METHOD`s as discussed in [Section 4.6.4](meca_4_6_1). Only gross errors, classified as {term}`SYSTEMATIC FAILURE`s, need to be considered separately.

## {term}`WEAR-OUT FAILURE`s

In the frame of this handbook, {term}`WEAR-OUT FAILURE`s are generally assumed to occur after the specified mission life time, assuming that {term}`SAFE LIFE QUALIFICATION` processes have successfully mitigated the risk of premature failures. However, for mechanical items, this assumption may not necessarily be valid, as experience shows that there is a certain risk of premature wear-out despite {term}`SAFE LIFE QUALIFICATION`, which may lead to a (slowly) increasing failure rate already during the course of the mission, as illustrated in {numref}`Figure 3.1`. The root cause of these premature {term}`WEAR-OUT FAILURE`s will mostly be related to the design or manufacturing process. However, following the same line of thought as in [Section 4.2.1](meca_4_2_1) above, failures due to minor design or manufacturing variability can nevertheless be considered as wear-out rather than {term}`SYSTEMATIC FAILURE`s, and considered with the methodology presented in this chapter. Only {term}`WEAR-OUT FAILURE`s due to gross design or manufacturing errors are left for the systematic {term}`FAILURE MODE`lling.

(meca_figure4_1)=
```{figure} ../../pictures/figure4_1.png
---
width: 600px
name: Figure 3.1
---
Failure rate as a function of time for typical mechanical components.
```

When exceeding the qualification time, e.g. for a satellite life time extension, the modelling of {term}`WEAR-OUT FAILURE`s becomes even more relevant. Additional degradation mechanisms whose effect is negligible during the specified lifetime may need to be considered, and failures due to all degradation mechanisms become more likely. 

[Section 4.4.1](meca_4_4_1) contains guidance on the identification of dominant {term}`FAILURE MECHANISM`s – including wear-out mechanisms - for several part types, though focusing on {term}`RELIABILITY PREDICTION` for the design lifetime, i.e. within {term}`SAFE LIFE QUALIFICATION` domain. {term}`FAILURE MECHANISM`s that are normally considered effectively handled by qualification, such as e.g. radiation degradation of optical equipment, may need to be added when considering a life time extension.

(meca_4_2_3)=
## {term}`EXTRINSIC FAILURE`s

External effects acting as loads on {term}`MECHANICAL PART`s are considered during the design, generally reducing the risk of {term}`EXTRINSIC FAILURE`s. To quantify the remaining risk, reliability calculations must consider relevant extrinsic contributors. 

For mechanical reliability assessment, the following aspects need to be considered:

* Where possible, the {term}`FAILURE MODE`s related to the environmental condition shall be mitigated by design. For example, outgassing in vacuum conditions can be reduced by careful material selection; solar wind induced effects can be mitigated by grounding protection etc. Errors in the design solutions or specification are classified as {term}`SYSTEMATIC FAILURE`s.
* Similarly, failures due to {term}`UV` degradation, radiation, or atomic oxygen effects within the duration of the nominal mission life are considered as {term}`SYSTEMATIC FAILURE`s. For life time extensions, failures due to these cumulative effects may have to be considered in the {term}`RELIABILITY PREDICTION` (classified as {term}`WEAR-OUT FAILURE`s).
* {term}`FAILURE MECHANISM`s considered during the {term}`RELIABILITY PREDICTION` can be driven by a combination of environmental parameters. For example, extreme thermal loads affect material fatigue and fracture properties; thermal parameters define the viscosity of the lubrication, thus affecting the friction and lubrication wear. To account for the relevant environmental parameters, the defining variables must be adjusted accordingly. 
  
The extrinsic effects contributing most to mechanical {term}`FAILURE MECHANISM`s are summarized in [Table 4 -2](meca_table4_2). The full list of the environments which might cause {term}`EXTRINSIC FAILURE`s is presented in **Chapter 4 (Part I)**.

(meca_table4_2)=
```{list-table} Environments with the highest contribution to the {term}`EXTRINSIC FAILURE`s
:class: interactive-table
:name: Environments with the highest contribution to the {term}`EXTRINSIC FAILURE`s

* - <iframe class="ext_content" src="../../../_static/interactivity/html/meca_table4_2.html" frameborder="0" onload="resize_iframe(this)"></iframe>
```

Accounting for these effects with the methodology for mechanical {term}`RELIABILITY PREDICTION` presented in this chapter is possible as long as the {term}`FAILURE MODE`s and mechanisms considered remain unchanged. An example for an {term}`EXTRINSIC FAILURE` root cause that introduces an additional {term}`FAILURE MODE` is space debris (or micro meteorite) impact, which will be discussed in the remainder of this section. 

**Space debris and micrometeoroid impact**

{term}`EXTRINSIC FAILURE`s due space debris or micrometeoroid impact are typically relevant for components with significant exposed area (e.g. reflectors, solar arrays). Accounting for these failures may require a dedicated modelling if it cannot be shown that the impact on mission reliability is negligible.

The calculation is performed in the following three steps:
1. Determine the debris and meteoroids environment (average flux as a function of particle size, velocity distribution) based on the mission parameters , e.g. using tools like {term}`ECSS` MASTER 2009  to assess the debris or meteoroid flux on a {term}`SPACECRAFT` on an arbitrary earth orbit.
2. Obtain minimum critical particle size for each direction of the component on the {term}`SPACECRAFT`, considering directionality and velocity of the impact. The term “critical” relates to the effects of an impact on the satellite elements, e.g. penetration of the shielding leading to damage of shielded elements.
3. Combine the results from the previous steps to calculate the probability of collision and number of collisions with the particles larger or equal to the critical particle size, see e.g. {term}`ECSS`‐E‐ST‐10‐04C .

Collision failures can be neglected in the frame of {term}`RELIABILITY PREDICTION` if the corresponding probability of failure is at least one order of magnitude smaller than the probability of failure due to other {term}`FAILURE ROOT CAUSE`s.

Space debris and micro meteoroid impact will not be discussed any further in the present chapter.

## {term}`SYSTEMATIC FAILURE`s

Failures due to design and manufacturing weaknesses can to a certain extent be considered with the methodology presented in this chapter, provided that the failure process or mechanism remains unchanged. Failures due to gross errors during design, manufacturing or operations are discussed in Section Error: Reference source not found. They are out of scope for the present chapter.

```{admonition} Todo
:class: todo
Miss ref just above
```

