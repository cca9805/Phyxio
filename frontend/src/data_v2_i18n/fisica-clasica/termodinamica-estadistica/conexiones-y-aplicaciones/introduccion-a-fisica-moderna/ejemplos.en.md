# Exam-type example


## Problem statement

A monochromatic radiation beam reaches a microscopic system that absorbs energy only if each photon reaches a minimum spacing between levels. The radiation has a high visible frequency, and we want to decide whether a continuous classical description is enough or whether absorption requires photons and discrete levels. Calculate the energy associated with one photon, estimate its wavelength, and compare it with a reference energy spacing.

## Data

The following values describe the radiation and the absorber in this quantization problem:

- [[frecuencia]]: 6.0·10^14 Hz
- [[constante_planck]]: 6.63·10^-34 J·s
- [[velocidad_luz]]: 3.00·10^8 m/s
- [[separacion_energia]]: 3.5·10^-19 J between consecutive levels of the system
- [[energia_nivel]]: lower reference level in the absorber energy spectrum
- [[escala_energia_clasica]]: 1.0·10^-15 J
- [[numero_cuantico]]: discrete reference level

## System definition

The system is an ideal microscopic absorber with allowed energy levels. The radiation is modeled as a collection of photons, not only as a continuous wave. The conceptual boundary separates the energy of each photon from the total energy of the beam. Therefore [[energia_cuantizada]] must be analyzed before making claims about total intensity.

## Physical model

We use the photon-energy relation, the electromagnetic wave relation, and the classical-limit criterion.

{{f:energia_foton}}

{{f:longitud_onda_foton}}

{{f:frecuencia_desde_energia}}

{{f:limite_clasico_cuanto_relativo}}

The physical model considers fundamental system quantities such as [[cociente_cuantico_clasico]], [[constante_planck]], [[energia_cuantizada]].

## Model justification

The phenomenon contains an absorption condition based on levels, so energy per photon matters. If the radiation were treated only as a classical wave, it might seem that any accumulated total energy can activate the transition. The modern model corrects that idea: each elementary interaction must be compared with [[separacion_energia]]. The relation with [[longitud_onda]] also checks that we are dealing with visible radiation and that [[velocidad_luz]] is the appropriate constant.

## Symbolic solution

First, [[energia_cuantizada]] is obtained from [[frecuencia]] and [[constante_planck]]. Then [[longitud_onda]] is obtained from [[velocidad_luz]] and [[frecuencia]]. Finally, [[cociente_cuantico_clasico]] is evaluated by comparing [[separacion_energia]] with [[escala_energia_clasica]]. If photon energy exceeds the spacing, the transition is possible for each individual photon; if not, total intensity does not remove the microscopic threshold.

{{f:energia_cuantizada_nivel}}

{{f:energia_foton}}

## Numerical substitution

The photon energy is approximately 3.98·10^-19 J. The corresponding wavelength is approximately 5.0·10^-7 m, within the visible range. The photon energy is comparable with [[separacion_energia]], so discrete absorption is physically plausible. The ratio to the chosen classical energy scale is of order 10^-4, small for a macroscopic scale but meaningful for the microscopic system.

## Dimensional validation

[[constante_planck]] has unit J·s and [[frecuencia]] has unit s^-1, so their product gives J, the unit of [[energia_cuantizada]]. For wavelength, [[velocidad_luz]] has unit m/s and division by s^-1 leaves m. The ratio [[cociente_cuantico_clasico]] compares two energies, so it is dimensionless.

## Physical interpretation

The result indicates that the classical picture must be extended because the absorber does not respond to arbitrary smooth portions of energy. It responds to individual packets. The calculated [[energia_cuantizada]] is close to [[separacion_energia]], which means each photon can activate the transition from the lower [[energia_nivel]] to the next allowed state only if its frequency is high enough. Total beam intensity is irrelevant here, because each elementary interaction involves exactly one photon and one level transition.

This implies that absorption depends on per-photon energy, not cumulative power. The same radiation can look almost continuous at a macroscopic scale while remaining physically discrete at the microscopic level. Increasing [[frecuencia]] increases [[energia_cuantizada]] and decreases [[longitud_onda]] in vacuum. The final interpretation depends on comparing that packet with [[separacion_energia]]: if it matches, the transition occurs; if it falls short, no intensity compensates for the deficit.

# Real-world example


## Context

In light detectors, solar cells, and camera sensors, it is not enough to discuss total luminous energy. The material responds only if each photon has enough energy to excite electrons or activate a transition. Therefore [[frecuencia]] can be more decisive than intensity when a microscopic threshold exists.

## Physical estimation

A red light and a violet light may have similar power, but their photons do not have the same [[energia_cuantizada]]. A useful order-of-magnitude estimate compares photon energy with a material gap. The approximate scale for visible photons is a few electronvolts, while macroscopic energy scales are far larger in joules. This means the magnitude of one photon is tiny for a hand or lamp but a reasonable value for an electron transition. The estimate must keep [[frecuencia]], [[longitud_onda]], and [[separacion_energia]] on the same scale; otherwise the quantum-classical comparison becomes misleading.

## Interpretation

The device turns an abstract idea into a practical rule: energy arrives in units. Classical physics helps describe propagation, intensity, and waves, but microscopic activation requires [[energia_cuantizada]]. The boundary between both descriptions is decided by scale comparison, not by preference. That scale comparison is the core operation this leaf trains, and it appears identically in sensors, solar cells, and atomic spectroscopy.