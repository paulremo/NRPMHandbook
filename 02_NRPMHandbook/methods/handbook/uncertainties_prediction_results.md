(method_8)=
# Uncertainties in the prediction results

(method_8_1)=
## Uncertainties of reliability estimates based on Part III models

Unless otherwise stated, the prediction models provided in {ref}`EEE chapter<sec_eee_handbook>`, {ref}`MEC chapter<sec_mech_handbook>` and {ref}`MIS chapter<sec_misc_handbook>` aim at providing realistic estimates, similar to average values observed in orbit. Nevertheless, the predictions will never perfectly match reality. It is the purpose of the present chapter to discuss various sources of uncertainties affecting the prediction results and how these are considered in the methodology. {numref}`method_8_3_2` at the end of this Chapter provides a practical approach that can be used for the identification of the most important uncertainties associated with a prediction, which should be communicated together with the prediction result.

Obviously, aiming at realistic estimates also requires realistic model input. Assumptions made during model usage should be clearly marked and justified by the user. Model usage uncertainties will also be discussed in the following

(method_8_2)=
## Classification and relevance of different prediction uncertainties

Apart from the fact that Reliability Prediction is always dealing with the modelling of uncertainties -- a system or component may fail or not -- reliability in itself can never be predicted with 100% accuracy. The models used are just a mathematical representation of reality, and the resulting estimates are generally associated with (prediction) uncertainties.

Very broadly, we may thus distinguish two different types of uncertainties:

-   *Aleatory uncertainties*, resulting from the natural variability of the underlying processes

-   *Epistemic uncertainties*, resulting from our poor understanding of the reliability problem

In contrast to the aleatory uncertainties, which can be modelled but not reduced, epistemic uncertainties can be reduced by collecting more information.

The modelling of aleatory uncertainties is the core of reliability prediction, assuming e.g. that failures may occur at random points in time, which can be represented by suitable probabilistic models. Based on these models, the reliability (probability of success) is estimated in relation to a certain period of time and the associated operational and environmental conditions. However, also the reliability estimates are generally uncertain, representing a second layer of uncertainties. The consideration of these epistemic uncertainties is discussed in the following.

(method_8_2_1)=
### Epistemic uncertainties classification

Epistemic uncertainties may be further classified as follows:

-   *Statistical uncertainties*, resulting from limited data samples used to derive a model

-   *Model uncertainties*, resulting from modelling assumptions and simplifications made

Another way of classification is by the modelling step or person introducing the uncertainties:

-   *Model development uncertainties* are introduced by the model developer

-   *Model usage uncertainties* are introduced by the model user (e.g. model input assumptions)

Statistical uncertainties are generally introduced during model development, when a limited data sample is used e.g. to estimate a reliability metric such as a failure rate. Model uncertainties can be introduced both during model development and during model usage.

In the following, the focus will first be on the modelling and propagation of statistical uncertainties, showing their limited relevance for the uncertainty of system level reliability estimates ({numref}`method_8_2_2`). After this, a broader perspective on epistemic uncertainties is taken, including also the more general model uncertainties ({numref}`method_8_2_3`).

(method_8_2_2)=
### The role of statistical uncertainties in system level reliability prediction

Statistical uncertainties arise whenever a reliability metric (e.g. a failure rate) is estimated from statistical data. The uncertainty resulting from the inherent randomness in the data sample is largest when the sample size is very small and decreases when more data gets available; in the theoretical limit (sample size n→∞) the estimate converges to the true value.

**Quantification of statistical uncertainties**

The quantification of statistical uncertainties during the process of model development is in principle straight-forward, taking its basis in the mathematical theory of statistical estimation. The concept of estimation by interval is illustrated in {numref}`method_figure8_12`, using the example of a Gamma distributed failure rate λ. Different methods from frequentist or Bayesian statistics can be used to derive an estimation interval [$λ_{\text{lo}}$; $λ_{\text{up}}$] which will contain the true value with a probability -- or confidence -- of β=1-α. The width of the interval depends on the value chosen for β, but also on the size of the sample used for the estimation (e.g. number of observed failures, cumulated hours).

