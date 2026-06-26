const e=`# Exam-type example\r
\r
## Problem statement\r
A 12 V source [[V]] feeds three parallel resistors: [[R1]] = 6 ohm, [[R2]] = 3 ohm, and [[R3]] = 2 ohm. Determine equivalent resistance [[Req]], equivalent conductance [[Geq]], branch currents [[I1]], [[I2]], [[I3]], and total current [[It]]. Then explain physically why current sharing is unequal and verify numerical consistency through two independent routes.\r
\r
The problem also asks what happens when a fourth high-resistance branch is added and why that topological change may have only a minor effect on source demand. The full answer must separate symbolic resolution, numerical substitution, dimensional validation, and causal interpretation.\r
\r
## Data\r
Input values for the baseline case are [[V]] = 12 V, [[R1]] = 6 ohm, [[R2]] = 3 ohm, and [[R3]] = 2 ohm. Working assumptions are active branch connection, predominantly ohmic behavior, and negligible wiring resistance relative to branch resistance in first-pass analysis.\r
\r
## System definition\r
The system is a three-branch resistive network between two common nodes. Source-controlled quantity is branch voltage [[V]], shared by all branches. State quantities are [[I1]], [[I2]], [[I3]], and [[It]]. Equivalent-structure quantities are [[Req]] and [[Geq]].\r
\r
No reactive behavior is included, no transient dynamics are modeled, and branch behavior is assumed approximately ohmic inside a moderate operating temperature window. Cable resistance is neglected for this exam setting so branch-level sharing remains the dominant effect.\r
\r
## Physical model\r
The physical model combines branch law under common voltage with nodal current closure. Network equivalence is computed through reciprocal resistance addition or direct conductance addition. Global reciprocal consistency enforces agreement between those two pathways.\r
\r
Core quantities used explicitly: [[Req]], [[Geq]], [[V]], [[I1]], [[I2]], [[I3]], [[It]], [[R1]], [[R2]], [[R3]], [[G1]], [[G2]], [[G3]]. Core relations used explicitly: equivalent-network formulas, branch-current formulas, and nodal sum.\r
\r
## Model justification\r
Physical justification is straightforward: in parallel, branch voltage is common, so branch current follows local branch resistance. This reflects measured behavior in ohmic branches and explains why branch-current sharing is not uniform when branch resistances differ.\r
\r
Using both [[Req]] and [[Geq]] is a reliability safeguard, not redundant decoration. Cross-validation reduces unit mistakes, transcription mistakes, and topology mistakes. If both routes disagree, the issue is model coherence rather than one arithmetic step.\r
\r
## Symbolic solution\r
First, resistance-equivalent relation:\r
\r
{{f:req_reciproco}}\r
\r
Second, conductance-equivalent relation and reciprocal mapping:\r
\r
{{f:geq_suma}}\r
\r
{{f:geq_reciproco}}\r
\r
Third, branch-current relations:\r
\r
{{f:corriente_rama_1}}\r
\r
{{f:corriente_rama_2}}\r
\r
{{f:corriente_rama_3}}\r
\r
Fourth, nodal closure:\r
\r
{{f:corriente_total}}\r
\r
These formulas cover the leaf core: equivalent behavior plus branch-sharing behavior.\r
\r
## Numerical substitution\r
Resistance-equivalent computation:\r
1/[[Req]] = 1/6 + 1/3 + 1/2 = 1, therefore [[Req]] = 1 ohm.\r
\r
Conductance pathway:\r
[[G1]] = 1/[[R1]] = 1/6 S, [[G2]] = 1/[[R2]] = 1/3 S, [[G3]] = 1/[[R3]] = 1/2 S.\r
Thus [[Geq]] = [[G1]] + [[G2]] + [[G3]] = 1 S.\r
Reciprocal check gives [[Geq]] = 1/[[Req]] = 1/1 = 1 S.\r
\r
Branch currents:\r
[[I1]] = 12/6 = 2 A,\r
[[I2]] = 12/3 = 4 A,\r
[[I3]] = 12/2 = 6 A.\r
\r
Nodal closure:\r
[[It]] = [[I1]] + [[I2]] + [[I3]] = 2 + 4 + 6 = 12 A.\r
\r
Alternative global check:\r
[[It]] = [[V]]/[[Req]] = 12/1 = 12 A.\r
\r
## Dimensional validation\r
Branch-current equation uses volt divided by ohm, which yields ampere, matching [[I1]], [[I2]], and [[I3]]. Conductance addition remains in siemens, matching [[Geq]]. Reciprocal mapping from [[Req]] to [[Geq]] is dimensionally valid because 1/ohm equals siemens.\r
\r
Nodal sum [[It]] = [[I1]] + [[I2]] + [[I3]] is also dimensionally homogeneous because every term is in ampere. This confirms that numerical agreement is physically admissible, not accidental.\r
\r
## Physical interpretation\r
Deeper physical interpretation is that parallel topology does not share current according to drawing symmetry. Current sharing is governed by branch admittance under common voltage. Therefore, a local change in one branch resistance can create a nonuniform redistribution with local thermal and reliability impact even before source-level limits are reached.\r
\r
The same case confirms a practical causal rule: lowering one branch resistance under fixed source voltage increases that branch current and typically increases total source demand. This rule is useful in diagnostics because trend tracking across [[I1]], [[I2]], [[I3]], and [[It]] reveals branch degradation sooner than a single scalar check. In engineering workflows, this converts a textbook computation into actionable maintenance logic.\r
\r
# Real-world example\r
\r
## Context\r
An industrial control panel powers three modules in parallel. Instrumentation behaves near [[R1]], communication near [[R2]], and light actuators near [[R3]]. The engineering team must verify whether an existing 15 A source remains safe before adding a fourth auxiliary module.\r
\r
The decision criterion cannot be source total alone. Branch-level sharing matters because one dominant branch can exceed thermal or protection limits even when global source current remains below nominal rating.\r
\r
## Physical estimation\r
From baseline calculations, source current is [[It]] = 12 A, giving 3 A headroom relative to a 15 A limit. If a high-resistance branch is added, for example 60 ohm, additional demand is [[V]]/60 = 0.2 A. Estimated new source current is about 12.2 A, still globally acceptable.\r
\r
Yet branch-level risk may still dominate. The lowest-resistance branch linked to [[R3]] already carries [[I3]] = 6 A. If thermal drift lowers effective resistance, branch demand can rise and locally tighten protection margin before global source current becomes alarming.\r
\r
## Interpretation\r
This operational case reinforces the leaf central idea: parallel topology simultaneously controls equivalent opposition and current-sharing distribution. Good engineering decisions require both views. [[Req]] and [[Geq]] summarize network structure; [[I1]], [[I2]], and [[I3]] reveal localized stress.\r
\r
A robust decision is not limited to checking whether [[It]] is below source rating. The decision must also confirm branch-level thermal margin and branch-level protection robustness after each load configuration change. That is the bridge between exam-style computation and field-grade reliability practice.`;export{e as default};
