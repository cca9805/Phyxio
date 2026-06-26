# Exam-type example

## Problem statement

A rigid container of 15.0 L contains nitrogen gas (N₂) at 25.0 °C and 2.50 atm. The container is heated until the internal pressure rises to 4.00 atm. (a) Calculate the final temperature of the nitrogen. (b) Determine the amount of substance of nitrogen present. (c) To what extent can the ideal gas law result be trusted for this situation?

## Data

- Volume ([[V]]): 0.0150 m³ (15.0 L, constant, rigid container)
- Initial temperature ([[T]]₁): 298.15 K (25.0 °C)
- Initial pressure ([[P]]₁): 253 313 Pa (2.50 atm)
- Final pressure ([[P]]₂): 405 300 Pa (4.00 atm)
- Gas constant ([[R]]): 8.314 J/(mol·K)

## System definition

System: mass of nitrogen gas enclosed in the container (closed system, [[n]] constant). The container is rigid and impermeable: [[V]] and [[n]] remain constant throughout the process.

## Physical model

The **ideal gas law** is applied. Since the container is rigid ([[V]] constant) and closed ([[n]] constant), the relation between initial and final state variables is:

{{f:ley_gas_ideal}}

With [[n]] and [[V]] constant, Gay-Lussac's law follows: the ratio [[P]]/[[T]] is conserved, which allows calculating [[T]]₂ without needing to know [[n]] explicitly in part (a).

## Model justification

Nitrogen at pressures of 2.5–4 atm and temperatures above 300 K is a gas well above its critical temperature (126 K) and its condensation point. The compressibility factor of N₂ under these conditions is Z ≈ 0.997, a deviation of only 0.3 % from ideal behaviour: the ideal gas model is fully valid. If the pressure were to reach several tens of atmospheres or the temperature were to drop toward 130 K, the Van der Waals equation would be required.

## Symbolic solution

Both parts derive from the same core formula of this leaf:

{{f:ley_gas_ideal}}

**Part (a):** With [[V]] and [[n]] constant the ratio [[P]]/[[T]] is conserved between states. Therefore [[T]]₂ is proportional to [[T]]₁ and to the pressure ratio [[P]]₂/[[P]]₁: a higher final [[P]] requires a proportionally higher final [[T]] to sustain the same amount of gas in the same volume.

**Part (b):** Rearranging for [[n]] yields that its value is the ratio of the product [[P]]₁·[[V]] to the product [[R]]·[[T]]₁. The initial and final states give the same [[n]] because the system is closed.

## Numerical substitution

**Part (a):**

The initial temperature ([[T]]₁) is 298.15 K. The pressure ratio (4.00 divided by 2.50) gives 1.600. Multiplying 298.15 K by that factor gives approximately 477 K. Therefore [[T]]₂ ≈ 477 K, equivalent to about 204 °C. The temperature rose by 179 K to sustain double the pressure at fixed [[V]].

**Part (b):**

The numerator is obtained by multiplying 253 313 Pa by 0.0150 m³, giving approximately 3799.7 J. The denominator is the product of [[R]] (8.314 J/(mol·K)) and [[T]]₁ (298.15 K), giving approximately 2478.8 J/mol. Dividing numerator by denominator gives [[n]] ≈ 1.533 mol. This amount of N₂ has a mass of approximately 42.9 g (1.533 multiplied by the molar mass of 28 g/mol).

## Dimensional validation

For part (b), [[n]] is the ratio of the product [[P]]·[[V]] to the product [[R]]·[[T]]. Dimensional analysis using Phyxio blue notation:

- Numerator: `[Pa · m³] = [M L⁻¹ T⁻²] · [L³] = [M L² T⁻²] = [J]`
- Denominator: `[J mol⁻¹ K⁻¹ · K] = [J mol⁻¹]`
- Quotient: `[J] / [J mol⁻¹] = [mol]` ✓

## Physical interpretation

Isochoric heating is the process where the **cause is the thermal energy supply** and the **effect is the rise in [[P]]**, with no possibility of expansion. As [[T]] grows from 298 K to 477 K — a factor of 1.6 — the mean kinetic energy of each molecule increases by that same factor. Molecules strike the walls more frequently and with greater impulse, so [[P]] doubles in exactly the same proportion as [[T]]. This direct causal link — more [[T]] means more [[P]] at fixed [[V]] — is the physical core of the ideal gas law in the isochoric regime.

The practical implication is concrete: any sealed container holding gas at a known [[P]] must also withstand the [[P]] it will reach if [[T]] rises in an extreme scenario (fire, intense solar exposure). A vessel rated only for 2.5 atm at 25 °C would be exposed to failure if the internal temperature reached 204 °C.

The calculated 1.53 mol of N₂ (about 42.9 g) enables a second-path validation: the resulting molar volume is 15 L / 1.53 mol ≈ 9.8 L/mol, consistent with the reference value of 22.4 L/mol at 1 atm reduced by the pressure factor of 2.5. If [[n]] were erroneously large or small, this consistency check would fail, flagging the error before any interpretation.

---

# Real-world example

## Context

A meteorologist analyses the variation of [[P]] inside a weather balloon. The balloon ascends from sea level (1 atm, 15 °C) to 10 km altitude (0.265 atm, −50 °C). The interior gas is helium with 0.80 mol. The goal is to estimate how [[V]] of the balloon changes during the ascent, assuming that the balloon membrane maintains the interior [[P]] equal to the exterior [[P]] at all times.

## Physical estimation

The key quantity to estimate is [[V]] of the balloon at each stage of the ascent, with [[n]] fixed (closed membrane) and [[P]] equal to the external pressure. The leaf's core formula is applied directly:

{{f:ley_gas_ideal}}

**Order of magnitude at sea level** ([[P]] of 101 325 Pa, [[T]] of 288 K, [[n]] of 0.80 mol): [[V]] is the ratio of the product [[n]]·[[R]]·[[T]] to [[P]]. The result is [[V]] ≈ 18.9 L — comparable to the volume of a large bag, consistent with a partially inflated weather balloon at launch.

**Quantitative reading at 10 km** ([[P]] of 26 851 Pa, [[T]] of 223 K, [[n]] constant): [[P]] has dropped to 26 % of its sea-level value and [[T]] to 77 %. The new [[V]] ≈ 55.2 L. The **key ratio** is that [[V]] at 10 km is approximately 2.92 times [[V]] at sea level: the drop in [[P]] (factor 3.77) clearly outweighs the decrease in [[T]] (factor 0.77), producing a net expansion to nearly three times the original volume.

## Interpretation

The expansion of the balloon during ascent is driven by two simultaneous effects acting in opposite directions: the decrease in external [[P]] (which tends to expand the balloon) and the decrease in [[T]] (which tends to contract it). The net factor of 2.92 results from combining the pressure drop (factor P₁/P₂ ≈ 3.77) with the temperature drop (factor T₂/T₁ ≈ 0.774). The pressure effect clearly dominates over the temperature effect in this case.

This estimate is critical for the design of the balloon membrane: it must be able to accommodate nearly three times its initial volume without losing airtightness or mechanical integrity. If the balloon is designed with a maximum volume smaller than calculated, it will burst before reaching the target altitude. Real weather balloons are indeed only partially inflated at sea level, precisely to provide this expansion capacity during ascent.
