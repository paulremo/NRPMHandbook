# Structural reliability models and equations

The present section provides limit state functions and guidance for the modelling of several failure mechanisms that are of relevance for mechanical reliability prediction. The content of this Section is largely based on Error: Reference source not found, where some aspects are discussed in more detail.

```{admonition} Todo
:class: todo
Miss ref just above
```

An overview on the failure mechanisms covered by the different subsections is found in Table   4 -10. The limit state functions provided in each dedicated subsection are generally applicable with the “full” structural reliability method described in Section 4.6.1 and in Chapter 6 (Part II). Simplified models in the sense of Section 4.6.2, with analytic solutions for the probability of failure calculations, are provided for some failure mechanisms. Failure mechanisms that can be modelled with the aid of simple stress strength methods (as discussed in Section 4.6.3) are also mentioned in Table   4 -10, but will not discussed any further in the present section.

**Table 4.10**: Overview on Failure mechanisms covered in Section 10.7.

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

````{math}
:label: Equation 4.17
g\left( \text{X}(t) \right) = X_{1} - \Theta \bullet X_{2}(t) = V_{limit} - \Theta \bullet \int_{0}^{T}{K_{H}(t) \bullet S(t) \bullet v(t)\text{d}t}
````

$V_{limit}$ is the limiting value for the volume worn away, $\Sigma$ the model uncertainty for the Archard wear model, $K_{H}$ the specific wear rate, $S$ the normal load, $\nu$ the sliding velocity and $T$ the considered time interval. As an alternative to the limiting value for the volume worn away, the model can also be reformulated in terms of the wear depth $d$:

````{math}
:label: Equation 4.18
g\left( \text{X}(t) \right) = X_{1} - \Theta \bullet X_{2}(t) = d_{limit} - \Theta \bullet \int_{0}^{T}{K_{H}(t) \bullet \frac{S(t)}{A_{app}} \bullet v(t)\text{d}t}
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

````{math}
:label: Equation 4.19
g\left( \text{X}(t) \right) = X_{1} - \Theta \bullet X_{2}(t) = V_{limit} - \Theta \bullet K_{H} \bullet \sum_{i = 1}^{n_{P}}{P_{i} \bullet t_{i}}
````

Where $P_{i} = S_{i} \bullet v_{i}$ corresponds to the sliding work per
time unit (the sliding “power”). Thus, $X_{2}$ is defined as the volume
worn away and $X_{1}$ as the corresponding limiting value. Detailed
variable definitions are given in Table 10‑11.

**Table 4.10**: Overview on Failure mechanisms covered in Section 10.7.

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

````{math}
:label: Equation 4.20
\mu_{X_{1}} = \text{E}\lbrack V_{limit}\rbrack
````

````{math}
:label: Equation 4.21
\mu_{X_{2}} = \text{E}\left\lbrack K_{H} \right\rbrack \bullet \sum_{i = 1}^{n_{P}}{\text{E}\left\lbrack P_{i} \right\rbrack \bullet t_{i}}
````

````{math}
:label: Equation 4.22
\nu_{X_{1}} = \nu_{V_{limit}} = \frac{\sqrt{\text{Var}\lbrack V_{limit}\rbrack}}{\text{E}\lbrack V_{limit}\rbrack}
````

````{math}
:label: Equation 4.23
\nu_{X_{2}} = \sqrt{\nu_{K_{H}}^{2} + \left( 1 + \nu_{K_{H}}^{2} \right) \bullet \frac{\text{Var}\left\lbrack \sum_{i = 1}^{n_{P}}{P_{i} \bullet t_{i}} \right\rbrack}{\left( \sum_{i = 1}^{n_{P}}{\text{E}\left\lbrack P_{i} \right\rbrack \bullet t_{i}} \right)^{2}}}
````

````{math}
:label: Equation 4.24
\text{Var}\left\lbrack \sum_{i = 1}^{n_{P}}{P_{i} \bullet t_{i}} \right\rbrack = \sum_{i = 1}^{n_{P}}{\text{Var}\left\lbrack P_{i} \right\rbrack \bullet t_{i}^{2}} + 2\sum_{i = 1}^{n_{P}}{\sum_{j = i + 1}^{n_{P}}{\text{Cov}\left\lbrack P_{i},P_{j} \right\rbrack \bullet t_{i} \bullet t_{j}}} =

 \sum_{i = 1}^{n_{P}}{\text{Var}\left\lbrack P_{i} \right\rbrack \bullet t_{i}^{2}} + 2\sum_{i = 1}^{n_{P}}{\sum_{j = i + 1}^{n_{P}}{\rho_{P_{i}P_{j}} \bullet \sqrt{\text{Var}\left\lbrack P_{i} \right\rbrack \bullet \text{Var}\left\lbrack P_{j} \right\rbrack} \bullet t_{i} \bullet t_{j}}}
