const e=`# Exam-type example

## Problem statement

A box with [[m]] = 18 kg rests on a rough horizontal floor. An operator applies a horizontal force [[F_ap]] of 55 N to start motion. The static friction coefficient is [[mu_s]] = 0.35 and local gravity is [[g]] = 9.81 m/s^2.

Tasks: identify all real forces acting on the system and their physical agents, compute [[P]] and the maximum [[f_s]], and decide whether the box remains at rest or starts sliding. Also validate behavior with a contact-existence rule when [[system_contact]] changes.

## Data

- [[m]] = 18 kg
- [[g]] = 9.81 m/s^2
- [[F_ap]] = 55 N
- [[mu_s]] = 0.35
- Initial support condition: [[system_contact]] = 1
- x axis horizontal, y axis vertical

## System definition

System: box on a horizontal surface under an external push toward +x. Expected interactions: Earth-box gravity, floor-box contact, and operator push. The goal of this leaf is to keep only real forces linked to explicit physical agents.

## Physical model

We use a classical mechanics point-body model with dry contact. Core relations are:

{{f:weight_definition}}

{{f:friction_limit_static}}

{{f:force_existence_logic}}

The first relation defines [[P]] from mass and gravity. The second states that [[f_s]] is an adaptive force up to a maximum [[mu_s]]*[[N]]. The third prevents conceptual mistakes: without contact there can be no [[N]] and no [[f]].

## Model justification

The model is appropriate because speeds are low, the floor is approximately rigid, and no high-order effects are required. Force identification is anchored to explicit agents:

- Earth generates [[P]].
- Floor generates [[N]] and [[f]] (here [[f_s]] in static regime).
- Operator generates [[F_ap]].

Motion decision is based on comparing applied force against static friction capacity. If [[F_ap]] does not exceed the static limit, acceleration is zero.

## Symbolic solution

1) Weight:

{{f:weight_definition}}

2) In horizontal setup without vertical component of [[F_ap]], vertical balance gives [[N]] = [[P]].

3) Static friction bound:

{{f:friction_limit_static}}

4) Contact-existence rule:

{{f:force_existence_logic}}

With [[system_contact]] = 1, [[N]] and [[f]] may exist. If [[system_contact]] becomes 0 (no contact), then [[N]] = 0 and [[f]] = 0 by model logic.

5) Rest/slip criterion:

- If [[F_ap]] <= [[f_s]] max, the body remains at rest and [[f_s]] adapts to [[F_ap]].
- If [[F_ap]] > [[f_s]] max, static equilibrium fails and sliding begins.

## Numerical substitution

1) Compute [[P]]:

[[P]] = [[m]]*[[g]] = 18*9.81 = 176.58 N

2) Therefore [[N]] = 176.58 N in vertical equilibrium.

3) Static limit:

[[f_s]] max = [[mu_s]]*[[N]] = 0.35*176.58 = 61.80 N

4) Compare forces:

The key comparison is that [[F_ap]] stays below the static threshold of 61.80 N.

Conclusion: no sliding. Static friction adjusts to [[f_s]] = 55 N opposite to push. The box remains at rest.

5) Threshold scenario:

If [[F_ap]] increases to 70 N, then [[F_ap]] > [[f_s]] max and static regime is no longer valid.

## Dimensional validation

- [[P]] uses N, consistent with [[m]] in kg and [[g]] in m/s^2.
- [[f_s]] and [[N]] are forces in N, with [[mu_s]] dimensionless.
- Friction inequality keeps force units on both sides.

No dimensional inconsistency appears; regime decision is controlled by physical balance between [[F_ap]] and [[f_s]] max.

## Physical interpretation

The key value is not arithmetic but agent-based force identification. The operator does not directly generate acceleration; the operator generates [[F_ap]]. The floor does not impose a fixed friction value; it adjusts [[f_s]] until a limit defined by [[mu_s]] and [[N]]. Earth sets [[P]] through [[m]] and [[g]].

This causal reading avoids two common errors: inventing non-agent forces in an inertial frame, and assuming friction is always equal to [[mu_s]]*[[N]]. That product is a maximum threshold, not an always-on equality.

The variable [[system_contact]] is also decisive. With contact, [[N]] and [[f]] may exist. Without contact, both must vanish. This protects free-body coherence and prevents adding forces with no active physical source.

Operationally, the example shows a robust decision rule: before solving full motion equations, test static admissibility by comparing [[F_ap]] against [[f_s]] max. If threshold is not crossed, a more complex dynamic model is unnecessary.

The physical interpretation must include causal margin, not only inequality status. Here the static reserve is 6.8 N (61.8 - 55), which means the system can absorb small push fluctuations without changing regime. This leads to a practical control rule: keep nominal push below 60 N if stable no-slip behavior is required with a safety cushion.

# Real-world example

## Context

In a packaging line, boxes of varying mass are redirected by a lateral actuator applying [[F_ap]]. During humid shifts, some boxes fail to redirect. Operations suspects actuator weakness; maintenance suspects contact-condition drift due to dust and moisture.

## Physical estimation

For a typical box with [[m]] = 24 kg:

- [[P]] = [[m]]*[[g]] = 24*9.81 = 235.44 N
- With [[system_contact]] = 1, [[N]] is of similar order on horizontal support
- Dry shift: [[mu_s]] = 0.40 -> [[f_s]] max approx 94.2 N
- Humid shift: [[mu_s]] = 0.22 -> [[f_s]] max approx 51.8 N

If the actuator applies [[F_ap]] = 60 N:

- Dry: 60 < 94.2, lateral static hold remains possible
- Humid: 60 > 51.8, static limit is exceeded and slip begins

Same command force, different regime, because [[mu_s]] changed.

## Interpretation

The case confirms the leaf objective: identify real forces and existence conditions before blaming hardware. The correct free-body view includes [[P]], [[N]], [[f]], and [[F_ap]], with explicit agent attribution.

Improvement action is not only increasing [[F_ap]]. It may involve restoring surface conditions to recover [[mu_s]], reducing contamination, or modifying geometry to influence [[N]] and friction margin.

From an engineering perspective, the base model supports rapid diagnosis: compute [[P]], estimate [[f_s]] max, compare with [[F_ap]], and classify whether the issue is actuation or contact-interface drift. That workflow reduces downtime and improves preventive decisions.

The method also transfers well: whenever behavior changes without control-command change, first inspect contact parameters and [[system_contact]] state. Many apparent control failures are actually force-regime transitions.
`;export{e as default};
