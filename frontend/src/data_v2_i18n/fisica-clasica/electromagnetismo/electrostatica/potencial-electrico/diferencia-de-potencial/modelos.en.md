## Ideal model

The standard model of potential difference treats the electric field as a conservative field in vacuum. [[diferencia_de_potencial]] is defined as the work per unit positive charge that the field does when moving a charge from A to B, with this work being independent of the chosen path.

For the uniform field case—the most common at secondary level—the model simplifies the calculation: potential difference is proportional to the field and to the projection of the displacement along the field direction. This simplification retains all relevant physics for systems with planar symmetry.

## Hypotheses

- Source charges are at rest: electrostatic regime, no time-varying currents.
- The medium is vacuum or a linear, homogeneous, isotropic dielectric: permittivity is constant in space and time.
- The electric field is conservative: the circulation of the field over any closed path is zero.
- The test charge [[carga_de_prueba]] is small enough not to perturb the field being measured.
- In the uniform field case: the charge distribution has planar symmetry and fringe effects are negligible.

Violating any of these hypotheses invalidates the model to a greater or lesser degree: time-varying fields destroy the conservative character; inhomogeneous media change the local permittivity; large test charges perturb the source field.

## Quantitative validity domain

The classical conservative model applies within the following quantitative conditions:

- **Quasi-static regime**: the field variation frequency must satisfy f < 1 MHz for laboratory dimensions below 1 m, ensuring the magnetic contribution to the potential is negligible (< 1 % of the scalar potential).
- **Energy scale**: potential differences must be below 0.511 MV, above which QED modifies vacuum behaviour.
- **Distance scale**: classical integration is valid for r > 10⁻¹⁰ m; below that, quantum effects dominate.
- **Uniform field approximation**: the field-times-distance formula introduces an error below 1 % when the plate lateral dimensions are at least 10 times greater than the separation [[distancia_entre_puntos]].

## Model failure signals

The model ceases to apply in the presence of the following observable symptoms:

- The measured potential difference between two points depends on the instrument path: unambiguous sign of a non-conservative field (time-varying field or induced magnetic field).
- The calculated field exceeds 3×10⁶ N/C in air: dielectric breakdown occurs and the classical vacuum is no longer a valid medium model.
- Results change significantly when source charges are displaced with the same nominal geometry: the test charge is perturbing the field.
- Uniform-field calculations give different results near the capacitor edges versus the centre: active fringe effect, uniform-field model invalid in that region.

## Extended or alternative model

When the quasi-static regime is insufficient, the full Maxwell electromagnetic model is used. In this model, the scalar potential alone is not enough and must be complemented by a magnetic vector potential; potential difference is then defined only along specific paths and depends on the chosen gauge.

An important practical extension is the dielectric media model: in a material with relative permittivity greater than unity, the potential difference for the same free charge distribution decreases, since the dielectric's bound charges partially compensate the electric field.

When to switch to the extended model: when the field frequency exceeds 1 MHz for laboratory dimensions, or when the dielectric between the electrodes is inhomogeneous. Transition to the full Maxwell formulation when magnetic induction effects are detectable in the measurement.

## Operational comparison

| Situation | Appropriate model | Precision / Limitation |
|-----------|------------------|----------------------|
| Flat capacitor in vacuum, away from edges | Uniform field: potential difference proportional to field and separation | Error below 1 % for large plates |
| Point charge or symmetric distribution | Coulomb potential: analytic integration of force per unit charge | Does not apply in inhomogeneous media |
| Oscillating field, frequency above 1 MHz | Full Maxwell: scalar potential plus magnetic vector potential | Requires gauge choice |
| Dielectric medium with known permittivity | Ideal model with effective permittivity of the dielectric material | Requires knowing the relative permittivity |