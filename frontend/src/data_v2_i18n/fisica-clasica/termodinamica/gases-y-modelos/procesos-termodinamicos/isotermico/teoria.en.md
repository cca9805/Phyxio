# Isothermal Process

## Conceptual context

When a gas changes state while remaining in permanent contact with a **thermal reservoir at a fixed temperature**, the gas temperature does not vary throughout the process. This behavior defines the **isothermal process**: a transformation in which [[T]] remains constant while [[p1]] and [[V1]] evolve.

The isothermal process is one of the four ideal thermodynamic processes that form the basis for studying heat engines and thermodynamic cycles. It appears, for example, in the expansion stage of the Carnot cycle and in the slow behavior of gases subject to pressure changes in containers immersed in a thermostat bath.

Understanding the isothermal process requires distinguishing it precisely from the adiabatic process: in the isothermal, temperature is constant and **the gas exchanges heat**, whereas in the adiabatic, heat is zero but temperature changes. Confusing the two processes is the most frequent conceptual error in elementary thermodynamics.

## 🟢 Essential level

Imagine a gas enclosed in a piston with perfectly conducting walls submerged in water at constant temperature. When the piston is pushed slowly inward, the gas compresses but the temperature does not rise because the extra heat flows into the water. If instead the piston is withdrawn slowly, the gas expands, pressure drops, and the water provides heat to the gas to maintain its temperature.

This continuous heat exchange with the surroundings is the essence of the isothermal process. The **quantity that remains fixed** is [[T]], and that constancy imposes a precise inverse relationship between [[p2]] and [[V2]]: when one rises, the other falls so that their product always equals the initial product [[p1]] times [[V1]].

Physically, constant temperature means the internal energy of the gas does not change. Therefore, all the work the gas does during expansion comes from the heat it absorbs from the reservoir, and all the work the surroundings do on the gas during compression becomes heat the gas releases to the reservoir.

## 🔵 Formal level

The law governing the isothermal process for an ideal gas is **Boyle's Law**, expressed as the constant pressure-volume product at constant temperature:

{{f:ley_boyle}}

This relation is a **hyperbola** in the pressure-volume diagram. Each value of [[T]] defines a different hyperbola; isotherms farther from the origin correspond to higher temperatures.

The work done by the gas during a reversible isothermal process is obtained by integrating pressure along the path between [[V1]] and [[V2]]. Since pressure varies continuously along the hyperbola, the integral yields a natural logarithm:

{{f:trabajo_isotermico}}

Work [[W]] is positive when [[V2]] is greater than [[V1]] (expansion) and negative when [[V2]] is smaller (compression). Because the internal energy of an ideal gas depends only on [[T]], and [[T]] is constant, the change in internal energy is zero. By the **first law of thermodynamics**, [[Q_iso]] equals exactly [[W]]: the heat absorbed from the reservoir equals the work done on the surroundings, with no residual.

The amount [[n]] of moles and [[T]] scale the work in direct proportion. Doubling [[n]] at the same temperature and the same volume ratio exactly doubles [[W]] and [[Q_iso]].

## 🔴 Structural level

Boyle's Law emerges directly from the ideal gas equation of state when [[T]] is fixed. This reveals that the isothermal process is not an independent law but a **constraint applied to the equation of state**: at fixed temperature and amount of substance, the product [[p1]][[V1]] is the constant nRT, and every final state reachable by an isothermal process must satisfy the same product.

This architecture has important consequences. First, the **pV hyperbola is the complete geometric representation** of the set of states accessible from the initial state at the same temperature. Expansion or compression along this curve has no preferred direction from static thermodynamics; it is the real irreversibility of the process that imposes the arrow of time.

Second, the fact that [[Q_iso]] equals [[W]] in the ideal isothermal process means the process is **completely dependent on the thermal reservoir**: without a heat reservoir at a fixed temperature, the isothermal process cannot occur. In practice, this means the process must be slow enough for thermal equilibrium with the surroundings to be maintained at all times. Excessively fast processes produce internal temperature gradients that generate irreversibility and cause the system to deviate from the theoretical hyperbola.

Third, the **relative position of isotherms** in the pV diagram has physical value: the higher the temperature, the farther the hyperbola from the origin and the greater the area under the curve, implying greater work. This geometry is the foundation of Carnot cycle analysis, where the high-temperature expansion stage produces more work than the low-temperature compression stage.

The model fails when process speed exceeds the thermal conduction capacity, when pressure exceeds 100 atm, or when temperature approaches condensation. In those cases molecular interactions make the pV product non-constant and the Van der Waals equation is required.

## Deep physical interpretation

The isothermal process illustrates a fundamental principle: the **internal energy of an ideal gas is a function of temperature only**. This property, demonstrated experimentally by Joule, implies that any process keeping [[T]] constant does not modify internal energy, regardless of pressure or volume values.

The equivalence between [[W]] and [[Q_iso]] is not a mathematical coincidence but a direct consequence of the fact that an ideal gas cannot store or release energy autonomously during an isotherm. The thermal reservoir acts as an elastic energy buffer: it provides heat when the gas expands and recovers it when the gas compresses.

