# Common mistakes: Quadratic Drag

## Conceptual errors

### Error 1: Reading [[F_d]] as linear in [[v]]

### Why it seems correct
Many nearby topics use linear proportionality, so that intuition is over-transferred.

### Why it is incorrect
This leaf models quadratic growth, not linear growth.

### Detection signal
When [[v]] doubles, your estimate only doubles instead of moving toward four times.

### Conceptual correction
Use scaling checks as a first diagnostic before trusting any numeric output.

### Mini-example
If [[v]] goes from 8 to 16 m/s and [[c]] is stable, [[F_d]] should move from 40 N toward 160 N, not 80 N.

### Error 2: Treating [[c]] as universal

### Why it seems correct
Short exercises often provide one fixed coefficient value.

### Why it is incorrect
[[c]] depends on [[rho]], [[C_d]], and [[A]], so it changes with medium and effective geometry.

### Detection signal
Predictions become inconsistent after posture or density changes while [[c]] is kept fixed.

### Conceptual correction
Use the bridge relation to justify whether [[c]] must be recalibrated.

### Mini-example
The same cyclist upright and tucked does not keep the same [[A]] or [[C_d]], so a fixed [[c]] is not automatically valid.

### Error 3: Confusing relative speed with ground speed

### Why it seems correct
Ground-referenced speed is usually what instruments display first.

### Why it is incorrect
Drag depends on speed relative to the fluid, not only to the ground.

### Detection signal
Your model cannot explain drag increase under headwind at unchanged ground speed.

### Conceptual correction
Define [[v]] with respect to the fluid before applying equations.

### Mini-example
At 12 m/s ground speed with 4 m/s headwind, fluid-relative speed is 16 m/s.

## Model errors

### Error 4: Forcing a quadratic model outside range

### Why it seems correct
Once learned, a model tends to be reused everywhere.

### Why it is incorrect
Some ranges are not well described by stable quadratic behavior.

### Detection signal
Measured [[F_d]] versus [[v]] loses consistent upward convexity and systematic error grows.

### Conceptual correction
Introduce explicit transition criteria when fit quality exceeds accepted margin.

### Mini-example
If two speed windows require incompatible [[c]] values, the issue may be regime change, not noise.

### Error 5: Ignoring [[A]] in comparisons

### Why it seems correct
Users often assume geometry stays almost unchanged.

### Why it is incorrect
Small posture or orientation changes alter [[A]] and shift the full drag curve.

### Detection signal
You cannot explain force differences between tests with equal nominal speed.

### Conceptual correction
Document reference [[A]] and test condition in every comparison.

### Mini-example
Two drone configurations at the same [[v]] may show different [[F_d]] because one exposes larger frontal area.

## Mathematical errors

### Error 6: Rearranging without domain control

### Why it seems correct
The algebraic step can look formally valid.

### Why it is incorrect
Some rearrangements require constraints such as [[v]] > 0 or [[c]] > 0.

### Detection signal
You obtain negative-root artifacts or physically impossible coefficients.

### Conceptual correction
Check domain constraints before accepting rearranged outputs.

### Mini-example
Computing [[v]] with negative [[c]] may produce calculator output but no physical meaning.

### Error 7: Mixing units in [[rho]], [[A]], and [[c]]

### Why it seems correct
Final numbers may look plausible even when units are inconsistent.

### Why it is incorrect
Dimensional coherence is part of the model, not an optional presentation detail.

### Detection signal
[[c]] appears with units incompatible with N*s^2/m^2.

### Conceptual correction
Normalize all quantities to SI before evaluation.

### Mini-example
Using area in cm^2 without conversion can shift [[c]] by multiple orders of magnitude.

## Interpretation errors

### Error 8: Reporting only the final [[F_d]] number

### Why it seems correct
In fast assessment settings, obtaining a numeric value feels sufficient.

### Why it is incorrect
Without mechanism reading, you cannot decide what to change in design or control.

### Detection signal
Your conclusion does not mention [[v]], [[c]], or model validity conditions.

### Conceptual correction
End each solution with one mechanism sentence and one validity-limit sentence.

### Mini-example
Saying [[F_d]] = 95 N is incomplete unless you explain whether growth is dominated by speed, density, or geometry.

### Error 9: Overinterpreting decimal precision

### Why it seems correct
More decimals look more rigorous.

### Why it is incorrect
If measurement and model uncertainty are significant, extra decimals do not add physical truth.

### Detection signal
You report four decimals with coarse inputs and no uncertainty statement.

### Conceptual correction
Match significant figures to data quality and model confidence.

### Mini-example
With low-precision [[v]] and [[C_d]], two or three significant figures for [[F_d]] are usually more honest.

## Quick self-control rule

- Check dimensional consistency.
- Check order-of-magnitude plausibility.
- Check quadratic scaling when [[v]] changes.
- State validity limits explicitly.
- Mention [[v]], [[c]], [[rho]], [[C_d]], and [[A]] in interpretation.

If one item fails, revisit assumptions before trusting the result.
