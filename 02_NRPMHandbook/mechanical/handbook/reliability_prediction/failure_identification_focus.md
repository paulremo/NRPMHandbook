<!--- Copyright (C) Matrisk GmbH 2022 -->

(meca_9_4)=
# Failure mechanisms identification and focus

A full mechanical {term}`reliability prediction <Reliability prediction>` looking at all potential {term}`failure mechanisms <Failure mechanism>` and modes can require substantial efforts as well as inputs that cannot be available especially in early phases of a space project. It is therefore reasonable to focus on what is dominating the probability of failure, and to exclude failure mechanism that are very unlikely to occur (compared to the dominating ones). 
The present paragraph describes a step-wise procedure supporting the decision what should be modelled (i.e. which items/parts and failure mechanisms), before discussing how to model each failure mechanism in {numref}`meca_9_5` and after.

To implement this procedure in practice, early interaction between design and reliability engineers is required. In particular, the following information exchange is necessary:

* Heritage and {term}`test data <Test data>` on identical or similar components: cumulated hours, observed failure modes, operational conditions.
* Identification of the most critical failure modes based on the available data, design considerations and {term}`physics of failure <Physics of failure>`.
* Insight into the failure mechanics of the critical failure modes: conducted tests, available models, governing variables and their distributions
* To perform reliability calculations for a specific item and failure mechanism, additional design data such as geometry or loads can be required.

(meca_9_4_1)=
## Failure dominance and focus of the prediction

The first step before starting a reliability assessment is a clear definition of its objective and scope, i.e. the question and the associated boundary conditions should be clearly stated and understood, see {ref}`Part 1 - Methodologies <methodologies>` of this handbook for details. Knowing the objective and scope is important also because it implicitly defines which events and consequently failure mechanisms need to be considered.

Before going into the detailed reliability assessment of a mechanical item, it is helpful to identify its main working principle using the classifications presented in {numref}`meca-table4-3` below. 

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'meca_table4_3')" placeholder="Search table...">

```{list-table} Classification of mechanical items based on their working principle
:name: meca-table4-3

* - <table class="myTable" id="meca_table4_3">
        <thead>
            <tr>
                <th colspan="2">Category</th>
                <th>Description</th>
                <th>Examples</th>
            </tr>
        </thead>
        <tr>
            <td>I</td>
            <td>Active mechanisms</td>
            <td>Mechanisms employing electric motors and actuators</td>
            <td>Deployment and pointing mechanisms, scanner, inertial measurement units</td>
        </tr>
        <tr>
            <td>II</td>
            <td>Passive and pyro actuated mechanisms</td>
            <td>Mechanisms actuated by pre-stressed springs or pyro charges</td>
            <td>Release and separation mechanisms, clamp bands, hinges</td>
        </tr>
        <tr>
            <td>III</td>
            <td>Non-fluidic structural components</td>
            <td>Components realizing the structural architecture</td>
            <td>Primary and secondary structure, housings, harness</td>
        </tr>
        <tr>
            <td>IV</td>
            <td>Fluidic structural components</td>
            <td>Components containing fluids or gases</td>
            <td>Pressurized vessels, heat pipes, loop heat pipes, tubing</td>
        </tr>
    </table>

```


```{admonition} Note
:class: note
Some of these items can be covered by “standard” Miscellaneous models ({ref}`Part 5 - MIS <sec_misc_handbook>` of this handbook). 
```

```{admonition} Note
:class: note
However, the modelling approaches for mechanical items provided in the present part can be useful in the case the “standard” miscellaneous model based on {term}`IOR` is not applicable and a “non-standard” model has to be developed by the user.
```

The classification helps to preliminary identify the failure mechanisms that are most relevant at assembly level. For example, as soon as motorization is present, increase of friction due to lubrication wear or distortion play a dominant role for the overall item’s reliability. For passive and pyro mechanisms, fatigue and aging are expected to define the reliability. 

However, the final selection of the dominant failure mechanisms should be performed based on the concrete design solution. The identification of the dominant and secondary failure mechanisms is important as it helps focusing on the key reliability aspects whilst effectively using the schedule. To give an example, it can be sufficient to focus on the dominant ones when making a prediction at an early stage of the development.

Typically, components falling into category III “non-fluidic structural components” can be considered as “intrinsically reliable” within the design lifetime when the following requirements are satisfied: 

* Qualification and design factors (compliant with {term}`ECSS`-E-ST-32-10C {cite:p}`mec-ECSS-E-ST-32-10C`) ≥ 1.25,
* Material and loading variability within usual ranges,
* The design shows positive margins,
* Qualification is completed,
* Quality assurance program is established.

Under these conditions, it can be assumed that the reliability figure for the considered structure is equal to unity for practical purposes (in reality, it is just very close to unity).  

