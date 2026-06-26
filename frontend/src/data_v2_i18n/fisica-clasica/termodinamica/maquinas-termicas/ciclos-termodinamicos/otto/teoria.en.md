# Theory — Otto Cycle

## Conceptual context

The Otto cycle is the idealized thermodynamic model describing the operation of spark-ignition engines, commonly known as gasoline engines. The central problem it solves is determining what fraction of the thermal energy released during combustion can be converted into useful mechanical work, and how that fraction depends exclusively on cylinder geometry (compression ratio) and gas properties (adiabatic index). The Otto cycle is the simplest of all power cycles because its efficiency does not depend on the amount of heat supplied, which fundamentally differentiates it from Diesel.

## 🟢 Essential level

The Otto cycle consists of four processes: adiabatic compression of the gas, heat addition at constant volume (simulating instantaneous combustion of the air-fuel mixture), adiabatic expansion producing work, and heat rejection at constant volume (simulating exhaust).

The thermal efficiency [[eta_O]] depends exclusively on two parameters: the compression ratio [[r]] and the adiabatic index [[gamma]]. Unlike the Diesel cycle, Otto efficiency does not depend on the amount of heat supplied [[Q_H]]. Higher [[r]] means higher efficiency, but with diminishing marginal returns. Higher [[gamma]] means higher efficiency because the adiabats are steeper and the cycle approaches Carnot more closely.

As [[r]] increases, the fraction of [[Q_H]] converted into [[W_neto]] grows and the fraction rejected as [[Q_C]] decreases. The practical limit of [[r]] in gasoline engines (8 to 12) is imposed by premature fuel detonation, not by thermodynamics. Net work [[W_neto]] is always the difference between [[Q_H]] and [[Q_C]], and efficiency is always the ratio of [[W_neto]] to [[Q_H]].

## 🔵 Formal level

The thermal efficiency of the Otto cycle is defined as the fraction of absorbed heat [[Q_H]] converted into net work [[W_neto]]:

{{f:rendimiento_alternativo_otto}}

The explicit efficiency formula is:

{{f:rendimiento_otto}}

The energy balance of the cycle is:

{{f:balance_energetico_otto}}

The power of the Otto cycle analysis lies in the fact that efficiency depends on a single geometric parameter: the compression ratio [[r]]. The exponent [[gamma]] minus one amplifies the effect of [[r]]: with [[gamma]] of 1.4, the compression factor one divided by [[r]] raised to 0.4 drops rapidly as [[r]] increases, producing an efficiency that grows with negative concavity.

The model validity conditions are four. First, the gas must behave as ideal with constant properties. Second, the compression and expansion processes must be adiabatic and reversible. Third, combustion must be instantaneous at constant volume. Fourth, heat rejection must be isochoric, equivalent to instantaneous closing of exhaust valves.

In practice, none of these conditions is exactly met. The variation of [[gamma]] with temperature (from 1.4 in cold air to 1.3 in hot combustion gases) reduces the actual efficiency. Heat transfer losses to cylinder walls, piston friction, and non-instantaneous combustion further reduce efficiency.

The derivative of efficiency with respect to [[r]] is always positive but decreasing, confirming the negative concavity of the curve. For [[gamma]] of 1.4, the derivative at [[r]] of 8 is approximately 0.022 per unit of [[r]], while at [[r]] of 12 it drops to 0.012, nearly half. This sensitivity analysis quantifies the marginal benefit of increasing the compression ratio and justifies the search for higher-octane fuels that allow operation at higher [[r]].

The ratio between Otto efficiency and Carnot efficiency between the same extreme cycle temperatures quantifies the irreversibility of the isochoric combustion process. For [[r]] of 10, the Otto efficiency of 0.602 is approximately 86 % of the equivalent Carnot between the maximum and minimum cycle temperatures, showing that constant-volume combustion makes reasonably good use of the available thermodynamic potential.

## 🔴 Structural level

A deep structural aspect is the **comparison with Carnot**: the Otto cycle between the same extreme temperatures has lower efficiency than Carnot because heat is absorbed and rejected at constant volume (with varying temperature) instead of isothermally. The difference quantifies the intrinsic irreversibility of the Otto combustion mode. The Gouy-Stodola theorem states that work loss is proportional to the entropy generated during non-isothermal combustion, multiplied by the cold reservoir temperature.

The most restrictive validity condition of the cold-air standard model is the constancy of [[gamma]]. In a real engine, [[gamma]] varies continuously throughout the cycle: it is 1.4 at the start of compression with cold air, drops to 1.35 at the end of compression due to heating, and falls to 1.28-1.30 during combustion due to the presence of products such as carbon dioxide and water vapor. Using an effective average [[gamma]] of 1.3 instead of 1.4 reduces theoretical efficiency from 0.602 to 0.499 for [[r]] of 10, a 17 % correction that is fundamental for engineering estimates.

