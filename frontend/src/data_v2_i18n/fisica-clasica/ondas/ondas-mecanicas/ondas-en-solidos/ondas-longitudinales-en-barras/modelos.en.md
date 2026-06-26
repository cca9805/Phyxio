## Ideal model

The classical longitudinal wave model in a slender bar assumes that the cross-section remains plane and perpendicular to the axis during deformation. Displacement is purely axial and uniform across the entire section. The bar is treated as a one-dimensional medium where the only spatial variable is the axial coordinate x.

## Hypotheses

- Homogeneous, isotropic, linearly elastic material (Hooke's law).
- Constant cross-section along the bar.
- Small deformations relative to bar length.
- Cross-section remains plane (Bernoulli hypothesis for compression).
- Lateral inertia effects from Poisson contraction are neglected.
- No internal damping or distributed external forces.
- Wavelength is much larger than transverse dimensions.

## Quantitative validity domain

The model is valid when [[lambda_long]] > 6·d (maximum transverse dimension). In frequency terms: f < [[v_barra]]/(6·d).

For a steel bar of 20 mm diameter ([[v_barra]] of 5100 m/s), the maximum frequency is f < 42 500 Hz. Above this frequency the model loses accuracy and one should switch to the Rayleigh-Love model.

For thicker bars (50 mm), the limit drops to f < 17 000 Hz. For thin wires (1 mm), the model is valid up to several MHz.

When f > [[v_barra]]/(3·d), even the Rayleigh-Love model is insufficient and Pochhammer-Chree must be used.

## Model failure signals

- Experimentally measured velocity decreases with frequency (observed dispersion not predicted by the model).
- Vibration modes with significant non-axial displacements are detected.
- Pulse arrival time at high frequencies does not match 2L/[[v_barra]].
- Pulse amplitude decays faster than expected from material damping (possible conversion to lateral modes).

## Extended or alternative model

### Rayleigh-Love model

Includes lateral inertia due to Poisson contraction. Speed is reduced and becomes frequency-dependent:

The corrected speed is [[v_barra]] divided by the square root of (1 + nu² · k² · r_gyration²), where nu is the Poisson ratio and r_gyration the section's radius of gyration. At low frequencies the correction is negligible; at high frequencies it introduces dispersion.

### Mindlin-Herrmann model

Adds lateral deformation modes as additional degrees of freedom. Can capture more dispersion branches but requires solving a coupled system of equations.

### Cylindrical waveguide model (Pochhammer-Chree)

Exact three-dimensional solution for bars with circular section. Predicts multiple modes (longitudinal, flexural, torsional) with complex dispersion curves. It is the reference model for comparing the limits of one-dimensional approximations.

## Operational comparison

| Model | Dispersion | Variables | Typical range | Complexity |
|-------|-----------|-----------|--------------|------------|
| Slender bar | No | u(x,t) | f less than v/(6d) | Low |
| Rayleigh-Love | Yes (weak) | u(x,t) | f up to v/(3d) | Medium |
| Pochhammer-Chree | Yes (exact) | u(r,x,t) | Full range | High |

The choice of model depends on the required precision and the frequency range of interest. For most engineering applications at audible frequencies, the slender bar model is sufficient.