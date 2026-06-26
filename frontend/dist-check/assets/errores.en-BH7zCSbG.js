const e=`# Errors in wave intensity

## Conceptual errors

### Error 1: Confusing linear decrease with quadratic decrease

**Why it seems correct**

Linear intuition suggests that if you move twice as far away, "the wave travels twice the space," so intensity should be reduced by half. This extrapolation of everyday experiences with uniform motion seems logical.

**Why it is incorrect**

Intensity is power per unit area. The spherical surface over which power is distributed grows with the square of distance. When doubling the distance, the area quadruples, not doubles. The same power spreads over four times more surface, reducing intensity to a quarter, not half. It is pure three-dimensional geometry.

**Detection signal**

The student calculates that at 20 meters the intensity is half that at 10 meters, or that at 100 meters it is one-tenth of the intensity at 10 meters (instead of one-hundredth).

**Conceptual correction**

Intensity follows the inverse square law. Doubling distance reduces intensity to a quarter; tripling distance reduces it to one ninth; multiplying distance by 10 reduces it to one hundredth. Visualize the spherical surface growing as the square of distance.

**Mini-example of contrast**

Consider painting a sphere. If you double the radius, the surface to paint quadruples. The same amount of paint (power) covers four times less density (intensity) when the sphere is twice as large. Paint doesn't "dilute" linearly, but quadratically.

### Error 2: Thinking that two identical sources double intensity in dB

**Why it seems correct**

Two identical loudspeakers emitting simultaneously seem intuitively "twice as intense" as one alone. If one produces 60 dB, two should produce 120 dB.

**Why it is incorrect**

Physical intensities add linearly, but decibels are a logarithmic scale. If two sources emit the same intensity, total intensity doubles and the level increases by about 3 dB. Two sources of 60 dB give 63 dB, not 120 dB.

**Detection signal**

The student directly adds levels in dB and concludes that two 60 dB sources would produce 120 dB, or expects two 70 dB sources to produce 140 dB.

**Conceptual correction**

Convert to physical intensities (W/m²), add, and convert back to dB. Doubling physical intensity (+3 dB) is barely perceived as an audible increase. Ten identical sources (+10 dB) are perceived as "twice the loudness."

**Mini-example of contrast**

If a whisper is 30 dB and conversation is 60 dB, the conversation has 1000 times more physical intensity (10³), not double. The logarithmic scale compresses enormous physical differences into more moderate perceptual differences.

## Model errors

### Error 3: Applying inverse square law in near field

**Why it seems correct**

The relation between power, distance, and intensity seems applicable from any distance, including very small distances. If we get very close to the source, intensity should increase dramatically according to the model.

**Why it is incorrect**

In the near field (distances comparable to the source dimension), the source does not behave as point-like. The specific geometry of the emitter (size, shape, directivity) dominates the intensity distribution. The 1/r² law is only valid in the far field where the source "appears" point-like.

**Detection signal**

The student predicts infinite intensities as approaching r → 0, or calculates intensities in the near field using the point source formula obtaining values very different from those actually measured.

**Conceptual correction**

The point source model requires far field: r >> source_dimension. At smaller distances, intensity does not diverge according to 1/r²; it depends on the specific geometry of the emitter. A 30 cm loudspeaker is not point-like at 1 meter distance.

**Mini-example of contrast**

The Sun is an extended source. On the solar surface, intensity is not infinite according to 1/r²; it is the radiation intensity of a black body at 5800 K. The inverse square law only applies from distances where the Sun "appears" point-like (many solar radii away).

## Mathematical errors

### Error 4: Forgetting the 4π factor of sphere area

**Why it seems correct**

Remembering circular area formulas (πr²) is more common than spherical formulas. The student may confuse the area of a circle with the area of a sphere.

**Why it is incorrect**

The surface area of a sphere is 4πr², not πr². The factor 4π ≈ 12.57 is essential for obtaining correct results. Omitting it introduces an error of approximately one order of magnitude.

**Detection signal**

Results of power or intensity that are approximately 4 times or 1/4 of expected values. For example, calculating that a 10 W loudspeaker produces intensity of 0.08 W/m² at 10 m instead of 0.008 W/m².

**Conceptual correction**

The total area of a sphere of radius r includes all directions of three-dimensional space. Think of a soccer ball: its total surface is much larger than the area of a circle with the same radius. Power is distributed over that entire spherical surface.

**Mini-example of contrast**

A sphere of radius 1 m has area 4π ≈ 12.57 m². A circle of radius 1 m has area π ≈ 3.14 m². If you distributed 12.57 W over the sphere, intensity would be 1 W/m²; over the circle it would be 4 W/m². The factor 4 marks the difference between 2D and 3D.

### Error 5: Confusing intensity with pressure when calculating dB

**Why it seems correct**

Both intensity and pressure are measures of wave "strength," and both are expressed in logarithmic scales. The student may assume that sound pressure level decibels numerically coincide with sound intensity level decibels.

**Why it is incorrect**

Although numerically close in many cases, sound pressure level (SPL) and sound intensity level (SIL) have different definitions. SPL uses 20·log₁₀(p/p₀) while SIL uses 10·log₁₀(I/I₀). The differentiating factor 2 comes from I ∝ p². Under ideal conditions they coincide, but in reactive fields or with reflections they can differ significantly.

**Detection signal**

The student uses SPL and SIL interchangeably, or applies factors of 20 where 10 should be used (or vice versa) when calculating levels in dB from physical values.

**Conceptual correction**

For precise conversions: intensity uses 10·log₁₀(I/I₀), pressure uses 20·log₁₀(p/p₀). The factor 2 difference reflects the quadratic relationship between intensity and pressure. In practical free-field acoustics applications, both levels numerically coincide.

**Mini-example of contrast**

If pressure doubles (factor 2), pressure level increases by 20·log₁₀(2) ≈ 6 dB. Since intensity is proportional to the square of pressure, intensity quadruples (factor 4), and intensity level increases by 10·log₁₀(4) = 10·log₁₀(2²) = 20·log₁₀(2) ≈ 6 dB. They coincide! But the applied factors (10 vs 20) differ because the underlying physical relationships are different.

## Interpretation errors

### Error 6: Interpreting silence as absolute zero intensity

**Why it seems correct**

When we hear nothing, it seems logical to conclude that sound intensity is exactly zero. The absence of perception suggests absence of wave.

**Why it is incorrect**

The human hearing threshold is I₀ = 10⁻¹² W/m² (0 dB), not absolute zero. Silence perceived under normal conditions has intensities close to this threshold, but not null. Furthermore, background environmental noise (breathing, blood circulation, microfluctuations of atmosphere) ensures that intensity is never exactly zero.

**Detection signal**

The student uses zero intensity in dB calculations, which would produce an undefined logarithm, or expects to achieve negative intensities through perfect cancellation.

**Conceptual correction**

0 dB is not absence of sound, it is the standard hearing threshold. Negative dB values represent sub-threshold intensities, not "anti-sound." Absolute silence is physically unattainable; the best acoustic vacuum reaches levels below the threshold.

**Mini-example of contrast**

In an anechoic chamber (room without reflections), the noise level can reach -10 dB or -20 dB. This does not mean "negative sound," but intensity 10 or 100 times lower than the human hearing threshold. Still, air molecules vibrate and transport energy, just below our perceptual threshold.

## Quick self-control rule

**Mandatory dimensional verification**: Before accepting any intensity result, verify that the units are W/m².

- If you obtain W, you have power, not intensity. Divide by area (m²).
- If you obtain W/m³, you have energy density, not intensity. Multiply by velocity (m/s).
- If you obtain Pa (pascals), you have pressure, not intensity. Use the physical relation between acoustic pressure and intensity.

**Order of magnitude verification**: The hearing threshold intensity is 10⁻¹² W/m². Typical values:

- Whisper: 10⁻¹⁰ W/m² (20 dB)
- Conversation: 10⁻⁶ W/m² (60 dB)
- Traffic: 10⁻⁴ W/m² (80 dB)
- Concert: 10⁻² W/m² (100 dB)
- Pain: 10¹ W/m² (130 dB)

Values outside 10⁻¹⁵ to 10³ W/m² are physically improbable for ordinary acoustic waves.

**Inverse square law verification**: If distance is multiplied by n, intensity must be divided by n².

- r × 2 → I ÷ 4 (factor 0.25)
- r × 3 → I ÷ 9 (factor ≈0.11)
- r × 10 → I ÷ 100 (factor 0.01)

Verify that your results satisfy this geometric relationship.

**Logarithmic verification in dB**:

- +3 dB ≈ double physical intensity
- A 10 dB increase means 10 times the physical intensity
- A 20 dB increase means 100 times the physical intensity

If your dB calculations do not follow these relationships, review the application of the logarithmic formula.
`;export{e as default};
