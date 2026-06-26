## Ideal model

The ideal model treats the solid as a linear elastic isotropic continuum. The mechanical response is completely described by two independent constants: [[modulo_de_young]] and [[nu_poisson]] (or equivalently [[modulo_de_cizalla]] and [[modulo_de_compresibilidad]]). The stress-strain relationship is linear, reversible and instantaneous. The material has no memory, does not dissipate energy and its properties are identical in all directions.

This simplification allows decomposing any stress state into a volumetric part and a deviatoric part, each governed by its corresponding modulus. Physically, this is equivalent to assuming the solid responds as an ideal spring: deformation is proportional to load and disappears completely upon removal.

## Hypotheses

- The material is isotropic: its elastic properties do not depend on the direction of applied stress. If this hypothesis is violated, more than two constants are needed and the relationship between [[modulo_de_young]], [[modulo_de_cizalla]] and [[nu_poisson]] ceases to be valid.

- Deformation is infinitesimal: strain is much less than unity (typically below 1%). If deformation is large (rubber, biological tissues), the linear relationship fails and nonlinear elasticity is needed.

- Behaviour is linearly elastic: stress is proportional to strain (Hooke law). If the elastic limit is exceeded, permanent plasticity appears and elastic constants no longer describe the response.

- The material is homogeneous: properties are uniform throughout the volume. In materials with composition gradients or variable porosity, moduli become position-dependent functions.

- The response is instantaneous: no viscous effects or time dependence. In polymers and biological materials, the response is viscoelastic and depends on loading rate.

## Quantitative validity domain

The model is valid for strains [[epsilon]] < 0.01 (1%) in most metals and ceramics. In these materials, the linear approximation error is below 1% when stress is below 50% of the yield strength.

For polycrystalline metals with equiaxed grains, the deviation from perfect isotropy is typically below 5%, justifying the use of two constants. In single crystals or textured materials, the error can exceed 20% in certain directions.

The order of magnitude of elastic moduli ranges from 0.01 GPa for soft elastomers to 1200 GPa for diamond. The Poisson ratio is thermodynamically limited to the range -1 < [[nu_poisson]] < 0.5.

## Model failure signals

- The [[modulo_de_cizalla]] calculated from [[modulo_de_young]] and [[nu_poisson]] differs from the experimentally measured value by more than 10%: possible anisotropy.

- The experimental stress-strain curve deviates from linearity before the expected yield stress: premature nonlinear behaviour, possible presence of microcracks or defects.

- The ratio between ultrasonic longitudinal and transverse velocities does not correctly predict the tabulated [[nu_poisson]]: the material may have crystallographic texture.

- The measured elastic modulus varies significantly with test frequency: presence of viscoelastic effects that the purely elastic model does not capture.

## Extended or alternative model

The most immediate extended model is anisotropic elasticity, where the material response depends on direction. A cubic crystal needs three independent constants, a transversely isotropic material needs five and the general triclinic case requires 21. The simple relationships between two moduli disappear and one works with the complete stiffness tensor.

For large deformations, nonlinear elasticity (hyperelasticity) is used, where stress is no longer proportional to strain but described through a stored energy function depending on strain tensor invariants.

For materials with time-dependent response (polymers, metals at high temperature), the model extends to viscoelasticity, where moduli become complex functions of frequency.

When to switch to the extended model: when the isotropic error exceeds 10% compared to experimental measurements, when the material presents obvious anisotropy (composites, single crystals) or when the loading frequency is high enough to activate viscoelastic effects.

## Operational comparison

| Criterion | Ideal isotropic model | Extended model |
|---|---|---|
| Constants needed | 2 | 3 to 21 (depending on symmetry) |
| Relationship between moduli | Exact algebraic | Generally nonexistent |
| Precision in metals | High (error below 5%) | Maximum |
| Precision in composites | Low (error above 20%) | High if constants are known |
| Analytical complexity | Low | High |
| Strain range | Infinitesimal | Finite (hyperelasticity) |