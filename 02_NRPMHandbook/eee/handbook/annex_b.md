<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_annex_b)=
# Annex B : Formulae concerning {numref}`eee_8_3_5_1`, Capacitors

(eee_annex_b_1)=
## Lambda physical formula

For ceramic and tantalum capacitors:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_32
\lambda_{\text{Physical}} = \lambda_{0_{\text{capacitor}}} \cdot \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \left( \Pi_{\text{Thermal}} + \Pi_{\text{TCy}} + \Pi_{\text{Mechanical}} \right)_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
````

With the following parameters:

```{list-table} Details of parameters for ceramic capacitors
:name: eee_table_b_1_1
:header-rows: 1
:widths: 40 60

* - Parameter
  - Description
* - $\lambda_{\text{phy}}$
  - Physical stresses failure rate (overall term)
* - $\lambda_{0_\text{capacitor}}$
  - Base failure rate for one group of capacitor
* - $\Pi_{\text{Thermo-electrical}}$
  - Thermo-electrical factor
* - $\Pi_{TCy}$
  - Cycling factor
* - $\Pi_{\text{mechanical}}$
  - Mechanical factor
* - $\Pi_{\text{induced}}$
  - Induced factor
```


(eee_annex_b_1_1)=
### Physical stresses for capacitors (ceramic & tantalum)

The physical stresses modelled for capacitors are the thermal, thermal cycling and mechanical factors.

````{admonition} Equation
:class: equation
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
Where, $\lambda_{0_{\text{capacitor}}}$, $E_{a}$, $S_{\text{reference}}$, $\gamma_{\text{TCy}}$, $\gamma_{\text{Mech}}$, $\gamma_{\text{TH}_{\text{EL}}}$ is explained in Annex A.3 to A.6 and presented in Table B.1-2 for ceramic capacitors and B.1-5 for tantalum capacitors.
````


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table_b_1_2')" placeholder="Search table...">

```{list-table} Details of parameters for ceramic capacitors
:name: eee_table_b_1_2
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
*   - Ceramic Capacitor Type I - Low {term}`CV`
    - ECCC_01
    - 0.03
    - 0.1
    - 0.3
    - 0.7
    - 0.28
    - 0.02
*   - Ceramic Capacitor Type I - Medium {term}`CV`
    - ECCC_02
    - 0.05
    - 0.1
    - 0.3
    - 0.7
    - 0.28
    - 0.02
*  - Ceramic Capacitor Type I - High {term}`CV`
    - ECCC_03
    - 0.40
    - 0.1
    - 0.3
    - 0.69
    - 0.26
    - 0.05
*   - Ceramic Capacitor Type II - Low {term}`CV`
    - ECCC_04
    - 0.08
    - 0.1
    - 0.3
    - 0.7
    - 0.28
    - 0.02
*   - Ceramic Capacitor Type II - Medium {term}`CV`
    - ECCC_05
    - 0.15
    - 0.1
    - 0.3
    - 0.7
    - 0.28
    - 0.02
*   - Ceramic Capacitor Type II - High {term}`CV`
    - ECCC_06
    - 1.20
    - 0.1
    - 0.3
    - 0.44
    - 0.51
    - 0.05
*   - Ceramic Capacitor Type II Polymer terminations - Low {term}`CV`
    - ECCC_07
    - 0.08
    - 0.1
    - 0.3
    - 0.7
    - 0.28
    - 0.02
*   - Ceramic Capacitor Type II Polymer terminations - High/Medium {term}`CV`
    - ECCC_08
    - 0.15
    - 0.1
    - 0.3
    - 0.7
    - 0.28
    - 0.02
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table_b_1_3')" placeholder="Search table...">

```{list-table} Definition of CV product for ceramic capacitors for space applications
:name: eee_table_b_1_3

* - <table class="myTable" id="eee_table_b_1_3">
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

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table_b_1_4')"
    placeholder="Search table...">

```{list-table} Groups of tantalum capacitors
:name: eee_table_b_1_4

* - <table class="myTable" id="eee_table_b_1_4">
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
            <td>Solid tantalum capacitor drop packaging</td>
            <td>ECTC_04</td>
            <td>1.09</td>
            <td>0.15</td>
            <td>0.4</td>
            <td>0.86</td>
            <td>0.12</td>
            <td>0.02</td>
        </tr>
        <tr>
            <td>Solid tantalum capacitor SMD packaging</td>
            <td>ECTC_05</td>
            <td>0.54</td>
            <td>0.15</td>
            <td>0.4</td>
            <td>0.84</td>
            <td>0.14</td>
            <td>0.02</td>
        </tr>
        <tr>
            <td>Solid tantalum axial metal packaging</td>
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

(eee_annex_b_1_2)=
### Physical stresses for plastic film capacitors

The generic formula for plastic film capacitors is a little different from the one presented above, as shown here:

General formula:`

````{admonition} Equation
:class: equation
```{math}
:label: Equation_1_37
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{Film}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}}
```
````

With:

````{admonition} Equation
:class: equation
```{math}
\lambda_{\text{Physical}} = \lambda_{0_{\text{capacitor}}} \cdot \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \left( \Pi_{\text{Thermal}} + \Pi_{\text{TCy}} + \Pi_{\text{Mechanical}} \right)_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}
````

With the following parameters:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table_b_1_5')"
    placeholder="Search table...">

```{list-table} Details of parameters for plastic film capacitors
:name: eee_table_b_1_5

* - <div class="wy-table-responsive">
      <table class="myTable" id="eee_table_b_1_5">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="math">\( \lambda_{\text{phy}} \)</span></td>
            <td>Physical stresses failure rate (overall term)</td>
          </tr>
          <tr>
            <td><span class="math">\( \lambda_{0_\text{capacitor}} \)</span></td>
            <td>Base failure rate for one group of capacitor</td>
          </tr>
          <tr>
            <td><span class="math">\( \Pi_{\text{Thermal}} \)</span></td>
            <td>Thermal factor</td>
          </tr>
          <tr>
            <td><span class="math">\( \Pi_{TCy} \)</span></td>
            <td>Cycling factor</td>
          </tr>
          <tr>
            <td><span class="math">\( \Pi_{\text{mechanical}} \)</span></td>
            <td>Mechanical factor</td>
          </tr>
          <tr>
            <td><span class="math">\( \Pi_{RH} \)</span></td>
            <td>Humidity factor</td>
          </tr>
          <tr>
            <td><span class="math">\( \Pi_{\text{induced}} \)</span></td>
            <td>Induced factor</td>
          </tr>
        </tbody>
      </table>
    </div>
```

````{admonition} Note
:class: note
PFILM  is defined in 8.3.3.9 and A.2.18.
````

The physical stresses modelled for plastic film capacitors are the thermal, thermal cycling, mechanical and humidity factors. 

````{admonition} Equation
:class: equation
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
Where, $\lambda_{0_{\text{capacitor}}}$, $E_{a}$, $S_{\text{reference}}$ explained in Annex A.3 to A.6 and presented in Table B.1-2 for ceramic capacitors and B.1-5 for tantalum capacitors.


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table_b_1_6')"
    placeholder="Search table...">

```{list-table} Parameters for physical stresses of plastic film capacitors.
:name: eee-table4-33

* - <table class="myTable" id="eee_table4_33">
        <thead>
            <tr>
                <th><strong>Type of plastic film capacitors</strong></th>
                <th><strong>Ref</strong></th>
                <th><strong>λ<sub>0_capacitor</sub></strong></th>
                <th><strong>E<sub>a</sub> (eV)</strong></th>
                <th><strong>S<sub>reference</sub></strong></th>
                <th><strong>γ<sub>TH El</sub></strong></th>
                <th><strong>γ<sub>TCy</sub></strong></th>
                <th><strong>γ<sub>Mech</sub></strong></th>
                <th><strong>γ<sub>RH</sub></strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Polypropylene film capacitor</td>
                <td>PP</td>
                <td>0.02</td>
                <td>0.65</td>
                <td>0.3</td>
                <td>0.18</td>
                <td>0.14</td>
                <td>0.02</td>
                <td>0.66</td>
            </tr>
            <tr>
                <td>Polyethylene terephtalate film capacitor</td>
                <td>PET</td>
                <td>0.06</td>
                <td>0.48</td>
                <td>0.3</td>
                <td>0.18</td>
                <td>0.14</td>
                <td>0.02</td>
                <td>0.66</td>
            </tr>
            <tr>
                <td>Polyethylene naphtalate film capacitor</td>
                <td>PEN</td>
                <td>0.03</td>
                <td>0.55</td>
                <td>0.3</td>
                <td>0.18</td>
                <td>0.14</td>
                <td>0.02</td>
                <td>0.66</td>
            </tr>
            <tr>
                <td>Polyphenylene sulfide film capacitor</td>
                <td>PPS</td>
                <td>0.02</td>
                <td>0.55</td>
                <td>0.3</td>
                <td>0.18</td>
                <td>0.14</td>
                <td>0.02</td>
                <td>0.66</td>
            </tr>
            <tr>
                <td>Teflon film capacitor</td>
                <td>PTFE</td>
                <td>0.03</td>
                <td>0.55</td>
                <td>0.3</td>
                <td>0.18</td>
                <td>0.14</td>
                <td>0.02</td>
                <td>0.66</td>
            </tr>
        </tbody>
    </table>
```

(eee_annex_b_1_3)=
### Induced factor Πinduced

**Csensitivity**

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table_b_1_7')"
    placeholder="Search table...">

```{list-table} Coefficient of sensitivity for capacitors
:name: eee_table_b_1_7
:header-rows: 1
:widths: 70 30

* - Technologies
  - $C_{\text{sensitivity}}$
* - Ceramic capacitor with defined temperature coefficient (type I)
  - 6.30
* - Ceramic capacitor with non-defined temperature coefficient (type II X5R)
  - 6.48
* - Ceramic capacitor with non-defined temperature coefficient (type II X7R)
  - 6.48
* - Ceramic capacitor with polymer terminations and non-defined temperature coefficient (type II X5R)
  - 6.08
* - Ceramic capacitor with polymer terminations and non-defined temperature coefficient (type II X7R)
  - 6.03
* - Tantalum capacitors
  - 7.43
* - Plastic film capacitors
  - 6.05
```

(eee_annex_b_2)=
## Pi Part-Manufacturing

(eee_annex_b_2_1)=
### Ceramic capacitors

```{list-table} Recommendation for definition of parameter $QA_{\text{component}}$ for ceramic capacitors
:name: eee_table_b_2_1
:header-rows: 1
:widths: 50 30 20

* - Ceramic capacitors: Component quality assurance level
  - Position relative to the state of the art
  - $QA_{\text{component}}$
* - Qualification according to one of the following standards:  
    MIL-PRF-xxxx level T, MIL-PRF-xxxx level S, MIL-PRF-xxxx level R,  
    ESCC 300x, NASDA-QTS-xxxx class I (JAXA-QTS-2040E)
  - Higher
  - 3
* - Qualification according to one of the following standards:  
    AEC Q200, MIL-PRF-xxx level P, NASDA-QTS-xxxx class II,  
    with identification of manufacturing sites for these standards,  
    qualification according to approved CECC standards.
  - Equivalent
  - 2
* - Qualification according to one of the following MIL-PRF-xxxx level M,  
    or qualification program internal to the manufacturer and unidentified manufacturing sites
  - Lower
  - 1
* - No information
  - Much lower
  - 0
```

(eee_annex_b_2_2)=
### Tantalum capacitors

```{list-table} Recommendation for definition of parameter $QA_{\text{component}}$ for tantalum capacitors
:name: eee_table_b_2_2
:header-rows: 1
:widths: 50 30 20

* - Tantalum capacitors: Component quality assurance level
  - Position relative to the state of the art
  - $QA_{\text{component}}$
* - Qualification according to one of the following standards:  
    AEC Q200, MIL-PRF-xxxx level T, MIL-PRF-xxxx level B,  
    ESCC 300x, NASDA-QTS-xxxx class I (JAXA-QTS-2040E)
  - Higher
  - 3
* - Qualification according to one of the following standards:  
    MIL-PRF-xxxx level C, NASDA-QTS-xxxx class II with identification of manufacturing sites for these standards,  
    qualification according to approved CECC standards.
  - Equivalent
  - 2
* - Qualification according to one of the following:  
    MIL-PRF-xxxx level D, or qualification program internal to the manufacturer and unidentified manufacturing sites
  - Lower
  - 1
* - No information
  - Much lower
  - 0
```

(eee_annex_b_2_3)=
### Plastic film capacitors

```{list-table} Recommendation for definition of parameter $QA_{\text{component}}$ for plastic film capacitors
:name: eee_table_b_2_3
:header-rows: 1
:widths: 50 30 20

* - Plastic film capacitors: Component quality assurance level
  - Position relative to the state of the art
  - $QA_{\text{component}}$
* - Qualification according to one of the following standards:  
    AEC Q200, MIL-PRF-xxxx level T, MIL-PRF-xxxx level S, MIL-PRF-xxxx level R,  
    ESCC 400x, NASDA-QTS-xxxx class I (JAXA-QTS-2050D)
  - Higher
  - 3
* - Qualification according to one of the following standards:  
    MIL-PRF-xxx level P, NASDA-QTS-xxxx class II with identification of manufacturing sites for these standards,  
    qualification according to approved CECC standards.
  - Equivalent
  - 2
