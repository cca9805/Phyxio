const e=`## Ideal model

The standard dielectric model treats the material as a **linear, homogeneous, and isotropic (LHI)** medium. In this model, the polarisation response is proportional to the applied electric field, [[epsilon_r]] is a constant scalar independent of field, position, and direction, and the capacitance [[C_d]] is simply [[epsilon_r]] times the vacuum capacitance [[C_0]].

The central simplification is that the material is a uniform continuum: no internal regions, boundaries, or dependence on past history are distinguished. The bound charges that produce polarisation are treated statistically as a homogeneous macroscopic density. The conserved quantities are the free charge on the plates and the geometry; the ignored ones are microscopic fluctuations and local polarisation gradients.

## Hypotheses

- **Linearity**: polarisation [[P_pol]] is proportional to field [[E_d]]. Doubling the field doubles the polarisation. Valid for fields well below the breakdown voltage.
  - If violated: the response saturates (ferroelectrics) or the material is destroyed (dielectric breakdown).
- **Homogeneity**: [[epsilon_r]] is equal at all points of the material. No internal gradients of composition or density exist.
  - If violated: the field is non-uniform inside and the parallel-plate model does not apply directly.
- **Isotropy**: the polarisation response is the same in all directions. [[epsilon_r]] is a scalar, not a tensor.
  - If violated (anisotropic crystals): [[epsilon_r]] becomes a tensor and the resultant field is not parallel to the applied field.
- **Static or quasi-static regime**: [[epsilon_r]] is constant with frequency. Polarisation follows the field without phase lag.
  - If violated (high frequency): dielectric losses appear and capacitance depends on signal frequency.
- **Perfect dielectric**: no conduction currents inside the material; [[epsilon_r]] is real and positive.
  - If violated: the material has resistive losses and the capacitor impedance has a real component.

## Quantitative validity domain

The LHI model is quantitatively valid when the field [[E_d]] inside the material satisfies the inequality:

[[E_d]] ≪ breakdown field of the selected material

For air the breakdown field is approximately 3 MV/m. For glass, between 10 and 100 MV/m. For polypropylene, between 30 and 150 MV/m. Safe design requires operating below 20–30 % of this limit.

Regarding frequency, the model is valid for DC and AC signals up to approximately 10 kHz for ceramic materials and up to several GHz for low-loss polymers. Above these frequencies, dielectric dispersion causes [[epsilon_r]] to vary significantly.

## Model failure signals

- **Effective [[epsilon_r]] below the tabulated value**: the dielectric does not completely fill the gap, or air bubbles reduce the effective constant.
- **Detectable leakage current**: if the capacitor loses charge at constant voltage, the material has residual conductivity that the ideal model ignores.
- **[[C_d]] depends on the applied voltage**: in ferroelectrics or materials near their Curie temperature, [[epsilon_r]] varies with the field and the linear model fails. The student can detect this by measuring [[C_d]] at different voltages.
- **[[C_d]] drops sharply at a certain frequency**: orientational polarisation cannot follow the field at high frequency and [[epsilon_r]] decreases abruptly in the dielectric relaxation band.
- **Capacitor heats under alternating signal**: dielectric losses dissipate energy as heat. If the capacitor heats up, the material has a non-negligible dissipation factor and the lossless model is insufficient.

## Extended or alternative model

The extended model incorporates three generalisations needed in real conditions: the **lossy dielectric** (non-zero imaginary part of [[epsilon_r]]), the **anisotropic dielectric** (permittivity tensor), and the **non-linear dielectric** (ferroelectric with hysteresis).

In the lossy model, [[epsilon_r]] is written as the sum of a real part and an imaginary part. The imaginary part is responsible for dissipation: the larger the imaginary part, the greater the heating of the dielectric under alternating field. This model is essential for radio and microwave frequencies.

In the ferroelectric model, [[epsilon_r]] is not constant but depends on the field and the prior history (hysteresis). Polarisation [[P_pol]] does not return to zero when the field returns to zero: a **remanent polarisation** remains. This effect is used in non-volatile memories and piezoelectric sensors.

When to switch to the lossy extended model: when the operating frequency exceeds one-tenth of the material's relaxation frequency (for example, above about 100 MHz for BaTiO₃ ceramics) or when capacitor heating is observable. When to switch to the ferroelectric model: if the measured [[C_d]] varies by more than 10 % with the applied voltage, or if the material is a ferroelectric ceramic above its Curie temperature.

## Operational comparison

| Criterion | Ideal LHI model | Lossy model | Ferroelectric model |
|---|---|---|---|
| Accuracy at low frequency | High | High | High (with hysteresis) |
| Accuracy at high frequency | Low | High | Medium |
| Calculation complexity | Low | Medium | High |
| Constant [[epsilon_r]] | Yes | Partial (real part ≈ const) | No |
| Typical applications | Basic design, manual calculation | RF, microwaves, filters | Memories, sensors, actuators |
| Field validity range | Low field (< 10 % breakdown) | Moderate field | High field with hysteresis |
`;export{e as default};
