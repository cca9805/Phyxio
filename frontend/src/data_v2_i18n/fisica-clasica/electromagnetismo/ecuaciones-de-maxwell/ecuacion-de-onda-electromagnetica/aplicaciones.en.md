# Applications

## 1. Antenna design for wireless communications

Radio, television, WiFi, and mobile-phone antennas are designed directly from the dispersion relation [[omega]] = [[velocidad_de_la_luz_en_el_vacio]]·[[numero_de_onda]], which connects the [[lambda]] of the signal to its angular frequency [[omega]]. A half-wave dipole, the most widely used antenna geometry, has a physical length equal to half of [[lambda]]. For a 2.4 GHz WiFi signal, the vacuum [[lambda]] is 12.5 cm, so the dipole length is approximately 6.25 cm, matching the antennas in domestic routers. For the 5G standard at 28 GHz, [[lambda]] falls to about 10.7 mm and dipoles measure under 5.4 mm, enabling arrays of hundreds of antennas on a chip the size of a postage stamp.

The dominant quantity in antenna design is [[lambda]], which sets the physical dimensions of the radiator. Changing the emission [[omega]] without adjusting the antenna length produces an impedance mismatch that drastically reduces transmission efficiency.

Dominant variable: the [[lambda]] [[lambda]], which determines the physical dimensions of the antenna and governs the design of the entire radiating system.
Validity limit: the plane-wave model and vacuum dispersion relation are valid when the antenna operates in free space or dry air. In environments with nearby conducting objects, reflections and diffraction modify the [[campo_electrico]] and [[campo_magnetico]] distribution around the antenna.

## 2. Optical fibres and high-speed communications

Silica optical fibres confine and guide EM waves in the infrared band, primarily at [[lambda]] ≈ 1550 nm ([[omega]] ≈ 1.22×10¹⁵ rad/s), where material attenuation is minimal. Inside the fibre, the phase velocity is not [[velocidad_de_la_luz_en_el_vacio]] but [[velocidad_de_la_luz_en_el_vacio]] divided by the refractive index n ≈ 1.46, introducing a propagation delay of about 4.88 ns/m relative to vacuum. The more limiting problem, however, is chromatic dispersion: different spectral components of the pulse (slightly different [[omega]]) travel at different group velocities because n depends on [[omega]]. In a conventional fibre, chromatic dispersion is about 17 ps/(nm·km) at 1550 nm, broadening picosecond pulses into microseconds after thousands of kilometres. The engineering solution is to use dispersion-shifted fibres or dispersion compensators to maintain pulse integrity.

Dominant variable: the group velocity d[[omega]]/d[[numero_de_onda]], which controls pulse broadening and limits the data transmission rate.
Validity limit: the linear wave-equation model in the fibre is valid at optical powers below the threshold for nonlinear effects such as self-phase modulation or stimulated Raman scattering, typically below a few hundred mW in single-mode fibres.

## 3. Radar and microwave distance measurement

Radar systems emit microwave pulses with [[omega]] of order 10⁹–10¹⁰ rad/s and measure the time it takes the pulse to travel to the target and back. The wave equation guarantees that the pulse travels at [[velocidad_de_la_luz_en_el_vacio]] in air (with a correction below 0.03%), so the round-trip time divided by two and multiplied by [[velocidad_de_la_luz_en_el_vacio]] gives the distance with high precision. A C-band weather radar ([[lambda]] ≈ 5 cm) detects raindrops of diameter comparable to [[lambda]] with maximum back-scattering efficiency according to Mie theory. An airborne synthetic-aperture radar (SAR) achieves decimetre spatial resolutions by coherently processing the phase of echoes received at different positions, which is only possible because the wave equation predicts phase precisely.

Dominant variable: the propagation speed [[velocidad_de_la_luz_en_el_vacio]], which converts pulse flight time into distance with centimetre-or-better precision.
Validity limit: the assumption of constant [[velocidad_de_la_luz_en_el_vacio]] in air breaks down when the troposphere has strong temperature and humidity gradients (atmospheric ducts), which can redirect waves and produce spurious echoes at incorrect apparent distances.

## 4. Nuclear magnetic resonance and medical imaging

In MRI equipment, the excitation of hydrogen nuclei is performed with radiofrequency (RF) pulses whose [[omega]] matches the Larmor frequency of the proton in the static field, typically between 10 and 300 MHz depending on the magnet strength. These pulses are EM waves that must penetrate the human body, where biological tissue has relative permittivities of order 60–80 and conductivities of order 1 S/m. The wave equation in tissue predicts a penetration depth of several centimetres at 64 MHz (1.5 T field) and of a few centimetres at 298 MHz (7 T field). At very high fields (7 T or more), the [[lambda]] inside tissue is comparable to body size and field inhomogeneities appear that degrade image uniformity, a problem called the "dielectric effect" that can only be resolved through advanced coil design or phase correction.

Dominant variable: the effective [[lambda]] inside tissue, which determines whether the RF field distribution is homogeneous or shows visible nodes and antinodes in the image.
Validity limit: the plane-wave model with homogeneous medium properties fails at sharp interfaces (bone–soft tissue, air cavities), where reflections and refractions distort the field distribution.

## 5. Speed-of-light metrology and the definition of the metre

Since 1983, the SI metre has been defined exactly in terms of [[velocidad_de_la_luz_en_el_vacio]]: one metre is the distance light travels in vacuum in 1/299 792 458 of a second. This paradigm shift inverts the relationship between measurement and definition: previously [[velocidad_de_la_luz_en_el_vacio]] was measured and the metre was defined by a reference artefact; now [[velocidad_de_la_luz_en_el_vacio]] is an exact number with no uncertainty, and any distance measurement is obtained by measuring light transit times. High-precision laser interferometers (such as those in the LIGO gravitational-wave experiment) exploit the EM wave equation directly to convert optical phase differences into displacements with a resolution of 10⁻¹⁸ m, 17 orders of magnitude below the metre. The constant [[velocidad_de_la_luz_en_el_vacio]] also fixes [[epsilon0]] since the 2019 SI redefinition, linking the vacuum permeability [[mu0]] to the fine-structure constant and the elementary charge.

Dominant variable: [[velocidad_de_la_luz_en_el_vacio]] as the universal constant connecting time and space, and fixing the scale of all electromagnetic measurements in the SI.
Validity limit: the metrological definition of [[velocidad_de_la_luz_en_el_vacio]] is exact in vacuum. In material media or in regions with appreciable spacetime curvature (near massive objects), the effective propagation speed of light differs from [[velocidad_de_la_luz_en_el_vacio]] and instruments must be corrected accordingly.