* - Qualification according to MIL-PRF-xxxx level M,  
    or qualification program internal to the manufacturer and unidentified manufacturing sites
  - Lower
  - 1
* - No information
  - Much lower
  - 0
```




<!--

This table contains, for each phase of the development and manufacturing, the recommendations for the satisfaction level of the questions of the questionnaire to estimate the process factor $\Pi_{\text{Process}}$ for quality and technical control over reliability in the product life cycle as defined in Section {numref}`eee_8_1`. It considers also the modified questions of {ref}`eee_annex_c` adapted to space applications. The recommendations are done for the following contributors:

-   The prime contractor for classical space applications;

-   The sub-contractor for classical space applications;

-   The prime contractor for newspace applications;

-   The sub-contractor for newspace applications.

The responses and demonstrations made during the questionnaire will be used to fix a Satisfaction\_mark to the recommendation (levels L1 to L4):

-   L1 = the recommendation is not applied, definite risks regarding reliability;

-   L2 = the recommendation is only partially applied, potential risks regarding reliability;

-   L3 = the recommendation is practically applied, few risks regarding reliability;

-   L4 = the recommendation is fully applied, no significant risk regarding reliability.

Generally, each question is dedicated to either the prime contractor or the sub-contractor. When one of them has an assigned level from L1 to L4, the other is considered as Non Applicable. Some questions are also Not Applicable for both as they are not relevant for the space industry. The list of these Not Applicable questions are the following:

-   Phase "Specification": question n°117;

-   Phase "Design": questions n°87 and 147;

-   Phase "Operation and Maintenance": questions n°20, 35, 47, 63, 66, 67, 73, 74, 75, 77, 78, 79, 80, 81, 82 and 91;

-   Phase "Support Activities": question n°110;

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-127-a')" placeholder="Search table...">

```{list-table} Questions and answers to process questionnaire - SPECIFICATION
:name: eee-table4-127-a
:header-rows: 1
:widths: 3 50 22 5 5 5 5 5

*   - No.
    - Recommendation
    - Questions
    - Weight
    - Classic - Prime
    - Classic - Sub
    - Newspace - Prime
    - Newspace - Sub
*   - 1
    - Financing is assigned to the project's reliability manager. This is the subject of a separate item (at accounting level) in project management. Personnel and means necessary for carrying out Reliability studies satisfactorily are made available to the product reliability manager.
    - Is there a financing item for reliability studies? Have the necessary means and personnel been identified?
    - 10.7
    - NA
    - L3 L4
    - NA
    - L2 L3 L4
*   - 2
    - The operating dependability (reliability) business participates in the allocation of requirements to subassemblies.
    - Are global reliability requirements allocated to subassemblies? What allocation method was used?
    - 10.4
    - NA
    - L3 L4
    - NA
    - L1 L2 L3 L4
*   - 26
    - Describe the environment in which the product will be stored, transported, used and maintained. Describe average and maximum quantitative values for the following characteristics: Temperature, Humidity, Shocks, Vibrations, Pressure, Penetration/abrasion, Ambient light, Mounting position, Weather (wind, rain, snow), Operators' qualification level.
    - Is there a description and characterisation of the environment in which the product will be stored, transported, used and maintained?
    - 12.4
    - L4
    - NA
    - L4
    - NA
*   - 28
    - Precisely define what will be considered as a product failure (possibilities of acceptable degraded modes)
    - What is considered as product failure?
    - 10.3
    - L4
    - NA
    - L4
    - NA
*   - 29
    - Define the method of demonstrating the product reliability (this method must be accepted by the customer).
    - How is it planned to demonstrate the product reliability?
    - 9.8
    - L4
    - NA
    - L2 L3 L4
    - NA
*   - 31
    - Define the life profile for the product (breakdown into operational scenarios for which reliability performances are expected).
    - Is the usage profile of the product for which reliability performances are expected defined?
    - 9.9
    - L4
    - NA
    - L4
    - NA
*   - 40
    - The following essential elements must be taken into account in formulating the requirement for a reliability specification:<ul><li>Quantitative formulation of the reliability requirement,</li><li>Complete description of the environment in which the system will be stored, transported, used and maintained,</li><li>Life profile of the product for which Reliability performances are expected,</li><li>Clear identification of the type of time measurement (Hours of operation, Hours of flight, cycles, etc),</li><li>Clear definition of what forms a failure,</li><li>Clear description of the method selected to demonstrate that the system is confirming with the specified reliability,</li><li>Associate penalties with a failure to satisfy reliability requirements.</ul>
    - What is the context associated with product reliability requirements?
    - 8.1
    - L4
    - NA
    - L4
    - NA
*   - 53
    - Make use of feedback from operations obtained from similar products used in similar environments so as to achieve a good {term}`level of confidence <Level of confidence>` in maintenance of reliability performances. Feedback from operations is also used to calibrate or check predictive reliability methods. These studies require a large amount of time to collect operational data and precise recording of anomalies encountered. Input data comprise<ul><li>records of observed anomalies,</li><li>conditions for use of the product (life profile, operational environment, usage duration),</li><li>analysis of the cause of the failure (that may or may not be due to the manufacturer). Output data comprise: Operational reliability that may be extrapolated for different environments and life profiles by models output from the {term}`system engineering <System engineering>`.
    - Is feedback from operations used to maintain a good {term}`level of confidence <Level of confidence>` in achieving reliability performances?
    - 8.5
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 54
    - Use reliability engineering to optimise product architecture, design choices. Give reliability engineering authority if a reliability performance is not reached
    - Are the reliability criteria taken into account in the architecture of the products, and design, industrialisation and support choices?
    - 12.6
    - NA
    - L3 L4
    - NA
    - L1 L2 L3 L4
*   - 57
    -  At least one of the following three types of specifications (or an equivalent) must be used for the specification of reliability performances (that must be quantitative):The MTBF or the failure rate is a definition adapted to reparable systems with a long life and / or for which the life of missions is short relative to their MTBF. The validity of the assumed constant failure rate in time sometimes needs to be proven. The probability of survival for a defined time period. For example, this specification is used when a high reliability level is required throughout the mission duration. The probability of success independent of time for single use devices. It can also be used for devices with cyclic use. These quantitative values shall be specified either as average values (design objectives) or minimum acceptable values below which the customer finds that the system is completely unsatisfactory with regard to his operational requirements. The objective type (design objective or minimum acceptable) shall be specified explicitly.
    - Is the reliability requirement expressed quantitatively?
    - 8.2
    - L4
    - NA
    - L4
    - NA
*   - 62
    - Formally identify requirements and critical factors related to reliability. The risk management procedure will use this information. Mark and manage these risks. Existence of an action plan.
    - Have technical risks affecting the reliability been identified?
    - 12.4
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 64
    - Identify the type of time measurement for reliability performances (Hours of operation, Hours of flight, cycles, etc).
    - Has a type of time measurement (Hours of operation, Hours of flight, number of cycles, etc.) been identified for reliability performances?
    - 6.6
    - L4
    - NA
    - L4
    - NA
*   - 65
    - Customer requirements must be identified, documented and traced with respect to input documents.
    - Have customer requirements been identified, documented and traced?
    - 7.3
    - NA
    - L4
    - NA
    - L4
*   - 103
    - Reliability requirements must be negotiated to take account of the state-of-the-art of technology and to optimise the cost-performance of the product design and Reliability studies. For an initial objective requested by the customer, a study by the project manager will evaluate the cost of achieving Reliability performances and propose alternatives so as to optimise the cost of achieving Reliability performances. The results of the negotiations will be integrated into the final offer submitted to the customer.
    - Is the state-of-the-art of technology taken into account, and is the cost-performance of the product design optimised during negotiations of reliability requirements with the customer?
    - 10.7
    - NA
    - L3 L4
    - NA
    - L3
*   - 106
    - Organise a design review. Check that reliability requirements are respected. This review defines:<ul><li>reliability allocations</li><li>conditions for use (life profile)</li></ul>
    - Has a design review been organised in which Reliability aspects are dealt with?
    - 10.3
    - L4
    - NA
    - L4
    - NA
*   - 107
    - Organise a requirements review, check that all reliability requirements are identified and that the customer and the supplier understand each other. It must be possible to validate, achieve and verify these requirements (conformity means).
    - Has a requirements review been organised dealing with reliability aspects?
    - 10.3
    - NA
    - L4
    - NA
    - L4
*   - 117
    - The maintenance policy requested by the customer should be taken into account in this activity to maintain product reliability in the long term.
    - How is the product maintenance policy (requested by the customer) taken into account?
    - 5.8
    - NA
    - NA
    - NA
    - NA
*   - 122
    - A Reliability plan has been written, or there is a Development Plan that fully describes reliability aspects
    - Has a Reliability Plan been written for the product?
    - 7.6
    - NA
    - L4
    - NA
    - L1 L2 L3 L4
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-127-b')" placeholder="Search table...">

