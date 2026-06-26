# Sound Intensity and Sound Level

## Conceptual Context

When a source emits sound, energy travels through the medium as mechanical waves. **Sound intensity** [[I]] quantifies how much **acoustic power** [[P]] passes through each square meter of surface perpendicular to the propagation direction. This fundamental physical magnitude describes the "concentration" of sound energy in space.

However, the human ear does not respond linearly to physical intensity. A sound with twice the power is not perceived as "twice as loud." To express the auditory sensation in an intuitive way, the **sound intensity level** [[L]] is used, measured in **decibels** (dB), a logarithmic scale that better reflects the psycho-physical response of the auditory system.

> [!NOTE]
> The decibel scale is not a linear unit like the watt or the meter. It is a relative scale that compares the measured intensity with a reference threshold.

## 🟢 Essential Level

Sound intensity is the amount of energy that reaches your ear per second and per each square meter of area. The closer you are to the source, the more intensity you receive because the same power is distributed over a smaller sphere.

Imagine a **point source** that emits sound uniformly in all directions. The energy expands as **spherical waves**. When you double the distance [[r]], the surface area of the sphere multiplies by four, so the intensity is reduced to one quarter. This is the **inverse square law**.

The human ear is extraordinarily sensitive. The **hearing threshold** is as low as 10⁻¹² W/m², while the **pain threshold** is around 1 W/m². This range of one trillion (10¹²) makes it impractical to use the linear intensity scale to describe everyday experience.

> [!TIP]
> **Practical rule**: Each time you move to twice the distance from a source, the sound is perceived approximately 6 dB lower, which corresponds to reducing the physical intensity to one quarter.

## 🔵 Formal Level

**Sound intensity** [[I]] is defined as acoustic **power** [[P]] per unit area perpendicular to the propagation direction. For a point source emitting spherical waves in a homogeneous, isotropic medium, the intensity at a distance [[r]] from the emitter center is given by:

{{f:intensidad_potencia}}

This expression reflects energy conservation: the total power [[P]] is distributed uniformly over the spherical surface 4πr². The intensity decays with the square of the distance, a fundamental characteristic of three-dimensional wave propagation in free field.

To relate physical intensity with subjective perception, the **sound intensity level** [[L]] in **decibels** (dB) is introduced:

{{f:nivel_intensidad}}

Where [[I_0]] = 10⁻¹² W/m² is the **reference intensity**, approximately equal to the average human hearing threshold at 1000 Hz under ideal conditions.

The logarithmic base (10) and the multiplying factor (10) were chosen so that:

- A 10 dB increase corresponds to multiplying physical intensity by 10
- A 3 dB increase approximately doubles the intensity
- 0 dB coincides with the hearing threshold ([[I]] equal to [[I_0]])
- Negative values represent subliminal intensities

The inverse relationship allows obtaining physical intensity from the level:

{{f:nivel_intensidad}}

To compare two positions without recalculating source power, use the intensity relation between distances:

{{f:intensidad_distancia}}

## 🔴 Structural Level

The intensity model presents fundamental structural limits related to source geometry, propagation medium, and boundary conditions.

**Near field versus far field**: The point-source intensity relation assumes **far field**, where the observer is sufficiently far from the source that it can be approximated as point-like. In the **near field** (distances comparable to the source size), the intensity distribution is complex, depends on the specific emitter geometry, and the spherical approximation fails. This transition is not abrupt but gradual, typically occurring at distances of the order of several wavelengths or the characteristic diameter of the source, whichever is greater.

**Real atmospheres versus ideal medium**: The model assumes a homogeneous medium without **absorption attenuation**. In real air, molecules absorb energy from the wave, especially at high frequencies. This atmospheric absorption follows an exponential law in addition to the geometric decay, being significant at distances greater than hundreds of meters for high audible frequencies.

**Free propagation versus reverberant field**: In enclosed spaces, **reflections** from walls, floor, and ceiling create a diffuse field where intensity does not decay with r⁻². The key parameter is the **reverberation time** T60: if this is long compared to the direct travel time, the reverberant field dominates and intensity is distributed more uniformly than in free field.

**Directional sources**: Real sources are not perfectly omnidirectional. A directional loudspeaker concentrates more power in certain directions, modifying the spherical pattern. The **directivity factor** Q quantifies this deviation, with Q equal to 1 for an ideal omnidirectional source and greater than 1 for focused sources.

> [!WARNING]
> In small rooms with reflective walls, the intensity can be significantly higher than predicted by the inverse square law due to reflections.

## Deep Physical Interpretation

The logarithm in the definition of [[L]] is not arbitrary: it reflects the **non-linear response of the human ear**. The auditory system operates as a receiver with enormous dynamic range, compressing signals of very variable intensity into a manageable range of neural response. This is analogous to how photographic cameras use logarithmic aperture (f-stops) to handle extreme luminosity ranges.

A critical aspect is that the decibel is not a unit in the conventional sense. It has no physical dimensions: it is the logarithm of a ratio between two intensities. Only when the reference is specified ([[I_0]] for intensity dB, others for pressure or power dB) does it acquire absolute meaning.

The sign of [[L]] has direct physical interpretation: negative values indicate intensity below the hearing threshold (inaudible), while positive values quantify how many orders of magnitude separate the sound from the limit of human perception.

## Order of Magnitude

The dynamic range of the human ear spans approximately 14 orders of magnitude in intensity, from the hearing threshold to the pain threshold:

