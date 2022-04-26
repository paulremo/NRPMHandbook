# Structural reliability methods and inputs

In the following, the use of different methods based on structural reliability theory are briefly discussed in the context of mechanical reliability prediction (Section 4.6.1 to 4.6.3):

* General structural reliability methods, as introduced in Chapter 6 (Part II) 
* Simplified structural reliability methods, with analytic solutions for the probability of failure
* Stress-Strength methods with or without analytic solutions, as a special case of simplified structural reliability methods
* 
Finally, Section 4.6.4 discusses the probabilistic modelling of random variables required as an input for structural reliability methods (with given failure mechanism model, see e.g. the models presented in Section 4.7). Bayesian updating of structural reliability estimates with new (failure) data is discussed in Section 4.6.5.

(meca_4_6_1)=
## Structural reliability methods for mechanical reliability prediction
The general principles of structural reliability prediction methods are discussed in Chapter 6 (Part II) of this handbook. Applying these methods to mechanical reliability prediction requires going through the following steps:

* Selection of the failure mechanism(s) to be modelled (cf. Section 4.4 and 4.5 above)
* Formulation of a limit state function $g(X)$ based on a mathematical model for the considered failure mechanism, defining the failure domain as $g(X) \leq 0$
* Probabilistic modelling (distribution type and parameters) of the physical variables $X$ entering the limit state function (“basic variables”)
* Derivation of the failure probability $P(g(X) \leq 0)$ using suitable methods.
* 
It is relevant to note that the limit state function $g(X)$ must always be related to a certain time interval (e.g. the duration of the mission) or event (e.g. launch). To derive a time-to-failure distribution, the limit state function and/or the basic variables in $X$ must be explicitly modelled as a function of time, requiring repeated evaluations of the probability of failure.

Limit state functions for various well-known mechanical failure mechanisms are presented in Section 4.7. The list is not complete and dedicated models may be required to account for other failure mechanisms in specific applications. The definition of other limit state functions can take basis in models published in the literature (e.g. Error: Reference source not found, ), information from the design process or experimental evidence.

```{admonition} Todo
:class: todo
Miss ref just above
```

The probabilistic modelling of basic variables needs to account for the most relevant uncertainties associated with the failure mechanism modelling and with the physical variables entering the limit state function. Possible inputs for this step are discussed in Section 4.6.4.

Aiming at realistic modelling, it will not generally be possible to derive analytic solutions for the probability of failure with a given limit state function and probabilistic modelling. Simplified models with analytic interference calculations are discussed in Section 4.6.2. Also, the well-known stress-strength methods for structural items may in certain cases be solved analytically, see Section 4.6.3 for details. More general models may be developed using the numerical methods listed in Chapter 6 (Part II).

## Simplified structural reliability modelling with analytic solutions
To allow for a quick reliability assessment without detailed knowledge of the underlying probabilistic methods, simplified part level methods based on structural reliability theory have been developed for several failure mechanisms, see Section 4.7 for details. The simplifications concern the formulation of the limit state function, the distributional assumptions for basic variables entering the model, and the derivation of analytic formulas for interference calculations. 

The most important aspects of simplified structural reliability modelling from a user’s perspective are summarized in Table   4 -7 below.

**Table 4.7**: Difference between the use of “full” and simplified structural reliability methods

|                      | **Full method**                                                    | **Simplified methods**                                                    |
|-----------------|----------------------------|----------------------------|
| Limit state function | Any functional form (explicit or implicit, e.g. numerical code)    | Simplified, brought into the general format of Equation 10‑2              |
| Basic variables      | Probability distributions for all variables are chosen by the user | Only mean values and coefficients of variation are required as user input |
| Interference method  | FORM/SORM or Monte Carlo                                           | Analytic solutions are given                                              |

The resulting models allow users to perform a reliability assessment based on structural reliability theory without detailed knowledge of the underlying probabilistic methods; only very limited user input is required. In the following, the general approach is briefly explained; see Error: Reference source not foundfor more detailed explanations, also on the derivations for each failure mechanism presented in Section 4.7.

```{admonition} Todo
:class: todo
Miss ref just above
```

### Generic approach for the formulation of the limit state function
The simplified approach is based on a generic limit state function with the following simple format:


````{admonition} Equation 4.2
:class: equation
``
``  
```{math}
g(X) = X_{1} - \Theta X_{2}
```
````


