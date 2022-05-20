# Consideration of software failures

As has already been discussed in Section Error: Reference source not found, software failures are a special case of {term}`SYSTEMATIC FAILURE`s. They result either from errors in the software functional .term}`requirement <REQUIREMENT>`s or from errors in the software development process (software design or coding), and are activated by a specific input or context. The activation of the error in a given context is deterministic (in the sense of a {term}`SYSTEMATIC FAILURE`), but it is not known in advance.

Software failures contribute to the overall (un-)reliability of a system. To avoid major losses due to software failures, a number of strategies and measures are implemented, including defensive programming and exception handling, {term}`FDIR` to facilitate software reprogramming from ground, and general fault avoidance techniques (verification, validation and qualification based on {term}`QUALITY` rules). Software Criticality Analysis helps to target these efforts by defining {term}`QUALITY` levels as a function of the criticality (classified according to the severity of consequences in ECCS-Q-ST-30C Error: Reference source not found) in a purely qualitative process. As for systematic hardware failures, the aim is to reduce the likelihood of software failures, especially those leading to major losses. However, it is necessary to point out that there remains a residual risk no matter what the software {term}`QUALITY` is.

In the following, we distinguish between software .term}`requirement <REQUIREMENT>` errors, which are introduced "outside" the software development process, and design or coding errors that occur during software development. Finally, software errors need to be considered from the perspective of the overall system. The focus is on quantitative modelling aspects; a discussion of the qualitative approaches to analyse software failures (e.g. in terms of propagation, effects, severity) is out of scope for the {term}`RELIABILITY PREDICTION` handbook.

Note that the data set used for the quantitative modelling in Section Error: Reference source not found in principle considers all types of software related major anomalies. The effect of the anomalies at system level is considered with the aid of the {term}`ANOMALY` severity classification.

```{admonition} Todo
:class: todo
miss 3 ref above
```

## Software .term}`requirement <REQUIREMENT>` errors

Errors related to the software .term}`requirement <REQUIREMENT>` specification (including missing, unclear or wrong .term}`requirement <REQUIREMENT>`s) are traditionally considered out of scope in software {term}`RELIABILITY PREDICTION`, which focusses on a software's ability to perform in line with its technical specification (which should specify the outside data and context). However, there is evidence that in complex systems including both hardware and software, software errors resulting from complex or misunderstood .term}`requirement <REQUIREMENT>`s tend to be both more frequent (or more difficult to detect and fix, and thus more frequent in late phases of the development and during operation) and more severe than software development errors, see e.g. Lutz Error: Reference source not found and Leveson Error: Reference source not found. Another aspect related to this class of errors is the importance of good .term}`requirement <REQUIREMENT>`s for the design of {term}`INTERFACE`s between software components and between software and hardware, which also tends to be error-prone and critical for the overall system performance.

Conceptually, there is no big difference between .term}`requirement <REQUIREMENT>` errors for software and hardware, especially when dealing with {term}`INTERFACE`s between the two. However, it may be assumed that the rate of occurrence and the severity classification of their effects may be different.

## Software development errors

The focus of existing software {term}`RELIABILITY PREDICTION` methods and modelsis on software development errors, introduced during software design and coding (w.r.t. the software environment). Various methods and associated tools are available on the market; see e.g. the reviews presented in {term}`IEEE` Std 1633:2016 Error: Reference source not found, Chu et al. Error: Reference source not found or the RIDE1 study Error: Reference source not found. Models can be set up "a priori" at the beginning of the development phase, or "a posteriori", making refinements based on inputs from testing during the development and production of Software (reliability growth modelling). "A posteriori" methods are based on observing the activation of bugs of a specific software during test or operations, aiming at the prediction of the probability of the (future) activation of residual errors after bug fixing in time. In contrast to this, "a priori" models can only be based on the observation of bugs in other software than the one under analysis, generally making use of some relevant characteristics of the software product and development process to determine the error rate.

```{admonition} Todo
:class: todo
miss ref above
```

A major concern with all existing models is how to populate them with relevant data and assumptions:

-   Software development characteristics for "a priori" prediction models

-   Results from software testing, including test coverage, validation of inputs data, qualification in operational environment for "a posteriori" modelling

-   IOR data would certainly be the most relevance source to tune the models, but the consistency of the observed data with new software is questionable, e.g. in terms of software complexity, languages and standards

Another problem is related to the fact that the existing software {term}`RELIABILITY PREDICTION` models were generally developed to assess software systems with target failure rates around $10^{-3}$ to $10^{-4}$ per hour, which is several orders of magnitude higher than what is considered acceptable for space applications, at least when regarding severe effects such as "loss of mission". The confidence in the prediction of failure rates in the order of $10^{-5}$ to $10^{-6}$ per hour is generally low, which is an important limitation for software {term}`RELIABILITY PREDICTION` in space applications and more generally in safety regulated industries, see e.g. Kanoun Error: Reference source not found or Chu et al. Error: Reference source not found.

```{admonition} Todo
:class: todo
miss 2 ref above
```

In summary, it may be concluded that the existing models for software {term}`RELIABILITY PREDICTION` may be used to support qualitative processes (e.g. to monitor trends), but cannot be considered mature enough to derive pertinent reliability figures, especially for the low failure rates required in space applications. Considering that the most relevant root causes of software related failures are anyway out of scope for predictions made with the existing models -- see the discussion of software .term}`requirement <REQUIREMENT>` errors in Section Error: Reference source not found -- there seems to be no added value in using these predictions to support the software design process in space projects.

```{admonition} Todo
:class: todo
miss ref above
```

## Failure propagation in the overall system

To understand the contribution of software failures to the overall system (un-)reliability, it must be understood how detrimental their effect will be at system level. This question cannot be answered by software {term}`RELIABILITY PREDICTION`, as the focus is on what happens within the overall system after a software failure.

The current {term}`QUALITY` assurance processes and design rules for Software are based on qualitative considerations accounting for the system level effects of software failures. The {term}`ECSS` software criticality (severity) assessment does not require, and even explicitly excludes (clause 5.4.2.f), any probabilistic modelling Error: Reference source not found. In practice this means that a quantitative {term}`RELIABILITY PREDICTION` would influence neither the Software development process nor the system failure tolerance. Similar approaches can be found in other industries, see e.g. DO-178C Error: Reference source not found for the aeronautics domain.

A different approach to account for the effects of software at system level is described in ED-153 Error: Reference source not found for safety assurance of software functions in Air Navigation Services (limited to on-ground applications), which allows to select the software assurance level as a function of both the effect severity class and the likelihood of generating such an effect (classified on a qualitative scale with four categories from "Very Possible" to "Extreme Unlikely"). As a result, the required assurance level can be reduced if the likelihood of high severity effects is small, even if they cannot be avoided completely. However, it needs to be emphasized that this approach does not require any {term}`RELIABILITY PREDICTION` for the software itself, the focus is rather on the conditional probability of severe (hardware) effects given software failure. Furthermore, it should be noted that ED-153 takes a rather atypical position on this topic, and many Communication, Navigation and Surveillance and Air Traffic Management (CNS/ATM) Systems use ED-109 instead (also known as DO-278, Error: Reference source not found), which takes a similar position on software {term}`RELIABILITY PREDICTION` as presented in DO-178C Error: Reference source not found for airborne systems.

```{admonition} Todo
:class: todo
miss 2 ref above
```
