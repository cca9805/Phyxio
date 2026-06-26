# Theory — Practical Examples

## Conceptual context

Practical examples of refrigerators and heat pumps connect theoretical thermodynamic principles with the design and operation of real systems. The central problem is determining how much electrical power a compressor needs to maintain a space at a desired temperature, how much heat the system can extract or deliver, and how its measured efficiency compares with the Carnot theoretical limit. This connection between theory and practice is essential for system sizing, energy cost estimation and design quality evaluation.

## 🟢 Essential level

A domestic refrigerator extracts heat [[Q_C]] from the cold interior and delivers it to the warm environment by consuming electrical power [[W_comp]] in the compressor. The [[COP_real]] indicates how many units of heat are extracted per unit of power consumed. A typical refrigerator has a [[COP_real]] between 2 and 4, meaning that for each watt of electricity consumed, 2 to 4 watts of heat are extracted from the interior.

A heat pump does the same but with the opposite objective: it extracts heat from the cold exterior and delivers it to a building interior. Its [[COP_real]] measures how many units of heat are delivered to the heated space per unit of power. Geothermal heat pumps achieve [[COP_real]] of 3.5 to 5, converting each watt of electricity into 3.5 to 5 watts of heating.

The [[COP_Carnot]] establishes the absolute efficiency ceiling. No real system reaches it. The Carnot fraction [[eta_Carnot]] measures what percentage of the theoretical limit the system achieves, typically 30 to 60 %.

## 🔵 Formal level

The definition of real refrigeration COP is:

{{f:cop_real_refrigeracion}}

For a heat pump, the real COP definition is:

{{f:cop_real_bomba_calor}}

The reference Carnot COP for refrigeration is calculated as:

{{f:cop_carnot_referencia}}

The Carnot fraction quantifies the relative efficiency of the real system:

{{f:fraccion_carnot}}

The steady-state energy balance establishes that the heat delivered to the hot reservoir [[Q_H]] always exceeds the heat extracted from the cold reservoir [[Q_C]] by exactly the compressor power [[W_comp]]:

{{f:balance_energetico_practico}}

The energy consumption over an operating period is obtained by multiplying power by the operating time:

{{f:consumo_energetico}}

For a domestic refrigerator with [[T_C]] of 258 K and [[T_H]] of 308 K, the [[COP_Carnot]] is 5.16. With a [[COP_real]] of 2.5 (Carnot fraction of 48 %), a compressor power [[W_comp]] of 150 W produces a cooling capacity [[Q_C]] of 375 W and a heat rejection [[Q_H]] of 525 W.

## 🔴 Structural level

The efficiency of real systems degrades from the Carnot ideal due to multiple sources of irreversibility. Real compression is not isentropic: the compressor isentropic efficiency ranges from 0.70 to 0.85, which increases [[W_comp]] and reduces [[COP_real]]. Expansion through the throttling valve is isenthalpic rather than isentropic, generating additional entropy. Heat exchangers operate with finite temperature differences of 5 to 15 K between the refrigerant and the reservoirs, shifting the effective temperatures away from the nominal values of [[T_C]] and [[T_H]].

The structural connection between [[COP_real]], [[COP_Carnot]] and [[eta_Carnot]] reveals that improving efficiency requires acting on multiple fronts simultaneously: reducing compressor losses, minimizing temperature differences in heat exchangers and optimizing the refrigerant thermodynamic cycle.

## Deep physical interpretation

The [[COP_real]] is not a system constant but a function of operating conditions. As [[T_C]] moves away from [[T_H]], both [[COP_Carnot]] and [[COP_real]] decrease because the thermal gap the compressor must overcome increases. Physically, this means that refrigerating at lower temperatures costs progressively more energy, and heating from colder sources is also more expensive.

The Carnot fraction [[eta_Carnot]] captures the thermodynamic quality of the design. A system with high Carnot fraction is well designed and operates close to its physical limits. A system with low Carnot fraction has significant room for improvement, whether in the compressor, heat exchangers or refrigerant.

## Order of magnitude

