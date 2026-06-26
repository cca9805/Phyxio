## Ideal model

The ideal switch model assumes that in OFF state the resistance is infinite (open circuit, [[corriente_de_maniobra]] = 0) and in ON state the resistance is zero ([[resistencia_en_estado_on]] = 0, [[perdida_resistiva_en_on]] = 0, [[energia_disipada_en_conduccion]] = 0). The ideal switch does not alter the circuit in either state: it neither consumes energy nor generates a voltage drop.

This model is the conceptual reference point. Any deviation from it — [[resistencia_en_estado_on]] > 0 in ON, leakage current in OFF — represents an imperfection of the real device.

## Hypotheses

- Steady state: current [[corriente_de_maniobra]] is constant throughout the conduction period [[t_on]].
- Purely resistive load: [[potencia_de_la_carga]] = [[tension_de_alimentacion]] · [[corriente_de_maniobra]], unity power factor.
- [[resistencia_en_estado_on]] is constant with temperature and conduction time (static model).
- Opening and closing transients (electric arcs) are not modelled.
- Leakage current in OFF state is negligible.

## Quantitative validity domain

The static model is valid when the following conditions are simultaneously met:
- Steady state: stable duty cycle, no frequent load changes.
- Power factor ≥ 0.9 (nearly resistive loads).
- [[corriente_de_maniobra]] ≤ I_nominal of the switch (no overcurrent).
- [[resistencia_en_estado_on]] ≤ 0.5 Ω (for higher values, heating may be non-linear due to thermal expansion of the contact).

**Quantitative risk condition:** [[perdida_resistiva_en_on]] ≥ 1 W indicates noticeable heating in continuous use. [[perdida_resistiva_en_on]] ≥ 5 W is a risk condition requiring inspection. With [[corriente_de_maniobra]] = 10 A and [[resistencia_en_estado_on]] = 0.05 Ω, [[perdida_resistiva_en_on]] = 5 W — critical threshold. With [[resistencia_en_estado_on]] = 0.1 Ω, [[perdida_resistiva_en_on]] = 10 W — already in replacement zone.

## Model failure signals

The static [[resistencia_en_estado_on]] model fails or is insufficient when:
- The switch heats up with low calculated [[perdida_resistiva_en_on]]: indicates actual [[resistencia_en_estado_on]] is higher than estimated, or intermittent arcs are present.
- Heating is intermittent and uncorrelated with [[corriente_de_maniobra]] level: may indicate mechanically unstable contact.
- Switch temperature rises faster than predicted by [[perdida_resistiva_en_on]] · time: indicates the enclosure thermal resistance is higher than expected (reduced ventilation).
- Switch fails in OFF (does not cut correctly): indicates contact degradation not captured by static [[resistencia_en_estado_on]] in ON.

## Extended or alternative model

The extended model incorporates:
1. **Temperature-dependent [[resistencia_en_estado_on]]**: [[resistencia_en_estado_on]](T) = [[resistencia_en_estado_on]](T₀) · (1 + α·ΔT), where α is the thermal resistance coefficient of the contact (copper: α ≈ 0.004 K⁻¹).
2. **Arc energy per operation**: each open-close cycle dissipates arc energy E_arc depending on [[corriente_de_maniobra]] and circuit voltage. For domestic switches, E_arc ≈ 1–10 mJ per operation.
3. **Inrush current**: for inductive loads, the peak current during start-up is several times nominal [[corriente_de_maniobra]] for a brief transient. The transient energy depends on the peak current, [[resistencia_en_estado_on]], and transient duration.

## Operational comparison

| Situation | Appropriate model | Critical variable |
|-----------|------------------|-------------------|
| Resistive load, occasional use | Ideal model ([[resistencia_en_estado_on]] ≈ 0) | Nominal [[corriente_de_maniobra]] |
| Resistive load, continuous use | Static model [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]] | [[perdida_resistiva_en_on]], [[energia_disipada_en_conduccion]] |
| Inductive load, start-up | Extended model with I_peak | Arc energy per operation |
| Frequent cycling (thermostat) | Extended model with accumulated degradation | N_operations, E_total |

## When to switch models

The transition to the extended model — when to change models — is justified in the following cases:
- Inductive load with high inrush (motor, transformer): current peaks during the transient exceed nominal [[corriente_de_maniobra]] by a factor of 5–10, causing arc degradation that dominates over stationary loss [[perdida_resistiva_en_on]].
- Very frequent cycling (> 100 operations/hour): accumulated arc degradation exceeds steady-state conduction loss.
- Measured [[resistencia_en_estado_on]] exceeds 0.5 Ω: the linear model no longer accurately predicts contact temperature.
- Heating symptoms with calculated [[perdida_resistiva_en_on]] < 1 W: the static model underestimates reality.

In those cases, analysis must consider the energy dissipated in each open/close arc, the load inrush current, and the switching frequency.