# Equations of State

## Conceptual context

An equation of state is the mathematical relation connecting the macroscopic variables of a thermodynamic system: **pressure** [[P]], **volume** [[V]], **temperature** [[T]], and **amount of substance** [[n]]. Its practical value is that, given any three of these four variables, the equation predicts the fourth without requiring any description of individual molecular motion.

The concept grew from systematic experimental observation of gases: Boyle in the seventeenth century, Charles and Gay-Lussac in the eighteenth, and Avogadro in the early nineteenth established partial laws that were ultimately unified in the **ideal gas law**. This equation does not describe any real gas that exists in nature; it is an idealisation that real gases approximate well under conditions of low density.

An equation of state is not merely a calculation formula. It is the bridge between the microscopic description of matter (what individual molecules do) and its macroscopic description (what manometers and thermometers measure). Understanding this connection is understanding why gases compress on cooling, why tyre pressure rises in summer, and why wind arises from pressure differences in the atmosphere.

## 🟢 Essential level

A gas exerts [[P]] on the walls of its container because its molecules continually collide with them. The more molecules there are ([[n]] larger), the more collisions occur. If the container is heated, the molecules move faster, hit harder, and [[P]] rises. If the container expands ([[V]] larger), molecules must travel farther between collisions, so [[P]] falls.

The **ideal gas law** captures all of this in a single relation: the product [[P]]·[[V]] is proportional to [[n]] and to [[T]]. The constant of proportionality is the **universal gas constant** [[R]], identical for every ideal gas regardless of its chemical nature — that universality is the most surprising result of the law.

> [!NOTE]
> Temperature **must always** be expressed in **kelvin** (K). A very common mistake is substituting degrees Celsius directly: entering 25 instead of 298 kelvin produces a result for [[P]] or [[V]] roughly twelve times smaller than the correct value.

## 🔵 Formal level

The ideal gas law is written as:

{{f:ley_gas_ideal}}

where [[P]] is the pressure in pascals, [[V]] the volume in cubic metres, [[n]] the amount of substance in moles, [[R]] = 8.314 J/(mol·K), and [[T]] the absolute temperature in kelvin.

The equation above can be rearranged for any of the four variables:

- To find [[P]]: divide the product of [[n]], [[R]] and [[T]] by [[V]].
- To find [[V]]: divide the product of [[n]], [[R]] and [[T]] by [[P]].
- To find [[T]]: divide the product of [[P]] and [[V]] by the product of [[n]] and [[R]].
- To find [[n]]: divide the product of [[P]] and [[V]] by the product of [[R]] and [[T]].

For **real gases** with significant molecular interactions, the Van der Waals equation introduces two corrections:

{{f:van_der_waals}}

The term `a·n²/V²` lowers the effective pressure because attractive forces between molecules reduce the momentum transferred to the walls. The term `n·b` subtracts the **excluded volume** occupied by the molecules themselves from the total volume. The parameters a and b are species-specific and are found in tabulated experimental data.

> [!TIP]
> At standard conditions (0 °C, 1 atm), the **molar volume** of any ideal gas is exactly 22.4 L/mol. This datum provides a quick sanity check: if, when calculating with one mole, you obtain a [[V]] far from 22.4 L, review your units.

## 🔴 Structural level

The ideal gas law is the low-density limit (n/V → 0) of any more general equation of state. In that limit, molecules are so far apart that their mutual interactions are negligible and their own volume is negligible compared with the available space: the gas behaves as a set of non-interacting point particles.

When density increases — by raising [[P]] or lowering [[T]] near the condensation point — both assumptions fail simultaneously: molecules come close enough for Van der Waals forces to be appreciable, and their finite volume occupies a non-negligible fraction of the total space. The Van der Waals equation captures these two effects in two parameters, but remains an approximation: near the liquid–vapour phase transition it exhibits a **Maxwell loop** (regions where ∂P/∂V > 0) that lacks direct physical meaning and must be handled by Maxwell's equal-area construction to find the coexistence pressure.

**Quantitative domain of validity.** The ideal gas law is reliable to better than 1 % when [[P]] does not exceed ~10 atm and [[T]] is above twice the gas's critical temperature. For N₂ (critical temperature 126 K) this covers ordinary laboratory conditions; for CO₂ (critical temperature 304 K) deviations become significant above 20 atm. The failure signal is that the compressibility factor Z — ratio of the real [[P]]·[[V]] to [[n]]·[[R]]·[[T]] — departs from unity by more than 5 %.

The architecture of any equation of state reflects a **hierarchy of models**: each level covers a regime the previous one cannot. Beyond Van der Waals, equations such as Peng–Robinson or the virial expansion serve chemical engineering at industrial pressures.

From the perspective of state variables, **intensive** quantities ([[P]], [[T]], molar density) must be distinguished from **extensive** ones ([[V]], internal energy). The ideal gas law connects both: dividing [[V]] by [[n]] gives the molar volume, whose product with [[P]] depends only on [[T]] and [[R]], regardless of the total amount of gas — a fact essential for comparing states of different gas quantities.

> [!WARNING]
> Equations of state describe **thermodynamic equilibrium states**. In a rapid non-quasi-static process (an explosion, a sudden free expansion), [[P]] and [[T]] are not uniform throughout the system, and the equation of state cannot be applied to the ongoing process — only to the initial and final equilibrium states.

## Deep physical interpretation

