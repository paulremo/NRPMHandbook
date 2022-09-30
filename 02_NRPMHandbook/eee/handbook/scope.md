<!--- Copyright (C) Matrisk GmbH 2022 -->

# Scope

The modeling of {term}`EEE parts <EEE part>` for space systems is particularly important since they contribute significantly to reliability of considered systems. In this chapter, the basics for reliability prediction of {term}`EEE parts <EEE part>` are compiled. These are based on the models of the FIDES approach {cite:p}`eee-UTE-C80-811`, which has been customized and extended.

The models are based on a combined approach of *{term}`physics of failures <Physics of failure>`* and *data*. The models consider temperature, humidity, thermal cycling, vibration, and electrical stress established from the *{term}`physics of failures <Physics of failure>`* of EEE components. The data is used to estimate the basic failure rate of all EEE components. Data originates from in orbit return feedback, from manufacturer data or from data collection of reliability data sources.

```{admonition} Note
:class: note

This chapter is based on the models proposed in FIDES 2009 {cite:p}`eee-UTE-C80-811`. For some models, a space adaptation has been proposed for consideration; it has been applied in the frame of this study and should be considered for the reliability.space calculations. It is presented in the **Rules** or **Recommendations** boxes. Also, after the completion of the {term}`NRPM` study, a 2021 version of FIDES has been released. The changes are indicated for consideration in the present chapter and for future references, but have not been applied on examples, so should not be considered as part of this version of reliability.space. However, it is possible for the user to apply it as *another standard* as described in the flow chart presented in {numref}`Figure_1_1`. Some of these changes (for new models in particular) are marked as **Propositions** in {numref}`eee_4_4`. 
```