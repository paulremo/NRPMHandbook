<!--- Copyright (C) Matrisk GmbH 2022 -->

(annexII_B)=
# Annex B Prediction uncertainties for Part III models

In the following, the model development uncertainties associated with the prediction models presented in {ref}`Part 3 - EEE <sec_EEE_handbook>`, {ref}`Part 4 - MEC <sec_mech_handbook>` and {ref}`Part 5 - MIS <sec_misc_handbook>` of this handbook are summarized, using the format proposed in  {numref}`method_7_3_1`. 

```{admonition} Note 27
:class: note
The uncertainty of the prediction results depends not only on the uncertainties inherent in the model, but also on the use of these modelss, see {numref}`method_7_3_2` for details.
```

**Model development uncertainties associated with the EEE models**

The models provided in {ref}`Part 3 - EEE <sec_EEE_handbook>`, are based on the FIDES 2022 {cite:p}`method-UTE-C80-811` approach, making use of a combined method with base failure rates derived from statistics (field return from on-ground applications) and scaling factors derived from the PoF. {numref}`method_table_7_1` and {numref}`method_table_7_2` summarize the uncertainties associated with these two modelling aspects.

**Model development uncertainties associated with the mechanical models**

Besides providing own models based on {term}`Structural Reliability Methods <Structural reliability method>`, {ref}`Part 4 - MEC <sec_mech_handbook>` makes reference also to external data sources such as {cite:p}`method-NPRD-16` and the {cite:p}`method-NSWC-11`, which is based on a combined method using both statistics and PoF. The limitations of these data sources when used for space applications are discussed more in detail in {ref}`Part 4 - MEC <sec_mech_handbook>`. Here, only a quick overview is given using the common checklist format for the assessment of model development uncertainties from {numref}`method_7_3_1`.

**Model development uncertainties associated with the models for miscellaneous items**

The “standard” model for {term}`miscellaneous items <Miscellaneous item>`, as defined in {ref}`Part 5 - MIS <sec_misc_handbook>`, has been developed based on IOR for an equivalent class of items. Model development uncertainties associated with this approach are listed in {numref}`method_table_7_10`. For “non-standard” items,only a general process for model development is provided and the model development uncertainties should to be assessed by the user.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table_7_4')" placeholder="Search table...">