| Quantity | Typical value | Context |
|---|---|---|
| [[COP_real]] domestic refrigeration | 2 to 4 | Refrigerator between 258 K and 308 K |
| [[COP_real]] geothermal heat pump | 3.5 to 5 | Source at 283 K, delivery at 318 K |
| [[COP_Carnot]] domestic refrigeration | 4.5 to 6 | Standard conditions |
| [[eta_Carnot]] | 30 to 60 % | Well-designed systems |
| [[W_comp]] domestic | 80 to 200 W | Standard refrigerator |
| [[Q_C]] domestic | 200 to 500 W | Cooling capacity |

## Personalized resolution method

1. Identify whether the system is a refrigerator or heat pump and determine the useful effect.
2. Convert all temperatures to kelvin by adding 273.15 to Celsius values.
3. Calculate [[COP_Carnot]] as [[T_C]] divided by the difference [[T_H]] minus [[T_C]].
4. Estimate or read the system [[COP_real]]; if not given, use the typical Carnot fraction (40 to 55 %).
5. Calculate the capacity ([[Q_C]] or [[Q_H]]) by multiplying [[COP_real]] by [[W_comp]].
6. Verify the energy balance: [[Q_H]] must equal [[Q_C]] plus [[W_comp]].
7. Compare [[COP_real]] with [[COP_Carnot]] to validate coherence.

## Special cases and extended example

When [[T_C]] approaches [[T_H]], [[COP_Carnot]] diverges, suggesting infinite efficiency. In practice, this is never reached because irreversibilities have an irreducible minimum. When [[T_C]] is very low (cryogenics, below 200 K), [[COP_real]] drops dramatically and compressor losses dominate. In these cases, the Carnot fraction falls below 25 %.

As an extended example, consider an industrial refrigeration system operating at [[T_C]] of 233 K (minus 40 degrees Celsius) and [[T_H]] of 313 K. The [[COP_Carnot]] is 233 divided by 80, giving 2.91. With [[eta_Carnot]] of 35 %, the [[COP_real]] is 1.02. With [[W_comp]] of 50 kW, the cooling capacity [[Q_C]] is 51 kW and [[Q_H]] is 101 kW. The monthly electricity consumption reaches 36000 kWh, demonstrating the enormous energy cost of low-temperature refrigeration. A 10 % improvement in [[COP_real]] would save 3273 kWh monthly.

## Real student questions

**Why does a refrigerator consume 150 W but extract 375 W of heat?**
Because the refrigerator does not generate heat but transfers it. The compressor performs work to move heat from the cold interior to the warm exterior. A COP of 2.5 means each watt of electricity moves 2.5 watts of heat, which does not violate any law.

**How do I know if my system is well designed?**
By calculating the Carnot fraction. If the system achieves 45 to 55 % of the Carnot COP, it is in the normal range. Below 30 %, there is significant room for improvement.

## Cross-cutting connections and study paths

Practical examples connect with the theoretical coefficient of performance as a reference, with thermodynamic cycles as the basis of system design, and with the second law of thermodynamics as the foundation of efficiency limits. In engineering, they connect with energy labeling regulations, heat exchanger design and refrigerant selection.

## Final synthesis

Practical examples demonstrate that thermodynamic principles are not abstractions but predictive tools. The [[COP_Carnot]] sets the ceiling, the [[COP_real]] measures reality, and the Carnot fraction quantifies the distance between them. The daily energy consumption [[E_dia]] translates these coefficients into real economic impact: multiplying [[W_comp]] by the operating hours gives the total energy consumed, which converted to kWh allows directly estimating the electricity cost. Mastering the sizing of these systems requires integrating theoretical thermodynamics with the practical constraints of real components, including estimation of [[E_dia]] to evaluate economic viability. In industrial applications, a small improvement of 5 to 10 percent in [[COP_real]] can translate to savings of thousands of euros annually, making these calculations essential for engineering practice. The systematic comparison between real performance and the Carnot limit through the Carnot fraction provides the universal diagnostic tool for assessing the quality of any refrigeration or heat pump installation.
