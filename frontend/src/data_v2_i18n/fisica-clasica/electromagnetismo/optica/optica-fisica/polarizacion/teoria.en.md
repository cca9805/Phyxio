## Conceptual context

Visible light is a **transverse** electromagnetic wave: its electric field oscillates in a plane perpendicular to the propagation direction. When all oscillations share a single plane, the wave is **linearly polarised**. Polarization is the property that enables us to filter, analyse and manipulate the orientation of those oscillations.

Within the physical-optics block, polarization complements interference and diffraction phenomena because it reveals an additional dimension of the wave that is invisible when only intensity or colour is observed. Understanding this phenomenon is essential for interpreting polarised sunglasses, LCD displays, polarisation microscopes and optical-communication techniques.

## 🟢 Essential level

Natural light oscillates in every direction perpendicular to its travel, with no preferred orientation. A **polariser** is a filter that transmits only the electric-field component aligned with its transmission axis. After passing through it, light becomes **linearly polarised**: its electric field oscillates in a single, well-defined plane.

If a second polarising sheet (called the **analyser**) is placed after the first, the transmitted intensity depends on the angle between the two axes. With parallel axes, light passes almost entirely; with perpendicular axes, transmission drops to zero. That angular dependence is the heart of **Malus's law**.

**Reflection** can also produce polarisation. When light strikes a transparent surface at a specific angle, the reflected beam emerges completely polarised. That angle is called the **Brewster angle** and depends on the refractive indices of the two media.

## 🔵 Formal level

The quantitative relationship between [[intensidad_transmitida]] and the angle [[theta_p]] between the wave's polarisation direction and the polariser axis is given by Malus's law:

{{f:ley_malus}}

Here [[intensidad_incidente]] is the intensity of the polarised light reaching the analyser and [[theta_p]] is the angle between the wave's polarisation direction and the filter's transmission axis. The squared-cosine dependence means that intensity does not fall linearly but stays high at small angles and drops rapidly as the angle approaches 90 degrees. When [[theta_p]] equals zero, [[intensidad_transmitida]] equals [[intensidad_incidente]]; when [[theta_p]] equals 90 degrees, [[intensidad_transmitida]] vanishes (crossed polarisers).

> [!NOTE]
> If the source emits unpolarised natural light, the first polariser transmits exactly half the original intensity. Malus's law then applies taking that half as [[intensidad_incidente]] for the second polariser.

The Brewster angle is obtained from the refractive indices of the two media forming the interface:

{{f:ley_brewster}}

Here [[n_1]] is the index of the medium through which light travels and [[n_2]] is the index on the other side of the interface. When light strikes at this angle, the electric-field component lying in the plane of incidence is not reflected, so the reflected beam is completely polarised perpendicular to the incidence plane. The underlying geometric condition is that reflected and refracted rays form a right angle.

## 🔴 Structural level

Polarization reveals the **vectorial nature** of the wave's electric field. While interference and diffraction depend on the scalar phase of the wave, polarization depends on the orientation of the electric-field vector in the transverse plane. This distinction makes polarization sensitive to the symmetry of the medium and the geometry of the interface.

Malus's law is derived by projecting the electric-field component onto the polariser's transmission axis. Because intensity is proportional to the square of the field amplitude, the projection yields the squared-cosine factor. In energy terms, the component perpendicular to the axis is absorbed or deflected by the filter material, and only the parallel component contributes to transmitted power.

Brewster's law follows from combining **Snell's law** with the condition that reflected and refracted beams are perpendicular. When that perpendicularity holds, the atomic dipoles in the second medium oscillate along the direction of the reflected ray and therefore cannot radiate in that direction, cancelling the parallel component of the reflection. This mechanism connects polarization with the microscopic structure of light–matter interaction.

> [!WARNING]
> Brewster's law applies only to flat interfaces between transparent dielectric media. In metals the absorption introduces an imaginary component in the refractive index and the reflection is never completely polarised, although it can be partially polarised.

Three main polarization regimes exist: **linear** (the electric field oscillates in a fixed plane), **circular** (the tip of the field vector traces a circle) and **elliptical** (the general case). Malus's law in its simple form applies strictly to linearly polarised light. For elliptical polarization the **Stokes parameters** or the **Jones formalism** are required, which generalise the analysis beyond the scope of this leaf but represent the standard tool in advanced optics.

