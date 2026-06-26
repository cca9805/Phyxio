# Common mistakes: Examples of Centrifugal Force

## Conceptual errors

### Error 1: Treating [[F_cf]] as an independent force source

**Why it seems correct**: In rotating setups, outward effect feels immediate and may look like a standalone cause.

**The trap**: Forgetting that interpretation depends on frame choice and model declaration.

**How to avoid it**: State frame assumptions first, then interpret [[F_cf]] as part of that framework.

### Error 2: Using [[rpm]] directly inside SI-based equations

**Why it seems correct**: Instruments often display speed in [[rpm]], so it feels natural to substitute that value directly.

**The trap**: Mixing units and creating hidden scale factors.

**How to avoid it**: Convert [[rpm]] to [[omega]] first and document the conversion step.

### Error 3: Confusing close angular quantities

**initial angular velocity -> final angular velocity**

Common mistake: Swapping [[omega1]] and [[omega2]] in comparative calculations.

How to distinguish: Define operating state A and B before using [[ratio]].

**angular speed -> tangential speed**

Common mistake: Replacing [[omega]] by [[v]] without radius relation.

How to distinguish: Use the tangential relation only after radius [[r]] is defined consistently.

## Model errors

### Error 4: Ignoring model limits under fast transients

**Why it seems correct**: The compact formula is easy and often works in stable operation.

**The trap**: Applying steady assumptions during aggressive acceleration changes.

**How to avoid it**: Check whether operating regime is quasi-steady before trusting simplified outputs.

### Error 5: Assuming geometry stays constant when it does not

**Why it seems correct**: Radius is often treated as fixed in textbook examples.

**The trap**: Real setups may have effective-radius drift due to deformation or displacement.

**How to avoid it**: Validate [[r]] under load and repeat measurements when mismatch persists.

## Mathematical errors

### Error 6: Sign and order mistakes in [[ratio]] analysis

**Why it seems correct**: [[ratio]] expressions look simple and are easy to compute quickly.

**The trap**: Reversing numerator and denominator or forgetting square dependence.

**How to avoid it**: Write symbolic steps explicitly before substitution.

### Error 7: Dimensional inconsistency hidden by calculators

**Why it seems correct**: A calculator always outputs a number.

**The trap**: Numerical output without dimensional coherence can still be physically wrong.

**How to avoid it**: Perform a unit check in every key step, especially after conversion.

## Interpretation errors

### Error 8: Reporting numbers without causal reading

**Why it seems correct**: A solved equation may feel like a finished result.

**The trap**: Operational decisions require cause-effect interpretation, not only arithmetic.

**How to avoid it**: Explain what variable dominates and why the response changed.

### Error 9: Overstating precision of simplified models

**Why it seems correct**: More decimals can look more scientific.

**The trap**: Model uncertainty is not reduced by displaying extra digits.

**How to avoid it**: Match significant figures to measurement quality and model validity.

## Quick self-control rule

Use this five-point check after each solution:

- Is unit consistency preserved from input to output?
- Are [[rpm]] and [[omega]] handled without mixing systems?
- Are [[omega1]], [[omega2]], and [[ratio]] defined with clear scenario meaning?
- Does the result stay inside model validity assumptions?
- Can the result be explained physically, not only numerically?

If one answer is no, revise before trusting the conclusion.
