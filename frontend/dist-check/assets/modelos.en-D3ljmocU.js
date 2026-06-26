const e=`# Physical models of switches\r
\r
## Ideal model\r
\r
The ideal switch model assumes that in OFF state the resistance is infinite (open circuit, [[I]] = 0) and in ON state the resistance is zero ([[R_on]] = 0, [[P_on]] = 0, [[E_on]] = 0). The ideal switch does not alter the circuit in either state: it neither consumes energy nor generates a voltage drop.\r
\r
This model is the conceptual reference point. Any deviation from it — [[R_on]] > 0 in ON, leakage current in OFF — represents an imperfection of the real device.\r
\r
## Hypotheses\r
\r
- Steady state: current [[I]] is constant throughout the conduction period [[t_on]].\r
- Purely resistive load: [[P]] = [[V]] · [[I]], unity power factor.\r
- [[R_on]] is constant with temperature and conduction time (static model).\r
- Opening and closing transients (electric arcs) are not modelled.\r
- Leakage current in OFF state is negligible.\r
\r
## Quantitative validity domain\r
\r
The static model is valid when the following conditions are simultaneously met:\r
- Steady state: stable duty cycle, no frequent load changes.\r
- Power factor ≥ 0.9 (nearly resistive loads).\r
- [[I]] ≤ I_nominal of the switch (no overcurrent).\r
- [[R_on]] ≤ 0.5 Ω (for higher values, heating may be non-linear due to thermal expansion of the contact).\r
\r
**Quantitative risk condition:** [[P_on]] ≥ 1 W indicates noticeable heating in continuous use. [[P_on]] ≥ 5 W is a risk condition requiring inspection. With [[I]] = 10 A and [[R_on]] = 0.05 Ω, [[P_on]] = 5 W — critical threshold. With [[R_on]] = 0.1 Ω, [[P_on]] = 10 W — already in replacement zone.\r
\r
## Model failure signals\r
\r
The static [[R_on]] model fails or is insufficient when:\r
- The switch heats up with low calculated [[P_on]]: indicates actual [[R_on]] is higher than estimated, or intermittent arcs are present.\r
- Heating is intermittent and uncorrelated with [[I]] level: may indicate mechanically unstable contact.\r
- Switch temperature rises faster than predicted by [[P_on]] · time: indicates the enclosure thermal resistance is higher than expected (reduced ventilation).\r
- Switch fails in OFF (does not cut correctly): indicates contact degradation not captured by static [[R_on]] in ON.\r
\r
## When to switch models\r
\r
The transition to the extended model — when to change models — is justified in the following cases:\r
- Inductive load with high inrush (motor, transformer): current peaks during the transient exceed nominal [[I]] by a factor of 5–10, causing arc degradation that dominates over stationary loss [[P_on]].\r
- Very frequent cycling (> 100 operations/hour): accumulated arc degradation exceeds steady-state conduction loss.\r
- Measured [[R_on]] exceeds 0.5 Ω: the linear model no longer accurately predicts contact temperature.\r
- Heating symptoms with calculated [[P_on]] < 1 W: the static model underestimates reality.\r
\r
In those cases, analysis must consider the energy dissipated in each open/close arc, the load inrush current, and the switching frequency.\r
\r
## Extended or alternative model\r
\r
The extended model incorporates:\r
1. **Temperature-dependent [[R_on]]**: [[R_on]](T) = [[R_on]](T₀) · (1 + α·ΔT), where α is the thermal resistance coefficient of the contact (copper: α ≈ 0.004 K⁻¹).\r
2. **Arc energy per operation**: each open-close cycle dissipates arc energy E_arc depending on [[I]] and circuit voltage. For domestic switches, E_arc ≈ 1–10 mJ per operation.\r
3. **Inrush current**: for inductive loads, the peak current during start-up is several times nominal [[I]] for a brief transient. The transient energy depends on the peak current, [[R_on]], and transient duration.\r
\r
## Operational comparison\r
\r
| Situation | Appropriate model | Critical variable |\r
|-----------|------------------|-------------------|\r
| Resistive load, occasional use | Ideal model ([[R_on]] ≈ 0) | Nominal [[I]] |\r
| Resistive load, continuous use | Static model [[P_on]] = [[I]]² · [[R_on]] | [[P_on]], [[E_on]] |\r
| Inductive load, start-up | Extended model with I_peak | Arc energy per operation |\r
| Frequent cycling (thermostat) | Extended model with accumulated degradation | N_operations, E_total |\r
`;export{e as default};
