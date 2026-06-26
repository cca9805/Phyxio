# Frequent mistakes in the mass-spring oscillator

## Conceptual errors

### Error 1: assuming a single variable explains all behaviour
Why it seems correct: students observe a clear change in [[m]] or [[k]] and infer a one-variable explanation.
Detection signal: when asked to predict [[T]] or [[f]], the explanation ignores coupled inertia-stiffness effects.
Mini contrast example: two systems with equal [[m]] and different [[k]] do not share the same rhythm.
Conceptual correction: interpret the model as coupled dynamics, not one-parameter dependence.

### Error 2: equating equilibrium crossing with stopping
Why it seems correct: restoring force appears small near the central position.
Detection signal: statement that velocity is zero whenever [[x]] is zero.
Mini contrast example: in ideal harmonic motion, equilibrium crossing usually corresponds to maximum speed.
Conceptual correction: separate position from dynamical state; zero displacement is not zero motion.

## Model errors

### Error 3: using the ideal model outside its validity range
Why it seems correct: equations still produce neat numerical output.
Detection signal: measured amplitude decays cycle by cycle, yet undamped assumptions are kept.
Mini contrast example: persistent envelope decay indicates non-negligible dissipation.
Conceptual correction: when to switch model: if sustained relative mismatch is > 10 percent with non-random pattern, include damping.

### Error 4: treating stiffness as constant in nonlinear regime
Why it seems correct: catalogue data provide a nominal value for [[k]].
Detection signal: measured [[T]] varies strongly with amplitude.
Mini contrast example: at larger deformation, force-displacement relation is no longer linear.
Conceptual correction: restrict analysis to elastic range or use a calibrated nonlinear law.

## Mathematical errors

### Error 5: silent unit inconsistency
Why it seems correct: numbers look plausible at first glance.
Detection signal: [[f]] and [[T]] fail reciprocal consistency.
Mini contrast example: entering grams as kilograms shifts time scale dramatically.
Conceptual correction: convert all values to SI before substitution and check final order of magnitude.

### Error 6: dropping sign information in restoring force
Why it seems correct: magnitude-only operations avoid negative numbers.
Detection signal: [[F]] is reported positive regardless of sign of [[x]].
Mini contrast example: stable restoring behaviour requires opposite signs for force and displacement.
Conceptual correction: keep axis convention explicit from the first step and audit sign logic.

## Interpretation errors

### Error 7: ending with a number but no physical reading
Why it seems correct: units are correct and arithmetic is complete.
Detection signal: inability to state which parameter should be tuned and why.
Mini contrast example: knowing [[omega0]] without sensitivity reading limits design relevance.
Conceptual correction: always add a causal conclusion linking outcome to parameter influence.

### Error 8: treating phase as irrelevant detail
Why it seems correct: changing [[phi]] does not change [[omega0]].
Detection signal: model and experiment are compared with misaligned start times and interpreted as physics failure.
Mini contrast example: changing time reference [[t]] shifts apparent waveform start.
Conceptual correction: align initial condition and phase before judging model mismatch.

## Quick self-control rule

1. Define objective: compute [[omega0]], [[T]], [[f]], [[x]], or interpret [[F]].
2. Verify baseline assumptions: linear range, amplitude regime, coherent SI units.
3. Check reciprocal consistency between [[f]] and [[T]] and compare against expected scale.
4. Audit sign relation between [[x]] and [[F]] to confirm restoring direction.
5. Close with one causal statement explaining which parameter should change to modify behaviour.
