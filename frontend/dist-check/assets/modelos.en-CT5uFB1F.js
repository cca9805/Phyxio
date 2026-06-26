const e=`## Ideal model

The ideal model of the superposition principle treats each source charge as a **point charge** at a fixed position, surrounded by vacuum. In this model it is assumed that the total field or force results from adding exactly [[N_cargas]] independent contributions, with no source charge modifying the distribution of the others.

The quantities conserved in the model are [[k_e]], the signed values of each [[q_i]], and the geometric positions of each charge. The quantities that vary freely are the distances [[r_i]] to the observation point, which change when the field is evaluated at different points in space.

The model ignores induction effects: in reality, the presence of an external charge can redistribute charges on nearby conductors, modifying the effective positions. The ideal model assumes the charges are fixed or that the charged objects are non-conductors.

## Hypotheses

- **Point charges**: each charged object is represented by its total charge concentrated at a point. If this hypothesis is violated (extended objects), the discrete sum must be replaced by integration over the charge distribution.
- **Fixed positions**: charges do not move during the calculation. If charges move (electrodynamics), retarded field and radiation effects must be added.
- **Linear medium**: the space between charges is vacuum or a homogeneous linear dielectric. In non-linear media, fields do not superpose independently.
- **Absence of induction effects**: source charges do not redistribute in response to the field of the others. This hypothesis fails for conductors in close proximity.
- **Electrostatic regime**: charges are at rest or move very slowly. For charges moving at speeds comparable to the speed of light, superposition remains valid but each charge's field is the Liénard-Wiechert field, not the static Coulomb field.

## Quantitative validity domain

The point charge superposition model is valid when the separation distance between charged objects is greater than 10 times their characteristic size. For spheres of radius 1 cm, the point charge approximation is reasonable for distances r > 10 cm between centres.

The relative error when using the point model for a conducting sphere at distance r is less than 1 % when r > 10·a, where \`a\` is the sphere radius. For r > 2·a the error is of order 5 %.

The charge velocity must be below 0.01·c, that is, below 3×10⁶ m/s, for relativistic effects to be negligible (correction below 0.01 %).

## Model failure signals

- **Field that does not decrease with the expected distance dependence**: if [[E_total]] does not decrease approximately as the inverse square of the distance when moving away from a charge, there may be uninduced charge redistribution not accounted for.
- **Force that does not obey Newton's third law**: if the calculated force of [[q_i]] on the test charge is not equal and opposite to the force of the test charge on [[q_i]], there is an error in the computation of unit vectors.
- **Result that depends on the test charge chosen to measure the field**: [[E_total]] must be independent of the test charge value. If changing the test charge changes the computed field, induced charges are modifying the source distribution.
- **Zero field where it should not be zero**: if the system has charges of only one sign but a zero [[E_total]] point is obtained between them, there is a sign error in some contribution.

## Extended or alternative model

When charges are not point-like but distributed over a volume, surface or line, the superposition principle remains valid but the discrete sum is replaced by an **integral over the charge distribution**. Each charge differential \`dq\` contributes to the field with its own Coulomb term, and [[E_total]] is obtained by integrating all contributions.

For distributions with high symmetry (spherical, cylindrical, planar), Gauss's law is the most efficient method because it avoids explicit integration. When to switch to the continuous distribution model: when the field source is an extended object whose size is comparable to the observation distance, when high precision is required, or when the system has non-point geometry.

When to switch to Gauss's law instead of direct summation: when the system has spherical, cylindrical or planar symmetry, which reduces the three-dimensional integral to a simple algebraic expression.

## Operational comparison

| Criterion | Ideal model (point charges) | Extended model (continuous distribution) |
|---|---|---|
| Accuracy | High for small objects at large distances | High for any geometry |
| Complexity | Sum of N vector terms | Three-dimensional vector integration |
| Range of application | Objects much smaller than their separation | Extended objects at any distance |
| Symmetry required | None | Not required, but simplifies if present |
| Mathematical tool | Vector algebra | Integral calculus or Gauss's law |
`;export{e as default};
