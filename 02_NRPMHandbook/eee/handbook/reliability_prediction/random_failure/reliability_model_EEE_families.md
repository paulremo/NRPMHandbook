(eee_4_3_4)=
# Reliability model proposed for all EEE families

(eee_4_3_4_1)=
## Capacitors (family 01)

Capacitors are classified as family 01 in EPPL {cite:t}`eee-EPPL007-37`.

All capacitors used for Space applications can be modelled through FIDES.

The following table presents the different subfamilies and the corresponding models with the FIDES method (in the 2009 version of FIDES but also in the 2021 version for information).

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_19')" placeholder="Search table...">

```{list-table} Groups of capacitors.
:name: eee-table4-19

* - <table class="myTable" id="eee_table4_19">
        <thead>
            <tr>
                <th rowspan="2"><strong>Groups of capacitors</strong></th>
                <th colspan="2"><strong>Models in FIDES </strong></th>
                <th rowspan="2">Proposed models in FIDES</th>
                <th rowspan="2"><strong>Remark</strong></th>
            </tr>
             <tr>
                <th>2009</th>
                <th>2021</th>
            </tr>
        </thead>
        <tr>
            <td>
                <p>01 Ceramic</p>
                <p>02 Ceramic chip</p>
                <p>10 Feedthrough</p>
            </td>
            <td>p135</td>
            <td>p151</td>
            <td>
                <p>“Ceramic capacitor with defined temperature coefficient (Type 1)”</p>
                <p>“Ceramic capacitor with non-defined temperature coefficient (Type 2) ”</p>
            </td>
            <td>
                <p>ECCC_01</p>
                <p>….</p>
                <p>ECCC_08</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>03 Tantalum solid</p>
                <p>04 Tantalum non-solid</p>
            </td>
            <td>p140</td>
            <td>p156</td>
            <td>“Tantalum capacitor (solid or gel electrolyte)”</td>
            <td>
                <p>ECTC_08</p>
                <p>(ECTC_04 .. 06)</p>
                <p>ECTC_07</p>
                <p>(ECTC_01..03)</p>
            </td>
        </tr>
        <tr>
            <td>05 Plastic metallized</td>
            <td>No</td>
            <td>p158</td>
            <td>“Plastic film capacitor”</td>
            <td>
                <p>ECFC_01</p>
                <p>…..</p>
                <p>ECFC_05</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>06 Glass</p>
                <p>07 Mica</p>
            </td>
            <td>No</td>
            <td>No</td>
            <td>NA - No longer used in space applications</td>
            <td>NA</td>
        </tr>
        <tr>
            <td>09 Aluminium</td>
            <td>Yes</td>
            <td>p154</td>
            <td>
                <p>“Aluminium liquid electrolyte capacitor”, “Aluminium solid electrolyte capacitor”</p>
                <p>Not used in space applications</p>
            </td>
            <td>
                <p>ECAC_01</p>
                <p>ECAC_02</p>
            </td>
        </tr>
        <tr>
            <td>11 Semiconductors</td>
            <td>No</td>
            <td>No</td>
            <td>
                <p>“Low power transistors, Silicon MOS &lt; 5W”</p>
                <p>Addressed in paragraph</p>
            </td>
            <td>ECDS_19</td>
        </tr>
    </table>
```

Here is the generic formula used in FIDES for capacitors:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_31
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{LF}}
```  
with:
-   $\lambda_{\text{Physical}}$ the physical contribution for each component,

-   $\Pi_{\text{PM}}$ the quality and technical control over manufacturing of the item,

-   $\Pi_{\text{Process}}$ the quality and technical control over the development, manufacturing and use process for the product containing the item,

-   $\Pi_{\text{LF}}$ the factor representing the process to become lead-free if it has to be considered. For Space applications, it is equal to 1 (see paragraph {numref}`eee_4_3`).
````

All this being based on a mission profile to be defined for the whole unit.

(eee_4_3_4_1_1)=
### Ceramic Capacitors (01 & 02 subfamilies) & Feedthrough (10 subfamily)

The following table lists the 8 categories that cover the Ceramic Capacitor subfamily based on the CV calculation.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_20')" placeholder="Search table...">

```{list-table} Detail for ceramic capacitors
:name: eee-table4-20

* - <table class="myTable" id="eee_table4_20">
        <thead>
            <th colspan="2">ECCC - Ceramic Capacitor</th>
        </thead>
        <tr>
            <td>ECCC_01</td>
            <td>Ceramic Capacitor Type I - Low CV</td>
        </tr>
        <tr>
            <td>ECCC_02</td>
            <td>Ceramic Capacitor Type I - Medium CV</td>
        </tr>
        <tr>
            <td>ECCC_03</td>
            <td>Ceramic Capacitor Type I - High CV</td>
        </tr>
        <tr>
            <td>ECCC_04</td>
            <td>Ceramic Capacitor Type II - Low CV</td>
        </tr>
        <tr>
            <td>ECCC_05</td>
            <td>Ceramic Capacitor Type II - Medium CV</td>
        </tr>
        <tr>
            <td>ECCC_06</td>
            <td>Ceramic Capacitor Type II - High CV</td>
        </tr>
        <tr>
            <td>ECCC_07</td>
            <td>Ceramic Capacitor Type II Polymer terminations - Low CV</td>
        </tr>
        <tr>
            <td>ECCC_08</td>
            <td>Ceramic Capacitor Type II Polymer terminations - High/Medium CV</td>
        </tr>
    </table>
```

```{admonition} Note
:class: note

For the special case of HFRF capacitors, the choice is given in the table hereafter:
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_21')"
    placeholder="Search table...">

```{list-table} Detail for HFRF capacitors
:name: eee-table4-21

* - <table class="myTable" id="eee_table4_21">
        <thead>
            <th colspan="2">HFHC - HFRF Capacitor</th>
        </thead>
        <tr>
            <td>HFHC_01</td>
            <td>HFRF Capacitor Type I - Low CV</td>
        <tr>
            <td>HFHC_02</td>
            <td>HFRF Capacitor Type I - Medium CV</td>
        </tr>
        <tr>
            <td>HFHC_03</td>
            <td>HFRF Capacitor Type I - High CV</td>
        </tr>
    </table>
```

> **a) Mission profile**

In order to model the reliability for each component of a unit, it is necessary to define the mission profile corresponding to the unit under consideration. See paragraph {numref}`eee_4_3_1` for details.

> **b) Calculation of $\lambda_{\text{Physical}}$**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_32
\lambda_{\text{Physical}} = \lambda_{0_{\text{capacitor}}} \cdot \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \left( \Pi_{\text{Thermal}} + \Pi_{\text{TCy}} + \Pi_{\text{Mechanical}} \right)_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
```
With:

- $\lambda_{0_{\text{capacitor}}}$ : Base failure rate for one group of capacitor
- $\Pi_{\text{Thermo-electrical}}$ : Thermo-electrical factor
- $\Pi_{\text{TCy}}$ : Cycling factor
- $\Pi_{\text{Mechanical}}$ : Mechanical factor
- $\Pi_{\text{induced}}$ : Induced factor

````

**Physical stresses for ceramic capacitors:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_33
\Pi_{\text{Thermal}} = \gamma_{\text{TH}_{\text{EL}}} \cdot \left( \frac{1}{S_{\text{reference}}} \cdot \frac{V_{\text{applied}}}{V_{\text{rated}}} \right)^{3} \cdot \exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{\text{board}_{\text{ref}}} + \text{ΔT}} \right) \right\rbrack
```  
```{math}
:label: Equation_1_34
\Pi_{\text{Tcy}} = \gamma_{\text{TCy}} \cdot \left( \frac{{12 \cdot N}_{\text{cy}_{\text{phase}}}}{t_{\text{phase}}} \right) \cdot \left( \frac{\min\left( \theta_{\text{cy}},2 \right)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\Delta T_{\text{cycling}}}{20} \right)^{1.9} \cdot \exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{\max_{\text{cycling}}}} \right) \right\rbrack
```  
```{math}
:label: Equation_1_35
\Pi_{\text{Mechanical}} = \gamma_{\text{Mech}} \cdot \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}
```
With $\lambda_{0_{\text{capacitor}}}$, $E_{a}$, $S_{\text{reference}}$, $\gamma_{\text{TCy}}$, $\gamma_{\text{Mech}}$, $\gamma_{\text{TH}_{\text{EL}}}$ given in {numref}`eee-table4-22`.
````

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-22')" placeholder="Search table...">

```{list-table} Details of parameters for ceramic capacitors
:name: eee-table4-22
:header-rows: 1
:widths: 30 10 10 10 10 10 10 10

*   - Description
    - Ref
    - $\lambda_{0_{\text{capacitor}}}$
    - $E_{a}$
    - $S_{\text{reference}}$
    - $\gamma_{\text{TH}_{\text{EL}}}$
    - $\gamma_{\text{TCy}}$
    - $\gamma_{\text{Mech}}$
*   - Ceramic Capacitor Type I - Low CV
    - ECCC_01
    - 0.03
    - 0.1
    - 0.3
    - 0.7
    - 0.28
    - 0.02
*   - Ceramic Capacitor Type I - Medium CV
    - ECCC_02
    - 0.05
    - 0.1
    - 0.3
    - 0.7
    - 0.28
    - 0.02
*  - Ceramic Capacitor Type I - High CV
    - ECCC_03
    - 0.40
    - 0.1
    - 0.3
    - 0.69
    - 0.26
    - 0.05
*   - Ceramic Capacitor Type II - Low CV
    - ECCC_04
    - 0.08
    - 0.1
    - 0.3
    - 0.7
    - 0.28
    - 0.02
*   - Ceramic Capacitor Type II - Medium CV
    - ECCC_05
    - 0.15
    - 0.1
    - 0.3
    - 0.7
    - 0.28
    - 0.02
*   - Ceramic Capacitor Type II - High CV
    - ECCC_06
    - 1.20
    - 0.1
    - 0.3
    - 0.44
    - 0.51
    - 0.05
*   - Ceramic Capacitor Type II Polymer terminations - Low CV
    - ECCC_07
    - 0.08
    - 0.1
    - 0.3
    - 0.7
    - 0.28
    - 0.02
*   - Ceramic Capacitor Type II Polymer terminations - High/Medium CV
    - ECCC_08
    - 0.15
    - 0.1
    - 0.3
    - 0.7
    - 0.28
    - 0.02
```

The CV factor mentioned in {numref}`eee-table4-20` corresponds to the Capacitance \* Voltage Rated value of the component. The level is given in {numref}`eee-table4-23` This table differs from the one presented in FIDES 2009 (and presented for information in Annex B: Capacitors) in order to take into account the fact that the actual discrimination between high and medium levels attributed to the technological limits. This table is included in the FIDES 2021 version of the handbook.

```{admonition} Rule
:class: rule

This table is the one that needs to be applied for Space applications.
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_23')"
    placeholder="Search table...">

```{list-table} Definition of CV product for ceramic capacitors.
:name: eee-table4-23

* - <table class="myTable" id="eee_table4_23">
        <thead>
            <th><strong>CV product</strong></th>
            <th><strong>Type I</strong></th>
            <th><strong>Type II</strong></th>
        </thead>
        <tr>
            <td>Low CV product</td>
            <td>Less than 5.0x10<sup>-8</sup>V.F</td>
            <td>Less than 5.0x10<sup>-6</sup>V.F</td>
        </tr>
        <tr>
            <td>Medium CV product</td>
            <td>
                <p>Between 5.0x10<sup>-8</sup>V.F and 1.0x10<sup>-6</sup>V.F</p>
                <p>or Higher than 1.0x10<sup>-6</sup>V.F and not in technological limit</p>
            </td>
            <td>
                <p>Between 5.0x10<sup>-6</sup>V.F and 1.0x10<sup>-4</sup>V.F</p>
                <p>or Higher than 1.0x10<sup>-4</sup>V.F and not in technological limit</p>
            </td>
        </tr>
        <tr>
            <td>High CV product</td>
            <td>Higher than 1.0x10<sup>-6</sup>V.F and in technological limit</td>
            <td>Higher than 1.0x10<sup>-4</sup>V.F and in technological limit</td>
        </tr>
    </table>
```

**Induced factor $\Pi_{induced}$:**

The $\Pi_{induced}$ factor allows taking into account the influence of the mission profile as described in paragraph {numref}`eee_4_3_1`. Its formula is:


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_36
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
````

- $\Pi_{placement\_ i}$

The Pi Placement depends on the function, there are 6 choices to choose as recalled here from {numref}`eee-table4-3`. Recommendation for the definition of parameter $\Pi_{placement\_ i}$:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-24')" placeholder="Search table...">

```{list-table} Recommendation for the definition of parameter $\Pi_{placement\_ i}$
:name: eee-table4-24
:header-rows: 1
:widths: 70 30

*   - Description of the placement influence
    - $\Pi_{placement\_ i}$
*   - Digital non-interface function
    - 1.0
*   - Digital interface function
    - 1.6
*   - Analog low-level non-interface function (<1A)
    - 1.3
*   - Analog low-level interface function (<1A)
    - 2.0
*   - Analog power non-interface function (≥1A)
    - 1.6
*   - Analog power interface function (≥1A)
    - 2.5
```

- $\Pi_{application}$

$\Pi_{application}$ represents the influence of the type of application and the environment of the product containing the part. This factor varies depending on the phase of the profile.

It is evaluated through the questions presented in the following table and addressed in {numref}`eee_4_3_1_19`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_25')"
    placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{application\_ i}$ for the launch, time to reach orbit and in-orbit
:name: eee-table4-25

* - <table class="myTable" id="eee_table4_25">
        <thead>
            <th>
                Criterion
            </th>
            <th>
                Description
            </th>
            <th>
                Levels
            </th>
            <th>
                Examples and comments</th>
            <th>
                Weight - POS</th>
        </thead>
        <tr>
            <td>
                User type in the phase considered
            </td>
            <td>
                Represents the capability to respect procedures, facing operational constraints.
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Industry</strong></p>
                <p>1: General public</p>
                <p>2: Military</p>
                <p>The most severe level must be adopted for military applications</p>
            </td>
            <td>
                <p>20</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>User qualification level in the phase considered</p>
            </td>
            <td>
                <p>Represents the level of control of the user or the worker regarding an operational context</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Highly qualified</strong></p>
                <p>1: Qualified</p>
                <p>2: Slightly qualified or with little experience</p>
                <p>In some phases, the user to be considered is the person who does the maintenance or servicing</p>
            </td>
            <td>
                <p>10</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>System mobility</p>
            </td>
            <td>
                <p>Represents contingencies related to possibilities of the system being moved</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Few contingencies (fixed or stable environment)</strong></p>
                <p>1: Moderate contingencies</p>
                <p>2: Severe contingencies, large variability (automobile)</p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product manipulation</p>
            </td>
            <td>
                <p>Represents the possibility of false manipulations, shocks, drops, etc .</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Not manipulated</strong></p>
                <p>1: Manipulation without displacement or disassembly</p>
                <p>2: Manipulation with displacement or disassembly</p>
                <p>The severe level should be adopted if maintenance on the product is possible in the phase
                    considered</p>
            </td>
            <td>
                <p>15</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Type of electrical network for the system</p>
            </td>
            <td>
                <p>Represents the level of electrical disturbance expected on power supplies, signals and electrical
                    lines: power on, switching, power supply, connection/disconnection</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Undisturbed network (dedicated regulated power supply)</strong></p>
                <p>1: Slightly disturbed network</p>
                <p>2: Network subject to disturbances (on board network)</p>
                <p>The network type is a system data but that can be broken down and related to specific products
                </p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to human activity</p>
            </td>
            <td>
                <p>Represents exposure to contingencies related to human activity: shock, change in final use, etc.
                </p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Uninhabitable zone</strong></p>
                <p>1: Possible activity in the product zone</p>
                <p>2: Normal activity in the product zone</p>
                <p>The product can be exposed to human activity even if it is not handled itself during normal use
                </p>
            </td>
            <td>
                <p>8</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to machine disturbances</p>
            </td>
            <td>
                <p>Represents contingencies related to operation of machines, engines, actuators: shock,
                    overheating, electrical disturbances, pollutants, etc.</p>
            </td>
            <td>
                <p>0:Non aggressive</p>
                <p><strong>1: Moderate</strong></p>
                <p>2: Severe</p>
            </td>
            <td>
                <p>0: Null (telephone)</p>
                <p><strong>1: Indirect exposure (product in compartment)</strong></p>
                <p>2: Strong or direct exposure (product in engine area)</p>
            </td>
            <td>
                <p>3</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to the weather</p>
            </td>
            <td>
                <p>Represents exposure to rain, hail, frost, sandstorm, lightning, dust</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Null (home)</strong></p>
                <p>1: Indirect exposure (compartment, station hall)</p>
                <p>2: Outdoors (automobile engine)</p>
            </td>
            <td>
                <p>2</p>
            </td>
        </tr>
    </table>
```

A mark is given for each level: 1 for level 0, 3.2 for level 1 and 10 for level 2. This mark is multiplied by the weight ($\text{P}_{\text{os}}$) and the sum of all the products is divided by 66. For the present application here, we consider $\Pi_{application}$ = 1.1, the value determined in the frame of an Airbus Defence & Space observation project, for all in flight phases.

```{admonition} Note
:class: note

In bold in the table are the levels considered for the space environment (orbit raising and orbit keeping). They represent the typical environment met in space for satellites, hence the figure can be used for all in flight phases for all projects provided they don't present a specific application; in that case, it has to be re-evaluated.
```

- $\Pi_{ruggedissing}$

The ruggedising factor is determined through a 16 questions audit ensuring the evaluation of the procedures established to guarantee the safety and maintenance of the product and that the procedures are indeed applied. See paragraph {numref}`eee_4_3_1_17`.

- $C_{Sensitivity}$

The induced factor $C_{Sensitivity}$ , presented in paragraph {numref}`eee_4_3_1_21` is provided in the following table:

```{list-table} Coefficient of sensitivity for capacitors.
:name: eee-table4-26
:header-rows: 1
:widths: 70 30

*   - Technologies
    - $C_{Sensitivity}$
*   - Ceramic capacitors
    - 6.05
```

```{admonition} Note
:class: note

For the 2021 issue of FIDES, the table has been updated, splitting the sensitivity between 5 categories instead of just one (Type I, Type II X5R, Type II X7R, Type II X5R polymer terminations, Type II X7R polymer terminations)
```

> **c) Component manufacturing factor $\Pi_{\text{PM}}$**

The Part\_Manufacturing factor presented in paragraph {numref}`eee_4_3_3` represents the quality of the component. This factor transcribes the confidence that can be attributed to the way the part has been manufactured, through factors quantifying the manufacturing process of the part, the tests ran and the confidence in the manufacturer.

Its high level formula is

${\pi_{\text{PM}} = e}^{1.39*\left( 1 - Part_{\text{Grade}} \right) - 0.69}$

With, for capacitors, $Part\_ Grade = \ \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \times \varepsilon}{24}$

These parameters are determined through tables available in FIDES.

-   $\text{QA}_{\text{manufacturer}}$ is presented in paragraph {numref}`eee_4_3_3_2`

-   $\text{QA}_{\text{component}}$ is presented in paragraph {numref}`eee_4_3_3_3` and defined in {numref}`eee-table4-26`

-   $\text{RA}_{\text{component}}$ is presented in {numref}`eee_4_3_3_4`

-   $\epsilon$  is presented in paragraph {numref}`eee_4_3_3_7`

Component manufacturing factor $\Pi_{\text{PM}}$ according to paragraph {numref}`eee_4_3_3` with component quality assurance levels $\text{QA}_{\text{component}}$ defined in the following tables:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-27')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\text{QA}_{\text{component}}$ for ceramic capacitors.
:name: eee-table4-27
:header-rows: 1
:widths: 50 30 20

*   - Ceramic capacitors: Component quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{component}}$
*   - Qualification according to one of the following standards: MIL-PRF-xxxx level T, MIL-PRF-xxxx level S, MIL-PRF-xxxx level R, ESCC 300x, NASDA-QTS-xxxx class I (JAXA-QTS-2040E)
    - Higher
    - 3
*   - Qualification according to one of the following standards: AEC Q200, MIL-PRF-xxx level P, NASDA-QTS-xxxx class II with identification of manufacturing sites for these standards, qualification according to approved CECC standards.
    - Equivalent
    - 2
*   - Qualification according to one of the following MIL-PRF-xxxx level M, or qualification program internal to the manufacturer and unidentified manufacturing sites
    - Lower
    - 1
*   - No information
    - Much lower
    - 0
```

> **d) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2`.


(eee_4_3_4_1_2)=
### Tantalum Capacitors (03 & 04 families)

The following table lists the 6 categories that cover the Tantalum Capacitor subfamily

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_28')"
    placeholder="Search table...">

```{list-table} Detail for tantalum capacitors
:name: eee-table4-28

* - <table class="myTable" id="eee_table4_28">
        <thead>
            <th>Wet tantalum capacitor silver case sealed by elastomer</th>
            <th>ECTC_01</th>
        </thead>
        <tr>
            <td>Wet tantalum capacitor silver case sealed by glass beads</td>
            <td>ECTC_02</td>
        </tr>
        <tr>
            <td>Wet tantalum capacitor beads tantalum case sealed by glass beads</td>
            <td>ECTC_03</td>
        </tr>
        <tr>
            <td>Dry tantalum capacitor drop packaging</td>
            <td>ECTC_04</td>
        </tr>
        <tr>
            <td>Dry tantalum capacitor SMD packaging</td>
            <td>ECTC_05</td>
        </tr>
        <tr>
            <td>Dry tantalum axial metal packaging</td>
            <td>ECTC_06</td>
        </tr>
    </table>
```


**General model for the capacitors family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_37
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{Film}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}}
```
````

> **a) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2`.

> **b) Calculation $\lambda_{\text{Physical}}$**

````{admonition} Equation
:class: equation
``
``  
```{math}
\lambda_{\text{Physical}} = \lambda_{0_{\text{capacitor}}} \cdot \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \left( \Pi_{\text{Thermal}} + \Pi_{\text{TCy}} + \Pi_{\text{Mechanical}} \right)_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
```
Refer to {eq}`Equation_1_32`.
````


**Physical stresses for tantalum capacitors:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_38
\Pi_{\text{Thermal}} = \gamma_{TH\_ EL} \cdot \left( \frac{1}{S_{\text{reference}}} \cdot \frac{V_{\text{applied}}}{V_{\text{rated}}} \right)^{3} \cdot exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```  
```{math}
:label: Equation_1_39
\Pi_{\text{Tcy}} = \gamma_{\text{TCy}} \cdot \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{min(\theta_{\text{cy}},2)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\Delta T_{\text{cycling}}}{20} \right)^{1.9} \cdot exp \left \lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right  \rbrack
```  
```{math}
:label: Equation_1_40
\Pi_{\text{Mechanical}} = \gamma_{\text{Mech}} \cdot \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}
```
With $\lambda_{0_{\text{capacitor}}}$, $E_{a}$, $S_{\text{reference}}$, $\gamma_{\text{TCy}}$, $\gamma_{\text{Mech}}$, $\gamma_{\text{TH}_{\text{EL}}}$ given in {numref}`eee-table4-29`.
````

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_29')"
    placeholder="Search table...">

```{list-table} Groups of capacitors
:name: eee-table4-29

* - <table class="myTable" id="eee_table4_29">
        <thead>
            <tr class="header">
                <th><strong>Description </strong></th>
                <th><strong>Ref</strong></th>
                <th><em><strong>λ<sub>0_capacitor</sub></strong></em></th>
                <th><em><strong>E<sub>a</sub> (eV)</strong></em></th>
                <th><em><strong>S<sub>reference</sub></strong></em></th>
                <th><em><strong>\(\gamma\)<sub>TH_El</sub></strong></em></th>
                <th><em><strong>\(\gamma\)<sub>TCy</sub></strong></em></th>
                <th><em><strong>\(\gamma\)<sub>Mech</sub></strong></em></th>
            </tr>
        </thead>
        <tr>
            <td colspan="8" class="db-header">Wet tantalum capacitor (ETCT_07)</td>
        </tr>
        <tr>
            <td>Wet tantalum capacitor silver case sealed by elastomer</td>
            <td>ECTC_01</td>
            <td>0.77</td>
            <td>0.15</td>
            <td>0.6</td>
            <td>0.87</td>
            <td>0.01</td>
            <td>0.12</td>
        </tr>
        <tr>
            <td>Wet tantalum capacitor silver case sealed by glass beads</td>
            <td>ECTC_02</td>
            <td>0.33</td>
            <td>0.15</td>
            <td>0.6</td>
            <td>0.81</td>
            <td>0.01</td>
            <td>0.18</td>
        </tr>
        <tr>
            <td>Wet tantalum capacitor beads tantalum case sealed by glass beads</td>
            <td>ECTC_03</td>
            <td>0.05</td>
            <td>0.15</td>
            <td>0.6</td>
            <td>0.88</td>
            <td>0.04</td>
            <td>0.08</td>
        </tr>
        <tr>
            <td colspan="8" class="db-header">Solid tantalum capacitor (ETCT_08)</td>
        </tr>
        <tr>
            <td>Dry tantalum capacitor drop packaging</td>
            <td>ECTC_04</td>
            <td>1.09</td>
            <td>0.15</td>
            <td>0.4</td>
            <td>0.86</td>
            <td>0.12</td>
            <td>0.02</td>
        </tr>
        <tr>
            <td>Dry tantalum capacitor SMD packaging</td>
            <td>ECTC_05</td>
            <td>0.54</td>
            <td>0.15</td>
            <td>0.4</td>
            <td>0.84</td>
            <td>0.14</td>
            <td>0.02</td>
        </tr>
        <tr>
            <td>Dry tantalum axial metal packaging</td>
            <td>ECTC_06</td>
            <td>0.25</td>
            <td>0.15</td>
            <td>0.4</td>
            <td>0.94</td>
            <td>0.04</td>
            <td>0.02</td>
        </tr>
    </table>
```


**Induced factor $\Pi_{induced}$:**

The $\Pi_{induced}$ factor allows taking into account the influence of the mission profile as described in paragraph {numref}`eee_4_3_1`. Its formula is:


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_41
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
````

See paragraph {numref}`eee_4_3_4_1_1` for details.

The induced factor $C_{\text{sensitivity}}$ is provided in the following table:

```{list-table} Coefficient of sensitivity for capacitors.
:name: eee-table4-30
:header-rows: 1
:widths: 70 30

*   - Technologies
    - $C_{Sensitivity}$
*   - Tantalum capacitors
    - 6.95
```

```{admonition} Note
:class: note

For the 2021 issue of FIDES, the value has been updated (to 7.43).
```

> **c) Component manufacturing factor $\Pi_{\text{PM}}$**

The Part\_Manufacturing factor presented in paragraph {numref}`eee_4_3_3` represents the quality of the component. This factor transcribes the confidence that can be attributed to the way the part has been manufactured, through factors quantifying the manufacturing process of the part, the tests ran and the confidence in the manufacturer.

Its high level formula is

${\pi_{\text{PM}} = e}^{1.39*\left( 1 - Part_{\text{Grade}} \right) - 0.69}$

With, for capacitors, $Part\_ Grade = \ \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \times \varepsilon}{24}$

These parameters are determined through tables available in FIDES.

-   $\text{QA}_{\text{manufacturer}}$ is presented in paragraph {numref}`eee_4_3_3_2`

-   $\text{QA}_{\text{component}}$ is presented in paragraph {numref}`eee_4_3_3_3` and defined in {numref}`eee-table4-26`

-   $\text{RA}_{\text{component}}$ is presented in {numref}`eee_4_3_3_4`

-   $\epsilon$  is presented in paragraph {numref}`eee_4_3_3_7`

Component manufacturing factor $\Pi_{\text{PM}}$ according to paragraph {numref}`eee_4_3_3` with component quality assurance levels $\text{QA}_{\text{component}}$ defined in the following tables:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-31')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\text{QA}_{\text{component}}$ for tantalum capacitors.
:name: eee-table4-31
:header-rows: 1
:widths: 50 30 20

*   - tantalum capacitors: Component quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{component}}$
*   - Qualification according to one of the following standards: AEC Q200, MIL-PRF-xxxx level T, MIL-PRF-xxxx level B, ESCC 300x, NASDA-QTS-xxxx class I (JAXA-QTS-2040E)
    - Higher
    - 3
*   - Qualification according to one of the following standards: MIL-PRF-xxxx level C, NASDA-QTS-xxxx class II with identification of manufacturing sites for these standards. Qualification according to approved CECC standards.
    - Equivalent
    - 2
*   - Qualification according to one of the following: MIL-PRF-xxxx level D, or qualification program internal to the manufacturer and unidentified manufacturing sites
    - Lower
    - 1
*   - No information
    - Much lower
    - 0
```

