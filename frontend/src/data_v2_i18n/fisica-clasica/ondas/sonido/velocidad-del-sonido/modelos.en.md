## Ideal model

The main model in this leaf is that of **linear acoustic propagation in a homogeneous medium**, described by the Newton-Laplace formula. In this model, [[v_son]] is a constant of the medium: it does not depend on wave amplitude, frequency, or propagation direction. The medium is elastic, linear, and isotropic.

For gases, the model specialises as an **ideal gas with adiabatic process**: acoustic compressions and rarefactions are fast enough to be adiabatic, and the gas obeys the ideal gas equation of state. Under these conditions, [[v_son]] depends only on [[T_abs]], [[gamma_gas]], and [[M_mol]], and is independent of the equilibrium pressure.

## Hypotheses

- **Homogeneous medium:** [[rho_med]] and [[B_mod]] are uniform throughout the volume of interest. If the medium has temperature or composition gradients (for example, the atmosphere at high altitude), [[v_son]] varies with position and the wave curves (acoustic refraction). The constant [[v_son]] model is a valid local approximation when the wavelength is much smaller than the characteristic scale of variation of the medium.

- **Small amplitudes (linear regime):** The acoustic pressure perturbation is much smaller than the equilibrium pressure. This hypothesis ensures that the medium properties (B and rho) can be treated as constants during wave passage. Quantitatively, the pressure amplitude must be less than 1 % of the equilibrium pressure for non-linear effects to be negligible.

- **Adiabatic process for gases:** Acoustic oscillations are fast enough that there is no significant heat exchange between adjacent regions. For audible frequencies in air, this hypothesis is excellent: the thermal diffusion time between wave crests and troughs is many orders of magnitude greater than the oscillation period.

- **No dispersion:** [[v_son]] does not depend on frequency. In air at audible frequencies, this is correct with an error less than 0.01 %. At very high frequencies (megahertz) or in media with molecular relaxation (humid carbon dioxide), dispersion can be significant.

- **Ideal gas:** For gases, molecular interactions are assumed negligible. Under ordinary conditions (1 atm, 200-400 K), air behaves essentially as an ideal gas with errors less than 0.1 %.

## Quantitative validity domain

The model of constant [[v_son]] from the Newton-Laplace formula is valid when:

- The acoustic pressure amplitude is less than 2 kPa (less than 2 % of atmospheric pressure at 1 atm). Above this value, gas non-linearity begins to generate spurious acoustic harmonics.
- The frequency is between 0.1 Hz and 1 MHz for air. At lower frequencies, the adiabatic process hypothesis begins to fail (low-frequency waves have such long periods that heat can partially flow). At higher frequencies, molecular vibrational relaxation in air begins to selectively absorb energy.
- The temperature is between 200 K and 2000 K for air. Below this, real gases deviate from ideal behaviour. Above it, molecular dissociation modifies [[gamma_gas]].

Concrete linearity condition: the acoustic pressure perturbation p_ac must satisfy p_ac << P_0 (atmospheric pressure), which numerically implies p_ac < 2 kPa to guarantee non-linearity less than 2 %.

## Model failure signals

- **Sonic boom:** If the source moves at speeds comparable to or greater than [[v_son]], non-linear shock waves are produced. The linear model predicts a divergence (infinite pressure at Mach 1) which in reality manifests as a loud bang. For supersonic sources, non-linear gas dynamics is required.
- **Notable acoustic absorption:** If sound amplitude decreases significantly faster than predicted by the inverse square law (for point sources), there is absorption that the model does not capture. In air, absorption depends on frequency and humidity and is significant above 10 kHz at distances of tens of metres.
- **Timbre variation with distance:** If the timbre of an instrument changes perceptibly with increasing distance (high frequencies attenuated before low ones), frequency-selective dispersion or absorption is present, and the uniform [[v_son]] model is insufficient.
- **Temperature differences in the medium:** If there are significant temperature gradients (thermal stratification, thermal inversion), [[v_son]] varies with position and the sound path curves. In this case, the acoustic ray propagation model is required.

## Extended or alternative model

It is better to change model when the medium is no longer homogeneous, when the amplitude is no longer small, when the material is anisotropic, or when the frequency enters a range with dispersion or selective absorption. In those cases, a single value of [[v_son]] is no longer sufficient and an acoustic-ray, shock-wave, real-gas, or anisotropic-elasticity model should be used.

The **acoustic ray propagation** model extends the Newton-Laplace formula to inhomogeneous media: [[v_son]] varies smoothly with position, and the acoustic path follows the [[v_son]] gradient lines, curving toward regions of lower [[v_son]] (analogous to optical refraction). This model is used in acoustic oceanography, acoustic meteorology, and seismology.

The **shock wave** model (non-linear) is required when the perturbation amplitude is comparable to the equilibrium pressure, or when a source moves at supersonic speeds. In this model, [[v_son]] is not constant: the wave crest travels faster than the reference value and eventually catches up with the preceding front, forming a pressure discontinuity (shock wave).

For anisotropic solid media (crystals, laminated composite materials), [[v_son]] depends on the propagation direction and one must distinguish between phase and group velocities. This model is relevant in industrial non-destructive testing and geophysics.

## Operational comparison

| Criterion | Newton-Laplace (linear) | Acoustic rays (inhomogeneous) | Shock waves (non-linear) |
|---|---|---|---|
| Medium | Homogeneous, isotropic | Inhomogeneous (T or composition gradient) | Any medium, large amplitudes |
| Amplitudes | Small (p_ac << P_0) | Small | Large (p_ac comparable to P_0) |
| v dependence on position | No | Yes | Yes (v varies with local amplitude) |
| Wave path | Straight | Curved (refraction) | Discontinuous (shock front) |
| Applications | Music, voice, medical ultrasound | Sonar, acoustic meteorology, seismology | Sonic boom, explosions, lithotripsy |
| Mathematical complexity | Low | Medium | High |
