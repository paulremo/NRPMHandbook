# Structural reliability models and equations

The present section provides limit state functions and guidance for the modelling of several failure mechanisms that are of relevance for mechanical reliability prediction. The content of this Section is largely based on Error: Reference source not found, where some aspects are discussed in more detail.

```{admonition} Todo
:class: todo
Miss ref just above
```

An overview on the failure mechanisms covered by the different subsections is found in Table   4 -10. The limit state functions provided in each dedicated subsection are generally applicable with the “full” structural reliability method described in Section 4.6.1 and in Chapter 6 (Part II). Simplified models in the sense of Section 4.6.2, with analytic solutions for the probability of failure calculations, are provided for some failure mechanisms. Failure mechanisms that can be modelled with the aid of simple stress strength methods (as discussed in Section 4.6.3) are also mentioned in Table   4 -10, but will not discussed any further in the present section.

**Table 4.10: Overview on Failure mechanisms covered in Section 10.7.**

| **Failure mechanism category (cf. Table 10‑4)** | **Limit state functions provided in Section 10.6.5**                                                             | **Simplified model?** | **Section**      |
|-------------------|---------------------------|----------|------------------|
| Distortion                                      | The modelling of distortion is very case specific, but can often be handled with generic stress strength methods |                       | (10.6.1, 10.6.3) |
| Wear                                            | General (adhesive) wear                                                                                          | Yes                   | 10.7.1.1         |
|                                                 | Solid lubricant wear                                                                                             | Yes                   | 10.7.1.2         |
|                                                 | Fluid lubricant wear                                                                                             | Yes                   | 10.7.1.3         |
| Fracture / Fatigue                              | High cycle fatigue                                                                                               | Yes                   | 10.7.2.1         |
|                                                 | Fatigue crack growth                                                                                             | No                    | 10.7.2.2         |
|                                                 | Fracture and low cycle fatigue: stress strength approach                                                         |                       | (10.6.3)         |
| Corrosion                                       | Stress corrosion cracking                                                                                        | No                    | (10.7.3)         |
| Material degradation                            | Radiation damage                                                                                                 | Yes                   | 10.7.4.1         |

Failure mechanisms that are not listed in Table   4 -10 need to be modelled by the handbook user, possibly making use of published information, e.g. in RiAC’s WARP Error: Reference source not foundor Kowal . The “full” structural reliability method may be applied with any limit state function or failure mechanism model, see Section 4.6.1 for details.
The following subsections dedicated to each failure mechanism model always follow the same logic: First the failure mechanism is introduced and a generic limit state function is derived that can be used with general structural reliability methods, possibly requiring numerical methods to derive the probability of failure. Closed form solutions (if available) are then discussed separately under the heading “Simplified failure mechanism model”. 

The derivation of these closed-form solutions is based on several assumptions related to the limit state function and the basic variable modelling, see Section 4.6.3 for a general introduction. The detailed assumptions are specific to the considered failure mechanisms; a short summary is provided together with each simplified model. Note that it is not possible to make a general statement how “exact” the analytic solutions are, e.g. when compared to a “full” structural reliability assessment. However, the assumptions listed can and should be checked to decide whether the simplified model can be used for a given application or whether the “full” structural reliability method is more appropriate.


## Modelling of failures due to mechanical wear

Wear is a complex phenomenon related to the erosion or displacement of material during the contact of solid surfaces. Several types of wear can be distinguished:

* _Adhesive wear_ – displacement and attachment of wear debris from one surface to another.
* _Abrasive wear_ – cutting and deformation of material from a soft surface when a harder surface slides across it (2-body) or due to hard particles between two surfaces (3-body).
* _Fretting wear_ – wear between two solid surfaces experiencing oscillatory relative motion of low amplitude, e.g. induced by vibration.
* _Lubricated wear_ – wear in lubricated contacts. 
* _Fatigue wear_ – weakening of a surface by cyclic loading as wear particles are detached by cyclic crack growth of micro-cracks on the surface. 


Adhesive, abrasive and fretting wear show common behaviour, and it is commonly agreed that for these types the adhesive wear mechanism plays a dominant role. A general wear model with a focus on **adhesive wear** is presented in Section .

**Lubricated wear** is related to the degradation of the lubricant or the lubricant reservoir in lubricated contacts. This regime is typical for bearings, with analytical models provided in Section  for solid lubricated bearings (particularly bearing cages), and in Section  for fluid lubricated bearings.

Finally, **fatigue wear** is caused by cyclic loading and corresponding crack formation. It is the dominant bearing failure mechanism in on-ground applications, where bearing life is traditionally modelled based on the Lundberg-Palmgren theory  with empirical formulas for the “basic life” of a bearing (corresponding to the number of revolutions at which 10% of the bearings have failed). However, in space applications, bearing lifetime is almost never limited by material fatigue, but instead by the degradation of the lubricant . For this reason, fatigue wear is not discussed any further in the following.

### Adhesive wear

Adhesive wear is considered as governing for many wear failures, and is thus typically used for the analytical prediction of wear. The key parameter for the wear estimation is the volume worn away per unit of sliding distance, which can be estimated based on the classical wear model by Archard , here used in the form of Lancaster . Failure due to adhesive wear is then modelled with the following limit state function:


````{admonition} Equation 4.17
:class: equation
``
``  
```{math}
g\left( \text{X}(t) \right) = X_{1} - \Theta \bullet X_{2}(t) = V_{limit} - \Theta \bullet \int_{0}^{T}{K_{H}(t) \bullet S(t) \bullet v(t)\text{d}t}
```
````

$V_{limit}$ is the limiting value for the volume worn away, $\Sigma$ the model uncertainty for the Archard wear model, $K_{H}$ the specific wear rate, $S$ the normal load, $\nu$ the sliding velocity and $T$ the considered time interval. As an alternative to the limiting value for the volume worn away, the model can also be reformulated in terms of the wear depth $d$:


````{admonition} Equation 4.18
:class: equation
``
``  
```{math}
g\left( \text{X}(t) \right) = X_{1} - \Theta \bullet X_{2}(t) = d_{limit} - \Theta \bullet \int_{0}^{T}{K_{H}(t) \bullet \frac{S(t)}{A_{app}} \bullet v(t)\text{d}t}
```
````

Where $d_{limit}$ is the limiting value for the wear depth $d$ and
$A_{app}$ is the area of apparent contact. Both limit state functions
are basically identical, and either one of them can be used for the wear
modelling depending on the problem definition.

By adapting the wear rate, the approach can also be used for other wear
mechanisms, such as fretting or abrasive wear. The nature of the wear
coefficient is generally very complex and its analytical modelling is
difficult. Hence, in practice the Archard model is combined with
experimental data in order to perform lifetime assessments.

**Simplified adhesive wear model**

Assuming that the specific wear rate $K_{H}$ is constant over the whole
mission (in practice it is typically derived from tests under “worst
case” conditions) and that the remaining time dependent variables are
constant during certain deterministic time intervals (e.g. different
mission phases), the limit state function given in Equation 10‑17 can be
simplified as follows:


````{admonition} Equation 4.19
:class: equation
``
``  
```{math}
g\left( \text{X}(t) \right) = X_{1} - \Theta \bullet X_{2}(t) = V_{limit} - \Theta \bullet K_{H} \bullet \sum_{i = 1}^{n_{P}}{P_{i} \bullet t_{i}}
```
````

Where $P_{i} = S_{i} \bullet v_{i}$ corresponds to the sliding work per
time unit (the sliding “power”). Thus, $X_{2}$ is defined as the volume
worn away and $X_{1}$ as the corresponding limiting value. Detailed
variable definitions are given in Table 10‑11.

**Table 4.10: Overview on Failure mechanisms covered in Section 10.7.**

| **List of variables** | **Unit** | **Distribution** | **CoV range** |
|-------------------|---------------------------|----------|------------------|
|$V_{limit}$ : Limiting value (worn volume)| $[m^{3}]$ | (Lognormal) | $0 \leq \nu_{V_{limit}} \leq 0.3$|
|$K_{H}$ : Specific wear rate| $[Pa^{-1} = m^{2} / N]$ | Lognormal | $ \nu_{K_{H}} \ge 0$|
|$n_{p}$ : Number of phases / time intervals| $[-]$ | Deterministic | $-$|
|$P_{i}$ : Sliding work / time unit in interval i| $Nm/s$ | Lognormal | $ \nu_{P_{i}} \ge 0$|
|$t_{i}$ : Length of time interval i| $[s]$ | Deterministic | $-$|
|$\Theta$ : Model uncertainty| $[-]$ | Lognormal | $\nu_{\Theta} = 0.2$|

