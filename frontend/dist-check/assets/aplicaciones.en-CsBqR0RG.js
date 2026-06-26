const e=`# Applications of electrical switches\r
\r
## 1. Diagnosing heating in high-power switches\r
\r
A switch controlling a 2,500 W heater at 230 V conducts [[I]] ≈ 11 A. With [[R_on]] = 0.06 Ω (aged contact), [[P_on]] exceeds the 5 W risk threshold. The casing reaches a noticeable temperature to the touch. The diagnosis uses the formula [[P_on]] = [[I]]² · [[R_on]]: the risk is not circuit overload (the MCB does not trip because [[I]] is within its rating), but local thermal degradation of the switch contact.\r
\r
**Dominant variable:** [[P_on]] — determines the contact thermal risk.\r
\r
**Validity limit:** Static model valid for purely resistive load. If the load were inductive, consider the inrush current.\r
\r
## 2. Switch selection for air conditioning installation\r
\r
In an air conditioning installation of [[P]] = 3,500 W at [[V]] = 230 V, With [[I]] ≈ 15 A, even [[R_on]] = 0.03 Ω generates [[P_on]] near the monitoring threshold. Correct switch selection requires knowing the load [[I]] and specifying maximum [[R_on]] to the manufacturer to guarantee [[P_on]] in the safe zone during continuous use.\r
\r
**Dominant variable:** [[R_on]] — defines what loss the switch will have at the load current.\r
\r
**Validity limit:** The air conditioning compressor is an inductive load with inrush current of 4–6 × nominal [[I]]. The static model applies in steady state; start-up requires additional analysis.\r
\r
## 3. Energy analysis of lighting switches with intensive use\r
\r
In an office, a switch controls [[P]] = 500 W of fluorescent lighting at [[V]] = 230 V. With [[R_on]] = 0.03 Ω and [[I]] ≈ 2.2 A, [[P_on]] is below 0.2 W per switch — individually negligible. Scaled to 50 switches and 10 h/day use, the annual accumulated energy [[E_on]] is in the order of 25 kWh — small economically but physically measurable.\r
\r
**Dominant variable:** [[E_on]] — allows scaling the analysis to a time period and a set of devices.\r
\r
**Validity limit:** Fluorescent lamps have power factor < 1 (typically 0.85–0.9), so actual [[I]] may be higher than [[P]]/[[V]]. For a precise calculation, use [[I]] = [[P]] / ([[V]] · pf).\r
\r
## 4. Thermostats and frequent switching cycles\r
\r
A heating thermostat cycles 10 times per hour with [[P]] = 1,500 W at [[V]] = 230 V. With [[R_on]] = 0.04 Ω and [[I]] ≈ 6.5 A, [[P_on]] ≈ 1.7 W — monitoring zone. With [[t_on]] = 12 h/day at 50% duty cycle, daily [[E_on]] is in the order of 10 Wh. Over a 150-day heating season, accumulated [[E_on]] exceeds 1 kWh. Annual operation count determines estimated thermostat service life.\r
\r
**Dominant variable:** [[t_on]] — determines accumulated energy and, combined with switching frequency, estimated service life.\r
\r
**Validity limit:** Service life in operations also depends on load inrush current (boiler vs. pure resistance). The 100,000 operations figure is indicative only.\r
\r
## 5. Domestic electrical safety education\r
\r
In a domestic electrical safety workshop, the analysis of [[P_on]] and [[R_on]] illustrates why switches for high-power appliances should be periodically inspected. The central lesson: a switch that "works" (opens and closes the circuit) may be in active thermal degradation ([[P_on]] > 5 W) without any circuit protection detecting it, because the RCD and MCB protect the wiring, not the switching device.\r
\r
The quantity [[R_on]] connects contact physics with practical safety: [[R_on]] < 0.05 Ω → safe; 0.05–0.2 Ω → monitor; > 0.2 Ω → inspect; > 0.5 Ω → replace. These thresholds allow a technician to diagnose switch condition with an ohmmeter without dismantling the installation.\r
\r
**Dominant variable:** [[R_on]] — diagnostic parameter of contact condition, directly measurable.\r
\r
**Validity limit:** The [[R_on]] thresholds are indicative for domestic 10–16 A switches. For higher-rated industrial switches, thresholds are stricter (lower [[R_on]] values for the same admissible [[P_on]]).\r
\r
## General maintenance considerations\r
\r
The analysis of [[P_on]] and [[R_on]] in domestic switches has direct practical implications for preventive maintenance of electrical installations. A periodic inspection programme based on measuring [[R_on]] with a precision ohmmeter can identify switches in a degraded state before they show visible heating symptoms.\r
\r
The decision criterion is simple and quantitative: measure [[R_on]], calculate [[P_on]] = [[I]]^2 x [[R_on]] for the nominal load current, and compare against the thresholds of 1 W (monitor) and 5 W (replace). This procedure can be performed without dismantling the installation and allows prioritisation of replacements by actual risk level.\r
\r
For installations with many switches of the same type (office buildings, industrial facilities), a statistical approach is useful: measure a representative sample of switches of different ages and plot the [[R_on]] distribution to estimate the fraction that already exceeds the risk threshold. This information allows replacement planning on a preventive basis, before in-service failures occur.\r
\r
The quantity [[E_on]] complements the [[P_on]] analysis when estimating the overall energy impact of switches in the installation. Although the loss in each individual switch is small, in installations with tens or hundreds of high-power switches the total can be relevant for building energy efficiency objectives.\r
\r
## General maintenance considerations\r
\r
The analysis of [[P_on]] and [[R_on]] in domestic switches has direct practical implications for preventive maintenance of electrical installations. A periodic inspection programme based on measuring [[R_on]] with a precision ohmmeter can identify switches in a degraded state before they show visible heating symptoms. The decision criterion is simple and quantitative: measure [[R_on]], then calculate [[P_on]] from the nominal load current [[I]], and compare against the established thresholds.\r
\r
For installations with many switches of the same type, a statistical approach is useful: measure a representative sample of switches of different ages and plot the [[R_on]] distribution to estimate what fraction already exceeds the risk threshold. This approach allows replacement planning on a preventive basis, before in-service failures occur and before any switch reaches the dangerous zone above 5 W dissipation.\r
\r
The quantity [[E_on]] complements the [[P_on]] analysis when estimating the overall energy impact of switches in the installation. Although the loss in each individual switch is small, in installations with tens or hundreds of high-power switches the total annual [[E_on]] can be relevant for building energy efficiency objectives. The systematic use of low-[[R_on]] switches in high-current circuits such as heaters, air conditioning, and cooking appliances reduces both the thermal risk and the building energy bill.\r
`;export{e as default};
