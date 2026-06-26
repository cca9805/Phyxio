# Common Errors in the Pendulum

## Conceptual errors

### Error 1 : assuming [[m]] changes [[Tper]] in the ideal simple pendulum

**Why it seems correct**: in many dynamic problems a larger mass appears to respond more slowly.

**Detection signal**: changing only [[m]] in the same setup is reported to modify [[omega]] or [[Tper]].

**Contrast mini-example**: two different masses with the same [[L]] under the same [[g]] can keep the same ideal rhythm.

**Conceptual correction**: in the simple model, timing depends on [[L]] and [[g]], not on [[m]].

### Error 2 : treating [[theta]] as a linear displacement without angular context

**Why it seems correct**: the bob clearly moves through space.

**Detection signal**: degrees and radians are mixed without conversion and [[tau]] sign loses meaning.

**Contrast mini-example**: the same numerical value of [[theta]] in degrees and radians describes very different states.

**Conceptual correction**: treat [[theta]] as an angular variable with an explicit sign convention.

## Model errors

### Error 3 : applying small-oscillation timing at large amplitudes

**Why it seems correct**: the motion still looks periodic.

**Detection signal**: measured period increases as initial amplitude increases.

**Contrast mini-example**: at moderate amplitude, linear prediction and measurement match better than at high amplitude.

**Conceptual correction**: use the linear model only within its domain and switch to nonlinear treatment when timing error exceeds the target tolerance.

### Error 4 : ignoring damping when cycle losses are visible

**Why it seems correct**: the pendulum still oscillates for many cycles.

**Detection signal**: maximum amplitude decays systematically from cycle to cycle.

**Contrast mini-example**: in a low-friction pivot, losses may be small; in a rough pivot, they are not.

**Conceptual correction**: include dissipation whenever energy conservation is not valid at the required precision.

## Mathematical errors

### Error 5 : inverting the trend between [[L]] and [[omega]]

**Why it seems correct**: longer trajectory is associated with greater motion by intuition.

**Detection signal**: increasing [[L]] is reported to increase [[omega]] under the same [[g]].

**Contrast mini-example**: a long pendulum generally oscillates more slowly than a short one in the same field.

**Conceptual correction**: check the inverse square-root trend between [[L]] and [[omega]] before substitution.

### Error 6 : dropping the restoring sign in [[tau]]

**Why it seems correct**: absolute values seem simpler to compute.

**Detection signal**: [[tau]] keeps the same sign even when [[theta]] crosses vertical.

**Contrast mini-example**: if [[theta]] switches side, [[tau]] must switch sign to preserve restoring direction.

**Conceptual correction**: keep angular convention and verify opposite signs for [[theta]] and [[tau]].

### Error 7 : mixing units for [[L]] or [[g]]

**Why it seems correct**: numerical values still look plausible.

**Detection signal**: timing result is outside expected order of magnitude for the setup.

**Contrast mini-example**: entering length in centimeters without conversion yields artificially short periods.

**Conceptual correction**: convert to SI before applying temporal relations.

## Interpretation errors

### Error 8 : reporting only [[Tper]] without causal reading

**Why it seems correct**: the exercise often asks for one final value.

**Detection signal**: the report does not explain whether the result is driven by high [[L]], low [[g]], or both.

**Contrast mini-example**: two setups may have the same [[Tper]] from different parameter combinations.

**Conceptual correction**: close every result with physical causality and a validity limit.

### Error 9 : using [[tau]] alone to justify period

**Why it seems correct**: both quantities belong to the same system.

**Detection signal**: conclusions about [[Tper]] are drawn from one local value of [[tau]].

**Contrast mini-example**: one instantaneous torque value does not determine the full cycle clock.

**Conceptual correction**: separate local torque reading from global rhythm reading.

### Error 10 : extrapolating the ideal model to any environment without checks

**Why it seems correct**: timing relation appears universal.

**Detection signal**: variations in [[g]], friction, or mounting conditions are ignored.

**Contrast mini-example**: changing gravity environment modifies period even with the same geometry.

**Conceptual correction**: verify environment assumptions and required precision before trusting the result.

## Quick self-control rule

Before closing a pendulum exercise, verify five points. First, unit coherence for [[L]], [[g]], and [[theta]]. Second, trend coherence: if [[L]] rises, [[omega]] falls and [[Tper]] rises. Third, dynamic sign: [[tau]] must oppose [[theta]]. Fourth, validity domain: amplitude and losses must match the selected model. Fifth, physical closure: explain in one sentence why the result has that order of magnitude and what limits its applicability.

If any point fails, the final number may still be algebraically correct but physically unreliable. The objective of this section is not memorizing solutions; it is building a compact verification routine that turns each result into a defensible physical conclusion.