> **d) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2`.

(eee_4_3_4_1_3)=
### Plastic Metallized Capacitors (05 family)

At the time of the FIDES 2009 release, no model existed for plastic films capacitors, but some companies subscribed for the development of such a model which is now included in the FIDES 2021 update.

The following table lists the 5 categories that cover the Plastic Metallized Capacitor subfamily.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_32')"
    placeholder="Search table...">

```{list-table} Detail for Plastic Metallized capacitors
:name: eee-table4-32

* - <table class="myTable" id="">
        <tr>
            <td>Polypropylene film capacitor (PP)</td>
            <td>ECFC_01</td>
        </tr>
        <tr>
            <td>Polyethylene terephtalate film capacitor (PET)</td>
            <td>ECFC_02</td>
        </tr>
        <tr>
            <td>Polyethylene naphtalate film capacitor (PEN)</td>
            <td>ECFC_03</td>
        </tr>
        <tr>
            <td>Polyphenylene sulfide film capacitor (PPS)</td>
            <td>ECFC_04</td>
        </tr>
        <tr>
            <td>Teflon film capacitor (PTFE)</td>
            <td>ECFC_05</td>
        </tr>
    </table>
```


**General model for the capacitors family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_42
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{Film}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}}
```
````

> **a) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2`.

> **b) Calculation $\lambda_{\text{Physical}}$**

````{admonition} Equation
:class: equation
``
``  
```{math}
\lambda_{\text{Physical}} = \lambda_{0_{\text{capacitor}}} \cdot \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \left( \Pi_{\text{Thermal}} + \Pi_{\text{TCy}} + \Pi_{\text{Mechanical}} + \Pi_{\text{RH}} \right)_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
```
````


**Physical stresses for plastic film capacitors:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_44
\Pi_{\text{Thermal}} = 0.18 \cdot \left( \frac{1}{S_{\text{reference}}} \cdot \frac{V_{\text{applied}}}{V_{\text{rated}}} \right)^{6} \cdot exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```  
```{math}
:label: Equation_1_45
\Pi_{\text{Tcy}} = 0.14 \cdot \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{min(\theta_{\text{cy}},2)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{1.9} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```  
```{math}
:label: Equation_1_46
\Pi_{\text{Mechanical}} = 0.02 \cdot \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}
``` 
```{math}
:label: Equation_1_47
\Pi_{\text{RH}} = {0.66 \cdot \left( \frac{\text{RH}_{board\_ ref}}{70} \right)}^{4.4} \cdot \ exp\left\lbrack 11604 \cdot 0.9 \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
With $\lambda_{0_{\text{capacitor}}}$, $E_{a}$, $S_{\text{reference}}$ given in the following table. All other parameters are issued from the mission profile.
````

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_33')"
    placeholder="Search table...">

```{list-table} Detail for Plastic Metallized capacitors
:name: eee-table4-33

* - <table class="myTable" id="eee_table4_33">
        <thead>
            <th><strong>Type of plastic film capacitors</strong></th>
            <th><strong>λ<sub>0_capacitor</sub></strong></th>
            <th><strong>E<sub>a</sub></strong></th>
            <th><strong>S<sub>reference</sub></strong></th>
        </thead>
        <tr>
            <td>Polypropylene film capacitor (PP)</td>
            <td>0.02</td>
            <td>0.65</td>
            <td>0.3</td>
        </tr>
        <tr>
            <td>Polyethylene terephtalate film capacitor (PET)</td>
            <td>0.06</td>
            <td>0.48</td>
            <td>0.3</td>
        </tr>
        <tr>
            <td>Polyethylene naphtalate film capacitor (PEN)</td>
            <td>0.03</td>
            <td>0.55</td>
            <td>0.3</td>
        </tr>
        <tr>
            <td>Polyphenylene sulfide film capacitor (PPS)</td>
            <td>0.02</td>
            <td>0.55</td>
            <td>0.3</td>
        </tr>
        <tr>
            <td>Teflon film capacitor (PTFE)</td>
            <td>0.03</td>
            <td>0.55</td>
            <td>0.3</td>
        </tr>
    </table>
```

**Calculation of $\Pi_{\text{Film}}$ factor:**

For plastic film capacitors: $\Pi_{\text{Film}}$ factor is calculated from a questionnaire about the environmental conditions which have led to the choice of the plastic film capacitor.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_48
\Pi_{\text{Film}} = e^{1.39 \cdot FILM\_ Grade}
```  
```{math}
:label: Equation_1_49
FILM\_ Grade = \frac{\sum_{}^{}\text{Values in the following table}}{100}
``` 
````

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_34')"
    placeholder="Search table...">

```{list-table} Factors influencing the $\Pi_{\text{Film}}$ factor.
:name: eee-table4-34

* - <table class="myTable" id="eee_table4_34">
        <thead>
            <th><strong>N°</strong></th>
            <th><strong>Factors influencing FILM_Grade</strong></th>
            <th><strong>Value</strong></th>
        </thead>
        <tr>
            <td rowspan="2">1</td>
            <td>Plastic film capacitor used in AC alternative voltage</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Plastic film capacitor used in DC direct voltage</td>
            <td>0</td>
        </tr>
        <tr>
            <td rowspan="5">2</td>
            <td>Plastic film capacitor used in environment with humidity rate higher than 90%HR without being
                specifically chosen for this environment</td>
            <td>30</td>
        </tr>
        <tr>
            <td>Plastic film capacitor used in environment with humidity rate higher than 90%HR and chosen for this
                environment</td>
            <td>15</td>
        </tr>
        <tr>
            <td>Plastic film capacitor used in environment with humidity rate comprise between 70%HR and 90%HR without
                being specifically chosen for this environment</td>
            <td>15</td>
        </tr>
        <tr>
            <td>Plastic film capacitor used in environment with humidity rate comprise between 70%HR and 90%HR and
                chosen for this environment</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Plastic film capacitor used in environment with humidity rate lower than 70%HR</td>
            <td>0</td>
        </tr>
        <tr>
            <td rowspan="3">3</td>
            <td>Plastic film capacitor not specifically developed for current application, not validated by the
                manufacturer and not validated by derogation.</td>
            <td>20</td>
        </tr>
        <tr>
            <td>Plastic film capacitor not specifically developed for current application but validated by the
                manufacturer</td>
            <td>10</td>
        </tr>
        <tr>
            <td>Plastic film capacitor specifically developed for current application</td>
            <td>0</td>
        </tr>
    </table>
```

**Induced factor $\Pi_{induced}$:**

The $\Pi_{induced}$ factor allows taking into account the influence of the mission profile as described in paragraph {numref}`eee_4_3_1`. Its formula is:


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_50
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
````

See paragraph {numref}`eee_4_3_4_1_1` for details.

The induced factor $C_{\text{sensitivity}}$ is provided in the following table:

```{list-table} Coefficient of sensitivity for capacitors.
:name: eee-table4-35
:header-rows: 1
:widths: 70 30

*   - Technologies
    - $C_{Sensitivity}$
*   - Plastic film capacitors
    - 6.05
```

> **c) Component manufacturing factor $\Pi_{\text{PM}}$**

The Part\_Manufacturing factor presented in paragraph {numref}`eee_4_3_3` represents the quality of the component. This factor transcribes the confidence that can be attributed to the way the part has been manufactured, through factors quantifying the manufacturing process of the part, the tests ran and the confidence in the manufacturer.

Its high level formula is

${\pi_{\text{PM}} = e}^{1.39*\left( 1 - Part_{\text{Grade}} \right) - 0.69}$

With, for capacitors, $Part\_ Grade = \ \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \times \varepsilon}{24}$

These parameters are determined through tables available in FIDES.

-   $\text{QA}_{\text{manufacturer}}$ is presented in paragraph {numref}`eee_4_3_3_2`

-   $\text{QA}_{\text{component}}$ is presented in paragraph {numref}`eee_4_3_3_3` and defined in {numref}`eee-table4-26`

-   $\text{RA}_{\text{component}}$ is presented in {numref}`eee_4_3_3_4`

-   $\epsilon$  is presented in paragraph {numref}`eee_4_3_3_7`

Component manufacturing factor $\Pi_{\text{PM}}$ according to paragraph {numref}`eee_4_3_3` with component quality assurance levels $\text{QA}_{\text{component}}$ defined in the following tables:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-36')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\text{QA}_{\text{component}}$ for plastic film capacitors.
:name: eee-table4-36
:header-rows: 1
:widths: 50 30 20

*   - Plastic film capacitors: Component quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{component}}$
*   - Qualification according to one of the following standards: AEC Q200, MIL-PRF-xxxx level T, MIL-PRF-xxxx level S, MIL-PRF-xxxx level R, ESCC 400x, NASDA-QTS-xxxx class I (JAXA-QTS-2050D)
    - Higher
    - 3
*   - Qualification according to one of the following standards: MIL-PRF-xxx level P, NASDA-QTS-xxxx class II with identification of manufacturing sites for these standards, qualification according to approved CECC standards.
    - Equivalent
    - 2
*   - Qualification according to MIL-PRF-xxxx level M, or qualification program internal to the manufacturer and unidentified manufacturing sites
    - Lower
    - 1
*   - No information
    - Much lower
    - 0
```

> **d) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2`.

**Summary for the Capacitors family 01**

<table class="myTable">
    <thead>
        <th><strong>Section</strong></th>
        <th><strong>Component types</strong></th>
        <th><strong>Modifications and adaptations for space applications</strong></th>
    </thead>
    <tr>
        <td>01</td>
        <td>Capacitors</td>
        <td>
            <p>Addition of the model for plastic film capacitors - FIDES 2021</p>
            <p>Modification of the CV product for ceramic capacitors - FIDES 2021</p>
            <p>Value of Π<sub>Film</sub> equal to 1 for all capacitors - FIDES 2021</p>
        </td>
    </tr>
</table>

(eee_4_3_4_2)=
## Connectors (family 02)

Connectors are classified as family 02 in EPPL {cite:t}`eee-EPPL007-37`.

All connectors used for Space applications can be modelled through FIDES.

The following table presents the different subfamilies and the corresponding models with the FIDES method (in the 2009 version of FIDES but also in the 2021 version for information).


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_37')"
    placeholder="Search table...">

```{list-table} Groups of connectors.
:name: eee-table4-37

* - <table class="myTable" id="eee_table4_37">
        <thead>
            <tr class="header">
                <th rowspan="2"><strong>Groups of connectors</strong></th>
                <th colspan="2"><strong>Models in FIDES 2009</strong></th>
                <th rowspan="2"><strong>Proposed models in FIDES</strong></th>
                <th rowspan="2"><strong>Remarks</strong></th>
            </tr>
            <tr>
                <th>2009</th>
                <th>2021</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>01 Circular</td>
                <td>p158</td>
                <td>p176</td>
                <td>“Circular and rectangular connectors”</td>
                <td>ECCO_01</td>
            </tr>
            <tr>
                <td>02 Rectangular</td>
                <td>p158</td>
                <td>p176</td>
                <td>“Circular and rectangular connectors”</td>
                <td>ECCO_01</td>
            </tr>
            <tr>
                <td>03 PCB</td>
                <td>p158</td>
                <td>p176</td>
                <td>“Connectors for printed circuits (and similar)”</td>
                <td>ECCO_03</td>
            </tr>
            <tr>
                <td>05 RF coaxial</td>
                <td>p158</td>
                <td>p176</td>
                <td>“Coaxial connector”</td>
                <td>ECCO_02</td>
            </tr>
            <tr>
                <td>06 Glass fibre</td>
                <td>No</td>
                <td>No</td>
                <td>NA - No longer used in space applications</td>
                <td>NA</td>
            </tr>
            <tr>
                <td>07 Microminiature</td>
                <td>No/Yes</td>
                <td>No/Yes</td>
                <td>“Circular and rectangular connectors”</td>
                <td>Not modelled directly in FIDES so the recommendation is to use the proposed model</td>
            </tr>
            <tr>
                <td>08 RF filter</td>
                <td>No</td>
                <td>No</td>
                <td>NA - No longer used in space applications</td>
                <td>NA</td>
            </tr>
            <tr>
                <td>09 Rack and panel</td>
                <td>No</td>
                <td>No</td>
                <td>NA - No longer used in space applications</td>
                <td>NA</td>
            </tr>
    </table>
```

is the generic formula used in FIDES for connectors:


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_51
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{LF}}
```

-   $\lambda_{\text{Physical}}$ the physical contribution for each component,

-   $\Pi_{\text{PM}}$ the quality and technical control over manufacturing of the item,

-   $\Pi_{\text{Process}}$ the quality and technical control over the development, manufacturing and use process for the product containing the item,

-   $\Pi_{\text{LF}}$ the factor representing the process to become lead-free if it has to be considered for Space applications, it is equal to 1 (see paragraph {numref}`eee_4_3`).
````

All this being based on a mission profile to be defined for the whole unit.

> **a) Mission profile**

In order to model the reliability for each component of a unit, it is necessary to define the mission profile corresponding to the unit under consideration. See paragraph {numref}`eee_4_3_1` for details.

> **b) Calculation of $\lambda_{\text{Physical}}$**


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_52
\lambda_{\text{Physical}} = \lambda_{O_{\text{connector}}} \cdot \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \left( \Pi_{\text{Thermal}} + \Pi_{\text{TCy}} + \Pi_{\text{Mechanical}} + \Pi_{\text{RH}} + \Pi_{\text{Chemical}} \right)_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
```
With:

- $\lambda_{0_{\text{connector}}}$ : Base failure rate for one group of connector
- $\Pi_{\text{Thermal}}$ : Thermal factor
- $\Pi_{\text{TCy}}$ : Cycling factor
- $\Pi_{\text{Mechanical}}$ : Mechanical factor = 0 for space industry
- $\Pi_{\text{RH}}$ : Humidity factor = 0 for space industry
- $\Pi_{\text{Chemical}}$ : Chemical
- $\Pi_{\text{induced}}$ : Induced factor
````

**Calculation of $\lambda_{0_{\text{connector}}}$:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_53
\lambda_{O\_ connector} = \lambda_{\text{Type}} \cdot \Pi_{\text{Transfer}} \cdot \Pi_{\text{Contact}} \cdot \Pi_{\text{Cycle}}
```
With:

-    \lambda_{\text{Type}} equals 0.05 for circular & rectangular connectors, 0.07 for coaxial and 0.1 for PCB connectors.     
-   \Pi_{\text{Transfer}} depends on the soldering method and is defined by {numref}`eee-table4-38`.
-   $\Pi_{\text{Contact}}$ depends on the number of contacts (N~contact~) of the connector:  $\pi_{\text{contact}} = \left( N_{\text{contact}} \right)^{0.5}$
-   $\Pi_{\text{Cycle}}$  depends on the annual number of cycles (one cycle = one connection + one disconnection): $\pi_{\text{cycles}}  = 0.2 \times \left( N_{annual\_ cycles} \right)^{0.25}$
````

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-38')" placeholder="Search table...">

```{list-table} Subtypes of connectors.
:name: eee-table4-38
:header-rows: 1
:widths: 60 20 20

*   - Transfer Type
    - $\Pi_{\text{Transfer}}$
    - 
*   - Insertion (press fit)
    - 1
    - ECCO_05
*   - Soldered (through)
    - 6
    - ECCO_06
*   - Soldered (SMD)
    - 10
    - ECCO_07
*   - Wrapping (braid)
    - 3
    - ECCO_08
*   - Wrapping (wire)
    - 2
    - ECCO_09
```

```{admonition} Note
:class: note

For space applications, where the number of cycles (mating/demating) per year is \< 1, $\Pi_{\text{Cycle}}$ = 0.2.
```

**Physical stresses for connectors:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_54
\Pi_{\text{Thermal}} = 0.58 \cdot exp\left\lbrack 11604 \cdot 0.1 \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_55
\Pi_{\text{Tcy}} = 0.04 \cdot \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{min(\theta_{\text{cy}},2)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{1.9} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack\
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_56
\Pi_{\text{Mechanical}} = 0.05 \cdot \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_57
\Pi_{\text{RH}} = 0.13 \cdot \left( \frac{\text{RH}_{board\_ ref}}{70} \right)^{4.4} \cdot \ exp\left\lbrack 11604 \cdot 0.8 \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_58
\Pi_{\text{Chemical}} = 0.2
```
````

**Induced factor $\Pi_{\text{induced}}$**

The $\Pi_{\text{induced}}$ factor allows taking into account the influence of the mission profile as described in paragraph {numref}`eee_4_3_1`. Its formula is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_59
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
````

> $\Pi_{placement}$

The value of Pi Placement for connectors is 1.

> $\Pi_{application}$

$\Pi_{application}$ represents the influence of the type of application and the environment of the product containing the part. This factor varies depending on the phase of the profile.

It is evaluated through the questions presented in the following table:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_39')"
    placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{application\_ i}$ for the launch, time to reach orbit and in-orbit
:name: eee-table4-39

* - <table class="myTable" id="eee_table4_39">
        <thead>
            <th>
                <p><strong>Criterion</strong></p>
            </th>
            <th>
                <p><strong>Description</strong></p>
            </th>
            <th>
                <p><strong>Levels</strong></p>
            </th>
            <th>
                <p><strong>Examples and comments</strong></p>
            </th>
            <th>
                <p><strong>Weight</strong></p>
                <p><strong>POS</strong></p>
            </th>
        </thead>
        <tr>
            <td>
                <p>User type in the phase considered</p>
            </td>
            <td>
                <p>Represents the capability to respect procedures, facing operational constraints.</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Industry</strong></p>
                <p>1: General public</p>
                <p>2: Military</p>
                <p>The most severe level must be adopted for military applications</p>
            </td>
            <td>
                <p>20</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>User qualification level in the phase considered</p>
            </td>
            <td>
                <p>Represents the level of control of the user or the worker regarding an operational context</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Highly qualified</strong></p>
                <p>1: Qualified</p>
                <p>2: Slightly qualified or with little experience</p>
                <p>In some phases, the user to be considered is the person who does the maintenance or servicing</p>
            </td>
            <td>
                <p>10</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>System mobility</p>
            </td>
            <td>
                <p>Represents contingencies related to possibilities of the system being moved</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Few contingencies (fixed or stable environment)</strong></p>
                <p>1: Moderate contingencies</p>
                <p>2: Severe contingencies, large variability (automobile)</p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product manipulation</p>
            </td>
            <td>
                <p>Represents the possibility of false manipulations, shocks, drops, etc .</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Not manipulated</strong></p>
                <p>1: Manipulation without displacement or disassembly</p>
                <p>2: Manipulation with displacement or disassembly</p>
                <p>The severe level should be adopted if maintenance on the product is possible in the phase
                    considered</p>
            </td>
            <td>
                <p>15</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Type of electrical network for the system</p>
            </td>
            <td>
                <p>Represents the level of electrical disturbance expected on power supplies, signals and electrical
                    lines: power on, switching, power supply, connection/disconnection</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Undisturbed network (dedicated regulated power supply)</strong></p>
                <p>1: Slightly disturbed network</p>
                <p>2: Network subject to disturbances (on board network)</p>
                <p>The network type is a system data but that can be broken down and related to specific products
                </p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to human activity</p>
            </td>
            <td>
                <p>Represents exposure to contingencies related to human activity: shock, change in final use, etc.
                </p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Uninhabitable zone</strong></p>
                <p>1: Possible activity in the product zone</p>
                <p>2: Normal activity in the product zone</p>
                <p>The product can be exposed to human activity even if it is not handled itself during normal use
                </p>
            </td>
            <td>
                <p>8</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to machine disturbances</p>
            </td>
            <td>
                <p>Represents contingencies related to operation of machines, engines, actuators: shock,
                    overheating, electrical disturbances, pollutants, etc.</p>
            </td>
            <td>
                <p>0:Non aggressive</p>
                <p><strong>1: Moderate</strong></p>
                <p>2: Severe</p>
            </td>
            <td>
                <p>0: Null (telephone)</p>
                <p><strong>1: Indirect exposure (product in compartment)</strong></p>
                <p>2: Strong or direct exposure (product in engine area)</p>
            </td>
            <td>
                <p>3</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to the weather</p>
            </td>
            <td>
                <p>Represents exposure to rain, hail, frost, sandstorm, lightning, dust</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Null (home)</strong></p>
                <p>1: Indirect exposure (compartment, station hall)</p>
                <p>2: Outdoors (automobile engine)</p>
            </td>
            <td>
                <p>2</p>
            </td>
        </tr>
    </table>
```

A mark is given for each level: 1 for level 0, 3.2 for level 1 and 10 for level 2. This mark is multiplied by the weight ($P_{os}$) and the sum of all the products is divided by 66. For the present application here, we consider $\Pi_{application}$ = 1.1, the value determined in the frame of an Airbus Defence & Space observation project, for all in flight phases.

```{admonition} Note
:class: note

In bold in the table are the levels considered for the space environment (orbit raising and orbit keeping). They represent the typical environment met in space for satellites, hence the figure can be used for all in flight phases for all projects provided they don't present a specific application; in that case, it has to be re-evaluated.
```

> $\Pi_{\text{ruggedising}}$

The ruggedising factor is determined through a 16 questions audit ensuring the evaluation of the procedures established to guarantee the safety and maintenance of the product and that the procedures are indeed applied. See paragraph {numref}`eee_4_3_1_17`.

> $C_{\text{sensitivity}}$

The induced factor $C_{\text{sensitivity}}$ presented in paragraph {numref}`eee_4_3_1_21` is provided in the following table:

```{list-table} Induced factor coefficient of sensitivity for connectors.
:name: eee-table4-40
:header-rows: 1
:widths: 70 30

*   - Technologies
    - $C_{\text{sensitivity}}$
*   - Connectors
    - 4.40
```

```{admonition} Note
:class: note

For the 2021 issue of FIDES, the value has been updated (to 3.13).
```

> **c) Component manufacturing factor $\Pi_{\text{PM}}$**

The Part\_Manufacturing factor presented in paragraph {numref}`eee_4_3_3` represents the quality of the component. This factor transcribes the confidence that can be attributed to the way the part has been manufactured, through factors quantifying the manufacturing process of the part, the tests ran and the confidence in the manufacturer.

Its high level formula is

${\pi_{\text{PM}} = e}^{1.39*\left( 1 - Part_{\text{Grade}} \right) - 0.69}$

With, for capacitors, $Part\_ Grade = \ \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \times \varepsilon}{24}$

These parameters are determined through tables available in FIDES.

-  $\text{QA}_{\text{manufacturer}}$ is presented in paragraph {numref}`eee_4_3_3_2`

-   $\text{QA}_{\text{component}}$ is presented in paragraph {numref}`eee_4_3_3_3` and defined in {numref}`eee-table4-41`

-   $\text{RA}_{\text{component}}$ is presented in {numref}`eee_4_3_3_4`

-   $\epsilon$  is presented in paragraph {numref}`eee_4_3_3_7`

Component manufacturing factor $\pi_{\text{PM}}$ according to paragraph {numref}`eee_4_3_3` with component quality assurance levels $\text{QA}_{\text{component}}$ defined in the following tables:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-41')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\text{QA}_{\text{component}}$ for connectors.
:name: eee-table4-41
:header-rows: 1
:widths: 60 25 15

*   - Connectors: Component quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{component}}$
*   - Qualification according to one of the following standards: ESCC 340x level B, NASDA-QTS-xxxx class 1, MIL-DTL-xxxxx, JAXA-QTS-2060E, GSFC
    - Higher
    - 3
*   - Qualification according to one of the following standards: Telcordia GR1217-CORE, ARINC 600 and 80x (not space adapted), AECMA, SAE (39029)
    - Equivalent
    - 2
*   - Qualification according to one of the following standards: EIA, IEC, SAE, BS
    - Lower
    - 1
*   - No information
    - Much
    - 0
```

> **d) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2_3`.

```{admonition} Note
:class: note

In the 2021 issue of FIDES, a table has been added for gauges of circular sections.
```

**Summary for the Connectors family 02**

<table class="myTable">
    <thead>
        <th><strong>Section</strong></th>
        <th><strong>Component types</strong></th>
        <th><strong>Modifications and adaptations for space applications</strong></th>
    </thead>
    <tr>
        <td>02</td>
        <td></td>
        <td>
            <p>Value of Π<sub>Cycle</sub> equal to 0.2</p>
            <p>Value of Π<sub>Chemical</sub> equal to 0.2</p>
        </td>
    </tr>
</table>

(eee_4_3_4_3)=
## Piezo electric devices (family 03)

Piezo electric devices are classified as family 03 in the EPPL {cite:t}`eee-EPPL007-37`. Crystal/Quartz resonators/oscillators can be modelled through FIDES.

The following table presents the different subfamilies and the corresponding models with the FIDES method.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_42')" placeholder="Search table...">

```{list-table} Groups of piezo electric devices.
:name: eee-table4-42

* - <table class="myTable" id="eee_table4_42">
        <thead>
            <tr>
                <th rowspan="2"><strong>Groups of capacitors</strong></th>
                <th colspan="2"><strong>Models in FIDES </strong></th>
                <th rowspan="2">Proposed models in FIDES</th>
                <th rowspan="2"><strong>Remark</strong></th>
            </tr>
             <tr>
                <th>2009</th>
                <th>2022</th>
            </tr>
        </thead>
        <tr>
            <td>
                <p>01 Crystal resonator</p>
            </td>
            <td>p144</td>
            <td>p162</td>
            <td>
                <p>“Quartz resonator (through HCxx type case)”</p>
                <p>“Quartz resonator (surface mounted)”</p>
                <p>“Quartz oscillator (through XO type case)”</p>
                <p>“Quartz oscillator (surface mounted XO, MCSO type case)”</p>
            </td>
            <td>
                <p>ECPZ_01</p>
                <p>ECPZ_02</p>
                <p>ECPZ_03</p>
                <p>ECPZ_04</p>
            </td>
        </tr>
    </table>
```

**General model for the piezo electric devices family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_60
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}}
```
-   $\lambda_{\text{Physical}}$ the physical contribution for each component,

-   $\Pi_{\text{PM}}$ the quality and technical control over manufacturing of the item,

-   $\Pi_{\text{Process}}$ the quality and technical control over the development, manufacturing and use process for the product containing the item,

-   $\Pi_{\text{LF}}$ the factor representing the process to become lead-free if it has to be considered for Space applications, it is equal to 1 (see paragraph {numref}`eee_4_3`).
````

```{admonition} Todo 
:class: todo

error with this equation, term missing Pi LF
```

All this being based on a mission profile to be defined for the whole unit.

> **a) Mission profile**

In order to model the reliability for each component of a unit, it is necessary to define the mission profile corresponding to the unit under consideration. See paragraph {numref}`eee_4_3_1` for details.

> **b) Calculation of $\lambda_{\text{Physical}}$**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_61
\lambda_{\text{Physical}} = \lambda_{O_{\text{piezoelectric}}} \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \left( \Pi_{Thermo\_ electrical} + \Pi_{\text{TCy}} + \Pi_{\text{Mechanical}} + \Pi_{\text{RH}} \right)_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
```
With:

- $\lambda_{0_{\text{piezoelectric}}}$ : Base failure rate for one group of piezoelectric
- $\Pi_{\text{Thermo-electric}}$ : Thermo-electric factor
- $\Pi_{\text{TCy}}$ : Cycling factor
- $\Pi_{\text{Mechanical}}$ : Mechanical factor = 0 for space industry
- $\Pi_{\text{RH}}$ : Humidity factor = 0 for space industry
- $\Pi_{\text{induced}}$ : Induced factor
````

$\lambda_{0_{\text{piezoelectric}}}$ corresponds to the basic failure rate defined as follow within the mentioned groups:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-43')" placeholder="Search table...">

```{list-table} Basic failure rates for piezo electric devices.
:name: eee-table4-43
:header-rows: 1
:widths: 60 25 15

*   - Component description
    - 
    - $\lambda_{0_{\text{piezoelectric}}}$
