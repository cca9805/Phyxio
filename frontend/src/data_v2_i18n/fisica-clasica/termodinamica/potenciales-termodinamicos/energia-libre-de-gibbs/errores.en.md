## Conceptual errors

### Error 1: Identifying an exothermic process with a spontaneous process

**Why it seems correct**

Everyday intuition associates "releasing energy" with "occurring on its own." Most observable processes at room temperature are both exothermic and spontaneous: combustion, iron corrosion, salt precipitation. This partial coincidence creates the erroneous mental rule that negative [[DeltaH]] is sufficient to guarantee spontaneity. The cognitive mechanism is **overgeneralization** from frequent but non-exhaustive cases.

**Why it is incorrect**

The correct criterion is negative [[DeltaG]], not negative [[DeltaH]]. The Gibbs equation subtracts the [[T]]·[[DeltaS]] term from [[DeltaH]]: if [[DeltaS]] is sufficiently negative and [[T]] sufficiently high, the product [[T]]·[[DeltaS]] can exceed [[DeltaH]] in absolute value, making [[DeltaG]] positive even when [[DeltaH]] is negative. The process is then non-spontaneous despite being exothermic.

**Detection signal**

The student applies the spontaneity criterion by looking only at the sign of [[DeltaH]] without computing [[DeltaG]]. The conclusion "it is exothermic, therefore spontaneous" appears without evaluating the entropy term.

**Conceptual correction**

Spontaneity at constant P and T depends exclusively on the sign of [[DeltaG]], which combines the contributions of [[DeltaH]] and [[T]]·[[DeltaS]]. Only when [[DeltaS]] is positive and [[DeltaH]] is negative is spontaneity guaranteed at any temperature. In all other cases, [[DeltaG]] must be computed explicitly.

**Contrast mini-example**

The formation of ice crystals from liquid water below 273 K is spontaneous even though [[DeltaH]] is negative and [[DeltaS]] is negative (water loses disorder when crystallizing). Above 273 K, exactly the same process —with the same negative [[DeltaH]]— is no longer spontaneous because the negative [[T]]·[[DeltaS]] term exceeds the negative [[DeltaH]] and [[DeltaG]] becomes positive.

---

### Error 2: Confusing spontaneity with reaction rate

**Why it seems correct**

In everyday experience, processes that "want" to occur usually occur quickly. A student who has calculated a very negative [[DeltaG]] may expect the reaction to complete in seconds or minutes. The analogy with a heavy falling object reinforces the idea: if the force is large, the fall is fast.

**Why it is incorrect**

Thermodynamics describes the initial and final states; kinetics describes the path and the rate. Negative [[DeltaG]] guarantees that the process **can** occur spontaneously, but says nothing about how quickly it will do so. The rate is controlled by the **activation energy**, which can be arbitrarily high even for processes with very negative [[DeltaG]]. Diamond has a slightly negative [[DeltaG]] relative to graphite under normal conditions, but the transformation does not occur on any human timescale due to the very high kinetic barrier.

**Detection signal**

The student uses the result of negative [[DeltaG]] to assert that the reaction "will occur" or "is occurring," without distinguishing between thermodynamic and kinetic predictions.

**Conceptual correction**

[[DeltaG]] is a thermodynamic criterion of direction, not of rate. To predict the rate, kinetic data are needed: rate constant, activation energy, catalysts. A process may be thermodynamically favorable but kinetically inert for millions of years.

**Contrast mini-example**

The combustion of a hydrogen-oxygen mixture has an enormously negative [[DeltaG]] at room temperature, yet the mixture can be stored indefinitely without reacting. Only with a spark (activation energy) does the reaction ignite. Thermodynamics predicted the direction; kinetics explains why it did not occur on its own.

---

## Model errors

### Error 1: Ignoring the dependence of [[DeltaH]] and [[DeltaS]] on temperature

**Why it seems correct**

In the standard model, [[DeltaH]] and [[DeltaS]] are treated as constants. Introductory exercises always provide these values as fixed data. The student learns the equation with constants and generalizes that they are always constants, without recognizing the approximation.

**Why it is incorrect**

The heat capacities of real systems depend on [[T]], and [[DeltaH]] is the integral of that capacity difference. For temperature ranges exceeding 200 K or for processes crossing phase changes, [[DeltaH]] and [[DeltaS]] vary significantly, the [[DeltaG]] vs [[T]] line curves, and [[T_inv]] calculated with standard-temperature values may differ by tens or hundreds of kelvin from the real value.

**Detection signal**

The predicted [[T_inv]] does not match the experimentally observed equilibrium temperature. The experimental [[DeltaG]] vs [[T]] graph shows systematic curvature that the linear model cannot reproduce.

**Conceptual correction**

For wide temperature ranges, apply the Kirchhoff correction by integrating the differences in heat capacities. When the problem specifies a narrow temperature range (less than 100 K) without phase change, the constancy approximation is valid.

**Contrast mini-example**

