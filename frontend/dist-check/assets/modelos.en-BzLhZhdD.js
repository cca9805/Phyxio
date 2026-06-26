const e=`## Ideal model

The canonical model for sound applications assumes **homogeneous, isotropic and lossless** propagation media. Under these conditions, the speed of sound [[v_sonido]] is constant throughout the medium, wavefronts are perfect spheres expanding uniformly, and intensity falls with the square of the distance to the source (inverse square law). The echo travel time is exactly twice the ratio of distance to velocity.

For intensity level, the ideal model assumes the source is a point and omnidirectional and that propagation takes place in free field (no reflections). Under these conditions, [[IL]] falls 6 dB every time the distance to the source doubles.

This model accurately captures the behaviour of sonar in deep water far from interfaces, of ultrasonic sensors in air with no nearby obstacles, and of noise sources in open field without obstructions.

## Hypotheses

- The medium is **homogeneous**: [[v_sonido]] does not change from one point to another. If there are thermal gradients (thermocline in the ocean), variable salinity or density gradients, the pulse path curves and the hypothesis fails.

- The medium is **lossless**: no attenuation from viscosity, molecular absorption or scattering. In biological tissue, attenuation is real and significant (0.5 to 1 dB/cm/MHz), which limits the useful depth of ultrasound imaging.

- The source is **point-like and omnidirectional**: the inverse square law applies only if the receiver is in the far field of the source. In the near field (distances smaller than the square of the source dimension divided by wavelength), the intensity distribution is irregular.

- The pulse is **sufficiently short**: to resolve nearby objects, the pulse must not overlap with its echo. The spatial pulse length limits the minimum distance resolution.

- The **object is sufficiently large** to produce a detectable echo: objects much smaller than the wavelength generate diffuse scattering in all directions instead of a coherent echo towards the receiver.

## Quantitative validity domain

For sonar in seawater with [[v_sonido]] of 1500 m/s, the homogeneous model is valid at depths shallower than the seasonal thermocline (typically 50 to 200 m). Below the thermocline, [[v_sonido]] changes abruptly and the pulse path is refracted, producing errors in [[d_eco]] of 5 to 20% if not corrected.

For medical ultrasound with frequencies between 2 and 15 MHz, the wavelength in tissue is 0.1 to 0.8 mm, setting the minimum axial resolution at those same values. The maximum useful depth decreases with frequency: at 5 MHz, the practical depth in soft tissue is approximately 10 to 15 cm; at 15 MHz, it reduces to 2 to 3 cm.

For intensity level in free field, the inverse square law is valid when the distance to the receiver exceeds three times the maximum source dimension (far-field condition). For a 30 cm loudspeaker, that implies distances greater than 0.9 m.

## Model failure signals

- **Measured sound velocity varies with position**: if measurements at different points in the medium show non-constant [[v_sonido]], the homogeneous model has failed. This is typical of the stratified ocean, tissue with calcifications or soil with layers of different stiffness.

- **Unexpected additional echoes**: in the ideal model there is only one echo per object. If multiple echoes arrive from the same object, there are multiple reflections at internal interfaces (multipath reverberation) not modelled.

- **Intensity does not follow the inverse square law**: in enclosed spaces, reverberation maintains the level above that predicted by the free-field law at distances beyond the reverberation radius of the space.

- **Echo signal is wider than expected**: echo duration should be approximately that of the emitted pulse. If much longer, there is pulse spreading due to frequency-differential attenuation (dispersive medium) or the texture of the reflecting object.

## Extended or alternative model

The **velocity-gradient medium model** (velocity profiling) is the extension used in ocean sonar. The water column is divided into layers of constant [[v_sonido]] and the ray path is traced through each layer using the generalised Snell's law. This model allows calculating the real position of the object by correcting for path curvature.

For medical ultrasound, the extended model includes **frequency-dependent attenuation**: echo amplitude decays exponentially with depth at a rate that depends on frequency and tissue type. Modern equipment applies time-gain compensation (TGC) to correct this effect and obtain uniform-amplitude images.

For intensity level in enclosed spaces, the extended **statistical acoustics model** (Sabine-Eyring) predicts the reverberant field through the reverberation time T60. For more detailed analyses (level distributions in the space, shadow zone location), ray tracing simulation or acoustic finite element analysis (FEA) is used.

When to switch to the extended model: for sonar in shallow water or with appreciable thermal gradient; for ultrasound of deep structures at high frequency; for acoustic design of spaces larger than 500 m² of surface area; or when the discrepancy between measured and model-predicted level exceeds 3 dB.

## Operational comparison

| Criterion | Ideal model (homogeneous, free field) | Velocity-gradient model | Room acoustics model |
|---|---|---|---|
| Input variables | [[v_sonido]], [[t_vuelo]], source distance | [[v_sonido]] profile vs depth | Absorption, volume, T60 |
| Application range | Deep-water sonar, superficial ultrasound | Stratified ocean sonar | Auditoria, studios, offices |
| Distance resolution | Limited by pulse length | Similar but with path correction | Not applicable (no distance measurement) |
| Typical error without correction | Below 1% in homogeneous water | 5 to 20% in stratified ocean | 3 to 6 dB in reverberant level |
| Computational complexity | Low | Moderate | Moderate to high |
`;export{e as default};
