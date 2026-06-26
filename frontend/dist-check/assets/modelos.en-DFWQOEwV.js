const e=`## Ideal model

The ideal model for attenuation in solids assumes a plane wave propagating in a homogeneous, isotropic, and infinite medium. In this simplified model, attenuation follows a pure exponential law with a constant coefficient [[alpha]] that depends neither on distance nor amplitude. The medium is considered passive, without gain or amplification, and dispersion is completely ignored assuming all frequencies travel at the same speed.

This idealization conserves total system energy (energy lost by the wave converts to heat) but ignores real microstructural complexity. The quantities maintained are frequency [[f]] and propagation velocity, while geometric dispersion effects, grain scattering, and frequency dependence of [[alpha]] are neglected.

## Hypotheses

- **Homogeneous medium**: Material properties are uniform throughout the propagation region. Violating this hypothesis produces local variations in [[alpha]] and velocities, invalidating the simple exponential law.

- **Plane wave**: The wavefront is plane and the beam does not diverge. If the beam diverges, amplitude decreases additionally by geometric dispersion, confusing [[alpha]] measurement.

- **Isotropy**: Properties are equal in all directions. In anisotropic materials like composites, [[alpha]] depends on propagation direction.

- **Linear attenuation**: The coefficient [[alpha]] is constant with amplitude. If [[alpha]] depends on amplitude (non-linear regime), the exponential becomes invalid.

- **No dispersion**: All frequencies travel at the same speed. With dispersion, the pulse distorts and measured amplitude depends on transducer bandwidth.

## Quantitative validity domain

The exponential model is valid when propagation distance is greater than 10 times the wavelength but less than 3 times the attenuation length [[L_d]]. For typical industrial testing frequencies (0.5-20 MHz), this corresponds to distances between 1 mm and 100 mm depending on the material.

The plane wave approximation is reasonable when beam diameter is greater than 5 times the propagation distance. For focused beams, this limits validity to the focal region where the wavefront is approximately plane.

The model maintains error below 5% when total attenuation is less than 40 dB. For greater losses, equipment noise and non-linearities introduce systematic errors not considered in the ideal model.

## Model failure signals

- **Deviation from linearity in logarithmic scale**: If the ln([[A]]/[[A0]]) vs [[x]] graph is not a straight line, the exponential model fails. This indicates [[alpha]] variation with distance or uncompensated geometric dispersion effects.

- **Amplitude dependence on measurement frequency**: If changing transducer frequency systematically modifies the obtained [[alpha]] value, the constant [[alpha]] model is inadequate.

- **Amplitude recovery in multiple reflections**: If successive echoes do not follow the expected attenuation relationship, there may be gain by constructive reflection or interference effects not considered.

- **Negative [[alpha]] values**: Obtaining negative attenuation coefficients indicates model violation, usually due to incorrect calibration or uncompensated geometric dispersion.

## Extended or alternative model

The extended model incorporates geometric dispersion, frequency dependence of [[alpha]], and material anisotropy. In this model, total attenuation is the sum of intrinsic material attenuation and beam geometric dispersion. The coefficient [[alpha]] follows a power law with frequency, and phase and group velocities can differ significantly.

The main difference from the ideal model is the inclusion of additional terms that depend on beam geometry and material microstructure. This allows describing real materials like composites, parts with property gradients, and tests with divergent beams.

When to switch to the extended model: for distances greater than 2 times the beam diameter, frequencies above 5 MHz where dispersion is significant, or materials with anisotropic structure like fiber composites. The transition to the extended model is necessary when the ideal model error exceeds 10% or when better than 2 dB accuracy in loss prediction is required.

## Operational comparison

| Feature | Ideal model | Extended model |
|---|---|---|
| **Accuracy** | ±5% for losses < 40 dB | ±2% up to 60 dB loss |
| **Complexity** | Simple exponential equation | Multiple terms, frequency dependence |
| **Required parameters** | [[alpha]], [[x]], [[A0]] | [[alpha]]([[f]]), beam geometry, anisotropy |
| **Application range** | Homogeneous metals, collimated beam | Complex materials, divergent beam |
| **Advantages** | Simple, fast, intuitive | Realistic, predicts dispersion |
| **Limitations** | Not valid for high dispersion | Requires extensive characterization |
| **Failure signals** | Non-linear logarithmic curve | Material characterization errors |
`;export{e as default};
