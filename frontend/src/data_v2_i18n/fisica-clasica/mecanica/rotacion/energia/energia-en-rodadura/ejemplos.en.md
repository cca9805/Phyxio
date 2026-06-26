# Exam-type example

## Problem statement

A solid cylinder of mass [[m]] equal to 4 kg, radius [[R]] equal to 0.20 m, and moment of inertia [[I]] equal to 0.08 kg m^2 rolls without slipping with center-of-mass speed [[v_cm]] equal to 3 m/s. Compute angular speed [[omega]], total kinetic energy [[K_total]], and explain the split between translation and rotation.

## Data

The data are

{{f:energia_total_rodadura}}

,

{{f:energia_total_rodadura}}

,

{{f:energia_total_rodadura}}

. Because the statement declares rolling without slipping, the rolling contact condition can be used to find [[omega]]. The core energy formula is the sum of translational and rotational contributions.

## System definition

The system is the cylinder. The surface only imposes the contact condition and, in the ideal model, extracts no mechanical energy. We do not include Earth unless an incline with [[g]] and [[phi]] is analyzed. Here the target is instantaneous kinetic energy [[K_total]], not [[E_total]].

## Physical model

The physical model is a rigid body in pure rolling. [[I]] belongs to the central axis, [[R]] is the contact radius, and all points share the same [[omega]]. The relation between [[a_cm]] and [[alpha]] would be valid for acceleration analysis, although it is not needed for instantaneous energy.

## Model justification

The phrase “without slipping” allows

{{f:energia_total_rodadura}}

. The solid cylinder has constant [[I]], and [[v_cm]] already describes center-of-mass advance. No dissipative work is declared, so the energy split is read as the sum of two mechanical contributions.

## Symbolic solution

First compute [[omega]] with

{{f:condicion_rodadura_energia}}

Then substitute in

{{f:energia_total_rodadura}}

so [[K_total]] is the sum of 0.5 [[m]] [[v_cm]]^2 and 0.5 [[I]] [[omega]]^2. For an incline,

{{f:energia_mecanica_total_rodadura}}

would connect [[E_total]], [[g]], and [[phi]].

If the statement asked for acceleration,

{{f:aceleracion_cm_rodadura}}

would also be used to relate [[a_cm]] and [[alpha]]. This example does not require solving [[a_cm]], but mentioning the relation shows that the same contact condition linking speeds also links accelerations when slipping is absent.

## Numerical substitution

The condition gives

{{f:energia_total_rodadura}}

. The translational part is 0.5 * 4 * 3^2 = 18 J. The rotational part is 0.5 * 0.08 * 15^2 = 9 J. Therefore

{{f:energia_total_rodadura}}

. One third of kinetic energy is in spin and two thirds in center-of-mass advance.

## Dimensional validation

The translational part has units kg m^2 s^-2, and the rotational part also has those units because [[I]] is measured in kg m^2 and [[omega]] contributes s^-1. The sum is joules. Also, [[R]] in meters correctly converts angular speed into linear speed.

## Physical interpretation

The result means the cylinder does not use all kinetic energy to move its center. A part remains tied to rotation. If the body were a hoop with larger [[I]] for the same [[m]] and [[R]], the rotational fraction would increase. If slipping occurred, these 27 J would not close the balance because some energy could become heat.

# Real-world example

## Context

On a bicycle, wheels store translational energy with the bicycle and rotational energy about their axles. A wheel with more mass near the rim has larger [[I]] and requires more work to accelerate. We estimate why two wheels with equal mass can feel different during starts.

## Physical estimation

Take a wheel with

{{f:energia_total_rodadura}}

,

{{f:energia_total_rodadura}}

,

{{f:energia_total_rodadura}}

, and

{{f:energia_total_rodadura}}

. The rolling condition gives [[omega]] about 23.5 rad/s. Translational energy is 48 J, and rotational energy is about 36 J, so [[K_total]] is near 84 J. Another wheel with smaller [[I]] would require less rotational energy at the same speed. As an order-of-magnitude estimate, reducing the rotational share by 10 J per wheel saves 20 J for two wheels each time the bicycle reaches that speed from rest.

## Interpretation

The estimate indicates that mass distribution matters as much as total mass. During repeated accelerations, more rotational energy means more work supplied by the rider. The ideal model excludes tire deformation, bearing losses, and air resistance, so a real bicycle requires [[E_total]] with dissipative terms. Even so, the split between translation and rotation explains why some wheels feel more responsive than others.

The same estimate can detect slipping. If a wheel sensor reports an [[omega]] that is incompatible with [[v_cm]] and [[R]], the pure rolling calculation no longer describes the real process. Then part of [[E_total]] becomes heat, sound, and deformation, and the ideal estimate must be corrected before it is used for motor sizing or performance comparison.

A useful final check is to compare the rotational part with the translational part before drawing conclusions. If the rotational part is a large fraction of [[K_total]], changing rim design or mass distribution will matter. If it is small, losses elsewhere may dominate performance. This prevents attributing every efficiency problem to rolling inertia when the main cause may be contact, air drag, or bearings.

A practical validation step is to compare this estimate with measured acceleration time over a fixed distance. If two wheels with similar total mass still show different launch times under the same rider power, differences in [[I]] or contact losses can explain the gap. This keeps the interpretation tied to observable behavior.