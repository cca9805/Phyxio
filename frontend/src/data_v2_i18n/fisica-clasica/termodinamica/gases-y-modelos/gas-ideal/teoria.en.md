# Ideal Gas

## Conceptual context

The **ideal gas** is the most fundamental physical model in the thermodynamics of gases. It describes a system of point particles that do not interact with each other except through perfectly elastic collisions with the walls of the container. The governing law relates the four macroscopic state variables — **pressure** [[P]], **volume** [[V]], **temperature** [[T]], and **amount of substance** [[n]] — in a single equation of state.

The importance of the ideal gas lies not in the fact that real gases behave exactly this way, but in the fact that it constitutes the low-density limit to which all real gases converge. Understanding the ideal model and its conditions of validity is the indispensable starting point for any thermodynamic process involving gases, and the foundation on which more accurate models such as the Van der Waals equation are built.

## 🟢 Essential level

The molecules of a gas move in all directions and continuously collide with the walls of the container. Each collision transfers a small impulse to the wall, and the average of billions of such collisions per second over each square metre is what we measure as [[P]].

The ideal gas model captures three simple physical intuitions: the more molecules there are ([[n]] larger), the more collisions occur and [[P]] rises; if the gas is heated ([[T]] larger), the molecules move faster, strike harder and [[P]] rises; if the container expands ([[V]] larger), the molecules take longer to reach the wall and [[P]] falls. The **ideal gas law** unites these three ideas in a single equation: the product [[P]]·[[V]] is proportional to the product [[n]]·[[T]], with the universal constant [[R]] as the proportionality factor.

> [!NOTE]
> Temperature **must always** be expressed in **kelvin** (K). Using degrees Celsius produces incorrect results: at 25 °C the correct temperature is 298 K, not 25 K. Entering 25 instead of 298 makes the calculated result roughly twelve times smaller than the correct value.

## 🔵 Formal level

The ideal gas law is written as:

{{f:ley_gas_ideal}}

where [[P]] is in pascals, [[V]] in cubic metres, [[n]] in moles, [[R]] = 8.314 J/(mol·K) and [[T]] in kelvin.

Rearranging for each variable:

- To find [[P]]: divide the product of [[n]], [[R]] and [[T]] by [[V]].
- To find [[V]]: divide the product of [[n]], [[R]] and [[T]] by [[P]].
- To find [[T]]: divide the product of [[P]] and [[V]] by the product of [[n]] and [[R]].
- To find [[n]]: divide the product of [[P]] and [[V]] by the product of [[R]] and [[T]].

When the system remains closed ([[n]] constant), the **combined gas law** relates two states without needing to compute [[n]] or [[R]]:

{{f:ley_combinada_gases}}

The model rests on four assumptions that must hold for its application:

1. Molecules are point particles (their own volume is negligible compared with [[V]]).
2. There are no intermolecular forces except during collision.
3. Collisions are perfectly elastic (total kinetic energy is conserved).
4. The gas is in thermodynamic equilibrium or undergoing a quasi-static process.

> [!TIP]
> At standard conditions (0 °C, 1 atm), the **molar volume** of any ideal gas is exactly 22.4 L/mol (equivalent to 0.0224 m³/mol). This value provides a quick sanity check: if, when computing with one mole, you obtain a [[V]] far from 22.4 L, review your units.

## 🔴 Structural level

The ideal gas law is the low-density thermodynamic limit (n/[[V]] → 0) of any fluid equation of state. In that limit, the mean distance between molecules is much greater than the range of molecular interactions, so Van der Waals forces and excluded volume are negligible. The resulting equation of state is linear in each individual variable and is the same for every gas, regardless of the chemical nature of the molecules: that **universality** is the deepest consequence of the non-interaction assumption.

The constant [[R]] is not arbitrary: it is the product of Avogadro's number (N_A ≈ 6.022 × 10²³ mol⁻¹) and Boltzmann's constant (k_B ≈ 1.381 × 10⁻²³ J/K). From a microscopic perspective, k_B·[[T]] is the typical thermal energy of a single degree of freedom per molecule, and [[R]]·[[T]] is the thermal energy per mole. This connects the macroscopic scale of thermodynamics with the molecular scale of statistical mechanics.

**Quantitative domain of validity.** The ideal model is reliable to better than 1 % when [[P]] does not exceed ~10 atm and [[T]] is above twice the critical temperature of the gas. For N₂ (T_c: 126 K) this covers most laboratory conditions; for CO₂ (T_c: 304 K) the law fails appreciably above 20 atm at room temperature. The failure indicator is the **compressibility factor** Z —ratio P·V/(n·R·T)—: if Z deviates from unity by more than 5 %, the ideal model is insufficient.

> [!WARNING]
> The ideal gas law describes **equilibrium states**. In rapid or non-quasi-static processes (an explosion, a free expansion), [[P]] and [[T]] are not uniform throughout the system and the equation of state cannot be applied to the ongoing process — only to the initial and final equilibrium states.

## Deep physical interpretation

Pressure in an ideal gas emerges as the statistical average of the linear momentum transferred by molecules to the walls. In the thermodynamic limit, that average is proportional to the number density of molecules and to the mean translational kinetic energy of each one. Temperature is exactly proportional to that mean kinetic energy, with a proportionality constant of 2/(3·k_B). This link between [[T]] and kinetic energy is the bridge between macroscopic thermodynamics and microscopic kinetic theory.

