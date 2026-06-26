## Conceptual errors


### Error 1: Confusing precaution with "fear" instead of technical method

**Por qué parece correcto**

Intuition suggests that being "careful" with electricity means being afraid, leading to two seemingly logical extremes: paralysis from excessive caution (not using normal installations due to irrational fear) or excessive unconcern (ignoring signals because "nothing has ever happened"). This dichotomy seems reasonable because electricity is invisible and its potential danger generates natural anxiety.

**Por qué es incorrecto**

Effective precaution is not fear but **technical risk management based on measurable magnitudes**. Fear generates erratic decisions; the technical method allows objectively evaluating which points require priority attention. The error confuses subjective perception of danger with objective analysis of physical variables like [[potencia_termica_disipada]] and [[incremento_de_temperatura]].

**Señal de detección**

- Phrases like "I'm afraid of it" or "I don't trust it" without concrete risk figures
- Decision to act or not based solely on sensations or impressions
- Difficulty prioritizing among multiple points because numerical indicators are missing

**Corrección conceptual**

Precaution is a **systematic evaluation protocol**: quantify [[potencia_termica_disipada]], [[energia_termica_acumulada]], and [[incremento_de_temperatura]], classify by criticality, and decide based on objective data. "Confidence" in an installation should come from verification that its risk indicators are within acceptable ranges, not from absence of fear.

**Mini-ejemplo de contraste**

Situation: Two connection points at home — one "gives me bad vibes" and another "looks normal". Without method: I act on feeling and may invest resources in the wrong point. With method: I measure both, discover the "normal" one has [[potencia_termica_disipada]] = 12 W and the "suspicious" only 3 W, prioritize correctly.

---

## Model errors

**Why it seems correct**

Check 1: In Risks and Precautions, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.

### Error 2: Managing incidents only when visible failure appears

**Por qué parece correcto**

Common logic says "if it works, it's not broken". Not acting until a manifest failure occurs (repeated tripping, intense smell, carbonization) seems pragmatic: it avoids unnecessary expenses and only intervenes when something is "really" wrong. This reactive attitude seems economically efficient.

**Por qué es incorrecto**

The thermal model shows that manifest failures are the **final stage of a degradative process detectable much earlier**. Between the first anomalous thermal indicator and catastrophic failure, weeks or months may pass. Waiting for manifest failure allows accumulation of irreversible thermal damage and exposes to greater safety risks than early intervention.

**Señal de detección**

- Pattern of "we'll fix it when the breaker trips"
- Considering it normal for a connector to be "warm" or "hot"
- Ignoring sporadic tripping because "it works again"
- Not visually inspecting connectors regularly

**Corrección conceptual**

The thermal risk model identifies **early indicators**: [[incremento_de_temperatura]] > 10-20 K detectable by touch, slight smell of hot plastic, occasional tripping, connector looseness. Preventive management inspects these indicators **before** manifest failure, when intervention is cheaper and more effective.

**Mini-ejemplo de contraste**

Situation: Kitchen connector with visible looseness. Reactive approach: wait for the breaker to trip. Result: when it trips, the connector is already carbonized and the entire power strip must be replaced. Preventive approach: detect the looseness, measure [[potencia_termica_disipada]] = 8 W, tighten the connector, avoid carbonization and the cost of the complete power strip.

---

## Mathematical errors

**Why it seems correct**

Check 6: In Risks and Precautions, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.

### Error 3: Evaluating risk only by instantaneous current [[corriente_electrica]] ignoring [[resistencia_electrica_local]] and [[tiempo_de_exposicion]]

**Por qué parece correcto**

Current [[corriente_electrica]] is the most intuitive and easiest magnitude to measure. Simple logic says "more current = more heat = more risk", suggesting that a point with low current (e.g., 5 A) must be safe. This simplification seems reasonable for quick evaluations.

**Por qué es incorrecto**

Thermal power depends on **[[corriente_electrica]]²·[[resistencia_electrica_local]]**: a point with 5 A but [[resistencia_electrica_local]] = 0.5 Ω generates [[potencia_termica_disipada]] = 12.5 W, which is significant risk. Additionally, accumulated damage depends on [[energia_termica_acumulada]] = [[potencia_termica_disipada]]·[[tiempo_de_exposicion]]: 12.5 W during 8 hours/day accumulates 360 kJ daily, considerable thermal damage. Ignoring [[resistencia_electrica_local]] and [[tiempo_de_exposicion]] severely underestimates real risk.

**Señal de detección**

- Phrases like "it only has X amps, no problem"
- Not evaluating connector state (oxide, looseness) affecting [[resistencia_electrica_local]]
- Ignoring daily usage time when comparing risks between points
- Comparing points only by current without considering usage profiles

**Corrección conceptual**

Thermal risk requires **integral evaluation**: calculate [[potencia_termica_disipada]] = [[corriente_electrica]]²·[[resistencia_electrica_local]] for instantaneous risk, and [[energia_termica_acumulada]] = [[potencia_termica_disipada]]·[[tiempo_de_exposicion]] for accumulated damage. A point may have lower current but higher accumulated risk due to high [[resistencia_electrica_local]] or long [[tiempo_de_exposicion]].

