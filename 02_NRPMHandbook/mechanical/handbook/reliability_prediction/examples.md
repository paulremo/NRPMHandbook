(meca_4_8)=
# Examples

The following sections provide some examples for the application of the methods introduced in Paragraph{numref}`meca_4_6` and {numref}`meca_4_7`.

(meca_4_8_1)=
## Simplified wear modelling: Solid lubricant wear

In this example the simplified method presented in {numref}`meca_4_7_1` is utilized to model the reliability of a bearing. The considered failure mechanism is solid lubricant wear.

(meca_example_1_given)=
````{dropdown} **Given**
A solid lubricated ball bearing is considered. The basic variables, necessary to model the failure mechanism, are modelled as follows (please note that the values indicated in the following table serve as an illustrative example).

```{list-table} Variables considered in the example
:name: meca-examples-table-1

* - <table class="myTable" id="meca_examples_table_1">
        <thead>
            <tr>
                <th colspan="2">List of variables</th>
                <th>Unit</th>
                <th>Distribution</th>
                <th>Expected value</th>
                <th>CoV</th>
            </tr>
        </thead>
        <tr>
            <td><span class="math">\(V_{\text{limit}}\)</span></td>
            <td>Limiting value (worn volume)</td>
            <td><span class="math">\(m^3\)</span></td>
            <td>Lognormal</td>
            <td><span class="math">\(6\cdot 10^{-8}\)</span></td>
            <td><span class="math">\(0.2\)</span></td>
        </tr>
        <tr>
            <td><span class="math">\(n_P\)</span></td>
            <td>Number of phases / time intervals</td>
            <td>-</td>
            <td>Deterministic</td>
            <td><span class="math">\(1\)</span></td>
            <td>-</td>
        </tr>
        <tr>
            <td><span class="math">\(K_{H,i}\)</span></td>
            <td>Specific wear rate in interval <span class="math">\(i\)</span></td>
            <td><span class="math">\(Pa^{-1}=N/m^2\)</span></td>
            <td>Lognormal</td>
            <td></td>
            <td><span class="math">\(0.6\)</span></td>
        </tr>
        <tr>
            <td><span class="math">\(\alpha_i\)</span></td>
            <td>Ball-cage interaction in interval <span class="math">\(i\)</span></td>
            <td><span class="math">\(Nm\)</span></td>
            <td>Lognormal</td>
            <td><span class="math">\(0.033\)</span></td>
            <td><span class="math">\(0.1\)</span></td>
        </tr>
        <tr>
            <td><span class="math">\(\text{rev}_i\)</span></td>
            <td>Number of revolutions in interval <span class="math">\(i\)</span></td>
            <td>-</td>
            <td>Deterministic</td>
            <td><span class="math">\(10^{6}\)</span></td>
            <td>-</td>
        </tr>
        <tr>
            <td><span class="math">\(\theta\)</span></td>
            <td>Model uncertainty</td>
            <td>-</td>
            <td>Lognormal</td>
            <td><span class="math">\(1.2\)</span></td>
            <td><span class="math">\(0.2\)</span></td>
        </tr>
    </table>

```

In this example, it is assumed that only one mission phase is relevant, i.e., $n_P=1$.

````

(meca_example_1_rel_model)=
````{dropdown} **Reliability model**
To estimate the probability of failure with the simplified methods, the following need to be known:

- the expected value of the limiting volume;
- the coefficient of variation of the limiting volume;
- the expected value of the volume worn away;
- the coefficient of variation of the volume worn away.

According to Eq. {eq}`Equation_3_20`, the expected value of the limiting volume is:
```{math}
:label: eq_example_1
\text{E}\left[ X_1 \right] = \text{E}\left[ V_{\text{limit}}\right ] = 6\cdot 10^{-8}
```

According to Eq. {eq}`Equation_3_22`, the coefficient of variation of the limiting value is:
```{math}
:label: eq_example_2
v_{X_1}=v_{V_{\text{limit}}}=\frac{\sqrt{\text{Var}\left[V_{\text{limit}}\right]}}{\text{E}\left[V_{\text{limit}}\right]}=\frac{\text{E}\left[V_{\text{limit}}\right]\cdot0.2}{\text{E}\left[V_{\text{limit}}\right]}=0.2
```

