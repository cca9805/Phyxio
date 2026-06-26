# Fluid Engineering Models

## Ideal model
The ideal model of engineering fluid applications is based on the **one-dimensional, steady, and incompressible flow** approximation. In this model, hydraulic machines are treated as "black box devices" that exchange energy with the fluid at specific points. It is assumed that the fluid moves as a continuous whole and that the transfer of useful power [[P_util]] occurs without temporal fluctuations. This model is the dominant representation in the preliminary design of piping systems and pumping stations, allowing the sizing of motors and pipes through simple algebraic equations without the need for high-complexity three-dimensional simulations.

## Hypotheses
-   **Incompressibility**: Fluid density densidad del fluido is constant throughout the process.
-   **Steady state**: Flow rate [[Q]] and pressure [[dp]] do not vary over time at any point in the system.
-   **One-dimensional flow**: Properties are averaged at each cross-section, ignoring detailed velocity profiles.
-   **Global efficiency**: All losses (mechanical, hydraulic, and leakage) are grouped into a single efficiency coefficient [[eta]].
-   **Constant properties**: No significant changes in fluid temperature or viscosity are considered during the passage through the device.

## Quantitative validity domain
This model is operational under the following metric restrictions:
-   **Mach Number**: M < 0.3 for liquids and low-speed gases, ensuring that the incompressible model is physically acceptable.
-   **Flow Regime**: Fully developed turbulent flow (Reynolds Number > 4000), where loss coefficients are more stable.
-   **Efficiency Range**: The model is robust for devices operating within their nominal design range (typically between 30% and 90% of their maximum flow rate).
-   **Moderate Pressures**: Avoids areas where fluid pressure approaches its vapor pressure to not invalidate the model due to cavitation.

## Model failure signals
-   **Pressure pulsations**: Indicate that the flow is not steady, invalidating the temporal averages of the model.
-   **Metallic noises (Cavitation)**: Indicate that the fluid is no longer a single incompressible phase, with vapor bubbles appearing that alter power transfer.
-   **Excessive heating**: If fluid temperature rises significantly, losses can no longer be modeled with a constant efficiency [[eta]], and a full thermodynamic analysis is required.
-   **Structural vibrations**: Suggest dynamic or mechanical effects that the one-dimensional static model does not capture.

## Extended or alternative model
For situations exceeding the previous limits, **Computational Fluid Dynamics (CFD)** or **Compressible Thermodynamic Analysis** are used.
-   **What changes**: The model stops using section averages and resolves the Navier-Stokes equations in three dimensions, capturing local vortices and turbulence.
-   **Alternative**: In high-pressure gas systems, the ideal gas model with enthalpy and entropy changes is used to calculate actual compression power.
-   **Dynamic approach**: For transients (such as water hammer), pressure wave models are used that consider fluid and pipe elasticity.

## Transition to alternative model
**When should the model be changed?** The incompressible model collapses and one must transition to the alternative model in the following scenarios:
1.  **Phase Change**: When there is a risk of cavitation or boiling. The simple power model cannot predict performance drop or structural damage.
2.  **Compressibility**: If the density variation exceeds 5% (Mach > 0.3). At this point, the error of omitting compression work is unacceptable for engineering purposes.
3.  **Fast Transients**: When suddenly closing valves, where useful power is no longer a constant but a shock wave traveling through the system.

## Operational comparison
The ideal model is an essential fast calculation tool for initial decision-making and economic viability. The extended model (CFD) is a high-precision validation tool that requires months of work and large computing capacity. While the basic model stands out for showing the direct relationship between power [[P_util]], pressure [[dp]], and flow rate [[Q]], advanced models are necessary to optimize the machines' internal geometry and prevent catastrophic failures due to fatigue or erosion.

