<!--- Copyright (C) Matrisk GmbH 2022 -->

(misc_10)=
# Reliability prediction for miscellaneous items

This handbook deals with the {term}`miscellaneous items <Miscellaneous item>` which are represented by all parts/items (or sets of parts) which are not fully electrical parts, nor fully mechanical parts nor fully structural parts. 

The current reliability models (EEE parts, mechanical parts) are not adapted and are not the preferred way to support {term}`reliability predictions <Reliability prediction>` for these items.  Therefore, other ways to provide reliability estimates are proposed in this part and are detailed in the next paragraphs.

The following figure represents examples of some miscellaneous parts/items:

```{figure} ../../picture/figure4_1.png
---
width: 600px
name: Figure_5_1
---
Examples of some miscellaneous items
```

The list provided below may contain some items that are in fact EEE or mechanical type items, but which are classified as “miscellaneous” because the modelling approach for EEE/mechanical is not considered as completely suitable.

One of the major characteristics of miscellaneous parts/items is that they are various (functions, technologies, nature) and very specific in the sense they are designed to support dedicated and usual functions (e.g. battery) in a satellite:
*	They cover a wide range of technologies (e.g. chemical, fluidic…) apart “simple” electrical or mechanical technologies,
*	They are not fully covered by elementary « EEE or mechanical » models (e.g. a battery cathode is not a pure {term}`EEE` part),
*	The failures may originate from particular failure mechanisms (e.g. catalytic bed degradation for N2H4 thrusters),
*	They can be supported by « innovative » technology (e.g. plasmic propulsion) with reduced in-orbit return ({term}`IOR`),
*	They can be submitted to degradation process (e.g. battery calendar aging) depending on their nature.

```{admonition} Note 
:class: note
:name: note_

Software is, by nature, a miscellaneous item. Due to its specificity, a dedicated paragraph ({numref}`syst_11_10` of {ref}`Part 6 – System <sec_sys_handbook>` of this handbook) addresses software reliability modelling and therefore software reliability is not considered in the present part of this handbook.
```

This part of the handbook defines guidance to model reliability of most of the typical miscellaneous items implemented aboard the satellites:

A “standard model” is defined, per family of miscellaneous items (generic items), based on IOR data, to provide a framework for the reliability prediction with room for adaptation through tailoring criteria in order to cope with the contributing factors to the reliability. The reliability data are provided in {numref}`misc-table_10_8`. 
*	When there is no “standard model” (specific items), the current document provides general guidance to support the reliability model building based on available technical data. In that case, referred to as “non-standard model”, the reliability model is developed by the user, based on experience and tests results and/or manufacturers data and/or IOR data, as available. The user will formally justify and submit the reliability model to the prime contractor for approval (refer to {numref}`misc_10_4_2`).
*	When the two previous model categories are not useable, a holistic model can be used, as per existing reliability handbooks and/or literature. It is a general model which does not represent exactly the design of the items, and which is generally not applicable for space systems, which means the {term}`level of confidence <Level of confidence>` is not high.

However, whatever the model is, it is the responsibility of the supplier to identify the selected reliability model enriched with any valuable improvement based on available data (tests data, manufacturer data, IOR data).

The process used to define a miscellaneous ({term}`MIS`) item reliability model is presented in {numref}`Figure_5_2`.

```{admonition} Note XX
:class: note
:name: note_XX
MIS-X, below, addresses the miscellaneous part paragraphs. e.g. MIS-5.5 refers to  {numref}`misc_10_4`.
```

```{figure} ../../picture/figure4_2.png
---
width: 600px
name: Figure_5_2
---
Miscellaneous ({term}`MIS`) items reliability modelling logic
```
