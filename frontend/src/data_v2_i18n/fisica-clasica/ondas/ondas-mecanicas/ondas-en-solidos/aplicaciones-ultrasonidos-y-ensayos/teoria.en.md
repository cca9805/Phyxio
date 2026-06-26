## Conceptual context

Ultrasound is a mechanical pressure wave with frequencies far above human hearing. In non-destructive testing it is typically used between 0.5 MHz and 20 MHz in metals, producing wavelengths on the order of millimetres. That scale allows detection of internal discontinuities comparable to the wavelength and requires understanding how material response depends on acoustic impedance.

The inspection method emits a pulse, records the echoes, and reads the time and amplitude information from internal interfaces. The leaf's central variables are [[v_us]] (propagation speed), [[t_vuelo]] (time of flight), [[d_defecto]] (defect depth), [[impedancia_acustica]] (acoustic impedance), and [[coeficiente_de_reflexion_acustica]] (reflection coefficient). The material density [[rho_mat]] is also decisive in [[impedancia_acustica]].

## 🟢 Essential level

In a pulse-echo ultrasonic test, the transducer sends a short impulse into the material. The pulse travels through the part, reaches a discontinuity, and returns as an echo. The strongest echo may correspond to a back wall or a defect. The travel time of the echo is [[t_vuelo]].

The defect depth is obtained because the pulse travels twice: outward to the defect and back. Therefore, the real distance is half of the distance that a wave would travel at the material speed during [[t_vuelo]].

The acoustic impedance [[impedancia_acustica]] combines density [[rho_mat]] and speed [[v_us]]. If a defect is filled with air, the difference in [[impedancia_acustica]] between the material and air is enormous, which produces a very intense echo. If the defect is filled with a similar material, the echo may be weak or absent.

## 🔵 Formal level

The main relationship of this leaf is:

{{f:profundidad_defecto}}

This equation shows how [[d_defecto]] depends on [[v_us]] and [[t_vuelo]] with a factor 2 for the round trip.

The acoustic impedance of the medium is defined as:

{{f:impedancia_acustica}}

This equation shows that [[impedancia_acustica]] increases if density [[rho_mat]] or speed [[v_us]] increase. In heavy metals, [[impedancia_acustica]] is very high; in light liquids, it is much lower.

The reflection coefficient at a normal interface is expressed as:

{{f:coeficiente_reflexion}}

If the impedances of the two media are equal, [[coeficiente_de_reflexion_acustica]] is zero and no reflected echo appears. If they differ greatly, [[coeficiente_de_reflexion_acustica]] approaches ±1 and the echo is intense. The sign of [[coeficiente_de_reflexion_acustica]] indicates whether the reflected wave changes phase.

## 🔴 Structural level

Practical decisions in an ultrasonic test depend on several factors:
- transducer frequency,
- type of coupling agent,
- wave mode (longitudinal or shear),
- defect geometry.

Higher frequencies improve spatial resolution but increase attenuation and grain noise. Therefore, for fine defects in dense metals, high frequencies are chosen; for thick parts or noisy grain, lower frequencies are used.

The coupling agent removes air between the transducer and the part. Air has a very low [[impedancia_acustica]], so without a couplant almost all energy is reflected at the surface. With a good couplant, energy enters the material and internal echoes can be recorded.

Longitudinal waves are the most common in volumetric testing of solids. Shear waves are useful for inclined cracks because they interact differently with defect orientation.

The [[impedancia_acustica]] and [[coeficiente_de_reflexion_acustica]] formulas are valid at normal incidence and for plane waves. In focused beams or rough surfaces, the effective reflection also depends on angle and scattering. In the presence of coatings or surface treatments, the linear model may fail.

> [!WARNING]
> The transducer dead zone prevents detection of very shallow defects. A defect near the surface may not produce an echo separated from the entry pulse.

> [!NOTE]
> In anisotropic materials such as composites, [[v_us]] and [[impedancia_acustica]] vary with direction. This can shift the echo and alter the apparent depth if the correct [[v_us]] value is not used.

## Deep physical interpretation

