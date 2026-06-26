# Exam-type example

## Problem statement
A laboratory disk starts at high angular [[theta]] speed and is braked by a pad acting at a known effective radius [[R]]. The statement provides the disk moment of inertia [[I]], the contact normal force [[N_normal]], and the kinetic friction coefficient [[mu_k]] of the pad. The task is to estimate angular-speed evolution over a short window and verify whether energy loss is consistent with passive braking.

The solution cannot be purely algebraic. It must justify why the dry model is reasonable in the first interval, explain the role of R and [[mu_k]] in the dissipative torque, and use rotational-energy formula as the final coherence check.

## Data
Given data: moment of inertia equal to 0.38 kg*m^2, initial [[omega0]] angular speed of 95 rad/s, normal force of 85 N, coefficient [[mu_k]] equal to 0.38, effective radius of 0.20 m, and observation window of 2.5 s. The axis remains fixed and no motor acts during the maneuver.

The sign convention is standard: [[omega]] [[omega]] is positive in the chosen rotation direction and [[tau_roz]] [[tau_roz]] is negative when it opposes motion. Under that convention, a negative [[alpha]] means angular deceleration.

## System definition
The system is defined as a rigid rotor with known inertia and a brake pad whose contact acts at effective radius R. The environment only contributes axis support and the contact mechanism. The main observed variable is [[omega]], while [[alpha]] and [[K_rot]] [[K_rot]] are used for dynamic and energetic diagnosis.

This explicit system definition matters because the model only makes sense if the contact lever arm is identified correctly. If R changed significantly or if the contact were widely distributed in an uncontrolled way, the Coulomb-torque model approximation would stop being clean.

## Physical model
The main model combines rotational dynamics law with Coulomb-torque model. First, the dry dissipative torque is computed from

{{f:dinamica_rotacional}}

and then angular acceleration [[alpha]] follows from

{{f:energia_rotacional}}

For energetic control, use rotational-energy formula:

{{f:energia_rotacional}}

## Model justification
The dry model is justified because the statement explicitly provides [[mu_k]], [[N_normal]], and R, which are the core quantities of Coulomb-torque model. The time [[t]] window is also short and the goal is local braking estimation. There is no need to introduce exponential-decay law in this first exercise because a dominant viscous term is not the main assumption here.

There is also a clear internal check. If [[mu_k]] [[N_normal]] R gives a large braking torque but [[K_rot]] does not decrease, the solution would contradict the physical meaning of friction itself. That is why rotational-energy formula is not an extra step. It is the coherence test that confirms whether model and torque sign tell the same story.

## Symbolic solution
Step 1. Compute dissipative torque with Coulomb-torque model:

{{f:dinamica_rotacional}}

Step 2. Substitute that torque into rotational dynamics law:

{{f:dinamica_rotacional}}

Step 3. Estimate final angular speed in the short window using the local approximation

{{f:energia_rotacional}}

Step 4. Compute rotational-energy formula at the beginning and at the end:

{{f:energia_rotacional}}

Step 5. Compare signs and trends. In passive braking, [[omega]] must decrease and [[K_rot]] must decrease as well.

As a resolution contrast, if the interval were viscous instead of dry, the starting law would be viscous-torque model,

{{f:torque_viscoso}}

and the time evolution of [[omega]] would no longer be linear but should be compared against exponential-decay law.

## Numerical substitution
With the given data, the dry torque is

{{f:torque_coulomb}}

Then

{{f:energia_rotacional}}

The angular speed at the end of the interval is

{{f:energia_rotacional}}

Initial rotational-energy formula is

{{f:energia_rotacional}}

and the final value is

{{f:energia_rotacional}}

## Dimensional validation
In Coulomb-torque model, [[mu_k]] is dimensionless, [[N_normal]] contributes N, and R contributes m, so the result has units of N*m. In rotational dynamics law, dividing N*m by kg*m^2 gives rad/s^2, consistent with [[alpha]]. In rotational-energy formula, I multiplied by [[omega]] squared gives joule.

This dimensional review is not empty formalism. If a student forgot R or used [[omega]] in rpm inside rotational-energy formula, the calculation might still look tidy while no longer representing the real braking process.

## Physical interpretation
The result describes strong braking clearly consistent with an appreciable dry contact. The explicit presence of R and [[mu_k]] shows that the model depends on both material interaction and brake geometry. The drop in [[omega]] and the large decrease in [[K_rot]] tell a coherent physical story: the pad extracts mechanical energy from the rotor through a torque opposite to rotation.

The conclusion must remain local. If temperature changes or the material degrades, [[mu_k]] may change and the same Coulomb-torque model law may stop representing the process over a longer interval. But for the given window, the model is well anchored to the leaf.

# Real-world example

## Context
In a packaging line, a drive roller shows an anomalous stop profile. The [[omega]] record displays a steep initial decay and a softer middle section. The maintenance team suspects that part of the loss comes from degraded lubricant and part from a seal rubbing near the shaft edge.

There is a geometric estimate for the possible dry contact with an effective radius near 0.045 m and a plausible [[mu_k]] range from 0.18 to 0.30 if the seal is actually dragging. The time evolution of [[omega]] was also recorded, which allows comparison between the dry model based on Coulomb-torque model and the viscous model based on viscous-torque model and exponential-decay law.

## Physical estimation
In a high-speed segment, [[omega]] drops from 140 rad/s to 90 rad/s over 3 s with an effective inertia of 0.62 kg*m^2. The mean angular acceleration is

{{f:torque_viscoso}}

which implies a mean net torque near

{{f:torque_coulomb}}

If the full braking were attributed to dry contact acting near a 0.045 m radius with normal force around 900 N, the required [[mu_k]] would be

{{f:torque_viscoso}}

That value is not impossible, but it implies sustained contact. In parallel, the alternative resolution of the high-speed interval explicitly uses viscous-torque model, namely the law

{{f:torque_viscoso}}

, and yields [[b_rot]] [[b_rot]] of order 0.07 N*m*s with a temporal shape compatible with exponential-decay law. Quantitatively, this is strong evidence that the high-speed decay is not random noise: it matches the order of magnitude expected for a viscous contribution.

## Interpretation
The most robust reading is mixed. In the high-speed region, the shape of [[omega]] and the exponential-decay law fit support an important viscous contribution. Near stop, a systematic residual appears that the viscous model cannot absorb well and that is compatible with an additional dry-contact term. In technical terms, the system does not seem to be governed by one mechanism over the entire maneuver.

The recommended action is staged. First, replace lubricant and repeat the test to see whether [[b_rot]] decreases. Second, inspect the seal and its effective radius R to verify whether dry dragging exists with [[mu_k]] inside the plausible range. Third, keep checking rotational-energy formula in each window because an acceptable model must continue to show energy loss consistent with passive braking.

This example matters because it connects calculation and decision. Omega acts as the temporal fingerprint of the event, R and [[mu_k]] bound the plausibility of dry contact, and rotational-energy formula closes the coherence of the diagnosis. That integration is precisely what validates this leaf as "worked examples" rather than a list of isolated computations.

