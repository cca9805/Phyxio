const e=`# Common mistakes: precession\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing the formal definition of precession with everyday intuition\r
\r
**Why it seems correct:**\r
Everyday intuition about precession works in simple contexts, so it seems always correct.\r
\r
**Why it is wrong:**\r
The physics definition of precession includes restrictions (vector nature, sign, reference frame) that intuition ignores.\r
\r
**Detection signal:**\r
The student gets a result with the wrong sign or absurd magnitude and does not question it.\r
\r
**Conceptual correction:**\r
Return to the formal definition, check units and sign, and compare with a known limiting case.\r
\r
**Mini contrast example:**\r
A student applies precession without considering the vector sign and gets a positive result where it should be negative; the magnitude is correct but the direction is not.\r
\r
## Model errors\r
\r
### Error 2: Applying the ideal model of precession outside its validity domain\r
\r
**Why it seems correct:**\r
The model works in textbook exercises, so it seems universal.\r
\r
**Why it is wrong:**\r
Every model has validity hypotheses. Outside its domain, predictions diverge from reality.\r
\r
**Detection signal:**\r
The numerical result violates a known physical limit (speed exceeding c, negative energy, etc.).\r
\r
**Conceptual correction:**\r
Before computing, verify that the model hypotheses hold; if not, use the extended model.\r
\r
**Mini contrast example:**\r
Applying the ideal formula for precession at relativistic speeds gives >5 % error when\r
\r
{{f:tau_g}}\r
\r
.\r
\r
## Mathematical errors\r
\r
### Error 3: Sign error when projecting vectors in the calculation of precession\r
\r
**Why it seems correct:**\r
Choosing all positive values simplifies the calculation.\r
\r
**Why it is wrong:**\r
The vector's direction matters. A wrong sign in the projection inverts the result.\r
\r
**Detection signal:**\r
The result has the opposite sign to what is expected from the diagram or the physical situation.\r
\r
**Conceptual correction:**\r
Define axes and positive signs before substituting values, and check consistency at the end.\r
\r
**Mini contrast example:**\r
A particle moves leftward along the x-axis. If\r
\r
{{f:tau_g}}\r
\r
 is used instead of\r
\r
{{f:tau_g}}\r
\r
, the computed momentum points the wrong way.\r
\r
## Interpretation errors\r
\r
### Error 4: Reading the numerical result without interpreting its physical meaning\r
\r
**Why it seems correct:**\r
The number is the answer; no further analysis is needed.\r
\r
**Why it is wrong:**\r
A numerical result without physical interpretation can hide conceptual, sign, or model errors.\r
\r
**Detection signal:**\r
The student presents only digits without units, direction, or comparison with a limiting case.\r
\r
**Conceptual correction:**\r
After obtaining the number, verify units, physical sense, and consistency with limiting cases.\r
\r
**Mini contrast example:**\r
The student obtains\r
\r
{{f:tau_g}}\r
\r
kg·m/s and writes only "12". The negative sign indicates the opposite direction to the chosen axis, which is lost information.\r
\r
## Quick self-control rule\r
\r
Before accepting a result, apply this checklist:\r
\r
1. **Units**: does the result have the expected dimensions?\r
2. **Sign**: is the sign consistent with the direction chosen in the diagram?\r
3. **Order of magnitude**: is the value physically reasonable for the scenario?\r
4. **Limiting case**: does the formula reduce to a known result when a parameter goes to zero or infinity?`;export{e as default};
