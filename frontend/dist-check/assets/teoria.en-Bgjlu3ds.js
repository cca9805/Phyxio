const e=`# Triangles and geometric relations\r
\r
## What it is\r
\r
This leaf studies how to use Pythagoras, similarity, scale, and angles to build the geometry required by a physics problem. Trigonometry is not a list of calculator buttons: it is the language connecting angle, direction, length, component, sign, and scale. A student starting from scratch must first learn that every angle needs a reference; then that trigonometric ratios turn geometry into calculation; finally that this structure reads physical problems involving forces, velocities, fields, slopes, and rotations.\r
\r
The central idea is that a direction is not understood by a number alone. One must know from which axis it is measured, which sense is positive, which quadrant it lies in, and which quantities are projected onto the axes. This leaf therefore moves from basic recognition to advanced use: identify the drawing, calculate, interpret signs, and decide whether the geometric model represents the real system.\r
\r
## Why it appears in physics\r
\r
It appears because many physical quantities have direction or depend on geometry. In kinematics, positions and velocities are projected; in dynamics, forces are decomposed; in energy, slopes and distances are read; in electricity and magnetism, fields are described; in waves and rotation, angles change with time.\r
\r
Physical use requires preserving unit, sign, domain, and model. A force component is still measured in newtons, angular velocity requires coherent angle units, and a projected distance cannot exceed the original magnitude unless a ratio has been inverted incorrectly. Trigonometry is the bridge between drawing and equation.\r
\r
## Visual or geometric idea\r
\r
![Triangles and geometric relations](/graphs/matematicas/trigonometria-y-geometria/triangulos-relaciones.svg)\r
\r
Visually, the problem reduces to locating a triangle, an arc, a direction, or a projection. The hypotenuse often represents the magnitude of a quantity; the legs represent components or measurable distances; the angle decides which part falls on each axis. If the reference axis changes, sine and cosine may swap, and if the quadrant changes, signs change.\r
\r
| Tool | When to use it | Physical check |\r
|---|---|---|\r
| Pythagoras | right triangle | hypotenuse is the largest side |\r
| similarity | same angles | constant ratios |\r
| scale | enlarged figure | lengths by k, areas by k^2 |\r
| complementary angles | 90 degrees total | sine and cosine swap |\r
\r
## Minimal symbolic language\r
\r
The reference symbolic expression is \`a^2 + b^2 = c^2, razones iguales en triangulos semejantes\`. It must not be memorised in isolation: it must be read together with the drawing. Each symbol represents a quantity with unit or a dimensionless ratio. Angles may be written in degrees to interpret a drawing, but in advanced calculation and angular motion radians are the natural measure.\r
\r
Basic level: identify leg, hypotenuse, radius, arc, axis, or component. Intermediate level: choose sine, cosine, tangent, Pythagoras, or polar conversion depending on the missing data. Advanced level: check quadrant, inverse-function domain, physical sign, result scale, and model conditions.\r
\r
## What the result means\r
\r
The result is not just a number. It means a projected length, direction, component, inclination, position, or angular scale. It must have a unit if it represents a physical quantity and must be dimensionless if it represents a trigonometric ratio. If the result contradicts the drawing, expected sign, or order of magnitude, the calculation is not finished.\r
\r
It also means a dependence. If the angle moves toward a more horizontal direction, a horizontal component usually grows and a vertical one decreases. If the radius increases at the same angle, coordinates grow proportionally. This dependence reading is what allows new physics problems to be attacked.\r
\r
## When not to use it\r
\r
Do not apply trigonometry mechanically if axis, angular reference, positive sense, and domain have not been fixed. Do not use a right triangle when the real geometry does not contain one, and do not take an inverse function without checking that several angles may have the same ratio.\r
\r
At advanced level, do not extrapolate a plane drawing to a three-dimensional, curved, or variable system without justifying the model. If the angle changes with time, the radius is not constant, or components depend on a moving basis, the tool remains useful but requires more care.\r
\r
## Operational summary\r
\r
First draw or identify the geometry. Then fix reference, axis, positive sense, and angular unit. Next choose the appropriate relation, calculate with units, and check sign, quadrant, domain, and scale. Always close with a physical sentence: what was obtained, in what unit, under what geometry, and what error was avoided.\r
`;export{e as default};
