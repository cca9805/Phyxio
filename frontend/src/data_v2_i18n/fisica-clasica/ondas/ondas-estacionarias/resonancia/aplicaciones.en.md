# Applications of resonance

## 1. Tuning of radio and television circuits

Radiofrequency receivers use LC resonant circuits to select the desired station among all electromagnetic signals arriving at the antenna. Each station transmits at a specific carrier frequency, and the receiver must tune its resonant circuit to that frequency to capture it efficiently.

The physical principle is that the LC circuit presents minimum impedance precisely at its natural frequency. When this frequency coincides with that of the desired station, current flows with maximum amplitude, while distant frequencies encounter high impedance and are attenuated. The quality factor of the circuit determines selectivity: high values allow separating stations very close in frequency, while low values capture a broader spectrum.

In traditional AM radios, the frequency range goes from 530 kHz to 1700 kHz, with typical separation of 10 kHz between stations. A circuit with quality factor of 50 provides sufficient selectivity to distinguish adjacent stations without requiring excessively precise tuning.

Dominant variable: The natural frequency of the LC circuit, determined by the inductance of the coil and the capacitance of the variable capacitor controlled by the tuning dial.

Validity limit: The ideal resonant circuit approximation fails when significant parasitic inductances or capacitances appear, typically at frequencies above 100 MHz where wiring effects and physical component layout modify the response.

## 2. Design of vibration isolators for machinery

Vibration isolation systems, used in industrial machinery, vehicles, and buildings, operate fundamentally through resonant principles. An effective isolator consists of a inertia-spring system whose natural frequency is deliberately designed well below the predominant excitation frequencies.

The physics of isolation is based on the fact that vibration transmissibility (ratio between transmitted amplitude and incident amplitude) depends strongly on the relationship between driving frequency and natural frequency. When the excitation frequency is significantly higher than that of the isolator, the inertial body cannot follow the base motion and vibrations are drastically attenuated.

The elastic supports of electric motors, automobile suspension systems, and anti-vibration bases of precision equipment use this principle. A 60 Hz machine mounted on 5 Hz isolators experiences vibration attenuation greater than ninety percent.

Dominant variable: The ratio between the machine's driving frequency and the natural frequency of the isolator system, which must be maintained above the square root of two to achieve effective attenuation.

Validity limit: The linear isolator model fails when the vibration amplitude is so large that the isolator reaches its mechanical stops, or when the driving frequency falls near the natural frequency of the isolator, producing amplification instead of attenuation.

## 3. Modal analysis in structural engineering

Structural modal analysis is a sophisticated application of mechanical resonance, used to determine the natural frequencies and vibration modes of bridges, buildings, wind turbines, and aircraft. Each continuous structure possesses infinite discrete natural frequencies, each associated with a specific deformation pattern (normal mode).

Engineers identify these frequencies through controlled excitation tests, applying periodic forces of variable frequency and measuring the response at multiple points. The response peaks reveal the natural frequencies, and the relative phases between sensors determine the associated modal shape.

This information is critical for designing structures that avoid resonance with environmental excitations. A bridge whose natural frequencies coincide with Karman vortex wind frequencies may experience dangerous oscillations. Modal design shifts these frequencies outside the dangerous range or incorporates dampers that reduce the resonant response.

Dominant variable: The natural frequency of each structural vibration mode, determined by the spatial distribution of inertia and stiffness of the constructive element.

Validity limit: Linear modal analysis fails when deformations are so large that the structure's stiffness changes significantly with amplitude (geometric nonlinear effects), typically in situations near collapse or in materials with plastic behavior.

## 4. Optical resonators and laser cavities

Optical resonant cavities, fundamental in lasers and high-precision instrumentation, are applications of electromagnetic resonance. Two facing mirrors form a resonator where certain light frequencies constructively amplify while others attenuate through destructive interference.

The optical resonance condition requires that the cavity length contain an integer number of half-wavelengths. This produces discrete longitudinal modes, separated in frequency by the speed of light divided by twice the cavity length. For a ten-centimeter cavity, the separation between modes is approximately 1.5 GHz.

Lasers use this resonance to select and amplify specific frequencies. The active medium (gas, solid, or semiconductor) provides gain, but only the resonant frequencies of the cavity achieve sustained oscillation. The quality factor of optical cavities, expressed as finesse, can reach values of hundreds of thousands, producing extremely pure monochromatic light.

In metrology, Fabry-Perot cavities are employed as frequency references and for measuring lengths with subnanometric precision. Resonant cavity interferometry allows detecting displacements on the order of ten to the minus eighteen meters.

Dominant variable: The optical cavity length, which determines the frequencies of the resonant longitudinal modes through the condition of constructive interference.

Validity limit: The ideal resonant cavity model fails when the mirrors present significant losses through transmission or absorption, or when the cavity length is comparable to the wavelength, where the plane wave approximation disappears.

## 5. Nuclear magnetic resonance spectroscopy

Nuclear magnetic resonance spectroscopy (NMR) is one of the most important applications of the resonance phenomenon in medical physics and chemistry. Atomic nuclei with magnetic moment (such as hydrogen) precess around external magnetic fields at a characteristic frequency called the Larmor frequency.

When electromagnetic radiation of frequency equal to the Larmor frequency is applied, the nuclei absorb energy and transition between spin states. Upon removing the excitation, the nuclei return to equilibrium emitting detectable electromagnetic signals. The exact resonance frequency depends on the chemical environment of the nucleus, allowing molecular structure identification.

Medical magnetic resonance imaging (MRI) equipment uses superconducting magnetic fields of several teslas, producing Larmor frequencies of tens to hundreds of megahertz. Field gradients allow spatially localizing the resonant signal, building detailed images of soft tissues without ionizing radiation.

The method's sensitivity allows detecting proton concentrations on the order of micromoles, making possible functional metabolic studies that observe cerebral blood flow in real time.

Dominant variable: The Larmor frequency, proportional to the product of the nuclear magnetic moment and the intensity of the applied external magnetic field.

Validity limit: The two-state nuclear magnetic resonance model fails when the magnetic field is so intense that higher-order quantum effects dominate, or when the interaction between neighboring nuclei significantly modifies the resonance frequency (spin-spin coupling in concentrated samples).
