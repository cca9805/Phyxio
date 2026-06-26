# Exam-type example

## Problem statement

A steam thermoelectric power plant operates between a hot reservoir at 540 °C and a cold reservoir (condenser) at 40 °C. Under nominal conditions, the boiler supplies 850 kJ of heat to the working fluid per cycle. Test-bench measurements indicate that the electrical generator extracts 290 kJ of net useful work per cycle.

Calculate: (a) the heat rejected to the condenser per cycle; (b) the real efficiency of the plant; (c) the Carnot efficiency for those reservoir temperatures; (d) the relative efficiency of the plant (ratio of real efficiency to the Carnot limit).

## Data

- Hot-reservoir temperature: 813.15 K (equivalent to 540 °C)
- Cold-reservoir temperature: 313.15 K (equivalent to 40 °C)
- Heat absorbed per cycle: 850 kJ
- Net useful work per cycle: 290 kJ

## System definition

The thermodynamic system is the complete plant cycle: working fluid (steam) that absorbs heat in the boiler, expands in the turbine, cools in the condenser, and returns to the boiler via the pump. The cycle is closed and stationary: the fluid returns exactly to its initial state at the end of each complete cycle.

The two core input magnitudes are [[Q_H]] and [[W_util]]. The derived magnitude [[Q_C]] is obtained from the first-law balance; efficiency [[eta]] is computed as a ratio; the limit [[eta_Carnot]] requires absolute temperatures.

## Physical model

The two-reservoir ideal engine cycle model is applied to calculate efficiency and the energy balance. Hypotheses are: reservoirs at constant temperature throughout each cycle, stationary periodic cycle, and [[W_util]] equal to the difference between the two exchanged heats. To compare with the Carnot limit, the ideal efficiency formula with absolute temperatures is used.

The model is valid here because [[Q_H]] and [[W_util]] data are given as measured values per complete cycle, which corresponds exactly to the model framework. Real irreversibilities are already embedded in the measured [[W_util]] (290 kJ), which is less than the Carnot limit (604 kJ).

## Model justification

The two-reservoir cycle model applies because the boiler operates at essentially constant temperature (superheater at 540 °C) and the condenser also at a nearly fixed temperature (cooling water at 40 °C). The real temperature variation of the steam during expansion is internal to the cycle and is already accounted for in the measured work.

The model would fail if the boiler temperature varied by more than 15% during heat absorption or if the condenser operated at variable temperature (for example, winter versus summer with the same installation); in that case, integrating temperature along the heat exchanger would be required.

## Symbolic solution

Applying energy conservation to the complete cycle:

{{f:balance_termico}}

The heat rejected to the condenser is obtained by solving for [[Q_C]].

The actual cycle efficiency is defined as:

{{f:rendimiento_termico}}

The equivalent form of efficiency expressed with both heats confirms the same result:

{{f:rendimiento_calores}}

The Carnot limit for the given reservoirs is calculated with the heat-ratio efficiency formula applied to the ideal cycle using absolute temperatures.

## Numerical substitution

**Heat rejected to the condenser:**

From the energy balance, subtracting useful work from absorbed heat: 850 kJ minus 290 kJ gives 560 kJ. Therefore [[Q_C]] ≈ 560 kJ per cycle.

**Real efficiency:**

Dividing useful work by absorbed heat: 290 kJ divided by 850 kJ gives approximately 0.341. Therefore [[eta]] ≈ 0.341, that is, 34.1%.

**Verification via the equivalent formula:**

Computing the ratio of rejected heat to absorbed heat: 560 kJ divided by 850 kJ gives approximately 0.659. Its complement to one is 0.341. Result consistent with the direct calculation.

**Carnot limit:**

With absolute temperatures 813.15 K and 313.15 K, the temperature ratio is 313.15 divided by 813.15, approximately 0.385. The Carnot limit is 1 minus 0.385, approximately 0.615. Therefore [[eta_Carnot]] ≈ 0.615.

**Relative efficiency:**

The ratio of real efficiency to the Carnot limit is 0.341 divided by 0.615, approximately 0.555. The plant operates at 55.5% of its maximum thermodynamic potential.

## Dimensional validation

Validation of [[eta]]: the kJ/kJ ratio is dimensionless `[M L² T⁻²] / [M L² T⁻²]` gives `[1]` ✓

