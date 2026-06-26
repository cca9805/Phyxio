# Frequent mistakes

## Conceptual errors

### Error 1: treating periodicity as if causality were irrelevant

Why it seems correct:
A smooth [[x]] curve may create the illusion that every cycle is trivial and that [[v]] and [[a]] add no new information.

Detection sign:
The explanation does not describe sign and magnitude changes of [[v]] and [[a]] through the cycle.

Mini contrast example:
Two instants can share the same [[x]] value while having opposite [[v]] and different physical meaning.

Conceptual correction:
In SHM, full state reading requires combined interpretation of [[x]], [[v]], and [[a]] over time.

### Error 2: assuming [[phi]] is only a numeric offset

Why it seems correct:
In basic exercises, [[phi]] appears to only shift plots without physical consequences.

Detection sign:
Results are reported without clarifying initial condition or reference instant.

Mini contrast example:
With identical [[A]] and [[omega]], different [[phi]] values define different initial states.

Conceptual correction:
[[phi]] carries initial-condition meaning and must be physically justified.

## Model errors

### Error 3: using ideal SHM outside the linear range

Why it seems correct:
The ideal equation is compact and visually convincing over many datasets.

Detection sign:
Increasing [[A]] changes waveform shape, yet the same model is kept without domain discussion.

Mini contrast example:
Once nonlinear behavior appears, phase and amplitude consistency can break.

Conceptual correction:
Check validity limits first, then accept parameter interpretation.

### Error 4: ignoring relevant forcing or energy loss

Why it seems correct:
Ideal form is used by default and systematic mismatches are labeled as minor noise.

Detection sign:
Amplitude drifts cycle by cycle and no model revision is considered.

Mini contrast example:
A monotonic envelope trend often indicates damping rather than random error.

Conceptual correction:
When drift is sustained, move to damped or forced models explicitly.

## Mathematical errors

### Error 5: mixing time units without normalization

Why it seems correct:
Numeric values look close enough, so substitutions are made directly.

Detection sign:
[[omega]] and [[t]] are taken in incompatible time units.

Mini contrast example:
Missing one conversion changes accumulated phase and can invert interpretation.

Conceptual correction:
Normalize units before numerical substitution.

### Error 6: finishing with isolated arithmetic and no dimensional check

Why it seems correct:
The final number looks reasonable and is accepted.

Detection sign:
No verification is done to confirm that reported quantity has correct units.

Mini contrast example:
A computed [[v]] expressed with length-only units reveals inconsistent operations.

Conceptual correction:
Add dimensional checks at the end of each solving stage.

## Interpretation errors

### Error 7: reading every mismatch as pure measurement error

Why it seems correct:
Any difference between prediction and data is immediately labeled as noise.

Detection sign:
No sensitivity test is run for plausible shifts in [[phi]] or [[omega]].

Mini contrast example:
A small change in [[phi]] may explain phase mismatch without invalidating data.

Conceptual correction:
Separate measurement error, parameter uncertainty, and model limits.

### Error 8: reporting numbers without causal meaning

Why it seems correct:
Fast grading culture often rewards final numbers over interpretation.

Detection sign:
No statement explains what the result implies for dynamic behavior.

Mini contrast example:
Two cases with equal [[A]] but different [[omega]] may require opposite design choices.

Conceptual correction:
Close each solution with explicit physical reading of stability, phase, and use-case impact.

## Quick self-control rule

1. Identify target magnitude before operating.
2. Check linearity assumptions and initial conditions.
3. Verify coherence among [[x]], [[v]], and [[a]].
4. Confirm units and order of magnitude.
5. Translate results into a concrete physical conclusion.
