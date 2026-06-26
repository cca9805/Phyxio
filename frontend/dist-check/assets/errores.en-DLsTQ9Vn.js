const e=`# Common mistakes

## Conceptual errors

### Error 1: Treating the spectrum as a list of names

**Why it seems correct**

School explanations often present radio, visible, and X rays as labels. Memorization hides that all regions are ordered by [[f]], [[lambda]], and [[E_foton]].

**Why it is incorrect**

The spectrum is a physical continuum. Boundaries are practical, not exact walls. What changes is scale and interaction with matter.

**Detection signal**

The student names a region but cannot decide whether photon energy increases or decreases.

**Conceptual correction**

Always order with a magnitude. If [[f]] rises, [[E_foton]] rises and wavelength decreases in vacuum.

**Mini contrast example**

An infrared wave and a nearby visible wave are not separated by a wall. They change continuously, although detectors treat them differently.

## Model errors

### Error 2: Using vacuum when the medium matters

**Why it seems correct**

The relation between frequency and wavelength is memorized with [[c]], and the student applies it in any material without checking context.

**Why it is incorrect**

In dispersive media, wavelength and phase speed can change. Frequency is fixed by the source, but propagation is no longer the vacuum one.

**Detection signal**

The statement mentions glass, water, prism, optical fibre, or refractive index, and the solution ignores the medium.

**Conceptual correction**

Use the vacuum model for initial classification. Switch to propagation in media if the problem asks about path, refraction, or dispersion.

**Mini contrast example**

The same light can keep its frequency when entering glass and change its wavelength inside the material. Classification and propagation are not the same question.

## Mathematical errors

### Error 3: Reversing frequency and wavelength

**Why it seems correct**

Both magnitudes describe oscillations and appear together. The naive analogy "larger means more energetic" makes longer wavelength look like higher energy.

**Why it is incorrect**

In vacuum, [[lambda]] and [[f]] vary inversely. Photon energy increases with [[f]], not with a larger wavelength.

**Detection signal**

The solution places radio as more energetic than ultraviolet only because its wavelengths are larger.

**Conceptual correction**

For photon energy, read [[f]] or [[E_foton]]. For spatial scale, read [[lambda]]. Do not interchange those readings.

**Mini contrast example**

A radio antenna uses large wavelengths, but that does not make its photons more energetic than ultraviolet photons.

## Interpretation errors

### Error 4: Confusing photon energy with intensity

**Why it seems correct**

The word energy appears in both cases. The student mixes the energy of one quantum with the total energy transported by a source.

**Why it is incorrect**

[[E_foton]] measures individual energy. Total intensity depends on how many photons arrive per second and how radiation is distributed.

**Detection signal**

The student states that a weak ultraviolet source delivers more total power than an intense infrared source only because each photon has higher energy.

**Conceptual correction**

Separate individual interaction from total power. The spectrum informs photon energy; intensity requires another datum.

**Mini contrast example**

A visible pointer may be less powerful than an infrared heater, even though individual photon energies differ. Total power does not come from [[E_foton]] alone.

## Quick self-control rule

Before closing a problem, answer three questions: what region does [[f]] predict, what spatial scale does [[lambda]] predict, and what individual interaction does [[E_foton]] suggest. If one answer contradicts another, check the conversion.

The short rule is: high frequency means a more energetic photon; large wavelength means lower frequency in vacuum; total intensity is not deduced from a single photon.
`;export{e as default};
