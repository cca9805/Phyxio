# Frequent errors: Weight in Different Contexts

## Conceptual errors

### Error 1: Confusing cause and effect

This appears when all variables in one expression are treated as equivalent causal drivers.

Why it looks correct: equations list many symbols side by side.

Why it is incorrect: [[G]] and [[M]] define field source, while [[a]] modifies support reading [[Pap]].

Detection signal: claiming that body mass changed because scale reading changed.

Conceptual correction: separate real-field quantities ([[P]], [[gmod]]) from contact quantities ([[Pap]], [[N]]).

### Error 2: Applying a formula without checking context

Why it looks correct: the equation is familiar and often successful in simple problems.

Why it is incorrect: each equation has a validity domain.

Detection signal: stable calculations that disagree with telemetry or validated simulation.

Conceptual correction: declare model family first (local vs central) and justify it.

### Error 3: Mixing similar magnitudes

Why it looks correct: [[m]], [[Pmod]], and [[Pap]] can appear in the same practical workflow.

Why it is incorrect: they represent different physical roles.

Detection signal: statements such as "gravity disappears in orbit because scale reading is near zero".

Conceptual correction: label each quantity as body property, field property, or support response.

## Model errors

### Error 4: Not recognizing simplified-model failure

Why it looks correct: local approximations work in many textbook problems.

Why it is incorrect: scale changes can invalidate local assumptions.

Detection signal: difference between two models exceeds measurement uncertainty.

Conceptual correction: use a switch rule. If abs([[h]]) <= 0.02*[[R]] is not met, migrate to central modeling.

### Error 5: Ignoring known model limits

Why it looks correct: memorized formulas create overconfidence.

Why it is incorrect: equations are domain-limited tools, not universal automatic answers.

Detection signal: inability to explain why one formula was selected over another from the same leaf.

Conceptual correction: state dominant variable, validity limit, and accepted error before solving.

## Mathematical errors

### Error 6: Careless algebraic rearrangement

Why it looks correct: algebraic manipulation may appear mechanically valid.

Why it is incorrect: mathematically valid steps can violate physical constraints.

Detection signal: negative or undefined values where context requires positive magnitudes.

Conceptual correction: validate dimensions, signs, and range after each critical transformation.

### Error 7: Forgetting constants or unit consistency

Why it looks correct: unit handling is often treated as secondary.

Why it is incorrect: one unit mismatch can shift results by many orders of magnitude.

Detection signal: output scale is implausible for the problem context.

Conceptual correction: convert to SI early and keep explicit conversion traceability.

## Interpretation errors

### Error 8: Reporting more precision than the model supports

Why it looks correct: many decimals look rigorous.

Why it is incorrect: numerical precision is not model validity.

Detection signal: highly detailed decimals with no model-uncertainty discussion.

Conceptual correction: round according to model and instrument quality, not calculator capacity.

### Error 9: Skipping physical interpretation

Why it looks correct: obtaining a number may feel like finishing the problem.

Why it is incorrect: without causal interpretation, the number can be physically meaningless.

Detection signal: inability to explain why [[Pap]] changed when [[a]] changed.

Conceptual correction: finish with a causal sentence stating what changed first and why.

## Quick self-control rule

1. Dimensional sense: does the output unit match the target quantity.
2. Physical scale: is the value inside plausible order-of-magnitude bounds.
3. Sign logic: does sign and trend match direction conventions.
4. Domain compliance: are model limits satisfied.
5. Causal explanation: can you explain the result in physical language.

If any item fails, revisit assumptions before trusting the result.

