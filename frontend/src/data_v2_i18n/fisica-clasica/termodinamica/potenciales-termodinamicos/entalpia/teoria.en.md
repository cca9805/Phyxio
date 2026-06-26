# Enthalpy

## Conceptual context

Enthalpy [[H]] is the thermodynamic potential designed for processes that occur at **constant pressure**, the most common condition in laboratory, chemical industry, and biology. When an open vessel allows the system to exchange expansion work with the atmosphere, internal energy alone does not describe the heat exchange: the push-work term [[p]]·[[V]] must be added.

The concept arose from the practical need to tabulate reaction heats without measuring mechanical expansion work separately. Today, tables of **standard enthalpies of formation** allow prediction of the heat exchanged in thousands of reactions without performing any additional experiment.

Enthalpy sits in the tree of thermodynamic potentials alongside Gibbs free energy and Helmholtz free energy. Each potential governs a specific set of conditions: [[H]] governs when [[p]] is constant, Helmholtz free energy when volume is constant, and Gibbs free energy when both [[p]] and [[T]] are constant.

## 🟢 Essential level

Enthalpy [[H]] answers a simple question: when a process occurs at constant pressure, how much heat does the system exchange with the surroundings? The answer is [[DeltaH]]. If [[DeltaH]] is negative, the system releases heat and the process is **exothermic**; if positive, the system absorbs heat and the process is **endothermic**.

The intuition is as follows: internal energy [[U]] measures all energy stored molecularly, but at constant pressure the system also performs mechanical expansion work to push against the atmosphere. Enthalpy incorporates that work into a single quantity, so [[DeltaH]] captures both the change in internal energy and the expansion work exchanged with the surroundings.

## 🔵 Formal level

The definition of enthalpy combines internal energy with the pressure-volume product:

{{f:definicion_entalpia}}

In a constant-pressure process, the enthalpy change equals the exchanged heat:

{{f:calor_isobarico}}

This identity is the central result. Its most powerful consequence is **Hess's law**, which states that the enthalpy change of a process is independent of path:

{{f:ley_hess}}

Hess's law is a direct consequence of [[H]] being a state function. This allows computing [[DeltaH]] for a reaction by summing and subtracting enthalpies of known reactions, even if the direct reaction is not easily measurable. The indispensable condition is that all intermediate steps occur at the same constant pressure.

> [!NOTE]
> When reversing a reaction in a Hess cycle, the sign of [[DeltaH]] reverses too. When multiplying stoichiometric coefficients, [[DeltaH]] scales by the same factor.

> [!WARNING]
> Units must be consistent: if [[DeltaH]] is in kJ/mol, all other terms must be too. Mixing J and kJ produces factor-1000 errors that do not alter the sign and often go unnoticed.

## 🔴 Structural level

The identity [[DeltaH]] equals [[Qp]] is valid exclusively when [[p]] is constant. In a **bomb calorimeter** the volume is constant: the measured heat equals ΔU, not [[DeltaH]]. Applying the isobaric equation to an isochoric process is the most frequent conceptual error in calorimetry.

To convert between conditions, one uses the relation between [[DeltaH]] and the change in internal energy [[U]]. The difference is the expansion work term: if the process releases or absorbs gases, this term can be significant; if only solids or liquids are involved, the [[p]]·[[V]] term varies little and both quantities are approximately equal.

The **temperature dependence of [[DeltaH]]** is described by Kirchhoff's law: the variation of [[DeltaH]] with [[T]] is proportional to the difference in heat capacities between products and reactants. If products have higher heat capacity than reactants, [[DeltaH]] becomes less negative as [[T]] increases. This correction matters when the temperature range exceeds 100–200 K from the standard reference state.

**Hess's law** structures the calculation of [[DeltaH]] for complex reactions. The procedure is to decompose the target reaction into steps whose standard enthalpies of formation are tabulated, adjust stoichiometric coefficients, and sum algebraically. The fact that [[H]] is a state function guarantees a unique result regardless of the chosen steps.

> [!TIP]
> When building a Hess cycle, verify that all species cancel correctly by summing reactants and products. If a species remains that should not, there is a sign or coefficient error in one of the steps.

> [!WARNING]
> Standard enthalpies of formation are tabulated at 298 K and 1 bar. If the process occurs at another temperature or pressure, Kirchhoff's correction must be applied before using Hess's law.

## Deep physical interpretation

The [[p]]·[[V]] term in the definition of [[H]] has a concrete physical meaning: it represents the work the system must perform to push the surroundings and occupy its volume at the given pressure. When a gas expands at constant [[p]], it pushes the atmosphere and part of its internal energy becomes mechanical work. By adding that work to [[U]], enthalpy captures the total energy the system makes available to the surroundings as heat.

