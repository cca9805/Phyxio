# Common mistakes: momentum balance with mass flow

## Conceptual errors

### Error 1: Confusing the formal definition of momentum balance with mass flow with everyday intuition

**Why it seems correct:**
Everyday intuition about momentum balance with mass flow works in simple contexts, so it seems always correct.

**Why it is wrong:**
The physics definition of momentum balance with mass flow includes restrictions (vector nature, sign, reference frame) that intuition ignores.

**Detection signal:**
The student gets a result with the wrong sign or absurd magnitude and does not question it.

**Conceptual correction:**
Return to the formal definition, check units and sign, and compare with a known limiting case.

**Mini contrast example:**
A student applies momentum balance with mass flow without considering the vector sign and gets a positive result where it should be negative; the magnitude is correct but the direction is not.

## Model errors

### Error 2: Applying the ideal model of momentum balance with mass flow outside its validity domain

**Why it seems correct:**
The model works in textbook exercises, so it seems universal.

**Why it is wrong:**
Every model has validity hypotheses. Outside its domain, predictions diverge from reality.

**Detection signal:**
The numerical result violates a known physical limit (speed exceeding \(c\), negative energy, etc.).

**Conceptual correction:**
Before computing, verify that the model hypotheses hold; if not, use the extended model.

**Mini contrast example:**
Applying the ideal formula for momentum balance with mass flow at relativistic speeds gives >5 % error when v > 0.1c.

## Mathematical errors

### Error 3: Sign error when projecting vectors in the calculation of momentum balance with mass flow

**Why it seems correct:**
Choosing all positive values simplifies the calculation.

**Why it is wrong:**
The vector's direction matters. A wrong sign in the projection inverts the result.

**Detection signal:**
The result has the opposite sign to what is expected from the diagram or the physical situation.

**Conceptual correction:**
Define axes and positive signs before substituting values, and check consistency at the end.

**Mini contrast example:**
A particle moves leftward along the \(x\)-axis. If \(v > 0\) is used instead of \(v < 0\), the computed momentum points the wrong way.

## Interpretation errors

### Error 4: Reading the numerical result without interpreting its physical meaning

**Why it seems correct:**
The number is the answer; no further analysis is needed.

**Why it is wrong:**
A numerical result without physical interpretation can hide conceptual, sign, or model errors.

**Detection signal:**
The student presents only digits without units, direction, or comparison with a limiting case.

**Conceptual correction:**
After obtaining the number, verify units, physical sense, and consistency with limiting cases.

**Mini contrast example:**
The student obtains a linear momentum with a negative sign and writes only the magnitude, omitting the sign. The negative sign indicates the opposite direction to the chosen axis, which is lost information.

## Quick self-control rule

Before accepting a result, apply this checklist:

1. **Units**: does the result have the expected dimensions?
2. **Sign**: is the sign consistent with the direction chosen in the diagram?
3. **Order of magnitude**: is the value physically reasonable for the scenario?
4. **Limiting case**: does the formula reduce to a known result when a parameter goes to zero or infinity?
