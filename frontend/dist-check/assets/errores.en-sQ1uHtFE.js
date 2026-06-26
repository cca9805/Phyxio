const e=`# Common errors in perfectly inelastic collisions

## Conceptual errors

### Error 1: Believing bodies always bounce after impact
**Why it seems correct**: Based on daily experience with balls or elastic collisions, we tend to think an impact always involves a proportional rebound.
**Why it is incorrect**: In the perfectly inelastic collision leaf, the central hypothesis is permanent coupling. Ignoring this invalidates all subsequent balances.
**Detection sign**: If the problem statement mentions "embeds," "sticks," or "assembly," and you calculate separate final velocities, you have made this error.
**Conceptual correction**: Accept that the system goes from two bodies to a single one with mass [[m1]] + [[m2]].
**Mini-example**: If a 10 g bullet embeds itself in a 2 kg block, there is no rebound; the assembly moves at a single [[vf]].

### Error 2: Thinking all kinetic energy is lost
**Why it seems correct**: As a collision with "maximum loss," it is intuitively associated with the final energy being zero.
**Why it is incorrect**: To conserve total linear momentum [[p]], the center of mass must keep moving. The final kinetic energy [[Kf]] is the indestructible minimum.
**Detection sign**: Obtaining [[Kf]] = 0 when the system's initial momentum was not zero.
**Conceptual correction**: The final energy is only zero if the total initial momentum was zero (head-on collision of identical bodies).
**Mini-example**: A head-on train crash where both stop dissipates all energy, but if one was chasing the other, the resulting assembly must keep moving forward.

## Model errors

### Error 3: Ignoring the vector nature of velocity
**Why it seems correct**: Working with scalar magnitudes is algebraically simpler and faster.
**Why it is incorrect**: Velocities [[v1i]] and [[v2i]] are vectors. If they collide head-on, their signs must be opposite.
**Detection sign**: A resulting [[vf]] that is greater than any of the initial velocities in a head-on collision.
**Conceptual correction**: Always define a reference system (X-axis) and assign consistent signs to each velocity vector.
**Mini-example**: Two 1000 kg cars at 20 m/s colliding head-on have zero net momentum, not 40,000 kg·m/s.

### Error 4: Applying the model in the presence of intense external forces
**Why it seems correct**: It is assumed that collision formulas are universal laws applicable at any time.
**Why it is incorrect**: The conservation of [[p]] is only guaranteed if the impulse of external forces is negligible during contact.
**Detection sign**: Absurd results in collisions that last a long time on surfaces with very high friction.
**Conceptual correction**: Use this model only for the immediate instant of impact (impulsive collision).
**Mini-example**: A block braked by a spring while receiving a projectile does not conserve global linear momentum due to the external elastic force.

## Mathematical errors

### Error 5: Not adding the masses in the denominator of the final velocity
**Why it seems correct**: By mental inertia, the total momentum is often divided only by the projectile mass [[m1]].
**Why it is incorrect**: After the collision, the system's inertia is the sum of all coupled masses.
**Detection sign**: A [[vf]] obtained that violates energy conservation or is higher than the firing velocity.
**Conceptual correction**: Ensure that the denominator in the [[vf]] formula is the total mass of the assembly.
**Mini-example**: Dividing 10 kg·m/s by 0.1 kg gives 100 m/s, but if the total mass is 5.1 kg, the real velocity is less than 2 m/s.

### Error 6: Squaring the sum of masses in kinetic energy
**Why it seems correct**: Confusion with the structure of other physics formulas where summations are squared.
**Why it is incorrect**: The final kinetic energy [[Kf]] is 0.5 * (Total Mass) * [[vf]] squared. The mass is not squared.
**Detection sign**: Energy results with incorrect units or astronomically high values.
**Conceptual correction**: Mass is a linear factor in the kinetic energy expression.
**Mini-example**: Calculating energy as 0.5 * (5 kg)^2 * (2 m/s)^2 is incorrect; it should be 0.5 * (5 kg) * (2 m/s)^2.

## Interpretation errors

### Error 7: Interpreting a positive [[DeltaK]] as a loss
**Why it seems correct**: Any number obtained in the subtraction is associated as the "amount lost" without looking at the sign.
**Why it is incorrect**: A positive [[DeltaK]] means a gain in kinetic energy, which is physically impossible in a passive collision.
**Detection sign**: Writing "Loss = 500 J" when the calculation gives +500 J.
**Conceptual correction**: The energy variation must be negative. A positive value indicates an error in [[Ki]] or [[Kf]].
**Mini-example**: If [[Ki]] = 100 J and [[Kf]] = 20 J, the variation is -80 J (loss). If it gives +80 J, you have swapped the terms.

### Error 8: Confusing the loss fraction with the coefficient of restitution
**Why it seems correct**: Both are dimensionless values between 0 and 1 that measure collision "quality."
**Why it is incorrect**: The coefficient of restitution measures the return of relative velocity (it is 0 here), while [[loss_fraction]] measures degraded energy.
**Detection sign**: Claiming that "since the collision is perfectly inelastic, the energy loss is zero."
**Conceptual correction**: In a perfectly inelastic collision, the coefficient of restitution is minimum (zero) but the energy loss is maximum.
**Mini-example**: A collision can have a zero coefficient of restitution and lose 99 percent of its energy or only 10 percent depending on the masses.

## Quick self-control rule
To verify your result instantly, remember that the final velocity [[vf]] must always be between the values of the initial velocities [[v1i]] and [[v2i]]. If your [[vf]] is greater than the fastest or smaller than the slowest of the input velocities, you have made a sign or mass sum error. Additionally, always check that the final kinetic energy [[Kf]] is strictly less than the initial [[Ki]].
`;export{e as default};
