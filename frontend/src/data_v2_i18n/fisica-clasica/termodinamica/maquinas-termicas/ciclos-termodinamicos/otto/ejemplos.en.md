# Examples — Otto Cycle

# Exam-type example

## Problem statement

An ideal gasoline engine operates with air ([[gamma]] of 1.4) and has a compression ratio [[r]] of 10. The engine absorbs 1000 kJ/kg of heat during isochoric combustion. Determine the thermal efficiency of the cycle, the net work per kilogram, and the heat rejected to the cold reservoir.

## Data

- Compression ratio [[r]] of 10, corresponding to a modern direct-injection gasoline engine
- Adiabatic index [[gamma]] of 1.4, cold-air standard model
- Absorbed heat [[Q_H]] of 1000 kJ/kg, supplied during instantaneous isochoric combustion
- Sought: [[eta_O]], [[W_neto]], and [[Q_C]]

## System definition

Closed system composed of ideal air with constant properties undergoing a reversible four-process Otto cycle: adiabatic compression, isochoric combustion, adiabatic expansion, and isochoric heat rejection.

## Physical model

Ideal gas with constant [[gamma]] of 1.4 is assumed, with reversible processes free of friction losses or heat transfer to walls. Combustion is modeled as constant-volume heat addition and exhaust as constant-volume heat rejection.

## Model justification

The ideal Otto cycle with constant-property gas is the thermodynamic reference model for spark-ignition engines. This model is chosen because it allows calculating the theoretical upper limit of efficiency with a closed algebraic expression depending only on two measurable parameters: the geometric compression ratio of the cylinder and the adiabatic index of the working gas. This model is appropriate when cycle temperatures do not exceed 2000 K and the compression ratio is between 6 and 13, conditions met in this problem. The simplicity of the Otto formula, which does not depend on [[Q_H]], isolates the purely geometric effect of compression on efficiency.

## Symbolic solution

The Otto cycle efficiency is obtained from the central formula:

{{f:rendimiento_otto}}

With efficiency known, net work is calculated using:

{{f:rendimiento_alternativo_otto}}

And rejected heat is obtained from the energy balance:

{{f:balance_energetico_otto}}

## Numerical substitution

To calculate [[eta_O]], evaluate [[r]] raised to [[gamma]] minus one, that is 10 raised to 0.4. Calculating 10 raised to 0.4 gives 2.512. The efficiency is one minus one divided by 2.512, that is one minus 0.3981, giving 0.6019 or 60.2 %.

Net work is [[eta_O]] times [[Q_H]]: 0.6019 times 1000 kJ/kg, that is 601.9 kJ/kg.

Rejected heat is [[Q_H]] minus [[W_neto]]: 1000 minus 601.9, that is 398.1 kJ/kg.

## Dimensional validation

Efficiency is dimensionless: [1] minus [1] divided by [1] gives [1]. Net work has units of [kJ/kg], consistent with specific energy. Rejected heat has the same units.

## Physical interpretation

The 60.2 % efficiency means that, of each 1000 kJ/kg of absorbed heat, 602 kJ/kg are converted into mechanical work and 398 kJ/kg are obligatorily rejected to the cold reservoir. This value is the theoretical maximum for this compression ratio; any real engine with [[r]] of 10 will have lower efficiency due to friction losses, non-instantaneous combustion, and heat transfer to walls. It is important to note that if [[Q_H]] were doubled to 2000 kJ/kg, the efficiency would remain exactly 60.2 %, but [[W_neto]] would double to 1204 kJ/kg and [[Q_C]] to 796 kJ/kg. This independence of efficiency from [[Q_H]] is exclusive to the Otto cycle and does not hold in the Diesel cycle, where the cutoff ratio introduces an additional dependence.

# Real-world example

## Context

A turbocharged car engine has a compression ratio [[r]] of 10. An order-of-magnitude estimation of the maximum thermal efficiency is desired using the cold-air standard model, compared with the actual engine efficiency.

## Physical estimation

The maximum theoretical Otto cycle efficiency is obtained from the formula with [[gamma]] of 1.4 for the cold-air standard:

{{f:rendimiento_otto}}

With [[r]] of 10 and [[gamma]] of 1.4: [[eta_O]] is one minus one divided by 10 raised to 0.4, that is one minus 0.3981, giving approximately 0.60 or 60 %. This is an order-of-magnitude estimation of the thermodynamic ceiling. Modern gasoline engines achieve actual efficiencies of 30 to 38 %, representing 50 to 63 % of the theoretical value. The difference is due to non-instantaneous combustion, wall heat losses, mechanical friction, and gas pumping. The reasonable value of the approximation is that it allows quickly evaluating the efficiency scale without complex simulations.

## Interpretation

The estimation shows that even with a simplified model, the order of magnitude of the theoretical efficiency (60 %) reveals that real engines harness only half the thermodynamic potential. Technological improvements (direct injection, turbocharging, variable valve timing) are measured by how much they close the gap between actual efficiency and the Otto limit. The ratio of real efficiency to Otto efficiency, called the second-law efficiency or effectiveness of the engine, provides a single metric that captures all irreversibilities combined. For a modern turbocharged gasoline engine achieving 36 % real efficiency with a theoretical Otto of 60 %, the second-law effectiveness is 0.60, meaning 40 % of the thermodynamic potential is lost to irreversibilities that could theoretically be reduced through engineering improvements.
