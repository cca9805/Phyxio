## Conceptual errors


### Error 1: Confusing stiffness with strength

**Por que parece correcto**

In everyday language, a "stiff" material is intuitively associated with a "strong" material. This leads the student to believe that a high Young modulus automatically implies the material withstands more load before breaking.

**Por que es incorrecto**

Stiffness (Young modulus) measures how much the material deforms under load, not how much it can withstand before failing. Glass has an [[modulo_de_young]] similar to aluminium (both around 70 GPa) but its fracture strength is much lower. A material can be very stiff and simultaneously very brittle.

**Señal de deteccion**

The student claims that "steel is stronger than aluminium because its Young modulus is higher", without considering fracture stress or toughness.

**Correccion conceptual**

[[modulo_de_young]] describes the slope of the stress-strain curve in the elastic range. Fracture strength is an independent property that depends on defects, microstructure and failure mechanism.

**Mini-ejemplo de contraste**

A glass bar and an aluminium bar have similar [[modulo_de_young]]. Under the same load, both deform almost equally. However, the glass bar breaks at a much lower stress than the aluminium one. If stiffness equalled strength, both would fail together, which does not happen.

**Why it seems correct**

Check 1: In Elastic Properties of Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: Believing that the Poisson ratio can take any value

**Por que parece correcto**

Being a ratio of strains, the student assumes that [[nu_poisson]] can take any real value, as with any mathematical quotient.

**Por que es incorrecto**

Thermodynamic stability requires the elastic energy to be positive-definite, which restricts [[nu_poisson]] to the interval between minus one and 0.5 for isotropic materials. Outside this range, the material would be unstable and deform spontaneously.

**Señal de deteccion**

The student obtains a value of [[nu_poisson]] greater than 0.5 or less than minus one and does not question the result. Alternatively, when substituting into the formula for [[modulo_de_compresibilidad]], a negative value is obtained and the inconsistency is not detected.

**Correccion conceptual**

The limits of [[nu_poisson]] are a consequence of the positivity of [[modulo_de_young]], [[modulo_de_cizalla]] and [[modulo_de_compresibilidad]]. If [[nu_poisson]] exceeds 0.5, [[modulo_de_compresibilidad]] becomes negative (material unstable under pressure). If [[nu_poisson]] is less than minus one, [[modulo_de_cizalla]] becomes negative.

**Mini-ejemplo de contraste**

If 0.6 is entered as [[nu_poisson]] in the bulk modulus formula, the result is a negative value: the material would expand when pressure is applied. This is physically absurd and signals that the data is incorrect.

## Model errors

**Why it seems correct**

Check 6: In Elastic Properties of Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3: Applying the isotropic model to anisotropic materials

**Por que parece correcto**

The isotropic model is the simplest and the one taught first. The student tends to generalise it to all materials without verifying the isotropy hypothesis.

**Por que es incorrecto**

Materials such as wood, carbon fibre composites or certain crystals have mechanical properties that vary strongly with direction. Using two elastic constants for these materials produces incorrect predictions for both strains and wave velocities.

**Señal de deteccion**

The student calculates [[modulo_de_cizalla]] from [[modulo_de_young]] and [[nu_poisson]] measured in one direction and obtains a value that differs notably from the experimentally measured value in another direction.

**Correccion conceptual**

Before using the isotropic moduli relationship, verify that the material behaves isotropically. If properties depend on direction, more constants are needed (up to 21 in the general triclinic case).

**Mini-ejemplo de contraste**

Wood has [[modulo_de_young]] of approximately 12 GPa along the fibre direction but only 0.6 GPa perpendicular to it. If the 12 GPa value is used with the isotropic formula to estimate [[modulo_de_cizalla]], the result differs greatly from the experimental value. The isotropic model fails because wood is clearly anisotropic.

## Mathematical errors

**Why it seems correct**

Check 11: In Elastic Properties of Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 4: Confusing strain with displacement

**Por que parece correcto**

Both quantities relate to "how much" the material moves and share length units (in the case of displacement). The student often uses them as synonyms.

**Por que es incorrecto**

The [[epsilon]] is dimensionless (length divided by original length), while displacement is a quantity with length units. Substituting a displacement in the Young modulus formula instead of strain produces a result with incorrect dimensions.

**Señal de deteccion**

When calculating [[modulo_de_young]], the result has force units (N) instead of pressure (Pa), or differs from the expected value by several orders of magnitude.

**Correccion conceptual**

Strain is always the quotient of length change over original length. Check the dimensions of the result: [[modulo_de_young]] must have pressure units `[M L⁻¹ T⁻²]`.

**Mini-ejemplo de contraste**

A 2 m bar elongates 1 mm. If the student uses 0.001 m as strain instead of dividing 0.001 by 2 (obtaining 5×10⁻⁴), the calculated Young modulus differs from the correct value by a factor of 2000, an error that completely changes the order of magnitude.

## Interpretation errors

**Why it seems correct**

Check 16: In Elastic Properties of Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.


### Error 5: Assuming a material with high Poisson ratio is always soft

**Por que parece correcto**

Rubber has [[nu_poisson]] close to 0.5 and is soft, suggesting a correlation between high Poisson and low stiffness.

**Por que es incorrecto**

The Poisson ratio measures the coupling between deformations, not absolute stiffness. Gold has [[nu_poisson]] of 0.42 yet is a metal with [[modulo_de_young]] of 79 GPa. Near-incompressibility (Poisson close to 0.5) does not imply low stiffness in tension or shear.

**Señal de deteccion**

The student claims that "since [[nu_poisson]] is high, the material deforms easily" without specifying the type of stress.

**Correccion conceptual**

High [[nu_poisson]] indicates the material conserves its volume when deformed (approaches incompressible behaviour). Stiffness against tension is given by [[modulo_de_young]] and against shear by [[modulo_de_cizalla]], which are independent magnitudes from [[nu_poisson]] in terms of order of magnitude.

**Mini-ejemplo de contraste**

Gold has [[nu_poisson]] of 0.42 (high) and [[modulo_de_young]] of 79 GPa. Cork has [[nu_poisson]] close to zero (low) and [[modulo_de_young]] of barely a few MPa. The material with the lowest Poisson is much softer, contradicting the hypothesis that high Poisson means soft.

## Quick self-control rule

Always verify that the three calculated elastic moduli ([[modulo_de_young]], [[modulo_de_cizalla]], [[modulo_de_compresibilidad]]) satisfy the fundamental isotropic relation. Calculate [[modulo_de_cizalla]] from [[modulo_de_young]] and [[nu_poisson]] using the factor-of-two formula and compare with the tabulated value. If the discrepancy exceeds 5%, review the input data and the isotropy hypothesis.

**Why it seems correct**

Check 21: In Elastic Properties of Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.