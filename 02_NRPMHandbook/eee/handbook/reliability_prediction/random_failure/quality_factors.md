(eee_4_3_3)=
# Quality factors

(eee_4_3_3_1)=
## Quality factors

The $\Pi_{\text{PM}}$ component manufacturing factor is related to the quality of EEE components and is adapted to space applications.

The $\Pi_{\text{PM}}$ part manufacturing factor characterizes the quality of EEE components linked to their manufacturing. This factor is a direct multiplicative factor in the final calculation of the reliability prediction and takes into consideration the qualification and reliability monitoring tests for the case and for the active parts. The information which is used to estimate this factor is generally provided in the datasheet, in the reliability reports of the EEE components or available from the manufacturer.

This factor considers the following four parameters:

-   The manufacturer quality assurance level $QA_{\text{manufacturer}}$ which considers the quality standards through which the manufacturer is qualified;

-   The component quality assurance level $QA_{\text{component}}$ which considers the development standards linked to each component family;

-   The results and the severity of tests performed by the manufacturer $RA_{\text{component}}$;

-   The experience factor $\epsilon$ which represents the buyer's experience with the supplier.

according to the following equations:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_28
\Pi_{\text{PM}} = exp\left\lbrack 1.39 \bullet \left( 1 - Part\_ Grade \right) - 0.69 \right\rbrack
```  
````
with $Part\_ Grade$ for active parts:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_29
Part\_ Grade = \left\lbrack \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} + \text{RA}_{\text{component}} \right) \bullet \varepsilon}{36} \right\rbrack
```  
````

and for other parts:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_30
Part\_ Grade = \left\lbrack \frac{\left( \text{QA}_{\text{manufacturer}} + \text{QA}_{\text{component}} \right) \bullet \varepsilon}{24} \right\rbrack
```  
````

No specific change of the equations is done for space applications. The range of $Part\_ Grade$ is between 0 for the worst mark and 1 for the best mark. Therefore, *Π~PM~* component manufacturing factor is still comprised between 0.5 to 2.0 and adjusted by the factors 1.39 and 0.69 in the exponential.

(eee_4_3_3_2)=
## Manufacturer quality assurance for space applications

Since the release of the latest version of FIDES guide 2009, standards have changed and new standards dedicated to specific industrial domains have been produced. That is why a modification of the manufacturer quality assurance level $\text{QA}_{\text{manufacturer}}$ is recommended. This value is only dependent on the certification level of the component manufacturer, whatever the technology. That means that {numref}`eee-table4-15` is similar whatever the component. The quality assurance level of the manufacturer is normally written on the specification of the component or provided on the web site of the manufacturer.

Sometimes, some of the components are manufactured in different manufacturing sites having different qualifications; it is then recommended to take into account the highest certification level as the basis to define the $\text{QA}_{\text{manufacturer}}$.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-15')" placeholder="Search table...">

```{list-table} Recommendation definition of parameter $\text{QA}_{\text{manufacturer}}$
:name: eee-table4-15
:header-rows: 1
:widths: 70 20 10

*   - Manufacturer quality assurance level
    - Position relative to the state of the art
    - $\text{QA}_{\text{manufacturer}}$
*   - Certified according to standard: IATF/TS 16949
    - Higher
    - 3
*   - Certified according to one of the following standards: TL9000, ISO/TS 22163, EN9100, AS9100, JISQ9100, AQAP 2110, AQAP 2120, AQAP 2130, ISO/TS 22163, IEC TS 62239, ESA/ECSS QML/QPL, MIL-PRF-38535 QML, MIL-PRF-19500 and any standards in accordance with ISO 9001 version 2015
    - Equivalent
    - 2
*   - Certified ISO 9001 version 2015
    - Lower
    - 1
*   - No information
    - Very much lower
    - 0
```

(eee_4_3_3_3)=
## Component quality assurance for space applications

The $\text{QA}_{\text{component}}$ factor corresponds to the procurement quality level for each component of a program. This is presented in tables different for each family; these will be presented in each subparagraph of {numref}`eee_4_3_4`.

(eee_4_3_3_4)=
## Results and severity of tests for space applications

The $\text{RA}_{\text{component}}$ factor is defined only for active parts and is based on the tests performed by the manufacturer. In the FIDES guide, the tables are based on JESD standards.

For Space applications, the tests applied are different and very particular to space applications, in terms of lot sizes and number of hours, because qualified components are very few and are issued from the same and unique lot. Therefore, this factor is adapted to this situation.

Additionally, these components endure screening tests and so, tests for which parameters are similar to AEC-Q tests have no justification for space applications. This factor is defined differently depending on the package of the component.

```{admonition} Rule
:class: rule

