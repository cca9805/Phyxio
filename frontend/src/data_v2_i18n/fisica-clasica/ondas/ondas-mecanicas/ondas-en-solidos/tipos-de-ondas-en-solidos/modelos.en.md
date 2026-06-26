## Ideal model

The canonical model of wave types in solids assumes a **linear elastic, isotropic and homogeneous medium** of infinite extent (or half-space for surface waves). In this framework, the only information needed is two independent elastic constants — for example, [[modulo_de_young]] and [[nu]], or equivalently [[modulo_de_corte]] and [[rho]] — together with density.

In this model each wave type (P, S, Rayleigh) exists in pure and independent form, with no coupling between them. A compression disturbance generates exclusively a P-wave; a shear disturbance generates exclusively an S-wave. All three types travel at fixed velocities determined by the medium properties, and there is no dispersion: all frequencies advance at the same speed.

This simplified model captures the macroscopic behaviour of the vast majority of engineering materials in the frequency range of inspection ultrasonics and far-field earthquake seismology.

## Hypotheses

- The material is **isotropic**: elastic properties are identical in all directions. If this hypothesis is violated (carbon fibre, wood, biological tissue), the velocity of each wave type depends on the propagation orientation.

- The material is **homogeneous**: properties do not change from one point to another. If a property gradient exists (coating on substrate, layered soil), Rayleigh wave velocity becomes frequency-dependent.

- The regime is **linearly elastic**: stress is proportional to strain with the same moduli at any amplitude. If violated (plastic deformations, fracture), effective moduli change and wave velocities shift.

- The medium is **non-viscous**: no energy dissipation during propagation. Viscoelastic materials (polymers, biological tissues, saturated soils) exhibit attenuation and dispersion even in the homogeneous case.

- For the Rayleigh wave: the free surface is **flat** and the solid depth is **semi-infinite**. In plates or bars of finite thickness, the Rayleigh wave becomes Lamb waves with dispersion.

## Quantitative validity domain

The isotropic elastic model is valid when the wavelength exceeds the largest grain or defect size by at least a factor of 10. For steel with 50 µm grain size, this imposes frequencies below approximately 12 MHz for a P-wave at 5900 m/s. Above that frequency, grain scattering produces attenuation and dispersion not captured by the model.

In terms of deformation, the linear model is valid for strains below 0.1% for most metals; in rubbers and elastomeric polymers this limit can extend to 10%. The quantitative condition is that stress does not exceed 50% of the material yield stress.

For the Rayleigh wave, the homogeneous half-space model is valid when the wavelength is greater than 5 times the thickness of any surface layer with different properties. For inspection frequencies of 1 MHz and [[velocidad_de_onda_de_rayleigh]] of 3000 m/s, the wavelength is 3 mm, so the surface homogeneity hypothesis is valid if the coating is thinner than 0.6 mm.

## Model failure signals

- **Measured velocity depends on frequency**: the model predicts constant velocities. If the phase velocity varies with frequency, there is real dispersion (stratification or viscoelasticity) not captured by the ideal model.

- **Strong attenuation with distance**: a wave in an ideal elastic solid does not attenuate with distance (it only decreases geometrically due to wavefront divergence). If attenuation is much greater than geometric, there is a dissipative mechanism (viscosity, grain scattering, thermoelasticity) not modelled.

- **Appearance of extra unforeseen waves**: in an ideal isotropic solid only the three described families exist. If the test detects echoes or arrivals not explained by geometric reflections, there may be anisotropy or mode conversion at undeclared internal interfaces.

- **Velocity variation with amplitude**: in the linear model velocity does not depend on amplitude. If the test shows different velocities for pulses of different amplitude, the material is operating in the non-linear regime.

## Extended or alternative model

The most common extended model incorporates **linear viscoelasticity**: an imaginary part is added to the elastic moduli, producing frequency-proportional attenuation and a slight frequency dependence of phase velocity. This model captures the behaviour of polymers, biological tissues and fine saturated soils.

When the solid is layered, the model extends to **layered medium theory** (Thomson-Haskell transfer matrix), which predicts the dispersion of Rayleigh and Love waves as a function of layer geometry and properties.

For very high frequencies (high-resolution ultrasonics or fine-grain inspection), the **Mie scattering** or **grain Rayleigh scattering** model allows predicting the attenuation and dispersion produced by the material microstructure.

When to switch to the extended model: when measured attenuation exceeds the geometric prediction by a factor of 2; when measured velocity varies by more than 1% between two inspection frequencies separated by one octave; or when the material has documented layers with thickness greater than one tenth of the inspection wavelength. Switch to layered medium theory when working with coatings, layered soils or multi-layer plates.

## Operational comparison

| Criterion | Ideal elastic model | Linear viscoelastic model | Layered model |
|---|---|---|---|
| Input variables | [[modulo_de_young]], [[modulo_de_corte]], [[rho]], [[nu]] | [[modulo_de_young]], [[modulo_de_corte]], [[rho]], [[nu]], loss factor | Per-layer properties, thicknesses |
| Wave velocity | Constant with frequency | Slightly frequency-dependent | Strongly frequency-dependent |
| Attenuation | Geometric only | Proportional to frequency | Layer and frequency dependent |
| Applications | Metals, ceramics, hard rocks | Polymers, tissues, fine soils | Coatings, pavements, stratified soils |
| Computational complexity | Low | Moderate | High |
| Accuracy for fine-grain metals | High (error below 1%) | Unnecessary | Unnecessary |