*   - Oscillator surface, XO, MCSO case type
    - ECPZ_04
    - 1.63
*   - Oscillator through, XO case type
    - ECPZ_03
    - 1.60
*   - Resonator through, HCxx case type
    - ECPZ_01
    - 0.82
*   - Resonator surface mount
    - ECPZ_02
    - 0.79
```

**Physical stresses for piezo electric devices:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_62
\Pi_{Thermo\_ electrical} = \gamma_{TH - EL} \cdot \Pi_{rating\_ TH\_ i} \cdot \Pi_{rating\_ EL\_ i}
```
````

${\gamma_{TH - EL}$ depends on the type of piezo electrical devices.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-44')" placeholder="Search table...">

```{list-table} ${\gamma_{TH - EL}$ for piezo electric devices.
:name: eee-table4-44
:header-rows: 1
:widths: 70 30

*   - Component description
    - ${\gamma_{TH - EL}$
*   - Oscillator surface, XO, MCSO case type
    - 0.31
*   - Oscillator through, XO case type
    - 0.32
*   - Resonator through, HCxx case type
    - 0.16
*   - Resonator surface mount
    - 0.16
```

$\Pi_{rating\_ TH\_ i}$ follows the rule:

-   $\Pi_{rating\_ TH\_ i}$ =1 if $T_{board\_ ref}$ + $\Delta T$ \< $T_{max\_ manufacturer}$- 40°C;

-   $\Pi_{rating\_ TH\_ i}$ =5 if $T_{board\_ ref}$ + $\Delta T$ ≥ $T_{max\_ manufacturer}$- 40°C;

$\Pi_{rating\_ EL\_ i}$ follows the rule:

-   $\Pi_{rating\_ EL\_ i}$ =1 for resonators;

-   $\Pi_{rating\_ EL\_ i}$ =1 for oscillators if $I_{output}$ \< 0.8·$I_{max\_ output}$;

-   $\Pi_{rating\_ EL\_ i}$ =5 for oscillators if $I_{output}$ ≥ 0.8·$I_{max\_ output}$.

All other parameters are issued from the mission profile.


All other parameters are issued from the mission profile.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_63
\Pi_{\text{Tcy}} = \gamma_{\text{TCy}} \cdot \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{min(\theta_{\text{cy}},2)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{1.9} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack\
```
````

$\gamma_{\text{TCy}}$ depends on the type of piezo electrical devices.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-45')" placeholder="Search table...">

```{list-table} $\gamma_{\text{TCy}}$ for piezo electric devices.
:name: eee-table4-45
:header-rows: 1
:widths: 70 30

*   - Component description
    - $\gamma_{\text{TCy}}$
*   - Oscillator surface, XO, MCSO case type
    - 0.53
*   - Oscillator through, XO case type
    - 0.42
*   - Resonator through, HCxx case type
    - 0.46
*   - Resonator surface mount
    - 0.59
```

All other parameters are issued from the mission profile.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_64
\Pi_{\text{Mechanical}} = \gamma_{\text{Mech}} \cdot \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}
```
````

$\gamma_{\text{Mech}}$ depends on the type of piezo electrical devices.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-46')" placeholder="Search table...">

```{list-table} $\gamma_{\text{Mech}}$ for piezo electric devices.
:name: eee-table4-46
:header-rows: 1
:widths: 70 30

*   - Component description
    - $\gamma_{\text{Mech}}$
*   - Oscillator surface, XO, MCSO case type
    - 0.07
*   - Oscillator through, XO case type
    - 0.14
*   - Resonator through, HCxx case type
    - 0.27
*   - Resonator surface mount
    - 0.15
```

All other parameters are issued from the mission profile.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_65
\Pi_{\text{RH}} = \gamma_{\text{RH}} \cdot \left( \frac{\text{RH}_{board\_ ref}}{70} \right)^{4.4} \cdot \ exp\left\lbrack 11604 \cdot 0.9 \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

$\gamma_{\text{RH}}$ depends on the type of piezo electrical devices.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-47')" placeholder="Search table...">

```{list-table} $\gamma_{\text{RH}}$ for piezo electric devices.
:name: eee-table4-47
:header-rows: 1
:widths: 70 30

*   - Component description
    - $\gamma_{\text{RH}}$
*   - Oscillator surface, XO, MCSO case type
    - 0.09
*   - Oscillator through, XO case type
    - 0.12
*   - Resonator through, HCxx case type
    - 0.11
*   - Resonator surface mount
    - 0.10
```

All other parameters are issued from the mission profile.

**Induced factor $\Pi_{\text{induced}}$**

The $\Pi_{\text{induced}}$ factor allows taking into account the influence of the mission profile as described in paragraph {numref}`eee_4_3_1`. Its formula is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_66
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
````

> $\Pi_{placement}$

The Pi Placement depends on the function, there are 6 choices to choose as recalled here from {numref}`eee-table4-3`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-48')" placeholder="Search table...">

```{list-table} Recommendation for the definition of parameter $\Pi_{placement\_ i}$.
:name: eee-table4-48
:header-rows: 1
:widths: 70 30

*   - Description of the placement influence
    - $\Pi_{placement\_ i}$
*   - Digital non-interface function
    - 1.0
*   - Digital interface function
    - 1.6
*   - Analog low-level non-interface function (<1A)
    - 1.3
*   - Analog low-level interface function (<1A)
    - 2.0
*   - Analog power non-interface function (≥1A)
    - 1.6
*   - Analog power interface function (≥1A)
    - 2.5
```

> $\Pi_{application}$

$\Pi_{application}$ represents the influence of the type of application and the environment of the product containing the part. This factor varies depending on the phase of the profile.

It is evaluated through the questions presented in the following table:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_49')"
    placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{application\_ i}$ for the launch, time to reach orbit and in-orbit
:name: eee-table4-49

* - <table class="myTable" id="eee_table4_49">
        <thead>
            <th>
                <p><strong>Criterion</strong></p>
            </th>
            <th>
                <p><strong>Description</strong></p>
            </th>
            <th>
                <p><strong>Levels</strong></p>
            </th>
            <th>
                <p><strong>Examples and comments</strong></p>
            </th>
            <th>
                <p><strong>Weight</strong></p>
                <p><strong>POS</strong></p>
            </th>
        </thead>
        <tr>
            <td>
                <p>User type in the phase considered</p>
            </td>
            <td>
                <p>Represents the capability to respect procedures, facing operational constraints.</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Industry</strong></p>
                <p>1: General public</p>
                <p>2: Military</p>
                <p>The most severe level must be adopted for military applications</p>
            </td>
            <td>
                <p>20</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>User qualification level in the phase considered</p>
            </td>
            <td>
                <p>Represents the level of control of the user or the worker regarding an operational context</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Highly qualified</strong></p>
                <p>1: Qualified</p>
                <p>2: Slightly qualified or with little experience</p>
                <p>In some phases, the user to be considered is the person who does the maintenance or servicing</p>
            </td>
            <td>
                <p>10</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>System mobility</p>
            </td>
            <td>
                <p>Represents contingencies related to possibilities of the system being moved</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Few contingencies (fixed or stable environment)</strong></p>
                <p>1: Moderate contingencies</p>
                <p>2: Severe contingencies, large variability (automobile)</p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product manipulation</p>
            </td>
            <td>
                <p>Represents the possibility of false manipulations, shocks, drops, etc .</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Not manipulated</strong></p>
                <p>1: Manipulation without displacement or disassembly</p>
                <p>2: Manipulation with displacement or disassembly</p>
                <p>The severe level should be adopted if maintenance on the product is possible in the phase
                    considered</p>
            </td>
            <td>
                <p>15</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Type of electrical network for the system</p>
            </td>
            <td>
                <p>Represents the level of electrical disturbance expected on power supplies, signals and electrical
                    lines: power on, switching, power supply, connection/disconnection</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Undisturbed network (dedicated regulated power supply)</strong></p>
                <p>1: Slightly disturbed network</p>
                <p>2: Network subject to disturbances (on board network)</p>
                <p>The network type is a system data but that can be broken down and related to specific products
                </p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to human activity</p>
            </td>
            <td>
                <p>Represents exposure to contingencies related to human activity: shock, change in final use, etc.
                </p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Uninhabitable zone</strong></p>
                <p>1: Possible activity in the product zone</p>
                <p>2: Normal activity in the product zone</p>
                <p>The product can be exposed to human activity even if it is not handled itself during normal use
                </p>
            </td>
            <td>
                <p>8</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to machine disturbances</p>
            </td>
            <td>
                <p>Represents contingencies related to operation of machines, engines, actuators: shock,
                    overheating, electrical disturbances, pollutants, etc.</p>
            </td>
            <td>
                <p>0:Non aggressive</p>
                <p><strong>1: Moderate</strong></p>
                <p>2: Severe</p>
            </td>
            <td>
                <p>0: Null (telephone)</p>
                <p><strong>1: Indirect exposure (product in compartment)</strong></p>
                <p>2: Strong or direct exposure (product in engine area)</p>
            </td>
            <td>
                <p>3</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to the weather</p>
            </td>
            <td>
                <p>Represents exposure to rain, hail, frost, sandstorm, lightning, dust</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Null (home)</strong></p>
                <p>1: Indirect exposure (compartment, station hall)</p>
                <p>2: Outdoors (automobile engine)</p>
            </td>
            <td>
                <p>2</p>
            </td>
        </tr>
    </table>
```

A mark is given for each level: 1 for level 0, 3.2 for level 1 and 10 for level 2. This mark is multiplied by the weight ($P_{os}$) and the sum of all the products is divided by 66. For the present application here, we consider $\Pi_{application}$ = 1.1, the value determined in the frame of an Airbus Defence & Space observation project, for all in flight phases.

```{admonition} Note
:class: note

In bold in the table are the levels considered for the space environment (orbit raising and orbit keeping). They represent the typical environment met in space for satellites, hence the figure can be used for all in flight phases for all projects provided they don't present a specific application; in that case, it has to be re-evaluated.
```

> $\Pi_{\text{ruggedising}}$

The ruggedising factor is determined through a 16 questions audit ensuring the evaluation of the procedures established to guarantee the safety and maintenance of the product and that the procedures are indeed applied. See paragraph {numref}`eee_4_3_1_17`.

> $C_{\text{sensitivity}}$

The induced factor $C_{\text{sensitivity}}$ presented in paragraph {numref}`eee_4_3_1_21` is provided in the following table:

```{list-table} Induced factor coefficient of sensitivity for piezo electric devices.
:name: eee-table4-50
:header-rows: 1
:widths: 70 30

*   - Technologies
    - $C_{\text{sensitivity}}$
*   - Resonators
    - 4.55
*   - Quartz
    - 8.10
```

```{admonition} Note
:class: note

For the 2021 issue of FIDES, the value has been updated (respectively to 3.95 and 7.25).
```

> **c) Component manufacturing factor $\Pi_{\text{PM}}$**

The Part\_Manufacturing factor presented in paragraph {numref}`eee_4_3_3` represents the quality of the component. This factor transcribes the confidence that can be attributed to the way the part has been manufactured, through factors quantifying the manufacturing process of the part, the tests ran and the confidence in the manufacturer.

Its high level formula is

${\pi_{\text{PM}} = e}^{1.39*\left( 1 - Part_{\text{Grade}} \right) - 0.69}$

With, for capacitors, $Part\_ Grade = \ \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \times \varepsilon}{24}$

These parameters are determined through tables available in FIDES.

-  $\text{QA}_{\text{manufacturer}}$ is presented in paragraph {numref}`eee_4_3_3_2`

-   $\text{QA}_{\text{component}}$ is presented in paragraph {numref}`eee_4_3_3_3` and defined in {numref}`eee-table4-51`

-   $\text{RA}_{\text{component}}$ is presented in {numref}`eee_4_3_3_4`

-   $\epsilon$  is presented in paragraph {numref}`eee_4_3_3_7`

Component manufacturing factor $\pi_{\text{PM}}$ according to paragraph {numref}`eee_4_3_3` with component quality assurance levels $\text{QA}_{\text{component}}$ defined in the following tables:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-51')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\text{QA}_{\text{component}}$ for piezoelectric components.
:name: eee-table4-51
:header-rows: 1
:widths: 60 25 15

*   - Piezoelectric components: Component quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{component}}$
*   - Qualification according to one of the following standards: AEC Q200 (Resonator) MIL-PRF-38534 class K (oscillator), MIL-PRF-55310 class S (Oscillator), ESCC 3503 (oscillator)/3501 (resonator) or equivalent
    - Higher
    - 3
*   - Qualification according to one of the following standards: MIL-PRF-38534 class H, MIL-PRF-55310 class B
    - Equivalent
    - 2
*   - Qualification according to one of the following MIL-PRF-xxxx level M
    - Lower
    - 1
*   - No information
    - Much
    - 0
```

> **d) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2_3`.

**Summary for the Crystal resonators family 03**

<table class="myTable">
    <thead>
        <th><strong>Section</strong></th>
        <th><strong>Component types</strong></th>
        <th><strong>Modifications and adaptations for space applications</strong></th>
    </thead>
    <tr>
        <td>03</td>
        <td>Piezolectric components</td>
        <td>
            <p>-</p>
        </td>
    </tr>
</table>


(eee_4_3_4_4)=
## Diodes (family 04)

General diodes and RF HF diodes are classified as family 04 in EPPL {cite:t}`eee-EPPL007-37`.

All diodes used for Space applications can be modelled through FIDES. The pages where the models can be found in the two versions of the FIDES guide.

The following table presents the different subfamilies and the corresponding models with the FIDES method.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_52')"
    placeholder="Search table...">

```{list-table} Groups of diodes.
:name: eee-table4-52

* - <table class="myTable" id="eee_table4_52">
        <thead>
            <tr>
                <th rowspan="2"><strong>Groups of diodes.</strong></th>
                <th colspan="2"><strong>Models in FIDES 2009</strong></th>
                <th rowspan="2"><strong>Proposed models in FIDES</strong></th>
                <th rowspan="2"><strong>Remarks</strong></th>
            </tr>
            <tr>
                <th>2009</th>
                <th>2021</th>
            </tr>
        </thead>
        <tr>
            <td>01 Switching</td>
            <td>p120</td>
            <td>p133</td>
            <td>“Signal diodes up to 1A (PIN, Schottky, signal, varactor)”</td>
            <td>ECDS_10</td>
        </tr>
        <tr>
            <td>02 Rectifier</td>
            <td>
                <p>p120</p>
                <p>p120</p>
            </td>
            <td>
                <p>p133</p>
                <p>p133</p>
            </td>
            <td>
                <p>“Rectifying diodes 1A to 3A”</p>
                <p>“Rectifying diodes &gt; 3A”</p>
            </td>
            <td>
                <p>ECDS_11</p>
                <p>ECDS_15</p>
            </td>
        </tr>
        <tr>
            <td>03 Voltage regulator</td>
            <td>
                <p>p120</p>
                <p>p120</p>
            </td>
            <td>
                <p>p133</p>
                <p>p133</p>
            </td>
            <td>
                <p>“Zener regulation diodes up to 1.5W”,</p>
                <p>“Zener regulation diodes more than 1,5W”</p>
            </td>
            <td>
                <p>ECDS_12</p>
                <p>ECDS_16</p>
            </td>
        </tr>
        <tr>
            <td>04 Voltage reference / Zener</td>
            <td>
                <p>p120</p>
                <p>p120</p>
            </td>
            <td>
                <p>p133</p>
                <p>p133</p>
            </td>
            <td>
                <p>“Zener regulation diodes up to 1,5W”</p>
                <p>“Zener regulation diodes more than 1.5W”</p>
            </td>
            <td>
                <p>ECDS_12</p>
                <p>ECDS_16</p>
            </td>
        </tr>
        <tr>
            <td>05 RF microwave Schottky (Si)</td>
            <td>p185</td>
            <td>p211</td>
            <td>“PIN, Schottky, Tunnel, varactor diodes (RF HF)”</td>
            <td>HFDI_01</td>
        </tr>
        <tr>
            <td>06 Pin</td>
            <td>p185</td>
            <td>p211</td>
            <td>“PIN, Schottky, Tunnel, varactor diodes (RF HF)”</td>
            <td>HFDI_01</td>
        </tr>
        <tr>
            <td>07 Hot carrier</td>
            <td>
                <p>p120</p>
                <p>p185</p>
            </td>
            <td>
                <p>p133</p>
                <p>p211</p>
            </td>
            <td>
                <p>“Signal diodes up to 1A (PIN, Schottky, signal, varactor)”</p>
                <p>“PIN, Schottky, Tunnel, varactor diodes (RF HF)”</p>
            </td>
            <td>
                <p>ECDS_10</p>
                <p>HFDI_01</p>
            </td>
        </tr>
        <tr>
            <td>08 Transient suppression</td>
            <td>
                <p>p120</p>
                <p>p120</p>
            </td>
            <td>
                <p>p133</p>
                <p>p133</p>
            </td>
            <td>
                <p>“Protection diodes up to 3kW (in peak 10ms/100ms) (TVS)”</p>
                <p>“Protection diodes more than 3kW (in peak 10ms/100ms) (TVS)”</p>
            </td>
            <td>
                <p>ECDS_13</p>
                <p>ECDS_17</p>
            </td>
        </tr>
        <tr>
            <td>10 High voltage rectifier</td>
            <td>No/Yes</td>
            <td>No/Yes</td>
            <td>Not usually used in space applications, no more present in the EPPL list but recommendation to use
                “Rectifying diodes &gt; 3A”</td>
            <td>ECDS_15</td>
        </tr>
        <tr>
            <td>11 Microwave varactor (GaAs)</td>
            <td>No/Yes</td>
            <td>No/Yes</td>
            <td>Not usually used in space applications, no more present in the EPPL list Error: Reference source not
                found but recommendation to use “PIN, Schottky, Tunnel, varactor diodes (RF HF)”</td>
            <td>HFDI_01</td>
        </tr>
        <tr>
            <td>12 Step recovery</td>
            <td>No</td>
            <td>No</td>
            <td>Not usually used in space applications, no more present in the EPPL and not modelled by FIDES 2009</td>
            <td>NA</td>
        </tr>
        <tr>
            <td>13 RF / microwave varactor (Si)</td>
            <td>p185</td>
            <td>p211</td>
            <td>“PIN, Schottky, Tunnel, varactor diodes (RF HF)”</td>
            <td>HFDI_01</td>
        </tr>
        <tr>
            <td>14 Current regulator</td>
            <td>No</td>
            <td>No</td>
            <td>Not usually used in space applications, no more present in the EPPL and not modelled by FIDES 2009</td>
            <td>NA</td>
        </tr>
        <tr>
            <td>15 Microwave Schottky (GaAs)</td>
            <td>No/Yes</td>
            <td>No/Yes</td>
            <td>Not usually used in space applications, no more present in the EPPL but recommendation to use “PIN,
                Schottky, Tunnel, varactor diodes (RF HF)”</td>
            <td>HFDI_01</td>
        </tr>
        <tr>
            <td>16 RF / microwave pin</td>
            <td>p185</td>
            <td>p211</td>
            <td>“PIN, Schottky, Tunnel, varactor diodes (RF HF)”</td>
            <td>HFDI_01</td>
        </tr>
        <tr>
            <td>17 Microwave gunn (GaAs)</td>
            <td>No</td>
            <td>No</td>
            <td>Not usually used in space applications, no more present in the EPPL</td>
            <td>NA</td>
        </tr>
        </table>
```


(eee_4_3_4_4_1)=
### HF RF Diodes (05, 06, 11, 13, 15 & 16 families)

**General model for the general diodes and the HF RF diodes family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_67
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{LF}} \cdot \Pi_{\text{ProcessRFHF}}
```
-   $\lambda_{\text{Physical}}$ the physical contribution for each component,

-   $\Pi_{\text{PM}}$ the quality and technical control over manufacturing of the item,

-   $\Pi_{\text{ProcessRFHF}}$ the quality and technical control over the development, manufacturing and use process for the RFHF item,

-   $\Pi_{\text{LF}}$ the factor representing the process to become lead-free if it has to be considered for Space applications, it is equal to 1 (see paragraph {numref}`eee_4_3`).
````

All this being based on a mission profile to be defined for the whole unit.

With process factor $\Pi_{\text{Process}}$ according to Paragraph {numref}`eee_4_3_2_1` and RF HF process factor $\Pi_{\text{ProcessRFHF}}$ according to Paragraph {numref}`eee_4_3_2_5`.

> **a) Mission profile**

In order to model the reliability for each component of a unit, it is necessary to define the mission profile corresponding to the unit under consideration. See paragraph {numref}`eee_4_3_1` for details.

> **b) Calculation of $\lambda_{\text{Physical}}$**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_68
\lambda_{\text{Physical}} = \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \begin{pmatrix} 
  {\lambda_{\text{OTH}} \cdot \Pi}_{\text{Thermal}} \\                                                                                        
  {+ \lambda_{\text{OTCyCase}} \cdot \Pi}_{\text{TCyCase}} \\                                                                                 
  \begin{matrix}                                                                                                                                
  + \lambda_{\text{OTCySolderjoints}} \cdot \Pi_{\text{TCySolderjoints}} \\                                                                 
   + \lambda_{\text{OMech}} \cdot \Pi_{\text{Mech}} \\                                                                                        
  \end{matrix} \\                                                                                                                               
  \end{pmatrix}_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
```
````

Basic failure rate $\lambda_{\text{OTH}}$ is provided in the following table for RFHF diodes:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-53')" placeholder="Search table...">

```{list-table} Basic failure rates $\lambda_{\text{OTH}}$ for diodes.
:name: eee-table4-53
:header-rows: 1
:widths: 40 40 10 10

*   - Diode Type
    - Subcategory
    - $\lambda_{\text{OTH}}$
    - Remark
*   - PIN, Schottky, tunnel, varactor (RFHF)
    - Si and SiGe discrete semiconductor circuit HFDI
    - 0.0120
    - HFDI_01
*   - PIN, Schottky, tunnel, varactor (RFHF)
    - Si and SiGe discrete semiconductor circuit HFDA
    - 0.0120
    - HFDA_01
```

Basic failure rates $\lambda_{\text{OTCyCase}}$, $\lambda_{\text{OTCySolderjoints}}$ and $\lambda_{\text{OMech}}$ are provided in the following table for the packages SODxx and TOxx specifically used in space applications:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_54')"
    placeholder="Search table...">

```{list-table} Basic failure rates $\lambda_{0}$ for diodes.
:name: eee-table4-54

* - <table class="myTable" id="eee_table4_54">
        <thead>
            <tr>
                <th><strong>Case</strong></th>
                <th><strong>Equivalent name</strong></th>
                <th><strong>Description</strong></th>
                <th><strong>λ<sub>OTCyCase</sub></strong></th>
                <th><strong>λ<sub>OTCySolderjoints</sub></strong></th>
                <th><strong>λ<sub>OMech</sub></strong></th>
            </tr>
        </thead>
        <tr>
            <td>SOD80</td>
            <td>Mini-MELF, DO213AA</td>
            <td rowspan="2">SMD, Hermetically sealed glass</td>
            <td rowspan="2">0.00781</td>
            <td rowspan="2">0.03905</td>
            <td rowspan="2">0.00078</td>
        </tr>
        <tr>
            <td>SOD87</td>
            <td>MELF, DO213AB</td>
        </tr>
        <tr>
            <td>TO18</td>
            <td>TO71, TO72, SOT31, SOT18</td>
            <td rowspan="3">Through hole, metal</td>
            <td rowspan="3">0.0101</td>
            <td rowspan="3">0.0505</td>
            <td rowspan="3">0.00101</td>
        </tr>
        <tr>
            <td>TO39</td>
            <td>SOT5, TO254</td>
        </tr>
        <tr>
            <td>TO52</td>
            <td></td>
        </tr>
        </table>
```


$\lambda_{\text{OTH}}$ is a fixed value given in another table, depending on the type of components.

**Physical stresses for the general diodes and the RF HF diodes family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_69
\Pi_{\text{Thermal}} = \Pi_{\text{El}} \cdot exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

$E_{a}$ = 0.7eV;

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_70
\Pi_{\text{El}} = \left\{ \begin{matrix}  \left( \frac{V_{\text{applied}}}{V_{\text{rated}}} \right)^{2.4}\ \mathrm{\text{if}}\ \frac{V_{\text{applied}}}{V_{\text{rated}}} > 0.3 \\   
   \\                                                                                                                                          
  0.056\ \mathrm{\text{if}}\ \frac{V_{\text{applied}}}{V_{\text{rated}}} \leq 0.3 \\                                                           
  \end{matrix} \right.\ $$                          
```
````

for signal diodes up to 1A (PIN, Schottky, signal, varactor) and for RF HF diodes

for all other diodes, $\Pi_{\text{El}}$ = 1.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_71
\Pi_{\text{TcyCase}} = \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{4} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```
````


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_72
\Pi_{\text{TcySolderjoints}} = \left( \frac{{12 \cdot N}_{cy\_ annual}}{t_{\text{annual}}} \right) \cdot \left( \frac{min(\theta_{\text{cy}},2)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{1.9} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```
````


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_73
\Pi_{\text{Mechanical}} = \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}
```
````

All other parameters are issued from the mission profile. 

**Induced factor $\Pi_{\text{induced}}$**

The $\Pi_{\text{induced}}$ factor allows taking into account the influence of the mission profile as described in paragraph {numref}`eee_4_3_1`. Its formula is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_74
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
````

> $\Pi_{placement}$

The Pi Placement depends on the function, there are 6 choices to choose as recalled here from {numref}`eee-table4-3`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-55')" placeholder="Search table...">

```{list-table} Recommendation for the definition of parameter $\Pi_{placement\_ i}$.
:name: eee-table4-55
:header-rows: 1
:widths: 70 30

*   - Description of the placement influence
    - $\Pi_{placement\_ i}$
*   - Digital non-interface function
    - 1.0
*   - Digital interface function
    - 1.6
*   - Analog low-level non-interface function (<1A)
    - 1.3
*   - Analog low-level interface function (<1A)
    - 2.0
*   - Analog power non-interface function (≥1A)
    - 1.6
*   - Analog power interface function (≥1A)
    - 2.5
```

> $\Pi_{application}$

$\Pi_{application}$ represents the influence of the type of application and the environment of the product containing the part. This factor varies depending on the phase of the profile.

It is evaluated through the questions presented in the following table and addressed in {numref}`eee_4_3_1_19`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_56')"
    placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{application\_ i}$ for the launch, time to reach orbit and in-orbit
:name: eee-table4-56

* - <table class="myTable" id="eee_table4_56">
        <thead>
            <th>
                <p><strong>Criterion</strong></p>
            </th>
            <th>
                <p><strong>Description</strong></p>
            </th>
            <th>
                <p><strong>Levels</strong></p>
            </th>
            <th>
                <p><strong>Examples and comments</strong></p>
            </th>
            <th>
                <p><strong>Weight</strong></p>
                <p><strong>POS</strong></p>
            </th>
        </thead>
        <tr>
            <td>
                <p>User type in the phase considered</p>
            </td>
            <td>
                <p>Represents the capability to respect procedures, facing operational constraints.</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Industry</strong></p>
                <p>1: General public</p>
                <p>2: Military</p>
                <p>The most severe level must be adopted for military applications</p>
            </td>
            <td>
                <p>20</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>User qualification level in the phase considered</p>
            </td>
            <td>
                <p>Represents the level of control of the user or the worker regarding an operational context</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Highly qualified</strong></p>
                <p>1: Qualified</p>
                <p>2: Slightly qualified or with little experience</p>
                <p>In some phases, the user to be considered is the person who does the maintenance or servicing</p>
            </td>
            <td>
                <p>10</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>System mobility</p>
            </td>
            <td>
                <p>Represents contingencies related to possibilities of the system being moved</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Few contingencies (fixed or stable environment)</strong></p>
                <p>1: Moderate contingencies</p>
                <p>2: Severe contingencies, large variability (automobile)</p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product manipulation</p>
            </td>
            <td>
                <p>Represents the possibility of false manipulations, shocks, drops, etc .</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Not manipulated</strong></p>
                <p>1: Manipulation without displacement or disassembly</p>
                <p>2: Manipulation with displacement or disassembly</p>
                <p>The severe level should be adopted if maintenance on the product is possible in the phase
                    considered</p>
            </td>
            <td>
                <p>15</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Type of electrical network for the system</p>
            </td>
            <td>
                <p>Represents the level of electrical disturbance expected on power supplies, signals and electrical
                    lines: power on, switching, power supply, connection/disconnection</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Undisturbed network (dedicated regulated power supply)</strong></p>
                <p>1: Slightly disturbed network</p>
                <p>2: Network subject to disturbances (on board network)</p>
                <p>The network type is a system data but that can be broken down and related to specific products
                </p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to human activity</p>
            </td>
            <td>
                <p>Represents exposure to contingencies related to human activity: shock, change in final use, etc.
                </p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Uninhabitable zone</strong></p>
                <p>1: Possible activity in the product zone</p>
                <p>2: Normal activity in the product zone</p>
                <p>The product can be exposed to human activity even if it is not handled itself during normal use
                </p>
            </td>
            <td>
                <p>8</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to machine disturbances</p>
            </td>
            <td>
                <p>Represents contingencies related to operation of machines, engines, actuators: shock,
                    overheating, electrical disturbances, pollutants, etc.</p>
            </td>
            <td>
                <p>0:Non aggressive</p>
                <p><strong>1: Moderate</strong></p>
                <p>2: Severe</p>
            </td>
            <td>
                <p>0: Null (telephone)</p>
                <p><strong>1: Indirect exposure (product in compartment)</strong></p>
                <p>2: Strong or direct exposure (product in engine area)</p>
            </td>
            <td>
                <p>3</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to the weather</p>
            </td>
            <td>
                <p>Represents exposure to rain, hail, frost, sandstorm, lightning, dust</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Null (home)</strong></p>
                <p>1: Indirect exposure (compartment, station hall)</p>
                <p>2: Outdoors (automobile engine)</p>
            </td>
            <td>
                <p>2</p>
            </td>
        </tr>
    </table>
```

