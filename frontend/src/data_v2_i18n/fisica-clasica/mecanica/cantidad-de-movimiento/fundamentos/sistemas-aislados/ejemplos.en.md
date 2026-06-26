# Exam-type example

## Problem statement

A projectile with a total mass [[m_total]] is initially at rest on a horizontal platform with very low friction. The projectile is designed to split into two sections using a small internal explosive charge. At the moment of activation, the projectile separates into two fragments. The first fragment has a known mass of [[m1]] = 0.6 kg and is shot to the right with a final velocity [[v1f]] = 12 m/s measured immediately after the detonation. The second fragment has a mass of [[m2]] = 0.4 kg.

It is requested to determine the final velocity [[v2f]] of the second fragment, rigorously justifying why the system can be treated as isolated and analyzing how the total momentum p [[pTotI]] and [[pTotF]] allows predicting the behavior without knowing the exact force of the explosion.

## Data

We identify the following inertial and kinematic parameters:
- **Mass of the first fragment**: [[m1]] = 0.6 kg.
- **Final velocity of the first fragment**: [[v1f]] = 12 m/s (positive direction).
- **Mass of the second fragment**: [[m2]] = 0.4 kg.
- **Initial condition**: Absolute rest of the assembly ([[v1i]] = 0 m/s and [[v2i]] = 0 m/s).
- **Environment**: Horizontal surface without appreciable friction.

## System definition

We define the system as the **assembly of the two fragments (1 and 2)**. By including both bodies, the explosion force becomes an **internal force**. According to Newton's Third Law, these forces form pairs that cancel each other out when summed over the entire system, ensuring that they cannot alter the total linear momentum of the assembly.

## Physical model

We adopt the **isolated system** model. The central hypothesis is that the net external horizontal force is negligible. The fundamental mathematical tool is the Law of Conservation of Linear Momentum:
{{f:cons}}

This conservation is linked to the total momentum variation [[DeltaPtot]] by the impulse theorem applied to the global system:
{{f:balance}}

## Model justification

The isolation of the system is justified by three physical pillars:
1. **Vertical compensation**: Gravity is pd by the normal force.
2. **Horizontal absence**: Friction is negligible.
3. **Impulsive approximation**: The interaction is so fast that any residual external force has no time to generate a significant impulse [[Jext]] compared to the internal forces.

## Symbolic solution

The procedure follows a logical sequence based on the p of states and the use of core formulas:

Determination of the initial total momentum of the assembly:
{{f:Pinicial}}

Definition of the final total momentum after the interaction:
{{f:Pfinal}}

Equating states under the isolation hypothesis:
{{f:cons_solve_pTotF}}

Which represents the direct application of the Conservation Law:
{{f:cons}}

Statement of the complete kinematic equation for two bodies:
{{f:cons_completa}}

Solving for the unknown velocity [[v2f]] from the known data.

{{f:balance}}

## Numerical substitution

We substitute the known values into the expression:
The calculation yields a result of [[v2f]] = -18 m/s. The negative sign indicates the opposite direction to fragment 1.

## Dimensional validation

We verify the units of the result:
[Velocity] = [Mass · Velocity] / [Mass] = [L/T].
The result is expressed in m/s, which is dimensionally correct.

## Physical interpretation

The value obtained, [[v2f]] = -18 m/s, is a profound manifestation of the **recoil principle**, a cornerstone of the symmetry of space. Since the system was initially at rest, its global state of motion must remain unchanged unless an external "hand" pushes it. This is not just a mathematical p, but a deep physical requirement: the **center of mass** of the system is forced to remain at rest regardless of how violent or complex the internal explosion is. When fragment 1 gains momentum to the right, fragment 2 is physically compelled to gain exactly the same amount of momentum to the left. The universe does not allow momentum to be created out of nothing; it can only be redistributed.

This result also highlights the role of **inertia** as a resistance to change. The lighter fragment ([[m2]] = 0.4 kg) is launched at 18 m/s, while the heavier one ([[m1]] = 0.6 kg) only reaches 12 m/s. This inverse relationship demonstrates that for a given internal impulse, the kinematic "cost" or response is determined by the mass. The lighter object, having less inertia, pays a higher "price" in terms of velocity to satisfy the conservation of momentum. This explains why a small bullet reaches lethal speeds while the heavy rifle only gives a sharp nudge to the shooter's shoulder.

From a **causal perspective**, this analysis proves the predictive power of the isolated system model. We do not need to model the chemical reaction of the gunpowder, the gas expansion, or the fragmentation process. By defining the system boundaries correctly, we can ignore the "how" and focus on the "before and after". This ability to treat the entire interaction as a black box is what makes conservation laws the most elegant tool in physics. If in a real-world test we measured a velocity lower than 18 m/s, we would have immediate physical evidence of an "energy or momentum leak" to the environment, revealing the presence of an external impulse [[Jext]] (like unmodeled friction) that drained the system's translational state.

Finally, this example serves as a reminder that **isolation is a choice of perspective**. By including both fragments in our system, we transformed a chaotic explosion into a predictable p. This change of frame—from individual particles to a collective set—is the fundamental step in simplifying the complexity of the physical world.

# Real-world example

## Context

In the vacuum of space, isolation is an almost perfect reality. Imagine the decoupling of a capsule of [[m1]] = 2000 kg from a 200,000 kg station.

## Physical estimation

To plan the maneuver, we perform a quantitative estimation of the station's recoil. If the capsule moves away at [[v1f]] = 0.5 m/s, we apply the momentum p:
- The momentum gained by the capsule (mass [[m1]] times velocity [[v1f]]) is 1000 kg·m/s.
- By conservation, the station's recoil momentum must be -1000 kg·m/s.
- The station's recoil velocity [[v2f]] results in -0.005 m/s.

This quantitative reading of 5 mm/s tells us that the kinematic impact on the station is tiny in terms of instantaneous velocity, but huge in terms of orbital navigation if maintained for hours without correction.

## Interpretation

This real-world scenario confirms that the isolated system model is the key tool in aerospace engineering. The absence of external impulse [[Jext]] guarantees that [[DeltaPtot]] = 0, allowing us to predict the recoil of a massive station without knowing the exact force of the separation springs, based solely on the mass ratio.

The deeper physical implication is that **every action in space has a global consequence**. Even a small spring push redistributes the motion of the entire assembly. By understanding the system as isolated, engineers can treat complex internal interactions as a simple exchange of momentum, ensuring that the station's delicate orbital p is preserved. This "blindness" to internal forces is not a limitation, but the greatest strength of the conservation principle: it provides certainty in an environment where individual forces are often too complex or too small to measure directly during a sudden event.