The expected values and coefficients of variation of  and  are determined as follows:

he expected values and coefficients of variation of $X_{1}$ and $X_{2}$
are determined as follows:


````{admonition} Equation 4.20
:class: equation
``
``  
```{math}
\mu_{X_{1}} = \text{E}\lbrack V_{limit}\rbrack
```
````

````{admonition} Equation 4.21
:class: equation
``
``  
```{math}
\mu_{X_{2}} = \text{E}\left\lbrack K_{H} \right\rbrack \bullet \sum_{i = 1}^{n_{P}}{\text{E}\left\lbrack P_{i} \right\rbrack \bullet t_{i}}
```
````

````{admonition} Equation 4.22
:class: equation
``
``  
```{math}
\nu_{X_{1}} = \nu_{V_{limit}} = \frac{\sqrt{\text{Var}\lbrack V_{limit}\rbrack}}{\text{E}\lbrack V_{limit}\rbrack}
```
````

````{admonition} Equation 4.23
:class: equation
``
``  
```{math}
\nu_{X_{2}} = \sqrt{\nu_{K_{H}}^{2} + \left( 1 + \nu_{K_{H}}^{2} \right) \bullet \frac{\text{Var}\left\lbrack \sum_{i = 1}^{n_{P}}{P_{i} \bullet t_{i}} \right\rbrack}{\left( \sum_{i = 1}^{n_{P}}{\text{E}\left\lbrack P_{i} \right\rbrack \bullet t_{i}} \right)^{2}}}
```
````

````{admonition} Equation 4.24
:class: equation
``
``  
```{math}
\text{Var}\left\lbrack \sum_{i = 1}^{n_{P}}{P_{i} \bullet t_{i}} \right\rbrack = \sum_{i = 1}^{n_{P}}{\text{Var}\left\lbrack P_{i} \right\rbrack \bullet t_{i}^{2}} + 2\sum_{i = 1}^{n_{P}}{\sum_{j = i + 1}^{n_{P}}{\text{Cov}\left\lbrack P_{i},P_{j} \right\rbrack \bullet t_{i} \bullet t_{j}}} =

 \sum_{i = 1}^{n_{P}}{\text{Var}\left\lbrack P_{i} \right\rbrack \bullet t_{i}^{2}} + 2\sum_{i = 1}^{n_{P}}{\sum_{j = i + 1}^{n_{P}}{\rho_{P_{i}P_{j}} \bullet \sqrt{\text{Var}\left\lbrack P_{i} \right\rbrack \bullet \text{Var}\left\lbrack P_{j} \right\rbrack} \bullet t_{i} \bullet t_{j}}}
```  
````                                  

Where $\rho_{P_{i}P_{j}}$ denotes the correlation between the sliding work per time unit in different mission phases. The correlation structure may be defined in a simplified way, e.g. assuming $\rho_{P_{i}P_{j}} = 1$ if the sources of uncertainty in $P$ are the same in mission phase $i$ and $j$ and $\rho_{P_{i}P_{j}} = 0$ if thereare different uncertainty sources. Assuming full correlation increases the coefficient of variation of $X_{2}$, which is conservative for small probabilities of failure.

The approach can be further simplified when considering only one mission
phase (i.e. $n_{P} = 1$), leading to:
$\text{Var}\left\lbrack \sum_{i = 1}^{n_{P}}{P_{i} \bullet t_{i}} \right\rbrack = \text{Var}\lbrack P\rbrack \bullet t^{2}$.
In practice, this may also be used as a conservative simplification for $n_{P} > 1$, taking $P$ from the most critical phase and $t$ as the total length of the mission. Another strong simplification is possible if the uncertainty in the sliding work per time unit is negligibly small. In this case, the uncertainty in the sum may be neglected and the variance term in Equation 10‑24 becomes zero.

With the distributional assumptions in Table 10‑11, an analytic solution for the probability of failure calculations is derived based on a Lognormal approximation for $X_{2}$:


````{admonition} Equation 4.25
:class: equation
``
``  
```{math}
P_{f} (t) = P[X_{1} - X_{2}(t) \bullet \Theta \leq 0]

= \text{Φ}\left( \frac{\text{ln}\left(\text{E}\lbrack\Theta\rbrack \right) - \text{ln}\left(\frac{\mu_{X_{1}}}{\mu_{X_{2}}} \right) + 0.5\left( \text{ln}\left(v_{X_{1}}^{2} + 1 \right) - \text{ln}\left( v_{X_{2}}^{2} + 1 \right) -\text{ln}\left( v_{\Theta}^{2} + 1 \right)\right)}{\sqrt{\text{ln}\left( v_{X_{1}}^{2} + 1 \right)\text{+ln}\left(v_{X_{2}}^{2} + 1 \right)\text{+ln}\left( v_{\Theta}^{2} + 1 \right)}}\right)
```
````

The main assumptions underlying the simplified adhesive wear model are
summarized as follows:

* The mission - or the considered time interval $t$ - is divided into $n_{P}$ intervals with known (deterministic) duration $t_{i}$.
* The wear rate $K_{H}$ is constant over the whole mission (all time intervals $i$).
* The normal load $S_{i}$ and sliding velocity $v_{i}$ (or the sliding work per time unit $P_{i} = S_{i} \bullet v_{i}$) are constant during each time interval $t_{i}$.
* The distributions of all basic variables can be represented by the models listed in Table 10‑11. Other models for $K_{H}$ and $P_{i}$ are possible as long as the distribution of $X_{2}$ may still be approximated by a Lognormal distribution.
* The effect of the Lognormal assumption for $X_{1} = V_{limit}$ has been investigated in \[RD18\] . It may lead to an underestimation of the probability of failure, see Figure 10‑6 below.

Due to the effect of the last assumption, the analytic method should not be used without justification if the coefficient of variation of $X_{1} = V_{limit}$ is larger than $0.3$.

```{figure} ../../pictures/figure4_8.png
---
width: 600px
name: figure4_6
---
Comparison of the analytic solution in Equation 10‑25 (adhesive wear model with Lognormal distributed* $V_{limit}$*) with Monte Carlo results for Normal distributed* $V_{limit}$
```

### Solid lubricant wear

<button id="solid_lubricant_button" class="back-forward-button" onclick="redirect('../../models/solid_lubricant_wear.html')">Go to model</button>

Due to the fact that solid lubricants do not evaporate, they are suitable for extreme temperatures (both cold and hot) and for
applications where contamination could be an issue, e.g. in optical systems. In order to enable on-ground testing and to support the lubrication regime during operations, the lubricant (e.g. sputtered MoS<sub>2</sub>) is stored in special reservoirs such as cages in case of bearings, which are at the same time used to avoid ball collisions in ball bearings. When the lubricant is degraded, new lubricant is provided via the wear of the reservoir.

In the following, solid lubricant wear modelling is described taking example in a ball bearing. The modelling is applicable to other cases of solid lubricant wear; however, the number of revolutions has to be substituted with another suitable measure of sliding distance.

The modelling easily can be adapted from the adhesive wear model given in Section 10.7.1. Wear is realized during cage/ball contact; hence the relation $\int_{0}^{t}{S(t) \bullet v(t)\text{d}t}$ in Equation 10‑17 or Equation 10‑18 represents the work of the ball/cage interaction forces. For the bearing example, time is replaced by the number of revolutions $rev$. The equality
$\int_{0}^{t}{S(t) \bullet v(t)\text{d}t} = \int_{0}^{rev}{\alpha(rev)\text{d}rev}$ can be used for experimental evaluation of the average ball/cage interaction forces, defining a new interaction parameter $\alpha$.

**Simplified solid lubricant wear model**

Using the simplified form of the adhesive wear model in Equation 10‑19 (assuming constant conditions during each mission phase), a limit state function for solid lubricant wear can be derived as follows:


````{admonition} Equation 4.26
:class: equation
``
``  
```{math}
g\left( \text{X}(t) \right) = X_{1} - \Theta \bullet X_{2}(t) = V_{limit} - \Theta \bullet \sum_{i = 1}^{n_{P}}{K_{H,i} \bullet \alpha_{i} \bullet {rev}_{i}}
```
````

