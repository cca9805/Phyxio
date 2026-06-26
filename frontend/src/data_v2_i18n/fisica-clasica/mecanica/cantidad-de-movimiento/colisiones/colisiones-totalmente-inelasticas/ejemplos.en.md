# Exam-type example

## Problem statement
A projectile of mass [[m1]] = 50 g is fired horizontally at a wooden block of mass [[m2]] = 4.95 kg that is initially at rest on a frictionless surface. The projectile travels through the air and embeds itself deeply into the block, leaving both bodies firmly united. After the impact, the assembly begins to slide as a single object. Knowing that the measured final velocity of the assembly is [[vf]] = 2 m/s, determine the initial velocity of the projectile [[v1i]] just before impact. Additionally, calculate the dissipated kinetic energy [[DeltaK]] and the fraction of mechanical energy that has been transformed into other forms of energy [[loss_fraction]].

## Data
- Projectile mass: [[m1]] = 0.05 kg (converted from 50 g to maintain SI units).
- Target mass (block): [[m2]] = 4.95 kg.
- Initial block velocity: [[v2i]] = 0 m/s (at rest).
- Common final velocity of the assembly: [[vf]] = 2 m/s.

## System definition
The system under study is composed of two macroscopic particles: the incident projectile and the receiving block. During the extremely short time interval in which the collision occurs, the net external forces (such as the weight compensated by the normal on the horizontal surface) do not produce a significant impulse in the direction of motion. Therefore, the system is considered isolated on the X-axis, which guarantees the conservation of total linear momentum [[p]]. The final state is characterized by a single mass equal to the sum of the individual masses moving at a shared velocity.

## Physical model
To solve this problem, we use the **1D Perfectly Inelastic Collision Model**. This model is based on the following physical pillars:
1. **Conservation of Linear Momentum**: The total momentum before the impact is equal to the total momentum after, since there are no horizontal external forces.
2. **Mass Coupling**: The bodies do not bounce; the coefficient of restitution is strictly zero.
3. **Maximum Dissipation**: The largest possible amount of kinetic energy is lost for a system that must conserve its total momentum. The final energy is the minimum necessary for the center of mass to follow its trajectory.
4. **Shared Kinematics**: The final velocities of both bodies are identical, simplifying the number of unknowns in the problem to a single shared [[vf]]. This coupling depends on the initial masses [[m1]] and [[m2]] and their relative initial states.

## Model justification
The choice of this model is mandatory due to the explicit description that the projectile "embeds itself" in the block. In physics, this phrase is a technical code to indicate that the bodies pass from being two independent entities to forming a coupled rigid system. Since there is no mention of a rebound or elastic restoring forces separating the bodies, the perfectly inelastic model is the only one capable of describing the momentum transfer without violating the laws of thermodynamics. This model is especially useful because it allows us to ignore the complexity of internal friction forces and plastic deformation that occur during the collision, as the conservation of [[p]] acts as a superior geometric constraint that dictates the final result regardless of the dissipation mechanism.

## Symbolic solution
The first step consists of stating the linear momentum balance for the system:

{{f:p_balance}}

Since the block is initially at rest, the term associated with its initial momentum is zero. We solve for the initial velocity of the projectile [[v1i]] from the shared velocity, resulting in an expression where [[v1i]] is the product of the total mass and the final velocity, divided by the projectile mass. The expression for the shared velocity is:

{{f:vf}}

Once the input velocity is obtained, we proceed to the energy analysis. We calculate the initial kinetic energy of the system [[Ki]] and the kinetic energy that survives after the impact [[Kf]]:

{{f:Ki}}
{{f:Kf}}

The change in energy [[DeltaK]], which represents the work of non-conservative forces during the impact, is obtained by difference:

{{f:DeltaK}}

Finally, to quantify the efficiency of the dissipation, we calculate the energy loss fraction [[loss_fraction]]:

{{f:loss_fraction}}

## Numerical substitution
We perform the calculations using the registered magnitudes:

1. **Initial velocity of the projectile**:
   - After rearranging the balance and substituting the known values, we obtain [[v1i]] = 200 m/s.

2. **Energy balances**:
   - Initial kinetic energy: [[Ki]] = 1000 J.
   - Final kinetic energy: [[Kf]] = 10 J.
   - Dissipated energy variation: [[DeltaK]] = -990 J.

3. **Dissipation fraction**:
   - The loss proportion results in [[loss_fraction]] = 0.99 (that is, 99 percent).

## Dimensional validation
The velocity obtained [[v1i]] has units of m/s, which is consistent with the analysis of length divided by time. The loss fraction [[loss_fraction]] is a dimensionless number between 0 and 1, which validates its meaning as a proportion. The energy values in Joules (J) are consistent with the scale of a high-velocity projectile impacting a massive object.

## Physical interpretation
The result reveals an extreme asymmetry in energy transfer. Although linear momentum is perfectly conserved (the system "inherits" all the bullet's momentum), 99 percent of the initial mechanical energy has been transformed into heat and internal deformation. This energy has not disappeared from the universe, but has been used entirely to break the wood fibers, generate an intense sound pulse, and, above all, increase the temperature of the block and the bullet due to massive internal friction during penetration. Therefore, the final velocity of 2 m/s, compared with the initial 200 m/s, illustrates how a massive target is able to absorb the impact of a light projectile through a near-total dissipation of its relative kinetic energy, retaining only the minimum necessary for global motion. This demonstrates that in dissipative systems, while the "motion quality" (momentum) survives, the "energy quantity" available for work is severely degraded because of internal non-conservative work.

# Real-world example

## Context
In automotive safety engineering, the design of "crumple zones" seeks to approximate high-energy collisions to the perfectly inelastic model. When a vehicle impacts a deformable barrier, the objective is for the vehicle not to "rebound" (which would double the impulse suffered by the occupants), but to stop or advance together with the barrier, maximizing the dissipation of energy in the metallic structure of the car.

## Physical estimation
Consider a test vehicle of [[m1]] = 1500 kg impacting at 15 m/s (about 54 km/h) against a massive sand barrier of [[m2]] = 3000 kg. When the vehicle gets trapped in the sand (perfectly inelastic collision), the final velocity will be of an **order of magnitude** of 5 m/s. In this process, approximately 112500 Joules of energy are dissipated. A **reasonable value** for the average stopping force if the car stops in 1 meter is about 100 kiloNewtons, energy used to deform the chassis to protect the passenger cabin.

## Interpretation
This example demonstrates that forcing a collision to be perfectly inelastic (avoiding rebound) is a vital safety strategy. By reducing [[vf]] through coupling with a larger mass and dissipating maximum kinetic energy in controlled plastic deformation, sharp accelerations are minimized. The conservation of [[p]] allows us to accurately predict the final state of motion, while the analysis of [[DeltaK]] tells us how much energy the vehicle structure must be able to absorb for the impact to be survivable.

