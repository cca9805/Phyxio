# Frequent errors: Translation and Rotation

## Conceptual errors

### Error 1: Mixing cause and effect

Students often see many symbols and assume they all play equivalent causal roles. In this topic, causality is directional: net torque [[tau_net]] drives [[alpha]], and [[alpha]] maps to [[a]] through [[R]].

If that chain is inverted, reasoning becomes physically inconsistent even when algebra appears tidy.

### Error 2: Plugging formulas without validating context

A relation that worked in a textbook problem is not automatically valid in every operating regime. No-slip compatibility, rigid-body assumptions, and coherent units are not optional details.

A common warning sign is direct substitution with no explicit validity statement. Strong practice starts with assumptions, then calculation.

### Error 3: Treating similar magnitudes as interchangeable

[[K]], [[Kt]], and [[Kr]] share units but not meaning. [[K]] is total energy; [[Kt]] and [[Kr]] are mechanism-specific contributions.

If the split is ignored, interpretation quality drops sharply because the analyst can no longer identify where energy is being stored during transients.

## Model errors

### Error 4: Failing to detect model breakdown

Because the ideal model often works in baseline conditions, students may keep using it after assumptions have already failed.

Persistent mismatch above tolerance under repeated conditions is a clear indicator that the model must be upgraded.

### Error 5: Ignoring known validity limits

Many reports end with a number but omit the condition under which the number is trustworthy. That omission is not cosmetic; it removes the confidence boundary of the model.

Every final statement should include both a validity condition and a transition condition toward an extended model.

## Mathematical errors

### Error 6: Careless symbolic manipulation

Sign mistakes and misplaced terms are frequent in coupled dynamics problems. A formally transformed expression can still be physically wrong.

Before accepting a result, check expected sign, dimensional consistency, and order of magnitude.

### Error 7: Unit inconsistency

Unit mistakes remain one of the highest-impact failure modes in engineering workflows. A single conversion error can invalidate all downstream interpretation.

Normalize units early and maintain dimensional traceability throughout the full derivation.

## Interpretation errors

### Error 8: Overclaiming precision

Reporting many decimals can create false confidence. Model uncertainty and measurement noise usually dominate before those decimals become meaningful.

Use significant figures aligned with uncertainty and compare uncertainty bands, not isolated point values.

### Error 9: Ending with a number and no physical reading

A final numeric value is not the end of the analysis. Without physical interpretation, no operational decision can be justified.

A complete closure should answer: what the value means, when it is valid, and what action it supports.

## Quick self-control rule

Use this compact checklist before closing any solution:

- Causality: [[tau_net]] drives [[alpha]], and [[alpha]] maps to [[a]] through [[R]].
- Energy coherence: [[K]] must remain consistent with [[Kt]] and [[Kr]].
- Units and dimensions: every line must preserve physical consistency.
- Validity statement: explicitly declare where the model applies and where it fails.
- Operational reading: convert the result into an engineering decision, not just a number.