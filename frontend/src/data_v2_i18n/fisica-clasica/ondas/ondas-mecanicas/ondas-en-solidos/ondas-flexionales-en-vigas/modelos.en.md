## Ideal model

The reference model in this leaf is the **Euler-Bernoulli beam**, the classical bending model for slender beams. Its central hypothesis is that plane cross-sections remain plane and perpendicular to the deformed axis during vibration. This eliminates transverse shear deformation from the analysis and produces a fourth-order differential equation whose solution provides the quadratic dispersion relation.

The model predicts a phase velocity [[v_fase_flex]] that grows as the square root of frequency [[omega]], and a group velocity [[v_grupo_flex]] exactly twice the phase velocity. There is no upper limit for velocity in this model, reflecting its character as a long-wave approximation.

The quantities preserved in the model are bending stiffness EI (product of [[modulo_de_young]] and [[momento_de_inercia_de_la_seccion_transversal]]) and linear mass [[rho_lin]]. Transverse shear deformation and rotational inertia of sections are completely ignored.

## Hypotheses

- **Slender beam:** the flexural wavelength [[lambda_flex]] must be much greater than the transverse dimension of the section (practical condition: [[lambda_flex]] greater than 6 times the thickness). Violating this hypothesis produces predicted velocities higher than actual ones because shear deformation, which is ignored, reduces the effective speed.

- **Plane sections remain plane and normal to the axis:** this excludes section warping and shear deformation. At high frequencies, sections no longer remain perpendicular and the model overestimates stiffness.

- **Linear elastic, isotropic and homogeneous material:** [[modulo_de_young]] and [[rho_vol]] are constant throughout the beam. For viscoelastic or composite materials, parameters become functions of frequency or position.

- **Constant cross-section:** [[momento_de_inercia_de_la_seccion_transversal]] and [[area_de_la_seccion_transversal]] do not vary along the axis. Variable-section beams require numerical methods or the WKB approximation.

- **Small deformations:** vibration amplitudes are much smaller than section dimensions. For large amplitudes, geometric nonlinearities appear that couple flexural and longitudinal modes.

## Quantitative validity domain

The Euler-Bernoulli model is reliable when the flexural wavelength is at least 6 times the section thickness in the bending direction. For a 5 mm thick steel bar, this corresponds to [[lambda_flex]] > 30 mm, limiting frequency to values below approximately 50 kHz.

The most direct quantitative criterion uses the radius of gyration [[r_giro]]: the model is valid as long as k·[[r_giro]] < 0.3, that is, as long as the wavenumber times the radius of gyration is much less than 1. For the 5 mm × 20 mm rectangular bar bending in the 5 mm direction, [[r_giro]] is 5/√12 ≈ 1.44 mm, and the condition k·[[r_giro]] < 0.3 is satisfied for frequencies below approximately 100 kHz.

The deviation of the Euler-Bernoulli model from actual measurements is below 5 % for k·[[r_giro]] < 0.2, and below 1 % for k·[[r_giro]] < 0.1.

## Model failure signals

- **Calculated phase velocity exceeding the material's longitudinal speed:** in steel, if [[v_fase_flex]] exceeds 5100 m/s, the model has exceeded its range. Reality limits velocity to the shear speed (about 3100 m/s).

- **Measured velocities that saturate with frequency instead of continuing to grow:** the experimental curve flattens because shear deformation limits the actual velocity, an effect not captured by Euler-Bernoulli.

- **Growing discrepancy between prediction and measurement at high frequencies:** if measurements give progressively lower velocities than predicted, rotational inertia and shear are manifesting.

- **Wavelength comparable to section thickness:** if the calculated [[lambda_flex]] is less than 6 times the thickness, any model result is quantitatively suspect.

## Extended or alternative model

**Timoshenko theory** extends the Euler-Bernoulli model by incorporating two additional effects: transverse shear deformation (through the shear coefficient kappa and shear modulus G) and rotational inertia of sections. The resulting dispersion relation is no longer quadratic: at low frequencies it matches Euler-Bernoulli, but at high frequencies phase velocity saturates at the shear wave speed.

The Timoshenko model also predicts the existence of a second dispersion branch (pure shear wave) at high frequencies, which has no counterpart in Euler-Bernoulli. When to switch to the Timoshenko model: when k·[[r_giro]] exceeds 0.3, or equivalently when frequency exceeds the threshold where Euler-Bernoulli phase velocity surpasses 50 % of longitudinal velocity.

For beams with internal damping, the model extends by replacing the real [[modulo_de_young]] with a complex modulus, introducing frequency-dependent attenuation in addition to dispersion.

## Operational comparison

| Criterion | Euler-Bernoulli | Timoshenko |
|---|---|---|
| Shear deformation | Ignored | Included (coefficient kappa) |
| Rotational inertia | Ignored | Included |
| Dispersion relation | Pure quadratic | Transcendental with saturation |
| Phase velocity at high frequency | Grows without bound | Saturates at shear speed |
| Group velocity at high frequency | Grows without bound | Saturates |
| Mathematical complexity | 4th-order equation | Coupled 4th-order system |
| Validity | k·[[r_giro]] less than 0.3 | Full frequency range |
| Main application | Slender beams at audible frequency | Thick beams or ultrasonic frequencies |