**Mini-ejemplo de contraste**

Point A: [[corriente_electrica]] = 10 A, [[resistencia_electrica_local]] = 0.05 Ω, [[tiempo_de_exposicion]] = 1 h/day → [[energia_termica_acumulada]] ≈ 18 kJ/day. Point B: [[corriente_electrica]] = 5 A, [[resistencia_electrica_local]] = 0.4 Ω, [[tiempo_de_exposicion]] = 6 h/day → [[energia_termica_acumulada]] ≈ 216 kJ/day. Comparing only by current, A seems riskier; evaluating integrally, B accumulates 12× more daily thermal damage.

---

## Interpretation errors

**Why it seems correct**

Check 11: In Risks and Precautions, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.

### Error 4: Thinking that a punctual improvement definitively eliminates risk

**Por qué parece correcto**

Linear logic suggests that if I identify a problem and solve it (replace the connector, tighten the screw), the risk disappears permanently. This static view seems reasonable because the technical intervention corrects the immediately observable defect.

**Por qué es incorrecto**

Thermal risk is **dynamic**: new connectors degrade over time, usage conditions change, and systemic problems (circuit overload, poor ventilation) may not have been addressed by the punctual intervention. Without post-intervention verification and follow-up, a "solution" may be temporary or insufficient.

**Señal de detección**

- Phrases like "I already fixed it, no need to worry anymore"
- Not measuring [[potencia_termica_disipada]] or [[incremento_de_temperatura]] after intervention to confirm improvement
- Absence of scheduled follow-up reviews
- Considering preventive maintenance as "inventing" problems

**Corrección conceptual**

Every intervention requires **verification and follow-up**: (1) immediate verification measuring [[potencia_termica_disipada]] or [[incremento_de_temperatura]] after repair, (2) short-term control (2-4 weeks) to detect relapses, (3) periodic quarterly follow-up of critical points. Thermal risk is a dynamic variable requiring continuous vigilance.

**Mini-ejemplo de contraste**

Situation: I replace an oxidized connector with a new one. Without follow-up: the new connector loosens over time due to vibrations, electrical arcing occurs, and 6 months later there is a fire. With follow-up: at 4 weeks I review and detect the new connector has [[potencia_termica_disipada]] = 6 W (suspicious for a new one), tighten it and prevent the failure.

---

**Why it seems correct**

Check 16: In Risks and Precautions, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.

### Error 5: Estimating resistance [[resistencia_electrica_local]] visually without verification

**Por qué parece correcto**

Visual experience seems sufficient: "if it looks new, the contact is good; if it's oxidized or loose, it's bad". This heuristic is quick and requires no tools, making it attractive for informal domestic evaluations.

**Por qué es incorrecto**

Contact resistance [[resistencia_electrica_local]] depends on factors not always visible: contact pressure, internal micro-oxidation, material fatigue. A connector that "looks new" may have high [[resistencia_electrica_local]] due to poor internal tightening. A connector "a bit dark" superficially may have good internal contact. Visual estimation has significant false positives and negatives.

**Señal de detección**

- Phrases like "looks new, no problem" or "it's oxidized, needs changing"
- Not verifying real mechanical looseness of connector
- Ignoring temperature measurements ([[incremento_de_temperatura]]) that contradict visual appearance
- Excessive confidence in visual inspection without corroboration

**Corrección conceptual**

Evaluation of [[resistencia_electrica_local]] requires **functional verification**: when possible, measure voltage drop under load (ΔV = [[corriente_electrica]]·[[resistencia_electrica_local]]) to estimate real resistance, or use infrared thermometer to detect anomalous [[incremento_de_temperatura]] indicating high [[resistencia_electrica_local]] even if not visually apparent. Appearance is weak indicator; measurement is strong indicator.

**Mini-ejemplo de contraste**

Connector A: impeccable appearance, but feels hot when touched → [[incremento_de_temperatura]] ≈ 25 K indicates anomalous [[resistencia_electrica_local]] despite appearance. Connector B: superficially oxidized appearance, but feels cool when touched → [[incremento_de_temperatura]] ≈ 5 K indicates good internal contact. Visual evaluation wrong in both cases; thermal evaluation correct.

---

## Quick self-control rule

Before considering a risk evaluation or intervention closed, verify:

- [ ] **Initial indicator recorded**: [[potencia_termica_disipada]], [[energia_termica_acumulada]], or [[incremento_de_temperatura]] estimated before acting
- [ ] **Action executed**: Specific technical intervention (replacement, tightening, redistribution)
- [ ] **Final indicator compared**: "After" value measured and compared with "before"
- [ ] **Follow-up plan defined**: Date for subsequent review scheduled
- [ ] **Documentation**: Record of values and actions for future reference

**Why it seems correct**

Check 21: In Risks and Precautions, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.