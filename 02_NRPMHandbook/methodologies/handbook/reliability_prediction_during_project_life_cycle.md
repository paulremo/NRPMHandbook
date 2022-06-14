(methodo_5)=
# Reliability prediction during project life cycle

```{epigraph}

-- Katharina Fischer, Matrisk GmbH
```


(methodo_5_1)=
## Reliability prediction framework underlying this handbook

Any reliability prediction should be clear, specific and useful.

* "Clear” means that the assumptions underlying the prediction are clearly defined and communicated together with the prediction results, allowing for a meaningful interpretation.
* “Specific” means that the characteristics of the product and mission under analysis are considered appropriately, and the prediction accounts for the relevant variables.
* “Useful” means that the prediction is giving answers to the questions that are of relevance for the required use of the prediction results.

To achieve this, the framework of this handbook starts the prediction process with a discussion of the assumptions underlying the prediction ({numref}`methodo_5_2`), allowing to be at the same time specific to the problem at hand and clear regarding the meaning and interpretation of the prediction results. A key concept is the intended use of the prediction, which is driving the required scope and focus of the prediction in order to be useful for the trade-offs that will be supported ({numref}`methodo_5_3`). Throughout the project life cycle, the prediction will serve different purposes, and different reliability prediction tasks are performed to coordinate the prediction throughout the system development ({numref}`methodo_5_4`).

(methodo_5_2)=
## Assumptions and ground rules for the prediction

When planning a reliability prediction, the ground rules and key assumptions underlying the prediction must be agreed upon in a first step. Which assumptions are appropriate, depends on the following aspects:

* the characteristics of the system or item under analysis, 
* the project life cycle phase in which the prediction is performed and
* the intended use of the prediction results.

Thus, sufficient information on these three points should be available before starting with the prediction, and even before defining any ground rules and assumptions. 

{numref}`methodo-table5-3` gives an overview of different areas in which assumptions need to be made before starting a system level reliability prediction. The associated ground rules give a rough indication of the general principles that should be followed to achieve maximum accuracy (i.e. realistic predictions). It is not mandatory to be compliant with each ground rule, but the assumptions made should be justified considering the characteristics of the system, the project life cycle phase in which the prediction is made and the intended use of the prediction results.

It should be clear that the assumptions made can have a tremendous impact on the results. If the main goal is to receive reliability predictions that are comparable (e.g. between different manufacturers or suppliers), one must ensure that the same assumptions are used. At least the key assumptions with the largest impact on the result should be agreed by all parties, and/or specified in the supply chain.

Any reliability prediction report should provide full information on the assumptions made for the prediction, as listed in {numref}`methodo-table5-3`. This ensures that the required elements of a reliability prediction, as defined in {cite:t}`methodo-IEEE-Std-1413TM`, Clause 4, are provided with the prediction. The relation between each of these required elements, the assumptions listed in {numref}`methodo-table5-3` and the relevant sections of this handbook is given in {numref}`methodo-table5-4`.

<input type="text" class="myInput" id="myInput5-3" onkeyup="searchTableJupyter(this, 'methodo_table5_3')" placeholder="Search table...">

```{list-table} List of assumptions to be agreed upon and associated ground rules for predictions at system level (equipment level or higher).
:name: methodo-table5-3

*   - <table class="myTable" id="methodo_table5_3">
            <thead>
                <tr>
                    <th colspan="2">Assumptions</th>
                    <th>Ground rules</th>
                </tr>
            </thead>
            <tr>
                <td class="full-span">1</td>
                <td colspan="2" class="full-span">Basic information needed to define the assumptions</td>
            </tr>
            <tr>
                <td>1.1</td>
                <td>System definition</td>
                <td>The system or item under analysis shall be clearly defined with a description of all relevant characteristics needed for performing the prediction.</td>
            </tr>
            <tr>
                <td>1.2</td>
                <td>Project life cycle phase</td>
                <td>The project life cycle phase during which the prediction is performed as well as the associated reviews shall be clearly defined</td>
            </tr>
            <tr>
                <td>1.3</td>
                <td>Intended use of the prediction</td>
                <td>The reliability prediction objectives or intended use (s) of the prediction results shall be clearly defined</td>
            </tr>
            <tr>
                <td class="full-span">2</td>
                <td colspan="2" class="full-span">Assumptions related to the reliability prediction coverage</td>
            </tr>
            <tr>
                <td>2.1</td>
                <td>Mission phases coverage</td>
                <td>The prediction shall cover all mission phases that affect reliability and are relevant for the supported reliability prediction use cases.</td>
            </tr>
            <tr>
                <td>2.2</td>
                <td>Elements coverage</td>
                <td>The prediction shall cover all spacecraft elements unless their contribution to overall system (un-)reliability is negligible</td>
            </tr>
            <tr>
                <td>2.3</td>
                <td>Failure modes coverage</td>
                <td>The prediction shall cover all failure modes with a relevant effect on the state (or performance) of the overall system.</td>
            </tr>
            <tr>
                <td>2.4</td>
                <td>Failure mechanisms coverage</td>
                <td>The prediction shall cover all failure mechanism with a relevant contribution to the occurrence of the considered failure modes.</td>
            </tr>
            <tr>
                <td>2.5</td>
                <td>Failure root causes coverage</td>
                <td>The coverage in terms of failure root causes shall be defined depending on the reliability prediction use</td>
            </tr>
            <tr>
                <td class="full-span">3</td>
                <td colspan="2" class="full-span">Assumptions related to the reliability prediction input</td>
            </tr>
            <tr>
                <td>3.1</td>
                <td>Mission definition</td>
                <td>The mission definition shall specify the functions as well as the performance levels (degraded system modes) to be analysed.</td>
            </tr>
            <tr>
                <td>3.2</td>
                <td>Design lifetime</td>
                <td>The design life time shall be clearly specified. For life time extensions, the analysis shall account for accumulated time and stresses.</td>
            </tr>
            <tr>
                <td>3.3</td>
                <td>Operational conditions</td>
                <td>In each project phase, the operational conditions shall be denied or updated based on all available information</td>
            </tr>
            <tr>
                <td>3.4</td>
                <td>Environmental conditions</td>
                <td>In each project phase, the environmental conditions shall be defined or updated based on all available information</td>
            </tr>
            <tr>
                <td>3.5</td>
                <td>Product design information</td>
                <td>The available product design information, as of the current project phase, shall be used to build or update the reliability model</td>
            </tr>
            <tr>
                <td>3.6</td>
                <td>Methods, models</td>
                <td>The prediction methods and models shall be selected based on the technologies, use conditions and available information</td>
            </tr>
            <tr>
                <td>3.7</td>
                <td>Data</td>
                <td>Relevant test or field return data should be used to build or update the reliability models (when available)</td>
            </tr>
            <tr>
                <td class="full-span">4</td>
                <td colspan="2" class="full-span">Assumptions related to the reliability modelling</td>
            </tr>
            <tr>
                <td>4.1</td>
                <td>Redundancy considerations</td>
                <td>Redundancies shall be modelled considering the specific type of redundancy and appropriate input from lower levels</td>
            </tr>
            <tr>
                <td>4.2</td>
                <td>Degraded system modes</td>
                <td>Degraded system modes shall be modelled explicitly, considering reliability as a function of the required performance level.</td>
            </tr>
            <tr>
                <td>4.3</td>
                <td>Dormant phases</td>
                <td>Dormant phase modelling shall account for the difference between the stresses in active and passive mode</td>
            </tr>
            <tr>
                <td>4.4</td>
                <td>Common cause effects</td>
                <td>Common cause effects shall be considered accounting for the system layout, use conditions and considered categories of failures</td>
            </tr>
            <tr>
                <td>4.5</td>
                <td>Distribution functions</td>
                <td>The selection of distribution functions to model reliability in time shall be justified considering the technologies and relevant failure mechanisms</td>
            </tr>
            <tr>
                <td class="full-span">5</td>
                <td colspan="2" class="full-span">Assumptions related to the reliability prediction outputs</td>
            </tr>
            <tr>
                <td>5.1</td>
                <td>Prediction metrics</td>
                <td>The prediction metrics (e.g. failure rate, reliability in time, probability of failure on demand) shall be consistent with the reliability modelling</td>
            </tr>
            <tr>
                <td>5.2</td>
                <td>Prediction uncertainties</td>
                <td>The most relevant epistemic uncertainties associated with the prediction shall be identified and communicated together with the prediction results.</td>
            </tr>
            <tr>
                <td>5.3</td>
                <td>Conservatism</td>
                <td>The required accuracy or conservatism (realistic vs. conservative prediction) shall depend on the intended use of the prediction</td>
            </tr>
        </table>
```

