# Common errors — Carnot Cycle

## Conceptual errors

### Error 1: Believing that Carnot efficiency is achievable in practice

**Why it seems correct**
The student sees the [[eta_C]] formula and assumes that a well-designed cycle with good materials can reach that value. The expression is simple and does not seem to include any explicit restriction preventing it, so it is interpreted as an engineering target.

**Why it is incorrect**
Carnot efficiency requires reversible processes, meaning infinitely slow and frictionless ones. Any real process operates at finite speed with finite temperature differences for heat to flow, generating irreversible entropy and reducing efficiency below [[eta_C]]. The Carnot cycle is an asymptotic upper bound, never an achievable real target.

**Detection signal**
If the student presents a calculated efficiency as a design goal or claims that a specific improvement allows reaching Carnot efficiency, this error is being committed.

**Conceptual correction**
Carnot efficiency is an absolute theoretical limit, not a design value. Every real cycle necessarily operates below it. The distance between real efficiency and Carnot quantifies the system's irreversibilities and is never zero.

**Contrast mini-example**
A real plant between 800 K and 300 K has a Carnot of 62.5 %. The plant achieves 38 %. If a student claims that better insulation will achieve 62.5 %, they ignore that internal irreversibilities (friction, mixing, combustion) are ineliminable even with perfect insulation.

## Model errors

### Error 2: Applying the Carnot formula to irreversible cycles as if it were their real efficiency

**Why it seems correct**
The student calculates Carnot efficiency between the extreme temperatures of a Brayton or Rankine cycle and presents it as that cycle's efficiency. The formula is simple and the temperatures are available in the problem statement, so it seems reasonable to apply it directly.

**Why it is incorrect**
The Carnot formula gives only the efficiency of a fully reversible cycle. Brayton, Rankine, and Otto cycles have their own efficiency formulas reflecting their specific processes (isobaric, isochoric, etc.). The efficiency of those cycles is always less than Carnot between the same extreme temperatures.

**Detection signal**
If a Brayton or Rankine cycle problem yields an efficiency identical to Carnot between the same temperatures, the student has applied the wrong formula.

**Conceptual correction**
Each specific cycle has its own efficiency formula depending on its particular parameters (pressure ratio for Brayton, compression ratio for Otto). Carnot efficiency is only used as a comparison reference, never as a prediction of the analysed cycle's efficiency.

**Contrast mini-example**
A Brayton cycle between 1500 K and 300 K has a Carnot of 80 %. The real Brayton efficiency with a pressure ratio of 20 is approximately 57 %. Presenting 80 % as the Brayton efficiency is an error of 23 percentage points.

## Mathematical errors

### Error 3: Using temperatures in Celsius instead of kelvin

**Why it seems correct**
Problem statements usually give temperatures in Celsius and the student substitutes them directly into the formula without converting. The procedure seems natural because the temperatures are already direct numerical data.

**Why it is incorrect**
The Carnot efficiency formula involves a ratio of absolute temperatures. Using Celsius generates absurd results: with [[T_H]] of 400 °C and [[T_C]] of 25 °C, the student calculates one minus 25 divided by 400, obtaining 93.75 %, when the correct value with kelvin (673 K and 298 K) is 55.7 %. The difference of nearly 40 points reveals the error.

**Detection signal**
If [[eta_C]] exceeds 80 % with conventional industrial operating temperatures (boilers below 600 °C), it is very likely that Celsius was used instead of kelvin.

**Conceptual correction**
Before substituting, always convert both temperatures by adding 273.15 to Celsius values. Verify that [[T_C]] divided by [[T_H]] is a number between 0 and 1 with physical sense.

**Contrast mini-example**
With 400 °C and 25 °C: in Celsius one erroneously obtains 93.75 %. In kelvin (673 K and 298 K), the correct efficiency is 55.7 %. The difference of 38 percentage points shows that the unit error produces physically meaningless results.

## Interpretation errors

### Error 4: Interpreting that reducing [[T_C]] to zero gives perfect efficiency

**Why it seems correct**
The formula shows that if [[T_C]] tends to zero, [[eta_C]] tends to one. The student concludes that it would suffice to cool the cold reservoir enough to obtain 100 % efficiency. The algebraic reasoning is formally correct.

**Why it is incorrect**
The third law of thermodynamics states that reaching absolute zero requires an infinite number of steps. It is a physically unattainable limit. Furthermore, as [[T_C]] approaches zero, the extractable power also tends to zero because processes must be infinitely slow, making the machine useless in practice.

**Detection signal**
If the student proposes designing a refrigeration system to reduce [[T_C]] as a strategy to achieve unit efficiency, they are confusing a mathematical limit with a physical possibility.

**Conceptual correction**
An efficiency of 100 % is an asymptotic limit, not achievable. In practice, [[T_C]] is set by the environment (280–350 K) and reducing it significantly requires additional work (refrigeration), which reduces the net efficiency of the overall system.

**Contrast mini-example**
With [[T_H]] of 1000 K and [[T_C]] of 10 K one would formally obtain 99 % efficiency. But maintaining a sink at 10 K requires a cryogenic system that consumes more work than the cycle produces, making the system globally unviable.

## Quick self-control rule

### Error 5: Obtaining an efficiency higher than Carnot in a real cycle problem

**Why it seems correct**
The student calculates the efficiency of a cycle (Brayton, Rankine, Otto) and obtains a high value. They do not compare with the corresponding Carnot because they consider them independent formulas and see no need for comparison.

**Why it is incorrect**
Every real cycle must have an efficiency strictly lower than Carnot between its extreme temperatures. If the result exceeds Carnot, there is a numerical error (units, data inversion) or a conceptual error (wrong formula). The second law categorically forbids it.

**Detection signal**
Always calculate the Carnot efficiency between the extreme temperatures of the problem as a final verification step. If the calculated efficiency exceeds it, the result is incorrect.

**Conceptual correction**
Use the self-control rule: for any cycle between [[T_H]] and [[T_C]], first calculate [[eta_C]] as the ceiling. If the specific cycle result is greater than [[eta_C]], review units, data, and applied formula.

**Contrast mini-example**
A student calculates an Otto cycle efficiency of 72 % between extreme temperatures of 1200 K and 400 K. The Carnot is 66.7 %. Since 72 % exceeds 66.7 %, the result is physically impossible and reveals an error in applying the Otto formula.
