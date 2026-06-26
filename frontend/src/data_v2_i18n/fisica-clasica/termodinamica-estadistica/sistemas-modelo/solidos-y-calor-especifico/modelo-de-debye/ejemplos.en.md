# Exam-type example


## Problem statement

A monoatomic crystalline solid has [[temperatura_debye]] of 300 K. Estimate its [[calor_especifico_molar]] at [[temperatura]] of 30 K using the low-[[temperatura]] Debye law, and compare it with the classical Dulong-Petit limit. Interpret what the result indicates about active phonon modes and explain why the solid has not yet reached the classical value.

## Data

- [[temperatura]]: 30 K
- [[temperatura_debye]]: 300 K
- [[constante_gases]]: 8.314 J mol⁻¹ K⁻¹
- [[constante_boltzmann]]: 1.38·10⁻²³ J/K (microscopic scale; basis of [[temperatura_debye]])
- [[hbar]]: 1.05·10⁻³⁴ J·s (enters [[temperatura_debye]] via [[frecuencia_debye]])
- [[temperatura_reducida]]: T/ΘD = 0.1 (diagnostic of cold quantum regime)
- Expected regime: low [[temperatura]], because the T/ΘD ratio is small
- Desired quantity: [[calor_especifico_molar]]

## System definition

The system is one mole of atoms in a simple crystalline solid. We consider collective lattice vibrations, not molecular rotations, electronic excitations, or structural transformations. The given [[temperatura_debye]] summarizes the material’s vibrational scale associated with [[frecuencia_debye]]. The [[temperatura]] is assumed uniform, so the phonon population is described by one equilibrium value. The required quantity is molar, so [[constante_gases]] appears naturally instead of a sample-specific [[numero_atomos]].

## Physical model

We use the low-[[temperatura]] Debye model, the regime where [[temperatura_reducida]] is small and [[temperatura_debye]] is much larger than the system temperature. In this regime, not all vibrational modes are excited. Only long-wavelength, low-frequency acoustic phonons contribute significantly to [[calor_especifico_molar]]. The cubic dependence comes from counting the accessible modes in frequency space. To compare the result with the classical regime, we also use the Dulong-Petit limit, which corresponds to three equipartitioned vibrational degrees of freedom per atom.

## Model justification

The ratio between [[temperatura]] and [[temperatura_debye]] is 0.1. This places the solid at the upper edge of the low-[[temperatura]] region, so the cubic law gives a reasonable estimate, though not a precision fit. The solid is assumed crystalline, monoatomic, and harmonic. If it were metallic with an electronic contribution, or if strong optical phonons were present, the model would need extension. Here the target is the main physical trend: how [[calor_especifico_molar]] grows with [[temperatura]] before approaching the classical plateau.

## Symbolic solution

First identify the reduced thermal scale.

{{f:variable_reducida_debye}}

Then apply the low-[[temperatura]] law, valid when [[temperatura]] is small compared with [[temperatura_debye]].

{{f:calor_especifico_debye_baja_temperatura}}

For comparison, compute the high-[[temperatura]] classical value.

{{f:limite_dulong_petit}}

For the full intermediate regime, the complete integral expression connects the cubic law smoothly with the classical limit:

{{f:calor_especifico_debye_integral}}

Symbolically, the low-[[temperatura]] value depends on the third power of the T/ΘD ratio, while the high-[[temperatura]] value depends only on [[constante_gases]]. This shows that [[temperatura_debye]] does not change the classical ceiling; it controls how quickly the solid approaches it.

## Numerical substitution

The reduced ratio is 30/300 = 0.1. The cubic law gives a factor of order 0.001 multiplied by the Debye numerical coefficient, so the estimated [[calor_especifico_molar]] is about 1.94 J mol⁻¹ K⁻¹. The Dulong-Petit limit is 3R, approximately 24.94 J mol⁻¹ K⁻¹. Therefore, at 30 K the solid has a molar heat capacity close to 8 percent of the classical value. This is a large physical difference, not a rounding effect.

## Dimensional validation

The reduced [[temperatura]] is dimensionless because it compares two temperatures measured in kelvin. The cubic factor is also dimensionless. The dimensional scale is supplied by [[constante_gases]], whose unit is J mol⁻¹ K⁻¹. Therefore the result for [[calor_especifico_molar]] has the correct unit J mol⁻¹ K⁻¹. The Dulong-Petit expression 3R has the same unit. This confirms that the calculation gives molar heat capacity, not energy, not [[temperatura]], and not the total heat capacity of an arbitrary sample.

## Physical interpretation

The result means that the solid is still in a quantum partial-activation regime. The value of [[temperatura]] is not zero, but it is small compared with the scale set by [[temperatura_debye]], and this implies that most phonon modes are not thermally populated. The low [[calor_especifico_molar]] indicates that adding heat mainly opens additional long-wavelength acoustic modes rather than exciting the full vibrational spectrum. Therefore the solid stays far below Dulong-Petit. Physically, the heat capacity depends on the fraction of modes accessible at the chosen [[temperatura]]; as [[temperatura]] increases, that fraction increases rapidly at first, then the growth decreases as the mode population approaches saturation.

# Real-world example


## Context

In cryogenic sensor design, engineers often need materials with very low thermal response so that small energy deposits create measurable changes in [[temperatura]]. The Debye model helps estimate whether an insulating crystal will have sufficiently small [[calor_especifico]] at a few kelvin. Materials with high [[temperatura_debye]] keep many phonon modes frozen out and can therefore be useful when a strong thermal signal is desired.

## Physical estimation

Consider a crystal with [[temperatura_debye]] of 600 K operating at [[temperatura]] of 6 K. The T/ΘD ratio is 0.01, so the order of the cubic factor is roughly one millionth before the Debye numerical coefficient is applied. This estimate is approximate, but it gives the right scale: [[calor_especifico_molar]] should be far below 3R. The magnitude is a reasonable value for cryogenic design because only a tiny low-frequency part of the acoustic phonon spectrum is active. If the measured heat capacity were much larger, the extra scale would point toward impurities, electrons, defects, or non-Debye modes.

## Interpretation

The application shows that [[temperatura_debye]] is a design parameter, not merely a table entry. At the same [[temperatura]], a larger [[temperatura_debye]] means fewer active modes, which indicates a lower [[calor_especifico]] and therefore stronger [[temperatura]] changes for a given deposited energy. This depends on the material remaining insulating, crystalline, and close to harmonic behavior. If the actual curve departs from the cubic estimate, the departure physically reveals additional microscopic channels rather than just numerical inconvenience.