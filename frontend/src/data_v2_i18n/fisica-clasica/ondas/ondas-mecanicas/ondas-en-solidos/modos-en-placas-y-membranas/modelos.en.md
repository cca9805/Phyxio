## Ideal model

The reference model in this leaf is the **Kirchhoff-Love thin plate** for elastic plates and the **Helmholtz ideal membrane** for tensioned membranes. Both are linear small-deformation models describing the free vibration of two-dimensional structures with fixed edges.

In the Kirchhoff plate, the fundamental hypothesis is that cross-sections remain plane and perpendicular to the mid-surface during deformation. This condition eliminates transverse shear deformation and simplifies the governing differential equation to the bilaplacian of the displacement. The restoring force is the bending stiffness [[rigidez_a_la_flexion_de_la_placa]], proportional to the cube of thickness [[h_placa]].

In the ideal membrane, bending stiffness is exactly zero. The only restoring force is surface tension [[tension_superficial_de_la_membrana]], and the system is the two-dimensional analogue of the vibrating string. The model ignores any bending stiffness of the real membrane, which always has some finite thickness.

## Hypotheses

- **Thin plate:** thickness [[h_placa]] must be much smaller than the in-plane dimensions [[a_dim]] and [[b_dim]] (practical condition: [[h_placa]] less than one-tenth of the smaller dimension). Violating this hypothesis introduces growing errors in [[f_mn]] because transverse shear deformation, ignored in Kirchhoff, lowers the actual frequencies.

- **Small deformations:** the vibration amplitude must be small compared to thickness [[h_placa]]. For larger amplitudes, the membrane or plate develops geometric nonlinearities that change the frequency with amplitude.

- **Isotropic and homogeneous material:** [[modulo_de_young]], [[nu_p]] and [[rho_vol]] are uniform throughout the plate. Layered or property-gradient materials require effective parameters.

- **Simply supported edges:** the boundary conditions assume zero displacement and zero bending moment at all edges. Clamped or free edges modify the numerical coefficients but not the functional structure of the modal formula.

- **Uniform membrane tension:** [[tension_superficial_de_la_membrana]] is the same in all directions and at all points of the membrane. A non-uniform tension distribution alters the nodal patterns and frequencies.

## Quantitative validity domain

The Kirchhoff plate model is reliable when [[h_placa]] is less than 1/10 of the smaller in-plane dimension. For a 0.3 m × 0.2 m plate, this implies [[h_placa]] < 20 mm. For modal frequencies in the audible range (up to 20 kHz), the hypothesis holds well for typical metallic plates of 1–5 mm thickness.

The Mindlin correction becomes necessary when the frequency × thickness product exceeds approximately 50 kHz·mm for steel. Above this threshold, the Kirchhoff model error in [[f_mn]] exceeds 5 %.

For the ideal membrane, the model fails when the bending-to-tension stiffness ratio exceeds 1 %: specifically when [[rigidez_a_la_flexion_de_la_placa]]/(T × a²) > 0.01. For an 80 µm mylar drum head under 1500 N/m tension, this ratio is below 0.001, fully validating the pure membrane model.

## Model failure signals

- **Measured frequencies lower than Kirchhoff predictions** for high-index modes: signal that transverse shear deformation is significant and the Mindlin model is required.

- **Fundamental mode frequency rising with increasing excitation amplitude:** indicates geometric nonlinearity (large-deformation regime in the membrane, or additional membranous tension in the plate). The linear model overestimates damping in that regime.

- **Non-rectangular nodal patterns in a rectangular plate:** may indicate material anisotropy (residual fabrication stresses, lamination, etc.) that the isotropic model does not capture.

- **Experimentally lifted degeneracy compared to theoretical prediction in a square plate:** signal of orthotropy or geometric edge imperfections that break the square symmetry.

## Extended or alternative model

**Mindlin-Reissner theory** extends the Kirchhoff model by incorporating transverse shear deformation and rotational inertia. It is the correct model for moderately thick plates and for high-frequency bending wave analysis. Mindlin frequencies are always equal to or lower than Kirchhoff frequencies for the same mode.

For membranes with non-negligible bending stiffness (such as thick polymer or elastomer membranes), the extended **plate-membrane model** combines pretension with bending stiffness. Modal frequencies are then bounded below and above by the pure membrane and pure plate models respectively.

When to switch to the Mindlin model: when thickness [[h_placa]] exceeds 10 % of the smaller dimension, or when frequencies of interest exceed the 50 kHz·mm threshold for steel. When to switch to the plate-membrane model: when [[rigidez_a_la_flexion_de_la_placa]]/(T × a²) is between 0.01 and 1, that is, when neither stiffness nor tension clearly dominates.

## Operational comparison

| Criterion | Plate model (Kirchhoff) | Membrane model (Helmholtz) |
|---|---|---|
| Restoring force | Bending stiffness [[rigidez_a_la_flexion_de_la_placa]] | Surface tension [[tension_superficial_de_la_membrana]] |
| Dispersion | Yes (speed depends on frequency) | No (constant speed) |
| Tuning parameter | [[h_placa]], [[modulo_de_young]] (fixed in manufacturing) | [[tension_superficial_de_la_membrana]] (adjustable) |
| Validity condition | [[h_placa]] much smaller than in-plane dimensions | Bending stiffness negligible |
| Governing equation | Bilaplacian of displacement | Laplacian of displacement |
| Modal degeneracy in square | Yes | Yes |
| Extension to circular geometry | Kirchhoff circular plate | Circular membrane with Bessel functions |