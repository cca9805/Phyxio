# Frequent errors in the universal law of gravitation

## Conceptual errors

### Error 1: treating the law as inverse-linear instead of inverse-square
Why it looks correct: students transfer intuition from simpler inverse relations.
Detection signal: if [[r]] doubles and the student expects [[F]] to be half, conceptual structure is wrong.
Contrast mini-example: with fixed [[m1]] and [[m2]], moving from [[r1]] to [[r2]] equal to two times [[r1]] gives [[F2]] equal to one quarter of [[F1]].
Conceptual correction: explicitly state square-distance dependence before substitution.

### Error 2: mixing up mass and weight
Why it looks correct: everyday language uses both words loosely.
Detection signal: solutions where [[m]] changes when location changes.
Contrast mini-example: [[m]] stays constant; [[g]] changes, so [[P]] changes.
Conceptual correction: separate body property ([[m]]) from field property ([[g]]).

## Model errors

### Error 3: measuring [[r]] from surfaces instead of centers
Why it looks correct: edge-to-edge distance is visually tempting.
Detection signal: unrealistically high [[F]] in astronomical problems.
Contrast mini-example: for large bodies, center-to-center distance is required; surface distance underestimates [[r]] and overestimates [[F]].
Conceptual correction: declare geometric distance criterion at setup stage.

### Error 4: assuming [[R]] always equals [[r]]
Why it looks correct: many classroom examples are surface-based.
Detection signal: same [[g]] predicted at surface and at significant altitude.
Contrast mini-example: increasing altitude increases [[r]] and decreases [[g]].
Conceptual correction: use [[r]] equals [[R]] only under explicit surface conditions.

### Error 5: using [[F1]] to [[F2]] scaling while masses change
Why it looks correct: the scaling formula seems universal.
Detection signal: comparisons where [[m1]] or [[m2]] changes but pure radial ratio is still used.
Contrast mini-example: if mass changes, full force law must be reapplied.
Conceptual correction: verify invariance of non-radial parameters before shortcut scaling.

## Mathematical errors

### Error 6: power-of-ten mistakes in [[G]]
Why it looks correct: negative exponent is copied incorrectly under time pressure.
Detection signal: [[F]] values far outside physical context.
Contrast mini-example: one exponent error may shift several magnitude orders.
Conceptual correction: run order-of-magnitude checks before accepting final value.

### Error 7: incorrect algebra when solving for [[r]]
Why it looks correct: rushed symbolic manipulation.
Detection signal: negative or dimensionally inconsistent [[r]].
Contrast mini-example: solving for [[r]] requires square root; omitting it breaks dimensions.
Conceptual correction: verify final unit of [[r]] is meters.

### Error 8: mixing kilograms and grams
Why it looks correct: datasets often provide mixed units.
Detection signal: unrealistic [[F]], [[P]], or [[a]].
Contrast mini-example: using grams as kilograms introduces a factor-of-1000 error.
Conceptual correction: convert all masses to SI in a pre-calculation data table.

## Interpretation errors

### Error 9: finishing with a number and no physical trend
Why it looks correct: procedural completion feels enough.
Detection signal: no sentence explaining how [[r]] affects [[F]] or how [[M]] affects [[g]].
Contrast mini-example: similar numeric values can represent different physical scenarios.
Conceptual correction: always add one causal sentence identifying dominant variable and mechanism.

### Error 10: ignoring direction in vector reading
Why it looks correct: many exercises emphasize magnitudes only.
Detection signal: superposition answers that sum positive numbers without orientation.
Contrast mini-example: field contributions can reinforce or cancel depending on direction.
Conceptual correction: switch to vector form whenever orientation is part of the scenario.

## Quick self-control rule

First, verify SI units for all masses and distances. Second, confirm center-to-center meaning of [[r]]. Third, identify requested output: [[F]], [[g]], [[P]], [[a]], or [[F1]]-[[F2]] comparison. Fourth, confirm masses are constant before using radial scaling shortcuts. Fifth, run a plausibility check: when [[r]] increases, intensity should decrease with inverse-square behavior.

An additional robust routine is three-layer review. Algebra layer: equation and rearrangement. Dimensional layer: units and exponents. Physical layer: causal interpretation of the result. If any layer fails, the solution is not complete.

As final quality control, ask a contrast question: if distance doubles, does the result follow expected square-law drop. If not, revisit the setup before revising arithmetic details.