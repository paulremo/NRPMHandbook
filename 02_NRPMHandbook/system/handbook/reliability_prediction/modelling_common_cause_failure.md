(syst_4_7)=
# Modelling of common cause failure

In order to quantitatively assess the influence of {term}`common cause failure <Common cause failure>` on the system reliability several methods exist, for example {cite:t}`sys-Jones2012CommonCF`:

-   **Basic Parameter Model** -- uses direct probability of the {term}`common cause failure <Common cause failure>` event.

-   **Beta factor Model** -- estimates the percentage of {term}`common cause failures <Common cause failure>` from total failure rate, the ratio of the {term}`common cause failure <Common cause failure>` rate to the total rate is the beta factor. The Beta factor model is used for redundancies with two elements.

-   **Multiple Greek Letter Model** -- Is used for systems with higher level of redundancy or k-out of-n logic. The multiple Greek letter model includes parameters for the conditional probabilities that the N+1-th subsystem fails given that $N$ identical subsystems have already failed.

-   **Alpha Factor Model** -- All possible combinations of multiple failure events of k-out of-n subsystem are explicitly included. The factor $\alpha_{k}\left( n \right)$ is the fraction of the total failure rate due to any k out of n failure.

-   **Shock Model** -- Assumes that {term}`common cause failure <Common cause failure>` results from external events or shocks that occur with an average rate.

In the following, the {term}`contributing factors <Contributing factor>` to {term}`common cause failures <Common cause failure>` are explained, see {numref}`syst_4_7_1`. The quantitative assessment of {term}`common cause failures <Common cause failure>` will be explained using the example of the basic parameter model, see {numref}`syst_4_7_2`, and the beta-factor model, see {numref}`syst_4_7_3`.

(syst_4_7_1)=
## Contributing factors to common cause failure

In order to quantify the possibility of {term}`common cause failure <Common cause failure>` the significant contributors that affect the coupling mechanisms will be reviewed. The significant contributors are described by the following areas {cite:t}`sys-Hark2015CommonCF`:

-   **Separation/segregation**
    > Redundant component installed in close proximity to each other can make the system susceptible to common cause fault resulting from physical interference between components. Such {term}`common cause failure <Common cause failure>` can result from a failure of a single component when the physical effects are not limited to one component, e.g. fragments resulting from disintegration of pressure vessel could impact with other components. The more segregation of redundant components can be achieved, the less this factor influences {term}`common cause failures <Common cause failure>`. It should be noted that for space applications there are volume constrains which leads to limitations of separation and segregation of system components.

-   **Diversity/redundancy**
    > The use of identical components in redundant system architecture bears the risk that an error that has been introduced during the development, manufacturing or installation leads to {term}`common cause failure <Common cause failure>` of multiple redundant components. Development and production errors are in particular relevant for complex components, where exhaustive testing of all possible states is not possible to reveal the presence of an error. Similarity in the redundant architecture could be acceptable if components perform a limited number of functions and exhaustive testing can be performed. The use of different design principles, diverse hardware, diverse software or distinctly different design groups during the development reduces the susceptibility of a system to {term}`common cause failures <Common cause failure>` resulting from a lack of diversity.

-   **Complexity/maturity of design/experience**
    > A complex design with many components makes discovering coupling factors more difficult. Errors made during the design and development of systems have traditionally been detected and corrected by exhaustive tests conducted on the system and its components, by direct inspection, and by other direct verification methods capable of completely characterizing the performance of the system. These direct techniques may still be appropriate to reveal coupling factors for simple systems which perform a limited number of functions. For complex systems, where testing of all conditions is practically impossible a stringent development process is needed to minimize development errors. That means development assurance is mandatory which includes bi-directional traceability from {term}`requirements <Requirement>` to design and tests, design review with defined pass/fail criteria, a change process to document changes to definition and {term}`requirements <Requirement>` during the development.

-   **Use of assessments/analysis and feedback data**
    > The use of analysis methods, data tracking, and feedback from in-orbit data to improve the system can significantly reduce or mitigate the effect of {term}`common cause failures <Common cause failure>`.

-   **Procedures/ human {term}`interface <Interface>` (e.g. testing/operation)**
    > Human error can have a significant impact on {term}`common cause failures <Common cause failure>`. Wrong procedure applied could result in loss of multiple redundant components.

-   **Competence/training**
    > Creating an awareness of {term}`common cause failures <Common cause failure>` and expertise in adequate design principles plays an important role in reducing {term}`common cause failures <Common cause failure>` in development, design, manufacturing and operation.

-   **Environmental control (e.g., temperature, humidity)**
    > Redundant components are exposed to the same environmental conditions. Harsh environment condition, e.g. vibration, high or low temperature extremes, radiation etc., could provoke a {term}`common cause failure <Common cause failure>` of multiple components.

In order to avoid that {term}`common cause failures <Common cause failure>` restrict the achievable system reliability, redundancy must be coupled with technical diversity and physical separation. It is easier to prevent dependent failures by defeating coupling factors rather than by eliminating root causes. The potential defences were classified based on the coupling factors they prevent. Some specific approaches are:

-   Use diverse components in redundant sets.

-   Use separate locations for redundant components.

-   Connect the components in a redundant set to different supporting systems using diverse interconnection configurations

(syst_4_7_2)=
## Basic Parameter model

