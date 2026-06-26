# Exam-type example

## Problem statement

A solid cylinder of mass [[m]] and radius [[R]] rolls down an incline of angle [[phi]] without slipping. Choose the appropriate solution method and find [[a_cm]], explaining when energy would be useful.

## Data

The known quantities are [[m]], [[R]], [[I]], [[g]], and [[phi]]. For a solid cylinder, the inertia is one half of m times R squared if no other value is given. The rolling condition relates [[a_cm]] and [[alpha]].

## System definition

The system is the cylinder. External forces are weight, normal force, and static friction. The component of weight along the plane drives the center of mass, while static friction produces the torque [[tau]] needed for rotation.

## Physical model

The unknown is [[a_cm]], contact, and coherence among [[alpha]], [[tau]], [[I]], and [[R]], so the strategy starts with dynamics and an FBD. Energy may find the speed after a traveled distance through [[K_total]] and [[E_total]], but it does not by itself give the friction force or its direction.

## Model justification

Ideal rolling is allowed because the statement says no slipping. The incline-acceleration relation already combines translation, rotation, and constraint. If the required static friction exceeded the available limit, the model would have to change.

## Symbolic solution

The center-of-mass acceleration is

The operational expression is:

{{f:aceleracion_rodadura_plano}}

For a solid cylinder, the energy split can also be checked with:

{{f:energia_cinetica_total_rodadura}}

Angular acceleration follows by dividing center acceleration by radius. Total kinetic energy is interpreted through the corresponding energy relation, where [[K_total]] splits translation and rotation. If the statement asked for speed after a height drop, the solution would connect with the total-mechanical-energy relation and [[E_total]].

## Numerical substitution

If [[phi]] is 30 degrees and [[g]] is 9.8 meters per second squared, then sin([[phi]]) is 0.5 and [[a_cm]] is about 3.27 meters per second squared. The result does not depend on [[m]] or [[R]] in this special case because the inertia ratio equals one half.

## Dimensional validation

The numerator has acceleration units and the denominator is dimensionless. [[K_total]] and [[E_total]] are measured in joules, not newtons or meters per second.

## Physical interpretation

The acceleration is smaller than [[g]] sin([[phi]]) because part of the descent feeds rotation. This implies that the result depends on the split between translation and rotation. If the body were a hoop, [[I]] would be larger relative to mass times radius squared and acceleration would decrease. Dynamics was chosen because the cause of rotation was relevant.

This reading is not merely numerical: it explains cause, energy split, and the role of contact. If [[I]] changes, the physical denominator changes; if [[phi]] changes, the gravitational cause changes; if contact fails, the model changes.

# Real-world example

## Context

A laboratory wheel rolls down a gentle ramp. The teacher wants to know whether energy or dynamics is the better first method.

## Physical estimation

If only final speed is requested and there is no slipping, [[E_total]] may be treated as conserved and [[K_total]] must include rotation. If static friction is requested, the FBD is mandatory. If two wheels with different [[I]] are compared, the acceleration formula shows the trend directly.

This physical estimation uses order of magnitude: lost height, energy per kilogram, and expected speed must remain on a reasonable scale for a classroom ramp.

A minimal quantitative reading compares lost height, energy per kilogram, and the split between translation and rotation. For a half-meter drop, available energy per kilogram is a few joules, not hundreds.

## Interpretation

The correct strategy depends on the unknown. Energy answers balance questions; dynamics answers force questions; the rolling condition connects [[v_cm]], [[omega]], [[a_cm]], and [[alpha]]. A good result must be coherent across the SVG, DCL, and Coord graphs.

In a real estimate, a 1 m ramp at 30 degrees drops about 0.5 m in height. The available energy per kilogram is close to 4.9 J. For a solid cylinder, part of that energy becomes translation and part becomes rotation, so final speed is lower than for a block without spin. This quantitative comparison shows why [[K_total]] and [[E_total]] are not decorative: they decide whether energy is enough or whether the FBD must be revisited.

The example is anchored to the leaf because it is not only looking for an acceleration: it shows how the path is chosen using the acceleration relation, the total-kinetic-energy reading, and the total-mechanical-energy reading. If the statement had asked for final speed, starting from energy would have been reasonable. If it had asked for friction, the FBD would be essential. If it had asked whether rolling is possible, the required friction would have to be compared with the static limit. The same physical setup admits different questions, and each question selects a method.

The physical interpretation also does not end with the number 3.27. That value must be read as a consequence of the split between advance and spin. A hollow cylinder would descend more slowly because its relative [[I]] is larger; a block without spin would descend faster if there were no losses; a slipping wheel would not obey the same relation between [[v_cm]] and [[omega]]. The Coord graph can vary [[phi]] and show a smooth trend, while the FBD reminds us that the real cause is the combination of weight, normal force, and static friction.

An order-of-magnitude estimate reinforces the result. In a school ramp, accelerations of a few meters per second squared are plausible. If the result were larger than [[g]] on a moderate incline, the signal would be to review signs, angles, or the inertia denominator. If energy were negative, the reference or units would be wrong. Thus the example teaches method choice, calculation, and validation.