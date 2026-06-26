## Conceptual errors


### Error 1: Believing that E, G and K are independent in an isotropic solid

**Por que parece correcto**

The student has seen each modulus defined separately (E in tension, G in shear, K in compression) and assumes that measuring all three requires three distinct, independent tests.

**Por que es incorrecto**

In an isotropic medium, spherical symmetry reduces the stiffness tensor to exactly two independent parameters. Knowing E and [[nu_poisson]] is sufficient to calculate [[modulo_de_cizalla]] and [[modulo_de_compresibilidad]] without additional tests. The three moduli are algebraically linked.

**Señal de deteccion**

The student proposes measuring E, G and K separately and then checking if they "agree", without recognising that agreement is a mandatory consequence of isotropy.

**Correccion conceptual**

In an isotropic medium, two constants determine all others. If the three experimentally measured moduli do not satisfy the algebraic relationships, the conclusion is that the material is not perfectly isotropic (anisotropy, heterogeneity) or that there is experimental error, not that the formulae fail.

**Mini-ejemplo de contraste**

E of 200 GPa, G of 77 GPa and nu of 0.30 are measured in a steel. Check: G should be 200/(2 times 1.30) i.e. 76.9 GPa. The measured 77 GPa agrees: the material is isotropic. If measured G were 60 GPa, it would indicate crystallographic texture or induced anisotropy.

**Why it seems correct**

Check 1: In Relationship Between Elastic Moduli, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: Assuming the Poisson ratio is always positive

**Por que parece correcto**

All common materials (metals, ceramics, conventional polymers) have positive [[nu_poisson]]. The student generalises, thinking negative nu is impossible.

**Por que es incorrecto**

Auxetic materials with negative [[nu_poisson]] exist, expanding laterally when stretched. They are special structures (re-entrant foams, certain crystals, metamaterials) with designed internal geometry. Thermodynamic limits allow nu from -1 to 0.5.

**Señal de deteccion**

The student discards a negative [[nu_poisson]] result as a "calculation error" or marks the formulae as invalid when nu is negative.

**Correccion conceptual**

The formulae are valid for all nu in (-1, 0.5]. A negative nu simply indicates a material with an unusual deformation mechanism. The algebraic relationships work exactly the same way.

**Mini-ejemplo de contraste**

An auxetic metamaterial with nu of -0.7 and E of 10 MPa has G of 10/(2 times 0.3) which is 16.7 MPa, greater than E/2. K would be 10/(3 times 2.4) which is 1.39 MPa, much less than E/3. Both results are physically valid.

## Model errors

**Why it seems correct**

Check 6: In Relationship Between Elastic Moduli, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3: Applying isotropic relationships to an anisotropic material

**Por que parece correcto**

The conversion formulae are simple and the student applies them to any solid material without verifying whether the material is isotropic.

**Por que es incorrecto**

In anisotropic materials (composites, wood, non-cubic crystals), the stiffness tensor has more than two independent components. The relationship G equals E divided by 2(1+nu) ceases to be valid. Each direction can have a different E and the notion of a single global nu does not exist.

**Señal de deteccion**

The student uses the conversion formula on a unidirectional composite or wood and obtains results inconsistent with values measured in different directions.

**Correccion conceptual**

Before applying the formulae in this leaf, verify that the material is reasonably isotropic. If anisotropic, the full stiffness matrix is needed (up to 21 independent constants for general symmetry, 9 for orthotropy, 5 for transverse isotropy).

**Mini-ejemplo de contraste**

A carbon/epoxy composite lamina has E1 of 135 GPa (fibre direction) and E2 of 10 GPa (transverse). If the isotropic formula is used with E of 135 GPa and a measured nu of 0.28, G of 52.7 GPa is obtained, but the real G12 is only 5 GPa. The discrepancy reveals anisotropy.

## Mathematical errors

**Why it seems correct**

Check 11: In Relationship Between Elastic Moduli, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 4: Using the K formula without checking that the denominator does not vanish

**Por que parece correcto**

The student substitutes directly into K equals E/(3(1-2nu)) without examining the denominator.

**Por que es incorrecto**

When [[nu_poisson]] is exactly 0.5, the denominator vanishes and [[modulo_de_compresibilidad]] diverges. This is not a mathematical error but a real physical singularity (incompressible material). If the student substitutes nu of 0.5 without caution, they get infinite K or a division by zero.

**Señal de deteccion**

The student reports a "calculation error" when substituting nu of 0.499 or 0.5, or discards the result as "too large".

**Correccion conceptual**

When nu approaches 0.5, K legitimately grows: the material is nearly incompressible. It is not a calculation error. If nu is exactly 0.5, K is formally infinite and the model must be interpreted as a material that does not change volume under any finite pressure.

**Mini-ejemplo de contraste**

Rubber with E of 3 MPa and nu of 0.4999: K is 3/(3 times 0.0002) which is 5000 MPa (5 GPa). With nu of 0.49999: K is 50 GPa. The value grows but is physically correct: rubber has K much greater than G.

## Interpretation errors

**Why it seems correct**

Check 16: In Relationship Between Elastic Moduli, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.


### Error 5: Interpreting lambda as a directly measurable physical stiffness

**Por que parece correcto**

Lambda has pressure units (Pa) like E, G and K, and appears in the same table of elastic constants. The student assumes it corresponds to a specific mechanical test.

**Por que es incorrecto**

[[lambda_lame]] does not correspond to any pure test. It is a coefficient of the tensorial formulation multiplying volumetric dilation. It cannot be measured in isolation like E (uniaxial tension) or G (pure torsion) or K (hydrostatic pressure). Its utility is computational and theoretical, not experimental.

**Señal de deteccion**

The student proposes a test to "measure lambda" or interprets its sign as indicating some specific type of stiffness.

**Correccion conceptual**

Lambda is a parameter of algebraic convenience. Its sign indicates the sign of nu (positive lambda when positive nu, negative lambda when negative nu, zero lambda when zero nu). Its value is always calculated from other moduli, never directly measured.

**Mini-ejemplo de contraste**

For steel (nu 0.29), lambda is 112 GPa. For cork (nu approx. 0), lambda is 0. For an auxetic (nu -0.3), lambda is negative. In no case does lambda have a direct mechanical reading comparable to saying "tensile stiffness is E" or "shear stiffness is G".

## Quick self-control rule

Always verify that G is between 0 and E/2 (equality when nu is zero), that K is greater than or equal to E/3 (equality when nu is zero), and that the equation for E as a function of G and K reproduces the original E value. If any of these conditions fails, check whether nu is within the allowed range and whether the numerical substitution is correct.

**Why it seems correct**

Check 21: In Relationship Between Elastic Moduli, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.