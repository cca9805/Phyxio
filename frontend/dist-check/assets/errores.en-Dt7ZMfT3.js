const e=`## Conceptual Errors

### Error 1: Confusing [[L]] with total mechanical energy

**Why it seems correct**  
Both expressions use [[T]] and [[V]], so students often equate any energetic combination with total energy.

**Why it is incorrect**  
The Lagrangian [[L]] is defined through a difference and serves a variational role. It is not, in general, the conserved mechanical energy.

**Detection signal**  
Each value of [[L]] is interpreted as available system energy.

**Conceptual correction**  
Separate the function that generates the dynamical equation from the energetic quantity used in conservation arguments.

**Mini contrast example**  
In an oscillator, [[L]] may vanish at a particular instant while the system is still moving and still able to continue its evolution.

## Model errors

### Error 2: Including the same action in [[V]] and [[Qi]]

**Why it seems correct**  
When a known force appears in the statement, learners tend to insert it everywhere to avoid losing it.

**Why it is incorrect**  
If a physical influence is already represented through potential energy, adding it again as generalized force doubles its effect.

**Detection signal**  
The equation predicts an exaggerated acceleration or fails to recover the conservative limit when the external action is removed.

**Conceptual correction**  
Decide whether the action belongs in [[V]] or in [[Qi]], and keep only one route.

**Mini contrast example**  
If an elastic force is already represented through [[V]], adding it again as [[Qi]] is equivalent to making the spring act twice.

## Mathematical Errors

### Error 3: Differentiating with respect to [[qi]] when [[qdi]] is required

**Why it seems correct**  
The notation is visually close, and a fast reading hides that the two derivatives measure different sensitivities.

**Why it is incorrect**  
Conjugate momentum [[pi]] comes from the dependence of [[L]] on generalized velocity [[qdi]], not on generalized coordinate [[qi]].

**Detection signal**  
The proposed [[pi]] carries wrong units or cannot build [[Ri]] coherently.

**Conceptual correction**  
Keep coordinate derivatives and velocity derivatives separate before simplifying.

**Mini contrast example**  
For a Lagrangian with quadratic dependence on [[qdi]], differentiating with respect to [[qi]] does not produce the velocity-related term defining [[pi]].

## Interpretation Errors

### Error 4: Treating [[pi]] as ordinary linear momentum in every coordinate

**Why it seems correct**  
In simple Cartesian coordinates, conjugate momentum coincides with familiar linear momentum.

**Why it is incorrect**  
In angular or generalized coordinates, [[pi]] takes a different form and its meaning depends on the chosen variable.

**Detection signal**  
Translational units or interpretations are imposed on a rotational problem.

**Conceptual correction**  
Read [[pi]] as conjugate momentum, not as a universal synonym for linear momentum.

**Mini contrast example**  
With an angular coordinate, [[pi]] may express rotational response; assigning ordinary translational momentum units destroys the interpretation.

## Quick self-control rule

Before accepting a derivation, verify four points: 1) [[L]] is built from coherent [[T]] and [[V]]; 2) [[Qi]] does not duplicate a potential contribution; 3) [[pi]] comes from [[qdi]]; 4) [[Ri]] closes through the correct conservative or forced equation. If one fails, the final equation is not reliable.

This rule matters because analytical mechanics punishes small modeling shortcuts. A compact equation obtained from a poorly classified force is still a poor equation. The diagnostic must therefore occur before algebraic simplification, not after it.
`;export{e as default};