```{list-table} Relation between the assumptions listed in Table 3, the required elements of a prediction according to IEEE 1413:2010 and the relevant sections of this handbook.
:name: methodo-table5-4
:header-rows: 1
:widths: 50 30 20

*   - Required element of a reliability prediction ({cite:t}`methodo-IEEE-Std-1413TM`, Clause 4)
    - {numref}`methodo-table5-3` Assumptions
    - Handbook Chapters
*   - Identification and description of the item for which the prediction is made and the life cycle phase upon which the prediction is performed
    - <ul><li>System definition</li><li>Project life cycle phase</li></ul>
    - {numref}`methodo_4_1_1`, {numref}`methodo_5_4`
*   - Intended use of the prediction results
    - <ul><li>Intended use of the prediction</li></ul>
    - {numref}`methodo_5_3_2`
*   - RP coverage: No required element in {cite:t}`methodo-IEEE-Std-1413TM`
    - <ul><li>Mission phase coverage</li><li>Elements coverage</li><li>Failure modes coverage</li><li>Failure mechanisms coverage</li><li>Root causes coverage</li></ul>
    - {numref}`methodo_4_1`, {numref}`methodo_4_2`, {numref}`method_6`, {numref}`methodo_4_3`, {numref}`methodo_4_4`
*   - List of inputs used for the selected methodologies
    - <ul><li>Mission definition</li><li>Design lifetime</li><li>Operational conditions</li><li>Environmental conditions</li><li>Product design information</li><li>Methods, models</li><li>Data</li></ul>
    - {numref}`methodo_4_3_4`, {numref}`method_6`
*   - Modelling: No required element in {cite:t}`methodo-IEEE-Std-1413TM`
    - <ul><li>Redundancy considerations</li><li>Degraded system modes</li><li>Dormant phases</li><li>Common cause effects</li><li>Distribution functions</li></ul>
    - {numref}`sec_sys_handbook`
*   - Prediction metrics: Definitions and values
    - <ul><li>Prediction metrics</li></ul>
    - {numref}`method_6`
*   - Uncertainties and limitations of the prediction
    - <ul><li>Prediction uncertainties</li></ul>
    - {numref}`method_8`
*   - Statistical confidence in the prediction
    - <ul><li>Conservativism</li></ul>
    - {numref}`method_8`
```

(methodo_5_3)=
## Scope and focus of the prediction for different reliability prediction uses

The scope and focus of a reliability prediction can be defined in terms of different axes, see {numref}`methodo-table5-4` above (RP coverage). 

As a general rule, all elements and associated failure modes and mechanisms need to be covered by the prediction, unless their contribution to overall system (un-)reliability – or to the decision that will be supported – may be assumed to be negligible for practical purposes. Similar considerations hold for the coverage of mission phases during the prediction.
The required coverage in terms of root causes (failure categories, see {numref}`methodo_4_3` for classification) depends on the intended use of the prediction. This is discussed in the following subsections.

(methodo_5_3_1)=
### Reliability prediction versus reliability management

Achieving a high reliability product is an important objective during the design and production of any space system. Considering all root causes of failure is a prerequisite, and different mitigation processes are in place to avoid the occurrence of each of them, see {numref}`methodo-table5-5` for examples. Apart from measures to avoid the different root causes, system level design aims at mitigating the effect of lower level failures on the success of the mission.

The objective of reliability predictions is to provide quantitative estimates for the (remaining) probability of failure despite the implementation of these measures. Some of the mitigation measures are explicitly considered in the prediction, e.g. quality level of EEE parts, or redundancy at system level. Others may be used as a justification to neglect certain root causes in the prediction, provided that the mitigation measures are sufficiently effective to avoid their occurrence. To give an example, calculations from radiation engineering may provide evidence that the rate of destructive Single Event Effects is negligible compared to the random failure rate. Similar considerations become relevant for wear-out failures of EEE components, which can in most cases be effectively avoided by safe life qualification (with appropriate margins), at least when the prediction is limited to the specified design lifetime.

n addition, depending on the intended use of the prediction, there may be no added value to make a quantitative prediction for a certain root cause, because it does not make a difference for the trade-offs that will be supported by the prediction. These aspects are discussed in the following sections.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'methodo-table4-5')" placeholder="Search table...">

