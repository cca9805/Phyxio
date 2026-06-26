# Exam-type example

## Problem statement

A harmonic wave propagates along a string. In a description compatible with the positive direction of [[x]], the wavenumber is 4.0 rad/m, the angular frequency is 12 rad/s, and the initial phase is 0.30 rad. Compare the oscillation state at a point located 0.80 m from the origin at 0.20 s with the origin at the initial instant. Determine the phase of the reading, the phase difference from the origin, and the phase speed.

## Data

Wavenumber [[k]]: 4.0 rad/m.

Angular frequency [[omega]]: 12 rad/s.

Initial phase [[phi0]]: 0.30 rad.

Position [[x]]: 0.80 m.

Time [[t]]: 0.20 s.

## System definition

The system is a harmonic component of a transverse wave on an ideal string. The reading is made at one point and one instant, so [[phi]] identifies the state of the cycle. The spatial and temporal origin is used as the reference for interpreting [[Delta_phi]].

## Physical model

The model assumes a well-defined harmonic phase. The quantity [[k]] translates spatial separation into phase advance, [[omega]] translates temporal separation into phase advance, [[phi0]] fixes the internal origin of the cycle, [[Delta_phi]] compares readings, and [[v_phi]] indicates how far the same phase advances per unit time.

## Model justification

The string is treated as a uniform medium during the observation. The harmonic shape allows one phase to describe the oscillation state. The physical causality is that the wave preserves a repeating pattern: advancing in space or time does not create a different oscillation, but moves through the same cycle.

## Symbolic solution

For the phase of the reading, use:

{{f:fase_armonica}}

To compare two readings of the same wave, use:

{{f:diferencia_fase}}

For the speed of a constant phase, use:

{{f:velocidad_fase_phi}}

The absolute phase [[phi]] includes [[phi0]]. The phase difference [[Delta_phi]] between the reading and the origin removes the common initial phase if both readings share the same reference. The speed [[v_phi]] depends on [[omega]] and [[k]], not on amplitude.

## Numerical substitution

For the phase, multiplying 4.0 rad/m by 0.80 m contributes 3.2 rad. Multiplying 12 rad/s by 0.20 s contributes 2.4 rad. Combining the spatial contribution, subtracting the temporal contribution, and adding 0.30 rad gives a phase of about 1.1 rad.

For the phase difference from the origin at the initial instant, the common contribution of [[phi0]] does not change the comparison. The spatial contribution of 3.2 rad and the temporal contribution of 2.4 rad leave a phase separation of about 0.80 rad.

For phase speed, dividing 12 rad/s by 4.0 rad/m gives about 3.0 m/s. Therefore [[v_phi]] is of the order of a slow propagation speed, reasonable for a laboratory string.

## Dimensional validation

Phase is dimensionless: rad/m multiplied by m leaves an angular cycle reading, and rad/s multiplied by s also leaves an angular reading. The final dimension of [[phi]] is `[1]`.

The phase difference [[Delta_phi]] compares two cycle readings, so it also has dimension `[1]`.

In phase speed, rad/s divided by rad/m leaves metres per second. The dimension of [[v_phi]] is `[L T⁻¹]`.

## Physical interpretation

A phase near 1.1 rad means that the reading lies in the first part of the cycle after the chosen origin. It is not enough to say that the number is positive: physically, the point is advanced within the oscillation relative to the zero-phase state, but it has not reached half a turn.

The phase difference of 0.80 rad from the origin means that the two readings are not in phase, but they are not opposite either. If they were observed simultaneously as signals, they would tend to reinforce partially, not maximally. If [[k]] increased while the other data stayed fixed, the same spatial separation would produce more phase difference; if [[omega]] increased, the passage of time would subtract more phase in this convention.

The phase speed of 3.0 m/s does not describe the vertical speed of a point on the string. It describes the speed at which a cycle label, such as a crest, advances. This distinction avoids confusing wave propagation with local material motion.

# Real-world example

## Context

Two loudspeakers emit the same tone and a microphone receives the signals with a small path difference. If the phase difference between arrivals approaches half a turn, the sound can weaken at that position; if it approaches a full turn, it can strengthen.

## Physical estimation

For a 500 Hz tone, the angular frequency is of order 3000 rad/s. In air, a phase speed around 340 m/s gives a wavenumber of order 9 rad/m. A path difference of 0.17 m produces a spatial phase difference of order 1.5 rad, close to a large quarter turn but still far from exact opposition.

## Interpretation

The estimate shows that centimetres or decimetres can matter in audible acoustics. Phase converts a small geometric difference into a state difference within the cycle. That is why moving a microphone or a chair can perceptibly change the strengthening or weakening of some notes.

The real reading does not require precise knowledge of the initial amplitude. What matters for this question is [[Delta_phi]]: if the signals arrive almost together, they add effectively; if they arrive almost opposite, they partially cancel. Phase is the bridge between distance, time, and sound perception.