```{figure} pictures/method_figure8_12.png
---
width: 600px
name: method_figure8_12
---
Estimation by interval illustrated with a Gamma distribution for the failure rate λ.
```

The following methods are worth mentioning in this context, see {numref}`method_6_4_3` for discussion:

-   Confidence intervals, e.g. Chi-Square estimator for constant failure rates

-   Maximum Likelihood Estimation, large sample theory with Fisher Information matrix to derive the variance around the mean (defined as the Maximum Likelihood estimate).

-   Bayesian credibility intervals, combining Likelihood information from the data sample with a prior distribution, e.g. a conjugate Gamma prior for constant failure rate estimation.

**Uncertainty propagation in system level reliability prediction**

Statistical uncertainties are introduced during the development of elementary reliability models using statistical methods, used to predict the reliability of parts, assemblies or in some cases for higher levels such as for standardized equipment. In system level reliability prediction, many of these estimates are combined using system level modelling techniques such as Reliability Block Diagrams or Fault Tree Analysis. While it is in principle possible to propagate the statistical uncertainties using e.g. Monte Carlo simulations, it is not meaningful to do so. Assuming independent and unbiased estimates, statistical uncertainty will rapidly decrease at system level due to the Law of Large Numbers. Only uncertainties associated with reliability estimates for items having a very large contribution to the system level (un-)reliability may have a relevant impact and should be highlighted when discussing the uncertainties associated with the prediction.

From a system perspective this implies that statistical uncertainties associated with elementary reliability models should be addressed (only) under the following conditions:

-   The components or spacecraft elements considered have a large (\>5-10%) contribution to the overall system unreliability and

-   The sample size used for statistical modelling was very small (\<10 failures).

When considering epistemic uncertainties more generally (as in {numref}`method_8_2_3` below), it may be sufficient to simply highlight the elementary reliability models fulfilling these conditions, indicating that the effect of statistical uncertainties may not be negligible from a system level perspective.

(method_8_2_3)=
### A more general view on epistemic uncertainties

As has been discussed in {numref}`method_8_2_2` above, statistical uncertainties due to limited data samples underlying the different elementary reliability estimates are of limited relevance from a system level point of view. The main reason for this conclusion is that statistical uncertainties associated with different elementary reliability models are statistically independent and therefore uncertainty reduces at system level due to the Law of Large Numbers.

When considering model uncertainties instead, arising from assumptions and simplifications made during the model development and usage, the assumption of statistical independence across elementary reliability estimates must not hold true. To give an example, uncertainties associated with the mission profile definition at spacecraft level are generally flown down to all lower levels, and thus in principle affect all elementary models in the same (or at least a similar) way. As a result, the uncertainties associated with lower level estimates are not independent anymore and the Law of Large Numbers does not apply.

In conclusion, when considering epistemic uncertainties more generally, model uncertainties are potentially much more relevant from a system level reliability prediction point of view than statistical uncertainties, whose effect is decreased by statistical independence and the Law of Large Numbers. Thus, to assess the uncertainties associated with a reliability prediction, it is important to consider all kinds of epistemic uncertainties introduced during the development of usage of the different reliability prediction models.

In such a general setting, it makes sense to switch from a quantitative treatment to a qualitative assessment of epistemic uncertainties. Nevertheless, a quantitative way of thinking is still relevant to decide which uncertainties are the most relevant ones for a system level prediction. From the considerations discussed above, we may conclude that the "system level relevance" ranking of various uncertainties associated with a prediction should be driven by the following considerations:

-   *What is the contribution of each model to the overall system level (un-)reliability?*\
    The models with the largest contribution are also likely to have a large contribution to the overall {term}`epistemic uncertainty <Epistemic uncertainty>` associated with the prediction.

-   *At which level have the various uncertainties been introduced?
    *Uncertainty sources at higher levels (e.g. mission profile definition at system level) have a larger contribution to the overall epistemic uncertainties than uncertainties associated with part level reliability predictions.

