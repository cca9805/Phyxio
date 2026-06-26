const e=`## 1. Relay and solenoid protection

When a relay is disconnected, the coil tries to sustain the current that was flowing. [[epsilon_L]] can raise terminal voltage and damage the control transistor. That is why diodes, resistors, varistors, or snubber networks are added.

The dominant hypothesis is that the coil remains linear during discharge. If the core saturates or the switch opens over extremely short times, parasitics and arcs may dominate the response.

The protection choice is not unique. A diode strongly reduces voltage, but lengthens the time during which current keeps circulating. A resistor or zener allows faster turn-off, at the cost of accepting higher voltage. Reading [[U_B]] tells how much energy must be dissipated, and reading [[epsilon_L]] tells what voltage the transient may demand.

In the laboratory, this case separates a disconnected coil from a disconnected resistor. In the resistor, voltage falls with current; in the coil, voltage appears precisely because the current is being forced to disappear. That interpretation prevents treating the spike as an unexplained external source.

Dominant variable: self-induced emf produced by [[DeltaI]] during [[Deltat]].
Validity limit: invalid if parasitic capacitances or electric arc dominate the discharge.

## 2. Inductive filters in power supplies

A filter inductor smooths current changes in a switched-mode supply. Its [[L]] stores energy and releases it between pulses, reducing ripple. Self-induction is the mechanism preventing current from changing abruptly.

The dominant simplification is to treat [[L]] as constant over the current range. In real power devices, the core may saturate and lose filtering ability precisely when current is largest.

In design, allowed ripple, switching frequency, and maximum current are compared. Larger inductance smooths better, but usually increases size, winding resistance, and cost. If peak current reduces [[L]], the filter may fail even when the nominal datasheet value looks sufficient.

The quantity is not chosen only for algebraic convenience. It also fixes component size, copper heating, and response to load changes. Self-induction therefore connects the elementary equation with measurable design choices in an actual power supply.

Dominant variable: effective inductance over the operating current range.
Validity limit: invalid if the core saturates or if frequency activates important losses and parasitics.

## 3. Start-up of motors and power coils

When a motor or electromagnet is connected, current does not instantly reach its final value. Self-induction delays the growth because [[epsilon_L]] opposes the increase of [[I]]. This limits initial spikes, although resistance also participates.

The correct interpretation separates inductive start-up from steady regime. Once current is established, ideal self-induced emf disappears, but [[U_B]] remains stored in the magnetic field.

In real motors, motional emf also participates, but at the start the winding self-induction controls current slope. That slope affects protections, contactors, and controllers. An overly abrupt start may produce thermal and mechanical stress even if the final current value is acceptable.

The time reading matters: measuring only the final current is not enough. Two coils with the same steady current may require different protection if their inductances are different, because the path toward steady regime is different.

Dominant variable: current-rise rate when the device is connected.
Validity limit: invalid if resistance, mechanical motion, or core saturation controls start-up.

## 4. Ignition coils

An ignition coil uses self-induction to generate high voltages when primary current is interrupted rapidly. Energy accumulated in [[U_B]] is transferred toward a high-voltage pulse capable of producing a spark.

The design seeks a fast and controlled discharge. A large [[L]] increases available energy, but may also slow charging or require more robust switches.

The practical key is controlling the interruption instant. If the cut occurs too early, [[I]] has not grown enough and [[U_B]] is small. If it waits too long, energy is wasted as heating. Electronic ignition control therefore adjusts dwell time, current limit, and insulation margin.

The same principle appears in any circuit that must produce a short pulse from stored magnetic energy. Self-induction does not create energy; it reorganizes stored energy and can concentrate it into a large voltage if interruption is fast enough.

Dominant variable: magnetic energy stored before interruption.
Validity limit: invalid if coupling, capacitance, or insulation breakdown dominates the pulse.

## 5. Current limiting in power electronics

In converters, inductors and reactors limit current slope. This protects semiconductors and stabilizes energy transfer. Self-induction converts abrupt control changes into smoother current changes.

The dominant hypothesis is that the coil keeps [[L]] throughout the cycle. If the core enters saturation, current may grow rapidly and destroy the switching device.

The application is not simply "use a large coil". An excessive value may slow control, increase losses, and worsen response to load changes. The appropriate [[L]] is chosen to limit [[DeltaI]] during the switching [[Deltat]], while keeping thermal and magnetic margin.

The physical reading also helps diagnose failures. If current rises faster than predicted, the cause may be saturation, high temperature, or real inductance below specification. In all cases, the visible problem is insufficient opposition to current change.

Dominant variable: minimum guaranteed inductance under maximum current.
Validity limit: invalid if temperature or saturation reduces inductance below the design margin.
`;export{e as default};
