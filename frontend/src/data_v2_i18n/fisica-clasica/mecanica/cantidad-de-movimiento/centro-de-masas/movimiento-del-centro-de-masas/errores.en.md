# Common Errors: Center of Mass Motion

## Conceptual errors

### Error 1: Believing that internal forces affect CM acceleration

**Why it seems correct:**
Inside an explosion, everything changes, so the CM should accelerate.

**Why it is incorrect:**
By Newton's third law, internal forces cancel out. Only the net external force accelerates the CM.

**Detection signal:**
The student includes the explosion force in the balance of [[F_ext]].

**Conceptual correction:**
Identify internal forces (between parts of the system) and external forces (from outside) before applying the law:

{{f:newton_cm}}

**Mini contrast example:**
Projectile that explodes in flight: explosion forces are internal. The CM follows the same parabolic trajectory it had before exploding.

## Model errors

### Error 2: Applying Newton's law when the system mass changes

**Why it seems correct:**
Newton's second law is often associated with the expression of force equals mass times acceleration, so it seems correct to use it without further thought in any scenario.

**Why it is incorrect:**
If the system's mass varies (rocket, falling chain), the correct form is the rate of change of momentum:

{{f:newton_general_momentum}}

This form includes the mass variation term `dm/dt`.

**Detection signal:**
The student divides force by instantaneous mass without including the momentum flux term.

**Conceptual correction:**
Use the expansion for variable mass:

{{f:variable_mass_expansion}}

**Contrast mini-example:**
Rocket: In the absence of external forces, the momentum variation is zero:

{{f:rocket_momentum_balance}}

Ignoring the second term eliminates the thrust necessary for propulsion.

## Mathematical errors

### Error 3: Confusing CM velocity with the velocity of one of the particles

**Why it seems correct:**
If one particle is much heavier, its velocity seems to be the CM velocity.

**Why it is incorrect:**
The kinematic definition requires an inertia-weighted average:

{{f:vcm_weighted_average}}

Even if one mass dominates, the other contributes and the result differs from the individual value.

**Detection signal:**
The student assumes that CM velocity equals particle 1 velocity without computing the weighted average of the whole set.

**Conceptual correction:**
Always compute the CM velocity for a binary system using individual velocities [[v1]] and [[v2]]:

{{f:vcm_two_bodies}}

And compare with [[v1]] to quantify the difference.

**Contrast mini-example:**
Masses 10 kg at 5 m/s and 1 kg at 50 m/s. The calculation yields `9.1` m/s, not 5 m/s.

## Interpretation errors

### Error 4: Interpreting the CM trajectory as the trajectory of each fragment

**Why it seems correct:**
If the CM follows a parabola, each fragment should do the same.

**Why it is incorrect:**
Each fragment has its own trajectory based on the velocity it received during separation. Only the CM maintains the original trajectory.

**Detection signal:**
The student includes fragments falling along the same parabola.

**Conceptual correction:**
Draw the CM trajectory (parabola) and the fragment trajectories separately, verifying that the weighted average stays on the original parabola.

**Contrast mini-example:**
Projectile splitting in two: one falls vertically and the other shoots off horizontally. The CM follows the parabola, but neither fragment travels along it.

## Quick self-control rule

Before accepting a result, apply this checklist:

1. **Units**: does the result have the expected dimensions?
2. **Sign**: is the sign consistent with the direction chosen in the diagram?
3. **Order of magnitude**: is the value physically reasonable for the scenario?
4. **Limiting case**: does the formula reduce to a known result when a parameter tends to zero or infinity?
