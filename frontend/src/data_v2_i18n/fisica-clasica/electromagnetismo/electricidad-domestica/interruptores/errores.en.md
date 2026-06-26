## Conceptual errors


### Error 1: Confusing the switch with active protection

#### Por que parece correcto

The switch and MCB look similar and are both in the distribution board. Both allow cutting the circuit. Many users treat them as equivalent devices.

#### Por que es incorrecto

A switch is a switching device: it opens and closes the circuit manually. It does not detect excessive [[corriente_de_maniobra]] or act automatically. A switch with high [[perdida_resistiva_en_on]] activates no protection mechanism.

#### Senal de deteccion

The student says that switching off the switch eliminates the risk. The risk does not disappear when off: the degraded contact with high [[resistencia_en_estado_on]] will still cause high [[perdida_resistiva_en_on]] every time it is switched on.

#### Correccion conceptual

The switch controls (manual operation); the MCB protects (automatic action). The solution to switch heating is to replace it, not to change usage habits.

#### Mini-ejemplo de contraste

Incorrect: hot switch means it should be used less. Correct: hot switch with [[perdida_resistiva_en_on]] > 5 W means it must be replaced regardless of usage frequency.

---

**Why it seems correct**

Check 1: In Switches, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.

### Error 2: Assuming all switches are equivalent

#### Por que parece correcto

All switches have the same basic function: open and close the circuit. The student assumes that if one works mechanically, it is suitable for any load.

#### Por que es incorrecto

A switch designed for [[corriente_de_maniobra]] = 6 A operating with [[corriente_de_maniobra]] = 10 A has much higher [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]]. Service life in operations also depends on load current and load type.

#### Senal de deteccion

The student replaces a faulty switch with a lower-rated one without checking load [[corriente_de_maniobra]].

#### Correccion conceptual

Verify that nominal [[corriente_de_maniobra]] of the switch is greater than or equal to load [[corriente_de_maniobra]]. Always use maximum load current to size the switch.

#### Mini-ejemplo de contraste

Incorrect: any 10 A switch works for any load. Correct: verify load [[corriente_de_maniobra]] is below switch nominal and calculate [[perdida_resistiva_en_on]] for the expected [[resistencia_en_estado_on]].

---

## Model errors

**Why it seems correct**

Check 6: In Switches, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.

### Error 3: Applying the static model to inductive loads

#### Por que parece correcto

The formula [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] does not mention load type. The student applies it directly with nominal [[corriente_de_maniobra]].

#### Por que es incorrecto

Inductive loads have inrush current of 4-8 times nominal [[corriente_de_maniobra]] for brief transients. The static model underestimates actual dissipation during start-ups. Frequent cycling also degrades [[resistencia_en_estado_on]] through arcing.

#### Senal de deteccion

The student calculates [[perdida_resistiva_en_on]] = 0.6 W for a pump thermostat and concludes no risk, without considering inrush current or daily switching count.

#### Correccion conceptual

First identify load type. For inductive loads with frequent cycling, the static model is insufficient. The diagnostic parameter for service life is operation count, not static [[perdida_resistiva_en_on]].

#### Mini-ejemplo de contraste

Incorrect: calculate [[perdida_resistiva_en_on]] with nominal [[corriente_de_maniobra]] for a pump and conclude the switch is adequate. Correct: estimate inrush current and evaluate whether the switch is rated for that load profile.

---

**Why it seems correct**

Check 11: In Switches, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.

### Error 4: Ignoring [[perdida_resistiva_en_on]] because [[resistencia_en_estado_on]] is small

#### Por que parece correcto

Typical switch [[resistencia_en_estado_on]] is much smaller than load resistance. It seems reasonable to neglect it.

#### Por que es incorrecto

[[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]]. With [[corriente_de_maniobra]] = 10 A and [[resistencia_en_estado_on]] = 0.05 ohm: [[perdida_resistiva_en_on]] = 5 W. Not negligible for contact thermal diagnosis.

#### Senal de deteccion

The student calculates [[perdida_resistiva_en_on]] with [[corriente_de_maniobra]] = 1 A and generalises that [[perdida_resistiva_en_on]] is always small.

#### Correccion conceptual

Always calculate [[perdida_resistiva_en_on]] for the actual load current. The scale of [[perdida_resistiva_en_on]] depends on [[corriente_de_maniobra]]^2, not on [[resistencia_en_estado_on]] alone.

#### Mini-ejemplo de contraste

Incorrect: [[resistencia_en_estado_on]] = 0.05 ohm is negligible. Correct: with [[corriente_de_maniobra]] = 10 A, [[perdida_resistiva_en_on]] = 5 W — thermal risk threshold.

---

## Mathematical errors

**Why it seems correct**

Check 16: In Switches, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.

### Error 5: Forgetting the square in [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]]

