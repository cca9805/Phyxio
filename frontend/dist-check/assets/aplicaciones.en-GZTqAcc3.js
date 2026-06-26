const e=`## 1. Non-destructive testing by ultrasonics (pulse-echo)

The most widespread non-destructive inspection technique is based directly on the reflection of ultrasonic waves at internal interfaces. A transducer emits a short pulse that travels through the part. When it encounters a discontinuity (crack, pore, inclusion, or simply the back wall), part of the energy reflects and returns to the transducer as an echo. Echo amplitude depends on the impedance contrast at the discontinuity and the defect size relative to the wavelength.

The inspector measures the echo time of flight to determine the reflector depth, and the amplitude to estimate defect type and size. Calibration is performed with reference blocks containing reflectors of known size. Method sensitivity is maximum when impedance contrast is high (crack-type defect with air: nearly total reflection).

Dominant variable: [[R_E]] at the material-defect interface, which determines defect detectability.
Validity limit: the technique requires the wavelength to be comparable to or smaller than the defect size to produce a localised echo. Defects much smaller than the wavelength produce diffuse scattering and are difficult to detect with this method.

## 2. Diagnostic medical ultrasound

Ultrasound produces images of the human body interior by measuring reflections of ultrasonic waves at interfaces between tissues with different acoustic impedance. Interfaces between soft tissue and bone produce strong reflections; interfaces between similar soft tissues (liver-kidney, for example) produce weak but detectable reflections.

The equipment emits short pulses and records echoes over time. Each echo position is converted to depth and amplitude to image brightness. Axial resolution depends on pulse duration (typical frequencies 2 to 15 MHz). Coupling gel is used to eliminate the air layer between transducer and skin, which would produce nearly total reflection and block transmission.

Dominant variable: the contrast of [[Z_1]] and [[Z_2]] between adjacent tissues, which determines the visibility of each structure.
Validity limit: structures behind bone or air are practically invisible because reflection is nearly total. Penetration is limited by attenuation, which increases with frequency.

## 3. Reflection seismology and hydrocarbon exploration

Seismic exploration generates waves at the Earth surface (with explosives or mechanical vibrators) and records reflections produced by interfaces between geological layers with different impedance. Each impedance contrast produces an echo that allows reconstructing subsurface geometry.

Seismic processing stacks multiple records to improve signal-to-noise ratio and applies velocity corrections to convert travel times to real depths. The AVO technique analyses how reflection amplitude varies with incidence angle to infer elastic properties of rocks (porosity, fluid content, lithology).

Dominant variable: the impedance contrast between geological layers, which produces the reflections recorded at the surface.
Validity limit: vertical resolution is limited by the dominant wavelength (typically 30-100 m for exploration seismic waves). Layers thinner than a quarter wavelength do not produce individually distinguishable reflections.

## 4. Design of impedance-matching layers

In applications where energy transmission must be maximised between two media of very different impedances (for example, between a ceramic transducer and water), a layer is interposed whose impedance is the geometric mean of the two extreme impedances and whose thickness is a quarter wavelength. This layer produces destructive interference of reflections and maximises transmission.

The principle is analogous to anti-reflective coating in optics. Layer efficiency depends on thickness precision and impedance matching accuracy. In medical transducers, multiple stacked matching layers are used to cover a broader frequency range (broadband matching).

Dominant variable: [[T_E]] through the multilayer system, which is maximised when each layer satisfies the geometric mean impedance condition and quarter-wavelength thickness.
Validity limit: the design is optimal only at the design frequency. Away from that frequency, the quarter-wavelength condition is not met and transmission decreases. For broadband applications, multiple layers or impedance gradients are required.

## 5. Acoustic insulation in building construction

The design of walls and floors with high acoustic insulation exploits reflection at interfaces between materials with large impedance contrast. A single wall reflects part of incident sound; a double wall with an interposed air gap uses two high-contrast interfaces (dense material-air-dense material) to maximise total reflection and minimise transmission.

System performance depends on the impedance ratio at each interface, air gap thickness relative to wavelength and coincidence frequency (where plate stiffness allows resonant transmission that degrades insulation).

Dominant variable: the accumulated [[R_E]] at successive interfaces of the multilayer system, which determines total sound reduction.
Validity limit: at low frequencies, wavelength is much larger than wall thickness and insulation is poor (mass law). The flat reflection model ceases to be accurate when the wall has dimensions comparable to the wavelength (edge diffraction).
`;export{e as default};
