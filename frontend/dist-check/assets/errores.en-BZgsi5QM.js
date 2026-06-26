const e=`## Conceptual errors

### Error 1: Believing that transmitted amplitude greater than one violates energy conservation

**Por que parece correcto**

The student associates "fraction" with a number between zero and one. If the transmitted amplitude is 1.5, they think energy has been created from nothing.

**Por que es incorrecto**

Energy transported by a wave is not proportional only to amplitude squared, but to the product of amplitude squared and medium impedance. When the second medium has lower impedance, amplitude must grow to maintain the power balance. The correct check is that [[R_E]] plus [[T_E]] sums to exactly one.

**Señal de deteccion**

The student states that "the transmission formula is wrong because T comes out greater than one" or rejects a [[T_amp]] result exceeding unity.

**Correccion conceptual**

[[T_amp]] can reach up to 2 (free end limit). Conservation is verified with energy coefficients, not amplitude ones. Always check that [[R_E]] plus [[T_E]] equals unity.

**Mini-ejemplo de contraste**

A wave passes from steel (high Z) to aluminium (low Z). [[T_amp]] is 1.46, but [[T_E]] is 0.79. Amplitude grows because the receiving medium offers less resistance, but transmitted energy is only 79% of the incident.

### Error 2: Confusing amplitude reflection coefficient with energy reflection coefficient

**Por que parece correcto**

Both are called "reflection coefficient" and both give a dimensionless number. The student does not distinguish between R and R squared.

**Por que es incorrecto**

[[R_amp]] can be negative (phase inversion) and its absolute value indicates the fraction of reflected amplitude. [[R_E]] is always positive and directly gives the fraction of reflected energy. Using one instead of the other produces quadratic factor errors.

**Señal de deteccion**

The student substitutes [[R_amp]] directly in a power balance without squaring, or discards a negative result believing it is erroneous.

**Correccion conceptual**

For energy balances always use [[R_E]] and [[T_E]]. For phase information use [[R_amp]]. The sign of [[R_amp]] contains physical information (phase inversion) that must not be ignored.

**Mini-ejemplo de contraste**

At the steel-aluminium interface, [[R_amp]] is -0.46. If the student uses it directly as energy fraction, they believe -46% of energy is reflected (absurd). The correct energy reflection is the square: 0.21, i.e. 21%.

## Model errors

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

### Error 4: Reversing the impedance order in the formula

**Por que parece correcto**

The formula has [[Z_2]] minus [[Z_1]] in the numerator, but the student may write [[Z_1]] minus [[Z_2]] without realising it changes the sign.

**Por que es incorrecto**

Standard convention defines [[R_amp]] as ([[Z_2]] - [[Z_1]]) / ([[Z_2]] + [[Z_1]]), where medium 1 is the incidence medium and medium 2 the transmission medium. Reversing the order inverts the coefficient sign and phase information is lost or inverted.

**Señal de deteccion**

The student obtains positive R when the wave goes from stiff to soft medium (should be negative), or negative when going from soft to stiff.

**Correccion conceptual**

Always fix the convention: medium 1 is where the incident wave travels, medium 2 is where it heads. [[Z_2]] goes first in the numerator ([[Z_2]] - [[Z_1]]). Verify sign with the physical criterion: if the second medium is stiffer, R is positive.

**Mini-ejemplo de contraste**

Wave from aluminium to steel: [[Z_1]] (aluminium) less than [[Z_2]] (steel). R must be positive (reflection without inversion). If the student reverses the impedances, they get negative R and incorrectly conclude there is phase inversion.

## Interpretation errors

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

Always verify that [[R_E]] plus [[T_E]] sums to exactly 1 (within rounding). If the sum differs from 1 by more than 1%, review the impedance calculation and formula substitution. Also verify that the sign of [[R_amp]] is consistent with the impedance relationship: positive if [[Z_2]] is greater than [[Z_1]], negative if smaller.
`;export{e as default};
