const e=`# Frequent errors in differential and thermal-magnetic breaker analysis\r
\r
## Conceptual errors\r
\r
### Error 1: confusing the functions of the RCD and the MCB\r
\r
**Why it seems correct:** Both devices interrupt supply when they trip, so they appear to do the same thing. Their similar physical appearance in the consumer unit reinforces the confusion.\r
\r
**Why it is incorrect:** The RCD monitors [[I_delta]] between [[I_fase]] and [[I_neutro]]. The MCB monitors total [[I]] relative to [[I_n]]. These are different quantities, different thresholds, and different threats. Neither device performs the other's function.\r
\r
**Detection signal:** The student says "I changed the RCD because the cable was overheating" or "I raised the MCB rating because it kept tripping." Neither action solves the underlying physical problem.\r
\r
**Conceptual correction:** First identify which device tripped. If the RCD tripped, find the source of elevated [[I_delta]]. If the MCB tripped, verify that [[I]] does not exceed [[I_n]].\r
\r
**Contrast mini-example:** Circuit with [[I]] = 14 A and 16 A MCB. The RCD trips. Incorrect diagnosis: "the MCB is too sensitive." Correct diagnosis: there is [[I_delta]] exceeding [[I_dn]]; total [[I]] does not exceed [[I_n]], so the MCB does not trip.\r
\r
### Error 2: assuming absence of tripping means electrical safety\r
\r
**Why it seems correct:** If no device has tripped, the installation appears to be within all safety limits.\r
\r
**Why it is incorrect:** There is a third scenario not covered by either protection: a local thermal defect at a connection point with elevated contact resistance. With [[I]] < [[I_n]] and [[I_delta]] < [[I_dn]], neither trips, but the local heat can be dangerous.\r
\r
**Detection signal:** The student concludes the installation is fine because "nothing tripped," not considering the possibility of a defect without tripping.\r
\r
**Conceptual correction:** Protection devices have defined operating domains. Outside those domains, risk can exist without any trip signal.\r
\r
**Contrast mini-example:** Loose connection in a terminal block with [[I]] = 12 A on a 16 A circuit. [[margen_termico]] = 0.75 (no overload). [[I_delta]] = 0 (no leakage). Neither device trips, but the contact point dissipates heat locally and may cause a fire.\r
\r
## Model errors\r
\r
### Error 3: raising the protection threshold to eliminate repeated trips\r
\r
**Why it seems correct:** If the RCD trips frequently, raising [[I_dn]] from 30 mA to 300 mA seems like the technical solution.\r
\r
**Why it is incorrect:** Repeated RCD tripping indicates systematically elevated [[I_delta]]: there is a persistent leakage that must be corrected. Raising [[I_dn]] eliminates detection of that real leakage, not the leakage itself.\r
\r
**Detection signal:** The student proposes raising the threshold as the first solution without verifying the physical cause of elevated [[I_delta]].\r
\r
**Conceptual correction:** The solution is to identify the circuit or appliance generating [[I_delta]] and correct the leakage. The threshold [[I_dn]] is dimensioned for personal protection; modifying it requires specific technical analysis.\r
\r
**Contrast mini-example:** A 30 mA RCD that trips every time the dishwasher is used. Incorrect solution: replace with 300 mA RCD. Correct solution: check the dishwasher insulation and its earth connection; the appliance has an internal leakage exceeding [[I_dn]].\r
\r
## Mathematical errors\r
\r
### Error 4: comparing [[I_delta]] in mA with [[I]] in A without converting units\r
\r
**Why it seems correct:** Both [[I_delta]] and [[I]] are electric currents, so comparing them directly on the same scale seems valid.\r
\r
**Why it is incorrect:** The threshold [[I_dn]] equals 30 mA, that is 0.030 A. Typical load [[I]] is several amperes. These are quantities of very different orders of magnitude that cannot be compared without unit conversion.\r
\r
**Detection signal:** The student claims "the current is 8 A and the RCD is 30, so there is plenty of margin," confusing the value 30 mA with 30 A.\r
\r
**Conceptual correction:** Always convert [[I_delta]] and [[I_dn]] to the same unit system before calculating [[margen_dif]].\r
\r
**Contrast mini-example:** With [[I]] of 8 A and [[I_delta]] of 40 mA, [[margen_termico]] yields 0.50 (no MCB overload) and [[margen_dif]] yields 1.33 (active RCD trip). The two evaluations are completely independent.\r
\r
## Interpretation errors\r
\r
### Error 5: diagnosing only from the symptom without measuring the causative quantity\r
\r
**Why it seems correct:** If the RCD tripped, the problem seems to be the RCD; if the MCB tripped, the problem is current.\r
\r
**Why it is incorrect:** The device that tripped only identifies which threshold was exceeded, not the physical cause. Acting on the device without measuring the causative quantity does not solve the underlying problem.\r
\r
**Detection signal:** The student replaces the device without measuring [[I]], [[I_fase]], [[I_neutro]], or [[I_delta]] of the affected circuit.\r
\r
**Conceptual correction:** Correct diagnosis requires estimating [[I]] from [[P]] and [[V]], comparing with [[I_n]], and if possible measuring [[I_delta]] and calculating [[margen_dif]].\r
\r
**Contrast mini-example:** MCB that repeatedly trips. Incorrect solution: replace with a higher-rated MCB without checking [[I]]. Correct solution: measure or estimate [[I]] of the circuit; if [[I]] exceeds [[I_n]], redistribute load or recalculate the rating with the cable cross-section.\r
\r
## Quick self-control rule\r
\r
Before resetting or modifying any protection device, verify five points:\r
1. Which protection tripped: RCD, MCB, or neither?\r
2. What is the estimated [[I]] of the affected circuit and how does it compare with [[I_n]]?\r
3. Is there evidence of elevated [[I_delta]]?\r
4. Is there local thermal evidence: smell, discolouration, heat at a connection point?\r
5. Has the physical cause been identified and corrected before resetting?\r
`;export{e as default};
