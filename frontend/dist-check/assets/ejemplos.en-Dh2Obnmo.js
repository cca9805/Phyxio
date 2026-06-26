const e=`# Exam-type example

## Problem statement

A sound source emits a pure tone at 680 Hz in air at 20 °C, where the speed of sound is 343 m/s and the air density is 1.21 kg/m³. The acoustic intensity measured at a certain distance from the source is 2.5×10⁻⁴ W/m². Calculate the wavelength of the sound wave in air, the acoustic pressure amplitude at that point, and provide a physical commentary on the results.

## Data

- Tone frequency: 680 Hz
- Speed of sound in air at 20 °C: 343 m/s
- Air density: 1.21 kg/m³
- Measured acoustic intensity: 2.5×10⁻⁴ W/m²

## System definition

The system is a plane harmonic sound wave propagating in one direction in air at 20 °C. The quantities of interest are [[lambda_son]], [[p0_ac]], and [[I_ac]]. The source emits continuously and steadily, so the sound field is stationary at the measurement point.

## Physical model

The **plane harmonic wave** model in a linear medium is applied. The key quantities are [[v_son]], [[f_son]], [[lambda_son]], [[p0_ac]], and [[I_ac]]. The fundamental formulas of the leaf are the kinematic relation between wave quantities and the relation between intensity and pressure amplitude.

## Model justification

The plane harmonic wave model is valid because the [[I_ac]] of 2.5×10⁻⁴ W/m² corresponds to a [[p0_ac]] of the order of a few pascals, well below the static pressure of air (101 325 Pa). The linear regime is satisfied with a wide margin. The frequency of 680 Hz is in the audible range, so [[lambda_son]] will be of the order of decimetres, a scale at which the plane wave model applies if the measurement point is sufficiently far from the source. The model fails if the source produces acoustic pressures exceeding hundreds of pascals or if the measurement point is less than one wavelength from the source.

## Symbolic solution

To calculate [[lambda_son]], the kinematic relation between [[v_son]], [[f_son]], and [[lambda_son]] is applied:

{{f:relacion_vel_freq_lambda}}

Solving for [[lambda_son]]:

{{f:onda_presion_armonica}}

To calculate [[p0_ac]] from [[I_ac]], the acoustic intensity expression for a plane harmonic wave is applied, relating [[I_ac]] to [[p0_ac]], medium density, and [[v_son]]:

{{f:intensidad_acustica}}

Solving for [[p0_ac]]:

{{f:intensidad_acustica}}

## Numerical substitution

Wavelength: dividing [[v_son]] by [[f_son]] gives 343 m/s divided by 680 Hz, which results in approximately 0.504 m. Therefore [[lambda_son]] ≈ 0.504 m, that is, about 50 centimetres.

Pressure amplitude: solving for [[p0_ac]] from the intensity formula requires taking the square root of the product of two times [[I_ac]] times density times [[v_son]]. Multiplying 2 by 2.5×10⁻⁴ W/m² by 1.21 kg/m³ by 343 m/s gives approximately 0.2076 Pa². The square root of 0.2076 is approximately 0.456 Pa. Therefore [[p0_ac]] ≈ 0.456 Pa.

## Dimensional validation

Wavelength: speed divided by frequency has dimensions \`[L T⁻¹] / [T⁻¹]\`, resulting in \`[L]\`, i.e., metres. ✓

Pressure amplitude: the intensity formula gives \`[M T⁻³]\` equated to \`[M² L⁻² T⁻⁴] / ([M L⁻³] · [L T⁻¹])\`. Operating, the denominator has dimensions \`[M L⁻³] · [L T⁻¹]\` giving \`[M L⁻² T⁻¹]\`. The ratio yields \`[M T⁻³]\`. The square root of \`[M² L⁻² T⁻⁴]\` gives \`[M L⁻¹ T⁻²]\`, which are units of pressure. ✓

## Physical interpretation

The result [[lambda_son]] ≈ 0.504 m confirms that a 680 Hz tone in air has a wavelength comparable to the size of an adult. This explains why that sound diffracts easily around objects of that size: diffraction is effective when the obstacle is comparable to [[lambda_son]]. To acoustically shadow that sound with an obstacle, the obstacle would need to be much greater than half a metre to produce an effective acoustic shadow.

The result [[p0_ac]] ≈ 0.456 Pa means that the instantaneous [[p_ac]] oscillates between compression and rarefaction with that amplitude. It is approximately 26 times greater than the hearing threshold (20 µPa), but well below the pain threshold (20 Pa), so the physical state is an audible linear pressure disturbance rather than a large static compression of the air. It corresponds to an intensity level of around 84 dB, equivalent to the noise of a street with moderate traffic.

If [[p0_ac]] were doubled (to approximately 0.91 Pa), [[I_ac]] would quadruple (to approximately 10⁻³ W/m²) and the sound level would increase by 6 dB. This quadratic relationship between amplitude and intensity is the reason why the energetic effort required to significantly increase perceived loudness grows much faster than signal amplitude.

---

# Real-world example

## Context

In the design of concert halls, one of the fundamental criteria is ensuring that sound reaches all listeners with sufficient [[I_ac]] and without the level difference between the front and back rows being perceptually unacceptable. An acoustic architect must estimate which wavelengths are relevant for the design reference frequency and how waves behave in the hall.

For a typical concert hall 40 m long, with a design frequency of 125 Hz (low-frequency critical for reverberation) and interior air temperature of 22 °C (speed of sound approximately 345 m/s), estimate [[lambda_son]] and discuss the design implications.

## Physical estimation

Applying the relation between [[v_son]], [[f_son]], and [[lambda_son]]: dividing 345 m/s by 125 Hz gives approximately 2.76 m. Therefore [[lambda_son]] ≈ 2.76 m at 125 Hz.

This [[lambda_son]] is comparable to the height of an adult (1.7 m) and much smaller than the hall length (40 m). At 40 m distance, sound will have travelled about 14.5 wavelengths at 125 Hz; if [[I_ac]] were to decay following the inverse square law (point source), [[I_ac]] in the back row would be about 200 times smaller than in the front. In sound level, that difference would be approximately 23 dB, which in practice would be unacceptable for an auditorium.

For a reference [[p0_ac]] of 1 Pa in the front area, the reference [[I_ac]] would be 1 divided by the product of two times density (1.21 kg/m³) times [[v_son]] (345 m/s), resulting in approximately 1.2×10⁻³ W/m². In the back row, without acoustic treatment, [[I_ac]] could drop to values near the hearing threshold for instruments of soft dynamics.

## Interpretation

The [[lambda_son]] of 2.76 m at 125 Hz means that acoustic obstacles in the hall (seats, balconies, walls) must be designed with dimensions greater than this scale to act as effective reflectors. A balcony with a 1.5 m cantilever reflects 125 Hz frequencies with little efficiency, but reflects well the frequencies above 500 Hz (where [[lambda_son]] is below 0.7 m in the same medium).

This interaction between the [[lambda_son]] of each frequency and the hall geometry is the foundation of acoustic design: the architect adjusts surfaces, angles, and materials so that the relevant frequencies reach all listeners uniformly, taking advantage of the fact that each frequency "sees" the hall differently according to the relationship between [[lambda_son]] and the physical dimensions of the architectural elements.
`;export{e as default};
