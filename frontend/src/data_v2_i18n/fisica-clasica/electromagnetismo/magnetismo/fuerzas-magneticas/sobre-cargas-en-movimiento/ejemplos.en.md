# Exam-type example


## Problem statement

A proton enters a region where the uniform magnetic field is perpendicular to its velocity. Estimate the magnetic force magnitude, the centripetal acceleration, and the radius of the circular path. Also explain why the result does not mean that the proton gains [[rapidez]] directly from the field.

## Data

- Proton charge: 1.60e-19 C, positive.
- Proton mass: 1.67e-27 kg.
- Entry [[rapidez]]: 2.00e6 m/s.
- Uniform magnetic field: 0.20 T.
- Orientation: entry perpendicular to the field, with maximal angular factor.

## System definition

The system is one isolated proton during its entry into the field. The magnitude [[carga_electrica]] identifies the charge interacting with [[campo_magnetico]], [[rapidez]] describes entry [[rapidez]], and [[masa_de_la_particula]] measures inertia. The main result is [[fuerza_magnetica]], from which [[a_c]] and [[radio_de_trayectoria]] are obtained.

## Physical model

The physical model is the magnetic part of the Lorentz force applied to a point charge. Because motion is perpendicular to the field, [[s_theta]] takes its maximal value and magnetic force acts as centripetal force. The ideal trajectory is interpreted through [[radio_de_trayectoria]], not through tangential acceleration.

## Model justification

The field is stated to be uniform and the particle is treated as isolated, so deflection is dominated by [[fuerza_magnetica]]. The model would stop being adequate if collisions occurred, if the field changed strongly during one turn, if an electric field modified the energy, or if the [[rapidez]] required relativistic corrections.

## Symbolic solution

First calculate the magnetic force intensity:

{{f:fuerza_magnetica_lorentz}}

Then translate that force into centripetal acceleration:

{{f:aceleracion_centripeta_magnetica}}

Finally estimate the circular radius associated with perpendicular motion:

{{f:radio_trayectoria_circular}}

This solution uses the core magnitudes [[fuerza_magnetica]], [[carga_electrica]], [[rapidez]], [[campo_magnetico]], [[s_theta]], [[masa_de_la_particula]], [[a_c]], and [[radio_de_trayectoria]]. Vector direction is decided afterward from the positive charge sign and the right-hand rule.

## Numerical substitution

For [[fuerza_magnetica]], multiplying 1.60e-19 C by 2.00e6 m/s, by 0.20 T, and by the maximal angular factor gives about 6.4e-14 N. Thus [[fuerza_magnetica]] is of order ten to the minus fourteen newtons.

For [[a_c]], dividing 6.4e-14 N by 1.67e-27 kg gives about 3.8e13 m/s². Although the force looks small, proton mass is so tiny that the transverse acceleration is enormous.

For [[radio_de_trayectoria]], multiplying 1.67e-27 kg by 2.00e6 m/s and dividing by the product of 1.60e-19 C and 0.20 T gives about 0.104 m. The path would have a radius near ten centimetres under these conditions.

## Dimensional validation

- Magnetic force: charge times [[rapidez]] times field gives newtons, dimension `[M L T⁻²]`.
- Centripetal acceleration: force divided by mass gives metres per second squared, dimension `[L T⁻²]`.
- Circular radius: mass times [[rapidez]] divided by charge and field gives length, dimension `[L]`.

All three dimensions match the requested magnitudes. It is also reasonable that a field of tenths of a tesla produces observable radii from centimetres to tens of centimetres for fast protons.

## Physical interpretation

The result indicates that [[fuerza_magnetica]] is small on an everyday scale, but it dominates the motion of a microscopic particle. The key is not comparing 6.4e-14 N with macroscopic forces, but comparing it with the proton [[masa_de_la_particula]]. When divided by such a small mass, transverse deflection becomes intense and the path bends visibly.

If [[campo_magnetico]] doubled while everything else stayed fixed, [[fuerza_magnetica]] would increase and [[radio_de_trayectoria]] would decrease. If [[rapidez]] doubled, the force would increase, but the radius would also grow because the particle would carry more motion inertia. This double reading shows why "greater [[rapidez]], greater force" is not enough; the full trajectory must be read.

Since [[carga_electrica]] is positive, the curvature direction follows directly from the right-hand rule. For a negative charge with the same magnitude, [[fuerza_magnetica]] intensity and [[radio_de_trayectoria]] would be the same, but the curve would close toward the opposite side. That difference underlies many particle separation techniques.

# Real-world example


## Context

In a simple mass spectrometer, ions with the same [[rapidez]] enter a region with a uniform magnetic field. The impact position depends on [[radio_de_trayectoria]], so measuring curvature distinguishes particles with different relations between [[carga_electrica]] and [[masa_de_la_particula]].

## Physical estimation

If two ions have the same magnitude of [[carga_electrica]] and the same [[rapidez]], the more massive ion has a larger [[radio_de_trayectoria]]. If the field [[campo_magnetico]] increases, both radii decrease and the detector can be made more compact. For fields of tenths of a tesla and laboratory speeds, radii from centimetres to metres are physically reasonable.

The magnitude that starts the reading is [[fuerza_magnetica]], but the magnitude the instrument usually observes is [[radio_de_trayectoria]]. Therefore the design combines [[rapidez]] control, field strength, and detector spatial resolution.

## Interpretation

The real application shows that magnetic force is not used only to "move" particles, but to convert invisible charge and mass differences into visible trajectory differences. A small radius indicates strong deflection; a large radius indicates that the particle better preserves its original direction.

Correct interpretation requires not mixing magnitude and direction. Two species with opposite signs can separate toward opposite sides; two species with different masses can separate by different radii. Both readings come from the same model, but answer different physical questions.