Here, $X_{1}$ may be interpreted as the “resistance” (allowable stress, or strength) of the considered part and $X_{2}$ as the “load” (or stress) acting on it. To capture the uncertainties inherent in the applied models, a model uncertainty variable $\Theta$ is introduced. Failure occurs if the load is larger than the resistance, or $\Theta X_{2} > X_{1}$. Thus, the probability of failure is derived from the overlap of the statistical distributions of $X_{1}$ and $\Theta X_{2}$, see Figure 4 -3 for illustration. 

Time dependence is considered by modelling either $X_{1}$ or $X_{2}$ (or both) as a function of time.

```{figure} ../../pictures/figure4_5.png
---
width: 600px
name: figure4_3
---
Illustration of structural reliability methods, with probability of failure resulting from the overlap of the statistical distribution for the “load” and the “resistance” (statistical interference).
```

Despite its simplicity, the limit state function in Equation 10 -2 is fairly generic, considering that both $X_{1}$ and $X_{2}$ can be a function of several random variables specific to the considered failure mechanism. In the simplified method, the two variables are defined such that the mean and coefficients of variation of $X_{1}$ and $X_{2}$ as well as the probability of failure $P_{f}$ can be estimated analytically with pre-defined distributional models for the underlying basic variables. The results may easily be updated if new test or operation data becomes available during the course of a space project, see Section 4.6.5 for details.

The distribution of the model uncertainty $\Theta$ is fixed for the simplified models, assuming a coefficient of variation of $\nu_{\Theta} = 0.2$ for most of the models considered in Section 4.7, which are generally empirical models. Setting the mean value to $\mu_{\Theta} = 1$ (assuming that the model or, more precisely, the limit state function is unbiased) is appropriate when realistic predictions are required. 

When needed, a certain explicit conservatism can be introduced in the simplified method by letting $\mu_{\Theta} > 1$ , which is equivalent to assuming a higher loading or “stress” than estimated by the model (i.e. a biased load and/or resistance model). In accordance with ECSS-E-ST-32-10C Error: Reference source not foundwhere a “model factor” is multiplied with the design loads to account for uncertainties in mathematical models, it is recommended to set $\mu_{\Theta} = 1.2$ (or higher), referring to the model factor typically used for spacecrafts at the beginning of new developments. The effect of this assumption on the estimated failure probability depends on the distributional assumptions and on the design margin of safety. Figure   4 -4 shows a comparison between some results for $\mu_{\Theta} = 1.0$ (unbiased) and $\mu_{\Theta} = 1.2$ (conservative bias), assuming Lognormal distributions for all random variables.

```{admonition} Todo
:class: todo
Miss ref just above
```

```{figure} ../../pictures/figure4_6.png
---
width: 600px
name: figure4_4
---
Effect of assuming a conservative bias in the model uncertainty variable ($\mu_{\Theta} > 1$) on the estimated probability of failure.
```

### General process for the application of the simplified structural reliability method

The application of the simplified failure mechanism models always follows the same basic steps:

* **_Estimate the mean and coefficient of variation for all basic variables required by the model_**
    
    The tables with variable definitions contain information about which variables should be considered as probabilistic, and in some cases a rough estimate for the appropriate CoV range. The mean (or deterministic) values have to be estimated for all variables. Guidance on the selection of distribution parameters based on the available information (e.g. conservative design estimates interpreted as fractile values) can be found in Chapter 6 (Part II). The distribution type of each variable has been fixed during the development of the simplified models and must not be selected by the user. 

* **_Determine the mean and coefficient of variation for the “resistance” and the “load”_**
    
    The development of the simplified models is based on the definition of a “resistance” (strength) and a “load” (stress) variable, denoted $X_{1}$ and $X_{2}$, which can be functions of one or several variables included in the basic variables list. In Section 4.7, specific formulas to estimate the mean value and coefficient of variation of $X_{1}$ and $X_{2}$ are provided for each failure mechanism with simplified model. 

* **_Estimate the probability of failure using the provided interference function_**
    
    The mean and coefficient of variation of the “resistance” and the “load” variable $X_{1}$ and $X_{2}$ are used as an input to estimate the probability of failure, which is performed using a predefined analytic function for statistical interference between the “resistance” and “load” (distributions for $X_{1}$ and $X_{2}$). The formulas provided in Section 4.7 for each failure mechanism with simplified model.

## Stress strength methods for structural items

