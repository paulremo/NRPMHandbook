(annexII_B)=
# Annex B Prediction uncertainties for Part III models

In the following, the model development uncertainties associated with the prediction models presented in {ref}`EEE chapter<sec_eee_handbook>`, {ref}`MEC chapter<sec_mech_handbook>` and {ref}`MIS chapter<sec_misc_handbook>` are summarized, using the format proposed in {numref}`method_8_3_1`. Note that the uncertainty of the prediction results depends not only on the uncertainties inherent in the model, but also on the use of these models, see {numref}`method_8_3_2` for details.

**Model development uncertainties associated with the EEE models**

The models provided in {numref}`sec_eee_handbook`, are based on the {cite:t}`method-UTE-C80-811`  approach, making use of a combined method with base failure rates derived from statistics (field return from on-ground applications) and scaling factors derived from the {term}`Physics of Failure <Physics of failure>`. {numref}`method-table8-8` and {numref}`method-table8-9` summarize the uncertainties associated with these two modelling aspects.

**Model development uncertainties associated with the Mechanical models**

Besides providing own models based on {term}`Structural Reliability Methods <Structural reliability method>`, {numref}`sec_eee_handbook` makes reference also to external data sources such as {cite:t}`method-NPRD-16` and the {cite:t}`method-NSWC-11`, which is based on a combined method using both statistics and {term}`Physics of Failure <Physics of failure>`. The limitations of these data sources when used for space applications are discussed more in detail in {numref}`sec_mech_handbook`. Here, only a quick overview is given using the common checklist format for the assessment of model development uncertainties from {numref}`method_8_3_1`.

**Model development uncertainties associated with the models for Miscellaneous items**

The “standard” model for {term}`Miscellaneous items <Miscellaneous item>`, as defined in {numref}`sec_misc_handbook`, has been developed based on IOR for an equivalent class of items. Model development uncertainties associated with this approach are listed in {numref}`method-table8-14`. For “non-standard” items only a general process for model development is provided and the model development uncertainties have to be assessed by the user.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table8_8')" placeholder="Search table...">

