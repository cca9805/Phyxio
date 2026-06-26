## Ideal Model

The ideal model assumes that the system can be described through well-chosen generalized coordinates [[qi]] and a differentiable Lagrangian [[L]]. Dynamics is not written as an isolated catalogue of forces, but as an energetic structure built from [[T]] and [[V]], with the option of adding an external generalized force [[Qi]] when required.

The central simplification is to describe motion with a small set of physically meaningful variables. That choice removes redundancy and makes it explicit that the equation of motion emerges from comparing the response of [[L]] to changes in [[qi]] and [[qdi]].

## Hypotheses

- [[qi]] and [[qdi]] describe the state regularly.
- [[T]] and [[V]] are written in the same coordinates.
- [[Qi]] represents only non-potential actions not already included in [[V]].
- The Lagrangian [[L]] supports construction of [[Ri]] without singular behavior in the working domain.

## Quantitative Validity Domain

The formalism remains meaningful when derivatives of [[L]] stay finite and when the energetic model captures the dominant scales. In a linear oscillator, for instance, the restoring contribution associated with [[k]] and [[qi]] must live on the same force scale as [[Qi]] for the balance to remain interpretable. As a simple quantitative criterion, if \(|[[Qi]]| \ll |[[k]][[qi]]|\), elastic restoration dominates; if \(|[[Qi]]| \gg |[[k]][[qi]]|\), the external action dominates.

If the problem contains dry friction, impacts, discontinuous control, or piecewise forcing, the formulation may still be used, but the closure through [[Qi]] must be reviewed carefully. In those cases a compact equation is not enough; the physical regime validating each expression must be stated.

## Model failure signals

One failure signal is that [[Ri]] cannot be evaluated stably because the coordinate choice is poor. Another appears when the same physical action is included both inside [[V]] and again as [[Qi]], producing exaggerated accelerations or incoherent signs.

The model also fails if the resulting equation does not recover a known limit. If an oscillator does not return to the expected free case when [[Qi]] vanishes, the problem lies upstream in the construction of [[L]], not in the final algebra.

## Extended or Alternative Model

One should leave the ideal model when non-eliminated constraints, piecewise inputs, discontinuities, or dissipative terms cannot be represented honestly inside [[V]]. At that point, an extended model may introduce Lagrange multipliers, explicit time dependence in [[L]], or generalized forces representing dissipation, actuation, or external excitation. The governing logic remains the same, but the separation between energetic content and external action becomes more demanding.

When the system has symmetries, the study of [[pi]] helps identify conserved quantities. That step connects this leaf with later analytical mechanics topics, where the structure of [[L]] provides insight before the complete dynamics is solved.

## Operational Comparison

- Conservative model: uses the closure without [[Qi]] and keeps the relevant dynamics inside [[L]].
- Forced model: introduces [[Qi]] for non-potential external actions.
- Extended model: adds explicit constraints, time dependence, or multiple coordinates.
- Selection criterion: use the smallest model that preserves physical interpretation and recovers known limits.
