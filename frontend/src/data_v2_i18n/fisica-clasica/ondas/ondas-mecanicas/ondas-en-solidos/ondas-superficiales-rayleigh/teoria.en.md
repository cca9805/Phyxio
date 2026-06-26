## Conceptual context

When an elastic wave encounters a free surface (the interface between a solid and vacuum or air), propagation modes appear that do not exist in the bulk. **Rayleigh waves** are the most important surface mode: they combine longitudinal and transverse displacement in a retrograde elliptical trajectory confined to the vicinity of the surface. They are responsible for most seismic damage in shallow earthquakes and form the basis of modern material characterization techniques.

Unlike body waves (P and S), Rayleigh waves do not spread geometrically in three dimensions but in two, allowing them to transport energy over large distances with less relative attenuation. Their velocity [[velocidad_de_onda_de_rayleigh]] is slightly less than the S-wave velocity of the same medium, and their amplitude decays exponentially with depth.

## 🟢 Essential level

Rayleigh waves travel along the free surface of a solid. The particles describe **retrograde ellipses**: at the wave crest they move backward relative to the propagation direction, combining vertical (up-down) and horizontal (forward-backward) motion. It is like watching an ocean wave roll, but in reverse.

> [!NOTE]
> The velocity [[velocidad_de_onda_de_rayleigh]] of these waves is always less than the S-wave velocity ([[v_s]]) of the same material. For most rocks and metals, [[velocidad_de_onda_de_rayleigh]] lies between 87 and 96 percent of [[v_s]].

Rayleigh waves exist only near the surface: their amplitude [[amplitud_a_profundidad_z]] decreases rapidly with depth [[z_prof]]. At a depth equal to one wavelength [[longitud_de_onda_de_rayleigh]], the amplitude is already less than 30 percent of the surface value [[amplitud_en_la_superficie]]. This makes them ideal for inspecting surface layers without needing access to the material interior.

During an earthquake, Rayleigh waves arrive after P and S (because they are slower), but they produce the most intense and prolonged surface motion: they cause the greatest destruction in buildings.

## 🔵 Formal level

The Rayleigh wave velocity is obtained by solving the secular equation:

{{f:ecuacion_secular_rayleigh}}

Where [[cociente_adimensional_v_r_v_s]] is the dimensionless ratio of [[velocidad_de_onda_de_rayleigh]] to [[v_s]], and [[xi_vs_vp]] is the ratio of [[v_s]] to the P-wave velocity. The secular equation is a sixth-degree polynomial admitting a single real root between 0 and 1 for any stable medium.

In practice, the Viktorov approximation is used, reproducing the exact root with error below 0.5 percent:

{{f:velocidad_rayleigh_aproximada}}

This formula shows that [[velocidad_de_onda_de_rayleigh]] depends only on [[v_s]] and [[nu_poisson]]. For [[nu_poisson]] equal to 0.25, [[velocidad_de_onda_de_rayleigh]] is 0.92 times [[v_s]]; for [[nu_poisson]] approaching 0.5, it reaches 0.955 times [[v_s]].

Amplitude decays exponentially with depth according to:

{{f:decaimiento_profundidad}}

Where [[coeficiente_de_decaimiento_con_la_profundidad]] is the decay coefficient, of the order of two pi divided by [[longitud_de_onda_de_rayleigh]]. The effective penetration depth is:

{{f:profundidad_penetracion}}

This relationship implies that wave frequency selects the depth being probed: low frequencies (large wavelengths) penetrate more deeply, while high frequencies remain confined to the shallowest layer.

## 🔴 Structural level

The existence of the Rayleigh wave is a consequence of **free-surface boundary conditions** (zero normal and tangential stress at the interface). Imposing these conditions on the combination of a P and an S wave that decay with depth yields the secular equation whose solution determines [[cociente_adimensional_v_r_v_s]].

> [!WARNING]
> Rayleigh waves exist only in solids with finite [[v_s]]. In a fluid (zero [[v_s]]), there is no shear boundary condition and the Rayleigh mode disappears. The free surface of a fluid supports only gravity waves, not elastic surface waves.

**Particle motion structure with depth:**

The particle motion has two components: vertical (associated with the P component) and horizontal (associated with the S component). Both decay exponentially with [[z_prof]], but at different rates. At a depth close to 0.2 times [[longitud_de_onda_de_rayleigh]], the horizontal component reverses sign: the motion changes from retrograde to prograde. This reversal is a diagnostic signature of the Rayleigh wave.

**Dispersion in stratified media:**

In a homogeneous half-space, the Rayleigh wave is **non-dispersive**: [[velocidad_de_onda_de_rayleigh]] does not depend on frequency. But as soon as the medium has layers with different properties, the phase velocity changes with frequency. Low-frequency waves (large wavelength) probe the deeper layers (generally stiffer) and therefore travel faster. High-frequency waves probe only the surface layer (less stiff) and travel slower. This dispersion is the basis of the MASW method for constructing [[v_s]] profiles with depth.

**Comparison with Love waves:**

Love waves are another surface mode, but they require a surface layer of lower velocity over a stiffer substrate. Rayleigh waves exist whenever there is a free surface, without any stratification requirement. Love waves are purely transverse (horizontal), while Rayleigh waves combine vertical and horizontal motion.