A mark is given for each level: 1 for level 0, 3.2 for level 1 and 10 for level 2. This mark is multiplied by the weight ($P_{os}$) and the sum of all the products is divided by 66. For the present application here, we consider $\Pi_{application}$ = 1.1, the value determined in the frame of an Airbus Defence & Space observation project, for all in flight phases.

```{admonition} Note
:class: note

In bold in the table are the levels considered for the space environment (orbit raising and orbit keeping). They represent the typical environment met in space for satellites, hence the figure can be used for all in flight phases for all projects provided they don't present a specific application; in that case, it has to be re-evaluated.
```

> $\Pi_{\text{ruggedising}}$

The ruggedising factor is determined through a 16 questions audit ensuring the evaluation of the procedures established to guarantee the safety and maintenance of the product and that the procedures are indeed applied. See paragraph {numref}`eee_4_3_1_17`.

> $C_{\text{sensitivity}}$

The induced factor $C_{\text{sensitivity}}$ presented in paragraph {numref}`eee_4_3_1_21` is provided in the following table:

```{list-table} Induced factor coefficient of sensitivity for piezo electric devices.
:name: eee-table4-57
:header-rows: 1
:widths: 70 30

*   - Technologies
    - $C_{\text{sensitivity}}$
*   - Si and Ge RF diodes
    - 6.30
*   - GaAs RF diodes
    - 7.40
```

```{admonition} Note
:class: note

For the 2021 issue of FIDES, these values have not been updated, except for the addition of data for GaN diodes (6.9).
```

> **c) Component manufacturing factor $\Pi_{\text{PM}}$**

The Part\_Manufacturing factor presented in paragraph {numref}`eee_4_3_3` represents the quality of the component. This factor transcribes the confidence that can be attributed to the way the part has been manufactured, through factors quantifying the manufacturing process of the part, the tests ran and the confidence in the manufacturer.

Its high level formula is

${\pi_{\text{PM}} = e}^{1.39*\left( 1 - Part_{\text{Grade}} \right) - 0.69}$

With, for capacitors, $Part\_ Grade = \ \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \times \varepsilon}{36}$

These parameters are determined through tables available in FIDES.

-  $\text{QA}_{\text{manufacturer}}$ is presented in paragraph {numref}`eee_4_3_3_2`

-   $\text{QA}_{\text{component}}$ is presented in paragraph {numref}`eee_4_3_3_3` and defined in {numref}`eee-table4-58`

-   $\text{RA}_{\text{component}}$ is presented in {numref}`eee_4_3_3_4`

-   $\epsilon$  is presented in paragraph {numref}`eee_4_3_3_7`

Component manufacturing factor $\pi_{\text{PM}}$ according to paragraph {numref}`eee_4_3_3` with component quality assurance levels $\text{QA}_{\text{component}}$ defined in the following tables:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-58')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\text{QA}_{\text{component}}$ for diodes.
:name: eee-table4-58
:header-rows: 1
:widths: 60 25 15

*   - Diodes: Component quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{component}}$
*   - Qualification according to one of the following standards: AEC Q101, AEC Q102, MIL-PRF-19500 JANS, ESCC 5000, ESCC 5010 level B, NASDA-QTS-xxxx class I, JAXA-QTS Class I (NASDA-QTS-2030)
    - Higher
    - 3
*   - Qualification according to one of the following standards: MIL-PRF-19500 JANTX or JANTXV, ESCC 5010 level C, NASDA-QTS-xxxx class II, JAXA-QTS Class II
    - Equivalent
    - 2
*   - Qualification according to one of the following standards: MIL-PRF-19500 JAN or qualification program internal to the manufacturer and unidentified manufacturing sites
    - Lower
    - 1
*   - No information
    - Much
    - 0
```

> **d) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2_3`.


(eee_4_3_4_4_2)=
### Other Diodes (01, 02, 03, 04, 07, 08, 10 families)

**General model for the general diodes family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_75
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{LF}} \cdot \Pi_{\text{ProcessRFHF}}
```
With process factor $\Pi_{\text{Process}}$ according to Paragraph {numref}`eee_4_3_2_1`.
````

> **a) Mission profile**

In order to model the reliability for each component of a unit, it is necessary to define the mission profile corresponding to the unit under consideration. See paragraph {numref}`eee_4_3_1` for details.

> **b) Calculation of $\lambda_{\text{Physical}}$**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_76
\lambda_{\text{Physical}} = \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \begin{pmatrix} 
  \lambda_{\text{OTH}} \cdot \Pi_{\text{Thermal}} \\                                                                                        
  {+ \lambda_{\text{OTCyCase}} \cdot \Pi}_{\text{TCyCase}} \\                                                                                 
  \begin{matrix}                                                                                                                                
  {+ \lambda_{\text{OTCySolderjoints}} \cdot \Pi}_{\text{TCySolderjoints}} \\                                                                 
   + \lambda_{\text{OMech}} \cdot \Pi_{\text{Mech}} \\                                                                                        
  \end{matrix} \\                                                                                                                               
  \end{pmatrix}_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
```
````

Basic failure rates $\lambda_{\text{OTCyCase}}$, $\lambda_{\text{OTCySolderjoints}}$ and $\lambda_{\text{OMech}}$ are provided in the following table for the packages SODxx and TOxx specifically used in space applications:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_59')"
    placeholder="Search table...">

```{list-table} Basic failure rates $\lambda_{0}$ for diodes.
:name: eee-table4-59

* - <table class="myTable" id="eee_table4_59">
        <thead>
            <tr>
                <th><strong>Case</strong></th>
                <th><strong>Equivalent name</strong></th>
                <th><strong>Description</strong></th>
                <th><strong>λ<sub>OTCyCase</sub></strong></th>
                <th><strong>λ<sub>OTCySolderjoints</sub></strong></th>
                <th><strong>λ<sub>OMech</sub></strong></th>
            </tr>
        </thead>
        <tr>
            <td>SOD80</td>
            <td>Mini-MELF, DO213AA</td>
            <td rowspan="2">SMD, Hermetically sealed glass</td>
            <td rowspan="2">0.00781</td>
            <td rowspan="2">0.03905</td>
            <td rowspan="2">0.00078</td>
        </tr>
        <tr>
            <td>SOD87</td>
            <td>MELF, DO213AB</td>
        </tr>
        <tr>
            <td>TO18</td>
            <td>TO71, TO72, SOT31, SOT18</td>
            <td rowspan="3">Through hole, metal</td>
            <td rowspan="3">0.0101</td>
            <td rowspan="3">0.0505</td>
            <td rowspan="3">0.00101</td>
        </tr>
        <tr>
            <td>TO39</td>
            <td>SOT5, TO254</td>
        </tr>
        <tr>
            <td>TO52</td>
            <td></td>
        </tr>
        </table>
```

$\lambda_{\text{OTH}}$ is a fixed value given in another table, depending on the type of components.


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-60')" placeholder="Search table...">

```{list-table} Basic failure rates $\lambda_{\text{OTH}}$ for diodes.
:name: eee-table4-60
:header-rows: 1
:widths: 60 20 20

*   - Type
    - Groups
    - $\lambda_{\text{OTH}}$
*   - Power diodes – Protection diodes >3kW
    - 8b
    - 1.4980
*   - Power diodes – Thyristors, triacs > 3A
    - -
    - 0.1976
*   - Power diodes – Rectifying diodes >3A
    - 2b/10
    - 0.1574
*   - Power diodes – Zener regulation diodes >1.5W
    - 3b/4b
    - 0.0954
*   - Low power diodes – Protection diodes <3kW
    - 8a
    - 0.0210
*   - Low power diodes – rectifying diodes >1A, <3A
    - 2a
    - 0.0100
*   - Low power diodes – Zener regulation diodes <1.5W
    - 3a/4a
    - 0.0080
*   - Low power diodes – signal diodes <1A
    - 1
    - 0.0044
```

**Physical stresses for the general diodes and the RF HF diodes family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_77
\Pi_{\text{Thermal}} = \Pi_{\text{El}} \cdot exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

$E_{a}$ = 0.7eV;

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_78
\Pi_{\text{El}} = \left\{ \begin{matrix}  \left( \frac{V_{\text{applied}}}{V_{\text{rated}}} \right)^{2.4}\ \mathrm{\text{if}}\ \frac{V_{\text{applied}}}{V_{\text{rated}}} > 0.3 \\   
   \\                                                                                                                                          
  0.056\ \mathrm{\text{if}}\ \frac{V_{\text{applied}}}{V_{\text{rated}}} \leq 0.3 \\                                                           
  \end{matrix} \right.\                       
```
````

for signal diodes up to 1A (PIN, Schottky, signal, varactor) and for RF HF diodes

for all other diodes, $\Pi_{\text{El}}$ = 1.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_79
\Pi_{\text{TcyCase}} = \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{4} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_80
\Pi_{\text{TcySolderjoints}} = \left( \frac{{12 \cdot N}_{cy\_ annual}}{t_{\text{annual}}} \right) \cdot \left( \frac{min(\theta_{\text{cy}},2)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{1.9} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_81
\Pi_{\text{Mechanical}} = \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}
```
````

All other parameters are issued from the mission profile. 

**Induced factor $\Pi_{\text{induced}}$**

The $\Pi_{\text{induced}}$ factor allows taking into account the influence of the mission profile as described in paragraph {numref}`eee_4_3_1`. Its formula is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_82
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
````

> $\Pi_{placement}$

The Pi Placement depends on the function, there are 6 choices to choose as recalled here from {numref}`eee-table4-3`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-61')" placeholder="Search table...">

```{list-table} Recommendation for the definition of parameter $\Pi_{placement\_ i}$.
:name: eee-table4-61
:header-rows: 1
:widths: 70 30

*   - Description of the placement influence
    - $\Pi_{placement\_ i}$
*   - Digital non-interface function
    - 1.0
*   - Digital interface function
    - 1.6
*   - Analog low-level non-interface function (<1A)
    - 1.3
*   - Analog low-level interface function (<1A)
    - 2.0
*   - Analog power non-interface function (≥1A)
    - 1.6
*   - Analog power interface function (≥1A)
    - 2.5
```

> $\Pi_{application}$

$\Pi_{application}$ represents the influence of the type of application and the environment of the product containing the part. This factor varies depending on the phase of the profile.

It is evaluated through the questions presented in the following table and addressed in {numref}`eee_4_3_1_19`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_62')"
    placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{application\_ i}$ for the launch, time to reach orbit and in-orbit
:name: eee-table4-62

* - <table class="myTable" id="eee_table4_62">
        <thead>
            <th>
                <p><strong>Criterion</strong></p>
            </th>
            <th>
                <p><strong>Description</strong></p>
            </th>
            <th>
                <p><strong>Levels</strong></p>
            </th>
            <th>
                <p><strong>Examples and comments</strong></p>
            </th>
            <th>
                <p><strong>Weight</strong></p>
                <p><strong>POS</strong></p>
            </th>
        </thead>
        <tr>
            <td>
                <p>User type in the phase considered</p>
            </td>
            <td>
                <p>Represents the capability to respect procedures, facing operational constraints.</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Industry</strong></p>
                <p>1: General public</p>
                <p>2: Military</p>
                <p>The most severe level must be adopted for military applications</p>
            </td>
            <td>
                <p>20</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>User qualification level in the phase considered</p>
            </td>
            <td>
                <p>Represents the level of control of the user or the worker regarding an operational context</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Highly qualified</strong></p>
                <p>1: Qualified</p>
                <p>2: Slightly qualified or with little experience</p>
                <p>In some phases, the user to be considered is the person who does the maintenance or servicing</p>
            </td>
            <td>
                <p>10</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>System mobility</p>
            </td>
            <td>
                <p>Represents contingencies related to possibilities of the system being moved</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Few contingencies (fixed or stable environment)</strong></p>
                <p>1: Moderate contingencies</p>
                <p>2: Severe contingencies, large variability (automobile)</p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product manipulation</p>
            </td>
            <td>
                <p>Represents the possibility of false manipulations, shocks, drops, etc .</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Not manipulated</strong></p>
                <p>1: Manipulation without displacement or disassembly</p>
                <p>2: Manipulation with displacement or disassembly</p>
                <p>The severe level should be adopted if maintenance on the product is possible in the phase
                    considered</p>
            </td>
            <td>
                <p>15</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Type of electrical network for the system</p>
            </td>
            <td>
                <p>Represents the level of electrical disturbance expected on power supplies, signals and electrical
                    lines: power on, switching, power supply, connection/disconnection</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Undisturbed network (dedicated regulated power supply)</strong></p>
                <p>1: Slightly disturbed network</p>
                <p>2: Network subject to disturbances (on board network)</p>
                <p>The network type is a system data but that can be broken down and related to specific products
                </p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to human activity</p>
            </td>
            <td>
                <p>Represents exposure to contingencies related to human activity: shock, change in final use, etc.
                </p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Uninhabitable zone</strong></p>
                <p>1: Possible activity in the product zone</p>
                <p>2: Normal activity in the product zone</p>
                <p>The product can be exposed to human activity even if it is not handled itself during normal use
                </p>
            </td>
            <td>
                <p>8</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to machine disturbances</p>
            </td>
            <td>
                <p>Represents contingencies related to operation of machines, engines, actuators: shock,
                    overheating, electrical disturbances, pollutants, etc.</p>
            </td>
            <td>
                <p>0:Non aggressive</p>
                <p><strong>1: Moderate</strong></p>
                <p>2: Severe</p>
            </td>
            <td>
                <p>0: Null (telephone)</p>
                <p><strong>1: Indirect exposure (product in compartment)</strong></p>
                <p>2: Strong or direct exposure (product in engine area)</p>
            </td>
            <td>
                <p>3</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to the weather</p>
            </td>
            <td>
                <p>Represents exposure to rain, hail, frost, sandstorm, lightning, dust</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Null (home)</strong></p>
                <p>1: Indirect exposure (compartment, station hall)</p>
                <p>2: Outdoors (automobile engine)</p>
            </td>
            <td>
                <p>2</p>
            </td>
        </tr>
    </table>
```

A mark is given for each level: 1 for level 0, 3.2 for level 1 and 10 for level 2. This mark is multiplied by the weight ($P_{os}$) and the sum of all the products is divided by 66. For the present application here, we consider $\Pi_{application}$ = 1.1, the value determined in the frame of an Airbus Defence & Space observation project, for all in flight phases.

```{admonition} Note
:class: note

In bold in the table are the levels considered for the space environment (orbit raising and orbit keeping). They represent the typical environment met in space for satellites, hence the figure can be used for all in flight phases for all projects provided they don't present a specific application; in that case, it has to be re-evaluated.
```

> $\Pi_{\text{ruggedising}}$

The ruggedising factor is determined through a 16 questions audit ensuring the evaluation of the procedures established to guarantee the safety and maintenance of the product and that the procedures are indeed applied. See paragraph {numref}`eee_4_3_1_17`.

> $C_{\text{sensitivity}}$

The induced factor $C_{\text{sensitivity}}$ presented in paragraph {numref}`eee_4_3_1_21` is provided in the following table:

```{list-table} Induced factor coefficient of sensitivity for piezo electric devices.
:name: eee-table4-63
:header-rows: 1
:widths: 70 30

*   - Technologies
    - $C_{\text{sensitivity}}$
*   - Regular diodes
    - 5.20
```

```{admonition} Note
:class: note

For the 2021 issue of FIDES, the value has been updated (to 6.30).
```

> **c) Component manufacturing factor $\Pi_{\text{PM}}$**

The Part\_Manufacturing factor presented in paragraph {numref}`eee_4_3_3` represents the quality of the component. This factor transcribes the confidence that can be attributed to the way the part has been manufactured, through factors quantifying the manufacturing process of the part, the tests ran and the confidence in the manufacturer.

Its high level formula is

${\pi_{\text{PM}} = e}^{1.39*\left( 1 - Part_{\text{Grade}} \right) - 0.69}$

With, for capacitors, $Part\_ Grade = \ \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \times \varepsilon}{36}$

These parameters are determined through tables available in FIDES.

-  $\text{QA}_{\text{manufacturer}}$ is presented in paragraph {numref}`eee_4_3_3_2`

-   $\text{QA}_{\text{component}}$ is presented in paragraph {numref}`eee_4_3_3_3` and defined in {numref}`eee-table4-64`

-   $\text{RA}_{\text{component}}$ is presented in {numref}`eee_4_3_3_4`

-   $\epsilon$  is presented in paragraph {numref}`eee_4_3_3_7`

Component manufacturing factor $\pi_{\text{PM}}$ according to paragraph {numref}`eee_4_3_3` with component quality assurance levels $\text{QA}_{\text{component}}$ defined in the following tables:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-64')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\text{QA}_{\text{component}}$ for diodes.
:name: eee-table4-64
:header-rows: 1
:widths: 60 25 15

*   - Diodes: Component quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{component}}$
*   - Qualification according to one of the following standards: AEC Q101, AEC Q102, MIL-PRF-19500 JANS, ESCC 5000, ESCC 5010 level B, NASDA-QTS-xxxx class I, JAXA-QTS Class I (NASDA-QTS-2030)
    - Higher
    - 3
*   - Qualification according to one of the following standards: MIL-PRF-19500 JANTX or JANTXV, ESCC 5010 level C, NASDA-QTS-xxxx class II, JAXA-QTS Class II
    - Equivalent
    - 2
*   - Qualification according to one of the following standards: MIL-PRF-19500 JAN or qualification program internal to the manufacturer and unidentified manufacturing sites
    - Lower
    - 1
*   - No information
    - Much
    - 0
```

> **d) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2_3`.

**Summary for the Diodes family 04**

<table class="myTable">
    <thead>
        <th>Section</th>
        <th>Component types</th>
        <th>Modifications and adaptations for space applications</th>
    </thead>
    <tr>
        <td>04</td>
        <td>Diodes</td>
        <td>
            <p>Consideration of packages SODxx and TOxx only</p>
            <p>Removal of the humidity stress Π<sub>RH</sub></p>
        </td>
    </tr>
</table>

(eee_4_3_4_5)=
## Filters family 05

Filters are classified as family 05 in EPPL {cite:t}`eee-EPPL007-37`. 

The HF/RF  filters used for Space applications can be modelled through FIDES. The pages where the models can be found in the two versions of the FIDES guide
The following table presents the different subfamilies and the corresponding models with the FIDES method.


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_65')"
    placeholder="Search table...">

```{list-table} Groups of filters.
:name: eee-table4-65

* - <table class="myTable" id="eee_table4_65">
        <thead>
            <tr>
                <th rowspan="2"><strong>Groups of filters</strong></th>
                <th colspan="2"><strong>Models in FIDES 2009</strong></th>
                <th rowspan="2"><strong>Proposed models in FIDES</strong></th>
                <th rowspan="2"><strong>Remarks</strong></th>
            </tr>
            <tr>
                <th>2009</th>
                <th>2021</th>
            </tr>
        </thead>
        <tr>
            <td>01 Feedthrough</td>
            <td>p188</td>
            <td>p214</td>
            <td>
                <p>“Fixed passive components for microwaves: Attenuator, load (50 Ohm), filter, power divider (combiner,
                    splitter)”</p>
                <p>“Variable passive components for microwaves: Variable attenuator, tuneable filter”,</p>
                <p>“Passive components with ferrites for microwaves, circulator, isolator, phase shifter”</p>
            </td>
            <td>
                <p>HFOT_01</p>
                <p>HFOT_02</p>
                <p>HFOT_03</p>
            </td>
        </tr>
        <tr>
            <td>Surface Acoustic Wave</td>
            <td>p188</td>
            <td>p214</td>
            <td>
                <p>“Fixed passive components for microwaves: Attenuator, load (50 Ohm), filter, power divider (combiner,
                    splitter)”</p>
                <p>Note: Model “Passive components for microwaves: Surface wave filters” HFOT_04 is not adequate for space
                    applications</p>
            </td>
            <td>HFOT_01</td>
        </tr>
    </table>
```

**General model for the filters family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_83
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{LF}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessRFHF}}
```
-   $\lambda_{\text{Physical}}$ the physical contribution for each component,

-   $\Pi_{\text{PM}}$ the quality and technical control over manufacturing of the item,

-   $\Pi_{\text{Process}}$ the quality and technical control over the development, manufacturing and use process for the product containing the item,

-   $\Pi_{\text{ProcessRFHF}}$ 

-   $\Pi_{\text{LF}}$ the factor representing the process to become lead-free if it has to be considered for Space applications, it is equal to 1 (see paragraph {numref}`eee_4_3`).
````

All this being based on a mission profile to be defined for the whole unit.

With process factor $\Pi_{\text{Process}}$ according to Paragraph {numref}`eee_4_3_2_1` and RF/HF process factor $\Pi_{\text{ProcessRFHF}}$  according to Paragraph {numref}`eee_4_3_2_5`.
.

> **a) Mission profile**

In order to model the reliability for each component of a unit, it is necessary to define the mission profile corresponding to the unit under consideration. See paragraph {numref}`eee_4_3_1` for details.

> **b) Calculation of $\lambda_{\text{Physical}}$**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_84
\lambda_{\text{Physical}} = \lambda_{O_{\text{PassiveRFHF}}} \cdot \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \left( \Pi_{\text{Thermal}} + \Pi_{\text{TCy}} + \Pi_{\text{Mechanical}} + \Pi_{\text{RH}} \right)_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
```
````

$\lambda_{O_{\text{PassiveRFHF}}}$ corresponds to the basic failure rate defined for sub-groups within the mentioned groups:

-   For attenuator, load (50Ω), filter, power divider (combiner, splitter) and surface acoustic wave filter, the value is equal to 0.5;

-   For variable attenuator, tuneable filter, circulator, isolator and phase shifter, the value is equal to 1.0.


**Physical stresses for the fuses family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_85
\Pi_{\text{Thermal}} = \eta \cdot 0.01 \cdot exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

$E_{a}$ = 0.15eV;

*η* is the duty cycle during the phase.

All other parameters are issued from the mission profile.


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_86
\Pi_{\text{Tcy}} = \gamma_{\text{TCy}} \cdot \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{min(\theta_{\text{cy}},2)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{1.9} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack         
```
````

$\gamma_{\text{TCy}}$ depends on the type of filters:

-   For circulator, isolator, phase shifter, the value is equal to 0.69;

-   For all other filters, the value is equal to 0.67.

All other parameters are issued from the mission profile.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_87
\Pi_{\text{Mechanical}} = 0.30 \cdot \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}     
```
````

All parameters are issued from the mission profile. 

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_88
\Pi_{\text{RH}} = {\gamma_{\text{RH}} \cdot \left( \frac{\text{RH}_{board\_ ref}}{70} \right)}^{4.4} \cdot \ exp\left\lbrack 11604 \cdot 0.9 \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack 
```
````

All other parameters are issued from the mission profile. 

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-66')" placeholder="Search table...">

```{list-table} Basic failure rates $\lambda_{0}$ for filters.
:name: eee-table4-66
:header-rows: 1
:widths: 20 16 16 16 16 16

*   - Description of the component
    - $\lambda_{0\_ PassiveHFRF}$
    - $\gamma_{TH\_ EL}$
    - $\gamma_{TCy}$
    - $\gamma_{Mech}$
    - $\gamma_{RH}$
*   - “Fixed passive components for microwaves: Attenuator, load (50 Ohm), filter, power divider (combiner, splitter)”
    - 0.5
    - 0.01
    - 0.67
    - 0.30
    -  0.02
*   - “Variable passive components for microwaves: Variable attenuator, tuneable filter”
    - 1
    - 0.01
    - 0.67
    - 0.30
    -  0.02
*   - “Passive components with ferrites for microwaves, circulator, isolator, phase shifter”
    - 1
    - 0.01
    - 0.69
    - 0.30
    - 0 
```

**Induced factor $\Pi_{\text{induced}}$**

The $\Pi_{\text{induced}}$ factor allows taking into account the influence of the mission profile as described in paragraph {numref}`eee_4_3_1`. Its formula is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_89
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
````

> $\Pi_{placement}$

The Pi Placement depends on the function, there are 6 choices to choose as recalled here from {numref}`eee-table4-3`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-67')" placeholder="Search table...">

```{list-table} Recommendation for the definition of parameter $\Pi_{placement\_ i}$.
:name: eee-table4-67
:header-rows: 1
:widths: 70 30

*   - Description of the placement influence
    - $\Pi_{placement\_ i}$
*   - Digital non-interface function
    - 1.0
*   - Digital interface function
    - 1.6
*   - Analog low-level non-interface function (<1A)
    - 1.3
*   - Analog low-level interface function (<1A)
    - 2.0
*   - Analog power non-interface function (≥1A)
    - 1.6
*   - Analog power interface function (≥1A)
    - 2.5
```

> $\Pi_{application}$

$\Pi_{application}$ represents the influence of the type of application and the environment of the product containing the part. This factor varies depending on the phase of the profile.

It is evaluated through the questions presented in the following table and addressed in {numref}`eee_4_3_1_19`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_68')"
    placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{application\_ i}$ for the launch, time to reach orbit and in-orbit
:name: eee-table4-68

