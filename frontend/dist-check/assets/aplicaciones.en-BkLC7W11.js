const e=`# Applications of Wave Energy

## 1. Sound transmission in auditoriums

The principles of wave energy transport are fundamental to the acoustic design of spaces. When a sound wave propagates from the stage toward the audience, energy distributes according to the room geometry. Wall materials act as sinks or reflectors of energy, modifying the power that reaches each listener.

In a well-designed auditorium, direct energy (arriving without reflections) must balance with reverberant energy (reflected) to create clarity without excessive dryness. The acoustic energy density in space determines the perceived sound pressure level. Absorbent materials such as foams or curtains reduce reflected energy density, while rigid surfaces maintain it.

Dominant variable: the acoustic energy density at the receiver position, which depends on source power, distance, and surface absorption coefficients.

Validity limit: when energy density is so high that air response ceases to be linear (sound pressures greater than 150 dB), or when frequencies are so low that wavelength is comparable to room dimensions, invalidating the diffuse field approximation.

## 2. Structural fault detection by ultrasound

Analysis of energy reflected by ultrasonic waves allows detection of cracks, inclusions, or delaminations in metallic and composite structures. A high-frequency ultrasonic wave (typically 1-10 MHz) is injected into the structure and the energy reflected by internal discontinuities is analyzed to locate defects.

The incident wave energy partitions into transmitted (continuing), reflected (returning), and dissipated (converted to heat by internal friction). In a healthy structure, most energy is transmitted. A crack perpendicular to the propagation direction reflects significantly more energy, creating a detectable echo.

Method sensitivity depends on how much energy returns to the transducer. Cracks smaller than the wavelength (typically < 0.1 mm for 10 MHz in steel) reflect energy proportional to the square of their area, making small defects detectable if incident energy is sufficient.

Dominant variable: the energy reflection coefficient at the discontinuity, which determines the fraction of incident power that returns to the detector.

Validity limit: when the structure is highly absorbent (polymeric materials with high internal damping) or when surface roughness is comparable to wavelength, scattering incident energy in an uncontrolled manner.

## 3. Fiber optic telecommunications

In optical fibers, electromagnetic wave (light) energy is confined in the fiber core by total internal reflection guidance. Transported power, typically milliwatts, attenuates exponentially with distance due to absorption and scattering, phenomena the ideal model does not consider.

Electromagnetic energy density in the core (proportional to the square of the electric field) must remain above a detection threshold at the receiver. For standard silica fibers, attenuation is approximately 0.2 dB/km in the 1550 nm window, equivalent to a 4.5% power loss per kilometer.

In modern optical communication systems, input power is typically limited to 1-10 mW to avoid nonlinear effects (self-phase modulation, four-wave mixing) that would distort the signal. At 100 km distance, with 20 dB attenuation, received power will be approximately 1/100 of transmitted power, requiring optical amplification (EDFA amplifiers) in long hauls.

Dominant variable: received optical power after link attenuation, which must exceed photodetector receiver sensitivity (typically -30 dBm for acceptable error rates).

Validity limit: when optical power is high enough to induce nonlinear effects in the refractive index of silica (approximately > 100 mW in standard single-mode fibers), or when distance is such that accumulated attenuation reduces signal below quantum noise level.

## 4. Wave energy harvesting

Wave energy conversion systems transform the kinetic and potential energy of ocean wave motion into electricity. An oscillating water column (OWC) device uses wave dynamic pressure to compress air in a chamber, extracting energy from the alternating flow.

Capturable power is physically limited by device width perpendicular to wave front and its ability to respond to marine spectrum frequencies. Resonant devices, designed to naturally oscillate at the dominant wave frequency of the site, can capture up to 50% of theoretical incident power.

In the North Atlantic, where specific power averages 50-70 kW/m, a 20 m wide device could theoretically access 1-1.4 MW. With practical capture factors of 20-30%, net power would be 200-400 kW.

Commercial viability depends on capacity factor: the percentage of time the device generates near its nominal power. At excellent sites, this factor can reach 25-35%, compared to 90%+ of conventional thermal power plants.

Dominant variable: device width intercepted to the wave front and its frequency response relative to local wave spectrum, which determine the fraction of ocean power converted to mechanical power.

Validity limit: when waves are so large (storms) that they exceed structural design stresses of the device, or so small that internal mechanical friction consumes more energy than captured from wave motion.

## 5. Focused ultrasound medical treatment

Concentration of ultrasonic energy at a focal point allows non-invasive treatments such as lithotripsy (kidney stone destruction) or ablation of tumoral tissue. A transducer emits high-power ultrasonic waves (tens of watts) that converge through acoustic lenses or curved emitter geometry.

At the focus, ultrasonic energy density can reach 10³-10⁴ W/cm², sufficient to generate cavitation (formation and collapse of vapor bubbles) that mechanically destroys target tissue without damaging intermediate tissues. Energy passes through skin and fat (which minimally absorb) to concentrate at the target.

Treatment planning requires calculating energy deposited in the focal volume (approximately an ellipsoid 1-3 mm in diameter) to reach temperatures of 56°C or higher that cause irreversible thermal coagulation. Accumulated energy dose determines the volume of tissue destroyed.

Dominant variable: the ultrasonic energy density at the focal point, which must exceed the threshold for cavitation or thermal ablation (typically > 1000 W/cm² for cavitation, > 50 W/cm² for accumulated thermal ablation).

Validity limit: when energy is so high that it causes non-thermal unwanted effects in intermediate tissues (for example, cavitation in skin during transit to a deep kidney stone), or when attenuation in dense tissues (bone) excessively diverts or absorbs energy before reaching the target.
`;export{e as default};
