## Conceptual errors


### Error 1: Confusing internal energy with heat or work

**Por qué parece correcto**
The student associates heating a system with increasing its energy, and realizes that performing work also requires energy consumption. Through an incorrect analogy with everyday mechanics, they tend to assume that heat and work are properties stored by the substance, confusing them with the accumulated internal energy.

**Por qué es incorrecto**
Heat and work are exclusively **energy in transit** that only exist during a physical transformation. It has no physical sense to say that a system possesses a certain amount of heat or work in a given state. On the contrary, internal energy is a **state function** that measures the thermal energy accumulated in molecular motions at a given instant.

**Señal de detección**
The student writes statements or poses algebraic equations where they directly add an amount of heat to the energy of the initial state to define a new state, without differentiating the transfer quantities from the state quantities.

**Corrección conceptual**
Internal energy is like the balance in a bank account (an accumulated property), while heat and work represent bank transfers (deposits and withdrawals). The balance changes due to the transfers, but it is not composed of individual deposits or withdrawals.

**Mini-ejemplo de contraste**
If an ideal gas performs a work of one hundred joules while absorbing exactly one hundred joules of heat from the surroundings, its change in internal energy is zero. Thinking that heat and internal energy are the same would force the conclusion that the system's internal energy increased by one hundred joules, violating the energy balance of the first law.

---

## Model errors

**Why it seems correct**

Check 1: In Internal Energy, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: Assuming that internal energy depends only on temperature in real gases

**Por qué parece correcto**
Since the classical ideal gas model establishes a direct relationship of proportionality between internal energy and absolute temperature, the student makes an overgeneralization, believing that this behavior is a universal property for any gaseous state of matter.

**Por qué es incorrecto**
In real gases, molecules exert attractive and repulsive forces on each other. This means that the real internal energy contains a molecular potential energy term that depends directly on the average distance between the particles and, therefore, on the **volume occupied by the gas**.

**Señal de detección**
The student asserts that the change in internal energy is zero in an expansion process at constant temperature for a dense real gas or at extremely high pressures.

**Corrección conceptual**
In a real gas, internal energy is a function of both temperature and volume. When expanding the gas, the distance between molecules increases, forcing the system to perform work against its own attractive cohesion forces, which modifies the internal energy even if the temperature remains constant.

**Mini-ejemplo de contraste**
In a free adiabatic Joule expansion for a real gas, the gas expands into a vacuum without performing external work or exchanging heat, so its change in internal energy must be strictly zero. If the internal energy depended only on temperature, temperature should not vary; however, experimentally, a cooling of the gas is observed, which proves that part of the kinetic energy was converted to potential energy due to the volume change.

---

## Mathematical errors

**Why it seems correct**

Check 6: In Internal Energy, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 3: Using the Celsius temperature scale instead of the absolute kelvin scale

**Por qué parece correcto**
Due to everyday familiarity with the Celsius scale in laboratories and school problems, the student performs a direct numerical substitution of the temperature value in Celsius without carrying out the prior conversion to the absolute scale.

**Por qué es incorrecto**
The definition of absolute internal energy in kinetic theory is based on the thermal motion of molecules, which theoretically ceases at absolute zero. Therefore, equations linking absolute energy require the use of the **absolute temperature in kelvins** to preserve direct mathematical proportionality.

**Señal de detección**
The student obtains a negative absolute internal energy value when performing calculations with temperatures below zero degrees Celsius, which lacks physical meaning for an absolute quantity.

**Corrección conceptual**
Before substituting any temperature value in thermodynamic formulas, the conversion constant of two hundred seventy-three point fifteen must be added to the value in degrees Celsius to obtain the corresponding temperature in the kelvin scale.

**Mini-ejemplo de contraste**
If one mole of helium gas is at ten degrees Celsius, calculating its absolute internal energy using the numerical value ten yields a positive result. If the temperature drops to minus ten degrees Celsius, substituting minus ten into the formula yields a negative absolute internal energy, which is physically impossible since molecular kinetic energy cannot be less than zero.

---

## Interpretation errors

**Why it seems correct**

Check 11: In Internal Energy, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 4: Restricting the use of constant-volume heat capacity to isochoric processes

**Por qué parece correcto**
Observing the subscript in the symbol of the constant-volume heat capacity, the student associates through semantic confusion that the formula is only applicable if the volume of the system remains constant throughout the process.

**Por qué es incorrecto**
For an ideal gas, the internal energy depends exclusively on temperature. Therefore, the change in internal energy between two given temperatures is identical regardless of whether the volume changes, remains constant, or undergoes any other intermediate physical transformation.

**Señal de detección**
The student attempts to calculate the change in internal energy in an expansion at constant pressure using the heat capacity at constant pressure instead of the coefficient at constant volume.

**Corrección conceptual**
The change in internal energy of an ideal gas is uniquely determined by the product of moles, the constant-volume heat capacity, and the temperature change, regardless of the path (isochoric, isobaric, or adiabatic) followed by the physical process.

**Mini-ejemplo de contraste**
If an ideal gas expands at constant pressure, absorbing heat and performing work, calculating its change in internal energy using the heat capacity at constant pressure yields a value higher than the real one. This breaks the coherence of the first law of thermodynamics, as the calculated internal energy change does not match the net difference between the input heat and the performed work.

---

## Quick self-control rule

To verify the validity of your internal energy results, apply this triple physical check:
- **Sign consistency**: Check that the change in internal energy and the change in temperature have exactly the same sign. If the system cools, the internal energy change must be negative; if it heats up, it must be positive.
- **Absolute zero validation**: Ensure that the absolute internal energy value of your initial and final states is strictly greater than zero. A zero or negative result immediately indicates that you have used the temperature in degrees Celsius instead of kelvins.
- **Cycle closure**: If the process described in the problem is a complete closed cycle, verify that the net internal energy change accumulated across all stages sums to exactly zero. If you obtain a non-zero value, review the temperature calculations at each vertex of the cycle.

**Why it seems correct**

Check 16: In Internal Energy, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.