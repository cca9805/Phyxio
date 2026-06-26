const e=`\uFEFF# Exam Type Example

## Problem statement

A skater A with mass [[m1]] of 60 kg moves at a velocity [[v1i]] of 4 m/s to the right on smooth ice. A skater B with mass [[m2]] of 80 kg is at rest. The two skaters collide and embrace, forming a single block (perfectly inelastic collision). Determine the common final velocity [[vf]] of the set immediately after the collision. Use positive direction to the right. Verify that the system is isolated by justifying the boundary choice. Calculate the total [[variacion_momento_total]] and check that the system balance remains constant.

## Data

- Individual mass [[m1]] of A: 60 kg
- Individual velocity [[v1i]] of A: 4 m/s (positive direction)
- Individual mass [[m2]] of B: 80 kg
- Individual velocity [[v2i]] of B: 0 m/s (at rest)
- Collision type: perfectly inelastic (they stay together)
- Horizontal net external force [[fuerza_externa_neta]]: zero (frictionless ice)

## System Definition

We define the system as the set {skater A + skater B}. The collision forces are internal to the system: A exerts force on B and B exerts force on A in equal magnitude and opposite direction. Friction from the ice during the brief instant of contact is negligible. Vertical forces (gravity and normal) cancel each other out. Consequently, the horizontal [[fuerza_externa_neta]] on the system is zero: the system is isolated in the direction of motion. The system's [[momento_lineal_total]] must be conserved.

## Physical Model

Each body contributes its [[momento_lineal_individual]], calculated using the basic definition formula:

{{f:P}}

We apply the conservation principle when the [[impulso_externo]] is zero. To calculate the initial state of the system, we use formula initial-momentum formula, which sums individual momenta. The final state is described by the coupling formula isolation condition. The isolated system condition (formula **p**) ensures that the [[variacion_momento_total]] (formula total momentum variation) is strictly zero.

## Model Justification

The model is valid because the collision interval is very short (milliseps). During that time, any external friction force would act for so little [[tiempo]] that the resulting impulse would be negligible compared to the massive internal contact forces. This is the impulse approximation: in fast collisions, internal forces dominate and the system can be treated as isolated with negligible error.

## Symbolic solution

Before calculating, we verify that the system is isolated using the zero external force condition:

{{f:cond}}

The [[momento_lineal_individual]] of each body is defined by the relation, where [[m]] is the mass and [[v]] the velocity of each body:

{{f:P}}

To find the common final velocity [[vf]], we use the equality of dynamic states:

{{f:cond}}

The system's initial momentum is calculated by summing the contributions of each skater:

{{f:pi}}

For the general case where bodies do not stick together, the final velocity [[v1f]] of body 1 is obtained from the general balance:

{{f:general_1d_balance}}

In the particular case of an explosion from rest, the recoil law establishes:

{{f:recoil_law}}

The isolated system condition ensures that the difference between the final and initial states is zero:

{{f:DeltaP}}

## Numerical Substitution

**Initial Momentum:**
By multiplying the mass of A (60 kg) by its velocity (4 m/s) and adding the momentum of B (80 kg by 0 m/s), we get a [[Pinitial]] of 240 kg·m/s.

**Common Final Velocity:**
Dividing the initial momentum (240) by the [[masa_total]] of the two skaters (140 kg), results in a velocity [[vf]] of approximately 1.71 m/s.

**Verification:**
The final momentum [[Pfinal]] is the product of the total mass (140) by the common velocity (1.71), which returns 240 kg·m/s. The subtraction between both states is zero, confirming that the [[variacion_momento_total]] is zero.

## Dimensional Validation

The obtained final velocity (1.71 m/s) has the correct units of meters per sep. The value is physically coherent, as it is less than the initial velocity of skater A (4 m/s) but positive, indicating that the set continues to move to the right but with greater inertia due to the mass of skater B.

## Physical Interpretation

The set's velocity is much less than the initial velocity of A. This indicates that A's initial momentum has been redistributed into a much larger mass (140 kg compared to the initial 60 kg). The [[momento_lineal_total]] is conserved because no horizontal external forces act. Condition **p** is met, therefore, what skater A loses in speed, the system compensates by gaining mass in motion, keeping the total product constant.

# Real-world example

## Context

In traffic accident reconstruction, experts use momentum conservation to determine speeds before impact. If two vehicles collide and stay together, the common speed after the crash allows for calculating the original speed.

## Physical Estimation

Consider a vehicle A (1200 kg at 15 m/s) colliding with a vehicle B (1500 kg at rest). The [[momento_lineal_individual]] of vehicle A is 18000 kg·m/s. The horizontal [[impulso_externo]] is zero during the impact instant. Applying the inelastic coupling formula, the combined system will move at about 6.7 m/s. **Order of magnitude**: this speed is approximately 24 km/h, a reasonable value for estimating the subsequent braking trajectory. The estimation confirms that for masses of order 10³ kg and velocities of tens of m/s, momenta are of order 10⁴ kg·m/s. The [[masa_individual]] of each vehicle fully determines how the [[variacion_momento_total]] is distributed after the impact.

## Interpretation

Momentum conservation indicates that the mass and velocity before impact completely determine the subsequent dynamic state. This means a heavier stopped vehicle absorbs a large fraction of the impactor's speed, demonstrating that the total [[variacion_momento_total]] is zero during the very brief instant of the collision.
\r
\r
\r
`;export{e as default};