```{list-table} Model uncertainties associated with the statistical modelling behind the EEE component models (base failure rates)
:name: method_table_7_4

* - <table class="easy-table" id="method_table_7_4" style="border-collapse:collapse; width:100%;" border="1" cellspacing="0" cellpadding="5">
      <!-- =================== 1. INPUTS =================== -->
      <tr style="background-color:#d9d9d9; font-weight:bold;">
        <td colspan="4">1 – Statistical approach: Inputs</td>
      </tr>

      <!-- 1.1 -->
      <tr>
        <td style="width:10%;">1.1 – Data representativeness</td>
        <td style="width:22%;">Is the data representative for the application?</td>
        <td style="width:58%;">
          Basic failure rates are the main data issued from statistical approach. These data are issued from
          data from manufacturers, data from tests or data issued from other handbooks representative within
          the limits defined by the models for each technology and each quality level. NRPM study provides
          complement for specificities linked to space. However, some of the specificities such as vacuum,
          single atom like oxygen, UV, light, SEE are not considered.
        </td>
        <td style="width:10%; background-color:#FFFF99; text-align:center;">Partly</td>
      </tr>

      <!-- 1.2 -->
      <tr>
        <td>1.2 – Failure characteristics</td>
        <td>Is the data representative in terms of the failure characteristics observed?</td>
        <td>
          Failures are considered through their failure modes, their failure mechanisms and physical stresses providing
          the failures. Information on the failure root causes should be performed during the development of the FIDES
          methodology. Failure modes are relevant for all industrial domains, and surely for the space industry also.
          However, no repartition of failure modes is provided. For failure mechanisms specific to space constraints,
          such as Total Ionizing Dose (TID), this methodology is described in NRPM.
        </td>
        <td style="background-color:#99FF99; text-align:center;">Yes</td>
      </tr>

      <!-- 1.3 -->
      <tr>
        <td>1.3 – Data quality and content</td>
        <td>Does the data provide all the information required by the model?</td>
        <td>
          In FIDES, only the technologies with enough data of basic failure rates are relevant, other ones have not been
          considered. As models are based on PoF, it is not necessary to get numerous data.
        </td>
        <td style="background-color:#99FF99; text-align:center;">Yes</td>
      </tr>

      <!-- 1.4 -->
      <tr>
        <td>1.4 – Data sample size</td>
        <td>Is the sample size large enough to limit statistical uncertainty?</td>
        <td>
          Models are based on PoF, so it is not necessary to have numerous data of basic failure rates. Otherwise, it
          would not be possible to cover all technologies and especially the most recent ones. For basic failure rates,
          data are issued from data from manufacturers, data from tests or data issued from other handbooks with
          sufficient sampling to get good confidence.
        </td>
        <td style="background-color:#99FF99; text-align:center;">Yes</td>
      </tr>

      <!-- =================== 2. MODELLING =================== -->
      <tr style="background-color:#d9d9d9; font-weight:bold;">
        <td colspan="4">2 – Statistical approach: Modelling</td>
      </tr>

      <!-- 2.1 -->
      <tr>
        <td>2.1 – Model input variables</td>
        <td>Does modelling account for the variables driving the item’s reliability?</td>
        <td>
          The basic failure rates are released from statistics coming from in-service feedback, manufacturer data and
          different handbooks. These data are not linked to any quality factor and conditions of use.
        </td>
        <td style="background-color:#FF9999; text-align:center;">No</td>
      </tr>

      <!-- 2.2 -->
      <tr>
        <td>2.2 – Distributional assumption</td>
        <td>Is the distribution model (e.g. Exponential, Weibull) justified?</td>
        <td>Quantity of data cannot justify the use of distribution law.</td>
        <td style="background-color:#FF9999; text-align:center;">No</td>
      </tr>

      <!-- 2.3 -->
      <tr>
        <td>2.3 – Data processing</td>
        <td>Are assumptions made during data processing explicit and justified?</td>
        <td>Are based on physics of failures.</td>
        <td style="background-color:#FF9999; text-align:center;">No</td>
      </tr>

      <!-- 2.4 -->
      <tr>
        <td>2.4 – Estimation methods and results</td>
        <td>Are the estimation results based on sound methods and reported consistently?</td>
        <td>
          The basic failure rates are released from statistics coming from in-service feedback, manufacturer data and
          different handbooks. This data is adapted and corrected to fit with the FIDES guide. PEA REX and the
          Reliability Prediction Data Sources and Methodologies (RPDSM) have demonstrated good adequation of basic
          failure rates and models from field data return.
        </td>
        <td style="background-color:#FFFF99; text-align:center;">Partly</td>
      </tr>
    </table>
``` 

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table_7_5')" placeholder="Search table...">

