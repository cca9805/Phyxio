# Physical models: Introduction to Non-Inertial Frames

## Ideal model

The baseline model assumes classical mechanics, explicit axis conventions, and frame motion described through translation acceleration and/or rotation. Dynamic consistency is restored by combining real interactions with inertial correction terms.

Core idealizations:

- Point-mass treatment when body size does not affect force balance.
- Approximately constant frame parameters over each analysis window.
- Thermal, elastic, and aerodynamic effects included only when first-order.
- No relativistic or quantum corrections.

## Hypotheses

1. [[F_real]] includes all physically identifiable interactions.
2. [[a_marco]] and [[omega]] correctly represent frame motion relative to an inertial reference.
3. [[r]] and [[v_rel]] are measured with a stable sign convention.
4. [[m]] is effectively constant during the selected time segment.
5. [[system_classification]] is updated consistently with measured behavior.

## Quantitative validity domain

Simple translational treatment is usually reliable under these bands:

- abs([[a_marco]]) <= 0.001 m/s^2: local inertial approximation is often acceptable.
- abs([[a_marco]]) >= 0.01 m/s^2: explicit non-inertial modeling is recommended.

In rotating contexts, centrifugal contribution grows with [[omega]] and [[r]], while Coriolis relevance grows with [[omega]] and [[v_rel]].

Operational quality rule:

- error_relativo <= 10%: baseline model accepted.
- error_relativo > 10%: switch to extended model.

## Model failure signals

- Persistent residual mismatch in predicted [[a_rel]].
- Systematic trajectory bias unexplained by current term inventory.
- Unstable output under tiny input changes.
- Contradiction between declared frame class and magnitude of inertial corrections.

## Extended or alternative model

When thresholds fail, a structured escalation is required:

1. Include full rotational terms with component-level resolution.
2. Add coupled dynamics if geometry and constraints demand it.
3. Introduce dissipative or deformable effects if residuals remain significant.

Explicit transition condition:

- If error_relativo > 10% in two or more consecutive windows, change model immediately.

This explicit transition statement prevents silent model misuse.

## Operational comparison

| Aspect | Baseline model | Extended model |
|---|---|---|
| Purpose | Fast diagnosis | High-fidelity prediction |
| Cost | Low | Medium to high |
| Data demand | Moderate | High |
| Typical use | Teaching, preliminary design, fast control loops | Certification, final validation, critical analysis |

The recommended workflow is sequential: master the baseline model first, then escalate using quantitative evidence rather than intuition.

In practice, model choice should be logged window by window, not once per full experiment. The same platform can move between near-inertial and strongly non-inertial behavior as maneuver profiles change.

A useful implementation pattern is a four-column traceability table: declared frame state, active term set, observed residual, and model decision. This keeps interpretation auditable and aligns simulation, sensing, and validation teams around the same decision logic.

Without that traceability layer, teams often misclassify model errors as sensor defects or controller faults. With it, root-cause isolation becomes faster and less ambiguous.
