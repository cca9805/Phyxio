# Efficiency and Performance

## Conceptual context

Every heat engine absorbs heat from a hot reservoir, converts part of that heat into mechanical work, and rejects the remainder to a cold reservoir. **Thermal efficiency** measures what fraction of the absorbed thermal energy is transformed into useful work. It is the central metric of any engine cycle: two machines may run on the same fuel, yet if their efficiencies differ they produce very different amounts of work per unit of energy consumed.

The need to define and quantify this efficiency arises from a fundamental limitation: the second law of thermodynamics requires that no cycle can convert heat entirely into work. There is always a residual heat that must be rejected to the cold reservoir. Efficiency not only measures the performance of a specific machine; it also allows any real engine to be compared against the theoretical limit that Carnot established in the early nineteenth century.

Understanding efficiency is essential to evaluate internal combustion engines, steam turbines, cogeneration cycles, and any system that converts chemical or thermal energy into mechanical or electrical work.

## 🟢 Essential level

The **efficiency** of a heat engine answers a very direct question: of all the heat entering the engine, how much leaves as useful work? If an engine absorbs 100 J and delivers 35 J of work, its efficiency is 0.35, that is, 35%.

This value always lies between zero and one. An efficiency of zero would mean all the heat is wasted without producing work; an efficiency of one would require converting heat entirely into work, which the second law of thermodynamics absolutely forbids.

The key intuition is that **part of the heat always escapes** to the cold reservoir. Not because the engine is defective, but because physics demands it. Improving efficiency means reducing that rejected heat [[Q_C]] by bringing the cycle closer to the reversible ideal, not simply building the engine with more resistant materials.

Efficiency [[eta]] and absorbed heat [[Q_H]] are the two fundamental magnitudes of this leaf. Their difference gives the rejected heat [[Q_C]], and their ratio defines the actual efficiency of the cycle.

## 🔵 Formal level

The operational definition of thermal efficiency is expressed as the ratio of net useful work to heat absorbed from the hot reservoir:

{{f:rendimiento_termico}}

Applying the first law of thermodynamics to the complete cycle, net work is the difference between the two exchanged heats:

{{f:balance_termico}}

Combining both relations yields a second equivalent form of efficiency that directly relates the two heat exchanges:

{{f:rendimiento_calores}}

This third expression is particularly useful because it allows [[eta]] to be calculated directly from [[Q_H]] and [[Q_C]], without needing to know [[W_util]] separately. It also reveals that **increasing efficiency is equivalent to reducing the ratio [[Q_C]]/[[Q_H]]**, that is, reducing the fraction of heat wasted relative to the heat absorbed.

For the Carnot cycle, that ratio coincides exactly with the ratio of absolute temperatures of the reservoirs. In any real cycle with irreversibilities, the ratio [[Q_C]]/[[Q_H]] is always greater than the temperature ratio, which explains why real [[eta]] is always lower than [[eta_Carnot]].

The Carnot limit would only be reached with a completely reversible cycle; any friction, finite-gradient heat transfer, or irreversible mixing increases the rejected heat and reduces efficiency below that theoretical bound.

## 🔴 Structural level

The expression of efficiency in terms of heats conceals an important thermodynamic depth: **the second law imposes an irreducible minimum for [[Q_C]]**. Even in the ideal cycle, [[Q_C]] cannot be eliminated unless the cold reservoir is at 0 K, a temperature nature does not offer. This means efficiency never reaches unity under physically realizable conditions.

The gap between real [[eta]] and [[eta_Carnot]] can be conceptually decomposed into two categories of irreversibilities. The first category encompasses external irreversibilities: heat transfer with finite temperature difference between the working fluid and the reservoirs (the larger the difference, the greater the irreversibility). The second includes internal irreversibilities: fluid friction, turbulence, mixing of gases at different pressures, leakage through valves.

Each source of irreversibility adds an entropy increment to the working fluid, and at the end of the cycle that extra entropy increment must be compensated by rejecting more heat to the cold reservoir. The result is a [[Q_C]] larger than the thermodynamic minimum, and therefore an [[eta]] lower than the Carnot limit.

From the T-s diagram perspective, efficiency can be read geometrically: the area enclosed by the cycle represents [[W_util]]; the total area under the cycle down to the zero-entropy axis represents [[Q_H]]; the ratio of the two is [[eta]]. A perfect-rectangle cycle (Carnot) maximizes the interior-area-to-total-area ratio for given temperatures. Any distortion of that rectangle reduces the ratio.

The dependence of [[eta_Carnot]] on absolute temperatures imposes a clear design strategy: **raising the hot-reservoir temperature** or **lowering the cold-reservoir temperature** are the two paths to increasing the theoretical limit. High-temperature materials in advanced turbines or condenser cooling systems in thermal power plants respond exactly to this logic.

A direct practical consequence is that engines with high compression ratios achieve higher combustion temperatures, raising [[eta_Carnot]] and, if irreversibilities do not increase proportionally, also improving real [[eta]]. However, this improvement is bounded by the mechanical and thermal resistance of materials, introducing a design trade-off between thermodynamic efficiency and structural durability.

## Deep physical interpretation