-   *What is the dependency structure between various uncertainty sources?
    *Uncertainties that are statistically dependent (e.g. the same assumption is used for various elementary reliability models) have a stronger effect than independent uncertainty sources.

-   *What is the order of magnitude of each relevant {term}`epistemic uncertainty <Epistemic uncertainty>`?
    *From the uncertainty sources judged to be most relevant from a system level point of view (based on the previous criteria), those leading to the largest scatter will have the largest impact on the system level reliability prediction uncertainty.

{numref}`method_8_3` contains a questionnaire approach which can be used to identify different sources of epistemic uncertainties associated with a reliability prediction model or method and its usage. For practical purposes, a full discussion and consideration of all identified uncertainties is not necessarily relevant and may even be considered as excessive information if the goal is to understand the main uncertainties associated with a prediction at system level. Instead, the focus should be on a few uncertainties having the largest impact. A rough qualitative ranking to identify e.g. the Top 5 uncertainty drivers can be established based on the criteria listed above.

(method_8_3)=
## Identification of relevant uncertainties associated with a prediction

To assess the uncertainties associated with a prediction model or method and its usage, as a first step the relevant sources of uncertainties need to be identified. This can be achieved with the aid of the questionnaires given in the following.

Based on the discussion in {numref}`method_8_2`, the identification of uncertainty sources will not be limited to statistical uncertainties, but considering epistemic uncertainties in a more general sense. Statistical uncertainties (focussing on those still relevant at system level) are considered only as one potential uncertainty source and the distinction between statistical and model uncertainties will not be stressed any further. Instead, the questionnaires will distinguish between model development uncertainties (including statistical uncertainties) and model usage uncertainties.

Answers to the questionnaires assessing the model development uncertainties associated with the models used in {ref}`EEE chapter<sec_eee_handbook>`, {ref}`MEC chapter<sec_mech_handbook>` and {ref}`MIS chapter<sec_misc_handbook>` are collected in {ref}`annexII_B`.

(method_8_3_1)=
### Model development uncertainties

Model development uncertainties are introduced by the model developer and are thus inherent in the models. At least the most important ones should be communicated together with the model; the questionnaires given below can be used for this purpose. The model user has generally no influence on the magnitude of the model development uncertainties unless there is the possibility to update the model, e.g. with the aid of new data ({numref}`method_6_7`).

The questionnaires are given for two different methods or modelling approaches based on which reliability prediction models can be developed: Statistical methods based on failure data collected in the field or in tests ({numref}`method-table8-5`) and Physics of Failure approaches based on a dedicated modelling of the underlying failure mechanisms ({numref}`method-table8-6`).

The classification of methods provided in {numref}`method_6_3` includes a third category, combining Physics of Failure methods with statistical data. The uncertainties associated with these approaches should be assessed with the aid of a single questionnaire (for statistical or Physics of Failure methods) if the modelling is dominated by one of the two methods. Otherwise, both questionnaires should be filled out. The answers given to each question should indicate how potential uncertainties and weaknesses are alleviated with the aid of the combined approach.

Models from handbooks and published data sources are assessed using the same approach. Questions that cannot be clearly answered based on the published information should be classified as "Unknown".

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table8_5')" placeholder="Search table...">

