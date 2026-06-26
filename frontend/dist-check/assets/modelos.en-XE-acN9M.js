const e=`## Ideal model

The model describing pitch and timbre in this leaf is that of the **strictly harmonic periodic signal**: the total acoustic pressure [[p_total]] is a finite (or converging infinite) sum of sinusoids whose frequencies [[fn]] are exact integer multiples of the fundamental frequency [[f1]]. The amplitudes [[An]] are constant in time: the spectrum does not vary during the analysis.

This model treats sound as a steady-state phenomenon: the source has been vibrating indefinitely and will continue to do so, so that the spectrum calculated over a time window of duration [[T_per]] or a multiple is the true spectrum. The propagation medium is linear and homogeneous, so superposition is exact and harmonics do not interact with each other.

## Hypotheses

- **Strict periodicity:** The signal repeats exactly every [[T_per]] seconds. If this hypothesis is violated, the harmonics are not exact integer multiples of [[f1]] and the spectrum is no longer composed of equally spaced discrete lines. Typical violation: finite-duration musical note, percussion instrument, or voice in transition.

- **Time-constant amplitudes:** The values of [[An]] do not change during the analysis. If the source is in a process of attack or decay, [[An]] varies with time and the instantaneous spectrum differs from the stationary spectrum. Typical violation: newly struck piano note, where amplitudes decay exponentially.

- **Perfectly integer harmonics:** [[fn]] is exactly n times [[f1]] for all n. In stiff strings, inharmonicity causes harmonics to be slightly displaced from exact integer multiples. The effect is perceptible in the bass strings of the piano and leads to "stretching" of the perceived pitch.

- **Valid linear superposition:** Harmonics add without interaction. This hypothesis fails if the total amplitude is large enough to generate non-linear effects in the medium or instrument.

- **Line spectrum (not continuous):** The signal is periodic and contains no noise or transients. Real sounds always have some background noise that adds a continuous pedestal to the spectrum; the model ignores this.

## Quantitative validity domain

The harmonic periodic signal model is valid when:

- The note duration is greater than about 10 times [[T_per]], so that the calculated spectrum has resolution of [[f1]] or better. For [[f1]] of 440 Hz, [[T_per]] is 2.27 ms and the recommended minimum duration is about 23 ms, equivalent to an eighth note at fast tempo.
- The inharmonicity is less than 1 % in the first ten harmonics: the deviation of [[fn]] from n·[[f1]] is less than 0.01·[[f1]]. For guitar strings with normal tension and stiffness, this criterion is met up to harmonic 8 or 10.
- The amplitudes [[An]] vary by less than 10 % during the analysis window, so that the spectrum can be considered stationary.

Concrete numerical condition: the analysis duration must be greater than 10 × [[T_per]], i.e., greater than 10 / [[f1]] seconds.

## Model failure signals

- **Non-equally spaced spectrum:** If in the Coord spectrum graph the lines are not equally separated by [[f1]], the sound is inharmonic or the periodic signal model has failed. Bell, xylophone, or cymbal sounds always produce spectra with this appearance.
- **Broadened spectral lines:** If instead of discrete lines broad peaks appear, the signal is not strictly periodic during the analysis window; there is frequency or amplitude modulation, or the sound is transient.
- **Visible noise pedestal:** If between the spectral lines there is an elevated level of continuous energy, the sound contains noise or transients that the model ignores. This is common in friction sounds (violin at the moment of bow onset) or percussion.
- **[[An]] varying with window position:** If the spectrum changes significantly when the analysis window is shifted, the signal is not stationary and the constant-amplitude model has failed.

## Extended or alternative model

The **time-frequency spectrum** model (spectrogram) extends the stationary analysis to non-stationary signals. Instead of calculating a single global spectrum, it calculates spectra in overlapping sliding windows, producing a three-dimensional representation of energy as a function of frequency and time. This model is indispensable for analysing the voice (which changes from phoneme to phoneme), musical notes with attack and decay, or any signal whose spectrum evolves with time.

For inharmonic sounds (bells, cymbals, plate instruments), the alternative model is that of the **continuous spectrum with peaks**: the spectral components are not tied to a fundamental by an integer-multiple relation, and each partial has its own frequency and amplitude.

When to switch to the spectrogram model: when the note has distinct attack and decay, when the timbre changes during the note (as in a violin with vibrato), or when analysing the human voice in continuous speech; switch to the inharmonic partials spectrum when the analysed sound is from plate percussion, bells, or any resonator with non-cylindrical and non-spherical geometry.

## Operational comparison

| Criterion | Harmonic Fourier series | Spectrogram | Inharmonic partials |
|---|---|---|---|
| Signal type | Stationary periodic | Non-stationary | Inharmonic (bell, cymbal) |
| Resulting spectrum | Equally spaced discrete lines | Lines or bands varying in time | Non-equally spaced discrete lines |
| Perceived pitch | Well defined by [[f1]] | Varying with time | Ambiguous or absent |
| Timbre | Defined by static spectrum | Defined by temporal evolution of spectrum | Defined by frequencies and amplitudes of each partial |
| Typical application | Sustained instruments, voice on vowel | Voice in speech, instruments with vibrato | Plate percussion, bells, xylophones |
| Mathematical complexity | Low (discrete Fourier series) | Medium (FFT with sliding window) | Medium-high (partial analysis) |
`;export{e as default};
