const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A test vehicle runs on a straight track, and the team must estimate drag force at two operating points to verify whether propulsion has enough margin. The flow regime in the selected range is known to be well approximated by quadratic drag. The task is to compute [[F_d]] for two values of [[v]] and justify why the change cannot be interpreted as linear.\r
\r
## Data\r
\r
Available inputs include air density [[rho]], prototype drag coefficient [[C_d]], and frontal area [[A]]. A calibrated value of [[c]] is also provided so that two solution routes can be compared. The two operating speeds are [[v]]_1 and [[v]]_2, with [[v]]_2 close to twice [[v]]_1.\r
\r
The explicit objective is to compare a reduced route using [[c]] against a bridge route using [[rho]], [[C_d]], and [[A]], and to verify consistency within experimental tolerance.\r
\r
## System definition\r
\r
The system is the vehicle treated as a rigid body in horizontal translation. Slope variation and crosswind coupling are neglected in this exam version. The fluid reference is still air in the lab frame.\r
\r
In the horizontal free-body reading, propulsion must compensate [[F_d]] plus additional terms not modeled here. This is acceptable because the exam focus is quadratic drag interpretation, not full drivetrain closure.\r
\r
## Physical model\r
\r
Reduced operational law:\r
\r
{{f:arrastre_cuadratico_reducido}}\r
\r
Bridge law for coefficient interpretation:\r
\r
{{f:coeficiente_cuadratico_equivalente}}\r
\r
Together, these equations connect fast force estimation with physical meaning of [[c]].\r
\r
## Model justification\r
\r
The quadratic model is selected for three reasons. First, the speed range is high enough for nonlinearity to be visible in measurements. Second, the lab reports stable [[C_d]] in the working window, so regime drift is limited. Third, the exam is designed to test scaling reasoning, and quadratic scaling is the conceptual core of this leaf.\r
\r
The model is also useful for design interpretation. If [[F_d]] rises with the square of [[v]], then geometry improvements become increasingly valuable at higher speed.\r
\r
## Symbolic solution\r
\r
Route 1, using calibrated [[c]]:\r
\r
{{f:arrastre_cuadratico_reducido}}\r
\r
Compute [[F_d]]_1 at [[v]]_1 and [[F_d]]_2 at [[v]]_2.\r
\r
Route 2, reconstructing [[c]]:\r
\r
{{f:coeficiente_cuadratico_equivalente}}\r
\r
Then recompute [[F_d]] values through the reduced law and compare with route 1.\r
\r
The symbolic control step is ratio analysis:\r
\r
- speed ratio: [[v]]_2/[[v]]_1\r
- force ratio: [[F_d]]_2/[[F_d]]_1\r
\r
In ideal quadratic behavior, the force ratio approaches the square of the speed ratio.\r
\r
## Numerical substitution\r
\r
With representative lab values, the lower speed produces moderate drag and the higher speed produces clearly larger drag. When [[v]]_2 is near twice [[v]]_1, force moves toward a fourfold increase, with small deviations explained by rounding and measurement uncertainty.\r
\r
Using the bridge route, reconstructed [[c]] agrees with calibrated [[c]] within tolerance. That agreement confirms physical consistency: [[c]] is not an arbitrary fitting number when [[rho]], [[C_d]], and [[A]] are defined consistently.\r
\r
## Dimensional validation\r
\r
Dimensional checks require [[F_d]] in N and [[c]] in units compatible with force divided by speed squared. In the bridge relation, [[rho]] contributes density, [[A]] contributes area, and [[C_d]] is dimensionless, preserving consistency.\r
\r
Domain checks are also required: [[c]] must remain nonnegative, and [[v]] is treated as nonnegative speed in this scalar formulation.\r
\r
## Physical interpretation\r
\r
The result shows that speed increase has nonlinear drag cost. At high speed, geometric improvements can reduce force demand significantly, while speed increases without redesign can quickly overload propulsion margin.\r
\r
A second interpretation is comparative: equal [[v]] does not guarantee equal [[F_d]] if [[A]], [[rho]], or [[C_d]] differ. This is why the leaf is not merely about one force formula; it is about identifying which design variable should be changed first.\r
\r
# Real-world example\r
\r
## Context\r
\r
A road-cycling team evaluates posture options for a short time trial. Telemetry provides speed traces and rough power estimates. The coach needs a mechanism-based interpretation to choose between two configurations: upright control posture and low aerodynamic posture.\r
\r
Mass and pedaling mechanics are similar in both cases. The dominant change is frontal area [[A]], with a secondary change in [[C_d]]. Air density [[rho]] is nearly constant during the test window.\r
\r
## Physical estimation\r
\r
First, estimate equivalent coefficient for each posture:\r
\r
{{f:coeficiente_cuadratico_equivalente}}\r
\r
Then estimate drag force at the same target [[v]]:\r
\r
{{f:arrastre_cuadratico_reducido}}\r
\r
The low posture reduces [[A]], therefore reducing [[c]] and shifting the [[F_d]]-[[v]] curve downward. The force difference is moderate at medium speed but becomes much larger near the high-speed end. This matches the quadratic scaling expected from the model.\r
\r
Operationally, the team concludes that the low posture gives accumulated energetic benefit on fast straight segments. On technical segments, upright posture may still be preferred for handling, accepting higher [[F_d]]. The decision is therefore physically informed, not purely numerical.\r
\r
## Interpretation\r
\r
This real case confirms two core messages. First, drag reduction is not only about lowering speed; it is often about improving [[A]] and [[C_d]] so that the same speed requires less resistance compensation. Second, interpreting [[c]] links field measurements with actionable setup decisions without requiring full CFD for each iteration.\r
\r
The comparison also differentiates this leaf from its siblings. This leaf does not primarily classify regimes or solve full terminal-velocity closure. Its focus is practical reading of nonlinear [[F_d]] growth with [[v]] and its design implications.\r
`;export{e as default};
