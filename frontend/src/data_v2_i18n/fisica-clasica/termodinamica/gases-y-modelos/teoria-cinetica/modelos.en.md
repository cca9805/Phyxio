## Ideal model

The standard kinetic model in this leaf treats the gas as a collection of [[N]] point-like molecules of mass [[m_mol]] moving in a volume [[V]] without interacting with each other except through perfectly elastic and instantaneous collisions with the walls. In this model, all internal energy of the gas is kinetic and translational: there is no intermolecular potential energy and no active rotational degrees of freedom.

The central simplification is the **ideal gas hypothesis**: molecules are mathematical points with mass but no spatial extent, and forces between them are strictly zero outside the instant of collision. This hypothesis allows [[P]], [[v_rms]] and [[E_k_mol]] to be calculated with three closed equations and no adjustable parameters, making the model a first-class pedagogical and computational tool.

## Hypotheses

- Molecules are **point-like**: their own size is negligible compared to the mean distance between them. If this hypothesis fails (high pressure), the effective available volume decreases and the real pressure exceeds the model's prediction.

- Intermolecular interactions are **zero outside collisions**. If Van der Waals attractive forces are relevant (low temperature or high pressure), molecules slow down before reaching the wall, reducing the effective pressure below the ideal value.

- Collisions are **perfectly elastic**: total kinetic energy is conserved in each impact. If collisions were partially inelastic, the gas would lose energy at each bounce and temperature would drop spontaneously, contradicting thermodynamic equilibrium.

- The velocity distribution is **isotropic**: on average, equal numbers of molecules move in every direction. A preferred direction would produce different pressures on different walls, incompatible with mechanical equilibrium.

## Quantitative validity domain

The ideal kinetic gas model is accurate when the mean intermolecular distance is much greater than the molecular size. For most gases at pressures below 1 MPa and temperatures above 200 K, the model reproduces experimental data with errors below 1 %.

The most useful quantitative condition is the reduced density parameter: the approximation holds when the molar volume of the real gas is greater than 10 × the molar own volume of the molecules. For nitrogen at 300 K, this corresponds to pressures below approximately 3 MPa. Above this threshold, Van der Waals corrections become significant.

In temperature terms, the model fails for gases at [[T]] below the critical temperature of the gas (for example, 126 K for nitrogen, 33 K for hydrogen). Below the critical temperature the gas liquefies and the kinetic model of non-interacting point particles loses its meaning.

Numerical validity condition: the model applies when pressure [[P]] is below 1 × 10⁶ Pa for common diatomic gases at temperatures above 250 K.

## Model failure signals

- The gas density calculated from [[P]], [[T]] and [[N]] differs significantly from the experimental measurement: the molecular own volume is not negligible.

- The calculated pressure is higher than the measured value: attractive forces between molecules reduce the effective pressure below the ideal prediction.

- Cooling the gas below the dew point produces condensation: the ideal kinetic model does not predict phase transitions because it ignores intermolecular interactions.

- The relationship between [[P]], [[V]] and [[T]] no longer follows the ideal gas law, especially near the critical point where density fluctuations are large and the simple kinetic model is inadequate.

## Extended or alternative model

The first correction level beyond the ideal model is the **Van der Waals model**, which introduces two empirical parameters: an additive correction to volume (for molecular own size) and a correction to pressure (for attractive forces). This model reproduces real data with much greater accuracy near the condensation point and allows prediction of a critical point.

For polyatomic gases at high temperature (above several hundred kelvin), activation of rotational and vibrational degrees of freedom must be considered. In that regime, internal energy is no longer purely translational and the formula relating [[E_k_mol]] to [[T]] underestimates the total gas energy.

When to switch to the Van der Waals model: when operating conditions involve pressures above 1 MPa, temperatures near the critical temperature of the gas, or when the error of the ideal model exceeds 5 % in the prediction of volume or pressure.

## Operational comparison

| Criterion | Ideal kinetic model | Van der Waals model |
|---|---|---|
| Number of parameters | 0 (universal) | 2 (gas-specific) |
| Valid pressure range | Below 1 MPa (approx.) | Up to critical point and beyond |
| Phase transition prediction | No | Yes (approximate) |
| Computational complexity | Very low | Low to moderate |
| Suitable for teaching | Yes, without restrictions | Yes, university level |
| Includes molecular interactions | No | Yes (averaged form) |
