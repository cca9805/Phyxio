# Exam-type example

## Problem statement

A stretched string supports a small transverse disturbance. On one segment of the string, a harmonic solution is proposed with amplitude 0.020 m, wavenumber 4.0 rad/m, and angular frequency 24 rad/s. The goal is to decide whether that shape can represent a linear traveling wave and what phase speed it implies.

Determine the associated propagation speed, interpret the role of [[A]], [[k]], and [[omega]], and explain what the wave equation requires about the relation between spatial curvature and temporal change.

## Data

- Amplitude [[A]]: 0.020 m.
- Wavenumber [[k]]: 4.0 rad/m.
- Angular frequency [[omega]]: 24 rad/s.
- Transverse disturbance [[y]] on a linear string.
- Reading coordinates: [[x]] for position and [[t]] for instant.

## System definition

The system is an ideal string observed in one spatial dimension. The variable [[y]] describes local transverse displacement, while [[x]] marks the point on the string and [[t]] marks the instant.

The proposed solution is not interpreted as just any drawing. It must be compatible with a dynamic law: the wave equation. Therefore the phase parameters must be related to [[v]], not merely used to represent a sinusoidal curve.

## Physical model

The model is the one-dimensional linear wave model. The disturbance is small, the medium is treated as uniform, and propagation speed is stable. In that model, [[y]] must obey the relation between temporal change and spatial curvature.

The harmonic solution lets the wave be read through [[A]], [[k]], and [[omega]]. The differential equation sets the compatibility condition; the phase-speed relation translates that compatibility into an observable pattern speed.

## Model justification

The model is valid because the string is stated to be stretched, uniform, and subject to small disturbances. Under those assumptions, tension provides local coupling between neighboring points and spatial curvature can generate regular temporal change.

It would stop being valid if amplitude changed the tension, if strong damping appeared, if the string properties changed along [[x]], or if the shape deformed while advancing. In any of those cases, [[v]] would no longer be a simple phase reading.

## Symbolic solution

The differential law that the disturbance must obey is:

{{f:ecuacion_onda_1d}}

The proposed harmonic solution is represented by:

{{f:solucion_armonica}}

The associated phase speed is obtained with:

{{f:velocidad_fase}}

The symbolic solution shows that the quantities play different roles. [[A]] scales disturbance size, [[k]] measures spatial repetition, [[omega]] measures temporal phase rate, and [[v]] connects both rates. The coordinates [[x]] and [[t]] indicate where and when [[y]] is evaluated.

## Numerical substitution

For phase speed, dividing 24 rad/s by 4.0 rad/m gives 6.0 m/s. Therefore [[v]] is approximately 6.0 m/s. This reading does not depend on [[A]] being 0.020 m; amplitude only determines that the local disturbance does not exceed two centimeters in the ideal model.

If [[omega]] were doubled while [[k]] stayed fixed, phase would advance faster. If [[k]] were doubled while [[omega]] stayed fixed, the pattern would be spatially compressed and phase would advance more slowly. If [[A]] were doubled, the curve would be taller, but phase speed would not change for that reason in the linear model.

## Dimensional validation

- Phase speed combines a temporal rate with an inverse spatial scale and gives `[L T⁻¹]`.
- Disturbance [[y]] and amplitude [[A]] share length dimension, `[L]`.
- Wavenumber [[k]] has inverse-length dimension, `[L⁻¹]`.
- Angular frequency [[omega]] has inverse-time dimension, `[T⁻¹]`.

The validation confirms that amplitude has not been confused with speed, nor spatial position with transverse disturbance.

## Physical interpretation

The result means that the phase of the disturbance advances 6.0 m each second along the string, as long as the medium keeps the assumptions of the model. A crest moves with that speed, but a material point of the string does not travel horizontally with it; its local motion is described by [[y]].

The wave equation gives the deeper reading: the harmonic shape is not valid because it looks nice, but because its spatial curvature and temporal change keep the correct balance. Where the curve changes more sharply with [[x]], its evolution in [[t]] must also respond compatibly.

If [[omega]] or [[k]] change without respecting the phase relation, the proposed shape is no longer a solution of that equation for the same [[v]]. This is the difference between drawing a wave and proposing a physical solution. The result also shows that [[A]] controls disturbance scale, but does not by itself decide propagation speed.

# Real-world example

## Context

In a laboratory string driven by a vibrator, an almost sinusoidal wave train is observed. Measuring the spatial separation between equivalent phases gives a wavenumber near 12 rad/m. The vibrator imposes an angular frequency near 36 rad/s.

## Physical estimation

The phase reading indicates that dividing 36 rad/s by 12 rad/m gives a speed of about 3.0 m/s. This is the speed at which crests and troughs advance if the string behaves linearly.

The visible amplitude may be a few millimeters. If amplitude is increased without changing string tension or the vibrator rhythm, the wave looks taller, but the phase speed estimated from [[omega]] and [[k]] does not change directly.

## Interpretation

The estimate separates three readings that are often mixed: disturbance height, spatial compression, and temporal rhythm. The wave equation checks whether those readings form a compatible solution, not just whether the numbers look reasonable.

In a real setup, if the wave is strongly damped or the string is not uniform, the speed obtained from phase may vary from one segment to another. That variation would signal that the ideal model must be extended with attenuation, dispersion, or tension changes.
