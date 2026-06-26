const e=`# Procedure\r
\r
## Before calculating\r
\r
Read the statement and decide which geometry appears: right triangle, circular arc, inclined axis, vector direction, or polar coordinates. Before calculating, write the target quantity, expected unit, and angle being used. If the angle has no reference, the problem is not defined yet.\r
\r
Make a simple drawing. Mark adjacent leg, opposite leg, hypotenuse, radius, arc, horizontal axis, vertical axis, and positive sense when needed. This preparation prevents choosing sine or cosine by memory alone.\r
\r
## Step 1: identify the mathematical object\r
\r
The object may be a trigonometric ratio, a projection, a coordinate conversion, an arc length, a similarity relation, or Pythagoras. In this leaf the main tool is to use Pythagoras, similarity, scale, and angles to build the geometry required by a physics problem.\r
\r
Classify the difficulty: basic if only one side is missing; intermediate if a function or unit conversion must be chosen; advanced if quadrants, signs, inverse functions, radians, or a moving basis appear.\r
\r
## Step 2: choose the operation\r
\r
Choose the operation from the geometry. If you have hypotenuse and need the horizontal component from the x-axis, use cosine. If you need the vertical component, use sine. If you have slope between two legs, use tangent. If radius and arc appear, use radians. If radial position appears, convert between polar and Cartesian coordinates.\r
\r
Do not substitute numbers until the symbolic relation is clear. For this leaf, a guide form is \`a^2 + b^2 = c^2, razones iguales en triangulos semejantes\`. Then adapt signs and units to the physical system.\r
\r
## Step 3: preserve units and signs\r
\r
Trigonometric ratios have no unit, but lengths, forces, velocities, fields, and radii keep their units. A component of \`50 N\` remains in newtons; a position remains in metres; an angular velocity may be in rad/s.\r
\r
The sign comes from the chosen axis and quadrant. Do not erase it by taking absolute values without justification. In physics, sign may indicate upward or downward, forward or backward, with or against a direction.\r
\r
## Step 4: calculate\r
\r
Calculate visibly. First convert degrees or radians if needed. Then evaluate sine, cosine, tangent, root, or quotient. Watch for impossible results: sine greater than 1, component larger than magnitude without geometric reason, or negative distance where only length exists.\r
\r
For estimation, use notable values: 30, 45, and 60 degrees. Knowing that \`sin(30)=1/2\`, \`sin(45)=sqrt(2)/2\`, and \`sin(60)=sqrt(3)/2\` helps detect calculator or angle-mode errors.\r
\r
## Step 5: interpret the result\r
\r
Write a complete physical sentence: horizontal force component, ramp height, arc travelled by a wheel, or Cartesian position of a polar point. State unit, sign, angular reference, and whether the scale is reasonable.\r
\r
Advanced interpretation compares dependence: what happens if the angle increases, the radius changes, the axis is reversed, or another quadrant is used. If you cannot answer, the calculation is not yet understood.\r
\r
## Self-check checklist\r
\r
Check: clear drawing, angular reference, positive sense, angular unit, chosen function, final units, sign, quadrant, domain, and scale. Decide whether the result can be compared with the original magnitude or a simple estimate.\r
\r
Before finishing, state which error was avoided: confusing opposite and adjacent, mixing degrees and radians, forgetting quadrant sign, using the wrong triangle, or interpreting a dimensionless ratio as a physical quantity.\r
`;export{e as default};
