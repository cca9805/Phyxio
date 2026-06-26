## Ideal model

The model describing the nature of sound in this leaf is that of a **plane harmonic wave** in a linear elastic medium. In this model, the pressure disturbance [[p_ac]] at any point in space and at any instant is a sinusoidal function of position and time, with constant amplitude [[p0_ac]] that is independent of position.

The medium is treated as **homogeneous, isotropic, and non-absorbing**: its properties (density and bulk modulus) are the same at all points and in all directions, and they dissipate no energy. Under these conditions, the wave propagates indefinitely without attenuation and [[v_son]] is constant throughout the domain. The compressions and rarefactions form plane wavefronts, parallel to each other and perpendicular to the propagation direction.

This model is the basis of sound wave analysis in most undergraduate and introductory university physics contexts.

## Hypotheses

- **Small amplitudes (linear regime):** [[p0_ac]] is much smaller than the static pressure of the medium. For air, this means [[p0_ac]] well below 101 325 Pa. If this hypothesis is violated, non-linear effects appear: harmonic generation, waveform distortion, and, in the limit, shock waves. The consequence of violating it is that the waveform would no longer be sinusoidal.

- **Plane wavefront:** The wavefront area is constant and perpendicular to the propagation direction. This hypothesis is valid far from a point source, where the spherical front can be locally approximated as planar. If violated, intensity decays with distance and amplitude decreases spatially.

- **Non-dispersive medium:** [[v_son]] does not depend on [[f_son]]. In air at audible frequencies, dispersion is negligible. If the medium were dispersive, different frequencies would travel at different speeds, distorting the temporal signal.

- **Adiabatic process:** The compressions and rarefactions occur without heat exchange with the surroundings. If the process were isothermal (slow), [[v_son]] would be lower than experimentally measured. Newton made this mistake when deriving the speed of sound before Laplace added the adiabatic correction.

- **Medium without flow:** Medium particles have no macroscopic drift velocity. If there is wind or current, the effective [[v_son]] is modified by the Doppler effect of a moving medium.

## Quantitative validity domain

The plane harmonic wave model is valid when:

- [[p0_ac]] is less than 1 % of the static pressure of the medium: for air, [[p0_ac]] must be below 1000 Pa. Above this level, non-linear effects become significant.
- The frequency satisfies the condition that [[lambda_son]] is much greater than the intermolecular spacing of the medium: for air at room temperature, this holds up to frequencies of the order of hundreds of MHz. The audible range (20 Hz to 20 kHz) satisfies this condition with a wide margin.
- The distance from the source is greater than a few [[lambda_son]], so that the wavefront can be locally approximated as planar. For a point source, the plane wave approximation is valid at distances greater than about 10 wavelengths.
- The medium has property variations at spatial scales much greater than [[lambda_son]]: temperature or density gradients varying over distances smaller than [[lambda_son]] produce scattering, and the plane wave model does not apply directly.

Concrete numerical condition: acoustic pressure amplitude [[p0_ac]] must be < 1000 Pa for the linear model to be valid in air.

## Model failure signals

- **Harmonic distortion:** If the measured signal contains frequencies that are multiples of the fundamental even though the source emits at a single frequency, the non-linear regime has begun. In the Coord graph, the wave is no longer a perfect sinusoid but shows asymmetries or "flattening" of the peaks.
- **Spatial amplitude attenuation:** If [[p0_ac]] decreases with distance even without expected geometric reflections or absorption, the plane wave model has failed and spherical or cylindrical geometry must be used.
- **Variation of [[v_son]] with amplitude:** In the non-linear regime, zones of very intense compression travel faster than rarefaction zones, progressively deforming the wave until a shock front forms (acoustic shock wave).
- **Waveform change in dispersive media:** If the shape of a sound pulse changes as it propagates (for example, a rectangular pulse broadens), the medium is dispersive and the single-frequency harmonic wave model no longer correctly describes the whole signal.

## Extended or alternative model

The **spherical wave** model extends the plane wave model to real point sources. In it, [[p_ac]] decays inversely with the distance from the source and [[I_ac]] decays with the square of the distance (inverse square law). This model is essential for calculating the sound level at various distances from a loudspeaker, a siren, or any compact source.

For high amplitudes, **non-linear acoustics** (Burgers model) describes how the sinusoidal wave progressively distorts, generating harmonics. This model is necessary in high-intensity sonotherapy (HIFU), lithotripsy, and shock wave studies.

When to switch to the spherical model: when the distance from the source is comparable to or smaller than the source dimensions, or when it is necessary to calculate how [[I_ac]] varies with distance; switch to non-linear acoustics when [[p0_ac]] exceeds 1 % of the static pressure of the medium or when the waveform shows observable distortion.

## Operational comparison

| Criterion | Plane harmonic wave | Spherical wave | Non-linear acoustics |
|---|---|---|---|
| Amplitude | Constant in space | Decreases as 1/r | Varies in complex way |
| Waveform | Pure sinusoid | Pure sinusoid (far field) | Distorted sinusoid |
| Intensity | Uniform at wavefront | Decreases as 1/r² | Variable with harmonics |
| Typical application | Qualitative analysis, classrooms | Loudspeakers, sirens, exposure | HIFU, shock waves, sonar |
| Mathematical complexity | Low | Medium | High |
| Linear range validity | Always (by hypothesis) | Always (by hypothesis) | Only in non-linear regime |
