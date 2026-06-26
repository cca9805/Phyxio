const e=`# Propagation in Media

## Conceptual context

Propagation in media studies what changes when an electromagnetic wave leaves vacuum or ideal air and enters a material. The wave remains electromagnetic, but the medium responds electrically and magnetically, so phase speed, wavelength, and propagation direction may change.

This leaf connects the electromagnetic spectrum with real optics. In vacuum, [[c]] is enough as a reference; in glass, water, plastic, or an optical fiber the index [[n]] appears, summarizing how propagation is modified. Thinking in media helps explain refraction, delay, guiding, dispersion, and loss without confusing them with a change in the nature of the wave.

The central idea is not that light becomes a different object inside the material. The source fixes the frequency, while the medium determines [[v_m]] and [[lambda_m]]. This separation prevents many errors when moving from vacuum formulas to experimental situations.

## 🟢 Essential level

When an electromagnetic wave enters an ordinary medium, it usually propagates more slowly than in vacuum. The index [[n]] measures that effect: the larger the index, the smaller the propagation speed [[v_m]] and the shorter the wavelength inside the material.

Frequency does not freely adjust when the wave enters the medium. The source imposes the temporal rhythm, and the material modifies the spatial scale. That is why the same color keeps its frequency through a glass plate, although its wavefronts become closer together inside the plate.

The learner should distinguish three readings: [[c]] is the vacuum reference, [[v_m]] is the speed inside the medium, and [[lambda_m]] is the spatial scale inside the medium. Mixing them produces incoherent results.

> [!NOTE]
> In an ordinary medium, saying that the wave is slower does not mean that it automatically loses frequency. Frequency remains tied to the source; speed changes and wavelength changes.

## 🔵 Formal level

The first formal model uses the effective index to correct phase speed. If the medium is treated as linear, homogeneous, and isotropic as a first approximation, [[v_m]] is obtained by comparing [[c]] with [[n]].

{{f:velocidad_en_medio}}

This relation expresses a direct physical idea: [[n]] has no units and acts as a reduction factor. A medium with larger index produces a lower phase speed. In ordinary transparent materials, this reading describes plane-wave propagation and allows delay estimates.

The index can also be connected to effective electromagnetic parameters. The relative permittivity [[epsilon_r]] measures the electric response of the medium, and the relative permeability [[mu_r]] measures its magnetic response.

{{f:indice_medio_em}}

In many optical dielectrics [[mu_r]] is close to one, but that does not erase its conceptual role: the index comes from the full electromagnetic response of the medium. For waves outside the optical range or special materials, ignoring magnetic response can be a poor approximation.

Finally, the wavelength inside the medium is obtained by comparing the vacuum wavelength [[lambda0]] with the same index.

{{f:longitud_onda_en_medio}}

The formula does not say that the wave changes frequency on entry. It says that, because phase speed is reduced for the same temporal rhythm, wavefronts become closer together. That is the reading that connects material propagation with refraction and guiding.

## 🔴 Structural level

The deep structure of the topic separates three layers: material properties, wave propagation, and boundary conditions. Material properties are condensed in [[epsilon_r]], [[mu_r]], and [[n]]. Propagation is expressed through [[v_m]] and [[lambda_m]]. The boundary between media decides how phases connect and why frequency is conserved across it.

This separation is essential because the index is not a fixed label forever. It may depend on frequency, temperature, polarization, propagation direction, or intensity if the material is no longer linear. When [[n]] changes with frequency, dispersion appears: different colors advance with different phase speeds and a signal may deform.

One must also distinguish phase speed, group speed, and energy transport. In this leaf [[v_m]] represents phase speed in a simple model. If the problem concerns pulses, information, or strongly dispersive media, it is better to switch to a group-speed model. A single speed may be insufficient even when the formula is correct for a monochromatic wave.

The wavelength in the medium has geometric consequences. It determines wavefront separation, interference, accumulated phase, and resonance conditions. That is why a thin film, an optical fiber, or a waveguide is not analyzed like a free wave in vacuum: the material changes the spatial scale with which the wave organizes itself.

This structure also explains why material data must be tied to a spectral band. A single number for [[n]] is a compressed description of a response, not a universal identity card. Good modeling always asks which wave, which frequency range, and which material state are being described.

> [!WARNING]
> Do not use a tabulated index without checking context. A value measured for visible light may not apply to microwaves, ultraviolet radiation, or absorbing materials.

## Deep physical interpretation

Propagation in media shows that a wave is not understood only from the source that emits it. The material participates in propagation by polarizing, magnetizing, or delaying the response of its charges. That effective delay appears macroscopically as a decrease in [[v_m]] and a reduction in [[lambda_m]].

The fine physical reading is not to attribute everything to photons moving slowly through an obstacle. In the wave model, field and medium form a coupled system. Phase advances differently because the material responds and re-emits coherently at a macroscopic scale.

The practical sign of correct reasoning is that frequency acts as the bridge across the boundary. If the medium changes but the source is the same, speed and wavelength readjust, not the rhythm imposed by the source.

## Order of magnitude

In air, [[n]] is very close to one and [[v_m]] almost coincides with [[c]]. In visible water, an index around 1.33 reduces speed to about three quarters of the vacuum reference. In common glass, indices around 1.5 reduce speed further and shorten wavelength in the same proportion.

An absurd result appears if ordinary glass gives a speed greater than [[c]], if a positive index produces a negative wavelength, or if a vacuum wavelength is used as the actual wavelength inside a fiber.

## Personalized resolution method

First identify which quantity belongs to vacuum and which belongs to the medium. If the datum is [[lambda0]], do not treat it as [[lambda_m]] without applying the index. If the datum is [[n]], calculate [[v_m]] or [[lambda_m]] first depending on the question.

Then check the material hypothesis. For a simple estimate, use an effective index. For a pulse, a dispersive material, or a region with absorption, change model before interpreting the result. The final step is checking positivity and physically reasonable scale.

## Special cases and extended example

A subtle case is the optical fiber. Light does not only propagate more slowly in the core; it must also satisfy guiding conditions between core and cladding. The index difference controls internal reflection and trajectory, while [[lambda_m]] controls accumulated phase.

Another case is a prism. Different colors do not separate because they have different nature, but because the effective index depends slightly on frequency. That dependence makes each component refract in a different direction and allows white light to be decomposed.

In absorbing media, the real-index model can be too limited. The wave may lose amplitude as it advances, and propagation then requires a loss description. In that scenario, [[v_m]] and [[lambda_m]] remain useful, but they do not exhaust the physics.

## Real student questions

**Does light change frequency when entering glass?** Not at a stationary boundary. The source fixes frequency; the medium changes speed and wavelength.

**Does a larger index always mean slower propagation?** In the ordinary model of this leaf, yes. In advanced or strongly dispersive materials, one must specify whether phase, group, or signal speed is meant.

**Why not always use [[c]]?** Because [[c]] describes vacuum propagation. In a medium, the field interacts with the electric and magnetic response of the material, and effective speed changes.

**Is the wavelength of a color always the same?** No. Frequency identifies color in many contexts, but wavelength depends on the medium in which the wave propagates.

## Cross-cutting connections and study paths

This leaf builds on [Electromagnetic Spectrum](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/espectro-electromagnetico), where radiation is ordered by frequency and wavelength. It also connects with [Energy and Momentum of an EM Wave](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/energia-y-momento-de-la-onda-em), where energy transport is studied.

The natural path continues toward geometrical optics, interference, optical fibers, and materials. In all those topics, the same question returns: which part depends on the source and which part depends on the medium.

## Final synthesis

Propagation in media explains how a material modifies the speed and wavelength of electromagnetic radiation through [[n]], [[epsilon_r]], and [[mu_r]]. Frequency is fixed by the source, while [[v_m]] and [[lambda_m]] describe the new physical scale inside the medium.
`;export{e as default};