The depth formula is simple, but its reliability depends on assumptions: homogeneous medium, constant [[v_us]], and temporally separated echoes. If the material has porosity or thermal gradients, local [[v_us]] changes and the calculated depth can be wrong.

A visible defect echo means [[coeficiente_de_reflexion_acustica]] is not zero. However, [[coeficiente_de_reflexion_acustica]] does not directly inform depth; it informs echo amplitude. Depth comes from [[t_vuelo]] and [[v_us]], while [[coeficiente_de_reflexion_acustica]] provides information about the defect nature.

A local variation in [[rho_mat]] alters [[impedancia_acustica]] and modulates echo amplitude. Therefore, in corroded or composite parts, it is important to calibrate [[v_us]] with a reference sample of the same material and not use tabulated values without verification.

## Order of magnitude

In steel with [[v_us]] ≈ 5900 m/s, a 25 mm part produces a back-wall echo at about 8.5 µs. In water with [[v_us]] ≈ 1540 m/s, 50 mm produces an echo at about 65 µs.

Typical impedances are: water 1.5 MRayl, aluminium 17 MRayl, steel 45 MRayl and air 400 Rayl. The difference between steel and air is so large that almost all energy is reflected at the air-metal surface.

## Personalized resolution method

For a real ultrasonic testing problem, first identify the defect type and the surrounding medium. Then choose the most certain variable: if [[v_us]] is accurately known, use it directly; if not, calculate it first with a reference block. In thickness testing, the reference variable is the back-wall echo time.

The structured strategy is:
1. Calibrate [[v_us]] with a known material.
2. Measure the defect [[t_vuelo]].
3. Calculate [[d_defecto]] with the round-trip formula.
4. Compute [[impedancia_acustica]] and assess [[coeficiente_de_reflexion_acustica]] to interpret echo amplitude.
5. Review consistency with geometry and physical context.

## Special cases and extended example

In welded parts, an inclined defect may produce a weak echo even if it has high contrast because the reflection is directed away from the transducer. In such cases, different angles or shear wave modes are used to inspect the weld.

In coated parts, the first echo may correspond to the coating/part interface and mask internal echoes. Extended analysis compares echo times with the known coating thickness and adjusts the surface-layer speed.

When grain noise is present inside the metal, the echo can appear diffuse. In that case, a lower-frequency transducer is used and the pulse shape is examined. If the echo preserves the original pulse form, it is more likely a real geometric reflector than noise.

## Real student questions

- Why is there a division by 2 in the depth formula? Because the wave travels to the defect and then back, making a round-trip distance.

- What does [[coeficiente_de_reflexion_acustica]] close to 1 mean? That there is a very large impedance mismatch between the two media, producing an intense echo. A typical example is the steel-air interface.

- Why does [[rho_mat]] matter if depth only depends on [[v_us]] and [[t_vuelo]]? Because [[rho_mat]] determines [[impedancia_acustica]] and therefore echo intensity. Depth is calculated from [[v_us]] and [[t_vuelo]], but detectability depends on [[impedancia_acustica]] and [[coeficiente_de_reflexion_acustica]].

## Cross-cutting connections and study paths

This leaf connects to solid-wave physics, acoustics, and material mechanics. The definition of [[impedancia_acustica]] is analogous to impedance in electrical circuits, where an impedance discontinuity produces reflection.

It also relates to material elasticity, because [[v_us]] depends on elastic moduli and density. Thus, ultrasonic echo reading is a direct application of elasticity concepts and wave propagation.

## Final synthesis

Ultrasonic tests convert [[t_vuelo]] into [[d_defecto]] using [[v_us]]. Acoustic impedance [[impedancia_acustica]] and reflection coefficient [[coeficiente_de_reflexion_acustica]] control which echoes are detectable and what information about defect type can be extracted.

Calibration with a block of the same material reduces errors from variations in [[rho_mat]] and [[v_us]]. In real problems, these calculations must be complemented with pulse-shape observation and cross-validation between multiple measurements to discriminate defects, inclusions, and material fluctuations.