```{list-table} Model uncertainties associated with the PoF modelling behind the EEE component models (acceleration factors)
:name: method_table_7_5

* - <table class="easy-table" id="method_table_7_5">
      <!-- =============== 1. INPUTS =============== -->
      <tr style="background-color:#d9d9d9; font-weight:bold;">
        <td colspan="4">1 – Physics of Failure: Inputs</td>
      </tr>

      <!-- 1.1 Failure characteristics -->
      <tr>
        <td style="width:15%;">1.1 – Failure characteristics</td>
        <td style="width:20%;"><i>Is the choice of failure mechanisms underlying the model justified?</i></td>
        <td style="width:55%;">
          Analysis has been made from a clear definition of failure modes, leading to the failure mechanisms.
          However, uncertainties and confidence levels are not known as not enough data are available.
          All failure modes are considered whatever the technology but limited to the specification of the equipment.
        </td>
        <td style="width:10%; background-color:#99FF99; text-align:center;">Yes</td>
      </tr>

      <!-- 1.2 Physical variables information -->
      <tr>
        <td>1.2 – Physical variables information</td>
        <td><i>Is the selection and quantification of physical model input variables sound?</i></td>
        <td>
          The physical phenomenon considered are:
          <ul>
            <li>Temperature,</li>
            <li>Thermal cycling,</li>
            <li>Humidity and</li>
            <li>Vibrations.</li>
          </ul>
          This data is clearly measurable and can be quantified.
        </td>
        <td style="background-color:#99FF99; text-align:center;">Yes</td>
      </tr>

      <!-- =============== 2. MODELLING =============== -->
      <tr style="background-color:#d9d9d9; font-weight:bold;">
        <td colspan="4">2 – Physics of Failure: Modelling</td>
      </tr>

      <!-- 2.1 Failure mechanism modelling -->
      <tr>
        <td>2.1 – Failure mechanism modelling</td>
        <td><i>Is the reliability model based on sound failure mechanism modelling?</i></td>
        <td>
          Models are based on recent acceleration laws developed by Arrhenius, Coffin-Manson, Norris-Lanzberg,
          Peck and Hallberg. These laws have been defined in many publications over the last 50 years and are
          considered as operative and sound. No simplification is made. The chosen activation energies consider
          the most significant failure modes, but generally cover all other failure modes.
        </td>
        <td style="background-color:#99FF99; text-align:center;">Yes</td>
      </tr>

      <!-- 2.2 Uncertainty modelling -->
      <tr>
        <td>2.2 – Uncertainty modelling</td>
        <td><i>Is the reliability model based on sound uncertainty modelling?</i></td>
        <td>
          There are no statistical studies for uncertainties and levels of confidence. However, studies such as
          the PEA REX and the RPDSM have demonstrated good adequation of models with data from field data return.
        </td>
        <td style="background-color:#FFFF99; text-align:center;">Partly</td>
      </tr>

      <!-- 2.3 Mathematical modelling -->
      <tr>
        <td>2.3 – Mathematical modelling</td>
        <td><i>Are the mathematical methods used to derive reliability estimates suitable?</i></td>
        <td>
          Models are based on the same acceleration laws (Arrhenius, Coffin-Manson, Norris-Lanzberg, Peck and Hallberg).
          These laws are widely published, considered operative and sound, and no simplification is made.
        </td>
        <td style="background-color:#99FF99; text-align:center;">Yes</td>
      </tr>

      <!-- 2.4 Model validation -->
      <tr>
        <td>2.4 – Model validation</td>
        <td><i>Has the model been validated, using quantitative or qualitative information?</i></td>
        <td>
          No formal validation of each model has been made. However, studies such as the PEA REX and the RPDSM have
          demonstrated good adequation of models from field data return. The PEA REX has shown good correlation with
          the FIDES prediction on 14 products used in air, sea and land applications; an analysis of main component
          families level also showed a good correlation.
        </td>
        <td style="background-color:#FFFF99; text-align:center;">Partly</td>
      </tr>
    </table>
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table_7_6')" placeholder="Search table...">

```{list-table} Uncertainties associated with the mechanical reliability models based on (simplified) structural reliability methods (PoF)
:name: method_table_7_6

