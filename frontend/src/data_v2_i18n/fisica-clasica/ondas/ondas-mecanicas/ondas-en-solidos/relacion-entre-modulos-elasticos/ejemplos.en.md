# Exam-type example


## Problem statement

A structural steel has a Young modulus of 210 GPa and a Poisson ratio of 0.29. The task is to calculate the shear modulus, the bulk modulus, the first Lame parameter, and to verify internal coherence using the relationship for E as a function of G and K.

Problem data:

- Young modulus: 210 GPa
- Poisson ratio: 0.29

## Data

- [[modulo_de_young]]: 210 GPa (210 times ten to the ninth Pa)
- [[nu_poisson]]: 0.29

These two data form an independent pair sufficient for an isotropic solid. [[modulo_de_young]] sets the scale of longitudinal stiffness and [[nu_poisson]] sets how that stiffness is partitioned between shear response and volumetric response. Because 0.29 lies inside the physical interval (-1, 0.5), [[modulo_de_cizalla]], [[modulo_de_compresibilidad]] and [[lambda_lame]] are expected to be positive and of the order of tens or hundreds of GPa, not MPa or TPa.

## System definition

The system is a homogeneous isotropic solid in the linear elastic regime. The material is assumed to have the same mechanical response in all directions. No loads are applied: the objective is to obtain the complete elastic constants from a known pair (E, nu).

## Physical model

The model uses the algebraic relationships of isotropic elasticity. The core magnitudes are [[modulo_de_young]], [[nu_poisson]], [[modulo_de_cizalla]], [[modulo_de_compresibilidad]] and [[lambda_lame]]. From E and nu the remaining constants are calculated using the conversion formulae.

## Model justification

The relationships are exact for any isotropic solid in the linear elastic regime. The only validity conditions are: material isotropy and nu values within the thermodynamic range (-1 to 0.5). Structural steel satisfies both conditions. The model would cease to be valid if the material were anisotropic (e.g. a laminated composite) or if it were outside the elastic regime.

## Symbolic solution

First the shear modulus is calculated:

{{f:relacion_G_E_nu}}

[[modulo_de_young]] and [[nu_poisson]] are substituted in the formula to obtain [[modulo_de_cizalla]].

Then the bulk modulus:

{{f:relacion_K_E_nu}}

[[modulo_de_young]] and [[nu_poisson]] are substituted to obtain [[modulo_de_compresibilidad]].

Then the first Lame parameter:

{{f:relacion_lambda_E_nu}}

[[modulo_de_young]] and [[nu_poisson]] are substituted to obtain [[lambda_lame]].

Finally verification with the nu-independent relationship:

{{f:relacion_E_G_K}}

The calculated values of [[modulo_de_cizalla]] and [[modulo_de_compresibilidad]] are substituted and the result is checked to equal the original [[modulo_de_young]].

## Numerical substitution

Shear modulus: 210 divided by 2 times (1 plus 0.29) gives 210 divided by 2.58, which is 81.40 GPa. Therefore [[modulo_de_cizalla]] ≈ 81.4 GPa.

Bulk modulus: 210 divided by 3 times (1 minus 2 times 0.29) gives 210 divided by 3 times 0.42, which is 210 divided by 1.26, which is 166.67 GPa. Therefore [[modulo_de_compresibilidad]] ≈ 166.7 GPa.

First Lame parameter: 210 times 0.29 divided by (1 plus 0.29) times (1 minus 0.58) gives 60.9 divided by 1.29 times 0.42, which is 60.9 divided by 0.5418, which is 112.41 GPa. Therefore [[lambda_lame]] ≈ 112.4 GPa.

Verification: 9 times 166.67 times 81.40 divided by (3 times 166.67 plus 81.40) gives 122071 divided by 581.4, which is 209.97 GPa. Matches [[modulo_de_young]] of 210 GPa within rounding. Coherence confirmed.

## Dimensional validation

