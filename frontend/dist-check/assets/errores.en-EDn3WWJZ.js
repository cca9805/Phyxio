const n=`\uFEFF# Frequent mistakes: Interpretation of Fictitious Forces

## Conceptual errors

### Error 1: Mixing up cause and effect

Why it seems correct:
Many quantities appear in the equations, so they can look like equivalent material causes.

Why it is incorrect:
[[F_fict]] is not an extra material interaction. It is a frame correction linked to [[a_marco]].

Detection signal:
The report describes [[F_fict]] as if it were a contact or field force.

Conceptual correction:
Declare observer frame before interpreting outputs.

Mini-example:
Two observers using different frames can produce different acceleration readings for the same event without contradiction.

### Error 2: Applying formulas mechanically without context checks

Why it seems correct:
A quick number appears to close the task.

Why it is incorrect:
Without validity criteria, correct arithmetic can still drive wrong decisions.

Detection signal:
[[a_rel]] is reported without residual threshold or frame note.

Conceptual correction:
Attach validity limits and escalation rules to every result.

Mini-example:
A value valid in a stable segment may fail in a transient phase.

### Error 3: Confusing similar magnitudes

Why it seems correct:
[[a_in]] and [[a_rel]] are both accelerations and can be numerically close.

Why it is incorrect:
They represent different observer frames and are not interchangeable when [[a_marco]] is nonzero.

Detection signal:
The report uses [[a_in]] and [[a_rel]] as synonyms.

Conceptual correction:
Keep explicit transformation logic through [[a_marco]].

Mini-example:
Assuming [[a_in]] equals [[a_rel]] under nonzero [[a_marco]] leads to false diagnosis.

## Model errors

### Error 4: Not recognizing simplified-model breakdown

Why it seems correct:
The simple model worked in earlier exercises.

Why it is incorrect:
Out of regime, interpretation reliability drops even if arithmetic looks clean.

Detection signal:
Persistent mismatch above 10 percent.

Conceptual correction:
Escalate when failure indicator repeats.

Mini-example:
Using scalar-only reading in strongly coupled direction-sensitive scenarios yields unstable actions.

### Error 5: Ignoring known model limits

Why it seems correct:
Output magnitude looks plausible.

Why it is incorrect:
Numerical plausibility is not proof of hypothesis validity.

Detection signal:
No validity limit documented with the result.

Conceptual correction:
Attach range of use and discard condition to every report.

Mini-example:
The same value can be valid in steady operation and invalid in a transient regime.

## Mathematical errors

### Error 6: Careless algebraic rearrangements

Why it seems correct:
Derivation steps look routine.

Why it is incorrect:
A sign mistake changes causal reading and action choice.

Detection signal:
Physical narrative contradicts computed trend.

Conceptual correction:
Validate sign and units at each intermediate step.

Mini-example:
A sign mistake in [[F_fict]] can invert a stability conclusion.

### Error 7: Ignoring unit consistency

Why it seems correct:
Unit conversion is postponed.

Why it is incorrect:
Cross-scenario interpretation becomes incoherent.

Detection signal:
Equivalent routes produce incompatible scales.

Conceptual correction:
Normalize units at input stage and log conversions.

Mini-example:
Wrong [[a_marco]] units directly distort [[F_fict]] scale.

## Interpretation errors

### Error 8: Overstating precision

Why it seems correct:
Many decimals look exact.

Why it is incorrect:
Real precision depends on assumptions and data quality.

Detection signal:
Fine decimals reported without uncertainty context.

Conceptual correction:
Match significant digits to confidence level.

Mini-example:
Extra decimals do not improve decisions with coarse thresholds.

### Error 9: Stopping at the number

Why it seems correct:
Computing a value feels like completion.

Why it is incorrect:
Without causal reading, there is no reliable action guidance.

Detection signal:
Report ends at equations and omits action meaning.

Conceptual correction:
Close with cause, validity limit, and recommended action.

Mini-example:
Same output magnitude can imply opposite actions under different [[F_res]] contexts.

## Quick self-control rule

1. Was frame and axis declared?
2. Were [[F_res]] and [[F_fict]] separated?
3. Were [[a_rel]] and [[a_in]] distinguished via [[a_marco]]?
4. Were sign and units validated?
5. Was final action meaning stated?\r
`;export{n as default};