* - <table class="easy-table" id="method_table_7_6" style="border-collapse:collapse; width:100%;" border="1" cellspacing="0" cellpadding="5">
      <!-- =================== 1. INPUTS =================== -->
      <tr style="background-color:#d9d9d9; font-weight:bold;">
        <td colspan="4">1 - Physics of Failure: Inputs</td>
      </tr>

      <!-- 1.1 -->
      <tr>
        <td style="width:15%;">1.1 – Failure characteristics</td>
        <td style="width:20%;"><i>Is the choice of failure underlying the model justified?</i></td>
        <td style="width:55%;">
          Part 4 – MEC of this handbook provides guidance on the identification and selection of failure
          mechanisms to be modelled and discusses the requirements for appropriate root causes coverage.<br><br>
          The failure criterion is clearly defined together with the limit state function(s) used for the failure
          mechanism modelling.
        </td>
        <td style="width:10%; background-color:#FFFF99; text-align:center;">Can be</td>
      </tr>

      <!-- 1.2 -->
      <tr>
        <td>1.2 – Physical variables information</td>
        <td><i>Is the selection and quantification of physical model input variables sound?</i></td>
        <td>
          The relevant physical variables are defined by the limit state function(s) used.<br>
          Each variable is clearly defined and quantification is possible, e.g. based on design information.<br>
          Quantifying the uncertainties associated with each basic variable can in some cases be challenging.
        </td>
        <td style="background-color:#99FF99; text-align:center;">Yes</td>
      </tr>

      <!-- =================== 2. MODELLING =================== -->
      <tr style="background-color:#d9d9d9; font-weight:bold;">
        <td colspan="4">2 - Physics of Failure: Modelling</td>
      </tr>

      <!-- 2.1 -->
      <tr>
        <td>2.1 – Failure mechanism modelling</td>
        <td><i>Are the mathematical methods used to derive reliability estimates suitable?</i></td>
        <td>
          Limit state functions provided in the handbook are based on well-known physical laws and published
          information.<br><br>
          All assumptions and simplifications inherent in the simplified models are made explicit and a model
          uncertainty variable is introduced for quantitative treatment. The models account for one failure
          mechanism at a time.
        </td>
        <td style="background-color:#99FF99; text-align:center;">Yes</td>
      </tr>

      <!-- 2.2 -->
      <tr>
        <td>2.2 – Uncertainty modelling</td>
        <td><i>Is the reliability model based on sound uncertainty modelling?</i></td>
        <td>
          The limit state functions, and distributional assumptions used for the simplified structural reliability
          methods were designed to achieve analytic solutions for the probability of failure.<br><br>
          All assumptions and simplifications made are listed together with the models. Uncertainty quantification
          for the basic variables treated as random is left to the model user.
        </td>
        <td style="background-color:#FFFF99; text-align:center;">Partly</td>
      </tr>

      <!-- 2.3 -->
      <tr>
        <td>2.3 – Mathematical modelling</td>
        <td><i>Are the mathematical methods used to derive reliability estimates suitable?</i></td>
        <td>
          The analytical formulas are suitable under the assumptions made in the modelling of the limit state
          function and basic variable distributions (see above).
        </td>
        <td style="background-color:#99FF99; text-align:center;">Yes</td>
      </tr>

      <!-- 2.4 -->
      <tr>
        <td>2.4 – Model validation</td>
        <td><i>Has the model been validated, using quantitative or qualitative information?</i></td>
        <td>
          No validation efforts have been made so far to prove the pertinence of the models and to check the
          behavior of the models.
        </td>
        <td style="background-color:#FF9999; text-align:center;">No</td>
      </tr>
    </table>
```


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table_7_7')" placeholder="Search table...">

```{list-table} Model uncertainties associated with the NPRD when considered as a data source for mechanical reliability prediction in space applications
:name: method_table_7_7
:header-rows: 0

