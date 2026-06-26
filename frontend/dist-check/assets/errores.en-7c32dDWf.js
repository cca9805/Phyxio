const e=`## Conceptual errors

### Error 1: Confusing stiffness with strength

**Por que parece correcto**

In everyday language, a "stiff" material is intuitively associated with a "strong" material. This leads the student to believe that a high Young modulus automatically implies the material withstands more load before breaking.

**Por que es incorrecto**

Stiffness (Young modulus) measures how much the material deforms under load, not how much it can withstand before failing. Glass has an [[E_young]] similar to aluminium (both around 70 GPa) but its fracture strength is much lower. A material can be very stiff and simultaneously very brittle.

**Señal de deteccion**

The student claims that "steel is stronger than aluminium because its Young modulus is higher", without considering fracture stress or toughness.

**Correccion conceptual**

[[E_young]] describes the slope of the stress-strain curve in the elastic range. Fracture strength is an independent property that depends on defects, microstructure and failure mechanism.

**Mini-ejemplo de contraste**

A glass bar and an aluminium bar have similar [[E_young]]. Under the same load, both deform almost equally. However, the glass bar breaks at a much lower stress than the aluminium one. If stiffness equalled strength, both would fail together, which does not happen.

### Error 2: Believing that the Poisson ratio can take any value

**Por que parece correcto**

Being a ratio of strains, the student assumes that [[nu_poisson]] can take any real value, as with any mathematical quotient.

**Por que es incorrecto**

Thermodynamic stability requires the elastic energy to be positive-definite, which restricts [[nu_poisson]] to the interval between minus one and 0.5 for isotropic materials. Outside this range, the material would be unstable and deform spontaneously.

**Señal de deteccion**

The student obtains a value of [[nu_poisson]] greater than 0.5 or less than minus one and does not question the result. Alternatively, when substituting into the formula for [[K_bulk]], a negative value is obtained and the inconsistency is not detected.

**Correccion conceptual**

The limits of [[nu_poisson]] are a consequence of the positivity of [[E_young]], [[G_shear]] and [[K_bulk]]. If [[nu_poisson]] exceeds 0.5, [[K_bulk]] becomes negative (material unstable under pressure). If [[nu_poisson]] is less than minus one, [[G_shear]] becomes negative.

**Mini-ejemplo de contraste**

If 0.6 is entered as [[nu_poisson]] in the bulk modulus formula, the result is a negative value: the material would expand when pressure is applied. This is physically absurd and signals that the data is incorrect.

## Model errors

### Error 3: Applying the isotropic model to anisotropic materials

**Por que parece correcto**

The isotropic model is the simplest and the one taught first. The student tends to generalise it to all materials without verifying the isotropy hypothesis.

**Por que es incorrecto**

Materials such as wood, carbon fibre composites or certain crystals have mechanical properties that vary strongly with direction. Using two elastic constants for these materials produces incorrect predictions for both strains and wave velocities.

**Señal de deteccion**

The student calculates [[G_shear]] from [[E_young]] and [[nu_poisson]] measured in one direction and obtains a value that differs notably from the experimentally measured value in another direction.

**Correccion conceptual**

Before using the isotropic moduli relationship, verify that the material behaves isotropically. If properties depend on direction, more constants are needed (up to 21 in the general triclinic case).

**Mini-ejemplo de contraste**

Wood has [[E_young]] of approximately 12 GPa along the fibre direction but only 0.6 GPa perpendicular to it. If the 12 GPa value is used with the isotropic formula to estimate [[G_shear]], the result differs greatly from the experimental value. The isotropic model fails because wood is clearly anisotropic.

## Mathematical errors

### Error 4: Confusing strain with displacement

**Por que parece correcto**

Both quantities relate to "how much" the material moves and share length units (in the case of displacement). The student often uses them as synonyms.

**Por que es incorrecto**

The [[epsilon]] is dimensionless (length divided by original length), while displacement is a quantity with length units. Substituting a displacement in the Young modulus formula instead of strain produces a result with incorrect dimensions.

**Señal de deteccion**

When calculating [[E_young]], the result has force units (N) instead of pressure (Pa), or differs from the expected value by several orders of magnitude.

**Correccion conceptual**

Strain is always the quotient of length change over original length. Check the dimensions of the result: [[E_young]] must have pressure units \`[M L⁻¹ T⁻²]\`.

**Mini-ejemplo de contraste**

A 2 m bar elongates 1 mm. If the student uses 0.001 m as strain instead of dividing 0.001 by 2 (obtaining 5×10⁻⁴), the calculated Young modulus differs from the correct value by a factor of 2000, an error that completely changes the order of magnitude.

## Interpretation errors

### Error 5: Assuming a material with high Poisson ratio is always soft

**Por que parece correcto**

Rubber has [[nu_poisson]] close to 0.5 and is soft, suggesting a correlation between high Poisson and low stiffness.

**Por que es incorrecto**

The Poisson ratio measures the coupling between deformations, not absolute stiffness. Gold has [[nu_poisson]] of 0.42 yet is a metal with [[E_young]] of 79 GPa. Near-incompressibility (Poisson close to 0.5) does not imply low stiffness in tension or shear.

**Señal de deteccion**

The student claims that "since [[nu_poisson]] is high, the material deforms easily" without specifying the type of stress.

**Correccion conceptual**

High [[nu_poisson]] indicates the material conserves its volume when deformed (approaches incompressible behaviour). Stiffness against tension is given by [[E_young]] and against shear by [[G_shear]], which are independent magnitudes from [[nu_poisson]] in terms of order of magnitude.

**Mini-ejemplo de contraste**

Gold has [[nu_poisson]] of 0.42 (high) and [[E_young]] of 79 GPa. Cork has [[nu_poisson]] close to zero (low) and [[E_young]] of barely a few MPa. The material with the lowest Poisson is much softer, contradicting the hypothesis that high Poisson means soft.

## Quick self-control rule

Always verify that the three calculated elastic moduli ([[E_young]], [[G_shear]], [[K_bulk]]) satisfy the fundamental isotropic relation. Calculate [[G_shear]] from [[E_young]] and [[nu_poisson]] using the factor-of-two formula and compare with the tabulated value. If the discrepancy exceeds 5%, review the input data and the isotropy hypothesis.
`;export{e as default};
