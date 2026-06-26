# Chemical Potential

## Conceptual context

Chemical potential [[mu]] is the thermodynamic quantity governing matter exchange between phases or components of a multicomponent system, in the same way that temperature governs heat exchange and pressure governs mechanical work exchange. The concept was introduced by Josiah Willard Gibbs in the 1870s as the missing piece to extend classical thermodynamics to systems of variable composition.

In practice, [[mu]] answers questions such as: in which direction does a solute spontaneously flow between two solutions? At what temperature do liquid and vapour coexist? Under what conditions does a crystal grow rather than dissolve? All these questions share a unified criterion: equality or inequality of [[mu]] between the phases or components involved.

Within the tree of thermodynamic potentials, [[mu]] is the **partial derivative of Gibbs free energy [[G]] with respect to the number of moles**, evaluated at constant T and p. This positions it as the intensive potential that completes [[G]] in systems of variable composition.

## 🟢 Essential level

The central idea of chemical potential is surprisingly simple: **matter flows spontaneously from where [[mu]] is higher to where [[mu]] is lower**, exactly as heat flows from higher to lower temperature. When [[mu]] is the same in all phases of a system, net matter exchange stops and the system has reached **phase equilibrium**.

This analogy with temperature is the most powerful intuitive key. Just as one does not need to know exactly what entropy is to use temperature as a criterion for thermal equilibrium, one does not need to explicitly compute [[G]] to use [[mu]] as a criterion for matter equilibrium. What matters is the difference in [[mu]] between regions of the system.

## 🔵 Formal level

The precise definition of [[mu]] starts from the Gibbs free energy [[G]] of the system:

{{f:mu_definicion}}

This partial derivative evaluates how much free energy the system gains or loses when an infinitesimal mole of component i is added, holding T, p and the amounts of all other components fixed. Its unit is J/mol.

In real systems, [[mu]] is computed from its standard value and the activity [[a]] of the component:

{{f:mu_actividad}}

The logarithmic term captures the contribution of the actual composition: higher activity [[a]] means higher [[mu]] and a greater tendency for the component to escape from the phase. The equilibrium condition between two phases α and β for the same component is:

{{f:equilibrio_fases}}

> [!NOTE]
> For the pure component in its standard state, [[a]] is 1 and [[mu]] equals [[mu_std]]. The logarithmic expression is the correction that introduces the actual composition.

> [!WARNING]
> [[T]] must be in kelvin in the expression of [[mu]]. Using degrees Celsius produces a scale error in the R·[[T]] term that distorts all equilibrium calculations.

## 🔴 Structural level

Gibbs's phase rule connects the number of components, the number of phases and the degrees of freedom of the system. This rule is derived directly from the criterion of equality of [[mu]] between all phases: each equality condition introduces a constraint equation that reduces the degrees of freedom.

In a single-component system (water, for example), three phases coexist at the triple point. The three [[mu]] equality conditions (solid = liquid = vapour) fix T and p completely, leaving zero degrees of freedom. On the liquid-vapour coexistence curve only one equality condition exists, leaving one degree of freedom: for each T there is exactly one defined vapour pressure.

The **dependence of [[mu]] on temperature** at constant pressure has a deep implication: its slope is minus the molar entropy of the component. This explains why the [[mu]] vs T curves of different phases have different slopes and cross at transition temperatures. The phase with higher molar entropy (usually vapour or liquid) has a more negative slope: its [[mu]] decreases faster with T, which explains why it dominates at high temperature.

> [!TIP]
> The [[mu]] vs T diagram is the central graphical tool for reading single-component phase diagrams. The stable phase at each temperature is always the one with lower [[mu]]; crossings of the curves mark the transition temperatures.

> [!WARNING]
> The equality [[mu]]_α = [[mu]]_β assumes T and p are equal in both phases. In systems with pressure gradients (semipermeable membrane, fluid column) the equilibrium condition is modified with additional osmotic or gravitational work terms.

The difference in [[mu]] between two states is the driving force for all matter transfer processes: dissolution, precipitation, distillation, extraction, membrane transport. The larger the [[mu]] difference, the farther the system is from equilibrium and the more intense the transfer tendency.

## Deep physical interpretation

The logarithmic term R·[[T]]·ln([[a]]) in the expression of [[mu]] has a purely entropic origin. Diluting a component increases the number of accessible configurations of the system (raises the entropy of mixing), which lowers [[mu]] relative to the pure state. This decrease in [[mu]] is the thermodynamic reason why solutes dissolve, gases mix and solids dissolve in solvents.

The partial molar free energy that is [[mu]] is not directly observable in the laboratory: only differences in [[mu]] between phases are measured, which translate into vapour pressures, solubilities, membrane potentials or electrochemical cell voltages.

