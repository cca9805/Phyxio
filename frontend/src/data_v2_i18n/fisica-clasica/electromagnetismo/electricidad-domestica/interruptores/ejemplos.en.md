# Exam-type example


## Problem statement

A wall switch controls an electric heater of [[potencia_de_la_carga]] = 2000 W in a [[tension_de_alimentacion]] = 230 V installation. After several years of use, the switch casing is hot to the touch. [[resistencia_en_estado_on]] = 0.08 ohm is measured with a milliohm-resolution ohmmeter. The switch operates [[t_on]] = 6 hours per day in winter. Calculate [[corriente_de_maniobra]], [[perdida_resistiva_en_on]], and daily [[energia_disipada_en_conduccion]], and evaluate the thermal risk.

## Data

The load has a power [[potencia_de_la_carga]] in the kilowatt range. The installation operates at nominal European voltage [[tension_de_alimentacion]]. Contact resistance [[resistencia_en_estado_on]] was measured with a precision instrument. Daily conduction time [[t_on]] is several hours. The result quantities are [[perdida_resistiva_en_on]] for thermal risk diagnosis and [[energia_disipada_en_conduccion]] for energy analysis of the period.

## System definition

The physical system is the switch as a resistive element in ON state. The load (heater) is external to the analysis system: its function is to fix [[corriente_de_maniobra]] through the switch. The applied model is localised Joule's law at the switch contact, with [[resistencia_en_estado_on]] as the contact state parameter.

## Physical model

The real switch is modelled as a resistance [[resistencia_en_estado_on]] in series with the load. When conducting [[corriente_de_maniobra]], it dissipates [[perdida_resistiva_en_on]] proportional to the square of [[corriente_de_maniobra]] and to [[resistencia_en_estado_on]]. During [[t_on]], total dissipated energy is [[energia_disipada_en_conduccion]]. The three leaf formulas completely describe this behaviour for resistive load in steady state.

## Model justification

The static resistive model is applied because the load is purely resistive (heater), the regime is steady state, and [[resistencia_en_estado_on]] is constant. The hypotheses are valid: unity power factor, steady state, no inrush transients. The model is not applicable if the load were inductive or if the switch cycled frequently.

## Symbolic solution

[[corriente_de_maniobra]] of the switch is obtained by applying:

{{f:corriente}}

[[perdida_resistiva_en_on]] at the contact is obtained by applying:

{{f:perdida_on}}

[[energia_disipada_en_conduccion]] during the conduction period is obtained by applying:

{{f:energia_on}}

## Numerical substitution

Applying the three leaf formulas to the given data: [[corriente_de_maniobra]] is 8.70 amperes, [[perdida_resistiva_en_on]] is 6.05 watts, and [[energia_disipada_en_conduccion]] is 130680 joules equivalent to 36.3 watt-hours per day of conduction.

## Dimensional validation

Dimensions are consistent throughout the leaf formulas: [[corriente_de_maniobra]] is expressed in amperes, [[perdida_resistiva_en_on]] in watts, [[energia_disipada_en_conduccion]] in joules. The quadratic dependence of [[perdida_resistiva_en_on]] on [[corriente_de_maniobra]] is dimensionally correct because amperes squared times ohms gives watts.

## Physical interpretation

The [[perdida_resistiva_en_on]] value obtained exceeds the 5 W risk threshold. This physically means the contact is dissipating enough power to sustain elevated temperature in continuous use. The hot casing indicates the thermal degradation is already observable. The root cause is high [[resistencia_en_estado_on]] — the quadratic dependence of [[perdida_resistiva_en_on]] on [[corriente_de_maniobra]] means that doubling [[resistencia_en_estado_on]] doubles [[perdida_resistiva_en_on]], therefore a moderately degraded contact is physically equivalent to a much larger load. The accumulated [[energia_disipada_en_conduccion]] indicates that several kWh per winter season are dissipated exclusively at the switch contact. Correct diagnosis depends on [[perdida_resistiva_en_on]], not just on whether [[corriente_de_maniobra]] is within nominal — this is physically consistent with Joule's law, which depends on both [[corriente_de_maniobra]] and [[resistencia_en_estado_on]].

---

# Real-world example


## Context

A domestic installation has a thermostat controlling a heating pump of [[potencia_de_la_carga]] = 800 W at [[tension_de_alimentacion]] = 230 V. The thermostat cycles approximately 8 times per hour and operates 10 hours per day. The load is inductive. Evaluate the thermostat thermal risk with [[resistencia_en_estado_on]] = 0.05 ohm.

## Physical estimation

Applying the leaf formulas with [[potencia_de_la_carga]] = 800 W and [[tension_de_alimentacion]] = 230 V gives [[corriente_de_maniobra]] equal to 3.48 amperes. With [[resistencia_en_estado_on]] = 0.05 ohm, [[perdida_resistiva_en_on]] is 0.61 watts — monitoring zone, not immediate risk. With 50 percent duty cycle and the corresponding [[t_on]], daily [[energia_disipada_en_conduccion]] is approximately 3 watt-hours. The inductive nature of the load implies inrush currents several times higher than nominal [[corriente_de_maniobra]] during brief start-ups, which may degrade the contact through arcing even though static [[perdida_resistiva_en_on]] is low.

## Interpretation

The static model yields low [[perdida_resistiva_en_on]] — reduced thermal risk in the steady-state regime of this installation. This physical result has an important practical consequence: a technician measuring the thermostat temperature and finding it cool-to-the-touch would correctly conclude there is no thermal risk from steady-state conduction. However, this conclusion must be qualified: the inductive nature of the pump load and the high cycling frequency mean that arc erosion at the contact surface may be the dominant degradation mechanism, not Joule heating. Arc erosion degrades [[resistencia_en_estado_on]] over time — eventually, an initially low [[resistencia_en_estado_on]] rises to a level where [[perdida_resistiva_en_on]] does enter the risk zone. The physical model of the switch thus has two operational regimes: a thermal regime governed by [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]] squared times [[resistencia_en_estado_on]], and a mechanical endurance regime governed by cumulative switching count and inrush current per cycle. The leaf formulas cover the thermal regime completely; the mechanical endurance regime requires additional data beyond [[potencia_de_la_carga]], [[tension_de_alimentacion]], [[resistencia_en_estado_on]], [[t_on]], and [[energia_disipada_en_conduccion]]. The transition between regimes occurs when observable symptoms — hot casing, sparking, or measured [[resistencia_en_estado_on]] rising above 0.1 ohm — indicate that arc erosion has become significant.