The basic parameter model is called a direct model because the probabilities of the different failure events are used directly. In the following, a simple redundant system with two identical components in parallel is considered, in which at least one out of two is required to work. It is assumed that the total failure probability consists of both independent and {term}`common cause failures <Common cause failure>`, as shown in {numref}`Figure_7_31`. The probability that either one of the two components fails independently is $Q_{I}$. The probability that both components fail together from a common cause is $Q_{C}$. The system failure probability is obtained by {cite:t}`sys-Jones2012CommonCF`

(syst_equation4_87)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_87
Q_{S} = Q_{I}^{2} + Q_{C}
```
````

The direct basic parameter model requires estimating all possible failure event probabilities, which could be obtained from {term}`in-orbit return (IOR) data <In-orbit return (IOR) data>` of {term}`common cause failures <Common cause failure>` but also from expert knowledge and engineering judgement.

(syst_figure4_31)=
```{figure} ../../picture/figure4_31.png
---
width: 600px
name: Figure_7_31
---
System failure calculation including {term}`common cause failure <Common cause failure>` – Basic Parameter Model. 
```

(syst_4_7_3)=
## Beta Factor model

For explanation of the beta factor model, also a system with two identical redundant components A and B is considered. The failure of one component will, with probability $\beta$, cause all components to fail, and with probability $1- \beta$, just involve the given channel. The total failure rate of a channel is obtained by {cite:t}`sys-Hark2015CommonCF`:

(syst_equation4_88)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_88
\lambda_{T} = \lambda_{I} + \lambda_{C}
```
````

where $\lambda_{I} = \left( 1 - \beta \right)\lambda_{T}$ denotes the failure rate of independent failure and

$\lambda_{C} = \beta\lambda_{T}$ denotes the failure rate of {term}`common cause failure <Common cause failure>`

The factor $\beta$ is defined as the ratio of the failure rate due to common cause to the total failure rate.

(syst_equation4_89)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_89
\beta = \frac{\lambda_{C}}{\lambda_{T}}
```
````

In order to estimate the factor $\beta$, the {term}`contributing factors <Contributing factor>` for {term}`common cause failure <Common cause failure>` is assessed.

## Estimation of Common Cause Beta Factor

With the categories of significant contributors to {term}`CCF` shown in {numref}`syst_4_7_1`, the common cause beta factor can be estimated, starting with an assessment of each of the common cause susceptibility categories and for each, assigning a susceptibility score 1, 5 or 10 corresponding to the susceptibility, where 1 represents a low susceptibility to {term}`common cause failure <Common cause failure>` in this category. For example, a susceptibility score of 1 assigned to the category "diversity" would correspond to a system that consists of redundant component using different design concepts with no common hard- or software, whereas a susceptibility score of 10 indicates a high susceptibility to {term}`common cause failure <Common cause failure>`, for example redundancies consists of identical {term}`COTS` components. Susceptibility score 5 corresponds to medium susceptibility to {term}`common cause failure <Common cause failure>`. The sum over all categories provides the total Common Cause Score.

(syst_equation4_90)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_90
\text{CCS} = \sum_{i}^{}{\text{CC}S_{i}}
```
````

The next step is to assess the maximum common cause value {term}`MCCV`. According to {cite:t}`sys-Hark2015CommonCF` one of three possible values 10%, 20% or 30% should be selected for the {term}`MCCV` based on experience of maximum {term}`common cause failure <Common cause failure>` in the industry. For example, for an industry with a strong safety culture and established methods to analyse and mitigate {term}`common cause failure <Common cause failure>` as it is the case for the space industry, the lowest value of {term}`MCCV` is selected.

The beta factor is calculated as follows

(syst_equation4_91)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_91
\beta = \frac{\text{CCS}}{\text{CCS}_{\max}} \times \text{MCCV}
```
````

Where $\text{CCS}_{\max}$ denotes the maximum possible Common Cause Susceptibility Score, assigning 10 to each category.

As shown in the example in {numref}`syst-table4-15` the assigned Susceptibility Scores add up to a total Common Cause Susceptibility Score (*CCS*) of 32. With 7 categories, $\text{CCS}_{\max}$ is 70. If the lowest value of 10% for $\text{MCCV}$ is selected, the following $\beta$ value is obtained from Eq. {eq}`Equation_7_91`.

(syst_equation4_92)=
````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_7_92
\beta = \frac{\text{CCS}}{\text{CCS}_{\max}} \times \text{MCCV} = \frac{32}{70} \times 0.10 = 0.0471
```
````

(syst_table4_15)=
**Table 4.15** : Example for the evaluation of a Common Cause Beta Factor

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'syst_table4_15')" placeholder="Search table...">

```{list-table} Example for the evaluation of a Common Cause Beta Factor
:name: syst-table4-15
:header-rows: 1
:widths: 75 25

*   - Category
    - Susceptibility Score $CCS_{i}$
*   - Separation/segregation
    - 5
*   - Diversity/ redundancy
    - 10
*   - Complexity/maturity of design/experience
    - 5
*   - Use of assessments/ analysis and feedback data
    - 1
*   - Procedures/ human interface (e.g. maintenance/testing)
    - 1
*   - Competence/ training/ safety culture
    - 5
*   - Environmental testing
    - 5
*   - Sum
    - 32
```


