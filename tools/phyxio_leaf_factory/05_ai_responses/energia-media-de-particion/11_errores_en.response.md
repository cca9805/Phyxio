# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: energia-media-de-particion
# Target response file: errores.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# mean energy derived from the partition function
## Conceptual errors
### Error 1: Treating [[energia_media]] as one real microstate
**Why it seems correct**
Since [[energia_media]] has energy units, it may look like the energy of one specific [[energia_microestado]].

**Why it is incorrect**
[[energia_media]] is a weighted canonical average. It can lie between allowed energy levels and need not correspond to any single microstate.

**Detection signal**
The answer lies between discrete levels and the student tries to identify the exact state with that energy.

**Conceptual correction**
Read [[energia_media]] as a collective statistical result, not as a microscopic label.

**Mini-example of contrast**
A two-level system may have an average between the lower and upper level.

### Error 2: Thinking [[temperatura]] only scales a formula
**Why it seems correct**
Temperature is often given as a number to substitute.

**Why it is incorrect**
[[temperatura]] reshapes the occupation of [[energia_microestado]] values through [[beta]] and [[funcion_particion]].

**Detection signal**
The student expects [[energia_media]] to change linearly whenever [[temperatura]] changes.

**Conceptual correction**
Interpret [[temperatura]] as control of the statistical distribution.

**Mini-example of contrast**
A small temperature change may do little when the energy gap is huge, but a comparable thermal scale changes occupations strongly.

## Model errors
### Error 3: Using the canonical model without equilibrium
**Why it seems correct**
The [[funcion_particion]] formula seems available whenever energies are listed.

**Why it is incorrect**
Without equilibrium there is no single stable [[temperatura]] or canonical [[beta]].

**Detection signal**
Data vary with time or position, but one fixed [[beta]] is used.

**Conceptual correction**
Check thermal equilibrium before applying {{f:funcion_particion_canonica}}.

**Mini-example of contrast**
A recently compressed gas is not equivalent to a system equilibrated with a thermal bath.

### Error 4: Truncating important states
**Why it seems correct**
High-energy states often look negligible.

**Why it is incorrect**
If their weights or degeneracies matter, they change [[funcion_particion]] and shift [[energia_media]].

**Detection signal**
Adding a few extra states changes the result substantially.

**Conceptual correction**
Include every state with non-negligible contribution.

**Mini-example of contrast**
A highly degenerate upper level can matter earlier than its energy alone suggests.

## Mathematical errors
### Error 5: Losing the minus sign in the beta derivative
**Why it seems correct**
[[derivada_log_particion_beta]] already has energy units.

**Why it is incorrect**
The standard relation gives [[energia_media]] as the negative of that slope.

**Detection signal**
A positive spectrum produces an unphysical negative mean energy.

**Conceptual correction**
Use {{f:energia_media_desde_derivada_beta}} and preserve the sign.

**Mini-example of contrast**
Increasing [[beta]] suppresses high energies; the slope of ln Z is negative, while the mean energy is positive.

### Error 6: Confusing the temperature derivative with the beta derivative
**Why it seems correct**
[[temperatura]] and [[beta]] describe the same thermal control.

**Why it is incorrect**
They are inverse variables, so changing between them introduces [[constante_boltzmann]] and temperature factors.

**Detection signal**
The final unit is not energy.

**Conceptual correction**
Use {{f:energia_media_desde_derivada_temperatura}} only with all thermal factors.

**Mini-example of contrast**
A slope versus T cannot replace a slope versus beta without conversion.

## Interpretation errors
### Error 7: Reading [[capacidad_calorifica]] as stored energy
**Why it seems correct**
It is introduced near [[energia_media]].

**Why it is incorrect**
[[capacidad_calorifica]] is a thermal slope, not an amount of energy.

**Detection signal**
The student compares J/K directly with J.

**Conceptual correction**
Read [[capacidad_calorifica]] as how fast [[energia_media]] changes with heating.

**Mini-example of contrast**
Two systems may have equal [[energia_media]] and different thermal slopes.

### Error 8: Ignoring the scale of [[constante_boltzmann]]
**Why it seems correct**
It looks like a tiny conversion constant.

**Why it is incorrect**
It sets the scale comparing [[temperatura]] with each [[energia_microestado]].

**Detection signal**
The calculation gives absurd per-particle energies.

**Conceptual correction**
Always compare E_i with k_B T through [[beta]].

**Mini-example of contrast**
At room temperature, 1e-21 J per particle is thermal; 1 J per particle is not.

## Quick self-control rule
Before accepting [[energia_media]], check energy units, derivative sign, positive [[beta]], enough microstates, and comparison with k_B T.

