# Applications

## 1. Non-destructive ultrasonic testing in bars and cables

**Context:** In civil and mechanical engineering, the integrity of anchor bars, prestressing cables, and bolts is verified by emitting ultrasonic longitudinal pulses from one end and measuring echoes reflected by internal defects (cracks, voids, corrosion).

**Dominant hypothesis:** The bar is modelled as a one-dimensional slender waveguide. At test frequencies (20–200 kHz), the wavelength is sufficiently larger than the diameter for the propagation speed to be that of the simple model.

Dominant variable: the speed [[v_barra]], which converts echo times into distances to the defect with millimetre precision.

**Physical interpretation:** An echo arriving at time t after emission indicates a reflector (defect or end) at a distance of [[v_barra]] × t / 2. Echo amplitude depends on the impedance change at the defect. A complete void (zero impedance) reflects 100% of amplitude; partial corrosion reflects proportionally less. Absence of dispersion guarantees the echo maintains the emitted pulse shape, facilitating automatic identification.

Validity limit: for 7 mm diameter steel cables, the upper frequency limit with the simple model is about 120 kHz. Above this, multiple waveguide modes complicate interpretation.

---

## 2. Hopkinson bars for high-strain-rate impact testing

**Context:** The Split Hopkinson Pressure Bar (SHPB) test uses two long steel or aluminium bars to apply controlled impact loads to material specimens. A projectile strikes the incident bar, generating a compression wave that partially transmits through the specimen into the transmitter bar. By measuring waves in both bars, stress-strain curves at strain rates of 10² to 10⁴ per second are determined.

**Dominant hypothesis:** Incident and transmitter bars are modelled as one-dimensional non-dispersive waveguides. Pulse duration (determined by projectile length) is chosen so that the dominant frequency satisfies the slender bar condition.

Dominant variable: the impedance [[impedancia_mecanica_longitudinal_de_la_barra]] of the bars, which must be similar to the specimen's to maximise energy transmission and minimise parasitic reflections.

**Physical interpretation:** Force in the specimen is calculated from the transmitted signal multiplied by the transmitter bar impedance. Strain rate is obtained from the difference between incident and reflected waves. The entire analysis relies on propagation speed being constant and known, allowing temporal synchronisation of strain gauge signals along the bars.

Validity limit: typical Hopkinson bars (20 mm diameter) limit minimum pulse duration to about 20 microseconds; shorter pulses contain frequencies where Pochhammer-Chree dispersion introduces spurious oscillations requiring numerical correction.

---

## 3. Acoustic delay line design in electronics

**Context:** In analogue radar and telecommunications systems, acoustic delay lines use bars of glass, quartz, or metal to delay electrical signals by converting them to longitudinal mechanical waves. A piezoelectric transducer converts the electrical signal to a mechanical wave at one end; the wave traverses the bar and is reconverted to an electrical signal at the other end with a delay determined by length and speed.

**Dominant hypothesis:** The bar acts as a propagation medium without dispersion or significant attenuation at operating frequencies (MHz). Speed [[v_barra]] is stable with temperature within the required tolerance.

Dominant variable: wavelength [[lambda_long]], which determines the device's spatial resolution and maximum operating frequency. For fused quartz bars ([[v_barra]] of 5760 m/s), a 10-microsecond delay requires a 57.6 mm bar.

**Physical interpretation:** Delay precision depends directly on [[v_barra]] stability with temperature. Fused quartz has a velocity-temperature coefficient of only 0.6 ppm/K, making it the preferred material for precision applications. Absence of dispersion ensures the signal is not distorted as it traverses the bar.

Validity limit: at frequencies above 50 MHz in millimetre-diameter bars, wavelength becomes comparable to diameter and lateral modes appear, degrading signal fidelity.

---

## 4. In-situ measurement of elastic properties by pulse velocity

**Context:** In civil engineering, ultrasonic pulse velocity (UPV) through cylindrical or prismatic concrete specimens is used as a quality and strength indicator. ASTM C597 specifies that a low-frequency longitudinal pulse (20–150 kHz) is transmitted through the specimen and its transit time measured.

**Dominant hypothesis:** The specimen is treated as a slender bar if the wavelength/transverse-dimension ratio is favourable. For 150 mm diameter cylindrical specimens and 54 kHz transducers (standard), [[lambda_long]] in concrete (v of 3500–4500 m/s) is of order 65–83 mm, which violates the slenderness condition. A geometric correction factor is therefore applied.

Dominant variable: [[v_barra]] of the concrete, which correlates empirically with compressive strength. Good-quality concrete has speed of 4000–4500 m/s; deteriorated concrete drops below 3000 m/s.

**Physical interpretation:** Although the simple model is not exactly valid (lambda comparable to diameter), the measured speed is corrected and used as a non-destructive proxy for material stiffness. The method's advantage is speed: measuring v in the field takes seconds and allows evaluating uniformity of large structures without extracting cores.

Validity limit: the v-strength correlation is empirical and depends on aggregate type, moisture content, and temperature. It is not valid for fibre-reinforced or polymer concretes where microstructure alters the E-strength relationship.

---

## 5. Detonation wave propagation in explosive energy transfer bars

**Context:** In mining and controlled demolition, transfer bars (boosters) connect the detonator to the main charge. The detonation wave generates an intense compression pulse that propagates through the metal bar to initiate the secondary explosive charge. Design requires knowing the exact transit time to synchronise multiple detonation points with microsecond precision.

**Dominant hypothesis:** Despite extreme pressures (several GPa), the high-strength steel bar remains in elastic regime during wavefront propagation because the section is sufficiently thick to distribute the load. Propagation speed is [[v_barra]] of the material.

Dominant variable: [[impedancia_mecanica_longitudinal_de_la_barra]] of the transfer bar, which must be carefully matched to transmit sufficient energy to the secondary charge without excessive reflections that could generate premature initiations from rebound.

**Physical interpretation:** If bar impedance is not matched to the receiving explosive, part of the energy reflects and the wave returns towards the detonator. A reflection coefficient above 0.3 can cause tensile stress at the bar-detonator junction, with fracture risk. Optimal design matches impedances or uses gradual transitions (cones) to minimise reflection.

Validity limit: for pressures above the bar material's elastic limit (typically 1–2 GPa for high-strength steels), the wave enters plastic regime where propagation speed decreases and the linear elastic model ceases to apply.