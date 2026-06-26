# Introduction to Sound - Models and Validity

## Ideal model
The fundamental model for the study of sound in fluids is the **linear acoustic model**. This theoretical framework describes the propagation of mechanical disturbances assuming that variations in pressure, density, and particle velocity are extremely small compared to the equilibrium values of the medium. It is based on a simplification of the Navier-Stokes equations where second-order terms and viscosity effects are omitted, resulting in the classical wave equation. The central relationship of this model is the kinematic connection between speed, frequency, and wavelength, supported by the macroscopic elasticity of the fluid.

## Hypotheses
For this model to be operational and accurate, the following conditions must be met:
-   **Absolute Linearity**: It is assumed that the acoustic pressure jump pressure disturbance is negligible compared to the ambient pressure P_0. This allows waves to overlap without interacting with each other (superposition principle).
-   **Adiabatic Process**: Due to the high rapidity of sound oscillations, it is assumed that there is no time for heat exchange between compressed (hot) and rarefied (cold) zones.
-   **Continuity of the Medium**: The fluid is treated as a continuous mass without taking into account the discrete nature of molecules, which is valid as long as the wavelength [[lambda]] is much greater than the molecular mean free path.
-   **Isotropic and Homogeneous Medium**: Properties such as density [[rho]] and modulus [[B]] are assumed to be constant in all directions and points in space.

## Quantitative Validity Domain
-   **Pressure Level**: The model is excellent for sounds from the threshold of hearing (0 dB) up to very high levels (150 dB), where pressure disturbance / P_0 < 0.001.
-   **Frequency Range**: Works perfectly in the audible range (20 Hz - 20 kHz) and in low-power industrial ultrasound.
-   **Spatial Scale**: Valid for wavelengths from a few millimeters to hundreds of meters.

## Model Failure Signals
A researcher or student should be alert to the following quantitative signals indicating that the linear model is no longer valid:
1.  **Saturation and Distortion**: If the sound is so loud that pressure disturbance / P_0 > 0.1 (approximately 174 dB in air), linearity is broken and the model error exceeds 10%.
2.  **Excessive Attenuation**: If the sound disappears much faster than the inverse square law predicts, medium viscosity is draining the energy (non-ideal regime).
3.  **Anomalous Dispersion**: If different frequencies travel at different speeds in a fluid that should be non-dispersive, there are structural or chemical effects not contemplated.

## Extended or Alternative Model
When the linear model fails, one should resort to:
-   **Non-linear Acoustics (Westervelt Equation)**: Necessary for high-intensity medical ultrasound (HIFU) and explosions, where wave speed depends on local pressure.
-   **Thermouncous Acoustics**: Integrates viscosity and heat conduction effects, vital for high-frequency sounds in narrow tubes or very dense media.

## Operational Comparison and Transition
The **transition to alternative model** is required when sound intensity is extreme. It is advisable to change to the non-linear acoustics model when the pressure disturbance pressure disturbance exceeds 10% of the ambient pressure. At this point, wave crests travel faster than troughs, which inevitably ends in the formation of a **shock wave** (a discontinuous pressure jump). Likewise, if sound in fluids is studied at microscopic scales (nanofluidics), the continuous medium model must be abandoned in favor of molecular dynamics, as sound no longer "sees" a smooth fluid but a rain of individual particles.