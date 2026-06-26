const e=`# Guided example\r
\r
## Physical situation\r
\r
A distance of 2.0 m and a time of 0.81 s are measured to estimate average speed.\r
\r
The goal is to answer the question without treating the formula as a black box. You must recognise which datum changes, which condition remains fixed, and what mathematical relation the model represents.\r
\r
## Mathematical translation\r
\r
The operation is v = d/t. The distance has two significant figures and the time also has two. The result must not claim more precision.\r
\r
The translation separates physical quantities from operations. This prevents choosing a tool by habit and forces a justification of why the operation answers the question.\r
\r
## Step-by-step calculation\r
\r
v = 2.0/0.81 = 2.469... m/s. With the precision of the data, it is reported as 2.5 m/s, not as 2.4691358 m/s.\r
\r
Each step preserves the original relation. If a factor, unit, or condition is changed, it must be declared before accepting the numerical result.\r
\r
## Reading the result\r
\r
The result means an approximate average speed. Long decimals are not physical information; they are calculator output.\r
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
If a result is reported as 9.8 +/- 0.2 m/s^2, it can answer whether a measurement is compatible with terrestrial gravity within uncertainty.\r
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
Solve the same setup after changing one input by a factor \`10\` or \`1/10\`. Observe whether the result changes linearly, inversely, through a power, or through an accumulated factor. That comparison reveals the real structure of significant figures and uncertainty.\r
\r
## Advanced level\r
\r
Ask which assumption allows the model to be used. It may be a valid scale, a constant treated as fixed, a linear approximation, independence between variables, or a domain where an inverse function makes sense. If that assumption fails, the number may lose its physical interpretation.\r
\r
`;export{e as default};