## Order of magnitude

At room temperature (298 K), the term R·[[T]] is approximately 2480 J/mol. For an activity of 0.01 (very dilute solution), the logarithmic term is R·[[T]]·ln(0.01), which is approximately minus 11.4 kJ/mol. For [[a]] of 0.5, the term is approximately minus 1.7 kJ/mol.

Typical values of [[mu_std]] range from minus 500 kJ/mol for very stable organic compounds to positive values of tens of kJ/mol for unstable compounds. A result of [[mu]] in the MJ/mol range indicates a unit error in [[mu_std]].

> [!TIP]
> The scale of R·[[T]] at room temperature (2.5 kJ/mol) is the reference energy for judging whether the composition term matters. If [[mu_std]] is on the order of hundreds of kJ/mol and the activity difference is small, the logarithmic term is negligible and [[mu]] ≈ [[mu_std]].

## Personalized resolution method

To compute [[mu]] and apply the equilibrium criterion:

1. **Identify the components and phases** of the system and write the equilibrium condition ([[mu]]_phase1 = [[mu]]_phase2 for each component).
2. **Obtain [[mu_std]]** from thermodynamic tables for each component in its standard reference state.
3. **Determine [[a]]** for each component in each phase (mole fraction for ideal solutions, partial pressure in bars for ideal gases).
4. **Compute [[mu]]** using the logarithmic expression, with [[T]] in kelvin and [[R]] in J/(mol·K).
5. **Compare [[mu]]** between phases: the direction of spontaneous flow is toward the phase of lower [[mu]]. If equal, the system is at equilibrium.

## Special cases and extended example

**Pure component**: when [[a]] is 1, [[mu]] = [[mu_std]]. This occurs for the pure solvent before adding solute or for a pure gas at 1 bar. Adding any solute reduces [[a]] of the solvent below 1 and thus lowers [[mu]] of the solvent, which explains freezing-point depression, boiling-point elevation and osmotic pressure.

**Solid-liquid equilibrium**: at the melting point, [[mu]] of solid and liquid are equal. If a solute is dissolved in the liquid, [[mu]] of the liquid drops (solvent activity below 1), shifting equilibrium to lower temperatures: the melting point decreases. This is the origin of cryoscopic depression, quantified by the cryoscopic constant of the solvent.

## Real student questions

**Why does [[mu]] decrease when a component is diluted?**
Because dilution increases the entropy of mixing: there are more possible configurations for the dilute system than for the concentrated one. The entropic contribution to chemical potential is negative (R·[[T]] multiplied by a negative logarithm of [[a]] < 1), reducing [[mu]] below the pure standard state value.

**Does phase equilibrium require equal concentration in both phases?**
No. It requires equal [[mu]], which depends on both [[mu_std]] (which may differ between phases) and on activity. At liquid-vapour equilibrium the component concentration in the vapour is very different from that in the liquid, yet the [[mu]] values are equal.

**What happens if [[mu]] of a component differs greatly between two phases in contact?**
The system is far from equilibrium. The component flows massively and spontaneously toward the phase of lower [[mu]] until the difference is reduced. The rate depends on kinetics, but thermodynamics guarantees that the final equilibrium corresponds to equal [[mu]].

**How is [[mu]] related to the vapour pressure of a liquid?**
At liquid-vapour equilibrium, [[mu]] of the component in the vapour equals [[mu]] in the liquid. For ideal vapour, [[mu]] is [[mu_std]] plus R·[[T]]·ln([[a]]) where [[a]] is the partial pressure in bars. Equating with [[mu]] of the liquid yields Raoult's law for vapour pressure.

## Cross-cutting connections and study paths

[[mu]] connects directly with **Gibbs free energy** (leaf: [Gibbs Free Energy](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/energia-libre-de-gibbs)) as its partial derivative with respect to moles. The spontaneity criterion ΔG < 0 at constant T and p translates, in multicomponent systems, into a decrease of the total chemical potential with the process.

The relationship between [[mu]] and the **equilibrium constant** connects this leaf with chemical kinetics and electrochemistry, where the cell potential is directly proportional to the difference in [[mu]] between reactants and products. Understanding [[mu]] is also a prerequisite for studying **solution thermodynamics** and activity coefficients.

## Final synthesis

[[mu]] is the universal criterion for matter equilibrium: equality of [[mu]] between phases means no net component transfer. Its logarithmic expression in terms of [[a]] connects the formal thermodynamic definition with experimental data on concentration, partial pressure and activity, making [[mu]] the central tool for analysing phase diagrams, solubilities and equilibrium reactions.
