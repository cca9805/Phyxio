# Applications

## 1. Selecting the right differential for bathrooms and wet areas

The bathroom is the domestic space with the highest concentration of electrical risk: conductive surfaces (metal bathtub, shower, pipes), water that drastically reduces [[resistencia_electrica_del_cuerpo_humano]], and users who may simultaneously be in contact with ground (wet floor). An insulation failure in a 1000 W electric bath heater can put the phase at 230 V in contact with the metal enclosure.

In an adult under the shower, [[resistencia_electrica_del_cuerpo_humano]] can drop to 500–800 Ω. Applying Ohm's Law with 230 V and 600 Ω gives a current of 383 mA —more than 12 times the 30 mA fibrillation threshold. The 30 mA differential would trip at this current, but if response time is 40 ms and current is 383 mA, the statistical probability of ventricular fibrillation in those 40 ms is high.

IEC 60364-7-701 requires a 30 mA differential minimum in bathrooms, and recommends 10 mA for the bathtub/shower circuit in new installations. With 10 mA the minimum [[corriente_a_traves_del_cuerpo]] that activates the differential is 3 times lower than with 30 mA: for the same body current of 383 mA, the safety [[margen]] in trip time improves, but above all the differential would detect much smaller indirect contact leaks before they become direct risks.

Dominant variable: [[resistencia_electrica_del_cuerpo_humano]] (determines whether body current exceeds the differential threshold with sufficient [[margen]] for trip time).

Validity limit: differential protection is effective only if the installation's ground circuit is properly executed (< 37 Ω per REBT); without effective ground, the differential does not detect the leakage.

## 2. Risk assessment in domestic electrical maintenance

A homeowner decides to replace a deteriorated outlet without cutting the power because "I only touch the neutral and ground, not the phase". However, in an installation with rotated neutral or swapped connections in the panel, what appears to be neutral may carry phase voltage. With dry hands (where [[resistencia_electrica_del_cuerpo_humano]] is about 50,000 Ω) and a contact voltage [[tension_de_contacto]] of 230 V, body current would be about 4.6 mA —annoying but not dangerous. However, if hands are wet from kitchen work (where [[resistencia_electrica_del_cuerpo_humano]] drops to about 3,000 Ω), current rises to about 76.7 mA, well within the fibrillation zone.

The correct protocol is always to verify absence of voltage with a voltage tester before touching any conductor, regardless of which one is believed to be the neutral. Using the tester is the only way to guarantee that contact voltage [[tension_de_contacto]] is zero before starting work.

The protection [[margen]] of the 30 mA differential in the wet case would be about 0.39, below 1: the differential would not protect because current exceeds its threshold before contact can be considered safe.

Dominant variable: [[tension_de_contacto]] (uncertainty about which conductor carries voltage is the primary risk factor in maintenance without prior verification).

Validity limit: this analysis assumes unipolar contact (phase to ground through the body); bipolar contacts (phase to neutral through the body) are not detected by the differential and are equally lethal.

## 3. Installation design in high-risk premises (garages, workshops)

A domestic garage combines wet concrete floors, portable power tools with worn cables, and users who may simultaneously touch a tool with insulation failure and a grounded metal water or heating pipe. This scenario is functionally identical to the bathroom in terms of risk: [[resistencia_electrica_del_cuerpo_humano]] reduced by sweat and damp environment, and [[tension_de_contacto]] potentially equal to 230 V if the tool's insulation fails.

Protection measures that reduce risk operate directly on the variables of the [[corriente_a_traves_del_cuerpo]] equation. Reducing [[tension_de_contacto]] through the use of 24 V or 48 V tools (SELV safety transformers) lowers current below 24 mA or 48 mA respectively. Installing a 30 mA differential with response time < 20 ms guarantees disconnection before the fibrillation threshold for currents between 30 mA and 100 mA.

Professional workshops with three-phase machinery additionally require verifying that contact voltage in case of phase failure is the phase-to-ground voltage (230 V), not the line-to-line voltage (400 V), which would produce lethal currents even with high [[resistencia_electrica_del_cuerpo_humano]].

Dominant variable: resulting [[corriente_a_traves_del_cuerpo]], which must be kept below 30 mA through combination of [[tension_de_contacto]] reduction (SELV when possible) and high-sensitivity differential.

Validity limit: double-insulated tools (class II) eliminate the need for protective ground but do not reduce the risk of direct contact with live conductors; the differential remains necessary to detect leaks in fixed installation.

## 4. Inspection and verification of older installations

A 30-year-old domestic installation may have cables with aged and cracked PVC insulation, oxidized connections, and ground connections that do not meet the maximum 37 Ω resistance required by REBT. The deterioration of cable insulation (not body [[resistencia_electrica_del_cuerpo_humano]], but cable insulation resistance) accumulates leakage currents that consume the differential [[margen]].

If installation accumulated leakage is 20 mA and the main differential is 30 mA, the effective [[margen]] available to detect accidental contact is only 10 mA. Contact with [[resistencia_electrica_del_cuerpo_humano]] = 10,000 Ω (dry hands) at 230 V produces a body current [[corriente_a_traves_del_cuerpo]] of 23 mA: body current plus accumulated leakage gives 43 mA, exceeding the 30 mA threshold and producing a trip. But in a situation with a differential in poor condition due to aging (100 ms response time), exposure of 23 mA for 100 ms can produce serious muscle effects.

Periodic verification requires measuring total installation leakage current (must be < 15 mA in installations with 30 mA differential) and measuring ground resistance (< 37 Ω). Calculate effective protection [[margen]] as a function of differential sensitivity [[corriente_de_disparo_del_diferencial]], accumulated installation leakage, and expected body current.

Dominant variable: effective available [[corriente_de_disparo_del_diferencial]] (differential threshold minus accumulated installation leakage current).

Validity limit: installation leakage measurement must be done with all equipment connected and running, since filter capacitor leakage only appears with equipment switched on.

## 5. Protection of vulnerable users: children and pacemaker patients

The physiological thresholds of [[corriente_de_seguridad_maxima]] in IEC 60479 are defined for healthy adults. Children have lower body mass and higher body water proportion, which reduces [[resistencia_electrica_del_cuerpo_humano]] and lowers physiological danger thresholds. People with cardiac pacemakers are especially vulnerable because external current can interfere with the pacemaker's artificial electrical rhythm at currents as low as 1–2 mA.

For homes with young children, protection measures combine [[tension_de_contacto]] reduction (socket covers that prevent accidental contact) with high-sensitivity differential (10 mA). In child facilities (nurseries, schools), regulations require shuttered sockets and 10 mA differentials for all accessible circuits.

For pacemaker users, the [[corriente_a_traves_del_cuerpo]] threshold that can interfere with the device is much lower than the fibrillation threshold: interference risks are estimated at currents of 1–5 mA at 50 Hz. This means even contacts the 30 mA differential would not detect (currents of 5 mA < 30 mA) can represent risk for these people. The most effective measure is [[tension_de_contacto]] reduction through SELV systems (extra-low safety voltage, < 50 V) in areas where the user spends most time.

Dominant variable: user-specific [[corriente_de_seguridad_maxima]] (differs significantly from the standard value for vulnerable users), which determines the required differential and maximum admissible voltage.

Validity limit: the Ohm model for [[corriente_a_traves_del_cuerpo]] remains valid, but the danger threshold [[corriente_de_seguridad_maxima]] must be adjusted individually; standard analysis using IEC 60479 thresholds for healthy adults may underestimate risk for vulnerable users by a factor of 5–10.