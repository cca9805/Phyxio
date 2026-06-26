const e=`## 1. Magnetic brakes in trains and rides

A magnetic brake uses Lenz's law to convert motion into induced currents opposing relative motion. A conductor moves in a field and flux linked by internal paths changes. The induced current generates magnetic effects that brake the system.

The dominant hypothesis is that the conductor allows induced currents and that the field is sufficiently stable. If temperature strongly changes resistance, braking intensity changes even though the sign rule remains the same.

The design decision is not only to increase the field. Heating, speed, distance to magnets, and system mass must also be controlled. Lenz fixes the direction of force; the rest of the model fixes how much braking occurs.

Safety depends on that separation. In a ride, braking should grow with speed and not depend on mechanical contact that may wear out. Lenz gives a passive response: the more motion tries to change flux, the larger induced opposition becomes inside the design range.

Dominant variable: sign and rate of flux change produced by motion.
Validity limit: invalid if heating, saturation, or nonuniform geometry dominates the response.

## 2. Electric generators

In a generator, a coil rotates in a field or a field changes relative to a coil. Lenz's law determines emf polarity during each part of rotation. When flux begins to increase, emf is oriented against that increase; when it decreases, polarity reverses.

The dominant simplification is that flux changes regularly and turns are equivalent. In real generators, coil shape, brushes, commutators, and load modify the output waveform.

This application shows why generating electricity requires mechanical work. Induced current under load opposes the motion changing flux, so the prime mover must continuously supply energy.

Without this opposition, a generator could produce current without increasing mechanical effort, violating energy conservation. In practice, connecting a load makes the generator harder to turn because induced current increases its magnetic reaction.

Dominant variable: polarity of [[epsilon_ind]] relative to the sign of [[r_Phi]].
Validity limit: invalid if load, saturation, or fast transients modify the response shape.

## 3. Loaded transformers

In a transformer, Lenz explains why secondary current does not appear with arbitrary direction. Its magnetic effect tends to oppose the flux change inducing it. That opposition is reflected back to the primary as demand for additional current.

The dominant hypothesis is that the core remains linear and coupling is strong. If leakage is large, opposition is distributed and the ideal reading becomes incomplete.

The application is crucial for energy interpretation. The secondary does not deliver free power; the secondary load increases the effort required from the primary source. Lenz connects polarity, flux, and energy conservation.

Correct polarity also prevents connection errors. In coupled windings, poorly identified homologous terminals may make signals add or subtract unexpectedly. Lenz provides the physical criterion for checking those phases.

Dominant variable: induced direction of secondary current relative to flux change.
Validity limit: invalid if leakage, saturation, or parasitic capacitances dominate.

## 4. Induction cooktops

An induction cooktop creates a variable magnetic field that induces currents in the conducting pot. By Lenz, these currents are oriented so they oppose flux change. Energy ends up dissipated as heat in the material.

The dominant simplification is that the pot can be treated as a conductor with effective closed paths. If the material is unsuitable or coupling is weak, transferred power drops.

This application shows that Lenz opposition does not prevent cooking; it channels energy into induced currents and heating. Correct sign guarantees that energy comes from the power supply, not from spontaneous amplification.

The suitable pot matters because it must allow strong induced currents and couple well to the field. If the material does not respond magnetically or does not provide effective paths, opposition exists in principle but useful power is low.

Dominant variable: induced current opposing applied flux change.
Validity limit: invalid if material, frequency, or coupling does not allow useful currents.

## 5. Damping in measuring instruments

Some analog instruments use magnetic damping. A conducting piece moves in a field and generates induced currents opposing motion. This reduces oscillations and stabilizes the pointer.

The dominant hypothesis is that induced response is proportional to motion speed over the working range. If mechanical friction is strong or saturation appears, damping no longer follows the simple model.

The application requires controlled opposition, not maximum opposition. Too much damping makes the reading slow; too little produces oscillations. Lenz fixes the stabilizing direction and design adjusts its intensity.

This case is pedagogically useful because opposition is not an unwanted loss, but a control function. Oscillation energy is dissipated in an orderly way, and the final reading becomes more reliable.

The same idea appears in many precision devices: Lenz opposition can be tuned to remove unwanted motion without changing the desired equilibrium position.

Dominant variable: induced opposition to flux change caused by motion.
Validity limit: invalid if friction, mechanical stops, or magnetic nonlinearity dominates.
`;export{e as default};
