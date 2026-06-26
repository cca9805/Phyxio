const e=`# Applications of Ampere's law

## 1. Laboratory solenoid design

Solenoids are used to generate controlled magnetic fields in practical work, sensors, and calibration systems. Ampere's law estimates [[B_sol]] from [[n]] and [[I]] without adding the contribution of every turn. The design goal is to obtain an internal field that is sufficiently uniform.

The design variable is not only current. Increasing [[n]] can raise the field without requiring a stronger power supply, but it also increases wire length, resistance, and heating.

In a real practical setup, the field is measured with a Hall probe at several points along the axis. If central values are similar and fall near the ends, the result confirms that the long-solenoid model describes only the useful region. Ampere's law does not replace measurement, but it predicts the expected range before the coil is built.

Dominant variable: [[B_sol]] sets the useful field in the central region.
Validity limit: the model fails near the ends, in short solenoids, or with nonlinear magnetic cores.

## 2. Field estimation around power cables

In electrical installations, Ampere's law gives a first estimate of the field around long conductors. If [[I]] and distance [[r]] are known, the order of magnitude of [[B]] near the cable can be obtained.

This reading helps separate real concerns from exaggerations. A domestic cable produces small fields at usual distances, but industrial high-current conductors may require separation, shielding, or suitable geometric arrangement.

It also helps compare layouts. Two parallel conductors with opposite currents reduce the far field because the net current enclosed by large external curves can cancel. That is why the return conductor should be routed close to the outgoing conductor in sensitive systems.

Dominant variable: [[r]] controls the spatial decrease of the field from a long wire.
Validity limit: the model becomes inadequate with nearby cables, finite conductors, or high-frequency alternating currents.

## 3. Helmholtz coils and magnetic calibration

Although a Helmholtz coil is not solved directly with the simple Ampere form, the law helps interpret why enclosed current organizes the field. In calibration, the aim is a central region where [[B]] is known and stable.

Ampere provides the language of circulation and source. More detailed geometric models are then combined to obtain uniformity. The central idea remains that current and symmetry determine the useful field.

In fine calibration, the law helps interpret deviations: if current is stable but measured field changes when the probe moves, the issue is not [[I_enc]], but the real coil geometry or the measurement position.

Dominant variable: [[I_enc]] organizes the net magnetic source to be calibrated.
Validity limit: the estimate needs additional models when geometry does not allow a simple Amperian curve.

## 4. Transformer and electromagnet diagnosis

In ferromagnetic cores, magnetic circulation is related to excitation current. Although the material modifies permeability, Ampere's law still guides the reading of how much magnetizing current is needed to sustain flux.

In electromagnets, increasing current raises field until the core approaches saturation. After that, more current produces less field gain and more heating. Ampere gives the source structure; the material fixes the response.

This separation matters in maintenance. Abnormally high magnetizing current may indicate air gaps, damaged laminations, or saturation. The law frames the diagnostic question: how much excitation is applied and what magnetic response does the circuit deliver.

Dominant variable: [[I_enc]] measures the magnetizing excitation applied to the magnetic circuit.
Validity limit: real materials require relative permeability, hysteresis, and saturation to be included.

## 5. Electromagnetic compatibility in equipment

Current routing on boards and cables can create magnetic fields that couple noise into nearby sensors. Ampere's law explains why large current loops produce greater magnetic circulation around the circuit.

Reducing loop area, keeping outgoing and return conductors close, or twisting pairs decreases the net current enclosed by external curves. This reduces unwanted fields and electromagnetic emissions.

On electronic boards, this idea becomes continuous return planes and short traces. If the return path moves away, an external curve encloses more effective current and magnetic circulation increases. Ampere's law gives a simple physical explanation for design rules often learned as recipes.

It also helps evaluate supply cables in precision instruments. If outgoing and return paths are separated, the field may introduce errors in nearby magnetometers or current sensors. Reorganizing the wiring reduces external [[C_B]] without changing the equipment power.

The same criterion is used when routing battery leads in portable measurement devices. Keeping the current loop compact reduces magnetic interference during high-current pulses. This is especially important when the useful signal is small compared with the disturbance created by the device itself, especially during repeated switching or pulsed operation cycles.

The application is therefore a concrete design criterion, not only a qualitative warning.

Dominant variable: [[C_B]] indicates magnetic circulation associated with poorly guided return currents.
Validity limit: at high frequencies, wave models, parasitic capacitances, and spatial current distribution are required.
`;export{e as default};