Balance validation: the unit of [[Q_C]] is kJ, same as [[Q_H]] and [[W_util]]; dimensions `[M L² T⁻²]` are conserved on both sides of the balance ✓

Validation of [[eta_Carnot]]: K/K ratio dimensionless `[Θ]/[Θ]` gives `[1]` ✓

All three results are dimensionless or have the same units on both sides, confirming dimensional coherence.

## Physical interpretation

The plant operates with a real efficiency of 34.1%, while the theoretical limit for those reservoirs is 61.5%. The gap of 27.4 percentage points represents work that could have been produced in a perfect cycle but is in practice destroyed by system irreversibilities: temperature gradients in boiler and condenser, friction in turbine and pump, irreversible mixing in valves and pipes.

The relative efficiency of 55.5% indicates the plant exploits just over half of the available thermodynamic potential. This value is typical of conventional steam plants from earlier generations: modern supercritical steam plants can raise relative efficiency to 65–70% by increasing the hot-reservoir temperature to 600–620 °C.

Heat rejected to the condenser represents 65.9% of the boiler energy, that is, 560 kJ of every 850 kJ absorbed. On an annual basis, this corresponds to enormous volumes of waste heat discharged into the river or cooling towers. Reducing [[Q_C]] by 5% would increase electricity production by approximately 42.5 kJ per cycle without burning additional fuel, demonstrating the enormous economic and environmental value of improving efficiency even by a few percentage points.

If the condenser temperature dropped from 40 °C to 25 °C (for example, in winter with colder river water), [[eta_Carnot]] would rise to approximately 0.634 and real efficiency could improve by 1 to 2 percentage points depending on the cycle state, illustrating that cold-reservoir temperature is a real lever for improvement, not merely theoretical.

# Real-world example

## Context

A diesel engine manufacturer for construction machinery declares that its engine consumes 12 litres of diesel per hour at full load. The lower calorific value of diesel is 35 MJ per litre. The engine delivers a mechanical power of 75 kW as measured on the test bench. Estimate the thermal efficiency of the engine and assess how much energy is dissipated as waste heat per hour.

## Physical estimation

Heat supplied to the engine per hour is obtained by multiplying fuel consumption by its calorific value: 12 litres per hour multiplied by 35 MJ per litre gives 420 MJ per hour. This value represents [[Q_H]] integrated over one full hour.

Useful work produced in that same interval is obtained by multiplying power by time: 75 kW multiplied by 3600 seconds gives 270 MJ per hour. That value is [[W_util]] integrated over one hour.

Dividing useful work by absorbed heat: 270 MJ divided by 420 MJ gives approximately 0.643. Therefore [[eta]] ≈ 0.643. However, this result exceeds the typical efficiency of real diesel engines (around 0.40–0.46), suggesting a review of the data or that the 75 kW figure includes heat recovery.

For a more realistic estimate, if the declared efficiency is 0.42, useful work produced would be 420 × 0.42, approximately 176 MJ per hour, and waste heat [[Q_C]] would be 420 minus 176, that is, 244 MJ per hour, equivalent to approximately 67.8 kW of thermal power continuously dissipated to the cooling system and exhaust gases.

## Interpretation

A real efficiency of 42% for a large-displacement diesel engine is a solid value. Modern diesel engines are the highest-[[eta]] internal combustion engines available commercially. Their advantage over equivalent gasoline engines comes from the higher compression ratio (up to 22:1 versus 10:1), which raises combustion temperature and increases [[eta_Carnot]] for the same effective reservoirs.

The waste heat of 244 MJ per hour is equivalent to heating approximately 580 litres of water from 20 °C to 120 °C in that interval. In construction machinery, that heat is dissipated to the air through the radiator and exhaust gases, but in fixed installations (generator sets, agricultural cogeneration) it can be exploited for grain drying or space heating, raising the global system efficiency to 80%.

The ratio between [[Q_C]] and [[Q_H]] in this engine (approximately 0.58) confirms that more than half the chemical energy in the fuel is converted to waste heat. This is the thermodynamic reality of internal combustion engines: the second law requires that a substantial fraction of heat can never be converted to work, and engine design can only determine how large or small that fraction is.
