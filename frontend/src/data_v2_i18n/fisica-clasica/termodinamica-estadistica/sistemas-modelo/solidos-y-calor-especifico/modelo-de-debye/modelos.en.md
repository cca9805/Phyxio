## Ideal model

The ideal Debye model represents a crystalline solid as a continuous elastic network whose collective vibrations are acoustic phonons. Its central question is how [[calor_especifico]] changes when [[temperatura]] is compared with [[temperatura_debye]]. Instead of giving every atom its full classical energy immediately, the model counts how many vibrational modes are thermally accessible. The [[frecuencia_debye]] provides the spectral cutoff, and the [[funcion_debye]] summarizes the statistical contribution of the modes.

## Hypotheses

- Simple crystalline lattice: if the solid is amorphous or highly defective, the real density of states may not follow Debye’s form.
- Harmonic vibrations: if anharmonicity is strong, [[calor_especifico]] may include thermal expansion and phonon-phonon coupling effects.
- Thermal equilibrium: if there is no single [[temperatura]], equilibrium formulas cannot be applied directly.
- Acoustic-mode dominance: if optical modes are important, the model can miss part of the heat capacity.
- Nearly constant volume: if data are measured at constant pressure, expansion may add extra contribution.

## Quantitative validity domain

At low [[temperatura]], the cubic law is a reasonable approximation when [[temperatura]]/[[temperatura_debye]] < 0.1. In the intermediate region, 0.1 ≤ [[temperatura]]/[[temperatura_debye]] ≤ 2, the integral form should be used.

{{f:calor_especifico_debye_integral}}

At high [[temperatura]], if [[temperatura]]/[[temperatura_debye]] > 3 and no phase transition occurs, [[calor_especifico_molar]] approaches the classical value.

{{f:limite_dulong_petit}}

The [[temperatura_debye]] can be obtained from [[frecuencia_debye]] when the spectral cutoff is known.

{{f:temperatura_debye}}

## Model failure signals

A clearly linear low-[[temperatura]] contribution to [[calor_especifico]] often indicates electronic heat capacity, especially in metals. A curve that fails to approach a plateau near 3R per mole may reveal optical modes, complex composition, or non-comparable measurement conditions. Abrupt jumps suggest phase transitions. If the fit requires a different [[temperatura_debye]] in each narrow [[temperatura]] interval, a single Debye scale is not capturing the actual spectrum.

## Extended or alternative model

For crystals with several atoms per unit cell, a Debye-Einstein model can combine acoustic modes with optical-like localized modes. In metals at low [[temperatura]], an electronic term is added to [[calor_especifico]]. In non-crystalline solids, measured densities of states or glass models are more suitable. Switching model is appropriate when the goal is no longer just the general trend, but accurate fitting of experimental detail.


When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.
## Operational comparison

| Situation | Useful model | Key variable | Expected signal |
| Very low [[temperatura]] | Cubic Debye law | [[temperatura_debye]] | [[calor_especifico]] grows as T³ |
| Intermediate [[temperatura]] | Debye integral | [[funcion_debye]] | Smooth curve without simple power |
| High [[temperatura]] | Dulong-Petit | [[constante_gases]] | Plateau near 3R |
| Cold metal | Debye + electrons | [[calor_especifico]] | Extra linear term |