const e=`# Models for Transverse Shear Waves\r
\r
## Ideal model\r
\r
The ideal model represents an elastic, isotropic, homogeneous and continuous solid under small deformation. The wave is locally plane, its polarization is perpendicular to propagation, and the material response is linear. In this setting, [[v_s]] depends on [[G_shear]] and [[rho_medio]], while [[lambda_s]], [[Z_s]] and [[u_s]] are interpreted as derived quantities.\r
\r
## Hypotheses\r
\r
- The medium has positive shear rigidity.\r
- The amplitude [[A_s]] is small compared with the relevant geometric scale.\r
- The wavelength [[lambda_s]] is large compared with grains, pores, fibres and defects.\r
- The density [[rho_medio]] and modulus [[G_shear]] do not vary appreciably during propagation.\r
- Viscous dissipation and mode conversion do not dominate the measurement.\r
\r
## Quantitative validity domain\r
\r
As an order-of-magnitude rule, [[lambda_s]] should exceed the microstructural scale by at least a factor of 10. The transverse strain should remain small, so [[A_s]] must be much smaller than [[lambda_s]]. For a megahertz ultrasonic test in metal, this usually means micrometre or smaller amplitudes. In soils, the linear model is most reliable at small strain; under strong motion the effective [[G_shear]] decreases.\r
\r
## Model failure signals\r
\r
The model fails if measured velocity depends strongly on [[f_onda]], if unexplained attenuation appears, if two transverse polarizations travel at different speeds, or if computed [[v_s]] is not lower than [[v_p]]. It also fails when the material behaves as a fluid over the experiment time scale.\r
\r
## Extended or alternative model\r
\r
When to switch to the extended model: anisotropy, layering, viscoelasticity, plasticity, cracking or microstructure comparable with [[lambda_s]]. The extended model may use frequency-dependent moduli, anisotropic elastic tensors, poroelastic media or multilayer propagation with conversion between P, SV and SH waves.\r
\r
## Operational comparison\r
\r
The ideal model is appropriate for quick calculations, first interpretation and dimensional checks. The extended model is appropriate for detailed diagnosis, seismic inversion, complex materials and realistic geometry. The practical decision compares wavelength scale, linearity and medium homogeneity. Stable arrival times and small amplitudes support the ideal model; frequency-dependent arrivals or split polarizations point to the extended model.

Operationally, the model choice should be made before fitting numerical values. If the observed pulse keeps its shape, if repeated measurements give the same [[v_s]], and if [[lambda_s]] is well above the material texture, the ideal description is usually sufficient. If the pulse broadens, rotates polarization or changes speed with frequency, the extra complexity is not optional; it is part of the physics being measured.

This prevents overfitting a simple formula to data that are already showing a different mechanism.
`;export{e as default};
