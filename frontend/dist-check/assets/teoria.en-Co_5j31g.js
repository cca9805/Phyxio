const e=`# Rearranging formulas\r
\r
## What it is\r
\r
Rearranging a formula means changing the form of an equation so that the quantity you want to know is isolated. The physical relation does not change; only the variable written as the result changes. If an equation connects distance, speed, and time, rearrangement lets you ask for any one of those quantities without inventing a new law.\r
\r
The central rule is that an equality remains true only if the same operation is applied to both sides. Adding, subtracting, multiplying, dividing, taking powers, or taking roots are valid moves when their domains are respected. Good rearrangement preserves the equation while reorganizing its parts.\r
\r
## Why it appears in physics\r
\r
Physics problems rarely give an equation already solved for the desired quantity. One motion problem may give speed and time to find distance, while another gives distance and time to find speed. In dynamics, the same relation can be used to find net force, mass, or acceleration.\r
\r
Formula rearrangement appears in motion, forces, energy, electricity, fluids, and fields because physical equations express dependencies. A variable is not just a symbol; it represents a quantity with units, scale, and meaning. Rearranging decides which quantity is unknown and which quantities act as data.\r
\r
## Visual or geometric idea\r
\r
Think of an equation as a balanced scale. Whatever you do to one side must also be done to the other side, or the balance is lost. If a variable is multiplied by a constant, dividing both sides by that constant removes the same factor from both sides. If a term is added, subtracting that term from both sides separates it.\r
\r
Another useful image is undoing a machine in reverse order. If the unknown was first multiplied and then shifted by addition, you recover it by undoing the addition first and the multiplication second. Many mistakes come from moving symbols without identifying the operation that binds them.\r
\r
## Minimal symbolic language\r
\r
An equation has a left-hand side and a right-hand side. The unknown is the variable being solved for; the data are the known quantities or the quantities treated as known. To solve \`a x + b = c\` for \`x\`, subtract \`b\` from both sides and then divide by \`a\`, provided that \`a\` is not zero.\r
\r
In physics, every symbol keeps its unit. If you solve for speed, the final expression must have units of metres per second. If you solve for time, the expression cannot have units of length. Units are a coherence test, not a decoration added at the end.\r
\r
Several families of rearrangement should be recognised. In a linear relation such as \`a x + b = c\`, the unknown is enclosed by addition and multiplication. In a denominator relation such as \`p = F/A\`, solving for \`A\` requires remembering that \`A\` cannot be zero and that multiplying by \`A\` changes the structure before division by \`p\`. In a quadratic relation such as \`K = (1/2) m v^2\`, solving for \`v\` introduces a root and forces a decision about signed velocity or speed magnitude.\r
\r
There are also rearrangements where the unknown is repeated. In an expression such as \`F = b v + c v^2\`, velocity cannot be isolated by moving one term: an algebraic equation must be recognised. In circuits, drag, fluids, or analytical mechanics, rearranging may mean collecting terms, factoring, solving a quadratic equation, or accepting a numerical solution. That step matters: not every rearrangement ends as a simple fraction.\r
\r
Finally, inverse functions appear. If a variable is inside \`sin\`, \`cos\`, \`ln\`, or \`e^x\`, it is not released by division. The corresponding inverse function is used and the domain is checked: sine outputs only values between \`-1\` and \`1\`, logarithms require positive arguments, and exponentials never produce negative values. These restrictions are physical conditions on possible data, not algebraic details.\r
\r
## What the result means\r
\r
The result of a rearrangement is not merely a more convenient algebraic shape. It is a conditional answer: it tells what the unknown equals if the data, the model, and the assumptions are valid. Solving for time in uniform motion only makes physical sense if speed is constant during the interval.\r
\r
The way the result changes with the data is part of its meaning. If increasing mass increases the required force for the same acceleration, the rearranged formula shows direct dependence. If increasing resistance reduces current, it shows inverse dependence.\r
\r
The result may also be a family of solutions. Taking a square root introduces two mathematical signs, but physics decides whether both make sense. Speed is usually taken positive, while one-dimensional velocity may carry a sign depending on the chosen axis. In trigonometry, several angles can satisfy the same ratio; the geometric context selects the relevant one.\r
\r
For that reason, an advanced rearrangement ends with three readings: algebraic, dimensional, and physical. The algebraic reading checks that the variable is isolated. The dimensional reading checks units. The physical reading checks domain, sign, scale, solution branch, and model assumptions.\r
\r
## When not to use it\r
\r
Do not rearrange mechanically if you do not know what each variable represents, if a divisor might be zero, or if the formula belongs to a model that does not apply. Do not isolate a variable inside a sum, a root, a sine, or a power as if all terms could be separated freely.\r
\r
In real physics problems, check the assumptions first: uniform or accelerated motion, negligible or relevant friction, uniform or variable field, ideal or viscous fluid. A rearrangement can be algebraically correct and still physically false outside its domain.\r
\r
Do not force a closed-form expression when the model naturally leads to an equation solved numerically. In physics, accepting that an unknown must be found by iteration, a graph, or numerical computation is not a failure: it recognises the real structure of the problem. Symbolic rearrangement is a tool, not an obligation.\r
\r
## Operational summary\r
\r
Formula rearrangement isolates the unknown while preserving equality, units, and meaning. The goal is not to move letters quickly, but to identify the operation surrounding the variable, undo it in reverse order, and check that the result answers the physical question.\r
\r
A good rearrangement ends with three checks: the target variable is alone, the units match that variable, and the dependence makes physical sense. If one of these checks fails, do not continue with numerical substitution; return to the model, the equation, or the previous algebraic step.\r
\r
<!-- algebra-depth-v2 -->\r
## Depth layer: formula rearrangement\r
\r
This leaf should not act as a short list of rules, but as a tool for thinking through physics problems. The goal is to isolate an unknown without breaking equality, units, or physical domain. A basic student must recognise the target quantity and expected unit; an intermediate student must justify the chosen operation; an advanced student must anticipate limits, dependencies, and cases where the model no longer applies.\r
\r
If the unknown appears once, inverse operations are undone; if it appears several times, terms are collected, factored, or another equation type is recognised.\r
\r
| Structure | What to inspect | Tool |\r
|---|---|---|\r
| \`a x=b\` | one occurrence | divide |\r
| \`a x+b=c\` | outer sum | subtract and divide |\r
| \`a/x=b\` | unknown in denominator | multiply before dividing |\r
| \`a x^2=b\` | even power | root and sign |\r
| repeated \`x\` | several occurrences | collect or solve an equation |\r
\r
The test of understanding is comparison. If an input is multiplied by \`2\`, by \`10\`, or by \`1/2\`, the student should say what happens to the output before using the calculator. That prediction turns algebra into physical control of the result.\r
\r
`;export{e as default};
