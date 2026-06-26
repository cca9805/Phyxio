const e=`# Pitch and Timbre

## Conceptual context

Two different instruments play the same note: the violin and the flute both sound A4. Yet any listener immediately tells them apart. Why? The answer is that they share the same **fundamental frequency** but differ in their **harmonic spectrum**. Pitch is the perceptual attribute that depends on frequency; timbre is the one that depends on spectral composition.

This leaf connects wave physics with auditory perception and musical acoustics. The bridge between these worlds is **Fourier analysis**: any periodic acoustic pressure signal can be decomposed into a sum of sinusoids at integer-multiple frequencies of the fundamental. Each sinusoid is a **harmonic**, and the set of harmonics and their amplitudes is the spectrum of the sound.

Understanding pitch and timbre is not just physics: it is the foundation for designing instruments, synthesisers, audio filters, compression protocols (MP3, AAC), and machine diagnostic systems through vibration spectrum analysis.

## 🟢 Essential level

When a guitar plays middle C (C4), the string vibrates at 261.6 Hz. That is the **fundamental frequency** [[f1]]. The pitch we hear —that sensation of "low" or "high"— depends directly on [[f1]]: higher [[f1]], higher-pitched sound.

But the string does not vibrate only at its fundamental mode. At the same time it vibrates at 523 Hz (twice 261.6 Hz), at 784.8 Hz (three times), at 1046.4 Hz (four times), and so on. Each of these frequencies is a **harmonic**: the harmonic of order [[n_arm]] has frequency [[fn]], which is n times [[f1]]. The harmonics coexist in the same string at the same time, and their sum produces the real waveform we hear.

**Timbre** is precisely the colour of the sound that results from this mixture. The flute has few, weak harmonics: it sounds soft and pure. The oboe has many intense harmonics: it sounds bright and penetrating. Two instruments with the same [[f1]] but different amplitude distributions [[An]] sound different because they have different timbre.

> [!NOTE]
> The human ear does not directly perceive individual harmonics unless specifically attending to them. The brain integrates them into a single perception of pitch and timbre. This auditory fusion process is so automatic that one must train to hear harmonics separately, as Mongolian throat singers do.

## 🔵 Formal level

The mathematical tool that formalises harmonic decomposition is the **Fourier series**. For a periodic acoustic pressure signal with period [[T_per]], the decomposition is:

{{f:serie_fourier_presion}}

where [[An]] is the amplitude of the n-th harmonic, [[fn]] is its frequency, and the sum runs over all positive integers. The frequency of the n-th harmonic satisfies:

{{f:frecuencia_armonico}}

and the period of the total signal relates to [[f1]] through:

{{f:periodo_fundamental}}

The Fourier series equation has profound implications. First, the **periodicity of the total signal** is always [[T_per]], even though each harmonic has its own shorter period. Second, the waveform of [[p_total]] can be very different from a sinusoid; the "roughness" or "smoothness" of that shape depends on how many harmonics are present and their relative amplitudes. Third, the decomposition is **unique**: given a spectrum of amplitudes and phases, there is exactly one waveform, and vice versa.

The **amplitude spectrum** is the graphical representation of [[An]] as a function of [[fn]]. For a perfectly harmonic sound, the spectrum consists of discrete equally spaced lines on the frequency axis, separated by [[f1]]. This regular spacing is the fingerprint of periodicity.

> [!TIP]
> Fourier's theorem guarantees that the decomposition exists for any periodic signal of finite energy. It makes no assumption about the waveform shape: it can be sinusoidal, square, triangular, or any imaginable profile. It can always be decomposed into sinusoids.

## 🔴 Structural level

Fourier analysis reveals that pitch and timbre are not independent properties: they are linked through the spectrum. Pitch corresponds to the position of the spectrum on the frequency axis (determined by [[f1]]); timbre corresponds to the **shape** of the spectrum (determined by the relative values of [[An]]).

The symmetry of the sound source imposes constraints on which harmonics can be present. A cylindrical tube closed at one end —such as the clarinet in its fundamental register— produces only odd harmonics ([[n_arm]] odd: 1, 3, 5, 7...). This is a consequence of the asymmetric boundary condition: the pressure pattern in the tube has half-wave symmetry. The perceptual result is a hollow, dark timbre, with that characteristic gap in the even harmonics that makes the clarinet unmistakable.

String instruments, open tubes, and the human voice generally produce all harmonics, though with different amplitudes. The **spectral envelope** —the curve connecting the peaks of [[An]] in the spectrum— is what characterises each instrument. Well-made violins have an envelope that enhances certain spectral regions (the so-called "body formants") that contribute to their projection and tonal quality.

> [!WARNING]
> Percussive sounds (bells, xylophones) are **inharmonic**: their spectral components are not integer multiples of the lowest frequency. For these sounds, the harmonic Fourier series does not describe the real spectrum; a more general spectral representation is required. The ear perceives these sounds as bright timbres but without a clearly defined pitch.

**Additive synthesis** is the inverse technique to analysis: summing sinusoids of different frequencies, amplitudes, and phases to build any desired timbre. Modern sound synthesisers use additive synthesis, wavetable synthesis, and frequency modulation, which are direct extensions of the Fourier model. Audio compression algorithms (MP3, AAC) also exploit harmonic structure: they remove harmonics of smallest amplitude or those that are psychoacoustically masked, reducing file size with minimal perceptible loss.

## Deep physical interpretation

One of the most revealing phenomena of pitch perception is the **missing fundamental**. If the fundamental harmonic of a signal is removed —if [[f1]] is eliminated from the spectrum— the listener still perceives the same pitch as before. The auditory system **infers** [[f1]] from the pattern of higher harmonics, whose spacing remains [[f1]] even though the component at that frequency is absent.

This phenomenon has direct practical implications. Traditional analogue telephones had a frequency response that cut off below 300 Hz; yet male voices with [[f1]] of 100-150 Hz were perfectly intelligible because the transmitted harmonics (300, 400, 500 Hz...) allowed the ear to reconstruct the fundamental pitch.

## Order of magnitude

In music, [[f1]] of 110 Hz is a low note, 440 Hz is the A4 tuning reference, and 880 Hz is one octave higher. For [[f1]] of 220 Hz, the low-order audible harmonics appear at 220 Hz, 440 Hz, 660 Hz, and 880 Hz. If [[An]] falls quickly, the sound is soft; if [[An]] remains large at high harmonics, the timbre is perceived as bright.

## Personalized resolution method

The procedure for characterising a periodic sound from its spectrum is:

- **Identify [[f1]]**: it is the frequency of the first spectral line, or the greatest common divisor of all frequencies present.
- **Calculate [[T_per]]**: it is the inverse of [[f1]].
- **Index the harmonics**: divide each spectral frequency by [[f1]] to obtain [[n_arm]]; the result must be an integer.
- **Read [[An]]** from the height of each bar in the spectrum: it determines the contribution of that harmonic to timbre.
- **Verify consistency**: the spacing between consecutive bars must be constant and equal to [[f1]].

> [!TIP]
> If the greatest common divisor of the spectral frequencies does not coincide with the frequency of the first visible line, the fundamental may be absent (missing fundamental). The perceived pitch will still be [[f1]] even if it does not appear in the spectrum.

## Special cases and extended example

Every periodic sound has two equivalent and complementary representations that the Coord graph can show:

- **Time domain**: [[p_total]] versus time. Shows the complex waveform with periodicity [[T_per]]. A trained eye can infer timbre from the morphology: sharp peaks indicate high harmonics; sinusoidal shape indicates pure sound.
- **Frequency domain (spectrum)**: [[An]] versus [[fn]]. Shows the discrete equally spaced lines. The distribution of heights defines timbre objectively and quantifiably.

Both representations contain exactly the same physical information; they are two faces of the same acoustic reality. Converting between them requires the Fourier transform (direct or inverse).

Special case: if the line at [[f1]] is missing but the lines at 2[[f1]], 3[[f1]], and 4[[f1]] remain equally spaced, the ear may still perceive the pitch of [[f1]]. If the lines are not integer multiples, the signal is no longer harmonic and an inharmonic or spectrogram model is preferable.

## Real student questions

**Is pitch always the strongest frequency?**
No. Pitch is usually organised around [[f1]], even when another harmonic has greater [[An]]. That is why a fundamental pitch can be perceived even if the first component is weak.

**Do two instruments playing the same note have the same wave?**
No. They share [[f1]], but differ in [[An]] and in the time shape of [[p_total]]. That spectral and temporal difference is timbre.

## Cross-cutting connections and study paths

Understanding pitch and timbre as harmonic spectra is the prerequisite for the [Doppler effect](leaf:fisica-clasica/ondas/sonido/efecto-doppler) leaf, where the perceived [[f1]] changes due to relative motion, and for the resonance leaf, where certain harmonics are selectively amplified by the dimensions of the resonator.

The concept of the Fourier series connects directly with the [standing waves](leaf:fisica-clasica/ondas/ondas-estacionarias) block, where the normal modes of a string or tube are exactly the harmonics of the sound. Each vibration mode contributes a harmonic component to the instrument's spectrum.

From a mathematical perspective, this leaf is the introduction to the discrete Fourier transform, which at university level is developed with the DFT and FFT, fundamental tools of digital signal processing.

## Final synthesis

Pitch is the perceptual correlate of [[f1]]: it determines the musical note. Timbre is the perceptual correlate of the amplitude spectrum [[An]]: it determines the instrumental colour. Both coexist in the total acoustic signal [[p_total]], whose decomposition into harmonics via the Fourier series reveals that all periodic sounds are sums of sinusoids at integer-multiple frequencies of [[f1]]. The harmonic spectrum is the acoustic fingerprint of each sound source.
`;export{e as default};
