# Exam-type example

## Problem statement

An industrial gas turbine operates in an ideal Brayton cycle with air as the working fluid. The pressure ratio is 15 and the adiabatic index of air is 1.40. Calculate the thermal efficiency of the cycle.

## Data

- Pressure ratio: 15
- Adiabatic index: 1.40
- Working fluid: air (ideal gas, constant properties)
- Ideal cycle (reversible processes)

## System definition

The system is the working fluid (air) traversing the closed Brayton cycle. The four thermodynamic states of the cycle are: compressor inlet (1), compressor outlet (2), combustion chamber outlet (3) and turbine outlet (4). The complete cycle is analyzed per kilogram of air.

## Physical model

Ideal Brayton cycle with constant-property gas. The central magnitude is [[eta_th]] and the main formula is:

{{f:rendimiento_brayton}}

All processes are internally reversible. The compressor and turbine operate at 100 % isentropic efficiency. There are no pressure losses in the combustion chamber or ducts.

## Model justification

The ideal Brayton cycle is valid for this problem because the statement explicitly specifies an ideal cycle with air as a perfect gas of constant properties. The pressure ratio of 15 is within the model validity range (4–40) and the assumption of constant [[gamma]] at 1.40 is reasonable for air at moderate temperatures. The model would fail if temperatures were high enough to alter [[gamma]] (above 1300 K at the compressor) or if real isentropic efficiencies were requested.

## Symbolic solution

The ideal Brayton cycle efficiency is obtained from the efficiency formula with [[r_p]] and [[gamma]]:

{{f:rendimiento_brayton}}

where [[r_p]] is the pressure ratio and [[gamma]] is the adiabatic index.

To verify the coherence of the result, the cycle energy balance is applied:

{{f:balance_energetico}}

In an equivalent Rankine cycle, efficiency would be calculated using:

{{f:rendimiento_rankine}}

## Numerical substitution

The values are identified: pressure ratio equal to 15 and adiabatic index equal to 1.40.

The efficiency exponent is the fraction of the complement of [[gamma]] over [[gamma]], which for air equals (1 minus 1.40) divided by 1.40, giving minus 0.2857.

Raising the pressure ratio to that exponent: 15 raised to minus 0.2857 gives approximately 0.4738.

The thermal efficiency is: one minus 0.4738 equal to 0.5262, that is approximately 52.6 %.

## Dimensional validation

[[eta_th]] is a ratio of energies: the dimension of [[W_neto]] divided by the dimension of [[Q_H]] is M·L²·T⁻² divided by M·L²·T⁻², giving dimensionless. The result 0.526 is dimensionless and lies in the physically acceptable range between zero and one. ✓

## Physical interpretation

An efficiency of 52.6 % means that for every 100 kJ of heat supplied in the combustion chamber, 52.6 kJ are converted into useful mechanical work and the remaining 47.4 kJ are inevitably rejected as [[Q_C]] to the atmosphere. This value corresponds to the ideal cycle without losses; in practice, with isentropic efficiencies of the compressor and turbine of 85–90 %, the real efficiency would drop to 38–44 %.

The Carnot efficiency between a typical minimum temperature of 300 K and a maximum temperature of 1500 K would be approximately 80 %. The real Brayton cycle operates well below that limit because heat addition and rejection are not isothermal. The gap between the Brayton and Carnot efficiencies represents the exergy destroyed by the irreversibility of heat exchanges at variable temperature.

---

# Real-world example

## Context

A combined-cycle gas turbine (CCGT) power plant receives [[Q_H]] equal to 500 kJ per kilogram of gas in the Brayton cycle. The Brayton cycle produces [[W_neto]] of 210 kJ/kg and its exhaust gases at 550–600 °C feed a recovery Rankine cycle that produces an additional 95 kJ per kilogram of original gas. The goal is to calculate the overall combined-cycle efficiency and evaluate its performance against conventional plants.

CCGT plants represent the most efficient application of the Brayton-Rankine pair and are the dominant technology in gas-fired base-load electricity generation. Their overall efficiency exceeds 60 % in the most modern installations.

## Physical estimation

The total combined-cycle net work is obtained from the global energy balance:

{{f:balance_energetico}}

The sum of both contributions gives 210 kJ/kg from the Brayton plus 95 kJ/kg from the Rankine, totaling 305 kJ/kg. The overall [[eta_th]] is calculated using the efficiency formula applied to the combined system:

{{f:rendimiento_rankine}}

The ratio of total [[W_neto]] to primary [[Q_H]] gives 305 divided by 500, that is 0.610 or 61.0 %.

As an order of magnitude, this 61 % is consistent with the specifications of latest-generation CCGT plants (class H/J). The Brayton alone would yield 42 %, so the recovery Rankine adds 19 percentage points. A result above 65 % would suggest overestimation or unrealistic conditions.

The heat rejected to the Rankine condenser is 500 minus 305, equal to 195 kJ/kg, representing 39 % of the primary [[Q_H]]. This quantity is the irreducible minimum imposed by the second law for the plant operating temperatures.

## Interpretation

The 61 % efficiency of the combined cycle exceeds that of the Brayton cycle alone by harnessing the hot exhaust gases in the Rankine cycle. Without the recovery cycle, those additional 95 kJ per kilogram would be rejected as waste heat to the atmosphere, wasting 19 % of the primary heat.

This is why combined-cycle gas power plants have displaced conventional coal plants in many countries: with real efficiencies of 55–62 % versus 33–38 % for coal, the combined cycle produces the same electricity with almost half the fuel and carbon dioxide emissions.

The improvement in [[eta_th]] in CCGT plants depends primarily on raising [[T_H]] in the Brayton cycle. Each 50 K increase in the gas turbine inlet temperature contributes approximately one percentage point to the overall efficiency, driving research in superalloys and blade cooling.
