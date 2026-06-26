## Conceptual errors


### Error 1: Believing that transmitted amplitude greater than one violates energy conservation

**Por que parece correcto**

The student associates "fraction" with a number between zero and one. If the transmitted amplitude is 1.5, they think energy has been created from nothing.

**Por que es incorrecto**

Energy transported by a wave is not proportional only to amplitude squared, but to the product of amplitude squared and medium impedance. When the second medium has lower impedance, amplitude must grow to maintain the power balance. The correct check is that [[coeficiente_de_reflexion_en_energia]] plus [[coeficiente_de_transmision_en_energia]] sums to exactly one.

**Señal de deteccion**

The student states that "the transmission formula is wrong because T comes out greater than one" or rejects a [[coeficiente_de_transmision_en_amplitud]] result exceeding unity.

**Correccion conceptual**

[[coeficiente_de_transmision_en_amplitud]] can reach up to 2 (free end limit). Conservation is verified with energy coefficients, not amplitude ones. Always check that [[coeficiente_de_reflexion_en_energia]] plus [[coeficiente_de_transmision_en_energia]] equals unity.

**Mini-ejemplo de contraste**

A wave passes from steel (high Z) to aluminium (low Z). [[coeficiente_de_transmision_en_amplitud]] is 1.46, but [[coeficiente_de_transmision_en_energia]] is 0.79. Amplitude grows because the receiving medium offers less resistance, but transmitted energy is only 79% of the incident.

**Why it seems correct**

Check 1: In Reflection and Transmission in Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: Confusing amplitude reflection coefficient with energy reflection coefficient

**Por que parece correcto**

Both are called "reflection coefficient" and both give a dimensionless number. The student does not distinguish between R and R squared.

**Por que es incorrecto**

[[coeficiente_de_reflexion_en_amplitud]] can be negative (phase inversion) and its absolute value indicates the fraction of reflected amplitude. [[coeficiente_de_reflexion_en_energia]] is always positive and directly gives the fraction of reflected energy. Using one instead of the other produces quadratic factor errors.

**Señal de deteccion**

The student substitutes [[coeficiente_de_reflexion_en_amplitud]] directly in a power balance without squaring, or discards a negative result believing it is erroneous.

**Correccion conceptual**

For energy balances always use [[coeficiente_de_reflexion_en_energia]] and [[coeficiente_de_transmision_en_energia]]. For phase information use [[coeficiente_de_reflexion_en_amplitud]]. The sign of [[coeficiente_de_reflexion_en_amplitud]] contains physical information (phase inversion) that must not be ignored.

**Mini-ejemplo de contraste**

At the steel-aluminium interface, [[coeficiente_de_reflexion_en_amplitud]] is -0.46. If the student uses it directly as energy fraction, they believe -46% of energy is reflected (absurd). The correct energy reflection is the square: 0.21, i.e. 21%.

## Model errors

**Why it seems correct**

Check 6: In Reflection and Transmission in Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3: Applying the normal-incidence formula to oblique incidence

**Por que parece correcto**

Normal-incidence formulae are simple and appear first in textbooks. The student applies them without verifying that the angle is effectively zero.

**Por que es incorrecto**

At oblique incidence, mode conversion appears: a P wave generates both P and S reflected and transmitted waves. Scalar formulae cease to be valid and Zoeppritz equations are needed. Additionally, critical angles can appear where reflection becomes total.

**Señal de deteccion**

The student uses the difference-over-sum formula for a problem specifying a nonzero angle, or when the statement mentions S waves generated at the interface.

**Correccion conceptual**

The formulae in this leaf are exclusive to normal incidence. If there is an angle, the matrix treatment or Zoeppritz equations must be used. Always check whether the problem specifies perpendicular incidence.

**Mini-ejemplo de contraste**

At 30 degrees incidence at a steel-aluminium interface, the P wave generates a significant reflected S wave. The reflected PP coefficient differs from the normal-incidence value, and a PS coefficient appears that the simple formula does not predict.

## Mathematical errors

**Why it seems correct**

Check 11: In Reflection and Transmission in Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 4: Reversing the impedance order in the formula

**Por que parece correcto**

The formula has [[impedancia_acustica_del_medio_2]] minus [[impedancia_acustica_del_medio_1]] in the numerator, but the student may write [[impedancia_acustica_del_medio_1]] minus [[impedancia_acustica_del_medio_2]] without realising it changes the sign.

**Por que es incorrecto**

Standard convention defines [[coeficiente_de_reflexion_en_amplitud]] as ([[impedancia_acustica_del_medio_2]] - [[impedancia_acustica_del_medio_1]]) / ([[impedancia_acustica_del_medio_2]] + [[impedancia_acustica_del_medio_1]]), where medium 1 is the incidence medium and medium 2 the transmission medium. Reversing the order inverts the coefficient sign and phase information is lost or inverted.

**Señal de deteccion**

The student obtains positive R when the wave goes from stiff to soft medium (should be negative), or negative when going from soft to stiff.

**Correccion conceptual**

Always fix the convention: medium 1 is where the incident wave travels, medium 2 is where it heads. [[impedancia_acustica_del_medio_2]] goes first in the numerator ([[impedancia_acustica_del_medio_2]] - [[impedancia_acustica_del_medio_1]]). Verify sign with the physical criterion: if the second medium is stiffer, R is positive.

**Mini-ejemplo de contraste**

Wave from aluminium to steel: [[impedancia_acustica_del_medio_1]] (aluminium) less than [[impedancia_acustica_del_medio_2]] (steel). R must be positive (reflection without inversion). If the student reverses the impedances, they get negative R and incorrectly conclude there is phase inversion.

## Interpretation errors

**Why it seems correct**

Check 16: In Reflection and Transmission in Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.


### Error 5: Assuming high reflection implies the interface is a defect

**Por que parece correcto**

In non-destructive testing, a strong echo is usually associated with a defect. The student generalises thinking all high reflection indicates a problem.

**Por que es incorrecto**

High reflection may simply be due to the natural impedance contrast between two intentionally bonded materials (such as the interface between a steel and an aluminium component). Reflection does not necessarily indicate a defect; it indicates an impedance change, which may be part of the design.

**Señal de deteccion**

The student interprets every echo signal as indicating a crack, without considering component geometry or expected interfaces.

**Correccion conceptual**

Distinguish between expected echoes (design interfaces) and unexpected echoes (defects). In ultrasonic inspection, the received signal is compared with the known component geometry. Only echoes not corresponding to planned interfaces indicate defects.

**Mini-ejemplo de contraste**

A bimetallic steel-aluminium part always produces an echo at the interface. If a technician interprets that echo as a crack, good parts are rejected. The echo is correct and expected; only an echo at a different depth or with anomalous amplitude suggests a real defect.

## Quick self-control rule

Always verify that [[coeficiente_de_reflexion_en_energia]] plus [[coeficiente_de_transmision_en_energia]] sums to exactly 1 (within rounding). If the sum differs from 1 by more than 1%, review the impedance calculation and formula substitution. Also verify that the sign of [[coeficiente_de_reflexion_en_amplitud]] is consistent with the impedance relationship: positive if [[impedancia_acustica_del_medio_2]] is greater than [[impedancia_acustica_del_medio_1]], negative if smaller.

**Why it seems correct**

Check 21: In Reflection and Transmission in Solids, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.