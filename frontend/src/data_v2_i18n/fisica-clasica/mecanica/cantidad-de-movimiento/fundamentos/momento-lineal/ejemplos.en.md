# Examples: Linear Momentum [[p]]

# Exam Type Example

## Problem statement
A security projectile of mass[[m]] = 0.5 kg moves horizontally to the right with a velocity[[v]] = 20 m/s. The projectile hits a protection barrier and bounces in the same direction but in the opposite sense with a final velocity of 15 m/s. The contact with the barrier lasts for a time interval[[DeltaT]] = 0.02 s.

Calculate:
1. The initial[[Pinicial]]and final[[Pfinal]]linear momentum of the projectile.
2. The linear momentum variation[[DeltaP]]suffered by the object.
3. The average net force[[Fnet]]exerted by the barrier on the projectile.
4. The kinetic energy[[K]]lost during the impact.

## Data
- Projectile inertial mass:[[m]] = 0.5 kg
- Initial velocity:[[vx]] = 20 m/s (positive direction)
- Final velocity:[[vx]] = -15 m/s (negative direction, bounce)
- Time interval:[[DeltaT]] = 0.02 s

## System Definition
The system is defined as the point projectile of constant mass. A one-dimensional coordinate system is established where the rightward direction is considered positive ($+$) and the leftward direction negative ($-$). The barrier is considered an external agent exerting an impulse on the system.

## Physical Model
The **point particle model** is used under Newton's Second Law in its impulsive form. Since motion is one-dimensional, the vertical momentum component is zero ([[py]] = 0). It is assumed that the projectile does not fragment and that the linear momentum [[p]] and mass [[m]] are the core parameters, where the average force is representative of the total interaction during the impact.

## Model Justification
The use of this model is appropriate because the contact time is extremely short compared to the total flight time, allowing the interaction to be treated as a dominant impulsive force. Furthermore, since there is no mention of massive plastic deformations or rotations, the linear momentum balance is the most accurate tool to determine the impact force.

## Symbolic solution

1.  **State Momentum Calculation**:

{{f:momentum_definition}}

    Since the motion is 1D, its magnitude corresponds to the absolute value of the x-component:

{{f:momentum_magnitude}}

    Applying this relationship to the initial and final states.
2.  **Change of State Calculation**:

{{f:momentum_change}}

3.  **Dynamic Cause Determination**:

    We estimate the force from Newton's Second Law:

{{f:instantaneous_force}}

    Approximated as an average force over the interval:

{{f:average_force_definition}}

4.  **Energy Balance**:

{{f:kinetic_energy_momentum}}

    For both states.

## Numerical Substitution

1.  **Momenta**:
    - [[px]] calculated by multiplying 0.5 kg by 20 m/s (10 kg·m/s).
    - [[px]] calculated by multiplying 0.5 kg by -15 m/s (-7.5 kg·m/s).
2.  **Variation**:
    - [[DeltaP]] obtained as the difference between -7.5 and 10 (-17.5 kg·m/s).
3.  **Average Force**:
    - [[Fnet]] after dividing -17.5 kg·m/s by 0.02 s (-875 N).
4.  **Energy**:
    - Initial [[K]] from 10 squared divided by 2 times 0.5 (100 J).
    - Final [[K]] from -7.5 squared divided by 2 times 0.5 (56.25 J).
    - Energy loss by subtracting 56.25 from 100 (43.75 J).

## Dimensional Validation
Verification is performed using the **Phyxio v5 Blue Notation Style**:
- Momentum: `[M L T⁻¹]` (kg · m/s) -> Correct.
- Force: `[M L T⁻¹] / [T] = [M L T⁻²]` (N) -> Correct.
- Energy: `[M L T⁻¹]² / [M] = [M L² T⁻²]` (J) -> Correct.

## Physical Interpretation
The result shows that the linear momentum variation is greater than the initial momentum due to the **change in direction**. The force of $-875 \text{ N}$ indicates that the barrier pushed to the left, opposing the initial motion and managing not only to stop the projectile but to launch it in the opposite direction. The loss of $43.75 \text{ J}$ of kinetic energy indicates that the collision was inelastic; this energy has been dissipated as heat and elastic deformation of the barrier.

---

# Real-world example

## Context
In a traffic accident, a passenger of mass[[m]] = 75 kg traveling at 54 km/h (15 m/s) must be stopped by the safety system. If the passenger hits the rigid steering wheel, they stop in just[[DeltaT]] = 0.01 s. If the airbag deploys, the stopping time is extended to[[DeltaT]] = 0.15 s. The goal is to compare the average force[[Fnet]]the body receives in both cases.

## Physical Estimation
We will perform an order of magnitude calculation to estimate the linear momentum [[p]] and required force.

The passenger's initial linear momentum is obtained by multiplying mass by velocity:
[[p]] evaluated at 75 kg times 15 m/s (1125 kg·m/s).

To stop them, the linear momentum variation [[DeltaP]] must be -1125 kg·m/s, since the final momentum must be zero.

1.  **Case without Airbag**:
    If the force acts in a very short interval, its intensity grows enormously. The [[Fnet]] obtained by dividing -1125 by 0.01 s results in -112,500 N. This force is equivalent to supporting the weight of about 11 tons on the chest, which is lethal.
2.  **Case with Airbag**:
    By increasing the braking time, the [[Fnet]] calculated by dividing -1125 by 0.15 s drops to -7,500 N. Although still a considerable force, it is 15 times smaller than in the previous case, placing it within human survival margins thanks to time management.

## Interpretation
This real-world example demonstrates that linear momentum is an unavoidable magnitude: to stop a car or a body, the exchange of[[p]]must happen regardless. The airbag's function is not to "avoid" linear momentum, but to **manage the interval[[DeltaT]]**. By increasing the interaction time, the average force needed for the same[[DeltaP]]drastically decreases, protecting the passenger's physical integrity. The physics of linear momentum saves lives every day through this simple inverse proportionality relationship between force and time.

