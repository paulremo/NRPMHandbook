<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_8_3_3)=
# Process factors

This paragraph deals with the different process factors dedicated to the quality in the product life cycle of components:

* General process factor $Pi_{\text{process}}$ in {numref}`eee_8_3_3_1` to {numref}`eee_8_3_3_3`,
* Process factor for RF/MW components $Pi_{\text{RF/MW_process}}$ in {numref}`eee_8_3_3_6`,
* Process factor for ASIC components $Pi_{\text{ASIC_process}}$ in {numref}`eee_8_3_3_6`,
* Process factor for hybrids and multi-chip modules $Pi_{\text{process_H&M}}$ in {numref}`eee_8_3_3_7`.
* Power factor for Power semiconductors $Pi_{\text{process)PW}}$ in {numref}`eee_8_3_3_8`.

(eee_8_3_3_1)=
## Process factor for quality and technical control over reliability

The process factor $Pi_{\text{process}}$  represents the quality and technical control over reliability in the product life cycle. Its purpose is to globally evaluate the maturity of the manufacturer regarding the control over its reliability engineering process. The tables and calculations associated are presented in Annex A.2-12.1.

The FIDES 2022 handbook recommends having the audit performed by auditors with the following characteristics:

* Be engineers, executives or technicians with at least 5 years’ experience,
* Be familiar with the ISO 9001 standard, or the EN9100 approach,
* Have skills, as well as theoretical and practical experience in reliability,
* Have training in the conduct of audits.

In this paragraph, the process factor approach is adapted for all space applications, i.e satellites, probes, crewed vehicles and launchers; when there are some specificities per types, it is explained clearly in the table.

The FIDES method, on which the method proposed in the handbook is based on, uses the terms “systems”, “equipment”, “boards” and “subassemblies”. In the context of space applications, when applying the FIDES methodology, “system” refers to spacecraft, i.e. satellite, probe, crewed vehicle or launcher. “Equipment” refers to the units constituting the system. “Board” corresponds to the boards within some equipment, and “subassembly” corresponds parts of some board. 

In addition, in the audit, “product” is often mentioned; the way it needs to be understood depends on the phase where it is addressed (ex: in Integration into equipment, it corresponds to the unit, in Manufacturing of board, it corresponds to the board).

(eee_8_3_3_2)=
## Contribution of different phases in the development process

The FIDES questionnaire for $Pi_{\text{process}}$ is based on questions having a possible impact on the reliability of the equipment and related to the different phases of its development and manufacturing. The relative influence of each phase, $Contribution_{\text{phase_i}}$, is weighted depending on the importance of each phase in the total contribution to the reliability of the equipment. This phase contribution is directly used in the calculation of the process factor $Pi_{\text{process}}$. The FIDES guide provides default values for the relative weights of each phase that can be used by all domains but recommends using dedicated values for the considered industrial domain. The table presented in the FIDES guide is in {numref}`eee_table_8_4`.

```{list-table} Phase contribution for space applications
:name: eee_table_8_4
:header-rows: 1
:widths: 10 60 30

* - #
  - Phase
  - Phase contribution for space applications
* - 1
  - Specification
  - 8 %
* - 2
  - Design
  - 16 %
* - 3
  - Manufacturing of board or subassembly
  - 20 %
* - 4
  - Integration into equipment
  - 10 %
* - 5
  - Integration into the system
  - 10 %
* - 6
  - Operation and maintenance
  - 18 %
* - 7
  - Support activities
  - 18 %
* - 
  - **Total**
  - **100 %**
```

To better represent the space application designs (for satellites, probes and crewed vehicles), a specific analysis has been performed, jointly with the FIDES consortium team, which results in the following observation: compared to standard contributions in other industrial domains, the design and manufacturing phases are more significant, unlike the operations and maintenance which influence is less meaningful for space applications.

A weight table specific for space applications has been built according to the specific development and manufacturing process of electronic equipment embedded on spacecrafts. 

```{admonition} Recommendation
:class: recommendation
The table proposed hereafter as {numref}`eee_table_8_5` is more relevant to space applications than the table provided in the FIDES 20222 guide, and hence it is recommended to use it for more fitting results.
```

