# Physical Models of Longitudinal Waves

## Ideal model
The fundamental model for longitudinal waves in fluids is the **Linear Acoustic Model**. This model treats the fluid as a continuous, elastic, and non-viscous medium. It is assumed that the pressure and density disturbances are infinitesimally small compared to the equilibrium values (p ll P_0 and Delta [[[[rho]]]] ll [[[[rho]]]]_0). Under these conditions, the Navier-Stokes equations simplify to the linear wave equation, allowing harmonic solutions where the propagation speed [[c]] is independent of frequency (absence of dispersion).

## Hypotheses
For this model to be operational, the following premises must be met:
1. **Continuous Medium:** The wavelength [[lambda]] must be much larger than the molecular mean free path, so that the fluid can be treated as a continuum.
2. **Small Amplitudes:** The particle displacement [[s_hat]] must be small enough that the non-linear terms in the equations of motion are negligible.
3. **Non-Viscous Fluid:** Internal friction between fluid layers is neglected, assuming no thermal energy dissipation during propagation.
4. **Adiabatic Process:** In gases, compressions and rarefactions occur so quickly that there is no time for heat exchange with the surroundings, so the adiabatic bulk modulus is used.

## Quantitative validity domain
The linear acoustic model is valid under the following quantitative criteria:
- **Pressure Ratio:** frac[[[[p_hat]]]]P_atm < 0.01. For air at atmospheric pressure (10^5 Pa), this means the pressure amplitude must be less than 1000 Pa.
- **Acoustic Mach Number:** Particle velocity must be much smaller than [[c]]. Typically, the ratio between both speeds stays below 10^-3 to preserve linearity.

## Model failure signals
The model starts to fail when:
- **Shock Wave Appearance:** If the pressure amplitude is very high, the wave crests travel faster than the troughs.
- **Viscosity Attenuation:** At very high frequencies (MHz range), absorption due to fluid viscosity and thermal conduction can no longer be ignored.
- **Molecular Dispersion:** If the frequency is so high that the wavelength approaches molecular scales.

## Extended or alternative model
For situations where the ideal model fails, the following are used:
- **Westervelt Equation:** Incorporates non-linear and dissipation effects to describe the propagation of high-intensity ultrasonic beams.
- **Non-Linear Gas Dynamics:** Used to describe explosions and supersonic flows where pressure variations are of the same order of magnitude as ambient pressure.

## Model transition
**When should the model be changed?**
You should abandon the linear acoustics model and move to non-linear gas dynamics or high-intensity acoustics models when:
1. The particle Mach number is comparable to unity (M_a aprox. 1).
2. Waveform distortions are observed indicating the formation of shock fronts.
3. The medium presents significant absorption that requires including bulk viscosity terms.

## Operational comparison
While the ideal model allows for a simple analytical resolution using trigonometric functions and a constant speed [[c]], extended models require complex numerical methods and consider that energy is transferred between different frequencies due to wave profile distortion.