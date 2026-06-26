# Physical models: Hooke's Law

## Ideal model

The ideal model treats the spring as a linear elastic element with an effective constant stiffness [[k]] over the deformation interval of interest. The state variable is [[x]], and the constitutive response is [[Fel]] with restoring sign behavior. For intensity-only analysis, the magnitude [[Fm]] is used. For static vertical configurations, [[x_eq]] is linked to [[m]], [[g]], and [[k]].

The purpose of this model is not microscopic material realism. Its purpose is a traceable and efficient constitutive law for first-order analysis.

## Hypotheses

The model relies on these explicit assumptions:

- Elastic recoverable regime, with no plastic deformation in the operating window.
- Approximately linear dependence of [[Fel]] on [[x]] near the reference state.
- Stiffness [[k]] can be treated as constant in the chosen interval.
- Axis convention is clearly stated so restoring sign can be interpreted correctly.
- For vertical equilibrium, gravitational acceleration [[g]] is approximately uniform.

## Quantitative validity domain

As an operational guideline, linear Hooke behavior is defensible when conditions such as the following are satisfied simultaneously:

- Bounded deformation: $|[[x]]| \le 0.1\,L_0$ for free length $L_0$.
- Stiffness stability: relative variation of [[k]] below 10% across the interval.
- Linear fit quality: R2 greater than 0.98 for [[Fel]] versus [[x]] data.
- Restoring consistency: [[Fel]]·[[x]] <= 0 under the selected sign convention.
- In vertical equilibrium, [[x_eq]] remains inside the experimentally characterized linear segment.

When one or more criteria fail, model error can become systematic rather than random.

## Model failure signals

Typical failure indicators include:

- Force-deformation loops with visible hysteresis under load-unload cycles.
- Drift of inferred [[k]] with deformation level.
- Predicted [[x_eq]] incompatible with physical geometry.
- Persistent model-measurement mismatch above instrumental uncertainty.
- [[Uel]] behavior inconsistent with stable elastic storage.

## Extended or alternative model

When linear assumptions fail, transition to an alternative formulation:

- Piecewise stiffness model.
- Nonlinear constitutive law with linear and third-order terms.
- Hysteretic model for cyclic loading with dissipation.
- Viscoelastic model when time dependence is relevant.

Explicit transition rule: if quantitative linearity criteria are not met, do not patch Hooke's law with arbitrary correction factors. Change the model and recalibrate parameters for the new regime.

## Operational comparison

| Aspect | Linear local Hooke model | Nonlinear/hysteretic alternative |
|--------|--------------------------|----------------------------------|
| Main parameter | [[k]] constant | Regime-dependent parameters |
| Input variable | [[x]] | [[x]] and loading history |
| Output law | [[Fel]] linear in [[x]] | [[Fel]] nonlinear or looped |
| Energy view | [[Uel]] quadratic | Possible dissipation |
| Best use | First-pass modeling and baseline calibration | Advanced validation and extended regimes |

In practice, use the ideal model first for clarity and traceability, then switch when evidence shows linearity is no longer adequate.