```{list-table} Failure categories (from Table   4 -2) with examples of mitigation measures.
:name: methodo-table5-5
:header-rows: 1
:widths: 20 50 30

*   - FAILURE CATEGORY
    - ROOT CAUSE
    - MITIGATION
*   - RANDOM FAILURE (RF)
    - UNKNOWN RESIDUAL DEFECT / WEAKNESS <ul style="text-align:left;"><li>CONSISTENT WITH QUALITY LEVEL</li><li>UNDER NORMAL STRESSES (REFER TO DATA SHEET)</li><li>ONE-OFF EVENT</li></ul>
    - <p>Space Qualification</p><p>Part quality selection</p><p>Derating</p><p>Redundancy</p><p>FDIR</p>
*   - SYSTEMATIC FAILURE (SF)
    - <ul style="text-align:left;"><li>DESIGN ERROR</li><li>MANUFACTURING ERROR</li><li>OPERATIONS ERROR</li></ul>
    - <p>Robust design</p><p>Quality assurance (during design, manufacturing and operations)</p><p>Qualification & verification processes</p>
*   - WEAR-OUT FAILURE (WO)
    - <ul style="text-align:left;"><li>NORMAL PHYSICAL PROCESS &#8594; TIME/EQUIVALENT TIME <ul style="text-align:left;"><li>OPERATIONS-RELATED (e.g. On/Off, duty cycle)</li></ul><ul><li>ENVIRONMENT-RELATED (e.g. Radiations)</li></ul> </li></ul>
    - <p>Components and materials selection</p><p>Design calculations and margins</p><p>Lifetime qualification with margins</p>
*   - EXTRINSIC FAILURE (EF)
    - <ul style="text-align:left;"><li>VACUUM (Outgassing, cold-welding, heat transfer)</li><li>THERMAL (Solar radiations, Solar albedo, Earth OL Radiation</li><li>MAGNETIC FIELD</li><li>MECHANICAL VIBRATIONS / SHOCKS (launcher, pyro activation)</li><li>ATOMS (EROSION (O) &#8594; considered as WO)</li><li>RADIATIONS (CUMULATED EFFECTS &#8594; considered as WO)</li><li>UV (degradation &#8594; considered as WO)</li><li>PLASMA (ESD)</li><li>SEE : DESTRUCTIVE / NON DESTRUCTIVE</li><li>MICROMETEORITES</li><li>DEBRIS</li></ul>
    - <p>Components and materials selection</p><p>Design calculation and margins</p><p>Qualification and verfication testing</p><p>Thermal control</p><p>Shielding (thermal, radiation, debris)</p><p>Radiation engineering</p><p>Debris impact predictions</p><p>Avoidance manoeuvres</p><p>...</p>
```

(methodo_5_3_2)=
### Overview on different reliability prediction uses

Different reliability prediction uses become relevant throughout the project life cycle of a space mission; see {numref}`methodo-table5-6` for an overview. The Table includes some classical reliability prediction uses related to the management and verification of reliability requirements or to the support of design trade-off decisions. However, also some new stakes are addressed, e.g. related to the design of constellations or to the safe disposal of satellites.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'methodo-table5-6')" placeholder="Search table...">

```{list-table} Possible reliability prediction uses throughout the project life cycle.
:name: methodo-table5-6
:header-rows: 1
:widths: 40 55 15

*   - Reliability prediction uses
    - Description
    - Phases
*   - *Input to the design, support trade-offs and comparisons*
    - During the design phase, reliability prediction may be used to compare competing designs or trade-off options, to identify weak parts of the design and to assess the impact of design changes. The level of detail increases with the project phases.
    - A - D
*   - *Establishment, management and verification of quantitative reliability requirements*
    - The purpose of quantitative reliability requirements and their management and verification is to ensure acceptable (as specified) reliability of space products through contractual specification.
    - 0 - D
*   - *Support decisions on the choice of engineering design margins*
    - Reducing excessive margins is one way to reduce cost, but should be justified by an appropriate rationale or analysis. On the other hand, it may sometimes be reasonable to increase a specific margin to avoid a catastrophic single point failure.
    - A - C
*   - *Choosing a test strategy at part, equipment or higher levels*
    - Another way to reduce cost is to reduce the effort dedicated to testing. Additional tests may be useful e.g. to verify a design for identified stresses, to avoid costly redesigns. Also these decisions should be justified by an appropriate rationale or analysis.
    - D
*   - *Support business planning for single spacecrafts and for the design of constellations*
    - Reliability predictions - or specified reliability requirements - form an important input to support space customer’s business planning. This holds particularly for the design of constellations as “system of systems”, e.g. to decide on the number of spares, replenishment scenarios or redundancy management.
    - 0 - E
*   - *Health monitoring and decision-making on life time extension vs. safe disposal*
    - Spacecrafts are designed to be reliable for a specified lifetime and any life time extension needs to be justified based on RP. To support the decision, the reliability prediction needs to be revisited, in particular for the functions relevant for satellite safe disposal (space debris mitigation).
    - E - F
```

The reliability prediction methodology presented in this handbook intends to embrace different reliability prediction uses, although the focus is clearly on the “classical” uses related to the development and design of a single spacecraft. The first use listed in {numref}`methodo-table5-6` - reliability prediction for design support - is considered as the base case. Recommendations on the root cause coverage required for this use are provided in {numref}`methodo_5_3_2_1` , followed by a discussion of the remaining uses in the following subsections.

(methodo_5_3_2_1)=
#### Reliability prediction as input to the design 

Providing input to the design of a spacecraft may be seen as the classical use for reliability predictions in space applications, and is the focus of this handbook. To be useful for design, the methodology needs to account for the relevant design variables in order to support the required trade-offs, and for the affected categories of failures. 

Guidance on the root cause coverage required for this reliability prediction use is given in {numref}`methodo-table5-7` below. It should be noted that the recommendation made for systematic failure modelling is driven by the limitations of the available modelling approaches, which do not account for the relevant decision variables (e.g. impact of maturity category, test strategy). Other design decisions, such as redundancy sizing or the margin policy, are not effective to avoid systematic failures. For these reasons, the added value to consider this failure category for design support is small despite its clear relevance for the overall failure count.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'methodo-table5-7')" placeholder="Search table...">

```{list-table} Root causes coverage for reliability prediction as input to the design.
:name: methodo-table5-7
:header-rows: 1
:widths: 30 70

*   - Failure category
    - Required coverage for reliability prediction as design support
*   - Random failures
    - Full coverage required
*   - Systematic failures
    - Not generally required to cover systematic failures, unless full root causes coverage is needed e.g. to support the design of a constellation ({numref}`methodo_5_3_2_5`).
*   - Wear-out failures
    - Wear-out after the specified lifetime is out of scope for this use (see {numref}`methodo_5_3_2_6` for life time extensions). Premature wear-out (excluding systematic failures) needs to be considered for technologies for which safe life qualification is not possible, or not fully effective.
*   - Extrinsic failures
    - Relevant stress contributors resulting from the spacecraft environment should be considered in the prediction of random and wear-out failures. Explicit consideration of extrinsic failures with dedicated models is only required if the rate of occurrence of additional failure modes (e.g. destructive SEE, space debris impact) cannot be neglected when compared to the random failure rate.
```

The recommendations regarding root causes coverage are generally valid also for preliminary reliability predictions, e.g. for the Preliminary Design Review (PDR). However, the level of detail used in the modelling can be reduced in this context to reduce prediction efforts and to account for limited input availability in early project phases.

(methodo_5_3_2_2)=
#### Establishment and verification of quantitative reliability requirements

To allow for a meaningful verification, the specification of quantitative reliability requirements should always go hand in hand with a clear definition of the requirement’s scope in terms of failure categories, as well as elements coverage. 

