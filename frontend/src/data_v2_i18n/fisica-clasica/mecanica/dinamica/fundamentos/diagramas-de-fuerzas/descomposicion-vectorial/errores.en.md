# Errores frecuentes: Vector Resolution into Components

## Conceptual errors

### Error 1: Mixing cause and effect

**Why it seems correct**
Students often see multiple symbols in one expression and assume all variables play the same causal role.

**Why it is incorrect**
In vector resolution, each component has a distinct physical function. [[Fx]] does not replace [[Fy]], and [[Ppar]] does not replace [[Pperp]].

**Detection signal**
The learner claims that "if [[Fm]] increases, every effect increases equally" without checking [[theta]].

**Conceptual correction**
Always read by axes: identify which component drives motion and which one changes contact loading.

**Contrast mini-example**
With fixed [[Fm]], increasing [[theta]] may raise [[Fy]] while reducing [[Fx]]. Same magnitude, different mechanism.

### Error 2: Applying formulas mechanically without validating context

**Why it seems correct**
Memorized formulas feel efficient and safe under time pressure.

**Why it is incorrect**
The valid relation depends on angle definition and axis selection.

**Detection signal**
Sine/cosine are used with no explicit angular reference statement.

**Conceptual correction**
Before substitution, declare axis system and angle reference convention.

**Contrast mini-example**
If [[theta]] is measured from vertical, copying the horizontal-reference formula swaps projected roles.

### Error 3: Confusing similar magnitudes

**Why it seems correct**
[[W]], [[Fm]], [[N]], and [[T]] share units and may have comparable values.

**Why it is incorrect**
Equal units do not imply equal physical role: [[W]] is gravitational, [[N]] is contact reaction, [[T]] is traction.

**Detection signal**
A balance equation substitutes [[N]] by [[W]] with no geometric justification.

**Conceptual correction**
Label each magnitude by origin and role, not only by numeric value.

**Contrast mini-example**
On a slope, [[N]] is usually close to [[Pperp]], not to full [[W]].

## Model errors

### Error 4: Not recognizing when the simplified model fails

**Why it seems correct**
Axis-wise linear modeling works in many introductory exercises.

**Why it is incorrect**
Under vibration, deformation, or changing contact conditions, [[muk]] is no longer constant and the simple model loses predictive quality.

**Detection signal**
Prediction-measurement error grows systematically despite correct algebra.

**Conceptual correction**
Keep decomposition as base and extend contact modeling when evidence requires it.

**Contrast mini-example**
On a wet conveyor, [[Ppar]] and [[Pperp]] are computed correctly, but actual [[fk]] drops and slipping starts.

### Error 5: Ignoring known validity limits

**Why it seems correct**
A formula that worked once is reused automatically.

**Why it is incorrect**
Every formula has geometric and physical validity bounds.

**Detection signal**
Cartesian and ramp-aligned equations are mixed with no frame declaration.

**Conceptual correction**
State axis choice, angle definition, contact assumptions, and expected operating range.

**Contrast mini-example**
Using [[Ppar]] formula in a horizontal/vertical-axis setup creates wrong interpretation even if arithmetic is clean.

## Mathematical errors

### Error 6: Careless algebraic isolation

**Why it seems correct**
Fast symbolic manipulation appears to save time.

**Why it is incorrect**
A formally valid step can violate trigonometric domain or physical bounds.

**Detection signal**
A component magnitude appears larger than the parent vector.

**Conceptual correction**
After isolation, verify sign, bound, and geometric consistency.

**Contrast mini-example**
If [[Fx]] exceeds [[Fm]] in absolute value, either projection setup or algebra is wrong.

### Error 7: Forgetting constants or units

**Why it seems correct**
Students focus on obtaining a final number quickly.

**Why it is incorrect**
On inclined-plane problems, dropping [[g]] or misusing angle units strongly distorts results.

**Detection signal**
Computed [[Ppar]] or [[Pperp]] has implausible order of magnitude.

**Conceptual correction**
Apply a fixed checklist: SI units, declared [[g]], and correct calculator angle mode.

**Contrast mini-example**
Using [[g]] = 1 by accident reduces [[W]] and all derived components by nearly one order of magnitude.

## Interpretation errors

### Error 8: Treating output as more precise than the model allows

**Why it seems correct**
More decimals look scientifically rigorous.

**Why it is incorrect**
If [[muk]] is estimated, model uncertainty dominates beyond a limited precision.

**Detection signal**
Four-decimal outputs are reported for [[a]] when inputs are rough estimates.

**Conceptual correction**
Match significant figures to physical uncertainty, not calculator display length.

**Contrast mini-example**
With [[muk]] known to two decimals, reporting [[a]] to four decimals is false precision.

### Error 9: Skipping physical interpretation after computation

**Why it seems correct**
Reaching a numerical result feels like completion.

**Why it is incorrect**
Without causal interpretation, you cannot decide what parameter to adjust in practice.

**Detection signal**
A solution ends with "[[Fx]] = ..." and gives no statement about [[N]], [[fk]], or [[a]].

**Conceptual correction**
Finish each solution with an action-oriented reading: what dominates, what limits, what to change.

**Contrast mini-example**
Two scenarios can share the same [[Fm]] but require opposite operational decisions if [[theta]] differs.

## Quick self-control rule

1. Is the axis system declared?
2. Is [[theta]] measured from the declared reference?
3. Do components reconstruct parent magnitude?
4. Are component signs compatible with geometry?
5. Does the final statement identify dominant and limiting magnitudes?

If any answer is no, pause, correct setup, and recompute.
