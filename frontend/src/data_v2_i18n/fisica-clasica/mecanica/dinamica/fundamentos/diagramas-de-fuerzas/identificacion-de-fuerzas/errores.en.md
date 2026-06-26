# Errores frecuentes: Identifying Forces

## Conceptual errors

### Error 1: Mixing cause and effect

**Why it seems correct**
Students often think any force-like effect can be drawn directly as an independent force.

**Why it is incorrect**
A force must come from an interaction agent. Without agent, no physical force exists.

**Detection signal**
An arrow appears in the diagram but no source body or contact relation is identified.

**Conceptual correction**
For every arrow, name the agent and interaction type.

**Contrast mini-example**
Drawing friction while [[system_contact]] = 0 is invalid because there is no contact.

### Error 2: Applying formulas mechanically without context

**Why it seems correct**
Memorized equations create a false sense of certainty.

**Why it is incorrect**
Formulas are conditional. Friction bounds and contact logic depend on regime assumptions.

**Detection signal**
Using [[f_s]] limit as strict equality in every case.

**Conceptual correction**
Decide regime first, then apply the matching relation.

**Contrast mini-example**
If [[F_ap]] is small, [[f_s]] may equal [[F_ap]], not [[mu_s]]*[[N]].

### Error 3: Confusing similar magnitudes

**Why it seems correct**
[[P]], [[N]], and [[f]] share force units and can have similar numerical scales.

**Why it is incorrect**
Unit equality does not mean same physical role.

**Detection signal**
Replacing [[N]] with [[P]] in a balance with no geometric justification.

**Conceptual correction**
Track each magnitude by agent and direction, not only by number.

**Contrast mini-example**
On level ground, [[N]] often matches [[P]] in magnitude but still has different origin.

## Model errors

### Error 4: Not recognizing simplified-model failure

**Why it seems correct**
Basic static models work in many classroom problems.

**Why it is incorrect**
Real surfaces and contact transitions can violate base assumptions.

**Detection signal**
Repeated mismatch between predicted threshold and observed behavior.

**Conceptual correction**
Keep force map and upgrade contact/friction modeling when evidence demands it.

**Contrast mini-example**
Same [[F_ap]] causes slip after humidity change due to [[mu_s]] drift.

### Error 5: Ignoring known validity limits

**Why it seems correct**
A previously successful model is reused automatically.

**Why it is incorrect**
Every model has explicit bounds of validity.

**Detection signal**
Contact-switching dynamics treated as constant-contact static equilibrium.

**Conceptual correction**
Declare assumptions and check if they still hold.

**Contrast mini-example**
If [[system_contact]] toggles, static-contact balance alone is insufficient.

## Mathematical errors

### Error 6: Careless algebraic handling

**Why it seems correct**
Fast manipulation appears efficient.

**Why it is incorrect**
It can hide sign mistakes and threshold misclassification.

**Detection signal**
Result implies negative contact load or impossible friction state.

**Conceptual correction**
Verify signs, bounds, and regime consistency after each step.

**Contrast mini-example**
Predicting nonzero [[f]] when contact is absent violates model logic.

### Error 7: Forgetting constants or units

**Why it seems correct**
Units are treated as bookkeeping only.

**Why it is incorrect**
Unit mistakes produce wrong thresholds and wrong decisions.

**Detection signal**
Computed [[P]] has implausible magnitude for given [[m]].

**Conceptual correction**
Enforce SI units and constant checks before threshold comparison.

**Contrast mini-example**
Misreading [[g]] value shifts [[P]], [[N]], and friction margin.

## Interpretation errors

### Error 8: Overstating numerical precision

**Why it seems correct**
More decimals appear more scientific.

**Why it is incorrect**
Model uncertainty can dominate beyond a limited precision.

**Detection signal**
Highly precise output with poorly constrained [[mu_s]].

**Conceptual correction**
Match significant figures to physical uncertainty.

**Contrast mini-example**
A threshold with uncertain [[mu_s]] should not be reported with excessive decimals.

### Error 9: Skipping physical interpretation

**Why it seems correct**
A final number feels like completion.

**Why it is incorrect**
Without causal interpretation, you cannot choose a corrective action.

**Detection signal**
Solution ends at calculation with no agent-based conclusion.

**Conceptual correction**
Close every solution with dominant force, limiting condition, and action implication.

**Contrast mini-example**
Same [[F_ap]], different [[mu_s]] -> different operational decision.

## Quick self-control rule

1. Is each force linked to a physical agent?
2. Is [[system_contact]] consistent with contact-force presence?
3. Is static friction treated as bound, not forced equality?
4. Are units and signs coherent?
5. Does the conclusion state regime and actionable implication?

If any answer is no, revise the model setup before trusting results.
