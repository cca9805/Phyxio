# Physical models: Vertical Loop and Contact Condition

## Ideal model

This leaf uses an ideal circular-loop model where motion is constrained to a rigid track and losses are negligible at first pass. The model is intentionally simplified, not incorrect. Its purpose is to isolate contact-threshold logic and radial-load interpretation.

Core simplifications:

- negligible friction and damping in baseline analysis
- stable loop geometry with well-defined radius [[r]]
- particle-like body representation for first-order dynamics
- dominant planar motion without strong out-of-plane coupling

Under these assumptions, the model captures contact feasibility and load trends with high instructional value and practical early-stage usefulness.

## Hypotheses

The model relies on explicit hypotheses:

- radial equations are applied with a declared sign convention
- normal force [[Nn]] represents unilateral contact (push only)
- energy linkage for threshold speed is interpreted through ideal conservation of [[E]]
- measured inputs are close enough to nominal conditions to avoid hidden regime shifts

If these hypotheses are violated, conclusions can remain algebraically consistent while becoming physically unreliable.

## Quantitative validity domain

The model is robust when:

- [[r]] > 0 and geometric closure is preserved
- speeds remain within the operating range where ideal assumptions are still dominant
- top-contact criterion is evaluated through [[vT]] against threshold
- bottom-load interpretation through [[Nn]] is used as first-order estimate

Outside this domain, omitted mechanisms become comparable to principal terms and can no longer be ignored.

## Model failure signals

Typical breakdown indicators include:

- persistent mismatch between measured and predicted contact behavior
- high sensitivity to small parameter variation without physical explanation
- repeated near-threshold operation with unstable contact outcomes
- load signatures incompatible with ideal radial predictions

These signals indicate that model scope, not arithmetic, is the limiting factor.

## Extended or alternative model

When the ideal model is insufficient, extensions may include:

- dissipative terms for distributed losses
- structural flexibility and compliance effects
- coupled multibody dynamics
- transient control and disturbance modeling

The extended model increases fidelity and decision confidence, but also cost and complexity.

### Explicit transition to an alternative model

Transition when ideal predictions stop being small-error approximations and start producing systematic operational mismatch, especially near contact-threshold decisions.

### When to change model

If safety, certification, or maintenance decisions depend on effects excluded by the ideal assumptions, switching to the extended model is mandatory.

## Operational comparison

| Aspect | Ideal model | Extended model |
|---|---|---|
| Main role | Fast diagnosis | High-confidence validation |
| Complexity | Low | Medium/high |
| Data demand | Limited | Expanded instrumentation |
| Typical use | Teaching and preliminary design | Final verification and incident analysis |
| Risk outside domain | High | Lower when calibrated |

Best practice is sequential: start ideal for structure and thresholds, escalate to extended modeling when failure signals or decision stakes require it.
