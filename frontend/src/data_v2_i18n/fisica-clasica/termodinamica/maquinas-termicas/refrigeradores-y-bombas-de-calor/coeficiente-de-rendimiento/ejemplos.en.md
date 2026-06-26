# Exam-type example

## Problem statement

A domestic refrigerator maintains the interior at minus 15 degrees Celsius ([[T_C]] of 258 K) while the condenser operates at 35 degrees Celsius ([[T_H]] of 308 K). The compressor consumes 150 W of electrical power. Determine the Carnot refrigeration COP, the Carnot heat pump COP, the maximum refrigeration capacity and the heat rejected to the environment assuming reversible operation.

## Data

- Cold reservoir temperature [[T_C]] of 258 K, corresponding to minus 15 degrees Celsius (freezer)
- Hot reservoir temperature [[T_H]] of 308 K, corresponding to 35 degrees Celsius (condenser)
- Work consumed [[W]] of 150 W of compressor electrical power
- Required: Carnot [[COP_ref]], Carnot [[COP_bc]], [[Q_C]] and [[Q_H]]

## System definition

Closed system formed by the refrigerant fluid undergoing a reversible reversed Carnot cycle between two thermal reservoirs at constant temperatures, extracting heat from the refrigerator interior and delivering it to the outdoor environment.

## Physical model

A completely reversible reversed Carnot cycle is assumed between [[T_H]] and [[T_C]], with no friction losses, pressure drops or finite temperature differences in heat exchangers. The thermal reservoirs maintain constant temperature throughout the process. The [[COP_ref]] depends exclusively on the ratio of absolute temperatures.

## Model justification

The reversed Carnot cycle is the reference thermodynamic model for refrigeration because it establishes the maximum theoretical COP with a closed expression depending only on the absolute temperatures of the reservoirs. This model is chosen because it allows calculating the efficiency ceiling and sizing the maximum refrigeration capacity without specifying the refrigerant or cycle details. It is appropriate when seeking an upper-bound estimate and when reservoir temperatures are well defined.

## Symbolic solution

The Carnot refrigeration COP is obtained from:

{{f:cop_carnot_ref}}

The Carnot heat pump COP is obtained from:

{{f:cop_carnot_bc}}

The refrigeration capacity is calculated using the refrigeration COP definition:

{{f:cop_refrigeracion}}

The heat delivered to the hot reservoir can also be calculated from the heat pump COP definition:

{{f:cop_bomba_calor}}

The heat rejected to the environment is obtained from the energy balance:

{{f:balance_energetico_cop}}

Coherence verification is performed with:

{{f:relacion_cop}}

## Numerical substitution

To calculate the Carnot refrigeration COP, divide [[T_C]] by the difference [[T_H]] minus [[T_C]], that is, 258 divided by 308 minus 258, which is 258 divided by 50, giving 5.16.

For the Carnot heat pump COP, divide [[T_H]] by the same difference, that is, 308 divided by 50, giving 6.16. The verification is direct: 5.16 plus 1 gives 6.16, consistent.

The maximum refrigeration capacity is [[COP_ref]] times [[W]], that is, 5.16 times 150 W, giving 774 W of heat extracted from the interior.

The heat rejected to the environment is [[Q_C]] plus [[W]], that is, 774 plus 150, giving 924 W delivered to the environment.

## Dimensional validation

COP is dimensionless: [K] divided by [K] gives [1]. Refrigeration power has units of [W], consistent with power. Rejected heat has the same power units.

## Physical interpretation

The COP of 5.16 means that, under ideal conditions, for each watt of electrical power consumed, 5.16 watts of heat could be extracted from the refrigerator interior. The environment would receive 6.16 watts for each watt consumed. In practice, a real domestic refrigerator with these temperatures achieves a COP of 2 to 3, representing 40 to 60 % of the ideal value. The difference is due to irreversibilities in the real vapor-compression cycle: non-isentropic compression, pressure drops in piping, finite temperature differences in evaporator and condenser, and mechanical compressor losses. If the condenser temperature rose from 308 to 318 K, the Carnot COP would fall from 5.16 to 4.30, a 17 % decrease illustrating the sensitivity of COP to hot reservoir temperature.

# Real-world example

## Context

A geothermal heat pump extracts heat from the ground at [[T_C]] of 283 K (10 degrees Celsius) to heat a dwelling at [[T_H]] of 318 K (45 degrees Celsius, heating circuit temperature). The goal is to estimate the maximum theoretical COP and compare it with a gas boiler efficiency.

## Physical estimation

The Carnot heat pump COP is calculated as [[T_H]] divided by the difference [[T_H]] minus [[T_C]], that is, 318 divided by 318 minus 283, giving 318 divided by 35, approximately 9.1. This is the thermodynamic ceiling. Real geothermal heat pumps achieve COPs of 3.5 to 5, representing 38 to 55 % of the Carnot value.

{{f:cop_carnot_bc}}

With a real [[COP_bc]] of 4, each kWh of electricity delivers 4 kWh of heat to the dwelling. A condensing gas boiler delivers at most 0.98 kWh of thermal energy per kWh of gas. If electricity costs three times more than gas per kWh, the heating cost with a heat pump is 3 divided by 4, that is, 0.75 monetary units per kWh of thermal energy, while the boiler costs 1 divided by 0.98, that is, 1.02 units per kWh of thermal energy. The heat pump is 26 % more economical.

## Interpretation

The estimate shows that even with real irreversibilities, geothermal heat pumps are significantly more efficient and economical than gas boilers when the temperature difference between source and sink is moderate. The advantage is amplified in temperate climates and with stable geothermal sources. The direct comparison with the Carnot COP allows evaluating how much technological improvement margin remains available and justifying the higher initial investment of the heat pump.
