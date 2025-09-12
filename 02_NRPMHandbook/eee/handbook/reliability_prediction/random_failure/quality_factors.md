<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_8_3_4)=
# Quality factors

The $\Pi_{\text{PM}}$ part manufacturing factor characterizes the quality of {term}`EEE` components and is adapted to space applications. This factor characterizes the quality of EEE components linked to their manufacturing. This factor is a direct multiplicative factor in the final calculation of the reliability prediction and takes into consideration the qualification and reliability monitoring tests for the case and for the active parts. 

The information which is used to estimate this factor is generally provided in the datasheet, in the reliability reports of the EEE components or available from the manufacturer.

This factor considers the following four parameters:

-   The manufacturer quality assurance level $QA_{\text{manufacturer}}$ which considers the quality standards through which the manufacturer is qualified,

-   The component quality assurance level $QA_{\text{component}}$ which considers the development standards linked to each component family,

-   The results and the severity of tests performed by the manufacturer $RA_{\text{component}}$;

-   The experience factor $\epsilon$ which represents the buyer’s experience with the supplier.

According to the equations presented in Annex A.2-17. No specific change of the equations is done for space applications. The range of $Part{\text{_Grade}}$ is between 0 for the worst mark and 1 for the best mark. Therefore, $Pi_{\text{PM}}$ component manufacturing factor is still comprised between 0.5 and 2 and adjusted by the factors 1.39 and 0.69 in the exponential.


(eee_8_3_4_1)=
## Manufacturer quality assurance for space applications

This value is only dependent on the certification level of the component manufacturer, whatever the technology. That means that the table presented in Annex A.2-17 is similar whatever the component. 
The quality assurance level of the manufacturer is normally written on the specification of the component or provided on the web site of the manufacturer. Sometimes, some of the components are manufactured in different manufacturing sites having different qualifications; it is then recommended to take into account the highest certification level as the basis to define the $\text{QA}_{\text{manufacturer}}$.


(eee_8_3_4_2)=
## Component quality assurance for space applications

The $\text{QA}_{\text{component}}$ factor corresponds to the procurement quality level for each component of a program.
This is presented in different tables for each family.  These will be presented in each subparagraph of {numref}`eee_8_3_5`.


(eee_8_3_4_3)=
## Results and severity of tests for space applications

The $\text{RA}_{\text{component}}$ factor is defined only for active parts and is based on the tests performed by the manufacturer. In the FIDES guide, the tables are based on JESD standards.

For space applications, the tests applied are different and very particular to space applications, in terms of lot sizes and number of hours, because qualified components are very few and are issued from the same and unique lot. Therefore, this factor is adapted to this situation. 

Additionally, these components endure screening tests and so, tests for which parameters are similar to {term}`AEC-Q <AEC-Q>` tests have no justification for space applications. This factor is defined differently depending on the package of the component. 

```{admonition} Rule
:class: rule
The following tables, reworked and agreed with EEE experts and the FIDES consortium team, shall apply for space applications, for hermetic components and for non-hermetic components.
```

**Hermetic components**

The table presented in Annex A.2-17, Table A.17-2 for hermetic components provides the different levels and associated values to consider for hermetic components.


**Non Hermetic (plastic) components**

The table presented in Annex A.2-17, Table A.17-3 for non-hermetic components provides the different levels and associated values to consider for plastic components (non-hermetic).


(eee_8_3_4_4)=
## Experience factor for space applications

The table corresponding the different levels as presented in the FIDES guide is recalled in Annex A.2-17, Table A.17-4.

```{admonition} Recommendation
:class: recommendation
A recommendation is to adapt the value of the experience factor ε according to the experience of the manufacturers of components. Generally, the prime contractors have a fairly good knowledge of their manufacturers and their processes, when they are in charge of procurement. Hence, they can define a fairly accurate value of this experience factor \varepsilon based on their past and ongoing experience with them.
```

