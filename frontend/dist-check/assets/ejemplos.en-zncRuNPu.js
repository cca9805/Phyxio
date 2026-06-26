const e=`# Exam-type example

## Problem statement
A 5 MHz ultrasonic transducer is used to inspect a steel plate. The initial pulse amplitude is 2.0 MPa. After traversing 15 mm of material, the measured amplitude is 0.8 MPa. Determine the material's attenuation coefficient, the characteristic attenuation length, and the total loss in decibels. Analyze whether the selected frequency is adequate to detect 2 mm size defects.

## Data
- Transducer frequency: 5 MHz
- Initial amplitude: 2.0 MPa
- Amplitude at 15 mm: 0.8 MPa
- Propagation distance: 15 mm
- Minimum defect size to detect: 2 mm
- Sound velocity in steel: 5900 m/s

## System definition
The system consists of a longitudinal ultrasonic wave propagating in homogeneous steel. Collimated beam propagation (plane waves) and pure exponential attenuation are assumed. The dominant quantity is the attenuation coefficient [[alpha]], which characterizes the material's intrinsic losses. The initial amplitude [[A0]] represents the signal at the origin, while [[A]] is the attenuated amplitude after traveling distance [[x]].

## Physical model
The exponential attenuation model for plane waves in homogeneous medium is applied. The relationship between initial amplitude [[A0]], amplitude at distance [[A]], attenuation coefficient [[alpha]], and distance [[x]] follows the exponential law. The model is valid as long as the beam is collimated and the material is homogeneous and isotropic. This fundamental model connects amplitude loss with intrinsic material properties through [[alpha]].

## Model justification
The exponential model is appropriate because the distance (15 mm) is much smaller than the typical beam diameter (10-20 mm), satisfying the plane wave approximation. Steel is homogeneous at the wavelength scale (1.2 mm), so [[alpha]] can be considered constant. The model would cease to be valid if the distance were comparable to the beam diameter or if property gradients existed in the material. Validity also requires no significant geometric dispersion, which is satisfied in the described configuration.

## Symbolic solution
To determine the attenuation coefficient, [[alpha]] is solved from the exponential relationship:

{{f:atenuacion_exponencial}}

Applying natural logarithm to both sides and solving for [[alpha]], we obtain the relationship for the attenuation coefficient.

Once [[alpha]] is obtained, the characteristic attenuation length is calculated:

{{f:longitud_atenuacion}}

This inverse relationship defines the characteristic distance where amplitude reduces to 37% of the initial value.

For the loss in decibels, the base-10 logarithmic relationship is used:

{{f:perdida_db}}

The logarithmic scale facilitates comparison of losses across different amplitude ranges.

To evaluate frequency suitability, we consider the coefficient's frequency dependence:

{{f:dependencia_frecuencia}}

Additionally, in media where dispersion is significant, the relationship between phase and group velocity:

{{f:relacion_dispersion}}

These relations predict how attenuation and pulse propagation would change when varying transducer frequency.

## Numerical substitution
For the attenuation coefficient, take the natural logarithm of the ratio 0.8/2.0 and divide by 0.015 m. The ratio 0.8/2.0 is 0.4, whose natural logarithm is approximately negative 0.916. Dividing negative 0.916 by 0.015 m gives approximately 61.1 Np/m. Therefore [[alpha]] has a value of about 61.1 Np/m.

For the attenuation length, calculate the inverse of 61.1 Np/m, which gives approximately 0.0164 m or 16.4 mm. Thus [[L_d]] has a value of about 16.4 mm.

For the loss in decibels, calculate 20 × log10(2.0/0.8). The ratio 2.0/0.8 is 2.5, whose base-10 logarithm is approximately 0.398. Multiplying by 20 gives approximately 7.96 dB. Therefore [[L_db]] has a value of about 7.96 dB.

## Dimensional validation
- Attenuation coefficient: dimensionless/meter = \`[L⁻¹]\` ✓
- Attenuation length: meter = \`[L]\` ✓  
- Loss in dB: dimensionless (dB reference) ✓

Units of [[alpha]]: natural logarithm is dimensionless, divided by meters results in Np/m, dimension \`[L⁻¹]\`.

Units of [[L_d]]: inverse of Np/m results in meters, dimension \`[L]\`.

Units of [[L_db]]: base-10 logarithm is dimensionless, multiplied by 20 maintains dimensionlessness with dB reference.

Dimensional breakdown: the exponential argument [[alpha]]·[[x]] must be dimensionless, result of \`[L⁻¹]\` times \`[L]\` equals \`[1]\`.

The ratio [[A]]/[[A0]] is dimensionless by nature, consistent with model expectations.

## Physical interpretation
The attenuation coefficient of 61.1 Np/m indicates that steel has moderate losses at 5 MHz. The attenuation length of 16.4 mm means that every 16.4 mm the signal reduces to 37% of its initial value. The total loss of 7.96 dB is moderate, allowing reliable detection at this distance.

The wavelength at 5 MHz is 1.18 mm (5900 m/s divided by 5×10⁶ Hz). According to the detection criterion, wavelength must be smaller than half the defect size. With 1.18 mm < 1 mm, the frequency is adequate to detect 2 mm defects.

If frequency increased to 10 MHz, wavelength would reduce to 0.59 mm, improving resolution but [[alpha]] would likely increase due to frequency dependence, reducing useful penetration. If frequency decreased to 2 MHz, penetration would increase but wavelength would be 2.95 mm, compromising small defect detection.

The maximum detection depth, considering a typical 40 dB threshold, would be approximately five times the attenuation length, giving about 82 mm. This allows inspecting moderate thickness parts with this configuration. The result shows a good balance between penetration and resolution for the described application.

In this specific case, although steel is not strongly dispersive at 5 MHz, it is important to consider the relationship between [[v_f]] and [[v_g]] for high-precision timing applications. In weakly dispersive media, both velocities differ by less than 1%, but in materials with complex microstructure the difference can exceed 10%, affecting temporal resolution when detecting very close defects.

# Real-world example

## Context
In a power generation plant, a 50 mm thick titanium alloy tube must be inspected for internal corrosion. The tube operates at 400°C and is subjected to vibrations that can cause fatigue cracks. 2.5 MHz and 10 MHz transducers are available, and the optimal frequency balancing resolution and penetration needs to be determined.

## Physical estimation
For titanium at elevated temperature, the typical attenuation coefficient is approximately 15 Np/m at 2.5 MHz and follows a power law with exponent n of about 1.2. Using the frequency dependence relationship:

{{f:dependencia_frecuencia}}

At 10 MHz, [[alpha]] would be approximately 15 multiplied by (10/2.5) raised to the power of 1.2, which gives about 94.5 Np/m.

With 2.5 MHz, the attenuation length is approximately 66.7 mm. The total loss at 50 mm would be about 0.75 lengths, corresponding to attenuation where approximately 47% of amplitude remains. In dB, this is approximately 6.5 dB, perfectly detectable.

With 10 MHz, the attenuation length is approximately 10.6 mm. The total loss at 50 mm would be about 4.7 lengths, corresponding to attenuation where approximately 0.9% of amplitude remains. In dB, this is approximately 40 dB, near the detection limit.

The wavelength at 2.5 MHz (assuming 6100 m/s in titanium) is approximately 2.44 mm, allowing detection of defects greater than 1.2 mm. At 10 MHz, the wavelength is approximately 0.61 mm, allowing detection of defects greater than 0.3 mm.

## Interpretation
For internal corrosion detection (typically > 1 mm), 2.5 MHz is sufficient and provides excellent penetration with moderate losses. For incipient fatigue crack detection (can be < 0.5 mm), 10 MHz would be necessary but penetration would be limited.

The optimal strategy would be to use 2.5 MHz for general corrosion inspection and 10 MHz only for critical regions where small cracks are suspected. Elevated temperature increases [[alpha]] by approximately 20% compared to room temperature, so detection margins are more conservative.

In this case, 2.5 MHz frequency provides the best compromise for the main application, with useful penetration depth of approximately three times the attenuation length, which is more than sufficient for the tube thickness.
`;export{e as default};