$X_{2}$ is defined as the volume worn away and $X_{1}$ as the corresponding limiting value. Detailed variable definitions are given in Table 10‑12. It should be noted that the parameter $\alpha_{i}$ , defined as the average work of ball/cage interaction forces per bearing revolution, will typically be estimated from tests and is thus dependent on the wear rate $K_{H,i}$ . This is the reason why the wear rate cannot easily be taken out of the sum, as in Equation 10‑19 for the general adhesive wear model.

**Table 4.12: Assumed probabilistic models for the simplified solid lubricant wear model.**

| **List of variables** | **Unit** | **Distribution** | **CoV range** |
|-------------------|---------------------------|----------|------------------|
|$V_{limit}$ : Limiting value (worn volume)| $[m^{3}]$ | (Lognormal) | $0 \leq \nu_{V_{limit}} \leq 0.3$|
|$K_{H, i}$ : Specific wear rate in interval i| $[Pa^{-1} = m^{2} / N]$ | Lognormal | $ \nu_{K_{H, i}} \ge 0$|
|$n_{p}$ : Number of phases / time intervals| $[-]$ | Deterministic | $-$|
|$\alpha_{i}$ : Ball-cage interaction in interval i| $Nm/s$ | Lognormal | $ \nu_{\alpha_{i}} \ge 0$|
|$rev_{i}$ : Number of revolutions in interval i| $[-]$ | Deterministic | $-$|
|$\Theta$ : Model uncertainty| $[-]$ | Lognormal | $\nu_{\Theta} = 0.2$|

The expected values and coefficients of variation of $X_{1}$ and $X_{2}$ are determined as follows:


````{admonition} Equation 4.27
:class: equation
``
``  
```{math}
\mu_{X_{1}} = \text{E}\lbrack V_{limit}\rbrack
```
````

````{admonition} Equation 4.28
:class: equation
``
``  
```{math}
\mu_{X_{2}} = \sum_{i = 1}^{n_{P}}{\text{E}\left\lbrack K_{H,i} \bullet \alpha_{i} \right\rbrack \bullet {rev}_{i}} = \sum_{i = 1}^{n_{P}}{\left( \text{E}\left\lbrack K_{H,i} \right\rbrack \bullet \text{E}\left\lbrack \alpha_{i} \right\rbrack + \text{Cov}\left\lbrack K_{H,i},\alpha_{i} \right\rbrack \right) \bullet {rev}_{i}}
```
````

````{admonition} Equation 4.29
:class: equation
``
``  
```{math}
v_{X_{1}} = v_{V_{limit}} = \frac{\sqrt{\text{Var}\lbrack V_{limit}\rbrack}}{\text{E}\lbrack V_{limit}\rbrack}
```
````


````{admonition} Equation 4.30
:class: equation
``
``  
```{math}
v_{X_{2}} = \frac{1}{\mu_{X_{2}}}\sqrt{\sum_{i = 1}^{n_{P}}{\text{Var}\left\lbrack K_{H,i}\alpha_{i} \right\rbrack \bullet {rev}_{i}^{2}} + 2\sum_{i = 1}^{n_{P}}{\sum_{j = i + 1}^{n_{P}}{\text{Cov}\left\lbrack K_{H,i}\alpha_{i},K_{H,j}\alpha_{j} \right\rbrack \bullet {rev}_{i} \bullet {rev}_{j}}}}
```
````

Assuming full correlation to derive the covariance between $K_{H,i}$ and $\alpha_{i}$ (for Equation 10‑28) and for the product of the two variables between different time intervals (for Equation 10‑30) leads to conservative results. As in the general adhesive wear model, the problem can be simplified by considering only one mission phase ($n_{P} = 1$), requiring assumptions only on the covariance in Equation 10‑28; the covariance term in Equation 10‑30 can be dropped if $n_{P} = 1$.

With the distributional assumptions in Table 10‑12, an analytic solution for the probability of failure is derived based on a Lognormal approximation for $X_{2}$:


````{admonition} Equation 4.31
:class: equation
``
``  
```{math}
P_{f} (t) = P[X_{1} - X_{2}(t) \bullet \Theta \leq 0]

= \text{Φ}\left( \frac{\text{ln}\left( \text{E}\lbrack\Theta\rbrack \right) - \text{ln}\left( \frac{\mu_{X_{1}}}{\mu_{X_{2}}} \right) + 0.5\left( \text{ln}\left( v_{X_{1}}^{2} + 1 \right) - \text{ln}\left( v_{X_{2}}^{2} + 1 \right) - \text{ln}\left( v_{\Theta}^{2} + 1 \right) \right)}{\sqrt{\text{ln}\left( v_{X_{1}}^{2} + 1 \right)\text{+ln}\left( v_{X_{2}}^{2} + 1 \right)\text{+ln}\left( v_{\Theta}^{2} + 1 \right)}} \right)
```
````

The main assumptions underlying the simplified solid lubricant wear model are the following:

* The mission is divided into $n_{P}$ intervals with known number of revolutions ${rev}_{i}$.

* The wear rate $K_{H,i}$ and ball-cage interaction work $\alpha_{i}$ are constant during each interval.

* The distributions of all basic variables can be represented by the models listed in Table 10‑12. Other models for $K_{H,i}$ and $\alpha_{i}$ are possible as long as the distribution of $X_{2}$ may still be approximated by a Lognormal distribution.

* *The effect of the Lognormal assumption for $X_{1} = V_{limit}$ may lead to an underestimation of the probability of failure, see \[RD18\] and Figure 10‑6.

Due to the effect of the last assumption, the analytic method should not be used without justification if the coefficient of variation of $X_{1} = V_{limit}$ is larger than 0.3.

### Fluid lubricant wear

In this section a fluid lubricant wear modelling is described taking example in a ball bearing again. The modelling is applicable to other cases of fluid lubricant wear, but the number of revolutions has to be substituted with another measure of sliding distance in this case.

The starting point for the modelling of fluid lubricant wear is the following limit state function, see \[BR79\] for details:


````{admonition} Equation 4.29
:class: equation
``
``  
```{math}
g\left( \text{X}(t) \right) = X_{1} - \Theta \bullet X_{2}(t) = M_{0} - M_{inactive} - \Theta \bullet \frac{\frac{N_{b}}{2} \bullet \left( 1 - \frac{b_{d}}{p_{d}} \bullet \cos\vartheta \right)}{2 \bullet K \bullet \exp\left( - 3.35p_{m} \right)} \bullet rev(t)
```
````

Here, $M_{0}$ denotes the initial mass of the lubricant, $M_{inactive}$ the mass of lubricant not participating in the contact (e.g. due to evaporation), and $\Theta$ the model uncertainty for the associated term, which represents the model to estimate lubricant life described in \[BR79\]. In this term, $N_{b}$ denotes the number of balls in the bearing, $p_{d}$ the pitch diameter, $b_{d}$ the ball diameter, $\vartheta$ the contact angle, $K$ is an empirical constant, $p_{m}$ the contact pressure and $rev$ the number of revoluations during the considered time interval $t$. The variables related to bearing geometry are illustrated in the figure given below.

```{figure} ../../pictures/figure4_9.png
---
height: 600px
name: figure4_7
---
Bearing geometry.
```

**Simplified fluid lubricant wear model**

For the simplified modelling, it is considered sufficient to model only $\Theta$ and $K$ as random variables; all other variables in Equation 10‑32 are assumed to be deterministic. Since the relation for the bearing life from \[BR79\], $K \bullet \text{exp}\left( - 3.35 \bullet p_{m} \right)$, is purely empirical, curve fitting residuals or the distribution of the coefficient $K$ may be used for the probabilistic assessments.

Note that in principle, $M_{inactive}$ may also be treated as stochastic, but its value will generally be only a small fraction of $M_{0}$, typically not exceeding 1-2% when considering only evaporation losses for a bearing with a labyrinth seal under optimal temperature conditions \[BR79\].

It is furthermore assumed that all variables (except for the number of revolutions $rev$) are constant over the whole length of the mission. $M_{inactive}$ should be estimated considering the amount of lubricant that has evaporated (or is not participating in the contact due to other reasons) at the end of the mission. In reality the amount of evaporated lubricant depends on the number of revolutions, thus the proposed approach leads to a slightly conservative estimation.

These assumptions allow the application of Equation 10‑32 without any further simplifications in the limit state function. Thus, $X_{1} = M_{0} - M_{inactive}$ is defined as the amout of lubricant available and $X_{2}$ as the amount of lubricant required for the mission, estimated based on the lubricant life model presented in \[BR79\]. Detailed variable definitions are reminded in Table 10‑13 below.

