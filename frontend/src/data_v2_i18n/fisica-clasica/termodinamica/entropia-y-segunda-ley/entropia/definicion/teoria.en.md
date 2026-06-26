# Definition of entropy

## Conceptual context

Entropy is the thermodynamic quantity that defines the direction of natural processes. While the first law says energy is conserved, the second law says processes occur in only one direction: the one that increases the total entropy of the universe. Without entropy there is no arrow of time in physics.

This leaf focuses on the operational Clausius definition: [[DeltaS]] as the ratio of [[Q_rev]] to [[T_abs]]. This definition is the foundation of all second-law thermodynamics and the starting point for understanding why heat engines have a maximum efficiency, why heat flows spontaneously from hot to cold, and why certain processes are irreversible even though they are permitted by the first law.

The concept connects directly with Boltzmann's statistical thermodynamics (entropy as the logarithm of the number of microstates), but this leaf works exclusively at the macroscopic Clausius level, which is accessible without statistical mechanics.

## 🟢 Essential level

Entropy measures **how dispersed the energy is** in a system. When a body is heated, its energy is distributed among more possible microstates: entropy increases. When a gas expands, its molecules have more available space: entropy increases. Natural processes always evolve towards greater energy dispersal.

The variable [[DeltaS]] quantifies that change in dispersal. Its operational definition is straightforward: [[DeltaS]] equals the reversible heat [[Q_rev]] divided by the absolute temperature [[T_abs]] at which the exchange occurs. **At higher temperature, the same heat produces less entropy change**: a hot system is already highly dispersed, so adding more heat changes its degree of dispersal very little. At low temperature, by contrast, the same heat produces an enormous change.

The sign of [[DeltaS]] defines the direction: positive if the system absorbs heat and gains dispersal, negative if it releases heat. The **second law** states that the sum of [[DeltaS]] of the system plus [[DeltaS]] of the surroundings is always greater than or equal to zero in any real process.

## 🔵 Formal level

The Clausius definition for a reversible isothermal process is:

{{f:definicion_entropia_clausius}}

where [[Q_rev]] is the reversibly exchanged heat, [[T_abs]] is the absolute temperature in kelvin, and [[DeltaS]] is the entropy change of the system. For the more general case of a non-isothermal process, this relation is the differential form that must be integrated along the reversible path.

For the special and most frequent case in secondary and first-year university calculations—the isothermal process (constant temperature)—the integrated formula is:

{{f:entropia_isotermica}}

This is the expression directly applicable to phase changes (melting, vaporisation, sublimation), to isothermal expansions of ideal gases, and to any process where temperature remains constant. The fact that [[T_abs]] is constant allows it to be taken out of the integral denominator, reducing the calculation to a simple division.

Rearrangements of the formula allow [[Q_rev]] to be calculated from [[DeltaS]] and [[T_abs]], or [[T_abs]] to be determined from [[Q_rev]] and [[DeltaS]]. The rearrangement [[Q_rev]] = [[DeltaS]] × [[T_abs]] has a direct interpretation: the heat exchanged in a reversible isothermal process is exactly the product of the entropy change and the temperature.

## 🔴 Structural level

Entropy [[S]] is a **state function**: its value depends only on the thermodynamic state of the system (pressure, volume, temperature), not on the path taken to reach that state. This property is fundamental and justifies that [[DeltaS]] can be calculated via any hypothetical reversible process connecting the initial and final states, even if the actual process was irreversible.

The **Clausius inequality** generalises the definition to the irreversible case: for any real process, system [[DeltaS]] is greater than or equal to [[Q_rev]] divided by [[T_abs]], with equality only for reversible processes. This is the analytical expression of the second law: the entropy of the universe never decreases. A process is spontaneous if [[DeltaS]]_universe > 0, reversible (ideal) if [[DeltaS]]_universe = 0, and impossible if [[DeltaS]]_universe < 0.

