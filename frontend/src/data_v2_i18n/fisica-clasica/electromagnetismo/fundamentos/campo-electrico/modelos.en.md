## Ideal model

The **point-charge model** is the central idealization of this leaf. In it, the entire source charge [[q_fuente]] is concentrated at a dimensionless geometric point, and the surrounding space is vacuum with constant permittivity. Under these hypotheses, the electric field [[campo_electrico]] at any point is completely determined by [[q_fuente]], the constant [[k_e]], and the distance [[distancia_a_la_carga_fuente]].

This model preserves the essential physical quantity—the inverse-square distance dependence—and deliberately ignores the internal structure of the source charge, displacement currents, and temporal field variations. It is the starting point for computing the field of any charge distribution via the superposition principle.

## Hypotheses

- **Point charge**: the physical size of the source charge is negligible compared to the evaluation distance [[distancia_a_la_carga_fuente]]. If this hypothesis is violated (extended object at a distance comparable to its size), the real field diverges from the point model and elemental contributions must be integrated.
- **Strict electrostatics**: charges are at rest or move so slowly that currents are negligible. If charges move at appreciable speeds, magnetic fields appear and the electrostatic model is insufficient.
- **Vacuum or homogeneous linear medium**: no nonlinear polarization or dielectric inhomogeneities. In media with permittivity gradients, field lines refract at interfaces.
- **No shielding**: there are no conductors or dielectrics in the environment that would redistribute induced charges. Nearby conductors radically alter the field distribution.

## Quantitative validity domain

The point-charge model is applicable when the distance to the evaluation point satisfies r > 2.8×10⁻¹⁵ m (classical electron radius). For macroscopic objects, the point approximation is valid when the evaluation distance is at least ten times the charged object's dimension; in practice this means r > 10 times the object radius.

Regarding charge velocity, the model is reliable when source charge speeds are below 10 % of the speed of light; above that threshold, magnetic and relativistic effects exceed 1 % and become relevant.

## Model failure signals

- The computed field grows without limit as [[distancia_a_la_carga_fuente]] decreases: the point model predicts an infinite field as r tends to zero, which in practice indicates that the evaluation scale has reached the actual size of the charged object.
- The resulting field lines are not radial: in configurations with nearby conductors or dielectrics, the real field distorts from the radial point pattern. If a simulation shows unexpectedly curved lines, there are induced charges that the model ignores.
- Experimentally measured field does not decay with the square of distance: this may indicate that the real distribution is extended (cylinder, plate) or that the environment is not free vacuum.

## Extended or alternative model

The **continuous distribution model** extends the point model to objects with charge distributed over volume, surface, or length. Instead of evaluating the field of a single [[q_fuente]], the distribution is divided into infinitesimal elements \(dq\) and the contribution of each is integrated. This model recovers the point model as a limiting case when all charge concentrates at a point.

The **dielectric model** replaces [[k_e]] with the ratio of [[k_e]] to the relative permittivity of the medium, reducing field strength in polarizable materials. The **quantum field model** (quantum electrodynamics) is the fundamental model valid at sub-atomic scales, where the field is described via virtual photons.

When to switch to the continuous distribution model: when the charged object has dimensions comparable to the evaluation distance, or when the charge has symmetry (spherical, cylindrical, planar) that simplifies the integral via Gauss's law.

## Operational comparison

| Criterion | Point model | Continuous distribution model |
|---|---|---|
| Computational complexity | Minimal: one direct formula | Medium-high: requires integration |
| Applicability range | r much larger than source size | Any r if geometry is tractable |
| Precision for extended objects | Low when r is comparable to size | High, exact for symmetric geometries |
| Recommended tool | Direct Coulomb formula | Gauss's law or direct integration |
| Observable failure signal | Field does not decay as 1/r² with distance | Divergent or asymmetric integral |