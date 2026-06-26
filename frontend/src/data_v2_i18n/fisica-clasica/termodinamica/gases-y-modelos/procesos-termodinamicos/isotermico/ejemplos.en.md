# Exam-type example

## Problem statement

A sample of 2 moles of ideal nitrogen gas is initially at a pressure of 400 kPa and a volume of 12.5 litres in a container with conducting walls submerged in a thermostat bath at 300 K. The gas slowly expands isothermally until its pressure is reduced to half. Determine the final volume, the work done by the gas, and the heat exchanged with the thermal bath.

## Data

- Amount of gas: 2 mol
- Initial pressure: 400 kPa, equivalent to 400 000 Pa
- Initial volume: 12.5 litres, equivalent to 0.0125 cubic metres
- Temperature: 300 K (constant throughout the process)
- Final pressure: 200 kPa, equivalent to 200 000 Pa

## System definition

The system is the nitrogen gas enclosed in the container. The conducting walls allow heat exchange with the thermostat bath. The process is a reversible isothermal because the bath keeps [[T]] constant and the expansion is slow enough for the gas to be in equilibrium at all times. The system is closed: [[n]] does not vary.

## Physical model

The **ideal isothermal gas model** is applied. Boyle's Law guarantees that the product [[p1]] times [[V1]] equals the product [[p2]] times [[V2]]. The work [[W]] done by the gas is obtained by integrating pressure along the hyperbola between the initial and final volumes. Since [[T]] is constant, the change in internal energy is zero and by the first law the absorbed heat [[Q_iso]] equals [[W]].

## Model justification

The ideal gas model is appropriate for nitrogen at 300 K and pressures from 200 to 400 kPa (between 2 and 4 atm), well below the 100 atm limit where deviations exceed 10 %. The process is quasi-static because slow expansion is specified. The thermostat bath ensures [[T]] remains constant with high precision. The model would cease to be valid if pressure exceeded 100 atm or if the expansion were abrupt.

## Symbolic solution

The final volume is obtained directly from Boyle's Law, solving for the unknown volume:

{{f:ley_boyle}}

Since [[p2]] is half of [[p1]], the ratio [[p1]] over [[p2]] equals 2, so [[V2]] is twice [[V1]].

The isothermal work uses the natural logarithm of the volume ratio:

{{f:trabajo_isotermico}}

The natural logarithm of 2 is approximately 0.693. Therefore [[W]] is the product of [[n]], the gas constant, [[T]], and 0.693.

## Numerical substitution

For the final volume: the ratio between [[p1]] and [[p2]] is 2; multiplying [[V1]] by this ratio gives [[V2]] equal to 0.025 cubic metres, equivalent to 25 litres. Therefore [[V2]] ≈ 0.025 m³.

For work: multiplying 2 moles by 8.314 joules per mole per kelvin, by 300 K, and by the natural logarithm of 2 (approximately 0.693) gives approximately 3454 J. Therefore [[W]] ≈ 3454 J.

By the first law applied to the isothermal process, [[Q_iso]] equals exactly [[W]]. Therefore [[Q_iso]] ≈ 3454 J.

## Dimensional validation

For volume:

- Pressure has dimension `[M L⁻¹ T⁻²]` and volume has dimension `[L³]`. The pressure ratio is dimensionless; multiplying `[L³]` by a dimensionless number gives `[L³]` ✓

For work:

- Moles `[N]` multiplied by the gas constant `[M L² T⁻² N⁻¹ Theta⁻¹]`, by temperature `[Theta]` and by the natural logarithm (dimensionless): the result is `[M L² T⁻²]`, which is the dimension of energy in joules ✓

## Physical interpretation

The nitrogen gas underwent an isothermal expansion in which its volume doubled from 12.5 litres to 25 litres while pressure fell to half, from 400 kPa to 200 kPa. Therefore, the gas did approximately 3454 J of work on the piston. The magnitude of the work depends directly on the product [[n]] times [[T]]: at higher temperature or greater amount of gas, more work is done for the same volume ratio.

This work did not come from the gas's internal energy but from the heat [[Q_iso]] that the thermostat bath transferred to the gas. This is the most characteristic feature of the isothermal process: the gas does not "deplete itself" when expanding; it simply acts as an intermediary between the thermal reservoir and the mechanical surroundings. If the expansion had been adiabatic instead of isothermal, temperature would have fallen during the process, the gas would have done less work (because the adiabatic curve is steeper than the isothermal in the pV diagram), and there would be no heat exchange.

The curve traced by the gas in the pV diagram is Boyle's hyperbola. The area under that hyperbola between the two volumes represents exactly the calculated work. If [[T]] were higher, the hyperbola would be farther from the origin and the area under the curve would be larger, translating into more work for the same volume ratio.

# Real-world example

## Context

Air compressors used in mechanical workshops, physics laboratories, and industrial refrigeration systems compress air in an approximately isothermal manner when compression speed is low and heat dissipation to the outside is efficient. A typical workshop compressor operates between 100 kPa (atmospheric pressure) and 700 kPa (7 bar), reducing air volume by a factor of approximately 7 for each compression cycle.

## Physical estimation

For a compressor with a cylinder of 0.5 litres that compresses 1 litre of air at room temperature (300 K) to 700 kPa, the isothermal compression work is obtained with the logarithm of the volume ratio. The pressure ratio is 7, equivalent to a volume ratio of 7 according to Boyle's Law. The natural logarithm of 7 is approximately 1.946. For one mole of air (approximately 29 grams), the compression work [[W]] is approximately 4843 J per cycle, which the compressor must extract from the electric motor and which the air releases as heat to the compressor block and surrounding air.

In a real compressor, isothermal efficiency is 60 to 80 % because part of the process is inevitably faster than the thermal equilibration time, causing the real curve to approach the adiabatic curve. This means the heat dissipated at ambient temperature is less than the calculated compression work, and the difference raises the temperature of the compressed gas.

## Interpretation

The isothermal process in the compressor illustrates that compressing a gas always requires energy, and that energy can be managed in two ways: delivering it to the surroundings as heat (isothermal process, more efficient) or accumulating it in the gas as a temperature rise (adiabatic process, less efficient for subsequent cooling). Refrigeration systems prefer quasi-isothermal compression because it reduces the total cycle work and extends compressor life by avoiding temperature spikes.

The dependence of [[W]] on [[T]] explains why compressors have intercooling between multiple stages: compressing in several steps with cooling between each step better approximates the ideal isothermal process, reducing total required work compared to a single-stage adiabatic compression.
