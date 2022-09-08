<!--- Copyright (C) Matrisk GmbH 2022 -->

(methodo_4)=
# Reliability prediction taxonomy and handbook coverage


(methodo_4_1)=
## Project phases and reliability in time

The following subsections give a brief introduction to the project life cycle and to the different phases describing an item’s reliability over time. These concepts are needed for the taxonomy provided in this Chapter and for the reliability prediction process discussed in {numref}`methodo_5`.

(methodo_4_1_1)=
### Project life cycle and space mission phases

Space projects are typically divided in seven life cycle phases from 0 to F, as defined in {numref}`methodo-table4-1` (cf {cite:t}`methodo-ECSS-M-ST-10C`). The production and verification of the actual flight item takes place in Phase D, followed by its launch and utilization in Phase E and the disposal at end of life in Phase F.

The duration of the mission is determined by the specified lifetime, counting from launch to end-of-life (disposal) of a spacecraft; sometimes the disposal phase is included to consider deorbiting / reorbiting success calculations. Possible lifetime extensions increase the duration of operations in-orbit. In addition, also information about mission phases prior to launch may need to be considered as an input for reliability prediction, e.g. to consider design and manufacturing process contributions, or to account for stresses experienced during verification testing.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'methodo-table4-1')" placeholder="Search table...">

```{list-table} Project life cycle and mission phases for typical space projects.
:name: methodo-table4-1
:header-rows: 1
:widths: 50 50

*   - Project life cycle phases
    - Mission phases (flight item)
*   - Phase 0 – Mission analysis / needs identification
    - Specification and Design
*   - Phase A – Feasibility
    - Specification and Design
*   - Phase B – Preliminary Definition
    - Specification and Design
*   - Phase C – Detailed Definition
    - Specification and Design
*   - Phase D – Qualification and Production
    - Production and Assembly
        Qualification, Verification and Validation
*   - Phase E – Utilization
    - Launch and Orbit raising
        Commissioning and In Orbit Testing
        Normal operations in-orbit
*   - Phase F – Disposal
    - Deorbiting / Reorbiting
```

(methodo_4_1_2)=
### Reliability as a function of time

Reliability generally varies as a function of time, although for some items it is more appropriate to consider reliability as a function of (or conditional on) demand - e.g. constant probability of failure for one shot items, stress-strength approach for shock loading. Nevertheless, from a system level perspective also these models can be transformed to a time scale by making predictions on the occurrence of the relevant stresses and demands during the mission.

At part level, time dependent reliability is often explained with the well-known bathtub curve, as illustrated in {numref}`Figure 4.1`. The curve is divided in three phases: In the initial phase, production errors and workmanship defects are a significant source of failure. When a component has survived a certain time it implies that such birth defects are not present and consequently the reliability increases. At the end of a component's useful life, ageing and {term}`wear-out failures <Wear-out failure>` lead to an increasing failure rate. Between these two phases the failure rate of many parts (e.g. most {term}`EEE` components) remains roughly constant on a low level. For other parts (e.g. mechanical ones), such a steady-state phase cannot be observed, and the failure rate is slowly increasing already during the useful life.

```{figure} pictures/methodo_figure4_1.png
---
width: 600px
name: Figure 4.1
---
The bathtub curve - failure rates as a function of time.
```

To design a reliable product, all three phases illustrated in {numref}`Figure 4.1` need to be understood.  However, this does not necessarily mean that the whole life cycle has to be modelled in a reliability prediction context.

Early life failures are avoided with the aid of screening, testing and quality control. Assuming that these processes are effective, only components that have survived the infant mortality period will be used in the final product. It is thus justified to neglect early life failures during reliability prediction, at least those due to component level defects. Non-part related {term}`systematic failures <Systematic failure>`, resulting from system level design or manufacturing errors, may show a similar pattern and can be considered in the prediction using non-constant failure rates.

