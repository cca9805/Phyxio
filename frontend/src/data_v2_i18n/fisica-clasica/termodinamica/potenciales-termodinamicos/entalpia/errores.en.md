## Conceptual errors

### Error 1: Applying the heat-equals-[[DeltaH]] identity in any process

**Why it seems correct**

The student learns that [[DeltaH]] is the heat of reaction and generalises this to all thermodynamic processes. Since most textbook problems use open vessels, the isobaric condition is almost always met and the student stops verifying it. The cognitive mechanism is **excessive generalisation** based on the most common problem context.

**Why it is incorrect**

The identity between heat and [[DeltaH]] is valid only when pressure remains constant throughout the process. In a rigid vessel (bomb calorimeter, sealed autoclave), volume is constant and the measured heat equals the change in internal energy [[U]], not [[DeltaH]]. Using [[DeltaH]] in that case ignores the expansion work term and produces incorrect results.

**Detection signal**

The problem statement mentions "closed vessel", "fixed volume", "bomb calorimeter", or "rigid container", but the student directly applies the heat-equals-[[DeltaH]] equivalence without verifying the pressure condition.

**Conceptual correction**

Before equating heat with [[DeltaH]], verify whether pressure or volume is the constant variable. Constant pressure (open vessel or free piston) means heat equals [[DeltaH]]. Constant volume (rigid vessel) means heat equals the change in internal energy [[U]].

**Contrast mini-example**

Combustion of one gram of glucose in a bomb calorimeter produces a measurable temperature rise. The calculated heat corresponds to [[U]], the internal energy change. If [[DeltaH]] is applied directly without the gas expansion correction, a slightly different value is obtained. For reactions with net gas production, the difference can amount to several kJ/mol.

---

## Model errors

### Error 1: Treating [[H]] as an absolute energy with direct meaning

**Why it seems correct**

The student sees in the definition that [[H]] is a sum of terms with energy units and assumes its absolute value has direct physical meaning, as kinetic energy or gravitational potential energy do. The analogy with those quantities reinforces the belief that "the system has so many joules of enthalpy".

**Why it is incorrect**

Enthalpy [[H]] is a state function and, like all extensive state functions, only its **differences** are operationally meaningful. The absolute value of [[H]] depends on the conventionally chosen reference state. Standard enthalpy of formation tables are precisely differences relative to that reference state (elements in their standard form at 298 K), not absolute [[H]] values.

**Detection signal**

The student states that "the system has an enthalpy of 500 kJ" without referring to any process or state change. Or they use the table value of standard formation enthalpy as if it were the total enthalpy of the compound.

**Conceptual correction**

Only [[DeltaH]] has direct physical meaning. The standard enthalpy of formation is the [[DeltaH]] of the formation process of the compound from its elements in their standard state. It is not the absolute enthalpy of the compound.

**Contrast mini-example**

The standard enthalpy of formation of liquid water is approximately minus 286 kJ/mol. This does not mean that water "has" minus 286 kJ/mol of enthalpy; it means that forming one mole of liquid water from gaseous hydrogen and oxygen releases 286 kJ to the surroundings under standard conditions.

---

## Mathematical errors

### Error 1: Inverting the sign in Hess's law when reversing a reaction

**Why it seems correct**

The student knows that reversing a reaction changes the sign of [[DeltaH]], but when building a Hess cycle with several steps they lose track of which are reversed and which are not. The mechanism is an **algebraic tracking error** when handling multiple signs simultaneously.

**Why it is incorrect**

Hess's law is an algebraic sum of [[DeltaH]] values for each step. Every step used in the reverse direction relative to the tabulated value must contribute with the opposite sign. If the sign of any step is forgotten, the final result will be in error by exactly twice the enthalpy of that step.

**Detection signal**

The [[DeltaH]] result has the wrong sign for the expected process type (for example, positive [[DeltaH]] for a combustion), or its value differs from the expected value by exactly twice the enthalpy of one of the steps.

**Conceptual correction**

When building a Hess cycle, explicitly note beside each step whether it is used in the forward or reverse direction, and adjust the sign of [[DeltaH]] accordingly. At the end, verify that all intermediate species cancel completely.

**Contrast mini-example**

To compute the enthalpy of formation of carbon monoxide using the combustion enthalpies of carbon and of carbon monoxide, the second reaction must be reversed. If the sign of that step is forgotten, the result has the opposite sign, incorrectly suggesting that CO formation is exothermic relative to the chosen reference.

---

## Interpretation errors

### Error 1: Confusing negative [[DeltaH]] with spontaneous process

**Why it seems correct**

The student remembers that "nature tends toward lower energy states" and concludes that if [[DeltaH]] is negative the process is spontaneous. This rule works approximately at low temperature and for many everyday cases, reinforcing the belief. The cognitive mechanism is **confusion between the enthalpic criterion and the full spontaneity criterion**.

**Why it is incorrect**

Spontaneity depends on the Gibbs free energy change, not on [[DeltaH]] alone. An endothermic process (positive [[DeltaH]]) can be spontaneous if entropy increases sufficiently. Dissolution of many salts in water is endothermic and spontaneous. At high temperature, the entropic term dominates and processes with positive [[DeltaH]] can be spontaneous.

**Detection signal**

The student concludes that a process with positive [[DeltaH]] is impossible or non-spontaneous without computing the entropy change or Gibbs free energy.

**Conceptual correction**

Negative [[DeltaH]] favours spontaneity but does not guarantee it. To determine spontaneity it is also necessary to know the entropy change and temperature, combining them in the Gibbs free energy criterion.

**Contrast mini-example**

Dissolving ammonium nitrate in water is strongly endothermic, which cools the solution. Yet the process is spontaneous at room temperature because the entropy increase upon dissolution is very large. A student who only looks at the sign of [[DeltaH]] would incorrectly conclude that dissolution is impossible.

---

## Quick self-control rule

Before accepting an [[DeltaH]] calculation as valid, check the following:

- **Process condition**: pressure must be constant to equate heat with [[DeltaH]]. If the vessel is rigid, the result is the internal energy change [[U]].
- **Sign consistent with process type**: combustions, strong acid-base neutralisations, and water formation must give negative [[DeltaH]].
- **Homogeneous units**: all formation enthalpy values must be in the same unit (J/mol or kJ/mol). A result in the megajoule-per-mole range for an ordinary chemical reaction signals a unit mix-up.
- **Hess's law verification**: confirm that all intermediate species cancel in the cycle before summing. If any species does not cancel, there is a coefficient or sign error.
- **Sign of reversed tabulated reactions**: each reaction used in the reverse direction relative to the table must contribute with the opposite sign to the tabulated value.