Another well-known application of the generic limit state function in Equation 10 -2 is the stress-strength method commonly applied for structural components, but also for other applications in mechanical reliability prediction (e.g. to assess motorization performance). Typically, the “strength” or resistance $X_{1}$  and the “stress” or load $X_{2}$ are the only two variables considered, which is equivalent to dropping the model uncertainty variable $\Theta$ in Equation   10 -2. Note that this simplification furthermore implies that only a single stress and resistance is considered, unless e.g. several loads can be combined in a single metric, allowing to reduce a multivariate load distribution to a single random “stress” $X_{2}$ (see also Section 4.6.2). Problems that cannot be reduced to a two-variable problem can be handled using the general structural reliability methods discussed in Section 4.6.1.

The modelling of the two basic variables generally has to account for time dependency. In the simplest case without strength degradation, the resistance $X_{1}$ can be considered as time invariant. A time variant load $X_{2}(t)$ may then be transformed into a time invariant random variable by taking the maximum load $X_{2}^{max} = max(X_{2}(t))$ during a specified time period, e.g. the highest load experienced during launch. The probabilistic modelling for the maximum load should then be based on extreme value theory (e.g. by fitting a random variable distribution to the maxima of a random process). More complex cases with time variant strength (e.g. degradation effects) and/or cumulative loading (e.g. fatigue loads) require dedicated considerations using time variant structural reliability methods. In the remainder of this section, these applications will not be discussed any further, the focus will be on time invariant reliability calculations.

Time invariant reliability problems - i.e. problems without the need to consider time dependency of $X_{1}$ and $X_{2}$ during the reliability calculations - can generally be solved using one of the methods discussed in Chapter 6 Part II (e.g. FORM/SORM, Monte Carlo simulations). Analytic solutions are available for the following simple distributional assumptions:

* Both strength $X_{1}$ and stress $X_{2}$ are approximated by a Normal distribution
* Both strength $X_{1}$ and stress $X_{2}$ are approximated a Lognormal distribution
* The variability of one of the two variables (typically the Strength $X_{1}$) is negligible compared to the variability of the other variable, allowing for an approximate analytic solution

In the following, closed-form solutions are given for these three cases. The choice of distributional assumptions should, however, not be driven by mathematical convenience, especially considering the limited effort required to perform an analysis for this simple limit state function, using numerical methods like FORM or Monte Carlo Analysis, which offer full flexibility in terms of distributional assumptions.

The probability of failure for the Normal distribution assumption is derived as follows:


````{admonition} Equation 4.3
:class: equation
``
``  
```{math}
P_{f} = P[X_{1} - X_{2} \leq 0] = \Phi \left(\frac{- \mu_{X_{1}} - \mu_{X_{2}}}{\sqrt{\sigma_{X_{1}}^{2} + \sigma_{X_{2}}^{2}}}\right) = \Phi \left(\frac{- p - 1}{\sqrt{p^{2} \nu_{X_{1}}^{2} + \nu_{X_{2}}^{2}}}\right)
```
````

Where $\mu_{X}$, $\sigma_{X}$ and $\nu_{X}$ represent the mean value, standard deviation and coefficient of variation of the random variables $X_{1}$ and $X_{2}$ and $\Phi$ denotes the cumulative distribution function of the standard Normal distribution. On the right-hand side of Equation 10 -3, the probability of failure is derived as a function of the so-called central safety factor, $p = \mu_{X_{1}} / \mu_{X_{2}}$.

For the Lognormal distribution case we get:


````{admonition} Equation 4.4
:class: equation
``
``  
```{math}
P_{f} = P[X_{1} - X_{2} \leq 0] = \Phi \left(\frac{- \ln(p) + 0.5 ( \ln(\nu_{X_{1}}^{2} + 1) - \ln(\nu_{X_{2}}^{2} + 1))}{\sqrt{\ln(\nu_{X_{1}}^{2} + 1) + \ln(\nu_{X_{2}}^{2} + 1)}}\right)
```
````

Finally, in the third case, the probability of failure is simply derived from the distribution function of the remaining random variable:


````{admonition} Equation 4.5
:class: equation
``
``  
```{math}
P_{f} \cong F_{X_{1}}(\widehat{X_{2}})  or  P_{f} \cong 1 - F_{X_{2}}(\widehat{X_{1}})
```
````

