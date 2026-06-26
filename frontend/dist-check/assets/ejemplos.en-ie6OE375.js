const e=`# Guided example\r
\r
## Physical situation\r
\r
Two masses collide in one dimension. Total momentum and final kinetic energy are known in an elastic case.\r
\r
The goal is to answer the question without treating the formula as a black box. You must recognise which datum changes, which condition remains fixed, and what mathematical relation the model represents.\r
\r
## Mathematical translation\r
\r
The unknowns are the final velocities. Two equations are used: momentum conservation and energy conservation. Neither is enough alone.\r
\r
The translation separates physical quantities from operations. This prevents choosing a tool by habit and forces a justification of why the operation answers the question.\r
\r
## Step-by-step calculation\r
\r
First write m1 v1i + m2 v2i = m1 v1f + m2 v2f. Then add the energy equation. Solve one velocity from the first equation and substitute into the second.\r
\r
Each step preserves the original relation. If a factor, unit, or condition is changed, it must be declared before accepting the numerical result.\r
\r
## Reading the result\r
\r
The result is not two isolated numbers: it is a pair of velocities simultaneously compatible with both conservations. If one equation is lost, the solution is no longer determined.\r
\r
The physical reading includes unit, scale, and dependence. The final number is valid only if this reading matches the expected behaviour of the system.\r
\r
## Common error avoided\r
\r
This avoids applying a mechanical operation without reading the model. It also avoids losing units, ignoring signs, or extrapolating a rule outside its domain.\r
\r
# Inverse example\r
\r
## Given result\r
\r
If two unknown currents and two independent Kirchhoff laws appear, the physical question is which current flows through each branch of the circuit.\r
\r
## What physical question it can answer\r
\r
It reconstructs which quantity was being sought and which physical model stood behind the calculation. This matters because in real problems a mathematical output is often interpreted before the exact question is known.\r
\r
<!-- algebra-depth-v2 -->\r
# Example read by levels\r
\r
## Basic level\r
\r
Identify the target quantity, its expected unit, and the datum that most constrains the result. If you cannot state those three things, you should not use the calculator yet.\r
\r
## Intermediate level\r
\r
Solve the same setup after changing one input by a factor \`10\` or \`1/10\`. Observe whether the result changes linearly, inversely, through a power, or through an accumulated factor. That comparison reveals the real structure of systems of equations for physics.\r
\r
## Advanced level\r
\r
Ask which assumption allows the model to be used. It may be a valid scale, a constant treated as fixed, a linear approximation, independence between variables, or a domain where an inverse function makes sense. If that assumption fails, the number may lose its physical interpretation.\r
\r
`;export{e as default};
