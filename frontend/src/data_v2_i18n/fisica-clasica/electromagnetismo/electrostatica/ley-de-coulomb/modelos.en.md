## Ideal model

The ideal model of Coulomb's law treats charges as **mathematical point charges**: all charge concentrated at a single point in space, with no extent, no internal structure, no induction effects. In this model, the force between [[q1]] and [[q2]] depends only on their values and on [[r12]], and obeys the inverse-square relation exactly.

This model retains the essential magnitudes of the leaf — [[q1]], [[q2]], [[r12]], [[fuerza_de_coulomb]] and [[k_e]] — and deliberately ignores the real geometry of the objects, surface charge redistribution, relativistic effects, and any magnetic interaction. It is exact in the mathematical sense when the dimensions of the objects are much smaller than [[r12]].

## Hypotheses

- **Negligible extent**: the charged objects are point-like or, equivalently, their size is much smaller than the separation [[r12]]. If this hypothesis is violated, the actual force differs from the model prediction because the surface charge distribution no longer behaves as a point charge.
- **Fixed charges in space**: the charges do not move during the analysis time. If they move, Maxwell's electrodynamics is necessary and Coulomb's law provides only the electrostatic component.
- **Vacuum or homogeneous isotropic medium**: the interaction occurs in vacuum or in a uniform dielectric that can be described by a single relative permittivity. Inhomogeneous or anisotropic media require differential treatment.
- **No nearby conductors**: the presence of conducting surfaces redistributes charges by induction, creating image forces that modify [[fuerza_de_coulomb]]. The ideal model ignores these effects.

## Quantitative validity domain

The point charge model is reasonably accurate when the distance [[r12]] exceeds the characteristic size of the charged objects by at least one order of magnitude. For spheres of 1 cm radius, the point model is valid for [[r12]] greater than 10 cm, with an error below 1%.

The energy scale at which Coulomb's law loses validity due to quantum effects is the Bohr atom scale: a radius of approximately 0.05 nm. Below 0.1 nm, electron diffraction effects are comparable to the classical forces.

At distances greater than 1 m with laboratory charges (microcoulombs), [[fuerza_de_coulomb]] falls below 10⁻³ N and may become comparable to spurious mechanical forces, making direct measurement difficult but not invalidating the model.

## Model failure signals

- **Negative [[fuerza_de_coulomb]] result**: the scalar model always gives positive magnitudes. A negative result indicates that the signed product of charges is being used instead of the absolute value, or that there is a conceptual error in the applied formula.
- **[[fuerza_de_coulomb]] increasing as [[r12]] increases**: Coulomb's law produces a force that decreases with distance. If experimental data show the opposite, there is influence from additional charges, induction from nearby conductors, or measurement error.
- **Result in the kN range for μC charges at cm distances**: this range is physically plausible but extreme; verify that [[r12]] was not entered in centimetres without converting to metres.
- **Divergence near the origin**: in numerical simulations, if [[r12]] approaches zero, [[fuerza_de_coulomb]] grows without bound. This signal indicates that the model has reached its singularity and the computation must be stopped.

## Extended or alternative model

For objects with real extent — spheres, cylinders, charged planes — the point model is extended by integrating the contribution of each differential charge element. The result is the electric field of the distribution, which in symmetric cases reduces to Gauss's law.

For charges moving at appreciable velocities, the natural extension is the Liénard-Wiechert electrodynamics, where the force depends not only on the current position but on the retarded position and on the velocity and acceleration of the source charge.

When to switch to the extended model: when the size of the charged objects exceeds ten percent of [[r12]], when the objects are conductors with redistributable charge, or when velocities exceed 1% of the speed of light.

## Operational comparison

| Criterion | Ideal model (Coulomb point) | Extended model (distributions) |
|---|---|---|
| Applicability | Point charges, large [[r12]] | Macroscopic objects with shape |
| Complexity | Direct algebra | Integration or symmetry (Gauss) |
| Accuracy | Exact for points; error for objects | Exact when integrated correctly |
| Variables | [[q1]], [[q2]], [[r12]], [[k_e]] | Charge density, geometry, position |
| Typical error | Confusion about squaring [[r12]] | Incorrect choice of Gaussian surface |