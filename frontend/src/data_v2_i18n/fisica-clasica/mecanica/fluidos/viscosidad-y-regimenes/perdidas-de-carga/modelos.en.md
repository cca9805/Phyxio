# Head Loss Models: From Darcy to Colebrook

The analysis of head losses is based on the transition from a purely theoretical and deterministic model (laminar flow) to a semi-empirical and probabilistic one (turbulent flow). This duality is fundamental to understanding the reliability of our hydraulic calculations.

## ## Ideal model
The ideal model for head losses is the **Darcy-Weisbach Equation**. It is considered the "standard" model because it is dimensionally consistent and applicable to any Newtonian fluid. In this model, dissipated energy is assumed to be a linear function of duct length and inversely proportional to diameter, scaling with the square of the average velocity.
-   **Core variables**: Head loss [[hf]], friction factor [[f]], length [[L]], diameter [[D]], and velocity [[v]].
-   **What is sought**: A prediction of pressure drop that allows sizing fluid transport systems without catastrophic errors.

## ## Hypotheses
For the Darcy-Weisbach model to be applicable, the following assumptions are made:
1.  **Newtonian Fluid**: Shear stress is proportional to the velocity gradient (dynamic viscosity is constant for a given temperature).
2.  **Incompressibility**: Fluid density [[rho]] does not change significantly along the duct (valid for liquids and gases at low Mach speed < 0.3).
3.  **Stable and Developed Flow**: It is assumed that the velocity profile does not change along the analyzed straight section (far from disturbances).
4.  **Circular Confinement**: The base model assumes cylindrical pipes. For other shapes, the **Hydraulic Radius** hypothesis is introduced.

## ## Quantitative validity domain
The success of the model depends on the calculation of factor [[f]]:
-   **Laminar Regime ([[Re]] < 2300)**: The domain is exact and analytical. Roughness has no influence.
-   **Turbulent Regime ([[Re]] > 4000)**: The domain is semi-empirical. Validity depends on the accuracy of material absolute roughness.
-   **Transition Zone (2300 < [[Re]] < 4000)**: The Darcy model is unstable in this zone. It is recommended to oversize the system assuming turbulent flow for safety.
-   **Scale**: The model is valid from capillary tubes to large water tunnels, as long as the concept of continuous medium is maintained.

## ## Model failure signals
The Darcy-Weisbach model fails or gives erroneous results when:
1.  **Non-Newtonian Fluid**: If the fluid is blood, polymers, or thick sludges, viscosity changes with speed and [[f]] does not follow standard laws.
2.  **Cavitation**: If head loss is so high that pressure drops below vapor pressure, bubbles form that break the single-phase model.
3.  **High Velocities (Gases)**: If gas velocity exceeds 30% of the speed of sound, compressibility effects dominate and the **Fanno Flow** model is required.

## ## Extended or alternative model
There are alternatives to simplify or extend the calculation depending on the required precision:
-   **Hazen-Williams Equation**: Widely used in civil engineering for water networks. It is simpler but only valid for water at normal temperatures. **when to switch**: Migrate to Hazen-Williams only for quick calculations in large-scale networks with water at ambient temperature.
-   **Colebrook-White Equation**: The extended model for finding [[f]] in turbulent flow. It is the most accurate but requires iteration. **when to switch**: Use Colebrook-White when precision is critical and computational tools are available.
-   **Haaland Equation**: An explicit alternative to Colebrook that offers an error of less than 2%. **when to switch**: This is the recommended model for fast manual calculations that do not support iterations.

## ## Operational comparison
While the **ideal flow model (Bernoulli)** neglects friction to simplify learning, the **Head Loss** model is the one used in professional life. In practice, an engineer prefers the Darcy-Weisbach model over Hazen-Williams due to its universal character; although more complex to calculate, it allows modeling everything from air conditioning to heavy crude oil pipelines with the same physical structure. The final choice usually depends on local regulations or the availability of material roughness data.