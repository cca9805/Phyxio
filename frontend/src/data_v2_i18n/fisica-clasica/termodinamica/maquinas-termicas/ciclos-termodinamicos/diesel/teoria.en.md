# Diesel Cycle

## Conceptual context

The Diesel cycle is the idealized thermodynamic model describing the operation of compression-ignition engines. Unlike the Otto cycle, where combustion is modeled at constant volume, in the Diesel cycle heat addition occurs at constant pressure. This difference has profound consequences: it allows much higher compression ratios and enables the use of denser fuels, but it introduces an efficiency penalty factor that depends on the duration of combustion.

This leaf sits within the thermodynamic cycles block because it extends the Otto cycle analysis framework by incorporating an additional parameter, the cutoff ratio, which quantifies the fraction of volume during which heat is injected. Understanding the Diesel cycle is essential for evaluating truck engines, locomotives, ships, and industrial generators.

## 🟢 Essential level

A Diesel engine works by compressing air until it reaches a temperature so high that the injected fuel ignites spontaneously, without the need for a spark plug. The idealized cycle consists of four processes: adiabatic compression, heat addition at constant pressure, adiabatic expansion, and heat rejection at constant volume. The thermal efficiency measures what fraction of the energy injected as heat is converted into useful mechanical work.

The key difference from the Otto cycle is that combustion occurs while the piston moves, at constant pressure, which increases the gas volume during heat injection. This introduces the cutoff ratio [[r_c]], which measures how much the gas expands during combustion. The higher [[r_c]], the more heat is injected but the more efficiency degrades. Efficiency also increases with the compression ratio [[r]], but with diminishing marginal returns just as in the Otto cycle.

## 🔵 Formal level

The ideal Diesel cycle consists of four reversible processes: an adiabatic compression from 1 to 2 that raises the pressure and temperature of the air, an isobaric expansion from 2 to 3 where [[Q_H]] is absorbed at constant pressure, an adiabatic expansion from 3 to 4 that produces most of the work, and an isochoric process from 4 to 1 where [[Q_C]] is rejected to the cold reservoir.

The central efficiency formula is:

{{f:rendimiento_diesel}}

This expression shows that [[eta_D]] depends on three parameters: [[r]], [[r_c]], and [[gamma]]. The bracketed factor in the formula is always greater than one for [[r_c]] greater than one, meaning that Diesel efficiency is always lower than Otto for the same [[r]]. However, Diesel engines can operate with much higher [[r]] (14 to 25 versus 8 to 12 in Otto), which more than compensates for this penalty.

The energy balance of the cycle is:

{{f:balance_energetico_diesel}}

And the efficiency can also be expressed as a direct energy ratio:

{{f:rendimiento_alternativo_diesel}}

When [[r_c]] approaches one, the penalty factor also approaches one and the formula reduces exactly to the Otto cycle formula: [[eta_D]] becomes one minus one divided by [[r]] raised to [[gamma]] minus one. This confirms that Otto is a special case of Diesel with instantaneous combustion.

## 🔴 Structural level

The power of the Diesel cycle analysis lies in separating the effects of compression (controlled by [[r]]) and combustion duration (controlled by [[r_c]]). Efficiency increases with [[r]] because adiabatic compression raises the temperature before combustion, improving the thermodynamic quality of the supplied heat. But efficiency decreases with [[r_c]] because prolonged combustion degrades the uniformity of the process and generates more entropy.

The model validity conditions are four. First, the gas must behave as ideal with constant properties. Second, the compression and expansion processes must be adiabatic and reversible. Third, combustion must occur strictly at constant pressure. Fourth, heat rejection must be isochoric, equivalent to instantaneous closing of exhaust valves.

In practice, none of these conditions is exactly met. The variation of [[gamma]] with temperature (from 1.4 in cold air to 1.3 in hot combustion gases) reduces the actual efficiency. Heat transfer losses to cylinder walls, piston friction, and incomplete combustion further reduce efficiency.

A deep structural aspect is the **comparison with Carnot**: the Diesel cycle between the same extreme temperatures has lower efficiency than Carnot because heat is absorbed at constant pressure (with varying temperature) instead of isothermally. The difference quantifies the intrinsic irreversibility of the Diesel combustion mode. The Gouy-Stodola theorem states that work loss is proportional to the entropy generated during non-isothermal combustion, multiplied by the cold reservoir temperature.