{term}`Wear-out failures <Wear-out failure>` are considered during the design of a space system, e.g. by selecting suitable components or materials for the design life time and conditions of use. The objective is to ensure that all components remain within their useful life during the specified lifetime of the system; typically, a margin is considered to account for variability and uncertainties in the prediction of the component’s life expectation. Modelling wear-out effects, requiring a departure from the constant failure rate assumption, becomes relevant for items that exhibit an increasing failure rate already during the design lifetime ({term}`safe life qualification <Safe life qualification>` not possible, or not fully effective), or more broadly in the case of a life time extension, see {numref}`methodo_5_3_2_6` for details.

(methodo_4_2)=
## Classification of space systems and spacecraft elements

(methodo_4_2_1)=
### Space product classification and handbook scope

In space applications, reliability predictions need to consider different kinds of products with completely different attributes, e.g. related to the physical environment, the use conditions or the possibilities to repair a system once operations have started.

The handbook scope is limited to Reliability Predictions for systems that operate in space, e.g. a spacecraft. The following types of spacecrafts can be considered:

* Satellite: unmanned spacecraft in Earth orbit
  * {term}`GEO` satellites, e.g. telecommunications
  * MEO satellites, e.g. navigation
  * LEO satellites, e.g. Earth Observation
* Space probe: spacecraft leaving earth orbit to explore further into outer space
* Constellation of satellites, from two to hundreds or thousands of satellites
* Man-tended vehicles and experiments or modules installed in the Space Station


The handbook is generally applicable to all spacecraft missions, although limited to unmanned spacecraft technology in terms of technology coverage.

Due to the environments and technologies considered, it is not recommended to directly use the handbook for other types of space products, such as launchers or ground segments, even though parts of the methodology can still be applicable. Also, it should be noted that the focus is on systems that are non-repairable, possibly requiring additional considerations for repairable systems.

Finally, it should be noted that the handbook generally assumes a level of quality assurance as usual for spacecrafts manufactured by major satellite prime contractors. The methodology and methods can of course be used also in other applications such as microsats or for “{term}`New Space <New space>`” applications. However, the models, background data and underlying assumptions may not be fully applicable, especially when dealing with process and quality related contributions to unreliability, e.g. for reliability prediction of {term}`EEE` components and assemblies {numref}`sec_eee_handbook` or when modelling {term}`systematic failures <Systematic failure>` based on IOR ({numref}`sec_sys_handbook`).

(methodo_4_2_2)=
### Levels of assembly from part to system

For the purpose of this handbook, a _system_ is considered in the generic sense, and can be defined at any level as a set of components or functions that are interrelated or interact to achieve a specified objective. The lowest level of a system is an elementary _part_ (or _component_).
For a more specific description of the level of assembly considered, the following levels can be distinguished (in the case of a spacecraft considered as the highest level of assembly):

* Spacecraft level (only functional)
* Interfaces level (electrical, mechanical or physical)
* Equipment/Unit level ({term}`EEE`, mechanical or miscellaneous)
* Part/Component level ({term}`EEE`, mechanical or miscellaneous)

The spacecraft level as well as the interface level (dealing with the boundaries where different products interact) are considered in the frame of system level reliability prediction. For the equipment and component level, three technical domains are distinguished in this handbook, as outlined in {numref}`methodo_4_2_3` below.  The methods and models provided for these levels focus on elementary reliability prediction and may have to be combined with general system level models for equipment level reliability prediction (i.e. considering the equipment as a system of elementary parts). Additional levels (intermediate or beyond) may be considered as required by the analysis. 

(methodo_4_2_3)=
### Spacecraft elements and technical domains

At each level of assembly, different types of elements can be used as a part of the overall system. The handbook distinguishes three types of hardware elements, or technical domains:

* **EEE**

    A {term}`EEE` component performs an electrical, electronic or electromechanical function. At equipment level, an electrical unit is considered as a set of {term}`EEE parts <EEE part>` assembled in a single package with structure, boards, wires and connectors to support the specified functions.

* **Mechanical**
  
    A mechanical part is defined as a non-electronics part, i.e. a part that does not perform any {term}`EEE` function. At equipment level, a mechanical unit (or mechanism) is assembled of mechanical parts - and possibly some {term}`EEE` components - to support the specified functions. Also structural elements are considered as mechanical items.

