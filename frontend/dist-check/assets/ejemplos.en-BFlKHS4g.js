const e=`# Exam-type example

## Problem statement

A cylindrical bar of aluminium 6061-T6, 3 metres long and 10 mm in diameter, is fixed at one end. The free end is struck with a hammer, generating a longitudinal pulse. Material data: Young's modulus 69 GPa, density 2700 kg/m³. Determine: (a) the longitudinal wave speed, (b) the time for the pulse to reach the fixed end, (c) the wavelength if the dominant impact frequency is 5 kHz.

Aluminium 6061-T6 data: Young's modulus 69 GPa (69 × 10⁹ Pa), density 2700 kg/m³.

## Data

- [[E_young]] (aluminium) = 69 × 10⁹ Pa
- [[rho]] (aluminium) = 2700 kg/m³
- Bar length: 3 m
- Diameter: 10 mm (0.010 m)
- Dominant impact [[f]]: 5000 Hz

## System definition

The system is a thin cylindrical aluminium bar with one free end and one fixed end. The wave is generated at the free end by mechanical impact and propagates longitudinally towards the fixed end. The diameter is assumed to be much smaller than the wavelength, validating the one-dimensional plane wave model.

## Physical model

The longitudinal wave speed model for thin bars is applied: [[v_fase]] depends on [[E_young]] and [[rho]]. The thin bar condition holds because the diameter (10 mm) is much smaller than the expected wavelength. Transit time is obtained by dividing length by velocity. Wavelength is obtained from the fundamental dispersion relation.

## Model justification

The model is valid because the bar diameter (10 mm) is much smaller than the expected wavelength. At 5 kHz, the wavelength will be on the order of one metre, more than 100 times the diameter. The thin bar criterion is satisfied with ample margin. Aluminium 6061-T6 is an isotropic, linearly elastic material in the regime of small strains produced by an ordinary impact.

## Symbolic solution

Longitudinal wave speed in a thin bar:

{{f:velocidad_longitudinal_barra}}

Transit time: time equals distance divided by velocity.

Wavelength from the dispersion relation:

{{f:relacion_dispersion}}

## Numerical substitution

(a) Longitudinal velocity:

[[v_fase]] = √([[E_young]] / [[rho]]) = √(69 × 10⁹ / 2700) = √(25.56 × 10⁶) ≈ 5055 m/s

(b) Transit time:

Time = length / [[v_fase]] = 3 / 5055 ≈ 5.93 × 10⁻⁴ s ≈ 0.593 ms

(c) Wavelength:

[[lambda]] = [[v_fase]] / [[f]] = 5055 / 5000 ≈ 1.011 m

## Dimensional validation

[[v_fase]]: √(Pa / (kg/m³)) = √((kg/(m·s²)) / (kg/m³)) = √(m²/s²) = m/s ✓

Time: m / (m/s) = s ✓

[[lambda]]: (m/s) / (1/s) = m ✓

## Physical interpretation

The velocity of 5055 m/s is consistent with tabulated values for aluminium (between 5000 and 5200 m/s for thin bars). The pulse takes less than one millisecond to travel the 3 metres of the bar, demonstrating the great propagation speed in metals. The wavelength of approximately one metre confirms that the thin bar model is valid: the wavelength is 100 times greater than the diameter.

If one wished to work with transverse waves in the same aluminium, [[G_mod]] (about 26 GPa) would be used instead of [[E_young]], obtaining a lower velocity of about 3100 m/s. This means a receiver placed at the fixed end would first detect the longitudinal arrival and approximately 0.35 ms later the transverse arrival. This temporal separation is the basis of source localisation techniques using arrival time differences.

The result coherence is also confirmed by order of magnitude: light metals like aluminium have longitudinal velocities in the range 5000 to 6500 m/s, while rigid polymers lie between 1500 and 2700 m/s. Ceramics and glasses can exceed 8000 m/s due to their high stiffness despite moderate density.

# Real-world example

## Context

At an aeronautical manufacturing plant, a batch of aluminium 6061-T6 bars is received and must be verified before use as structural reinforcements. A pulse-echo ultrasonic instrument is used to measure the longitudinal velocity in each bar and compare it against the certified material reference value.

## Physical estimation

As an order of magnitude estimation, the measured velocity would be approximately 5050 to 5150 m/s due to variations in exact alloy composition, heat treatment and crystallographic texture. Dispersion between samples from the same batch rarely exceeds 2%. If any bar gives a velocity below 4800 m/s, it could indicate internal porosity, inclusions or a defective heat treatment. In industrial inspection, these bars would be examined with transducers at 1 to 10 MHz, where wavelengths would be 0.5 to 5 mm, already at the limit of the thin bar model for 10 mm diameters.

## Interpretation

The ultrasonic velocity measurement acts as a fast and non-destructive quality control. A velocity within the expected range confirms that the material's elastic properties are correct. Significant deviations signal possible microstructural defects that would require additional inspection by other methods such as radiography or eddy current testing. This is one of the most direct industrial uses of the wave velocity concepts in solids presented in this leaf.

The measurement also provides indirect information about the elastic modulus: since [[v_fase]] depends on [[E_young]] and [[rho]], and density is easily measured or known from the alloy specification, any velocity anomaly translates directly into an anomaly in [[E_young]]. This makes ultrasonic velocity a proxy for mechanical stiffness, useful in acceptance testing of incoming materials where tensile testing every bar would be destructive and costly. In practice, measurements are automated with robotic arms passing bars through immersion tanks, achieving throughputs of hundreds of bars per hour with velocity resolution better than 0.1%.
`;export{e as default};
