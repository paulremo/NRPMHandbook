<!--- Copyright (C) Matrisk GmbH 2022 -->

(syst_11_2=)
# Root causes coverage

Based on the classification of the root causes of failures, different system level methods are suitable, as shown in {numref}`syst-table_11_1`. 

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'syst-table_11_1')" placeholder="Search table...">

```{list-table} Classification of failure root causes and associated system level methods
:name: syst-table_11_1
:header-rows: 1
:widths: 30 30 40

* - **Failure Category**
  - **Root Cause**
  - **System Level Methods**

* - **{term}`Random Failure <Random failure>` (RF)**
  - Unknown residual defect/weakness consistent with quality level and under normal stresses. Only moderate wear-out or degradation of parts.
  - Random failures are:
    
    - On part level are mutually independent and failure rates are constant or do not change significantly over time,
    - On system level various methods can be used (see {numref}`syst_11_3`).

* - **{term}`Systematic Failure <Systematic failure>` (SF)**
  - - Design error  
    - Manufacturing error  
    - Operations error
  - Systematic failures are:
    
    - The result of human error introduced during design, manufacturing or operation,
    - The calculation of systematic failures is part of {numref}`syst_11_9`,
    - To be considered in the system reliability prediction in addition to the random failures on part level,
    - Systematic failures could also result in Common Cause Failures (e.g. failures of several components due to the same cause); calculation of {term}`CCF` on system level is part of {numref}`syst_11_7`.

* - **{term}`Degradation Failure <Degradation failure>` (DEG)**
  - - Physical degradation process  
    - Operations related  
    - Environment related  
    - Classified as “systematic failure” if early degradation is the result of development or manufacturing error.
  - - Failure rates of parts prone to degradation are time dependent.  
    - On system level, degradation failures can also be considered in the reliability prediction by using different probability distributions on component level for degradation failures (e.g. Weibull).  
    - System level analysis with degradation on part level is considered in {numref}`syst_11_8`.

* - **{term}`Extrinsic Failure <Extrinsic failure>` (EX)**
  - Space environment phenomena inducing external failure causes:
    
    - Vacuum  
    - Mechanical shock, vibration  
    - Micro-meteoroids  
    - Debris  
    - Radiation  
    - Plasma  
    - Thermal  
    - Magnetic field
    
    Classified as systematic failure if the root cause was underestimated, e.g. requirement or design error ({ref}`Part 1 - Methodologies <methodologies>`).
  - - Quantitative assessment of extrinsic failures with the system-level methods presented in {numref}`syst_11_3` is possible.  
    - Extrinsic events can also be regarded as potential Common Cause Failures, see {numref}`syst_11_7`.
