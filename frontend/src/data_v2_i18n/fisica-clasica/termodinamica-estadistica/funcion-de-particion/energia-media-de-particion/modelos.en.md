## Ideal model

The ideal model is the canonical ensemble: a system exchanges energy with a thermal reservoir that fixes [[temperatura]], while volume and particle number stay constant. Each [[energia_microestado]] contributes to the [[funcion_particion]] through a canonical weight controlled by [[beta]]. The [[energia_media]] is obtained as the statistical response of the logarithm of [[funcion_particion]], not as a plain arithmetic average of energy levels. The [[capacidad_calorifica]] then appears as the thermal sensitivity of that mean energy.

## Hypotheses

- Thermal equilibrium: if the system has not equilibrated, [[temperatura]] does not define a reliable canonical distribution.
- Known microstates: if relevant [[energia_microestado]] values are omitted, [[funcion_particion]] is truncated and [[energia_media]] is biased.
- Stable reservoir: if [[temperatura]] fluctuates strongly, [[beta]] is not a single meaningful scale.
- Consistent units: if [[constante_boltzmann]] and [[energia_microestado]] use incompatible units, the derivatives lose physical meaning.
- Constant volume: if volume changes, thermal response can be mixed with mechanical work.

## Quantitative validity domain

For a simple discrete calculation, the [[funcion_particion]] should include every state whose relative weight is larger than 1e-4 compared with the dominant state. The [[temperatura]] must satisfy T > 0 K, so [[beta]] > 0. If an energy gap ΔE satisfies ΔE/([[constante_boltzmann]] T) > 20, its contribution is usually negligible; if ΔE/([[constante_boltzmann]] T) < 0.1, several levels participate almost equally. The [[energia_media]] should remain within the energy range spanned by the included weighted states. A finite-difference estimate of [[capacidad_calorifica]] needs small temperature steps, for example ΔT/T < 0.05.

## Model failure signals

A [[energia_media]] outside the range of included [[energia_microestado]] values suggests a sign error or a misused derivative. A negative [[capacidad_calorifica]] in a stable canonical system may indicate truncation, numerical noise, or an unsuitable model. If [[derivada_log_particion_beta]] changes abruptly without a physical spectral change, levels may have been omitted or units mixed. The model also fails when the real system has phase transitions, strong interactions not represented in the spectrum, or no thermal equilibrium.

## Extended or alternative model

When particle exchange matters, use a grand canonical model. If volume changes, use the appropriate thermodynamic potential instead of only [[energia_media]] at fixed volume. For dense spectra, replace the sum by an integral with a density of states. In small or quantum systems, degeneracies must be included explicitly in [[funcion_particion]].


When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.
## Operational comparison

| Situation | Useful model | Main signal |
| Discrete levels at fixed T | Discrete canonical ensemble | [[energia_media]] from [[derivada_log_particion_beta]] |
| Data versus T | Thermal derivative model | [[derivada_log_particion_temperatura]] |
| Heating response | Differential thermal model | [[capacidad_calorifica]] |
| Very dense spectrum | Density of states | Approximate integral for [[funcion_particion]] |