# Scope

This chapter deals with the miscellaneous items which are represented by all parts/item (or sets of parts) which are not fully electrical parts, nor fully {term}`mechanical parts <Mechanical part>` nor fully structural parts. The current reliability models ({term}`EEE parts <EEE part>`, {term}`mechanical parts <Mechanical part>`) are not adapted and are not the preferred way to support {term}`reliability predictions <Reliability prediction>` for these items. Therefore, other ways to provide reliability estimates are proposed in this chapter and are detailed in the next sections.

The {numref}`Figure 5.1` represents examples of some miscellaneous parts/items:

(misc_figure4_1)=
```{figure} ../picture/figure4_1.png
---
width: 600px
name: Figure 5.1
---
Examples of some miscellaneous items
```

The list provided below may contain some items that are in fact EEE or mechanical type items, but which are classified as “miscellaneous” because the modelling approach for EEE/mechanical is not considered as completely suitable.

One of the major characteristics of miscellaneous parts/items is that they are various (functions, technologies, nature) and very specific in the sense they are designed to support dedicated and usual functions (e.g. battery) in a satellite:

* They cover a wide range of Technologies (e.g. Chemical, fluidic…) apart “simple” electrical or mechanical technologies,
* They are not fully covered by elementary "EEE or Mechanical" models (e.g. a battery cathode is not a pure {term}`EEE Part <EEE part>`),
* The failures may originate from particular {term}`failure mechanisms <Failure mechanism>` (e.g. catalytic bed degradation for N2H4 thrusters),
* They may be supported by "Innovative" technology (e.g. Plasmic propulsion) with reduced in-orbit return,
* They can be submitted to Wear-out process (e.g. battery calendar aging) depending on their nature.

```{note}
Software is, by nature, a {term}`miscellaneous item <Miscellaneous item>`. Due to its specificity, a dedicated {numref}`syst_4_10` in the system chapter addresses software reliability modelling and therefore software reliability is not considered in the present chapter.
```