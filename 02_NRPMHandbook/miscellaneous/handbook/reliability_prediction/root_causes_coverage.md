<!--- Copyright (C) Matrisk GmbH 2022 -->

(misc_5_2)=
# Root causes coverage
The {term}`failure mechanisms <Failure mechanism>` of the miscellaneous parts result from the four categories of {term}`failure root causes <Failure root cause>` already introduced and reminded in {numref}`misc-table4-3`.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'misc-table4-3')" placeholder="Search table...">

```{list-table} Coverage of failure root causes by the Miscellaneous reliability prediction methodology.
:name: misc-table4-3
:header-rows: 1
:widths: 25 75

*   - Root cause category
    - Coverage by the miscellaneous {term}`reliability prediction methodology <Reliability prediction methodology>`
*   - {term}`Random failures <Random failure>`
    - Random failures are "one-off" events. They are modelled by a constant failure rate. In the frame of the Current document, a basic failure rate is attributed to a class of {term}`miscellaneous item <Miscellaneous item>`, derived from IOR data and valid in a certain range of parameters. The model is only valid for the design lifetime. It can be used beyond the design lifetime in the case there is no wear.
*   - Systematic failures
    - All physical failures are related to Design errors / manufacturing errors.
    When the errors are sufficiently minor inducing a "One-shot" event/situation with typical {term}`failure mechanisms <Failure mechanism>` in line with the item quality level, they are modelled as {term}`random failures <Random failure>`.
    When it is no longer the case (obvious weakness in design, or actual design characteristics changed by manufacturing defect, premature wear-out before the end of the specified lifetime, weakness regarding the space environment) it is necessary to address and to model {term}`systematic failures <Systematic failure>`. This is done based on statistics and not considering the human factor as an initial root cause.
*   - Wear-out failures
    - Considered by the process described in {numref}`misc_5_5` (Wear-Out modelling), only for {term}`miscellaneous items <Miscellaneous item>` considered as lifetime-limited items. {term}`Safe life qualification <Safe life qualification>` is used to address {term}`wear-out failure <Wear-out failure>` based on probability distribution (parameters derived from the duration for qualification). The model addresses nominal lifetime and lifetime extension. 
*   - Extrinsic failures
    - Foreseen extrinsic effects due to the launch environment (vibrations, shocks) and physical conditions in-orbit (e.g. temperature) are assumed to be covered by design and adequate qualification (to be verified before modelling). Any design/manufacturing errors are represented by {term}`systematic failures <Systematic failure>` modelling.
    A separate modelling may be required if the probability of additional {term}`failure mechanisms <Failure mechanism>` induced by the space environment cannot be neglected - e.g. space debris impact.
```
