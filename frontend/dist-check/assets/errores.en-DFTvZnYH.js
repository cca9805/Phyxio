const n=`\uFEFF# Frequent mistakes: Definition of Centrifugal Force

## Conceptual errors

### Error 1: Mixing up cause and effect

Why it seems correct:
The computed [[F_cf]] appears at the end of the calculation, so students treat it as the physical cause.

Why it is incorrect:
In this leaf, [[F_cf]] is a rotating-frame inertial reading, not a new material interaction.

Detection signal:
The explanation says [[F_cf]] "pushes by itself" without separating reference frames.

Conceptual correction:
Distinguish rotating-frame description from real interactions in an inertial frame.

Mini-example:
At constant [[omega]], the support interaction keeps circular motion, while [[F_cf]] organizes the rotating observer equation set.

### Error 2: Applying formulas mechanically without context validation

Why it seems correct:
The formula works in many textbook exercises.

Why it is incorrect:
Outside validity conditions, algebra can be correct while physics is wrong.

Detection signal:
[[F_cf]] is computed with no check of stable spin regime or reliable [[r]].

Conceptual correction:
Validate hypotheses before substitution.

Mini-example:
Using nominal [[omega]] from a machine under strong transient vibration produces misleading readings.

### Error 3: Confusing similar magnitudes

Why it seems correct:
[[omega]], [[v]], and [[a_cf]] are connected and look interchangeable.

Why it is incorrect:
Each one has a specific role: angular regime, tangential regime, or per-mass radial reading.

Detection signal:
Values of [[v]] are substituted where [[omega]] is required without conversion.

Conceptual correction:
Use explicit bridges and unit traceability.

Mini-example:
Apply the tangential bridge relation first, then compute [[F_cf]] with coherent variables.

## Model errors

### Error 4: Not recognizing when the simplified model fails

Why it seems correct:
The model performs well in nominal operation.

Why it is incorrect:
When neglected effects become relevant, prediction and measurement drift apart.

Detection signal:
Repeated prediction-measurement mismatch above about 10%.

Conceptual correction:
Move to an extended model once operational mismatch crosses threshold.

Mini-example:
Predicted [[F_cf]] is 80 N while repeated measured-equivalent demand is near 95 N.

### Error 5: Ignoring known model limits

Why it seems correct:
The output number still looks plausible.

Why it is incorrect:
A plausible number does not validate broken hypotheses.

Detection signal:
No validity limit is documented alongside the result.

Conceptual correction:
Always report both value and condition of applicability.

Mini-example:
Reporting [[a_cf]] without mentioning startup transients leads to unsafe conclusions.

## Mathematical errors

### Error 6: Careless algebraic rearrangements

Why it seems correct:
Symbolic manipulation appears routine.

Why it is incorrect:
One missing exponent can change the physical scale completely.

Detection signal:
Final units do not match expected N or m/s^2 output.

Conceptual correction:
Run dimensional checks at each critical step.

Mini-example:
Using [[F_cf]] = [[m]] [[omega]] [[r]] instead of [[m]] [[omega]]^2 [[r]] underestimates demand.

### Error 7: Forgetting units or constants

Why it seems correct:
Units are treated as secondary notation.

Why it is incorrect:
Unit inconsistency can generate order-of-magnitude failures.

Detection signal:
Two equivalent routes yield incompatible results.

Conceptual correction:
Normalize to SI and cross-check angular and tangential routes.

Mini-example:
Using [[v]] in km/h with [[r]] in m without conversion inflates [[F_cf]].

## Interpretation errors

### Error 8: Overstating numerical precision

Why it seems correct:
Many decimals look authoritative.

Why it is incorrect:
Output precision cannot exceed model and measurement quality.

Detection signal:
Reported value has too many digits with no uncertainty context.

Conceptual correction:
Match significant figures to real confidence level.

Mini-example:
Reporting [[F_cf]] = 28.81234 N with low-precision inputs adds false confidence.

### Error 9: Stopping at the number

Why it seems correct:
The exercise appears finished after obtaining a value.

Why it is incorrect:
Without causal interpretation, the number does not support decisions.

Detection signal:
No explanation of dominant variable or operational implication.

Conceptual correction:
Close every result with physical reading and validity limit.

Mini-example:
A 20% rise in [[omega]] can produce a much larger [[F_cf]] increase; without interpretation, risk is underestimated.

## Quick self-control rule

1. Do units match the reported magnitude?
2. Is the value inside a plausible order of magnitude?
3. Did you separate rotating-frame reading from real interactions?
4. Did you state the model validity limit?
5. Did you translate the number into an operational conclusion?
`;export{n as default};
