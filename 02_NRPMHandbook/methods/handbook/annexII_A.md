<!--- Copyright (C) Matrisk GmbH 2022 -->

(annexII_A)=
# Annex A Probability distributions

In the following, the parametrization of the probability distributions introduced in Section 6.4 (Model development: Statistical methods) and used in Chapter 7 (Bayesian methods) is given as a common reference.

**Exponential distribution**

```{list-table}

*   - $f_{X}(x) = \ \frac{\beta}{\alpha} \cdot \left( \frac{x}{\alpha} \right)^{\beta - 1}\mathrm{\exp}\left\lbrack - \left( \frac{x}{\alpha} \right)^{\beta} \right\rbrack$
    - $X \geq 0$
    - $E\left\lbrack X \right\rbrack = \alpha \cdot \Gamma\left( 1 + \frac{1}{\beta} \right)$
*   - $F_{X}\left( x \right) = \ 1 - \mathrm{\exp}\left\lbrack - \left( \frac{x}{\alpha} \right)^{\beta} \right\rbrack$
    - $\alpha > 0$
    - $\sqrt{\mathrm{\text{Var}}\left\lbrack X \right\rbrack} = \alpha \cdot \sqrt{\Gamma\left( 1 + \frac{2}{\beta} \right) - \Gamma^{2}\left( 1 + \frac{1}{\beta} \right)}$
```

The mean approximation bias of $\beta \approx \left( v_{x} \right)^{- 1.09}$ is shown in the diagram to the right. 

For coefficients of variation $0.05 \leq v_{X} \leq 1.35$, the approximation error is smaller then $\pm 5\%$.

```{figure} pictures/annexII_A_1.png
---
width: 600px
```

**Gamma distribution**

```{list-table}

*   - $f_{X}(x) = \ \frac{\beta^{\alpha}}{\Gamma\left( \alpha \right)} \cdot x^{\alpha - 1} \cdot \exp( - \beta x)$
    - $X \geq 0$
    - $E\left\lbrack X \right\rbrack = \frac{\alpha}{\beta}$
*   - $F_{X}\left( x \right) = \frac{\Gamma\left( \alpha,\beta x \right)}{\Gamma\left( \alpha \right)}$
    - $\alpha > 0 , \beta > 0$
    - $\alpha > 0$$ | $$\sqrt{\mathrm{\text{Var}}\left\lbrack X \right\rbrack} = \frac{\sqrt{\alpha}}{\beta}$
```

Gamma function: $\Gamma\left( \alpha \right) = \int_{0}^{\infty}{t^{\alpha - 1}\mathrm{\exp}\left( - t \right)\mathrm{d}t}$

Lower incomplete gamma function: $\Gamma\left( \alpha,\beta x \right) = \int_{0}^{\text{βx}}{t^{\alpha - 1}\mathrm{\exp}\left( - t \right)\mathrm{d}t}$


**Normal distribution**


```{list-table}

*   - $f_{X}(x) = \ \frac{1}{\sigma\sqrt{2\pi}} \cdot \exp\left\lbrack - \frac{1}{2}\left( \frac{x - \mu}{\sigma} \right)^{2} \right\rbrack$
    - $X\mathbb{\in R}$
    - $E\left\lbrack X \right\rbrack = \mu$
*   - $F_{X}\left( x \right) = \ \Phi\left( \frac{x - \mu}{\sigma} \right)$
    - $\mu\mathbb{\in R} , \sigma > 0$
    - $\sqrt{\mathrm{\text{Var}}\left\lbrack X \right\rbrack} = \sigma$
```

Standard Normal distribution: $\Phi\left( x \right) = \ \frac{1}{\sqrt{2\pi}} \cdot \int_{- \infty}^{x}{\exp\left\lbrack - \frac{t^{2}}{2} \right\rbrack}\mathrm{d}t$

**Lognormal distribution**

