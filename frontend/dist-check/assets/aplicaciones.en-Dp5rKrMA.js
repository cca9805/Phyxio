const e=`## 1. Ultrasonic inspection of welds in structural steel

Non-destructive inspection of welds in metal structures is the most widespread industrial application of elastic waves in solids. Ultrasonic equipment generates a P-wave (longitudinal) pulse that penetrates the weld bead and returns to the transducer if it encounters an internal discontinuity — pore, crack, slag inclusion — whose acoustic impedance differs from that of the base steel.

The technician selects P-waves to inspect the weld volume because [[v_L]] of steel (around 5900 m/s) allows inspection frequencies of 2 to 5 MHz with wavelengths of 1 to 3 mm, sufficient to detect discontinuities larger than 1 mm. To inspect vertically oriented cracks (parallel to the surface), the technician switches to S-wave transducers, which generate [[v_T]] around 3200 m/s and are more sensitive to reflections from shear planes.

The choice of wave type determines resolution, penetration depth and sensitivity to different defect types. Without knowledge of [[v_L]] and [[v_T]] of both the base material and the filler material, it is not possible to calibrate the time-of-flight or positions of detected echoes.

Dominant variable: longitudinal wave velocity [[v_L]] of the base material, which sets the time scale of the test.
Validity limit: the plane wave in homogeneous medium model is valid when the wavelength exceeds the steel grain size by a factor of 10; above 15 MHz, grain scattering masks defect echoes in coarse-grained steels.

---

## 2. Elastic characterisation of soils by spectral analysis of surface waves

The SASW (Spectral Analysis of Surface Waves) technique and its multichannel extension MASW exploit the dispersion of Rayleigh waves to determine the [[v_T]] profile with depth in soils and pavements. Geotechnical and infrastructure engineers use this technique to evaluate ground stiffness without boreholes, making it especially valuable in urban areas.

The principle is as follows: in a layered soil, [[v_R]] depends on frequency because each frequency "samples" a different depth. Low frequencies penetrate deeper and see the stiffer substrate; high frequencies remain confined to the softer surface layers. By measuring [[v_R]] as a function of frequency (dispersion curve) and fitting the layer model, the [[v_T]] profile with depth is obtained, from which [[G_corte]] is derived and, with density, Young's modulus.

This technique is widely used to classify ground according to seismic codes (Eurocode 8, NEHRP) based on the average [[v_T]] value in the first 30 m depth.

Dominant variable: Rayleigh velocity [[v_R]] as a function of frequency, whose dispersion reveals the soil stratification.
Validity limit: the technique loses resolution when layers are very thin (thickness less than one tenth of the inspection wavelength) or when the property gradient is very abrupt between adjacent layers; in those cases artefacts appear in the dispersion curve.

---

## 3. Measurement of crystallographic texture in rolled sheets

During cold rolling of steel or aluminium sheet, rolling pressure generates a preferred crystallographic texture (anisotropy) that affects deep-drawing and forming properties. Ultrasonic measurements of [[v_L]] and [[v_T]] in different sheet directions allow quantification of the anisotropy degree without X-ray diffraction or destructive laboratory techniques.

In a perfectly isotropic sheet, [[v_L]] would be identical in all directions. In a textured sheet, [[v_L]] typically varies between 1 and 5% depending on measurement orientation. The difference between velocity in the rolling direction and perpendicular to it, divided by its mean value, is a direct indicator of the Lankford r anisotropy coefficient, which determines the sheet's suitability for deep drawing.

The industrial application consists of measuring [[v_L]] with EMAT (electromagnetic, contactless) transducers inline during production, detecting in real time whether texture deviates from specification.

Dominant variable: angular variation of [[v_L]] with measurement orientation, reflecting the elastic anisotropy induced by rolling texture.
Validity limit: ultrasonic measurement detects elastic anisotropy, which is not always proportional to plastic anisotropy (r coefficient). For sheets with complex heat treatments, the relation between the two may deviate and specific calibration may be required.

---

## 4. Early seismic warning based on differential detection of P and S waves

Early Earthquake Warning (EEW) systems are based on detecting the arrival of the P-wave (longitudinal, faster) in seismograph networks near the epicentre and using that data to estimate magnitude and issue an alert to more distant areas before the arrival of the S-wave or Rayleigh wave, which are responsible for structural damage.

The physical basis is that [[v_L]] of the Earth's crust (around 6000 m/s) exceeds [[v_T]] (around 3500 m/s) by a factor of approximately 1.7. This means that for a station 200 km from the epicentre, the P-wave arrives approximately 24 seconds before the S-wave. That interval, though brief, allows issuing alerts to populations and automated systems (closing gas valves, stopping high-speed trains, opening emergency doors) before the arrival of the damaging shaking.

Rayleigh waves arrive even later than S-waves but with greater amplitude, so the useful warning interval between P-wave and Rayleigh wave can be 30 to 60 seconds for earthquakes with epicentre 150 to 200 km from the station.

Dominant variable: arrival time difference between P-wave (using [[v_L]]) and S-wave (using [[v_T]]), which is the available warning time margin.
Validity limit: for epicentres very close to the station (less than 30 km), the warning time is only a few seconds and may not be sufficient to activate automatic protocols; additionally, automatic P-wave detection can be confused with microseismic noise in low-sensitivity networks.

---

## 5. Adhesion control of hard coatings using Rayleigh waves

Hard coatings (TiN, TiAlN, DLC) deposited on cutting tools or orthopaedic implants can detach if the interfacial adhesion is insufficient. Rayleigh wave inspection allows detecting surface adhesion defects without liquid coupling or damage to the coating.

When a Rayleigh wave propagates on a correctly adhered coating, its velocity corresponds to the coating-substrate system, which is frequency-dependent (dispersive) because the Rayleigh wavelength samples different depths. If the coating is detached (delaminated), the Rayleigh wave is reflected and attenuated at the defect edge, producing a characteristic signal in the time domain.

The technique's sensitivity depends on the Rayleigh wavelength being comparable to the coating thickness. For 5 µm coatings and [[v_R]] of 3000 m/s, the required frequency is on the order of 600 MHz, requiring acoustic microwave or laser ultrasonic equipment.

Dominant variable: Rayleigh velocity [[v_R]] of the coating-substrate system, whose frequency variation reveals the presence and extent of delamination.
Validity limit: the technique distinguishes adhesion defects when the delamination has a lateral extent greater than the wavelength; smaller defects produce signal amplitudes insufficient to be distinguished from test noise.
`;export{e as default};
