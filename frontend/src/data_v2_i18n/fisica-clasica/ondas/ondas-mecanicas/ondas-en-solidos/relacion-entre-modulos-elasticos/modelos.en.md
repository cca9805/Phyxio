## Ideal model

The ideal model treats the solid as a continuous, homogeneous, isotropic and linearly elastic medium. Under these conditions, the stiffness tensor has exactly two independent components. All relationships between moduli are exact algebraic consequences of this symmetry. There are no approximations: the formulae are identities valid for any pair of values within the thermodynamic range.

The constants that are related are [[modulo_de_young]], [[modulo_de_cizalla]], [[modulo_de_compresibilidad]], [[nu_poisson]], [[lambda_lame]] and the second Lame parameter (mu, identical to G). Any pair of them determines the rest.

## Hypotheses

- Isotropy: the material has the same mechanical response in all directions. If there is crystallographic texture, lamination or fibres, this hypothesis is violated.

- Linear elasticity: the stress-strain relationship is linear and reversible. The relationships are invalid in plastic, viscoelastic or large deformation regimes.

- Homogeneity: properties are uniform throughout the volume. If there are gradients (functionally graded materials), each point has its own constants.

- Continuum medium: atomic structure and defects are ignored. The relationships are macroscopic and averaged over scales much larger than interatomic distance.

- Thermodynamic stability: strain energy is positive definite. This imposes G greater than zero, K greater than zero and -1 less than nu less than or equal to 0.5.

## Quantitative validity domain

The relationships are exact (not approximate) within the domain of isotropy and linear elasticity. The quantitative limits are those of the elastic regime of each material: typically strains less than 0.1% for metals and 1% for polymers.

The thermodynamic range of [[nu_poisson]] is strictly (-1, 0.5]. For nu exactly equal to 0.5, K diverges and the material is incompressible. For nu exactly equal to -1, G diverges.

All moduli must be positive (except [[lambda_lame]], which can be negative for negative nu). If a calculation produces negative G or K, there is a data error or the material is not a stable isotropic one.

## Model failure signals

- Experimentally measured moduli do not satisfy the algebraic relationships: indicates anisotropy or material heterogeneity.

- Calculated nu value falls outside (-1, 0.5]: indicates experimental error or non-linearly elastic material.

- E, G or K values depend on measurement direction: the material is not isotropic and an anisotropic model is needed.

- Moduli depend on excitation frequency: viscoelastic behaviour, not purely elastic.

- Moduli change with load amplitude: nonlinearity, outside the linear regime.

## Extended or alternative model

For anisotropic materials, the immediately superior model is orthotropic elasticity (9 independent constants) or transverse isotropy (5 constants). For general anisotropy, 21 constants are needed (full stiffness tensor in Voigt notation).

For viscoelastic behaviour, moduli are replaced by frequency-dependent complex moduli (E*, G*, K*), with real part (storage) and imaginary part (loss).

For large deformations, hyperelastic models are used (Mooney-Rivlin, Ogden, neo-Hookean) that are not expressed in terms of constant moduli.

When to switch to the extended model: when measurements in different directions differ systematically, when moduli depend on frequency, when strains exceed 1%, or when the material has oriented internal structure (fibres, layers, anisotropic crystals).

## Operational comparison

| Criterion | Isotropic model (2 constants) | Orthotropic model (9 constants) |
|---|---|---|
| Independent constants | 2 | 9 |
| Tests needed | 1 (uniaxial tension with lateral measurement) | Minimum 6 (tension in 3 axes + shear in 3 planes) |
| Conversion relationships | Closed formulae between any pair | No universal conversion formulae exist |
| Applicability | Polycrystalline metals, glass, amorphous polymers | Composites, wood, bone, non-cubic crystals |
| Computational complexity | Elementary arithmetic | 6x6 matrix algebra |