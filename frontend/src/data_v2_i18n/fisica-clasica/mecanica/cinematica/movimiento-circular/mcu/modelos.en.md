# Models and validity limits

## Ideal model

The **Ideal Model of Uniform Circular Motion (UCM)** describes the kinematics of a particle that travels along a circumference maintaining a constant angular speed [[omega]]. In this scenario, the trajectory is a perfect circle with an invariable radius [[R]], and the time it takes to complete each cycle, the [[T]], is identical. It is a model of kinematic equilibrium where the only acceleration present is the [[ac]], whose magnitude does not change and whose direction always points toward the center of rotation.

## Hypotheses

- **Perfectly circular trajectory**: The radius [[R]] must remain constant throughout the analyzed time interval. Radial drifts or elliptical trajectories are not considered (variation less than 1%).
- **Invariable rotation rate**: The angular velocity [[omega]] must not suffer fluctuations. This implies that the tangential acceleration is zero.
- **Point particle**: The object's volume is neglected, treating it as a mathematical point where all its mass is concentrated.
- **Absence of dissipative forces**: It is assumed that there is no friction or resistance at the axle that alters the system's kinetic energy.

## Quantitative validity domain

The model is an excellent approximation as long as the following conditions are met:
- Relative variation of the radius: less than 1%.
- Tangential acceleration: less than 1% of the centripetal acceleration.
- Rotation frequency [[f]]: stable within a 1% margin during the observation interval [[dt]].

## Model failure signals

- **Loss of circularity**: If the distance to the center [[R]] varies significantly, the system must be analyzed using general polar coordinates or Kepler's laws.
- **Braking or acceleration**: If the time required to complete one revolution [[T]] increases or decreases over time, the ideal model is no longer valid.
- **Extended body effects**: If the object's size is comparable to the rotation radius [[R]], different parts will have different tangential velocities [[v]].

## Extended or alternative model

It is advisable to perform a transition to more complex models in the following situations:

1.  **To UCAM (MCUA)**: If the time between pulses or the period [[T]] varies systematically (more than 1% per cycle), indicating the presence of a net torque or angular acceleration.
2.  **To Rigid Body Dynamics**: When the rotating object cannot be approximated as a point and the mass distribution affects the system's moment of inertia.
3.  **To Polar Coordinates**: If the radius [[R]] is not constant (spiral or elliptical paths), making the relationship between linear and angular velocity more complex.

## Operational comparison

| Criterion | Ideal model | Extended model (UACM) |
| :--- | :--- | :--- |
| **Acceleration** | Centripetal only [[ac]] | Centripetal [[ac]] + Tangential |
| **Angular evolution** | Linear variation with [[t]] | Quadratic variation with [[t]] |
| **Periodicity** | Constant [[T]] and [[f]] | Variable parameters |
| **Complexity** | Low (1 parameter) | Medium (2 parameters) |

UCM is the fundamental pedagogical tool for understanding rotation, but its application in real engineering requires always validating the constancy of [[omega]].
