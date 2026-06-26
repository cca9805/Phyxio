## Ideal model

The ideal socket model treats metallic contacts as perfect conductors with [[resistencia_de_contacto]] = 0 and therefore [[potencia_disipada_en_el_contacto]] = 0. In this model, total current [[corriente_total_en_la_toma]] flows without loss from the plug pin to the circuit conductor. The socket acts only as a mechanical switch and connection point with no inherent thermal effect.

This ideal model is the reference point for defining the concept of overload: when [[corriente_total_en_la_toma]] exceeds [[corriente_maxima_nominal]], the design limit of the component is exceeded, regardless of [[resistencia_de_contacto]].

## Hypotheses

- Metallic contacts are perfect conductors in the ideal model.
- All parasitic resistance of the circuit is concentrated in [[resistencia_de_contacto]] when the model includes contact losses.
- Loads are purely resistive with unity power factor.
- Current is sinusoidal AC and its RMS value is used.
- Regime is steady state: startup transients and intermittent cycles are not modelled.
- [[potencia_total_simultanea]] = sum of nominal powers with simultaneity factor = 1 (worst case).

## Quantitative validity domain

The model is valid when all of the following are simultaneously satisfied:
- Steady state: operating time > 30 minutes without load changes.
- Power factor ≥ 0.85 for connected loads.
- [[corriente_total_en_la_toma]] ≤ 2 · [[corriente_maxima_nominal]] (for smaller simultaneity factors, actual current may be lower).
- [[resistencia_de_contacto]] ≤ 1 Ω (for higher values, the localised Joule model may underestimate actual contact temperature).

**Quantitative risk condition:** [[margen_uso]] ≥ 0.8 in continuous use (more than 2 hours) activates the monitoring zone. [[margen_uso]] ≥ 1 indicates active overload requiring immediate action. [[potencia_disipada_en_el_contacto]] ≥ 1 W indicates appreciable contact dissipation; [[potencia_disipada_en_el_contacto]] ≥ 5 W is a severe thermal risk condition.

## Model failure signals

The localised Joule model fails or is insufficient when:
- The plug warms appreciably with [[corriente_total_en_la_toma]] well below [[corriente_maxima_nominal]]: indicates very high [[resistencia_de_contacto]], possibly due to incomplete insertion or heavily oxidised contact.
- Plug temperature fluctuates without load changes: may indicate intermittent contact generating local electric arcs, a phenomenon not modelled by static resistance.
- Heating appears in only one pole (phase or neutral) and not the other: indicates asymmetry of [[resistencia_de_contacto]] between the two plug contacts.
- Symptoms appear only after motor startup (compressor, pump): the startup transient can generate [[corriente_total_en_la_toma]] peak much higher than nominal, heating the contact even if steady-state current is within limits.

These observable failure signals indicate the static model is insufficient and physical contact inspection is required.

## Extended or alternative model

When the static model is insufficient, it can be extended by incorporating:
1. **Thermal resistance from contact to environment**: allows predicting actual contact temperature as a function of [[potencia_disipada_en_el_contacto]] and ventilation conditions. Requires manufacturer data (thermal resistance in K/W).
2. **Intermittent electric arc model**: when the contact is severely degraded, it may generate micro-arcs that dissipate energy non-linearly. This model requires current signal analysis, not just RMS value.
3. **Actual simultaneity factor**: instead of assuming all devices powered at maximum simultaneously, the probability of all being on at the same time can be estimated using statistical usage distributions.

The transition to the extended model is justified when the simple model predicts safety but observable physical heating symptoms are present.

## Operational comparison

| Situation | Appropriate model | Critical variable |
|-----------|------------------|------------------|
| Preventive check (no symptoms) | Usage ratio model | [[margen_uso]] |
| Heating under normal load | Joule model + [[resistencia_de_contacto]] | [[potencia_disipada_en_el_contacto]], [[resistencia_de_contacto]] |
| Intermittent heating | Arc model (technician required) | Physical inspection |
| New strip design | Full model with [[potencia_maxima_nominal]] | [[corriente_maxima_nominal]], [[potencia_maxima_nominal]] |

In domestic practice, the [[margen_uso]] model and the localised Joule model cover more than 90% of diagnostic cases without specific instrumentation.