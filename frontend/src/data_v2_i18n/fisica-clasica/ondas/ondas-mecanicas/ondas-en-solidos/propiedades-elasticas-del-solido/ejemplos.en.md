# Exam-type example


## Problem statement

A cylindrical steel bar is subjected to an axial tensile force. The elastic properties of the material are known and the task is to determine the longitudinal and transverse strains, as well as to verify the coherence between elastic moduli through the fundamental isotropic relation.

Problem data:

- Applied normal stress: 150 MPa
- Young modulus of steel: 200 GPa
- Poisson ratio of steel: 0.30

## Data

- Applied normal stress: 150 MPa
- Young modulus: 200 GPa
- Poisson ratio: 0.30
- Hydrostatic pressure change for volumetric check: [[variacion_de_presion]] of 50 MPa
- Measured relative volume change: [[variacion_relativa_de_volumen]] of -3.7 times ten to the minus four

## System definition

The system consists of a cylindrical steel bar subjected to uniaxial tension along its longitudinal axis. The material is assumed isotropic, homogeneous and in the linear elastic regime. The cross-section remains flat and perpendicular to the axis during deformation (Bernoulli hypothesis). There are no lateral loads or boundary constraints preventing free transverse contraction.

## Physical model

The model is based on Hooke law for an isotropic solid under uniaxial tension. The core leaf magnitudes are [[modulo_de_young]], [[nu_poisson]] and [[modulo_de_cizalla]], connected by the fundamental relationship between moduli. The applied [[sigma]] produces a longitudinal [[epsilon]] and a transverse [[epsilon_transv]] coupled by [[nu_poisson]]. The [[modulo_de_cizalla]] is obtained from [[modulo_de_young]] and [[nu_poisson]] through the thermodynamic isotropic relation.

## Model justification

The linear isotropic elasticity model is valid because the applied stress (150 MPa) is well below the yield strength of common steel (between 250 and 600 MPa), so the stress-strain relationship is linear and reversible. Polycrystalline steel behaves isotropically at the macroscopic scale because the crystalline grains are randomly oriented.

The model would cease to be valid if the stress exceeded the yield strength (plasticity would appear), if the bar had a marked crystallographic texture (anisotropy) or if the temperature were high enough to significantly modify the elastic moduli.

## Symbolic solution

First, the longitudinal strain is calculated using the Young modulus definition:

{{f:modulo_young}}

Solving for strain:

{{f:modulo_young}}

The longitudinal strain results from the quotient of stress and Young modulus.

Next, the transverse strain is obtained through the Poisson ratio:

{{f:relacion_poisson}}

The transverse strain is the product of the Poisson ratio and the longitudinal strain [[epsilon_long]], with reversed sign (contraction).

Finally, coherence is verified by calculating the shear modulus from the fundamental relation:

{{f:relacion_E_G_nu}}

Solving for [[modulo_de_cizalla]]:

{{f:relacion_E_G_nu}}

The shear modulus is determined by the Young modulus and the Poisson ratio.

If the same steel were subjected to a tangential test, the shear stress [[tau]] would be the applied load and the angular strain [[gamma]] would be the observable response associated with [[modulo_de_cizalla]]; here the shear modulus is computed by isotropic coherence, not by a direct shear measurement.

As an independent volumetric check, the bulk modulus relation is used between pressure change [[variacion_de_presion]] and relative volume change [[variacion_relativa_de_volumen]]:

{{f:modulo_compresibilidad}}

This part does not replace the tensile test; it verifies that the volumetric response of the same solid is compatible with the expected order of magnitude for steel.

## Numerical substitution

For the longitudinal strain, dividing 150 MPa by 200 GPa (equivalent to 200 000 MPa) gives a value of 7.5 times ten to the minus four. Therefore [[epsilon]] ≈ 7.5×10⁻⁴.

For the transverse strain, multiplying the Poisson ratio (0.30) by the longitudinal strain and changing the sign gives minus 2.25 times ten to the minus four. Therefore [[epsilon_transv]] ≈ −2.25×10⁻⁴.

