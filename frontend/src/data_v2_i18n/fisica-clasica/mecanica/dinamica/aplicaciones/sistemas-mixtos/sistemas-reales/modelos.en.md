# Physical models: real-world systems

## Ideal model

The baseline model describes a translational mechanical system with aggregated losses. The causal chain is explicit: applied force [[F_ap]], equivalent loss force [[F_loss]], real net force [[F_net]], and resulting acceleration [[a]] over effective mass [[m]].

The same system is read energetically through [[P_in]], [[P_out]], [[P_loss]], and efficiency [[eta]]. This dual view prevents disconnected reasoning between dynamics and power behavior.

## Hypotheses

- Quasi-steady behavior within the analyzed time window.
- Moderate parameter variation inside each segment.
- Valid conversion from rotational friction to linear loss through [[tau_fr]] and [[r]].
- Effective mass [[m]] approximately constant unless variable-mass effects become relevant through [[m_dot]].

These assumptions define the validity contract of the baseline model.

## Quantitative validity domain

Use the baseline model with confidence only when explicit criteria are satisfied:

- [[F_loss]] < [[F_ap]] so that [[F_net]] remains positive at start.
- 0.5 < [[eta]] <= 0.98 as a realistic operating range.
- Relative acceleration mismatch lower than 10 percent for first-level validation.
- Mass variation lower than 5 percent of total mass unless [[m_dot]] is explicitly modeled.
- Typical net-force order of magnitude between 10^3 and 10^4 N in medium industrial drives.

If these conditions fail, the baseline model is no longer predictively robust.

## Model failure signals

- Persistent acceleration mismatch under repeated operating points.
- Sustained growth of [[P_loss]] with no equivalent load increase.
- Drift in the [[P_in]] to [[P_out]] relation that cannot be explained by constant [[eta]].
- Inconsistency between loss force inferred from dynamics and loss force inferred from [[tau_fr]] and [[r]].

These are operationally measurable signals, not subjective impressions.

## Extended or alternative model

Model transition must be explicit and test-driven.

Explicit transition to an extended model when:

- Acceleration discrepancy exceeds the technical tolerance in a persistent way.
- Load evolution requires variable-mass treatment through [[m_dot]].
- Thermal evolution makes [[F_loss]] or [[eta]] state-dependent over the analyzed window.

In short: when the error trend is systematic rather than random, move from constant-parameter modeling to state-dependent modeling.

## Operational comparison

Baseline model:
- Low computational cost.
- High interpretability.
- Strong educational and first-diagnosis value.

Extended model:
- Higher fidelity under nonlinear conditions.
- Better predictive behavior in degradation scenarios.
- Higher instrumentation and calibration requirements.

The right choice depends on objective: didactic clarity, operational robustness, or high-precision validation.

## 7. Final didactic point

The key competence in real-system dynamics is not memorizing one formula set, but knowing when a model ceases to be sufficient and how to transition responsibly to a richer representation.