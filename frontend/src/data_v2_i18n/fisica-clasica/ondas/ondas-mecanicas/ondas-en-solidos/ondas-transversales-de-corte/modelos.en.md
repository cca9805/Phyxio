## Ideal model

The ideal model represents an elastic, isotropic, homogeneous and continuous solid under small deformation. The wave is locally plane, its polarization is perpendicular to propagation, and the material response is linear. In this setting, [[v_s]] depends on [[modulo_de_cizalla]] and [[rho_medio]], while [[lambda_s]], [[impedancia_transversal]] and [[u_s]] are interpreted as derived quantities.

## Hypotheses

- The medium has positive shear rigidity.
- The amplitude [[amplitud_transversal]] is small compared with the relevant geometric scale.
- The wavelength [[lambda_s]] is large compared with grains, pores, fibres and defects.
- The density [[rho_medio]] and modulus [[modulo_de_cizalla]] do not vary appreciably during propagation.
- Viscous dissipation and mode conversion do not dominate the measurement.

## Quantitative validity domain

As an order-of-magnitude rule, [[lambda_s]] should exceed the microstructural scale by at least a factor of 10. The transverse strain should remain small, so [[amplitud_transversal]] must be much smaller than [[lambda_s]]. For a megahertz ultrasonic test in metal, this usually means micrometre or smaller amplitudes. In soils, the linear model is most reliable at small strain; under strong motion the effective [[modulo_de_cizalla]] decreases.

## Model failure signals

The model fails if measured velocity depends strongly on [[f_onda]], if unexplained attenuation appears, if two transverse polarizations travel at different speeds, or if computed [[v_s]] is not lower than [[v_p]]. It also fails when the material behaves as a fluid over the experiment time scale.

## Extended or alternative model

When to switch to the extended model: anisotropy, layering, viscoelasticity, plasticity, cracking or microstructure comparable with [[lambda_s]]. The extended model may use frequency-dependent moduli, anisotropic elastic tensors, poroelastic media or multilayer propagation with conversion between P, SV and SH waves.

## Operational comparison

The ideal model is appropriate for quick calculations, first interpretation and dimensional checks. The extended model is appropriate for detailed diagnosis, seismic inversion, complex materials and realistic geometry. The practical decision compares wavelength scale, linearity and medium homogeneity. Stable arrival times and small amplitudes support the ideal model; frequency-dependent arrivals or split polarizations point to the extended model.

Operationally, the model choice should be made before fitting numerical values. If the observed pulse keeps its shape, if repeated measurements give the same [[v_s]], and if [[lambda_s]] is well above the material texture, the ideal description is usually sufficient. If the pulse broadens, rotates polarization or changes speed with frequency, the extra complexity is not optional; it is part of the physics being measured.

This prevents overfitting a simple formula to data that are already showing a different mechanism.