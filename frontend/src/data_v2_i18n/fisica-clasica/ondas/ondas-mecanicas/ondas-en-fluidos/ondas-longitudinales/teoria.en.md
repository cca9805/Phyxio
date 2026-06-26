## Conceptual context

**Longitudinal waves** are the fundamental mechanism for transporting mechanical energy through fluids. Unlike transverse waves on strings, where each element moves perpendicular to the direction of propagation, in a longitudinal wave the particles of the medium oscillate **along the same direction** the disturbance travels. The observable result is an alternating succession of **compressions** (zones of high pressure and density) and **rarefactions** (zones of low pressure and density).

This leaf belongs to the mechanical waves block and connects directly with the previous study of [propagation speed in strings](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/velocidad-en-cuerda-tensa). Moving from strings to fluids introduces an essential change: the restoring property is no longer linear tension but the **volumetric elasticity** of the medium, quantified by [[modulo_de_compresibilidad_volumetrica]]. Understanding this transition is indispensable for addressing phenomena such as sound, primary seismic waves, and medical ultrasound.

## 🟢 Essential level

When a piston, tuning fork, or any source vibrates against a fluid, it pushes nearby molecules and creates a region of higher density: a **compression**. The compressed molecules push their neighbours and retreat, generating a region of lower density: a **rarefaction**. This cycle repeats and the disturbance travels away from the source without the fluid moving globally.

The speed at which this pattern of compressions and rarefactions advances depends on two properties of the medium. The stiffer the fluid (larger [[modulo_de_compresibilidad_volumetrica]]), the faster molecules relay pressure. The denser it is (larger [[rho]]), the more inertia they oppose and the slower the disturbance advances. The [[frecuencia]] is set by the source, not by the medium, while the spatial scale [[lambda]] adjusts as a consequence.

> [!TIP]
> The wave transports energy and momentum, but individual molecules only oscillate around their equilibrium positions.

## 🔵 Formal level

The propagation speed of a longitudinal wave in a fluid arises from the balance between elastic restoring force and the inertia of the medium:

- **Propagation speed**:
{{f:velocidad_longitudinal_fluidos}}
[[modulo_de_compresibilidad_volumetrica]] represents the **bulk modulus**: the ratio between the applied pressure increment and the resulting relative volume deformation. High values of [[modulo_de_compresibilidad_volumetrica]] indicate a fluid that is hard to compress, where restoration is vigorous and the disturbance travels fast. [[rho]] contributes the volumetric inertia that slows this advance. The square root reflects that doubling [[modulo_de_compresibilidad_volumetrica]] does not double [[rapidez_de_propagacion]]; the dependence is sublinear.

When a source oscillates at [[frecuencia]] within a fluid, the spatial separation between consecutive compressions defines the [[lambda]]:

- **Wavelength**:
{{f:longitud_onda_longitudinal}}
If the medium changes [[modulo_de_compresibilidad_volumetrica]] or [[rho]] (for instance, transitioning from air to water), [[rapidez_de_propagacion]] changes, and with [[frecuencia]] held constant the spatial scale [[lambda]] readjusts proportionally.

**Acoustic impedance** quantifies the opposition of the fluid to being deformed by the pressure wave:

- **Acoustic impedance**:
{{f:impedancia_acustica}}
[[impedancia_acustica]] results from the product of volumetric inertia [[rho]] and propagation speed [[rapidez_de_propagacion]]. At the boundary between two fluids with different impedances, the difference in [[impedancia_acustica]] determines what fraction of the energy is reflected and what fraction is transmitted. This concept is the physical basis of ultrasound imaging and sound reflection at liquid-gas interfaces.

## 🔴 Structural level

The expression for [[rapidez_de_propagacion]] originates from the **linearised wave equation** for an ideal fluid. One starts from mass conservation (continuity equation) and Newton's second law applied to a differential fluid element (Euler equation), combining them under the hypothesis of small perturbations. The **adiabatic** compression condition is crucial: if the wave advances fast enough that no appreciable heat exchange occurs, [[modulo_de_compresibilidad_volumetrica]] is the adiabatic modulus. In ideal gases this equals the product of pressure and the adiabatic coefficient of the gas.

> [!WARNING]
> If the compression process were isothermal (extremely low frequencies or media with high thermal conductivity), the isothermal modulus would replace the adiabatic one, appreciably reducing [[rapidez_de_propagacion]].

**Cross-dependencies and validity regime.** The formulation assumes a **continuous, homogeneous, and isotropic** medium with perturbation amplitudes small compared to the equilibrium pressure. When the amplitude grows, nonlinear effects appear: the compression zone travels slightly faster than the rarefaction, distorting the profile until shock waves form. The linear model ceases to be valid when the pressure variation becomes comparable to the static pressure.

The impedance [[impedancia_acustica]] governs the **reflection and transmission coefficients** at a planar interface. Two fluids with identical [[impedancia_acustica]] allow total transmission; a large difference (air-water, for example, with an impedance ratio near 3500) produces nearly complete reflection. This phenomenon explains why sound barely penetrates from air into water without an intermediate coupler.

The [[lambda]] sets the **spatial resolution** of the wave phenomenon. Obstacles with dimensions comparable to [[lambda]] produce significant diffraction. For audible frequencies in air, [[lambda]] ranges from about seventeen metres at the low end to just over one centimetre at the high end, which determines the design of acoustic barriers, resonators, and loudspeakers.

