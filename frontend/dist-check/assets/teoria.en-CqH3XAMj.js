const e=`# Longitudinal Waves in Fluids\r
\r
## Conceptual context\r
Sound is, in essence, the elastic response of matter to a pressure disturbance. In fluids, this response manifests exclusively through longitudinal waves, as the medium lacks the necessary stiffness to support transverse waves. Understanding longitudinal waves is understanding how energy is "pushed" through space via intermolecular collisions and forces at a microscopic scale that translates into macroscopic acoustic phenomena. This study constitutes the cornerstone of classical acoustics and has implications ranging from biological communication to advanced medical diagnostics and sonic exploration of oceanic depths.\r
\r
## 🟢 Essential level\r
A longitudinal wave occurs when medium particles oscillate in the same direction in which the wave travels. Imagine a line of people where each person gently pushes the one in front and then returns to their original place. That "push" travels through the entire line, even though no person permanently moves from their spot.\r
\r
In air, this creates zones of **compression** (where molecules are closer together and pressure is higher) and **rarefaction** (where they are further apart and pressure is lower). It is important to note that there is no "wind" traveling with the sound; the air coming out of a speaker does not reach your ear; only the energy of its motion does. This distinction between energy transport and matter transport is fundamental to understanding wave physics. Without it, it would be impossible to explain how sound can travel at thousands of kilometers per hour without physically displacing air masses at those speeds.\r
\r
**Key concepts:**\r
- **Propagation:** The movement of the disturbance or the "news" of the push through the medium.\r
- **Local oscillation:** The back-and-forth movement of molecules around a fixed equilibrium point.\r
- **Material medium:** Longitudinal waves need matter (gas, liquid, or solid) to exist, as they depend on collisions between particles.\r
- **Compression centers:** Points of maximum density where particles are most tightly packed.\r
- **Rarefaction centers:** Points of minimum density where particles move away from each other.\r
\r
## 🔵 Formal level\r
To mathematically describe this phenomenon, we define the displacement s(x, t) of a particle relative to its equilibrium. If the wave is harmonic and travels to the right:\r
\r
A harmonic longitudinal wave represents local particle displacement as an oscillation whose phase combines position and time.\r
\r
Where [[s_hat]] is the displacement amplitude, [[k]] is the wave number (2pi/[[[[lambda]]]]), and [[omega]] is the angular frequency (2pi [[f]]).\r
\r
Acoustic pressure p(x, t) is derived from the local volumetric deformation of the medium. Using the bulk modulus [[B]], it is shown that pressure is proportional to the negative gradient of displacement. This is because a negative displacement gradient indicates that particles are moving closer together, which increases pressure. By differentiating, we obtain:\r
\r
The acoustic pressure follows from the spatial compression of the displacement field and reaches its extrema where particles converge or separate most strongly.\r
\r
The pressure amplitude [[p_hat]] is related to the displacement by:\r

The formal description uses these operational relationships:

{{f:velocidad_fluido}}

{{f:onda_fundamental}}

{{f:numero_onda_def}}

{{f:omega_def}}

{{f:relacion_amplitudes}}\r
\r
**Phase Relationship:** Notice that displacement uses a cosine and pressure a sine. This implies a **90° phase shift (pi/2 radians)**. Physically, this means that at points where particles are at their maximum displacement position (oscillation ends), the pressure variation is zero (equilibrium pressure). Pressure is maximum where displacement is zero but particles are "converging" towards that point from both sides (maximum compression). This relationship is crucial for understanding how pressure sensors (microphones) pick up sound differently than a particle position sensor would.\r
\r
## 🔴 Structural level\r
The speed of these waves [[c]] is an intrinsic property of the balance between elasticity (restoring force) and density (resistance to motion or inertia). At a structural level, the longitudinal wave is a competition between the medium's ability to oppose a volume change and the inertia of its constituents:\r
\r
This dependence is the medium-speed relation already introduced in the formal level.\r
\r
This model assumes the fluid is a **continuous medium** and linearly elastic. In gases, the process is **adiabatic**: compressions are so fast that local heat exchange is negligible, so the adiabatic bulk modulus is used. The validity of this linear model holds as long as the pressure variations [[p_hat]] are small compared to the ambient atmospheric pressure. If amplitudes increase excessively, as in the case of explosions or supersonic aircraft, non-linear effects appear where the wave profile distorts until forming shock fronts, where linear acoustics laws no longer apply.\r
\r
Additionally, wave intensity depends quadratically on pressure amplitude and also on the inertial response of the medium. For constant sound intensity, a higher frequency [[f]] requires a smaller displacement amplitude [[s_hat]]. This explains why high-pitched sounds can be perceived clearly even with extremely small molecular motions.\r
\r
## Deep physical interpretation\r
A longitudinal wave is a dance of potential and kinetic energy on a macroscopic stage. When particles compress in a region, the medium stores elastic potential energy due to mutual repulsion between molecules forced closer together. Upon expansion, that potential energy converts into kinetic energy of the particles which, by gaining speed, push their neighbors, thus transferring momentum. The 90° phase shift between pressure and displacement is the mathematical signature of this continuous transfer: pressure (representing maximum potential energy) is maximum precisely where particle velocity (kinetic energy) is zero before changing direction. This energy exchange cycle is what allows the wave to propagate without net medium displacement.\r
\r
## Order of magnitude\r
To put these equations into perspective, let's consider typical values in our environment:\r
- **Speed in air (20^ grados C):** [[c]] aprox. 343  m/s (over 1200  km/h).\r
- **Speed in water:** [[c]] aprox. 1500  m/s, because water is much harder to compress than air (higher [[B]]).\r
- **Displacement [[s_hat]] for a normal conversation:** aprox. 10^-8  m. This is ten times smaller than the size of a common virus, demonstrating the incredible sensitivity of our auditory system.\r
- **Pressure variation [[p_hat]] for the pain threshold:** aprox. 30  Pa. It is amazing that a variation of only 0.03% relative to atmospheric pressure (101,325  Pa) is enough to cause physical pain in the human ear.\r
\r
## Personalized resolution method\r
When facing a longitudinal wave problem, follow these strategic steps:\r
1. **Identify the known state variable:** Does the problem provide pressure amplitude [[p_hat]] or displacement [[s_hat]]? Remember they are linked by the elastic modulus and wave number.\r
2. **Characterize the propagation medium:** Obtain [[c]] from [[B]] and [[rho]]. If the medium is an ideal gas, you often must use temperature and the adiabatic constant to find [[c]].\r
3. **Build space-time coherence:** Use the dispersion relation [[k]] = [[[[omega]]]]/[[c]] to ensure temporal frequency [[f]] and wavelength [[lambda]] are consistent.\r
4. **Validate the working regime:** Ensure amplitudes are consistent with the linear approximation. If [[s_hat]] turns out to be on the order of meters in a fluid, there is likely a calculation or model error.\r
5. **Unit conversion:** It is vital to work in the International System (Pascals, meters, seconds, kg) to avoid magnitude errors of 10 or more in the speed of sound.\r
\r
## Special cases and extended example\r
**The phenomenon of acoustic refraction:** When a sound wave passes from air to water (for example, the sound of a voice penetrating a swimming pool), its frequency [[f]] remains unchanged because it is dictated by the emitting source. However, as the speed [[c]] increases nearly five times, the wavelength [[lambda]] must increase in the same proportion to satisfy [[c]] = [[[[lambda]]]] [[f]]. This means the wave's spatial "shape" stretches enormously inside the water. Furthermore, due to the enormous impedance difference (acoustic impedance, density times sound speed) between air and water, most of the energy reflects at the surface, explaining why it is difficult to hear what happens outside the pool while submerged.\r
\r
## Real student questions\r
- **Why doesn't sound travel in a vacuum?** Because longitudinal waves are mechanical waves that depend on physical interaction (collisions) between particles. Without particles, there is nothing to compress and nothing to transmit the restoring force.\r
- **Does humidity affect the speed of sound?** Yes. Contrary to intuition, humid air is less dense than dry air (H_2O molecules are lighter than N_2 or O_2). As density [[rho]] decreases, speed [[c]] increases slightly.\r
- **Is wave speed the same as particle speed?** No. Wave speed [[c]] is the speed of the "news" or disturbance. Particle speed is the instantaneous velocity of its local oscillation, which is usually orders of magnitude smaller than [[c]].\r
\r
## Cross-cutting connections and study paths\r
- **Seismology:** P-waves (Primary) are the first to arrive after an earthquake because they are high-speed longitudinal waves.\r
- **Medicine:** Ultrasound and industrial ultrasound are based on the reflection and transmission of these waves to "see" through opaque materials.\r
- **Thermodynamics:** Determining the speed of sound is a standard technique for measuring the heat capacity of unknown gases.\r
- **Architectural Acoustics:** Theater design seeks to control the path of these waves to avoid destructive interference that "blurs" the sound.\r
\r
## Final synthesis\r
Longitudinal waves represent the fundamental mode in which fluid matter communicates its mechanical state changes at a distance. They are the result of a dynamic balance between mass inertia and medium elasticity. Without them, the universe would be a silent and uncommunicative place at a mechanical level, depriving us of the ability to perceive the environment through sound and countless technologies that today define our civilization.`;export{e as default};
