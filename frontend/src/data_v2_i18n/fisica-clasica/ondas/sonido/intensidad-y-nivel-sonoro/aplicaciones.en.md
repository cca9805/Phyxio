# Applications of Sound Intensity and Level

## 1. Design of acoustic safety perimeters in industry

Occupational safety regulations establish maximum noise exposure limits. In Europe, Directive 2003/10/EC sets 80 dB(A) as the daily exposure level from which hearing protection must be provided, and 85 dB(A) as the mandatory use limit for such protection.

Industrial plants with high acoustic power machinery must calculate exclusion perimeters where access without protection is prohibited. For example, a mechanical press that radiates 10 W of acoustic power requires delimiting a safety zone where the level does not exceed 85 dB.

Using the intensity relation and the reference level, the minimum safety distance is calculated by solving for [[r]]. For 85 dB, the equivalent intensity is 3.16 times ten to the minus 4 W/m²; for this press the distance is close to 50 meters. Within this perimeter, workers must mandatorily use certified earplugs.

Dominant variable: Acoustic power [[P]] of the machine and distance [[r]] to the calculation point.

Validity limit: Approximate free field; in closed industrial buildings reflections enlarge the risk zone, so calculated perimeters are conservative (underestimate the real level).

## 2. Calibration of sound systems and professional audio

Audio engineers use sound level meters to calibrate PA (public address) systems at concerts, events, and auditoriums. The objective is to guarantee adequate sound pressure levels throughout the audience area without exceeding limits that cause fatigue or hearing damage.

At an outdoor concert, the sound system must provide approximately 90-100 dB in the central area of the stands for a satisfactory experience, but without exceeding 110 dB near the stage where technicians are located. Each loudspeaker in the system has a known acoustic power (e.g.: 500 W for a subwoofer), and the distance to the target zone determines the resulting intensity.

If 95 dB is required at 30 meters from the stage, the necessary power per loudspeaker is calculated by solving for [[P]], after obtaining [[I]] from the level. For 95 dB the equivalent intensity is ten to the minus 2.5 W/m², giving a power close to 113 W per source and indicating that a 500 W loudspeaker is sufficient with margin for directivity and losses.

Dominant variable: Power [[P]] of the transducers and distance [[r]] to the target audience zone.

Validity limit: Applicable to free or direct field; in enclosed venues the direct field plus reverberant model is applied, requiring acoustic simulation software for precision.

## 3. Measurement and control of environmental noise in urban planning

Municipalities and environmental agencies evaluate the acoustic impact of infrastructure such as highways, railways, or airports. Regulations (such as the Noise Law in Spain) establish limits according to zones: 50 dB during the day in residential areas, 60 dB in commercial zones.

For a highway modeled as an infinite line source (continuous traffic), intensity decays as 1/r instead of 1/r², because the "surface" of propagation is a cylinder, not a sphere. The power per unit length of the roadway (W/m) and the perpendicular distance to the highway determine the level at nearby homes.

If traffic generates a line power of 100 W/m and it is required to maintain 55 dB at residential facades, the equivalent intensity is ten to the minus 6.5 W/m². In line geometry, the minimum distance is estimated with a cylindrical source model, not with the point-source model, and is of order 100 meters. This justifies the creation of green belts or acoustic screens.

Dominant variable: Line power of traffic and cylindrical propagation geometry characteristic of line sources.

Validity limit: Infinite line source is a valid approximation for long straight sections; at curves or intersections the geometry changes. Ground absorption and vegetation reduce the real intensity.

## 4. Evaluation of noise-induced hearing damage

Otorhinolaryngologists and occupational health experts evaluate the risk of noise-induced hearing loss based on intensity and exposure time. ISO 1999 establishes that exposure to 85 dB for 8 hours daily over years can cause permanent damage to the auditory system.

Physical intensity determines the total energy received by the ear. If a worker operates a pneumatic hammer that produces 105 dB at their ear position, 8 hours of exposure is equivalent to 85 dB for... much more time than permitted. Using the conversion of levels to intensities and multiplying by time, the accumulated noise dose is calculated.

The noise dose compares the actual exposure time with the permitted time for that level. For 105 dB, the permitted time falls to about 6 minutes; a worker exposed 8 hours to 105 dB receives a dose of thousands of percent, catastrophic for hearing.

Dominant variable: Intensity level [[L]] and accumulated exposure time.

Validity limit: Dose formulas assume continuous exposure; noise-free breaks reduce the effective dose. Individual susceptibility varies, these being population average limits.

## 5. Design of headphones and noise cancellation systems

Audio engineers design passive isolation headphones and active noise cancellation (ANC) systems using principles of sound intensity. The objective is to reduce the intensity reaching the user's eardrum in noisy environments.

Passive isolation is based on materials that attenuate sound wave transmission. If the external environment is 80 dB (I = 10⁻⁴ W/m²) and it is desired to limit user exposure to 70 dB (I = 10⁻⁵ W/m²), the headphone must provide 10 dB of attenuation. This corresponds to reducing intensity to 1/10, which is achieved with absorbent materials and proper sealing against the head.

Active cancellation generates a wave of equal amplitude but opposite phase, reducing the resulting intensity by destructive interference. If the ambient wave and the cancellation wave have comparable intensities and opposite phase, the resulting intensity can theoretically cancel. In practice, perfect cancellation only occurs at low frequencies and specific positions, typically achieving 15-25 dB reduction.

To design the ANC system, the power that the headphone actuators must radiate to create a cancellation field equal to the ambient at the eardrum position is calculated. Solving for [[P]], with [[I]] of ten to the minus 5 W/m² (70 dB) and [[r]] of 0.02 m, the required power is of order 5 times ten to the minus 8 W, manageable with portable electronics.

Dominant variable: Ambient intensity to cancel [[I]] and efficiency of destructive interference.

Validity limit: Active cancellation works best for plane waves at low frequencies (< 1000 Hz); at high frequencies the short wavelengths make interference spatially variable and difficult to control.
