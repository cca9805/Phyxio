const e=`# Common Errors in Adiabatic Processes\r
\r
## Conceptual Errors\r
\r
### Error 1: "Adiabatic means constant temperature"\r
\r
**Why it seems correct**\r
\r
Students associate "no heat" with "no thermal change." Since heat is the most familiar way to change temperature in everyday life (heating a pot, cooling outdoors), it seems reasonable to think that if there is no heat, temperature does not change. This overgeneralization conflates two distinct things: heat as a transfer mechanism and temperature as a state variable.\r
\r
**Why it is incorrect**\r
\r
Temperature is a property of the internal energy of the gas. Internal energy can change through both heat and work. In an adiabatic process, mechanical work is the only agent of energy change. When the gas expands and does work, it loses internal energy and [[T2]] falls. When compressed, it gains internal energy and [[T2]] rises. The absence of heat does not protect temperature; on the contrary, work acts without thermal compensation.\r
\r
**Detection signal**\r
\r
The student writes [[DeltaT_ad]] = 0 in an adiabatic process with volume change, or states that "with no heat, temperature cannot change."\r
\r
**Conceptual correction**\r
\r
Constant temperature is the isothermal process, not the adiabatic one. In the adiabatic process, temperature changes because work modifies internal energy. The correct rule is: adiabatic expansion cools ([[T2]] < [[T1]]); adiabatic compression heats ([[T2]] > [[T1]]).\r
\r
**Contrast mini-example**\r
\r
A student applies the adiabatic process to a gas and concludes [[T2]] = [[T1]] = 300 K. If the volume doubled, temperature should have fallen to about 228 K for a diatomic gas. The student's conclusion amounts to saying the gas did work without consuming any of its own energy, which violates energy conservation.\r
\r
### Error 2: "The adiabatic and isothermal processes are the same because both seem to have no temperature change"\r
\r
**Why it seems correct**\r
\r
Students confuse the definition of each process. Since the isothermal process keeps temperature constant and the adiabatic process seems (incorrectly) to do so as well, students treat them as equivalent. Moreover, both are decreasing curves in the pV diagram, which visually reinforces the confusion.\r
\r
**Why it is incorrect**\r
\r
In the isothermal process, temperature is constant because the gas exchanges heat with the surroundings to compensate for work. In the adiabatic process there is no such heat exchange and temperature changes. The curves in the pV diagram have different slopes: the adiabat falls more steeply than the isotherm because [[gamma]] > 1. For the same volume change, final pressure and temperature differ between the two processes.\r
\r
**Detection signal**\r
\r
The student uses the isothermal work formula (integral of p dV with constant T) to calculate adiabatic work, or draws the same curve for both processes.\r
\r
**Conceptual correction**\r
\r
The distinction is made through the process condition: no heat exchange for adiabatic, constant temperature for isothermal. The adiabatic work formula uses [[gamma]] and the initial and final states; the isothermal formula uses the logarithm of the volume ratio. The pV diagram clearly shows the adiabat is steeper.\r
\r
**Contrast mini-example**\r
\r
For a diatomic gas with [[V2]] = 2 [[V1]] and [[T1]] = 300 K: the isothermal work is the product of initial pressure, initial volume and the natural logarithm of 2, while the adiabatic work is different and the final temperature is 228 K, not 300 K.\r
\r
## Model Errors\r
\r
### Error 3: "The adiabatic law pV raised to [[gamma]] applies to any adiabatic process"\r
\r
**Why it seems correct**\r
\r
The formula is presented in textbooks as "the adiabatic process equation" without emphasizing that it only holds for reversible quasi-static processes. Students apply it without checking whether those conditions are met.\r
\r
**Why it is incorrect**\r
\r
In an irreversible adiabatic expansion, such as free expansion into a vacuum, the gas does no work and [[DeltaU]] = 0. Temperature does not change even though volume increases. In that case, the reversible adiabatic law does not hold because gas entropy increases during the irreversible process, unlike the reversible case where entropy is constant.\r
\r
**Detection signal**\r
\r
The student applies the adiabat formula to a free expansion or a process with friction and obtains incoherent results.\r
\r
**Conceptual correction**\r
\r
The reversible adiabatic law applies only to **reversible** adiabatic processes. For irreversible processes, the relation between initial and final states depends on the type of irreversibility. The adiabatic condition of no heat exchange is necessary but not sufficient to use that law.\r
\r
**Contrast mini-example**\r
\r
A gas expands adiabatically into a vacuum (Joule expansion). Volume doubles with no heat and no work exchanged, so [[DeltaU]] is zero and [[T2]] equals [[T1]]. The reversible adiabatic law predicts [[T2]] equal to 228 K for a diatomic gas, which is incorrect. The correct result is [[T2]] equal to 300 K because there is no work.\r
\r
## Mathematical Errors\r
\r
### Error 4: "Using Celsius temperature in the adiabat formulas"\r
\r
**Why it seems correct**\r
\r
In everyday life, temperature is measured in Celsius. Many introductory problems also give temperature in Celsius, and students substitute it directly into formulas without converting. Since temperature differences are equal in Celsius and Kelvin, students do not feel the inconsistency in difference-based problems.\r
\r
**Why it is incorrect**\r
\r
The adiabat formulas and ideal gas internal energy use absolute temperature in Kelvin. The reason is that internal energy is proportional to absolute temperature, not Celsius. Using Celsius gives an incorrect [[T2]]/[[T1]] ratio and results can be physically absurd (negative temperature or wrong ratio).\r
\r
**Detection signal**\r
\r
The student substitutes [[T1]] = 27 degrees into formulas and obtains [[T2]] = 0.76 × 27 ≈ 20 degrees, which seems plausible but is incorrect. The correct result starts from [[T1]] = 300 K and gives [[T2]] ≈ 228 K.\r
\r
**Conceptual correction**\r
\r
Always convert temperature to Kelvin by adding 273.15 before substituting into any thermodynamic formula that uses absolute temperature. Formulas with the [[T2]]/[[T1]] ratio are especially sensitive to this error because the ratio depends on absolute values, not differences.\r
\r
**Contrast mini-example**\r
\r
With [[T1]] equal to 27 °C (300 K) and expansion doubling the volume with [[gamma]] equal to 1.4, using Celsius gives [[T2]] approximately 20.5 °C, a drop of only 6.5 degrees. Using Kelvin gives [[T2]] approximately 228 K (−45 °C), a drop of 72 degrees. The difference is enormous and changes the entire physical interpretation.\r
\r
## Interpretation Errors\r
\r
### Error 5: "If work is positive, temperature must rise"\r
\r
**Why it seems correct**\r
\r
In many everyday situations, receiving work (rubbing, compressing, striking) heats objects. Students generalize this without distinguishing who does the work. The confusion arises from mixing sign conventions: if positive W means work by the gas on the surroundings, the gas loses energy and cools.\r
\r
**Why it is incorrect**\r
\r
In the convention used in this leaf, [[W]] > 0 means the gas does work on the surroundings (expansion). By doing work, the gas loses internal energy and its temperature falls. [[W]] < 0 means surroundings do work on the gas (compression), and the gas heats up. The sign of [[W]] alone does not indicate heating or cooling: it must be related to who receives the work.\r
\r
**Detection signal**\r
\r
The student concludes that a gas expanding adiabatically (doing positive work) must heat up, or that adiabatic compression (negative work on the gas by their convention) must cool the gas.\r
\r
**Conceptual correction**\r
\r
Heating or cooling in an adiabatic process depends on whether the gas does work or receives it. Expansion: gas does [[W]] > 0, loses internal energy, [[T2]] < [[T1]]. Compression: gas receives work, gains internal energy, [[T2]] > [[T1]]. The adiabatic first law, [[DeltaU]] = −[[W]], summarizes this: if [[W]] > 0, [[DeltaU]] < 0, temperature falls.\r
\r
**Contrast mini-example**\r
\r
A compressor pushes a gas adiabatically. Work done on the gas is positive by thermodynamic convention (received work). Gas temperature rises. This is the opposite of what happens in adiabatic expansion where the gas pushes and cools. The key is identifying who does the work and on whom.\r
\r
## Quick Self-Control Rule\r
\r
Before accepting a result in an adiabatic process, check three things. First: is the process type correct? If volume changed, temperature must change; if someone claims it does not, the process would be isothermal. Second: is the sign of [[DeltaT_ad]] consistent with the process type? Expansion implies [[T2]] < [[T1]]; compression implies [[T2]] > [[T1]]. Third: are [[DeltaU]] and [[W]] opposite in sign and equal in magnitude? If not, the adiabatic energy balance is not satisfied and there is a calculation error.\r
\r
An additional quick check is to calculate work twice: once with the adiabatic work formula and once as the negative of [[DeltaU]]. If the two values agree within precision, the result is consistent with the adiabatic first law.\r
`;export{e as default};
