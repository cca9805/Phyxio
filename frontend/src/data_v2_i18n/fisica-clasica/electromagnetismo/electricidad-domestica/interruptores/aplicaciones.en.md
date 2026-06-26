# Applications

## 1. Diagnosing heating in high-power switches

A switch controlling a 2,500 W heater at 230 V conducts [[corriente_de_maniobra]] ≈ 11 A. With [[resistencia_en_estado_on]] = 0.06 Ω (aged contact), [[perdida_resistiva_en_on]] exceeds the 5 W risk threshold. The casing reaches a noticeable temperature to the touch. The diagnosis uses the formula [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]]: the risk is not circuit overload (the MCB does not trip because [[corriente_de_maniobra]] is within its rating), but local thermal degradation of the switch contact.

Dominant variable: ** [[perdida_resistiva_en_on]] — determines the contact thermal risk.

Validity limit: ** Static model valid for purely resistive load. If the load were inductive, consider the inrush current.

## 2. Switch selection for air conditioning installation

In an air conditioning installation of [[potencia_de_la_carga]] = 3,500 W at [[tension_de_alimentacion]] = 230 V, With [[corriente_de_maniobra]] ≈ 15 A, even [[resistencia_en_estado_on]] = 0.03 Ω generates [[perdida_resistiva_en_on]] near the monitoring threshold. Correct switch selection requires knowing the load [[corriente_de_maniobra]] and specifying maximum [[resistencia_en_estado_on]] to the manufacturer to guarantee [[perdida_resistiva_en_on]] in the safe zone during continuous use.

Dominant variable: ** [[resistencia_en_estado_on]] — defines what loss the switch will have at the load current.

Validity limit: ** The air conditioning compressor is an inductive load with inrush current of 4–6 × nominal [[corriente_de_maniobra]]. The static model applies in steady state; start-up requires additional analysis.

## 3. Energy analysis of lighting switches with intensive use

In an office, a switch controls [[potencia_de_la_carga]] = 500 W of fluorescent lighting at [[tension_de_alimentacion]] = 230 V. With [[resistencia_en_estado_on]] = 0.03 Ω and [[corriente_de_maniobra]] ≈ 2.2 A, [[perdida_resistiva_en_on]] is below 0.2 W per switch — individually negligible. Scaled to 50 switches and 10 h/day use, the annual accumulated energy [[energia_disipada_en_conduccion]] is in the order of 25 kWh — small economically but physically measurable.

Dominant variable: ** [[energia_disipada_en_conduccion]] — allows scaling the analysis to a time period and a set of devices.

Validity limit: ** Fluorescent lamps have power factor < 1 (typically 0.85–0.9), so actual [[corriente_de_maniobra]] may be higher than [[potencia_de_la_carga]]/[[tension_de_alimentacion]]. For a precise calculation, use [[corriente_de_maniobra]] .

## 4. Thermostats and frequent switching cycles

A heating thermostat cycles 10 times per hour with [[potencia_de_la_carga]] = 1,500 W at [[tension_de_alimentacion]] = 230 V. With [[resistencia_en_estado_on]] = 0.04 Ω and [[corriente_de_maniobra]] ≈ 6.5 A, [[perdida_resistiva_en_on]] ≈ 1.7 W — monitoring zone. With [[t_on]] = 12 h/day at 50% duty cycle, daily [[energia_disipada_en_conduccion]] is in the order of 10 Wh. Over a 150-day heating season, accumulated [[energia_disipada_en_conduccion]] exceeds 1 kWh. Annual operation count determines estimated thermostat service life.

Dominant variable: ** [[t_on]] — determines accumulated energy and, combined with switching frequency, estimated service life.

Validity limit: ** Service life in operations also depends on load inrush current (boiler vs. pure resistance). The 100,000 operations figure is indicative only.

## 5. Domestic electrical safety education

In a domestic electrical safety workshop, the analysis of [[perdida_resistiva_en_on]] and [[resistencia_en_estado_on]] illustrates why switches for high-power appliances should be periodically inspected. The central lesson: a switch that "works" (opens and closes the circuit) may be in active thermal degradation ([[perdida_resistiva_en_on]] > 5 W) without any circuit protection detecting it, because the RCD and MCB protect the wiring, not the switching device.

The quantity [[resistencia_en_estado_on]] connects contact physics with practical safety: [[resistencia_en_estado_on]] < 0.05 Ω → safe; 0.05–0.2 Ω → monitor; > 0.2 Ω → inspect; > 0.5 Ω → replace. These thresholds allow a technician to diagnose switch condition with an ohmmeter without dismantling the installation.

Dominant variable: ** [[resistencia_en_estado_on]] — diagnostic parameter of contact condition, directly measurable.

Validity limit: ** The [[resistencia_en_estado_on]] thresholds are indicative for domestic 10–16 A switches. For higher-rated industrial switches, thresholds are stricter (lower [[resistencia_en_estado_on]] values for the same admissible [[perdida_resistiva_en_on]]).

## General maintenance considerations

The analysis of [[perdida_resistiva_en_on]] and [[resistencia_en_estado_on]] in domestic switches has direct practical implications for preventive maintenance of electrical installations. A periodic inspection programme based on measuring [[resistencia_en_estado_on]] with a precision ohmmeter can identify switches in a degraded state before they show visible heating symptoms.

The decision criterion is simple and quantitative: measure [[resistencia_en_estado_on]], calculate [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] for the nominal load current, and compare against the thresholds of 1 W (monitor) and 5 W (replace). This procedure can be performed without dismantling the installation and allows prioritisation of replacements by actual risk level.

For installations with many switches of the same type (office buildings, industrial facilities), a statistical approach is useful: measure a representative sample of switches of different ages and plot the [[resistencia_en_estado_on]] distribution to estimate the fraction that already exceeds the risk threshold. This information allows replacement planning on a preventive basis, before in-service failures occur.

The quantity [[energia_disipada_en_conduccion]] complements the [[perdida_resistiva_en_on]] analysis when estimating the overall energy impact of switches in the installation. Although the loss in each individual switch is small, in installations with tens or hundreds of high-power switches the total can be relevant for building energy efficiency objectives.

## General maintenance considerations

The analysis of [[perdida_resistiva_en_on]] and [[resistencia_en_estado_on]] in domestic switches has direct practical implications for preventive maintenance of electrical installations. A periodic inspection programme based on measuring [[resistencia_en_estado_on]] with a precision ohmmeter can identify switches in a degraded state before they show visible heating symptoms. The decision criterion is simple and quantitative: measure [[resistencia_en_estado_on]], then calculate [[perdida_resistiva_en_on]] from the nominal load current [[corriente_de_maniobra]], and compare against the established thresholds.

For installations with many switches of the same type, a statistical approach is useful: measure a representative sample of switches of different ages and plot the [[resistencia_en_estado_on]] distribution to estimate what fraction already exceeds the risk threshold. This approach allows replacement planning on a preventive basis, before in-service failures occur and before any switch reaches the dangerous zone above 5 W dissipation.

The quantity [[energia_disipada_en_conduccion]] complements the [[perdida_resistiva_en_on]] analysis when estimating the overall energy impact of switches in the installation. Although the loss in each individual switch is small, in installations with tens or hundreds of high-power switches the total annual [[energia_disipada_en_conduccion]] can be relevant for building energy efficiency objectives. The systematic use of low-[[resistencia_en_estado_on]] switches in high-current circuits such as heaters, air conditioning, and cooking appliances reduces both the thermal risk and the building energy bill.