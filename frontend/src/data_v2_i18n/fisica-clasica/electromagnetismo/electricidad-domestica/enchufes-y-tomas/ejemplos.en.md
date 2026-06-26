# Exam-type example


## Problem statement

A domestic power strip with [[corriente_maxima_nominal]] = 10 A is connected to a socket at [[tension_de_suministro]] = 230 V. It currently has the following devices simultaneously connected: a desktop heater with [[potencia_de_carga]] = 1 500 W, a laptop with [[potencia_de_carga]] = 85 W, a LED desk lamp with [[potencia_de_carga]] = 12 W, and a phone charger with [[potencia_de_carga]] = 18 W.

Required: (a) calculate [[corriente_total_en_la_toma]] of the strip; (b) calculate [[potencia_total_simultanea]] and [[potencia_maxima_nominal]] of the strip; (c) calculate [[margen_uso]] and determine whether there is overload; (d) estimate [[potencia_disipada_en_el_contacto]] if [[resistencia_de_contacto]] = 0.15 Ω.

## Data

- [[tension_de_suministro]] = 230 V (nominal supply voltage)
- [[corriente_maxima_nominal]] = 10 A (strip with 10 A rating)
- [[potencia_de_carga]] heater = 1 500 W
- [[potencia_de_carga]] laptop = 85 W
- [[potencia_de_carga]] lamp = 12 W
- [[potencia_de_carga]] charger = 18 W
- [[potencia_total_simultanea]] = 1 500 + 85 + 12 + 18 = 1 615 W (calculated input datum)
- [[resistencia_de_contacto]] = 0.15 Ω (estimate for normally used strip)

## System definition

System: 10 A domestic power strip with four devices simultaneously connected. State variables: [[corriente_total_en_la_toma]] at the strip contacts and [[potencia_disipada_en_el_contacto]] at the contact interface. Total current is modelled as [[potencia_total_simultanea]] / [[tension_de_suministro]] and thermal risk as [[corriente_total_en_la_toma]]² · [[resistencia_de_contacto]].

## Physical model

The model of summed independent resistive loads is applied to calculate [[potencia_total_simultanea]] and individual [[corriente_individual_de_carga]] for each device. The Joule model localised at [[resistencia_de_contacto]] is used to estimate [[potencia_disipada_en_el_contacto]]. [[corriente_total_en_la_toma]] is compared with [[corriente_maxima_nominal]] via the [[margen_uso]] ratio.

## Model justification

The resistive model is valid for these loads: the heater is purely resistive, the laptop and chargers have switched-mode supplies but for average power purposes the resistive approximation is reasonable for calculating individual [[corriente_individual_de_carga]]. Startup transients are not modelled because the heater has no motor.

## Symbolic solution

Individual heater current from [[potencia_de_carga]] and [[tension_de_suministro]]:

{{f:corriente_individual}}

Total strip current from [[potencia_total_simultanea]] and [[tension_de_suministro]]:

{{f:corriente_total}}

Nominal maximum strip power:

{{f:potencia_max}}

Strip usage ratio:

{{f:ratio_uso}}

Power dissipated at contacts via Joule effect:

{{f:perdida_contacto}}

## Numerical substitution

The individual [[corriente_individual_de_carga]] of the heater results from dividing 1 500 W by 230 V, giving 6.52 A.

The [[potencia_total_simultanea]] is the sum of the four powers: 1 500 W + 85 W + 12 W + 18 W, giving 1 615 W.

The [[corriente_total_en_la_toma]] results from dividing 1 615 W by 230 V, giving 7.02 A.

The [[potencia_maxima_nominal]] of the 10 A ([[corriente_maxima_nominal]]) strip at [[tension_de_suministro]] = 230 V is 2 300 W.

The [[margen_uso]] results from dividing 7.02 A by 10 A, giving 0.70. This value is below 1: no overload. However, the margin is 30%, meaning that adding any additional device above 690 W would exceed the [[corriente_maxima_nominal]] limit.

The [[potencia_disipada_en_el_contacto]] results from squaring 7.02 A and multiplying by [[resistencia_de_contacto]] = 0.15 Ω, giving 7.4 W dissipated at the contact.

## Dimensional validation

All dimensions are consistent: [[corriente_total_en_la_toma]] in amperes, [[potencia_maxima_nominal]] in watts, [[margen_uso]] dimensionless, and [[potencia_disipada_en_el_contacto]] in watts. Dimensional analysis confirms all formulas are homogeneous.

## Physical interpretation

The [[margen_uso]] of 0.70 indicates the strip operates at 70% of its nominal capacity. It is within the limit but in continuous use it would be prudent not to add more load. The [[potencia_disipada_en_el_contacto]] of 7.4 W at the contact is significant: if [[resistencia_de_contacto]] increases due to degradation to 0.5 Ω, [[potencia_disipada_en_el_contacto]] would reach 24.6 W, enough to initiate degradation of the strip plastic. The greatest risk is not the current overload but the progressive contact degradation from continuous use.

---

# Real-world example


## Context

A family uses a low-quality power strip (unknown nominal [[corriente_maxima_nominal]]) in the living room with a television at [[potencia_de_carga]] = 120 W, a set-top box at [[potencia_de_carga]] = 25 W, a games console at [[potencia_de_carga]] = 150 W, a sound system at [[potencia_de_carga]] = 80 W, and a lamp at [[potencia_de_carga]] = 60 W. After months, the strip's plug is warm to the touch.

## Physical estimation

The total [[potencia_total_simultanea]] is 120 + 25 + 150 + 80 + 60, giving 435 W. With [[tension_de_suministro]] = 230 V, the resulting [[corriente_total_en_la_toma]] is 1.9 A. If [[corriente_maxima_nominal]] = 10 A, [[margen_uso]] is only 0.19: the load is very low. The cause of the heat is not overload but elevated [[resistencia_de_contacto]] due to the low-quality strip. With [[corriente_total_en_la_toma]] = 1.9 A and perceptible heat, [[resistencia_de_contacto]] can be estimated at several ohms, implying [[potencia_disipada_en_el_contacto]] of several watts in a small-sized contact.

## Interpretation

The thermal risk in this case does not come from overload ([[margen_uso]] very low) but from poor quality of the metallic contact (elevated [[resistencia_de_contacto]]). The solution is to replace the strip with a certified-quality one with [[resistencia_de_contacto]] guaranteed to standard, not to redistribute the load. This case illustrates that socket safety analysis requires evaluating both [[margen_uso]] and contact condition: both pathways can generate risk independently.

The two examples together show the complete diagnostic framework: first calculate [[corriente_total_en_la_toma]] and [[margen_uso]] to check for overload; then estimate [[potencia_disipada_en_el_contacto]] with an assumed or measured [[resistencia_de_contacto]] to check for contact thermal risk. Only when both indicators are within safe limits can the installation be considered free of thermal hazard. The physical quantities [[potencia_de_carga]], [[tension_de_suministro]], [[corriente_maxima_nominal]], and [[resistencia_de_contacto]] are the four inputs that fully determine the safety state of any domestic socket or power strip.