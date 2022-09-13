<!--- Copyright (C) Matrisk GmbH 2022 -->

(method_7)=
# Bayesian methods for reliability prediction modelling

(method_7_1)= 
## The Bayes rule and its application for estimation and model updating

Bayesian methods for reliability prediction can be used in two different ways:

-   As an approach for model updating when new data becomes available (statistical or combined approach making use of different sources of information).

-   As an estimation method for model development based on statistical data (pure statistical approach making use of a single data sample without prior information)

Both applications make use of the same theorem, called Bayes rule. Before explaining the two different uses, the basic principle of Bayesian statistics is briefly introduced mathematically for the case of a univariate random variable. Other applications of the Bayes rule are discussed later in dedicated subsections.

**Bayes theorem in a reliability context**

Consider a random variable $X$ with {term}`probability density function <Probability density function>` $f_{X}\left( x \right)$. If $\mathbf{\theta}$ denotes a vector of distribution parameters, the density function of $X$ is written as $f_{X}\left( x,\mathbf{\theta} \right)$. If the parameters are uncertain, the density can be considered as a conditional density function, i.e. $f_{X}\left( x\left| \mathbf{\theta} \right.\  \right)$. The vector $\mathbf{\theta}$ now denotes a realisation of the random vector $\mathbf{\Theta}$ and the initial {term}`probability density function <Probability density function>` for the parameters, ${f'}_{\mathbf{\Theta}}\left( \mathbf{\theta} \right)$, is denoted the *prior density function*.

Now let us assume that $n$ independent observations (realisations) of the random variable $X$ are available that can be used to update the initial parameter estimate. The data sample is stored in a vector $\widehat{\mathbf{x}} = \left( {\widehat{x}}_{1},\ldots,{\widehat{x}}_{n} \right)^{T}$. The new (updated) density function ${f''}_{\mathbf{\Theta}}\left( \mathbf{\theta}\left| \widehat{\mathbf{x}} \right.\  \right)$ of the uncertain parameters $\mathbf{\Theta}$ given the observations $\widehat{\mathbf{x}}$ is denoted as *posterior density function*. From Bayes' rule it may be derived as follows:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_21
f_{\mathbf{\Theta}}^{''}\left( \mathbf{\theta} \middle| \widehat{\mathbf{x}} \right) = \frac{L\left( \widehat{\mathbf{x}} \middle| \mathbf{\theta} \right) \cdot f_{\mathbf{\Theta}}^{'}\left( \mathbf{\theta} \right)}{\int_{\text{DΘ}}^{}{L\left( \widehat{\mathbf{x}} \middle| \mathbf{\theta} \right)}{\cdot f}_{\mathbf{\Theta}}^{'}\left( \mathbf{\theta} \right)d\mathbf{\theta}}
```
````

where $L\left( \widehat{\mathbf{x}}\left| \mathbf{\theta} \right.\  \right) = \prod_{i = 1}^{n}{f_{X}\left( {\widehat{x}}_{i}\left| \mathbf{\theta} \right.\  \right)}$ is the likelihood of the given observations assuming that the distribution parameters are equal to $\mathbf{\theta}$. The denominator of Eq. {eq}`Equation_method_7_21` is a normalizing constant, which ensures that the posterior density function ${f''}_{\mathbf{\Theta}}\left( \mathbf{\theta}\left| \widehat{\mathbf{x}} \right.\  \right)$ integrates to unity. To understand Bayesian updating it is sufficient to know that ${f''}_{\mathbf{\Theta}}\left( \mathbf{\theta}\left| \widehat{\mathbf{x}} \right.\  \right) \propto L\left( \widehat{\mathbf{x}}\left| \mathbf{\theta} \right.\  \right){f'}_{\mathbf{\Theta}}\left( \mathbf{\theta} \right)$.

In a reliability context, $X$ may be for example the random time to failure of an item with a failure rate $\mathbf{\theta}\mathbf{=}\lambda$, assumed to be constant in time. The conditional density function $f_{X}\left( x\left| \lambda \right.\  \right)$ (also called "sampling distribution") is in this case defined by the Exponential distribution, conditional on the failure rate $\lambda$. The prior distribution for the failure rate, ${f'}_{\Lambda}\left( \lambda \right)$, may be derived e.g. from a handbook estimate, and can be updated with new time-to-failure data.

(method_7_1_1)=
### Bayesian methods for model updating

The full potential of Bayesian analysis can be achieved by using an informative prior which already contains some information on the required model parameters. Bayesian updating in this context may be seen as finding a compromise between prior knowledge and new data, weighted with the confidence we can have in both sources of information. The concept is of interest especially in situations where prior knowledge is available and/or the new data sample is not large enough to allow for a pure statistical analysis. For large data samples, the influence of the prior vanishes and the Bayesian estimate converges to the frequentist (e.g. Maximum Likelihood) estimate.

An illustrative example with simulated data is given in {numref}`method_figure7_5`. The grey solid curve shows the prior distribution of a constant (i.e. time invariant), but unknown part failure rate $\lambda$, modelled as a random variable $\Lambda$. The prior represents a preliminary estimate, which may have been derived e.g. based on handbook data from a different application. The prior is now updated with artificial (simulated) data for the random time to failure, assuming a true value of $\lambda = 10^{- 4}h^{- 1}$. The posterior distribution for $\lambda$ (dashed curves) is derived by updating the prior with the simulated data. With growing sample size $n$ (in the example defined as the number of items with observed failure times), the posterior distribution slowly approaches the true value, but also small data samples can already improve the estimate.

```{figure} pictures/method_figure7_5.png
---
width: 600px
name: method_figure7_5
---
Bayesian updating of a prior estimate for a constant failure rate $\lambda$ with simulated data for the random time to failure, assuming a true value of $\lambda = 10^{- 4}h^{- 1}$.
```

(method_7_1_2)=
### Bayes rule as estimation method

As has been discussed in {numref}`method_6_4`, Bayesian statistics can also be used as a method for the estimation of model parameters from statistical data, without consideration of prior knowledge. When compared correctly, the point estimates derived from a Bayesian analysis are generally equivalent to the Maximum Likelihood Method, which takes basis in the same Likelihood function $L\left( \widehat{\mathbf{x}}\left| \mathbf{\theta} \right.\  \right)$ as used by Eq. {eq}`Equation_method_7_21`. However, the uncertainty quantification provided by Bayes rule is more consistent than the Normal approximation used by the Maximum Likelihood Method.

To apply Bayesian methods for parameter estimation, the prior distribution ${f'}_{\mathbf{\Theta}}\left( \mathbf{\theta} \right)$ should be selected as a non-informative prior, see {numref}`method_7_4_2` for details. Examples for Bayesian updating with non-informative priors can be found in {numref}`method_7_5`.

(method_7_2)=
## Applying Bayesian methods in practice

Applying Bayesian updating of a reliability estimate with new statistical data generally requires the following steps:

-   **Formulation of the likelihood**
    
    As a first step, a distribution type representing the observed data must be selected, e.g. Exponential, Weibull or another Time-to-failure distribution if the data contains observations of the time to failure (or number of cycles to failure) during several tests. The choice of the sampling distribution and the definition of the likelihood is discussed in {numref}`method_7_3`. In the likelihood formulation it also has to be considered if the data set is censored and if the distribution is truncated.

-   **Formulation of the prior distribution**
    
    In a Bayesian analysis, one or several parameters of the sampling distribution are treated as random variables. The prior distribution should represent the available prior knowledge on these parameters, leading to an informative prior. A non-informative prior can be used if no prior information is available and the Bayesian analysis is used as an estimation method. Two steps are required to define the prior distribution

    -   Selection of the distribution type, e.g. considering the natural constraints of the distribution parameters. A conjugate prior may be selected to simplify the analysis

    -   Parameter estimation for the selected prior distribution, e.g. based on alternative data sets, handbook data, {term}`Physics of Failure <Physics of failure>` analyses or expert judgement.

        The general principles of the prior definition are discussed in {numref}`method_7_4`, with some more practical guidance for specific applications provided in {numref}`method_7_6`.

-   **Bayesian updating with new data:**
    
    Updating the prior with data leads to a new, posterior distribution for the parameters of the sampling distribution.

    -   With a conjugate prior, analytic formulas are available to perform this step

    -   Otherwise, Markov Chain Monte Carlo (MCMC) methods can be used.

The final outcome of a Bayesian analysis is the posterior distribution of the model parameters, which may be naturally interpreted to provide credibility ranges for the parameters of the sampling distribution, e.g. for the failure rate in an Exponential model.

(method_7_3)=
## Likelihood formulation

In Bayes rule (Eq. {eq}`Equation_method_7_21`), the likelihood $L\left( \widehat{\mathbf{x}}\left| \mathbf{\theta} \right.\  \right) = \prod_{i = 1}^{n}{f_{X}\left( {\widehat{x}}_{i}\left| \mathbf{\theta} \right.\  \right)}$ contains the information provided by the data sample that is used for updating. The formulation of the likelihood is based on the sampling distribution $f_{X}\left( x\left| \mathbf{\theta} \right.\  \right)$, which defines also the model parameters $\mathbf{\theta}$ to be updated. This is why the consideration of the sampling distribution is always the first step in a Bayesian analysis.

(method_7_3_1)=
### Distributional model for the sampling distribution

The sampling distribution is the distribution of the random variable that can be observed, i.e. the variable for which data is available for model estimation or updating. In a reliability context, this can be the time to failure or number of failures observed, but also other observable characteristics that are modelled probabilistically, e.g. the strength of a material or item w.r.t. imposed stresses, which can be measured in tests.

In a Bayesian analysis, the sampling distribution is needed for the formulation of the likelihood, which can in the simplest case -- for a continuous random variable $X$ without truncation or data censoring -- be defined as follows:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_22
L\left( \widehat{\mathbf{x}}\left| \mathbf{\theta} \right.\  \right) = \prod_{i = 1}^{n}{f_{X}\left( {\widehat{x}}_{i}\left| \mathbf{\theta} \right.\  \right)}
```
````

The selection of an appropriate distributional model for the sampling distribution $f_{X}\left( x\left| \mathbf{\theta} \right.\  \right)$ follows the same principles as in the case of model development using {term}`statistical methods <Statistical method>` ({numref}`method_6_4_2`), or for the basic variable modelling required for probabilistic {term}`Physics of Failure <Physics of failure>` methods ({numref}`method_6_5_2`). A formal comparison of different competing distribution types can be achieved with the aid of Bayesian information criteria {cite:p}`method-Gelman2013`.

In addition to the selection of a distribution type, aspects of truncation and censoring may have to be considered, as will be discussed below.

(method_7_3_2)=
### Censoring and truncation

For the correct formulation of the likelihood, it is important to distinguish truncated sampling distributions from censored data samples.

-   **Truncation** applies when observations are in principle not possible below or above a certain threshold, but the selected distribution type supports values below or above this threshold. To improve the modelling and avoid unexpected results, the distribution can be truncated by "cutting off" the lower or upper tail, and renormalizing to ensure that the {term}`probability density function <Probability density function>` integrates to unity. A classic example is the truncated Normal distribution, which ensures that the distribution does not support negative values.

-   **Censoring** is considered when values below (right censored) or above (left censored) a specific threshold are theoretically possible, but could not be observed in the data used for updating. To give an example, data on observed failures may include both failed items (with observed time to failure), and items operating without failure until the end of the observation period. These "successes" represent censored data points, i.e. the exact time to failure is unknown, but it is known that it must be larger than the censoring point. Also interval censoring is possible. In this case, the specific value is not observed but it is known that the failure time lies within a given interval.

It should be noted that even if the data set is not censored, it can be necessary to work with "artificial" censoring, e.g. if the wear out phase is modelled and only failures after a certain number of operating hours are of interest. Similar considerations hold for basic variable modelling in a stress/strength approach, where the model needs to be precise especially in the lower or upper tail of the distribution. Thus, censoring needs to be applied if the focus is on a specific part of the distribution or the bath tub curve.

Note that the definitions of truncation and censoring given above are different to the terminology used to describe reliability tests, e.g. a time truncated test will lead to a censored data sample.

Censoring and/or Truncation need to be considered in the formulation of the likelihood function, see {numref}`method_figure7_6` and the general formulas given below. Bayesian updating with closed-form solutions using conjugate priors ({numref}`method_7_5_1`) is generally possible only with likelihoods that are neither truncated nor censored. Two important exceptions are the time-constant failure rate model (i.e. Exponential) and the Binomial distribution with constant probability of failure in each demand, which can be updated analytically also with censored data containing information on the number of failures and the cumulated hours or demands.

The likelihood $L$ for a right censored data set is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_23
L \propto \ \prod_{i = 1}^{n}{f\left( \widehat{\mathbf{x}_{\mathbf{i}}}|\theta \right) \cdot \prod_{j = 1}^{m}\left( 1 - F\left( \widehat{\mathbf{x}_{\mathbf{\text{up}}}}|\theta \right) \right)}
```
````

Where $\widehat{\mathbf{x}_{\mathbf{\text{up}}}}$ is the upper censoring point, $\theta$ represents the distribution parameters, $\widehat{\mathbf{x}_{\mathbf{i}}}$ are the observed failures, $f\left( . \right)$ is the probability distribution function and $F\left( . \right)$ is the {term}`probability density function <Probability density function>`. The likelihood formulation for left censoring is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_24
L \propto \ \prod_{i = 1}^{n}{f\left( \widehat{\mathbf{x}_{\mathbf{i}}}|\theta \right) \cdot \prod_{j = 1}^{m}\left( F\left( \widehat{\mathbf{x}_{\mathbf{\text{iow}}}}|\theta \right) \right)}
```
````

Where $\widehat{\mathbf{x}_{\mathbf{\text{iow}}}}$ is the lower censoring point. The likelihood formulation for interval censoring is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_25
L \propto \ \prod_{j = 1}^{m}\left( F\left( \widehat{\mathbf{x}_{\mathbf{up,i}}}|\theta \right) - F\left( \widehat{\mathbf{x}_{\mathbf{low,i}}}|\theta \right) \right)
```
````

For the situation where the likelihood needs to be truncated, right, left or interval truncation is in principle possible. The Likelihood in the case of right truncation is given by:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_26
L \propto \ \prod_{i = 1}^{n}\frac{f\left( \widehat{\mathbf{x}_{\mathbf{i}}}|\theta \right)}{F\left( x_{\text{up}}|\theta \right)}
```
````

The likelihood formulation in the case of left truncation is

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_27
L \propto \ \prod_{i = 1}^{n}\frac{f\left( \widehat{\mathbf{x}_{\mathbf{i}}}|\theta \right)}{1 - F\left( x_{\text{low}}|\theta \right)}
```
````

```{figure} pictures/method_figure7_6.png
---
width: 600px
name: method_figure7_6
---
Guidance on the selection of a censored and or truncated likelihood.
```

(method_7_4)=
## Guidance on the prior selection

In a Bayesian analysis, the distribution parameters $\mathbf{\theta}$ of the sampling distribution -- e.g. the failure rate in the case of an Exponential time-to-failure model -- are considered as random variables. The prior distribution represents the available knowledge for each model parameter, prior to the consideration of the new data set used for updating.

Bayesian methods can be used with informative or non-informative priors. Guidance on the principle selection of a prior is provided in {numref}`method_figure7_7`. In general, if an existing model is available and the aim is to update this prior, then the prior is called informative. If no data-based prior is available then it should be checked whether other information, like engineering knowledge or handbook data, is available and can be used to build an informative prior. Only in the case that no information is available except for the new data, a non-informative prior should be used.

```{figure} pictures/method_figure7_7.png
---
width: 600px
name: method_figure7_7
---
Guidance on the selection of an appropriate prior.
```

It should be noted that for informative priors, the information content is expressed by the dispersion of the prior distribution: A narrow prior distribution with small coefficient of variation will have a strong effect on the results of a Bayesian analysis and is only appropriate if sufficient information is available for the prior formulation. A wide prior distribution, in contrast, will have a small impact especially in the case of large data samples used for updating. This behaviour is sometimes used to formulate a so-called "vague" prior distribution with very large scatter, which can be considered non-informative for practical purposes, having negligible impact on the results.

(method_7_4_1)=
### Informative prior definition

As for the sampling distribution, the definition of an informative prior first requires the selection of a distributional model. In the special case of a prior that has been defined based on statistical analysis for a previous and independent data sample, the distribution of the prior may be defined based on the theory of estimation. The chi square distribution for constant failure rate estimates (representing a special case of the gamma distribution) is a well-known example in a reliability context.

The selection of a prior based on other types of information such as engineering or expert knowledge is less straight-forward, requiring additional considerations. The difficulty is that the parameters of the sampling distribution are generally not observable, making it hard to define objective criteria for the selection of the prior distribution.

A possible starting point is to consider some basic characteristics of the parameters to be modelled:

-   What is the required support of the distribution (e.g. variance parameters must be positive)?

-   Is the parameter expected to have a symmetric or asymmetric probability distribution?

Answers to these questions allow a first selection of candidate probability distribution families, which can then be used as a starting point for the expert elicitation process described in {numref}`method_7_6_3`.

A further rationale for selecting a distribution family is mathematical convenience, as some distribution families are significantly easier to handle analytically (see {numref}`method_7_5_1` for details). However, the goal of the model is always to provide the best possible mathematical representation of a phenomenon or process and mathematical convenience is only a secondary goal.

Once a suitable distribution family (or candidate families) has been identified, the parameters of the prior distribution, also called hyper-parameters, need to be determined. Different sources of information can be used depending on context, as discussed e.g. in {numref}`method_7_6`.

(method_7_4_2)=
### Non-informative prior selection

A non-informative or vague prior provides no or very little (negligible) information on the parameters, whose posterior distribution will thus be determined mainly by the data. It is important to understand that despite their name, non-informative priors will still influence the shape of a posterior, and appropriate care must be exercised when defining a prior distribution.

Non-informative priors can be selected based on the following principles:

-   In case that only one parameter needs to be estimated, a Jeffreys prior can be used {cite:p}`method-jeffreys`.

-   If the problem is multivariate, then a reference prior (vague prior) can be used {cite:p}`method-Gelman2013`.

An example for the use of a Jeffreys prior for Bayesian updating in the case of an Exponential time-to-failure model is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_28
{f'}_{\Theta}\left( \theta \right) \propto \frac{1}{\lambda}
```
````

The reference prior is used e.g. for the Weibull distribution:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_29
{f'}_{\Theta}\left( \theta \right) \propto \frac{1}{\alpha \beta}
```
````

For practical purposes, it is also an option to define a vague prior e.g. as a flat uniform prior or a normal prior with large coefficient of variation. The effect of the prior model (e.g. the upper and lower bound assumed for the uniform prior) on the results should be checked to avoid misleading conclusions.

(method_7_5)=
## Methods for Bayesian updating with new data

Once the prior has been fully defined, the posterior distribution of the model parameter $\theta$ is derived by updating the corresponding hyperparameters with new data. The posterior distribution of $\theta$ can be used together with the sampling distribution to derive reliability estimates at various levels of confidence.

In the following, Bayesian approaches for updating prior probabilistic models with new information are discussed, considering both analytic and numerical approaches. In {numref}`method_figure7_8` guidance is provided on the selection of the updating method. If the failure rate or failure probability is constant (i.e. Exponential or Binomial distribution) and a conjugate prior exists, the analytical approach can be used. For time dependent failure rates, the analytical approach can only be applied if there is no need to consider censored data or truncation and if a conjugate prior exists.

```{figure} pictures/method_figure7_8.png
---
width: 600px
name: method_figure7_8
---
Relation between different types of reliability prediction methods and the available inputs.
```

(method_7_5_1)=
### Analytical approach with conjugate prior

In general, when applying Bayes theorem for updating, the prior distribution and the posterior distribution of the random hyper-parameters (e.g. the failure rate) do not have the same distribution type. A prior that does not change the distribution type from prior to posterior is called a conjugate prior; an analytical solution is possible if a conjugate prior exists {cite:p}`method-Fink1997ACO`. Conjugate priors are available for several distributions, see {numref}`method-table7-2` for some models that are of relevance in reliability applications. The use of the table can be explained as followed:

-   **Sampling distribution**\
    This is the distribution of the observable variable for which data is available for updating (e.g. time to failure), see {numref}`method_7_3`. The analytic formulas in {numref}`method-table7-2` are only applicable if the likelihood is formulated without censoring and truncation.

-   **Conjugate prior**\
    The conjugate prior defines the prior distribution of the sampling distribution parameters which must be selected for analytic updating. Note that for two-parameter models like Weibull, only one parameter can be updated and the other one is assumed to be deterministic. Bayesian updating of both model parameters requires a numerical approach.

-   **Prior parameter interpretation**\
    This column provides an (alternative) interpretation of the prior and posterior hyperparameters which can be helpful e.g. to derive the parameters of the prior distribution.

-   **Posterior hyperparameters**\
    Based on the prior hyperparameters (denoted with a single prime) and the observations $\widehat{\mathbf{x}} = \left\lbrack {\widehat{x}}_{1},\ {\widehat{x}}_{2},\ldots,{\widehat{x}}_{n} \right\rbrack$ in the new dataset, the prior distribution is updated using the analytic formulas provided in this column. In conjugate analysis, the posterior distribution of the random model parameter is of the same distribution type as the prior, but with updated hyperparameters (denoted with double prime).

-   **Posterior mean\
    **The posterior mean of the uncertain model parameter can be derived from the conjugate prior distribution with posterior hyperparameters. It is a suitable point estimate for the considered model parameter if realistic predictions are aimed at.

{numref}`method-table7-2` can be used only if a complete (uncensored) time-to-failure data set is available for updating. For the two time-constant models, Exponential and Binomial, an alternative formulation is provided in {numref}`method-table7-3`, allowing to perform the updating with new information for the number of observed failures and the cumulated hours (or number of demands in case of the Binomial model). For the remaining models in {numref}`method-table7-2`, censoring needs to be considered with numerical MCMC methods, using the likelihood formulations discussed in {numref}`method_7_3_2`.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method-table7-2')" placeholder="Search table...">

```{list-table} Conjugate priors for various standard life distributions, for updating with complete (uncensored) time-to-failure data (see Annex II.A for parametrization).
:name: method-table7-2
:header-rows: 1
:widths: 20 20 20 20 20

*   - Sampling distribution
    - Conjugate prior for unknown parameter
    - Interpretation of hyperparameters
    - Posterior hyperparameters after updating with data $\widehat{\mathbf{x}}$  
    - Posterior mean
*   - ***Exponential*** Failure rate $\lambda_{X}$  
    - $\lambda_{X}\sim\text{Gamma}\left( \alpha',\beta' \right)$
    - $\alpha$ time-to-failure observations that sum to $\beta$ cumulated hours
    - $$\alpha'' = \alpha' + n, \mu_{\lambda_{X}}^{''} = \frac{\alpha''}{\beta''}$$ 
    - $\mu_{\lambda_{X}}^{''} = \frac{\alpha''}{\beta''}$
*   - ***Gamma*** Rate $\beta_{X}$, Shape $\alpha_{X}$
    - $\beta_{X}\sim\text{Gamma}\left( \alpha',\beta' \right)$
    - $\alpha$ time-to-failure observations that sum to $\beta$ cumulated hours 
    - $$\alpha'' = \alpha' + n \cdot \alpha_{X}, \beta'' = \beta' + \sum_{i = 1}^{n}{\widehat{x}}_{i}$$
    - $\mu_{\beta_{X}}^{''} = \frac{\alpha''}{\beta''}$
*   - ***Normal*** Mean $\mu_{X}$, Standard dev. $\sigma_{X}$ 
    - $\mu_{X}\sim\text{Normal}\left( \mu',\sigma' \right)$, $\sigma_{X}$ assumed to be known
    - Sample mean $\mu$ of time-to-failure data, standard deviation of sample mean $\sigma$ 
    - $$\mu'' = \left( \sigma'' \right)^{2} \cdot \left( \frac{\mu'}{\sigma'^{2}} + \frac{\sum_{i = 1}^{n}{\widehat{x}}_{i}}{\sigma_{X}^{2}} \right), \sigma'' = \left( \frac{1}{\sigma'^{2}} + \frac{n}{\sigma_{X}^{2}} \right)^{- \frac{1}{2}}$$
    - $\mu_{\mu_{X}}^{''} = \mu''$
*   - ***Lognormal*** Mean $\mu_{X}$, Standard dev. $\sigma_{X}$
    - $\mu_{X}\sim\text{Normal}\left( \mu',\sigma' \right)$, $\sigma_{X}$ assumed to be known 
    - Sample mean $\mu$ of logarithmic data, standard deviation of sample mean $\sigma$
    - $\mu'' = {\sigma''}^{2} \cdot \left( \frac{\mu'}{\sigma'^{2}} + \frac{\sum_{i = 1}^{n}{\ln{\widehat{x}}_{i}}}{\sigma_{X}^{2}} \right), \sigma'' = \left( \frac{1}{\sigma'^{2}} + \frac{n}{\sigma_{X}^{2}} \right)^{- \frac{1}{2}}$$                                                  
    - $\mu_{\mu_{X}}^{''} = \mu''$
*   - ***Weibull*** Scale $\alpha_{X}$, Shape $\beta_{X}$
    - $\frac{1}{{\alpha_{X}}^{\beta_{X}}}\sim\text{Gamma}\left( \alpha',\beta' \right)$, $\beta_{X}$ assumed to be known
    - $\text{α\ }$observations with sum $\beta$ of the $\beta_{X}$th power of each observation
    - $$\alpha'' = \alpha' + n, \beta' = \beta' + \sum_{i = 1}^{n}{\widehat{x}}_{i}^{\beta_{X}}$$
    - $\mu_{\alpha_{X}}^{''}$ can be estimated numerically
*   - ***Geometric*** Probability $p_{X}$  
    - $p_{X}\sim\text{Beta}\left( \alpha',\beta' \right)$
    - $\alpha$ demands-to failure observations that sum to $\beta$ total demands 
    - $$\alpha'' = \alpha' + n, \beta'' = \beta' + \sum_{i = 1}^{n}{\widehat{x}}_{i}$$
    - $\mu_{p_{X}}^{''} = \frac{\alpha''}{\alpha^{''} + \beta''}$
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method-table7-2')" placeholder="Search table...">

```{list-table} Conjugate priors for time-constant failure rate or failure probability models, for updating with censored and/or aggregated failure data (see Annex II.A for parametrization).
:name: method-table7-3
:header-rows: 1
:widths: 20 20 20 20 20

*   - Sampling distribution
    - Conjugate prior for unknown parameter
    - Interpretation of hyperparameters
    - Posterior after updating with $n_{f}$
    - Posterior mean
*   - ***Exponential*** Failure rate $\lambda_{X}$
    - $$\lambda_{X}\sim\text{Gamma}\left( \alpha',\beta' \right)$$
    - $\alpha$ failures in $\beta$ cumulated hours
    - $$\alpha'' = \alpha'' + n_{f}, \beta'' = \beta'' + T$$
    - $$\mu_{\lambda_{X}}^{''} = \frac{\alpha''}{\beta''}$$
*   - ***Binomial*** Probability $p_{X}$
    - $$p_{X}\sim\text{Beta}\left( \alpha',\beta' \right)$$
    - $\alpha$ failures versus $\beta$ successes
    - $$\alpha'' = \alpha' + n_{f}, \beta^{''} = \beta^{'} - N - n_{f}$$
    - $$\mu_{p_{X}}^{''} = \frac{\alpha''}{\alpha^{''} + \beta''}$$
```

In the remainder of this section, two examples are provided for the use of {numref}`method-table7-2`, considering the Exponential distribution case.

**Example: Analytical Bayes approach for the Exponential distribution**

In {numref}`method-table7-4` an artificial data set is provided on component level time-to-failure data. Here it is assumed that all items have been operated until failure. In practical applications in many cases also the operational hours for the parts which did not fail is available. If this is the case a censored approach should be applied and the equations provided in {numref}`method-table7-3` should be used.

```{list-table} Example data set with observed failures at certain operation hours.
:name: method-table7-4
:header-rows: 1
:widths: 50 50

*   - Data
    - Failure hour
*   - 1
    - 19638
*   - 2
    - 67068
*   - 3
    - 129493
*   - 4
    - 148461
*   - 5
    - 116517
*   - 6
    - 6210
*   - 7
    - 1698
*   - 8
    - 21674
*   - 9
    - 121452
*   - 10
    - 45599
```

From the data set provided in {numref}`method-table7-4` the distribution of the failure rate can be calculated using the conjugate prior distribution.

The parameters of the posterior gamma distribution for the failure rate $\lambda$ are (see {numref}`method-table7-2`):

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_30
\begin{matrix} \beta'' = \sum_{i = 1}^{n}{t_{i} = 677810} \\   \alpha^{''} = n = 10 \\\end{matrix}
```
````

Assuming that a vague (improper) prior is used for the gamma distribution:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_31
\begin{matrix}\beta' = 0 \\ \alpha^{'} = 0 \\ \end{matrix}
```
````

With these parameters the posterior distribution is fully defined. In {numref}`method_figure7_9` the posterior distribution of the failure rate for this example is shown.

The posterior mean and standard deviation of the failure rate are:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_32
\begin{matrix}{\mu''}_{\lambda} = \frac{\alpha''}{\beta''} = \frac{10}{\ 677810} = 1.47\  \cdot 10^{- 5} \\                                
  {\sigma''}_{\lambda} = \frac{\sqrt{\alpha''}}{\beta''} = \frac{\sqrt{n}}{\sum_{i = 1}^{n}t_{i}} = 4.66\  \cdot 10^{- 6} \\   
  \end{matrix}
```
````

```{figure} pictures/method_figure7_9.png
---
width: 600px
name: method_figure7_9
---
Posterior probability distribution for the estimated failure rate using a conjugate prior distribution.
```

**Example: Analytical Bayes approach for the Exponential distribution with zero failures**

In practice sometimes no failure event is observed but an estimate of the failure rate still needs to be made. This is in principle possible if operational data is available. Assuming a constant failure rate, the random time to failure is exponential distributed. We are looking for the probability that no failure events have occurred until the moment of the prediction, which can be derived from the Poisson process. The probability that no event occurred during the cumulated hours $T$ is:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_33
\Pr\left( 0,T \right) = 1 - e^{- \lambda T}
```
````

And thus,

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_34
\Pr\left( 0,\sum_{i = 1}^{n}t_{i} \right) = {1 - e}^{- \lambda\sum_{i = 1}^{n}t_{i}}
```
````

The (prior) probability that no event has yet occurred is unknown. If the probability is unknown, it can be represented by a uniform distribution, leading to the following non-informative prior.

$$f\left( p \right) = 1\ \ \forall\ \ \ 0 \leq p < 1$$

This assumption results in

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_35
\lambda_{p} = \frac{- ln\left( 1 - \int_{0}^{p}{f\left( p \right)\text{dp}} \right)}{\sum_{i = 1}^{n}t_{i}}
```
````

The failure rate as a function of the operation hours in the case no failure event was observed is shown in {numref}`method_figure7_10`.

```{figure} pictures/method_figure7_10.png
---
width: 600px
name: method_figure7_10
---
Estimated failure rate as a function of the operation hours in the case no failure event was observed, using a Bayesian approach with non-informative prior.
```

The average failure rate can be estimated by

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_36
E\left\lbrack \lambda \right\rbrack = \int_{0}^{1}\frac{- ln\left( 1 - \int_{0}^{p}{f\left( p \right)\text{dp}} \right)}{\sum_{i = 1}^{n}t_{i}}dp = \frac{1}{\sum_{i = 1}^{n}t_{i}}
```
````

This means that in average one failure is expected to be observed during the cumulated hours.

The number of failures corresponding to a median failure rate is calculated by

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_37
\lambda_{0.5} = \int_{0}^{1}\frac{- ln\left( 1 - \int_{0}^{0.5}{f\left( p \right)\text{dp}} \right)}{\sum_{i = 1}^{n}t_{i}}dp = \frac{- ln(0.5)}{\sum_{i = 1}^{n}t_{i}}
```
````

From this equation it is obvious that the failure rate decreases with the number of operating hours without failures.

Another possibility is the estimation of the failure rate using the Chi-Square distribution. The Chi-Square distribution is a special case of the gamma distribution, which represents the conjugate prior distribution of the failure rate.

Using the Chi-Square distribution $\chi_{f,q}^{2}$ with $f$ degrees of freedom, the $q$-quantiles of the uncertain failure rate $\lambda$ can be determined, see also Eq. {eq}`Equation_method_6_15` in {numref}`method_6_4_3_1`. For time truncated records, the following is valid:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_38
\lambda = \frac{\chi_{2\left( n_{f} + 1 \right),1 - \alpha}^{2}}{2 \cdot \sum_{i = 1}^{n}t_{i}}
```
````

Where $n_{f}$ denotes the number of failure events, $\alpha$ the {term}`level of confidence <Level of confidence>` and $n$ the number of items observed (with or without failure). The equivalent number of failure events $n_{\text{equi},1 - \alpha}$ at a certain confidence level can be estimated to:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_39
n_{f,equi,1 - \alpha} = \frac{\chi_{2\left( n_{f} + 1 \right),1 - \alpha}^{2}}{2}
```
````

The equivalent number of failure events is the expected number of failures for a certain confidence level during the cumulated hours $\sum_{i = 1}^{n}t_{i}$. This might not be an integer. If the confidence level is set to 50% (corresponding to the median) and no failure is observed so far, then the equivalent number of failures are:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_40
n_{f,equi,1 - \alpha} = \frac{\chi_{2\left( 0 + 1 \right),1 - 0.5}^{2}}{2} = \frac{1.3863}{2} = 0.6931 = - ln(\alpha) = - ln(0.5)
```
````

This corresponds to the median of the posterior distribution. More generally, the equation can be formulated as (still under the assumption that no failure has been observed, i.e. $n_{f} = 0)$:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_41
n_{equi,1 - \alpha} = \frac{\chi_{2\left( 0 + 1 \right),1 - \alpha}^{2}}{2} = - ln(\alpha)
```
````

The Chi-Square estimator is thus for the case that no observation is made equal to the approach with the Bayesian approach assuming a Poisson process and a non-informative prior.

(method_7_5_2)=
### Numerical approach using Markov Chain Monte Carlo Methods

In case where no analytical solution is available, numerical approaches can be used. In the Bayesian rule (Eq. {eq}`Equation_method_7_21` in {numref}`method_7_1` the likelihood function and the prior density function are known and can be easily calculated. For calculating the posterior function, the denominator needs to be solved which is in general analytically not possible and numerically difficult. This problem is solved by a class of numerical algorithms, the so-called Markov Chain Monte Carlo (MCMC) methods {cite:p}`method-Dezfuli2009BayesianIF`. These methods are independent from the distribution of the prior density function and the formulation of the Likelihood function, and can be applied to a wide class of problems.

Besides offering full flexibility in terms of prior and sampling distributions, MCMC methods can also be used for the development of more complex probabilistic models, such as e.g. hierarchical models to combine different non-homogeneous data samples.

Several MCMC programs and toolboxes are available, e.g. WinBUGS/OpenBUGS {cite:p}`method-bugs`, JAGS {cite:p}`method-jags` or Stan {cite:p}`method-stan`, to mention just a few. An introduction and overview on the use of Bayesian methods in a reliability context, using many MCMC examples, can be found in a NASA guide dedicated to Bayesian methods for risk and reliability {cite:p}`method-Dezfuli2009BayesianIF`, including the following topics:

-   {term}`Bayesian inference <Bayesian inference>` for common time-to-failure models

-   Time-trend models for the failure rate $\lambda$ or binomial probability $p$

-   Treatment of uncertain data and data censoring

-   Using system level information to estimate component-level reliability

-   Bayesian model choice and model validation

In the following a numerical example of the application of the MCMC is shown. In this example the failure hour data set given in {numref}`method-table7-4` is used, allowing a comparison of the results with the analytic solution. Another example for the use of numerical methods can be found in {numref}`sec_mech_handbook` for Mechanical reliability prediction, applying Bayesian updating to improve a wear-out model derived from the {term}`Physics of Failure <Physics of failure>` with In Orbit Return observations.

**Example: Numerical Bayes approach for the Exponential distribution**

As a model for describing the data, the exponential distribution is used (constant failure rate), assuming a complete record without censoring.

The likelihood is defined by:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_42
L\left( \widehat{\mathbf{x}}\left| \lambda \right.\  \right) = \prod_{i = 1}^{n}{\lambda \cdot e^{- \lambda x_{i}}}
```
````

Where $n$ denotes the number of (here: time-to-failure) observations of the random variable $x$. Now, a prior distribution has to be defined. For the purpose of the example, the Jeffreys prior for the exponential distribution is used, which is a special case of the Gamma distribution:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_43
{f'}_{}\left( \theta_{} \right){= f'}_{}\left( \lambda \right) = \frac{1}{\lambda}
```
````

Further, an initial starting point for the MCMC has to be defined:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_44
\lambda_{0} = \frac{1}{20'000} = 5 \cdot 10^{- 5}\lbrack/h\rbrack
```
````

This starting point is maybe not a good choice knowing the data but it shows that the way back to more realistic values is found during the simulation. The starting point together with the prior information is of importance to obtain a good result.

In general, the Markov chain needs a burn in phase. This burn in phase allows the parameters to converge to the relevant region of interest. The length of the burn in phase depends on several factors and a plot of the Markov chain can help to decide if the choice was appropriate. In the case the chain is non-stationary the choice might not be appropriate. Plotting several chains in one plot also helps to decide if the choice was appropriate.

If the guess of the initial point is already good, then the burn in phase is shorter. The Markov chain for the example is provided in {numref}`method_figure7_11` using the data provided in {numref}`method-table7-4`. It can be seen that it scatters around a value of $1.5\  \cdot 10^{- 5}$, corresponding to the closed-form solution provided in Eq. {eq}`Equation_method_7_32`. After excluding the burn-in phase, the simulated values from the Markov chain are used to numerically represent the posterior distribution of the uncertain failure rate $\lambda$.

The example calculations were performed using the so-called Metropolis algorithm. In the literature further developments can be found such as the Hamiltonian Monte Carlo. These more advanced methods follow in principle the same procedure but they are in general smarter in proposing where to jump next. **\[BR25\]**.

```{figure} pictures/method_figure7_11.png
---
width: 600px
name: method_figure7_11
---
MCMC chain for the example of failure rate estimation with non-informative prior, considering the data presented in {numref}`method-table7-4`
```

From the Markov chain the statistical characteristics of the estimated parameter can be obtained, i.e. the mean value, the standard deviation and the distribution type. In this example, using a burn in phase of 10'000 simulations and 40'000 simulations for the chain, the mean value and the standard deviation are

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_method_7_45
\begin{matrix}E\left\lbrack \lambda \right\rbrack = 1.467 \cdot 10^{- 5}\ \ \lbrack 1/h\rbrack \\\text{STD}\left\lbrack \lambda \right\rbrack = 4.731 \cdot 10^{- 6}\ \lbrack 1/h\rbrack \end{matrix}
```
````

The distribution of $\lambda$ is the same as shown for the result using the conjugate prior (see {numref}`method_figure7_9`). It can be seen that the $\lambda$ is not normal distributed. The advantage of the MCMC is that no assumption for the distribution type needs to be made and that the credible interval of the estimation is coming for free in this method.

(method_7_6)=
## Practical guidance for Bayesian updating in specific applications

In the following, some practical guidance is provided, mainly focussed on the definition of informative priors, for different applications of Bayesian updating in a reliability context.

(method_7_6_1)=
### Updating of estimates from previous statistical analysis

Bayesian updating for a prior derived from a previous statistical analysis on an independent data set is the most straight-forward case for the definition of a prior distribution. The parameters of the prior distribution (the hyperparameters) are in this case simply derived from the existing ("prior") data set. The advantage of Bayesian updating in this context is that information from a previous analysis can still be considered even without having access to the original data sample. Note, however, that this requires that not only a point estimate for the model parameters, but also some information on the {term}`statistical uncertainty <Statistical uncertainty>` associated with the parameter estimate is available.

It is important to note that priors derived with the aid of statistical estimation methods provide information only on {term}`statistical uncertainty <Statistical uncertainty>` resulting from sample size limitations. A more general view on various modelling uncertainties is taken in {numref}`methods` of this handbook, including a discussion of different sources of uncertainty. The analyst may choose to increase the variance of the prior distribution to account for additional uncertainty sources, e.g. if the prior data does not exactly represent the considered technology or operating conditions. An increased variance of the prior is equivalent to reducing the "equivalent sample size" of the prior data set and thus reducing the weight of the prior, and giving more weight to the new data. Obviously, this is only justified if the new data set does not introduce large additional uncertainties as well.

(method_7_6_2)=
### Updating of reliability estimates derived from reliability handbooks

Bayesian updating of estimates derived from reliability handbooks in principle follows the same approach as outlined above. However, the prior now has to be derived based on the information provided in the handbook. In the following, the basic steps to perform a Bayesian updating in this context are briefly discussed.

As a general rule, the probabilistic model for the likelihood (sampling distribution) should be consistent with the time-to-failure distribution assumed in the handbook. Many handbooks assume an Exponential distribution for the random time to failure (constant failure rate assumption), even though this may not be appropriate for certain applications, e.g. for mechanical parts.

A simple approach to transform an Exponential model provided by a reliability handbook to a Weibull model that is equivalent in terms of average failure rates is to make an assumption on the Weibull shape parameter $\beta_{X}$, allowing to derive the scale parameter $\alpha_{X}$ from the constant failure rate estimates provided by the handbook {cite:p}`method-NPRD-16` . As an alternative, the Weibull shape parameter $\beta_{X}$ may be derived from new data, or updated together with the scale parameter $\alpha_{X}$. The prior distribution of $\beta_{X}$ then has to be defined based on expert judgement or assuming a mean value $E\left\lbrack \beta_{X} \right\rbrack = 1$ (together with some standard deviation), for consistency with the Exponential distribution assumed by the handbook.

Once the distributional models have been chosen (e.g. Exponential or Weibull sampling distribution, with associated priors), the parameters of the prior distribution have to be defined based on the information given in a handbook. This will typically require some additional assumptions, as most handbooks only provide point estimates for the failure rate without a detailed discussion of their uncertainty.

As a first step, the statistical background and methodology underlying a handbook needs to be reviewed in order to determine whether the prediction may be seen as a mean value or rather as conservative estimate such as an upper confidence bound for the failure rate. Unfortunately, this is not always clearly defined in the handbooks. A common assumption is to take the handbook values as 60% confidence estimates for the failure rate if no alternative definition is available (see e.g. {cite:p}`method-ECSS-Q-ST-30C`).

In addition, the uncertainty of the predicted failure rate needs to be quantified based on the information given in a handbook and/or expert judgement. Many handbooks do not provide confidence bounds for the failure rate, as the estimates are based on a combination of various data sets and not all uncertainties associated with the prediction are of statistical origin. An alternative approach is to treat the ratio between the "observed" and the "predicted" (based on a handbook) failure rate as a random variable, covering all uncertainties associated with the prediction method. Quantitative estimates for this ratio are provided e.g. in the NPRD data handbook {cite:p}`method-NPRD-16` , in {cite:p}`method-HDBK-217Plus` , and in **\[BR30\]** for calculations based on the FIDES guide {cite:p}`method-UTE-C80-811`. The figures provided may serve as rough approximation for the "{term}`model uncertainty <Model uncertainty>`" of the considered handbook methods and possibly also for other, similar reliability handbooks.

(method_7_6_3)=
### Prior definition based on expert elicitation

Formulating probabilistic models from expert judgment is called elicitation. Elicitation generally entails consulting one or multiple experts. The goal of elicitation for the definition of a prior distribution in a Bayesian analysis is twofold:

-   Identify a prior probability distribution family, and

-   estimate parameters for the prior distribution.

To achieve this, the expert(s) can be asked questions regarding both the central tendency and the variation of the prior distribution parameter. Possible questions might include:

-   What are the minimal and maximal values you expect for the parameter?

-   What do you expect the mean, median or mode of the parameter to be?

-   With what probability do you expect the parameter to be smaller or larger than a certain value?

In addition to an answer for each question, the expert's confidence in the answer should be registered. In translating the answers into parameter estimations, possible cognitive biases which may "distort" the expert's answers also need to be considered. The quality of the parameter assessment might be improved by consulting multiple experts.

The results can be used to decide between possible candidate distribution families, and to derive the (hyper-)parameters of the selected prior distribution.

For the selection and evaluation of experts, several methodologies are available, see **\[BR31\]**. For a thorough and formal description of elicitation processes refer to the following literature: A detailed method for elicitation is described in **\[BR32\]**. Further literature on the formulation of prior distributions is found in **\[BR29\], \[BR32\] and \[BR33\]**. An online tool for elicitation is described in **\[BR34\]**. An approach focussing on the definition of a prior for a constant failure rates is described in **\[BR8\]**.

(method_7_6_4)=
### Bayesian updating with Physics of Failure methods

Bayesian updating can also be used in combination with {term}`Physics of Failure <Physics of failure>` methods, e.g. the {term}`structural reliability methods <Structural reliability method>` discussed in {numref}`method_6_5`. Different applications are possible in this context:

-   Bayesian updating of basic variable distributions that are required for an appropriate uncertainty quantification in {term}`Physics of Failure <Physics of failure>` approaches ({numref}`method_6_5_2`).

-   Bayesian updating of reliability estimates derived from the {term}`Physics of Failure <Physics of failure>`, using failure in a combined approach ({numref}`method_6_6`)

The first application considers the distribution of physical variables, such as loads and material characteristics, which can be directly or indirectly observed during tests or operations. The selected probabilistic models should be updated whenever new data becomes available. The approach for updating of these basic variable distribution follows the same principles as discussed above. Also in this context, the prior may be defined based on alternative data sources, literature values, handbook data or expert judgement.

A different situation occurs if a data sample with information on failures and successes (e.g. individual time-to-failure records for several items) is used to update a prior reliability estimate that has been derived using {term}`Physics of Failure <Physics of failure>` methods. The advantage of this approach is that several sources of information can be combined consistently, allowing to make use of limited data samples which would not be sufficient for a pure statistical approach. The details of Bayesian updating for a prior derived from {term}`structural reliability methods <Structural reliability method>` is discussed in {numref}`sec_mech_handbook` for Mechanical reliability prediction, including also some examples illustrating the use of this combined approach in practice. However, the basic principles and mathematical formulas are of course applicable also outside the mechanical domain.