```{list-table}

*   - $f_{X}(x) = \ \frac{1}{\sigma\sqrt{2\pi}} \cdot \exp\left\lbrack - \frac{1}{2}\left( \frac{\ln x - \mu}{\sigma} \right)^{2} \right\rbrack$
    - $X \geq 0$
    - $E\left\lbrack X \right\rbrack = \exp\left( \mu + \frac{\sigma^{2}}{2} \right)$
*   - $F_{X}\left( x \right) = \ \Phi\left( \frac{\ln x - \mu}{\sigma} \right)$
    - $\mu\mathbb{\in R} , \sigma > 0$
    - $\sqrt{\mathrm{\text{Var}}\left\lbrack X \right\rbrack} = \exp\left( \mu + \frac{\sigma^{2}}{2} \right)\sqrt{\exp\left( \sigma^{2} \right) - 1}$
```

**Geometric distribution**

```{list-table}

*   - $p_{X}\left( x \right) = p \cdot \left( 1 - p \right)^{x - 1}$
    - $X = 1,2,3,\ldots$
    - $E\left\lbrack X \right\rbrack = 1/p$
*   - $P_{X}\left( x \right) = 1 - \left( 1 - p \right)^{x}$
    - $0 < p < 1$
    - $\sqrt{\mathrm{\text{Var}}\left\lbrack X \right\rbrack} = \frac{\sqrt{1 - p}}{p}$
```

**Binomial distribution**

```{list-table}

*   - $p_{X}\left( X \right) = \ \begin{pmatrix} n \\   x \\ \end{pmatrix}p^{x}\left( 1 - p \right)^{n - x}$
    - $X = 1,2,\ldots n$
    - $E\left\lbrack X \right\rbrack = np$
*   - $P_{X}\left( x \right) = \sum_{i = 0}^{x}{\begin{pmatrix}n \\ i \\\end{pmatrix}p^{i}\left( 1 - p \right)^{n - i}}$
    - $0 < p < 1$
    - $\sqrt{\mathrm{\text{Var}}\left\lbrack X \right\rbrack} = \sqrt{\text{np}\left( 1 - p \right)}$
```

**Beta distribution**

```{list-table}

*   - $f_{X}\left( x \right) = \frac{1}{B\left( \alpha,\beta \right)}x^{\alpha - 1}\left( 1 - x \right)^{\beta - 1}$
    - $0 \leq X \leq 1$
    - $E\left\lbrack X \right\rbrack = \frac{\alpha}{\left( \alpha + \beta \right)}$
*   - $f_{X}\left( x \right) = \frac{B\left( x;\alpha,\beta \right)}{B\left( \alpha,\beta \right)}$
    - $\alpha > 0 , \beta > 0$
    - $\sqrt{\mathrm{\text{Var}}\left\lbrack X \right\rbrack} = \frac{1}{\alpha + \beta} \cdot \sqrt{\frac{\text{αβ}}{\alpha + \beta + 1}}$
```

Beta function: $B\left( \alpha,\beta \right) = \Gamma\left( \alpha \right) \cdot \Gamma\left( \beta \right)/\Gamma\left( \alpha + \beta \right)$

Incomplete beta function: $B\left( x;\alpha,\beta \right) = \int_{0}^{x}{t^{\alpha - 1}\left( 1 - t \right)^{\beta - 1}\mathrm{d}t}$

**Inverse Gamma distribution**

```{list-table}

*   - $f_{X}(x) = \ \frac{\beta^{\alpha}}{\Gamma\left( \alpha \right)} \cdot \frac{\exp( - \beta x)}{x^{\alpha + 1}}$
    - $X \geq 0$
    - $E\left\lbrack X \right\rbrack = \frac{\beta}{\left( \alpha - 1 \right)}$
*   - $F_{X}\left( x \right) = \frac{\Gamma\left( \alpha,\beta/x \right)}{\Gamma\left( \alpha \right)}$
    - $\alpha > 0, \beta > 0$
    - $\sqrt{\mathrm{\text{Var}}\left\lbrack X \right\rbrack} = \frac{\beta}{\left( \left( \alpha - 1 \right) \cdot \sqrt{\alpha - 2} \right)}$
```

