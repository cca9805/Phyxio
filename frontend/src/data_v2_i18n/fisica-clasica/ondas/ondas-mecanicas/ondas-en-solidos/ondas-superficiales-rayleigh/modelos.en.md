## Ideal model

The ideal model is a **homogeneous, isotropic, linearly elastic half-space** with a flat free surface. In this framework, the Rayleigh wave propagates without dispersion at constant velocity [[velocidad_de_onda_de_rayleigh]] (independent of frequency), its amplitude decays exponentially with depth [[z_prof]], and particles describe retrograde ellipses whose major semi-axis is vertical.

This model allows deriving the Rayleigh secular equation, the Viktorov approximation for [[velocidad_de_onda_de_rayleigh]], and the relationship between penetration depth [[d_pen]] and wavelength [[longitud_de_onda_de_rayleigh]].

## Hypotheses

- **Isotropy**: elastic properties are equal in all directions. Violation: in foliated metamorphic rocks or laminated composites, Rayleigh velocity depends on propagation direction relative to the layers.
- **Homogeneity**: properties do not vary with position or depth. Violation: any vertical velocity gradient introduces dispersion and modifies the penetration depth.
- **Linear elasticity**: the stress-strain relationship is proportional. Violation: near intense seismic sources or in granular materials at low confining pressures, nonlinear effects appear.
- **Flat, infinite free surface**: no topography or lateral edges. Violation: topography (hills, valleys) diffracts and focuses Rayleigh waves, modifying local amplitudes.
- **No intrinsic dissipation**: the Q factor is infinite. Violation: in materials with attenuation (partially saturated soils, polymers), amplitude also decays horizontally through absorption.

## Quantitative validity domain

- Rayleigh wavelength much larger than medium heterogeneities: [[longitud_de_onda_de_rayleigh]] at least 10 times larger than grain or fracture size.
- Frequencies between 0.5 Hz and 200 MHz (from regional seismology to SAW devices in microelectronics).
- For natural soils, the homogeneous model is valid only if [[v_s]] variation with depth is less than 20 percent within one wavelength.
- Topography with slopes less than 15 degrees from horizontal.
- Strains below 0.001 (linear elastic regime in most rocks and metals).

## Model failure signals

- The measured dispersion curve (phase velocity vs frequency) is not flat: indicates stratification and the homogeneous model no longer applies.
- Observed particle motion is not retrograde elliptical: may indicate anisotropy, complex topography, or superposition with Love waves.
- Measured surface amplitude decays faster with horizontal distance than cylindrical divergence predicts: indicates unmodelled intrinsic attenuation.
- Differences in [[velocidad_de_onda_de_rayleigh]] with propagation direction exceeding 5 percent: indicates medium anisotropy.

## Extended or alternative model

When the homogeneous model fails, one should transition to the **stratified half-space model (Thomson-Haskell matrix method)**. This model solves propagation in a system of horizontal layers, each homogeneous, producing dispersive Rayleigh modes. It is the basis of the MASW method and surface wave inversion.

For anisotropic media, the generalised secular equation incorporating full elastic tensors is used. For complex topography, numerical methods (finite elements or finite differences) are employed. The transition to the stratified model is necessary when the measured dispersion curve shows [[velocidad_de_onda_de_rayleigh]] variation with frequency exceeding 10 percent.

## Operational comparison

| Aspect | Ideal model (homogeneous) | Extended model (stratified) |
|--------|---------------------------|------------------------------|
| Dispersion | Non-dispersive: [[velocidad_de_onda_de_rayleigh]] constant | Dispersive: [[velocidad_de_onda_de_rayleigh]] function of frequency |
| Penetration | Fixed: [[d_pen]] equals [[longitud_de_onda_de_rayleigh]] | Variable: depends on layer profile |
| Required data | [[v_s]] and [[nu_poisson]] of the medium | Profile of [[v_s]], thickness and density of each layer |
| Application | Quick calculation in uniform materials | Soil profile inversion (MASW, SASW) |
| Accuracy | Exact for uniform half-space | Needed when [[v_s]] variation exceeds 20 percent within one wavelength |
| Complexity | Closed algebraic formula (Viktorov) | Numerical solution of generalised secular equation |