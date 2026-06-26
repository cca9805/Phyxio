const e=`## Historical problem

In the early 18th century, experimenters knew that different quantities of water at different temperatures produced different mixture temperatures, but they lacked a quantity that could measure how much heat a body "contained". The unanswered question was: given that different materials change temperature differently under the same heat, what property of the material or body governs that resistance to thermal change? The problem had immediate practical consequences for the design of furnaces, boilers, and metal smelting processes.

The central difficulty was the absence of a distinction between temperature and "quantity of heat". Both were measured with a thermometer and were confused: a hotter body seemed to "have more heat" without specifying whether that depended only on temperature or also on what material was present and how much.

## Prior conceptual difficulty

Caloric theory treated heat as an imponderable fluid that accumulated in bodies. Within that framework, the "quantity of heat" of a body depended on how much caloric it had absorbed, but no formula existed that related that quantity to temperature, mass, and material. Mixing experiments with substances at different temperatures showed that the equilibrium temperature depended on the masses and on some material property, but that property had no name or precise definition.

The mathematical difficulty was that the required quantity — [[C]] = [[Q]] / [[DeltaT]] — already required a quantitative definition of [[Q]] independent of [[DeltaT]], which was circular without a reference instrument.

## What changed

Joseph Black, between 1760 and 1762, was the first to explicitly distinguish between "temperature" (intensity of heat) and "quantity of heat" (accumulated caloric). Based on systematic mixing experiments, Black formulated that different materials have different "capacities for heat" per unit mass (what we now call specific heat capacity c), and that the [[C]] of a body depends on both its material and its quantity.

The quantitative formulation of [[C]] as Q / [[DeltaT]] was articulated more explicitly by Adair Crawford (1779) and Johan Wilcke (1772), who built tables of specific heat capacities for different substances using the mixing method. Wilcke was the first to define the total heat capacity of a body operationally: the quantity of heat needed to warm that specific body by one degree.

The distinction between extensive [[C]] (of the body) and intensive c (of the material) was consolidated by Lavoisier and Laplace in their "Mémoire sur la chaleur" (1783), where they also introduced the concept of calorimeter as an instrument to measure heats.

## Impact on physics

The concept of [[C]] allowed for the first time a quantitative calculation of the heat needed for any heating or cooling process, which was essential for the rational design of Watt's steam engines and the industrial processes of the late 18th century.

The Dulong-Petit law (1819), establishing that the product c · M_molar is approximately constant for elements (equal to 3R ≈ 25 J/(mol·K)), arose directly from the systematic analysis of [[C]] values measured by calorimetry. This law was the first periodic regularity discovered for the elements before the periodic table existed, and was used to estimate atomic masses of elements whose direct measurements were uncertain.

The theoretical explanation of the Dulong-Petit law at low temperatures (where [[C]] drops dramatically) was one of the first triumphs of quantum mechanics applied to solids: Einstein (1907) and Debye (1912) showed that [[C]] → 0 as T → 0 because the vibrational modes of the crystal lattice "freeze out" at low temperature.

## Connection with modern physics

Heat capacity has a precise expression in statistical mechanics: [[C]] = k_B · (variance of energy) / (k_B · T)², where k_B is Boltzmann's constant. This expression connects the macroscopic property [[C]] with energy fluctuations at the microscopic level: materials with many available energy modes (many thermal degrees of freedom) have larger [[C]].

In condensed matter physics, the anomaly in [[C]] near a phase transition temperature (a peak in [[C]](T)) is the most direct experimental signature of a second-order phase transition or a glass transition. High-precision [[C]](T) measurements are fundamental characterization tools in superconductors, superfluids, and magnetic materials.
`;export{e as default};
