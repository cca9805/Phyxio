## Conceptual errors


### Error 1: Confusing power with energy

A frequent mistake is to treat [[potencia_electrica]] as if it were accumulated [[energia_electrica]]. Power is a rate; energy is the result of sustaining that rate over [[tiempo]].

Corrective check: identify whether the question asks for watts or joules before substituting values. If the answer must describe battery drain, heating over an interval, or billing, use the energy-from-power relation after the power estimate.

{{f:energia_desde_potencia}}

**Why it seems correct**

Check 1: In Electric Power, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: Assuming larger power is always better

High [[potencia_electrica]] can mean useful delivery, but it can also mean overload, thermal stress, or wasted dissipation. The sign and role of the element matter: a source delivering power is not interpreted like a resistor absorbing power.

Corrective check: compare the computed value with rated power, cooling conditions, and the intended operating regime.

**Why it seems correct**

Check 6: In Electric Power, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3: Ignoring the passive sign convention

In circuit analysis, positive power often means absorbed power under passive convention. Reversing current or voltage references can change the sign without changing the physical hardware.

Corrective check: state the chosen convention and explain whether the element absorbs or supplies energy.

## Model errors

**Why it seems correct**

Check 11: In Electric Power, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 1: Applying resistive formulas outside a resistive regime

The resistive power forms assume an effective [[resistencia_electrica]] that is meaningful in the operating range. They are not automatically valid for reactive, nonlinear, or switching loads.

{{f:potencia_resistiva_corriente}}

{{f:potencia_resistiva_tension}}

Corrective check: start from the direct power relation when [[tension_electrica]] and [[corriente_electrica]] are measured on the same element at the same instant.

{{f:potencia_base}}

**Why it seems correct**

Check 16: In Electric Power, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.


### Error 2: Treating resistance as constant during heating

In real components, heating can change [[resistencia_electrica]]. Because power can depend quadratically on current or voltage, that drift can shift the final thermal state.

Corrective check: if resistance drift is appreciable, use an extended thermal-electric model or evaluate resistance at the operating temperature.

**Why it seems correct**

Check 21: In Electric Power, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.


### Error 3: Ignoring source and load non-ideality

Nominal voltage may sag under load, and current peaks may exceed average values. A power estimate based only on nameplate values can miss startup stress.

Corrective check: use loaded measurements or include source internal resistance when the decision depends on margin.

## Mathematical errors

**Why it seems correct**

Check 26: In Electric Power, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 26.

**Why it is incorrect**

Check 27: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 27.

**Detection signal**

Check 28: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 28.

**Conceptual correction**

Check 29: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 29.

**Mini-example of contrast**

Check 30: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 30.


### Error 1: Mixing time units in energy calculations

Minutes, hours, and seconds cannot be interchanged in energy-from-power calculations without conversion. Joules require watts multiplied by seconds.

{{f:energia_desde_potencia}}

Corrective check: convert [[tiempo]] to seconds for SI energy, or deliberately convert to watt-hour or kilowatt-hour when reporting consumption.

**Why it seems correct**

Check 31: In Electric Power, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 31.

**Why it is incorrect**

Check 32: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 32.

**Detection signal**

Check 33: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 33.

**Conceptual correction**

Check 34: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 34.

**Mini-example of contrast**

Check 35: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 35.


### Error 2: Dropping the square in resistive power

For fixed resistance, [[potencia_electrica]] grows with the square of [[corriente_electrica]]. Doubling current produces four times the power, not twice the power.

Corrective check: inspect whether the selected formula is current-based resistive power, voltage-based resistive power, or direct voltage-current power before interpreting proportionality.

{{f:potencia_resistiva_corriente}}

{{f:potencia_resistiva_tension}}

{{f:potencia_base}}

**Why it seems correct**

Check 36: In Electric Power, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 36.

**Why it is incorrect**

Check 37: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 37.

**Detection signal**

Check 38: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 38.

**Conceptual correction**

Check 39: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 39.

**Mini-example of contrast**

Check 40: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 40.


### Error 3: Rounding too early

Premature rounding can hide whether a component is above or below a rating threshold. This is especially risky near thermal limits.

Corrective check: keep intermediate values with enough precision and round only the final reported value with units.

## Interpretation errors

**Why it seems correct**

Check 41: In Electric Power, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 41.

**Why it is incorrect**

Check 42: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 42.

**Detection signal**

Check 43: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 43.

**Conceptual correction**

Check 44: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 44.

**Mini-example of contrast**

Check 45: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 45.


### Error 1: Reporting a number without a thermal reading

A numerical watt value is incomplete if it does not say whether the component can dissipate it safely.

Corrective check: add a sentence comparing [[potencia_electrica]] with the component rating and expected cooling.

**Why it seems correct**

Check 46: In Electric Power, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 46.

**Why it is incorrect**

Check 47: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 47.

**Detection signal**

Check 48: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 48.

**Conceptual correction**

Check 49: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 49.

**Mini-example of contrast**

Check 50: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 50.


### Error 2: Looking only at averages

Average power can hide damaging peaks in switching, startup, or pulsed operation. A low average does not guarantee safe instantaneous stress.

Corrective check: inspect peak [[corriente_electrica]], peak [[tension_electrica]], and the duty cycle when the waveform is not steady DC.

**Why it seems correct**

Check 51: In Electric Power, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 51.

**Why it is incorrect**

Check 52: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 52.

**Detection signal**

Check 53: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 53.

**Conceptual correction**

Check 54: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 54.

**Mini-example of contrast**

Check 55: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 55.


### Error 3: Ignoring measurement uncertainty

Small uncertainty in voltage or current can become important in squared relations. A narrow safety margin should be treated as uncertain, not as a clean pass.

Corrective check: report a plausible interval or worst-case estimate when the decision depends on a small margin.

## Quick self-control rule

Before accepting a power result, ask five questions: Is the result power or energy? Are voltage and current from the same element? Is the model resistive, direct, or averaged? Are units consistent? Is the result safe relative to the physical rating?

**Why it seems correct**

Check 56: In Electric Power, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 56.

**Why it is incorrect**

Check 57: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 57.

**Detection signal**

Check 58: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 58.

**Conceptual correction**

Check 59: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 59.

**Mini-example of contrast**

Check 60: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 60.