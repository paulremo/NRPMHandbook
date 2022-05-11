# Root causes coverage

[Table 4 -1](meca_table4_1) gives an overview of the failure categories defined in Chapter 4 (Part I) and their coverage by the methods described in the present chapter. In the following subsections, the interpretation of each failure category within the mechanical chapter is briefly explained.

(meca_table4_1)=
```{list-table} Coverage of failure root causes by the mechanical reliability prediction methodology presented in this chapter
:class: interactive-table
:name: Coverage of failure root causes by the mechanical reliability prediction methodology presented in this chapter

* - <iframe class="ext_content" src="../../../_static/interactivity/html/meca_table4_1.html" frameborder="0" onload="resize_iframe(this)"></iframe>
```

(meca_4_2_1)=
## Random failures

he Physics of Failure (PoF) of mechanical parts are mostly well-understood and give strong indications also on the failure root cause. Nevertheless, from a modelling perspective it may be meaningful not to go into the details of the root cause that has led to a certain failure mechanism. To give an example, a premature bearing wear failure may be due to a residual undetected part level defect or weakness (random), due to “normal” aging or wear-out (wear-out), induced by environmental effects such as thermal loads leading to distortion (extrinsic) or due to a misalignment at assembly level (systematic). Despite the difference in the failure root cause, all these failures are due to the same failure mechanism, which can be modelled with the same physical law.

In this line of thought, all failures due to minor uncertainties in the design and due to manufacturing variability will be considered as random failures for mechanical items, whereas gross errors, possibly leading to new failure mechanisms and unforeseen events, are considered as systematic failures. With this classification, it is possible to consider the contribution of design and manufacturing process variability in the mechanical reliability prediction, e.g. by increasing the variability of the basic variables when using structural reliability methods as discussed in [Section 4.6.4](meca_4_6_1). Only gross errors, classified as systematic failures, need to be considered separately.

## Wear-out failures

In the frame of this handbook, wear-out failures are generally assumed to occur after the specified mission life time, assuming that safe life qualification processes have successfully mitigated the risk of premature failures. However, for mechanical items, this assumption may not necessarily be valid, as experience shows that there is a certain risk of premature wear-out despite safe life qualification, which may lead to a (slowly) increasing failure rate already during the course of the mission, as illustrated in {numref}`Figure 3.1`. The root cause of these premature wear-out failures will mostly be related to the design or manufacturing process. However, following the same line of thought as in [Section 4.2.1](meca_4_2_1) above, failures due to minor design or manufacturing variability can nevertheless be considered as wear-out rather than systematic failures, and considered with the methodology presented in this chapter. Only wear-out failures due to gross design or manufacturing errors are left for the systematic failure modelling.

(meca_figure4_1)=
```{figure} ../../pictures/figure4_1.png
---
width: 600px
name: Figure 3.1
---
Failure rate as a function of time for typical mechanical components.
```

When exceeding the qualification time, e.g. for a satellite life time extension, the modelling of wear-out failures becomes even more relevant. Additional degradation mechanisms whose effect is negligible during the specified lifetime may need to be considered, and failures due to all degradation mechanisms become more likely. 

[Section 4.4.1](meca_4_4_1) contains guidance on the identification of dominant failure mechanisms – including wear-out mechanisms - for several part types, though focusing on reliability prediction for the design lifetime, i.e. within safe life qualification domain. Failure mechanisms that are normally considered effectively handled by qualification, such as e.g. radiation degradation of optical equipment, may need to be added when considering a life time extension.

(meca_4_2_3)=
## Extrinsic failures

External effects acting as loads on mechanical parts are considered during the design, generally reducing the risk of extrinsic failures. To quantify the remaining risk, reliability calculations must consider relevant extrinsic contributors. 

For mechanical reliability assessment, the following aspects need to be considered:

* Where possible, the failure modes related to the environmental condition shall be mitigated by design. For example, outgassing in vacuum conditions can be reduced by careful material selection; solar wind induced effects can be mitigated by grounding protection etc. Errors in the design solutions or specification are classified as systematic failures.
* Similarly, failures due to UV degradation, radiation, or atomic oxygen effects within the duration of the nominal mission life are considered as systematic failures. For life time extensions, failures due to these cumulative effects may have to be considered in the reliability prediction (classified as wear-out failures).
* Failure mechanisms considered during the reliability prediction can be driven by a combination of environmental parameters. For example, extreme thermal loads affect material fatigue and fracture properties; thermal parameters define the viscosity of the lubrication, thus affecting the friction and lubrication wear. To account for the relevant environmental parameters, the defining variables must be adjusted accordingly. 
  
The extrinsic effects contributing most to mechanical failure mechanisms are summarized in [Table 4 -2](meca_table4_2). The full list of the environments which might cause extrinsic failures is presented in **Chapter 4 (Part I)**.

(meca_table4_2)=
```{list-table} Environments with the highest contribution to the extrinsic failures
:class: interactive-table
:name: Environments with the highest contribution to the extrinsic failures

* - <iframe class="ext_content" src="../../../_static/interactivity/html/meca_table4_2.html" frameborder="0" onload="resize_iframe(this)"></iframe>
```

Accounting for these effects with the methodology for mechanical reliability prediction presented in this chapter is possible as long as the failure modes and mechanisms considered remain unchanged. An example for an extrinsic failure root cause that introduces an additional failure mode is space debris (or micro meteorite) impact, which will be discussed in the remainder of this section. 

**Space debris and micrometeoroid impact**

Extrinsic failures due space debris or micrometeoroid impact are typically relevant for components with significant exposed area (e.g. reflectors, solar arrays). Accounting for these failures may require a dedicated modelling if it cannot be shown that the impact on mission reliability is negligible.

The calculation is performed in the following three steps:
1. Determine the debris and meteoroids environment (average flux as a function of particle size, velocity distribution) based on the mission parameters , e.g. using tools like ESA MASTER 2009  to assess the debris or meteoroid flux on a spacecraft on an arbitrary earth orbit.
2. Obtain minimum critical particle size for each direction of the component on the spacecraft, considering directionality and velocity of the impact. The term “critical” relates to the effects of an impact on the satellite elements, e.g. penetration of the shielding leading to damage of shielded elements.
3. Combine the results from the previous steps to calculate the probability of collision and number of collisions with the particles larger or equal to the critical particle size, see e.g. ECSS‐E‐ST‐10‐04C .

Collision failures can be neglected in the frame of reliability prediction if the corresponding probability of failure is at least one order of magnitude smaller than the probability of failure due to other failure root causes.

Space debris and micro meteoroid impact will not be discussed any further in the present chapter.

## Systematic failures

Failures due to design and manufacturing weaknesses can to a certain extent be considered with the methodology presented in this chapter, provided that the failure process or mechanism remains unchanged. Failures due to gross errors during design, manufacturing or operations are discussed in Section Error: Reference source not found. They are out of scope for the present chapter.

```{admonition} Todo
:class: todo
Miss ref just above
```

