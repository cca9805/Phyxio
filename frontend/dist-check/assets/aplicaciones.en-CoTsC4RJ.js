const e=`# Applications

## 1. Electric motors

In a motor, coil conductors carry [[I]] inside a [[B]] created by magnets or electromagnets. Forces on opposite sides of the coil can form a torque that produces rotation.

Dominant variable: [[F_B]] as total mechanical force on each active segment.
Validity limit: the straight-segment model works by segments; the whole coil requires summing forces and torques.

The application shows why orientation is not secondary. Changing current direction changes force direction, and commutation keeps rotation in the desired direction.

Real design also controls how much active length remains inside the field. More coil turns increase the number of contributing segments, but also raise resistance and heating. Useful force comes from balancing [[I]], [[L]], [[B]], and cooling.

This leaf separates design choices. Increasing [[B]] requires stronger magnets or cores, increasing [[I]] requires supply and dissipation capacity, and increasing [[L]] requires more copper inside the useful region. An efficient motor optimizes the full set rather than one isolated variable.

## 2. Dynamic loudspeakers

A loudspeaker uses a coil placed in the gap of a permanent magnet. The electrical signal changes [[I]], and magnetic force moves the diaphragm forward or backward.

Dominant variable: [[I]] as time control of force.
Validity limit: at large amplitudes, the coil may leave the uniform-field region.

The force must follow the signal without too much distortion. Therefore [[B]] must be stable, effective coil length must be known, and heating must not alter the current.

The reading of [[f_L]] is useful for comparing magnets and coils before fixing the number of turns. If two designs give the same force per metre, the one with greater active length pushes more, but it may be heavier or dissipate more heat.

Distortion appears when force no longer follows current faithfully. This can happen if the coil moves toward a weaker-field region or if heating reduces current for the same applied signal. A loudspeaker therefore combines magnetic design with thermal design.

## 3. Current balances

In a current balance, force on a conductor inside a known field is measured. The setup relates mechanical force directly to electric current.

Dominant variable: [[L]] as calibrated effective segment.
Validity limit: the conductor must remain straight with stable orientation.

This application is pedagogical because it converts an invisible electrical magnitude into a weight or displacement reading. If force does not change linearly with [[I]], the setup reveals alignment or uniformity failure.

It can also calibrate fields. If [[I]] and [[L]] are known, measuring force helps estimate [[B]]. Orientation must be locked, because a small rotation changes [[s_theta]] and alters the reading even if the field has not changed.

Its teaching value is that the proportionality becomes visible. Changing current changes force, changing active length changes total force, and rotating the conductor shows that geometry is as important as the numerical value of the field.

## 4. Linear actuators

A magnetic linear actuator uses conductors or coils to produce controlled force on a moving part. Force appears in the perpendicular direction defined by current and field.

Dominant variable: [[f_L]] as available force per active metre.
Validity limit: if the part moves too far, field geometry changes.

The advantage is fast control. A variable current modulates force without direct mechanical contact, provided the field and cooling keep the model within its domain.

In precision applications, the relation between current and force must be repeatable. If the conductor moves into a weaker-field region, the same current no longer produces the same force. The useful travel of the actuator is therefore designed inside a stable magnetic region.

Force per length helps estimate stresses before building the full device. If [[f_L]] exceeds what the support can tolerate, the issue is not solved only by reducing mass; field, current, or travel must be redesigned.

## 5. Conducting bars on rails

In laboratory demonstrations, a conducting bar can rest on rails inside a magnetic field. When the circuit is closed, the bar receives force and moves.

Dominant variable: [[B]] as intensity of the magnetic environment.
Validity limit: friction and contact resistance must not dominate the dynamics.

The experiment visually shows that current in a field can produce motion. It also forces a distinction between magnetic force and thermal effects, because a large current can heat the conductor.

The bar-on-rails setup also shows the role of effective length. Only the segment joining the rails and crossing the field participates in the main force. Contact resistance, friction, and bar mass determine whether the calculated force produces visible acceleration.

Across all these cases, the reasoning template is the same: identify active segment, current, field, and orientation. What changes is the technical goal, from turning a rotor to measuring current or moving a membrane.

The bar also allows the circuit reaction to be studied. When it moves, the mechanical state of the system changes and induction effects may appear if the setup is analyzed beyond the initial regime. This connects the leaf with generators and magnetic braking.
`;export{e as default};