Efficiency is not a property of the working fluid but of the **cycle** that fluid undergoes. Two machines with the same fluid can have very different efficiencies if they operate between different reservoirs or with different irreversibilities. This dependence of efficiency on the cycle rather than the fluid is a direct consequence of the second law.

A fine reading of efficiency requires distinguishing between its instantaneous value (at an instant of the cycle) and its average value over a complete cycle. The efficiency defined as [[eta]] is always the value integrated over a complete cycle, not a local value. In a piston engine, work is generated mainly during expansion, but the complete cycle includes compression phases that consume work; only the net difference counts for [[eta]].

Another subtlety is that [[eta]] and power are independent: a very efficient engine can be slow (low power) if the cycle takes a long time to complete. Jointly maximizing efficiency and power requires optimizing cycle speed, which in practice leads to trade-offs between maximum efficiency (infinitely slow cycle) and maximum power (fast cycle with greater irreversibilities).

## Order of magnitude

Gasoline car engines operate with efficiencies between 0.25 and 0.35; modern diesel engines reach up to 0.45. Steam turbines in large power plants approach 0.40–0.50. Combined cycles (gas turbine plus steam cycle) exceed 0.60 in advanced installations.

The Carnot limit for a combustion engine with a flame temperature of 1500 K and ambient temperature of 300 K would be approximately 0.80. The gap between that limit and real efficiencies (0.40–0.60) reflects unavoidable irreversibilities: heat transfer with gradients, mechanical friction, irreversible valve opening, and heat losses through walls.

A result indicating [[eta]] above 0.80 with ordinary reservoirs should be considered physically suspect; verify that temperatures were expressed in kelvin correctly.

## Personalized resolution method

To calculate the efficiency of a real heat engine, follow this sequence:

1. **Identify available data**: are [[Q_H]] and [[W_util]] known directly? Or are [[Q_H]] and [[Q_C]] known? Or the reservoir temperatures for the Carnot limit?
2. **If [[Q_H]] and [[W_util]] are known**: apply the direct definition of [[eta]] as their ratio.
3. **If [[Q_H]] and [[Q_C]] are known**: apply the equivalent formula with heats and verify that [[Q_C]] is less than [[Q_H]].
4. **Verify coherence**: check that [[eta]] lies in the open interval (0, 1) and that the balance of [[W_util]] plus [[Q_C]] reproduces [[Q_H]].
5. **Compare with the Carnot limit**: if reservoir temperatures are known, calculate [[eta_Carnot]] with temperatures in kelvin and confirm that real [[eta]] is lower.

The most common error signal is obtaining [[eta]] greater than 1 or negative, which always indicates a sign error or swapped data.

## Special cases and extended example

**Cycle with high irreversibility**: An old engine with high friction may have [[eta]] of 0.20 even though its reservoirs would allow [[eta_Carnot]] of 0.65. The 45% gap is potential work destroyed by irreversibilities; real [[Q_C]] far exceeds the thermodynamic minimum.

**Cogeneration cycle**: When [[Q_C]] is exploited for heating, global system efficiency can exceed 0.80 even though electrical [[eta]] remains 0.40. Distinguishing electrical efficiency from global cogeneration efficiency is fundamental in energy analysis.

## Real student questions

**Why can't an engine with 100% [[eta]] be built?** It would require a cold reservoir at 0 K or complete elimination of [[Q_C]], contradicting the second law. Even a perfectly reversible cycle must reject heat to the cold reservoir so the working fluid can return to its initial state.

**Does improving materials improve [[eta]]?** More heat-resistant materials allow higher hot-reservoir temperatures, raising [[eta_Carnot]] and in principle real [[eta]]. However, they do not reduce internal thermodynamic irreversibilities; they only widen the operating margin.

**Why use kelvin and not Celsius for [[eta_Carnot]]?** Because [[eta_Carnot]] is a ratio of absolute temperatures. An engine between 100 °C and 0 °C gives zero [[eta_Carnot]] in Celsius but 0.268 in kelvin, which is the physically correct result.

## Cross-cutting connections and study paths

Efficiency is directly linked to the Carnot cycle, which establishes its absolute upper bound for reservoirs at fixed temperature. Understanding [[eta_Carnot]] requires prior work on reversible cycles and entropy as a state function. Consult the [Carnot cycle](leaf:fisica-clasica/termodinamica/maquinas-termicas/ciclos-termodinamicos/carnot) leaf for the formal development of the theoretical limit.

Real cycles—Otto, Diesel, Brayton-Rankine—have specific efficiency expressions in terms of their geometric parameters (compression ratio, cut-off ratio) that are derived from the general formula of this leaf. The efficiency developed here is the general framework of which specific cycle efficiencies are particular cases.

The second law of thermodynamics and the concept of entropy are the deep theoretical foundation of efficiency. Refrigerators and heat pumps are the inverse application: instead of producing work from heat, they consume work to transfer heat against its natural direction. The coefficient of performance of those devices is the conceptual reciprocal of engine efficiency.

## Final synthesis

The efficiency [[eta]] of a heat engine quantifies the fraction of absorbed heat [[Q_H]] converted into useful work [[W_util]], with the residual heat [[Q_C]] as a loss imposed by the second law. Its value always lies between zero and one, and can never exceed the Carnot limit for the same reservoirs. Reducing cycle irreversibilities is the only path to bring real efficiency closer to that theoretical maximum.
