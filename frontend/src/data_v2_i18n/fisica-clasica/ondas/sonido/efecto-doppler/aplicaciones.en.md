## 1. Doppler speed radar on roads

Traffic speed radars exploit the Doppler effect with radio or microwave waves. The device emits a continuous signal at known frequency [[f_fuente]] (typically between 10 and 35 GHz). The vehicle reflects the signal back to the radar, acting both as a receiver and as a new source with a Doppler shift. The radar receives the echo and measures the total frequency shift, which in the reflection case is double the single shift because the effect is applied twice (once on receiving and once on re-emitting). Vehicle speed is calculated directly from that [[delta_f]].

The microwave radar physics is identical to that of acoustic Doppler, replacing [[v_sonido]] with the speed of light. For a K-band radar (24 GHz), each km/h of vehicle speed produces approximately 44 Hz of Doppler shift: speeds of 50 to 150 km/h produce shifts of 2.2 to 6.6 kHz, easily measurable with sub-Hz precision.

Dominant variable: the Doppler shift [[delta_f]], directly proportional to vehicle speed; the precision of the speed measurement is limited by the precision in measuring [[delta_f]].
Validity limit: the radar points directly at the vehicle (small incidence angle). For oblique angles, the radial velocity component is smaller than the total speed: the radar underestimates speed. Additionally, the radar cannot distinguish between multiple overlapping Doppler frequencies from several vehicles without additional signal processing.

---

## 2. Cardiac and vascular Doppler ultrasound

In medicine, Doppler ultrasound allows measuring blood flow velocity in real time without contact with the blood. The ultrasonic transducer emits pulses at [[f_fuente]] typically between 2 and 10 MHz. Moving red blood cells reflect the pulses with a Doppler shift proportional to their velocity, and the equipment measures the echo [[delta_f]] and converts it to flow velocity.

The most critical clinical application is the evaluation of cardiac valve stenosis: a narrow valve accelerates blood flow, and the velocity peak detected by Doppler allows the cardiologist to calculate the pressure gradient across the valve (via the modified Bernoulli equation) without invasive catheterisation. Colour Doppler assigns a colour (typically red for flow toward the transducer, blue for flow away) to each pixel of the ultrasound image, producing a real-time velocity map.

Dominant variable: the Doppler shift [[delta_f]] of the ultrasonic echo, proportional to the velocity of red blood cells along the transducer's line of sight.
Validity limit: the technique loses sensitivity for angles between beam and flow above 60 degrees, where the radial velocity component becomes small. For flow perpendicular to the beam, the Doppler shift is zero even if the flow is fast.

---

## 3. Doppler weather radar for tornado detection

Modern weather radars (WSR-88D type in the United States) emit microwave pulses and measure the Doppler shift of echoes from rain, hail or snow particles. The [[delta_f]] of each echo reveals the radial velocity of particles at each point of the scanned volume. A radial velocity map of the entire atmosphere allows detecting the wind rotation characteristic of tornadoes: if in a region of the map an area of approaching wind appears adjacent to a receding wind area, rotating air is inferred, which is the Doppler signature of a tornadic supercell.

This detection can be achieved up to 30 minutes before visual tornado observation, enough time to issue emergency alerts. The system integrates [[f_obs]] measurements across the entire radar beam to build the three-dimensional velocity field of the atmosphere.

Dominant variable: the radial wind velocity component detected as [[delta_f]] of the precipitation echo; the difference between adjacent approach and recession zones allows inferring wind rotation.
Validity limit: the radar only measures the radial velocity component; transverse wind (perpendicular to the beam) is invisible to Doppler. Dual-polarisation radars and multi-radar networks allow reconstructing the full wind vector field from radial components measured from different positions.

---

## 4. Doppler navigation sonar for submarines and AUVs

Autonomous underwater vehicles (AUVs) and military submarines use acoustic Doppler to measure their own velocity relative to the seabed. The device — known as ADCP (Acoustic Doppler Current Profiler) when measuring currents, or DVL (Doppler Velocity Log) when measuring vehicle speed — emits acoustic beams in several directions toward the bottom. The Doppler shift of the seabed echo provides the vehicle's velocity relative to the ground in three dimensions, without requiring GPS (which does not work underwater).

A typical DVL uses four beams at 30 degrees from the vehicle's vertical. By measuring the [[delta_f]] of all four echoes and geometrically combining the four radial velocity components, the complete three-dimensional vehicle velocity vector is obtained with centimetre-per-second precision. This system is the main autonomous navigation instrument for AUVs used in deep-ocean exploration.

Dominant variable: the Doppler shift [[delta_f]] of the echoes from the DVL's four beams, which when geometrically combined give the vehicle's velocity relative to the seabed.
Validity limit: the DVL requires seabed echoes strong enough to detect. At great depths (above 1000 m for typical DVLs), echoes attenuate too much and the DVL loses the bottom signal, having to fall back to water-mass velocity measurement (water-tracking mode, with lower precision).

---

## 5. Doppler velocimetry in astrometry and cosmology

The Doppler shift of stellar spectral lines was historically the first application of the Doppler effect beyond sound. When a star recedes from Earth, its spectral lines shift toward the red (redshift); when it approaches, toward the blue (blueshift). By measuring the [[delta_f]] of a known spectral line, astronomers calculate the star's radial velocity with precision of metres per second.

This technique enabled the discovery of the first extrasolar planets via the radial velocity method: an orbiting planet causes its star to wobble slightly, producing a periodic [[delta_f]] detectable in spectral lines. The cosmological extension of the Doppler effect is the cosmological redshift of distant galaxies, which Hubble used in 1929 to demonstrate that the universe is expanding. However, cosmological redshift is technically different from Doppler: it is not caused by source motion through space, but by the expansion of space itself between the galaxy and the observer.

Dominant variable: the frequency shift [[delta_f]] of spectral lines, which for typical stellar radial velocities (tens of km/s) produces shifts on the order of parts per million of [[f_fuente]], measurable with high-resolution spectrographs.
Validity limit: for radial velocities above 10% of the speed of light, the classical Doppler formula produces errors above 1% and the relativistic Doppler formula must be used. For cosmological redshifts of distant galaxies (z above 0.1), the classical Doppler formula is not valid: the Friedmann-Robertson-Walker metric of relativistic cosmology must be used.