* - <table class="myTable" id="eee_table4_68">
        <thead>
            <th>
                <p><strong>Criterion</strong></p>
            </th>
            <th>
                <p><strong>Description</strong></p>
            </th>
            <th>
                <p><strong>Levels</strong></p>
            </th>
            <th>
                <p><strong>Examples and comments</strong></p>
            </th>
            <th>
                <p><strong>Weight</strong></p>
                <p><strong>POS</strong></p>
            </th>
        </thead>
        <tr>
            <td>
                <p>User type in the phase considered</p>
            </td>
            <td>
                <p>Represents the capability to respect procedures, facing operational constraints.</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Industry</strong></p>
                <p>1: General public</p>
                <p>2: Military</p>
                <p>The most severe level must be adopted for military applications</p>
            </td>
            <td>
                <p>20</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>User qualification level in the phase considered</p>
            </td>
            <td>
                <p>Represents the level of control of the user or the worker regarding an operational context</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Highly qualified</strong></p>
                <p>1: Qualified</p>
                <p>2: Slightly qualified or with little experience</p>
                <p>In some phases, the user to be considered is the person who does the maintenance or servicing</p>
            </td>
            <td>
                <p>10</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>System mobility</p>
            </td>
            <td>
                <p>Represents contingencies related to possibilities of the system being moved</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Few contingencies (fixed or stable environment)</strong></p>
                <p>1: Moderate contingencies</p>
                <p>2: Severe contingencies, large variability (automobile)</p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product manipulation</p>
            </td>
            <td>
                <p>Represents the possibility of false manipulations, shocks, drops, etc .</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Not manipulated</strong></p>
                <p>1: Manipulation without displacement or disassembly</p>
                <p>2: Manipulation with displacement or disassembly</p>
                <p>The severe level should be adopted if maintenance on the product is possible in the phase
                    considered</p>
            </td>
            <td>
                <p>15</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Type of electrical network for the system</p>
            </td>
            <td>
                <p>Represents the level of electrical disturbance expected on power supplies, signals and electrical
                    lines: power on, switching, power supply, connection/disconnection</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Undisturbed network (dedicated regulated power supply)</strong></p>
                <p>1: Slightly disturbed network</p>
                <p>2: Network subject to disturbances (on board network)</p>
                <p>The network type is a system data but that can be broken down and related to specific products
                </p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to human activity</p>
            </td>
            <td>
                <p>Represents exposure to contingencies related to human activity: shock, change in final use, etc.
                </p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Uninhabitable zone</strong></p>
                <p>1: Possible activity in the product zone</p>
                <p>2: Normal activity in the product zone</p>
                <p>The product can be exposed to human activity even if it is not handled itself during normal use
                </p>
            </td>
            <td>
                <p>8</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to machine disturbances</p>
            </td>
            <td>
                <p>Represents contingencies related to operation of machines, engines, actuators: shock,
                    overheating, electrical disturbances, pollutants, etc.</p>
            </td>
            <td>
                <p>0:Non aggressive</p>
                <p><strong>1: Moderate</strong></p>
                <p>2: Severe</p>
            </td>
            <td>
                <p>0: Null (telephone)</p>
                <p><strong>1: Indirect exposure (product in compartment)</strong></p>
                <p>2: Strong or direct exposure (product in engine area)</p>
            </td>
            <td>
                <p>3</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to the weather</p>
            </td>
            <td>
                <p>Represents exposure to rain, hail, frost, sandstorm, lightning, dust</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Null (home)</strong></p>
                <p>1: Indirect exposure (compartment, station hall)</p>
                <p>2: Outdoors (automobile engine)</p>
            </td>
            <td>
                <p>2</p>
            </td>
        </tr>
    </table>
```

A mark is given for each level: 1 for level 0, 3.2 for level 1 and 10 for level 2. This mark is multiplied by the weight ($P_{os}$) and the sum of all the products is divided by 66. For the present application here, we consider $\Pi_{application}$ = 1.1, the value determined in the frame of an Airbus Defence & Space observation project, for all in flight phases.

```{admonition} Note
:class: note

In bold in the table are the levels considered for the space environment (orbit raising and orbit keeping). They represent the typical environment met in space for satellites, hence the figure can be used for all in flight phases for all projects provided they don't present a specific application; in that case, it has to be re-evaluated.
```

> $\Pi_{\text{ruggedising}}$

The ruggedising factor is determined through a 16 questions audit ensuring the evaluation of the procedures established to guarantee the safety and maintenance of the product and that the procedures are indeed applied. See paragraph {numref}`eee_4_3_1_17`.

> $C_{\text{sensitivity}}$

The induced factor $C_{\text{sensitivity}}$ presented in paragraph {numref}`eee_4_3_1_21` is provided in the following table:

```{list-table} Induced factor coefficient of sensitivity for filters.
:name: eee-table4-69
:header-rows: 1
:widths: 70 30

*   - Technologies
    - $C_{\text{sensitivity}}$
*   - All filters
    - 2.60
```

```{admonition} Note
:class: note

For the 2021 issue of FIDES, this value has been updated to 2.40.
```

> **c) Component manufacturing factor $\Pi_{\text{PM}}$**

The Part\_Manufacturing factor presented in paragraph {numref}`eee_4_3_3` represents the quality of the component. This factor transcribes the confidence that can be attributed to the way the part has been manufactured, through factors quantifying the manufacturing process of the part, the tests ran and the confidence in the manufacturer.

Its high level formula is

${\pi_{\text{PM}} = e}^{1.39*\left( 1 - Part_{\text{Grade}} \right) - 0.69}$

With, for capacitors, $Part\_ Grade = \ \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \times \varepsilon}{24}$

These parameters are determined through tables available in FIDES.

-  $\text{QA}_{\text{manufacturer}}$ is presented in paragraph {numref}`eee_4_3_3_2`

-   $\text{QA}_{\text{component}}$ is presented in paragraph {numref}`eee_4_3_3_3` and defined in {numref}`eee-table4-70`

-   $\text{RA}_{\text{component}}$ is presented in {numref}`eee_4_3_3_4`

-   $\epsilon$  is presented in paragraph {numref}`eee_4_3_3_7`

Component manufacturing factor $\pi_{\text{PM}}$ according to paragraph {numref}`eee_4_3_3` with component quality assurance levels $\text{QA}_{\text{component}}$ defined in the following tables:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-70')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\text{QA}_{\text{component}}$ for filters.
:name: eee-table4-70
:header-rows: 1
:widths: 60 25 15

*   - Filters: Component quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{component}}$
*   - Qualification according to one of the following standards: AEC Q100, MIL-PRF-38535 class V/Y, MIL-PRF-38510 class S, ESCC 90xx, NASDA-QTS-xxxx classe I, NPSL NASA level 1
    - Higher
    - 3
*   - Qualification according to one of the following standards: MIL-PRF-38535 class Q, MIL-PRF-38535 class M, MIL-PRF-38535 class N, MIL-PRF-38510 class B, NASDA-QTSxxxx class II, NPSL NASA levels 2 and 3
    - Equivalent
    - 2
*   - Qualification program internal to the manufacturer and unidentified manufacturing sites
    - Lower
    - 1
*   - No information
    - Much
    - 0
```

> **d) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2_3`.

**Summary for the Fuses family 06**

<table class="myTable">
    <thead>
        <th><strong>Section</strong></th>
        <th><strong>Component types</strong></th>
        <th><strong>Modifications and adaptations for space applications</strong></th>
    </thead>
    <tr>
        <td>05</td>
        <td>Filters</td>
        <td>
            <p>Classification of I<sub>rated</sub> according to the standards IEC 60127-1 and UL 248-14 </p>
            <p>Value of Π<sub>Chi</sub> equal to 0.6</p>
        </td>
    </tr>
</table>


(eee_4_3_4_6)=
## Fuses (family 06)

Fuses are classified as family 06 in EPPL {cite:t}`eee-EPPL007-37`. All fuses used for Space applications can be modelled through FIDES. The pages where the models can be found in the two versions of the FIDES guide

The following table presents the different subfamilies and the corresponding models with the FIDES method.


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_71')"
    placeholder="Search table...">

```{list-table} Groups of fuses.
:name: eee-table4-71

* - <table class="myTable" id="eee_table4_71">
        <thead>
            <tr>
                <th rowspan="2"><strong>Groups of fuses.</strong></th>
                <th colspan="2"><strong>Models in FIDES 2009</strong></th>
                <th rowspan="2"><strong>Proposed models in FIDES</strong></th>
                <th rowspan="2"><strong>Remarks</strong></th>
            </tr>
            <tr>
                <th>2009</th>
                <th>2021</th>
            </tr>
        </thead>
        <tr>
            <td>01 Fuse/td>
            <td>p133</td>
            <td>p149</td>
            <td>“Fuse”</td>
            <td>ECFU</td>
        </tr>
    </table>
```

**General model for the fuses family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_90
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{LF}} \cdot \Pi_{\text{Process}}
```
-   $\lambda_{\text{Physical}}$ the physical contribution for each component,

-   $\Pi_{\text{PM}}$ the quality and technical control over manufacturing of the item,

-   $\Pi_{\text{Process}}$ the quality and technical control over the development, manufacturing and use process for the product containing the item,

-   $\Pi_{\text{LF}}$ the factor representing the process to become lead-free if it has to be considered for Space applications, it is equal to 1 (see paragraph {numref}`eee_4_3`).
````

All this being based on a mission profile to be defined for the whole unit.

With process factor $\Pi_{\text{Process}}$ according to Paragraph {numref}`eee_4_3_2_1`.

> **a) Mission profile**

In order to model the reliability for each component of a unit, it is necessary to define the mission profile corresponding to the unit under consideration. See paragraph {numref}`eee_4_3_1` for details.

> **b) Calculation of $\lambda_{\text{Physical}}$**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_91
\lambda_{\text{Physical}} = \lambda_{O_{\text{fuse}}} \cdot \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \left( \Pi_{\text{Thermal}} + \Pi_{\text{TCy}} + \Pi_{\text{Mechanical}} + \Pi_{\text{RH}} + \Pi_{\text{Chi}} \right)_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
```
````

Basic failure rate $\lambda_{O_{\text{fuse}}}$ is equal to 0.5 for all fuses.

**Physical stresses for the fuses family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_92
\Pi_{\text{Thermal}} = 0.13 \cdot \left( \frac{1}{0.8} \cdot \frac{I_{\text{applied}}}{I_{\text{rated}}} \right)^{1.5} \cdot exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

$E_{a}$ = 0.15eV;

$I_{\text{applied}}$ is the current in the fuse during the considered phase

$I_{\text{rated}}$ is the rated current in the fuse without opening for an ambient temperature of 20°C. This value is equal to:

-   rated current for fuses following standard IEC 60127-1 {cite:t}`eee-IEC-60127-1`

-   75% of rated current for fuses following standard UL 248-14 {cite:t}`eee-UL-248-14`


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_93
\Pi_{\text{Tcy}} = 0.51 \cdot \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{min(\theta_{\text{cy}},2)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{1.9} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack\            
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_94
\Pi_{\text{Mechanical}} = 0.06 \cdot \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}
```
````


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_95
\Pi_{\text{RH}} = 0.24 \cdot \left( \frac{\text{RH}_{board\_ ref}}{70} \right)^{4.4} \cdot \ exp\left\lbrack 11604 \cdot 0.8 \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

All other parameters are issued from the mission profile. 

As the chemical stresses are low for space applications, the value $\Pi_{\text{Chi}}$ should be equal to 0.6.

**Induced factor $\Pi_{\text{induced}}$**

The $\Pi_{\text{induced}}$ factor allows taking into account the influence of the mission profile as described in paragraph {numref}`eee_4_3_1`. Its formula is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_96
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
````

> $\Pi_{placement}$

The Pi Placement depends on the function, there are 6 choices to choose as recalled here from {numref}`eee-table4-3`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-72')" placeholder="Search table...">

```{list-table} Recommendation for the definition of parameter $\Pi_{placement\_ i}$.
:name: eee-table4-72
:header-rows: 1
:widths: 70 30

*   - Description of the placement influence
    - $\Pi_{placement\_ i}$
*   - Digital non-interface function
    - 1.0
*   - Digital interface function
    - 1.6
*   - Analog low-level non-interface function (<1A)
    - 1.3
*   - Analog low-level interface function (<1A)
    - 2.0
*   - Analog power non-interface function (≥1A)
    - 1.6
*   - Analog power interface function (≥1A)
    - 2.5
```

> $\Pi_{application}$

$\Pi_{application}$ represents the influence of the type of application and the environment of the product containing the part. This factor varies depending on the phase of the profile.

It is evaluated through the questions presented in the following table and addressed in {numref}`eee_4_3_1_19`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_73')"
    placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{application\_ i}$ for the launch, time to reach orbit and in-orbit
:name: eee-table4-73

* - <table class="myTable" id="eee_table4_73">
        <thead>
            <th>
                <p><strong>Criterion</strong></p>
            </th>
            <th>
                <p><strong>Description</strong></p>
            </th>
            <th>
                <p><strong>Levels</strong></p>
            </th>
            <th>
                <p><strong>Examples and comments</strong></p>
            </th>
            <th>
                <p><strong>Weight</strong></p>
                <p><strong>POS</strong></p>
            </th>
        </thead>
        <tr>
            <td>
                <p>User type in the phase considered</p>
            </td>
            <td>
                <p>Represents the capability to respect procedures, facing operational constraints.</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Industry</strong></p>
                <p>1: General public</p>
                <p>2: Military</p>
                <p>The most severe level must be adopted for military applications</p>
            </td>
            <td>
                <p>20</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>User qualification level in the phase considered</p>
            </td>
            <td>
                <p>Represents the level of control of the user or the worker regarding an operational context</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Highly qualified</strong></p>
                <p>1: Qualified</p>
                <p>2: Slightly qualified or with little experience</p>
                <p>In some phases, the user to be considered is the person who does the maintenance or servicing</p>
            </td>
            <td>
                <p>10</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>System mobility</p>
            </td>
            <td>
                <p>Represents contingencies related to possibilities of the system being moved</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Few contingencies (fixed or stable environment)</strong></p>
                <p>1: Moderate contingencies</p>
                <p>2: Severe contingencies, large variability (automobile)</p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product manipulation</p>
            </td>
            <td>
                <p>Represents the possibility of false manipulations, shocks, drops, etc .</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Not manipulated</strong></p>
                <p>1: Manipulation without displacement or disassembly</p>
                <p>2: Manipulation with displacement or disassembly</p>
                <p>The severe level should be adopted if maintenance on the product is possible in the phase
                    considered</p>
            </td>
            <td>
                <p>15</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Type of electrical network for the system</p>
            </td>
            <td>
                <p>Represents the level of electrical disturbance expected on power supplies, signals and electrical
                    lines: power on, switching, power supply, connection/disconnection</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Undisturbed network (dedicated regulated power supply)</strong></p>
                <p>1: Slightly disturbed network</p>
                <p>2: Network subject to disturbances (on board network)</p>
                <p>The network type is a system data but that can be broken down and related to specific products
                </p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to human activity</p>
            </td>
            <td>
                <p>Represents exposure to contingencies related to human activity: shock, change in final use, etc.
                </p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Uninhabitable zone</strong></p>
                <p>1: Possible activity in the product zone</p>
                <p>2: Normal activity in the product zone</p>
                <p>The product can be exposed to human activity even if it is not handled itself during normal use
                </p>
            </td>
            <td>
                <p>8</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to machine disturbances</p>
            </td>
            <td>
                <p>Represents contingencies related to operation of machines, engines, actuators: shock,
                    overheating, electrical disturbances, pollutants, etc.</p>
            </td>
            <td>
                <p>0:Non aggressive</p>
                <p><strong>1: Moderate</strong></p>
                <p>2: Severe</p>
            </td>
            <td>
                <p>0: Null (telephone)</p>
                <p><strong>1: Indirect exposure (product in compartment)</strong></p>
                <p>2: Strong or direct exposure (product in engine area)</p>
            </td>
            <td>
                <p>3</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to the weather</p>
            </td>
            <td>
                <p>Represents exposure to rain, hail, frost, sandstorm, lightning, dust</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Null (home)</strong></p>
                <p>1: Indirect exposure (compartment, station hall)</p>
                <p>2: Outdoors (automobile engine)</p>
            </td>
            <td>
                <p>2</p>
            </td>
        </tr>
    </table>
```

A mark is given for each level: 1 for level 0, 3.2 for level 1 and 10 for level 2. This mark is multiplied by the weight ($P_{os}$) and the sum of all the products is divided by 66. For the present application here, we consider $\Pi_{application}$ = 1.1, the value determined in the frame of an Airbus Defence & Space observation project, for all in flight phases.

```{admonition} Note
:class: note

In bold in the table are the levels considered for the space environment (orbit raising and orbit keeping). They represent the typical environment met in space for satellites, hence the figure can be used for all in flight phases for all projects provided they don't present a specific application; in that case, it has to be re-evaluated.
```

> $\Pi_{\text{ruggedising}}$

The ruggedising factor is determined through a 16 questions audit ensuring the evaluation of the procedures established to guarantee the safety and maintenance of the product and that the procedures are indeed applied. See paragraph {numref}`eee_4_3_1_17`.

> $C_{\text{sensitivity}}$

The induced factor $C_{\text{sensitivity}}$ presented in paragraph {numref}`eee_4_3_1_21` is provided in the following table:

```{list-table} Induced factor coefficient of sensitivity for fuses.
:name: eee-table4-74
:header-rows: 1
:widths: 70 30

*   - Technologies
    - $C_{\text{sensitivity}}$
*   - Fuses
    - 5.80
```

```{admonition} Note
:class: note

For the 2021 issue of FIDES, this value has been updated to 5.90.
```

> **c) Component manufacturing factor $\Pi_{\text{PM}}$**

The Part\_Manufacturing factor presented in paragraph {numref}`eee_4_3_3` represents the quality of the component. This factor transcribes the confidence that can be attributed to the way the part has been manufactured, through factors quantifying the manufacturing process of the part, the tests ran and the confidence in the manufacturer.

Its high level formula is

${\pi_{\text{PM}} = e}^{1.39*\left( 1 - Part_{\text{Grade}} \right) - 0.69}$

With, for capacitors, $Part\_ Grade = \ \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \times \varepsilon}{24}$

These parameters are determined through tables available in FIDES.

-  $\text{QA}_{\text{manufacturer}}$ is presented in paragraph {numref}`eee_4_3_3_2`

-   $\text{QA}_{\text{component}}$ is presented in paragraph {numref}`eee_4_3_3_3` and defined in {numref}`eee-table4-75`

-   $\text{RA}_{\text{component}}$ is presented in {numref}`eee_4_3_3_4`

-   $\epsilon$  is presented in paragraph {numref}`eee_4_3_3_7`

Component manufacturing factor $\pi_{\text{PM}}$ according to paragraph {numref}`eee_4_3_3` with component quality assurance levels $\text{QA}_{\text{component}}$ defined in the following tables:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-75')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\text{QA}_{\text{component}}$ for fuses.
:name: eee-table4-75
:header-rows: 1
:widths: 60 25 15

*   - Diodes: Component quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{component}}$
*   - Qualification according to one of the following standards: ESCC 4008, MIL-PRF-23419/08/12 or equivalent
    - Higher
    - 3
*   - Qualification according to one of the following standards: IEC 60127 or equivalent
    - Equivalent
    - 2
*   - Qualification program internal to the manufacturer and unidentified manufacturing sites
    - Lower
    - 1
*   - No information
    - Much
    - 0
```

> **d) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2_3`.

**Summary for the Fuses family 06**

<table class="myTable">
    <thead>
        <th><strong>Section</strong></th>
        <th><strong>Component types</strong></th>
        <th><strong>Modifications and adaptations for space applications</strong></th>
    </thead>
    <tr>
        <td>06</td>
        <td>Fuses</td>
        <td>
            <p>Classification of I<sub>rated</sub> according to the standards IEC 60127-1 and UL 248-14 </p>
            <p>Value of Π<sub>Chi</sub> equal to 0.6</p>
        </td>
    </tr>
</table>

(eee_4_3_4_7)=
## Inductors (family 07)

Inductors are classified as family 07 in EPPL {cite:t}`eee-EPPL007-37`. 

All inductors used for Space applications can be modelled through FIDES. The pages where the models can be found in the two versions of the FIDES guide
The following table presents the different subfamilies and the corresponding models with the FIDES method.


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_76')"
    placeholder="Search table...">

```{list-table} Groups of inductors.
:name: eee-table4-76

* - <table class="myTable" id="eee_table4_76">
        <thead>
            <tr>
                <th rowspan="2"><strong>Groups of inductors.</strong></th>
                <th colspan="2"><strong>Models in FIDES 2009</strong></th>
                <th rowspan="2"><strong>Proposed models in FIDES</strong></th>
                <th rowspan="2"><strong>Remarks</strong></th>
            </tr>
            <tr>
                <th>2009</th>
                <th>2021</th>
            </tr>
        </thead>
        <tr>
            <td>01 RF coils</td>
            <td>
                <p>p142</p>
                <p>p142</p>
                <p>p181</p>
            </td>
            <td>
                <p>p160</p>
                <p>p160</p>
                <p>p199</p>
            </td>
            <td>
                <p>“Low current wirewound inductor”</p>
                <p>“High current (or power) wirewound inductor”</p>
                <p>“HF RF inductors”</p>
            </td>
            <td>
                <p>ECIN_01</p>
                <p>ECIN_02</p>
                <p>HFHI</p>
            </td>
        </tr>
        <tr>
            <td>02 Cores</td>
            <td>No/Yes</td>
            <td>No/Yes</td>
            <td>Not usually used in space applications, no more present in the EPPL but recommendation to use “Multi-layer
                inductor”</td>
            <td>ECIN_03</td>
        </tr>
        <tr>
            <td>03 Chip</td>
            <td>
                <p>p142</p>
                <p>p142</p>
                <p>p142</p>
            </td>
            <td>
                <p>p160</p>
                <p>p160</p>
                <p>p160</p>
            </td>
            <td>
                <p>“Low current wirewound inductor”,</p>
                <p>“High current (or power) wirewound inductor”,</p>
                <p>“Multi-layer inductor”</p>
            </td>
            <td>
                <p>ECIN_01</p>
                <p>ECIN_02</p>
                <p>ECIN_03</p>
            </td>
        </tr>
        <tr>
            <td>Ferrite switch</td>
            <td>No/Yes</td>
            <td>No/Yes</td>
            <td>“Low current wirewound inductor” for EEE part only</td>
            <td>ECIN_01</td>
        </tr>
    </table>
```

```{admonition} Note
:class: note

Core means coil without winding. 
```

**General model for the inductors family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_97
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{LF}} \cdot \Pi_{\text{Process}}
```
-   $\lambda_{\text{Physical}}$ the physical contribution for each component,

-   $\Pi_{\text{PM}}$ the quality and technical control over manufacturing of the item,

-   $\Pi_{\text{Process}}$ the quality and technical control over the development, manufacturing and use process for the product containing the item,

-   $\Pi_{\text{LF}}$ the factor representing the process to become lead-free if it has to be considered for Space applications, it is equal to 1 (see paragraph {numref}`eee_4_3`).
````

All this being based on a mission profile to be defined for the whole unit.

> **a) Mission profile**

In order to model the reliability for each component of a unit, it is necessary to define the mission profile corresponding to the unit under consideration. See paragraph {numref}`eee_4_3_1` for details.

> **b) Calculation of $\lambda_{\text{Physical}}$**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_98
\lambda_{\text{Physical}} = \lambda_{O_{\text{Magnetic}}} \cdot \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \left( \Pi_{Thermo\_ electrical} + \Pi_{\text{TCy}} + \Pi_{\text{Mechanical}} \right)_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
```
````

$\lambda_{O_{\text{Magnetic}}}$ corresponds to the basic failure rate defined for sub-groups within the mentioned groups:

-   For low current wirewound inductors, $\lambda_{O_{\text{Magnetic}}}$is equal to 0.025;

-   For high current (or power) wirewound inductors and multi-layer inductors, $\lambda_{O_{\text{Magnetic}}}$ is equal to 0.05.

**Physical stresses for the inductors family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_99
\Pi_{Thermo - electrical} = \gamma_{TH\_ EL} \cdot exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

$E_{a}$ = 0.15eV;

$\gamma_{TH\_ EL}$ depends on the type of inductors:

-   For low current wirewound inductors, $\gamma_{TH\_ EL}$ is equal to 0.01;

-   For high current (or power) wirewound inductors, $\gamma_{TH\_ EL}$ is equal to 0.09;

-   For multi-layer inductors, $\gamma_{TH\_ EL}$ is equal to 0.71.

All other parameters are issued from the mission profile.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_100
\Pi_{\text{Tcy}} = \gamma_{\text{TCy}} \cdot \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{min(\theta_{\text{cy}},2)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{1.9} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```
````

$\Pi_{\text{Tcy}}$ depends on the type of inductors:

-   For low current wirewound inductors,$\Pi_{\text{Tcy}}$ is equal to 0.73;

-   For high current (or power) wirewound inductors, $\Pi_{\text{Tcy}}$ is equal to 0.79;

-   For multi-layer inductors, $\Pi_{\text{Tcy}}$ is equal to 0.28.

All other parameters are issued from the mission profile

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_101
\Pi_{\text{Mechanical}} = \gamma_{\text{Mech}} \cdot \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}
```
````

$\gamma_{\text{Mech}}$ depends on the type of inductors:

-   For low current wirewound inductors, $\gamma_{\text{Mech}}$ is equal to 0.26;

-   For high current (or power) wirewound inductors, $\gamma_{\text{Mech}}$ is equal to 0.12;

-   For multi-layer inductors, $\gamma_{\text{Mech}}$ is equal to 0.01.

All other parameters are issued from the mission profile.


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-77')" placeholder="Search table...">

```{list-table} Basic failure rates $\lambda_{0}$ for inductors.
:name: eee-table4-77
:header-rows: 1
:widths: 20 16 16 16 16 16

*   - Description of the component
    - $\lambda_{0\_ \text{mag}}$
    - $\gamma_{TH\_ EL}$
    - $\gamma_{TCy}$
    - $\gamma_{Mech}$
    - $\Delta Τ \text{(°C)}$
*   - “Low current wirewound inductor”
    - 0.025
    - 0.01
    - 0.73
    - 0.26
    - 10
*   - “High current (or power) wirewound inductor”
    - 0.05
    - 0.09
    - 0.79
    - 0.12
    - 30
*   - “Multi-layer inductor”
    - 0.05
    - 0.71
    - 0.28
    - 0.01
    - 10
```

**Induced factor $\Pi_{\text{induced}}$**

The $\Pi_{\text{induced}}$ factor allows taking into account the influence of the mission profile as described in paragraph {numref}`eee_4_3_1`. Its formula is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_102
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
````

> $\Pi_{placement}$

The Pi Placement depends on the function, there are 6 choices to choose as recalled here from {numref}`eee-table4-3`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-78')" placeholder="Search table...">

```{list-table} Recommendation for the definition of parameter $\Pi_{placement\_ i}$.
:name: eee-table4-78
:header-rows: 1
:widths: 70 30

*   - Description of the placement influence
    - $\Pi_{placement\_ i}$
*   - Digital non-interface function
    - 1.0
*   - Digital interface function
    - 1.6
*   - Analog low-level non-interface function (<1A)
    - 1.3
*   - Analog low-level interface function (<1A)
    - 2.0
*   - Analog power non-interface function (≥1A)
    - 1.6
*   - Analog power interface function (≥1A)
    - 2.5
```

> $\Pi_{application}$

$\Pi_{application}$ represents the influence of the type of application and the environment of the product containing the part. This factor varies depending on the phase of the profile.

It is evaluated through the questions presented in the following table and addressed in {numref}`eee_4_3_1_19`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_79')"
    placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{application\_ i}$ for the launch, time to reach orbit and in-orbit
:name: eee-table4-79

* - <table class="myTable" id="eee_table4_79">
        <thead>
            <th>
                <p><strong>Criterion</strong></p>
            </th>
            <th>
                <p><strong>Description</strong></p>
            </th>
            <th>
                <p><strong>Levels</strong></p>
            </th>
            <th>
                <p><strong>Examples and comments</strong></p>
            </th>
            <th>
                <p><strong>Weight</strong></p>
                <p><strong>POS</strong></p>
            </th>
        </thead>
        <tr>
            <td>
                <p>User type in the phase considered</p>
            </td>
            <td>
                <p>Represents the capability to respect procedures, facing operational constraints.</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Industry</strong></p>
                <p>1: General public</p>
                <p>2: Military</p>
                <p>The most severe level must be adopted for military applications</p>
            </td>
            <td>
                <p>20</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>User qualification level in the phase considered</p>
            </td>
            <td>
                <p>Represents the level of control of the user or the worker regarding an operational context</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Highly qualified</strong></p>
                <p>1: Qualified</p>
                <p>2: Slightly qualified or with little experience</p>
                <p>In some phases, the user to be considered is the person who does the maintenance or servicing</p>
            </td>
            <td>
                <p>10</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>System mobility</p>
            </td>
            <td>
                <p>Represents contingencies related to possibilities of the system being moved</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Few contingencies (fixed or stable environment)</strong></p>
                <p>1: Moderate contingencies</p>
                <p>2: Severe contingencies, large variability (automobile)</p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product manipulation</p>
            </td>
            <td>
                <p>Represents the possibility of false manipulations, shocks, drops, etc .</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Not manipulated</strong></p>
                <p>1: Manipulation without displacement or disassembly</p>
                <p>2: Manipulation with displacement or disassembly</p>
                <p>The severe level should be adopted if maintenance on the product is possible in the phase
                    considered</p>
            </td>
            <td>
                <p>15</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Type of electrical network for the system</p>
            </td>
            <td>
                <p>Represents the level of electrical disturbance expected on power supplies, signals and electrical
                    lines: power on, switching, power supply, connection/disconnection</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Undisturbed network (dedicated regulated power supply)</strong></p>
                <p>1: Slightly disturbed network</p>
                <p>2: Network subject to disturbances (on board network)</p>
                <p>The network type is a system data but that can be broken down and related to specific products
                </p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to human activity</p>
            </td>
            <td>
                <p>Represents exposure to contingencies related to human activity: shock, change in final use, etc.
                </p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Uninhabitable zone</strong></p>
                <p>1: Possible activity in the product zone</p>
                <p>2: Normal activity in the product zone</p>
                <p>The product can be exposed to human activity even if it is not handled itself during normal use
                </p>
            </td>
            <td>
                <p>8</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to machine disturbances</p>
            </td>
            <td>
                <p>Represents contingencies related to operation of machines, engines, actuators: shock,
                    overheating, electrical disturbances, pollutants, etc.</p>
            </td>
            <td>
                <p>0:Non aggressive</p>
                <p><strong>1: Moderate</strong></p>
                <p>2: Severe</p>
            </td>
            <td>
                <p>0: Null (telephone)</p>
                <p><strong>1: Indirect exposure (product in compartment)</strong></p>
                <p>2: Strong or direct exposure (product in engine area)</p>
            </td>
            <td>
                <p>3</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to the weather</p>
            </td>
            <td>
                <p>Represents exposure to rain, hail, frost, sandstorm, lightning, dust</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Null (home)</strong></p>
                <p>1: Indirect exposure (compartment, station hall)</p>
                <p>2: Outdoors (automobile engine)</p>
            </td>
            <td>
                <p>2</p>
            </td>
        </tr>
    </table>
```

