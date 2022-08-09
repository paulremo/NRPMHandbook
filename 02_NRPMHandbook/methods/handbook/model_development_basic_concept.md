(method_6)=
# Model development basic concepts

(method_6_1)=
## Basic mathematical concepts and definitions

In the following, the most important metrics used in the context of reliability prediction are briefly defined, using a generic notation. It should be noted that the term “failure” in the most general sense can be understood to represent any (adverse) event that is of interest for the reliability modelling.

(method_6_1_1)=
### Reliability metrics related to time

Modelling reliability as a function of time requires a quantification of the probability distribution for the random time to failure $T$. In the following, no specific assumption is made regarding the form of this distribution, which may take any parametric or non-parametric form. Definitions for the well-known Exponential model (constant failure rate assumption) and the Weibull distribution are given in {numref}`method_6_4_2`.

**Reliability $R(t)$**

The probability that the system or component does not fail and performs its intended function at the time $t$

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_1
R_{T}\left( t \right) = P\left\lbrack T > t \right\rbrack = 1 - \int_{0}^{t}{f_{T}\left( t \right)\mathrm{d}t} = 1 - F_{T}\left( t \right) = \mathrm{\exp}\left( - \int_{0}^{t}{\lambda\left( x \right)\text{dx}} \right)
```
````

The reliability function $R\left( t \right) = R_{T}\left( t \right)$ is thus defined as the probability of survival until time $t$.

Eq. {eq}`Equation_method_6_1` also defines the relation to the probability of failure $F_{T}\left( t \right)$, the failure density $f_{T}\left( t \right)$, and to the failure rate $\lambda\left( t \right)$, which are defined hereafter.

**Failure Probability *$F(t)$***

The probability that a failure occurs and the system or component cannot perform its intended function anymore at the time $t$.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_2
F_{T}\left( t \right) = P\left\lbrack T \leq t \right\rbrack = \int_{0}^{t}{f_{T}\left( t \right)\mathrm{d}t} = 1 - R_{T}\left( t \right) = 1 - \mathrm{\exp}\left( - \int_{0}^{t}{\lambda\left( x \right)\mathrm{d}x} \right)
```
````

In statistical terminology, the probability of failure during a time interval $t$ is equivalent to the cumulative distribution function of the failure time distribution. Note that the subscript $T$, referring to the random time to failure, can be dropped throughout the handbook for the ease of notation, i.e. $F\left( t \right) = F_{T}\left( t \right)$.

Following Boolean logic, each system and its components can have two possible states, either operating error-free with the intended function or failing to do this. Therefore, there is a mathematical relation between the probability of failure (unreliability) $F\left( t \right)$ and reliability $R\left( t \right)$:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_3
R\left( t \right) + F\left( t \right) = 1\ .0
```
````

**Failure density *$f_{T}(t)$***

The first derivative of the failure probability at time $t$.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_4
f_{T}\left( t \right) = \frac{\mathrm{d}F_{T}\left( t \right)}{\mathrm{d}t}
```
````

The failure density corresponds to the probability density function of the failure time distribution.

**Failure rate *$λ(t)$***

The failure rate $\lambda\left( t \right)$ describes the probability that a failure occurs in a small time interval between $t$ and $t + \Delta t$, assuming that the system or component was operating error-free at the time $t$.

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_5
\lambda\left( t \right) = \lim_{\Delta t \rightarrow 0}\left( \frac{F_{T}\left( t + \Delta t \right) - F_{T}(t)}{\text{Δt}}*\frac{1}{R_{T}(t)} \right) = \frac{f_{T}(t)}{R_{T}(t)}
```
````

Considering the limit $\Delta t \rightarrow 0$, the failure rate $\lambda\left( t \right)$ is sometimes also referred to as "hazard rate".

**Mean Time To Failure *MTTF***

The average time until failure occurs, defined as the expected value of the failure time distribution:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_6
\text{MTTF} = E\left\lbrack T \right\rbrack = \int_{0}^{\infty}{t \cdot f_{T}\left( t \right)\ \mathrm{d}t} = \int_{0}^{\infty}{R_{T}\left( t \right)\ \mathrm{d}t}
```
````

The $\text{MTTF}$ equivalent for repairable systems is the Mean Time Between Failure ($\text{MTBF}$). In practice, both terms are often defined as the inverse of the failure rate, i.e. $\text{MTTF} = 1/\lambda$, assuming a constant failure rate $\lambda$ during the steady-state phase of the bath-tub curve. It must not be confused with the useful life of a component, which determines the length of this steady-state phase.

(method_6_1_2)=
### Reliability metrics related to stress or demand

Reliability as a function of time is certainly the most common notion in reliability modelling. It is appropriate for items whose failure process can be best described by a time-to-failure distribution. Stresses due to the environment and operating conditions can be considered as stress contributors in the modelling.

A simple generalization of the metrics defined in {numref}`method_6_1_1` above can be made for items whose reliability depends mainly on use, e.g. on the number of cycles. In this case, the time-to-failure distribution is simply replaced by a cycles-to-failure distribution, and the same definitions apply. With the aid of a use profile, the reliability modelling can be transformed to the time domain. The same applies for failures due to environmental stresses (e.g. radiation), whose occurrence or accumulation can be modelled as a function of time.

A special case of use-related failures are failures of items which are actuated only once (i.e. one-shot items) or a few times during the mission. In this case, a modelling based on the probability of failure on demand is better suited for reliability modelling. Note that a "demand" in this context must not necessarily be use-related, but can also represent an environmental stress acting at a discrete point in time (e.g. shock due to pyro activation).

**Probability of failure on demand**

The probability of failure on demand is the probability that a failure occurs, conditional on a specific event that takes place at a discrete (possibly random) point in time.

(method_6_2)=
## Data sources and inputs

Different kinds of inputs, as defined in the following subsections, can be used for the development or updating of reliability prediction models.

The lists given hereafter provide the order of preference for the use of the different inputs, which was used as a guidance for the development of this handbook. For the preference ordering, it is assumed that a given data source is readily available, and in sufficient quantity to be used as a standalone input. For practical applications it needs to be emphasized that the different inputs must not be seen as mutually exclusive, and combinations of data sources can be considered as appropriate.

Irrespective of the preference ordering, a specific input should only be used under the conditions specified in the following subsections.

For EEE reliability prediction, the following preference ordering applies:

1.  IOR data

2.  Manufacturer data

3.  Test data

4.  Handbook data

5.  Failure mechanism analysis

The preference ordering changes in case of doubts regarding the applicability of existing handbooks for space application, e.g. in the context of mechanical reliability prediction:

1.  IOR data

2.  Manufacturer data

3.  Test data

4.  Failure mechanism analysis

5.  Handbook data

Which data has been used for the development of this handbook is specified at the beginning of each of the {ref}`EEE chapter<sec_eee_handbook>`, the {ref}`MEC chapter<sec_mech_handbook>` and the {ref}`MIS chapter<sec_misc_handbook>`.

The models provided in the {ref}`EEE chapter<sec_eee_handbook>`, the {ref}`MEC chapter<sec_mech_handbook>` and the {ref}`MIS chapter<sec_misc_handbook>` generally consider all potential failure modes that are relevant for the overall reliability figure. A brief discussion of failure mode repartition data is provided in {numref}`method_6_2_6`.

(method_6_2_1)=
### In-orbit return

Satellite operators, prime contractors and lower level manufacturers can obtain IOR at spacecraft level, subsystem level (e.g. platform), equipment level (e.g. on-board computers) or in some cases at part level (e.g. passive RF parts or some families of FPGA by technology nodes).

With the analysis of the elements contained in the spacecraft, it is then possible to interpret the data through statistical methods, provided the total number of elements (or cumulated hours and observed failures) is sufficient.

In-orbit return data can be used for the development of new reliability prediction models, provided that the following conditions are fulfilled:

-   the item for which the In-Orbit Return data has been compiled is comparable to the item under consideration, technology and functions wise (e.g. for mechanisms or structures, same material, same shape),

