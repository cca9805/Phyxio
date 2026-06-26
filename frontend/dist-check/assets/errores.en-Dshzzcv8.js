const e=`## Conceptual errors

### Error 1: Confusing the electric field with the electric force

**Why it seems correct**

The student learns that the field is "felt" as a force and that both are related. The intuitive analogy leads to thinking that [[E]] and [[F_e]] are the same thing measured in different units, or that the field is simply the force acting on the charge of interest.

**Why it is incorrect**

[[E]] is a property of space at a point, independent of the charge placed there. [[F_e]] is the force experienced by a specific charge [[q_0]] placed at that point. The field exists even if no test charge is present; the force does not exist without the charge. The dependence of [[F_e]] on [[q_0]] is precisely what separates the two quantities.

**Detection signal**

The student directly substitutes [[E]] instead of [[F_e]] into Newton's second law, or computes the acceleration of a particle by dividing by the charge instead of the mass.

**Conceptual correction**

The force on a real charge [[q_0]] is obtained by multiplying the field [[E]] by that charge. The field is the "catalog" of the environment; the force is the result of applying that catalog to a specific charge.

**Contrast mini-example**

A field of 1000 N/C at a point would produce completely different forces on an electron and a proton, even though the field is the same: the force depends on the charge, the field does not.

---

### Error 2: Believing the field always points outward from the charge

**Why it seems correct**

The most common diagrams show a positive charge surrounded by lines pointing radially outward. If the student generalizes this without considering the charge sign, they will conclude the field always exits.

**Why it is incorrect**

The field points radially outward only for positive charges. For negative charges, the field points radially inward: field lines terminate at the negative charge, they do not exit from it. The sign of [[q_fuente]] completely determines the direction.

**Detection signal**

The student obtains a repulsive force when it should be attractive, or draws field lines exiting a negative charge.

**Conceptual correction**

Field lines originate at positive charges (sources) and terminate at negative charges (sinks). For a negative charge, [[E]] at any nearby point points toward it, not away.

**Contrast mini-example**

For an electron (negative charge), a positive test charge placed to its right will feel a force toward the left (toward the electron). The field at that point points left, not right.

## Model errors

### Error 3: Applying the point-charge formula to extended objects at short distances

**Why it seems correct**

Coulomb's formula for the field is simple and always gives a numerical result, even when the geometry does not justify it. The student tends to use it by default without checking whether the charge can be treated as a point.

**Why it is incorrect**

The point-charge model assumes all charge is concentrated at a single point. For an extended object (charged sphere, rod, plate), the real field requires integrating contributions from all charge elements. At distances comparable to the object's size, the error can exceed 50%.

**Detection signal**

The computed field does not match experimental measurements, or changes unexpectedly as the object is approached (instead of following a 1/r² curve, it becomes approximately constant, as for a plate).

**Conceptual correction**

Before applying the point formula, verify that the evaluation distance [[r]] is at least ten times larger than the characteristic dimension of the charged object. If not satisfied, use Gauss's law or direct integration.

**Contrast mini-example**

The field at 1 mm from a charged sphere of radius 5 mm cannot be computed with the point formula: the distance is not negligible compared to the radius. At 10 cm from the same sphere, the error of the point approximation is below 1%.

## Mathematical errors

### Error 4: Forgetting to square the distance

**Why it seems correct**

The dependence on [[r]] in the denominator leads some students to write just the distance instead of its square, possibly by incorrect analogy with other formulas where the variable appears in first order.

**Why it is incorrect**

The inverse-square law is a fundamental consequence of three-dimensional geometry (the area of a sphere grows with the square of the radius). Omitting the square produces a field that decays much more slowly with distance, overestimating the strength at large [[r]].

**Detection signal**

The computed field at double the distance is half the original instead of one quarter. If doubling [[r]] divides [[E]] by two, the formula used has [[r]] in first order, not squared.

**Conceptual correction**

In Coulomb's formula, the denominator is always [[r]] squared. The practical rule: doubling the distance divides the field by four; tripling it divides by nine.

**Contrast mini-example**

With [[q_fuente]] of 1 μC and standard [[k_e]], at 1 m the field should be approximately 9000 N/C. If the student omits the square, they obtain 9×10⁹ N/C, ten orders of magnitude larger: the absurd result reveals the error.

## Interpretation errors

### Error 5: Interpreting zero field as absence of charge

**Why it seems correct**

If there is no field, it seems logical to conclude there are no nearby charges. The intuitive association "field implies nearby charge" leads to the incorrect converse.

**Why it is incorrect**

The field can be zero at points where contributions from several charges cancel exactly (electrostatic equilibrium points), or inside conductors where free charges redistribute to cancel the internal field. In both cases charges are present but the net field is zero.

**Detection signal**

The student concludes there is "no charge in the region" when the field is zero, without considering the possibility of cancellation between fields from opposite charges.

**Conceptual correction**

Zero [[E]] at a point only guarantees that the net force on a test charge placed there would be zero. It does not guarantee absence of charge in the vicinity. To know whether charge is present, apply Gauss's law over a closed surface and compute the flux.

**Contrast mini-example**

At the exact midpoint between two equal and same-sign charges, [[E]] is exactly zero. Yet two charges are very nearby. The zero field does not indicate "electrical vacuum" but equilibrium of contributions.

## Quick self-control rule

Before accepting an electric field calculation, mentally verify:

1. Does the denominator of Coulomb's formula contain [[r]] squared?
2. Does the result have units of N/C?
3. Is the magnitude of [[E]] positive?
4. Is the field direction consistent with the sign of [[q_fuente]]?
5. Is the evaluation distance at least ten times the size of the charged object?

If any of these five checks fails, the calculation contains an error that must be corrected before proceeding.
`;export{e as default};
