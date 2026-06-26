const e=`# Surface Wave Examples

# Exam-type example

## Problem statement
A massive storm in the North Atlantic generates surface waves with a characteristic wavelength of [[lambda]] = 150  m. These waves propagate towards the coast of Portugal, crossing regions where the ocean depth is [[h]] = 4000  m. **Determine** the phase velocity [[c]] of these waves and **perform a critical analysis** on whether the deep water model is physically appropriate for this scenario, justifying your answer through dimensionless criteria and discussing the physical implications of the result for maritime navigation.

## Data
- **Wavelength:** [[lambda]] = 150  m (Spatial data defining the scale of the disturbance).
- **Ocean depth:** [[h]] = 4000  m (Environment data defining the propagation scenario).
- **Gravity:** [[g]] = 9.81  m/s^2 (Constant restoring force).

## System definition
The system is defined as a train of harmonic gravity waves propagating one-dimensionally in an ideal fluid (incompressible and non-viscous). The focus is on the kinematics of the phase at the free surface. We ignore effects of surface tension, as the wavelength is much larger than the capillary limit (1.7  cm).

## Physical model
To solve this problem, we start from the complete Airy dispersion relation which links [[c]], [[g]], [[lambda]], and [[h]]. This equation describes the interaction between gravity, fluid inertia, and the restriction imposed by the seafloor. We seek to simplify this transcendental expression based on the relationship between the wave scale and the depth of the medium, utilizing the asymptotic behavior of the hyperbolic tangent function.

## Model justification
Physical justification is based on the dimensionless ratio the depth-to-wavelength ratio. The deep water model is a valid approximation when the depth is greater than half the wavelength (the depth-to-wavelength ratio). In our case:
Ratio = 4000 / 150 = 26.66.
Since 26.66 mucho mayor que 0.5, we can state with full confidence that the water particle orbits at the surface do not "feel" the bottom's presence. The exponential decay of orbital motion (e^kz) ensures that at 75  m depth (half the wavelength), the agitation is less than 4% of the surface value, which is negligible. Therefore, the use of the simplified formula is fully justified from an engineering and oceanic physics perspective.

## Symbolic solution
In the deep water regime, the hyperbolic tangent of the general relation tends toward unity (the corresponding surface-wave expression), simplifying the expression to the following square root relationship:
deep-water regime
The numerical expression is evaluated with the selected surface-wave relation.

## Numerical substitution
With [[g]] = 9.81 m/s^2 and [[lambda]] = 150 m, the resulting phase speed is [[c]] = 15.3 m/s. This is about 55.1 km/h and represents crest speed, not material water speed.

## Dimensional validation
Gravity contributes length per squared time and wavelength contributes length. Combining both magnitudes and taking the square root gives meters per second, consistent with a phase speed.

## Physical interpretation
The obtained speed of 15.3  m/s represents the rate at which individual crests advance through the ocean. It is fundamental to note that water does not travel at this speed; only the energy pattern does. A direct consequence of this result is that in deep water, waves are dispersive: if the storm were to generate longer waves, they would travel faster and reach the coast sooner. This "sorting by speed" is what allows meteorologists to predict a storm's arrival by observing the period of the waves that arrive first. For a sailor, this means that even if the wind has died down, the swell can travel thousands of miles to their position, carrying energy from distant weather systems.

# Real-world example

## Context
Analysis of transoceanic tsunami propagation following a major seismic event. Tsunamis are fascinating phenomena because, despite occurring in the open ocean (very deep), their wavelengths are so immense (on the order of 200,000  m) that they challenge the intuitive classification of "deep water" and behave according to shallow water physics.

## Physical estimation
Consider a tsunami crossing the Pacific with mean depth [[h]] = 4500 m and wavelength on the order of 200000 m. The depth-to-wavelength ratio is 0.0225, below 0.05, so the tsunami is classified as a shallow-water wave.

{{f:someras}}

For that depth, the estimated speed is [[c]] = 210 m/s, on the order of 756 km/h.

## Interpretation
The interpretation of this result is critical for global public safety. A speed of 210  m/s is comparable to the cruising speed of a commercial jet aircraft. This implies that a tsunami can cross the Pacific Ocean in less than 20 hours. Physically, the fact that it behaves as shallow water means that the wave moves the entire mass of water, from the surface to the seafloor at 4.5 km depth, transporting an incalculable amount of kinetic and potential energy. Unlike wind waves, where energy is surface-bound, a tsunami is a whole-ocean-column event. Upon approaching the coast and decreasing [[h]], this speed will fall drastically, causing the "piling up" phenomenon (shoaling) that generates the massive walls of water characteristic of these disasters. Quantitative estimation allows us to understand why warning systems must be automatic, satellite-based, and global.`;export{e as default};
