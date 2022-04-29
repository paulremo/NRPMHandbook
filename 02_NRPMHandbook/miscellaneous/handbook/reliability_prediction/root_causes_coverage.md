# Root causes coverage

The failure mechanisms of the miscellaneous parts result from the four categories of failure root causes already introduced and reminded in [Table 4‑3](misc_table4_3).

(misc_table4_3)=
<iframe class="ext_content" src="../../../_static/interactivity/html/misc_table4_3.html" frameborder="0" onload="resize_iframe(this)"></iframe>

<!--```{admonition} **Random failure**
:class: note, dropdown
Random failures are "one-off" events. They are modelled by a constant failure rate. In the frame of the Current document, a basic failure rate is attributed to a class of miscellaneous item, derived from IOR data and valid in a certain range of parameters. The model is only valid for the design lifetime. It can be used beyond the design lifetime in the case there is no wear.
```

```{admonition} **Systematic failures**
:class: note, dropdown
All physical failures are related to Design errors / manufacturing errors.

When the errors are sufficiently minor inducing a “One-shot” event/situation with typical failure mechanisms in line with the item quality level, they are modelled as random failures.

When it is no longer the case (obvious weakness in design, or actual design characteristics changed by manufacturing defect, premature wear-out before the end of the specified lifetime, weakness regarding the space environment) it is necessary to address and to model systematic failures. This is done based on statistics and not considering the human factor as an initial root cause.
```

```{admonition} **Wear‐out failures**
:class: note, dropdown
Considered by the process described in [Section 4.5](process_reliability_modelling.md) (Wear-Out modelling), only for miscellaneous items considered as lifetime-limited items. Safe life qualification is used to address wear-out failure based on probability distribution (parameters derived from the duration for qualification). The model addresses nominal lifetime and lifetime extension.
```

```{admonition} **Extrinsic failures**
:class: note, dropdown
Foreseen extrinsic effects due to the launch environment (vibrations, shocks) and physical conditions in‐orbit (e.g. temperature) are assumed to be covered by design and adequate qualification (to be verified before modelling). Any design/manufacturing errors are represented by Systematic failures modelling.

A separate modelling may be required if the probability of additional failure mechanisms induced by the space environment cannot be neglected – e.g. space debris impact.
```-->