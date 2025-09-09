<!--- Copyright (C) Matrisk GmbH 2022 -->

(misc_10_4)=
# Reliability models for miscellaneous items

There are three reliability models for {term}`miscellaneous items <Miscellaneous item>`:

* **“Standard model”**, for generic miscellaneous items ,

* **“Non-standard model”**, for specific miscellaneous items,

* **“Holistic model”**, for miscellaneous items which are not supported by “standard model” nor by a “non-standard model”.


(misc_10_4_1)=
## Standard model for generic miscellaneous items

A “generic” miscellaneous item is an item classified as “miscellaneous” (refer to the definition provided at the beginning of this part) “AND” for which a reliability model based on IOR is defined as a reference in this handbook (see {numref}`misc-table_10_1`).

The reliability model is either:

1. An exponential distribution (constant failure rate),
2. A constant probability of success or constant probability of failure ( *= 1 - Probability of success*) supported by binomial model, depending on the nature of the item.

The basic reliability data are provided in {numref}`misc-table_10_8` with the associated framework. The reliability “standard model” is then calculated based on the process presented in {numref}`misc_10_5`.


(misc_10_4_2)=
## Non-standard model for specific miscellaneous items

A “specific” miscellaneous item relates to a product which is not fully modelled by {term}`EEE parts <EEE part>` and/or {term}`mechanical parts <Mechanical part>` and which is not listed in the equivalent classes of miscellaneous items in {numref}`misc_10_1`, e.g. Hold Release Mechanism Low Shock presented in {numref}`Figure_5_3`.

The item is neither a mechanism, nor an assembly of EEE parts. It is constituted by different parts such as spring, glue, expansion unit. Since the design is very specific without any IOR data it is necessary to define a dedicated reliability model.

This part of the handbook provides general guidance to define such a reliability model. The approach to calculate the basic reliability data is presented in {numref}`misc_10_7`. The “specific” reliability model is then calculated based on the process presented in {numref}`misc_10_8`.


```{figure} ../../picture/figure4_3.png
---
width: 600px
name: Figure_5_3
---
Miscellaneous (MIS) items reliability modelling logic
```


(misc_10_4_3)=
## Holistic model

A holistic model refers to a model based on the existing reliability handbooks and/or literature without detailed justification related to the design.

The holistic reliability model is then calculated based on the process presented in {numref}`misc_10_5`.


(misc_10_4_4)=
## Dormant failures

Currently no reliability model is provided to support failure modelling in dormant mode for miscellaneous items. The miscellaneous items are from different nature (mix of EEE and mechanics, passive components, tubing, piping…) and it is not relevant to provide a generic rule to derive a dormant failure rate from the active miscellaneous item failure rate.
In case, depending on the mission and on the operations, it is necessary to use a reliability model in dormant mode (no power supply during certain storage duration, no activation for “maintenance”) the user will define a dedicated reliability model (refer to the different methods listed previously) accounting for the specific conditions in storage.