## Deep physical interpretation

The Diesel cycle efficiency has an immediate physical reading: for a compression ratio of 18 and a cutoff ratio of 2 with air ([[gamma]] of 1.4), the efficiency is approximately 0.60, meaning 60 % of the injected thermal energy is converted into mechanical work and the remaining 40 % is obligatorily dissipated to the cold reservoir. If [[r_c]] is increased to 3 (more fuel injected), efficiency drops to approximately 0.54, showing that injecting more heat does not always improve net power per unit of supplied energy.

The sensitivity to the adiabatic index [[gamma]] is significant: with cold air (1.4) the efficiency for [[r]] of 18 and [[r_c]] of 2 is 0.60, but with hot combustion gases (1.3) it drops to 0.53, a 12 % difference that simplified models often ignore.

## Order of magnitude

A truck Diesel engine with [[r]] of 18 and [[r_c]] of 2.5 has a theoretical efficiency of 0.57. The actual efficiency of a modern direct-injection Diesel engine is between 0.40 and 0.45, representing 70 to 79 % of the theoretical value. The main losses come from heat transfer (8 %), mechanical friction (5 %), and incomplete combustion (3 %).

## Personalized resolution method

To solve a Diesel cycle problem the following steps are recommended. First, identify [[r]], [[r_c]], and [[gamma]] from the problem statement. Second, apply the Diesel efficiency formula to obtain [[eta_D]]. Third, if [[Q_H]] is known, calculate [[W_neto]] using the efficiency. Fourth, obtain [[Q_C]] by energy balance. Fifth, verify that [[eta_D]] is less than the Carnot efficiency between the extreme temperatures of the cycle.

## Special cases and extended example

Special case one: if [[r_c]] approaches one, the penalty factor approaches one and the cycle reduces to Otto. Special case two: if [[r_c]] approaches [[r]], combustion occupies all available volume and efficiency drops drastically. Special case three: if [[gamma]] approaches one, all efficiency curves flatten and the difference between Diesel and Otto disappears, but this limit has no real physical meaning.

Extended example: an industrial engine operates with [[r]] of 20, [[r_c]] of 2, and [[gamma]] of 1.4. The Diesel efficiency is one minus one divided by 20 raised to 0.4 multiplied by the factor (2 raised to 1.4 minus 1) divided by (1.4 times (2 minus 1)). The compression factor gives one divided by 3.314 which is 0.3018. The cutoff factor gives (2.639 minus 1) divided by 1.4, which is 1.171. The product is 0.3018 times 1.171 giving 0.3534. The efficiency is one minus 0.3534, that is 0.647 or 64.7 %.

## Real student questions

Question one: if Diesel has worse efficiency than Otto at the same compression ratio, why is it used? Because Diesel engines can use much higher compression ratios (18 to 25 versus 8 to 12) without detonation, which more than compensates for the cutoff factor penalty.

Question two: how is [[r_c]] approaching one interpreted? It means combustion would be instantaneous, without isobaric expansion, turning the Diesel into an Otto. It is the minimum fuel limit.

Question three: can a Diesel engine exceed Carnot efficiency? Never. Carnot between the extreme cycle temperatures will always be higher. The difference measures the irreversibilities of the isobaric combustion mode.

## Cross-cutting connections and study paths

The Diesel cycle connects backward to the Otto cycle (special case with [[r_c]] equal to one) and to the Carnot cycle (theoretical upper limit). It connects forward to the dual or mixed cycle, which combines constant-volume and constant-pressure combustion to better represent real engines. Laterally, the relationship with the second law and entropy production allows quantifying the losses associated with non-isothermal combustion.

## Final synthesis

The Diesel cycle establishes the maximum theoretical efficiency of compression-ignition engines as a function of three parameters: the compression ratio, the cutoff ratio, and the adiabatic index. Its efficiency is always lower than Otto for the same compression ratio, but the ability to operate with much higher compression ratios makes Diesel engines globally more efficient in practice. The cutoff ratio quantifies the combustion duration and constitutes the exclusive penalty factor of the Diesel cycle.