```{list-table} Model uncertainties associated with the statistical modelling behind the EEE component models (base failure rates). 
:name: method-table8-8

*   - <table class="easy-table" id="method_table8_8">
            <tr>
                <td class="full-span" colspan="4">1 Statistical approach: Inputs</td>
            </tr>
            <tr>
                <td rowspan="2">1.1</td>
                <td rowspan="2">Data representativeness</td>
                <td class="main-question"><i>Is the data representative for the application?</i></td>
                <td rowspan="2">partly</td>
            </tr>
            <tr>
                <td>Basic failure rates are the main data issued from statistical approach. These
                    data are issued from data from manufacturers, data from tests or data issued
                    from other handbooks representative in the limits defined by the models for
                    each technology and each quality level. NRPM study provides complement for
                    specificities linked to space. However, some of the specificies such as vaccum,
                    single atomic oxygen, UV, light, SEE are not considered</td>
            </tr>
            <tr>
                <td rowspan="2">1.2</td>
                <td rowspan="2">Failure characteristics</td>
                <td class="main-question"><i>Is the data representative in terms of the failure characteristics observed?</i></td>
                <td rowspan="2">yes</td>
            </tr>
            <tr>
                <td>Failure are considered through their failures modes, their failure mecanisms and
                    physical stresses providing the failures. Information of the failure root causes
                    have been performed during the development of the FIDES methodology.
                    Failure modes are relevant for all industrial domains, and surely for space
                    industry also. However, no repartition of failure modes is provided. For failure
                    mechanisms specific to space constraints, such as TID, methodology is described
                    in NRPM.</td>
            </tr>
            <tr>
                <td rowspan="2">1.3</td>
                <td rowspan="2">Data quality and content</td>
                <td class="main-question"><i>Does the data provide all the information required by the model?</i></td>
                <td rowspan="2">yes</td>
            </tr>
            <tr>
                <td>In FIDES, only the technologies with enough data of basic failure rates are
                    relevant, other one have not been considered. As models are based on physics
                    of failures, it is not necessary to get numerous data.</td>
            </tr>
            <tr>
                <td rowspan="2">1.4</td>
                <td rowspan="2">Data sample size</td>
                <td class="main-question"><i>Is the sample size large enough to limit statstical uncertainty?</i></td>
                <td rowspan="2">yes</td>
            </tr>
            <tr>
                <td>Models are based on physics of failures, so not necessary to have numerous data of basic failure rates. Otherwise, it would be not possible to cover all technologies and especially the most recent ones. For basic failure rates, data
                are issued from data from manufactures, data from tests or data issued from
                other handbooks with sufficient sampling to get a good confidence.</td>
            </tr>
            <tr>
                <td class="full-span" colspan="4">2 Statistical approach: Modelling</td>
            </tr>
            <tr>
                <td rowspan="2">2.1</td>
                <td rowspan="2">Model input variables</td>
                <td class="main-question"><i>Does the modelling account for the variables driving the item's reliability?</i></td>
                <td rowspan="2">no</td>
            </tr>
            <tr>
                <td>The basic failure rates are released on statistics coming from in-service
                    feedback, manufacturer data and different handbooks. These data are not
                    linked to any quality factor and conditions of use.</td>
            </tr>
            <tr>
                <td rowspan="2">2.2</td>
                <td rowspan="2">Distributional assumption</td>
                <td class="main-question"><i>Is the distribution model (e.g. Exponential, Weibull) justified?</i></td>
                <td rowspan="2">no</td>
            </tr>
            <tr>
                <td>Quantity of data cannot justify the use of a distribution law</td>
            </tr>
            <tr>
                <td rowspan="2">2.3</td>
                <td rowspan="2">Data processing</td>
                <td class="main-question"><i>Are assumptions made during data processing explicit and justified?</i></td>
                <td rowspan="2">no</td>
            </tr>
            <tr>
                <td>Models are based on physics of failures.</td>
            </tr>
            <tr>
                <td rowspan="2">2.4</td>
                <td rowspan="2">Estimation methods and results</td>
                <td class="main-question"><i>Are the estimation results based on sound methods and reported consistently?</i></td>
                <td rowspan="2">partly</td>
            </tr>
            <tr>
                <td>The basic failure rates are released on statistics coming from in-service
                    feedback, manufacturer data and different handbooks. These data are adapted
                    and corrected to fit with the FIDES guide. PEA REX and the RPDSM have
                    demonstrated the good adequation of basis failure rates and models with data
                    from field return.</td>
            </tr>
        </table>
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table8_9')" placeholder="Search table...">

```{list-table} Model uncertainties associated with the PoF modelling behind the EEE component models (acceleration factors).
:name: method-table8-9

*   - <table class="easy-table" id="method_table8_9">
            <tr>
                <td class="full-span" colspan="4">1 Physics of Failure: Inputs</td>
            </tr>
            <tr>
                <td rowspan="2">1.1</td>
                <td rowspan="2">Failure characteristics</td>
                <td class="main-question"><i>Is the choice of failure mechanisms underlying the model justified?</i></td>
                <td rowspan="2">yes</td>
            </tr>
            <tr>
                <td>Analysis have been made from clear definition of failure modes, leading to the failure mechanisms. However, uncertainties and confidence level are not known as not enough data are available. All failure modes are considered whatever the technology, but limited to the pecification of the equipment.  </td>
            </tr>
            <tr>
                <td rowspan="2">1.2</td>
                <td rowspan="2">Physical variables information</td>
                <td class="main-question"><i>Is the selection and quantification of physical model input variables sound?</i></td>
                <td rowspan="2">yes</td>
            </tr>
            <tr>
                <td>The physical phenomenon considered are temperature, thermal cycling, humidity and vibrations. These data are clearly measurable and can be quantified.</td>
            </tr>
            <tr>
                <td class="full-span" colspan="4">2 Physics of Failure: Modelling</td>
            </tr>
            <tr>
                <td rowspan="2">2.1</td>
                <td rowspan="2">Failure mechanism modelling</td>
                <td class="main-question"><i>Is the reliability model based on a sound failure mechanisms modelling?</i></td>
                <td rowspan="2">yes</td>
            </tr>
            <tr>
                <td>Models are based on recent acceleration laws developped by Arrhenius, CoffinManson, Norris Lanzberg, Peck and Hallberg. These laws have been defined in many publications over the last 50 years and are considered as operative and sound. No simplification is made. The chosen activation energies consider the most significant failure modes, but generally cover all other failure modes.</td>
            </tr>
            <tr>
                <td rowspan="2">2.2</td>
                <td rowspan="2">Uncertainty modelling</td>
                <td class="main-question"><i>Is the reliability model based on a sound uncertainty modelling?</i></td>
                <td rowspan="2">partly</td>
            </tr>
            <tr>
                <td>There is no statistical studies for uncertainties and level of confidence. However, studies such as the PEA REX and the RPDSM have demonstrated the good adequation of models with data from field return.</td>
            </tr>
            <tr>
                <td rowspan="2">2.3</td>
                <td rowspan="2">Mathematical modelling</td>
                <td class="main-question"><i>Are the mathematical methods used to derive reliability estimates suitable?</i></td>
                <td rowspan="2">yes</td>
            </tr>
            <tr>
                <td>Models are based on recent acceleration laws developped by Arrhenius, CoffinManson, Norris Lanzberg, Peck and Hallberg. These laws have been defined in many publications over the last 50 years and are considered as operative and sound. No simplification is made.</td>
            </tr>
            <tr>
                <td rowspan="2">2.4</td>
                <td rowspan="2">Model validation</td>
                <td class="main-question"><i>Has the model been validated, using quantitative or qualitative information?</i></td>
                <td rowspan="2">partly</td>
            </tr>
            <tr>
                <td>No formal validation of each model has been made. However, studies such as the PEA REX and the RPDSM have demonstrated the good adequation of models with data from field return. The PEA REX has shown the good correlation with the FIDES prediction on 14 products used in air, sea and land applications; an analysis of main components families level showed also a good correlation.</td>
            </tr>
        </table>

