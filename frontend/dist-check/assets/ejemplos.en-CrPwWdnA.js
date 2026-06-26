const e=`# Guided example\r
\r
## Physical situation\r
\r
A proposed distance travelled from rest is d = a t. The task is to detect whether the expression can be correct.\r
\r
The goal is to answer the question without treating the formula as a black box. You must recognise which datum changes, which condition remains fixed, and what mathematical relation the model represents.\r
\r
## Mathematical translation\r
\r
Distance has dimension L. Acceleration has L/T^2 and time has T. The product a t has L/T, which is speed.\r
\r
The translation separates physical quantities from operations. This prevents choosing a tool by habit and forces a justification of why the operation answers the question.\r
\r
## Step-by-step calculation\r
\r
Compare dimensions: [d] = L, [a t] = (L/T^2)T = L/T. Since L does not match L/T, the formula is dimensionally malformed.\r
\r
Each step preserves the original relation. If a factor, unit, or condition is changed, it must be declared before accepting the numerical result.\r
\r
## Reading the result\r
\r
The result does not give the exact formula, but it rejects an impossible form. A compatible option would contain a t^2, although the numerical factor still requires physics.\r
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
If an expression has dimensions of energy, it may answer questions about work, kinetic energy, or potential energy, but not directly about speed.\r
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
Solve the same setup after changing one input by a factor \`10\` or \`1/10\`. Observe whether the result changes linearly, inversely, through a power, or through an accumulated factor. That comparison reveals the real structure of dimensional analysis.\r
\r
## Advanced level\r
\r
Ask which assumption allows the model to be used. It may be a valid scale, a constant treated as fixed, a linear approximation, independence between variables, or a domain where an inverse function makes sense. If that assumption fails, the number may lose its physical interpretation.\r
\r
`;export{e as default};
