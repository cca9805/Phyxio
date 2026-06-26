## Ideal model

The ideal model of Maxwell's differential formulation describes the behavior of electric field [[campo_electrico]] and magnetic field [[campo_magnetico]] in absolute vacuum, assuming that space is a mathematical continuum without atomic structure and that fields are infinitely differentiable functions. In this model, interactions occur locally and the speed of light [[velocidad_de_la_luz]] is an insurmountable universal constant.

## Hypotheses

The differential formulation of Maxwell's equations is based on a series of mathematical and physical assumptions:
1. **Medium Continuity**: Space is assumed to be a continuum where fields are defined at each point. The granular structure of matter at subatomic scales is not considered.
2. **Differentiability**: The functions describing the fields must be differentiable. This implies that there can be no abrupt jumps or infinite discontinuities in the field within the analyzed domain.
3. **Medium Linearity**: The constants [[epsilon0]] and [[mu0]] are assumed to be constant scalars that do not depend on field strength or direction.
4. **Classical Regime**: The model ignores the effects of quantum mechanics and general relativity (space-time curvature).

## Quantitative validity domain

This model is extremely accurate over a very wide domain, but has clear limits:
- **Spatial Limit**: The model is valid for distances greater than the scale of \(10^{-15} \ \mathrm{m}\). Below this radius (atomic nucleus scale), quantum effects dominate. At this scale, the **order of magnitude** of the charge density [[rho]] of a point particle would cause an infinite and unmanageable mathematical divergence [[divergencia_de_e]].
- **Intensity Limit**: The equations are linear up to fields of the **order of magnitude** of \(10^{18} \ \mathrm{V/m}\) (Schwinger limit), where the vacuum itself begins to behave non-linearly due to the creation of particle-antiparticle pairs.
- **Frequency**: Valid from rest up to gamma ray frequencies (lower than \(10^{22} \ \mathrm{Hz}\)).

## Model failure signals

There are scenarios where the differential model emits observable signals that its limit has been reached:
1. **Infinite Divergences**: If when calculating [[divergencia_de_e]] the result tends to infinity at a point, it indicates that the point charge approximation has failed and a spatial distribution or quantum model is required.
2. **Interface Inconsistencies**: When approaching a boundary between two media (such as air and metal), if spatial derivatives cannot be defined, the differential model fails. A mathematical discontinuity is observed.
3. **Loss of Energy Conservation**: If in a dynamic calculation the displacement current proportional to [[variacion_temporal_de_e]] is not included, the resulting system violates charge conservation, a critical signal of an incomplete model failure.

## Extended or alternative model

When the above signals are detected, a transition is necessary:
- **Integral Formulation**: In the face of point singularities or problems with high symmetry, it is advisable to **transition to** Maxwell's integral model. This allows "avoiding" the singularity by enclosing it in a finite volume where global laws are still valid.
- **Boundary Conditions**: At abrupt interfaces, the **extended model** consists of applying jump equations (boundary conditions) instead of trying to differentiate across the discontinuity.
- **Quantum Electrodynamics (QED)**: At subatomic scales or extreme fields, one must **move to** the quantum field model.

## Operational comparison

| Feature | Differential Formulation | Integral Formulation |
| :--- | :--- | :--- |
| **Approach** | Local (point to point) | Global (volume/surface) |
| **Tool** | Nabla Operators (\(\nabla\)) | Closed integrals |
| **Main Use** | Waves, simulations, QFT | Circuits, flux, symmetry |
| **Limit** | Discontinuities, interfaces | Does not detail point interior |
| **Causality** | Explicit and local | Averaged in space |