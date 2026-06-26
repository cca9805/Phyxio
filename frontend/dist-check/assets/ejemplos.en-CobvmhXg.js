const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A wall switch controls an electric heater of [[P]] = 2000 W in a [[V]] = 230 V installation. After several years of use, the switch casing is hot to the touch. [[R_on]] = 0.08 ohm is measured with a milliohm-resolution ohmmeter. The switch operates [[t_on]] = 6 hours per day in winter. Calculate [[I]], [[P_on]], and daily [[E_on]], and evaluate the thermal risk.\r
\r
## Data\r
\r
The load has a power [[P]] in the kilowatt range. The installation operates at nominal European voltage [[V]]. Contact resistance [[R_on]] was measured with a precision instrument. Daily conduction time [[t_on]] is several hours. The result quantities are [[P_on]] for thermal risk diagnosis and [[E_on]] for energy analysis of the period.\r
\r
## System definition\r
\r
The physical system is the switch as a resistive element in ON state. The load (heater) is external to the analysis system: its function is to fix [[I]] through the switch. The applied model is localised Joule's law at the switch contact, with [[R_on]] as the contact state parameter.\r
\r
## Physical model\r
\r
The real switch is modelled as a resistance [[R_on]] in series with the load. When conducting [[I]], it dissipates [[P_on]] proportional to the square of [[I]] and to [[R_on]]. During [[t_on]], total dissipated energy is [[E_on]]. The three leaf formulas completely describe this behaviour for resistive load in steady state.\r
\r
## Model justification\r
\r
The static resistive model is applied because the load is purely resistive (heater), the regime is steady state, and [[R_on]] is constant. The hypotheses are valid: unity power factor, steady state, no inrush transients. The model is not applicable if the load were inductive or if the switch cycled frequently.\r
\r
## Symbolic solution\r
\r
[[I]] of the switch is obtained by applying:\r
\r
{{f:corriente}}\r
\r
[[P_on]] at the contact is obtained by applying:\r
\r
{{f:perdida_on}}\r
\r
[[E_on]] during the conduction period is obtained by applying:\r
\r
{{f:energia_on}}\r
\r
## Numerical substitution\r
\r
Applying the three leaf formulas to the given data: [[I]] is 8.70 amperes, [[P_on]] is 6.05 watts, and [[E_on]] is 130680 joules equivalent to 36.3 watt-hours per day of conduction.\r
\r
## Dimensional validation\r
\r
Dimensions are consistent throughout the leaf formulas: [[I]] is expressed in amperes, [[P_on]] in watts, [[E_on]] in joules. The quadratic dependence of [[P_on]] on [[I]] is dimensionally correct because amperes squared times ohms gives watts.\r
\r
## Physical interpretation\r
\r
The [[P_on]] value obtained exceeds the 5 W risk threshold. This physically means the contact is dissipating enough power to sustain elevated temperature in continuous use. The hot casing indicates the thermal degradation is already observable. The root cause is high [[R_on]] — the quadratic dependence of [[P_on]] on [[I]] means that doubling [[R_on]] doubles [[P_on]], therefore a moderately degraded contact is physically equivalent to a much larger load. The accumulated [[E_on]] indicates that several kWh per winter season are dissipated exclusively at the switch contact. Correct diagnosis depends on [[P_on]], not just on whether [[I]] is within nominal — this is physically consistent with Joule's law, which depends on both [[I]] and [[R_on]].\r
\r
---\r
\r
# Real-world example\r
\r
## Context\r
\r
A domestic installation has a thermostat controlling a heating pump of [[P]] = 800 W at [[V]] = 230 V. The thermostat cycles approximately 8 times per hour and operates 10 hours per day. The load is inductive. Evaluate the thermostat thermal risk with [[R_on]] = 0.05 ohm.\r
\r
## Physical estimation\r
\r
Applying the leaf formulas with [[P]] = 800 W and [[V]] = 230 V gives [[I]] equal to 3.48 amperes. With [[R_on]] = 0.05 ohm, [[P_on]] is 0.61 watts — monitoring zone, not immediate risk. With 50 percent duty cycle and the corresponding [[t_on]], daily [[E_on]] is approximately 3 watt-hours. The inductive nature of the load implies inrush currents several times higher than nominal [[I]] during brief start-ups, which may degrade the contact through arcing even though static [[P_on]] is low.\r
\r
## Interpretation\r
\r
The static model yields low [[P_on]] — reduced thermal risk in the steady-state regime of this installation. This physical result has an important practical consequence: a technician measuring the thermostat temperature and finding it cool-to-the-touch would correctly conclude there is no thermal risk from steady-state conduction. However, this conclusion must be qualified: the inductive nature of the pump load and the high cycling frequency mean that arc erosion at the contact surface may be the dominant degradation mechanism, not Joule heating. Arc erosion degrades [[R_on]] over time — eventually, an initially low [[R_on]] rises to a level where [[P_on]] does enter the risk zone. The physical model of the switch thus has two operational regimes: a thermal regime governed by [[P_on]] = [[I]] squared times [[R_on]], and a mechanical endurance regime governed by cumulative switching count and inrush current per cycle. The leaf formulas cover the thermal regime completely; the mechanical endurance regime requires additional data beyond [[P]], [[V]], [[R_on]], [[t_on]], and [[E_on]]. The transition between regimes occurs when observable symptoms — hot casing, sparking, or measured [[R_on]] rising above 0.1 ohm — indicate that arc erosion has become significant.\r
`;export{e as default};
