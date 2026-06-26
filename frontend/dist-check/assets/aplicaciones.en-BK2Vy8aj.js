const e=`## 1. Mobile telecommunication antennas (4G/5G)

Latest generation mobile telephone base stations constantly emit electromagnetic radiation in the microwave band to transmit digital data packets to users' phones. The device's receiving antenna captures the incident electric field [[E0]] oscillation, inducing a microscopic alternating electrical current with the same frequency as the carrier wave, which is decoded by the terminal's microprocessor.

To model reception, we assume that the user is at a very large distance compared to the length of the emitting antenna, which allows us to simplify the wavefronts as perfect parallel planes with constant amplitudes and a clean linear polarization. This approximation facilitates the calculation of captured power depending on device orientation. This simplification is fundamental because at far-field distances, induction effects and multipolar distortions from the emitting antenna fade completely, leaving a pure and highly predictable plane electromagnetic wave. The efficiency of the mobile receiver depends on the correct alignment between its internal antenna and the direction of the electric field [[E0]] of the received wave.

- **Dominant variable**: frequency [[f]]
- **Validity limit**: radial distance of the device to the antenna greater than ten wavelengths (r > 10 [[lambda]]) to avoid the inductive and capacitive near-field region.

---

## 2. Radiotelescopes and microwave astrophysics

Astrophysicists use giant radiotelescopes formed by metal reflecting parabolas to capture extremely weak signals coming from cosmological sources, such as pulsars, interstellar molecular clouds, and the cosmic microwave background radiation. The detected electromagnetic perturbation travels through the absolute intergalactic vacuum, preserving its properties for billions of years.

In this analysis, the dominant hypothesis is that the interstellar space medium behaves as a perfect, non-dissipative vacuum without absorption, which allows us to exactly apply the speed of propagation [[c]] as an absolute universal constant and directly relate the source temperature to the detected energy. Since photons travel without colliding with matter across huge extensions of space, the phase and direction of propagation are preserved with extraordinary purity. This allows interferometric radiotelescopes to combine signals from different antennas located thousands of kilometers apart, recreating a virtual telescope the size of the Earth to study the nature of black holes.

- **Dominant variable**: wavelength [[lambda]]
- **Validity limit**: absence of terrestrial anthropogenic radio frequency interference (RFI) in the same observation frequency band and absence of dispersion by dense interstellar plasma.

---

## 3. Precision medical lasers

In dermatology and ophthalmology, surgeons use highly focused high-frequency laser beams to perform microscopic tissue ablation and corneal corrections with high precision. The light beam travels coherently and in a collimated manner through the outer air before striking the moist surface of the patient's eye or skin.

We assume that the focused laser beam at the focal point behaves as a local electromagnetic plane wave with a constant mean intensity [[I]] in the impact zone, neglecting the natural divergence of the beam at microscopic spatial scales and modeling the interaction with the tissue in a linear way. This plane approximation is extremely accurate because the impact area on the cornea (scarcely a few micrometers in diameter) is infinitesimal compared to the overall curvature radius of the focused beam. By evaluating the mean intensity [[I]], physicians can dose the exact energy to vaporize diseased cells without transferring damaging heat to the underlying healthy tissues.

- **Dominant variable**: mean intensity [[I]]
- **Validity limit**: beam intensity strictly below the threshold of spontaneous ionization and dielectric breakdown of the surrounding air (I < 10^15 W/m^2) to avoid the formation of disruptive plasmas.

---

## 4. Road traffic control radars

Highway radars emit continuous microwave pulses toward moving vehicles to measure their instantaneous speed through the frequency shift caused by the Doppler effect. The incident wave reflects off the metal body of the car and returns to the radar's receiving antenna with a frequency shift proportional to the speed of advance.

The central simplification is that the interaction occurs under dry, non-dispersive air conditions and that the car acts as a perfect mobile flat reflector, ignoring the complex three-dimensional scattering of the reflected signal to the sides of the road. This allows applying the classical laws of electromagnetic reflection on perfect conductors. The returned signal preserves enough temporal coherence for the radar's electronic detector to measure the infinitesimal frequency difference between the emitted and reflected wave, calculating the speed of the speeder in milliseconds with a margin of error of less than one percent.

- **Dominant variable**: frequency [[f]]
- **Validity limit**: alignment angle between the radar and the vehicle's path close to zero degrees to avoid speed underestimation errors.

---

## 5. Domestic microwave ovens

Microwave ovens heat food by emitting electromagnetic waves at a fixed frequency of 2.45 GHz inside a sealed metal cavity. The oscillating electric field [[E0]] exerts a continuous torque on the electric dipoles of the water molecules contained in the food, forcing them to rotate billions of times per second and generating heat by instant molecular friction.

We assume that the metallic cavity is a perfect electrical conductor that completely reflects the wave, creating a standing wave pattern with well-defined nodes and antinodes where energy is evenly distributed throughout the volume of the food. The energy transfer occurs dominantly through the dipolar electric coupling of liquid water, so the wave's penetration and the heating rate depend on the dielectric constant of the food. Understanding this mechanism allows designing suitable containers that do not absorb radiation and avoiding serious domestic accidents.

- **Dominant variable**: electric field amplitude [[E0]]
- **Validity limit**: mandatory presence of free moisture in the food; the absence of water or the introduction of sharp metals causes destructive electrical discharges and electric arcs in the cavity.
`;export{e as default};
