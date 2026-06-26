## Conceptual errors

### Error
Assuming every work problem can be solved with one constant-force shortcut.

Why it seems correct
The constant-force expression is learned early and often gives fast classroom answers.

Detection signal
The solution skips profile discussion and never defines the interval between [[x1]] and [[x2]].

Mini-contrast example
Two different force profiles with equal net displacement can yield very different [[W]].

Conceptual correction
Identify profile variability first and treat [[W]] as signed accumulation.

### Error
Reading [[W]] as positive magnitude only.

Why it seems correct
Energy is colloquially described as always positive.

Detection signal
No sign interpretation is provided for transfer direction.

Mini-contrast example
One region can add transfer while another removes it, so net value is not magnitude sum.

Conceptual correction
Keep signed contributions and explain final causal meaning.

## Model errors

### Error
Using constant-[[k]] linear closure outside linear response range.

Why it seems correct
Closed-form expression is compact and computationally attractive.

Detection signal
Mismatch against measurements grows consistently near interval extremes.

Mini-contrast example
Real spring behavior can deviate from linear law at high extension/compression.

Conceptual correction
Validate linear range before applying constant [[k]], then escalate to segmented modeling when needed.

### Error
Mixing spatial references for [[x1]] and [[x2]].

Why it seems correct
Reference shifts are introduced mid-solution to simplify local algebra.

Detection signal
Recomputing with one consistent reference changes sign or scale unexpectedly.

Mini-contrast example
The same process may look like input or extraction depending on inconsistent bounds.

Conceptual correction
Fix one reference at the beginning and preserve it throughout.

## Mathematical errors

### Error
Integrating in one pass across sign changes without segmentation.

Why it seems correct
A single integral looks cleaner than piecewise treatment.

Detection signal
Numerical output conflicts with oriented-area graph reading.

Mini-contrast example
If part of the profile is above and part below axis, cancellation must appear in net transfer.

Conceptual correction
Split domain by sign regime and sum signed segment contributions.

### Error
Partial unit conversion in [[Fmed]] or bounds.

Why it seems correct
The final scalar can still look plausible.

Detection signal
Large mismatch appears when compared with integral benchmark.

Mini-contrast example
Mixing centimeters and meters can shift [[W]] by large factors.

Conceptual correction
Normalize SI units before substitution and run dimensional closure.

## Interpretation errors

### Error
Reporting a final number without model-validity statement.

Why it seems correct
Many assessment habits reward numbers more than model commentary.

Detection signal
No escalation trigger or tolerance statement is included.

Mini-contrast example
Two methods may agree in one case and diverge strongly after small boundary changes.

Conceptual correction
Include scope, bias sources, and escalation policy with the result.

### Error
Presenting estimated work as exact work.

Why it seems correct
Average-force output appears definitive when written as one scalar.

Detection signal
No estimate label and no uncertainty rationale are provided.

Mini-contrast example
Highly nonlinear profiles can make average-force estimates systematically biased.

Conceptual correction
Label estimate explicitly and attach a tolerance argument.

## Quick self-control rule

1. Declare system, reference, and bounds [[x1]] and [[x2]].
2. Choose exact integral, segmented integral, or [[Fmed]] with justification.
3. Preserve signed contributions.
4. Validate dimensions and order of magnitude.
5. Close with physical meaning plus model-validity limit.