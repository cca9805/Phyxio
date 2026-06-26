const e=`# Modelos fisicos: Identifying Forces

## Ideal model

The base model assumes classical mechanics with explicit physical agents and first-order dry contact behavior. Its purpose is to separate real forces from invented ones and produce a consistent free-body diagram.

Operational assumptions:

- The body is treated as a point mass at the problem scale.
- Gravity [[g]] is approximately uniform in the analysis region.
- Contact is represented by [[N]] and [[f]], with [[f_s]] in static regime.
- [[system_contact]] controls whether contact forces may exist.

## Hypotheses

1. Agent hypothesis: every force must be linked to a physical source.
2. Contact hypothesis: if [[system_contact]] = 0, both [[N]] and [[f]] must be zero.
3. Static-friction hypothesis: [[f_s]] adapts up to a limit set by [[mu_s]] and [[N]].
4. Consistency hypothesis: signs and directions follow declared axis convention.

## Quantitative validity domain

The model is reliable when measurable conditions are satisfied:

- Applied-force vs static-response mismatch remains within tolerance.
- [[mu_s]] is approximately stable during the decision window.
- [[system_contact]] remains stable over the analyzed interval.
- Predicted threshold and observed onset remain close over repeated runs.

Example quantitative criteria:

- If [[F_ap]] stays below the static threshold for sustained operation, static regime is consistent.
- If observed threshold repeatedly departs from estimate based on [[mu_s]] and [[N]], model extension is required.

## Model failure signals

- Diagrams include arrows with no physical agent.
- Static equilibrium is predicted but repeated slip is observed.
- Small surface-state changes cause large unexplained behavior jumps.
- Rapid contact switching appears and the static approximation fails.

## Extended or alternative model

When failure signals persist, extend in layers:

1) Keep agent-based force identification as base.
2) Add friction dependence on surface state or speed.
3) Add time-varying contact dynamics when [[system_contact]] switches.

Explicit transition trigger:

- Upgrade model when prediction-observation error remains above tolerance after setup verification across repeated trials.

## Operational comparison

| Aspect | Base model | Extended model |
|---|---|---|
| Goal | Real-force identification and threshold checks | Nonlinear/contact-transient fidelity |
| Data requirement | Low | Medium/High |
| Complexity | Moderate | High |
| Use time | Short | Longer |
| Best use | Initial diagnosis and teaching | Edge cases and final validation |

Recommended strategy is hierarchical: start with a correct base model, then escalate only when evidence requires it.

## Practical deployment note

In real teams, model quality improves when this structure is embedded into review checklists. Before approving a force diagram, reviewers can ask: are all arrows tied to agents, is [[system_contact]] declared, is static threshold logic explicit, and is there an escalation criterion if repeated mismatch appears. This governance layer reduces subjective debates and makes diagnostics reproducible across shifts.

A second deployment benefit is better communication between operations and maintenance. Operations can report command-side changes in [[F_ap]], while maintenance tracks interface-side drift in [[mu_s]] and support conditions that alter [[N]]. With that split, teams avoid blaming the wrong subsystem and can prioritize corrective actions with measurable criteria.
`;export{e as default};
