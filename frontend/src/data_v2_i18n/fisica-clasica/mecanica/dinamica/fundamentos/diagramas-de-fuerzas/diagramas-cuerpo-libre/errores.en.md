# Common mistakes: Free-Body Diagrams

## Conceptual errors

### Error 1: Confusing cause and effect

**Why it seems correct**
When motion is visible, students often add a "force of motion" arrow to explain it.

**Why it is incorrect**
Motion is an effect of external interactions, not an external interaction itself.

**Detection signal**
An arrow appears with no source body, then gets used as if it were a valid force.

**Conceptual correction**
Require an explicit "agent -> system" statement for every arrow.

**Contrast mini-example**
Invented "forward force" versus real rope tension [[T]].

### Error 2: Applying formulas mechanically without context

**Why it seems correct**
Using familiar equations quickly feels efficient.

**Why it is incorrect**
Correct equations used in the wrong regime still produce wrong physical conclusions.

**Detection signal**
Substitution starts before axis convention, contact state, and friction regime are declared.

**Conceptual correction**
Set system, axes, and regime first; then choose equations.

**Contrast mini-example**
Using [[fk]] while there is no slip instead of testing whether [[fs]] applies.

### Error 3: Confusing similar magnitudes

**Why it seems correct**
Many quantities share force units and look interchangeable.

**Why it is incorrect**
[[P]], [[N]], [[Fx]], and [[Fy]] have different causal roles.

**Detection signal**
Replacing [[N]] with [[P]] without geometric justification, or treating [[Fext]] as an axis component.

**Conceptual correction**
Classify each quantity by source, direction, and function in the balance.

**Contrast mini-example**
On an incline, [[Ppar]] cannot replace [[Pperp]] even though both come from weight.

## Model errors

### Error 4: Not recognizing when the simplified model fails

**Why it seems correct**
Base FBD models solve many classroom problems well.

**Why it is incorrect**
Real systems include vibration, contamination, and transients that can break assumptions.

**Detection signal**
Predictions repeatedly disagree with measurements despite clean algebra.

**Conceptual correction**
Keep the FBD core, then extend contact or transient detail only when evidence requires it.

**Contrast mini-example**
Same [[T]] with different humidity yields different outcomes due to [[mu_s]] drift.

### Error 5: Ignoring known model limits

**Why it seems correct**
Once learned, the model appears universal.

**Why it is incorrect**
Every model has explicit validity limits.

**Detection signal**
Quasi-static balances are used during impact-like events without regime updates.

**Conceptual correction**
Document assumptions and verify that the scenario remains inside the validity domain.

**Contrast mini-example**
Using simple vertical equilibrium while contact is partially lost.

## Mathematical errors

### Error 6: Careless algebraic rearrangements

**Why it seems correct**
Fast symbolic manipulation feels productive.

**Why it is incorrect**
One sign mistake can reverse acceleration direction and invalidate interpretation.

**Detection signal**
Computed [[ax]] sign contradicts observed tendency and no axis check is done.

**Conceptual correction**
Audit sign handling in each projection before final substitution.

**Contrast mini-example**
Dropping the sign on [[Ppar]] and concluding uphill acceleration with no matching force cause.

### Error 7: Forgetting constants or units

**Why it seems correct**
Units are treated as bookkeeping only.

**Why it is incorrect**
Bad unit conversion shifts magnitudes and regime thresholds.

**Detection signal**
[[P]] or [[N]] appears far outside plausible order of magnitude for the chosen mass.

**Conceptual correction**
Enforce dimensional checks at every axis closure.

**Contrast mini-example**
Using wrong [[g]] and overestimating adhesion margin.

## Interpretation errors

### Error 8: Claiming more precision than the model supports

**Why it seems correct**
Extra decimals look scientific.

**Why it is incorrect**
Numerical precision cannot compensate uncertain contact parameters.

**Detection signal**
Reporting many decimals while [[mu_s]] was only roughly estimated.

**Conceptual correction**
Match significant figures to physical uncertainty.

**Contrast mini-example**
Reporting a threshold with four decimals from coarse friction measurements.

### Error 9: Skipping physical interpretation of the computed result

**Why it seems correct**
A final number feels like completion.

**Why it is incorrect**
Without causal reading, no operational decision can be trusted.

**Detection signal**
Solution ends at arithmetic without regime or risk statement.

**Conceptual correction**
Always close with dominant agent, critical axis, and recommended action.

**Contrast mini-example**
Reporting only [[Fx]] value versus stating whether the system accelerates, balances, or changes regime.

## Quick self-control rule

1. Does every arrow have a physical source?
2. Are axes consistent with the geometry?
3. Was friction regime declared before substitution?
4. Are signs and units coherent on both axes?
5. Does the conclusion translate numbers into physics?

If any answer is no, revise the setup before trusting the output.