```{list-table} Conjugate priors for time-constant failure rate or failure probability models, for updating with censored and/or aggregated failure data (see Annex II.A for parametrization).
:name: method-table8-5

*   - <table class="easy-table" id="method_table8_5">
            <tr>
                <td class="full-span" colspan="3">1 Statistical approach : Inputs</td>
            </tr>
            <tr>
                <td rowspan="5">1.1</td>
                <td rowspan="5">Data representativeness</td>
                <td class="main-question"><i>Is the data representative for the application ?</i></td>
            </tr>
            <tr>
                <td>Is the data representative for the technology used ?</td>
            </tr>
            <tr>
                <td>Is the data representative for the quality level used ?</td>
            </tr>
            <tr>
                <td>Is the data representative for the use conditions ?</td>
            </tr>
            <tr>
                <td>Is the data representative for the space environment ?</td>
            </tr>
            <tr>
                <td rowspan="6">1.2</td>
                <td rowspan="6">Failure characteristics</td>
                <td  class="main-question"><i>Is the data representative in terms of the failure characteristics observed ?</i>
                </td>
            </tr>
            <tr>
                <td>Is the data based on a clear and consistent definition of "failure" ?</td>
            </tr>
            <tr>
                <td>Does the data provide information on the failure root causes covered ?</td>
            </tr>
            <tr>
                <td>Does the data provide information on the observed failure modes ?</td>
            </tr>
            <tr>
                <td>Are the relevant failure mdes observable in the field (or test) ?</td>
            </tr>
            <tr>
                <td>For accelerated tests : Have the test conditions been defined with due consideration of the relevant
                    failure mechanism ?</td>
            </tr>
            <tr>
                <td rowspan="4">1.3</td>
                <td rowspan="4">Data quality and content</td>
                <td class="main-question"><i>Does the data provide all the information required by the model ?</i></td>
            </tr>
            <tr>
                <td>Is the data set homogeneous, or does it include information on the relevant variables affecting the
                    item's mechanisms ?</td>
            </tr>
            <tr>
                <td>Are individual failure times reported for items that are likely to show non-constant failure rates ?
                </td>
            </tr>
            <tr>
                <td>Does the data provide full information on the sample population (failures and successes), including
                    information on censoring or truncation ?</td>
            </tr>
            <tr>
                <td rowspan="3">1.4</td>
                <td rowspan="3">Data sample size</td>
                <td class="main-question"><i>Is the sample size large enough to limit statistical uncertainty ?</i></td>
            </tr>
            <tr>
                <td>Is the sample size large enough to include at least 10 observed failures ?</td>
            </tr>
            <tr>
                <td>For limited data samples, especially without observed failures : Are (possibly consrvative)
                    assumptions made for the estimation explicit and justified ?</td>
            </tr>
            <tr>
                <td class="full-span" colspan="3">2 Statistical approach : Modelling</td>
            </tr>
            <tr>
                <td rowspan="6">2.1</td>
                <td rowspan="6">Model input variables</td>
                <td class="main-question"><i>Does the modelling account for the variables driving the item's reliability ?</i></td>
            </tr>
            <tr>
                <td>Does the modelling account for technology specific drivers ?</td>
            </tr>
            <tr>
                <td>Does the modelling account for part quality ?</td>
            </tr>
            <tr>
                <td>Does the modelling account for variables regarding conditions of use ?</td>
            </tr>
            <tr>
                <td>Does the modelling account for the relevant environmental variables ?</td>
            </tr>
            <tr>
                <td>Is the choice of model input variables justified based on statistical data and/or engineering
                    knowledge about the technology and its use ?</td>
            </tr>
            <tr>
                <td rowspan="3">2.2</td>
                <td rowspan="3">Distibutional assumption</td>
                <td class="main-question"><i>Is the distribution model (e.g. Exponential, Weibull) justified ?</i></td>
            </tr>
            <tr>
                <td>Is the distribution model justified based on statistical data and/or engineering knowledge about the
                    technology and its failure mechanisms</td>
            </tr>
            <tr>
                <td>Is the distribution model appropriate for typical misson durations ?</td>
            </tr>
            <tr>
                <td rowspan="3">2.3</td>
                <td rowspan="3">Data processing</td>
                <td class="main-question"><i>Are assumptions made durong fata processing explicit and justified ?</i></td>
            </tr>
            <tr>
                <td>Are assumptions required to fill missing information (e.g. related to operational time, conditions
                    of use) documented and justified ?</td>
            </tr>
            <tr>
                <td>For accelerated test: Are acceleration factors used to transform test data justified by a
                    quantitative modelling of the actual failure mechanisms ?</td>
            </tr>
            <tr>
                <td rowspan="4">2.4</td>
                <td rowspan="4">Estimation methods and results</td>
                <td class="main-question"><i>Are the estimation results based on sound methods and reported consistently ?</i></td>
            </tr>
            <tr>
                <td>In the estimation method applicable to the model and data set without requiring additional
                    assumptions, e.g. to consider censored data ?</td>
            </tr>
            <tr>
                <td>Are point estimates provided as 'realistic' estimates (e.g. average values) ?</td>
            </tr>
            <tr>
                <td>Are statistical uncertainties (e.g. confidence intervals) reported ?</td>
            </tr>
        </table>
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table8_6')" placeholder="Search table...">

```{list-table} Questionnaire to identify sources of uncertainties during the development of elementary reliability prediction models based on Physics of Failure approaches. 
:name: method-table8-6

