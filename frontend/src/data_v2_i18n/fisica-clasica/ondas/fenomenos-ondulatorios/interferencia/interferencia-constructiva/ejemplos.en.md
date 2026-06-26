# Exam-type example

## Problem statement

Two coherent slits illuminate a distant screen with monochromatic light. At one point on the screen, the path difference [[Delta_r]] between the two waves is 1.20 micrometers. The wavelength [[lambda]] is 600 nanometers. The individual intensities that would reach the point if each slit acted alone are equal: [[I1]] and [[I2]] have the same value. Decide whether the point corresponds to constructive interference and estimate the relative resulting intensity [[I_resultante]] compared with the intensity from one slit alone.

## Data

- [[Delta_r]] of 1.20 micrometers.
- [[lambda]] of 600 nanometers.
- Equal [[I1]] and [[I2]].
- Coherent sources with a common frequency.
- A distant screen, so each point has a defined path difference.

## System definition

The physical system is the observed screen point together with the two waves arriving from the slits. The task is not to describe the entire interference figure, but one specific position where path comparison decides whether there is a maximum. The geometric control quantity is [[Delta_r]], the wave scale is [[lambda]], and the final observable is [[I_resultante]].

The intensity reference is one slit alone. This allows the result to be expressed as a relative intensity without introducing absolute power per area. The order [[m_orden]] classifies the maximum; it does not describe a new wave.

## Physical model

The model is two coherent sinusoidal waves of the same frequency. The maximum condition is decided by comparing [[Delta_r]] with [[lambda]], and intensity is interpreted through [[I1]], [[I2]], and [[delta_phi]]. The point is constructive if the path difference contains an integer number of wavelengths.

In this model, phased disturbances are added first and intensity is obtained afterward. Therefore [[I_resultante]] does not have to match a direct addition of [[I1]] and [[I2]]. When both contributions arrive in phase, the interference term is positive and the maximum can be much stronger than an incoherent sum.

## Model justification

We assume a distant screen because the waves reaching the point can then be described by a well-defined relative phase. The slits come from the same illumination, so coherence is a physically reasonable hypothesis and the ideal model is valid for deciding phase maxima. Since the light is monochromatic, [[lambda]] remains fixed during observation and the path-to-phase relation is not washed out by color mixing.

The cause of reinforcement is clear: the extra path delays one wave, but if that delay corresponds to whole cycles, crests arrive with crests again. The extra distance is not irrelevant; its effect on phase repeats periodically.

## Symbolic solution

The constructive maximum condition by path difference is:

{{f:condicion_constructiva_camino}}

The translation between geometry and phase is:

{{f:fase_desde_camino}}

The intensity of two coherent waves is estimated with:

{{f:intensidad_interferencia_dos_ondas}}

In this problem, [[Delta_r]] contains an integer number of [[lambda]], so [[m_orden]] identifies a constructive maximum. The phase [[delta_phi]] corresponds to whole cycles and the interference term increases [[I_resultante]]. Since [[I1]] and [[I2]] are equal, the ideal maximum is the highest-contrast case for two slits.

## Numerical substitution

When 1.20 micrometers and 600 nanometers are expressed on the same scale, the path difference contains two wavelengths. Therefore, the point corresponds to the second constructive order. The associated phase completes two turns, so the waves arrive in phase again.

If the intensity from one slit is taken as one relative unit, each individual contribution provides one unit. The coherent in-phase sum doubles the amplitude, and the associated intensity becomes four relative units. In the ideal model, [[I_resultante]] is four times the intensity from one isolated slit.

## Dimensional validation

[[Delta_r]] and [[lambda]] are lengths, so their ratio gives a pure number that can be interpreted as [[m_orden]].

`[L] / [L]` produces a dimensionless quantity.

[[I_resultante]], [[I1]], and [[I2]] are intensities and keep the dimension of power per unit area.

`[M T⁻³]` is the dimension of intensity.

## Physical interpretation

The screen point is bright because the two waves arrive synchronized. The path difference is not zero, but this does not prevent reinforcement: a delay of two wavelengths leaves the same final phase. This means the central idea of the leaf is phase equivalence, not equal geometric paths.

The result also explains why directly adding intensities would be incomplete. If phase were ignored, only twice the intensity from one slit would be expected. The constructive fringe reveals that the relevant physical sum happened earlier, at the level of the wave disturbance. Physically, the contrast depends on the balance between [[I1]] and [[I2]]: if one contribution dominates, the maximum still exists, but the bright-dark difference decreases.

Energy is not created at that fringe. The complete pattern redistributes intensity: where constructive maxima exist, regions of lower intensity also appear. That global compensation makes the local maximum compatible with energy conservation.

# Real-world example

## Context

Two loudspeakers emit the same continuous tone and are connected to the same generator. A student walks slowly along a line in the classroom and notices places where the sound becomes louder. At one particular position, the difference between the distances to the left speaker and the right speaker is 0.68 meters. The tone has wavelength [[lambda]] of 0.34 meters in the room air.

## Physical estimation

The path difference [[Delta_r]] contains two wavelengths, so the position corresponds to [[m_orden]] two. This is a direct quantitative reading: the extra path equals two full cycles and the phase [[delta_phi]] matches again. If both loudspeakers contribute similar intensities to the ear, [[I_resultante]] can increase noticeably compared with listening to one speaker alone.

The estimate is reasonable because the sources share a generator and maintain a stable phase relation during listening. The real maximum, however, will not be perfect: walls reflect sound, the listener's head modifies the field, and the speakers are not ideal point sources.

## Interpretation

The student does not hear a loud zone simply because the position is close to both speakers at once. The main cause is the comparison between two paths. Moving by a few decimeters changes [[Delta_r]], so the ear crosses reinforcement regions and weaker regions.

This example shows the practical reach of the model. Constructive interference predicts where reinforcement can occur, but a real room adds reflected paths that deform the pattern. The direct phase criterion is therefore a first physical reading, not a complete description of all classroom acoustics.
