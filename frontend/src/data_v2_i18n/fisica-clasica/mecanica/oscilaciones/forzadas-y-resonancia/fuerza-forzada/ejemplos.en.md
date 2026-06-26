# Exam-type example

## Problem statement

A linear oscillator has [[m]] = 1.0 kg, [[k]] = 100 N/m, and [[b]] = 2.0 N*s/m. A sinusoidal force of amplitude [[F0]] = 10 N is applied with angular frequency [[omega_f]] = 8 rad/s. Compute the steady amplitude [[X]], the phase lag [[delta]], and the expression for [[x]] in permanent regime, with [[t]] measured in seconds.

## Data

The data are [[m]], [[k]], [[b]], [[F0]], and [[omega_f]]. The unknowns are [[X]], [[delta]], and the signal [[x]]. The quantities [[x_d]] and [[x_dd]] are not computed directly, but they explain why damping and inertia appear in the model equation.

## System definition

The system is treated as a linear mass-spring-damper oscillator. The external force is maintained for enough cycles to analyze steady state rather than the initial transient.

## Physical model

The physical model is linear forced oscillation. The source imposes [[omega_f]], while the system responds with amplitude [[X]] and lag [[delta]]. The resonant maximum is not being searched yet; the response is computed for this specific frequency.

## Model justification

It is assumed that [[m]], [[k]], and [[b]] are constant, that the force is sinusoidal, and that the resulting amplitude does not activate stops or stiffness changes. Under these hypotheses, the steady response is obtained by separating amplitude, phase, and time signal.

## Symbolic solution

The starting dynamic balance is:

{{f:ecuacion_diferencial_forzada}}

The steady amplitude is computed with:

{{f:amplitud_forzada}}

The phase lag is computed with:

{{f:desfase_forzada}}

The steady time response is:

{{f:respuesta_estacionaria}}

## Numerical substitution

The elastic-minus-inertial term is 100 - 1.0·8^2 = 36 N/m. The equivalent dissipative term is 2.0·8 = 16 N/m. The dynamic denominator is sqrt(36^2 + 16^2) = sqrt(1552) ≈ 39.4 N/m. Therefore, [[X]] = 10/39.4 ≈ 0.254 m.

The phase lag satisfies [[delta]] = atan(16/36) ≈ 0.418 rad. The steady response can be written as [[x]] = 0.254 cos(8[[t]] - 0.418), with a dimensionless argument and [[t]] in seconds.

## Dimensional validation

The denominator of [[X]] has units of N/m, so [[F0]] divided by it gives meters. The quotient used for [[delta]] is dimensionless. In the time response, [[omega_f]][[t]] and [[delta]] are angles in radians.

## Physical interpretation

The system responds at the imposed frequency, not at a free frequency. The amplitude 0.254 m is large compared with the static deformation [[F0]]/[[k]] = 0.10 m because the chosen frequency reduces effective dynamic opposition. The phase lag indicates that the response does not follow the force exactly: it is delayed by inertia and damping.

This result does not prove resonance by itself. It only states that, at 8 rad/s, the steady response has this amplitude and phase lag. To discuss resonance, [[X]] must be compared while varying [[omega_f]].

The physical sign of the calculation is worth checking. The elastic part tries to restore equilibrium, the inertial part opposes changes in motion, and the dissipative part removes energy during each cycle. The amplitude is relatively large because effective elastic opposition has been reduced by the inertial contribution, while damping still prevents an uncontrolled response.

The phase lag is also dynamic information, not just an angle to insert in the final expression. If force and displacement are observed on a data record, the maxima of [[x]] should appear after the maxima of the force. That delay tests the model: matching [[X]] alone is not sufficient if the measured phase is incompatible.

# Real-world example

## Context

An electric motor transmits a periodic force to a base frame. The engineer wants to know whether, at operating speed, the frame will vibrate with acceptable amplitude and whether response lag can affect the mounting.

## Physical estimation

The maximum periodic force is measured, and the angular speed is estimated. A stiffness test gives [[k]], effective mass gives [[m]], and a decay test approximates [[b]]. Substituting those values into forced response gives [[X]] at the operating frequency, not at every possible frequency.

## Interpretation

If [[X]] exceeds geometric tolerance, one may reduce [[F0]], increase stiffness, change effective mass, or modify damping. If the main issue is [[delta]], it may affect synchronization, fatigue, or sensor readings. The decision is made from the specific steady response before studying whether a nearby resonant maximum exists.

The practical reading does not end with a number in meters. If the base works near sensitive equipment, an acceptable amplitude can still create noise, fatigue, or coupling with adjacent components. The result must therefore become an engineering decision: change operating speed, modify supports, measure again after transients decay, or plan a frequency sweep if a nearby peak is suspected.

A good report should state explicitly that the calculation belongs to one operating frequency. It should also record whether the machine was already in steady state when the values were taken, because that condition decides whether the computed response can be compared with the measurement.
