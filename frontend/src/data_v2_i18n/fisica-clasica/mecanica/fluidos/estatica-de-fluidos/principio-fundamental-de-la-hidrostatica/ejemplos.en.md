# Exam-type example

## Problem statement
A state-of-the-art oceanographic research submarine is conducting a critical seafloor mapping mission in the frigid waters of the Arctic. Initially, the vehicle is submerged in static equilibrium at a vertical elevation of [[z1]] es -500 m relative to mean sea level (used here as the surface reference level). After completing the first phase of data collection, the scientific team requests the captain to descend smoothly to a new working position located at an elevation of [[z2]] es -850 m. Knowing that the average seawater density in that area is [[rho]] es 1025 kg/m^3 due to salinity and low temperature, and that the absolute pressure measured by the hull sensors at the first position was [[p1]] es 5.12 x 10^6 Pa (already including the atmospheric effect), calculate with total precision the absolute pressure [[p2]] that the submarine's reinforced titanium hull must withstand at its new maximum depth elevation. Consider the gravitational acceleration as constant [[g]] es 9.81 m/s^2.

## Data
- Reference absolute pressure at initial elevation: [[p1]] es 5.12 x 10^6 Pa
- Volumetric fluid density (Arctic salt water): [[rho]] es 1025 kg/m^3
- Local Earth gravitational acceleration: [[g]] es 9.81 m/s^2
- Submarine's initial vertical elevation: [[z1]] es -500 m
- Submarine's final vertical elevation: [[z2]] es -850 m

## System definition
The physical system under study is defined as a continuous mass of seawater, considered as an incompressible and homogeneous fluid in a state of absolute rest. We establish a Cartesian reference system with the vertical Z-axis oriented positively towards the zenith (upwards), situating the zero level exactly at the ocean's free surface. In this frame, all submerged positions are represented by negative coordinates. The submarine is modeled as a material point for the local pressure analysis at its geometric center, assuming the vehicle's size is small compared to depth variations.

## Physical model
To solve this problem, we will apply the **Fundamental Principle of Hydrostatics** for incompressible fluids. This physical model postulates that in a fluid at rest, the absolute pressure at any point depends only on its vertical depth relative to a known reference. The model assumes the medium's density [[rho]] remains constant throughout the analyzed depth range and that the only acting volume force is gravity [[g]], which is considered uniform in the downward vertical direction. The relationship between absolute pressure [[p2]] and the elevation change is governed by the weight of the water column located between levels [[z1]] and [[z2]].

## Model justification
The choice of the linear and incompressible hydrostatic model is fully justified by the physical conditions of the environment. Although seawater possesses slight compressibility, for a height difference of only 350 meters, the change in density [[rho]] is less than 0.1\%, making it negligible for structural engineering calculations. Furthermore, the submarine's descent speed is low enough to consider that the system passes through a succession of quasi-static equilibrium states, allowing dynamic pressure terms derived from the fluid's kinetic energy (Bernoulli) to be ignored. Gravity [[g]] is also assumed constant given that the Earth's radius is immensely greater than the studied elevation change.

## Symbolic solution
The absolute pressure at a deep point is obtained by adding the initial reference pressure and the pressure increase or hydrostatic jump [[dp]] caused by the weight of the additional fluid located above the point when descending. The mathematical expression governing this phenomenon is:

{{f:equilibrio_hidro}}
{{f:salto_hidro}}


[[p2]] es [[p1]] + incremento de presion es [[p1]] + [[rho]] g ([[z1]] - [[z2]])


In this equation, the term ([[z1]] - [[z2]]) represents the vertical elevation difference [[dz]]. If the final point is at a greater depth, [[z2]] will be a more negative value than [[z1]], making the subtraction positive and, therefore, causing the pressure [[p2]] to increase relative to [[p1]].

## Numerical substitution
We introduce the values provided in the statement, ensuring total consistency of units within the International System (SI):


[[p2]] es 5.12 x 10^6 + 1025 * 9.81 * (-500 - (-850))



[[p2]] es 5.12 x 10^6 + 1025 * 9.81 * 350


First, we calculate the hydrostatic pressure jump [[dp]]:
incremento de presion es 1025 * 9.81 * 350 es 3,516,825 Pa aprox 3.52 MPa.

Finally, we add this value to the initial absolute pressure at the reference point:

[[p2]] es 5,120,000 + 3,516,825 es 8,636,825 Pa


## Dimensional validation
We perform an analysis of the dimensions of each term to guarantee the physical validity of the operation:
[[[rho]] * g * z] es (kg * m^{-3}) * (m * s^{-2}) * (m) es kg * m^{-1} * s^{-2}.
On the other hand, the pressure unit Newton/square meter has dimensions:
1 N/m^2 es (kg * m * s^{-2}) / m^2 es kg * m^{-1} * s^{-2}.
Both terms match perfectly, confirming that we are adding magnitudes of the same physical nature (pressure).

## Physical interpretation
The result obtained, [[p2]] aprox 8.64 MPa, **means** that absolute pressure on the submarine has increased by more than 68\% relative to its initial value at 500 meters deep. Physically, this increase **indicates** that the hull must now resist an additional force equivalent to the weight of a 350-meter tall water column on every square meter of its surface. In practical terms, this means an extra load of about 350 tons per square meter, highlighting the enormous importance of the Fundamental Principle of Hydrostatics in the design of deep-sea exploration vessels.

---

# Real-world example

## Context
In the civil engineering of modern skyscrapers, such as the Burj Khalifa, providing drinking water to the upper floors represents an immense physical challenge. If we attempted to bring water from a rooftop tank to ground-floor taps through a single continuous pipe, the pressure accumulated at the base due to the fundamental principle effect would be so high that it would instantly destroy any conventional domestic valve or pipe, which are designed to work at safe pressures below 5 or 6 bar.

## Physical estimation
Imagine a skyscraper with a water tank located at an elevation of [[z1]] es 300 m (a considerable height). We want to estimate the pressure jump [[dp]] that would exist in a tap located at street level ([[z2]] es 0 m). Applying the fundamental principle formula:

{{f:salto_hidro}}


incremento de presion es [[rho]] g ([[z1]] - [[z2]]) es 1000 * 9.81 * 300 es 2,943,000 Pa aprox 29.4 bar


This value is almost 6 times higher than the maximum allowed safety pressure in domestic installations. It is a destructive magnitude for standard plumbing.

## Interpretation
This quantitative estimation **means** that it is physically impossible (and dangerous) to make a direct connection. Therefore, the fundamental principle **indicates** to us with mathematical precision the imperative need to install "break tanks" or reducing stations every 50 or 60 meters of height. Thanks to this principle, engineers can calculate that placing a tank every 50 m of vertical elevation difference [[dz]], the maximum pressure will always stay below 5 bar, guaranteeing a safe and efficient supply to all the building's inhabitants without risk of catastrophic bursts.


