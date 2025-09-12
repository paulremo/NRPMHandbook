<!--- Copyright (C) Matrisk GmbH 2022 -->

(misc_10_2)=
# Root causes coverage

The {term}`failure mechanisms <Failure mechanism>` of the miscellaneous parts result from the four categories of {term}`failure root causes <Failure root cause>` already introduced and reminded in {numref}`misc-table_10_3`.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'misc-table_10_3')" placeholder="Search table...">

```{list-table} Coverage of failure root causes by the miscellaneous reliability prediction methodology
:name: misc-table_10_3
:header-rows: 1
:widths: 25 75

*   - Root cause category
    - Coverage by the miscellaneous reliability prediction methodology`
*   - **{term}`Random failures <Random failure>`**
    - Random failures are “one-off” events. They are modelled by a constant failure rate. In the frame of this handbook, a basic failure rate is attributed to a class of miscellaneous item, derived from IOR data and valid in a certain range of parameters. The model is only valid for the design lifetime.
*   - **{term}`Systematic failures <Systematic failure>`**
    - All physical failures are related to design errors / manufacturing and operational errors.
    When it is no longer the case (obvious weakness in design, or actual design characteristics changed by manufacturing defect, premature degradation before the end of the specified lifetime, weakness regarding the space environment) it is necessary to address and to model systematic failures. This is done based on statistics and not considering the human factor as an initial root cause.
*   - **{term}`Degradation failures <Degradation failure>`**
    - Considered by the process described in {numref}`misc_10_5`, Step 5 (degradation modelling), only for miscellaneous items considered as lifetime-limited items. Safe life qualification is used to address the degradation of physical parameters (based on a physical model and a failure criteria). A constant degradation leads in general to a "memory effect" on the failure rate which becomes increasing. 
*   - **{term}`Extrinsic failures <Extrinsic failure>`**
    - Foreseen extrinsic effects due to the launch environment (vibrations, shocks) and physical conditions in‐orbit (e.g. temperature) are assumed to be covered by design and adequate qualification (to be verified before modelling). Any design/manufacturing errors are represented by systematic failures modelling.
    A separate modelling may be required if the probability of additional failure mechanisms induced by the space environment cannot be neglected – e.g. space debris impact.
```

```{admonition} Note 
:class: note
Definitions of these root cause category can be found in {ref}` Part 7 – Glossary <glossary>` of this handbook.
```