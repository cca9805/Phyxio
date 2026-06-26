# Frequent mistakes: Applications of the Coriolis Force

## Conceptual errors

### Error 1: Mixing up cause and effect

Why it seems correct:
The Coriolis term appears in equations and is mistaken as an autonomous material cause.

Why it is incorrect:
In this leaf it is a rotating-frame reading that changes trajectory description.

Detection signal:
The explanation says the effect "pushes by itself" without reference-frame discussion.

Conceptual correction:
Separate frame reading from real external interactions.

Mini-example:
Lateral offset can come from both Coriolis and wind; blending mechanisms leads to wrong diagnosis.

### Error 2: Applying the formula mechanically without context validation

Why it seems correct:
The formula quickly returns a number.

Why it is incorrect:
Without validating [[v_rel]], [[alpha]], and horizon [[t]], the estimate may be operationally meaningless.

Detection signal:
[[y]] is reported without tolerance comparison.

Conceptual correction:
Always compare output to decision threshold and validity limit.

Mini-example:
A 3 m drift may be negligible in one context and critical in another.

### Error 3: Confusing similar magnitudes

Why it seems correct:
[[omega]], [[v_rel]], and [[a_cor]] are connected and look interchangeable.

Why it is incorrect:
They play different roles: frame rotation, body speed, and lateral response.

Detection signal:
[[v_rel]] is changed and [[a_cor]] is interpreted without reviewing [[alpha]].

Conceptual correction:
Track the dominant variable for each scenario explicitly.

Mini-example:
At fixed [[v_rel]], changing [[alpha]] can change relevance conclusions.

## Model errors

### Error 4: Not recognizing when the simplified model fails

Why it seems correct:
The model performs well in nominal exercises.

Why it is incorrect:
Outside stable regimes, first-order estimation may underrepresent coupled effects.

Detection signal:
Repeated mismatch above 10% between observed drift and predicted [[y]].

Conceptual correction:
Escalate to an extended model once mismatch crosses operational threshold.

Mini-example:
Aggressive attitude changes can produce persistent bias if the simple model is kept.

### Error 5: Ignoring known model limits

Why it seems correct:
The final number still looks plausible.

Why it is incorrect:
A plausible number is not proof of valid scenario assumptions.

Detection signal:
No usage condition is documented with the reported output.

Conceptual correction:
Always report validity window and discard criterion.

Mini-example:
Using average [[alpha]] in strongly oscillatory motion invalidates relevance reading.

## Mathematical errors

### Error 6: Careless algebraic rearrangements

Why it seems correct:
Rearrangement looks routine.

Why it is incorrect:
Small algebra mistakes can distort [[a_cor]] scale and amplify error in [[y]].

Detection signal:
Output order of magnitude conflicts with expected scale.

Conceptual correction:
Check dimensional and scale coherence at each key step.

Mini-example:
A missing numerical factor can turn a moderate correction into a false alarm.

### Error 7: Forgetting units or conversions

Why it seems correct:
Inputs are assumed to be already compatible.

Why it is incorrect:
Unit inconsistency breaks cross-scenario comparability.

Detection signal:
Equivalent calculation routes produce inconsistent outputs.

Conceptual correction:
Normalize to SI and log conversions before estimation.

Mini-example:
Using [[v_rel]] in km/h without conversion distorts predicted drift.

## Interpretation errors

### Error 8: Overstating numerical precision

Why it seems correct:
Many decimals look authoritative.

Why it is incorrect:
Real precision is set by model fidelity and input quality, not number formatting.

Detection signal:
[[y]] is reported with excessive digits and no uncertainty context.

Conceptual correction:
Match significant figures to actual confidence level.

Mini-example:
Fine decimals add no value when operational tolerance is meter-scale.

### Error 9: Stopping at the number

Why it seems correct:
After computing, the task appears complete.

Why it is incorrect:
Without causal reading and threshold comparison, the result does not guide action.

Detection signal:
No statement is given on compensate/ignore/escalate decision.

Conceptual correction:
Always close with an operational decision tied to tolerance.

Mini-example:
A computed [[y]] matters only after comparison with functional limits.

## Quick self-control rule

1. Is the dominant variable identified?
2. Was [[y]] compared with functional tolerance?
3. Was the model validity limit documented?
4. Were frame reading and external causes separated?
5. Does the output support a concrete technical action?
