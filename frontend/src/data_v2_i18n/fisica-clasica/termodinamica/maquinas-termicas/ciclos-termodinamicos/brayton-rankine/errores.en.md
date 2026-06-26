# Common errors — Brayton and Rankine cycles

## Conceptual errors

**Why it seems correct**
The student calculates the Carnot efficiency between [[T_H]] and [[T_C]] and presents it directly as the real Brayton or Rankine cycle efficiency. The Carnot cycle is the theoretical reference and its formula is simple, so it seems reasonable to apply it directly.

**Why it is incorrect**
Carnot efficiency is a theoretical upper bound, not the efficiency of the cycle being analyzed. The Brayton cycle with the same temperature limits has a significantly lower [[eta_th]] because heat addition and rejection are not isothermal: they occur at variable temperature, reducing the mean cycle efficiency.

**Detection signal**
If the [[eta_th]] result for an industrial Brayton cycle with [[r_p]] of 15 exceeds 60 %, it is likely that the Carnot efficiency was calculated instead of the Brayton one.

**Conceptual correction**
For the ideal Brayton cycle use the formula with [[r_p]] and [[gamma]]. For the Rankine cycle use the ratio of [[W_neto]] to [[Q_H]]. The Carnot efficiency serves only as an upper reference bound for coherence checking.

**Contrast mini-example**
A Brayton cycle with [[r_p]] of 15 and [[gamma]] of 1.40 has a theoretical efficiency of approximately 53 %. If the student calculates Carnot between 300 K and 1500 K, the result is 80 %. The 27 percentage point difference shows they are distinct cycles with different efficiencies.

## Model errors

**Why it seems correct**
The student substitutes [[T_H]] and [[T_C]] in Celsius directly into efficiency formulas because industrial problem statements often give temperatures in that scale. The procedure seems direct and natural.

**Why it is incorrect**
Thermodynamic efficiency formulas require absolute temperature in kelvin. Using Celsius produces physically meaningless results: a cycle with [[T_H]] of 300 °C and [[T_C]] of 50 °C would yield an erroneous Carnot efficiency of 83 %, when the correct value with kelvin is 43.6 %.

**Detection signal**
If [[eta_th]] exceeds 60 % for conventional steam conditions, immediately suspect that temperatures were used in Celsius instead of kelvin.

**Conceptual correction**
Add 273.15 K to each Celsius temperature before any numerical substitution. Develop the habit of converting as a systematic first step before applying any thermodynamic formula.

**Contrast mini-example**
With [[T_H]] of 300 °C and [[T_C]] of 50 °C: in Celsius one erroneously obtains a Carnot efficiency of 83 %. In kelvin (573 K and 323 K), the correct efficiency is 43.6 %. The nearly 40 percentage point difference shows that the unit error produces physically absurd results.

## Mathematical errors

**Why it seems correct**
The student calculates Brayton efficiency using only turbine work in the numerator, without subtracting work consumed by the compressor. In the Rankine cycle pump work is negligible, so it seems reasonable to carry that simplification over to the Brayton cycle.

**Why it is incorrect**
In the Brayton cycle, the compressor can consume between 40 % and 60 % of the gross turbine work. [[W_neto]] is the difference: turbine work minus compressor work. Ignoring the compressor grossly overestimates the useful work and the efficiency.

**Detection signal**
A Brayton [[eta_th]] above 75 % with normal parameters almost certainly indicates that compressor work has been omitted.

**Conceptual correction**
Always apply the complete energy balance. For the ideal Brayton: turbine work proportional to the temperature difference in expansion; compressor work proportional to the temperature difference in compression. [[W_neto]] is the difference of both.

**Contrast mini-example**
A Brayton cycle with turbine work of 500 kJ/kg and compressor work of 250 kJ/kg has [[W_neto]] of 250 kJ/kg. If the compressor is omitted, a work of 500 kJ/kg is declared, double the real value, and the calculated efficiency also doubles erroneously.

## Interpretation errors

**Why it seems correct**
The student uses the Otto cycle volumetric compression ratio definition in the Brayton formula, or applies the Otto efficiency formula with the Brayton [[r_p]]. Both cycles have adiabatic compression and expansion, and their efficiency formulas have a structurally similar form.

**Why it is incorrect**
In the Otto cycle, the efficiency parameter is the volumetric compression ratio (volume ratio). In the Brayton cycle, the parameter is [[r_p]] (pressure ratio). The formulas are different and not interchangeable. Mixing them produces completely erroneous results.

**Detection signal**
If the problem mentions a gas turbine or axial compressor and the given parameter is a pressure ratio, this is a Brayton cycle, not an Otto cycle. If the result does not match the expected orders of magnitude for Brayton, verify which formula was applied.

**Conceptual correction**
Always verify which cycle is being analyzed and which parameter characterizes that specific cycle. For Brayton, the only efficiency parameter is [[r_p]] together with [[gamma]]. For Otto, the parameter is the volumetric compression ratio.

**Contrast mini-example**
With a value of 10 applied to the Otto formula, the efficiency obtained is 60.2 % (volumetric ratio). With [[r_p]] of 10 in the Brayton formula, the result is 48.2 %. The results differ by 12 percentage points because they are different formulas for different cycles.

## Quick self-control rule

**Why it seems correct**
The student argues that if the cycle were designed to reject minimal heat to the cold sink, efficiency could approach 100 %. The formula suggests that if [[Q_C]] approaches zero, [[W_neto]] approaches [[Q_H]] and efficiency approaches one. The algebraic reasoning seems correct.

**Why it is incorrect**
The second law of thermodynamics in the Kelvin-Planck statement prohibits a cycle that operates between two reservoirs and rejects no heat to the cold sink. [[Q_C]] can never be zero in a real cycle. The Clausius statement establishes that heat does not flow spontaneously from cold to hot, implying the cold reservoir always receives heat.

**Detection signal**
Whenever the calculated [[eta_th]] exceeds the Carnot efficiency between the problem temperatures, there is a conceptual or numerical error that invalidates the result.

**Conceptual correction**
Calculate the Carnot efficiency between [[T_H]] and [[T_C]] to find the theoretical maximum limit. That limit is always less than 1 while [[T_C]] is greater than 0 K. Any real cycle operates below that limit.

**Contrast mini-example**
Between [[T_H]] of 1500 K and [[T_C]] of 300 K, the Carnot efficiency is 80 %. Any [[eta_th]] result above 80 % for those temperatures is automatically invalid: the second law forbids it, regardless of cycle design.
