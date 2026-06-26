# Common errors: inelastic collisions

## Conceptual errors

### Error 1: Believing that momentum is not conserved in an inelastic collision

**Why it seems correct:**
If energy is lost, the student often intuits that momentum must also be lost, associating the "loss" of one quantity with that of the other.

**Why it is incorrect:**
Total linear momentum [[p]] is always conserved as long as there are no net external forces on the system. Inelasticity exclusively affects translational kinetic energy [[K]], not the translational symmetry that guarantees the conservation of [[p]].

**Detection signal:**
The student writes that the final momentum is less than the initial one without justifying the presence of external forces.

**Conceptual correction:**
Clearly separate the momentum balance (fundamental law) from the energy balance (interaction property).

**Mini-example:**
Two 2 kg masses: one at 4 m/s and another at rest. Initial momentum is 8 kg·m/s. After the impact (with [[e]] at 0.5), velocities are 1 m/s and 3 m/s. Final momentum is still 8 kg·m/s, even though energy decreased from 16 J to 10 J.

### Error 2: Thinking that the initial state can be recovered by reversing velocities

**Why it seems correct:**
In basic kinematics, if you reverse a body's velocity, it retraces its path.

**Why it is incorrect:**
Inelastic collisions are **irreversible** processes. Because part of the energy has been transformed into heat and deformation ([[DeltaK]] negative), the system's entropy has increased. Reversing the final velocities will not return the bodies to their original approach state.

**Detection signal:**
Attempting to solve the problem backward without considering the dissipative factor.

**Conceptual correction:**
Recognize that [[DeltaK]] represents a mechanical energy "leak" that breaks the time symmetry of the process.

**Mini-example:**
If you throw a ball of modeling clay against the ground, it deforms and barely bounces. Reversing its (small) bounce velocity will not cause the ball to "un-deform" and recover its original height.

## Model errors

### Error 3: Confusing inelastic collision with totally inelastic collision

**Why it seems correct:**
Both terms include the word "inelastic," leading one to think the bodies always end up moving together.

**Why it is incorrect:**
In a generic inelastic collision, the coefficient [[e]] is between 0 and 1, so the bodies separate. Only if [[e]] is exactly zero is the collision totally inelastic.

**Detection signal:**
Assuming final velocities [[v1f]] and [[v2f]] are equal when the problem gives an [[e]] value greater than zero.

**Conceptual correction:**
Use the relative velocity relation to verify that separation exists using the definition of [[e]].

**Mini-example:**
In a collision with [[e]] of 0.5, if the approach relative velocity is 10 m/s, the separation one will be 5 m/s. Only if [[e]] is exactly 0 would the separation relative velocity be 0 m/s (bodies stuck).

## Mathematical errors

### Error 4: Omitting the 1/2 factor in kinetic energy calculation

**Why it seems correct:**
For speed, the student sometimes directly multiplies mass by velocity squared.

**Why it is incorrect:**
The standard definition of translational kinetic energy requires the 1/2 factor. Omitting it invalidates the entire energy balance and the loss fraction [[loss_fraction]].

**Detection signal:**
Values for [[Ki]] and [[Kf]] that are exactly double what is expected.

**Conceptual correction:**
Rigorously apply the leaf's kinetic energy definitions.

**Mini-example:**
For 10 kg at 2 m/s, the energy is 20 J. Without the 1/2 factor, the student would calculate 40 J, erroneously doubling the problem's energy scale.

## Interpretation errors

### Error 5: Ignoring the negative sign in energy variation

**Why it seems correct:**
The difference is calculated in absolute value and reported as "lost energy."

**Why it is incorrect:**
Physically, the variation [[DeltaK]] must be negative to indicate a loss. A positive value would imply an explosive (superelastic) collision, which is physically impossible in a passive inelastic impact.

**Detection signal:**
Writing [[DeltaK]] as a positive number in the results report.

**Conceptual correction:**
Ensure the variation satisfies the downward energy balance.

**Mini-example:**
If energy goes from 100 J to 80 J, the variation is -20 J. Reporting +20 J as "variation" is mathematically incorrect, even if understood as "loss."

## Quick self-control rule

Before handing in an inelastic collision exercise, verify:
1. **Conservation of p**: Is the sum of masses times initial velocities equal to the final sum?
2. **Decrease in K**: Is [[Kf]] strictly less than [[Ki]]?
3. **Rebound Direction**: Do the bodies separate after impact in a manner consistent with [[e]]?
4. **[[DeltaK]] Sign**: Is the energy balance negative?
