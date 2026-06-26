const e=`# Applications of Longitudinal Waves\r
\r
Longitudinal waves, especially in the form of sound and ultrasound, are fundamental tools in modern science, medicine, and industry. Their ability to travel through opaque media and carry information about the internal structure of materials makes them indispensable for today's technological civilization. As the only form of mechanical wave that can propagate in fluids, their study ranges from the microscale of blood capillaries to the planetary scale of the oceans.\r
\r
## 1. Medical Ultrasound (Diagnostic Imaging)\r
Ultrasound uses pulses of high-frequency longitudinal waves (ultrasound) that reflect off the interfaces between different body tissues. By measuring the return time of the echoes, the system builds a real-time image of internal organs. This technique is preferred in obstetrics and cardiology because it does not use ionizing radiation, making it safe for the fetus and for repetitive studies. Image resolution depends directly on the wavelength [[lambda]]; at higher frequencies, we obtain greater detail but lower penetration depth due to absorption.\r
- **Dominant variable:** The pressure amplitude [[p_hat]], the tissue's acoustic impedance (acoustic impedance, density times sound speed), and the frequency [[f]] that determines resolution.\r
- **Validity limit:** Frequencies in the range of 2-15 MHz; below this range, resolution is insufficient for medical purposes, and above, attenuation in human tissue is so high that the wave dissipates before reaching deep organs.\r
\r
## 2. SONAR and Underwater Exploration\r
SONAR (Sound Navigation and Ranging) emits longitudinal waves in water to detect objects or map the seafloor. Because light is quickly absorbed in the sea (the photic zone barely reaches 200 meters), sound is the only effective means of long-distance "vision" underwater. Modern side-scan SONAR systems can create three-dimensional maps of the seabed with astonishing precision, allowing for the location of shipwrecks, gas deposits, or monitoring marine life.\r
- **Dominant variable:** The propagation speed [[c]], which varies with temperature and salinity, and the emission power that determines range.\r
- **Validity limit:** The linear propagation model fails in the presence of massive bubbles (cavitation) or at the water surface, where density variations are extreme and medium compressibility ceases to be predictable using the standard bulk modulus [[B]].\r
\r
## 3. Non-Destructive Testing (NDT) in Engineering\r
In the aeronautical and civil industries, longitudinal waves are sent through metal parts, welds, or concrete beams to detect internal cracks, porosities, or manufacturing defects without destroying the part. Any discontinuity in the material causes a partial reflection of the wave. By analyzing the "Time of Flight" (ToF) of these reflections, engineers can certify the structural safety of an aircraft wing or a high-speed bridge.\r
- **Dominant variable:** The bulk modulus [[B]] and the density [[rho]] of the material, which define a healthy part's acoustic "signature."\r
- **Validity limit:** Valid as long as the defect size is comparable to or larger than the wavelength [[lambda]] used. In highly granular materials, such as some types of casting, wave scattering on metal grains can mask real defects.\r
\r
## 4. Seismology: P-Waves (Primary)\r
P-waves are the first longitudinal waves to travel through the Earth's interior after an earthquake. Being compression waves, they can travel through both solids (mantle) and liquids (outer core). Their study has allowed scientists to "X-ray" the planet's interior. The time difference between the arrival of the P-wave and the S-wave (transverse) allows for very precise location of the earthquake's epicenter. Furthermore, the change in P-wave speed when entering the Earth's core was key to discovering that the Earth's outer core is liquid.\r
- **Dominant variable:** The volumetric elasticity and density of geological layers at depths of thousands of kilometers.\r
- **Validity limit:** A linear elastic medium is assumed; the model fails in zones of extreme fracture or near the hypocenter, where deformations are plastic and not elastic.\r
\r
## 5. Architectural Acoustics and Space Design\r
Controlling longitudinal wave reflections in enclosed spaces is critical for speech intelligibility and music quality. In a theater or auditorium, surfaces are designed so that longitudinal waves are uniformly distributed without creating echoes or dead spots. Absorbent materials are used to manage wave energy, and diffusing materials to break flat wave fronts and create a diffuse and enveloping sound field.\r
- **Dominant variable:** The wavelength [[lambda]] in relation to the geometric dimensions of obstacles and the room.\r
- **Validity limit:** The ray acoustics (geometric) model is valid only for frequencies whose wavelengths are much smaller than the room's dimensions. For low frequencies (bass), the room behaves as a cavity resonator, requiring an eigenmode analysis.\r
\r
## 6. Ultrasonic Cleaning\r
In jewelry and industrial maintenance, parts are submerged in a fluid where high-intensity longitudinal waves are generated. Rapid pressure variations create millions of microbubbles that implode (controlled cavitation) against the part's surface, removing dirt even in the most microscopic gaps where a brush could not reach.\r
- **Dominant variable:** The pressure amplitude [[p_hat]] and the ultrasonic frequency.\r
- **Validity limit:** The part must be able to withstand the cavitation micro-shock waves without suffering surface erosion.`;export{e as default};
