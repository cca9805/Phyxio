# Exam-type example

## Problem statement

A laboratory tube has an effective length of 0.50 m and contains air where sound speed can be taken as 340 m/s. Compare the fundamental frequency if the tube is open at both ends with the fundamental frequency if one end is closed. Also calculate the modal wavelength in each case and interpret why the two answers are different.

## Data

- Effective length: 0.50 m.
- Sound speed: 340 m/s.
- Open-open tube: first open mode.
- Open-closed tube: first closed index.
- Ideal fundamental modes are compared.

## System definition

The system is the air column inside the tube. The geometric quantity entering the model is [[L_eff]], not only the physical length [[L]]. For the open-open tube, [[n]] is used as the mode number. For the open-closed tube, [[m]] is used, because the allowed series is organized through odd factors. The quantity that compares both cases is [[f_n]].

## Physical model

The ideal narrow-tube model with uniform air is used. The physical length [[L]] is translated into effective length [[L_eff]], and the speed [[v]] turns each spatial scale [[lambda_n]] into frequency [[f_n]]. In the open-open case, both ends are treated as displacement antinodes. In the open-closed case, the open mouth is a displacement antinode and the closed end is a node. The model is valid because basic resonances are compared, not details of bells, viscosity, or complex geometry.

## Model justification

The model is valid because the statement provides [[L_eff]] and [[v]], the quantities needed for a first acoustic reading. It also specifies the end types. The comparison would stop being reliable if the tube were very wide compared with [[lambda_n]], if temperature varied strongly inside the column, or if the closed end did not act as a rigid wall.

## Symbolic solution

For the open tube, the complete series is used:

{{f:frecuencia_tubo_abierto}}

The wavelength of the open mode is obtained with:

{{f:longitud_onda_tubo_abierto}}

For the open-closed tube, the odd series is used:

{{f:frecuencia_tubo_cerrado}}

The wavelength of the closed mode is obtained with:

{{f:longitud_onda_tubo_cerrado}}

In the open fundamental, [[n]] takes the first integer value. In the closed fundamental, [[m]] takes the first value and generates the first odd factor. This difference translates the acoustic boundary: two displacement antinodes versus one antinode and one node.

## Numerical substitution

In the open-open tube, distributing 340 m/s over twice 0.50 m gives a frequency of about 340 Hz. Therefore [[f_n]] for the open fundamental is near 340 Hz. The open modal wavelength is approximately 1.0 m, because the tube contains half a wave.

In the open-closed tube, distributing 340 m/s over four times 0.50 m gives about 170 Hz for the fundamental. Therefore [[f_n]] in the closed case is about half the open case. The closed modal wavelength is near 2.0 m, because the tube contains a fundamental quarter-wave.

## Dimensional validation

In both frequency calculations, a speed with dimension `[L T⁻¹]` is divided by a length `[L]` and by dimensionless factors. The result has dimension `[T⁻¹]`, compatible with hertz.

For wavelength, the effective length is multiplied by dimensionless factors or distributed by modal indices. The result keeps dimension `[L]`, compatible with metres. The dimensional comparison confirms that the change between open and closed is not a unit issue, but a physical boundary issue.

## Physical interpretation

The open-open tube has the higher fundamental because its fundamental pattern contains half a wavelength in the effective length. The open-closed tube contains only a quarter-wave in the same effective length, so it needs a longer wavelength and produces a lower frequency. The difference does not come from changing air or sound speed [[v]], but from changing one boundary.

If [[L_eff]] were doubled, both frequencies would fall in a comparable way. If [[v]] increased because the air was warmer, both would rise. But closing one end does not shift the series in the same way as changing length: it also removes the even modes of the ideal open series. Therefore tube type affects both fundamental pitch and timbre.

# Real-world example

## Context

An organ pipe can be made open or stopped. A pipe closed at one end can produce a low note with less physical length than an equivalent open pipe. This property allows more compact instruments and different timbres.

## Physical estimation

Suppose air has [[v]] of order 340 m/s and a note is near 170 Hz. An open pipe producing that note needs an effective length of order 1 m, because the open fundamental distributes speed over twice the length. An open-closed pipe for the same note needs an effective length of order 0.5 m, because it uses a fundamental quarter-wave. The estimate shows a clear scale difference, not a tiny detail.

If temperature rises and [[v]] increases by a few metres per second, the note rises slightly in both tubes. If the mouth has an appreciable end correction, [[L_eff]] grows and the frequency falls relative to the prediction made with physical [[L]].

## Interpretation

The real application shows that a tube is not designed only by material length. It is designed by boundary condition. The closed end changes the modal family, lowers the fundamental frequency for the same effective length, and modifies the available harmonic content.

The dominant physical reading is [[f_n]], but it cannot be understood without [[L_eff]], [[v]], and the correct index. An organ pipe, a flute, or a laboratory tube selects sound because air reinforces only patterns compatible with its ends.
