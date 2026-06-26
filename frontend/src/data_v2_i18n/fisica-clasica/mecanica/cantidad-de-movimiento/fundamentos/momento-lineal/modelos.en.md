# Physical Models: Linear Momentum [[p]]

## Ideal model

The **ideal model of linear momentum** assumes that the object can be treated as a **point particle** with constant mass[[m]]. Only the essential structure is preserved so that the fundamental relationship of motion describes the dominant mechanism of inertia transport:

{{f:momentum_definition}}

At this level of abstraction, secondary details such as body rotation, internal deformation during impact, or fluid friction are eliminated. The model focuses exclusively on the **displacement of the center of mass** and its dynamic persistence.

## Hypotheses

The hypotheses supporting this model are:

1.  **Point Body**: The geometric extension of the object is ignored. All mass[[m]]is concentrated at a mathematical point following the trajectory.
2.  **Invariant Mass**: It is assumed that the system neither gains nor loses matter during the analysis interval (zero mass variation rate).
3.  **Inertial Reference Frame**: The observer does not accelerate, ensuring that changes in[[p]]are due only to real forces.
4.  **Classical Regime**: It is assumed that time and space are absolute and that velocities are negligible compared to the speed of light.

## Quantitative validity domain

For the description of linear momentum to be physically acceptable, the following operational thresholds must be met:

*   **Velocity Limit**: Speed lower than 0.1c (less than 10% of the speed of light). Above this value, the error of the classical formula exceeds the tolerance margin of mechanical engineering.
*   **Mass Conservation**: The incoming or outgoing mass flow must be less than one ten-thousandth of m per second. If a rocket expels fuel significantly, this model is no longer valid.
*   **Energy Scale**: The internal binding energy of the object must be much greater than the kinetic energy transferred in the collision to avoid fragmentation of the "massive point."

## Model failure signals

The analyst must detect symptoms that the point particle model is no longer sufficient:

1.  **Balance Discrepancy**: If when calculating[[DeltaP]]the result does not match the measured net impulse, indicating hidden forces or unaccounted mass loss.
2.  **Appearance of Rotation**: If after a collision the object begins to rotate violently, part of the momentum has been transferred to angular momentum, which this leaf does not cover.
3.  **Plastic Deformation**: If the object permanently changes shape (like a car after a crash), the rigid particle model underestimates the dissipated energy, although the[[p]]balance remains approximately useful.

## Extended or alternative model

When basic hypotheses break down, there is an explicit transition to a different framework. It is important to know when to switch to an alternative model when the system mass varies significantly or when speeds approach the speed of light:

1.  **Variable Mass Model (Open Systems)**:
    Mandatory when mass change is a design factor (jet propulsion). The pure differential form of Newton's law must be used:

{{f:instantaneous_force}}

2.  **Relativistic Model**:
    Activated when v approaches c. Linear momentum is redefined by multiplying the rest mass by the Lorentz factor (gamma), causing momentum to tend toward infinity as it approaches c.
3.  **Particle Systems Model**: If the object fragments or is a fluid, linear momentum is calculated as the vector sum of the momenta of each constituent, or through the collective **Center of Mass** motion.

## Operational comparison

| Criterion | Ideal Model (Particle) | Extended Model (Systems/Variable) |
| :--- | :--- | :--- |
| **Complexity** | Low: Only one mass and one v vector. | High: Requires flow or summation calculations. |
| **Precision** | High in rigid solids and low speeds. | High in rockets, fluids, and fragmentation. |
| **Ease of Calculation** | Direct via classical definition. | Requires integration or component analysis. |
| **Main Use** | Billiards, traffic, basic ballistics problems. | Aeronautics, particle physics, galaxies. |
| **Limitation** | Fails if object deforms or loses mass. | Requires many more input data. |
