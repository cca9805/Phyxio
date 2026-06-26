const n=`# Common mistakes: Net Force Balance Condition\r
\r
## Conceptual errors\r
\r
### Error 1: Equating equilibrium with force absence\r
\r
### Why it seems right\r
In everyday language, "equilibrium" often means "nothing is acting," so students expect an almost empty force diagram.\r
\r
### Why it is wrong\r
Translational equilibrium allows multiple non-zero forces. What must vanish is the vector sum, not each individual force.\r
\r
### How to detect it\r
If non-zero forces disappear from your derivation without physical justification, you are likely confusing absence with compensation.\r
\r
### Conceptual fix\r
Think in compensation patterns: weight versus support reaction, or vertical tension components versus total load.\r
\r
### Error 2: Checking only one axis\r
\r
### Why it seems right\r
Many examples look one-directional, so learners validate only x or only y.\r
\r
### Why it is wrong\r
In 2D, equilibrium requires both sumFx = 0 and sumFy = 0 simultaneously.\r
\r
### How to detect it\r
Count your independent equations. If there is only one balance equation, closure is incomplete.\r
\r
### Conceptual fix\r
Use a fixed routine: x-balance, y-balance, then global consistency check.\r
\r
### Error 3: Mixing mass [[m]] with force [[F]]\r
\r
### Why it seems right\r
Informal speech mixes kilograms with weight, so units are often blurred.\r
\r
### Why it is wrong\r
Mass is measured in kg, force in N. You cannot add [[m]] to [[T]] or [[F]] directly.\r
\r
### How to detect it\r
Perform dimensional checks term by term. Any equation with kg + N is invalid.\r
\r
### Conceptual fix\r
Convert mass into weight force before summing forces. Unit discipline prevents large-order mistakes.\r
\r
## Model errors\r
\r
### Error 4: Inconsistent signs in angular decomposition\r
\r
### Why it seems right\r
Students memorize sine and cosine patterns without locking the reference for [[theta]].\r
\r
### Why it is wrong\r
Component signs depend on quadrant and axis convention. A single sign error can invalidate the whole balance.\r
\r
### How to detect it\r
Perturb [[theta]] slightly and inspect trend direction. Nonsensical trends are a common sign-warning.\r
\r
### Conceptual fix\r
Declare angular reference first, draw component arrows, then write algebra.\r
\r
### Error 5: Accepting negative cable tensions\r
\r
### Why it seems right\r
Since the equations "solve," any numeric output can look acceptable.\r
\r
### Why it is wrong\r
An ideal cable can pull but not push. Negative tension usually means wrong assumptions or signs.\r
\r
### How to detect it\r
If [[T]] < 0 after checked algebra, re-examine force directions and axis definitions.\r
\r
### Conceptual fix\r
Rebuild the free-body diagram and solve again with consistent orientations.\r
\r
### Error 6: Ignoring experimental tolerance for [[R]]\r
\r
### Why it seems right\r
Theory states [[R]] = 0, so users demand exact calculator zero.\r
\r
### Why it is wrong\r
Real data contain noise, rounding, and angle uncertainty. Exact zero is rarely measured.\r
\r
### How to detect it\r
Compare residuals against tolerance bands instead of a strict absolute-zero criterion.\r
\r
### Conceptual fix\r
Adopt operational thresholds for abs(sumFx) and abs(sumFy) relative to a reference force.\r
\r
## Mathematical errors\r
\r
### Error 7: Claiming full static equilibrium without torque check\r
\r
### Why it seems right\r
This leaf focuses on force sums, so torque is easy to forget.\r
\r
### Why it is wrong\r
A rigid body can satisfy sumF = 0 and still rotate if net torque is not zero.\r
\r
### How to detect it\r
If the geometry involves extended bodies and separated supports, torque must be checked explicitly.\r
\r
### Conceptual fix\r
Separate translational equilibrium from rotational equilibrium in your final diagnosis.\r
\r
## Interpretation errors\r
\r
### Error 8: Extrapolating beyond model validity\r
\r
### Why it seems right\r
Once a method works in several exercises, users try to apply it everywhere.\r
\r
### Why it is wrong\r
Strong friction, acceleration, or coupled dynamics can dominate and break simple balance assumptions.\r
\r
### How to detect it\r
Look for systematic residuals and repeated experiment-theory contradictions.\r
\r
### Conceptual fix\r
When model switching is appropriate, switch: add friction, torque, or full dynamics as needed.\r
\r
### Error 9: Delivering numbers without physical interpretation\r
\r
### Why it seems right\r
Exam culture can reward the final number more than conceptual explanation.\r
\r
### Why it is wrong\r
Without interpretation, you cannot validate scale, sign, or mechanism consistency.\r
\r
### How to detect it\r
If you cannot explain which force compensates which and why, the solution is incomplete.\r
\r
### Conceptual fix\r
Close every problem with three statements: system state, dominant mechanism, and validity limit.\r
\r
## Quick self-control rule\r
\r
1. Confirm units on each axis equation.\r
2. Confirm sign and direction for each component.\r
3. Confirm both force sums are within tolerance.\r
4. Confirm whether torque balance is also required.\r
5. Confirm a clear physical interpretation is written.\r
\r
This routine catches most recurrent errors in translational equilibrium work.\r
`;export{n as default};
