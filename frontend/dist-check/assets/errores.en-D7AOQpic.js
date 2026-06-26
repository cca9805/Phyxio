const n=`## Conceptual errors\r
\r
### Error\r
Treating [[W]] as if it were just force magnitude.\r
\r
Why it seems correct\r
Everyday language often mixes effort and work, so students map large force directly to large transfer.\r
\r
Detection signal\r
The solution discusses [[F]] only and omits [[d]] or [[theta]] in interpretation.\r
\r
Mini-contrast example\r
Two interactions with the same [[F]] can yield very different work if orientation or displacement differs.\r
\r
Conceptual correction\r
Work is energy transfer by force through displacement, not force by itself.\r
\r
### Error\r
Assuming zero work means no physical effect.\r
\r
Why it seems correct\r
A zero value is read as full physical inactivity.\r
\r
Detection signal\r
The answer ignores directional effects or constraints even when transfer is zero.\r
\r
Mini-contrast example\r
A perpendicular force may do near-zero work while still steering the motion.\r
\r
Conceptual correction\r
Separate energetic transfer from directional dynamics.\r
\r
## Model errors\r
\r
### Error\r
Using constant-force work when force clearly varies across the segment.\r
\r
Why it seems correct\r
The formula is simple and familiar, so it is applied beyond its domain.\r
\r
Detection signal\r
Segment subdivision yields inconsistent totals or observations disagree systematically.\r
\r
Mini-contrast example\r
Spring-like interactions require variable-force treatment, not one fixed force value.\r
\r
Conceptual correction\r
Switch models when variation is significant.\r
\r
### Error\r
Changing system boundary mid-solution.\r
\r
Why it seems correct\r
Multi-body problems tempt silent shifts in what is considered the system.\r
\r
Detection signal\r
Contribution-level [[W]] is interpreted as whole-system [[Wnet]] without justification.\r
\r
Mini-contrast example\r
Work on a crate is not automatically work on crate plus operator.\r
\r
Conceptual correction\r
Fix system definition first and keep it unchanged.\r
\r
## Mathematical errors\r
\r
### Error\r
Dismissing the sign of work contributions.\r
\r
Why it seems correct\r
Students prioritize magnitude and treat sign as optional convention.\r
\r
Detection signal\r
Unsigned summation replaces signed balance.\r
\r
Mini-contrast example\r
Braking contribution reported as positive erases extraction reading.\r
\r
Conceptual correction\r
Keep signed contributions and justify sign through [[theta]].\r
\r
### Error\r
Mixing incompatible units for [[F]] or [[d]].\r
\r
Why it seems correct\r
Arithmetic still returns a number.\r
\r
Detection signal\r
Output scale is implausible for the scenario.\r
\r
Mini-contrast example\r
Unconverted centimeter displacement distorts [[W]] by large factors.\r
\r
Conceptual correction\r
Normalize SI units before substitution and run plausibility checks.\r
\r
## Interpretation errors\r
\r
### Error\r
Ending with a number and no causal reading.\r
\r
Why it seems correct\r
Exam habits reward final value over physical explanation.\r
\r
Detection signal\r
No statement connects sign, geometry, and expected motion effect.\r
\r
Mini-contrast example\r
Equal absolute values can represent opposite physical stories depending on sign and context.\r
\r
Conceptual correction\r
Finish with one sentence linking result, orientation, and energetic consequence.\r
\r
## Quick self-control rule\r
\r
1. Fix system and segment.\r
2. Check [[F]], [[d]], and [[theta]] in one consistent frame.\r
3. Predict sign before computation.\r
4. Sum signed contributions for [[Wnet]] when needed.\r
5. Validate order of magnitude and physical coherence.`;export{n as default};