*   - <table class="easy-table" id="method_table8_6">
            <tr>
                <td class="full-span" colspan="3">1 Physics of failure : Inputs</td>
            </tr>
            <tr>
                <td rowspan="5">1.1</td>
                <td rowspan="5">Failure characteristics</td>
                <td class="main-question"><i>Is the choice of failure mechanisms underlying the model justified ?</i></td>
            </tr>
            <tr>
                <td>Is the modelling based on a clear and consistent definition of failure ?</td>
            </tr>
            <tr>
                <td>Can the relevant failures and root causes reasonably be represented by Physics of failure considerations with appropriate uncertainty modelling ?</td>
            </tr>
            <tr>
                <td>Does the selection of failure mechanisms to be modelled account for both the technology and its conditions of use ?</td>
            </tr>
            <tr>
                <td>Is the risk imposed by additional failure mechanisms (neglected in the modelling) insgnificant ?</td>
            </tr>
            <tr>
                <td rowspan="4">1.2</td>
                <td rowspan="4">Physical variables information</td>
                <td class="main-question"><i>Is the selection and quantification of physical model input variables sound ?</i></td>
            </tr>
            <tr>
                <td>Are the relevant physical variables considered by the model ?</td>
            </tr>
            <tr>
                <td>Is each variable clearly defined and measurable or otherwise quantifiable ?</td>
            </tr>
            <tr>
                <td>Is quatitative information (e.g. data, engineering knowledge) availble to assess the relevant uncertainties associated with each variable ?</td>
            </tr>
            <tr>
                <td class="full-span" colspan="3">2 Physics of failure : Modelling</td>
            </tr>
            <tr>
                <td rowspan="5">2.1</td>
                <td rowspan="5">Failure mechanism modelling</td>
                <td class="main-question"><i>Is the reliability model based on a sound failure mechanism modelling ?</i></td>
            </tr>
            <tr>
                <td>Is the failure mechanism modellingbased on well-known physical laws, published information or otherwise validated ?</td>
            </tr>
            <tr>
                <td>Are model uncertainties associatedwith the failure mechanism modelling considered in the development ?</td>
            </tr>
            <tr>
                <td>Are simplifications made in the failure mechanism modelling explicit and justified by suitable explanations or analysis ?</td>
            </tr>
            <tr>
                <td>Are combinations of failure mechanisms considered (if needed) ?</td>
            </tr>
            <tr>
                <td rowspan="5">2.2</td>
                <td rowspan="5">Uncertainty modelling</td>
                <td class="main-question"><i>Is the reliability model based on a sound uncertainty modelling ?</i></td>
            </tr>
            <tr>
                <td>Are all uncertainties with significant impact on the reliability estimate appropriately considered in the probabilistic modelling ?</td>
            </tr>
            <tr>
                <td>Does the uncertainty modelling account for process and use variability ?</td>
            </tr>
            <tr>
                <td>Is the choice of distribution functions used for each variable justified, either by quantitative information or by qualitative judgement ?</td>
            </tr>
            <tr>
                <td>Are simplifications made in the uncertainty modelling explicit and justified by suitable explanations ?
                </td>
            </tr>
            <tr>
                <td rowspan="3">2.3</td>
                <td rowspan="3">Mathematical modelling</td>
                <td class="main-question"><i>Are the mathematical methods used to derive reliability estimates suitable ?</i></td>
            </tr>
            <tr>
                <td>Are the uncertainty propagation and inference calculation methods used suitable for the application, in particular in the case of nonlinearities ?</td>
            </tr>
            <tr>
                <td>Are simplifications made to ease the calculations explicit and justified ?</td>
            </tr>
            <tr>
                <td rowspan="3">2.4</td>
                <td rowspan="3">Model validation</td>
                <td class="main-question"><i>Has the model been validated, using quantitative or qualitative information ?</i></td>
            </tr>
            <tr>
                <td>Has the model been validated with test or field return return data ?</td>
            </tr>
            <tr>
                <td>Has the model output been checked against practical experience ?</td>
            </tr>
        </table>
