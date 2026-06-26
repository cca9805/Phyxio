const e=`## Conceptual errors\r
\r
### Error 1: Treating [[I]] as individual electron speed\r
#### Why it seems right\r
The word current is often associated with fast motion, so students map large current to very high single-particle speed.\r
#### Detection signal\r
Reasoning ignores the roles of [[n]] and [[A]].\r
#### Contrast mini-example\r
Two materials may show similar [[I]] with different [[v]] if carrier density changes.\r
#### Conceptual fix\r
Read [[I]] as macroscopic net flow, not as single-particle velocity.\r
\r
### Error 2: Interpreting negative current as impossible\r
#### Why it seems right\r
Early exercises often use only positive magnitudes.\r
#### Detection signal\r
Signs are manually forced positive without checking convention.\r
#### Contrast mini-example\r
If net flow is opposite to chosen reference, negative [[I]] is physically coherent.\r
#### Conceptual fix\r
Keep one direction convention and interpret sign as directional information.\r
\r
## Model errors\r
\r
### Error 3: Using nominal area instead of effective conduction area\r
#### Why it seems right\r
Geometry from design drawings is readily available and looks definitive.\r
#### Detection signal\r
Computed [[J]] looks safe while local overheating is observed.\r
#### Contrast mini-example\r
A bottleneck contact can reduce effective [[A]] and increase local stress.\r
#### Conceptual fix\r
Use effective area and justify it from physical layout.\r
\r
### Error 4: Applying one average to multi-regime dynamics\r
#### Why it seems right\r
A single average simplifies communication.\r
#### Detection signal\r
One value cannot explain startup and settled behavior simultaneously.\r
#### Contrast mini-example\r
Pulse-heavy signals require stage-based interpretation.\r
#### Conceptual fix\r
Use piecewise windows when regimes differ.\r
\r
## Mathematical errors\r
\r
### Error 5: Mixing milliseconds and seconds\r
#### Why it seems right\r
Both units appear naturally in practical data sheets.\r
#### Detection signal\r
Current estimates shift by orders of magnitude unexpectedly.\r
#### Contrast mini-example\r
Keeping charge fixed while shrinking time unit inflates [[I]] strongly.\r
#### Conceptual fix\r
Normalize time units before substitution.\r
\r
### Error 6: Forgetting area conversion in [[J]]\r
#### Why it seems right\r
mm^2 values are common in engineering contexts.\r
#### Detection signal\r
Density appears unrealistically low compared with thermal behavior.\r
#### Contrast mini-example\r
Using mm^2 as m^2 suppresses density by large factors.\r
#### Conceptual fix\r
Convert area to SI before normalization.\r
\r
## Interpretation errors\r
\r
### Error 7: Deciding safety from global [[I]] only\r
#### Why it seems right\r
Panel current is the most visible measurement.\r
#### Detection signal\r
Hot spots appear despite acceptable global values.\r
#### Contrast mini-example\r
Same [[I]] with smaller [[A]] means higher [[J]] and local risk.\r
#### Conceptual fix\r
Always combine [[I]] and [[J]] for reliability decisions.\r
\r
### Error 8: Confusing algebraic closure with physical validity\r
#### Why it seems right\r
A closed equation chain feels conclusive.\r
#### Detection signal\r
Computed values disagree with observations but are still defended.\r
#### Contrast mini-example\r
A valid equation outside its domain can produce useless answers.\r
#### Conceptual fix\r
Check assumptions, scales, and domain before accepting output.\r
\r
## Quick self-control rule\r
Before accepting any result, verify target quantity, units, sign convention, model assumptions, and order of magnitude. If one item is unclear, treat the result as provisional and re-open the reasoning chain.`;export{e as default};
