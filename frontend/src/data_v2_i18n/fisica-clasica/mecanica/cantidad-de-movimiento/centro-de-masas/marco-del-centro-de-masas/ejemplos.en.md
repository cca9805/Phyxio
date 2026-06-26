# Exam-type example

## Problem statement
In a high-energy nuclear physics laboratory, two helium nuclei with identical masses [[m1]] and [[m2]] (of 2.0 u each) are prepared for a head-on elastic collision. In the laboratory reference system, particle 1 travels with a measured initial velocity [[v1]] (of 3500 m/s) to the right. Simultaneously, particle 2 moves in the opposite direction with a velocity [[v2]] (of -1500 m/s) to the left. The student is requested to perform a complete kinematic analysis of the system before impact, precisely determining the center-of-mass velocity [[vcm]], the relative velocities in the zero-momentum frame denoted as [[u_i]], and the kinetic energies involved [[K_lab]] and [[K_cm]]. Finally, the consistency of the total linear momentum [[ptot]] and the validity of the model must be verified through the application of Konig's Theorem and the calculation of the reduced mass [[mu]].

## Data
- Mass of particle 1 (helium nucleus): [[m1]] (2 u).
- Mass of particle 2 (helium nucleus): [[m2]] (2 u).
- Velocity of particle 1 in the laboratory: [[v1]] (3500 m/s).
- Velocity of particle 2 in the laboratory: [[v2]] (-1500 m/s).
- Total mass of the particle system: [[M]] (4 u).
- Atomic mass constant: 1 u, approximately `1.66 × 10⁻²⁷` kg.

## System definition
The physical system consists of the set of two massive particles in mutual interaction. It is defined as an isolated system, given that no net external forces act, which guarantees that the total linear momentum [[ptot]] remains constant over time. The objective is to place the observer at the center of mass to simplify the description of the collision, transforming an asymmetrical problem in the laboratory into a perfectly symmetrical one in the zero-momentum frame. This change of perspective allows focusing on internal agitation and local conservation laws.

## Physical model
The point particle model under Galilean kinematics is adopted, since the observed velocities are negligible compared to the speed of light in a vacuum. The center of mass is modeled as a point moving with a constant velocity [[vcm]] that defines the origin of the CM frame. To characterize the relative inertia of the system, we will introduce the concept of reduced mass [[mu]]. The energy analysis will be based on **Konig's First Theorem**, which allows separating the translation energy of the system from its internal kinetic energy [[K_cm]], which is intrinsically linked to the relative velocity [[v_rel]] through a quadratic relationship.

## Model justification
The justification for employing the center-of-mass frame is physically explicit: **because** by subtracting the velocity [[vcm]] from individual velocities, we eliminate the global motion of the system. **We assume** that the system is inertial and **we consider** that any internal force (such as electromagnetic repulsion between nuclei) does not alter the barycenter's trajectory. This **model** is **valid** for elastic collisions where the internal structure of the nuclei is **neglected**, treating them as **ideal** masses. The constant speed of the CM is a direct consequence of the absence of external **friction** or non-uniform force fields, allowing the analysis to be mathematically **ideal** and pedagogically transparent. Being a system of equal masses, the symmetry is maximal, and the calculation is robust against small perturbations.

## Symbolic solution
The logical calculation sequence for the kinematic resolution is as follows:
1. **Total inertia**: First, we establish the total mass of the system [[M]] through the sum relation:

{{f:M_sum}}

where the sum of masses results in 4 u.
2. **Drift velocity**: We find the center-of-mass velocity [[vcm]] by applying the fundamental expression:

{{f:vcm_formula}}

3. **Frame change**: We determine the internal velocities [[u_i]] relative to the barycenter by applying the Galilean transformation:

{{f:velocity_transformation}}

4. **Balance verification**: We confirm that the momentum in the CM frame is zero through the balance condition:

{{f:u_balance}}

5. **Relative parameters**: We calculate the reduced mass [[mu]] using the formula:

{{f:reduced_mass_formula}}

and the relative velocity [[v_rel]] as the difference between laboratory velocities:

{{f:relative_velocity}}

6. **Energy balance**: We evaluate the internal kinetic energy [[K_cm]] through the reduced form:

{{f:internal_energy_reduced}}

