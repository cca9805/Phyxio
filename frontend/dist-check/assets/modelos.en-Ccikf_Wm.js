const e=`\uFEFF# Physical models: Concept of Fictitious Forces

## Ideal model

The ideal model in this leaf assumes a translationally accelerated non-inertial frame, scalar axis projection, and sufficiently stable inputs in the analysis window. Its purpose is clear causal interpretation: how [[a_marco]] generates [[F_fict]] and how that correction interacts with [[F_res]] to shape [[a_rel]].

## Hypotheses

1. The analysis axis is explicitly defined and fixed.
2. [[a_marco]] is representative for the selected interval.
3. [[m]] is known and effectively constant.
4. [[F_res]] correctly summarizes projected real interactions.
5. The target is first-order interpretation, not full directional reconstruction.

## Quantitative validity domain

Practical thresholds:
- Relative variation of [[a_marco]] <= 10 percent in the window.
- Repeated prediction-observation mismatch <= 10 percent to keep simplified treatment.
- Sign behavior of [[a_rel]] remains coherent with combined [[F_res]] and [[F_fict]].

Detectable quantitative conditions:
- abs(delta_a_marco / a_marco_ref) <= 0.10
- abs(error_relativo_tendencia) <= 0.10
- [[m]] > 0

When these thresholds are violated, scalar interpretation loses explanatory strength.

## Model failure signals

- Persistent residual above 10 percent.
- Direction-sensitive decisions made from magnitude-only output.
- Large decision shifts under small input perturbations.
- Reconstructed [[a_in]] inconsistent with observed trend.

## Extended or alternative model

When to change model explicitly: if repeated residual exceeds 10 percent, or if direction-resolved control/safety decisions are required, move to full vector-aware modeling and include relevant coupled effects.

This transition rule is operational, not rhetorical. It prevents both late escalation and unnecessary complexity.

## Operational comparison

| Aspect | Ideal model | Extended model |
|---|---|---|
| Main goal | Fast causal interpretation | High-fidelity prediction |
| Core variables | [[a_marco]], [[F_fict]], [[F_res]], [[a_rel]] | Full vector state and couplings |
| Computational cost | Low | Medium/high |
| Out-of-regime robustness | Limited | Higher |
| Typical use | Initial diagnosis | Final validation or demanding control |

## Practical transition workflow

1. Declare frame and axis assumptions.
2. Compute first-order outputs from the ideal model.
3. Compare trends against measured behavior.
4. Check residual threshold and directional requirements.
5. Escalate only when threshold criteria are met.

This workflow preserves interpretability while keeping model fidelity aligned with decision needs.

## Why thresholds are physically meaningful

Thresholds encode when neglected terms become decision-relevant. If [[a_marco]] fluctuates strongly inside one window, single-value scalar representation cannot capture transient effects. If mismatch persists above tolerance, the model is no longer just simplified; it is misleading for action.

That is why this leaf treats threshold checks as part of physics, not as post-processing bureaucracy.

A practical consequence is decision consistency. Two teams using the same threshold policy should reach similar model-selection outcomes under similar conditions. If outcomes diverge, the issue is usually hidden assumptions, not the core relation itself.

For this reason, threshold declarations should be stored with every run. This turns model use into an auditable process and prevents retrospective confusion between true regime change and undocumented setup variation.
`;export{e as default};
