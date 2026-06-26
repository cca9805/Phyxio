const n=`\uFEFF# Errores frecuentes: Newton's Third Law (Action and Reaction)

## Conceptual errors

### Error 1: Confusing cause and effect

Why it seems correct: Students often observe motion change first and infer that one force appears earlier than the other.

Why it is incorrect: In third-law pairing, [[FAB]] and [[FBA]] are simultaneous members of one interaction event. There is no temporal "first force" and "later reaction".

Detection signal: Statements such as "A acts first, then B reacts" appear in the explanation.

Mini-contrast example: Two skaters push each other; both interaction forces exist at the same instant.

Conceptual correction: Use the correct chain: single interaction -> reciprocal pair [[FAB]] and [[FBA]] on different bodies.

### Error 2: Applying the formula mechanically without context validation

Why it seems correct: The equal-and-opposite statement looks universal and can be over-applied to any opposite arrows.

Why it is incorrect: Third law applies only when both forces belong to the same interaction. Opposite forces on one body are not necessarily a third-law pair.

Detection signal: Opposite vectors are canceled without checking body identity and physical origin.

Mini-contrast example: [[W]] and [[N_gen]] may oppose on one block but are not an action-reaction pair.

Conceptual correction: Identify source body, target body, and interaction channel before using reciprocal equations.

### Error 3: Confusing similar magnitudes

Why it seems correct: Symbols such as [[FAx]], [[FBx]], [[FAy]], and [[FBy]] are visually similar.

Why it is incorrect: Index changes modify body assignment and physical role. [[FAx]] is not interchangeable with [[FBx]].

Detection signal: Writing [[FBx]] = [[FAx]] without sign inversion for the same pair.

Mini-contrast example: In one contact, [[Nab]] and [[Nba]] have equal magnitude and opposite direction but belong to different free-body diagrams.

Conceptual correction: Keep a body-source-target mapping table for each quantity before projecting.

## Model errors

### Error 4: Not recognizing when the simplified model fails

Why it seems correct: In basic exercises, simplified pairing often works and creates overconfidence.

Why it is incorrect: In multi-contact systems, pair assignment without channel separation creates systematic residuals.

Detection signal: Persistent residuals such as |[[FBx]] + [[FAx]]| above tolerance after algebra review.

Mini-contrast example: Two bodies connected by both contact and rope interactions cannot be reduced to one undifferentiated pair.

Conceptual correction: Label interaction channels and validate reciprocity channel by channel.

### Error 5: Ignoring known model limits

Why it seems correct: "Equal and opposite" is interpreted as sufficient for every scenario.

Why it is incorrect: Noisy data, axis drift, or unclear contact definitions reduce reliability of naive pair checks.

Detection signal: Strong conclusions without uncertainty bands or axis-consistency checks.

Mini-contrast example: Declaring third-law violation from a 0.08 N mismatch with 0.1 N sensor uncertainty.

Conceptual correction: Declare measurement tolerance and compare residuals against explicit thresholds.

## Mathematical errors

### Error 6: Careless algebraic sign handling

Why it seems correct: Students remember equality and quickly move terms without directional control.

Why it is incorrect: A sign mistake in components can mimic physical inconsistency.

Detection signal: [[FBx]] = [[FAx]] appears where [[FBx]] = -[[FAx]] is required.

Mini-contrast example: If [[FAx]] = 12 N, the reciprocal component must be [[FBx]] = -12 N for that pair.

Conceptual correction: Fix axis direction first, then apply reciprocal equation with explicit signs.

### Error 7: Forgetting units and scale control

Why it seems correct: Third-law discussions often emphasize structure and downplay units.

Why it is incorrect: Unit mismatch can create false contradictions in magnitude comparison.

Detection signal: Mixing N and kN without conversion before reciprocity checks.

Mini-contrast example: 0.8 kN and 800 N are equal, not different force magnitudes.

Conceptual correction: Convert to SI units at the start and keep dimensional traceability.

## Interpretation errors

### Error 8: Overstating numerical precision

Why it seems correct: Many decimals look authoritative.

Why it is incorrect: True precision is limited by measurement uncertainty and model assumptions.

Detection signal: Third-law "failure" claimed for residuals smaller than instrument uncertainty.

Mini-contrast example: A 0.02 N difference with 0.05 N tolerance does not demonstrate physical inconsistency.

Conceptual correction: Report precision consistent with uncertainty and model resolution.

### Error 9: Skipping physical interpretation after calculation

Why it seems correct: Producing a number feels like completion.

Why it is incorrect: Without causal interpretation, one cannot separate pairing mistakes from real effects.

Detection signal: Report ends with equations and no statement of validated pair or conditions.

Mini-contrast example: Writing [[FBA]] = -[[FAB]] without identifying bodies A and B leaves interpretation incomplete.

Conceptual correction: Always close with physical reading: validated pair, tolerance, and system implication.

## Quick self-control rule

1. Does every force have a clear source body and target body?
2. Do compared forces belong to the same interaction channel?
3. Is one axis convention used for both bodies?
4. Were opposite signs enforced in component equations?
5. Is the final conclusion consistent with measurement tolerance?\r
`;export{n as default};
