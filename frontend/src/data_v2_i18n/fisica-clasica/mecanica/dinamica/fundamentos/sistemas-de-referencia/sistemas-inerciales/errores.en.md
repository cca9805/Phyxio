# Frequent errors: Inertial frames

## Conceptual errors

### Error 1: Mixing cause and effect

Why it seems correct: many variables appear together in equations.

Why it is incorrect: in inertial dynamics, [[F_neta]] drives [[a]] for a given [[m]].

Detection signal: acceleration is discussed without identifying net real force.

Mini contrast example: equal [[m]] with different [[F_neta]] gives different [[a]].

Conceptual correction: keep force as cause and acceleration as response.

### Error 2: Applying equations without validating context

Why it seems correct: the formula is familiar and often reused.

Why it is incorrect: if the frame is non-inertial, direct form is insufficient.

Detection signal: persistent mismatch between [[F_neta]] and [[a]].

Mini contrast example: accelerated-elevator observations require frame-aware treatment.

Conceptual correction: verify frame class before computing.

### Error 3: Confusing similar magnitudes

Why it seems correct: [[v]], [[v_obs1]], [[v_obs2]], and [[V_rel]] share similar units.

Why it is incorrect: they encode different observer roles.

Detection signal: replacing [[V_rel]] with [[v]] in frame transformation.

Mini contrast example: [[v_obs2]] changes by transformation even when object dynamics is unchanged.

Conceptual correction: label observer for every velocity symbol.

## Model errors

### Error 4: Not noticing model breakdown

Why it seems correct: introductory examples hide edge cases.

Why it is incorrect: residual growth indicates assumption failure.

Detection signal: abs([[F_neta]] - [[m]]*[[a]]) above tolerance repeatedly.

Mini contrast example: residual greater than 0.10 N in repeated trials.

Conceptual correction: move to extended model when mismatch persists.

### Error 5: Ignoring known validity limits

Why it seems correct: Galilean form is treated as universal.

Why it is incorrect: requires inertial frames and classical regime.

Detection signal: using same treatment when [[V_rel]] is not approximately constant.

Mini contrast example: rotating observer frame analyzed as if inertial.

Conceptual correction: check hypotheses before extrapolating.

## Mathematical errors

### Error 6: Sign mistakes in transformations

Why it seems correct: subtraction seems trivial.

Why it is incorrect: one sign error flips interpretation.

Detection signal: predicted trend conflicts with measured motion.

Mini contrast example: misusing [[v_obs2]] transformation sign.

Conceptual correction: fix axis convention at start and keep it.

### Error 7: Unit inconsistency

Why it seems correct: numbers look plausible in mixed units.

Why it is incorrect: mixed units produce false magnitudes.

Detection signal: unrealistic order-of-magnitude results.

Mini contrast example: combining km/h and m/s without conversion.

Conceptual correction: normalize to SI before operations.

## Interpretation errors

### Error 8: Overstating precision

Why it seems correct: many decimals look rigorous.

Why it is incorrect: model and sensor uncertainty set true confidence.

Detection signal: conclusions based on differences below noise.

Mini contrast example: claiming deterministic change smaller than uncertainty.

Conceptual correction: match significant figures to uncertainty.

### Error 9: Stopping at the number

Why it seems correct: equation output feels complete.

Why it is incorrect: physics requires causal interpretation.

Detection signal: report ends with numbers and no model-validity statement.

Mini contrast example: reporting [[a_obs2]] without discussing inertial consistency.

Conceptual correction: close with causal reading and validity limits.

## Quick self-control rule

1. Did you define [[F_neta]], [[m]], [[a]], [[v]], [[V_rel]], and [[t]]?
2. Did you verify inertial-frame assumptions?
3. Did you check consistency of [[v_obs1]], [[v_obs2]], and [[V_rel]]?
4. Is residual within tolerance?
5. Does your conclusion respect uncertainty bounds?