A mark is given for each level: 1 for level 0, 3.2 for level 1 and 10 for level 2. This mark is multiplied by the weight ($P_{os}$) and the sum of all the products is divided by 66. For the present application here, we consider $\Pi_{application}$ = 1.1, the value determined in the frame of an Airbus Defence & Space observation project, for all in flight phases.

```{admonition} Note
:class: note

In bold in the table are the levels considered for the space environment (orbit raising and orbit keeping). They represent the typical environment met in space for satellites, hence the figure can be used for all in flight phases for all projects provided they don't present a specific application; in that case, it has to be re-evaluated.
```

> $\Pi_{\text{ruggedising}}$

The ruggedising factor is determined through a 16 questions audit ensuring the evaluation of the procedures established to guarantee the safety and maintenance of the product and that the procedures are indeed applied. See paragraph {numref}`eee_4_3_1_17`.

> $C_{\text{sensitivity}}$

The induced factor $C_{\text{sensitivity}}$ presented in paragraph {numref}`eee_4_3_1_21` is provided in the following table:

```{list-table} Induced factor coefficient of sensitivity for fuses.
:name: eee-table4-80
:header-rows: 1
:widths: 70 30

*   - Technologies
    - $C_{\text{sensitivity}}$
*   - Low current wirewound inductors
    - 4.05
*   - High current (or power) wirewound inductors
    - 8.05
*   - Multi-layer inductors
    - 4.40
```

```{admonition} Note
:class: note

For the 2021 issue of FIDES, these values have been updated to respectively 4.73, 6.58 and 4.30.
```

> **c) Component manufacturing factor $\Pi_{\text{PM}}$**

The Part\_Manufacturing factor presented in paragraph {numref}`eee_4_3_3` represents the quality of the component. This factor transcribes the confidence that can be attributed to the way the part has been manufactured, through factors quantifying the manufacturing process of the part, the tests ran and the confidence in the manufacturer.

Its high level formula is

${\pi_{\text{PM}} = e}^{1.39*\left( 1 - Part_{\text{Grade}} \right) - 0.69}$

With, for capacitors, $Part\_ Grade = \ \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \times \varepsilon}{24}$

These parameters are determined through tables available in FIDES.

-  $\text{QA}_{\text{manufacturer}}$ is presented in paragraph {numref}`eee_4_3_3_2`

-   $\text{QA}_{\text{component}}$ is presented in paragraph {numref}`eee_4_3_3_3` and defined in {numref}`eee-table4-81`

-   $\text{RA}_{\text{component}}$ is presented in {numref}`eee_4_3_3_4`

-   $\epsilon$  is presented in paragraph {numref}`eee_4_3_3_7`

Component manufacturing factor $\pi_{\text{PM}}$ according to paragraph {numref}`eee_4_3_3` with component quality assurance levels $\text{QA}_{\text{component}}$ defined in the following tables:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-81')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\text{QA}_{\text{component}}$ for inductors.
:name: eee-table4-81
:header-rows: 1
:widths: 60 25 15

*   - Diodes: Component quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{component}}$
*   - Qualification according to one of the following standards: AEC Q200, MIL-STD-981 class S, MIL-PRF-xxx level T, ESCC 320x, NASDA-QTS-xxxx class I
    - Higher
    - 3
*   - Qualification according to one of the following standards: MIL-STD-981 class B, MIL-PRF-xxx level M, NASDA-QTS-xxxx class II with identification of manufacturing sites for these standards, qualification according to approved CECC standards.
    - Equivalent
    - 2
*   - Qualification according to one of the following MIL-PRF-xxxx level C, or qualification program internal to the manufacturer and unidentified manufacturing sites
    - Lower
    - 1
*   - No information
    - Much
    - 0
```

> **d) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2_3`.

**Summary for the Fuses family 06**

<table class="myTable">
    <thead>
        <th><strong>Section</strong></th>
        <th><strong>Component types</strong></th>
        <th><strong>Modifications and adaptations for space applications</strong></th>
    </thead>
    <tr>
        <td>07</td>
        <td>Inductors</td>
        <td>
            <p>-</p>
        </td>
    </tr>
</table>

(eee_4_3_4_8)=
## Integrated Circuits (Family 08)

Integrated circuits are classified as family 08 in EPPL {cite:t}`eee-EPPL007-37`. 

All integrated circuits used for Space applications can be modelled through FIDES. The pages where the models can be found in the two versions of the FIDES guide

The following table presents the different subfamilies and the corresponding models with the FIDES method.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_82')"
    placeholder="Search table...">

```{list-table} Groups of integrated circuits.
:name: eee-table4-82

* - <table class="myTable" id="eee_table4_82">
        <thead>
            <tr>
                <th rowspan="2"><strong>Groups of integrated circuits</strong></th>
                <th colspan="2"><strong>Models in FIDES 2009</strong></th>
                <th rowspan="2"><strong>Proposed models in FIDES</strong></th>
                <th rowspan="2"><strong>Remarks</strong></th>
            </tr>
            <tr>
                <th>2009</th>
                <th>2021</th>
            </tr>
        </thead>
        <tr>
            <td>10 Microprocessor / Microcontroller / Peripheral</td>
            <td>p111</td>
            <td>p123</td>
            <td>“Microprocessor, Microcontroller, DSP”</td>
            <td>ECIC_59</td>
        </tr>
        <tr>
            <td>20 Memory SRAM</td>
            <td>p111</td>
            <td>p123</td>
            <td>“SRAM”</td>
            <td>ECIC_61</td>
        </tr>
        <tr>
            <td>21 Memory DRAM/SDRAM</td>
            <td>p111</td>
            <td>p123</td>
            <td>No more present in the EPPL list Error: Reference source not found but recommendation to use “DRAM”</td>
            <td>ECIC_62</td>
        </tr>
        <tr>
            <td>22 Memory PROM</td>
            <td>p111</td>
            <td>p123</td>
            <td>Not used in space applications &amp; no more present in the EPPL</td>
            <td>NA</td>
        </tr>
        <tr>
            <td>23 Memory EPROM</td>
            <td>p111</td>
            <td>p123</td>
            <td>No more present in the EPPL but recommendation to use “Flash, EEPROM, EPROM”</td>
            <td>ECIC_60</td>
        </tr>
        <tr>
            <td>24 Memory EEPROM</td>
            <td>p111</td>
            <td>p123</td>
            <td>No more present in the EPPL but recommendation to use “Flash, EEPROM, EPROM”</td>
            <td>ECIC_60</td>
        </tr>
        <tr>
            <td>30 Programmable Logic</td>
            <td>p111</td>
            <td>p123</td>
            <td>No more present in the EPPL but recommendation to use “FPGA, CPLD, FPGA Antifuse, PAL”</td>
            <td>ECIC_58</td>
        </tr>
        <tr>
            <td>40 ASIC Technologies Digital</td>
            <td>p117</td>
            <td>p130</td>
            <td>
                <p><strong>ASIC model </strong></p>
                <p>“MOS Silicon, Digital ASIC, simple function”,</p>
                <p>“MOS Silicon, Digital ASIC, complex function”,</p>
                <p>“Silicon Bipolar, BICMOS Digital ASIC”</p>
            </td>
            <td>
                <p><strong>ECAS</strong></p>
                <p>ECAS_01</p>
                <p>ECAS_02</p>
                <p>ECAS_04</p>
            </td>
        </tr>
        <tr>
            <td>41 ASIC Technologies Linear</td>
            <td>p117</td>
            <td>p130</td>
            <td>
                <p>No more present in the EPPL but recommendation to use ASIC model</p>
                <p>“Silicon bipolar, BICMOS, Mixed, analogue ASIC”</p>
            </td>
            <td>ECAS_05</td>
        </tr>
        <tr>
            <td>42 ASIC Technologies Mixed Analog / Digital</td>
            <td>p117</td>
            <td>p130</td>
            <td>
                <p>No more present in the EPPL but recommendation to use ASIC model</p>
                <p>“MOS silicon, Analogue, mixed ASIC”,</p>
                <p>“Silicon bipolar, BICMOS, Mixed, analogue ASIC”</p>
            </td>
            <td>
                <p>ECAS_03</p>
                <p>ECAS_05</p>
            </td>
        </tr>
        <tr>
            <td>50 Linear Operational Amplifier</td>
            <td>p111</td>
            <td>p123</td>
            <td>“Analogue and hybrid circuit (MOS, bipolar, BiCMOS)”</td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>51 Linear Sample And Hold Amplifier</td>
            <td>p111</td>
            <td>p123</td>
            <td>No more present in the EPPL but recommendation to use “Analogue and hybrid circuit (MOS, bipolar, BiCMOS)”
            </td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>52 Linear Voltage Reference / Regulator</td>
            <td>p111</td>
            <td>p123</td>
            <td>“Analogue and hybrid circuit (MOS, bipolar, BiCMOS)”</td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>53 Linear Voltage Comparator</td>
            <td>p111</td>
            <td>p123</td>
            <td>“Analogue and hybrid circuit (MOS, bipolar, BiCMOS)”</td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>54 Linear Switching Regulator</td>
            <td>p111</td>
            <td>p123</td>
            <td>“Analogue and hybrid circuit (MOS, bipolar, BiCMOS)”</td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>55 Linear Line Driver</td>
            <td>p111</td>
            <td>p123</td>
            <td>“Analogue and hybrid circuit (MOS, bipolar, BiCMOS)”</td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>56 Linear Line Receiver</td>
            <td>p111</td>
            <td>p123</td>
            <td>“Analogue and hybrid circuit (MOS, bipolar, BiCMOS)”</td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>57 Linear Timer</td>
            <td>p111</td>
            <td>p123</td>
            <td>No more present in the EPPL list Error: Reference source not found but recommendation to use “Analogue and
                hybrid circuit (MOS, bipolar, BiCMOS)”</td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>58 Linear Multiplier</td>
            <td>p111</td>
            <td>p123</td>
            <td>No more present in the EPPL list Error: Reference source not found but recommendation to use “Analogue and
                hybrid circuit (MOS, bipolar, BiCMOS)”</td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>59 Linear Switches</td>
            <td>p111</td>
            <td>p123</td>
            <td>No more present in the EPPL list Error: Reference source not found but recommendation to use “Analogue and
                hybrid circuit (MOS, bipolar, BiCMOS)”</td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>60 Linear Multiplexers / Demultiplexer</td>
            <td>p111</td>
            <td>p123</td>
            <td>“Analogue and hybrid circuit (MOS, bipolar, BiCMOS)”</td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>61 Linear Analog To Digital Converter</td>
            <td>p111</td>
            <td>p123</td>
            <td>“Analogue and hybrid circuit (MOS, bipolar, BiCMOS)”</td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>62 Linear Digital To Analog Converter</td>
            <td>p111</td>
            <td>p123</td>
            <td>“Analogue and hybrid circuit (MOS, bipolar, BiCMOS)”</td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>69 Linear Other Functions</td>
            <td>p111</td>
            <td>p123</td>
            <td>“Analogue and hybrid circuit (MOS, bipolar, BiCMOS)”</td>
            <td>ECIS_58</td>
        </tr>
        <tr>
            <td>80 Logic Families</td>
            <td>p111</td>
            <td>p123</td>
            <td>“Digital circuit (MOS, bipolar, BiCMOS)</td>
            <td>ECIC_63</td>
        </tr>
        <tr>
            <td>95 Microwave Monolithic Integrated Circuits (MMIC)</td>
            <td>182</td>
            <td>208</td>
            <td>
                <p><strong><span class="underline">RF HF integrated circuits models</span></strong></p>
                <p><strong><span class="underline">“Si, SiGe integrated circuit”</span></strong></p>
                <p>Si RF and HF (MOS) analogue circuit (power amplifier)</p>
                <p>Si, SiGe Analogue and mixed circuit (MOS, Bipolar, BiCMOS, MOSFET, PHEMT, HBT) including RF and HF</p>
                <p>Si, SiGe RF and HF digital circuit (MOS, bipolar BiCMOS)</p>
                <p><strong><span class="underline">“GaAs integrated circuit”</span></strong></p>
                <p>GaAs, RF and HF analogue circuit (power amplifier)</p>
                <p>GaAs Analogue and mixed circuit (MOS, Bipolar, BiCMOS, MOSFET, PHEMT, HBT) including RF and HF</p>
                <p>“GaN integrated circuit”*</p>
            </td>
            <td>
                <p><span class="underline">HFSI</span></p>
                <p>HFSI-02</p>
                <p>HFSI_03</p>
                <p>HFSI_04</p>
                <p><span class="underline">HFAS</span></p>
                <p>HFAS_01</p>
                <p>HFAS_03</p>
                <p>TBD 2021</p>
            </td>
        </tr>
    </table>
```

```{admonition} Note
:class: note

In the 2021 issue of FIDES, a GaN MMIC model has been included. The detail is provided in 4.4.2.3, as it has not yet been assessed and is just a proposition for the user.
```

(eee_4_3_4_8_1)=
### MMIC (95 family)

**General model for the integrated circuits family, except ASIC components:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_103
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{LF}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessHFRF}}
```
-   $\lambda_{\text{Physical}}$ the physical contribution for each component,

-   $\Pi_{\text{PM}}$ the quality and technical control over manufacturing of the item,

-   $\Pi_{\text{Process}}$ the quality and technical control over the development, manufacturing and use process for the product containing the item,
-   $\Pi_{\text{ProcessHFRF}}$ the quality and technical control over the development, manufacturing and use process for the RFHF item

-   $\Pi_{\text{LF}}$ the factor representing the process to become lead-free if it has to be considered for Space applications, it is equal to 1 (see paragraph {numref}`eee_4_3`).
````

All this being based on a mission profile to be defined for the whole unit.

> **a) Mission profile**

In order to model the reliability for each component of a unit, it is necessary to define the mission profile corresponding to the unit under consideration. See paragraph {numref}`eee_4_3_1` for details.

> **b) Calculation of $\lambda_{\text{Physical}}$**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_104
\lambda_{\text{Physical}} = \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \begin{pmatrix} 
  {\lambda_{\text{OTH}} \cdot \Pi}_{\text{Thermal}} \\                                                                                        
  {+ \lambda_{\text{OTCyCase}} \cdot \Pi}_{\text{TCyCase}} \\                                                                                 
  \begin{matrix}                                                                                                                                
  {+ \lambda_{\text{OTCySolderjoints}} \cdot \Pi}_{\text{TCySolderjoints}} \\                                                                 
  {+ \lambda_{\text{ORH}} \cdot \Pi}_{\text{RH}} \\                                                                                           
   + \lambda_{\text{OMech}} \cdot \Pi_{\text{Mech}} \\                                                                                        
  \end{matrix} \\                                                                                                                               
  \end{pmatrix}_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
```
````

$\lambda_{\text{OTH}}$ is a fixed value given in the following table, depending on the type of components.


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-83')" placeholder="Search table...">

```{list-table} Basic failure rates $\lambda_{\text{OTH}}$ for integrated circuits.
:name: eee-table4-83
:header-rows: 1
:widths: 70 10 20

*   - Type
    - Groups
    - $\lambda_{\text{OTH}}$
*   - Si, Ge Integrated Circuit
    -
    - 
*   - Si RF and HF (MOS) analogue circuit (power amplifier)
    -
    - 0.53
*   - Si, SiGe Analogue and mixed circuit (MOS, Bipolar, BiCMOS, MOSFET, PHEMT, HBT) including RF and HF
    -
    - 0.19
*   - Si, SiGe RF and HF digital circuit (MOS, bipolar BiCMOS)
    -
    - 0.04
*   - GaAs Integrated Circuit
    -
    - 
*   - GaAs, RF and HF analogue circuit (power amplifier)
    -
    - 0.70*
*   - GaAs Analogue and mixed circuit (MOS, Bipolar, BiCMOS, MOSFET, PHEMT, HBT) including RF and HF
    -
    - 0.19
```

A specific value for the basic failure rate $\lambda_{\text{OTH}}$ is provided for ASICs, depending on the type of components.

```{admonition} Note *
:class: note

$\lambda_{\text{OTH}}$ for Power HF/RF has been updated in the 2021 issue of the FIDES guide to 0.3756.
```

The basic failure rates $\lambda_{\text{ORH}}$, $\lambda_{\text{OTCyCase}}$, $\lambda_{\text{OTCySolderjoints}}$ and $\lambda_{\text{Mech}}$ are calculated through two constants *a* and *b* considering the type of package and the number of pins. The formula to apply is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_105
\lambda_{0_{\text{constraint}}} = exp\left( - a \right) \cdot {N_{p}}^{b}
```
````

All packages have been split into the following six categories:

-   Plastic PTH;

-   Ceramic PTH;

-   Plastic SMD with leads;

-   Plastic SMD without leads;

-   Ceramic SMD with leads;

-   Ceramic SMD without leads.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-84')" placeholder="Search table...">

```{list-table} Families of packages for plastic PTH.
:name: eee-table4-84
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - SDIP
    - Skinny Dual In Line Package
*   - ZIP
    - Zig-zag In Line Package
*   - QIP
    - Quadruple In Line Package
*   - PGA
    - Pin grid array
*   - SIP, SIPP
    - Single In Line Package
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-85')" placeholder="Search table...">

```{list-table} Families of packages for ceramic PTH.
:name: eee-table4-85
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - CERDIP, CDIP, sidebraze
    - Ceramic dual in line package
*   - CPGA
    - Ceramic pin grid array
*   - PDIP, TO116
    - Plastic dual in line package
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-86')" placeholder="Search table...">

```{list-table} Families of packages for plastic SMD with leads.
:name: eee-table4-86
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - PQFP
    - Plastic quad flatpack, L lead
*   - SQFP, TQFP, VQFP, LQFP, HLQFP
    - Plastic shrink quad flatpack, L lead Plastic thin quad flatpack, L lead
*   - Power QFP (RQFP, HQFP, PowerQuad, EdQuad…)
    -  Plastic quad flatpack with heat shink, L lead
*   - BQFP
    -  Bumpered quad flatpack, L lead
*   - BQFPH
    -  Bumpered quad flatpack with heat spreader, L lead
*   - PLCC
    -  Plastic leaded chip carrier, J lead
*   - SOJ
    -  Plastic small outlines, J-lead
*   - SO, SOP, SOL, SOIC, SOW
    -  Plastic small outlines, L lead
*   - TSOP I
    -  Thin small outlines, leads on small edges, L lead
*   - TSOP II
    -  Thin small outlines, leads on long edges, L lead
*   - SSOP, VSOP, QSOP, VSSOP
    -  Plastic shrink (pitch) small outlines, L lead
*   - TSSOP, MSOP, µSOP, µMAX, TVSOP
    -  Thin shrink small outlines, L lead
*   - HSSOP, HVSSOP, HTSSOP
    -  Thermally Enhanced SSOP
*   - ePad, TSSOP, MSOP, SOIC, SSOP, PSOP
    -  exposed TSSOP/MSOP/SOIC/SSOP
*   - CGA, LGA
    -  Column Grid Array
*   - HSOP
    - Heat Sink Enhanced SOP
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-87')" placeholder="Search table...">

```{list-table} Families of packages for plastic SMD with leads.
:name: eee-table4-87
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - PBGA WLP 0.3mm
    - Plastic ball grid array with solder ball pitch = 0.30 mm
*   - PBGA CSP BT 0.8 et 0.75mm
    - Plastic ball grid array with solder ball pitch = 0.8 et 0.75 mm
*   - PBGA flex 0.8mm
    -  Plastic ball grid array with solder ball pitch = 0.8
*   - PBGA BT 1.00mm
    -  Plastic ball grid array with solder ball pitch = 1.00 mm
*   - PBGA 1.27mm
    -  Plastic ball grid array with solder ball pitch = 1.27 mm
*   - PBGA 1.5mm
    -  Plastic ball grid array with solder ball pitch = 1.5 mm
*   - FPBGA
    -  Fine pitch BGA
*   - FCPBGA
    -  Flip chip plastic BGA
*   - Power BGA (TBGA, SBGA …)
    -  Tape BGA, PBGA with heat sink, die top down pitch=1.27mm Super BGA, PBGA with heat sink, die top down pitch=1.27mm
*   - MAPBGA
    -  Moulded Array Process Ball Grid
*   - QFN, aQFN, DFN, MLF, LLP, ODFN, WQFN, VQFN, X2QFN
    -  Quad flat no lead
*   - SON, USON, VSON, WSON, X2SON
    -  Small Outline No Lead
*   - TEPBGA
    -  Thermally Enhanced Plastic Ball Grid Array
*   - Other CSP
    -  Customized leadframe-based CSP
*   - Other CSP
    -  Flexible substrate-based CSP
*   - Other CSP
    -  Rigid substrate-based CSP
*   - Other CSP
    -  Micro CSP
*   - PSvfBGA
    -  Package Stackable Very Thin Fine Pitch BGA (pop)
*   - PSfcCSP
    -  Package Stackable Flip Chip Chip Scale Package (pop)
*   - TMV, SV
    -  Through Mold Via (POP)
*   - WL-CSP, WLP, WLB, WCSP, DSBGA
    -  Wafer-level chip scale package
*   - WLCSP+
    -  Protected Wafer Level Chip Scale Package
*   - WLFO, eWLB
    -  Wafer Level Fan-Out
*   - CABGA, LBGA
    -  ChipArray BGA
*   - CTBGA TFBGA
    -  Thin ChipArray BGA
*   - CVBGA, VFBGA
    - Very thin ChipArray BGA
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-88')" placeholder="Search table...">

```{list-table} Families of packages for plastic SMD with leads.
:name: eee-table4-88
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - CERPACK
    - Ceramic Package 
*   - CQFP, Cerquad
    - Ceramic quad flatpack
*   - CI CGA
    -  Ceramic land GA + interposer, Ceramic column GA
*   - CCGA, CLGA
    -  Ceramic Column Grid Array
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-89')" placeholder="Search table...">

```{list-table} Families of packages for plastic SMD with leads.
:name: eee-table4-89
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - FCBGA
    - Flip chip BGA
*   - CBGA
    - Ceramic ball grid array
*   - J-CLCC
    -  J-lead Ceramic leaded chip carrier
*   - CLCC
    -  Ceramic leadless chip carrier
```

For specific or complex packages, the general model for Hybrids and Multi Chip Modules should be used.

For each stress $\lambda_{\text{ORH}}$, $\lambda_{\text{OTCyCase}}$, $\lambda_{\text{OTCySolderjoints}}$ and $\lambda_{\text{Mech}}$ corresponding to the stress due to humidity, thermal cycling, thermal cycling of solder joints and mechanical stress, the recommendation for the parameters *a* and *b* for estimating the reliability of packages is slightly different according to the number of leads of the components.

For components with 0 to 256 leads, the recommendation for the parameters *a* and *b* is the following:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_90')"
    placeholder="Search table...">

```{list-table} Parameters a and b for components with 0 to 256 leads.
:name: eee-table4-90

* - <table class="myTable" id="">
        <thead>
            <tr>
                <th rowspan="2"><strong>Family</strong></th>
                <th colspan="2"><strong>λ<sub>0RH</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0TcyCase</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0TcySolderjoints</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0Mech</sub></strong></th>
            </tr>
            <tr>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
            </tr>
        </thead>
        <tr>
            <td>Plastic PTH</td>
            <td>5.88</td>
            <td>0.94</td>
            <td>9.85</td>
            <td>1.35</td>
            <td>8.24</td>
            <td>1.35</td>
            <td>12.85</td>
            <td>1.35</td>
        </tr>
        <tr>
            <td>Ceramic PTH</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>6.77</td>
            <td>1.35</td>
            <td>4.47</td>
            <td>1.35</td>
            <td>7.69</td>
            <td>1.35</td>
        </tr>
        <tr>
            <td>Plastic SMD with leads</td>
            <td>8.48</td>
            <td>1.47</td>
            <td>12.81</td>
            <td>1.92</td>
            <td>9.81</td>
            <td>1.92</td>
            <td>15.20</td>
            <td>1.92</td>
        </tr>
        <tr>
            <td>Plastic SMD without leads</td>
            <td>8.97</td>
            <td>1.14</td>
            <td>11.20</td>
            <td>1.21</td>
            <td>7.90</td>
            <td>1.14</td>
            <td>11.12</td>
            <td>1.21</td>
        </tr>
        <tr>
            <td>Ceramic SMD with leads</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>12.41</td>
            <td>1.46</td>
            <td>10.80</td>
            <td>1.46</td>
            <td>14.02</td>
            <td>1.46</td>
        </tr>
        <tr>
            <td>Ceramic SMD without leads</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>8.07</td>
            <td>0.93</td>
            <td>5.42</td>
            <td>0.93</td>
            <td>8.53</td>
            <td>0.93</td>
        </tr>
    </table>
```

For components with more than 256 leads, the recommendation for the parameters *a* and *b* is the following:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_90')"
    placeholder="Search table...">

```{list-table} Parameters a and b for components with 0 to 256 leads.
:name: eee-table4-91

* - <table class="myTable" id="">
        <thead>
            <tr>
                <th rowspan="2"><strong>Family</strong></th>
                <th colspan="2"><strong>λ<sub>0RH</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0TcyCase</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0TcySolderjoints</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0Mech</sub></strong></th>
            </tr>
            <tr>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
            </tr>
        </thead>
        <tr>
            <td>Ceramic PTH</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>8.07</td>
            <td>0.93</td>
            <td>4.85</td>
            <td>0.93</td>
            <td>7.85</td>
            <td>0.93</td>
        </tr>
        <tr>
            <td>Plastic SMD with leads</td>
            <td>12.66</td>
            <td>2.08</td>
            <td>13.76</td>
            <td>1.71</td>
            <td>11.46</td>
            <td>1.71</td>
            <td>15.37</td>
            <td>1.71</td>
        </tr>
        <tr>
            <td>Plastic SMD without leads</td>
            <td>8.38</td>
            <td>1.20</td>
            <td>12.25</td>
            <td>1.32</td>
            <td>9.09</td>
            <td>1.32</td>
            <td>12.78</td>
            <td>1.32</td>
        </tr>
        <tr>
            <td>Ceramic SMD with leads</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>12.09</td>
            <td>1.59</td>
            <td>12.28</td>
            <td>1.66</td>
            <td>12.11</td>
            <td>1.66</td>
        </tr>
        <tr>
            <td>Ceramic SMD without leads</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>15.37</td>
            <td>1.87</td>
            <td>11.68</td>
            <td>1.87</td>
            <td>14.68</td>
            <td>1.87</td>
        </tr>
    </table>
```

```{admonition} Note
:class: note

In the 2021 issue of FIDES, some evolution concerning the inclusing of underfill has been added. Hence, In Note 4 p127 in the Integrated Circuits paragraph, it is indicated that in case of underfill, $\lambda_{\text{OTCySolderjoints}}$ and $\lambda_{\text{Mech}}$ should be divided by 3. This needs to be assessed before being recommended in the frame of this handbook.
```

