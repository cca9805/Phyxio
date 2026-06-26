# Applications

## 1. Diagnosing consumer units with repeated trips

When an RCD or MCB trips repeatedly, the analysis of [[corriente_de_carga]], [[desequilibrio_diferencial]], [[margen_termico]], and [[margen_dif]] allows distinction between three fundamentally different causes: circuit overload, real earth leakage, or apparent tripping due to environmental conditions. Without this analysis, the usual response is to change the device that tripped, which resolves the symptom but not the cause and may leave the installation in a more dangerous state than before.

The practical application consists of measuring [[corriente_de_carga]] with a clamp meter during normal circuit use, calculating [[margen_termico]] = [[corriente_de_carga]] / [[corriente_nominal_del_magnetotermico]], and comparing with 1. If [[margen_termico]] < 0.85, the cause of the trip is not sustained overload: look for startup transients or a differential cause. In parallel, if [[corriente_de_fase]] and [[corriente_de_neutro]] can be measured separately, [[desequilibrio_diferencial]] = |[[corriente_de_fase]] − [[corriente_de_neutro]]| allows evaluating [[margen_dif]] and quantifying the leakage.

Dominant variable: ** [[desequilibrio_diferencial]] for differential diagnosis; [[corriente_de_carga]] for MCB diagnosis.

Validity limit: ** The analysis is valid for single-phase residential installations with standard ratings. It is not directly applicable to installations with variable-frequency drives or high-density electronic loads, where harmonics may generate phantom trips.

## 2. Sizing in home renovations

When adding new loads or extending circuits, the analysis of [[potencia_limite_magnetotermica]] = [[tension_de_suministro]] × [[corriente_nominal_del_magnetotermico]] allows deciding whether the existing circuit has sufficient capacity or requires a new MCB with higher [[corriente_nominal_del_magnetotermico]]. The design rule is that the sum of [[corriente_de_carga]] of the planned loads should not exceed 80% of [[corriente_nominal_del_magnetotermico]] for a safe operating margin: [[margen_termico]] ≤ 0.80 under normal use conditions.

Before changing the [[corriente_nominal_del_magnetotermico]] of the MCB, verify that the circuit conductor has the appropriate cross-section for the new current. A 25 A MCB on a circuit wired for 16 A may not act in time against an overload that damages the cable insulation.

Dominant variable: ** [[potencia_limite_magnetotermica]] for circuit capacity evaluation; [[corriente_nominal_del_magnetotermico]] as design parameter.
Before changing the [[corriente_nominal_del_magnetotermico]] of the MCB, it is essential to verify that the circuit conductor cross-section is adequate for the new current. A 25 A MCB installed on a circuit wired for 16 A capacity may not trip in time against an overload that damages the cable insulation, because the bimetallic element sees a current within its new rating while the wire exceeds its thermal capacity.

The correct sequence for a renovation is: (1) calculate the sum of planned loads and their [[corriente_de_carga]]; (2) verify that the sum does not exceed 80% of the current [[corriente_nominal_del_magnetotermico]]; (3) if it does, check whether redistribution to other circuits is possible before increasing [[corriente_nominal_del_magnetotermico]]; (4) if [[corriente_nominal_del_magnetotermico]] must be increased, recalculate the required cable cross-section and replace it if necessary.

Validity limit: ** The 80% [[margen_termico]] criterion is a conservative practical rule. For purely resistive loads, it can reach 90%. For motors and high-inrush loads, additional correction factors apply.

## 3. Incidents in damp areas

Seasonal differential trips — more frequent in winter or with rain — typically correspond to insulation degradation that increases [[desequilibrio_diferencial]] as humidity rises. Analysis of [[margen_dif]] under different environmental conditions confirms this diagnosis without dismantling the entire installation. A [[margen_dif]] of 0.7 in dry conditions rising to 0.95 in humid conditions indicates progressive insulation degradation warranting preventive intervention before the first trip.

Dominant variable: ** [[desequilibrio_diferencial]] and [[margen_dif]] as insulation degradation indicators.

Validity limit: ** Valid for type-AC RCDs with pure AC. If the circuit includes appliances with switching power supplies, type-A RCDs may be required for reliable detection.

## 4. Verification before commissioning

In new installations or after renovations, verify that [[margen_termico]] and [[margen_dif]] are within safe margins before connecting the definitive load. A [[margen_dif]] greater than 0.5 with the installation on no-load indicates residual leakage in wiring or connected appliances that must be corrected before first use. A [[margen_termico]] greater than 0.8 with the design load indicates the circuit is operating near its limit and may require redistribution.

Dominant variable: ** [[margen_dif]] for insulation verification; [[margen_termico]] for load capacity verification.

Validity limit: ** No-load measurements represent low insulation temperature conditions. Leakage increases with operating temperature, so measurements under prolonged-use conditions are more representative.

## 5. Technical training and safety incident resolution

This analysis is the basis for any electrical incident response protocol in the home. Knowing that [[desequilibrio_diferencial]] < [[umbral_diferencial_nominal]] does not guarantee absence of local thermal defect, and that [[corriente_de_carga]] < [[corriente_nominal_del_magnetotermico]] does not guarantee absence of significant leakage, are two principles that radically change how installation safety is evaluated.

Dominant variable: ** [[margen_dif]] and [[margen_termico]] as installation state indicators.

Understanding that [[desequilibrio_diferencial]] and [[corriente_de_carga]] are independent physical quantities — each monitored by a different device and compared with a different threshold — is the key conceptual shift that separates reactive incident response from systematic technical analysis. An electrical installation with [[margen_dif]] habitually above 0.5 and [[margen_termico]] habitually above 0.7 is an installation that needs preventive intervention, not just waiting for the next trip to decide what to do.

The practical training protocol consists of: (1) learning to read [[margen_termico]] and [[margen_dif]] as continuous indicators, not binary flags; (2) practising the calculation of [[corriente_de_carga]] from [[potencia_de_carga]] and [[tension_de_suministro]] for each circuit; (3) interpreting the result in the context of installed [[corriente_nominal_del_magnetotermico]] and [[umbral_diferencial_nominal]]; (4) identifying which of the three failure modes (overcurrent, leakage, local thermal defect) applies to each observed symptom; (5) proposing the corrective action that addresses the physical cause, not just the symptom.

Validity limit: ** Applicable to single-phase residential installations with standard consumer unit configuration. For industrial, three-phase, or specialised installations, additional type-specific criteria are required.