# Common errors — Otto Cycle

## Conceptual errors

### Error 1: Believing that Otto efficiency depends on the amount of heat supplied

**Why it seems correct**
In the Diesel cycle efficiency does depend on how much heat is injected (through the cutoff ratio). The student generalizes this dependence to Otto and expects more [[Q_H]] to change efficiency.

**Why it is incorrect**
In the Otto cycle, both heat exchange processes occur at constant volume. Temperature rises proportionally to [[Q_H]] during both combustion and exhaust, and the fraction converted to work depends exclusively on prior compression. The formula [[eta_O]] equals one minus one divided by [[r]] raised to [[gamma]] minus one does not contain [[Q_H]].

**Detection signal**
The student tries to modify efficiency by changing [[Q_H]] in the problem, or claims that injecting more fuel improves cycle efficiency.

**Conceptual correction**
Otto efficiency is purely geometric: it depends only on [[r]] and [[gamma]]. More fuel produces more work in absolute value but the same efficiency fraction. Diesel does depend on [[Q_H]] because combustion occurs at constant pressure.

**Mini contrast example**
With [[r]] of 10 and [[gamma]] of 1.4, whether [[Q_H]] is 500 kJ/kg or 2000 kJ/kg, [[eta_O]] is always 0.602. [[W_neto]] changes (301 vs 1204 kJ/kg) but the fraction is identical.

## Model errors

### Error 2: Assuming [[gamma]] is constant at all temperatures

**Why it seems correct**
Textbooks present the formula with [[gamma]] of 1.4 as a universal air constant, and exam problems always use this fixed value.

**Why it is incorrect**
The adiabatic index of air decreases from 1.4 at ambient temperature to values near 1.3 or lower at combustion temperatures (2000 to 2800 K). Combustion gases additionally contain carbon dioxide and water, with even lower [[gamma]]. Using 1.4 overestimates theoretical efficiency by 10 to 15 %.

**Detection signal**
The student obtains theoretical efficiencies above 60 % for moderate compression ratios without questioning the validity of the cold-air standard model.

**Conceptual correction**
The cold-air standard ([[gamma]] of 1.4) gives the upper limit. The hot-air standard ([[gamma]] of 1.3) is more realistic. The exact value requires numerical integration with temperature-dependent property tables.

**Mini contrast example**
With [[r]] of 10, cold air ([[gamma]] of 1.4) gives efficiency of 60.2 %, but hot air ([[gamma]] of 1.3) gives 49.9 %. The 10.3 percentage point difference is not negligible in engineering.

## Mathematical errors

### Error 3: Using temperatures in Celsius instead of kelvin

**Why it seems correct**
Problem statements usually give temperatures in Celsius and the student substitutes them directly into formulas without converting. The procedure seems natural because temperatures are already direct numerical data.

**Detection signal**
The student obtains negative efficiencies or values greater than one when calculating efficiencies with temperature ratios. They may also get seemingly reasonable but incorrect values if both temperatures are high in Celsius.

**Why it is incorrect**
Thermodynamic formulas require absolute temperatures in kelvin. A ratio of Celsius temperatures has no thermodynamic meaning because the Celsius zero is arbitrary. If comparing Otto efficiencies with Carnot using cycle temperatures, conversion to kelvin is mandatory.

**Conceptual correction**
Always convert temperatures to kelvin before any thermodynamic calculation. Mnemonic rule: if a temperature appears in an efficiency formula, it must be in kelvin.

**Mini contrast example**
If extreme cycle temperatures are 27 degrees Celsius (300 K) and 1727 degrees Celsius (2000 K), Carnot efficiency with kelvin is one minus 300 divided by 2000, that is 0.85. With Celsius it would be one minus 27 divided by 1727, that is 0.984, which is incorrect and severely overestimates.

## Interpretation errors

### Error 4: Believing that increasing the compression ratio is always beneficial

**Why it seems correct**
The formula shows that [[eta_O]] grows monotonically with [[r]]. The student concludes that it is always convenient to increase [[r]] to improve the engine.

**Why it is incorrect**
Efficiency grows with negative concavity: marginal increments are increasingly smaller. Furthermore, at compression ratios above 12 in gasoline engines, the air-fuel mixture self-ignites by compression before the spark fires (detonation or knocking), causing mechanical damage, vibrations, and efficiency losses exceeding the theoretical gain.

**Detection signal**
The student proposes using [[r]] of 20 or 25 in a gasoline engine without mentioning detonation or practical limitations.

**Conceptual correction**
The practical limit of [[r]] in Otto engines is 8 to 12 due to detonation. Diesel engines can use [[r]] of 14 to 25 because they compress only air. The benefits of increasing [[r]] must be evaluated against detonation losses and increased pressures and temperatures.

**Mini contrast example**
From [[r]] of 8 to [[r]] of 10 with [[gamma]] of 1.4, [[eta_O]] rises from 0.565 to 0.602 (3.7 points). From [[r]] of 10 to [[r]] of 12, it rises from 0.602 to 0.630 (2.8 points). From [[r]] of 12 to [[r]] of 14, it rises from 0.630 to 0.652 (2.2 points). Marginal returns are clearly diminishing.

## Quick self-control rule

### Error 5: Obtaining an efficiency higher than Carnot between the extreme cycle temperatures

**Why it seems correct**
The student calculates [[eta_O]] with the Otto cycle formula and obtains a high value. They do not compare with the corresponding Carnot because they consider them independent formulas.

**Why it is incorrect**
Carnot efficiency between the extreme cycle temperatures (minimum and maximum temperature) is the absolute upper limit. If the calculated [[eta_O]] exceeds this value, there is a certain error in the data or calculation.

**Detection signal**
The calculated Otto efficiency exceeds Carnot efficiency between extreme cycle temperatures, or efficiency exceeds 0.70 with typical gasoline parameters.

**Conceptual correction**
Always verify that [[eta_O]] is less than Carnot efficiency between extreme temperatures. If not, review input data and intermediate calculations.

**Mini contrast example**
With [[r]] of 10 and [[gamma]] of 1.4, [[eta_O]] is 0.602. If cycle temperatures range from 300 K to 2000 K, Carnot is one minus 300 divided by 2000, that is 0.85. Since 0.602 is less than 0.85, the result is coherent.