The connection between polarization and birefringence enables the manufacture of quarter-wave and half-wave plates that convert linear into circular polarization and vice versa, extending control over the light's polarization state for technological applications.

## Deep physical interpretation

The fact that intensity depends on the **square** of the cosine rather than on the cosine itself has immediate practical consequences. Rotating a polariser from 0 to 45 degrees reduces intensity to only 50 per cent; but rotating from 45 to 90 degrees drives the remaining 50 per cent to zero. This asymmetry in the rate of change is what allows polarisers to serve as precise optical attenuators at small angles.

In Brewster reflection the vanishing of the parallel reflected component is explained by the **induced dipoles** on the surface vibrating along the direction of the reflected ray. A dipole does not radiate along its own axis, which cancels that component. This microscopic argument links wave optics to the electrodynamics of materials.

## Order of magnitude

For a common air–glass interface ([[n_1]] close to 1.00 and [[n_2]] close to 1.50), [[angulo_de_brewster]] is approximately 56 degrees. For water ([[n_2]] close to 1.33) it falls to about 53 degrees. Typical laboratory intensities range from 10 to 1000 W/m². A result of [[intensidad_transmitida]] much larger than [[intensidad_incidente]], or a Brewster angle outside the 40-to-70-degree range for ordinary materials, should immediately raise suspicion of a data error.

## Personalized resolution method

1. **Identify the source**: determine whether the light is natural or already polarised. If natural, apply the one-half factor after the first polariser.
2. **Locate angles**: measure [[theta_p]] between the wave's polarisation axis and the analyser axis.
3. **Apply Malus's law**: compute [[intensidad_transmitida]] from [[intensidad_incidente]] and [[theta_p]].
4. **If reflection is involved**: identify the two media, obtain [[n_1]] and [[n_2]], and calculate [[angulo_de_brewster]] with Brewster's law.
5. **Check coherence**: verify that [[intensidad_transmitida]] does not exceed [[intensidad_incidente]] and that [[angulo_de_brewster]] falls within a reasonable range for the given materials.

## Special cases and extended example

- **Crossed polarisers with an intermediate sheet**: inserting a third polariser between two crossed ones with its axis at 45 degrees to both allows light to pass again. The final intensity is one quarter of [[intensidad_incidente]] multiplied by the squared sine of twice the intermediate angle, demonstrating that polarization is not simply an all-or-nothing filter.

- **Reflection off water at [[angulo_de_brewster]]**: observing a lake at the Brewster angle shows that reflected light is almost completely horizontally polarised. This is why polarised sunglasses with a vertical transmission axis eliminate glare from the water surface while transmitting useful light.

## Real student questions

**Why does inserting a third polariser at 45 degrees between two crossed ones let light through again?**
Each polariser projects the electric field onto its axis. The intermediate filter rotates the polarisation direction, providing a non-zero component to the third filter. Without the intermediate sheet the projection onto the second axis is zero.

**Do polarised sunglasses work the same way as a laboratory polariser?**
Yes, the principle is identical: they absorb the electric-field component perpendicular to their transmission axis. The difference lies in optical quality and material uniformity.

**Does polarization affect the colour of light?**
Not directly. Polarization acts on the orientation of the electric field, not on the wavelength. However, in birefringent media different wavelengths may undergo different rotations, producing colours through interference in polarised light.

**Can a longitudinal wave be polarised?**
No. Polarization is exclusive to transverse waves because it requires the oscillation to be orientable in different directions perpendicular to propagation. In longitudinal waves only one oscillation direction is possible.

## Cross-cutting connections and study paths

Polarization connects with [interference of light](leaf:fisica-clasica/electromagnetismo/optica/optica-fisica/interferencia-de-la-luz) through coherence and the superposition of transverse waves. It also relates to [diffraction](leaf:fisica-clasica/electromagnetismo/optica/optica-fisica/difraccion-de-la-luz) when analysing diffraction patterns with polarised light.

Beyond optics, polarization appears in radio waves (polarised antennas), microwaves and gravitational waves, linking this topic to general electromagnetism and modern physics.

## Final synthesis

Polarization reveals that light is not a scalar wave but a vectorial oscillation with a definite orientation. Malus's law quantifies how a polariser filters intensity according to the squared cosine of the angle, and Brewster's law identifies the angle of fully polarised reflection from the refractive indices. Mastering both relationships enables the interpretation of everyday phenomena and the design of optical devices based on electric-field orientation control.