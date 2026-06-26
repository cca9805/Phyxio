const n=`# Frequent errors: frictionless incline\r
\r
## Conceptual errors\r
\r
### Error 1: Mixing cause and effect\r
\r
Students often treat all variables as equivalent causes. In this model, the direct along-plane driver is [[P_par]], not the full [[P]] vector.\r
\r
### Error 2: Applying formulas without context\r
\r
The expression for [[a]] looks simple, but it assumes no friction and stable contact. Ignoring assumptions turns a correct equation into a wrong prediction.\r
\r
### Error 3: Confusing similar magnitudes\r
\r
[[P_perp]] and [[N]] may have equal value in this model, but they are not the same physical role. One is projected weight; the other is contact reaction.\r
\r
## Model errors\r
\r
### Error 4: Missing ideal-model breakdown\r
\r
If relative error stays above tolerance across repeated runs, the issue is model adequacy, not arithmetic precision.\r
\r
### Error 5: Ignoring validity limits\r
\r
A final number without a validity statement is incomplete. Every solution should include where the model holds and when to transition.\r
\r
## Mathematical errors\r
\r
### Error 6: Wrong trigonometric mapping\r
\r
Swapping sine and cosine in weight decomposition changes mechanism interpretation and produces systematic error.\r
\r
### Error 7: Unit inconsistency\r
\r
Without dimensional traceability, numerically neat results can still be physically invalid.\r
\r
## Interpretation errors\r
\r
### Error 8: Overclaiming precision\r
\r
Too many decimals can hide model and measurement uncertainty. Precision must follow uncertainty, not formatting.\r
\r
### Error 9: Ending with numbers only\r
\r
A computed [[a]], [[v_f]], or [[t]] is not the full answer. The result must be interpreted causally in terms of angle, projection, and model limits.\r
\r
Typical symptom: reports end with a table of values but omit the statement of what controls those values. In a frictionless incline, [[theta]] controls projection, projection controls [[a]], and [[a]] controls [[v_f]] and [[t]]. If that chain is missing, interpretation is incomplete.\r
\r
Correction strategy: after every calculation, add one short paragraph with three elements: mechanism, validity, and consequence. Mechanism explains why the number appears. Validity states where the model applies. Consequence explains what action or comparison the number supports.\r
\r
## Quick self-control rule\r
\r
- Did I decompose [[P]] into [[P_par]] and [[P_perp]] correctly?\r
- Did I verify consistency between [[P_perp]] and [[N]]?\r
- Did I check 0 <= [[a]] <= [[g]]?\r
- Did I keep [[L]], [[v_f]], and [[t]] dimensionally consistent?\r
- Did I include a validity statement and transition condition?\r
\r
If at least one answer is "no", do not finalize the solution. Re-open the derivation and fix the missing causal or dimensional checkpoint. This small discipline sharply reduces conceptual and modeling errors in later, more complex leaves.`;export{n as default};
