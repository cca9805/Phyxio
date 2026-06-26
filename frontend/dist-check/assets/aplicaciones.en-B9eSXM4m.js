const e=`## 1. Geotechnical soil profiling via MASW for seismic classification

In civil engineering, before designing a foundation the soil must be classified by seismic stiffness. The MASW (Multichannel Analysis of Surface Waves) method exploits Rayleigh wave dispersion in stratified media: an impact is generated at the surface, the Rayleigh phase velocity is measured at different frequencies, and the dispersion curve is inverted to obtain the [[v_s]] profile with depth.

Frequency selects the investigation depth: at 50 Hz the first few metres are probed (fill, topsoil); at 5 Hz, 30-50 m is reached (bedrock). The VS30 parameter (average [[v_s]] in the upper 30 metres) determines the seismic site category. An error of 50 m/s in VS30 can change the category and multiply design forces. The technique is non-invasive, fast (a complete survey in 30 minutes) and far more economical than boreholes.

Dominant variable: the Rayleigh wave velocity measured at each frequency, which is transformed into a shear-wave velocity profile through inversion of the dispersion curve.
Validity limit: in soils with velocity inversions (stiff surface layer over soft layer), the method may yield non-unique inversion solutions, requiring complementary information.

## 2. SAW filters in mobile telecommunications

Surface Acoustic Wave (SAW) filters are microelectronic devices that use Rayleigh waves on piezoelectric substrates (quartz, lithium niobate) to select frequencies. An interdigital transducer converts electrical signals into Rayleigh waves travelling along the crystal surface at velocities of 3000-4000 m/s. The wavelength [[lambda_R]] defines the filter centre frequency.

Each mobile phone contains between 5 and 30 SAW filters to separate communication bands (GSM, LTE, 5G). Required precision is extreme: variations of [[v_R]] of 0.01 percent shift the centre frequency and degrade signal quality. Surface confinement (penetration of only tens of micrometres) guarantees high sensitivity to crystal surface properties, enabling extreme miniaturisation.

Dominant variable: the Rayleigh velocity on the piezoelectric substrate, which sets the filter centre frequency through the relationship between frequency, velocity, and interdigital electrode spacing.
Validity limit: at frequencies above 3 GHz, wavelength approaches substrate imperfection size and scattering losses degrade performance; BAW (Bulk Acoustic Wave) technology is then used instead.

## 3. Surface crack detection in aeronautical components

In the inspection of aircraft turbines, brake discs, and landing gear, Rayleigh waves allow surface crack detection without disassembling parts. A Rayleigh ultrasonic pulse (typical frequency 1-10 MHz, [[lambda_R]] from fractions of a millimetre to millimetres) is launched along the part surface. Any surface discontinuity (crack, corrosion pit, fatigue initiation) reflects part of the wave, generating a detectable echo.

The penetration depth [[d_pen]] (on the order of [[lambda_R]]) limits inspection to surface or near-surface defects (up to 1-2 mm), but precisely those are the most critical in fatigue because fractures initiate there. Sensitivity is extreme: cracks of 0.1 mm depth are detected. The method is fast, automatable, and non-destructive, allowing periodic in-service inspections.

Dominant variable: the echo amplitude reflected by the surface defect, which depends on crack size relative to the Rayleigh wavelength used.
Validity limit: for deep internal defects (beyond one wavelength below the surface), the Rayleigh wave has no sensitivity and longitudinal or transverse body waves must be used.

## 4. Surface wave seismic magnitude Ms estimation

The surface wave magnitude (Ms) is a seismological scale based on Rayleigh wave amplitude recorded at teleseismic distances (20-160 degrees). The maximum amplitude of the Rayleigh wave train (period close to 20 s) is measured and corrected for distance and focal depth. This scale is particularly useful for shallow earthquakes (depth below 70 km) where Rayleigh waves dominate the record.

The advantage of Ms is its robustness: Rayleigh waves propagate efficiently over large distances (attenuation as the inverse square root of distance) and their long period makes them less sensitive to local heterogeneities. The relationship between Ms and released energy allows comparing earthquakes globally. However, Ms saturates for very large earthquakes (above magnitude 8) because amplitude at 20 s stops growing proportionally with total released energy.

Dominant variable: the maximum amplitude of the Rayleigh wave train at 20-second period, corrected for epicentral distance, quantifying the surface energy of the earthquake.
Validity limit: for deep earthquakes (more than 70 km), Rayleigh waves are weakly excited and Ms underestimates the real magnitude; moment magnitude Mw is then used.

## 5. Mechanical characterisation of coatings and thin films

In the semiconductor and protective coating industry (nitrides, carbides, DLC), high-frequency Rayleigh waves (50-500 MHz) allow measuring elastic properties of micrometre-thick layers without destroying the sample. The surface acoustic wave microscopy technique (SAM/SLAM) launches a focused ultrasonic beam onto the coating surface and analyses the generated Rayleigh velocity.

Since penetration depth [[d_pen]] at these frequencies is on the order of micrometres (comparable to coating thickness), the measurement is exclusively sensitive to film properties and the interface with the substrate. From the measured [[v_R]], the Young modulus and Poisson ratio of the coating are estimated. Local variations in [[v_R]] reveal adhesion defects, incipient delaminations, or composition gradients in the film. The technique is non-destructive with micrometre lateral resolution.

Dominant variable: the Rayleigh velocity at the coating surface, reflecting the elastic constants of the thin film and its degree of adhesion to the substrate.
Validity limit: when film thickness is much less than the wavelength (ultrathin film), the measurement mainly reflects the substrate and sensitivity to the coating is lost; higher frequencies or guided wave techniques are then required.
`;export{e as default};