The **absolute temperature [[T_abs]]** in the denominator of the Clausius formula has a deep structural meaning: it quantifies the quality of thermal energy. One joule of heat at 1000 K contributes only 0.001 J/K of entropy; the same joule at 10 K contributes 0.1 J/K—one hundred times more. Energy at high temperature is more ordered (lower relative entropy), which explains why high-temperature engines are more efficient: they exploit higher-quality energy.

The T-S diagram (temperature versus entropy) is the natural representation of entropy. In it, isothermal processes are horizontal lines, reversible adiabatic processes are vertical lines (isentropic, [[DeltaS]] = 0), and the area under any T-S curve is the exchanged heat [[Q_rev]]. The Carnot cycle forms a **perfect rectangle** in the T-S diagram: two horizontal isotherms at high and low [[T_abs]], and two vertical adiabatics. The Carnot efficiency ratio emerges directly from the geometry of that rectangle: work is the rectangle area and heat absorbed is the area under the hot isotherm.

Entropy has an **absolute lower bound**: the third law states that [[S]] tends to zero as [[T_abs]] tends to zero for a perfect crystal. This fixes the absolute reference for [[S]] and is needed to calculate absolute entropies (not just changes). In the practice of this leaf, we work with [[DeltaS]], which does not require the absolute reference.

## Deep physical interpretation

[[DeltaS]] is not a measure of "disorder" in the colloquial sense, but a precise measure of **energy dispersal**: how many microstates are accessible to the system at a given energy. When an ice cube melts, molecules pass from an ordered crystal lattice (few microstates) to a liquid phase where each molecule can occupy many different positions (many microstates): [[DeltaS]] > 0.

The asymmetry between positive and negative [[DeltaS]] for the system reflects the fundamental asymmetry of natural processes. The system can reduce its entropy ([[DeltaS]]_system < 0)—a refrigerator does exactly that—but only by transferring more entropy to the surroundings. The **universe** can never reduce its entropy: that is the second law.

The [[T_abs]] denominator in the Clausius formula converts a quantity of energy ([[Q_rev]], in joules) into an entropy change (in J/K). Temperature acts as a divisor because at high temperature the system already has a lot of energy distributed among its molecules, and adding more heat does not significantly change that distribution. At low temperature, the system has fewer accessible microstates, and the same heat perturbs it far more.

## Order of magnitude

Reference entropies for comparison:

- Melting 1 mol of ice at 0 °C (273 K): [[DeltaS]] ≈ 22 J/(mol·K)
- Vaporising 1 mol of water at 100 °C (373 K): [[DeltaS]] ≈ 109 J/(mol·K)
- Isothermal expansion of 1 mol of ideal gas to twice the volume at 300 K: [[DeltaS]] ≈ 5.76 J/(mol·K)
- Hydrogen combustion reaction (gas moles → liquid mole): [[DeltaS]] ≈ −130 J/(mol·K)

Vaporisation produces approximately 5 times more entropy change than melting for water. This is consistent with the latent heat of vaporisation (2260 J/g) being about 7 times larger than that of melting (334 J/g), with the vaporisation temperature (373 K) slightly higher than the melting temperature (273 K).

A [[DeltaS]] result above 1000 J/(mol·K) for ordinary processes is physically suspicious and almost always indicates that [[T_abs]] was entered in Celsius rather than kelvin.

## Personalized resolution method

1. **Identify the process type**: is it isothermal (constant T)? a phase change? an expansion/compression? For isothermal, apply the integrated formula directly.
2. **Verify that [[T_abs]] is in kelvin**: always convert from Celsius to the absolute scale before calculating.
3. **Determine the sign of [[Q_rev]]**: positive if the system absorbs heat, negative if it releases it.
4. **Calculate [[DeltaS]]** as [[Q_rev]] / [[T_abs]]; the result has units of J/K.
5. **Check coherence**: [[DeltaS]] and [[Q_rev]] must have the same sign. Compare the value with references (ice melting ≈ 22 J/(mol·K), water vaporisation ≈ 109 J/(mol·K)).
6. **If [[DeltaS]] of the universe is required**: also calculate [[DeltaS]] of the surroundings as −[[Q_rev]] / [[T_abs]]_surroundings and add them.