```{list-table} Contribution Phase i for each phase for space applications
:name: eee_table_8_5
:header-rows: 1
:widths: 10 60 30

* - #
  - Phase
  - Phase contribution for space applications
* - 1
  - Specification
  - 10 %
* - 2
  - Design
  - 21 %
* - 3
  - Manufacturing of board or subassembly
  - 20 %
* - 4
  - Integration into equipment
  - 15 %
* - 5
  - Integration into the system
  - 15 %
* - 6
  - Operation and maintenance
  - 10 %
* - 7
  - Support activities
  - 9 %
* - 
  - **Total**
  - **100 %**
```


(eee_8_3_3_3)=
## Calculation of the process factor

The questionnaire is split between the development and manufacturing phases and allows evaluating the way these activities are carried out through specific questions (see Annex A.2-12.1 for the details).

The marks obtained for the $Pi_{\text{process}}$ are between 1 and 8.

As a first approach, for preliminary phases like SRR or in some cases, PDR, it is possible to make assumptions regarding the $Pi_{\text{process}}$.

```{admonition} Recommendation
:class: recommendation
For standard space applications, a $Pi_{\text{process}}$ of 1.5 can be considered as a first approach for preliminary phases. For new space approaches (except CubeSats), a value of 2.5 is recommended. For CubeSats, a value of 4 as a default value can be applied. 
```

For phases where the design is consolidated ({term}`PDR`, {term}`CDR`), the calculation should be performed by applying the formula given in Annex A.2.12.1

(eee_8_3_3_4)=
## Methodology for conducting the questionnaire process for space applications

As the FIDES methodology has not been originally developed for space applications, the questionnaire process is not perfectly adapted to space applications. That is why the questionnaire has been reviewed and adapted for this handbook. 

In most cases, the questions from FIDES 2022 apply exactly though; they can be found in part V of the FIDES 2022 handbook. But in some cases, the questions have been adapted to the space applications specificities. These adapted questions are xxxxx. They can be found in Annex A.2.13.

In order to make its application easier by the different entities involved, the questions of the audit have been split and attributed to four different categories of companies:

* Prime contractor for classic design and manufacturing of spacecrafts,
* Sub-contractor for classic design and manufacturing of spacecrafts,
* Prime contractor for “new space” design and manufacturing of spacecrafts,
* Sub-contractor for “new space” design and manufacturing of spacecrafts.

When applying the questionnaire, the responses and demonstrations made during the questionnaire will be used to fix a Satisfaction_mark to the recommendation (levels L1 to L4): 

* L1 = the recommendation is not applied, definite risks regarding reliability,
* L2 = the recommendation is only partially applied, potential risks regarding reliability,
* L3 = the recommendation is practically applied, few risks regarding reliability,
* L4 = the recommendation is fully applied, no significant risk regarding reliability.

Generally, each question is dedicated to either the prime contractor or the sub-contractor. When one of them has an assigned level from L1 to L4, the other is considered as non-applicable (NA). But there are also some questions that can be answered by both; in that case, the worst mark is the one to consider.

Some questions are also non-applicable for both as they are not relevant for the space industry. The list of these non-applicable (NA) questions is the following: 

