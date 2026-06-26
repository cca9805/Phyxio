## Conceptual errors

### Error 1: treating conservation as no change at all

**Why it seems correct**
Students often read "conserved" as "every term stays fixed".

**Why it is incorrect**
Conservation applies to the global accounting, not to each term separately. [[Ki]] may decrease while [[Uf]] increases, and the full state reading can still be consistent with [[Em]].

**Detection signal**
The explanation claims that if energy is conserved then speed cannot change.

**Conceptual correction**
State clearly that conservation means a preserved global balance, not frozen component values.

## Model errors

### Error 1: enforcing ideal conservation with visible dissipation

**Why it seems correct**
Problem statements do not always mention friction explicitly.

**Why it is incorrect**
If losses are physically relevant, [[Wnc]] must be included. Otherwise strict conservation is an invalid model assumption.

**Detection signal**
Predicted [[Kf]] is repeatedly higher than measured outcomes.

**Conceptual correction**
Switch to a transfer-aware balance and justify the sign of [[Wnc]] physically.

## Mathematical errors

### Error 1: accepting negative kinetic outputs

**Why it seems correct**
The algebra chain looks clean.

**Why it is incorrect**
[[K]] and [[Kf]] are nonnegative in classical mechanics. Negative results indicate sign, model, or unit issues.

**Detection signal**
Computed [[Kf]] is below zero.

**Conceptual correction**
Review unit consistency, baseline consistency for [[U]], and the sign convention for [[Wnc]].

## Interpretation errors

### Error 1: closing with a number only

**Why it seems correct**
The numeric value matches expected answers.

**Why it is incorrect**
Without causal interpretation, the model choice remains unvalidated and transfer to new problems is weak.

**Detection signal**
The student cannot explain what changes if losses increase or baseline changes.

**Conceptual correction**
Add a one-sentence causal close: which term grows, which term decreases, and why.

## Quick self-control rule

Before submission, run this 30-second checklist:

1. System boundary is explicit.
2. [[Ui]] and [[Uf]] use one baseline.
3. [[Wnc]] sign is physically justified.
4. [[Kf]] and [[K]] are physically admissible.
5. Final reading explains how [[Em]] was redistributed.

This compact rule removes most recurring mistakes and turns a numerical answer into a physically defensible conclusion.