```{admonition} Note
:class: note
The listed requirements are generally fulfilled for standard structures manufactured with traditional (metallic) materials and manufacturing processes, and using structural factors of safety as defined in {term}`ECSS`-E-ST-32-10C {cite:p}`mec-ECSS-E-ST-32-10C`. 
```
Reliability predictions using structural reliability methods under these conditions yield very small probabilities of failure  (see e.g. the case study in {cite:p}`mec-AO-1-8017-14-NL-KM`, which is confirmed also by the good performance of structure in orbit. 

It should be noted that the probability of {term}`systematic failures <Systematic failure>` due to gross design, manufacturing or operations errors may not be negligible irrespective of these conclusions, especially in the case of new designs. 

For structures that do not fulfil the abovementioned conditions, reliability figures need to be calculated considering the relevant structural failure mechanisms. Studies aiming at the reusability of the flight hardware for multiple launches will need additional considerations.


(meca_9_4_2)=
## Failure mechanisms completion

The final step involves an assessment of relevant qualitative {term}`RAMS` data (e.g. {term}`FMEA` reports, non-compliances reports, design review data packages, and history data) to identify critical failure modes and related failure mechanisms. The outcome should be used to cross-check the conclusions from the previous steps and to consider additional failure mechanisms as relevant. 

Similar to the considerations made for the structural category in {numref}`meca_9_4_1`, it can be justified to exclude certain parts and failure mechanisms from the analysis, provided that all or most of the following conditions are fulfilled:

* High factors of safety and/or low variability,
* Space qualified components,
* Quality assurance program is established,
* Space heritage without observed failures,
* Successful qualification and acceptance testing.

Assuming a reliability of unity for these items (apart systematic failures) results in a reduced list of the failure mechanisms to be considered in the quantitative reliability calculations. However, the exclusion of these items assumed to be “intrinsically reliable” from the quantitative analysis should be justified and documented clearly.

**The role of testing for flight item reliability**

The approach followed for verification testing plays an important role for the flight item’s reliability, and thus for the decision which items can be considered as “intrinsically reliable” with reliability equal to unity. The following questions are relevant in this context:

1. *Is the test performed on the flight item or on another - possibly several item(s)?*
2. *How many items are tested in case it is not the flight item that is tested?*
3. *What is the test level (e.g. load factors) applied?*


The first question is clearly the most relevant from a reliability perspective. Testing the flight item, in the mission representative environment with test levels equal to or larger than, but still in a similar order of magnitude as the stresses expected during the mission is an excellent means to detect flaws due to both gross error and “normal” process variability that can otherwise lead to failures in orbit. It can be assumed that the good performance of structural items can be explained, partly or largely, to this effect. It is not possible to make a general statement on the choice of the exact test level in this context. On the one hand, the screening for existing flaws will be the more effective, the higher the stresses applied during the test. On the other hand, new flaws can be introduced by the test, and in the case of cumulated loading (e.g. fatigue loading), the test loads can be an important contribution to the overall life cycle loading of the flight item.

For some items and/or failure mechanisms, e.g. one-shot or limited lifetime items, it is not possible to perform the test on the flight item. In this case it is critical to know how many (other) items are tested. Testing only one duplicate of the flight item is still very important for the purpose of quality assurance, but nearly useless from the perspective of reliability prediction for the (untested) flight item. Only certain systematic flaws, e.g. due to gross design or manufacturing mistakes affecting all identical items in the same way, can be detected with such a test. Even though this information is important and often decisive, e.g. during the qualification campaign followed by acceptance testing, it does not infer “intrinsic” reliability. Margins in the failure mechanisms variables and low system level complexity can indicate potentially high reliability, but in general case failures due to process variability can only be avoided (or predicted) with a larger number of tests, e.g. batch acceptance testing performed on the same lot as the flight item. 

Regarding the choice of the test level or duration, it is of course more interesting to test at higher levels (ideally up to failure), and there is no disbenefit from a reliability perspective as long as it is not the flight item that is tested. However, this requires good understanding of the relevant failure mechanisms. For example, to screen for premature failure (infant mortality) of parts prone to fatigue or wear, it can be necessary to reach a certain number of cycles with substantial loading while keeping cumulated damage as low as possible; aging effects might affect explosive devices which might be critical for long duration missions. Finally, it should be controlled that the test environment is representative.

To summarize, thorough testing of the flight item is a good argument to neglect a certain item or failure mechanism during the reliability prediction, especially when all or most of the other conditions listed above are true. If the probability of failure should anyway be quantified, it is possible to consider the fact that the flight item has survived the verification test by adapting the strength distribution when using {term}`structural reliability methods <Structural reliability method>` {cite:p}`mec-AO-1-8017-14-NL-KM`. A possible application of this approach may be to trade-off between reliability and mass for one-cycle-to-failure items such as tanks.

If it is not possible to test the flight item, assuming a reliability of one needs to be further justified, ideally with the aid of quantitative reliability prediction. Using the structural reliability methods discussed in {numref}`meca_9_6`, it is straightforward to account for the factors of safety applied during design, and space heritage without failures and/or extensive testing can easily be considered with {term}`statistical method <Statistical method>`s, or with the aid ofBayesian updating of preliminary reliability estimates ({numref}`meca_9_6_5` and {ref}`Part 2 - Methods <methods>`) if the sample size is not large enough.

