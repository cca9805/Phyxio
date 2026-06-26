## Ideal model

The ideal Faraday-law model treats the circuit as a well-defined loop or coil linking changing magnetic flux. Change of [[flujo_magnetico]] during [[intervalo_de_tiempo]] produces emf [[epsilon_ind]] around the circuit.

This model preserves the essential reading: flux change, accumulation by turns, and Lenz polarity. It ignores resistance details, exact distribution of induced electric field, radiation, parasitic capacitances, and complex geometry.

## Hypotheses

- The circuit is defined; if this fails, the linked surface is unclear.
- Turns link similar flux changes; if this fails, [[numero_de_espiras]] does not multiply simply.
- The interval [[intervalo_de_tiempo]] is positive and measurable; if this fails, no finite average rate exists.
- The field can be summarized by [[campo_magnetico_perpendicular_efectivo]] if the uniform model is used; if this fails, spatial integration is needed.
- The process is quasistatic; if this fails, propagation and radiation may become appreciable.

## Quantitative validity domain

The average model is reasonable if flux change can be summarized between two states and if the time scale does not require resolving instantaneous details. In introductory classes, changes in milliseconds or seconds often allow this reading if the circuit is small.

As a practical scale, if [[intervalo_de_tiempo]] falls to microseconds in extended circuits, parasitics and delays may alter measured emf. In that case, the law still guides interpretation, but the elementary lumped model is insufficient.

Quantitative use criterion: in small laboratory coils, [[intervalo_de_tiempo]] > 1 ms and circuit dimensions below 0.1 m usually allow an average estimate without resolving propagation. If [[intervalo_de_tiempo]] < 1 microsecond, parasitics and delays should be suspected.

## Model failure signals

A failure signal is that measured [[epsilon_ind]] does not grow when flux-change rate increases. Another is that changing orientation or area produces effects not explained by the effective [[campo_magnetico_perpendicular_efectivo]] used.

The model also fails if high-frequency noise, sparks, resonances, dominant capacitive coupling, or an unclear linked surface appears.

## Extended or alternative model

When to switch to the extended model: if the field is not uniform, compute flux by integration over the surface. If the circuit has many nonequivalent turns, sum each contribution.

In fast electronics, parasitic inductances, capacitances, resistance, and propagation are included. In electric machines, a description depending on angle, speed, and rotor geometry is used.

## Operational comparison

| Criterion | Ideal model | Extended model |
|---|---|---|
| Precision | Good for average changes and simple geometry | Better in nonuniform fields and fast transients |
| Complexity | Uses [[cambio_de_flujo_magnetico]], [[intervalo_de_tiempo]], and [[numero_de_espiras]] | Adds integrals, parasitics, and detailed geometry |
| Range | Loops, coils, and introductory estimates | Machines, antennas, sensors, and real circuits |
| Reading | Emf from flux change | Field distribution, phase, losses, and couplings |
| Main limit | Does not resolve local details | Requires precise geometric and temporal data |