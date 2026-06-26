# Exam-type example


## Problem statement

A guitar string has length 0.65 m between the nut and the bridge. The propagation velocity of transverse waves in this string is 312 m/s, determined by its tension and linear density. Calculate:

a) The fundamental frequency (first harmonic) of the string.
b) The frequency and wavelength of the fifth harmonic.
c) If the guitarist presses the string on a fret that reduces the vibrating length to 0.433 m, what is the new fundamental frequency?

## Data

- String length: 0.65 m
- Propagation velocity: 312 m/s
- New length when pressing fret: 0.433 m
- Fixed ends in both cases
- Linear oscillation regime

## System definition

The system is a string with fixed ends: one node at each end of the vibrating length. The normal modes of vibration correspond to transverse standing waves satisfying the boundary conditions. Harmonics are the allowed discrete frequencies, integer multiples of the fundamental.

## Physical model

We apply the ideal string model with fixed ends. Harmonic frequencies follow the spatial quantization law imposed by fixed nodes:

{{f:frecuencia_armonica}}

For the particular case of the first harmonic, [[numero_de_armonico]] is 1 and the fundamental appears:

{{f:frecuencia_fundamental}}

The wavelength of each harmonic is given by:

{{f:longitud_onda_armonica}}

## Model justification

The ideal string model is applicable because:
- The length (65 cm) is much greater than the string diameter (approximately 0.3 mm), guaranteeing that flexibility dominates over stiffness.
- The guitar produces musical notes in the audible range where the model is precise.
- The nut-bridge ends behave approximately as fixed nodes for the main modes.

The model would cease to be valid for very high frequencies (above 10 kHz) where stiffness effects become noticeable, or if the oscillation amplitude were so large that tension varied appreciably.

## Symbolic solution

**Part a) Fundamental frequency**

Applying the fundamental frequency formula with n=1:

{{f:frecuencia_fundamental}}

Substituting the given values, the fundamental frequency is:

To obtain the fundamental frequency [[f_1]], divide the velocity [[velocidad_de_propagacion]] (312 m/s) by twice the length [[longitud_de_la_cuerda]] (1.30 m), using the first harmonic [[numero_de_armonico]] equal to 1

**Part b) Fifth harmonic**

For the fifth harmonic, [[numero_de_armonico]] is 5. Using the general relation:

{{f:frecuencia_armonica}}

The frequency of the fifth harmonic results in:

The frequency of the fifth harmonic [[f_n]] equals five times the fundamental frequency, following the linear harmonic relation:

{{f:relacion_frecuencias}}

Where the harmonic number [[numero_de_armonico]] multiplies the fundamental [[f_1]] to give the desired harmonic frequency

For the wavelength, we apply spatial quantization:

{{f:longitud_onda_armonica}}

With n=5:

The wavelength of the fifth harmonic [[lambda_n]] results from dividing twice the string length [[longitud_de_la_cuerda]] by the harmonic number [[numero_de_armonico]] (five)

**Part c) New frequency when shortening the string**

When pressing the fret, the new vibrating length is L' = 0.433 m. Velocity v remains constant (same tension and string). The new fundamental is:

The new fundamental frequency [[f_1]] is calculated with the new length [[longitud_de_la_cuerda]] in the denominator, keeping velocity [[velocidad_de_propagacion]] and harmonic number [[numero_de_armonico]] equal to 1 constant

## Numerical substitution

**Part a)**

{{f:frecuencia_fundamental}}

For the fundamental frequency, divide 312 m/s by twice 0.65 m, that is, 1.30 m. This gives approximately 240 Hz.

[[f_1]] ≈ 240 Hz

This frequency corresponds approximately to between G3 (196 Hz) and D3 (293 Hz) on the musical scale, a note within the typical guitar range.

**Part b)**

{{f:frecuencia_armonica}}

For the fifth harmonic, multiply 5 by the fundamental frequency. With [[f_1]] ≈ 240 Hz, the general magnitude [[f_n]] takes approximately 1200 Hz when [[numero_de_armonico]] is five.

{{f:longitud_onda_armonica}}

For the wavelength, divide twice the length (1.30 m) by 5, giving approximately 0.26 m.

For [[numero_de_armonico]] equal to five, [[lambda_n]] ≈ 0.26 m (26 cm).

**Part c)**

With the new length L' = 0.433 m, the fundamental frequency increases because the vibrating length decreases. Dividing 312 m/s by twice 0.433 m (0.866 m) gives approximately 360 Hz.

[[f_1]] (new) ≈ 360 Hz

This frequency is 1.5 times the original, corresponding approximately to a musical perfect fifth.

## Dimensional validation

We verify the dimensions of the calculated magnitudes:

- Frequency: the ratio between velocity and length produces final dimension `[T⁻¹]` (Hz). Correct.
- Wavelength: distributing a length across a dimensionless index preserves dimension `[L]` (m). Correct.

Dimensional breakdown of the frequency formula:
- Velocity units: m/s
- Length units: m
- Ratio between velocity and effective length: final dimension `[T⁻¹]`, equivalent to Hz.

The dimensional analysis confirms the coherence of all applied formulas.

## Physical interpretation

The example illustrates how musicians consciously use physics to modify pitch. The fundamental frequency of 240 Hz represents the base tone of the open string (unpressed). When the guitarist presses the fret, they shorten the effective length L by a factor 0.433/0.65 ≈ 2/3, raising the frequency by the inverse factor 3/2 ≈ 1.5, that is, a musical fifth.

Upper harmonics, such as the fifth at 1200 Hz, are present simultaneously with the fundamental when the note is played, giving timbral richness to the sound. The wavelength of 26 cm for the fifth harmonic means that the 65 cm string contains exactly 2.5 complete wavelengths, or equivalently 5 half-waves, verifying the quantization condition.

If the string tension were increased (turning the tuning peg), velocity [[velocidad_de_propagacion]] would increase raising all frequencies proportionally, allowing the instrument to be tuned.

---

# Real-world example


## Context

Plucked string instruments (guitar, harp, harpsichord) and bowed instruments (violin, cello) operate according to the harmonic principle described. A luthier (string instrument maker) must calculate the fundamental frequencies when designing a new instrument to ensure that the produced notes correspond to the desired musical scale.

## Physical estimation

A luthier designs a guitar with a scale (open string length) of 650 mm. The lowest string (low E) must produce 82.4 Hz fundamental frequency. To achieve this, they need to determine the required propagation velocity and, therefore, the necessary tension given the linear density of the string.

Solving for velocity from the fundamental frequency formula:

{{f:frecuencia_fundamental}}

For the calculation, multiply twice the length (1.30 m) by the desired frequency (82.4 Hz). This gives approximately 107 m/s as the necessary propagation velocity.

If the string has linear density μ = 2.5 g/m (0.0025 kg/m), the required tension is obtained from v = √(T/μ), solving for The tension results from the product of linear density times the square of velocity. Operating with the given values, the tension is approximately 28.6 N, equivalent to about 2.9 kgf.

## Interpretation

This tension of about 29 newtons is reasonable for a guitar string and allows the luthier to select the appropriate material and gauge. If the tension were excessive (more than 100 N), the string could damage the instrument neck; if insufficient (less than 10 N), the string would not have adequate response and would sound "flabby".

The calculation demonstrates how the physics of harmonics guides the practical design of musical instruments, connecting mechanical properties (tension, density) with musical results (tuning, timbre) through vibration frequencies.