Another structural limitation is the assumption of instantaneous combustion. In real engines at 6000 rpm, each cycle lasts 20 milliseconds and combustion occupies 2 to 4 milliseconds. During this time, the piston moves significantly, invalidating the isochoric assumption and reducing useful work. The dual or mixed cycle corrects this limitation by combining an isochoric phase with an isobaric combustion phase.

## Deep physical interpretation

The Otto cycle efficiency has an immediate physical reading: for a compression ratio of 10 with air ([[gamma]] of 1.4), the efficiency is approximately 0.602, meaning 60.2 % of the injected thermal energy is converted into mechanical work and the remaining 39.8 % is obligatorily dissipated to the cold reservoir. If [[r]] is increased to 12, efficiency rises to 0.630, a modest increment illustrating diminishing returns at high compression.

The sensitivity to the adiabatic index [[gamma]] is significant: with cold air (1.4) the efficiency for [[r]] of 10 is 0.602, but with hot combustion gases (1.3) it drops to 0.499, a difference of more than 10 percentage points that simplified models often ignore.

The independence of efficiency from [[Q_H]] has a deep thermodynamic explanation: in the Otto cycle, both combustion and exhaust are isochoric, so an increase in [[Q_H]] proportionally raises temperatures in both processes. The fraction of heat converted to work is determined solely by the volume difference between extreme cycle states, that is, by the geometric compression ratio.

## Order of magnitude

A car gasoline engine with [[r]] of 10 has a theoretical efficiency of 0.602. The actual efficiency of a modern direct-injection gasoline engine is between 0.30 and 0.38, representing 50 to 63 % of the theoretical value. The main losses come from non-instantaneous combustion (5 %), heat transfer (10 %), mechanical friction (5 %), and gas pumping (3 %).

## Personalized resolution method

To solve an Otto cycle problem the following steps are recommended. First, identify [[r]] and [[gamma]] from the problem statement. Second, apply the Otto efficiency formula to obtain [[eta_O]]. Third, if [[Q_H]] is known, calculate [[W_neto]] using the efficiency. Fourth, obtain [[Q_C]] by energy balance. Fifth, verify that [[eta_O]] is less than the Carnot efficiency between the extreme temperatures of the cycle.

## Special cases and extended example

Special case one: if [[r]] approaches one, efficiency approaches zero because there is no compression and the cycle degenerates. Special case two: if [[r]] approaches infinity, [[eta_O]] approaches one, but this is unattainable due to material and thermodynamic limitations. Special case three: if [[gamma]] approaches one, efficiency approaches zero for any [[r]], but this limit has no real physical meaning.

Extended example: an engine operates with [[r]] of 10 and [[gamma]] of 1.4. The Otto efficiency is one minus one divided by 10 raised to 0.4. Calculating 10 raised to 0.4 gives 2.512. The compression factor is one divided by 2.512 which is 0.3981. The efficiency is one minus 0.3981, that is 0.6019 or 60.2 %. If [[Q_H]] is 1000 kJ/kg, [[W_neto]] is 602 kJ/kg and [[Q_C]] is 398 kJ/kg.

## Real student questions

Question one: why does Otto efficiency not depend on [[Q_H]]? Because both heat exchange processes occur at constant volume. Temperature rises proportionally to [[Q_H]] both during combustion and exhaust, and the fraction converted to work depends only on the prior compression.

Question two: why do gasoline engines not use higher compression ratios? Because at compression ratios above 12, the air-gasoline mixture self-ignites by compression before the spark fires (detonation or knocking), causing mechanical damage and efficiency losses.

Question three: can an Otto engine exceed Carnot efficiency? Never. Carnot between the extreme cycle temperatures will always be higher. The difference measures the irreversibilities of the isochoric combustion mode.

## Cross-cutting connections and study paths

The Otto cycle connects backward to the Carnot cycle (theoretical upper limit) and forward to the Diesel cycle (which generalizes combustion to constant pressure by introducing the cutoff ratio). The dual or mixed cycle combines constant-volume and constant-pressure combustion to better represent real engines. Laterally, the relationship with the second law and entropy production allows quantifying the losses associated with non-isothermal combustion.

## Final synthesis

The Otto cycle establishes the maximum theoretical efficiency of spark-ignition engines as a function of two parameters: the compression ratio and the adiabatic index. Its formula is the simplest among all power cycles because efficiency does not depend on the amount of heat supplied. The compression ratio is the only design parameter controlling efficiency, and its practical limit is imposed by fuel detonation, not by thermodynamics.