## Deep physical interpretation

The speed [[rapidez_de_propagacion]] does not describe matter in motion but rather the **phase velocity of the pressure pattern**. Each molecule oscillates longitudinally around its equilibrium position with an amplitude far smaller than [[lambda]]. What travels is the information about compression, not the molecules themselves.

The duality between [[modulo_de_compresibilidad_volumetrica]] (restoration) and [[rho]] (inertia) is an instance of the general principle governing all mechanical propagation. In strings the analogous pair is tension and linear density; in elastic solids, Young's modulus and density. Recognising this structure allows one to predict qualitatively how [[rapidez_de_propagacion]] varies without memorising separate formulas: it always increases with stiffness and decreases with inertia.

## Order of magnitude

In **air at 20 °C**, [[rapidez_de_propagacion]] is around 343 m/s. In **fresh water** it rises to about 1480 m/s, nearly 4.3 times higher. In **steel** (longitudinal wave in a solid), values reach approximately 5900 m/s.

- A result for [[rapidez_de_propagacion]] below 100 m/s in a conventional gas is suspicious and suggests an error in [[modulo_de_compresibilidad_volumetrica]] or [[rho]].
- A result above 6000 m/s in a common liquid likely reveals a unit confusion or an erroneous bulk modulus.

Always comparing the order of magnitude of the result with the 343 m/s reference in air allows rapid detection of numerical absurdities.

## Personalized resolution method

1. **Identify the medium**: determine whether it is a gas, liquid, or solid; locate [[modulo_de_compresibilidad_volumetrica]] and [[rho]] for the material under the given conditions.
2. **Select the appropriate formula**: for speed, use the relationship between [[rapidez_de_propagacion]], [[modulo_de_compresibilidad_volumetrica]], and [[rho]]; for spatial scale, use the relationship with [[frecuencia]].
3. **Verify units**: [[modulo_de_compresibilidad_volumetrica]] in pascals and [[rho]] in kg/m³ yield [[rapidez_de_propagacion]] in m/s directly. Watch out for composite units such as kPa or g/cm³.
4. **Evaluate coherence**: compare the result with the reference for the medium (343 m/s in air, 1480 m/s in water). Deviations of more than a factor of two demand review.
5. **Interpret physically**: explain whether the result indicates a stiff or soft medium, dense or light, and what this implies for acoustic energy transmission.

## Special cases and extended example

**Case 1 — Change of medium.** When a longitudinal wave passes from air to water, [[rapidez_de_propagacion]] is multiplied by approximately 4.3. With [[frecuencia]] fixed by the source, [[lambda]] is also multiplied by the same factor. The wave "stretches" spatially upon entering the stiffer and denser medium. Most of the energy is reflected due to the enormous difference in [[impedancia_acustica]].

**Case 2 — Effect of temperature on gases.** Heating a gas at constant pressure decreases [[rho]] because the gas expands. Simultaneously, the adiabatic modulus changes proportionally to the pressure (which is maintained), so [[rapidez_de_propagacion]] increases with temperature. In air, speed increases by approximately 0.6 m/s per degree Celsius. This explains why sound travels faster in summer than in winter and why atmospheric layers at different temperatures bend acoustic rays (thermal refraction).

## Real student questions

**Why doesn't the [[frecuencia]] change when the wave passes from one fluid to another?**
Because the source sets the temporal rhythm. At the boundary, each compression that arrives generates a compression in the second medium at the same rate. What adjusts is [[lambda]], not [[frecuencia]].

**Can a longitudinal wave exist in a vacuum?**
No. A mechanical longitudinal wave needs matter that compresses and expands. Without molecules there is no elastic restoration or inertia; both [[modulo_de_compresibilidad_volumetrica]] and [[rho]] cease to exist.

**Does higher density always mean lower speed?**
Not necessarily. Although [[rho]] appears in the denominator, a dense liquid usually has a much larger [[modulo_de_compresibilidad_volumetrica]] than a light gas, and the net effect can be a higher speed. Water is denser and faster than air because its [[modulo_de_compresibilidad_volumetrica]] is enormously greater.

**Does acoustic impedance measure energy loss?**
No. [[impedancia_acustica]] measures the medium's opposition to deformation, not dissipation. Energy loss is associated with viscosity and absorption, which are not part of the ideal model.

## Cross-cutting connections and study paths

This leaf builds upon the [propagation speed in strings](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/velocidad-en-cuerda-tensa), where the square-root structure of speed (stiffness over inertia) is introduced for the first time. Understanding the analogy facilitates extension to waves in solids and electromagnetic waves.

From here, the student can advance towards [standing waves](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/ondas-estacionarias) to study resonance in tubes, or toward more complex fluid waves where viscosity and finite compressibility modify dispersion.

## Final synthesis

Longitudinal waves in fluids transport energy through successive compressions and rarefactions. The propagation speed reflects the competition between the volumetric stiffness of the medium and its inertia, while acoustic impedance governs how energy is partitioned at interfaces. Mastering these relationships enables the analysis of phenomena ranging from sound propagation in the atmosphere to the design of ultrasonic transducers and the interpretation of medical ultrasound images.