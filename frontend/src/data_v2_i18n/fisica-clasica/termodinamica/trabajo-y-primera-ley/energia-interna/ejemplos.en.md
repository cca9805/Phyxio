# Exam-type example


## Problem statement

A monatomic ideal gas contained in a closed cylinder with a movable piston undergoes a slow expansion at constant pressure. You are asked to calculate the absolute internal energy of the gas in its initial state, its value in the final state after the expansion, and to determine the net internal energy change experienced by the thermodynamic system during the entire process.

## Data

- Amount of substance of the gas: 2 mol
- Absolute temperature in the initial state: 300 K
- Absolute temperature in the final state: 450 K
- Constant-volume molar heat capacity: 12.47 J/(mol·K)
- Universal ideal gas constant: 8.314 J/(mol·K)
- Active molecular degrees of freedom of the gas: 3

## System definition

The physical system under study consists of a closed sample of monatomic ideal gas confined within an adiabatic cylinder with rigid walls at its base, fitted with a friction-free movable piston at the top that keeps the gas pressure constant.

## Physical model

To analyze this process, the classical ideal gas model of a particle with zero intermolecular forces is applied. In this model, all the system's energy is reduced to the translational kinetic energy of the gas atoms, making the absolute internal energy [[energia_interna]] an exclusive function of the absolute temperature [[temperatura]].

## Model justification

The use of this model is valid because the gas operates under conditions of low pressure and high temperature relative to its liquefaction point. In this dilute regime, the average intermolecular distances are extremely large, allowing the attractive forces and the exclusion volume of the molecules to be completely neglected. The model would fail if the gas were highly compressed or dropped to temperatures near condensation.

## Symbolic solution

To determine the absolute internal energy in the initial state, the mathematical definition relationship for a monatomic ideal gas is used:

{{f:energia_interna_gas_ideal}}

This same relationship is applied for the final state by substituting the corresponding temperature. To calculate the internal energy change [[variacion_de_energia_interna]] connecting both thermodynamic states, the following relationship is used:

{{f:variacion_energia_interna}}

Which involves the number of moles, the molar heat capacity [[capacidad_calorifica_a_volumen_constante]], and the temperature change.

## Numerical substitution

For the absolute internal energy of the initial state, multiplying the 2 mol by the universal gas constant, the absolute temperature of 300 K, and the degrees of freedom factor divided by two yields approximately 7483 J. Therefore, initial [[energia_interna]] ≈ 7483 J.

For the final state, repeating the operation using the absolute temperature of 450 K results in approximately 11224 J. Therefore, final [[energia_interna]] ≈ 11224 J.

To evaluate the change in internal energy [[variacion_de_energia_interna]], the [[variacion_de_temperatura]] (450 K minus 300 K) is 150 K. Multiplying this change by the 2 mol of substance and by the molar heat capacity of 12.47 J/(mol·K) yields an energy increase of approximately 3741 J. Therefore, [[variacion_de_energia_interna]] ≈ 3741 J.

## Dimensional validation

We carry out the dimensional analysis of the applied equations using the standard physical notation:
- For the absolute internal energy: [[temperatura]] and [[numero_de_moles]] contribute dimensions `[Θ]` and `[N]`; together with the molar heat capacity `[M L² T⁻² Θ⁻¹ N⁻¹]`, the product yields `[M L² T⁻²]`, equivalent to the joule in the SI.
- For the change in internal energy: the [[variacion_de_temperatura]] contributes dimension `[Θ]`; together with the moles `[N]` and the molar heat capacity `[M L² T⁻² Θ⁻¹ N⁻¹]`, the product likewise yields `[M L² T⁻²]`, validating dimensional consistency.

## Physical interpretation

The increase in absolute internal energy from 7483 J to 11224 J means that the helium atoms have increased their average thermal agitation, moving with a higher root-mean-square speed in the final state. Since this is a monatomic gas with no active chemical bonds, all of this additional 3741 J of energy resides strictly in the translational motion of the particles.

If the temperature change were double (300 K instead of 150 K), the resulting change [[variacion_de_energia_interna]] would double exactly due to the linearity of the model. This demonstrates that the capacity of the gas to store internal energy depends exclusively on its microscopic degrees of freedom and the number of particles, remaining independent of the expansion volume occupied by the gas in the cylinder.

---

# Real-world example


## Context

We analyze the change in internal energy in the compression chamber of an industrial reciprocating piston air compressor. During the rapid compression cycle (which can be approximated as an adiabatic process with no heat exchange with the outside), mechanical work is introduced onto the diatomic air to raise its pressure.

## Physical estimation

We consider a sample of diatomic nitrogen equivalent to 0.5 mol inside the chamber, whose initial temperature rises from 300 K to 520 K during compression. Diatomic nitrogen at moderate temperatures has a constant-volume molar heat capacity of approximately 20.8 J/(mol·K).

The temperature change in this process is 220 K. Multiplying the 0.5 mol by the heat capacity and by the temperature change of 220 K, the change in internal energy [[variacion_de_energia_interna]] yields approximately 2288 J. This quantity represents the net thermal energy transferred to the gas through the work done by the mechanical piston.

## Interpretation

This positive increase in internal energy [[energia_interna]] manifests macroscopically as a drastic temperature increase of the air leaving the compression chamber. In engineering practice, this physical behavior requires designing post-cooling systems (interchangers) to reduce the temperature of the compressed air before it enters the distribution pipes or storage tanks, avoiding excessive thermal expansions, seal failures, or lubrication ignition risks.