```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table8_10')" placeholder="Search table...">

```{list-table} Uncertainties associated with the mechanical reliability models based on (simplified) structural reliability methods (Physics of Failure).
:name: method-table8-10

*   - <table class="easy-table" id="method_table8_10">
            <tr>
                <td class="full-span" colspan="4">Physics of Failure: Inputs</td>
            </tr>
            <tr>
                <td rowspan="2">1.1</td>
                <td rowspan="2">Failure characteristics</td>
                <td class="main-question"><i>Is the choice of failure mechanisms underlying the model justified?</i></td>
                <td rowspan="2">Can be</td>
            </tr>
            <tr>
                <td>The handbook's mechanical chapter provides guidance on the identification and selection of failure mechansims to be modelled, and discusses the requirements for appropriate root causes coverage. The failure criterion is clearly defined by the limit state function(s) used for the failure mechanism modelling.</td>
            </tr>
            <tr>
                <td rowspan="2">1.2</td>
                <td rowspan="2">Physical variables information</td>
                <td class="main-question"><i>Is the selection and quantification of physical model input variables sound?</i></td>
                <td rowspan="2">yes</td>
            </tr>
            <tr>
                <td>The relevant physical variables are defined by the limit state function(s) used. Each variable is clearly defined and quantification is possible e.g. based on design information. Quantifying the uncertainties associated with each basic variable may in some cases be challenging.</td>
            </tr>
            <tr>
                <td class="full-span" colspan="4">Physics of Failure: Modelling</td>
            </tr>
            <tr>
                <td rowspan="2">2.1</td>
                <td rowspan="2">Failure mechanism modelling</td>
                <td class="main-question"><i>Are the mathematical methods used to derive reliability estimates suitable?</i></td>
                <td rowspan="2">yes</td>
            </tr>
            <tr>
                <td>Limit state functions provided in the handbook are based on well-known physical laws and published information. All assumptions and simplifications inherent in the simplified models are made explicit and a model uncertainty variable is introduced for quantitative treatment. The models a failure mechanism at a time.</td>
            </tr>
            <tr>
                <td rowspan="2">2.2</td>
                <td rowspan="2">Uncertainty modelling</td>
                <td class="main-question"><i>Is the reliability model based on a sound uncertainty modelling?</i></td>
                <td rowspan="2">Partly</td>
            </tr>
            <tr>
                <td>The limit state functions and distributional assumptions used for the simplified structural reliability methods were designed to achieve analytic solutions for the probability of failure. All assumptions and simplifications made are listed together with the models. Uncertainty quantification for the basic variables treated as random is left to the model user.</td>
            </tr>
            <tr>
                <td rowspan="2">2.3</td>
                <td rowspan="2"></td>
                <td class="main-question"><i>Are the mathematical methods used to derive reliability estimates suitable?</i></td>
                <td rowspan="2">yes</td>
            </tr>
            <tr>
                <td>The analytic formulas are suitable under the assumptions made in the modelling of the limit state function and basic variable distributions (see above).</td>
            </tr>
            <tr>
                <td rowspan="2">2.4</td>
                <td rowspan="2">E</td>
                <td class="main-question"><i>Has the model been validated, using quantitative or qualitative information?</i></td>
                <td rowspan="2">No</td>
            </tr>
            <tr>
                <td>No validation efforts have been made so far to prove the pertinence of the models and to check the behaviour of the models.</td>
            </tr>
        </table>

