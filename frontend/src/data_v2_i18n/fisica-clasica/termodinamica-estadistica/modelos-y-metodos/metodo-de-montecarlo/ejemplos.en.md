# Exam-type example


## Problem statement

A thermal system is studied with the Monte Carlo method to estimate the mean value of an energy-like observable. A run produces 10000 independent samples. The average of the [[valor_muestra]] values is 4.80 energy units, and the [[varianza_muestral]] is 2.25 squared energy units. Find the [[estimador_montecarlo]], estimate the [[error_estandar]], and decide whether the result is precise enough for a tolerance of 0.03 energy units. Then explain what role a Metropolis rule would play if samples were generated from proposed moves involving [[energia_estado]] at fixed [[temperatura]].

## Data

- [[numero_muestras]]: 10000 samples
- Mean of [[valor_muestra]] values: 4.80 energy units
- [[varianza_muestral]]: 2.25 squared energy units
- Desired tolerance: 0.03 energy units
- [[temperatura]]: fixed during sampling
- [[constante_boltzmann]]: used only if Metropolis acceptance is applied

## System definition

The system is represented as a collection of microscopic configurations that produce different observable values. Each sampled configuration contributes one [[valor_muestra]]. The goal is not to reconstruct a real-time trajectory, but to estimate the statistical average compatible with the physical preparation. The relevant sample count is [[numero_muestras]], and the output must not be separated from [[error_estandar]], because a Monte Carlo mean retains residual statistical noise.

## Physical model

The model uses independent samples with equal statistical importance. Therefore a simple average is appropriate and no [[peso_muestra]] correction is needed. If the samples came from a Metropolis chain, [[probabilidad_aceptacion]] would need to be checked to ensure reasonable thermal exploration. In that case [[energia_estado]], [[temperatura]], and [[constante_boltzmann]] would enter the acceptance rule, not the already stated simple average.

## Model justification

The model is valid because the statement specifies independent samples. The [[varianza_muestral]] is finite and known, so [[error_estandar]] can be estimated. The requested tolerance gives an operational criterion for deciding whether [[numero_muestras]] is enough. Since no unequal weights are given, using a weighted mean would add an unjustified correction. The physics is the bridge between microscopic sampled values and a controlled macroscopic average.

## Symbolic solution

First identify the Monte Carlo average as the mean of sampled observable values.

{{f:estimador_montecarlo_media}}

Then use the sample spread to quantify how much the individual values fluctuate.

{{f:varianza_muestral_montecarlo}}

The uncertainty of the average is obtained from the standard error.

{{f:error_estandar_montecarlo}}

If samples had unequal weights, the simple average would be replaced by the weighted average.

{{f:promedio_ponderado_muestras}}

If Metropolis sampling generated the data, proposal acceptance would be controlled by energy change and thermal scale.

{{f:probabilidad_aceptacion_metropolis}}

## Numerical substitution

The [[estimador_montecarlo]] is the observed average: 4.80 energy units. The sample standard deviation is the square root of [[varianza_muestral]], so it is 1.5 energy units. Dividing by the square root of [[numero_muestras]] gives [[error_estandar]] = 1.5/100 = 0.015 energy units. Since 0.015 is smaller than the requested tolerance of 0.03, the declared statistical precision is sufficient within this model.

## Dimensional validation

The [[valor_muestra]] values have energy units, so the [[estimador_montecarlo]] also has energy units. The [[varianza_muestral]] has energy squared units. Its square root has energy units, and division by the square root of [[numero_muestras]], which is dimensionless, leaves [[error_estandar]] with energy units. [[probabilidad_aceptacion]] would be dimensionless in a Metropolis version.

## Physical interpretation

The result means that the sampled microscopic configurations collectively support an average near 4.80 energy units; it does not mean every configuration has that value. The [[varianza_muestral]] indicates substantial microscopic spread, and this implies individual samples remain noisy. However, the large [[numero_muestras]] decreases the uncertainty of the mean, therefore the [[error_estandar]] is small enough for the stated tolerance. Physically, the answer depends on correct sampling, not only on arithmetic. If a Metropolis chain were used, [[probabilidad_aceptacion]] would indicate whether the algorithm explores states well or becomes trapped. A low or poorly tuned acceptance rate can make the [[estimador_montecarlo]] look precise while still being biased.

# Real-world example


## Context

In molecular simulation, one may estimate the mean energy of a simple liquid without visiting every possible configuration. Each accepted configuration contributes one [[valor_muestra]]. When proposed moves change molecular positions, [[energia_estado]] is compared with the thermal scale set by [[temperatura]] and [[constante_boltzmann]]. The [[probabilidad_aceptacion]] decides whether a configuration enters the sampled sequence.

## Physical estimation

Take an approximate run with [[numero_muestras]] of order 200000 and a typical spread of 0.8 energy units. The estimated [[error_estandar]] is roughly 0.8 divided by the square root of 200000, about 0.0018 energy units. This scale is small compared with a mean of several energy units, so it is a reasonable value for a stable average. If [[numero_muestras]] were reduced to about 2000, the uncertainty magnitude would increase by roughly one order of ten. This estimate shows why Monte Carlo accuracy improves slowly and why the numerical scale of [[varianza_muestral]] matters.

## Interpretation

The simulation does not predict one unique liquid configuration; it predicts an average over compatible configurations. Correct [[peso_muestra]] values or a well-tuned [[probabilidad_aceptacion]] can matter as much as raw sample count. The final result should be stated as a mean with uncertainty, not as a bare number. That distinction separates ordinary microscopic fluctuation from a trustworthy macroscopic estimate.