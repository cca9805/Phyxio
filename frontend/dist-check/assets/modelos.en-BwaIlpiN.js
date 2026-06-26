const e=`\uFEFF# Hydrostatic Pressure Models\r
\r
## Ideal model\r
The ideal physical model of hydrostatic pressure describes the analytical calculation of the internal pressure of a fluid at rest based on a linear profile where pressure increases proportionally with depth. This model considers the fluid to be a continuous and isotropic medium, without macroscopic movements or significant viscosity effects. As a consequence, the pressure difference between two points depends exclusively on the height difference and the fluid's density. This model is the standard used in traditional hydrostatics and in most conventional engineering applications.\r
\r
## Hypotheses\r
To achieve the full validity of the simple linear model, a compendium of restrictive physical hypotheses is assumed:\r
1.  **Continuously and strictly incompressible fluid:** Volumetric density remains effectively constant with depth within the model's working range.\r
2.  **Macroscopic rest and inertial static:** Macroscopic fluid velocities are null and no relevant flow accelerations are present. Only static gravitational action is considered.\r
3.  **Completely uniform and parametric gravitational acceleration:** The local gravitational field acceleration imposed ([[g]]) does not decay or undergo alterations relative to scaling depth within the strictly delimited experimental model. The subtle spherical gravimetric radial deviation inherent in any analyzed spherical planet or celestial body is neglected in this approximation.\r
4.  **Lack of significant thermal gradients:** The fluid is considered isothermal, avoiding density fluctuations due to thermal expansion not contemplated in the linear model.\r
\r
## Quantitative validity domain\r
This incompressible model maintains supreme operational empirical reliability for the following ranges:\r
-   **Section height or depth (h):** It is considered valid for 0 < h < 6000 m. Below six kilometers, the predictive deviation for water stays below 3%, which is acceptable in most civil and naval engineering technical applications.\r
-   **Density variation (delta [[rho]]):** The constant density hypothesis is acceptable if the relative variation is less than 1% (delta [[rho]] / [[rho]] < 0.01). In the ocean, this is fulfilled to depths of several kilometers.\r
-   **Pressure magnitudes (p):** The model is accurate for pressures less than 10^8 Pa (100 MPa). At higher pressures, water's compressibility is no longer negligible and the error exceeds the engineering safety threshold.\r
\r
## Model failure signals\r
When assumptions are corrupted, signals of inapplicability are explicit and evident in formal technical experimental contrasts:\r
-   **Presence of flow:** If non-zero velocities are detected (v no es igual a 0), the pressure gradient will cease to be purely static and dynamic Bernoulli terms and viscous friction losses will appear.\r
-   **Evident compressibility:** If as depth increases measured pressure grows faster than the linear hydrostatic model predicts, the fluid is compacting and density is no longer constant.\r
-   **Thermal gradients:** If there are intense heat sources (such as underwater volcanic vents), density will vary locally by convection, breaking the hydrostatic stratification.\r
\r
## Extended or alternative model\r
The cognitive step forward lies inexorably in giving way to global theoretical integration by fully adopting the **Isothermal Pressure Bari-dependent Model or Differential Integral Barometric Equation**. For any naturally extremely deformable elastic compressible fluid environment (such as the atmosphere), it intervenes with immense precision by formally coupling classical ideal general gaseous thermodynamics as a substitute for the fixed constant linear density parameter.\r
\r
Transition to the barometric model: it is convenient to switch models when the system's characteristic height is comparable to the atmosphere's scale height (about 8 km) or when working with compressible gases.\r
\r
{{f:presion_hidro}}\r
\r
In compressible media, pressure variation with height requires a differential model coupled with thermodynamics.\r
\r
\r
Its integral development for an ideal gas produces an exponential-type pressure decay with height.\r
\r
\r
## Operational comparison\r
The classic elemental model (linear) is optimal for studying containers, pools, tanks, and pipe systems where incompressibility allows a simple and precise calculation. Conversely, the exponential barometric model is essential in meteorology, astrophysics, and large-scale atmospheric studies where density varies drastically with altitude.\r
\r
`;export{e as default};