```{list-table} Questions and answers to process questionnaire - DESIGN
:name: eee-table4-127-b
:header-rows: 1
:widths: 3 50 22 5 5 5 5 5

*   - No.
    - Recommendation
    - Questions
    - Weight
    - Classic - Prime
    - Classic - Sub
    - Newspace - Prime
    - Newspace - Sub
*   - 6
    - Obtain technical data for subassemblies in order to develop the production test.
    - Are technical data for subassemblies available for development of the production test?
    - 7.8
    - NA
    - L4
    - NA
    - L4
*   - 7
    - Procedures related to corrective actions include:<ul><li>Effective processing of customer complaints and product nonconformity reports,<li></li>The search for the causes of nonconformity related to the product, the process and the quality system, and recording the results of this search,<li></li>Determining corrective actions necessary to eliminate the causes of nonconformity,<li></li>Application of all means to measure the effectiveness of the corrective action.</li>
    - What process is used to collect technical events, to produce anomaly reports and measure increases in reliability? How are equipment changes managed?
    - 6.7
    - NA
    - L4
    - NA
    - L4
*   - 8
    - Procedures related to preventive actions include:<ul><li>The use of appropriate information sources such a processes and operations affecting the product quality, waivers, audit results, quality records, maintenance reports and customer complaints, so as to detect, analyse and eliminate the potential causes of nonconformities,<li></li>Determination of appropriate steps to deal with any problem requiring preventive action,<li></li>Triggering of preventive actions and the application of control means to make sure that they produce the expected effect,<li></li>Assurance that relative information about actions implemented is submitted to the management review.</li>
    - Do procedures related to preventive actions include:<ul><li>The use of appropriate information sources?<li></li>Determination of appropriate steps?<li></li>Triggering of preventive actions and application of control means?<li></li>A management review of corrective actions?</li>
    - 6.8
    - NA
    - L4
    - NA
    - L1 L2 L3 L4
*   - 16
    - Make sure that a person responsible for logistics support, industrialisation, purchasing, development and RAMS is involved at every step.Make sure that the baseline used allows simultaneous engineering. The contractor's organisation is based on permanent specialists of the function.
    - Is the point of view of the different disciplines involved in engineering taken into account?
    - 16.7
    - NA
    - L3 L4
    - NA
    - L1 L2 L3 L4
*   - 34
    - Set up training courses so that the person is in full control of the test means, standards and interpretation of measurements: planned training and monitoring of skills.
    - What measures have been taken so that the person concerned is qualified for the test means, measurements and relevant standards?
    - 5.8
    - NA
    - L3 L4
    - NA
    - L1 L2 L3 L4
*   - 36
    - Make sure that all data justifying the need are available and are validated in a preliminary reliability study document. A directive imposes that this document is written.
    - Is there a list of justification elements?
    - 8
    - NA
    - L4
    - NA
    - L1 L2 L3 L4
*   - 38
    - Have a means of recording know how and technical standards through business procedures (information recording the designer's know how: guidelines, checklist, process, operating methods, etc.). Manage and monitor these procedures as a function of changes to techniques.
    - Is there any management of business procedures?
    - 13.8
    - NA
    - L3 L4
    - NA
    - L1 L2 L3 L4
*   - 39
    - Make sure that the skills required for an activity are assigned to the operators and periodically verify that training is appropriate for the activities.
    - Is there any management of skills?
    - 24.5
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 44
    - Make sure that there is a list of business recommendations on manipulation and storage operations at the user. This collection must be enriched by feedback from operations.
    - Is there a collection of business recommendations for manipulation and storage operations at the customer?
    - 7.7
    - NA
    - L3 L4
    - NA
    - L1 L2 L3 L4
*   - 48
    - Produce and maintain a preferred components list taking account of reduced reliability characteristics.
    - Is there a preferred components list?
    - 8
    - NA
    - L4
    - NA
    - L4
*   - 50
    - Make sure that there is a methodology to: gather technical events, update, operation. Recording feedback from operations, with the objective of improving the reliability of future designs. Make sure that feedback from operations is actually used by designers; existence of a usage methodology.
    - Has feedback from operations been used to improve future designs?
    - 24.2
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 51
    - Make sure that there is centralised management of reliability evaluation studies to reuse previous calculations with stresses: clearly identified basic assumptions, data extractable and reusable by design businesses
    - Is there a database recording reliability evaluation studies?
    - 10.6
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 52
    - Make sure that the traceability and justification for the design are done with the objective of controlling definitions and changes. Existence of a methodology to allow access to this information within the design office.
    - Is there a database on the history and definition justifications?
    - 7.8
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 54
    - Use reliability engineering to optimise product architecture, design choices. Give reliability engineering authority if a reliability performance is not reached.
    - Are the reliability criteria taken into account in the architecture of the products, and design, industrialisation and support choices?
    - 12.6
    - NA
    - L3 L4
    - NA
    - L2 L3 L4
*   - 61
    - List and implement protection means to avoid reducing the reliability of the subassembly.
    - Have means of protecting subassemblies during some production activities been identified and implemented?
    - 7.3
    - NA
    - L4
    - NA
    - L4
*   - 62
    - Formally identify requirements and critical factors related to reliability. The risk management procedure will use this information. Mark and manage these risks. Existence of an action plan.
    - Have technical risks affecting the reliability been identified?
    - 21
    - NA
    - L3
    - NA
    - L2 L3 L4
*   - 83
    - Make sure that the test coverage is maximum and is based on the specification. Justification of the coverage in a document.
    - Is there assurance that the test coverage is maximum, and that it is based on the specification? Is there a justification document?
    - 6
    - NA
    - L4
    - NA
    - L2 L3 L4
*   - 86
    - Implement design verifications: these procedures must be based on proof reading, approval circuit and reviews with the objective of making sure that the orientation actions, and elements chosen are correct.
    - Are there any design verification procedures?
    - 27.1
    - NA
    - L4
    - NA
    - L2 L3 L4
*   - 87
    - Make sure that the maintenance concept is formalised and validated by the customer. Example of documents to be presented in response to requirements of the concept: integrated logistics support plan, logistics supportability file.
    - Is there a maintenance concept?
    - 5.4
    - NA
    - NA
    - NA
    - NA
*   - 106
    - Organise a design review. Check that reliability requirements are respected. This review defines:<ul><li>reliability allocations</li><li>conditions for use (life profile)</li>
    - Has a design review been organised in which Reliability aspects are dealt with?
    - 12.1
    - NA
    - L4
    - NA
    - L3 L4
*   - 123
    - Make sure that adjustments to the baseline are specified in the management plan. Make sure that skills are committed on the project in the management plan and that there is a planning.
    - Is there a reliability management plan in which key skills (specialists) are identified?
    - 17.7
    - NA
    - L4
    - NA
    - L2 L3 L4
*   - 124
    - Make sure that there is an acceptance procedure and that it is relevant. The acceptance procedure is written from a definition file and a test oriented manufacturing file describing adjacent cases, presenting a functional description, inputs/outputs, and key manufacturing points.
    - Is there an acceptance procedure for production tests?
    - 7.8
    - NA
    - L4
    - NA
    - L4
*   - 130
    - Make sure that there is a project documentation to correctly evaluate the reliability.
    - Is there any analysis documentation for evaluating the reliability?
    - 7.5
    - NA
    - L4
    - NA
    - L2 L3 L4
*   - 131
    - Make sure that there is a design methodology obliging designers to apply rules aimed at improving reliability. Make sure that it is checked that rules are applied.
    - Are there any design rules to adapt the choice of a component for a given reliability?
    - 12.7
    - NA
    - L4
    - NA
    - L4
*   - 132
    - Make sure that the developer includes test operation stresses specified by the test manager in the product definition. There is a precise test methodology.
    - Are test points defined and are recommendations for production tests applied?
    - 6
    - NA
    - L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 133
    - Make sure that there is a product / process qualification procedure for manufacturing processes.
    - Is there a qualification procedure for products and manufacturing process?
    - 7.2
    - NA
    - L4
    - NA
    - L3 L4
*   - 134
    - Make sure that suppliers are qualified and follow up the following aspects: sustainability, quality monitoring.
    - Is there a product/supplier qualification procedure?
    - 7.6
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 135
    - Make sure that there is a qualification procedure so as to evaluate risks related to the use of the new technology component (for example by extrapolation of use in a similar environment).
    - Are new components qualified before they are used?
    - 7.2
    - NA
    - L4
    - NA
    - L4
*   - 137
    - Make sure that the predicted reliability calculation is made using a recognised tool associated with the selected calculation methodology
    - Is there a tool for formally calculating the reliability? Is there a formal choice of the reliability compilation (FIDES, adjusted MIL-HDBK-217, proprietary feedback from operations or other method)?
    - 7.7
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 147
    - Make a compromise between the complexity of built-in tests and the reliability of components used for the operational functions, in order to achieve an effective test coverage ratio. Request a justification document on the subject.
    - Are choices related to test coverage documented?
    - 10.2
    - NA
    - NA
    - NA
    - NA
*   - 150
    - Use of validated and recognised modelling means (particularly electrical, thermal, mechanical models). Demonstrate that tools are monitored and updated.
    - Are validated and recognised modelling means used?
    - 13.8
    - NA
    - L4
    - NA
    - L3 L4
```


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-127-c')" placeholder="Search table...">

