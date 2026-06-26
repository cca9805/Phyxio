# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: equilibrio-estadistico
# Target response file: modelos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Statistical Equilibrium
## Ideal model
The ideal model describes a finite set of accessible states with well-defined [[probabilidad_estado]]. Transitions occur with stable average [[tasa_transicion]], and equilibrium is recognized when there is no net [[flujo_probabilidad]]. The model follows the full statistical distribution, not a single particle path.

## Hypotheses
- Fixed accessible states: if new states appear, normalization is no longer valid.
- Stable rates: if [[tasa_transicion]] changes with [[tiempo]], stationarity may be only apparent.
- Probability conservation: if statistical population leaks, {{f:normalizacion_probabilidades}} fails.
- Stable thermal bath when [[peso_boltzmann]] is used: if [[temperatura]] is uncontrolled, the thermal distribution is unreliable.

## Quantitative validity domain
The model is reasonable when the sum of [[probabilidad_estado]] differs from 1 by less than 10^-3, [[desbalance_estadistico]] is below 10^-2, and rates change by less than 5% over 10 to 100 characteristic transition times. For a pair of states, detailed equilibrium requires [[flujo_probabilidad]] to be compatible with zero within measurement uncertainty.

## Model failure signals
The model fails if probabilities drift systematically with [[tiempo]], if a persistent circular current exists, if [[entropia]] changes monotonically during the analysis window, or if transitions show strong memory. It also fails if a statistical DCL is read as a mechanical force diagram.

## Extended or alternative model
When stationary currents exist, use a nonequilibrium steady-state model. If rates depend on history, a non-Markovian model is more appropriate. If the environment imposes changes in [[temperatura]], a nonequilibrium dynamical treatment is needed.

## Operational comparison
| Model | Central signal | Best use | Risk |
|---|---|---|---|
| Statistical equilibrium | Zero [[flujo_probabilidad]] | Balanced stationary distribution | Confusing it with rest |
| Nonequilibrium steady state | Constant [[probabilidad_estado]] with flow | Driven systems | Ignoring internal currents |
| Transient relaxation | Changing probabilities | Approach to equilibrium | Measuring too early |

