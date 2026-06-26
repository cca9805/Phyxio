## Conceptual errors


### Error 1: Believing the magnetic force can accelerate a particle

**Why it seems correct**

The particle is moving and experiences a magnetic force [[fuerza_magnetica]]. A force on a particle intuitively implies an acceleration that changes its speed: if there is a force, the particle goes "faster or slower". The student does not distinguish between a change of direction and a change of speed.

**Why it is incorrect**

[[fuerza_magnetica]] is always perpendicular to [[velocidad_de_la_particula]]. The power it delivers to the particle is the dot product of force and velocity, which is zero when both vectors are perpendicular. Without power, there is no kinetic energy transfer: the speed remains constant. The magnetic force only deflects the trajectory; it never accelerates or decelerates.

**Detection signal**

The student calculates a change in the particle's kinetic energy attributing it to the magnetic field, or says the particle "accelerates" upon entering a magnetic field with no electric field present.

**Conceptual correction**

Only the electric component [[fuerza_electrica]] can change kinetic energy. For a particle to gain speed, it needs an electric field doing positive work on it. The magnetic field only curves the trajectory; the speed before and after traversing any arc in a pure magnetic field is identical.

**Contrast mini-example**

An electron enters a magnetic field perpendicular to its velocity and traces a semicircle. On exit, it has exactly the same speed it had on entry, even though its direction of motion has changed by 180°. The magnetic field neither added nor removed kinetic energy.

---

**Mini-example of contrast**

Check 1: In Lorentz Force, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Applying the right-hand rule for negative charge without inverting the result

**Why it seems correct**

The right-hand rule is the standard procedure for the cross product. The student applies it correctly to find the direction of [[velocidad_de_la_particula]]×[[campo_magnetico]] and assumes that is also the direction of [[fuerza_magnetica]] for negative charges.

**Why it is incorrect**

The magnetic force is [[carga_electrica]] times the cross product [[velocidad_de_la_particula]]×[[campo_magnetico]]. For negative charge, [[carga_electrica]] is negative, and multiplying a negative number by the cross-product result inverts the direction. The right-hand rule gives the direction of the pure cross product; to apply it to [[fuerza_magnetica]] the sign of [[carga_electrica]] must be taken into account.

**Detection signal**

The student obtains the same deflection direction for a proton and an electron moving in the same direction under the same magnetic field. A proton and an electron deflect in opposite directions under the same conditions.

**Conceptual correction**

Apply the right-hand rule to find the direction of [[velocidad_de_la_particula]]×[[campo_magnetico]], then multiply by the sign of [[carga_electrica]]. For positive charge, the force is in the direction of [[velocidad_de_la_particula]]×[[campo_magnetico]]; for negative charge, in the opposite direction.

**Contrast mini-example**

A proton and an electron enter from the left with the same horizontal velocity in a magnetic field pointing upward. The proton deflects forward (out of the page); the electron deflects backward (into the page). The deflection magnitude is the same if they have the same speed, but the direction is opposite.

---

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Ignoring [[sin_theta]] and always assuming maximum magnetic force

**Why it seems correct**

The simplest problems present [[velocidad_de_la_particula]] perpendicular to [[campo_magnetico]], where [[sin_theta]] is 1 and the formula simplifies to its maximum form. The student memorises this simplified form and applies it to all cases without checking the angle.

**Why it is incorrect**

[[fuerza_magnetica]] depends on [[sin_theta]], the sine of the angle between [[velocidad_de_la_particula]] and [[campo_magnetico]]. If [[velocidad_de_la_particula]] is parallel to [[campo_magnetico]], [[sin_theta]] is zero and [[fuerza_magnetica]] is zero, even if the particle moves fast and the field is strong. Ignoring [[sin_theta]] leads to overestimating the magnetic force in all cases where the angle is not 90°.

**Detection signal**

The student calculates [[fuerza_magnetica]] as [[carga_electrica]]·[[velocidad_de_la_particula]]·[[campo_magnetico]] without including [[sin_theta]] when the problem specifies [[velocidad_de_la_particula]] is not perpendicular to [[campo_magnetico]], or when the geometry is not explicitly perpendicular.

**Conceptual correction**

Always identify the angle between [[velocidad_de_la_particula]] and [[campo_magnetico]] before calculating. If the problem does not specify perpendicularity, read the geometry carefully. [[sin_theta]] equal to 1 can only be assumed when it is explicitly stated that [[velocidad_de_la_particula]] is perpendicular to [[campo_magnetico]].

**Contrast mini-example**

An electron moves in the direction of the magnetic field ([[sin_theta]] equal to zero). The magnetic force is zero: the electron travels in a straight line without any deflection. If the same electron moved perpendicularly, the force would be maximum and the trajectory circular.

---

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Confusing the Lorentz force with the gravitational force in equilibrium problems

**Why it seems correct**

