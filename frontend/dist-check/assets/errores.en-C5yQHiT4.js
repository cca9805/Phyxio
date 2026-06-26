const e=`# Frequent errors in the universal law of gravitation\r
\r
## Conceptual errors\r
\r
### Error 1: treating the law as inverse-linear instead of inverse-square\r
Why it looks correct: students transfer intuition from simpler inverse relations.\r
Detection signal: if [[r]] doubles and the student expects [[F]] to be half, conceptual structure is wrong.\r
Contrast mini-example: with fixed [[m1]] and [[m2]], moving from [[r1]] to [[r2]] equal to two times [[r1]] gives [[F2]] equal to one quarter of [[F1]].\r
Conceptual correction: explicitly state square-distance dependence before substitution.\r
\r
### Error 2: mixing up mass and weight\r
Why it looks correct: everyday language uses both words loosely.\r
Detection signal: solutions where [[m]] changes when location changes.\r
Contrast mini-example: [[m]] stays constant; [[g]] changes, so [[P]] changes.\r
Conceptual correction: separate body property ([[m]]) from field property ([[g]]).\r
\r
## Model errors\r
\r
### Error 3: measuring [[r]] from surfaces instead of centers\r
Why it looks correct: edge-to-edge distance is visually tempting.\r
Detection signal: unrealistically high [[F]] in astronomical problems.\r
Contrast mini-example: for large bodies, center-to-center distance is required; surface distance underestimates [[r]] and overestimates [[F]].\r
Conceptual correction: declare geometric distance criterion at setup stage.\r
\r
### Error 4: assuming [[R]] always equals [[r]]\r
Why it looks correct: many classroom examples are surface-based.\r
Detection signal: same [[g]] predicted at surface and at significant altitude.\r
Contrast mini-example: increasing altitude increases [[r]] and decreases [[g]].\r
Conceptual correction: use [[r]] equals [[R]] only under explicit surface conditions.\r
\r
### Error 5: using [[F1]] to [[F2]] scaling while masses change\r
Why it looks correct: the scaling formula seems universal.\r
Detection signal: comparisons where [[m1]] or [[m2]] changes but pure radial ratio is still used.\r
Contrast mini-example: if mass changes, full force law must be reapplied.\r
Conceptual correction: verify invariance of non-radial parameters before shortcut scaling.\r
\r
## Mathematical errors\r
\r
### Error 6: power-of-ten mistakes in [[G]]\r
Why it looks correct: negative exponent is copied incorrectly under time pressure.\r
Detection signal: [[F]] values far outside physical context.\r
Contrast mini-example: one exponent error may shift several magnitude orders.\r
Conceptual correction: run order-of-magnitude checks before accepting final value.\r
\r
### Error 7: incorrect algebra when solving for [[r]]\r
Why it looks correct: rushed symbolic manipulation.\r
Detection signal: negative or dimensionally inconsistent [[r]].\r
Contrast mini-example: solving for [[r]] requires square root; omitting it breaks dimensions.\r
Conceptual correction: verify final unit of [[r]] is meters.\r
\r
### Error 8: mixing kilograms and grams\r
Why it looks correct: datasets often provide mixed units.\r
Detection signal: unrealistic [[F]], [[P]], or [[a]].\r
Contrast mini-example: using grams as kilograms introduces a factor-of-1000 error.\r
Conceptual correction: convert all masses to SI in a pre-calculation data table.\r
\r
## Interpretation errors\r
\r
### Error 9: finishing with a number and no physical trend\r
Why it looks correct: procedural completion feels enough.\r
Detection signal: no sentence explaining how [[r]] affects [[F]] or how [[M]] affects [[g]].\r
Contrast mini-example: similar numeric values can represent different physical scenarios.\r
Conceptual correction: always add one causal sentence identifying dominant variable and mechanism.\r
\r
### Error 10: ignoring direction in vector reading\r
Why it looks correct: many exercises emphasize magnitudes only.\r
Detection signal: superposition answers that sum positive numbers without orientation.\r
Contrast mini-example: field contributions can reinforce or cancel depending on direction.\r
Conceptual correction: switch to vector form whenever orientation is part of the scenario.\r
\r
## Quick self-control rule\r
\r
First, verify SI units for all masses and distances. Second, confirm center-to-center meaning of [[r]]. Third, identify requested output: [[F]], [[g]], [[P]], [[a]], or [[F1]]-[[F2]] comparison. Fourth, confirm masses are constant before using radial scaling shortcuts. Fifth, run a plausibility check: when [[r]] increases, intensity should decrease with inverse-square behavior.\r
\r
An additional robust routine is three-layer review. Algebra layer: equation and rearrangement. Dimensional layer: units and exponents. Physical layer: causal interpretation of the result. If any layer fails, the solution is not complete.\r
\r
As final quality control, ask a contrast question: if distance doubles, does the result follow expected square-law drop. If not, revisit the setup before revising arithmetic details.`;export{e as default};