The recommendations on root cause coverage for design support in {numref}`methodo-table5-7` may be used also in this context. The quantitative reliability requirements specified between customers, prime contractors and suppliers can then directly be used as a design driver, with the goal to find the best architecture and detailed design to comply with the requirements under the given schedule and budget constraints. 

After completion of the detailed design, the prediction may be extended to account for systematic failures as well, e.g. when full root causes coverage is needed to support the business planning for the owner of a single satellite or a satellite constellation ({numref}`methodo_5_3_2_5`). 

(methodo_5_3_2_3)=
#### Reliability prediction supporting the choice of engineering design margins 

The recommendations made in {numref}`methodo-table5-7` are based on the assumption that the occurrence of certain root causes is effectively reduced by different mitigation measures, as listed in {numref}`methodo-table5-5`. However, one possible use of quantitative reliability predictions is to assess the risk associated with a reduction of design margins, or the benefit of increasing a specific margin. The reliability prediction then needs to account for the effect of this margin policy decision, which may require the consideration of additional root causes. Safe life qualification to avoid wear-out failures before end-of-life is a case in point; wear-out models that are based on Physics of Failure allow quantifying the effect of the associated margins (e.g. radiation margins) on the item’s reliability. More generally, the effect of design margins can be quantified with the aid of any reliability model that consider the effect of the stress contributors that are addressed by this margin. 

(methodo_5_3_2_4)=
#### Reliability prediction supporting the choice of a test strategy

Also the choice of a suitable test strategy may be based on quantitative reliability predictions to assess the effect on the reliability of the flight item. Part level tests, such as e.g. lot acceptance tests, reliability tests, lifetime tests or radiation tests, generally have a clear relation to a specific failure category and the risk associated with a specific test plan (e.g. sample size, duration) can be quantified using statistical methods.

System level qualification and verification tests are performed mainly as a means of quality control, to identify possible design and manufacturing errors that may otherwise lead to systematic failures during operations in orbit. However, with the approaches for systematic failure modelling presented in the current handbook, it is not possible to consider the effect of testing and thus to quantify the risk associated with a specific test strategy.

(methodo_5_3_2_5)=
#### Reliability prediction as input for business planning and design of constellations

To support business planning on the customer side (for single satellites, and especially for constellations), or for the insurance of space systems, reliability predictions need to be as realistic as possible. To achieve this, the scope of the prediction should follow the recommendations made for design support ({numref}`methodo-table5-7`), with an extension to account for systematic failures as well.

(methodo_5_3_2_6)=
#### Reliability prediction to support decisions about life time extensions

The limited coverage of wear-out effects proposed in {numref}`methodo-table5-7` for design support is justified by the fact that components are generally qualified for the specified lifetime. This condition is violated in the case of a lifetime extension, requiring additional considerations for the associated reliability predictions. 

To support decisions on life time extensions, it may not be required to revisit the scope of the prediction for all spacecraft elements; e.g. for space debris mitigation only the functions needed for safe disposal are of interest, and health monitoring may be used to better assess the risk of failure in redundant system architectures. 

Where a quantitative prediction is required, the scope of the prediction needs to be extended to account for additional wear-out failures that may become relevant due to the lifetime extension.

(methodo_5_4)=
## Reliability prediction during project life cycle

This section explains how the system reliability prediction process interacts with the system development process and which activities and deliverables should be performed throughout the system life cycle. The typical system life cycle of space products according to {cite:t}`methodo-ECSS-M-ST-10C` consists of seven phases, as shown in {numref}`Figure Methodo 2` (see also {numref}`methodo_4_1_1`).

```{figure} pictures/methodo_figure5_2.png
---
width: 600px
name: Figure Methodo 2
---
Interaction of the reliability process with the system life cycle
```

The establishment and cascading of reliability requirements will be explained in {numref}`methodo_5_4_2_1`. The evaluation of system architectures from reliability perspective in early design phase is introduced in {numref}`methodo_5_4_3`. The verification of system reliability requirements is part of {numref}`methodo_5_4_4` and the aspects of reliability prediction for life-time extension and safe disposal are handled in {numref}`methodo_5_4_5`. The contribution of reliability prediction to the system development during the different life cycle phases is shown in {numref}`methodo_5_4_1`.

(methodo_5_4_1)=
### Deliverables of the reliability prediction process during Life Cycle

The scope and aim of each system life cycle phase, is highlighted in {numref}`Figure Methodo 2`, taken from {cite:t}`methodo-ECSS-M-ST-10C`.

```{figure} pictures/methodo_figure5_3.png
---
width: 600px
name: Figure Methodo 3
---
System Life Cycle.
```

The contribution of reliability prediction to each phase and the associated reviews are explained as follows in {numref}`methodo-table5-8`. {numref}`methodo-table5-9` gives an overview of reliability documents to be provided per review during the system life cycle. 

<input type="text" class="myInput" id="myInput5-8" onkeyup="searchTableJupyter(this, 'methodo_table5_8')" placeholder="Search table...">

```{list-table} Reliability Deliverables per Project Milestones/Reviews
:name: methodo-table5-8

*   - <table class="myTable" id="methodo_table5_8">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th colspan="13">Phase</th>
                </tr>
                <tr>
                    <th></th>
                    <th>ECSS Document</th>
                    <th>0</th>
                    <th>A</th>
                    <th colspan="2">B</th>
                    <th>C</th>
                    <th colspan="3">D</th>
                    <th colspan="4">E</th>
                    <th>F</th>
                </tr>
                <tr>
                    <th>Document Title</th>
                    <th></th>
                    <th>MDR</th>
                    <th>PRR</th>
                    <th>SRR</th>
                    <th>PDR</th>
                    <th>CDR</th>
                    <th>QR</th>
                    <th>AR</th>
                    <th>ORR</th>
                    <th>FRR</th>
                    <th>LRR</th>
                    <th>CRR</th>
                    <th>ELR</th>
                    <th>MCR</th>
                </tr>
            </thead>
            <tr>
                <td>Failure modes and effects analysis/ failure modes, effects and criticality analysis (as input for system level analysis, e.g. FTA)</td>
                <td>ECSS-Q-ST-30-02</td>
                <td></td>
                <td></td>
                <td>*)</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Fault tree analysis (FTA) (to support reliability prediction)</td>
                <td>ECSS-Q-ST-40-12C</td>
                <td></td>
                <td></td>
                <td></td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Reliability Prediction</td>
                <td>ECSS-Q-ST-30C</td>
                <td></td>
                <td>X *)</td>
                <td>X *)</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
```

*) Although ECSS-Q-ST-30C mentions a reliability prediction at PRR and SRR, this is not done for all projects and may be used only to assist apportioning of requirements to lower level. A FMEA at SRR may be required for specific missions and can be used e.g. to assist safety analysis.

<input type="text" class="myInput" id="myInput5-9" onkeyup="searchTableJupyter(this, 'methodo_table5_9')" placeholder="Search table...">

