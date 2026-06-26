# Frequent mistakes: Newton's Second Law (Force, Mass, and Acceleration)

## Conceptual errors

### Error 1: Mixing cause and effect

**Why it seems plausible**: visible motion is incorrectly treated as direct evidence of high force.

**Why it is incorrect**: second law links [[F_net]] to [[a]], not force directly to velocity.

**Mini contrast example**: two cars can move at the same speed with near-zero resultant if their motion state is unchanged.

**Self-correction heuristic**: check acceleration state before inferring force state.

### Error 2: Mechanical substitution without context

**Why it seems plausible**: memorized equations feel universally ready.

**Why it is incorrect**: without system definition and axis conventions, projected terms like [[F_x]] and [[a_x]] are ambiguous.

**Mini contrast example**: solving incline dynamics without axis projection gives wrong acceleration sign.

**Self-correction heuristic**: define system, frame, and axes before substitution.

### Error 3: Confusing related magnitudes

**Why it seems plausible**: [[F_net]] is confused with one individual force, and [[m]] is confused with weight.

**Why it is incorrect**: resultant is external vector sum, while mass and weight are distinct physical quantities.

**Mini contrast example**: motor force in a cart is not equal to [[F_net]] when friction is significant.

**Self-correction heuristic**: compute resultant explicitly and keep quantity identities separate.

## Model errors

### Error 4: Missing model-break conditions

**Why it seems plausible**: base model works in many classroom cases.

**Why it is incorrect**: dominant unmodeled effects can invalidate predictions.

**Mini contrast example**: at higher speeds, drag can become large enough to require extended modeling.

**Self-correction heuristic**: compare prediction versus measurement and track persistent mismatch.

### Error 5: Ignoring known validity limits

**Why it seems plausible**: law is remembered as unconditional.

**Why it is incorrect**: constant-mass and inertial-frame assumptions are not optional.

**Mini contrast example**: variable-mass propulsion cannot be treated as a fixed-mass block case.

**Self-correction heuristic**: report assumptions and exit criteria in every solution.

## Mathematical errors

### Error 6: Careless algebraic manipulation

**Why it seems plausible**: algebra can look correct while physical meaning is wrong.

**Why it is incorrect**: sign errors and projection mistakes break causal interpretation.

**Mini contrast example**: negative [[F_x]] yielding positive [[a_x]] due to sign mishandling.

**Self-correction heuristic**: validate signs and dimensions step by step.

### Error 7: Unit-discipline failure

**Why it seems plausible**: unit conversion is treated as minor bookkeeping.

**Why it is incorrect**: one unit error can shift results by orders of magnitude.

**Mini contrast example**: entering mass in grams while force is in N creates unrealistic acceleration scale.

**Self-correction heuristic**: convert to SI first and keep unit trace to the final line.

## Interpretation errors

### Error 8: Overstating precision

**Why it seems plausible**: extra decimals look rigorous.

**Why it is incorrect**: true precision is limited by sensor quality and model assumptions.

**Mini contrast example**: reporting acceleration with four decimals when instrument supports only one or two.

**Self-correction heuristic**: align significant figures with uncertainty.

### Error 9: Skipping physical interpretation

**Why it seems plausible**: obtaining a number feels like completion.

**Why it is incorrect**: without causal reading, the solution does not answer the physics question.

**Mini contrast example**: computing [[a]] but not stating which variable should change to reach target response.

**Self-correction heuristic**: finish with explicit cause-effect statement connecting [[F_net]], [[m]], and [[a]].

## Quick self-control rule

1. System and axes declared.
2. [[F_net]] built as real external resultant.
3. Vector and component forms checked for consistency.
4. SI units and signs verified.
5. Final causal interpretation written.