The linearity of the ideal gas law in [[n]] at fixed ([[P]], [[T]]) reflects the statistical independence of the molecules: adding one more mole does not alter the behaviour of those already present. This independence is exact in the ideal model and breaks down in real gases at high density, where spatial correlations between neighbouring molecules become significant.

## Order of magnitude

At laboratory conditions (1 atm, 25 °C):

- Molar volume: ≈ 24.5 L/mol (equivalent to 0.0245 m³/mol).
- For a 5 L balloon at atmospheric pressure and 25 °C: [[n]] ≈ 0.204 mol, i.e. about 1.23 × 10²³ molecules.
- The mean distance between N₂ molecules at 1 atm and 25 °C is ≈ 3.4 nm, about ten times the molecular diameter: the dilute-gas assumption is an excellent approximation.

At high pressure (100 atm, 300 K):

- Ideal molar volume: ≈ 0.245 L/mol; the real value for N₂ is ≈ 0.237 L/mol (Z ≈ 0.97). The 3 % deviation is acceptable for medium-precision engineering calculations.

## Personalized resolution method

1. **Identify the unknown**: which variable (P, V, T or n) is sought?
2. **List data with units**: convert [[T]] to kelvin by adding 273.15, [[V]] to m³ by dividing litres by 1000, [[P]] to pascals if using [[R]] = 8.314 J/(mol·K).
3. **Select the rearrangement**: choose the form of the ideal gas law that isolates the unknown.
4. **Substitute and compute**: verify that units cancel correctly (pascals × cubic metres = joules).
5. **Validate the result**: a typical laboratory pressure is between 10³ and 10⁶ Pa; the molar volume at ordinary pressures is of the order of 10–25 L/mol.

> [!TIP]
> If the problem gives initial and final conditions of the same closed system ([[n]] constant), use the **combined gas law**: the ratio of the product [[P]]·[[V]] to [[T]] is conserved, avoiding explicit calculation of [[n]] and [[R]].

## Special cases and extended example

**Isothermal process** ([[T]] constant — Boyle's law): the product [[P]]·[[V]] is conserved. The isotherm is a hyperbola in the P–V diagram.

**Isobaric process** ([[P]] constant — Charles's law): the ratio [[V]]/[[T]] is conserved. A balloon going from 20 °C (293 K) to 60 °C (333 K) increases its volume by the factor 333/293 ≈ 1.14.

**Isochoric process** ([[V]] constant — Gay-Lussac's law): the ratio [[P]]/[[T]] is conserved. A sealed container heated from 20 °C to 100 °C experiences a pressure increase of 27 %.

**Mixture of ideal gases** (Dalton's law): the total [[P]] is the sum of the partial pressures of each component, each computed as if it occupied the total volume alone at the same temperature.

## Real student questions

**Why must I use kelvin? Can't I use Celsius?**

No. The ideal gas law requires [[T]] in kelvin because it measures the absolute kinetic energy of the molecules from absolute zero. At 0 °C the kinetic energy is not zero; it is only zero at 0 K (−273.15 °C). Using Celsius introduces errors of 50–100 % at everyday temperatures.

**When does the ideal gas law cease to be valid?**

When molecules are very close together — that is, at high [[P]] or low [[T]] near the condensation point. A practical rule: if the compressibility factor Z deviates from 1 by more than 5 %, use the Van der Waals equation or a more accurate model.

**What does [[R]] physically mean?**

[[R]] is the mean translational kinetic energy per mole per kelvin. Its value of 8.314 J/(mol·K) directly indicates that raising the temperature of 1 mol of ideal gas by 1 K increases its total translational kinetic energy by (3/2)R ≈ 12.5 J.

**Does the ideal gas actually exist?**

Not in a strict sense. It is an idealisation that real gases at low density (air at atmospheric pressure, noble gases under ordinary conditions) approximate with errors smaller than 1 %. The utility of the model lies precisely in that radical mathematical simplification.

## Cross-cutting connections and study paths

The ideal gas law is the foundation of the [thermodynamics of processes](leaf:fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos): every quasi-static process in a gas — isothermal, isobaric, isochoric, adiabatic — is described as a trajectory on the surface defined by the ideal gas law. The work performed in each process is the integral of the product [[P]]·d[[V]] along that path.

[Kinetic theory of gases](leaf:fisica-clasica/termodinamica/gases-y-modelos/teoria-cinetica) provides the microscopic justification: [[P]] arises from the statistical average of molecular collisions and [[T]] is proportional to the mean translational kinetic energy. The connection between the two perspectives — macroscopic and microscopic — is one of the greatest conceptual achievements of classical physics.

Deviations from ideal behaviour connect with the [Van der Waals equation of state](leaf:fisica-clasica/termodinamica/gases-y-modelos/ecuaciones-de-estado) and with molecular physics: the parameters a and b reflect intermolecular interactions that explain properties such as surface tension and boiling points.

## Final synthesis

The ideal gas is the simplest and most powerful model in gas thermodynamics: with four measurable macroscopic variables and a single universal constant, it describes the state of any low-density gas. Its domain of validity is broad in practice — air, N₂, O₂, noble gases under ordinary laboratory conditions — and its deviations are systematically modelled with more accurate equations of state. Mastering this model, including its assumptions and its limits, is the indispensable starting point for any thermodynamic problem involving gases.
