# Exam-type example


## Problem statement

A 12 V source [[tension_comun_del_paralelo]] feeds three parallel resistors: [[resistencia_de_rama_1]] = 6 ohm, [[resistencia_de_rama_2]] = 3 ohm, and [[resistencia_de_rama_3]] = 2 ohm. Determine equivalent resistance [[resistencia_equivalente]], equivalent conductance [[conductancia_equivalente]], branch currents [[corriente_de_rama_1]], [[corriente_de_rama_2]], [[corriente_de_rama_3]], and total current [[corriente_total]]. Then explain physically why current sharing is unequal and verify numerical consistency through two independent routes.

The problem also asks what happens when a fourth high-resistance branch is added and why that topological change may have only a minor effect on source demand. The full answer must separate symbolic resolution, numerical substitution, dimensional validation, and causal interpretation.

## Data

Input values for the baseline case are [[tension_comun_del_paralelo]] = 12 V, [[resistencia_de_rama_1]] = 6 ohm, [[resistencia_de_rama_2]] = 3 ohm, and [[resistencia_de_rama_3]] = 2 ohm. Working assumptions are active branch connection, predominantly ohmic behavior, and negligible wiring resistance relative to branch resistance in first-pass analysis.

## System definition

The system is a three-branch resistive network between two common nodes. Source-controlled quantity is branch voltage [[tension_comun_del_paralelo]], shared by all branches. State quantities are [[corriente_de_rama_1]], [[corriente_de_rama_2]], [[corriente_de_rama_3]], and [[corriente_total]]. Equivalent-structure quantities are [[resistencia_equivalente]] and [[conductancia_equivalente]].

No reactive behavior is included, no transient dynamics are modeled, and branch behavior is assumed approximately ohmic inside a moderate operating temperature window. Cable resistance is neglected for this exam setting so branch-level sharing remains the dominant effect.

## Physical model

The physical model combines branch law under common voltage with nodal current closure. Network equivalence is computed through reciprocal resistance addition or direct conductance addition. Global reciprocal consistency enforces agreement between those two pathways.

Core quantities used explicitly: [[resistencia_equivalente]], [[conductancia_equivalente]], [[tension_comun_del_paralelo]], [[corriente_de_rama_1]], [[corriente_de_rama_2]], [[corriente_de_rama_3]], [[corriente_total]], [[resistencia_de_rama_1]], [[resistencia_de_rama_2]], [[resistencia_de_rama_3]], [[conductancia_de_rama_1]], [[conductancia_de_rama_2]], [[conductancia_de_rama_3]]. Core relations used explicitly: equivalent-network formulas, branch-current formulas, and nodal sum.

## Model justification

Physical justification is straightforward: in parallel, branch voltage is common, so branch current follows local branch resistance. This reflects measured behavior in ohmic branches and explains why branch-current sharing is not uniform when branch resistances differ.

Using both [[resistencia_equivalente]] and [[conductancia_equivalente]] is a reliability safeguard, not redundant decoration. Cross-validation reduces unit mistakes, transcription mistakes, and topology mistakes. If both routes disagree, the issue is model coherence rather than one arithmetic step.

## Symbolic solution

First, resistance-equivalent relation:

{{f:req_reciproco}}

Second, conductance-equivalent relation and reciprocal mapping:

{{f:geq_suma}}

{{f:geq_reciproco}}

Third, branch-current relations:

{{f:corriente_rama_1}}

{{f:corriente_rama_2}}

{{f:corriente_rama_3}}

Fourth, nodal closure:

{{f:corriente_total}}

These formulas cover the leaf core: equivalent behavior plus branch-sharing behavior.

## Numerical substitution

Resistance-equivalent computation:
1/[[resistencia_equivalente]] = 1/6 + 1/3 + 1/2 = 1, therefore [[resistencia_equivalente]] = 1 ohm.

