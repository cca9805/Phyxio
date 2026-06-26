# Examples — Surface Waves

# Exam-type example


## Problem statement

A laboratory vibrator generates capillary waves on the surface of pure water at 20 °C at a frequency [[frecuencia_de_la_onda_superficial]] of 130 Hz. Determine the propagation speed [[rapidez_de_propagacion_de_ondas_superficiales]], the wavelength [[lambda]], and verify the result dimensionally. Data: [[aceleracion_gravitatoria]] of 9.81 m/s², [[sigma]] of 0.073 N/m, [[rho]] of 998 kg/m³, [[frecuencia_de_la_onda_superficial]] of 130 Hz.

## Data

- [[frecuencia_de_la_onda_superficial]]: 130 Hz (excitation frequency of the vibrator, which sets the wave [[frecuencia_de_la_onda_superficial]])
- [[sigma]]: 0.073 N/m (surface tension of pure water at 20 °C)
- [[rho]]: 998 kg/m³ (density of water at 20 °C)
- [[aceleracion_gravitatoria]]: 9.81 m/s² (local gravitational acceleration)
- Unknowns: [[rapidez_de_propagacion_de_ondas_superficiales]] in m/s and [[lambda]] in m

## System definition

The system is the flat interface between pure water and air at equilibrium. The vibrator disturbance generates a surface wave propagating horizontally from the excitation point. The fluid is treated as incompressible and irrotational with small amplitude.

## Physical model

The applicable model is the linear theory of surface waves in deep water. The relevant magnitudes are [[sigma]], [[rho]], [[aceleracion_gravitatoria]], [[numero_de_onda]] and [[rapidez_de_propagacion_de_ondas_superficiales]]. Since [[frecuencia_de_la_onda_superficial]] is 130 Hz, the expected wavelength is of the order of millimetres, which places the wave in the capillary regime where [[sigma]] dominates over gravity.

## Model justification

To decide on the model, the gravitational and capillary terms of the combined dispersion relation are compared. With [[lambda]] of the order of millimetres, [[numero_de_onda]] is of the order of thousands of m⁻¹. The capillary term grows with [[numero_de_onda]] while the gravitational term decreases; for [[numero_de_onda]] greater than approximately 370 m⁻¹ (corresponding to [[lambda]] smaller than 1.7 cm), the capillary term dominates. The capillary formula is applied.

## Symbolic solution

The capillary formula gives [[rapidez_de_propagacion_de_ondas_superficiales]] as the square root of [[sigma]] multiplied by [[numero_de_onda]] divided by [[rho]]. The relation between [[frecuencia_de_la_onda_superficial]], [[rapidez_de_propagacion_de_ondas_superficiales]] and [[lambda]] is [[rapidez_de_propagacion_de_ondas_superficiales]] equal to [[frecuencia_de_la_onda_superficial]] multiplied by [[lambda]], and [[numero_de_onda]] equal to two pi divided by [[lambda]]. Substituting and solving for [[rapidez_de_propagacion_de_ondas_superficiales]] in terms of [[frecuencia_de_la_onda_superficial]], [[sigma]] and [[rho]], one obtains [[rapidez_de_propagacion_de_ondas_superficiales]] to the fourth equal to [[sigma]] multiplied by two pi multiplied by [[frecuencia_de_la_onda_superficial]] squared, divided by [[rho]].

{{f:rapidez_capilares}}

## Numerical substitution

Computing [[rapidez_de_propagacion_de_ondas_superficiales]] to the fourth as 0.073 multiplied by two pi multiplied by 130 squared divided by 998 gives approximately 0.03877 m⁴ s⁻⁴. Taking the fourth root, [[rapidez_de_propagacion_de_ondas_superficiales]] is approximately 0.443 m/s. The wavelength is obtained as [[rapidez_de_propagacion_de_ondas_superficiales]] divided by [[frecuencia_de_la_onda_superficial]], that is, 0.443 divided by 130, giving [[lambda]] of approximately 3.4 mm.

## Dimensional validation

[[sigma]] has units N/m equal to kg s⁻², [[numero_de_onda]] in m⁻¹ and [[rho]] in kg m⁻³. The ratio has units kg s⁻² per m⁻¹ divided by kg m⁻³, equal to m² s⁻². The square root produces m s⁻¹, which is the correct dimension of [[rapidez_de_propagacion_de_ondas_superficiales]].

## Physical interpretation

The result [[rapidez_de_propagacion_de_ondas_superficiales]] of 0.44 m/s with [[lambda]] of 3.4 mm physically means that the capillary wave propagates at a speed comparable to a slow walk, perceptible to the naked eye in the laboratory. This indicates that [[sigma]] dominates completely over gravity at this scale: the restoring force maintaining the flat interface is surface tension. The [[frecuencia_de_la_onda_superficial]] imposed by the vibrator is not a free parameter; it determines [[lambda]] through the dispersion relation. If soap were added reducing [[sigma]], [[rapidez_de_propagacion_de_ondas_superficiales]] would decrease and [[lambda]] would also decrease, an effect physically consistent with the role of [[sigma]] as restoring force.

# Real-world example


## Context

In marine meteorology, oceanographic buoys measure the [[frecuencia_de_la_onda_superficial]] of waves to estimate the propagation speed [[rapidez_de_propagacion_de_ondas_superficiales]] and, from the difference in arrival times of different spectral components, the distance of the generating storm. A buoy records that the most energetic waves have [[frecuencia_de_la_onda_superficial]] of approximately 0.083 Hz and [[lambda]] of approximately 225 m in deep water. Fluid data: [[aceleracion_gravitatoria]] of 9.81 m/s², [[sigma]] of 0.072 N/m, [[rho]] of 1025 kg/m³ (seawater).

## Physical estimation

The [[frecuencia_de_la_onda_superficial]] of 0.083 Hz corresponds to [[lambda]] of about 225 m. With [[numero_de_onda]] of approximately 0.0279 m⁻¹, the gravitational term is [[aceleracion_gravitatoria]] divided by [[numero_de_onda]], that is, about 351 m² s⁻², while the capillary term is [[sigma]] multiplied by [[numero_de_onda]] divided by [[rho]], approximately 0.0000020 m² s⁻². The ratio between the two terms exceeds 175 million: the regime is purely gravitational and [[sigma]] is completely irrelevant for these ocean waves.

Applying the gravity formula, [[rapidez_de_propagacion_de_ondas_superficiales]] is the square root of 351, giving approximately 18.7 m/s, equivalent to about 67 km/h. The group velocity, which transports energy, is half of [[rapidez_de_propagacion_de_ondas_superficiales]], approximately 9.4 m/s. A storm 3000 km away would take about 3.7 days for its energy to reach the buoy.

## Interpretation

Waves with [[lambda]] of 225 m operate entirely in the gravitational regime; [[sigma]] and [[rho]] do not appear in the relevant formula. The celerity [[rapidez_de_propagacion_de_ondas_superficiales]] of 18.7 m/s is the phase velocity: the speed at which the visible crests advance. Energy arrives later, at 9.4 m/s (group velocity). The [[frecuencia_de_la_onda_superficial]] of 0.083 Hz cannot be chosen independently of [[lambda]]: it is determined by the gravitational dispersion relation for that [[lambda]] and [[aceleracion_gravitatoria]]. The deep-water model is valid as long as the ocean depth exceeds [[lambda]] divided by two, that is, about 112 m, a condition met throughout most of the open ocean.