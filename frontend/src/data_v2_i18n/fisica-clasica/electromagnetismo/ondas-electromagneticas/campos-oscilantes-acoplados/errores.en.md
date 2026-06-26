## Conceptual errors


### Error 1: Believing that electromagnetic waves need a material medium to propagate

**Why it seems correct**
It arises from an incorrect analogy with ordinary mechanical waves (such as sound or water waves), where vibration strictly requires material particles to collide in order to transmit energy from one point to another.

**Why it is incorrect**
Electromagnetic radiation is not a physical vibration of atoms, but the self-induced oscillation of electric fields [[amplitud_del_campo_electrico]] and magnetic fields [[amplitud_del_campo_magnetico]] in empty space. According to the laws of electromagnetism, a time-varying field mutually and perpetually induces the other without depending on matter.

**Detection signal**
Attempting to search for a particle density term or elastic modulus of the medium when calculating the speed of light [[velocidad_de_la_luz_en_el_vacio]].

**Conceptual correction**
Light and other electromagnetic waves propagate autonomously thanks to the dynamic coupling of their fields. The presence of matter actually reduces their speed.

**Contrast mini-example**
If light needed a material medium, the interstellar vacuum would completely block all radiation from the Sun, leaving us in instant absolute darkness. However, sunlight travels 150 million kilometers through pure vacuum to reach Earth.

## Model errors

**Mini-example of contrast**

Check 1: In Coupled Oscillating Fields, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Assuming that the wave is strictly plane in the vicinity of the emitter

**Why it seems correct**
It is an appealing simplification because it allows us to model infinite parallel wavefronts with constant amplitude, greatly simplifying calculations by avoiding geometric decay terms.

**Why it is incorrect**
Any real physical emitter (such as a dipole or an antenna) produces curved or spherical wavefronts in its vicinity (near field). Violating this hypothesis leads to ignoring that the intensity drops drastically at short distances.

**Detection signal**
Obtaining measurements where the electric field amplitude decreases inversely with radial distance \(1/r\), which is incompatible with the constant amplitude of the plane model.

**Conceptual correction**
The plane wave model is only a far-field approximation. For short distances to the source, we must use the spherical wave model.

**Contrast mini-example**
If a 1 W WiFi antenna emitted a perfectly infinite plane wave, the signal intensity would be identical at 1 meter and 10 kilometers away, allowing infinite coverage with zero power decay, which violates the conservation of energy.

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Treating the electric and magnetic amplitudes as numerically equivalent quantities

**Why it seems correct**
It stems from a confusion of magnitudes since both fields carry exactly the same amount of energy in each cycle of the wave, inducing the thought that their amplitudes must be numerically equal.

**Why it is incorrect**
In the International System of Units, the electric field [[amplitud_del_campo_electrico]] (in volts per meter) and the magnetic field [[amplitud_del_campo_magnetico]] (in teslas) are scaled by the immense constant of the speed of light [[velocidad_de_la_luz_en_el_vacio]]. This causes a large asymmetry in their numerical values.

**Detection signal**
Obtaining numerical results where the magnetic amplitude [[amplitud_del_campo_magnetico]] is of the same order of magnitude as the electric amplitude [[amplitud_del_campo_electrico]] (e.g., obtaining a magnetic field of 10 T for an electric field of 10 V/m).

**Conceptual correction**
Always use the relation [[amplitud_del_campo_electrico]] = [[velocidad_de_la_luz_en_el_vacio]] [[amplitud_del_campo_magnetico]]. The numerical value of the magnetic field in the SI will always be minuscule compared to the electric field.

**Contrast mini-example**
If you calculate an ordinary wave with electric field \(30\,\mathrm{V/m}\) and assume that the magnetic field is also \(30\,\mathrm{T}\), you would be describing a colossal magnetic field capable of collapsing ordinary matter and destroying any nearby electronic device. The correct value is \(10^{-7}\,\mathrm{T}\).

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Thinking that the electric and magnetic fields are temporally out of phase

**Why it seems correct**
It arises from an erroneous interpretation of induction, suggesting that the creation of one field from the other requires a "time delay", which would shift one phase relative to the other.

**Why it is incorrect**
In a free plane wave in a vacuum, the spatial and temporal coupling of partial derivatives in Maxwell's equations dictates that the maxima and minima of both fields coincide in strictly simultaneous phase.

**Detection signal**
Finding graphical representations or analytical data where the magnetic field crosses zero when the electric field is at its maximum value.

**Conceptual correction**
Both [[amplitud_del_campo_electrico]] and [[amplitud_del_campo_magnetico]] reach their maxima, minima, and zeros in perfect temporal and spatial synchrony in a free plane wave.

**Contrast mini-example**
If they were 90 degrees out of phase, the net energy flow defined by the Poynting vector would oscillate back and forth with an average of zero, preventing any effective energy transport through space.

## Quick self-control rule

Before accepting any calculation or analysis, apply this infallible operational rule: always multiply the found value of the magnetic field [[amplitud_del_campo_magnetico]] by the speed of light scale factor \(3 \cdot 10^8\,\mathrm{m/s}\). The result obtained must be identical to the value of your electric field [[amplitud_del_campo_electrico]]. If they do not match by this immense scale factor, you have committed an algebraic or units error.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.