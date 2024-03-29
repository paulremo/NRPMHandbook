<!--- Copyright (C) Matrisk GmbH 2022 -->

(misc_5_4)=
# Reliability models for miscellaneous items
There are three reliability models for {term}`miscellaneous items <Miscellaneous item>`:

* “Standard model”, for generic {term}`miscellaneous items <Miscellaneous item>`,

* “Non-standard model”, for specific {term}`miscellaneous items <Miscellaneous item>`.

* “Holistic model”, for {term}`miscellaneous items <Miscellaneous item>` which are not supported by “standard model” nor by a “non-standard model”.


(misc_5_4_1)=
## Standard model for generic miscellaneous items

A “generic” {term}`miscellaneous item <Miscellaneous item>` is an item classified as “miscellaneous” (refer to the definition provided at the beginning of this chapter) AND for which a reliability model based on IOR is defined as a reference in this Current document (see {numref}`misc-table4-1`).

The reliability model is either 

1. an exponential distribution (constant failure rate) or 
2. a constant probability of success or constant probability of failure ( = 1- Probability of success) supported by Binomial model, depending on the nature of the item.

The basic reliability data are provided in {numref}`misc-table4-8` with the associated framework.

The reliability “standard model” is then calculated based on the process presented in {numref}`misc_5_5`.


(misc_5_4_2)=
## Non-standard model for specific miscellaneous items

A “specific” {term}`miscellaneous item <Miscellaneous item>` relates to a product which is not fully modelled by {term}`EEE parts <EEE part>` and/or {term}`mechanical parts <Mechanical part>` and which is not listed in the equivalent classes of {term}`miscellaneous items <Miscellaneous item>` in {numref}`misc_5_1`.

e.g. Hold Release Mechanism Low Shock presented in {numref}`Figure_5_3`.

The item is neither a mechanism, nor an assembly of {term}`EEE parts <EEE part>`. It is constituted by different parts such as spring, glue, expansion unit. Since the design is very specific without any IOR data it is necessary to define a dedicated reliability model.

The Current document provides general guidance to define such a reliability model: The approach to calculate the basic reliability data is presented in {numref}`misc_5_7`. The “specific” reliability model is then calculated based on the process presented in {numref}`misc_5_8`.

```{figure} ../../picture/figure4_3.png
---
width: 600px
name: Figure_5_3
---
Miscellaneous (MIS) items reliability modelling logic.
```


(misc_5_4_3)=
## Holistic model

A holistic model refers to a model based on the existing reliability handbooks and/or literature without detailed justification related to the design.

The holistic reliability model is then calculated based on the process presented in {numref}`misc_5_5`.


(misc_5_4_4)=
## Dormant failures

Currently no reliability model is provided to support failure modelling in dormant mode for {term}`miscellaneous items <Miscellaneous item>`. The {term}`miscellaneous items <Miscellaneous item>` are from different nature (mix of {term}`EEE` and mechanics, passive components, tubing, piping…) and it is not relevant to provide a generic rule to derive a dormant failure rate from the active {term}`miscellaneous item <Miscellaneous item>` failure rate.

In case, depending on the mission and on the operations, it is necessary to use a reliability model in dormant mode (no power supply during certain storage duration, no activation for “maintenance”) the user will define a dedicated reliability model (refer to the different methods listed previously) accounting for the specific conditions in storage.