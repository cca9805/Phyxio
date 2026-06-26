const e=`# Energy flux wave model

## Ideal model

The ideal energy flux model describes energetic transport in one-dimensional progressive waves without dissipation or edge effects. This model considers an infinite, uniform, and perfectly elastic string, where the wave propagates indefinitely preserving its shape and energy.

In this simplified model, the energy flux [[S_flujo]] remains constant along the entire string. Energy flows from the emitting source toward infinity without losses, maintaining an exact relationship between energy density [[u_energia]] and propagation velocity [[v]]. The total power [[P_onda]] emitted by the source equals exactly the flux multiplied by the effective cross-section of the string.

The central simplification consists of ignoring any dissipation mechanism (friction with air, internal absorption of the material) and considering that the string has infinite extension, avoiding reflections at ends that would complicate the flux pattern.

## Hypotheses

- **Infinite and uniform string**: The linear density [[mu]] is constant at every point, without variations or structural defects that scatter energy.

- **Small oscillations**: The amplitude [[A]] is much smaller than the wavelength [[lambda]], guaranteeing the linear regime where tension remains practically constant during vibration.

- **Constant tension**: The tension force does not vary with time or position, maintaining the propagation velocity [[v]] uniform.

- **Absence of dissipation**: There is no friction with air nor internal damping; all mechanical energy is conserved in the form of wave motion.

- **Pure progressive waves**: There are no reflections or superpositions that create standing waves; energy flows only in one direction.

**Consequence of violating each hypothesis**:

- If the string is not uniform, part of the energy is reflected at discontinuities, reducing the flux transmitted beyond each interface.

- If oscillations are not small, nonlinear effects appear that modify the propagation velocity and the flux-amplitude relationship.

- If tension varies, the velocity [[v]] depends on position and the flux no longer follows a simple law.

- If dissipation exists, the flux decays exponentially with distance from the source.

- If there are reflections, a standing wave is established where the net flux is zero although locally there are instantaneous fluxes.

## Quantitative validity domain

The model is valid when the following are simultaneously satisfied:

- The amplitude is less than 10% of the wavelength: A < 0.1 λ, guaranteeing the linear regime with relative errors less than 1%.

- The wavelength is much greater than the string diameter: λ > 100 d, ensuring that the string behaves as one-dimensional.

- The distances considered are less than the attenuation length of the medium: x < v/γ, where γ is the damping coefficient. For steel strings in air, this typically means x < 100 m for audible frequencies.

- The frequency is below the first transverse vibration mode of the string cross-section: f < v_transversal/(2d), typically f < 10 kHz for standard musical strings.

The relative error of the model with respect to real behavior is less than 5% when operating within these limits.

## Model failure signals

- **Amplitude increasing with distance**: If the wave amplitude is observed to increase when moving away from the source, the system is receiving energy from some unconsidered external source (forced vibration of the support, coupling with other strings).

- **Distortion of wave shape**: If the pure sinusoid deforms acquiring sharp peaks or flat sections, the nonlinear regime has been reached and the linear model no longer correctly describes the flux.

- **Rapid decay of amplitude**: If the amplitude falls by half in distances less than 10 wavelengths, dissipation is significant and the ideal lossless model is inapplicable.

- **Appearance of transverse modes**: If the string vibrates in two perpendicular directions simultaneously with nearby frequencies, the one-dimensional model has broken and the energy flux distributes into two polarizations.

- **Persistent negative flux**: If in some region the measured flux is negative in a sustained manner, there is a significant reflected wave or an unconsidered secondary source.

## Extended or alternative model

The **extended model with viscous dissipation** incorporates a damping term proportional to the transverse velocity of the medium's particles. In this model, the wave equation includes a friction term that gradually reduces the amplitude and, consequently, the energy flux as the wave propagates.

The energy flux is no longer constant, but decays exponentially:

S(x) = S₀ · exp(-γx/v)

Where γ is the damping coefficient and S₀ the flux at the source. The power available at a receiver at distance L is less than that emitted by the factor exp(-γL/v).

The **nonlinear model for large amplitudes** considers that the string tension increases with elongation, modifying the propagation velocity that now depends on the local amplitude. Large amplitude waves travel faster than small amplitude waves, producing characteristic distortions such as "flattening" of troughs and "sharpening" of peaks.

When to switch to the extended model with dissipation: when propagation distances exceed 100 wavelengths or when appreciable amplitude decay is observed in times less than 10 seconds. In plucked string musical instruments, this model is essential to describe the natural decay of sound.

When to use the nonlinear model: when the amplitude exceeds 20% of the wavelength or when generation of harmonics not present in the original excitation is observed.

## Operational comparison

| Characteristic | Ideal model | Dissipative model | Nonlinear model |
|---|---|---|---|
| **Energy flux** | Constant along the string | Decays exponentially with distance | Depends on local amplitude, greater where the wave is more intense |
| **Amplitude** | Conserved indefinitely | Decreases gradually | Maintains shape but distorts, generates harmonics |
| **Propagation velocity** | Constant, independent of position | Constant, but the wave attenuates | Variable, greater for larger amplitudes |
| **Mathematical complexity** | Simple, closed analytical solutions | Moderate, requires decay factor exp(-γt) | High, requires numerical or perturbative methods |
| **Application range** | Small amplitude waves over short distances | Real waves in absorbing media | Large amplitude waves near the source |
| **Energy conservation** | Total, without losses | Partial, part converts to heat | Total, but redistributed among frequencies |
| **Experimental accuracy** | ±1% under ideal conditions | ±5% for most real materials | ±10% due to variability of nonlinear parameters |

**Advantages and limits**:

The ideal model provides clear conceptual understanding and enables rapid calculations, but fails in any real situation where dissipation or nonlinearities are appreciable. The dissipative model captures the temporal decay observable in all real systems, but requires knowing damping coefficients that depend on material and frequency. The nonlinear model describes phenomena such as harmonic generation and shock wave formation in media, but its mathematical complexity limits its use to situations where nonlinear effects dominate.

The transition between models is not abrupt but gradual: for intermediate amplitudes (5-20% of the wavelength), it is convenient to use the ideal model with first-order perturbative corrections.
`;export{e as default};
