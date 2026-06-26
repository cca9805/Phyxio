const n=`# Frequent errors: Translation and Rotation\r
\r
## Conceptual errors\r
\r
### Error 1: Mixing cause and effect\r
\r
Students often see many symbols and assume they all play equivalent causal roles. In this topic, causality is directional: net torque [[tau_net]] drives [[alpha]], and [[alpha]] maps to [[a]] through [[R]].\r
\r
If that chain is inverted, reasoning becomes physically inconsistent even when algebra appears tidy.\r
\r
### Error 2: Plugging formulas without validating context\r
\r
A relation that worked in a textbook problem is not automatically valid in every operating regime. No-slip compatibility, rigid-body assumptions, and coherent units are not optional details.\r
\r
A common warning sign is direct substitution with no explicit validity statement. Strong practice starts with assumptions, then calculation.\r
\r
### Error 3: Treating similar magnitudes as interchangeable\r
\r
[[K]], [[Kt]], and [[Kr]] share units but not meaning. [[K]] is total energy; [[Kt]] and [[Kr]] are mechanism-specific contributions.\r
\r
If the split is ignored, interpretation quality drops sharply because the analyst can no longer identify where energy is being stored during transients.\r
\r
## Model errors\r
\r
### Error 4: Failing to detect model breakdown\r
\r
Because the ideal model often works in baseline conditions, students may keep using it after assumptions have already failed.\r
\r
Persistent mismatch above tolerance under repeated conditions is a clear indicator that the model must be upgraded.\r
\r
### Error 5: Ignoring known validity limits\r
\r
Many reports end with a number but omit the condition under which the number is trustworthy. That omission is not cosmetic; it removes the confidence boundary of the model.\r
\r
Every final statement should include both a validity condition and a transition condition toward an extended model.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless symbolic manipulation\r
\r
Sign mistakes and misplaced terms are frequent in coupled dynamics problems. A formally transformed expression can still be physically wrong.\r
\r
Before accepting a result, check expected sign, dimensional consistency, and order of magnitude.\r
\r
### Error 7: Unit inconsistency\r
\r
Unit mistakes remain one of the highest-impact failure modes in engineering workflows. A single conversion error can invalidate all downstream interpretation.\r
\r
Normalize units early and maintain dimensional traceability throughout the full derivation.\r
\r
## Interpretation errors\r
\r
### Error 8: Overclaiming precision\r
\r
Reporting many decimals can create false confidence. Model uncertainty and measurement noise usually dominate before those decimals become meaningful.\r
\r
Use significant figures aligned with uncertainty and compare uncertainty bands, not isolated point values.\r
\r
### Error 9: Ending with a number and no physical reading\r
\r
A final numeric value is not the end of the analysis. Without physical interpretation, no operational decision can be justified.\r
\r
A complete closure should answer: what the value means, when it is valid, and what action it supports.\r
\r
## Quick self-control rule\r
\r
Use this compact checklist before closing any solution:\r
\r
- Causality: [[tau_net]] drives [[alpha]], and [[alpha]] maps to [[a]] through [[R]].\r
- Energy coherence: [[K]] must remain consistent with [[Kt]] and [[Kr]].\r
- Units and dimensions: every line must preserve physical consistency.\r
- Validity statement: explicitly declare where the model applies and where it fails.\r
- Operational reading: convert the result into an engineering decision, not just a number.`;export{n as default};
