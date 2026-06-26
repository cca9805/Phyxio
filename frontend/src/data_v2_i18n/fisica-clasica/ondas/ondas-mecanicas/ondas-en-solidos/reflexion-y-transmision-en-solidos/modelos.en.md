## Ideal model

The ideal model treats reflection and transmission as a one-dimensional problem of normal-incidence plane waves at a flat, perfect, infinite interface between two linear elastic, homogeneous, isotropic media. The interface is perfectly bonded (rigid contact). The only information needed is the acoustic impedance of each medium, defined as the product of density and wave velocity.

Under these conditions, the problem has a closed analytical solution: the coefficients [[coeficiente_de_reflexion_en_amplitud]] and [[coeficiente_de_transmision_en_amplitud]] are expressed algebraically as a function of the impedance ratio. There is no mode conversion, no dispersion, no dissipation.

## Hypotheses

- Normal incidence: the wave arrives perpendicularly to the interface. If there is an angle, mode conversion appears and Zoeppritz equations are needed.

- Flat and infinite interface: curvature and interface edges are neglected. If the interface has roughness on the order of the wavelength, diffuse scattering appears.

- Homogeneous and isotropic media: properties are uniform and direction-independent. If there are impedance gradients, reflection is distributed along the gradient rather than concentrated at a point.

- Perfect bonding (rigid contact): no slip or separation at the interface. If there is lubricant, trapped air or partial debonding, coefficients change and multiple reflections may appear.

- Linear elastic regime: amplitudes are small enough for superposition to be valid. At extreme amplitudes (shock waves), nonlinearity modifies reflection.

## Quantitative validity domain

The model is valid when incidence angle is less than 5 degrees (deviation below 1% from exact normal incidence). The wavelength must be much greater than the surface roughness of the interface to avoid diffuse scattering: typically roughness must be below one tenth of the wavelength.

For 5 MHz ultrasonic waves in steel (wavelength approximately 1.2 mm), the interface can be considered flat if its roughness is below 0.1 mm. For seismic waves (frequencies 1-50 Hz, wavelengths of kilometres), nearly any geological interface is "flat" at the wave scale.

Amplitude coefficients satisfy: −1 <= [[coeficiente_de_reflexion_en_amplitud]] <= 1 and 0 <= [[coeficiente_de_transmision_en_amplitud]] <= 2. Energy coefficients satisfy: 0 <= [[coeficiente_de_reflexion_en_energia]] <= 1 and 0 <= [[coeficiente_de_transmision_en_energia]] <= 1, with [[coeficiente_de_reflexion_en_energia]] + [[coeficiente_de_transmision_en_energia]] exactly equal to 1.

## Model failure signals

- Measured echo differs significantly from the formula prediction: possible partial debonding, intermediate layer or excessive roughness.

- Signals appear at unexpected times: multiple reflections (reverberations) that the single-interface model does not predict.

- Transverse waves are detected where only longitudinal should exist: non-normal incidence or interface tilted relative to the beam.

- Echo signal depends on frequency: the interface is not "infinite" at the wave scale (diffraction) or there is an impedance gradient.

## Extended or alternative model

The immediate extended model is reflection at oblique incidence (Zoeppritz equations), which includes PP, PS, SP, SS mode conversion and allows calculating critical angles and total reflection.

For interfaces with intermediate layers, the finite-thickness layer model is used (constructive/destructive interference depending on thickness relative to wavelength). This is the basis for impedance-matching layer design (quarter wavelength).

For rough interfaces, diffuse scattering models are used (Kirchhoff theory or numerical methods) estimating how much energy is redistributed away from the specular direction.

When to switch to the extended model: when incidence angle exceeds 10 degrees, when the interface has thickness or gradient, when roughness exceeds one tenth of the wavelength, or when mode conversion not explained by the simple model is detected.

## Operational comparison

| Criterion | Ideal model (normal incidence) | Extended model (Zoeppritz) |
|---|---|---|
| Input variables | [[impedancia_acustica_del_medio_1]], [[impedancia_acustica_del_medio_2]] | [[impedancia_acustica_del_medio_1]], [[impedancia_acustica_del_medio_2]], P and S velocities, angle |
| Output coefficients | 2 (R, T) | 4 (PP, PS, SP, SS) per side |
| Mode conversion | No | Yes |
| Critical angle | Does not exist | Yes, depends on velocity ratio |
| Analytical complexity | Simple arithmetic | Matrix equations |
| Applicability | Normal tests, well-defined interfaces | AVO seismology, angular inspection |