* **Miscellaneous**
  
    Mainly for modelling reasons, the handbook considers a third category of “miscellaneous” items, as parts or assemblies that are difficult to classify as either {term}`EEE` or mechanical, e.g. due to their EEE-mechanical hybrid aspects. 

At spacecraft level, elements from these three categories, which focus on the classification of hardware, will generally interact with software to perform the required functions. Software failures are discussed in the context of system level reliability prediction, as a subclass of (non-part related) {term}`systematic failures <Systematic failure>`. 

(methodo_4_3)=
## Classification of failures by root cause

Typically, multiple root causes contribute to an undesired outcome, but it is generally possible to discriminate which cause is the dominant one; for the methodology, we will consider one main root cause for each failure addressed as the one being the most probable. The classification of failures is based on this main root cause. 

The four classes of failure listed in {numref}`methodo-table4-2` are defined to be mutually exclusive and exhaustive, i.e. each failure observed in orbit can be classified into one of the four categories. In the following, each category is briefly discussed to further clarify the classification.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'methodo-table4-2')" placeholder="Search table...">

```{list-table} Classification of failures into four categories based on the root cause of failure.
:name: methodo-table4-2
:header-rows: 1
:widths: 20 50 30

*   - FAILURE CATEGORY
    - ROOT CAUSE
    - REMARK
*   - {term}`RANDOM FAILURE  <Random failure>`(RF)
    - UNKNOWN RESIDUAL DEFECT / WEAKNESS <ul><li>CONSISTENT WITH QUALITY LEVEL</li><li>UNDER NORMAL STRESSES (REFER TO DATA SHEET)</li><li>ONE-OFF EVENT</li></ul>
    - Relevant for <ul><li>PART LEVEL (in particular EEE)</li></ul>
*   - {term}`SYSTEMATIC FAILURE <Systematic failure>` (SF)
    - <ul><li>DESIGN ERROR</li><li>MANUFACTURING ERROR</li><li>OPERATIONS ERROR</li></ul>
    - Relevant for <ul><li>PART LEVEL</li><li>UNIT/EQUIPMENT LEVEL</li><li>INTERFACES</li><li>SYSTEM (FUNCTIONAL)</li></ul>
*   - WEAR-OUT FAILURE (WO)
    - <ul><li>NORMAL PHYSICAL PROCESS &#8594; TIME/EQUIVALENT TIME <ul><li>OPERATIONS-RELATED (e.g. On/Off, duty cycle)</li></ul><ul><li>ENVIRONMENT-RELATED (e.g. Radiations)</li></ul> </li></ul>
    - Considered as {term}`systematic failure <Systematic failure>` when failure occurs (loss of mission/performances) before the design lifetime
*   - EXTRINSIC FAILURE (EF)
    - <ul><li>VACUUM (Outgassing, cold-welding, heat transfer)</li><li>THERMAL (Solar radiations, Solar albedo, Earth OL Radiation</li><li>MAGNETIC FIELD</li><li>MECHANICAL VIBRATIONS / SHOCKS (launcher, pyro activation)</li><li>ATOMS (EROSION (O) &#8594; considered as WO)</li><li>RADIATIONS (CUMULATED EFFECTS &#8594; considered as WO)</li><li>UV ({term}`degradation <Degradation>` &#8594; considered as WO)</li><li>PLASMA (ESD)</li><li>SEE : DESTRUCTIVE / NON DESTRUCTIVE</li><li>METEORITES</li><li>DEBRIS</li></ul>
    - <p>Space environment phenomena inducing external failure causes </p> <p>Considered as {term}`systematic failure <Systematic failure>` when the extrinsic effects are underestimated before the design lifetime</p>
```

(methodo_4_3_1)=
### Random failures