```{list-table} Questions and answers to process questionnaire - MANUFACTURING OF BOARD - SUBASSEMBLY
:name: eee-table4-127-c
:header-rows: 1
:widths: 3 50 22 5 5 5 5 5

*   - No.
    - Recommendation
    - Questions
    - Weight
    - Classic - Prime
    - Classic - Sub
    - Newspace - Prime
    - Newspace - Sub
*   - 5
    - The product final test and particularly the coverage level achieved by this test must be studied and defined with respect to the product Specification and Design. This test must check the product according to procedures in the System Testability Manual:<ul><li>Appropriate treatment in case of a nonconformity,</li><li>Recording and saving results for monitoring of tests.</li>
    - Is there a final product test? Are nonconforming test results treated: at the product, at the process? Are test results recorded?
    - 6.6
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 7
    - Procedures related to corrective actions include:<ul><li>Effective processing of customer complaints and product nonconformity reports,</li><li>The search for the causes of nonconformity related to the product, the process and the quality system, and recording the results of this search,</li><li>Determining corrective actions necessary to eliminate the causes of nonconformity,</li><li>Application of all means to measure the effectiveness of the corrective action.</li>
    - What process is used to collect technical events, to produce anomaly reports and measure increases in reliability? How are equipment changes managed?
    - 15.4
    - NA
    - L4
    - NA
    - L4
*   - 8
    - Procedures related to preventive actions include:<ul><li>The use of appropriate information sources such a processes and operations affecting the product quality, waivers, audit results, quality records, maintenance reports and customer complaints, so as to detect, analyse and eliminate the potential causes of nonconformities,</li><li>Determination of appropriate steps to deal with any problem requiring preventive action,</li><li>Triggering of preventive actions and the applicat on of control means to make sure that they produce the expected effect,</li><li>Assurance that relative information about actions implemented is submitted to the management review.</li>
    - Do procedures related to preventive actions include:<ul><li>The use of appropriate information sources?</li><li>Determination of appropriate steps?</li><li>Triggering of preventive actions and application of control means?</li><li>A management review of corrective actions?</li>
    - 15.6
    - NA
    - L4
    - NA
    - L3 L4
*   - 17
    - The subassembly varnishing activity, that must result in immunity to a number of stresses that can reduce the reliability of the subassembly, must be carried out with a permanent inspection particularly dealing with monitoring of the main parameters that are:<ul><li>The humidity rate,</li><li>The temperature,</li><li>The quality of varnish constituents,</li><li>The thickness of the varnish deposit.</li>The varnish viscosity must also be checked at least daily.
    - Are inspection parameters monitored during the varnishing activity?
    - 9.9
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 18
    - Maintenance procedures related to corrective actions in production must include:<ul><li>Effective processing of complaints and subassembly nonconformity reports,</li><li>The search for causes of nonconformity related to the process and recording of the results of this search,</li><li>Determination of corrective actions necessary to eliminate causes of nonconformity,</li><li>Application of control means to assure that the corrective action is implemented and that it produces the required effect.</li>
    - Does corrective maintenance take place as soon as an anomaly appears on production means or produced subassemblies?
    - 6.9
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 19
    - Based on the defined preventive maintenance plan and after its production, a correction is made by: redefining production means references, replacement of consumables, replacement of worn and therefore potentially defective parts (probes and inspection tools).
    - Is preventive maintenance planned to correct drifts to production means parameters?
    - 4
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 21
    - This verification is less complicated than a planned preventive maintenance action, and should be done by the user of the means (it forms part of the operator's training). Its purpose is to make sure that the operation will be done correctly and that it will provide the expected result (using the right loaded software or a correct configuration). The frequency of the verifications (to be defined) may be systematic before each use or after a defined number of uses of the means.
    - Is there a periodic verification of programming means so that the software loading operation is done correctly?
    - 4.1
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 22
    - This filter assures that the final test that forms the final verification milestone is carried out by a competent person and particularly a person whose skills are monitored to assure that the most recent requirements are taken into consideration. The audit assures that the operator reviews control over procedures and critical points, to achieve perfect confidence in execution of the final test.
    - Are the skills of final test operators systematically audited?
    - 4.1
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 23
    - It is important to perform the minimum number of manipulations of subassemblies during the production phase to limit risks of mechanical shocks and other overstresses. Furthermore, the automation of manipulations between activities during the entire production provides a means of eliminating a large number of failures caused by human intervention. This recommendation remains applicable to very small series
    - Are production and manipulation of subassemblies automated?
    - 6.5
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 25
    - It is essential to specifically monitor and maintain (by updating) references coordinates, batch numbers, etc.) loaded in production tools, for the automation of tasks and for reliable execution of activities.
    - Are data loaded in programmable production means managed?
    - 2.8
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 33
    - Delegation of the general inspection assures objectivity making it possible to better filter any errors that could have occurred during processes used for varnishing of subassemblies and critical for reliability. Filling in the follower sheet enables traceability of all operations and actions that occurred during this varnishing.
    - Is the subassembly varnishing inspection done by someone other than the varnishing operator?
    - 4.4
    - NA
    - L4
    - NA
    - L4
*   - 37
    - The particular subassembly drying task within the varnishing activity requires know-how by the operator, who therefore needs to be experienced if it is required to avoid overstressing subassemblies. Reduced reliability due to an excessively high temperature, an excessively long application or imperfect drying, can cause serious degradations in the remainder of the process.
    - Is the subassembly drying activity after varnishing carried out by experienced personnel?
    - 5.6
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 41
    - Operators must be provided with a workstation datasheet or any other information means describing actions to be carried out and different instructions and protocols to be followed.
    - Are the instructions (protocol and particular instructions to be respected) given to operators?
    - 7.4
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 42
    - Take readings of temperature profiles for each program used with the soldering means to precisely determine levels that were applied (amplitude and duration so as to verify that values remain within the required range during execution of the activity).
    - Are there any records of temperature profiles for each program used for the soldering means?
    - 6.9
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 43
    - The description of actions to be carried out during application of a production tool on a subassembly must be sufficiently explicit to not allow interpretation by the operator that would result in accidental use of inappropriate means. It must be assured that the reliability of subassemblies will not be reduced by the use of an unsuitable tool.
    - How is it assured that production means are adapted to elements to be produced?
    - 7.2
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 46
    - Recording on an Anomaly datasheet type document facilitates monitoring of different malfunctions. This anomaly datasheet is one of the main documents used to implement preventive and/or corrective maintenance actions. The assembly contributes to traceability for management of nonconformities (products and means).
    - How are technical events or anomaly reports recorded?
    - 7.6
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 60
    - The different subassemblies are made and integrated starting from planned tasks that may correspond to simultaneous activities. Priorities have to be managed, so that only a minimum number of subassemblies needs to be stored (any time taken in routing production will require storage and additional manipulations of subassemblies), thus limiting ways in which the reliability of elements might be reduced.
    - How are priorities managed as a function of end of file dates?
    - 3.1
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 61
    - List and implement protection means to avoid reducing the reliability of the subassembly.
    - Have means of protecting subassemblies during some production activities been identified and implemented?
    - 7.3
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 77
    - A clear statement of persons authorised to approve process changes must be available. These changes requiring acceptance by the customer must be identified before they are applied. Any change affecting processes, production equipment, tools and programs, must be documented and must lead to a procedure to control its application. Make sure that results of process changes produce the required effect and that the changes have not reduce the product quality.
    - How are changes to manufacturing processes controlled?
    - 13.9
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 84
    - Measure the bath contamination by sampling (frequency to be defined) so as not to exceed the allowable pollutant content during this activity. Excess content of pollutant will increase the risks of reducing the reliability of the solder.
    - Is contamination of solder baths measured by sampling (so as not to exceed the pollutant content during this activity)?
    - 5.8
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 88
    - Set up self-checking to filter human errors that could reduce the reliability of the subassembly
    - Is a self checking system applied to filter human errors (that could reduce reliability of the subassembly)?
    - 5.3
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 89
    - It must be impossible for reliability to be reduced due to nonconformity of soldering (missing, excess or offset) during electronic component transfer activities. Indicators (deposited quantity, appearance after transfer, etc.) must be identified and they must be monitored (operator check, etc) to detect all causes of reduced reliability of subassemblies.
    - Are there any indicators to verify that a good solder is obtained when components are transferred?
    - 6
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 90
    - Setting up periodic store inventories prevents the use of any elements that do not satisfy expiration criteria; correct name or identification, correct geographic location during storage).
    - Are checks made to assure that stock inventories are defined and respected
    - 5.5
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 91
    - Set up protections against ESD for subassemblies during manipulations and storage.
    - Have you set up specific protections against ESD for subassemblies during manipulations and storage?
    - 26
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 92
    - A number of production means parameters are provided by test tools (probes, sensors, detectors, etc.). These test tools need to be monitored periodically (frequency to be defined) to assure that the measurements made are reliable. The delta between the stress actually applied by the production means and the measurement made of this stress must be minimal and perfectly measurable.
    - Are there any periodic verifications used to monitor tools used for inspection of production means?
    - 4.9
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 93
    - Set up suitable protections if necessary to avoid degrading subassemblies during this activity. The purpose of these protections is to isolate part of the subassembly, and it must be possible to verify that they were effective after the activity is complete (tests, measurements).
    - Are there any appropriate protections to avoid degrading subassemblies while cleaning?
    - 6
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 94
    - Set up a self-test of testers in order to detect any anomalies. It must be impossible to perform a test if the self-test is not conclusive or unless there is a traced waiver (authorisation to execute the test provided that the follower sheet is marked and signed and cannot be separated from the subassembly) accompanying the subassembly thus tested.
    - Are there any self-tests of test tools in order to detect any anomalies before use on the subassembly ?
    - 5.1
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 95
    - This cross check filters nonconformities before the subassembly is continued in the production process. The final inspection activity is the last level for identification of errors that could reduce the reliability of the subassembly caused by unreliable varnishing.
    - Is there a cross-check to optimise the final inspection of varnishing of subassemblies?
    - 5.6
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 96
    - A so-called conformity check must be identified and must occur before every final entry of items into storage. Check on reception that there is no non-conforming element that could potentially reduce reliability during the remainder of the process.
    - Is there a conformity check when putting into stock in stores with the exclusion of non-conforming items?
    - 6
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 97
    - Use of the statistical process control by making SPC (Statistical Process Control) cards verifies that some activities carried out at precise moments in the production phase take place correctly. The SPC is used for activities for which the risk (statistical) of having a nonconformity that reduces the reliability of the subassembly is highest.
    - Is there an SPC (Statistical Process Control) for the production process?
    - 4.5
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 98
    - The special feature of the varnishing activity requires a precise description of the protocol and parallel actions to be followed to assure that it is done reliably.
    - Is there a detailed description of the varnishing protocol?
    - 5.8
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 99
    - Accidental use of out-of-date consumables can have a negative influence on quality and consequently reliability, a number of suitable methods must be set up for preservation, identification and withdrawal of the products concerned if necessary. Systematically reading labels before use to identify each product used and to obtain all information about expiration, reduces risks of using a product that would reduce reliability.
    - Is there a label for identification and withdrawal of out-of-date consumables?
    - 6.4
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 100
    - This involves monitoring of test execution indicators to take immediate action with: <li><ul>a definition of envelope curves, outside     which it can be deemed that there is no anomaly,</ul><ul>an alarm as soon as an anomaly is detected,</ul><ul>suspension of the current activity to avoid stressing the subassembly,</ul><ul>compulsory action and correction of the anomaly before the activity can be resumed and continued.</ul></li>
    - Is there a real time processing of test monitoring indicators so as to not to degrade the subassembly as soon as an anomaly appears?
    - 4.7
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 101
    - This maintenance by metrological monitoring of production tool parameters must make it possible to eliminate the risk of degrading the reliability of an element by aggression of the subassembly (overstress). The use of parameters that are not precisely consistent with specified parameters (temperature too low, etc.) would make it impossible to assure that the operation is reliable.
    - Is there a preventive maintenance by metrological monitoring?
    - 5.9
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 102
    - The activity must be done under the permanent control of a number of fundamental parameters and it must be possible to determine if the subassembly was overstressed or affected by a malfunction during this activity.
    - Is a method used for checking drifts and malfunctions (by probes and other monitoring systems), and to validate or allow the operation of drying ovens?
    - 6.1
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 112
    - Have high and low safety systems tied to inspection and monitoring means (systematically stop the cycle and have a technician carry out an analysis before restarting)
    - Are high and low safety systems provided tied to inspection and monitoring means (systematically stop the cycle and analysis by a technician before restarting)?
    - 5.7
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 115
    - Possess a plan for qualification of a method of removing the masking varnishes used so as to avoid reducing the reliability of the subassembly. Risks of the penetration of humidity affecting the reliability of the subassembly are strong if the operator does not take some precautions.
    - Is there a qualification plan of the method of removing masking varnishes used so as not to reduce reliability of the subassembly?
    - 6.5
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 120
    - Include an inspection step (even visual) to assure that the masking varnish is placed correctly before varnishing.
    - Is there an inspection step (even visual) to assure that the masking varnish placement activity takes place correctly before varnishing?
    - 6.5
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 121
    - Provide preventive maintenance (by the use of a plan describing a maintenance strategy) to detect an anomaly, if there is one, before use on the subassembly. This maintenance must be described in a maintenance plan describing intervals, parameters to be verified, critical levels, margins, etc.
    - Is there a preventive maintenance to detect an anomaly, if there is one, before a production means is used on a subassembly?
    - 4.7
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 125
    - Wait for the time necessary to reach thermal equilibrium between each transfer phase to avoid overstressing the subassembly. A procedure must specify this need and describe the method.
    - Is a rest time between each silk screen printing operation respected to avoid overstressing the subassembly?
    - 6.4
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 126
    - All preventive and corrective maintenance operations for keeping production means and tools in condition, must be described in a plan revised periodically so as to prevent the use of any tool for which parameters have changed (drifts, etc.) and that could thus cause damage (physical deformations of component connections) during placement operations.
    - Have plans for maintenance of production means been revised and made more robust to eliminate any possibility of degradation to component connections?
    - 6.7
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 127
    - Make sure that varnish preparation (dosing) is controlled by a qualified procedure and measurements used for checking before use.
    - Is the preparation (dosing) of varnish controlled by a qualified procedure and test measurements?
    - 5.9
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 128
    - Make sure that the operators are well informed about final test activities and study how to update their skills in real time.
    - Is there a procedure for assuring that operators are well informed and are studies done to determine how to update their skills in real time?
    - 4.4
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 129
    - Make sure that the final inspection of the varnishing is effective by strict application of the inspection procedure. This final inspection must verify that the subassembly has passed each elementary step and its associated inspection (check the various validations of documents attached to the subassembly), respecting a formalised procedure.
    - Is it assured that the inspection on the final varnishing quality is effective, by strictly applying the inspection procedure
    - 5.2
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 136
    - Make sure that the person who will perform the task knows the procedure for implementing the means at a production workstation.
    - Is it checked that the procedure for implementing the means is known?
    - 5.1
    - NA
    - L1 L2
    - NA
    - L1 L2
*   - 138
    - Make sure that the right software is loaded and more particularly that it is the most recent version to be used in the subassembly. This identification information must also be traced in the remainder of the process.
    - Is it checked that the right software is loaded, and that its version is identified?
    - 6.7
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 139
    - Make sure that maintenance is done on production means and that this maintenance is followed, particularly to take account of the most recent nonconformities.
    - Is a check carried out to assure that means are maintained and that this maintenance is followed?
    - 5.9
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 140
    - Make sure that the operator has received training (qualification), appropriate for the activity.
    - Is it checked that the operator has received training (qualification), appropriate for the activity?
    - 8.5
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 141
    - All overstresses must be detectable and quantified (instant of occurrence stress level relative to required parameters). It must be possible to display this detection in real time and not only after the activity, so that action can be taken during the application thus reducing the overstress on the subassembly and therefore limiting its degradation.
    - Are means secured (drying oven T°) through direct monitoring by probes and recordings, to prevent overstresses?
    - 6.6
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 144
    - It is important that the person responsible for this activity should be informed so as to reduce anomalies caused by human error (in this case visual inspection) not detected during the inspection, so as to minimise the risk due to human error or the failure to detect an anomaly.
    - Are personnel made aware about a visual verification of subassemblies after placement and before remelting?
    - 5.9
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 145
    - Increase operators awareness about the verification of the quality of soldering flux deposit. Since this operation requires a special verification after it has been done, placement of an electronic barcode reading as verification phase must enable good monitoring of this inspection and the subassembly follower sheet must include a check that it has been done.
    - Are operators made aware of the need to verify the quality of soldering flux deposit (implementation of a verification action that must appear in the subassembly follower sheet)?
    - 5.9
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 153
    - Use measurements for verification of purchased products such as: examination of the required documentation, inspection and audit at the purchase source, examination of products on delivery.
    - Is the conformity of purchased products checked?
    - 8.6
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 154
    - Perform an inspection action (barcode reading, reading the S/N) to verify that the right product is available before starting the test.
    - Is an inspection action (barcode reading, reading the S/N) performed to verify that the right product is available before starting the test?
    - 6.1
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 155
    - Check that the test coverage during and after burn-in is formalised correctly.
    - Is it checked that the test coverage for burn-in is formalised correctly?
    - 5.2
    - NA
    - L3 L4
    - NA
    - L3 L4
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-127-d')" placeholder="Search table...">

```{list-table} Questions and answers to process questionnaire - INTEGRATION INTO EQUIPEMENT
:name: eee-table4-127-d
:header-rows: 1
:widths: 3 50 22 5 5 5 5 5

*   - No.
    - Recommendation
    - Questions
    - Weight
    - Classic - Prime
    - Classic - Sub
    - Newspace - Prime
    - Newspace - Sub
*   - 5
    - The product final test and particularly the coverage level achieved by this test must be studied and defined with respect to the product specification and design. This test must check the product according to procedures in the System Testability Manual:<li><ul>Appropriate treatment in case of a nonconformity,</ul><ul>Recording and saving results for monitoring of tests.</ul></li>
    - Is there a final product test? Are nonconforming test results treated: at the product, at the process? Are test results recorded?
    - 6.6
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 7
    - Procedures related to corrective actions include:<li><ul>Effective processing of customer complaints and product nonconformity reports,</ul><ul>The search for the causes of nonconformity related to the product, the process and the quality system, and recording the results of this search,</ul><ul>Determining corrective actions necessary to eliminate the causes of nonconformity,</ul><ul>Application of all means to measure the effectiveness of the corrective action.</ul></li>
    - What process is used to collect technical events, to produce anomaly reports and measure increases in reliability? How are equipment changes managed?
    - 15.4
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 8
    - Procedures related to preventive actions include:<li><ul>The use of appropriate information sources such a processes and operations affecting the product quality, waivers, audit results, quality records, maintenance reports and customer complaints, so as to detect, analyse and eliminate the potential causes of nonconformities,</ul><ul>Determination of appropriate steps to deal with any problem requiring preventive action,</ul><ul>Triggering of preventive actions and the application of control means to make sure that they produce the expected effect,</ul><ul>Assurance that relative information about actions implemented is submitted to the management review.</ul></li>
    - Do procedures related to preventive actions include:<li><ul>The use of appropriate information sources?</ul><ul>Determination of appropriate steps?</ul><ul>Triggering of preventive actions and application of control means?</ul><ul>A management review of corrective actions?</ul></li>
    - 15.6
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 9
    - When traceability is required, the system implemented must make it possible of:<li><ul>maintaining the product identification throughout the life cycle,</ul><ul>knowing the history (definition file + changes) and the final use (deliveries, scrap) of all products manufactured from the same batch of raw material or from the same manufacturing batch,</ul><ul>finding the identity of elements making up an assembly and the higher assembly,</ul><ul>finding the sequential documentation on production (manufacturing, assembly, inspection) of a given product (e.g. configuration follower sheet including recording of actual operations and observed anomalies).</ul></li> The traceability system must be capable of determining the product configuration ready for delivery, including variations between the real state and the agreed state.
    - How is product traceability achieved?
    - 16.5
    - NA
    - L4
    - NA
    - L4
*   - 10
    - Wrapping, packaging and marking processes must be controlled to assure conformity with specified requirements. Define a list of equipment for which packaging is necessary. Suggest a method of managing special packaging by product (dates, modes, duration). Periodically check the quality of packaging. Use appropriate packaging specific to the products.
    - Does the supplier control wrapping, packaging and marking processes to assure conformity with the specified requirements? Is there a list of equipment requiring packaging?
    - 12.3
    - NA
    - L4
    - NA
    - L4
*   - 11
    - Designated storage areas or premises must be used to prevent damage or deterioration of the product. Appropriate measures are taken to allow reception in these areas and shipment from them. The state of the product in stock must be evaluated at appropriate intervals to detect any deterioration. Manage and control atmospheres in storage. Tailor positioning in storage. Manage periodic actions to maintain product characteristics in storage (powering on).
    - Are there any designated storage areas or premises? Are they used to prevent damage or deterioration of the product? Are appropriate measures taken to enable reception and shipping in these areas?
    - 10.8
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 12
    - The supplier shall take measures to protect the product quality after inspections and final tests. When specified in the contract, this protection is extended to include delivery for final use. The supplier makes sure that the accompanying documentation for the product as specified at the order is present at the time of the delivery, and that it is protected against loss and damage.
    - Does the supplier take steps to maintain the product quality after the inspections and final tests? When specified in the contract, are these steps extended to include delivery for final use?
    - 17.5
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 13
    - During the phase, the product must be inspected and tests must be carried out in accordance with the quality plan and/or written procedures. The product must remain blocked until the required inspections and tests are terminated, or until the necessary reports have been received and verified.
    - Is there any risk that a product that has not satisfied inspections and tests specified during one phase will go on to the next phase without corrective action?
    - 7.2
    - NA
    - L4
    - NA
    - L4
