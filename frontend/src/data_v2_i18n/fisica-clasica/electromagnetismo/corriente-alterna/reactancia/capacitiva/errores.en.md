## Conceptual errors


### Error 1: treating reactance as dissipative resistance
Why it seems correct:
Both quantities are measured in ohms and appear in current equations.

Detection signal:
A branch with capacitive opposition is interpreted as active-power consumption by default.

Contrast mini-example:
A branch can show high [[corriente_capacitiva_eficaz]] with low or negligible net active dissipation in ideal conditions.

Conceptual correction:
Separate reactive opposition from active dissipation before drawing energetic conclusions.

**Why it seems correct**

Check 1: In Capacitive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: assuming capacitive opposition is constant
Why it seems correct:
A remembered equation is unconsciously treated as a fixed component value.

Detection signal:
The same opposition value is used across scenarios with different frequency.

Contrast mini-example:
At fixed capacitance, higher frequency should lower ideal reactance.

Conceptual correction:
Treat [[reactancia_capacitiva]] as regime-dependent output, not immutable component identity.

## Model errors

**Why it seems correct**

Check 6: In Capacitive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3: using ideal model outside its operating window
Why it seems correct:
Numerical substitution stays simple and outputs plausible-looking values.

Detection signal:
Measured trends in branch current diverge from predicted trends under nominally similar conditions.

Contrast mini-example:
Strong loss or thermal effects can invalidate pure-reactive assumptions.

Conceptual correction:
Define validity thresholds and switch models when thresholds are exceeded.

**Why it seems correct**

Check 11: In Capacitive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

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
Any measured voltage value is treated as compatible with any formula.

Detection signal:
Mixed data types and mixed operating states are used without explicit reconciliation.

Contrast mini-example:
Peak voltage from waveform capture is not automatically interchangeable with RMS voltage for branch-current equations.

Conceptual correction:
Align data type, measurement context, and equation assumptions.

## Mathematical errors

**Why it seems correct**

Check 16: In Capacitive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

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
Both are informally called frequency in everyday technical speech.

Detection signal:
Scale errors appear with unexplained factors in reactance or current estimates.

Contrast mini-example:
Direct substitution of hertz where angular frequency is required distorts opposition estimates.

Conceptual correction:
Fix one convention and keep conversion explicit.

**Why it seems correct**

Check 21: In Capacitive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.


### Error 6: skipping microfarad-to-farad conversion
Why it seems correct:
Prefix handling is omitted during quick substitutions.

Detection signal:
Current values become unrealistically tiny or unrealistically large.

Contrast mini-example:
A six-order unit shift can dominate the entire result.

Conceptual correction:
Normalize to SI before any formal operation.

## Interpretation errors

**Why it seems correct**

Check 26: In Capacitive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 26.

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
Both are energetic descriptors and reported in power studies.

Detection signal:
System efficiency is judged only from reactive-magnitude growth.

Contrast mini-example:
Reactive exchange can increase without equal increase in net active transfer.

Conceptual correction:
Keep reactive and active balances explicitly separated.

**Why it seems correct**

Check 31: In Capacitive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 31.

**Why it is incorrect**

Check 32: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 32.

**Detection signal**

Check 33: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 33.

**Conceptual correction**

Check 34: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 34.

**Mini-example of contrast**

Check 35: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 35.


### Error 8: stopping at numbers without causal explanation
Why it seems correct:
A computed value creates a false sense of closure.

Detection signal:
Conclusion repeats results but does not identify dominant variable or validity boundary.

Contrast mini-example:
Equal voltage scenarios can yield different branch currents due to frequency or capacitance changes.

Conceptual correction:
Close every solution with cause-effect narrative and model-limit statement.

## Quick self-control rule

Before accepting results, verify data type consistency, unit conversion, trend coherence, and model validity. If any of these fails, the answer is not yet physically ready for technical use.

**Why it seems correct**

Check 36: In Capacitive Reactance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 36.

**Why it is incorrect**

Check 37: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 37.

**Detection signal**

Check 38: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 38.

**Conceptual correction**

Check 39: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 39.

**Mini-example of contrast**

Check 40: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 40.