The ideal gas law is not a fundamental law derived from first principles of mechanics: it is a **phenomenological law** verified experimentally for low-density gases. Its rigorous theoretical derivation requires statistical mechanics (kinetic theory), where [[P]] emerges as the time-averaged momentum transfer of molecules hitting the wall. The result expressed in terms of the total number of molecules and Boltzmann's constant is equivalent to the ideal gas law, because the constant [[R]] is the product of Avogadro's number and Boltzmann's constant.

The linearity of the law in [[n]] at fixed ([[P]], [[T]]) reflects the fact that an ideal gas has no **inter-molecular correlations**: adding one more mole does not alter the behaviour of those already present. This statistical independence is precisely what breaks down in real gases at high density.

## Order of magnitude

At standard laboratory conditions (1 atm, 25 °C):

- Molar volume: approximately 24.5 L/mol (equivalent to 0.0245 m³/mol).
- For a 10 L balloon at atmospheric pressure and 25 °C: [[n]] is approximately 0.41 mol, representing some 2.5 × 10²³ molecules.

At high industrial pressure (200 atm, 300 K):

- Ideal molar volume: ≈ 122 mL/mol; the real value for N₂ is ≈ 118 mL/mol (Z ≈ 0.97), a ~3 % deviation — acceptable for many purposes.

If a calculation yields a molar volume of 22.4 m³/mol instead of 22.4 L/mol, the error factor is 1000: this almost always indicates that [[V]] was expressed in litres when the formula requires m³. Comparison with the 22.4 L/mol reference is the fastest sanity check available.

## Personalized resolution method

1. **Identify the unknown**: which variable (P, V, T, or n) is sought?
2. **List data with units**: convert T to kelvin, [[V]] to m³, [[P]] to pascals if [[R]] is used in its SI value.
3. **Select the rearrangement**: choose the form of the ideal gas law that isolates the unknown.
4. **Substitute and compute**: verify that units cancel correctly (pascals times cubic metres equal joules).
5. **Validate the result**: a laboratory pressure is typically between 10³ and 10⁶ Pa; the volume of a gas sample of a few grams is usually between 10⁻³ and 10⁻¹ m³.

> [!TIP]
> If the problem gives initial and final conditions of the same closed system ([[n]] constant), use the **combined gas law**: the ratio of the product [[P]]·[[V]] to [[T]] is conserved between the initial and final states, avoiding explicit calculation of [[n]] and [[R]].

## Special cases and extended example

**Isothermal process** ([[T]] constant, Boyle's law): the product [[P]]·[[V]] is conserved. Isothermally compressing the volume to half doubles [[P]]. The isotherm is a hyperbola in the P–V diagram.

**Isobaric process** ([[P]] constant, Charles's law): the ratio [[V]]/[[T]] is conserved. A balloon in a 60 °C (333 K) water bath instead of 20 °C (293 K) increases its volume by the factor 333/293 (approximately 1.14), i.e. by 14 %.

**Isochoric process** ([[V]] constant, Gay-Lussac's law): the ratio [[P]]/[[T]] is conserved. A sealed container heated from 20 °C to 100 °C (293 K to 373 K) experiences a pressure increase of 27 %.

**Mixture of ideal gases** (Dalton's law): the total pressure equals the sum of the partial pressures of each component, each computed as if it occupied the total volume alone at the same temperature.

## Real student questions

**Why must I use kelvin? Can't I use Celsius consistently?**

No. The ideal gas law requires [[T]] in kelvin as an absolute measure of kinetic energy, always positive and proportional to T in kelvin, never in Celsius. At 0 °C the kinetic energy is not zero; it is only at 0 K (−273.15 °C) that it is zero. Using Celsius introduces errors of 50–100 % at everyday temperatures.

**When does the ideal gas law "fail"?**

When molecules are very close together (high [[P]] or low [[T]], near the condensation point). A practical rule: if the compressibility factor Z deviates from 1 by more than 5 %, a more accurate equation such as Van der Waals is warranted.

**What does [[R]] actually mean?**

[[R]] is the mean translational kinetic energy per mole per kelvin. Its unit J/(mol·K) directly indicates that raising the temperature of 1 mol of ideal gas by 1 K increases its total translational kinetic energy by (3/2)R ≈ 12.5 J.

**Can an equation of state predict condensation?**

The ideal gas law cannot: it does not distinguish phases. The Van der Waals equation does predict liquid–vapour coexistence qualitatively, though with significant quantitative errors near the critical point.

## Cross-cutting connections and study paths

Equations of state are the foundation of the [thermodynamics of processes](leaf:fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos): every quasi-static process in a gas (isothermal, isobaric, isochoric, adiabatic) corresponds to a trajectory on the surface of the ideal gas law. The work done in each process is the integral of the product [[P]]·d[[V]] along that path, depending on how [[P]] varies with [[V]].

[Kinetic theory of gases](leaf:fisica-clasica/termodinamica/gases-y-modelos/teoria-cinetica) provides the microscopic justification: [[P]] is a statistical consequence of molecular motion, and [[T]] is proportional to the mean translational kinetic energy of the molecules. Connecting both perspectives — macroscopic (equation of state) and microscopic (kinetic theory) — is one of the greatest conceptual achievements of classical thermodynamics.

Deviations from ideal behaviour connect with molecular physics: the Van der Waals parameters a and b reflect intermolecular interactions that explain properties such as surface tension and boiling points.

## Final synthesis

The ideal gas law is the simplest and most widely used equation of state in thermodynamics: it establishes that the state of any low-density gas is completely determined by three measurable macroscopic variables. Its domain of validity is broad in practice, and its deviations toward real gas behaviour are systematically modelled through extensions such as the Van der Waals equation. Mastering this relationship — including its limits — is the indispensable starting point for tackling any thermodynamic problem involving gases.