```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table8_11')" placeholder="Search table...">

```{list-table} Model uncertainties associated with the NPRD when considered as a data source for Mechanical reliability prediction in space applications.
:name: method-table8-11

*   - <table class="easy-table" id="method_table8_11">
            <tr>
                <td class="full-span" colspan="4">1 Statistical approach: Inputs</td>
            </tr>
            <tr>
                <td rowspan="2">1.1</td>
                <td rowspan="2">Data representativeness</td>
                <td class="main-question"><i>Is the data representative for the application?</i></td>
                <td rowspan="2">Partly</td>
            </tr>
            <tr>
                <td>Limited coverage of part types used in space and space-graded items. Most data comes from terrestrial applications, and some data records are very old (early 1970's). A search limited to parts listed with "SF" (Space Flight) environment can deliver data that is representative w.r.t. to technology, quality, use conditions and environment (to be checked with the part details).</td>
            </tr>
            <tr>
                <td rowspan="2">1.2</td>
                <td rowspan="2">Failure characteristics</td>
                <td class="main-question"><i>Is the data representative in terms of the failure characteristics observed?</i></td>
                <td rowspan="2">Unknown</td>
            </tr>
            <tr>
                <td>Data recorded in NPRD is from field failure rate data sources. The failure criterion is not clearly specified and may depend on the specific source of the data record. The discussion provided in the introduction is maintenance related and may not be applicable to data from SF environment. Information on the coverage failure root causes and failure modes is not provided.</td>
            </tr>
            <tr>
                <td rowspan="2">1.3</td>
                <td rowspan="2">Data quality and content</td>
                <td class="main-question"><i>Does the data provide all the information required by the model?</i></td>
                <td rowspan="2">No</td>
            </tr>
            <tr>
                <td>Even when restricted to SF environment, data comes from non-homogeneous populations w.r.t. design characteristics and specific use conditions. Information on variables likely to drive the reliability of mechanical items is not 2 provided. The records provide information on number of failures observed and cumulated hours, without information on the individual TTF</td>
            </tr>
            <tr>
                <td rowspan="2">1.4</td>
                <td rowspan="2">Data sample size</td>
                <td class="main-question"><i>Is the sample size large enough to limit statstical uncertainty?</i></td>
                <td rowspan="2">Partly</td>
            </tr>
            <tr>
                <td>Failure rates calculated for entries with zero failures are based on the conservative assumption that a single failure has occurred. </td>
            </tr>
            <tr>
                <td class="full-span" colspan="4">2 Statistical approach: Modelling </td>
            </tr>
            <tr>
                <td rowspan="2">2.1</td>
                <td rowspan="2">Model input variables</td>
                <td class="main-question"><i>Does the modelling account for the variables driving the item's reliability?</i></td>
                <td rowspan="2">Partly</td>
            </tr>
            <tr>
                <td>Summary statistics are derived from a merging that considers information provided in the data records: Part type, part quality and environment. Part details statistics provide failure rate estimates derived from each data entry. Design details, specific use conditions and environmental variables cannot be considered.</td>
            </tr>
            <tr>
                <td rowspan="2">2.2</td>
                <td rowspan="2">Distributional assumption</td>
                <td class="main-question"><i>Is the distribution model (e.g. Exponential, Weibull) justified?</i></td>
                <td rowspan="2">No</td>
            </tr>
            <tr>
                <td>Failure rate estimates are based on the Exponential distribution assumption without justificiation, due to the way the data has been collected.</td>
            </tr>
            <tr>
                <td rowspan="2">2.3</td>
                <td rowspan="2">Data processing</td>
                <td class="main-question"><i>Are assumptions made during data processing explicit and justified?</i></td>
                <td rowspan="2">No</td>
            </tr>
            <tr>
                <td>Data entries are checked by RIAC for completeness, consistency and adequacy, 9
                    but the handbook provides no details on the criteria and assumptions used.</td>
            </tr>
            <tr>
                <td rowspan="2">2.4</td>
                <td rowspan="2">Estimation methods and results</td>
                <td class="main-question"><i>Are the estimation results based on sound methods and reported consistently?</i></td>
                <td rowspan="2">Yes</td>
            </tr>
            <tr>
                <td>Failure rate estimates are recorded as average values except for entries without failures, where a conservative assumption is made (cf. 1.4 Data sample size). Statistical uncertainties can be quantified based on the information provided for each entry, but not for the summary statistics, due to the data merging process applied.</td>
            </tr>
        </table>
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table8_12')" placeholder="Search table...">

```{list-table} Model uncertainties associated with the statistical modelling behind the NSWC models when considered as a data source for Mechanical reliability prediction in space applications.
:name: method-table8-12

*   - <table class="easy-table" id="method_table8_12">
            <tr>
                <td class="full-span" colspan="4">1 Statistical approach: Inputs</td>
            </tr>
            <tr>
                <td rowspan="2">1.1</td>
                <td rowspan="2">Data representativeness</td>
                <td class="main-question"><i>Is the data representative for the application? </i></td>
                <td rowspan="2">No</td>
            </tr>
            <tr>
                <td>The data used to estimate base failure rates is not representative in terms of technology, quality level, use conditions and environment) for space applications.</td>
            </tr>
            <tr>
                <td rowspan="2">1.2</td>
                <td rowspan="2">Failure characteristics</td>
                <td class="main-question"><i>Is the data representative in terms of the failure characteristics observed?</i></td>
                <td rowspan="2">Unknown</td>
            </tr>
            <tr>
                <td>The handbook provides no detailed information on the failure characteristics considered for the estimation of base failure rates (failure criteria, root causes coverage, observed failure modes).</td>
            </tr>
            <tr>
                <td rowspan="2">1.3</td>
                <td rowspan="2">Data quality and content</td>
                <td class="main-question"><i>Does the data provide all the information required by the model?</i></td>
                <td rowspan="2">Yes</td>
            </tr>
            <tr>
                <td>According to the handbook introduction, base failure rates have been derived (mostly) from laboratory testing where the exact stress level was known</td>
            </tr>
            <tr>
                <td rowspan="2">1.4</td>
                <td rowspan="2">Data sample size</td>
                <td class="main-question"><i>Is the sample size large enough to limit statstical uncertainty?</i></td>
                <td rowspan="2">Unknown</td>
            </tr>
            <tr>
                <td>The handbook does not provide information on the sample size of the data used to derive base failure rates.</td>
            </tr>
            <tr>
                <td class="full-span" colspan="4">2 Statistical approach: Modelling</td>
            </tr>
            <tr>
                <td rowspan="2">2.1</td>
                <td rowspan="2">Model input variables</td>
                <td class="main-question"><i>Does the modelling account for the variables driving the item's reliability?</i></td>
                <td rowspan="2">Partly</td>
            </tr>
            <tr>
                <td>NSWC predictions can be tuned with the aid of scaling factors derived from the Physics of Failure. The uncertainties inherent in this approach are assessed separately.</td>
            </tr>
            <tr>
                <td rowspan="2">2.2</td>
                <td rowspan="2">Distributional assumption</td>
                <td class="main-question"><i>Is the distribution model (e.g. Exponential, Weibull) justified?</i></td>
                <td rowspan="2">Partly</td>
            </tr>
            <tr>
                <td>Time dependence of mechanical parts failure rates is considered in a simplified
                    way. Ba se failure rates are given as constant (or time-avera ged) values</td>
            </tr>
            <tr>
                <td rowspan="2">2.3</td>
                <td rowspan="2">Data processing</td>
                <td class="main-question"><i>Are assumptions made during data processing explicit and justified?</i></td>
                <td rowspan="2">No</td>
            </tr>
            <tr>
                <td>Assumptions made for the statistical modelling behind the NSWC models are not explicit</td>
            </tr>
            <tr>
                <td rowspan="2">2.4</td>
                <td rowspan="2">Estimation methods and results</td>
                <td class="main-question"><i>Are the estimation results based on sound methods and reported consistently?</i></td>
                <td rowspan="2">No</td>
            </tr>
            <tr>
                <td>The estimation methods used are not explained.</td>
            </tr>
        </table>

```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table8_13')" placeholder="Search table...">

```{list-table} Model uncertainties associated with the PoF modelling behind the NSWC  models when considered as a data source for Mechanical reliability prediction in space applications.
:name: method-table8-13

*   - <table class="easy-table" id="myTable">
            <tr>
                <td class="full-span" colspan="4">Physics of Failure: Inputs</td>
            </tr>
            <tr>
                <td rowspan="2">1.1</td>
                <td rowspan="2">Failure characteristics</td>
                <td class="main-question"><i>Is the choice of failure mechanisms underlying the model justified?</i></td>
                <td rowspan="2">Partly</td>
            </tr>
            <tr>
                <td>ailure mechanisms relevant for naval applications are identified and described in the handbook. The relevance of the considered failure mechanism models for space applications is given only for some parts. Additional failure mechanisms and different failure root causes may be covered by the base failure rates (statistical approach); the Physics of Failure are only used to derive scaling factors to account for the detailed design, environment and use conditions.</td>
            </tr>
            <tr>
                <td rowspan="2">1.2</td>
                <td rowspan="2">Physical variables information</td>
                <td class="main-question"><i>Is the selection and quantification of physical model input variables sound?</i></td>
                <td rowspan="2">Yes</td>
            </tr>
            <tr>
                <td>The selection of model input variables by failure mechanisms appears to be sound. Each variable is clearly defined in the handbook, though with reference in to US units. The required model input can be extracted from design information, at least in later project stages when detailed design information becomes available.</td>
            </tr>
            <tr>
                <td class="full-span" colspan="4">Physics of Failure: Modelling</td>
            </tr>
            <tr>
                <td rowspan="2">2.1</td>
                <td rowspan="2">Failure mechanism modelling</td>
                <td class="main-question"><i>Is the reliability model based on a sound failure mechanisms modelling?</i></td>
                <td rowspan="2">Unknown</td>
            </tr>
            <tr>
                <td>The failure mechanism modelling behind the NSWC scaling factors is not fully described in the handbook. Model uncertainties and simplifications made are not discussed.</td>
            </tr>
            <tr>
                <td rowspan="2">2.2</td>
                <td rowspan="2">Uncertainty modelling</td>
                <td class="main-question"><i>Is the reliability model based on a sound uncertainty modelling?</i></td>
                <td rowspan="2">No</td>
            </tr>
            <tr>
                <td>Uncertainties in the failure mechanism modelling and the input variables entering the models are not quantified. The unknown model bias introduced by this omssion can be considerable in case the underlying failure mechanims model is nonlinear.</td>
            </tr>
            <tr>
                <td rowspan="2">2.3</td>
                <td rowspan="2">Mathematical modelling</td>
                <td class="main-question"><i>Are the mathematical methods used to derive reliability estimates suitable?</i></td>
                <td rowspan="2">Unknow</td>
            </tr>
            <tr>
                <td>The mathematical formulas used to derive the NSWC scaling factors are not described in the handbook.</td>
            </tr>
            <tr>
                <td rowspan="2">2.4</td>
                <td rowspan="2">Model validation</td>
                <td class="main-question"><i>Has the model been validated, using quantitative or qualitative information?</i></td>
                <td rowspan="2">Partly</td>
            </tr>
            <tr>
                <td>Some limited validation based on testing is mentioned in the handbook introduction.</td>
            </tr>
        </table>

```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'method_table8_14')" placeholder="Search table...">

