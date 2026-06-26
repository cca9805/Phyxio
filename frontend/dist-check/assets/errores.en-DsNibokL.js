const e=`# Common Errors in Conservation Applications

## Introduction to Error Analysis in Conservation

The principle of conservation of linear momentum is one of the most robust pillars of physics, but its practical application is rife with conceptual and methodological traps. Most errors arise not from a lack of understanding of the mathematical equality, but from a poor definition of the system under study or a misinterpretation of the vectorial nature of the magnitudes involved. Below are the most frequent errors that prevent achieving Level 5 mastery in this leaf.

## Conceptual Errors: The System and its Boundaries

### Error 1: Ignoring the Vector Nature of Linear Momentum

**Why it seems correct:**
In many introductory one-dimensional problems, it seems sufficient to add speeds multiplied by masses as if they were simple scalars. This simplification works by chance if all objects move in the same direction, which reinforces the bad practice.

**Why it is incorrect:**
Linear momentum [[P]] is intrinsically a vector. If two bodies move in opposite directions, their momenta have opposite signs in any inertial coordinate system. Ignoring the direction violates the conservation principle catastrophically, as one would be erroneously adding "amount of motion" that is actually being cancelled out.

**Detection signal:**
Obtaining a final velocity greater than the sum of the initial velocities in an elastic collision, or a total momentum that "magically" increases without the presence of external forces.

**Conceptual correction:**
Before performing any calculation, a system of coordinate axes must be established and a sign (+ or -) must be assigned to each velocity ([[v1i]], [[v2i]], [[v1f]], [[v2f]]). The balance equation must always be written with these signs strictly respected.

**Contrast Mini-example:**
Two 1 kg balls collide head-on at 5 m/s each. If treated as scalars, the total momentum seems to be 10 kg·m/s. However, vectorially, the total momentum cancels out (sum of 5 and -5), resulting in 0 kg·m/s. The difference is absolute: a 100% error in the magnitude of the balance.

## Model Errors: The Illusion of Isolation

### Error 2: Applying Conservation in Systems with Net External Forces

**Why it seems correct:**
The conservation principle is so elegant and powerful that the student tends to apply it to any fast event, such as a car crash or a bounce off the ground, assuming that the isolation is automatic.

**Why it is incorrect:**
The law is only valid if the net external force on the system is zero. If there are significant external forces such as ground friction during a long braking period, or weight over a prolonged time interval, the initial linear momentum [[Pinitial]] will not be equal to the final [[Pfinal]]. Linear momentum changes due to the effect of the external impulse.

**Detection signal:**
The calculated result does not match the observed physical reality or contradicts other principles such as the energy balance in situations where energy loss is known.

**Conceptual correction:**
Perform a Free Body Diagram (FBD) of the entire system. If external forces exist, evaluate if the time interval is small enough that their impulse is negligible (impact approximation). If it is not, the Relationship of Impulse and Momentum must be used instead of simple conservation.

**Contrast Mini-example:**
A block slides down a ramp with friction and collides with another one. If you apply conservation from the moment the block starts sliding down, the result will fail because gravity and friction act throughout the entire path. Conservation is only valid at the exact moment of impact ([[P]] just before and just after), where the external impulse is negligible compared to the collision force.

## Mathematical Errors: Mass and Coupling

### Error 3: Confusing System Mass with an Individual Fragment Mass

**Why it seems correct:**
In solving the coupling formula for perfectly inelastic collisions, it is common for the student, when solving for the final velocity, to use only the mass of one of the bodies in the denominator, due to mathematical inertia or lack of attention.

**Why it is incorrect:**
In a collision where the bodies remain joined, the final mass is necessarily the sum of [[m1]] and [[m2]]. Ignoring this sum in the denominator overestimates the final velocity of the assembly, violating the inertial reality of the system.

**Detection signal:**
The calculated common final velocity [[vf]] turns out to be greater than the entry velocity of the fastest body, which is physically impossible for a system that slows down when capturing another mass.

**Conceptual correction:**
In every inelastic collision, the resulting system must be treated as a single body of total mass (sum of individual masses). The **inelastic_collision** formula must always be written with this explicit term.

**Contrast Mini-example:**
A 0.1 kg projectile at 100 m/s embeds itself in a 0.9 kg block at rest. The total momentum is 10 kg·m/s. If you use only the projectile's mass (0.1 kg) in the denominator, you would get a velocity of 100 m/s (as if there were no block). Using the correct mass of the coupled system (1.0 kg), the velocity [[vf]] is 10 m/s. The error from omitting the mass sum is a factor of 10.

## Interpretation Errors: Recoils and Reference Frames

### Error 4: Confusing Recoil with External Bounce

**Why it seems correct:**
In both phenomena, an object experiences a sudden change in direction of its motion, which visually may look similar.

**Why it is incorrect:**
Recoil is a consequence of internal forces within a system that starts from a determined initial state (frequently rest, where [[Pinitial]] is zero). Bounce, conversely, usually implies an interaction with an external agent (such as a wall) that is not included in the system and therefore provides an external impulse that changes the momentum of the object. Attempting to apply the **recoil_law** to a bounce against a static wall is a category error.

**Detection signal:**
Attempting to solve a bounce problem using momentum conservation without including the "wall" or the "Earth" as part of the mass system, leading to the absurd conclusion that the momentum of the particle alone should be conserved.

**Conceptual correction:**
Identify if the force causing the change in motion is internal (between components of the chosen system) or external. Only internal forces allow for the use of the direct balance ([[Pinitial]] equals [[Pfinal]]) without additional terms.

**Contrast Mini-example:**
In a shot (recoil), the rifle and the bullet gain opposite momenta that sum to zero; the system is isolated. In a ball bouncing off a wall, the ball changes momentum from +p to -p (a variation of 2p); the ball's momentum is NOT conserved because the wall applies an external impulse. Confusing the two would lead to erroneously believing that the ball must exit with zero velocity to "conserve" the initial rest.

## Quick self-control rule

Before finalizing any conservation application exercise, the student must subject their result to the "Four Dimensions Test":

1.  **Unit Dimension**: Is the result expressed in the correct SI units? A linear momentum in kg·m/s and a velocity in m/s are non-negotiable.
2.  **Sign Dimension**: Is the recoil sign [[v1f]] opposite to the projectile sign [[v2f]]? If both have the same sign starting from rest, the calculation is erroneous by definition.
3.  **Mass Dimension**: Have I added the masses in the final state if the bodies have remained joined?
4.  **Conservation Dimension**: Does the momentum balance (product of final mass and velocity) match the initial value? The balance must close if the system was isolated.
`;export{e as default};
