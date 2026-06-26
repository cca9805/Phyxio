## Ideal model

The ideal model is the Bernoulli one-dimensional bar: an elastic, homogeneous, isotropic solid of uniform cross-section, whose length is much greater than its transverse dimension. Longitudinal (or torsional in circular section) propagation is non-dispersive, with constant velocity independent of frequency. Boundary conditions are ideal (perfectly free or perfectly clamped end).

In this model, the natural frequency spectrum is exactly harmonic: frequencies are integer (or odd-integer) multiples of the fundamental. Modes are pure trigonometric functions (sines and cosines). Orthogonality is exact.

## Hypotheses

- Slender bar: length much greater than transverse dimension. The mode wavelength must be much greater than the diameter.

- Homogeneity: properties ([[modulo_de_young]], [[modulo_de_cizalla]], [[rho]]) uniform throughout the bar.

- Isotropy: same response in all directions.

- Linear elasticity: strain is proportional to stress and reversible.

- Ideal boundary conditions: free end means exactly zero stress; fixed end means exactly zero displacement.

- No damping: vibration persists indefinitely once excited.

- No coupling between vibration types: longitudinal, torsional and flexural modes are independent.

## Quantitative validity domain

The model is accurate when the mode wavelength [[lambda_n]] is much greater than d (diameter or transverse dimension). Quantitatively, the Rayleigh-Love correction is negligible (less than 1%) when [[lambda_n]] > 10d, corresponding to n < L/(5d) for free-free.

For a half-metre bar with 10 mm diameter, the model is accurate up to roughly the tenth mode, with frequencies of order 50 kHz in steel. Beyond that, lateral inertia dispersion becomes significant.

Damping is negligible for metals (Q > 1000) but important for polymers (Q ≈ 10-100), where resonance peaks broaden and shift slightly.

## Model failure signals

- Measured frequencies of high harmonics are not exact multiples of the fundamental: lateral inertia dispersion.

- Measured quality factor is low (broad peaks): non-negligible damping, viscoelastic model needed.

- Longitudinal and torsional frequencies interact (coupling): non-circular section or curved bar.

- Frequencies depend on excitation amplitude: nonlinearity, outside linear elastic regime.

- Real boundary conditions are imperfect: an elastic support modifies frequencies relative to the ideal free or fixed model.

## Extended or alternative model

When to switch to another model: if any of the previous signals appears (dispersive high harmonics, broad peaks, modal coupling, elastic support or nonlinear amplitude response), switch to the alternative model that represents the dominant mechanism: Pochhammer-Chree for high-frequency dispersion, viscoelasticity for damping, elastic support for real boundaries or finite elements for non-uniform geometry.

For high frequency, Pochhammer-Chree theory describes exact propagation in an elastic cylinder, including all modes (longitudinal, torsional, flexural and mixed) with their complete dispersion curves.

For bars with damping, the viscoelastic model uses a complex modulus E* = E(1 + i eta), where eta is the loss factor. Resonance frequencies shift slightly and acquire a finite bandwidth.

For elastic boundary conditions (support with finite stiffness), natural frequencies shift relative to the ideal model and must be solved with a transcendental equation.

For bars of variable cross-section or graded material, numerical methods (finite elements) or WKB solutions for smooth profiles are used.

## Operational comparison

| Criterion | Slender bar model | Pochhammer-Chree model |
|---|---|---|
| Harmonics | Exactly equally spaced | Dispersive (not equally spaced) |
| Phase velocity | Constant ([[velocidad_de_onda_longitudinal_en_barra]] or [[velocidad_de_onda_de_corte]]) | Frequency-dependent |
| Coupled modes | No | Yes (longitudinal-radial coupled) |
| Validity range | lambda >> d | Any lambda/d ratio |
| Complexity | Closed-form formula | Numerical transcendental equation |
| Typical use | Tuning fork design, ASTM E1876 | High-frequency ultrasonics, waveguides |