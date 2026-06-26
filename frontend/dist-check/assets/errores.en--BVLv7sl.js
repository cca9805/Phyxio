const e=`# Common Errors when Applying Conservation

## Conceptual errors

### 1. Ignoring the vector character of momentum

The most frequent and serious error is treating the [[momento_lineal_total]] as a scalar magnitude. When summing [[momento_lineal_individual]] to find the initial or final value, a vector sum must be performed, respecting the direction and sense of each [[velocidad_individual]].

**Example**: If two bodies of equal [[masa_individual]] and equal speed collide head-on, the [[momento_lineal_total]] is not double one of them, but zero, because their [[momento_lineal_individual]] vectors have opposite directions. A student who sums magnitudes will get double the expected result instead of zero, which is completely incorrect.

### 2. Confusing internal and external forces

Many students include the collision force between the bodies (internal force) within the system's [[fuerza_externa_neta]]. The conservation principle is based on internal forces acting in equal and opposite pairs (Newton's third law) and not altering the system's [[momento_lineal_total]].

**Golden rule**: If the force comes from an object included in your system definition, it is internal and does NOT modify total momentum. Only interactions with the environment (outside the defined system) count as [[fuerza_externa_neta]].

## Model errors

### 3. Not verifying the isolation condition

Applying conservation when a significant [[fuerza_externa_neta]] exists during the process leads to erroneous results. It is essential to always verify that:

{{f:cond}}

The [[variacion_momento_lineal]] is only zero if this condition is satisfied throughout the analysis interval. When there is intense friction or the interaction lasts a [[tiempo]] comparable to the effect of external forces such as weight, the balance cannot be applied without corrections.

### 4. Confusing elastic with inelastic collisions

In a perfectly inelastic collision, [[momento_lineal_total]] is conserved but kinetic energy is not. In an elastic one, both are conserved. The error is combining both laws simultaneously, assuming all collisions conserve kinetic energy, which generates two incompatible balance equations and produces physically incorrect [[v1f]] and [[v2f]] values.

## Mathematical errors

### 5. Mixing initial and final states in the balance equation

A classic arithmetic error is mixing [[masa_individual]] or [[velocidad_individual]] from the initial state with final state values in the same balance equation. The correct balance always clearly separates both instants:

{{f:cons_principle}}

The [[Pinitial]] groups all [[momento_lineal_individual]] before the interaction and the [[Pfinal]] groups all those after. Mixing them mathematically invalidates the equation.

### 6. Sign errors in velocities

Not correctly assigning the sign of [[velocidad_individual]] according to the reference axis is a systematic source of error. If [[v1i]] points in the positive direction and [[v2i]] approaches from the opposite direction, the second must carry a negative sign. Ignoring the sign is equivalent to adding momenta that physically subtract, producing an incorrect [[Pinitial]].

## Interpretation errors

### 7. Interpreting zero total momentum as absence of motion

If the system's [[momento_lineal_total]] is zero, it does not mean all bodies are at rest. It means the [[momento_lineal_individual]] of the different bodies cancel vectorially. The clearest case is two bodies of equal [[masa_individual]] moving at the same speed in opposite directions: each is in motion, but the vector sum of their momenta is zero.

### 8. Forgetting that conservation is per component in 2D

In two-dimensional problems, [[momento_lineal_total]] may be conserved on the horizontal axis (zero [[fuerza_externa_neta]]) but not on the vertical axis (where weight or normal acts). Applying a single scalar equation instead of two independent component equations is a structural conceptual error that invalidates the entire resolution process.

## Quick self-control rule

Before accepting any result, check these five points:

1. Did I clearly define which objects form the system and what their net [[fuerza_externa_neta]] is?
2. Does the vector sum of all [[momento_lineal_individual]] before the event ([[Pinitial]]) equal the sum after ([[Pfinal]])?
3. Is the [[variacion_momento_lineal]] obtained coherent with the isolation condition?
4. Did I correctly assign the signs of all velocities ([[v1i]], [[v2i]], [[v1f]], [[v2f]]) according to my positive reference axis?
5. Does the result have the correct units (kg·m/s for momentum, m/s for velocities) and is the sign physically reasonable?
`;export{e as default};
