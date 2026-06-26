# Frequent errors: Relative acceleration

## Conceptual errors

### Error 1: Mixing cause and effect

Why it seems correct: acceleration is often viewed as a property of the object only.

Why it is incorrect: [[a_rel]] combines object and observer dynamics.

Detection signal: conclusions are written without mentioning [[a_B]].

Mini contrast example: keeping [[a_A]] fixed while changing [[a_B]] changes [[a_rel]].

Conceptual correction: separate object acceleration from observer-frame acceleration before interpretation.

### Error 2: Applying the formula without checking context

Why it seems correct: the equation is short and familiar.

Why it is incorrect: assumptions matter; pure translation and synchronization are required.

Detection signal: same formula used in rotating-frame data with no extra terms.

Mini contrast example: a rotating platform cannot be analyzed by translational subtraction only.

Conceptual correction: validate assumptions first, compute second.

## Model errors

### Error 3: Ignoring model boundaries

Why it seems correct: many solved exercises hide edge conditions.

Why it is incorrect: model mismatch appears when residual remains high.

Detection signal: residual above tolerance in repeated runs.

Mini contrast example: residual larger than 0.10 m/s^2 for multiple trials.

Conceptual correction: escalate to extended model when evidence shows persistent mismatch.

### Error 4: Assuming synchronization quality automatically

Why it seems correct: timestamps look close enough at first sight.

Why it is incorrect: small timing drift can distort acceleration subtraction.

Detection signal: interpretation changes drastically after minor time shifts.

Mini contrast example: re-aligning data by 20 ms flips the relative-acceleration sign.

Conceptual correction: verify synchronization protocol explicitly.

## Mathematical errors

### Error 5: Sign convention mistakes

Why it seems correct: subtraction is treated as purely algebraic.

Why it is incorrect: sign meaning is physical and axis-dependent.

Detection signal: computed trend contradicts measured scenario.

Mini contrast example: replacing subtraction with addition produces opposite control advice.

Conceptual correction: lock axis conventions at the beginning and never switch mid-solution.

### Error 6: Unit inconsistency

Why it seems correct: all values look like acceleration values.

Why it is incorrect: mixed scales (for example m/s^2 and cm/s^2) produce false magnitudes.

Detection signal: unrealistic order-of-magnitude jumps.

Mini contrast example: an apparent tenfold change caused only by unit mismatch.

Conceptual correction: normalize units before any subtraction.

## Interpretation errors

### Error 7: Overstating precision

Why it seems correct: many decimals appear rigorous.

Why it is incorrect: uncertainty limits significance.

Detection signal: strong claims based on differences below sensor noise.

Mini contrast example: interpreting 0.01 m/s^2 shift with 0.05 m/s^2 uncertainty as deterministic.

Conceptual correction: align significant figures with uncertainty.

### Error 8: Stopping at the number

Why it seems correct: calculation feels complete.

Why it is incorrect: numbers without causal reading are not explanations.

Detection signal: reports end with value output and no mechanism statement.

Mini contrast example: giving [[a_rel]] but not explaining whether object or observer changed.

Conceptual correction: always conclude with causal interpretation and validity limits.

## Quick self-control rule

1. Did you define [[a_rel]], [[a_A]], [[a_B]], and [[t]] clearly?
2. Did you check translational assumptions and synchronization?
3. Are units and sign conventions consistent?
4. Is residual inside tolerance?
5. Does your conclusion respect uncertainty bounds?
