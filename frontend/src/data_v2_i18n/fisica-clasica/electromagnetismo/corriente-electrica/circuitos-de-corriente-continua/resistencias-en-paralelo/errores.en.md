## Conceptual errors


### Error 1: Treating parallel as if it were series
Why it seems correct:
The visual list of resistors triggers direct-sum memory from series exercises.

Detection signal:
Computed [[resistencia_equivalente]] is higher than the smallest active branch resistance.

Mini contrast example:
A passive parallel network must offer at least one additional conductive path.

Conceptual correction:
Use reciprocal-resistance aggregation or direct conductance summation.

**Why it seems correct**

Check 1: In Resistors in Parallel, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: Assuming equal branch currents because voltage is equal
Why it seems correct:
Equal branch voltage is confused with equal branch current.

Detection signal:
[[corriente_de_rama_1]] and [[corriente_de_rama_2]] are reported identical while [[resistencia_de_rama_1]] and [[resistencia_de_rama_2]] differ strongly.

Mini contrast example:
At fixed [[tension_comun_del_paralelo]], lower branch resistance should draw higher branch current.

Conceptual correction:
Separate voltage-equality rule from current-sharing rule in parallel blocks.

## Model errors

**Why it seems correct**

Check 6: In Resistors in Parallel, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3: Keeping a disconnected branch inside equations
Why it seems correct:
The initial diagram had three branches and the model is copied without topology update.

Detection signal:
[[corriente_total]] prediction and measurement diverge systematically despite clean units.

Mini contrast example:
An open branch contributes no conduction and must be removed from active closure.

Conceptual correction:
Rebuild the active topology before computing equivalent quantities.

**Why it seems correct**

Check 11: In Resistors in Parallel, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 4: Ignoring wiring resistance when current level makes it relevant
Why it seems correct:
Wiring is assumed ideal by default.

Detection signal:
Measured branch sharing drifts from ideal prediction beyond operational tolerance.

Mini contrast example:
Long wiring and higher branch demand can shift effective branch resistance.

Conceptual correction:
Switch to extended model when discrepancy changes protection or reliability decisions.

## Mathematical errors

**Why it seems correct**

Check 16: In Resistors in Parallel, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.


### Error 5: Mixing ohm and kiloohm in one substitution chain
Why it seems correct:
Numbers look plausible and scale mismatch is not noticed.

Detection signal:
Branch currents jump to impossible order for given source level.

Mini contrast example:
A kiloohm branch under low-voltage supply cannot produce ampere-level current in linear regime.

Conceptual correction:
Normalize units first, then perform substitution.

**Why it seems correct**

Check 21: In Resistors in Parallel, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.


### Error 6: Summing branch currents without fixed sign convention
Why it seems correct:
Partial results are copied with implicit direction assumptions.

Detection signal:
[[corriente_total]] changes with equation writing order.

Mini contrast example:
With one sign convention, nodal closure must be unique and reproducible.

Conceptual correction:
Define direction references at start and keep them until final interpretation.

## Interpretation errors

**Why it seems correct**

Check 26: In Resistors in Parallel, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 26.

**Why it is incorrect**

Check 27: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 27.

**Detection signal**

Check 28: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 28.

**Conceptual correction**

Check 29: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 29.

**Mini-example of contrast**

Check 30: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 30.


### Error 7: Declaring branch safe only from moderate current value
Why it seems correct:
Current seems moderate and local thermal context is ignored.

Detection signal:
Localized overheating appears in one branch under sustained operation.

Mini contrast example:
Similar branch currents may still produce different dissipation outcomes.

Conceptual correction:
Interpret branch current together with thermal and protection constraints.

**Why it seems correct**

Check 31: In Resistors in Parallel, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 31.

**Why it is incorrect**

Check 32: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 32.

**Detection signal**

Check 33: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 33.

**Conceptual correction**

Check 34: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 34.

**Mini-example of contrast**

Check 35: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 35.


### Error 8: Accepting arithmetic closure without physical trend check
Why it seems correct:
Equation closure is mistaken for full physical validation.

Detection signal:
Adding a conductive branch appears to reduce source current at same supply voltage.

Mini contrast example:
In passive parallel networks, higher total conductance should increase demand current.

Conceptual correction:
Always include trend-based sanity check after symbolic closure.

## Quick self-control rule

Before accepting any result, confirm four points: [[resistencia_equivalente]] below each active branch value, branch-current closure consistent with [[corriente_total]], homogeneous units in all substitutions, and physically coherent trend when branches are added or removed.

**Why it seems correct**

Check 36: In Resistors in Parallel, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 36.

**Why it is incorrect**

Check 37: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 37.

**Detection signal**

Check 38: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 38.

**Conceptual correction**

Check 39: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 39.

**Mini-example of contrast**

Check 40: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 40.