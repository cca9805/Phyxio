const e=`# Exam-type example

## Problem statement

A very long straight wire carries a steady current of 12 A. Estimate the magnetic field at 4.0 cm from the conductor axis using Ampere's law. Then compare it with a long solenoid with turn density [[n]] equal to 800 per metre carrying the same current. Determine [[B]] for the wire, [[B_sol]] for the solenoid, and explain why the Amperian paths are different.

## Data

- Conductor current: 12 A.
- Circular path radius: 4.0 cm, equivalent to 0.040 m.
- Solenoid turn density: 800 per metre.
- Medium approximation: air, treated as vacuum.
- Unknowns: [[B]] for the wire and [[B_sol]] for the solenoid.

The data describe two different symmetries. The wire uses a circle because the field rotates around the conductor. The solenoid uses a rectangular path because the internal field is almost uniform and the exterior contribution is neglected.

## System definition

The first system is an ideal straight conductor, very long compared with the observation distance. The Amperian curve is circular, centered on the wire, with [[B]] tangent at all its points. The oriented element [[dl]] runs along that circle and fixes the positive direction of circulation. The enclosed current [[I_enc]] equals the conductor current.

The second system is an ideal long solenoid. The relevant field is [[B_sol]], almost uniform inside. The chosen path crosses an internal segment where the field contributes and an external segment where the contribution is approximated as zero.

## Physical model

The model uses Ampere's law in magnetostatic regime. The structural quantity is [[C_B]], linked to [[I_enc]] by the integral law. In the wire, symmetry gives [[B]] from [[I]] and [[r]]. In the solenoid, the wound geometry introduces [[n]] as turns per unit length. Both calculations therefore test how geometry turns circulation into a usable field estimate.

## Model justification

The model is valid because currents are steady and the geometries have enough symmetry. For the wire, all points at the same [[r]] are equivalent; therefore [[B]] has the same magnitude on the circle. For the long solenoid, far from the ends, the internal field dominates.

It would stop being valid near conductor ends, in a short solenoid, with rapidly varying currents, or if the material core changed the effective permeability nonlinearly.

## Symbolic solution

The general relation behind both calculations uses [[dl]] as the oriented element of the closed curve:

{{f:ampere_integral}}

For the long straight wire, circular symmetry turns circulation into the product of tangent field and circumference. That simplification gives:

{{f:campo_hilo_ampere}}

For the long solenoid, the rectangular path leaves the internal segment as dominant. The ideal result is:

{{f:campo_solenoide_largo}}

The comparison is physical: the wire spreads the same current over larger circles, while the solenoid adds many turns per unit length.

## Numerical substitution

For the wire, take the magnetic constant of vacuum and multiply by 12 A. Then divide by the perimeter associated with the radius 0.040 m. The result is approximately 6.0e-5 T, so [[B]] is of the order of 60 microteslas.

For the solenoid, multiply the magnetic constant by 800 per metre and by 12 A. The result is approximately 1.2e-2 T, so [[B_sol]] is of the order of 12 milliteslas.

## Dimensional validation

For the wire, the combination of permeability, current and distance produces teslas. Permeability provides magnetic coupling, current provides the source, and division by length adjusts the spatial scale.

For the solenoid, turn density contributes inverse length. Combined with current and permeability, the result is again teslas. Both outputs are magnetic fields, so the dimensions are coherent.

## Physical interpretation

The solenoid field is much larger than the wire field here because many turns reinforce the field in one common internal region. The isolated wire only produces a circular field that weakens as [[r]] increases. This does not contradict Ampere's law; it shows that geometry decides how circulation is organized.

If the current were doubled, both fields would double. If [[r]] were doubled in the wire case, [[B]] would be halved. In the ideal solenoid, changing [[r]] is not the central variable; the decisive quantities are [[n]] and the current through each turn.

# Real-world example

## Context

A laboratory wants to design a long coil to produce an almost uniform magnetic field in a central region. The available supply can deliver 3 A steadily, and the solenoid can be built with 1200 turns per metre. The practical question is whether the expected field lies in the millitesla range suitable for Hall-sensor tests.

## Physical estimation

Using the long-solenoid model, [[B_sol]] is estimated by combining [[mu0]], [[n]], and [[I]]. With 1200 turns per metre and 3 A, the internal field is of the order of 4.5 milliteslas. This value is far above Earth's field, but far below MRI fields or industrial electromagnets.

The estimate also indicates the indirect thermal limit: increasing [[I]] increases the field, but also heats the wire. Increasing [[n]] may be better until space, resistance, and dissipation become limiting.

## Interpretation

Ampere's law allows a geometric design to become a field prediction without summing every turn one by one. The important condition is that the solenoid be long enough and that measurement be made away from the ends.

If the sensor is placed near an end, the measured value will be smaller than the central estimate. The law has not failed; the long-solenoid idealization has failed. The application shows why Ampere is a design tool only when used together with a validity criterion.
`;export{e as default};
