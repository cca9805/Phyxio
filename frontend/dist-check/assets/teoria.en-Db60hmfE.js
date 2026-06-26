const e=`# Ultrasound and Testing Applications\r
\r
## Conceptual context\r
\r
Ultrasound is a mechanical pressure wave with frequencies far above human hearing. In non-destructive testing it is typically used between 0.5 MHz and 20 MHz in metals, producing wavelengths on the order of millimetres. That scale allows detection of internal discontinuities comparable to the wavelength and requires understanding how material response depends on acoustic impedance.\r
\r
The inspection method emits a pulse, records the echoes, and reads the time and amplitude information from internal interfaces. The leaf's central variables are [[v_us]] (propagation speed), [[t_vuelo]] (time of flight), [[d_defecto]] (defect depth), [[Z_ac]] (acoustic impedance), and [[R_ac]] (reflection coefficient). The material density [[rho_mat]] is also decisive in [[Z_ac]].\r
\r
## 🟢 Essential level\r
\r
In a pulse-echo ultrasonic test, the transducer sends a short impulse into the material. The pulse travels through the part, reaches a discontinuity, and returns as an echo. The strongest echo may correspond to a back wall or a defect. The travel time of the echo is [[t_vuelo]].\r
\r
The defect depth is obtained because the pulse travels twice: outward to the defect and back. Therefore, the real distance is half of the distance that a wave would travel at the material speed during [[t_vuelo]].\r
\r
The acoustic impedance [[Z_ac]] combines density [[rho_mat]] and speed [[v_us]]. If a defect is filled with air, the difference in [[Z_ac]] between the material and air is enormous, which produces a very intense echo. If the defect is filled with a similar material, the echo may be weak or absent.\r
\r
## 🔵 Formal level\r
\r
The main relationship of this leaf is:\r
\r
{{f:profundidad_defecto}}\r
\r
This equation shows how [[d_defecto]] depends on [[v_us]] and [[t_vuelo]] with a factor 2 for the round trip.\r
\r
The acoustic impedance of the medium is defined as:\r
\r
{{f:impedancia_acustica}}\r
\r
This equation shows that [[Z_ac]] increases if density [[rho_mat]] or speed [[v_us]] increase. In heavy metals, [[Z_ac]] is very high; in light liquids, it is much lower.\r
\r
The reflection coefficient at a normal interface is expressed as:\r
\r
{{f:coeficiente_reflexion}}\r
\r
If the impedances of the two media are equal, [[R_ac]] is zero and no reflected echo appears. If they differ greatly, [[R_ac]] approaches ±1 and the echo is intense. The sign of [[R_ac]] indicates whether the reflected wave changes phase.\r
\r
## 🔴 Structural level\r
\r
Practical decisions in an ultrasonic test depend on several factors:\r
- transducer frequency,\r
- type of coupling agent,\r
- wave mode (longitudinal or shear),\r
- defect geometry.\r
\r
Higher frequencies improve spatial resolution but increase attenuation and grain noise. Therefore, for fine defects in dense metals, high frequencies are chosen; for thick parts or noisy grain, lower frequencies are used.\r
\r
The coupling agent removes air between the transducer and the part. Air has a very low [[Z_ac]], so without a couplant almost all energy is reflected at the surface. With a good couplant, energy enters the material and internal echoes can be recorded.\r
\r
Longitudinal waves are the most common in volumetric testing of solids. Shear waves are useful for inclined cracks because they interact differently with defect orientation.\r
\r
The [[Z_ac]] and [[R_ac]] formulas are valid at normal incidence and for plane waves. In focused beams or rough surfaces, the effective reflection also depends on angle and scattering. In the presence of coatings or surface treatments, the linear model may fail.\r
\r
> [!WARNING]\r
> The transducer dead zone prevents detection of very shallow defects. A defect near the surface may not produce an echo separated from the entry pulse.\r
\r
> [!NOTE]\r
> In anisotropic materials such as composites, [[v_us]] and [[Z_ac]] vary with direction. This can shift the echo and alter the apparent depth if the correct [[v_us]] value is not used.\r
\r
## Deep physical interpretation\r
\r
The depth formula is simple, but its reliability depends on assumptions: homogeneous medium, constant [[v_us]], and temporally separated echoes. If the material has porosity or thermal gradients, local [[v_us]] changes and the calculated depth can be wrong.\r
\r
A visible defect echo means [[R_ac]] is not zero. However, [[R_ac]] does not directly inform depth; it informs echo amplitude. Depth comes from [[t_vuelo]] and [[v_us]], while [[R_ac]] provides information about the defect nature.\r
\r
A local variation in [[rho_mat]] alters [[Z_ac]] and modulates echo amplitude. Therefore, in corroded or composite parts, it is important to calibrate [[v_us]] with a reference sample of the same material and not use tabulated values without verification.\r
\r
## Order of magnitude\r
\r
In steel with [[v_us]] ≈ 5900 m/s, a 25 mm part produces a back-wall echo at about 8.5 µs. In water with [[v_us]] ≈ 1540 m/s, 50 mm produces an echo at about 65 µs.\r
\r
Typical impedances are: water 1.5 MRayl, aluminium 17 MRayl, steel 45 MRayl and air 400 Rayl. The difference between steel and air is so large that almost all energy is reflected at the air-metal surface.\r
\r
## Personalized resolution method\r
\r
For a real ultrasonic testing problem, first identify the defect type and the surrounding medium. Then choose the most certain variable: if [[v_us]] is accurately known, use it directly; if not, calculate it first with a reference block. In thickness testing, the reference variable is the back-wall echo time.\r
\r
The structured strategy is:\r
1. Calibrate [[v_us]] with a known material.\r
2. Measure the defect [[t_vuelo]].\r
3. Calculate [[d_defecto]] with the round-trip formula.\r
4. Compute [[Z_ac]] and assess [[R_ac]] to interpret echo amplitude.\r
5. Review consistency with geometry and physical context.\r
\r
## Special cases and extended example\r
\r
In welded parts, an inclined defect may produce a weak echo even if it has high contrast because the reflection is directed away from the transducer. In such cases, different angles or shear wave modes are used to inspect the weld.\r
\r
In coated parts, the first echo may correspond to the coating/part interface and mask internal echoes. Extended analysis compares echo times with the known coating thickness and adjusts the surface-layer speed.\r
\r
When grain noise is present inside the metal, the echo can appear diffuse. In that case, a lower-frequency transducer is used and the pulse shape is examined. If the echo preserves the original pulse form, it is more likely a real geometric reflector than noise.\r
\r
## Real student questions\r
\r
- Why is there a division by 2 in the depth formula? Because the wave travels to the defect and then back, making a round-trip distance.\r
\r
- What does [[R_ac]] close to 1 mean? That there is a very large impedance mismatch between the two media, producing an intense echo. A typical example is the steel-air interface.\r
\r
- Why does [[rho_mat]] matter if depth only depends on [[v_us]] and [[t_vuelo]]? Because [[rho_mat]] determines [[Z_ac]] and therefore echo intensity. Depth is calculated from [[v_us]] and [[t_vuelo]], but detectability depends on [[Z_ac]] and [[R_ac]].\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects to solid-wave physics, acoustics, and material mechanics. The definition of [[Z_ac]] is analogous to impedance in electrical circuits, where an impedance discontinuity produces reflection.\r
\r
It also relates to material elasticity, because [[v_us]] depends on elastic moduli and density. Thus, ultrasonic echo reading is a direct application of elasticity concepts and wave propagation.\r
\r
## Final synthesis\r
\r
Ultrasonic tests convert [[t_vuelo]] into [[d_defecto]] using [[v_us]]. Acoustic impedance [[Z_ac]] and reflection coefficient [[R_ac]] control which echoes are detectable and what information about defect type can be extracted.\r
\r
Calibration with a block of the same material reduces errors from variations in [[rho_mat]] and [[v_us]]. In real problems, these calculations must be complemented with pulse-shape observation and cross-validation between multiple measurements to discriminate defects, inclusions, and material fluctuations.\r
`;export{e as default};
