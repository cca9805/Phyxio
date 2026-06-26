# Exam-type example

## Problem statement

A laboratory laser emitter emits a pulse of light of five hundred thirty-two nanometers wavelength. This pulse crosses a glass cell of fifteen centimeters length filled with water, and then crosses a glass plate of two centimeters thickness. Calculate: (a) the speed of light in water, (b) the total crossing time of the water-glass system, and (c) the wavelength of light inside the water.

## Data

- Wavelength in vacuum: five hundred thirty-two nanometers
- Length of water cell: fifteen centimeters
- Thickness of glass plate: two centimeters
- Refractive index of water: approximately one point three three
- Refractive index of glass: approximately one point five
- Speed of light in vacuum: three hundred million meters per second

## System definition

The system consists of two consecutive transparent media: water with [[n_indice]] approximately one point three three and glass with [[n_indice]] approximately one point five. The light propagates perpendicular to the interfaces, crossing first the fifteen centimeters of water and then the two centimeters of glass.

Magnitudes involved:
- [[c_vacio]]: reference speed in vacuum
- [[v_medio]]: speed in each medium (different for water and glass)
- [[n_indice]]: characteristic index of each material
- [[lambda_vacio]]: wavelength of the source in vacuum
- [[lambda_medio]]: reduced wavelength inside water

## Physical model

We apply the constant refractive index model for homogeneous and isotropic media. The propagation speed in each medium is determined through the fundamental relationship linking [[v_medio]] with [[c_vacio]] and [[n_indice]].

For the wavelength in the medium, we use the relationship of frequency conservation with wavelength reduction proportional to the index.

{{f:velocidad_medio}}

{{f:longitud_onda_medio}}

## Model justification

The constant index model is applicable because: the water and glass media are transparent and homogeneous at the macroscopic scale; the wavelengths involved (visible green) are far from electronic resonances of these materials; the intensity of the laboratory laser is sufficiently low to maintain optical linearity.

The model would cease to be valid if: the light were of very high intensity (nonlinear effects), if the water contained bubbles or impurities (non-homogeneity), or if we used deep ultraviolet light near the absorption band of glass (anomalous dispersion).

## Symbolic solution

For the speed in water, we solve from the fundamental relationship between [[v_medio]], [[c_vacio]], and [[n_indice]]:

{{f:velocidad_medio}}

The resulting speed is the quotient between the speed in vacuum and the index of water.

For the speed in glass, we apply the same relationship with the corresponding index:

{{f:indice_refraccion}}

The crossing time in each medium is calculated by dividing the traveled distance by the speed in that medium. The total time is the sum of the partial times.

For the wavelength in water, we use the relationship that maintains constant frequency:

{{f:longitud_onda_medio}}

The wavelength in the medium is reduced by the index factor with respect to the wavelength in vacuum.

## Numerical substitution

**Calculation of speed in water:**

Operation: divide the speed in vacuum by the index of water.

Numerical breakdown: three hundred thousand million divided by one point three three gives approximately two hundred twenty-six thousand million meters per second.

Therefore [[v_medio]] in water is approximately two point two six times ten to the eighth meters per second.

**Calculation of speed in glass:**

Operation: divide the speed in vacuum by the index of glass.

Numerical breakdown: three hundred thousand million divided by one point fifty gives exactly two hundred thousand million meters per second.

Therefore [[v_medio]] in glass is exactly two times ten to the eighth meters per second.

**Calculation of crossing times:**

Operation for water: divide fifteen centimeters by the speed in water.

Breakdown: zero point fifteen meters divided by two hundred twenty-six thousand million gives approximately six hundred sixty picoseconds.

Operation for glass: divide two centimeters by the speed in glass.

Breakdown: zero point zero two meters divided by two hundred thousand million gives exactly one hundred picoseconds.

Total time: approximately seven hundred sixty picoseconds.

**Calculation of wavelength in water:**

Operation: divide the wavelength in vacuum by the index of water.

Numerical breakdown: five hundred thirty-two divided by one point three three gives approximately four hundred nanometers.

Therefore [[lambda_medio]] in water is approximately four hundred nanometers.

## Dimensional validation

- Speed units: meters divided by seconds give meters per second, consistent with speed.
- Dimensional breakdown: length divided by time gives velocity.
- Conversion: two point two six times ten to the eighth meters per second is equivalent to approximately three quarters of the vacuum speed, reasonable scale for water.

