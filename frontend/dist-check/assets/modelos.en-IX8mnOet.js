const e=`## Ideal model

The ideal model of the electric force treats [[q1]] and [[q2]] as **point charges** located at fixed positions in space. In this model it is assumed that all the charge of each object is concentrated at a single geometric point with no spatial extension, and that the medium between them is vacuum. The resulting force depends solely on the values of [[q1]], [[q2]] and the distance [[r]] between the points.

The central simplification of this model is to ignore the internal charge distribution and the atomic structure of the material. This is valid as long as the size of the objects is much smaller than the distance between them. Under this assumption, [[F_C]] is completely determined by three numbers: [[q1]], [[q2]] and [[r]], making the model mathematically tractable and pedagogically transparent.

The magnitudes that are conserved in the ideal model are [[q1]], [[q2]] and [[k_e]]. The freely varying magnitude is [[r]], the independent variable of the problem. The model ignores relativistic effects, charge quantisation and any higher-order interactions.

## Hypotheses

- **Point charges**: each charged object is represented by a total charge concentrated at a point. If this hypothesis is violated (extended objects), one must integrate the contribution of each charge element or use Gauss's theorem.
- **Vacuum or uniform dielectric**: the medium between the charges is homogeneous and isotropic. If there are inhomogeneous dielectric media, [[k_e]] must be replaced by the local permittivity of the medium, which may vary with position.
- **Stationary or quasi-static charges**: the charges are not moving or move very slowly compared to the speed of light. If velocities are comparable to the speed of light, Coulomb's law is incorrect and the Liénard-Wiechert electromagnetic field must be used.
- **Absence of magnetic shielding**: there are no external magnetic fields that modify the motion of the charges. This hypothesis delimits the purely electrostatic domain.

## Quantitative validity domain

Coulomb's model is valid for point charges when the distance [[r]] satisfies r > 2.8×10⁻¹⁵ m (classical electron radius), which is the lower limit below which quantum mechanics and nuclear forces dominate. In the laboratory, the point-charge approximation is reasonable when r is greater than 10 times the diameter of the charged object.

The relative error of treating a uniformly charged sphere of radius \\(a\\) as a point charge is below 1 % when r > 10·a. For laboratory charges with radii of millimetres (a ≈ 10⁻³ m), the point model is valid for r > 10⁻² m.

Regarding velocity, the model is accurate with an error below 1 % when the velocities of the charges satisfy v < 0.1·c, that is, velocities below 3×10⁷ m/s.

## Model failure signals

- **Force divergence as r decreases**: if reducing [[r]] yields forces of order 10⁸ N for laboratory charges, this signals that the point model has reached its limit.
- **Negative values of [[r]]**: if solving Coulomb's law for [[r]] yields a negative or imaginary value, there is an inconsistency in the input data.
- **Excessively large force for small charges**: if [[F_C]] exceeds several newtons with microcoulomb charges at laboratory distances (centimetres), check the unit conversion.
- **Asymmetry in Newton's third law**: if a student obtains that the force of [[q1]] on [[q2]] differs in magnitude from the force of [[q2]] on [[q1]], there is a calculation error. Coulomb's law guarantees strict symmetry.

## Extended or alternative model

When the charges are not point-like but distributed over a volume, surface or line, Coulomb's law is extended through **integration over the charge distribution**. The total force is calculated by vectorially adding the contributions of each differential charge element, applying Coulomb's law to each pair (element of [[q1]]) – (charge [[q2]]). This extended model is the starting point for calculating the electric field of charged rods, discs and spheres.

For dielectric media, the constant [[k_e]] is replaced by \\(k_e / \\varepsilon_r\\), where \\(\\varepsilon_r\\) is the relative permittivity of the medium. This extended model is valid for linear, homogeneous and isotropic media and explains why the force between ions in water is eighty times weaker than in vacuum.

When to switch to the extended model: when the size of the charged object is comparable to the distance [[r]] between objects (r < 10·a), when the medium is not vacuum, or when precision is required for problems with non-spherical geometries.

## Operational comparison

| Criterion | Ideal model (point charge) | Extended model (distribution) |
|---|---|---|
| Mathematical complexity | Direct substitution | Vector integration |
| Geometric requirement | r >> object size | No size restriction |
| Medium | Vacuum only | Any linear dielectric |
| Solving time | Seconds | Minutes to hours |
| Accuracy | High when r >> a | High in general |

The ideal model is the reference tool for standard laboratory problems and for introducing the concepts of electric force and electric field. The extended model is necessary for sensor engineering, design of non-planar capacitors and biophysics of ions in solution.
`;export{e as default};
