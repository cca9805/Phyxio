# Exam-type example


## Problem statement

A single-phase transformer has a primary winding of [[numero_de_espiras_primario]] equal to 800 turns and a secondary winding of [[numero_de_espiras_secundario]] equal to 160 turns. The primary is connected to an alternating voltage of [[tension_primaria]] equal to 230 V. The transformer feeds a resistive load that consumes an active power of [[potencia_activa_de_salida]] equal to 500 W. The transformer efficiency [[eta]] is 0.96. Calculate the secondary voltage, the current in both windings, the input power and the total transformer losses.

## Data

- [[numero_de_espiras_primario]] is 800 turns
- [[numero_de_espiras_secundario]] is 160 turns
- [[tension_primaria]] is 230 V
- [[potencia_activa_de_salida]] is 500 W
- [[eta]] is 0.96

The data describe a step-down transformer because the secondary winding has fewer turns than the primary winding. The load is read from [[potencia_activa_de_salida]], not from a given resistance, so [[tension_secundaria]] must be obtained first and [[corriente_secundaria]] inferred afterwards. Efficiency [[eta]] does not change the turns ratio, but it does allow [[potencia_activa_de_entrada]] and losses [[perdidas_totales]] to be estimated.

## System definition

The system is a single-phase step-down voltage transformer with resistive load connected to the secondary. The transformer geometric parameters define the transformation ratio. Operating conditions include fixed primary voltage and determined active load.

## Physical model

The ideal transformer model with losses considered through efficiency is applied. The relation between [[tension_primaria]] and [[tension_secundaria]] is controlled by [[numero_de_espiras_primario]] and [[numero_de_espiras_secundario]], while the relation between [[corriente_primaria]] and [[corriente_secundaria]] is inverse to the turns ratio. The apparent power [[potencia_aparente]] is the capacity reference for the windings, and [[eta]] quantifies the fraction of input active power transferred to the secondary.

## Model justification

The magnetic field in the core is approximately uniform. The transformer operates at steady state with linear resistive load. Losses are considered through the provided experimental efficiency. Conditions justify using basic transformation ratios with efficiency correction.

## Symbolic solution

Secondary voltage is obtained from the transformation ratio. Voltage is inversely proportional to the turns ratio:

{{f:relacion_transformacion}}

[[tension_secundaria]] equals [[tension_primaria]] multiplied by [[numero_de_espiras_secundario]] divided by [[numero_de_espiras_primario]]

Secondary current is calculated from output power and secondary voltage:

[[corriente_secundaria]] equals [[potencia_activa_de_salida]] divided by [[tension_secundaria]]

Primary current is obtained from conservation of apparent power, using the inverse turns ratio:

{{f:relacion_corriente}}

[[corriente_primaria]] equals [[corriente_secundaria]] multiplied by [[numero_de_espiras_secundario]] divided by [[numero_de_espiras_primario]]

The same power capacity can be read through the apparent-power relation in the primary winding:

{{f:potencia_aparente}}

Input power is calculated from output power and efficiency:

{{f:rendimiento_transformador}}

[[potencia_activa_de_entrada]] equals [[potencia_activa_de_salida]] divided by [[eta]]

Total losses are the difference between input and output power:

{{f:perdidas_totales}}

[[perdidas_totales]] equals [[potencia_activa_de_entrada]] minus [[potencia_activa_de_salida]]

## Numerical substitution

The transformation ratio is 800 divided by 160 equal to 5.

Secondary voltage [[tension_secundaria]] is 230 V multiplied by 160 divided by 800 equal to 46 V.

Secondary current [[corriente_secundaria]] is 500 W divided by 46 V approximately 10.87 A.

Primary current [[corriente_primaria]] is 10.87 A multiplied by 160 divided by 800 approximately 2.17 A.

Input power [[potencia_activa_de_entrada]] is 500 W divided by 0.96 approximately 520.8 W.

Total losses [[perdidas_totales]] are 520.8 W minus 500 W equal to 20.8 W.

## Dimensional validation

For [[tension_secundaria]]: V times dimensionless divided by dimensionless gives V. Correct.

For [[corriente_secundaria]]: W divided by V gives A. Correct.

For [[corriente_primaria]]: A times dimensionless divided by dimensionless gives A. Correct.

For [[potencia_activa_de_entrada]]: W divided by dimensionless gives W. Correct.

For [[perdidas_totales]]: W minus W gives W. Correct.

## Physical interpretation

The transformer reduces voltage from 230 V to 46 V with a ratio of 5 to 1. Current increases from approximately 2.2 A in the primary to approximately 10.9 A in the secondary, maintaining power. The 96% efficiency is typical of a well-designed small power transformer. Losses of approximately 21 W are dissipated as heat in windings and core. This transformer could feed a low-voltage load such as a lighting system or consumer electronics.

# Real-world example


## Context

A domestic distribution transformer in a residential area has a rated power [[potencia_aparente]] of 50 kVA. The primary is connected to the medium voltage network at 13800 V. The secondary provides the domestic voltage of 230 V single-phase. The transformer has a nominal efficiency of 98.5%. In a measurement at peak hour, the consumption recorded at the secondary is 42 kW with a power factor close to unity.

## Physical estimation

The approximate transformation ratio is 13800 V divided by 230 V equal to 60. The number of primary turns is approximately 60 times that of the secondary.

Nominal secondary current is estimated as [[potencia_aparente]] divided by [[tension_secundaria]] equal to 50000 VA divided by 230 V approximately 217 A.

Actual estimated current with 42 kW and unity power factor is approximately 42000 W divided by 230 V equal to 183 A.

The transformer operates at 183 divided by 217 times one hundred approximately 84% of its nominal load, within its optimal operating range.

Estimated losses are 1.5% of the transferred power. With 42 kW output, losses are approximately 0.015 multiplied by 42000 W equal to 630 W.

Input power is approximately 42630 W. At 13800 V, primary current is approximately 3.1 A.

## Interpretation

The distribution transformer is operating within normal parameters, near its point of maximum efficiency. Losses of approximately 630 W are dissipated mainly as heat in the core and windings, requiring natural or forced ventilation depending on design. The current reduction from approximately 183 A in the secondary to only 3.1 A in the primary demonstrates the advantage of high-voltage distribution. Without the transformer, distributing 42 kW at 230 V would require cables capable of carrying the full current of 183 A, much thicker and more expensive than those needed for 3.1 A at 13800 V.

This example shows how distribution transformers enable efficient electrical supply to entire neighbourhoods, minimising losses in supply lines and reducing the cost of electrical infrastructure.