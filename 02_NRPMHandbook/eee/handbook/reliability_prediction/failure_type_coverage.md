(eee_4_2)=
# Failure type coverage

This chapter deals with the reliability.space approach for EEE items. For the reliability prediction of EEE components and assemblies, the FIDES guide is used as a base methodology and adapted to the specificities of the space applications for EEE components and units, see {numref}`eee_4_3` for details.

For EEE components and units for space applications, the root causes coverage can be summarized in the table below:

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'eee-table4-1')" placeholder="Search table...">

```{list-table} Coverage of the failures root causes by the EEE reliability prediction methodology.
:name: eee-table4-1
:header-rows: 1
:widths: 30 70

*   - Root cause category
    - Coverage by the EEE reliability prediction methodology
*   - Random failures
    - Considered through the method described in this handbook in {numref}`eee_4_3`
*   - Systematic failures
    - Some items can be taken into account through the process factor ΠProcess calculated through the questionnaire as described in {numref}`eee_4_5`. Such failures must be considered at design or manufacturing level. The role of the questionnaire is to take into account such process in the reliability prediction.
*   - Wear-out failures
    - The coverage of wear-out failures is limited to some EEE components subject to wear-out failures and addressed in {numref}`eee_4_6`; in those cases, the wear out can be considered by applying the methods described in this Paragraph.
*   - {term}`extrinsic failure <Extrinsic failure>`
    - Extrinsic failures considered for EEE components are mainly due to heavy ions, radiations and plasma. They should be avoided by technological choice (for instance by selecting components not sensitive to SEE) or at system level (using redundancy or protection). Robustness tests can also help mounting electronic boards less sensitive to extreme constraints. The consideration of {term}`extrinsic failures <Extrinsic failure>` in the context of reliability prediction is described in {numref}`eee_4_7`.
```

The infant mortality, which represents the period of triggering for most systematic failures, is not directly taken into account in prediction methodologies but the reliability.space handbook provides a method to consider it within the $\Pi_{\text{Process}}$ factor. This factor allows adjusting the failure rate according to the whole design and manufacturing process. Infant mortality for EEE components is generally managed by selecting adapted components lots, performing screening at components, boards or system level. If they are performed in the early phases of the electronic design robustness, tests can also detect some weaknesses.

```{figure} ../../pictures/eee_figure4_2.png
---
width: 600px
name: Figure_1_2
---
Failure rate as a function of time for typical EEE components (bathtub curve).
```

