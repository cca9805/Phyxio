## Ideal model

The ideal model treats the simulation as a generator of representative samples of a thermal system. In each sample an [[observable]] is measured, the [[suma_observable]] is accumulated, and a [[media_muestral]] is estimated. The uncertainty is not the full spread of the data, but the [[error_estadistico]] of the mean. In this model, visited configurations are compatible with [[probabilidad_boltzmann]] when the system is in thermal equilibrium at a defined [[temperatura]]. The [[probabilidad_aceptacion]] of a Monte Carlo step helps build that distribution when it depends on [[diferencia_energia]].

## Hypotheses

- Samples are representative. If they are not, the [[media_muestral]] may be biased even when [[error_estadistico]] is small.
- Samples are independent or weakly correlated. If they are strongly correlated, the effective [[numero_muestras]] is smaller than the recorded one.
- The [[desviacion_estandar]] describes the spread of the [[observable]] well. If there are long tails or rare events, the error may be underestimated.
- The [[temperatura]] remains fixed when [[probabilidad_boltzmann]] is used. If it changes during sampling, there is no single target distribution.
- The [[probabilidad_aceptacion]] rule respects statistical balance. If it does not, the [[energia]] weights do not match the expected equilibrium.

## Quantitative validity domain

The standard-error model is reliable when the effective [[numero_muestras]] is large, typically N_eff ≥ 30 for an initial estimate and N_eff ≥ 10³ for a stable reading. The [[error_estadistico]] should be much smaller than the physical scale to be resolved, for example [[error_estadistico]] < 0.1·|[[media_muestral]]| for 10 % relative precision. If doubling [[numero_muestras]] changes [[media_muestral]] by more than 2·[[error_estadistico]], the simulation has not converged. In thermal Monte Carlo, [[probabilidad_aceptacion]] should not be extreme: values of order 0.2 to 0.8 often indicate useful exploration, although the exact range is problem-dependent.

## Model failure signals

A clear failure signal is that the graph of [[error_estadistico]] versus [[numero_muestras]] does not decrease approximately smoothly. Another signal is that independent runs give incompatible [[media_muestral]] values outside their error bars. The model also fails if [[energia]] remains trapped for long periods in a narrow region, if [[probabilidad_aceptacion]] is almost zero, or if [[desviacion_estandar]] changes abruptly when the simulation is extended.

## Extended or alternative model

When correlations are strong, a model with effective [[numero_muestras]] and autocorrelation time is needed. If the system has phase changes, metastable states, or anomalous tails, block averaging, independent replicas, or reweighting techniques are more appropriate. If the distribution is not canonical, [[probabilidad_boltzmann]] must be replaced by the physical distribution that actually defines the simulation target.


When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.
## Operational comparison

| Situation | Simple model | Extended model |
| Nearly independent samples | Uses direct [[numero_muestras]] | Usually unnecessary |
| Correlated Monte Carlo chain | Underestimates [[error_estadistico]] | Uses N_eff and blocks |
| Reasonable [[probabilidad_aceptacion]] | Stable sampling | Fine tuning optional |
| Dominant rare states | May fail | Specialized sampling |
| High-precision target | High square-root cost | Parallel runs and convergence analysis |