<!--- Copyright (C) Matrisk GmbH 2022 -->

# Scope

This digital platform mirrors the content of the ECSS-Q-HB-30-02, Issue 1. 

This part deals with the {term}`miscellaneous items <Miscellaneous item>` which are represented by all parts/item (or sets of parts) which are not fully electrical parts, nor fully mechanical parts nor fully structural parts. The current reliability models ({term}`EEE parts <EEE part>`, mechanical parts ) are not adapted and are not the preferred way to support {term}`reliability predictions <Reliability prediction>` for these items. Therefore, other ways to provide reliability estimates are proposed in this part and are detailed in the next sections.

The {numref}`Figure 5.1` represents examples of some miscellaneous parts/items:

```{figure} ../picture/figure4_1.png
---
width: 600px
name: Figure 5.1
---
Examples of some miscellaneous items
```

The list provided belowcan contain some items that are in fact {term}`EEE` or mechanical type items, but which are classified as “miscellaneous” because the modelling approach for EEE/mechanical is not considered as completely suitable.

One of the major characteristics of miscellaneous parts/items is that they are various (functions, technologies, nature) and very specific in the sense they are designed to support dedicated and usual functions (e.g. battery) in a satellite:

* They cover a wide range of technologies (e.g. chemical, fluidic…) apart “simple” electrical or mechanical technologies,
* They are not fully covered by elementary "EEE or mechanical" models (e.g. a battery cathode is not a pure EEE part),
* The failures may originate from particular failure mechanisms (e.g. catalytic bed {term}`degradation <Degradation failure>` for N2H4 thrusters),
* They can be supported by "innovative" technology (e.g. plasmic propulsion) with reduced in-orbit return,
* They can be submitted to wear-out process (e.g. battery calendar aging) depending on their nature.

```{admonition} Note
:class: note
Software is, by nature, a miscellaneous item. Due to its specificity, a dedicated {numref}`syst_11_10` in {ref}`Part 6 – System <sec_sys_handbook>` addresses software reliability modelling and therefore software reliability is not considered in the present part.
```