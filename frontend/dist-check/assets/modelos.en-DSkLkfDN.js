const e=`# Models: Introduction to waves in solids

## Ideal model

The ideal model of wave propagation in solids assumes an infinite, homogeneous, isotropic and linearly elastic medium. In this regime, longitudinal and transverse waves propagate independently at constant velocities that depend solely on the elastic constants and the material density. There is no dispersion, attenuation or mode conversion.

## Hypotheses

- The solid is linearly elastic: the stress-strain relationship is proportional (generalised Hooke's law). If violated, nonlinear effects and harmonic generation appear.
- The medium is homogeneous: properties [[E_young]], [[G_mod]] and [[rho]] are uniform throughout the volume. If there are gradients, velocity varies with position.
- The medium is isotropic: elastic properties do not depend on direction. In anisotropic materials velocity depends on propagation angle.
- The wave is planar: the wavefront is uniform across the cross-section. This requires [[lambda]] to be much greater than the transverse dimensions of the part.
- There is no dissipation: amplitude does not decrease with distance. In real materials there is always attenuation from internal absorption and grain boundary scattering.

## Quantitative validity domain

The model is valid when wavelength [[lambda]] is at least 5 times greater than the largest transverse dimension of the part. For a bar of diameter d, the criterion is that frequency must be below [[v_fase]] divided by five times the diameter. For metals with typical velocities of 5000 m/s and diameters of 20 mm, the limit is about 50 kHz. Below this, the plane wave model error is less than 5%.

At higher frequencies guided modes appear whose velocity depends on frequency and exact geometry.

## Model failure signals

- Measured velocity varies with frequency: indicates geometric dispersion (the plane wave model is no longer valid).
- Multiple arrivals are detected in the same direction: there is mode conversion or unforeseen reflections.
- Amplitude decreases faster than the inverse of distance: there is significant unmodelled attenuation.
- Theoretical results do not match measurements on small parts at high frequencies: guided modes dominate.

## Extended or alternative model

The extended model introduces viscoelasticity (complex modulus) to capture attenuation and dispersion. Young's modulus is replaced by a complex modulus whose real part controls velocity and whose imaginary part controls attenuation. Additionally, for finite geometries, waveguide models are used: Pochhammer-Chree for cylindrical bars and Lamb for plates.

When to switch to the extended model: the transition is necessary when measured attenuation exceeds 5% per wavelength, when frequency exceeds the plane wave limit, or when frequency dependence of velocity in polymeric or composite materials needs to be modelled.

## Operational comparison

- **Ideal model (elastic, homogeneous)**: constant velocity, frequency-independent. A single algebraic formula. Useful for quick estimates and preliminary designs.
- **Extended model (viscoelastic, waveguide)**: velocity and attenuation depend on frequency. Requires solution of transcendental or numerical equations. Necessary for transducer design, high-frequency ultrasonic inspection and composite material analysis.
- **Accuracy**: the ideal model has errors below 5% when hypotheses hold. The extended one can achieve errors below 1% with correct material data.
- **Range of application**: the ideal serves for thin bars at low and moderate frequencies; the extended for any geometry and the full frequency range.
`;export{e as default};
