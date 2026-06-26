const e=`# Applications of Differential and MCB Analysis\r
\r
## 1. Diagnosing consumer units with repeated trips\r
\r
When an RCD or MCB trips repeatedly, the analysis of [[I]], [[I_delta]], [[margen_termico]], and [[margen_dif]] allows distinction between three fundamentally different causes: circuit overload, real earth leakage, or apparent tripping due to environmental conditions. Without this analysis, the usual response is to change the device that tripped, which resolves the symptom but not the cause and may leave the installation in a more dangerous state than before.\r
\r
The practical application consists of measuring [[I]] with a clamp meter during normal circuit use, calculating [[margen_termico]] = [[I]] / [[I_n]], and comparing with 1. If [[margen_termico]] < 0.85, the cause of the trip is not sustained overload: look for startup transients or a differential cause. In parallel, if [[I_fase]] and [[I_neutro]] can be measured separately, [[I_delta]] = |[[I_fase]] − [[I_neutro]]| allows evaluating [[margen_dif]] and quantifying the leakage.\r
\r
**Dominant variable:** [[I_delta]] for differential diagnosis; [[I]] for MCB diagnosis.\r
\r
**Validity limit:** The analysis is valid for single-phase residential installations with standard ratings. It is not directly applicable to installations with variable-frequency drives or high-density electronic loads, where harmonics may generate phantom trips.\r
\r
## 2. Sizing in home renovations\r
\r
When adding new loads or extending circuits, the analysis of [[P_lim]] = [[V]] × [[I_n]] allows deciding whether the existing circuit has sufficient capacity or requires a new MCB with higher [[I_n]]. The design rule is that the sum of [[I]] of the planned loads should not exceed 80% of [[I_n]] for a safe operating margin: [[margen_termico]] ≤ 0.80 under normal use conditions.\r
\r
Before changing the [[I_n]] of the MCB, verify that the circuit conductor has the appropriate cross-section for the new current. A 25 A MCB on a circuit wired for 16 A may not act in time against an overload that damages the cable insulation.\r
\r
**Dominant variable:** [[P_lim]] for circuit capacity evaluation; [[I_n]] as design parameter.\r
Before changing the [[I_n]] of the MCB, it is essential to verify that the circuit conductor cross-section is adequate for the new current. A 25 A MCB installed on a circuit wired for 16 A capacity may not trip in time against an overload that damages the cable insulation, because the bimetallic element sees a current within its new rating while the wire exceeds its thermal capacity.\r
\r
The correct sequence for a renovation is: (1) calculate the sum of planned loads and their [[I]]; (2) verify that the sum does not exceed 80% of the current [[I_n]]; (3) if it does, check whether redistribution to other circuits is possible before increasing [[I_n]]; (4) if [[I_n]] must be increased, recalculate the required cable cross-section and replace it if necessary.\r
\r
**Validity limit:** The 80% [[margen_termico]] criterion is a conservative practical rule. For purely resistive loads, it can reach 90%. For motors and high-inrush loads, additional correction factors apply.\r
\r
## 3. Incidents in damp areas\r
\r
Seasonal differential trips — more frequent in winter or with rain — typically correspond to insulation degradation that increases [[I_delta]] as humidity rises. Analysis of [[margen_dif]] under different environmental conditions confirms this diagnosis without dismantling the entire installation. A [[margen_dif]] of 0.7 in dry conditions rising to 0.95 in humid conditions indicates progressive insulation degradation warranting preventive intervention before the first trip.\r
\r
**Dominant variable:** [[I_delta]] and [[margen_dif]] as insulation degradation indicators.\r
\r
**Validity limit:** Valid for type-AC RCDs with pure AC. If the circuit includes appliances with switching power supplies, type-A RCDs may be required for reliable detection.\r
\r
## 4. Verification before commissioning\r
\r
In new installations or after renovations, verify that [[margen_termico]] and [[margen_dif]] are within safe margins before connecting the definitive load. A [[margen_dif]] greater than 0.5 with the installation on no-load indicates residual leakage in wiring or connected appliances that must be corrected before first use. A [[margen_termico]] greater than 0.8 with the design load indicates the circuit is operating near its limit and may require redistribution.\r
\r
**Dominant variable:** [[margen_dif]] for insulation verification; [[margen_termico]] for load capacity verification.\r
\r
**Validity limit:** No-load measurements represent low insulation temperature conditions. Leakage increases with operating temperature, so measurements under prolonged-use conditions are more representative.\r
\r
## 5. Technical training and safety incident resolution\r
\r
This analysis is the basis for any electrical incident response protocol in the home. Knowing that [[I_delta]] < [[I_dn]] does not guarantee absence of local thermal defect, and that [[I]] < [[I_n]] does not guarantee absence of significant leakage, are two principles that radically change how installation safety is evaluated.\r
\r
**Dominant variable:** [[margen_dif]] and [[margen_termico]] as installation state indicators.\r
\r
Understanding that [[I_delta]] and [[I]] are independent physical quantities — each monitored by a different device and compared with a different threshold — is the key conceptual shift that separates reactive incident response from systematic technical analysis. An electrical installation with [[margen_dif]] habitually above 0.5 and [[margen_termico]] habitually above 0.7 is an installation that needs preventive intervention, not just waiting for the next trip to decide what to do.\r
\r
The practical training protocol consists of: (1) learning to read [[margen_termico]] and [[margen_dif]] as continuous indicators, not binary flags; (2) practising the calculation of [[I]] from [[P]] and [[V]] for each circuit; (3) interpreting the result in the context of installed [[I_n]] and [[I_dn]]; (4) identifying which of the three failure modes (overcurrent, leakage, local thermal defect) applies to each observed symptom; (5) proposing the corrective action that addresses the physical cause, not just the symptom.\r
\r
**Validity limit:** Applicable to single-phase residential installations with standard consumer unit configuration. For industrial, three-phase, or specialised installations, additional type-specific criteria are required.\r
`;export{e as default};