and compute the total laboratory energy [[K_lab]] by direct summation before validating it with Konig's Theorem:

{{f:lab_kinetic_energy}}


{{f:konig_energy}}

7. **Final consistency**: We confirm the total laboratory momentum [[ptot]] first using the particle sum:

{{f:total_momentum_sum}}

and then using the macroscopic relation:

{{f:total_momentum_vcm}}

## Numerical substitution
1. **Total mass**: [[M]] (4 u).

{{f:M_sum}}

2. **CM Velocity**: [[vcm]] (1000 m/s).

{{f:vcm_formula}}

3. **Internal velocities** [[u_i]]:
   - Particle 1: *u1* of 3500 - 1000, resulting in 2500 m/s.

{{f:velocity_transformation}}

   - Particle 2: *u2* of -1500 - 1000, resulting in -2500 m/s.

{{f:velocity_transformation}}

   *(The balance:*

{{f:u_balance}}

*is fulfilled)*.
4. **Reduced mass**: [[mu]] (1 u).

{{f:reduced_mass_formula}}

5. **Relative velocity**: [[v_rel]] of 5000 m/s.

{{f:relative_velocity}}

6. **Translation energy**: [[K_trans]] of 2.0 x `10⁶` units.

{{f:K_trans}}

7. **Internal energy**: [[K_cm]] of 12.5 x `10⁶` units.

{{f:internal_energy_reduced}}

8. **Total energy**: [[K_lab]] of 14.5 x `10⁶` units.

{{f:lab_kinetic_energy}}

{{f:konig_energy}}

## Dimensional validation

- The center-of-mass velocity [[vcm]] has dimensions of `[L T⁻¹]`, consistent with the momentum/mass ratio.
- The internal kinetic energy [[K_cm]] yields units of `[M L² T⁻²]` by multiplying mass by velocity squared.

Konig's Theorem:

{{f:konig_energy}}

is dimensionally homogeneous, allowing the addition of internal energy and CM translation energy without unit conflict.

## Physical interpretation
The interpretation of these results reveals that the system has a total energy in the laboratory of 14.5 x `10⁶` units, but of that total, only 12.5 x `10⁶` correspond to the internal kinetic energy [[K_cm]]. This means that 86% of the energy is available for real interaction between particles, while the rest is "trapped" in the global translation of the center of mass.

In the zero-momentum frame, the particles approach each other with identical speeds (2500 m/s) but in opposite directions, indicating perfect symmetry that greatly simplifies the analysis of the elastic collision. Therefore, the use of magnitudes such as reduced mass [[mu]] is not a mere artifice, but a physical reading of how the system sees itself, regardless of the velocity [[vcm]] with which the laboratory sees it pass. The consistency between the following laws reinforces the validity of the applied classical model:

{{f:konig_energy}}

{{f:internal_energy_reduced}}

# Real-world example

## Context
In cutting-edge particle accelerators, such as CERN, the distinction between laboratory energy and center-of-mass energy is critical. An efficient design seeks to ensure that all magnet energy is converted into internal energy [[K_cm]] to allow for the creation of new massive particles (Higgs Boson, etc.).

## Physical estimation
Let's consider a "fixed target" experiment versus a "head-on collider." In a fixed target, a particle with high linear momentum hits a stationary mass. Much of the impact energy is spent on "pushing" the system forward to conserve total momentum [[ptot]].

If we perform a quantitative estimation, we observe that to double the internal energy [[K_cm]] in a fixed target, laboratory energy [[K_lab]] would need to be increased non-linearly (quadratically in the relativistic limit). In contrast, when using a head-on collider with opposite momenta, the velocity [[vcm]] is zero, and every Joule provided is directly converted into internal agitation energy. This efficiency is what allows colliders of a few kilometers to exceed the discovery capacity of fixed targets that would require the size of a continent.

## Interpretation
The center-of-mass frame is the compass of experimental physics. By minimizing [[vcm]], we maximize the fraction of energy that becomes "useful" for science. The relationship established by reduced mass [[mu]] and relative velocity [[v_rel]] tells us that the universe prefers symmetry: in the heart of the center of mass, physics is purer, calculations simpler, and energy more fertile. This lesson in natural economy is what makes the CM frame indispensable in 21st-century engineering.

