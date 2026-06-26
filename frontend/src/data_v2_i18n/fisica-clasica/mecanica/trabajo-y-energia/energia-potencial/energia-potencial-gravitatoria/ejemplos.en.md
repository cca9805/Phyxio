# Exam-type example

## Problem statement

A service lift carries a load with [[m]] equal to five hundred kilograms from [[hi]] at minus five meters to [[hf]] at twenty meters. Assume [[g]] is ten meters per second squared for local calculations. The task is to compute the change in gravitational potential energy [[dUg]], then the final-state energy [[Ug]] at the upper level, and finally the gravitational work [[Wg]] during the ascent.

The problem is intentionally designed to test three skills at once: state reading, state-change reading, and transfer reading. If those three are mixed, the result may look algebraically correct but physically unclear.

## Data

- [[m]] equals five hundred kilograms.
- [[g]] equals ten meters per second squared.
- [[hi]] equals minus five meters.
- [[hf]] equals twenty meters.
- Single vertical reference is maintained.

## System definition

The system is load plus Earth under a local gravity approximation. The vertical reference is fixed before any operation, so [[hi]], [[hf]], and every intermediate [[h]] value are interpreted in one consistent frame.

This system definition prevents the most common hidden error in this leaf: reference drift. Without this step, one can accidentally compare heights measured from different zeros and still produce a numerical output that appears plausible.

## Physical model

The process is local, moderate in vertical scale, and focused on energy interpretation. Therefore, the leaf core relations are the appropriate model set.

{{f:variacion_potencial_gravitatorio}}

{{f:potencial_gravitatorio_superficie}}

{{f:trabajo_gravitatorio}}

## Model justification

The local model is justified because the required decision is not orbital precision but consistent state-to-state energy reading in a building-scale scenario. Using an extended gravitational model would add complexity without improving the instructional target of this problem.

The selected relations are also aligned with the target outputs. [[dUg]] addresses state change, [[Ug]] addresses a final-state value under the chosen reference, and [[Wg]] closes transfer interpretation through conservative-sign logic.

## Symbolic solution

1. Compute height change from [[hf]] minus [[hi]].
2. Use [[m]] and [[g]] with that change to obtain [[dUg]].
3. Use opposite-sign relation to obtain [[Wg]].
4. Evaluate final-state [[Ug]] with [[h]] equal to [[hf]] in the same reference.

This symbolic ordering is not only procedural. It preserves causal structure: state change first, transfer consequence second, absolute state value third.

## Numerical substitution

The vertical difference is twenty five meters. The change [[dUg]] is one hundred twenty five thousand joules and is positive because final level is higher. The work [[Wg]] has the same magnitude with opposite sign, therefore negative. The final-state [[Ug]] at twenty meters, in this chosen reference, is one hundred thousand joules.

These values are internally consistent and physically coherent for a local lifting process. They also match practical intuition: lifting a heavy object by a large vertical span requires substantial energy input.

## Dimensional validation

[[m]] is in kilograms, [[g]] in meters per second squared, and height values in meters. Their combination gives joules for [[Ug]] and [[dUg]], and therefore also for [[Wg]]. No hidden non-SI unit appears in the computation chain.

A second validation is sign consistency. Since the process is ascent, [[dUg]] should be positive and [[Wg]] should be negative in a conservative interpretation. The computed signs satisfy that condition.

## Physical interpretation

The load ends at a higher state, so potential state energy increases. Gravity acts opposite to this displacement direction, therefore gravitational work is negative. The three outputs are not independent numbers; they are one coherent narrative of state and transfer.

A good final statement is: the system gains gravitational state energy while gravity alone does not supply that gain during ascent, so external agency must provide the required net input.

# Real-world example

## Context

In a logistics warehouse, the same package is considered for two storage strategies: low shelf and high shelf. The manager needs a quick estimate of additional energy demand if the package is always stored at the higher level. The physical question is not trajectory optimization yet; it is first-order state-change comparison.

## Physical estimation

If [[m]] and [[g]] remain unchanged, extra demand scales directly with added height difference. This gives a transparent first estimate for planning repeated lifting cycles. If hundreds of cycles are performed daily, even moderate changes in storage height can produce significant cumulative energy demand.

## Interpretation

The practical value of the leaf is decision quality: by tracking [[dUg]] and [[Wg]] coherently, teams can compare vertical logistics policies before investing in hardware changes. The model remains simple, but the interpretation is operationally useful because it links state variables to energy cost trends.

From a teaching perspective, this real-world section also highlights a transferable habit: do not stop at a scalar output. Always ask what process direction, reference choice, and validity assumptions are implied by that output. This extra line of reasoning is often the difference between a correct classroom answer and a reliable engineering recommendation.