*	Phase “Specification”: question n°117 (not applicable for satellites and probes, but applicable for launchers/crewed vehicles),
*	Phase “Design”: questions n°87((not applicable for satellites and probes, but applicable for launchers/crewed vehicles), 
*	Phase “Operation and Maintenance”: questions n°20, 35, 47, 63, 66, 67, 73, 74, 75, 77, 78, 79, 80, 81, 82 and 91,
*	Phase “Support Activities”: question n°110.
The space customization of the audit addresses the following points:
*	Removal of some questions not relevant for space applications:
    *	Operation and maintenance: questions n°63, n°66, n°67, n°81;
    *	Ruggedising: question n°168.
*	Change of wording for some questions in order to be more explicit for space applications:
    *	Specification: question n°28;
    *	Design: questions n°39, n°44, n°61;
    *	Manufacturing of board or subassembly: question n°61;
    *	Integration into equipment: question n°61;
    *	Operation and maintenance: questions n°14, n°71, n°72, n°114;
    *	Support process activities: questions n°68, n°76, n°104;
    *	Ruggedising: questions n°157, n°158, n°159, n°160, n°161, n°163, n°167, n°169.
*	Assignment of suggested answers for some questions of the questionnaire depending on the categories of users mentioned above.

```{admonition} Recommendation
:class: recommendation
For space applications such as satellites, probes and crewed vehicles, the new version of the $Pi_{\text{process}}$ questionnaire is recommended to be applied. 
```

In addition, for each question, recommendations are made in terms of the levels anticipated to be applied for the four proposed categories (new space or standard space, prime or subcontractor). The recommendations are proposed in the table in Annex A.2.12.2. Sometimes, the recommendations leave the choices between the four levels, as in the FIDES 2022 standard approach. But sometimes, it proposes less choices (for instance between level 3 and level 4, or only level 4) depending on the standard practices expected. But of course, it is up to the user to fill it as they see fit, whether is corresponds to the recommendations or not.

(eee_8_3_3_5)=
## Process factor for RF / MW components

The process factor $Pi_{\text{process_RF/MW}}$ takes into account how control over the life cycle of a radiofrequency or microwave product influences reliability. This factor is complementary to the process factor $Pi_{\text{process}}$ that remains applicable for microwave and frequency products. $Pi_{\text{process_RF/MW}}$  is issued from the equations and table presented in Annex A.2-14.

The questionnaire consists in 23 questions divided between 7 categories: general, power supply management, burn-in, junction temperature, compression – DC/RF performance & robustness, environmental tests & qualification and reliability.

```{admonition} Note
:class: note
The value obtained through the $Pi_{\text{process_RF/MW}}$ calculation ranges from 0.5 to 4. The default value recommended by the FIDES handbook is 2.2.
```

(eee_8_3_3_6)=
## Process factor for ASIC components

The process factor $Pi_{\text{process_ASIC}}$ takes into account the use of a formal methodology, the level of control of subcontractors and the good control in production and appropriate monitoring during the ASIC manufacturing process. This factor is complementary to the process factor $Pi_{\text{process}}$ that remains applicable for ASIC products.  $Pi_{\text{process_ASIC}}$ is issued from the equations and table presented in Annex A.2-15.

```{admonition} Note
:class: note
The value obtained through the $Pi_{\text{process_ASIC}}$ calculation ranges from 1 to 4. The default value recommended by the FIDES handbook is 2.5.
```

(eee_8_3_3_7)=
## Process factor for hybrids and multi-chip modules

The process factor $Pi_{\text{process_H&M}}$ takes into account of how control over design and manufacturing of the hybrids and multi-chip modules influences reliability. This factor is complementary to the process factor $Pi_{\text{process}}$ that remains applicable for hybrids and multi-chip modules. $Pi_{\text{process_H&M}}$ is issued from the equations and table presented in Annex A.2-16.

```{admonition} Note
:class: note
The value obtained through the $Pi_{\text{process_H&M}}$ calculation ranges from 1 to 4. The default value recommended by the FIDES handbook is 2.5.
```

(eee_8_3_3_8)=
## Power factor for power transistors

The process factor $Pi_{\text{PW}}$  is specific for discrete power semiconductors above 5W. $Pi_{\text{PW}}$  is issued from the equations and table presented in Annex A.2.17.

```{admonition} Note
:class: note
The value obtained through the $Pi_{\text{PW}}$ calculation ranges from 1 to 4. The default value recommended by the FIDES handbook is 2.5.
```

(eee_8_3_3_9)=
## Film factor for plastic film capacitors

The process factor $Pi_{\text{film}}$  is specific for plastic film capacitors.
$Pi_{\text{film}}$  is issued from the equations and table presented in Annex A.2.18. The value obtained through the $Pi_{\text{film}}$ calculation ranges from 1 to 4. The default value recommended by the FIDES handbook is 2.5.