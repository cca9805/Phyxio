const e=`# Common errors in the fluid concept\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing viscosity with density\r
**Why it seems correct**: There is an intuitive idea that a "heavy" (dense) fluid must also be "thick" (viscous). Many people see mercury and motor oil and assume the denser one is the more resistant to flow.\r
**Why it is incorrect**: Density [[rho]] measures mass per unit volume (inertia), while viscosity [[mu]] measures internal resistance to deformation (friction). They are independent properties with different physical origins.\r
**Detection signal**: Believing that mercury (very dense) is more viscous than motor oil, when mercury actually flows much more easily than heavy oils.\r
**Conceptual correction**: Think of density as "how much it weighs" and viscosity as "how much it resists being poured or stirred."\r
**Mini-example**: Oil floats on water (it is less dense), but it flows much slower than water (it is more viscous).\r
\r
### Error 2: Thinking that fluids offer no resistance to shear\r
**Why it seems correct**: Since fluids do not maintain their shape and eventually take the shape of any container, one tends to think that there is no force opposing lateral movement.\r
**Why it is incorrect**: Fluids offer dynamic resistance. They do not stop under shear stress [[tau]], but they require a finite and continuous force to maintain a certain rate of deformation.\r
**Detection signal**: Forgetting to include the viscous force in the force balance of an object moving in a fluid, or assuming a fluid moves "for free."\r
**Conceptual correction**: A fluid offers resistance **while it moves**; an elastic solid offers resistance **while it is deformed** and stays in equilibrium.\r
**Mini-example**: It is harder to move your hand quickly underwater than to do it slowly, because the stress [[tau]] increases with the gradient [[du_dy]].\r
\r
## Model errors\r
\r
### Error 1: Applying Newton's law to non-Newtonian fluids\r
**Why it seems correct**: The formula la ley de Newton de la viscosidad, from water to toothpaste.\r
**Why it is incorrect**: Many complex fluids (blood, polymers, pastes, ketchup) have a viscosity [[mu]] that changes according to the applied force or time. Using a constant viscosity value leads to massive errors in pressure drop calculations.\r
**Detection signal**: Measured stress is not proportional to applied velocity, or the fluid seems to "harden" or "soften" as you stir it.\r
**Conceptual correction**: Always verify if the fluid is Newtonian before using the simple linear viscosity law Newton's law of viscosity.\r
**Mini-example**: Ketchup does not come out of the bottle until it is given a sharp tap (exceeding the yield stress), which contradicts the linear Newtonian model.\r
\r
### Error 2: Ignoring the no-slip condition\r
**Why it seems correct**: It is difficult to imagine that the fluid layer right next to a wall is "stuck" and has zero velocity relative to the solid surface.\r
**Why it is incorrect**: Intermolecular forces between the fluid and the solid are so strong that they force the first layer to stop. Ignoring this prevents correctly calculating the velocity gradient [[du_dy]].\r
**Detection signal**: Drawing velocity profiles where the fluid has a non-zero velocity right at the fixed surface, or underestimating the drag on a boat.\r
**Conceptual correction**: Fluid velocity at the wall is **always** equal to the wall velocity.\r
**Mini-example**: Dust remains on fan blades because the air right on the blade surface does not move relative to it, even when the fan is spinning fast.\r
\r
## Mathematical errors\r
\r
### Error 1: Confusing dynamic with kinematic viscosity\r
**Why it seems correct**: Both measure "viscosity" and are used in similar formulas. They often appear together in tables.\r
**Why it is incorrect**: Dynamic viscosity [[mu]] measures pure internal friction, while kinematic viscosity (la relaci?n entre viscosidad din?mica, densidad y viscosidad cinem?tica) includes density. Interchanging them breaks the dimensional consistency of Newton's law Newton's law of viscosity.\r
**Detection signal**: Obtaining shear stress [[tau]] results with inconsistent units or values that are off by several orders of magnitude.\r
**Conceptual correction**: Make sure to use [[mu]] (Pa s) when working with direct forces and stresses in Newton's law of viscosity.\r
**Mini-example**: In Newton's law la ley de Newton de la viscosidad), if you use kinematic viscosity, the result will not be in Pascals, failing the dimensional check.\r
\r
## Interpretation errors\r
\r
### Error 1: Treating fluid as a set of solid particles\r
**Why it seems correct**: It is easier to visualize the movement of "little balls" than that of a continuous medium with varying fields.\r
**Why it is incorrect**: In basic fluid mechanics, fluid is a **continuum**. Ignoring internal gradients [[du_dy]] and treating it as a solid mass prevents understanding why viscosity exists and how energy is dissipated.\r
**Detection signal**: Attempting to apply solid kinematics (single velocity for the whole body) to a flow with friction.\r
**Conceptual correction**: Fluid always has a velocity profile; different layers move at different speeds relative to each other.\r
**Mini-example**: If you treat oil as a solid, you could not explain why a plate slides over it with more or less difficulty depending on the oil film thickness.\r
\r
## Quick self-control rule\r
**"Fluid = Continuous Deformation"**. If you find yourself analyzing a system where the material deforms and then stays still while maintaining the force, you are not dealing with a fluid, but with an elastic solid. Fluid only finds equilibrium when the driving force is nulled or balanced by viscous friction in motion. Always remember that the concept of fluid is defined by its dynamic response to stress [[tau]].\r
`;export{e as default};
