const e=`# Change in Wave Speed

## Conceptual context

The speed of light in vacuum, represented by [[c_vacio]], is a fundamental constant of nature with a value of approximately three hundred million meters per second. However, when light passes through materials such as water, glass, or diamond, its propagation speed is significantly reduced. This phenomenon is the foundation of geometric optics and effects such as refraction.

The reduction comes from the interaction between the electromagnetic wave and the atoms of the material. In transparent media, the fields induce oscillations in atomic electrons and delay collective propagation. This effect is quantified by [[n_indice]], a dimensionless property of each material.

Understanding how wave speed changes when passing between different media is essential to explain why a stick appears to bend when submerged in water, why objects underwater seem closer than they actually are, and how lenses, prisms, and optical fibers work.

## 🟢 Essential level

Imagine running on firm sand. You advance quickly and without obstacles. Now imagine entering water up to your waist. You continue advancing, but each step costs more, the water resistance slows you down. Light experiences something similar when passing from air to water or glass.

In vacuum, light travels at its maximum possible speed because it encounters nothing to obstruct it. But in a material medium, atoms and their electrons interact with the electromagnetic wave. These constant interactions make light take longer to cross the same physical space, although it remains incredibly fast.

The key factor is [[n_indice]]. A high value means the material slows down light significantly. Diamond, with an index of approximately two point four, slows light considerably. Water, with an index of approximately one point three, slows it down less. Air barely affects speed because its index is very close to one.

> [!TIP]
> Think of the refractive index as the optical density of the material. Just as it is harder to run in quicksand than in compact sand, light propagates more slowly in materials with higher refractive index.

## 🔵 Formal level

The fundamental relationship between the speed of light in vacuum [[c_vacio]], the speed in a medium [[v_medio]], and [[n_indice]] is expressed through:

{{f:velocidad_medio}}

This equation establishes that the speed in the medium is inversely proportional to the refractive index. For vacuum, where [[n_indice]] is exactly one, the speed coincides with [[c_vacio]]. In any material medium, where [[n_indice]] is greater than one, the resulting speed will be lower.

[[n_indice]] is formally defined as the ratio between the speed in vacuum and the speed in the medium:

{{f:indice_refraccion}}

This dimensionless definition captures the ability of the material to slow down wave propagation. Typical values include dry air approximately one point zero zero three, water at room temperature approximately one point thirty-three, optical glass between one point five and one point nine, and diamond approximately two point four two.

When a wave passes from one medium to another, its [[frecuencia_onda]] remains constant because it is determined by the emitting source. However, as the speed changes, [[lambda_medio]] must adjust accordingly following the relationship:

{{f:longitud_onda_medio}}

The wavelength in the medium is reduced by the same factor [[n_indice]] that slows the velocity. This effect is crucial for understanding interference phenomena in thin films and optical coatings.

The same reading can also be expressed through the general wave relationship:

{{f:velocidad_onda_frecuencia}}

Because [[frecuencia_onda]] is fixed by the source, any change in [[v_medio]] forces [[lambda_medio]] to readjust.

## 🔴 Structural level

The speed reduction in material media originates in the response of atomic electrons to the oscillating electric field of the electromagnetic wave. In the absence of external fields, the electrons of an atom occupy stationary states around the nucleus. When the light wave traverses the material, its alternating electric fields induce forced oscillations in the electrons, making them vibrate at the same frequency as the incident wave.

These oscillating electrons act as secondary sources. The resulting wave is the coherent superposition of the original wave and the re-emitted waves, creating a front that advances with apparent velocity below [[c_vacio]].

The structure of [[n_indice]] depends on the electronic polarizability of the material, that is, the ease with which electrons move relative to the nucleus under the action of an external electric field. Materials with high electronic density and high polarizability, such as heavy metals or dense ionic crystals, present high refractive indices. Materials with low density and low polarizability, such as gases or light organic solids, present indices close to one.

The constant index model has important validity limits. In dispersive media, [[n_indice]] varies with the [[lambda_vacio]] of radiation, which explains the separation of colors in a prism. In absorbing media near electronic resonances, the index becomes complex and the velocity ceases to have a simple physical meaning. In nonlinear media at very high intensities, the index depends on the intensity of the wave itself, giving rise to nonlinear optical effects such as self-focusing.

## Deep physical interpretation

The conservation of [[frecuencia_onda]] when changing media has a fundamental physical meaning. Frequency represents the oscillation rate of the source, and this cannot simply change because the wave enters a different material. What changes is the propagation speed, which forces a proportional reduction of [[lambda_medio]].

This wavelength reduction has important consequences for interference and diffraction phenomena. The conditions for constructive or destructive interference depend on the optical path difference measured in wavelengths. As the wavelength in the medium is reduced, the interference conditions change, explaining why a thin film of oil or soap shows iridescent colors.

The concept of optical path, defined as the product of the geometric distance traveled by [[n_indice]], incorporates this effective speed reduction. Two paths of different physical length can have the same optical path if the shorter path traverses a medium of higher index. This equivalence is fundamental in optical system design and in understanding interference.

## Order of magnitude

The speed of light in vacuum [[c_vacio]] is approximately three times ten to the eighth meters per second, equivalent to circling Earth seven and a half times in one second. In water, with index one point thirty-three, the speed drops to approximately two point two six times ten to the eighth meters per second, about three quarters of the vacuum speed.

In typical optical glass with index one point five, the speed descends to two times ten to the eighth meters per second, only two thirds of the vacuum speed. Diamond, with its high index near two point four, reduces the speed to barely about one hundred twenty-five thousand million meters per second, just over half the vacuum speed.

To detect absurd results, remember that any speed greater than three hundred million meters per second is physically impossible according to current physics. Calculated speeds less than one hundred million meters per second in ordinary transparent media suggest a calculation error or a very special material.

## Personalized resolution method

To analyze problems of speed change in different media:

1. **Identify the entry and exit media**: determine the corresponding refractive indices by consulting standard tables or problem data.

2. **Verify frequency conservation**: remember that [[frecuencia_onda]] does not change when passing from one medium to another, while speed and wavelength do.

3. **Apply the fundamental relationship**: use the equation linking [[v_medio]], [[c_vacio]], and [[n_indice]] to calculate the unknown speed.

4. **Calculate wavelengths**: if the problem involves interference or diffraction, determine the corresponding [[lambda_medio]] by dividing the vacuum wavelength by the medium index.

5. **Verify order of magnitude**: ensure that the calculated speed is less than [[c_vacio]] and greater than about fifty million meters per second for common transparent media.

> [!WARNING]
> Do not confuse the speed in the medium with the speed in vacuum. In most material media, the speed is significantly reduced with respect to c.

## Special cases and extended example

**Dispersive media**: in materials such as glass, [[n_indice]] varies slightly with the color of light. The index is greater for blue than for red, making blue light propagate more slowly. This chromatic dispersion is the cause of a prism separating white light into colors and can cause aberrations in simple lenses.

**Non-homogeneous media**: in materials with density gradients, such as air at different temperatures or Earth's atmosphere, the index varies continuously in space. Light follows curved trajectories instead of straight lines, explaining phenomena such as mirages and the formation of rainbows in water droplets.

**Extended example: crossing time of an aquarium**. Consider a laser beam passing through a glass aquarium two centimeters thick filled with water. In the glass, with index approximately one point five, the speed is two thirds of c. In the water, with index approximately one point thirty-three, the speed is three quarters of c.

Although the physical distance is small, the speed difference introduces a measurable delay compared to a ray traveling through air. These types of calculations are fundamental in optical fiber communications, where the reduced speed in the fiber glass limits the maximum rate of information transmission.

## Real student questions

**Why does light slow down if photons have no mass?**

The description in terms of individual photons is not the most appropriate for understanding propagation in macroscopic media. In classical optics, the electromagnetic wave interacts collectively with the electrons of the material. This delayed interaction creates a resulting wave of lower phase velocity, although individual light quanta always travel at speed c between atoms.

**Is the reduced speed the phase velocity or group velocity?**

The relationship [[v_medio]] equals [[c_vacio]] divided by [[n_indice]] describes the phase velocity, that is, the speed at which the wave fronts of a monochromatic wave move. For wave packets or light pulses, the group velocity may differ slightly if the medium is dispersive. In non-dispersive media, both velocities coincide.

**Is the wave energy conserved when changing speed?**

The wave intensity may be reduced by reflections at interfaces and by absorption in the medium, but the energy of individual photons, determined by the frequency, remains constant. The total energy of the transmitted wave depends on the amplitude and cross-sectional area, not directly on the propagation speed.

**Why can't we exceed speed c in a medium?**

The speed [[c_vacio]] is the maximum limit for information transmission in the universe. Although in a material medium the phase velocity of light is less than c, this does not allow material particles or signals to exceed the vacuum speed. Attempting to accelerate charged particles beyond the speed of light in a medium produces Cherenkov radiation, an effect similar to a supersonic shock wave.

## Cross-cutting connections and study paths

The speed change is intimately linked to [Snell's law](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/refraccion/ley-de-snell), which describes how the direction of a ray changes when changing media. Both phenomena derive from the same physical principle: the variation of propagation speed between different materials.

In the context of wave optics, the speed reduction determines the conditions of [interference](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/interferencia-constructiva) in thin films and optical coatings. The reduced wavelength in the medium affects the conditions of maximum and minimum intensity.

To deepen the electromagnetic description of the phenomenon, study the dispersion relation of dielectric materials and induced electronic polarization. These concepts connect geometric optics with solid-state physics and the microscopic properties of materials.

## Final synthesis

The speed change of an electromagnetic wave when passing from one medium to another is a fundamental phenomenon of optics. The speed in a material [[v_medio]] is always less than the speed in vacuum [[c_vacio]], reduced by the factor of [[n_indice]]. This reduction is due to the interaction of the wave with the atomic electrons of the material.

The frequency of the wave remains constant when changing medium, while the wavelength is reduced proportionally to the refractive index. These quantitative relationships allow predicting optical behaviors and designing systems that manipulate light in a controlled way, from lenses to optical fibers and photonic devices.
`;export{e as default};
