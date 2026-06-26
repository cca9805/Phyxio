# Models and validity in critical damping

## Ideal model

The ideal model in this leaf represents a linear second-order oscillator with equivalent viscous dissipation. The defining feature is not merely the presence of damping, but the fact that effective damping matches the critical threshold separating two qualitatively different responses: oscillatory underdamped behavior and non-oscillatory overdamped behavior. At this boundary, the system returns to equilibrium rapidly without sustained oscillation.

This ideal model is useful because it supports design trade-offs between speed and overshoot suppression. In engineering practice, it guides tuning decisions that avoid both slow overdamped recovery and residual oscillations typical of underdamped settings.

## Hypotheses

1. Second-order linear dynamics are valid in the studied amplitude range.
2. Dissipation can be represented by an equivalent constant parameter [[gamma]] during the analysis interval.
3. Effective mass and stiffness parameters define [[omega0]] without abrupt variation in the relevant time window.
4. Initial conditions are well-defined, with response scale captured by [[A]].
5. No dominant external forcing acts during the main transient.

If any hypothesis is violated, critical-regime interpretation must be revised.

## Quantitative validity domain

The model is considered operational when criteria such as the following are satisfied:

- Critical proximity: abs([[gamma]]-[[omega0]]) <= 0.05*[[omega0]].
- Sufficient observation horizon: [[t]] >= 3*[[tau]] to verify settling behavior.
- Initial-scale coherence: [[A]] remains inside a linear-response range (for example, relative deformation <= 10 percent of useful geometric scale).
- Limited parameter drift: relative variation of [[omega0]] <= 5 percent during the test.

These thresholds are not universal constants; they are practical decision rules to determine whether the model remains predictively useful.

## Model failure signals

1. The [[x]] curve exhibits sustained oscillation when the model predicts monotonic decay.
2. Estimated [[tau]] changes strongly with small modifications of observation window.
3. Data fitting requires physically inconsistent values of [[gamma]] or [[omega0]].
4. Response depends strongly on initial amplitude where linearity was assumed.
5. The critical criterion is not stable across nominally equivalent experiments.

When these signals appear, refining arithmetic alone is insufficient; physical assumptions must be rechecked.

## Extended or alternative model

If the system leaves the ideal domain, two common extensions are used:

- A nonlinear damping model, when dissipation depends on velocity or amplitude in a non-proportional way.
- A forced model, when external excitation dominates part of the transient and alters simple classification by [[gamma]] and [[omega0]].

A time-varying-parameter model may also be required when environment conditions change (temperature, load, contact), causing significant drift in [[gamma]].

## Operational comparison

Ideal critical model:
- Advantage: simple interpretation and fast design iteration.
- Cost: can underestimate nonlinear or externally forced effects.
- Recommended use: early design, basic control, first-pass validation.

Extended model:
- Advantage: higher fidelity under nonlinearity or relevant external excitation.
- Cost: more parameters and stronger calibration requirements.
- Recommended use: final validation, variable operating conditions, robustness assessment.

Explicit transition rule: when to switch models is when abs([[gamma]]-[[omega0]]) > 0.05*[[omega0]] persistently or when [[x]] shows overshoot/oscillation incompatible with critical assumptions. In that case, keeping the ideal model leads to misleading conclusions even if internal algebra appears consistent.
