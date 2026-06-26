# Carnot Cycle

## Conceptual context

The Carnot cycle is the central result of classical thermodynamics applied to heat engines. It answers the fundamental question: given a pair of thermal reservoirs at fixed temperatures, what is the maximum efficiency any device can achieve when converting heat into work? The answer does not depend on the working fluid, the mechanical design, or the substance employed; it depends exclusively on the absolute temperatures of the reservoirs.

This leaf sits within the thermodynamic cycles block because it establishes the **absolute upper limit** against which every real cycle is compared. Understanding Carnot is a prerequisite for critically evaluating the performance of any heat engine, from a gas turbine to a nuclear reactor.

## 🟢 Essential level

A heat engine absorbs heat from a hot reservoir, produces useful work, and rejects residual heat to a cold reservoir. The **efficiency** measures what fraction of the absorbed heat is converted into usable mechanical work. Carnot proved that there is an unreachable ceiling imposed by nature: no engine can exceed the efficiency given by the ratio of the absolute temperatures of both reservoirs, regardless of its design or the materials employed.

The key insight is that maximum efficiency depends only on the temperatures [[T_H]] and [[T_C]]. The greater the difference between them, the larger the fraction of heat that can be transformed into work. This result requires no knowledge of the internal cycle details nor the nature of the working fluid; it suffices to know between which temperatures the machine operates to determine its absolute thermodynamic limit.

## 🔵 Formal level

The Carnot cycle consists of four reversible processes: an isothermal expansion at [[T_H]] where the fluid absorbs [[Q_H]], an adiabatic expansion that lowers the temperature to [[T_C]], an isothermal compression at [[T_C]] where [[Q_C]] is rejected, and an adiabatic compression that returns the fluid to [[T_H]]. Since all processes are reversible, entropy production is zero and efficiency reaches its theoretical maximum.

The central formula for Carnot efficiency is:

{{f:rendimiento_carnot}}

This expression shows that [[eta_C]] increases when [[T_H]] rises or when [[T_C]] decreases, approaching unity only in the unrealizable limit of [[T_C]] tending to zero kelvin. The energy balance of the complete cycle is described by the first law:

{{f:balance_energetico_carnot}}

The relationship between exchanged heats and the absolute temperatures of the reservoirs is exclusive to reversible cycles:

{{f:relacion_calores_carnot}}

This proportionality allows defining the Kelvin temperature scale in a purely thermodynamic manner, without resorting to properties of specific substances. The fact that [[Q_C]] divided by [[Q_H]] equals [[T_C]] divided by [[T_H]] implies that the total entropy of the universe does not change during the cycle: the heat rejected to the cold reservoir divided by [[T_C]] exactly compensates the heat extracted from the hot reservoir divided by [[T_H]].

## 🔴 Structural level

The power of Carnot's theorem lies in its universality: it is independent of the nature of the working fluid, the engine geometry, and the number of stages. Any irreversible cycle between the same reservoirs will have an efficiency strictly lower than [[eta_C]]. The proof relies on the **Clausius inequality**: for an irreversible cycle, the cyclic integral of heat divided by temperature is negative, implying greater entropy production and less conversion of heat into work.

The validity conditions are threefold. First, the reservoirs must have infinite heat capacity to maintain constant temperature during the exchange. Second, all processes must be quasi-static and frictionless. Third, there can be no heat transfer across finite temperature differences, as that would generate irreversible entropy.

In practice, no real cycle satisfies these conditions. Internal irreversibilities (friction, turbulence, conduction losses through finite walls) and external ones (temperature differences needed for heat to flow at a finite rate) always reduce efficiency below [[eta_C]]. The Carnot cycle functions as an **asymptotic upper bound**: useful for evaluating how much room for improvement remains in an existing design, but never attainable.

A structurally deep aspect is the connection with **entropy**: the Carnot cycle is the only cycle between two reservoirs that leaves the entropy of the universe unchanged. If entropy is produced, the capacity to do work is lost, and efficiency falls. The magnitude of that drop is proportional to the generated entropy multiplied by [[T_C]], a result known as the Gouy-Stodola theorem.

## Deep physical interpretation

