const e=`# Pitot Tube — Common Errors\r
\r
Using a Pitot tube, while simple in theory, presents significant practical challenges in pressure assignment and unit management.\r
\r
## Conceptual errors\r
\r
### Error: confusing static pressure with total pressure\r
- Description: in the context of the Pitot tube, it is often assumed that the pressure measured by the frontal orifice is static pressure, when in reality it is stagnation pressure.\r
- Why it occurs: it happens because one memorizes that the tube measures pressure but omits the fundamental physical mechanism: the frontal orifice stops the flow completely, converting all its kinetic energy into additional pressure.\r
- How to detect it: it is easily detected because, when trying to solve for velocity in the velocidad_pitot formula, an imaginary or negative value is obtained inside the square root.\r
- How to correct it: it is corrected by internalizing that the total pressure [[p_t]] is always the larger of the two, as it includes the base pressure plus the dynamic impact of the fluid.\r
\r
### Error: believing that the Pitot tube alters the free flow\r
- Description: assuming that the mere presence of the tube modifies the velocity to be measured so that the data is invalid.\r
- Why it occurs: local blockage at the tip is confused with the state of the flow upstream.\r
- How to detect it: systematic doubt about the validity of the small probe in large ducts.\r
- How to correct it: for this, the probe is designed in a slender way; if the blockage factor is less than 1%, the impact of the tube on the measurement is negligible under the ideal model.\r
\r
## Model errors\r
\r
### Error: using manometer liquid density as if it were the moving fluid density\r
- Description: in calculating velocity using the velocidad_pitot formula, the density of the water or mercury of the differential manometer is mistakenly used.\r
- Why it occurs: this error occurs because the manometric density value is correctly used to find the pressure drop delta_pitot and is carried over by inertia to the next step of the problem.\r
- How to detect it: when the calculated air velocity results in absurdly low values, such as 0.5 or 1 meter per second, for a differential pressure of several pascals.\r
- How to correct it: strictly separate the fluids; the manometer liquid density is used for hydrostatic conversion, while [[rho]] of the moving fluid is used for Bernoulli-based velocity conversion.\r
\r
### Error: ignoring the compressibility limit in fast gases\r
- Description: applying the incompressible Bernoulli formula to calculate the velocity of a fighter jet or a commercial jet aircraft.\r
- Why it occurs: the basic formula is taken as universal, forgetting the constraints related to the Mach number.\r
- How to detect it: when the calculated Mach number exceeds 0.3 (approx 100 m/s in air).\r
- How to correct it: for these cases, one must migrate to the Rayleigh-Pitot model, which considers changes in density and temperature due to adiabatic compression.\r
\r
## Mathematical errors\r
\r
### Error: solving without coherent dimensional control in the International System\r
- Description: mixing millimeters of water column (mmH2O) with Pascals or kilometers per hour with meters per second within the same square root.\r
- Why it occurs: it happens because aircraft instruments and industrial manometers are usually graduated in practical units and not in SI base units.\r
- How to detect it: it is detected when performing dimensional analysis of the output, where meters per second do not appear if all pressures have not been normalized to Pascals.\r
- How to correct it: perform a critical conversion of all inputs before substituting: [[p]] in Pa, [[rho]] in kg/m³, h in meters, and g in m/s²; typical errors to watch for include not dividing mm by 1000.\r
\r
## Interpretation errors\r
\r
### Error: closing the exercise without physical interpretation of the velocity value\r
- Description: delivering a pure numerical result (e.g., 25.4) without indicating what it means in terms of safety or design.\r
- Why it occurs: algebraic resolution is confused with physical understanding of the engineering problem.\r
- How to detect it: the student cannot say if 100 meters per second is a high or low velocity for the system studied.\r
- How to correct it: always justify if the final value makes sense; for example, compare the velocity with the local Mach or with the operating limit of the pumping system.\r
\r
## Quick self-control rule\r
\r
- Step 1 (fluids/dynamic-fluids/bernoulli-applications/pitot-tube): note the velocidad_pitot and delta_pitot formula, ensuring the role of each p is understood.\r
- Step 2 (pitot tube): visually verify the sign of the pressure difference; it must be greater than zero for the fluid to move toward the probe.\r
- Step 3 (pitot tube): check unit conversions, especially gas densities versus liquids and heights from mm to meters.\r
- Step 4 (pitot tube): explain in one sentence why the measured velocity is reasonable for the given context (laboratory, aviation, industry).\r
\r
If any of these steps generate doubt, one should suspect an incorrect assignment of variables or a violation of Bernoulli's hypotheses. Physical traceability is as important as mathematical traceability.`;export{e as default};
