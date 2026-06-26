## Ideal model

The **ideal risk assessment model** represents local electrical risk as the product of dissipated thermal power [[potencia_termica_disipada]] by exposure time [[tiempo_de_exposicion]], allowing quantification of accumulated thermal damage [[energia_termica_acumulada]]. In this simplified model:

{{f:potencia_joule}}

{{f:energia_joule}}

The central simplification assumes that contact resistance [[resistencia_electrica_local]] remains constant during the considered interval, and that current [[corriente_electrica]] is the representative RMS value of usage. Variations of resistance with temperature, thermal transients, and dependence of thermal resistance [[resistencia_termica]] on ambient dissipation conditions are ignored.

## Hypotheses

- **Constant resistance hypothesis**: Contact resistance [[resistencia_electrica_local]] does not vary appreciably with temperature during the evaluation period. If violated (significant heating), resistance increases and the model underestimates real risk.

- **Stationary regime hypothesis**: Thermal power [[potencia_termica_disipada]] is constant or varies slowly with respect to the system's thermal time constant. If violated (rapid transients), real temperature differs from estimated.

- **Known thermal resistance hypothesis**: The value [[resistencia_termica]] can be reasonably estimated for the type of connection. If unknown, thermal rise [[incremento_de_temperatura]] can only be determined by direct measurement.

- **Measurable current hypothesis**: Current [[corriente_electrica]] can be determined with clamp multimeter or estimated from connected load. If not measurable, calculation of [[potencia_termica_disipada]] depends on resistance estimates.

- **Thermal independence hypothesis**: Each connection point is evaluated independently, without considering heat transfer between nearby points. Valid when points are separated > 10 cm.

## Quantitative validity domain

The ideal model is applicable when the following conditions are met:

- **Stable resistance**: Variation of [[resistencia_electrica_local]] less than 20 % during the evaluation period. Contacts in good condition or slightly degraded.

- **Representative current**: Current [[corriente_electrica]] varying less than ±30 % from the mean value during typical usage.

- **Moderate temperature**: Thermal rise [[incremento_de_temperatura]] below 60 K, where resistance changes with temperature are still moderate.

- **Validity inequality**: The model is valid when the system's thermal time constant is much smaller than exposure time [[tiempo_de_exposicion]].

- **Quasi-stationary regime**: Load variations with periods greater than 10 minutes, allowing temperature to follow dissipated power.

## Model failure signals

The ideal model ceases to be applicable when these symptoms appear:

- **Very high thermal rise**: [[incremento_de_temperatura]] > 60 K indicates that resistance has probably increased significantly with temperature.

- **Smell of hot plastic**: Signal that temperature has exceeded the degradation limit of insulating material (> 80-100 °C).

- **Rapid temperature variation**: Changes of more than 10 K in less than 5 minutes indicate thermal transient not captured by stationary model.

- **Increasing resistance measurement**: If [[resistencia_electrica_local]] measured cold differs significantly from that estimated hot, the model underestimates risk.

- **Visible carbonization**: Evidence that temperature has exceeded 150 °C, invalidating linear behavior hypotheses.

## Extended or alternative model

The **extended thermal assessment model** incorporates dependence of electrical resistance on temperature and considers thermal transient regime. In this model:

- Resistance [[resistencia_electrica_local]] is modeled as linear function of temperature: R(T) = R₀[1 + α(T - T₀)]
- Temperature follows a first-order differential equation: the thermal rise rate [[incremento_de_temperatura]]/[[tiempo_de_exposicion]] = ([[potencia_termica_disipada]]/[[capacidad_termica]]) - ([[incremento_de_temperatura]]/([[resistencia_termica]]·[[capacidad_termica]]))
- Thermal capacity [[capacidad_termica]] of the system must be known, in addition to thermal resistance [[resistencia_termica]]

This model is necessary when thermal rises exceeding 40 K are observed or when the system experiences frequent load/disconnection cycles.

## Operational comparison

| Criterion | Ideal Model | Extended Model |
|:---|:---|:---|
| **Accuracy** | High (error < 15 %) for ΔT < 40 K | Very high (error < 5 %) considering non-linearities |
| **Complexity** | Low. Simple algebraic calculations | Medium. Requires solving differential equations |
| **Application range** | Routine preventive maintenance | Fault diagnosis, certification, thermal improvements |
| **Required variables** | [[corriente_electrica]], [[resistencia_electrica_local]], [[tiempo_de_exposicion]], [[resistencia_termica]] estimated | [[corriente_electrica]](t), R(T), [[capacidad_termica]], [[resistencia_termica]] precise |
| **Typical validity** | Power strips, plugs in normal use | Critical points, industrial installations |
| **Main advantage** | Speed and simplicity of calculation | Realistic precision for extreme conditions |
| **Main limitation** | Underestimates risk at high temperature | Requires additional data difficult to obtain |
| **When to use** | Routine evaluation, rapid prioritization | Detailed analysis, improvement design, certification |

The ideal model is sufficient for most domestic preventive evaluations. The extended model is only necessary when significant anomalies are detected (smell, deformation, thermal rise > 40 K) or in professional applications where complete precision justifies the additional effort of thermal characterization.

## Transition Between Models

### When to Change Models

The transition from **ideal model** to **extended model** should be made when:

- **Persistent high thermal rise**: When [[incremento_de_temperatura]] exceeds 40 K stably, indicating probable resistance increase with temperature.

- **Frequent thermal cycles**: When the connection point experiences more than 5 on/off cycles per hour, generating significant thermal transients.

- **Degraded material**: When discoloration, deformation, or smell is observed in insulating material, indicating that thermal/electrical properties have changed.

- **Thermal improvement evaluation**: When wanting to predict the effect of improving dissipation (ventilation, material change), requiring the complete model with [[capacidad_termica]] and [[resistencia_termica]].

- **Normative certification**: For formal technical documentation that must include safety margins calculated with greater precision.

### How to Perform the Transition

The model change consists of:

1. **Measure resistance cold and hot**: Determine temperature coefficient α experimentally.

2. **Estimate thermal capacity [[capacidad_termica]]**: From mass and material of connector, or through transient response test.

3. **Solve the thermal differential equation**: Numerically or analytically for typical load profiles.

4. **Verify with direct temperature measurement**: Compare extended model predictions with infrared thermometer readings.