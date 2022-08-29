<!--- Copyright (C) Matrisk GmbH 2022 -->

(meca_4_1)=
# Process for mechanical reliability predicition

The approach for mechanical {term}`reliability prediction <Reliability prediction>` in space applications presented in this chapter is based on the following three steps, which are described in different sections:

* {term}`failure mechanism <Failure mechanism>` identification and focus ({numref}`meca_4_4`)
The goal of this step is to decide what needs to be modelled, allowing to focus the analysis on items and {term}`failure mechanisms <Failure mechanism>` with non-negligible probability of failure.
* Selection of suitable methods and models ({numref}`meca_4_5`)
The method selection is centred around the dominating {term}`failure mechanisms <Failure mechanism>` identified in the first step with a focus on {term}`physics of failure <Physics of failure>` methods for {term}`reliability prediction <Reliability prediction>`. A more general overview considering all potential methods and inputs is found in {numref}`meca_4_3`.
* Method implementation ({numref}`meca_4_6` and {numref}`meca_4_7`, {numref}`meca_4_8` for examples)
Methods and Models to derive reliability estimates for different {term}`failure mechanisms <Failure mechanism>` are discussed with a focus on {term}`physics of failure <Physics of failure>` based methods. The implementation of other methods (e.g. {term}`statistical methods <Statistical method>` for a data-based approach) is discussed in {numref}`meca_4_3`.

Before addressing these three steps, the following information is provided:

* {numref}`meca_4_2` contains a discussion of the different {term}`failure root causes <Failure root cause>` (as classified in {numref}`methodologies`) and their coverage during Mechanical {term}`reliability prediction <Reliability prediction>`.
* {numref}`meca_4_3` contains a discussion of the different {term}`reliability prediction <Reliability prediction>` methods and inputs introduced in {numref}`methods`.
