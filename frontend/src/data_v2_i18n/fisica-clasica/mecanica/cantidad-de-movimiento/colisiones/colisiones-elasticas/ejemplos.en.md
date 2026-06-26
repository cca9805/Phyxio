# Exam-type example

## Problem statement
Two high-precision metal spheres, treated as point particles for this analysis, move along a frictionless linear guide. The first sphere, with mass [[m1]] = 2.0 kg, moves to the right with an initial velocity [[v1i]] = 5.0 m/s. The second sphere, with a mass [[m2]] = 1.0 kg, moves in the opposite direction (to the left) with a velocity [[v2i]] = -3.0 m/s. Assuming the impact is perfectly elastic, calculate the final velocities [[v1f]] and [[v2f]] of both spheres after the impact and verify that the system's kinetic energy is conserved.

## Data
- Mass of body 1: [[m1]] = 2.0 kg.
- Initial velocity 1: [[v1i]] = 5.0 m/s (positive direction).
- Mass of body 2: [[m2]] = 1.0 kg.
- Initial velocity 2: [[v2i]] = -3.0 m/s (negative direction).
- Restitution coefficient: [[e]] = 1 (elastic collision condition).

## System definition
The system consists of the two spheres. During the extremely short time interval of the impact, impulsive contact forces dominate over any other external forces (such as residual air friction or the guide, which we neglect). Therefore, the system can be considered isolated in terms of linear momentum. Furthermore, as it is an elastic collision, there is no internal energy dissipation.

## Physical model
The **One-Dimensional Elastic Collision Model** is applied. This model assumes that:
1. The motion occurs strictly along a straight line (X-axis).
2. Total linear momentum [[p]] is conserved.
3. Total kinetic energy [[K]] is conserved.
4. The bodies recover their original shape instantaneously after contact, returning all the elastic potential energy accumulated during maximum deformation.

## Model justification
The use of hardened metal spheres on a low-friction guide justifies the elastic model. The rigidity of the materials minimizes energy loss through plastic deformation or heat. The linear guide ensures the problem is one-dimensional, allowing the use of scalar balance equations for momentum and energy without needing to consider deflection angles.

## Symbolic solution

The problem is solved starting from the two conservation laws and the elasticity condition:

{{f:e_definition}}

First, we state the conservation of linear momentum [[p]]:

{{f:p}}

Second, we state the conservation of the system's kinetic energy by comparing the initial [[Ki]] and final [[Kf]] states:

{{f:ki_system}}

{{f:kf_system}}

{{f:K}}

To avoid solving a system of quadratic equations, we use the relative velocity relation, which is a direct consequence of the two previous laws:

{{f:rel}}

Solving for the final velocities from the combined equations (or directly using the general solution formulas for a 1D elastic collision), we obtain:

{{f:v1f}}

{{f:v2f}}

Finally, we calculate the kinetic energy variation [[DeltaK]] to confirm the validity of the result and the efficiency via the transfer fraction:

{{f:delta_k}}

{{f:energy_transfer}}

## Numerical substitution
1. **Calculation of final velocities**:
   - [[v1f]] = ((2.0 - 1.0)/(2.0 + 1.0)) * 5.0 + (2 * 1.0 / (2.0 + 1.0)) * (-3.0)
   - [[v1f]] = (1/3) * 5.0 + (2/3) * (-3.0) = 1.667 - 2.0 = -0.333 m/s
   - [[v2f]] = (2 * 2.0 / (2.0 + 1.0)) * 5.0 + ((1.0 - 2.0) / (2.0 + 1.0)) * (-3.0)
   - [[v2f]] = (4/3) * 5.0 + (-1/3) * (-3.0) = 6.667 + 1.0 = 7.667 m/s

2. **Kinetic energy verification**:
   - [[Ki]] = 0.5 * 2.0 * (5.0)^2 + 0.5 * 1.0 * (-3.0)^2 = 25.0 + 4.5 = 29.5 Joules
   - [[Kf]] = 0.5 * 2.0 * (-0.333)^2 + 0.5 * 1.0 * (7.667)^2 = 29.5 Joules
   - [[DeltaK]] = 0 Joules (Perfect elasticity is confirmed).

## Dimensional validation
All resulting velocity magnitudes have units of meters per second, and energies have units of Joules, which is consistent with SI dimensional analysis. The momentum balance maintains unit consistency of kg times meter per second.

## Physical interpretation
The result shows that sphere 1 has reversed its direction of motion (rebounds) because its final velocity [[v1f]] is negative, while sphere 2 has been violently launched to the right with a velocity [[v2f]] much higher than its initial one. The zero energy variation [[DeltaK]] indicates that the process has been energetically ideal, a distinctive feature of the elastic collision leaf.

# Real-world example

## Context
The **Newton's Cradle** is the classic example of serial elastic collisions. It consists of a row of identical metal spheres suspended by wires. When a sphere at one end is released, it hits the others, and almost instantaneously, only the sphere at the opposite end flies off, while the central spheres remain at apparent rest.

## Physical estimation
Consider a sphere of mass [[m1]] = 0.05 kg (50 g) impacting at a speed of 1.5 m/s against a row of identical spheres at rest. Since the masses are equal, the kinetic energy transfer fraction [[T_fraction]] is at its maximum:

{{f:energy_transfer}}

Substituting equal masses into the formula, we obtain a **reasonable value** of 100 percent transfer (where T equals 1). This means the first sphere yields all its energy and momentum to the second, the second to the third, and so on, until the last sphere receives the entire impulse. This is a transfer process with a temporal **order of magnitude** of microseconds, where potential energy is almost entirely conserved.

## Interpretation
Newton's Cradle is a visual demonstration that in elastic collisions between equal masses, bodies simply "exchange" their velocity vectors. The first sphere "passes" its velocity to the rest of the chain. If the collision were not elastic, the central spheres would move, and the system would quickly lose synchrony due to the accumulation of negative [[DeltaK]]. The persistence of motion in these devices is a direct testament to the low energy dissipation of hardened metals.


