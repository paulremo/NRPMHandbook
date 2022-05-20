(misc_5_2)=
# Root causes coverage
The {term}`failure mechanisms <Failure mechanism>` of the miscellaneous parts result from the four categories of {term}`failure root causes <Failure root cause>` already introduced and reminded in {numref}`Coverage of failure root causes by the Miscellaneous reliability prediction methodology.`.

(misc_table4_3)=
```{list-table} Coverage of failure root causes by the Miscellaneous reliability prediction methodology.
:header-rows: 1
:name: Coverage of failure root causes by the Miscellaneous reliability prediction methodology.

*   - Root cause category
    - Coverage by the miscellaneous reliability prediction methodology
*   - Random failure
    - Random failures are "one-off" events. They are modelled by a constant failure rate. In the frame of the Current document, a basic failure rate is attributed to a class of miscellaneous item, derived from IOR data and valid in a certain range of parameters. The model is only valid for the design lifetime. It can be used beyond the design lifetime in the case there is no wear.
*   - Systematic failures
    - All physical failures are related to Design errors / manufacturing errors.
    When the errors are sufficiently minor inducing a "One-shot" event/situation with typical failure mechanisms in line with the item quality level, they are modelled as random failures.
    When it is no longer the case (obvious weakness in design, or actual design characteristics changed by manufacturing defect, premature wear-out before the end of the specified lifetime, weakness regarding the space environment) it is necessary to address and to model systematic failures. This is done based on statistics and not considering the human factor as an initial root cause.
*   - Wear-out failures
    - Considered by the process described in {numref}`meca_5_4_5` (Wear-Out modelling), only for miscellaneous items considered as lifetime-limited items. Safe life qualification is used to address wear-out failure based on probability distribution (parameters derived from the duration for qualification). The model addresses nominal lifetime and lifetime extension. 
*   - Extrinsic failures
    - Foreseen extrinsic effects due to the launch environment (vibrations, shocks) and physical conditions in-orbit (e.g. temperature) are assumed to be covered by design and adequate qualification (to be verified before modelling). Any design/manufacturing errors are represented by Systematic failures modelling.
    A separate modelling may be required if the probability of additional failure mechanisms induced by the space environment cannot be neglected - e.g. space debris impact.
```
