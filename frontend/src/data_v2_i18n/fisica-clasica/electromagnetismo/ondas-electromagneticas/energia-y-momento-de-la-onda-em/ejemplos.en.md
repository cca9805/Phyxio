# Exam-type example


## Problem statement

A plane electromagnetic wave strikes an absorbing laboratory plate perpendicularly. The measured rms electric field in the incidence region is 30 V/m. The illuminated surface has an effective area of 0.020 m2. Assuming vacuum propagation, estimate the average energy density, average intensity, momentum density, radiation pressure, and total received power.

The aim is not only to substitute data: the solution must interpret how the same wave goes from field to energy, from energy to flux, and from flux to mechanical action on the plate.

## Data

- RMS electric field: 30 V/m.
- Vacuum permittivity: 8.854e-12 F/m.
- Speed of light: 2.998e8 m/s.
- Effective illuminated area: 0.020 m2.
- Surface: ideal absorber with normal incidence.

## System definition

The system is the wavefront crossing the region of the plate. We study a local portion of the wave and then scale the local reading to the area [[area_iluminada]]. The wave is treated as plane, so [[intensidad_media_de_poynting]] is uniform across the illuminated region.

The plate is not modeled as a source or cavity. It only acts as an absorbing surface receiving energy and momentum. Therefore [[p_rad]] is interpreted as absorbed radiation pressure, not as a reflecting case.

## Physical model

We use the vacuum plane-wave model. The field [[campo_electrico_eficaz]] determines [[densidad_media_de_energia_electromagnetica]], propagation with [[velocidad_de_la_luz_en_el_vacio]] determines [[intensidad_media_de_poynting]], and that same flux lets us read [[densidad_de_momento_electromagnetico]], [[p_rad]], and [[potencia_electromagnetica_incidente]]. The field [[campo_magnetico_eficaz]] can also be estimated to check field coupling.

The model is local and averaged: it does not track the instantaneous oscillation of the field, but its rms value. That is appropriate because the statement asks for average energy, average intensity, and average pressure.

## Model justification

The model is valid because the surface is small and receives a wave described as plane, so intensity does not vary appreciably across [[area_iluminada]]. Normal incidence allows energy flux to be associated with normal push on the plate. Since the surface is specified as absorbing, pressure is not doubled by reflection.

It would stop being valid if the beam were focused over a region comparable with the plate size, if the surface reflected a significant part of the radiation, if the material heated enough to change absorption, or if the measurement of [[campo_electrico_eficaz]] did not represent a stable average.

## Symbolic solution

First, field coupling is checked to obtain [[campo_magnetico_eficaz]]:

{{f:relacion_campos_rms}}

Then the rms field [[campo_electrico_eficaz]] is converted into energy density [[densidad_media_de_energia_electromagnetica]]:

{{f:densidad_energia_rms}}

Energy per volume advances with [[velocidad_de_la_luz_en_el_vacio]] and produces the average intensity [[intensidad_media_de_poynting]]:

{{f:intensidad_media_onda}}

The momentum density [[densidad_de_momento_electromagnetico]] is obtained from volume energy:

{{f:densidad_momento_onda}}

The absorbed pressure [[p_rad]] is read from intensity:

{{f:presion_radiacion_absorbente}}

Finally, total received power [[potencia_electromagnetica_incidente]] requires the effective area [[area_iluminada]]:

{{f:potencia_incidente_area}}

## Numerical substitution

For [[campo_magnetico_eficaz]], dividing 30 V/m by 2.998e8 m/s gives approximately 1.00e-7 T. Thus [[campo_magnetico_eficaz]] lies in the tenths of microtesla range, consistent with a moderate electric field wave.

For [[densidad_media_de_energia_electromagnetica]], multiplying 8.854e-12 F/m by the square of 30 V/m gives approximately 7.97e-9 J/m3. That density is small per volume, but not zero: the field contains distributed electromagnetic energy.

For [[intensidad_media_de_poynting]], multiplying 7.97e-9 J/m3 by 2.998e8 m/s gives approximately 2.39 W/m2. For [[densidad_de_momento_electromagnetico]], dividing 7.97e-9 J/m3 by 2.998e8 m/s gives approximately 2.66e-17 N s/m3.

