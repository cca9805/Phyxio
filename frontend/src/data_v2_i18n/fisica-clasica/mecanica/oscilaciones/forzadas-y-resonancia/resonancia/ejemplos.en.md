# Exam-type example

## Problem statement

A mass-spring-damper oscillator has [[m]] = 1.0 kg, [[k]] = 400 N/m, and [[b]] = 4.0 N*s/m. A sinusoidal force of amplitude [[F0]] = 8.0 N is applied, and displacement resonance is to be studied. Compute the natural angular frequency [[omega0]], the resonance angular frequency [[omega_r]], the quality factor [[Q]], and the amplitude [[X]] when the force works at [[omega_f]] = 19.6 rad/s.

## Data

The system data are [[m]], [[k]], and [[b]]. The external source is characterized by [[F0]] and by the operating frequency [[omega_f]]. The physical unknowns are [[omega0]], [[omega_r]], [[Q]], and [[X]]. The question does not ask only for one amplitude: it asks whether the given frequency lies near the maximum of the curve.

## System definition

The system is modeled as a linear forced oscillator with viscous damping. The relevant response is steady state, so the initial transient is assumed to have disappeared. Resonance will be analyzed as a maximum of [[X]] versus [[omega_f]], not as free oscillation.

## Physical model

The physical model combines the forced-amplitude curve, the location of the resonance peak, and the quality factor. The external force sets the scale [[F0]], but the peak is determined by [[m]], [[k]], and [[b]]. If [[omega_f]] lies close to [[omega_r]], the computed amplitude must be interpreted as response in the critical zone.

## Model justification

The model is valid because [[m]] and [[k]] set a stable oscillatory scale, [[b]] introduces positive dissipation, and [[F0]] acts as a controlled sinusoidal excitation. Under those conditions, energy supplied each cycle can be compared with energy dissipated, and the curve of [[X]] versus [[omega_f]] has physical meaning. If the computed amplitude were too large for the device, the linear hypothesis would have to be checked.

## Symbolic solution

The steady amplitude as a function of frequency is computed with:

{{f:amplitud_respuesta}}

The location of the displacement peak is estimated with:

{{f:frecuencia_resonancia}}

Peak selectivity is evaluated through:

{{f:factor_calidad}}

The resonance decision is made by comparing operating frequency with peak position:

{{f:criterio_resonancia}}

## Numerical substitution

First estimate the natural scale: [[omega0]] = sqrt(400/1.0) = 20 rad/s. To locate the peak, compute the damping correction: [[b]]^2/(2[[m]]^2) = 16/2 = 8 s^-2. Therefore, [[omega_r]] = sqrt(400 - 8) = sqrt(392) ≈ 19.8 rad/s.

The quality factor is [[Q]] = [[m]][[omega0]]/[[b]] = 1.0·20/4.0 = 5. This value indicates an appreciable peak, but not an extremely narrow one. The operating frequency [[omega_f]] = 19.6 rad/s lies very close to [[omega_r]], so the system works in the resonant zone.

To compute amplitude at that frequency, the elastic-minus-inertial term is [[k]] - [[m]][[omega_f]]^2 = 400 - 1.0·19.6^2 = 15.84 N/m. The dissipative term is [[b]][[omega_f]] = 4.0·19.6 = 78.4 N/m. The dynamic denominator is approximately sqrt(15.84^2 + 78.4^2) = 80.0 N/m. Thus [[X]] ≈ 8.0/80.0 = 0.10 m.

## Dimensional validation

The angular frequency [[omega_r]] has units of rad/s because it comes from the square root of terms with dimension s^-2. The factor [[Q]] is dimensionless, since [[m]][[omega0]] and [[b]] have the same dimension. In the amplitude calculation, [[F0]] is divided by an equivalent dynamic stiffness, so the result is measured in meters.

## Physical interpretation

The result shows moderate resonance: operating frequency is almost at the peak position, and [[Q]] = 5 means the system is selective but still dissipative. The amplitude of 0.10 m must be compared with the admissible range of the device. If that deformation is excessive, reducing the force is not the only option; one may also increase [[b]] or shift the peak by changing [[m]] or [[k]].

The key reading is that resonance was not declared merely from a large amplitude. It was declared because [[omega_r]] was computed, compared with [[omega_f]], and checked against damping. That sequence prevents confusing forced response with resonance.

# Real-world example

## Context

A rotating machine operates near 190 revolutions per minute and transmits vibration to a base frame. Maintenance staff notice that a small speed change produces a large change in vibration. They want to know whether the support is resonating.

## Physical estimation

First convert speed to [[omega_f]] and measure [[X]] after steady state is reached. Then repeat the measurement for several nearby speeds while keeping [[F0]] approximately constant. If the curve shows a reproducible and narrow maximum, estimate [[omega_r]]. From decay tests or frequency-response tests, approximate [[b]] and obtain [[Q]].

## Interpretation

If nominal speed lies inside the peak, possible solutions include changing operating speed, adding damping, modifying support stiffness, or changing effective mass. If the curve has no clear maximum, the problem may be imbalance, looseness, or transient response. A resonance diagnosis always requires a curve, a critical frequency, and a damping reading.
