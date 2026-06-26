## Conceptual errors

### Error 1: Applying the Gibbs criterion in a rigid container

**Why it seems correct**

Most textbooks emphasize Gibbs free energy (ΔG) as the universal spontaneity criterion. The student learns that "negative free energy implies spontaneous process" and generalizes this criterion to any situation, without distinguishing whether pressure or volume remains constant. The cognitive mechanism is **excessive generalization** of the most frequently taught criterion.

**Why it is incorrect**

Gibbs assumes constant surroundings pressure; Helmholtz assumes constant volume. In a rigid thermostatted vessel, internal pressure changes during the process and expansion work is not available. The correct criterion is negative [[DeltaA]], not negative Gibbs free energy (ΔG). Using Gibbs in a confined system can lead to opposite conclusions about spontaneity.

**Detection signal**

The problem statement mentions "closed vessel", "fixed volume", "bomb calorimeter", or "sealed autoclave", but the solution applies the Gibbs equation with enthalpy (ΔH) instead of [[DeltaU]].

**Conceptual correction**

First identify boundary conditions: constant pressure → Gibbs criterion with enthalpy (ΔH); constant volume → Helmholtz criterion with [[DeltaU]]. Spontaneity at constant V and T depends exclusively on the sign of [[DeltaA]].

**Contrast mini-example**

Vapor condensation in a sealed flask at 350 K has negative [[DeltaU]] and negative [[DeltaS]]. At that temperature, [[DeltaA]] may be positive (condensation not spontaneous) even though Gibbs free energy (ΔG) is negative. A student applying Gibbs would incorrectly conclude that condensation is spontaneous.

---

### Error 2: Confusing spontaneity with reaction rate

**Why it seems correct**

In everyday experience, processes that "want" to occur usually occur quickly. A student who has calculated very negative [[DeltaA]] may expect the reaction to complete in seconds. The analogy with a heavy object falling reinforces the idea.

**Why it is incorrect**

Thermodynamics describes initial and final states; kinetics describes the path and speed. Negative [[DeltaA]] guarantees the process **can** occur spontaneously, but says nothing about how fast. Speed is controlled by **activation energy**.

**Detection signal**

The student uses negative [[DeltaA]] to claim the reaction "will occur" or "is occurring", without distinguishing thermodynamic from kinetic prediction.

**Conceptual correction**

[[DeltaA]] is a thermodynamic direction criterion, not a speed criterion. To predict speed, kinetic data are needed: rate constant, activation energy, catalysts.

**Contrast mini-example**

Diamond-to-graphite transformation in a sealed vessel has slightly negative [[DeltaA]] under normal conditions, but the transformation does not occur on any human timescale due to the extremely high kinetic barrier.

---

## Model errors

### Error 1: Ignoring the dependence of [[DeltaU]] and [[DeltaS]] on temperature

**Why it seems correct**

In the standard model, [[DeltaU]] and [[DeltaS]] are treated as constants. Introductory exercises always provide these values as fixed data. The student generalizes they are always constant.

**Why it is incorrect**

Heat capacities depend on [[T]], and [[DeltaU]] is the integral of that difference. For ranges above 200 K or processes with phase changes, [[DeltaU]] and [[DeltaS]] vary significantly, the [[DeltaA]] vs [[T]] line curves, and calculated [[T_inv]] may differ by tens of kelvin from the real value.

**Detection signal**

The [[T_inv]] prediction does not match the observed equilibrium temperature. The experimental [[DeltaA]] vs [[T]] graph shows systematic curvature.

**Conceptual correction**

For wide temperature ranges, apply Kirchhoff correction. When the problem specifies a narrow range (below 100 K) without phase change, the constancy approximation is valid.

**Contrast mini-example**

Calculating [[T_inv]] for confined water evaporation using only values at 298 K gives approximately 373 K, which agrees well. But attempting to calculate tungsten boiling temperature with the same method produces a result differing by hundreds of kelvin from the real value.

---

## Mathematical errors

### Error 1: Mixing units between [[DeltaU]] (kJ) and [[DeltaS]] (J/K)

**Why it seems correct**

Tabulated [[DeltaU]] values are usually given in kJ/mol and [[DeltaS]] in J/(mol·K). A student working directly from tables without unifying units obtains a result shifted by a factor of one thousand.

**Why it is incorrect**

In the Helmholtz equation, [[DeltaU]] and [[T]]·[[DeltaS]] must be expressed in the same units before subtracting. If [[DeltaU]] is in kJ and the product [[T]]·[[DeltaS]] in J, the difference mixes scales and produces a completely wrong result.

**Detection signal**

The calculated [[DeltaA]] is on the order of megajoules when kilojoules are expected, or joules when kilojoules are expected.

**Conceptual correction**

Before substituting, unify all magnitudes in the same unit system: either all in J and J/K, or all in kJ and kJ/K.

**Contrast mini-example**

For an isomerization with [[DeltaU]] of 5.2 kJ/mol and [[DeltaS]] of 12 J/(mol·K) at 298 K: subtracting 5200 J minus the product of 298 K by 12 J/K (giving 3576 J) yields the correct positive result. If [[DeltaU]] is erroneously used as 5.2 without conversion, the result has the wrong sign.

---

## Interpretation errors

### Error 1: Interpreting negative [[DeltaA]] as "heat release"

**Why it seems correct**

The student associates "negative free energy" with "the system releases energy to the surroundings", confusing [[DeltaA]] with heat exchanged. The term "free energy" suggests release.

**Why it is incorrect**

Negative [[DeltaA]] indicates the process is spontaneous and maximum non-expansion work can be extracted, but does not necessarily imply the system releases heat. An endothermic process (positive [[DeltaU]]) can be spontaneous if [[DeltaS]] is sufficiently positive to make [[DeltaA]] negative.

**Detection signal**

The student concludes "the process is exothermic because [[DeltaA]] is negative" without analyzing the sign of [[DeltaU]] separately.

**Conceptual correction**

[[DeltaA]] combines internal energy and entropy. A spontaneous process can absorb heat from the surroundings if the entropic gain compensates the energy cost. Analyze [[DeltaU]] and [[DeltaS]] separately before interpreting [[DeltaA]].

**Contrast mini-example**

The endothermic dissolution of ammonium nitrate in water inside a sealed calorimeter has positive [[DeltaU]] but very positive [[DeltaS]], resulting in negative [[DeltaA]]: the process is spontaneous although it cools the solution.

---

## Quick self-control rule

Before closing any Helmholtz problem, verify in this order:

1. Is the system at constant volume and temperature? If not, reconsider whether Helmholtz is the appropriate criterion.
2. Is [[T]] in kelvin? If the value is below 200, it is probably in Celsius.
3. Are [[DeltaU]] and [[DeltaS]] in coherent units (both in J or both in kJ)?
4. Is the sign of [[DeltaA]] consistent with the four-case table of [[DeltaU]] and [[DeltaS]] signs?
5. If [[T_inv]] was calculated, is it positive? If negative, review input signs.

If any check fails, the [[DeltaA]] result is unreliable and spontaneity interpretation must be postponed until the error is corrected.
