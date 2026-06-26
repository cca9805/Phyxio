## Ideal model

The longitudinal wave model in fluids assumes a **continuous, homogeneous, and isotropic** medium where the pressure perturbation is infinitesimally small compared to the equilibrium pressure. The relationship between pressure and volume change is **linear** (volumetric Hooke regime), and compression occurs **adiabatically** without thermal exchange with the surroundings.

Under these conditions, propagation is described by a second-order scalar wave equation whose phase velocity depends exclusively on [[modulo_de_compresibilidad_volumetrica]] and [[rho]]. The viscosity of the fluid, thermal conductivity, rotation of the medium, and any boundary or geometry effects are ignored.

## Hypotheses

- **Small amplitude**: the pressure variation is much smaller than the static pressure of the fluid. If violated, nonlinear effects appear that distort the wave profile (harmonic generation, shock waves).

- **Continuous medium**: the [[lambda]] is much greater than the mean free path of molecules. If violated, the concept of compression loses meaning and molecular kinetic theory must be used instead.

- **Homogeneity and isotropy**: [[modulo_de_compresibilidad_volumetrica]] and [[rho]] are constant throughout the volume. If violated (gradients of temperature, salinity, or pressure), the wave undergoes refraction and speed [[rapidez_de_propagacion]] varies from point to point.

- **Adiabatic compression**: there is no appreciable heat exchange during the compression-rarefaction cycle. If violated (extremely low frequencies or fluids with high thermal conductivity), [[modulo_de_compresibilidad_volumetrica]] must be replaced by the isothermal modulus, altering [[rapidez_de_propagacion]].

- **Inviscid fluid**: there is no dissipation of mechanical energy by internal friction. If violated, the amplitude decays exponentially with distance and the wave attenuates.

## Quantitative validity domain

The linear model is reliable when the ratio of acoustic pressure amplitude to static pressure is less than 0.01 (variations below 1 % of ambient pressure). In air at standard atmospheric pressure, this corresponds to acoustic levels below approximately 171 dB SPL.

The continuous-medium condition requires [[lambda]] > 10⁻⁷ m, a requirement amply satisfied across the entire audible range (20 Hz to 20 kHz), where [[lambda]] varies between 17 m and 1.7 cm in air.

For ideal gases at temperatures between 200 K and 2000 K and pressures between 10 kPa and 10 MPa, the adiabatic modulus relates well to pressure and the adiabatic coefficient. Outside these ranges, the gas shows deviations from ideal behaviour that affect the prediction of [[rapidez_de_propagacion]].

## Model failure signals

- **Wave profile distortion**: if the compression front sharpens while the rarefaction flattens, the amplitude has exceeded the linear regime and shock wave formation is imminent.

- **Anomalous attenuation**: if the amplitude drops faster than expected from geometric divergence, the viscosity of the fluid is no longer negligible and the ideal model overestimates the range.

- **Frequency-dependent speed**: in the ideal model [[rapidez_de_propagacion]] does not depend on [[frecuencia]]. If experimental measurements show dispersion (high frequencies travelling at different speeds), the medium exhibits molecular relaxation or viscoelastic effects.

- **Observable thermal gradient**: if the temperature varies appreciably in the direction of propagation, the homogeneity hypothesis fails and curvatures appear in the wavefronts (acoustic refraction).

## Extended or alternative model

The **viscothermal model** incorporates the dynamic viscosity and thermal conductivity of the fluid. The resulting wave equation adds a damping term that makes the amplitude decay exponentially with distance. This model correctly predicts sound attenuation in real gases and in liquids at ultrasonic frequencies.

For large amplitudes, the **Burgers model** or the **Westervelt equation** include nonlinearities that describe harmonic generation, profile distortion, and eventual shock wave formation. When to switch to the viscothermal model: when measured attenuation exceeds the geometric prediction by more than 10 %, or when [[frecuencia]] exceeds the megahertz range in liquids. Switch to a nonlinear model when the acoustic pressure amplitude exceeds 1 % of the static pressure of the medium.

## Operational comparison

| Criterion | Ideal model (linear, adiabatic) | Viscothermal / nonlinear model |
|---|---|---|
| Mathematical complexity | Second-order scalar wave equation | Diffusion-wave equation with dissipative terms |
| Propagation speed | Constant, [[frecuencia]]-independent | Slightly [[frecuencia]]-dependent (dispersion) |
| Attenuation | Geometric divergence only | Additional exponential decay due to viscosity |
| Amplitude range | Small perturbations (less than 1 % of static pressure) | Moderate and large perturbations |
| Typical application | Environmental acoustics, basic tube design | Medical ultrasound, underwater acoustics, shock waves |
| Main limitation | Ignores dissipation and nonlinearities | Greater computational cost and need for additional parameters |