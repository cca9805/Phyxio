## Ideal model

The simplified model governing this leaf is the **ideal harmonic electromagnetic plane wave** propagating in absolute vacuum. In this model, we assume that the wavefronts are infinite parallel plane surfaces perpendicular to propagation, and that the electric field vector [[amplitud_del_campo_electrico]] and magnetic field vector [[amplitud_del_campo_magnetico]] oscillate harmonically, maintaining constant amplitudes along the entire path. Any geometric decay of amplitude with distance, dissipation by absorption in attenuating media, and any distortion by chromatic dispersion are completely ignored.

## Hypotheses

- **Complete spatial homogeneity and isotropy**: We assume vacuum is identical in all directions. If this hypothesis is violated (for instance, in an anisotropic crystal), the wave will experience birefringence, splitting into two rays with different speeds.
- **Absolute field linearity**: We assume fields do not interact non-linearly. If violated due to extremely high intensity, phenomena such as beam self-focusing will occur.
- **Plane wavefronts**: The wave is assumed to be an infinite plane wave. Violating this hypothesis at short distances to the source (near field) causes field components to exist in the propagation direction.

## Quantitative validity domain

This model is highly accurate and applicable under strict quantitative conditions:
- **Distance to the source**: The radial distance r to the emitter must satisfy the far-field inequality: r >> [[lambda]] (typically r > 10 [[lambda]]), guaranteeing that the curvature of the wavefronts is negligible.
- **Radiation intensity**: The power density or mean intensity [[intensidad_media]] must be within standard ranges, typically below 10^12 W/m^2, where non-linear effects of quantum electrodynamics and non-linear polarization of the medium are non-existent.

## Model failure signals

An observer or student can look for these quantitative signals in their data to know that the ideal model is no longer applicable:
- **Amplitude reduction with distance**: If measuring the electric field at successive points along the axis of advance shows that its value decreases as 1/r, it reveals that the real wavefront is spherical and not plane.
- **Phase shift between fields**: If measuring the electric field [[amplitud_del_campo_electrico]] and the magnetic field [[amplitud_del_campo_magnetico]] reveals a phase difference other than zero, this reveals the presence of a lossy conducting medium.
- **Deviation from the amplitude relation**: If calculating the ratio [[amplitud_del_campo_electrico]] / [[amplitud_del_campo_magnetico]] yields a result that differs from the constant value of [[velocidad_de_la_luz_en_el_vacio]], it indicates that the wave is propagating in a dielectric material and not in vacuum.

## Extended or alternative model

The extended model corresponds to **propagation in dielectric and lossy conducting material media**. Unlike vacuum, real media present polarization and magnetization that slow the wave down. The transition to the extended model is when to use a material medium such as gases, liquids, or solids (like the atmosphere, water, or optical fibers). When to switch to the lossy conductor model is when studying propagation in metals or saltwater, where conductivity causes exponential attenuation and energy absorption.

## Operational comparison

| Criterion | Ideal Model (Vacuum) | Extended Model (Real Medium) |
|---|---|---|
| **Accuracy** | Exact in absolute vacuum; approximate in dry air. | High in dispersive media and lossy conductors. |
| **Complexity** | Low (simple algebraic relations like [[amplitud_del_campo_electrico]] = [[velocidad_de_la_luz_en_el_vacio]] [[amplitud_del_campo_magnetico]]). | High (complex differential equations and complex constants). |
| **Speed** | Constant, invariant [[velocidad_de_la_luz_en_el_vacio]]. | Variable depending on the refractive index, and dispersive. |
| **Attenuation** | Zero (the wave propagates infinitely with constant amplitude). | Exponential (conversion of electromagnetic energy into heat). |