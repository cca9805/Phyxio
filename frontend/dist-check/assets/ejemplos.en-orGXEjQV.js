const e=`# Exam-type example

## Problem statement
A telecommunications antenna emits a harmonic plane wave in vacuum. It has been measured that the electric field amplitude [[E0]] at a certain distance is 150 V/m. A complete physical interpretation of the wave's state at that point is required, calculating:
1. The associated magnetic field amplitude [[B0]].
2. The electromagnetic energy density [[u]] stored in space.
3. The average intensity [[I]] carried by the wave.
4. Verify consistency between the energy flow given by the Poynting vector [[S]] and the calculated average intensity.

## Data
- Electric field amplitude [[E0]]: 150 V/m.
- Medium: vacuum (standard permittivity [[epsilon0]] and permeability [[mu0]]).
- Speed of light [[c]]: universal constant.

## System definition
The system consists of a defined region in free space (vacuum) where a electromagnetic plane wave travels in a single direction. We focus on a small volume element to analyze the energy density [[u]] and a flat surface element perpendicular to the wave's path to measure the power flux [[S]]. This setup is the canonical representation of light propagation in the absence of matter, representing the most basic and fundamental solution to Maxwell's equations in their differential form.

## Physical model
We apply the **Maxwell physical interpretation model for plane waves in vacuum**. This model states that electromagnetic waves are self-propagating disturbances where energy oscillates between the electric [[E]] and magnetic [[B]] fields. In this model, the fields are perfectly coupled and synchronized, maintaining a constant ratio. The model provides the tools to calculate how much energy is "packed" in a cubic meter of space via [[u]] and how fast that energy is moving through a square meter of area via [[S]].

## Model justification
The model is **valid** because the distance from the source allows us to treat the wave as a plane wave (far-field approximation). **It is assumed** that the vacuum is a perfect linear medium without dispersion, which justifies the use of constant values for [[epsilon0]], [[mu0]], and [[c]]. **It is appropriate** because it simplifies the complex vector interactions into energetic quantities like intensity [[I]], which are directly measurable and essential for engineering and physics analysis.

## Symbolic solution
To perform the complete interpretation, we follow these steps:

1. We find the magnetic field amplitude [[B0]] by using the vacuum ratio, which relates the electric and magnetic magnitudes through the speed of light:
{{f:relacion_campos}}

2. We calculate the maximum energy density [[u]] stored in the fields at their peak oscillation point:
{{f:densidad_energia}}

3. We determine the average intensity [[I]], which represents the average power delivered by the wave over time:
{{f:intensidad_media}}

4. We calculate the magnitude of the Poynting vector [[S]] to confirm the rate of energy transport:
{{f:poynting_magnitud}}

Finally, we verify that the wave speed matches the theoretical prediction for vacuum:
{{f:velocidad_vacio}}

## Numerical substitution
1. For the magnetic field amplitude: [[B0]] is found by dividing [[E0]] by [[c]], resulting in 500 nT (nanoteslas).
2. For the maximum energy density: using [[E0]] and [[epsilon0]], [[u]] is approximately 1.99e-7 J/m³.
3. For the average intensity: [[I]] results in approximately 29.87 W/m².
4. For the Poynting vector magnitude: [[S]] reaches a peak of 59.74 W/m², which is exactly twice the average intensity [[I]], as expected for a sinusoidal wave.

## Dimensional validation
We check the units for the intensity [[I]]. Since [[I]] is defined by the product of [[c]], [[epsilon0]], and the square of [[E0]], the resulting unit is (m/s) * (F/m) * (V²/m²). Knowing that a Farad is a Coulomb per Volt and a Volt is a Joule per Coulomb, the expression simplifies to Joules per second per square meter, or Watts per square meter (W/m²). This confirms the result represents a power flux per unit area.

## Physical interpretation
The analysis reveals that even a moderate electric field of 150 V/m carries a significant amount of energy. Although the magnetic field [[B0]] seems numerically small, its contribution to the energy density [[u]] is exactly equal to that of the electric field. This means that the wave sustains itself physically through this symmetry. This implies that the intensity of nearly 30 W/m² allows for signal detection at vast distances. Therefore, the result is consistent with the autonomous nature of electromagnetic radiation.

# Real-world example

## Context
This example analyzes two different scales of electromagnetic interaction: first, the massive energy flux from the Sun reaching our planet (the solar constant), and second, the delicate but high-frequency signal from a home WiFi router. Both cases, despite their different origins, are governed by the same interpretation of energy density [[u]] and intensity [[I]].

## Physical estimation
To perform a reasonable estimation, we first consider the solar intensity [[I]] at the top of the atmosphere, which is about 1361 W/m². Using the intensity formula from the leaf, we find that the peak electric field [[E0]] of sunlight is over 1000 V/m. For the WiFi case, a router emitting 0.1 W creates an intensity [[I]] of 0.0079 W/m² at 1 meter, which corresponds to a much smaller [[E0]] of 2.4 V/m. In both cases, the energy travels at a constant speed [[c]] and its scale is determined by the environmental constants.

## Interpretation
Maxwell's interpretation indicates that these disparate phenomena are fundamentally the same. The solar radiation intensity [[I]] is high enough to drive the Earth's climate, which means it physically dominates the energy balance of the planet. Meanwhile, the WiFi intensity [[I]] is low, but its frequency allows for data transmission. This implies that the electromagnetic field is a universal carrier of both power and information. The consistency of these results shows that Maxwell's equations provide a unified physically accurate description of how energy moves through the vacuum.
`;export{e as default};
