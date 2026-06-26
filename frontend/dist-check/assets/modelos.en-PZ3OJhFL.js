const e=`# Physical models of plugs and sockets\r
\r
## Ideal model\r
\r
The ideal socket model treats metallic contacts as perfect conductors with [[R_contacto]] = 0 and therefore [[P_perdida]] = 0. In this model, total current [[I_tot]] flows without loss from the plug pin to the circuit conductor. The socket acts only as a mechanical switch and connection point with no inherent thermal effect.\r
\r
This ideal model is the reference point for defining the concept of overload: when [[I_tot]] exceeds [[I_max]], the design limit of the component is exceeded, regardless of [[R_contacto]].\r
\r
## Hypotheses\r
\r
- Metallic contacts are perfect conductors in the ideal model.\r
- All parasitic resistance of the circuit is concentrated in [[R_contacto]] when the model includes contact losses.\r
- Loads are purely resistive with unity power factor.\r
- Current is sinusoidal AC and its RMS value is used.\r
- Regime is steady state: startup transients and intermittent cycles are not modelled.\r
- [[P_tot]] = sum of nominal powers with simultaneity factor = 1 (worst case).\r
\r
## Quantitative validity domain\r
\r
The model is valid when all of the following are simultaneously satisfied:\r
- Steady state: operating time > 30 minutes without load changes.\r
- Power factor ≥ 0.85 for connected loads.\r
- [[I_tot]] ≤ 2 · [[I_max]] (for smaller simultaneity factors, actual current may be lower).\r
- [[R_contacto]] ≤ 1 Ω (for higher values, the localised Joule model may underestimate actual contact temperature).\r
\r
**Quantitative risk condition:** [[margen_uso]] ≥ 0.8 in continuous use (more than 2 hours) activates the monitoring zone. [[margen_uso]] ≥ 1 indicates active overload requiring immediate action. [[P_perdida]] ≥ 1 W indicates appreciable contact dissipation; [[P_perdida]] ≥ 5 W is a severe thermal risk condition.\r
\r
## Model failure signals\r
\r
The localised Joule model fails or is insufficient when:\r
- The plug warms appreciably with [[I_tot]] well below [[I_max]]: indicates very high [[R_contacto]], possibly due to incomplete insertion or heavily oxidised contact.\r
- Plug temperature fluctuates without load changes: may indicate intermittent contact generating local electric arcs, a phenomenon not modelled by static resistance.\r
- Heating appears in only one pole (phase or neutral) and not the other: indicates asymmetry of [[R_contacto]] between the two plug contacts.\r
- Symptoms appear only after motor startup (compressor, pump): the startup transient can generate [[I_tot]] peak much higher than nominal, heating the contact even if steady-state current is within limits.\r
\r
These observable failure signals indicate the static model is insufficient and physical contact inspection is required.\r
\r
## Extended or alternative model\r
\r
When the static model is insufficient, it can be extended by incorporating:\r
1. **Thermal resistance from contact to environment**: allows predicting actual contact temperature as a function of [[P_perdida]] and ventilation conditions. Requires manufacturer data (thermal resistance in K/W).\r
2. **Intermittent electric arc model**: when the contact is severely degraded, it may generate micro-arcs that dissipate energy non-linearly. This model requires current signal analysis, not just RMS value.\r
3. **Actual simultaneity factor**: instead of assuming all devices powered at maximum simultaneously, the probability of all being on at the same time can be estimated using statistical usage distributions.\r
\r
The transition to the extended model is justified when the simple model predicts safety but observable physical heating symptoms are present.\r
\r
## Operational comparison\r
\r
| Situation | Appropriate model | Critical variable |\r
|-----------|------------------|------------------|\r
| Preventive check (no symptoms) | Usage ratio model | [[margen_uso]] |\r
| Heating under normal load | Joule model + [[R_contacto]] | [[P_perdida]], [[R_contacto]] |\r
| Intermittent heating | Arc model (technician required) | Physical inspection |\r
| New strip design | Full model with [[P_max]] | [[I_max]], [[P_max]] |\r
\r
In domestic practice, the [[margen_uso]] model and the localised Joule model cover more than 90% of diagnostic cases without specific instrumentation.\r
`;export{e as default};
