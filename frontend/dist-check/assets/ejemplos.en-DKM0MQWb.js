const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A non-uniform rod of length [[L]] = 2.0 m lies on a horizontal bench. The coordinate along the rod is [[x]], measured from the left end. The linear density is not constant and increases toward the right side. The task is to compute [[xcm]] for the rod and justify physically why the result is not the geometric midpoint.\r
\r
You must also verify consistency with total mass [[M]] and with the center-of-mass definition for extended bodies, where each local element [[dm]] contributes with a different weight depending on its position [[r]].\r
\r
## Data\r
\r
- [[L]] = 2.0 m.\r
- Linear density law: [[lambda]]([[x]]) = 2 + [[x]] in kg/m, with [[x]] in m.\r
- Geometric domain: 0 <= [[x]] <= [[L]].\r
- One-dimensional setup, so we use [[xcm]] instead of the full vector [[R_cm]].\r
- Continuous and integrable mass distribution.\r
\r
## System definition\r
\r
The physical system is a continuous mass distribution along a line. We do not model isolated particles; we model a family of differential elements [[dm]] located at each [[x]]. Geometry matters because position multiplies differential mass when building the first moment [[I_x]].\r
\r
The origin is fixed at the left edge, so the output can be interpreted directly. If [[xcm]] is larger than [[L]]/2, the center shifts right, which is expected since [[lambda]] grows with [[x]].\r
\r
## Physical model\r
\r
The model uses the standard continuous-body framework:\r
\r
- Differential mass: [[dm]] = [[lambda]]([[x]]) d[[x]].\r
- Total mass [[M]] as the continuous sum of differential elements.\r
- Center of mass as a mass-weighted average.\r
\r
Core relations for the solution are:\r
\r
{{f:masa_longitud}}\r
\r
{{f:cm_x}}\r
\r
As a conceptual check, we retain the general vector form:\r
\r
{{f:cm_vectorial}}\r
\r
## Model justification\r
\r
The linear model is appropriate because the rod is slender and cross-sectional effects are secondary for this question. Therefore, [[lambda]] and [[L]] are the correct variables, not [[rho]] with [[V]] or [[sigma]] with [[A]].\r
\r
In other words, the formulas below belong to the same leaf but are not the primary computational route in this specific setup:\r
\r
{{f:masa_area}}\r
\r
{{f:masa_volumen}}\r
\r
They remain essential because they define how the same center-of-mass logic changes when geometry becomes surface-based or volume-based.\r
\r
## Symbolic solution

The general vector form sets the starting idea: center of mass as first moment divided by total mass.

{{f:cm_vectorial}}

First, write total mass as an integral over length:
\r
[[M]] = integral of [[dm]] = integral of [[lambda]]([[x]]) d[[x]] over 0..[[L]].\r
\r
Substituting [[lambda]]([[x]]) = 2 + [[x]]:\r
\r
[[M]] = integral of (2 + [[x]]) d[[x]] over 0..2.\r
\r
Then compute the first moment around the origin:\r
\r
[[I_x]] = integral of [[x]] d[[dm]] = integral of [[x]] [[lambda]]([[x]]) d[[x]] over 0..[[L]].\r
\r
With the same law:\r
\r
[[I_x]] = integral of [[x]](2 + [[x]]) d[[x]] over 0..2.\r
\r
Finally,\r
\r
[[xcm]] = [[I_x]]/[[M]].\r
\r
This structure is the key idea: total mass alone is not enough, because spatial placement of [[dm]] controls the weighted average.\r
\r
## Numerical substitution\r
\r
Evaluate [[M]]:\r
\r
[[M]] = [2[[x]] + [[x]]^2/2] from 0 to 2 = 4 + 2 = 6 kg.\r
\r
Evaluate [[I_x]]:\r
\r
[[I_x]] = integral of (2[[x]] + [[x]]^2) d[[x]] over 0..2\r
\r
[[I_x]] = [[[x]]^2 + [[x]]^3/3] from 0 to 2 = 4 + 8/3 = 20/3 kg m.\r
\r
Therefore:\r
\r
The quotient between first moment and total mass gives a final value of 10/9 m, approximately 1.11 m for [[xcm]].
\r
Geometric midpoint is [[L]]/2 = 1.0 m, so the center of mass moves 0.11 m to the right, toward higher [[lambda]].\r
\r
## Dimensional validation\r
\r
- [[M]] is in kg because [[lambda]] is kg/m and d[[x]] is m.\r
- [[I_x]] is in kg m because [[x]] multiplies [[dm]].\r
- [[xcm]] = [[I_x]]/[[M]] is in m.\r
\r
Range check: for mass fully distributed between 0 and [[L]], we need 0 <= [[xcm]] <= [[L]]. The computed value 1.11 m is valid.\r
\r
Bias check: since [[lambda]] grows with [[x]], [[xcm]] must exceed [[L]]/2. This also matches the result.\r
\r
## Physical interpretation\r
\r
The value 1.11 m is not just arithmetic. It encodes the causal story of the distribution: right-side segments contribute larger [[dm]] per position interval and therefore pull the weighted average.\r
\r
If the rod became uniform ([[lambda]] constant), [[xcm]] would return to [[L]]/2. If density increased more sharply with [[x]], the shift would be stronger. This interpretation connects computation with design decisions, such as where to support a real component to avoid unwanted rotation.\r
\r
# Real-world example\r
\r
## Context\r
\r
In compact drone assembly, battery, electronics, and structural parts are rarely perfectly symmetric. If the global center of mass does not align with the thrust reference line, control effort increases and flight efficiency drops.\r
\r
Engineers model the drone as a composition of subsystems: battery pack (volume model with [[rho]] and [[V]]), thin electronic board (surface model with [[sigma]] and [[A]]), and slender arms (linear model with [[lambda]] and [[L]]). The target is to place global [[R_cm]] close to the intended axis.\r
\r
## Physical estimation\r
\r
An order-of-magnitude estimate for [[xcm]] is built in three steps:\r
\r
1. Compute each subsystem mass [[M]] with the correct constitutive relation: [[rho]][[V]], [[sigma]][[A]], or [[lambda]][[L]].\r
2. Measure each subsystem reference position along [[x]].\r
3. Sum total first moment [[I_x]] and divide by total [[M]].\r
\r
Typical engineering observation: a shift of only 1 to 2 cm can increase energy consumption because the controller must continuously compensate torque. Geometrically small does not mean dynamically negligible.\r
\r
## Interpretation\r
\r
The final physical reading is that center of mass in extended bodies is a performance variable, not a decorative geometric point. Ignoring real [[dm]] distribution produces vibration, extra power demand, and lower control robustness.\r
\r
The strength of this leaf is model portability: linear, surface, and volume descriptions remain consistent under the same question, where does [[R_cm]] lie. What changes is how [[M]] and the first moment are constructed from geometry and density fields. That flexibility is exactly what real engineering needs.\r
`;export{e as default};
