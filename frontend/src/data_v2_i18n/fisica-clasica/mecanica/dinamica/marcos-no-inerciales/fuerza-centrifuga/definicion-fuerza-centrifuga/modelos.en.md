# Physical models: Definition of Centrifugal Force

## Ideal model

The ideal model describes a mass [[m]] moving on a circular path of radius [[r]], observed from a rotating frame with angular speed [[omega]]. In this context, the key outputs are [[F_cf]] and the per-mass reading [[a_cf]].

The purpose is not to capture every secondary mechanism. It is to provide a reliable first-order representation for rapid analysis, scenario comparison, and operational decision support.

## Hypotheses

1. Rotation axis is clearly defined.
2. Radius [[r]] is approximately constant over the analysis window.
3. Spin regime is stable enough to be represented by [[omega]].
4. Deformation, clearance, and vibration effects are not dominant.

If any of these assumptions fails, the calculation may remain numerical but lose physical reliability.

## Quantitative validity domain

The simple model is operationally useful when criteria such as the following are met:

- Internal consistency: relative difference below 5% between [[F_cf]] from the angular route and from the tangential route.
- Data stability: [[omega]] variation below 10% during the considered window.
- Geometric control: effective [[r]] variation below 5%.

These thresholds are engineering guidelines, not universal laws, but they are practical for deciding whether the base model is still adequate.

## Model failure signals

- Repeated prediction-measurement mismatch above 10% for [[F_cf]].
- Extreme sensitivity to small input changes with no experimental justification.
- Persistent structural vibration or resonance effects not represented in the base model.
- Dimensionally correct numbers that still contradict field behavior.

## Extended or alternative model

When the ideal model fails, the next step is to include vibration dynamics, support deformation, damping, or nonlinear coupling.

Explicit transition rule: when repeated prediction-measurement mismatch exceeds about 10%, or when persistent vibration/clearance signatures appear, switch from the ideal model to the extended model.

This transition does not invalidate the base model. It means the problem has entered a regime requiring higher detail.

## Operational comparison

| Aspect | Ideal model | Extended model |
|---|---|---|
| Minimum data | [[m]], [[omega]], [[r]] or [[v]] | + structural and dissipative parameters |
| Complexity | Low | Medium/high |
| Main use | Fast diagnosis | Fine validation |
| Solve time | Short | Longer |
| Robustness off-nominal | Limited | Higher |

Recommended strategy: start with the ideal model, verify quantitative criteria, and escalate to an extended model only when indicators demand it.

As a final workflow rule, every run should be archived with inputs, outputs, and acceptance criterion. This turns the model into an auditable tool rather than an isolated calculation.

It is also useful to record the dominant variable in each case. [[omega]] often dominates, but in geometry-changing regimes [[r]] can become the key control lever.
