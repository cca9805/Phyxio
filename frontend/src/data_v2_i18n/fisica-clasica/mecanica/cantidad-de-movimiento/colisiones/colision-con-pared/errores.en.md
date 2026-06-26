# Common errors: collision with a wall

## Conceptual errors

### Error 1: Confusing rebound with absolute stopping

**Why it seems correct:**
It is often thought that a wall acts as an impassable barrier that cancels all of the projectile's motion after impact.

**Why it is incorrect:**
Unless the collision is perfectly plastic, where restitution[[e]]is zero, there is always a final exit velocity[[vf]]. Ignoring the rebound drastically underestimates the linear momentum[[J]]change and the linear impulse[[J]]exerted on the structure.

**Detection signal:**
An impulse[[J]]equal to the initial momentum is obtained, instead of considering that the direction reversal adds effects.

**Conceptual correction:**
Ensure that the final velocity[[vf]]is calculated with its proper sign to capture the full momentum change.

**Contrast mini-example:**
- **Incorrect scenario**: Calculating the impulse[[J]]using only the mass[[m]]and the arrival speed[[vi]].
- **Correct scenario**: Calculating it considering the vectorial difference between exit velocity[[vf]]and entry velocity[[vi]].

---

### Error 2: Misinterpretation of the smooth wall model

**Why it seems correct:**
One attempts to apply the coefficient of restitution[[e]]to the total magnitude of the velocity vector[[vf]]in oblique collisions.

**Why it is incorrect:**
On a smooth wall, there are no tangential forces. Dissipation only affects the normal component[[vin]]. The final tangential component[[vft]]must be equal to the initial one[[vit]].

**Detection signal:**
The calculated rebound angle[[theta_f]]is equal to the incidence angle[[theta_i]]despite the collision being inelastic.

**Conceptual correction:**
Decompose the velocity[[vi]]and apply the restitution[[e]]only to the component perpendicular to the surface.

**Contrast mini-example:**
- **Incorrect scenario**: Applying the restitution factor[[e]]to the total velocity magnitude[[vi]].
- **Correct scenario**: Applying the factor only to the normal part[[vfn]]and keeping the tangential part[[vft]]constant.

## Model errors

### Error 3: Disregarding the wall's mass in conservation

**Why it seems correct:**
One attempts to apply linear momentum conservation only to the projectile, forgetting the environment.

**Why it is incorrect:**
The projectile's momentum is not conserved; it changes direction. The impulse[[J]]is the measure of the transfer towards the Earth through the wall's anchoring.

**Detection signal:**
The conclusion is reached that final velocity[[vf]]must be equal to initial velocity[[vi]]without any external force intervention.

**Conceptual correction:**
Treat the wall as an external agent that exerts a net impulse[[J]]on the body of mass[[m]].

**Contrast mini-example:**
- **Incorrect scenario**: Assuming that the projectile's linear momentum is conserved by itself.
- **Correct scenario**: Recognizing that the wall exerts an impulsive force that changes the projectile's momentum.

## Mathematical errors

### Error 4: The negative sign in the law of restitution

**Why it seems correct:**
One operates only with absolute speeds ignoring the vectorial nature of velocity[[vi]].

**Why it is incorrect:**
The negative sign in the fundamental law is crucial to indicate the direction reversal. Forgetting it leads to miscalculating the velocity[[vf]]change.

{{f:vf}}

**Detection signal:**
An anomalously small impulse[[J]]value is obtained that does not explain the rebound violence.

**Conceptual correction:**
Strictly maintain the negative sign and define a clear reference frame for the normal axis.

**Contrast mini-example:**
- **Incorrect scenario**: Ignoring the sign change and subtracting the final speed[[vf]]and initial speed[[vi]].
- **Correct scenario**: Adding the speed magnitudes to obtain the total velocity change if the direction reverses.

## Interpretation errors

### Error 5: Forgetting the square root in the height relationship

**Why it seems correct:**
It seems intuitive that the coefficient of restitution[[e]]is the direct proportion of recovered height[[hf]].

**Why it is incorrect:**
Since height[[hf]]depends on the square of velocity[[vf]], the coefficient[[e]]is actually the square root of the height ratio.

**Detection signal:**
Physically inconsistent values are obtained compared to measured velocities[[vf]].

**Conceptual correction:**
Always apply the height mathematical relationship in its square root form:

{{f:rebound_height}}

**Contrast mini-example:**
- **Incorrect scenario**: Stating that the coefficient[[e]]is equal to one quarter if it bounces to twenty-five percent of the height[[h0]].
- **Correct scenario**: Identifying that the coefficient[[e]]is the root of the recovered height fraction.

## Quick self-control rule

Before accepting a result, apply this checklist:

1. **Range Consistency**: Is the obtained value of[[e]]within the allowed physical interval?

{{f:rango_e}}

2. **Impulse Sign**: Does the impulse[[J]]point away from the wall?
3. **Energy Balance**: Is the kinetic energy loss[[DeltaK]]positive or zero?
4. **Exit Angle**: Is the rebound angle[[theta_f]]greater than or equal to the incident angle[[theta_i]]?
