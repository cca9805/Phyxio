const e=`## Conceptual Errors

### Error 1: Confusing [[L]] with [[E]]

**Why it seems correct**  
Both quantities use [[T]] and [[V]] and have energy units, so they may look equivalent.

**Why it is incorrect**  
[[L]] is defined as a difference and is used for Lagrangian dynamics. [[E]] is defined as a sum and is used for energy balances.

**Detection signal**  
[[E]] is inserted into Lagrange's equation or [[L]] is interpreted as total stored energy.

**Conceptual correction**  
Always separate the question: energy conservation or equation construction.

**Mini contrast example**  
If [[T]]=5 J and [[V]]=3 J, then [[L]]=2 J and [[E]]=8 J. They do not describe the same thing.

## Model errors

### Error 2: Mixing coordinates between [[T]] and [[V]]

**Why it seems correct**  
In many exercises, expressions are copied from memory and appear independent from one another.

**Why it is incorrect**  
The Lagrangian requires both energies to describe the same configuration. If [[T]] uses [[qdi]] but [[V]] uses an incompatible coordinate, the model is broken.

**Detection signal**  
One cannot explain which system coordinate appears in both motion and configuration.

**Conceptual correction**  
Before forming [[L]], rewrite all energies in the chosen coordinates.

**Mini contrast example**  
On an incline, using travel speed but leaving height unrelated to ramp position leaves the model incomplete.

## Mathematical Errors

### Error 3: Treating [[T]] as proportional to [[v]]

**Why it seems correct**  
Everyday intuition associates more speed with more energy in a linear way.

**Why it is incorrect**  
Translational kinetic energy depends on the square of [[v]].

**Detection signal**  
When [[v]] doubles, the student doubles [[T]] instead of multiplying it by four.

**Conceptual correction**  
Check the exponent before substituting and verify units.

**Mini contrast example**  
A body at 4 m/s does not have twice the kinetic energy it has at 2 m/s; it has four times more.

## Interpretation Errors

### Error 4: Reading zero [[V]] as absence of interaction

**Why it seems correct**  
The word zero suggests that there is no energy or no force.

**Why it is incorrect**  
The zero of potential energy depends on reference. Changing it does not necessarily remove the interaction.

**Detection signal**  
Absolute values of [[V]] are compared across problems with different references.

**Conceptual correction**  
Declare the reference and analyze changes or gradients, not only absolute values.

**Mini contrast example**  
A table may be the zero of [[V]] in one problem and not in another; gravity still acts.

## Quick self-control rule

Before accepting the result, verify: 1) [[T]] is not negative; 2) [[V]] has a declared reference; 3) [[L]] is computed as a difference; 4) [[E]] is computed as a sum; 5) all energies belong to the same system. If one point fails, rebuild the energetic model before continuing.
`;export{e as default};
