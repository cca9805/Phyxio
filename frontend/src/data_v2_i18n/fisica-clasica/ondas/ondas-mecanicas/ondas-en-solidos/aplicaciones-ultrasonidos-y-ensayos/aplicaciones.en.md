# Applications

## 1. Inspection of welds in nuclear plant pipework

In the nuclear industry, the integrity of welds in primary circuit pipework is a critical safety requirement. Welds frequently contain defects such as incomplete fusion, porosity, or solidification cracks that are not visible from the outside. Ultrasonic testing allows the full weld volume to be inspected from the outside of the pipe, complying with ASME Section XI without interrupting service.

The transducer is moved along the weld bead at a 45° angle so that the shear beam strikes the fusion interfaces frontally. [[v_us]] in shear for austenitic stainless steel is approximately 3100 m/s. Detection of a defect echo at [[t_vuelo]] less than the back-wall echo time indicates a discontinuity whose position is calculated as [[d_defecto]]. Amplitudes are compared with calibrated reference reflectors (flat-bottom holes) to evaluate defect extent.

Dominant variable: [[t_vuelo]] of the defect echo, which fixes the axial and depth location of any discontinuity in the weld zone.
Validity limit: the method assumes controlled oblique incidence; defects oriented parallel to the beam may produce very weak or absent echoes.

## 2. Thickness measurement in heat exchangers with single-face access

Heat exchangers in the chemical and petrochemical industry are subject to internal erosion-corrosion that reduces tube wall thickness. The internal face is inaccessible during operation; the technician can only place the transducer on the outer face. The back-wall echo method turns the ultrasound equipment into a high-precision thickness gauge.

With [[v_us]] of 5900 m/s for carbon steel, a tube of nominal 4 mm thickness produces a back echo at approximately 1.36 µs. If corrosion has reduced the thickness to 2.5 mm, the back echo appears at 0.85 µs. The [[t_vuelo]] difference of 0.51 µs corresponds to a thickness loss of 1.5 mm. Periodic monitoring of the back-wall [[t_vuelo]] allows corrosion rate curves to be drawn and predicts when the thickness will reach the minimum allowable value according to the design code.

Dominant variable: [[t_vuelo]] of the back-wall echo, whose temporal variation between inspection campaigns directly measures the thickness loss due to corrosion.
Validity limit: the axial resolution of the equipment limits detection of thicknesses below the wavelength; below 1 mm thickness, transducers above 15 MHz are required.

## 3. Quality control of forged parts in the aerospace industry

Forged parts for aircraft (turbine disks, wing spars, engine blocks) must be 100% inspected to ensure the absence of non-metallic inclusions, laminations, or forging laps that could initiate fatigue cracks in service. Immersion ultrasonic testing in water allows inspection to be automated with high repeatability.

The part is submerged in a water bath that acts as a low-[[impedancia_acustica]] coupling agent (1.5 MRayl versus 17 MRayl for aeronautical aluminium). The [[coeficiente_de_reflexion_acustica]] at the water-aluminium interface is approximately 0.84, implying transmission losses of around 29% in amplitude. Scanning is performed with 10 MHz transducers producing wavelengths of 0.6 mm in aluminium, sufficient to detect inclusions larger than 0.3 mm. [[d_defecto]] of each detected reflector is calculated with the time-of-flight formula using [[v_us]] of 6300 m/s for aeronautical aluminium.

Dominant variable: the ratio between the wavelength (determined by [[v_us]] and transducer frequency) and the minimum detectable defect size.
Validity limit: in zones of strong curvature or varying cross-section, the beam may not impinge perpendicularly on the defect, reducing the echo amplitude below the detection threshold.

## 4. Assessment of adhesive bonding in composite structures

In the aerospace and wind energy industries, carbon-fibre composites are joined to each other and to metal structures using structural adhesives. Partial disbonding (surface delamination defect) weakens the structure without any visible external signal. Ultrasonic testing detects these zones of absent or degraded adhesive.

The acoustic contrast between a well-bonded adhesive ([[impedancia_acustica]] of 2–3 MRayl) and the air of a disbond ([[impedancia_acustica]] of 400 Rayl) produces [[coeficiente_de_reflexion_acustica]] close to 1 in the disbond zone, compared to an [[coeficiente_de_reflexion_acustica]] of approximately 0.3 in the correctly bonded zone. The presence of a strong reflection at the [[t_vuelo]] corresponding to the adhesive-composite interface signals a disbond. The amplitude of the second interface echo (panel interior) disappears in disbond zones because energy is almost completely reflected at the first interface.

Dominant variable: [[coeficiente_de_reflexion_acustica]] at the adhesive-substrate interface, which determines whether the first-interface echo is high (disbond, [[coeficiente_de_reflexion_acustica]] close to 1) or low (correct bonding, low [[coeficiente_de_reflexion_acustica]]).
Validity limit: if the adhesive layer is thinner than half the wavelength, echoes from the two adhesive layer interfaces are not temporally resolved and the analysis requires spectral techniques.

## 5. Corrosion-under-insulation diagnosis in process pipework

High-temperature process pipework is covered with thermal insulation that prevents visual access to the metal surface. Under the insulation, wet corrosion (corrosion under insulation, CUI) can develop and thin the wall without being visible. Removing insulation for inspection is costly; long-range guided-wave ultrasonics allows inspection from the ends of insulated sections.

Low-frequency guided waves (between 20 and 100 kHz) propagate along the pipe with [[v_us]] depending on mode and diameter, travelling distances of up to 50 metres from the transducer. A localised wall thickness reduction acts as a reflector that modifies [[t_vuelo]] and [[coeficiente_de_reflexion_acustica]] of the received echo. Signal analysis allows estimating the axial [[d_defecto]] (the distance to the corroded point along the pipe) with a precision of approximately 1% of the travel distance.

Dominant variable: [[t_vuelo]] of the reflection echo from the corroded zone, giving the axial distance to the defect along the pipe axis.
Validity limit: the method loses sensitivity when the corroded zone length is less than 5% of the guided wavelength; furthermore, bends, valves, and supports reflect part of the energy and can mask defect echoes located beyond those obstacles.