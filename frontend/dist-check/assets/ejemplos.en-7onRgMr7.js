const e=`# Exam-type example

## Problem statement

A musical instrument produces a periodic sound whose amplitude spectrum contains lines at 220 Hz, 660 Hz, 1100 Hz, and 1540 Hz with respective amplitudes of 0.40 Pa, 0.25 Pa, 0.12 Pa, and 0.06 Pa. Required: (a) identify the fundamental frequency [[f1]] and harmonic number [[n_arm]] of each component, (b) calculate the period [[T_per]] of the total signal, (c) comment on what type of instrument could produce this spectrum and what timbre would be expected.

## Data

- Spectral frequencies: 220 Hz, 660 Hz, 1100 Hz, 1540 Hz
- Corresponding amplitudes: 0.40 Pa, 0.25 Pa, 0.12 Pa, 0.06 Pa

## System definition

The system is a complex periodic sound whose spectral components are the four listed harmonics. The quantities of interest are [[f1]], [[n_arm]] for each component, [[fn]], [[An]], [[T_per]], and the total acoustic pressure [[p_total]] obtained by summing those components.

## Physical model

The **harmonic Fourier series** model is applied: the spectral frequencies are integer multiples of [[f1]], and each component is a harmonic of the series. The key quantities are [[f1]], [[fn]], [[An]], [[T_per]], and [[p_total]].

## Model justification

The harmonic Fourier series model is valid because the spectral frequencies are multiples of 220 Hz: 660 is 3 times 220; 1100 is 5 times 220; 1540 is 7 times 220. The pattern is odd harmonics (1, 3, 5, 7), consistent with a half-wave symmetry source. The model would be invalid if the frequencies were not integer multiples of a common value, as occurs in bells or xylophones.

## Symbolic solution

To identify [[f1]], the greatest common divisor of all spectral frequencies is found. Applying the relation between harmonics and the fundamental frequency:

{{f:frecuencia_armonico}}

To calculate [[T_per]] from [[f1]]:

{{f:periodo_fundamental}}

The complete acoustic waveform is reconstructed with the Fourier series:

{{f:serie_fourier_presion}}

## Numerical substitution

Greatest common divisor of 220, 660, 1100, and 1540: by successive division, the GCD is 220 Hz. Therefore [[f1]] is 220 Hz.

Verification of [[n_arm]] for each component:
- 220 Hz: 220 divided by 220 gives 1 → harmonic 1 (fundamental), amplitude 0.40 Pa
- 660 Hz: 660 divided by 220 gives 3 → harmonic 3, amplitude 0.25 Pa
- 1100 Hz: 1100 divided by 220 gives 5 → harmonic 5, amplitude 0.12 Pa
- 1540 Hz: 1540 divided by 220 gives 7 → harmonic 7, amplitude 0.06 Pa

The harmonics present are odd ones: 1, 3, 5, 7. Even harmonics (2, 4, 6...) have zero amplitude.

Period of the total signal: [[T_per]] is the inverse of 220 Hz, approximately 4.55 ms.

The signal [[p_total]] is obtained by superposing the present harmonics with their amplitudes: 0.40 Pa in harmonic 1, 0.25 Pa in harmonic 3, 0.12 Pa in harmonic 5, and 0.06 Pa in harmonic 7. The result is not a pure sinusoid, but a periodic wave with the same [[T_per]] and a shape determined by [[An]].

## Dimensional validation

Fundamental frequency: greatest common divisor of frequencies, dimensions Hz, coherent with [[f1]] in Hz. ✓

Period: inverse of a frequency, dimensions of time in seconds. ✓

Ratio [[n_arm]]: quotient of two frequencies, dimensionless, integer result. ✓

## Physical interpretation

The exclusive presence of odd harmonics is the acoustic signature of instruments with a cylindrical tube resonator closed at one end, such as the **clarinet** in its fundamental register. The tube boundary condition (pressure node at the open end, antinode at the closed end) only allows odd vibration modes, eliminating even harmonics from the spectrum.

The expected timbre is **hollow and dark**: the absence of even harmonics creates that particular colour that distinguishes the clarinet from instruments with all harmonics. Moreover, the spectral envelope decreases monotonically with [[n_arm]] (0.40, 0.25, 0.12, 0.06 Pa), indicating a relatively soft sound without exaggerated high-frequency brightness.

With [[f1]] of 220 Hz, the corresponding note is A3, one octave below the standard A4 tuning pitch. The perceived pitch is this A3 even though the spectrum contains only four harmonics: the auditory system infers [[f1]] from the spacing between spectral lines even if the fundamental has small amplitude.

---

# Real-world example

## Context

In designing a sound synthesiser, the programmer wants to recreate the timbre of a clarinet in its fundamental register (note A3, [[f1]] of 220 Hz) using additive synthesis. They have one oscillator per harmonic and must configure which harmonics to activate and with what relative amplitude so that the result is recognisable as clarinet timbre.

## Physical estimation

The physics of the clarinet determines that in its fundamental register only odd harmonics are present. For the synthesiser to produce a timbre recognisable as a clarinet, the oscillators must be activated at the odd harmonic frequencies of [[f1]] and the even harmonic oscillators deactivated.

Calculating the frequencies of the first ten odd harmonics with [[f1]] of 220 Hz: harmonic 1 at 220 Hz, harmonic 3 at 660 Hz, harmonic 5 at 1100 Hz, harmonic 7 at 1540 Hz, harmonic 9 at 1980 Hz. From harmonic 11 (2420 Hz) onwards, the real clarinet amplitude is very small and its perceptual contribution to timbre is marginal.

For the amplitudes, the clarinet's spectral envelope decreases approximately as the inverse of the square of the harmonic number for odd harmonics. A practical approximation is to give harmonic 1 the reference amplitude; harmonic 3 approximately half; harmonic 5 approximately one third of half; and so on.

The quantitative design reading is direct: with [[f1]] of 220 Hz, [[n_arm]] equal to 1, 3, 5, 7, and 9 produces [[fn]] of 220, 660, 1100, 1540, and 1980 Hz. Assigning decreasing [[An]] to those lines, the Fourier series generates a periodic [[p_total]] with [[T_per]] near 4.55 ms and a hollow timbre due to the absence of even harmonics.

## Interpretation

The result of activating only odd harmonics with that decreasing envelope produces a timbre that listeners identify as "clarinet-like" even if not identical. The residual perceptual differences are due to the real clarinet timbre also including the temporal envelope (attack, sustain, decay), vibrato, and small tuning variations (inharmonicity), which static additive synthesis does not capture.

This application illustrates the fundamental principle of the leaf: timbre is the amplitude spectrum [[An]]. Modifying which harmonics are present and with what amplitudes is modifying the timbre, and doing so systematically allows designing any imaginable tonal colour through additive synthesis. This is the basis of modular synthesisers, virtual pipe organs, and virtual orchestral instruments used in professional music production.
`;export{e as default};
