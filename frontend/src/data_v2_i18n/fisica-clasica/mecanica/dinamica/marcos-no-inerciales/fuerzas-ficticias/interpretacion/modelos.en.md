# Physical models: Interpretation of Fictitious Forces

## Ideal model

The ideal model in this leaf uses axis-based scalar interpretation with explicit frame declaration. It is designed for causal consistency, not for full directional reconstruction.

## Hypotheses

1. Analysis axis is stable and explicit.
2. [[a_marco]] is representative for the selected interval.
3. [[m]] is known and effectively constant.
4. [[F_res]] summarizes real interactions only.
5. Target decision requires first-order interpretation.

## Quantitative validity domain

Detectable criteria:
- abs(delta_a_marco / a_marco_ref) <= 0.10
- abs(error_relativo_tendencia) <= 0.10
- [[m]] > 0

For transformacion_aceleraciones:
- Sign consistency among [[a_in]], [[a_rel]], and [[a_marco]].

For fuerza_ficticia_interpretacion:
- Sign opposition between [[F_fict]] and [[a_marco]].

If these checks fail, scalar interpretation reliability drops.

## Model failure signals

- Persistent mismatch above 10 percent.
- High conclusion sensitivity under small input changes.
- Scalar interpretation used for direction-critical action.
- Causal narrative inconsistent with computed signs.

## Extended or alternative model

Explicit transition rule: when repeated mismatch exceeds 10 percent, or direction-resolved decisions are required, move to full vector-aware modeling.

The extended model includes couplings and spatial effects omitted by first-order scalar treatment.

## Operational comparison

| Aspect | Ideal model | Extended model |
|---|---|---|
| Goal | Fast causal interpretation | High-fidelity decision support |
| Core variables | [[F_res]], [[F_fict]], [[a_rel]], [[a_in]] | Vector state and couplings |
| Cost | Low | Medium/high |
| Typical use | Initial diagnosis | Final validation or demanding control |

## Practical transition workflow

1. Declare frame and axis assumptions.
2. Compute first-order interpretation outputs.
3. Check trend mismatch and sign coherence.
4. Compare against quantitative thresholds.
5. Escalate only when threshold criteria are met.

This workflow keeps interpretation auditable and prevents both late escalation and unnecessary complexity.

It also improves cross-role reliability. Analysts, validators, and operators can reference the same threshold language, reducing ambiguity during handoff.

A practical documentation rule is to log three fields for each run: frame declaration, threshold used, and escalation reason. With those fields, model use becomes reproducible and review-friendly rather than dependent on undocumented intuition.

In operational environments, this difference is significant: clearer escalation logic reduces rework, improves incident diagnosis quality, and shortens time to stable corrective action.

## Governance-oriented usage

For high-reliability systems, model usage should be governed by explicit acceptance criteria rather than analyst preference. A practical governance checklist includes: declared frame, sign convention, threshold values, interpretation summary, and escalation decision record.

This checklist improves reproducibility and protects teams from hidden assumption drift. Over time, it also enables meta-analysis of which interpretation patterns fail most often, supporting targeted training and tooling improvements.

In short, the model is not only a computational object. It is part of a controlled decision process.

## Implementation note

In real deployments, each run should log frame choice, axis convention, threshold used, and accept/reject rationale. This practice exposes recurring failure patterns that single runs cannot reveal.

It also improves cross-team audits and reduces retrospective reinterpretation risk.
