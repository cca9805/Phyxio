# Examples — Diesel Cycle

# Exam-type example

## Problem statement

An ideal Diesel engine operates with air ([[gamma]] of 1.4) and has a compression ratio [[r]] of 18. The cutoff ratio [[r_c]] is 2.5. The engine absorbs 1200 kJ/kg of heat during isobaric combustion. Determine the thermal efficiency of the cycle, the net work per kilogram, and the heat rejected to the cold reservoir.

## Data

- Compression ratio [[r]] of 18, corresponding to a medium-sized industrial Diesel engine
- Cutoff ratio [[r_c]] of 2.5, indicating moderate fuel injection
- Adiabatic index [[gamma]] of 1.4, cold-air standard model
- Absorbed heat [[Q_H]] of 1200 kJ/kg, supplied during isobaric combustion

## System definition

Closed system composed of ideal air with constant properties undergoing a reversible four-process Diesel cycle: adiabatic compression, isobaric expansion (combustion), adiabatic expansion, and isochoric heat rejection.

## Physical model

Ideal gas with constant [[gamma]] of 1.4 is assumed, with reversible processes free of friction losses or heat transfer to walls. Combustion is modeled as constant-pressure heat addition and exhaust as constant-volume heat rejection.

## Model justification

The ideal Diesel cycle with constant-property gas is the thermodynamic reference model for compression-ignition engines. This model is chosen because it allows calculating the theoretical upper limit of efficiency with a closed algebraic expression depending only on three measurable parameters: the geometric compression ratio of the cylinder, the operational cutoff ratio controlled by injection, and the adiabatic index of the working gas. This model is appropriate when cycle temperatures do not exceed 2000 K and the compression ratio is between 12 and 25, conditions met in this problem. The Diesel cycle is the reference model for compression-ignition engines. The efficiency formula allows evaluating the theoretical thermodynamic limit before considering real losses.

## Symbolic solution

The Diesel cycle efficiency is obtained from the central formula:

{{f:rendimiento_diesel}}

With efficiency known, net work is calculated using:

{{f:rendimiento_alternativo_diesel}}

And rejected heat is obtained by energy balance:

{{f:balance_energetico_diesel}}

## Numerical substitution

To calculate [[eta_D]], the compression factor is first evaluated: one divided by [[r]] raised to [[gamma]] minus one, that is, one divided by 18 raised to 0.4. Computing 18 raised to 0.4 gives 3.178, so the compression factor is one divided by 3.178, that is 0.3147.

The cutoff factor is ([[r_c]] raised to [[gamma]] minus one) divided by ([[gamma]] times ([[r_c]] minus one)): (2.5 raised to 1.4 minus 1) divided by (1.4 times 1.5). Computing 2.5 raised to 1.4 gives 3.343, so the numerator is 3.343 minus 1 which is 2.343, and the denominator is 1.4 times 1.5 which is 2.1. The cutoff factor is 2.343 divided by 2.1, that is 1.116.

The product of both factors is 0.3147 times 1.116, that is 0.3512. Therefore [[eta_D]] is one minus 0.3512, that is 0.6488 or 64.9 %.

[[W_neto]] is obtained as [[eta_D]] times [[Q_H]]: 0.6488 times 1200 gives approximately 778.6 kJ/kg. Therefore [[W_neto]] is approximately 778.6 kJ/kg.

[[Q_C]] is obtained by balance: [[Q_H]] minus [[W_neto]], that is 1200 minus 778.6, giving approximately 421.4 kJ/kg. Therefore [[Q_C]] is approximately 421.4 kJ/kg.

## Dimensional validation

- Efficiency: dimensionless ratio `[1]` ✓
- Net work: `[1]` times `[kJ/kg]` gives `[kJ/kg]` ✓
- Rejected heat: energy difference `[kJ/kg] - [kJ/kg]` gives `[kJ/kg]` ✓

## Physical interpretation

An efficiency of 64.9 % means that, in the best theoretical case, nearly two-thirds of the energy supplied as heat is converted into mechanical work. The remaining third must be obligatorily rejected to the cold reservoir. If the cutoff ratio [[r_c]] were reduced from 2.5 to 1.5 (less fuel injected), efficiency would rise to 68.2 %, but [[W_neto]] per kilogram would decrease because less heat is injected. If [[r_c]] increased to 3.5, efficiency would fall to 60.1 %, showing that injecting more fuel penalizes efficiency. The [[W_neto]] of 778.6 kJ/kg confirms that most of the injected energy is utilized as useful work in this idealized cycle.

# Real-world example

## Context

An engineer evaluates a marine Diesel engine with compression ratio [[r]] of 22 and cutoff ratio [[r_c]] of 3. The engine consumes 15 MW thermal from fuel and its measured real efficiency is 42 %. The theoretical limit and available improvement margin need to be determined.

## Physical estimation

The maximum theoretical Diesel cycle efficiency is obtained from the formula with [[gamma]] of 1.4 for the cold-air standard model:

{{f:rendimiento_diesel}}

Computing, the compression factor is one divided by 22 raised to 0.4. The value 22 raised to 0.4 is approximately 3.427, giving a factor of 0.2918. The cutoff factor is (3 raised to 1.4 minus 1) divided by (1.4 times 2): the numerator is 4.656 minus 1 giving 3.656, and the denominator is 2.8. The quotient is 1.306. The product is 0.2918 times 1.306 giving 0.3811. This estimation of the order of magnitude of the thermodynamic limit allows evaluating the scale of the improvement margin. The theoretical efficiency is one minus 0.3811, that is approximately 61.9 %.

If the engine consumes 15 MW thermal of [[Q_H]], the maximum [[W_neto]] would be 15 times 0.619, that is 9.29 MW. The minimum [[Q_C]] would be 15 minus 9.29, that is 5.71 MW. The actual work is 15 times 0.42, that is 6.3 MW, with an actual rejection of 8.7 MW.

{{f:balance_energetico_diesel}}

## Interpretation

The real efficiency of 42 % versus the theoretical 61.9 % indicates the engine operates at 67.9 % of its thermodynamic limit. The main irreversibility sources are heat transfer to cylinder walls, piston friction, and incomplete combustion of heavy marine fuel.

To evaluate whether investment in improvements is worthwhile, the engineer compares: if an exhaust gas heat recovery system were installed to preheat intake air, approximately 1.5 MW could be recovered, raising effective power to 7.8 MW and overall efficiency to 52 %. In terms of [[W_neto]], each percentage point of improvement represents 0.15 MW of additional shaft power, justifying investments in two-stage turbochargers and electronically controlled high-pressure injection systems.
