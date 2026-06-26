# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: hipotesis-fundamental
# Target response file: errores.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Fundamental Hypothesis

## Conceptual errors

### Error 1: Thinking equiprobability means no microscopic dynamics
**Why it seems correct**
It seems plausible because every microstate has the same [[probabilidad_microestado]].

**Why it is incorrect**
It is incorrect because the hypothesis assigns statistical weights, not frozen motion.

**Detection signal**
The student says that nothing happens microscopically.

**Conceptual correction**
Separate probability assignment from microscopic trajectory.

**Mini-example of contrast**
A gas may change microstate while the microcanonical distribution stays uniform.

### Error 2: Confusing a likely macrostate with a privileged microstate
**Why it seems correct**
A macrostate with large [[multiplicidad_macroestado]] appears more often.

**Why it is incorrect**
Each individual microstate still has the same probability.

**Detection signal**
The answer gives extra weight to one chosen microstate.

**Conceptual correction**
Add microstates when reading a macrostate; do not change individual weights.

**Mini-example of contrast**
A macrostate with 100 microstates beats one with 2 by counting, not favoritism.

## Model errors

### Error 3: Applying the hypothesis to a non-isolated system
**Why it seems correct**
It seems useful because many microstates still exist.

**Why it is incorrect**
If [[energia_total]] changes, the microcanonical model no longer fits.

**Detection signal**
Thermal exchange with the environment is present.

**Conceptual correction**
Use a canonical model when a heat bath matters.

**Mini-example of contrast**
A solid in a thermostat does not keep exactly fixed E.

### Error 4: Counting inaccessible microstates
**Why it seems correct**
It seems more complete to include every imaginable configuration.

**Why it is incorrect**
Only states compatible with [[energia_total]], [[volumen]], and [[numero_particulas]] count.

**Detection signal**
The count gives an inflated [[entropia]].

**Conceptual correction**
Define physical accessibility before counting.

**Mini-example of contrast**
An internal barrier can separate regions that do not communicate.

## Mathematical errors

### Error 5: Forgetting normalization
**Why it seems correct**
It seems enough to say all probabilities are equal.

**Why it is incorrect**
Probabilities must add to the full statistical population.

**Detection signal**
The probability sum is not one.

**Conceptual correction**
Apply {{f:normalizacion_microestados_accesibles}}.

**Mini-example of contrast**
With 50 microstates, each one cannot have probability 0.1.

### Error 6: Using macrostate Ω as total Ω
**Why it seems correct**
Both quantities count microstates.

**Why it is incorrect**
[[multiplicidad_macroestado]] belongs to one macrostate, not to the full accessible set.

**Detection signal**
The result gives a probability greater than one.

**Conceptual correction**
Distinguish [[multiplicidad_macroestado]] from [[numero_microestados_accesibles]].

**Mini-example of contrast**
A macrostate with 20 cases inside a total of 100 has probability 0.2.

## Interpretation errors

### Error 7: Reading entropy as visual disorder
**Why it seems correct**
It is a common introductory picture.

**Why it is incorrect**
[[entropia]] measures statistical multiplicity, not visual mess.

**Detection signal**
The explanation uses drawings without counting microstates.

**Conceptual correction**
Connect it to {{f:entropia_boltzmann_microcanonica}}.

**Mini-example of contrast**
Two visually similar systems may have different multiplicities.

### Error 8: Ignoring [[desbalance_probabilidad]]
**Why it seems correct**
Small probabilities can hide a bias.

**Why it is incorrect**
Imbalance indicates departure from equiprobability.

**Detection signal**
Some probabilities are repeatedly larger than others.

**Conceptual correction**
Use [[desbalance_probabilidad]] as an alarm.

**Mini-example of contrast**
If one microstate appears ten times more often than another, the ideal microcanonical assignment has failed.

## Quick self-control rule
Before accepting an answer, check that the system is isolated, [[numero_microestados_accesibles]] counts only compatible states, and every accessible [[probabilidad_microestado]] is normalized without unjustified [[desbalance_probabilidad]].