#### Por que parece correcto

In Ohm's law the relationship is linear. The student applies the same logic to power.

#### Por que es incorrecto

Power dissipated is [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]], not [[corriente_de_maniobra]] x [[resistencia_en_estado_on]]. The units of [[corriente_de_maniobra]] x [[resistencia_en_estado_on]] are volts, not watts. The error is detectable dimensionally.

#### Senal de deteccion

The student obtains [[perdida_resistiva_en_on]] in volts, or gets a value ten times smaller than correct.

#### Correccion conceptual

Always apply Joule's law: power dissipated in [[resistencia_en_estado_on]] grows with the square of [[corriente_de_maniobra]]. Check dimensions: amperes squared times ohms gives watts, not volts.

#### Mini-ejemplo de contraste

Incorrect: [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]] x [[resistencia_en_estado_on]] = 8.7 x 0.08 = 0.70 (volts, not watts). Correct: [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] = 8.7 squared times 0.08 = 6.05 W.

---

**Why it seems correct**

Check 21: In Switches, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.

### Error 6: Confusing [[resistencia_en_estado_on]] with load resistance

#### Por que parece correcto

Both are resistances in series in the same circuit. The student may confuse switch contact resistance with device resistance.

#### Por que es incorrecto

[[resistencia_en_estado_on]] is the switch contact resistance. Load resistance is the device equivalent resistance. They differ by orders of magnitude: loads have tens or hundreds of ohms; [[resistencia_en_estado_on]] has hundredths or tenths of an ohm.

#### Senal de deteccion

The student includes [[resistencia_en_estado_on]] in the [[corriente_de_maniobra]] calculation denominator, indicating conceptual confusion.

#### Correccion conceptual

Calculate [[corriente_de_maniobra]] = [[potencia_de_la_carga]]/[[tension_de_alimentacion]] ignoring [[resistencia_en_estado_on]]. Then calculate [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] separately.

#### Mini-ejemplo de contraste

Incorrect: [[corriente_de_maniobra]] = [[tension_de_alimentacion]] divided by the sum of R_load and [[resistencia_en_estado_on]]. Correct: [[corriente_de_maniobra]] = [[potencia_de_la_carga]] divided by [[tension_de_alimentacion]], then [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] separately.

---

## Interpretation errors

**Why it seems correct**

Check 26: In Switches, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 26.

**Why it is incorrect**

Check 27: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 27.

**Detection signal**

Check 28: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 28.

**Conceptual correction**

Check 29: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 29.

**Mini-example of contrast**

Check 30: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 30.

### Error 7: Interpreting large [[energia_disipada_en_conduccion]] as dangerous without context

#### Por que parece correcto

High energy seems to indicate high risk. The student sees [[energia_disipada_en_conduccion]] = 100,000 J and interprets it as dangerous heating.

#### Por que es incorrecto

Contact thermal risk is determined by [[perdida_resistiva_en_on]] (instantaneous dissipation rate), not [[energia_disipada_en_conduccion]] (accumulated energy). With [[perdida_resistiva_en_on]] = 0.1 W the contact reaches a low equilibrium temperature even if [[energia_disipada_en_conduccion]] is large.

#### Senal de deteccion

The student calculates [[energia_disipada_en_conduccion]] = 100 kJ for [[perdida_resistiva_en_on]] = 0.1 W and concludes there is thermal risk.

#### Correccion conceptual

Use [[perdida_resistiva_en_on]] for thermal diagnosis and [[energia_disipada_en_conduccion]] for energy analysis. They are complementary quantities with different uses.

#### Mini-ejemplo de contraste

Incorrect: [[energia_disipada_en_conduccion]] = 100,000 J implies high thermal risk. Correct: [[perdida_resistiva_en_on]] = 0.1 W implies low equilibrium temperature, no appreciable thermal risk.

---

## Quick self-control rule

To quickly verify switch analysis is correct:

1. Calculate [[corriente_de_maniobra]] = [[potencia_de_la_carga]]/[[tension_de_alimentacion]] — do not include [[resistencia_en_estado_on]] in this step.
2. Calculate [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] — verify the result is in watts.
3. Compare [[perdida_resistiva_en_on]] with thresholds: below 1 W is safe, 1 to 5 W requires monitoring, above 5 W requires replacement.
4. If the load is inductive or the switch cycles frequently, the static model may underestimate actual degradation.
5. [[energia_disipada_en_conduccion]] is for energy analysis, not for thermal diagnosis. Thermal diagnosis always uses [[perdida_resistiva_en_on]].

**Why it seems correct**

Check 31: In Switches, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 31.

**Why it is incorrect**

Check 32: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 32.

**Detection signal**

Check 33: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 33.

**Conceptual correction**

Check 34: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 34.

**Mini-example of contrast**

Check 35: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 35.