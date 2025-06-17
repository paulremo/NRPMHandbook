<!--- Copyright (C) Matrisk GmbH 2022 -->

(misc_5_6)=
# Use of IOR data and/or tests results
As presented, a reliability model can be built based on IOR data and/or on {term}`test data <Test data>` (manufacturers, user) or combined with IOR data and/or on {term}`test data <Test data>` (manufacturers, user).

The basic failure rate or the basic probability of failure in {numref}`misc-table4-8` is based on such IOR data. The data was compiled from the IOR background in ADS & TAS fleets.

Per {term}`miscellaneous items <Miscellaneous item>`, the anomalies are collected regarding representative products ({term}`quality <Quality>`, range of operational conditions, orbit as relevant) and the failures are classified in {term}`random failures <Random failure>` ($RF$) and {term}`systematic failures <Systematic failure>` ($SF$). To avoid duplication of systematic anomalies, they are only counted once. That means that the derived failure rates include as relevant {term}`systematic failure <Systematic failure>` contribution.

The IOR data recorded are:

* Reference: {term}`miscellaneous item <Miscellaneous item>` number
* Satellite subsystem
* {term}`Miscellaneous item <Miscellaneous item>` description (e.g. Li-Ion Battery)
* Cumulated time in-orbit and/or tests for the relevant sample of items
* Number of failures
* Type of failure: random, systematic
* Point estimate: to provide a point of comparison with one-sided interval estimator
* File: the file addresses the events (failures) listed to derive a failure rate
  * Description of the event
  * Classification of the failure, either random or systematic
  * Time to failure
  * Statistical weight: representing the percentage of the items fleet at the time of the failure (number of items operational at failure time divided by the number of the items in the fleet).
  * Example: the percentage is nearly 100% for low values of $TTF$ and the percentage decreases as the $TTF$ increases in time. 


(misc_5_6_1)=
## Failure rate estimator

The basic failure rate estimation is a one-sided upper bound interval estimation, see {numref}`methods` for details.


(misc_5_6_2)=
## Proportion of failure estimator

To determine a proportion of failures based on the observation of failures within a sample of n elements (e.g. IOR data for “one-shot” device), it is possible to use:

* Point estimate
* Bayesian estimator
* Estimation by interval. 

It is recommended to use the interval estimate, see Chapter 6 {numref}`methodologies` for details.


(misc_5_6_3)=
## Gamma Bayesian estimator

The failure rate is no longer considered as a real but as a random variable $\Delta$.

In the case of the exponential distribution, a natural prior distribution is the Gamma distribution (conjugate of the exponential distribution), see {numref}`methods` for details.

The {term}`Bayesian inference <Bayesian inference>` estimator is defined as the expected value of the random variable $\Delta$ knowing that a failure has been observed at $t_{1}$, $t_{2}$ … $t_{n}$). Then, with a sample encompassing $n$ items and $n$ associated times to failure:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_5_9
E(\Delta | T_{1} = t_{1}, T_{2} = t_{2}, ..., T_{n} = t_{n}) = \frac{\alpha + n}{\beta + \sum_{i} (t_{i})} = \frac{\frac{\alpha}{n}}{\frac{\beta}{n} + \frac{\sum_{i} (t_{i})}{n}}
```
````


The parameters of the gamma prior distribution are selected as per the knowledge of the item.

Let us assume for a certain {term}`miscellaneous item <Miscellaneous item>` that a basic failure rate is calculated.

Let us assume that there are some items already in flight with a certain cumulated time, not sufficient enough to provide a result in the order of magnitude of the specification (without prior knowledge).

Let us consider $\lambda_{0}$ as a first estimation of the failure rate (e.g. provided by Current document or existing model).

Let us consider a Gamma ($\alpha$, $\beta$) distribution assumed as “prior” distribution of the failure rate $\Delta$.

It is necessary to provide rules for determining the two parameters $\alpha$ and $\beta$ with two equations.

We determine $\alpha$ so that the expected value of the gamma distribution is $\lambda_{0}$.

````{admonition} Equation
:class: equation
```{math}
:label: Equation_5_10
E(\Delta) = \frac{\alpha}{\beta} = \lambda_{0}
```
````

This provides a first equation with $\alpha$ and $\beta$.
A second equation is provided by the {term}`level of confidence <Level of confidence>` "$a$" attributed to the value $\lambda_{0}$:

````{admonition} Equation
:class: equation
```{math}
:label: Equation_5_11
F_{\Delta}(\lambda_{0}) = P(\Delta \leq \lambda_{0}) = \int_{0}^{\lambda_{0}} \frac{\beta^{\alpha} e^{- \lambda \beta} \lambda^{\alpha - 1}}{\Gamma (\alpha)} = \frac{1}{\Gamma (\alpha)} \gamma (\alpha, \alpha) = a
```
````


Ideally, the prior should be defined based on two different estimates for the failure rate $\lambda_{0}$, one representing an “average” value (point estimate, entering Eq. {eq}`Equation_5_10`) and one representing an estimate at a given {term}`level of confidence <Level of confidence>` (e.g. conservative estimate, entering Eq. {eq}`Equation_5_11`).

Once $\alpha$ and $\beta$ are determined it allows to derive the {term}`Bayesian inference <Bayesian inference>` estimator with n being the number of failures and $\sum t_{i}$ the cumulated time.
