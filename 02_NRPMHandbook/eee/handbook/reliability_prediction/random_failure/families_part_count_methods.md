<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_4_3_5)=
# Families count and part count methods

The families count reliability prediction can be used to produce a reliability evaluation with the least amount of information about the product definition. Previous case studies have shown that this method is not clearly adapted and can provide discrepancies higher than 100% compared to the part stress method. That is why these methods are not recommended for space applications and the part stress method should be used as the main method for reliability prediction of {term}`EEE` components.

The parts count reliability prediction is similar to the families count method, but with more details, as for example more information about the package of integrated parts or the resistors dissipation. It provides a fast evaluation of reliability predictions. Therefore, this method is particularly useful for reliability studies on very large systems for which it is not necessary to describe thousands of components in detail. Previous case studies \[BR-EEE-8\] have shown that this method is providing acceptable results with discrepancies up to 60% compared to the part stress method.

For space applications, the comparison between the parts count method and the part stress method has been made on two different calculators, one from a payload board mounted on a geostationary satellite, and the other from a platform unit mounted on a geostationary satellite. The results for the first calculator for a reference temperature of +30°C show that the parts count method is optimistic compared to the part stress method with a ratio equal to 0.39 between both methods. Results for the second calculator for a reference temperature of +30°C show that the parts count method is pessimistic compared to the part stress method with a ratio equal to 2.33 between both methods.

Therefore, depending on the number and types of components, the results can be optimistic or pessimistic and it is difficult to get reliable conclusions from these families and parts count methods. Therefore, except for specific phases of "request for information", "request for proposal" or "request for quotation" and with the knowledge that the accuracy is not guaranteed, neither of these methods should be applied and the part stress method should be the preferred method especially as soon as the first nomenclatures of the equipment are available.

**General model for all families:**

The FIDES families count and part count reliability model for all components is based on the following equation:


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_211
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{LF}}
```
````

with:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_212
{\lambda_{\text{Physical}} = \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \left( \lambda_{\text{ECU}} \right)_{i}} 
  }{\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \  + \sum_{i}^{\text{Phases}}{\frac{\left( t_{\text{phase}} \right)_{i}}{t_{\text{total}}} \cdot \begin{pmatrix}                  
  \lambda_{\text{TH}} \cdot \Pi_{\text{Thermal}} + \\                                                                                                                   
  \lambda_{\text{TCyB}} \cdot \Pi_{\text{TcyCase}} + \\                                                                                                                 
  \begin{matrix}                                                                                                                                                          
  \lambda_{\text{TCyJB}} \cdot \Pi_{TcySolder\_ Joints} + \\                                                                                                            
  \lambda_{M} \cdot \Pi_{\text{Mechanical}} + \\                                                                                                                        
  \lambda_{\text{RH}} \cdot \Pi_{\text{RH}} \\                                                                                                                          
  \end{matrix} \\                                                                                                                                                         
  \end{pmatrix}_{i}} \cdot \left( \Pi_{\text{induced}} \right)_{i}}
```
````

**Physical stresses:**

-   $\Pi_{\text{Thermal}}$ Thermo-electrical stress from {numref}`eee_4_3_1_13`:


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_213
\Pi_{\text{Thermal}} = exp\left\lbrack 11604 \cdot E_{\text{aTH}} \cdot \left( \frac{1}{T_{0} + 273} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T \cdot exp( - \alpha \cdot T_{board\_ ref})} \right) \right\rbrack
```
````

-   $\Pi_{\text{TcyCase}}$ Temperature cycling stress from {numref}`eee_4_3_1_14`:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_214
\Pi_{\text{TcyCase}} = \left( \frac{{12 \cdot N}_{cy\_ annual}}{t_{\text{annual}}} \right) \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{m_{B}} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```
````

-   $\Pi_{TcySolder\_ Joints}$ Temperature cycling stress from {numref}`eee_4_3_1_14`:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_215
\Pi_{TcySolder\_ Joints} = \left( \frac{{12 \cdot N}_{cy\_ annual}}{t_{\text{annual}}} \right) \cdot \left( \frac{min(\theta_{\text{cy}},2)}{2} \right)^{\frac{1}{3}} \cdot \left( \frac{\text{ΔT}_{\text{cycling}}}{20} \right)^{m_{\text{JB}}} \cdot exp\left\lbrack 1414 \cdot \left( \frac{1}{313} - \frac{1}{{273 + T}_{max\_ cycling}} \right) \right\rbrack
```
````

-   $\Pi_{\text{Mechanical}}$ Mechanical stress from {numref}`eee_4_3_1_16`:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_216
\Pi_{\text{Mechanical}} = \left( \frac{G_{\text{rms}}}{0.5} \right)^{n}
```
````

