const e=`# Dimensional analysis\r
\r
## What it is\r
\r
Dimensional analysis studies the physical kind of each quantity, not only the written unit. In physics it is used to read a relation before substituting numbers. The central question is not only how large a quantity is, but what changes when one condition changes.\r
\r
This tool turns an expression into a criterion. It lets the learner predict whether a result should increase, decrease, remain fixed, or change by a factor. That makes impossible answers visible before the final calculation.\r
\r
## Why it appears in physics\r
\r
It appears because physical laws relate quantities, not isolated numbers. A force depends on mass and acceleration, energy depends on position or speed, pressure depends on force and area, and a signal may grow or decay with time.\r
\r
It also appears in laboratory work, where many decisions require checking whether an observed variation is compatible with the model. The tool separates mathematical structure from numerical noise.\r
\r
## Visual or geometric idea\r
\r
The visual idea is this: imagine each quantity as a nature label: length, mass, time, current, or combinations that cannot be added when they differ. That image prevents treating every formula as a flat list of equivalent symbols.\r
\r
When a graph, table, or formula shows that response to change, the mathematical form is already giving physical information. Slope, curvature, quotient, or multiplicative factor indicate how the system behaves.\r
\r
## Minimal symbolic language\r
\r
Symbolically, speed has dimension L/T, force M L/T^2, and energy M L^2/T^2; an equation can be valid only if both sides have the same dimension. The important point is to read the operation as a relation between quantities, not as algebraic decoration.\r
\r
Before operating, identify the independent variable, dependent variable, constants, and domain. If a constant changes from one experiment to another, it can no longer be treated as fixed.\r
\r
## What the result means\r
\r
The result means a controlled prediction: how much a quantity changes, which unit it keeps, which sign makes sense, and which physical scale it represents. Getting a number is not enough; you must say what it measures.\r
\r
If the result contradicts the expected dependence, the model, units, or algebra must be reviewed. In physics, an arithmetically correct calculation can be false if it destroys the meaning of the variables.\r
\r
## When not to use it\r
\r
Do not use this tool when the phenomenon does not satisfy the conditions of the relation being read. Do not extrapolate a relation outside the interval where it was measured or derived.\r
\r
It does not replace physical reasoning. It controls and applies a relation, but first you must know whether that relation describes the real system with sufficient approximation.\r
\r
## Operational summary\r
\r
Identify the relation, decide what changes and what remains fixed, preserve units and signs, calculate only after understanding the dependence, and read the result as a physical statement. If you cannot say what the number means, the work is not finished.\r
\r
<!-- algebra-depth-v2 -->\r
## Depth layer: dimensional analysis\r
\r
This leaf should not act as a short list of rules, but as a tool for thinking through physics problems. The goal is to check whether an expression can represent the quantity it claims to represent. A basic student must recognise the target quantity and expected unit; an intermediate student must justify the chosen operation; an advanced student must anticipate limits, dependencies, and cases where the model no longer applies.\r
\r
A dimensionally impossible formula is wrong; a dimensionally possible formula still needs a physical model.\r
\r
| Quantity | Dimension | Reading |\r
|---|---|---|\r
| velocity | \`L T^-1\` | length per time |\r
| acceleration | \`L T^-2\` | velocity change per time |\r
| force | \`M L T^-2\` | mass times acceleration |\r
| energy | \`M L^2 T^-2\` | force times distance |\r
| pressure | \`M L^-1 T^-2\` | force per area |\r
\r
The test of understanding is comparison. If an input is multiplied by \`2\`, by \`10\`, or by \`1/2\`, the student should say what happens to the output before using the calculator. That prediction turns algebra into physical control of the result.\r
\r
`;export{e as default};
