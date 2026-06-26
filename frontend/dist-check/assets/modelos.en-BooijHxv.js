const e=`# Models of Differential and Thermal-Magnetic Protection\r
\r
## Ideal model\r
\r
The simplified model represents the domestic consumer unit with two strictly separate protection functions: the MCB acts as a current [[I]] limiter relative to its rating [[I_n]], and the RCD acts as a detector of imbalance [[I_delta]] relative to its sensitivity [[I_dn]]. Both protections are independent: the actuation of one does not imply or replace the other's function.\r
\r
This model allows quick classification of the incident type based on which device tripped, without advanced instrumental measurement. It is accurate enough for routine residential diagnostic analysis when installed ratings and approximate circuit load are known.\r
\r
## Hypotheses\r
\r
The ideal model assumes:\r
- Pure sinusoidal AC without significant harmonics.\r
- Ambient temperature in normal range (10–40 °C).\r
- Standard MCB and RCD ratings (10 A, 16 A, 25 A; 30 mA, 300 mA).\r
- Single-phase residential installation with correctly connected earth conductor.\r
- Tripping is deterministic: if [[margen_termico]] ≥ 1 or [[margen_dif]] ≥ 1, the device trips.\r
\r
## Quantitative validity domain\r
\r
**Quantitative MCB trip condition:** [[margen_termico]] = [[I]] / [[I_n]] ≥ 1 for guaranteed tripping in sustained operation. The approximate power limit is [[P_lim]] = [[V]] × [[I_n]]. For a 16 A MCB at 230 V, [[P_lim]] ≈ 3 680 W. If [[margen_termico]] is between 1 and 1.5, tripping occurs within minutes. For short circuits ([[margen_termico]] > 10), tripping is instantaneous (< 10 ms).\r
\r
**Quantitative RCD trip condition:** [[margen_dif]] = [[I_delta]] / [[I_dn]] ≥ 1. For [[I_dn]] = 30 mA, any leakage generating [[I_delta]] ≥ 30 mA causes tripping in under 300 ms per UNE-EN 61008. For [[I_dn]] = 300 mA (fire protection), the threshold rises to 300 mA.\r
\r
The model loses accuracy for [[margen_termico]] between 1.0 and 1.2 (slow-trip zone depending on bimetallic thermal history), and for [[margen_dif]] between 0.7 and 1.0 with intermittent leakage.\r
\r
## Model failure signals\r
\r
Signs that the ideal model is insufficient:\r
- Repeated tripping with no apparent cause when environmental conditions change.\r
- Absence of tripping with clear thermal symptoms at connection points.\r
- Circular diagnosis: protection devices are reset without identifying the causative physical variable.\r
- Rating increases as a "solution" that hides the real problem without correcting it.\r
- Selective trips affecting only one specific appliance and not the rest of the circuit.\r
- Persistently elevated [[margen_dif]] > 0.5 in an apparently normal installation.\r
\r
## Extended or alternative model\r
\r
The extended model incorporates three additional variables that the ideal model ignores: trip time, bimetallic temperature, and environmental conditions. An MCB that has been operating near its limit for hours has a warmer bimetallic element and may trip at [[I]] slightly below [[I_n]]. An RCD in a very humid environment may have distributed [[I_delta]] throughout the installation that, summed, exceed [[I_dn]] even though none is individually significant.\r
\r
**When to switch to the extended model:** when the ideal model does not reproduce the observed trip pattern, when there are repeated trips with [[margen_termico]] < 0.9, or when symptoms are seasonal or temperature/humidity dependent.\r
\r
## Operational comparison\r
\r
**Binary trip / no-trip model:** useful for initial incident classification but does not allow [[margen_termico]] or [[margen_dif]] quantification, or prediction of future behaviour before a trip occurs.\r
\r
**Time-current curve model:** necessary for installations where selectivity between series MCBs is critical. Allows prediction of whether the circuit MCB trips before the main MCB.\r
\r
**Instrumented consumer unit model:** necessary for advanced diagnosis with network analysers. Provides [[I_fase]], [[I_neutro]], harmonics, power factor, and [[I_delta]] in real time.\r
\r
Practical rule: always separate fault by overcurrent ([[I]] > [[I_n]]), differential leakage ([[I_delta]] > [[I_dn]]), and local thermal defect (heat without tripping). Each requires a different instrument and a different corrective action.\r
`;export{e as default};
