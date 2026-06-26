# Exam-type example

## Problem statement

A cylinder with a movable piston contains 2.00 mol of gaseous oxygen (O₂) at 27.0 °C and 1.50 atm. The gas is compressed isochorically until the pressure reaches 3.00 atm, and then expanded isothermally back to the original volume. (a) Calculate the initial volume of the gas. (b) Determine the temperature at the end of the isochoric compression. (c) Calculate the volume of the gas at the end of the isothermal expansion.

## Data

- Amount of substance ([[n]]): 2.00 mol
- Initial temperature ([[T]]₁): 300.15 K (27.0 °C)
- Initial pressure ([[P]]₁): 151 988 Pa (1.50 atm)
- Pressure after isochoric compression ([[P]]₂): 303 975 Pa (3.00 atm)
- Universal gas constant ([[R]]): 8.314 J/(mol·K)
- Process 1→2: isochoric ([[V]] constant)
- Process 2→3: isothermal ([[T]] constant)
- Final state: volume equal to the initial volume

## System definition

System: the mass of O₂ enclosed in the cylinder (closed system, [[n]] = 2.00 mol constant throughout). The piston allows [[V]] changes in the second stage, but is locked in the first stage to keep [[V]] fixed.

## Physical model

The **ideal gas law** is applied to each state.

{{f:ley_gas_ideal}}

- Stage 1→2 (isochoric, [[V]] and [[n]] constant): the ratio [[P]]/[[T]] is conserved.
- Stage 2→3 (isothermal, [[T]] and [[n]] constant): the product [[P]]·[[V]] is conserved.

## Model justification

Oxygen at 1.5–3 atm and temperatures above 300 K is far from its critical temperature (154 K) and condensation point. The compressibility factor of O₂ under these conditions is Z ≈ 0.999, a deviation of less than 0.1 %: the ideal gas model is fully valid.

## Symbolic solution

{{f:ley_gas_ideal}}

**Part (a):** [[V]]₁ is the quotient of the product [[n]]·[[R]]·[[T]]₁ by [[P]]₁. A larger [[n]] or [[T]] gives a larger [[V]]; a larger [[P]] gives a smaller [[V]].

**Part (b):** With [[V]] and [[n]] constant, Gay-Lussac's law requires [[T]]₂ to be proportional to [[T]]₁ and to the pressure ratio [[P]]₂/[[P]]₁. Doubling [[P]] doubles [[T]].

**Part (c):** With [[T]] and [[n]] constant, Boyle's law requires the product [[P]]·[[V]] to be conserved. At the end of the expansion with [[V]]₃ = [[V]]₁, the system recovers the same volume as the initial state, though [[P]] and [[T]] differ from their initial values.

## Numerical substitution

**Part (a):**

The product [[n]]·[[R]]·[[T]]₁ equals 2.00 × 8.314 × 300.15 ≈ 4990 J. Dividing by [[P]]₁ = 151 988 Pa gives [[V]]₁ ≈ 0.03283 m³, equivalent to 32.83 L.

**Part (b):**

The pressure ratio is 3.00/1.50 = 2.00. The final temperature of the isochoric compression is [[T]]₂ = 300.15 × 2.00 ≈ 600.3 K (equivalent to 327.2 °C). Doubling [[P]] at fixed [[V]] exactly doubles [[T]].

**Part (c):**

During the isothermal expansion ([[T]]₂ = 600.3 K, [[n]] = 2.00 mol) back to the initial volume [[V]]₁ = 0.03283 m³: the final pressure of this stage is [[P]]₃ = [[n]]·[[R]]·[[T]]₂/[[V]]₁ = 2.00 × 8.314 × 600.3 / 0.03283 ≈ 303 980 Pa ≈ 3.00 atm. The final state is ([[P]]₃ ≈ 3 atm, [[V]]₃ = [[V]]₁, [[T]]₃ = [[T]]₂ ≈ 600 K): different from the initial state in [[T]] and [[P]], but equal in [[V]].

## Dimensional validation

For part (a), [[V]] is the quotient of the product [[n]]·[[R]]·[[T]] by [[P]]:

- Numerator: `[mol] · [J mol⁻¹ K⁻¹] · [K] = [J] = [Pa · m³]`
- Denominator: `[Pa]`
- Quotient: `[Pa · m³] / [Pa] = [m³]` ✓

## Physical interpretation

The isochoric process (1→2) is a heating at fixed volume: the thermal energy supplied increases the mean molecular speed and thus the frequency and intensity of collisions with the walls; [[P]] doubles at exactly the same rate as [[T]]. There is no mechanical work in this stage because the piston does not move.

The isothermal expansion (2→3) keeps temperature constant through heat exchange with the surroundings. As the piston advances, the gas occupies more space and molecular collisions are spread over a larger area: [[P]] decreases. The product [[P]]·[[V]] remains constant because the mean kinetic energy per molecule — fixed by [[T]] — does not change. The final state has the same [[V]] as state 1, but [[T]] and [[P]] are twice their initial values.

The complete cycle illustrates that process history matters: although [[V]] returns to its initial value, the gas does not return to the original thermodynamic state because [[T]] and [[P]] have changed. A third stage returning [[T]] and [[P]] to their starting values would be needed to fully recover the initial state.

---

# Real-world example

## Context

A weather balloon is launched from ground level (external pressure 1 atm, temperature 15 °C) carrying 3.50 mol of helium. On reaching 8 km altitude, the external pressure drops to 0.351 atm and the temperature to −35 °C. The membrane always keeps the internal [[P]] equal to the external pressure. The aim is to estimate the volume of the balloon at sea level and at 8 km altitude, and to verify whether the ideal gas law is applicable.

## Physical estimation

The key quantity to estimate is [[V]] at each stage, with [[n]] = 3.50 mol fixed (sealed membrane) and [[P]] equal to the external pressure at each altitude.

{{f:ley_gas_ideal}}

**At sea level** ([[P]] = 101 325 Pa, [[T]] = 288 K, [[n]] = 3.50 mol):

[[V]] is the quotient of the product [[n]]·[[R]]·[[T]] by [[P]]. The result is [[V]] ≈ 0.0826 m³, equivalent to 82.6 L — the size of a partially inflated balloon, consistent with a typical launch.

**At 8 km** ([[P]] = 35 565 Pa, [[T]] = 238 K, [[n]] = 3.50 mol):

[[V]] ≈ 0.219 m³, equivalent to 219 L. The **expansion factor** is 219/82.6 ≈ 2.65: the balloon expands to 2.65 times its initial volume. The drop in [[P]] (factor P₁/P₂ ≈ 2.85) dominates over the drop in [[T]] (factor T₂/T₁ ≈ 0.826), producing a net expansion.

## Interpretation

The balloon's expansion on ascent results from the competition between two effects: the drop in external [[P]] (which tends to expand the balloon) and the drop in [[T]] (which tends to contract it). The net factor of 2.65 reflects that the pressure decrease is the dominant effect. Weather balloons are deliberately inflated only partially at launch to provide this expansion capacity without the risk of bursting before reaching the target altitude.

Helium under these conditions (maximum 1 atm, minimum temperature 238 K) is far from its critical temperature (5.2 K), so Z ≈ 1.000: the ideal gas law is an excellent approximation for this calculation.