* - <table class="easy-table" id="method_table_7_7">
        <tr style="background-color:#d9d9d9; font-weight:bold;">
            <td colspan="4">1 – Statistical approach: Inputs</td>
        </tr>
        <tr>
            <td style="width:15%;">1.1 – Data representativeness</td>
            <td style="width:20%;">Is the data representative for the application?</td>
            <td style="width:55%;">
                Limited coverage of part types used in space and space-grade items. Most data come from terrestrial applications, and some data records are very old (early 1970’s).<br><br>
                A search limited to parts listed with Space Flight (SF) environment can deliver data that is representative with respect to technology, quality, use conditions and environment (to be checked with the part details).
            </td>
            <td style="width:10%; background-color:#FFFF99; text-align:center;">Partly</td>
        </tr>
        <tr>
            <td>1.2 – Failure characteristics</td>
            <td>Is the data representative in terms of the failure characteristics observed?</td>
            <td>
                Data recorded in <i>NPRD</i> is from field failure rate data sources. The failure criterion is not clearly specified and should not be applicable to the specific use of the data record. The discussion provided in the introduction is maintenance-related and should not be applicable to data from SF environment.<br><br>
                Information on the coverage, e.g. failure root causes and failure modes are not provided.
            </td>
            <td style="background-color:#CCCCCC; text-align:center;">Unknown</td>
        </tr>
        <tr>
            <td>1.3 – Data quality and content</td>
            <td>Does the data provide all the information required by the model?</td>
            <td>
                Even when restricted to SF environment, data comes from non-homogeneous population with respect to design characteristics and specific use conditions.<br><br>
                Information on variables likely to drive the reliability of mechanical items is not provided. The records provide information on the number of failures observed and cumulated hours, without information on the individual TTF.
            </td>
            <td style="background-color:#FF9999; text-align:center;">No</td>
        </tr>
        <tr>
            <td>1.4 – Data sample size</td>
            <td>Is the sample size large enough to limit statistical uncertainty?</td>
            <td>
                The sample size (cumulated hours and number of failures) is provided in each data sheet.<br><br>
                Failure rates calculated for entries with zero failures are based on the conservative assumption that a single failure has occurred.
            </td>
            <td style="background-color:#FFFF99; text-align:center;">Partly</td>
        </tr>
        <tr style="background-color:#d9d9d9; font-weight:bold;">
            <td colspan="4">2 – Statistical approach: Modelling</td>
        </tr>
        <tr>
            <td>2.1 – Model input variables</td>
            <td>Does the modelling account for the variables driving the item’s reliability?</td>
            <td>
                Summary statistics are derived from a merging that considers information provided in the data records: part type, part quality and environment.<br><br>
                Part details statistics provide failure rate estimates as derived from each data entry. Design details, specific use conditions and environmental variables cannot be considered.
            </td>
            <td style="background-color:#FFFF99; text-align:center;">Partly</td>
        </tr>
        <tr>
            <td>2.2 – Distributional assumption</td>
            <td>Is the distributional model (e.g. exponential, Weibull) justified?</td>
            <td>
                Failure rate estimates are based on the exponential distribution assumption without justification; due to the way the data has been collected.
            </td>
            <td style="background-color:#FF9999; text-align:center;">No</td>
        </tr>
        <tr>
            <td>2.3 – Data processing</td>
            <td>Are assumptions made during data processing explicit and justified?</td>
            <td>
                Data entries are checked by Reliability Information Analysis Centre (RIAC) for completeness, consistency and adequacy, but the handbook provides no details on the criteria and assumptions used.
            </td>
            <td style="background-color:#FF9999; text-align:center;">No</td>
        </tr>
        <tr>
            <td>2.4 – Estimation methods and results</td>
            <td>Are the estimation results based on sound methods and reported consistently?</td>
            <td>
                Failure rate estimates are recorded as average values except for entries without failures, where a conservative assumption is made (cf. 1.4 – Data sample size of this table).<br><br>
                Statistical uncertainties can be quantified based on the information provided for each entry, but not for the summary statistics, due to the data merging process applied.
            </td>
            <td style="background-color:#99FF99; text-align:center;">Yes</td>
        </tr>
    </table>
```
---

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table_7_8')" placeholder="Search table...">

```{list-table} Model uncertainties associated with the statistical modelling behind the NSWC models when considered as a data source for mechanical reliability prediction in space applications.
:name: method_table_7_8

