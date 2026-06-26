const e=`# Risk and Precaution Models

## Ideal Model

The **ideal risk assessment model** represents local electrical risk as the product of dissipated thermal power [[P_joule]] by exposure time [[t]], allowing quantification of accumulated thermal damage [[E_joule]]. In this simplified model:

{{f:potencia_joule}}

{{f:energia_joule}}

The central simplification assumes that contact resistance [[R]] remains constant during the considered interval, and that current [[I]] is the representative RMS value of usage. Variations of resistance with temperature, thermal transients, and dependence of thermal resistance [[R_th]] on ambient dissipation conditions are ignored.

## Hypotheses

- **Constant resistance hypothesis**: Contact resistance [[R]] does not vary appreciably with temperature during the evaluation period. If violated (significant heating), resistance increases and the model underestimates real risk.

- **Stationary regime hypothesis**: Thermal power [[P_joule]] is constant or varies slowly with respect to the system's thermal time constant. If violated (rapid transients), real temperature differs from estimated.

- **Known thermal resistance hypothesis**: The value [[R_th]] can be reasonably estimated for the type of connection. If unknown, thermal rise [[DeltaT]] can only be determined by direct measurement.

- **Measurable current hypothesis**: Current [[I]] can be determined with clamp multimeter or estimated from connected load. If not measurable, calculation of [[P_joule]] depends on resistance estimates.

- **Thermal independence hypothesis**: Each connection point is evaluated independently, without considering heat transfer between nearby points. Valid when points are separated > 10 cm.

## Quantitative Validity Domain

The ideal model is applicable when the following conditions are met:

- **Stable resistance**: Variation of [[R]] less than 20 % during the evaluation period. Contacts in good condition or slightly degraded.

- **Representative current**: Current [[I]] varying less than ±30 % from the mean value during typical usage.

- **Moderate temperature**: Thermal rise [[DeltaT]] below 60 K, where resistance changes with temperature are still moderate.

- **Validity inequality**: The model is valid when the system's thermal time constant is much smaller than exposure time [[t]].

- **Quasi-stationary regime**: Load variations with periods greater than 10 minutes, allowing temperature to follow dissipated power.

## Model Failure Signals

The ideal model ceases to be applicable when these symptoms appear:

- **Very high thermal rise**: [[DeltaT]] > 60 K indicates that resistance has probably increased significantly with temperature.

- **Smell of hot plastic**: Signal that temperature has exceeded the degradation limit of insulating material (> 80-100 °C).

- **Rapid temperature variation**: Changes of more than 10 K in less than 5 minutes indicate thermal transient not captured by stationary model.

- **Increasing resistance measurement**: If [[R]] measured cold differs significantly from that estimated hot, the model underestimates risk.

- **Visible carbonization**: Evidence that temperature has exceeded 150 °C, invalidating linear behavior hypotheses.

## Extended or Alternative Model

The **extended thermal assessment model** incorporates dependence of electrical resistance on temperature and considers thermal transient regime. In this model:

- Resistance [[R]] is modeled as linear function of temperature: R(T) = R₀[1 + α(T - T₀)]
- Temperature follows a first-order differential equation: the thermal rise rate [[DeltaT]]/[[t]] = ([[P_joule]]/[[C_th]]) - ([[DeltaT]]/([[R_th]]·[[C_th]]))
- Thermal capacity [[C_th]] of the system must be known, in addition to thermal resistance [[R_th]]

This model is necessary when thermal rises exceeding 40 K are observed or when the system experiences frequent load/disconnection cycles.

## Transition Between Models

### When to Change Models

The transition from **ideal model** to **extended model** should be made when:

- **Persistent high thermal rise**: When [[DeltaT]] exceeds 40 K stably, indicating probable resistance increase with temperature.

- **Frequent thermal cycles**: When the connection point experiences more than 5 on/off cycles per hour, generating significant thermal transients.

- **Degraded material**: When discoloration, deformation, or smell is observed in insulating material, indicating that thermal/electrical properties have changed.

- **Thermal improvement evaluation**: When wanting to predict the effect of improving dissipation (ventilation, material change), requiring the complete model with [[C_th]] and [[R_th]].

- **Normative certification**: For formal technical documentation that must include safety margins calculated with greater precision.

### How to Perform the Transition

The model change consists of:

1. **Measure resistance cold and hot**: Determine temperature coefficient α experimentally.

2. **Estimate thermal capacity [[C_th]]**: From mass and material of connector, or through transient response test.

3. **Solve the thermal differential equation**: Numerically or analytically for typical load profiles.

4. **Verify with direct temperature measurement**: Compare extended model predictions with infrared thermometer readings.

## Operational Comparison

| Criterion | Ideal Model | Extended Model |
|:---|:---|:---|
| **Accuracy** | High (error < 15 %) for ΔT < 40 K | Very high (error < 5 %) considering non-linearities |
| **Complexity** | Low. Simple algebraic calculations | Medium. Requires solving differential equations |
| **Application range** | Routine preventive maintenance | Fault diagnosis, certification, thermal improvements |
| **Required variables** | [[I]], [[R]], [[t]], [[R_th]] estimated | [[I]](t), R(T), [[C_th]], [[R_th]] precise |
| **Typical validity** | Power strips, plugs in normal use | Critical points, industrial installations |
| **Main advantage** | Speed and simplicity of calculation | Realistic precision for extreme conditions |
| **Main limitation** | Underestimates risk at high temperature | Requires additional data difficult to obtain |
| **When to use** | Routine evaluation, rapid prioritization | Detailed analysis, improvement design, certification |

The ideal model is sufficient for most domestic preventive evaluations. The extended model is only necessary when significant anomalies are detected (smell, deformation, thermal rise > 40 K) or in professional applications where complete precision justifies the additional effort of thermal characterization.
`;export{e as default};
