const e=`# Exam-type example

## Problem statement

An aluminium bar 0.5 m long with circular cross-section is free at both ends. Aluminium density is 2700 kg/m³ and its Young modulus is 70 GPa. Calculate the fundamental longitudinal frequency, the third longitudinal harmonic frequency, and the fundamental torsional frequency knowing that the shear modulus is 26 GPa.

Problem data:

- Bar length: 0.5 m
- Density: 2700 kg/m³
- Young modulus: 70 GPa
- Shear modulus: 26 GPa
- Boundary conditions: free-free

## Data

- [[L_barra]]: 0.5 m
- [[rho]]: 2700 kg/m³
- [[E_young]]: 70 times ten to the ninth Pa
- [[G_shear]]: 26 times ten to the ninth Pa
- Boundary conditions: free-free

## System definition

A slender, homogeneous, isotropic bar of circular cross-section with both ends free of stress. Linear elastic regime is assumed and wavelength much greater than transverse dimension (slender bar hypothesis valid for the first modes).

## Physical model

Free-free longitudinal resonance formulae are applied using [[v_L]] and free-free torsional formulae using [[v_T]]. The key magnitudes are [[f_n]], [[n_modo]], [[v_L]], [[v_T]] and [[L_barra]].

## Model justification

The slender bar formulae are valid because the length (0.5 m) is much greater than a typical diameter (centimetres). The non-dispersive wave approximation is adequate for the first modes. The model would lose accuracy for very high-order modes where wavelength approaches the diameter.

## Symbolic solution

First the longitudinal velocity is calculated:

{{f:velocidad_longitudinal_barra}}

[[E_young]] and [[rho]] are substituted to obtain [[v_L]].

Then the fundamental longitudinal frequency (n = 1):

{{f:freq_longitudinal_libre_libre}}

[[n_modo]] = 1, [[v_L]] and [[L_barra]] are substituted.

For the third harmonic, the same formula is used with n = 3.

The shear velocity:

{{f:velocidad_corte_barra}}

[[G_shear]] and [[rho]] are substituted to obtain [[v_T]].

Fundamental torsional frequency (n = 1):

{{f:freq_torsional_libre_libre}}

## Numerical substitution

Longitudinal velocity: square root of 70 times ten to the ninth divided by 2700. This is the square root of 25.93 times ten to the sixth, giving 5092 m/s. Therefore [[v_L]] ≈ 5092 m/s.

Fundamental longitudinal frequency: 1 times 5092 divided by 2 times 0.5, which is 5092 divided by 1, giving 5092 Hz. Therefore [[f_n]] (mode 1) ≈ 5092 Hz.

Third longitudinal harmonic: 3 times 5092 divided by 1, giving 15276 Hz. Therefore [[f_n]] (mode 3) ≈ 15276 Hz.

Shear velocity: square root of 26 times ten to the ninth divided by 2700. This is the square root of 9.63 times ten to the sixth, giving 3103 m/s. Therefore [[v_T]] ≈ 3103 m/s.

Fundamental torsional frequency: 1 times 3103 divided by 2 times 0.5, which is 3103 Hz. Therefore [[f_n]] (torsional, mode 1) ≈ 3103 Hz.

## Dimensional validation

- [[v_L]]: square root of Pa / (kg/m³) = square root of (kg/(m s²)) / (kg/m³) = square root of m²/s² = m/s ✓
- [[f_n]]: velocity divided by length produces a frequency in hertz.

## Physical interpretation

The longitudinal fundamental (5092 Hz) is in the high-pitched audible range. The third harmonic (15276 Hz) remains audible for most people. The torsional fundamental (3103 Hz) is lower than the longitudinal, as expected since G is less than E.

The ratio between [[v_L]] and [[v_T]] is 1.641. Verification with the elastic-moduli relationship gives the same value, so the longitudinal and torsional velocities are coherent with aluminium's Poisson ratio.

The first modes of this bar cover the 3 kHz to 15 kHz range. If the bar is struck, the ear perceives a high-pitched sound with multiple harmonic components.

Physically, the calculation separates two effects that are easy to confuse: geometry fixes the spacing through [[L_barra]], while material stiffness fixes the wave speeds. Because aluminium has a large [[E_young]] compared with its [[rho]], the longitudinal resonances sit high in the audible band; because [[G_shear]] is smaller, the torsional series starts lower.

# Real-world example

## Context

A quality control technician uses the impulse excitation method (ASTM E1876 standard) to measure the Young modulus of a ceramic test piece. The specimen is a rectangular bar 100 mm long with mass 15 g. It is struck at the centre and the fundamental longitudinal resonance frequency is measured with a microphone. The result is 42500 Hz.

## Physical estimation

The bar is in free-free condition (supported at the nodal points of the first flexural mode to avoid damping it). For the longitudinal mode, the fundamental is:

{{f:freq_longitudinal_libre_libre}}

Solving for [[v_L]] from the reference above gives a longitudinal velocity of 8500 m/s for the measured length and frequency.

Density is obtained from mass and dimensions. If the cross-section is 10 mm by 5 mm: volume = 0.1 times 0.01 times 0.005 = 5 times ten to the minus six m³. Density = 0.015 / (5 times ten to the minus six) = 3000 kg/m³. This is typical of a technical ceramic.

Using the longitudinal bar velocity relationship, the Young modulus obtained from density and [[v_L]] is approximately 217 GPa.

## Interpretation

The value of 217 GPa is typical of a dense ceramic such as alumina (Al2O3, E ≈ 350-400 GPa) or silicon nitride (Si3N4, E ≈ 300 GPa) or zirconia (ZrO2, E ≈ 210 GPa). The result suggests zirconia or an intermediate-stiffness ceramic.

This method is non-destructive, fast (a measurement takes seconds), and provides E with precision better than 1% if dimensions and mass are measured carefully. It is the industrial standard for elastic characterisation of ceramics, sintered metals and brittle materials where a tensile test would be destructive.

If the measured frequency were lower than expected, it would indicate internal porosity, microcracks or different composition. If higher, it would indicate a denser or stiffer material than expected, or a dimensional measurement error.
`;export{e as default};