## Special cases and extended example

**Reversible adiabatic process (isentropic)**: [[Q_rev]] = 0, therefore [[DeltaS]] = 0. System entropy does not change. This is the most thermodynamically efficient process. In an ideal adiabatic compressor or in the compression stage of the Carnot cycle, entropy is constant.

**Isothermal ideal gas process**: when an ideal gas expands isothermally, its temperature does not change, so all expansion work is compensated by absorbed heat. The entropy change increases with the amount of gas and with the ratio between final and initial volume. For an expansion, [[DeltaS]] is positive: the gas occupies more space and has more accessible microstates.

**Sensible heating (no phase change)**: when [[T_abs]] varies, the isothermal formula does not apply. In that case an integrated heating model with constant specific heat capacity is used. This is outside the direct scope of this leaf but is the natural next step.

**Mixing of gases at constant temperature**: each gas expands to the total volume. The mixing contribution is always positive for real mixtures, confirming that mixing is a spontaneous irreversible process.

## Real student questions

**Why can [[DeltaS]] of the system be negative if the second law says entropy increases?**
Because the second law applies to the universe, not to the isolated system. The system can lose entropy if the surroundings gain more than it loses. A refrigerator reduces the entropy of the cold food, but the compressor heats the surroundings more than it cools the interior: [[DeltaS]]_universe > 0.

**Why must [[T_abs]] be in kelvin and not in Celsius?**
Because the Clausius definition uses the absolute thermodynamic temperature, which has its zero at the point of minimum thermal energy. A value of [[T_abs]] = 0 in the formula would make [[DeltaS]] diverge for any non-zero [[Q_rev]]; that is physically correct (near absolute zero any heat enormously changes entropy) but is impossible for Celsius temperatures, which can be zero or negative without meaning absence of thermal energy.

**What is the difference between [[S]] and [[DeltaS]]?**
[[S]] is the state function: its value at a given instant requires an absolute reference fixed by the third law. [[DeltaS]] is the change between two states and is the directly calculable quantity from the Clausius formula without needing the absolute reference. In most thermodynamics problems, [[DeltaS]] is used rather than absolute values of [[S]].

**What happens to entropy in a reversible process?**
In a completely reversible process, [[DeltaS]]_universe = 0. This does not mean [[DeltaS]]_system = 0 (there can be reversible heat exchange), but that the system and surroundings exchange exactly the same entropy: what one gains the other loses. A reversible process is the ideal limit that real processes approach but never reach.

## Cross-cutting connections and study paths

The Clausius definition in this leaf is the direct foundation of Carnot efficiency, the Gibbs spontaneity criterion, and the third law of thermodynamics. Without mastering the relation between [[DeltaS]], [[Q_rev]], and [[T_abs]], it is impossible to understand why steam engines cannot be completely efficient or why chemical reactions have a preferred direction.

The connection with Boltzmann's statistical mechanics provides the microscopic interpretation: [[S]] grows with the number of microstates compatible with the macroscopic state. This connection explains why isothermal expansion processes increase entropy (more positional microstates) and why phase changes increase it in the direction of greater molecular disorder.

In modern physics, entropy is central to black hole thermodynamics (Bekenstein-Hawking entropy proportional to the area of the event horizon), information theory (Shannon entropy as a measure of information), and statistical physics of out-of-equilibrium systems.

## Final synthesis

Entropy [[S]] is the quantity that gives direction to thermodynamic processes: it always increases in the universe. The Clausius operational definition, [[DeltaS]] = [[Q_rev]] / [[T_abs]], translates this abstract idea into a calculable formula: the same quantity of heat produces more entropy change at low temperature than at high temperature, capturing the difference in quality between thermal energy at different temperatures.