```{list-table} Contribution of reliability prediction in different mission phases
:name: methodo-table5-9

*   - <table class="myTable" id="myTable">
            <thead>
                <tr>
                    <th rowspan="2">Main objectives</th>
                    <th rowspan="2">Associated reviews</th>
                    <th colspan="3">Involvement of Reliability Prediction</th>
                </tr>
                <tr>
                    <th>Task</th>
                    <th>Input</th>
                    <th>Output</th>
                </tr>
            </thead>
            <tr>
                <td colspan="5" class="full-span">Phase 0: Mission analysis - needs identification</td>
            </tr>
            <tr>
                <td>
                    <p>Define mission needs and expected performance</p>
                    <p>Identify constraints and boundary conditions with respect to physical and operational environment</p>
                    <p>Define possible mission concepts</p>
                </td>
                <td>Mission Definition Review (MDR): Definition of mission baseline.</td>
                <td>
                    <p>In Phase 0 the reliability prediction activities focus on capturing top level requirements and boundary conditions. The Mission Definition Review (MDR) provides the mission profile that is to be used for reliability prediction. Top level reliability requirements are derived from customer needs. </p>
                    <p>A first high level reliability prediction could be done, e.g. for quotation </p>
                </td>
                <td>
                    <p>Mission Profile</p>
                    <p>At this stage of the development process no system architecture is available. </p>
                    <p>Only data from similar projects</p>
                </td>
                <td>
                    <p>Top level requirements included in preliminary technical specification</p>
                    <p>First rough reliability estimation</p>
                </td>
            </tr>
            <tr>
                <td colspan="5" class="full-span">Phase A: Feasibility</td>
            </tr>
            <tr>
                <td>
                    <p>Assess the technical and programmatic feasibility of the possible concepts by identifying constraints related to implementation, costs, schedule, organization, operations, maintenance, production and disposal.</p>
                    <p>Identify critical technologies and propose pre‐development activities.</p>
                </td>
                <td>Preliminary Requirement Review (PRR): Assess feasibility of user requirements to allow a solid start of preliminary design.</td>
                <td>
                    <p>In Phase A the following points are to be addressed by the reliability activities:</p>
                    <p>Assessment of feasibility to achieve the system level reliability requirement</p>
                    <p>Breakdown of system level reliability requirement to lower level to establish a requirement basis to start with preliminary definition in Phase B, which is an input for Preliminary Requirement Review (PRR)</p>
                </td>
                <td>The input data for activities in Phase A are based on a concept of the system architecture, as the detailed design is usually not available and also no FMEA/FMECA. To perform a reliability assessment as well as the partitioning of reliability requirements, often historical data of similar systems and components are used as initial values.</td>
                <td>
                    <p>System reliability requirements</p>
                    <p>Reliability requirement breakdown to lower level.</p>
                    <p>Reliability Prediction in such an early phase may be done as rough estimate to check feasibility and to support apportioning of requirements to lower levels.</p>
                </td>
            </tr>
            <tr>
                <td colspan="5" class="full-span">Phase B: Preliminary definition</td>
            </tr>
            <tr>
                <td>
                    <p>Conduct “trade-off” studies and select the preferred system concept, together with the preferred technical solution(s) for this concept.</p>
                    <p>Establish a preliminary design definition for the selected system concept and the preferred technical solution(s).</p>
                </td>
                <td>
                    <p>System Requirements Review (SRR): Freeze of high level requirements</p>
                    <p>Preliminary Design Review (PDR): Freeze of mission baseline and requirements down to subsystem level. Freeze of design concept at system level.</p>
                </td>
                <td>
                    <p>In the early phase of the development, quantitative methods are used to support the definition of the system and to refine the allocation of requirements. During the development activities, decisions and trade-offs are supported by reliability prediction. For each proposed system solution a preliminary reliability prediction is performed as decision basis to support the Preliminary Design Review (PDR).</p>
                    <p>Preliminary version of FMEA, FMECA are to be prepared as input for system level analysis.</p>
                </td>
                <td>
                    <p>Input data for the preliminary reliability assessment are preliminary system architecture, preliminary versions of FMEA/FMECA and preliminary reliability data on sub-system, equipment and component level.</p>
                    <p>Top level reliability requirements</p>
                    <p>System level reliability requirements</p>
                </td>
                <td>
                    <p>The allocation of system level reliability requirements to lower levels is refined as system architecture evolves. For the System Requirements Review (SRR) the reliability requirements are to be validated. </p>
                    <p>Preliminary reliability prediction including FTA to support PDR.</p>
                </td>
            </tr>
            <tr>
                <td colspan="5" class="full-span">Phase C: Detailed definition</td>
            </tr>
            <tr>
                <td>
                    <p>Completion of the detailed design definition at all levels in the customer‐supplier chain.</p>
                    <p>Production, development testing and pre‐qualification of selected critical elements and components.</p>
                    <p>Production and development testing of engineering models, as required by the selected model philosophy and verification approach.</p>
                </td>
                <td>Critical Design Review (CDR): Confirmation of detailed design, release of final design. Authorisation to complete qualification and build flight units.</td>
                <td>
                    <p>During Phase C, the reliability assessment is updated based on the detailed system definition to demonstrate that reliability requirements are met, supporting Critical Design Review (CDR).</p>
                    <p>FMEA, FMECA and component reliability prediction are to be prepared based on detailed design</p>
                </td>
                <td>Input data based on a detailed system architecture are updated, including FMEA, FMECA, FMES and component level reliability prediction.</td>
                <td>Reliability Prediction including Fault Tree Analysis or other equivalent methods for system reliability assessment</td>
            </tr>
            <tr>
                <td colspan="5" class="full-span">Phase D: Qualification and production</td>
            </tr>
            <tr>
                <td>
                    <p>Complete qualification testing and associated verification activities.</p>
                    <p>Complete manufacturing, assembly and testing of flight hardware/software and associated ground support hardware/software.</p>
                </td>
                <td>
                    <p>Qualification Review (QR): Demonstrate that the system meets all requirements and verification proof is complete</p>
                    <p>Acceptance Review (AR): Acceptance of the System by the Customer</p>
                    <p>Operation Readiness Review (ORR): Verify readiness of the operational teams and procedures and their compatibility with the flight system.</p>
                </td>
                <td>The reliability prediction is updated for customer acceptance considering test results from qualification.</td>
                <td>Input is based on final system design with updated FMEA, FMECA and FMES.</td>
                <td>Reliability Prediction including updated Fault Tree Analysis or other equivalent methods for system reliability assessment</td>
            </tr>
            <tr>
                <td colspan="5" class="full-span">Phase E: Operations / Utilization</td>
            </tr>
            <tr>
                <td>
                    <p>Prepare launch of the system</p>
                    <p>Perform launch and in-orbit testing.</p>
                    <p>Perform in-orbit operations</p>
                </td>
                <td>
                    <p>Flight Readiness Review (FRR): Verify that the flight and ground segments are ready for launch.</p>
                    <p>Launch Readiness Review (LRR): Performed right before launch to provide authorization to proceed for launch.</p>
                    <p>Commissioning Results Review (CRR): Verify system performance after in-orbit testing.</p>
                    <p>End-of-Life Review (ELR): Verify that the system has completed its useful life, ensure safe disposal</p>
                </td>
                <td>
                    <p>Depending on the result of in-orbit testing during commissioning, for example if redundancies are not available, the reliability assessment may have to be re-evaluated to support CRR.</p>
                    <p>Update of reliability prediction based on in-orbit feedback.</p>
                    <p>Reliability assessment for safe disposal.</p>
                </td>
                <td>
                    <p>FMEA, FMES</p>
                    <p>In-orbit test results</p>
                    <p>In-orbit reliability data</p>
                </td>
                <td>Update reliability prediction with in-orbit data for deorbiting function to support End-of-Life Review (ELR) and decision making on life extension.</td>
            </tr>
        </table>
```

