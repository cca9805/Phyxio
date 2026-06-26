const e=`# Capacitor models

## Ideal model

The **ideal capacitor model** describes a device with two flat parallel conducting plates of uniform effective area [[C_plana]], separated by a perfectly linear, homogeneous, and isotropic dielectric, with no losses or leakage current. In this model, the relation between [[Q]], [[C]] and [[V]] is exactly linear, and stored energy [[E_cap]] follows the formula with the 1/2 factor, with no losses at any stage of the charge–discharge cycle.

The model preserves the quantities [[C]], [[Q]], [[V]], and [[E_cap]] in their simplest form. It ignores series parasitic resistance (ESR), parasitic inductance (ESL), leakage currents through the dielectric, variation of permittivity [[epsilon]] with electric field and temperature, and fringe effects at the edges of the plates.

## Hypotheses

- **Uniform electric field between plates**: requires that separation d be much smaller than the lateral plate dimensions (\\(d \\ll \\sqrt{A}\\)). If violated, the field at the edges is non-uniform and actual capacitance is slightly higher than calculated with the [[C_plana]] formula from [[epsilon]], area, and separation.
- **Linear and isotropic dielectric**: polarization is proportional to the electric field in all directions. If violated (ferroelectric materials, PZT ceramics), capacitance depends on applied voltage and the relation between [[Q]] and [[V]] is nonlinear.
- **No dielectric losses**: dissipation factor is zero. If violated, part of the stored energy is converted to heat in each cycle; the stored energy formula overestimates recoverable energy.
- **No series resistance or parasitic inductance**: series equivalent resistance and series inductance both negligible. If violated, the capacitor does not behave as pure capacitance at high frequencies and real impedance is not purely reactive.
- **Voltage below breakdown voltage**: [[V]] must remain below the dielectric breakdown threshold. If violated, the dielectric conducts and the capacitor is irreversibly destroyed.

## Quantitative validity domain

The ideal model is a reasonable approximation when all of the following conditions are simultaneously met:

- **Geometric ratio**: separation must be at least 10 times smaller than the square root of the plate area, i.e., \\(d \\ll \\sqrt{A}\\).
- **Low frequency**: operating frequency must be much lower than self-resonant frequency \\(f_r\\). For typical ceramic capacitors, \\(f_r\\) is between 1 and 500 MHz; for electrolytic ones, between 10 and 100 kHz.
- **Temperature within rated range**: between −40°C and +85°C for most industrial capacitors. Outside this range, permittivity can vary by up to ±20%.
- **Service voltage**: operate below 50% of breakdown voltage for adequate safety margin against transient spikes.

## Model failure signals

- **Nonlinearity of Q vs V**: if plotting [[Q]] against [[V]] the data points do not fall on a straight line, the linear model no longer applies. This indicates that the permittivity [[epsilon]] of the dielectric depends on the field (nonlinear ceramic or ferroelectric material).
- **Capacitor heating during operation**: if the capacitor heats appreciably during repeated charge–discharge cycles, dielectric losses (tanδ > 0) are not negligible. The ideal model does not predict this heating.
- **Frequency-dependent capacitance**: if [[C]] measured with an LCR bridge decreases significantly as frequency rises, parasitic inductance ESL is relevant and the ideal model is no longer sufficient.
- **Measurable leakage current**: if a charged capacitor discharging through a very high resistance still delivers detectable current, there is leakage current through the dielectric (ideal model assumes it is zero).

## Extended or alternative model

The **series RLC equivalent model** adds to the ideal capacitor a series equivalent resistance and a series inductance. The resulting impedance has minimum magnitude at the self-resonant frequency \\(f_r\\) and grows above it. Above \\(f_r\\), inductance dominates and the component behaves as an inductor, not a capacitor.

The model can also be extended to include a parallel leakage resistance \\(R_p\\) modeling the dielectric leakage current. For electrolytic capacitors with high tanδ, this element is necessary to correctly predict charge loss in long-term voltage-hold circuits.

The **transition to the extended model is recommended when** the operating frequency exceeds 10% of the component's self-resonant frequency, when capacitor heating in use is measurable, or when leakage current is not negligible compared to the charging current (old or degraded electrolytic capacitors). In high-frequency filtering applications (> 1 MHz), switching to the RLC model is mandatory to correctly predict filter attenuation.

## Operational comparison

| Criterion | Ideal model | Extended RLC model |
|---|---|---|
| **Q–V relationship** | Exactly linear between charge and voltage | Linear only at low frequency |
| **Recoverable energy** | 100% of stored energy | Less due to series resistance and dissipation factor losses |
| **Impedance** | Purely reactive, decreases with frequency | Minimum at \\(f_r\\); inductive above |
| **Temperature** | No effect on C | C can vary ±5–20% depending on material |
| **Leakage current** | Zero | Modeled by R_p in parallel |
| **Complexity of use** | Minimal, one equation | Requires manufacturer datasheet |
| **Valid range** | DC up to ~10% of f_r | Full range including high frequency |
`;export{e as default};
