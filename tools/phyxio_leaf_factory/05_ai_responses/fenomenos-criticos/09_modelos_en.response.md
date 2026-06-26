# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: fenomenos-criticos
# Target response file: modelos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Critical Phenomena
## Ideal model
The ideal model describes a continuous transition around a single [[temperatura_critica]]. The distance from that point is summarized by [[temperatura_reducida]]. In the critical regime, the [[parametro_de_orden]] vanishes gradually, [[susceptibilidad]] grows, and [[longitud_correlacion]] increases according to scaling laws. The model does not keep every microscopic detail of a material; it keeps the variables that control critical behavior: symmetry, effective dimension, control variable, and singular observables.

## Hypotheses
- The transition is continuous. If latent heat or a macroscopic jump appears, the critical laws for [[parametro_de_orden]], [[susceptibilidad]], and [[longitud_correlacion]] are not the first tool.
- A well-defined [[temperatura_critica]] exists. If the sample is inhomogeneous, different regions have different critical points and the curves are rounded.
- [[temperatura_reducida]] is small. If |[[temperatura_reducida]]| > 10^-1, the system is usually outside the critical window.
- External conjugate fields are absent or weak. Such a field can round the vanishing of [[parametro_de_orden]].
- The sample size is much larger than [[longitud_correlacion]]. Otherwise the divergence is cut off.

## Quantitative validity domain
A useful interval is often 10^-5 < |[[temperatura_reducida]]| < 10^-1. Above 10^-1, noncritical corrections dominate. Below 10^-5, thermal resolution, impurities, and finite size may dominate. For a [[longitud_correlacion]] law, [[longitud_correlacion]] must remain below the sample scale. To estimate [[exponente_critico_gamma]] or [[exponente_critico_nu]], a log-scale graph should show a stable slope over at least about one decade.

## Model failure signals
The model fails when there is strong hysteresis, abrupt jumps, coexistence of phases, or clear dependence on thermal history. It is also suspicious if [[parametro_de_orden]] does not decrease toward [[temperatura_critica]], if [[susceptibilidad]] does not rise in the critical window, or if [[longitud_correlacion]] saturates far before sample-size limits are expected. Another warning is obtaining incompatible exponents from nearby fitting intervals.

## Extended or alternative model
If a discontinuity is present, use a first-order transition model. If finite size dominates, use finite-size scaling. If external fields are relevant, use a critical equation of state. In simulations, distributions, fluctuations, and data collapse may be more robust than a single power-law fit.

## Operational comparison
| Situation | Suitable model | Main signal |
|---|---|---|
| Clean continuous transition | Critical laws | Powers in [[temperatura_reducida]] |
| Small sample | Finite-size scaling | Saturation of [[longitud_correlacion]] |
| External field present | Equation of state | Rounded [[parametro_de_orden]] |
| Hysteresis or coexistence | First order | jump or latent heat |

