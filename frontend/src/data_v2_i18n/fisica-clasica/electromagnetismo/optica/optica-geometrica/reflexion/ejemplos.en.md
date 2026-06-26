# Exam-type example


## Problem statement

A ray of light travels inside a glass fibre with refractive index 1.52 and reaches the interface with the cladding of index 1.38. The ray strikes the interface at an angle of 25 degrees from the surface. Determine the angle of incidence with respect to the normal, the critical angle of the interface, and whether the ray will undergo total internal reflection or be partially transmitted into the cladding.

## Data

Core index [[n1]] of 1.52. Cladding index [[n2]] of 1.38. Angle of the ray with the surface: 25 degrees.

## System definition

The system is the interface between the fibre core (dense medium) and the cladding (less dense medium). The normal to the interface is perpendicular to the contact surface between both materials.

## Physical model

Geometrical optics in the ray approximation is applied. The law of reflection governs the behaviour of the ray at the interface, and the total internal reflection condition is determined by comparing [[theta_i]] with [[theta_c]]. The critical angle is calculated using the formula relating [[theta_c]] to the indices [[n1]] and [[n2]].

## Model justification

The model is valid because the optical fibre has transverse dimensions (tens of micrometres) much larger than the wavelength of the light (hundreds of nanometres), and the interface is smooth at the nanometre scale. The model would cease to be valid in single-mode fibres where wave effects dominate propagation.

## Symbolic solution

First, the angle given with respect to the surface is converted to the angle with respect to the normal:

[[theta_i]] is obtained as 90 degrees minus the angle with the surface.

Then the critical angle formula is applied:

{{f:angulo_critico}}

Finally, [[theta_i]] is compared with [[theta_c]]: if [[theta_i]] exceeds [[theta_c]], total reflection occurs.

The law of reflection confirms the direction of the reflected ray:

{{f:ley_reflexion}}

## Numerical substitution

For [[theta_i]]: 90 minus 25 gives 65 degrees.

For [[theta_c]]: the ratio [[n2]] over [[n1]] is 1.38 divided by 1.52, which gives approximately 0.9079. The arcsine of 0.9079 is approximately 65.2 degrees.

Comparison: [[theta_i]] of 65 degrees is slightly less than [[theta_c]] of 65.2 degrees.

Therefore [[theta_r]] is 65 degrees (equal to [[theta_i]] by the law of reflection), but the ray does not reach the total reflection condition because it does not exceed [[theta_c]].

## Dimensional validation

The angles [[theta_i]], [[theta_r]] and [[theta_c]] are dimensionless quantities expressed in degrees (or radians). The indices [[n1]] and [[n2]] are dimensionless (velocity ratios). The arcsine argument is dimensionless (ratio of two indices), consistent with the trigonometric function.

## Physical interpretation

The result shows that the ray strikes just below the critical angle, meaning there will be **partial reflection and partial transmission** at the interface. A small fraction of the light will escape into the cladding at each bounce, causing progressive signal attenuation along the fibre.

Physically, the closeness between [[theta_i]] and [[theta_c]] (only 0.2 degrees difference) indicates that the system operates at the confinement limit. If the angle with the surface were 24 degrees (that is, [[theta_i]] of 66 degrees), [[theta_c]] would be exceeded and reflection would be total, with no signal loss. This example illustrates why fibre optic design seeks to maximise the difference between [[n1]] and [[n2]]: a greater contrast reduces [[theta_c]] and facilitates total confinement for a wider range of entry angles.

Sensitivity is high: one degree of difference in [[theta_i]] decides between total confinement and light leakage. This is why commercial optical fibres use claddings with carefully controlled index and cores with optimised index profiles.

# Real-world example


## Context

A simple periscope uses two plane mirrors tilted at 45 degrees to the vertical axis of the tube. The goal is to verify that a ray entering horizontally through the upper aperture exits horizontally through the lower aperture, and to estimate the angular error if one of the mirrors is misaligned by 2 degrees from the ideal inclination.

## Physical estimation

With mirrors at exactly 45 degrees, a horizontal ray strikes the first mirror with [[theta_i]] of 45 degrees. By the law of reflection, [[theta_r]] is 45 degrees, and the ray exits vertically (downward). Upon reaching the second mirror (also at 45 degrees), it strikes with [[theta_i]] of 45 degrees and exits horizontally. The total deviation is 0 degrees from the input horizontal, which is the function of the periscope.

If the first mirror has a 2-degree error (tilted at 47 degrees from the axis), the ray strikes with [[theta_i]] of 43 degrees relative to the local normal. By the law of reflection, [[theta_r]] is 43 degrees. The reflected ray deviates 4 degrees from the vertical (double the mirror error). Upon reaching the correct second mirror, another 4 degrees of deviation accumulates. The output ray forms 4 degrees with the horizontal, producing a displaced image.

A glass core with [[n1]] of 1.52 and cladding of [[n2]] of 1.38 yields a critical angle [[theta_c]] of approximately 65 degrees, which does not apply in this mirror example in air but contextualises the contrast between reflection at metallic interfaces (mirrors) and dielectric interfaces (fibres).

## Interpretation

The result confirms the practical rule that an error of alpha degrees in the orientation of a plane mirror produces a deviation of two alpha degrees in the reflected ray. This doubling is due to geometry: rotating the mirror by an angle also rotates the normal by that angle, and the sum of the change in incidence and in reflection doubles the effect. In military periscopes and medical endoscopes, the angular tolerance of the mirrors is critical and controlled to the arcminute. The geometric specular reflection model predicts these deviations exactly without needing wave optics, provided the mirrors are flat and smooth at the wavelength scale.