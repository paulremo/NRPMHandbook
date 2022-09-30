<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_4_3_2)=
# Process factors

This Paragraph deals with the different process factors dedicated to the quality in the product life cycle of components:

-   general process factor $\Pi_{\text{process}}$;

-   process factor for RF {term}`HF` components $\Pi_{\text{ProcessRFHF}}$;

-   process factor for {term}`ASIC` components $\Pi_{\text{ProcessASIC}}$;

-   process factor for Hybrids and Multi Chip Modules $\Pi_{\text{Process\_H\&M}}$.

(eee_4_3_2_1)=
## Process factor for quality and technical control over reliability

The process factor $\Pi_{\text{process}}$ represents the quality and technical control over reliability in the product life cycle. Its purpose is to globally evaluate the maturity of the manufacturer regarding the control over its reliability engineering process.

(eee_4_3_2_2)=
## Contribution of different phases in the development process

The FIDES questionnaire for $\Pi_{\text{process}}$ is based on questions having a possible impact on the reliability of the equipment and related to the different phases of its development and manufacturing. The relative influence of each phase, $\text{Contribution\_Phase}_{i}$, is weighted depending on the importance of each phase in the total contribution to the reliability of the equipment. This phase contribution is directly used in the calculation of the process factor $\Pi_{\text{process}}$.

The FIDES guide provides default values that can be used by all domains, but recommends to use dedicated values for the considered industrial domain.

The table presented in the FIDES guide is present in the following Table:

```{list-table} $Contribution\_ Phase_{i}$ for each phase.
:name: eee-table4-9
:header-rows: 1
:widths: 10 50 40

*   - 
    - Phase
    - Phase contribution for space applications
*   - 1
    - Specification
    - 8%
*   - 2
    - Design
    - 16%
*   - 3
    - Manufacturing of board or subassembly
    - 20%
*   - 4
    - Integration into equipment
    - 10%
*   - 5
    - Integration into the system
    - 10%
*   - 6
    - Operation and maintenance
    - 18%
*   - 7
    - Support activities
    - 18%
*   - 
    - Total
    - 100%
```

In order to better represent the Space Application designs, a specific analysis has been performed, jointly with the FIDES consortium team, which result in the following rule.

```{admonition} Rule
:class: rule

A weight table specific for space applications has been built according to the specific development and manufacturing process of electronic equipment embedded on satellites. Compared to standard contributions in other industrial domains, the design and manufacturing phases are more significant, unlike the operations and maintenance which influence is less meaningful for space applications. The recommended phase contribution is provided in the following table:
```

```{list-table} $Contribution\_ Phase_{i}$ for each phase for Space Applications.
:name: eee-table4-10
:header-rows: 1
:widths: 10 50 40

*   - 
    - Phase
    - Phase contribution for space applications
*   - 1
    - Specification
    - 10%
*   - 2
    - Design
    - 21%
*   - 3
    - Manufacturing of board or subassembly
    - 20%
*   - 4
    - Integration into equipment
    - 15%
*   - 5
    - Integration into the system
    - 15%
*   - 6
    - Operation and maintenance
    - 10%
*   - 7
    - Support activities
    - 9%
*   - 
    - Total
    - 100%
```

(eee_4_3_2_3)=
## Calculation of the process factor

The questionnaire is split between the development and manufacturing phases and allows evaluating the way these activities are carried out through specific questions. The answers to the questions are used to define a $Satisfaction_{mark_{i}}$, according to the following recommendation statuses:

-   N1: the recommendation is not applied;

-   N2: the recommendation is only partially applied;

-   N3: the recommendation is practically applied;

-   N4: the recommendation is fully applied.

The $Satisfaction_{mark_{i}}$ for each level is determined as follows:

```{list-table} Satisfaction marks for $\Pi_{\text{process}}$
:name: eee-table4-11
:header-rows: 1
:widths: 25 75

*   - Level
    - Satisfaction_mark
*   - N1
    - 1
*   - N2
    - 2
*   - N3
    - 3
*   - N4
    - 4
```

