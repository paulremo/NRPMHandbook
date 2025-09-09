<!--- Copyright (C) Matrisk GmbH 2022 -->

# Scope

This digital platform mirrors the content of the ECSS-Q-HB-30-02, Issue 1. 

The modeling of {term}`EEE parts <EEE part>` for space systems is particularly important since they contribute significantly to reliability of considered systems. In this part, the basics for reliability prediction of EEE parts <EEE part>` are compiled.

The models are based on a combined approach of {term}`physics of failures <Physics of failure>` and data. The models consider temperature, humidity, thermal cycling, vibration, and electrical stress established from the physics of failures of EEE components. The data is used to estimate the basic failure rate of all EEE components. Data originates from in-orbit return feedback, from manufacturer data or from data collection of reliability data sources.

```{admonition} Note
:class: note
This part is based on the models proposed in FIDES 2022. For some models, a space adaptation has been proposed for consideration; it has been applied in the frame of this study and should be considered for the reliability calculations. It is presented in the **Rules**, **Recommendations** boxes or **Propositions** (see {numref}`eee_4_4`). 
Also, after the completion of the {term}`NRPM` study, a 2022 version of FIDES has been released. The changes are indicated for consideration in the present chapter and for future references, but have not been applied on examples, so should not be considered as part of this version of reliability.space. However, it is possible for the user to apply it as *another standard* as described in the flow chart presented in {numref}`Figure_1_1`. Some of these changes (for new models in particular) are marked as **Propositions** in {numref}`eee_4_4`. 
```