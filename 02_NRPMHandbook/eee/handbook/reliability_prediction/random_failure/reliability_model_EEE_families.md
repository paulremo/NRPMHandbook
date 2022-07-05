(eee_4_3_4)=
# Reliability model proposed for all EEE families

(eee_4_3_4_1)=
## Capacitors (family 01)

Capacitors are classified as family 01 in EPPL \[BR-EEE-3\].

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
                <td>2009</td>
                <td>2021</td>
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
\Pi_{\text{Tcy}} = \gamma_{\text{TCy}} \cdot \left( \frac{{12 \cdot N}_{\text{cy}_{\text{phase}}}}{t_{\text{phase}}} \right) \cdot \left( \frac{\min\left( \theta_{\text{cy}},2 \right)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\text{\Delta T}_{\text{cycling}}}{20} \right)^{1.9} \cdot \exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{\max_{\text{cycling}}}} \right) \right\rbrack
```  
```{math}
:label: Equation_1_35
\Pi_{\text{Mechanical}} = \gamma_{\text{Mech}} \cdot \left( \frac{G_{\text{rms}}}{0.5} \right)^{1.5}
```
With $\lambda_{0_{\text{capacitor}}}$, $E_{a}$, $S_{\text{reference}}$, $\gamma_{\text{TCy}}$, $\gamma_{\text{Mech}}$, $\gamma_{\text{TH}_{\text{EL}}} given in {numref}`eee-table4-22`.
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
                <blockquote>
                    <p><strong>Criterion</strong></p>
                </blockquote>
            </th>
            <th>
                <blockquote>
                    <p><strong>Description</strong></p>
                </blockquote>
            </th>
            <th>
                <blockquote>
                    <p><strong>Levels</strong></p>
                </blockquote>
            </th>
            <th>
                <blockquote>
                    <p><strong>Examples and comments</strong></p>
                </blockquote>
            </th>
            <th>
                <blockquote>
                    <p><strong>Weight</strong></p>
                    <p><strong>POS</strong></p>
                </blockquote>
            </th>
        </thead>
        <tr>
            <td>
                <blockquote>
                    <p>User type in the phase considered</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>Represents the capability to respect procedures, facing operational constraints.</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0: Favourable</strong></p>
                    <p>1: Moderate</p>
                    <p>2: Unfavourable</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0: Industry</strong></p>
                    <p>1: General public</p>
                    <p>2: Military</p>
                    <p>The most severe level must be adopted for military applications</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>20</p>
                </blockquote>
            </td>
        </tr>
        <tr>
            <td>
                <blockquote>
                    <p>User qualification level in the phase considered</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>Represents the level of control of the user or the worker regarding an operational context</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0: Favourable</strong></p>
                    <p>1: Moderate</p>
                    <p>2: Unfavourable</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0: Highly qualified</strong></p>
                    <p>1: Qualified</p>
                    <p>2: Slightly qualified or with little experience</p>
                    <p>In some phases, the user to be considered is the person who does the maintenance or servicing</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>10</p>
                </blockquote>
            </td>
        </tr>
        <tr>
            <td>
                <blockquote>
                    <p>System mobility</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>Represents contingencies related to possibilities of the system being moved</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0:Non aggressive</strong></p>
                    <p>1: Moderate</p>
                    <p>2: Severe</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0: Few contingencies (fixed or stable environment)</strong></p>
                    <p>1: Moderate contingencies</p>
                    <p>2: Severe contingencies, large variability (automobile)</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>4</p>
                </blockquote>
            </td>
        </tr>
        <tr>
            <td>
                <blockquote>
                    <p>Product manipulation</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>Represents the possibility of false manipulations, shocks, drops, etc .</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0:Non aggressive</strong></p>
                    <p>1: Moderate</p>
                    <p>2: Severe</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0: Not manipulated</strong></p>
                    <p>1: Manipulation without displacement or disassembly</p>
                    <p>2: Manipulation with displacement or disassembly</p>
                    <p>The severe level should be adopted if maintenance on the product is possible in the phase
                        considered</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>15</p>
                </blockquote>
            </td>
        </tr>
        <tr>
            <td>
                <blockquote>
                    <p>Type of electrical network for the system</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>Represents the level of electrical disturbance expected on power supplies, signals and electrical
                        lines: power on, switching, power supply, connection/disconnection</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0:Non aggressive</strong></p>
                    <p>1: Moderate</p>
                    <p>2: Severe</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0: Undisturbed network (dedicated regulated power supply)</strong></p>
                    <p>1: Slightly disturbed network</p>
                    <p>2: Network subject to disturbances (on board network)</p>
                    <p>The network type is a system data but that can be broken down and related to specific products
                    </p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>4</p>
                </blockquote>
            </td>
        </tr>
        <tr>
            <td>
                <blockquote>
                    <p>Product exposure to human activity</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>Represents exposure to contingencies related to human activity: shock, change in final use, etc.
                    </p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0:Non aggressive</strong></p>
                    <p>1: Moderate</p>
                    <p>2: Severe</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0: Uninhabitable zone</strong></p>
                    <p>1: Possible activity in the product zone</p>
                    <p>2: Normal activity in the product zone</p>
                    <p>The product can be exposed to human activity even if it is not handled itself during normal use
                    </p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>8</p>
                </blockquote>
            </td>
        </tr>
        <tr>
            <td>
                <blockquote>
                    <p>Product exposure to machine disturbances</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>Represents contingencies related to operation of machines, engines, actuators: shock,
                        overheating, electrical disturbances, pollutants, etc.</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>0:Non aggressive</p>
                    <p><strong>1: Moderate</strong></p>
                    <p>2: Severe</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>0: Null (telephone)</p>
                    <p><strong>1: Indirect exposure (product in compartment)</strong></p>
                    <p>2: Strong or direct exposure (product in engine area)</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>3</p>
                </blockquote>
            </td>
        </tr>
        <tr>
            <td>
                <blockquote>
                    <p>Product exposure to the weather</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>Represents exposure to rain, hail, frost, sandstorm, lightning, dust</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0:Non aggressive</strong></p>
                    <p>1: Moderate</p>
                    <p>2: Severe</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p><strong>0: Null (home)</strong></p>
                    <p>1: Indirect exposure (compartment, station hall)</p>
                    <p>2: Outdoors (automobile engine)</p>
                </blockquote>
            </td>
            <td>
                <blockquote>
                    <p>2</p>
                </blockquote>
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
:label: Equation_1_36
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
:name: eee-table4-30
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