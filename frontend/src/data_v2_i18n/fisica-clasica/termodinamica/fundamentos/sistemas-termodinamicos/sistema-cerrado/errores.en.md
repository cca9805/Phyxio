## Conceptual errors

### Error 1: Confusing heat with internal energy

**Description of the error:** The student writes that "the system has 800 J of heat" after absorbing 800 J, or that "the heat of the system increases" when it is heated.

**Why it occurs:** Everyday language uses "heat" to describe the state of an object ("that object has a lot of heat"), leading to the idea that heat is a property of the system state.

**Why it is incorrect:** Heat [[Q]] is not a property of the system state: it is energy in transit through the boundary. Once [[Q]] has crossed the boundary, it ceases to be heat and is stored as internal energy [[U]]. The system does not "have heat"; it has internal energy.

**Correction:** Heat is the transfer mechanism, not the stored property. After absorbing 800 J of heat, the system has 800 J more of internal energy (if there is no work), not 800 J of heat.

### Error 2: Inverting the sign convention for work

**Description of the error:** The student calculates that if the gas does 320 J of work and receives 800 J of heat, then [[DeltaU]] equals 800 J plus 320 J, obtaining 1120 J.

**Why it occurs:** The student adds everything without attending to the sign convention: if the system does work, it releases energy to the surroundings, so W must enter with a negative sign in IUPAC convention.

**Why it is incorrect:** With IUPAC convention, when the system does work on the surroundings, W is negative (the system loses energy). Adding 800 and 320 incorrectly implies that both mechanisms increase the system energy.

**Correction:** With IUPAC convention: [[DeltaU]] equals Q plus W, where W is negative when the system does work. For the example: [[DeltaU]] equals 800 J plus (minus 320 J), giving 480 J.

### Error 3: Believing that [[DeltaU]] depends on the thermodynamic path

**Description of the error:** The student calculates different [[DeltaU]] values for two processes leading from the same initial to the same final state by different paths, thinking that the final internal energy depends on how it was reached.

**Why it occurs:** Since [[Q]] and [[W]] do depend on the path, the student incorrectly generalizes and thinks [[DeltaU]] also depends on the path.

**Why it is incorrect:** [[DeltaU]] is a state function: its value depends only on the initial and final states, not on the path. Even if [[Q]] and [[W]] are completely different in two processes, their sum [[Q]] plus [[W]] is always the same if the end states are the same.

**Correction:** Mentally separate state functions (U, T, P, V, S) from process functions (Q, W). The former depend on state; the latter on path. [[DeltaU]] is a difference of a state function and is therefore path-independent.

## Model errors

### Error 4: Applying the closed system model when there is mass flow

**Description of the error:** The student uses the balance [[DeltaU]] equals [[Q]] plus [[W]] to analyze a steam boiler where liquid water enters and steam exits, obtaining incorrect results.

**Why it occurs:** The student recognizes that the boiler exchanges heat and work with the surroundings, leading them to think the closed system model applies. They do not identify mass flow as an additional relevant exchange.

**Why it is incorrect:** When there is mass flow through the boundary, the system is open and the energy balance must include the enthalpy flow terms of the entering and leaving streams. The closed system balance does not account for that energy transported by mass.

**Correction:** Always verify whether there is mass flow through the boundary before choosing the model. If the boundary is impermeable to matter, use the closed system; if there is mass flow, use the open system.

### Error 5: Confusing an adiabatic process with an isothermal process

**Description of the error:** The student states that in an adiabatic process for an ideal gas the temperature does not change, arguing that "if there is no heat, there is no temperature change."

**Why it occurs:** The student incorrectly associates "no heat" with "no temperature change," because in everyday experience heat is the usual mechanism of temperature change.

**Why it is incorrect:** In an adiabatic process, [[Q]] is zero but [[W]] can be non-zero. For an ideal gas compressed adiabatically, [[DeltaU]] equals [[W]] (positive in compression), corresponding to a temperature increase. The isothermal process, not the adiabatic one, maintains constant temperature.

**Correction:** Adiabatic means no heat exchange (zero [[Q]]), not no temperature change. Isothermal means constant temperature, which for an ideal gas implies zero [[DeltaU]].

## Mathematical errors

### Error 6: Sign error when solving for Q or W from the first law

**Description of the error:** When solving for [[Q]] from [[DeltaU]] equals [[Q]] plus [[W]], the student writes [[Q]] equals [[DeltaU]] plus [[W]] instead of [[Q]] equals [[DeltaU]] minus [[W]].

**Why it occurs:** When transposing, the student forgets to change the sign of the term moving to the other side of the equality.

**Why it is incorrect:** If [[DeltaU]] equals [[Q]] plus [[W]], then solving for [[Q]] gives [[Q]] equals [[DeltaU]] minus [[W]], not plus [[W]]. The sum moves to the other side as a subtraction.

**Correction:** Practice the algebraic solution of the first law equation in its three forms: [[DeltaU]] equals [[Q]] plus [[W]]; [[Q]] equals [[DeltaU]] minus [[W]]; [[W]] equals [[DeltaU]] minus [[Q]].

## Interpretation errors

### Error 7: Concluding that the second law is violated when the entropy of a closed system decreases

**Description of the error:** A closed system releases heat to the surroundings and its entropy decreases. The student concludes that the second law is violated because entropy has decreased.

**Why it occurs:** The student remembers that "entropy never decreases" but applies this statement to the system, not to the universe.

**Why it is incorrect:** The second law states that the entropy of the universe (system plus surroundings) never decreases. The entropy of a closed system can decrease if the system releases heat to the surroundings: the entropy of the surroundings increases by a greater amount, and the total sum is non-negative.

**Correction:** Always calculate the entropy change of the universe when verifying the second law: add the entropy change of the system and the entropy change of the surroundings. Only this total sum must be non-negative.

## Quick self-control rule

Before accepting any result with the first law in a closed system, verify:

1. Have I explicitly declared the sign convention (IUPAC or engineering)?
2. Does [[DeltaU]] minus [[Q]] minus [[W]] equal zero with correct signs? (With IUPAC convention where W is received work.)
3. Is the system boundary truly impermeable to matter? If there is mass flow, the model is not valid.
4. If [[DeltaU]] is zero, is it justified? (Only if the process is cyclic or isothermal for an ideal gas.)
5. If the system entropy decreases, have I verified that the entropy of the universe does not decrease?
