# Common mistakes: Examples of Translational Equilibrium

## Conceptual errors

### Error 1: Confusing mass [[m]] with weight [[W]]

### Why it seems right
Everyday language often says "weight in kilograms," which blurs mass and force concepts.

### Why it is incorrect
[[m]] is in kg while [[W]] is in N. Ignoring [[g]] corrupts the full equilibrium chain.

### Detection signal
Force equations contain kg terms or unrealistically small loads.

### Conceptual correction
Convert [[m]] to [[W]] first, then run force balances and projections.

### Mini-example
Treating 20 kg as 20 N underestimates actual load by nearly one order of magnitude.

### Error 2: Assuming equilibrium means force absence

### Why it seems right
The word equilibrium sounds like "nothing acts."

### Why it is incorrect
Translational equilibrium requires compensation, not interaction disappearance.

### Detection signal
Your free-body diagram shows only one arrow in a contact or cable setup.

### Conceptual correction
Look for compensation structures: weight-normal, weight-tension, demand-capacity friction pairing.

### Mini-example
A block at rest on a table has non-zero [[W]] and [[N]], yet zero vertical resultant.

### Error 3: Using inconsistent angular references

### Why it seems right
It may look harmless to measure [[alpha]] or [[theta]] from different axes ad hoc.

### Why it is incorrect
Projection formulas depend on angular reference; inconsistency flips component meaning.

### Detection signal
Small angle changes produce physically backward component trends.

### Conceptual correction
Declare the reference once and keep it unchanged through the full derivation.

### Mini-example
Measuring [[theta]] from vertical while using horizontal-reference expressions distorts [[T]].

## Model errors

### Error 4: Treating [[F_s_max]] as always active

### Why it seems right
The friction-limit expression is simple and looks directly usable.

### Why it is incorrect
[[F_s_max]] is capacity ceiling, not mandatory actual friction in every state.

### Detection signal
You automatically set actual friction equal to maximum friction without threshold justification.

### Conceptual correction
Compare tangential demand against capacity; equality occurs only at sticking threshold.

### Mini-example
If [[W_parallel]] is smaller than [[F_s_max]], actual friction stays below the limit.

### Error 5: Extrapolating static models into dynamic regimes

### Why it seems right
Successful classroom closures can create overconfidence.

### Why it is incorrect
Observable acceleration requires dynamic equations, not pure static closure.

### Detection signal
The system keeps moving while your static paper balance says equilibrium.

### Conceptual correction
Escalate model complexity whenever acceleration evidence appears.

### Mini-example
A vibrating box on a ramp is not well described by static equilibrium only.

## Mathematical errors

### Error 6: Mixing components from different axes

### Why it seems right
Fast symbolic manipulation can hide directional incompatibilities.

### Why it is incorrect
Horizontal and vertical components cannot be summed in one scalar equation.

### Detection signal
Equations are written without axis labels or combine incompatible directions.

### Conceptual correction
Write one equation per axis and tag every term by direction.

### Mini-example
Adding [[N]] and tangential demand in one scalar closure breaks vector consistency.

### Error 7: Skipping dimensional control

### Why it seems right
If the final number looks plausible, users may skip unit checks.

### Why it is incorrect
Unit mistakes can keep algebraic form but still destroy physical validity.

### Detection signal
Results fall far outside expected magnitude ranges.

### Conceptual correction
Run dimensional checks at intermediate and final steps.

### Mini-example
Using degrees where software expects radians can distort [[alpha]]-based projections.

## Interpretation errors

### Error 8: Reporting numbers without mechanism

### Why it seems right
In exam culture, numeric output is often treated as the endpoint.

### Why it is incorrect
Without mechanism, you cannot judge transferability or causal consistency.

### Detection signal
The conclusion ends at "value obtained" with no compensation narrative.

### Conceptual correction
Close each example with state, dominant variable, and model-validity limit.

### Mini-example
Stating only [[T]] equals some value does not explain why geometry forces that tension.

### Error 9: Avoiding cross-example comparison

### Why it seems right
Solving problems independently can feel efficient.

### Why it is incorrect
This leaf is about mechanism comparison; without contrast, no transferable criterion emerges.

### Detection signal
You cannot explain why [[N]] dominates one case while [[T]] dominates another.

### Conceptual correction
After each solution, state one similarity and one difference versus another leaf example.

### Mini-example
Equal [[W]] can still require different responses due to [[alpha]] or [[theta]].

## Quick self-control rule

1. Check [[m]] to [[W]] conversion before any balance.
2. Confirm angular references for [[alpha]] and [[theta]].
3. Keep axis equations separated.
4. Compare [[W_parallel]] against [[F_s_max]] before claiming sticking.
5. Write a causal, comparative interpretation.

This protocol catches most recurrent errors in equilibrium-example analysis.
