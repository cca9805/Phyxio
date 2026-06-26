# Exam-type example


## Problem statement

A direct-current motor has [[numero_de_conductores_activos]] equal to 400 active conductors, active length [[longitud_activa_del_conductor]] of 0.06 m, magnetic field [[campo_magnetico_del_estator]] of 0.9 T and armature radius [[r_a]] of 0.04 m. The motor operates with [[sin_theta]] equal to 1. Armature current [[corriente_de_armadura]] is 4 A and angular speed [[omega]] is 80 rad/s. The consumed electrical power [[potencia_electrica_consumida]] is 210 W. Calculate the total Laplace force, motor torque, back-EMF, mechanical power and motor efficiency.

## Data

- [[numero_de_conductores_activos]] is 400 active conductors
- [[longitud_activa_del_conductor]] is 0.06 m
- [[campo_magnetico_del_estator]] is 0.9 T
- [[r_a]] is 0.04 m
- [[sin_theta]] is 1
- [[corriente_de_armadura]] is 4 A
- [[omega]] is 80 rad/s
- [[potencia_electrica_consumida]] is 210 W

## System definition

The system is a direct-current motor with a wound rotor and uniform magnetic field in the air gap. The geometric and electrical parameters completely define the motor's steady-state condition.

## Physical model

The ideal DC motor model is applied. The Laplace force on [[numero_de_conductores_activos]] active conductors of length [[longitud_activa_del_conductor]] carrying current [[corriente_de_armadura]] in magnetic field [[campo_magnetico_del_estator]] generates a total force proportional to the product of these magnitudes. This force acts at distance [[r_a]] from the rotation axis to produce motor torque [[tau_m]].

Rotation at angular speed [[omega]] induces a back-EMF [[epsilon_c]] proportional to the flux variation rate, which opposes the supply voltage and limits armature current. The mechanical power [[potencia_mecanica]] delivered to the shaft equals the product of torque and angular speed, while efficiency [[eta]] represents the ratio of mechanical output power to electrical input power [[potencia_electrica_consumida]].

## Model justification

The magnetic field is uniform and constant, conductors are straight with fixed length, and the motor operates at steady state with constant angular speed. These conditions justify using the Laplace force and back-EMF formulas without saturation or dynamic corrections.

## Symbolic solution

The total Laplace force on all active conductors is the product of [[numero_de_conductores_activos]], [[corriente_de_armadura]], [[longitud_activa_del_conductor]], [[campo_magnetico_del_estator]] and [[sin_theta]].

Motor torque is the product of [[fuerza_de_laplace]] by [[r_a]], or equivalently the product of all the above factors plus [[r_a]].

[[epsilon_c]] is the product of [[numero_de_conductores_activos]], [[longitud_activa_del_conductor]], [[campo_magnetico_del_estator]], [[r_a]] and [[omega]].

Mechanical power is the product of [[tau_m]] and [[omega]].

Efficiency is the ratio of [[potencia_mecanica]] to [[potencia_electrica_consumida]].

{{f:eficiencia_motor}}

{{f:fem_contragiro_motor}}

## Numerical substitution

Total Laplace force [[fuerza_de_laplace]] results from the product of 400 by 4 A by 0.06 m by 0.9 T by 1, giving 86.4 N.

Motor torque [[tau_m]] is 86.4 N times 0.04 m, equal to 3.456 N·m. Rounded, approximately 3.46 N·m.

[[epsilon_c]] [[epsilon_c]] is 400 times 0.06 m times 0.9 T times 0.04 m times 80 rad/s, equal to 69.12 V. Rounded, approximately 69.1 V.

Mechanical power [[potencia_mecanica]] is 3.456 N·m times 80 rad/s, equal to 276.5 W.

Efficiency [[eta]] is 276.5 W divided by 210 W, equal to 1.317.

## Dimensional validation

For [[fuerza_de_laplace]]: dimensionless times A times m times T. Since T is kg·A⁻¹·s⁻², the result is A·m·kg·A⁻¹·s⁻² equal to kg·m·s⁻², which is N. Correct.

For [[tau_m]]: N times m equal to N·m. Correct.

For [[epsilon_c]]: dimensionless times m times T times m times rad/s. Expanding: m² times kg·A⁻¹·s⁻² times rad·s⁻¹ equal to kg·m²·A⁻¹·s⁻³ equal to V. Correct.

For [[potencia_mecanica]]: N·m times rad/s equal to W. Correct.

## Physical interpretation

The torque of 3.46 N·m is what the motor applies to the shaft to overcome the load. The back-EMF of 69.1 V accounts for most of the supply voltage, confirming that the motor operates at steady state with a moderate current.

However, the calculated efficiency is greater than 1, which violates energy conservation and signals that the problem data are inconsistent: with these parameters, the mechanical power of 276.5 W exceeds the electrical power of 210 W. In a real exam, this would indicate an error in the data or in the statement. The efficiency of a real motor is always strictly less than 1. For the example to be consistent, the consumed electrical power should be at least 310 W (corresponding to an efficiency of 89 %).

This type of inconsistency is precisely a detection signal for the error of confusing calculated mechanical power with real electrical power, or of having omitted some additional loss in the balance.

# Real-world example


## Context

An educational DC motor installed in an upper secondary school laboratory has [[numero_de_conductores_activos]] equal to 250 active conductors, [[longitud_activa_del_conductor]] of 0.05 m, [[campo_magnetico_del_estator]] of 0.8 T and [[r_a]] of 0.035 m. It operates at [[omega]] of 1200 rpm with [[sin_theta]] equal to 1. Armature current [[corriente_de_armadura]] of 3 A and consumed electrical power [[potencia_electrica_consumida]] of 155 W are measured.

## Physical estimation

First convert speed: 1200 rpm multiplied by 2π/60 gives approximately 125.7 rad/s.

Total Laplace force [[fuerza_de_laplace]] is 250 times 3 A times 0.05 m times 0.8 T times 1, giving 30 N.

Motor torque [[tau_m]] is 30 N times 0.035 m, equal to 1.05 N·m.

[[epsilon_c]] [[epsilon_c]] is 250 times 0.05 times 0.8 times 0.035 times 125.7, giving approximately 43.9 V. With an internal resistance of 2.7 Ω, the internal resistive drop is 3 A times 2.7 Ω equal to 8.1 V. The estimated supply voltage is 43.9 V plus 8.1 V, approximately 52 V. That is consistent with a laboratory source of 0 to 60 V.

Mechanical power [[potencia_mecanica]] is 1.05 N·m times 125.7 rad/s, approximately 132 W.

Efficiency [[eta]] is 132 W divided by 155 W, equal to 0.85 or 85 %. That is a reasonable efficiency for a laboratory motor at its nominal operating point. The remaining 15 %, about 23 W, is dissipated as heat in the winding and as mechanical losses at the bearings.

## Interpretation

This exercise shows that even a small educational motor converts most of the electrical energy into useful mechanical work, and that back-EMF accounts for the dominant fraction of the supply voltage at steady state.