To calculate the coefficient of variation of the volume worn away, the covariance of $K_H$ and $\alpha$ is calculated under the assumption of full correlation between $K_H$ and $\alpha$:
```{math}
:label: eq_example_3
\begin{align}
\text{Cov}\left[K_H,\alpha\right] &= \sigma_{K_H}\cdot\sigma_\alpha=v_{K_H}\cdot \text{E}\left[K_H\right]\cdot v_\alpha\cdot \text{E}\left[\alpha\right]\\
&=0.6\cdot4\cdot10^{-15}\cdot0.1\cdot0.033=7.92\cdot10^{-18}
\end{align}
```

The variance of the product $K_H\cdot\alpha$ is calculated as:
```{math}
:label: eq_example_4
\begin{align}
\text{Var}\left[K_H\cdot\alpha\right]&=Var_{K_H}\cdot \text{Var}_\alpha+Var_{K_H}E\left[\alpha\right]^2+Var_\alpha E\left[K_H\right]^2\\
&=5.76\cdot10^{-30}\cdot1.1\cdot10^{-5}+5.76\cdot10^{-30}\cdot\left(0.033\right)^2+1.1\cdot10^{-5}\cdot\left(4\cdot10^{-15}\right)^2\\
&=6.51\cdot10^{-33}
\end{align}
```

According to Eq. {eq}`Equation_3_22`, the expected value of the volume worn away is:
```{math}
:label: eq_example_5
\begin{align}
\text{E}\left[X_2\right]&=\text{E}\left[K_H\cdot\alpha\right]\cdot \text{rev}=\left(\text{E}\left[K_H\right]\cdot \text{E}\left[\alpha\right]+\text{Cov}\left[K_H,\alpha\right]\right)\cdot \text{rev}\\
&=\left(4\cdot10^{-15}\cdot0.033+7.92\cdot10^{-18}\right)10^6\\
&=7\cdot10^{-8}
\end{align}
```
and the coefficient of variation of the volume worn away is according to Eq. {eq}`Equation_3_23`: 
```{math}
:label: eq_example_6
v_{X_2}=\frac{1}{\text{E}\left[X_2\right]}\cdot \text{rev}\cdot\sqrt{Var\left[K_H\cdot\alpha\right]}=\frac{1}{1.4\cdot10^{-10}}\cdot10^6\cdot\sqrt{6.51\cdot10^{-33}}=0.577
```

Finally, the probability of failure is calculated according to Eq. {eq}`Equation_3_24`
```{math}
:label: eq_example_7
\begin{align}
P_f&=P\left[X_1-X_2\cdot\Theta\le0\right]\\
&=\Phi\left(\frac{ln\left(E\left[\Theta\right]\right)-ln\left(E\left[X_1\right]/E\left[X_2\right]\right)+0.5\cdot\left(ln\left(v_{X_1}^2+1\right)-ln\left(v_{X_2}^2+1\right)-ln\left(v_\Theta^2+1\right)\right)}{\sqrt{ln\left(v_{X_1}^2+1\right)+ln\left(v_{X_2}^2+1\right)+ln\left(v_\Theta^2+1\right)}}\right)\\
&=\Phi\left(\frac{ln\left(1.2\right)-ln\left(6\cdot10^{-8}/1.4\cdot10^{-10}\right)+0.5\cdot\left(ln\left(0.2^2+1\right)-ln\left(0.577^2+1\right)-ln\left(0.2^2+1\right)\right)}{\sqrt{ln\left(0.2^2+1\right)+ln\left(0.577^2+1\right)+ln\left(0.2^2+1\right)}}\right)\\
&=\Phi\left(-2.709\right)=0.0034,
\end{align}
```
where $\Phi$ denotes the cumulative standard normal distribution.

````

(meca_4_8_2)=
## Updating of reliability estimates derived from structural reliability methods

This example is based on the example provided in {numref}`meca_4_8_1`, i.e., it considers a bearing that fails from solid lubricant wear. The structural reliability model is established with the simplified methods in {numref}`meca_4_7_1`. Upon availability of new data on the reliability of the bearing in ques-tion, the model is updated making use of the approach described in {numref}`meca_4_6_5`.

(meca_example_2_given)=
````{dropdown} **Given**
A solid lubricated ball bearing is considered. The basic variables, necessary to establish a reliability model in accordance with the simplified method described in {numref}`meca_4_7_1_2`, are modelled in the same way as in the example in {numref}`meca_4_8_1` shown in {numref}`meca-examples-table-1`.