For [[p_rad]], dividing 2.39 W/m2 by 2.998e8 m/s gives approximately 7.97e-9 Pa. For [[potencia_electromagnetica_incidente]], multiplying 2.39 W/m2 by 0.020 m2 gives approximately 0.0478 W.

## Dimensional validation

- Magnetic field: V/m divided by m/s produces tesla through SI electromagnetic units.
- Energy density: F/m combined with the square of V/m produces J/m3, dimension `[M L⁻¹ T⁻²]`.
- Intensity: J/m3 multiplied by m/s produces W/m2, dimension `[M T⁻³]`.
- Momentum density: J/m3 divided by m/s produces N s/m3, dimension `[M L⁻² T⁻¹]`.
- Pressure: W/m2 divided by m/s produces Pa, dimension `[M L⁻¹ T⁻²]`.
- Power: W/m2 multiplied by m2 produces W, dimension `[M L² T⁻³]`.

## Physical interpretation

The result shows that an rms field of 30 V/m transports a moderate intensity of a few W/m2. The density [[densidad_media_de_energia_electromagnetica]] is very small because vacuum stores little energy per volume for fields of this scale, but the speed [[velocidad_de_la_luz_en_el_vacio]] turns that distributed energy into a noticeable flux. This is the physical reason why a wave can transfer power even when the energy contained in one cubic metre looks small.

The pressure [[p_rad]] is extremely small compared with ordinary mechanical pressures. That does not mean radiation has no momentum; it means momentum per area and time is small for this intensity. If [[campo_electrico_eficaz]] were doubled, [[densidad_media_de_energia_electromagnetica]] and [[intensidad_media_de_poynting]] would rise strongly because they depend on the square of the rms field, and [[p_rad]] and [[potencia_electromagnetica_incidente]] would rise as well.

The power [[potencia_electromagnetica_incidente]] depends on the plate, not only on the wave. Keeping the same [[intensidad_media_de_poynting]], a plate ten times larger would receive ten times more total power, but the local pressure would be unchanged. This separation between local effect and total capture is the main physical criterion of the leaf.

# Real-world example


## Context

An optical sensor receives nearly uniform radiation with average intensity of 500 W/m2 over an absorbing window of 4.0 cm2. The engineer wants to know whether radiation pressure can mechanically deform the window and how much power enters the sensor.

The situation is realistic for sensitive instrumentation: energy can be technically relevant while the push is tiny. Normal incidence and dominant absorption are assumed.

## Physical estimation

The effective area of 4.0 cm2 corresponds to 4.0e-4 m2. Multiplying 500 W/m2 by that area gives 0.20 W, so [[potencia_electromagnetica_incidente]] is in the tenths of a watt range. That is clear power for a small sensor and can matter thermally.

For pressure, dividing 500 W/m2 by [[velocidad_de_la_luz_en_el_vacio]] gives approximately 1.7e-6 Pa. This scale is millions of times smaller than ordinary atmospheric pressure. Therefore [[p_rad]] will not be the dominant mechanical mechanism unless the sensor is extremely light or the force is integrated over a long time.

The associated energy density is obtained by dividing intensity by [[velocidad_de_la_luz_en_el_vacio]], giving a scale of 1.7e-6 J/m3. The physical reading is that the beam delivers energy continuously, not that it stores much energy in each volume.

## Interpretation

The diagnosis separates three design decisions. For heating and energy budget, [[potencia_electromagnetica_incidente]] matters because the device receives total power. For mechanical deformation, [[p_rad]] matters because pressure is force per area. For understanding the wave as a physical object, [[densidad_media_de_energia_electromagnetica]] matters because it shows local stored energy.

If the sensor doubled its area without changing intensity, [[potencia_electromagnetica_incidente]] would double but [[p_rad]] would not change. If [[intensidad_media_de_poynting]] doubled instead, both power and pressure would rise. This distinction prevents overdesigning mechanical supports when the true limit is thermal, or ignoring radiation push in ultralight systems.