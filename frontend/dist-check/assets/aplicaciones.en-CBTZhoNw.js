const e=`## 1. Vibrating strings

On a tense string, a transverse wave is the first visible application. The pulse advances along the string, but each point of the string moves sideways. The dominant magnitude is [[u_perp]], because the disturbance is read perpendicular to advance.

Dominant variable: [[u_perp]], because it identifies local motion perpendicular to propagation.

Validity limit: the string must be sufficiently tense and the displacement should be small compared with the observed length. If motion becomes chaotic or torsional modes appear, simple classification becomes unclear.

This application separates two ideas. The wave transports energy and shape, but it does not carry the whole string forward. A mark on the string oscillates around its position while the pulse travels. Therefore a lateral camera can measure [[u_perp]] and estimate [[C_T]].

It also helps discuss polarization. If the string can vibrate in several planes, the direction of [[u_perp]] may change while the wave remains transverse. Classification is preserved because comparison is made relative to advance, not to the laboratory floor.

This matters in demonstrations with ropes, guitar strings, and elastic bands. The visible plane of vibration can rotate, but the diagnostic question remains the same: whether local motion is normal to the travelling disturbance.

## 2. Sound in air

Sound in air is the everyday example of a longitudinal wave. The disturbance is not a visible height, but compressions and rarefactions advancing through the medium. The dominant magnitude is [[u_parallel]], because local air motion is parallel to wave advance.

Dominant variable: [[u_parallel]], because compressions align with the propagation direction.

Validity limit: air must behave as a continuous medium and pressure variations should not be so large that shocks appear. In ordinary sound, the longitudinal reading is very robust.

This application corrects a visual intuition. The absence of a visible crest does not mean there is no wave. A microphone detects variable pressure, and that variation is the sign of a longitudinal disturbance. The index [[C_L]] helps translate that idea into component language.

In a tube, this reading explains acoustic resonances without drawing an imaginary string. The relevant maxima and minima may be pressure or parallel displacement, not visible transverse height.

It also guides measurement choice. A slow-motion camera may show little useful information, while a microphone immediately reveals the longitudinal oscillation through pressure variation.

## 3. Seismic waves

In seismology, longitudinal and transverse waves appear in the same planet. Primary waves compress and dilate material along the propagation direction; secondary waves displace material transversely. The difference helps infer internal properties of Earth.

Dominant variable: comparison between [[C_T]] and [[C_L]], because the diagnosis is made by identifying which component propagates.

Validity limit: Earth is heterogeneous, so local classification may change with depth and composition. Even so, the component distinction remains essential for interpreting records.

The fact that some transverse waves do not cross fluids helps infer internal layers. This application shows that classification is not merely school vocabulary: it connects directly with real measurements of Earth interior.

In a seismic record, arrival times are not enough. The form of ground motion also informs the wave type and the material crossed. Disturbance orientation becomes geophysical data.

This is why seismometers record components of motion, not merely the instant of shaking. Directional information helps separate wave families.

## 4. Springs

A spring can produce both types in a controlled way. If it is shaken sideways, [[u_perp]] dominates. If it is compressed and released, [[u_parallel]] dominates. The same laboratory object shows that wave type depends on excitation, not only on the object.

Dominant variable: [[A]], because it acts as common scale for comparing the two components.

Validity limit: deformations should be small so that the spring responds regularly. If coils collide or twist, modes appear that do not fit a pure classification.

In class, this setup is useful because it forces students to fix the advance direction first. Then they can decide whether local displacement is perpendicular or parallel. Visual comparison becomes a physical reading.

The spring also shows that the medium alone does not determine one label forever. Lateral excitation or initial compression selects different modes, and that selection appears in the relative values of [[C_T]] and [[C_L]].

Students can repeat the experiment with the same spring and obtain different classifications, which makes the role of excitation physically concrete.

## 5. Sensor design

Classifying a wave decides which sensor should be used. For a transverse wave on a string, a camera or lateral position sensor may be enough. For a longitudinal wave in air, a microphone, pressure sensor, or method that reads compressions is needed.

Dominant variable: the component to be measured, [[u_perp]] or [[u_parallel]], because each sensor responds to a different disturbance orientation.

Validity limit: the sensor must be aligned with the relevant physical magnitude. A poorly chosen lateral sensor may not detect a longitudinal wave well even if the wave is intense.

This application connects the concept with experimental practice. The point is not only to name the wave type, but to decide which magnitude to observe. Correct classification avoids building an experiment that looks in the wrong direction.

In quality control or instrumentation, this decision avoids costly mistakes. A sensor measuring transverse position may record very little in an intense longitudinal wave, while a pressure sensor may ignore part of a transverse mode.

The practical rule is therefore simple: choose the sensor after identifying the component, not before. The classification determines the measurement channel.
`;export{e as default};
