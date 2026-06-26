const e=`# Exam-type example

## Problem statement

Three point charges are placed at the vertices of a right triangle in the horizontal plane. The charge of 4 µC is at the origin, the charge of −3 µC is at 0.30 m to the right of the origin, and the charge of 2 µC is at 0.40 m above the origin. Calculate the total electric force acting on a fourth test charge of 1 µC placed at the origin of the system.

## Data

- Charge at A (origin): 4 µC (this is the test charge alongside the three source charges)
- Charge B: −3 µC at 0.30 m to the right of the origin
- Charge C: 2 µC at 0.40 m above the origin
- Test charge Q: 1 µC at the origin
- Coulomb constant: [[k_e]] approximately 8.99×10⁹ N·m²·C⁻²
- Number of source charges [[N_cargas]]: 2 (charge B and charge C)

## System definition

The source charges are taken as charge B of −3 µC at distance [[r_i]] of 0.30 m on the positive x-axis, and charge C of 2 µC at distance [[r_i]] of 0.40 m on the positive y-axis. The test charge of 1 µC is at the origin. The reference frame has the x-axis pointing right and the y-axis pointing up.

## Physical model

The superposition principle is applied: [[F_total]] on the test charge is the vector sum of the Coulomb force exerted by B and the Coulomb force exerted by C, computed independently. Each contribution uses Coulomb's law formula with the corresponding [[q_i]], its [[r_i]] to the origin, and the unit direction vector from the source charge to the origin.

## Model justification

The point charge model is valid because the distances between charges (0.30 m and 0.40 m) are much larger than the size of the charged objects (estimated at millimetres for laboratory charges). The regime is electrostatic since the charges are at rest. The medium is air, which behaves as vacuum for this distance range (relative permittivity of 1.0006, negligible). The superposition principle is applicable because air is a linear medium.

The model would cease to be valid if the distances were comparable to the size of the objects, or if there were nearby conductors inducing charge redistribution.

## Symbolic solution

Applying the superposition principle for electric force:

{{f:superposicion_fuerza}}

Contribution of charge B (−3 µC, position (0.30, 0)):

The vector from B to the origin points in direction (−1, 0), i.e. to the left. The force is **attractive** because [[q_i]] is negative: the force on the positive test charge points towards B, i.e. in the +x direction. Therefore the x-component of B's contribution is positive.

Magnitude of B's contribution: [[k_e]]·|[[q_i]]|·|Q| / [[r_i]]².

Contribution of charge C (2 µC, position (0, 0.40)):

The vector from C to the origin points in direction (0, −1), i.e. downward. The force is **repulsive** because [[q_i]] is positive: the force on the positive test charge points away from C, i.e. in the −y direction. Therefore the y-component of C's contribution is negative.

Magnitude of C's contribution: [[k_e]]·[[q_i]]·|Q| / [[r_i]]².

The total electric field can also be computed independently of the test charge:

{{f:superposicion_campo}}

Field total components: x contributed by B, y contributed by C. Dividing each force contribution by the test charge value (1×10⁻⁶ C) gives the corresponding field component: [[E_total]] at the origin has an x-component of approximately +3.0×10⁵ N/C and a y-component of approximately −1.1×10⁵ N/C, for a resultant magnitude of approximately 3.2×10⁵ N/C.

## Numerical substitution

Magnitude of the force of B on Q:

Multiply [[k_e]] (8.99×10⁹) by the absolute value of [[q_i]] of B (3×10⁻⁶ C) by the test charge (1×10⁻⁶ C) and divide by the square of [[r_i]] of B (0.30 m)². The result is approximately 8.99×10⁹ × 3×10⁻⁶ × 1×10⁻⁶ / 0.09, which gives approximately 0.2997 N. Thus the x-component of [[F_total]] due to B is approximately +0.30 N.

Magnitude of the force of C on Q:

Multiply [[k_e]] (8.99×10⁹) by [[q_i]] of C (2×10⁻⁶ C) by the test charge (1×10⁻⁶ C) and divide by the square of [[r_i]] of C (0.40 m)². The result is approximately 8.99×10⁹ × 2×10⁻⁶ × 1×10⁻⁶ / 0.16, which gives approximately 0.1124 N. The y-component of [[F_total]] due to C is approximately −0.11 N (repulsion downward).

Vector sum:

Total x-component: approximately +0.30 N.
Total y-component: approximately −0.11 N.

Magnitude of [[F_total]]: square root of (0.30² + 0.11²) ≈ square root of (0.090 + 0.012) ≈ square root of 0.102 ≈ 0.32 N.

Angle with respect to the x-axis: arctan(0.11 / 0.30) ≈ 20° below the positive x-axis (i.e. in the fourth quadrant).

## Dimensional validation

The dimension of [[F_total]] is force. Verifying the dimensional chain:

The dimensions of the involved quantities: [[k_e]] has dimension of force times length squared per charge squared; [[q_i]] has dimension of charge; [[r_i]] has dimension of length.

Combining their dimensions:

\`[M L³ T⁻⁴ I⁻²]\` × \`[I T]\` × \`[I T]\` / \`[L²]\` = \`[M L T⁻²]\`, which is the dimension of force (newton). Dimensional validation is correct.

## Physical interpretation

The positive test charge at the origin experiences a resultant force of approximately 0.32 N pointing predominantly to the right and slightly downward. The result makes qualitative sense: charge B is negative and closer (0.30 m), so its attractive contribution to the right dominates. Charge C is positive and somewhat farther (0.40 m), so its repulsive contribution downward is smaller in magnitude.

If charge B doubled its magnitude, its contribution would double to approximately 0.60 N, and [[F_total]] would increase significantly in the x-direction. If the distance to B doubled to 0.60 m, B's contribution would fall to one quarter (approximately 0.075 N) by the inverse-square law, and C's contribution would come to dominate.

The direction of [[F_total]] indicates where the test charge would move if released: it would accelerate to the right and slightly downward, following the vector resultant. The simultaneous presence of negative charge B and positive charge C creates a net force that points in neither direction individually but in the direction dictated by superposition.

---

# Real-world example

## Context

In a surface physics experiment, an electron on the surface of a semiconductor is subject to the influence of two charged defects in the crystal lattice: a donor ion of charge +e at 0.5 nm distance, and an acceptor ion of charge −e at 0.8 nm distance, forming a 90° angle with respect to the electron. The goal is to estimate the net electric field experienced by the electron and determine whether either ion's contribution clearly dominates.

## Physical estimation

The distance to the donor ion ([[r_i]] of 0.5 nm, i.e. 5×10⁻¹⁰ m) is smaller than the distance to the acceptor ion (0.8 nm). By the inverse-square law, the closer ion's contribution is larger by a factor of (0.8/0.5)² ≈ 2.56. Thus the donor ion exerts 2.56 times more influence on the electron than the acceptor ion.

Estimating the donor ion's field magnitude at the electron: [[k_e]] × e / [[r_i]]² ≈ 8.99×10⁹ × 1.6×10⁻¹⁹ / (5×10⁻¹⁰)² ≈ 5.75×10⁹ N/C.

The acceptor ion's field magnitude: [[k_e]] × e / [[r_i]]² ≈ 8.99×10⁹ × 1.6×10⁻¹⁹ / (8×10⁻¹⁰)² ≈ 2.25×10⁹ N/C.

Since the two ions form a 90° angle at the electron, their contributions are perpendicular to each other. The resultant field has approximate magnitude of square root of (5.75² + 2.25²) × 10⁹ ≈ 6.18×10⁹ N/C. The donor ion contributes approximately 80 % of the resultant field magnitude, confirming that its proximity makes it the dominant factor.

## Interpretation

The result illustrates how the superposition principle allows quantifying the relative dominance of each defect: although both ions carry the same elementary charge, their different distances [[r_i]] to the electron make their field contributions very different. In semiconductor physics practice, this analysis justifies why the defects closest to the charge carriers determine the material's mobility properties: a small [[N_cargas]] of nearby defects can dominate over a large number of distant defects.

The orientation of the vector sum also has physical consequences: the resultant force on the electron points neither towards the donor nor towards the acceptor individually, but in the direction dictated by superposition. This affects the electron's trajectory in the crystal field and, in statistical aggregate, determines the carrier mobility in the presence of impurities.
`;export{e as default};
