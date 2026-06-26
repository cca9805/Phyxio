# Exam-type example

## Problem statement

A high-speed train travels at 72 km/h (20 m/s) on a straight track. Its horn emits a tone of 800 Hz. The speed of sound in air that day is 340 m/s. An observer stands next to the track.

a) Calculate the frequency the observer hears as the train approaches.
b) Calculate the frequency the observer hears as the train recedes.
c) Calculate the Doppler shift in each case.

## Data

- Horn frequency: [[f_fuente]] of 800 Hz
- Train speed: 20 m/s
- Speed of sound: [[v_sonido]] of 340 m/s
- Observer fixed relative to medium: [[v_receptor]] equals 0

## System definition

The train is the moving sound source; the observer beside the track is the stationary receiver. The train travels in a straight line, so the motion is purely radial when the train points directly toward the observer (approach) or directly away (recession). The speed of sound in air at ambient temperature is the medium parameter.

## Physical model

The moving-source, fixed-receiver model is applied. Convention: [[v_fuente]] positive when source moves away from receiver, negative when approaching.

## Model justification

The motion is radial (train travels in a straight line and the observer stands beside the track). The train speed of 20 m/s is well subsonic relative to [[v_sonido]] of 340 m/s (Mach number near 0.06). The receiver is stationary relative to the medium. The moving-source fixed-receiver model is appropriate.

## Symbolic solution

For the approach case, with negative [[v_fuente]] (source approaching) per convention:

{{f:doppler_fuente_movil}}

For the recession case, with positive [[v_fuente]]:

{{f:doppler_fuente_movil}}

Doppler shift in each case:

{{f:desplazamiento_doppler}}

## Numerical substitution

Approach ([[v_fuente]] negative, equal to minus 20 m/s): [[f_obs]] equals 800 Hz times 340 divided by (340 minus 20), which is 340 divided by 320, equals 800 times 1.0625, equals 850 Hz.

Recession ([[v_fuente]] positive, equal to plus 20 m/s): [[f_obs]] equals 800 Hz times 340 divided by (340 plus 20), which is 340 divided by 360, equals 800 times 0.944, approximately 756 Hz.

Doppler shift on approach: [[delta_f]] equals 850 minus 800, equals plus 50 Hz.
Doppler shift on recession: [[delta_f]] equals 756 minus 800, equals minus 44 Hz.

## Dimensional validation

The moving-source relation has a ratio of velocities (m/s divided by m/s) that is dimensionless, multiplied by [[f_fuente]] in Hz: the result is in Hz. Check: `[T⁻¹] · [L T⁻¹] / [L T⁻¹] = [T⁻¹]`.

## Physical interpretation

This means the ear is not detecting only a new frequency value, but the causal change in wavefront spacing: in front of the train wavefronts arrive closer together, while behind it they arrive farther apart. Physically, the reading of [[f_obs]] indicates whether approach or recession dominates.

The approaching train produces 850 Hz (rises 50 Hz above the emitted 800) and the receding train produces 756 Hz (falls 44 Hz). The change is not symmetric: the frequency increase on approach (50 Hz) is greater in absolute value than the decrease on recession (44 Hz). This asymmetry is the signature of the asymmetric classical Doppler effect: the geometric compression of wavefronts on approach is more intense than the stretching on recession, because the formula denominator varies hyperbolically, not linearly.

The total pitch jump the observer perceives as the train passes is from 850 to 756 Hz, a difference of 94 Hz, perceptible as a noticeable pitch descent. This change is proportional to train speed and could be used to estimate that speed if [[f_fuente]] is known.

---

# Real-world example

## Context

Traffic speed radar is the most ubiquitous application of the Doppler effect in everyday life. A roadside device emits a continuous-wave signal at known frequency [[f_fuente]]. The signal reflects off the moving vehicle, which acts both as a receiver (receiving the radar signal) and as a new source (re-emitting the signal with a Doppler shift). The radar receives the echo and measures the total frequency shift, which is the combination of the two Doppler effects: the vehicle as receiver and the vehicle as source.

For a traffic radar operating at [[f_fuente]] of 24.1 GHz (K band, typical frequency), the speed of sound is replaced by the speed of light (3×10⁸ m/s). The total Doppler shift for a vehicle approaching at 100 km/h (27.8 m/s) is approximately [[delta_f]] of 2 times 24.1×10⁹ times 27.8 divided by 3×10⁸, approximately 4461 Hz, a value easily measurable with precision electronics.

## Physical estimation

For acoustic radar (Doppler sonar), the same principle applies. A ship emits a sonar pulse at [[f_fuente]] of 12 kHz. The signal reflects off a school of fish receding at [[v_fuente]] of 3 m/s (relative to the water). The two-step Doppler formula gives [[delta_f]] of approximately 2 times [[f_fuente]] times [[v_fuente]] divided by [[v_sonido]], which for these values is 2 times 12000 times 3 divided by 1500, equals 48 Hz. The sonar measures 48 Hz of shift and deduces the fish school is receding at 3 m/s.

## Interpretation

The two-step Doppler version (vehicle as receiver and as source) is what produces double the Doppler shift in reflection radars. This is why the radar velocity formula includes a factor of 2 in the numerator: the Doppler effect is applied twice, once on receiving the signal and once on re-emitting it. The same double-Doppler principle is used in blood-flow Doppler ultrasound to measure red blood cell velocity from the ultrasonic echo frequency shift.
