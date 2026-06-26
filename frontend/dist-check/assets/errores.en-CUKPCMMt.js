const e=`# Viscosity - Common Errors and Self-Control Guide\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing viscosity with density\r
**why it seems correct**: Both describe an "intrinsic" property of the fluid that affects how we perceive its motion. Intuitively, something "heavy" seems harder to move.\r
**why it is incorrect**: Density [[rho]] is a measure of inertia (mass per volume), while viscosity [[mu]] is a measure of internal friction (resistance to sliding between layers).\r
**detection signal**: Assuming that mercury is harder to pump than light oil just because it is denser.\r
**conceptual correction**: Density scales with inertia and dynamic viscosity scales with thermal energy dissipation. They are physical properties of different origins.\r
**mini-example**: Mercury is 13.6 times denser than water, but its viscosity is comparable. An engine oil is less dense than water but hundreds of times more viscous.\r
\r
### Error 2: Ignoring the no-slip condition\r
**why it seems correct**: It is easier to assume that all fluid in a pipe or channel moves at the same constant velocity (flat profile).\r
**why it is incorrect**: Real viscous fluids "stick" to solid walls at the molecular level; their relative velocity at the contact surface is obligatorily zero.\r
**detection signal**: Obtaining zero shear stress [[tau]] results on moving surfaces or proposing constant velocity profiles up to the wall.\r
**conceptual correction**: Viscosity generates a velocity gradient [[dudy]] that is maximum precisely at the duct walls.\r
**mini-example**: In a hose, the water in the center travels at maximum speed, while the water in contact with the plastic is static. Without this gradient, there would be no friction or pressure loss.\r
\r
## Model errors\r
\r
### Error 3: Applying Newtonian laws to complex fluids (Non-Newtonian)\r
**why it seems correct**: Newton's law is the standard formula\r
\r
{{f:tau_mu}}\r
\r
and seems applicable to any liquid by default.\r
**why it is incorrect**: Many everyday and industrial fluids (blood, paint, mud, polymers) have a viscosity that changes according to the intensity of the applied stress.\r
**detection signal**: Observing that flow resistance does not increase proportionally when the pumping speed is doubled.\r
**conceptual correction**: Identify if the fluid is pseudoplastic (thins) or dilatant (thickens) before using a constant [[mu]] in calculations.\r
**mini-example**: A mixture of cornstarch with water behaves like a liquid if moved slowly, but acts like a brittle solid upon sudden impact, violating Newton's linearity.\r
\r
## Mathematical errors\r
\r
### Error 4: Mixing dynamic and kinematic viscosity in formulas\r
**why it seems correct**: In many technical manuals both terms are called simply "viscosity", which leads to error.\r
**why it is incorrect**: Dynamic [[mu]] measures resistance to deformation (Force), while kinematic [[nu]] measures the diffusion of momentum (Motion). They have incompatible dimensions.\r
**detection signal**: Dimensional inconsistency (getting Newtons when meters should be obtained) when solving the Reynolds Number or drag force.\r
**conceptual correction**: Always remember the relationship\r
\r
{{f:nu_mu}}\r
\r
. Never substitute one for another without applying the density factor [[rho]].\r
**mini-example**: If you use [[nu]] instead of [[mu]] to calculate the stress on a water bearing, the error will be by a factor of 1000 (the density of water).\r
\r
## Interpretation errors\r
\r
### Error 5: Forgetting the radical effect of temperature\r
**why it seems correct**: Treating viscosity as a fixed tabulated constant of the material, similar to the gravitational constant.\r
**why it is incorrect**: Viscosity is extraordinarily sensitive to heat. In liquids, an increase of a few degrees can cut viscosity in half.\r
**detection signal**: Massive discrepancies between theoretical calculations and the actual behavior of running machinery.\r
**conceptual correction**: In liquids, heat increases intermolecular distance (lowers [[mu]]); in gases, it increases collisions (raises [[mu]]).\r
**mini-example**: A cold-started car engine suffers more wear because the oil is too viscous to flow through narrow passages to the parts until it warms up.\r
\r
## Quick self-control rule\r
Before handing in a viscosity calculation, check these three points:\r
1.  **Dimensional consistency**: Are my dynamic viscosity units in Pa·s (or kg/(m·s))? If I have centipoise (cP), have I multiplied by $10^{-3}$?\r
2.  **Physical sense of force**: Does the force I have calculated oppose motion? If the result suggests that the fluid "helps" the object move, there is a sign error in the velocity gradient [[dudy]].\r
3.  **Regime check**: Have I verified that the flow is laminar? If the Reynolds number is very high, my calculation based on molecular viscosity will be a gross underestimation of actual resistance.`;export{e as default};
