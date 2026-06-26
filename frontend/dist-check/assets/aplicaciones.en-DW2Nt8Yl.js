const e=`## 1. Active noise cancellation in headphones

Active noise-cancelling headphones measure external noise and emit a secondary signal that reaches the ear in opposite phase. The application is local: it reduces intensity near the eardrum, not throughout the room.

The dominant assumption is that the noise has components stable enough for [[delta_phi]] to be controlled. The system adjusts the secondary amplitude to balance [[I1]] and [[I2]], because phase opposition alone does not guarantee a deep minimum.

The engineering decision is to measure the residual error continuously. If the user moves their head, the effective geometry changes and the system must correct the phase offset before the minimum shifts away from the ear.

This is why adaptive filters are used: the device is not applying a fixed silence recipe, but tracking a moving destructive condition in real time.

Dominant variable: [[I_resultante]] in the ear region, because it expresses the residual intensity perceived by the user.
Validity limit: effectiveness decreases for impulsive hits, changing speech, or noise arriving from many directions without stable phase.

## 2. Antireflection coatings on lenses

A thin coating on a lens can make two light reflections cancel for a selected colour. The first and second reflected waves accumulate different phases; if they reach the observer in opposition, visible reflection decreases.

The useful simplification is to consider a uniform thickness and a well-defined [[lambda]] inside the material. In a real lens, refractive index, angle of incidence, and light spectrum shift the minimum, so the treatment is optimized for a band rather than for all colours equally.

The practical reading is selective. A coating may reduce green reflections on a photographic lens while leaving bluish or reddish residual reflections. That colour is not a conceptual defect; it shows that cancellation was designed for a particular phase scale.

Dominant variable: optical [[Delta_r]] accumulated in the film, because it fixes phase opposition for a particular wavelength.
Validity limit: the two-wave description becomes insufficient when light is very polychromatic, the angle changes strongly, or several layers introduce coupled reflections.

## 3. Quiet zones in rooms with two loudspeakers

In a room, two loudspeakers reproducing the same tone can create points where sound drops noticeably. As the listener walks, [[Delta_r]] relative to the two loudspeakers changes, and the listener crosses minima and maxima.

The application must not be confused with acoustic absorption. Energy does not disappear at the quiet point; it is spatially redistributed. A useful diagnosis is to change frequency: when [[lambda]] changes, low-volume zones shift.

This reading matters in sound reinforcement. Placing loudspeakers without phase control can create seats with poor intelligibility even when total installed power is high. Delay adjustment or source relocation aims to avoid destructive minima in critical audience regions.

Dominant variable: [[Delta_r]] between the listener and the two loudspeakers, because it determines whether the tone arrives in phase opposition.
Validity limit: reflections from walls, furniture, and ceiling can dominate over direct paths and require a room-mode model.

## 4. Interferometry for measuring small displacements

An interferometer splits a coherent beam into two paths and recombines them. If a mirror moves, [[Delta_r]] changes and the output can pass through destructive minima. Counting those minima allows very small displacements to be inferred.

The working assumption is that the laser preserves coherence and that the mechanical setup does not introduce vibrations comparable to the measured displacement. The advantage is that a fraction of [[lambda]] already modifies the observed intensity, making destructive interference a fine metrology tool.

The minimum has operational value because a photodiode can detect a signal drop very easily. Instead of measuring a tiny distance directly with a ruler, the displacement is translated into accumulated phase changes in the beam.

Dominant variable: [[I_resultante]] at the detector, because its minima mark phase-opposition positions.
Validity limit: vibrations, thermal changes in air, or coherence loss shift minima and contaminate the measurement.

## 5. Signal nulls in antennas and communications

In antennas, several paths of a radio wave can reach the receiver with opposite phases. The result is a signal null: received power falls even when the transmitter is operating correctly.

The physical interpretation uses the same idea of [[delta_phi]] and comparable amplitudes. In urban environments, reflections from buildings produce multiple paths; some add and others cancel. This is why slightly moving a receiver can greatly improve signal.

In mobile networks, these nulls explain sudden losses when moving a few centimetres or changing the orientation of the device. Diversity techniques and antenna arrays try to ensure that, if one path cancels, another still carries useful signal.

The same idea guides site surveys, where engineers map weak spots and adjust antenna placement before users experience unstable links.

Dominant variable: [[I_resultante]] received by the antenna, because it summarizes the useful electromagnetic intensity after superposition.
Validity limit: when there are many changing paths, fast motion, or broad bandwidth, a statistical channel model is needed instead of only two coherent waves.
`;export{e as default};
