const e=`## 1. Young modulus measurement by impulse excitation (ASTM E1876)

A rectangular or cylindrical bar is supported at the nodal points of its first flexural mode and struck at the centre. The fundamental longitudinal frequency is measured with a microphone. The free-free frequency relation gives [[v_L]], and the longitudinal velocity relation then gives [[E_young]]. The method is non-destructive, fast (seconds per sample) and precise (error less than 1%). It is the industrial standard for ceramics, sintered metals and brittle materials.

Dominant variable: measured [[f_n]], from which [[v_L]] and finally [[E_young]] are extracted.
Validity limit: the bar must be slender and the mode correctly identified. If a flexural mode is excited instead of the longitudinal one, the obtained modulus will be incorrectly calculated.
Operational reading: the technician does not turn one isolated peak into a modulus automatically; the peak is first checked against a coherent modal family and the expected spacing in the spectrum. If the specimen has porosity or cracks, [[f_n]] decreases because the effective stiffness drops before the mass changes appreciably.

## 2. Tuning fork and acoustic resonator design

A tuning fork is a U-bent bar vibrating in its fundamental flexural mode. The frequency is adjusted by trimming the prong length. Straight bars are used as resonators in percussion instruments (xylophone, metallophone): each bar length is calculated to tune a specific note using the longitudinal or flexural resonance formula depending on the design.

Dominant variable: [[L_barra]], adjusted to obtain the desired [[f_n]] with the [[v_L]] of the chosen material.
Validity limit: for thick bars or high modes, dispersion alters tuning and empirical corrections or numerical models are required.
Operational reading: the maker measures the resulting pitch, removes material in a controlled way and measures again. Shortening the bar raises [[f_n]], while thinning selected zones can move nodes and antinodes. A real instrument therefore combines an initial calculation with fine experimental tuning.

## 3. Power ultrasonic transducers (sonotrodes)

In industrial processes (ultrasonic welding, cleaning, homogenisation), metal bars vibrate longitudinally at their resonance frequency (typically 20-40 kHz). The design consists of calculating the length so that the bar resonates at the electrical generator frequency. The free-free formula or boundary conditions modelling the mechanical load at the tip are used.

Dominant variable: [[L_barra]] and [[v_L]] of the material (titanium, aluminium, steel), adjusted so that [[f_n]] matches the generator frequency.
Validity limit: at high powers, temperature rises and slightly changes [[E_young]] and [[rho]], shifting the resonance frequency. Active frequency control is required.
Operational reading: the sonotrode is designed so that the displacement antinode lies at the working tip. A small departure from [[f_n]] reduces energy transfer and increases heating, so the electronics usually track resonance in real time during welding or cleaning.

## 4. MEMS resonator-based mass sensors

Silicon micro-bars (cantilevers) vibrate at their natural frequency. When mass is deposited on the bar, the frequency decreases proportionally to the added mass. By measuring the frequency shift, masses of the order of picograms are detected. This is the basis of nanobalances, biological sensors and chemical detectors.

Dominant variable: [[f_n]], whose shift reveals the added mass.
Validity limit: the simple bar model fails when distributed mass is comparable to the resonator mass or when there is damping from the surrounding medium (liquid vs vacuum).
Operational reading: the sensor is calibrated by measuring very small changes of [[f_n]] around a clean reference state. The useful signal is not the absolute frequency, but its shift relative to the initial state. In air or liquid, damping broadens the peak and limits mass resolution.

## 5. Material quality control by resonance spectrum analysis

A piece (bar, cylinder, disc) is excited and its entire resonance frequency spectrum is measured. Comparison with the spectrum predicted by the isotropic elastic model reveals internal defects (porosity, cracks), anisotropy or composition changes. A homogeneous material has equally spaced harmonics; deviations indicate heterogeneity.

Dominant variable: the set of [[f_n]] for multiple modes, and their relative spacing.
Validity limit: geometrically complex parts require numerical simulation to predict the spectrum. The method works best the simpler the geometry (bars, cylinders, discs).
Operational reading: in a healthy bar, longitudinal modes keep a recognisable spacing pattern and torsional modes form another family. If a production batch shows a shifted or broadened family, density, stiffness, heat treatment and internal defects are checked before accepting the parts.
In a plant environment, this reading is combined with manufacturing tolerances: two pieces with the same geometry but different heat treatment can preserve the same modal family while shifting the whole spectrum by a few percent. That shift is enough to separate acceptable material, suspicious material and pieces that require later destructive inspection.

The method is also useful because it stores a spectral fingerprint. A reference batch defines expected frequency bands, and later batches are compared against them without cutting the product. When several modes move together the cause is usually global stiffness or density; when only one family changes, geometry, support conditions or anisotropy become the first suspects.
`;export{e as default};
