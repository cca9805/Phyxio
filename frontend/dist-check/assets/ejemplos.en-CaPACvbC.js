const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A student team compares two fairings for a low-profile ground prototype. Both are tested in the same wind tunnel, with identical reference area [[A]] and the same fluid density [[rho]]. The task is to estimate drag force [[F_d]] and resistive power [[P_d]] at two operating speeds, then justify which design is preferable when the objective is lower energetic demand at sustained speed.\r
\r
This is not a pure calculation drill. The exam requires interpretation: what a change in [[C_d]] means in terms of shape and wake, and why a moderate [[C_d]] improvement can produce a significant [[P_d]] impact at higher [[v]].\r
\r
## Data\r
\r
Provided laboratory data:\r
\r
- Same fluid and nearly stable [[rho]] during the session.\r
- Same reference area [[A]] for both fairings.\r
- Two target speeds: [[v]]_1 and [[v]]_2, with [[v]]_2 greater.\r
- Measured coefficients: [[C_d]]_A for fairing A and [[C_d]]_B for fairing B.\r
\r
Requested outputs:\r
\r
1. [[F_d]] for each fairing at [[v]]_1 and [[v]]_2.\r
2. [[P_d]] for each fairing at both speeds.\r
3. Relative power difference at the higher speed.\r
\r
The final answer must state whether [[C_d]] improvement is operationally meaningful, not only numerically visible.\r
\r
## System definition\r
\r
System: vehicle body interacting with airflow along the forward direction.\r
\r
Conventions:\r
\r
- [[v]] is relative speed with respect to the fluid.\r
- [[A]] is fixed by the test reference convention.\r
- [[C_d]] represents integrated shape/wake behavior for each fairing.\r
- [[F_d]] is interpreted as resistive-force magnitude.\r
- [[P_d]] is interpreted as power required to overcome drag in near-steady operation.\r
\r
These conventions prevent a common mistake: comparing [[C_d]] values obtained under different area definitions.\r
\r
## Physical model\r
\r
Drag-force relation:\r
\r
{{f:arrastre_cuadratico_estandar}}\r
\r
Power relation:\r
\r
{{f:potencia_de_arrastre}}\r
\r
Together, they form the leaf core: shape penalty to force, then force to energetic cost.\r
\r
## Model justification\r
\r
The model is appropriate here because:\r
\r
1. The same [[A]] convention is used in both tests.\r
2. Flow conditions remain inside the calibrated tunnel window.\r
3. The objective is comparative design reading in a bounded speed range, not full regime mapping.\r
\r
Including [[P_d]] is essential. Two fairings may show moderate force differences at medium speed and still produce large operational differences in power demand near high-speed operation.\r
\r
## Symbolic solution\r
\r
For each fairing and each speed:\r
\r
{{f:arrastre_cuadratico_estandar}}\r
\r
This gives [[F_d]]_A1, [[F_d]]_A2, [[F_d]]_B1, and [[F_d]]_B2.\r
\r
Then for each case:\r
\r
{{f:potencia_de_arrastre}}\r
\r
This gives [[P_d]]_A1, [[P_d]]_A2, [[P_d]]_B1, and [[P_d]]_B2.\r
\r
Useful symbolic checks:\r
\r
- At fixed [[rho]], [[A]], and [[v]], force ratio follows [[C_d]] ratio.\r
- At fixed speed, reducing [[C_d]] reduces both [[F_d]] and [[P_d]].\r
- For one fairing, increasing [[v]] increases both [[F_d]] and [[P_d]], with power becoming the stronger operational constraint.\r
\r
These checks validate structure before numerical substitution.\r
\r
## Numerical substitution\r
\r
After substituting test values, the lower-[[C_d]] fairing yields lower [[F_d]] at both speeds. At [[v]]_1, the difference may look moderate; at [[v]]_2, the [[P_d]] gap becomes much more significant for energy budgeting.\r
\r
This supports a design principle: modest shape optimization can produce disproportionate energetic benefit in higher-speed operation windows.\r
\r
Internal consistency checks:\r
\r
- If [[C_d]]_B < [[C_d]]_A, [[F_d]]_B should not exceed [[F_d]]_A under identical [[rho]], [[A]], and [[v]].\r
- If [[F_d]] decreases at fixed [[v]], [[P_d]] must also decrease.\r
\r
If these checks fail, the issue is usually unit handling, substitution error, or reference inconsistency.\r
\r
## Dimensional validation\r
\r
Minimum checks:\r
\r
1. [[F_d]] must be in N.\r
2. [[P_d]] must be in W.\r
3. [[C_d]] must remain dimensionless.\r
4. [[rho]], [[A]], and [[v]] must be SI-consistent.\r
\r
Model-validity checks:\r
\r
- Same [[A]] convention across all comparisons.\r
- Comparable flow context so that [[C_d]] values remain meaningful.\r
- Speed window inside the calibrated operating range.\r
\r
Without these checks, a clean computation can still lead to weak physics.\r
\r
## Physical interpretation\r
\r
The key interpretation is that [[C_d]] organizes shape-and-wake reading rather than replacing it. Lower [[C_d]] indicates lower flow penalty, which translates into lower [[F_d]] at fixed [[rho]], [[A]], and [[v]].\r
\r
The second key interpretation is energetic. Design decisions should not rely on force alone. They must include [[P_d]], because sustained operation is constrained by power availability and efficiency.\r
\r
In this exam scenario, the lower-[[C_d]] fairing is preferable in the high-speed segment due to reduced [[P_d]] demand. That is a physical decision, not a stylistic preference.\r
\r
# Real-world example\r
\r
## Context\r
\r
A track-cycling manufacturer compares two helmets in a wind tunnel campaign. Both are tested with the same rider posture, the same [[A]] convention, and the same speed protocol. The objective is selecting the helmet for a pursuit event where energetic efficiency at high speed is critical.\r
\r
The choice cannot rely on one short-run lap outcome. It must be grounded on [[C_d]], [[F_d]], and [[P_d]] interpretation under controlled conditions.\r
\r
## Physical estimation\r
\r
For each helmet, the team obtains an effective [[C_d]] in the target [[v]] window. It then estimates force:\r
\r
{{f:arrastre_cuadratico_estandar}}\r
\r
and power:\r
\r
{{f:potencia_de_arrastre}}\r
\r
The lower-[[C_d]] helmet reduces [[F_d]] across the full window and produces a clearly lower [[P_d]] requirement near race speed. This translates into lower physiological cost and more tactical margin late in the effort.\r
\r
Robustness is also checked: a slight posture change reduces the advantage but does not eliminate it. This confirms that [[C_d]] is condition-dependent but still operationally useful when conditions are documented.\r
\r
## Interpretation\r
\r
This real case confirms the leaf message: [[C_d]] is useful only when interpreted with explicit reference and context. Its strength is not one isolated number; it is the structured link between shape, force, and power.\r
\r
A professional conclusion is not "this helmet has the better coefficient." The professional conclusion is "this helmet lowers [[P_d]] in the competitive speed window under matched reference conditions." That form of closure improves engineering reliability.`;export{e as default};
