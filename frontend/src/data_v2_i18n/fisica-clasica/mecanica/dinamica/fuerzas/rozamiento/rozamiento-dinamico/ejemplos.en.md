# Exam-type example

## Problem statement

A training block slides on a rough horizontal track. During the analyzed interval, sliding is already established. The objective is to estimate the kinetic-friction force magnitude, verify its physical direction relative to relative velocity, and evaluate how deceleration changes when the contact material is replaced.

## Data

- Measured normal load: [[N]] = 180 N.
- Initial kinetic coefficient: [[mu_k]] = 0.30.
- Initial relative sliding velocity: [[v_rel]] directed along +x.
- Second test material: [[mu_k]] = 0.45 with the same [[N]].

## System definition

The system is the sliding block at the contact interface. Relevant forces are weight, normal reaction [[N]], and kinetic friction [[fk]]. Since relative motion exists throughout the interval, the active regime is kinetic, not static. The direction of [[fk]] must oppose [[v_rel]], because contact friction removes mechanical energy from relative motion.

## Physical model

We use a constant-coefficient kinetic-friction model over a short interval. Surface state, temperature, and speed are assumed sufficiently stable so that [[mu_k]] remains approximately constant. One relation provides force magnitude, and one relation constrains force direction with respect to [[v_rel]].

## Model justification

The test setup was intentionally designed for regime clarity: stable normal load, moderate speed, and no stick-slip transitions in the selected time window. Under these conditions, the model is appropriate for first-order engineering estimates and material comparison. The pedagogical value is explicit separation between two tasks often confused by students: computing how large [[fk]] is and deciding where [[fk]] points.

## Symbolic solution

Kinetic-friction magnitude model:

{{f:fk_modelo}}

Direction condition relative to sliding velocity:

{{f:direccion_fk}}

Physical reading: [[fk]] scales with [[N]] and [[mu_k]], while its orientation is constrained by the sign and direction of [[v_rel]].

## Numerical substitution

1) Material A:

With [[mu_k]] = 0.30 and [[N]] = 180 N, kinetic friction magnitude is 54 N.

2) Material B:

With [[mu_k]] = 0.45 and the same [[N]], kinetic friction magnitude is 81 N.

3) Comparative effect:

Increasing [[mu_k]] raises [[fk]] by 27 N, a 50% increase relative to material A.

4) Direction rule:

If [[v_rel]] points to +x, [[fk]] points to -x. If sliding direction reverses at any instant, [[fk]] also reverses so that opposition to relative motion is preserved.

## Dimensional validation

Dimensional consistency is straightforward: a dimensionless coefficient times force [[N]] yields force [[fk]] in newtons. The direction condition introduces a vector-sign constraint rather than a new dimensional relation.

The result is also physically coherent: for fixed [[N]], higher [[mu_k]] produces higher [[fk]]. This matches the causal meaning of kinetic friction in sliding contact.

## Physical interpretation

The key interpretation is regime-specific causality. In kinetic regime, contact resistance is not an arbitrary number; it is a function of interface state ([[mu_k]]) and load level ([[N]]). Direction is not negotiable either: friction must oppose [[v_rel]]. Ignoring either statement breaks model validity.

From a dynamics perspective, larger [[fk]] subtracts more strongly from net driving force, increasing deceleration in free-sliding conditions. From an energy perspective, larger [[fk]] raises dissipation rate and thermal generation at the interface. Therefore, selecting a material with large [[mu_k]] can improve stopping behavior but may hurt thermal performance and wear.

This is the exact continuity expected by the leaf: [[fk]], [[mu_k]], [[N]], and [[v_rel]] are not decorative symbols but operational variables linked by the two core relations. A correct conclusion must state both magnitude effect and directional effect.

# Real-world example

## Context

In a packaging plant, cardboard boxes pass through a sliding table before entering a sorting gate. Operations reported two opposite issues over different weeks: some shifts showed excessive impact speed at mechanical stops, while others showed low arrival speed and throughput loss. The working hypothesis was a change in kinetic-friction behavior after a coating supplier replacement.

## Physical estimation

Maintenance measured typical load ranges and performed controlled sliding tests with two coatings. Coating R1 showed lower [[mu_k]], reducing [[fk]] and allowing higher arrival speed. Coating R2 showed higher [[mu_k]], increasing [[fk]] and producing stronger deceleration on the same geometry.

Because [[N]] remained in the same operational band, the observed speed differences were directly attributable to coefficient shift. The team also inspected direction behavior with high-frame-rate video during lateral correction maneuvers. Whenever sliding direction changed locally, friction direction changed accordingly, confirming the directional rule embedded in the model.

A sensitivity pass was then added. Small contamination scenarios were tested to estimate coefficient drift. Under mild dust accumulation, R1 became too permissive and increased impact risk. R2 stayed safer for impacts but penalized throughput and thermal load in sustained operation. A middle-range coating provided better global balance when combined with cleaning intervals and periodic coefficient checks.

## Interpretation

The engineering decision was not “pick the highest friction” or “pick the lowest friction”. It was a regime-aware compromise: enough [[mu_k]] to protect mechanical integrity during transfer, but not so high that continuous dissipation degrades throughput and maintenance cost.

The case demonstrates why the leaf insists on two linked statements: compute [[fk]] with [[mu_k]] and [[N]], then assign direction from [[v_rel]]. If direction is mishandled, control corrections can be signed incorrectly. If magnitude dependence is ignored, energy and timing predictions become unreliable.

This closes the semantic loop from theory to operation. The model is useful not because it is algebraically simple, but because it turns contact behavior into measurable, testable, and actionable decisions in real systems.