> [!NOTE]
> The efficiency of the Carnot cycle derives precisely from the fact that expansion and compression are reversible isothermal processes at the high- and low-temperature reservoirs. The ideal isothermal process is the most efficient possible transformation between two states at the same temperature.

> [!WARNING]
> In practice, no process is perfectly isothermal because temperature gradients always exist. The isothermal approximation is valid when the characteristic process time is much greater than the thermal equilibration time of the system with its surroundings.

## Order of magnitude

For one mole of nitrogen at 300 K, the process constant is approximately 2500 J. A volume change from 1 litre to 2 litres produces about 1730 J of work. At 600 K this value doubles exactly, which serves as a quick verification: **doubling the absolute temperature doubles the work** for the same volume ratio.

An absurd result to detect: if the calculation gives several megajoules of work for one mole at room temperature, the error usually lies in confusing litres with cubic metres or Celsius with kelvin.

## Personalized resolution method

To solve an isothermal process problem, follow these steps:

1. **Identify the data**: extract [[p1]], [[V1]], [[T]], [[n]] and the unknown (usually [[p2]], [[V2]], or [[W]]).
2. **Verify consistency**: confirm that [[T]] is the same at start and end; if it changes, the process is not isothermal.
3. **Apply Boyle's Law**: if final pressure or volume is sought, use the inverse ratio between the two magnitudes.
4. **Calculate work**: if [[W]] is sought, substitute [[n]], [[T]], and the ratio [[V2]] divided by [[V1]] into the formula with the natural logarithm.
5. **Check the sign**: positive [[W]] implies [[V2]] greater than [[V1]]; negative [[W]] implies the opposite.
6. **Apply the first law**: for an ideal gas in an isothermal process, [[Q_iso]] equals [[W]].

Steps 3 and 4 are independent: Boyle's Law gives the final state, and the work formula gives the exchanged energy. Do not confuse the two calculations.

## Special cases and extended example

**Joule free expansion**: if the gas expands into a vacuum without a piston (doing no mechanical work), the process can be isothermal for an ideal gas even without thermal reservoir contact, because internal energy does not change and [[T]] is maintained. However, in this case [[W]] is zero and [[Q_iso]] is also zero. This shows that constant [[T]] alone is not sufficient to define an isothermal process in the thermodynamic sense; the process must also be reversible and quasi-static.

**Nearly isothermal process of a real gas**: for carbon dioxide at 50 atm and 300 K, the pV product is not constant because molecular interactions produce deviations of 5 to 10 percent from the ideal model. In these cases, Boyle's Law overestimates or underestimates the final volume depending on the dominant interaction type.

**Comparison with the adiabatic process**: for the same expansion from [[V1]] to [[V2]], the isothermal process produces more work than the adiabatic, because in the adiabatic process temperature falls during expansion, reducing pressure more rapidly than on the isothermal hyperbola. This difference is visible in the pV diagram as the difference between the area under the hyperbola and the area under the adiabatic curve, which is less steep.

## Real student questions

**Why does temperature not change if the gas does work?**
Because the gas receives exactly that heat from the thermal reservoir. The reservoir compensates for the energy loss the gas would suffer from doing work, keeping [[T]] constant. The key is that the process must be slow enough.

**Why is [[W]] not zero if [[T]] is constant?**
Because constant [[T]] implies constant internal energy, not zero work. Work can be non-zero as long as there is an equal heat exchange with the reservoir. Confusing constant [[T]] with zero [[W]] is the classic error of swapping isothermal for adiabatic.

**What happens if the expansion is very fast?**
Rapid expansion creates internal temperature gradients; the gas cools in the low-pressure region before heat from the reservoir can arrive. The process ceases to be isothermal and the actual work is less than predicted by the hyperbola formula.

**How does the isothermal process relate to the Carnot cycle?**
The Carnot cycle uses two isothermal processes: one at the high temperature of the hot reservoir, where the gas absorbs heat and expands, and one at the low temperature of the cold reservoir, where the gas releases heat and compresses. The difference in work between these two processes is the net work of the cycle.

## Cross-cutting connections and study paths

The isothermal process connects directly with the **ideal gas law** ([leaf:fisica-clasica/termodinamica/gases-y-modelos/gas-ideal]), since Boyle's Law is the isothermal constraint on the equation of state. Without understanding the ideal gas, it is not possible to derive or interpret the pV hyperbola.

It also connects with the **first law of thermodynamics** ([leaf:fisica-clasica/termodinamica/fundamentos/primer-principio]), which allows [[W]] and [[Q_iso]] to be related exactly for an ideal gas. The adiabatic process ([leaf:fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos/adiabatico]) is the necessary counterpoint: in it [[Q_iso]] is zero but [[T]] changes, exactly the opposite of the isothermal.

The recommended study path is: ideal gas → first law → isothermal process → adiabatic process → Carnot cycle → second law of thermodynamics.

## Final synthesis

The isothermal process is the thermodynamic transformation in which [[T]] remains constant because the gas exchanges heat with a thermal reservoir. Boyle's Law describes the hyperbola of accessible states in the pV diagram, and the work done equals the heat absorbed by the first law. Distinguishing this process from the adiabatic — where heat is zero and temperature changes — is the core competence the student must acquire when studying this leaf.
