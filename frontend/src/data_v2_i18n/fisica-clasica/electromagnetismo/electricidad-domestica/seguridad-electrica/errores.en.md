## Conceptual errors


### Error 1: Voltage is the direct damage agent

**Why it seems correct**

The usual warning is "beware of high voltage", and electrical hazard signs show the voltage in volts. The student generalizes: higher voltage means greater direct danger. This analogy is partially correct but omits the role of resistance.

**Why it is incorrect**

Voltage does not interact with tissues; current does. Voltage only determines how much current will flow given the available electrical path. A 10,000 V generator with 100 MΩ internal resistance produces 0.1 mA —imperceptible. The domestic grid at 230 V with [[resistencia_electrica_del_cuerpo_humano]] = 1000 Ω produces 230 mA —fatal. The damage magnitude is [[corriente_a_traves_del_cuerpo]], not [[tension_de_contacto]] directly.

**Detection signal**

The student compares risks using only voltages: "circuit A at 400 V is more dangerous than circuit B at 230 V without further information". This judgment omits circuit impedances.

**Conceptual correction**

The hazard of an electrical contact is always evaluated by calculating the resulting current: [[corriente_a_traves_del_cuerpo]] = [[tension_de_contacto]] / [[resistencia_electrica_del_cuerpo_humano]]. Voltage is the input factor, not the damage agent. A high voltage with high impedance can be less dangerous than a moderate voltage with low impedance.

**Contrast mini-example**

Incorrect: "The 5000 V electric fence for livestock is more dangerous than the 230 V domestic grid." Correct: the electric fence delivers high-voltage pulses but with very limited energy (low current due to high internal impedance). A healthy person who touches it feels a painful shock but does not experience fibrillation. The domestic grid at 230 V with [[resistencia_electrica_del_cuerpo_humano]] = 1000 Ω produces 230 mA, 7 times the fibrillation threshold.

**Mini-example of contrast**

Check 1: In Electrical Safety, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Body resistance always provides protection

**Why it seems correct**

The student knows the human body has electrical resistance and that higher values limit current. If resistance "is always high", danger would always be low. This logic is correct but ignores how [[resistencia_electrica_del_cuerpo_humano]] varies with conditions.

**Why it is incorrect**

Body resistance is not a physical constant: it varies by a factor of 100 or more depending on skin condition. Dry skin may have 50,000–100,000 Ω; wet skin, 500–2,000 Ω. A student working in a rain-wet garden, touching a stripped wire at 230 V with [[resistencia_electrica_del_cuerpo_humano]] = 800 Ω will receive 287 mA —fatal. The same contact with completely dry hands and [[resistencia_electrica_del_cuerpo_humano]] = 80,000 Ω would produce 2.9 mA —barely perceptible.

**Detection signal**

The student concludes a scenario is safe based on "normal" body resistance (dry skin) without considering environmental conditions (rain, bathroom, wet kitchen).

**Conceptual correction**

To evaluate real risk, always use the [[resistencia_electrica_del_cuerpo_humano]] value corresponding to scenario conditions: 1000 Ω for wet areas (IEC 60479 normative value for protection design), 5,000 Ω for normal working conditions, 50,000 Ω or more only in controlled laboratory conditions with dry skin.

**Contrast mini-example**

Incorrect: "With 230 V and body resistance of 50,000 Ω, the current is 4.6 mA, completely safe, I don't need a differential." Correct: that calculation uses dry laboratory skin. In the same situation with sweaty hands ([[resistencia_electrica_del_cuerpo_humano]] = 5,000 Ω) current rises to 46 mA, possible fibrillation zone. The differential is necessary.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: The differential protects against all electrical risks

**Why it seems correct**

The RCD is the "personal protection" device in the electrical panel. The student deduces that if there is a differential, they are protected from all electrical risk in the installation.

**Why it is incorrect**

