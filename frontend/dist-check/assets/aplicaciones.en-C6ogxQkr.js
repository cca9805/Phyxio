const e=`# Applications of the Field of Continuous Distributions

## 1. High-voltage cables and electrical safety zones

High-voltage power transmission lines are modelled as wires with linear density [[lambda]] proportional to the surface charge accumulated on the conductor. The radial field [[E]] around the cable determines the minimum safety distance for workers and equipment, the design of the insulating sheath surrounding the conductor, and the onset of the corona effect when [[E]] exceeds the dielectric strength of air.

Computing the safety zone reduces to solving for [[r_dist]] from the infinite wire formula with [[E]] equal to the regulatory limit. This distance is directly proportional to [[lambda]], so a cable carrying twice the charge requires twice the exclusion zone. High-voltage electrical installation codes use exactly this model to set minimum distances from buildings and communication routes.

Dominant variable: linear density [[lambda]] of the conductor, which controls the amplitude of [[E]] at any radial distance.
Validity limit: the infinite wire model is valid when the observation distance is much smaller than the length of the analysed line section; near support towers or terminations the field is distorted and requires direct integration for finite geometry.

## 2. Parallel-plate capacitor and energy storage

Two parallel infinite planes with surface densities +[[sigma]] and −[[sigma]] produce a uniform field between the plates by superposition of their individual fields. The field between the plates is twice that of a single plane, while outside the plates the two fields cancel. This configuration is the basis of all parallel-plate capacitors: from the microfarads of consumer electronics to the kilovolts of power capacitors in industrial installations.

The uniformity of the field between the plates is precisely what makes the capacitor useful: it ensures that all stored energy is concentrated between the plates and that the force on any test charge between them is the same. [[sigma]] directly controls the stored energy density and the voltage the dielectric can withstand before breakdown.

Dominant variable: surface density [[sigma]] on the plates, which controls both the field [[E]] between them and the stored energy per unit area.
Validity limit: the infinite plane model is valid when the plate separation is much smaller than the plate dimensions; at the edges of the capacitor the field spills outwards (fringing field) and the ideal model loses accuracy.

## 3. Acceleration electrodes in linear particle accelerators

In the acceleration sections of linear accelerators (linacs), two parallel flat electrodes separated by a high voltage generate a uniform field [[E]] perpendicular to the plates. Charged particles crossing the electrode gap receive an energy impulse proportional to the field times the cavity length. The field uniformity ensures that all particles in the beam receive exactly the same additional kinetic energy per acceleration stage.

Electrode design is optimised so that [[sigma]] is uniform over the largest possible area and edge effects are negligible within the useful beam volume. Modern high-energy physics linacs chain hundreds of these cavities, and precise control of [[sigma]] in each one determines the final beam energy.

Dominant variable: surface density [[sigma]] on the electrodes, which controls the energy gained per particle per acceleration cavity.
Validity limit: the infinite-plane model for the inter-electrode field is valid when the beam aperture radius is much smaller than the electrode radius; field distortion at the edges can cause beam defocussing in compact configurations.

## 4. Electrostatic deflectors in measuring instruments

Electron beam deflectors in analogue oscilloscopes, mass spectrometers, and CRT monitors use pairs of parallel plates to deflect the beam in the desired direction. The deflection angle is proportional to the field [[E]] between the plates and the deflector length, and inversely proportional to the kinetic energy of the particles. [[sigma]] directly determines the field and hence the deflection sensitivity per unit of applied voltage.

Deflector design requires maximising [[sigma]] to achieve large deflections with moderate voltages, while minimising edge effects that would distort the beam trajectory. In high-resolution cathode ray tubes, deflectors are geometrically compensated so that the field is uniform throughout the region traversed by the beam.

Dominant variable: surface density [[sigma]] on the deflector plates, which determines the field [[E]] and the beam deflection angle.
Validity limit: the uniform-field model between infinite plates fails when the beam kinetic energy is low or when the deflector length is comparable to the plate separation; in those cases edge effects appreciably affect the trajectory.

## 5. Atmospheric electric field meters (field mills)

Atmospheric electric field sensors (field mills) use a flat electrode alternately covered and uncovered by a grounded conducting rotor. When the electrode is exposed to the atmospheric field, the charge induced on it is proportional to the local atmospheric [[sigma]]. By measuring the induction current generated by the alternation of exposure and shielding, the instrument quantifies [[E]] with a precision of a few volts per metre.

These instruments detect the field [[E]] generated by charge distributions in storm clouds — distributions modelled as plates with an effective [[sigma]] — and alert to lightning risk conditions several minutes in advance. At airports and space launch sites, continuous monitoring of the atmospheric field using these sensors is an essential operational safety element.

Dominant variable: surface density [[sigma]] of the storm cloud, which determines the field [[E]] at ground level and the lightning discharge risk.
Validity limit: the uniform-[[sigma]] plane model for the cloud is an approximation; clouds with irregular shape or non-uniform charge distribution generate a field with spatial variations that the flat model cannot capture accurately.
`;export{e as default};
