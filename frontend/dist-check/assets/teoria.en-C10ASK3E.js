const e=`\uFEFF# Collisions in two dimensions\r
\r
## Conceptual context\r
\r
Collisions in the plane are encounters where motion unfolds with total freedom. By not occurring in a single line, nature forces us to look at space as a stage of multiple directions that must be synchronized. Understanding this phenomenon is fundamental to understanding everything from travel safety to the behavior of pieces in a board game or bodies in space.\r
\r
## 🟢 Essential level\r
\r
The essential idea is not to solve many equations, but to read the collision as an exchange of motion in the plane. When two bodies collide, it is not enough to say "they go forward" or "they go back": after impact they can be deflected, with part of the motion in horizontal and part in vertical.\r
\r
That means the collision must be read by directions. The part of the motion associated with the horizontal axis is organized with its own conservation, and the part associated with the vertical axis does the same. If a ball hits another obliquely, part of the initial motion can appear as forward motion, another as lateral deflection, and another as a change in direction of the second body.\r
\r
What is important at this level is to recognize two facts. First, the masses [[m1]] and [[m2]] indicate how much it "costs" to change the motion. Second, the velocities before and after the collision [[v1i]] [[v1f]] must be compared by directions, not just by total speed. That separation between directions organizes the entire topic.\r
\r
If the system is isolated during impact, the total motion of the set does not disappear or originate from nowhere: it is redistributed between the bodies and between the directions of the plane. That is the intuition that must be clear before moving on to calculation.\r
\r
> [!IMPORTANT]\r
> In a 2D collision, "a velocity" is not conserved, but the system's momentum separated by directions.\r
\r
## 🔵 Formal level\r
\r
### Momentum conservation in two dimensions\r
\r
Before writing equations, it is important to remember that the collision analysis is based on physical quantities such as masses [[m1]] [[m2]] and initial velocities [[v1i]] [[v2i]]. These quantities determine how linear momentum is distributed between the bodies during the impact.\r
\r
In two dimensions, these quantities must be analyzed taking into account that motion can be decomposed into independent directions.\r
\r
In order to apply these laws in the plane, it is necessary to decompose the velocities into components on each independent axis.\r
\r
The fundamental law is the vector balance [[vec]] of linear momentum:\r
\r
{{f:vec}}\r
\r
In two dimensions, this equation decomposes into two independent equations:\r
\r
1. **X axis**: The horizontal balance [[x]] is set up as:\r
\r
\r
2. **Y axis**: The vertical balance [[y]] is set up as:\r
\r
\r
These equations show that each component of momentum is conserved independently.\r
\r
### Velocity components and projections\r
\r
To solve the system, it is essential to project the initial and final velocities [[v1i]] [[v2i]] [[v1f]] [[v2f]] onto the chosen axes:\r
\r
{{f:v2ix}}\r
{{f:v2iy}}\r
\r
After the impact, the final components [[v1fx]] [[v1fy]] [[v2fx]] [[v2fy]] are obtained by solving the balance:\r
\r
{{f:v1fx}}\r
{{f:v1fy}}\r
{{f:v2fx}}\r
{{f:v2fy}}\r
\r
### The role of energy\r
\r
If the collision is elastic, the total kinetic energy of the system is also conserved:\r
\r
\r
For inelastic cases, we calculate the energy balance [[energy_loss]] using the initial kinetic energy [[Ki]] and final energy [[Kf]] of the complete system:\r
\r
{{f:ki_system}}\r
\r
{{f:kf_system}}\r
\r
The net energy variation [[DeltaK]] indicates the loss due to dissipation:\r
\r
{{f:energy_loss}}\r
\r
### Special case: The signature of the right angle\r
\r
There is a case of supreme elegance: when two identical masses collide elastically and one of them was initially still. Due to the combination of the conservation laws (which form a system equivalent to the Pythagorean theorem), the final velocities always turn out to be perpendicular to each other. If you see two discs separating forming a perfect square, you are witnessing the purity of elastic conservation in action.\r
\r
{{f:v1ix}}\r
\r
{{f:v1iy}}\r
\r
{{f:x}}\r
\r
{{f:y}}\r
\r
{{f:x_solve_v1fx}}\r
\r
{{f:y_solve_v1fy}}\r
\r
{{f:magnitude_v1f}}\r
\r
{{f:angle_theta1f}}\r
\r
{{f:K}}\r
\r
## 🔴 Structural level\r
\r
### Geometry of the impact: The impact parameter\r
\r
At a deeper level, what determines "where" the objects are shot is the **impact parameter**. It is the perpendicular distance between the projectile's trajectory and the center of the target.\r
\r
- If the parameter is zero, the collision is head-on (one-dimensional).\r
- If the parameter is equal to the sum of the radii, the objects barely touch.\r
\r
The relationship between this parameter and the deflection angle allows reconstructing the geometry of the collision and is the basis of experimental techniques that investigate non-directly observable internal structures.\r
\r
---\r
\r
### Model domain of validity\r
\r
The 2D collision model based on linear momentum conservation is valid under the following conditions:\r
\r
- Bodies can be approximated as point particles or rigid spheres.\r
- The duration of the collision is very short, so external forces can be neglected.\r
- There is no significant transfer to internal degrees (deformations, heat).\r
- The system can be described by linear momentum without needing to include rotational effects.\r
\r
Under these hypotheses, the analysis by axis decomposition and momentum conservation is sufficient to describe the result of the collision.\r
\r
---\r
\r
### Model failure signals\r
\r
The ideal model stops being valid when effects appear that are not included in the previous hypotheses:\r
\r
1. **Rotation effects (Spin)**  \r
   Bodies can exchange angular momentum during the collision. Part of the energy is transferred to rotation, which modifies the final velocities relative to the purely translational model.\r
\r
2. **Tangential friction**  \r
   If there is friction on the contact surface, a perpendicular impulse exchange appears. This breaks the ideal independence between components and alters the trajectories.\r
\r
3. **Non-negligible deformations**  \r
   If the bodies deform significantly, the rigid sphere model stops being valid and the interaction can no longer be described only with momentum conservation.\r
\r
4. **Relativistic and quantum limits**  \r
   At high velocities, effective mass stops being constant and the use of four-momentum is required. At microscopic scales, the classical collision concept is replaced by field interactions and probabilities.\r
\r
---\r
\r
### Scattering theory\r
\r
This type of analysis is the basis of modern experimental physics. In scattering experiments, the interaction is not directly observed, but its effects on the exit angles.\r
\r
The statistical distribution of these angles (cross section) allows inferring internal properties of systems, such as the structure of the atomic nucleus or the existence of new particles.\r
\r
## Deep physical interpretation\r
\r
The 2D collision is the bridge between scalar and vector mechanics. It forces us to accept that the universe not only conserves the "quantity" of motion, but also its "directional identity". Each dimension of Euclidean space is an independent information channel. A collision is not just an exchange of energy; it is a process of vector information redistribution where the symmetry of space dictates the final result.\r
\r
## Order of magnitude\r
\r
*   **Pile-up**: In a traffic accident where one car hits another from the side, the debris exit angle allows investigators to calculate the exact speed each vehicle was traveling at before impact.\r
*   **Astrophysics**: Collisions between dust particles in protoplanetary disks determine whether these aggregate to form planets or break into smaller pieces, a process that depends entirely on the impact angles.\r
*   **Sports**: In curling, players throw stones that must collide with millimetric precision. A one-millimeter error in the impact parameter can deflect the target stone several meters out of its place.\r
\r
## Personalized resolution method\r
\r
1.  **Draw the vector diagram**: Before writing numbers, visualize the initial [[theta1i]] [[theta2i]] and final [[theta1f]] [[theta2f]] directions.\r
2.  **Define your axes**: Usually, aligning the X axis with one of the initial velocities greatly simplifies the equations by making one component zero.\r
3.  **Decompose everything**: Use polar projections to find the initial components:\r
4.  **Write the two balances**: Set up conservation in each of the Cartesian axes:\r
\r
\r
5.  **Solve the system**: Usually requires algebra to isolate variables such as [[v1fx]] or [[v1fy]]:\r
6.  **Reconstruct the vector**: Combine components to obtain the final magnitude and angle:\r
7.  **Common sense check**: Is the final energy [[Kf]] less than or equal to the initial [[Ki]]?\r
\r
## Special cases and extended example\r
\r
**The Perfect Rugby Tackle.** Imagine a 100 kg player running North at 8 m/s and being intercepted by a 90 kg defender coming from the East at 9 m/s. If the collision is totally inelastic (they stick together), the resulting system will have a mass of 190 kg. The Northward momentum was 800 units and Westward momentum 810 units. The resulting block will move almost exactly Northwest (45.3°) at a speed of about 6 m/s. This example shows how two directions of motion "merge" into a single diagonal trajectory that scrupulously respects both original momentum counters.\r
\r
## Real student questions\r
\r
*   **Why can't I use a single total momentum equation?** Because momentum is a vector. A single equation would only give you the magnitude, but you would lose directional information, which is vital to know where the objects are moving.\r
*   **What if the objects are not round?** The problem becomes much more complicated because angular momentum (rotation) would come into play. If a long bar hits sideways, it will start to spin, and part of the collision energy will be "spent" on that spin.\r
*   **Does gravity affect the collision?** During the very brief instant of impact, the contact forces are so immense that gravity is negligible. We only consider gravity for the trajectories before and after the collision.\r
\r
## Cross-cutting connections and study paths\r
\r
*   **Base**: [The concept of vector](leaf:matematicas/vectors/introduction).\r
*   **Prerequisite**: [Momentum conservation in one dimension](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).\r
*   **Advanced**: [The center of mass frame in collisions](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/marco-del-centro-de-masas-en-colisiones).\r
\r
## Final synthesis\r
\r
2D collisions represent the triumph of vector mechanics over linear intuition. By decomposing motion into independent components, we can predict complex trajectories using simple principles. The key to success lies in the precision of trigonometric decomposition and in the understanding that, although energy is lost as heat or deformation, the vector identity of momentum remains an immovable law that dictates the fate of every particle in the plane.\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`;export{e as default};
