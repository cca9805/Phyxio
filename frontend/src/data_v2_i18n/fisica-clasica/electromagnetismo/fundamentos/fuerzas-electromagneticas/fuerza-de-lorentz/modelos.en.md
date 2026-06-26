## Ideal model

The ideal model of the Lorentz force in this leaf is the **non-relativistic point-charge model in uniform fields**. In this model, the charged particle is treated as a point without spatial extension, the fields [[campo_electrico]] and [[campo_magnetico]] are uniform in the region of interest, and the velocity [[velocidad_de_la_particula]] is much less than the speed of light. The total force [[fuerza_de_lorentz]] is calculated as the sum of the electric and magnetic components at the instant of evaluation.

This model ignores the particle's reaction on the fields (radiation backreaction), the finite extent of the particle, quantum effects and relativistic corrections. It is the standard model of all classical electrodynamics of particles.

## Hypotheses

- **Point particle**: charge [[carga_electrica]] is concentrated at a point. Consequence of violation: one must use the extended charge distribution and calculate the force on each volume element; the result can differ significantly for non-symmetric geometries.
- **Uniform fields**: [[campo_electrico]] and [[campo_magnetico]] are constant in the region where the particle moves. Consequence of violation: the trajectory is more complex and in general is neither circular nor helical; the equations of motion must be integrated numerically.
- **Non-relativistic regime**: [[velocidad_de_la_particula]] << c. Consequence of violation: the effective mass of the particle increases with the Lorentz factor, the magnetic force changes and the circular trajectory radius differs from the value calculated with rest mass.
- **No radiation backreaction**: the accelerated particle does not radiate electromagnetic energy. Consequence of violation: the particle loses energy by radiation (Larmor braking); the circular trajectory spirals inward. In most introductory-level problems this correction is negligible.
- **Constant charge**: [[carga_electrica]] does not change with time or with [[velocidad_de_la_particula]]. Consequence of violation: in high-energy plasma or in the presence of nuclear reactions the charge can change; the model does not apply directly.

## Quantitative validity domain

The model is valid when [[velocidad_de_la_particula]] is less than 10 % of c (approximately 3×10⁷ m/s), a range in which relativistic corrections are below 1 %. For electrons in a vacuum tube accelerated by voltages below 2.5 kV, [[velocidad_de_la_particula]] < 0.1c and the classical model is correct. Above 25 kV for electrons, relativistic corrections exceed 1 % and the model begins to introduce appreciable errors.

For the uniform field hypothesis: valid when the dimensions of the field region are much larger than the particle's free path. In the mass spectrometer, the magnetic field is designed to be uniform in the semicircular trajectory region; deviations above 0.1 % of the field affect the precision of the mass measurement.

## Model failure signals

- **[[fuerza_magnetica]] grows without limit as [[velocidad_de_la_particula]] increases**: the classical model has no upper velocity limit; if velocities close to c are obtained, the model fails and relativistic mass must be used.
- **The trajectory does not close the expected circle**: in a real spectrometer, non-uniformity of [[campo_magnetico]] causes the radius to vary along the trajectory, and the particle does not reach the expected detector.
- **The particle loses energy even though only the magnetic field acts**: signal of radiation backreaction, an effect not included in the basic model.
- **[[fuerza_electrica]] varies along the trajectory**: indicates that the electric field is not uniform; field lines have significant curvature in the motion region and the uniform field model fails.

## Extended or alternative model

The extended model is the **relativistic Lorentz force model**, where the mass in Newton's second law is replaced by the relativistic mass, dependent on the Lorentz factor. The force expression retains the same form in terms of the four-vector, but the particle's kinetic momentum is no longer simply rest mass times [[velocidad_de_la_particula]].

The concrete difference: the radius of the circular trajectory in a magnetic field is no longer proportional to [[velocidad_de_la_particula]] but to the relativistic momentum of the particle. At relativistic speeds, the radius grows more slowly than [[velocidad_de_la_particula]] because the momentum increases with the Lorentz factor.

Switch to the relativistic model when the kinetic energy of the particle is comparable to its rest energy (rest mass times c squared). For electrons this occurs at speeds above 30 % of c; for protons, above 10 % of c in high-energy accelerators. Transition to this extended model when the classical model error exceeds the required precision.

## Operational comparison

| Criterion | Classical model | Relativistic model |
|---|---|---|
| Complexity | Low: algebraic formulas | High: Lorentz-factor correction |
| Velocity validity | v << c (error < 1 % for v < 0.1c) | Valid for any v < c |
| Circular trajectory radius | Proportional to v/B | Proportional to relativistic momentum |
| Required variables | [[carga_electrica]], [[velocidad_de_la_particula]], [[campo_magnetico]], [[campo_electrico]], [[sin_theta]] | Same plus relativistic kinetic energy |
| Typical use | Laboratory, low-energy spectrometers | Particle accelerators, nuclear physics |