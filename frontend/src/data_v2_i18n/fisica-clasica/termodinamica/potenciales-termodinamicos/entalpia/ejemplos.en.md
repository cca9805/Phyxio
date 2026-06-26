# Exam-type example

## Problem statement

Two moles of methane are burned completely at constant pressure of 1 atm and initial temperature of 298 K. Given that the standard enthalpy of formation of methane is minus 74.8 kJ/mol, that of carbon dioxide is minus 393.5 kJ/mol, and that of liquid water is minus 285.8 kJ/mol, calculate [[DeltaH]] for the combustion of 2 mol of methane and classify the process as exothermic or endothermic.

## Data

- Enthalpy of formation of methane: minus 74.8 kJ/mol
- Enthalpy of formation of carbon dioxide: minus 393.5 kJ/mol
- Enthalpy of formation of liquid water: minus 285.8 kJ/mol
- Stoichiometric coefficients: 2 mol of methane produce 2 mol of carbon dioxide and 4 mol of liquid water
- Constant pressure: 1 atm

## System definition

The system is 2 mol of gaseous methane plus the oxygen required for complete combustion. The products are gaseous carbon dioxide and liquid water. The process occurs at constant pressure, so the exchanged heat equals [[DeltaH]]. The central quantity of the analysis is [[DeltaH]] of the overall reaction, computed via Hess's law from standard enthalpies of formation. The enthalpy [[H]] is the thermodynamic potential relevant here because pressure is constant.

Enthalpy [[H]] combines internal energy [[U]] with the mechanical term [[p]] times [[V]]. In this problem [[U]] and [[V]] are not computed separately: the Hess path gives [[DeltaH]] directly, and the isobaric condition lets the constant-pressure heat [[Qp]] be identified with that enthalpy change.

## Physical model

Hess's law is applied for state functions: [[DeltaH]] of the reaction is the weighted sum of the enthalpies of formation of the products minus those of the reactants, each multiplied by its stoichiometric coefficient. Enthalpies of formation of elements in their standard state are zero by definition and do not contribute to the cycle.

## Model justification

The Hess's law model is valid because enthalpy [[H]] is a state function and pressure is constant throughout the process. Tabulated enthalpies of formation are at 298 K and 1 bar, the standard condition matching the problem conditions. The reference temperature is the same for all terms, so no Kirchhoff correction is needed.

## Symbolic solution

The enthalpy change of the reaction is obtained as the sum of the enthalpies of formation of the products, each multiplied by its stoichiometric coefficient, minus the sum of the enthalpies of formation of the reactants with their respective coefficients. For the combustion of 2 mol of methane, the products contribute 2 times the enthalpy of formation of carbon dioxide plus 4 times the enthalpy of formation of liquid water, and the reactants contribute 2 times the enthalpy of formation of methane.

The starting definition that justifies using enthalpy rather than only internal energy is:

{{f:definicion_entalpia}}

## Numerical substitution

Product contribution: 2 times minus 393.5 plus 4 times minus 285.8, giving minus 787.0 plus minus 1143.2, equal to minus 1930.2 kJ.

Reactant contribution: 2 times minus 74.8, equal to minus 149.6 kJ.

[[DeltaH]] of the reaction is minus 1930.2 minus the value minus 149.6, giving minus 1930.2 plus 149.6, result: [[DeltaH]] is approximately minus 1780.6 kJ for 2 mol of methane.

## Dimensional validation

All terms are in kJ/mol multiplied by mol, giving kJ as the final unit. The result is an energy, consistent with the dimension of [[DeltaH]]. The value per mole of methane is approximately minus 890 kJ/mol, within the expected range for combustion reactions.

## Physical interpretation

The negative sign of [[DeltaH]] confirms that methane combustion is an **exothermic** process: the system releases heat to the surroundings at constant pressure. This implies that, because pressure is fixed, that heat is [[Qp]], not only an isolated change in [[U]]. Part of the released chemical energy appears as bond rearrangement, and part is associated with the expansion work included in the term [[p]] times [[V]].

The physical cause is the stability of the bonds formed: the double bonds between carbon and oxygen in carbon dioxide and the bonds between oxygen and hydrogen in water are more stable than the bonds broken in methane and oxygen. That is why the surroundings receive net energy. The heat released by combustion of 2 mol is approximately equivalent to the energy needed to heat 40 litres of water from 20 °C to 30 °C.

---

# Real-world example

## Context

In Portland cement manufacturing, calcium carbonate decomposes at high temperature into calcium oxide and carbon dioxide. This industrial process is the most energy-intensive stage of cement production. The dominant variable is [[DeltaH]] of the calcination reaction, which determines the kiln fuel consumption.

## Physical estimation

The decomposition of calcium carbonate is an endothermic process with [[DeltaH]] of approximately 178 kJ/mol. Producing one tonne of calcium oxide requires processing approximately 1.8 tonnes of calcium carbonate, representing about 18 mol per kilogram of product. The enthalpic demand per tonne of calcium oxide is on the order of 3 MJ, equivalent to the combustion of about 75 litres of diesel. This estimation allows dimensioning the kiln and the heat recovery system.

## Interpretation

The endothermic character of calcination means the kiln must continuously supply energy to sustain the reaction. Modern rotary kiln designs incorporate systems to recover the sensible heat of exhaust gases to preheat the raw material, reducing net fuel consumption by 30–40 % compared to kilns without recovery. Knowing [[DeltaH]] accurately allows optimising the energy balance of the process and reducing carbon dioxide emissions associated with fuel combustion.
