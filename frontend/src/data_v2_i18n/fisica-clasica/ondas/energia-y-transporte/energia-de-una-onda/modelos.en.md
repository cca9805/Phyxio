## Ideal model

The ideal model of wave energy transport considers a pure harmonic wave propagating in a linear, homogeneous, and infinite medium, without dissipation or reflections. In this model, energy flows at constant velocity without attenuation, maintaining its shape and transported power invariant along the entire trajectory.

For an ideal vibrating string, this model assumes uniform tension, constant linear density, and oscillations of sufficiently small amplitude for the linear approximation to be exact. Kinetic and potential energy exchange perfectly in each element of the medium, without losses due to internal friction or radiation to other degrees of freedom.

In electromagnetic waves, the ideal model corresponds to plane waves in vacuum or transparent media without absorption, where the E and B fields propagate conserving their energy per unit area indefinitely.

## Hypotheses

- **Continuous medium**: The medium is treated as continuous, valid when the wavelength is much greater than the microscopic scale of the material (interatomic separation or granularity scale).

- **Small oscillations**: The amplitude A is much smaller than the wavelength λ (typically A < λ/20), ensuring that slopes remain small and tension is approximately constant.

- **Linearity**: Restoring forces are proportional to displacement, without higher-order terms or hysteresis.

- **No dissipation**: There is no internal friction, viscosity, or energy loss mechanisms. The total energy of the system is strictly conserved.

- **Infinite or semi-infinite medium**: There are no boundaries causing reflections or stationary interference. The wave propagates freely without boundary interactions.

- **Isotropy**: The properties of the medium are the same in all directions, ensuring that propagation velocity does not depend on direction.

## Quantitative validity domain

The linear model is valid when the amplitude satisfies A < 0.05λ, maintaining the relative error below 1% in propagation velocity. For A between 0.05λ and 0.2λ, the model is still useful but with systematic errors of 5-10%.

The continuous medium approximation requires λ > 100 nm for waves in crystalline solids, equivalent to frequencies below 10¹³ Hz in typical materials. For smaller wavelengths, atomic dispersion significantly modifies the dispersion relation.

The no-dissipation hypothesis is reasonable when the propagation distance L satisfies L << 1/α, where α is the attenuation coefficient of the medium. In metallic strings, α ≈ 10⁻³ m⁻¹ for audible frequencies, allowing distances of tens of meters. In seawater, α ≈ 10⁻⁴ m⁻¹ for gravity waves, valid for kilometers.

The small oscillations regime fails when the maximum transverse velocity v_max = ωA approaches the propagation velocity v, typically when v_max > 0.1v. This occurs when A > 0.1λ/2π.

## Model failure signals

The following observations indicate that the ideal model is being violated:

- **Shape distortion**: The wave is no longer pure sinusoidal, showing sharpened peaks or flat regions at maxima. This indicates that nonlinearity is active.

- **Observable attenuation**: The amplitude decreases appreciably with distance traveled, even without expansion geometry (as in spherical waves).

- **Harmonic generation**: Components of multiple frequency of the fundamental appear, detectable in the frequency spectrum of Fourier analysis.

- **[[amplitud]] dependence of velocity**: The propagation velocity varies observably with wave amplitude, typical of large-amplitude waves in shallow water.

- **Formation of unwanted standing waves**: Presence of fixed nodes and antinodes at positions inconsistent with forced boundary conditions, indicating parasitic reflections.

- **Hysteresis**: The force-displacement relation is different in loading and unloading, showing loops in phase plots.

## Extended or alternative model

When to switch to the **nonlinear waves** extended model: when amplitude exceeds 5% of the wavelength (A > 0.05λ), the model must include higher-order terms in tension and restoring force. In this regime, effects appear such as:

- Dependence of propagation velocity on amplitude (taller waves travel faster)
- Shock wave formation in compressible media
- Soliton-type solutions that maintain their shape while propagating
- Generation of higher-order harmonics by self-interaction

For waves in **dissipative media**, the extended model introduces a loss term proportional to velocity (viscous damping) or to deformation (elastoplastic hysteresis). Transported power decays exponentially P(x) = P₀·exp(-αx), where α typically depends on frequency as α ∝ ω² for low frequencies.

When the wavelength is comparable to the microscopic scale of the medium, switch to the **discrete networks** or **crystalline** model, where the dispersion relation ω(k) shows significant curvature deviating from linearity, even reaching forbidden frequency bands where propagation is impossible.

For large-amplitude waves on free surfaces (such as ocean waves), the **Stokes waves** or fully nonlinear potential theory model replaces the linear approximation, allowing description of waves approaching breaking.

## Operational comparison

| Characteristic | Ideal model | Extended model (nonlinear + dissipative) |
|---|---|---|
| Precision | Exact only for A << λ | Better fit to real data with moderate amplitudes |
| Mathematical complexity | Linear equations, closed analytical solutions | Nonlinear equations, requires numerical or perturbative methods |
| [[amplitud]] range | Valid only for small oscillations | Applicable up to A ≈ 0.3λ before breaking |
| Energy loss | Not modeled | Included through empirical or theoretical attenuation coefficients |
| Propagation velocity | Constant, amplitude-independent | [[amplitud]] and frequency dependent |
| Harmonic generation | Absent | Present, with predictable coefficients |
| Calculation time | Instantaneous | May require extensive simulations |

The ideal model is the tool of choice for conceptual analysis, preliminary design, and situations where amplitudes are controlled. The extended model is mandatory for precise prediction under high-intensity conditions, analysis of fatigue from sustained oscillations, or design of systems where attenuation is a critical factor such as in long-range communications or vibration isolation.