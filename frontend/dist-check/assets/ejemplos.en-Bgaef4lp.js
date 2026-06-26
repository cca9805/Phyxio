const e=`\uFEFF# Exam-type example\r
\r
## Problem statement\r
A U-tube manometer contains water as the manometric fluid. One branch is connected to a tank and the other one to a known pressure reference [[p1]] = 101325 Pa. The observed level difference is [[dh]] = 0.18 m. Take [[rho]] = 1000 kg/m^3 and [[g]] = 9.81 m/s^2. Compute the pressure difference [[dp]] and the unknown pressure [[p2]].\r
\r
## Data\r
These values define a consistent reference case for a manometer operating under hydrostatic equilibrium.\r
\r
- [[rho]] = 1000 kg/m^3\r
- [[g]] = 9.81 m/s^2\r
- [[dh]] = 0.18 m\r
- [[p1]] = 101325 Pa\r
\r
## System definition\r
The relevant system is the manometric liquid at equilibrium inside the tube. We are not studying the internal flow inside the tank; we are studying how the column transforms a pressure difference into a visible level difference. The key leaf magnitudes are [[dp]], [[dh]], [[p1]], and [[p2]].\r
\r
## Physical model\r
The model uses the two core relations of the leaf to connect observed level difference with pressure difference and reference pressure.\r
\r
We use the two central relations of the leaf:\r
\r
{{f:manometro}}\r
{{f:presion_relativa}}\r
\r
## Model justification\r
This model is appropriate because the problem describes an instrument at equilibrium. There are no accelerations, vibrations, or dominant dynamic effects. The manometric fluid has known density and the measured difference is vertical. In addition, the statement provides an explicit reference [[p1]], so the pressure difference can be converted into the pressure at the unknown point.\r
\r
The conceptual key is that the exercise is not asking us to guess a pressure from a table. It asks us to reconstruct pressure physically. The column shifts because the two branches do not push equally. That shift creates an equivalent column whose weight per unit area balances the original pressure mismatch. Only after obtaining [[dp]] does it make sense to compute [[p2]].\r
\r
## Symbolic solution\r
First compute the pressure difference from the product of manometric-fluid density, gravity, and vertical level difference.\r
\r
Then use the reference value to obtain the target pressure by adding that pressure difference to [[p1]].\r
## Numerical substitution\r
The numerical result for [[dp]] is 1765.8 Pa.\r
\r
The resulting pressure [[p2]] is 103090.8 Pa.\r
In kilopascals:\r
In kilopascals, [[dp]] is approximately 1.77 kPa and [[p2]] is approximately 103.09 kPa.\r
## Dimensional validation\r
In the first relation, kg/m^3 times m/s^2 times m yields pressure units in Pa.\r
The second equation adds two pressures, so the unit remains pascal.\r
\r
## Physical interpretation\r
The result [[dp]] = 1765.8 Pa means that the tank branch exceeds the reference pressure by a little less than two kilopascals. The manometer has not measured absolute pressure directly. It measured a level difference and translated it into a pressure difference. The step to [[p2]] is possible only because the problem gives a known reference [[p1]].\r
\r
The most important reading is causal, not merely numerical. If the level difference were twice as large, the pressure difference would also be twice as large. If the instrument used mercury instead of water, the same level difference would represent a much larger pressure difference because the manometric fluid would be denser. This dependence shows that the manometer is a hydrostatic converter between geometry and pressure.\r
\r
It is also worth noting that the scale of [[p2]] makes sense. A water-column difference of 18 cm cannot produce tens of kilopascals; it must produce something of order 1 or 2 kPa. This order-of-magnitude check is an excellent defense against unit-conversion mistakes or misread level differences.\r
\r
# Real-world example\r
\r
## Context\r
In an industrial HVAC installation, technicians monitor the condition of an air filter with a differential manometer filled with colored liquid. The manufacturer states that when the pressure drop exceeds 250 Pa, the filter is already dirty enough to require replacement. During inspection, the observed level difference is [[dh]] = 0.0255 m with a manometric liquid of density [[rho]] = 1000 kg/m^3.\r
\r
The operational target is not an absolute pressure but a diagnostic pressure difference [[dp]] between the inlet and outlet sides of the filter. In this context the manometer acts as a maintenance sensor, not as a classroom illustration only.\r
\r
## Physical estimation\r
Apply the central relation of the leaf to estimate the pressure difference across the filter.\r
\r
With the given data, the result is [[dp]] approximately equal to 250.16 Pa.\r
The reading lies essentially at the filter service threshold. If the technician also knows that the upstream pressure is [[p1]] = 101600 Pa, the downstream pressure becomes [[p2]] approximately equal to 101349.84 Pa.\r
In this concrete situation, interpreting [[dp]] is more useful than interpreting [[p2]], because the maintenance criterion is expressed precisely in terms of pressure drop.\r
\r
## Interpretation\r
This example shows why manometers are decision instruments, not merely measurement devices. A pressure difference of only 250 Pa may look small compared with atmospheric pressure, but it is already large enough to indicate that the filter is imposing a significant resistance to airflow. The maintenance variable is not the system absolute pressure but the pressure jump across the resistive element.\r
\r
The reading also has an economic interpretation. If the filter keeps loading with dust, the fan will need more work to maintain the same flow rate. That raises electrical consumption and may move the installation away from its intended operating point. A properly interpreted differential manometer allows intervention before more expensive symptoms appear, such as reduced flow, fan overload, or poor delivered air quality.\r
\r
The example also helps distinguish manometros from nearby topics. We are not using the level difference to study a free surface or to discuss communicating vessels in the abstract. We are using it as an instrumentation reading. The level difference is the visible symptom of a pressure loss in the process. That interpretation is exactly why manometers remain common in laboratories, boilers, air networks, and industrial maintenance panels.\r
\r
`;export{e as default};
