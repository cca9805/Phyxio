const e=`# Common errors\r
\r
## Error 1: choosing the wrong operation\r
\r
The most common error is choosing sine, cosine, tangent, Pythagoras, or polar conversion from memory rather than geometry. At basic level it is corrected by drawing opposite leg, adjacent leg, and hypotenuse. At intermediate level one checks which data are known and which are missing. At advanced level one checks whether the angle is measured from the correct axis.\r
\r
If the result does not change as the drawing predicts, the operation was probably not appropriate. A horizontal component measured from the x-axis should be largest near zero degrees and small near ninety degrees.\r
\r
## Error 2: losing the meaning of the variable\r
\r
A letter may represent magnitude, component, radius, arc, height, distance, or dimensionless ratio. If the same letter is used without physical meaning, the calculation becomes decorative. The variable must keep unit, sign, and role within the model.\r
\r
In Trigonometric functions, losing meaning often leads to interpreting a trigonometric ratio as a length or a length as an angle. The control is to write a sentence: what does this variable measure and in what unit?\r
\r
## Error 3: ignoring units\r
\r
Angles in degrees and radians are not interchangeable without conversion. In angular motion, using degrees inside formulas such as \`s = r theta\` breaks the scale because that relation requires radians. Components keep the unit of the original quantity.\r
\r
Another error is failing to distinguish a dimensionless ratio from a physical quantity. \`sin(theta)\` is not measured in metres or newtons; it multiplies a length, force, or velocity to produce a component.\r
\r
## Error 4: confusing sign and magnitude\r
\r
Magnitude is non-negative, but a component may be positive or negative depending on the axis. Erasing the sign may hide a force pointing downward, a velocity to the left, or a field in the opposite sense.\r
\r
The sign also depends on quadrant. Two angles may have the same sine and different cosine, or the same tangent and opposite directions. The calculator does not replace geometric reading.\r
\r
## Error 5: applying a rule outside its domain\r
\r
An inverse function only answers within a domain and may hide alternative solutions. If \`sin(theta)=0.5\`, the angle is not necessarily only 30 degrees; it may also be 150 degrees if the context allows it.\r
\r
In physics problems, domain includes restrictions: positive radii, positive lengths, angles inside the motion interval, components compatible with magnitude, and valid plane models.\r
\r
## Quick detection rule\r
\r
Before accepting the result, ask whether drawing, unit, sign, scale, and model all match. If an answer fails any of those five controls, it is not fixed by rounding; return to the geometric setup.\r
`;export{e as default};