**Physical stresses for the inductors family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_106
\Pi_{\text{Thermal}} = exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

$E_{a}$ = 0.7eV;

All other parameters are issued from the mission profile.


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_107
\Pi_{\text{TcyCase}} = \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{4} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_108
\Pi_{\text{TcySolderjoints}} = \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{min(\theta_{\text{cy}},2)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{1.9} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```
````


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_109
\Pi_{\text{Mechanical}} = \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}
```
````


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_110
\Pi_{\text{RH}} = \left( \frac{\text{RH}_{board\_ ref}}{70} \right)^{4.4} \cdot \ exp\left\lbrack 11604 \cdot 0.9 \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

All other parameters are issued from the mission profile.

**Induced factor $\Pi_{\text{induced}}$**

The $\Pi_{\text{induced}}$ factor allows taking into account the influence of the mission profile as described in paragraph {numref}`eee_4_3_1`. Its formula is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_111
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
````

> $\Pi_{placement}$

The Pi Placement depends on the function, there are 6 choices to choose as recalled here from {numref}`eee-table4-3`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-92')" placeholder="Search table...">

```{list-table} Recommendation for the definition of parameter $\Pi_{placement\_ i}$.
:name: eee-table4-92
:header-rows: 1
:widths: 70 30

*   - Description of the placement influence
    - $\Pi_{placement\_ i}$
*   - Digital non-interface function
    - 1.0
*   - Digital interface function
    - 1.6
*   - Analog low-level non-interface function (<1A)
    - 1.3
*   - Analog low-level interface function (<1A)
    - 2.0
*   - Analog power non-interface function (≥1A)
    - 1.6
*   - Analog power interface function (≥1A)
    - 2.5
```

> $\Pi_{application}$

$\Pi_{application}$ represents the influence of the type of application and the environment of the product containing the part. This factor varies depending on the phase of the profile.

It is evaluated through the questions presented in the following table and addressed in {numref}`eee_4_3_1_19`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_93')"
    placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{application\_ i}$ for the launch, time to reach orbit and in-orbit
:name: eee-table4-93

* - <table class="myTable" id="eee_table4_93">
        <thead>
            <th>
                <p><strong>Criterion</strong></p>
            </th>
            <th>
                <p><strong>Description</strong></p>
            </th>
            <th>
                <p><strong>Levels</strong></p>
            </th>
            <th>
                <p><strong>Examples and comments</strong></p>
            </th>
            <th>
                <p><strong>Weight</strong></p>
                <p><strong>POS</strong></p>
            </th>
        </thead>
        <tr>
            <td>
                <p>User type in the phase considered</p>
            </td>
            <td>
                <p>Represents the capability to respect procedures, facing operational constraints.</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Industry</strong></p>
                <p>1: General public</p>
                <p>2: Military</p>
                <p>The most severe level must be adopted for military applications</p>
            </td>
            <td>
                <p>20</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>User qualification level in the phase considered</p>
            </td>
            <td>
                <p>Represents the level of control of the user or the worker regarding an operational context</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Highly qualified</strong></p>
                <p>1: Qualified</p>
                <p>2: Slightly qualified or with little experience</p>
                <p>In some phases, the user to be considered is the person who does the maintenance or servicing</p>
            </td>
            <td>
                <p>10</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>System mobility</p>
            </td>
            <td>
                <p>Represents contingencies related to possibilities of the system being moved</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Few contingencies (fixed or stable environment)</strong></p>
                <p>1: Moderate contingencies</p>
                <p>2: Severe contingencies, large variability (automobile)</p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product manipulation</p>
            </td>
            <td>
                <p>Represents the possibility of false manipulations, shocks, drops, etc .</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Not manipulated</strong></p>
                <p>1: Manipulation without displacement or disassembly</p>
                <p>2: Manipulation with displacement or disassembly</p>
                <p>The severe level should be adopted if maintenance on the product is possible in the phase
                    considered</p>
            </td>
            <td>
                <p>15</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Type of electrical network for the system</p>
            </td>
            <td>
                <p>Represents the level of electrical disturbance expected on power supplies, signals and electrical
                    lines: power on, switching, power supply, connection/disconnection</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Undisturbed network (dedicated regulated power supply)</strong></p>
                <p>1: Slightly disturbed network</p>
                <p>2: Network subject to disturbances (on board network)</p>
                <p>The network type is a system data but that can be broken down and related to specific products
                </p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to human activity</p>
            </td>
            <td>
                <p>Represents exposure to contingencies related to human activity: shock, change in final use, etc.
                </p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Uninhabitable zone</strong></p>
                <p>1: Possible activity in the product zone</p>
                <p>2: Normal activity in the product zone</p>
                <p>The product can be exposed to human activity even if it is not handled itself during normal use
                </p>
            </td>
            <td>
                <p>8</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to machine disturbances</p>
            </td>
            <td>
                <p>Represents contingencies related to operation of machines, engines, actuators: shock,
                    overheating, electrical disturbances, pollutants, etc.</p>
            </td>
            <td>
                <p>0:Non aggressive</p>
                <p><strong>1: Moderate</strong></p>
                <p>2: Severe</p>
            </td>
            <td>
                <p>0: Null (telephone)</p>
                <p><strong>1: Indirect exposure (product in compartment)</strong></p>
                <p>2: Strong or direct exposure (product in engine area)</p>
            </td>
            <td>
                <p>3</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to the weather</p>
            </td>
            <td>
                <p>Represents exposure to rain, hail, frost, sandstorm, lightning, dust</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Null (home)</strong></p>
                <p>1: Indirect exposure (compartment, station hall)</p>
                <p>2: Outdoors (automobile engine)</p>
            </td>
            <td>
                <p>2</p>
            </td>
        </tr>
    </table>
```

A mark is given for each level: 1 for level 0, 3.2 for level 1 and 10 for level 2. This mark is multiplied by the weight ($P_{os}$) and the sum of all the products is divided by 66. For the present application here, we consider $\Pi_{application}$ = 1.1, the value determined in the frame of an Airbus Defence & Space observation project, for all in flight phases.

```{admonition} Note
:class: note

In bold in the table are the levels considered for the space environment (orbit raising and orbit keeping). They represent the typical environment met in space for satellites, hence the figure can be used for all in flight phases for all projects provided they don't present a specific application; in that case, it has to be re-evaluated.
```

> $\Pi_{\text{ruggedising}}$

The ruggedising factor is determined through a 16 questions audit ensuring the evaluation of the procedures established to guarantee the safety and maintenance of the product and that the procedures are indeed applied. See paragraph {numref}`eee_4_3_1_17`.

> $C_{\text{sensitivity}}$

The induced factor $C_{\text{sensitivity}}$ presented in paragraph {numref}`eee_4_3_1_21` is provided in the following table:

```{list-table} Induced factor coefficient of sensitivity for integrated circuits.
:name: eee-table4-94
:header-rows: 1
:widths: 70 30

*   - Technologies
    - $C_{\text{sensitivity}}$
*   - Integrated circuits
    - 6.3
```

```{admonition} Note
:class: note

For the 2021 issue of FIDES, this value has been updated to 7.75, and for GaN MMICs, the value of 6.9 has been proposed.
```

> **c) Component manufacturing factor $\Pi_{\text{PM}}$**

The Part\_Manufacturing factor presented in paragraph {numref}`eee_4_3_3` represents the quality of the component. This factor transcribes the confidence that can be attributed to the way the part has been manufactured, through factors quantifying the manufacturing process of the part, the tests ran and the confidence in the manufacturer.

Its high level formula is

${\pi_{\text{PM}} = e}^{1.39*\left( 1 - Part_{\text{Grade}} \right) - 0.69}$

With, for capacitors, $Part\_ Grade = \ \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \times \varepsilon}{36}$

These parameters are determined through tables available in FIDES.

-  $\text{QA}_{\text{manufacturer}}$ is presented in paragraph {numref}`eee_4_3_3_2`

-   $\text{QA}_{\text{component}}$ is presented in paragraph {numref}`eee_4_3_3_3` and defined in {numref}`eee-table4-95`

-   $\text{RA}_{\text{component}}$ is presented in {numref}`eee_4_3_3_4`

-   $\epsilon$  is presented in paragraph {numref}`eee_4_3_3_7`

Component manufacturing factor $\pi_{\text{PM}}$ according to paragraph {numref}`eee_4_3_3` with component quality assurance levels $\text{QA}_{\text{component}}$ defined in the following tables:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-95')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\text{QA}_{\text{component}}$ for integrated circuits and ASICs.
:name: eee-table4-95
:header-rows: 1
:widths: 60 25 15

*   - Integrated circuits, ASICs: Component quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{component}}$
*   - Qualification according to one of the following standards: AEC Q100, MIL-PRF-38535 class V/Y, MIL-PRF-38510 class S, ESCC 90xx, NASDA-QTS-xxxx classe I, NPSL NASA level 1
    - Higher
    - 3
*   - Qualification according to one of the following standards: MIL-PRF-38535 class Q, MIL-PRF-38535 class M, MIL-PRF-38535 class N, MIL-PRF-38510 class B, NASDA-QTSxxxx class II, NPSL NASA levels 2 and 3
    - Equivalent
    - 2
*   - Qualification program internal to the manufacturer and unidentified manufacturing sites
    - Lower
    - 1
*   - No information
    - Much
    - 0
```

> **d) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2_3`.

(eee_4_3_4_8_2)=
### ASIC (40, 41 and 42 families)

**General model for the integrated circuits family, ASIC components:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_112
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessASIC}}
```
-   $\lambda_{\text{Physical}}$ the physical contribution for each component,

-   $\Pi_{\text{PM}}$ the quality and technical control over manufacturing of the item,

-   $\Pi_{\text{Process}}$ the quality and technical control over the development, manufacturing and use process for the product containing the item,
-   $\Pi_{\text{ProcessASIC}}$ the quality and technical control over the development of ASICs, as defined in 0
````

With process factor $\Pi_{\text{Process}}$ according to Paragraph {numref}`eee_4_3_2_1` and ASIC process factor $\Pi_{\text{ProcessASIC}}$ according to Paragraph {numref}`eee_4_3_2_6`.

All this being based on a mission profile to be defined for the whole unit.

> **a) Mission profile**

In order to model the reliability for each component of a unit, it is necessary to define the mission profile corresponding to the unit under consideration. See paragraph {numref}`eee_4_3_1` for details.

> **b) Calculation of $\lambda_{\text{Physical}}$**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_113
\lambda_{\text{Physical}} = \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \begin{pmatrix} 
  {\lambda_{\text{OTH}} \cdot \Pi}_{\text{Thermal}} \\                                                                                        
  {+ \lambda_{\text{OTCyCase}} \cdot \Pi}_{\text{TCyCase}} \\                                                                                 
  \begin{matrix}                                                                                                                                
  {+ \lambda_{\text{OTCySolderjoints}} \cdot \Pi}_{\text{TCySolderjoints}} \\                                                                 
  {+ \lambda_{\text{ORH}} \cdot \Pi}_{\text{RH}} \\                                                                                           
   + \lambda_{\text{OMech}} \cdot \Pi_{\text{Mech}} \\                                                                                        
  \end{matrix} \\                                                                                                                               
  \end{pmatrix}_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
```
````

$\lambda_{\text{OTH}}$ is a fixed value given in the following table, depending on the type of components.

A specific value for the basic failure rate $\lambda_{\text{OTH}}$ is provided for ASICs, depending on the type of components.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_96')" placeholder="Search table...">

```{list-table} Basic failure rates $\lambda_{\text{OTH}}$ for ASICs.
:name: eee-table4-96

*   - <table class="myTable" id="eee_table4_96">
        <thead>
            <tr>
                <th><strong>Type</strong></th>
                <th><strong>Type of ASIC function</strong></th>
                <th><strong>Groups</strong></th>
                <th><em><strong>λ<sub>0TH</sub></strong></em></th>
            </tr>
        </thead>
        <tr>
            <td rowspan="3">MOS silicon</td>
            <td>Digital ASIC, simple function</td>
            <td rowspan="2">40</td>
            <td>0.021</td>
        </tr>
        <tr>
            <td>Digital ASIC, complex function (with IP and/or µP core)</td>
            <td>0.075</td>
        </tr>
        <tr>
            <td>Analog, mixed ASIC</td>
            <td>41</td>
            <td>0.075</td>
        </tr>
        <tr>
            <td rowspan="2">Bipole silicon, BiCMOS</td>
            <td>Digital ASIC</td>
            <td>40</td>
            <td>0.123</td>
        </tr>
        <tr>
            <td>Mixed, analog ASIC</td>
            <td>42</td>
            <td>0.021</td>
        </tr>
        </table>
```

The basic failure rates $\lambda_{\text{ORH}}$, $\lambda_{\text{OTCyCase}}$, $\lambda_{\text{OTCySolderjoints}}$ and $\lambda_{\text{Mech}}$ are calculated through two constants *a* and *b* considering the type of package and the number of pins. The formula to apply is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_114
\lambda_{0_{\text{constraint}}} = exp\left( - a \right) \cdot {N_{p}}^{b}
```
````

All packages have been split into the following six categories:

-   Plastic PTH;

-   Ceramic PTH;

-   Plastic SMD with leads;

-   Plastic SMD without leads;

-   Ceramic SMD with leads;

-   Ceramic SMD without leads.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-97')" placeholder="Search table...">

```{list-table} Families of packages for plastic PTH.
:name: eee-table4-97
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - SDIP
    - Skinny Dual In Line Package
*   - ZIP
    - Zig-zag In Line Package
*   - QIP
    - Quadruple In Line Package
*   - PGA
    - Pin grid array
*   - SIP, SIPP
    - Single In Line Package
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-98')" placeholder="Search table...">

```{list-table} Families of packages for ceramic PTH.
:name: eee-table4-98
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - CERDIP, CDIP, sidebraze
    - Ceramic dual in line package
*   - CPGA
    - Ceramic pin grid array
*   - PDIP, TO116
    - Plastic dual in line package
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-99')" placeholder="Search table...">

```{list-table} Families of packages for plastic SMD with leads.
:name: eee-table4-99
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - PQFP
    - Plastic quad flatpack, L lead
*   - SQFP, TQFP, VQFP, LQFP, HLQFP
    - Plastic shrink quad flatpack, L lead Plastic thin quad flatpack, L lead
*   - Power QFP (RQFP, HQFP, PowerQuad, EdQuad…)
    -  Plastic quad flatpack with heat shink, L lead
*   - BQFP
    -  Bumpered quad flatpack, L lead
*   - BQFPH
    -  Bumpered quad flatpack with heat spreader, L lead
*   - PLCC
    -  Plastic leaded chip carrier, J lead
*   - SOJ
    -  Plastic small outlines, J-lead
*   - SO, SOP, SOL, SOIC, SOW
    -  Plastic small outlines, L lead
*   - TSOP I
    -  Thin small outlines, leads on small edges, L lead
*   - TSOP II
    -  Thin small outlines, leads on long edges, L lead
*   - SSOP, VSOP, QSOP, VSSOP
    -  Plastic shrink (pitch) small outlines, L lead
*   - TSSOP, MSOP, µSOP, µMAX, TVSOP
    -  Thin shrink small outlines, L lead
*   - HSSOP, HVSSOP, HTSSOP
    -  Thermally Enhanced SSOP
*   - ePad, TSSOP, MSOP, SOIC, SSOP, PSOP
    -  exposed TSSOP/MSOP/SOIC/SSOP
*   - CGA, LGA
    -  Column Grid Array
*   - HSOP
    - Heat Sink Enhanced SOP
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-100')" placeholder="Search table...">

```{list-table} Families of packages for plastic SMD with leads.
:name: eee-table4-100
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - PBGA WLP 0.3mm
    - Plastic ball grid array with solder ball pitch = 0.30 mm
*   - PBGA CSP BT 0.8 et 0.75mm
    - Plastic ball grid array with solder ball pitch = 0.8 et 0.75 mm
*   - PBGA flex 0.8mm
    -  Plastic ball grid array with solder ball pitch = 0.8
*   - PBGA BT 1.00mm
    -  Plastic ball grid array with solder ball pitch = 1.00 mm
*   - PBGA 1.27mm
    -  Plastic ball grid array with solder ball pitch = 1.27 mm
*   - PBGA 1.5mm
    -  Plastic ball grid array with solder ball pitch = 1.5 mm
*   - FPBGA
    -  Fine pitch BGA
*   - FCPBGA
    -  Flip chip plastic BGA
*   - Power BGA (TBGA, SBGA …)
    -  Tape BGA, PBGA with heat sink, die top down pitch=1.27mm Super BGA, PBGA with heat sink, die top down pitch=1.27mm
*   - MAPBGA
    -  Moulded Array Process Ball Grid
*   - QFN, aQFN, DFN, MLF, LLP, ODFN, WQFN, VQFN, X2QFN
    -  Quad flat no lead
*   - SON, USON, VSON, WSON, X2SON
    -  Small Outline No Lead
*   - TEPBGA
    -  Thermally Enhanced Plastic Ball Grid Array
*   - Other CSP
    -  Customized leadframe-based CSP
*   - Other CSP
    -  Flexible substrate-based CSP
*   - Other CSP
    -  Rigid substrate-based CSP
*   - Other CSP
    -  Micro CSP
*   - PSvfBGA
    -  Package Stackable Very Thin Fine Pitch BGA (pop)
*   - PSfcCSP
    -  Package Stackable Flip Chip Chip Scale Package (pop)
*   - TMV, SV
    -  Through Mold Via (POP)
*   - WL-CSP, WLP, WLB, WCSP, DSBGA
    -  Wafer-level chip scale package
*   - WLCSP+
    -  Protected Wafer Level Chip Scale Package
*   - WLFO, eWLB
    -  Wafer Level Fan-Out
*   - CABGA, LBGA
    -  ChipArray BGA
*   - CTBGA TFBGA
    -  Thin ChipArray BGA
*   - CVBGA, VFBGA
    - Very thin ChipArray BGA
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-101')" placeholder="Search table...">

```{list-table} Families of packages for plastic SMD with leads.
:name: eee-table4-101
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - CERPACK
    - Ceramic Package 
*   - CQFP, Cerquad
    - Ceramic quad flatpack
*   - CI CGA
    -  Ceramic land GA + interposer, Ceramic column GA
*   - CCGA, CLGA
    -  Ceramic Column Grid Array
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-102')" placeholder="Search table...">

```{list-table} Families of packages for plastic SMD with leads.
:name: eee-table4-102
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - FCBGA
    - Flip chip BGA
*   - CBGA
    - Ceramic ball grid array
*   - J-CLCC
    -  J-lead Ceramic leaded chip carrier
*   - CLCC
    -  Ceramic leadless chip carrier
```

For specific or complex packages, the general model for Hybrids and Multi Chip Modules should be used.

For each stress $\lambda_{\text{ORH}}$, $\lambda_{\text{OTCyCase}}$, $\lambda_{\text{OTCySolderjoints}}$ and $\lambda_{\text{Mech}}$ corresponding to the stress due to humidity, thermal cycling, thermal cycling of solder joints and mechanical stress, the recommendation for the parameters *a* and *b* for estimating the reliability of packages is slightly different according to the number of leads of the components.

For components with 0 to 256 leads, the recommendation for the parameters *a* and *b* is the following:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_103')"
    placeholder="Search table...">

```{list-table} Parameters a and b for components with 0 to 256 leads.
:name: eee-table4-103

* - <table class="myTable" id="eee_table4_103">
        <thead>
            <tr>
                <th rowspan="2"><strong>Family</strong></th>
                <th colspan="2"><strong>λ<sub>0RH</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0TcyCase</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0TcySolderjoints</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0Mech</sub></strong></th>
            </tr>
            <tr>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
            </tr>
        </thead>
        <tr>
            <td>Plastic PTH</td>
            <td>5.88</td>
            <td>0.94</td>
            <td>9.85</td>
            <td>1.35</td>
            <td>8.24</td>
            <td>1.35</td>
            <td>12.85</td>
            <td>1.35</td>
        </tr>
        <tr>
            <td>Ceramic PTH</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>6.77</td>
            <td>1.35</td>
            <td>4.47</td>
            <td>1.35</td>
            <td>7.69</td>
            <td>1.35</td>
        </tr>
        <tr>
            <td>Plastic SMD with leads</td>
            <td>8.48</td>
            <td>1.47</td>
            <td>12.81</td>
            <td>1.92</td>
            <td>9.81</td>
            <td>1.92</td>
            <td>15.20</td>
            <td>1.92</td>
        </tr>
        <tr>
            <td>Plastic SMD without leads</td>
            <td>8.97</td>
            <td>1.14</td>
            <td>11.20</td>
            <td>1.21</td>
            <td>7.90</td>
            <td>1.14</td>
            <td>11.12</td>
            <td>1.21</td>
        </tr>
        <tr>
            <td>Ceramic SMD with leads</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>12.41</td>
            <td>1.46</td>
            <td>10.80</td>
            <td>1.46</td>
            <td>14.02</td>
            <td>1.46</td>
        </tr>
        <tr>
            <td>Ceramic SMD without leads</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>8.07</td>
            <td>0.93</td>
            <td>5.42</td>
            <td>0.93</td>
            <td>8.53</td>
            <td>0.93</td>
        </tr>
    </table>
```

For components with more than 256 leads, the recommendation for the parameters *a* and *b* is the following:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_104')"
    placeholder="Search table...">

```{list-table} Parameters a and b for components with 0 to 256 leads.
:name: eee-table4-104

* - <table class="myTable" id="eee_table4_104">
        <thead>
            <tr>
                <th rowspan="2"><strong>Family</strong></th>
                <th colspan="2"><strong>λ<sub>0RH</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0TcyCase</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0TcySolderjoints</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0Mech</sub></strong></th>
            </tr>
            <tr>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
            </tr>
        </thead>
        <tr>
            <td>Ceramic PTH</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>8.07</td>
            <td>0.93</td>
            <td>4.85</td>
            <td>0.93</td>
            <td>7.85</td>
            <td>0.93</td>
        </tr>
        <tr>
            <td>Plastic SMD with leads</td>
            <td>12.66</td>
            <td>2.08</td>
            <td>13.76</td>
            <td>1.71</td>
            <td>11.46</td>
            <td>1.71</td>
            <td>15.37</td>
            <td>1.71</td>
        </tr>
        <tr>
            <td>Plastic SMD without leads</td>
            <td>8.38</td>
            <td>1.20</td>
            <td>12.25</td>
            <td>1.32</td>
            <td>9.09</td>
            <td>1.32</td>
            <td>12.78</td>
            <td>1.32</td>
        </tr>
        <tr>
            <td>Ceramic SMD with leads</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>12.09</td>
            <td>1.59</td>
            <td>12.28</td>
            <td>1.66</td>
            <td>12.11</td>
            <td>1.66</td>
        </tr>
        <tr>
            <td>Ceramic SMD without leads</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>15.37</td>
            <td>1.87</td>
            <td>11.68</td>
            <td>1.87</td>
            <td>14.68</td>
            <td>1.87</td>
        </tr>
    </table>
```

```{admonition} Note
:class: note

In the 2021 issue of FIDES, some evolution concerning the inclusing of underfill has been added. Hence, In Note 4 p127 in the Integrated Circuits paragraph, it is indicated that in case of underfill, $\lambda_{\text{OTCySolderjoints}}$ and $\lambda_{\text{Mech}}$ should be divided by 3. This needs to be assessed before being recommended in the frame of this handbook.
```

**Physical stresses for the inductors family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_115
\Pi_{\text{Thermal}} = exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

$E_{a}$ = 0.7eV;

All other parameters are issued from the mission profile.


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_116
\Pi_{\text{TcyCase}} = \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{4} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_117
\Pi_{\text{TcySolderjoints}} = \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{min(\theta_{\text{cy}},2)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{1.9} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```
````


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_118
\Pi_{\text{Mechanical}} = \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}
```
````


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_119
\Pi_{\text{RH}} = \left( \frac{\text{RH}_{board\_ ref}}{70} \right)^{4.4} \cdot \ exp\left\lbrack 11604 \cdot 0.9 \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

All other parameters are issued from the mission profile.

**Induced factor $\Pi_{\text{induced}}$**

The $\Pi_{\text{induced}}$ factor allows taking into account the influence of the mission profile as described in paragraph {numref}`eee_4_3_1`. Its formula is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_120
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
````

> $\Pi_{placement}$

The Pi Placement depends on the function, there are 6 choices to choose as recalled here from {numref}`eee-table4-3`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-105')" placeholder="Search table...">

```{list-table} Recommendation for the definition of parameter $\Pi_{placement\_ i}$.
:name: eee-table4-105
:header-rows: 1
:widths: 70 30

*   - Description of the placement influence
    - $\Pi_{placement\_ i}$
*   - Digital non-interface function
    - 1.0
*   - Digital interface function
    - 1.6
*   - Analog low-level non-interface function (<1A)
    - 1.3
*   - Analog low-level interface function (<1A)
    - 2.0
*   - Analog power non-interface function (≥1A)
    - 1.6
*   - Analog power interface function (≥1A)
    - 2.5
```

> $\Pi_{application}$

$\Pi_{application}$ represents the influence of the type of application and the environment of the product containing the part. This factor varies depending on the phase of the profile.

It is evaluated through the questions presented in the following table and addressed in {numref}`eee_4_3_1_19`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_106')"
    placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{application\_ i}$ for the launch, time to reach orbit and in-orbit
:name: eee-table4-106

* - <table class="myTable" id="eee_table4_106">
        <thead>
            <th>
                <p><strong>Criterion</strong></p>
            </th>
            <th>
                <p><strong>Description</strong></p>
            </th>
            <th>
                <p><strong>Levels</strong></p>
            </th>
            <th>
                <p><strong>Examples and comments</strong></p>
            </th>
            <th>
                <p><strong>Weight</strong></p>
                <p><strong>POS</strong></p>
            </th>
        </thead>
        <tr>
            <td>
                <p>User type in the phase considered</p>
            </td>
            <td>
                <p>Represents the capability to respect procedures, facing operational constraints.</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Industry</strong></p>
                <p>1: General public</p>
                <p>2: Military</p>
                <p>The most severe level must be adopted for military applications</p>
            </td>
            <td>
                <p>20</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>User qualification level in the phase considered</p>
            </td>
            <td>
                <p>Represents the level of control of the user or the worker regarding an operational context</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Highly qualified</strong></p>
                <p>1: Qualified</p>
                <p>2: Slightly qualified or with little experience</p>
                <p>In some phases, the user to be considered is the person who does the maintenance or servicing</p>
            </td>
            <td>
                <p>10</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>System mobility</p>
            </td>
            <td>
                <p>Represents contingencies related to possibilities of the system being moved</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Few contingencies (fixed or stable environment)</strong></p>
                <p>1: Moderate contingencies</p>
                <p>2: Severe contingencies, large variability (automobile)</p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product manipulation</p>
            </td>
            <td>
                <p>Represents the possibility of false manipulations, shocks, drops, etc .</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Not manipulated</strong></p>
                <p>1: Manipulation without displacement or disassembly</p>
                <p>2: Manipulation with displacement or disassembly</p>
                <p>The severe level should be adopted if maintenance on the product is possible in the phase
                    considered</p>
            </td>
            <td>
                <p>15</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Type of electrical network for the system</p>
            </td>
            <td>
                <p>Represents the level of electrical disturbance expected on power supplies, signals and electrical
                    lines: power on, switching, power supply, connection/disconnection</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Undisturbed network (dedicated regulated power supply)</strong></p>
                <p>1: Slightly disturbed network</p>
                <p>2: Network subject to disturbances (on board network)</p>
                <p>The network type is a system data but that can be broken down and related to specific products
                </p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to human activity</p>
            </td>
            <td>
                <p>Represents exposure to contingencies related to human activity: shock, change in final use, etc.
                </p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Uninhabitable zone</strong></p>
                <p>1: Possible activity in the product zone</p>
                <p>2: Normal activity in the product zone</p>
                <p>The product can be exposed to human activity even if it is not handled itself during normal use
                </p>
            </td>
            <td>
                <p>8</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to machine disturbances</p>
            </td>
            <td>
                <p>Represents contingencies related to operation of machines, engines, actuators: shock,
                    overheating, electrical disturbances, pollutants, etc.</p>
            </td>
            <td>
                <p>0:Non aggressive</p>
                <p><strong>1: Moderate</strong></p>
                <p>2: Severe</p>
            </td>
            <td>
                <p>0: Null (telephone)</p>
                <p><strong>1: Indirect exposure (product in compartment)</strong></p>
                <p>2: Strong or direct exposure (product in engine area)</p>
            </td>
            <td>
                <p>3</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to the weather</p>
            </td>
            <td>
                <p>Represents exposure to rain, hail, frost, sandstorm, lightning, dust</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Null (home)</strong></p>
                <p>1: Indirect exposure (compartment, station hall)</p>
                <p>2: Outdoors (automobile engine)</p>
            </td>
            <td>
                <p>2</p>
            </td>
        </tr>
    </table>
```

