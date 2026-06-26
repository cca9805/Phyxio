## Ideal model

The ideal model treats the system as a dilute classical gas in thermal equilibrium. Each particle contributes translational kinetic energy, and the per-particle [[energia_media]] is determined by the absolute [[temperatura]]. The model does not track individual collisions; it uses the stable statistical average produced by many particles. The total translational [[energia_total]] is then the sum of that average over [[numero_particulas]].

{{f:energia_media_particula}}

{{f:energia_total_temperatura}}

## Hypotheses

- Thermal equilibrium: if regions have different [[temperatura]], one global [[energia_media]] is not enough.
- Dilute ideal gas: if interactions are strong, intermolecular potential energy changes the meaning of [[energia_total]].
- Classical regime: if quantum discreteness dominates, the equipartition argument behind

{{f:energia_media_particula}}

fails.
- Translational energy focus: if rotations, vibrations, or ionization are active, the full [[energia_total]] needs additional terms.
- Absolute [[temperatura]] in kelvin: inserting Celsius gives a false energy scale.

## Quantitative validity domain

The model is usually reasonable for dilute gases whose density is far below liquid density, with [[temperatura]] high compared with the gas quantum degeneracy scale and with moderate pressures where the compressibility factor is approximately Z ≈ 1. In classroom problems it is normally acceptable for monatomic gases near 300 K and 1 atm. Avoid it if [[temperatura]] < 10 K for light gases without checking quantum effects, if pressure reaches tens of atmospheres, or if collective interactions appear. The predicted [[energia_media]] must be positive and of the order of [[k_boltzmann]] times [[temperatura]]; negative values or macroscopic joules per particle reveal an error.

## Model failure signals

A graph of [[energia_media]] versus [[temperatura]] that is not linear signals that the simple model is insufficient. The model also fails if measured data show a clear intercept, if the slope is not compatible with [[k_boltzmann]], if the gas changes phase, if molecules have active internal modes, or if the sample is not in equilibrium. Another diagnostic error is treating extra [[numero_particulas]] as extra per-particle energy: at fixed [[temperatura]], doubling [[numero_particulas]] changes [[energia_total]], not [[energia_media]].

## Extended or alternative model

For real gases, interaction and excluded-volume corrections are added. For molecular gases, rotational and vibrational degrees of freedom may contribute. At low [[temperatura]], quantum statistics can replace the classical model; at very high [[temperatura]], ionization or relativistic corrections may matter. Switching model is appropriate when data stop following the classical straight-line trend or when the phenomenon is no longer purely translational.


When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.
## Operational comparison

| Situation | Recommended model | What it predicts | Main risk |
| Dilute monatomic gas near 300 K | Classical ideal gas | [[energia_media]] linear in [[temperatura]] | Using Celsius |
| More particles at same [[temperatura]] | Extensive sum | [[energia_total]] increases | Thinking [[energia_media]] increases |
| Dense gas or high pressure | Real-gas model | Energy and state corrections | Ignoring interactions |
| Low [[temperatura]] | Quantum model | Classical equipartition fails | Forcing the straight line |