**Table 4.13: Assumed probabilistic models for the simplified fluid lubricant wear model.**

| **List of variables** | **Unit** | **Distribution** | **CoV range** |
|-------------------|---------------------------|----------|------------------|
|$M_{0}$ : Initial mass of the lubricant in the bearing| $[g]$ | Deterministic | $-$|
|$M_{inactive}$ : Mass of lubricant not participating in the contact (e.g. due to evaporation)| $[g]$ | Deterministic | $-$|
|$K$ : Empirical constant of the lubricant | $[-]$ | Deterministic | $ \nu_{K} > 0$|
|$N_{b}$ : Number of balls in the bearing| $[-]$ | Lognormal | $-$|
|$p_{d}$ : Pitch diameter| $[m]$ | Deterministic | $-$|
|$b_{d}$ : Ball diameter| $[m]$ | Deterministic | $-$|
|$\vartheta$ : Contact angle| $[rad]$ | Deterministic | $-$|
|$p_{m}$ : Contact pressure| $[GPa]$ | Deterministic | $-$|
|$rev$ : Number of revolutions| $[10^{6}]$ | Deterministic | $-$|
|$\Theta$ : Model uncertainty| $[-]$ | Lognormal | $\nu_{\Theta} = 0.2$|

The mean value of $X_{1}$ is determined as $\mu_{X_{1}} = M_{0} - M_{inactive}$ with coefficient of variation $v_{X_{1}} = 0$. For $X_{2}$, the following equations can be used:


````{admonition} Equation 4.33
:class: equation
``
``  
```{math}
\mu_{X_{2}} = \frac{\left( v_{K}^{2} + 1 \right)}{\text{E}\lbrack K\rbrack} \bullet \frac{\frac{N_{b}}{2} \bullet \left( 1 - \frac{b_{d}}{p_{d}} \bullet \cos\vartheta \right)}{2 \bullet \exp\left( - 3.35p_{m} \right)} \bullet rev
```
````

````{admonition} Equation 4.34
:class: equation
``
``  
```{math}
v_{X_{2}} = v_{K} = \frac{\sqrt{\text{Var}\lbrack K\rbrack}}{\text{E}\lbrack K\rbrack}
```
````

The probability of failure is estimated as follows:


````{admonition} Equation 4.35
:class: equation
``
``  
```{math}
P_{f} (t) = P[X_{1} - X_{2}(t) \bullet \Theta \leq 0]

= \text{Φ}\left( \frac{\text{ln}\left( \text{E}\lbrack\Theta\rbrack \right) - \text{ln}\left( \frac{\mu_{X_{1}}}{\mu_{X_{2}}} \right) - 0.5\left( \text{ln}\left( v_{X_{2}}^{2} + 1 \right) + \text{ln}\left( v_{\Theta}^{2} + 1 \right) \right)}{\sqrt{\text{ln}\left( v_{X_{2}}^{2} + 1 \right)\text{+ln}\left( v_{\Theta}^{2} + 1 \right)}} \right)
```
````

The main assumptions underlying the simplified fluid lubricant wear model are the following:

The main assumptions underlying the simplified fluid lubricant wear
model are the following:

* Failures in fluid lubricant wear are dominated by the life of the lubricant.

* The amount of lubricant not participating in the contact (e.g. due to evaporation), $M_{inactive}$, is a small fraction of the initial amount of lubricant, $M_{0}$ (1-2% for bearings with a labyrinth seal under optimal temperature condition).

* The estimate for the (deterministic) variable $M_{inactive}$ is chosen conservatively, e.g. by determining the amount of lubricant evaporated at the end of the mission based on the model provided in \[BR79\].

* The uncertainty in most of the variables listed in Table 10‑13 (except for the empirical constant of the lubricant life model $K$ and the model uncertainty $\Theta$) can be neglected.

* The distributions of $K$ and $\Theta$ can be represented by the models listed in Table 10‑13.

## Modelling of failures due to fatigue

Fatigue is a failure mechanism incurred by cyclic loading, leading to the initiation and extension of cracks, which degrade the strength of materials and structures. Failures due to fatigue can be considered as the consequence of several steps:

1.  Formation of the crack (crack initiation)

2.  Small-crack growth

3.  Large-crack growth

4.  Failure by fracture

Two loading conditions are distinguished:

* **High-Cycle Fatigue**: A high-frequency, low-amplitude loading condition created by structural, acoustic, or aerodynamic vibrations that can propagate flaws to failure.

* **Low-Cycle Fatigue**: A low-frequency, high-amplitude loading condition created by thermal, pressure, or structural loads that can propagate flaws to failure.

Failures due to low-cycle fatigue are driven by accumulated plastic deformations, which are typically not allowed (i.e. the design is restricted to elastic regime). If necessary, low-cycle fatigue can be assessed by the ultimate failure criterion, e.g. by means of non-linear finite element analysis with dedicated failure models or dedicated criteria like Manson-Coffin failure criterion. The probability of failure can be assessed using general structural reliability or stress strength methods.

In the remainder of this section, only high-cycle fatigue is considered.

The standard approach to the fracture control for space projects is presented in ECSS-E-ST-32-01C \[BR80\]. Depending on the criticality, different approaches can be used:

* **Fail-safe** – damage-tolerance design principle, where a structure has redundancy to ensure that failure of one structural element does not cause general failure of the entire structure during the remaining lifetime.

* **Safe life** – fracture-control design principle, for which the largest undetected defect that can exist in the part does not grow to failure when subjected to the cyclic and sustained loads and environments encountered during the lifetime.

* **Low risk of fracture** – e.g. when the stress level is below the endurance limit $C$, then assessment can be performed approximately based on stress and endurance limit only.

Crack formation analysis is typically performed for the fail-safe approach in order to ensure that failure of one redundant structural element does not cause general failure of the entire structure during the remaining lifetime. This analysis is performed based on the <u>S/N curve</u> approach, whose application for reliability modelling is outlined in Section 10.7.2.1.

The safe life principle implies an assessment of the crack growth using <u>fatigue crack growth</u> models, as discussed in Section 10.7.2.2. Environmental properties can also be considered in these models, allowing the consideration of failure mechanisms due to <u>stress corrosion cracking</u> (SCC).

### High cycle fatigue modelling with the S/N curve approach

Crack generation due to high cycle fatigue is most commonly modelled using so-called S/N curves relating a stress level or equivalent stress $S_{eq}$ to the number of cycles to failure, $N_{f}$:

````{admonition} Equation 4.36
:class: equation
``
``  
```{math}
\text{log}_{10}\left( N_{f} \right) = A - B \bullet \text{log}_{10}\left( S_{eq} - C \right)
```
````

Where the equivalent stress is determined as follows:

````{admonition} Equation 4.37
:class: equation
``
``  
```{math}
S_{eq} = S_{\max}(1 - R)^{P} = S_{\max}\left( 1 - \frac{S_{\min}}{S_{\max}} \right)^{P}
```
````

Here, $S_{\min}$ and $S_{\max}$ denoting the minimum and maximum stress during one load cycle and $A$, $B$, $C$ and $P$ are model parameters of the S/N curve model that can be derived from test data, e.g. those presented in MMPDS-12 \[BR66\] or its predecessor, MIL-HDBK-5 \[BR67\]. Of special interest is the parameter $C$, corresponding to the fatigue limit stress, or endurance limit, under which it is assumed that no fatigue failure occurs, thus $N_{f}(S \leq C) \rightarrow \infty$.

The S/N curve is valid for cyclic loading with constant amplitude or equivalent stress. For cyclic loading with varying stress levels, the S/N curve is combined with the Palmgren-Miner accumulation law to estimate the accumulated damage $D_{tot}$ after $N$ stress cycles:

````{admonition} Equation 4.38
:class: equation
``
``  
```{math} 
D_{tot} = \sum_{i = 1}^{N}\frac{1}{N_{f,i}} = \sum_{i = 1}^{N}{10^{- A} \bullet \left( \text{max}\left\lbrack S_{eq,i} - C;0 \right\rbrack \right)^{B}}

= \ \sum_{j = 1}^{k}{N_{j} \bullet 10^{- A} \bullet \left( \text{max}\left\lbrack S_{eq,j} - C;0 \right\rbrack \right)^{B}}
```
````