From {numref}`meca_4_7_1_2` it follows:
```{math}
:label: eq_example_8
\text{E}\left[ X_1 \right] = \text{E}\left[ V_{\text{limit}}\right ],
```
and under the assumption of a single mission phase:
```{math}
:label: eq_example_9
\text{E}\left[ X_2 \right] = \text{E}\left[ K_H\cdot\alpha \right]\cdot\text{rev} =  (\text{E}\left[ K_H\right]\cdot\text{E}\left[ \alpha\right] + \text{Cov}\left[ K_H, \alpha\right])\cdot\text{rev}.
```
````

(meca_example_2_prior)=
````{dropdown} **Prior model**
The probability of failure in function of the number of revolutions $\text{rev}$ is modelled. According to {numref}`meca_4_6_5`, it can be approximated with the Lognormal distribution:
```{math}
:label: eq_example_10
\text{rev}\sim\text{Lognormal}(\mu_{\text{rev}, \sigma_{\text{rev}}}).
```

The coefficients of variation $v_{X_1}$ and $v_{X_2}$ have already been determined in the example in {numref}`meca_4_8_1`.

```{math}
:label: eq_example_11
\sigma_{\text{rev}}=\sqrt{ln\left(v_{X_1}^2+1\right)+ln\left(v_{X_2}^2+1\right)}=\sqrt{ln\left(0.2_^2+1\right)+ln\left(0.577_^2+1\right)}=0.571.
```

The location parameter $\mu_{\text{rev}}$ is considered uncertain and is modelled with a Normal distribution (conjugate prior, see {numref}`methods`).

```{math}
:label: eq_example_12
\mu_{\text{rev}}\sim\text{Normal}(\mu',\sigma')
```

According to {numref}`meca_4_6_5`, $p=\frac{E\left[X_1\right]}{E\left[X_2\right]}$ has to be brought to the form $p=k\cdot\frac{1}{rev}$. Using the relations in Eq. {eq}`Equation_3_24` and Eq. {eq}`Equation_3_28`.

```{math}
:label: eq_example_13
p=\frac{E\left[X_1\right]}{E\left[X_2\right]}=\frac{E\left[V_{\text{limit}}\right]}{E\left[K_H\cdot\alpha\right]\cdot \text{rev}},
```
```{math}
:label: eq_example_14
k=\frac{E\left[V_{\text{limit}}\right]}{E\left[K_H\cdot\alpha\right]}=\frac{6\cdot10^{-8}}{1.40\cdot10^{-16}}=4.29\cdot10^8.
```

The prior hyperparameters for the distribution of $\mu_{\text{rev}}$ are estimated according to Eq. {eq}`Equation_3_13` and Eq. {eq}`Equation_3_14`:
```{math}
:label: eq_example_15
\begin{algin}
\mu\prime&=ln\left(k\right)-ln\left(E\left[\Theta\right]\right)+0.5\cdot\left(ln\left(v_\Theta^2+1\right)-ln\left(v_{X_1}^2+1\right)+ln\left(v_{X_2}^2+1\right)\right)\\
&=ln\left(4.29\cdot10^8\right)-ln\left(1.2\right)+0.5\cdot\left(ln\left(0.2_^2+1\right)-ln\left(0.2_^2+1\right)+ln\left(0.577_^2+1\right)\right)\\
&=19.84
\end{align}
```
```{math}
:label: eq_example_16
\sigma\prime=\sqrt{ln\left(v_\Theta^2+1\right)}=\sqrt{ln\left(0.2_^2+1\right)}=0.198
```
````

(meca_example_2_data)=
````{dropdown} **Additional data**
Additional data on the reliability of the bearing is given in the table below.

```{list-table} Additional data considered in the example
:name: meca-examples-table-2

* - Specimen
  - Revolutions to failure $\widehat{{\text{rev}}_i}$
* - 1
  - $2.5\cdot{10}^8$
* - 2
  - $2.4\cdot{10}^8$
* - 3
  - $2.7\cdot{10}^8$
* - 4
  - $3.1\cdot{10}^8$
* - 5
  - $3.4\cdot{10}^8$
* - 6
  - $3.8\cdot{10}^8$
* - 7
  - $5.1\cdot{10}^8$

```
````

