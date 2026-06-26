# Exam-type example

## Problem statement

A rigid laboratory steel cylinder contains diatomic nitrogen gas. The cylinder is hermetically sealed. The gas is electrically heated until its temperature rises by a total of 250 K. Determine the internal energy absorbed by the gas, the heat exchanged with the surroundings, and the mechanical work done during the process.

## Data

- Amount of substance: 3 mol of diatomic nitrogen
- Temperature change: 250 K
- Molar heat capacity at constant volume of diatomic nitrogen: 20.8 J per mol and kelvin
- Perfectly rigid container (constant volume)

## System definition

The thermodynamic system is the mass of nitrogen enclosed in the steel cylinder. The system boundary coincides with the internal walls of the cylinder. Since the walls are rigid, the system boundary is fixed in space and cannot displace, establishing the isochoric condition.

The surroundings include everything around the cylinder, including the electrical heating system that supplies the energy. The interaction between system and surroundings occurs exclusively through heat transfer across the cylinder walls.

## Physical model

The process is isochoric because the container is perfectly rigid. The key magnitudes are the change in internal energy [[DeltaU]], the heat exchanged [[Q]], mechanical work [[W]], the temperature change [[DeltaT]], the number of moles [[n]], and the molar heat capacity at constant volume [[Cv]].

Since the process is isochoric, [[W]] is zero by geometric condition. The fundamental relation of the process is that [[DeltaU]] equals [[Q]], directly computed from the product of [[n]], [[Cv]] and [[DeltaT]].

## Model justification

The isochoric model is valid because the steel cylinder is a rigid container that undergoes no significant deformation. Diatomic nitrogen at normal temperatures behaves as an ideal gas with constant [[Cv]] of 20.8 J per mol and kelvin, corresponding to five-halves of the gas constant (three translational and two rotational degrees of freedom). A temperature rise of 250 K does not activate the vibrational modes of nitrogen, which are only relevant above 1000 K.

The model would cease to be valid if the cylinder deformed under the generated pressure, if there were gas leaks during heating, or if the temperature reached values close to nitrogen molecular dissociation (above 3000 K).

## Symbolic solution

First step: identify the type of process. Since volume is constant, work is zero:

{{f:trabajo_isocorico}}

Second step: compute [[DeltaU]] directly using the fundamental isochoric process formula:

{{f:energia_interna_isocorica}}

Third step: apply the isochoric process identity between heat and internal energy:

{{f:calor_isocorico}}

Fourth step: express the temperature change from the initial and final states:

{{f:variacion_temperatura_isocorica}}

## Numerical substitution

For work, since the process is isochoric, the result is directly zero. Therefore [[W]] is 0 J.

For the change in internal energy, multiply 3 mol by 20.8 J per mol and kelvin by 250 K. The product of 3 by 20.8 is 62.4, and multiplying by 250 gives 15 600 J. Therefore [[DeltaU]] ≈ 15 600 J, equivalent to 15.6 kJ.

For the heat exchanged, applying the isochoric identity [[Q]] equals [[DeltaU]]. Therefore [[Q]] ≈ 15 600 J, equivalent to 15.6 kJ.

For the temperature change, if the initial temperature is 300 K and the final is 550 K, subtracting 300 from 550 gives 250 K. Therefore [[DeltaT]] ≈ 250 K, confirming the problem data.

## Dimensional validation

For [[DeltaU]]: multiplying moles by units of molar heat capacity by kelvins yields joules. Expressing the dimensions: `[N] · [M L² T⁻² Θ⁻¹ N⁻¹] · [Θ]` cancels moles and kelvins, leaving `[M L² T⁻²]`, which is the dimension of energy in joules. The dimensional check confirms the result.

For [[W]]: since it is zero, the check is trivial. A zero work is always dimensionally consistent with `[M L² T⁻²]`.

## Physical interpretation

Physically, [[DeltaU]] equal to 15 600 J means that the total molecular kinetic energy of the nitrogen has increased by that amount. Every molecule moves faster after the process: temperature increases by 250 K, which indicates an 83 % relative rise in absolute temperature if the initial temperature was 300 K. This increase implies that gas pressure also rises in exactly the same proportion, reaching 1.83 times its initial value — a direct consequence of Gay-Lussac's law at constant volume.

The value of [[Q]] equal to 15.6 kJ represents the heat supplied by the electrical heating system. This result depends linearly on [[n]]: doubling the moles to 6 mol while keeping the same [[DeltaT]] would increase both [[DeltaU]] and [[Q]] to 31.2 kJ. The molecular structure also dominates: helium (monatomic, [[Cv]] of 12.5 J per mol and kelvin) would require only 9375 J for the same [[DeltaT]], about 40 % less than nitrogen, because it has only three translational degrees of freedom compared to nitrogen's five active ones. Physically, more degrees of freedom means the gas absorbs more energy per kelvin of temperature rise.

---

# Real-world example

## Context

An incorrectly calibrated safety valve in an industrial reactor becomes blocked during a controlled heating cycle. The reactor contains 50 mol of triatomic carbon dioxide at an initial temperature of 400 K. During the blockage, the gas receives 248 kJ of heat before operators activate the emergency system. The reactor volume remains constant throughout the incident.

## Physical estimation

For carbon dioxide at 400 K, the molar heat capacity at constant volume is approximately 24.9 J per mol and kelvin (triatomic gas with six active degrees of freedom). Applying the isochoric relation with [[Q]] equal to [[DeltaU]] and [[Q]] equal to 248 kJ, the temperature change is computed by dividing 248 000 J by the product of 50 mol and 24.9 J per mol and kelvin. The product of 50 by 24.9 is 1245 J per kelvin, and dividing 248 000 by 1245 gives [[DeltaT]] of approximately 199 K. The estimated final temperature of the gas in the reactor is 400 plus 199, about 599 K.

Gas pressure increases in the same proportion as temperature: the ratio of 599 K to 400 K is approximately 1.5, so pressure would have multiplied by 1.5. If the system was initially operating at 20 atm, pressure during the incident would reach about 30 atm.

## Interpretation

The 50 % pressure increase illustrates the danger of isochoric processes in closed industrial systems. All heat supplied to the gas went entirely into [[DeltaU]] because no mechanical work is possible with constant volume. In an equivalent isobaric process, part of that heat could have dissipated as expansion work, moderating the temperature rise. The rigidity of the container concentrates all thermal energy into pressure and temperature, which are the risk variables for the structural integrity of the reactor.

This type of isochoric analysis is the basis of safety calculations for compressed-gas storage tanks, steam boilers, and chemical process reactors. The design of safety valves is precisely based on the relationship between the heat that can be supplied to the system and the resulting pressure increase via Gay-Lussac's law at constant volume.
