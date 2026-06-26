# Physical models: Translation and Rotation

## Ideal model

This leaf uses a simplified baseline model based on explicit idealizations. The model is not wrong; it is intentionally reduced so it remains transparent and predictive inside a controlled validity range.

Main idealizations:

- Neglect friction and damping when they are second-order effects.
- Assume quasi-constant parameters over short operating windows.
- Treat transmission geometry as rigid and fixed.
- Ignore relativistic and quantum corrections in macroscopic classical regimes.

Each idealization has measurable consequences. Good practice is not to avoid simplification, but to know when simplification is still acceptable.

## Hypotheses

The baseline model relies on these hypotheses:

- Kinematic hypothesis: translation and rotation remain coupled through no-slip compatibility.
- Dynamic hypothesis: measured net torque [[tau_net]] drives angular acceleration [[alpha]] through inertia [[I]].
- Continuity hypothesis: state variables evolve continuously during the analyzed interval.
- Weak-coupling hypothesis: neglected effects do not dominate first-order response.

If one of these hypotheses is violated, error tends to become systematic rather than random.

## Quantitative validity domain

The model performs well when the following quantitative criteria are satisfied:

- [[tau_net]] > 0 under the selected sign convention and [[I]] > 0.
- Typical [[alpha]] range between 0 and 60 rad/s2 for laboratory-scale setups.
- Typical [[a]] range between 0 and 10 m/s2 for non-extreme translational systems.
- Relative prediction error lower than or equal to 10 percent in at least three repeated runs.
- Kinematic coherence error between measured [[a]] and [[alpha]]·[[R]] lower than 5 percent.

Outside these ranges, neglected terms become comparable to dominant terms and predictive reliability degrades.

## Model failure signals

Model breakdown is usually visible through objective signals:

- Prediction-measurement mismatch above tolerated thresholds.
- Excessive sensitivity to small parameter changes under nominal conditions.
- Physical inconsistency (wrong sign, impossible trend, contradictory constraints).
- Approximation collapse where neglected mechanisms become first-order contributors.

## Extended or alternative model

When baseline assumptions fail, the model must be upgraded with higher-order effects:

- Friction and damping terms for systematic dissipation.
- Elastic compliance when deformation alters transmission behavior.
- Environmental losses such as drag or viscous interaction.
- Coupled subsystem dynamics when interaction is non-negligible.

The extended model is more accurate but also more expensive in measurement, calibration, and interpretation.

Explicit transition rule: if relative error stays above 10 percent for three consecutive equivalent measurements, or if coherence between [[a]] and [[alpha]]·[[R]] exceeds 5 percent, switch from the ideal model to the extended model.

## Operational comparison

| Aspect | Ideal model | Extended model |
|---|---|---|
| Precision | 90-95% | 98%+ |
| Complexity | Mostly algebraic | Differential and coupled forms |
| Resolution time | Minutes | Hours |
| Use case | Education, first-pass design | Validation, diagnostics, optimization |
| Environment | Controlled lab conditions | High-load real operation |

Master the ideal model first. Upgrade deliberately only when evidence shows that ideal assumptions are no longer acceptable.