# Common mistakes

## Conceptual errors

### Error 1: using [[Ug]] without a declared reference

Why it looks correct:
The output has joule units and appears numerically consistent.

Why it is wrong:
State value without reference has no unique physical meaning.

Detection signal:
The solution cannot explain why [[Ug]] is positive or negative.

How to fix:
Set one vertical zero before calculation and keep it unchanged for all states.

## Model errors

### Error 2: applying the local model outside its scale

Why it looks correct:
The same equation is easy to reuse and produces a number.

Why it is wrong:
Local-gravity assumptions may break at larger spatial scales or tighter precision requirements.

Detection signal:
Output trends become unstable when assumptions are slightly refined.

How to fix:
Check validity domain before substitution and switch model when assumptions are no longer credible.

## Mathematical errors

### Error 3: swapping [[hi]] and [[hf]] or mixing units

Why it looks correct:
Algebraic manipulation still closes and may look clean.

Why it is wrong:
Sign logic between [[dUg]] and [[Wg]] becomes physically inconsistent.

Detection signal:
An ascent scenario yields negative [[dUg]] without additional explanation.

How to fix:
Write state order first, convert to SI, then compute and validate sign against process story.

## Interpretation errors

### Error 4: ending with a number but no physical reading

Why it looks correct:
Magnitude and units seem correct at first glance.

Why it is wrong:
No causal statement connects state change and work transfer.

Detection signal:
Final answer does not explain whether gravity delivered or absorbed energy.

How to fix:
Close each solution with a causal sentence linking [[dUg]] and [[Wg]] signs.

## Quick self-control rule

1. Fix one reference for all height values.
2. Decide target quantity among [[Ug]], [[dUg]], and [[Wg]].
3. Keep SI units and explicit state ordering.
4. Compare computed sign with process direction.
5. Add one line on model validity before final submission.