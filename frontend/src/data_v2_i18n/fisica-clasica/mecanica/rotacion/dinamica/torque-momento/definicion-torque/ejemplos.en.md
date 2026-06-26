# Exam-type example

## Problem statement
A rigid bar of total length 0.80 m is pinned at the left end and initially at rest. At the right end, an external force [[F]] of 240 N is applied at angle [[theta]] of 35 degrees relative to the bar. The task is to compute torque [[tau]] about the hinge axis, determine sign using an explicit convention, and cross-check the value through two equivalent routes. The exercise also asks what changes if Cartesian components [[F_x]] and [[F_y]] are given, and how the result connects to angular acceleration [[alpha]] when moment of inertia [[I]] is known.

## Data
Declared data for the base case:
- Radial distance [[r]] between pivot and application point: 0.80 m.
- Applied force [[F]]: 240 N.
- Angle [[theta]] between [[r]] and [[F]]: 35 degrees.
- Analysis axis: axis normal to the plane through the hinge.
- Sign convention: counterclockwise positive.

Extension data for component check:
- Coordinate [[x]] of application point relative to pivot: 0.80 m.
- Coordinate [[y]] of application point relative to pivot: 0.00 m.
- Component [[F_x]] in an alternative scenario: 60 N.
- Component [[F_y]] in an alternative scenario: 210 N.

Assumptions:
- Planar geometry.
- Bar treated as rigid.
- Hinge friction negligible for the main computation.
- Quasi-steady force during the analyzed interval.

## System definition
The system is the bar plus its fixed support. The environment applies force [[F]] at the free end, while the hinge provides reactions that block translation at the pivot. To remove ambiguity, origin is set at the hinge and positive rotation is declared counterclockwise. With this setup, the sign of [[tau]] has immediate physical meaning.

The conceptual key is separating radial distance [[r]] from lever arm [[b]]. The first links axis and application point; the second is the perpendicular distance from axis to the force line of action. Torque does not depend on [[r]] alone, but on geometry through [[b]]. This distinction prevents the common mistake of multiplying force by radial distance when the angle is not right.

## Physical model
Base relation for this leaf:

{{f:torque_por_angulo}}

Equivalent lever-arm check:

{{f:torque_brazo}}

If coordinates and force components are available, axial torque is computed with:

{{f:torque_plano}}

If rotational dynamics is needed, use:

{{f:segunda_ley_rotacional}}

These four relations belong to the same physical framework. They are complementary: pick the most direct one from available data, then use others for consistency checks or to extend analysis from rotational statics to dynamics.

## Model justification
The angle model is appropriate because [[r]], [[F]], and [[theta]] are explicitly provided. The [[b]] route serves as internal quality control: if both routes converge, trigonometric and unit errors are less likely. The component form is robust when a problem gives [[F_x]] and [[F_y]] instead of angle.

Rotational second law is not required for the first torque question, but including it shows how the same result connects to dynamic response. This prevents the example from becoming a pure substitution drill and anchors interpretation: [[tau]] acts as cause, [[alpha]] as response, modulated by [[I]].

## Symbolic solution
Step 1. Primary angle relation:

{{f:torque_por_angulo}}

Step 2. Equivalent lever-arm relation:

{{f:torque_brazo}}

with [[b]] = [[r]] sin([[theta]]).

Step 3. Component relation for an alternative scenario:

{{f:torque_plano}}

Step 4. Dynamic connection if [[I]] is known:

{{f:segunda_ley_rotacional}}

Step 5. Sign rule: with counterclockwise positive convention, counterclockwise tendency implies [[tau]] greater than zero, clockwise tendency implies [[tau]] less than zero.

## Numerical substitution
Angle route:
- [[r]] = 0.80 m
- [[F]] = 240 N
- [[theta]] = 35 degrees
- sin(35 degrees) approximately 0.574
- Result: [[tau]] approximately 0.80 times 240 times 0.574, which is about 110 N m.

Lever-arm route:
- [[b]] = [[r]] sin([[theta]]) = 0.80 times 0.574, so [[b]] approximately 0.459 m.
- [[tau]] = [[b]] [[F]] = 0.459 times 240, again about 110 N m.

Component route in alternative scenario:
- [[x]] = 0.80 m, [[y]] = 0.00 m, [[F_x]] = 60 N, [[F_y]] = 210 N.
- [[tau_z]] = [[x]] [[F_y]] minus [[y]] [[F_x]] = 0.80 times 210 minus 0.00 times 60.
- Result: [[tau_z]] approximately 168 N m.

Dynamic connection with sample inertia:
- If [[I]] = 12 kg m2 and [[tau]] = 110 N m, then [[alpha]] is about 110 divided by 12, i.e. 9.17 rad per s2.

## Dimensional validation
In both angle and lever-arm routes, final dimension is force times distance, equivalent to N m. In the component route, coordinates multiply force components, producing the same torque unit. In rotational second law, dividing torque by [[I]] yields angular acceleration units, consistent with [[alpha]].

Scale check: for forces in the hundreds of newtons and distances near half a meter, torque around one hundred N m is plausible. A value in the thousands for this setup would indicate conversion or geometry misuse.

## Physical interpretation
Positive [[tau]] means counterclockwise tendency under the declared convention. The important physical reading is not only the number, but the causal dependence: increasing [[F]] increases [[tau]], increasing [[b]] increases [[tau]], and reducing [[theta]] toward zero strongly reduces rotational effect. This explains why two operators with similar strength can get different outcomes from posture and tool orientation.

Agreement between angle and lever-arm routes confirms internal model consistency. The component route shows that when a problem is written in coordinates, the same rotational magnitude can be recovered without explicit angle. Finally, the dynamic extension links torque to real rotational response: for fixed [[tau]], larger [[I]] produces slower angular acceleration.

# Real-world example

## Context
In industrial maintenance, a technician must loosen a bolt with resistant torque near 180 N m. Available wrench radius is [[r]] = 0.35 m. Due to access restrictions, force cannot always be applied perpendicularly. Two scenarios are compared: near-ideal with [[theta]] close to 90 degrees, and constrained access with [[theta]] at 55 degrees. Goal is to estimate minimum required force and decide whether to keep pushing or change geometry.

## Physical estimation
Near-perpendicular case:
- Approximate maximum lever arm, [[b]] close to [[r]].
- Minimum force about 180 divided by 0.35, around 514 N.

Inclined case at 55 degrees:
- Effective [[b]] = [[r]] sin([[theta]]) = 0.35 times sin(55 degrees), approximately 0.287 m.
- Minimum force about 180 divided by 0.287, around 628 N.

Quantitative reading:
- Geometric penalty about 114 N extra.
- Relative increase close to 22 percent versus near-perpendicular case.
- If the operator cannot sustain that increase safely, correct strategy is to redesign access instead of brute force.

If two-axis force sensing is available, [[F_x]] and [[F_y]] can be used to compute [[tau_z]] directly and check in real time whether useful torque exceeds breakaway threshold. If startup transient is modeled with effective inertia [[I]], rotational dynamics gives a first estimate of [[alpha]] and expected response delay.

## Interpretation
Operational conclusion is that geometry controls efficiency. With the same tool and almost the same muscular capacity, moving from favorable to unfavorable angle can make the task impractical. Recommended action is to increase effective [[b]], move posture to bring [[theta]] closer to 90 degrees, and only then consider higher force.

There is also a safety implication: higher force under poor geometry raises injury and tool-slip risk. A robust procedure combines quick torque estimation, tool-limit verification, and ergonomic adjustment. In this way, torque becomes a decision criterion in real field work, not just a classroom calculation.
