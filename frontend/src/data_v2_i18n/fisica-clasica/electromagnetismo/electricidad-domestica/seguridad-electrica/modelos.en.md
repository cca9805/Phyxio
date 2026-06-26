## Ideal model

The standard model of domestic electrical safety treats the human body as a **pure and constant resistance** in the contact circuit. The installation is modeled as an ideal voltage source at 230 V AC with negligible internal impedance, and the contact between person and conductor is treated as a direct connection without transition resistances or contact impedances.

In this model, the conserved magnitudes are [[tension_de_contacto]], [[resistencia_electrica_del_cuerpo_humano]] and [[corriente_a_traves_del_cuerpo]], related by Ohm's Law. Ignored magnitudes include the temporal variation of [[resistencia_electrica_del_cuerpo_humano]] during contact, the inductive and capacitive reactance of the body, the resistance of shoes and floor, and the internal impedance of the grid. This simplification allows direct calculation of the maximum danger current using only two known parameters.

The physical meaning of the central simplification is conservatively designed: by assuming [[resistencia_electrica_del_cuerpo_humano]] = 1000 Ω (the normative worst case) the risk is overestimated. Protections designed with this hypothesis are valid for all real cases, even those with higher resistance.

## Hypotheses

- **Constant body resistance during contact**: [[resistencia_electrica_del_cuerpo_humano]] does not vary with time or current. If violated, burns destroy the resistive skin layer and [[resistencia_electrica_del_cuerpo_humano]] progressively decreases, increasing [[corriente_a_traves_del_cuerpo]] during exposure —the model underestimates risk in prolonged contacts.

- **Contact voltage equal to grid voltage (230 V)**: direct phase-to-ground contact is assumed without voltage drop across intermediate impedances. If violated —indirect contact through enclosure with ground resistance— [[tension_de_contacto]] may be lower than 230 V, but the model remains valid as an upper risk bound.

- **Alternating current at 50 Hz with unity power factor**: the body is modeled as pure resistance (without significant capacitance or inductance). If violated —very high or very low frequencies— physiological thresholds change: at frequencies > 100 kHz the skin effect reduces internal damage.

- **Left hand-to-feet path as reference**: the path with the highest cardiac risk factor is used. If the actual path is different, the effective risk may be lower, but the conservative model covers the worst case.

## Quantitative validity domain

The model is valid under the following quantitative conditions:

- **[[resistencia_electrica_del_cuerpo_humano]] ≥ 500 Ω**: below this value (extensive open wounds, mucous membranes) the constant resistance hypothesis is no longer conservative and the model may underestimate real risk.
- **[[tension_de_contacto]] between 50 V and 230 V**: below 50 V the risk is low and the model safely overestimates danger; above 230 V (transient overvoltages) an extended model is required.
- **Grid frequency 50–60 Hz**: IEC 60479 thresholds are specific to this band.
- **Exposure time < 1 s**: the static model is valid. For longer exposures, the variation of [[resistencia_electrica_del_cuerpo_humano]] with burns and tissue heating require a dynamic model.

The fundamental safety inequality is: [[corriente_a_traves_del_cuerpo]] < [[corriente_de_seguridad_maxima]], with [[corriente_de_seguridad_maxima]] = 30 mA for general domestic use.

## Model failure signals

- **Calculated current much above 230 mA**: at 230 V and [[resistencia_electrica_del_cuerpo_humano]] ≥ 1000 Ω, the theoretical maximum is 230 mA. If the calculation exceeds this value, input data is inconsistent with the standard domestic model.

- **Differential tripping repeatedly without apparent contact**: indicates that the sum of normal installation leakage currents exceeds the differential threshold, meaning the safety margin for actual contact is nearly zero. The static model does not capture this accumulated degradation situation.

- **No appreciable current on contact with grid voltage present**: may indicate that ground or shoe resistance is very high (insulating floor), in which case the model underestimates actual safety. May also indicate a floating neutral or a phase with no effective return to ground.

- **Differential failing to trip with measured leakage above its threshold**: sign of a deteriorated differential or differential-mode current that cancels out (symmetric leakage circuit). The model assumes a perfectly functioning differential.

## Extended or alternative model

The extended model includes **complex body impedance** instead of pure resistance. At frequencies other than 50 Hz or under specific conditions, the human body presents significant capacitive reactance that reduces effective current at the same voltages.

The concrete difference from the ideal model is that [[resistencia_electrica_del_cuerpo_humano]] is replaced by body impedance Z (where reactance depends on frequency). At 50 Hz, reactance is small compared to resistance for long paths (hand-to-foot), so the pure resistive model is an excellent approximation.

**Explicit transition**: Switch to the extended model with complex impedance when:
- Source frequency exceeds 1 kHz (telecommunications systems, variable speed drives)
- Risk is analyzed at small contact surfaces (fingertips), where skin capacitance is relevant even at 50 Hz
- Working with direct current, where reactance disappears but electrolytic effects appear that the resistive model does not capture

## Operational comparison

| Aspect | Ideal resistive model | Complex impedance model |
|---|---|---|
| **Body parameter** | [[resistencia_electrica_del_cuerpo_humano]] constant (1000 Ω) | Frequency-variable impedance |
| **Current relation** | Body current calculated by standard Ohm's Law | Current calculated using the impedance modulus |
| **Thresholds used** | IEC 60479 (50 Hz) | Frequency-adjusted thresholds |
| **Accuracy at 50 Hz** | High (error < 5% under normal conditions) | Maximum (calculation reference) |
| **Complexity** | Minimal, hand-calculable | Requires Z value per frequency |
| **Recommended use** | Domestic design and verification | Analysis of variable-frequency systems |
| **Conservatism** | Overestimates risk (safe by design) | More accurate but may underestimate in some cases |