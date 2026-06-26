const e=`# Exam-type example

## Problem statement

A proton enters a region where the uniform magnetic field is perpendicular to its velocity. Estimate the magnetic force magnitude, the centripetal acceleration, and the radius of the circular path. Also explain why the result does not mean that the proton gains speed directly from the field.

## Data

- Proton charge: 1.60e-19 C, positive.
- Proton mass: 1.67e-27 kg.
- Entry speed: 2.00e6 m/s.
- Uniform magnetic field: 0.20 T.
- Orientation: entry perpendicular to the field, with maximal angular factor.

## System definition

The system is one isolated proton during its entry into the field. The magnitude [[q]] identifies the charge interacting with [[B]], [[v]] describes entry speed, and [[m]] measures inertia. The main result is [[F_B]], from which [[a_c]] and [[r]] are obtained.

## Physical model

The physical model is the magnetic part of the Lorentz force applied to a point charge. Because motion is perpendicular to the field, [[s_theta]] takes its maximal value and magnetic force acts as centripetal force. The ideal trajectory is interpreted through [[r]], not through tangential acceleration.

## Model justification

The field is stated to be uniform and the particle is treated as isolated, so deflection is dominated by [[F_B]]. The model would stop being adequate if collisions occurred, if the field changed strongly during one turn, if an electric field modified the energy, or if the speed required relativistic corrections.

## Symbolic solution

First calculate the magnetic force intensity:

{{f:fuerza_magnetica_lorentz}}

Then translate that force into centripetal acceleration:

{{f:aceleracion_centripeta_magnetica}}

Finally estimate the circular radius associated with perpendicular motion:

{{f:radio_trayectoria_circular}}

This solution uses the core magnitudes [[F_B]], [[q]], [[v]], [[B]], [[s_theta]], [[m]], [[a_c]], and [[r]]. Vector direction is decided afterward from the positive charge sign and the right-hand rule.

## Numerical substitution

For [[F_B]], multiplying 1.60e-19 C by 2.00e6 m/s, by 0.20 T, and by the maximal angular factor gives about 6.4e-14 N. Thus [[F_B]] is of order ten to the minus fourteen newtons.

For [[a_c]], dividing 6.4e-14 N by 1.67e-27 kg gives about 3.8e13 m/s². Although the force looks small, proton mass is so tiny that the transverse acceleration is enormous.

For [[r]], multiplying 1.67e-27 kg by 2.00e6 m/s and dividing by the product of 1.60e-19 C and 0.20 T gives about 0.104 m. The path would have a radius near ten centimetres under these conditions.

## Dimensional validation

- Magnetic force: charge times speed times field gives newtons, dimension \`[M L T⁻²]\`.
- Centripetal acceleration: force divided by mass gives metres per second squared, dimension \`[L T⁻²]\`.
- Circular radius: mass times speed divided by charge and field gives length, dimension \`[L]\`.

All three dimensions match the requested magnitudes. It is also reasonable that a field of tenths of a tesla produces observable radii from centimetres to tens of centimetres for fast protons.

## Physical interpretation

The result indicates that [[F_B]] is small on an everyday scale, but it dominates the motion of a microscopic particle. The key is not comparing 6.4e-14 N with macroscopic forces, but comparing it with the proton [[m]]. When divided by such a small mass, transverse deflection becomes intense and the path bends visibly.

If [[B]] doubled while everything else stayed fixed, [[F_B]] would increase and [[r]] would decrease. If [[v]] doubled, the force would increase, but the radius would also grow because the particle would carry more motion inertia. This double reading shows why "greater speed, greater force" is not enough; the full trajectory must be read.

Since [[q]] is positive, the curvature direction follows directly from the right-hand rule. For a negative charge with the same magnitude, [[F_B]] intensity and [[r]] would be the same, but the curve would close toward the opposite side. That difference underlies many particle separation techniques.

# Real-world example

## Context

In a simple mass spectrometer, ions with the same speed enter a region with a uniform magnetic field. The impact position depends on [[r]], so measuring curvature distinguishes particles with different relations between [[q]] and [[m]].

## Physical estimation

If two ions have the same magnitude of [[q]] and the same [[v]], the more massive ion has a larger [[r]]. If the field [[B]] increases, both radii decrease and the detector can be made more compact. For fields of tenths of a tesla and laboratory speeds, radii from centimetres to metres are physically reasonable.

The magnitude that starts the reading is [[F_B]], but the magnitude the instrument usually observes is [[r]]. Therefore the design combines speed control, field strength, and detector spatial resolution.

## Interpretation

The real application shows that magnetic force is not used only to "move" particles, but to convert invisible charge and mass differences into visible trajectory differences. A small radius indicates strong deflection; a large radius indicates that the particle better preserves its original direction.

Correct interpretation requires not mixing magnitude and direction. Two species with opposite signs can separate toward opposite sides; two species with different masses can separate by different radii. Both readings come from the same model, but answer different physical questions.
`;export{e as default};
