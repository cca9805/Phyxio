# Exam-type example


## Problem statement

In a domestic electrical safety inspection, two suspect connection points are evaluated:

- **Point A**: Kitchen outlet with [[corriente_electrica]] = 10 A, estimated contact resistance [[resistencia_electrica_local]] = 0.08 Ω, typical usage time 2 h/day.
- **Point B**: Desktop power strip with [[corriente_electrica]] = 7 A, estimated contact resistance [[resistencia_electrica_local]] = 0.20 Ω, usage time 6 h/day.

Intervention must be prioritized by determining which represents greater accumulated thermal risk.

## Data

The numerical values are example data, not new Phyxio magnitudes. The magnitudes involved are:
- Electric current [[corriente_electrica]] flowing through each point
- Contact resistance [[resistencia_electrica_local]] estimated by connector condition
- Daily usage time [[tiempo_de_exposicion]] according to usage habits
- Thermal power [[potencia_termica_disipada]] to be calculated
- Daily thermal energy [[energia_termica_acumulada]] as indicator of accumulated damage

## System definition

The system considers each connection point as a local resistance [[resistencia_electrica_local]] through which current [[corriente_electrica]] flows, dissipating thermal power [[potencia_termica_disipada]]. Accumulated energy [[energia_termica_acumulada]] allows comparing risk between points with different usage profiles.

The physical question is which point accumulates more daily thermal energy, not which has greater instantaneous power.

## Physical model

The thermal power dissipation model is applied:

{{f:potencia_joule}}

To evaluate accumulated thermal damage, total dissipated energy is calculated:

{{f:energia_joule}}

The physical model considers fundamental system quantities such as [[capacidad_termica]], [[corriente_electrica]], [[diferencia_de_potencia_termica]].


## Model justification

The model is reasonable for metallic connections in direct current or alternating current regime with stable RMS value. Contact resistance can be estimated visually (oxide, looseness) or measured in open circuit.

The model would cease to be sufficient if resistance varies significantly with temperature, if there are rapid thermal transients, or if usage time is very irregular. In those cases, the extended model with thermal dependence would be necessary.

## Symbolic solution

For point A:
- Thermal power: [[potencia_termica_disipada]]_A = [[corriente_electrica]]_A² · [[resistencia_electrica_local]]_A
- Daily energy: [[energia_termica_acumulada]]_A = [[potencia_termica_disipada]]_A · [[tiempo_de_exposicion]]_A
- Thermal rise: [[incremento_de_temperatura]]_A = [[potencia_termica_disipada]]_A · [[resistencia_termica]]_A

For point B:
- Thermal power: [[potencia_termica_disipada]]_B = [[corriente_electrica]]_B² · [[resistencia_electrica_local]]_B
- Daily energy: [[energia_termica_acumulada]]_B = [[potencia_termica_disipada]]_B · [[tiempo_de_exposicion]]_B
- Thermal rise: [[incremento_de_temperatura]]_B = [[potencia_termica_disipada]]_B · [[resistencia_termica]]_B

Comparison of [[energia_termica_acumulada]] determines which point accumulates more daily thermal damage. The thermal rise [[incremento_de_temperatura]] indicates the surface temperature reached and its detectability by touch.

{{f:energia_joule}}

{{f:incremento_termico}}


## Numerical substitution

**Point A (kitchen):**

{{f:potencia_joule}}

For power, squaring 10 A and multiplying by 0.08 Ω gives approximately 8 W. Thus [[potencia_termica_disipada]] ≈ 8 W.

{{f:energia_joule}}

For energy, multiply 8 W by 7200 seconds (2 hours), giving approximately 57.6 kJ daily. Thus [[energia_termica_acumulada]] ≈ 57.6 kJ/day.

**Point B (desktop):**

{{f:potencia_joule}}

For power, squaring 7 A and multiplying by 0.20 Ω gives approximately 9.8 W. Thus [[potencia_termica_disipada]] ≈ 9.8 W.

{{f:energia_joule}}

For energy, multiply 9.8 W by 21,600 seconds (6 hours), giving approximately 211.7 kJ daily. Thus [[energia_termica_acumulada]] ≈ 211.7 kJ/day.

**Thermal rise calculation (point B):**

{{f:incremento_termico}}

For thermal rise, multiplying 9.8 W by the estimated thermal resistance (3.5 K/W) gives approximately 34.3 K. Thus [[incremento_de_temperatura]]_B ≈ 34 K above ambient temperature, clearly detectable by touch as "hot".

## Dimensional validation

Dimensional validation is coherent:
- Power units: A² · Ω resolve to W through dimensional analysis `[M L² T⁻³]`
- Energy units: watt-second equivalent to J (joule), verified by dimensional homogeneity `[M L² T⁻²]`

