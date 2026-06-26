## Ideal model

The ideal model treats the capacitor as a purely reactive element with linear behavior and negligible losses. Under that assumption, [[reactancia_capacitiva]] depends on [[omega]] and [[capacitancia]], [[corriente_capacitiva_eficaz]] follows from [[tension_eficaz]] and reactance, and [[potencia_reactiva_capacitiva]] captures reactive-exchange magnitude in steady sinusoidal regime.

This model is highly useful for first-pass design and didactic clarity because it produces correct qualitative trends and often adequate quantitative estimates in controlled operating windows.

## Hypotheses

First hypothesis: sinusoidal steady operation over the analysis window. Second hypothesis: near-linear component behavior within voltage and temperature range of interest. Third hypothesis: dielectric and series losses remain secondary relative to reactive behavior.

A measurement hypothesis is also required: voltage and current values used in formulas are RMS-consistent and refer to the same operating state.

## Quantitative validity domain

Operationally, the minimal model is robust when THD <= 5%, normalized frequency stays within 0.98 <= f_measured/f_nominal <= 1.02, and relative loss indicator remains small, for example ESR/[[reactancia_capacitiva]] <= 0.10 in the main band.

Thermal stability is another useful criterion. If effective capacitance drift exceeds about 5% during operation, model confidence should be reduced and recalibration of branch-current expectations is recommended.

## Model failure signals

An early failure signal is trend mismatch: if frequency increases while measured branch current does not follow expected direction under fixed voltage, non-ideal effects may be dominant.

A second signal is energetic mismatch: if branch behavior shows active-loss evidence beyond uncertainty bounds, pure-reactive interpretation is no longer sufficient. High cycle-to-cycle dispersion under nominally stable conditions is another warning sign.

## Extended or alternative model

The next-level model includes equivalent series resistance, temperature dependence, and full complex-impedance interpretation when needed. This extension separates reactive exchange from losses and improves thermal-risk prediction.

The explicit transition condition is practical: when it is convenient to change to an alternative model is exactly when ESR/[[reactancia_capacitiva]] > 0.10, THD exceeds 5%, or frequency drift leaves operational bounds. In those cases, relying only on ideal equations can misguide engineering decisions.

When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.

## Operational comparison

Ideal modeling is superior for conceptual clarity, fast sanity checks, and baseline estimation. Extended modeling is superior for final design validation, safety margins, and non-ideal operating environments.

These are complementary layers, not competing doctrines. Professional quality comes from recognizing when ideal simplicity remains valid and when measurable evidence requires richer representation.

A final operational note is implementation pace. In industrial teams, minimal and extended models often coexist during transition windows: the minimal model supports fast monitoring dashboards, while the extended model supports root-cause studies and final parameter tuning. Keeping both layers aligned improves decision traceability.