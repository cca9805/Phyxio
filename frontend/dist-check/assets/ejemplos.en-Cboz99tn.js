const e=`\uFEFF# Exam-type example\r
\r
## Problem statement\r
Determine the absolute pressure and the pressure increase (gauge pressure) experienced by an oceanographic research sensor located at a total depth of 450 meters below the surface of the Bay of Biscay. This problem is fundamental for understanding environmental stressors on deep-sea instrumentation. We must assume that the surrounding seawater density is approximately 1030 kg/m^3 (slightly higher than fresh water due to salinity) and that the atmospheric pressure at the free surface is the standard value of (101325 Pa). For our calculations, consider the local gravitational acceleration to be 9.81 m/s^2. The final goal is to evaluate both the total pressure [[p]] and the pressure increase [[dp]] that act as a critical mechanical load on the device's main structure.\r
\r
## Data\r
- Vertical depth measured from the surface: [[h]] = 450 m\r
- Volumetric mass density of salt water: [[rho]] = 1030 kg/m^3\r
- Standard local gravitational acceleration: [[g]] = 9.81 m/s^2\r
- Reference surface atmospheric pressure: [[p0]] = 101325 Pa\r
- Magnitude to calculate 1: Absolute or total pressure [[p]] in Pascals (Pa).\r
- Magnitude to calculate 2: Pressure increase or gauge pressure [[dp]] in Pascals (Pa).\r
\r
## System definition\r
The physical system under consideration consists of an uninterrupted vertical column of salt water at absolute rest, extending from the air-water interface at the surface to the exact position of the submerged sensor. The system is in a state of hydrostatic mechanical equilibrium, implying there are no net macroscopic currents, turbulence, or large-scale movements that could introduce dynamic effects or temporal variations in the pressure field. The system boundaries are defined by the sea's free surface, where interaction with Earth's atmosphere occurs, and by the sensor's surface itself.\r
\r
## Physical model\r
The conceptual model used for this analysis is that of an **incompressible fluid at rest within a uniform gravitational field**. Under this theoretical framework, the density [[rho]] is postulated as a constant and invariant parameter, regardless of the depth reached or the fluid's internal pressure level. This implies that seawater does not undergo significant internal compressibility in the range of depths studied. The resulting pressure profile is therefore predicted as purely linear.\r
\r
## Model justification\r
Given the analysis depth of 450 meters, which is small compared to maximum abyssal depths, water density variation due to compression is estimated at less than 0.5%, validating the use of constant density. The assumed stillness of the sea justifies ignoring kinetic energy or viscous friction terms characteristic of fluid dynamics. Likewise, gravitational acceleration variation with height is negligible at this metric scale.\r
\r
## Symbolic solution\r
To determine absolute pressure [[p]], we apply the **Fundamental Equation of Hydrostatics**:\r
\r
{{f:presion_hidro}}\r
\r
\r
\r
To specifically calculate the pressure increase [[dp]] (gauge pressure), we use:\r
\r
{{f:delta_p_hidro}}\r
\r
\r
incremento de presion = [[rho]] g h\r
\r
\r
## Numerical substitution\r
We proceed with the insertion of numerical values:\r
\r
1. **Gauge pressure calculation**:\r
\r
Gauge pressure is obtained from the product of density, gravity, and depth. The numerical value is 4,547,035 Pa, approximately 4.55 MPa.\r
\r
\r
2. **Absolute pressure calculation**:\r
\r
By adding surface pressure and hydrostatic contribution, the total pressure is 4,648,360 Pa, approximately 4.65 MPa.\r
\r
\r
## Dimensional validation\r
We perform dimensional analysis to ensure result coherence:\r
\r
[incremento de presion] = [[[rho]]] * [g] * [h] = (M L^{-3}) * (L T^{-2}) * (L) = M L^{-1} T^{-2}\r
\r
The resulting combination M L^{-1} T^{-2} exactly corresponds to the unit of Pressure (Force/Area) in the International System, which is the Pascal (Pa). This confirms the algebraic procedure is correct.\r
\r
## Physical interpretation\r
The obtained result of approximately 4.65 MPa **means** that the sensor is supporting a mechanical load equivalent to about 46 times standard atmospheric pressure. This value **indicates** that every square centimeter of the sensor casing must be able to withstand a force of about 46 Newtons. The difference between absolute and gauge pressure **indicates** that the atmosphere contributes only about 2% of the total stress at this depth, with the water column's weight being the overwhelmingly dominant factor.\r
\r
# Real-world example\r
\r
## Context\r
In the design of urban water storage systems, it is common to use water towers located on hills to supply pressure to a residential area. Imagine a tower where the water level is 60 meters above the level of the lowest houses. The objective is to determine if the available hydrostatic pressure is sufficient for domestic supply standards (between 250 and 400 kPa).\r
\r
## Physical estimation\r
Using fresh water density (1000 kg/m^3) and standard gravity, we can quickly estimate that for every 10 meters of height, we gain approximately 1 atmosphere (100 kPa). Therefore, for a 60-meter tower, the expected gauge pressure is about 600 kPa.\r
\r
## Interpretation\r
The 600 kPa value **means** that the pressure is higher than the standard domestic supply range. This **implies** that, although water will arrive with force even to the highest floors, it will be necessary to install pressure reducing valves at the entrance of homes located at level zero to avoid damage to pipes and appliances, which could leak under such constant hydrostatic load.\r
\r
`;export{e as default};
