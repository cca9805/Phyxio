const e=`## Ideal model

The **ideal gas** treats each molecule as a point particle with no spatial extent and no interaction forces with other molecules. The only mechanically relevant effect is the perfectly elastic collision with the container walls, which produces [[P]]. The internal energy of the system is purely translational kinetic energy, proportional to [[T]]. The available space equals the total volume [[V]] of the container: the molecules occupy no space of their own.

This idealisation yields the ideal gas law — mathematically linear and analytically tractable. The quantities the model correctly predicts are [[P]], [[V]], [[T]], and [[n]]; the internal energy per mole follows as (3/2)·[[R]]·[[T]] for monatomic gases. The quantities ignored are long-range intermolecular interactions and the finite size of each molecule.

## Hypotheses

- Molecules are mass points with no spatial extent.
  - Consequence if violated: at high density, molecular volume occupies an appreciable fraction of [[V]], and the real [[P]] exceeds the value predicted by the ideal model.
- There are no forces between molecules except during collision.
  - Consequence if violated: attractive forces reduce the effective [[P]]; repulsive forces increase it. Both effects become significant at high densities.
- Collisions with the walls are perfectly elastic (total kinetic energy is conserved).
  - Consequence if violated: there would be a net loss of kinetic energy, causing the gas to cool spontaneously — in contradiction with energy conservation in closed systems.
- The gas is in thermodynamic equilibrium or undergoing a quasi-static process.
  - Consequence if violated: [[P]] and [[T]] are not uniform throughout the system, and the equation of state cannot be applied to the ongoing process.

## Quantitative validity domain

The ideal gas is a good approximation when:

- Pressure is below 10 MPa (≈ 100 atm): at typical laboratory pressures (0.1–1 MPa), the error is below 1 % for common noble and diatomic gases (N₂, O₂, Ar).
- Temperature exceeds twice the critical temperature T_c of the gas: for N₂ (T_c: 126 K) the ideal gas law is valid above 200 K; for CO₂ (T_c: 304 K), temperatures above 450 K are needed to keep errors below 2 % at 1 atm.
- The number density of molecules is much smaller than the inverse cube of the molecular diameter (about 3 × 10⁻¹⁰ m), equivalent to pressures well below 10⁸ Pa.

A simple practical check: the **molar volume** (ratio [[V]]/[[n]]) must be much larger than the Van der Waals exclusion volume b, typically 20–60 mL/mol for common gases. Under ordinary conditions the molar volume is of the order of 22–25 L/mol, four orders of magnitude larger than b.

## Model failure signals

- **Compressibility factor departs from unity**: if the ratio (real P·V)/(n·R·T) deviates from 1 by more than 3–5 %, the ideal model is insufficient.
- **Real pressure below the predicted value**: indicates that attractive intermolecular forces are relevant; the typical signal at moderate-to-high pressure.
- **Real pressure above the predicted value**: indicates that excluded volume is not negligible; appears at very high pressures (above 100 atm for many gases).
- **Temperature close to the critical or boiling temperature**: the liquid–vapour coexistence curve in the P–T diagram marks the boundary where the model completely breaks down.
- **Polar molecules at moderate densities**: dipole–dipole interactions and hydrogen bonding cause the compressibility factor to deviate from unity at lower pressures than for non-polar gases.

## Extended or alternative model

Moving to the Van der Waals equation is warranted when [[P]] exceeds 20–50 atm combined with [[T]] below twice the critical temperature, or when the compressibility factor Z (measured or estimated) departs from unity by more than 5 %. If [[P]] is below 10 atm and [[T]] clearly exceeds the critical temperature, the ideal model is sufficient.

The Van der Waals equation introduces two empirical parameters: **a** (intermolecular attraction correction) and **b** (excluded volume per mole). The corrected [[P]] is obtained by dividing the product of [[n]], [[R]] and [[T]] by the reduced volume [[V]]−n·b, and subtracting the attraction term a·n²/[[V]]². The first adjustment exceeds the ideal prediction because less space is available; the second reduces it because molecules attract each other.

## Operational comparison

| Criterion | Ideal gas | Van der Waals |
|---|---|---|
| Parameters | Only [[R]] (universal) | a, b specific to each gas |
| Accuracy at 1 atm, T ≫ T_c | below 1 % error | below 1 % error |
| Accuracy at 100 atm, T ≈ 2·T_c | 5–20 % error | 2–5 % error |
| Condensation prediction | No | Yes (qualitatively) |
| Mathematical complexity | Linear (direct rearrangement) | Cubic equation in [[V]] |
| Recommended use | Quick estimates, ordinary conditions | Real gases at moderate–high pressures |

The principal advantage of the ideal model is its mathematical transparency: any variable can be isolated in a single algebraic step. The Van der Waals equation requires solving a cubic in [[V]], which in general demands numerical methods or tables.
`;export{e as default};
