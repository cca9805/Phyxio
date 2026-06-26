const e=`# Common errors in the center of mass frame

## Conceptual errors

### Error 1: Assuming the center of mass velocity changes after the collision

**Physical explanation**: Many students believe that since the collision is a violent event that changes the particle velocities, the center of mass velocity [[Vcm]] must also change.

**Why it is an error**: Physically, this is impossible in an isolated system. Collision forces are internal forces; according to Newton's second law for systems, only external forces can accelerate the center of mass. The central velocity is the system's inertial "anchor" and remains constant from before the bodies touch until long after they have separated.

**Detection signal**: If after calculating the final momentum balance you obtain a different [[Vcm]], you have violated momentum conservation.

**Conceptual correction**: Remember that the center of mass is the system's "anchor"; its motion is independent of what happens internally between the particles.

**Contrast mini-example**: In an internal explosion of a projectile in the air, the fragments fly off, but the center of mass of the set follows exactly the same parabolic path as the original projectile.

### Error 2: Confusing total kinetic energy with internal energy

**Physical explanation**: A frequent mistake is trying to use the entire laboratory kinetic energy [[K_total]] to calculate collision effects (such as deformation).

**Why it is an error**: König's theorem teaches us that part of that energy is "trapped" in the system's global translation. Only the internal energy [[K_cm]] is actually available for the interaction. Ignoring this distinction leads to drastically overestimating the physical effects of the impact.

**Detection signal**: Overestimating generated heat or material deformation by using [[K_total]] instead of [[K_cm]].

**Conceptual correction**: Mentally separate the translation energy of the assembly from the interaction energy of the parts.

**Contrast mini-example**: If a mosquito hits a moving train, the train's kinetic energy is huge, but the energy available for the impact is tiny, limited by the relative motion.

## Model errors

### Error 3: Applying the CM frame to non-isolated systems

**Physical explanation**: The center of mass frame model as a simplified inertial frame is only valid if the system is isolated.

**Why it is an error**: If significant external forces act during the collision (such as intense friction), the center of mass accelerates. The CM frame ceases to be inertial and Newton's laws do not apply normally without introducing fictitious forces.

**Detection signal**: Results that do not match laboratory observations when ignoring the frame's acceleration.

**Conceptual correction**: Always verify if there are net external forces before assuming [[Vcm]] is constant.

**Contrast mini-example**: A crash on an ice rink is an isolated system, but a crash on rough asphalt with locked brakes is not.

### Error 4: Forgetting that reduced mass only applies to two-body problems

**Physical explanation**: The reduced mass [[mu]] is a simplification tool for the relative motion of a pair of particles.

**Why it is an error**: Attempting to apply the formula to a system of three or more bodies to find a "single reduced mass" is a modeling error. In multi-body systems, the internal dynamics are much more complex and cannot be reduced to a single virtual particle.

**Detection signal**: Trying to put three masses into the formula:

{{f:mu}}

**Conceptual correction**: Reduced mass is for kinematic pairs; complex systems require N-body analysis.

**Contrast mini-example**: In a three-star system, interactions must be analyzed in pairs; a single reduced mass cannot be used for the entire system.

## Mathematical errors

### Error 5: Sign error in relative velocities

**Physical explanation**: When calculating [[u1]] or [[u2]] using Galilean transformations, it is vital to respect the vectorial nature of velocities.

**Why it is an error**: A common mistake is subtracting magnitudes instead of vectors. If the particle moves in the opposite direction of the center of mass, its laboratory velocity is negative, and subtracting [[Vcm]] should result in an even more negative value. An error in this sign destroys the momentum nullity condition [[p_cm_total]] is zero.

**Detection signal**: Obtaining a non-zero total linear momentum in the center of mass frame.

**Conceptual correction**: Define a positive axis and respect each velocity vector's sign when applying:

{{f:u1}}

**Contrast mini-example**: If [[Vcm]] = 5 and [[v1]] = -10, then [[u1]] = -15, not -5.

### Error 6: Misuse of the reduced mass formula

**Physical explanation**: A recurring algebraic error is calculating [[mu]] by adding masses in the denominator but incorrectly multiplying in the numerator.

**Why it is an error**: The correct formula is the product of the masses divided by their sum. Always remember dimensional validation: the result must have mass units (kg).

**Detection signal**: Obtaining incorrect units (kg² instead of kg) or [[mu]] values higher than individual masses.

**Conceptual correction**: Reduced mass is always LESS than either of the individual masses of the pair.

**Contrast mini-example**: For 2 kg and 3 kg, [[mu]] = 1,2 kg. If you get 6 kg, you forgot to divide.

## Interpretation errors

### Error 7: Thinking that the CM frame "makes the crash softer"

**Physical explanation**: The fact that in the center of mass frame the velocities [[u1]] and [[u2]] are lower than in the lab does not mean the crash is less destructive.

**Why it is an error**: Destruction depends on the internal kinetic energy [[K_cm]], which is invariant: it is the same for all observers. The physical damage is invariant.

**Detection signal**: Believing an accident is less serious if viewed from a car traveling at the same speed.

**Conceptual correction**: The reference frame is a mathematical lens; it does not change the physical reality of the impact.

**Contrast mini-example**: A 100 km/h crash against a wall hurts just as much whether you record it from the sidewalk or from a parallel car.

### Error 8: Interpreting zero momentum as absence of motion

**Physical explanation**: The fact that total linear momentum is zero in the CM does not mean the particles are stationary.

**Why it is an error**: It means their motions cancel each other out vectorially. Particles can have a lot of individual kinetic energy even if the net momentum is zero.

**Detection signal**: Trying to set [[u1]] = 0 or [[u2]] = 0 just because the system is "at rest" in the CM.

**Conceptual correction**: The CM frame is at global rest, but its parts are in frantic relative motion.

**Contrast mini-example**: Two skaters pushing off each other with equal forces move in opposite directions; their CM doesn't move, but they do.

## Quick self-control rule
Before finalizing an exercise in the center of mass frame, always verify that the **Momentum Nullity Condition** is met: multiply each mass by its velocity in the CM and add them up. If the result is not zero, you have made a mistake in calculating [[Vcm]] or in the Galilean transformation. **Momentum in the CM is not optional; it is the very definition of the frame.**
`;export{e as default};
