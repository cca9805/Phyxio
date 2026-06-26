const e=`## Ideal model

The ideal mirror model assumes that the reflecting surface is **perfectly spherical**, that all incident rays are **paraxial** (forming small angles with the optical axis) and that reflection is **specular** with no scattering or absorption. Within this framework, the mirror equation relates [[d_o]], [[d_i]] and [[f]] exactly, and the lateral magnification [[M]] describes the size and orientation relationship between image and object.

The conserved magnitudes are [[d_o]] as the input parameter, [[f]] and [[R]] as system parameters and [[d_i]] together with [[M]] as the principal outputs. The focal-length–radius relation remains exact within the paraxial approximation.

## Hypotheses

- Rays are **paraxial**: they form angles of less than about 10 degrees with the optical axis. Violating this hypothesis introduces spherical aberration, shifting the actual image position away from the mirror-equation prediction.

- The surface is **perfectly spherical** and free of defects. Manufacturing irregularities deflect rays from their calculated paths, distorting the image. In precision mirrors, deviations of a fraction of a wavelength are tolerated.

- Reflection is **specular**: all incident light is reflected following the law of reflection without diffusion. On rough surfaces, diffuse reflection spreads light in all directions and no defined image is formed.

- The medium between the object and the mirror is **homogeneous** (typically air). If the refractive index varies (for example, thermal gradients), rays curve and the image position changes.

## Quantitative validity domain

The mirror equation is accurate when the ratio of the mirror semi-aperture to the radius of curvature satisfies h/R < 0.1, keeping the spherical-aberration error below 1 % in image position. For typical laboratory mirrors with semi-apertures of 1 to 3 cm and radii of 10 to 50 cm, this condition is comfortably met.

Lateral magnification remains valid when the object is small enough for all its points to satisfy the paraxial condition. For objects whose height exceeds 10 per cent of the radius of curvature, the image exhibits field-curvature distortion.

## Model failure signals

- The observed image is blurred or elongated radially instead of a sharp point: this indicates spherical aberration due to excessive aperture.

- The image of an extended object is distorted (pincushion or barrel shaped): this indicates higher-order aberrations beyond the paraxial approximation.

- The measured image position differs by more than 5 per cent from the prediction: this indicates non-paraxial rays or surface defects.

- A double or ghost image forms: this indicates reflection from more than one surface (mirror with partial coating or lens-mirror combination).

## Extended or alternative model

To correct spherical aberration, **parabolic mirrors** are used, whose surface is a paraboloid of revolution that converges all rays parallel to the axis onto a single exact focus. However, parabolic mirrors introduce **coma** for off-axis sources, where the image of a point star takes on a comet-like shape.

For systems with multiple surfaces, **computational ray tracing** is employed, which follows each ray individually through all reflections and refractions without resorting to the paraxial approximation. This method is standard in professional optical design.

When to switch to the extended model: when the semi-aperture exceeds 10 per cent of the radius, when working off the optical axis or when aberration correction is required for high-resolution applications.

## Operational comparison

| Criterion | Ideal model (mirror equation) | Extended model (parabolic or ray tracing) |
|---|---|---|
| Surface type | Spherical | Parabolic or arbitrary |
| Precision for paraxial rays | High | Equal or superior |
| Spherical aberration | Not corrected | Eliminated (parabolic) or compensated |
| Computational complexity | Low, one algebraic formula | Medium-high, numerical tracing |
| Off-axis sources | Not considered | Evaluated ray by ray |
| Typical application range | Teaching laboratory, domestic mirrors | Telescopes, concentrator systems, industrial optical design |
`;export{e as default};