- Time units: meters divided by meters per second give seconds.
- Dimensional breakdown: dividir `[L]` entre `[L T⁻¹]` da `[T]`.
- The total time of approximately seven hundred sixty picoseconds is consistent with trajectories of centimeters at speeds of hundreds of millions of meters per second.

- Wavelength units: nanometers divided by dimensionless give nanometers.
- Dimensional breakdown: dividir `[L]` entre `[1]` conserva `[L]`.
- Four hundred nanometers is consistent with violet-blue visible light, close to the input value.

## Physical interpretation

The calculated speeds reveal how fundamentally the material medium alters light propagation. When light enters water, the collective response of water molecules' electrons creates an apparent slowing effect. Each water molecule becomes a microscopic oscillator that re-emits radiation slightly delayed. The superposition of all these secondary waves produces a net wavefront that advances at only seventy-five percent of vacuum speed. This is not merely a numerical reduction but a manifestation of light-matter interaction at the atomic scale.

The even greater slowing in glass—down to two-thirds of vacuum speed—reflects glass's higher electronic polarizability. Silicon dioxide's tightly bound electrons respond more strongly to the incident electromagnetic field, creating greater phase delay. This thirty-three percent speed reduction explains why prisms can separate white light into colors: different frequencies experience slightly different polarizability responses, hence slightly different indices and speeds.

The picosecond-scale crossing times acquire physical significance when considering that modern fiber-optic communication systems operate at gigabit to terabit-per-second rates. Each bit occupies sub-nanosecond time slots. The two-hundred-picosecond additional delay introduced by our water-glass system represents lost information-carrying capacity. In transoceanic cables spanning six thousand kilometers, the cumulative speed reduction means that even at light speed, information cannot traverse the ocean faster than about twenty milliseconds—an immutable physical limit that dictates high-frequency trading strategies and real-time communication architectures.

Understanding these delays matters for designing optical systems. Anti-reflective coatings exploit precisely these velocity changes to create destructive interference between reflected waves. Microscope objectives compensate for cover-glass-induced delays to maintain image quality. The quantitative mastery of speed reduction enables technologies from endoscopes to space telescope optics.

The reduced wavelength of four hundred nanometers inside water has important consequences for interference optics. An air bubble in water will act as a diverging lens because light propagates faster in the bubble, while a water drop in air acts as a converging lens. These index gradient effects are fundamental in rainbow formation and in the functioning of the eyes of aquatic living beings.

---

# Real-world example

## Context

Transoceanic optical fiber communications use submarine cables of high-purity glass that cross entire oceans. In these systems, the reduced speed of light in the fiber glass physically limits the maximum rate of data transmission and the minimum achievable latency between continents.

A typical cable between Europe and the United States has a length of approximately six thousand kilometers of optical fiber. Telecommunications engineers must carefully calculate these delays to synchronize global networks, especially in financial applications where microseconds of difference can mean millions of euros in transactions.

## Physical estimation

Consider a pulse of light traveling from London to New York through a typical submarine optical fiber. The fiber has refractive index approximately one point four six, an intermediate value between seawater and standard optical glasses.

The speed of light in this fiber is approximately two hundred fifty-seven thousand kilometers per second, calculated by dividing the speed in vacuum by the characteristic index of telecommunications glass.

The travel time through six thousand kilometers of fiber is approximately twenty-three milliseconds. If light could travel in vacuum (practically impossible), the same journey would take approximately twenty milliseconds. The material medium introduces an additional delay of three milliseconds due to the speed reduction.

This three millisecond delay is physically inevitable as long as glass fibers are used. Even with perfect fibers without losses or dispersion, the finite speed of light in the medium establishes a fundamental limit to communication speed between continents.

## Interpretation

The example illustrates how a fundamental property of matter ([[n_indice]]) imposes practical limits on human technology. Unlike other factors that can be improved with engineering (attenuation, noise, dispersion), the reduced speed in the medium is a hard limit dictated by basic physics.

The minimum latency between London and New York is approximately twenty-three milliseconds, regardless of laser power or detector sensitivity. This delay affects the design of communication protocols, high-frequency trading systems, and real-time applications such as video conferences and remote surgery.

Telecommunications engineers work continuously on materials with lower refractive indices that maintain other desirable optical properties. However, any transparent material will necessarily have an index greater than one, so the speed limit c in vacuum will never be practically reached in optical fiber systems.