For the shear modulus, dividing 200 GPa by the product of 2 times (1 plus 0.30), that is dividing by 2.60, gives approximately 76.9 GPa. Therefore [[modulo_de_cizalla]] ≈ 76.9 GPa.

For the volumetric check, dividing the pressure change [[variacion_de_presion]] of 50 MPa by the absolute value of [[variacion_relativa_de_volumen]] gives approximately 135 GPa. Therefore [[modulo_de_compresibilidad]] remains in the expected order for steel, without contradicting the tensile response.

## Dimensional validation

- Longitudinal strain: `[M L⁻¹ T⁻²]` divided by `[M L⁻¹ T⁻²]` gives dimensionless `[1]` ✓
- Transverse strain: dimensionless times dimensionless gives dimensionless `[1]` ✓
- Shear modulus: `[M L⁻¹ T⁻²]` divided by dimensionless gives `[M L⁻¹ T⁻²]` ✓

## Physical interpretation

The longitudinal strain of 7.5×10⁻⁴ (less than 0.1%) confirms that steel barely elongates under 150 MPa, which is consistent with its high stiffness. For a one-metre-long bar, this value would represent an elongation of only 0.75 millimetres, imperceptible to the naked eye but perfectly measurable with an extensometer.

The transverse contraction of 2.25×10⁻⁴ shows that the bar narrows laterally when stretched, exactly in the proportion dictated by [[nu_poisson]]. If the Poisson ratio were higher (approaching 0.5, as in rubber), the lateral contraction would nearly equal the elongation and the volume would barely change. If it were lower (approaching zero, as in cork), the transverse contraction would be minimal and the volume would increase appreciably upon stretching.

The calculated shear modulus of 76.9 GPa is consistent with the tabulated value for steel (approximately 80 GPa, with variations depending on the alloy). This agreement validates the internal coherence of the isotropic model: knowing two of the three moduli allows predicting the third without additional measurement. If the calculated value differed significantly from the tabulated one, the isotropy hypothesis or the precision of input data would need to be questioned.

# Real-world example


## Context

In an ultrasonic material characterisation test, an engineer measures the velocities of longitudinal and transverse waves in an aluminium sample to determine its elastic constants without destroying the specimen. The test records a longitudinal velocity of 6350 m/s and a transverse velocity of 3100 m/s. The sample density is 2700 kg/m³.

## Physical estimation

From the velocities and density, the shear modulus is obtained as the product of density and the square of transverse velocity. Multiplying 2700 kg/m³ by the square of 3100 m/s (9.61×10⁶ m²/s²) gives approximately 25.9 GPa. Therefore [[modulo_de_cizalla]] ≈ 25.9 GPa.

The plane-wave modulus M is obtained as the product of density and the square of longitudinal velocity. Multiplying 2700 kg/m³ by the square of 6350 m/s (4.032×10⁷ m²/s²) gives approximately 108.9 GPa.

The bulk modulus is obtained by subtracting four-thirds of [[modulo_de_cizalla]] from the plane-wave modulus. Subtracting 34.6 GPa from 108.9 GPa gives approximately 74.3 GPa. Therefore [[modulo_de_compresibilidad]] ≈ 74.3 GPa.

The Poisson ratio can be estimated from the squared velocity ratio. Using the relation between velocities and Poisson, the result is approximately 0.34. Therefore [[nu_poisson]] ≈ 0.34.

Finally, [[modulo_de_young]] is obtained through the fundamental relation, multiplying 2 by [[modulo_de_cizalla]] by the sum of 1 plus [[nu_poisson]], which gives approximately 69.5 GPa.

## Interpretation

The obtained values (E approximately 69.5 GPa, G approximately 25.9 GPa, K approximately 74.3 GPa, nu approximately 0.34) are consistent with tabulated values for pure aluminium. This demonstrates that ultrasonic velocity measurement allows complete characterisation of the elastic properties of an isotropic material without destructive testing. The technique is fundamental in industrial quality control, weld inspection and structural integrity assessment.