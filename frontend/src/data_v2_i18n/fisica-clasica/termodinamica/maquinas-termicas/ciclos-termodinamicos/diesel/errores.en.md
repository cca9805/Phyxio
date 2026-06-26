# Common errors — Diesel Cycle

## Conceptual errors

### Error 1: Believing that Diesel efficiency is always lower than Otto

**Why it seems correct**
The formula shows that, for the same compression ratio, the cutoff factor always penalizes Diesel. A student concludes that Diesel is inherently worse than Otto.

**Why it is incorrect**
Diesel engines operate with much higher compression ratios (14 to 25) than Otto engines (8 to 12), because fuel is not present during compression and there is no risk of premature detonation. This higher compression more than compensates for the cutoff factor penalty, making real Diesel engines more efficient than real Otto engines.

**Detection signal**
The student states that Diesel engines are less efficient without specifying whether the comparison is at equal compression ratio or under real operating conditions.

**Conceptual correction**
At equal compression ratio, Otto is more efficient. Under real operating conditions, Diesel is more efficient because it can use compression ratios impossible for Otto.

**Mini contrast example**
Otto with [[r]] of 10 and [[gamma]] of 1.4 has efficiency of 60.2 %. Diesel with [[r]] of 20, [[r_c]] of 2, and [[gamma]] of 1.4 has efficiency of 64.7 %. Diesel exceeds Otto despite the cutoff factor because its compression ratio is double.

## Model errors

### Error 2: Assuming [[gamma]] is constant at all temperatures

**Why it seems correct**
Textbooks present the formula with [[gamma]] of 1.4 as a universal air constant, and exam problems always use this fixed value.

**Why it is incorrect**
The adiabatic index of air decreases from 1.4 at ambient temperature to values near 1.3 or lower at combustion temperatures (1500 to 2500 K). Combustion gases additionally contain carbon dioxide and water, with even lower [[gamma]]. Using 1.4 overestimates theoretical efficiency by 10 to 15 %.

**Detection signal**
The student obtains theoretical efficiencies above 65 % for moderate compression ratios without questioning the validity of the cold-air standard model.

**Conceptual correction**
The cold-air standard ([[gamma]] of 1.4) gives the upper limit. The hot-air standard ([[gamma]] of 1.3) is more realistic. The exact value requires numerical integration with temperature-dependent property tables.

**Mini contrast example**
With [[r]] of 18 and [[r_c]] of 2, cold air ([[gamma]] of 1.4) gives efficiency of 60.0 %, but hot air ([[gamma]] of 1.3) gives 52.7 %. The 7.3 percentage point difference is not negligible in engineering.

## Mathematical errors

### Error 3: Confusing the compression ratio with the cutoff ratio

**Why it seems correct**
Both are dimensionless volume ratios, and their symbols ([[r]] and [[r_c]]) are similar in compact notation.

**Why it is incorrect**
The compression ratio [[r]] is the ratio between maximum and minimum cylinder volume (geometric, fixed). The cutoff ratio [[r_c]] is the ratio between volumes at the end and start of isobaric combustion (operational, variable). Swapping them in the formula produces enormous numerical errors because [[r]] is typically 14 to 25 while [[r_c]] is typically 1.5 to 4.

**Detection signal**
The student substitutes values of 18 or 20 where [[r_c]] should go, obtaining negative efficiencies or values greater than one.

**Conceptual correction**
Identify each variable by its physical meaning: [[r]] controls how much the gas is compressed (engine geometry), [[r_c]] controls how long combustion lasts (fuel quantity).

**Mini contrast example**
With [[r]] of 18 and [[r_c]] of 2, efficiency is 60.0 %. If swapped ([[r]] of 2, [[r_c]] of 18), the formula gives minus 2.3, which is absurd and immediately signals the error.

## Interpretation errors

### Error 4: Believing that increasing the cutoff ratio always produces more net work

**Why it seems correct**
More injected fuel means more absorbed heat [[Q_H]], and it seems intuitive that more energy input means more work output.

**Why it is incorrect**
Increasing [[r_c]] raises [[Q_H]], but the fraction of [[Q_H]] converted into work ([[eta_D]]) decreases. The net effect on [[W_neto]] depends on which effect dominates. There is an optimal [[r_c]] that maximizes [[W_neto]] per cycle; beyond that point, the increase in [[Q_H]] does not compensate for the drop in [[eta_D]].

**Detection signal**
The student proposes indefinitely increasing fuel injection to obtain more power without considering the efficiency drop.

**Conceptual correction**
Net work is the product of [[eta_D]] times [[Q_H]]. Increasing [[r_c]] raises [[Q_H]] linearly but reduces [[eta_D]] nonlinearly. The optimum is found by differentiating [[W_neto]] with respect to [[r_c]] and setting it to zero.

**Mini contrast example**
With [[r]] of 18 and [[gamma]] of 1.4: for [[r_c]] of 2, [[eta_D]] is 0.600 and if [[Q_H]] is 1000 kJ/kg, [[W_neto]] is 600 kJ/kg. For [[r_c]] of 4, [[eta_D]] is 0.504 and if [[Q_H]] rises to 2000 kJ/kg, [[W_neto]] is 1008 kJ/kg (more work but much less efficient). For [[r_c]] of 6, [[eta_D]] drops to 0.436 and with [[Q_H]] of 3000 kJ/kg, [[W_neto]] is 1308 kJ/kg, but the engine rejects 1692 kJ/kg to the cold reservoir.

## Quick self-control rule

### Error 5: Forgetting that Diesel efficiency with [[r_c]] of one reduces to Otto

**Why it seems correct**
The student treats the Otto and Diesel formulas as completely independent, without seeing the algebraic connection.

**Why it is incorrect**
Substituting [[r_c]] equal to one in the Diesel formula, the cutoff factor simplifies by L'Hôpital's rule to [[gamma]] raised to [[gamma]] divided by [[gamma]], which is one. The formula then reduces to one minus one divided by [[r]] raised to [[gamma]] minus one, which is exactly the Otto cycle formula. Verifying this limit is an essential algebraic coherence test.

**Detection signal**
The student cannot explain the relationship between Otto and Diesel or verify that the Diesel formula contains Otto as a special case.

**Conceptual correction**
Always verify that, when substituting [[r_c]] equal to one, the Diesel formula reproduces Otto. If it does not, there is a transcription or calculation error.

**Mini contrast example**
With [[r]] of 10 and [[gamma]] of 1.4: the Otto formula gives one minus one divided by 10 raised to 0.4, that is one minus 0.3981, which is 0.602. The Diesel formula with [[r_c]] of 1.001 gives 0.6018. The match confirms coherence.
