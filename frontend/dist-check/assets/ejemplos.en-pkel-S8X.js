const e=`# Exam-type example: Underwater Sonar Analysis\r
\r
## Problem statement\r
A cutting-edge oceanographic vessel uses a SONAR system to map the seabed in a region of the North Atlantic. The system emits a periodic sound pulse with a frequency [[f]] of 1200 Hz. At the point of emission, seawater conditions have been precisely measured, showing a density [[rho]] of 1028 kg/m^3 and an adiabatic bulk modulus [[B]] of 2.31 x 10^9 Pa.\r
\r
The acoustic engineering team is requested to perform the following technical analysis:\r
1.  **Phase speed calculation**: Determine the speed [[c]] at which the pulse propagates through water under these specific conditions.\r
2.  **Spatial scale analysis**: Calculate the wavelength [[lambda]] of the disturbance underwater.\r
3.  **Comparative study**: If the ship were to surface and emit the same 1200 Hz tone in the air (air [[[[c]]]] ~ 343 m/s), determine the new wavelength and provide a deep physical justification as to why sound changes its spatial dimensions when changing media, while keeping its frequency constant.\r
\r
## Data\r
- Source frequency [[f]]: 1200 Hz.\r
- Liquid medium density [[rho]]: 1028 kg/m^3.\r
- Bulk modulus [[B]]: 2.31 x 10^9 Pa.\r
- Reference speed in air: air [[[[c]]]] = 343 m/s.\r
\r
## System definition\r
The physical system consists of the propagation of a longitudinal mechanical wave in a compressible fluid (salt water). It is assumed that the water behaves as a linear, homogeneous, and isotropic medium in the pressure range emitted by the sonar. The emission focus is considered point-like to simplify the traveling wave analysis.\r
\r
## Physical model\r
To solve this problem, we will use two fundamental models of physical acoustics:\r
1.  **Newton-Laplace Dynamic Model**: Used to determine propagation speed [[c]] from the intrinsic mechanical properties of the fluid: elasticity [[B]] and inertia [[rho]].\r
2.  **Periodic Wave Kinematic Model**: Used to relate phase speed [[c]] to temporal parameters (frequency [[f]]) and spatial parameters (wavelength [[lambda]]).\r
\r
## Model justification\r
We choose the formula\r
\r
{{f:sonido_compresible}}\r
\r
 because we have the volumetric stiffness and density data, which are the physical determinants of a pressure wave's speed. The use of the relationship\r
\r
{{f:onda_basica}}\r
\r
is justified by the periodic and harmonic nature of the signal emitted by the sonar transducer. Viscous attenuation is ignored as an initial phase analysis is requested.\r
\r
## Symbolic solution\r
1.  **Propagation speed**:\r
    The propagation speed is obtained from the Newton-Laplace relation already selected in the model.\r
\r
2.  **Wavelength in the medium**:\r
    The wavelength is obtained by isolating [[lambda]] in the basic wave relationship.\r
\r
3.  **Wavelength relationship between media (1=water, 2=air)**:\r
    For the same source frequency, the ratio between wavelengths in two media is the same as the ratio between their sound speeds.\r
\r
## Numerical substitution\r
1.  **Speed in water**:\r
    \r
    Substituting the water data gives [[c]] = 1499.03 m/s.\r
    \r
\r
2.  **Wavelength in water**:\r
    \r
    The underwater wavelength is [[lambda]] = 1.249 m.\r
    \r
\r
3.  **Wavelength in air**:\r
    \r
    The air wavelength is [[lambda]] = 0.286 m.\r
    \r
\r
## Dimensional validation\r
Dimensionally, pascal divided by density reduces to square meters per square second before taking the square root, so the result has units of speed.\r
The resulting unit is meters per second, which is consistent with speed. For wavelength: meters per second divided by inverse seconds gives meters, consistent with a length.\r
\r
## Physical interpretation\r
The analysis reveals that sound travels approximately 4.37 times faster in water than in air.\r
 This difference is caused by the fact that water, although about 800 times denser than air, is nearly 15,000 times harder to compress. Water's "stiffness" wins over its "heaviness," resulting in much more efficient mechanical information transmission. As a direct consequence of frequency [[f]] remaining constant (as it depends only on the source), wavelength [[lambda]] must stretch in water to compensate for the higher speed, resulting in a physically "longer" disturbance in space.\r
\r
# Real-world example\r
\r
## Context\r
In ultrasound diagnostic imaging, the ability to distinguish two small, close structures (spatial resolution) critically depends on the wavelength [[lambda]]. Doctors need to know the limit resolution to detect sub-millimeter anomalies in soft organs based on the relationship\r
\r
{{f:onda_basica}}\r
\r
.\r
\r
## Physical estimation\r
Consider typical liver tissue with a bulk modulus [[B]] ~ 2.25 x 10^9 Pa and a density [[rho]] ~ 1050 kg/m^3. The ultrasound machine operates at a frequency of 5 MHz (5 x 10^6 Hz).\r
\r
1.  **Speed in tissue**: Applying the dynamic relationship, we obtain an approximate speed of 1464 m/s. This value is fundamental as the equipment's software uses it to convert echo arrival time into a spatial position on the screen.\r
2.  **Resolution calculation**: The theoretical maximum resolution is on the order of one wavelength. The wave relation gives [[lambda]] = 0.29 mm for this frequency.\r
\r
## Interpretation\r
This calculation **indicates** that the doctor can detect cysts or lesions of approximately 0.3 mm. If the same test were attempted with an audible sound of 1000 Hz, the wavelength would be 1.46 meters, making it impossible to see any internal structure of the human body. Therefore, high frequency is what **guarantees** diagnostic precision. However, higher frequencies have less penetration due to absorption, so the medical physicist must choose the optimal balance between resolution and study depth. This balance is the pillar of safety and effectiveness in modern radiology.`;export{e as default};