In charged-particle equilibrium problems (such as Millikan's drop), the electric force can balance gravity. The student confuses the two types of force and mixes expressions, using mass where [[carga_electrica]] should be used or vice versa.

**Why it is incorrect**

Gravitational force depends on the particle's mass; the Lorentz force depends on [[carga_electrica]]. These are completely different quantities: a drop can have large mass and small [[carga_electrica]], or small mass and large [[carga_electrica]]. Equilibrium expressions that equate forces of different types must correctly identify which quantity enters each one.

**Detection signal**

The student writes the equilibrium condition with the same variable (mass or charge) on both sides, or does not distinguish whether the field balancing gravity is electric or magnetic.

**Conceptual correction**

In equilibrium: gravitational force depends on mass and g; electric force depends on [[carga_electrica]] and [[campo_electrico]]; magnetic force depends on [[carga_electrica]], [[velocidad_de_la_particula]] and [[campo_magnetico]]. Identify each force by its expression and ensure the units are consistent before equating.

**Contrast mini-example**

In Millikan's experiment, the drop in equilibrium has weight equal to the electric force: mass times g equals [[carga_electrica]] times [[campo_electrico]]. If the student writes mass times g equals mass times [[campo_electrico]], the equation is dimensionally nonsensical and always an error.

---

## Mathematical errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Adding scalars instead of combining [[fuerza_electrica]] and [[fuerza_magnetica]] vectorially

**Why it seems correct**

The total Lorentz force formula sums the two terms algebraically. The student interprets this as a sum of magnitudes and calculates the total force as the arithmetic sum of [[fuerza_electrica]] and [[fuerza_magnetica]] without considering the direction of each component.

**Why it is incorrect**

[[fuerza_electrica]] and [[fuerza_magnetica]] are vectors. The total force [[fuerza_de_lorentz]] is their vector sum. If [[fuerza_electrica]] and [[fuerza_magnetica]] are perpendicular to each other (common case when [[campo_electrico]] and [[campo_magnetico]] are perpendicular), the magnitude of [[fuerza_de_lorentz]] is not the sum of the magnitudes but the square root of the sum of their squares. Adding magnitudes when vectors are not parallel always overestimates the total force.

**Detection signal**

The student obtains [[fuerza_de_lorentz]] greater than any physically possible limit, or reports a value that does not match the result of the correct geometric combination.

**Conceptual correction**

Always identify the direction of each component before adding. If [[fuerza_electrica]] and [[fuerza_magnetica]] are parallel (same axis), they are added algebraically with sign. If perpendicular, use the Pythagorean theorem. In general, vector addition requires decomposing each component into projections on the axes and adding projection by projection.

**Contrast mini-example**

In Wien's velocity selector, [[fuerza_electrica]] points in the positive y direction and [[fuerza_magnetica]] points in the negative y direction. If their magnitudes are equal, [[fuerza_de_lorentz]] is exactly zero, not double one of them. A student who adds magnitudes would get double instead of zero.

---

## Interpretation errors

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 6: Interpreting [[sin_theta]] equal to zero as "no Lorentz force"

**Why it seems correct**

If [[sin_theta]] is zero, [[fuerza_magnetica]] is zero. The student generalises: if the magnetic component is zero, they say "there is no Lorentz force", forgetting that [[fuerza_electrica]] may still be present.

**Why it is incorrect**

The total Lorentz force [[fuerza_de_lorentz]] includes the electric component [[fuerza_electrica]], which does not depend on [[sin_theta]] or [[velocidad_de_la_particula]]. Even when [[velocidad_de_la_particula]] is parallel to [[campo_magnetico]] and [[fuerza_magnetica]] is zero, if there is an electric field [[campo_electrico]] the particle experiences [[fuerza_electrica]] and [[fuerza_de_lorentz]] is not zero.

**Detection signal**

The student concludes that a particle moving in the direction of [[campo_magnetico]] in the presence of an electric field experiences no force, when in fact it experiences the full electric force.

**Conceptual correction**

[[sin_theta]] equal to zero cancels only [[fuerza_magnetica]], not the full [[fuerza_de_lorentz]]. Always check whether there is an electric field before concluding that [[fuerza_de_lorentz]] is zero. The Lorentz force is zero only when both [[fuerza_electrica]] and [[fuerza_magnetica]] are simultaneously zero.

**Contrast mini-example**

A proton moves in the direction of an intense magnetic field with a perpendicular electric field present. [[fuerza_magnetica]] is zero (v parallel to B), but [[fuerza_electrica]] is non-zero: the proton accelerates laterally due to the electric field. The total Lorentz force is not zero.

---

## Quick self-control rule

Before accepting any result for [[fuerza_de_lorentz]] or [[fuerza_magnetica]], verify these four conditions:

1. **Correct [[sin_theta]]**: if [[velocidad_de_la_particula]] is parallel to [[campo_magnetico]], [[fuerza_magnetica]] is zero; if perpendicular, [[sin_theta]] is 1. Verify the problem geometry.
2. **Charge signs**: the direction of [[fuerza_magnetica]] is reversed for negative charge relative to the direction of the cross product [[velocidad_de_la_particula]]×[[campo_magnetico]].
3. **Vector sum**: [[fuerza_electrica]] and [[fuerza_magnetica]] are added as vectors, not as scalars.
4. **Velocity and work**: if the calculated force would imply a change of speed in a purely magnetic field, there is an error; [[fuerza_magnetica]] does no work.

**Mini-example of contrast**

Check 6: In Lorentz Force, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.