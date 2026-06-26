const e=`## 1. Car alternator

In a car, the alternator converts part of the engine's mechanical power into electrical energy for the battery, lights, sensors, and control electronics. The coil and magnetic field are designed so that [[epsilon_0]] is sufficient even when engine speed changes. The regulator prevents useful voltage from growing without control as [[omega]] increases.

The dominant simplification is to treat the alternator as an emf source with regulation. The physical interpretation is that faster rotation helps induction, but real output is limited by electronics, heating, and battery demand.

In diagnosis, this application separates an induction fault from a regulation fault. If the shaft rotates and field is present, internal emf should appear; if the battery does not charge, the problem may be rectification, brushes, diodes, or control. That separation avoids blaming [[B]] or [[N]] when the real failure is in the output stage.

Dominant variable: the effective angular speed [[omega]] controls the emf scale before regulation.
Validity limit: the ideal model stops being valid when regulation, magnetic saturation, or heating dominate output.

## 2. Wind turbine

In a wind turbine, the wind supplies [[P_mec]] to the shaft and the generator transforms that input into [[P_elec]]. The design seeks stable conversion even when wind speed varies. Induction physics appears inside the generator, but global efficiency also depends on blades, gearbox, power electronics, and control.

The useful classroom hypothesis is to separate mechanical capture from electromagnetic conversion. If the turbine spins faster, induced emf tends to increase; if the wind fluctuates, the control system must prevent voltage and power from leaving the safe operating range.

The reading of [[eta]] is critical because the complete system is not judged only by producing voltage. A wind turbine may induce high emf during gusts and still fail to deliver stable useful power if control limits the load or if speed leaves the optimal conversion region.

Dominant variable: the mechanical input power [[P_mec]] sets the energetic ceiling for useful electrical power.
Validity limit: the simple estimate fails with turbulent wind, active control, saturation, or safety disconnection.

## 3. Hydroelectric plant

In a hydroelectric plant, falling water drives a turbine coupled to an alternator. The physical advantage is that [[omega]] can be kept very stable, allowing controlled frequency and voltage. The generator converts rotational motion into alternating emf and then into grid electrical power.

The design variable is not only induced voltage. Current delivery, [[eta]], cooling, and magnetic-circuit losses matter. This is why a plant can handle huge [[P_elec]] without requiring absurd fields: scale, turns, conductor section, and conversion quality all increase.

The order-of-magnitude analysis differs from that of a small dynamo. Instead of seeking extremely fast rotation, large machines use strong fields, robust conductors, and cooling. Stability of [[omega]] becomes as important as emf amplitude.

Dominant variable: efficiency [[eta]] decides what fraction of hydraulic input becomes useful electrical output.
Validity limit: the ideal model does not describe grid regulation, transmission losses, or connection transients.

## 4. Bicycle dynamo

A bicycle dynamo shows the phenomenon at human scale. As wheel speed increases, flux variation increases and the lamp receives more energy. When the light is connected, the cyclist feels extra resistance because electrical energy comes from mechanical work.

This case is pedagogically useful because it corrects the idea that induced emf is free. Lamp brightness depends on [[P_elec]], not only on [[epsilon_0]]. At low speeds, induction may be insufficient for proper lighting; at high speeds, electronics limit voltage.

It also allows a clear reading of open circuit versus connected load. With no load, voltage may be measured with little energy transfer; with the lamp, current appears and the system demands more mechanical work. That reaction is a qualitative test of Lenz's law.

Dominant variable: induced emf [[epsilon]] controls the visible start of lamp powering.
Validity limit: the simple model fails if rectification, an intermediate battery, or electronic regulation is present.

## 5. Dynamic microphone

A dynamic microphone is a small generator: a coil moves in a magnetic field because the diaphragm vibrates. Sound supplies mechanical motion and the device delivers a very small electrical signal. Here [[epsilon]] is not meant to provide large power, but to reproduce the time shape of the vibration faithfully.

The dominant hypothesis is linearity: small displacements, stable field, and light coil. The physical interpretation differs from a power plant; the priority is not [[P_elec]], but having the emf follow the motion variation without significant distortion.

This application shows that “generator” does not always mean power machine. The same physics can sense motion. The induced signal encodes speed and waveform of the vibration, so fidelity depends on keeping [[B]], geometry, and mechanical response stable.

Dominant variable: the flux change [[DeltaPhi_B]] associated with diaphragm motion determines the induced signal.
Validity limit: the linear reading fails with large amplitudes, magnetic saturation, or mechanical resonances of the diaphragm.
`;export{e as default};
