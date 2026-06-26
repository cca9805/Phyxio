## Ideal model

The ideal model treats the coil as a purely reactive element with linear behavior and negligible dominant losses. In that frame, [[reactancia_inductiva]] is set by [[omega]] and [[inductancia]], [[corriente_inductiva_eficaz]] is determined from [[tension_eficaz]] and reactance, and [[potencia_reactiva_inductiva]] captures reactive-exchange magnitude in sinusoidal steady regime.

This model is highly useful for first-pass design and didactic clarity because it preserves transparent causality and correct trend prediction.

## Hypotheses

First hypothesis: sinusoidal steady operation during the analysis window. Second hypothesis: near-linear magnetic behavior in the relevant operating range. Third hypothesis: winding and core losses are secondary relative to reactive behavior.

A measurement hypothesis is also required: [[tension_eficaz]] and [[corriente_inductiva_eficaz]] values are RMS-consistent and refer to the same operating state.

## Quantitative validity domain

Operationally, the minimal model is robust when THD <= 5%, when normalized frequency remains in 0.98 <= f_measured/f_nominal <= 1.02, and when relative loss indicator remains small, for example R_equivalent/[[reactancia_inductiva]] <= 0.10 in the main band.

A second criterion is magnetic stability. If effective inductance drops by more than about 5% under operating current, linear assumptions should be revised.

## Model failure signals

A primary warning is trend mismatch: if frequency rises but measured branch behavior does not reflect expected opposition increase, non-ideal effects may dominate.

A second warning is energetic mismatch: measurable active dissipation beyond uncertainty bounds indicates that pure-reactive representation is insufficient.

## Extended or alternative model

The next-level model includes winding resistance, core-loss effects, thermal dependence, and full impedance representation when necessary. This extension separates reactive exchange from active loss and improves thermal-risk interpretation.

The transition criterion is practical: when it is convenient to change to an alternative model is exactly when R_equivalent/[[reactancia_inductiva]] > 0.10, THD exceeds 5%, or frequency drift exits operating bounds.

When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.

## Operational comparison

Ideal modeling is superior for conceptual clarity and quick sanity checks. Extended modeling is superior for final validation, safety margins, and non-ideal environments.

These layers are complementary. Professional quality comes from knowing when ideal simplicity remains valid and when measured evidence requires richer representation.

In implementation practice, both layers often coexist. The minimal model supports fast monitoring and first-response diagnosis, while the extended model supports root-cause isolation, thermal-risk quantification, and robust final tuning.

A useful workflow is staged validation: start with ideal predictions, compare against measured trends, then activate extended parameters only where mismatch is significant. This approach controls complexity without sacrificing physical fidelity.