(methodo_5_4_2)=
### Management of reliability requirements

(methodo_5_4_2_1)=
#### Establishment of reliability requirements

In the following, the process steps to support the establishment of appropriate reliability requirements will be explained according to {cite:t}`methodo-TASF-RAMS-0010` . The first step is the classification of the type of space mission, as shown in {numref}`methodo-table5-10`. Details on the coverage of this handbook in terms of mission types can be found in {numref}`methodo_4_2_1`.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'methodo-table5-10')" placeholder="Search table...">

```{list-table} Space Mission Classification
:name: methodo-table5-10
:header-rows: 1
:widths: 25 75

*   - 
    - Mission Type
*   - Class A
    - Human Flight or Material Transport Flight
*   - Class B
    - Telecommunication, Observation and Navigation for application with high integrity requirements
*   - Class C
    - Telecommunication, Observation Mission, Space Probe
*   - Class D
    - Test and demonstration mission
*   - Class L
    - Launcher, Launch base
```

Within each class, the missions can be further categorized based on the following criteria **[RD19]** :

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'methodo-table5-11')" placeholder="Search table...">

```{list-table} Space Mission Classification
:name: methodo-table5-11

*   - <table class="myTable" id="myTable">
            <thead>
                <tr>
                    <th></th>
                    <th>Category 1</th>
                    <th>Category 2</th>
                    <th>Category 3</th>
                </tr>
            </thead>
            <tr>
                <td class="row-header">Development time</td>
                <td>More than 2 years</td>
                <td>More than 2 years</td>
                <td>Less than 2 years</td>
            </tr>
            <tr>
                <td class="row-header">Criticality to customer strategic objectives</td>
                <td>High</td>
                <td>Medium</td>
                <td>Low</td>
            </tr>
        </table>
```

The type of mission as well as the categories of mission within each class ({numref}`methodo-table5-11`) should be taken into account for the establishment of reliability requirements. As a general rule, the larger the economic loss a failure of the mission would cause, the more stringent the reliability requirement should be. Furthermore, the criticality of the mission success to the strategic objectives of the customer may justify a higher reliability requirement. 

Reliability requirements are expressed as expected probability of success over a given time period under consideration of:

* Customer commercial objectives, revenue and return on investment
* Insurer requirements
* Regulation, e.g. avoidance of space debris and safe disposal
* Technical feasibility
* Cost, weight and volume constraints

For example
```{epigraph}
The probability that the satellite achieves its performance requirements shall be better than 90% after a mission duration of 10 years in orbit. 
```

Each quantitative requirement should be linked to an explanation to ensure correct interpretation. This includes definition of the scope, principles and boundary conditions that are to be applied for the reliability prediction, as discussed with the ground rules and assumptions for reliability prediction in {numref}`methodo_5_2`.

The reliability requirements could also be defined considering partial losses leading to reduced functional capability and graceful degradation, for example:

```{epigraph}
The probability that at least $k$ out of $n$ antenna links are operative after $y$ years in orbit shall be greater than 98%. 
```

Where $n$ denotes the total number of units installed and $k$ an acceptable degraded mode, with $k < n$. The duration $y$ is usually defined in years and corresponds to end of mission, end of in-orbit testing or end of LEOP, but it can also refer to operation cycles or hours.

(methodo_5_4_2_2)=
#### Allocation of reliability requirements

The allocation of requirements may start with assigning historical data of similar systems to sub-systems and equipment level and is then refined as more details become available. 

The allocation of reliability requirements then consists of the following steps: 

1. Analysis of input requirement to formulate functional and performance requirements
2. Define functional architecture to ensure system performance.
3. Functional failure analysis at system and sub-system level to identify failure scenarios that would lead to violation of reliability requirements
4. Create a high level system model that consists of the relevant subsystems based on the functional failure analysis. 
Methodo  Assign reliability targets to sub-functions. Besides the use of historical data of similar systems different approaches could be used to assign initial reliability targets, for example, see page 50: 
   * Equal allocation
   * Proportional allocation (ARINC method)
   * Feasibility-Of-Objectives (FOO) Method 
6. Review of sub-system targets with regard to feasibility, cost, schedule etc. and refine allocation if deemed necessary. This may involve iterations to find a well-balanced apportionment of reliability targets.

The allocation of requirements to lower level starts with the identification of system functions. Based on the customer top level reliability requirements, a system function for the design can be identified. This overall system function is decomposed into its sub-functions {cite:t}`methodo-DFM-21173`. The functional failure analysis determines the failure effects and repercussions at system level. The following generic failures could be used as guideline to assess each function and sub-function:

* Total loss of function 
* Partial loss of function
* Un-commanded or spurious functioning
* Erroneous functioning

The results of the functional failure analysis allow identifying the functions; those failures would affect the ability to perform the required system function. The cascading of the top-level system reliability requirement to the contributing sub-functions should consider the results of the functional failure analysis. That means, the reliability target allocated to functions and sub-functions should consider the relevant failure modes to ensure functional integrity.

An example of the functional failure analysis for the power supply system is shown in {numref}`methodo-table5-12`. A similar analysis needs to be performed for all functions of the satellite, whereby in early phases of the development the main functions are considered and as design evolves the functional breakdown can be refined and more details are included.

<input type="text" class="myInput" id="myInput5-12" onkeyup="searchTableJupyter(this, 'methodo_table5_12')" placeholder="Search table...">

