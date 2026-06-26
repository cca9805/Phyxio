const e=`# Models

## Ideal model

The ideal model treats the tube as a one-dimensional, narrow air column with approximately constant cross-section. The sound wave is longitudinal, and the ends are replaced by boundary conditions: a displacement antinode at an open end and a displacement node at a closed end. With that simplification, [[L_eff]] and [[v]] are enough to calculate the scale of [[f_n]].

The model is not meant to describe every detail of a real instrument. It isolates modal selection. In an open-open tube, [[n]] gives a complete series; in an open-closed tube, [[m]] generates odd factors. That difference is the physical identity of the leaf.

## Hypotheses

- The air in the tube is approximately uniform.
- The sound speed [[v]] remains stable during measurement.
- The tube is narrow compared with [[lambda_n]].
- Open ends can be approximated as displacement antinodes.
- The closed end, if present, behaves as a displacement node.
- Viscous, radiation, and turbulence losses are small in a first reading.

These hypotheses allow the air column to be represented with an effective length [[L_eff]]. If the mouth is wide, if there is strong flow, or if the instrument has complex geometry, the ideal model is only an initial guide.

## Quantitative validity domain

As a quantitative criterion, the simple model is reasonable when the tube radius is less than one tenth of [[lambda_n]] and when the end correction is small compared with [[L_eff]]. Operational range: tubes from 0.05 m to 3 m with frequencies between 20 Hz and 5 kHz usually fall within the classroom order of magnitude if air is near ambient conditions.

Another useful control is comparing [[L_eff]] with wavelength. In a fundamental open-closed tube, effective length should be of quarter-wave order. If the calculation demands millimetres of effective length for a low tone, or tens of metres for a high whistle, the model or units are poorly set.

## Model failure signals

A failure signal appears when measured resonances do not follow the expected series. If a closed tube strongly shows an even frequency of the open series, it may not really be closed, or the source coupling may be exciting another mode. If an open tube does not show almost consecutive harmonics, end correction may be large or losses may be selective.

Predictions also fail when airflow is intense, when temperature changes along the tube, or when a bell strongly modifies radiation. In those cases, [[f_n]] remains observable, but it is no longer precisely deduced from the elementary model.

## Extended or alternative model

An extended model includes radius-dependent end correction, losses, acoustic impedance of the mouth, bells, side holes, and source coupling. In wind instruments, these details are essential to explain fine tuning and timbre.

Another alternative is an experimental model: sweep excitation frequency and record response peaks. Then compare the measured series with the open or closed series. This transition to the extended model preserves the idea of acoustic boundary, but recognizes that a real tube is not a perfect line.

## Operational comparison

| Aspect | Ideal model | Extended model |
|---|---|---|
| Geometry | Narrow uniform tube | Bells, holes, variable radii |
| Ends | Ideal open or closed ends | Impedance and end correction |
| Modal series | Complete or odd | Shifted and damped frequencies |
| Use | Estimate [[lambda_n]] and [[f_n]] | Real tuning, timbre, and precise measurement |

The ideal model is the first reading. The extended one is used when the experiment shows observable and persistent deviations.
`;export{e as default};