Where each $S_{eq,i}$ is drawn from the distribution of equivalent stresses derived from the loading process. The second line in Equation 10‑38 is derived by dividing the continuous distribution of $S_{eq,i}$ into a discrete number of bins. In this final expression, $k$ denotes the number of bins, $N_{j}$ the number of cycles in each bin and $S_{eq,j}$ the corresponding equivalent stress representative for each bin.

As a failure criterion, the accumulated damage $D_{tot}$ is compared with a fixed threshold $D_{cr}$ that is typically assumed to be equal to one. However, due to the empirical nature of Miner’s law, failures may also occur at values for $D_{tot}$ that are below or above unity and $D_{cr}$ must be considered as a random variable.

A limit state function for high-cycle fatigue is now derived as follows:

````{admonition} Equation 4.39
:class: equation
``
``  
```{math} 
g\left(X(t)\right) = X_{1} - \Theta \bullet X_{2} = D_{cr} - \Theta \bullet D_{tot}

D_{cr} - \Theta \bullet \sum_{i = 1}^{N(t)}{10^{- A} \bullet \left( \text{max}\left\lbrack S_{eq,i} - C;0 \right\rbrack \right)^{B}}

= D_{cr} - \Theta \bullet \sum_{j = 1}^{k}{N_{j}(t) \bullet 10^{- A} \bullet \left( \text{max}\left\lbrack S_{eq,j} - C;0 \right\rbrack \right)^{B}}
```
````

```{note}
The time dependent formulation in Equation 10‑39 neglects load history effects, which is consistent with the accumulative nature of the Palmgren-Miner model. However, when the goal is to evaluate the probability of failure in different mission phases, the accumulated damage contribution of each load event (e.g. testing, launch, in-orbit) should be evaluated separately.
```

**Simplified S/N curve modelling**

The starting point for the simplified model is the limit state function in Equation 10‑39, with load cycles summarized in bins (last row). For the simplified approach, the variables $N_{j}$, $B$ and $C$ are assumed to be deterministic. The uncertainty associated with the loading $S_{eq,j}$ is then the only uncertainty that cannot be taken out of the sum. A simple approach to model this uncertainty is to multiply deterministic values for $S_{eq,j}$ (e.g. taken from design calculations) with a random stress scaling factor $SSF$ that is applied globally, i.e. taking on the same value for all bins \[BR81\]. If it is furthermore assumed that the endurance limit $C$ equals zero (which is conservative for all applications), the limit state function defined in Equation 10‑39 can be brought into the following simple expression:

````{admonition} Equation 4.40
:class: equation
``
``  
```{math}
g\left( \mathbf{X}(t) \right) = X_{1} - \Theta \bullet X_{2} = D_{cr} - \Theta \bullet D_{tot} = D_{cr} - \Theta \bullet 10^{- A} \bullet {SSF}^{B} \bullet \sum_{j = 1}^{k}{N_{j} \bullet {S_{eq,j}}^{B}}
```
````

Thus, $X_{2}$ is defined as accumulated damage, which is calculated based on the S/N curve approach with the Palmgren-Miner accumulation law, and $X_{1}$ as the corresponding limiting value. Detailed variable definitions are reminded in Table 10‑14.

**Table 4.14: Assumed probabilistic models for the simplified high-cycle fatigue model.**

| **List of variables** | **Unit** | **Distribution** | **CoV range** |
|-------------------|---------------------------|----------|------------------|
|$D_{cr}$ : Threshold for accumulated damage| $[-]$ | Lognormal | $ \nu_{D_{cr}} \ge 0$|
|$A$ : S/N curve parameter : Intercept| $[(log_{10}[N/m^{2}])^{-1}]$ | Normal | $\nu_{A} \ge 0$|
|$B$ : S/N curve parameter : Slope | $[-]$ | Deterministic | $-$|
|$SSF$ : Global stress scalling factor| $[-]$ | Lognormal | $\nu_{SSF} \ge 0$|
|$k$ : Number of bins / load events| $[-]$ | Deterministic | $-$|
|$N_{j}$ : (Equivalent) number of cycles in load | $[-]$ | Deterministic | $-$|
|$S_{eq, j}$ : (Equivalent) stress in load event j| $[-]$ | Deterministic | $-$|
|$\Theta$ : Model uncertainty| $[-]$ | Lognormal | $\nu_{\Theta} = 0.2$|

Without additional information, the expected value of $D_{cr}$ may be assumed to be equal to unity and its coefficient of variation equal to 0.3 (based on JCSS \[BR82\] and Wirsching \[BR83\]). The mean value and coefficient of variation of the stress scaling factor $SSF$ can be determined as follows: First an appropriate coefficient of variation $v_{SSF}$ reflecting all uncertainties associated with the load analysis is chosen, considering the most uncertain load event to be conservative.
The mean value of the stress scaling factor then depends on the definition of the $S_{eq,j}$ values. Design values for fatigue stresses are typically defined as upper fractile values, leading to the following relationship:

````{admonition} Equation 4.41
:class: equation
``
``  
```{math}
\text{E}\lbrack SSF\rbrack = \frac{\sqrt{v_{SSF}^{2} + 1}}{\text{exp}\left( \Phi^{- 1}(\alpha) \bullet \sqrt{\text{ln}\left( v_{SSF}^{2} + 1 \right)} \right)}
```
````

Where $\Phi^{- 1}( \bullet )$ denotes the inverse of the Standard Normal distribution function and $\alpha$ is the probability that the stresses will be smaller than $S_{eq,j}$.

Finally, the expected values and coefficients of variation of $X_{1}$ and $X_{2}$ are determined as follows:

````{admonition} Equation 4.42
:class: equation
``
``  
```{math}
\mu_{X_{1}} = \text{E}\lbrack D_{cr}\rbrack
```
````

````{admonition} Equation 4.43
:class: equation
``
``  
```{math}
\mu_{X_{2}} = \text{E}\left\lbrack 10^{- A} \bullet {SSF}^{B} \right\rbrack \bullet \sum_{j = 1}^{k}{N_{j} \bullet S_{eq,j}^{B}}
```
````

````{admonition} Equation 4.44
:class: equation
``
``  
```{math}
\text{E}\left\lbrack 10^{- A} \bullet {SSF}^{B} \right\rbrack = 10^{- E\lbrack A\rbrack + \frac{1}{2}\text{∙ln}(10) \bullet Var\lbrack A\rbrack} \bullet {E\lbrack SSF\rbrack}^{B} \bullet \left( \sqrt{v_{SSF}^{2} + 1} \right)^{B^{2} - B}
```
````

````{admonition} Equation 4.45
:class: equation
``
``  
```{math}
v_{X_{1}} = v_{D_{cr}} = \frac{\sqrt{\text{Var}\lbrack D_{cr}\rbrack}}{\text{E}\lbrack D_{cr}\rbrack}
```
````

````{admonition} Equation 4.46
:class: equation
``
``  
```{math}
v_{X_{2}} = \sqrt{10^{Var\lbrack A\rbrack\text{∙ln}(10)} \bullet \left( \sqrt{v_{SSF}^{2} + 1} \right)^{B^{2}} - 1}
```
````

With the distributional assumptions in Table 10‑14, an analytic solution for the probability of failure calculations is derived as follows:


````{admonition} Equation 4.47
:class: equation
``
``  
```{math} 
P_{f} (t) = P[X_{1} - X_{2}(t) \bullet \Theta \leq 0]

= \text{Φ}\left( \frac{\text{ln}\left( \text{E}\lbrack\Theta\rbrack \right) - \text{ln}\left( \frac{\mu_{X_{1}}}{\mu_{X_{2}}} \right) + 0.5\left( \text{ln}\left( v_{X_{1}}^{2} + 1 \right) - \text{ln}\left( v_{X_{2}}^{2} + 1 \right) - \text{ln}\left( v_{\Theta}^{2} + 1 \right) \right)}{\sqrt{\text{ln}\left( v_{X_{1}}^{2} + 1 \right)\text{+ln}\left( v_{X_{2}}^{2} + 1 \right)\text{+ln}\left( v_{\Theta}^{2} + 1 \right)}} \right)
```
````

With large coefficients of variation for the S/N curve parameter $A$ and/or the stress scaling factor $SSF$, both $v_{X_{2}}$ and $\mu_{X_{2}}$ can become very large, leading to numerical issues during the estimation of the input required for Equation 10‑47. A more robust solution for the probability of failure is achieved with the aid of a small reformulation:

````{admonition} Equation 4.48
:class: equation
``
``  
```{math}
P_{f} = \text{Φ}\left( \frac{\text{ln}\left( \text{E}\lbrack\Theta\rbrack \right) - \text{ln}\left( \mu_{X_{1}} \right) + \text{ln}\left( \mu_{X_{2}} \right) + 0.5\left( \text{ln}\left( v_{X_{1}}^{2} + 1 \right) - \text{Var}\left\lbrack \text{ln}\left( X_{2} \right) \right\rbrack - \text{ln}\left( v_{\Theta}^{2} + 1 \right) \right)}{\sqrt{\text{ln}\left( v_{X_{1}}^{2} + 1 \right)\text{+Var}\left\lbrack \text{ln}\left( X_{2} \right) \right\rbrack\text{+ln}\left( v_{\Theta}^{2} + 1 \right)}} \right)
```
````

Where $Var\left\lbrack \ln\left( X_{2} \right) \right\rbrack$ and $\ln\left( \mu_{X_{2}} \right)$ can be estimated as follows:

````{admonition} Equation 4.49
:class: equation
``
``  
```{math}
\text{Var}\lbrack\ln\left(X_{2}\right)\rbrack = \nu_{A}^{2} \bullet \text{E}[A]^{2} \bullet \ln(10)^{2} + B^{2} \bullet \ln \left( \nu_{SSF}^{2} + 1 \right)
```
````

````{admonition} Equation 4.50
:class: equation
``
``  
```{math}
\ln \left( \mu_{X_{2}} \right) = 0.5 \bullet \left( E[A]^{2} \bullet \ln (10)^{2} + (B^{2} - B) \bullet \ln \left( \nu_{SSF}^{2} + 1 \right) \right) 

- \text{E}\lbrack A\rbrack \bullet \text{ln}(10) + B \bullet \text{ln}\left( \text{E}\lbrack SSF\rbrack \right) + \text{ln}\left( \sum_{j = 1}^{k}{N_{j} \bullet S_{eq,j}^{B}} \right)
```
````

The main assumptions underlying the simplified high cycle fatigue model
are the following:

* The distributions of all basic variables can be represented by the models listed in Table 10‑14.

* The failure mechanism is described by the S/N curve approach combined with the Palmgren-Miner accumulation law. Load history effects are neglected.

* Uncertainties associated with the (equivalent) number of load cycles $N_{j}$ in each bin / loading block are neglected.

* Uncertainty in the fatigue loading is modelled with the aid of “global” stress scaling factor, assuming the same uncertainty (and full correlation) for the load cycles in different bins.

* The uncertainty associated with the loading is independent of the uncertainty associated with the S/N curve model.

* Any uncertainty in the S/N curve slope $B$ is neglected, or must be included in the probabilistic model for the intercept $A$.

* The endurance limit is set to $C = 0$. The conservatism introduced by this assumption can be reduced by setting the number of cycles $N_{j}$ for all bins with design values $S_{eq,j}$ below the endurance limit to zero. More realistic estimates can only be derived by modelling $C$ as a random variable in Equation 10‑39, requiring numerical methods to estimate the probability of failure.

**Application of the simplified model to low risk items**

The probability of failure for parts with low risk of fracture, e.g. with design stresses below the endurance limit $C$, can in principle also be modelledwith the simplified method introduced above. However, in deterministic
a nalysis for low risk items, it is generally not required to determine the (equivalent) number of cycles $N_{j}$ for each bin, making it difficult to derive the required input even for the simplified method.

To derive a conservative ball park estimate, the sum $\sum_{j = 1}^{k}{N_{j} \bullet S_{eq,j}^{B}}$ may be replaced by
considering only a single load event, i.e. $k = 1$. The stresses $S_{eq}$ should then be taken from the most serious bin (in terms of loads). Also, the number of cycles $N$ should be estimated conservatively, e.g. assuming $N = 10^{8}$ or using a rough estimate for the total number of cycles in all load events (including those with lower stresses). If this turns out to be too conservative, the sum must be calculated as in the general S/N curve approach, considering all bins with their respective stresses and (equivalent) number of cycles. A dedicated modelling of the uncertainties associated with $C$ may be required to further improve the analysis

To allow for a first quick assessment, some reference values for the coefficients of variation and some mean values are provided in Table 10‑15. The values may be assumed to be applicable or conservative for most practical purposes, especially when considering the additional conservatism that has been introduced by assuming $C = 0$.

**Table 4.15: Assumptions for the application of the simplified fatigue model to low risk items.**

| **List of variables** | **Unit** | **Mean** | **CoV** |
|-------------------|---------------------------|----------|------------------|
|$D_{cr}$ : Threshold for accumulated damage| $[-]$ | $E\lbrack D_{cr} \rbrack = 1.0$ | $ \nu_{D_{cr}} = 0.3$|
|$A$ : S/N curve parameter : Intercept| $[(log_{10}[N/m^{2}])^{-1}]$ | User input | $\nu_{A}  = 0.05$|
|$B$ : S/N curve parameter : Slope | $[-]$ | User input | $-$|
|$SSF$ : Global stress scalling factor| $[-]$ | $E\lbrack SSF \rbrack = 0.527$ | $\nu_{SSF} = 0.3$|
|$k$ : Number of bins / load events| $[-]$ | User input | $-$|
|$N_{j}$ : (Equivalent) number of cycles in load | $[-]$ | User input | $-$|
|$S_{eq, j}$ : (Equivalent) stress in load event j| $[-]$ | User input | $-$|
|$\Theta$ : Model uncertainty| $[-]$ | $E\lbrack \Theta \rbrack = 1.0$ | $\nu_{\Theta} = 0.3$|

### Fatigue crack growth modelling

Crack growth calculations are performed to show that the growth of minor
cracks under fatigue loading does not lead to structural failure. The
required deterministic methods are available and implemented in
specialized Software, such as ESACRACK \[BR84\] / NASGRO \[BR85\]. A
probabilistic approach based these models is possible and has been
described by \[BR86\] and \[BR81\], discussing the development and use
of a probabilistic version of ESACRACK. Developments for NASA in the
field of probabilistic fracture mechanics are discussed in \[BR87\]. In
the present section, only the generic approach to probabilistic fracture
analysis is presented together with a short discussion of the required
uncertainty quantification. More detailed information can be found in
Mattrand \[BR81\].

In the space industry fatigue crack growth calculations are typically
performed using a relationship called the NASGRO equation, which was
initially documented by Forman and Mettu \[BR88\]. It is given by
\[BR85\]:

````{admonition} Equation 4.51
:class: equation
``
``  
```{math}
\frac{da}{dN} = C\left\lbrack \left( \frac{1 - f}{1 - R} \right)\mathrm{\Delta}K \right\rbrack^{n}\frac{\left( 1 - \frac{\Delta K_{th}}{\mathrm{\Delta}K} \right)^{p}}{\left( 1 - \frac{K_{\max}}{K_{c}} \right)^{q}}
```
````

With the following variable definitions:

* $N$ number of applied fatigue cycles

* $a$ crack length

* $K = K(S_{i},F_{i},a)$ stress intensity factor, derived from the components of stress $S_{i}$ with geometrical correction factors $F_{i}$ that are derived specifically for each crack case.

* $R = \frac{K_{\min}}{K_{\max}}$ stress ratio

* $f = f(\ R,\alpha,\frac{S_{\max}}{\sigma_{0}})$ crack opening function ($\alpha$ denotes a plane stress/strain constraint factor and $\frac{S_{\max}}{\sigma_{0}}$ the ratio between the maximum applied stress and the flow stress)

* $\mathrm{\Delta}K$ stress intensity factor range

* $\Delta K_{th}$ threshold stress intensity factor (empirical relation, depending on the crack geometry)

* $K_{c}$ critical stress intensity factor (empirical relation, depending on the crack geometry)

* $C,n,p,q$ empirical constants of the crack growth model

Typically fatigue crack growth data has three regions, as depicted in
Figure 10‑8:

1.  Near-threshold region, characterized by very low crack growth (no
    growth below the threshold $\mathrm{\Delta}K_{th}$). This region is
    modelled with the aid of the factor
    $\left( 1 - \frac{\Delta K_{th}}{\mathrm{\Delta}K} \right)^{p}$

2.  Steady-state where the relation between $\mathrm{\Delta}K$ and
    $\frac{da}{dN}$ is linear (in log-log scale), which is modelled with
    the aid of the well-known Paris law
    $\frac{da}{dN} = C\lbrack\mathrm{\Delta}K\rbrack^{n}.$ The factor
    $\frac{(1 - f)}{(1 - R)}$ has been introduced to account for crack
    opening effects

