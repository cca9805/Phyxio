const e=`# Common Errors: Isolated Systems and External Forces

## Conceptual Errors

### Error 1: Confusing Internal and External Forces Based on the Boundary

**Why it seems correct:**
Forces like weight or friction are usually classified the same way in basic problems, so it seems their nature is fixed.

**Why it is incorrect:**
The internal/external distinction depends exclusively on where the system boundary is drawn. If we include the Earth in our system, weight becomes an internal force. If we exclude it, it is external. Forgetting this relativity leads to incomplete momentum balances or erroneously duplicating forces.

**Detection signal:**
The momentum balance does not close ([[Pinitial]] does not equal [[Pfinal]]) despite having included all interacting bodies.

**Conceptual correction:**
Explicitly define the system boundaries before listing the forces. Any force whose origin and destination are within the boundary must be ignored in the [[momento_lineal_total]] balance.

**Contrast mini-example:**
Two skaters push each other. If the system is only one of them, the push is an external force that changes their momentum. If the system is both, the push is internal and total momentum remains constant.

## Model Errors

### Error 2: Assuming Total Isolation in the Face of Permanent External Forces

**Why it seems correct:**
In most fast collisions, the system seems isolated because the change occurs almost instantaneously.

**Why it is incorrect:**
Permanent external forces like gravity or ground friction are always present. Although in millisecond intervals their effect is negligible, over longer times they break momentum conservation.

**Detection signal:**
The numerical result predicts that an object will move indefinitely at constant speed after a collision on a rough surface.

**Conceptual correction:**
Verify the isolation condition (formula **cond**). If external forces exist, evaluate if the [[tiempo]] interval is short enough for the external impulse to be null.

**Contrast mini-example:**
A block collides with another on a high-friction table. Momentum conservation is only valid for predicting speed just after impact, but not for describing subsequent motion where friction (external force) dominates the system.

## Mathematical Errors

### Error 3: Omitting the Mass of Passive System Components

**Why it seems correct:**
If an object is initially at rest, it is sometimes forgotten to include its mass in the final momentum calculation when the bodies stick together.

**Why it is incorrect:**
The [[momento_lineal_total]] depends on the total mass of the moving system. In an inelastic collision, the inertial mass increases, which reduces the final speed to keep the momentum balance constant.

**Detection signal:**
The calculated final speed is identical to the initial one, as if the resting body had offered no inertial resistance.

**Conceptual correction:**
Use the sum of individual masses ([[m1]] + [[m2]]) when applying the **inelastic_collision** formula.

**Contrast mini-example:**
A projectile hits a wooden block. If only the projectile's mass is used to calculate the final velocity, the result will be physically impossible.

## Interpretation Errors

### Error 4: Ignoring Conservation by Components

**Why it seems correct:**
If an external force is acting (like vertical gravity), it is often erroneously concluded that momentum is not conserved in any direction.

**Why it is incorrect:**
Conservation can be partial. A system may not be isolated vertically but be perfectly isolated horizontally. Ignoring this prevents solving complex projectile or ramp collision problems.

**Detection signal:**
Stating that the conservation principle cannot be used because "there is weight," ignoring that the motion occurs on an axis where weight has no component.

**Conceptual correction:**
Analyze the [[fuerza_externa_neta]] component by component. If on the X-axis the force is zero, momentum in X is conserved regardless of what happens on the Y-axis.

## Quick Self-Control Rule

Before considering a result correct, apply this checklist:

1. **Boundary**: Have I listed which bodies are inside and which are outside?
2. **Impulse**: Have I verified that external forces do not act for a significant time?
3. **Axes**: Have I applied conservation only on axes where the net external force is zero?
4. **Consistency**: Does the final system have more mass and therefore less speed than the initial one?
`;export{e as default};
