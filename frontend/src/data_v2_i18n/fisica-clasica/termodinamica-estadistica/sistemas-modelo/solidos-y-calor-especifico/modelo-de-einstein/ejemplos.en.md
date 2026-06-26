# Exam-type example


## Problem statement

An insulating solid is approximated with the Einstein model. Its [[temperatura_einstein]] is 320 K. A one-mole sample is brought to a [[temperatura]] of 160 K at constant volume. Calculate [[parametro_reducido]] and interpret the value of [[calor_especifico_molar_volumen_constante]] relative to the classical limit. Then estimate what would happen if the same sample were at 640 K. The goal is not only numerical substitution, but answering how molar heat capacity depends on [[temperatura]] and [[temperatura_einstein]].

## Data

- [[temperatura_einstein]]: 320 K
- First [[temperatura]]: 160 K
- Second [[temperatura]]: 640 K
- [[constante_gases]]: 8.314 J mol⁻¹ K⁻¹
- Model: identical quantum oscillators at constant volume
- Target magnitude: [[calor_especifico_molar_volumen_constante]]
- Auxiliary magnitude: [[parametro_reducido]]

## System definition

The system is one mole of an idealized crystalline solid. Internal conduction and thermal expansion are not modeled, because the target magnitude is [[calor_especifico_molar_volumen_constante]]. Each atom is represented as part of a set of harmonic oscillators with a single frequency scale, encoded by [[temperatura_einstein]]. The sample is assumed to be in thermal equilibrium, so one [[temperatura]] describes all oscillators. This definition separates the microscopic level, where vibrational energy is quantized, from the macroscopic level, where the solid absorbs energy per mole and per kelvin.

## Physical model

We use the Einstein model because the problem gives one [[temperatura_einstein]] and asks how changing [[temperatura]] changes the heat capacity. The organizing variable is [[parametro_reducido]], since it condenses the comparison between material scale and thermal state. When [[parametro_reducido]] is large, quantum jumps are thermally expensive and [[calor_especifico_molar_volumen_constante]] is reduced. When [[parametro_reducido]] is small, many vibrational levels participate and the result approaches the classical limit. [[energia_interna]] is not the final target, although it reminds us that heat capacity measures a derivative-like thermal response rather than stored energy itself.

## Model justification

The model is suitable for a first analysis because the statement gives no data about acoustic branches, free electrons, phase transitions, or anisotropy. The sample is treated as insulating and harmonic. If the problem supplied an experimental low-[[temperatura]] cubic law, the Debye model would be better; if it supplied a sharp heat-capacity peak, a transition or additional contribution would be suspected. Here the intended reading is internal to the leaf: the same [[temperatura_einstein]] produces different responses when [[temperatura]] changes. Working with one mole also justifies using [[constante_gases]] rather than [[numero_atomos]] and [[constante_boltzmann]].

## Symbolic solution

First calculate the regime parameter:

{{f:parametro_reducido_einstein}}

For the first situation, the comparison between [[temperatura_einstein]] and [[temperatura]] tells whether the solid lies below or above its vibrational scale. Then apply the molar relation:

{{f:calor_especifico_molar_einstein}}

The result is interpreted by comparison with the classical molar limit near 3R. For the second [[temperatura]], repeat the [[parametro_reducido]] calculation and evaluate the same functional factor. When the system is instead described by [[numero_atomos]] rather than one mole, the total heat capacity formula applies directly:

{{f:capacidad_calorifica_total_einstein}}

The [[energia_interna]] relation is not needed for the numerical target, but it explains the microscopic origin of the thermal dependence.

## Numerical substitution

At 160 K, [[parametro_reducido]] is approximately 320/160, namely 2. The associated Einstein factor gives a [[calor_especifico_molar_volumen_constante]] clearly below 3R; using the full expression gives about 18 J mol⁻¹ K⁻¹, while 3R is about 24.9 J mol⁻¹ K⁻¹. At 640 K, [[parametro_reducido]] is 0.5. In that case the factor is much closer to the classical limit and [[calor_especifico_molar_volumen_constante]] is near 24 J mol⁻¹ K⁻¹. The increase is not simple proportionality with [[temperatura]], but progressive saturation.

## Dimensional validation

[[parametro_reducido]] is dimensionless because it is the ratio of two absolute temperatures. [[calor_especifico_molar_volumen_constante]] must end in J mol⁻¹ K⁻¹, the same unit scale as [[constante_gases]]. The exponential factors and powers of [[parametro_reducido]] are dimensionless, so they do not change the final unit. This check detects errors such as using Celsius, mixing total [[capacidad_calorifica_volumen_constante]] with molar heat capacity, or inserting [[numero_atomos]] into a one-mole calculation.

## Physical interpretation

At 160 K, the [[temperatura]] is below [[temperatura_einstein]], which means the solid does not yet have all its vibrational oscillators thermally active. A [[parametro_reducido]] near 2 indicates that available thermal energy is competing with significant quantum spacing; this implies that [[calor_especifico_molar_volumen_constante]] remains below the classical value. At 640 K, [[temperatura]] is well above the Einstein scale, therefore many vibrational levels are populated and the result increases toward 3R. Physically, the model says that heating does more than add energy; it unlocks vibrational degrees of freedom. The heat capacity depends on the ratio between [[temperatura]] and [[temperatura_einstein]], not on [[temperatura]] alone.

# Real-world example


## Context

In a materials laboratory, the heat capacity of an insulating crystal is measured to decide whether its room-[[temperatura]] response can be approximated by the classical limit. The manufacturer reports an approximate [[temperatura_einstein]] of 250 K. The sample operates between 80 K and 500 K inside a cryogenic sensor. The practical question is whether a constant [[calor_especifico_molar_volumen_constante]] can be used, or whether the Einstein correction is needed.

## Physical estimation

At 300 K, [[parametro_reducido]] is of order 250/300, approximately 0.8. That order is not much smaller than 1, so the sample is not in a perfect classical limit. A reasonable value for [[calor_especifico_molar_volumen_constante]] should be somewhat below 3R, but already fairly close. At 80 K, the estimate gives a ratio of order 3, and the reduction becomes much stronger. At 500 K, the approximate ratio falls to 0.5, so the value approaches the high-[[temperatura]] scale. The magnitude of the correction is therefore largest in the cold part of the operating range, and a constant heat capacity is a less reasonable value there.

## Interpretation

For sensor design, the model tells where a constant heat capacity would be a dangerous shortcut. Near 80 K, the total [[capacidad_calorifica_volumen_constante]] of the part depends strongly on [[temperatura]], so a classical estimate overpredicts the energy needed to warm it. Near 500 K, the difference is smaller, and the classical approximation may be acceptable if high precision is not required. [[temperatura_einstein]] acts as a soft border between two regimes: below it, quantization controls the response; above it, the solid behaves increasingly like a classical storehouse of vibrational energy.