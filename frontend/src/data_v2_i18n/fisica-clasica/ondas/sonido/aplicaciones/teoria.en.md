# Applications of Sound

## Conceptual context

Sound is far more than an auditory phenomenon. The same laws governing the propagation, reflection and intensity of pressure waves are exploited in technologies ranging from medical diagnosis to submarine navigation, through auditorium design and infrastructure inspection. The common denominator of all these applications is precise control of **where sound goes, at what speed, at what intensity and what information it carries**.

This leaf connects the concepts of speed of sound, intensity level and the echo principle with real technological scenarios. The central physical question is not theoretical: it is practical. How do you measure a distance without a ruler? How do you see inside a body without opening it? How do you protect people from excessive noise? In every case, the physics of sound is the tool.

The classification that follows groups applications into four families, each with its dominant physical principle, its critical quantities and its inherent limitations.

## 🟢 Essential level

Sound applications fall into four major families:

**Echo detection (sonar and ultrasound)**: A sound pulse is emitted and the time it takes to return after reflecting off an object is measured. Multiplying that time by the speed of sound in the medium and dividing by two gives the distance to the object. Division by two is essential: the pulse travels out and back, covering twice the distance of interest.

**Measurement and control of sound level**: Intensity level is expressed in decibels using a logarithmic scale. This scale is appropriate because the human ear perceives intensity logarithmically: doubling the physical intensity is not perceived as "twice as loud", but only as a small noticeable increment. The reference level of 0 dB corresponds to the threshold of human hearing.

**Acoustic isolation**: The sound reduction index of a building element describes how many decibels are lost when passing through it. More massive materials generally isolate better, but all materials have coincidence frequencies at which isolation drops sharply.

**Room acoustics**: The acoustic quality of an auditorium, classroom or recording studio depends on reverberation time, the distribution of direct sound and the absence of harmful echoes. Design controls the shape, dimensions and absorption materials of the space.

> [!NOTE]
> The frequency of sound determines the appropriate application. Audible sound (20 Hz to 20 kHz) is what we use to communicate and what architectural acoustics protects. Ultrasound (frequencies above 20 kHz) is inaudible but used in sonar, medical imaging and industrial ultrasonics because its short wavelength allows higher spatial resolution.

## 🔵 Formal level

**Echo formula**: The relation between distance [[d_eco]], speed of sound in the medium [[v_sonido]] and travel time [[t_vuelo]] is the basis of sonar and ultrasound:

{{f:distancia_eco}}

The factor of 2 in the denominator is unavoidable: the pulse travels twice the distance [[d_eco]]. This calculation requires knowing [[v_sonido]] precisely, since any error in it produces a proportional error in the calculated distance.

**Sound intensity level formula**: The level in decibels [[IL]] is calculated as:

{{f:nivel_intensidad}}

where the reference intensity is 10⁻¹² W/m², corresponding to the threshold of hearing at 1 kHz. The logarithmic scale means that a variation of 10 dB corresponds to multiplying intensity by 10. When there are several sources, levels in dB **cannot be added directly**: each level must be converted to intensity, the intensities summed, and the result converted back to dB.

**Sound reduction index**: The level in the receiving space [[IL_rec]] is estimated from the source level [[IL_fuente]] and the sound reduction index [[R_aislamiento]] of the partition:

{{f:aislamiento_requerido}}

The level difference between source and receiver is approximately equal to [[R_aislamiento]] under diffuse field conditions in both spaces. Designing a partition involves choosing materials and geometries that maximise [[R_aislamiento]] in the critical frequency range for the use.

> [!TIP]
> For sonar in seawater, [[v_sonido]] is approximately 1500 m/s. For medical ultrasound in soft tissue, [[v_sonido]] is approximately 1540 m/s. For parking sensors in air, [[v_sonido]] is approximately 340 m/s at ambient temperature. Using the wrong medium value produces direct errors in [[d_eco]].

## 🔴 Structural level

The architecture of each application reveals how the same physical principle adapts to radically different contexts.

In **active sonar**, the greatest difficulty is not the echo formula but identifying the correct echo among the ocean background noise and multiple echoes from unwanted objects. Signal processing (cross-correlation between the emitted pulse and the received signal) allows extracting [[t_vuelo]] with much greater precision than simple first-peak detection. This time resolution improvement translates into distance resolution improvement.

In **medical ultrasound**, biological tissues are not homogeneous media: they have slightly different sound velocities depending on composition (soft tissue between 1450 and 1600 m/s, bone above 3000 m/s). The ultrasound equipment assumes a single [[v_sonido]] value to reconstruct the image, which introduces geometric errors in the position of structures. Additionally, sound attenuation in tissue increases with frequency, forcing the use of low frequencies for deep imaging (lower resolution) and high frequencies for superficial structures (higher resolution).

In **acoustic isolation**, the mass law states that [[R_aislamiento]] increases 6 dB every time the panel surface mass doubles. However, at the coincidence frequency — where the flexural wave velocity in the panel equals the speed of sound in air — isolation drops drastically (coincidence dip). Practical solutions use double-leaf partitions separated by an air gap to decouple the coincidence frequencies of the two leaves and raise the overall isolation.

In **room acoustics**, the reverberation time T60 — the time for the sound level to fall 60 dB after the source stops — is the most relevant design parameter. For orchestral music, T60 values between 1.8 and 2.2 s are preferred; for speech, between 0.4 and 0.8 s. This value is controlled by distributing absorptive materials so that the sum of their equivalent absorptions produces the desired T60 via the Sabine or Eyring formula.