Where $\widehat{X_{1}}$ or $\widehat{X_{2}}$ represents a point estimate of the variable whose dispersion is neglected. It is relevant to note that, even though the references values for the usual dispersion of strength variables provided in Table   4 -8 are generally smaller than the values provided in Table   4 -9 for the dispersion of loads, the strength dispersion is not negligible, and the closed-form solution in Equation   10 -5 cannot be used as an approximation for these cases.

The closed-form solutions in Equation   10 -3 and Equation   10 -4 show that for given distributional models, reliability is fully determined by the coefficients of variation $\nu_{X_{1}}$ and $\nu_{X_{2}}$ and the central safety factor $p = \mu_{X_{1}} / \mu_{X_{2}}$ representing the ratio between the mean values of strength and stress. Note that this conclusion holds also for other distributional assumptions without analytic solution. However, the quantitative relationship between the central safety factor and the probability of failure is rather sensitive to the distributional assumptions, as interference takes place only in the tails of the stress and strength distributions.

The effect of distributional assumptions is illustrated in Figure   10 -5, comparing Equation   10 -3 for Normal distributed stress and strength with Equation   10 -4 for Lognormal distributed basic variables. The difference between the two models grows with the coefficients of variation (in Figure   10 -5, only $\nu_{X_{2}}$ is varied) and with the central safety factor, and thus with the reliability of the considered part. 

It should be noted that the design factors used in practice, defined as the ratio between the design allowable load and the design limit load, are generally much smaller than the central safety factors depicted on the horizontal axis in Figure   10 -5. The reason is that designers usually make use of conservative estimates for stress and strength, which first have to be transformed to mean values before making use of Equation   10 -3 or Equation   10 -4.  To give an example, ECSS-E-ST-32C Error: Reference source not founddefines the limit load statistically as the load level not being exceeded with a probability of $99%$ during the service life of a structure. Assuming a Normal distributed load with a coefficient of variation of $0.2$, this fractile value is a factor of 1.5 higher than the corresponding mean value of the same distribution. Additional conservatism is introduced in the strength value (e.g. using A- or B-values for material strength, defined as lower $1%$ or $10%$ fractiles of the strength distribution), and with the aid of explicit margins and/or factors of safety introduced in the design. 

It is interesting to note that the impact of different distributional assumptions gets smaller when referring to design values for stress and strength, compared to the results shown in Figure   10 -5, which are directly based on the central safety factor and thus referring to mean values for both variables. An important prerequisite for robust results is that the transformation between fractiles and mean values is performed based on the same distributional assumptions as the ones used for the reliability calculations.

```{figure} ../../pictures/figure4_7.png
---
width: 600px
name: figure4_5
---
Effect of distributional assumptions on the relationship between the probability of failure and the central safety factor, defined as the ration between the mean values of strength and stress.
```

## Basic variable modelling for mechanical reliability applications
The probabilistic modelling for the physical variables entering the limit state function, also called “basic variables”, requires going through the following three steps (see also Chapter 6 in Part II):

* Decide which uncertainties need to be modelled
  
    The uncertainties associated with some variables (e.g. geometrical properties) may be negligible compared to others (e.g. stress loading). It is thus justified to model some variables as deterministic, and to focus on the main uncertainty drivers for probabilistic modelling. 
    
* Select a suitable distribution function
  
    The distribution type can be selected based on the following information:
    
    * Available data, e.g. from material testing
    * Published information, e.g. from launcher handbooks
    * Information about natural bounds (e.g. strength > 0)
    * Engineering knowledge on the underlying processes
  
    (e.g. extreme value loads, weakest link theory, sums or products of variables…)

* Determine the distribution parameters
  
    The distribution parameters can be determined from available data sources and/or making reference to the design values with some estimate on the scatter of the distribution.

* Bayesian updating with additional data (if available)

    Basic variable distributions should be updated whenever new data becomes available, see Chapter 7 (Part II) for details. The information derived from the previous steps is used to formulate the prior distribution of the model parameters.

For the simplified method, the selection of uncertainty drivers and distributional assumptions are already predefined in Section 4.7. Thus, only the third step needs to be accomplished by the user when using these models. Some practical guidance for load (stress) and resistance (strength) variable modelling is given in dedicated subsection below. 

For all basic variables, it should be noted that it may be necessary to adapt the uncertainty quantification in order to include process contributions in the analysis for a specific failure mechanism (see Section 4.2 for the discussion of root causes coverage):

