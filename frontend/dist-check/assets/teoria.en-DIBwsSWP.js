const e=`# Pitot Tube\r
\r
## Conceptual context\r
The **Pitot tube** is a pressure measurement instrument used to calculate the flow velocity of a fluid. Its operation is fundamentally based on the conversion of the fluid's kinetic energy into pressure energy. It is a critical tool in modern aviation, used to measure the airspeed of aircraft, as well as in hydraulic and industrial engineering for monitoring flow rates in pipes and open channels.\r
\r
By combining a measurement of total pressure with static pressure, the Pitot tube allows for the local speed of a fluid to be determined in a simple, reliable, and robust way. It is grounded in the physical principle that any moving fluid forced to come to a halt will experience a local increase in pressure proportional to the square of its original velocity—a phenomenon that can be quantified with great mathematical precision.\r
\r
## 🟢 Essential level\r
The basic idea of the Pitot tube is to measure the force with which the fluid "hits" the tube's frontal inlet. This "impact" creates a pressure signature that tells us how much kinetic energy the fluid possessed before encountering the probe.\r
\r
-   **Stagnation Point**: When a fluid moves toward an open tube oriented head-on to the stream, the fluid entering hits the air or liquid already inside the tube and comes to a complete stop. This specific point in space where the velocity relative to the probe is zero is called the stagnation point.\r
-   **Stagnation Pressure**: Upon stopping, the energy the fluid carried due to its movement (kinetic energy) is transformed into extra potential energy in the form of pressure. This is why at the tube's mouth, the measured pressure is higher than the surrounding ambient pressure.\r
-   **Deducing Velocity**: The faster the fluid moves, the greater the pressure spike at the stagnation point. By measuring this pressure difference, we can back-calculate the fluid's original speed using established physical laws.\r
\r
Key concepts every student should remember:\r
1.  **Static Pressure**: The actual pressure of the moving fluid, equivalent to what a sensor would feel if it were traveling exactly at the same speed as the flow.\r
2.  **Total Pressure (or Stagnation Pressure)**: The maximum pressure achieved when the fluid is forced to convert all its motion into pressure.\r
\r
## 🔵 Formal level\r
The operating principle is derived directly from the **Bernoulli Equation**. If Bernoulli is applied between a point in the undisturbed free stream and the stagnation point at the tube inlet, assuming incompressible and steady flow, the result links static pressure, stagnation pressure, and kinetic energy.\r
\r
At the stagnation point, the local velocity becomes zero, so free-stream kinetic energy is converted into pressure rise. This reading is organized with the pressure difference between total and static pressure:\r
\r
{{f:delta_pitot}}\r
\r
From this point, we can solve for the fluid velocity [[v]] based on the measured pressure difference between the stagnation point and the free stream:\r
\r
{{f:velocidad_pitot}}\r
\r
Where the involved physical magnitudes are:\r
-   [[v]]: Fluid velocity (m/s).\r
-   [[p_t]]: Total or stagnation pressure (Pa), measured at the frontal port.\r
-   [[p]]: Static pressure of the fluid (Pa), measured at the side ports.\r
-   [[rho]]: Fluid density ($\\text{kg/m}^3$).\r
\r
The difference [[dp]] between [[p_t]] and [[p]] is known as the **dynamic pressure**. In practical applications, a **Pitot-static probe** (also known as a Prandtl tube) is commonly used. This integrated instrument features both frontal and side ports, allowing a differential manometer to measure the dynamic pressure directly in a single step.\r
\r
## 🔴 Structural level\r
For the measurement to be physically valid and technically accurate, several design and environmental factors must be meticulously considered. The first and most critical is **alignment**: the longitudinal axis of the tube must be perfectly parallel to the local streamlines of the fluid. A small angle of deviation, known as the angle of attack or incidence, can disrupt the formation of a perfect stagnation point. This leads to measurement errors that grow non-linearly with the angle, typically causing a systematic underestimation of the true flow speed.\r
\r
Another critical factor is the **flow regime**. In very slow-moving flows or with highly viscous fluids, the friction effects and the development of the boundary layer near the probe's tip can significantly alter the pressure readings. Conversely, in air at high speeds (Mach > 0.3), **compressibility effects** become dominant. At these speeds, air density changes as flow is abruptly stopped at the tip, generating heat and compression. In such cases, the simplified Bernoulli formula must be replaced by isentropic relationships that account for adiabatic compression at the impact point.\r
\r
Finally, the **location of the static ports** is vital for accuracy. These ports must be situated in a region of the probe where the streamlines have recovered their parallel trajectory after the initial disturbance caused by the nose of the instrument. If placed too close to the tip, they may capture a region of accelerated flow, leading to a static pressure reading that is lower than the true ambient pressure, thereby inflating the calculated velocity.\r
\r
## Deep physical interpretation\r
The Pitot tube acts as an energy transformer: it converts macroscopic kinetic energy into potential pressure energy. It represents the ultimate limit of mechanical interaction between a fluid flow and a solid obstacle. Dynamic pressure is not a "real pressure" that the fluid exerts laterally against the walls of a pipe; rather, it is a mathematical measure of the fluid's specific inertia per unit volume.\r
\r
The genius of the Pitot tube lies in its ability to isolate the dynamic component of motion from the static state of the fluid. By "freezing" the flow at an infinitesimal point, the instrument allows us to observe the speed of the stream without the need to track or time individual particles. It serves as a profound reminder in fluid mechanics that pressure is not just a measure of a static state, but also a reservoir containing the entire dynamic history of the flow.\r
\r
## Order of magnitude\r
-   **General Aviation**: A Cessna flying at $200\\text{ km/h}$ generates a dynamic pressure of approximately $1800\\text{ Pa}$.\r
-   **Hydraulics**: In a pipe with water flowing at $2\\text{ m/s}$, the pressure difference is about $2000\\text{ Pa}$, which is equivalent to a $20\\text{ cm}$ water column height.\r
-   **Tornadoes**: The winds of a violent tornado reaching $300\\text{ km/h}$ can generate stagnation pressures exceeding $4000\\text{ Pa}$ against building walls—a force capable of leveling non-reinforced structures.\r
-   **High-Speed Rail**: A bullet train traveling at $350\\text{ km/h}$ experiences a dynamic pressure of nearly $5800\\text{ Pa}$ at its nose, requiring specialized aerodynamic shaping to minimize drag.\r
\r
## Personalized resolution method\r
1.  **Identify the Pressures**: Ensure you distinguish between static pressure [[p]] (ambient) and total pressure [[p_t]] (impact). If the problem provides values in "liquid column" units, convert them to Pascals first using a hydrostatic relation based on [[rho]], gravity, and height.\r
2.  **Determine the Density**: Verify whether the fluid [[rho]] is water, air, or another substance. If the fluid is air, remember that its density varies significantly with altitude, temperature, and humidity, which can alter your final result.\r
3.  **Apply the Core Formula**: Use the leaf velocity relation with [[dp]] and [[rho]], ensuring all units are in SI (Pascals for pressure and kg/m^3 for density).\r
4.  **Unit Conversion**: The resulting velocities will be in meters per second (m/s). Multiply by $3.6$ to obtain kilometers per hour (km/h) or by $1.94$ to convert to knots if you are working in an aeronautical context.\r
5.  **Coherence Analysis**: If the calculated total pressure [[p_t]] is lower than the static pressure [[p]], it indicates a measurement error, a suction effect, or that the instrument has been installed backward.\r
\r
## Special cases and extended example\r
**Pitot Tube Blockage in Aviation**: This is one of the most dangerous technical failures in flight. If the frontal inlet becomes blocked—by ice, volcanic ash, or even insects—but the drain holes or static ports remain open, the airspeed indicator will cease to function correctly. The pressure trapped inside the system will act like a barometer: as the airplane climbs, the external static pressure drops, but the internal pressure remains high. This causes the instrument to show an increasing speed as the altitude increases, potentially leading the pilot to believe the aircraft is overspeeding when it might actually be approaching a stall.\r
\r
This specific failure mode was the root cause of several high-profile aviation accidents, such as Air France Flight 447. Understanding the physical link between the two pressures is vital for pilots to identify "unreliable airspeed" indications and avoid making dangerous control inputs based on false data.\r
\r
## Real student questions\r
-   **Why does the Pitot tube have a tiny hole in the back?** This is a drain hole. It allows rainwater, condensation, or melting ice to exit the system via gravity, preventing the formation of liquid plugs that would ruin the pressure readings.\r
-   **Can it be used to measure a river's speed?** Yes. By submerging an L-shaped tube into the water, the water rises in the vertical section. The reached height above the river surface can be used to estimate speed with a simplified hydrostatic-energy relation.\r
-   **What is "indicated airspeed" vs "true airspeed"?** Airspeed indicators are calibrated for the air density at sea level. At high altitudes where the air is much thinner (less dense), the "true airspeed" is higher than the "indicated airspeed" because more speed is required to generate the same impact pressure.\r
\r
## Cross-cutting connections and study paths\r
-   **Meteorology**: Integration into high-precision anemometers for measuring wind gusts and building weather profiles.\r
-   **Motorsport**: Critical sensors in Formula 1 cars used to map airflow over wings and diffusers to optimize downforce in real-time.\r
-   **Physiology**: Miniaturized adaptations of the Pitot principle are used to measure blood flow velocity in major arteries without significantly disturbing the circulatory system.\r
-   **Environmental Engineering**: Monitoring emission speeds in industrial chimneys to calculate the total volume of pollutants released into the atmosphere.\r
\r
## Final synthesis\r
The Pitot tube is the purest practical application of the conservation of energy in fluids. It allows us to "feel" the velocity of a stream through the pressure it generates when it is brought to a halt. Its mechanical simplicity and extreme robustness make it the global gold standard for aerial navigation and industrial diagnostics. It teaches us that, in many instances in physics, the best way to understand motion is by forcing it to reveal itself through its own moment of stopping.`;export{e as default};
