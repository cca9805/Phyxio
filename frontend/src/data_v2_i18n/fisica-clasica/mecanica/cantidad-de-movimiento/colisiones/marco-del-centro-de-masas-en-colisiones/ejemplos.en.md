# Exam-type example

## Problem statement
A ball A with mass [[m1]] of 2 kg moves with velocity [[v1]] of 6 m/s in the positive x-axis direction. It collides with a ball B with mass [[m2]] of 3 kg initially at rest. The collision is elastic, and it is observed that in the center of mass frame, the particles are deflected by a 90-degree angle relative to the direction of incidence. A complete analysis of the system is required, determining the fundamental kinematic and energetic magnitudes in both the moving and laboratory frames, explicitly calculating the central velocity [[Vcm]], the relative velocities [[u1]] and [[u2]], the relative velocity between bodies [[v_rel]], the reduced mass [[mu]], and the internal kinetic energy [[K_cm]]. Finally, the total energy balance must be verified through König's theorem.

## Data
- Projectile mass [[m1]]: 2 kg.
- Target mass [[m2]]: 3 kg.
- Initial velocity [[v1]]: 6 m/s.
- Initial velocity [[v2]]: 0 m/s.
- Collision nature: perfectly elastic.
- Scattering angle in the center of mass: 90 degrees.

## System definition
The system consists of the two spheres, A and B. During the extremely brief impact interval, external forces (gravity and normal) cancel each other out, and their impulse is negligible compared to the intense internal contact forces. This allows treating the system as isolated on the X-axis, conserving total linear momentum. As a two-particle system, the center of mass defines a privileged inertial reference frame where the collision dynamics manifest with maximum symmetry. The final state in the laboratory will be obtained after solving the interaction in the center of mass frame.

## Physical model
To solve this problem, we employ the **Center of Mass Frame Model for Collisions**. This model is based on the following physical pillars:
1. **Conservation of Linear Momentum**: The system's total momentum remains constant over time in the absence of external forces.
2. **Galilean Transformation**: Used to switch from the laboratory frame to the center of mass frame and vice versa, allowing an "inside" view of the system.
3. **CM Frame Symmetry**: In this frame, the total momentum is always zero ([[p_cm_total]] = 0), forcing the particles to move in opposite directions.
4. **Reduced Mass and Internal Energy**: Reduced mass [[mu]] is used to quantify the kinetic energy available for the collision [[K_cm]].
5. **König's Theorem**: Provides the hierarchical structure to validate the total energy balance by summing the translational and internal parts.

## Model justification
Choosing this model is necessary because a direct laboratory analysis would involve complex non-linear systems of equations. By transforming to the center of mass frame, the elastic collision is reduced to a simple rotation of the relative velocity vector, keeping its magnitude constant. This allows finding the exit velocities with minimal algebraic load and superior conceptual clarity. This approach is the standard in particle physics due to its elegance and because it allows separating what is purely collective motion from what is real physical interaction between the system's constituents.

## Symbolic solution
The first step is to find the moving reference frame velocity using the center of mass velocity formula, which weights initial inertias according to their laboratory velocities:

{{f:Vcm}}

Next, we determine the relative approach velocity [[v_rel]], which is the difference in laboratory velocities. This magnitude is invariant and defines the event's scale.

We transform the initial laboratory velocities into velocities relative to the center of mass to eliminate global translation noise and focus on pure interaction:

{{f:u1}}

{{f:u2}}

We determine the pair's effective inertia through the reduced mass [[mu]], which characterizes the system's resistance to changes in its relative motion state:

{{f:mu}}

We calculate the available kinetic energy in this frame (internal energy) through the quadratic relationship with relative velocity and reduced mass:

{{f:K_cm}}

We verify that the total momentum in this frame is zero before and after impact to validate central frame symmetry:

{{f:p_cm_total}}

To obtain final laboratory velocities, we resolve scattering in the CM and apply inverse transformations by vectorially adding the central velocity [[Vcm]]:

{{f:v1_inverse}}

{{f:v2_inverse}}

Finally, we validate the system's energy hierarchy using the energy theorem for systems, ensuring that total energy decomposes correctly:

{{f:koenig_theorem}}

## Numerical substitution
1. **Center of mass velocity**: Applying the data to:

{{f:Vcm}}

We get [[Vcm]].

2. **Relative velocity**: The difference [[v_rel]].

3. **Velocity [[u1]] in the CM**: Using the expression:

{{f:u1}}

We find that ball A approaches the center at [[u1]].

4. **Velocity [[u2]] in the CM**: Using the expression:

{{f:u2}}

We find that ball B approaches the center at [[u2]].

5. **Reduced mass**: Using the formula:

{{f:mu}}

We calculate [[mu]].

6. **Kinetic energy in the CM**: According to the relation:

{{f:K_cm}}

The internal energy is [[K_cm]].

7. **Total momentum in the CM**: With the condition:

{{f:p_cm_total}}

We verify the nullity.

8. **Total energy**: We calculate [[K_total]] in the lab. Using the hierarchy:

{{f:koenig_theorem}}

We validate the energy balance.

## Dimensional validation
The obtained velocities have units of meters per second (L/T). Reduced mass [[mu]] is correctly expressed in kilograms (M). The resulting energy is measured in Joules (ML²/T²), which is consistent with the product of a mass and the square of a velocity. Linear momentum [[p_cm_total]] has units of mass times velocity, and its dimensional nullity is consistent with any well-defined inertial reference frame. All employed expressions respect the principle of dimensional homogeneity.

## Physical interpretation
The result demonstrates that the central velocity acts as an invariant spectator transporting the system through space. In the center of mass frame, the balls approach with equal and opposite momenta. Since the crash is elastic, they exit with those same momenta but rotated. This means that the internal energy is the only one participating in the physical interaction and is what determines the impact's violence; this indicates that the rest of the laboratory energy is locked in the system's global translation. The CM frame allows us to see this distinction with consistent physical clarity.

# Real-world example

## Context
In nuclear reactor physics, the center of mass frame is vital for understanding neutron moderation. When a fast neutron produced in fission collides with a hydrogen nucleus (a proton), analysis in the CM allows predicting how much energy the neutron can lose in a single collision to become a thermal neutron capable of inducing a new fission. Without this moderation, a controlled chain reaction could not be sustained.

## Physical estimation
Consider a neutron with mass [[m1]] close to 1 u colliding with a proton of [[m2]] close to 1 u at rest. In this case, the reduced mass [[mu]] is exactly 0,5 u, half of the individual mass. According to the theorem from:

{{f:koenig_theorem}}

The energy available in the CM is exactly half of the initial energy. A reasonable value for a fast neutron's energy is of the order of 2 MeV. Of these, a value of 1 MeV is internal energy [[K_cm]] available for interaction. Since the masses are equal, the energy transfer in the center of mass frame is maximal.

## Interpretation
This analysis reveals why hydrogen is the best moderator: by having masses almost identical to the neutron's, the reduced mass is maximal and the center of mass velocity is at its optimal value for transfer. This means that we maximize the energy available in the center of mass frame to be dissipated. This indicates that if the nucleus were much heavier, the center of mass velocity would be nearly zero and the neutron would lose almost no relative energy. The efficiency of a modern nuclear reactor directly depends on this mass engineering in the center of mass frame.

