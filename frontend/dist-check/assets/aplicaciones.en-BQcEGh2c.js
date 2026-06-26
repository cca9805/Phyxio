const e=`## 1. Tuning of string instruments

Musicians use the harmonic relationship to tune instruments. The tuning fork produces a reference frequency (typically A 440 Hz), which the musician compares with the corresponding string on their instrument. By adjusting the string tension through the pegs, they modify the propagation velocity [[v]], proportionally shifting all harmonic frequencies according to the relationship the harmonic frequency growing proportionally to the square root of tension.

The modern electronic tuner analyzes the harmonic spectrum of the signal captured by microphone, identifying the fundamental frequency [[f_1]] regardless of the instrument's timbre. This allows precise tuning even in noisy environments where the fundamental might be masked.

Dominant variable: String tension directly controls propagation velocity and therefore all frequencies in the harmonic series.

Validity limit: The linear wave model remains valid as long as oscillation amplitude is small compared to string length; excessive vibrations introduce nonlinearities that momentarily detune the instrument. Professional musicians develop tactile sensitivity to detect when a string approaches its elastic limit.

## 2. Musical instrument design

Instrument builders (luthiers) apply harmonic laws to determine string lengths, tensions and materials. In a piano, the bass strings are longer and thicker to produce low frequencies; the treble strings are short and thin. The relationship between fundamental frequency, velocity and length indicates that [[f_1]] increases with [[v]] and decreases when [[L]] increases, determining the necessary length scales to cover the complete range from 27.5 Hz to 4186 Hz.

The phenomenon of inharmonicity (deviation of frequencies from the pure series due to string stiffness) obliges piano tuners to "stretch" the tuning octave by octave, compensating for the fact that upper harmonics of thick strings sound slightly sharper than predicted by the ideal model.

Dominant variable: String length [[L]] determines the fundamental frequency for a given propagation velocity, being the most direct geometric parameter in design. The exponential scale of string lengths in a piano follows logarithmic frequency spacing across the keyboard.

Validity limit: For very thick strings (such as piano bass strings), the ideal string model ceases to correctly describe upper harmonics due to inherent stiffness, requiring extended models that include bending moment.

## 3. Timbre analysis and sound synthesis

Synthesizers and audio processors use the harmonic model to recreate string instrument sounds. The characteristic timbre of each instrument comes from the specific distribution of amplitudes among its harmonics. A violin has a different proportion of harmonics than a guitar, allowing the ear to distinguish them even when playing the same fundamental note.

Additive synthesis generates complex sounds by summing pure sinusoids at frequencies where [[f_n]] follows the series set by [[n]] and [[f_1]], with independently controlled amplitudes. Subtractive synthesis, on the other hand, begins with a spectrum rich in harmonics (such as a sawtooth wave) and filters out unwanted components.

Dominant variable: The harmonic number [[n]] and its relative amplitude determine the spectral content and therefore the perceived timbre of the synthesized sound.

Validity limit: Purely harmonic synthesis works well for string and wind instruments, but instruments with inharmonic components (bells, percussion, ethnic instruments with complex structures) require models that include frequencies not integer multiples of the fundamental.

## 4. Non-destructive structural testing

Modal analysis technique uses harmonic principles to evaluate the structural integrity of mechanical elements. By exciting a beam or cable with a controlled impact and analyzing the vibration frequencies it emits, engineers can detect damage: a crack or localized corrosion modifies the mass and tension distribution, shifting harmonic frequencies from the reference values of the healthy structure.

Cable-stayed bridges and electricity transmission towers are periodically monitored by analyzing the vibration frequencies of their stays. A significant change in harmonic frequencies indicates loss of tension, material fatigue or structural damage requiring inspection.

Dominant variable: Propagation velocity [[v]], which depends on tension and material properties, determines the harmonic frequencies measured in the modal test. Engineers calibrate sensors to detect frequency shifts as small as one percent.

Validity limit: The method requires that the structure behave approximately as a linear system with defined boundary conditions; structures with very high damping or complex nonlinear behavior make interpretation of modal results difficult.

## 5. Telemedicine and vocal diagnosis

Analysis of the harmonic components of the human voice (LPC spectrum or Fourier analysis of the voice signal) provides diagnostic information about vocal cord health. The vocal cords are, physically, a pair of biological strings that vibrate in harmonic modes when expired air excites them.

Pathologies such as nodules, polyps or unilateral paralysis alter the symmetry and tension of the vocal cords, modifying the characteristic harmonic spectrum. Computerized voice analysis (CVA) measures the relationship between harmonics and fundamental frequency to detect dysphonias non-invasively, complementing traditional otorhinolaryngological evaluation.

Dominant variable: The fundamental frequency [[f_1]] and the ratio between consecutive harmonic amplitudes (HNR, Harmonic-to-Noise Ratio) indicate the periodicity and quality of vocal cord vibration.

Validity limit: The simple harmonic model adequately describes modal voice (normal speech or singing), but operatic voice, Tibetan multi-tone singing, or severe pathologies generate complex spectra where harmonics do not follow a purely linear progression.
`;export{e as default};
