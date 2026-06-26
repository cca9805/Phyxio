# Exam-type example

## Problem statement

An ideal simple harmonic oscillator has amplitude [[A]] of 0.03 m, angular frequency [[omega]] of 15 rad/s, and initial phase [[phi]] of 0.4 rad. The task is to study the system state at time [[t]] equal to 0.12 s. The goal is not merely to produce an angular value, but to reconstruct instantaneous state from phase and decide what that state says about [[x]] and [[v]].

## Data

The relevant data are [[A]], [[omega]], [[phi]], and [[t]]. Motion is assumed to remain sinusoidal, amplitude is assumed stable, and the temporal reference is fixed by the statement. The reading is explicitly placed inside the ideal SHM model, so phase can be interpreted as the cycle organizer rather than as a detached number.

## System definition

The system is an ideal one-coordinate simple harmonic oscillator. This means its instantaneous state may be summarized by an angular variable [[phi_t]] and then projected onto spatial coordinate [[x]] and velocity [[v]]. The problem does not ask for energy or external forces; it asks for a correct reading of cycle state at one given instant.

## Physical model

The physical model of this leaf treats phase as the variable locating the system inside the cycle. From it, one may obtain both position and velocity compatible with that state. In this example, [[omega]] sets cycle rate, [[phi]] sets the starting offset, and [[A]] sets the spatial scale. This is explicitly anchored to the leaf because the point is not only to calculate motion, but to interpret how one angular variable organizes oscillatory state.

## Model justification

The model is appropriate because the statement describes ideal SHM, with stable amplitude and stable angular frequency. Under those conditions, instantaneous phase is a physically valid tool for identifying which region of the cycle the system occupies. If [[omega]] were drifting appreciably or if the signal were dominantly damped, a simple phase reading would lose robustness and a different model would be required. That is not the case here, so the phase approach is coherent and sufficient.

## Symbolic solution

First, determine the instantaneous angular state:

{{f:fase_instante}}

Then project that state onto the spatial coordinate:

{{f:posicion_con_fase}}

Finally, project the same state onto instantaneous velocity:

{{f:velocidad_con_fase}}

To compare two oscillators in the same regime under a common reference, one also uses:

{{f:desfase_entre_osciladores}}

## Numerical substitution

After substitution, instantaneous phase lies around 2.2 rad. That already gives a first reading: the system has progressed through a substantial portion of the cycle and is no longer near the initial temporal condition. When this state is projected onto [[x]], the result is a small negative displacement relative to maximum amplitude, which is compatible with a cycle point located on the opposite spatial side from the starting condition. When projected onto [[v]], velocity is also negative, meaning that the oscillator is not only at a particular position, but is moving in a specific direction within the cycle.

The important part of this substitution is not only the number itself. It is the consistency among the three readings. [[phi_t]] locates the state, [[x]] projects it onto the spatial axis, and [[v]] clarifies motion direction. If any of those pieces contradicted the others, the problem would lie in the data, the units, or the model assumptions rather than in the concept of phase.

## Dimensional validation

Dimensional validation must check that [[phi_t]] and [[phi]] are read in radians, that [[omega]] is in radians per second, and that [[t]] is in seconds. It must also confirm that [[x]] comes out in meters and [[v]] in meters per second. This is essential because mixing hertz with [[omega]] or shifting the temporal reference without saying so changes the whole interpretation.

An additional range check is also required. The value of [[x]] cannot exceed [[A]] in magnitude, and the scale of [[v]] must remain compatible with the product of amplitude and angular frequency. In this case, the obtained values remain consistent with both restrictions, so the result is not only algebraically correct but physically plausible.

## Physical interpretation

The correct physical interpretation does more than saying that instantaneous phase is approximately 2.2 rad. What matters is that this value places the oscillator in a region of the cycle where position is already negative and velocity also points toward the negative side. This means the system is not merely at one point; it is actively traversing a specific portion of the temporal pattern. Phase therefore fulfills its main role by turning one instant into a structured reading of the cycle.

It also shows why position alone would have been insufficient. Knowing only the sign of [[x]] would not clarify whether the oscillator has just left a turning point or is approaching one. The combination of [[phi_t]], [[x]], and [[v]] does. That is precisely the conceptual advantage of this leaf.

# Real-world example

## Context

In an educational vibration bench, two oscillators with the same nominal angular frequency are recorded. The laboratory objective is to decide whether they are approximately synchronized or whether one has a significant angular lead over the other. For this reason, [[phi1]] is known to be 0.2 rad and [[phi2]] is known to be 1.1 rad, together with a common [[omega]] in the working regime. The point is not only subtracting angles, but interpreting whether the relative offset has observable consequences in signal comparison.

## Physical estimation

The main estimate uses relative phase difference [[delta_phi]] between both states. The angular difference is of order 0.9 rad, which is not negligible when compared with a full cycle. Physically, this means the second oscillator occupies a cycle region clearly ahead of the first. If angular frequency is 15 rad/s, that angular difference corresponds to a temporal separation on the order of a few hundredths of a second. No extra formula is needed to extract the relevant conclusion: the signals are not synchronized, and the offset is large enough to become visible in a well-resolved temporal record.

This estimate also teaches something important about convention. The sign of the result depends on the order used to compare [[phi2]] and [[phi1]], so the physical interpretation is valid only if temporal reference and subtraction convention remain stable throughout the experiment.

## Interpretation

The real-world application shows that phase is not formal luxury, but a diagnostic tool. A phase difference of the observed order indicates that two systems that may look very similar in amplitude or frequency can still occupy different cycle states at the same instant. That affects how measurements are compared, how signals are aligned, and how synchronization is interpreted in an experimental setup.

Therefore, the correct conclusion is not merely that the second oscillator has a larger phase. The useful conclusion is that it leads in a physically significant way under the adopted convention, and that this lead can be translated into a measurable temporal shift. This means phase reading offers information that neither [[x]] nor [[A]] alone would provide with equal clarity.