const e=`# Reflection

## Conceptual context

**Reflection** occurs when a wave reaches a boundary and part of its disturbance returns to the original medium. It is common in light, sound, water waves, strings, and electromagnetic signals. The central idea is not only that the wave “bounces”, but that the boundary imposes an outgoing direction and may return only a fraction of the intensity.

This leaf focuses on two connected questions: the direction of the reflected wave and the amount of energy that returns. The relevant quantities are the angle of incidence [[theta_i]], the angle of reflection [[theta_r]], the incident intensity [[I_incidente]], the reflected intensity [[I_reflejada]], and the reflectance [[R_reflectancia]].

Reflection underlies mirrors, echoes, radar, sonar, optical fibres, acoustic insulation, and surface reading. It also prepares refraction, interference, and standing waves, because each reflection may change direction, phase, and intensity.

## 🟢 Essential level

Imagine a wave reaching a smooth wall. If the wall behaves regularly, the wave leaves with a clear symmetry about a line perpendicular to the wall, called the normal. That line is the correct reference for measuring angles.

The intuitive rule is simple: the wave leaves as tilted from the normal as it arrived. If it arrives almost head-on, it returns almost along itself. If it arrives at a grazing angle, it also leaves grazing on the other side of the normal.

> [!TIP]
> Do not measure the angle from the surface. The law of reflection always uses the local normal.

Reflection also does not mean that all energy returns. Glass reflects part of the light and transmits another part; a wall returns part of the sound and absorbs part. Therefore reflected direction and reflected intensity are different questions.

## 🔵 Formal level

For specular reflection at a flat boundary smooth compared with the wavelength, the fundamental angular relation is:

{{f:ley_reflexion}}

This relation says that [[theta_r]] and [[theta_i]] are measured from the same normal. It does not compare angles from the surface or absolute directions in space. The normal acts as the local axis of symmetry between the incident ray and the reflected ray.

In practice, this angular equality must be applied only after the geometric convention is fixed. If the initial data are given from the surface, the angle from the normal must be reconstructed first; mixing references places the reflected ray in a physically different direction.

The amount of intensity that returns is modeled by:

{{f:intensidad_reflejada}}

Here [[R_reflectancia]] represents the energy fraction reflected by the boundary. If [[R_reflectancia]] is small, the reflected wave may have a well-defined direction but weak intensity. If [[R_reflectancia]] approaches one at a passive boundary, almost all incident intensity returns to the original medium.

The angular law and the energy law answer different questions. The first predicts where the wave leaves. The second estimates how much intensity the reflected wave carries. Confusing them leads to the belief that a geometric mirror always returns all energy, or that a weak reflection does not obey the angular law.

## 🔴 Structural level

Specular reflection requires a **locally regular** boundary. “Smooth” does not mean perfect at human scale, but smooth compared with the wavelength. A surface that is polished for radio waves may be rough for visible light; a wall smooth for low-pitched sound may scatter high-pitched sound. The same surface can therefore produce ordered reflection for some waves and diffuse reflection for others.

The normal is local. On a curved surface, each point has its own normal, and therefore each point predicts a different reflected direction. Curved mirrors, parabolic antennas, and acoustic reflectors exploit this variation to concentrate or spread waves. The law of reflection remains local, but global geometry transforms the wavefront.

> [!WARNING]
> A reflection may change the phase of the disturbance depending on the boundary type. The angular law alone does not decide whether phase reversal occurs.

Reflected intensity depends on impedance or material properties. In optics, index contrast affects [[R_reflectancia]]. In sound, a rigid boundary reflects strongly while a porous material absorbs more. On strings, a fixed end reverses the disturbance and a free end does not reverse it in the same way. The details vary by system, but the conceptual separation is stable: geometry for direction, boundary properties for intensity and phase.

The model fails when the boundary cannot be represented by a single normal, when roughness is comparable with the wavelength, or when multiple nearby reflections occur. In those cases, the reflected wave spreads into many directions, complex patterns form, or a scattering model is needed.

## Deep physical interpretation

Reflection shows that a boundary acts as a physical condition on the disturbance. It is not a collision of rigid objects, but a reorganization of the wavefront to satisfy the conditions of the medium and the surface.

Angular equality expresses spatial symmetry. Reflectance expresses an energy balance. Keeping these readings separate avoids errors: the direction may be perfectly determined even when reflected intensity is small.

## Order of magnitude

In visible light, the wavelength is hundreds of nanometres, so microscopic roughness can destroy specular reflection. In audible sound, the wavelength may range from centimetres to metres, so ordinary walls reflect low tones much more regularly.

A result is absurd if [[theta_r]] is measured from the surface while [[theta_i]] was measured from the normal, if [[I_reflejada]] is negative, or if [[R_reflectancia]] exceeds one for a passive boundary.

## Personalized resolution method

1. Draw the boundary and construct the local normal.
2. Identify [[theta_i]] from the normal, not from the surface.
3. Use the reflection law to obtain [[theta_r]].
4. If intensity is requested, identify [[I_incidente]] and [[R_reflectancia]].
5. Compute [[I_reflejada]] and check whether the boundary is passive.
6. Interpret whether the reflection is specular, diffuse, strong, or weak.

> [!NOTE]
> If the problem gives an angle from the surface, first convert it mentally to the angle from the normal before applying the law.

## Special cases and extended example

In a plane mirror, light reflection forms virtual images because reflected rays appear to come from behind the mirror. The angular law explains the apparent image position, while [[R_reflectancia]] explains why a real mirror does not return all light.

In sound, an echo appears when a sound wave reflects from a distant wall and returns with a perceptible delay. Echo direction depends on geometry, but its loudness depends on [[I_reflejada]] and losses during travel.

On a string, a wave reaching a fixed end reflects with reversal of the disturbance. The ray or direction may obey simple symmetry, but phase changes because of the boundary condition. This nuance connects reflection with standing waves.

## Real student questions

**Why is the angle measured from the normal?**

Because the normal represents the local orientation of the boundary. Measuring from the surface uses the complementary angle and breaks the correct symmetry.

**Does every reflection conserve intensity?**

No. Direction may obey the law even when [[R_reflectancia]] is low and most energy is transmitted or absorbed.

**Does a rough surface not reflect?**

It does reflect, but it spreads the wave into many directions. This is diffuse reflection and is not described by one single [[theta_r]].

**Does reflection always change phase?**

Not always. It depends on the boundary and wave type. The angular law alone does not contain that information.

## Cross-cutting connections and study paths

Reflection connects directly with [refraction](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/refraccion), because at a real boundary part of the wave may bounce back and part may transmit into another medium.

It also prepares [standing waves](leaf:fisica-clasica/ondas/ondas-estacionarias/condicion-de-estacionariedad), where superposition between incident and reflected waves produces nodes and antinodes. In optics, it links to thin-film interference.

## Final synthesis

Reflection combines a geometric rule and an energy reading. The angular law predicts direction through [[theta_i]] and [[theta_r]], while [[R_reflectancia]] and [[I_incidente]] determine the intensity that actually returns as [[I_reflejada]].
`;export{e as default};
