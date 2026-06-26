# Models

## Ideal model

The ideal model assumes local gravity can be treated as uniform and that [[hi]] and [[hf]] share one vertical reference. In this regime, [[Ug]] is a robust state reading and [[dUg]] captures process change clearly. The value of this model is operational clarity: it gives physically interpretable results with minimal parameter overhead.

## Hypotheses

The model relies on consistent reference, SI coherence, and moderate vertical span. If any of these assumptions is broken, numerical outputs may still appear clean while physical interpretation degrades. The most frequent hidden break is reference drift, where one state is measured from a floor and the other from another level.

## Quantitative validity domain

The model is suitable for buildings, ramps, and laboratory setups where local gravity variation is negligible. It becomes weak for large-scale orbital or high-precision scenarios. A practical criterion is to treat the model as first-choice when vertical span is moderate and local [[g]] can remain fixed within the desired tolerance.

For educational and introductory engineering use, a useful quantitative rule is to keep vertical change in a range where local-gravity approximation remains stable for the task goal. If required accuracy tightens or spatial scale grows, this local simplification should be reconsidered.

## Model failure signals

Typical signals include sign contradictions against process direction, unstable results under minor reference changes, or clear mismatch between expected and computed scale. Another signal is repeated need for ad hoc corrections to make results look plausible. If corrective patches accumulate, the structural model is likely wrong.

## Extended or alternative model

When local assumptions fail, use a non-uniform gravitational potential framework. The energy approach remains valid, but spatial dependence must be updated. This transition should be described explicitly in reports so readers understand why local assumptions were abandoned.

An effective workflow in practice is two-stage: first run a local estimate for quick decision support, then run an extended model for confirmation when risk or precision demands are high.

## Operational comparison

Use the ideal model for clarity and speed in local problems. Use extended models when scale or precision demand it. The correct choice is physical, not stylistic. Model quality is not measured by equation complexity but by coherence between assumptions, scale, and decision goal.

In teaching and engineering communication, this comparison section should close the loop: state what model was chosen, why it was chosen, what uncertainty remains, and what condition would trigger a model switch.