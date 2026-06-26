# Exam-type example

## Problem statement

A test vehicle follows a flat circular turn with constant radius [[r]]. The engineering team wants to verify whether the available lateral tire force is enough to maintain the trajectory without sustained slip. The known quantities are mass [[m]], tangential speed [[v]], and measured period [[T]] for one full lap. The goal is to estimate centripetal acceleration [[ac]], angular speed [[omega]], radial resultant [[Frad]], and centripetal-force magnitude [[Fc]], then interpret whether the outcome is physically consistent with the observed maneuver.

This problem is intentionally built to connect linear and angular descriptions and to reinforce a core idea: centripetal force is not an additional interaction, but the radial resultant of real forces acting on the body.

## Data

- [[m]] = 1200 kg
- [[r]] = 50 m
- [[v]] = 20 m/s
- [[T]] = 15.7 s
- [[pi]] = 3.14159

The instructor also asks for two independent solution routes: one based on [[v]], the other based on [[omega]]. A high-quality solution must show that both routes produce the same order of magnitude for [[ac]] and the same required radial force level.

## System definition

The vehicle is modeled as a particle moving on a planar circular path with fixed radius and nearly constant speed over the measured lap. The radial axis is defined positive toward the turn center. Under this convention, [[Frad]] is the sum of real forces projected along the radial direction, and its magnitude matches [[Fc]] when circular motion is sustained.

No extra "centripetal force" is added to the free-body diagram as a new force. The real diagram contains tire-road lateral interaction, normal force, weight, and possible geometric contributions; their radial resultant is what continuously bends the velocity vector toward the center.

## Physical model

Six core leaf relations are used.

{{f:relacion_omega_periodo}}

{{f:relacion_v_omega}}

{{f:aceleracion_centripeta_v}}

{{f:aceleracion_centripeta_omega}}

{{f:newton_radial}}

{{f:fuerza_centripeta_modulo}}

These relations are complementary rather than redundant: some convert temporal data into angular variables, some connect kinematics to dynamics, and some provide cross-checks between independent computation paths.

## Model justification

The model is appropriate because [[r]] remains approximately constant in the analyzed segment and [[v]] does not show large oscillations. Under these conditions, radial acceleration is the dominant effect for trajectory curvature, and standard circular-motion relations capture the essential physics.

If there were strong speed transients, persistent skid, or variable curvature, the model would need extension. Those failure signals are not dominant here, so the fixed-radius circular framework is sufficient for estimating lateral demand.

## Symbolic solution

First compute [[omega]] from [[T]] and [[pi]] via the period-angle relation. Then compute [[v]] from [[omega]] and [[r]] as a consistency check against telemetry.

For [[ac]], use one route with [[v]] and [[r]], and a second route with [[omega]] and [[r]]. Both expressions must converge because they describe the same radial acceleration using different variable sets.

Next apply radial Newton dynamics to obtain [[Frad]], and use the combined expression for [[Fc]] with [[m]], [[v]], and [[r]]. A consistent solution yields matching force scales and physically coherent units.

## Numerical substitution

After substitution, [[omega]] is about 0.40 rad/s, and the [[v]]-[[omega]]-[[r]] check is consistent with measured speed. Both acceleration routes give [[ac]] close to 8 m/s^2.

Using [[m]] and [[ac]], [[Frad]] is around 9600 N. With the explicit [[Fc]] expression based on [[m]], [[v]], and [[r]], the force level remains in the same range, supporting internal consistency.

The key numerical message is not a single final number but a force-scale requirement: this maneuver needs radial force on the order of ten kilonewtons for the given mass and speed.

## Dimensional validation

The [[omega]] relation from [[T]] yields inverse time units, as required for rad/s. The [[ac]] expression based on [[v]] and [[r]] yields m/s^2. Radial Newton law with [[m]] and [[ac]] yields newtons for [[Frad]], and the [[Fc]] expression has the same dynamic dimension.

This dimensional checkpoint is practically important: it catches common errors such as using diameter instead of radius, mixing km/h with m/s, or keeping [[omega]] in rpm without conversion. If units do not close, the result is not physically interpretable even if algebra steps look correct.

## Physical interpretation

The outcome shows that maintaining this turn requires a substantial inward radial resultant. That requirement does not come from a hidden extra force; it comes from the real interaction set capable of bending the velocity direction continuously.

The central leaf conclusion becomes explicit: at fixed [[r]], increasing [[v]] rapidly increases radial demand. This explains why cornering safety changes dramatically with speed even when speed changes look moderate to a driver.

The solution also separates kinematic and dynamic meaning. [[ac]] quantifies curvature demand, while [[Frad]] and [[Fc]] quantify the mechanical cause required to satisfy that demand.

# Real-world example

## Context

In a packaging plant, a rotary table distributes bottles toward multiple downstream stations. Maintenance detects that some units slide outward when throughput is increased. The technical question is not only rotational speed, but whether required radial force exceeds available contact adherence.

Known inputs include average bottle mass, placement radius, and rotation period. The strategy is to estimate [[omega]], [[ac]], and required radial force for different production rates, then define a safe operating window.

## Physical estimation

At long periods, [[omega]] and [[ac]] are moderate and contact capacity is sufficient. As period is reduced to increase output, [[omega]] rises and radial demand grows nonlinearly in force terms.

The operational reading is clear: there is a rotation threshold above which transport stability collapses. That threshold should be estimated with the same leaf relations and validated by controlled tests rather than intuition alone.

## Interpretation

This case shows why centripetal-force analysis is a process-design tool, not just an exam exercise. It translates throughput decisions into measurable mechanical requirements. It also illustrates why combining angular and linear descriptions improves cross-team communication: operations often monitor period, while quality and safety teams reason in acceleration and force language.

When that causal chain is explicit, operators can tune line speed with physical criteria, reducing both product losses from sliding and unnecessary conservative slowdowns.
