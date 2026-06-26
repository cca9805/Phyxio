# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: probabilidad-y-ensembles
# Target response file: modelos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Probability and Ensembles
## Ideal model
The ideal model represents an [[ensemble]] as a collection of [[numero_copias_ensemble]] equally prepared copies under the same [[restriccion_macroscopica]]. Each copy occupies one compatible [[estado_microscopico]] and contributes to a [[probabilidad_estado]]. The goal is not to describe one concrete copy, but to convert the statistical distribution into a [[valor_medio_ensemble]] and a [[fluctuacion_ensemble]].

## Hypotheses
- Same macroscopic preparation: all copies share the same [[restriccion_macroscopica]]. If this is violated, different ensembles are mixed.
- Well-defined compatible states: each [[estado_microscopico]] either belongs to the ensemble or does not. If the classification changes, [[conteo_sistemas]] cannot be interpreted.
- Normalized probabilities: every [[probabilidad_estado]] must belong to a complete distribution. If part is missing, the [[valor_medio_ensemble]] is biased.
- Measurable state values: each [[valor_estado]] must refer to the same observable quantity. If quantities are mixed, the mean loses physical dimension.
- Comparable weights: [[peso_estadistico]] values can only be compared inside the same set of states.

## Quantitative validity domain
The model works well when [[numero_copias_ensemble]] is large, for example greater than 10³ for classroom estimates and far larger in thermodynamic interpretation. Each [[probabilidad_estado]] must satisfy 0 ≤ p_i ≤ 1, and the total sum must be 1 within numerical tolerances below 10⁻⁶. If frequencies are used, [[conteo_sistemas]] must be large enough so n_i/N_ens is not controlled by one copy. The [[fluctuacion_ensemble]] must be compared with the [[valor_medio_ensemble]]: if sigma_A/A_prom is of order 1, the mean needs a spread statement.

## Model failure signals
The model fails if negative probabilities appear, the sum differs from 1, [[conteo_sistemas]] is incompatible with [[numero_copias_ensemble]], or values with different units are mixed. It also fails if one copy is counted in two exclusive states, if the [[restriccion_macroscopica]] changes during sampling, or if [[peso_estadistico]] is treated as probability before normalization.

## Extended or alternative model
When states evolve in time, a kinetic or statistical-equilibrium description is more appropriate. If weights depend on energy and temperature, the canonical ensemble appears. If the preparation fixes energy, volume, and particle number, the microcanonical model may fit better. If data come from few samples, statistical inference with explicit uncertainty is needed.

## Operational comparison
| Approach | What it preserves | What it computes | When to use it |
|---|---|---|---|
| Ideal ensemble | [[restriccion_macroscopica]] | [[probabilidad_estado]], [[valor_medio_ensemble]] | Equivalent preparations |
| Finite frequency | Approximate [[numero_copias_ensemble]] | Relative [[conteo_sistemas]] | Simulations or experiments |
| Normalized weights | Ratios of [[peso_estadistico]] | Comparable probabilities | States with relative weights |
| Dynamic model | Time evolution | Population changes | Non-stationary systems |

