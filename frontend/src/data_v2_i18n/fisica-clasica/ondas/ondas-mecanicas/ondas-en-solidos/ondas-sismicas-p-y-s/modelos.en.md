## Ideal model

The ideal model treats the Earth (or the region of interest) as an **isotropic, homogeneous, infinite elastic medium**. In this framework, P and S waves propagate in straight lines at constant velocities determined by [[modulo_de_compresibilidad]], [[modulo_de_cizalla]], and [[rho_medio]]. There is no refraction, reflection, dispersion, or attenuation.

This model allows deriving the fundamental formulas for [[v_p]] and [[v_s]] and the linear relationship between [[delta_t_ps]] and [[d_foco]].

## Hypotheses

- **Isotropy**: elastic properties do not depend on direction. Violation: in layered rocks or crystals, velocities vary with propagation angle and quasi-P and quasi-S modes appear.
- **Homogeneity**: properties do not vary in space. Violation: in stratified media, waves refract and travel-time curves bend.
- **Linear elasticity**: stress is proportional to strain. Violation: near the focus, large deformations introduce nonlinearities and ruptures.
- **No attenuation**: amplitude does not decrease from intrinsic absorption. Violation: at high frequencies or in partially molten media, the Q factor reduces amplitude.
- **Wavelength much larger than heterogeneities**: the medium appears continuous. Violation: if wavelength is comparable to grain size or fractures, scattering appears.

## Quantitative validity domain

- Typical seismic frequencies: 0.01–10 Hz, with wavelengths of 500 m to 800 km. The model is valid as long as wavelength is at least one order of magnitude larger than medium heterogeneities.
- Epicentral distances < 200 km for the constant velocity model.
- Estimated distance error less than 5 % when [[d_foco]] is less than 100 km with uniform crust.
- For depths greater than 200 km, the variation of density and moduli with pressure invalidates the homogeneity hypothesis.

## Model failure signals

- Distance estimated with three stations does not converge to a single point: indicates velocity is not uniform between stations.
- Measured [[ratio_vp_vs]] changes systematically with distance: indicates anisotropy or stratification.
- Observed [[delta_t_ps]] for a distant earthquake (> 1000 km) differs by more than 15 % from the prediction with constant velocities: real travel-time curves are nonlinear.
- Complete absence of S waves in records at more than 104 degrees angular distance: indicates passage through the liquid core (1D model already insufficient).

## Extended or alternative model

The **radial PREM model** (Preliminary Reference Earth Model) describes the variation of [[modulo_de_compresibilidad]], [[modulo_de_cizalla]], and [[rho_medio]] with depth in concentric layers. It allows computing curved travel-time curves and shadow zones.

For detailed studies, **3D tomographic models** are used that incorporate lateral velocity anomalies due to subducted plates, mantle plumes, and lithological variations.

When to switch to the PREM model: when epicentral distance exceeds 200 km or when working with deep earthquakes (> 70 km). For reservoir studies, the transition to an anisotropic model is necessary when the azimuthal velocity variation exceeds 5 %.

## Operational comparison

| Criterion | Homogeneous isotropic model | PREM / stratified model |
|---|---|---|
| Complexity | Low: one analytical formula | Medium-high: numerical integration |
| Accuracy at < 100 km | High (error < 5 %) | Equal or slightly better |
| Accuracy at > 500 km | Low (error > 15 %) | High (error < 3 %) |
| Shadow zones | Does not predict them | Explains them naturally |
| Data required | Constant K, G, rho | Complete radial profile |
| Typical use | Local earthquakes, teaching | Global seismology, alerts |