# Exam-type example


## Problem statement

A very long straight wire carries a steady current of 8 A. Estimate the magnetic field at 5.0 cm from the conductor and compare it with the field at the center of a circular loop of radius [[radio_de_espira]] equal to 5.0 cm carrying the same current. Explain the role of [[dl]], [[distancia_al_punto_de_observacion]], and [[s_theta]] before using the integrated formulas.

## Data

- Wire and loop current: 8 A.
- Perpendicular distance from the wire: 5.0 cm, equivalent to 0.050 m.
- Loop radius: 5.0 cm, equivalent to 0.050 m.
- Medium approximation: air, treated as vacuum.
- Unknown: [[campo_magnetico]] for the wire and at the loop center.

The data have the same length scale, but not the same geometry. In the long wire, contributions surround an extended line. In the loop, contributions organize around a common center.

## System definition

The first system is an ideal straight conductor, very long compared with the observation distance. Each element [[dl]] gives a contribution [[contribucion_diferencial_de_campo]], and symmetry makes the final field tangential around the wire.

The second system is an ideal circular loop. At the center, all elements are at distance [[radio_de_espira]] and their useful contributions point in the same axial direction. The angular factor [[s_theta]] is maximal for loop elements viewed from the center.

## Physical model

The physical model is magnetostatic. The local law describes [[contribucion_diferencial_de_campo]] from [[mu0]], [[corriente_electrica]], [[dl]], [[s_theta]], and [[distancia_al_punto_de_observacion]]. The long-wire and center-loop formulas are used only because symmetry allows those contributions to be summed without solving a complete integral at every step.

## Model justification

The model is valid because current is steady, the conductor is treated as thin, and the observation point is not inside the material. For the wire, the ideal length removes edge effects. For the loop, the central point preserves circular symmetry.

It would stop being valid near ends, in thick conductors, with rapidly alternating current, or if the loop point were not at the center. In those cases, direction of [[contribucion_diferencial_de_campo]] and real distance change non-negligibly.

## Symbolic solution

The elementary contribution that organizes the reasoning is:

{{f:biot_savart_diferencial}}

For the long straight wire, summing contributions over the whole line gives:

{{f:campo_hilo_largo}}

For the circular loop observed at its center, summing axial contributions gives:

{{f:campo_espira_centro}}

The comparison does not depend only on the numerical lengths being equal. It depends on how current elements are oriented and on which directions of [[contribucion_diferencial_de_campo]] cancel or reinforce.

## Numerical substitution

For the wire, take the magnetic constant of vacuum, multiply by 8 A, and divide by the perimeter associated with 0.050 m. The result is approximately 3.2e-5 T, so [[campo_magnetico]] is of the order of 32 microteslas.

For the central loop, multiply the magnetic constant by 8 A and divide by twice the radius 0.050 m. The result is approximately 1.0e-4 T, so [[campo_magnetico]] is of the order of 100 microteslas at the center.

## Dimensional validation

In both integrated results, permeability provides the magnetic relation between current and field, current provides the source, and division by length fixes the spatial scale. The output is expressed in teslas, the unit of [[campo_magnetico]].

In the differential form, [[dl]] contributes length and the denominator contains distance squared. This leaves an effective length in the denominator, so the result also produces teslas after including [[mu0]] and [[corriente_electrica]].

## Physical interpretation

The loop produces a stronger central field than the wire at the same length scale because all useful contributions organize around the center. In the long wire, geometry spreads the contribution around circles centered on the conductor.

If current were doubled, both fields would double. If [[distancia_al_punto_de_observacion]] were doubled in the wire, field would decrease. If [[radio_de_espira]] were doubled in the loop with the same current, the central field would also be smaller. The law shows that current and geometric scale act together.

The most important difference is not the final number, but how it is reached. In the loop, each element [[dl]] is placed so that its useful contribution points along the same axis; therefore the vector sum concentrates at the center. In the wire, contributions distribute around a circular path and the field is associated with surrounding the conductor, not with concentrating at one central point.

This also explains why the integrated formula should not be chosen only by numerical resemblance. Although loop radius and distance from the wire have the same value, they represent different geometry. The variable [[distancia_al_punto_de_observacion]] measures separation from a long line, while [[radio_de_espira]] defines a closed curve. Exchanging them would erase the physical information that decides how [[contribucion_diferencial_de_campo]] contributions add.

In an experimental situation, this interpretation guides real decisions. If a localized field is needed to calibrate a sensor, the center-loop setup is more suitable. If exposure near a cable must be estimated, the long-wire model preserves the correct symmetry. Biot-Savart does not only calculate fields: it forces the current shape to be read before trusting the result.

# Real-world example


## Context

A laboratory wants to estimate the field produced by a simple circular coil used to calibrate a magnetic sensor. The coil has radius 8 cm and can carry 1.5 A without significant heating. The practical question is whether the central field will be comparable to Earth's field.

## Physical estimation

The center-loop model uses [[radio_de_espira]], [[corriente_electrica]], and [[mu0]] to estimate [[campo_magnetico]]. With a current of 1.5 A and a radius of 8 cm, the central field is of the order of ten microteslas. This scale is comparable to Earth's field and sufficient for qualitative tests with sensitive sensors.

The estimate also shows the design limit: reducing [[radio_de_espira]] increases the field, but shrinks the region where the field is approximately uniform. Increasing [[corriente_electrica]] helps, but introduces heating and requires a stable supply.

## Interpretation

Biot-Savart turns a real coil into a sum of current contributions. At the center, symmetry makes the integrated formula reliable and fast.

If the sensor moves away from the center, the estimate stops being exact. The law has not failed; the geometric condition that allowed all contributions to be summed so compactly has failed.