For the purpose of this handbook, {term}`random failures <Random failure>` are defined as failures due to residual physical defects (or weaknesses) at part level that have not been identified during screening. The physical root cause (the defect) is either unknown or considered as one-off after investigation. Therefore, whereas the origin of systematic, wear-out and {term}`extrinsic failures <Extrinsic failure>` can be identified, the {term}`random failures <Random failure>` represent the failures that can occur at a rate to be determined without understanding what triggered them. We may say that the root cause of {term}`random failures <Random failure>` is unknown.

Obviously, every failure has a root cause, and – at least in theory – we might be able to classify each {term}`random failure <Random failure>` as either systematic, wear-out or extrinsic. It is, however, not realistic to achieve this in practice nor is it required from a modelling perspective.  

{term}`Random failures <Random failure>` are always part-related and mutually independent from one system to another.

Examples of {term}`random failures <Random failure>`:

* Capacitor short circuit without identified cause
* Pyrotechnic device fails to ignite

(methodo_4_3_2)=
### Systematic failures

The root cause of {term}`systematic failures <Systematic failure>` originates from a human error during the design phase (design error), during the manufacturing phase (manufacturing error) or during the operational phase (operations error). 

“Systematic” means that the failure would occur if similar elements (with the same errors) are operated under identical circumstances. To give an example, in case of a design error at equipment level, both nominal and redundant channels are impacted in the same manner even though not necessarily at the same time and with an associated probability of occurrence. As a result, {term}`systematic failure <Systematic failure>` occurrence may be affected by common cause effects and cannot be assumed to be independent as in the case of {term}`random failures <Random failure>`. However, the degree of dependence between two {term}`systematic failures <Systematic failure>` resulting from the same root cause depends on the case, and may range from nearly independent (“random-like”, e.g. manufacturing error on a single hardware element) to almost fully dependent (e.g. design error affecting identical equipment operating under the same conditions) in different settings.

{term}`Systematic failures <Systematic failure>` may in principle be part-related (due to part design or manufacturing errors) or non-part related, i.e. the error can be introduced at higher than part level. In the frame of this handbook it is assumed that the occurrence of part-related {term}`systematic failures <Systematic failure>` is effectively reduced by using space qualified components and by the processes in place in case of an alert issued by a manufacturer. At this quality assurance level, part related failures due to design or manufacturing errors may be assumed covered by the {term}`random failure <Random failure>` rate. Therefore, the focus of {term}`systematic failure <Systematic failure>` modelling in this handbook will be on the consideration of non-part related {term}`systematic failures <Systematic failure>`.

Examples of {term}`systematic failures <Systematic failure>`:
* Gold pollution during the assembly of a {term}`EEE` package (part level, manufacturing)
* Poor lubricant choice leading to increased friction in a mechanism (equipment level, design)
* PCB cracked by the manufacturing tool (equipment level, manufacturing)
* Wrong connection of a connector (interface level, manufacturing)
* Underestimated single event effect flux prediction (spacecraft level, design)
* Sign error in the command chain of a reaction wheel (spacecraft level, software coding)
* Wrong procedure leading to send a dangerous command (spacecraft level, operations)

(methodo_4_3_3)=
### Wear-out failures

{term}`Wear-out failures <Wear-out failure>` result from time dependent physical processes due to calendar aging or driven by operational and/or environmental stresses. The root cause is a {term}`degradation <Degradation>` process (modification of the design characteristics) at part level.

Space system design aims at avoiding {term}`wear-out failures <Wear-out failure>` by ensuring that limited-lifetime items are “safe life” qualified, which means that these items are designed to withstand the design lifetime (with acceptable performances {term}`degradation <Degradation>`) and qualified by tests, generally with a safety factor. Therefore, no failure due to wear-out is expected before the end of the specified lifetime. Failures due to “early” {term}`degradation <Degradation>` before this point are classified either as systematic in the case of a design or manufacturing error, or as random if an unknown residual part defect has accelerated the {term}`degradation <Degradation>` process.