-   the conditions of use are comparable (e.g. same or comparable orbit, as the use of data obtained for a GEO satellite cannot be used for LEO satellites without technical justification),

-   the thermal conditions (ambient temperature and thermal cycling) are in the same range.

In case only the first condition is not fulfilled, i.e. the IOR data is relevant for the application, but the sample size is not sufficient for a pure statistical approach, IOR data can also be used in combination with another input. The preferred approach to perform such a combination is called the Bayes inference, see {numref}`method_7` for details.

(metho_6_2_2)=
### Manufacturer data

There are two types of manufacturer data:

-   *Manufacturer general data*\
    It corresponds to the information that can be used to perform reliability calculations. The data can be related, for example, to the quality level or the qualification of a subsystem, a unit or a part, to the package information or to the complexity of a die for a EEE part, to the physical characteristics of the material for mechanical parts, to the constituting components for miscellaneous items, or the FMEA or RBDs at system or subsystem level.\
    These data are either requested by the project as part of the deliverable documentation (e.g. in the form of a technical note or a datasheet), provided within the elements of the data packages or available publicly (e.g. on the manufacturer's website).

-   *Manufacturer reliability data*\
    It corresponds to reliability or reliability oriented data provided by the manufacturer of the part, unit or subassembly, such as FIT rates, success probabilities or MTBF.\
    It can be part of catalogues, reliability reports or datasheets, provided on request or as part of data packages, and take the form of analyses, curves, figures or tables.\
    In some cases, it does not only apply to the specific item under consideration, but it can also be generic information, e.g. for a given technology or for a family of subassemblies designed and manufactured by the same entity. In those cases, it is necessary to define whether these data can apply for the specific cases.

Manufacturer general data are needed as a general input for the prediction, independent of the data sources used to develop the models. Manufacturer reliability data, in turn, can be used directly as an input for reliability modelling, provided that the following conditions are fulfilled:

-   if the data corresponds to manufacturer's in-orbit return, it is considered in {numref}`method_6_2_1`

-   if the data comes from a test, the conditions listed in {numref}`method_6_2_3` apply.

-   If the data is taken from another handbook data source, it should be consistent with the recommendations made in **Part III** of this handbook.

(method_6_2_3)=
### Test results

For space applications, the following tests are considered, all of them performed on ground, through simulations of the use conditions for the specified lifetime:

-   Screening/Burn-in: to demonstrate that youth defects have been eliminated

-   Reliability: to demonstrate a failure rate or a probability of success at elementary level

-   Functional: to demonstrate the ability of the product to perform the specified functions

-   Lifetime: to demonstrate the appropriate safety margin versus wear-out phenomena

-   Radiation: to demonstrate a SEP rate or a safety margin towards cumulated radiation dose

-   Characterisation: to assess the margins of the product characteristics

For reliability assessments, the test results that can be taken into account for reliability predictions are the reliability tests and the lifetime tests, and radiation testing to investigate the impacts of radiations.

A certain number of hypotheses are taken for tests and it is important to keep some control on the assumptions to have a better understanding of the data obtained. For this reason, test results need to be carefully handled as far as the following elements are concerned:

-   The reference versioning (reliability tests),

-   The test conditions (e.g. the data measured, the detail of the test settings)

-   The estimation method used (e.g. Chi Square estimator),

-   The environment of the test, which needs to be known and managed in order not to introduce additional stresses or root causes inherent to fore mentioned environment,

-   -   The use conditions, which need to be either representative of the actual operational conditions that will be met or considered with a predefined margin,

-   The technology of the elements tested, which needs to be close to the technology of the part under consideration.

It is also possible to combine test data with other reliability data, see {numref}`method_7` for details.

In case there are different types of tests that could be performed to obtain reliability data, a priority can be defined based on the objective of the test result.

In case the accuracy of the test result is important, the most relevant aspects to consider are:

-   The adequacy of the test -- the set of data and conditions tested has to be representative of the actual parts, environments and use conditions under consideration\
    e.g. a valve tested at 10 bar during 100 000 cycles might not be representative if the actual valve is used at 200 bar during 3 000 000 cycles in flight.

-   The test duration -- the test has to be as long as possible for accuracy purpose.

If the test is used only for an order of magnitude estimation, approximations, if clearly stated, can be acceptable. If the main priority is the cost, a tradeoff should take into consideration the overall cost and overall duration of the test, and approximations can be made, knowing that it will impact the final result.

(method_6_2_4)=
### Handbook data sources

There are a number of existing handbook data sources available that either present models (e.g. {cite:t}`method-UTE-C80-811` ) or reliability data (e.g. {cite:t}`method-NPRD-16`) at parts level. The Chapters for each domain ({ref}`EEE chapter<sec_eee_handbook>`, {ref}`MEC chapter<sec_mech_handbook>` and {ref}`MIS chapter<sec_misc_handbook>`) in this handbook specify whether and for which conditions some of the existing data sources can be used for reliability prediction in space applications.

(metho_6_2_5)=
### Failure mechanisms analysis

Knowing and managing the failure mechanisms within parts or systems is generally a good starting point to perform a reliability prediction. From a practical point of view, it becomes even more interesting when no other data are available to perform the reliability prediction of a part, a unit or a subsystem, and the last resort for the reliability engineer is to analyse the failure mechanisms of the item under consideration.

The first step is to identify potential failure modes and associated failure mechanisms, e.g. by performing a Design or Process FMEA, or through engineering judgment and/or lessons learnt. The following steps will then consist in determining reliability data linked to the phenomenon identified as most likely responsible for the undesired failure mode. The approach used for analysing in depth the failure mechanisms is the Physics of Failures, see {numref}`method_6_5` for details.

(method_6_2_6)=
### Failure mode repartition data

The present handbook generally takes into account all potential failure modes without providing information on the potential failure mode distribution for each part or component.

However, if needed for specific purposes (e.g. FMECA, safety analysis, fault tree analysis, common modes analysis, specific analyses for single point failures or Integrated Logistic Support) there are several ways to proceed in order to define the most appropriate failure mode repartition, making use of the sources discussed in the following.

For EEE mainly:

-   {cite:t}`method-ECSS-Q-ST-30-02C` Annex G

-   {cite:t}`method-MIL-HDBK-338B` Section 7,

-   {cite:t}`method-reliability-engineers-toolkit`

For both EEE and Mechanical parts:

-   {cite:t}`method-FMD-2016`

-   Company internal catalogues,

-   Any other source, with justification.

It should be noted that the failure modes are believed to be industry and application dependent, so it is recommended whenever possible to build an own catalogue.

(method_6_3)=
## Methods and modelling approaches

Different approaches can be followed to develop reliability models. For elementary (e.g. part level) reliability modelling, one of the following approaches may be used:

-   **Statistical approach:**
    Starting with observations of an item's behaviour under certain conditions (data from on-ground testing or operational feedback), a reliability model is derived using statistical methods. The mathematical tools and methods from classical reliability theory can be used for this purpose.

-   **Physics of Failure:**
    A reliability model is derived from a mathematical representation of the dominating failure mechanisms with due consideration of the relevant contributors (environmental and use conditions) and the associated uncertainties. Mathematical tools and methods may be taken e.g. from structural reliability theory, encompassing stress-strength interference methods but also methods to account for more complex failure mechanisms.


-   **Combined approach:** By combination of statistical and Physics of Failure approaches, the strengths of both approaches are combined, while mitigating their weaknesses. Mathematical methods for combining different sources of information are available e.g. from the field of Bayesian statistics, allowing also the consideration of limited data samples by making use of additional information from Physics of Failure modelling.

To a certain extent, the same methods can also be applied at higher levels of assembly, in particular the statistical approach which is in principle applicable at any level from part to system, provided that suitable and sufficient data is available for the item under consideration. Physics of Failure models, on the other hand, are generally developed bottom-up, focussing on the failure mechanisms of parts or relatively small assemblies. Methods for combining elementary reliability models in system level reliability prediction are described in {numref}`sec_sys_handbook`.

Each approach makes use of different pieces of information to estimate the reliability of the considered item, see {numref}`method_figure6_1` for illustration. The statistical approach uses relevant failure data to estimate the reliability of an item, whereas the Physics of Failure approach combines the analysis of the relevant failure mechanisms with information on the variability of the physical variables driving the process. Both approaches can be combined, e.g. with the aid of Bayesian updating, making best use of all available information.

```{figure} pictures/method_figure6_1.png
---
width: 600px
name: method_figure6_1
---
Relation between different types of reliability prediction methods and the available inputs.
```

The following sections provide a short discussion of the three approaches listed above. Which approach is most suitable depends on the application. A simple flow chart for the selection of reliability prediction methods is given in {numref}`method_figure6_2`, naming only Bayesian updating as a possible combined method to use both knowledge about the physical process leading to failure and relevant failure data.

In practice, making a choice between Statistics and Physics of Failure may be less black and white than depicted in the flow chart. For example, understanding the physics can help judging the relevance of available statistical data, and vice versa. Also, it should be noted that a combination of both approaches may also be achieved in a less sequential manner than with the Bayesian approach, where the Physics of Failure is used to derive a prior model that can then be updated using statistical data on observed failures. To give an example, the FIDES approach for reliability prediction, underlying the approach for EEE reliability prediction in {ref}`EEE chapter<sec_eee_handbook>` of this handbook, makes use of statistical base failure rates that are then tuned to give relevant results for a specific application with the aid of scaling factors that have been derived from the Physics of Failure.

```{figure} pictures/method_figure6_2.png
---
width: 600px
name: method_figure6_2
---
Selection of reliability prediction methods depending on the available information.
```

(method_6_4)=
## Statistical approach and classical reliability methods

Statistical methods, sometimes also called “classical reliability methods”, focus on the statistical distribution of the time to failure or other relevant characteristics related to the reliability of technical system and components, and on the estimation of the related reliability metrics from statistical data. Different data sources that are relevant for reliability prediction in space applications have been discussed in {numref}`method_6_2` above.
A correct implementation of the statistical approach requires the following three steps:

-   Sampling characterisation

-   Choice of distribution function

-   Parameter estimation

Once a distribution model has been selected and fitted to the data, it is generally straightforward to derive the probability of failure or survival, the failure rate, the MTTF or other reliability related metrics of interest, see {numref}`method_6_1` for details.
Each of the three modelling steps listed above will be briefly discussed below.

(method_6_4_1)=
### Sampling characterisation

Before starting a statistical analysis, the relevant characteristics of the available data sample need to be understood. As a minimum, the following aspects and questions have to be considered:

-   Data representativeness: Is the sample representative for the technology and application?

-   Failure characteristics: Which failures (root causes, failure mechanisms/modes) are included?

-   Acceleration: What was the rationale behind acceleration factors applied in testing (if any)?

-   Sample homogeneity: Is the sample homogeneous, or merged from different populations?

-   Time related aspects: Which phases in an item's life are considered by the data?

-   Time-to-failure data: Does the sample include individual time-to-failure data for each item?

-   Censoring: Is the data censored at a certain time, or at a certain number of failures?

-   Replacement strategy: Were failed items replaced during the observation?

-   Sample size: How many failures, items, and operating hours were considered?

(method_6_4_2)=
### Choice of distribution function

The appropriate choice of distribution function depends on the physical characteristics of the failure process. Provided that sufficient time-to-failure data is available, competing models can be compared with the aid of probability plots (e.g. using probability paper, quantile-quantile plots or probability-probability plots) or based on statistical tests for goodness of fit.

Probability paper can be constructed for different one- and two parameter distributions by plotting the empirical cumulative distribution function derived from the data with a transformation of the y-axis that ensures a linear plot if the data follows the underlying distribution. The most well-known examples in a reliability context are certainly the Exponential, Weibull, Normal and Lognormal probability paper.

Alternative techniques like quantile-quantile plots or probability-probability plots are applicable also to distribution types for which it is not possible to construct a probability paper, making it necessary to estimate the distribution parameters for plotting. The same condition applies to goodness-of-fit tests, which refer to the distribution fitted to the data.

Expert or engineering knowledge about the failure process is another valuable source of information for selecting a suitable distribution model, alone or in combination with an assessment of the available statistical data. It becomes relevant especially when the data is not sufficient to decide on the appropriate distribution.

{numref}`method-table6-1` provides an overview over some standard distribution models commonly used in the context of reliability prediction. The column "Derivation" provides information on the theoretical background for each model, which can be used to support the choice of distribution function. This is especially helpful if a selection purely based on data is not possible.

The probability distribution and density functions for the different models are defined in {ref}`annexII_A` at the end of {numref}`methods`. The two most well-known time-to-failure distribution, the Exponential and the Weibull model will be discussed in more detail in the following subsections. The modelling of standby components and one-shot items is discussed separately in {numref}`method_6_4_2_3`.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method-table6-1')" placeholder="Search table...">

```{list-table} Failure rate characteristics of standard time to failure distribution models.
:name: method-table6-1
:header-rows: 1
:widths: 30 30 40

*   - Distribution
    - Failure rate
    - Derivation
*   - Exponential
    - Constant
    - Time between failures in a homogeneous Poisson process
*   - Weibull
    - Increasing or decreasing
    - Limiting distribution for the minimum of a large number of i.i.d positive random variables (“weakest link”)
*   - Gamma
    - Increasing or decreasing
    - Sum of Exponential distributed failure times
*   - Lognormal
    - Increasing or decreasing
    - Product of independent random variables; degradation modelling with random increments proportional to the current degradation
    Sum of independent positive failure times (Central Limit Theorem for the sum of positive independent random variables)
*   - Normal
    - Increasing
    - Sum of independent failure times (Central Limit Theorem)
*   - Truncated Normal
    - Increasing
    - Sum of independent failure times (truncation ensures $t > 0$)
*   - Birnbaum-Saunders
    - Increasing or decreasing
    - Number of cycles until the length of a crack with random i.i.d. crack growth per cycle exceeds a fixed threshold (Fatigue life)
```

(method_6_4_2_1)=
#### The Exponential distribution for constant failure rates

The classical way to model the reliability especially of EEE components is to assume a constant failure rate $\lambda\left( t \right) = \lambda$ during the component's useful life. This implies that the time to failure follows an Exponential distribution, which strongly simplifies the analysis. In particular, for a data-based estimation of constant failure rates it is sufficient to know the total number of failures and the total number of component hours or cycles in which the failures have been observed.

In the Exponential model, the probability density function $f_{T}(t)$ and the cumulative distribution function $F_{T}(t)$ of the time to failure are defined as follows:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_7
f_{T}(t) = \ \lambda \cdot exp( - \lambda t)
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_8
F_{T}\left( t \right) = \ 1 - exp\left( - \lambda t \right) = 1 - R_{T}\left( t \right)
```
````

The expected time to failure is derived as $E\left\lbrack T \right\rbrack = 1/\lambda$, which allows for a simple conversion between the failure rate and MTTF/MTBF. The standard deviation of $T$ is equal to its mean value.

The Exponential time-to-failure model can also be derived from a homogeneous Poisson process for failure occurrence, assuming a constant failure rate. The constant failure rate assumption can be dropped by referring to a non-homogeneous Poisson process to model the occurrence of failures in time, which is not consistent with the Exponential distribution anymore, see e.g. {cite:t}`method-NUREG-CR-6823-SAND2003-3348P`. Another important assumption of the Poisson process (homogeneous or non-homogeneous) is the implied independence between individual events. This assumption must be questioned if multiple failures during a relatively short time interval may be triggered by potential common-cause effects.

(method_6_4_2_2)=
#### The Weibull distribution for non-constant failure rates

For some components, e.g. from the Mechanical domain, the failure rate is not constant but rather (slowly) increasing already during the part's useful life, as a result of deterioration effects. In this case, other distributions than the Exponential model have to be used to model the time to failure. The same is obviously true when considering the wear-out phase of the bath-tub curve, e.g. in the context of life time extensions, or when modelling systematic failures that are likely to show decreasing failure rates (similar to "infant mortality" effects). The combination of a distribution accounting for deterioration effects with a constant failure rate is discussed in {ref}`sec_sys_handbook`.

The most common time-to-failure distribution model with non-constant failure rate is certainly the Weibull distribution. The probability density function $f_{T}(t)$ and the cumulative distribution function $F_{T}(t)$ of the Weibull distribution are defined as follows:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_9
f_{T}(t) = \ \frac{\beta}{\alpha} \cdot \left( \frac{t}{\alpha} \right)^{\beta - 1}\exp\left\lbrack - \left( \frac{t}{\alpha} \right)^{\beta} \right\rbrack
```
````

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_10
F_{T}\left( t \right) = \ 1 - exp\left\lbrack - \left( \frac{t}{\alpha} \right)^{\beta} \right\rbrack
```
````

Here, $\beta$ is called the shape parameter and $\alpha$ the scale parameter or Weibull characteristic life. The shape parameter determines whether the failure rate is decreasing, constant or growing with time:

-   $\beta < 1$ decreasing failure rate

-   $\beta = 1$ constant failure rate (Exponential distribution with $\lambda = \frac{1}{\alpha}$)

-   $\beta > 1$ increasing failure rate

The expected time to failure is a function of both distribution parameters and may be determined as $E\left\lbrack T \right\rbrack = \alpha \cdot \Gamma\left( 1 + 1/\beta \right)$, where $\Gamma(x)$ is the gamma function:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_11
\Gamma\left( x \right) = \int_{0}^{\infty}{t^{x - 1}\mathrm{\exp}\left( - t \right)\text{\ dt}}
```
````

(method_6_4_2_3)=
#### Models for failures of standby components and one-shot items

A special case is the consideration of components that are parts of standby systems, which are only operating when required, possibly at a random point in time. There are two different approaches to model failures of standby components:

-   Standby failures: Failure is assumed to occur at a random point in time during standby

-   Failure on demand: Failure is assumed to be triggered by the operation (demand)

The first approach assumes that failure occurs at a random point in time (i.e. during standby) and is only revealed when the component is operated. The reliability of the component is determined using the time-related failure models already discussed (e.g. Exponential distribution) to estimate the probability that a failure has already occurred during the time before operation.

The second approach assumes that failure occurs as a direct result of the operation. The probability that the component fails on demand is then modelled using statistical models for repeated experiment such as e.g. the Binomial model for a Bernoulli sequence of experiments.

A Bernoulli trial is an experiment with only two possible mutually exclusive outcomes, i.e. \"success\" or \"failure\", and a constant probability of failure $p$ each time the experiment is conducted. The simplest example is the reliability of a one-shot item, which may be considered by a single Bernoulli experiment. The probability of $y$ failures in $n$ trials (to model failure on demand for items that are executed more than once) is determined using the Binomial distribution:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_12
p_{Y}\left( Y = y \right) = \ \begin{pmatrix}n\\y\\\end{pmatrix}p^{y}\left( 1 - p \right)^{n - y} = \frac{n!}{y!\left( n - y \right)!}p^{y}\left( 1 - p \right)^{n - y}
```
````

Assuming constant $p$ in each demand, the reliability for $n$ demands is calculated as the probability of $y = 0$ failures in $n$ trials, i.e. $p_{Y}\left( y = 0 \right) = {(1 - p)}^{n}$. The corresponding distribution for the „waiting time" (number of demands until the first failure occurs) is the Geometric distribution. More complex models can be built by modelling the failure probability $p$ as a function of time or the number of operations.

The probability of failure on demand can also depend on certain characteristics of the item under analysis or its use (e.g. the current for a pyrotechnical device, where a Bruceton test is used to determine the probability of success or failure, see {numref}`sec_misc_handbook` for details).

Which of the two models, i.e. standby failures versus failure on demand, is appropriate depends on the physical processes causing failure. It is also possible to combine both models by adding a failure on demand probability $p$ to the time-dependent standby failure probability $\lambda_{t}$ (when assuming an Exponential model for standby failures), see {cite:t}`method-NUREG-CR-6823-SAND2003-3348P`.

(method_6_4_3)=
### Parameter estimation

Once a suitable distribution law has been selected, the data sample can be used to estimate the distribution parameters, i.e. to fit the distribution to the data. Various standard statistical methods can be used for this task, the preferred ones being the Maximum Likelihood Method or Bayesian parameter estimation:

-   The *Maximum Likelihood Method* or *Bayesian methods with non-informative prior* can be applied if the considered data sample is the only information used for modelling.

-   *Bayesian methods with informative prior* become relevant to combine different data samples or sources of information (paragraph 5).

Other methods, e.g. the Method of Moments, can be equivalent in terms of the point estimate derived for the parameters of usual time-to-failure distributions, but require additional considerations to quantify statistical uncertainties.

Maximum Likelihood estimators have desirable asymptotic (large sample) properties such as consistency and efficiency. For small data samples, the point estimate may be biased, highlighting the importance of statistical uncertainties which should be quantified (e.g. estimation by interval) rather than just providing a point estimate. Without prior information (i.e. in a non-informative analysis), Bayesian methods and Maximum Likelihood Estimation give equivalent results with respect to the point estimates of the estimated distribution parameters. However, to quantify the uncertainty associated with these estimates, Maximum Likelihood Methods rely on large sample theory, assuming an asymptotic multivariate Normal distribution for the distribution parameters. Bayesian methods do not require such an assumption, providing a more consistent uncertainty quantification especially for parameters that cannot be negative (e.g. variance parameters).

Two problems are commonly encountered during the analysis of failure data: Censoring and lack of failures. Both problems are closely related, as will be discussed in the following.

Censoring relates to observations of a random variable that are available only within a certain range, which may be fixed or random. To give an example, data from a reliability test programme with fixed duration provides exact time-to-failure information only for a random number of items that fail during the test; for the items that survived the test it is only known that the failure time is larger than . This situation is sometimes termed Type I Censoring. An alternative test design would require a fixed number of failures, which leads to a random test duration (Type II Censoring). Various methods for dealing with censored data samples have been discussed in the literature, see e.g. {cite:t}`method-engineering-statistics-handbook`. Both the Maximum Likelihood Method and Bayesian parameter estimation allow the explicit consideration of censored data points in the formulation of the likelihood function, see {numref}`method_7_3_2` for details.

When testing high reliability components or collecting in-service data, it is likely that most samples will in fact survive the test, leading to a highly censored data set. Unfortunately, the uncertainty of the reliability estimate depends on the number of observed failures, see e.g. Eq. {eq}`Equation_method_6_14` below. The expected number of failures for a given number of items and a given duration (cumulated hours) is proportional to the failure rate. Thus, very large data samples and/or very long durations are required for high accuracy estimates of small failure rates, which may be impossible to achieve in practice. To overcome this problem, components may be tested at higher than expected stresses in accelerated life testing.

In the following, some basic information is provided regarding parameter estimation for the Exponential, Weibull and Binomial distribution.

(method_6_4_3_1)=
#### Failure rate estimation for the Exponential model

Parameter estimation is rather simple for the Exponential distribution, the constant failure rate being the only model parameter. The Maximum Likelihood Estimate for the failure rate is derived as follows:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_13
\widehat{\lambda} = E\left\lbrack \lambda \right\rbrack = \frac{n_{f}}{\sum_{i = 1}^{n}t_{i}}
```
````

Where $n_{f}$ denotes the number of observed failures, $n$ the number of items tested and $t_{i}$ the test duration for each item. The statistical uncertainty associated with the failure rate estimation is quantified by the following expression for the Coefficient of Variation (CoV) of the failure rate:


````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_14
\text{CoV}\left\lbrack \lambda \right\rbrack = \frac{\sqrt{\text{Var}\left\lbrack \lambda \right\rbrack}}{E\left\lbrack \lambda \right\rbrack} = \frac{1}{\sqrt{n_{f}}}
```
````

For homogeneous data samples (failure rate assumed to be constant both in time and across the sample), censoring does not require any specific consideration apart from the derivation of the cumulated hours in the denominator, where $t_{i}$ refers to

-   the observed time to failure for failed items that are not replaced

-   the test duration or censoring point for items that survived the test, or for items that failed but were replaced to continue the test.

Similar considerations are possible for data collected during operations.

It should be emphasized that Eq. {eq}`Equation_method_6_13` and Eq. {eq}`Equation_method_6_14` are valid only for constant failure rates. Another important assumption is that the observed failure times are from the same population, i.e. the failure rate is the same for all tested parts. The same is true for the alternative estimation methods discussed in the following.

Equations for Bayesian updating with the analytic approach using a conjugate Gamma prior are given in {numref}`method_7_5_1` ({numref}`method-table7-2`). Without prior information, the results are equivalent to Eq. {eq}`Equation_method_6_13` and Eq. {eq}`Equation_method_6_14` above. However, the failure rate is modelled with a Gamma distribution with support for positive values only, which is more consistent that the asymptotic Normal distribution assumption in the Maximum Likelihood method.

Another well-known approach to quantify the statistical uncertainty associated with data-based failure rate estimates is the use of confidence intervals. For the Exponential model, a $1 - \alpha$ confidence interval can be derived analytically, leading to the following interval estimate:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_15
P\left\lbrack \frac{\chi_{f,\frac{\alpha}{2}}^{2}}{2\sum_{i}^{n}t_{i}} \leq \lambda \leq \frac{\chi_{f,1 - \frac{\alpha}{2}}^{2}}{2\sum_{i}^{n}t_{i}} \right\rbrack = 1 - \alpha
```
````

Here, $\chi_{f,\frac{\alpha}{2}}^{2}$ and $\chi_{f,1 - \frac{\alpha}{2}}^{2}$ are quantiles of a Chi-Square distribution with $f$ degrees of freedom. For a time truncated test (Type I Censoring), $f = 2n_{f} + 2$, whereas $f = 2n_{f}$ becomes relevant for a failure truncated test (Type II Censoring).

Note that Eq. {eq}`Equation_method_6_15` is based on the mathematical relationship between the Exponential, Gamma and Chi-Square distribution and fully equivalent with the Bayesian approach using a Gamma conjugate prior, see {numref}`method_7_5_1` for details.

Failure rate estimation with zero observed failures is also discussed in {numref}`method_7_5_1`.

(method_6_4_3_2)=
#### Parameter estimation for the Weibull distribution and other failure time distributions

The Maximum Likelihood Method can be applied also to parameter estimation for the Weibull distribution and other failure time distributions like those listed in {numref}`method-table6-1`. Analytic solutions are available for most two-parameter models, but can generally be applied only with complete time-to-failure data. The same is true for the closed form solutions for Bayesian updating provided in {numref}`method-table7-2` ({numref}`method_7_5_1`); numerical methods are required for Bayesian parameter estimation with censored data samples.

In practice, most data samples include censored observations, which is important to consider appropriately in distribution fitting for non-constant failure rates. The formulation of the likelihood function is usually straight-forward even with censored data sets, see {numref}`method_7_3_2` for details. However, the Maximum Likelihood estimate for the model parameters needs to be derived numerically:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_16
\widehat{\mathbf{\theta}} = \min_{\mathbf{\theta}}\left\lbrack - l(\mathbf{\theta}\left| \widehat{\mathbf{x}} \right.\ ) \right\rbrack = \min_{\mathbf{\theta}}\left\lbrack - \mathrm{\ln}\left( L(\mathbf{\theta}\left| \widehat{\mathbf{x}} \right.\ ) \right) \right\rbrack
```
````

Here, $L\left( \mathbf{\theta}\left| \widehat{\mathbf{x}} \right.\  \right)$ denotes the Likelihood of a parameter set $\mathbf{\theta}$ conditional on the data $\widehat{\mathbf{x}}$ (see {numref}`method_7_3`for details), and $l\left( \mathbf{\theta}\left| \widehat{\mathbf{x}} \right.\  \right)$ is the corresponding log-Likelihood.

The statistical uncertainty and covariance between the different parameters can be evaluated with the aid of the Fisher information matrix, which is derived from the Hessian matrix; the Hessian is usually determined as a by-product of the optimization routine used to solve Eq. {eq}`Equation_method_6_16`.

In practice, it may be sufficient to know that at least for standard distribution models and usual sampling characteristics, analytic and numerical approaches for Maximum Likelihood Estimations are implemented in various software tools for statistical and/or reliability analysis.

(method_6_4_3_3)=
#### Parameter estimation for the Binomial distribution

The Maximum Likelihood Estimate for the probability of failure in the Binomial model is derived as follows:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_17
\widehat{p} = E\left\lbrack p \right\rbrack = \frac{n_{f}}{n}
```
````

Where $n_{f}$ denotes the number of observed failures in $n$ independent Bernoulli trials. Similar to the exponential model, for constant probability $p$ it does not matter how many items have been tested or observed for how long and whether observations are censored -- what counts is just the total number of failures and trials

The number of failures determines the statistical uncertainty associated with the estimate. Note that the normal approximation assumed for estimating the standard deviation associated with the Maximum Likelihood Estimate is not appropriate for small probabilities of failures, unless the data sample is very large. Uncertainty quantification can be improved by using the analytical Bayes approach with a conjugate prior, see {numref}`method-table7-2` in {numref}`method_7_5_1` for details. Using a non-informative Jeffrey's prior, the following interval estimate is derived:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_18
P\left\lbrack \text{Beta}_{\frac{\alpha}{2}}\left( n_{f},\ n - n_{f} + 1 \right) \leq p \leq \text{Beta}_{\frac{\alpha}{2}}\left( n_{f} + 1,\ n - n_{f} \right) \right\rbrack = 1 - \alpha
```
````

Where $\text{Beta}_{q}\left( \alpha,\ \beta \right)$ denotes the $q$ Quantile of the Beta distribution, as defined in {ref}`annexII_A`.

(method_6_5)=
## Physics of failure and structural reliability methods

Physics of Failure methods for reliability prediction are based on a mathematical modelling of the relevant failure mechanisms leading to failure. It is important to make a clear distinction between the use of Physics of Failure models in the context of design versus reliability prediction:

-   During design, the objective is to model and account for anticipated failure mechanisms in order to avoid failures, and thus to improve reliability (design for reliability). The analysis is in most cases deterministic, using margins to account for uncertainty and variability. The probabilities of success or failure are generally not quantified.

-   During reliability prediction, the objective is to quantify the probability that the considered failure mechanism(s) will lead to failure for a given design. To achieve this, the relevant uncertainties and variabilities need to be quantified and appropriately considered in a probabilistic analysis.

It is also possible to combine both applications, e.g. in the context of Reliability Based Design Optimization {cite:t}`method-19970017405`, {cite:t}`method-design-space-decomposition`.

The focus of the following discussion will be on the application of Physics of Failure models in the context of reliability prediction. It should be noted that the mathematical models used to describe the failure mechanism process may be the same as the ones used for design; it is the quantification of uncertainties that makes the difference.

Thus, a sound Physics of Failure method requires a combination of physical laws describing mathematically the relevant failure mechanisms with probabilistic models that account for variability and uncertainty in the manufacturing of items and their use (e.g. the distribution laws used in the Stress Strength method). Statistical observations can be used for this task, and often are the preferred input for the required probabilistic modelling. Nevertheless, in the frame of this handbook, an approach is classified as "pure" Physics of Failure as long as no reliability data is used for the quantification (see {numref}`method_figure6_1`).

An important prerequisite for the successful use of Physics of Failure methods is that the physical process leading to failure needs to be well understood and the uncertainty quantification has to account for the relevant failure root causes. This can be rather straightforward in some cases, e.g. for the modelling of wear-out failures, but may be a challenge in other applications. In particular the consideration of random failures with a pure physics-based approach is certainly more difficult due to the fact that (by definition) the root cause of these failures is not known. To overcome this limitation, some existing methodologies (e.g. {cite:t}`method-UTE-C80-811` for EEE parts, {cite:t}`method-NSWC-11` ) combine Physics of Failure considerations with field return data to derive pertinent models that can be used for a wide range of applications. Note that such "combined" approaches, making use of both Physics of Failure and reliability data, are discussed separately in {numref}`method_6_6`.

The following subsections provide guidance on the use of "pure" Physics of Failure reliability prediction methods, with some more details on the class of structural reliability methods provided in {numref}`method_6_5_4`. A rather simple application of structural reliability methods is for the analysis of structures using the well-known stress-strength approach (see {numref}`sec_mech_handbook` for details). However, the mathematical methods are well applicable to any Physics of Failure reliability prediction problem, not only for structures and including much more complex model formulations.

(method_6_5_1)=
### Failure mechanisms identification and modelling

Applying the Physics of Failure approach first requires the understanding of the failure mechanisms contributing to the predominant failure modes for an item. Possible ways to initiate a failure mechanism analysis can be based on the following pieces of information:

-   Engineering analysis and judgment from design and reliability experts

-   Lessons learnt from previous missions

-   Results from a Design FMEA (DFMEA) or Process FMEA (PFMEA)

Besides gaining knowledge about all failure mechanisms that may potentially cause the item under analysis to fail, it is also relevant to know which are the dominating ones for the considered design and application. A good, though still qualitative, understanding how much different failure mechanisms may contribute (or not) to overall unreliability can help to focus the analysis and to strongly reduce the effort required by the Physics of Failure approach.

The next step is to define a mathematical model describing the failure mechanisms identified in the first step. Note that a model in this context may be an analytic function or a numerical model; the only requirement is that the failure state is clearly defined as a function of the relevant physical variables.

The effort required to develop a new failure mechanism model can be considerable. It is thus highly recommended to start by a search for published models from similar applications. A collection of models for various failure mechanisms can be found in the RiAC's Web-Accessible Repository of Physics-based Models ({cite:t}`method-RiAC`), which has been set up to foster the use of Physics of Failure methods in practical applications. Models used by the design engineers are another valuable source of information.

(method_6_5_2)=
### Quantification of variable and model uncertainties

The failure mechanism model defines which variables need to be known to identify whether an item is in the failed or in the safe state. First deterministic estimates for each variable may often be derived from design information, typically giving a positive margin when the failure mechanism model is used with this input.

To perform a reliability calculation, it is now necessary to quantify the uncertainties associated with each variable. To reduce the effort required by this step, some variables may be considered as deterministic, provided that at least one of the following conditions is fulfilled (both criteria may be assessed relative to the other variables' impact and uncertainty):

-   The variable's impact on the failure mechanism model is negligible and/or

-   The variability and uncertainty associated with the quantitative estimate is small

Variables that are modelled as deterministic should be considered with their mean value if the goal is to achieve a reliability prediction that is realistic, whereas conservative estimates like lower/upper fractile values can be used if the goal is to derive a lower bound for an item's reliability. Note that designers typically use conservative estimates.

The remaining variables must be considered as random variables, requiring modelling choices regarding the distribution type and an estimation of the distribution parameters for the considered application. The following discussion focuses on probabilistic modelling for single variables; correlation or dependence may need to be considered in case different variables are not statistically independent.

The distribution type can be selected based on the following information:

-   Probability plots based on available data, e.g. test data or measurements in the field

-   Engineering knowledge on the underlying processes and natural bounds (e.g. strength \> 0)

-   Published information containing any of the before mentioned

After selecting an appropriate model, the distribution parameters need to be estimated to complete the probabilistic modelling. The following sources of information can be used for this task:

-   Statistical data, if available in sufficient quantity

-   Design values, together with a statistical definition or interpretation (e.g. A- and B- value of material strength, typically defined as 1% and 10% fractile values, at 95% level of confidence)

-   Estimates (e.g. based on engineering judgement) for the mean value and/or coefficient of variation of the random variable distribution

-   Any combination of the abovementioned sources

It should be noted that a good fit of the distribution (both in terms of the selection of the distribution model and its parameters) is important especially in the part of the distribution that contributes to unreliability, which is typically the lower tail for variables governing strength, and the upper tail for many stress variables.

When judging about the variability of a random variable, e.g. to estimate the coefficient of variation, it is important to know which root causes need to be considered in the prediction. To give an example, uncertainties and variability in the design and manufacturing process may increase the variability of an item's strength, but also that of the stresses acting on it.

Finally, it should be mentioned that also the mathematical model used to represent the failure mechanism may be associated with (model) uncertainties. Depending on the level of accuracy and sophistication of the model (e.g. simple empirical correlations versus detailed finite element code), it may be relevant to explicitly account for these model uncertainties in the reliability prediction.

(method_6_5_3)=
### Uncertainty propagation and reliability estimation

Reliability estimation with Physics of Failure methods requires that the identified uncertainties are propagated through the failure mechanisms model to assess the probability of failure due to unfavourable combinations of random variable realizations. With the information from the previous steps, this is basically a mathematical question.

Various tools and techniques are available to perform this task, from analytic solutions for some basic problems to numerical methods, e.g. using Monte Carlo simulations. An overview on the so-called structural reliability methods is given in the following section.

(method_6_5_4)=
### Overview of structural reliability methods

Structural reliability embraces a class of methods that can be used to derive a reliability estimate from a mathematical model describing the Physics of Failure. The starting point is the formulation of a so-called limit state function $g\left( \mathrm{X} \right)$, defined as a function of a random vector $\mathrm{X}$ . The variables in $\mathrm{X}$ (called "basic variables") represent all inputs required to model the physics of failure that are associated with uncertainties. The failure domain is defined as $g\left( \mathrm{X} \right) \leq 0$, bounded by the limit state $g\left( \mathrm{X} \right) = 0$, the "failure surface".

The following steps, each corresponding to one of the previous subsections ({numref}`method_6_5_1` to {numref}`method_6_5_3`), are required to perform a structural reliability analysis:

1)  Formulation of the limit state function $g\left( \mathrm{X} \right)$, defining failure as a function of all physical variables that are relevant for the considered failure mechanism ("basic variables", vector $\mathrm{X}$).

2)  Choice of suitable probabilistic models (distribution type and parameters, and dependence modelling) for these basic variables, defining the joint probability density function for the random vector $\mathrm{X}$.

3)  Derivation of the failure probability $P_{f} = P\left\lbrack g\left( \mathrm{X} \right) \leq 0 \right\rbrack$ using suitable analytic or numerical methods.

To clarify the link to statistical methods for reliability prediction, it is important to understand that the probability of failure, when calculated with structural reliability methods, always refers to a specified time frame (e.g. mission life time) or event (e.g. solar array deployment), which determines the probabilistic modelling. However, the random variables in $\mathrm{X}$, or possibly the limit state function itself, can be modelled as a function of time, which allows to derive the time-to-failure distribution and reliability function by performing multiple calculations for different time intervals:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_19
R_{T}\left( t \right) = 1 - F_{T}\left( t \right) = 1 - P_{f}\left( t \right) = 1 - \ P\left\lbrack g\left( \mathrm{X}\left( t \right) \right) \leq 0 \right\rbrack
```
````

The Physics of Failure model has to consider the dominating failure mechanism(s) contributing most to the item's unreliability (see {numref}`method_6_5_1`). The limit state function $g\left( \mathrm{X} \right)$ used for this purpose can be of any functional form, or represented by a numerical model. The straight line shown in {numref}`method_figure6_3` represents the failure surface for the so-called "fundamental case" with $g\left( \mathrm{X} \right) = X_{1} - X_{2}$, where failure occurs if the random "resistance" or strength $X_{1}$ of an item is smaller than the "load" or stress $X_{2}$ acting on it. The well-known stress-strength interference methods may thus be considered as a subclass of structural reliability methods ({numref}`sec_mech_handbook`). More general models can be derived by considering more than two basic variables, nonlinear limit state functions and/or or numerical models defining the failure domain.

```{figure} pictures/method_figure6_3.png
---
width: 600px
name: method_figure6_3
---
Illustration of structural reliability methods, where failure is defined with the aid of a limit state function $g\left( \mathrm{X} \right)$, here depicted for a simple "strength -- stress" interference model. The probability of failure is derived as the probability integral over the failure domain, i.e. where $g\left( \mathrm{X} \right) \leq 0$
```

Once the limit state function is defined, the second step requires a probabilistic modelling of the random variables entering the limit state function (vector $\mathrm{X}$). This step is described in {numref}`method_6_5_2` above. The probabilistic models chosen may have implications on the methods that can be used for the third step. Nevertheless, basic variable models should not be selected for mathematical convenience only, as the choice may strongly affect the result. The reason becomes obvious when considering a simple stress-strength reliability problem, with the probability of failure resulting from the overlap between the two distributions. Due to the different form of the lower and upper tails of different distribution models, the reliability prediction may be very much different when switching e.g. from a Normal distribution assumption to a Lognormal model for one of the two distributions.

Finally, in the third step, a suitable structural reliability method needs to be chosen to perform the calculations. Very broadly, the following categories of methods can be distinguished.

-   *Analytic methods*\
    Closed-form solutions for the probability of failure exist for some special cases, mostly considering the "fundamental case" with interference of two random variables. The most well-known example (basic stress/strength approach) is a linear limit state function of two normal distributed random variables ({numref}`sec_mech_handbook`).

-   *First/Second Order Reliability Methods -- FORM/SORM*\
    FORM analysis starts with a transformation of all random variables to standardized normal space, in which the most likely point of failure (the "design point") is identified by a search algorithm. It is defined as the point on the failure surface $g\left( \mathrm{X} \right) = 0$ having the shortest distance to the origin, defining the reliability index $\beta$. Using a first-order approximation (FORM) of the limit state $g\left( \mathrm{X} \right) = 0$, the probability of failure is a direct function of this distance $\beta$. Second-order approximations (SORM) may be used to refine the analysis.

-   *Monte Carlo Simulations*\
    Simulation methods are based on repeated evaluations of the limit state function with simulated realisations of the random vector $\mathrm{X}$. The probability of failure is estimated by dividing the number of failures "observed" in this numerical exercise by the total number of simulations. Different variance reduction techniques are available to improve the accuracy of this estimate with reasonable numerical effort.

Surrogate modelling can be used to complement these different methods if the limit state function is not defined explicitly (i.e. using an analytic formula), but implicitly with the aid of a numerical model. The safe domain can in this case only be defined through repeated numerical analysis with different input values. A surrogate model is an analytic function that approximates the results of the numerical model, allowing to apply FORM/SORM methods and a more efficient use of Monte Carlo Simulations. Various approaches for the construction of surrogate models are discussed in the literature (see e.g. {cite:t}`method-meta-models`), including Response Surfaces, Kriging, Polynomial Chaos Expansions and Support Vector Machines.

The different methods available to perform a prediction with structural reliability methods are discussed in comprehensive textbooks (e.g. {cite:t}`method-methods-structural-safety`, {cite:t}`method-structural-reliability-methods`, {cite:t}`method-structural-reliability-analysis-prediction`) and have been implemented in various software packages, both commercial {cite:t}`method-strurel`, {cite:t}`method-nessus`,{cite:t}`method-uq-lab` and freeware {cite:t}`method-ferum`, {cite:t}`method-open-turns`. Here, only the strengths and limitations of each method will be briefly explained.

(method_6_5_4_1)=
#### Analytic methods strengths and limitations

From a practical point of view, analytic methods are clearly the method of choice whenever a quick assessment is required based on limited information, e.g. about the safety margins inherent in a design. However, the approach has strong limitations regarding the choice of limit state function and distributional assumptions, which may lead to questionable results if the underlying assumptions cannot be justified. Nevertheless, the approach can be recommended under the following conditions:

-   If the underlying assumptions are justified for the considered application or

-   If the results have been cross-checked with a benchmark based on more realistic assumptions, requiring numerical methods for solving

(method_6_5_4_2)=
#### FORM / SORM methods strengths and limitations

First and Second Order Reliability Methods were originally developed to increase modelling flexibility when compared to analytic methods, while still having to deal with the computation power limitations of early computer generations. Their fast convergence is still one of their biggest strengths; a handful of iterations can be sufficient to find the design point, which provides useful additional information not only on the reliability, but also regarding the sensitivity of the prediction results to each of the basic variables.

An important prerequisite is that the limit state can be defined with an analytic formula, which implies that a surrogate model is needed to represent implicit limit states.

Possible limitations can arise when the failure surface has several likely failure points with similar distance to the origin in standardized normal space, which may lead to convergence issues in the search algorithm. It can be difficult to anticipate such behaviour due to the variable transformation prior to the search. To check convergence, it is thus recommended to run the search algorithm several times with random starting points.

Apart from this, the linear (FORM) or quadratic (SORM) approximation of the failure surface (illustrated in {numref}`method_figure6_4` obviously introduces an error, whose magnitude depends on the form of the limit state function. Due to the exponential decay of the standard normal distribution when moving from the origin to the tails, the error will usually be small even with a first order approximation. Nevertheless, FORM/SORM methods should not be used with limit states that are strongly nonlinear, or in case of several limit states defining the failure domain.

Additional problems may arise in cases where the probability of failure is very high, especially for $P_{f} > 0.15$. In this case, simulation techniques are more efficient and accurate and should be considered as the method of choice

```{figure} pictures/method_figure6_4.png
---
width: 600px
name: method_figure6_4
---
Illustration of the failure surface linearization in the design point $\mathbf{u}^{\mathbf{*}}$ in Standard Normal space. The reliability index $\beta$ is defined as the shortest distance of the failure surface to the origin, allowing to derive the probability of failure from the Standard Normal distribution, $P_{f} = \Phi\left( - \beta \right)$.
```

In summary, FORM/SORM are suitable methods to derive the probability of failure provided that the following conditions are fulfilled:

-   The boundary of the failure domain is defined explicitly by a failure surface $g\left( \mathrm{X} \right) = 0$, possibly derived as a surrogate model representing a numerical model.

-   The failure domain is defined by a single limit state function without strong nonlinearities.

-   No convergence issues are observed when starting the search algorithm several times with random starting values.

-   The probability of failure is smaller than $P_{f} = 0.15.$

Monte Carlo methods should be considered if any of these conditions is not fulfilled.

(method_6_5_4_3)=
#### Monte Carlo methods strengths and limitations

One of the biggest strengths of the Monte Carlo approach is its simplicity: The generation of random numbers, even using standard software is generally straightforward for most probability distributions. In addition, (crude) Monte Carlo is certainly the most intuitive way to propagate uncertainties through a Physics of Failure model, whether it is defined by an analytic function or a numerical model.

Unfortunately, the simplicity of crude Monte Carlo comes at a cost, requiring a large computational effort to perform a sufficient number of simulations for a stable reliability estimate. How many simulations are required depends on the (expected) probability of failure and the required accuracy of the results. A simple rule-of-thumb is provided by the following relationship:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_6_20
N \geq \left( \frac{2 \cdot \sqrt{P_{f}\left( 1 - P_{f} \right)}}{\alpha \cdot P_{f}} \right)^{2} + 1
```
````

With a first estimate for the required number of simulations and information about the average computation time per iteration, it may be decided whether crude Monte Carlo is a feasible approach for the considered limit state function. For some problems, the numerical effort may be too high, especially if the probability of failure is very small. In this case, it is recommended to either consider a FORM/SORM analysis (provided that the conditions of use are fulfilled, as discussed in {numref}`method_6_5_4_2` above), or to follow a Monte Carlo approach with variance reduction techniques to reduce the numerical effort required by the analysis.

The methods most commonly applied for variance reduction in the context of structural reliability estimation are importance sampling, directional simulation, Latin Hypercube sampling and conditional expectation techniques, see e.g. **\[BR13\],\[BR14\],\[BR20\]**. Of particular interest for reliability problems is the importance sampling technique, which ensures that a large share of the Monte Carlo simulations will lie in the failure region.

Another strength of the Monte Carlo approach, when compared to FORM/SORM analysis, is that it is in principle applicable also when the analytic representation of the limit state function is associated with difficulties, e.g. for limit state functions that are not differentiable or when the failure domain is defined only implicitly with the aid of a numerical model. However, the computational effort of a direct sampling approach may be prohibitive even with the use of variance reduction techniques, especially in cases where each simulation takes hours or days to perform the numerical calculations. To overcome this problem, the Monte Carlo simulations may be run with a surrogate model derived from a preliminary set of numerical results, the Design of Experiment.

In summary, the Monte Carlo method is a viable approach for all reliability estimation problems, provided that enough simulations can be made to derive small probabilities of failure with sufficient accuracy. Variance reduction techniques and surrogate modelling can help to reduce the required numerical effort, but at the cost of a more complex approach requiring more expertise from the user. FORM/SORM methods should thus be considered as an alternative whenever computational effort and thus numerical efficiency is a concern.

(method_6_6)=
## Combined approach

The discussion of statistical methods and Physics of Failure so far has focused on the application of each of them as a standalone method, making use of probabilistic failure mechanisms modelling *or* statistical data on observed failures. Both methods have their strengths and limitations and can sometimes be difficult to apply in a specific context.

The basic idea of the combined approach is to make use of all available information, combining suitable failure data with Physics of Failure modelling to derive models that are backed both by the available statistics and by the consideration of the driving failure mechanisms and the associated contributing factors. Two different approaches are distinguished in this handbook:

-   Bayesian updating of Physics of Failure models, using relevant failure data

-   Statistical base failure rates with multiplicative factors derived from the Physics of Failure

The first approach, using Bayesian updating, uses Physics of Failure considerations to derive a prior reliability estimate, which is then updated using statistical data in order to reduce model uncertainty and to derive more realistic results. Bayesian methods for model updating are discussed more detail in {numref}`method_7` of this handbook.

The second approach uses statistical methods in order to establish a fixed "base failure rate" for a certain item or family of items, and the Physics of Failure is then used to determine acceleration factors depending on the considered design, its use conditions and the environment. Models based on this approach are provided e.g. in the FIDES guide {cite:t}`method-UTE-C80-811` , which is considered as a basis for EEE reliability prediction in this handbook ({numref}`sec_eee_handbook`), or in the NSWC handbook for Mechanical reliability prediction {cite:t}`method-NSWC-11` , see {numref}`sec_mech_handbook` for discussion.

Among the two approaches, the Bayesian approach is generally preferred from an uncertainty quantification point of view, as it allows to consistently account for the amount of information provided by statistics and Physics of Failure (e.g. sample size of the failure data used for updating, degree of belief in the failure mechanism modelling). However, the Bayesian approach may sometimes be difficult to apply in practice, e.g. if aggregated failure rate data is available from a different field of application, but the underlying data that could be used in a Bayesian framework cannot be accessed. In this case, the second approach with statistical base failure rates "tuned" to fit the specific application with the aid of multiplicative PoF factors may be the method of choice from a practical point of view.

(method_6_7)=
## Process for the development of new models

A major requirement for the sustainability of a reliability prediction methodology is the possibility to account for technological development. Apart from model updating, which is discussed in {numref}`method_7`, this also requires the development of completely new reliability prediction models when innovative technologies are used. The purpose of the present section is to provide practical guidance for the development of such new models, making use of the inputs and methods discussed above in consistency with the philosophy of this handbook.

It should be noted that the process provided herein is not restricted to innovative technologies -- It can be used for any application where the existing models cannot be used or do not cover the required scope, whether in terms of technology, use conditions, or failure root causes.

(method_6_7_1)=
### General process for all technical domains

The general process for the development of new reliability prediction models is outlined below.

-   **Define the required (or intended) modelling scope**
    Before starting the modelling, the intended scope of the new model should be clearly defined, following the principles laid out in {numref}`methodologies` of this handbook. The scope definition includes a discussion of:

    -   The technology and item specification and boundary

    -   The environmental and use conditions

    -   The intended use of the prediction model

    -   The coverage by failure root cause

-   **Search for similar applications with or without existing model**
    Information from similar applications can help to understand the problem, and may even be considered as possible modelling inputs. Examples could be data from on-ground applications for technologies that are not (yet) used in space, models for similar technologies in space applications, or approaches to cover a specific failure root cause in a different application. Searching for similarities should always go hand in hand with understanding the differences, which is essential for evaluating the usefulness of the collected information.

-   **Collect information from available data sources**
    All kinds of information that can be made available as a basis for modelling needs to be collected, considering all categories of inputs listed in {numref}`method_6_2`. The search may be widened to consider also information from relevant similar applications if the available information for the specified modelling scope is insufficient.

-   **Gain understanding of the relevant failure modes, failure mechanisms and root causes**
    Expertise from designers, test engineers and RAMS experts should be brought together to understand what are the potential and relevant failure causes, processes and symptoms. The Physics of Failure as well as the uncertainties and variabilities inherent in the design and manufacturing process need to be well understood in this step, even if this information is not explicitly used for modelling in the next steps.

-   **Select an appropriate method to do the modelling**
    Considering the available inputs, an appropriate method needs to be selected from the approaches listed in {numref}`method_6_3`. Approaches based on the Physics of Failure are generally much more useful for the consideration of innovative technologies, as they don't require waiting for sufficient data to accumulate. Combined methods can be used e.g. to profit from data collected from relevant similar applications, or to update a Physics of Failure model with limited data samples such as test data.

-   **Identify and handle knowledge gaps**
    Any knowledge gap identified during the modelling should be documented, to make clear what kind of information must be collected to improve the model. To complete the modelling in the short run, these gaps may be closed using expert judgement.

-   **Document modelling assumptions and evaluate uncertainties**
    All inputs and assumptions made during the modelling must be clearly documented, and an assessment of the model development uncertainties should be made using the checklist approach described in {numref}`method_8_3`.

-   **Anticipate future model updates**
    Once a preliminary model has been set up, the model can be updated with new information, e.g. by closing identified knowledge gaps or using methods from Bayesian statistics (see {numref}`method_7` for details).

(method_6_7_2)=
### Development of new models by technical domain

The process for the development of new reliability models is applicable to all technical domains. Additional information can be found in the dedicated chapters ({ref}`EEE chapter<sec_eee_handbook>`, {ref}`MEC chapter<sec_mech_handbook>` and {ref}`MIS chapter<sec_misc_handbook>`):

-   **EEE:** New reliability prediction models for EEE items can be derived using different inputs, as discussed in {numref}`sec_eee_handbook`. For new technologies there is no data available from IOR, making it necessary to rely on manufacturer data or dedicated testing.

-   **Mechanical:** The general process for the development of new reliability prediction models is essentially equivalent to the approach for mechanical reliability prediction presented in {numref}`sec_mech_handbook`, where a strong focus is set on the relevant failure mechanisms and the associated Physics of Failure. Bayesian methods for model updating allow the consideration of available data (e.g. test data), even with limited sample size.

-   **Miscellaneous:** {numref}`sec_misc_handbook` provides reliability models and data for commonly used miscellaneous items with sufficient IOR data. The reliability of \"non-standard model\" items, requiring a new dedicated model, can be considered based on Engineering/PoF approaches mainly based on DFMEA/PFMEA