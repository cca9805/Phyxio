# Exam-type example


## Problem statement

A Monte Carlo simulation of a thermal system estimates the mean value of an [[observable]] associated with internal [[energia]] per particle. After equilibration, 40000 samples have been collected. The obtained [[media_muestral]] is 1.84 eV and the [[desviacion_estandar]] of individual values is 0.60 eV. Estimate the [[error_estadistico]], decide whether the simulation can distinguish an alternative model predicting 1.82 eV, and explain how the uncertainty would change if [[numero_muestras]] increased to 160000.

## Data

- [[numero_muestras]]: 40000 samples.
- [[media_muestral]]: 1.84 eV.
- [[desviacion_estandar]]: 0.60 eV.
- Alternative prediction for the [[observable]]: 1.82 eV.
- Proposed new [[numero_muestras]]: 160000 samples.
- [[temperatura]] remains fixed during sampling.
- The average [[probabilidad_aceptacion]] is assumed reasonable and the system does not stay trapped in a single [[energia]] region.

## System definition

The system is a set of microscopic configurations visited by a Monte Carlo algorithm. Each configuration has an [[energia]] and produces a value of the [[observable]]. The physical object of interest is not one isolated sample, but the statistical average of the set at fixed [[temperatura]]. The simulation accumulates a [[suma_observable]] and obtains a [[media_muestral]] from it. Since the number of configurations is finite, the estimate must be accompanied by an [[error_estadistico]]. The samples are assumed to be sufficiently mixed so that the recorded [[numero_muestras]] is close to the effective number of independent data points.

## Physical model

The model uses a sample-mean estimate and the standard error of the mean. For a thermal system in equilibrium, configurations should appear with weights compatible with [[probabilidad_boltzmann]], determined by [[energia]], [[temperatura]], [[constante_boltzmann]], and [[constante_normalizacion]]. In a Monte Carlo simulation, [[probabilidad_aceptacion]] controls whether a proposed move with a given [[diferencia_energia]] enters the trajectory. Here the state distribution is not calculated explicitly, but the sampling is assumed to respect thermal equilibrium.

## Model justification

The mean model is appropriate because the problem asks for a physical average, not for one particular configuration. The [[error_estadistico]] is appropriate because we want to decide whether the difference between 1.84 eV and 1.82 eV is meaningful or merely sampling fluctuation. The [[desviacion_estandar]] of 0.60 eV indicates that individual [[observable]] values fluctuate substantially, but a precise average can still be obtained if [[numero_muestras]] is large. The delicate assumption is effective independence: if the samples are correlated, the real error is larger.

## Symbolic solution

First, the mean is expressed through the accumulated [[observable]]:

{{f:media_muestral_observable}}

Then the spread of individual samples is related to the uncertainty of the mean:

{{f:error_estadistico_media}}

To interpret the thermal origin of sampling, lower-[[energia]] states have larger weight at fixed [[temperatura]]:

{{f:factor_boltzmann}}

And the acceptance of a Monte Carlo proposal depends on [[diferencia_energia]]:

{{f:aceptacion_monte_carlo}}

The physical comparison is made between the difference in means and the calculated [[error_estadistico]].

## Numerical substitution

With [[desviacion_estandar]] equal to 0.60 eV and [[numero_muestras]] equal to 40000, the square root of N is 200. Therefore, [[error_estadistico]] is approximately 0.60 eV / 200 = 0.003 eV. The difference between the simulated [[media_muestral]], 1.84 eV, and the alternative value, 1.82 eV, is 0.02 eV. That difference is about 6.7 times the [[error_estadistico]], so it is clearly distinguishable under the independent-sample model. If [[numero_muestras]] increases to 160000, the square root of N becomes 400 and [[error_estadistico]] decreases to 0.0015 eV.

## Dimensional validation

The [[media_muestral]] has the same dimension as the [[observable]], here [[energia]] per particle measured in eV. The [[desviacion_estandar]] is also measured in eV because it describes the spread of individual values of the same [[observable]]. Dividing by the square root of [[numero_muestras]] adds no unit, because the number of samples is dimensionless. Therefore, [[error_estadistico]] remains in eV, the same unit as the difference between models. The comparison between 0.02 eV and 0.003 eV is dimensionally valid.

## Physical interpretation

The result means that the simulation has strongly reduced the uncertainty of the mean: although each individual [[observable]] value fluctuates on a scale of 0.60 eV, averaging 40000 samples leaves an [[error_estadistico]] of only 0.003 eV. This indicates that the cloud of thermal configurations still fluctuates, but its statistical center is located quite precisely. This implies that the 0.02 eV difference from the alternative model is not buried in sampling noise; therefore the two predictions are physically distinguishable. The conclusion depends, however, on good exploration of [[energia]] states and on a [[probabilidad_aceptacion]] that does not generate a strongly correlated chain. If correlations increase, the effective sample count decreases and the real uncertainty increases.

# Real-world example


## Context

A research group wants to estimate the heat capacity of a simplified material using a thermal simulation. At each step, an [[observable]] related to [[energia]] fluctuations is measured. The run is performed at fixed [[temperatura]], and the algorithm accepts or rejects changes through a [[probabilidad_aceptacion]] controlled by [[diferencia_energia]]. The practical goal is not to obtain a perfect number, but to decide how many samples are needed so that [[error_estadistico]] does not hide the difference between two microscopic models.

## Physical estimation

Suppose the [[observable]] has an approximate [[desviacion_estandar]] of 5 units and the desired [[error_estadistico]] is about 0.05 units. Since the error decreases with the square root of [[numero_muestras]], the required square root of N is of order 100, so the required effective [[numero_muestras]] is of order 10⁴. This is an estimate, not a guarantee, because correlated samples reduce the effective count. On the scale of a classroom or small computational project, generating 10⁵ Monte Carlo steps may be a reasonable value if only one tenth of them behave like independent samples. The magnitude of the required run shows why high precision has a high computational cost.

## Interpretation

This estimate shows why statistical simulations are powerful but not magic. Improving the final number by a factor of ten usually requires about one hundred times more effective sampling, not just a slightly longer run. Therefore the desired precision must be tied to a physical decision. If two models predict values separated by 1 unit, an [[error_estadistico]] of 0.05 is comfortably small. If they differ by only 0.02, the same simulation cannot decide between them. Physically, [[error_estadistico]] acts as a traffic signal: green when the target difference is much larger than the uncertainty, red when the conclusion would be a polished number without physical support.