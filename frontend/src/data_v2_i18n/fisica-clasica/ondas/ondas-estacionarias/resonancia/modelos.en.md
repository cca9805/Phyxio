## Ideal model

The ideal resonance model is the damped and driven harmonic oscillator in steady state. This model simplifies any real oscillating system to three fundamental elements: an inertial body providing resistance to motion change, a spring providing linear restoring force, and a viscous damper dissipating energy proportionally to velocity.

The central simplification assumes that the system responds linearly to any excitation amplitude, that damping is purely viscous (without memory effects or frequency dependence), and that steady state is reached instantaneously for practical purposes. This allows describing resonance through linear second-order differential equations with constant coefficients.

The magnitudes preserved in this model are inertia, elastic stiffness, and natural frequency. The magnitudes ignored include the spring's own inertia, material nonlinearity, radiation wave damping, and the dependence of natural frequency on amplitude.

## Hypotheses

- **Spring linearity**: It is assumed that the restoring force is strictly proportional to displacement. If this hypothesis is violated, harmonic distortion appears and the resonance frequency depends on amplitude.

- **Linear viscous damping**: It is assumed that the dissipative force is proportional to velocity. If violated, the phase shift between force and displacement will not be exactly ninety degrees at resonance, and the resonance curve profile will distort.

- **Pure harmonic excitation**: It is assumed that the external force is a perfect sinusoidal function of single frequency. If violated, subharmonics and superharmonics will appear in the response, complicating the frequency spectrum.

- **Point concentrated inertia**: It is assumed that all system inertia is concentrated at a dimensionless point. If violated, vibration modes of the massive object itself must be considered, introducing additional natural frequencies.

- **Weak coupling with environment**: It is assumed that the system exchanges energy exclusively with the external source and internal damper. If violated, additional losses appear through sound wave radiation or thermal effects.

## Quantitative validity domain

The linear harmonic oscillator approximation is reasonably valid when:

- Spring deformations remain below 10% of their natural length, ensuring typical linear elastic behavior of common metals.

- The oscillation amplitude is less than 0.3 multiplied by the characteristic length of the system, preventing the inertial body geometry from significantly altering the dynamics.

- The system quality factor is between 1 and 1000. Factors below 1 indicate overdamped systems where the concept of resonance loses practical meaning. Factors above 1000 require considering quantum or thermal nonlinear effects.

- Excitation frequencies between 0.1 Hz and 100 MHz for macroscopic mechanical systems. Outside this range, distributed effects appear (standing waves in the oscillator itself) or quantum effects emerge.

- Temperatures where material properties (elastic modulus, expansion coefficient) remain stable during the experiment.

## Model failure signals

The following symptoms indicate that the linear model no longer applies and more complex models must be used:

- The measured resonance amplitude differs from the theoretical value predicted by the quality factor by more than 20%. This discrepancy suggests that dissipation is not purely viscous or that there are additional unmodeled losses.

- When slowly varying the driving frequency, hysteresis is observed in the response curve: the amplitude when increasing frequency differs from the amplitude when decreasing. This phenomenon is an unequivocal mark of significant nonlinearities.

- The frequency spectrum of the response contains peaks at higher harmonics (double, triple the fundamental frequency), indicating nonlinear distortion of motion.

- The system presents multiple resonance peaks when theoretically it should have only one. This reveals additional degrees of freedom not considered, such as vibration modes of the supporting structure.

- The establishment time of steady state is significantly shorter than theoretically predicted using the approximate relation establishment time equals Q divided by pi multiplied by the natural period. This suggests additional damping not included in the model.

## Extended or alternative model

When the simple linear model fails, the Duffing oscillator model is used, which includes a cubic term in the restoring force. This model captures effects such as the dependence of natural frequency on amplitude and the appearance of subharmonic resonances.

For systems with complex damping (frequency-dependent or with memory), the hysteresis-type or viscoelastic oscillator model is employed, where the response depends on the system's previous history.

In continuous structures (beams, plates, bridges), the appropriate model is that of elastic waves with boundary conditions, which leads to multiple discrete natural frequencies (normal vibration modes) rather than a single frequency.

For quantum systems at very low temperatures and high quality factors, the quantum harmonic oscillator model is necessary, where energy is quantized and zero-point fluctuations limit the minimum amplitude.

## Operational comparison

| Aspect | Simple linear model | Duffing model | Structural modal model |
|---------|---------------------|---------------|------------------------|
| Characteristic equation | linear second order | nonlinear with cubic term | wave equation with boundaries |
| Number of natural frequencies | single frequency | one amplitude-dependent frequency | infinite countable (modes) |
| Hysteresis phenomenon | not present | appears at large amplitudes | may appear from geometric nonlinearity |
| Computational complexity | exact analytical | requires numerical or perturbative methods | requires modal analysis or finite elements |
| Resonance frequency | constant and amplitude-independent | decreases or increases with amplitude depending on nonlinearity sign | multiple fixed values determined by geometry |
| Response description | pure sinusoidal | sinusoidal with higher harmonics | superposition of modes with their own amplitudes |
| Typical application domain | basic laboratory preliminary engineering | high-power resonators microwave systems | bridges buildings aerospace structures |

The choice between models depends on the required precision, available computational resources, and experimentally observed phenomena that the simple model cannot reproduce.
