const e=`# Exam-type example

## Problem statement

In a Young's double-slit experiment, light from a helium-neon laser with wavelength [[lambda]] equal to 632.8 nm illuminates two slits. The separation between slits is [[d]] equal to 0.25 mm and the distance from slits to observation screen is [[L]] equal to 1.80 m. Calculate the position of the third lateral maximum and the separation between consecutive fringes.

## Data

- [[lambda]] is 632.8 nm equal to 6.328 × 10⁻⁷ m
- [[d]] is 0.25 mm equal to 2.5 × 10⁻⁴ m
- [[L]] is 1.80 m
- Requested order: [[m]] equal to 3

## System definition

The system consists of two narrow slits separated by distance [[d]] acting as coherent secondary sources. Light from both slits superposes on the screen, creating an interference pattern with alternating fringes of maximum and minimum intensity. The output variable is the linear position [[y_m]] of the maxima on the screen.

## Physical model

The double-slit interference model in the small-angle approximation is applied. The position of each maximum depends linearly on order [[m]], wavelength [[lambda]], screen distance [[L]] and slit separation [[d]]. The separation between consecutive fringes is constant.

## Model justification

The laser provides highly coherent and monochromatic light. The slit separation is much larger than the wavelength, allowing multiple fringes to be observed. The distance to the screen is sufficiently large for the small-angle approximation to be valid for the first orders. The angle of the third maximum will be approximately 0.008 radians, well below the 0.1 radian limit of the approximation.

## Symbolic solution

The starting point is the optical path difference [[delta]] between the two beams:

{{f:diferencia_camino}}

For an intensity maximum to exist, the path difference must satisfy the constructive interference condition:

{{f:condicion_maximos}}

For intensity minima, the path difference must satisfy the destructive interference condition:

{{f:condicion_minimos}}

Combining the maximum condition with the small-angle approximation, the position of the maximum of order [[m]] on the screen is:

{{f:posicion_franja}}

The separation between consecutive fringes is:

{{f:separacion_fringes}}

## Numerical substitution

Fringe separation is [[Delta_y]] equal to 6.328 × 10⁻⁷ m multiplied by 1.80 m divided by 2.5 × 10⁻⁴ m equal to 4.56 × 10⁻³ m, approximately 4.6 mm.

The position of the third maximum is [[y_m]] for order 3, equal to 3 × 4.56 × 10⁻³ m equal to 1.37 × 10⁻² m, approximately 13.7 mm.

## Dimensional validation

For [[y_m]]: dimensionless × m × m / m gives m. Correct.

For [[Delta_y]]: m × m / m gives m. Correct.

Order of magnitude check: 13.7 mm at 1.80 m distance implies an angle of approximately 0.008 radians, validating the small-angle approximation.

## Physical interpretation

The third maximum is located at 13.7 mm from the centre of the pattern. Physically, this means the optical path difference [[delta]] at that point equals exactly 3 multiplied by [[lambda]], that is, [[delta]] equal to 1898.4 nm. The two waves arriving at that screen position have travelled paths differing by three complete wavelengths, so their crests coincide perfectly and they reinforce each other constructively. The maximum condition is satisfied because [[delta]] is an integer multiple of [[lambda]], guaranteeing that both waves are exactly in phase.

The fringe separation of 4.6 mm reveals how the geometry of the experiment translates a microscopic quantity (the wavelength) into a macroscopic observable pattern. This amplification factor, given by [[L]] divided by [[d]], equals 7200 in this setup, meaning each wavelength of path difference maps to 4.6 mm on the screen. This is what makes interference useful as a measurement technique.

Doubling the slit separation would halve the fringe spacing because the angular separation between orders decreases. Switching to a blue laser at 450 nm would bring fringes proportionally closer together, since shorter wavelengths require less angular displacement to accumulate the same phase difference. The first intensity minimum lies between orders zero and one, where [[delta]] equals 0.5 multiplied by [[lambda]], producing complete cancellation because the waves arrive perfectly out of phase. Energy is not lost at the minima; it is redistributed towards the maxima, conserving total luminous power across the screen.

# Real-world example

## Context

A Michelson interferometer is used to measure displacements in a nanometric positioning system. The device splits a helium-neon laser beam with [[lambda]] equal to 632.8 nm into two perpendicular arms. A fixed mirror reflects a reference beam and a movable mirror reflects the measurement beam. Upon recombination, the two beams interfere producing a pattern whose intensity depends on the optical path difference between both arms.

## Physical estimation

When the movable mirror displaces by a given distance, the change in the path difference [[delta]] is twice the displacement because light travels back and forth. Each time the mirror moves [[lambda]]/2, the interference pattern completes a full cycle. For [[lambda]] equal to 632.8 nm, the minimum displacement detectable by fringe counting is [[lambda]]/2 equal to 316.4 nm.

Through electronic fringe interpolation techniques, changes of one hundredth of a fringe can be detected, achieving resolutions of the order of 3 nm. For a displacement of 1 mm, the number of fringes counted is 2 × 10⁻³ m divided by 632.8 × 10⁻⁹ m, approximately 3161 fringes.

## Interpretation

The interferometer precision comes from converting a mechanical displacement into a change in the optical path difference [[delta]] between the two arms, detectable as an intensity variation. When [[delta]] changes by one wavelength, the interference pattern completes a full constructive-destructive-constructive cycle. The laser wavelength defines the fundamental measurement scale. Interference allows detecting changes of a fraction of wavelength, providing nanometric resolution. The constructive interference condition is met whenever [[delta]] equals an integer number of wavelengths, producing maximum intensity at the detector. Between these maxima, the destructive condition produces minimum intensity, enabling precise fringe counting. The practical limit is set by thermal fluctuations and mechanical vibrations of the setup, not by the physics of interference. This principle is the same used by LIGO gravitational wave detectors, where 4 km arms allow detecting displacements of 10⁻¹⁸ m, corresponding to path differences far smaller than a single wavelength.
`;export{e as default};