- **10⁻¹² W/m²** (0 dB): Hearing threshold. The softest perceptible sound.
- **10⁻⁶ W/m²** (60 dB): Normal face-to-face conversation. Everyday reference.
- **10⁻³ W/m²** (90 dB): Intense urban traffic. Occupational exposure limit in many countries.
- **10⁻¹ W/m²** (110 dB): Nearby rock concert. Permanent damage possible after hours.
- **10¹ W/m²** (130 dB): Airplane takeoff at 50 m. Immediate pain, rapid damage.
- **10² W/m²** (140 dB): Absolute pain threshold. Risk of instantaneous injury.

To detect absurd results: an intensity of 100 W/m² at 1 km distance would imply an immense source power (megawatts), physically unrealistic for conventional sources. Conversely, an intensity of 10⁻¹⁵ W/m² measured next to an active sound source indicates calibration error or unit confusion.

## Personalized resolution method

For sound intensity and level problems, apply sequentially:

1. **Identify source and geometry**: Determine if it is a point, line (traffic), or plane source. Most basic problems use omnidirectional point sources.

2. **Establish medium conditions**: Verify if free field approximation (open air) applies or if there are significant reflections (interiors).

3. **Apply power conservation**: For a point source in free field, the total power [[P]] is conserved and distributed over growing spheres. Use the intensity-from-power relation.

4. **Convert to level if necessary**: When the question involves perception, everyday comparisons, or regulations, calculate [[L]] from [[I]] and [[I_0]].

5. **Verify dimensional consistency**: Intensity must result in W/m², level in dB. Power in watts, distance in meters. Convert units before substituting.

6. **Evaluate result**: Compare with reference scales. Intensities greater than 1 W/m² or less than 10⁻¹⁵ W/m² are suspicious and require review.

## Special Cases and Extended Example

**Line sources**: Continuous traffic on a highway is better modeled as an **infinite line source** than as a point source. The intensity decays as 1/r instead of 1/r², because the "surface" of propagation is a cylinder, not a sphere.

**Diffuse field in rooms**: In a highly reverberant room (stone, glass, concrete), the direct intensity from the source adds to the reflected intensity. Near the source the direct field dominates; far away, the reverberant field can be comparable or greater.

**Interference from multiple sources**: When two sources emit simultaneously, the physical intensities add (energy is scalar), but the levels in dB do not add directly. Two identical 60 dB sources produce 63 dB combined, not 120 dB.

> [!TIP]
> To add levels: convert to intensities, add them, and convert back to dB. Two equal sources add +3 dB; ten equal sources add +10 dB.

**Limit case - Near field**: Right next to a large source (e.g., in front of a 1-meter diameter subwoofer at 0.5 m), the point source model underestimates the real intensity because the source is not point-like and the wave is not yet spherical.

## Real Student Questions

**Q: Why don't we just use intensity in W/m² instead of complicating things with decibels?**

A: Because the linear intensity scale is very inconvenient. The audible range goes from 10⁻¹² to 10² W/m², fourteen orders of magnitude. Writing "0.000000000001 W/m²" is impractical, and mentally comparing 10⁻⁸ with 10⁻⁵ is difficult. Decibels compress this enormous range into manageable numbers (0 to 140 dB).

**Q: If a 60 dB sound is "normal conversation," do two people talking make 120 dB?**

A: No. Physical intensities add, not decibels. Two equal 60 dB sources (corresponding to I = 10⁻⁶ W/m² each) produce I_total = 2 × 10⁻⁶ W/m², which is approximately 63 dB. To obtain 120 dB you would need millions of people talking simultaneously.

**Q: Why does sound feel "quieter" when I move away, but I don't feel it drop to a quarter when I double the distance?**

A: Because your perception is logarithmic, not linear. When physical intensity falls to 1/4 (from I to I/4), the level in dB only drops 6 dB (from L to L-6). Psychologically, 6 dB less is perceived as "noticeably softer" but not as "one quarter as loud." The ear compresses the dynamic range.

**Q: Are intensity and acoustic pressure the same thing?**

A: They are related but not identical. Intensity is power per area (W/m²), proportional to the square of acoustic pressure. In many practical contexts they are used interchangeably, but physically they are distinct magnitudes with different units.

## Cross-cutting connections and study paths

This topic connects directly to [Nature of Sound](leaf:fisica-clasica/ondas/sonido/naturaleza-del-sonido), where the foundations of longitudinal mechanical waves are established, and with [Speed of Sound](leaf:fisica-clasica/ondas/sonido/velocidad-del-sonido), which quantifies propagation.

Power conservation in spherical propagation is an application of the **energy conservation principle**, studied in [Work and Mechanical Energy](leaf:fisica-clasica/mecanica/trabajo-energia/trabajo-energia-cinetica-potencial).

The logarithmic scale in decibels appears in other physical contexts: the pH scale in chemistry, the Richter magnitude in seismology, and the stellar magnitude scale in astronomy. In all cases, the logarithm allows handling enormous dynamic ranges.

To deepen into auditory perception and psychoacoustics, the natural next step is [Pitch and Timbre](leaf:fisica-clasica/ondas/sonido/tono-y-timbre).

## Final Synthesis

Sound intensity and the decibel level describe two faces of the same physical reality: intensity as an objective magnitude of power density, and level as a scale adapted to human perception. The inverse square law governs geometric attenuation in free propagation, while the logarithmic response of the ear determines that we express this attenuation in decibel changes that seem moderate but represent large variations in real physical energy.
