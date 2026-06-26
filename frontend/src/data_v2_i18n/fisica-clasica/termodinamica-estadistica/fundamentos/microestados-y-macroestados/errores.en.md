## Conceptual errors


### Error 1: Treating a [[macroestado]] as a large [[microestado]]
**Why it seems correct**
Both describe the same system, so it may seem that only the size of the description changes.
**Why it is incorrect**
A [[microestado]] fixes one concrete microscopic configuration. A [[macroestado]] groups many [[microestado]] sharing observable constraints.
**Detection signal**
The solution assigns only one microscopic configuration to each [[macroestado]] and obtains [[multiplicidad_macroestado]] equal to 1 for every case.
**Conceptual correction**
Ask what detail is kept and what detail is ignored. If microscopic detail is ignored, the description is macroscopic.
**Mini-example of contrast**
Four particles with two on the left can correspond to several microscopic arrangements. “Two and two” is a [[macroestado]], not one [[microestado]].


### Error 2: Thinking [[entropia]] simply means visual disorder
**Why it seems correct**
The word disorder is common in introductory explanations.
**Why it is incorrect**
Here [[entropia]] measures multiplicity associated with a [[macroestado]], not an aesthetic impression.
**Detection signal**
The student compares drawings without counting [[microestado]] or checking [[multiplicidad_macroestado]].
**Conceptual correction**
Replace “disorder” with “number of compatible microscopic configurations”.
**Mini-example of contrast**
A uniform gas may look visually simple but can have many compatible [[microestado]] and therefore high [[entropia]].

## Model errors


### Error 3: Comparing [[macroestado]] with different constraints
**Why it seems correct**
The names of the macrostates may look comparable even when conditions differ.
**Why it is incorrect**
Changing [[energia_total]], [[volumen]], or [[numero_particulas]] changes the accessible set, so [[multiplicidad_macroestado]] is no longer comparable.
**Detection signal**
The solution mixes cases with different [[volumen]] or different [[numero_particulas]] without saying so.
**Conceptual correction**
Fix the common macroscopic constraints before counting.
**Mini-example of contrast**
Do not compare microstates in a 1 L box and a 2 L box as if they belonged to the same set.


### Error 4: Assuming all [[microestado]] always carry equal weight
**Why it seems correct**
Simple counting is convenient and appears in first examples.
**Why it is incorrect**
Some models assign different weights to different [[microestado]]. Then [[probabilidad_macroestado]] does not depend only on [[multiplicidad_macroestado]].
**Detection signal**
Different energies appear, yet the solution uses plain counting only.
**Conceptual correction**
Check whether the model is equiprobable counting or weighted statistical mechanics.
**Mini-example of contrast**
In a canonical model, two [[microestado]] with different energies need not have the same probability.

## Mathematical errors


### Error 5: Forgetting normalization of [[probabilidad_macroestado]]
**Why it seems correct**
A larger [[multiplicidad_macroestado]] already indicates which case is more likely.
**Why it is incorrect**
A probability must be compared with the total set of exclusive cases. Without normalization there are only counts.
**Detection signal**
The sum of [[probabilidad_macroestado]] is not 1, or multiplicities are used directly as percentages.
**Conceptual correction**
Divide each [[multiplicidad_macroestado]] by the total comparable multiplicity.
**Mini-example of contrast**
If one case has 6 microstates out of 10, the probability is a fraction of the total, not the number 6.


### Error 6: Applying logarithms to non-positive quantities
**Why it seems correct**
The [[entropia]] formula may be memorized and applied automatically.
**Why it is incorrect**
[[multiplicidad_macroestado]] must be positive for [[entropia]] to be defined in this model.
**Detection signal**
A logarithm is applied to zero, a negative number, or a dimensional quantity.
**Conceptual correction**
Check that the logarithm argument is a positive dimensionless count.
**Mini-example of contrast**
An impossible [[macroestado]] has zero multiplicity and is not interpreted with the same [[entropia]] formula as an accessible [[macroestado]].

## Interpretation errors


### Error 7: Confusing improbable with impossible
**Why it seems correct**
In large systems, some events have probabilities so tiny that they are never observed in practice.
**Why it is incorrect**
A [[macroestado]] with low [[multiplicidad_macroestado]] may still be accessible even when its [[probabilidad_macroestado]] is tiny.
**Detection signal**
Extreme cases are removed without proving their multiplicity is zero.
**Conceptual correction**
Distinguish zero multiplicity from small multiplicity.
**Mini-example of contrast**
All particles on one side of a box may be extremely unlikely but not necessarily impossible.


### Error 8: Thinking the most probable [[macroestado]] specifies each [[microestado]]
**Why it seems correct**
The dominant macroscopic result feels representative of the whole system.
**Why it is incorrect**
The most probable [[macroestado]] groups many [[microestado]], but it does not identify which one occurs.
**Detection signal**
The student tries to reconstruct the exact microscopic configuration from [[probabilidad_macroestado]] alone.
**Conceptual correction**
Read the [[macroestado]] as a class, not a microscopic photograph.
**Mini-example of contrast**
Knowing that two particles are on each side does not say which particular particles are on each side.

## Quick self-control rule

Before interpreting, ask: have I defined the [[microestado]], [[macroestado]], [[multiplicidad_macroestado]], and total set under the same constraints?