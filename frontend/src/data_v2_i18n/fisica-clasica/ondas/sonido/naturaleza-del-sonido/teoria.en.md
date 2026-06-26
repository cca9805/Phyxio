# Nature of Sound

## Conceptual context

Sound is one of the most immediate physical experiences of everyday life, yet its nature is not always precisely understood. We hear, speak, and listen to music, but rarely ask what agitates the air between the source and our ear. This leaf answers that question from the ground up: sound is a **mechanical disturbance that propagates** through a material medium by transmitting energy from one layer to the next.

Unlike light, which can travel through a vacuum, sound **requires a material medium** to exist. There is no sound in outer space because there is no matter to transmit the oscillation. This dependence on the medium is, at the same time, the key that explains why sound travels at such different speeds in air, water, or steel, and why its properties change when it crosses from one medium to another.

The leaf on the nature of sound is the starting point of the entire sound block. Before discussing reflection, resonance, or the Doppler effect, it is essential to understand what propagates, how it propagates, and with which quantities that propagation is described.

## 🟢 Essential level

Imagine a column of air inside a tube. When a membrane vibrates at one end, it pushes the adjacent air layer, which **compresses** slightly. That compression pushes the next layer, and so on: the disturbance travels along the tube. Between compression and compression there is a zone of **rarefaction**, where the air is slightly less dense than at rest.

This is the mechanism of sound: a chain of compressions and rarefactions advancing in the same direction as the particle displacements. That is why sound is a **longitudinal wave**: the oscillation of particles is parallel to the propagation direction.

The quantities that characterise this phenomenon are **acoustic pressure** [[p_ac]] —the pressure variation from equilibrium—, **frequency** [[f_son]] —how many oscillations occur per second—, **wavelength** [[lambda_son]] —the distance between two consecutive compressions— and **propagation speed** [[v_son]], which depends on the medium, not on the source.

> [!NOTE]
> The human ear detects pressure variations [[p_ac]] as small as 20 micropascals, equivalent to a particle displacement [[xi]] of the order of an atomic diameter. This illustrates the extraordinary sensitivity of the auditory system.

## 🔵 Formal level

The most complete mathematical description of sound in its simplest case —a **plane harmonic wave** propagating in the positive x direction— is given by the acoustic pressure equation:

{{f:onda_presion_armonica}}

where [[p0_ac]] is the pressure amplitude, [[f_son]] is the frequency, [[lambda_son]] is the wavelength, and [[v_son]] is the propagation speed. The equation shows that the pressure at each point oscillates sinusoidally in time and varies sinusoidally in space. The argument of the cosine —called the **phase**— advances in time and decreases with distance, reflecting that the wavefront moves away from the source.

The three kinematic quantities of the wave are linked by the fundamental dispersion relation:

{{f:relacion_vel_freq_lambda}}

This equation has an important consequence: when sound passes from one medium to another, [[f_son]] remains invariant (fixed by the source), while [[v_son]] changes according to the properties of the new medium. Therefore, [[lambda_son]] also changes. This is the basis of sound refraction.

The energy transported by the wave is quantified by the **acoustic intensity** [[I_ac]], which is the sound power per unit area perpendicular to propagation:

{{f:intensidad_acustica}}

The quadratic dependence of [[I_ac]] on [[p0_ac]] is physically and perceptually crucial: the ear does not respond linearly to energy increases, but logarithmically. This is why the decibel scale is used to measure sound levels.

> [!TIP]
> Particle displacement [[xi]] and acoustic pressure [[p_ac]] are 90° out of phase. Where [[p_ac]] is maximum (compression peak), [[xi]] is zero and particle velocity is also zero. Where [[p_ac]] is zero (transition), [[xi]] is maximum and particles move at maximum speed.

## 🔴 Structural level

The sound wave is fundamentally an **oscillating thermodynamic process**. When a compression advances through air, the gas compresses and warms slightly; when the rarefaction arrives, it expands and cools. At audible frequencies, this process occurs so rapidly that there is no time for heat exchange with the surroundings: it is an **adiabatic** process. This condition is what determines that the speed of sound in an ideal gas depends on absolute temperature and the adiabatic coefficient of the gas, not on static pressure.

The **acoustic impedance** of the medium, defined as the product of density and propagation speed, governs how much sound is reflected and how much is transmitted at an interface between two media. A large impedance mismatch —as occurs between air and water— produces nearly total reflection, which explains why acoustic communication between these two media is difficult.

The range of physically relevant amplitudes is enormous. [[I_ac]] varies by twelve orders of magnitude between the hearing threshold and the pain threshold. [[p0_ac]] varies by six orders of magnitude in that same range. This gigantic scale explains why the subjective perception of sound intensity follows an approximately logarithmic law (Weber-Fechner law), and why the decibel is such a natural unit for describing sound.

The wavelength [[lambda_son]] of audible sound in air ranges from about 17 mm (at 20 kHz) to about 17 m (at 20 Hz). This scale, comparable to that of everyday objects, has direct geometric consequences: sound diffracts easily around corners, doors, and obstacles. By contrast, medical diagnostic ultrasound (between 1 and 20 MHz) has sub-millimetre wavelengths, allowing imaging of internal structures with fine spatial resolution.

> [!WARNING]
> The plane harmonic wave model is a far-field approximation in a uniform medium; near sources, boundaries, or temperature gradients it must be replaced by a richer model.

