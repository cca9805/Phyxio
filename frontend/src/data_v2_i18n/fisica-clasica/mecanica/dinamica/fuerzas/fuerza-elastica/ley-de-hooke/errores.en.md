# Common mistakes: Hooke's Law

## Conceptual errors

### Error 1: Confundir causa con efecto

Students often read equations as symmetric and forget operational causality. In this leaf, deformation [[x]] is the controlled variable in many setups, and [[Fel]] is the constitutive response. Reversing this logic produces unclear problem statements and wrong interpretation.

### Error 2: Applying the formula without context validation

A clean substitution can hide a broken assumption set. Hooke's law requires near-linear elastic behavior in a bounded deformation range. If that is not checked, a mathematically neat answer can still be physically invalid.

### Error 3: Mixing similar magnitudes

[[Fel]] and [[Fm]] often share close numerical values, so they get mixed. The distinction is essential: [[Fel]] carries direction and sign, [[Fm]] is scalar intensity. Using [[Fm]] to infer restoring direction is a conceptual mistake.



## Model errors

### Error 4: Missing model breakdown conditions

Linear fits can look acceptable in a narrow interval and fail outside it. Hysteresis, geometric constraints, and nonlinear stiffness drift are common failure modes in real components.

### Error 5: Ignoring declared model limits

Many reports provide a value without a validity statement. That omission is risky. Every constitutive result should include the operating interval where assumptions are supported by data.

## Mathematical errors

### Error 6: Careless algebraic rearrangement

Sign mistakes in rearrangement can flip restoring interpretation. This is frequent when axis convention is not declared before algebraic manipulation.

### Error 7: Unit inconsistency

Unit conversion errors are severe in spring problems. Mixing cm and m, or N/mm and N/m, can shift results by factors of 10 or 1000.

## Interpretation errors

### Error 8: False precision

Decimal count is not physical credibility. Precision should match data quality and model uncertainty.

### Error 9: Stopping at the number

Stopping at the number is not enough. A complete answer states what the value means for operation, safety margin, and model trust.

## Quick self-control rule

- Did I define axis convention before computing [[Fel]]?
- Did I keep [[Fel]] and [[Fm]] conceptually separated?
- Did I normalize [[k]] and [[x]] to SI units?
- Did I verify that [[x]] or [[x_eq]] is inside the linear interval?
- Did I end with an actionable physical conclusion?

If any answer is no, the solution is not operationally reliable yet.