Each recommendation is weighted by a specific $Recom\_ Weight_{i}$. The value of each $Recom\_ Weight_{i}$ for each question of phase $j$ is provided in {numref}`eee_annex_a`. Once all questions have been answered, the first calculation step consists in producing the $Audit\_ Mark_{i}$ for each phase $j$ according to the formula:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_18
Audit\_ Mark_{j} = \sum_{i = 1}^{n}{{Recom\_ Weight}_{i} \cdot}{Satisfaction\_ mark}_{i}
```
````

A calibration is necessary to neutralise questions about activities that are not relevant for the considered equipment. Therefore, the next step consists in producing the $Max\_ Audit\_ Mark_{j}$ for each phase $j$. The $Max\_ Audit\_ Mark_{j}$ corresponds to a perfect questionnaire, in which the satisfaction level is N4 ($Satisfaction\_ mark$ = 3) for all selected questions:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_19
Max\_ Audit\_ Mark_{j} = \sum_{i = 1}^{n}{{Recom\_ Weight}_{i} \cdot 3}
```
````

The process factor is calculated as follows:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_20
\Pi_{\text{Process}} = exp\left\lbrack 2.079 \cdot \left( 1 - Process\_ Grade \right) \right\rbrack
```
````

with

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_21
Process\_ Grade = \sum_{j = 1}^{7}\left( {Contribution\_ Phase}_{j} \cdot \frac{Audit\_ Mark_{j}}{Max\_ Audit\_ Mark_{j}} \right)
```
````

(eee_4_3_2_4)=
## Methodology for conducting the questionnaire process for space applications

As the FIDES methodology has not been originally developed for space applications, the questionnaire process is not perfectly adapted to space applications. That is why the questionnaire has been reviewed and adapted for the reliability.space handbook. It has also been split and attributed to four different categories of companies:

-   Prime contractor for classic design and manufacturing of satellites;

-   Sub-contractor for classic design and manufacturing of satellites;

-   Prime contractor for "{term}`new space <New space>`" design and manufacturing of satellites;

-   Sub-contractor for "{term}`new space <New space>`" design and manufacturing of satellites.

The space customization of the audit addresses the following points:

-   Removal of some questions not relevant for space applications:

    -   Operation and maintenance: questions n°63, n°66, n°67, n°81;

    -   Ruggedising: question n°168.

-   Change of wording for some questions in order to be more explicit for space applications:

    -   Specification: question n°28;

    -   Design: questions n°39, n°44, n°61;

    -   Manufacturing of board or subassembly: question n°61;

    -   Integration into equipment: question n°61;

    -   Operation and maintenance: questions n°14, n°71, n°72, n°114;

    -   Support process activities: questions n°68, n°76, n°104;

    -   Ruggedising: questions n°157, n°158, n°159, n°160, n°161, n°163, n°167, n°169.

-   Assignment of suggested answers for some questions of the questionnaire depending on the categories of users mentioned above.

This guidance is available for companies which have already performed the complete questionnaire process and are aware of its limitations.

For other companies from "{term}`new space <New space>`" domains, or sub-contractors which have never performed the questionnaire process, it is recommended to perform the complete questionnaire process at least once before using the adapted questionnaire.

The questions of the updated questionnaire with suggested answers are provided in EEE Annex A with the classification of each phase: Specification, Design, Manufacturing of board or subassembly, Integration into equipment, Integration into the system, Operation and maintenance, Support activities.

```{admonition} Rule
:class: rule

For Space Application, the new version of the Pi Process questionnaire needs to be applied.
```

```{admonition} Note
:class: note

The value obtained through the Pi Process calculation ranges from 1 to 8.
```

(eee_4_3_2_5)=
## Process factor for RF/HF components

The process factor $\Pi_{\text{ProcessRFHF}}$ takes into account how control over the life cycle of a radiofrequency or microwave product influences reliability. This factor is complementary to the process factor $\Pi_{\text{Process}}$ that remains applicable for microwave and frequency products.

$\Pi_{\text{ProcessRFHF}}$is issued from the following equations and questionnaire:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_22
Pi_{\text{ProcessRFHF}} = exp\left\lbrack 1.39 \cdot \left( 1 - RFHF\_ grade \right) \right\rbrack
```  
```{math}
:label: Equation_1_23
RFHF\_ grade = \frac{\sum_{}^{}\text{Values in the following table}}{\text{Maximum applicable mark}}
```
````

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-12')" placeholder="Search table...">

```{list-table} Factors influencing the $\Pi_{\text{ProcessRFHF}}$
:name: eee-table4-12
:header-rows: 1
:widths: 10 70 10 10

