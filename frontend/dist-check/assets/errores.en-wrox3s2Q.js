const e=`# Errors and Precautions

## Conceptual errors

### Error 1: Confusing precaution with "fear" instead of technical method

**Por qué parece correcto**

Intuition suggests that being "careful" with electricity means being afraid, leading to two seemingly logical extremes: paralysis from excessive caution (not using normal installations due to irrational fear) or excessive unconcern (ignoring signals because "nothing has ever happened"). This dichotomy seems reasonable because electricity is invisible and its potential danger generates natural anxiety.

**Por qué es incorrecto**

Effective precaution is not fear but **technical risk management based on measurable magnitudes**. Fear generates erratic decisions; the technical method allows objectively evaluating which points require priority attention. The error confuses subjective perception of danger with objective analysis of physical variables like [[P_joule]] and [[DeltaT]].

**Señal de detección**

- Phrases like "I'm afraid of it" or "I don't trust it" without concrete risk figures
- Decision to act or not based solely on sensations or impressions
- Difficulty prioritizing among multiple points because numerical indicators are missing

**Corrección conceptual**

Precaution is a **systematic evaluation protocol**: quantify [[P_joule]], [[E_joule]], and [[DeltaT]], classify by criticality, and decide based on objective data. "Confidence" in an installation should come from verification that its risk indicators are within acceptable ranges, not from absence of fear.

**Mini-ejemplo de contraste**

Situation: Two connection points at home — one "gives me bad vibes" and another "looks normal". Without method: I act on feeling and may invest resources in the wrong point. With method: I measure both, discover the "normal" one has [[P_joule]] = 12 W and the "suspicious" only 3 W, prioritize correctly.

---

## Model errors

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

The thermal risk model identifies **early indicators**: [[DeltaT]] > 10-20 K detectable by touch, slight smell of hot plastic, occasional tripping, connector looseness. Preventive management inspects these indicators **before** manifest failure, when intervention is cheaper and more effective.

**Mini-ejemplo de contraste**

Situation: Kitchen connector with visible looseness. Reactive approach: wait for the breaker to trip. Result: when it trips, the connector is already carbonized and the entire power strip must be replaced. Preventive approach: detect the looseness, measure [[P_joule]] = 8 W, tighten the connector, avoid carbonization and the cost of the complete power strip.

---

## Mathematical errors

### Error 3: Evaluating risk only by instantaneous current [[I]] ignoring [[R]] and [[t]]

**Por qué parece correcto**

Current [[I]] is the most intuitive and easiest magnitude to measure. Simple logic says "more current = more heat = more risk", suggesting that a point with low current (e.g., 5 A) must be safe. This simplification seems reasonable for quick evaluations.

**Por qué es incorrecto**

Thermal power depends on **[[I]]²·[[R]]**: a point with 5 A but [[R]] = 0.5 Ω generates [[P_joule]] = 12.5 W, which is significant risk. Additionally, accumulated damage depends on [[E_joule]] = [[P_joule]]·[[t]]: 12.5 W during 8 hours/day accumulates 360 kJ daily, considerable thermal damage. Ignoring [[R]] and [[t]] severely underestimates real risk.

**Señal de detección**

- Phrases like "it only has X amps, no problem"
- Not evaluating connector state (oxide, looseness) affecting [[R]]
- Ignoring daily usage time when comparing risks between points
- Comparing points only by current without considering usage profiles

**Corrección conceptual**

Thermal risk requires **integral evaluation**: calculate [[P_joule]] = [[I]]²·[[R]] for instantaneous risk, and [[E_joule]] = [[P_joule]]·[[t]] for accumulated damage. A point may have lower current but higher accumulated risk due to high [[R]] or long [[t]].

**Mini-ejemplo de contraste**

Point A: [[I]] = 10 A, [[R]] = 0.05 Ω, [[t]] = 1 h/day → [[E_joule]] ≈ 18 kJ/day. Point B: [[I]] = 5 A, [[R]] = 0.4 Ω, [[t]] = 6 h/day → [[E_joule]] ≈ 216 kJ/day. Comparing only by current, A seems riskier; evaluating integrally, B accumulates 12× more daily thermal damage.

---

## Interpretation errors

### Error 4: Thinking that a punctual improvement definitively eliminates risk

**Por qué parece correcto**

Linear logic suggests that if I identify a problem and solve it (replace the connector, tighten the screw), the risk disappears permanently. This static view seems reasonable because the technical intervention corrects the immediately observable defect.

**Por qué es incorrecto**

Thermal risk is **dynamic**: new connectors degrade over time, usage conditions change, and systemic problems (circuit overload, poor ventilation) may not have been addressed by the punctual intervention. Without post-intervention verification and follow-up, a "solution" may be temporary or insufficient.

**Señal de detección**

- Phrases like "I already fixed it, no need to worry anymore"
- Not measuring [[P_joule]] or [[DeltaT]] after intervention to confirm improvement
- Absence of scheduled follow-up reviews
- Considering preventive maintenance as "inventing" problems

**Corrección conceptual**

Every intervention requires **verification and follow-up**: (1) immediate verification measuring [[P_joule]] or [[DeltaT]] after repair, (2) short-term control (2-4 weeks) to detect relapses, (3) periodic quarterly follow-up of critical points. Thermal risk is a dynamic variable requiring continuous vigilance.

**Mini-ejemplo de contraste**

Situation: I replace an oxidized connector with a new one. Without follow-up: the new connector loosens over time due to vibrations, electrical arcing occurs, and 6 months later there is a fire. With follow-up: at 4 weeks I review and detect the new connector has [[P_joule]] = 6 W (suspicious for a new one), tighten it and prevent the failure.

---

### Error 5: Estimating resistance [[R]] visually without verification

**Por qué parece correcto**

Visual experience seems sufficient: "if it looks new, the contact is good; if it's oxidized or loose, it's bad". This heuristic is quick and requires no tools, making it attractive for informal domestic evaluations.

**Por qué es incorrecto**

Contact resistance [[R]] depends on factors not always visible: contact pressure, internal micro-oxidation, material fatigue. A connector that "looks new" may have high [[R]] due to poor internal tightening. A connector "a bit dark" superficially may have good internal contact. Visual estimation has significant false positives and negatives.

**Señal de detección**

- Phrases like "looks new, no problem" or "it's oxidized, needs changing"
- Not verifying real mechanical looseness of connector
- Ignoring temperature measurements ([[DeltaT]]) that contradict visual appearance
- Excessive confidence in visual inspection without corroboration

**Corrección conceptual**

Evaluation of [[R]] requires **functional verification**: when possible, measure voltage drop under load (ΔV = [[I]]·[[R]]) to estimate real resistance, or use infrared thermometer to detect anomalous [[DeltaT]] indicating high [[R]] even if not visually apparent. Appearance is weak indicator; measurement is strong indicator.

**Mini-ejemplo de contraste**

Connector A: impeccable appearance, but feels hot when touched → [[DeltaT]] ≈ 25 K indicates anomalous [[R]] despite appearance. Connector B: superficially oxidized appearance, but feels cool when touched → [[DeltaT]] ≈ 5 K indicates good internal contact. Visual evaluation wrong in both cases; thermal evaluation correct.

---

## Quick self-control rule

Before considering a risk evaluation or intervention closed, verify:

- [ ] **Initial indicator recorded**: [[P_joule]], [[E_joule]], or [[DeltaT]] estimated before acting
- [ ] **Action executed**: Specific technical intervention (replacement, tightening, redistribution)
- [ ] **Final indicator compared**: "After" value measured and compared with "before"
- [ ] **Follow-up plan defined**: Date for subsequent review scheduled
- [ ] **Documentation**: Record of values and actions for future reference
`;export{e as default};
