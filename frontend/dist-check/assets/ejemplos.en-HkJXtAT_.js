const e=`# Exam-type example

## Problem statement

A loudspeaker emits acoustic power uniformly in all directions (isotropic emission). A student located 10 meters from the loudspeaker measures an intensity of 0.01 W/m² using a sound level meter. Calculate: (a) the total power emitted by the loudspeaker, (b) the intensity the student would experience if moving away to 50 meters, and (c) the sound intensity level in decibels at both distances.

## Data

- Initial distance: 10 m
- Intensity measured at 10 m: 0.01 W/m²
- Final distance: 50 m
- Air density [[rho]]: approximately 1.2 kg/m³
- Reference threshold for decibels: I₀ = 10⁻¹² W/m²

## System definition

The system consists of an isotropic point sound source (the loudspeaker) that emits acoustic power in three dimensions. The medium is atmospheric air with density [[rho]], which we consider non-absorbing for the distances involved. Propagation is spherical from the source.

## Physical model

The model of three-dimensional spherical waves is applied under the following conditions:

- Isotropic point source (uniform emission in all directions)
- Homogeneous non-dissipative medium (air)
- Far field (distances large compared to loudspeaker dimensions)

Intensity is related to power and distance through the inverse square law:

{{f:intensidad_desde_potencia}}

The sound level in decibels is calculated using:

{{f:nivel_sonoro_dB}}

## Model justification

The isotropic point source model is applicable because the distances considered (10 m and 50 m) are much greater than the typical dimensions of a loudspeaker (tens of centimeters). In the far field, the specific shape of the source does not significantly affect the intensity distribution.

The model would cease to be valid if: (1) distances were less than one meter, entering the near field where loudspeaker directivity is significant; (2) distances exceeded several kilometers, where atmospheric absorption becomes appreciable; or (3) there were obstacles generating significant acoustic reflections or shadows.

## Symbolic solution

For the total source power, we solve from the intensity equation:

{{f:intensidad_desde_potencia}}

The geometric area over which the power is distributed is given by:

{{f:area_esferica}}

Combining these relations, the source power is obtained by multiplying the measured intensity by the corresponding spherical area.

For intensity at a different distance, we directly apply the inverse square law with the same power:

I₂ = I₁ · (r₁/r₂)²

For the level in decibels:

{{f:nivel_sonoro_dB}}

Where β = 10 log₁₀(I/I₀)

## Numerical substitution

**Calculation of total power:**

Applying the formula with the data at 10 m:

Operation: 0.01 W/m² × 4π × (10 m)²

Breakdown: 0.01 × 4 × 3.1416 × 100 = 12.57 W

Therefore [[P_potencia]] ≈ 12.6 W

**Calculation of intensity at 50 m:**

Using the inverse square relation:

Operation: 0.01 W/m² × (10/50)²

Breakdown: 0.01 × (0.2)² = 0.01 × 0.04 = 0.0004 W/m²

Therefore [[I_intensidad]] at 50 m ≈ 4×10⁻⁴ W/m²

Alternatively, using the calculated power:

Operation: 12.57 W / (4π × (50 m)²)

Breakdown: 12.57 / (4 × 3.1416 × 2500) = 12.57 / 31416 ≈ 0.0004 W/m² ✓

**Calculation of levels in decibels:**

At 10 m:

{{f:nivel_sonoro_dB}}

Operation: 10 × log₁₀(0.01 / 10⁻¹²)

Breakdown: 10 × log₁₀(10¹⁰) = 10 × 10 = 100 dB

Therefore the level [[beta_nivel]] at 10 m is 100 dB.

At 50 m:

Operation: 10 × log₁₀(4×10⁻⁴ / 10⁻¹²)

Breakdown: 10 × log₁₀(4×10⁸) = 10 × (log₁₀4 + 8) = 10 × (0.60 + 8) = 86 dB

Therefore [[beta_nivel]] at 50 m ≈ 86 dB

## Dimensional validation

- Units of power: W/m² × m² = W ✓
- Units of intensity: W / m² = W/m² ✓
- Units of level in dB: dimensionless = 10 × log₁₀(dimensionless) ✓

Dimensional breakdown for power:

- [[I_intensidad]]: \`[M T⁻³]\`
- [[r_distancia]]²: \`[L²]\`
- Product: \`[M T⁻³] · [L²] = [M L² T⁻³]\`

## Physical interpretation

The result shows that the loudspeaker emits a total power of approximately 12.6 W, comparable to the power of a small electric bulb. At 10 meters, the intensity of 0.01 W/m² corresponds to 100 dB — a level similar to a rock concert or electric saw, requiring hearing protection for prolonged exposure.

When moving away to 50 meters (5 times farther), the intensity is reduced to 4×10⁻⁴ W/m², that is, to 1/25 of the initial value, confirming the inverse square law. The sound level drops to 86 dB, still comparable to intense urban traffic but within the range supportable without protection for moderate periods.

The reduction from 100 dB to 86 dB corresponds to the same geometric factor predicted by spherical spreading. This is not merely a numerical drop: it means that the receiver intercepts a smaller fraction of the same emitted acoustic power because the wavefront has expanded.

The air density [[rho]] does not enter the main calculation because the initial datum is already an intensity measured by the instrument. It would become essential if the measurement were given as acoustic pressure instead, since the medium then controls how pressure amplitude is converted into transported energy.

If the student wanted to reduce the level to 70 dB (noisy conversation), they would need to move to a distance where intensity is 10⁻⁵ W/m², which corresponds to approximately 200 meters — distance where other factors such as atmospheric absorption and obstacles would begin to be significant.

---

# Real-world example

## Context

**Earthquake early warning systems** (such as the SASMEX system in Mexico or ShakeAlert in the United States) use networks of seismic sensors to detect P-waves (primary) from an earthquake and emit alerts before the destructive S-waves (secondary) arrive. The intensity of these seismic waves determines the potential damage and the zones requiring urgent alert.

Seismic waves propagate three-dimensionally from the hypocenter (rupture point in the crust) and their intensity follows the inverse square law modified by the geometry of the terrestrial medium and anelastic attenuation.

## Physical estimation

Consider a moderate earthquake with moment magnitude Mw of value 6. The radiated seismic energy is on the order of 10¹³ J. If this energy is released in about 10 seconds, the average radiated power is on the order of 10¹² W.

At 50 km from the epicenter (typical distance for cities near seismic zones), the seismic intensity (measured as power per unit area perpendicular to propagation) would be:

Approximate operation: P / (4πr²) = 10¹² W / (4π × (50,000 m)²)

Breakdown: 10¹² / (4 × 3.14 × 2.5×10⁹) ≈ 10¹² / 3.14×10¹⁰ ≈ 32 W/m²

This intensity, distributed over the mass of buildings and structures, generates accelerations that can damage unreinforced constructions.

The warning system takes advantage of detecting the low-intensity P-waves (which arrive first) to predict the arrival of higher-intensity destructive S-waves. If sensors near the epicenter detect seismic intensities above a threshold (corresponding to magnitudes > 5.0), the system emits alerts to cities 50-100 km away with seconds to tens of seconds of advance warning.

## Interpretation

The intensity of seismic waves decreases with distance according to the inverse square law, but in the real Earth this decrease is faster due to anelastic attenuation (conversion of mechanical energy into heat within the crust). A magnitude 6.0 earthquake can generate damaging intensities (modified Mercalli VI-VII) up to 50-80 km from the epicenter, while at 200 km the intensity is usually perceptible but not destructive.

The seismic early warning system takes advantage of the fact that P-waves, although of lower intensity than S-waves, travel faster (6-8 km/s vs 3-5 km/s). Detection of P-wave intensities above a critical threshold allows inferring that destructive S-wave intensities will arrive seconds later. This time window, although brief, allows stopping trains, closing gas valves, and alerting the population to seek shelter.

Dominant variable: the magnitude of the earthquake (logarithmically related to radiated energy) and the distance to the epicenter, which determine the local seismic intensity according to geometric attenuation laws.

Validity limit: The pure inverse square law underestimates real attenuation in absorbing media such as Earth's crust. In very deep earthquakes (>100 km), waves reach the surface with intensities greater than those predicted by simple spherical geometry due to channeling effects and reflection at internal discontinuities.
`;export{e as default};
