# Exam-type example

## Problem statement

A mass-spring oscillator is initially displaced with amplitude [[A]] = 0.050 m. Its natural angular frequency is [[omega0]] = 12 rad/s and its damping rate is [[gamma]] = 3 s^-1. For initial phase [[phi]] = 0, compute the damped angular frequency [[omega_d]], the envelope [[x_env]], and the position [[x]] at [[t]] = 0.50 s.

## Data

The data are [[A]] = 0.050 m, [[omega0]] = 12 rad/s, [[gamma]] = 3 s^-1, [[phi]] = 0 rad, and [[t]] = 0.50 s. The regime must be classified first because the cosine solution only makes sense if oscillation still exists.

## System definition

The system is a free linear oscillator moving around an equilibrium position. The variable [[x]] measures instantaneous displacement, and the envelope [[x_env]] measures the maximum possible amplitude at that instant.

## Physical model

The underdamped regime is used because this leaf requires comparing [[gamma]] with [[omega0]]. If [[gamma]] is smaller than [[omega0]], the response keeps equilibrium crossings and a visible frequency [[omega_d]], but its amplitude is reduced by an exponential envelope.

## Model justification

The five-centimeter amplitude is assumed small compared with the spring linear range. Damping is also assumed viscous and constant, with no dry friction or periodic external force. Under those conditions, energy loss can be represented by [[gamma]] and the oscillatory part by [[omega_d]].

## Symbolic solution

First the regime is classified:

{{f:condicion_subamortiguado}}

Then the visible angular frequency is computed:

{{f:pulsacion_amortiguada}}

The available amplitude at the instant is obtained with:

{{f:envolvente}}

Finally, the instantaneous position is computed with:

{{f:solucion_subamortiguada}}

## Numerical substitution

Since 3 s^-1 < 12 rad/s, the regime is underdamped. The damped angular frequency is [[omega_d]] = sqrt(12^2 - 3^2) = sqrt(135) = 11.62 rad/s. The envelope at 0.50 s is [[x_env]] = 0.050 exp(-3·0.50) = 0.050 exp(-1.5) ≈ 0.0112 m.

The position is obtained by multiplying that envelope by the cosine of the angular argument. The argument is 11.62·0.50 + 0 = 5.81 rad. Therefore, [[x]] ≈ 0.0112 cos(5.81) ≈ 0.00996 m. The position remains inside the envelope, as required.

## Dimensional validation

[[gamma]][[t]] is dimensionless because it combines s^-1 with s. [[omega_d]][[t]] is also dimensionless. [[A]], [[x_env]], and [[x]] are expressed in meters. The root defining [[omega_d]] combines inverse-time squared quantities and returns an inverse-time quantity.

## Physical interpretation

Physically, the result indicates an oscillation that is still visible: [[omega_d]] is real and close to [[omega0]], so cycles have not disappeared. However, the available amplitude decreased from 0.050 m to about 0.011 m in half a second. The system keeps oscillatory memory while losing energy quickly.

The difference between [[x_env]] and [[x]] is essential. The envelope tells how large a peak could be at that instant; the position also depends on the phase within the cycle. If a measured [[x]] were larger than [[x_env]], that would indicate a unit, sign, or model error.

# Real-world example

## Context

A light structure vibrates after being struck. A technician observes several decreasing maxima and wants to know whether the behavior is underdamped and whether the vibration will disappear quickly enough not to disturb nearby equipment.

## Physical estimation

If two maxima separated by 0.6 s have amplitudes of 8 mm and 4 mm, the envelope has been halved. An estimate of the damping rate is ln(2)/0.6 ≈ 1.16 s^-1. If the time between maxima is 0.35 s, the approximate visible angular frequency is 2*pi/0.35 ≈ 18 rad/s. The reading combines [[gamma]] for amplitude loss and [[omega_d]] for cycle rhythm.

## Interpretation

The structure is not critical or overdamped because it still crosses equilibrium. It is also not an ideal lossless oscillator because the maxima decrease. The underdamped diagnosis helps decide whether to add damping, modify stiffness, or accept the residual vibration.

If the vibration disturbs nearby equipment, increasing [[gamma]] may reduce peaks sooner, but it also moves the system toward the critical boundary. Changing stiffness modifies [[omega0]] and may therefore modify [[omega_d]]. The real decision is not simply to add more damping, but to choose which physical scale should be changed. The example shows why a complete reading needs the curve [[x]], the rhythm [[omega_d]], and the amplitude reduction indicated by [[x_env]].

In an exam answer, this interpretation should be stated explicitly. The numerical value of [[x]] describes only one instant; regime classification and cycle comparison explain the whole behavior. That is why the answer reports position, amplitude bound, and visible angular rhythm together.

It is also useful to mention what would invalidate the answer. If the measured curve did not cross equilibrium, this regime would be doubtful. If the peaks did not decrease, the assumed free damping would be incomplete. If the position exceeded the amplitude bound, the substitution or units would need revision.
