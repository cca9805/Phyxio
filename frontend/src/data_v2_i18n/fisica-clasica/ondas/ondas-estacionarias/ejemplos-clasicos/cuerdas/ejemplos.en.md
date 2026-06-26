# Exam-type example

## Problem statement

A laboratory string is fixed at both ends. The vibrating span is 0.80 m, the applied tension is 72 N, and the mass per unit length is 0.020 kg/m. Analyze the third standing mode, identify its modal wavelength, and estimate its natural frequency. Also interpret what would happen if a string with larger linear density were used while keeping the same length and tension.

## Data

- Vibrating length: 0.80 m.
- String tension: 72 N.
- Linear density: 0.020 kg/m.
- Mode studied: third mode.
- Ends: fixed, with nodes at both supports.

## System definition

The system is the part of the string that actually vibrates between the supports. Therefore [[L]] is 0.80 m, not spare string outside the setup. The tension [[T]] is taken as uniform, the linear density [[mu]] as constant, and the mode number [[n]] as an integer. The final observable of interest is [[f_n]], because it tells whether an external drive will produce a clear resonance.

## Physical model

The ideal taut-string model is used. In this model, [[T]] and [[mu]] fix the propagation speed [[v]] of transverse traveling waves. Then the fixed-end condition selects [[lambda_n]] and [[f_n]] for mode [[n]]. The model is anchored in a flexible, uniform string, small amplitude, and stable nodes at the ends.

## Model justification

The model is valid because the problem describes a string fixed at both ends and directly gives [[T]], [[mu]], and [[L]], the needed mechanical quantities. The tension is large enough to treat the string as taut, and no large amplitude, stiffness, or strong damping is mentioned. It would stop being valid if the string curved with large amplitude, if tension changed noticeably during vibration, or if a support did not impose a real node.

## Symbolic solution

First obtain the propagation speed:

{{f:velocidad_cuerda_tensa}}

Then use the spatial fit of the mode:

{{f:longitud_onda_modo_cuerda}}

Finally compute the natural frequency of the selected mode:

{{f:frecuencia_modo_cuerda}}

The physical sequence matters. [[f_n]] is not computed directly from [[T]] and [[mu]] as isolated data; those quantities first produce [[v]]. Then [[n]] and [[L]] turn that speed into a specific standing frequency. At the same time, [[lambda_n]] checks that the drawn pattern contains three antinodes and nodes at the ends.

## Numerical substitution

With 72 N and 0.020 kg/m, dividing tension by linear density gives 3600 in coherent units; the square root gives a speed of about 60 m/s. Thus [[v]] is interpreted as about 60 m/s.

For the third mode, doubling 0.80 m and distributing it over three antinodes gives a modal wavelength of about 0.53 m. Thus [[lambda_n]] is near 0.53 m. For the frequency, multiplying mode three by 60 m/s and distributing it over twice 0.80 m gives about 112.5 Hz. So [[f_n]] is around 113 Hz.

## Dimensional validation

The speed uses tension divided by linear density. Dimensionally, N divided by kg/m produces a quantity of type `[L² T⁻²]`; its square root leads to `[L T⁻¹]`, matching m/s.

The modal frequency combines speed with a length in the denominator and a dimensionless mode number. The dimensional reading is `[T⁻¹]`, compatible with hertz. The modal wavelength keeps dimension `[L]`, so the spatial fit is also coherent.

## Physical interpretation

The result does not only say that a frequency near 113 Hz appears. It says that this frequency belongs to the third standing pattern of this particular string. The string contains three antinodes, a modal wavelength a little above half a metre, and a propagation speed born from the balance between [[T]] and [[mu]]. If driven near that frequency, the third mode will respond more clearly than at an intermediate frequency.

If [[mu]] is increased while keeping [[T]], [[L]], and [[n]], the string gains more inertia per metre. Then [[v]] decreases and [[f_n]] also decreases. If [[T]] is increased instead, the disturbance travels faster and frequency rises, but not by direct proportionality. This shows that string tuning does not depend on one cause, but on the balance between pull, inertia, and geometry.

# Real-world example

## Context

A guitar changes pitch when the player presses a string against a fret. Physically, the finger shortens the vibrating span [[L]], while the string keeps approximately the same [[T]] and [[mu]]. The fundamental remains the first mode, but the space where the pattern must fit becomes shorter.

## Physical estimation

Suppose a string has an initial free span of about 0.65 m and a speed [[v]] around 130 m/s. The fundamental is of order 100 Hz, because the speed is distributed over twice the vibrating length. If a fret reduces the span to about 0.49 m, the same estimate gives a frequency of order 130 Hz. An exact reading is not needed to see the mechanism: when [[L]] decreases by roughly one quarter, frequency rises by a comparable proportion.

The estimate also separates causes. Switching to a thicker string increases [[mu]] and lowers [[v]], so for the same finger position the note would be lower. Tightening the string with the tuning peg increases [[T]] and raises the note. The real application combines these controls, but the leaf lets one read which cause dominates each action.

## Interpretation

The musical string confirms that a standing wave is not only a neat shape. It is a physical filter of frequencies. The instrument does not need to "calculate" the note: it selects it because only some frequencies rebuild the pattern compatible with the ends. The finger changes the boundary, the peg changes tension, and the gauge changes linear inertia.

Therefore the real example is best read with [[f_n]] as the dominant quantity. A higher note may come from smaller [[L]], larger [[T]], or smaller [[mu]], and each cause has different practical consequences for feel, string resistance, and timbre.
