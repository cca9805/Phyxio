const e=`## 1. Film capacitors in consumer electronics

Polypropylene or polyester film capacitors are ubiquitous in audio electronics, power supplies, and filters. Polypropylene has [[epsilon_r]] ≈ 2.2, low but with minimal dielectric losses; polyester has [[epsilon_r]] ≈ 3.3 with somewhat higher losses. The choice depends on the balance between compactness (favours high [[epsilon_r]]) and electrical quality (favours low losses).

In a power supply, the filtering capacitor converts a pulsating rectified signal into stable DC voltage. The required capacitance determines the residual ripple. Using a dielectric with [[epsilon_r]] three times higher allows the capacitor volume to be reduced to one-third at equal capacitance [[C_d]]. However, the higher dielectric loss of polyester at high frequency raises thermal dissipation and can reduce the component's service life.

Dominant variable: [[epsilon_r]] of the film material, which controls the trade-off between capacitor size and electrical quality.
Validity limit: the LHI model is valid as long as the operating frequency is below the relaxation frequency of the polymer and the field [[E_d]] does not exceed 20 % of the dielectric strength of the material.

## 2. Insulation of high-voltage cables

High-voltage transmission cables (100–500 kV) are surrounded by a layer of cross-linked polyethylene (XLPE) with [[epsilon_r]] ≈ 2.3. The primary objective is not to maximise capacitance but to electrically insulate the conductor and control the distribution of the field [[E_d]] between the conductor and the outer screen.

A low [[epsilon_r]] keeps [[E_d]] relatively uniform radially and reduces dielectric losses under alternating current. The dielectric acts here as a shield: it reduces the field in the region closest to the conductor, where the field is most intense in cylindrical geometry. If [[epsilon_r]] were higher, the cable capacitance would increase and with it the reactive charging current, which can exceed the cable's thermal capacity in long lines.

Dominant variable: [[epsilon_r]] of the insulator, which determines the capacitance per unit length of the cable and the radial [[E_d]] field profile.
Validity limit: the model is valid as long as [[E_d]] at the highest-field point (conductor surface) is below the dielectric strength of XLPE, approximately 20 MV/m.

## 3. Capacitive sensors for humidity and composition

Capacitive humidity sensors use a hygroscopic material as the dielectric. As the material absorbs moisture from the environment, the composite [[epsilon_r]] increases because liquid water has [[epsilon_r]] ≈ 80. The change in [[C_d]] is directly proportional to the change in [[epsilon_r]] of the composite, and measuring [[C_d]] allows the moisture content to be inferred.

In industrial control applications, the same principle is used to detect the level of a liquid in a tank: a partially submerged capacitor has an effective [[epsilon_r]] intermediate between that of the liquid and that of air, and [[C_d]] varies linearly with the level. Calibration requires knowing [[C_0]] with the tank empty and [[C_d]] with the tank full to determine the dynamic range of the sensor.

Dominant variable: the variation in [[epsilon_r]] of the active dielectric (hygroscopic composite or liquid-air mixture), which modifies [[C_d]] proportionally and measurably.
Validity limit: the sensor operates linearly as long as the change in [[epsilon_r]] is small relative to the nominal value (linear incremental regime). If the dielectric saturates or exhibits temperature hysteresis, linearity is lost.

## 4. Non-volatile ferroelectric memories (FeRAM)

Ferroelectric memories use materials with extremely high [[epsilon_r]] (lead-zirconate-titanate, PZT) that also exhibit dielectric hysteresis. The remanent polarisation of the material — which persists when the external field is removed — encodes the "0" and "1" bits of the memory without requiring continuous power.

The write cycle applies a field [[E_d]] above the coercive field of the ferroelectric, orienting the polarisation in one direction (writing "1") or the opposite (writing "0"). The read cycle detects whether the capacitor changes state when a probe field is applied: if there is a polarisation change, the detected charge is larger (bit "1"); if no change occurs (it was already aligned with the probe field direction), the charge is smaller (bit "0").

Dominant variable: the coercive field of the material, which determines the minimum write voltage and the operating range of the bit against thermal noise.
Validity limit: the rectangular hysteresis model is valid only at sufficiently high fields; at temperatures above the Curie temperature of the material, ferroelectricity disappears and the memory loses its non-volatile property.

## 5. Dielectric padding in MRI diagnostic devices

In magnetic resonance imaging equipment, electronic components inside the radiofrequency field area experience very intense fields at frequencies of tens to hundreds of MHz. High-[[epsilon_r]] dielectric sheets are used to deflect and redistribute the RF field, reducing hotspots in adjacent biological tissue (dielectric padding effect).

The operating principle is that a material with high [[epsilon_r]] concentrates field lines in its interior, redistributing the external field. Materials with [[epsilon_r]] between 50 and 300 (calcium-sulphate solutions or special ceramics) are modelled as "dielectric lenses" that homogenise the distribution of field [[E_d]] in the image volume. This effect cannot be modelled with the ideal parallel-plate capacitor: it requires three-dimensional electrostatics, but the key parameter governing the redistribution remains [[epsilon_r]] of the selected material.

Dominant variable: [[epsilon_r]] of the fill material, which controls the effective refractive index for radiofrequency waves and the field redistribution in the image volume.
Validity limit: the constant-[[epsilon_r]] model is valid as long as the operating frequency is below the relaxation frequency of the material and the variation of [[epsilon_r]] with temperature does not exceed 5 % over the working range.
`;export{e as default};
