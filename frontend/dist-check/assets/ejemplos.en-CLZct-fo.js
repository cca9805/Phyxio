const e=`# Exam-type example

## Problem statement

An aluminium bar with rectangular cross-section (width 25 mm, height 8 mm in the bending direction) is excited transversely at a frequency of 2 kHz. Aluminium data: Young's modulus 70 GPa, volumetric density 2700 kg/m³.

Determine: flexural phase velocity, group velocity, flexural wavelength, and whether the Euler-Bernoulli model is applicable at this frequency.

## Data

- Section width: b of 0.025 m
- Section height (bending direction): h of 0.008 m
- Frequency: f of 2000 Hz
- [[E_young]]: 70 × 10⁹ Pa
- [[rho_vol]]: 2700 kg/m³

## System definition

Aluminium beam with rectangular cross-section (width 25 mm, height 8 mm), subject to transverse harmonic excitation in the direction of least inertia.

## Physical model

Euler-Bernoulli beam: constant section, isotropic linear elastic material, small deformations. The bending wave propagates with quadratic dispersion: [[omega]] is linked to [[k_flex]], [[v_fase_flex]] depends on frequency, and [[v_grupo_flex]] is twice the phase velocity.

## Model justification

The Euler-Bernoulli model is appropriate because the resulting wavelength (19.2 cm) is much greater than the section thickness (8 mm), satisfying the slender beam condition with a safety factor exceeding 4.

## Symbolic solution

{{f:velocidad_fase_flexional}}

[[I_seccion]] is computed as b·h³/12

[[rho_lin]] is computed as [[rho_vol]] × [[A_seccion]], with [[A_seccion]] equal to b × h

[[omega]] is computed as 2π × f

[[v_fase_flex]] is computed as the fourth root of ([[E_young]]·[[I_seccion]]·[[omega]]²/[[rho_lin]])

[[v_grupo_flex]] is computed as 2 × [[v_fase_flex]]

[[lambda_flex]] is computed as 2π / [[k_flex]], with [[k_flex]] equal to [[omega]]/[[v_fase_flex]]

## Numerical substitution

[[I_seccion]] equals 0.025 × (0.008)³ / 12 giving 1.067 × 10⁻⁹ m⁴

[[A_seccion]] equals 0.025 × 0.008 giving 2.0 × 10⁻⁴ m²

[[rho_lin]] equals 2700 × 2.0 × 10⁻⁴ giving 0.54 kg/m

[[omega]] equals 2π × 2000 giving 12 566 rad/s

Numerator EI·omega²: 74.69 × 1.579 × 10⁸ giving 1.179 × 10¹⁰

Quotient: 1.179 × 10¹⁰ / 0.54 giving 2.184 × 10¹⁰

Fourth root: 384 m/s

[[v_fase_flex]] gives **384 m/s**

[[v_grupo_flex]] equals 2 × 384 giving **768 m/s**

[[k_flex]] equals 12 566 / 384 giving 32.7 rad/m

[[lambda_flex]] equals 2π / 32.7 giving **0.192 m**

## Dimensional validation

\`[M L⁻¹ T⁻²]·[L⁴]·[T⁻²] / [M L⁻¹]\` gives \`[L⁴ T⁻⁴]\`

Fourth root: \`[L T⁻¹]\` ✓

The dimensional reduction gives a velocity scale, so the expression is consistent with a flexural phase speed.

Validity condition: [[lambda_flex]] (0.192 m) > 6 × h (0.048 m) ✓

## Physical interpretation

Phase velocity of 384 m/s is much lower than the longitudinal velocity of aluminium (5100 m/s), confirming that bending waves are much slower than longitudinal ones. Group velocity (768 m/s) is exactly double, verifying quadratic dispersion.

The wavelength of 19.2 cm indicates that approximately 5 complete wavelengths fit in a 1 m bar, corresponding to a free-propagation regime where boundary conditions are less dominant than propagation effects.

If frequency increased to 20 kHz, phase velocity would rise to 1215 m/s and [[lambda_flex]] would drop to 6 cm, still greater than 6h (4.8 cm) but already at the validity limit.

# Real-world example

## Context

An acoustic engineer must design an anti-vibration barrier for an industrial floor. Machines excite the floor through IPE-200 steel beams that transmit bending waves in the 100 Hz to 5 kHz range. The engineer needs to know the speed at which bending energy travels to dimension the isolation and predict response times.

## Physical estimation

This order-of-magnitude estimate checks the scale of [[v_grupo_flex]], [[lambda_flex]], and the model validity limit before choosing an isolation spacing.

IPE-200 profile data: [[E_young]] of 210 × 10⁹ Pa, [[I_seccion]] (strong axis) of 1943 × 10⁻⁸ m⁴, [[A_seccion]] of 28.5 × 10⁻⁴ m², [[rho_vol]] of 7850 kg/m³, [[rho_lin]] of 22.4 kg/m, total height 200 mm.

At 500 Hz ([[omega]] of 3142 rad/s): EI equals 4.08 × 10⁶ N·m². Applying the [[v_fase_flex]] formula: fourth root of (4.08 × 10⁶ × (3142)² / 22.4) gives **1158 m/s**. [[v_grupo_flex]] gives **2316 m/s**. [[lambda_flex]] gives **2.32 m**.

At 5 kHz ([[omega]] of 31 416 rad/s): [[v_fase_flex]] gives 3663 m/s. [[lambda_flex]] gives 0.73 m, which is less than 6 × 0.2 m (1.2 m): the Euler-Bernoulli model **is not valid** at this frequency for the IPE-200 on the strong axis.

## Interpretation

At 500 Hz, vibration energy traverses the IPE-200 beam at 2316 m/s. In a 10 m beam, transit time is 4.3 ms. Isolation must act in shorter times to be effective against transients.

The wavelength of 2.32 m at 500 Hz indicates that isolation discontinuities must be separated by less than one wavelength. With 3 m spacing between supports, the barrier is adequate at 500 Hz but insufficient at lower frequencies.

The crucial fact: group velocity (not phase velocity) determines how quickly vibration reaches the point to be protected. Using phase velocity would underestimate actual transmission by a factor of 2. The model validity limit for this profile is around 2 kHz; above this, Timoshenko should be used.
`;export{e as default};