Dimensional breakdown:
- Current squared times resistance: `[I]² · [M L² T⁻³ I⁻²] = [M L² T⁻³]` ✓
- Power times time: `[M L² T⁻³] · [T] = [M L² T⁻²]` ✓

Comparison of accumulated energies is direct since both have the same units (kJ/day).

## Physical interpretation

The quantitative result reveals an apparent physical paradox: point B accumulates 3.7 times more daily thermal energy than point A (211.7 kJ vs 57.6 kJ), despite having only 70% of the current (7 A vs 10 A). This inversion of expectations arises from the quadratic nature of power ([[potencia_termica_disipada]] ∝ [[corriente_electrica]]²) combined with the linear dependence on resistance and time.

Physically, point B suffers significantly greater "thermal dose" because the degraded contact resistance (0.20 Ω vs 0.08 Ω) raises its dissipated power to 9.8 W compared to 8 W for point A, more than compensating for the lower current. Furthermore, the prolonged usage time (6 h vs 2 h) multiplies this effect, transforming a moderate power advantage (22% higher) into an overwhelming accumulated energy difference (268% higher). This demonstrates that thermal damage is not a function of instantaneous "intensity" but of the total "dose" of heat transferred to the system.

The calculated thermal rise ([[incremento_de_temperatura]]_B ≈ 34 K) provides a second physically observable warning signal: a connector at ~59 °C (assuming 25 °C ambient) is clearly detectable by human touch as "hot" or "warm intense". This persistent thermal elevation during 6 hours daily induces cyclic thermal stress in the insulating material, accelerating its chemical and mechanical degradation. In contrast, point A ([[incremento_de_temperatura]]_A ≈ 28 K) is also hot (~53 °C), but its limited exposure (2 h) reduces accumulated damage.

**Parameter variation implications**: If point B's resistance were reduced to point A's value (0.08 Ω) through tightening or replacement, its power would drop to ~3.9 W and daily energy to ~84 kJ, making it comparable to point A. This illustrates the high sensitivity of thermal risk to contact resistance, and explains why simple interventions (cleaning, tightening) can dramatically reduce risk without modifying the electrical load ([[corriente_electrica]]).

**Physical prioritization**: The intervention criterion should be based primarily on accumulated [[energia_termica_acumulada]], not instantaneous [[potencia_termica_disipada]] or measured [[corriente_electrica]]. Point B requires immediate attention because its accumulated thermal damage can induce accelerated degradation of the insulator, progressive carbonization of the connector, and eventual failure through electrical arcing or fire. Point A, although operating at higher instantaneous temperature, presents lower accumulated risk due to its brief use, remaining second in priority though with recommended monitoring.

# Real-world example


## Context

María performs preventive maintenance at home after noticing that a desktop power strip is "warm" after several hours of use. She decides to quantitatively evaluate the risk before and after replacing the degraded connector.

**Initial data (before intervention):**
- Measured current: [[corriente_electrica]] = 7 A (typical use)
- Estimated contact resistance: [[resistencia_electrica_local]]_before = 0.20 Ω (oxidized/loosened contact)

**After replacing the connector:**
- Current: [[corriente_electrica]] = 7 A (same load)
- Measured contact resistance: [[resistencia_electrica_local]]_after = 0.06 Ω (new connector properly tightened)

## Physical estimation

Thermal power before intervention:

{{f:potencia_joule}}

For power before intervention, squaring 7 A and multiplying by 0.20 Ω gives approximately 9.8 W. Thus [[potencia_termica_disipada]]_before ≈ 9.8 W.

Thermal power after intervention:

{{f:potencia_joule}}

For power after intervention, squaring 7 A and multiplying by 0.06 Ω gives approximately 2.94 W. Thus [[potencia_termica_disipada]]_after ≈ 2.94 W.

Reduction in dissipated power:

Subtracting the power values (9.8 W minus 2.94 W) yields 6.86 W reduction. Thus [[diferencia_de_potencia_termica]] ≈ 6.86 W.

Percentage reduction: (6.86 / 9.8) × 100% = 70%

## Interpretation

Connector replacement reduces dissipated thermal power by 70%, going from almost 10 W to less than 3 W. This reduction:

1. **Decreases thermal rise**: With [[resistencia_termica]] ≈ 3.5 K/W, temperature drops from approximately 34 K to 10 K above ambient.

2. **Reduces fire risk**: The new connector operates within safe range, while the previous one was in moderate-high risk zone.

3. **Improves efficiency**: Although "saved" energy is not recoverable, parasitic consumption and cable deterioration are reduced.

Quantitative verification confirms that the preventive maintenance measure was effective, justifying the cost of technical intervention.

## Common Errors Avoided

- Not creating auxiliary magnitudes for each point (use suffixes A and B)
- Not confusing instantaneous power with accumulated energy
- Considering exposure time as critical factor
- Not assuming that higher current always implies greater risk

---