* Process contributions may increase the variability of the loads or stresses
  * E.g. uncertainty in the environmental conditions considered during design
  * E.g. assembly uncertainties having an impact on stresses acting at part level
* Process contributions may increase the variability of the resistance or strength
  * E.g. model uncertainties in the designer’s strength calculations
  * E.g. minor manufacturing defects affecting the strength at part or assembly level
* Manufacturing variability may introduce additional uncertainties to be considered
  * E.g. uncertainties in the geometrical properties due to manufacturing tolerances      

### Modelling of strength variables
Mathematically, these effects can be accounted for by increasing the coefficients of variation of the basic physical variables used in the model and/or with the aid of a “model uncertainty” variable, possibly including a bias in the mean value (see e.g. Section 4.6.2). It depends on the information used for the basic variable modelling how much the variability needs to be increased to account for process contributions. To give an example, strength modelling based on material data (e.g. for metallic materials) does not account for any process contributions apart from those introduced during material production. The situation is, however, different when considering assembly level data, e.g. from structural inserts testing, which typically considers the whole insert as an assembly. In the latter case, possible process contributions must only be considered on the loading side.

Obtaining statistical information for the strength (or resistance) of materials is generally straight-forward. Vendor’s datasheets and manufacturer specifications can be considered, and data for standard materials can be found in the literature. Well-known data sources for structural materials are the Metallic Materials Properties Development and Standardization (MMPDS) Handbook  for metallic material properties (superseding MIL-HDBK-5J ) and the FRAMES-2 database for mechanical test data of metallic and composite materials maintained by ESA . New materials or conventional materials produced with a new production process are generally tested to determine the material characteristics.
The available data can be used also to define or check the assumed distribution function, e.g. using quantile plotting techniques. Engineering knowledge and data from similar materials can support this task if the data is not sufficient to justify distributional assumptions, for example:

* The Lognormal distribution may be assumed appropriate for most metallic materials, with the advantage that the distribution supports only values larger than zero.
* The Weibull distribution is appropriate for materials with “weakest links” characteristics, e.g. as ceramic materials whose strength is governed by randomly distributed material flaws.
* The Normal distribution is relevant in most cases when material characteristics are derived from statistical regression of experimental data, e.g. S/N curve parameters for fatigue strength.


With a given distributional assumption, the final step involves the estimation of the distribution parameters (or the mean and coefficient of variation) from the data. It is important to note that the distribution fit should be optimized especially in the lower tail of the data, which is dominating failure. The design value, typically defined statistically as a lower fractile value of the strength distribution, is thus a highly relevant piece of information, which can be combined with a coefficient of variation (or – better – with a second fractile value, e.g. combining A- and B-value) to derive the parameters of any two-parameter distribution model.

Reference values for usual dispersions of material strength are provided in Table   4 -8, which is based on PSS-01-306 Draft 1 . The original source of the data dates back to 1987 , considering test results and publications available at that time. It should be noted that the coefficients of variation have been derived, and traditionally been used, assuming normal distributed stress and strength variables.

**Table 4.8** : Reference values for usual dispersions (Coefficients of Variation) of strength variables .

```{glue:figure} meca_table4_8
:name: "table4_8"
```

```{admonition} Remark
:class: remark
The skin CoV corresponds to the Coefficient of Variation for the strength of the flange material.
```

### Modelling of stress variables
Determining the statistical distribution of load variables is more difficult than the assessment of material characteristics. 

Four major difficulties may arise during (probabilistic) load analysis

* **_Data availability_**
  
    Flight heritage data can be used for some environments to determine the statistical distribution of load variables and statistically defined limit loads, e.g. the launch loads provided in the Ariane 5 User Manual . Other types of loadings, such as operating loads for space mechanisms, can only be derived conservatively from analysis or test under worst-case conditions. The exceedance probability of these limit loads is generally unknown. 

* **_System level loading_**
  
    Loads are often imposed at system level and must be transformed to lower levels, following the process of load analysis (ECSS-E-HB-32-26A ). The part level loads thus depend on the stiffness properties of the spacecraft structure as well, leading not only to a transformation of system level loads, but also to the introduction of additional model uncertainties, which are not easily quantified. 