*   - N°
    - Criterion
    - Value if true
    - Value if false
*   - 1
    - Confirmed experience of the manufacturer with the development of a board or a radiofrequency (or hyperfrequency) function with good feedback from operations about the reliability of the function produced
    - 10
    - 0
*   - 2
    - Presence of protections against disconnection of antennas around RF and {term}`HF` amplifiers and power transistors
    - 5
    - 0
*   - 3
    - Presence of protections for {term}`EMC` compatibility (check on out of band) around RF and {term}`HF` amplifiers and power transistors. For example circulator, filter, etc.
    - 5
    - 0
*   - 4
    - Presence of protections against mismatch of load around RF and {term}`HF` amplifiers and power transistors. For example, circulator, isolator, filter, etc.
    - 5
    - 0
*   - 5
    - Presence of protections against temperature overstresses around RF and {term}`HF` amplifiers and power transistors.
    - 5
    - 0
*   - 6
    - Application of a formal method for taking account of thermal characteristics of the hyperfrequency function in the application.
    - 5
    - 0
*   - 7
    - Application of a formal method for validating the robustness of the circuit in its working environment (demonstrated margins from RF excursions, thermal overstress, compression, etc.)
    - 10
    - 0
*   - 8
    - Application of a formal method for taking account of specific features for transferring hyper frequency components in the manufacturing chain due to specific features of cases
    - 5
    - 0
*   - 
    - Maximum applicable mark
    - 
    - 50
```

Concerning criterion n°8, the formal method shall include specific procedures in the manufacturing lines of electronic boards with hyper frequency components: specific storage in a protected incubator, no manual manipulation of the components, protection of the board during transportation... Specific attention shall be placed on the cleanliness of the manufacturing devices during the manufacturing of the electronic board with hyper frequency components. The cleanliness of the board is a key factor to avoid any concern with hyper frequency components during use.

```{admonition} Note
:class: note

The value obtained through the Pi Process {term}`HF`/RF calculation ranges from 0.5 to 4.
```

``` {admonition} Note
:class: note

For the 2021 issue of FIDES, a new table is provided; it no longer consists in 8 questions but is now more complete with a total of 23 questions, divided between 7 categories: generalities, Power Supply management, Burn-in, Junction temperature, Compression -- {term}`DC`/RF performance & robustness, Environmental tests & Qualification and Reliability .
```

(eee_4_3_2_6)=
## Process factor for ASIC components

The process factor $\Pi_{\text{ProcessASIC}}$ takes into account the use of a formal methodology, the level of control of subcontractors and the good control in production and appropriate monitoring during the ASIC manufacturing process. This factor is complementary to the process factor $\Pi_{\text{Process}}$ that remains applicable for ASIC products.

$\Pi_{\text{ProcessASIC}}$ is issued from the following equations and questionnaire:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_24
\Pi_{\text{ProcessASIC}} = exp\left\lbrack 1.39 \cdot \left( 1 - ASIC\_ grade \right) \right\rbrack
```  
```{math}
:label: Equation_1_25
ASIC\_ grade = \frac{\sum_{}^{}\text{Values in the following table}}{\text{Maximum applicable mark}}
```
````

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_13')" placeholder="Search table...">

```{list-table} List of miscellaneous items with “standard model”
:name: eee-table4-13

* - <table class="myTable" id="eee_table4_13">
        <thead>
            <tr>
                <th>N°</th>
                <th>Criterion</th>
                <th>Value if true</th>
                <th>Value if false</th>
            </tr>
        </thead>
        <tr>
            <td colspan="4" class="full-span">Development and design: recommendations related to the ASIC design and project management</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Application of a formal methodology during the design phase (DO254, COCISPER, …)</td>
            <td>10</td>
            <td>0</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Existence of a subcontractor control plan (participants in the project)</td>
            <td>10</td>
            <td>0</td>
        </tr>
        <tr>
            <td>3</td>
            <td>The subcontractor control plan covers all participants in the project (control over the entire life cycle)</td>
            <td>10</td>
            <td>0</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Selection of subcontractors with experience in the target technology, functions and complexity level</td>
            <td>10</td>
            <td>0</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Selection of experienced subcontractors to take account of the complexity of the industrial organisation of the project</td>
            <td>5</td>
            <td>0</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Formal control (with reviews) by the design centre over subcontractors (founder, assembler and "test house")</td>
            <td>5</td>
            <td>0</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Industrial organisation used in the past</td>
            <td>5</td>
            <td>0</td>
        </tr>
        <tr>
            <td>8</td>
            <td>No subcontractor with poor feedback from operations</td>
            <td>5</td>
            <td>0</td>
        </tr>
        <tr>
            <td colspan="4" class="full-span">Manufacturing: Recommendations for manufacturing and monitoring of the process ASIC manufacturing process</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Use of a mature non-aging technology</td>
            <td>15</td>
            <td>0</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Use of Wafer annealing</td>
            <td>10</td>
            <td>0</td>
        </tr>
        <tr>
            <td>11</td>
            <td>Functional test of the ASIC at 3 temperatures</td>
            <td>15</td>
            <td>0</td>
        </tr>
        <tr>
            <td colspan="2" bgcolor="DimGray" color="white">Maximum applicable mark</td>
            <td colspan="2" bgcolor="DimGray" color="white">100</td>
        </tr>
    </table>
```

