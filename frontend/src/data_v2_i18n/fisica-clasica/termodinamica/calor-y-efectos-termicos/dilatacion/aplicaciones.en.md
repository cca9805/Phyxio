# Applications

## 1. Expansion joints in bridges and railway tracks

Steel bridges and railway tracks are subjected to seasonal temperature variations that can exceed 60 K between winter and summer. If the ends of a metal span were rigidly fixed without leaving room for movement, the constrained expansion would generate compressive stresses capable of exceeding the elastic limit of the steel and causing lateral buckling of the structure—a catastrophic failure known in railway engineering as sun kink.

The design solution is the expansion joint: a calculated gap between adjacent spans that allows free [[DeltaL]] movement without generating internal stresses. The joint length is calculated directly by applying the linear expansion law with [[alpha]] of steel, [[L0]] of the span, and the maximum [[DeltaT]] expected between the installation temperature and the extreme service temperature. In modern long-span suspension bridges, roller or neoprene bearing devices accommodate horizontal displacements of several decimetres.

The principle behind this application is that expansion cannot be fought—only accommodated: the correct design accepts that [[DeltaL]] will occur and provides the necessary travel for it to do so without damaging the structure.

Dominant variable: the linear expansion coefficient [[alpha]] of the structural material and the total span length [[L0]] determine the minimum travel the expansion joint must provide.
Validity limit: the linear model with constant [[alpha]] is valid for temperature changes below 200 K from the installation temperature; for structures exposed to fire or extreme process temperatures, the variable [[alpha]](T) model is required.

## 2. Bimetallic thermostats

A bimetallic thermostat consists of two strips of different metals—typically brass with [[alpha]] ≈ 19×10⁻⁶ K⁻¹ and steel with [[alpha]] ≈ 12×10⁻⁶ K⁻¹—bonded or riveted along their entire surface. When the assembly heats up, the brass tries to expand more than the steel, but the mechanical coupling prevents free movement. The difference in [[DeltaL]] between the two strips generates an internal stress that is released through bending of the assembly: the bimetal curves toward the side of the material with the lower [[alpha]].

This curvature is proportional to [[DeltaT]] and to the difference in [[alpha]] between the two materials, and can act mechanically on an electrical contact: when the temperature reaches the design threshold, the curved bimetal opens or closes the circuit. This is how the thermostat in domestic water heaters, thermal circuit breakers, and many industrial safety switches works.

The advantage of this device is that it directly converts a temperature change into a mechanical displacement without any active electronic component, with extraordinary reliability and no self-energy consumption.

Dominant variable: the difference between the [[alpha]] values of the two materials and the length of the bimetallic strip determine the sensitivity and travel of the thermal actuator.
Validity limit: the linear bending model is valid for [[DeltaT]] below approximately 150 K; above that, the response may become non-linear due to changes in mechanical properties and plastic deformation of the strips.

## 3. Calibration of precision measuring instruments

Metrological standard rules, Johansson gauge blocks, and wavelength interferometers are made from low-[[alpha]] materials—low-expansion stainless steel, invar, or Zerodur ceramic—to minimise the effect of [[DeltaT]] on the reference length [[L0]]. However, even in materials with [[alpha]] ≈ 1×10⁻⁶ K⁻¹, a temperature change of 1 K over a 1 m rule produces an error of 1 micrometre, which can be critical in high-precision metrology.

Industrial metrology rooms are therefore air-conditioned to 20 °C ± 0.1 K, and standards are acclimatised for 24 hours before use. In ultra-precision metrology, the expansion correction is applied explicitly: the actual temperature of the standard is measured and [[DeltaL]] from the reference temperature is calculated, correcting the reading accordingly.

This example illustrates that the linear expansion law not only predicts problems at engineering scale but also sub-micrometre corrections in precision science.

Dominant variable: [[alpha]] of the standard material and the temperature variation [[DeltaT]] from 20 °C determine the length error introduced without correction.
Validity limit: for objects longer than 1 m and precisions below 1 micrometre, [[alpha]] of the material must be known with an uncertainty below 1% and [[DeltaT]] must be controlled to tenths of a kelvin.

## 4. Design of industrial piping and process plants

Steam, process gas, and high-temperature fluid pipelines in refineries and petrochemical plants experience temperature changes of up to 400 K between cold start-up and nominal operation. For a 100 m steel pipeline with [[DeltaT]] of 300 K, the elongation calculated using the linear expansion law exceeds 36 cm. If the pipeline were rigidly welded to support structures at both ends, that constrained elongation would generate axial stresses capable of rupturing welds and flanges within a few start-up and shutdown cycles.

Industrial pipeline design incorporates expansion loops (U-shaped or zigzag sections), metal bellows, and sliding supports that allow free [[DeltaL]] movement without transmitting excessive forces to connected equipment (pumps, compressors, heat exchangers). The length of the expansion loops is calculated from the expected [[DeltaL]] and the flexibility of the piping, using design codes such as ASME B31.3.

Mastering the linear expansion law is here a direct prerequisite for piping flexibility analysis, which combines [[DeltaL]] with the Young's modulus of the material to estimate stresses and reactions at supports.

Dominant variable: the total accumulated [[DeltaL]] in the pipe run between fixed anchor points is the design variable that sizes the movement compensation elements.
Validity limit: for [[DeltaT]] above 300 K, [[alpha]] of steel varies by more than 5% and it is necessary to use the tabulated average value over the interval or to integrate [[alpha]](T) over the operating temperature range.

## 5. Fluid expansion in tanks and closed hydraulic systems

When a fuel tank, a cooling water circuit, or a hydraulic system is completely filled with a liquid and then heated, the liquid tries to expand with its own [[beta]] coefficient (for example, hydraulic oil with [[beta]] ≈ 700×10⁻⁶ K⁻¹). Simultaneously, the metal container also expands with its equivalent [[beta]] of approximately 3·[[alpha]] of the metal. The net free volume change available to the liquid is the difference between the liquid's expansion and the container's expansion.

If the system is completely rigid and closed without a compensation device, this differential expansion generates an internal pressure that can be extraordinarily high: for a hydraulic oil with [[beta]] four times greater than that of steel, a temperature change of 50 K in a full circuit produces a pressure of tens of bar, enough to burst fittings or damage seals.

The standard solution is the expansion tank (or expansion vessel): a reservoir connected to the system with a calculated free volume to absorb [[DeltaV]] from the fluid without generating excessive pressure. The capacity of the vessel is sized directly from the volumetric expansion law applied to the total fluid volume and the maximum operating [[DeltaT]].

Dominant variable: the difference between [[beta]] of the fluid and the equivalent [[beta]] of the metal container determines the net expansion volume that the compensation vessel must accommodate.
Validity limit: for fluids with non-linear thermal behaviour (such as water between 0 and 4 °C) or for mixtures, [[beta]] varies with T and must be calculated using fluid-specific tabulated data over the operating range.
