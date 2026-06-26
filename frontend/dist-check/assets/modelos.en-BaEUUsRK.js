const e=`## Ideal model

The ideal model of reflection uses a boundary that is flat, smooth compared with the wavelength, and fixed during the interaction. In that case, a single local normal relates [[theta_i]] and [[theta_r]] through specular symmetry.

For energy, the model uses [[R_reflectancia]] as the effective fraction of [[I_incidente]] returning as [[I_reflejada]]. Direction and intensity are treated separately: a boundary may reflect in the correct direction while returning little energy.

## Hypotheses

- The boundary is locally flat: if this fails, each point has a different normal and the reflected wavefront may curve.
- Roughness is small compared with the wavelength: otherwise diffuse reflection appears.
- The incident medium is homogeneous: if it changes near the boundary, the geometric normal is not enough to predict the whole path.
- [[R_reflectancia]] summarizes absorption and transmission well: if it strongly depends on angle or frequency, it must be modeled in more detail.
- The boundary is passive: if gain is present, [[I_reflejada]] may exceed the passive reading.

## Quantitative validity domain

The specular model is reasonable when typical roughness is less than 10 % of the wavelength. For visible light, this requires surfaces polished at submicrometre scale; for low-pitched sound, an ordinary wall may be regular enough.

At a passive boundary, [[R_reflectancia]] must lie between 0 and 1. If a percentage is used, 80 % must be entered as fraction 0.80. The angular law remains useful for angles between 0 and 90 degrees from the normal.

## Model failure signals

A clear failure signal is that the reflected wave does not leave in one dominant direction, but is distributed over many directions. This indicates roughness, texture, or scattering by irregularities comparable with the wavelength.

Another signal is obtaining [[I_reflejada]] larger than [[I_incidente]] at a passive boundary. It is also suspicious when the computed angle looks complementary to the expected one; this usually means it was measured from the surface instead of from the normal.

## Extended or alternative model

When to switch to the extended model: use it if the surface is rough, if curvature is appreciable, if the material absorbs in a frequency-dependent way, or if many internal reflections appear. Then diffuse reflection, Fresnel coefficients, geometrical acoustics, or scattering models are used.

In advanced optics, [[R_reflectancia]] depends on polarization and angle. In architectural acoustics, specular reflection is combined with absorption and diffusion. On curved surfaces, the law is applied locally and the full reflected wavefront is reconstructed.

## Operational comparison

| Criterion | Ideal model | Extended model |
|---|---|---|
| Direction | One specular [[theta_r]] | Many directions or local normals |
| Intensity | Constant [[R_reflectancia]] | Reflectance depends on material, angle, and frequency |
| Complexity | Low and geometric | Higher, with detailed scattering or absorption |
| Typical use | Plane mirrors, simple echoes, idealized rays | Rough surfaces, real lenses, rooms, and coatings |
`;export{e as default};