```{admonition} Note
:class: note

The value obtained through the Pi Process ASIC calculation ranges from 1 to 4.
```

(eee_4_3_2_7)=
## Process factor for Hybrids and Multi Chip Modules

The process factor $\Pi_{\text{Process\_H\&M}}$ takes into account of how control over design and manufacturing of the Hybrids and Multi Chip Modules influences reliability. This factor is complementary to the process factor $\Pi_{\text{Process}}$ that remains applicable for Hybrids and Multi Chip Modules.

$\Pi_{\text{Process\_H\&M}}$ is issued from the following equations and questionnaire:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_26
\Pi_{\text{Process\_H\&M}} = exp\left\lbrack 1.39 \cdot \left( 1 - \text{H\&M\_process\_grade} \right) \right\rbrack
```  
```{math}
:label: Equation_1_27
\text{H\&M\_process\_grade} = \frac{\sum_{}^{}\text{Values in the following table}}{\text{Maximum applicable mark}}
```
````

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-14')" placeholder="Search table...">

```{list-table} Factors influencing the $\Pi_{\text{Process\\_H\\&M}}$
:name: eee-table4-14
:header-rows: 1
:widths: 10 70 10 10

*   - N°
    - Criterion
    - Value if true
    - Value if false
*   - 1
    - Application of a formal method to take account of Hybrids or Multi Chip Modules manufacturing means during the design
    - 15
    - 0
*   - 2
    - Application of a formal method to take account of capacities to connect the Hybrids or Multi Chip Modules onto the board
    - 15
    - 0
*   - 3
    - Previous experience in development of the Hybrids and the Multi Chip Modules with good feedback from operations
    - 10
    - 0
*   - 4
    - Internal interconnection technology(ies) already used in a previous development
    - 3
    - 0
*   - 5
    - Case and substrate technology(ies) already used in a previous development
    - 3
    - 0
*   - 6
    - External interconnection technology(ies) already used in a previous development
    - 4
    - 0
*   - 7
    - Qualification of the line for space application ({term}`ESA`/{term}`CNES`) - (class K according to the MIL-PRF 38534F classification, or class I according to JESD93), or equivalent
    - 30
    - 0
*   - 8
    - Qualification of the line for military application - (class H according to the MIL-PRF 38534F classification or class II according to JESD93), or equivalent
    - 20
    - 0
*   - 9
    - Class G, E or D according to the MIL-PRF 38534F classification, or class lower than II according to JESD93, or qualification program internal to the manufacturer
    - 10
    - 0
*   - 10
    - Application of three methods of improving reliability: 1. burn-in, 2. batch by batch DPA, 3. functional test at the 3 temperatures
    - 30
    - 0
*   - 11
    - Application of two out of three among 1. burn-in, 2. batch by batch DPA, 3. functional test at the 3 temperatures
    - 20
    - 0
*   - 12
    - Application of one out of three among 1. burn-in, 2. batch by batch DPA, 3. functional test at the 3 temperatures
    - 10
    - 0
*   - 
    - Maximum applicable mark
    - 
    - 140
```

Questions 7, 8 and 9 exclude each other, thus only one of them can be answered with \"true\".

```{admonition} Note
:class: note

The value obtained through the Pi Process H&M calculation ranges from 1 to 4.
```