This interpretation explains why [[DeltaH]] is the relevant quantity in chemical reactions in an open laboratory: the chemist does not measure expansion work separately but incorporates it automatically by measuring the calorimeter heat at constant pressure.

## Order of magnitude

In typical combustion reactions, [[DeltaH]] reaches several hundred kJ/mol: methane combustion releases approximately 890 kJ/mol and hydrogen combustion about 286 kJ/mol. In strong acid-base reactions, the neutralization [[DeltaH]] is around 57 kJ/mol. For physical processes such as melting ice, [[DeltaH]] is only 6 kJ/mol, while water vaporization requires 44 kJ/mol.

A result of [[DeltaH]] in the MJ/mol range without explosives or nuclear reactions is a sign of a unit error: check whether data was entered in J instead of kJ. A result below 1 kJ/mol for an ordinary chemical reaction is also suspicious.

> [!TIP]
> Compare the order of [[DeltaH]] with the thermal molecular energy at room temperature, which is about 2.5 kJ/mol. A reaction with [[DeltaH]] of 500 kJ/mol releases energy equivalent to 200 times the thermal agitation of one molecule.

## Personalized resolution method

To compute [[DeltaH]] safely, follow this sequence:

1. **Verify process conditions**: confirm that pressure is constant. If the vessel is rigid, the process is isochoric and heat equals ΔU, not [[DeltaH]].
2. **Obtain data**: look up standard enthalpies of formation of reactants and products in thermodynamic tables, verifying they refer to the same reference temperature.
3. **Apply Hess's law**: sum enthalpies of formation of products minus those of reactants, each multiplied by its stoichiometric coefficient.
4. **Check the sign**: a process that visibly releases heat (combustion, explosion, strong neutralization) must give negative [[DeltaH]]. If positive, review the assignment of reactants and products.
5. **Check units**: confirm all values are in the same unit (J/mol or kJ/mol) before summing.

## Special cases and extended example

**Isochoric vs. isobaric process**: in a bomb calorimeter, the measured heat is ΔU. To obtain [[DeltaH]], the expansion work term must be added. For condensed-phase reactions (solids and liquids), this term is negligible because the volume change is very small. For reactions involving gases, the term can amount to several kJ/mol and must not be ignored.

**Enthalpy of solution**: when a salt dissolves in water, the exchanged heat depends on whether pressure is constant (the usual laboratory case). The enthalpy of solution includes the heat of lattice breaking (positive, endothermic) and the heat of ion hydration (negative, exothermic). The net sign determines whether dissolution cools or warms the solution. Table salt (NaCl) has a slightly positive enthalpy of solution (endothermic), which is why dissolving it slightly cools the water.

## Real student questions

**Why use [[DeltaH]] instead of [[U]] for laboratory reactions?**
In the laboratory, vessels are open and atmospheric pressure remains constant. The system exchanges expansion work with the atmosphere without the experimenter controlling it. By using [[DeltaH]], that work is automatically included and the calorimeter directly measures [[DeltaH]] without separately measuring volumes or pressures.

**What happens when [[DeltaH]] is exactly zero?**
No heat is exchanged at constant pressure. Mechanical work may still occur, but the system temperature does not change if heat capacity is non-zero. A process with zero [[DeltaH]] does not mean nothing happens; the system can still change its entropy and volume.

**Does Hess's law always work?**
It works whenever [[H]] is a state function, which holds for any thermodynamic system in equilibrium. The only practical condition is that all steps in the cycle are constant-pressure processes. If any step is at constant volume, the expansion work term must be included as a correction.

**Why does reversing a reaction change the sign of [[DeltaH]]?**
Because [[H]] is a state function: the path from A to B has the same [[DeltaH]] in magnitude as from B to A, but with the opposite sign. If carbon combustion releases 394 kJ/mol, synthesizing carbon from carbon dioxide absorbs exactly 394 kJ/mol.

## Cross-cutting connections and study paths

Enthalpy [[H]] is a direct component of **Gibbs free energy** (leaf: [Gibbs Free Energy](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/energia-libre-de-gibbs)), where it combines with [[T]] and entropy to determine process spontaneity. Mastering [[DeltaH]] is a prerequisite for interpreting the Gibbs criterion.

Kirchhoff's law connects enthalpy with **constant-pressure heat capacities**, studied in the [Heat capacity](leaf:fisica-clasica/termodinamica/calor/calor-especifico) leaf. The distinction between isobaric and isochoric processes connects with [Thermodynamic processes](leaf:fisica-clasica/termodinamica/procesos-termodinamicos) and with the first law of thermodynamics.

## Final synthesis

[[DeltaH]] is the heat of a constant-pressure process, the most common condition in chemistry and technology. Its additivity, guaranteed by Hess's law, allows computing enthalpies of reactions that cannot be measured directly from standard tables. Mastering its sign, its units, and the isobaric condition is mastering practical calorimetry.
