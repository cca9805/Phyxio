const e=`## 1. Acoustic design of musical instruments

Luthiers and wind instrument makers design the geometric shape of the resonator (tube, wooden body, metal bell) to select which harmonics of [[f1]] are amplified and with what relative amplitude. The tube length determines [[f1]], but the tube shape (cylindrical vs conical) determines which harmonic series is present: a closed cylindrical tube produces only odd harmonics; a conical tube or open tube produces all harmonics.

The designer adjusts cuts, wood thickness, hole position and size, and bell shape to modify the spectral envelope [[An]]. The timbre difference between an oboe and a bassoon, both double-reed instruments, is partly due to the different tube shapes, which select different amplitude ratios among the harmonics of the same note.

Dominant variable: the harmonic number [[n_arm]] and the amplitudes [[An]] of the resonant modes, determined by the resonator geometry.
Validity limit: the harmonic Fourier series model describes the sustained sound well. During attack (note onset), the spectrum is transient and [[An]] varies rapidly; in that regime, the spectrogram is more appropriate than the static spectrum.

## 2. Audio compression: MP3 and AAC

Lossy audio compression algorithms (MP3, AAC, Opus) exploit the harmonic structure of sound and the limits of auditory perception to reduce file size with minimal perceptible loss. For each time segment of audio, they calculate the amplitude spectrum [[An]] as a function of [[fn]] using a short-time Fourier transform.

They then apply two strategies: they eliminate harmonics [[fn]] whose [[An]] is below the hearing threshold in the presence of more intense components (auditory masking), and encode the remaining [[An]] with fewer bits than an uncompressed representation would use. The harmonic redundancy of musical sound (many cycles of the same [[f1]] with the same [[An]]) makes these strategies highly effective.

Dominant variable: the amplitude of each harmonic component [[An]], whose ratio to masking components determines whether it can be removed without perceptible loss.
Validity limit: auditory masking fails for fast transient signals (castanets, sharp percussion) and for listeners with high-resolution equipment and fine auditory training. For these cases, higher bit rates or lossless coding are used.

## 3. Voice synthesis and processing in telecommunications

Voice codecs (G.711, G.729, AMR, Opus in voice mode) represent the speech signal through its spectral parameters: [[f1]] of voiced speech (between 80 and 300 Hz for adults), the amplitudes [[An]] of the first harmonics, and the position and amplitude of formants (spectral concentrations due to vocal tract resonance).

Transmitting only these parameters instead of the complete waveform reduces the required bandwidth from 64 kbps (uncompressed PCM) to 8 or 4 kbps (G.729) or less than 1 kbps (parametric models). At the receiver, a synthesiser reconstructs [[p_total]] from the received parameters, recreating the voice timbre with approximate [[f1]] and [[An]].

Dominant variable: the fundamental voice frequency [[f1]], which determines the perceived pitch of speech, and the distribution of [[An]] at the formants, which determines the intelligibility and character of the vocal timbre.
Validity limit: low-rate codecs lose quality with voices having much vibrato, whispers (non-periodic voice, [[f1]] undefined), and fricative consonant sounds (s, f, sh), which have no harmonic structure and require noise coding.

## 4. Industrial machinery diagnosis by spectral analysis

Rotating machines (motors, turbines, bearings) produce mechanical vibrations transmitted to the surrounding medium as sound. The amplitude spectrum of that vibration contains lines at [[f1]] equal to the rotation frequency and harmonics at multiples of [[f1]]. The pattern of [[An]] at each harmonic is the acoustic fingerprint of the mechanical state of the machine.

A worn bearing or one with a localised defect generates a series of periodic impulses at a [[f1]] characteristic of the fault type, superimposed on the background spectrum. A trained maintenance technician or an automatic monitoring system detects the appearance of that [[f1]] and the growth of its [[An]] over time as an early warning signal, before the failure becomes catastrophic.

Dominant variable: the fundamental frequency [[f1]] of the fault signal, which identifies the defective component (its possible values are calculated from the bearing geometry and rotation speed).
Validity limit: static spectral analysis assumes that the rotation speed is constant during the measurement. If the machine is accelerating or decelerating, spectral lines broaden or shift, and the time-frequency spectrogram or short-time Fourier transform is needed.

## 5. Automatic instrument recognition and timbre identification

Automatic music analysis systems (Music Information Retrieval, MIR) identify which instrument is playing from the audio signal. The algorithm extracts the vector of amplitudes [[An]] of the first N harmonics in each time window, forming a spectral representation. That vector is compared with learned models of each instrument using machine learning classifiers.

The system's ability to distinguish instruments with similar timbres (oboe vs cor anglais, violin vs viola) depends directly on the precision with which [[An]] and [[f1]] are estimated from the signal. Errors in estimating [[f1]] (especially when multiple instruments are sounding simultaneously) are the main problem for these systems, because if [[f1]] is incorrectly estimated, all associated [[n_arm]] and [[An]] are shifted.

Dominant variable: the vector of harmonic amplitudes [[An]] for n from 1 to N, which is the quantitative timbre representation used as input feature to the classifier.
Validity limit: the system assumes that in each time window there is a single instrument with a single [[f1]]. With polyphony (multiple simultaneous notes) or instrument mixtures without prior separation, estimating [[f1]] and [[An]] per individual instrument requires source separation algorithms, whose reliability decreases rapidly with the number of simultaneous sources.
`;export{e as default};
