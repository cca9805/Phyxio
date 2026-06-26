const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A plane electromagnetic wave strikes an absorbing laboratory plate perpendicularly. The measured rms electric field in the incidence region is 30 V/m. The illuminated surface has an effective area of 0.020 m2. Assuming vacuum propagation, estimate the average energy density, average intensity, momentum density, radiation pressure, and total received power.\r
\r
The aim is not only to substitute data: the solution must interpret how the same wave goes from field to energy, from energy to flux, and from flux to mechanical action on the plate.\r
\r
## Data\r
\r
- RMS electric field: 30 V/m.\r
- Vacuum permittivity: 8.854e-12 F/m.\r
- Speed of light: 2.998e8 m/s.\r
- Effective illuminated area: 0.020 m2.\r
- Surface: ideal absorber with normal incidence.\r
\r
## System definition\r
\r
The system is the wavefront crossing the region of the plate. We study a local portion of the wave and then scale the local reading to the area [[A]]. The wave is treated as plane, so [[S_med]] is uniform across the illuminated region.\r
\r
The plate is not modeled as a source or cavity. It only acts as an absorbing surface receiving energy and momentum. Therefore [[p_rad]] is interpreted as absorbed radiation pressure, not as a reflecting case.\r
\r
## Physical model\r
\r
We use the vacuum plane-wave model. The field [[E0]] determines [[u_EM]], propagation with [[c]] determines [[S_med]], and that same flux lets us read [[g_EM]], [[p_rad]], and [[P_rad]]. The field [[B0]] can also be estimated to check field coupling.\r
\r
The model is local and averaged: it does not track the instantaneous oscillation of the field, but its rms value. That is appropriate because the statement asks for average energy, average intensity, and average pressure.\r
\r
## Model justification\r
\r
The model is valid because the surface is small and receives a wave described as plane, so intensity does not vary appreciably across [[A]]. Normal incidence allows energy flux to be associated with normal push on the plate. Since the surface is specified as absorbing, pressure is not doubled by reflection.\r
\r
It would stop being valid if the beam were focused over a region comparable with the plate size, if the surface reflected a significant part of the radiation, if the material heated enough to change absorption, or if the measurement of [[E0]] did not represent a stable average.\r
\r
## Symbolic solution\r
\r
First, field coupling is checked to obtain [[B0]]:\r
\r
{{f:relacion_campos_rms}}\r
\r
Then the rms field [[E0]] is converted into energy density [[u_EM]]:\r
\r
{{f:densidad_energia_rms}}\r
\r
Energy per volume advances with [[c]] and produces the average intensity [[S_med]]:\r
\r
{{f:intensidad_media_onda}}\r
\r
The momentum density [[g_EM]] is obtained from volume energy:\r
\r
{{f:densidad_momento_onda}}\r
\r
The absorbed pressure [[p_rad]] is read from intensity:\r
\r
{{f:presion_radiacion_absorbente}}\r
\r
Finally, total received power [[P_rad]] requires the effective area [[A]]:\r
\r
{{f:potencia_incidente_area}}\r
\r
## Numerical substitution\r
\r
For [[B0]], dividing 30 V/m by 2.998e8 m/s gives approximately 1.00e-7 T. Thus [[B0]] lies in the tenths of microtesla range, consistent with a moderate electric field wave.\r
\r
For [[u_EM]], multiplying 8.854e-12 F/m by the square of 30 V/m gives approximately 7.97e-9 J/m3. That density is small per volume, but not zero: the field contains distributed electromagnetic energy.\r
\r
For [[S_med]], multiplying 7.97e-9 J/m3 by 2.998e8 m/s gives approximately 2.39 W/m2. For [[g_EM]], dividing 7.97e-9 J/m3 by 2.998e8 m/s gives approximately 2.66e-17 N s/m3.\r
\r
For [[p_rad]], dividing 2.39 W/m2 by 2.998e8 m/s gives approximately 7.97e-9 Pa. For [[P_rad]], multiplying 2.39 W/m2 by 0.020 m2 gives approximately 0.0478 W.\r
\r
## Dimensional validation\r
\r
- Magnetic field: V/m divided by m/s produces tesla through SI electromagnetic units.\r
- Energy density: F/m combined with the square of V/m produces J/m3, dimension \`[M L⁻¹ T⁻²]\`.\r
- Intensity: J/m3 multiplied by m/s produces W/m2, dimension \`[M T⁻³]\`.\r
- Momentum density: J/m3 divided by m/s produces N s/m3, dimension \`[M L⁻² T⁻¹]\`.\r
- Pressure: W/m2 divided by m/s produces Pa, dimension \`[M L⁻¹ T⁻²]\`.\r
- Power: W/m2 multiplied by m2 produces W, dimension \`[M L² T⁻³]\`.\r
\r
## Physical interpretation\r
\r
The result shows that an rms field of 30 V/m transports a moderate intensity of a few W/m2. The density [[u_EM]] is very small because vacuum stores little energy per volume for fields of this scale, but the speed [[c]] turns that distributed energy into a noticeable flux. This is the physical reason why a wave can transfer power even when the energy contained in one cubic metre looks small.\r
\r
The pressure [[p_rad]] is extremely small compared with ordinary mechanical pressures. That does not mean radiation has no momentum; it means momentum per area and time is small for this intensity. If [[E0]] were doubled, [[u_EM]] and [[S_med]] would rise strongly because they depend on the square of the rms field, and [[p_rad]] and [[P_rad]] would rise as well.\r
\r
The power [[P_rad]] depends on the plate, not only on the wave. Keeping the same [[S_med]], a plate ten times larger would receive ten times more total power, but the local pressure would be unchanged. This separation between local effect and total capture is the main physical criterion of the leaf.\r
\r
# Real-world example\r
\r
## Context\r
\r
An optical sensor receives nearly uniform radiation with average intensity of 500 W/m2 over an absorbing window of 4.0 cm2. The engineer wants to know whether radiation pressure can mechanically deform the window and how much power enters the sensor.\r
\r
The situation is realistic for sensitive instrumentation: energy can be technically relevant while the push is tiny. Normal incidence and dominant absorption are assumed.\r
\r
## Physical estimation\r
\r
The effective area of 4.0 cm2 corresponds to 4.0e-4 m2. Multiplying 500 W/m2 by that area gives 0.20 W, so [[P_rad]] is in the tenths of a watt range. That is clear power for a small sensor and can matter thermally.\r
\r
For pressure, dividing 500 W/m2 by [[c]] gives approximately 1.7e-6 Pa. This scale is millions of times smaller than ordinary atmospheric pressure. Therefore [[p_rad]] will not be the dominant mechanical mechanism unless the sensor is extremely light or the force is integrated over a long time.\r
\r
The associated energy density is obtained by dividing intensity by [[c]], giving a scale of 1.7e-6 J/m3. The physical reading is that the beam delivers energy continuously, not that it stores much energy in each volume.\r
\r
## Interpretation\r
\r
The diagnosis separates three design decisions. For heating and energy budget, [[P_rad]] matters because the device receives total power. For mechanical deformation, [[p_rad]] matters because pressure is force per area. For understanding the wave as a physical object, [[u_EM]] matters because it shows local stored energy.\r
\r
If the sensor doubled its area without changing intensity, [[P_rad]] would double but [[p_rad]] would not change. If [[S_med]] doubled instead, both power and pressure would rise. This distinction prevents overdesigning mechanical supports when the true limit is thermal, or ignoring radiation push in ultralight systems.\r
\r
`;export{e as default};
