# Exam-type example

## Problem statement

A refrigerator operates between a space at temperature [[T_C]] of 263 K (minus 10 degrees Celsius) and the environment at [[T_H]] of 303 K (30 degrees Celsius). In each cycle, the refrigerator extracts [[Q_C]] of 800 J from the interior and the compressor performs work [[W]] of 350 J. Determine: (a) the heat rejected [[Q_H]] to the environment, (b) the total entropy change [[Delta_S_total]], and (c) the minimum Carnot work for the same heat extraction.

## Data

- Cold reservoir temperature: [[T_C]] = 263 K
- Hot reservoir temperature: [[T_H]] = 303 K
- Heat extracted from cold reservoir: [[Q_C]] = 800 J
- Compressor work: [[W]] = 350 J
- Unknowns: [[Q_H]], [[Delta_S_total]], minimum work

## System definition

The system is the refrigerant fluid operating in a closed cycle between two thermal reservoirs. The cold reservoir is the refrigerator interior at 263 K. The hot reservoir is the outdoor environment at 303 K. The cycle is a reversed cycle that consumes compressor work [[W]] to transfer heat [[Q_C]] from the cold reservoir to the hot reservoir.

## Physical model

The reversed cycle model in steady state is applied. The first law of thermodynamics establishes energy conservation: [[Q_H]] equals [[Q_C]] plus [[W]]. The second law, expressed as total entropy change [[Delta_S_total]], verifies the thermodynamic viability of the process. The reservoirs are considered to have infinite capacity with constant temperatures [[T_C]] and [[T_H]].

## Model justification

The first and second law model applied to the reversed cycle is appropriate because the system operates cyclically between two reservoirs at known temperatures [[T_C]] and [[T_H]]. The infinite capacity reservoir hypothesis is valid for a domestic refrigerator where the environment and the interior maintain approximately constant temperatures. The relation [[Q_H]] equals [[Q_C]] plus [[W]] is exact by energy conservation, and the condition [[Delta_S_total]] greater than or equal to zero is universal by the second law. The minimum Carnot work provides the appropriate theoretical reference because it establishes the thermodynamic lower bound of the required work.

## Symbolic solution

Applying the first law to the complete reversed cycle:

{{f:balance_energetico_ciclo_invertido}}

From the first law: [[Q_H]] is [[Q_C]] plus [[W]].

Applying the second law to verify viability:

{{f:segunda_ley_ciclo_invertido}}

The total entropy change is: [[Delta_S_total]] is [[Q_H]] divided by [[T_H]] minus [[Q_C]] divided by [[T_C]].

For the minimum work, applying the reversed Carnot cycle formula:

{{f:trabajo_minimo_carnot}}

The minimum Carnot work is: minimum [[W]] is [[Q_C]] times ([[T_H]] minus [[T_C]]) divided by [[T_C]].

## Numerical substitution

Substituting numerical data into the symbolic expressions obtained:

Part a: heat rejected to the hot reservoir.
[[Q_H]] = [[Q_C]] + [[W]] = 800 + 350 = 1150 J.

Part b: total entropy change of the universe.
[[Delta_S_total]] = [[Q_H]] / [[T_H]] - [[Q_C]] / [[T_C]] = 1150 / 303 - 800 / 263 = 3.795 - 3.042 = 0.753 J/K.

Part c: minimum Carnot work for the same extraction.
Minimum [[W]] = [[Q_C]] * ([[T_H]] - [[T_C]]) / [[T_C]] = 800 * (303 - 263) / 263 = 800 * 40 / 263 = 121.7 J.

## Dimensional validation

[[Q_H]]: joules plus joules gives joules. Correct.
[[Delta_S_total]]: joules divided by kelvin minus joules divided by kelvin gives J/K. Correct.
Minimum [[W]]: joules times kelvin divided by kelvin gives joules. Correct.

## Physical interpretation

The rejected heat [[Q_H]] of 1150 J exceeds [[Q_C]] of 800 J by exactly the 350 J of work, confirming energy conservation in the reversed cycle. The [[Delta_S_total]] of 0.753 J/K is positive, confirming that the cycle complies with the second law and is thermodynamically viable: the universe gains net entropy, as it must in every real process.

The minimum Carnot work of 121.7 J is considerably less than the real 350 J. This indicates the real cycle presents significant irreversibilities, concentrated mainly in non-isentropic compression and in finite temperature differences in the heat exchangers. The Carnot fraction is 121.7 divided by 350, giving 34.8 percent, suggesting a moderate compressor isentropic efficiency but within typical ranges for domestic refrigerators.

If [[Delta_S_total]] had been negative, it would indicate a data error or an impossible process. In an ideal Carnot cycle with the same [[Q_C]] of 800 J, the work would be only 121.7 J and [[Delta_S_total]] would be exactly zero.

# Real-world example

## Context

A maintenance technician measures that a split air conditioner extracts heat from the interior at 24 degrees Celsius ([[T_C]] of 297 K) and rejects it to the exterior at 38 degrees Celsius ([[T_H]] of 311 K). The compressor electrical power is 900 W and the indicated cooling capacity is 3200 W. The technician wants to verify whether the data are thermodynamically consistent by applying the energy balance and the second law.

## Physical estimation

As an order of magnitude estimate, the minimum Carnot work to extract [[Q_C]] of 3200 W from the interior is approximately 3200 times 14 divided by 297, giving a reasonable value of 151 W. The real work of 900 W is about 6 times the minimum, which is somewhat high but not impossible for equipment with significant real losses. This order of magnitude confirms that the data do not violate fundamental thermodynamic limits.

{{f:trabajo_minimo_carnot}}

The energy balance gives [[Q_H]] of 3200 plus 900, equal to 4100 W. The [[Delta_S_total]] per second is 4100 divided by 311 minus 3200 divided by 297, giving 13.18 minus 10.77, equal to 2.41 W/K. This positive value confirms thermodynamic viability.

{{f:balance_energetico_ciclo_invertido}}

## Interpretation

The data are thermodynamically consistent: [[Q_H]] of 4100 W satisfies the first law and positive [[Delta_S_total]] of 2.41 W/K satisfies the second law. The ratio of real work to minimum Carnot work is 900 divided by 151, giving 5.96, indicating high irreversibilities but within typical ranges for mid-range split equipment with air exchangers. The implied COP is [[Q_C]] divided by [[W]], that is 3200 divided by 900, giving 3.56, consistent with energy class A equipment. The reason for the high irreversibility relative to the Carnot minimum is the effective temperature difference in the exchangers (greater than the nominal [[T_H]] minus [[T_C]]) and the mechanical losses of the scroll compressor.