```

(method_8_3_2)=
### Model usage uncertainties

Model usage uncertainties are introduced by the model user, e.g. when making assumptions for the model input. Also in this case the relevant sources of uncertainties should be identified and the most important ones (having the largest impact on the prediction) should be communicated together with the prediction. The questionnaire given in {numref}`method-table8-7` can be used for this purpose.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table8_7')" placeholder="Search table...">

```{list-table} Questionnaire to identify sources of uncertainties during reliability prediction model usage at elementary and system level. 
:name: method-table8-7

*   - <table class="easy-table" id="method_table8_7">
            <tr>
                <td class="full-span" colspan="3">1 System level reliability modelling</td>
            </tr>
            <tr>
                <td rowspan="6">1.1</td>
                <td rowspan="6">Model coverage</td>
                <td class="main-question"><i>Is the coverage of the system level modelling sufficient?</i></td>
            </tr>
            <tr>
                <td>Does the system model cover all elements and components having a relevant contribution to the overall system unreliability?</td>
            </tr>
            <tr>
                <td>Does the system model cover the required failure categories (root causes)?</td>
            </tr>
            <tr>
                <td>Are the relevant life cycle phases covered in the system model?</td>
            </tr>
            <tr>
                <td>Does the system model cover the relevant system failure modes and states?</td>
            </tr>
            <tr>
                <td>Does the model consider partial losses and system reconfiguration?</td>
            </tr>
            <tr>
                <td rowspan="6">1.2</td>
                <td rowspan="6">Model input</td>
                <td class="main-question"><i>Is the input required for the sytem level prediction readily available?</i></td>
            </tr>
            <tr>
                <td>Is the system architecture definition complete?</td>
            </tr>
            <tr>
                <td>Is the mission profile clearly defined and based on realistic assumptions?</td>
            </tr>
            <tr>
                <td>Are all inputs from lower levels available (FMEA, reliability prediction)?</td>
            </tr>
            <tr>
                <td>Are the relevant failure modes considered in the input data?</td>
            </tr>
            <tr>
                <td>Are the predictions at lower level reasonably accurate (free from large uncertainties), especially those having a large impact at system level?</td>
            </tr>
            <tr>
                <td rowspan="5">1.3</td>
                <td rowspan="5">Model uncertainties</td>
                <td class="main-question"><i>Does the system level modelling reflect the behaviour of the system?</i></td>
            </tr>
            <tr>
                <td>Is redundancy considered and modelled appropriately?</td>
            </tr>
            <tr>
                <td>Are dormancy periods considered in the system analysis?</td>
            </tr>
            <tr>
                <td>Are potential common cause effects identified and considered?</td>
            </tr>
            <tr>
                <td>Are sequence dependencies identified and considered?</td>
            </tr>
            <tr>
                <td class="full-span" colspan="3">Elementary reliability prediction models usage</td>
            </tr>
            <tr>
                <td rowspan="5">2.1</td>
                <td rowspan="5">Model coverage</td>
                <td class="main-question"><i>Is the technology and application sufficiently covered by the models used?</i></td>
            </tr>
            <tr>
                <td>Do the models cover the technologies, the environment and use conditions, or can the model usage be justified by similarity considerations?</td>
            </tr>
            <tr>
                <td>Do the models cover the required failure root causes, failure mechanisms and failure modes?</td>
            </tr>
            <tr>
                <td>Are the models used within the limits specified by the model developer?</td>
            </tr>
            <tr>
                <td>Can possible model extrapolations, if any-be justified, e.g. by conservative assumptions (flagged as such)?</td>
            </tr>
            <tr>
                <td rowspan="5">2.2</td>
                <td rowspan="5">Model input</td>
                <td class="main-question"><i>Is the input required by the prediction models readily available?</i></td>
            </tr>
            <tr>
                <td>Is the design mature enough to apply detailed elementary reliability models rather than "parts count" or "family count" methods?</td>
            </tr>
            <tr>
                <td>Is all information required to account for parts quality available?</td>
            </tr>
            <tr>
                <td>Are the use conditions clearly specified and considered in the prediction?</td>
            </tr>
            <tr>
                <td>Is the environment clearly specified and considered in the prediction?</td>
            </tr>
            <tr>
                <td rowspan="3">2.3</td>
                <td rowspan="3">Model uncertainties</td>
                <td class="main-question"><i>Are the models used free from (large) model development uncertainties?</i></td>
            </tr>
            <tr>
                <td>This question can be assessed using the questionnaires provided for the assessment of model development uncertainties</td>
            </tr>
            <tr>
                <td>For elementary models with large model development uncertainties: Is the contribution of the model to the overall system ureliability smaller than 5%?</td>
            </tr>
        </table>
