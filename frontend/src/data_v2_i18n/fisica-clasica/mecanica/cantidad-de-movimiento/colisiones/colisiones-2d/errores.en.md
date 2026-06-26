# Common errors

## Conceptual errors

### Error 1: Adding velocity magnitudes directly without considering direction

**Why it seems correct:**
In one dimension, linear momentum is added almost scalarly (only with signs), so it seems natural to add speeds [[v1i]] and [[v2i]] to obtain the total.

**Why it is incorrect:**
Linear momentum is a vector quantity. In two dimensions, two velocities of equal magnitude can cancel each other out if their directions are opposite, or add up in complex ways if they are oblique. Adding scalars ignores the "directional identity" of motion.

**Detection signal:**
The calculated total momentum is greater than the sum of the individual projected components, or the result does not vary when changing the impact angle [[theta1i]].

**Conceptual correction:**
Always use the vector conservation law:

{{f:vec}}

Decompose each vector into its Cartesian projections [[v1ix]] and [[v1iy]] before performing any arithmetic operations.

**Contrast mini-example:**
If two 1 kg bodies move at 1 m/s perpendicularly, the total momentum is not 2 kg·m/s, but the hypotenuse of the triangle: approximately 1.41 kg·m/s.

## Model errors

### Error 2: Assuming the collision is always elastic without verifying energy

**Why it seems correct:**
Many academic problems assume perfect elasticity for simplicity, leading to the thought that kinetic energy [[Ki]] is always equal to [[Kf]].

**Why it is incorrect:**
In the real world, almost all collisions dissipate energy ([[DeltaK]] < 0). Applying energy conservation to an inelastic collision over-determines the system and leads to physically impossible results.

**Detection signal:**
Calculated final velocities [[v1f]] are too high, or the problem provides a coefficient of restitution that is ignored in the calculation.

**Conceptual correction:**
Always calculate the energy balance:

{{f:energy_loss}}

Only use energy conservation if the statement explicitly guarantees that the impact is elastic. Otherwise, rely solely on momentum conservation.

**Contrast mini-example:**
In an inelastic collision where bodies stick together, final energy can be much lower than initial. Forcing [[Ki]] = [[Kf]] would give an erroneous and excessive exit velocity.

## Mathematical errors

### Error 3: Quadrant error when calculating the final scattering angle

**Why it seems correct:**
The arctangent function on the calculator returns a value that seems to be the direct trajectory angle [[theta1f]].

**Why it is incorrect:**
The atan(y/x) function only returns values between -90° and 90°. If the body moves towards the second or third quadrant (negative [[v1fx]] component), the calculator will give an erroneous angle if not corrected manually or using the atan2(y, x) function.

**Detection signal:**
The obtained angle places the body moving "inward" from the impact point instead of away from it.

**Conceptual correction:**
Always draw a component diagram. If [[v1fx]] is negative, add 180° to the arctangent result to place the vector in the correct quadrant. Use the following relation with caution:

{{f:angle_theta1f}}

**Contrast mini-example:**
For [[v1fx]] = -1 and [[v1fy]] = 1, the calculator will say -45°, but the real angle is 135°. The body moves back and up, not forward and down.

## Interpretation errors

### Error 4: Ignoring the independence of the X and Y axes

**Why it seems correct:**
It seems that what happens on one axis must "proportionally" affect the other to maintain the vector's shape.

**Why it is incorrect:**
Newton's laws guarantee that forces in X only change momentum in X. In a smooth collision, tangential momentum does not change even if the normal momentum undergoes violent variation. The axes are independent information channels.

**Detection signal:**
An attempt is made to use the same change ratio for [[v1fx]] as for [[v1fy]] without a physical or geometric justification.

**Conceptual correction:**
Set up equations as two separate worlds that only connect at the end to reconstruct the total vector [[v1f]]:

{{f:x}}

{{f:y}}

**Contrast mini-example:**
In a collision against a horizontal wall, the velocity in X remains constant while the velocity in Y reverses its sign. There is no "mixing" of components if there are no oblique forces.

## Quick self-control rule

Before accepting a result in 2D, apply this list:

1. **Vectorality**: Have I added components or have I added magnitudes? (Only components is correct).
2. **Energy**: Is [[Kf]] less than or equal to [[Ki]]? (If it is greater, there is a serious error).
3. **Quadrants**: Does the direction of [[theta1f]] match the signs of the final components?
4. **Independence**: Is momentum conserved on BOTH axes separately?
