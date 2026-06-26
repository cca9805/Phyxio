# Diffraction model

## Ideal model

The ideal diffraction model describes the intensity pattern produced by a rectangular aperture illuminated by plane monochromatic waves in the far-field regime (Fraunhofer). This model considers that the incident wave is perfectly flat, the aperture has sharp edges, and the observation screen is at infinite distance (or practically infinite).

In this simplified model, intensity minima appear at angles defined by the destructive-interference condition between aperture, angle, order and [[lambda]]. The pattern is symmetric about the incidence axis, with a bright central maximum and minima equally spaced in sine of angle.

The central simplification consists of ignoring the finite character of the source-aperture distance, considering perfectly monochromatic illumination, and assuming geometrically perfect aperture edges without additional edge effects.

## Hypotheses

- **Flat monochromatic illumination**: The incident wave has perfectly flat fronts and unique wavelength [[lambda]] constant in time and space.

- **Ideal rectangular aperture**: The aperture has perfectly straight edges and uniform transmission (binary: 100% inside, 0% outside).

- **Far field (Fraunhofer)**: The distance to the screen [[L_distancia]] is much greater than the aperture width [[a_abertura]], allowing secondary waves to be approximated as flat at the screen.

- **Paraxial observation**: Diffraction angles [[theta_dif]] are small, allowing approximations sine approximately theta and tangent approximately theta.

- **Homogeneous isotropic medium**: The space between aperture and screen has uniform and non-dispersive refractive index.

**Consequence of violating each hypothesis**:

- If the illumination is not flat (spherical wave from nearby point source), the curved wavefront modifies relative phases and the pattern differs from the ideal.

- If the aperture has diffuse edges or gradual transmission, the minima are less pronounced and the pattern smoothes.

- If operating in the near field (Fresnel), secondary waves arrive with appreciable curvature and fringes differ in position and shape.

- If angles are large, linear approximations fail and linear positions are no longer proportional to order.

- If the medium is dispersive (index depends on [[lambda]]), different wavelengths diffract at different angles even at equal order.

## Quantitative validity domain

The model is valid when the following are simultaneously satisfied:

- The distance to the screen is at least 10 times greater than the aperture width: L > 10a, guaranteeing Fraunhofer regime.

- Diffraction angles are less than 0.14 rad (8 degrees), where the sine(theta) approximately theta approximation has error less than 1%.

- The wavelength is within the visible range or nearby (400 nm to 1000 nm typically), where paraxial optics is applicable.

- The aperture width is between 10 and 1000 times the wavelength [[lambda]], ensuring observable diffraction without excessive dispersion.

The relative error of the model with respect to real behavior is less than 5% when operating within these limits.

## Model failure signals

- **Central maximum displacement**: If the intensity maximum is not centered at the expected geometric position, there is beam tilt or aperture asymmetry.

- **Incomplete minima**: If intensity minima do not reach values close to zero, there is incoherent background light or the illumination is not purely monochromatic.

- **Asymmetric fringes**: If fringes on one side of the center are wider or more intense than on the other side, the aperture has irregular edges or the illumination strikes obliquely.

- **Disappearance of high orders**: If orders higher than third or fourth are not visible when they should be, the aperture transmission function is not binary (diffuse edges).

- **Beam size dependence**: If the pattern changes when varying the incident beam size (without changing the aperture), the illumination is not uniform over the entire aperture.

## Extended or alternative model

The **Fresnel extended model (near field)** describes diffraction when the distance to the screen is comparable to the aperture size. In this model, secondary waves are summed considering their exact phases and amplitudes without parallel ray approximation. Fresnel integrals describe the transition pattern between near and far field.

The **gradual transmission aperture model** considers that the transmission function varies smoothly at the edges rather than being a binary step. This model softens the minima and reduces fringe contrast, approaching real apertures with edges blurred by manufacturing processes.

When to switch to the Fresnel model: when the screen distance is less than 10 times the aperture width, or when the exact pattern needs to be calculated in the transition region between near and far field.

When to change to the gradual transmission model: when the aperture edges have roughness or diffusion comparable to the wavelength, or when the aperture material has finite thickness that produces partial transmission at the edges.

## Operational comparison

| Characteristic | Ideal model (Fraunhofer) | Fresnel model | Gradual transmission model |
|---|---|---|---|
| **Distance** | L much greater than a | L comparable to a | Any distance |
| **Wave shape** | Flat at the screen | Curved (spherical) | Depends on distance |
| **Aperture edges** | Perfect and sharp | Perfect and sharp | Diffuse or gradual |
| **Mathematics** | Simple trigonometric functions | Fresnel integrals | Fourier transforms |
| **Complexity** | Simple, closed solutions | Moderate, requires numerical integration | Variable depending on transmission profile |
| **Typical application** | Spectrometers, optical laboratory | Microscopy, near focusing | Real optical filters, diffusers |
| **Precision** | High in far field | Exact at all distances | Depends on measured profile |

**Advantages and limits**:

The Fraunhofer model provides fast calculations and analytically treatable solutions, but systematically fails in the near field and does not capture real edge effects. The Fresnel model is exact but requires more advanced mathematical tools. The gradual transmission model describes real apertures with greater fidelity but needs experimental characterization of the transmission function. The transition between models depends on the geometric relationship between wavelength, aperture size, and observation distance.
