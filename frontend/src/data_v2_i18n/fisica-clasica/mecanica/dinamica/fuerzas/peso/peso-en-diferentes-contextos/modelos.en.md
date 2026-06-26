# Physical models: Weight in Different Contexts

## Ideal model

The ideal model in this leaf combines a near-surface gravity approximation with a one-axis accelerated-frame description for support readings. The goal is to separate real gravity from apparent weight without introducing unnecessary complexity at the first stage.

Core simplifications are:

- [[m]] is treated as invariant during the process.
- [[g0]] is treated as locally constant in small altitude ranges.
- Geometry is represented with [[R]], [[h]], and [[r]] depending on scale.
- Support reading is associated with [[N]] and [[Pap]] when contact exists.

This is not a fake model; it is a controlled approximation with explicit limits.

## Hypotheses

Operational hypotheses to state before solving:

- Local-field hypothesis: when [[h]] is small compared with [[R]], [[g0]] is acceptable.
- Central-field hypothesis: for larger scales, use [[G]], [[M]], and [[r]].
- Contact hypothesis: [[Pap]] and [[N]] are meaningful only with mechanical support.
- Axis hypothesis: in elevator-like problems, frame acceleration [[a]] is modeled along the gravity axis.

If any hypothesis fails, model confidence decreases sharply.

## Quantitative validity domain

Recommended quantitative criteria:

- Local regime: abs([[h]]) <= 0.02*[[R]].
- Central regime: if [[h]] > 0.02*[[R]], use [[r]] = [[R]] + [[h]] and central-field equations.
- Physical domain baseline: [[m]] > 0, [[R]] > 0, [[r]] > 0.
- Gravity coherence: for [[h]] >= 0, expected [[gmod]] <= [[g0]].
- Support coherence: with stable contact, [[Pap]] >= 0 and linked to [[N]].

Explicit transition rule: when to switch to an alternative model. If abs([[h]]) <= 0.02*[[R]] is no longer valid, or if the difference between local and central predictions exceeds tolerated uncertainty, switch from the local model to the central model.

## Model failure signals

Observable failure indicators include:

- Prediction differs from measurement by more than about 5 to 10 percent repeatedly.
- Expected sign or trend is violated, such as nonphysical behavior for [[Pap]] or [[gmod]].
- Small input changes create implausibly large output jumps.
- The result violates instrument or domain constraints.

When these indicators appear, rechecking arithmetic is not enough; hypotheses must be revisited.

## Extended or alternative model

The natural extension is full central-field gravity, plus richer support dynamics when quasi-static assumptions fail. Technical settings may also require rotation effects, nonspherical geometry, or instrument calibration terms.

Practical criterion: if relative discrepancy between two models exceeds 5 percent in the decision variable, the extended model is no longer optional.

## Operational comparison

| Aspect | Ideal model | Alternative model |
|--------|-------------|-------------------|
| Dominant variable | [[g0]] and local environment | [[G]], [[M]], [[r]] |
| Spatial scale | Near-surface | Regional or orbital |
| Computational cost | Low | Medium to high |
| Sensitivity to [[h]] | Low first-order | Explicitly high |
| Validity limit | abs([[h]]) <= 0.02*[[R]] | Requires reliable geometric data |

Mastering the switch criterion between these two models is one of the main learning outcomes of this leaf.