3.  Near instability region, characterized by rapid, unstable crack
    growth, ultimately leading to fracture at $K_{\max}$=$K_{c}$. This
    region is modelled by the factor
    $\left( 1 - \frac{K_{\max}}{K_{c}} \right)^{q}$

```{figure} ../../pictures/figure4_10.png
---
width: 600px
name: figure4_8
---
Typical fatigue crack growth curve.
```

The crack length $a(t)$ as a function of time (or number of cycles) can
be calculated iteratively based on Equation 10‑51. There are three
possible failure criteria associated with crack growth:

1.  Crack instability: It occurs when $K_{\max}\left( a(t) \right)$
    exceeds the relevant fracture toughness $K_{instability}$, which
    depends on the crack geometry, stress/strain state and the
    environment.

2.  Yielding: It occurs if the net section stress
    $\sigma_{n}\left( a(t) \right)$ exceeds the flow stress
    $\sigma_{flow}$, defined as the average between yield and ultimate
    stress.

3.  Crack size: As an optional criterion the maximum allowable crack
    size $a_{\max}$ may be checked.

To perform a reliability analysis, each failure criterion must be
evaluated individually. In principle, this evaluation has to be made at
every iteration to obtain correct reliability estimates as a function of
time. However, in practice it may be sufficient to estimate the
probability of failure at discrete time steps, e.g. at the end of each
load event or mission phase.