````                                     

Where $\rho_{P_{i}P_{j}}$ denotes the correlation between the sliding work per time unit in different mission phases. The correlation structure may be defined in a simplified way, e.g. assuming $\rho_{P_{i}P_{j}} = 1$ if the sources of uncertainty in $P$ are the same in mission phase $i$ and $j$ and $\rho_{P_{i}P_{j}} = 0$ if thereare different uncertainty sources. Assuming full correlation increases the coefficient of variation of $X_{2}$, which is conservative for small probabilities of failure.

The approach can be further simplified when considering only one mission
phase (i.e. $n_{P} = 1$), leading to:
$\text{Var}\left\lbrack \sum_{i = 1}^{n_{P}}{P_{i} \bullet t_{i}} \right\rbrack = \text{Var}\lbrack P\rbrack \bullet t^{2}$.
In practice, this may also be used as a conservative simplification for $n_{P} > 1$, taking $P$ from the most critical phase and $t$ as the total length of the mission. Another strong simplification is possible if the uncertainty in the sliding work per time unit is negligibly small. In this case, the uncertainty in the sum may be neglected and the variance term in Equation 10‑24 becomes zero.

With the distributional assumptions in Table 10‑11, an analytic solution for the probability of failure calculations is derived based on a Lognormal approximation for $X_{2}$:

````{math}
:label: Equation 4.25
P_{f} (t) = P[X_{1} - X_{2}(t) \bullet \Theta \leq 0]

= \text{Φ}\left( \frac{\text{ln}\left(\text{E}\lbrack\Theta\rbrack \right) - \text{ln}\left(\frac{\mu_{X_{1}}}{\mu_{X_{2}}} \right) + 0.5\left( \text{ln}\left(v_{X_{1}}^{2} + 1 \right) - \text{ln}\left( v_{X_{2}}^{2} + 1 \right) -\text{ln}\left( v_{\Theta}^{2} + 1 \right)\right)}{\sqrt{\text{ln}\left( v_{X_{1}}^{2} + 1 \right)\text{+ln}\left(v_{X_{2}}^{2} + 1 \right)\text{+ln}\left( v_{\Theta}^{2} + 1 \right)}}\right)
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

Due to the fact that solid lubricants do not evaporate, they are suitable for extreme temperatures (both cold and hot) and for
applications where contamination could be an issue, e.g. in optical systems. In order to enable on-ground testing and to support the lubrication regime during operations, the lubricant (e.g. sputtered MoS<sub>2</sub>) is stored in special reservoirs such as cages in case of bearings, which are at the same time used to avoid ball collisions in ball bearings. When the lubricant is degraded, new lubricant is provided via the wear of the reservoir.

In the following, solid lubricant wear modelling is described taking example in a ball bearing. The modelling is applicable to other cases of solid lubricant wear; however, the number of revolutions has to be substituted with another suitable measure of sliding distance.

The modelling easily can be adapted from the adhesive wear model given in Section 10.7.1. Wear is realized during cage/ball contact; hence the relation $\int_{0}^{t}{S(t) \bullet v(t)\text{d}t}$ in Equation 10‑17 or Equation 10‑18 represents the work of the ball/cage interaction forces. For the bearing example, time is replaced by the number of revolutions $rev$. The equality
$\int_{0}^{t}{S(t) \bullet v(t)\text{d}t} = \int_{0}^{rev}{\alpha(rev)\text{d}rev}$ can be used for experimental evaluation of the average ball/cage interaction forces, defining a new interaction parameter $\alpha$.

**Simplified solid lubricant wear model**

Using the simplified form of the adhesive wear model in Equation 10‑19 (assuming constant conditions during each mission phase), a limit state function for solid lubricant wear can be derived as follows:

````{math}
:label: Equation 4.26
g\left( \text{X}(t) \right) = X_{1} - \Theta \bullet X_{2}(t) = V_{limit} - \Theta \bullet \sum_{i = 1}^{n_{P}}{K_{H,i} \bullet \alpha_{i} \bullet {rev}_{i}}
````