*   - 14
    - Perform all final inspections and tests in accordance with the quality plan and/or written procedures. The quality plan and/or procedures for final inspections and tests must require that all specified inspections and tests, including those defined for product reception, are carried out and that the results are conforming with requirements. Before shipment, make sure that: All activities specified in the quality plan and/or written procedures have been satisfactory accomplished, The associated data and documentation are available and accepted.
    - Have all final inspections and tests been carried out in accordance with the quality plan and/or written procedures?
    - 7.9
    - NA
    - L4
    - NA
    - L4
*   - 15
    - Make sure that the incoming product is not used or implemented until it has been inspected or until its conformity with specified requirements has been verified in another way. The check on conformity with specified requirements must be made in accordance with the quality plan and/or written procedures. Inspections carried out in the premises of subcontractors and proofs of conformity provided must be taken into account to determine the importance and nature of inspections to be carried out on reception. When the incoming product is released before it has been verified for reasons of urgency, it must be identified and this release shall be recorded.
    - Are appropriate inspections and tests carried out on incoming products before use?
    - 6.7
    - NA
    - L4
    - NA
    - L4
*   - 18
    - Maintenance procedures related to corrective actions in production must include:<li><ul>Effective processing of complaints and subassembly nonconformity reports,</ul><ul>The search for causes of nonconformity related to the process and recording of the results ofthis search,</ul><ul>Determination of corrective actions necessary to eliminate causes of nonconformity,</ul><ul>Application of control means to assure that the corrective action is implemented and that it produces the required effect.</ul></li>
    - Does corrective maintenance take place as soon as an anomaly appears on production means or produced subassemblies?
    - 6.9
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 19
    - Based on the defined preventive maintenance plan and after its production, a correction is made by: redefining production means references, replacement of consumables, replacement of worn and therefore potentially defective parts (probes and inspection tools).
    - Is preventive maintenance planned to correct drifts to production means parameters?
    - 4
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 21
    - This verification is less complicated than a planned preventive maintenance action, and should be done by the user of the means (it forms part of the operator's training). Its purpose is to make sure that the operation will be done correctly and that it will provide the expected result (using the right loaded software or a correct configuration). The frequency of the verifications (to be defined) may be systematic before each use or after a defined number of uses of the means.
    - Is there a periodic verification of programming means so that the software loading operation is done correctly?
    - 4.1
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 22
    - This filter assures that the final test that forms the final verification milestone is carried out by a competent person and particularly a person whose skills are monitored to assure that the most recent requirements are taken into consideration. The audit assures that the operator reviews control over procedures and critical points, to achieve perfect confidence in execution of the final test.
    - Are the skills of final test operators systematically audited?
    - 4.1
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 23
    - It is important to perform the minimum number of manipulations of subassemblies during the production phase to limit risks of mechanical shocks and other overstresses. Furthermore, the automation of manipulations between activities during the entire production provides a means of eliminating a large number of failures caused by human intervention. This recommendation remains applicable to very small series
    - Are production and manipulation of subassemblies automated?
    - 6.5
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 25
    - It is essential to specifically monitor and maintain (by updating) references coordinates, batch numbers, etc.) loaded in production tools, for the automation of tasks and for reliable execution of activities.
    - Are data loaded in programmable production means managed?
    - 2.8
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 30
    - The description of the accepted nonconformity or repairs made is recorded to indicate the real condition of the product. Written procedures are kept up to date defining at least: The process for classification of nonconformities and control over the use of nonconforming components in finished products, The formal authorisation process and the application field for personnel authorising the use of replacement materials and/or nonconforming products (waiver procedures), The process for control of scrapped parts.
    - Is the description of the accepted nonconformity or of the repairs performed recorded to indicate the product's real condition?
    - 10.3
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 32
    - Product inspection and test procedures must specify resources (men, means), methods to be implemented, acceptance criteria and methods of recording the results. These procedures must also define the training and if necessary require operators' qualification.
    - Are means necessary for inspections and tests of the product defined?
    - 11.6
    - NA
    - L4
    - NA
    - L4
*   - 35
    - Purchasing documents must include the following when applicable: The type, category and any other precise identification, the title or any other formal identification and the applicable edition of specifications, drawings, requirements for processes, inspection instructions and other relevant technical data, the title, identifier and edition of the quality system standard to be applied, purchasing document reviewed and approved before distribution to assure that they are capable of satisfying the requirements. Documented procurement requirements must include the following when applicable: Tests, examinations, inspections and acceptance conditions imposed by the customer, and any relevant instructions or requirements, requirements related to specimens (production method, number, storage conditions) for inspections, investigations or audits, requirements related to notification of anomalies, changes to the definition and approval of their processing. Suppliers must be notified about customer requirements.
    - Are there any documents for performing incoming inspection on supplies?
    - 8.8
    - NA
    - L4
    - NA
    - L3 L4 
*   - 41
    - Operators must be provided with a workstation datasheet or any other information means describing actions to be carried out and different instructions and protocols to be followed.
    - Are the instructions (protocol and particular instructions to be respected) given to operators?
    - 7.4
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 43
    - The description of actions to be carried out during application of a production tool on a subassembly must be sufficiently explicit to not allow interpretation by the operator that would result in accidental use of inappropriate means. It must be assured that the reliability of subassemblies will not be reduced by the use of an unsuitable tool.
    - How is it assured that production means are adapted to elements to be produced?
    - 7.2
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 46
    - Recording on an Anomaly datasheet type document facilitates monitoring of different malfunctions. This anomaly datasheet is one of the main documents used to implement preventive and/or corrective maintenance actions. The assembly contributes to traceability for management of nonconformities (products and means).
    - How are technical events or anomaly reports recorded?
    - 7.6
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 47
    - Produce written procedures to assure that the purchased product is conforming with the specified requirements. Define the terms and conditions for procurement and the responsibilities of all persons concerned. Check that procedures are applied.
    - Are there any written procedures for assuring that products are conforming with specified requirements?
    - 10.6
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 49
    - The responsibility for examination and the decision to process the nonconforming product must be defined. Written procedures must describe processing of nonconformities. These procedures must predict that the nonconforming product can be: reworked to satisfy the specified requirements, accepted by waiver with or without repair, declassified for other applications, ejected or scrapped. If required by the contract, the proposal for use or repair of the nonconforming product may be submitted to the customer. The repaired and/or reworked product is inspected once again in accordance with the requirements in the quality plan and/or written procedures.
    - Has the responsibility for the examination and the decision to process the nonconforming product been defined?
    - 13.6
    - NA
    - L4
    - NA
    - L4
*   - 60
    - The different subassemblies are made and integrated starting from planned tasks that may correspond to simultaneous activities. Priorities have to be managed, so that only a minimum number of subassemblies needs to be stored (any time taken in routing production will require storage and additional manipulations of subassemblies), thus limiting ways in which the reliability of elements might be reduced.
    - How are priorities managed as a function of end of file dates?
    - 3.1
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 61
    - List and implement protection means to avoid reducing the reliability of the subassembly.
    - Have means of protecting subassemblies during some production activities been identified and implemented?
    - 7.3
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 66
    - Requirements for qualification of process operations including equipment and associated personnel, must be specified.
    - Are means concerning special processes identified?
    - 13.1
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 67
    - Special processes must be done by qualified operators and/or are continuously monitored, with control over process parameters to assure conformity with requirements.
    - Are human resources concerning special processes managed?
    - 11.7
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 70
    - Written inspection and test procedures have to be produced and kept up to date, to verify that specified requirements for the product are respected.
    - How is the product inspection and test documentation controlled?
    - 9.3
    - NA
    - L4
    - NA
    - L4
