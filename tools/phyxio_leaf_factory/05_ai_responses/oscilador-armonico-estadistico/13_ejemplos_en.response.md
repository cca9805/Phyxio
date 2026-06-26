# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: oscilador-armonico-estadistico
# Target response file: ejemplos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Exam-type example
## Problem statement
A vibrational mode is modeled as a statistical harmonic oscillator in equilibrium with a thermal bath. Estimate [[energia_media]] and decide whether the classical treatment is reasonable when [[temperatura]] and [[frecuencia_angular]] are known. The task is not to follow one specific trajectory, but to read the thermal average over many possible quantum occupations.

## Data
- [[temperatura]]: 300 K
- [[frecuencia_angular]]: 1.0·10¹³ s⁻¹
- [[constante_boltzmann]]: 1.38·10⁻²³ J/K
- [[hbar]]: 1.05·10⁻³⁴ J·s
- System: one non-degenerate harmonic mode

## System definition
The system is one vibrational mode with a stable identity and a fixed [[frecuencia_angular]]. It is thermally connected to a bath that fixes [[temperatura]]. The output [[energia_media]] is an expectation value for the mode in equilibrium. It is not the energy of one particular oscillation, and it is not a statement about instantaneous position or velocity.

## Physical model
The model is the quantum harmonic oscillator in the canonical ensemble. Levels are labeled by [[numero_cuantico]], separated by [[energia_cuantica]], and weighted through [[probabilidad_ocupacion]]. The normalization of all weights is [[funcion_particion]]. When the thermal scale is clearly larger than the level spacing, the result can be compared with the classical equipartition limit.

## Model justification
The approximation is appropriate because the mode is assumed harmonic, weakly coupled to the bath, and observed after thermal equilibrium has been reached. The value of [[frecuencia_angular]] fixes how expensive each excitation is, while [[temperatura]] fixes how much thermal agitation the bath provides. This comparison is the physical heart of the problem: [[energia_media]] depends both on heating and on the spacing of accessible levels.

## Symbolic solution
First define the inverse thermal energy scale:

{{f:beta_inversa_termica}}

Then use [[hbar]] and [[frecuencia_angular]] to set the energy spacing [[energia_cuantica]]. The occupation of a level is described by:

{{f:probabilidad_ocupacion_n}}

The required normalization is:

{{f:funcion_particion_cuantica}}

The quantum mean energy follows from:

{{f:energia_media_cuantica}}

For comparison, the classical limit is:

{{f:limite_clasico_equiparticion}}

## Numerical substitution
The thermal scale is approximately 1.38·10⁻²³ J/K times 300 K, or 4.14·10⁻²¹ J. The quantum spacing is approximately 1.05·10⁻³⁴ J·s times 1.0·10¹³ s⁻¹, or 1.05·10⁻²¹ J. The thermal scale is about four times [[energia_cuantica]], so several excited levels contribute, but discreteness is not negligible. The classical estimate places [[energia_media]] on the order of 4·10⁻²¹ J, while the quantum expression retains the zero-point contribution.

## Dimensional validation
[[constante_boltzmann]] times [[temperatura]] has units of energy because J/K multiplied by K gives J. [[hbar]] times [[frecuencia_angular]] also gives energy because J·s multiplied by s⁻¹ gives J. [[beta]] has inverse-energy dimension. [[funcion_particion]] is dimensionless, and [[probabilidad_ocupacion]] is dimensionless. Therefore [[energia_media]] is correctly expressed in joules.

## Physical interpretation
The result means the oscillator sits in an intermediate regime. [[temperatura]] is large enough to populate excited levels, which indicates that the system is not frozen into the ground state. At the same time, [[energia_cuantica]] is not tiny compared with the thermal scale; this implies that quantum spacing still matters. Therefore the classical estimate is useful but not exact. If [[temperatura]] increases, [[probabilidad_ocupacion]] spreads toward higher [[numero_cuantico]] values and [[energia_media]] increases. If [[frecuencia_angular]] increases, the level spacing grows, excitation decreases at fixed bath conditions, and the zero-point baseline rises. Physically, the answer depends on a scale comparison, not on [[temperatura]] alone.

# Real-world example
## Context
In a molecular solid, an internal vibration may be approximated as a harmonic oscillator. Tracking how its contribution changes with [[temperatura]] helps explain heat capacity, thermal storage, and activation of vibrational modes. Each mode has its own [[frecuencia_angular]], so two vibrations in the same material can contribute different [[energia_media]] values.

## Physical estimation
Consider a mode with [[frecuencia_angular]] around 5·10¹² s⁻¹ at room [[temperatura]]. The energy quantum has order 5·10⁻²² J, while the thermal scale is approximately 4·10⁻²¹ J, a reasonable value for a room-condition estimate. This estimate shows a scale separation of nearly one order of magnitude, so a classical approximation may give a reasonable value for [[energia_media]]. If another mode has a [[frecuencia_angular]] ten times larger, the spacing becomes comparable with or greater than the thermal scale. Its excited occupation would be smaller, and the magnitude of the quantum correction would be more visible.

## Interpretation
This application shows why the mode frequency is as important as the bath [[temperatura]]. In real materials, not all degrees of freedom activate at the same pace. Low [[frecuencia_angular]] modes become thermally populated earlier, while high [[frecuencia_angular]] modes keep quantum character longer. [[funcion_particion]] turns that idea into normalized probabilities, and [[energia_media]] becomes the observable summary of the distribution.

