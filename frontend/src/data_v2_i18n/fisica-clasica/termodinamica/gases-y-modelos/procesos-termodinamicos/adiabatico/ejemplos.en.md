# Exam-type example

## Problem statement

An adiabatic piston-cylinder contains 0.02 m³ of nitrogen (diatomic ideal gas, [[gamma]] = 1.4) at initial pressure [[p1]] = 400 kPa and temperature [[T1]] = 350 K. The gas expands adiabatically in a quasi-static manner until its volume reaches [[V2]] = 0.05 m³. Calculate the final pressure [[p2]], the final temperature [[T2]], the work done by the gas [[W]] and the change in internal energy [[DeltaU]]. Interpret the result physically.

## Data

- [[V1]] = 0.02 m³
- [[V2]] = 0.05 m³
- [[p1]] = 400 000 Pa (400 kPa)
- [[T1]] = 350 K
- [[gamma]] = 1.4 (diatomic nitrogen)
- Process: quasi-static adiabatic (Q = 0)

## System definition

The system is the nitrogen contained in the cylinder. The cylinder walls are adiabatic, so there is no heat exchange. The piston can move, allowing volume change and expansion work. The surroundings are everything outside the cylinder.

## Physical model

The reversible adiabatic ideal-gas model with constant [[gamma]] is applied. The relevant variables are [[p1]], [[p2]], [[V1]], [[V2]], [[T1]], [[T2]], [[W]] and [[DeltaU]]. The model connects initial and final states through the adiabat law and calculates work from the thermodynamic states.

## Model justification

The model is valid because nitrogen at 400 kPa and 350 K is far from its critical point (126 K and 3.4 MPa), so it behaves as an ideal gas with good accuracy. The process is quasi-static as stated in the problem, guaranteeing that the gas passes through equilibrium states and the reversible adiabatic law applies. The adiabatic condition is justified by the cylinder walls that prevent heat flow. The model breaks down if final temperature falls too low (nitrogen liquefies at 77 K) or if the process were so fast as to generate shock waves.

## Symbolic solution

The final pressure is obtained from the adiabat law:

{{f:ley_adiabata_presion_volumen}}

The final temperature of the gas after the adiabatic expansion:

{{f:cambio_temperatura_adiabatico}}

The work done by the gas during the adiabatic expansion:

{{f:trabajo_adiabatico_ideal}}

The first law for an adiabatic process relating work and internal energy:

{{f:primer_principio_adiabatico}}

## Numerical substitution

For the final pressure, the volume ratio is [[V1]] / [[V2]] = 0.02 / 0.05 = 0.4. Raising to [[gamma]] = 1.4, one obtains 0.4^1.4, which is approximately 0.288. Multiplying by [[p1]] = 400 000 Pa gives a final pressure of approximately 115 400 Pa. Thus [[p2]] ≈ 115 400 Pa ≈ 115.4 kPa.

For the final temperature, the ratio is 0.4^0.4, which is approximately 0.693. Multiplying by [[T1]] = 350 K gives approximately 242.5 K. Thus [[T2]] ≈ 242.5 K, corresponding to about −30.5 °C.

For the work, the numerator is [[p1]] [[V1]] − [[p2]] [[V2]] = 400 000 × 0.02 − 115 400 × 0.05 = 8 000 − 5 770 = 2 230 J. Dividing by [[gamma]] − 1 = 0.4 gives [[W]] = 2 230 / 0.4 = 5 575 J. Thus [[W]] ≈ 5 575 J.

For internal energy, the adiabatic first law gives [[DeltaU]] = −[[W]] = −5 575 J. Thus [[DeltaU]] ≈ −5 575 J.

The check is that [[DeltaU]] + [[W]] = −5 575 + 5 575 = 0, consistent with Q = 0.

## Dimensional validation

The adiabat law has both sides with pressure times volume raised to [[gamma]]:

- Pressure: `[M L⁻¹ T⁻²]`
- Volume: `[L³]`
- Product pV raised to [[gamma]] has dimension proportional to M times L raised to (3[[gamma]]-1) times T raised to -2, preserved on both sides.

For work:

- Pressure times volume has dimension `[M L² T⁻²]` = joule. Breakdown: `[M L⁻¹ T⁻²] · [L³] = [M L² T⁻²]` ✓

For temperature:

- Volume ratio is dimensionless; temperature has dimension `[Theta]`; result is in Kelvin. ✓

## Physical interpretation

The nitrogen gas underwent an adiabatic expansion in which its volume increased 2.5 times. During this process, the gas did approximately 5 575 J of work on the piston without receiving any heat from the surroundings. The only source of that energy was the internal energy of the gas itself, which decreased by the same amount. This is why temperature fell from 350 K to approximately 242.5 K, a drop of about 107 K.

This cooling is not the result of transferring heat outward, but of the direct conversion of internal energy into mechanical work. Physically, the nitrogen molecules have less average kinetic energy at the end of the process than at the beginning, which manifests as a lower temperature. If one wanted to return the gas to the initial state without heat exchange, the piston would have to be compressed with exactly the same amount of work, which would reheat the gas back to 350 K.

If [[gamma]] were larger, as in a monatomic gas (1.67), final temperature would be even lower because work is distributed among fewer degrees of freedom and the thermal impact per unit of work is greater. If the expansion were isothermal instead of adiabatic, the gas would exchange heat with the surroundings during expansion to keep [[T2]] = 350 K, and the pV curve would be different and less steep. The difference between the two curves illustrates the critical role of heat exchange in determining the final state of the gas.

# Real-world example

## Context

Compressed Air Energy Storage (CAES) power plants use the adiabatic process at the heart of their operation. In these systems, air is compressed adiabatically during hours of excess electricity and stored in underground caverns or pressure vessels. When electricity is needed, the air expands adiabatically through a turbine, producing mechanical work that drives a generator. Air temperature falls during expansion and rises during compression, and that temperature cycle determines system efficiency.

## Physical estimation

A storage vessel contains air at [[p1]] = 7 MPa and [[T1]] = 320 K. The air expands adiabatically to [[p2]] = 0.1 MPa (atmospheric pressure), with [[gamma]] = 1.4 for air. The pressure ratio is 70:1. Using the adiabatic relation between pressure and temperature, the final temperature is approximately [[T2]] = 320 K × (0.1 / 7)^(0.4 / 1.4), giving about 320 × 0.52 ≈ 166 K. Thus [[T2]] ≈ 166 K, that is, about −107 °C.

This temperature drop of more than 150 K is a significant limitation of adiabatic CAES systems. At 166 K, air remains gaseous (liquefaction occurs only at 90 K), but the turbine and pipelines must withstand those temperatures.

The [[DeltaT_ad]] of approximately −154 K obtained in this estimation shows that energy storage by adiabatic compression is accompanied by large thermal changes that must be managed to avoid equipment damage and to maximize recoverable energy.

## Interpretation

This example illustrates that the adiabatic process is not merely a theoretical textbook case: it is the core of large-scale energy storage technologies. The calculated [[DeltaT_ad]] is not a minor inconvenience; it is the factor that limits system efficiency and has motivated the development of diabatic CAES systems (with controlled heat exchange) to improve energy recovery.

Physically, the energy stored in the compressed air is not only pressure-mechanical energy: part of it was lost as adiabatic heating during compression (and would need to be restored as external heating before expansion to recover maximum work). This is exactly why real CAES systems include heat exchangers: to recover the temperature that the adiabatic process would otherwise have cooled and thereby extract more work during expansion. Understanding the adiabatic process is therefore the starting point for designing more efficient energy storage systems.
