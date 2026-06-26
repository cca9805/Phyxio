# Exam-type example

## Problem statement

A polystyrene calorimeter with negligible water equivalent is available. Into it, 300 g of water at 85 °C are poured. Then a 150 g copper piece initially at 20 °C is introduced. Calculate the final equilibrium temperature of the system.

Additional data: specific heat capacity of water: 4186 J/(kg·K); specific heat capacity of copper: 386 J/(kg·K).

## Data

- Mass of water: 0.300 kg
- Initial temperature of water: 85 °C
- Mass of copper: 0.150 kg
- Initial temperature of copper: 20 °C
- Specific heat capacity of water: 4186 J/(kg·K)
- Specific heat capacity of copper: 386 J/(kg·K)
- Water equivalent of calorimeter: negligible

## System definition

The system is the water + copper assembly inside the ideal calorimeter. The calorimeter does not enter the balance because its water equivalent is negligible. The unknown is the equilibrium temperature [[T_eq]] the system will reach after heat exchange.

## Physical model

The process is pure sensible heat: neither water nor copper undergoes a phase change in the temperature range of the problem. For each body, [[Q_i]] is computed from its [[m_i]], its [[c_i]], and its [[DeltaT_i]] relative to [[T_eq]]. The calorimeter is ideal (negligible losses), so the heat released by the water as it cools balances the heat absorbed by the copper as it warms.

## Model justification

The sensible heat model with constant [[c_i]] is valid because the temperature ranges of the water (from 85 °C to [[T_eq]]) and the copper (from 20 °C to [[T_eq]]) are moderate. For copper, the variation of [[c_i]] between 20 °C and 85 °C is below 3 %, so the constant value of 386 J/(kg·K) is a good approximation. For water, the variation of [[c_i]] in that range is below 0.5 %. The calorimeter is negligible per the problem statement.

## Symbolic solution

Applying the calorimetry principle to the isolated system:

{{f:principio_calorimetria}}

Each partial heat is computed as sensible heat:

{{f:calor_sensible_i}}

Expanding each [[Q_i]] in terms of the sensible heat relation and solving for [[T_eq]]:

{{f:temperatura_equilibrio_dos_cuerpos}}

Where subscript 1 corresponds to water and subscript 2 to copper.

## Numerical substitution

Computing the total heat capacities of each body:

Total heat capacity of water: 0.300 × 4186. The product gives 1255.8 J/K.

Total heat capacity of copper: 0.150 × 386. The product gives 57.9 J/K.

Equilibrium temperature: numerator = 1255.8 × 85 + 57.9 × 20. The first term is 1255.8 × 85 = 106 743 J. The second term is 57.9 × 20 = 1158 J. Total numerator: 107 901 J.

Denominator: 1255.8 + 57.9 = 1313.7 J/K.

[[T_eq]] = 107 901 / 1313.7 ≈ 82.1 °C.

## Dimensional validation

The numerator combines total heat capacity times temperature, so it is expressed in joules. The denominator is expressed in joules per kelvin. Dividing both quantities recovers a temperature, which may be expressed in kelvin or in degrees Celsius for this mixture.

## Physical interpretation

The result of 82.1 °C is much closer to the initial temperature of the water (85 °C) than to that of the copper (20 °C), which is consistent with the total heat capacity of water (1255.8 J/K) being approximately 21 times greater than that of copper (57.9 J/K). Water acts as a large thermal reservoir that barely cools when releasing heat to the copper.

The result lies within the interval (20 °C, 85 °C), as it must physically. Verification of the sum of heats:

[[Q_i]] of water: 0.300 × 4186 × (82.1 − 85) ≈ −3641 J.

[[Q_i]] of copper: 0.150 × 386 × (82.1 − 20) ≈ 3596 J.

Sum: −3641 + 3596 ≈ −45 J, difference below 1.3 % of total exchanged energy, attributable to rounding [[T_eq]] to one decimal place.

---

# Real-world example

## Context

In a rapid quenching process, a hot stainless steel part is immersed in a tank of quenching oil. The process engineer estimates the final oil temperature to verify that it remains well below the flash point. The calculation uses the part mass, oil mass, initial temperatures, and the specific heat capacities of steel and oil listed in the estimation below.

## Physical estimation

The calorimetry principle is applied to the steel part + oil system, assuming an isolated system (no losses to the surroundings during the short quenching time). The estimate uses [[m_i]] and [[c_i]] for each body to obtain total heat capacities and then computes [[T_eq]] with the calorimetric weighted average.

Mass of oil: 40 × 0.87 = 34.8 kg.

Total heat capacity of steel: 2.5 × 490 = 1225 J/K.

Total heat capacity of oil: 34.8 × 1900 = 66 120 J/K.

Equilibrium temperature: numerator = 1225 × 850 + 66 120 × 25. The first term is 1 041 250 J. The second is 1 653 000 J. Total numerator: 2 694 250 J.

Denominator: 1225 + 66 120 = 67 345 J/K.

[[T_eq]] = 2 694 250 / 67 345 ≈ 40.0 °C.

## Interpretation

The estimated equilibrium temperature of 40 °C is well below the oil flash point of 180 °C, confirming that the quenching process is safe in this case. The reason is that the total heat capacity of the oil (66 120 J/K) is more than 50 times greater than that of the steel (1225 J/K): the oil acts as an enormous thermal reservoir that barely heats up when absorbing the heat from the part.

This example illustrates the power of calorimetric analysis as a design tool: without needing to solve heat transfer differential equations, the calorimetry principle provides in seconds an estimate of the final temperature that enables safety decisions. The model assumes an isolated system, which slightly overestimates the final oil temperature (in practice the oil also loses heat to the tank surroundings), so the estimate is conservative: if the model says it is safe, reality will be too.
