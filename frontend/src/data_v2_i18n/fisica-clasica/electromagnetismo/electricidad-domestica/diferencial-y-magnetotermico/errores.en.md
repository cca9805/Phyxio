## Conceptual errors


### Error 1: confusing the functions of the RCD and the MCB

**Why it seems correct:** Both devices interrupt supply when they trip, so they appear to do the same thing. Their similar physical appearance in the consumer unit reinforces the confusion.

**Why it is incorrect:** The RCD monitors [[desequilibrio_diferencial]] between [[corriente_de_fase]] and [[corriente_de_neutro]]. The MCB monitors total [[corriente_de_carga]] relative to [[corriente_nominal_del_magnetotermico]]. These are different quantities, different thresholds, and different threats. Neither device performs the other's function.

**Detection signal:** The student says "I changed the RCD because the cable was overheating" or "I raised the MCB rating because it kept tripping." Neither action solves the underlying physical problem.

**Conceptual correction:** First identify which device tripped. If the RCD tripped, find the source of elevated [[desequilibrio_diferencial]]. If the MCB tripped, verify that [[corriente_de_carga]] does not exceed [[corriente_nominal_del_magnetotermico]].

**Contrast mini-example:** Circuit with [[corriente_de_carga]] = 14 A and 16 A MCB. The RCD trips. Incorrect diagnosis: "the MCB is too sensitive." Correct diagnosis: there is [[desequilibrio_diferencial]] exceeding [[umbral_diferencial_nominal]]; total [[corriente_de_carga]] does not exceed [[corriente_nominal_del_magnetotermico]], so the MCB does not trip.

**Why it seems correct**

Check 1: In Differential and Thermal-Magnetic Breakers, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.

### Error 2: assuming absence of tripping means electrical safety

**Why it seems correct:** If no device has tripped, the installation appears to be within all safety limits.

**Why it is incorrect:** There is a third scenario not covered by either protection: a local thermal defect at a connection point with elevated contact resistance. With [[corriente_de_carga]] < [[corriente_nominal_del_magnetotermico]] and [[desequilibrio_diferencial]] < [[umbral_diferencial_nominal]], neither trips, but the local heat can be dangerous.

**Detection signal:** The student concludes the installation is fine because "nothing tripped," not considering the possibility of a defect without tripping.

**Conceptual correction:** Protection devices have defined operating domains. Outside those domains, risk can exist without any trip signal.

**Contrast mini-example:** Loose connection in a terminal block with [[corriente_de_carga]] = 12 A on a 16 A circuit. [[margen_termico]] = 0.75 (no overload). [[desequilibrio_diferencial]] = 0 (no leakage). Neither device trips, but the contact point dissipates heat locally and may cause a fire.

## Model errors

**Why it seems correct**

Check 6: In Differential and Thermal-Magnetic Breakers, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.

### Error 3: raising the protection threshold to eliminate repeated trips

**Why it seems correct:** If the RCD trips frequently, raising [[umbral_diferencial_nominal]] from 30 mA to 300 mA seems like the technical solution.

**Why it is incorrect:** Repeated RCD tripping indicates systematically elevated [[desequilibrio_diferencial]]: there is a persistent leakage that must be corrected. Raising [[umbral_diferencial_nominal]] eliminates detection of that real leakage, not the leakage itself.

**Detection signal:** The student proposes raising the threshold as the first solution without verifying the physical cause of elevated [[desequilibrio_diferencial]].

**Conceptual correction:** The solution is to identify the circuit or appliance generating [[desequilibrio_diferencial]] and correct the leakage. The threshold [[umbral_diferencial_nominal]] is dimensioned for personal protection; modifying it requires specific technical analysis.

**Contrast mini-example:** A 30 mA RCD that trips every time the dishwasher is used. Incorrect solution: replace with 300 mA RCD. Correct solution: check the dishwasher insulation and its earth connection; the appliance has an internal leakage exceeding [[umbral_diferencial_nominal]].

## Mathematical errors

**Why it seems correct**

Check 11: In Differential and Thermal-Magnetic Breakers, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.

### Error 4: comparing [[desequilibrio_diferencial]] in mA with [[corriente_de_carga]] in A without converting units

**Why it seems correct:** Both [[desequilibrio_diferencial]] and [[corriente_de_carga]] are electric currents, so comparing them directly on the same scale seems valid.

**Why it is incorrect:** The threshold [[umbral_diferencial_nominal]] equals 30 mA, that is 0.030 A. Typical load [[corriente_de_carga]] is several amperes. These are quantities of very different orders of magnitude that cannot be compared without unit conversion.

**Detection signal:** The student claims "the current is 8 A and the RCD is 30, so there is plenty of margin," confusing the value 30 mA with 30 A.

**Conceptual correction:** Always convert [[desequilibrio_diferencial]] and [[umbral_diferencial_nominal]] to the same unit system before calculating [[margen_dif]].

**Contrast mini-example:** With [[corriente_de_carga]] of 8 A and [[desequilibrio_diferencial]] of 40 mA, [[margen_termico]] yields 0.50 (no MCB overload) and [[margen_dif]] yields 1.33 (active RCD trip). The two evaluations are completely independent.

## Interpretation errors

**Why it seems correct**

Check 16: In Differential and Thermal-Magnetic Breakers, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.

### Error 5: diagnosing only from the symptom without measuring the causative quantity

**Why it seems correct:** If the RCD tripped, the problem seems to be the RCD; if the MCB tripped, the problem is current.

**Why it is incorrect:** The device that tripped only identifies which threshold was exceeded, not the physical cause. Acting on the device without measuring the causative quantity does not solve the underlying problem.

**Detection signal:** The student replaces the device without measuring [[corriente_de_carga]], [[corriente_de_fase]], [[corriente_de_neutro]], or [[desequilibrio_diferencial]] of the affected circuit.

**Conceptual correction:** Correct diagnosis requires estimating [[corriente_de_carga]] from [[potencia_de_carga]] and [[tension_de_suministro]], comparing with [[corriente_nominal_del_magnetotermico]], and if possible measuring [[desequilibrio_diferencial]] and calculating [[margen_dif]].

**Contrast mini-example:** MCB that repeatedly trips. Incorrect solution: replace with a higher-rated MCB without checking [[corriente_de_carga]]. Correct solution: measure or estimate [[corriente_de_carga]] of the circuit; if [[corriente_de_carga]] exceeds [[corriente_nominal_del_magnetotermico]], redistribute load or recalculate the rating with the cable cross-section.

## Quick self-control rule

Before resetting or modifying any protection device, verify five points:
1. Which protection tripped: RCD, MCB, or neither?
2. What is the estimated [[corriente_de_carga]] of the affected circuit and how does it compare with [[corriente_nominal_del_magnetotermico]]?
3. Is there evidence of elevated [[desequilibrio_diferencial]]?
4. Is there local thermal evidence: smell, discolouration, heat at a connection point?
5. Has the physical cause been identified and corrected before resetting?

**Why it seems correct**

Check 21: In Differential and Thermal-Magnetic Breakers, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.