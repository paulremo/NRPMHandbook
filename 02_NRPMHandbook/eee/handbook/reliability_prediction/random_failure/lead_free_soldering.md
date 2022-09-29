<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_4_3_0)=
# Lead-free soldering

The lead-free soldering is currently in the way to replace the tin-lead soldering, which is still mainly used in space applications. This lead-free process factor $\Pi_{\text{LF}}$ is a transition factor considering the duration of effective production with lead-free process. Originally, this factor has been introduced in the beginning of the 2000s when the lead-free process was first introduced in application to the regulations requesting not to use any more lead in electronics. The original objective was to prevent any discrepancies with possible increase of failure occurrences of components due to this unknown type of soldering. Nowadays, experience has shown that no obvious change on failure occurrences has been noticed between electronic boards manufactured with the lead-free process and electronic boards manufactured with the tin-lead process. That is why this factor has almost always been considered as equal to 1 for all industrial applications, meaning it is considered as a mature process. The situation is similar for space applications where a lead-free process is used on electronic boards mounted on the payloads of telecommunication satellites. No change on failure occurrences has been noticed between both processes, so that is why the recommendation is to use a value of this factor equal to 1. Any differences between the manufacturing process with tin-lead soldering and lead-free soldering is handled by the process related factor $\Pi_{\text{Process}}$.

Simplified formula for all families:

With $\Pi_{\text{LF}} = 1$, the general part stress reliability models may be simplified by dropping this factor in the equations:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_4
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}}
```
````

for RF {term}`HF` components:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_5
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessRFHF}}
```
````

and for ASIC components:

````{admonition} Equation
:class: equation
``
``  
```{math}
:label: Equation_1_6
\lambda = \lambda_{\text{Physical}} \cdot \Pi_{\text{PM}} \cdot \Pi_{\text{Process}} \cdot \Pi_{\text{ProcessASIC}}
```
````

