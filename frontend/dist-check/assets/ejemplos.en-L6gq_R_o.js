const e=`# Examples — Surface Waves

# Exam-type example

## Problem statement

A laboratory vibrator generates capillary waves on the surface of pure water at 20 °C at a frequency [[f]] of 130 Hz. Determine the propagation speed [[v]], the wavelength [[lambda]], and verify the result dimensionally. Data: [[g]] of 9.81 m/s², [[sigma]] of 0.073 N/m, [[rho]] of 998 kg/m³, [[f]] of 130 Hz.

## Data

- [[f]]: 130 Hz (excitation frequency of the vibrator, which sets the wave [[f]])
- [[sigma]]: 0.073 N/m (surface tension of pure water at 20 °C)
- [[rho]]: 998 kg/m³ (density of water at 20 °C)
- [[g]]: 9.81 m/s² (local gravitational acceleration)
- Unknowns: [[v]] in m/s and [[lambda]] in m

## System definition

The system is the flat interface between pure water and air at equilibrium. The vibrator disturbance generates a surface wave propagating horizontally from the excitation point. The fluid is treated as incompressible and irrotational with small amplitude.

## Physical model

The applicable model is the linear theory of surface waves in deep water. The relevant magnitudes are [[sigma]], [[rho]], [[g]], [[k]] and [[v]]. Since [[f]] is 130 Hz, the expected wavelength is of the order of millimetres, which places the wave in the capillary regime where [[sigma]] dominates over gravity.

## Model justification

To decide on the model, the gravitational and capillary terms of the combined dispersion relation are compared. With [[lambda]] of the order of millimetres, [[k]] is of the order of thousands of m⁻¹. The capillary term grows with [[k]] while the gravitational term decreases; for [[k]] greater than approximately 370 m⁻¹ (corresponding to [[lambda]] smaller than 1.7 cm), the capillary term dominates. The capillary formula is applied.

## Symbolic solution

The capillary formula gives [[v]] as the square root of [[sigma]] multiplied by [[k]] divided by [[rho]]. The relation between [[f]], [[v]] and [[lambda]] is [[v]] equal to [[f]] multiplied by [[lambda]], and [[k]] equal to two pi divided by [[lambda]]. Substituting and solving for [[v]] in terms of [[f]], [[sigma]] and [[rho]], one obtains [[v]] to the fourth equal to [[sigma]] multiplied by two pi multiplied by [[f]] squared, divided by [[rho]].

{{f:rapidez_capilares}}

## Numerical substitution

Computing [[v]] to the fourth as 0.073 multiplied by two pi multiplied by 130 squared divided by 998 gives approximately 0.03877 m⁴ s⁻⁴. Taking the fourth root, [[v]] is approximately 0.443 m/s. The wavelength is obtained as [[v]] divided by [[f]], that is, 0.443 divided by 130, giving [[lambda]] of approximately 3.4 mm.

## Dimensional validation

[[sigma]] has units N/m equal to kg s⁻², [[k]] in m⁻¹ and [[rho]] in kg m⁻³. The ratio has units kg s⁻² per m⁻¹ divided by kg m⁻³, equal to m² s⁻². The square root produces m s⁻¹, which is the correct dimension of [[v]].

## Physical interpretation

The result [[v]] of 0.44 m/s with [[lambda]] of 3.4 mm physically means that the capillary wave propagates at a speed comparable to a slow walk, perceptible to the naked eye in the laboratory. This indicates that [[sigma]] dominates completely over gravity at this scale: the restoring force maintaining the flat interface is surface tension. The [[f]] imposed by the vibrator is not a free parameter; it determines [[lambda]] through the dispersion relation. If soap were added reducing [[sigma]], [[v]] would decrease and [[lambda]] would also decrease, an effect physically consistent with the role of [[sigma]] as restoring force.

# Real-world example

## Context

In marine meteorology, oceanographic buoys measure the [[f]] of waves to estimate the propagation speed [[v]] and, from the difference in arrival times of different spectral components, the distance of the generating storm. A buoy records that the most energetic waves have [[f]] of approximately 0.083 Hz and [[lambda]] of approximately 225 m in deep water. Fluid data: [[g]] of 9.81 m/s², [[sigma]] of 0.072 N/m, [[rho]] of 1025 kg/m³ (seawater).

## Physical estimation

The [[f]] of 0.083 Hz corresponds to [[lambda]] of about 225 m. With [[k]] of approximately 0.0279 m⁻¹, the gravitational term is [[g]] divided by [[k]], that is, about 351 m² s⁻², while the capillary term is [[sigma]] multiplied by [[k]] divided by [[rho]], approximately 0.0000020 m² s⁻². The ratio between the two terms exceeds 175 million: the regime is purely gravitational and [[sigma]] is completely irrelevant for these ocean waves.

Applying the gravity formula, [[v]] is the square root of 351, giving approximately 18.7 m/s, equivalent to about 67 km/h. The group velocity, which transports energy, is half of [[v]], approximately 9.4 m/s. A storm 3000 km away would take about 3.7 days for its energy to reach the buoy.

## Interpretation

Waves with [[lambda]] of 225 m operate entirely in the gravitational regime; [[sigma]] and [[rho]] do not appear in the relevant formula. The celerity [[v]] of 18.7 m/s is the phase velocity: the speed at which the visible crests advance. Energy arrives later, at 9.4 m/s (group velocity). The [[f]] of 0.083 Hz cannot be chosen independently of [[lambda]]: it is determined by the gravitational dispersion relation for that [[lambda]] and [[g]]. The deep-water model is valid as long as the ocean depth exceeds [[lambda]] divided by two, that is, about 112 m, a condition met throughout most of the open ocean.
`;export{e as default};
