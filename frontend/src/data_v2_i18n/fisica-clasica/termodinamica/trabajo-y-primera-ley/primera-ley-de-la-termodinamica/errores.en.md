## Conceptual errors


### Error 1: Believing the system contains heat

**Why it seems correct**

Everyday language says that a body "has heat". This suggests that [[calor_intercambiado]] is stored inside the system.

**Why it is incorrect**

The system contains internal energy. Heat is energy in transit because of a temperature difference. Once it crosses the boundary, it changes [[variacion_energia_interna]] or is compensated by [[trabajo_sobre_sistema]].

**Detection signal**

The student writes that internal heat increases instead of saying that internal energy increases.

**Conceptual correction**

Use [[calor_intercambiado]] for transfer and [[variacion_energia_interna]] for the change in the internal state.

**Contrast mini-example**

A gas can receive heat and expand while doing work. If all incoming energy leaves as work, [[variacion_energia_interna]] can be zero.

**Mini-example of contrast**

Check 1: In First Law of Thermodynamics, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

### Error 2: Mixing work conventions

**Why it seems correct**

Many books define work done by the system as positive. This leaf uses [[trabajo_sobre_sistema]] as positive when surroundings act on the system.

**Why it is incorrect**

The first-law expression changes when the convention changes. One cannot assign the same sign to expansion after defining compression work as positive.

**Detection signal**

The result predicts that an adiabatic compression cools the gas even though no heat leaves.

**Conceptual correction**

Before calculating, state whether the work is done on the system or by the system. In this leaf, positive external compression increases [[variacion_energia_interna]].

**Contrast mini-example**

If a piston compresses an insulated gas, [[calor_intercambiado]] is zero and [[trabajo_sobre_sistema]] is positive. Internal energy increases.

## Model errors

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

## Mathematical errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

### Error 3: Reversing final and initial states

**Why it seems correct**

The student remembers that two energies must be subtracted, but not which state comes first.

**Why it is incorrect**

[[variacion_energia_interna]] compares [[energia_interna_final]] with [[energia_interna_inicial]]. Reversing the order changes the sign and therefore the physical reading.

**Detection signal**

The calculation says the system loses energy while all data indicate net energy input.

**Conceptual correction**

Use the state-change definition before applying the balance:

{{f:definicion_variacion_energia_interna}}

**Contrast mini-example**

If the final state is above the initial state, the change must be positive. A negative result indicates reversed order or a wrong transfer sign.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

### Error 4: Mixing energy units

**Why it seems correct**

J and kJ values can look similar if the prefix is ignored.

**Why it is incorrect**

Adding [[calor_intercambiado]] and [[trabajo_sobre_sistema]] only makes sense when both are expressed in the same energy unit.

**Detection signal**

The result is a thousand times larger or smaller than the expected scale.

**Conceptual correction**

Convert everything to joules before applying the balance:

{{f:primera_ley_balance}}

**Contrast mini-example**

Adding 2 kJ and 300 J is not 302 J; first write 2000 J and 300 J, then add.

## Interpretation errors

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.

## Quick self-control rule

Check 6: In First Law of Thermodynamics, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

## Checklist

- The system boundary is defined.
- [[calor_intercambiado]] is positive entering and negative leaving.
- [[trabajo_sobre_sistema]] is positive if surroundings work on the system.
- All quantities use energy units.
- If the process is cyclic, [[variacion_energia_interna]] must be zero.

**Mini-example of contrast**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.