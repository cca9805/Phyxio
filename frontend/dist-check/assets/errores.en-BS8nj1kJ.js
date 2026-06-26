const e=`## Conceptual errors

### Error 1: Believing the magnetic force can accelerate a particle

**Why it seems correct**

The particle is moving and experiences a magnetic force [[F_m]]. A force on a particle intuitively implies an acceleration that changes its speed: if there is a force, the particle goes "faster or slower". The student does not distinguish between a change of direction and a change of speed.

**Why it is incorrect**

[[F_m]] is always perpendicular to [[v]]. The power it delivers to the particle is the dot product of force and velocity, which is zero when both vectors are perpendicular. Without power, there is no kinetic energy transfer: the speed remains constant. The magnetic force only deflects the trajectory; it never accelerates or decelerates.

**Detection signal**

The student calculates a change in the particle's kinetic energy attributing it to the magnetic field, or says the particle "accelerates" upon entering a magnetic field with no electric field present.

**Conceptual correction**

Only the electric component [[F_E]] can change kinetic energy. For a particle to gain speed, it needs an electric field doing positive work on it. The magnetic field only curves the trajectory; the speed before and after traversing any arc in a pure magnetic field is identical.

**Contrast mini-example**

An electron enters a magnetic field perpendicular to its velocity and traces a semicircle. On exit, it has exactly the same speed it had on entry, even though its direction of motion has changed by 180°. The magnetic field neither added nor removed kinetic energy.

---

### Error 2: Applying the right-hand rule for negative charge without inverting the result

**Why it seems correct**

The right-hand rule is the standard procedure for the cross product. The student applies it correctly to find the direction of [[v]]×[[B]] and assumes that is also the direction of [[F_m]] for negative charges.

**Why it is incorrect**

The magnetic force is [[q]] times the cross product [[v]]×[[B]]. For negative charge, [[q]] is negative, and multiplying a negative number by the cross-product result inverts the direction. The right-hand rule gives the direction of the pure cross product; to apply it to [[F_m]] the sign of [[q]] must be taken into account.

**Detection signal**

The student obtains the same deflection direction for a proton and an electron moving in the same direction under the same magnetic field. A proton and an electron deflect in opposite directions under the same conditions.

**Conceptual correction**

Apply the right-hand rule to find the direction of [[v]]×[[B]], then multiply by the sign of [[q]]. For positive charge, the force is in the direction of [[v]]×[[B]]; for negative charge, in the opposite direction.

**Contrast mini-example**

A proton and an electron enter from the left with the same horizontal velocity in a magnetic field pointing upward. The proton deflects forward (out of the page); the electron deflects backward (into the page). The deflection magnitude is the same if they have the same speed, but the direction is opposite.

---

## Model errors

### Error 3: Ignoring [[sin_theta]] and always assuming maximum magnetic force

**Why it seems correct**

The simplest problems present [[v]] perpendicular to [[B]], where [[sin_theta]] is 1 and the formula simplifies to its maximum form. The student memorises this simplified form and applies it to all cases without checking the angle.

**Why it is incorrect**

[[F_m]] depends on [[sin_theta]], the sine of the angle between [[v]] and [[B]]. If [[v]] is parallel to [[B]], [[sin_theta]] is zero and [[F_m]] is zero, even if the particle moves fast and the field is strong. Ignoring [[sin_theta]] leads to overestimating the magnetic force in all cases where the angle is not 90°.

**Detection signal**

The student calculates [[F_m]] as [[q]]·[[v]]·[[B]] without including [[sin_theta]] when the problem specifies [[v]] is not perpendicular to [[B]], or when the geometry is not explicitly perpendicular.

**Conceptual correction**

Always identify the angle between [[v]] and [[B]] before calculating. If the problem does not specify perpendicularity, read the geometry carefully. [[sin_theta]] equal to 1 can only be assumed when it is explicitly stated that [[v]] is perpendicular to [[B]].

**Contrast mini-example**

An electron moves in the direction of the magnetic field ([[sin_theta]] equal to zero). The magnetic force is zero: the electron travels in a straight line without any deflection. If the same electron moved perpendicularly, the force would be maximum and the trajectory circular.

---

### Error 4: Confusing the Lorentz force with the gravitational force in equilibrium problems

**Why it seems correct**

In charged-particle equilibrium problems (such as Millikan's drop), the electric force can balance gravity. The student confuses the two types of force and mixes expressions, using mass where [[q]] should be used or vice versa.

**Why it is incorrect**

Gravitational force depends on the particle's mass; the Lorentz force depends on [[q]]. These are completely different quantities: a drop can have large mass and small [[q]], or small mass and large [[q]]. Equilibrium expressions that equate forces of different types must correctly identify which quantity enters each one.

**Detection signal**

The student writes the equilibrium condition with the same variable (mass or charge) on both sides, or does not distinguish whether the field balancing gravity is electric or magnetic.

**Conceptual correction**

In equilibrium: gravitational force depends on mass and g; electric force depends on [[q]] and [[E]]; magnetic force depends on [[q]], [[v]] and [[B]]. Identify each force by its expression and ensure the units are consistent before equating.

**Contrast mini-example**

In Millikan's experiment, the drop in equilibrium has weight equal to the electric force: mass times g equals [[q]] times [[E]]. If the student writes mass times g equals mass times [[E]], the equation is dimensionally nonsensical and always an error.

---

## Mathematical errors

### Error 5: Adding scalars instead of combining [[F_E]] and [[F_m]] vectorially

**Why it seems correct**

The total Lorentz force formula sums the two terms algebraically. The student interprets this as a sum of magnitudes and calculates the total force as the arithmetic sum of [[F_E]] and [[F_m]] without considering the direction of each component.

**Why it is incorrect**

[[F_E]] and [[F_m]] are vectors. The total force [[F_L]] is their vector sum. If [[F_E]] and [[F_m]] are perpendicular to each other (common case when [[E]] and [[B]] are perpendicular), the magnitude of [[F_L]] is not the sum of the magnitudes but the square root of the sum of their squares. Adding magnitudes when vectors are not parallel always overestimates the total force.

**Detection signal**

The student obtains [[F_L]] greater than any physically possible limit, or reports a value that does not match the result of the correct geometric combination.

**Conceptual correction**

Always identify the direction of each component before adding. If [[F_E]] and [[F_m]] are parallel (same axis), they are added algebraically with sign. If perpendicular, use the Pythagorean theorem. In general, vector addition requires decomposing each component into projections on the axes and adding projection by projection.

**Contrast mini-example**

In Wien's velocity selector, [[F_E]] points in the positive y direction and [[F_m]] points in the negative y direction. If their magnitudes are equal, [[F_L]] is exactly zero, not double one of them. A student who adds magnitudes would get double instead of zero.

---

## Interpretation errors

### Error 6: Interpreting [[sin_theta]] equal to zero as "no Lorentz force"

**Why it seems correct**

If [[sin_theta]] is zero, [[F_m]] is zero. The student generalises: if the magnetic component is zero, they say "there is no Lorentz force", forgetting that [[F_E]] may still be present.

**Why it is incorrect**

The total Lorentz force [[F_L]] includes the electric component [[F_E]], which does not depend on [[sin_theta]] or [[v]]. Even when [[v]] is parallel to [[B]] and [[F_m]] is zero, if there is an electric field [[E]] the particle experiences [[F_E]] and [[F_L]] is not zero.

**Detection signal**

The student concludes that a particle moving in the direction of [[B]] in the presence of an electric field experiences no force, when in fact it experiences the full electric force.

**Conceptual correction**

[[sin_theta]] equal to zero cancels only [[F_m]], not the full [[F_L]]. Always check whether there is an electric field before concluding that [[F_L]] is zero. The Lorentz force is zero only when both [[F_E]] and [[F_m]] are simultaneously zero.

**Contrast mini-example**

A proton moves in the direction of an intense magnetic field with a perpendicular electric field present. [[F_m]] is zero (v parallel to B), but [[F_E]] is non-zero: the proton accelerates laterally due to the electric field. The total Lorentz force is not zero.

---

## Quick self-control rule

Before accepting any result for [[F_L]] or [[F_m]], verify these four conditions:

1. **Correct [[sin_theta]]**: if [[v]] is parallel to [[B]], [[F_m]] is zero; if perpendicular, [[sin_theta]] is 1. Verify the problem geometry.
2. **Charge signs**: the direction of [[F_m]] is reversed for negative charge relative to the direction of the cross product [[v]]×[[B]].
3. **Vector sum**: [[F_E]] and [[F_m]] are added as vectors, not as scalars.
4. **Velocity and work**: if the calculated force would imply a change of speed in a purely magnetic field, there is an error; [[F_m]] does no work.
`;export{e as default};