## Deep physical interpretation

Acoustic pressure [[p_ac]] is the quantity most directly linked to auditory perception, but **particle displacement** [[xi]] is the one that reveals the mechanical nature of the process. At high frequencies, the same [[p0_ac]] corresponds to increasingly smaller displacements [[xi]], because the oscillation speed of particles grows with frequency even though the position amplitude decreases.

Acoustic intensity [[I_ac]] is the operative energetic quantity: it is what determines hearing damage, loudspeaker efficiency, and the range of an amplification system. Its quadratic dependence on [[p0_ac]] means that **halving the amplitude reduces intensity to one quarter**, not one half. This fact has direct implications for acoustic insulation design: doubling the insulation thickness does not double the attenuation in decibels, but rather adds to it.

## Order of magnitude

In air at 20 °C, [[v_son]] is approximately 343 m/s. For a musical note at 440 Hz (A4), [[lambda_son]] is approximately 0.78 m, comparable to the size of a person. At 20 kHz, [[lambda_son]] drops to 17 mm, of the order of a finger width. At 20 Hz, [[lambda_son]] is 17 m, larger than a standard room.

The [[I_ac]] at the hearing threshold is one trillionth of a watt per square metre (10⁻¹² W/m²). Normal conversation produces around 10⁻⁶ W/m², six orders of magnitude above the threshold. The corresponding [[p0_ac]] is of the order of 0.02 Pa, sixteen million times smaller than atmospheric pressure.

Detecting an absurd result: if a calculation yields [[lambda_son]] in micrometres for an audible frequency in air, the error is several orders of magnitude —most likely frequency in Hz was confused with angular frequency in rad/s.

## Personalized resolution method

To fully characterise a sound wave, the operative procedure is:

- **Identify the medium** and obtain its [[v_son]] (for air at a known temperature, use the temperature-dependent approximation).
- **Extract [[f_son]]** from the problem statement or spectrum; remember that [[f_son]] does not change when changing medium.
- **Calculate [[lambda_son]]** by applying the kinematic relation [[v_son]] divided by [[f_son]].
- **Determine [[p0_ac]]** from the problem statement or from [[I_ac]] using the rearranged intensity formula.
- **Verify consistency**: the calculated [[lambda_son]] should fall in the expected range for the medium and frequency; [[I_ac]] should be within the audible range or the range of interest for the problem.

## Special cases and extended example

**Case 1 — Sound in different media:** A 440 Hz note travels from air to water. In air, [[lambda_son]] is 0.78 m with [[v_son]] of 343 m/s. Upon entering water, [[v_son]] is 1480 m/s and [[lambda_son]] becomes 3.36 m. [[f_son]] remains at 440 Hz because it is the oscillation rate of the source, not a medium property. This wavelength change produces refraction: if sound enters obliquely into water, the wavefront changes direction.

## Real student questions

**Why can sound not travel in a vacuum?**
Sound is a mechanical disturbance: it requires matter to compress and expand. Without particles to transmit the impulse from one layer to the next, there is no propagation mechanism. A bell vibrating in a vacuum emits no audible sound because there is no medium to carry the oscillation to the ear.

**Why does sound travel faster in water than in air if water is denser?**
[[v_son]] in a fluid depends on the ratio between the bulk modulus and the density. Water is far less compressible than air: its bulk modulus is about ten thousand times greater. Although its density is also about eight hundred times greater, the modulus "wins" and the speed is about four times higher than in air.

**Why does [[f_son]] not change when passing from one medium to another, but [[lambda_son]] does?**
[[f_son]] is imposed by the source: it is the rate at which a loudspeaker membrane, for example, compresses and expands the fluid. That rate cannot change at the interface because if it did, particles at the boundary would receive more or fewer cycles than the source emits, violating continuity of motion. By contrast, [[lambda_son]] is the product of [[v_son]] and the period, and since [[v_son]] changes when the medium changes, [[lambda_son]] changes proportionally.

## Cross-cutting connections and study paths

The nature of sound connects directly with the [speed of sound](leaf:fisica-clasica/ondas/sonido/velocidad-del-sonido) leaf, which explains in detail the dependence of [[v_son]] on medium properties. Once the plane wave is understood, the [wave intensity](leaf:fisica-clasica/ondas/energia-y-transporte/intensidad-ondulatoria) leaf extends the concept of [[I_ac]] to spherical and cylindrical geometries.

The concept of wavelength [[lambda_son]] is fundamental for understanding diffraction and reflection of sound, treated in the [wave phenomena](leaf:fisica-clasica/ondas/fenomenos-ondulatorios) block. The quadratic relation between [[I_ac]] and [[p0_ac]] anticipates the concept of sound level in decibels, developed in the acoustic intensity leaf.

## Final synthesis

Sound is a longitudinal mechanical wave: a succession of compressions and rarefactions propagating through matter, transporting energy without net mass transport. Its fundamental descriptive quantities —[[p_ac]], [[f_son]], [[lambda_son]], [[v_son]], and [[I_ac]]— are precisely and verifiably related. [[f_son]] belongs to the source; [[v_son]] belongs to the medium; [[lambda_son]] results from both. [[I_ac]] grows as the square of [[p0_ac]], which explains the logarithmic scale of sound perception and the utility of the decibel.
