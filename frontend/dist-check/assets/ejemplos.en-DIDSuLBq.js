const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A steel block has a shear modulus of 80 GPa and density of 7850 kg/m3. A transducer generates transverse waves at 5 MHz. Determine the S wave velocity, the transverse wavelength, the transverse acoustic impedance and the Poisson ratio knowing that the measured P velocity is 5900 m/s.\r
\r
## Data\r
\r
- Shear modulus: 80 GPa, equivalent to 80 times 10 to the power of 9 Pa\r
- Density: 7850 kg/m3\r
- Frequency: 5 MHz, equivalent to 5 times 10 to the power of 6 Hz\r
- Measured P velocity: 5900 m/s\r
\r
## System definition\r
\r
Homogeneous, isotropic steel block with an ultrasonic transducer coupled to a flat face. Propagation is assumed rectilinear without edge effects or attenuation.\r
\r
## Physical model\r
\r
The infinite isotropic elastic medium model is applied. The transverse velocity depends on the shear modulus and density. The P-to-S velocity relationship yields the Poisson ratio. The central magnitudes are [[v_s]], [[G_shear]], [[rho_medio]], [[lambda_s]], [[f_onda]], [[Z_s]], [[v_p]] and [[nu_poisson]].\r
\r
## Model justification\r
\r
The model is valid because the expected wavelength (on the order of 0.6 mm) is much larger than the grain size of steel (tens of micrometres), allowing the medium to be treated as continuous and homogeneous. The block dimensions are much larger than the wavelength, validating the infinite medium hypothesis.\r
\r
## Symbolic solution\r
\r
{{f:velocidad_onda_s}}\r
\r
{{f:longitud_onda_transversal}}\r
\r
{{f:impedancia_transversal}}\r
\r
{{f:relacion_vp_vs_poisson}}\r
\r
{{f:energia_onda_transversal}}\r
\r
The Poisson ratio is isolated from the velocity relation: [[nu_poisson]] equals (R squared minus 2) divided by (2 times R squared minus 2), where R is [[v_p]] divided by [[v_s]].\r
\r
## Numerical substitution\r
\r
Calculating [[v_s]]: the square root of (80 times 10 to the power of 9) divided by 7850. The quotient gives 10.19 times 10 to the power of 6. The square root is 3193 m/s. Therefore [[v_s]] is approximately 3193 m/s.\r
\r
Wavelength: [[lambda_s]] is 3193 divided by 5 times 10 to the power of 6, that is 6.39 times 10 to the minus 4 m, equivalent to 0.639 mm.\r
\r
Transverse impedance: [[Z_s]] is 7850 times 3193, that is 25.06 times 10 to the power of 6 kg per square metre per second.\r
\r
Velocity ratio R: 5900 divided by 3193 gives 1.848. R squared is 3.415. Then [[nu_poisson]] is (3.415 minus 2) divided by (2 times 3.415 minus 2), that is 1.415 divided by 4.830, giving 0.293. Therefore [[nu_poisson]] is approximately 0.29.\r
\r
For a reference amplitude [[A_s]] of 1 micrometre, the energy formula estimates [[u_s]] associated with the transverse pulse without changing the calculated speed.\r
\r
## Dimensional validation\r
\r
- [[v_s]]: Pa divided by kg/m3 gives m2/s2; the root gives m/s (correct)\r
- [[lambda_s]]: m/s divided by 1/s gives m (correct)\r
- [[Z_s]]: kg/m3 times m/s gives kg/(m2 s) (correct)\r
- [[nu_poisson]]: squared velocity ratio over squared velocity ratio, dimensionless (correct)\r
- [[v_s]] is less than [[v_p]] (3193 < 5900) as required\r
\r
## Physical interpretation\r
\r
The transverse velocity of 3193 m/s is typical of structural steel. The wavelength of 0.639 mm indicates that a 5 MHz ultrasonic test can detect internal defects larger than fractions of a millimetre. The Poisson ratio of 0.29 is consistent with the tabulated value for steel (0.27 to 0.30). The high transverse impedance explains why steel strongly reflects S waves when in contact with softer materials.\r
\r
# Real-world example\r
\r
## Context\r
\r
A geotechnical engineering team performs a cross-hole test at a building site to determine the soil [[v_s]] and classify it according to seismic code (VS30). Two boreholes separated by 5 metres are drilled; an S-wave source is placed in one and a triaxial geophone in the other. Direct transverse wave arrival times are recorded at different depths.\r
\r
## Physical estimation\r
\r
At 10 m depth, the first S-wave arrival is recorded at 16.7 milliseconds. The distance between boreholes is 5 m. The velocity [[v_s]] is distance divided by time: 5 divided by 0.0167, that is 299 m/s.\r
\r
At 25 m depth, the first arrival is at 10.2 milliseconds: [[v_s]] is 5 divided by 0.0102, that is 490 m/s.\r
\r
The VS30 parameter (weighted average velocity over the top 30 m) is calculated as 30 divided by the sum of each layer thickness divided by its respective velocity. With the two simplified layers: approximate VS30 is 30 divided by (10/299 plus 20/490), which is 30 divided by (0.0334 plus 0.0408), that is 30 divided by 0.0742, giving 404 m/s.\r
\r
This average [[v_s]] value places the soil in Eurocode 8 category B (soft rock or very dense soil, VS30 between 360 and 800 m/s).\r
\r
## Interpretation\r
\r
The increase of [[v_s]] with depth (from 299 to 490 m/s) is typical of granular soils where compaction grows with confining pressure. The B classification indicates a moderate seismic amplification factor, lower than a type C soil. This result justifies the use of conventional foundations without the need for special ground improvement. If [[v_s]] had been below 180 m/s (category D or E), more detailed site response studies and possible seismic risk mitigation measures would have been required.\r
`;export{e as default};
