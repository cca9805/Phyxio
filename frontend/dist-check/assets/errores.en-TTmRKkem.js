const r=`# Common mistakes: The Concept of Centripetal Force\r
\r
## Conceptual errors\r
\r
### Error 1: Reversing cause and effect\r
\r
Students often think centripetal force appears because the path is curved. The causal order is the opposite: real interactions create a radial resultant [[Frad]], and that resultant produces [[ac]], which bends the trajectory.\r
\r
### Error 2: Applying formulas without checking context\r
\r
The equations look familiar, so substitution may feel automatic. But without fixed-radius assumptions, unit consistency, and a clear radial axis, the output may be numerically neat and physically wrong.\r
\r
### Error 3: Mixing similar quantities\r
\r
[[Frad]] and [[Fc]] are often treated as unrelated quantities, and [[omega]] is confused with frequency without proper conversion involving [[pi]] and [[T]].\r
\r
## Model errors\r
\r
### Error 4: Missing model-breakdown signals\r
\r
A method that worked once is often reused blindly. Under sustained slip, variable curvature, or strong speed transients, the basic circular model may no longer represent the dominant dynamics.\r
\r
### Error 5: Ignoring known validity limits\r
\r
Learners may report precise values while skipping assumptions. Without radius, speed regime, and measurement quality, the result has weak physical meaning.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless algebraic rearrangements\r
\r
Quick symbolic manipulation can invert dependencies and produce trends that contradict basic circular-motion behavior.\r
\r
### Error 7: Neglecting constants or unit conversion\r
\r
Treating [[pi]] or time conversion as minor details can propagate large errors through [[omega]], [[ac]], and force estimates.\r
\r
## Interpretation errors\r
\r
### Error 8: Reporting false precision\r
\r
Many decimals can hide model uncertainty. Significant figures should reflect data quality and model scope.\r
\r
### Error 9: Stopping at the number\r
\r
A value without causal interpretation is incomplete. A good solution states what change in [[v]], [[r]], or [[m]] would increase or reduce radial demand.\r
\r
## Quick self-control rule\r
\r
- Did I build [[Frad]] from real forces only?\r
- Did I distinguish [[ac]], [[Frad]], and [[Fc]] clearly?\r
- Did I verify conversions involving [[T]], [[omega]], and [[pi]]?\r
- Do my trends match physical intuition?\r
- Did I state a causal interpretation and a model-validity limit?\r
\r
If any answer is no, the solution is not physically complete.\r
`;export{r as default};
