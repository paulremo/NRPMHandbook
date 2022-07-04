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
\lambda = \lambda_{\text{Physical}} \bullet \Pi_{\text{PM}} \bullet \Pi_{\text{Process}} \cdot \Pi_{\text{LF}}
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

