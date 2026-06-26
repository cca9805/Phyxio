## Conceptual errors


### Error 1: treating reactance as dissipative resistance
Why it seems correct:
Both are measured in ohms and appear in current relations.

Detection signal:
High [[reactancia_inductiva]] is interpreted as high active consumption by default.

Contrast mini-example:
A branch can show strong opposition and moderate [[corriente_inductiva_eficaz]] without equivalent active dissipation in ideal conditions.

Conceptual correction:
Separate reactive opposition from active dissipation before energetic conclusions.

**Why it seems correct**

Check 1: In Inductive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: assuming inductive opposition is constant
Why it seems correct:
A remembered equation is unconsciously treated as a fixed component value.

Detection signal:
The same opposition value is used across different [[frecuencia]] scenarios.

Contrast mini-example:
At fixed [[inductancia]], increasing frequency should increase [[reactancia_inductiva]].

Conceptual correction:
Treat [[reactancia_inductiva]] as regime-dependent output.

## Model errors

**Why it seems correct**

Check 6: In Inductive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3: applying ideal model outside magnetic validity
Why it seems correct:
Substitution remains clean and outputs plausible values.

Detection signal:
Measured [[corriente_inductiva_eficaz]] trends diverge from expected model trends.

Contrast mini-example:
Saturation and dominant core loss can invalidate minimal assumptions.

Conceptual correction:
Declare thresholds and switch to extended model when they are exceeded.

**Why it seems correct**

Check 11: In Inductive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 4: ignoring metrological traceability
Why it seems correct:
Any voltage reading is treated as compatible with any equation.

Detection signal:
Mixed data types or mixed operating states are used without reconciliation.

Contrast mini-example:
Peak waveform voltage is not automatically interchangeable with RMS voltage in branch-current equations.

Conceptual correction:
Align data type, measurement context, and equation assumptions.

## Mathematical errors

**Why it seems correct**

Check 16: In Inductive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.


### Error 5: mixing hertz and radians per second
Why it seems correct:
Both are casually called frequency.

Detection signal:
Unexpected scale factors appear in [[reactancia_inductiva]] and [[corriente_inductiva_eficaz]].

Contrast mini-example:
Using [[frecuencia]] where [[omega]] is required distorts the full chain.

Conceptual correction:
Fix one convention and keep conversion explicit.

**Why it seems correct**

Check 21: In Inductive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.


### Error 6: skipping millihenry-to-henry conversion
Why it seems correct:
Prefix handling is omitted during quick substitution.

Detection signal:
Predicted opposition is implausibly small or large.

Contrast mini-example:
A three-order unit shift can dominate the result.

Conceptual correction:
Normalize to SI before formal operations.

## Interpretation errors

**Why it seems correct**

Check 26: In Inductive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 26.

**Why it is incorrect**

Check 27: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 27.

**Detection signal**

Check 28: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 28.

**Conceptual correction**

Check 29: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 29.

**Mini-example of contrast**

Check 30: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 30.


### Error 7: reading reactive magnitude as active consumption
Why it seems correct:
Both are discussed in power studies.

Detection signal:
Efficiency judgments are made only from [[potencia_reactiva_inductiva]] changes.

Contrast mini-example:
Reactive exchange can grow without equal net active transfer growth.

Conceptual correction:
Keep reactive and active balances explicitly separated.

**Why it seems correct**

Check 31: In Inductive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 31.

**Why it is incorrect**

Check 32: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 32.

**Detection signal**

Check 33: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 33.

**Conceptual correction**

Check 34: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 34.

**Mini-example of contrast**

Check 35: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 35.


### Error 8: ending at numbers without causal closure
Why it seems correct:
A computed value creates false closure.

Detection signal:
Conclusion reports values but not dominant variable or validity boundary.

Contrast mini-example:
Same [[tension_eficaz]] cases can produce different [[corriente_inductiva_eficaz]] due to different [[inductancia]] or [[frecuencia]].

Conceptual correction:
Close with cause-effect statement and model-limit note.

## Quick self-control rule

Before accepting results, verify data-type coherence, unit conversion, trend consistency, and model validity. If one fails, the answer is not physically ready for technical use.

**Why it seems correct**

Check 36: In Inductive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 36.

**Why it is incorrect**

Check 37: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 37.

**Detection signal**

Check 38: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 38.

**Conceptual correction**

Check 39: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 39.

**Mini-example of contrast**

Check 40: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 40.