When considering each failure criterion individually, the formulation of
limit state functions for a given crack length $a(t)$ is
straight-forward (variable definitions have been given in the definition
of the three failure criteria above:

````{admonition} Equation 4.52
:class: equation
``
``  
```{math}
g_{1}\left( \mathbf{X},a(t) \right) = K_{instability} - K_{\max}\left( a(t) \right)
```
````

````{admonition} Equation 4.53
:class: equation
``
``  
```{math}
g_{2}\left( \mathbf{X,}a(t) \right) = \sigma_{flow} - \sigma_{n}\left( a(t) \right)
```
````

````{admonition} Equation 4.54
:class: equation
``
``  
```{math}
g_{3}\left( \mathbf{X,}a(t) \right) = a_{\max} - a(t)
```
````

Different cases must be distinguished to determine the fracture
toughness $K_{instability}$:

* For through cracks: $K_{instability} = K_{c}$

* For part-through cracks: $K_{instability} = K_{Ie}/(a - tip)$ or $K_{instability} = K_{Ie}/(c - tip)$

* For part-through crack tips that have free surfaces: $K_{instability} = 1.1K_{Ie}$

* For corrosive environments (e.g. Stress Corrosion Cracking): $K_{instability} = K_{eac}$

Where $K_{c}$ denotes the low constraint toughness value, $K_{Ie}$ the
apparent surface flaw toughness and $K_{eac}$ corresponds to
environmentally assisted crack toughness.

Finally, the probability of failure is estimated by combining all
required criteria, e.g. (if only the first two criteria, crack stability
and yielding, apply):

````{admonition} Equation 4.55
:class: equation
``
``  
```{math}
P_{f}(t) = \text{Pr}\left\lbrack g_{1}\left( a(t) \right) \leq 0 \cup g_{2}\left( a(t) \right) \leq 0 \right\rbrack
```
````

As an alternative, $g_{1}$ and $g_{2}$ may also be combined into a
single limit state function by making use of an interaction model, as
described e.g. by \[BR81\]. Note, however, that these models are
generally developed for a specific crack geometry, e.g. assuming a
through crack in an infinite plate. Hence, the applicability to the
crack under consideration shall be assessed when using an interaction
model instead of Equation 10‑55.

Independent of the approach chosen to combine several failure criteria,
reliability is best assessed using Monte Carlo simulations with variance
reduction techniques to reduce the number of required simulations.
FORM/SORM techniques are not recommended due to the iterative nature and
nonlinear behaviour of the crack growth model.

To perform a reliability assessment, the following uncertainties have to
be considered and propagated through the model:

* Loading uncertainty

* Initial crack size uncertainty

* Uncertainties associated with material properties

The probabilistic modelling should explicitly account for the main
uncertainties related to each of these three modelling areas.

**Uncertainties associated with the loading**

For a given crack size and geometry, the stress intensity factor
$K$ is proportional to the stress.
Therefore, the uncertainties in the loading may in principle be modelled
using the same approach as for the S/N-Curve approach (Section
10.7.2.1), i.e. based on a global stress scaling factor
$SSF$ applied to each stress intensity
factor during the calculation. However, a more rigorous treatment of the
loading sequence is required for crack growth analysis than for the S/N
curve approach.

One possible reason for load sequence effects is that the crack growth
model predicts larger final crack sizes for a load sequence starting
with the largest load amplitudes than for another load sequence with the
same load spectrum, but starting with the smallest amplitudes. These
effects are best considered in a simulation framework, where the whole
load process must be simulated for each calculation.

The simulated load sequence may also be used to assess the failure
criteria related to crack instability and yielding. Note that the
maximum stress intensity factor $K_{\max}\left( a(t) \right)$ and the
net section stress $\sigma_{n}\left( a(t) \right)$ in these criteria
depends not only on the crack length, but also on the applied maximum
stress level $S_{max}$, leading to a time
variant reliability problem.

A simplified, conservative approach to determine the probability of
failure during a certain load event or mission phase is to combine the
simulated crack length at the end of the considered time interval with
the simulated maximum stress level during the same interval when
assessing the limit state functions $g_{1}$ and $g_{2}$.

**Uncertainties associated with the initial crack size**

Mechanical parts of space products are usually inspected for defects,
using one of the available non-destructive evaluation (NDE) techniques.
Nevertheless, even if no defect was detected during the inspection, it
cannot be assumed that the inspected part is free of cracks. A
probabilistic model for the crack size distribution after inspection can
be derived based on the following assumptions:

-   A crack is always present, even though it might be very small.

-   The crack aspect ratio is known, allowing to focus on a single
    variable $a$ to describe the crack.

-   The probability distribution of the crack size before inspection is
    ${f'}_{A}(a)$

-   The uncertainty associated with the chosen NDE technique can be
    described with the aid of a probability of detection curve
    $POD(a)$, see e.g. \[BR90\].

-   Only parts without detected defects are used.

Bayes’ theorem (Chapter 7 Part II) can now be used to determine the
probability distribution of the crack size after inspection \[BR91\]:

````{admonition} Equation 4.56
:class: equation
``
``  
```{math}
{f''}_{A}(a) = \frac{\left( 1 - POD(a) \right) \bullet {f'}_{A}(a)}{\int_{0}^{\infty}{\left( 1 - POD(a) \right) \bullet {f'}_{A}(a)\text{\ d}a}}
```
````

In practice, the prior ${f'}_{A}(a)$ will often have
to be determined based on expert judgment, as data on the crack size
distribution before inspection is generally limited. In the case of a
part that is inspected (again) after testing, a probabilistic crack
growth analysis for the applied test loads can be used to derive
${f'}_{A}(a)$.

In \[BR81\],\[BR87\] it is stated that the POD curve may be interpreted
directly as the cumulative distribution function of the crack size after
inspection. This approach leads to the same result as Equation 10‑56
when assuming a noninformative (positive) uniform prior distribution for
the initial crack size.

Further simplifications are possible if only the NDE limit value is
used, which is usually associated with a POD of 90% at a 95% confidence
interval. For a given distribution type and coefficient of variation, a
probabilistic model for the crack size $a$
may then be derived by requiring that the exceedance probability of the
limit value must be equal to 10%.

**Uncertainties associated with material properties**

The NASGRO equation parameters $C,n,p$ and
$q$ are empirical constants whose
distribution can in principle be derived from data analysis using
experimental data. In practice the problem may be simplified by focusing
on those parameters that are relevant for the considered loading and
initial crack size, keeping the remaining parameters constant. To give
an example, focussing on the Paris law region of the NASGRO equation
(region II in Figure 10‑8) is acceptable if it is expected that most of
the crack growth will occur in this region (i.e. for intermediate
initial stress intensity factor ranges and small enough initial crack
size). The strongest possible simplification in this case is to model
only the multiplicative factor $C$ as a random variable, summarizing all
uncertainties associated with the NASGRO equation.

Apart from the NASGRO equation parameters, also the material properties
entering the calculations may be treated as random variables which can
be assessed based on experimental data. The sensitivity of these
variables on the overall result depends on the loading and the initial
crack size. To give an example, the uncertainty associated with the
threshold stress intensity factor range $\mathrm{\Delta}K_{th}$ (e.g.
derived from the distribution of $\mathrm{\Delta}K_{0}$ in Table 10‑16)
may be neglected if the loading does not contain a large number of
cycles with stress intensity factor ranges below this threshold. At the
upper limit, uncertainty in the fracture toughness ($K_{Ic}$ or
$K_{instability}$) and flow stress $\sigma_{flow}$ (or yield stress
$\sigma_{y}$) may be expected to play a major role only if the initial
crack size is close to the critical size \[BR81\].

A literature survey presented by Mattrand \[BR81\] reports coefficients
of variation between 5% and 25% for the fracture toughness and yield
strength of metallic materials (note that some material specific
information may be found e.g. in MMPDS-12 \[BR66\] or its predecessor,
MIL-HDBK-5 \[BR67\]). Typical distributional assumptions for the two
variables are Weibull or Lognormal distributions. A proposal for the
probabilistic modelling of Al 7075 T7351 and Ti 6Al 4V material
properties can be found in Table 10‑16 (taken from \[BR81\]).

**Table 4.16**: robabilistic modelling of material parameters for Al 7075 T7351 and Ti 6Al 4V 

|  |  | **Al 7075 T7351** |  |  | **Ti 6 Al 4V** |  |  |
|----|----|---------------------|----|----|-------------------|----|-----|
| **Variable** | **Dist.** | **Mean** | **ST. dev** | **COV** \[%\] | **Mean** | **ST. dev** | **COV** \[%\] |
| C  \[mm/(MPa.mm1/2)n\]| Lognormal | $1.06.10{-10}$ | $2.65.10{-11}$ | $25$ | $4.89.10{-14}$| $1.17.10{-17}$ | $24$ |
| n | Constant | $2.479$ | $/$ | $/$ | $3.45$| $/$ | $/$ |
| $K_{lc}$  \[MPa.mm1/2\]| Lognormal | $869$ | $86.9$ | $10$ | $1737$| $173.7$ | $10$ |
| $\sigma y$  \[MPa\]| Lognormal | $414$ | $41.4$ | $10$ | $931$| $93.1$ | $10$ |
| $\Delta K_{0}$  \[MPa.mm1/2]| Lognormal | $104$ | $10.4$ | $10$ | $122$| $12.2$ | $10$ |


## Modelling of failures due to corrosion

Compared to terrestrial applications, the relevance of mechanical
failures due to corrosion is generally small, as space systems operate
in vacuum and a short exposure to corrosive environments on ground is
ensured by specific storage conditions. Special types of corrosion that
that are of relevance only for specific parts, e.g. in the propulsion
subsystem, are not discussed in the present handbook. The reader is
referred to the compendium of limit states for space applications that
has been prepared by Kowal \[BR65\], which includes also a discussion of
several types of corrosion.

A corrosion mechanism that is closely related to the crack growth
phenomenon is <u>Stress Corrosion Cracking (SCC)</u>, which is defined
as an environmentally induced formation and growth of cracks in
materials exposed to a corrosive environment. The standard strategy to
avoid failures due to this phenomenon is based on the selection of
suitable materials, making use of a test-based classification by
susceptibility to SCC. Quantitative reliability prediction for this
failure mechanism is difficult, even though the effect of the
environment may in principle be accounted for in crack growth modelling,
see Section 10.7.2.2 for details.

## Modelling of failures due to material degradation

Material degradation is a time-dependent process leading to a reduced
performance of materials (deterioration of the physical properties)
under the influence of environmental actions such as temperature or
radiation. For normal mission durations, these effects can usually be
controlled during the design, e.g. by appropriate material selection.
However, a dedicated modelling may be required for specific
applications, or more broadly for wear-out modelling in the context of
life time extensions beyond the nominal mission.

<u>Thermal degradation</u> is of relevance mainly for non-metallic
materials such as polymers or insulation material. Some basic models
have been reviewed in \[BR65\]. Thermal degradation as an individual
failure mechanism is not discussed any further in the present chapter.
Note, however, that temperature may have to be considered as a
contributor or influencing variable during several other failure
mechanisms, e.g. affecting strength and elasticity parameters for common
materials.

The following subsection provides a brief discussion of <u>radiation
degradation</u> and proposes a generic modelling approach for its
modelling in mechanical reliability predictions.

### Radiation degradation modelling

The spacecraft radiation environment is characterized by the type,
fluence, dose rate, energy spectrum and spatial distribution of nuclear
radiation at the considered point of interest inside and outside the
spacecraft for the duration of the mission. However, the response can be
related directly to the absorbed dose. The dose shall be calculated
taking both external and internal radiation sources into account.

Radiation affects a variety of material parameters including yield
strength and ultimate stress, creep, fatigue, thermal conductivity,
hardness, optical properties etc. Metallic materials are rather
unaffected by radiation, but degradation needs to be considered for
optical materials (e.g. darkening of glass) and for organic materials
such as plastics and polymers \[BR92\]. Due to the complexity of the
phenomena, a quantitative estimation of the radiation effects is
difficult. Therefore, a simplified assessment of the radiation hardness
is performed during the design, taking its basis in an allowable
radiation dose, above which the material exhibits significant change in
properties.

A similar philosophy can be employed for the reliability assessment. In
this case the difference between the radiation dose $D$ and allowable
dose $D_{A}$ is used as a limit state function:

````{admonition} Equation 4.57
:class: equation
``
``  
```{math}
g\left( \text{X} \right) = X_{1} - \Theta \bullet X_{2}(t) = D_{A} - \Theta \bullet D(t)
```
````

Thus, $X_{1}$ is defined as the allowable radiation dose $D_{A}$ and
$X_{2}$ as the cumulated dose $D$ determined as a function of time $t$.

**Simplified radiation degradation model**

A strongly simplified assessment can be achieved by summarizing all
uncertainties associated with the radiation modelling in the model
uncertainty variable $\theta$, allowing to consider both $D$ and $D_{A}$
in Equation 10‑57 as deterministic variables. The resulting simplified
model should be seen mainly as a starting point or placeholder for a
more detailed modelling.

The variable definitions are given in Table 10‑17 below.

**Table 4.17: Assumed probabilistic models for the simplified radiation degradation model.**

| **List of variables** | **Unit** | **Distribution** | **CoV range** |
|-------------------|---------------------------|----------|------------------|
|$D_{A}$ : Allowable radiation dose | $[rad]$ | Deterministic | $-$|
|$D$ : Calculated radiation dose during mission | $[rad]$ | Deterministic | $-$|
|$\Theta$ : Model uncertainty| $[-]$ | Lognormal | $\nu_{\Theta} = 0.4$|


To account for the uncertainties in choosing the deterministic values
for $D$ and $D_{A}$, the coefficient of variation for the model
uncertainty is larger than for the other simplified models presented in
Section 10.7.1 to 10.7.2. The model uncertainty CoV can be reduced if
the model is improved by considering $D$ and/or $D_{A}$ as random
(instead of deterministic) variables with appropriate uncertainty
quantification.

With deterministic dose variables, the expected values of $X_{1}$ and
$X_{2}$ are simply derived as $\mu_{X_{1}} = D_{A}$ and
$\ \mu_{X_{2}} = D$; the corresponding coefficients of variation are
assumed equal to zero. With these assumptions, the analytic solution for
the probability of failure is derived as follows:

````{admonition} Equation 4.58
:class: equation
``
``  
```{math}
P_{f}(t) = \text{P}\left\lbrack X_{1} - X_{2}(t) \bullet \Theta \leq 0 \right\rbrack = \text{Φ}\left( \frac{\text{ln}\left( \text{E}\lbrack\Theta\rbrack \right) - \text{ln}\left( \frac{\mu_{X_{1}}}{\mu_{X_{2}}} \right) - 0.5 \bullet \text{ln}\left( v_{\Theta}^{2} + 1 \right)}{\sqrt{\text{ln}\left( v_{\Theta}^{2} + 1 \right)}} \right)
```
````

The main assumptions underlying the simplified radiation degradation
model are the following:

* Failure occurs if the cumulated radiation dose exceeds the allowable dose limit.

* All uncertainties associated with the cumulated and allowable dose and their determination are summarized in the lognormal distributed model uncertainty variable.
