const e=`## Conceptual errors

### Error 1: Confusing pitch with loudness

**Why it seems correct**

In everyday language, "turning the volume down" can be confused with "lowering the pitch". Moreover, a very soft sound appears slightly lower in pitch than a loud one, a real effect known as the Fletcher-Munson effect. This apparent correlation suggests that pitch and loudness are the same thing.

**Why it is incorrect**

Pitch is the perceptual correlate of [[f1]]; loudness is the perceptual correlate of the global [[An]] or pressure amplitude. They are physically independent quantities: a loud flute note is still high-pitched, and a quiet cello is still low-pitched. The perceived correlation in extreme cases (Fletcher-Munson effect) is a secondary psychoacoustic distortion, not a fundamental physical law.

**Detection signal**

The student claims that "increasing the volume raises the pitch", or calculates [[f1]] from the signal amplitude instead of measuring the period or the spectrum.

**Conceptual correction**

[[f1]] determines pitch; [[An]] determines loudness. To change pitch, the vibration frequency of the source must change; to change loudness, the amplitude of the oscillations must change. Both parameters are independent.

**Contrast mini-example**

A 440 Hz tuning fork struck softly and struck hard produces the same pitch (A4) at different volumes. If pitch depended on loudness, the hard-struck fork would sound like a different note, which does not happen.

---

### Error 2: Believing that timbre is simply "the instrument"

**Why it seems correct**

The usual operational definition is "timbre is what distinguishes two instruments playing the same note". This definition correctly describes the perceptual effect, but does not explain the physical mechanism, leaving the student without a tool to quantify or modify it.

**Why it is incorrect**

Timbre is a quantifiable physical property: it is the distribution of amplitudes [[An]] in the Fourier series of the sound. Two instruments with different timbres have different amplitude spectra. This means timbre can be measured, represented in a Coord graph, compared numerically, and modified through filters or synthesis. It is not a subjective category without physical substrate.

**Detection signal**

The student cannot describe what changes physically between a violin and a flute beyond "they sound different", or claims that timbre cannot be represented or calculated.

**Conceptual correction**

Timbre corresponds to the harmonic amplitude spectrum [[An]]. A sound with only the fundamental has the timbre of a pure sinusoid (soft, without brightness). Adding amplitudes in higher harmonics adds brightness, roughness, or warmth, depending on which harmonics are enhanced. The spectrogram of an instrument is the objective fingerprint of its timbre.

**Contrast mini-example**

If an oboe is electronically filtered to remove harmonics above the fifth, the resulting timbre resembles that of a flute. Two different instruments become perceptually similar by modifying the amplitude spectrum. This proves that timbre resides in the spectrum, not in the nature of the instrument as a category.

## Model errors

### Error 1: Assuming the sum of two sounds of equal frequency always gives double amplitude

**Why it seems correct**

Linear superposition says signals add. If two sinusoids of equal frequency and amplitude [[An]] are summed, it seems natural that the resulting amplitude is double. In many contexts this is correct and gives the impression of being a general rule.

**Why it is incorrect**

The amplitude of the sum depends on the **relative phase** of the two signals. If they are in phase (zero phase difference), amplitude doubles. If they are in antiphase (180° phase shift), the signals cancel and total amplitude is zero. For intermediate phases, the resulting amplitude can take any value between zero and twice the individual amplitude. This error leads to incorrect intensity predictions in superposition and interference problems.

**Detection signal**

The student directly sums the amplitudes [[An]] of two harmonics of equal frequency to obtain the total amplitude, without considering relative phase.

**Conceptual correction**

To sum two sinusoids of equal frequency, the vector sum of their complex amplitudes must be used (or equivalently, the cosine rule: the resulting amplitude depends on the square of the sum plus twice the product of the amplitudes times the cosine of the phase difference).

**Contrast mini-example**

Two loudspeakers emit the same pure tone at equal amplitude. At certain points in the room (destructive interference), nothing is heard; at others (constructive interference), the volume is maximum. If the sum were always double the amplitude, there would be no silent points, which contradicts everyday experience in rooms with poor acoustics.

### Error 2: Applying the harmonic Fourier series to inharmonic sounds

**Why it seems correct**

The Fourier series is taught as a universal tool for decomposing any periodic signal. If the student hears "universal" they understand "always applicable", including bells, xylophones, and percussion in general.

**Why it is incorrect**

The harmonic Fourier series assumes that spectral components are integer multiples of [[f1]]. Bells and other plate percussion instruments have inharmonic partials: their spectral components do not satisfy the relation [[fn]] equal to n times [[f1]]. Applying the harmonic series to a bell produces an "apparent" [[f1]] that does not correspond to any real component of the sound, and the frequencies calculated for higher harmonics do not match the real spectral frequencies.

**Detection signal**

The student identifies an [[f1]] and calculates harmonic frequencies, but when compared with the measured spectrum, the calculated harmonics do not coincide with the real spectral lines.

**Conceptual correction**

For inharmonic sounds, the spectrum must be described with the actual frequencies and amplitudes of each partial, without requiring them to be integer multiples of any fundamental. The perceived pitch in these sounds, if it exists, results from complex psychoacoustic mechanisms, not from the presence of a physical fundamental.

**Contrast mini-example**

A church bell has partials at frequencies that are not integer multiples of each other. If the harmonic series is applied and the "fundamental" is calculated as the greatest common divisor of the measured frequencies, the result may be a very low frequency that is not actually present in the bell's spectrum, giving an incorrect prediction of its "note".

## Mathematical errors

### Error 1: Confusing harmonic number with overtone number

**Why it seems correct**

In musical acoustics two terminologies are used: harmonics, which count the fundamental as the first component, and overtones, which start counting from the component above the fundamental. The inconsistency between terminologies creates confusion especially when studying sources with only odd harmonics.

**Why it is incorrect**

If overtone number is confused with harmonic number, the calculated frequency will be (n+1) times [[f1]] instead of n times [[f1]] for overtone n. For the second overtone (third harmonic) in a clarinet, the real frequency is 3 times [[f1]], not 2 times [[f1]]. The error shifts the entire calculated spectrum and produces incorrect frequencies.

**Detection signal**

The spectrum calculated by the student is shifted by one factor relative to the measured one; the first calculated component coincides with the second real spectral line.

**Conceptual correction**

Always use harmonic nomenclature: harmonic 1 is the fundamental at frequency [[f1]]; harmonic n has frequency n times [[f1]]. If the problem uses "overtones", overtone n corresponds to harmonic (n+1).

**Contrast mini-example**

A clarinet playing C3 has [[f1]] of 131 Hz and produces odd harmonics. The first overtone of the clarinet is its second acoustic overtone, i.e., the third harmonic, at 393 Hz. If the student calls it "first overtone equals second harmonic" but calculates the frequency as 2 times [[f1]] (262 Hz), they get an incorrect result that does not correspond to any real component of the clarinet.

## Interpretation errors

### Error 1: Reading perceived pitch as the highest-amplitude frequency in the spectrum

**Why it seems correct**

The most intense harmonic dominates the sound energy, and it seems reasonable that the ear uses it as a pitch reference. Moreover, in many instruments the fundamental is indeed the highest-amplitude harmonic, reinforcing the association.

**Why it is incorrect**

The perceived pitch corresponds to [[f1]], the lowest frequency in the spectrum, not the highest-amplitude one. In instruments where the fundamental has small amplitude (or is entirely absent due to the missing fundamental phenomenon), the ear infers [[f1]] from the spacing between higher harmonics. If pitch is identified with the most intense harmonic, an incorrect note is obtained for these instruments.

**Detection signal**

The student identifies the pitch of a note with the tallest spectral line in the graph, instead of identifying [[f1]] as the lowest-frequency line or the greatest common divisor of the frequencies present.

**Conceptual correction**

Pitch always corresponds to [[f1]], the lowest frequency of the harmonic pattern. To identify it from the spectrum, find the first visible line or calculate the greatest common divisor of the frequencies of all lines.

**Contrast mini-example**

A tuba playing a low C may have harmonic 2 or 3 more intense than the fundamental, because the instrument's resonator attenuates the fundamental in that register. If the student reads pitch as the frequency of the most intense harmonic, they assign to the instrument a note two or three times higher than the one actually being played.

## Quick self-control rule

Before declaring a pitch-and-timbre calculation valid, verify:

1. Has [[f1]] been identified as the frequency of the first spectral line or the greatest common divisor of all frequencies present, and not as the highest-amplitude one?
2. Are the calculated harmonic frequencies exact integer multiples of [[f1]]? If not, the sound may be inharmonic.
3. Has the harmonic number [[n_arm]] been counted from 1 (fundamental), not from the first overtone?
4. Are all the obtained amplitudes [[An]] non-negative?
5. Does the calculated period [[T_per]] equal the inverse of [[f1]]?

If any of these checks fails, the spectral analysis is compromised at its foundation.
`;export{e as default};
