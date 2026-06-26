# Frequent mistakes

## Conceptual errors

### Error 1: believing phase and position mean the same thing

Why it seems correct:
In many exercises students see [[x]] first and conclude that this one quantity already identifies the full state of the oscillator.

Detection sign:
The explanation cannot distinguish two states with the same position but opposite directions of motion.

Mini contrast example:
An oscillator may pass through the same [[x]] value once while approaching equilibrium and again while moving away from it. The phase is not the same even though position is.

Conceptual correction:
Read [[phi_t]] as the cyclic state variable and [[x]] as the spatial projection of that state.

### Error 2: thinking a positive phase difference implies greater amplitude or greater energy

Why it seems correct:
The idea of “lead” sounds like “having more,” so it is misread as though it described a stronger system.

Detection sign:
The answer compares [[delta_phi]] with [[A]] or with energy without justifying why such different quantities should mean the same thing.

Mini contrast example:
Two oscillators may have the same [[A]] and comparable energy, yet a different [[delta_phi]] simply because they started with different angular offsets.

Conceptual correction:
Keep angular difference, spatial scale, and energetic balance clearly separated.

## Model errors

### Error 3: using ideal phase when frequency is no longer stable

Why it seems correct:
The temporal phase relation is simple and often gets reused automatically even when the real evolution is no longer uniformly periodic.

Detection sign:
[[omega]] changes appreciably between intervals and yet the solution still uses one linear phase reading with no discussion.

Mini contrast example:
If the signal deforms or frequency drifts cycle by cycle, speaking about one ideal phase may hide the real mechanism governing the response.

Conceptual correction:
Change models when simple phase no longer condenses system state with physical coherence.

### Error 4: comparing phases with different time references

Why it seems correct:
One phase is computed for each oscillator and then subtracted, as if any angular difference already represented a useful physical phase lag.

Detection sign:
The sign of [[delta_phi]] depends on how the time origin was chosen rather than on real signal dynamics.

Mini contrast example:
The same pair of signals may look leading or lagging depending only on a redefinition of the time reference.

Conceptual correction:
Fix one temporal convention first and preserve it throughout the whole comparison.

## Mathematical errors

### Error 5: mixing hertz with radians per second without conversion

Why it seems correct:
Both quantities describe periodicity and, if numbers are small, the error may remain hidden in a first reading.

Detection sign:
The resulting [[phi_t]] becomes far too large or far too small for the considered time interval.

Mini contrast example:
Using a frequency in hertz directly as though it were [[omega]] changes the full angular scale of the problem.

Conceptual correction:
Always verify the unit of [[omega]] before substituting values and convert when needed.

### Error 6: treating trigonometry as if any angle were automatically meaningful

Why it seems correct:
The calculator returns a number, which creates the impression that the answer must already be correct.

Detection sign:
There is no check that the obtained [[x]] is compatible with [[A]] or that the scale of [[v]] makes physical sense.

Mini contrast example:
If one computation produces a position whose magnitude is greater than the declared amplitude, the arithmetic may have been executed, but the physics has already failed.

Conceptual correction:
Close every substitution with checks of range, sign, and cycle plausibility.

## Interpretation errors

### Error 7: claiming synchronization only because two positions coincide once

Why it seems correct:
Visually, two signals may pass through one common value and look aligned at that instant.

Detection sign:
The synchronization claim relies on one positional coincidence rather than on comparison of [[phi]] or [[delta_phi]].

Mini contrast example:
Two oscillators may share one [[x]] value and still have one leading the other in phase.

Conceptual correction:
Use phase language to compare relative state rather than one spatial snapshot.

### Error 8: ending with an angular number and no causal reading of the cycle

Why it seems correct:
The solution returns a value in radians and therefore appears complete because the target quantity has been produced.

Detection sign:
The answer does not say whether the system is near a turning point, near an equilibrium crossing, leading, or lagging.

Mini contrast example:
The same angular number may be useful or useless depending on whether it is translated into a physical reading of oscillatory state.

Conceptual correction:
Turn the final result into a cycle interpretation rather than leaving it as an angular figure.

## Quick self-control rule

1. Fix the target first: [[phi_t]], [[x]], [[v]], or [[delta_phi]].
2. Verify temporal reference and sign convention before operating.
3. Check the unit of [[omega]] and the scale of [[A]].
4. Review whether [[x]] and [[v]] are compatible with the expected cycle.
5. End with one physical sentence about state, lead, or lag.