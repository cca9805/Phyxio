## Ideal model

The standard model of time-of-flight ultrasonic testing assumes propagation of **plane waves** in a homogeneous, isotropic, lossless medium. Within this framework, [[v_us]] is constant throughout the part, the beam does not diverge, and reflection at a flat interface obeys exclusively the difference in [[impedancia_acustica]] between the two media. The defect position equation and the [[coeficiente_de_reflexion_acustica]] equation at normal incidence are the only two relationships needed for basic diagnosis.

This idealised model ignores the finite beam geometry, material attenuation, interface roughness, and microstructure anisotropy. Its central simplification is to treat the pulse as a point perturbation that propagates in a straight line at constant speed.

## Hypotheses

- **Homogeneity**: [[v_us]] is uniform throughout the inspected part. Violating this produces a systematic error in [[d_defecto]]: if [[v_us]] varies by 3% in any zone, the calculated depth can differ from the real value by up to 3%.
- **Isotropy**: the elastic properties of the material are equal in all directions. In carbon-fibre composites, this hypothesis fails and [[v_us]] can vary by 20% between the fibre direction and the transverse direction.
- **Normal incidence**: the beam is perpendicular to the defect interface. If the defect is inclined relative to the beam, the reflected wave does not return to the transducer and the calculated [[coeficiente_de_reflexion_acustica]] overestimates the received signal.
- **Plane wave**: the beam does not diverge in the inspection zone. This hypothesis is valid in the near Fresnel zone; in the Fraunhofer zone (far field), beam divergence reduces echo amplitude with distance.
- **Constant temperature**: [[v_us]] does not vary during the test. A 10 °C change in steel produces a [[v_us]] variation of approximately 5 m/s, equivalent to a [[d_defecto]] error of 0.1% per degree Celsius.

## Quantitative validity domain

The constant-[[v_us]] time-of-flight model is valid when the local velocity variation in the material is less than 1%. For fine-grained austenitic steel, this is reasonable up to service temperatures below 200 °C. Above 400 °C, the variation of [[v_us]] with temperature exceeds 2%, requiring hot recalibration.

The plane wave hypothesis is valid for depths greater than the near-field length, given by the square of the transducer radius divided by the wavelength. For a 10 mm diameter transducer at 5 MHz in steel with [[v_us]] of 5900 m/s, the near-field length is approximately 20 mm; for depths less than 20 mm, the plane wave hypothesis is not valid and echo amplitude can be up to 6 dB higher or lower than expected.

The normal incidence model applies when the angle between the beam and the normal to the defect interface is less than 10°. For angles greater than 20°, the energy reflected back towards the transducer decreases significantly and the defect may not be detected reliably.

## Model failure signals

- **Ghost echo**: appearance of peaks in the A-scan that do not correspond to physically possible positions within the part. Indicates multiple reflections (the pulse bounces several times between the defect and the back wall) or mode-converted echoes (part of the longitudinal wave converts to shear and returns with a different time).
- **Absent defect echo despite known defect**: when the defect is small compared to the wavelength or when it is obliquely oriented. Signals that the normal-incidence model has failed for that geometry.
- **Variation in back-wall echo amplitude without geometric cause**: in coarse-grained materials, grain scattering noise increases with depth and can mask the back-wall echo. Indicates the lossless model is failing.
- **Calculated [[d_defecto]] greater than the nominal part thickness**: a clear signal that the interpreted echo is a multiple reflection of the back wall and not a real defect.

## Extended or alternative model

The extended model incorporates **material attenuation**, modelled by an attenuation coefficient in decibels per millimetre that reduces echo amplitude with depth. It also includes **beam divergence** in the far field and allows calculating amplitude correction as a function of distance. This extended model is necessary in inspections of thick parts where echo amplitude falls below the detection threshold before reaching the back wall.

For anisotropic materials or complex geometries (curved pipes, irregular-geometry parts), the extended model requires ray-path simulation with [[v_us]] varying according to direction and position. Phased array and TOFD techniques work with multiple angles and require this extended model to reconstruct the defect position in 2D or 3D.

When to switch to the extended model: if the variation of [[v_us]] in the part exceeds 1%, if the transducer frequency is below 1 MHz in coarse-grained materials, or if the inspection depth exceeds 100 mm in materials with significant attenuation. Switch to this model when the calibration echo amplitude drops more than 6 dB from the initial value without apparent geometric cause.

## Operational comparison

| Criterion | Ideal model (plane wave, homogeneous medium) | Extended model (attenuation, anisotropy, phased array) |
|---|---|---|
| Calculation complexity | Low: one formula per parameter | High: numerical simulation or empirical corrections |
| Accuracy in thin homogeneous parts | High (error below 1% in [[d_defecto]]) | No appreciable improvement |
| Accuracy in thick or anisotropic parts | Limited (errors above 5%) | High, with adequate calibration |
| Application range | Steel parts up to 50–80 mm, frequencies above 2 MHz | Any material and geometry with appropriate instrumentation |
| Instrumental cost | Conventional portable equipment | Phased array or TOFD equipment, three to ten times higher cost |

The ideal model remains the baseline reference in 80% of routine industrial tests. The extended model is used when the client acceptance criterion or the applicable standard requires higher resolution, or when the part has characteristics that invalidate the ideal model hypotheses.