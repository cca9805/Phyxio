# Exam-type example

## Problem statement

A light beam reaches a plane mirror making 35 degrees with the normal. The local intensity of the beam just before reaching the mirror is 120 W/m². The real mirror returns 85 % of that intensity and absorbs or transmits the rest.

Determine the direction of the reflected ray, estimate the reflected intensity, and explain why direction and amount of reflected energy are two different physical readings.

## Data

- Angle of incidence from the normal: 35 degrees.
- Local incident intensity: 120 W/m².
- Mirror reflectance: 0.85.
- Flat polished boundary.
- Incident medium: air.

## System definition

The system is the incidence point on the mirror and the two associated rays: incident and reflected. The local normal is drawn perpendicular to the mirror and serves as the angular reference for [[theta_i]] and [[theta_r]].

The arriving intensity is [[I_incidente]]. The fraction returned by the material is summarized by [[R_reflectancia]], and the observable energy result is [[I_reflejada]].

## Physical model

The specular reflection model is used because the mirror is flat and polished compared with visible wavelength. This allows a single reflected direction to be predicted through [[theta_r]].

For energy, a passive-boundary model with effective reflectance is used. Reflectance does not change ray direction in this problem; it only scales the intensity that returns.

## Model justification

The angular law is valid because the boundary has a well-defined normal and the surface is smooth at optical scale. If the mirror were scratched or matte, the beam would scatter in many directions and one [[theta_r]] would not be enough.

The energy relation is valid because reflectance is given as an effective fraction. It would stop being valid if the mirror had gain, if reflectance depended strongly on polarization, or if the beam hit a multilayer coating with dominant internal interference.

## Symbolic solution

The reflected direction is obtained with:

{{f:ley_reflexion}}

This relation is applied only after confirming that [[theta_i]] is measured from the normal. If the angle were given from the surface, the reference would need to be changed before using the law.

The reflected intensity is estimated with:

{{f:intensidad_reflejada}}

The quantity [[R_reflectancia]] acts as a fraction of [[I_incidente]]. At a passive boundary, it must not be interpreted as an integer percentage or as a quantity with units.

## Numerical substitution

Because the given angle is already measured from the normal, [[theta_r]] takes the same angular value as [[theta_i]]. Therefore the reflected ray forms 35 degrees with the normal on the other side of the normal axis.

For intensity, taking 85 % as a fraction gives [[R_reflectancia]] of 0.85. Multiplying 120 W/m² by 0.85 gives 102 W/m². Therefore [[I_reflejada]] is approximately 102 W/m².

## Dimensional validation

The angles [[theta_i]] and [[theta_r]] are dimensionless, even when expressed in degrees or radians. The geometric law compares two angular openings measured from the same reference.

The reflectance [[R_reflectancia]] is also dimensionless. Multiplying it by [[I_incidente]] keeps reflected intensity with dimension `[M T⁻³]`, the dimension of W/m².

## Physical interpretation

The reflected ray has a direction symmetric about the normal. If someone measured 35 degrees from the surface, the prediction would be wrong because the complementary angle would be used.

The mirror does not return all energy: it returns a high fraction, but not the whole amount. The direction of [[theta_r]] is fixed by geometry, while [[I_reflejada]] depends on the material property [[R_reflectancia]].

If [[R_reflectancia]] fell to 0.20, the ray would still leave with the same angular direction, but its intensity would be much lower. This shows that geometry and energy must be solved as separate steps.

# Real-world example

## Context

In an auditorium, a flat side wall produces an early reflection of sound from a loudspeaker. The technician wants to know whether that reflection will reach a specific seating area and whether it will be intense enough to affect clarity.

The wall is approximated as smooth for mid-frequency sound, and the angle is measured from the wall normal. The reflection may be geometrically predictable even if the material absorbs part of the sound energy.

## Physical estimation

Suppose the sound arrives at 40 degrees from the normal. The reflected wave leaves with the same opening of 40 degrees on the symmetric side. If the local incident intensity on the wall is 0.50 W/m² and the finish returns about 30 %, the estimated reflected intensity is 0.15 W/m².

This amount alone does not determine what each listener hears, because the reflected sound still weakens while propagating toward the seats. Even so, the estimate helps decide whether to add absorbing material or change the loudspeaker orientation.

## Interpretation

The application shows that the law of reflection is not only optical. In acoustics, the same geometry predicts paths of echoes and early reflections, while [[R_reflectancia]] controls whether those paths are audible.

The technician must review two outputs: direction and intensity. If the direction points toward the audience and [[I_reflejada]] remains high, the reflection may either support sound or degrade intelligibility depending on delay.
