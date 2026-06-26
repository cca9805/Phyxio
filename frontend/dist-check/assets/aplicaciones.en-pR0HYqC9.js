const e=`## 1. Acoustic interference in rooms

Phase is decisive when two sounds of the same frequency arrive at the same point through different paths. The ear does not receive separate intensities only; it receives the sum of pressures at each instant. If the signals arrive almost in phase, maxima coincide and sound is reinforced. If they arrive almost in opposition, a positive pressure may coincide with a negative one and the sound weakens.

Dominant variable: [[Delta_phi]], because it determines whether two arrivals reinforce or partially cancel.

Validity limit: the tone must be sufficiently stable and the sources must keep coherence during the listening time.

In a real room, moving a loudspeaker by a few centimetres can change the phase difference for audible frequencies. At low frequencies, wavelengths are large and spatial phase changes slowly. At higher frequencies, a small separation can represent an important fraction of the cycle. That is why phase helps explain zones where a note seems to disappear even though the loudspeakers work correctly.

The practical reading is not to blame equipment power first. If one region loses particular bass or mid frequencies, the cause may be [[Delta_phi]] between direct and reflected arrivals.

## 2. Two microphones and delay measurement

In recording and acoustic measurement, two separated microphones register the same wave with a phase difference. That difference helps estimate whether a signal arrived earlier at one microphone than at the other. The reading is not reduced to amplitude: two signals with similar amplitude can combine poorly if the phase difference is large.

Dominant variable: [[omega]], because the same temporal delay produces more phase difference when angular frequency is higher.

Validity limit: the source must emit an almost periodic signal or a narrow band where phase has stable meaning.

A practical use is aligning microphones on a drum kit or in a sound-wave laboratory. If two records of the same note arrive with phase difference near opposition, mixing them can lose acoustic energy. By correcting delay or changing position, one tries to bring [[Delta_phi]] closer to an in-phase reading for the frequency of interest.

This is why phase is part of measurement quality. A beautiful waveform on each individual channel may still combine poorly when both channels are added.

## 3. Waves on strings and synchronization of points

On a vibrating string, phase compares different points of the profile. Two points separated by one full wavelength oscillate equivalently; two points separated by half a wavelength move in opposition in a simple sinusoidal wave. This reading is finer than saying that the string goes up or down, because it identifies synchronization.

Dominant variable: [[k]], because it converts spatial separation into phase difference.

Validity limit: the string must behave approximately as a uniform medium with one dominant harmonic component.

In a school experiment, a string can be illuminated and two points marked. If both reach crests at the same time, their phase difference is equivalent to a full cycle or to zero in the comparison. If one reaches a crest when the other is in a trough, phase reveals opposition. This application prepares the reading of standing waves and normal modes.

The same reasoning helps distinguish a traveling wave from a standing pattern. In a traveling wave, a phase label moves; in a standing wave, fixed points may keep special phase relations.

## 4. Alternating electrical signals

In alternating current, phase compares sinusoidal voltages and currents. Although this leaf is about waves, the physical idea is the same: two periodic signals may have the same rhythm and still be leading or lagging. That phase difference affects power, resonance, and energy transfer.

Dominant variable: [[phi]], because it labels the instantaneous state of each signal within the cycle.

Validity limit: the signals must be sufficiently sinusoidal; if distortion is strong, harmonics should be analyzed separately.

In a circuit with reactive components, current may not reach its maximum at the same time as voltage. Phase describes that delay without confusing it with smaller amplitude. A small in-phase current can transfer energy differently from a larger strongly shifted current. For that reason, phase becomes a diagnostic tool, not only a mathematical label.

The wave language remains useful because it separates rhythm, size, and synchronization. That separation is exactly what the phase concept was built to provide.

## 5. Optics, lasers, and interferometry

Phase is central in coherent optics. In interferometry, a very small path difference can change the observed pattern because the wavelength of light is tiny. Phase converts microscopic displacements into measurable intensity changes.

Dominant variable: [[v_phi]], because it fixes how a phase advances in the medium and changes when material changes.

Validity limit: sufficient coherence and a well-defined frequency are required; broad white light requires many components to be treated.

An interferometer can detect distance changes far below a millimetre by observing bright and dark fringes. When one optical arm changes length, [[Delta_phi]] changes and the fringes shift. The application shows the physical power of phase: it is not measured directly like a ruler, but it controls observable signals with very high sensitivity.

This sensitivity is also a limitation. Vibrations, temperature changes, and loss of coherence can move the phase enough to hide the effect being measured.
`;export{e as default};
