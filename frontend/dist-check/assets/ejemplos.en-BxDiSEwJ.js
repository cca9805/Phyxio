const e=`# Exam-type example\r
\r
## Problem statement\r
\r
An 80 mm thick steel plate is inspected with a contact ultrasonic transducer. The technician sends a pulse from the top surface and records the A-scan signal. An internal defect echo appears at half the time between the entry pulse and the back-wall echo. A calibrated steel block of 50 mm thickness is used to determine [[v_us]]. The objective is to calculate the defect depth and interpret the echo physically.\r
\r
The problem is representative of standard ultrasonic testing: the measured times must be converted into distance, and the physical meaning of the echo amplitude must be assessed.\r
\r
## Data\r
\r
- Calibration block thickness: 50 mm\r
- Back-wall echo time of the block: 16.95 µs\r
- Inspected plate thickness: 80 mm\r
- Back-wall echo time for the plate: 27.12 µs\r
- Defect echo position: half the time between entry and back-wall echo\r
\r
These data are typical in quality assurance tests. The calibration block provides a direct measurement of [[v_us]], while the inspected plate yields the actual flight time of the defect echo.\r
\r
The combination of a known calibration geometry and a measured defect echo is a classic approach in ultrasonic depth estimation.\r
\r
## System definition\r
\r
The inspected steel plate is treated as a homogeneous medium with a contact transducer at the top surface. The defect is assumed to be planar and parallel to the surface, so the echo path is axial and the flight time is twice the one-way depth.\r
\r
The calibration block and the test plate are both similar steel, which allows the use of the same material velocity [[v_us]] for depth estimation.\r
\r
## Physical model\r
\r
The physical model assumes that the ultrasonic wave travels through a homogeneous medium with constant speed [[v_us]] and that the defect acts as a normal-incidence discontinuity. The pulse makes a round trip to the defect, so the flight time [[t_vuelo]] corresponds to twice the one-way distance.\r
\r
Defect depth is described by:\r
\r
{{f:profundidad_defecto}}\r
\r
The acoustic impedance of the material is given by:\r
\r
{{f:impedancia_acustica}}\r
\r
The reflection coefficient at the defect interface is:\r
\r
{{f:coeficiente_reflexion}}\r
\r
## Model justification\r
\r
The model is suitable because the inspection uses a contact transducer and the incidence is approximately normal. The plate and the reference block are both steel, so [[rho_mat]] and [[v_us]] are comparable. That makes the depth calculation reliable.\r
\r
The inclusion of [[Z_ac]] and [[R_ac]] is essential for interpreting not only depth but also echo intensity. An air-filled defect produces a high [[R_ac]] and thus a strong echo, while a defect filled with material similar to steel produces a lower [[R_ac]] and a weaker echo.\r
\r
Furthermore, using the calibrated block avoids relying on tabulated values of [[v_us]] and [[rho_mat]], which can vary with alloy composition and heat treatment. This is a common source of error in ultrasonic testing.\r
\r
This justification also explains why the depth formula is valid for the defect echo: the echo corresponds to the first internal discontinuity at normal incidence, and the formula factors in the two-way travel time.\r
\r
## Symbolic solution\r
\r
From the calibrated block, the known thickness of 50 mm and the echo time of 16.95 µs allow calculation of [[v_us]].\r
\r
{{f:profundidad_defecto}}\r
\r
The reference block behaves as a back-wall reflector, and the known 50 mm depth yields a speed close to 5900 m/s.\r
\r
Then the defect echo time in the inspected plate is 13.56 µs. Substituting into the depth formula gives:\r
\r
- [[v_us]] = 5900 m/s\r
- defect [[t_vuelo]] = 13.56 µs\r
- calculated [[d_defecto]] = 40 mm\r
\r
## Numerical substitution\r
\r
Using the values above, the defect depth is calculated explicitly as:\r
\r
- [[v_us]] * [[t_vuelo]] / 2 = 5900 m/s * 13.56 µs / 2\r
\r
This substitution shows how time-of-flight translates into distance and confirms the 40 mm defect depth.\r
\r
It also makes explicit the dependence of [[d_defecto]] on both [[v_us]] and [[t_vuelo]].\r
\r
This symbolic solution follows the structure of the model and the previously introduced depth formula.\r
\r
Additionally, estimating [[Z_ac]] and [[R_ac]] helps interpret whether the defect echo corresponds to a strong acoustic contrast or a weaker inclusion.\r
\r
{{f:impedancia_acustica}}\r
\r
{{f:coeficiente_reflexion}}\r
\r
With [[rho_mat]] ≈ 7850 kg/m³ and [[v_us]] ≈ 5900 m/s, steel has high acoustic impedance, and the steel-air interface yields [[R_ac]] close to 1.\r
\r
The computed [[Z_ac]] is a key material parameter that describes how the wave energy couples into the steel from the transducer.\r
\r
## Dimensional validation\r
\r
- [[v_us]] has dimension [L T^{-1}].\r
- [[t_vuelo]] has dimension [T].\r
- The product [[v_us]] times [[t_vuelo]] has dimension [L].\r
- Dividing by 2 leaves dimension [L].\r
\r
The expression is dimensionally consistent and yields depth in metres.\r
\r
This check is necessary in ultrasonic problems because incorrect modeling of the round-trip time often leads to wrong units and wrong physical interpretation.\r
\r
## Physical interpretation\r
\r
The 40 mm depth places the defect in the mid-region of the plate, where bending and tensile stresses are maximal. This location has structural implications: a surface defect acts as a local stress concentrator, but a deep defect compromises global strength.\r
\r
Acoustically, the detectable echo (significant amplitude) combined with consistent flight time confirms a real discontinuity with high impedance contrast. If the defect were filled with material similar to steel (e.g., hard oxide inclusion), [[R_ac]] would be smaller and the echo weaker. The strong acoustic contrast suggests the defect is predominantly air or void.\r
\r
Calibration via the reference block is crucial: by calculating [[v_us]] from known data, velocity uncertainty is eliminated and [[d_defecto]] reflects material reality. Without calibration, any deviation of [[v_us]] from tabulated values produces systematic error in [[d_defecto]].\r
\r
From a causal physics perspective, the reflection coefficient [[R_ac]] measures acoustic resistance: if two media have very different impedance, the incident wave "sees" a barrier and most of it reflects. The phase of the reflected echo (positive or inverted) encodes which medium has higher impedance, information useful for defect classification.\r
\r
# Real-world example\r
\r
## Context\r
\r
This example fits within non-destructive testing for metal structures, where locating an internal defect without cutting the part is critical. The depth [[d_defecto]] gives the defect position relative to the inspected surface.\r
\r
Ultrasonic inspection of steel plates is common in industries such as shipbuilding, pipelines, and heavy machinery. The same reasoning applies when checking welds, rolled plates, or pressure vessels.\r
\r
The use of a calibration block and a separate inspection measurement is standard practice in industrial inspection procedures.\r
\r
## Physical estimation\r
\r
With [[rho_mat]] ≈ 7850 kg/m³ and [[v_us]] ≈ 5900 m/s, steel has high acoustic impedance. This means the steel-air interface has [[R_ac]] close to 1, producing a strong echo.\r
\r
The reflection coefficient depends on the impedance difference. For an air-steel defect, the contrast is maximal, so the defect echo is readily visible.\r
\r
This estimation allows a qualitative judgment of the defect type. If the observed echo amplitude had been much lower, a less contrasting inclusion or a different interface would be suspected.\r
\r
The physical estimation also highlights why [[Z_ac]] is useful: it connects density and speed into a single parameter that controls the echo strength.\r
\r
## Interpretation\r
\r
A 40 mm defect depth means the flaw is not superficial but still within the region accessible to pulse-echo inspection. Detecting the echo confirms sufficient impedance contrast.\r
\r
In practice, the calculated depth is compared with plate geometry and other possible reflections. A second measurement using a different transducer or angle can confirm whether the observed echo is from a real defect.\r
\r
This interpretation combines depth calculation with the core relations of acoustic impedance and reflection coefficient, which are central to understanding ultrasonic testing of solids.\r
\r
The result is a robust assessment: the depth corresponds to the defect echo, and the high impedance contrast explains why the echo is visible on the A-scan.\r
`;export{e as default};
