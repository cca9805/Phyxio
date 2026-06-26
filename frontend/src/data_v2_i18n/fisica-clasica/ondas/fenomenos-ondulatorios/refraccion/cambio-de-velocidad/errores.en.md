# Change in speed errors

## Conceptual errors

### Error 1: Confusing vacuum speed with medium speed

**Why it seems correct**

The speed of light is a universal constant very often cited, three hundred million meters per second. It is natural to assume that this speed applies in any situation where there is light, regardless of the material through which it travels.

**Why it is incorrect**

The speed [[c_vacio]] is the maximum speed in vacuum, but in material media the speed [[v_medio]] is always lower. [[n_indice]] quantifies exactly that reduction. Claiming that light travels at speed c in water or glass contradicts direct experimental measurements.

**Detection signal**

Results from problems where light is obtained to cross several centimeters of glass in time corresponding to speed c, or calculations of optical delay that give zero because c was used instead of the reduced speed.

**Conceptual correction**

In physics, [[c_vacio]] is the universal limit speed in vacuum. In material media, we must always use [[v_medio]] equal to [[c_vacio]] divided by [[n_indice]]. The refractive index is the property of the material that we must consult to know the real speed.

**Mini-example of contrast**

A laser pulse crosses an optical fiber of one hundred kilometers. If we calculate the time using c, we obtain approximately one third of a millisecond. If we use the real speed in glass (approximately two thirds of c), the time is approximately half a millisecond. This additional delay is crucial in high-speed communications.

## Model errors

### Error 2: Assuming all colors travel at the same speed in a medium

**Why it seems correct**

The basic model presents a single speed for light in a given medium. It is tempting to extrapolate this to all colors, assuming that the medium affects all visible radiation equally.

**Why it is incorrect**

In most optical materials, [[n_indice]] varies slightly with wavelength. Blue typically has a higher index than red, therefore it propagates more slowly. This chromatic dispersion is the cause of a prism separating white light into colors.

**Detection signal**

Calculations of optical systems where simple lenses produce images with colored edges (chromatic aberration), or interference problems where different colors give displaced patterns because the same wavelength was assumed for all.

**Conceptual correction**

The constant index model is a useful approximation for quick calculations with approximately monochromatic light. For white light or precision systems, we must use the index corresponding to each specific wavelength by consulting dispersion tables.

**Mini-example of contrast**

A white beam passes through a glass prism. If all colors had the same index, the emerging beam would remain white and there would be no spectrum. The reality is that blue refracts more than red because its index is higher, creating the observable rainbow of colors.

## Mathematical errors

### Error 3: Inverting the velocity-index relationship

**Why it seems correct**

Intuitively, we associate higher values with greater magnitudes. It is easy to think that a medium with high [[n_indice]] allows light to travel faster because it is a "positive" parameter of the material.

**Why it is incorrect**

The physical relationship is inverse: [[v_medio]] equals [[c_vacio]] divided by [[n_indice]]. A higher index implies division by a larger number, resulting in lower speed. Diamond with n approximately two point four slows down light more than water with n approximately one point three.

**Detection signal**

Calculations where a medium of higher index results in higher speed, or comparisons where it is concluded that light travels faster in glass than in air. Also graphs of speed versus index with positive slope instead of the correct decreasing hyperbolic curve.

**Conceptual correction**

The refractive index is a slowing factor, not an accelerating one. More "optically dense" materials have higher indices and slow down light more. Visualize the relationship as a fraction: constant numerator c, denominator n, result v smaller when n increases.

**Mini-example of contrast**

Comparing water (n approximately one point three three) and glass (n approximately one point five). If the relationship were direct, glass would give higher speed. The reality is that in glass the speed is two thirds of c, while in water it is three quarters of c. Glass slows down more.

## Interpretation errors

### Error 4: Thinking that frequency changes when entering the medium

**Why it seems correct**

We observe that something changes when light enters a medium: the speed is reduced, the wavelength too. It is natural to assume that all wave properties are modified, including frequency.

**Why it is incorrect**

[[frecuencia_onda]] is determined by the emitting source and is conserved when changing medium. What changes are the speed and consequently the wavelength. If the frequency changed, we would violate the conservation of the energy of individual photons.

**Detection signal**

Calculations of interference in thin films where frequency modified by the index is used, or color problems where it is assumed that red light becomes blue when entering water because wavelength is reduced.

**Conceptual correction**

Frequency is the conserved parameter. The source oscillates at a certain frequency and that oscillation is transmitted to the medium. The resulting wave has the same frequency but adapts its speed and wavelength to the properties of the material.

**Mini-example of contrast**

A red light of seven hundred nanometers enters water. If the frequency changed, light of another color could emerge when exiting. The reality is that the red light remains red, with the same frequency and the same wavelength in vacuum when exiting, although inside water its local wavelength is shorter.

## Quick self-control rule

**Mandatory dimensional verification**: Before accepting any velocity or index result:

- [[n_indice]] must be dimensionless, without units. If units appear, review the operations.
- The velocity [[v_medio]] must give units of length over time, consistent with meters per second.
- The product of [[v_medio]] and [[n_indice]] must reconstruct [[c_vacio]] approximately, within rounding error.

**Order of magnitude verification**:

- The velocity in any medium must be between fifty million and three hundred million meters per second.
- The index must be between one and approximately three for common transparent media.
- Speeds greater than c are physically impossible with current physics.

**Basic physical verification**:

- The speed in the medium must be less than in vacuum for any material material (n greater than one).
- The frequency must remain constant when the wave changes medium.
- The wavelength in the medium must be shorter than in vacuum for the same color.
- The refractive index of a material medium must be greater than one.
