# Exam-type example


## Problem statement

A guitar string has a vibrating length of 0.65 m between the nut and the bridge. The propagation velocity of transverse waves in this string is 312 m/s. Determine the wavelength and frequency of the fundamental mode, calculate the frequency and wavelength of the third stationary mode, and find the new fundamental frequency when the guitarist presses the string on a fret that reduces the vibrating length to 0.433 m.

## Data

- Vibrating length of the string: [[longitud_cuerda]] is 0.65 m
- Transverse wave propagation velocity: [[velocidad_propagacion]] is 312 m/s
- Mode number for the fundamental: [[numero_armonico]] is 1
- Mode number for the third harmonic: [[numero_armonico]] is 3
- Vibrating length reduced by pressing the fret: 0.433 m

## System definition

The system is a string with fixed ends at both ends of the vibrating length. Stationary modes are vibration patterns that satisfy the boundary conditions of permanent nodes at the ends. Each mode contains exactly [[numero_armonico]] half-wavelengths [[longitud_onda_estacionaria]] within the length [[longitud_cuerda]].

## Physical model

The standing wave model with fixed ends quantizes the wavelength [[longitud_onda_estacionaria]] as a function of mode [[numero_armonico]] and length [[longitud_cuerda]]. The frequency of each mode [[frecuencia_modo]] is obtained by combining the quantized wavelength with the propagation velocity [[velocidad_propagacion]] of the medium. For the first mode, the fundamental frequency [[frecuencia_fundamental]] establishes the base of the harmonic series.

## Model justification

The boundary conditions force permanent nodes at the string ends. This quantizes the wavelength by requiring that [[numero_armonico]] half-wavelengths fit exactly in [[longitud_cuerda]]. The same velocity [[velocidad_propagacion]] applies to all modes because it depends on the tension and linear density of the string, which are uniform. The resulting harmonic spectrum (where [[frecuencia_modo]] is exactly [[numero_armonico]] times [[frecuencia_fundamental]]) is a direct consequence of the linearity of the system and identical boundary conditions for all modes.

## Symbolic solution

For the wavelength of the n-th mode:

{{f:longitud_onda_estacionaria}}

For the frequency of the n-th mode:

{{f:frecuencia_estacionaria}}

For the fundamental frequency with [[numero_armonico]] equal to 1:

{{f:frecuencia_fundamental}}

For locating the nodes of the pattern in mode n:

{{f:posicion_nodos}}

For locating the antinodes of the pattern in mode n:

{{f:posicion_vientres}}

For the complete standing wave function:

{{f:funcion_onda_estacionaria}}

## Numerical substitution

**Fundamental mode (n equal to 1, L equal to 0.65 m, v equal to 312 m/s)**

Wavelength: two times 0.65 divided by 1. Result: [[longitud_onda_estacionaria]] approximately 1.30 m.

Fundamental frequency: 312 divided by two times 0.65. Result: [[frecuencia_fundamental]] approximately 240 Hz.

Number of antinodes: exactly 1. Number of nodes: exactly 2 (both ends).

**Third mode (n equal to 3)**

Wavelength: two times 0.65 divided by 3. Result: [[longitud_onda_estacionaria]] approximately 0.433 m.

Frequency: three times 240. Result: [[frecuencia_modo]] approximately 720 Hz.

Number of antinodes: exactly 3. Number of nodes: exactly 4 (two ends plus two interior nodes).

**Shortened string (L reduced to 0.433 m)**

New fundamental frequency: 312 divided by two times 0.433. Result: [[frecuencia_fundamental]] approximately 360 Hz.

Ratio to original: 360 divided by 240, approximately 1.5. Frequency increases by 50%.

## Dimensional validation

For wavelength [[longitud_onda_estacionaria]]: the formula combines meters divided by a dimensionless number, yielding units of length `[L]`. Correct in meters.

For frequency [[frecuencia_modo]]: the formula combines meters per second divided by meters, yielding `[T⁻¹]`. Correct in Hz.

Cross-check: the product of [[longitud_onda_estacionaria]] and [[frecuencia_modo]] must equal [[velocidad_propagacion]]. For the fundamental: 1.30 m multiplied by 240 Hz gives 312 m/s, matching [[velocidad_propagacion]]. Consistency verified.

## Physical interpretation

The value [[longitud_onda_estacionaria]] approximately 1.30 m for the fundamental mode means the wavelength is double the string length, so exactly half a wavelength fits between the two fixed ends. The transverse displacement [[desplazamiento_transversal]] is maximum at the antinode. For index [[indice_nodo]] equal to 1, the antinode position [[posicion_vientre]] is at half the string length, giving 0.325 m. The node position [[posicion_nodo]] with index [[indice_nodo]] equal to 0 is at the fixed end (0 m), and with index 1 at the other end (0.65 m). The resulting frequency of 240 Hz corresponds approximately to note G3, a typical pitch for bass guitar strings.

The third mode at 720 Hz produces a pattern with three equidistant antinodes and four nodes including the ends. The fact that [[frecuencia_modo]] is exactly three times [[frecuencia_fundamental]] confirms the perfect harmonic structure of the fixed-fixed system. In practice, when a string sounds, all these modes coexist with relative amplitudes that determine the perceived timbre.

The reduction of [[longitud_cuerda]] from 0.65 m to 0.433 m (multiplication by 2/3) produces an increase in [[frecuencia_fundamental]] from 240 to 360 Hz (multiplication by 3/2). This inverse relationship between length and frequency is the physical principle the guitarist uses when pressing frets: each fret shortens the string by a fixed factor, raising the frequency by the inverse factor. A perfect fourth interval (frequency ratio 4/3) corresponds exactly to reducing the length to the factor 3/4 of its original value.

---

# Real-world example


## Context

Tuning forks used by musicians and sound engineers are fork-shaped metal bars that vibrate in their fundamental mode when struck. The standard 440 Hz tuning fork (note A4) has dimensions and material chosen so that the fundamental frequency of its arms produces exactly that frequency. The standing wave model explains why changing the length or material alters the produced frequency.

## Physical estimation

A typical steel tuning fork has arm length of approximately 0.09 m. The transverse wave velocity in steel ranges from about 3 000 m/s to 5 000 m/s depending on geometry. Using the model with both ends free (which changes the factor compared to the fixed-fixed case), the estimated fundamental frequency for 9 cm arms falls in the range of 1 000 Hz to 3 000 Hz. Tuning forks at 440 Hz have longer arms (15 cm to 20 cm) or materials with lower wave velocity.

The dependence of [[frecuencia_fundamental]] on [[longitud_cuerda]] follows the same inversely proportional logic as in the string: doubling the length halves the frequency. This is why low-frequency tuning forks are physically larger.

## Interpretation

The standing wave model allows designing tuning forks with precise frequencies by adjusting [[longitud_cuerda]] and the material (which determines [[velocidad_propagacion]]). The harmonic series of a tuning fork is more complex than that of a string because the arm geometry is not perfectly one-dimensional, but the fundamental harmonic dominates auditory perception and provides the reference pitch.

The high damping rate of steel causes the higher harmonics to decay rapidly, leaving only the fundamental frequency audible after one or two seconds. This property of selective harmonic decay makes the tuning fork useful as a pitch reference: it produces a nearly pure tone without the overtones that color the sound of musical instruments.