$X_{2}$ is defined as the volume worn away and $X_{1}$ as the corresponding limiting value. Detailed variable definitions are given in Table 10‑12. It should be noted that the parameter $\alpha_{i}$ , defined as the average work of ball/cage interaction forces per bearing revolution, will typically be estimated from tests and is thus dependent on the wear rate $K_{H,i}$ . This is the reason why the wear rate cannot easily be taken out of the sum, as in Equation 10‑19 for the general adhesive wear model.

**Table 4.12**: Assumed probabilistic models for the simplified solid lubricant wear model.

| **List of variables** | **Unit** | **Distribution** | **CoV range** |
|-------------------|---------------------------|----------|------------------|
|$V_{limit}$ : Limiting value (worn volume)| $[m^{3}]$ | (Lognormal) | $0 \leq \nu_{V_{limit}} \leq 0.3$|
|$K_{H, i}$ : Specific wear rate in interval i| $[Pa^{-1} = m^{2} / N]$ | Lognormal | $ \nu_{K_{H, i}} \ge 0$|
|$n_{p}$ : Number of phases / time intervals| $[-]$ | Deterministic | $-$|
|$\alpha_{i}$ : Ball-cage interaction in interval i| $Nm/s$ | Lognormal | $ \nu_{\alpha_{i}} \ge 0$|
|$rev_{i}$ : Number of revolutions in interval i| $[-]$ | Deterministic | $-$|
|$\Theta$ : Model uncertainty| $[-]$ | Lognormal | $\nu_{\Theta} = 0.2$|

The expected values and coefficients of variation of $X_{1}$ and $X_{2}$ are determined as follows:

````{math}
:label: Equation 4.27
\mu_{X_{1}} = \text{E}\lbrack V_{limit}\rbrack
````

````{math}
:label: Equation 4.28
\mu_{X_{2}} = \sum_{i = 1}^{n_{P}}{\text{E}\left\lbrack K_{H,i} \bullet \alpha_{i} \right\rbrack \bullet {rev}_{i}} = \sum_{i = 1}^{n_{P}}{\left( \text{E}\left\lbrack K_{H,i} \right\rbrack \bullet \text{E}\left\lbrack \alpha_{i} \right\rbrack + \text{Cov}\left\lbrack K_{H,i},\alpha_{i} \right\rbrack \right) \bullet {rev}_{i}}
````

````{math}
:label: Equation 4.29
v_{X_{1}} = v_{V_{limit}} = \frac{\sqrt{\text{Var}\lbrack V_{limit}\rbrack}}{\text{E}\lbrack V_{limit}\rbrack}
````

````{math}
:label: Equation 4.30
v_{X_{2}} = \frac{1}{\mu_{X_{2}}}\sqrt{\sum_{i = 1}^{n_{P}}{\text{Var}\left\lbrack K_{H,i}\alpha_{i} \right\rbrack \bullet {rev}_{i}^{2}} + 2\sum_{i = 1}^{n_{P}}{\sum_{j = i + 1}^{n_{P}}{\text{Cov}\left\lbrack K_{H,i}\alpha_{i},K_{H,j}\alpha_{j} \right\rbrack \bullet {rev}_{i} \bullet {rev}_{j}}}}
````

Assuming full correlation to derive the covariance between $K_{H,i}$ and $\alpha_{i}$ (for Equation 10‑28) and for the product of the two variables between different time intervals (for Equation 10‑30) leads to conservative results. As in the general adhesive wear model, the problem can be simplified by considering only one mission phase ($n_{P} = 1$), requiring assumptions only on the covariance in Equation 10‑28; the covariance term in Equation 10‑30 can be dropped if $n_{P} = 1$.

With the distributional assumptions in Table 10‑12, an analytic solution for the probability of failure is derived based on a Lognormal approximation for $X_{2}$:

````{math}
:label: Equation 4.31
P_{f} (t) = P[X_{1} - X_{2}(t) \bullet \Theta \leq 0]

= \text{Φ}\left( \frac{\text{ln}\left( \text{E}\lbrack\Theta\rbrack \right) - \text{ln}\left( \frac{\mu_{X_{1}}}{\mu_{X_{2}}} \right) + 0.5\left( \text{ln}\left( v_{X_{1}}^{2} + 1 \right) - \text{ln}\left( v_{X_{2}}^{2} + 1 \right) - \text{ln}\left( v_{\Theta}^{2} + 1 \right) \right)}{\sqrt{\text{ln}\left( v_{X_{1}}^{2} + 1 \right)\text{+ln}\left( v_{X_{2}}^{2} + 1 \right)\text{+ln}\left( v_{\Theta}^{2} + 1 \right)}} \right)
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

