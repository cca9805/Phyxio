const e=`## Ideal model

The ideal self-induction model treats the coil as a linear element with constant [[L]]. Current [[I]] creates proportional flux linkage [[lambda_B]], and only current changes generate [[epsilon_L]]. Geometry, number of turns, and core are condensed into one quantity.

This model preserves the essential reading: magnetic slope, opposition to change, and stored energy. It ignores resistance, parasitic capacitance, core saturation, flux leakage, and heating.

## Hypotheses

- Inductance is constant; if this fails, the slope between [[lambda_B]] and [[I]] changes.
- The core does not saturate; if this fails, [[L]] depends on operating point.
- Current change is slow enough to ignore parasitics; if this fails, oscillations and undescribed overvoltages appear.
- Resistance does not dominate the reading; if this fails, part of the energy dissipates before the inductive effect is observed.
- Coil geometry remains fixed; if this fails, flux linkage changes.

## Quantitative validity domain

The linear model is reasonable if the effective variation of [[L]] remains below 5 % over the current range used. In air-core coils this condition is often broad; in ferromagnetic cores it depends on avoiding saturation.

As a practical scale, transients with [[Deltat]] greater than 1 ms can often be treated with an average model in introductory courses if there is no fast electronic switching. In microseconds, parasitic capacitances may become relevant.

## Model failure signals

A clear signal is that measured [[epsilon_L]] does not scale proportionally with the current-change rate. Another is curvature in the graph of [[lambda_B]] versus [[I]] as current increases.

The assumptions also fail if strong heating, saturation hum, repeated sparks without a discharge path, or oscillations after opening the circuit appear. In those cases the real coil is no longer only an ideal inductance.

## Extended or alternative model

When to switch to the extended model: if resistance, parasitic capacitance, or saturation affects the result, use an RLC model or an inductance depending on operating point. The transition to the extended model avoids assigning every voltage spike to constant [[L]].

In ferromagnetic cores, switching to an experimental curve allows local [[L]] to be read. In power electronics, switching to a model with parasitics helps predict oscillations, losses, and insulation limits.

## Operational comparison

| Criterion | Ideal model | Extended model |
|---|---|---|
| Precision | Good for linear coils and moderate changes | Better in fast switching or saturation |
| Complexity | Uses [[L]], [[DeltaI]], and [[Deltat]] | Adds resistance, parasitics, and core curves |
| Range | Conceptual analysis and average transients | Real power and high-frequency devices |
| Reading | Opposition to change and stored energy | Spikes, oscillations, losses, and heating |
| Main limit | Does not describe nonlinearity | Requires component experimental data |
`;export{e as default};