Carnot efficiency is not an engineering limitation but a **fundamental law of nature**. It cannot be surpassed by optimizing materials, increasing pressure, or improving insulation. Its origin is purely statistical: the second law reflects the tendency of the universe toward states of higher probability, and converting heat entirely into work would require a spontaneous decrease in entropy, something statistically impossible.

The exclusive dependence on [[T_H]] and [[T_C]] reveals that the potential to do work does not reside in the quantity of heat but in its **thermal quality**: heat at high temperature has a greater capacity to produce work than the same amount at low temperature. This idea leads to the concept of **exergy**, which quantifies the maximum extractable work from a heat flow relative to the environment.

## Order of magnitude

A coal-fired power plant typically operates with [[T_H]] of about 800 K and environmental [[T_C]] of 300 K, giving a Carnot efficiency of approximately 62 %. Real plants achieve between 33 and 42 %, well below the theoretical limit. A modern gas turbine with [[T_H]] of 1500 K has a Carnot of about 80 %, but achieves between 38 and 44 % in practice. If a calculation yields an efficiency exceeding the corresponding Carnot, the result is physically absurd and indicates a procedural error.

## Personalized resolution method

> [!TIP]
> **Operational sequence for Carnot problems:**

- **Step 1**: Identify [[T_H]] and [[T_C]] in the problem statement and convert them to kelvin if given in Celsius.
- **Step 2**: Apply the Carnot efficiency formula to obtain [[eta_C]].
- **Step 3**: If heats are given, use the energy balance to obtain [[W_neto]].
- **Step 4**: Verify that the result is less than [[Q_H]] and that [[eta_C]] lies between 0 and 1.
- **Step 5**: Compare with real efficiencies to interpret the relative efficiency of the analysed cycle.

## Special cases and extended example

> [!NOTE]
> **Limiting case 1: reservoirs at the same temperature.** If [[T_H]] tends toward [[T_C]], efficiency tends to zero. Physically there is no thermal gradient to drive the cycle and no work can be produced.

> [!WARNING]
> **Limiting case 2: cold reservoir tending to zero kelvin.** Efficiency formally tends to unity, but the third law of thermodynamics forbids reaching absolute zero in a finite number of steps, so 100 % efficiency is unattainable.

A Carnot cycle between [[T_H]] of 1000 K and [[T_C]] of 300 K produces an efficiency of 70 %. If a reversed Carnot refrigerator is operated between the same reservoirs, the coefficient of performance is [[T_C]] divided by the temperature difference, giving approximately 0.43 for the inverse heat pump case, showing how the same reservoirs define both the engine efficiency and the refrigeration coefficient.

## Real student questions

**Why can Carnot efficiency not be achieved in practice?**
Because it requires infinitely slow (quasi-static) and frictionless processes. Any real machine operates at finite speed with heat transfer across finite temperature differences, generating irreversible entropy.

**Can the Carnot formula be used if the real cycle is not a Carnot cycle?**
Yes, as an upper bound. The efficiency of any real cycle between the same reservoirs will always be less than [[eta_C]]. It is used to assess how much room for improvement a design has.

**Why must temperatures be in kelvin and not Celsius?**
Because the formula involves ratios of absolute temperatures. Using Celsius produces erroneous results without physical meaning, since the zero of the Celsius scale is arbitrary.

**What if my result exceeds the Carnot value?**
The result is physically impossible. It indicates a numerical error (incorrect units, inverted reservoirs) or a conceptual mistake (applying an incorrect formula).

## Cross-cutting connections and study paths

The Carnot cycle connects directly with the real cycles studied in [Brayton-Rankine](leaf:fisica-clasica/termodinamica/maquinas-termicas/ciclos-termodinamicos/brayton-rankine) and [Otto](leaf:fisica-clasica/termodinamica/maquinas-termicas/ciclos-termodinamicos/otto), which represent practical approximations whose efficiency is evaluated by comparison with the Carnot limit. It also links to the concept of **entropy** and to the **second law of thermodynamics** in its Kelvin-Planck statement.

The Kelvin temperature scale is defined thermodynamically through the heat ratio of the Carnot cycle, connecting this topic with metrology and fundamental physics.

## Final synthesis

The Carnot cycle establishes that the maximum efficiency of any heat engine between two reservoirs depends solely on the ratio of their absolute temperatures. It is a direct consequence of the second law and serves as a universal reference for evaluating the thermodynamic quality of any process converting heat into work.
