## Conceptual errors


### Error 1: treating resonance as only one number
Why it seems correct:
Many introductory exercises stop after computing [[f0]].

Detection signal:
The solution reports center frequency but ignores [[factor_de_calidad]], [[ancho_de_banda]], and branch-demand implications.

Contrast mini-example:
Two branches can share the same [[f0]] and still behave very differently because damping differs.

Conceptual correction:
Resonance means position plus shape plus margin.

**Why it seems correct**

Check 1: In Electrical Resonance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: reading quality factor as efficiency
Why it seems correct:
Higher quality sounds like universally better operation.

Detection signal:
Design decisions assume increasing [[factor_de_calidad]] always improves system behavior.

Contrast mini-example:
Higher [[factor_de_calidad]] can improve selectivity while reducing drift tolerance.

Conceptual correction:
Use [[factor_de_calidad]] as selectivity-versus-damping indicator, not generic efficiency metric.

## Model errors

**Why it seems correct**

Check 6: In Electrical Resonance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3: using ideal equations without effective-loss validation
Why it seems correct:
Minimal equations produce clean results quickly.

Detection signal:
Measured near-resonant response consistently diverges from baseline predictions.

Contrast mini-example:
Ignoring parasitic resistance can misestimate [[factor_de_calidad]], [[ancho_de_banda]], and [[corriente_resonante]].

Conceptual correction:
Validate effective resistance and update model when needed.

**Why it seems correct**

Check 11: In Electrical Resonance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 4: extrapolating resonance behavior too far from tuning
Why it seems correct:
The peak intuition is applied outside its valid neighborhood.

Detection signal:
Conclusions about selectivity are made in regions far from [[f0]].

Contrast mini-example:
Away from resonance, other impedance terms dominate response interpretation.

Conceptual correction:
Declare and respect operating domain before transferring conclusions.

## Mathematical errors

**Why it seems correct**

Check 16: In Electrical Resonance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.


### Error 5: mixing angular and ordinary frequency scales
Why it seems correct:
Both are casually called frequency.

Detection signal:
Center-frequency scale becomes inconsistent with measured data.

Contrast mini-example:
Using [[omega0]] as if it were [[f0]] distorts the full chain.

Conceptual correction:
Keep conversion explicit and unit conventions fixed.

**Why it seems correct**

Check 21: In Electrical Resonance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.


### Error 6: assuming bandwidth remains fixed when damping changes
Why it seems correct:
[[ancho_de_banda]] is treated as a static label from one calculation.

Detection signal:
[[resistencia_total_serie]] is modified but [[ancho_de_banda]] is reused without update.

Contrast mini-example:
Changed damping should alter response width under the same model.

Conceptual correction:
Recompute [[ancho_de_banda]] whenever selectivity conditions change.

## Interpretation errors

**Why it seems correct**

Check 26: In Electrical Resonance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 26.

**Why it is incorrect**

Check 27: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 27.

**Detection signal**

Check 28: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 28.

**Conceptual correction**

Check 29: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 29.

**Mini-example of contrast**

Check 30: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 30.


### Error 7: closing design without current-margin checks
Why it seems correct:
Center-frequency agreement creates false closure.

Detection signal:
[[corriente_resonante]] is not compared against thermal and protection limits.

Contrast mini-example:
A correctly tuned branch can still be unsafe near resonance.

Conceptual correction:
Integrate resonance reading with branch-safety validation.

**Why it seems correct**

Check 31: In Electrical Resonance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 31.

**Why it is incorrect**

Check 32: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 32.

**Detection signal**

Check 33: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 33.

**Conceptual correction**

Check 34: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 34.

**Mini-example of contrast**

Check 35: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 35.


### Error 8: ignoring parameter drift in real operation
Why it seems correct:
Nominal values are treated as fixed reality.

Detection signal:
System passes bench setup but drifts out of target behavior in field duty.

Contrast mini-example:
Thermal movement of [[inductancia]] and [[capacitancia]] can shift [[f0]] and reshape [[ancho_de_banda]].

Conceptual correction:
Add tolerance and sensitivity review before final closure.

## Quick self-control rule

Before accepting a resonance result, verify unit coherence, angular/cyclic conversion, consistency among [[factor_de_calidad]] and [[ancho_de_banda]], current-margin compatibility via [[corriente_resonante]], and model-validity boundaries for the intended operating window.

**Why it seems correct**

Check 36: In Electrical Resonance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 36.

**Why it is incorrect**

Check 37: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 37.

**Detection signal**

Check 38: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 38.

**Conceptual correction**

Check 39: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 39.

**Mini-example of contrast**

Check 40: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 40.