const e=`# Models of Ampere's law

## Ideal model

The ideal model is magnetostatic: currents are steady, geometry does not change, and the Amperian curve can be chosen with clear symmetry. In that framework, [[C_B]] depends only on [[I_enc]], not on currents outside the enclosed surface.

The central simplification is turning a closed integral into a geometric reading. For a long wire, [[B]] is tangent and constant on a circle of radius [[r]]. For a long solenoid, [[B_sol]] is approximated as uniform inside.

## Hypotheses

- Steady currents: if [[I]] changes rapidly, the magnetostatic version is incomplete.
- Oriented closed curve: without orientation, the sign of [[C_B]] and [[I_enc]] cannot be assigned.
- Enough symmetry: if [[B]] is not constant, tangent, or zero by segments, it cannot be taken out of the integral.
- Linear medium or vacuum: if the material saturates, [[mu0]] no longer describes the effective response.
- Distances away from edges: near ends, leakage fields and broken symmetry appear.

## Quantitative validity domain

The long-wire model is reasonable when conductor length exceeds the distance [[r]] by at least one order of magnitude. As an operational criterion, the approximation is defensible if straight-section length > 20 times the Amperian radius.

For solenoids, the internal model works better when length is several times larger than diameter. Error below 5 % usually requires measurements near the central region and away from the ends.

## Model failure signals

A clear failure signal appears when measurements of [[B]] along the curve are not similar. If the field varies strongly at points the model treated as equivalent, the chosen symmetry does not exist.

Another signal is a prediction where [[B_sol]] grows linearly with [[I]] in calculations but bends in real data. That points to core saturation, heating, or material changes.

## Extended or alternative model

When to switch to the extended model: finite geometry, short coils, nonlinear magnetic materials, or time-varying fields. In those cases use Biot-Savart, numerical simulation, or Maxwell's form with displacement current.

The transition to the extended model does not reject Ampere; it preserves the global reading and adds the physics ignored by the ideal model.

This decision is practical: keep the ideal model for transparent symmetry, and switch when the measured field no longer follows that symmetry.

## Operational comparison

| Model | Advantage | Limit |
|---|---|---|
| Ideal Ampere | Very fast with clear symmetry | Does not solve local fields without symmetry |
| Biot-Savart | Works for arbitrary current geometry | Requires integrating local contributions |
| Full Maxwell | Includes varying fields and capacitors | Higher conceptual and mathematical complexity |
`;export{e as default};
