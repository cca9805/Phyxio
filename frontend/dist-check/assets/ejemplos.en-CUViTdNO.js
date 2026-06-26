const e=`\uFEFF# Exam Type Example

## problem statement

A block A with mass [[m1]] of 3 kg slides at an initial velocity [[v1i]] of 5 m/s on a frictionless horizontal surface and collides with a block B with mass [[m2]] of 2 kg that is at rest. After the collision, the two blocks stick together (perfectly inelastic collision). Determine the common final velocity [[vf]] of the system after impact. Verify that the pitions for applying the principle are met and show that the total [[variacion_momento_lineal]] is zero. Also calculate the [[Pinitial]] and [[Pfinal]] of the system.

## Data

- Mass of the first body [[m1]]: 3 kg
- Initial velocity [[v1i]] of the first body: 5 m/s (positive direction)
- Mass of the sep body [[m2]]: 2 kg
- Initial velocity [[v2i]] of the sep body: 0 m/s (at rest)
- Total mass [[masa_total]] of the system: 5 kg
- Net external force [[Fext]] horizontal: zero (frictionless surface)

## System Definition

We define the system as the set {block A + block B}. The collision forces are internal: the contact forces between A and B cancel out by Newton’s third law. Vertical forces (weight and normal) cancel each other out. With no horizontal friction, the [[fuerza_externa_neta]] on the system in the direction of motion is zero. The statement’s pitions are verified: defined system, zero [[fuerza_externa_neta]], and brief collision interval in a negligible [[tiempo]].

## physical Model

We use the conservation principle expressed in the master formula **p**:

{{f:cond}}

For this inelastic collision, we apply the coupling formula **p**:

{{f:cond}}

We will also use the initial momentum definition **p** and the structural definition of total momentum **p**:

{{f:cond}}

{{f:cond}}

The isolated system pition (formula **p**) ensures that the [[variacion_momento_lineal]] (formula **p**) is zero:

{{f:cond}}

{{f:cond}}

## Model Justification

The model is valid because the impact duration is very short: internal contact forces are enormous during that brief instant, making any external impulse negligible. It is the impulse approximation in fast collisions. In this case, the surface is smooth, eliminating the horizontal [[fuerza_externa_neta]] and ensuring that [[momento_lineal_total]] is strictly conserved.

## Symbolic solution

To find the common final velocity [[vf]], we first apply the general 1D balance as the universal framework relating all kinematic states of the system:

{{f:cond}}

In this case the blocks couple together ([[v1f]] = [[v2f]] = [[vf]]), which simplifies the general balance to the inelastic coupling law:

{{f:cond}}

We calculate the system’s total momentum using the structural definition **p** which expresses [[momento_lineal_total]] in terms of [[masa_total]] and [[velocidad_centro_de_masas]]:

{{f:cond}}

We also calculate the individual initial contributions using formula **p**:

{{f:cond}}

We verify that the system is isolated using the **p** pition and calculate the variation using **p**:

{{f:cond}}

{{f:cond}}

## Numerical Substitution

**Initial Momentum:**
By multiplying [[m1]] (3 kg) by its [[v1i]] (5 m/s) and adding the momentum of B ([[m2]] of 2 kg by [[v2i]] of 0 m/s), we get a [[Pinitial]] of 15 kg·m/s.

**Common Final Velocity:**
Dividing the [[Pinitial]] (15) by the [[masa_total]] (5 kg), results in a velocity [[vf]] of 3 m/s.

**Verification:**
The [[Pfinal]] is the product of the [[masa_total]] (5) by the [[vf]] (3), which gives 15 kg·m/s. The subtraction between the final and initial state is zero, confirming that the [[variacion_momento_lineal]] is zero according to the **p** balance.

## Dimensional Validation

By dividing momentum (kg·m/s) by mass (kg), the mass units cancel out and the result correctly remains in m/s. The value obtained (3 m/s) is physically coherent, as it is less than the [[v1i]] (5 m/s) but greater than the [[v2i]] (0 m/s), indicating that the faster block has been slowed down by the inertia of the resting block.

## physical Interpretation

Block A yields part of its [[momento_lineal_individual]] to block B. The [[vf]] is 3 m/s because the initial momentum is now distributed over a larger mass. Condition **p** is met, therefore what A loses, B gains exactly. This result is a direct consequence of Newton's third law: the impulse A exerts on B is equal and opposite to that B exerts on A, keepng the [[momento_lineal_total]] constant.

To illustrate the generality of the principle, this inelastic case is a particular instance of the general balance **p**, where [[v1f]] = [[v2f]] = [[vf]] because the bodies couple together. In the general elastic case, [[v1f]] and [[v2f]] would differ and would be calculated using:

{{f:cond}}

Conversely, if the system had started from rest and the blocks had separated by an internal force (explosion or spring), the [[v1f]] of the first body would be negative relative to the sep body's velocity, described by the recoil law:

{{f:recoil_law}}

# Real-world example

## Context

In automotive safety systems, engineers use this principle to estimate impact severity. The [[vf]] after an inelastic collision determines the deceleration that airbags must manage. Consider a 1200 kg vehicle at 15 m/s impacting a stopped 1400 kg car.

## physical Estimation

Applying formula **p**, the initial momentum of 18000 kg·m/s is distributed over a [[masa_total]] of 2600 kg. The velocity after the crash will be approximately 6.9 m/s. The velocity change for the first car is about 8.1 m/s. If this change occurs in a [[tiempo]] of 0.1 seps, the average force on the occupant is proportional to this momentum variation.

## Interpretation

The application pition indicates that conservation is valid only during the brief impact. For safety design, this means that the [[Pfinal]] just after the collision is the starting point for calculating how to safely dissipate energy.
\r
\r
\r
`;export{e as default};
