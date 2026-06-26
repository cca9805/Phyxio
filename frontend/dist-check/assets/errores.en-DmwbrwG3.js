const e=`# Common errors: coefficient of restitution

## Conceptual errors

### Error 1: Reversing the velocity order in the definition

**Why it seems correct:**
It is often thought that the subtraction order does not matter as long as it is done consistently in the numerator and denominator of the coefficient of restitution[[e]].

**Why it is incorrect:**
The definition of[[e]]requires the numerator to be the relative separation velocity (final state) and the denominator to be the approach velocity (initial state). Reversing the order in only one part changes the sign of[[e]], which is physically inconsistent for a dissipation parameter that must be positive.

**Detection signal:**
A negative coefficient of restitution[[e]]value is obtained in a standard collision problem where bodies move away after impact.

**Conceptual correction:**
Ensure that the numerator is the difference between the final velocities and the denominator the difference between the initial ones in the opposite order, strictly following the formula:

{{f:e}}

**Contrast mini-example:**
- **Incorrect scenario**: Calculating[[e]]by subtracting the initial velocity of body 1 minus that of 2 in both terms of the fraction.
- **Correct scenario**: Subtracting (final 2 - final 1) in the numerator and (initial 1 - initial 2) in the denominator to capture the reversal of relative motion.

---

### Error 2: Confusing absolute velocity with relative velocity

**Why it seems correct:**
If one of the bodies (like the ground) is initially at rest, the coefficient of restitution[[e]]seems to be simply the ratio of the other body's velocities before and after the collision.

**Why it is incorrect:**
[[e]]is always defined through relative velocities. If both bodies move after the collision (as in space collisions), using only one body's velocity while ignoring the other leads to wrong results and violates the principle of Galilean relativity.

**Detection signal:**
The calculated[[e]]value changes when changing the inertial reference frame, which is physically impossible for a parameter that depends only on materials.

**Conceptual correction:**
Always use the difference in velocities of both bodies ([[v1f]],[[v2f]],[[v1i]],[[v2i]]), even if one of them seems to move much slower than the other.

**Contrast mini-example:**
- **Incorrect scenario**: Saying that[[e]]is the final velocity of a ball divided by its initial velocity when it bounces off a moving train.
- **Correct scenario**: Defining[[e]]using the velocity difference between the ball and the train both before and after the impact.

## Model errors

### Error 3: Ignoring energy loss in collisions with e less than 1

**Why it seems correct:**
One tries to apply kinetic energy conservation in all collisions because it is confused with the universal and always valid law of linear momentum conservation.

**Why it is incorrect:**
Only in the ideal case of a perfectly elastic collision (e equal to 1) is macroscopic kinetic energy conserved. In any other case, there is an inevitable kinetic energy loss[[DeltaK]]that degrades into heat.

**Detection signal:**
Final velocities are obtained that conserve the total system energy but contradict the experimental[[e]]value set for those materials.

**Conceptual correction:**
Accept that mechanical energy is not conserved in real collisions and use the relation to quantify the internal contact dissipation:

{{f:perdida_energia}}

**Contrast mini-example:**
- **Incorrect scenario**: Stating that the sum of initial kinetic energies is equal to the sum of final ones if the problem indicates that[[e]]is 0.5.
- **Correct scenario**: Explicitly including the loss term[[DeltaK]]in the energy balance so that the system is consistent.

## Mathematical errors

### Error 4: Using total mass in the kinetic energy loss calculation

**Why it seems correct:**
Total mass appears frequently in momentum and center of mass formulas and is easy to calculate by adding[[m1]]and[[m2]].

**Why it is incorrect:**
The kinetic energy loss[[DeltaK]]during an impact depends on the reduced mass[[mu]]of the system, not on the simple sum of masses. Using total mass greatly overestimates the dissipated energy.

**Detection signal:**
The calculated energy loss[[DeltaK]]is greater than the total initial kinetic energy available in the system.

**Conceptual correction:**
First calculate the reduced mass[[mu]]using the correct expression before proceeding with the energy balance calculation:

{{f:mu}}

**Contrast mini-example:**
- **Incorrect scenario**: Substituting the sum of masses into the inertial term of the kinetic energy loss formula.
- **Correct scenario**: Using the reduced mass, which is always smaller than the individual masses involved.

## Interpretation errors

### Error 5: Forgetting the square root in the relation with heights

**Why it seems correct:**
It seems intuitive that the coefficient of restitution[[e]]is simply the direct height proportion an object recovers when bouncing (for example, half height implies e = 0.5).

**Why it is incorrect:**
Since maximum height[[hf]]depends on the square of the exit velocity, the coefficient[[e]]is actually the square root of the ratio between the bounce height and the initial height[[h0]].

**Detection signal:**
An[[e]]value is obtained that, when used to calculate velocities, gives results that are physically impossible or inconsistent with the observed heights.

**Conceptual correction:**
Always apply the square root according to the experimental relationship:

{{f:e_desde_alturas}}

**Contrast mini-example:**
- **Incorrect scenario**: If a ball bounces to a quarter of its height (25%), erroneously concluding that[[e]]is 0.25.
- **Correct scenario**: If it bounces to a quarter of its height, the coefficient[[e]]is the square root of 0.25, which equals 0.5.

## Quick self-control rule

Before accepting a result, apply this checklist:

1.  **Range Consistency**: Is the obtained[[e]]value within the physical interval determined by the constraint?
    {{f:rango_e}}
2.  **Physical Sign**: Is the coefficient[[e]]strictly positive? A negative value would indicate the bodies attract each other after the collision.
3.  **Energy Balance**: Is the loss[[DeltaK]]positive or zero? Kinetic energy can never be gained spontaneously in a passive collision.
4.  **Dimensions**: Is[[e]]a dimensionless number? Ensure it does not have units like meters, seconds, or kg.
`;export{e as default};