```

The questionnaire should be used at the level of the system for which the prediction is made, e.g. for a single equipment, a payload, a platform or a whole spacecraft. The first part of the questionnaire relates to system level modelling uncertainties, including questions to identify major uncertainties associated with the model input from lower levels. The latter can be assessed by applying the same questionnaire to each component (if it is a system in itself), or the second part of {numref}`method-table8-7` if the lower level input is based on elementary reliability prediction models.

For an efficient usage of the questionnaire in {numref}`method-table8-7`, in consistency with the criteria discussed in {numref}`method_8_2_3`, a step-wise iterative procedure may be followed for the uncertainty assessment:

-   Apply the first part of the questionnaire at the highest level of assembly considered

    -   Relevant uncertainty sources introduced at system level are likely to have a larger impact on the prediction that uncertainties introduced at lower levels.

    -   The last question in Section 1.2 of the questionnaire, related to the uncertainties inherent in predictions at lower levels, may remain unanswered in the first iteration. To proceed with the next steps, it is only relevant to identify the components (systems or parts) having the largest contribution to overall unreliability

-   Apply the questionnaire to assess the uncertainties associated with predictions at the next lower level, focusing on the components having the largest contribution

    -   Use the first part of the questionnaire if the component is modelled using system-level reliability prediction methods

    -   Use the second part of the questionnaire if the component is modelled using elementary reliability models

    -   Uncertainties associated with predictions that do not have a large contribution to system level unreliability do not have to be considered in detail.

-   Go further down in the system hierarchy to assess uncertainties associated with predictions at lower levels, as necessary.

    -   The number of "dominating" components considered may be reduced in each step

    -   Component models may be grouped if the same modelling approach is used for a variety of parts (e.g. models for EEE components taken from the same source).

-   Summarize the uncertainty assessment by making a (qualitative) statement about the major (e.g. Top 5) uncertainties associated with the predictions at the highest level of assembly.

    -   The criteria discussed in {numref}`method_8_2_3` may be used to decide which uncertainty sources are most relevant at system level.

When following this procedure, some uncertainties introduced at the highest level of assembly considered may in fact be flown down to all lower levels. These uncertainties are likely to dominate the system level reliability prediction. Large uncertainties introduced at lower levels may become relevant if the contribution of the item's probability of failure to system level unreliability is very large. It should be noted that this becomes more and more unlikely the further the assessment goes down in the system hierarchy. Going into the details of each part level model is thus certainly not necessary to assess the major uncertainties associated with the prediction.