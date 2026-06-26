## Conceptual errors


### Error 1: Thinking there is no radiation without glow

**Why it seems correct**
The human eye detects only a small part of the spectrum. Since a warm wall does not glow, it seems its [[potencia_radiada]] is zero.

**Why it is incorrect**
Every body with [[temperatura_absoluta]] emits thermal radiation. At everyday temperatures, emission is usually infrared.

**Detection signal**
The reasoning says that only a red-hot resistor or a flame emits.

**Conceptual correction**
Visibility does not decide whether radiation exists. It only decides whether the eye can detect it.

**Mini-example of contrast**
A table at 295 K does not glow, but it contributes to radiative exchange with a nearby person.


### Error 2: Believing radiation needs air

**Why it seems correct**
Heat transfer studies conduction, convection, and radiation together, and convection does require a fluid.

**Why it is incorrect**
Thermal radiation is electromagnetic and can propagate through vacuum.

**Detection signal**
The student says that in a vacuum chamber [[potencia_radiada]] disappears.

**Conceptual correction**
Vacuum removes external convection, not radiative emission.

**Mini-example of contrast**
The Sun warms Earth through space.

## Model errors


### Error 3: Using gross emission when net exchange is requested

**Why it seems correct**
[[potencia_radiada]] is the most direct quantity and seems to answer any radiation question.

**Why it is incorrect**
If [[temperatura_ambiente]] exists, the body also receives radiation from the surroundings. The appropriate quantity is often [[potencia_neta]].

**Detection signal**
The problem gives [[temperatura_ambiente]], but the solution does not use it.

**Conceptual correction**
For balance with surroundings, use the net relation.

{{f:radiacion_neta}}

**Mini-example of contrast**
A body at 310 K in a room at 300 K emits appreciably, but its net loss is much smaller than its gross emission.


### Error 4: Always setting [[emisividad]] equal to one

**Why it seems correct**
Many introductory exercises use a blackbody or ideal emitter.

**Why it is incorrect**
Real surfaces have their own [[emisividad]]. Polished metal and matte paint do not behave the same.

**Detection signal**
The calculation ignores material or surface finish data.

**Conceptual correction**
Use [[emisividad]] equal to one only if the statement declares a blackbody or ideal emitter.

**Mini-example of contrast**
Two plates at the same [[temperatura_absoluta]] and equal [[area_superficie]] can emit different powers.

## Mathematical errors


### Error 5: Substituting Celsius degrees

**Why it seems correct**
Celsius is familiar, so using 25 for room temperature feels natural.

**Why it is incorrect**
Radiative formulas use [[temperatura_absoluta]] in kelvin. Raising 25 instead of 298 completely changes the result.

**Detection signal**
The calculated [[potencia_radiada]] is absurdly small for a warm surface.

**Conceptual correction**
Always convert to kelvin before using T⁴.

{{f:ley_stefan_boltzmann}}

**Mini-example of contrast**
25 °C is not 25 K, but about 298 K.


### Error 6: Subtracting temperatures instead of fourth powers

**Why it seems correct**
In conduction, temperature differences are used, so copying that structure feels natural.

**Why it is incorrect**
Net radiation compares emissions, and each emission depends on the fourth power.

**Detection signal**
The solution uses a simple subtraction between [[temperatura_absoluta]] and [[temperatura_ambiente]].

**Conceptual correction**
First calculate the fourth power of each absolute temperature, then subtract.

**Mini-example of contrast**
Between 600 K and 300 K, emission does not merely double: with everything else constant, it is multiplied by 16.

## Interpretation errors


### Error 7: Confusing power with total energy

**Why it seems correct**
The phrase “emitted heat” sounds like an accumulated amount.

**Why it is incorrect**
[[potencia_radiada]] and [[potencia_neta]] are transfer rates, not accumulated energy.

**Detection signal**
The result is interpreted in joules when the calculated unit is W.

**Conceptual correction**
Total energy requires a time interval.

**Mini-example of contrast**
A plate can emit 100 W for 10 s or for 1 h; the power is the same, the energy is not.


### Error 8: Treating negative [[potencia_neta]] as impossible

**Why it seems correct**
Gross emission cannot be negative, so the sign looks like a mistake.

**Why it is incorrect**
[[potencia_neta]] is a balance. A negative value can indicate net absorption from the surroundings.

**Detection signal**
The student takes the absolute value without explaining the physical direction.

**Conceptual correction**
Interpret the sign according to the convention: net loss or net gain.

**Mini-example of contrast**
A cold object inside an oven can receive more radiation than it emits.

## Quick self-control rule

Before accepting a result, check temperatures in K, 0 ≤ [[emisividad]] ≤ 1, [[area_superficie]] in m², and final unit W or W/m² according to the requested quantity.