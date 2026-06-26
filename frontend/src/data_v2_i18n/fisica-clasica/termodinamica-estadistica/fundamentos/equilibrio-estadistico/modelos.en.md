## Ideal model

The ideal model describes a finite set of accessible states with well-defined [[probabilidad_estado]]. Transitions occur with stable average [[tasa_transicion]], and equilibrium is recognized when there is no net [[flujo_probabilidad]]. The model follows the full statistical distribution, not a single particle path.

## Hypotheses

- Fixed accessible states: if new states appear, normalization is no longer valid.
- Stable rates: if [[tasa_transicion]] changes with [[tiempo]], stationarity may be only apparent.
- Probability conservation: if statistical population leaks,

{{f:normalizacion_probabilidades}}

fails.
- Stable thermal bath when [[peso_boltzmann]] is used: if [[temperatura]] is uncontrolled, the thermal distribution is unreliable.

## Quantitative validity domain

The model is reasonable when the sum of [[probabilidad_estado]] differs from 1 by less than 10^-3, [[desbalance_estadistico]] is below 10^-2, and rates change by less than 5% over 10 to 100 characteristic transition times. For a pair of states, detailed equilibrium requires [[flujo_probabilidad]] to be compatible with zero within measurement uncertainty.

## Model failure signals

The model fails if probabilities drift systematically with [[tiempo]], if a persistent circular current exists, if [[entropia]] changes monotonically during the analysis window, or if transitions show strong memory. It also fails if a statistical DCL is read as a mechanical force diagram.

## Extended or alternative model

When stationary currents exist, use a nonequilibrium steady-state model, where [[flujo_probabilidad]] can be constant and nonzero without causing [[probabilidad_estado]] to drift. If [[tasa_transicion]] depends on the history of previous states, a non-Markovian model with explicit memory between jumps is more appropriate. If the environment imposes slow changes in [[temperatura]], the system may pass through a sequence of quasi-static distributions each connected to the previous one through [[constante_boltzmann]] and the [[energia_estado]] of each state, but a proper nonequilibrium dynamical treatment always adds extra [[flujo_probabilidad]] terms that the simple stationary description does not capture.

## Operational comparison

| Model | Central signal | Best use | Risk |
| Statistical equilibrium | Zero [[flujo_probabilidad]] | Balanced stationary distribution | Confusing it with rest |
| Nonequilibrium steady state | Constant [[probabilidad_estado]] with flow | Driven systems | Ignoring internal currents |
| Transient relaxation | Changing probabilities | Approach to equilibrium | Measuring too early |

The most practical criterion is to compare [[desbalance_estadistico]] with the measurement noise. If the imbalance is smaller than the noise, the equilibrium model cannot be rejected with available data. If it is larger, check first whether an accessible state is missing or whether [[tasa_transicion]] values have shifted during observation. An unstable [[temperatura]] can artificially inflate [[desbalance_estadistico]] without the system having left dynamic equilibrium. The [[entropia]] computed from the observed distribution provides a complementary indicator: if it increases monotonically during the analysis window, the system has not yet reached statistical equilibrium and further observation is required before drawing a conclusion.