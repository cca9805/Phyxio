const e=`# Frequent errors in Canonical Transformations\r
\r
## Conceptual errors\r
\r
### Error 1: Treating notation as physics\r
\r
Why it seems correct: the symbols of Canonical Transformations look powerful and compact.\r
\r
Why it is incorrect: [[C]] only has physical meaning when the domain assumptions are satisfied.\r
\r
Detection signal: the answer is accepted without explaining what is preserved, transformed, separated, or linearized.\r
\r
Conceptual correction: state the physical criterion before performing algebra.\r
\r
Mini contrast example: if the free-particle, harmonic, autonomous, or stable-equilibrium limit is not recovered, the formal step is not trustworthy.\r
\r
### Error 2: Forgetting the model domain\r
\r
Why it seems correct: the same formula can be copied into many exercises.\r
\r
Why it is incorrect: each formula belongs to a regular classical domain and can fail under constraints, singular variables, nonlinearity, or broken smoothness.\r
\r
Detection signal: a result is used even though units, scales, or limiting behavior no longer match the original system.\r
\r
Conceptual correction: check assumptions before substitution.\r
\r
Mini contrast example: a canonical-looking variable change that breaks bracket preservation is not a canonical transformation.\r
\r
## Model errors\r
\r
### Error 3: Confusing exact structure with approximation\r
\r
Why it seems correct: both exact criteria and approximate models may produce short equations.\r
\r
Why it is incorrect: exact canonical or Poisson structure is not the same as a small linearized approximation.\r
\r
Detection signal: the calculation tolerates a structural drift that should be exactly zero or exactly one.\r
\r
Conceptual correction: distinguish exact identities from controlled approximations.\r
\r
Mini contrast example: a normal-mode frequency can shift under approximation, but a fundamental canonical bracket cannot drift arbitrarily.\r
\r
### Error 4: Ignoring the dominant quantity\r
\r
Why it seems correct: students often focus on the longest equation.\r
\r
Why it is incorrect: the interpretation is organized around [[C]], because it determines the physical reading of the leaf.\r
\r
Detection signal: the final answer contains formulas but no statement about what [[C]] means.\r
\r
Conceptual correction: end every solution with a sentence about the physical role of [[C]].\r
\r
Mini contrast example: a numerical frequency without a mode shape does not explain a coupled oscillation.\r
\r
## Mathematical errors\r
\r
### Error 5: Mixing variables from different descriptions\r
\r
Why it seems correct: old and new variables can have similar symbols.\r
\r
Why it is incorrect: variables from different descriptions cannot be combined unless the transformation or reduction has been justified.\r
\r
Detection signal: equations contain old and new variables without a declared bridge.\r
\r
Conceptual correction: write the map, generator, separation, or modal basis explicitly.\r
\r
Mini contrast example: using \`q\` with \`P\` as if they formed a canonical pair can change the system.\r
\r
### Error 6: Losing dimensional control\r
\r
Why it seems correct: advanced expressions often hide units behind compact notation.\r
\r
Why it is incorrect: dimensional inconsistency reveals that the formal object no longer has the declared physical role.\r
\r
Detection signal: action, energy, frequency, or dimensionless criteria are compared as if they had the same unit.\r
\r
Conceptual correction: check the unit of the target magnitude before interpreting the result.\r
\r
Mini contrast example: a frequency extracted from an eigenvalue must have units compatible with inverse time.\r
\r
## Interpretation errors\r
\r
### Error 7: Giving only a numerical answer\r
\r
Why it seems correct: numerical answers look concrete.\r
\r
Why it is incorrect: this leaf is designed to test structure, not only magnitude.\r
\r
Detection signal: the solution ends without the words valid, preserved, equivalent, separable, conserved, or physically consistent.\r
\r
Conceptual correction: add a physical interpretation sentence after the calculation.\r
\r
Mini contrast example: two descriptions can give the same number while one violates the canonical structure.\r
\r
## Quick self-control rule\r
\r
Before accepting an answer, state the domain, the dominant quantity, the structural condition, the limiting case, and the physical meaning of the result. If one of those five checks is missing, the solution is not complete.\r
`;export{e as default};