A mark is given for each level: 1 for level 0, 3.2 for level 1 and 10 for level 2. This mark is multiplied by the weight ($P_{os}$) and the sum of all the products is divided by 66. For the present application here, we consider $\Pi_{application}$ = 1.1, the value determined in the frame of an Airbus Defence & Space observation project, for all in flight phases.

```{admonition} Note
:class: note

In bold in the table are the levels considered for the space environment (orbit raising and orbit keeping). They represent the typical environment met in space for satellites, hence the figure can be used for all in flight phases for all projects provided they don't present a specific application; in that case, it has to be re-evaluated.
```

> $\Pi_{\text{ruggedising}}$

The ruggedising factor is determined through a 16 questions audit ensuring the evaluation of the procedures established to guarantee the safety and maintenance of the product and that the procedures are indeed applied. See paragraph {numref}`eee_4_3_1_17`.

> $C_{\text{sensitivity}}$

The induced factor $C_{\text{sensitivity}}$ presented in paragraph {numref}`eee_4_3_1_21` is provided in the following table:

```{list-table} nduced factor coefficient of sensitivity for integrated circuits.
:name: eee-table4-107
:header-rows: 1
:widths: 70 30

*   - Technologies
    - $C_{\text{sensitivity}}$
*   - Integrated circuits
    - 6.3
```

```{admonition} Note
:class: note

For the 2021 issue of FIDES, this value has been updated to 7.75.
```

> **c) Component manufacturing factor $\Pi_{\text{PM}}$**

The Part\_Manufacturing factor presented in paragraph {numref}`eee_4_3_3` represents the quality of the component. This factor transcribes the confidence that can be attributed to the way the part has been manufactured, through factors quantifying the manufacturing process of the part, the tests ran and the confidence in the manufacturer.

Its high level formula is

${\pi_{\text{PM}} = e}^{1.39*\left( 1 - Part_{\text{Grade}} \right) - 0.69}$

With, for capacitors, $Part\_ Grade = \ \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \times \varepsilon}{36}$

These parameters are determined through tables available in FIDES.

-  $\text{QA}_{\text{manufacturer}}$ is presented in paragraph {numref}`eee_4_3_3_2`

-   $\text{QA}_{\text{component}}$ is presented in paragraph {numref}`eee_4_3_3_3` and defined in {numref}`eee-table4-108`

-   $\text{RA}_{\text{component}}$ is presented in {numref}`eee_4_3_3_4`

-   $\epsilon$  is presented in paragraph {numref}`eee_4_3_3_7`

Component manufacturing factor $\pi_{\text{PM}}$ according to paragraph {numref}`eee_4_3_3` with component quality assurance levels $\text{QA}_{\text{component}}$ defined in the following tables:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-108')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\text{QA}_{\text{component}}$ for integrated circuits and ASICs.
:name: eee-table4-108
:header-rows: 1
:widths: 60 25 15

*   - Integrated circuits, ASICs: Component quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{component}}$
*   - Qualification according to one of the following standards: AEC Q100, MIL-PRF-38535 class V/Y, MIL-PRF-38510 class S, ESCC 90xx, NASDA-QTS-xxxx classe I, NPSL NASA level 1
    - Higher
    - 3
*   - Qualification according to one of the following standards: MIL-PRF-38535 class Q, MIL-PRF-38535 class M, MIL-PRF-38535 class N, MIL-PRF-38510 class B, NASDA-QTSxxxx class II, NPSL NASA levels 2 and 3
    - Equivalent
    - 2
*   - Qualification program internal to the manufacturer and unidentified manufacturing sites
    - Lower
    - 1
*   - No information
    - Much
    - 0
```

> **d) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2_3`.

(eee_4_3_4_8_3)=
### Integrated Circuits (others)

**General model for the integrated circuits family, ASIC components:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_121
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{LF}}
```
-   $\lambda_{\text{Physical}}$ the physical contribution for each component,

-   $\Pi_{\text{PM}}$ the quality and technical control over manufacturing of the item,

-   $\Pi_{\text{Process}}$ the quality and technical control over the development, manufacturing and use process for the product containing the item,
-   $\Pi_{\text{LF}}$ the factor representing the process to become lead-free if it has to be considered. For Space applications, it is equal to 1 (see paragraph {numref}`eee_4_3`).
````

With process factor $\Pi_{\text{Process}}$ according to Paragraph {numref}`eee_4_3_2_1`.

All this being based on a mission profile to be defined for the whole unit.

> **a) Mission profile**

In order to model the reliability for each component of a unit, it is necessary to define the mission profile corresponding to the unit under consideration. See paragraph {numref}`eee_4_3_1` for details.

> **b) Calculation of $\lambda_{\text{Physical}}$**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_122
\lambda_{\text{Physical}} = \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \begin{pmatrix}
  {\lambda_{\text{OTH}} \cdot \Pi}_{\text{Thermal}} \\                                                                                        
  {+ \lambda_{\text{OTCyCase}} \cdot \Pi}_{\text{TCyCase}} \\                                                                                 
  \begin{matrix}                                                                                                                                
  {+ \lambda_{\text{OTCySolderjoints}} \cdot \Pi}_{\text{TCySolderjoints}} \\                                                                 
  {+ \lambda_{\text{ORH}} \cdot \Pi}_{\text{RH}} \\                                                                                           
   + \lambda_{\text{OMech}} \cdot \Pi_{\text{Mech}} \\                                                                                        
  \end{matrix} \\                                                                                                                               
  \end{pmatrix}_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
```
````

$\lambda_{\text{OTH}}$ is a fixed value given in the following table, depending on the type of components.


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-109')" placeholder="Search table...">

```{list-table} Basic failure rates $\lambda_{\text{OTH}}$ for integrated circuits.
:name: eee-table4-109
:header-rows: 1
:widths: 70 10 20

*   - Type
    - Groups
    - $\lambda_{\text{OTH}}$
*   - FPGA, CPLD, FPGA Antifuse, PAL
    - 30
    - 0.166
*   - Analog and Hybrid circuit (MOS, Bipole, BiCMOS)
    - 50-69/80
    - 0.123
*   - Microprocessor, Microcontroller, DSP
    - 10
    - 0.075
*   - Flash, EEPROM, EPROM
    - 23-24
    - 0.060
*   - SRAM
    - 20
    - 0.055
*   - DRAM
    - 21
    - 0.047
*   - Digital circuit (MOS, Bipole, BiCMOS)
    - 80
    - 0.021
```

<!--The basic failure rates $\lambda_{\text{ORH}}$, $\lambda_{\text{OTCyCase}}$, $\lambda_{\text{OTCySolderjoints}}$ and $\lambda_{\text{Mech}}$ are calculated through two constants *a* and *b* considering the type of package and the number of pins. The formula to apply is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_114
\lambda_{0_{\text{constraint}}} = exp\left( - a \right) \cdot {N_{p}}^{b}
```
````

All packages have been split into the following six categories:

-   Plastic PTH;

-   Ceramic PTH;

-   Plastic SMD with leads;

-   Plastic SMD without leads;

-   Ceramic SMD with leads;

-   Ceramic SMD without leads.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-97')" placeholder="Search table...">

```{list-table} Families of packages for plastic PTH.
:name: eee-table4-97
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - SDIP
    - Skinny Dual In Line Package
*   - ZIP
    - Zig-zag In Line Package
*   - QIP
    - Quadruple In Line Package
*   - PGA
    - Pin grid array
*   - SIP, SIPP
    - Single In Line Package
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-98')" placeholder="Search table...">

```{list-table} Families of packages for ceramic PTH.
:name: eee-table4-98
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - CERDIP, CDIP, sidebraze
    - Ceramic dual in line package
*   - CPGA
    - Ceramic pin grid array
*   - PDIP, TO116
    - Plastic dual in line package
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-99')" placeholder="Search table...">

```{list-table} Families of packages for plastic SMD with leads.
:name: eee-table4-99
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - PQFP
    - Plastic quad flatpack, L lead
*   - SQFP, TQFP, VQFP, LQFP, HLQFP
    - Plastic shrink quad flatpack, L lead Plastic thin quad flatpack, L lead
*   - Power QFP (RQFP, HQFP, PowerQuad, EdQuad…)
    -  Plastic quad flatpack with heat shink, L lead
*   - BQFP
    -  Bumpered quad flatpack, L lead
*   - BQFPH
    -  Bumpered quad flatpack with heat spreader, L lead
*   - PLCC
    -  Plastic leaded chip carrier, J lead
*   - SOJ
    -  Plastic small outlines, J-lead
*   - SO, SOP, SOL, SOIC, SOW
    -  Plastic small outlines, L lead
*   - TSOP I
    -  Thin small outlines, leads on small edges, L lead
*   - TSOP II
    -  Thin small outlines, leads on long edges, L lead
*   - SSOP, VSOP, QSOP, VSSOP
    -  Plastic shrink (pitch) small outlines, L lead
*   - TSSOP, MSOP, µSOP, µMAX, TVSOP
    -  Thin shrink small outlines, L lead
*   - HSSOP, HVSSOP, HTSSOP
    -  Thermally Enhanced SSOP
*   - ePad, TSSOP, MSOP, SOIC, SSOP, PSOP
    -  exposed TSSOP/MSOP/SOIC/SSOP
*   - CGA, LGA
    -  Column Grid Array
*   - HSOP
    - Heat Sink Enhanced SOP
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-100')" placeholder="Search table...">

```{list-table} Families of packages for plastic SMD with leads.
:name: eee-table4-100
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - PBGA WLP 0.3mm
    - Plastic ball grid array with solder ball pitch = 0.30 mm
*   - PBGA CSP BT 0.8 et 0.75mm
    - Plastic ball grid array with solder ball pitch = 0.8 et 0.75 mm
*   - PBGA flex 0.8mm
    -  Plastic ball grid array with solder ball pitch = 0.8
*   - PBGA BT 1.00mm
    -  Plastic ball grid array with solder ball pitch = 1.00 mm
*   - PBGA 1.27mm
    -  Plastic ball grid array with solder ball pitch = 1.27 mm
*   - PBGA 1.5mm
    -  Plastic ball grid array with solder ball pitch = 1.5 mm
*   - FPBGA
    -  Fine pitch BGA
*   - FCPBGA
    -  Flip chip plastic BGA
*   - Power BGA (TBGA, SBGA …)
    -  Tape BGA, PBGA with heat sink, die top down pitch=1.27mm Super BGA, PBGA with heat sink, die top down pitch=1.27mm
*   - MAPBGA
    -  Moulded Array Process Ball Grid
*   - QFN, aQFN, DFN, MLF, LLP, ODFN, WQFN, VQFN, X2QFN
    -  Quad flat no lead
*   - SON, USON, VSON, WSON, X2SON
    -  Small Outline No Lead
*   - TEPBGA
    -  Thermally Enhanced Plastic Ball Grid Array
*   - Other CSP
    -  Customized leadframe-based CSP
*   - Other CSP
    -  Flexible substrate-based CSP
*   - Other CSP
    -  Rigid substrate-based CSP
*   - Other CSP
    -  Micro CSP
*   - PSvfBGA
    -  Package Stackable Very Thin Fine Pitch BGA (pop)
*   - PSfcCSP
    -  Package Stackable Flip Chip Chip Scale Package (pop)
*   - TMV, SV
    -  Through Mold Via (POP)
*   - WL-CSP, WLP, WLB, WCSP, DSBGA
    -  Wafer-level chip scale package
*   - WLCSP+
    -  Protected Wafer Level Chip Scale Package
*   - WLFO, eWLB
    -  Wafer Level Fan-Out
*   - CABGA, LBGA
    -  ChipArray BGA
*   - CTBGA TFBGA
    -  Thin ChipArray BGA
*   - CVBGA, VFBGA
    - Very thin ChipArray BGA
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-101')" placeholder="Search table...">

```{list-table} Families of packages for plastic SMD with leads.
:name: eee-table4-101
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - CERPACK
    - Ceramic Package 
*   - CQFP, Cerquad
    - Ceramic quad flatpack
*   - CI CGA
    -  Ceramic land GA + interposer, Ceramic column GA
*   - CCGA, CLGA
    -  Ceramic Column Grid Array
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-102')" placeholder="Search table...">

```{list-table} Families of packages for plastic SMD with leads.
:name: eee-table4-102
:header-rows: 1
:widths: 50 50

*   - Typical name
    - Description
*   - FCBGA
    - Flip chip BGA
*   - CBGA
    - Ceramic ball grid array
*   - J-CLCC
    -  J-lead Ceramic leaded chip carrier
*   - CLCC
    -  Ceramic leadless chip carrier
```

For specific or complex packages, the general model for Hybrids and Multi Chip Modules should be used.

For each stress $\lambda_{\text{ORH}}$, $\lambda_{\text{OTCyCase}}$, $\lambda_{\text{OTCySolderjoints}}$ and $\lambda_{\text{Mech}}$ corresponding to the stress due to humidity, thermal cycling, thermal cycling of solder joints and mechanical stress, the recommendation for the parameters *a* and *b* for estimating the reliability of packages is slightly different according to the number of leads of the components.

For components with 0 to 256 leads, the recommendation for the parameters *a* and *b* is the following:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_103')"
    placeholder="Search table...">

```{list-table} Parameters a and b for components with 0 to 256 leads.
:name: eee-table4-103

* - <table class="myTable" id="eee_table4_103">
        <thead>
            <tr>
                <th rowspan="2"><strong>Family</strong></th>
                <th colspan="2"><strong>λ<sub>0RH</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0TcyCase</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0TcySolderjoints</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0Mech</sub></strong></th>
            </tr>
            <tr>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
            </tr>
        </thead>
        <tr>
            <td>Plastic PTH</td>
            <td>5.88</td>
            <td>0.94</td>
            <td>9.85</td>
            <td>1.35</td>
            <td>8.24</td>
            <td>1.35</td>
            <td>12.85</td>
            <td>1.35</td>
        </tr>
        <tr>
            <td>Ceramic PTH</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>6.77</td>
            <td>1.35</td>
            <td>4.47</td>
            <td>1.35</td>
            <td>7.69</td>
            <td>1.35</td>
        </tr>
        <tr>
            <td>Plastic SMD with leads</td>
            <td>8.48</td>
            <td>1.47</td>
            <td>12.81</td>
            <td>1.92</td>
            <td>9.81</td>
            <td>1.92</td>
            <td>15.20</td>
            <td>1.92</td>
        </tr>
        <tr>
            <td>Plastic SMD without leads</td>
            <td>8.97</td>
            <td>1.14</td>
            <td>11.20</td>
            <td>1.21</td>
            <td>7.90</td>
            <td>1.14</td>
            <td>11.12</td>
            <td>1.21</td>
        </tr>
        <tr>
            <td>Ceramic SMD with leads</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>12.41</td>
            <td>1.46</td>
            <td>10.80</td>
            <td>1.46</td>
            <td>14.02</td>
            <td>1.46</td>
        </tr>
        <tr>
            <td>Ceramic SMD without leads</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>8.07</td>
            <td>0.93</td>
            <td>5.42</td>
            <td>0.93</td>
            <td>8.53</td>
            <td>0.93</td>
        </tr>
    </table>
```

For components with more than 256 leads, the recommendation for the parameters *a* and *b* is the following:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_104')"
    placeholder="Search table...">

```{list-table} Parameters a and b for components with 0 to 256 leads.
:name: eee-table4-104

* - <table class="myTable" id="eee_table4_104">
        <thead>
            <tr>
                <th rowspan="2"><strong>Family</strong></th>
                <th colspan="2"><strong>λ<sub>0RH</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0TcyCase</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0TcySolderjoints</sub></strong></th>
                <th colspan="2"><strong>λ<sub>0Mech</sub></strong></th>
            </tr>
            <tr>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
                <th><strong>a</strong></th>
                <th><strong>b</strong></th>
            </tr>
        </thead>
        <tr>
            <td>Ceramic PTH</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>8.07</td>
            <td>0.93</td>
            <td>4.85</td>
            <td>0.93</td>
            <td>7.85</td>
            <td>0.93</td>
        </tr>
        <tr>
            <td>Plastic SMD with leads</td>
            <td>12.66</td>
            <td>2.08</td>
            <td>13.76</td>
            <td>1.71</td>
            <td>11.46</td>
            <td>1.71</td>
            <td>15.37</td>
            <td>1.71</td>
        </tr>
        <tr>
            <td>Plastic SMD without leads</td>
            <td>8.38</td>
            <td>1.20</td>
            <td>12.25</td>
            <td>1.32</td>
            <td>9.09</td>
            <td>1.32</td>
            <td>12.78</td>
            <td>1.32</td>
        </tr>
        <tr>
            <td>Ceramic SMD with leads</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>12.09</td>
            <td>1.59</td>
            <td>12.28</td>
            <td>1.66</td>
            <td>12.11</td>
            <td>1.66</td>
        </tr>
        <tr>
            <td>Ceramic SMD without leads</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>15.37</td>
            <td>1.87</td>
            <td>11.68</td>
            <td>1.87</td>
            <td>14.68</td>
            <td>1.87</td>
        </tr>
    </table>
```

```{admonition} Note
:class: note

In the 2021 issue of FIDES, some evolution concerning the inclusing of underfill has been added. Hence, In Note 4 p127 in the Integrated Circuits paragraph, it is indicated that in case of underfill, $\lambda_{\text{OTCySolderjoints}}$ and $\lambda_{\text{Mech}}$ should be divided by 3. This needs to be assessed before being recommended in the frame of this handbook.
```

**Physical stresses for the inductors family:**

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_115
\Pi_{\text{Thermal}} = exp\left\lbrack 11604 \cdot E_{a} \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

$E_{a}$ = 0.7eV;

All other parameters are issued from the mission profile.


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_116
\Pi_{\text{TcyCase}} = \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{4} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_117
\Pi_{\text{TcySolderjoints}} = \left( \frac{{12 \cdot N}_{cy\_ phase}}{t_{\text{phase}}} \right) \cdot \left( \frac{min(\theta_{\text{cy}},2)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{1.9} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```
````


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_118
\Pi_{\text{Mechanical}} = \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}
```
````


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_119
\Pi_{\text{RH}} = \left( \frac{\text{RH}_{board\_ ref}}{70} \right)^{4.4} \cdot \ exp\left\lbrack 11604 \cdot 0.9 \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T} \right) \right\rbrack
```
````

All other parameters are issued from the mission profile.

**Induced factor $\Pi_{\text{induced}}$**

The $\Pi_{\text{induced}}$ factor allows taking into account the influence of the mission profile as described in paragraph {numref}`eee_4_3_1`. Its formula is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_120
\Pi_{induced\_ i} = \left( \Pi_{placement\_ i} \cdot \Pi_{application\_ i} \cdot \Pi_{\text{ruggedising}} \right)^{0.511 \cdot ln(C_{\text{sensitivity}})}
```
````

> $\Pi_{placement}$

The Pi Placement depends on the function, there are 6 choices to choose as recalled here from {numref}`eee-table4-3`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-105')" placeholder="Search table...">

```{list-table} Recommendation for the definition of parameter $\Pi_{placement\_ i}$.
:name: eee-table4-105
:header-rows: 1
:widths: 70 30

*   - Description of the placement influence
    - $\Pi_{placement\_ i}$
*   - Digital non-interface function
    - 1.0
*   - Digital interface function
    - 1.6
*   - Analog low-level non-interface function (<1A)
    - 1.3
*   - Analog low-level interface function (<1A)
    - 2.0
*   - Analog power non-interface function (≥1A)
    - 1.6
*   - Analog power interface function (≥1A)
    - 2.5
```

> $\Pi_{application}$

$\Pi_{application}$ represents the influence of the type of application and the environment of the product containing the part. This factor varies depending on the phase of the profile.

It is evaluated through the questions presented in the following table and addressed in {numref}`eee_4_3_1_19`:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_106')"
    placeholder="Search table...">

```{list-table} Recommended parameters for $\Pi_{application\_ i}$ for the launch, time to reach orbit and in-orbit
:name: eee-table4-106

* - <table class="myTable" id="eee_table4_106">
        <thead>
            <th>
                <p><strong>Criterion</strong></p>
            </th>
            <th>
                <p><strong>Description</strong></p>
            </th>
            <th>
                <p><strong>Levels</strong></p>
            </th>
            <th>
                <p><strong>Examples and comments</strong></p>
            </th>
            <th>
                <p><strong>Weight</strong></p>
                <p><strong>POS</strong></p>
            </th>
        </thead>
        <tr>
            <td>
                <p>User type in the phase considered</p>
            </td>
            <td>
                <p>Represents the capability to respect procedures, facing operational constraints.</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Industry</strong></p>
                <p>1: General public</p>
                <p>2: Military</p>
                <p>The most severe level must be adopted for military applications</p>
            </td>
            <td>
                <p>20</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>User qualification level in the phase considered</p>
            </td>
            <td>
                <p>Represents the level of control of the user or the worker regarding an operational context</p>
            </td>
            <td>
                <p><strong>0: Favourable</strong></p>
                <p>1: Moderate</p>
                <p>2: Unfavourable</p>
            </td>
            <td>
                <p><strong>0: Highly qualified</strong></p>
                <p>1: Qualified</p>
                <p>2: Slightly qualified or with little experience</p>
                <p>In some phases, the user to be considered is the person who does the maintenance or servicing</p>
            </td>
            <td>
                <p>10</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>System mobility</p>
            </td>
            <td>
                <p>Represents contingencies related to possibilities of the system being moved</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Few contingencies (fixed or stable environment)</strong></p>
                <p>1: Moderate contingencies</p>
                <p>2: Severe contingencies, large variability (automobile)</p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product manipulation</p>
            </td>
            <td>
                <p>Represents the possibility of false manipulations, shocks, drops, etc .</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Not manipulated</strong></p>
                <p>1: Manipulation without displacement or disassembly</p>
                <p>2: Manipulation with displacement or disassembly</p>
                <p>The severe level should be adopted if maintenance on the product is possible in the phase
                    considered</p>
            </td>
            <td>
                <p>15</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Type of electrical network for the system</p>
            </td>
            <td>
                <p>Represents the level of electrical disturbance expected on power supplies, signals and electrical
                    lines: power on, switching, power supply, connection/disconnection</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Undisturbed network (dedicated regulated power supply)</strong></p>
                <p>1: Slightly disturbed network</p>
                <p>2: Network subject to disturbances (on board network)</p>
                <p>The network type is a system data but that can be broken down and related to specific products
                </p>
            </td>
            <td>
                <p>4</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to human activity</p>
            </td>
            <td>
                <p>Represents exposure to contingencies related to human activity: shock, change in final use, etc.
                </p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Uninhabitable zone</strong></p>
                <p>1: Possible activity in the product zone</p>
                <p>2: Normal activity in the product zone</p>
                <p>The product can be exposed to human activity even if it is not handled itself during normal use
                </p>
            </td>
            <td>
                <p>8</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to machine disturbances</p>
            </td>
            <td>
                <p>Represents contingencies related to operation of machines, engines, actuators: shock,
                    overheating, electrical disturbances, pollutants, etc.</p>
            </td>
            <td>
                <p>0:Non aggressive</p>
                <p><strong>1: Moderate</strong></p>
                <p>2: Severe</p>
            </td>
            <td>
                <p>0: Null (telephone)</p>
                <p><strong>1: Indirect exposure (product in compartment)</strong></p>
                <p>2: Strong or direct exposure (product in engine area)</p>
            </td>
            <td>
                <p>3</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Product exposure to the weather</p>
            </td>
            <td>
                <p>Represents exposure to rain, hail, frost, sandstorm, lightning, dust</p>
            </td>
            <td>
                <p><strong>0:Non aggressive</strong></p>
                <p>1: Moderate</p>
                <p>2: Severe</p>
            </td>
            <td>
                <p><strong>0: Null (home)</strong></p>
                <p>1: Indirect exposure (compartment, station hall)</p>
                <p>2: Outdoors (automobile engine)</p>
            </td>
            <td>
                <p>2</p>
            </td>
        </tr>
    </table>
```

A mark is given for each level: 1 for level 0, 3.2 for level 1 and 10 for level 2. This mark is multiplied by the weight ($P_{os}$) and the sum of all the products is divided by 66. For the present application here, we consider $\Pi_{application}$ = 1.1, the value determined in the frame of an Airbus Defence & Space observation project, for all in flight phases.

```{admonition} Note
:class: note

In bold in the table are the levels considered for the space environment (orbit raising and orbit keeping). They represent the typical environment met in space for satellites, hence the figure can be used for all in flight phases for all projects provided they don't present a specific application; in that case, it has to be re-evaluated.
```

> $\Pi_{\text{ruggedising}}$

The ruggedising factor is determined through a 16 questions audit ensuring the evaluation of the procedures established to guarantee the safety and maintenance of the product and that the procedures are indeed applied. See paragraph {numref}`eee_4_3_1_17`.

> $C_{\text{sensitivity}}$

The induced factor $C_{\text{sensitivity}}$ presented in paragraph {numref}`eee_4_3_1_21` is provided in the following table:

```{list-table} nduced factor coefficient of sensitivity for integrated circuits.
:name: eee-table4-94
:header-rows: 1
:widths: 70 30

*   - Technologies
    - $C_{\text{sensitivity}}$
*   - Integrated circuits
    - 6.3
```

```{admonition} Note
:class: note

For the 2021 issue of FIDES, this value has been updated to 7.75.
```

> **c) Component manufacturing factor $\Pi_{\text{PM}}$**

The Part\_Manufacturing factor presented in paragraph {numref}`eee_4_3_3` represents the quality of the component. This factor transcribes the confidence that can be attributed to the way the part has been manufactured, through factors quantifying the manufacturing process of the part, the tests ran and the confidence in the manufacturer.

Its high level formula is

${\pi_{\text{PM}} = e}^{1.39*\left( 1 - Part_{\text{Grade}} \right) - 0.69}$

With, for capacitors, $Part\_ Grade = \ \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \times \varepsilon}{36}$

These parameters are determined through tables available in FIDES.

-  $\text{QA}_{\text{manufacturer}}$ is presented in paragraph {numref}`eee_4_3_3_2`

-   $\text{QA}_{\text{component}}$ is presented in paragraph {numref}`eee_4_3_3_3` and defined in {numref}`eee-table4-108`

-   $\text{RA}_{\text{component}}$ is presented in {numref}`eee_4_3_3_4`

-   $\epsilon$  is presented in paragraph {numref}`eee_4_3_3_7`

Component manufacturing factor $\pi_{\text{PM}}$ according to paragraph {numref}`eee_4_3_3` with component quality assurance levels $\text{QA}_{\text{component}}$ defined in the following tables:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-108')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\text{QA}_{\text{component}}$ for integrated circuits and ASICs.
:name: eee-table4-108
:header-rows: 1
:widths: 60 25 15

*   - Integrated circuits, ASICs: Component quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{component}}$
*   - Qualification according to one of the following standards: AEC Q100, MIL-PRF-38535 class V/Y, MIL-PRF-38510 class S, ESCC 90xx, NASDA-QTS-xxxx classe I, NPSL NASA level 1
    - Higher
    - 3
*   - Qualification according to one of the following standards: MIL-PRF-38535 class Q, MIL-PRF-38535 class M, MIL-PRF-38535 class N, MIL-PRF-38510 class B, NASDA-QTSxxxx class II, NPSL NASA levels 2 and 3
    - Equivalent
    - 2
*   - Qualification program internal to the manufacturer and unidentified manufacturing sites
    - Lower
    - 1
*   - No information
    - Much
    - 0
```

> **d) Determination of the $\Pi_{\text{Process}}$ factor**

The $\Pi_{\text{Process}}$ factor is determined according to the formula presented in paragraph {numref}`eee_4_3_2_3`.

-->