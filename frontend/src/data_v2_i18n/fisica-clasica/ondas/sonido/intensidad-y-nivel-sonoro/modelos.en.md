# Sound Intensity and Level Models

## Ideal Model

The **point source in free field model** is the fundamental paradigm for describing sound intensity. This model simplifies any sound emitter as an infinitesimal geometric point that radiates acoustic energy in a perfectly symmetric manner in all directions of three-dimensional space.

In this model, the total **acoustic power** [[P]] emitted by the source is conserved and distributed uniformly over the surface of concentric spheres whose radius [[r]] increases with propagation. The resulting **sound intensity** [[I]] at any point in space is the power divided by the area of the sphere passing through that point.

The central magnitude [[I]] represents the **surface power density** flowing radially outward. The model assumes the medium is homogeneous (same density and temperature everywhere) and isotropic (same properties in all directions), with no obstacles that reflect, absorb, or diffract the sound energy.

## Hypotheses

1. **Omnidirectional point source**: The source is approximated as a point with no spatial dimension, emitting identical power in all solid angles. If violated: near a finite-sized source, the real intensity differs significantly from the predicted value, especially in directions perpendicular to the main emission axis.

2. **Spherical free propagation**: The wave expands in infinite three-dimensional space without boundaries. If violated: in rooms or enclosed spaces, wall reflections create a diffuse field where the inverse square law does not hold.

3. **Homogeneous and isotropic medium**: The air has uniform density and temperature throughout the region of interest. If violated: temperature variations (thermal gradients) or wind cause refraction and curvature in sound rays, deviating energy from the ideal radial path.

4. **Far field**: The observer is at a distance [[r]] much greater than the characteristic dimension of the source and the dominant wavelength. If violated: in the near field, the intensity distribution is complex and depends on the specific geometry of the emitter; the spherical approximation fails.

5. **No atmospheric absorption**: The medium does not dissipate mechanical energy as heat. If violated: at large distances or high frequencies, intensity decays faster than predicted by the geometric law due to molecular absorption by air.

## Quantitative validity domain

The model is quantitatively reliable when the following inequality is satisfied:

`r > max(3d, 3lambda)`

Where d is the characteristic diameter of the source and lambda is the sound wavelength at the dominant frequency. Typically, for audible sound around 1000 Hz, this means distances greater than approximately 1 meter for small sources.

Typical intensity range where the model is useful: from the **hearing threshold** (10⁻¹² W/m², equivalent to 0 dB) to the **pain threshold** (approximately 1 W/m², equivalent to 120 dB). Outside this range, perception or non-linear effects of air invalidate practical applications.

Order of magnitude of typical powers where the model applies:

- Whisper: P ≈ 10⁻⁹ W
- Conversation: P ≈ 10⁻⁵ W
- Domestic loudspeaker: P ≈ 0.1 to 10 W
- Symphony orchestra: P ≈ 10 W
- Jet engine: P ≈ 10⁵ W

## Model Failure Signals

1. **Measured intensity greater than calculated**: If a sound level meter registers values significantly higher than predicted by the point-source model at known distance [[r]], it indicates the presence of constructive **reflections** (reverberant interiors) or that the source has significant **directivity** pointing toward the receiver.

2. **Deviation from logarithmic slope**: When plotting L versus log(r), the model predicts a slope of -20 dB per decade of distance. A less negative slope (e.g.: -10 dB/decade) indicates **line source field** or dominant **reverberation**.

3. **Variation with direction at fixed distance**: On a sphere of constant radius centered at the source, the model predicts uniform intensity. Variations exceeding 20% between different directions reveal **non-isotropy** of the real source.

4. **Excessive attenuation at high frequency**: If the intensity of high-frequency components falls faster than that of low frequency as [[r]] increases, **atmospheric absorption** is operating significantly.

5. **Critical distance**: When [[r]] is comparable to the source size, the real intensity can be either double or half of the predicted value, depending on the position relative to the emission axis.

## Extended or Alternative Model

The **near field model** extends the description to distances where the source cannot be approximated as point-like. In this region, the intensity depends on the **specific geometry** of the emitter. For example, a circular radiating piston presents a complex near field with intensity oscillations (lobes) before stabilizing in the far spherical pattern.

For enclosed rooms, the **diffuse reverberant field model** replaces free propagation. This model divides the sound field into two components: the **direct field** (which follows the inverse square law) and the **reverberant field** (approximately uniformly distributed). The transition occurs approximately at the **critical distance**:

The critical distance is estimated with an expression proportional to the square root of room volume divided by reverberation time.

Where Q is the source directivity factor, V is the room volume, and T60 is the reverberation time. For distances much smaller than the critical distance, the direct field dominates; for much larger distances, the reverberant field dominates.

For directional sources, the **source with directivity model** introduces the **directivity factor** Q, modifying the effective intensity:

Directivity multiplies the effective power radiated toward the receiver.

With Q equal to 1 for an omnidirectional source, Q equal to 2 for a source radiating into a half-space, and Q much greater than 1 for highly directional sources such as loudspeaker horns.

## Operational comparison

| Characteristic | Ideal Model (free field) | Extended Model (reverberant field) |
|---|---|---|
| **Geometry** | Infinite open space | Enclosed room with reflections |
| **r dependence** | I ∝ r⁻² (spherical) | I ≈ constant in reverberant field |
| **Precision** | High in free far field | Necessary for interiors |
| **Complexity** | Low (one formula) | High (sum of direct and reverberant fields) |
| **Extra parameters** | None | T60, V, absorption coefficients |
| **Typical application** | Outdoors, open spaces | Concert halls, auditoriums, factories |
| **Validity limit** | r > 3d, free space | V > 0, finite T60 |

**Explicit transition**: It is recommended to use the ideal model when the reverberation time T60 is less than the direct travel time from source to receiver (dominant direct field). When T60 > 5 times the direct travel time, the reverberant model is essential for quantitative precision.
