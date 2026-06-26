# Exam-type example

## Problem statement

A coal-fired thermal power plant operates on an ideal cycle between a boiler at 550 degrees Celsius and a condenser at 35 degrees Celsius. Calculate the maximum Carnot efficiency and determine the heat that must be rejected to the cold reservoir if it absorbs 800 kJ per kilogram of steam.

## Data

- Boiler temperature: 550 °C, equivalent to 823 K
- Condenser temperature: 35 °C, equivalent to 308 K
- Heat absorbed per kilogram: 800 kJ/kg

## System definition

The system is the working fluid (steam) circulating through a closed cycle between the two thermal reservoirs. The reservoirs are considered to have infinite heat capacity. The cycle is fully reversible with no entropy production.

## Physical model

The ideal Carnot cycle applies with [[T_H]] of 823 K and [[T_C]] of 308 K. The efficiency depends exclusively on these two absolute temperatures through the [[eta_C]] formula.

## Model justification

The Carnot model is valid here because the problem specifies an ideal cycle without irreversibilities. The reservoir temperatures are well defined and remain constant during the isothermal processes. The model would fail if the problem indicated real isentropic efficiencies of components or losses due to heat transfer across finite temperature differences.

## Symbolic solution

The maximum efficiency is obtained directly from the Carnot formula:

{{f:rendimiento_carnot}}

The energy balance allows calculating the rejected heat:

{{f:balance_energetico_carnot}}

The relationship between exchanged heats confirms the coherence of the result:

{{f:relacion_calores_carnot}}

## Numerical substitution

Carnot efficiency is calculated as one minus the ratio of [[T_C]] to [[T_H]]: one minus 308 divided by 823 gives one minus 0.3743, that is 0.6257. The maximum efficiency is approximately 62.6 %.

For the rejected heat, [[Q_C]] is obtained as [[Q_H]] multiplied by one minus [[eta_C]]: 800 kJ/kg multiplied by 0.3743 gives approximately 299.4 kJ/kg. Therefore [[Q_C]] ≈ 299.4 kJ/kg.

The net work is obtained by energy balance: [[Q_H]] minus [[Q_C]] gives 800 minus 299.4, that is approximately 500.6 kJ/kg. Therefore [[W_neto]] ≈ 500.6 kJ/kg. This value can also be verified as [[eta_C]] multiplied by [[Q_H]]: 0.6257 times 800 gives 500.6 kJ/kg, confirming internal coherence.

## Dimensional validation

- Efficiency: `[K]/[K]` yields dimensionless `[1]` ✓
- Rejected heat: `[kJ/kg]` multiplied by dimensionless yields `[kJ/kg]` ✓
- Net work: energy difference in `[kJ/kg]`, dimension `[M L² T⁻²]` per unit mass ✓

## Physical interpretation

A Carnot efficiency of 62.6 % means that, in the best theoretical case possible, only 62.6 % of the supplied heat can be converted into mechanical work. The remaining 37.4 % must be obligatorily rejected as [[Q_C]] to the cold reservoir, as imposed by the second law of thermodynamics. No design improvement can exceed this limit while the reservoirs remain at 823 K and 308 K.

If the boiler temperature could be raised to 1000 K while keeping the condenser at 308 K, Carnot efficiency would rise to 69.2 %, showing that investment in high-temperature resistant materials has direct thermodynamic justification. The [[W_neto]] per kilogram would rise from 500.6 to 553.6 kJ/kg, a 10.6 % increase in available power.

Conversely, improving the condenser by reducing [[T_C]] from 308 K to 290 K would only raise efficiency to 64.8 %, a smaller increase because the denominator is already large. The strategy of raising [[T_H]] is thermodynamically more efficient than reducing [[T_C]] when [[T_H]] is already high.

# Real-world example

## Context

An industrial cogeneration plant uses a gas turbine with an inlet temperature of 1200 K and rejects heat to a recovery system at 400 K. The engineer needs to determine the absolute thermodynamic limit to evaluate the improvement margin of the current installation, which achieves a real efficiency of 38 %.

## Physical estimation

The maximum Carnot efficiency between these reservoirs is obtained from the temperature ratio:

{{f:rendimiento_carnot}}

Calculating one minus 400 divided by 1200 gives one minus 0.3333, that is approximately 0.6667 or 66.7 %. This estimation of the order of magnitude of the thermodynamic limit allows evaluating the scale of the improvement margin. The real plant efficiency is 38 %, which represents 57 % of the Carnot efficiency.

From the energy balance, if the plant consumes 50 MW thermal of [[Q_H]], the maximum [[W_neto]] would be 50 MW multiplied by 0.667, giving 33.3 MW. The minimum heat rejected to the cold reservoir would be [[Q_C]] of 50 minus 33.3, that is 16.7 MW. The actual work is 50 multiplied by 0.38, giving 19 MW, with an actual rejection of 31 MW to the recovery system. The difference between theoretical [[W_neto]] (33.3 MW) and actual (19 MW) indicates 14.3 MW lost to internal and external irreversibilities.

{{f:balance_energetico_carnot}}

## Interpretation

The real efficiency of 38 % versus the Carnot of 66.7 % indicates that 43 % of the thermodynamic potential is lost to irreversibilities. The main sources are heat transfer across finite temperature differences, friction losses in the turbine, and irreversible combustion.

To evaluate whether investment in improvements is worthwhile, the engineer uses Carnot efficiency as the absolute reference: if the installation already operated at 60 % of Carnot (40 %), remaining improvements would yield diminishing returns. The fact that it operates at 57 % indicates that significant optimization margin still exists. In terms of [[W_neto]], each percentage point of improvement represents 0.5 MW of additional electrical power, justifying investments in regeneration and combustion air preheating.