*   - 71
    - Store and keep product and process documentation available in the workshop. Make a list of the documentation regularly. Periodically update the documentation. Train an entity among workshop personnel in the management of technical documentation. Have technical documentation for products. Have a documentation specific to the inspection and maintenance tests. Associate this product technical documentation with implementation processes. When documents are provided, analyse the validity of this product documentation. Be in possession of process control documentation. Specify technical documentation for each process. Provide this technical documentation and make it useable. Have a documentation specific to the inspection and tests .
    - Does it take account of all equipment changes?
    - 12.2
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 73
    - Inspection, measurement and test equipment is used to assure that the measurement uncertainty is known and is compatible with the required measurement aptitude. Test software or comparison references used as inspection means are verified before they are put into service to demonstrate that they are capable of checking that the product is acceptable.
    - What steps are taken to control how inspection, measurement and test equipment is compatible with needs?
    - 9.6
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 74
    - Handling, preservation and storage of inspection and measurement equipment assures that precision and usability are maintained. Inspection, measurement and test equipment, including the test benches and test software, are protected against manipulations that would invalidate calibration settings.
    - How is the environment of inspection, measurement and test equipment controlled?
    - 7.9
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 75
    - When the working environment is important for product quality, appropriate limits must be specified, controlled and verified (layout of the workshop, ergonomy of the workstation, etc).
    - How is the working environment controlled?
    - 9.6
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 77
    - A clear statement of persons authorised to approve process changes must be available. These changes requiring acceptance by the customer must be identified before they are applied. Any change affecting processes, production equipment, tools and programs, must be documented and must lead to a procedure to control its application. Make sure that results of process changes produce the required effect and that the changes have not reduce the product quality.
    - How are changes to manufacturing processes controlled?
    - 13.9
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 78
    - Product handling methods and means are provided to prevent damage or deterioration to the product and include:<li><ul>transport procedures,</ul><ul>handling methods specific to each product.</ul></li>
    - Are handling and transport methods defined?
    - 8.8
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 79
    - Make sure that written procedures describe the following activities, for all production means, tools and programs: validation before use, maintenance, periodic inspection according to written procedures.
    - How are production equipment, tools and programs for numerical control machine controlled?
    - 10.5
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 80
    - A procedure is necessary to take account of specific requirements for the following at the different production steps, if applicable in accordance with the manufacturer's recommendations and/or applicable regulations:<li><ul>cleaning,</ul><ul>prevention, detection and removal of foreign bodies,</ul><ul>handling adapted to sensitive products,</ul><ul>marking and labelling, including safety marking,</ul><ul>control of shelf life and stock rotation,</ul><ul>dangerous equipment</ul></li> Produce special management procedures for perishables. Eliminate all products that have passed their useful life and unidentified products. Suggest criteria for evaluating and analysing the quality of storage conditions. List and analyse failures related to lack of quality in storage.
    - How are handling, storage, packaging, preservation, and delivery controlled?
    - 6.5
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 81
    - Further description. When special processes are used (processes for which results cannot be fully verified a posteriori by an inspection or test of the product, and for which the consequences of deficiencies in application will not appear until this product is used, for example gluing, soldering: The special processes to be implemented must be identified. The supplier verifies that all parameters of special processes (for example materials, personnel, procedures and software) produce satisfactory results. The supplier identifies and documents significant operations and process parameters to be controlled. Any modification to these operations and parameters must be described in a proposal justifying this modification and guaranteeing that it does not introduce any harmful effect on the result of the process. The supplier must verify special processes by making one or several typical parts under the conditions defined for the phase. Special processes or subcontracted processes must be qualified before use. The supplier must keep qualified special processes up to date.
    - How are special processes controlled?
    - 14.4
    - NA
    - L4
    - NA
    - L4
*   - 82
    - Further description. When they have an influence on the quality and reliability of the product, services and supplies such as water, compressed air, electricity and chemicals used must be controlled and verified regularly to make sure that their effect on the process is constant.
    - How are services and fluids in the working environment controlled?
    - 10.1
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 88
    - Set up self-checking to filter human errors that could reduce the reliability of the subassembly
    - Is a self checking system applied to filter human errors (that could reduce reliability of the subassembly)?
    - 5.3
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 91
    - Set up protections against ESD for subassemblies during manipulations and storage.
    - Have you set up specific protections against ESD for subassemblies during manipulations and storage?
    - 26
    - NA
    - L3 L4
    - NA
    - L3 L4 
*   - 92
    - A number of production means parameters are provided by test tools (probes, sensors, detectors, etc.). These test tools need to be monitored periodically (frequency to be defined) to assure that the measurements made are reliable. The delta between the stress actually applied by the production means and the measurement made of this stress must be minimal and perfectly measurable.
    - Are there any periodic verifications used to monitor tools used for inspection of production means?
    - 4.9
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 94
    - Set up a self-test of testers in order to detect any anomalies. It must be impossible to perform a test if the self-test is not conclusive or unless there is a traced waiver (authorisation to execute the test provided that the follower sheet is marked and signed and cannot be separated from the subassembly) accompanying the subassembly thus tested.
    - Are there any self-tests of test tools in order to detect any anomalies before use on the subassembly ?
    - 5.1
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 
    - 
    - 
    - 
    - 
    - 
    - 
    - 
*   - 99
    - Accidental use of out-of-date consumables can have a negative influence on quality and consequently reliability, a number of suitable methods must be set up for preservation, identification and withdrawal of the products concerned if necessary. Systematically reading labels before use to identify each product used and to obtain all information about expiration, reduces risks of using a product that would reduce reliability.
    - Is there a label for identification and withdrawal of out-of-date consumables?
    - 6.4
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 100
    - This involves monitoring of test execution indicators to take immediate action with: <li><ul>a definition of envelope curves, outside     which it can be deemed that there is no anomaly,</ul><ul>an alarm as soon as an anomaly is detected,</ul><ul>suspension of the current activity to avoid stressing the subassembly,</ul><ul>compulsory action and correction of the anomaly before the activity can be resumed and continued.</ul></li>
    - Is there a real time processing of test monitoring indicators so as to not to degrade the subassembly as soon as an anomaly appears?
    - 4.7
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 113
    - Records must be produced and kept to provide proof that the product has been subjected to inspections and/or tests in accordance with defined criteria. Records must be sufficient to identify the person who performed the inspections and released the product. Test records must indicate measured values when they are required by the specification or the acceptance plan. If specified, the supplier must demonstrate the qualification of the product.
    - Are records produced and kept to prove that the product has been inspected and/or tested in accordance with defined criteria? Are the records sufficient to identify the person who made the checks?
    - 5.3
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4 
*   - 114
    - The inspection file must contain:criteria for acceptance and refusal, a sequential list of inspection and test operations to be done, inspection result record documents, a list of specific and non-specific inspection instruments, the documents associated with specific inspection instruments for their design, production, validation, management, use and maintenance .
    - Is there an inspection file containing acceptance criteria, the sequential list of inspection and test operations, inspection result record documents, list of specific and non-specific inspection instruments?
    - 5.7
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4 
*   - 116
    - Nonconformity documents must specify: the product identification, the description of the nonconformity, the cause of the nonconformity, actions taken to prevent recurrence of the nonconformity, reworking or repairs if necessary, check of characteristics affected by the reworking or repairs, the final decision.
    - Is there any documentation specific to the nonconformity?
    - 11.1
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 121
    - Provide preventive maintenance (by the use of a plan describing a maintenance strategy) to detect an anomaly, if there is one, before use on the subassembly. This maintenance must be described in a maintenance plan describing intervals, parameters to be verified, critical levels, margins, etc.
    - Is there a preventive maintenance to detect an anomaly, if there is one, before a production means is used on a subassembly?
    - 4.7
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 136
    - Make sure that the person who will perform the task knows the procedure for implementing the means at a production workstation.
    - Is it checked that the procedure for implementing the means is known?
    - 5.1
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4 
*   - 138
    - Make sure that the right software is loaded and more particularly that it is the most recent version to be used in the subassembly. This identification information must also be traced in the remainder of the process.
    - Is it checked that the right software is loaded, and that its version is identified?
    - 6.7
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4 
*   - 139
    - Make sure that maintenance is done on production means and that this maintenance is followed, particularly to take account of the most recent nonconformities.
    - Is a check carried out to assure that means are maintained and that this maintenance is followed?
    - 5.9
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4 
*   - 140
    - Make sure that the operator has received training (qualification), appropriate for the activity.
    - Is it checked that the operator has received training (qualification), appropriate for the activity?
    - 8.5
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4 
*   - 153
    - Use measurements for verification of purchased products such as: examination of the required documentation, inspection and audit at the purchase source, examination of products on delivery.
    - Is the conformity of purchased products checked?
    - 8.6
    - NA
    - L3 L4
    - NA
    - L3 L4
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-127-e')" placeholder="Search table...">

```{list-table} Questions and answers to process questionnaire - INTEGRATION INTO SYSTEM
:name: eee-table4-127-e
:header-rows: 1
:widths: 3 50 22 5 5 5 5 5

*   - No.
    - Recommendation
    - Questions
    - Weight
    - Classic - Prime
    - Classic - Sub
    - Newspace - Prime
    - Newspace - Sub
*   - 7
    - Procedures related to corrective actions include:<li><ul>Effective processing of customer complaints and product nonconformity reports,</ul><ul>The search for the causes of nonconformity related to the product, the process and the quality system, and recording the results of this search,</ul><ul>Determining corrective actions necessary to eliminate the causes of nonconformity,</ul><ul>Application of all means to measure the effectiveness of the corrective action.</ul></li>
    - What process is used to collect technical events, to produce anomaly reports and measure increases in reliability? How are equipment changes managed?
    - 15.4
    - L4
    - NA
    - L4
    - NA
*   - 8
    - Procedures related to preventive actions include:<ul><li>The use of appropriate information sources such a processes and operations affecting the product quality, waivers, audit results, quality records, maintenance reports and customer complaints, so as to detect, analyse and eliminate the potential causes of nonconformities,<li></li>Determination of appropriate steps to deal with any problem requiring preventive action,<li></li>Triggering of preventive actions and the application of control means to make sure that they produce the expected effect,<li></li>Assurance that relative information about actions implemented is submitted to the management review.</li>
    - Do procedures related to preventive actions include:<ul><li>The use of appropriate information sources?<li></li>Determination of appropriate steps?<li></li>Triggering of preventive actions and application of control means?<li></li>A management review of corrective actions?</li>
    - 15.6
    - L2 L3 L4
    - NA
    - L2 L3 L4
    - NA
*   - 9
    - When traceability is required, the system implemented must make it possible of:<li><ul>maintaining the product identification throughout the life cycle,</ul><ul>knowing the history (definition file + changes) and the final use (deliveries, scrap) of all products manufactured from the same batch of raw material or from the same manufacturing batch,</ul><ul>finding the identity of elements making up an assembly and the higher assembly,</ul><ul>finding the sequential documentation on production (manufacturing, assembly, inspection) of a given product (e.g. configuration follower sheet including recording of actual operations and observed anomalies).</ul></li> The traceability system must be capable of determining the product configuration ready for delivery, including variations between the real state and the agreed state.
    - How is product traceability achieved?
    - 16.5
    - L4
    - NA
    - L4
    - NA
*   - 10
    - Wrapping, packaging and marking processes must be controlled to assure conformity with specified requirements. Define a list of equipment for which packaging is necessary. Suggest a method of managing special packaging by product (dates, modes, duration). Periodically check the quality of packaging. Use appropriate packaging specific to the products.
    - Does the supplier control wrapping, packaging and marking processes to assure conformity with the specified requirements? Is there a list of equipment requiring packaging?
    - 12.3
    - L4
    - NA
    - L4
    - NA
*   - 11
    - Designated storage areas or premises must be used to prevent damage or deterioration of the product. Appropriate measures are taken to allow reception in these areas and shipment from them. The state of the product in stock must be evaluated at appropriate intervals to detect any deterioration. Manage and control atmospheres in storage. Tailor positioning in storage. Manage periodic actions to maintain product characteristics in storage (powering on).
    - Are there any designated storage areas or premises? Are they used to prevent damage or deterioration of the product? Are appropriate measures taken to enable reception and shipping in these areas?
    - 10.8
    - L3 L4
    - NA
    - L3 L4
    - NA
*   - 12
    - The supplier shall take measures to protect the product quality after inspections and final tests. When specified in the contract, this protection is extended to include delivery for final use. The supplier makes sure that the accompanying documentation for the product as specified at the order is present at the time of the delivery, and that it is protected against loss and damage.
    - Does the supplier take steps to maintain the product quality after the inspections and final tests? When specified in the contract, are these steps extended to include delivery for final use?
    - 17.5
    - L4
    - NA
    - L4
    - NA
*   - 13
    - During the phase, the product must be inspected and tests must be carried out in accordance with the quality plan and/or written procedures. The product must remain blocked until the required inspections and tests are terminated, or until the necessary reports have been received and verified.
    - Is there any risk that a product that has not satisfied inspections and tests specified during one phase will go on to the next phase without corrective action?
    - 7.2
    - L4
    - NA
    - L4
    - NA
*   - 14
    - Perform all final inspections and tests in accordance with the quality plan and/or written procedures. The quality plan and/or procedures for final inspections and tests must require that all specified inspections and tests, including those defined for product reception, are carried out and that the results are conforming with requirements. Before shipment, make sure that: All activities specified in the quality plan and/or written procedures have been satisfactory accomplished, The associated data and documentation are available and accepted.
    - Have all final inspections and tests been carried out in accordance with the quality plan and/or written procedures?
    - 7.9
    - L4
    - NA
    - L4
    - NA
*   - 15
    - Make sure that the incoming product is not used or implemented until it has been inspected or until its conformity with specified requirements has been verified in another way. The check on conformity with specified requirements must be made in accordance with the quality plan and/or written procedures. Inspections carried out in the premises of subcontractors and proofs of conformity provided must be taken into account to determine the importance and nature of inspections to be carried out on reception. When the incoming product is released before it has been verified for reasons of urgency, it must be identified and this release shall be recorded.
    - Are appropriate inspections and tests carried out on incoming products before use?
    - 6.7
    - L4
    - NA
    - L4
    - NA
*   - 30
    - The description of the accepted nonconformity or repairs made is recorded to indicate the real condition of the product. Written procedures are kept up to date defining at least: The process for classification of nonconformities and control over the use of nonconforming components in finished products, The formal authorisation process and the application field for personnel authorising the use of replacement materials and/or nonconforming products (waiver procedures), The process for control of scrapped parts.
    - Is the description of the accepted nonconformity or of the repairs performed recorded to indicate the product's real condition?
    - 10.3
    - L4
    - NA
    - L4
    - NA
*   - 32
    - Product inspection and test procedures must specify resources (men, means), methods to be implemented, acceptance criteria and methods of recording the results. These procedures must also define the training and if necessary require operators' qualification.
    - Are means necessary for inspections and tests of the product defined?
    - 11.6
    - L4
    - NA
    - L4
    - NA
*   - 35
    - Purchasing documents must include the following when applicable: The type, category and any other precise identification, the title or any other formal identification and the applicable edition of specifications, drawings, requirements for processes, inspection instructions and other relevant technical data, the title, identifier and edition of the quality system standard to be applied, purchasing document reviewed and approved before distribution to assure that they are capable of satisfying the requirements. Documented procurement requirements must include the following when applicable: Tests, examinations, inspections and acceptance conditions imposed by the customer, and any relevant instructions or requirements, requirements related to specimens (production method, number, storage conditions) for inspections, investigations or audits, requirements related to notification of anomalies, changes to the definition and approval of their processing. Suppliers must be notified about customer requirements.
    - Are there any documents for performing incoming inspection on supplies?
    - 8.8
    - L4
    - NA
    - L4
    - NA
*   - 47
    - Produce written procedures to assure that the purchased product is conforming with the specified requirements. Define the terms and conditions for procurement and the responsibilities of all persons concerned. Check that procedures are applied.
    - Are there any written procedures for assuring that products are conforming with specified requirements?
    - 10.6
    - L4
    - NA
    - L4
    - NA
*   - 49
    - The responsibility for examination and the decision to process the nonconforming product must be defined. Written procedures must describe processing of nonconformities. These procedures must predict that the nonconforming product can be: reworked to satisfy the specified requirements, accepted by waiver with or without repair, declassified for other applications, ejected or scrapped. If required by the contract, the proposal for use or repair of the nonconforming product may be submitted to the customer. The repaired and/or reworked product is inspected once again in accordance with the requirements in the quality plan and/or written procedures.
    - Has the responsibility for the examination and the decision to process the nonconforming product been defined?
    - 13.6
    - L4
    - NA
    - L4
    - NA
*   - 66
    - Requirements for qualification of process operations including equipment and associated personnel, must be specified.
    - Are means concerning special processes identified?
    - 13.1
    - L4
    - NA
    - L4
    - NA
*   - 67
    - Special processes must be done by qualified operators and/or are continuously monitored, with control over process parameters to assure conformity with requirements.
    - Are human resources concerning special processes managed?
    - 11.7
    - L4
    - NA
    - L4
    - NA
*   - 70
    - Written inspection and test procedures have to be produced and kept up to date, to verify that specified requirements for the product are respected.
    - How is the product inspection and test documentation controlled?
    - 9.3
    - L4
    - NA
    - L4
    - NA
*   - 71
    - Store and keep product and process documentation available in the workshop. Make a list of the documentation regularly. Periodically update the documentation. Train an entity among workshop personnel in the management of technical documentation. Have technical documentation for products. Have a documentation specific to the inspection and maintenance tests. Associate this product technical documentation with implementation processes. When documents are provided, analyse the validity of this product documentation. Be in possession of process control documentation. Specify technical documentation for each process. Provide this technical documentation and make it useable. Have a documentation specific to the inspection and tests .
    - Does it take account of all equipment changes?
    - 12.2
    - L4
    - NA
    - L4
    - NA
*   - 73
    - Inspection, measurement and test equipment is used to assure that the measurement uncertainty is known and is compatible with the required measurement aptitude. Test software or comparison references used as inspection means are verified before they are put into service to demonstrate that they are capable of checking that the product is acceptable.
    - What steps are taken to control how inspection, measurement and test equipment is compatible with needs?
    - 9.6
    - L4
    - NA
    - L4
    - NA
*   - 74
    - Handling, preservation and storage of inspection and measurement equipment assures that precision and usability are maintained. Inspection, measurement and test equipment, including the test benches and test software, are protected against manipulations that would invalidate calibration settings.
    - How is the environment of inspection, measurement and test equipment controlled?
    - 7.9
    - L2 L3 L4
    - NA
    - L2 L3 L4
    - NA
*   - 75
    - When the working environment is important for product quality, appropriate limits must be specified, controlled and verified (layout of the workshop, ergonomy of the workstation, etc).
    - How is the working environment controlled?
    - 9.6
    - L3 L4
    - NA
    - L3 L4
    - NA
*   - 77
    - A clear statement of persons authorised to approve process changes must be available. These changes requiring acceptance by the customer must be identified before they are applied. Any change affecting processes, production equipment, tools and programs, must be documented and must lead to a procedure to control its application. Make sure that results of process changes produce the required effect and that the changes have not reduce the product quality.
    - How are changes to manufacturing processes controlled?
    - 13.9
    - L3 L4
    - NA
    - L3 L4
    - NA
*   - 78
    - Product handling methods and means are provided to prevent damage or deterioration to the product and include:<li><ul>transport procedures,</ul><ul>handling methods specific to each product.</ul></li>
    - Are handling and transport methods defined?
    - 8.8
    - L4
    - NA
    - L4
    - NA
*   - 79
    - Make sure that written procedures describe the following activities, for all production means, tools and programs: validation before use, maintenance, periodic inspection according to written procedures.
    - How are production equipment, tools and programs for numerical control machine controlled?
    - 10.5
    - L4
    - NA
    - L4
    - NA
*   - 80
    - A procedure is necessary to take account of specific requirements for the following at the different production steps, if applicable in accordance with the manufacturer's recommendations and/or applicable regulations:<li><ul>cleaning,</ul><ul>prevention, detection and removal of foreign bodies,</ul><ul>handling adapted to sensitive products,</ul><ul>marking and labelling, including safety marking,</ul><ul>control of shelf life and stock rotation,</ul><ul>dangerous equipment</ul></li> Produce special management procedures for perishables. Eliminate all products that have passed their useful life and unidentified products. Suggest criteria for evaluating and analysing the quality of storage conditions. List and analyse failures related to lack of quality in storage.
    - How are handling, storage, packaging, preservation, and delivery controlled?
    - 6.5
    - L3 L4
    - NA
    - L3 L4
    - NA
*   - 81
    - Further description. When special processes are used (processes for which results cannot be fully verified a posteriori by an inspection or test of the product, and for which the consequences of deficiencies in application will not appear until this product is used, for example gluing, soldering: The special processes to be implemented must be identified. The supplier verifies that all parameters of special processes (for example materials, personnel, procedures and software) produce satisfactory results. The supplier identifies and documents significant operations and process parameters to be controlled. Any modification to these operations and parameters must be described in a proposal justifying this modification and guaranteeing that it does not introduce any harmful effect on the result of the process. The supplier must verify special processes by making one or several typical parts under the conditions defined for the phase. Special processes or subcontracted processes must be qualified before use. The supplier must keep qualified special processes up to date.
    - How are special processes controlled?
    - 14.4
    - L4
    - NA
    - L4
    - NA
*   - 82
    - Further description. When they have an influence on the quality and reliability of the product, services and supplies such as water, compressed air, electricity and chemicals used must be controlled and verified regularly to make sure that their effect on the process is constant.
    - How are services and fluids in the working environment controlled?
    - 10.1
    - L4
    - NA
    - L4
    - NA
*   - 88
    - Set up self-checking to filter human errors that could reduce the reliability of the subassembly
    - Is a self checking system applied to filter human errors (that could reduce reliability of the subassembly)?
    - 5.3
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
    - NA
*   - 91
    - Set up protections against ESD for subassemblies during manipulations and storage.
    - Have you set up specific protections against ESD for subassemblies during manipulations and storage?
    - 18.4
    - L4
    - NA
    - L4
    - NA
*   - 99
    - Accidental use of out-of-date consumables can have a negative influence on quality and consequently reliability, a number of suitable methods must be set up for preservation, identification and withdrawal of the products concerned if necessary. Systematically reading labels before use to identify each product used and to obtain all information about expiration, reduces risks of using a product that would reduce reliability.
    - Is there a label for identification and withdrawal of out-of-date consumables?
    - 6.4
    - L3 L4
    - NA
    - L3 L4
    - NA
*   - 113
    - Records must be produced and kept to provide proof that the product has been subjected to inspections and/or tests in accordance with defined criteria. Records must be sufficient to identify the person who performed the inspections and released the product. Test records must indicate measured values when they are required by the specification or the acceptance plan. If specified, the supplier must demonstrate the qualification of the product.
    - Are records produced and kept to prove that the product has been inspected and/or tested in accordance with defined criteria? Are the records sufficient to identify the person who made the checks?
    - 5.3
    - L3 L4
    - NA
    - L3 L4
    - NA
*   - 114
    - The inspection file must contain:criteria for acceptance and refusal, a sequential list of inspection and test operations to be done, inspection result record documents, a list of specific and non-specific inspection instruments, the documents associated with specific inspection instruments for their design, production, validation, management, use and maintenance .
    - Is there an inspection file containing acceptance criteria, the sequential list of inspection and test operations, inspection result record documents, list of specific and non-specific inspection instruments?
    - 5.7
    - L4
    - NA
    - L4
    - NA
*   - 116
    - Nonconformity documents must specify: the product identification, the description of the nonconformity, the cause of the nonconformity, actions taken to prevent recurrence of the nonconformity, reworking or repairs if necessary, check of characteristics affected by the reworking or repairs, the final decision.
    - Is there any documentation specific to the nonconformity?
    - 11.1
    - L4
    - NA
    - L4
    - NA
*   - 136
    - Make sure that the person who will perform the task knows the procedure for implementing the means at a production workstation.
    - Is it checked that the procedure for implementing the means is known?
    - 5.1
    - L3 L4
    - NA
    - L3 L4
    - NA
*   - 138
    - Make sure that the right software is loaded and more particularly that it is the most recent version to be used in the subassembly. This identification information must also be traced in the remainder of the process.
    - Is it checked that the right software is loaded, and that its version is identified?
    - 6.7
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
    - NA
*   - 153
    - Use measurements for verification of purchased products such as: examination of the required documentation, inspection and audit at the purchase source, examination of products on delivery.
    - Is the conformity of purchased products checked?
    - 8.6
    - L4
    - NA
    - L4
    - NA
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-127-f')" placeholder="Search table...">

```{list-table} Questions and answers to process questionnaire - OPERATION AND MAINTENANCE
:name: eee-table4-127-f
:header-rows: 1
:widths: 3 50 22 5 5 5 5 5

*   - No.
    - Recommendation
    - Questions
    - Weight
    - Classic - Prime
    - Classic - Sub
    - Newspace - Prime
    - Newspace - Sub
*   - 7
    - Procedures related to corrective actions include:<li><ul>Effective processing of customer complaints and product nonconformity reports,</ul><ul>The search for the causes of nonconformity related to the product, the process and the quality system, and recording the results of this search,</ul><ul>Determining corrective actions necessary to eliminate the causes of nonconformity,</ul><ul>Application of all means to measure the effectiveness of the corrective action.</ul></li>
    - What process is used to collect technical events, to produce anomaly reports and measure increases in reliability? How are equipment changes managed?
    - 17.5
    - L3 L4
    - NA
    - L3 L4
    - NA
*   - 8
    - Procedures related to preventive actions include:<ul><li>The use of appropriate information sources such a processes and operations affecting the product quality, waivers, audit results, quality records, maintenance reports and customer complaints, so as to detect, analyse and eliminate the potential causes of nonconformities,<li></li>Determination of appropriate steps to deal with any problem requiring preventive action,<li></li>Triggering of preventive actions and the application of control means to make sure that they produce the expected effect,<li></li>Assurance that relative information about actions implemented is submitted to the management review.</li>
    - Do procedures related to preventive actions include:<ul><li>The use of appropriate information sources?<li></li>Determination of appropriate steps?<li></li>Triggering of preventive actions and application of control means?<li></li>A management review of corrective actions?</li>
    - 17.7
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 9
    - When traceability is required, the system implemented must make it possible of:<li><ul>maintaining the product identification throughout the life cycle,</ul><ul>knowing the history (definition file + changes) and the final use (deliveries, scrap) of all products manufactured from the same batch of raw material or from the same manufacturing batch,</ul><ul>finding the identity of elements making up an assembly and the higher assembly,</ul><ul>finding the sequential documentation on production (manufacturing, assembly, inspection) of a given product (e.g. configuration follower sheet including recording of actual operations and observed anomalies).</ul></li> The traceability system must be capable of determining the product configuration ready for delivery, including variations between the real state and the agreed state.
    - How is product traceability achieved?
    - 9.2
    - L4
    - NA
    - L4
    - NA
*   - 10
    - Wrapping, packaging and marking processes must be controlled to assure conformity with specified requirements. Define a list of equipment for which packaging is necessary. Suggest a method of managing special packaging by product (dates, modes, duration). Periodically check the quality of packaging. Use appropriate packaging specific to the products.
    - Does the supplier control wrapping, packaging and marking processes to assure conformity with the specified requirements? Is there a list of equipment requiring packaging?
    - 13.8
    - L4
    - NA
    - L4
    - NA
*   - 11
    - Designated storage areas or premises must be used to prevent damage or deterioration of the product. Appropriate measures are taken to allow reception in these areas and shipment from them. The state of the product in stock must be evaluated at appropriate intervals to detect any deterioration. Manage and control atmospheres in storage. Tailor positioning in storage. Manage periodic actions to maintain product characteristics in storage (powering on).
    - Are there any designated storage areas or premises? Are they used to prevent damage or deterioration of the product? Are appropriate measures taken to enable reception and shipping in these areas?
    - 15.6
    - L3 L4
    - NA
    - L3 L4
    - NA
*   - 13
    - During the phase, the product must be inspected and tests must be carried out in accordance with the quality plan and/or written procedures. The product must remain blocked until the required inspections and tests are terminated, or until the necessary reports have been received and verified.
    - Is there any risk that a product that has not satisfied inspections and tests specified during one phase will go on to the next phase without corrective action?
    - 11.2
    - L4
    - NA
    - L4
    - NA 
*   - 14
    - Perform all final inspections and tests in accordance with the quality plan and/or written procedures. The quality plan and/or procedures for final inspections and tests must require that all specified inspections and tests, including those defined for product reception, are carried out and that the results are conforming with requirements. Before shipment, make sure that: All activities specified in the quality plan and/or written procedures have been satisfactory accomplished, The associated data and documentation are available and accepted.
    - Have all final inspections and tests been carried out in accordance with the quality plan and/or written procedures?
    - 10.4
    - L4
    - NA
    - L4
    - NA
*   - 20
    - A policy is applied aimed at identifying, evaluating and managing potential risks associated with nonconformities, non only on products but also on all design, planning, manufacturing, assembly, inspection processes, etc. This policy must take account of potential risks associated with human factors.
    - Is a policy applied aimed at identifying, evaluating and managing potential risks associated with nonconformities, on products and also on all design, planning, manufacturing, assembly and inspection processes, etc?
    - 16.3
    - NA
    - NA
    - NA
    - NA
*   - 30
    - The description of the accepted nonconformity or repairs made is recorded to indicate the real condition of the product. Written procedures are kept up to date defining at least: The process for classification of nonconformities and control over the use of nonconforming components in finished products, The formal authorisation process and the application field for personnel authorising the use of replacement materials and/or nonconforming products (waiver procedures), The process for control of scrapped parts.
    - Is the description of the accepted nonconformity or of the repairs performed recorded to indicate the product's real condition?
    - 12.8
    - L3 L4
    - NA
    - L3 L4
    - NA
*   - 32
    - Product inspection and test procedures must specify resources (men, means), methods to be implemented, acceptance criteria and methods of recording the results. These procedures must also define the training and if necessary require operators' qualification.
    - Are means necessary for inspections and tests of the product defined?
    - 14.3
    - L4
    - NA
    - L4
    - NA
*   - 35
    - Purchasing documents must include the following when applicable: The type, category and any other precise identification, the title or any other formal identification and the applicable edition of specifications, drawings, requirements for processes, inspection instructions and other relevant technical data, the title, identifier and edition of the quality system standard to be applied, purchasing document reviewed and approved before distribution to assure that they are capable of satisfying the requirements. Documented procurement requirements must include the following when applicable: Tests, examinations, inspections and acceptance conditions imposed by the customer, and any relevant instructions or requirements, requirements related to specimens (production method, number, storage conditions) for inspections, investigations or audits, requirements related to notification of anomalies, changes to the definition and approval of their processing. Suppliers must be notified about customer requirements.
    - Are there any documents for performing incoming inspection on supplies?
    - 9.9
    - NA
    - NA
    - NA
    - NA
*   - 47
    - Produce written procedures to assure that the purchased product is conforming with the specified requirements. Define the terms and conditions for procurement and the responsibilities of all persons concerned. Check that procedures are applied.
    - Are there any written procedures for assuring that products are conforming with specified requirements?
    - 6.8
    - NA
    - NA
    - NA
    - NA
*   - 63
    - Records concerning processes, products and personnel are kept up to date.
    - Is there any documentation for special processes? Is this documentation kept up to date?
    - 12.2
    - NA
    - NA
    - NA
    - NA
*   - 66
    - Requirements for qualification of process operations including equipment and associated personnel, must be specified.
    - Are means concerning special processes identified?
    - 13.1
    - NA
    - NA
    - NA
    - NA
*   - 67
    - Special processes must be done by qualified operators and/or are continuously monitored, with control over process parameters to assure conformity with requirements.
    - Are human resources concerning special processes managed?
    - 13.7
    - NA
    - NA
    - NA
    - NA
*   - 71
    - Store and keep product and process documentation available in the workshop. Make a list of the documentation regularly. Periodically update the documentation. Train an entity among workshop personnel in the management of technical documentation. Have technical documentation for products. Have a documentation specific to the inspection and maintenance tests. Associate this product technical documentation with implementation processes. When documents are provided, analyse the validity of this product documentation. Be in possession of process control documentation. Specify technical documentation for each process. Provide this technical documentation and make it useable. Have a documentation specific to the inspection and tests .
    - Does it take account of all equipment changes?
    - 5.6
    - L4
    - NA
    - L4
    - NA
*   - 72
    - Control the capability of products to detect failures, control failure detection means, allow maintainability in operation.
    - How are product monitoring and maintainability in operation controlled?
    - 17.6
    - L4
    - NA
    - L4
    - NA
*   - 73
    - Inspection, measurement and test equipment is used to assure that the measurement uncertainty is known and is compatible with the required measurement aptitude. Test software or comparison references used as inspection means are verified before they are put into service to demonstrate that they are capable of checking that the product is acceptable.
    - What steps are taken to control how inspection, measurement and test equipment is compatible with needs?
    - 11.3
    - NA
    - NA
    - NA
    - NA
*   - 74
    - Handling, preservation and storage of inspection and measurement equipment assures that precision and usability are maintained. Inspection, measurement and test equipment, including the test benches and test software, are protected against manipulations that would invalidate calibration settings.
    - How is the environment of inspection, measurement and test equipment controlled?
    - 11.7
    - NA
    - NA
    - NA
    - NA
*   - 75
    - When the working environment is important for product quality, appropriate limits must be specified, controlled and verified (layout of the workshop, ergonomy of the workstation, etc).
    - How is the working environment controlled?
    - 10.8
    - NA
    - NA
    - NA
    - NA
*   - 77
    - A clear statement of persons authorised to approve process changes must be available. These changes requiring acceptance by the customer must be identified before they are applied. Any change affecting processes, production equipment, tools and programs, must be documented and must lead to a procedure to control its application. Make sure that results of process changes produce the required effect and that the changes have not reduce the product quality.
    - How are changes to manufacturing processes controlled?
    - 13.9
    - NA
    - NA
    - NA
    - NA
*   - 78
    - Product handling methods and means are provided to prevent damage or deterioration to the product and include:<li><ul>transport procedures,</ul><ul>handling methods specific to each product.</ul></li>
    - Are handling and transport methods defined?
    - 9.9
    - NA
    - NA
    - NA
    - NA
*   - 79
    - Make sure that written procedures describe the following activities, for all production means, tools and programs: validation before use, maintenance, periodic inspection according to written procedures.
    - How are production equipment, tools and programs for numerical control machine controlled?
    - 11.3
    - NA
    - NA
    - NA
    - NA
*   - 80
    - A procedure is necessary to take account of specific requirements for the following at the different production steps, if applicable in accordance with the manufacturer's recommendations and/or applicable regulations:<li><ul>cleaning,</ul><ul>prevention, detection and removal of foreign bodies,</ul><ul>handling adapted to sensitive products,</ul><ul>marking and labelling, including safety marking,</ul><ul>control of shelf life and stock rotation,</ul><ul>dangerous equipment</ul></li> Produce special management procedures for perishables. Eliminate all products that have passed their useful life and unidentified products. Suggest criteria for evaluating and analysing the quality of storage conditions. List and analyse failures related to lack of quality in storage.
    - How are handling, storage, packaging, preservation, and delivery controlled?
    - 11.3
    - NA
    - NA
    - NA
    - NA
*   - 81
    - Further description. When special processes are used (processes for which results cannot be fully verified a posteriori by an inspection or test of the product, and for which the consequences of deficiencies in application will not appear until this product is used, for example gluing, soldering: The special processes to be implemented must be identified. The supplier verifies that all parameters of special processes (for example materials, personnel, procedures and software) produce satisfactory results. The supplier identifies and documents significant operations and process parameters to be controlled. Any modification to these operations and parameters must be described in a proposal justifying this modification and guaranteeing that it does not introduce any harmful effect on the result of the process. The supplier must verify special processes by making one or several typical parts under the conditions defined for the phase. Special processes or subcontracted processes must be qualified before use. The supplier must keep qualified special processes up to date.
    - How are special processes controlled?
    - 15.2
    - NA
    - NA
    - NA
    - NA
*   - 82
    - Further description. When they have an influence on the quality and reliability of the product, services and supplies such as water, compressed air, electricity and chemicals used must be controlled and verified regularly to make sure that their effect on the process is constant.
    - How are services and fluids in the working environment controlled?
    - 10.1
    - NA
    - NA
    - NA
    - NA
*   - 91
    - Set up protections against ESD for subassemblies during manipulations and storage.
    - Have you set up specific protections against ESD for subassemblies during manipulations and storage?
    - 17.4
    - NA
    - NA
    - NA
    - NA
*   - 114
    - The inspection file must contain:criteria for acceptance and refusal, a sequential list of inspection and test operations to be done, inspection result record documents, a list of specific and non-specific inspection instruments, the documents associated with specific inspection instruments for their design, production, validation, management, use and maintenance .
    - Is there an inspection file containing acceptance criteria, the sequential list of inspection and test operations, inspection result record documents, list of specific and non-specific inspection instruments?
    - 5.7
    - L4
    - NA
    - L4
    - NA
*   - 116
    - Nonconformity documents must specify: the product identification, the description of the nonconformity, the cause of the nonconformity, actions taken to prevent recurrence of the nonconformity, reworking or repairs if necessary, check of characteristics affected by the reworking or repairs, the final decision.
    - Is there any documentation specific to the nonconformity?
    - 11.1
    - L4
    - NA
    - L4
    - NA
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-127-g')" placeholder="Search table...">

```{list-table} Questions and answers to process questionnaire - SUPPORT ACTIVITIES
:name: eee-table4-127-g
:header-rows: 1
:widths: 3 50 22 5 5 5 5 5

*   - No.
    - Recommendation
    - Questions
    - Weight
    - Classic - Prime
    - Classic - Sub
    - Newspace - Prime
    - Newspace - Sub
*   - 3
    - Allocate the infrastructures necessary for production and integration operations to obtain the reliability level predicted by reliability studies during the product design (no degradation of reliability during these phases). Perform the Process FMECA. Examples: supply appropriate power networks, clean rooms, ergonomic buildings, application of 5S methods. The improvement in the environment may consist of: Increasing the surface areas (easier manipulations), Improving lighting, Reducing operator fatigue, Imposing storage and cleanliness standards, Improving the quality of tools, Making personnel aware about reliability.
    - Have the conclusions of reliability studies in terms of necessary infrastructures for production and integration been taken into account?
    - 7.4
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 4
    - Set up Reliability engineering indicators. Fix objectives to improve the company's Reliability engineering; Audit the company's Reliability engineering (get the reliability specialists to attend further training, make presentations in reliability conferences).
    - Are there any objectives to improve reliability engineering in the company? Are there any indicators about the current position relative to these objectives?
    - 6.6
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 24
    - Collect information about product reliability in its operational environment from customers and users of the product, and carry out associated action plans.
    - Are customer comments about product reliability collected during operational functioning?
    - 7.9
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 27
    - Fix objectives for improving the company's reliability engineering annually.
    - Are there any objectives to improve the process to construct product reliability?
    - 6.3
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 45
    - Certify the company quality system according to ISO 9001 V2000
    - The company has one or several quality certifications, for example ISO 9001 Version 2000
    - 6.5
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 55
    - The Operating Dependability (Reliability) business participates in all phases of the project, from phases before the development and until series production. The Functional Dependability business is also involved in production and operational monitoring
    - Does the Operating Dependability business participate in all phases of the project?
    - 8.8
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 56
    - Train personnel concerned with reliability, with training varying from awareness to expert refresher courses for reliability managers, depending on the criticality of reliability performances expected for the product. Make production personnel aware about non-degradation of products.
    - Is training of persons working on reliability appropriate for the criticality of reliability performances expected for the product?
    - 7.5
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 58
    - Allocate the necessary resources (hardware means, access to technical data, and time necessary to perform reliability studies).
    - Are technical data necessary for reliability studies accessible? Are the necessary tools available? Have the necessary time and financing been allowed for?
    - 8.3
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 59
    - Control of documentation related to reliability studies: recording, saving, archiving, validation, management of documents in configuration.
    - Are reliability study documents managed?
    - 5.4
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 68
    - During the design phase (with the subcontractor) identify risks associated with the reliability of the subcontracted product.
    - Have risks related to reliability of products at subcontractors been identified?
    - 7.2
    - NA
    - L1 L2 L3 L4
    - NA
    - L1 L2 L3 L4
*   - 69
    - Integrate the Reliability theme in the company quality policy and breakdown this policy at levels concerned by reliability engineering.
    - Is the reliability theme present in the company quality policy?
    - 7.4
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 76
    - Control monitoring and measurement devices, the metrology of measurement instruments and industrial means. Control the verification, calibration and rating of measurement instruments and test and trial benches used by the company. APMs are tied to national standards.
    - What procedure is there to control monitoring and measurement devices, the metrology of measurement instruments and industrial means?
    - 7.8
    - NA
    - L3 L4
    - NA
    - L2 L3 L4
*   - 85
    - Make operational reliability measurements of products in operation (monitoring of technical events, analysis of causes of failure, allocation of the origin of failures, recording the real product usage profile, reliability evaluation, analysis of these measurements and take account of the result for studies on new products).
    - Are product reliability measurements actually made in operation?
    - 8
    - L4
    - NA
    - L4
    - NA
*   - 104
    - Appoint a person responsible for reliability for each project, who will guarantee that product reliability objectives are achieved. This person shall report on progress with studies and problems encountered.
    - Has a person responsible for reliability studies been appointed?
    - 8.5
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 105
    - Organise periodic meetings with the subcontractor, in which the reliability of subcontracted products will be systematically discussed.
    - Are periodic reliability meetings organised with the subcontractor?
    - 5.7
    - L4
    - NA
    - L4
    - NA
*   - 108
    - Include information about system engineering tasks in the various project plannings.
    - Are tasks related to reliability taken into account in project plannings?
    - 6.3
    - L4
    - NA
    - L4
    - NA
*   - 109
    - Include mechanisms for "communication on reliability aspects" with the subcontractor in the project management plan, and mentioning the frequency and nature of meetings, permanent agenda, content of minutes, reliability aspects of communications.
    - Are tasks related to reliability taken into account in project plannings?
    - 4.1
    - L4
    - NA
    - L4
    - NA
*   - 110
    - Plan activities related to reliability improvement in the reliability plan. Describe fundamental activities related to reliability improvement in plans and perform them completely, with records of these actions.
    - Are reliability activities including reliability improvement organised?
    - 9.1
    - NA
    - NA
    - NA
    - NA
*   - 111
    - Plan reliability studies to guarantee that product reliability objectives are achieved and to synchronise reliability studies and product design.
    - Are reliability studies planned?
    - 7.3
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 118
    - Maintain the product reliability in production: Analyse potential degradations that could occur during production and integration operations during the design phase (example Process FMECA).
    - Are measures taken to maintain the product reliability in production?
    - 8.1
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 119
    - Consult customers regularly on operational reliability aspects and take their comments into account for the design of new products.
    - Are there periodic consultations planned with customers related to reliability aspects?
    - 7.3
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 142
    - Select the components used, analyse the market, evaluate component reliability.
    - Are reliability criteria considered when selecting the components used?
    - 12.9
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 143
    - Select component suppliers, analyse the market. Evaluate how component reliability is taken into account.
    - Select component suppliers, analyse the market. Evaluate how component reliability is taken into account.
    - 10.8
    - NA
    - L3 L4
    - NA
    - L3 L4
*   - 146
    - Monitor and control (plan, record) corrective actions done by the subcontractor related to product reliability.
    - Are corrective actions done by the subcontractor related to reliability monitored
    - 7.2
    - L2 L3 L4
    - NA
    - L2 L3 L4
    - NA
*   - 148
    - Deal with the theme of reliability in the agenda of management reviews (progress objective, action plan, measurement of the extent to which objectives are achieved, and reliability assessment of products at customers).
    - Is the reliability aspect dealt with in management reviews?
    - 5.6
    - NA
    - L2 L3 L4
    - NA
    - L2 L3 L4
*   - 149
    - Set up an anomaly processing system that can cover the entire FIDES life cycle. This system is intended to:<li><ul>record the circumstances of the anomaly,</ul><ul>record references of the defective product,</ul><ul>propose remedial action,</ul><ul>analyse the causes of the anomaly,</ul><ul>propose corrective/preventive actions,</ul><ul>check the efficiency of the corrective/preventive actions.</ul></li>Processing in this system is suitable for:<li><ul>quickly finding identical anomalies observed previously,</ul><ul>producing statistics,</ul><ul>use as feedback from operations.</ul></li>
    - What process is set up to collect technical events, produce anomaly reports and measure improved reliability? How are hardware upgrades managed?
    - 8.3
    - NA
    - L4
    - NA
    - L4
*   - 151
    - Use statistical methods adapted to the use of feedback from operations.
    - Are statistical methods adapted to the use of feedback from operations?
    - 6
    - L4
    - NA
    - L4
    - NA
*   - 152
    - Validate that the subcontractor has actually taken contract reliability requirements into account and that his project baseline takes them into account.
    - Has the reliability management baseline of the subcontractor been validated?
    - 7.7
    - L4
    - NA
    - L4
    - NA
```