The following tables, reworked and agreed with EEE experts and the FIDES consortium team, shall apply for Space applications, for hermetic components and for non hermetic components.
```

(eee_4_3_3_5)=
## Hermetic components

The following table provides the different levels and associated values to consider for hermetic components:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-16')" placeholder="Search table...">

```{list-table} Recommendation definition of parameter $\text{RA}_{\text{component}}$
:name: eee-table4-16
:header-rows: 1
:widths: 8 10 18 10 18 18 18

*   - $\text{RA}_{\text{component}}$
    - Risk
    - High temperature operating life
    - Pre-conditioning
    - Thermal cycling
    - Temperature humidity bias
    - Mechanical tests
*   - 3
    - Very reliable - level A
    - +125°C during 2 000h at Vmax on 15 parts
    - Done
    - -55°C / +125°C during 100 cycles on 15 parts
    - +25°C / +65°C and 90%RH during 10 cycles on 15 parts
    - vibrations 20g and shocks 1 500g during 5 times
*   - 2
    - Very reliable - level B
    - +125°C during 1 000h at Vmax on 15 parts
    - Done
    - -55°C / +125°C during 100 cycles on 15 parts
    - +25°C / +65°C and 90%RH during 10 cycles on 15 parts
    - vibrations 20g and shocks 1 500g during 5 times
*   - 1
    - Reliable
    - Inferior
    - Done
    - Inferior
    - Not done
    - Not done
*   - 0
    - Not reliable
    - Not done
    - Not done
    - Not done
    - Not done
    - Not done
```

(eee_4_3_3_6)=
## Non Hermetic (Plastic) components

The following table provides the different levels and associated values to consider for plastic components (non-hermetic) used for space applications:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_17')" placeholder="Search table...">

```{list-table} Recommendation for the definition of parameter $\text{RA}_{\text{component}}$ for plastic components
:name: eee-table4-17

* - <table class="myTable" id="eee_table4_17">
        <thead>
            <tr>
                <th><em>RA<sub>com-ponent</sub></em></th>
                <th>Risk</th>
                <th>High temperature operating life</th>
                <th>Pre-conditioning</th>
                <th>Thermal cycling</th>
                <th colspan="2">Highly Accelerated Stresses Tests or Temperature humidity bias</th>
            </tr>
        </thead>
        <tr>
            <td>3</td>
            <td>
                <p>Level A</p>
                <p>Class 1</p>
            </td>
            <td>+125°C during 2 000h at Vmax on 10 parts</td>
            <td>Done</td>
            <td>-55°C / +125°C during 500 cycles on 10 parts</td>
            <td>+130°C and 85%RH during 96h on 10 parts</td>
            <td>+85°C and 85%RH during 1 000h on 10 parts</td>
        </tr>
        <tr>
            <td>2</td>
            <td>
                <p>Level B</p>
                <p>Class 2</p>
            </td>
            <td>+125°C during 1 000h at Vmax on 10 parts</td>
            <td>Done</td>
            <td>-55°C / +125°C during 500 cycles on 10 parts</td>
            <td>+130°C and 85%RH during 96h on 10 parts</td>
            <td>+85°C and 85%RH during 1 000h on 10 parts</td>
        </tr>
        <tr>
            <td>1</td>
            <td>
                <p>Reliable</p>
                <p>Class 3</p>
            </td>
            <td>Not done</td>
            <td>Done</td>
            <td>Not done</td>
            <td>Not done</td>
            <td>Not done</td>
        </tr>
        <tr>
            <td>0</td>
            <td>Not reliable</td>
            <td>Not done</td>
            <td>Not done</td>
            <td>Not done</td>
            <td>Not done</td>
            <td>Not done</td>
        </tr>
    </table>
```

(eee_4_3_3_7)=
## Experience factor for space applications

A final recommendation is to adapt the value of the experience factor $\epsilon$ according to the experience of the manufacturers of components. Generally, the prime contractors have a fairly good knowledge of their manufacturers and their processes. Hence, they can define a fairly accurate value of this experience factor $\epsilon$ based on their past and ongoing experience with them.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_18')" placeholder="Search table...">

```{list-table} Recommendation for definition of parameter $\epsilon$
:name: eee-table4-18

* - <table class="myTable" id="eee_table4_18">
        <thead>
            <tr>
                <th><strong>Description of the risk related to use of this manufacturer</strong></th>
                <th><strong>Value of the ε factor</strong></th>
            </tr>
        </thead>
        <tr>
            <td>Recognized manufacturer: Mature processes for the item considered</td>
            <td>4</td>
        </tr>
        <tr>
            <td>Recognized manufacturer - Processes not analysed or not mature for the item considered</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Manufacturer not recognized (for example never audited or audited more than 2 years earlier) or small
                series productions</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Previous disqualification or problem with feedback from operations</td>
            <td>1</td>
        </tr>
    </table>
```

