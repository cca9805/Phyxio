# Physical models: Definition of the Coriolis Force

## Ideal model

The ideal model in this leaf uses scalar Coriolis relations to define lateral-response intensity and equivalent force scale in rotating-frame analysis. It is designed for definitional clarity and first-pass operational interpretation.

This model is intentionally minimal. It does not replace full directional vector dynamics when orientation-sensitive outcomes are central to the task.

## Hypotheses

1. The analyzed reference frame is rotating and explicitly declared.
2. [[omega]] is representative over the analysis window.
3. [[v_rel]] is representative for the considered motion segment.
4. [[alpha]] captures effective geometric coupling.
5. [[m]] is well defined when converting [[a_cor]] into [[F_cor]].

If these hypotheses fail, calculations may still run, but interpretation quality drops.

## Quantitative validity domain

Operational thresholds for this leaf:

- Input stability: relative variation of [[v_rel]] <= 10% in the analyzed segment.
- Geometric stability: variation of [[alpha]] <= 15 degrees during the interval.
- Rotation stability: relative variation of [[omega]] <= 10% in the interval.
- Output adequacy: repeated prediction-observation mismatch > 10% signals model-limit crossing.

These thresholds are practical criteria for switching from ideal scalar treatment to richer formulations.

## Model failure signals

- Expected trend with [[omega]] or [[v_rel]] is not observed.
- Small input changes produce incoherent output jumps.
- Direction-critical decisions are attempted using magnitude-only outputs.
- Repeated residuals remain above 10% despite consistent input handling.

## Extended or alternative model

When ideal scalar treatment fails, move to full vector-aware Coriolis modeling and include additional coupled effects when required by the scenario.

Explicit transition rule: switch from ideal to extended model when repeated mismatch exceeds 10% or when direction-resolved prediction is required for safety or precision.

## Operational comparison

| Aspect | Ideal model | Extended model |
|---|---|---|
| Main output | Scalar [[a_cor]] and [[F_cor]] | Direction plus magnitude coupling |
| Complexity | Low | Medium/high |
| Speed | Fast | Slower |
| Best use | Definition and first-pass screening | Direction-sensitive high-fidelity analysis |
| Escalation trigger | Error threshold or direction demand | Advanced regime management |

Recommended strategy: start with the ideal model for definitional and order-of-magnitude control, then escalate only when failure indicators justify higher fidelity.

## Practical validation workflow

To keep model usage physically explicit, teams can apply a five-step validation routine:

1. Declare the rotating frame and the observation window.
2. Verify whether [[omega]], [[v_rel]], and [[alpha]] are sufficiently stable in that window.
3. Compute [[a_cor]] and optionally [[F_cor]] when load-scale interpretation is required.
4. Compare predicted trend with measured trend under controlled input variation.
5. Escalate to richer modeling only if mismatch or directional sensitivity exceeds criteria.

This workflow prevents a frequent misuse: treating scalar output as if it already solved a direction-dependent control problem. The scalar definition is a physically meaningful first layer, not the final layer.

## Why the thresholds are physically motivated

The thresholds listed above are not arbitrary formatting choices. They encode when neglected effects begin to compete with the primary relation. If [[alpha]] swings strongly, geometric projection changes rapidly and magnitude-only interpretation loses representativeness. If [[omega]] or [[v_rel]] vary too much inside one analysis window, a single scalar estimate can hide transient peaks relevant for safety.

For that reason, this leaf should be read as a disciplined entry point: strong for transparent definitions and first-pass screening, but always tied to explicit escalation criteria.
