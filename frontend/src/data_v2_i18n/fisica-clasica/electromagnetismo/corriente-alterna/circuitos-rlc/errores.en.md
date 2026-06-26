## Conceptual errors


### Error 1: believing that high current always means high useful power
Why it seems correct:
In direct-current problems, more current is often associated with more useful transfer. That intuition appears transferable to any electrical circuit.

Detection signal:
The solution finds high [[corriente_rms]] but much lower [[potencia_activa]] than [[potencia_aparente]], or it obtains a substantial [[phi]] and still describes the load as efficient without further analysis.

Contrast mini-example:
Two branches can demand the same [[corriente_rms]]. One may have [[phi]] close to zero, while the other keeps a large phase shift. In the second case the source sustains much more total demand than useful transfer alone would suggest.

Conceptual correction:
Current must be read together with [[phi]], [[potencia_activa]], [[potencia_reactiva]], and [[potencia_aparente]]. In this leaf the question is not only how much current flows, but how electrical demand is distributed.

**Why it seems correct**

Check 1: In RLC Circuits, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: treating [[potencia_reactiva]] as lost energy in the same sense as heat
Why it seems correct:
Since [[potencia_reactiva]] is not identical to useful power, students often call it direct waste.

Detection signal:
All reactive power is labelled useless and the interpretation of exchange with electric and magnetic fields disappears from the explanation.

Contrast mini-example:
An ideal reactive branch can exchange a large amount of energy with the source without turning it into mean dissipation like the resistive part does.

Conceptual correction:
[[potencia_reactiva]] expresses alternating exchange associated with phase shift. It has real technical consequences, but it is not identical to irreversible dissipation.

## Model errors

**Why it seems correct**

Check 6: In RLC Circuits, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3: applying the linear series model to any AC setup without justification
Why it seems correct:
The leaf equations are compact and quick, so it becomes tempting to use them on any circuit that contains a resistor, an inductor, and a capacitor.

Detection signal:
The statement describes parallel topology, strong parasitics, or several relevant frequencies, and the same closed chain is still used without declaring approximations.

Contrast mini-example:
In a parallel topology, maximum and minimum opposition are read differently. Using the series model without prior reduction changes the physical meaning of the result.

Conceptual correction:
Define system, topology, dominant frequency, and validity domain first. Only then decide whether this leaf is the correct model.

**Why it seems correct**

Check 11: In RLC Circuits, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 4: assuming that approaching compensation always improves everything
Why it seems correct:
If [[phi]] decreases and [[potencia_reactiva]] falls, it seems natural to conclude that the circuit automatically becomes better in every sense.

Detection signal:
The solution celebrates lower reactive demand without checking [[corriente_rms]], sensitivity to frequency, or component tolerances.

Contrast mini-example:
When [[reactancia_inductiva]] and [[reactancia_capacitiva]] almost balance, [[impedancia_total]] may approach [[resistencia_serie]] and current may rise quickly. Power factor may improve while current stress worsens.

Conceptual correction:
Compensation and safety are not synonyms. [[impedancia_total]], [[corriente_rms]], [[phi]], and the operating context must be read together.

## Mathematical errors

**Why it seems correct**

Check 16: In RLC Circuits, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.


### Error 5: writing impedance as a simple algebraic sum
Why it seems correct:
The student sees three quantities in ohms and concludes that they should be added linearly.

Detection signal:
The solution proposes an impedance smaller than [[resistencia_serie]] by naive cancellation or even a negative magnitude.

Contrast mini-example:
If [[resistencia_serie]] is 40 ohm, [[reactancia_inductiva]] is 90 ohm, and [[reactancia_capacitiva]] is 50 ohm, the reactive contribution does not align with the resistive one. The final magnitude must remain greater than or equal to [[resistencia_serie]].

Conceptual correction:
Reactances enter in quadrature with respect to the resistive part. First construct reactive imbalance, then total magnitude.

**Why it seems correct**

Check 21: In RLC Circuits, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.


### Error 6: mixing peak values with RMS values
Why it seems correct:
Both describe the same signal and often appear together in tables or plots.

Detection signal:
[[potencia_activa]] exceeds [[potencia_aparente]], current becomes implausible, or the result contradicts the physical scale of the setup.

Contrast mini-example:
If [[tension_rms]] is taken as a peak value while [[corriente_rms]] remains RMS, calculated powers no longer belong to one coherent framework.

Conceptual correction:
In this topic the entire operational chain is built with RMS magnitudes. If a datum is given in peak form, it must be converted first.

## Interpretation errors

**Why it seems correct**

Check 26: In RLC Circuits, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 26.

**Why it is incorrect**

Check 27: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 27.

**Detection signal**

Check 28: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 28.

**Conceptual correction**

Check 29: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 29.

**Mini-example of contrast**

Check 30: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 30.


### Error 7: ignoring the physical sign of [[phi]]
Why it seems correct:
Many exercises ask only for a numerical angle, so students conclude that the magnitude is enough.

Detection signal:
The solution gives a value for [[phi]] but never states whether the branch is inductive or capacitive, and never connects the sign with [[potencia_reactiva]].

Contrast mini-example:
Two angles with the same magnitude can correspond to opposite regimes. In one, [[reactancia_inductiva]] dominates; in the other, [[reactancia_capacitiva]] dominates. Compensation decisions change completely.

Conceptual correction:
The sign of [[phi]] is not decorative. It is the compact way of reading which reactive mechanism dominates the branch.

**Why it seems correct**

Check 31: In RLC Circuits, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 31.

**Why it is incorrect**

Check 32: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 32.

**Detection signal**

Check 33: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 33.

**Conceptual correction**

Check 34: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 34.

**Mini-example of contrast**

Check 35: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 35.


### Error 8: reading [[potencia_aparente]] as if it were useful power delivered to the load
Why it seems correct:
[[potencia_aparente]] combines [[tension_rms]] and [[corriente_rms]] and looks like the most direct number in the power balance.

Detection signal:
Load usefulness is sized only with [[potencia_aparente]], or the explanation states that all source demand becomes net average transfer.

Contrast mini-example:
If [[potencia_activa]] is far below [[potencia_aparente]], the installation sustains a demand that is not fully turned into active power. That gap can be the main technical issue.

Conceptual correction:
[[potencia_aparente]] sizes total demand. [[potencia_activa]] sizes net average transfer. Good interpretation must separate both roles.

## Quick self-control rule

Before accepting a solution, ask this sequence: do [[reactancia_inductiva]] and [[reactancia_capacitiva]] belong to the same frequency, are all magnitudes in RMS form, is [[impedancia_total]] greater than or equal to [[resistencia_serie]], does the sign of [[phi]] match inductive or capacitive character, and does [[potencia_activa]] remain below or equal to [[potencia_aparente]]? If one answer fails, the problem is not closed even if arithmetic looks tidy.

**Why it seems correct**

Check 36: In RLC Circuits, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 36.

**Why it is incorrect**

Check 37: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 37.

**Detection signal**

Check 38: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 38.

**Conceptual correction**

Check 39: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 39.

**Mini-example of contrast**

Check 40: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 40.