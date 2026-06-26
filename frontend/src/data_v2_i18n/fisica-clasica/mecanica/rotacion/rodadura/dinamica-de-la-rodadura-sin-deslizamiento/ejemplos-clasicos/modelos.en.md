# Physical models for classic rolling examples

## Ideal model
The ideal model assumes point contact with no slip, rigid body behavior, and constant effective radius. Under these hypotheses,

{{f:condicion_rodadura}}

fully links translation and rotation for kinematic analysis. Its main strength is clarity: with few magnitudes, one obtains a direct prediction that is easy to test.

This model works well for baseline exercises, quick sensor validation, and order-of-magnitude checks. It also provides a clean reference for identifying deviations in real systems. When data remain close to the ideal relation, local prediction and interpretation are both robust.

Its limitation is explicit: it does not represent deformation, hysteresis, or variable adhesion. That is why a coherence indicator such as [[delta]] is required.

## Hypotheses
The example assumes that [[v]], [[n]], and [[R]] describe the same time window, that the effective radius can be treated as constant, and that conversion from rpm to rad/s is performed before evaluating coherence. It also assumes that comparing sensor channels is more important here than resolving microscopic contact mechanics.

## Quantitative validity domain
A practical quantitative criterion in this leaf is abs([[delta]]) <= 0.5 m/s for near-pure rolling in medium-speed educational setups. Values between 0.5 and 1.0 m/s are treated as non-ideal but still informative. Values above 1.0 m/s require model or measurement review before action.

Thresholds are context dependent and should be adjusted when sensor resolution, speed range, or surface conditions change. Even so, explicit numeric limits are essential to avoid subjective classification.

A second hard condition is [[R]] > 0. Without positive radius, geometric interpretation of the rolling relation is invalid.

## Model failure signals
A typical failure signal is persistently large residual after units and timing have been verified. This suggests operation outside near-pure rolling assumptions. Another signal is excessive output sensitivity to small input perturbations, often linked to poor calibration.

A further warning appears when rpm conversion yields angular speed incompatible with plausible mechanical constraints. In such cases, data acquisition or metadata interpretation may be wrong.

When these signals appear, the ideal model should be downgraded from decision mode to exploratory mode.

## Extended or alternative model
The extended model keeps the base equation but introduces tolerance bands and diagnostic rules. Instead of demanding exact equality, it evaluates abs([[delta]]) against a scenario threshold. This extension acknowledges realistic noise and micro-slip.

It also enforces explicit conversion from rpm to rad/s as a preprocessing stage. Without this stage, calculations may be algebraically correct yet physically mis-scaled. In implementation terms, the extended model separates computation, validation, and interpretation actions.

As a result, outputs become operational objects: value plus coherence state, warning level, and recommended next step. When to switch to the alternative model? Switch when the residual [[delta]] exceeds the setup threshold, when unit conversion does not resolve disagreement, or when the example stops being a quick validation and starts requiring full dynamic detail.

## Operational comparison
Compared with the ideal model, full dynamic models with speed-dependent friction better describe transients and losses, but they demand more parameters and richer datasets. For fast diagnostics and teaching workflows, that extra complexity is not always justified.

Purely statistical models can detect failure patterns effectively, yet often lose direct physical interpretability. The recommended strategy in this leaf is hybrid: keep a physics core and use data-driven tools as support layers.

This balance preserves transparency while improving robustness in practical contexts.