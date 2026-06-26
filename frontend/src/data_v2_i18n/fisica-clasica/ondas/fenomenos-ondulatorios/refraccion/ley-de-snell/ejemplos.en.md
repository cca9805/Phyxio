# Exam-type example

## Problem statement

A monochromatic light ray travels inside a crown glass block and arrives at the interface with air. The refractive index of the glass is 1.52 and that of air is 1.00. The ray is incident at an angle of 25 degrees to the normal to the surface. Determine the angle of refraction in air. Then, calculate the critical angle for this interface and indicate what would happen if the angle of incidence were 50 degrees.

## Data

- Refractive index of glass (medium 1): 1.52
- Refractive index of air (medium 2): 1.00
- Angle of incidence: 25 degrees, measured from the normal

## System definition

The system consists of a monochromatic light ray propagating in crown glass that is incident on a flat glass–air interface. The normal to the interface is the reference for all angles. Medium 1 is the glass (where the incident ray travels) and medium 2 is air (where the refracted ray will travel if it exists).

## Physical model

Snell's law in its standard form is applied, establishing that the product [[n1]] times the sine of [[theta_1]] equals the product [[n2]] times the sine of [[theta_2]]. For the critical angle [[theta_c]], the condition is that the refracted angle reaches ninety degrees. The relevant magnitudes are the indices [[n1]] and [[n2]], the angles [[theta_1]] and [[theta_2]], and the critical angle [[theta_c]].

## Model justification

The glass–air interface is flat and polished (roughness much less than visible wavelength). The media are homogeneous and isotropic. The light is monochromatic, so there is no chromatic dispersion. The angle of 25 degrees is far from grazing incidence, so Fresnel reflectivity effects do not dominate. Under these conditions Snell's law is exact. The model would cease to be valid if the surface were rough, if the glass were birefringent, or if polychromatic light were used.

## Symbolic solution

To obtain the refraction angle, Snell's law is applied directly:

{{f:ley_snell}}

Solving for [[theta_2]]:

{{f:ley_snell}}

For the critical angle, the condition [[theta_2]] equal to ninety degrees (sine equal to unity) is imposed:

{{f:angulo_critico}}

## Numerical substitution

For the refraction angle, the product of [[n1]] (1.52) times the sine of 25 degrees (0.4226) is calculated, giving 0.6424. Dividing by [[n2]] (1.00) gives 0.6424. Applying the arcsine yields an angle of approximately 39.97 degrees. Therefore [[theta_2]] ≈ 40.0 degrees.

For the critical angle, the ratio [[n2]]/[[n1]] is calculated, that is 1.00/1.52, giving 0.6579. Applying the arcsine yields approximately 41.1 degrees. Therefore [[theta_c]] ≈ 41.1 degrees.

If the angle of incidence were 50 degrees, since 50 degrees is greater than [[theta_c]] (41.1 degrees), total internal reflection occurs and no refracted ray exists.

## Dimensional validation

Snell's law relates dimensionless products (dimensionless index multiplied by dimensionless sine) on both sides of the equality. The argument of the arcsine is also dimensionless. The result is an angle in radians or degrees depending on the conversion, which is dimensionally consistent.

Breakdown: `[1] · [1] = [1] · [1]` ✓

The critical angle results from the arcsine of a dimensionless ratio, equally producing an angle. Dimensions: `arcsin([1]/[1])` → angle ✓

## Physical interpretation

The result [[theta_2]] of 40 degrees shows that the ray bends significantly away from the normal when passing from glass to air. This is consistent with the qualitative rule: when passing to an optically less dense medium, light bends away from the normal because its phase speed increases and the wavelength expands.

The refracted angle (40 degrees) is very close to the critical angle (41.1 degrees). This means that increasing the angle of incidence by just one more degree would reach the total reflection threshold. This proximity is not coincidental: for relatively low indices (crown glass with index 1.52), the critical angle lies in the middle range and it is easy to find oneself near the limit.

When the angle of incidence is raised to 50 degrees, the threshold is exceeded and all light returns to the glass. Physically, the tangential component of the wave vector required by air would be larger than the maximum possible in that medium, making the existence of a refracted ray impossible. In practice, this is exactly what total-reflection prisms exploit: they redirect beams without absorption loss.

If the glass index were higher (for example 1.80 as in a dense flint glass), the critical angle would drop to about 34 degrees, enormously widening the total reflection zone and making the prism useful at much lower angles of incidence.

# Real-world example

## Context

In the design of telecommunications optical fibres, the fibre core has a refractive index of approximately 1.48 and the cladding an index of 1.46. Light is confined within the core by total internal reflection: as long as rays hit the core–cladding interface at angles above the critical angle, the signal propagates without loss by refraction.

The engineer needs to determine the critical angle of this interface to calculate the acceptance cone of the fibre (numerical aperture), which defines which rays can be injected into the fibre and propagate effectively.

## Physical estimation

The critical angle is calculated using the formula derived from Snell's law with [[n1]] of 1.48 (core) and [[n2]] of 1.46 (cladding). The ratio [[n2]]/[[n1]] is 1.46/1.48, giving 0.9865. The arcsine of 0.9865 is approximately 80.6 degrees. Therefore [[theta_c]] ≈ 80.6 degrees.

This means only rays hitting the interface at angles greater than 80.6 degrees to the normal (i.e., less than 9.4 degrees from the surface) are totally reflected. In practice, this corresponds to rays nearly parallel to the fibre axis, which limits the acceptance cone.

The numerical aperture of the fibre (sine of the half-acceptance angle measured in exterior air) results from the square root of the difference of squared indices, giving approximately 0.24. This corresponds to a half-acceptance angle of about 14 degrees in air, meaning that light must be injected with a relatively narrow cone.

## Interpretation

The result shows that in telecommunications optical fibres, the index difference between core and cladding is very small (only 0.02), placing the critical angle very close to grazing incidence (80.6 degrees). This nearly grazing geometry explains why single-mode fibres have such thin cores (of the order of 8 to 10 micrometres): they need to eliminate propagation modes with angles too far from the axis.

If the index difference were larger (for example [[n1]] of 1.62 and [[n2]] of 1.49, as in plastic multimode fibres), the critical angle would drop to about 67 degrees and the numerical aperture would increase to 0.65, allowing light injection with a much wider cone but at the cost of greater modal dispersion and lower bandwidth.

Snell's law, through the critical angle, directly connects material properties (indices) with fibre performance (numerical aperture, number of modes). This makes it the fundamental equation of optical waveguide design.
