const e=`\uFEFF# Common Errors in Archimedes' Principle\r
\r
## Conceptual errors\r
\r
### Error 1: Believing that buoyancy depends on depth\r
#### Why it seems correct\r
Since hydrostatic pressure increases linearly with depth, it is intuitive and common for students to assume that buoyancy, being a force originated by the fluid, must also increase as a body is submerged deeper. It is mistakenly visualized that "more water on top" or "greater depth" implies a more powerful buoyant force.\r
\r
#### Why it is incorrect\r
Analytically, Archimedes' buoyancy depends exclusively on the pressure difference between the bottom and top face of a body. Although both pressures increase with depth, their **difference** remains constant if the fluid is incompressible and the displaced volume [[V_des]] does not vary. Once the object is totally submerged, the buoyancy does not change regardless of whether it is 1text{ meter} or 100text{ meters} below the surface.\r
\r
#### Detection signal\r
You will detect this error when students attempt to include the depth variable h within Archimedes' formula, or when they claim that a submarine experiences a greater upward force the further it descends into a trench.\r
\r
#### Conceptual correction\r
You must remember that buoyancy is equal to the **weight of the displaced fluid volume**. As long as the submerged volume [[V_des]] is the same, the weight of the water pushed aside will be the same, and therefore the buoyant force [[E]] will be constant.\r
\r
#### Mini-example\r
- ❌ **Incorrect**: A steel ball at a depth of 50text{ m} feels more buoyancy than at 5text{ m}.\r
- ✅ **Correct**: In both cases, if the ball is not compressed, the buoyancy [[E]] is identical because it displaces the same volume of fluid.\r
\r
## Model errors\r
\r
### Error 2: Confusing total volume with submerged volume\r
#### Why it seems correct\r
Many problem statements provide the total dimensions of an object (for example, the total volume of a ship or a buoy). By technical inertia, students tend to plug the total volume directly into the buoyancy formula.\r
\r
#### Why it is incorrect\r
Archimedes' Principle is explicit: buoyancy is only proportional to the volume of the fluid that has been **displaced** (pushed aside). For a body that partially floats, the volume that remains above the surface does not contribute at all to generating the buoyant force. Using the total volume massively overestimates buoyancy and leads to physically impossible flotation results.\r
\r
#### Detection signal\r
It occurs when the buoyancy calculation for a floating object (assumed in equilibrium) turns out to be much greater than its own real weight [[W]].\r
\r
#### Conceptual correction\r
One must always distinguish between the total geometric volume of the object and the submerged volume [[V_des]]. In flotation problems, [[V_des]] is the unknown that allows the system to balance with the real weight.\r
\r
#### Mini-example\r
- ❌ **Incorrect**: The buoyancy on a 1000text{ m}^3 ship is rho cdot g cdot 1000 even if it is floating.\r
- ✅ **Correct**: The buoyancy is rho cdot g cdot V_{hull_underwater}, where V_{hull_underwater} is only a fraction of the total.\r
\r
## Mathematical errors\r
\r
### Error 3: Wrong use of densities (Body vs Fluid)\r
#### Why it seems correct\r
The buoyancy formula involves a density. Since two materials are interacting (the object and the liquid), it is very common to mistakenly choose the density of the submerged solid, as it is the visual protagonist of the problem.\r
\r
#### Why it is incorrect\r
Buoyancy is a force exerted **by the fluid**. Therefore, the magnitude of the force depends on how much the fluid that is no longer in that space "weighs". The density that defines buoyancy is strictly the fluid density [[rho_f]]. The density of the solid only serves to calculate the body's real weight [[W]], but it does not influence the magnitude of the hydrostatic buoyancy per se.\r
\r
#### Detection signal\r
Detected when attempting to calculate the buoyancy on a lead sphere in water, using the density of lead (11300text{ kg/m}^3) instead of that of water (1000text{ kg/m}^3).\r
\r
#### Conceptual correction\r
Follow this rule: buoyancy is an "external" force that comes from the medium. Always use [[rho_f]] for Archimedes' formula. Use the object's density only to determine its mass or own weight.\r
\r
#### Mini-example\r
- ❌ **Incorrect**: using iron density to compute buoyancy for an iron ball in oil.\r
- ✅ **Correct**: using oil density to compute buoyancy. The oil is what pushes.\r
\r
## Interpretation errors\r
\r
### Error 4: Thinking that buoyancy only occurs in liquids\r
#### Why it seems correct\r
Most classic examples involve water, ships, and swimming pools. This generates a cognitive bias where Archimedes is associated solely with the liquid phase of matter.\r
\r
#### Why it is incorrect\r
Archimedes' Principle is a principle of **fluid mechanics**, and air is a fluid. Any object in the Earth's atmosphere experiences an upward Archimedes buoyancy. We usually ignore it because the density of air is very low, but it is the fundamental force that allows hot air balloons and zeppelins to rise.\r
\r
#### Detection signal\r
It manifests when the student claims that a helium balloon rises because helium "has no weight" or "has negative weight", forgetting that helium rises because the surrounding air pushes it up.\r
\r
#### Conceptual correction\r
Buoyancy exists in gases and liquids. Whenever there is a pressure gradient and a non-zero fluid density [[rho_f]], there will be Archimedes buoyancy.\r
\r
#### Mini-example\r
- ❌ **Incorrect**: A helium balloon rises because helium is anti-gravitational.\r
- ✅ **Correct**: It rises because the air's buoyancy ([[rho_f]]) on the balloon's volume is greater than the total weight of the helium and the fabric.\r
\r
## Quick self-control rule\r
Before concluding your exercise, verify these three critical points:\r
1.  **Consistency of Units**: Are your densities in kg/m^3 and your volumes in m^3? (Avoid g/cm^3 and liters in the final calculation).\r
2.  **Density Identity**: Have I used the fluid density for [[E]] and the body density for [[W]]?\r
3.  **Flotation Realism**: If the body floats, the calculated buoyancy cannot be greater than the total weight (if it is, you have used the total volume instead of the submerged volume).\r
\r
`;export{e as default};
