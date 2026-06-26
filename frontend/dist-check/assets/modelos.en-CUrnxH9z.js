const e=`## Ideal model

The ideal Lenz-law model treats induced polarity as a response opposing linked flux change. The circuit has a defined surface, a chosen normal, and a clear convention for reading [[epsilon_ind]].

This model preserves the essential reading: sign of change, induced sign, and energy coherence. It ignores detailed resistance, spatial distribution of induced electric field, parasitics, radiation, and multiple current paths.

## Hypotheses

- The linked surface is defined; if this fails, [[Phi_B]] has no clear sign.
- The normal is kept fixed; if this fails, apparent signs change.
- Flux change can be summarized with [[DeltaPhi_B]] or [[r_Phi]].
- The circuit allows polarity interpretation, even when no appreciable current flows.
- The process is not dominated by high-frequency parasitics.

## Quantitative validity domain

The average model is reasonable if flux change can be compared between two states and if [[Deltat]] is greater than 1 ms in small laboratory coils. In that range, induced polarity is usually read without resolving propagation.

Quantitative use criterion: if [[Deltat]] < 1 microsecond or if the circuit has dimensions larger than 0.1 m, delays, capacitances, and parasitic inductances should be suspected. The opposition rule still orients reasoning, but the elementary model may be insufficient.

## Model failure signals

A failure signal is that measured polarity changes when the experiment is repeated without changing physical orientation or reference. Another is observed emf apparently reinforcing flux change without an external source supplying energy.

The simple reading also fails with several coupled coils, uncontrolled external fields, or distributed current paths. In those cases, flux sources must be separated before applying Lenz.

A useful diagnostic is energy direction. If the induced response seems to strengthen the original change while no external source supplies work, the sign convention or model partition is probably wrong.

## Extended or alternative model

When to switch to the extended model: if the circuit has relevant resistance, capacitance, and couplings, use a complete circuit model. If the field varies in space, use a field description with explicit surfaces and orientations.

In magnetic brakes and electric machines, the extended model includes forces, speed, dissipation, and geometry. Lenz preserves the direction criterion, but magnitude and distribution require more information.

## Operational comparison

| Criterion | Ideal model | Extended model |
|---|---|---|
| Precision | Good for polarity and sign | Better for currents, forces, and fast transients |
| Complexity | Uses [[DeltaPhi_B]], [[r_Phi]], and [[epsilon_ind]] | Adds resistance, parasitics, forces, and geometry |
| Range | Loops, coils, and conceptual explanation | Machines, brakes, sensors, and real circuits |
| Reading | Opposition to flux change | Current intensity, dissipation, and dynamics |
| Main limit | Does not compute local distribution | Requires experimental parameters |
`;export{e as default};
