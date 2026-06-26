const e=`# Exam-type example

## Problem statement

A monochromatic light ray of wavelength 589 nm in vacuum strikes the flat surface of a glass block at an angle of 45 degrees from the normal. The speed of light inside the glass is 1.97 times ten to the eighth metres per second. Determine the refractive index of the glass, the wavelength of the light inside the glass and the angle of refraction of the ray.

## Data

- Wavelength in vacuum: 589 nm (equivalent to 589 times ten to the minus ninth metres)
- Angle of incidence: 45 degrees from the normal
- Speed of light in the glass: 1.97 times ten to the eighth metres per second
- Speed of light in vacuum: 2.998 times ten to the eighth metres per second

## System definition

The system consists of a ray travelling through vacuum (or air, with index approximately one) and striking a flat vacuum-glass interface. The plane of incidence contains the ray, the surface normal and the refracted ray. The relevant quantities are [[n]] (glass index), [[c]], [[v_medio]], [[lambda_0]], [[lambda_medio]], [[theta_1]] and [[theta_2]].

## Physical model

The geometrical-optics model with a flat interface between a medium of index one (vacuum) and a medium of index [[n]] (glass) is applied. The light is monochromatic, the medium is homogeneous and isotropic, and the interface is ideal. The definition formula gives [[n]], the wavelength relation gives [[lambda_medio]] and Snell's law gives [[theta_2]].

## Model justification

The model is valid because the light is monochromatic (589 nm, sodium D line), the interface is flat and the glass is homogeneous. The wavelength is much smaller than the dimensions of the block, so diffraction effects are negligible. The model would cease to be valid if the source were polychromatic (dispersion) or if the surface were rough.

## Symbolic solution

First, the refractive index is obtained from its definition:

{{f:definicion_indice}}

Next, the wavelength in the medium is calculated from the relation:

{{f:longitud_onda_medio}}

Finally, the angle of refraction is obtained by applying Snell's law:

{{f:snell_refraccion}}

The complete sequence yields the three requested quantities in a chain: first [[n]], then [[lambda_medio]] and finally [[theta_2]].

## Numerical substitution

For the index: dividing 2.998 times ten to the eighth by 1.97 times ten to the eighth gives approximately 1.522. Therefore [[n]] ≈ 1.522.

For the wavelength in the medium: dividing 589 nm by 1.522 gives approximately 387 nm. Therefore [[lambda_medio]] ≈ 387 nm.

For the angle of refraction: the sine of 45 degrees is approximately 0.7071; dividing by 1.522 gives approximately 0.4648; the arcsine of 0.4648 is approximately 27.7 degrees. Therefore [[theta_2]] ≈ 27.7 degrees.

## Dimensional validation

- Units of the index: (m/s) divided by (m/s) gives dimensionless \`[1]\` ✓
- Units of the wavelength: metres divided by a dimensionless number gives metres \`[L]\` ✓
- Units of the angle: the arcsine of a dimensionless number gives an angle in radians (or equivalently in degrees) \`[1]\` ✓

The dimensional breakdown: \`[L T⁻¹] / [L T⁻¹]\` simplifies to \`[1]\` for the index, confirming coherence.

## Physical interpretation

A refractive index of 1.522 indicates that light travels 52 % more slowly in the glass than in vacuum. This value is consistent with crown-type optical glasses widely used in lenses. If the index were significantly higher (for example, 1.9), we would be dealing with a flint glass or a high optical-density material, and the angular deviation would be even greater.

The wavelength decreases from 589 nm to 387 nm inside the glass. Although the wave is "compressed", the human eye still perceives the yellow colour because the frequency does not change. This wavelength compression has practical consequences for the design of anti-reflective coatings, whose thickness must be a quarter of the wavelength in the medium, not in vacuum.

The refraction angle of 27.7 degrees, smaller than the 45 degrees of incidence, confirms that the ray bends towards the normal upon entering a medium of higher index. If we increased [[theta_1]] up to the critical angle (calculated as the arcsine of the inverse of [[n]], approximately 41.1 degrees from inside the glass), we would observe total internal reflection. This phenomenon delimits the boundary of the model: beyond the critical angle no refracted ray exists.

# Real-world example

## Context

A telecommunications technician must verify that a doped-silica optical fibre correctly guides an infrared laser signal at 1550 nm. The fibre has a core with index [[n]] of 1.468 and a cladding with a lower index. The technician needs to estimate the propagation speed of the signal and the wavelength of the light inside the core in order to check that the conditions for constructive interference are met within the waveguide.

## Physical estimation

Dividing [[c]] (2.998 times ten to the eighth metres per second) by [[n]] of 1.468 gives a speed in the core of approximately 2.042 times ten to the eighth metres per second. Therefore [[v_medio]] ≈ 2.042 times ten to the eighth m/s.

The wavelength inside the core is obtained by dividing 1550 nm by 1.468, yielding approximately 1056 nm. Therefore [[lambda_medio]] ≈ 1056 nm.

The result shows that the wave is significantly compressed inside the fibre. This internal wavelength is what determines the interference conditions in the propagation mode of the guide, and it allows the technician to verify that the fibre operates in the correct single-mode regime for that wavelength.

## Interpretation

The signal speed in the fibre (roughly two thirds of [[c]]) implies a latency of about 4.9 microseconds per kilometre of fibre. For a 6000 km transatlantic link, the minimum theoretical propagation latency would be around 29 milliseconds, a crucial figure for high-frequency applications in financial markets.

The internal wavelength of 1056 nm sets the minimum core thickness for the fibre to be single-mode: if the core diameter is too large compared with [[lambda_medio]], multiple propagation modes appear and degrade the signal. This simple calculation shows how the refractive index of the material determines both the speed of information and the necessary geometry of the device.
`;export{e as default};
