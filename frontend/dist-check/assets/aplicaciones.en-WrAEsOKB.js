const e=`# Applications: Center of Mass in Extended Bodies\r
\r
## 1. Hand tool balance and ergonomics\r
\r
In industrial product design, a hammer or long wrench is judged not only by strength but also by perceived balance. That feeling is strongly controlled by the center-of-mass position [[R_cm]] relative to the grip point. If [[R_cm]] is too far away, perceived rotational inertia rises and user fatigue appears earlier.\r
\r
Dominant variable: [[R_cm]]\r
\r
Validity limit: rigid-body approximation with stable internal mass distribution.\r
\r
Design teams usually model the handle as a linear segment (using [[lambda]] and [[L]]) and the metal head as a volume (using [[rho]] and [[V]]). They compute total [[M]] and first moment to verify that the effective center falls inside an ergonomic window. If not, material is redistributed rather than simply adding mass.\r
\r
The physical lesson is direct: two tools with identical [[M]] can feel very different because local [[dm]] is distributed differently.\r
\r
## 2. Stability margins in lightweight mobile robots\r
\r
A small inspection robot climbing ramps must stay stable under acceleration and vibration. Computing [[xcm]] predicts tipping margin before full prototyping. If battery and electronics shift only a few centimeters, stability reserve may collapse even with unchanged motor power.\r
\r
Dominant variable: [[xcm]]\r
\r
Validity limit: quasi-static model for slow maneuvers without strong impacts.\r
\r
Engineers split the platform into subsystems: battery pack (volume [[V]]), control board (surface [[A]]), wiring and slender arms (length [[L]]). Combining [[rho]], [[sigma]], and [[lambda]], they reconstruct [[M]] and [[R_cm]]. When [[xcm]] approaches the support polygon boundary, architecture changes are mandatory.\r
\r
This application shows how the leaf converts intuition into a quantitative design rule.\r
\r
## 3. Attitude-control alignment in nanosatellites\r
\r
For nanosatellites, center-of-mass alignment with actuator reference axes is critical. Even millimeter-scale offsets create parasitic torques and continuous control effort, which reduces mission lifetime by wasting energy.\r
\r
Dominant variable: [[R_cm]]\r
\r
Validity limit: rigid structure without large internal mass redistribution.\r
\r
Subsystem modeling mixes panel-like parts (surface model with [[sigma]] and [[A]]), compact components (volume model with [[rho]] and [[V]]), and slender harnesses (linear model with [[lambda]] and [[L]]). The purpose is not only to compute [[M]] but to keep [[R_cm]] inside strict geometric tolerances.\r
\r
The physical interpretation is that incorrect mass placement alters rotational dynamics, so the control law no longer matches the real vehicle.\r
\r
## 4. Biomechanical posture assessment in rehabilitation\r
\r
In clinical motion analysis, the human body is approximated as an articulated set of extended segments. The global center of mass helps quantify balance, fall risk, and rehabilitation progress. The model is inherently distributed: each segment contributes local [[dm]] according to geometry and composition.\r
\r
Dominant variable: [[R_cm]]\r
\r
Validity limit: segment-averaged anthropometric model, sensitive to parameter uncertainty.\r
\r
Practitioners use estimated segment masses [[M]], segment lengths [[L]], and reference coordinates [[x]]. Although real tissues show spatially varying [[rho]], simplified effective densities are used for rapid decisions. When higher precision is required, imaging-based refinement is added.\r
\r
This case highlights that center-of-mass reasoning is not only for textbook mechanics; it supports clinically relevant decisions.\r
\r
## 5. Packaging and logistics optimization\r
\r
In transport engineering, meeting weight limits is insufficient. If package center of mass is shifted with respect to lifting points or vehicle axes, oscillation and extra structural loads appear during handling and braking.\r
\r
Dominant variable: [[xcm]]\r
\r
Validity limit: rigid package with no internal motion during transport.\r
\r
Operationally, each submodule is represented by an equivalent surface or volume contribution. Using [[M]], [[I_x]], and [[xcm]], teams evaluate whether internal layout, separators, or tie-down points must be redesigned. The gains are lower damage rates and safer handling.\r
\r
Across all five contexts, one pattern repeats: the practical question is where [[R_cm]] lies and how it is built from [[dm]]. What changes is geometry and therefore how [[lambda]], [[sigma]], [[rho]], [[L]], [[A]], and [[V]] enter the model. That transferable modeling skill is the core value of this leaf.

The final operational criterion is to compare the computed center of mass with an actual decision: support point, control axis, safety margin, or manufacturing tolerance. If the calculation does not change any of those decisions, a simpler model may be enough; if the displacement of [[R_cm]] changes stability or control effort, continuous integration is the right tool.

A useful engineering workflow is to start with a uniform estimate, then add the dominant nonuniform contribution and check whether [[xcm]] or [[R_cm]] moves by a meaningful amount. This avoids unnecessary detail while still catching the cases where a battery, reinforcement, cavity, or dense insert moves the balance point enough to matter.

The same logic also prevents overfitting. The goal is not to describe every molecule of material, but to capture the mass distribution at the resolution required by the task. In packaging, centimeters may be acceptable; in a nanosatellite, millimeters can be decisive.

That scale-dependent judgment is what separates a useful center-of-mass model from a decorative calculation with no engineering consequence.
`;export{e as default};
