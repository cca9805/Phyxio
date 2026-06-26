const e=`\uFEFF# Physical models: Applications of the Coriolis Force

## Ideal model

The ideal model in this leaf represents a body moving with relative speed [[v_rel]] inside a rotating frame with angular speed [[omega]]. The primary output is [[a_cor]], while [[F_cor]] and [[y]] are used as applied interpretation outputs.

Its role is to provide fast and traceable first-order predictions for practical decisions, not to reproduce every secondary effect of a real system.

## Hypotheses

1. [[omega]] is approximately constant over the analysis window.
2. [[v_rel]] is representative of the considered segment.
3. [[alpha]] captures local motion geometry.
4. Drift is evaluated over a horizon [[t]] where second-order approximation remains acceptable.

If these hypotheses fail, output quality can degrade even with correct algebra.

## Quantitative validity domain

Useful operational criteria for this leaf:

- Scale consistency: compare predicted [[y]] against functional tolerance.
- Approximation window: apply simple model when relative variation of [[v_rel]] stays below 10%.
- Geometric stability: apply when [[alpha]] variation stays below about 15 degrees during [[t]].

For acceleration-to-force conversion, [[F_cor]] interpretation is robust when [[m]] is well known and effective mass remains stable.

## Model failure signals

- Repeated mismatch above 10% between observed drift and predicted [[y]].
- Orientation oscillations that invalidate a single [[alpha]] representation.
- Non-stationary regime where [[omega]] changes significantly inside [[t]].
- Dominant external effects (strong crosswind, aggressive active control) exceeding Coriolis contribution.

Operationally, a useful confirmation test is residual behavior over repeated segments. If the residual keeps a directional pattern after compensation, the issue is likely model incompleteness rather than random noise. That pattern is a practical trigger for model escalation.

## Extended or alternative model

When the ideal model fails, include time-varying inputs, external-force coupling, and full guidance dynamics.

Explicit transition rule: when prediction-observation mismatch repeatedly exceeds 10%, or when predicted [[y]] crosses critical tolerance, switch from the ideal model to an extended model.

This transition does not reject the base model; it indicates that the scenario entered a regime requiring higher fidelity.

## Operational comparison

| Aspect | Ideal model | Extended model |
|---|---|---|
| Inputs | [[omega]], [[v_rel]], [[alpha]], [[t]] | + time-varying terms and external forces |
| Outputs | [[a_cor]], [[y]], [[F_cor]] | coupled trajectories and corrections |
| Complexity | low | medium/high |
| Analysis time | short | longer |
| Recommended use | first-pass estimation | fine validation and advanced control |

Recommended strategy: start with the ideal model to test relevance, then escalate only when indicators require it.

Implementation note: in engineering workflows, this two-stage strategy reduces computational burden while preserving safety. First-pass screening avoids unnecessary complexity in low-risk segments, while escalation criteria keep high-risk segments physically grounded.
`;export{e as default};