* - <table class="easy-table" id="method_table_7_8">
      <tr>
        <td class="full-span" colspan="4">1 – Statistical approach: Inputs</td>
      </tr>
      <tr>
        <td>1.1 – Data representativeness</td>
        <td>Is the data representative for the application?</td>
        <td>
          The data used to estimate base failure rates is not representative (in terms of technology,
          quality level, use conditions and environment) for space applications.
        </td>
        <td class="status no">No</td>
      </tr>
      <tr>
        <td>1.2 – Failure characteristics</td>
        <td>Is the data representative in terms of the failure characteristics observed?</td>
        <td>
          The handbook provides no detailed information on the failure characteristics considered for the
          estimation of base failure rates (failure criterion, root causes, coverage, observed failure modes).
        </td>
        <td class="status unknown">Unknown</td>
      </tr>
      <tr>
        <td>1.3 – Data quality and content</td>
        <td>Does the data provide all the information required by the model?</td>
        <td>
          According to the handbook introduction, base failure rates have been derived (mostly) from
          laboratory testing, where the exact stress levels are known.
        </td>
        <td class="status yes">Yes</td>
      </tr>
      <tr>
        <td>1.4 – Data sample size</td>
        <td>Is the sample size large enough to limit statistical uncertainty?</td>
        <td>
          The handbook does not provide information on the sample size of the data used to derive base failure rates.
        </td>
        <td class="status unknown">Unknown</td>
      </tr>
      <tr>
        <td class="full-span" colspan="4">2 – Statistical approach: Modelling</td>
      </tr>
      <tr>
        <td>2.1 – Model input variables</td>
        <td>Does the modelling account for the variables driving the item’s reliability?</td>
        <td>
          <i>NSWC</i> predictions can be tuned with the aid of scaling factors derived from the <i>PoF</i>.<br>
          The uncertainties inherent in this approach are assessed separately.
        </td>
        <td class="status partly">Partly</td>
      </tr>
      <tr>
        <td>2.2 – Distributional assumption</td>
        <td>Is the distributional model (e.g. exponential, Weibull) justified?</td>
        <td>
          Time dependence on mechanical parts failure rates is considered in a simplified way.<br>
          Base failure rates are given as constant (or time-averaged) values.
        </td>
        <td class="status partly">Partly</td>
      </tr>
      <tr>
        <td>2.3 – Data processing</td>
        <td>Are assumptions made during data processing explicit and justified?</td>
        <td>
          Assumptions made for the statistical modelling behind the <i>NSWC</i> models are not explicit.
        </td>
        <td class="status no">No</td>
      </tr>
      <tr>
        <td>2.4 – Estimation methods and results</td>
        <td>Are the estimation results based on sound methods and reported consistently?</td>
        <td>
          The estimation methods used are not explained.
        </td>
        <td class="status no">No</td>
      </tr>
    </table>
```


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table_7_9')" placeholder="Search table...">

```{list-table} Model uncertainties associated with the PoF modelling behind the NSWC models when considered as a data source for mechanical reliability prediction in space applications
:name: method_table_7_9

