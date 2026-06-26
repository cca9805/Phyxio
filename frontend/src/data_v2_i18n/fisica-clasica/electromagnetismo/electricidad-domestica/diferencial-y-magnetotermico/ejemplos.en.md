# Exam-type example


## Problem statement

A single-phase circuit at [[tension_de_suministro]] = 230 V has a [[corriente_nominal_del_magnetotermico]] = 16 A MCB and a [[umbral_diferencial_nominal]] = 30 mA RCD installed. Equipment with total [[potencia_de_carga]] = 4 400 W is connected simultaneously. In another circuit of the same consumer unit, [[corriente_de_fase]] = 9.62 A and [[corriente_de_neutro]] = 9.57 A are measured.

Required: (a) calculate [[corriente_de_carga]] of the first circuit and determine whether there is overload; (b) calculate [[desequilibrio_diferencial]] of the second circuit and determine whether the RCD trips; (c) calculate [[margen_termico]] and [[margen_dif]] for both cases.

## Data

- [[tension_de_suministro]] = 230 V
- [[corriente_nominal_del_magnetotermico]] = 16 A (MCB rating of overloaded circuit)
- [[umbral_diferencial_nominal]] = 30 mA equivalent to 0.030 A (RCD sensitivity)
- [[potencia_de_carga]] = 4 400 W (power of overloaded circuit)
- [[corriente_de_fase]] = 9.62 A (phase current of leakage circuit)
- [[corriente_de_neutro]] = 9.57 A (neutral current of leakage circuit)

## System definition

System: single-phase residential consumer unit with standard MCB and high-sensitivity RCD. State variables: [[corriente_de_carga]] in each circuit and [[desequilibrio_diferencial]] between phase and neutral.

## Physical model

The ideal model of two independent protections is applied. The MCB trips when [[margen_termico]] exceeds unity. The RCD trips when [[margen_dif]] exceeds unity. Both conditions are independent of each other.

## Model justification

The simplified model is valid because the ratings are standard, loads are approximately resistive, and no special environmental conditions are described. The time-current curve model is not required because the objective is to determine whether tripping occurs, not to predict the exact trip time.

## Symbolic solution

Load current from [[potencia_de_carga]] and [[tension_de_suministro]]:

{{f:corriente_carga}}

Thermal load ratio to evaluate MCB overload:

{{f:ratio_termico}}

Differential imbalance between [[corriente_de_fase]] and [[corriente_de_neutro]]:

{{f:desequilibrio}}

Differential ratio to evaluate RCD tripping:

{{f:ratio_diferencial}}

MCB power limit:

{{f:potencia_limite}}

## Numerical substitution

Applying the load current formula with [[potencia_de_carga]] = 4 400 W and [[tension_de_suministro]] = 230 V gives [[corriente_de_carga]] = 19.1 A.

The [[margen_termico]] is obtained by dividing 19.1 A by 16 A, giving 1.19. This value exceeds unity, indicating a 19% overload. The MCB will trip within minutes if the load is sustained.

The [[desequilibrio_diferencial]] of the second circuit is the absolute difference between 9.62 A and 9.57 A, giving 0.05 A equivalent to 50 mA.

The [[margen_dif]] is obtained by dividing 50 mA by 30 mA, giving 1.67. This value exceeds unity, so the RCD trips.

The [[potencia_limite_magnetotermica]] of the 16 A MCB at 230 V is 3 680 W.

## Dimensional validation

The [[corriente_de_carga]] is obtained in watts divided by volts, which equals amperes. The [[desequilibrio_diferencial]] results from subtracting two currents in amperes, remaining in amperes. The [[margen_termico]] and [[margen_dif]] are ratios of amperes to amperes, giving dimensionless results. The [[potencia_limite_magnetotermica]] is the product of volts and amperes, which equals watts. All dimensions are consistent.

## Physical interpretation

A [[margen_termico]] of 1.19 indicates that [[corriente_de_carga]] exceeds the rating [[corriente_nominal_del_magnetotermico]]. The MCB of the first circuit will trip if the load is sustained. The RCD of that circuit does not trip because there is no imbalance between [[corriente_de_fase]] and [[corriente_de_neutro]].

In the second circuit, the total [[corriente_de_carga]] of approximately 9.6 A is well below any standard MCB rating. However, the [[desequilibrio_diferencial]] of 50 mA exceeds the [[umbral_diferencial_nominal]] of 30 mA. An earth leakage exists. The RCD trips. The MCB does not trip because the total [[corriente_de_carga]] is small.

---

# Real-world example


## Context

A user reports that the RCD in their home trips intermittently, mainly in winter when using the bathroom heater. The bathroom circuit MCB has never tripped. The heater has [[potencia_de_carga]] = 1 500 W.

## Physical estimation

With [[tension_de_suministro]] = 230 V and [[potencia_de_carga]] = 1 500 W, the expected [[corriente_de_carga]] is approximately 6.5 A. Using a [[corriente_nominal_del_magnetotermico]] = 16 A MCB, the [[margen_termico]] is 0.41: well below unity. No MCB overload exists. The problem is of differential type. The RCD trips because [[desequilibrio_diferencial]] exceeds [[umbral_diferencial_nominal]] of 30 mA when the heater is on. For [[margen_dif]] to exceed unity with [[umbral_diferencial_nominal]] = 30 mA, the [[desequilibrio_diferencial]] must reach at least 30 mA, representing 0.46% of total [[corriente_de_carga]]. This can be generated by insulation degradation in the heater, especially under humidity or low temperature at startup.

## Interpretation

The seasonal pattern points to insulation degradation dependent on temperature or humidity. The correct action is to inspect the heater and its socket, not to modify [[umbral_diferencial_nominal]]. Raising [[umbral_diferencial_nominal]] to 300 mA would eliminate personal protection against a leakage that may become dangerous. The 30 mA threshold is dimensioned to detect leakage currents through the human body before they become lethal; this threshold must not be raised to solve what is fundamentally an appliance insulation problem. The permanent solution is to correct the leakage at its source.

This example illustrates the diagnostic framework that applies to all RCD nuisance trips: (1) confirm that the MCB has not tripped simultaneously (which would indicate a combined fault); (2) identify the circuit or appliance that generates [[desequilibrio_diferencial]] by isolating loads one at a time; (3) measure or estimate [[margen_dif]] under normal operating conditions to confirm the fault is persistent, not transient; (4) correct the physical cause before resetting the RCD; (5) verify that [[desequilibrio_diferencial]] returns below [[umbral_diferencial_nominal]] after the correction. Only after this sequence is complete can the installation be considered safe to operate normally.