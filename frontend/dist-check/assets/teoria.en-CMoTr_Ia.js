const e=`# Refractive Index

## Conceptual context

When a ray of light crosses the boundary between two transparent media, its speed changes and its path bends. The **refractive index** is the number that quantifies this change: it condenses into a single dimensionless figure how much a material slows light compared to vacuum. Understanding this concept is essential for explaining everyday phenomena such as the bending of light in a glass of water, the operation of lenses and signal transmission through optical fibre.

Within geometrical optics, the refractive index links two fundamental quantities: the **speed of light in vacuum** [[c]] and the **speed of light in the medium** [[v_medio]]. From that ratio follow consequences for the wavelength, the direction of the ray and the limits of the geometrical model.

## 🟢 Essential level

Light travels more slowly inside a material than in vacuum. The **refractive index** [[n]] of a medium tells us how many times that speed is reduced. A glass with [[n]] of approximately 1.5 slows light to two thirds of its vacuum speed. Water, with [[n]] close to 1.33, slows it somewhat less. Diamond, with [[n]] near 2.42, reduces it to less than half.

> [!TIP]
> A higher index means greater slowing and, at an interface, greater bending of the ray towards the normal.

The **frequency** of the light wave does not change upon entering a different medium. What changes is the **speed** and, consequently, the **wavelength** [[lambda_medio]], which shortens in proportion to the index. This invariance of frequency is one of the keys to correctly interpreting refraction.

## 🔵 Formal level

The quantitative definition of the refractive index establishes the ratio between the speed of light in vacuum and the speed in the medium:

{{f:definicion_indice}}

Since [[c]] is a universal constant (approximately 2.998 times ten to the eighth metres per second) and [[v_medio]] is always less than [[c]] in conventional materials, the result [[n]] is a dimensionless number greater than or equal to one.

From the conservation of frequency, the wavelength inside the medium is related to the vacuum wavelength by:

{{f:longitud_onda_medio}}

The link between the index and the direction of the ray when crossing a flat interface is given by Snell's law:

{{f:snell_refraccion}}

This last relation shows that the angular deviation of the ray depends directly on the ratio of the indices of the two media. If the second medium has a higher index, the ray bends towards the normal; if it is lower, the ray bends away from it.

> [!NOTE]
> Snell's law is the operational tool for calculating refraction angles, while the definition of [[n]] connects the geometry of the ray with the wave speed.

Rearranging the definition formula to solve for [[v_medio]] gives the speed of light in any medium once its index is known. Rearranging the second formula yields [[lambda_medio]] from [[lambda_0]] and [[n]].

## 🔴 Structural level

The refractive index is not a static property of the material: **it depends on the wavelength** of the incident light. This phenomenon, called **dispersion**, explains why a prism splits white light into colours. For each wavelength [[lambda_0]], the material exhibits a slightly different value of [[n]], so rays of different colours are deflected at different angles when crossing an interface.

The relationship between [[n]] and [[lambda_0]] is described by empirical dispersion curves such as the Cauchy or Sellmeier equations. In the visible range, most glasses exhibit **normal dispersion**: the index increases as the wavelength decreases, so violet light is deflected more than red light.

> [!WARNING]
> The constant-index model is an idealisation valid only for monochromatic light or narrow spectral bands. Applying it to broadband sources without accounting for dispersion can produce significant errors in angle and focal position calculations.

When light passes from a medium of higher index to one of lower index, there exists a **critical angle** beyond which no refracted ray exists and all energy is reflected. This phenomenon of **total internal reflection** is directly controlled by the ratio of indices and has decisive applications in optical fibre and retroreflector prisms.

The structure of the model also reveals its **validity limits**: the geometrical treatment fails when the dimensions of the system are comparable to the wavelength (diffraction), when the medium is anisotropic (birefringence) or when the light intensity is so high that the index itself depends on the field (nonlinear optics). In those regimes, the concept of refractive index is generalised to tensors or complex functions that incorporate absorption.

The dependence of the index on temperature is another structurally relevant factor in precision optical design. A change of a few degrees Celsius in a high-quality glass can alter [[n]] in the fifth decimal place, enough to shift the focus of an astronomical instrument.

## Deep physical interpretation

The refractive index translates a microscopic property — the **polarisability** of the molecules or ions in the material — into a macroscopic observable quantity: the phase speed of the wave. Each dipole induced by the electric field of the light re-emits a secondary wave that interferes with the original, resulting in a net wavefront that travels more slowly.

A high [[n]] does not necessarily mean that the medium is mechanically dense. Diamond has a very high index because the electrons of the carbon-carbon bond respond intensely to the electric field of the light, not because diamond is heavy.

> [!TIP]
> The correct analogy is to think in terms of the electromagnetic interaction, not mass density.

## Order of magnitude

Vacuum has [[n]] exactly equal to one. Air at atmospheric pressure presents an index of approximately 1.0003, so close to one that in most problems it is directly approximated as one. Water has [[n]] close to 1.33, ordinary glass between 1.45 and 1.55, sapphire around 1.77 and diamond approximately 2.42.

If a student obtains a refractive index of 0.5 for a glass, the result is physically absurd in classical optics, since it would imply that light travels twice as fast in the glass as in vacuum. Likewise, a value above 3 should raise suspicion of a data or unit error, since very few ordinary materials reach that figure.

## Personalized resolution method

1. **Identify the media** involved and their refractive indices. If the problem gives the speed in the medium, calculate [[n]] from the definition formula.
2. **Determine the target quantity**: speed in the medium, wavelength in the medium or angle of refraction.
3. **Select the appropriate formula** and solve for the target variable.
4. **Substitute numerical values**, checking units (metres, radians, m/s).
5. **Check coherence**: the index must be greater than one in conventional media, the wavelength in the medium must be less than in vacuum, and the refraction angle must be smaller than the incidence angle when the ray enters a medium of higher index.

## Special cases and extended example

- **Normal incidence** ([[theta_1]] equal to zero): the ray crosses the interface without deflection, but its speed and wavelength change according to [[n]]. This case allows measuring the index without considering angles.

- **Critical angle**: when light passes from a denser medium to a less dense one (for example, glass to air), there exists an angle of incidence beyond which no refracted ray exists. For glass with [[n]] of 1.50, total reflection occurs above approximately 42 degrees. This principle underpins the confinement of light in optical fibres.

- **Chromatic dispersion in a prism**: white light entering a glass prism is decomposed because each colour has a slightly different index. The angular separation between red and violet depends on the index difference, which may be as small as 0.01 but produces a visible spread of several degrees.

## Real student questions

**Why does the frequency of light not change when it enters another medium?**
The frequency is set by the source emitting the wave. At the boundary between media, the boundary conditions require the oscillation to have the same frequency on both sides in order to maintain the continuity of the electromagnetic field.

**If the refractive index of air is almost one, can it always be ignored?**
In most classroom problems, yes. But in precision astronomy, atmospheric refraction shifts the apparent position of stars, and in high-accuracy metrology the difference between 1 and 1.0003 matters.

**Can the refractive index be less than one?**
In conventional media at optical frequencies, no. However, in certain frequency bands near atomic resonances the phase velocity can exceed [[c]], giving an index below one. This does not violate relativity because the group velocity (which carries energy and information) remains below [[c]].

**Why does diamond have such a high index?**
Because the bonding electrons of carbon in the crystal structure of diamond respond with great intensity to the oscillating electric field of light. That high electronic polarisability is equivalent to stronger slowing of the wave.

## Cross-cutting connections and study paths

The refractive index is the bridge between [Snell's Law](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/refraccion/ley-de-snell) and [Reflection](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/reflexion). Understanding [[n]] opens the door to total internal reflection, lens design, optical fibre and chromatic dispersion. In physical optics, the index enters interference and diffraction patterns when light crosses thin films or diffraction gratings.

From the standpoint of electrodynamics, the refractive index is related to the permittivity and permeability of the medium, connecting optics with Maxwell's electromagnetism.

## Final synthesis

The refractive index [[n]] condenses the interaction between light and a material medium into a single dimensionless number. It defines the speed of light in the medium, the internal wavelength and, combined with Snell's law, the direction of the refracted ray. Its dependence on wavelength gives rise to dispersion and marks the limits of the constant-index model.
`;export{e as default};