Computing [[T_inv]] for the evaporation of water using only standard values at 298 K gives approximately 373 K, which agrees well with the boiling point. But attempting to compute the boiling point of tungsten with the same method and 298 K data gives a result differing by hundreds of kelvin from the real value (3695 K), because heat capacities vary enormously over that range.

---

## Mathematical errors

### Error 1: Mixing units between [[DeltaH]] (kJ) and [[DeltaS]] (J/K)

**Why it seems correct**

Tabulated values of [[DeltaH]] are usually given in kJ/mol and those of [[DeltaS]] in J/(mol·K). A student working directly from tables without unifying units may multiply kilojoules by J/K, obtaining a result that is off by a factor of a thousand with no obvious numerical warning.

**Why it is incorrect**

In the Gibbs equation, [[DeltaH]] and [[T]]·[[DeltaS]] must be expressed in the same units before subtracting. If [[DeltaH]] is in kJ and the product [[T]]·[[DeltaS]] is in J, the difference mixes scales and produces a completely wrong result. The value of [[DeltaG]] obtained may be a thousand times larger or smaller than the correct value, leading to opposite conclusions about spontaneity.

**Detection signal**

The calculated [[DeltaG]] is on the order of megajoules when kilojoules are expected, or on the order of joules when kilojoules are expected. The [[T]]·[[DeltaS]] term at room temperature (298 K) with [[DeltaS]] in J/(mol·K) gives tens of kilojoules; if the result is tens of joules, a factor of a thousand is displaced.

**Conceptual correction**

Before substituting, unify all quantities in the same unit system: either all in J and J/K, or all in kJ and kJ/K. The safest conversion is to express [[DeltaH]] in J (multiply the kJ value by 1000) and [[DeltaS]] in J/K, and compute [[DeltaG]] in J.

**Contrast mini-example**

For the dissolution of NaCl, taking [[DeltaH]] of 3900 J/mol and [[DeltaS]] of 43 J/(mol·K) at 298 K: subtracting 3900 J from the product of 298 K and 43 J/K (giving 12814 J) yields a negative result, indicating a spontaneous process. If [[DeltaH]] is mistakenly used as 3.9 (in kJ, without conversion) and the product of 298 by 43 is subtracted, the result gives 12810 with the wrong sign, erroneously concluding that the process is not spontaneous.

---

## Interpretation errors

### Error 1: Reading the sign of [[T_inv]] as a spontaneity indicator instead of a regime threshold

**Why it seems correct**

The student sees that [[T_inv]] has a numerical value and interprets it directly as saying something about whether the process is spontaneous or not, instead of reading it as the threshold where the spontaneity regime changes.

**Why it is incorrect**

[[T_inv]] is the temperature at which [[DeltaG]] is zero; it is not a measure of spontaneity but a transition marker. Spontaneity at a given temperature is determined by comparing [[T]] with [[T_inv]] and knowing the slope of the line (the sign of [[DeltaS]]). If [[DeltaS]] is positive and [[T]] exceeds [[T_inv]], the process is spontaneous; if [[T]] is less than [[T_inv]], it is not. The confusion arises from not connecting [[T_inv]] with the complete [[DeltaG]] equation.

**Detection signal**

The student correctly calculates [[T_inv]] but then erroneously asserts that "since [[T_inv]] is positive, the process is spontaneous" or "since [[T_inv]] is high, the process is not spontaneous at room temperature," without comparing actual [[T]] with [[T_inv]] and without considering the sign of [[DeltaS]].

**Conceptual correction**

[[T_inv]] divides the temperature axis into two regions. The region where the process is spontaneous depends on the sign of [[DeltaS]]: if [[DeltaS]] is positive, the process is spontaneous above [[T_inv]]; if [[DeltaS]] is negative, it is spontaneous below. Always compare the working [[T]] with [[T_inv]] and verify the slope sign.

**Contrast mini-example**

For a process with positive [[DeltaH]] of 10 000 J and positive [[DeltaS]] of 50 J/K, the inversion temperature is 200 K. At 250 K (above [[T_inv]]), [[DeltaG]] is negative: spontaneous process. At 150 K (below [[T_inv]]), [[DeltaG]] is positive: non-spontaneous process. A student who looks only at [[T_inv]] without comparing with the actual [[T]] would fail to reach any conclusion about the working temperature.

---

## Quick self-control rule

Before submitting any calculation of [[DeltaG]] or [[T_inv]], mentally verify five points:

1. The units of [[DeltaH]] and [[DeltaS]] are consistent: both in J and J/K, or both in kJ and kJ/K. A factor of a thousand is the most frequent error.
2. [[T]] is in kelvin, not Celsius. Add 273.15 if necessary.
3. The sign of [[DeltaG]] is read according to the correct criterion: negative is spontaneous, positive is non-spontaneous, zero is equilibrium.
4. If [[T_inv]] was calculated, compare with the actual process temperature and take into account the sign of [[DeltaS]] to conclude about spontaneity at that specific temperature.
5. Do not confuse spontaneity (thermodynamic criterion of [[DeltaG]]) with reaction rate (kinetic criterion of activation energy).

Applying these five points detects more than 90 % of the most frequent errors in Gibbs free energy calculations.
