## Ideal model

The simplified model represents the domestic consumer unit with two strictly separate protection functions: the MCB acts as a current [[corriente_de_carga]] limiter relative to its rating [[corriente_nominal_del_magnetotermico]], and the RCD acts as a detector of imbalance [[desequilibrio_diferencial]] relative to its sensitivity [[umbral_diferencial_nominal]]. Both protections are independent: the actuation of one does not imply or replace the other's function.

This model allows quick classification of the incident type based on which device tripped, without advanced instrumental measurement. It is accurate enough for routine residential diagnostic analysis when installed ratings and approximate circuit load are known.

## Hypotheses

The ideal model assumes:
- Pure sinusoidal AC without significant harmonics.
- Ambient temperature in normal range (10–40 °C).
- Standard MCB and RCD ratings (10 A, 16 A, 25 A; 30 mA, 300 mA).
- Single-phase residential installation with correctly connected earth conductor.
- Tripping is deterministic: if [[margen_termico]] ≥ 1 or [[margen_dif]] ≥ 1, the device trips.

## Quantitative validity domain

**Quantitative MCB trip condition:** [[margen_termico]] = [[corriente_de_carga]] / [[corriente_nominal_del_magnetotermico]] ≥ 1 for guaranteed tripping in sustained operation. The approximate power limit is [[potencia_limite_magnetotermica]] = [[tension_de_suministro]] × [[corriente_nominal_del_magnetotermico]]. For a 16 A MCB at 230 V, [[potencia_limite_magnetotermica]] ≈ 3 680 W. If [[margen_termico]] is between 1 and 1.5, tripping occurs within minutes. For short circuits ([[margen_termico]] > 10), tripping is instantaneous (< 10 ms).

**Quantitative RCD trip condition:** [[margen_dif]] = [[desequilibrio_diferencial]] / [[umbral_diferencial_nominal]] ≥ 1. For [[umbral_diferencial_nominal]] = 30 mA, any leakage generating [[desequilibrio_diferencial]] ≥ 30 mA causes tripping in under 300 ms per UNE-EN 61008. For [[umbral_diferencial_nominal]] = 300 mA (fire protection), the threshold rises to 300 mA.

The model loses accuracy for [[margen_termico]] between 1.0 and 1.2 (slow-trip zone depending on bimetallic thermal history), and for [[margen_dif]] between 0.7 and 1.0 with intermittent leakage.

## Model failure signals

Signs that the ideal model is insufficient:
- Repeated tripping with no apparent cause when environmental conditions change.
- Absence of tripping with clear thermal symptoms at connection points.
- Circular diagnosis: protection devices are reset without identifying the causative physical variable.
- Rating increases as a "solution" that hides the real problem without correcting it.
- Selective trips affecting only one specific appliance and not the rest of the circuit.
- Persistently elevated [[margen_dif]] > 0.5 in an apparently normal installation.

## Extended or alternative model

The extended model incorporates three additional variables that the ideal model ignores: trip time, bimetallic temperature, and environmental conditions. An MCB that has been operating near its limit for hours has a warmer bimetallic element and may trip at [[corriente_de_carga]] slightly below [[corriente_nominal_del_magnetotermico]]. An RCD in a very humid environment may have distributed [[desequilibrio_diferencial]] throughout the installation that, summed, exceed [[umbral_diferencial_nominal]] even though none is individually significant.

**When to switch to the extended model:** when the ideal model does not reproduce the observed trip pattern, when there are repeated trips with [[margen_termico]] < 0.9, or when symptoms are seasonal or temperature/humidity dependent.

## Operational comparison

**Binary trip / no-trip model:** useful for initial incident classification but does not allow [[margen_termico]] or [[margen_dif]] quantification, or prediction of future behaviour before a trip occurs.

**Time-current curve model:** necessary for installations where selectivity between series MCBs is critical. Allows prediction of whether the circuit MCB trips before the main MCB.

**Instrumented consumer unit model:** necessary for advanced diagnosis with network analysers. Provides [[corriente_de_fase]], [[corriente_de_neutro]], harmonics, power factor, and [[desequilibrio_diferencial]] in real time.

Practical rule: always separate fault by overcurrent ([[corriente_de_carga]] > [[corriente_nominal_del_magnetotermico]]), differential leakage ([[desequilibrio_diferencial]] > [[umbral_diferencial_nominal]]), and local thermal defect (heat without tripping). Each requires a different instrument and a different corrective action.