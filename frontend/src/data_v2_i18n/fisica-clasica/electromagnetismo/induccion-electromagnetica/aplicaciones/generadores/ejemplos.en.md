# Exam-type example


## Problem statement

A flat generator coil rotates in a uniform magnetic field. It has 200 turns, an effective area of 0.015 m² per turn, a field of 0.25 T, and an angular speed of 120 rad/s. In a second test, linked flux changes by 0.12 Wb during 0.050 s. The shaft receives 85 W of mechanical input power and the measured efficiency is 78 %. Estimate maximum flux, emf amplitude, mean emf in the test, and useful electrical power.

## Data

- Number of turns: 200
- Effective area: 0.015 m²
- Magnetic field: 0.25 T
- Angular speed: 120 rad/s
- Flux change: 0.12 Wb
- Time interval: 0.050 s
- Mechanical input power: 85 W
- [[eta]]: 0.78

## System definition

The system is the rotating coil and its mechanical shaft. The relevant physical interaction is the variation of [[flujo_magnetico_maximo_enlazado]] as the coil rotates in the field. The electrical output is first interpreted as ideal [[epsilon_0]] and then as useful [[potencia_electrica_util]] when losses are included through [[eta]].

## Physical model

We use an ideal sinusoidal generator model for peak emf and a mean Faraday reading for the flux-change test. The model includes [[numero_de_espiras]], [[campo_magnetico]], [[area_de_la_espira]], [[omega]], [[cambio_de_flujo_magnetico]], [[intervalo_temporal]], [[potencia_mecanica_de_entrada]], and [[eta]]. Useful power is computed after induction, because induced voltage and delivered power are not the same quantity.

## Model justification

The model is valid because the statement gives a uniform field, a flat coil, and a specified angular speed. It would stop being valid if the load caused a large terminal drop, if the core saturated, or if speed varied strongly during a turn. For power, perfect conversion is not assumed: efficiency already corrects global losses.

## Symbolic solution

First estimate maximum linked flux:

{{f:flujo_maximo_generador}}

Then obtain the ideal emf amplitude:

{{f:amplitud_fem_generador}}

For the flux-change test, use mean emf:

{{f:fem_media_generador}}

[[eta]] compares useful output with mechanical input:

{{f:eficiencia_generador}}

Useful power follows by applying that efficiency to the input:

{{f:potencia_util_generador}}

## Numerical substitution

Multiplying 200 turns by 0.25 T and by 0.015 m² gives 0.75 Wb. Therefore [[flujo_magnetico_maximo_enlazado]] ≈ 0.75 Wb.

Multiplying that geometric linkage by 120 rad/s gives 90 V. Thus [[epsilon_0]] ≈ 90 V for the ideal signal.

Dividing the flux change of 0.12 Wb by 0.050 s gives 2.4 V. Therefore [[epsilon]] ≈ 2.4 V as the mean value for that specific test.

The efficiency of 78 % is used as the fraction 0.78. Multiplying 0.78 by 85 W gives 66.3 W. Therefore [[potencia_electrica_util]] ≈ 66.3 W.

## Dimensional validation

The product of turns, tesla, and square metre gives weber, with dimension `[M L² T⁻² I⁻¹]`, consistent with [[flujo_magnetico_maximo_enlazado]].

Multiplying weber by angular speed expressed per second gives volt, with dimension `[M L² T⁻³ I⁻¹]`, consistent with [[epsilon_0]].

Dividing flux change by time also gives volt. [[eta]] is dimensionless, and useful power keeps dimension `[M L² T⁻³]`.

## Physical interpretation

The result shows that the coil has substantial flux linkage and, when rotating at 120 rad/s, can induce an amplitude of about 90 V under ideal conditions. That voltage does not mean the generator can deliver arbitrary power: it only gives the scale of internal emf associated with rotation.

The flux-change test gives a much smaller mean emf because it describes another temporal process, not necessarily the amplitude of the sinusoidal signal. If the same flux change occurred in less time, [[epsilon]] would increase; if rotation were slower, [[epsilon_0]] would decrease.

The useful power of 66.3 W means that part of the 85 W mechanical input is lost. Physically, those losses may be friction, winding heating, or magnetic losses. If [[eta]] decreased, [[potencia_electrica_util]] would fall even if the ideal coil emf did not change.

# Real-world example


## Context

An educational dynamo is used to power a small LED lamp with a hand crank. The teacher observes that spinning faster increases brightness, but the crank also becomes harder to turn when the lamp is connected.

## Physical estimation

A typical educational dynamo has about 500 turns, a field of 0.05 T, and an area of 20 cm² (0.0020 m²). Cranking by hand at about 3 revolutions per second gives an angular speed of approximately 19 rad/s. Maximum linked flux is [[flujo_magnetico_maximo_enlazado]] ≈ 500 × 0.05 × 0.0020 ≈ 0.05 Wb. The ideal emf amplitude comes out as [[epsilon_0]] ≈ 0.05 × 19 ≈ 0.95 V, enough to light a low-power LED but not enough to charge a phone.

Doubling the speed to 6 revolutions per second (38 rad/s) doubles [[epsilon_0]] to approximately 1.9 V, and with an efficiency of 60 %, [[potencia_electrica_util]] rises from about 0.3 W to about 1.1 W. That increase quadruples the available power. This explains why brightness grows much more than proportionally to the effort: rotation rate raises both induced voltage and induced current if the load resistance stays fixed.

## Interpretation

The extra effort when the lamp is connected confirms Lenz's law and energy conservation. The load extracts electrical energy, and that energy must come from mechanical work. The dynamo does not become harder to turn by accident: the connected circuit changes the electromagnetic reaction on the shaft.