In case of a lifetime extension beyond the specified design life, the {term}`safe life qualification <Safe life qualification>` is no longer valid and {term}`wear-out failures <Wear-out failure>` may need to be considered in the prediction. The same holds true for technologies or items that already show (moderate) {term}`degradation <Degradation>` during the normal design life, such as e.g. in the case of various mechanical parts. Reliability models used for these items need to consider increasing failure rates due to the non-negligible impact of internal wear-out processes.

The different stresses that may lead to {term}`wear-out failures <Wear-out failure>` are classified as follows:

* *Operations-related*: Use in time, On/Off cycling, mechanical wear
* *Environment-related*: Thermal cycling, cumulated radiation, UV light, mono atomic oxygen 

To ensure mutually exclusive categories, and as a matter of convention, failures resulting from wear-out due to environmental effects are classified as Wear-out (not Extrinsic) failures.

When modelling wear-out, it is important to be clear about the definition of “failure”. The time dependent physical {term}`degradation <Degradation>` of an item as such is not considered as a failure before a critical threshold is surpassed, leading either to a definitive failure at part level or to a failure at system level without part level failure. An example for a definitive {term}`wear-out failure <Wear-out failure>` would be fracture of a mechanical part after successive crack growth due to cyclic loading, whereas in the case of battery discharge due to calendar aging failure is better defined at system level by specifying a performance threshold for the battery capacity (Ah).

Examples of {term}`wear-out failures <Wear-out failure>`:

* Progressive parameter drift at {term}`EEE parts <EEE part>` level due to cumulated radiation effects, displacement charge effects (TID/TNID)
* Mechanical bearing failure due to lubricant wear leading to mechanism failure
* Energy and/or power loss (below specified threshold) in batteries due to calendar ageing

(methodo_4_3_4)=
### Extrinsic failures

{term}`Extrinsic failures <Extrinsic failure>` are {term}`sudden failures <Sudden failure>` induced by the space environment on the spacecraft elements. The root cause is the environment, imposing the following stresses:

* Physical conditions (defined in the technical specification)
  * *Vacuum*: outgassing, cold welding, heat transfer
  * *Thermal effects*: solar radiation, solar albedo, Earth Outgoing Longwave radiation
  * *Geomagnetic field*: depending on solar wind, solar activity
* Launch effects
  * *Mechanical vibration*: vibrations during launch
  * *Shocks*: e.g. pyro activation
* External particles
  * *Plasma*: Electro Static Discharge
  * *Heavy ions, Single Event Effects*: destructive, non-destructive
  * *Micro meteorite impacts*
  * *Space debris impacts*

Failures due to cumulated extrinsic effects are (by convention) classified as {term}`Wear-out failures <Wear-out failure>`, see {numref}`methodo_4_3_3` above. Thus, failures due to the following stresses only need to be considered when wear-out predictions become relevant, e.g. to support decision-making on possible satellite life time extensions:

* Wear-out due to extrinsic effects
  * *Single atomic oxygen*
  * *Radiations*: ionizing, non ionizing
  * *Ultra Violet light*

Finally, failures due to extrinsic effects that were underestimated during the design are classified as Systematic, as the root cause is a design error rather than the space environment alone.

Examples of {term}`extrinsic failures <Extrinsic failure>`:

* Destructive Single Event Effects (e.g. Single Event Lath up or Single Event Burnout)
* Non-destructive SEE causing a non-detected corruption of data used in a system control loop
* Outgassing of materials leading to contamination of optical devices
* Debris impact causing failure critical components that are not protected by shielding
* Fracture of a structural element due to launch vibrations or shock loads

(methodo_4_4)=
## Coverage of spacecraft elements and failures in this handbook

The following subsections give a brief overview on the coverage in terms of spacecraft elements and {term}`failure root causes <Failure root cause>` provided in the handbook's model part ({numref}`methods`).

(methodo_4_4_1)=
### Elements coverage

To simplify the application of the handbook for users in practice, {numref}`sec_eee_handbook`, {numref}`sec_mech_handbook`, {numref}`sec_misc_handbook`, {numref}`sec_sys_handbook` are structured based on the technical domains introduced in {numref}`methodo_4_2_3`:

* **{numref}`sec_eee_handbook`** for the modelling of **{term}`EEE`** components and assemblies
* **{numref}`sec_mech_handbook`** for the modelling of **Mechanical** and structural parts and assemblies
* **{numref}`sec_misc_handbook`** for the modelling of **Miscellaneous** items
* **{numref}`sec_sys_handbook`** for **System level** considerations, independent of the technical domains

In terms of levels, {numref}`sec_eee_handbook` to {numref}`sec_misc_handbook` focus on elementary reliability modelling for parts or low levels of assemblies (up to function / equipment level) in each technical domain, whereas the approaches discussed in {numref}`sec_sys_handbook` can be applied at any level to systems in the generic sense.

(methodo_4_4_2)=
### Root cause coverage

For the coverage in terms of failure categories, the methodology has a clear focus on {term}`random failure <Random failure>` modelling, leaving the consideration of other root causes to dedicated model extensions. It should, however, be noted that the distinction between random, systematic, wear-out and extrinsic failures is not always clear-cut and may sometimes be a modelling choice, or a matter of definition, rather than resulting directly from the “nature” of the failures.

Each chapter in {numref}`methods` of the handbook (Models) provides information about the coverage in terms of root causes of failure. A quick overview for all chapters is given in the following:

* RANDOM FAILURES: {term}`Random failures <Random failure>` are clearly a relevant input for the design of reliable systems. They are fully covered by the methodology provided in this handbook.
* SYSTEMATIC FAILURES: The models provided in this handbook do not guarantee a complete coverage of all {term}`systematic failures <Systematic failure>` for all spacecraft elements. 
    * For {term}`EEE` items, a certain coverage of {term}`systematic failures <Systematic failure>` is achieved with the aid of process factors adapted to space applications.
    * For Mechanical items, the methodology allows the consideration of failures due to minor design uncertainties and manufacturing variability. Gross errors require a dedicated modelling at system level.
    * For {term}`Miscellaneous items <Miscellaneous item>`, the methodology allows the consideration of {term}`systematic failures <Systematic failure>` from a simple statistical perspective, referring to the modelling at system level as well. 
    * General considerations for {term}`systematic failure <Systematic failure>` modelling are given in the system level chapter, including a statistical model based on IOR data.
* WEAR-OUT FAILURES: Also {term}`wear-out failures <Wear-out failure>` are not completely covered by the models provided in this handbook:
    * For {term}`EEE` items, the models provided generally assume constant failure rates during the useful life of a component, but a methodology for the separate consideration of {term}`wear-out failures <Wear-out failure>` is proposed in case an explicit wear-out modelling is needed, e.g. in the context of a life time extension.
    * The methodology for Mechanical reliability prediction includes an explicit consideration of relevant {term}`wear-out failure <Wear-out failure>` mechanisms, which may be used to model premature failures before the end-of-life, as well as {term}`wear-out failures <Wear-out failure>` during a potential life time extension.
    * For {term}`Miscellaneous items <Miscellaneous item>`, the methodology includes the consideration of {term}`wear-out failures <Wear-out failure>`, modelled beyond the {term}`mission lifetime <Mission lifetime>` based on an increasing failure rate and with model parameters related to the lifetime qualification of the items. 
    * System level considerations of wear-out modelling can be found in the system chapter, including approaches for the combination of a constant failure rate for {term}`random failures <Random failure>` with a separate wear-out model implying increasing failure rates.
* EXTRINSIC FAILURES: Many of the environmental stresses considered for the definition of {term}`extrinsic failures <Extrinsic failure>` are in fact part of the normal environment for a spacecraft and its components. Some of them are thus considered as “stress contributors” for the {term}`random failure <Random failure>` modelling. Others are assumed to be covered and effectively avoided by different design disciplines and thus excluded from the base methodology.
    * A dedicated discussion of Extrinsic root causes by technical domain can be found in each of the three following chapters : {ref}`EEE chapter<sec_eee_handbook>`, {ref}`MEC chapter<sec_mech_handbook>` and {ref}`MIS chapter<sec_misc_handbook>`.

