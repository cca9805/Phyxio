const n=`# Frequent mistakes\r
\r
## Conceptual errors\r
\r
### Error 1: assuming energy is lost just because [[K]] decreases\r
\r
Why it seems correct:\r
Part of the cycle shows lower [[K]], so people conclude that total energy is no longer conserved.\r
\r
Detection sign:\r
The explanation ignores the simultaneous rise of [[U]] in the same interval.\r
\r
Mini contrast example:\r
Near a turning point, [[K]] may be small while [[U]] is large and total [[E]] remains stable.\r
\r
Conceptual correction:\r
Do not read one component in isolation; the relevant criterion is balance among [[K]], [[U]], and [[E_total]].\r
\r
### Error 2: thinking constant total energy means constant components\r
\r
Why it seems correct:\r
If [[E]] does not change, students may expect [[K]] and [[U]] to stay fixed too.\r
\r
Detection sign:\r
They treat temporal variation of components as a contradiction.\r
\r
Mini contrast example:\r
At equilibrium, [[K]] may dominate while [[U]] is low; at turning points the opposite holds without breaking conservation.\r
\r
Conceptual correction:\r
Constancy belongs to the ideal sum, not to each component separately.\r
\r
## Model errors\r
\r
### Error 3: using ideal conservation when visible dissipation exists\r
\r
Why it seems correct:\r
The ideal energy equation is simple and gets reused even when the data clearly degrade.\r
\r
Detection sign:\r
[[E]] shows systematic drift and pure exchange interpretation is still forced.\r
\r
Mini contrast example:\r
If the total level drops cycle by cycle, the ideal lossless model is no longer sufficient.\r
\r
Conceptual correction:\r
When drift is persistent, move to a damped model or justify why the drift is not physical.\r
\r
### Error 4: confusing a parameter with an energetic state\r
\r
Why it seems correct:\r
[[A]] or [[k]] get mixed with truly time-varying quantities such as [[K]] and [[U]].\r
\r
Detection sign:\r
The solution treats [[A]] as if it were an instantaneous energy variable.\r
\r
Mini contrast example:\r
[[A]] sets the scale of [[E]], but it does not replace dynamic reading of component exchange.\r
\r
Conceptual correction:\r
Separate structural parameters from instantaneous energetic states.\r
\r
## Mathematical errors\r
\r
### Error 5: mixing units in energy reconstruction\r
\r
Why it seems correct:\r
Numerical factors may look small, so the final value appears “close enough.”\r
\r
Detection sign:\r
[[k]] is used in one unit system while [[x]] or [[A]] is used in another.\r
\r
Mini contrast example:\r
One missed conversion can multiply or divide reconstructed energy by a large factor.\r
\r
Conceptual correction:\r
Normalize units before computing any energetic quantity.\r
\r
### Error 6: ending with a numeric sum and no sign or range check\r
\r
Why it seems correct:\r
The final sum is positive, so it is accepted without deeper review.\r
\r
Detection sign:\r
No check is made that [[K]] and [[U]] remain non-negative or that [[E]] stays in a plausible order of magnitude.\r
\r
Mini contrast example:\r
A negative potential energy in this ideal model usually indicates flawed algebra or data handling.\r
\r
Conceptual correction:\r
Pair each calculation with non-negativity and scale checks.\r
\r
## Interpretation errors\r
\r
### Error 7: confusing energy exchange with a change of physical mechanism\r
\r
Why it seems correct:\r
Because [[K]] and [[U]] cross, students may think the system entered a different regime.\r
\r
Detection sign:\r
Terms like “model transition” are used when only normal component exchange occurred.\r
\r
Mini contrast example:\r
Component crossover is expected in ideal SHM and does not by itself imply new physics.\r
\r
Conceptual correction:\r
Distinguish internal redistribution of energy from a true mechanism change.\r
\r
### Error 8: reporting conservation as a slogan instead of evidence\r
\r
Why it seems correct:\r
The phrase “energy is conserved” is written without showing how it was verified.\r
\r
Detection sign:\r
No quantitative comparison appears between [[K]]+[[U]] and [[E]] or [[E_total]].\r
\r
Mini contrast example:\r
A conservation claim without a verifiable balance is narrative, not validation.\r
\r
Conceptual correction:\r
Claim conservation only after quantitative and physical coherence has been demonstrated.\r
\r
## Quick self-control rule\r
\r
1. Identify whether the question asks for one energetic component or total energy.\r
2. Check units before computing.\r
3. Verify non-negativity of [[K]] and [[U]].\r
4. Contrast [[K]]+[[U]] with [[E]] or [[E_total]].\r
5. Close with physical reading of exchange, not only with a sum.\r
`;export{n as default};
