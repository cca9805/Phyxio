## Conceptual errors


### Error 1: Measuring the angle of incidence from the surface instead of from the normal

**Why it seems correct**

The student sees the surface as the natural reference because it is the visible physical element. The incorrect generalisation is to assume that the relevant angle is the one between the ray and the surface, not the one with an imaginary perpendicular line.

**Why it is incorrect**

The law of reflection is formulated with respect to the normal, not the surface. If the angle is measured from the surface (call it alpha), the correct angle for the law is 90 minus alpha. Using alpha directly produces a reflected ray with the wrong direction.

**Detection signal**

The student obtains a reflected ray that does not satisfy symmetry about the normal, or adds angles that give more than 90 degrees from the normal.

**Conceptual correction**

Always draw the normal first, perpendicular to the surface at the contact point. Measure [[theta_i]] and [[theta_r]] from that normal. If the problem gives the angle with respect to the surface, convert it by subtracting from 90 degrees before applying the law.

**Contrast mini-example**

A ray strikes at 30 degrees from the surface. Correct: [[theta_i]] is 60 degrees (measured from the normal), so [[theta_r]] is 60 degrees. Incorrect: using 30 degrees directly as [[theta_i]], obtaining a reflected ray at only 30 degrees from the normal, far more vertical than it should be.

## Model errors

**Mini-example of contrast**

Check 1: In Reflection, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

### Error 2: Assuming the law of reflection does not apply on rough surfaces

**Why it seems correct**

On a rough surface no defined reflection is seen (as in a mirror), so the incorrect analogy is to conclude that light does not follow the law of reflection in that case.

**Why it is incorrect**

The law of reflection holds locally at each microscopic point of the surface. What changes is that each point has a different (random) normal, so each individual ray reflects in a different direction. The macroscopic effect is diffuse scattering, but the fundamental law still applies to each individual ray.

**Detection signal**

The student states that diffuse reflection violates the law of reflection, or that there is no reflection on matte surfaces.

**Conceptual correction**

Diffuse reflection is the massive application of the law of reflection to millions of randomly oriented local normals. The law does not fail: what fails is the assumption of a single normal for the entire surface. On each microfacet, [[theta_r]] is still exactly equal to [[theta_i]] with respect to the normal of that microfacet.

**Contrast mini-example**

Polished surface: all points share the same normal, all rays reflect in the same direction, a sharp image is seen. Rough surface: local normals vary randomly, each ray reflects in a different direction, uniform illumination is seen without an image.

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

### Error 3: Inverting the refractive indices when calculating the critical angle

**Why it seems correct**

The student memorises the critical angle formula as the arcsine of a ratio of indices, but the confusion of magnitudes leads to swapping numerator and denominator.

**Why it is incorrect**

The critical angle only exists when light passes from a denser medium to a less dense one ([[n1]] greater than [[n2]]). The correct formula has [[n2]] in the numerator and [[n1]] in the denominator. If they are inverted, the ratio exceeds one and the arcsine does not exist, or an absurd value is obtained.

**Detection signal**

The calculator returns an error when attempting the arcsine of a number greater than one, or the student obtains a critical angle greater than 90 degrees.

**Conceptual correction**

Remember that [[theta_c]] is always less than 90 degrees. If [[n1]] is greater than [[n2]], the ratio [[n2]] divided by [[n1]] is less than one, and the arcsine is well defined. If a number greater than one is obtained, the indices have been inverted.

**Contrast mini-example**

Glass-air interface: [[n1]] of 1.5, [[n2]] of 1.0. Correct: arcsine of 1.0 divided by 1.5 gives approximately 42 degrees. Incorrect: arcsine of 1.5 divided by 1.0 gives arcsine of 1.5, which does not exist.

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

### Error 4: Failing to identify the correct normal on curved surfaces

**Why it seems correct**

On flat surfaces the normal is obvious and unique. Excessive generalisation leads the student to assume the normal is always vertical or always perpendicular to a horizontal reference line.

**Why it is incorrect**

On curved surfaces the normal changes from point to point. On a spherical mirror the normal at each point points towards the centre of curvature. If an incorrect normal is used, the measured angles do not correspond to the law of reflection and the prediction of the reflected ray is wrong.

**Detection signal**

The traced reflected rays do not converge at the expected focus of a spherical mirror, or the predicted image has a position inconsistent with the mirror equation.

**Conceptual correction**

At each point on a curved surface, draw the radius connecting that point to the centre of curvature. The normal is the extension of that radius. Only then measure [[theta_i]] and [[theta_r]] from that local normal.

**Contrast mini-example**

A ray incident at 20 degrees from the optical axis of a concave mirror, striking 5 cm from the vertex. Correct: the normal at that point aims towards the centre of curvature (offset from the axis), and [[theta_i]] is measured from that local normal. Incorrect: measuring [[theta_i]] from the optical axis, ignoring local curvature, and obtaining a reflected ray that does not pass through the focus.

## Interpretation errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

### Error 5: Confusing total reflection with 100 per cent intensity reflection

**Why it seems correct**

The term total suggests that all the light is reflected with maximum intensity under any circumstance. The confusion of magnitudes (direction versus intensity) reinforces the error.

**Why it is incorrect**

Total internal reflection is a directional phenomenon, not one of absolute intensity: all light reaching the interface is reflected (there is no transmitted ray), but the intensity of the reflected ray depends on the intensity of the incident ray. Moreover, total reflection only occurs when [[theta_i]] exceeds [[theta_c]] and only in the direction from denser to less dense medium. A metallic surface may reflect 95 per cent of light at any angle, but that is not total internal reflection.

**Detection signal**

The student applies the concept of total reflection to a metallic surface or to an interface where light travels from the less dense to the denser medium.

**Conceptual correction**

Total internal reflection requires three simultaneous conditions: [[n1]] greater than [[n2]], [[theta_i]] greater than [[theta_c]], and light travelling from the dense medium. If any one is not met, reflection is not total even though the surface may be highly reflective.

**Contrast mini-example**

Light in air ([[n1]] of 1.0) striking glass ([[n2]] of 1.5): no critical angle exists in this direction, no matter the angle there will always be partial transmission. Light in glass ([[n1]] of 1.5) striking air ([[n2]] of 1.0) at 50 degrees: exceeds [[theta_c]] of 42 degrees, all light is reflected.

## Quick self-control rule

Before accepting a reflection result, verify these three points:

- **Angular symmetry**: [[theta_r]] must be exactly equal to [[theta_i]]. If they differ, there is an error in the identification of the normal or in the angle measurement.
- **Physical range**: both angles must lie between 0 and 90 degrees. A negative angle or one greater than 90 degrees from the normal is physically impossible.
- **Total reflection condition**: if [[theta_c]] is calculated, check that [[n1]] is greater than [[n2]]. If it is not, no critical angle exists and any value obtained is a calculation artefact.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.