```{list-table} Example Functional Failure Analysis Power Supply
:name: methodo-table5-12

*   - <table class="myTable" id="methodo_table5_12">
            <thead>
                <tr>
                    <th colspan="3">
                        <p>Functional Failure Analysis</p>
                        <p>Function: Provide electrical power</p>
                    </th>
                </tr>
                <tr>
                    <th>Function / Sub-function</th>
                    <th>Functional failure</th>
                    <th>Failure effect</th>
                </tr>
            </thead>
            <tr>
                <td>1. Provide electrical power</td>
                <td>Total loss of electrical power</td>
                <td>Total loss of power supply. No data communication. Loss of satellite control.</td>
            </tr>
            <tr>
                <td rowspan="2">1.1 Photovoltaics</td>
                <td>Total loss of photovoltaics capabilities</td>
                <td>
                    <p>Total loss of power supply. No payload</p>
                    <p>Total loss of satellite</p>
                </td>
            </tr>
            <tr>
                <td>Partial loss of photovoltaics capabilities</td>
                <td>Degraded performance, battery not fully charged, power interrupt in Earth's shadow possible. Payload interruptions.</td>
            </tr>
            <tr>
                <td rowspan="2">1.2 Charge Battery</td>
                <td>Loss of battery charging</td>
                <td>
                    <p>No power supply in Earth shadow in one orbit</p>
                    <p>Interruption of payload</p>
                    <p>Possible loss of satellite</p>
                </td>
            </tr>
            <tr>
                <td>Overcharge of battery</td>
                <td>
                    <p>Permanent damage of battery possible</p>
                    <p>No power supply in Earth shadow in one orbit</p>
                    <p>Interruption of payload</p>
                    <p>Possible loss of satellite</p>
                </td>
            </tr>
            <tr>
                <td rowspan="2">1.3 Output voltage regulation</td>
                <td>Erroneous function output regulation - too low</td>
                <td>Insufficient voltage supply to satellite. No data communication</td>
            </tr>
            <tr>
                <td>Erroneous function output regulation – voltage too high</td>
                <td>Permanent damage to electronic components possible if no over-voltage protection is implemented</td>
            </tr>
        </table>

```

The analysis of functional failures can also be represented with a reliability block diagram. Quantitative methods are used to support the system definition and to refine the allocation of requirements to sub-system level. 

In the following, different approaches for requirement allocation are introduced, including:

* Equal allocation
* Proportional allocation (ARINC method)
* Feasibility-Of-Objectives (FOO) Method

These methods are applicable for a serial system structure only. For more complex system architectures, the reliability allocation should also make use of system level reliability assessment methods (see {numref}`sec_sys_handbook`). 

The apportionment of the system level reliability target to sub systems is based on the following relation for serial system. 

(misc_equation5_1)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation Methodo 1
\hat{R}_{i}(t) = (\hat{R}_{S}(t))^{w_{i}}
```
- $\hat{R}_{S}(t)$ denotes the reliability target on system level
- $\hat{R}_{i}(t)$ denotes the reliability target on sub-system level, and
- $w_{i}$ denotes the weighting factor of sub-system $i$
````

It is obvious that for different values for $R_{i}(t)$ the same system reliability $R_{S}(t)$ can be obtained. Thus, there are infinite possible solutions to allocate the system level reliability target to the sub-system level. Therefore, practical methods are needed to assist the system design in the apportionment of reliability requirements. 

**Equal Allocation**

This method equally distributes the system reliability on all the sub-systems below the system level {cite:t}`methodo-MIL-HDBK-338B` . The weighting factor is equal for each sub system and given by the number of sub systems. The reliability target for the sub-systems is given by 

(misc_equation5_2)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation Methodo 2
\hat{R}_{i}(t) = (\hat{R}_{S}(t))^{\frac{1}{n}}
```
- $\hat{R}_{S}(t)$ denotes the reliability target on system level
- $\hat{R}_{i}(t)$ denotes the reliability target on sub-system level, and
- $n$ denotes the number of sub-systems.
````

For example, a reliability target of 0.9 on system level would result in a target of 0.9826 for each sub system, if the system consists of 6 sub-systems. If the target on system level is given as failure probability or failure rate the target on subsystem level is obtained from the following equations. 

(misc_equation5_3)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation Methodo 3
\hat{F}_{i}(t) = \frac{\hat{F}_{S}(t)}{n}
```
- $\hat{F}_{S}(t)$ denotes the failure probability target on system level
- $\hat{F}_{i}(t)$ denotes the failure probability target on sub-system level
- $n$ denotes the number of sub-systems.
````

(misc_equation5_4)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation Methodo 4
\hat{\lambda}_{i}(t) = \frac{\hat{\lambda}_{S}(t)}{n}
```
- $\hat{\lambda}_{S}(t)$ denotes the failure rate target on system level
- $\hat{\lambda}_{i}(t)$ denotes the failure rate target on sub-system level, and
- $n$ denotes the number of sub-systems.
````

The equal allocation is very easy to apply, but does not consider the technical feasibility and experience from similar projects. This could result in very stringent requirements for some sub-system that cannot be achieved or only with increased effort. Thus, it might be necessary to refine the allocation in order to get to a more balanced share between sub-systems. 

**Proportional Allocation (ARINC Method)**

The proportional allocation also known as ARINC method takes historical data on sub-system reliability into account to distribute the reliability to sub-system level. The weighting factor is determined by the ratio of the observed sub-system failure probability to the total system failure probability, as shown in Eq. {eq}`Equation Methodo 5`. The new reliability target is allocated to sub-system proportional to this factor.

(misc_equation5_5)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation Methodo 5
w_{i} = \frac{F_{i.old}(t)}{F_{S.old}(t)}
```
- $F_{S.old}(t)$ denotes the historical failure probability on system level
- $F_{i.old}(t)$ denotes the historical failure probability on sub-system level
````

Given that 15% of the system failures are caused by a failure of the power supply sub-system a reliability target of 98,43% is derived for the power supply system using Eq. {eq}`Equation Methodo 1` to achieve a reliability of 90% on system level, as shown in {numref}`methodo-table5-13`. Please note that in the example the failure probabilities of the sub-system were derived from the minimal cut set approximation to simplify the calculation. 

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'methodo-table5-13')" placeholder="Search table...">

```{list-table} Example of proportional allocation of reliability targets to sub-systems
:name: methodo-table5-13
:header-rows: 1
:widths: 25 25 25 25

*   - Sub-System
    - Weighting Factor $w_{i}$
    - Failure probability Target (approximation)
    - Reliability target $\hat{R}_{i}(t) = (\hat{R}_{S}(t))^{w_{i}}$
*   - Power
    - 0.15
    - 0.015
    - 0.9843
*   - Tele-Command/Telemetry
    - 0.20
    - 0.02
    - 0.9791
*   - Propulsion
    - 0.10
    - 0.01
    - 0.9895
*   - Orbit Control
    - 0.15
    - 0.015
    - 0.9843
*   - Structure
    - 0.10
    - 0.01
    - 0.9895
*   - Data Communication (Pay load)
    - 0.30
    - 0.04
    - 0.9689
*   - System level
    - 100%
    - 0.1
    - 0.90
