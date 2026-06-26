const e=`## Conceptual errors\r
\r
### Error 1: treating Kirchhoff as a memorized template\r
Why it seems correct:\r
Repeated exercise formats reward symbolic repetition.\r
\r
Detection signal:\r
Equations are written without explicit node or loop physical mapping.\r
\r
Contrast mini-example:\r
When topology changes, the memorized sequence fails despite correct algebra syntax.\r
\r
Conceptual correction:\r
State conservation principle first, then write equation.\r
\r
### Error 2: assuming negative current means wrong result\r
Why it seems correct:\r
Negative values are interpreted as invalid outcomes.\r
\r
Detection signal:\r
The final sign is manually flipped to force positivity.\r
\r
Contrast mini-example:\r
A negative branch current often indicates opposite real direction to assumed reference.\r
\r
Conceptual correction:\r
Keep computed value and reinterpret direction physically.\r
\r
## Model errors\r
\r
### Error 3: mixing variables from different branches\r
Why it seems correct:\r
Nearby values in the diagram are treated as interchangeable.\r
\r
Detection signal:\r
Current from one segment is combined with resistance from another in local relation.\r
\r
Contrast mini-example:\r
One local equation may look plausible while global closure breaks.\r
\r
Conceptual correction:\r
Each local equation must use variables from the same physical segment.\r
\r
### Error 4: using redundant equations as independent information\r
Why it seems correct:\r
More equations are mistaken for stronger validation.\r
\r
Detection signal:\r
System conditioning degrades or rank does not increase.\r
\r
Contrast mini-example:\r
Equivalent node balances do not add independent physical content.\r
\r
Conceptual correction:\r
Solve with an independent basis and keep extras for cross-check.\r
\r
## Mathematical errors\r
\r
### Error 5: changing sign convention mid-solution\r
Why it seems correct:\r
Direction assumptions are reset unconsciously between node and loop steps.\r
\r
Detection signal:\r
The same branch appears with inconsistent sign role across equations.\r
\r
Contrast mini-example:\r
A value may satisfy one equation and violate another.\r
\r
Conceptual correction:\r
Freeze references at diagram stage and maintain them to the end.\r
\r
### Error 6: losing unit discipline\r
Why it seems correct:\r
Units are dropped to speed manipulation.\r
\r
Detection signal:\r
Incompatible magnitudes are added or compared directly.\r
\r
Contrast mini-example:\r
Current and voltage cannot belong to the same additive term.\r
\r
Conceptual correction:\r
Run dimensional checks at each closure equation.\r
\r
## Interpretation errors\r
\r
### Error 7: closing analysis without cross-validation\r
Why it seems correct:\r
One expected unknown value is obtained and accepted.\r
\r
Detection signal:\r
Secondary node and loop checks are skipped.\r
\r
Contrast mini-example:\r
A single correct branch value can coexist with global inconsistency.\r
\r
Conceptual correction:\r
Validate both node and loop closures before final acceptance.\r
\r
### Error 8: confusing numerical closure with engineering closure\r
Why it seems correct:\r
Solving equations is treated as the end goal.\r
\r
Detection signal:\r
No discussion of protection, thermal, or operational implications.\r
\r
Contrast mini-example:\r
A mathematically correct result can still require redesign action.\r
\r
Conceptual correction:\r
Translate values into design, maintenance, or protection decisions.\r
\r
## Quick self-control rule\r
Before accepting a result, verify fixed references, independent equation set, branch-variable membership, node closure, loop closure, and dimensional consistency. If one fails, reopen the model before interpreting outcomes.`;export{e as default};
