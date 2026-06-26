# Exam-type example

## Problem statement

Two transverse pulses cross on an ideal string. At one point, at the same instant, the first pulse displaces the string 3.0 mm upward and the second displaces it 1.8 mm downward. Then the case of two in-phase pulses with amplitudes [[A_1]] = 3.0 mm and [[A_2]] = 1.8 mm is analyzed.

Determine the instantaneous resultant disturbance, the in-phase resultant amplitude, and the relative intensity associated with that amplitude.

## Data

- Disturbance of wave 1: 3.0 mm upward.
- Disturbance of wave 2: 1.8 mm downward.
- [[A_1]]: 3.0 mm.
- [[A_2]]: 1.8 mm.

## System definition

The system is a small piece of string at the crossing instant. The observable variable is the local transverse displacement. Upward is taken as positive, so [[y_1]] is positive and [[y_2]] is negative.

The second part does not use instantaneous disturbances, but maximum in-phase amplitudes. Therefore [[y_resultante]], [[A_1]], [[A_2]], and [[A_resultante]] must be distinguished before any intensity reading is made.

## Physical model

Linear superposition applies: the medium responds proportionally and each pulse keeps its identity while passing through the other. The string is not permanently deformed, and the local result is obtained by adding signed contributions.

For the energy reading a relative model is used: [[I_relativa]] is proportional to the square of the combined amplitude. It is not absolute power in W, but a comparison of reinforcement.

## Model justification

The model is valid because amplitudes are small compared with the string length and there is no plastic deformation or variable tension. The pulses cross without modifying medium properties.

It would fail if the string responded nonlinearly, if shocks appeared, or if displacement were so large that effective tension changed during the crossing.

## Symbolic solution

First the instantaneous signed disturbance is added:

{{f:superposicion_lineal}}

For the in-phase case, the combined maximum amplitude is obtained by direct amplitude addition:

{{f:amplitud_en_fase}}

Finally, the relative intensity reading is obtained from the resultant amplitude:

{{f:intensidad_relativa}}

This symbolic separation avoids mixing instantaneous disturbance, maximum amplitude, and intensity. Each quantity answers a different question.

## Numerical substitution

For the instantaneous disturbance, adding 3.0 mm upward and 1.8 mm downward leaves a net disturbance of 1.2 mm upward. Thus [[y_resultante]] is approximately 1.2 mm in the positive direction.

For in-phase amplitudes, [[A_1]] = 3.0 mm and [[A_2]] = 1.8 mm combine to give 4.8 mm. Thus [[A_resultante]] is approximately 4.8 mm. Taking 1 mm as reference amplitude, squaring 4.8 gives a relative reading of 23.0. Therefore [[I_relativa]] is approximately 23 on that normalized scale.

## Dimensional validation

- Disturbance: adding signed lengths preserves length dimension, `[L]`.
- Amplitude: adding amplitudes also preserves `[L]`.
- Relative intensity: after normalization by a reference amplitude, the squared ratio is dimensionless, `[1]`.

Units are coherent because lengths have not been added to intensities, nor amplitudes to energy.

## Physical interpretation

The instantaneous result shows partial cancellation: although the first pulse raises the string by 3.0 mm, the second pulls in the opposite direction and reduces the visible disturbance to 1.2 mm. The string does not choose a pulse; it responds to the algebraic sum of both.

The in-phase case shows another regime: maximum amplitudes reinforce and the relative intensity reading grows strongly. This explains why two coherent sources can produce very bright or loud zones even when each individual source is moderate.

If the second pulse had equal magnitude and opposite direction to the first, [[y_resultante]] would have been zero at that point. That would be local cancellation, not global disappearance of the waves.

The physical message is that the medium records a local state, not a memory of which pulse arrived first. During the overlap, the string element responds to compatible causes at once; after the overlap, each pulse continues because the ideal medium has not been permanently changed. This is why [[y_resultante]] answers a different question from [[A_resultante]]: the first describes what is seen at one point and instant, while the second describes the maximum size of a coherent combined oscillation.

The intensity estimate should also be read qualitatively. A larger [[A_resultante]] does not merely make the graph taller; it changes how much wave effect a detector would associate with that region. The result is therefore a prediction about observable reinforcement, not just an arithmetic exercise with millimeters.

# Real-world example

## Context

In active noise-cancelling headphones, a microphone measures an unwanted acoustic disturbance and the speaker generates another nearly opposite disturbance. The goal is not to destroy sound everywhere, but to reduce [[y_resultante]] near the ear.

## Physical estimation

If the noise produces a relative acoustic pressure of 1.0 unit and the speaker generates a disturbance of 0.8 units in the opposite direction, the sum leaves 0.2 units. The local disturbance is reduced to one fifth of the original.

Because relative intensity scales with squared amplitude, a residual amplitude of 0.2 implies an approximate relative intensity of 0.04 compared with the initial reference. That is an order-of-magnitude reduction of about twenty-five in local energy reading.

This estimate is a reading at one position, not a promise for the whole room. A listener moving a few centimeters can change the phase relation enough to alter the residual value. For that reason, the useful physical output is the local [[y_resultante]] near the ear and not a universal statement that the original sound has disappeared.

## Interpretation

Active cancellation works only if phase, amplitude, and position are tightly controlled. If the generated wave arrives late, it stops subtracting and may even reinforce the noise.

The estimate shows why a moderate amplitude reduction can be perceived as a strong noise reduction. Superposition acts on disturbances, but the ear interprets an energy-related response connected with intensity.

The same reasoning also explains why cancellation is fragile. The headphone does not remove the original wave from the world; it creates a second disturbance that makes the local [[y_resultante]] small near the ear. If the listener moves, if the sound contains sharp transients, or if the speaker response changes with frequency, the local sum changes. The example is therefore a physical reading of where the model works, not only a numerical reduction from 1.0 to 0.2.
