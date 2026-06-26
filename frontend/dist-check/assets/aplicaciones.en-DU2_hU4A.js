const e=`## 1. Diagnostic medical ultrasound

The ultrasonic transducer emits high-frequency pulses that propagate as longitudinal waves through the patient's soft tissue. Each interface between tissues with different [[Z]] (muscle-fat, liver-kidney, tissue-bone) reflects a fraction of the energy that the transducer collects as an echo. From the round-trip time and the known tissue speed [[v]], the equipment reconstructs a two-dimensional or three-dimensional image of internal structures.

The axial resolution of the scanner is proportional to [[lambda]], which in turn depends on the quotient of [[v]] and [[f]]. Frequencies of 2 to 5 MHz allow exploration of deep organs with wavelengths of 0.3 to 0.8 mm, while frequencies of 12 to 18 MHz offer resolutions below 0.15 mm for superficial structures such as the thyroid or blood vessels.

Dominant variable: the transducer frequency [[f]], which sets the spatial resolution through its inverse relationship with [[lambda]].
Validity limit: when viscous absorption attenuation in tissue exceeds the equipment's ability to detect echoes at the desired depth, typically above 20 MHz for explorations beyond one centimetre.

## 2. Submarine sonar detection

Ships and submarines use transducers that emit acoustic pulses at frequencies between 1 kHz and 500 kHz in seawater. The longitudinal wave travels at a speed [[v]] close to 1500 m/s and reflects upon encountering an object whose [[Z]] differs from that of the surrounding water (metallic hull, rocky seabed, school of fish). By measuring echo delay and arrival direction, the system determines the target's position.

The acoustic impedance of seawater is approximately 1.5×10⁶ kg/(m²·s), while that of steel exceeds 4.5×10⁷ kg/(m²·s). This difference guarantees strong reflection at the hull surface of a submarine. However, actual propagation depends on temperature and salinity profiles that create layers with different [[v]], bending acoustic rays and generating shadow zones.

Dominant variable: the speed [[v]], which varies with temperature, salinity, and depth, determining the curvature of acoustic rays and localisation accuracy.
Validity limit: when vertical thermal gradients generate acoustic channels that trap or deflect energy, invalidating the homogeneous medium assumption of the ideal model.

## 3. Seismic hydrocarbon exploration

In petroleum prospecting, vibrator trucks or explosive charges generate longitudinal waves (P-waves) that penetrate the Earth's crust. When encountering boundaries between geological strata with different [[Z]] (sandstone-clay, rock-oil), part of the energy reflects back to the surface, where geophones record the echoes. The difference in arrival times between layers allows reconstruction of subsurface geometry.

The speed [[v]] in sedimentary rocks varies between 2000 m/s and 6000 m/s depending on porosity, fluid saturation, and lithostatic pressure. The impedance [[Z]] of each stratum results from the product of its local density and speed. Impedance contrasts of at least 5 % are necessary to generate reflections detectable with conventional instrumentation.

Dominant variable: the bulk modulus [[B]] of the stratum, which determines the local speed and, together with density, the impedance that produces reflections.
Validity limit: when rock porosity and fracturing introduce anisotropy and dispersion that the homogeneous isotropic model cannot capture, requiring complete anisotropic elastic models.

## 4. Industrial ultrasonic quality control

In non-destructive inspection of metallic and ceramic parts, a contact transducer emits ultrasonic pulses from 0.5 to 25 MHz that travel through the part as longitudinal waves. Any internal discontinuity (crack, pore, inclusion) presents a [[Z]] different from that of the base material, generating an echo that the equipment detects. The depth of the defect is calculated from the round-trip time and the material's speed [[v]].

In steel, [[v]] is approximately 5900 m/s, which at 5 MHz produces a [[lambda]] close to 1.2 mm. Defects smaller than [[lambda]] are difficult to detect; therefore, high-resolution inspections employ higher frequencies. The impedance of steel is about 4.6×10⁷ kg/(m²·s), while that of air trapped in a pore is only 415 kg/(m²·s), creating virtually total reflection that clearly identifies the defect.

Dominant variable: the wavelength [[lambda]], which establishes the minimum detectable defect size and depends directly on the transducer frequency.
Validity limit: when the granular microstructure of the material (grain size comparable to [[lambda]]) scatters the wave, generating background noise that masks echoes from real defects.

## 5. Ultrasonic cleaning of components

Ultrasonic cleaning baths use piezoelectric transducers operating between 20 kHz and 80 kHz, generating intense longitudinal waves in a cleaning liquid (water with detergent or solvent). The pressure variations produced by the wave create cavitation microbubbles that implode violently on the part's surfaces, dislodging adhered contaminants.

The speed [[v]] in the bath liquid (typically water) is close to 1480 m/s, producing wavelengths of several centimetres at the usual operating frequencies. The impedance [[Z]] of the liquid must be compatible with that of the part material to maximise acoustic energy transmission to the surface. Low frequencies (20 to 40 kHz) generate large cavitation bubbles with energetic implosions, suitable for resistant contaminants; high frequencies (40 to 80 kHz) produce fine cavitation, gentler and appropriate for delicate parts.

Dominant variable: the frequency [[f]], which controls cavitation bubble size and the mechanical aggressiveness of cleaning on the surface.
Validity limit: when the acoustic power exceeds the erosion threshold of the base material, ultrasonic cleaning can damage the part, departing from the safe-use regime of the linear acoustic model.
`;export{e as default};
