const e=`# Bernoulli's Equation\r
\r
## Conceptual context\r
**Bernoulli's Equation** is the fundamental expression of mechanical energy conservation in fluid flow. It establishes a mathematical relationship between pressure, velocity, and elevation of a moving fluid along a streamline. It represents an energy balance where the sum of pressure energy, kinetic energy, and potential energy remains constant for an ideal fluid. This law is the cornerstone of aerodynamics and hydraulics, allowing us to explain phenomena such as aircraft wing lift, the operation of atomizers, and flow measurement in pipes.\r
\r
From a historical perspective, it was published by Daniel Bernoulli in his work *Hydrodynamica* in 1738. Although Bernoulli was the one who originally proposed it, it was Leonhard Euler who derived the equation in its current familiar form using Newton's laws. The beauty of this equation lies in its simplicity: despite the intrinsic complexity of fluids, under certain ideal conditions, the system's behavior can be described through a balance of constant sums. Understanding Bernoulli means moving from fluid statics (where only depth matters) to dynamics, where motion radically alters the perception of pressure.\r
\r
## 🟢 Essential level\r
Intuitively, Bernoulli's principle tells us that there is an exchange between a fluid's velocity and its pressure. It's not that the fluid "creates" energy, but rather transforms it from one form to another.\r
-   **Golden Rule**: Where the fluid moves faster, the pressure is lower; and where it moves slower, the pressure is higher. This concept is counter-intuitive for many, as we tend to think that a "fast" flow should "push more," but in reality, it pushes less against the side walls because gran part of its energy has been invested in longitudinal displacement.\r
-   **Energy Exchange**: The fluid has a fixed total amount of energy. If the fluid gains speed (kinetic energy) when passing through a narrowing in a pipe, that extra energy must come from somewhere: it comes from the pressure. By "spending" pressure energy to gain velocity, the measured pressure decreases.\r
-   **Three Forms of Energy**:\r
    1.  **Pressure**: The force pushing the fluid, similar to a compressed spring.\r
    2.  **Velocity**: The energy due to the massive movement of particles.\r
    3.  **Height (Elevation)**: The energy from being in an elevated position relative to gravity.\r
\r
Key concepts for beginners:\r
1.  **Streamline**: It's like an invisible "lane" along which a fluid particle travels without mixing with those in neighboring lanes.\r
2.  **Venturi Effect**: It's the most famous practical application. By reducing a tube's diameter, the fluid is forced to accelerate so that the same amount of mass passes per second, and this acceleration causes a pressure drop that can be used to suck in other fluids.\r
3.  **Stagnation Pressure**: If you put your finger on a hose's outlet, you stop the water. The water's kinetic energy stops and is converted back into pressure.\r
\r
## 🔵 Formal level\r
For an incompressible fluid of density [[rho]] flowing between two points on a streamline, Bernoulli's equation is expressed as a sum of energy terms per unit volume. If pressure [[p]], velocity [[v]], and elevation [[z]] are compared at both points, the same energy balance holds:\r
\r
{{f:head}}\r
\r
Where each term has units of pressure (Pascals, Pa) and represents:\r
-   [[p]]: **Static Pressure**. This is the pressure an observer moving with the fluid would measure. It represents the work done by pressure forces.\r
-   Dynamic pressure: represents the fluid's kinetic energy per unit volume and depends on velocity and density [[rho]].\r
\r
{{f:q_dinamica}}\r
\r
In the field of civil and hydraulic engineering, it is extremely common to work with the concept of **Hydraulic Head**. To do this, we divide the entire previous equation by the fluid specific weight, defined as gamma equal to [[rho]] times [[g]].\r
\r
In this form, each term is measured in **meters (m)**:\r
-   **Pressure Head**: The height to which liquid would rise in an open vertical tube (piezometer).\r
-   **Velocity Head**: The equivalent height associated with fluid motion.\r
-   **Elevation Head**: Geometric position.\r
-   **Energy Line (H)**: The total sum.\r
\r
## 🔴 Structural level\r
The rigorous derivation of Bernoulli's equation is based on the integration of **Euler's Equations** for fluid motion. If we apply Newton's second law to a small fluid particle traveling along a streamline, we find that the change in total energy equals the work of external forces.\r
\r
Bernoulli's validity is subject to four restrictive hypotheses that define an **ideal fluid**:\r
1.  **Inviscid Fluid**: Viscosity is neglected. There is no "friction" between fluid layers or with the walls. In real fluids, this approximation fails and requires corrections.\r
2.  **Steady Flow**: Fluid properties at any point in space do not change over time. The flow pattern is constant.\r
3.  **Incompressible Flow**: Density [[rho]] is constant throughout the flow field. This is an excellent approximation for liquids and for low-speed gases.\r
4.  **Irrotational Flow**: If the flow has no "vorticity" (particles do not rotate about themselves), the Bernoulli constant is the same for all the fluid.\r
\r
### The Real World: Head Losses and Power\r
In reality, viscosity causes a degradation of mechanical energy into thermal energy (heat). To model this, we introduce an energy-loss term called hL.\r
\r
Additionally, if the system includes a **pump** or a **turbine**, the equation becomes a general energy balance with added and extracted head terms.\r
\r
## Deep physical interpretation\r
Bernoulli reveals that pressure is not just a "force," but a reservoir of potential energy. When a fluid accelerates, it's not a spontaneous process; it's the result of a pressure gradient. The fluid moves from high-pressure zones to low-pressure zones, "falling" down a pressure slope and gaining velocity in the process. It's the same logic as a ball rolling down a hill: it exchanges height (potential) for speed (kinetic). In Bernoulli, "height" is the static pressure.\r
\r
Physically, static pressure is the manifestation of **molecular chaos**. Molecules collide randomly in all directions. When the fluid flows orderly at high speed, part of that molecular kinetic energy aligns in the flow direction. There is less lateral "push" because molecules are busy moving forward. Therefore, a pressure gauge perpendicular to the flow will register a lower reading.\r
\r
## Order of magnitude and Applications\r
-   **Aerodynamic Lift**: An aircraft wing is designed so that air travels faster over the top (curved) than the bottom. This creates a partial vacuum above and overpressure below. For a commercial airliner, this small pressure difference multiplied by the wing's hundreds of square meters generates the 200 tons of force needed to overcome gravity.\r
-   **Weather Phenomena**: In a hurricane, wind speed is extreme. According to Bernoulli, this lowers atmospheric pressure over roofs. If windows are closed, the pressure inside the house is much higher than outside, and the house literally "explodes" outward.\r
-   **Obstructed Artery**: If an artery narrows (stenosis), blood must accelerate to pass through. Pressure drops at the narrowing. If the drop is sufficient, external pressure can collapse the artery, which is a dangerous paradox of the human body.\r
\r
## Personalized resolution method\r
To successfully solve any Bernoulli problem, follow this protocol:\r
1.  **Sketch and Choose Points**: Select point 1 (where you know almost everything) and point 2 (where your unknown is). The best points are tank surfaces, free-jet outlets, or pipe centers.\r
2.  **Establish Reference Level (Datum)**: Choose the lowest point in the system as the zero elevation reference. This eliminates negative terms and simplifies the algebra.\r
3.  **Identify Simplifications**:\r
    -   **Large Reservoir Surface**: If the area is huge, the level's drop velocity is negligible.\r
    -   **Atmospheric Outlet**: Gauge pressure in a free jet is zero.\r
    -   **Same Diameter**: If the pipe section doesn't change between 1 and 2, kinetic energy terms cancel out.\r
4.  **Combine with Continuity**: If you need velocities and only have diameters, use the continuity equation to relate area and velocity.\r
5.  **Solve Algebraically**: Write the full equation before simplifying.\r
\r
## Special cases and extended example\r
**Torricelli's Theorem**: Consider a giant tank with a small hole at depth h.\r
Point 1 (surface): atmospheric pressure, negligible velocity, and elevation h.\r
Point 2 (outlet): atmospheric pressure and zero reference elevation.\r
\r
The ideal solution gives an exit velocity proportional to the square root of two times gravity and depth.\r
This result is fascinating: the fluid exits with the same velocity as a stone falling from the surface height.\r
\r
## Real student questions\r
-   **Why do shower curtains pull inward when I turn on the water?** Because the water and the accompanying air move fast, lowering the pressure inside the shower relative to the outside. The bathroom's higher pressure pushes the curtain into the flow.\r
-   **Does Bernoulli work with gases?** Yes, as long as they don't move near the speed of sound. At low speeds, air behaves like an incompressible fluid.\r
-   **What is the stagnation pressure?** It is the pressure measured when forcing the fluid to slow down to zero velocity. All kinetic energy turns into pressure.\r
\r
## Cross-cutting connections and study paths\r
-   **Gas Dynamics**: Bernoulli's equation is modified for compressible flows through isentropic relations.\r
-   **Fluid Engineering**: The design of ship hulls and propellers depends on avoiding pressure drops so low that water boils at room temperature (cavitation).\r
-   **Biophysics**: The human circulatory system and airflow in the lungs follow laws derived from Bernoulli, though with strong influences from viscosity.\r
\r
## Final Synthesis\r
Bernoulli's Equation connects pressure, velocity, and height. It is the core tool for fluid dynamics, essential for everything from plumbing to aircraft design.`;export{e as default};
