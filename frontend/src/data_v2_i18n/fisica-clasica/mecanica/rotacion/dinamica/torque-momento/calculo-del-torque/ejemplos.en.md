# Exam-type example

## Problem statement
A rigid bar of total length 0.80 m is pinned at its left end and initially at rest. A force

{{f:torque_por_angulo}}

 is applied at the right end, making an angle

{{f:torque_por_angulo}}

with the bar. The task is to compute torque about the hinge axis and infer whether rotation tendency is clockwise or counterclockwise under the declared sign convention. As an internal check, the solution must be obtained using two equivalent routes: angular form and lever-arm form. Assume planar geometry, negligible deformation, and quasi-static force application during the analyzed interval.

## Data
Given data:
- Radial distance [[r]] to application point:

{{f:torque_por_angulo}}

.
- Applied force [[F]] magnitude:

{{f:torque_por_angulo}}

.
- Angle between r and F:

{{f:torque_por_angulo}}

.
- Analysis axis: left hinge, normal to the plane.
- Sign convention: counterclockwise positive.

Derived quantity:
- Lever arm [[b]]

{{f:torque_por_angulo}}

.

Assumptions:
- Planar mechanics.
- Constant force during the calculation window.
- No hinge friction in the main computation.
- Input values treated as deterministic for this exam exercise.

## System definition
Mechanical system: rigid bar with one rotational degree of freedom about the left support. The support constrains translation of the axis while allowing rotation. Force [[F]] acts at the right end. To avoid ambiguity, origin is set at the hinge and z-axis points out of plane. With this convention, positive [[tau]] corresponds to counterclockwise tendency.

A strict distinction is made between radial distance [[r]] and perpendicular distance [[b]]. This distinction is essential because rotational effect depends on [[b]], not on [[r]] alone. Many exam mistakes come from multiplying [[F]] by [[r]] without considering angle.

## Physical model
Selected model: point-force torque about a fixed axis in 2D using the angle-based and lever-arm forms. Main equation is

{{f:torque_por_angulo}}

. Equivalent check equation is

{{f:torque_por_angulo}}

 with

{{f:torque_por_angulo}}

. Both are consistent with the vector definition of torque in planar systems. When force components [[F_x]] and [[F_y]] are known, the planar form applies directly to compute [[tau_z]]. To find angular acceleration [[alpha]], rotational second-law dynamics requires [[I]] and [[tau]].

The model neglects elastic deformation, bearing hysteresis, and dry-friction losses. Those simplifications are acceptable for a fundamentals exercise as long as they are explicitly stated.

## Model justification
Model selection is justified by available inputs: [[r]], [[F]], and [[theta]] are known, so angular form is direct. Since the system is planar, a full 3D formulation is not required to obtain the relevant torque component.

The lever-arm route is included as an internal quality control. If both routes converge, risk of trigonometric or unit mistakes drops significantly. In exam conditions this redundancy is often worth the extra steps.

## Symbolic solution
Step 1: write the primary relation
{{f:torque_brazo}}

Step 2: write the equivalent relation

{{f:torque_por_angulo}}

, then

{{f:torque_por_angulo}}

.

Step 3: infer sign
Under the declared convention, a counterclockwise tendency implies

{{f:torque_por_angulo}}

. A clockwise tendency would imply

{{f:torque_por_angulo}}

.

Step 4: identify the formal planar component when coordinates are known:

{{f:torque_plano}}

. In this simple-geometry problem the angular form suffices, but when [[F_x]] and [[F_y]] components are given, this is the direct route to obtain [[tau_z]].

Step 5: if dynamic response is needed, apply rotational second-law dynamics to get angular acceleration [[alpha]] for a known moment of inertia [[I]] of the bar:

{{f:segunda_ley_rotacional}}

.

Step 6: prepare numerical substitution with SI-consistent units.

## Numerical substitution
Angular route:
{{f:torque_por_angulo}}
With

{{f:torque_por_angulo}}

:

{{f:torque_por_angulo}}

.

Lever-arm route:
{{f:torque_brazo}}
Then

{{f:torque_por_angulo}}

.

Difference is only rounding. Consistent result:

{{f:torque_por_angulo}}

, positive with the chosen sign convention.

## Dimensional validation
Angular form:

{{f:torque_por_angulo}}

.

Lever-arm form:

{{f:torque_brazo}}

.

Units are consistent. Magnitude scale is also plausible: force in the hundreds of newtons and effective arm near half a meter naturally produce torque in the

{{f:torque_por_angulo}}

 range. A

{{f:torque_por_angulo}}

result here would indicate conversion or geometry misuse.

## Physical interpretation
The result indicates a clear counterclockwise rotational tendency. Physically, force orientation is effective and the combination of force magnitude plus lever arm yields moderate-to-high torque for a bench-scale bar. If hinge admissible limit were

{{f:torque_por_angulo}}

, this would imply overload risk. If limit were

{{f:torque_por_angulo}}

, operation would remain inside margin.

The dual-route agreement confirms proper model usage. Final reading is therefore not merely "number obtained" but "number consistent with geometry, units, and rotation sense".

# Real-world example

## Context
In industrial maintenance, a technician must loosen a large bolt in a production line. The procedure requires overcoming residual tightening torque near

{{f:torque_brazo}}

. The available torque wrench has effective arm

{{f:torque_brazo}}

. Because of space constraints, perfectly perpendicular application is not always possible. In some body positions, force is applied at unfavorable angles that reduce useful torque.

Operational question: estimate minimum force needed in two scenarios, ideal perpendicular and inclined case with

{{f:torque_por_angulo}}

relative to the equivalent radial direction. Also explain why two technicians with similar strength may get different outcomes depending on posture and access geometry.

## Physical estimation
Scenario 1, perpendicular:

{{f:torque_brazo}}

.

Scenario 2, inclined:
Using the angle-based form, the equivalent effective arm is

{{f:torque_por_angulo}}

. Then

{{f:torque_brazo}}

.

Operational difference is about 120 N additional force in the inclined case. This explains why apparently similar maneuvers can fail when near-perpendicular application is lost. When angular acceleration [[alpha]] is also needed, rotational second-law dynamics with the moment of inertia [[I]] of the assembly gives the complete dynamic picture. If force components [[F_x]] and [[F_y]] are available, the planar form offers an equivalent route to [[tau_z]] without requiring the angle explicitly.

Quick sensitivity check: an angular uncertainty of pm5^? around 55^? changes sin([[theta]]) enough to alter required force by several percent. Safety procedures therefore recommend improving geometry first, not simply pushing harder.

A direct estimate in this scenario gives approximately 400 N for the perpendicular case and about 520 N for the inclined case, which is a 30 percent increase in required effort due only to geometry.

## Interpretation
Core physical reading: geometry controls efficiency of applied force. "More force" alone is not a robust strategy; the same operator can be effective or ineffective depending on stance, hand placement, and tool orientation. From a safety perspective, applying higher force with poor geometry raises injury risk without guaranteed success.

Maintenance implications are direct: use extension bars to increase effective arm, reposition body to approach 90^?, and validate with calibrated torque tools rather than subjective effort perception. In this way, torque modeling becomes actionable guidance for productivity, repeatability, and safe operation.