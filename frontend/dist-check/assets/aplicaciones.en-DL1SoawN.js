const e=`## 1. Nuclear magnetic resonance (NMR/MRI)

Nuclear magnetic resonance is the most powerful medical imaging technique currently available. It uses an intense, homogeneous magnetic field [[B]] (typically between 1.5 T and 7 T in clinical scanners) to align the nuclear spins of hydrogen atoms in the human body. A radiofrequency pulse perturbs that alignment; as the nuclei relax, they emit radio signals that are captured and computationally reconstructed into three-dimensional images of soft tissues.

Image quality (spatial resolution and tissue contrast) depends directly on the intensity and homogeneity of [[B]]. A field less homogeneous than one part per million across the scanning volume produces visible artifacts in the image. Superconducting magnets maintain this homogeneity through currents flowing without resistance in niobium-titanium cooled by liquid helium.

Dominant variable: the magnetic field strength [[B]], which determines the Larmor precession frequency of nuclear spins and therefore the spectral and spatial resolution of the image.
Validity limit: the uniform-field model is valid in the central volume of the magnet; near the ends, deliberately designed field gradients encode the spatial position of the signals.

## 2. Direct-current electric motor

The DC electric motor converts electrical energy into mechanical energy via the magnetic Lorentz force. A multi-turn coil carrying current [[I]] is placed in a permanent magnetic field [[B]]. The force [[F_m]] on the active sides of the coil generates a torque that rotates the rotor. A commutator automatically reverses the current direction every half turn to keep the torque in the same rotation direction.

The maximum available torque is proportional to [[B]], [[I]], and the coil area. Increasing [[B]] with stronger magnets (neodymium-iron-boron in modern motors) reduces motor size and weight for the same power. Current electric vehicle motors use fields of 0.8 to 1.5 T and deliver torques of hundreds of N·m in volumes of tens of liters.

Dominant variable: the stator magnetic field [[B]], which scales directly with available torque and motor energy efficiency.
Validity limit: the uniform-field model between the magnet poles is valid for coil angles away from dead positions. For the complete motor dynamics, the variation of magnetic flux with rotor angle must be considered.

## 3. Mass spectrometer

The mass spectrometer exploits the dependence of a charged particle's radius of curvature on its mass-to-charge ratio in a known field [[B]]. Ions are accelerated through a known potential difference, enter a region with uniform [[B]] perpendicular to their velocity, and curve into semicircles with radius proportional to the square root of the mass-to-charge ratio. By measuring the impact position on a detector, that ratio is computed to parts-per-million precision.

The mass spectrometer is the most precise analytical tool for measuring atomic and molecular masses. It is used in forensic analysis, sports doping control, archaeological sample dating (carbon-14), and industrial analytical chemistry to identify unknown compounds.

Dominant variable: the magnetic field [[B]] in the curvature region, which determines the separation radius between ions of different mass-to-charge ratios and therefore the mass resolution of the instrument.
Validity limit: the uniform-field model in the curvature region is valid for ions with non-relativistic speeds (v < 0.1c). For very energetic ions such as those produced in accelerators, relativistic corrections are required.

## 4. Wien velocity selector

The Wien velocity selector combines an electric field and a magnetic field [[B]] perpendicular to each other and to the particle motion direction. Only particles with a specific velocity — the one for which the electric and magnetic forces exactly balance — pass through undeflected. All others are deflected and blocked.

This device selects particles with precise velocity regardless of their mass or charge, and is the first stage of many mass spectrometers and accelerators. It was also historically used to measure the electron charge-to-mass ratio in Thomson's experiments (1897).

Dominant variable: the magnetic field strength [[B]], which together with the applied electric field determines the selection velocity and the discriminating power of the filter.
Validity limit: the selector assumes [[B]] and the applied electric field are perfectly uniform in the selection volume. Field inhomogeneities above 0.1% broaden the transmitted velocity range and reduce selector resolution.

## 5. Magnetic shielding in sensitive facilities

High-sensitivity magnetometers, photomultiplier tubes, particle detectors, and certain metrology instruments must be operated in environments with magnetic fields reduced to nanotesla levels or below. This is achieved using shields made of high-relative-permeability materials (permalloy, mu-metal) that concentrate [[B]] field lines inside the shield material, diverting them from the cavity they enclose.

The shielding factor (ratio of exterior field to field inside the cavity) can exceed 10⁴ for well-designed multi-layer shields. The physical principle is that the high-permeability material offers a very low "magnetic resistance" (reluctance) path to field lines, which prefer to travel through the metal rather than through the air of the cavity.

Dominant variable: the residual magnetic field [[B]] inside the shielded cavity, which determines whether sensitive instruments can operate without distortions caused by the ambient magnetic field.
Validity limit: shielding is effective for static and low-frequency fields. For high-frequency fields, the skin effect reduces the effective permeability of the material and additional conducting layers are required to shield via eddy currents.
`;export{e as default};
