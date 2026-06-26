const e=`## Conceptual errors

### Error 1: Measuring the angle from the surface instead of the normal

**Why it seems correct**

Intuitively, the surface is the visible and tangible reference. The student sees the ray as "grazing" or "steep" relative to the surface and tends to measure the angle with respect to it, by analogy with the angle of a ramp or a slope.

**Why it is incorrect**

Snell's law explicitly uses the angle with the normal. If measured from the surface, the value obtained is the complement of the correct one (ninety degrees minus the true angle). Substituting into the formula, the sine of the complement is the cosine of the true angle, producing a physically incoherent result.

**Detection signal**

The calculated refracted angle is larger than the incident angle when it should be smaller (passing to a denser medium), or the arcsine argument exceeds unity for data that clearly allow refraction.

**Conceptual correction**

The angle of incidence [[theta_1]] and the angle of refraction [[theta_2]] are always measured from the line perpendicular to the interface at the point of contact. The normal is the symmetry direction of the problem; optical properties only change perpendicularly to the surface.

**Mini contrast example**

A ray arrives at glass with incidence of 30 degrees from the normal. If the student measures from the surface, they interpret 60 degrees. Applying Snell's law with 60 degrees and glass index 1.50, they obtain a sine greater than one, which (erroneously) indicates total reflection. With the correct 30 degrees, the sine of the refracted angle is 0.33, giving a refraction angle of about 19 degrees, a perfectly reasonable result.

### Error 2: Inverting the media in Snell's law

**Why it seems correct**

The student may reason "light comes from air and enters glass, glass is denser, so [[n1]] should be the larger one." This association confuses "denser medium" with "first medium."

**Why it is incorrect**

[[n1]] is always the index of the medium through which the incident ray travels and [[n2]] is that of the medium through which the refracted ray travels, regardless of which is larger. Inverting them reverses the prediction of whether the ray bends toward or away from the normal.

**Detection signal**

The result predicts that the ray bends away from the normal upon entering a denser medium, which contradicts direct experience and the fundamental qualitative rule.

**Conceptual correction**

Medium 1 is the one where the ray is already travelling before reaching the interface. Medium 2 is the one into which the ray passes after crossing the interface. Assignment is never based on which has a higher or lower index.

**Mini contrast example**

Light in air ([[n1]] of 1.00) is incident at 45 degrees on water ([[n2]] of 1.33). Correct result: [[theta_2]] of about 32 degrees, the ray bends toward the normal. If the student inverts and uses [[n1]] of 1.33 and [[n2]] of 1.00, they obtain [[theta_2]] of about 70 degrees, predicting the ray bends away from the normal upon entering water, which is absurd.

## Model errors

### Error 3: Applying Snell's law to rough surfaces

**Why it seems correct**

Snell's law seems universal: "whenever there is a change of medium, refraction occurs." The student applies it to any interface without considering the surface condition.

**Why it is incorrect**

Snell's law assumes an interface that is flat on the scale of the wavelength. When surface roughness is comparable to the wavelength, the local normal varies from point to point and refraction produces a scattered beam in multiple directions, not a sharp ray at a single angle.

**Detection signal**

When measuring experimentally, the refracted ray is not a well-defined line but a diffuse spot or a cone of light. The data do not fit a single angle.

**Conceptual correction**

Before applying Snell's law, verify that the surface is smooth on the optical scale (roughness much less than the wavelength). For rough surfaces, scattering models such as the Beckmann model or statistical approximations are required.

**Mini contrast example**

A 633 nm laser beam hits polished glass with 5 nm roughness: a sharp refracted ray is observed at a well-defined angle predicted by Snell's law. The same beam on a ground surface with 500 nm roughness produces a diffuse pattern with no privileged direction. Snell's law explains only the first case.

## Mathematical errors

### Error 4: Calculating the critical angle when [[n1]] is less than [[n2]]

**Why it seems correct**

The student memorises the critical-angle formula and applies it mechanically without verifying the existence condition. They reason "the formula exists, I can always use it."

**Why it is incorrect**

The critical angle only makes sense when light travels from a denser to a less dense medium ([[n1]] greater than [[n2]]). If [[n1]] is less than [[n2]], the ratio [[n2]]/[[n1]] is greater than one, and the arcsine of a value greater than one has no real solution. Physically, total reflection does not occur in that direction.

**Detection signal**

The calculator returns "error" or "NaN" when attempting to evaluate the arcsine. If the calculation is forced, a complex number or an invalid-domain message appears.

**Conceptual correction**

Before calculating [[theta_c]], verify that [[n1]] is strictly greater than [[n2]]. If this condition is not met, total internal reflection does not exist for that configuration: light can always be refracted at any angle of incidence.

**Mini contrast example**

Light in air ([[n1]] of 1.00) is incident on glass ([[n2]] of 1.52). The student attempts to calculate the critical angle: arcsine of (1.52/1.00), which gives arcsine of 1.52, undefined. Total reflection does not occur when light goes from air to glass. If light were going from glass to air, then yes: arcsine of (1.00/1.52) gives approximately 41 degrees.

## Interpretation errors

### Error 5: Believing that total reflection means light disappears in the second medium

**Why it seems correct**

The name "total reflection" suggests that all light stays in the first medium and absolutely nothing happens in the second medium. The mental image is that the second medium is completely dark.

**Why it is incorrect**

Although all reflected energy returns to the first medium, in the second medium an evanescent wave exists that penetrates a distance of the order of the wavelength. This wave does not transport net energy, but its electric field is not zero. Moreover, if another medium approaches to sub-micrometre distances, the evanescent wave can couple and transmit energy (frustrated total reflection).

**Detection signal**

The student states that "behind the interface the electric field is exactly zero" or cannot explain the phenomenon of frustrated total reflection (used in TIRF microscopy and fibre-optic couplers).

**Conceptual correction**

In total internal reflection, all energy is reflected but the electromagnetic field penetrates exponentially into the second medium as an evanescent wave. The amplitude decays as the exponential of the distance divided by a penetration length of the order of the wavelength. There is no net energy transport unless another medium is very close.

**Mini contrast example**

A beam in glass is incident on the glass–air interface above the critical angle: it is totally reflected. If a second glass prism is brought within 200 nm of the first surface, some light appears in the second prism. This demonstrates that the field is not zero in medium 2, contradicting the idea of "total disappearance."

## Quick self-control rule

Before accepting a Snell's law result, apply three quick checks: first, that the refracted angle is between zero and ninety degrees; second, that if light passes to a denser medium the refracted angle is smaller than the incident one (and vice versa); third, that if calculating the critical angle, medium 1 has the larger index. If any of these three checks fails, review the medium assignment and angular reference before proceeding.
`;export{e as default};
