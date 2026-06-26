const e=`# Magnetic flux models

## Ideal model

The ideal magnetic flux model assumes a uniform field [[B]], a flat surface of area [[A]], and a constant orientation summarized by [[cos_theta]]. In that case, [[Phi_B]] is interpreted as a geometric product: field strength, surface size, and orientation effectiveness.

The central simplification is that the whole surface sees the same field and the same normal. Therefore [[B_perp]] has a single value and flux can be read as normal field accumulated over the area. This model keeps the oriented sign of [[Phi_B]], but ignores local field variations.

## Hypotheses

- The field [[B]] is uniform over the entire surface; otherwise different zones contribute different fluxes.
- The surface is flat or can be replaced by an effective area [[A]]; if it is curved, the normal changes point by point.
- The factor [[cos_theta]] describes orientation relative to the normal, not relative to the plane.
- The normal remains fixed when comparing [[Phi_i]] and [[Phi_f]]; if the convention changes, the sign of [[DeltaPhi]] loses meaning.

## Quantitative validity domain

The uniform model is reasonable when the relative variation of [[B]] over the surface is below 5 % and when the surface can be treated as flat at the field scale. In small laboratory coils, this approximation is usually good if the magnet or solenoid creates an almost uniform central region.

As an order of magnitude, a 0.01 m² loop in a 0.1 T field produces fluxes of order 10⁻³ Wb when well oriented. If the area increases tenfold, the maximum flux increases tenfold only if the field remains uniform over the whole new region.

## Model failure signals

A clear failure signal is that two parts of the surface are exposed to fields with opposite directions. In that case, using one single [[B]] over all [[A]] exaggerates flux because it misses internal cancellations.

Another signal is a result predicting a magnitude of [[Phi_B]] larger than [[Phi_max]]. The model also fails when the surface rotates during measurement, deforms, or when the field comes from a nearby source that changes rapidly with distance.

## Extended or alternative model

When to switch to the extended model: if the field is not uniform, if the surface has no single normal, or if the required precision is better than a few percent. The natural transition is to divide the surface into small patches, calculate the normal contribution of each, and sum the oriented contributions.

In a university treatment, the alternative model is flux as a continuous sum over the surface. The concrete difference is that [[B_perp]] is no longer global and becomes a local reading. For a multi-turn coil, linked flux must also consider how many turns share the same field.

## Operational comparison

| Criterion | Uniform model | Local-sum model |
|---|---|---|
| Precision | Good if [[B]] varies by less than 5 % | Better for nonuniform fields |
| Required data | [[B]], [[A]], and [[cos_theta]] | Spatial field map and detailed geometry |
| Conceptual cost | Low | Medium or high |
| Typical use | Flat loop in almost uniform field | Coils near magnets, curved surfaces |
| Main limit | Ignores internal cancellations | Requires more experimental information |
`;export{e as default};
