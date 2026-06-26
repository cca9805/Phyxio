# Modelos fisicos: Vector Resolution into Components

## Ideal model

The leaf operates with a controlled simplification: known vectors are projected onto declared axes to isolate directional effects. The model assumes rigid-body behavior at the problem scale, stable local geometry, and Earth-like gravity [[g]] treated as constant.

Core simplifications are explicit:

- Contact is represented through effective reaction [[N]] and friction terms.
- Local angle [[theta]] is assumed known and stable in each analyzed interval.
- Secondary effects (deformation, vibration coupling, material hysteresis) are ignored in first pass.

This is not a naive shortcut. It is the minimum model that preserves causal readability while remaining computationally efficient.

## Hypotheses

- Projection hypothesis: chosen axes match the physical question.
- Geometric hypothesis: [[theta]] is measured from the declared reference axis.
- Contact hypothesis: [[muk]] can be approximated as locally constant when friction is modeled.
- Consistency hypothesis: components remain bounded by parent magnitudes.

If any hypothesis is violated, predictions degrade even when equations are algebraically correct.

## Quantitative validity domain

A practical range for reliable first-order analysis is:

- Moderate angles where local geometric reference is unambiguous.
- Operating regimes where contact properties do not drift abruptly.
- Measurement noise small enough that projection differences exceed sensor uncertainty.

Typical quantitative checks include:

- Absolute component bounds relative to parent vectors.
- Consistency between reconstructed magnitude and measured parent value.
- Stable residual error below operational tolerance.

## Model failure signals

Common observable warnings are:

- Persistent mismatch between projected-force prediction and measured response.
- Large sensitivity to tiny angle perturbations.
- Friction behavior not explainable by [[N]] changes alone.
- Regime switching with no corresponding component-balance change.

These signals indicate model scope is being exceeded, not necessarily arithmetic error.

## Extended or alternative model

When failure signals persist, extend progressively:

1) Keep vector decomposition as interpretation base.
2) Introduce nonlinear friction/contact law.
3) Add time-varying geometry or coupled oscillation states if required.

Explicit transition criterion: when residual prediction error remains above tolerance after setup verification, the model should be upgraded before further control decisions.

## Operational comparison

| Aspect | Base decomposition model | Extended model |
|---|---|---|
| Main benefit | Fast causal reading | Higher fidelity |
| Data demand | Low | Medium/High |
| Setup effort | Low | Higher |
| Best use | Diagnostics and first design pass | Final validation and edge regimes |

The recommended workflow is hierarchical: use the base model first, then escalate only when evidence requires it.

## Implementation note for practice

In field environments, teams should log axis convention, angle reference, tolerance targets, and measured residuals for every run. This creates a traceable decision history and prevents hidden assumption drift between operators.

A useful governance rule is to classify each run as green, amber, or red based on residual behavior. Green means decomposition predictions are within tolerance and no escalation is required. Amber means trend degradation is emerging and requires tighter monitoring. Red means repeated tolerance breach and mandatory transition to the extended model.

This protocol keeps the model transition objective and reproducible. It also improves training quality because students and engineers learn not only how to compute components, but when and why to update the model layer.
