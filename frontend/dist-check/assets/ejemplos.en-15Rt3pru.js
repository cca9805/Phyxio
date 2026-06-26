const e=`\uFEFF# Exam-type example\r
\r
## Problem statement\r
A ten-story building requires a constant flow of liquid to be lifted from a basement cistern to an overhead tank located at a net height of thirty meters above the suction level. The plant engineer estimates that the viscous friction losses in the vertical pipe and fittings (elbows, check valves) are equivalent to an additional ten percent of the theoretical static head. Determine the useful power [[P_util]] necessary to perform this hydraulic work and the input power [[P_in]] that the electric motor must supply if the pump-motor set has an overall efficiency of sixty-five percent. The flow rate required by fire and consumption regulations is five liters per s (0,005 cubic meters per s).\r
\r
## Data\r
-   **Geometric height (h):** 30 meters.\r
-   **Volumetric flow rate [[Q]]:** 0,005 cubic meters per s.\r
-   **Liquid density (water):** 1000 kg/m³.\r
-   **Local gravity (g):** 9,81 m/s².\r
-   **Overall efficiency [[eta]]:** 0,65 (65%).\r
-   **Safety factor (k):** 1,10 (representing the additional 10% for friction).\r
\r
## System definition\r
The system is defined as a closed control volume spanning from the free surface of the water in the lower cistern (atmospheric pressure) to the discharge section in the upper elevated tank. The working fluid is fresh water, considered as an incompressible liquid and in a steady flow regime for the purposes of the manometric design of the pressure system. The system boundaries include the internal walls of the piping, the pump casing, and the mechanical transmission shaft where the motor energy is injected into the hydraulic system.\r
\r
## Physical model\r
The model is based on the application of the energy conservation equation for real fluids in steady state. The useful power [[P_util]] delivered by the hydraulic machine must be sufficient to compensate for the change in the fluid's gravitational potential energy and dissipate the mechanical energy that is converted into heat due to the viscosity of the fluid in motion. The fundamental relationship used is the pumping power equation\r
\r
{{f:potencia_bomba}}\r
\r
, where the pressure [[dp]] represents the total manometric head of the system expressed in pascals. Additionally, the definition of energy efficiency is used to determine the total electrical consumption through equation\r
\r
{{f:eficiencia}}\r
\r
.\r
\r
## Model justification\r
The incompressible flow model is used because the variation in water density at the typical working pressures of a building is negligible for practical purposes. Simplifying head losses as a fixed percentage of the static head is an accepted practice in preliminary engineering calculations where pipe lengths are short and flow velocities are kept low to avoid excessive noise and vibrations in the structure. It is assumed that the motor and pump operate at their steady-state design point, ignoring the startup and shutdown transients.\r
\r
## Symbolic solution\r
First, we define the total pressure increase necessary to overcome gravity and friction:\r
 [[dp]]  igual a  rho cdot g cdot h cdot k \r
Second, we calculate the useful power that the pump must effectively transfer to the fluid to maintain the desired flow rate:\r
 [[P_util]]  igual a  [[dp]] cdot [[Q]] \r
Finally, the total input power required from the electrical grid is obtained through the inverse relationship of the mechanical-electrical efficiency:\r
 [[P_in]]  igual a  frac{[[P_util]]}{[[eta]]} \r
\r
## Numerical substitution\r
Static elevation pressure:  1000 cdot 9,81 cdot 30  igual a  294300  Pa.\r
Total manometric pressure required [[dp]]:  294300 cdot 1,10  igual a  323730  Pa (where 1,10 is the k factor).\r
Calculation of useful power [[P_util]]:  323730 cdot 0,005  igual a  1618,65  W.\r
Calculation of input power [[P_in]]:  1618,65 / 0,65  igual a  2490,23  W.\r
This input power value will determine the sizing of the wiring and electrical protections of the entire hydraulic system.\r
\r
## Dimensional validation\r
Pressure [[dp]] has units of Force per unit Area (kg·m/s² / m²  igual a  kg/m·s²). Flow rate [[Q]] has units of Volume per unit Time (m³/s). The product of both magnitudes results in:\r
 (kg/m cdot s^2) cdot (m^3/s)  igual a  kg cdot m^2 / s^3  igual a  text{J/s}  igual a  text{W} .\r
Since efficiency [[eta]] is a dimensionless magnitude, the resulting input power [[P_in]] maintains the unit of W, validating the dimensional consistency of the physical calculation performed according to International System standards.\r
\r
## Physical interpretation\r
The result obtained indicates that the electric motor consumes approximately fifty percent more energy than is effectively translated into useful hydraulic work on the water. This energy difference does not disappear but is entirely dissipated as residual heat due to three main factors: mechanical friction in the bearings, hydraulic losses due to turbulence within the pump volute, and viscous friction on the internal walls of the pipe. An increase in the height of the building or an increase in flow demand would increase energy demand linearly, demonstrating the importance of selecting equipment with high efficiency [[eta]] to minimize long-term operational and environmental impact.\r
\r
# Real-world example\r
\r
## Context\r
In a modern seawater desalination plant using reverse osmosis, a high-pressure pumping system is required to force the liquid through semipermeable membranes. This process is critical because the osmotic pressure of saltwater is very high. Any inefficiency in the design of the pumping system translates directly into massive operating costs due to the constant high electrical consumption of the industrial facility, which usually operates twenty-four hours a day.\r
\r
## Physical estimation\r
For an industrial production flow rate of one hundred cubic meters per h (approx. 0,0278 m³/s), constant operating pressures of about sixty bars (6,000,000 Pa) are required. Applying the engineering applications model, the theoretical useful power [[P_util]] required by the process is:\r
 [[P_util]]  igual a  6,000,000 cdot 0,0278 approx 166800  W.\r
If the plant uses high-tech pumps with an optimized efficiency [[eta]] of eighty percent, the motor must supply an input power [[P_in]] of approximately 208,500 W (about 208,5 kW). This estimation allows plant managers to foresee significant energy expenditures that must be covered by reliable power sources.\r
\r
## Interpretation\r
This real-world engineering example demonstrates that in high-pressure applications, power demand is extremely sensitive to flow rate [[Q]] and performance. If the system efficiency [[eta]] were to drop by just five percent due to premature wear from saline corrosion or partial membrane fouling, electrical consumption would increase significantly. Therefore, maintenance engineers continuously monitor the relationship between [[P_util]] and [[P_in]] to detect deviations in performance and schedule preventive interventions before economic losses and environmental impact become unacceptable for the project's viability.\r
`;export{e as default};
