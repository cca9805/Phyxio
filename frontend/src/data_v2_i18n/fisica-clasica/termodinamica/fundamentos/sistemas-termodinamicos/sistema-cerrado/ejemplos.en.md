# Exam-type example

## Problem statement

An ideal diatomic gas contained in a cylinder with a frictionless piston receives 800 J of heat from an external source while expanding and doing 320 J of work on the piston. Determine the change in internal energy of the gas, classify the process according to the second law, and indicate whether the entropy of the system increases, decreases, or remains constant.

## Data

- Heat received by the system: 800 J
- Work done by the system on the piston: 320 J (engineering convention) → with IUPAC convention, the system releases work, so W is negative: W = −320 J
- System: ideal diatomic gas in a cylinder with piston
- Boundary type: permeable to heat, mobile (pV work), impermeable to matter

## System definition

The thermodynamic system is the ideal gas contained inside the cylinder. The boundary is defined by the cylinder walls, the piston head, and the bottom cap. The boundary transmits heat from the external source (not adiabatic) and can move when the piston displaces (allows pressure-volume work). There is no matter flow: the gas does not escape. The system is therefore a closed system.

## Physical model

The system is modeled as a **closed system** with heat and mechanical work exchange with the surroundings. The first law is applied with IUPAC convention: [[Q]] positive (the system absorbs heat), [[W]] negative (the system does work, releasing energy to the surroundings). The change in [[DeltaU]] results from the difference between the energy received as heat and that released as work.

## Model justification

The closed system model is valid because the gas remains inside the cylinder throughout the process: there is no mass flow through any part of the boundary. The boundary is clearly non-adiabatic (receives heat from a source) and non-rigid (the piston moves), which rules out the isolated system model. Since there is no mass flow, the open system model does not apply either.

## Symbolic solution

Applying the first law to the closed system with IUPAC convention:

{{f:primer_principio_cerrado}}

With [[Q]] positive equal to 800 J and [[W]] negative equal to minus 320 J (the system does work, equivalent to receiving negative W in IUPAC convention):

The result is that [[DeltaU]] equals Q plus W, that is, 800 J plus (minus 320 J), giving positive 480 J.

For the second law, since the process receives heat at a positive temperature and is not specified as reversible, the change in [[S]] is greater than or equal to Q/T, with T the temperature of the source. Since Q is positive, [[S]] is positive or zero.

## Numerical substitution

Applying the first law formula directly:

[[DeltaU]] equals 800 J plus (minus 320 J), resulting in 480 J.

The gas has gained 480 J of internal energy. For an ideal diatomic gas at moderate temperature, internal energy depends only on temperature, so this 480 J increase corresponds to a temperature increase proportional to the isochoric heat capacity of the gas.

## Dimensional validation

The units of [[DeltaU]], [[Q]], and [[W]] are all joules, with dimension [M L² T⁻²]. The balance [[DeltaU]] equals [[Q]] plus [[W]] has the same dimensional meaning in all three terms, confirming dimensional consistency. The result 480 J is positive, which is physically consistent with a process in which the system absorbs more energy as heat than it releases as work.

## Physical interpretation

The result [[DeltaU]] = 480 J indicates that the gas has gained 480 J of net internal energy. Physically this means that the process combines two effects: the system absorbs thermal energy from the surroundings ([[Q]] = 800 J) and simultaneously delivers mechanical energy to the piston ([[W]] = −320 J). The difference, 480 J, increases the internal energy [[U]] of the gas, which corresponds to a temperature increase. The change in [[S]] of the system is positive because it depends on the heat absorbed at finite temperature: physically this implies the process is irreversible and the universe gains entropy. The positive sign of [[DeltaU]] is consistent with a net energy gain for the system.

---

# Real-world example

## Context

A car internal combustion engine runs the Otto cycle at steady state. During the compression stroke, the piston compresses the air-fuel mixture from a volume of 500 mL to 50 mL (compression ratio 10:1) in an approximately adiabatic process in a fraction of a second. The mixture has an effective isochoric heat capacity of approximately 0.72 J/(g·K) and the mass of mixture per cylinder is 0.5 g. The initial temperature of the mixture at valve closing is 330 K.

## Physical estimation

During the compression stroke, [[Q]] is approximately zero because the process occurs in milliseconds and heat losses through the walls are negligible on that timescale. The system is the gas mixture in the cylinder: a closed system (valves are closed) with compression work performed by the piston.

The first law for an adiabatic process in the closed system establishes that [[DeltaU]] equals [[W]] (the work received by the system, positive in compression with IUPAC convention). The internal energy increases by exactly the amount of work done by the piston on the mixture.

For an adiabatic compression of an ideal diatomic gas with heat capacity ratio 1.4, the final compression temperature can be estimated from the compression ratio raised to the exponent gamma minus 1. With a compression ratio of 10 and gamma of 1.4, the temperature multiplies by approximately a factor of 2.51, giving a final compression temperature of around 828 K.

## Interpretation

The compression work done by the piston has converted mechanical energy from the engine into internal energy of the mixture, raising its temperature from 330 K to about 828 K. This temperature increase is fundamental for efficient subsequent combustion: a hotter mixture ignites faster and produces more complete combustion.

During this stroke, [[DeltaU]] has increased by an amount equal to the compression work, of the order of several hundred joules per cylinder. The change in [[S]] of the system is zero in the ideal reversible adiabatic process (isentropic), and slightly positive in the real process due to internal irreversibilities of the compression. The compression stroke clearly illustrates the closed system in action: mobile boundary (piston), no mass flow (closed valves), no significant heat on the process timescale.
