const e=`## Ideal model

The **ideal gas** model treats every molecule as a point particle with no interaction with the rest. The only mechanical effect of the molecules is their elastic collision with the container walls, which generates pressure [[P]]. The mean translational kinetic energy is the only relevant form of internal energy and is proportional to [[T]]. The available volume is the entire volume [[V]] of the container: molecules occupy no space of their own.

This radical simplification produces the **ideal gas law**, which is mathematically tractable, dimensionally consistent, and empirically valid for most gases under ordinary conditions. The quantities the model predicts correctly are [[P]], [[V]], [[T]], and [[n]]; internal energy can also be calculated. The quantities ignored are long-range intermolecular interactions and the finite size of each molecule.

## Hypotheses

- Molecules are material points with no spatial extension.
  - Consequence if violated: at high density the molecular volume occupies an appreciable fraction of [[V]], and the real pressure exceeds the ideal prediction.
- Intermolecular forces are zero except during collision.
  - Consequence if violated: attractive forces reduce the effective pressure; repulsive forces increase it. Both effects become significant at high densities.
- Collisions are perfectly elastic (kinetic energy is conserved).
  - Consequence if violated: there would be a net loss of kinetic energy and the gas would cool spontaneously, contradicting energy conservation in closed systems.
- The gas is in thermodynamic equilibrium or undergoes quasi-static processes.
  - Consequence if violated: [[P]] and [[T]] are not uniform throughout the system and the equation of state cannot be applied to the ongoing process.

## Quantitative validity domain

The ideal gas law is a good approximation when:

- Pressures below 10 MPa (100 atm): at typical laboratory pressures (0.1–1 MPa) the error is below 1 % for noble and diatomic gases.
- Temperatures well above the critical temperature T_c of the gas: for N₂ (T_c of 126 K) the ideal gas law is valid above 200 K; for CO₂ (T_c of 304 K) the condition requires temperatures above 450 K for errors below 2 % at 1 atm.
- The molecular number density must be much less than the inverse cube of the molecular diameter (of the order of 3 × 10⁻¹⁰ m), corresponding to pressures well below 10⁸ Pa.

A simple practical inequality: the molar volume (ratio of [[V]] to [[n]]) must be much larger than the Van der Waals exclusion volume b, which is typically 20–60 mL/mol for common gases.

## Model failure signals

- **Compressibility factor deviates from unity**: if the ratio of the real [[P]]·[[V]] product to the ideal theoretical value, measured experimentally, differs from unity by more than 3–5 %, the ideal model is insufficient.
- **Real pressure lower than predicted**: indicates that intermolecular attraction forces are relevant; this is the usual signal at moderately high pressures.
- **Real pressure higher than predicted**: indicates that excluded volume is non-negligible; appears at very high pressures (above 100 atm for many gases).
- **Density approaches the saturation point**: the liquid–vapour coexistence curve in the P–T diagram marks the boundary where the model completely breaks down.
- **Temperatures below twice T_c**: many gases with high T_c (water, CO₂, propane) show significant deviations at room temperature when moderately compressed.

## Extended or alternative model

When it is advisable to make the transition to the Van der Waals model is when the problem conditions combine [[P]] above ~20–50 atm with [[T]] below twice the critical temperature of the gas, or when the compressibility factor Z — measured or estimated — departs from unity by more than 5 %. It is also worth switching to the extended model when condensation prediction is relevant to the design. In practice, if [[P]] is below 10 atm and [[T]] clearly exceeds the critical temperature, the ideal model is adequate; in any other case it is worth checking Z before accepting the result.

The **Van der Waals equation** is the first systematic extension of the ideal model. It introduces two empirical parameters: a (intermolecular attraction) and b (excluded volume). The Van der Waals pressure is computed by dividing the product of [[n]], [[R]] and [[T]] by the reduced volume (total volume minus the excluded volume \`n·b\`), then subtracting the attraction correction (proportional to a and to the square of [[n]]/[[V]]). The first term exceeds the ideal value because the available space is smaller; the second reduces it because the molecules attract each other.

Beyond Van der Waals, chemical engineering practice uses the **Peng–Robinson equation** (more accurate in the liquid–vapour coexistence region) and the **virial equation** (a power series in density, which converges better at intermediate densities).

## Operational comparison

| Criterion | Ideal gas (ideal gas law) | Van der Waals |
|---|---|---|
| Parameters | Only [[R]] (universal) | a, b specific to each gas |
| Accuracy at 1 atm, T well above T_c | below 1 % error | below 1 % error |
| Accuracy at 100 atm, T near 2·T_c | 5–20 % error | 2–5 % error |
| Condensation prediction | No | Yes (qualitatively) |
| Mathematical complexity | Linear (direct rearrangement) | Cubic equation in [[V]] |
| Recommended use | Quick estimates, ordinary conditions | Real gases at moderate-to-high pressures |

The main advantage of the ideal model is its mathematical transparency: any variable can be isolated directly in a single step. Van der Waals requires solving a cubic equation in [[V]], which in general demands numerical methods or tables.
`;export{e as default};
