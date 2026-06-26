const e=`## 1. Design of welded joints in gas transport pipelines

In high-pressure gas pipelines, welds must transmit ultrasonic inspection vibrations without generating false echoes. If the weld has a mechanical impedance very different from the pipe (due to porosity, slag inclusions or microstructure changes), reflections appear that mask real defects. The welding engineer optimises process parameters (current, speed, shielding gas) so that the fused zone has density and elastic modulus close to the base material, minimising [[Z_mec]] contrast.

Inspection is performed by launching longitudinal waves through the pipe wall. The back-wall echo provides the amplitude reference; any intermediate echo indicates a discontinuity. Echo amplitude depends on the [[R_Z]] contrast between matrix and defect.

Variable dominante: [[Z_mec]] of the weld bead relative to base material.
Validity limit: the simple impedance model fails if the weld is of thickness comparable to the wavelength (typically < 1 mm at 5 MHz), where layer models are needed.

## 2. Vibration isolation in industrial rotating machinery

Rotating machines (motors, compressors, turbines) generate vibrations transmitted to the foundation and building. To isolate, low mechanical impedance elastomeric materials are interposed between machine and structure. The physical principle is to maximise [[R_Z]] at the metal-elastomer interface: since rubber has [[Z_mec]] several orders of magnitude lower than steel, most vibratory energy reflects and remains confined in the machine.

Isolator design requires choosing the correct stiffness (which fixes [[c_s]] of the elastomer) and cross-section ([[A_sec]]) so that the resonance frequency of the assembly falls below the excitation frequency. A common error is designing the isolator only by static criteria (load/deflection) without verifying impedance contrast at the dominant frequency.

Variable dominante: [[R_Z]] at the machine-elastomeric support interface.
Validity limit: if excitation frequency coincides with isolator resonance, the simple impedance model does not apply and the complete dynamic transfer function is needed.

## 3. Quality control of cast parts by mechanical resonance

In precision casting (automotive, aerospace), parts must have uniform elastic properties. The resonant ultrasound spectroscopy (RUS) technique excites the part and measures its resonance frequencies. These frequencies depend on the material's mechanical impedance (through ρ and c) and geometry. Comparing measured frequencies with those predicted for a defect-free part, internal porosities, segregations or cracks that locally alter [[Z_mec]] are detected.

A part with 2% internal porosity reduces its effective density and slightly increases its velocity (modulus drops less than density). The net effect is a [[Z_mec]] reduction of about 3-5%, which shifts resonance frequencies measurably.

Variable dominante: global [[Z_mec]] of the part relative to the nominal value of sound material.
Validity limit: the method requires known geometry and free boundary conditions; if the part is clamped or has very complex shape, the analytical model fails and finite element simulation is needed.

## 4. Acoustic coupling in medical ultrasound

In ultrasound imaging, the piezoelectric transducer must transmit waves to soft tissue (specific impedance ≈ 1.5 MRayl) from a crystal with much higher impedance (≈ 30 MRayl). Without matching layer, [[R_Z]] ≈ 0.90 and only 19% of power would be transmitted. With a quarter-wavelength layer whose impedance is √(30 × 1.5) ≈ 6.7 MRayl, reflection theoretically drops to zero.

Coupling gel eliminates the air layer (practically zero impedance) between transducer and skin, which would otherwise produce total reflection. The design of matching layers in the ultrasound probe is a direct exercise in [[Z_mec]] optimisation to maximise [[T_Z]] over the working bandwidth (2-15 MHz depending on application).

Variable dominante: [[T_Z]] between piezoelectric crystal and biological tissue.
Validity limit: at very high frequencies (> 20 MHz), attenuation in the matching layer and tissue dominates over reflection, and design must jointly optimise transmission and losses.

## 5. Design of acoustic metamaterials for vibration filtering

Acoustic metamaterials are periodic structures designed to create bandgaps: frequency ranges where waves cannot propagate. The fundamental mechanism is multiple reflection at interfaces with periodic [[Z_mec]] contrast. Alternating layers of high and low impedance with quarter-wavelength thicknesses creates mechanical Bragg mirrors that reflect 100% of energy in the design band.

Design requires selecting materials with impedance ratio Z_high/Z_low as large as possible (typically > 5) and calculating thicknesses to centre the bandgap at the target frequency. A phononic crystal of 10 alternating steel/rubber layers can attenuate more than 40 dB over a 30% bandwidth around the centre frequency. Recent applications include seismic isolation foundations for sensitive buildings, where periodic concrete-rubber stacks create bandgaps at the dominant seismic frequency range of 1 to 10 Hz. The principle of impedance contrast applies identically from nanometric semiconductor superlattices controlling heat flow to metre-scale civil engineering structures controlling ground vibrations.

Variable dominante: ratio Z_high/Z_low that determines bandgap width and depth.
Validity limit: the flat layer model fails when inclusion dimensions are comparable to wavelength in all three directions; in that case full three-dimensional scattering models are needed for accurate predictions.
`;export{e as default};
