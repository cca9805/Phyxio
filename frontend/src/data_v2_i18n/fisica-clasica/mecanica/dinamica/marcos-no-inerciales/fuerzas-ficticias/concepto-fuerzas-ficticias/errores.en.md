# Frequent mistakes: Concept of Fictitious Forces

## Conceptual errors

### Error 1: Mixing up cause and effect

Why it seems correct:
The equation shows multiple quantities, so it looks like all of them are independent physical causes.

Why it is incorrect:
In this leaf, [[F_fict]] is not a new material interaction. It is a frame correction linked to [[a_marco]].

Detection signal:
The explanation treats [[F_fict]] as a contact or field force without declaring frame choice.

Conceptual correction:
Declare frame first, then separate real interaction summary [[F_res]] from inertial correction [[F_fict]].

Mini-example:
An inertial observer uses [[a_in]], while an accelerated observer uses [[a_rel]] with [[F_fict]]. Same event, different representation.

### Error 2: Using the formula mechanically without context checks

Why it seems correct:
Substitution returns a quick number.

Why it is incorrect:
Without validity checks, the number may be algebraically correct but physically unfit for decisions.

Detection signal:
[[a_rel]] is reported with no stability or threshold discussion.

Conceptual correction:
Attach explicit model-validity and escalation criteria to the result.

Mini-example:
Residual mismatch repeatedly above 10 percent means the first-order model should not drive final decisions.

### Error 3: Confusing similar magnitudes

Why it seems correct:
[[a_in]] and [[a_rel]] are both accelerations and can appear close in some situations.

Why it is incorrect:
They belong to different frames and answer different physical questions.

Detection signal:
[[a_in]] and [[a_rel]] are used interchangeably without referencing [[a_marco]].

Conceptual correction:
Keep explicit conversion logic between frame readings.

Mini-example:
If [[a_marco]] is nonzero, assuming [[a_in]] equals [[a_rel]] by default is wrong.

## Model errors

### Error 4: Not recognizing simplified-model breakdown

Why it seems correct:
The simplified model works in many classroom exercises.

Why it is incorrect:
Outside stable regimes, neglected effects become decision-relevant.

Detection signal:
Persistent mismatch greater than 10 percent between measured and estimated trends.

Conceptual correction:
Escalate to richer modeling when failure indicators persist.

Mini-example:
Strongly varying [[a_marco]] over short windows can invalidate single-value scalar representation.

### Error 5: Ignoring known validity limits

Why it seems correct:
The output value looks plausible.

Why it is incorrect:
Plausibility is not proof of validity.

Detection signal:
No declared usage range or discard criterion.

Conceptual correction:
Report every result with its validity limits.

Mini-example:
A method valid in stable segments can fail in high-transient segments even if values look similar.

## Mathematical errors

### Error 6: Careless algebraic rearrangements

Why it seems correct:
The derivation feels routine.

Why it is incorrect:
A sign mistake in [[F_fict]] can invert causal interpretation.

Detection signal:
Increasing [[a_marco]] unexpectedly decreases |[[F_fict]]| without physical justification.

Conceptual correction:
Check signs and dimensions at intermediate steps.

Mini-example:
One missing minus sign can flip a stability diagnosis.

### Error 7: Ignoring units

Why it seems correct:
Unit normalization is postponed.

Why it is incorrect:
Mixed units break scenario comparability.

Detection signal:
Equivalent routes produce incompatible scales.

Conceptual correction:
Normalize units at input stage and log conversions.

Mini-example:
Inconsistent [[a_marco]] units directly distort [[F_fict]] scale.

## Interpretation errors

### Error 8: Overstating precision

Why it seems correct:
Many decimals look exact.

Why it is incorrect:
True precision depends on assumptions and data quality.

Detection signal:
Fine decimals are reported with no uncertainty context.

Conceptual correction:
Align significant digits with model confidence.

Mini-example:
Four decimals do not improve decisions when thresholds are coarse.

### Error 9: Stopping at the number

Why it seems correct:
A computed value feels like completion.

Why it is incorrect:
Without causal meaning, the number does not support action.

Detection signal:
The report ends with arithmetic and no physical conclusion.

Conceptual correction:
Always close with a frame-aware decision rule.

Mini-example:
Same |[[F_fict]]| can imply different decisions under different [[F_res]] conditions.

## Quick self-control rule

1. Was frame and axis declared?
2. Was [[F_res]] separated from [[F_fict]]?
3. Were [[a_rel]] and [[a_in]] distinguished through [[a_marco]]?
4. Were sign and units validated?
5. Was a physical decision stated?
