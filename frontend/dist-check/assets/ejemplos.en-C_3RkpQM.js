const t=`# Exam-type example\r
\r
## Problem statement\r
\r
A domestic power strip with [[I_max]] = 10 A is connected to a socket at [[V]] = 230 V. It currently has the following devices simultaneously connected: a desktop heater with [[P]] = 1 500 W, a laptop with [[P]] = 85 W, a LED desk lamp with [[P]] = 12 W, and a phone charger with [[P]] = 18 W.\r
\r
Required: (a) calculate [[I_tot]] of the strip; (b) calculate [[P_tot]] and [[P_max]] of the strip; (c) calculate [[margen_uso]] and determine whether there is overload; (d) estimate [[P_perdida]] if [[R_contacto]] = 0.15 Ω.\r
\r
## Data\r
\r
- [[V]] = 230 V (nominal supply voltage)\r
- [[I_max]] = 10 A (strip with 10 A rating)\r
- [[P]] heater = 1 500 W\r
- [[P]] laptop = 85 W\r
- [[P]] lamp = 12 W\r
- [[P]] charger = 18 W\r
- [[P_tot]] = 1 500 + 85 + 12 + 18 = 1 615 W (calculated input datum)\r
- [[R_contacto]] = 0.15 Ω (estimate for normally used strip)\r
\r
## System definition\r
\r
System: 10 A domestic power strip with four devices simultaneously connected. State variables: [[I_tot]] at the strip contacts and [[P_perdida]] at the contact interface. Total current is modelled as [[P_tot]] / [[V]] and thermal risk as [[I_tot]]² · [[R_contacto]].\r
\r
## Physical model\r
\r
The model of summed independent resistive loads is applied to calculate [[P_tot]] and individual [[I]] for each device. The Joule model localised at [[R_contacto]] is used to estimate [[P_perdida]]. [[I_tot]] is compared with [[I_max]] via the [[margen_uso]] ratio.\r
\r
## Model justification\r
\r
The resistive model is valid for these loads: the heater is purely resistive, the laptop and chargers have switched-mode supplies but for average power purposes the resistive approximation is reasonable for calculating individual [[I]]. Startup transients are not modelled because the heater has no motor.\r
\r
## Symbolic solution\r
\r
Individual heater current from [[P]] and [[V]]:\r
\r
{{f:corriente_individual}}\r
\r
Total strip current from [[P_tot]] and [[V]]:\r
\r
{{f:corriente_total}}\r
\r
Nominal maximum strip power:\r
\r
{{f:potencia_max}}\r
\r
Strip usage ratio:\r
\r
{{f:ratio_uso}}\r
\r
Power dissipated at contacts via Joule effect:\r
\r
{{f:perdida_contacto}}\r
\r
## Numerical substitution\r
\r
The individual [[I]] of the heater results from dividing 1 500 W by 230 V, giving 6.52 A.\r
\r
The [[P_tot]] is the sum of the four powers: 1 500 W + 85 W + 12 W + 18 W, giving 1 615 W.\r
\r
The [[I_tot]] results from dividing 1 615 W by 230 V, giving 7.02 A.\r
\r
The [[P_max]] of the 10 A ([[I_max]]) strip at [[V]] = 230 V is 2 300 W.\r
\r
The [[margen_uso]] results from dividing 7.02 A by 10 A, giving 0.70. This value is below 1: no overload. However, the margin is 30%, meaning that adding any additional device above 690 W would exceed the [[I_max]] limit.\r
\r
The [[P_perdida]] results from squaring 7.02 A and multiplying by [[R_contacto]] = 0.15 Ω, giving 7.4 W dissipated at the contact.\r
\r
## Dimensional validation\r
\r
All dimensions are consistent: [[I_tot]] in amperes, [[P_max]] in watts, [[margen_uso]] dimensionless, and [[P_perdida]] in watts. Dimensional analysis confirms all formulas are homogeneous.\r
\r
## Physical interpretation\r
\r
The [[margen_uso]] of 0.70 indicates the strip operates at 70% of its nominal capacity. It is within the limit but in continuous use it would be prudent not to add more load. The [[P_perdida]] of 7.4 W at the contact is significant: if [[R_contacto]] increases due to degradation to 0.5 Ω, [[P_perdida]] would reach 24.6 W, enough to initiate degradation of the strip plastic. The greatest risk is not the current overload but the progressive contact degradation from continuous use.\r
\r
---\r
\r
# Real-world example\r
\r
## Context\r
\r
A family uses a low-quality power strip (unknown nominal [[I_max]]) in the living room with a television at [[P]] = 120 W, a set-top box at [[P]] = 25 W, a games console at [[P]] = 150 W, a sound system at [[P]] = 80 W, and a lamp at [[P]] = 60 W. After months, the strip's plug is warm to the touch.\r
\r
## Physical estimation\r
\r
The total [[P_tot]] is 120 + 25 + 150 + 80 + 60, giving 435 W. With [[V]] = 230 V, the resulting [[I_tot]] is 1.9 A. If [[I_max]] = 10 A, [[margen_uso]] is only 0.19: the load is very low. The cause of the heat is not overload but elevated [[R_contacto]] due to the low-quality strip. With [[I_tot]] = 1.9 A and perceptible heat, [[R_contacto]] can be estimated at several ohms, implying [[P_perdida]] of several watts in a small-sized contact.\r
\r
## Interpretation\r
\r
The thermal risk in this case does not come from overload ([[margen_uso]] very low) but from poor quality of the metallic contact (elevated [[R_contacto]]). The solution is to replace the strip with a certified-quality one with [[R_contacto]] guaranteed to standard, not to redistribute the load. This case illustrates that socket safety analysis requires evaluating both [[margen_uso]] and contact condition: both pathways can generate risk independently.\r
\r
The two examples together show the complete diagnostic framework: first calculate [[I_tot]] and [[margen_uso]] to check for overload; then estimate [[P_perdida]] with an assumed or measured [[R_contacto]] to check for contact thermal risk. Only when both indicators are within safe limits can the installation be considered free of thermal hazard. The physical quantities [[P]], [[V]], [[I_max]], and [[R_contacto]] are the four inputs that fully determine the safety state of any domestic socket or power strip.\r
`;export{t as default};
