const e=`# Venturi Effect\r
\r
## Conceptual context\r
\r
The Venturi effect describes a fundamental phenomenon of fluid dynamics: the decrease in static pressure of an incompressible fluid when its velocity increases as it passes through a constricted section of a pipe. This behavior is not an isolated curiosity, but a direct consequence of two universal principles: the conservation of mass (continuity) and the conservation of mechanical energy (Bernoulli's equation).\r
\r
When studying the Venturi effect, the focus shifts from the simple geometry of the tube to the energetic balance of the flow. The central question is not just how much the pressure drops, but how the system reorganizes its energy to allow the same amount of matter to cross a smaller area in the same time. Understanding this framework allows for the recognition of applications ranging from carburetors and atomizers to the measurement of flow rates in large industrial pipes or the interpretation of hemodynamic pathologies.\r
\r
## 🟢 Essential level\r
\r
The intuitive idea of the Venturi effect often clashes with the preconceived notion that "more speed implies more force and therefore more pressure." The physical reality is the opposite: for the fluid to accelerate upon entering the constriction, there must be a force pushing it forward. This force can only come from the pressure behind the fluid being higher than the pressure in front of it.\r
\r
At this level, it is enough to identify three key pieces:\r
1.  **Constriction**: The passage area decreases.\r
2.  **Acceleration**: Since fluid cannot be "left over" or "missing," it must move faster in the narrow zone.\r
3.  **Pressure Drop**: This acceleration "consumes" static pressure. The fluid moves faster where the pressure is lower.\r
\r
A common everyday example is a garden hose: by putting your finger over the outlet, the water comes out at a higher speed because we have reduced the area. If we could measure the pressure right at the exit point, we would see that it is lower than inside the hose. The Venturi effect is the principle that allows a sprayer to "suck" liquid from a tank: air blows quickly over a tube, creates low pressure, and the liquid rises to balance that difference.\r
\r
## 🔵 Formal level\r
\r
The formal level translates these intuitions into the language of conservation. The mathematical description relies on two pillars that must be resolved simultaneously:\r
\r
**1. Conservation of Mass (Continuity):**\r
For an incompressible fluid (constant density [[rho]]), the volumetric flow rate is the same in any section of the pipe. If area [[A1]] is reduced to [[A2]], the velocity [[v1]] must increase to [[v2]]:\r
\r
{{f:continuity_venturi}}\r
\r
**2. Conservation of Energy (Bernoulli):**\r
For horizontal and frictionless flow (ideal fluid), the sum of static pressure and kinetic energy per unit volume is constant:\r
\r
{{f:bernoulli_venturi}}\r
\r
By combining both equations we obtain the pressure drop [[dp]] as a function of inlet velocity and geometry:\r
\r
{{f:dp_venturi}}\r
\r
This relationship shows that the pressure drop is proportional to the square of the velocity and increases drastically with area reduction. It is the operational basis for designing Venturi tubes intended to measure flow velocities by simply reading a difference in pressures [[p1]] and [[p2]].\r
\r
## 🔴 Structural level\r
\r
The validity of the Venturi model depends on maintaining the ideal fluid hypotheses. Structurally, the leaf assumes that the fluid is incompressible (its density does not change with pressure), which is an excellent approximation for liquids but requires caution in gases at high speeds (where the Mach number approaches 0.3).\r
\r
Furthermore, the model ignores viscosity. In a real pipe, part of the pressure is lost due to friction with the walls, meaning that the recovery of pressure after the constriction is never 100%. An efficient structural design (such as the Venturi tube with a smooth divergence cone) seeks to minimize turbulence and boundary layer separation so that the exchange between pressure and velocity is as reversible as possible. Without these boundary conditions, Bernoulli's formalism ceases to be predictive and becomes only an ideal bound.\r
\r
## Deep physical interpretation\r
\r
Mastering the Venturi effect means understanding pressure not as a "static force," but as a reservoir of energy. In the constriction, the fluid does not "gain" energy out of nowhere; it simply transforms it. The pressure drop is the energetic "payment" necessary to buy velocity.\r
\r
This deep reading allows for the explanation of paradoxical phenomena: why two ships sailing very close in parallel tend to attract each other (the water between them accelerates, the pressure drops, and the surrounding sea pushes them toward the center) or why a house's roof flies off in a hurricane (air runs fast over the roof, outside pressure drops, and the higher internal pressure lifts the structure). In all these cases, the narrowing of the streamlines dictates the balance of forces.\r
\r
## Order of magnitude\r
\r
To anticipate results in Venturi exercises, it is useful to handle typical scales:\r
*   **Velocities**: In domestic pipes, [[v1]] is usually between $0.5$ and $2$ m/s. If [[v2]] exceeds $10$-$15$ m/s, friction losses usually become dominant.\r
*   **Presiones**: For water ([[rho]] = $1000$ kg/m³), a velocity of $1$ m/s is equivalent to a dynamic pressure of about $500$ Pa ($0.005$ bar). If the velocity rises to $10$ m/s, the dynamic pressure jumps to $50,000$ Pa ($0.5$ bar).\r
*   **Densities**: The effect is much more pronounced in liquids than in gases at the same speed due to the enormous difference in density. Suctioning water with air requires very high air velocities to compensate for the low density of the gas.\r
\r
## Personalized resolution method\r
\r
To solve Venturi problems without getting lost in the algebra:\r
1.  **Identify states**: Clearly define point 1 (wide section) and point 2 (throat).\r
2.  **Calculate velocities**: Use the continuity equation to relate [[v1]] and [[v2]] based on diameters or areas.\r
3.  **Apply Bernoulli**: Set up the energy balance equation between the two points.\r
4.  **Solve for the unknown**: Usually the pressure drop or the inlet velocity.\r
5.  **Suction validation**: If [[p2]] turns out to be lower than atmospheric pressure, the system can function as an aspirator (water aspirator, carburetor).\r
\r
## Special cases and extended example\r
\r
**Cavitation**: If the constriction is too severe or the velocity is too high, the pressure [[p2]] can fall below the vapor pressure of the liquid. At that point, the liquid boils at room temperature, forming vapor bubbles that collapse violently upon regaining pressure, damaging the pipes. This is the real physical limit of many industrial designs.\r
\r
**Extended example**: A Venturi tube with diameters D1 = 10 cm and D2 = 5 cm carries water. If we measure a pressure difference [[dp]] of 15 kPa, what is the flow rate [[Q]]?\r
*   Area ratio: [[A1]]/[[A2]] = (D1/D2)² = 4.\r
*   By continuity ([[A1]]·[[v1]] = [[A2]]·[[v2]]): [[v2]] = 4·[[v1]].\r
*   Applying the pressure drop formula for [[dp]] with geometric factor 15: 15 000 = 0.5 · 1000 · 15 · [[v1]]² → [[v1]]² = 2 → [[v1]] ≈ 1.41 m/s.\r
*   [[Q]] = [[A1]] · [[v1]] ≈ π·(0.05)² · 1.41 ≈ 0.011 m³/s (11 liters per second).\r
\r
## Real student questions\r
\r
**Why doesn't the pressure increase if the fluid is going through a "tighter" space?**  \r
Because "tighter" in incompressible fluids doesn't mean more density, but more velocity. To gain that velocity, the fluid must lose pressure.\r
\r
**Can Venturi be used to lift liquids?**  \r
Yes, it is the principle of suction pumps and airbrushes. The low pressure in the constriction "sucks" the liquid upward.\r
\r
**What happens if the tube is not horizontal?**\r
The potential energy term (density · g · h) would have to be added to Bernoulli's equation. The pure Venturi effect refers only to the exchange between pressure and velocity.\r
\r
## Cross-cutting connections and study paths\r
\r
*   **Bernoulli's Equation**: The general theoretical framework from which this leaf is derived.\r
*   **Continuity Equation**: The kinematic constraint that forces the fluid to accelerate.\r
*   **Viscosity and Head Loss**: The next level of realism where it's studied why the ideal Venturi model fails in very long pipes.\r
*   **Aerodynamics**: Interpretation of lift in wings (although Bernoulli is only part of the full explanation).\r
\r
## Final synthesis\r
\r
The Venturi effect is the art of exchanging pressure for velocity. Understanding that a constriction accelerates the flow and suctions the environment is the key to designing everything from medical oxygenation systems to combustion engines. The conceptual error to avoid is believing that pressure is a measure of the fluid's "impact force"; in reality, it is a measure of its static potential energy available to convert into motion.`;export{e as default};
