const n=`# Common mistakes: Quadratic Drag\r
\r
## Conceptual errors\r
\r
### Error 1: Reading [[F_d]] as linear in [[v]]\r
\r
### Why it seems correct\r
Many nearby topics use linear proportionality, so that intuition is over-transferred.\r
\r
### Why it is incorrect\r
This leaf models quadratic growth, not linear growth.\r
\r
### Detection signal\r
When [[v]] doubles, your estimate only doubles instead of moving toward four times.\r
\r
### Conceptual correction\r
Use scaling checks as a first diagnostic before trusting any numeric output.\r
\r
### Mini-example\r
If [[v]] goes from 8 to 16 m/s and [[c]] is stable, [[F_d]] should move from 40 N toward 160 N, not 80 N.\r
\r
### Error 2: Treating [[c]] as universal\r
\r
### Why it seems correct\r
Short exercises often provide one fixed coefficient value.\r
\r
### Why it is incorrect\r
[[c]] depends on [[rho]], [[C_d]], and [[A]], so it changes with medium and effective geometry.\r
\r
### Detection signal\r
Predictions become inconsistent after posture or density changes while [[c]] is kept fixed.\r
\r
### Conceptual correction\r
Use the bridge relation to justify whether [[c]] must be recalibrated.\r
\r
### Mini-example\r
The same cyclist upright and tucked does not keep the same [[A]] or [[C_d]], so a fixed [[c]] is not automatically valid.\r
\r
### Error 3: Confusing relative speed with ground speed\r
\r
### Why it seems correct\r
Ground-referenced speed is usually what instruments display first.\r
\r
### Why it is incorrect\r
Drag depends on speed relative to the fluid, not only to the ground.\r
\r
### Detection signal\r
Your model cannot explain drag increase under headwind at unchanged ground speed.\r
\r
### Conceptual correction\r
Define [[v]] with respect to the fluid before applying equations.\r
\r
### Mini-example\r
At 12 m/s ground speed with 4 m/s headwind, fluid-relative speed is 16 m/s.\r
\r
## Model errors\r
\r
### Error 4: Forcing a quadratic model outside range\r
\r
### Why it seems correct\r
Once learned, a model tends to be reused everywhere.\r
\r
### Why it is incorrect\r
Some ranges are not well described by stable quadratic behavior.\r
\r
### Detection signal\r
Measured [[F_d]] versus [[v]] loses consistent upward convexity and systematic error grows.\r
\r
### Conceptual correction\r
Introduce explicit transition criteria when fit quality exceeds accepted margin.\r
\r
### Mini-example\r
If two speed windows require incompatible [[c]] values, the issue may be regime change, not noise.\r
\r
### Error 5: Ignoring [[A]] in comparisons\r
\r
### Why it seems correct\r
Users often assume geometry stays almost unchanged.\r
\r
### Why it is incorrect\r
Small posture or orientation changes alter [[A]] and shift the full drag curve.\r
\r
### Detection signal\r
You cannot explain force differences between tests with equal nominal speed.\r
\r
### Conceptual correction\r
Document reference [[A]] and test condition in every comparison.\r
\r
### Mini-example\r
Two drone configurations at the same [[v]] may show different [[F_d]] because one exposes larger frontal area.\r
\r
## Mathematical errors\r
\r
### Error 6: Rearranging without domain control\r
\r
### Why it seems correct\r
The algebraic step can look formally valid.\r
\r
### Why it is incorrect\r
Some rearrangements require constraints such as [[v]] > 0 or [[c]] > 0.\r
\r
### Detection signal\r
You obtain negative-root artifacts or physically impossible coefficients.\r
\r
### Conceptual correction\r
Check domain constraints before accepting rearranged outputs.\r
\r
### Mini-example\r
Computing [[v]] with negative [[c]] may produce calculator output but no physical meaning.\r
\r
### Error 7: Mixing units in [[rho]], [[A]], and [[c]]\r
\r
### Why it seems correct\r
Final numbers may look plausible even when units are inconsistent.\r
\r
### Why it is incorrect\r
Dimensional coherence is part of the model, not an optional presentation detail.\r
\r
### Detection signal\r
[[c]] appears with units incompatible with N*s^2/m^2.\r
\r
### Conceptual correction\r
Normalize all quantities to SI before evaluation.\r
\r
### Mini-example\r
Using area in cm^2 without conversion can shift [[c]] by multiple orders of magnitude.\r
\r
## Interpretation errors\r
\r
### Error 8: Reporting only the final [[F_d]] number\r
\r
### Why it seems correct\r
In fast assessment settings, obtaining a numeric value feels sufficient.\r
\r
### Why it is incorrect\r
Without mechanism reading, you cannot decide what to change in design or control.\r
\r
### Detection signal\r
Your conclusion does not mention [[v]], [[c]], or model validity conditions.\r
\r
### Conceptual correction\r
End each solution with one mechanism sentence and one validity-limit sentence.\r
\r
### Mini-example\r
Saying [[F_d]] = 95 N is incomplete unless you explain whether growth is dominated by speed, density, or geometry.\r
\r
### Error 9: Overinterpreting decimal precision\r
\r
### Why it seems correct\r
More decimals look more rigorous.\r
\r
### Why it is incorrect\r
If measurement and model uncertainty are significant, extra decimals do not add physical truth.\r
\r
### Detection signal\r
You report four decimals with coarse inputs and no uncertainty statement.\r
\r
### Conceptual correction\r
Match significant figures to data quality and model confidence.\r
\r
### Mini-example\r
With low-precision [[v]] and [[C_d]], two or three significant figures for [[F_d]] are usually more honest.\r
\r
## Quick self-control rule\r
\r
- Check dimensional consistency.\r
- Check order-of-magnitude plausibility.\r
- Check quadratic scaling when [[v]] changes.\r
- State validity limits explicitly.\r
- Mention [[v]], [[c]], [[rho]], [[C_d]], and [[A]] in interpretation.\r
\r
If one item fails, revisit assumptions before trusting the result.\r
`;export{n as default};
