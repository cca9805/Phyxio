const e=`# Applications: Introduction to waves in solids

## 1. Non-destructive ultrasonic testing

Ultrasonic inspection is the most direct industrial application of waves in solids. A piezoelectric transducer generates ultrasonic pulses (typically between 1 and 10 MHz) that propagate through the metallic part. When they encounter an internal defect (crack, pore, inclusion), part of the energy is reflected. By measuring the echo time of flight and knowing the material [[v_fase]], the depth and size of the defect are calculated with millimetre precision.

In the aerospace industry, every structural component of an aircraft is inspected by ultrasonics before entering service. Engine turbines, wing spars and landing gear are examined periodically. The wave velocity in titanium alloys (about 6100 m/s longitudinal) and aluminium (about 6300 m/s) allows resolving defects of 0.5 mm at 10 MHz frequencies, since wavelength [[lambda]] is about 0.6 mm.

Dominant variable: material [[v_fase]], which determines the achievable spatial resolution for a given frequency.
Validity limit: when defect size is smaller than wavelength, the echo weakens and detection becomes difficult. For submicron defects, frequencies above 100 MHz are needed.

## 2. Seismology and earthquake detection

Earthquakes generate mechanical waves that propagate through Earth's interior. P waves (longitudinal, faster, with velocities between 5000 and 13000 m/s depending on depth) arrive first at seismic stations. S waves (transverse, slower, between 3000 and 7000 m/s) arrive later. The time difference between both arrivals allows calculating the distance to the epicentre. Three or more stations give precise location.

The fact that S waves do not cross Earth's outer core (because it is liquid and [[G_mod]] is zero in fluids) was the definitive proof of its state of aggregation. This observation, made in the early twentieth century, demonstrated that waves in solids are not an academic curiosity but a diagnostic tool on a planetary scale.

Dominant variable: the velocity difference between P and S waves, which determines the temporal resolution of location.
Validity limit: in zones with strong heterogeneity (volcanoes, subduction zones), trajectories curve and the simple constant-velocity model fails. Three-dimensional tomographic models are needed.

## 3. Measurement of elastic constants of materials

Ultrasonic wave velocity provides a non-destructive method for measuring the elastic constants of a material. By measuring longitudinal and transverse [[v_fase]] in a sample, [[E_young]] and [[G_mod]] are obtained directly (and therefore Poisson's ratio). This method is more precise than conventional mechanical tests for brittle materials such as ceramics and glasses, where tensile specimens are difficult to fabricate.

In a characterisation laboratory, a ceramic sample of 10 mm thickness is examined with a pair of transducers (one for longitudinal waves and one for transverse waves). The measured velocities directly yield the elastic moduli without damaging the piece. Typical precision is 1%, superior to a conventional tensile test.

Dominant variable: precision in time-of-flight measurement, which translates directly into [[v_fase]] precision and therefore moduli precision.
Validity limit: if the material is anisotropic (carbon fibre composites, woods), measurements in multiple directions are needed to obtain the complete stiffness matrix (up to 21 independent constants).

## 4. Structural health monitoring

Structural health monitoring (SHM) systems use networks of piezoelectric transducers permanently bonded to the structure. One transducer emits ultrasonic pulses periodically and the others record received signals. If damage appears (fatigue crack, delamination, corrosion), signals change relative to the initial baseline.

In metal bridges, oil pipelines and aircraft fuselages, these systems detect damage in real time. Wave velocity and attenuation in the damaged zone differ from the healthy zone: a crack reduces local stiffness and modifies both [[v_fase]] and signal amplitudes. Networks of 20 to 50 sensors can cover a fuselage section of several square metres with centimetre resolution.

Dominant variable: changes in [[v_fase]] and attenuation between healthy and damaged states.
Validity limit: sensitivity depends on frequency and geometry. Very localised damage (smaller than wavelength) produces small changes difficult to distinguish from ambient noise and thermal variability.

## 5. Acoustic delay lines and signal processing

Waves in solids propagate much more slowly than electromagnetic waves (5000 m/s versus 300 000 000 m/s). This five-order-of-magnitude difference allows creating compact delay lines: an electrical signal is converted to an acoustic wave, travels through a crystal or metal bar, and is reconverted to an electrical signal with a controlled delay. A quartz crystal of 5 cm produces a delay of about 10 microseconds, which would require 3 km of electrical cable.

SAW (Surface Acoustic Wave) filters in mobile phones and television receivers use this principle with surface waves on piezoelectric substrates. They operate at frequencies from hundreds of MHz to several GHz and are essential in modern telecommunications. Typical Rayleigh wave velocities in these substrates (about 3000 m/s in quartz) determine device dimensions and operating frequency.

Dominant variable: [[v_fase]] in the substrate, which determines device dimensions for a given frequency.
Validity limit: at extremely high frequencies (above 10 GHz), wavelengths are smaller than crystalline structure dimensions and the continuum model ceases to be valid.
`;export{e as default};
