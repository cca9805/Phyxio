# Frequent errors: frictionless incline

## Conceptual errors

### Error 1: Mixing cause and effect

Students often treat all variables as equivalent causes. In this model, the direct along-plane driver is [[P_par]], not the full [[P]] vector.

### Error 2: Applying formulas without context

The expression for [[a]] looks simple, but it assumes no friction and stable contact. Ignoring assumptions turns a correct equation into a wrong prediction.

### Error 3: Confusing similar magnitudes

[[P_perp]] and [[N]] may have equal value in this model, but they are not the same physical role. One is projected weight; the other is contact reaction.

## Model errors

### Error 4: Missing ideal-model breakdown

If relative error stays above tolerance across repeated runs, the issue is model adequacy, not arithmetic precision.

### Error 5: Ignoring validity limits

A final number without a validity statement is incomplete. Every solution should include where the model holds and when to transition.

## Mathematical errors

### Error 6: Wrong trigonometric mapping

Swapping sine and cosine in weight decomposition changes mechanism interpretation and produces systematic error.

### Error 7: Unit inconsistency

Without dimensional traceability, numerically neat results can still be physically invalid.

## Interpretation errors

### Error 8: Overclaiming precision

Too many decimals can hide model and measurement uncertainty. Precision must follow uncertainty, not formatting.

### Error 9: Ending with numbers only

A computed [[a]], [[v_f]], or [[t]] is not the full answer. The result must be interpreted causally in terms of angle, projection, and model limits.

Typical symptom: reports end with a table of values but omit the statement of what controls those values. In a frictionless incline, [[theta]] controls projection, projection controls [[a]], and [[a]] controls [[v_f]] and [[t]]. If that chain is missing, interpretation is incomplete.

Correction strategy: after every calculation, add one short paragraph with three elements: mechanism, validity, and consequence. Mechanism explains why the number appears. Validity states where the model applies. Consequence explains what action or comparison the number supports.

## Quick self-control rule

- Did I decompose [[P]] into [[P_par]] and [[P_perp]] correctly?
- Did I verify consistency between [[P_perp]] and [[N]]?
- Did I check 0 <= [[a]] <= [[g]]?
- Did I keep [[L]], [[v_f]], and [[t]] dimensionally consistent?
- Did I include a validity statement and transition condition?

If at least one answer is "no", do not finalize the solution. Re-open the derivation and fix the missing causal or dimensional checkpoint. This small discipline sharply reduces conceptual and modeling errors in later, more complex leaves.