const e=`# Common Errors

## Conceptual errors

### Error: treating dissipated energy as vanished energy

Description: the student sees that [[Emf]] is smaller than [[Emi]] and concludes that energy has disappeared.

Why it happens: mechanical energy is confused with total energy. Friction reduces useful mechanical energy, but transforms it into heating, sound, or deformation.

How to correct it: write [[Wr]] as signed work and [[Edis]] as a positive quantity. The correct statement is that mechanical energy decreases while total energy is conserved if the environment is included.

### Error: confusing [[Wr]] with [[Edis]]

Description: dissipated energy is written as negative, or [[Wr]] is inserted as positive in the balance.

Why it happens: both quantities have the same magnitude in the simple case, but not the same meaning.

How to correct it: [[Wr]] belongs to the signed system balance and is usually negative; [[Edis]] measures transformed energy and must be non-negative.

## Model errors

### Error: always replacing [[N]] by [[m]][[g]]

Description: the horizontal case is used on ramps, elevators, or bodies pressed by external forces.

Why it happens: the simplest case is memorized, while the dependence of the normal force on geometry and perpendicular forces is forgotten.

How to correct it: compute [[N]] before using [[fr]]. Only on a horizontal surface with no vertical acceleration and no extra vertical forces does [[N]] equal weight.

### Error: using constant [[mu]] when contact changes

Description: the same [[mu]] is kept despite heating, lubrication, wear, or a change of surface.

Why it happens: the coefficient is treated as a universal material property.

How to correct it: treat [[mu]] as a parameter of the pair of surfaces and the regime. If the regime changes, the model must change as well.

## Mathematical errors

### Error: losing the sign of work

Description: [[fr]][[d]] is computed and inserted directly into the balance as positive.

Why it happens: force magnitude times distance is calculated without thinking about the relative direction of force and displacement.

How to correct it: if friction opposes motion, use the negative sign in [[Wr]] and then obtain [[Edis]] as positive.

### Error: mixing energy and power units

Description: [[Pdis]] is reported in joules or [[Edis]] in watts.

Why it happens: both quantities refer to dissipation, but total amount and time rate are not distinguished.

How to correct it: [[Edis]] is measured in J; [[Pdis]] is measured in W and requires division by [[t]].

## Interpretation errors

### Error: finishing without checking the chosen system

Description: the numerical result may be correct, but it is unclear whether [[Wr]] acts on the block, on the block-surface pair, or on another system.

Why it happens: data substitution begins before the system boundary is declared.

How to correct it: start with a sentence such as "the system is the sliding body". Then the sign of [[Wr]] and the reading of [[dEm]] are fixed.

### Error: ignoring dissipated power

Description: two processes with the same [[Edis]] are treated as equally demanding.

Why it happens: only the final balance is considered, not the time over which dissipation occurs.

How to correct it: when brakes, bearings, tools, or heating are involved, compute [[Pdis]] and assess thermal risk.

## Quick self-control rule

1. Identify the system before writing the balance.
2. Compute [[N]] and then [[fr]].
3. Insert [[Wr]] with sign in the balance.
4. Report [[Edis]] as positive transformed energy.
5. Use [[Pdis]] when the time [[t]] is relevant.
`;export{e as default};
