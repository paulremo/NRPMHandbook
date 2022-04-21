# Reliability prediction for miscellaneous items

This chapter deals with the miscellaneous items which are represented by all parts/item (or sets of parts) which are not fully electrical parts, nor fully mechanical parts nor fully structural parts. The current reliability models ([EEE parts](../../folderEEE/mainEEE.md), mechanical parts[]) are not adapted and are not the preferred way to support reliability predictions for these items. Therefore, other ways to provide reliability estimates are proposed in this chapter and are detailed in the next sections.

The [following figure](misc_figure4_1) represents examples of some miscellaneous parts/items:

(misc_figure4_1)=
```{figure} ../picture/figure4_1.png
---
width: 600px
name: figure4_1
---
Examples of some miscellaneous items
```

The list provided below may contain some items that are in fact EEE or mechanical type items, but which are classified as “miscellaneous” because the modelling approach for EEE/mechanical is not considered as completely suitable.

One of the major characteristics of miscellaneous parts/items is that they are various (functions, technologies, nature) and very specific in the sense they are designed to support dedicated and usual functions (e.g. battery) in a satellite:

* They cover a wide range of Technologies (e.g. Chemical, fluidic…) apart “simple” electrical or mechanical technologies,
* They are not fully covered by elementary « EEE or Mechanical » models (e.g. a battery cathode is not a pure EEE part),
* The failures may originate from particular failure mechanisms (e.g. catalytic bed degradation for N2H4 thrusters),
* They may be supported by « Innovative » technology (e.g. Plasmic propulsion) with reduced in-orbit return,
* They can be submitted to Wear-out process (e.g. battery calendar aging) depending on their nature.

```{note}
Software is, by nature, a miscellaneous item. Due to its specificity, a dedicated [Section (§12.10)]() in the system chapter addresses software reliability modelling and therefore software reliability is not considered in the present chapter.
```

The Current document defines guidance to model reliability of most of the typical miscellaneous items implemented aboard the satellites:

* A “standard model” is defined, per family of miscellaneous items (generic items), based on IOR data, to provide a framework for the reliability prediction with room for adaptation through tailoring criteria in order to cope with the contributing factors to the reliability. The reliability data are provided in [Table 4‑8](misc_table4_8).
* When there is no “standard model” (specific items), the Current document provides general guidance to support the reliability model building based on available technical data. In that case, referred to as “non-standard model”, the reliability model is developed by the user, based on experience and tests results and/or manufacturers data and/or IOR data, as available. The user will formally justify and submit the reliability model to the prime contractor for approval. Refer to [Section 4.4.2](misc_4_4_2).
* When the two previous model categories are not useable, a holistic model can be used, as per existing reliability handbooks and/or literature. It is a general model which does not represent exactly the design of the items and which is generally not applicable for Space systems, which means the level of confidence is not high.

However, whatever the model is, it is the responsibility of the supplier to justify the selected reliability model enriched with any valuable improvement based on available data (tests data, manufacturer data, IOR data).

The process used to define a Miscellaneous (MIS) item reliability model is presented in [Figure 4‑2](misc_figure4_2).

```{note}
MIS-X, below, addresses the miscellaneous chapter sections. e.g. MIS-5.5 refers to [Section 4.5.5](misc_4_5_5).
```

(misc_figure4_2)=
```{figure} ../picture/figure4_2.png
---
width: 600px
name: figure4_2
---
Miscellaneous (MIS) items reliability modelling logic.
```