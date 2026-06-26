const e=`# Applications of magnetic flux

## 1. Rotating-coil electric generators

In an elementary generator, a coil rotates inside an approximately uniform magnetic field. The mechanical source does not create electricity directly; it changes the coil orientation and therefore changes [[Phi_B]] over time. Flux reading separates the role of the magnet, which supplies [[B]], from the role of rotation, which modifies [[cos_theta]].

The dominant hypothesis is that the field is nearly uniform over the coil area and that all turns share a common orientation. The physical interpretation is that the electrical signal appears because [[DeltaPhi]] repeats periodically. If the coil rotates faster, flux changes in less time, although the maximum flux value is set by [[Phi_max]].

In real design, increasing [[A]] or increasing the number of turns raises linked flux, but it also changes resistance, mass, and inertia. Flux is therefore not optimized in isolation: it is balanced against electrical losses, mechanical cost, and rotational stability.

Dominant variable: [[DeltaPhi]] controls the variation that drives electrical induction during each half turn.
Validity limit: the simple model fails if the field is not uniform, if the coil deforms, or if the turns do not share the same orientation.

## 2. Inductive position sensors

Many industrial sensors detect position or proximity by measuring changes in magnetic coupling. When a metal part enters or leaves a field region, it modifies the flux linked by a coil. The useful information is not merely that a field exists, but that flux changes reproducibly with position.

The simplification is to treat the coil area as fixed and attribute the variation to effective changes in [[B]] or [[B_perp]]. The physical interpretation supports calibration: near a given position, small displacements produce measurable changes in [[Phi_B]], which are then converted into an electrical signal.

This application shows why flux should be read as a system quantity. The sensor does not simply measure the material or the external field; it measures how the part modifies coupling between field and coil.

The same idea is used during installation. A sensor may be correct in the laboratory and unreliable on a machine if the mounting bracket changes the magnetic path. Checking flux coupling under the final geometry is therefore part of calibration, not an optional refinement.

Dominant variable: [[Phi_B]] acts as the intermediate quantity between mechanical position and electrical response.
Validity limit: the reading stops being linear if the material saturates, if external fields appear, or if the part geometry changes relative to calibration.

## 3. Magnetic shielding and flux cancellation

In sensitive equipment, such as magnetometers or medical instrumentation, materials and geometry are used to reduce the flux crossing a protected region. The goal is not always to cancel [[B]] everywhere, but to reduce the net flux crossing the relevant sensor surface.

Flux analysis helps distinguish local field from total coupling. Two regions with fields in opposite directions can partially cancel their contributions to [[Phi_B]]. That is why shielding is evaluated through reduced linked flux, not only through a point measurement of field.

In a well-designed shield, geometry guides the field through paths of lower reluctance and reduces the normal component on the protected zone. The quantity that matters to the instrument is residual flux, because that flux can contaminate the measurement.

Dominant variable: [[Phi_B]] quantifies whether the sensor is actually decoupled from the magnetic environment.
Validity limit: the simple cancellation model fails if the field varies rapidly in space or if the shielding material enters magnetic saturation.

## 4. Resonant coils and signal pickup

In loop antennas, guitar pickups, and reading coils, coil orientation relative to the external field determines how much signal is captured. Rotating the coil changes [[cos_theta]] and therefore changes the flux linking the turns without necessarily changing the external field.

The working hypothesis is that the coil is small enough to see an almost uniform field. The physical interpretation explains why a pickup captures some field components better and rejects others. Maximum flux [[Phi_max]] sets the possible scale, while actual flux depends on orientation.

In audio, this reading becomes tone and output level. A coil orientation or geometry that reduces [[Phi_B]] for certain vibration modes also reduces the corresponding signal, acting as a physical filter before any electronic circuit.

Dominant variable: [[cos_theta]] decides what fraction of maximum coupling actually enters the coil.
Validity limit: at high frequencies or with large coils, delays, parasitic capacitances, and spatial variations require a more complete electromagnetic model.

## 5. Tests of magnetic materials

In materials laboratories, a sample is placed inside a coil to measure how it changes magnetic flux. The sample may concentrate field lines, change effective [[B_perp]], and modify the reading of [[Phi_B]]. This response makes it possible to infer magnetic properties without directly observing all microscopic domains.

The simplification is to compare flux with and without the sample under the same geometry. If [[A]] and [[cos_theta]] remain constant, the observed change is attributed mainly to the material. This application turns the concept of flux into an experimental diagnostic tool.

The comparison requires repeating the measurement with the same orientation and magnetic path. If the sample position changes, a variation in [[Phi_B]] may come from geometry rather than from material properties.

For this reason, reference measurements are essential. An empty coil, a known calibration material, and the unknown sample are compared under the same field setting. The useful result is the change in flux pattern, not a single isolated number disconnected from the setup.

Dominant variable: [[DeltaPhi]] measures how much the coupling changes when the sample is inserted or removed.
Validity limit: the interpretation fails if the sample does not fill the region uniformly, if strong hysteresis appears, or if the response depends on previous magnetic history.
`;export{e as default};
