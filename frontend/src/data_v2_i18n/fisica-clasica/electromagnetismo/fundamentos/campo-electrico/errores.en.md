## Conceptual errors


### Error 1: Confusing the electric field with the electric force

**Why it seems correct**

The student learns that the field is "felt" as a force and that both are related. The intuitive analogy leads to thinking that [[campo_electrico]] and [[fuerza_electrica]] are the same thing measured in different units, or that the field is simply the force acting on the charge of interest.

**Why it is incorrect**

[[campo_electrico]] is a property of space at a point, independent of the charge placed there. [[fuerza_electrica]] is the force experienced by a specific charge [[q_0]] placed at that point. The field exists even if no test charge is present; the force does not exist without the charge. The dependence of [[fuerza_electrica]] on [[q_0]] is precisely what separates the two quantities.

**Detection signal**

The student directly substitutes [[campo_electrico]] instead of [[fuerza_electrica]] into Newton's second law, or computes the acceleration of a particle by dividing by the charge instead of the mass.

**Conceptual correction**

The force on a real charge [[q_0]] is obtained by multiplying the field [[campo_electrico]] by that charge. The field is the "catalog" of the environment; the force is the result of applying that catalog to a specific charge.

**Contrast mini-example**

A field of 1000 N/C at a point would produce completely different forces on an electron and a proton, even though the field is the same: the force depends on the charge, the field does not.

---

**Mini-example of contrast**

Check 1: In Electric Field, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Believing the field always points outward from the charge

**Why it seems correct**

The most common diagrams show a positive charge surrounded by lines pointing radially outward. If the student generalizes this without considering the charge sign, they will conclude the field always exits.

**Why it is incorrect**

The field points radially outward only for positive charges. For negative charges, the field points radially inward: field lines terminate at the negative charge, they do not exit from it. The sign of [[q_fuente]] completely determines the direction.

**Detection signal**

The student obtains a repulsive force when it should be attractive, or draws field lines exiting a negative charge.

**Conceptual correction**

Field lines originate at positive charges (sources) and terminate at negative charges (sinks). For a negative charge, [[campo_electrico]] at any nearby point points toward it, not away.

**Contrast mini-example**

For an electron (negative charge), a positive test charge placed to its right will feel a force toward the left (toward the electron). The field at that point points left, not right.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Applying the point-charge formula to extended objects at short distances

**Why it seems correct**

Coulomb's formula for the field is simple and always gives a numerical result, even when the geometry does not justify it. The student tends to use it by default without checking whether the charge can be treated as a point.

**Why it is incorrect**

The point-charge model assumes all charge is concentrated at a single point. For an extended object (charged sphere, rod, plate), the real field requires integrating contributions from all charge elements. At distances comparable to the object's size, the error can exceed 50%.

**Detection signal**

The computed field does not match experimental measurements, or changes unexpectedly as the object is approached (instead of following a 1/r² curve, it becomes approximately constant, as for a plate).

**Conceptual correction**

Before applying the point formula, verify that the evaluation distance [[distancia_a_la_carga_fuente]] is at least ten times larger than the characteristic dimension of the charged object. If not satisfied, use Gauss's law or direct integration.

**Contrast mini-example**

The field at 1 mm from a charged sphere of radius 5 mm cannot be computed with the point formula: the distance is not negligible compared to the radius. At 10 cm from the same sphere, the error of the point approximation is below 1%.

## Mathematical errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Forgetting to square the distance

**Why it seems correct**

The dependence on [[distancia_a_la_carga_fuente]] in the denominator leads some students to write just the distance instead of its square, possibly by incorrect analogy with other formulas where the variable appears in first order.

**Why it is incorrect**

The inverse-square law is a fundamental consequence of three-dimensional geometry (the area of a sphere grows with the square of the radius). Omitting the square produces a field that decays much more slowly with distance, overestimating the strength at large [[distancia_a_la_carga_fuente]].

**Detection signal**

The computed field at double the distance is half the original instead of one quarter. If doubling [[distancia_a_la_carga_fuente]] divides [[campo_electrico]] by two, the formula used has [[distancia_a_la_carga_fuente]] in first order, not squared.

**Conceptual correction**

In Coulomb's formula, the denominator is always [[distancia_a_la_carga_fuente]] squared. The practical rule: doubling the distance divides the field by four; tripling it divides by nine.

**Contrast mini-example**

With [[q_fuente]] of 1 μC and standard [[k_e]], at 1 m the field should be approximately 9000 N/C. If the student omits the square, they obtain 9×10⁹ N/C, ten orders of magnitude larger: the absurd result reveals the error.

## Interpretation errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Interpreting zero field as absence of charge

**Why it seems correct**

If there is no field, it seems logical to conclude there are no nearby charges. The intuitive association "field implies nearby charge" leads to the incorrect converse.

**Why it is incorrect**

The field can be zero at points where contributions from several charges cancel exactly (electrostatic equilibrium points), or inside conductors where free charges redistribute to cancel the internal field. In both cases charges are present but the net field is zero.

**Detection signal**

The student concludes there is "no charge in the region" when the field is zero, without considering the possibility of cancellation between fields from opposite charges.

**Conceptual correction**

Zero [[campo_electrico]] at a point only guarantees that the net force on a test charge placed there would be zero. It does not guarantee absence of charge in the vicinity. To know whether charge is present, apply Gauss's law over a closed surface and compute the flux.

**Contrast mini-example**

At the exact midpoint between two equal and same-sign charges, [[campo_electrico]] is exactly zero. Yet two charges are very nearby. The zero field does not indicate "electrical vacuum" but equilibrium of contributions.

## Quick self-control rule

Before accepting an electric field calculation, mentally verify:

1. Does the denominator of Coulomb's formula contain [[distancia_a_la_carga_fuente]] squared?
2. Does the result have units of N/C?
3. Is the magnitude of [[campo_electrico]] positive?
4. Is the field direction consistent with the sign of [[q_fuente]]?
5. Is the evaluation distance at least ten times the size of the charged object?

If any of these five checks fails, the calculation contains an error that must be corrected before proceeding.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.