Conductance pathway:
[[conductancia_de_rama_1]] = 1/[[resistencia_de_rama_1]] = 1/6 S, [[conductancia_de_rama_2]] = 1/[[resistencia_de_rama_2]] = 1/3 S, [[conductancia_de_rama_3]] = 1/[[resistencia_de_rama_3]] = 1/2 S.
Thus [[conductancia_equivalente]] = [[conductancia_de_rama_1]] + [[conductancia_de_rama_2]] + [[conductancia_de_rama_3]] = 1 S.
Reciprocal check gives [[conductancia_equivalente]] = 1/[[resistencia_equivalente]] = 1/1 = 1 S.

Branch currents:
[[corriente_de_rama_1]] = 12/6 = 2 A,
[[corriente_de_rama_2]] = 12/3 = 4 A,
[[corriente_de_rama_3]] = 12/2 = 6 A.

Nodal closure:
[[corriente_total]] = [[corriente_de_rama_1]] + [[corriente_de_rama_2]] + [[corriente_de_rama_3]] = 2 + 4 + 6 = 12 A.

Alternative global check:
[[corriente_total]] = [[tension_comun_del_paralelo]]/[[resistencia_equivalente]] = 12/1 = 12 A.

## Dimensional validation

Branch-current equation uses volt divided by ohm, which yields ampere, matching [[corriente_de_rama_1]], [[corriente_de_rama_2]], and [[corriente_de_rama_3]]. Conductance addition remains in siemens, matching [[conductancia_equivalente]]. Reciprocal mapping from [[resistencia_equivalente]] to [[conductancia_equivalente]] is dimensionally valid because 1/ohm equals siemens.

Nodal sum [[corriente_total]] = [[corriente_de_rama_1]] + [[corriente_de_rama_2]] + [[corriente_de_rama_3]] is also dimensionally homogeneous because every term is in ampere. This confirms that numerical agreement is physically admissible, not accidental.

## Physical interpretation

Deeper physical interpretation is that parallel topology does not share current according to drawing symmetry. Current sharing is governed by branch admittance under common voltage. Therefore, a local change in one branch resistance can create a nonuniform redistribution with local thermal and reliability impact even before source-level limits are reached.

The same case confirms a practical causal rule: lowering one branch resistance under fixed source voltage increases that branch current and typically increases total source demand. This rule is useful in diagnostics because trend tracking across [[corriente_de_rama_1]], [[corriente_de_rama_2]], [[corriente_de_rama_3]], and [[corriente_total]] reveals branch degradation sooner than a single scalar check. In engineering workflows, this converts a textbook computation into actionable maintenance logic.

# Real-world example


## Context

An industrial control panel powers three modules in parallel. Instrumentation behaves near [[resistencia_de_rama_1]], communication near [[resistencia_de_rama_2]], and light actuators near [[resistencia_de_rama_3]]. The engineering team must verify whether an existing 15 A source remains safe before adding a fourth auxiliary module.

The decision criterion cannot be source total alone. Branch-level sharing matters because one dominant branch can exceed thermal or protection limits even when global source current remains below nominal rating.

## Physical estimation

From baseline calculations, source current is [[corriente_total]] = 12 A, giving 3 A headroom relative to a 15 A limit. If a high-resistance branch is added, for example 60 ohm, additional demand is [[tension_comun_del_paralelo]]/60 = 0.2 A. Estimated new source current is about 12.2 A, still globally acceptable.

Yet branch-level risk may still dominate. The lowest-resistance branch linked to [[resistencia_de_rama_3]] already carries [[corriente_de_rama_3]] = 6 A. If thermal drift lowers effective resistance, branch demand can rise and locally tighten protection margin before global source current becomes alarming.

## Interpretation

This operational case reinforces the leaf central idea: parallel topology simultaneously controls equivalent opposition and current-sharing distribution. Good engineering decisions require both views. [[resistencia_equivalente]] and [[conductancia_equivalente]] summarize network structure; [[corriente_de_rama_1]], [[corriente_de_rama_2]], and [[corriente_de_rama_3]] reveal localized stress.

A robust decision is not limited to checking whether [[corriente_total]] is below source rating. The decision must also confirm branch-level thermal margin and branch-level protection robustness after each load configuration change. That is the bridge between exam-style computation and field-grade reliability practice.