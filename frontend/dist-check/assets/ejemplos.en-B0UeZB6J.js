const n=`# Exam-type example\r
\r
## Problem statement\r
A rigid bar of total length 0.80 m is pinned at its left end and initially at rest. A force\r
\r
{{f:torque_por_angulo}}\r
\r
 is applied at the right end, making an angle\r
\r
{{f:torque_por_angulo}}\r
\r
with the bar. The task is to compute torque about the hinge axis and infer whether rotation tendency is clockwise or counterclockwise under the declared sign convention. As an internal check, the solution must be obtained using two equivalent routes: angular form and lever-arm form. Assume planar geometry, negligible deformation, and quasi-static force application during the analyzed interval.\r
\r
## Data\r
Given data:\r
- Radial distance [[r]] to application point:\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
- Applied force [[F]] magnitude:\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
- Angle between r and F:\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
- Analysis axis: left hinge, normal to the plane.\r
- Sign convention: counterclockwise positive.\r
\r
Derived quantity:\r
- Lever arm [[b]]\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
\r
Assumptions:\r
- Planar mechanics.\r
- Constant force during the calculation window.\r
- No hinge friction in the main computation.\r
- Input values treated as deterministic for this exam exercise.\r
\r
## System definition\r
Mechanical system: rigid bar with one rotational degree of freedom about the left support. The support constrains translation of the axis while allowing rotation. Force [[F]] acts at the right end. To avoid ambiguity, origin is set at the hinge and z-axis points out of plane. With this convention, positive [[tau]] corresponds to counterclockwise tendency.\r
\r
A strict distinction is made between radial distance [[r]] and perpendicular distance [[b]]. This distinction is essential because rotational effect depends on [[b]], not on [[r]] alone. Many exam mistakes come from multiplying [[F]] by [[r]] without considering angle.\r
\r
## Physical model\r
Selected model: point-force torque about a fixed axis in 2D using the angle-based and lever-arm forms. Main equation is\r
\r
{{f:torque_por_angulo}}\r
\r
. Equivalent check equation is\r
\r
{{f:torque_por_angulo}}\r
\r
 with\r
\r
{{f:torque_por_angulo}}\r
\r
. Both are consistent with the vector definition of torque in planar systems. When force components [[F_x]] and [[F_y]] are known, the planar form applies directly to compute [[tau_z]]. To find angular acceleration [[alpha]], rotational second-law dynamics requires [[I]] and [[tau]].\r
\r
The model neglects elastic deformation, bearing hysteresis, and dry-friction losses. Those simplifications are acceptable for a fundamentals exercise as long as they are explicitly stated.\r
\r
## Model justification\r
Model selection is justified by available inputs: [[r]], [[F]], and [[theta]] are known, so angular form is direct. Since the system is planar, a full 3D formulation is not required to obtain the relevant torque component.\r
\r
The lever-arm route is included as an internal quality control. If both routes converge, risk of trigonometric or unit mistakes drops significantly. In exam conditions this redundancy is often worth the extra steps.\r
\r
## Symbolic solution\r
Step 1: write the primary relation\r
{{f:torque_brazo}}\r
\r
Step 2: write the equivalent relation\r
\r
{{f:torque_por_angulo}}\r
\r
, then\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
\r
Step 3: infer sign\r
Under the declared convention, a counterclockwise tendency implies\r
\r
{{f:torque_por_angulo}}\r
\r
. A clockwise tendency would imply\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
\r
Step 4: identify the formal planar component when coordinates are known:\r
\r
{{f:torque_plano}}\r
\r
. In this simple-geometry problem the angular form suffices, but when [[F_x]] and [[F_y]] components are given, this is the direct route to obtain [[tau_z]].\r
\r
Step 5: if dynamic response is needed, apply rotational second-law dynamics to get angular acceleration [[alpha]] for a known moment of inertia [[I]] of the bar:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
.\r
\r
Step 6: prepare numerical substitution with SI-consistent units.\r
\r
## Numerical substitution\r
Angular route:\r
{{f:torque_por_angulo}}\r
With\r
\r
{{f:torque_por_angulo}}\r
\r
:\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
\r
Lever-arm route:\r
{{f:torque_brazo}}\r
Then\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
\r
Difference is only rounding. Consistent result:\r
\r
{{f:torque_por_angulo}}\r
\r
, positive with the chosen sign convention.\r
\r
## Dimensional validation\r
Angular form:\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
\r
Lever-arm form:\r
\r
{{f:torque_brazo}}\r
\r
.\r
\r
Units are consistent. Magnitude scale is also plausible: force in the hundreds of newtons and effective arm near half a meter naturally produce torque in the\r
\r
{{f:torque_por_angulo}}\r
\r
 range. A\r
\r
{{f:torque_por_angulo}}\r
\r
result here would indicate conversion or geometry misuse.\r
\r
## Physical interpretation\r
The result indicates a clear counterclockwise rotational tendency. Physically, force orientation is effective and the combination of force magnitude plus lever arm yields moderate-to-high torque for a bench-scale bar. If hinge admissible limit were\r
\r
{{f:torque_por_angulo}}\r
\r
, this would imply overload risk. If limit were\r
\r
{{f:torque_por_angulo}}\r
\r
, operation would remain inside margin.\r
\r
The dual-route agreement confirms proper model usage. Final reading is therefore not merely "number obtained" but "number consistent with geometry, units, and rotation sense".\r
\r
# Real-world example\r
\r
## Context\r
In industrial maintenance, a technician must loosen a large bolt in a production line. The procedure requires overcoming residual tightening torque near\r
\r
{{f:torque_brazo}}\r
\r
. The available torque wrench has effective arm\r
\r
{{f:torque_brazo}}\r
\r
. Because of space constraints, perfectly perpendicular application is not always possible. In some body positions, force is applied at unfavorable angles that reduce useful torque.\r
\r
Operational question: estimate minimum force needed in two scenarios, ideal perpendicular and inclined case with\r
\r
{{f:torque_por_angulo}}\r
\r
relative to the equivalent radial direction. Also explain why two technicians with similar strength may get different outcomes depending on posture and access geometry.\r
\r
## Physical estimation\r
Scenario 1, perpendicular:\r
\r
{{f:torque_brazo}}\r
\r
.\r
\r
Scenario 2, inclined:\r
Using the angle-based form, the equivalent effective arm is\r
\r
{{f:torque_por_angulo}}\r
\r
. Then\r
\r
{{f:torque_brazo}}\r
\r
.\r
\r
Operational difference is about 120 N additional force in the inclined case. This explains why apparently similar maneuvers can fail when near-perpendicular application is lost. When angular acceleration [[alpha]] is also needed, rotational second-law dynamics with the moment of inertia [[I]] of the assembly gives the complete dynamic picture. If force components [[F_x]] and [[F_y]] are available, the planar form offers an equivalent route to [[tau_z]] without requiring the angle explicitly.\r
\r
Quick sensitivity check: an angular uncertainty of pm5^? around 55^? changes sin([[theta]]) enough to alter required force by several percent. Safety procedures therefore recommend improving geometry first, not simply pushing harder.\r
\r
A direct estimate in this scenario gives approximately 400 N for the perpendicular case and about 520 N for the inclined case, which is a 30 percent increase in required effort due only to geometry.\r
\r
## Interpretation\r
Core physical reading: geometry controls efficiency of applied force. "More force" alone is not a robust strategy; the same operator can be effective or ineffective depending on stance, hand placement, and tool orientation. From a safety perspective, applying higher force with poor geometry raises injury risk without guaranteed success.\r
\r
Maintenance implications are direct: use extension bars to increase effective arm, reposition body to approach 90^?, and validate with calibrated torque tools rather than subjective effort perception. In this way, torque modeling becomes actionable guidance for productivity, repeatability, and safe operation.`;export{n as default};