* - <table class="easy-table" id="method_table_7_9" style="border-collapse:collapse; width:100%;" border="1" cellspacing="0" cellpadding="5">
      <!-- =================== 1. INPUTS =================== -->
      <tr style="background-color:#d9d9d9; font-weight:bold;">
        <td colspan="4">1 - Physics of Failure: Inputs</td>
      </tr>

      <!-- 1.1 -->
      <tr>
        <td style="width:15%;">1.1 – Failure characteristics</td>
        <td style="width:20%;"><i>Is the choice of failure mechanisms underlying the model justified?</i></td>
        <td style="width:55%;">
          Failure mechanisms relevant for naval applications are identified and described in the handbook.<br><br>
          The relevance of the considered failure mechanism models for space applications is given only for some parts.<br><br>
          Additional failure mechanisms and different failure root causes can be covered by the base failure rates (statistical approach); the <i>PoF</i> are only used to derive scaling factors to account for the detailed design, environment and use conditions.
        </td>
        <td style="width:10%; background-color:#FFFF99; text-align:center;">Partly</td>
      </tr>

      <!-- 1.2 -->
      <tr>
        <td>1.2 – Physical variables information</td>
        <td><i>Is the selection and quantification of physical model input variables sound?</i></td>
        <td>
          The selection of model input variables related to failure mechanisms appears to be sound. Each variable is clearly defined in the handbook, though with reference to US units.<br><br>
          The required model input can be extracted from design information, at least in later project stages when detailed design information becomes available.
        </td>
        <td style="background-color:#99FF99; text-align:center;">Yes</td>
      </tr>

      <!-- =================== 2. MODELLING =================== -->
      <tr style="background-color:#d9d9d9; font-weight:bold;">
        <td colspan="4">2 - Physics of Failure: Modelling</td>
      </tr>

      <!-- 2.1 -->
      <tr>
        <td>2.1 – Failure mechanism modelling</td>
        <td><i>Is the reliability model based on sound failure mechanism modelling?</i></td>
        <td>
          The failure mechanism modelling behind the <i>NSWC</i> scaling factors is not fully described in the handbook.<br><br>
          Model uncertainties and simplifications made are not discussed.
        </td>
        <td style="background-color:#CCCCCC; text-align:center;">Unknown</td>
      </tr>

      <!-- 2.2 -->
      <tr>
        <td>2.2 – Uncertainty modelling</td>
        <td><i>Is the reliability model based on sound uncertainty modelling?</i></td>
        <td>
          Uncertainties in the failure mechanism modelling due to the input variables entering the models are not quantified.<br><br>
          The unknown model risks bias introduced by this omission can be considerable in case the underlying failure mechanism model is nonlinear.
        </td>
        <td style="background-color:#FF9999; text-align:center;">No</td>
      </tr>

      <!-- 2.3 -->
      <tr>
        <td>2.3 – Mathematical modelling</td>
        <td><i>Are the mathematical methods used to derive reliability estimates suitable?</i></td>
        <td>
          The mathematical formulas used behind the <i>NSWC</i> scaling factors are not described in the handbook.
        </td>
        <td style="background-color:#CCCCCC; text-align:center;">Unknown</td>
      </tr>

      <!-- 2.4 -->
      <tr>
        <td>2.4 – Model validation</td>
        <td><i>Has the model been validated, using quantitative or qualitative information?</i></td>
        <td>
          Some limited validation based on testing is mentioned in the handbook introduction.
        </td>
        <td style="background-color:#FFFF99; text-align:center;">Partly</td>
      </tr>
    </table>
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table_7_10')" placeholder="Search table...">

