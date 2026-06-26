const e=`# Common mistakes: center of mass of discrete systems\r
\r
## Conceptual errors\r
\r
### Error 1: Computing the CM as an arithmetic average of positions without weighting by mass\r
\r
**Why it seems correct:**\r
With two particles, dividing the distance by 2 seems to give the correct midpoint.\r
\r
**Why it is wrong:**\r
The CM is a mass-weighted average:\r
\r
{{f:xcm_sum}}\r
\r
Without weighting, unequal masses give wrong results.\r
\r
**Detection signal:**\r
The student uses \\((x_1 + x_2)/2\\) when the masses are different.\r
\r
**Conceptual correction:**\r
Always include each particle's mass as a weight in the average.\r
\r
**Mini contrast example:**\r
If the masses are different, the simple average does not give the real center of mass. Always use\r
\r
{{f:xcm_sum}}\r
\r
and check that the result is closer to the larger mass.\r
\r
### Error 2: Forgetting that the CM is a vector and computing only one component\r
\r
**Why it seems correct:**\r
If the problem looks one-dimensional, a single coordinate seems enough.\r
\r
**Why it is wrong:**\r
In the plane or in space, the CM has as many components as dimensions. Omitting a coordinate gives an incomplete position.\r
\r
**Detection signal:**\r
The student writes a single number as the answer when the system lies in a plane.\r
\r
\r
**Conceptual correction:**\r
Compute each component separately and report the full vector:\r
\r
{{f:xcm_sum}}\r
\r
{{f:ycm_sum}}\r
\r
\r
**Mini contrast example:**\r
If the system is in the plane, report all components using\r
\r
{{f:xcm_sum}}\r
\r
and\r
\r
{{f:ycm_sum}}\r
\r
The CM is a full vector.\r
\r
## Model errors\r
\r
### Error 3: Placing the coordinate origin in a way that unnecessarily complicates the sum\r
\r
**Why it seems correct:**\r
Any origin gives the same result because the CM does not depend on the coordinate system.\r
\r
**Why it is wrong:**\r
The final result is the same, but a poorly chosen origin generates positions with many digits and reduces readability, increasing the probability of numerical error.\r
\r
**Detection signal:**\r
The calculation uses coordinates with unnecessarily large or negative numbers, and the student makes errors when adding.\r
\r
**Conceptual correction:**\r
Place the origin at one of the particles or at a symmetry point of the system to simplify the sum.\r
\r
**Mini contrast example:**\r
Choose the origin to simplify calculations. For example, placing the origin at one of the particles allows you to use\r
\r
{{f:xcm_sum}}\r
\r
with simpler numbers and fewer errors.\r
\r
## Mathematical errors\r
\r
### Error 4: Adding masses in the numerator but forgetting the total mass [[M]] in the denominator\r
\r
**Why it seems correct:**\r
The student remembers multiplying $m_i x_i$ but believes the sum already incorporates normalisation.\r
\r
**Why it is wrong:**\r
Without dividing by the total mass [[M]]:\r
\r
{{f:M_sum}}\r
\r
the result has units of kg·m and is not a position.\r
\r
**Detection signal:**\r
The result has unusual units (kg·m) or a numerically huge value compared to the positions.\r
\r
**Conceptual correction:**\r
Always verify that the result has units of length and falls between the extreme positions of the system.\r
\r
**Mini contrast example:**\r
If you forget to divide by the total mass\r
\r
{{f:M_sum}}\r
\r
the result has no physical meaning. Always use\r
\r
{{f:xcm_sum}}\r
\r
to get a valid position.\r
\r
## Interpretation errors\r
\r
### Error 5: Interpreting that the center of mass must coincide with one of the system's particles\r
\r
**Why it seems correct:**\r
The student looks for the CM among the existing point masses, as if it were one of them.\r
\r
**Why it is wrong:**\r
The CM is a weighted average that can fall at any point in space, even where there is no mass.\r
\r
**Detection signal:**\r
The student rounds the [[xcm]] result to the position of the nearest particle.\r
\r
**Conceptual correction:**\r
Accept that the center of mass is a computed coordinate that does not need to coincide with any actual particle.\r
\r
**Mini contrast example:**\r
Two equal masses of 1 kg at \\(x = 0\\) and \\(x = 4\\) m. The CM is at \\(x = 2\\) m, where there is no particle.\r
\r
## Quick self-control rule\r
\r
Before accepting a result, apply this checklist:\r
\r
1. **Units**: does the result have the expected dimensions?\r
2. **Sign**: is the sign consistent with the direction chosen in the diagram?\r
3. **Order of magnitude**: is the value physically reasonable for the scenario?\r
4. **Limiting case**: does the formula reduce to a known result when a parameter goes to zero or infinity?\r
`;export{e as default};
