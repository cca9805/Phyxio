# Exam-type example

## Problem statement
In a professional billiard tournament, a player shoots the cue ball [[m1]] of 0.17 kg at a speed of [[v1i]] = 3.0 m/s towards a colored ball [[m2]] of equal mass resting on the cloth. The impact is off-center, causing the cue ball to deflect by an angle [[theta1]] = 30° from its original trajectory. Assuming the collision is perfectly elastic and neglecting friction and rotation during the very brief instant of the crash, determine the final speeds of both balls [[v1f]] and [[v2f]], and the target's exit angle [[theta2]]. Also calculate the initial energy [[Ki]] and the final energy [[Kf]] to verify the elasticity of the process.

## Data
- Projectile mass: [[m1]] = 0.17 kg
- Target mass: [[m2]] = 0.17 kg (identical masses for standard billiards)
- Initial incident speed: [[v1i]] = 3.0 m/s
- Measured deflection angle: [[theta1]] = 30°
- Collision nature: Elastic (no kinetic energy loss)

## System definition
The physical system consists of two spherical rigid bodies (simplified as point particles for the momentum balance) interacting in a two-dimensional (2D) horizontal plane. We define a Cartesian coordinate system where the positive X-axis coincides with the direction of the initial velocity [[v1i]]. The target [[m2]] is initially at the coordinate origin (0,0). After the impact, projectile [[m1]] moves with a positive angle [[theta1]], while target [[m2]] is projected with an angle [[theta2]] that must be negative in vector terms, although we will work with its magnitude for trigonometric projections.

## Physical model
We use the **2D angular scattering model** based on the vectorial conservation of linear momentum [[p]]. This model decomposes the dynamic balance into two independent dimensions: the incident axis (X) and the lateral axis (Y). In an elastic collision between equal masses, the model predicts a specific geometric distribution where the exit trajectories must be orthogonal. We ignore friction effects with the cloth and the balls' own rotation (spin) to focus exclusively on the translational impulse exchange between [[m1]] and [[m2]].

## Model justification
The application of this model is mandatory because the collision is not frontal (1D), but presents an angular deviation [[theta1]]. The conservation of [[p]] is the most robust law in this scenario since the internal impulsive forces during the millisecond of impact exceed dissipative external forces by several orders of magnitude. The assumption of elasticity is an excellent approximation for high-quality phenolic resin balls, allowing us to link the final speeds [[v1f]] and [[v2f]] with the initial energy state [[Ki]] in a closed and deterministic way using the fundamental balances.

## Symbolic solution
First, we establish the linear momentum balances for each axis:

{{f:p_x_balance}}

{{f:p_y_balance}}

Since the masses are equal, they cancel out in all expressions. From the Y-balance, we obtain a direct relationship between the final speeds:
[[v1f]] * sin([[theta1]]) = [[v2f]] * sin([[theta2]])

For an elastic collision of equal masses, we know structurally that:

{{f:theta_sum}}

[[theta_total]] = 90°
[[theta2]] = 90° - [[theta1]]

Finally, kinetic energy conservation gives us the closing equation:

{{f:k_balance_elastic}}

## Numerical substitution

### 1. Calculating angles and speeds
Substituting the value of [[theta1]] = 30°:
[[theta2]] = 90° - 30° = 60°

We use the lateral momentum balance to find the velocity ratio:
[[v1f]] * sin(30°) = [[v2f]] * sin(60°)
[[v1f]] * 0.5 = [[v2f]] * 0.866
[[v1f]] = 1.732 * [[v2f]]

Substituting into the kinetic energy equation:
(3.0)^2 = (1.732 * [[v2f]])^2 + [[v2f]]^2
9.0 = 4.0 * [[v2f]]^2
[[v2f]]^2 = 2.25 => [[v2f]] = 1.5 m/s

We calculate the projectile's speed:
[[v1f]] = 1.732 * 1.5 = 2.6 m/s (approximately)

### 2. Energy verification
We calculate the initial and final states:

{{f:k_initial}}

[[Ki]] = 0.5 * 0.17 * (3.0)^2 = 0.765 J

{{f:k_final}}

[[Kf]] = 0.5 * 0.17 * (2.6)^2 + 0.5 * 0.17 * (1.5)^2
It is verified that [[Ki]] = [[Kf]], validating the elastic model.

## Dimensional validation
The linear momentum balance in the incident axis has dimensions of mass times velocity (M L T-1), resulting in kg·m/s in both members. Trigonometric functions are dimensionless, so they do not affect the dimensional analysis of the projections. The energy balance uses the square of the velocity (L2 T-2), which after multiplying by the mass results in Joules (M L2 T-2), the standard unit of mechanical energy. The consistency is absolute across all derivations involving [[v1f]] and [[v2f]].

## Physical interpretation
The physical interpretation of these results reveals the rigid coupling between geometry and dynamics. Because the incident ball [[m1]] was deflected by 30°, it was forced to "give up" some of its forward momentum to create a lateral impulse. This lateral impulse must be exactly cancelled by the target ball [[m2]] moving at a 60° angle. The fact that the sum of these angles [[theta_total]] is exactly 90° is not a coincidence, but a structural property of elastic collisions between identical masses. Physically, this means that the energy and momentum are redistributed in such a way that the final velocity vectors are orthogonal, a signature of the conservation laws in a 2D Euclidean space.

# Real-world example

## Context
In **low-energy nuclear physics**, the scattering of alpha particles (helium nuclei) is used to study the composition of thin material foils. Although at the microscopic level the forces are electrostatic repulsion (Coulomb's law), the macroscopic balance of particle detectors is governed by the same laws of linear momentum conservation in 2D that we applied to billiard balls. In this context, measuring the angle [[theta1]] of a scattered alpha particle allows us to deduce whether it has collided with a light or heavy nucleus.

## Physical estimation
Consider an alpha projectile ([[m1]] ~ 4 u) incident on a carbon nucleus ([[m2]] ~ 12 u). If the detector records a deviation of [[theta1]] = 45°, we can perform an **order of magnitude** estimation. Since the target is three times heavier, the carbon nucleus will absorb less speed than in the case of equal masses. A **reasonable value** for the projectile's final speed [[v1f]] would be approximately 80% of [[v1i]], while the target would barely move with a small angle [[theta2]]. The kinetic energy transfer is lower when there is a large mass mismatch, explaining why light particles "bounce" easily off heavy nuclei without losing much energy.

## Interpretation
The physical interpretation of this nuclear scattering experiment demonstrates how conservation laws act as a microscopic "measuring tape." By simply observing the exit angle [[theta1]] and the remaining speed [[v1f]], physicists can calculate the mass of the target nucleus without ever seeing it. This causal relationship—where the mass ratio determines the scattering geometry—was what allowed Rutherford to discover the atomic nucleus. The angle [[theta_total]] is not just a spatial measurement, but a direct indicator of the internal inertia of matter. Thus, the 2D scattering model is the bridge between visible trajectories and the hidden structural properties of the subatomic world.

