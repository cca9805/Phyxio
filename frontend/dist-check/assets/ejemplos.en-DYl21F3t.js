const e=`# Guided example\r
\r
## Physical situation\r
\r
Consider una fuerza de \`50 N\` aplicada a \`35 grados\` in a physics problem where one needs to convert a directed quantity into components along axes and reconstruct it without losing sign, magnitude, or unit. The goal is not to press a trigonometric function at random, but to translate the situation into clear geometry. First decide what the angle represents, from which axis it is measured, and which quantity must be calculated.\r
\r
At basic level, recognising the drawing and expected unit is enough. At intermediate level, the correct relation is chosen. At advanced level, signs, quadrants, domain, and scale are checked.\r
\r
## Mathematical translation\r
\r
The translation uses the relation \`A_x = A cos(theta), A_y = A sin(theta), A = sqrt(A_x^2 + A_y^2)\`. The known datum is placed in its geometric role: magnitude, radius, hypotenuse, leg, arc, component, or coordinate. If the angle is measured from another axis, the function used may change.\r
\r
The translation must preserve unit. A length remains in metres, a force remains in newtons, and a trigonometric ratio has no unit. This separation prevents mixing physical result with geometric factor.\r
\r
## Step-by-step calculation\r
\r
Step 1: draw the geometry and mark the angle. Step 2: write the symbolic relation before substitution. Step 3: convert degrees or radians if needed. Step 4: calculate the value. Step 5: compare whether the result is smaller, larger, or compatible with the original magnitude.\r
\r
If the calculation produces a component, its magnitude should not exceed the original magnitude. If it produces an angle, it must belong to the problem domain. If it produces a distance, it must have length unit.\r
\r
## Reading the result\r
\r
The result is read as a physical statement: a component, direction, height, arc, position, or scale. Writing the number is not enough; one must state what it measures, relative to which reference, and with what sign.\r
\r
Advanced reading compares dependencies. If angle, radius, or hypotenuse increases, the result should change as the model predicts. That comparison detects errors before an exam or a laboratory measurement.\r
\r
## Common error avoided\r
\r
The avoided error is choosing the function by memory, mixing degrees and radians, forgetting the quadrant, or interpreting a dimensionless ratio as a magnitude. The method forces drawing, formula, and physical sentence to match.\r
\r
# Inverse example\r
\r
## Given result\r
\r
Suppose an expression such as \`A_x = A cos(theta), A_y = A sin(theta), A = sqrt(A_x^2 + A_y^2)\` appears already written in a solution. The inverse question is: what geometry must have existed for that expression to be reasonable?\r
\r
## What physical question it can answer\r
\r
It reconstructs whether the problem was asking for a component, an angle, a distance, a position, or an arc length. This inverse reading is important in advanced problems because one often reviews someone else's solution or debugs a simulation.\r
`;export{e as default};