```{list-table} Model uncertainties associated with the “standard model” for Miscellaneous items.
:name: method-table8-14

*   - <table class="easy-table" id="myTable">
            <tr>
                <td class="full-span" colspan="4">1 Statistical approach: Inputs</td>
            </tr>
            <tr>
                <td rowspan="2">1.1</td>
                <td rowspan="2">Data representativeness</td>
                <td class="main-question"><i>Is the data representative for the application?</i></td>
                <td rowspan="2">yes</td>
            </tr>
            <tr>
                <td>Since the method used to derive reliability is based on IOR (TAS and ADS IOR feedback), the data are fully representative for the items classified as standard na certain frame defined by (1) Quality process, (2) Maturity, (3) Technology, (4) Commplexity and (5) operating conditions contribution to the reliability of the item.</td>
            </tr>
            <tr>
                <td rowspan="2">1.2</td>
                <td rowspan="2">Failure characteristics</td>
                <td class="main-question"><i>s the data representative in terms of the failure characteristics observed?</i></td>
                <td rowspan="2">partly</td>
            </tr>
            <tr>
                <td>The observed failures in-orbit are used to support the reliability prediction of the standard miscellaneous items. All random failures are counted and failures due to systematic failures are counted once. The model reflects these categories of failures. No extrinsic failures are considered directly from IOR nor wear-out.</td>
            </tr>
            <tr>
                <td rowspan="2">1.3</td>
                <td rowspan="2">Data quality and content</td>
                <td class="main-question"><i>Does the data provide all the information required by the model?</i></td>
                <td rowspan="2">partly</td>
            </tr>
            <tr>
                <td>The IOR data are homogeneous by definition of the model, i.e. no IOR merge in case of inconsistency (cumulated time, number of failures). The individual failure times are recorded but no statistical tests are conducted in order to verify the assumption that the failure rates are constant. The data provided by IOR are truncated (and sometimes censored) since the cumulated time is calculated for both fleets of satellites among which majority is still operational.</td>
            </tr>
            <tr>
                <td rowspan="2">1.4</td>
                <td rowspan="2">Data sample size</td>
                <td class="main-question"><i>Is the sample size large enough to limit statstical uncertainty?</i></td>
                <td rowspan="2">partly</td>
            </tr>
            <tr>
                <td>Models for standard miscellaneous items are built with TAS fleet and ADS fleet representing million of hours of cumulated time. Most of times failures have been observed, sometimes higher than 10 (e.g. TWTA), sometimes less than 10. In the specific cases where no failure is observed there is no possibility to justify the failure mechanisms.</td>
            </tr>
            <tr>
                <td class="full-span" colspan="4">Statistical approach: Modelling</td>
            </tr>
            <tr>
                <td rowspan="2">2.1</td>
                <td rowspan="2">Model input variables</td>
                <td class="main-question"><i>Does the modelling account for the variables driving the item's reliability?</i></td>
                <td rowspan="2">partly</td>
            </tr>
            <tr>
                <td>For the standard miscellaneous items (derived from in-orbit data) the model (per item) reflects a "standard" frame of Quality (high), Maturity (high), Technology and Complexity and a set of Operating conditions dependent on the item. No analytical justifiction is provided regarding the failure mechanisms related to this set of parameters. The approach is fully a statistical one.</td>
            </tr>
            <tr>
                <td rowspan="2">2.2</td>
                <td rowspan="2">Distributional assumption</td>
                <td class="main-question"><i>Is the distribution model (e.g. Exponential, Weibull) justified?</i></td>
                <td rowspan="2">no</td>
            </tr>
            <tr>
                <td>For the items presenting a high number of failures (higher than 10) the distribution of time does not reflect an evolution in time but no statistitical test has been conducted in order to quantify this assumption in the case of the constant falure rate.</td>
            </tr>
            <tr>
                <td rowspan="2">2.3</td>
                <td rowspan="2">Data processing</td>
                <td class="main-question"><i>Are assumptions made during data processing explicit and justified?</i></td>
                <td rowspan="2">no</td>
            </tr>
            <tr>
                <td>No specific assumptions other than the class of miscellaneous items per functional criterion has been justified. The set of parameteres contributing to the reliability is well mastered in some cases (e.g.TWTA) to non mastered for various items in a same class with varability of design (e.g. deployment device).</td>
            </tr>
            <tr>
                <td rowspan="2">2.4</td>
                <td rowspan="2">Estimation methods and results</td>
                <td class="main-question"><i>Are the estimation results based on sound methods and reported consistently?</i></td>
                <td rowspan="2">yes</td>
            </tr>
            <tr>
                <td>The constant failure rates derived from IOR data are based on the interval estimation (one-bounded side) at 60% level of confidence.</td>
            </tr>
        </table>

```