* **_Time dependency_**
  
    Loads typically vary as a function of time. The dependency on time may be either known (i.e. deterministic) or random. For some failure mechanisms it may be sufficient to regard the maximum loads during a certain time interval, reducing the reliability assessment to a simple time-invariant problem. Extreme value analysis is not applicable for failure mechanisms resulting from accumulated damage such as e.g. fatigue. In this case, the full load spectrum including all (possibly random) load cycles has to be reduced to a series of cyclic loadings using techniques such as e.g. rainflow counting .

* **_Load combination_**
  
    Practical reliability problems generally involve several load and resistance variables that must be described by their joint probability distribution function (possibly including dependencies) if several loads are interacting for the same failure mechanism. 

A pragmatic approach to handle the challenges listed above is to take the limit loads used in deterministic design as an upper fractile value with corresponding exceedance probability (e.g. 1% at a 90% confidence level for limit loads defined statistically in consistency with ECSS-E-ST-32C  Error: Reference source not found). Together with a rough estimate for the coefficient of variation of the stress distribution, this information can be used to derive the distribution parameters of any two-parameter model.

```{admonition} Todo
:class: todo
Miss ref just above
```

Distributional assumptions should nevertheless be backed by an engineering understanding of the load analysis process. To give an example, random vibration loads may be assumed to follow a Normal distribution when looking at the instantaneous (point-in-time) distribution of the random process. Assuming a linear response of the spacecraft structure, this assumption is still valid for the point-in-time distribution of the response spectrum. However, the peak response during a certain load event follows a Rayleigh distribution, or an extreme value distribution with parameters depending on the duration of the random vibration . It should be noted that also the exceedance probability of a “three sigma” peak response, often used as limit load for design purposes, depends on the duration of the loading, and cannot be derived directly from the Normal distribution.

Reference values for usual dispersions of applied stresses are provided in Table   4 -9, which is based on PSS-01-306 Draft 1 . The original source of the data dates back to 1987 , considering the knowledge and technology available at that time. With the development of new launchers ( refers to data collected for Ariane I to III, STS and Delta), much of this information must be considered as outdated, though probably conservative. Some of the highest values in Table   4 -9 are a direct result of the limited sample size of flight measurements in the same configuration that were available for the analysis. Moreover, it should be noted that the coefficients of variation have been derived, and traditionally been used, assuming normal distributed stress and strength. Also, for some loads it is not clear how the values provided are related to the underlying random process, e.g. whether the coefficient of variation for acoustic vibrations relates to the point-in-time response distribution, to the peak response, or to the resulting fatigue loading.

**Table 4.9** : Reference values for usual dispersions (Coefficients of Variation) of loads .

```{glue:figure} meca_table4_9
:name: "table4_9"
```

(meca_4_6_5)=
## Bayesian updating of structural reliability estimates
Apart from the use of Bayesian updating for basic variable distributions (Section 4.6.4), the Bayes approach can also be applied to improve prior reliability estimates derived with structural reliability methods, making use of data samples with individual time-to-failure records of several items. Also small data samples can be used for this purpose. 

An example for Bayesian updating of a prior structural reliability estimate is given in Section 4.8.2 (analytic approach) Section 4.8.3 (numerical approach using MCMC).

The general principles of Bayesian updating in a reliability context are discussed in Chapter 7 (Part II). For Bayesian updating in the present context, the prior has to be defined based on the considered limit state function and the corresponding basic variable distributions. The limit state function can usually explicitly or implicitly be defined as a function of time $t$ (or number of cycles / revolutions). Thus, the cumulative distribution function of the random time to failure can be derived by estimating the probability of failure as a function of $t$:


````{admonition} Equation 4.6
:class: equation
``
``  
```{math}
F_{T}(t) = P[T \leq t] = P_{f}(t) = P[g(X(t)) \leq 0]
```
````

The resulting function may be interpreted as the prior predictive distribution for the sample variable, as all uncertainties (including model uncertainties and uncertainties associated with the basic variables) are already integrated in the assessment.

A straightforward approach for updating this prior is to treat the model uncertainty $\Theta$, which is one of the basic variables in $X$, as the uncertain model parameter of the prior model. The prior distribution for $\Theta$ is then the distribution assumed during the structural reliability assessment and the sampling distribution (likelihood) can be derived by conditioning on $\Theta = \theta$:


````{admonition} Equation 4.7
:class: equation
``
``  
```{math}
F_{T}(t | \theta) = P[T \leq t | \theta] = P_{f}(t | \theta) = P[g(X(t)) \leq 0 | \Theta = \theta]
```
````