(meca_example_2_updating)=
````{dropdown} **Updating**
With the additional data, the reliability model for the bearing can be updated. The updating is done using the equations for the analytic approach using conjugate priors, given in {numref}`methods`:
```{math}
:label: eq_example_17
\sigma\prime\prime=\frac{1}{\sqrt{\frac{1}{\left(\sigma\prime\right)^2}+\frac{n_{data}}{\left(\sigma_{rev}\right)^2}}}=\frac{1}{\sqrt{\frac{1}{\left(0.198\right)^2}+\frac{7}{\left(0.571\right)^2}}}=0.145,
```
```{math}
:label: eq_example_18
\mu\prime\prime=\left(\sigma\prime\prime\right)^2\cdot\left(\frac{\mu\prime}{\sigma\prime^2}+\frac{\sum_{i=1}^{n_{data}}ln\left({\widehat{rev}}_i\right)}{\sigma_{rev}^2}\right)=0.146\left(\frac{19.84}{\left(0198\right)^2}+\frac{137}{\left(0.571\right)^2}\right)=19.72.
```

The posterior predictive of $\text{rev}$ is also a Lognormal distribution. Its distribution function can be calculated with the help of the analytic formulas provided in {numref}`methods`.

````

(meca_example_2_results)=
````{dropdown} **Results**
In {numref}`Figure_mec_example_2_results_1` the prior and posterior distribution of parameter $\mu_{\text{rev}}$ is represented. In {numref}`Figure_mec_example_2_results_2`, the prior and posterior probability of failure are shown in function of the number of revolutions $\text{rev}$. As can be seen in the figure, the probability of failure increases from the updating.

```{figure} ../../pictures/example_2_results_1.png
---
width: 600px
name: Figure_mec_example_2_results_1
---
Prior and posterior distribution for parameter $\mu_{\text{rev}}$.
```
```{figure} ../../pictures/example_2_results_2.png
---
width: 600px
name: Figure_mec_example_2_results_2
---
Prior and posterior predictive distribution of revolutions to failure $\text{rev}$.
```
````

## Updating of structural reliability methods using right censored data

In contrast to the example in {numref}`meca_4_8_2`, censored data is often available in practice. In this case, the simplified analytic approach for updating is no longer applicable and numerical methods must be used. In this example, MCMC will be used to conduct the updating for the location parameter. To keep the example simple, the same assumption as in {numref}`meca_4_8_2` is made that the scale parameter is known and will not be updated. This assumption is not necessary using MCMC for the updating and might be relaxed for a more advanced modelling.

(meca_example_3_additional_data)=
````{dropdown} **Additional data**
Additional, censored, data on the reliability of the bearing is given in the table below. 

```{list-table} Additional censored data considered in the example
:name: meca-examples-table-3

* - Specimen
  - Revolutions to failure $\widehat{{\text{rev}}_i}$
* - 1
  - $2.5\cdot{10}^8$
* - 2
  - $2.4\cdot{10}^8$
* - 3
  - $2.7\cdot{10}^8$
* - 4-20
  - $\ge 5.1\cdot{10}^8$

```
````

(meca_example_3_updating)=
````{dropdown} **Updating**
With the additional data, the reliability model for the bearing can be updated. The updating is done using the MCMC method described in {numref}`methods`. The data set is right-censored and the likelihood $L$ for a right censored data set is given by:
```{math}
L\propto\ \prod_{i=1}^{n}{f\left(\widehat{x_i}|\theta\right)\cdot\prod_{j=1}^{m}\left(1-F\left(\widehat{x_{\text{up}}}|\theta\right)\right)},
```
using the data from {numref}`meca-examples-table-3`, the likelihood is given by
```{math}
L\propto f\left(2.5\ {10}^8|\theta\right)\cdot f\left(2.4\ {10}^8|\theta\right)\cdot\ f\left(2.7\ {10}^8|\theta\right)\cdot\left(1-F\left(3.4\ {10}^8|\theta\right)\right).
```

Using the additional data, the reliability model for the bearing can be updated. The result of the updating is:
```{math}
\begin{align}
\sigma\prime\prime&=0.1292,\\
\mu\prime\prime&=20.23
\end{align}
```

```{figure} ../../pictures/example_3_results_1.png
---
width: 600px
name: Figure_mec_example_3_results_1
---
Markov Chain and posterior density of the parameter.
```

The posterior predictive of $\text{rev}$ is shown in {numref}`Figure_mec_example_3_results_2`. It is seen that the consideration of censored data might have a large impact on the updating and has a large potential especial for end of life decision-making.

```{figure} ../../pictures/example_3_results_2.png
---
width: 600px
name: Figure_mec_example_3_results_2
---
Prior and posterior distribution for parameter $\mu_{\text{rev}}$.
```
```{figure} ../../pictures/example_3_results_3.png
---
width: 600px
name: Figure_mec_example_3_results_3
---
Prior and posterior predictive distribution of revolutions to failure $\text{rev}$.
```

````