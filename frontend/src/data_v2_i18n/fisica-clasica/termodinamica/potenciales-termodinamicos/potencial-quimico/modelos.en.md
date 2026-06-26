## Ideal model

The standard model of chemical potential treats the mixture as **ideal**: the activity [[a]] of each component equals its mole fraction (or its reduced partial pressure for gases). Under this hypothesis, [[mu]] is computed directly as [[mu_std]] plus R·[[T]]·ln([[a]]), without any correction coefficients. This model is the starting point of all thermodynamics of phase equilibrium and chemical reactions at university level.

The ideal model allows calculation of vapour pressures via Raoult's law, chemical equilibrium constants via the law of mass action, and distribution coefficients between phases via Nernst's law, all from a single formalism.

## Hypotheses

The ideal mixture model rests on the following hypotheses:

- Interactions between different molecules are equal to interactions between molecules of the same type (zero enthalpy of mixing).
- The activity of each component equals its mole fraction (Raoult's law for the solvent) or its relative concentration (Henry's law for dilute solutes).
- [[T]] and p are uniform throughout the system; no internal gradients exist.
- The system is in thermodynamic equilibrium in the compared states.
- Activity coefficients are equal to 1 for all components.

## Quantitative validity domain

The ideal solution model is a good approximation for dilute solutions (solute mole fraction below 0.05) and for mixtures of chemically similar compounds (same nonpolar or polar character). For mixtures of compounds with very different polarities, the activity coefficient can deviate significantly from 1 even at moderate concentrations.

For gases, the ideal gas model for [[mu]] is valid up to a few bars; at higher pressures or near the critical point, real equations of state (van der Waals, Peng-Robinson) are needed to compute fugacity, which replaces [[a]].

## Model failure signals

The ideal model fails when:

- Positive or negative deviations from Raoult's law are observed in boiling diagrams; azeotropic mixtures are the clearest signal.
- Measured solubilities differ significantly from those predicted by the regular solution model.
- Activity coefficients measured experimentally (via electrochemical or vapour pressure methods) deviate from 1 by more than 10 %.
- The system involves electrolytes, where long-range ionic interactions cause activity coefficients to be much below 1 even at millimolar concentrations.

## Extended or alternative model

For non-ideal systems, the **activity coefficient** γ is introduced, modifying the activity by multiplication: effective [[a]] is γ times the ideal [[a]]. The Debye-Hückel model provides theoretical γ values for electrolytes at low concentration. For concentrated organic systems, group-contribution models (UNIFAC, NRTL) compute γ from interactions between molecular fragments.

In high-pressure fluid thermodynamics, fugacity replaces activity as the argument of the logarithm; fugacity is computed from cubic or perturbation equations of state.

## Operational comparison

| Criterion | Ideal model | Model with activity coefficient |
|---|---|---|
| Required data | Only [[mu_std]] and mole fraction or partial pressure | [[mu_std]] plus activity coefficients γ |
| Calculation complexity | Direct sum with logarithm | Requires parametric models or experimental γ data |
| Typical validity | Dilute solutions, similar compounds, gases at low pressure | Concentrated solutions, electrolytes, gases at high pressure |
| Expected error in γ | 0 % by definition in the ideal model | Can exceed 50 % for highly non-ideal mixtures |
| Main application | Introductory phase equilibrium, equilibrium constants | Industrial separation design, electrochemistry, biophysics |
