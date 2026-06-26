# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: primera-ley-de-la-termodinamica
# Target response file: errores.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Common errors

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

## Mathematical errors

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

## Checklist

- The system boundary is defined.
- [[calor_intercambiado]] is positive entering and negative leaving.
- [[trabajo_sobre_sistema]] is positive if surroundings work on the system.
- All quantities use energy units.
- If the process is cyclic, [[variacion_energia_interna]] must be zero.

