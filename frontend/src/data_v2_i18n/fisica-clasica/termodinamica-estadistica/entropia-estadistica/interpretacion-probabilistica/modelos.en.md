## Ideal model

The ideal model considers a system with fixed macroscopic constraints and a well-defined set of accessible microstates. Each compatible microstate is assigned the same initial weight, so [[probabilidad_macroestado]] depends on how many configurations belong to the observed macrostate. The central idea is that [[numero_microestados_macro]] is not a force or a conscious preference of the system; it counts how many microscopic ways produce the same macroscopic appearance. When two macrostates are compared, [[ratio_probabilidades]] summarizes the change in statistical weight, and [[delta_entropia]] expresses it on an entropy scale through [[k_boltzmann]].

## Hypotheses

- Equiprobable microstates: if dynamic biases, barriers, or non-equilibrium preparation exist, [[probabilidad_macroestado]] is no longer just a counting ratio.
- Same accessible space: [[numero_microestados_macro]] and [[numero_microestados_total]] must refer to the same system. If restrictions change, the fraction loses meaning.
- Non-overlapping macrostates: each microstate must clearly belong to the counted macrostate. If categories overlap, [[numero_microestados_macro]] is overestimated.
- Homogeneous comparison: [[probabilidad_inicial]] and [[probabilidad_final]] can be compared only with the same counting rules.
- Positive counts: [[numero_microestados_total]] must be greater than zero; otherwise there is no physical statistical space.

## Quantitative validity domain

The model is appropriate when 0 ≤ [[numero_microestados_macro]] ≤ [[numero_microestados_total]] and [[numero_microestados_total]] > 0. For comparisons, [[numero_microestados_inicial]] > 0 and [[numero_microestados_final]] > 0. Introductory exercises may use counts from 10² to 10⁶ microstates, provided the ratio is interpretable. If [[probabilidad_macroestado]] > 1 or [[ratio_probabilidades]] < 0, the counting is wrong. A positive [[delta_entropia]] must correspond to greater final relative weight, not to lower multiplicity.

## Model failure signals

The model fails if the system is not near equilibrium, if microstates are not equally accessible, or if the dynamics prevents visits to regions of phase space. It also fails when macrostates defined with different variables are mixed, such as comparing an initial fixed-energy state with a final imposed-temperature state without redefining [[numero_microestados_total]]. Another warning sign is interpreting [[delta_entropia]] as energy or as a direct probability.

## Extended or alternative model

If microstates are not equiprobable, an explicit probability distribution over microscopic states is needed. In non-isolated thermal systems, a canonical description may appear, where weights depend on energy and temperature. For non-equilibrium processes, dynamic models, transition rates, or simulations are required. Simple counting remains a useful conceptual compass, but it is no longer enough to predict [[probabilidad_macroestado]].


When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.
## Operational comparison

| Situation | Useful model | Key magnitude | Main risk |
| Equiprobable counting | Simple probabilistic interpretation | [[probabilidad_macroestado]] | Confusing fraction with cause |
| Comparison between macrostates | Relative weight | [[ratio_probabilidades]] | Using different accessible spaces |
| Entropy reading | Probability-entropy link | [[delta_entropia]] | Treating entropy as probability |
| Biased system | Weighted distribution | [[probabilidad_final]] | Ignoring dynamic barriers |