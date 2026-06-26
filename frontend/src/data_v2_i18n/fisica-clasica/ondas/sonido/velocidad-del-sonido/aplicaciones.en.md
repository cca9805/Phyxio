## 1. Sonar and underwater navigation

Active sonar emits acoustic pulses underwater and measures the echo return time to calculate distances to objects (seabed, submarines, fish schools). The distance is obtained from half the round-trip time multiplied by [[v_son]]. System accuracy depends directly on how well [[v_son]] is known under real sea conditions.

In the ocean, [[v_son]] varies between ~1450 m/s (cold deep water) and ~1530 m/s (tropical surface water), depending on temperature, salinity, and hydrostatic pressure. High-precision sonar systems incorporate [[v_son]] profiles measured in real time with sound velocity probes to correct calculated distances. A 1 % error in [[v_son]] (15 m/s) causes a 1 % error in the calculated distance, unacceptable for precision submarine navigation.

Dominant variable: [[v_son]] in sea water, which varies with temperature, salinity, and depth. The most important dependence is on temperature: [[v_son]] increases ~4.6 m/s per °C.
Validity limit: the straight-line propagation model fails in the presence of temperature gradients causing acoustic refraction. Long-range sonar systems use acoustic ray propagation models to correct for path curvature.

## 2. Medical echography and ultrasound diagnosis

Medical ultrasound equipment emits ultrasonic pulses (2-15 MHz) and measures the echo return time from interfaces between tissues with different acoustic properties. The distance to each interface is obtained from half the echo time and the calibrated [[v_son]] in soft tissues, approximately 1540 m/s in standard equipment.

The choice of [[v_son]] = 1540 m/s as a calibration value is a compromise: [[v_son]] varies between ~1450 m/s in fat and ~1570 m/s in muscle. If the beam passes through tissues with [[v_son]] different from the calibration value, the calculated depth has an error proportional to the relative deviation of [[v_son]]. This causes the "speed distortion" artefact in echography, visible as structures displaced from their real position in the image.

Dominant variable: [[v_son]] in the tissue of interest. Variation among soft tissues is ±5 % relative to the calibration value, causing position errors of up to ±5 % in the image.
Validity limit: the constant [[v_son]] model at 1540 m/s produces images with position errors at interfaces between tissues with very different speeds (for example, between fat and muscle). High-end equipment incorporates tissue [[v_son]] maps to compensate for these artefacts.

## 3. Industrial ultrasound quality control (NDT)

Non-destructive testing (NDT) with ultrasound is used to detect cracks, inclusions, delaminations, and other defects in metal parts, welds, and composite materials, without damaging the part. The principle is identical to sonar: an ultrasonic pulse is emitted and the echo flight time from the defect is measured. The defect depth is inferred from half that time and [[v_son]] in the material.

Precise calibration of [[v_son]] in the material under test is critical. [[v_son]] in steel varies with steel type, heat treatment, part temperature, and the presence of residual mechanical stresses (acoustoelastic effect). NDT laboratories maintain tables of [[v_son]] for each material and test condition, and calibrate equipment with reference blocks of known thickness made from the same material as the part to be tested.

Dominant variable: [[v_son]] in the part material. For stainless steel, [[v_son]] varies between 5630 m/s (austenitic stainless steel) and 5940 m/s (ferritic stainless steel), a 5 % difference that translates into a defect position error of the same order if not specifically calibrated.
Validity limit: in anisotropic materials (austenitic welded steel, carbon fibre composites), [[v_son]] depends on the direction of the ultrasonic beam. The isotropic constant [[v_son]] model produces systematic errors requiring correction through anisotropic propagation models.

## 4. Acoustic meteorology: atmospheric temperature measurement

The dependence of [[v_son]] in air on [[T_abs]] can be used inversely to measure the temperature of atmospheric layers without contact sensors. Atmospheric acoustic sounding systems (SODAR, Sound Detection And Ranging) emit sound pulses vertically and measure the intensity and spectrum of signals backscattered by thermal turbulences in the air.

The Doppler shift of the backscattered signal gives the vertical wind speed; the backscatter intensity gives information on the thermal structure of the atmospheric boundary layer. From measured [[v_son]] profiles, the temperature profile can be reconstructed with vertical resolution of tens of metres, without balloons or radiosondes. SODAR systems are used in boundary layer meteorology, environmental impact assessment of wind farms, and atmospheric pollutant monitoring.

Dominant variable: [[T_abs]] inferred from measured [[v_son]]. Sensitivity is approximately 0.6 m/s per °C, allowing temperature differences of ~0.5 °C to be resolved with well-calibrated equipment.
Validity limit: air humidity slightly modifies [[v_son]] because water vapour has a lower [[M_mol]] than dry air. On very humid days, [[v_son]] can be up to 0.5 % greater than in dry air, producing a ~1.5 °C bias in the estimated temperature if humidity is not corrected.

## 5. Design of wind musical instruments

The length of a resonant tube determines which frequencies the instrument can emit through the resonance condition. Open and closed tubes use different boundary conditions, so the effective tube length is designed from [[v_son]] to produce the desired frequency.

Since [[v_son]] depends on [[T_abs]], the acoustic wavelength for a given frequency changes with the temperature of the air inside the instrument. In practice, this means that wind instruments go out of tune when temperature changes: if the air inside is cooler than expected, [[v_son]] is lower, the wavelength is shorter, the resonance frequency decreases, and the instrument sounds flat. Musicians compensate for this effect by warming the instrument with breath beforehand or by mechanically adjusting the effective tube length (tuning slide on flutes, tuning slide on trumpets).

Dominant variable: [[v_son]] at the temperature of the air inside the instrument. A 10 °C change alters [[v_son]] by ~6 m/s, i.e., 1.8 %, which detunes the instrument by ~31 cents (a cent is one hundredth of a semitone; 31 cents is perceptible to trained musicians).
Validity limit: the ideal tube model assumes uniform [[v_son]] along the tube and does not account for end effects (end correction), air viscosity, or wall presence. For high-precision design, these effects require corrections of the order of 1-3 % in the effective length.
