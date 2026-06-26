## Ideal model

The ideal Monte Carlo model assumes that each [[valor_muestra]] is drawn from the correct physical distribution and that the sampled set represents the observable being estimated. The central output is the [[estimador_montecarlo]], reported with [[error_estandar]] as its statistical uncertainty. Randomness is used to explore possible states, not to ignore physical constraints. In Metropolis sampling, [[probabilidad_aceptacion]] acts as a thermal criterion linked to [[energia_estado]], [[temperatura]], and [[constante_boltzmann]].

## Hypotheses

- Samples are representative: otherwise the [[estimador_montecarlo]] is biased even if it looks stable.
- [[numero_muestras]] is large enough: otherwise [[error_estandar]] dominates the reading.
- [[varianza_muestral]] is finite: heavy tails or rare events can make convergence slow.
- [[peso_muestra]] values are correct when weighted averaging is used: otherwise the mean stops representing the physical system.
- In Metropolis sampling, the chain reaches statistical equilibrium: without mixing, [[probabilidad_aceptacion]] does not guarantee exploration.

## Quantitative validity domain

A basic computation is reasonable when [[numero_muestras]] > 10³ and generally preferable when [[numero_muestras]] > 10⁵ for noisy or sensitive observables. The relative uncertainty should satisfy [[error_estandar]]/|[[estimador_montecarlo]]| < 0.05 for a classroom estimate and < 0.01 for a stricter estimate. In Metropolis sampling, [[probabilidad_aceptacion]] between 0.2 and 0.8 often indicates useful exploration; near 0 the chain freezes, near 1 the proposed moves may be too small.

## Model failure signals

The model is failing if the [[estimador_montecarlo]] changes systematically when [[numero_muestras]] is doubled, if [[error_estandar]] does not decrease, if [[varianza_muestral]] grows because rare events dominate, or if different random seeds produce incompatible answers. It is also suspicious when [[probabilidad_aceptacion]] remains extreme or when a few large [[peso_muestra]] values dominate the average.

## Extended or alternative model

When uniform sampling is inefficient, use importance sampling, Metropolis sampling, Markov chains, stratification, or variance reduction. If samples are correlated, estimate an effective sample size smaller than [[numero_muestras]]. If the observable is dominated by rare states, a weighted average using [[peso_muestra]] may replace the simple average. In all these variants, the core diagnostic trio — [[estimador_montecarlo]], [[varianza_muestral]], and [[error_estandar]] — remains the primary tool for validating the result, checking convergence, and detecting whether increasing the sample count actually reduces uncertainty or merely repeats a biased computation with more data points collected.


When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.
## Operational comparison

| Approach | Suitable use | Main risk |
| Simple average | Equivalent samples | Ignoring [[varianza_muestral]] |
| Weighted average | Nonuniform weights | Bad [[peso_muestra]] normalization |
| Metropolis | Thermal distributions | Poor [[probabilidad_aceptacion]] |
| More samples | Reducing [[error_estandar]] | Not correcting bias |