```

**Feasibility-Of-Objectives (FOO) Method**

The FOO method allows users to assign grading factors to sub-systems and their components in order to determine how reliability targets are cascaded from top level to lower level. A sub-system with high grading factors is allocated a lower reliability than a sub-system with low grading factors. Default grading categories are complexity, technical level (state of art), operating time and environmental condition. Users may change these categories. Each rank is based on a scale from 1 to 10 and is estimated using both design engineering and expert judgment {cite:t}`methodo-MIL-HDBK-338B` : 

1. System Complexity. Complexity is evaluated by considering the probable number of parts or components making up the sub system and also is judged by the assembled intricacy of these parts or components. The least complex sub system is rated at 1, and a highly complex sub system is rated at 10.
2. Technology level. The state of present engineering progress in all fields is considered. The least developed design or method receives a value of 10, and the most highly developed is assigned a value of 1.
3. Operating Time. An element that operates for the entire mission time is rated 10, and an element that operates the least time during the mission is rated 1.
4. Environmental conditions are also rated from 10 through 1. Elements expected to experience harsh and very severe environments during their operation are rated as 10, and those expected to encounter the least severe environments are rated as 1.


The first stage for this allocation method is to calculate the total grading value for each sub-system. This is obtained by multiplying the grading factors from each category:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation Methodo 6
G_{i} = \prod_{j}^{n} g_{ij}
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation Methodo 7
w_{i} = \frac{\prod_{j}^{n} g_{ij}}{\sum_{i} G_{i}}
```
````

An example for reliability allocation using FOO method is shown in {numref}`methodo-table5-14`. The system level reliability target of 0.9 is distributed to sub-systems based on weighting factor obtained from Eq. {eq}`Equation Methodo 7`.


<input type="text" class="myInput" id="myInput5-14" onkeyup="searchTableJupyter(this, 'methodo_table5_14')" placeholder="Search table...">

```{list-table} Example of graded allocation of reliability targets to sub-systems
:name: methodo-table5-14

*   - <table class="myTable" id="methodo_table5_14">
            <thead>
                <tr>
                    <th rowspan="2" >Sub-system</th>
                    <th colspan="4">Categories grading values <span class="math">\(g_{ij}\)</span></th>
                    <th rowspan="2">Weighting Factor <span class="math">\(w_{i}\)</span></th>
                    <th rowspan="2">Sub System Target <span class="math">\(\hat{R}_{i}(t)\)</span></th>
                </tr>
                <tr>
                    <th>Complexity</th>
                    <th>Technology Level</th>
                    <th>Operation time</th>
                    <th>Environmental Conditions</th>
                </tr>
            </thead>
            <tr>
                <td>Power</td>
                <td>6</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>0.12550</td>
                <td>0.98686</td>
            </tr>
            <tr>
                <td>Tele-Command/ Telemetry</td>
                <td>6</td>
                <td>4</td>
                <td>7</td>
                <td>6</td>
                <td>0.16867</td>
                <td>0.98239</td>
            </tr>
            <tr>
                <td>Propulsion</td>
                <td>5</td>
                <td>6</td>
                <td>5</td>
                <td>5</td>
                <td>0.12550</td>
                <td>0.98686</td>
            </tr>
            <tr>
                <td>Orbit Control</td>
                <td>8</td>
                <td>8</td>
                <td>5</td>
                <td>7</td>
                <td>0.37483</td>
                <td>0.96128</td>
            </tr>
            <tr>
                <td>Structure</td>
                <td>4</td>
                <td>2</td>
                <td>10</td>
                <td>8</td>
                <td>0.10710</td>
                <td>0.98878</td>
            </tr>
            <tr>
                <td>Pay load</td>
                <td>7</td>
                <td>6</td>
                <td>7</td>
                <td>2</td>
                <td>0.09839</td>
                <td>0.98969</td>
            </tr>
            <tr>
                <td>System level</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>1.0</td>
                <td>0.90</td>
            </tr>
        </table>

```

(methodo_5_4_3)=
### Reliability assessment for system architecture development during conceptual design 

The outcome of the conceptual design phase are concepts that will be implemented during the next stages of the system development. The selection of the preferred system architecture is essentially a trade-off among the various architecture options. According to {cite:t}`methodo-ECSS-E-ST-10C`, a trade-report should contain the result of the evaluation of every identified alternative design solution with regard to the key technical requirements. For each alternative design solution, the following should be performed: 

* Assessment of all the key technical requirements / evaluation criteria, 
* Presentation of the pros and cons of the design solution, and 
* Identification of the technical and programmatic risks. 

The reliability prediction is an important part of the trade-off studies and could be applied to support system engineering, subsystem engineering and equipment level design engineering. It provides a quantitative assessment of alternative design solutions regarding the achievement of reliability requirements. In the trade-off study, a sensitivity analysis can support system engineering through quantifying how reliability on system level changes if certain parameters change. Importance measures (see {numref}`sec_sys_handbook`) could be used to perform such a sensitivity analysis. Furthermore, the reliability prediction for the trade-off should identify the equipment failure modes that significantly impact the system reliability. If the correlation between equipment failure modes and system reliability can be established, the aim of system reliability improvement is to eliminate or significantly reduced these failure modes by improving equipment quality or reconfiguring the system architecture. Different design concepts may cause different types of failure modes. The system designers should be aware of the underlying failure causes to achieve a robust design. To achieve the desired quality, the development process should be accompanied by an appropriate quality assurance procedure, see e.g. {cite:t}`methodo-ECSS-Q-ST-10C`.

(methodo_5_4_4)=
### Reliability requirement verification for compliance demonstration

The verification activities should demonstrate that the design and architecture is compliant with the reliability requirements for the corresponding level. This includes to demonstrate that: 

* All requirements have been taken into account and that the design is compliant with the requirements.

* There is sufficient confidence that the final product will meet the requirements.

* There is sufficient confidence in the correctness of the design on system level so that the specification and design of the next lower level can progress. 

* The verification activities should demonstrate that the design and architecture is compliant with the reliability requirements for the corresponding level. But the verification should also demonstrate that the sub-systems on the next lower level are compliant with the requirements for the next lower level. It is important that compliance of each building block with the requirements is substantiated and that potential non-compliances are identified. 

* For reliability requirements, the verification is performed through quantitative analysis, see {numref}`sec_sys_handbook`. To finally demonstrate compliance with the top level reliability requirements, the final reliability prediction should be performed when the data for the sub-systems and component failure behaviour are available. Depending on the performance requirements, a consideration of degraded system operability might be useful.

(methodo_5_4_5)=
### Reliability assessment for life time extension and safe disposal

To support life time extension decisions, the reliability prediction may need to be updated and in particular the reliability of the functions for safe disposal has to be considered to demonstrate compliance with space debris mitigation requirements, see also {numref}`methodo_5_3_2_6`.

The following aspects should be considered:

* If the life extension exceeds the qualification time, the assumptions made in the beginning of the project have to be revisited. 
* Wear-out may need to be considered for life time beyond qualification time.
* The result of in-orbit testing and reliability estimation based on in-orbit feedback have to be taken into account to support decision on life time extension.

It is important to note that the probability of success of safe disposal has to be demonstrated already during the design phase as part of the space debris mitigation requirements. The analysis for safe disposal is then reassessed if the lifetime in-orbit is completed and should be further extended or a failure occurred during the lifetime. That means the requirements for safe disposal determine to what extent a life time extension is possible.

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">