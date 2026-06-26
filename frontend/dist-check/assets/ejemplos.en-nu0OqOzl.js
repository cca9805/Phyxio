const e=`\uFEFF# Exam-type example\r
\r
## Problem statement\r
A glass U-tube is partially filled with water of density [[rho1]] = \\( 1000 kg/m}^3 \\). Subsequently, a quantity of oil of unknown density [[rho2]] is poured into the right branch, so that an oil column of height [[h2]] = \\( 0.15 m} \\) is formed above the separation interface with the water. Due to this push, the water level in the left branch rises until it reaches a height [[h1]] = \\( 0.12 m} \\) measured from the same horizontal level as the interface. Determine the value of the oil density [[rho2]] and explain if the result is coherent with the expected physical properties. Assume that the system is at absolute rest and that the liquids are immiscible.\r
\r
## Data\r
- Water density (fluid 1): [[rho1]] = \\( 1000 kg/m}^3 \\)\r
- Water column height: [[h1]] = \\( 0.12 m} \\)\r
- Oil column height: [[h2]] = \\( 0.15 m} \\)\r
- Gravitational acceleration: [[g]] = \\( 9.81 m/s}^2 \\) (it will cancel out in equilibrium)\r
- Unknown: Oil density [[rho2]] in \\( kg/m}^3 \\).\r
\r
## System definition\r
The system is defined as the set of two liquid columns connected by the base in a U-tube. The system boundary is located at the separation interface between the oil and water in the right branch. We analyze the pressure equilibrium on the horizontal isobar that crosses said interface. The system is considered in hydrostatic equilibrium, which implies that there is no net fluid movement between the branches.\r
\r
## Physical model\r
The **communicating vessels** model is applied in an incompressible fluid in equilibrium under a constant gravitational field. This model, based on the fundamental principle of hydrostatics, assumes that pressures at points located at the same depth within a continuous fluid must be equal. We neglect surface tension effects (capillarity) since the tube diameter is assumed to be sufficient. The force balance reduces to the equality of hydrostatic pressures at the base of both columns following the law\r
\r
{{f:equilibrio_vasos}}\r
\r
.\r
\r
## Model justification\r
Given the macroscopic nature of the experiment and the immiscibility of the fluids, the communicating vessels model is the gold standard for this density determination. Evaporation or density variation due to temperature effects are negligible compared to the precision of height measurements. Using the interface isobar is the most robust tool to isolate the effect of the unknown density in a static communicating vessels system.\r
\r
## Symbolic solution\r
We pose pressure equality at the base isobar and apply hydrostatic law on both branches.\r
\r
After canceling [[p_atm]] and [[g]], the central relation of the leaf remains:\r
{{f:equilibrio_vasos}}\r
\r
From that relation, the unknown density [[rho2]] is solved from [[rho1]], [[h1]], and [[h2]].\r
\r
We can also verify the inverse proportionality relationship\r
\r
{{f:relacion_alturas_densidades}}\r
\r
as an inverse proportionality check between heights and densities.\r
\r
\r
## Numerical substitution\r
Substitute the known values into the solved equation and obtain [[rho2]] = 800 kg/m^3.\r
\r
\r
## Dimensional validation\r
Perform dimensional analysis and verify that the final unit is mass density in kg/m^3.\r
\r
The final result is expressed in density mass units of the International System, validating the algebraic consistency of the solution.\r
\r
## Physical interpretation\r
The result [[rho2]] = 800 kg/m^3 indicates that the oil is 20 percent less dense than water. This density difference explains why the oil column must be physically higher (15 cm versus 12 cm) to generate the same pressure at the base. The oil weighs less per unit volume, so it requires more thickness to balance the water load. This value is characteristic of light mineral oils, confirming the physical validity of the measurement.\r
\r
# Real-world example\r
\r
## Context\r
In a refinery's quality control lab, a side sight glass connected to a storage tank is used to estimate the level of a chemical protection layer. The technician observes that the tank contains a base fluid with [[rho1]] = 1250 kg/m^3 reaching a height of [[h1]] = 1.8 m. The sight glass is filled with a low-density oil [[rho2]] = 850 kg/m^3. A quantitative estimation of the level the sight glass should show is required to decide if the reading is coherent or if there is an obstruction in the connection duct.\r
\r
## Physical estimation\r
To perform the estimation, we apply the communicating vessels equilibrium relationship:\r
\r
The same equilibrium relation is used to estimate [[h2]] from [[rho1]], [[h1]], and [[rho2]].\r
\r
Substituting the operational parameters:\r
\r
The numerical calculation gives [[h2]] approximately equal to 2.647 m.\r
\r
The estimated height in the sight glass is approximately 2.65 meters. This reading is about 47 percent higher than that of the main tank (2.65 versus 1.8).\r
\r
## Interpretation\r
The interpretation of this data is critical for process safety. If the sight glass shows a height significantly different from 2.65 m, the technician must conclude that the system is not in real equilibrium, indicating possible sediment accumulation in the bottom valve or air entry in the sight-glass branch. The quantitative reading means that the light oil visually amplifies the tank level, and sight-glass precision indicates that variations of a few centimeters in the oil reveal important changes in main-tank pressure. This communicating-vessels method acts as a high-reliability passive sensor in corrosive industrial environments.\r
\r
`;export{e as default};