````{math}
:label: Equation 4.29
g\left( \text{X}(t) \right) = X_{1} - \Theta \bullet X_{2}(t) = M_{0} - M_{inactive} - \Theta \bullet \frac{\frac{N_{b}}{2} \bullet \left( 1 - \frac{b_{d}}{p_{d}} \bullet \cos\vartheta \right)}{2 \bullet K \bullet \exp\left( - 3.35p_{m} \right)} \bullet rev(t)
````

Here, $M_{0}$ denotes the initial mass of the lubricant, $M_{inactive}$ the mass of lubricant not participating in the contact (e.g. due to evaporation), and $\Theta$ the model uncertainty for the associated term, which represents the model to estimate lubricant life described in \[BR79\]. In this term, $N_{b}$ denotes the number of balls in the bearing, $p_{d}$ the pitch diameter, $b_{d}$ the ball diameter, $\vartheta$ the contact angle, $K$ is an empirical constant, $p_{m}$ the contact pressure and $rev$ the number of revoluations during the considered time interval $t$. The variables related to bearing geometry are illustrated in the figure given below.

```{figure} ../../pictures/figure4_9.png
---
width: 600px
name: figure4_7
---
Bearing geometry.
```

**Simplified fluid lubricant wear model**

For the simplified modelling, it is considered sufficient to model only $\Theta$ and $K$ as random variables; all other variables in Equation 10‑32 are assumed to be deterministic. Since the relation for the bearing life from \[BR79\], $K \bullet \text{exp}\left( - 3.35 \bullet p_{m} \right)$, is purely empirical, curve fitting residuals or the distribution of the coefficient $K$ may be used for the probabilistic assessments.

Note that in principle, $M_{inactive}$ may also be treated as stochastic, but its value will generally be only a small fraction of $M_{0}$, typically not exceeding 1-2% when considering only evaporation losses for a bearing with a labyrinth seal under optimal temperature conditions \[BR79\].

It is furthermore assumed that all variables (except for the number of revolutions $rev$) are constant over the whole length of the mission. $M_{inactive}$ should be estimated considering the amount of lubricant that has evaporated (or is not participating in the contact due to other reasons) at the end of the mission. In reality the amount of evaporated lubricant depends on the number of revolutions, thus the proposed approach leads to a slightly conservative estimation.

These assumptions allow the application of Equation 10‑32 without any further simplifications in the limit state function. Thus, $X_{1} = M_{0} - M_{inactive}$ is defined as the amout of lubricant available and $X_{2}$ as the amount of lubricant required for the mission, estimated based on the lubricant life model presented in \[BR79\]. Detailed variable definitions are reminded in Table 10‑13 below.

**Table 4.13**: Assumed probabilistic models for the simplified fluid lubricant wear model.

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

````{math}
:label: Equation 4.33
\mu_{X_{2}} = \frac{\left( v_{K}^{2} + 1 \right)}{\text{E}\lbrack K\rbrack} \bullet \frac{\frac{N_{b}}{2} \bullet \left( 1 - \frac{b_{d}}{p_{d}} \bullet \cos\vartheta \right)}{2 \bullet \exp\left( - 3.35p_{m} \right)} \bullet rev
````
````{math}
:label: Equation 4.34
v_{X_{2}} = v_{K} = \frac{\sqrt{\text{Var}\lbrack K\rbrack}}{\text{E}\lbrack K\rbrack}
````
The probability of failure is estimated as follows:

````{math}
:label: Equation 4.35
P_{f} (t) = P[X_{1} - X_{2}(t) \bullet \Theta \leq 0]

= \text{Φ}\left( \frac{\text{ln}\left( \text{E}\lbrack\Theta\rbrack \right) - \text{ln}\left( \frac{\mu_{X_{1}}}{\mu_{X_{2}}} \right) - 0.5\left( \text{ln}\left( v_{X_{2}}^{2} + 1 \right) + \text{ln}\left( v_{\Theta}^{2} + 1 \right) \right)}{\sqrt{\text{ln}\left( v_{X_{2}}^{2} + 1 \right)\text{+ln}\left( v_{\Theta}^{2} + 1 \right)}} \right)
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