-   $\Pi_{\text{RH}}$ Humidity stress from {numref}`eee_4_3_1_6`:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_217
{\Pi_{\text{RH}} = \left( \frac{\text{RH}_{\text{boar}d_{\text{ref}}}}{70} \right)^{4.4} 
  }{\ \ \ \ \ \ \ \ \ \ \ \  \cdot \ exp\left\lbrack 11604 \cdot E_{\text{aRH}} \cdot \left( \frac{1}{293} - \frac{1}{{273 + T}_{board\_ ref} + \Delta T \cdot exp( - \alpha \cdot T_{board\_ ref})} \right) \right\rbrack}
```
````

These physical stresses use two different types of parameters:

-   the parameters issued from the mission profile such as temperature, thermal cycling data, vibrations and humidity rate which are specific to space applications;

-   the other parameters are default values which are specific to each technology of {term}`EEE` components and available whatever the domains; they are listed in the FIDES guide from pages 241 to 244 for the families count method and from pages 231 to 240 for the part count method.

Some components more specific to the space domain can be defined with equivalent components:

-   MOS capacitor: use data from transistor;

-   Thermistor: use data from resistors;

-   Bi-stable relay: use data from mono-stable relays;

-   Plastic film capacitor: the values to consider are provided in the following table

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee_table4_198')"
    placeholder="Search table...">

```{list-table} Detail for HFRF capacitors
:name: eee-table4-198

* - <table class="myTable" id="eee_table4_198">
        <thead>
            <th><strong>Stress</strong></th>
            <th><strong>Parameters</strong></th>
            <th><strong>Values for ON phase</strong></th>
            <th><strong>Values for OFF phase</strong></th>
        </thead>
        <tr>
            <td rowspan="5">Thermal</td>
            <td>λTH</td>
            <td>0.0036</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Ea_Th</td>
            <td>0.7</td>
            <td>0</td>
        </tr>
        <tr>
            <td>T0</td>
            <td>20</td>
            <td>0</td>
        </tr>
        <tr>
            <td></td>
            <td>ΔT</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>A</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td rowspan="2">Humidity</td>
            <td>λRH</td>
            <td>0.02</td>
            <td>0.02</td>
        </tr>
        <tr>
            <td>Ea_Rh</td>
            <td>0.9</td>
            <td>0.9</td>
        </tr>
        <tr>
            <td rowspan="4">Temperature cycling</td>
            <td>λTcy_B</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>m_B</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>λTcy_JB</td>
            <td>0.0028</td>
            <td>0.0028</td>
        </tr>
        <tr>
            <td>m_JB</td>
            <td>1.9</td>
            <td>1.9</td>
        </tr>
        <tr>
            <td rowspan="2">Mechanical</td>
            <td>λM</td>
            <td>0.0004</td>
            <td>0.0004</td>
        </tr>
        <tr>
            <td>N</td>
            <td>1.5</td>
            <td>1.5</td>
        </tr>
        <tr>
            <td>El.Ch.W</td>
            <td>λECU</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Csensitivity</td>
            <td></td>
            <td>6.05</td>
            <td>6.05</td>
        </tr>>
    </table>
```

The part manufacturing factor $\Pi_{\text{PM}}$ is related to the quality of {term}`EEE` components and the recommendation is to use a fixed value determined by the values listed in the FIDES guide on page 229.

The process factor $\Pi_{\text{Process}}$ is related to the development process of electronic equipment and the recommendation is to either use a typical $\Pi_{\text{Process}}$ previously calculated for the same kind of application or in case no information is available, to use the maximum value issued from the questionnaire adapted to space applications and described in {numref}`eee_4_3_2_1`.

The induced factor $\Pi_{\text{Induced\_i}}$, has some parameters directly fixed for space applications as described in {numref}`eee_4_3_1`.

```{admonition} Recommendation
:class: recommendation

It is recommended not to use either of these methods for reliability predictions for Space applications; if necessary, the use of default values for stresses in the parts stress method is preferred.
```

```{admonition} Note
:class: note

For the 2021 issue of FIDES, the family count method is not longer present.
```

