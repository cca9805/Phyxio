const e=`# Exam-type example

## Problem statement

A granitic ground has an S-wave velocity of 2800 m/s and a Poisson ratio of 0.27. Estimate the Rayleigh wave velocity, the depth to which a 2 Hz seismic survey will have sensitivity, the dimensionless ratio [[eta_R]], and the amplitude [[A_z]] at 500 m depth if the surface amplitude [[A_0]] is 0.01 m.

## Data

- S-wave velocity: 2800 m/s
- Poisson ratio: 0.27
- Survey frequency: 2 Hz
- Surface amplitude: 0.01 m

## System definition

Semi-infinite, isotropic, homogeneous medium. The free surface is flat and horizontal.

## Physical model

The homogeneous elastic half-space model with a flat free surface is applied. The Viktorov formula yields [[v_R]] from [[v_s]] and [[nu_poisson]]. The penetration depth is estimated as one wavelength. Amplitude decay follows an exponential with coefficient [[alpha_R]]. The secular equation verifies the coherence of the ratio [[eta_R]].

## Model justification

The model is valid because granite at the seismic scale (wavelengths of hundreds of metres) behaves as a homogeneous, isotropic medium. The 2 Hz frequency produces a wavelength much larger than mineral heterogeneities (centimetre scale), validating the continuity hypothesis.

## Symbolic solution

{{f:velocidad_rayleigh_aproximada}}

{{f:profundidad_penetracion}}

{{f:decaimiento_profundidad}}

{{f:ecuacion_secular_rayleigh}}

The wavelength is obtained as [[lambda_R]] equal to [[v_R]] divided by frequency. The ratio [[eta_R]] is [[v_R]] over [[v_s]]. The parameter [[xi_vs_vp]] is derived from [[nu_poisson]].

## Numerical substitution

Applying the Viktorov formula with [[v_s]] of 2800 m/s and [[nu_poisson]] of 0.27:

Numerator: 0.862 plus 1.14 times 0.27 gives 1.1698. Denominator: 1 plus 0.27 gives 1.27. Factor: 1.1698 divided by 1.27 gives 0.9211.

[[v_R]] results in 2800 times 0.9211, that is 2579 m/s.

Wavelength: [[lambda_R]] equals 2579 divided by 2, that is 1290 m.

Penetration depth: [[d_pen]] is approximately 1290 m (1.29 km).

The ratio [[eta_R]] is 2579 divided by 2800, that is 0.921. This value is between 0.87 and 0.96, confirming coherence with the secular equation. The parameter [[xi_vs_vp]] for [[nu_poisson]] of 0.27 equals 0.561.

The decay coefficient [[alpha_R]] is estimated as 2 pi divided by [[lambda_R]]: 6.283 divided by 1290, that is 0.00487 per metre.

At [[z_prof]] of 500 m: [[A_z]] is [[A_0]] times the exponential of minus [[alpha_R]] times [[z_prof]], that is 0.01 times exponential of minus 2.435, giving 0.01 times 0.0876, resulting in [[A_z]] of 0.000876 m.

## Dimensional validation

Velocity has units of m/s (correct). Wavelength has units of m (correct). Depth has units of m (correct). [[eta_R]] and [[xi_vs_vp]] are dimensionless (correct). [[alpha_R]] has units of 1/m (correct). Furthermore, [[v_R]] is less than [[v_s]] (2579 < 2800) and [[A_z]] is less than [[A_0]] (0.000876 < 0.01), which is physically required.

## Physical interpretation

The Rayleigh wave in granite travels at 2579 m/s, 92 percent of the S velocity. This is consistent with the typical value for nu close to 0.25. The penetration depth of 1.29 km indicates that a 2 Hz survey probes the upper crust, covering possible lithological variations at that scale. At 500 m depth (39 percent of [[lambda_R]]), amplitude has reduced to 8.8 percent of the surface value, confirming the strong confinement of the Rayleigh wave. If greater surface resolution is needed (for example, the first 30 metres for VS30 geotechnical classification), much higher frequencies (around 50-100 Hz) would be required.

# Real-world example

## Context

A geotechnical team performs a MASW (Multichannel Analysis of Surface Waves) survey on an urban plot before constructing a 10-storey building. They need to determine the [[v_s]] velocity profile in the upper 30 metres to classify the soil according to Eurocode 8. 24 geophones are placed in a line with 2 m spacing and an impulsive source (8 kg sledgehammer) is used. Dispersion analysis reveals that the Rayleigh phase velocity at 25 Hz is 180 m/s and at 8 Hz is 310 m/s.

## Physical estimation

At 25 Hz: [[lambda_R]] is 180 divided by 25, that is 7.2 m. Probed depth ([[d_pen]]): approximately 7 m (soft surface layer).

At 8 Hz: [[lambda_R]] is 310 divided by 8, that is 38.75 m. Probed depth ([[d_pen]]): approximately 39 m (includes deeper, stiffer layers).

Using the inverse Viktorov approximation with [[nu_poisson]] of 0.30, the conversion factor [[v_R]]/[[v_s]] (i.e. [[eta_R]]) equals 0.927. Therefore:

Surface layer (to 7 m): [[v_s]] is 180 divided by 0.927, that is 194 m/s.
Average to 39 m: [[v_s]] is 310 divided by 0.927, that is 334 m/s.

The VS30 parameter (weighted average over the first 30 m) will be between 194 and 334 m/s, probably around 280 m/s. This classifies the soil as type C (dense soil or soft rock) according to Eurocode 8.

## Interpretation

The result is consistent with a typical urban profile: a surface layer of fill or soft clay (low [[v_s]]) over a stiffer substrate (dense gravel or weathered rock). The measured dispersion confirms the stratification. The estimated VS30 of 280 m/s places the soil in category C, implying a moderate seismic amplification factor. If the value had been below 180 m/s (category D), more costly foundation measures would have been required. The MASW technique provides this information without drilling, reducing costs and time compared to invasive tests such as cross-hole.
`;export{e as default};
