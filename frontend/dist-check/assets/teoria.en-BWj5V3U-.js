const e=`# Theory of Laminar Flow\r
\r
## Conceptual context\r
**Laminar flow** represents the most ordered and predictable state of motion a fluid can adopt. In this regime, fluid particles move along well-defined parallel trajectories, known as streamlines, which slide over each other as if they were independent sheets or layers (hence its name). There is no macroscopic mass exchange between these layers, meaning that the transport of any property (such as temperature or dye concentration) occurs primarily through molecular diffusion rather than chaotic mixing.\r
\r
This phenomenon is characteristic of situations where viscous forces —acting as an internal glue that dissipates energy and smooths motion— dominate over inertial forces, which tend to destabilize the flow. We find it naturally in small-diameter ducts (capillaries), in high-viscosity fluids (such as heavy oils or honey), or in movements at extremely low speeds. It is the fundamental pillar of microfluidics, industrial lubrication, and the hemodynamics of small blood vessels.\r
\r
---\r
\r
## 🟢 Essential level\r
### Phenomenology and Basic Concepts\r
From an intuitive perspective, laminar flow is the "quiet" and "smooth" movement of a liquid or gas. Imagine injecting a thread of dye into a glass pipe where water flows very slowly: in the laminar regime, the dye will form a straight and perfectly defined thread that will cross the entire pipe without dispersing. This experiment, originally performed by Osborne Reynolds, demonstrates that fluid particles do not jump from one layer to another, but maintain their relative position with respect to the duct's axis.\r
\r
The key to this order is **viscosity**. Dynamic viscosity [[eta]] is the fluid's resistance to being deformed. In laminar flow, this resistance is so high that any small perturbation or swirl trying to form is "strangled" almost instantaneously by internal friction. It is as if the fluid were a stack of sliding rugs: the one in contact with the ground (the pipe wall) does not move, and the upper ones gain speed as we move away from the restriction.\r
\r
This progressive "braking" generates what we call a **velocity profile**. Fluid stuck to the walls has zero velocity (no-slip condition), while fluid in the center moves with maximum speed. This velocity difference between layers generates a shear stress that is proportional to the fluid's viscosity, thus defining the behavior of Newtonian fluids.\r
\r
---\r
\r
## 🔵 Formal level\r
### Mathematical Laws and Relationships\r
To quantify laminar flow, the most important parameter is the **Reynolds Number ([[Re]])**. This dimensionless number relates fluid inertia to viscosity. In a circular pipe, it compares the tendency of the flow to keep moving by inertia with the tendency of [[eta]] to damp velocity differences between layers.
\r
In engineering practice, flow is accepted as strictly laminar if [[Re]] < 2300. Below this value, viscous forces are sufficient to maintain the flow's structural order against any external perturbation.\r
\r
#### Poiseuille's Law\r
The fundamental relationship governing the volumetric flow rate [[Q]] in a long, straight circular duct is the Hagen-Poiseuille Law. This law states that the flow rate is directly proportional to the pressure drop [[deltaP]] and the fourth power of the radius [[R]], and inversely proportional to the viscosity [[eta]] and the length [[L]]:\r
{{f:poiseuille}}\r
\r
It is crucial to notice the dependence on [[R]] elevado a la cuarta potencia. This means that if we reduce the radius of a pipe by half, we will need 16 times more pressure to maintain the same flow rate. This is why small obstructions in our arteries have such a severe impact on blood pressure.

The maximum axial velocity at the centreline is obtained from the associated viscous balance:
{{f:v_max_def}}
\r
#### Parabolic Velocity Profile\r
Mathematically, it can be demonstrated from the Navier-Stokes equations that the velocity distribution as a function of the distance from the center [[r]] follows a parabola:\r
{{f:perfil_velocidad}}\r
\r
Where the maximum velocity [[v_max]] occurs at the axis ([[r]] = 0) and is exactly twice the average flow velocity. This parabolic shape is the geometric signature of developed laminar flow.\r
\r
---\r
\r
## 🔴 Structural level\r
### Deep Physics and Hydrodynamic Stability\r
At a structural level, laminar flow is a dynamic equilibrium solution of the fluid governing equations. It represents a state where energy dissipation occurs laminarly, that is, through molecule-by-molecule friction layer by layer. In terms of stability physics, we say that laminar flow is a "damped" system: if we introduce a small swirl (perturbation), viscous forces perform negative work on it, extracting its kinetic energy and converting it into heat before it can transfer that energy to larger scales.\r
\r
However, this stability has limits. As speed increases and the Reynolds number grows, the fluid's inertia becomes so large that viscous forces can no longer dissipate perturbations quickly enough. At that point, the flow enters a transition zone and finally becomes turbulent. What is fascinating about the laminar regime is that it is almost blind to pipe-wall roughness, unlike turbulent flow. Since the fluid moves smoothly, a viscous near-wall layer shields the moving core from material irregularities, so the friction factor depends only on [[Re]].
\r
Another key structural concept is the **entrance length**. When a fluid enters a pipe from a reservoir, its initial velocity profile is usually uniform (all particles move at the same speed). As it advances, friction with the walls progressively "brakes" the outer layers and accelerates the central ones to conserve mass. The distance required for the profile to become purely parabolic is called the laminar entrance length and depends linearly on the Reynolds Number, and can be considerable in low-viscosity fluids.\r
\r
---\r
\r
## Deep physical interpretation\r
Laminar flow is the macroscopic manifestation of **momentum diffusion**. We can imagine that molecules in a fast layer collide with those in an adjacent slow layer, transferring part of their momentum. This process is ordered and statistically predictable. In this regime, the fluid behaves as a low-entropy system compared to turbulence; energy is spent almost exclusively in overcoming viscous resistance in the direction of motion, without deviating into chaotic lateral movements.\r
\r
From a thermodynamic point of view, laminar flow minimizes entropy generation for given boundary conditions. It is the most efficient way for the fluid to transport itself when spatial restrictions or internal resistance are high. In nature, this regime allows for nutrient transport in plants and animals with minimum energy expenditure and a delivery precision that would be impossible to reach through turbulent processes, which are intrinsically random.\r
\r
---\r
\r
## Order of magnitude\r
To understand the scale of laminar flow, consider the following examples:\r
- **Biological systems**: Blood flow in human capillaries has a Reynolds number on the order of 0.001. In these vessels, viscosity is so dominant that the flow is purely laminar, and cells must "slide" in single file.\r
- **Geophysics**: The movement of magma in the Earth's mantle or water filtering through a sandy aquifer. Here speeds are centimeters per year, ensuring an absolute laminar regime despite the large dimensions.\r
- **Engineering**: In polymer injection for manufacturing plastic parts, the material is so viscous that it flows laminarly even at high pressures, allowing the mold to fill uniformly without trapping air bubbles.\r
\r
---\r
\r
## Personalized resolution method\r
To approach laminar flow problems in a shielded manner, follow these steps:\r
1.  **Regime Diagnosis**: Before applying any formula, calculate the Reynolds Number [[Re]]. If [[Re]] < 2300, you can use the laws of this leaf with full confidence.
2.  **Resistance Calculation**: Determine the dynamic viscosity [[eta]]. If kinematic viscosity is provided instead, convert it to dynamic viscosity by multiplying it by the fluid density.
3.  **Poiseuille's Application**: Use the law to find the flow rate [[Q]] or the pressure drop [[deltaP]]. Take special care with the radius [[R]]: ensure you do not use the diameter by mistake, as the power of 4 will magnify any error.\r
4.  **Profile Analysis**: If you need the velocity at a specific point, use the parabolic profile. Always remember that the maximum velocity in the centre is twice the average velocity.
5.  **Energy Losses**: Calculate head loss with the corresponding energy model and the laminar friction factor. You will verify that in this regime, the loss is proportional to velocity, not to velocity squared.
\r
---\r
\r
## Special cases and extended example\r
### Microfluidics: Lab-on-a-Chip\r
In microfluidic devices, channels have dimensions of micrometers. At this scale, almost all flows are laminar. A fascinating case is **laminar mixing**: since there is no turbulence to mix two fluids, if we introduce two different liquids into a channel, they will travel side by side for a considerable distance without mixing, except for the slow molecular diffusion at their interface. This is exploited in biotechnology to create ultra-precise concentration gradients for cellular studies.\r
\r
### Hydrodynamic Lubrication\r
In internal combustion engine bearings, a thin oil film separates moving metal parts. This oil flows in a laminar regime. Poiseuille's Law explains why it is critical to maintain oil pressure: if the pressure drops or viscosity decreases too much due to heat, the flow rate will not be enough to keep the parts separate, causing catastrophic metal-to-metal contact.\r
\r
---\r
\r
## Real student questions\r
- **Why doesn't pipe roughness affect laminar flow?** In laminar flow, the fluid moves so smoothly that the particles stuck to the wall form a static layer that "fills" the roughness valleys. The fluid that moves does so over this static fluid layer, so it never "feels" whether the wall is smooth plastic or rusty iron.\r
- **What happens if the pipe is not circular?** The basic laws still apply, but the numerical factor of Poiseuille's Law changes. For example, in a square or rectangular channel, the velocity profile is more complex than a simple parabola, and the "hydraulic diameter" concept is used to adapt the formulas.\r
- **Is laminar flow reversible?** Yes, in very low Reynolds conditions (Stokes flow), the flow is kinematically reversible. If you "undo" the movement mechanically, the particles return to their original positions, an amazing phenomenon that does not occur in turbulent chaos.\r
\r
---\r
\r
## Cross-cutting connections and study paths\r
- **Thermodynamics**: Laminar flow is a system of low heat generation by friction compared to turbulence.\r
- **Vector Calculus**: The parabolic profile is a classic example of applying the Laplacian operator in cylindrical coordinates.\r
- **Medicine**: Poiseuille's Law is the basis for understanding peripheral vascular resistance and diseases such as hypertension.\r
- **Chemical Engineering**: The design of tubular reactors where a controlled residence time is required for each fluid particle.\r
\r
---\r
\r
## Final synthesis\r
Laminar flow is the elegant, geometric, and predictable face of fluid mechanics. It teaches us that order is not just a mathematical simplification, but a real physical state where viscosity dominates over chaos. Mastering the laminar regime is essential not only for designing efficient pipes but for appreciating how nature uses friction to control life's transport at microscopic scales.
`;export{e as default};