## Deep physical interpretation

The Rayleigh wave is a coupled mode: it is neither purely P nor purely S, but a coherent superposition of both satisfying the free-surface condition. This coupling explains why its velocity is less than that of the pure S wave (the boundary condition "slows" the propagation) and why it exists only in the presence of an interface.

Surface confinement has energy consequences: the wave energy is concentrated in a layer of thickness on the order of [[longitud_de_onda_de_rayleigh]]. Propagating in two dimensions (along the surface), the amplitude decreases as the inverse square root of distance, instead of the inverse square of distance (body waves in 3D). This explains the dominance of Rayleigh waves in distant seismic records.

## Order of magnitude

- Granite: [[v_s]] close to 3000 m/s, [[velocidad_de_onda_de_rayleigh]] close to 2800 m/s
- Clay soil: [[v_s]] close to 200 m/s, [[velocidad_de_onda_de_rayleigh]] close to 180 m/s
- Steel: [[v_s]] close to 3200 m/s, [[velocidad_de_onda_de_rayleigh]] close to 2950 m/s
- Penetration depth for 1 Hz earthquake in rock: [[longitud_de_onda_de_rayleigh]] on the order of 3 km
- Penetration depth for 100 MHz SAW ultrasound: [[longitud_de_onda_de_rayleigh]] on the order of 30 micrometres

## Personalized resolution method

1. **Identify the medium**: determine [[v_s]] (from tests or elastic moduli) and [[nu_poisson]]
2. **Calculate [[velocidad_de_onda_de_rayleigh]]**: apply the Viktorov formula with the above data
3. **Determine [[longitud_de_onda_de_rayleigh]]**: divide [[velocidad_de_onda_de_rayleigh]] by the frequency of interest
4. **Estimate penetration**: effective depth [[d_pen]] is approximately [[longitud_de_onda_de_rayleigh]]
5. **Calculate decay**: use the exponential to evaluate [[amplitud_a_profundidad_z]] at any depth
6. **Verify coherence**: confirm that [[velocidad_de_onda_de_rayleigh]] is less than [[v_s]] and that [[amplitud_a_profundidad_z]] does not exceed [[amplitud_en_la_superficie]]

## Special cases and extended example

**Case nu equal to 0.25 (Poisson solid):** [[cociente_adimensional_v_r_v_s]] equals 0.9194, meaning [[velocidad_de_onda_de_rayleigh]] is 91.9 percent of [[v_s]]. This is the most cited reference value in textbooks.

**Case nu approaching 0.5 (nearly incompressible material):** [[cociente_adimensional_v_r_v_s]] approaches 0.955. The Rayleigh wave approaches the S velocity but never reaches it.

**Case nu equal to 0 (material without lateral contraction):** [[cociente_adimensional_v_r_v_s]] equals 0.874. This is the minimum possible for a stable isotropic material.

**Extended example:** In a MASW survey on soil, the Rayleigh phase velocity at 5 Hz is found to be 220 m/s and at 20 Hz it is 160 m/s. The difference indicates dispersion: the surface layer (probed at 20 Hz) has lower [[v_s]] than deeper layers (probed at 5 Hz). Inverting the dispersion profile reconstructs the [[v_s]] profile with depth.

## Real student questions

**Why is the Rayleigh wave slower than S if it has a P component (which is faster)?**

The Rayleigh wave does not inherit the velocity of its components separately. The free-surface boundary condition couples P and S waves such that the coherent combination travels slower than either constituent alone. It is an effect of confined constructive interference.

**If amplitude decays with depth, why are Rayleigh waves detected thousands of km from the epicentre?**

The exponential decay is with depth, not horizontal distance. Along the surface, the wave attenuates much more gently (as the inverse square root of distance) because it propagates in 2D, not 3D. That is why it dominates distant earthquake records.

**What is the difference between a Rayleigh wave and an ocean wave?**

Ocean waves are gravity waves in a fluid; particles move in prograde ellipses (at the crest, motion is in the propagation direction). Rayleigh waves are elastic waves in a solid and particles move in retrograde ellipses (at the crest, backward). Also, ocean waves depend on gravity, while Rayleigh waves depend only on elasticity.

**Can a Rayleigh wave be used to detect surface cracks?**

Yes. Since amplitude is concentrated near the surface, any surface defect (crack, corrosion, delamination) interrupts propagation and generates detectable reflections. Non-destructive SAW (Surface Acoustic Waves) testing exploits this principle in the aerospace and microelectronics industries.

## Cross-cutting connections and study paths

- **Prior**: P and S waves, elastic moduli, Poisson ratio
- **Parallel**: Love waves, guided modes in plates (Lamb)
- **Next**: surface wave dispersion, MASW method, SAW waves in microelectronics
- **Interdisciplinary connection**: geotechnics (soil classification), earthquake engineering (surface damage), device acoustics (SAW filters in telecommunications)

## Final synthesis

Rayleigh waves are surface modes combining P and S deformation under the free-surface condition. Their velocity [[velocidad_de_onda_de_rayleigh]] depends exclusively on the Poisson ratio and [[v_s]], their amplitude decays exponentially with depth, and their effective penetration [[d_pen]] is on the order of one wavelength. These three properties make them surface diagnostic tools in seismology, geotechnics, and industrial testing.