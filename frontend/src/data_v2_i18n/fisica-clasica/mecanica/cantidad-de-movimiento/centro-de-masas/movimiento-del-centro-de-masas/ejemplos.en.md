# Exam-type example: Projectile explosion in flight

## Problem statement
An artillery projectile with a total mass [[M]] of four kilograms moves through a region of space where gravitational forces are negligible. Initially, the projectile moves in a straight and uniform manner along the horizontal axis at a constant velocity of fifty meters per second. At a certain moment, an internal explosive charge detonates, splitting the projectile into two identical fragments of masses [[m1]] of two kilograms and [[m2]] of two kilograms. After the explosion, the first fragment is measured to be projected vertically upwards with a speed of one hundred meters per second. The goal of the problem is to determine the complete velocity vector of the second fragment [[v2]] and to demonstrate that the global center of mass movement of the system is not affected by the internal detonation.

## Data
- Total system mass [[M]]: four kilograms.
- Mass of the first fragment [[m1]]: two kilograms.
- Mass of the second fragment [[m2]]: two kilograms.
- Initial center of mass velocity [[v_cm]]: fifty meters per second horizontally.
- Final velocity of the first fragment [[v1]]: one hundred meters per second vertically.
- Reference system: Inertial frame with origin at the point of explosion.

## System definition
We define the system as the set formed by all the matter that initially constituted the projectile. After the explosion, the system becomes a set of two discrete particles interacting through internal impulsive forces. We consider that the environment exerts no significant net force on the set during the time interval in which the blast occurs, allowing us to treat the system as an isolated system in terms of its total linear momentum.

## Physical model
We use the discrete particle system model to describe the translational dynamics. In this approach, the center of mass [[v_cm]] acts as an ideal mathematical point that concentrates all the system's inertia of total mass [[M]]. The behavior of this point is governed exclusively by the applied external forces [[F_ext]], completely ignoring the complexity of internal interactions.

## Model justification
The application of this model is based on Newton's second law for systems. According to this principle, the rate of change of total linear momentum is equal to the sum of all external forces. Since the explosion forces are internal, their vector sum is strictly null. In the absence of a net external force [[F_ext]], the center of mass acceleration [[a_cm]] is zero. This justifies the law of conservation of total linear momentum, ensuring that the system's barycenter maintains its state of motion prior to the explosion.

## Symbolic solution
To resolve the cinematic state of the system, we integrate the fundamental laws of center of mass dynamics:
1. **Total linear momentum definition**: We establish that [[p_tot]] is the product of the total mass and the barycenter velocity.
   {{f:momentum_cm}}
2. **Weighted average of velocities**: We use the structural relationship for the system parts.
   {{f:vcm_weighted_average}}
3. **Newton's Second Law for systems**: We justify the trajectory invariance given that [[F_ext]] is null.
   {{f:newton_cm}}
4. **General momentum relation**: We consider that the rate of change [[dp_tot]] is null.
   {{f:newton_general_momentum}}
5. **Impulse-momentum theorem**: We confirm that with no external impulse [[J_ext]], the variation [[Delta_vcm]] is zero.
   {{f:impulse_momentum_cm}}
6. **Auxiliary definitions**:
   {{f:vcm_weighted_average}}
   {{f:fext_zero_condition}}
   {{f:acm_zero_result}}

## Numerical substitution
1. **Initial momentum calculation**: The projectile carries a momentum [[p_tot]] equivalent to the product of the total mass [[M]] and the barycenter velocity [[v_cm]], yielding two hundred kilogram meters per second in the horizontal direction.
2. **Fragment 1 momentum**: The momentum of the first fragment [[p1]] is calculated as its mass [[m1]] times its velocity [[v1]], yielding two hundred kilogram meters per second upwards.
3. **Determination of fragment 2 momentum**: By conservation, the momentum of the second fragment [[p2]] is found by subtracting the momentum of the first fragment from the total momentum. The result is a vector with a horizontal component of two hundred and a vertical component of minus two hundred kilogram meters per second.
4. **Calculation of velocity [[v2]]**: We divide the resulting momentum by the mass of the second fragment [[m2]]; the velocity [[v2]] becomes one hundred meters per second to the right and one hundred meters per second downwards.

## Dimensional validation
We verify that the units of the result are consistent. By dividing a momentum magnitude by a mass, we obtain velocity dimensions, which is correct. The magnitude of the velocity obtained is approximately one hundred and forty-one meters per second. This value is physically reasonable given that the explosion has converted chemical energy into extra kinetic energy for both fragments, always respecting the vector balance of the total inertia.

## Physical interpretation
The result obtained means that, despite the violence of the explosion and the fact that the fragments move in divergent directions, the system's "inertial heart" ignores the event. This indicates that the center of mass continues to move at fifty meters per second, which implies that internal forces can only redistribute motion among the parts. Therefore, the system is consistent with the conservation law. It is physically impossible for an internal force to deviate the trajectory of the global barycenter of the system under study.

# Real-world example: Propulsion and railway collisions

## Context
We analyze two common engineering scenarios where center of mass inertia is the determining factor. First, the propulsion of a probe of one thousand two hundred kilograms that ejects a module of two hundred kilograms at an escape velocity [[v_escape]] of two thousand five hundred meters per second. Second, the inelastic collision of a ten thousand kilogram wagon against a five thousand kilogram one at rest. In both cases, horizontal external forces [[F_ext]] are considered negligible compared to the intense internal interactions.

## Physical estimation
For the probe, the external impulse [[J_ext]] is null, which ensures that the CM velocity variation [[Delta_vcm]] is strictly zero.
{{f:impulse_momentum_cm}}
The probe gains a velocity increment [[Delta_v]] of five hundred meters per second in the direction opposite to the fuel ejection.
For the railway collision, the center of mass acceleration [[a_cm]] is zero because there is no external thrust. Applying the weighted average inertia definition:
{{f:newton_cm}}
We estimate that the coupled wagon set maintains a constant velocity of one point thirty-three meters per second, identical to the original system's barycenter velocity before the impact.

## Interpretation
Both cases confirm that the center of mass acts as the "movement anchor" of the system. Whether through controlled mass ejection or a destructive inelastic collision, the global translational state (represented by the CM) remains unchanged as long as no net external force intervenes. This invariance allows for greatly simplifying the analysis of complex systems by focusing on the point where the assembly's physics behaves in a deterministic and predictable way.