The RCD only detects asymmetric leakage currents (imbalance between phase and neutral current). It does not protect against: (a) phase-to-neutral contacts without ground (the person is in the circuit but there is no leakage to ground), (b) overloads or short circuits between conductors (that is the circuit breaker's function), (c) contacts in IT installations (no grounded neutral). Additionally, the differential has non-zero response time: if it trips in 200 ms at 60 mA, it may not prevent fibrillation.

**Detection signal**

The student assumes that the presence of a differential in the panel guarantees any accidental contact will be harmless, without calculating [[corriente_a_traves_del_cuerpo]] or the protection margin.

**Conceptual correction**

The differential provides effective protection when: (a) its threshold [[corriente_de_disparo_del_diferencial]] exceeds the calculated leakage current, (b) its response time is below 30 ms, and (c) the ground circuit is in good condition. The protection [[margen]] (ratio between [[corriente_de_disparo_del_diferencial]] and [[corriente_a_traves_del_cuerpo]]) must be greater than 1 for the analyzed scenario.

**Contrast mini-example**

Incorrect: "The installation has a 30 mA differential, so contact in the bathroom with the shower running is safe." Correct: in the bathroom with wet skin [[resistencia_electrica_del_cuerpo_humano]] ≈ 500 Ω and [[tension_de_contacto]] = 230 V, [[corriente_a_traves_del_cuerpo]] = 460 mA. The 30 mA differential would trip (460 mA > 30 mA), but the current is so high that exposure time before tripping may be sufficient for fibrillation. This is why 10 mA differentials with response time < 10 ms are required in wet areas.

## Mathematical errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Confusing watts (power) with amperes (current) in hazard assessment

**Why it seems correct**

Appliances are labeled in watts (power) and the student uses power as a proxy for current to evaluate risk. If a device consumes "many watts", the student assumes "much current" is flowing and therefore there is "much danger".

**Why it is incorrect**

Power and current are related through voltage (power being the product of voltage and current), but power does not measure the risk of direct contact with the conductor. What produces physiological damage is [[corriente_a_traves_del_cuerpo]], which depends on [[tension_de_contacto]] and [[resistencia_electrica_del_cuerpo_humano]], not on the appliance's power. A 2000 W oven at 230 V draws 8.7 A through its circuit, but if someone touches a stripped conductor from that circuit, the body current [[corriente_a_traves_del_cuerpo]] is calculated as the ratio between [[tension_de_contacto]] and [[resistencia_electrica_del_cuerpo_humano]], resulting in 230 mA for a voltage of 230 V and a resistance of 1000 Ω, completely independent of the oven's 8.7 A.

**Detection signal**

The student writes "the danger current is 8.7 A because the oven consumes 2000 W at 230 V" as an assessment of contact risk, confusing load current with body current.

**Conceptual correction**

To evaluate electrical contact risk, ignore the appliance's power and always calculate [[corriente_a_traves_del_cuerpo]] = [[tension_de_contacto]] / [[resistencia_electrica_del_cuerpo_humano]]. The appliance's power determines circuit and breaker rating, but not the electrocution risk in case of contact.

**Contrast mini-example**

Incorrect: "The 50 W heater at 12 V (current 4.2 A) is more dangerous than the 23 W heater at 230 V (current 0.1 A) because more current flows." Correct: if someone touches the phase of the 230 V heater, [[corriente_a_traves_del_cuerpo]] = 230/1000 = 230 mA (dangerous). If they touch the phase of the 12 V heater, [[corriente_a_traves_del_cuerpo]] = 12/1000 = 12 mA (annoying but generally not fatal). Contact voltage, not load current, determines the risk.

## Interpretation errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Interpreting a non-tripped differential as safety confirmation

**Why it seems correct**

If the differential does not trip, the student interprets that there is no dangerous leakage current. This logic works when the differential is in good condition, but not in all cases.

**Why it is incorrect**

The differential may not trip and real risk still exists in four situations: (1) leakage current is below the threshold but above the physiological limit (between 5 mA and 30 mA may be dangerous under certain conditions without tripping the 30 mA differential), (2) the differential is deteriorated and does not respond, (3) the leakage is symmetric in phase and neutral (the differential detects imbalances, not balanced leakage), (4) contact is between phase and neutral without ground, a scenario the differential does not detect.

**Detection signal**

The student concludes an installation is safe because "the differential has never tripped". This statement does not verify the differential's condition nor rules out situations where it would not trip.

**Conceptual correction**

Electrical safety is verified through measurement and calculation, not just by absence of differential trips. Periodically verify the differential with the test button, measure ground resistance (must be < 37 Ω according to REBT so that with 230 V fault current exceeds the differential threshold) and calculate [[corriente_a_traves_del_cuerpo]] for possible contact scenarios.

**Contrast mini-example**

Incorrect: "We've had 10 years without the differential tripping, the installation is safe." Correct: a differential with a mechanism blocked by corrosion may have lost its tripping capability without anyone noticing. The test button check should be done at least monthly. Additionally, a gradual 25 mA leak in the installation (from insulation deterioration) would consume 83% of the 30 mA threshold without tripping, leaving only 5 mA of margin for accidental contact.

## Quick self-control rule

Before declaring an electrical scenario safe, verify the following four points:

1. **Was [[corriente_a_traves_del_cuerpo]] calculated with [[resistencia_electrica_del_cuerpo_humano]] appropriate for the conditions?** Use 1000 Ω for wet areas, not the dry skin value.
2. **Is [[corriente_a_traves_del_cuerpo]] < installed [[corriente_de_disparo_del_diferencial]]?** If not, the differential does not protect in that scenario.
3. **Does the differential have response time < 30 ms?** A slow differential is not effective protection.
4. **Has the ground circuit status been verified?** Without effective grounding, the differential does not detect the leakage.

If any of these four questions does not have a verified affirmative answer, the safety analysis is incomplete.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.