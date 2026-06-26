## 1. Active noise cancellation

Active noise-cancelling headphones measure an external acoustic disturbance and generate another nearly opposite disturbance. Superposition aims to reduce [[y_resultante]] near the ear, not to remove sound everywhere. Phase precision is as important as amplitude.

Dominant variable: local acoustic [[y_resultante]], because it measures the residual pressure reaching the ear.
Validity limit: fails if noise changes too fast, if the sensor is misplaced, or if the speaker response does not keep phase.

The practical reading is not absolute silence, but an estimate of what remains after adding the external wave and the generated wave. If the low-frequency noise has stable amplitude, a clear reduction of [[y_resultante]] shows that the linear model is working. If head position changes or an impulsive source appears, the phase no longer matches and the cancellation becomes partial. For that reason the control must adjust continuously instead of acting as a fixed correction.

## 2. Room and auditorium design

In a room, direct and reflected sound waves superpose. At some seats they reinforce and at others they reduce, producing uneven sound zones. Acoustic design controls geometry and materials so that the local sum remains stable.

Dominant variable: perceived [[I_relativa]], because it summarizes whether a zone receives reinforcement or cancellation.
Validity limit: the simple model is insufficient with strong absorption, complex reverberation, or incoherent sources.

In professional use, the response is measured at many points in the room. Two seats separated by a short distance can have different [[I_relativa]] if reflections arrive with different phases. Superposition explains why moving a panel, changing a material, or delaying a loudspeaker modifies the local listening experience. The design decision does not come from one ideal sum, but from comparing many local sums and avoiding zones that are excessively reinforced or weakened.

## 3. Optical interferometry

An interferometer splits a light beam into two paths and recombines them. The final reading depends on field superposition, so small path changes produce large brightness changes. This sensitivity allows extremely small displacements to be measured.

Dominant variable: [[A_resultante]] of the recombined field, because it controls observed relative brightness.
Validity limit: requires coherence; if the source loses stable phase, the pattern washes out.

The metrological value appears because a very small path variation changes the relative phase before the beams recombine. That change modifies [[A_resultante]] and therefore the brightness recorded by the sensor. The operator does not observe the displacement directly, but a consequence of field addition. The application requires vibration isolation, temperature control, and stable alignment; otherwise the reading no longer represents the change that was intended to be measured.

## 4. Pulses on strings and cables

In wave laboratories, two pulses on a string cross and clearly show the local sum. The experiment reveals that waves do not collide like objects, but pass through each other and recover their shape after crossing.

Dominant variable: string [[y_resultante]], because it is the visible displacement at each point.
Validity limit: fails if the pulse is so large that it changes tension or produces non-elastic deformation.

This application is especially useful in teaching because it separates observation from permanence. During the crossing, the student measures a larger, smaller, or nearly zero [[y_resultante]] depending on the signs of the pulses. After the crossing, each pulse continues almost unchanged if the string responds linearly. The physical estimate is to compare height before, during, and after the encounter. If the shape does not recover, the simple model has stopped describing the system.

## 5. Antennas and emitter arrays

In antenna arrays, many emissions superpose to direct energy toward some directions and reduce it in others. Field addition controls the angular pattern and enables more efficient communications.

Dominant variable: [[A_resultante]] of the combined field, because it decides the direction of maximum signal.
Validity limit: requires controlled phase between emitters and an approximately linear medium.

In telecommunications, superposition is used to concentrate reception or emission without mechanically moving the antenna. By adjusting phases between elements, one direction adds with large [[A_resultante]] while another is attenuated. The quantitative reading is made by comparing received power by direction, not by inspecting each emitter alone. The limit appears with strong multipath, synchronization errors, or elements with different responses; then the real pattern departs from the ideal sum.

Taken together, these applications show that superposition is not a generic phrase about "adding waves". It is an operational criterion: identify compatible contributions, estimate their local sum, read the observable magnitude, and check that the medium remains linear. When those conditions are clear, the same leaf supports noise diagnosis, room design, displacement measurement, classroom experiments, and signal steering. When they are not clear, the sum may still be a useful approximation, but it must be stated as an approximation rather than a universal law.

This is why every application keeps a dominant variable and a validity limit visible.
