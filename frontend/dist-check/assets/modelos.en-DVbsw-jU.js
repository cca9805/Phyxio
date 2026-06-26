const e=`# Physical models for the electromagnetic wave equation

## Ideal model

The reference model in this leaf is the **monochromatic plane wave in vacuum**. The fields [[E]] and [[B]] depend on a single spatial coordinate (the propagation direction x) and time, and are uniform across any plane perpendicular to that direction. The amplitude is constant: there is no attenuation or change in shape with distance.

The central simplification is twofold. First, the real geometry of the source (which emits spherical, not plane, wavefronts) is ignored. Second, dispersion is ignored: the propagation speed [[c]] is assumed independent of [[omega]]. The quantities this model retains are [[E]], [[B]], [[c]], [[omega]], and [[k]]; those it ignores are the amplitude variation with distance from the source and the dependence of [[c]] on frequency.

## Hypotheses

- **Vacuum without free charges or currents:** charge density ρ is zero and current density **J** is zero. Without this hypothesis, the conduction current term modifies the wave equation and introduces attenuation.
- **Plane wavefront:** the phase is constant across planes perpendicular to the propagation direction. If violated (nearby source or complex geometry), the wavefront is curved and the model is no longer applicable without corrections.
- **Monochromaticity:** a single well-defined [[omega]] is considered. If the pulse is broadband, the superposition of frequencies can deform the solution in dispersive media.
- **Constant amplitude:** the energy of the wave is neither dissipated nor spatially redistributed. Valid in vacuum; fails in lossy media or diverging geometries.

## Quantitative validity domain

The plane-wave model is valid when the distance to the source r satisfies **r ≫ λ** (far-field or Fraunhofer zone). For visible light with [[lambda]] ≈ 500 nm, this means distances greater than a few micrometres; for FM radio waves with [[lambda]] ≈ 3 m, the far field begins several metres from the antenna.

In vacuum, the dispersion relation is strictly linear: [[omega]] = [[c]]·[[k]] for all [[omega]] in the range 10³ Hz (long-wave radio) to 10²⁰ Hz (gamma rays). The absence of dispersion means [[c]] is the same universal constant across that range of 17 orders of magnitude.

## Model failure signals

The plane-wave model breaks down in several physically recognisable scenarios.

First, if the calculated intensity does not decay with distance but the experiment shows a 1/r² fall-off, the source is localised and the wavefront is spherical, not plane. Second, if two frequencies sent simultaneously arrive at different times at the detector (chromatic dispersion), the dispersion-free model is insufficient. Third, if the wave penetrates appreciably into a metal or semiconductor rather than reflecting almost completely, there is absorption and the wave number [[k]] has a significant imaginary part.

## Extended or alternative model

The extended model incorporates two generalisations: the **spherical wave** (when r is not ≫ λ) and the **wave in a dispersive medium** (when n depends on [[omega]]). In the spherical wave, the amplitude of [[E]] decreases as the reciprocal of the distance from the source, conserving total power across concentric spherical surfaces. In the dispersive medium, the phase velocity [[omega]]/[[k]] and the group velocity d[[omega]]/d[[k]] are distinct and both depend on [[omega]].

The transition to the extended model is worthwhile when working close to the source (distances smaller than several [[lambda]], i.e., when r < 10λ) or when it is necessary to predict pulse broadening in waveguides, optical fibres, or any system with measurable chromatic dispersion. Concretely: switch to the spherical wave model when r/[[lambda]] < 10; switch to the dispersive model when the group-velocity dispersion parameter D exceeds 1 ps/(nm·km) for the pulse bandwidth of interest.

## Operational comparison

| Criterion | Plane wave in vacuum | Spherical / dispersive wave |
|---|---|---|
| **Amplitude** | Constant | Falls as 1/r or attenuates exponentially |
| **Speed** | Always [[c]] | [[c]]/n, with n dependent on [[omega]] |
| **Wavefront** | Plane | Spherical or deformed |
| **Dispersion** | None | Present; group velocity ≠ phase velocity |
| **Applicability** | Far field, vacuum | Near field, material media |
| **Complexity** | Minimal | Greater; requires n(ω) of the medium |

The ideal model is sufficient for computing [[c]], the dispersion relation, and the transversality properties in vacuum. The extended model is necessary in fibre optics, near-field antenna design, and ultrashort pulse analysis.
`;export{e as default};