The conditional distribution function $F_{T}(t | \theta)$ defined by Equation   10 -7 can now be used as the sampling distribution for the formulation of the Likelihood, which is combined with a prior for the distribution of the random model uncertainty, $f'_{\Theta}(\theta)$, to apply Bayes rule for updating. In the general case, this will require numerical methods to perform the updating. However, an analytic solution can be derived for the special case of Bayesian updating for a prior derived from the simplified structural reliability method introduced in Section 4.6.2, as will be discussed in the following.

Using the generic simplified limit state function defined in Equation   10 -2, Equation   10 -7 can be reformulated as follows:


````{admonition} Equation 4.8
:class: equation
``
``  
```{math}
F_{T}(t | \theta) = P[X_{1}(t) - \theta X_{2}(t) \leq 0] = P[p(t) X'_{1} - \theta X'_{2} \leq 0]
```
````

Here, $X_{1}(t)$ denotes the random “resistance” (or strength) of the considered part against the random “load” (or stress) $X_{2}(t)$. Both random variables are normalized (variables with prime) such that $E(X'_{1}) = E(X'_{2}) = 1$. The mean value information is then summarized in the parameter $p = E(X_{1})/E(X_{2})$. In Equation   10 -8 it is assumed that only the expected values of $X_{1}$ and $X_{2}$ are a function of time, while the coefficients of variation $\nu_{X_{1}}$ and $\nu_{X_{2}}$ remain constant.

The analytic method for Bayesian updating is based on the assumption that all random variables in Equation   10 -8 (i.e. $X_{1}$ and $X_{2}$ or $X'_{1}$ and $X'_{2}$) are Lognormal distributed. With this assumption, the sampling distribution $F_{T}(t |\theta)$ is derived as follows:


````{admonition} Equation 4.9
:class: equation
``
``  
```{math}
F_{T}(t | \theta) = \Phi \left(\frac{- \ln(p(t)) + \ln(\theta) + 0.5 ( \ln(\nu_{X_{1}}^{2} + 1) - \ln(\nu_{X_{2}}^{2} + 1))}{\sqrt{\ln(\nu_{X_{1}}^{2} + 1) + \ln(\nu_{X_{2}}^{2} + 1)}}\right)
```
````

To proceed, a suitable function $p(t)$ must be defined. For the limit state functions provided with simplified model in Section 4.7, it may be assumed that the mean value parameter $p$ is proportional to $1/t$, although for some failure mechanisms this may be an approximation only. An alternative approach would be to derive the sampling distribution for $p$ instead of $t$. The data used for updating (observations for $t$) must then be transformed to “observed” mean value parameters $p(t)$.

The following derivation is based on the proportionality assumption mentioned above. In this case, $p(t)$ may be replaced by $p = k \bullet 1/t$, where $k$ is a constant specific to the considered item and failure mechanism. This leads to the following formulation:


````{admonition} Equation 4.10
:class: equation
``
``  
```{math}
F_{T}(t | \theta) = \Phi \left(\frac{- \ln(t) - \ln(k) + \ln(\theta) + 0.5 ( \ln(\nu_{X_{1}}^{2} + 1) - \ln(\nu_{X_{2}}^{2} + 1))}{\sqrt{\ln(\nu_{X_{1}}^{2} + 1) + \ln(\nu_{X_{2}}^{2} + 1)}}\right)
```
````

By comparing this result with the cumulative distribution function of the Lognormal distribution, it may be concluded that the random time to failure $T$ follows a Lognormal distribution with the following distribution parameters:


````{admonition} Equation 4.11
:class: equation
``
``  
```{math}
\mu_{T} = \ln(k) - \ln(\theta) + 0.5 (-\ln(\nu_{X_{1}}^{2} + 1) + \ln(\nu_{X_{2}}^{2} + 1))
```
````

````{admonition} Equation 4.12
:class: equation
``
``  
```{math}
\sigma_{T} = \sqrt{\ln(\nu_{X_{1}}^{2} + 1) + \ln(\nu_{X_{2}}^{2} + 1)}
```
````

For the Bayesian updating, the „deterministic“ model uncertainty $\theta$ in Equation   10 -11 is now replaced by a random variable $\Theta$. The random model uncertainty is assumed to follow a Lognormal distribution with mean value $E(\Theta) = 1$ (when assuming an unbiased failure mechanism model, see Section  for discussion) and coefficient of variation $\nu_{\Theta}$ (with specific values proposed for each simplified model presented in Section 4.7). With this, the parameter $\mu_{T}$ is Normal distributed with the following prior (hyper-)parameters:


````{admonition} Equation 4.13
:class: equation
``
``  
```{math}
\mu ' = \ln(k) - \ln(E(\theta)) + 0.5 (\ln(\nu_{\Theta}^{2} + 1) - \ln(\nu_{X_{1}}^{2} + 1) + \ln(\nu_{X_{2}}^{2} + 1))
```
````

````{admonition} Equation 4.14
:class: equation
``
``  
```{math}
\sigma ' = \sqrt{\ln(\nu_{\Theta}^{2} + 1)}
```
````

The Normal distribution for the location parameter $\mu_{T}$ is a conjugate prior for the Lognormal sampling distribution. With a random sample of time-to-failure observations $\widehat{t} = \widehat{t_{1}}, ..., \widehat{t_{n}}$, the posterior hyperparameters for the Lognormal sampling distribution can thus be derived analytically: 


````{admonition} Equation 4.15
:class: equation
``
``  
```{math}
\mu '' = (\sigma '')^{2} \left(\frac{\mu '}{\sigma'^{2}} + \frac{\sum_{i=1}^{n} (\\ln(\widehat{t_{i}}))}{\sigma_{T}^{2}}\right)
```
````

````{admonition} Equation 4.16
:class: equation
``
``  
```{math}
\sigma '' = (1 / \sigma'^{2} + n / \sigma_{T}^{2})^{1/2}
```
````

To summarize, a simple Bayesian updating scheme for reliability estimates derived from the simplified method introduced in Section 4.6.2 may be defined as follows:

* First the prior reliability estimate is derived, including the estimation of $\nu_{X_{1}}$, $\nu_{X_{2}}$ and $p(t) = E[X_{1}(t)] / E[X_{2}(t)]$. The simplified model equations provided in Section 4.7 can be used for this task, using suitable input for the basic variable modelling.
* The constant $k$ for the function $p(t) = k \bullet 1/t$ is derived from the simplified model equations provided in Section 4.7 (time $t$ may have to be replaced by e.g. number of revolutions $rev$ for some failure mechanisms); the proportionality assumption for the function $p(t) should be checked in this step.
* The standard deviation parameter $\sigma_{T}$ of the sampling distribution is calculated from $\nu_{X_{1}}$ and $\nu_{X_{2}}$, using Equation   10 -12. Note that this parameter is assumed to be fixed in the analytic updating approach and will not be affected by the updating.
* The prior (hyper-)parameters $\mu '$ and $\sigma '$ of the conjugate Normal distribution for the location parameter $\mu_{T}$ are calculated from the input for the simplified method, using Equation   10 -13 and Equation   10 -14 above.
* With this, the prior is fully defined and the Bayesian updating can be performed using the formulas for the posterior hyperparameters $\mu ''$ and $\sigma ''$ for the Lognormal sampling distribution.


The assumptions underlying this approach are summarized as follows:

* The limit state function for the prior reliability estimate can be brought into the generic format used in Equation   10 -8
* The variables $X_{1}$, $X_{2}$ and $\Theta$ follow a Lognormal distribution.
* Only the mean values of $X_{1}$ and $X_{2}$ are a function of time .
* The mean value parameter $p(t) = E[X_{1}(t)] / E[X_{2}(t)]$ can be modelled as $p(t) = k \bullet 1/t$.
* The data sample for updating is uncensored, i.e. all items have been observed until failure


As has been discussed below Equation   10 -9, the approach may be adapted by considering $p$ instead of $t$ as the “observed” variable, allowing the use of more general functions for $p(t)$; An analytic solution is still possible in this case. More general distribution types for $X_{1}$, $X_{2}$ and/or $\Theta$ may possibly be approximated by Lognormal distributions. For more general applications, it is very unlikely that an analytic solution based on conjugate priors can be derived. Numerical methods are then required to solve the problem of updating a structural reliability estimates with observations for the random time to failure, see Chapter 7 (Part II) for details. The same is true if the data set is strongly censored, i.e. the items have not been observed until failure. It should be noted that Equation   10 -6 and Equation   10 -7 can still be used as the starting point for the formulation of the prior probabilistic model, even if the analytic solution derived above is not applicable.
