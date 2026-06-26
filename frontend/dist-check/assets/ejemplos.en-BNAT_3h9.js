const e=`# Exam-type example

## Problem statement

An earthquake occurs 80 km below a seismological station. The crust in that region has a bulk modulus of 75 GPa, shear modulus of 32 GPa, and density of 2800 kg/m3. Determine the P and S wave velocities, the velocity ratio, Poisson's ratio, and the P-S arrival time difference.

## Data

- Depth (distance to focus): 80 km, equivalent to 80000 m
- Bulk modulus: 75 GPa, equivalent to 75×10⁹ Pa
- Shear modulus: 32 GPa, equivalent to 32×10⁹ Pa
- Medium density: 2800 kg/m3

## System definition

The system is an isotropic homogeneous solid medium (simplified continental crust) between the hypocenter and the surface station. Propagation is assumed in a straight line (no refraction from layering).

## Physical model

The **isotropic infinite elastic medium** model is applied with body wave propagation (P and S). The central magnitudes are [[v_p]], [[v_s]], [[K_bulk]], [[G_shear]], [[rho_medio]], [[ratio_vp_vs]], [[nu_poisson]], [[delta_t_ps]], and [[d_foco]].

## Model justification

The model is valid because seismic wavelengths at typical frequencies (0.1–10 Hz) are on the order of kilometres, much larger than mineral heterogeneities. The 80 km distance allows assuming a straight path without significant refraction in an approximately uniform crust. If the distance were larger or the medium stratified, corrected travel-time curves would be needed.

## Symbolic solution

For P-wave velocity:

{{f:velocidad_onda_p}}

For S-wave velocity:

{{f:velocidad_onda_s}}

The velocity ratio:

{{f:relacion_vp_vs_poisson}}

For the time difference:

{{f:diferencia_tiempos_sismo}}

## Numerical substitution

Computing [[v_p]]: square root of (75×10⁹ plus 4/3 times 32×10⁹) divided by 2800. The numerator gives 75×10⁹ plus 42.67×10⁹, which is 117.67×10⁹. Dividing by 2800 gives 42.02×10⁶. The square root gives approximately 6483 m/s. Therefore [[v_p]] ≈ 6483 m/s.

Computing [[v_s]]: square root of 32×10⁹ divided by 2800, which is 11.43×10⁶. The square root gives approximately 3381 m/s. Therefore [[v_s]] ≈ 3381 m/s.

The [[ratio_vp_vs]] is 6483 divided by 3381, giving approximately 1.917.

For [[nu_poisson]]: using the inverse formula, (1.917² minus 2) divided by (2 times 1.917² minus 2), which is (3.675 minus 2) divided by (7.35 minus 2), that is 1.675 divided by 5.35. Therefore [[nu_poisson]] ≈ 0.313.

For [[delta_t_ps]]: 80000 times (1/3381 minus 1/6483), which is 80000 times (0.000296 minus 0.000154), that is 80000 times 0.000142. Therefore [[delta_t_ps]] ≈ 11.3 s.

## Dimensional validation

- [[v_p]] and [[v_s]]: \`[M L⁻¹ T⁻²]\` divided by \`[M L⁻³]\` gives \`[L² T⁻²]\`; the square root yields \`[L T⁻¹]\` ✓
- [[ratio_vp_vs]]: velocity over velocity, dimensionless \`[1]\` ✓
- [[nu_poisson]]: dimensionless \`[1]\` ✓
- [[delta_t_ps]]: \`[L]\` times \`[T L⁻¹]\` gives \`[T]\` ✓

## Physical interpretation

The values obtained are consistent with intermediate continental crust. The [[v_p]] of 6483 m/s is in the typical range (5500–6500 m/s), confirming that the moduli and density are representative. The [[v_s]] of 3381 m/s also fits the expected range (3000–3700 m/s).

The [[ratio_vp_vs]] of 1.92 is slightly above the ideal Poisson value (1.73), indicating a [[nu_poisson]] of 0.31, compatible with intermediate composition rocks (granitic-basaltic) with some fluid saturation in fractures or pores.

The 11.3 second time difference is what a seismograph would record: first the P-wave train (dominant vertical compression) and 11.3 seconds later the S-wave train (horizontal motion). This interval immediately allows estimating the focus distance: if the medium velocities are known, multiplying [[delta_t_ps]] by the inverse factor gives [[d_foco]].

If density were higher (upper mantle, 3300 kg/m3 instead of 2800), both velocities would decrease but [[ratio_vp_vs]] would remain similar because it depends on the modulus ratio, not directly on density.

# Real-world example

## Context

A regional seismic network records an earthquake. Station A measures a P-S difference of 8.5 seconds, station B measures 12.2 seconds, and station C measures 15.7 seconds. Average upper crust velocities are assumed: [[v_p]] of 6000 m/s and [[v_s]] of 3460 m/s.

## Physical estimation

With known velocities, the factor (1/[[v_s]] minus 1/[[v_p]]) equals (1/3460 minus 1/6000), approximately 1.223×10⁻⁴ s/m.

For station A: [[d_foco]] is 8.5 divided by 1.223×10⁻⁴, giving approximately 69.5 km.
For station B: [[d_foco]] is 12.2 divided by 1.223×10⁻⁴, giving approximately 99.8 km.
For station C: [[d_foco]] is 15.7 divided by 1.223×10⁻⁴, giving approximately 128.4 km.

With three distances and known station positions, a circle of corresponding radius is drawn around each station. The intersection point of the three circles locates the epicenter. Depth is obtained as the vertical component of the hypocentral distance.

## Interpretation

This triangulation method was invented in the early 20th century and remains the basis of automatic early warning systems. Accuracy depends on the quality of the velocity model: in zones with heterogeneous crust, 3D models that refract paths and correct times are used. For rapid alerts, a single station and one [[delta_t_ps]] suffice to estimate approximate distance and activate safety protocols.
`;export{e as default};
