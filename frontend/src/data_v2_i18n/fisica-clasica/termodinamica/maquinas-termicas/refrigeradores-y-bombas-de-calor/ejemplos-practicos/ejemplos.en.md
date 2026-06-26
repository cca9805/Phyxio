# Exam-type example

## Problem statement

A domestic refrigerator maintains the freezer interior at minus 18 degrees Celsius while the condenser operates at 35 degrees Celsius. The compressor consumes 120 W of electrical power and has an isentropic efficiency of 75 %. The measured real COP of the system is 2.8. Determine the Carnot COP, the Carnot fraction, the cooling capacity, the heat rejected to the environment and the daily electricity consumption if the compressor runs an average of 8 hours per day.

## Data

- Freezer temperature: minus 18 degrees Celsius, equivalent to [[T_C]] of 255 K
- Condenser temperature: 35 degrees Celsius, equivalent to [[T_H]] of 308 K
- Compressor power [[W_comp]] of 120 W
- Measured [[COP_real]] of 2.8
- Daily operating time: 8 hours
- Required: [[COP_Carnot]], [[eta_Carnot]], [[Q_C]], [[Q_H]] and daily consumption

## System definition

Closed system formed by the refrigerant circulating in a vapor-compression cycle between the evaporator (at freezer temperature) and the condenser (at ambient temperature), with electric compressor and expansion valve. Steady-state operation.

## Physical model

The real refrigeration model between [[T_H]] and [[T_C]] is applied, with [[COP_real]] given as measured data. The [[COP_Carnot]] is calculated as a theoretical reference to evaluate system efficiency. The energy balance establishes that [[Q_H]] is the sum of [[Q_C]] and [[W_comp]].

## Model justification

The real COP model with Carnot COP reference is appropriate because the data include the measured system COP and the reservoir temperatures. The Carnot COP provides the theoretical reference for evaluating design quality. The energy balance allows verification of result coherence.

## Symbolic solution

The Carnot refrigeration COP is calculated as:

{{f:cop_carnot_referencia}}

The Carnot fraction is obtained from:

{{f:fraccion_carnot}}

The cooling capacity is calculated by multiplying the real COP by the power:

{{f:cop_real_refrigeracion}}

The heat rejected to the environment is obtained from the energy balance:

{{f:balance_energetico_practico}}

The daily energy consumption is calculated as:

{{f:consumo_energetico}}

For verification, the heat pump COP can be calculated as:

{{f:cop_real_bomba_calor}}

## Numerical substitution

The Carnot COP is [[T_C]] divided by the difference [[T_H]] minus [[T_C]], that is 255 divided by 308 minus 255, giving 255 divided by 53, resulting in 4.81.

The Carnot fraction is [[COP_real]] divided by [[COP_Carnot]] times 100, that is 2.8 divided by 4.81 times 100, giving 58.2 %. This indicates an efficient design within the expected range.

The cooling capacity is [[COP_real]] times [[W_comp]], that is 2.8 times 120, giving [[Q_C]] of 336 W.

The heat rejected to the environment is [[Q_C]] plus [[W_comp]], that is 336 plus 120, giving [[Q_H]] of 456 W.

The daily consumption is 120 W times 8 hours, giving 960 Wh, equivalent to 0.96 kWh per day. In a 30-day month, consumption is 28.8 kWh.

## Dimensional validation

[[COP_Carnot]] is kelvin divided by kelvin, dimensionless. [[Q_C]] is dimensionless times watts, giving watts. [[Q_H]] is watts plus watts, giving watts. Consumption is watts times hours, giving watt-hours. All dimensions are consistent.

## Physical interpretation

The [[COP_real]] of 2.8 means each watt of electricity extracts 2.8 watts of heat from the freezer. The Carnot fraction of 58 % indicates a well-designed system that exploits more than half the thermodynamic potential. The rejected heat [[Q_H]] of 456 W exceeds the cooling capacity [[Q_C]] of 336 W by exactly the 120 W of the compressor, satisfying the energy balance. The monthly consumption of 28.8 kWh is typical of an efficient refrigerator rated A or above on the European energy label. Verification with the heat pump COP gives 456 divided by 120, which is 3.8, and indeed 3.8 minus 2.8 is 1.0, confirming the fundamental relationship between both COPs in the ideal limit. The real difference may deviate slightly from one due to asymmetric irreversibilities in the vapor-compression cycle.

# Real-world example

## Context

A company installs an air-source heat pump for heating a 120 square meter office. The heating demand is 6000 W when the outdoor temperature is 2 degrees Celsius and the indoor temperature is maintained at 22 degrees Celsius. The manufacturer specifies a COP of 3.2 at these conditions. The objective is to verify whether this value is thermodynamically consistent and estimate the monthly electricity cost at 0.15 euros per kWh assuming 10 hours of daily operation.

## Physical estimation

As an order of magnitude estimate, the reservoir temperatures are [[T_C]] of 275 K (outdoor) and [[T_H]] of 295 K (indoor). The refrigeration [[COP_Carnot]] is approximately 275 divided by 20, giving 13.75. The heat pump Carnot COP is 13.75 plus 1, giving 14.75. The Carnot fraction is 3.2 divided by 14.75, giving a reasonable value of 21.7 %. This order of magnitude confirms the declared COP is thermodynamically possible.

{{f:fraccion_carnot}}

A Carnot fraction of 22 % is low but not impossible for an air-source heat pump with a small temperature difference. Typical air-source heat pumps achieve fractions of 20 to 35 % due to losses in outdoor air exchangers and evaporator defrosting.

The required electrical power is [[Q_H]] divided by [[COP_real]], that is 6000 divided by 3.2, giving [[W_comp]] of 1875 W. The heat extracted from outdoors is [[Q_H]] minus [[W_comp]], that is 6000 minus 1875, giving [[Q_C]] of 4125 W.

{{f:balance_energetico_practico}}

The daily energy consumption [[E_dia]] is 1875 W times 10 hours, giving 18750 Wh or 18.75 kWh per day. The monthly consumption is 18.75 times 30, giving 562.5 kWh. The cost is 562.5 times 0.15, resulting in 84.4 euros per month.

{{f:consumo_energetico}}

## Interpretation

The COP of 3.2 is thermodynamically consistent: the Carnot fraction of 22 % falls within the acceptable range for air-source heat pumps at low temperature difference. The system extracts 4125 W from outdoor air and adds 1875 W from the compressor to deliver 6000 W indoors, satisfying the energy balance. The [[E_dia]] of 18.75 kWh confirms the consumption level. Compared with direct electric heating (COP of 1), the heat pump reduces electricity consumption to less than one third. The monthly cost of 84.4 euros is competitive against gas heating in many European regions.
