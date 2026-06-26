# Common errors

## Conceptual errors

### Error 1: believing the refrigerator generates cold

**Why it seems correct:** The student observes the interior getting colder and deduces the machine creates cold, by analogy with a heater creating heat.

**Why it is incorrect:** The refrigerator does not create cold; it transfers heat [[Q_C]] from interior to exterior through work [[W]]. Energy is not destroyed but redistributed.

**Detection signal:** The student states that the refrigerator produces cold or destroys heat.

**Conceptual correction:** The refrigerator extracts heat [[Q_C]] from the cold space and delivers it to the hot one as [[Q_H]]. Total energy is conserved: [[Q_H]] equals [[Q_C]] plus [[W]].

**Mini-example:** If [[Q_C]] is 500 J and [[W]] is 200 J, the refrigerator moves 500 J to the hot reservoir plus the 200 J of work, giving [[Q_H]] of 700 J. No energy was destroyed.

### Error 2: thinking heat can be transferred from cold to hot without work

**Why it seems correct:** The student may think that with a good design the compressor could be eliminated, since only heat is being moved.

**Why it is incorrect:** The second law (Clausius formulation) prohibits spontaneous heat transfer from cold to hot. [[W]] must be strictly positive.

**Detection signal:** The student writes [[W]] equal to zero in the energy balance or claims the cycle operates without a compressor.

**Conceptual correction:** The second law requires [[W]] greater than zero to reverse the natural heat flow. Without work, only spontaneous flow from hot to cold is possible.

**Mini-example:** If [[T_C]] is 268 K and [[T_H]] is 308 K, the minimum work to extract 1000 J is 149 J. Reducing it to zero would violate the second law.

## Model errors

### Error 3: confusing the sign of [[Q_H]] in the balance

**Why it seems correct:** In heat engines, [[Q_H]] enters the system with positive sign. The student applies the same convention to the reversed cycle.

**Why it is incorrect:** In the reversed cycle, [[Q_H]] is the energy leaving the system toward the hot reservoir. Adopting the engine convention inverts signs and produces absurd results.

**Detection signal:** The energy balance gives negative results; [[Q_H]] appears as negative.

**Conceptual correction:** In the reversed cycle, use the positive magnitude convention: [[Q_C]] extracted from cold, [[Q_H]] delivered to hot, [[W]] input. All positive in the balance.

**Mini-example:** With [[Q_C]] of 600 J and [[W]] of 250 J: [[Q_H]] = 600 + 250 = 850 J (positive). If it gives negative, the convention is inverted.

## Mathematical errors

### Error 4: using Celsius temperatures in the Carnot formula

**Why it seems correct:** Problem temperatures are usually given in Celsius, and the student substitutes directly without converting.

**Why it is incorrect:** Thermodynamic formulas for the reversed cycle require absolute temperatures in kelvin. Using Celsius produces negative work or negative [[Delta_S_total]].

**Detection signal:** The minimum Carnot work gives negative or meaningless values.

**Conceptual correction:** Always convert to kelvin before substituting: T(K) = T(C) + 273.15. Verify both temperatures are positive.

**Mini-example:** With [[T_C]] of minus 10 C: correct is 263 K. Use 263 K in the formula, not minus 10. The result with kelvin is always positive.

## Interpretation errors

### Error 5: confusing [[Q_C]] with [[Q_H]] for the useful effect

**Why it seems correct:** Both are heats exchanged in the cycle, and without clarity about the system objective, it is easy to choose the wrong one.

**Why it is incorrect:** The useful effect depends on the mode: in refrigeration it is [[Q_C]] (extracted heat), in heat pump it is [[Q_H]] (delivered heat). Confusing them inverts the COP.

**Detection signal:** The student calculates the heat pump COP using [[Q_C]] in the numerator, or the refrigeration COP using [[Q_H]].

**Conceptual correction:** First identify the objective: if the system cools, the useful effect is [[Q_C]]. If it heats, it is [[Q_H]]. The denominator is always [[W]].

**Mini-example:** With [[Q_C]] of 800 J, [[Q_H]] of 1100 J and [[W]] of 300 J: refrigeration COP is 800 divided by 300 giving 2.67; heat pump COP is 1100 divided by 300 giving 3.67.

## Quick self-control rule

Always verify: (1) [[Q_H]] greater than [[Q_C]], (2) [[W]] greater than zero, and (3) [[Delta_S_total]] greater than or equal to zero. If any fails, there is an error in data or calculations.
