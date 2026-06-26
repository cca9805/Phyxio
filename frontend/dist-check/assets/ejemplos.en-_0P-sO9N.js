const e=`\uFEFF# Exam-type example

## Problem statement
A vehicle of mass [[m1]] = 1200 kg is moving to the right with an initial velocity [[v1i]] = 25 m/s. In front of it, a second vehicle of mass [[m2]] = 1800 kg moves in the same direction with a velocity [[v2i]] = 10 m/s. The first vehicle impacts the rear of the second one. After the collision, the vehicles are observed to separate, but the restitution coefficient of the impact is [[e]] = 0.4. Calculate the final velocities [[v1f]] and [[v2f]] of both vehicles, the remaining energy [[Kf]], and determine the amount of kinetic energy dissipated [[DeltaK]] during the collision.

## Data
- Projectile mass: [[m1]] = 1200 kg.
- Initial velocity 1: [[v1i]] = 25 m/s (positive direction).
- Target mass: [[m2]] = 1800 kg.
- Initial velocity 2: [[v2i]] = 10 m/s (positive direction).
- Restitution coefficient: [[e]] = 0.4.

## System definition
The system consists of the two vehicles. During the extremely short time interval of the impact, the mutual deformation forces are much more intense than external forces (such as road friction), so the system can be considered isolated. This ensures the conservation of total linear momentum [[p]]. Being an inelastic collision with [[e]] < 1, we know beforehand that there will be a net loss of kinetic energy.

## Physical model
The **One-Dimensional Inelastic Collision Model** is applied. This model assumes that:
1. The impact is frontal and the motion occurs strictly along a straight line.
2. Linear momentum [[p]] is conserved.
3. Kinetic energy is not conserved; part is dissipated into deformation and heat.
4. Relative rebound is reduced according to the factor given by the restitution coefficient [[e]].

## Model justification
The choice of this model is justified by the restitution coefficient data (0.4), which places the event in the inelastic range. It is not an elastic collision (where all relative velocity would be recovered) nor a totally inelastic one (where the cars would stick together). The inelastic model is the only one capable of predicting different exit velocities while respecting the observed energy loss in real metal body collisions.

## Symbolic solution

The problem is solved by stating the balance equations system:

{{f:p}}

{{f:e_definition}}

To directly find the exit velocities, we use the analytical solutions of the inelastic model:

{{f:v1f_inelastic}}

{{f:v2f_inelastic}}

Once the velocities are obtained, we evaluate the system's energy balance by calculating the initial energy [[Ki]], the final energy [[Kf]], and the net variation [[DeltaK]]:

{{f:ki_system}}

{{f:kf_system}}

{{f:delta_k}}

Finally, we calculate the severity of the dissipation via the lost energy fraction:

{{f:energy_loss_fraction}}

## Numerical substitution
1. **Final velocities**:
   - [[v1f]] = ((1200 - 0.4 * 1800) / (1200 + 1800)) * 25 + ((1 + 0.4) * 1800 / (1200 + 1800)) * 10
   - [[v1f]] = (480 / 3000) * 25 + (2520 / 3000) * 10 = 4.0 + 8.4 = 12.4 m/s
   - [[v2f]] = ((1 + 0.4) * 1200 / (1200 + 1800)) * 25 + ((1800 - 0.4 * 1200) / (1200 + 1800)) * 10
   - [[v2f]] = (1680 / 3000) * 25 + (1320 / 3000) * 10 = 14.0 + 4.4 = 18.4 m/s

2. **Energy balance**:
   - [[Ki]] = 0.5 * 1200 * (25)^2 + 0.5 * 1800 * (10)^2 = 375000 + 90000 = 465000 J
   - [[Kf]] = 0.5 * 1200 * (12.4)^2 + 0.5 * 1800 * (18.4)^2 = 92256 + 304704 = 396960 J
   - [[DeltaK]] = 396960 - 465000 = -68040 J

3. **Loss fraction**:
   - [[loss_fraction]] = 68040 / 465000 = 0.146 (approximately 14.6 percent of the initial energy).

## Dimensional validation
The resulting velocities are expressed in meters per second (m/s) and energies [[K]] in Joules (J), maintaining consistency with the International System. The total momentum balance [[p]] remains constant at 48000 kg*m/s, validating the integrity of the calculation.

## Physical interpretation
The result shows that the leading vehicle has been accelerated (going from 10 to 18.4 m/s) at the expense of the sharp braking of the first vehicle (going from 25 to 12.4 m/s). The loss of more than 68000 Joules (a significant order of magnitude value) has been physically used in deforming the metal structures of both cars and in generating the impact noise, confirming the inelastic nature of the leaf.

# Real-world example

## Context
In road safety laboratories, crash tests are conducted to measure passenger survival rates. A vehicle is launched against a deformable barrier at a controlled speed to study its inelastic behavior.

## Physical estimation
Consider a car of [[m1]] = 1500 kg impacting at [[v1i]] = 15 m/s against a fixed concrete block. If the car were elastic, it would rebound with the same speed, which would kill the occupants due to extreme acceleration. In reality, the design is intended for the restitution coefficient [[e]] to be very low (close to 0.1). A **reasonable value** for the energy loss [[DeltaK]] in these cases is an **order of magnitude** of 150000 Joules.

## Interpretation
Low restitution (low value of [[e]]) is a safety measure: the lower the rebound, the more energy is absorbed by the bodywork instead of being returned to the passengers as backward kinetic energy. The inelastic model allows engineers to design "crumple zones" that maximize the magnitude of [[DeltaK]] to protect human life.
\r
\r
`;export{e as default};
