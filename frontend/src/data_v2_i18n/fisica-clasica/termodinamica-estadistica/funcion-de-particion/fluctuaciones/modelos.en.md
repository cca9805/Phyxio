## Ideal model

The ideal model is a canonical ensemble in thermal equilibrium. The system has microstates with defined [[energia_microestado]], exchanges energy with a reservoir at fixed [[temperatura]], and its occupations are summarized by the [[funcion_particion]]. In this reading, [[energia_media]] comes from the slope of ln(Z), while [[varianza_energia]] comes from its curvature with respect to [[beta]]. [[fluctuacion_energia]] turns that spread into an energy scale directly comparable with the average.

## Hypotheses

- Thermal equilibrium: if the system evolves while being measured, [[varianza_energia]] mixes relaxation with fluctuation.
- Large reservoir: if the environment does not fix [[temperatura]] well, [[beta]] is no longer a stable parameter.
- Defined microstates: if [[energia_microestado]] values switch model during the calculation, the [[funcion_particion]] loses coherence.
- Fixed volume and composition: if they change, [[capacidad_calorifica]] no longer represents only response to [[temperatura]].
- Compatible units: [[temperatura]] in K and energy in J; otherwise the [[constante_boltzmann]] scale is broken.

## Quantitative validity domain

The model is reasonable when [[temperatura]] > 0 K, [[beta]] > 0 J^-1, and [[varianza_energia]] ≥ 0. For a smooth canonical derivative reading, the relative thermal step should be small, for example |Delta T|/T < 0.05. In macroscopic systems, a relative fluctuation [[fluctuacion_energia]]/[[energia_media]] much smaller than 1 is expected. If it exceeds 1 outside a genuinely small system, the spectrum, ensemble, or units need review.

## Model failure signals

A negative [[varianza_energia]] is an immediate alarm. The reading also fails if [[capacidad_calorifica]] becomes negative in an ordinary canonical system without a justified instability or ensemble change. Another warning appears when ln(Z) is not differentiable in the range being used, for example near an idealized transition. If the graph of [[derivada_segunda_log_particion_beta]] shows huge numerical jumps without a physical cause, the issue may be discretization or noisy data.

## Extended or alternative model

If the system is out of equilibrium, kinetic models or time simulation are more appropriate. If the system is isolated, a microcanonical ensemble better represents fixed energy than a canonical one. In small systems, it is often better to keep the full energy distribution instead of summarizing it only by [[energia_media]] and [[varianza_energia]]. Near transitions, finite-size modeling may be needed.


When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.
## Operational comparison

| Situation | Suitable model | Main reading |
| Stable thermal reservoir | Canonical | [[varianza_energia]] from curvature of ln(Z) |
| Isolated system | Microcanonical | Fixed energy, no exchange fluctuation |
| Temporal relaxation | Kinetic | Evolution of the distribution |
| Small system | Full distribution | [[fluctuacion_energia]] comparable with [[energia_media]] |