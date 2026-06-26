const r=`# Common mistakes: Typical Examples\r
\r
## Conceptual errors\r
\r
### Error 1: Reversing cause and effect\r
\r
Learners often think centripetal force appears because motion is curved. The causal direction is opposite: real interactions create [[Frad]], which produces [[ac]] and continuously bends velocity direction.\r
\r
### Error 2: Applying equations without scenario validation\r
\r
Because many relations include [[v]] and [[r]], students use them interchangeably. This is incorrect: each equation belongs to a specific physical setup (string, flat curve, banking, loop, or orbit).\r
\r
### Error 3: Mixing related quantities\r
\r
[[Frad]] and [[Fc]] are frequently blended without clear definition, and [[m]] is sometimes confused with weight. This creates unit and interpretation errors even when algebra looks clean.\r
\r
## Model errors\r
\r
### Error 4: Missing model-breakdown signals\r
\r
The ideal model works well in clean cases, but can fail under sustained slip, strong coupling, non-circular trajectories, or highly perturbed operation.\r
\r
### Error 5: Ignoring validity limits\r
\r
A correct equation used outside its assumptions is still a bad model. Every result must include scenario and margin statements.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless rearrangements\r
\r
Small symbolic mistakes can invert trends and lead to unsafe conclusions. Always check monotonic behavior after rearrangement.\r
\r
### Error 7: Unit and constant mistakes\r
\r
In orbital and mixed-scale problems, poor unit handling (especially with [[G]] and large [[r]]) can produce absurd magnitudes.\r
\r
## Interpretation errors\r
\r
### Error 8: False precision\r
\r
Extra decimals do not compensate for model and measurement uncertainty.\r
\r
### Error 9: Stopping at the number\r
\r
A numerical value without causal interpretation is incomplete. A good solution states which control variable should be changed and why.\r
\r
## Quick self-control rule\r
\r
- Did I identify the real radial-force provider?\r
- Did I distinguish [[Frad]] from [[Fc]] clearly?\r
- Did I validate units and scale?\r
- Did I state model limits?\r
- Did I close with an actionable physical conclusion?\r
\r
If any answer is no, the solution is not physically complete.\r
`;export{r as default};
