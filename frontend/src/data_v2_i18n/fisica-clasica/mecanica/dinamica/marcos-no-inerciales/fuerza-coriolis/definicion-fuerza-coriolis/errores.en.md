# Frequent mistakes: Definition of the Coriolis Force

## Conceptual errors

### Error 1: Mixing up cause and effect

Why it seems correct:
The equation includes several variables, so it can look like all of them act as independent causes.

Why it is incorrect:
In this leaf, Coriolis force is interpreted inside a rotating-frame description; it is not an autonomous interaction outside frame choice.

Detection signal:
The explanation treats [[F_cor]] as if it existed "by itself" without declaring reference frame.

Conceptual correction:
Always declare the rotating frame and separate frame representation from external physical interactions.

Mini-example:
Two observers using different frames can describe the same motion with different terms without implying two different physical realities.

### Error 2: Applying the formula mechanically without context validation

Why it seems correct:
The formula returns a quick number.

Why it is incorrect:
Without checking assumptions, regime, and decision objective, the output may be algebraically correct but operationally weak.

Detection signal:
[[a_cor]] or [[F_cor]] is reported with no validity-domain statement.

Conceptual correction:
State assumptions and decision threshold before substitution.

Mini-example:
A magnitude-only result cannot decide direction-sensitive correction by itself.

### Error 3: Confusing similar magnitudes

Why it seems correct:
[[omega]], [[v_rel]], and [[alpha]] appear together and are often treated as interchangeable parameters.

Why it is incorrect:
They have distinct roles: frame rotation, relative speed, and geometric coupling.

Detection signal:
Changing [[m]] is expected to change [[a_cor]], or geometric change is ignored in interpretation.

Conceptual correction:
Track physical role of each magnitude explicitly through the full solution.

Mini-example:
Two scenarios with equal [[v_rel]] can produce different outputs when [[alpha]] differs.

## Model errors

### Error 4: Not recognizing when the simplified model fails

Why it seems correct:
The scalar model works well in many introductory exercises.

Why it is incorrect:
Outside stable regimes, direction and coupled effects become relevant and scalar magnitude alone is insufficient.

Detection signal:
Repeated mismatch above 10% between observed trend and model prediction.

Conceptual correction:
Escalate to vector-aware or extended modeling when failure indicators persist.

Mini-example:
A controller based only on magnitude can fail when orientation varies rapidly.

### Error 5: Ignoring known model limits

Why it seems correct:
The result looks plausible and close to previous values.

Why it is incorrect:
Numerical similarity is not proof of physical validity in a new regime.

Detection signal:
No discard criterion or usage window is documented.

Conceptual correction:
Attach explicit validity limits to every reported output.

Mini-example:
Reusing the same scalar assumptions in a strongly varying geometry regime leads to fragile conclusions.

## Mathematical errors

### Error 6: Careless algebraic rearrangements

Why it seems correct:
The rearrangement looks routine.

Why it is incorrect:
Small algebra mistakes distort sensitivity and can invert relevance interpretation.

Detection signal:
Output trends contradict expected physical trends when inputs vary.

Conceptual correction:
Check both algebra and dimensions at intermediate steps.

Mini-example:
If [[omega]] increases and output decreases without geometric reason, algebra should be rechecked.

### Error 7: Forgetting constants or units

Why it seems correct:
Unit consistency is postponed until the end.

Why it is incorrect:
Without unit coherence, cross-scenario comparisons become unreliable.

Detection signal:
Equivalent calculation routes produce incompatible scales.

Conceptual correction:
Normalize to SI before solving and log all conversions.

Mini-example:
Using [[v_rel]] in km/h without conversion can strongly distort [[a_cor]] reading.

## Interpretation errors

### Error 8: Overstating numerical precision

Why it seems correct:
More decimals look more exact.

Why it is incorrect:
Real precision is set by assumptions and input quality, not by formatting.

Detection signal:
Many decimals are reported without confidence or domain comments.

Conceptual correction:
Match significant digits to model uncertainty.

Mini-example:
Reporting very fine decimals adds no value when operational tolerance is much wider.

### Error 9: Stopping at the number

Why it seems correct:
A computed value feels like completion.

Why it is incorrect:
Without causal reading and decision mapping, the result does not guide action.

Detection signal:
No compensate/keep/escalate decision is stated.

Conceptual correction:
Close every solution with a physically justified action rule.

Mini-example:
The same [[a_cor]] value can be negligible in one scenario and critical in another depending on tolerance.

## Quick self-control rule

1. Is the rotating frame explicitly declared?
2. Are [[a_cor]] and [[F_cor]] clearly distinguished by role?
3. Is validity domain checked before conclusion?
4. Does interpretation include causal meaning, not only value?
5. Does the output lead to a concrete technical decision?
