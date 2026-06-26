# Frequent errors in Small Oscillations and Normal Modes

## Conceptual errors

### Error 1: Treating notation as physics

Why it seems correct: the symbols of Small Oscillations and Normal Modes look powerful and compact.

Why it is incorrect: [[omega]] only has physical meaning when the domain assumptions are satisfied.

Detection signal: the answer is accepted without explaining what is preserved, transformed, separated, or linearized.

Conceptual correction: state the physical criterion before performing algebra.

Mini contrast example: if the free-particle, harmonic, autonomous, or stable-equilibrium limit is not recovered, the formal step is not trustworthy.

### Error 2: Forgetting the model domain

Why it seems correct: the same formula can be copied into many exercises.

Why it is incorrect: each formula belongs to a regular classical domain and can fail under constraints, singular variables, nonlinearity, or broken smoothness.

Detection signal: a result is used even though units, scales, or limiting behavior no longer match the original system.

Conceptual correction: check assumptions before substitution.

Mini contrast example: a canonical-looking variable change that breaks bracket preservation is not a canonical transformation.

## Model errors

### Error 3: Confusing exact structure with approximation

Why it seems correct: both exact criteria and approximate models may produce short equations.

Why it is incorrect: exact canonical or Poisson structure is not the same as a small linearized approximation.

Detection signal: the calculation tolerates a structural drift that should be exactly zero or exactly one.

Conceptual correction: distinguish exact identities from controlled approximations.

Mini contrast example: a normal-mode frequency can shift under approximation, but a fundamental canonical bracket cannot drift arbitrarily.

### Error 4: Ignoring the dominant quantity

Why it seems correct: students often focus on the longest equation.

Why it is incorrect: the interpretation is organized around [[omega]], because it determines the physical reading of the leaf.

Detection signal: the final answer contains formulas but no statement about what [[omega]] means.

Conceptual correction: end every solution with a sentence about the physical role of [[omega]].

Mini contrast example: a numerical frequency without a mode shape does not explain a coupled oscillation.

## Mathematical errors

### Error 5: Mixing variables from different descriptions

Why it seems correct: old and new variables can have similar symbols.

Why it is incorrect: variables from different descriptions cannot be combined unless the transformation or reduction has been justified.

Detection signal: equations contain old and new variables without a declared bridge.

Conceptual correction: write the map, generator, separation, or modal basis explicitly.

Mini contrast example: using `q` with `P` as if they formed a canonical pair can change the system.

### Error 6: Losing dimensional control

Why it seems correct: advanced expressions often hide units behind compact notation.

Why it is incorrect: dimensional inconsistency reveals that the formal object no longer has the declared physical role.

Detection signal: action, energy, frequency, or dimensionless criteria are compared as if they had the same unit.

Conceptual correction: check the unit of the target magnitude before interpreting the result.

Mini contrast example: a frequency extracted from an eigenvalue must have units compatible with inverse time.

## Interpretation errors

### Error 7: Giving only a numerical answer

Why it seems correct: numerical answers look concrete.

Why it is incorrect: this leaf is designed to test structure, not only magnitude.

Detection signal: the solution ends without the words valid, preserved, equivalent, separable, conserved, or physically consistent.

Conceptual correction: add a physical interpretation sentence after the calculation.

Mini contrast example: two descriptions can give the same number while one violates the canonical structure.

## Quick self-control rule

Before accepting an answer, state the domain, the dominant quantity, the structural condition, the limiting case, and the physical meaning of the result. If one of those five checks is missing, the solution is not complete.