> [!WARNING]
> In sonar, an echo from an object does not always travel in a straight line: in thermocline waters, the temperature gradient creates a [[v_sonido]] gradient that curves the sound path (refraction). In extreme cases, sound can travel through deep acoustic channels (SOFAR channel) across entire ocean basins. Ignoring refraction in precision sonar produces systematic position errors.

## Deep physical interpretation

The four application families exploit different properties of the wave:

Sonar and ultrasound exploit **reflection** and **propagation velocity**: sound bounces off surfaces and travel time encodes distance. Spatial resolution is limited by wavelength, which in turn depends on [[v_sonido]] and frequency. Increasing frequency improves resolution but reduces penetration depth due to greater attenuation.

Intensity level and noise protection acoustics exploit the **logarithmic relation between intensity and perception**: the human ear has a dynamic range of 12 orders of magnitude, and the dB scale compresses it into a manageable range of 0 to 120 dB for practical sound.

Acoustic isolation exploits **acoustic impedance** and the **mass law**: for sound not to be transmitted, the impedance difference between the medium and the panel must be large, and that difference grows with panel mass.

Room acoustics exploits the **balance between direct and reverberant energy**: the clarity of the acoustic message depends on the ratio of direct sound energy to reverberant field energy, and that balance is designed through the geometry and materials of the space.

## Order of magnitude

For sonar in seawater with [[v_sonido]] of 1500 m/s, a travel time of 1 second corresponds to a distance of 750 m. A submarine at 3 km produces an echo with a travel time of 4 seconds. For medical ultrasound with [[v_sonido]] of 1540 m/s, an organ at 10 cm depth produces an echo with a travel time of approximately 130 microseconds.

For intensity level: a normal conversation at 1 m generates about 65 dB. A busy avenue can exceed 75 dB. A pneumatic hammer at 1 m reaches 100 dB. The pain threshold is around 120 dB.

For isolation: a solid brick wall 10 cm thick has [[R_aislamiento]] of approximately 42 dB; a double plasterboard leaf with a 10 cm cavity can reach 55 to 60 dB at mid frequencies.

## Personalized resolution method

To solve an echo detection problem:

1. Identify the propagation medium and obtain the appropriate [[v_sonido]] for that medium and temperature.
2. Measure or identify [[t_vuelo]] (remember it is the round-trip time).
3. Apply the echo distance formula with the factor 2 in the denominator.
4. Verify the order of magnitude: for water and 1 s of [[t_vuelo]], the result should be on the order of hundreds of metres.

To solve a sound level problem:

1. Convert the given intensity to W/m² if in other units.
2. Divide by the reference intensity 10⁻¹² W/m².
3. Apply the logarithmic intensity-level formula.
4. To combine sources: convert each [[IL]] to intensity, sum and convert back.

To solve an isolation problem:

1. Identify [[IL_fuente]] in the source room and the limit [[IL_rec]] in the receiver.
2. Calculate [[R_aislamiento]] as the difference between both levels.
3. Verify that the building element maintains that isolation in the dominant frequency band.

## Special cases and extended example

**Sonar in stratified water**: if [[v_sonido]] changes with depth, the ray bends and the simple echo formula no longer locates the object correctly. Precision bathymetry uses a layered [[v_sonido]] profile.

**Low-frequency isolation**: a partition that satisfies [[R_aislamiento]] at mid frequencies may fail with diesel engines or heavy traffic. Mass, seals and flanking paths dominate the real result.

**Extended example**: if a technical room has [[IL_fuente]] of 92 dB and the adjacent office requires [[IL_rec]] of 75 dB, the minimum requirement is [[R_aislamiento]] of 17 dB. A real bulkhead must exceed that value with margin in the dominant band.

## Real student questions

**Why divide by two in sonar?**

Because [[t_vuelo]] measures the out-and-back trip. The object distance is only half of the pulse path.

**Why can I not always subtract dB levels directly?**

Level subtraction is valid for comparable source-to-receiver reduction. To combine different sources, return to linear intensity [[I]].

## Cross-cutting connections and study paths

This leaf connects directly with:

- [Speed of sound](leaf:fisica-clasica/ondas/sonido/velocidad-del-sonido): determines [[v_sonido]] in different media, the critical parameter of all echo applications.
- [Intensity and sound level](leaf:fisica-clasica/ondas/sonido/intensidad-y-nivel-sonoro): develops the intensity-level formula and the inverse square law of distance.
- [Doppler effect](leaf:fisica-clasica/ondas/sonido/efecto-doppler): extends sonar to moving objects, where the echo frequency changes and allows velocity to be measured in addition to position.
- [Nature of sound](leaf:fisica-clasica/ondas/sonido/naturaleza-del-sonido): provides the conceptual pressure wave framework from which all applications derive.

## Final synthesis

Sound applications transform the propagation, reflection and intensity properties of pressure waves into concrete technological tools. The echo formula converts a travel time into a distance; the dB scale compresses the vast dynamic range of hearing into manageable numbers; the sound reduction index quantifies the barrier between spaces; and reverberation time defines the acoustic quality of a space. In every case, knowing [[v_sonido]] of the medium precisely and respecting the factor of 2 of the round trip are the critical conditions for avoiding systematic errors.
