# Exam-type example

## Problem statement

A rifle with a mass [[m1]] of 5 kg fires a bullet with a mass [[m2]] of 0.01 kg at a muzzle velocity [[v2f]] of 800 m/s. The rifle-plus-bullet system is initially at rest, which implies that both [[v1i]] and [[v2i]] are zero. Calculate: (a) the recoil velocity [[v1f]] of the rifle immediately after the shot; (b) the [[momento_lineal_total]] [[Pinitial]] and [[Pfinal]] of the system. (c) If the bullet then impacts a wooden block with [[masa_individual]] [[m2]] of 2 kg at rest and becomes embedded, calculate the common final velocity [[vf]] of the assembly. Physically interpret the results.

## Data

- Mass of the first body (rifle): [[m1]] of 5 kg
- Mass of the second body (bullet): [[m2]] of 0.01 kg
- Mass of the block (new second body): [[m2]] of 2 kg
- Initial velocities: [[v1i]] and [[v2i]] are zero (0 m/s)
- Final bullet velocity after firing: [[v2f]] of 800 m/s (to the right)

## System Definition

We define the system as the ensemble {rifle + bullet} for the first phase, and {bullet + block} for the second phase. In both stages, the net [[Fext]] is negligible during the very brief interaction instant. Therefore, the [[momento_lineal_total]] of the system [[P]] must be conserved: [[Pinitial]] must equal [[Pfinal]]. This choice of system is fundamental to ignore internal gas expansion forces and impact forces.

## Physical Model

We apply the master conservation principle using the **p** formula. For the firing from rest, we apply the **p**. For the subsequent impact of the bullet with the block, we apply the perfectly inelastic collision formula **p**, which models mass coupling. We will also use the **p** formula to demonstrate that the sum of individual momenta remains constant in any interaction within this leaf.

## Model Justification

The isolated system approximation is physically valid because the interaction [[tiempo]] for both the firing and the collision is extremely short (milliseconds). In this interval, the net impulse of constant external forces like gravity is negligible compared to internal impulses. Therefore, the introduced error is minimal for calculating exit and coupling velocities, allowing for a high-fidelity prediction based on the invariance of linear momentum.

## Symbolic solution

To find the recoil velocity [[v1f]] of the rifle, we apply the **p** derived from total conservation (with [[v1i]] and [[v2i]] at zero):

{{f:cons_principle}}

For the subsequent inelastic collision between the bullet ([[m1]] now representing the bullet) and the block ([[m2]]), we apply the coupling resolution to find the common final velocity [[vf]] using the **p** formula:

{{f:cons_principle}}

Finally, we verify the global balance using the fundamental law **p**:

{{f:cons_principle}}

The isolation condition that validates the model is:

{{f:cond}}

The individual linear momentum of each mass is defined as:

{{f:P}}

## Numerical substitution

**Calculation of the recoil velocity:**
When substituting the values into the **p**, the magnitude of the final rifle velocity [[v1f]] is obtained by multiplying the bullet's [[masa_individual]] by its velocity (0.01 by 800) and dividing the result by the weapon's mass (5). Applying the opposite sign, the final result is -1.6 m/s. The negative sign confirms the recoil.

**Calculation of the inelastic coupling:**
When the bullet (0.01 kg at 800 m/s) hits the block (2 kg at rest), the initial momentum is 8 kg·m/s. The [[masa_total]] of the assembly after impact is 2.01 kg. By dividing the momentum by the total mass using the **p** formula, the common final velocity [[vf]] is approximately 3.98 m/s.

**Verification of total momentum:**
The value of [[Pinitial]] (rifle + bullet) is zero. The value of [[Pfinal]] after the shot (summing 5 times -1.6 and 0.01 times 800) results in zero. For the collision, the total [[DeltaP]] is zero as the initial momentum of 8 kg·m/s remains identical to the final momentum (product of 2.01 and 3.98), confirming strict conservation using **p**.

## Dimensional validation

All resulting magnitudes correspond to velocities, measured in meters per second (m/s). In the calculation of [[v1f]], dividing momentum units by mass units cancels the kilograms and leaves the correct velocity unit. Linear momentum remains in units of kg·m/s in all checks, ensuring the dimensional consistency of the balance throughout both interaction phases.

## Physical interpretation

The result obtained via the **p** indicates that the rifle must recoil to compensate for the bullet's momentum. In the inelastic collision, the application of **p** shows that the [[velocidad_individual]] decreases drastically (from 800 m/s to 3.98 m/s) due to the massive increase in the assembly's inertial mass. This means that [[momento_lineal_individual]] has been redistributed from the small projectile to the entire block, proving that mass is the dominant factor in motion transfer. The calculated values are direct consequences of [[Pinitial]] being equal to [[Pfinal]] at each stage.

# Real-world example

## Context

In aerospace engineering, docking maneuvers represent a critical application. Let's consider a capsule [[m1]] with 2000 kg approaching a cargo module [[m2]] with 3000 kg. The capsule moves at an initial relative [[velocidad_individual]] [[v1i]] of 0.5 m/s, while the module is initially stopped ([[v2i]] is zero). This is a real-world case of the **p** formula, where success depends on predicting the dynamic state after the ships unite.

## Physical estimation

To estimate the behavior after coupling, the resolution is based on the law of conservation of [[momento_lineal_total]]. The initial balance gives us the dynamic budget:

{{f:cons_principle}}

Substituting the data: The initial momentum [[Pinitial]] is the product of 2000 and 0.5, which gives 1000 kg·m/s. The [[masa_total]] joined mass is 5000 kg. By dividing the total momentum by this new inertial mass, the common final velocity [[vf]] turns out to be exactly 0.2 m/s. This quantitative estimation shows how added inertia slows down the original motion without the need for external engines in a short reaction [[tiempo]].

## Interpretation

This quantitative calculation indicates that the resulting system moves 60% slower than the original capsule. Physically, this means that [[momento_lineal_total]] has been "diluted" into the larger mass. For engineers, this value of 0.2 m/s determines the energy that the shock absorbers must dissipate. Applying the **p** formula proves that even if energy degrades, the total [[DeltaP]] is zero and [[Pfinal]] remains a mathematical anchor allowing the system's future to be predicted with absolute certainty in the vacuum of space.



