# Root causes coverage

Based on the classification of the root causes of failures, different system level methods are suitable, as shown in {numref}`syst-table4-1`. 

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'syst-table4-1')" placeholder="Search table...">

```{list-table} Classification of failure root causes and associated system level methods.
:name: syst-table4-1
:header-rows: 1
:widths: 30 30 40

*   - Failure Category
    - Root Cause
    - System Level Methods
*   - {term}`Random failures <Random failure>`
    - Unknown residual defect/weakness consistent with quality level and under normal stresses. Only moderate wear-out or {term}`degradation <Degradation>` of parts.
    - Random failures on part level are mutually independent and failure rates are constant or do not change significantly over time. On system level various methods can be used, see {numref}`syst_4_3`.
*   - Systematic Failure
    - <p>Design error</p><p>Manufacturing error</p><p>Operations error</p>
    - {term}`Systematic failures <Systematic failure>` are the result of human error introduced during design, manufacturing or operation. The calculation of systematic failures is part of {numref}`syst_4_9`. {term}`Systematic failures <Systematic failure>` are to be considered in the system reliability prediction in addition to the {term}`random failures <Random failure>` on part level. {term}`Systematic failures <Systematic failure>` could also result in Common Cause Failures, i.e. failures of several components due to the same cause. Calculation of Common Cause Failures on system level is part of {numref}`syst_4_7`.
*   - Wear-Out Failure
    - <p>Physical {term}`degradation <Degradation>` process</p><p>Operations related</p><p>Environment related </p><p>Classified as {term}`systematic failure <Systematic failure>` if early wear-out is the result of development or manufacturing error.</p>
    - Failure rates of parts prone to wear-out are time-dependent. On system level {term}`wear-out failures <Wear-out failure>` can also be considered in the system level reliability prediction by using different probability distribution on component level for the {term}`wear-out failures <Wear-out failure>` (e.g. Weibull). System level analysis with wear-out on part level is considered in {numref}`syst_4_8`.
*   - Extrinsic Failures
    - <a>Space environment phenomena inducing external failure causes:<ul><li>Vacuum</li><li>Mechanical shock, vibration</li><li>Micro meteoroids</li><li>Debris</li><li>Radiation</li><li>Plasma</li><li>Thermal</li><li>Magnetic field</li></ul></a>Classified as {term}`systematic failure <Systematic failure>` if the root cause was underestimated, e.g. requirement or design error (see {numref}`methodologies` for classification)
    - Quantitative assessment of {term}`extrinsic failures <Extrinsic failure>` with the system level methods presented in {numref}`syst_4_3` is possible. Extrinsic events can also be regarded as potential Common Cause Failure, see {numref}`syst_4_7`.
```