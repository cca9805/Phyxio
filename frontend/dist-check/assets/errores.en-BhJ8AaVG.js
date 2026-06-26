const n=`# Common mistakes: Examples of Translational Equilibrium\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing mass [[m]] with weight [[W]]\r
\r
### Why it seems right\r
Everyday language often says "weight in kilograms," which blurs mass and force concepts.\r
\r
### Why it is incorrect\r
[[m]] is in kg while [[W]] is in N. Ignoring [[g]] corrupts the full equilibrium chain.\r
\r
### Detection signal\r
Force equations contain kg terms or unrealistically small loads.\r
\r
### Conceptual correction\r
Convert [[m]] to [[W]] first, then run force balances and projections.\r
\r
### Mini-example\r
Treating 20 kg as 20 N underestimates actual load by nearly one order of magnitude.\r
\r
### Error 2: Assuming equilibrium means force absence\r
\r
### Why it seems right\r
The word equilibrium sounds like "nothing acts."\r
\r
### Why it is incorrect\r
Translational equilibrium requires compensation, not interaction disappearance.\r
\r
### Detection signal\r
Your free-body diagram shows only one arrow in a contact or cable setup.\r
\r
### Conceptual correction\r
Look for compensation structures: weight-normal, weight-tension, demand-capacity friction pairing.\r
\r
### Mini-example\r
A block at rest on a table has non-zero [[W]] and [[N]], yet zero vertical resultant.\r
\r
### Error 3: Using inconsistent angular references\r
\r
### Why it seems right\r
It may look harmless to measure [[alpha]] or [[theta]] from different axes ad hoc.\r
\r
### Why it is incorrect\r
Projection formulas depend on angular reference; inconsistency flips component meaning.\r
\r
### Detection signal\r
Small angle changes produce physically backward component trends.\r
\r
### Conceptual correction\r
Declare the reference once and keep it unchanged through the full derivation.\r
\r
### Mini-example\r
Measuring [[theta]] from vertical while using horizontal-reference expressions distorts [[T]].\r
\r
## Model errors\r
\r
### Error 4: Treating [[F_s_max]] as always active\r
\r
### Why it seems right\r
The friction-limit expression is simple and looks directly usable.\r
\r
### Why it is incorrect\r
[[F_s_max]] is capacity ceiling, not mandatory actual friction in every state.\r
\r
### Detection signal\r
You automatically set actual friction equal to maximum friction without threshold justification.\r
\r
### Conceptual correction\r
Compare tangential demand against capacity; equality occurs only at sticking threshold.\r
\r
### Mini-example\r
If [[W_parallel]] is smaller than [[F_s_max]], actual friction stays below the limit.\r
\r
### Error 5: Extrapolating static models into dynamic regimes\r
\r
### Why it seems right\r
Successful classroom closures can create overconfidence.\r
\r
### Why it is incorrect\r
Observable acceleration requires dynamic equations, not pure static closure.\r
\r
### Detection signal\r
The system keeps moving while your static paper balance says equilibrium.\r
\r
### Conceptual correction\r
Escalate model complexity whenever acceleration evidence appears.\r
\r
### Mini-example\r
A vibrating box on a ramp is not well described by static equilibrium only.\r
\r
## Mathematical errors\r
\r
### Error 6: Mixing components from different axes\r
\r
### Why it seems right\r
Fast symbolic manipulation can hide directional incompatibilities.\r
\r
### Why it is incorrect\r
Horizontal and vertical components cannot be summed in one scalar equation.\r
\r
### Detection signal\r
Equations are written without axis labels or combine incompatible directions.\r
\r
### Conceptual correction\r
Write one equation per axis and tag every term by direction.\r
\r
### Mini-example\r
Adding [[N]] and tangential demand in one scalar closure breaks vector consistency.\r
\r
### Error 7: Skipping dimensional control\r
\r
### Why it seems right\r
If the final number looks plausible, users may skip unit checks.\r
\r
### Why it is incorrect\r
Unit mistakes can keep algebraic form but still destroy physical validity.\r
\r
### Detection signal\r
Results fall far outside expected magnitude ranges.\r
\r
### Conceptual correction\r
Run dimensional checks at intermediate and final steps.\r
\r
### Mini-example\r
Using degrees where software expects radians can distort [[alpha]]-based projections.\r
\r
## Interpretation errors\r
\r
### Error 8: Reporting numbers without mechanism\r
\r
### Why it seems right\r
In exam culture, numeric output is often treated as the endpoint.\r
\r
### Why it is incorrect\r
Without mechanism, you cannot judge transferability or causal consistency.\r
\r
### Detection signal\r
The conclusion ends at "value obtained" with no compensation narrative.\r
\r
### Conceptual correction\r
Close each example with state, dominant variable, and model-validity limit.\r
\r
### Mini-example\r
Stating only [[T]] equals some value does not explain why geometry forces that tension.\r
\r
### Error 9: Avoiding cross-example comparison\r
\r
### Why it seems right\r
Solving problems independently can feel efficient.\r
\r
### Why it is incorrect\r
This leaf is about mechanism comparison; without contrast, no transferable criterion emerges.\r
\r
### Detection signal\r
You cannot explain why [[N]] dominates one case while [[T]] dominates another.\r
\r
### Conceptual correction\r
After each solution, state one similarity and one difference versus another leaf example.\r
\r
### Mini-example\r
Equal [[W]] can still require different responses due to [[alpha]] or [[theta]].\r
\r
## Quick self-control rule\r
\r
1. Check [[m]] to [[W]] conversion before any balance.\r
2. Confirm angular references for [[alpha]] and [[theta]].\r
3. Keep axis equations separated.\r
4. Compare [[W_parallel]] against [[F_s_max]] before claiming sticking.\r
5. Write a causal, comparative interpretation.\r
\r
This protocol catches most recurrent errors in equilibrium-example analysis.\r
`;export{n as default};