```{list-table} Model uncertainties associated with the “standard model” for miscellaneous items
:name: method_table_7_10

* - <table class="easy-table" id="method_table_7_10" style="border-collapse:collapse; width:100%;" border="1" cellspacing="0" cellpadding="5">
      <!-- =================== 1. INPUTS =================== -->
      <tr style="background-color:#d9d9d9; font-weight:bold;">
        <td colspan="4">1 - Statistical approach: Inputs</td>
      </tr>

      <!-- 1.1 -->
      <tr>
        <td style="width:15%;">1.1 – Data representativeness</td>
        <td style="width:20%;"><i>Is the data representative for the application?</i></td>
        <td style="width:55%;">
          Since the method used to derive reliability is based on IOR from industrials, the data are fully
          representative for the items classified as standard in a certain frame defined by (1) Quality process,
          (2) Maturity, (3) Technology, (4) Complexity and (5) Operating conditions contribution to the
          reliability of the item.
        </td>
        <td style="width:10%; background-color:#99FF99; text-align:center;">Yes</td>
      </tr>

      <!-- 1.2 -->
      <tr>
        <td>1.2 – Failure characteristics</td>
        <td><i>Is the data representative in terms of the failure characteristics observed?</i></td>
        <td>
          The observed failures in-orbit are used to support the reliability prediction of the standard miscellaneous items.<br><br>
          All random failures are counted and failures due to systematic failures are counted once. The model reflects these categories of failures.<br>
          No extrinsic failures are considered like those from IOR nor degradation.
        </td>
        <td style="background-color:#FFFF99; text-align:center;">Partly</td>
      </tr>

      <!-- 1.3 -->
      <tr>
        <td>1.3 – Data quality and content</td>
        <td><i>Does the data provide all the information required by the model?</i></td>
        <td>
          The IOR data is homogeneous by definition of the model, i.e. the IOR merges in case of inconsistency (cumulated time, number of failures).
          The individual failure times are recorded but no statistical tests are conducted to verify the assumption that the failure rates are constant.<br><br>
          The data provided by IOR are truncated (and sometimes censored) since the cumulated time is calculated for both fleets of satellites along which the majority is still operational.
        </td>
        <td style="background-color:#FFFF99; text-align:center;">Partly</td>
      </tr>

      <!-- 1.4 -->
      <tr>
        <td>1.4 – Data sample size</td>
        <td><i>Is the sample size large enough to limit statistical uncertainty?</i></td>
        <td>
          Models for standard miscellaneous items are built with industrials’ fleets representing millions of hours of cumulated time.
          Most of the time failures have been observed, sometimes higher than 10 (e.g. Travelling Wave Tube Amplifier – TWTA), sometimes less than 10.<br><br>
          In specific cases where no failure is observed there is no possibility of justifying the failure mechanisms.
        </td>
        <td style="background-color:#FFFF99; text-align:center;">Partly</td>
      </tr>

      <!-- =================== 2. MODELLING =================== -->
      <tr style="background-color:#d9d9d9; font-weight:bold;">
        <td colspan="4">2 - Statistical approach: Modelling</td>
      </tr>

      <!-- 2.1 -->
      <tr>
        <td>2.1 – Model input variables</td>
        <td><i>Does the modelling account for the variables driving the item’s reliability?</i></td>
        <td>
          For the standard miscellaneous items (derived from in-orbit data) the model (per item) reflects a “standard” frame of Quality (high),
          Maturity (high), Technology and Complexity and a set of Operating conditions dependent on the item.<br><br>
          No analytical justification is provided regarding the failure mechanisms related to this set of parameters.
          The approach is fully of statistical one.
        </td>
        <td style="background-color:#FFFF99; text-align:center;">Partly</td>
      </tr>

      <!-- 2.2 -->
      <tr>
        <td>2.2 – Distributional assumption</td>
        <td><i>Is the distributional model (e.g. exponential, Weibull) justified?</i></td>
        <td>
          For the items presenting a high number of failures (higher than 10), the distribution of time does not reflect an evolution in time but the in-line use of the item.<br><br>
          No study has been conducted to quantify this assumption in the case of the constant failure rate.
        </td>
        <td style="background-color:#FF9999; text-align:center;">No</td>
      </tr>

      <!-- 2.3 -->
      <tr>
        <td>2.3 – Data processing</td>
        <td><i>Are assumptions made during data processing explicit and justified?</i></td>
        <td>
          No specific assumption is other than the class of miscellaneous items and the functional criterion has been justified.<br><br>
          The set of parameters contributing to the reliability is well mastered in some cases (e.g. TWTA) and non-mastered for various items in a same class with variability of design (e.g. deployment device).
        </td>
        <td style="background-color:#FF9999; text-align:center;">No</td>
      </tr>

      <!-- 2.4 -->
      <tr>
        <td>2.4 – Data processing</td>
        <td><i>Has the model been validated, using quantitative or qualitative information?</i></td>
        <td>
          The constant failure rates derived from field data return data are based on the interval estimation (one-bounded-side) at 60% level of confidence.
        </td>
        <td style="background-color:#FF9999; text-align:center;">No</td>
      </tr>
    </table>
```