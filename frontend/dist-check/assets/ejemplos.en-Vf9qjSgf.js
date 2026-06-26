const e=`# Examples of Longitudinal Waves

# Exam-type example

## Problem statement
A high-precision ultrasonic transducer submerged in distilled water ([[[[rho]]]] = 1000  kg/m^3, [[B]] = 2.2 x 10^9  Pa) is used to detect microscopic imperfections in a ship's hull. The device emits a pure harmonic longitudinal wave with a fixed frequency [[f]] = 1  MHz (10^6  Hz). It is recorded that the maximum acoustic pressure amplitude generated at the emission source is [[p_hat]] = 50  kPa (5 x 10^4  Pa). Considering that the medium behaves as an ideal fluid and that propagation is adiabatic due to the high frequency of the oscillation which causes the prevention of heat flow between compression zones, determine in detail:
1. The propagation speed [[c]] of sound in this specific medium under the given conditions.
2. The wavelength [[lambda]] of the emitted signal, which defines the detection system's resolution.
3. The wave number [[k]] (spatial periodicity) and the angular frequency [[omega]] (temporal periodicity) of the wave.
4. The displacement amplitude [[s_hat]] of the water molecules during the wave's passage.
5. The sound intensity I of the wave at the emission point, considering the energy flow per unit area.

## Data
- Water density [[rho]] = 1000  kg/m^3.
- Bulk modulus [[B]] = 2.2 x 10^9  Pa.
- Frequency [[f]] = 1 x 10^6  Hz.
- Pressure amplitude [[p_hat]] = 5 x 10^4  Pa.

## System definition
The system is defined as a homogeneous and isotropic volume of distilled water. A region far from the walls (far field) is analyzed where the wave can be approximated as a progressive plane wave. The system is in thermal and mechanical equilibrium before the disturbance arrives, and we neglect any gravitational effects or depth-related pressure gradients for this local analysis. The fluid is treated as a linear elastic continuum, which is the causal foundation for simple acoustic wave theory.

## Physical model
The **Linear Acoustic Model** is used. This model uses the dynamic relation of the medium to determine speed from [[B]] and [[rho]]. It also uses the pressure-displacement constitutive relation to link [[p_hat]] with [[s_hat]]. The cause for this approach is that the medium reacts elastically to volume compressions, converting particle movement into local pressure variations proportionally. The effect of this is a stable propagation of the mechanical disturbance. The linearity assumption is key here, implying that the properties of the medium do not change significantly due to the presence of the wave itself.

## Model justification
The use of linear acoustics is fully justified since the generated pressure amplitude (50  kPa) represents only 0.002% of the water bulk modulus (2.2  GPa). This is because the cause of the disturbance is weak enough that the strains are extremely small, well within the elastic limit. Furthermore, at a frequency of 1  MHz, the resulting wavelength is much larger than the distance between water molecules (aprox. 0.3  nm), which validates the continuous medium hypothesis. The process is considered adiabatic because the frequency is so high that heat fluctuations do not have time to dissipate through conduction, which causes the energy to remain localized in the wavefront.

## Symbolic solution
Propagation speed is obtained with the medium-speed relation.

{{f:velocidad_fluido}}

Wavelength is then obtained with the fundamental propagation relation.

{{f:onda_fundamental}}

The phase constants come from the spatial and temporal periodicity of the wave.

{{f:numero_onda_def}}

{{f:omega_def}}

The molecular displacement amplitude is determined from the pressure-displacement relation.

{{f:relacion_amplitudes}}

Intensity is estimated as energy transport per unit area; it is kept as a derived reading rather than a nuclear formula of the leaf.

## Numerical substitution
1. With [[B]] = 2.2 times 10^9 Pa and [[rho]] = 1000 kg/m^3, the propagation speed is [[c]] = 1483.24 m/s. This speed is a direct effect of water's high stiffness.
2. For [[f]] = 1 MHz, the wavelength is [[lambda]] = 1.483 mm. This millimetric scale follows from the high source frequency and the medium speed.
3. The spatial periodicity gives [[k]] = 4236.4 rad/m and the temporal periodicity gives [[omega]] = 6.283 times 10^6 rad/s.
4. The resulting displacement amplitude is [[s_hat]] = 5.36 nm, a nanometric value consistent with water's resistance to compression.
5. The estimated intensity is 842.7 W/m^2, showing a high-energy wave even though the molecular displacement is very small.

## Dimensional validation
- Speed: pressure divided by density has the dimension of speed squared; its square root gives m/s.
- Displacement amplitude: pressure divided by stiffness times wave number leaves a length.
- Intensity: energy transport per area and time is expressed in W/m^2.

## Physical interpretation
The result obtained for [[c]] aprox. 1483  m/s **means** that the propagation speed is a consequence of the elastic properties of water. The millimeter wavelength (1.48  mm) **indicates** a physical limit on the sensor's resolution: it will not be able to detect cracks much smaller than this size due to diffraction effects. A striking result is the displacement amplitude of only 5  nanometers. The physical cause for this is the incredible volumetric stiffness of water. The effect is that energy is transmitted predominantly as pressure variations rather than bulk movement. This happens because intermolecular bonds in liquids are very rigid. The relationship between cause (transducer force) and effect (fluid response) defines the entire acoustic scenario.

---

# Real-world example

## Context
**Doppler Ultrasound and Blood Flowmetry:** In clinical medicine, studying longitudinal waves is the primary cause for our ability to non-invasively measure blood flow velocity in arteries. Ultrasound waves are emitted, and the Doppler effect causes a shift in the reflected frequency.

## Physical estimation
If we consider an ultrasound machine operating at 5  MHz in tissues with density [[rho]] = 1060  kg/m^3 and modulus [[B]] = 2.15 x 10^9  Pa, we **estimate** quantitatively that the speed of sound will be approximately 1424  m/s. For a blood flow velocity of 0.5  m/s moving away from the probe, the Doppler frequency shift will be:
frequency shift = 2 [[f]] (v/[[c]]) cos theta aprox. 3511  Hz.
This **order of magnitude** of a few kilohertz is what allows the equipment to process the signal electronically and audibly.

## Interpretation
This frequency difference of 3.5  kHz **means** that the Doppler effect falls in the audible range, which is a fortunate effect of biological scales. The reason this is useful is that it allows doctors to hear the heart. The result **indicates** that any error in the result is usually an unexpected variation in [[c]] due to changes in tissue stiffness. Due to the fact that ultrasound interacts mechanically with the medium, it is the perfect diagnostic tool.

## Safety and Standards
When using ultrasound, intensity must be kept below safety thresholds. The reason we monitor the Thermal Index (TI) is to prevent damage caused by heat dissipation. This happens because sound energy eventually transforms into thermal energy. Our calculated intensity (842.7  W/m^2) is safe for industrial testing but must be managed in clinical settings.`;export{e as default};
