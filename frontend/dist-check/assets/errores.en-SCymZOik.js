const n=`# Common mistakes: Hooke's Law\r
\r
## Conceptual errors\r
\r
### Error 1: Confundir causa con efecto\r
\r
Students often read equations as symmetric and forget operational causality. In this leaf, deformation [[x]] is the controlled variable in many setups, and [[Fel]] is the constitutive response. Reversing this logic produces unclear problem statements and wrong interpretation.\r
\r
### Error 2: Applying the formula without context validation\r
\r
A clean substitution can hide a broken assumption set. Hooke's law requires near-linear elastic behavior in a bounded deformation range. If that is not checked, a mathematically neat answer can still be physically invalid.\r
\r
### Error 3: Mixing similar magnitudes\r
\r
[[Fel]] and [[Fm]] often share close numerical values, so they get mixed. The distinction is essential: [[Fel]] carries direction and sign, [[Fm]] is scalar intensity. Using [[Fm]] to infer restoring direction is a conceptual mistake.\r
\r
\r
\r
## Model errors\r
\r
### Error 4: Missing model breakdown conditions\r
\r
Linear fits can look acceptable in a narrow interval and fail outside it. Hysteresis, geometric constraints, and nonlinear stiffness drift are common failure modes in real components.\r
\r
### Error 5: Ignoring declared model limits\r
\r
Many reports provide a value without a validity statement. That omission is risky. Every constitutive result should include the operating interval where assumptions are supported by data.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless algebraic rearrangement\r
\r
Sign mistakes in rearrangement can flip restoring interpretation. This is frequent when axis convention is not declared before algebraic manipulation.\r
\r
### Error 7: Unit inconsistency\r
\r
Unit conversion errors are severe in spring problems. Mixing cm and m, or N/mm and N/m, can shift results by factors of 10 or 1000.\r
\r
## Interpretation errors\r
\r
### Error 8: False precision\r
\r
Decimal count is not physical credibility. Precision should match data quality and model uncertainty.\r
\r
### Error 9: Stopping at the number\r
\r
Stopping at the number is not enough. A complete answer states what the value means for operation, safety margin, and model trust.\r
\r
## Quick self-control rule\r
\r
- Did I define axis convention before computing [[Fel]]?\r
- Did I keep [[Fel]] and [[Fm]] conceptually separated?\r
- Did I normalize [[k]] and [[x]] to SI units?\r
- Did I verify that [[x]] or [[x_eq]] is inside the linear interval?\r
- Did I end with an actionable physical conclusion?\r
\r
If any answer is no, the solution is not operationally reliable yet.\r
`;export{n as default};
