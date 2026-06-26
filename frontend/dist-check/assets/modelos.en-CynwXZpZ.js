const e=`# Physical Models: Center of Mass in Extended Bodies

## Ideal model

The ideal model treats the body as a continuous, rigid distribution with finite total mass. Individual particles are not listed one by one; a mass element [[dm]] is defined and integrated over the length, area, or volume occupied by the body. This idealization is appropriate for rods, plates, and solids whose microscopic structure does not change the global center-of-mass position.

## Hypotheses

- The body does not deform during the interval being analyzed.
- The chosen density represents the real distribution with sufficient accuracy.
- The integration domain matches the physical geometry of the body.
- The total mass [[M]] is positive and finite.
- The origin and axes remain fixed throughout the calculation.

## Quantitative validity domain

The model works well if unmodeled density variations change [[M]] or [[xcm]] by less than 5 %. In a rod of length [[L]], the result must satisfy 0 <= [[xcm]] <= [[L]] when the origin is placed at one end. For plates and compact solids, the scale of [[R_cm]] must be comparable to the geometric size of the body, not to its mass or volume.

## Model failure signals

The model fails if the center of mass lies outside the expected geometric range without a hole or composite geometry to justify it. It also fails if uniform [[lambda]] is used when the statement gives variable density, if [[I_x]] is confused with [[xcm]], or if the final unit is not a length. An experimental discrepancy above 5-10 % usually points to a wrong density model or ignored deformation.

## Extended or alternative model

When it is appropriate to switch to an alternative model is when the body deforms, density changes with time, the material is composite, or the geometry cannot be represented by a single simple domain. In those cases one moves to piecewise integration, variable density, coordinates adapted to symmetry, or even an elastic model if the shape changes under load.

## Operational comparison

| Situation | Appropriate model | Practical criterion |
|---|---|---|
| Uniform rod | Constant linear density | Use masa_longitud and symmetry |
| Nonuniform rod | Integral with variable [[lambda]] | Integrate [[M]] and [[I_x]] |
| Homogeneous plate | Constant surface density | Use masa_area and centroids |
| Homogeneous solid | Constant volume density | Use masa_volumen and symmetry |
| Composite body | Sum by regions | Weight each piece by its mass |

The simplest model is accepted only if it preserves the physical bias of the distribution. If the result does not move toward the more massive region, the chosen model must be reviewed before continuing.
`;export{e as default};