- [[modulo_de_cizalla]]: Pa divided by dimensionless gives Pa ✓
- [[modulo_de_compresibilidad]]: Pa divided by dimensionless gives Pa ✓
- [[lambda_lame]]: Pa times dimensionless divided by dimensionless gives Pa ✓
- E verification: Pa times Pa divided by Pa gives Pa ✓

## Physical interpretation

The ratio [[cociente_g_e]] is 0.388, typical of metals with [[nu_poisson]] around 0.3. This means the material resists shear with a stiffness that is approximately 39% of its tensile stiffness because lateral contraction couples tensile deformation to shear response in an isotropic solid.

The ratio [[cociente_k_e]] is 0.794. The material is not especially incompressible: its bulk modulus is of the same order as Young modulus. Therefore compression and tension remain comparable resistance modes; if [[nu_poisson]] were closer to 0.5 (like rubber), K would be orders of magnitude greater than E and volumetric deformation would be strongly suppressed.

Positive [[lambda_lame]] confirms positive [[nu_poisson]] and shows that volumetric dilation increases normal stress in the usual direction for metals. A negative lambda would have indicated an auxetic material, where stretching produces lateral expansion and changes the balance between volumetric and deviatoric stiffness.

The cross-verification with the formula for E as a function of G and K confirms that all three calculations are mutually coherent. If any of them contained an error, this verification would immediately detect it.

# Real-world example


## Context

A non-destructive testing engineer measures P and S wave velocities in an aluminium part using ultrasonics. The measured longitudinal velocity is 6350 m/s and the transverse velocity is 3100 m/s. Aluminium density is 2700 kg/m³. The task is to determine E, G, K and nu of the material from these measurements.

## Physical estimation

The shear modulus is obtained directly from the transverse velocity: [[modulo_de_cizalla]] is density times S velocity squared, i.e. 2700 times 3100 squared, giving 25.95 GPa.

To obtain K, the relationship between P velocity and the moduli is used: P velocity squared is (K plus four thirds of G) divided by density. Solving: K is density times P velocity squared minus four thirds of G. This gives 2700 times 6350 squared minus four thirds of 25.95 times ten to the ninth, which is 108.89 minus 34.60, giving 74.29 GPa. Therefore [[modulo_de_compresibilidad]] ≈ 74.3 GPa.

Now E is calculated with the formula as a function of G and K: 9 times 74.3 times 25.95 divided by (3 times 74.3 plus 25.95) gives 17352 divided by 248.85, which is 69.7 GPa. Therefore [[modulo_de_young]] ≈ 69.7 GPa.

Finally nu: (3K minus 2G) divided by (2 times (3K plus G)) gives (222.9 minus 51.9) divided by (2 times 248.85), which is 171 divided by 497.7, giving 0.344. Therefore [[nu_poisson]] ≈ 0.344.

The quantitative reading is coherent even before consulting a table: [[cociente_g_e]] is about 25.95/69.7 = 0.37 and [[cociente_k_e]] is about 74.3/69.7 = 1.07. This describes a metal that resists compression slightly more than tension and whose shear stiffness is roughly a little over one third of its longitudinal stiffness. If the estimate gave E near 20 GPa or 200 GPa for aluminium, or nu outside the expected 0.30-0.36 range, the ultrasonic measurement should be checked.

## Interpretation

The obtained values are typical for aluminium: E around 70 GPa, nu around 0.33-0.35. The agreement with tabulated values confirms that the part has no significant defects altering wave velocities.

This method is non-destructive: measuring two wave velocities and density suffices to obtain all four elastic constants of the material. It is the basis of elastic characterisation by ultrasonics, routinely used in quality control of metallic, ceramic and composite materials.

If the calculated values differed significantly from tabulated ones, it would indicate material heterogeneity, presence of internal defects (porosity, microcracks), anisotropy induced by the manufacturing process, or temperature outside the usual range.